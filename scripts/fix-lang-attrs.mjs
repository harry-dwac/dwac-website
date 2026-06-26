#!/usr/bin/env node
/**
 * Postbuild: fix lang attributes, SEO meta tags for static export.
 * Injects: lang, canonical, hreflang (+x-default), og:type/url/locale,
 * twitter:card, JSON-LD (all pages), per-page OG title/desc from page content.
 *
 * v2 — 2026-06-26: Fix hreflang cross-referencing, canonical case, localized meta description, logo.png→og-image.png
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const OUT = 'out';
const SITE = 'https://www.dwac.net';

function getLangInfo(path) {
  if (path.startsWith('/zh-cn/')) return { lang: 'zh-CN', ogLocale: 'zh_CN', prefix: '/zh-cn' };
  if (path.startsWith('/zh-tw/')) return { lang: 'zh-TW', ogLocale: 'zh_TW', prefix: '/zh-tw' };
  return { lang: 'en', ogLocale: 'en_US', prefix: '' };
}

function fixLangAttr(html, lang) {
  return html.replace(/(<html[^>]*?lang\s*=\s*["'])[^"']*(["'])/, `$1${lang}$2`);
}

/**
 * Build canonical URL with LOWERCASE locale prefix.
 * e.g. /zh-cn/about/ → https://www.dwac.net/zh-cn/about/
 */
function makeCanonical(path, lang) {
  const clean = path.replace(/^\/zh-cn/, '').replace(/^\/zh-tw/, '').replace(/index\.html$/, '').replace(/\/$/, '') || '';
  const locale = lang === 'en' ? '' : '/' + lang.toLowerCase();
  return `${SITE}${locale}${clean}/`;
}

/**
 * Build hreflang links by deriving EN/CN/TW URLs from the page path.
 * This avoids cascading string-replace bugs from the old approach.
 */
function makeHreflangLinks(canonical, path, lang, content) {
  // Extract the "sub-path" after the locale prefix (e.g. /zh-cn/about/ → /about/)
  const subPath = path
    .replace(/^\/zh-cn/, '')
    .replace(/^\/zh-tw/, '')
    .replace(/\/$/, '') || '';

  // Build the three locale-specific URLs with lowercase paths
  const enC  = `${SITE}${subPath}/`;
  const cnC  = `${SITE}/zh-cn${subPath}/`;
  const twC  = `${SITE}/zh-tw${subPath}/`;

  const links =
    `  <link rel="alternate" hrefLang="x-default" href="${enC}"/>\n` +
    `  <link rel="alternate" hrefLang="en" href="${enC}"/>\n` +
    `  <link rel="alternate" hrefLang="zh-CN" href="${cnC}"/>\n` +
    `  <link rel="alternate" hrefLang="zh-TW" href="${twC}"/>\n` +
    `  <link rel="canonical" href="${canonical}"/>\n`;

  // Remove old hreflang and canonical tags
  content = content.replace(/<link[^>]*hrefLang=["'](?:en|zh-CN|zh-TW|x-default)["'][^>]*>/g, '');
  content = content.replace(/<link[^>]*rel=["']canonical["'][^>]*>/g, '');
  return content.replace(/(<\/head>)/, `${links}$1`);
}

function fixMetaFallback(content, lang) {
  const f = {
    en: "The world's first permanent international arbitration institution dedicated to resolving digital world disputes.",
    'zh-CN': '全球首个专注于数字世界纠纷解决的常设国际仲裁机构。',
    'zh-TW': '全球首個專注於數位世界糾紛解決的常設國際仲裁機構。',
  };
  if (!/<meta[^>]*name=["']description["'][^>]*>/.test(content)) {
    content = content.replace(/(<\/head>)/, `  <meta name="description" content="${f[lang] || f.en}"/>\n$1`);
  }
  return content;
}

function walkDir(dir) {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkDir(full));
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function extractPageTitle(html) {
  const m = html.match(/<title>([^<]*)<\/title>/);
  return m ? m[1].trim() : '';
}

function extractMetaDescription(html) {
  const m = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/);
  return m ? m[1].trim() : '';
}

// ---- MAIN ----
const files = walkDir(OUT);
console.log(`Processing ${files.length} HTML files...`);

const FALLBACKS = {
  en: { title: 'DWAC - Digital World Arbitration Centre', desc: "The world's first permanent international arbitration institution dedicated to resolving digital world disputes." },
  'zh-CN': { title: '数字世界仲裁中心 - DWAC', desc: '全球首个专注于数字世界纠纷解决的常设国际仲裁机构。' },
  'zh-TW': { title: '數位世界仲裁中心 - DWAC', desc: '全球首個專注於數位世界糾紛解決的常設國際仲裁機構。' },
};
const ORG_NAMES = { en: 'Digital World Arbitration Centre', 'zh-CN': '数字世界仲裁中心', 'zh-TW': '數位世界仲裁中心' };

for (const file of files) {
  const rel = '/' + file.replace(/\\/g, '/').replace(OUT, '').replace(/^\//, '').replace(/\/index\.html$/, '').replace(/index\.html$/, '').replace(/\/$/, '') || '/';
  const path = rel.endsWith('/') ? rel : rel + '/';
  const { lang, ogLocale } = getLangInfo(path);
  let html = readFileSync(file, 'utf-8');

  // 1. Fix lang
  html = fixLangAttr(html, lang);

  // 2. Canonical (lowercase locale)
  const canonical = makeCanonical(path, lang);

  // 3. Hreflang + canonical + x-default
  html = makeHreflangLinks(canonical, path, lang, html);

  // 4. Meta description fallback
  html = fixMetaFallback(html, lang);

  // 5. Per-page OG values
  const pageTitle = extractPageTitle(html);
  const pageDesc = extractMetaDescription(html);
  const fb = FALLBACKS[lang] || FALLBACKS.en;
  const ogTitle = pageTitle || fb.title;
  const ogDesc = pageDesc || fb.desc;

  // 6. Strip old OG/Twitter tags
  html = html.replace(/<meta[^>]*property=["']og:(?:title|description|type|url|locale)["'][^>]*>/g, '');
  html = html.replace(/<meta[^>]*name=["']twitter:[^"']*["'][^>]*>/g, '');

  // 7. Inject OG tags
  const ogBlock =
    `  <meta property="og:type" content="website"/>\n` +
    `  <meta property="og:url" content="${canonical}"/>\n` +
    `  <meta property="og:locale" content="${ogLocale}"/>\n` +
    `  <meta property="og:title" content="${ogTitle}"/>\n` +
    `  <meta property="og:description" content="${ogDesc}"/>\n`;
  html = html.replace(/(<\/head>)/, `${ogBlock}$1`);

  // 8. Inject Twitter Card
  const twBlock =
    `  <meta name="twitter:card" content="summary_large_image"/>\n` +
    `  <meta name="twitter:title" content="${ogTitle}"/>\n` +
    `  <meta name="twitter:description" content="${ogDesc}"/>\n`;
  html = html.replace(/(<\/head>)/, `${twBlock}$1`);

  // 9. Ensure og:image
  if (!html.includes('property="og:image"')) {
    html = html.replace(/(<\/head>)/,
      `  <meta property="og:image" content="${SITE}/og-image.png"/>\n` +
      `  <meta property="og:image:width" content="1200"/>\n` +
      `  <meta property="og:image:height" content="630"/>\n$1`);
  }

  // 10. Override English meta description on locale pages with localized version
  if (lang !== 'en') {
    const localizedDesc = (FALLBACKS[lang] || FALLBACKS.en).desc;
    html = html.replace(
      /(<meta[^>]*name=["']description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${localizedDesc}$2`
    );
    // Also override og:description and twitter:description
    html = html.replace(
      /(<meta[^>]*property=["']og:description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${localizedDesc}$2`
    );
    html = html.replace(
      /(<meta[^>]*name=["']twitter:description["'][^>]*content=["'])[^"']*(["'])/,
      `$1${localizedDesc}$2`
    );
  }

  // 11. JSON-LD for ALL pages (skip if already present)
  const hasLd = html.includes('application/ld+json');
  if (!hasLd) {
    const orgName = ORG_NAMES[lang] || ORG_NAMES.en;
    const isHome = path === '/' || path === '/zh-cn/' || path === '/zh-tw/';
    const isNews = path.includes('/news/');

    let schema;
    if (isHome) {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: orgName,
        url: SITE,
        logo: `${SITE}/og-image.png`,
        alternateName: 'DWAC',
        description: ogDesc,
      };
    } else if (isNews) {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: ogTitle,
        description: ogDesc,
        url: canonical,
        mainEntityOfPage: canonical,
      };
    } else {
      schema = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: ogTitle,
        description: ogDesc,
        url: canonical,
        isPartOf: { '@type': 'WebSite', name: orgName, url: SITE },
      };
    }
    const ldJson = `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>\n`;
    html = html.replace(/(<\/head>)/, `${ldJson}$1`);
  }

  writeFileSync(file, html, 'utf-8');
}

console.log('Done. Fixed lang attrs, canonical, hreflang (+x-default), OG tags, Twitter Cards, and JSON-LD for all pages.');
