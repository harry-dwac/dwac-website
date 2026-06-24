/**
 * Post-build script to fix SEO attributes in exported pages:
 * - lang attributes: zh-cn → zh-CN, zh-tw → zh-TW, EN → en
 * - canonical URLs: each page gets its own canonical
 * - hreflang alternate links: all three languages
 * - Open Graph locale tags
 * - Organization JSON-LD on homepages
 */
import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';
import { glob } from 'glob';

const outDir = resolve('./out');
const BASE = 'https://www.dwac.net';

function getLangInfo(filepath) {
  if (filepath.includes('/zh-cn/')) {
    return { lang: 'zh-CN', ogLocale: 'zh_CN', langDir: 'zh-CN' };
  } else if (filepath.includes('/zh-tw/')) {
    return { lang: 'zh-TW', ogLocale: 'zh_TW', langDir: 'zh-TW' };
  } else {
    return { lang: 'en', ogLocale: 'en_US', langDir: 'en' };
  }
}

function getPagePath(filepath) {
  // filepath looks like /.../out/about/index.html or /.../out/zh-cn/index.html
  let p = filepath.replace(outDir + '/', '').replace(/\/index\.html$/, '').replace(/\.html$/, '');
  return '/' + p;
}

function makeCanonical(filepath) {
  const raw = filepath.replace(outDir + '/', '').replace(/\.html$/, '').replace(/\/index$/, '').replace(/^index$/, '');
  const path = raw === '' ? '/' : '/' + raw;
  return BASE + path + (path === '/' ? '' : '/');
}

function makeHreflangLinks(filepath) {
  const raw = filepath.replace(outDir + '/', '').replace(/\.html$/, '').replace(/\/index$/, '').replace(/^index$/, '');
  const path = raw === '' ? '/' : '/' + raw;
  // Strip language prefix from path to get the content path
  const contentPath = path.replace(/^\/(zh-cn|zh-tw)/, '');
  const enHref = BASE + (contentPath === '/' ? '/' : contentPath) + (contentPath === '/' ? '' : '/');
  const zhcnHref = BASE + '/zh-cn' + (contentPath === '/' ? '' : contentPath) + '/';
  const zhtwHref = BASE + '/zh-tw' + (contentPath === '/' ? '' : contentPath) + '/';
  return [
    `<link rel="alternate" hreflang="en" href="${enHref}"/>`,
    `<link rel="alternate" hreflang="zh-CN" href="${zhcnHref}"/>`,
    `<link rel="alternate" hreflang="zh-TW" href="${zhtwHref}"/>`,
  ].join('\n    ');
}

const JSON_LD_EN = JSON.stringify({
  "@context": "https://schema.org", "@type": "Organization",
  "name": "Digital World Arbitration Center", "alternateName": "DWAC",
  "url": BASE, "logo": `${BASE}/icon.png`,
  "description": "The world's first permanent international arbitration institution dedicated to resolving digital world disputes.",
  "email": "secretary@dwac.net", "foundingDate": "2025",
}, null, 2);

const JSON_LD_ZHCN = JSON.stringify({
  "@context": "https://schema.org", "@type": "Organization",
  "name": "数字世界仲裁中心", "alternateName": "DWAC",
  "url": `${BASE}/zh-cn`, "logo": `${BASE}/icon.png`,
  "description": "首个专注于解决数字世界纠纷的永久性国际仲裁机构。",
  "email": "secretary@dwac.net", "foundingDate": "2025",
}, null, 2);

const JSON_LD_ZHTW = JSON.stringify({
  "@context": "https://schema.org", "@type": "Organization",
  "name": "數位世界仲裁中心", "alternateName": "DWAC",
  "url": `${BASE}/zh-tw`, "logo": `${BASE}/icon.png`,
  "description": "首個專注於解決數位世界糾紛的永久性國際仲裁機構。",
  "email": "secretary@dwac.net", "foundingDate": "2025",
}, null, 2);

async function fixFile(filepath) {
  let content = await readFile(filepath, 'utf-8');
  const { lang, ogLocale } = getLangInfo(filepath);
  let changed = false;

  // Fix <html lang="..."> - add if missing, replace if present
  if (/<html[^>]*lang="[^"]*"[^>]*>/.test(content)) {
    content = content.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${lang}"`);
    changed = true;
  } else if (/<html[^>]+\>/.test(content)) {
    // No lang attribute - inject it into the <html> tag (e.g. error pages)
    content = content.replace(/(<html)([^>]+)(\>)/, `$1$2 lang="${lang}"$3`);
    changed = true;
  }

  // Fix or inject og:locale (Next.js doesn't generate it, so always inject)
  if (/<meta property="og:locale"[^>]*content="[^"]*"[^>]*>/.test(content)) {
    content = content.replace(
      /<meta property="og:locale"[^>]*content="[^"]*"/,
      `<meta property="og:locale" content="${ogLocale}"`
    );
    changed = true;
  } else {
    // og:locale not present at all (Next.js doesn't generate it) - inject it
    const ogLocaleTag = `<meta property="og:locale" content="${ogLocale}"/>`;
    content = content.replace(
      /(<meta property="og:title"[^>]*>)/,
      ogLocaleTag + '\n  $1'
    );
    changed = true;
  }

  // Fix or inject canonical
  const canonical = makeCanonical(filepath);
  if (/<link rel="canonical"[^>]+>/.test(content)) {
    content = content.replace(/<link rel="canonical"[^>]+>/, `<link rel="canonical" href="${canonical}"/>`);
    changed = true;
  } else {
    // Inject after <title> or first <meta>
    content = content.replace(/(<title[^>]*>.*?<\/title>)/s, `$1\n    <link rel="canonical" href="${canonical}"/>`);
    changed = true;
  }

  // Fix or inject hreflang alternates
  const hreflangBlock = makeHreflangLinks(filepath);
  if (/<link rel="alternate" hreflang="en"[^>]+>/.test(content)) {
    content = content.replace(/<link rel="alternate" hreflang="en"[^>]+>[\s\S]*?<\/head>/,
      `${hreflangBlock}\n  </head>`);
    changed = true;
  } else {
    content = content.replace(/(<\/head>)/, `${hreflangBlock}\n  $1`);
    changed = true;
  }

  // Inject og:image if missing
  if (!content.includes('og:image')) {
    content = content.replace(/(<\/head>)/, `  <meta property="og:image" content="${BASE}/og-image.png"/>\n  <meta property="og:image:width" content="1200"/>\n  <meta property="og:image:height" content="630"/>\n  $1`);
    changed = true;
  }

  // Fix or inject og:title with localized content
  const ogTitleMap = {
    'zh-CN': '数字世界仲裁中心 - DWAC',
    'zh-TW': '數位世界仲裁中心 - DWAC',
    'en': 'DWAC - Digital World Arbitration Centre',
  };
  const ogDescMap = {
    'zh-CN': '首个专注于解决数字世界纠纷的永久性国际仲裁机构。',
    'zh-TW': '首個專注於解決數位世界糾紛的永久性國際仲裁機構。',
    'en': "The world's first permanent international arbitration institution dedicated to resolving digital world disputes.",
  };
  const localTitle = ogTitleMap[lang] || ogTitleMap['en'];
  const localDesc = ogDescMap[lang] || ogDescMap['en'];

  if (/<meta property="og:title"[^>]*content="[^"]*"[^>]*>/.test(content)) {
    content = content.replace(
      /<meta property="og:title"[^>]*content="[^"]*"/,
      `<meta property="og:title" content="${localTitle}"`
    );
    changed = true;
  }
  if (/<meta property="og:description"[^>]*content="[^"]*"[^>]*>/.test(content)) {
    content = content.replace(
      /<meta property="og:description"[^>]*content="[^"]*"/,
      `<meta property="og:description" content="${localDesc}"`
    );
    changed = true;
  }
  if (!content.includes('og:title')) {
    content = content.replace(/(<\/head>)/, `  <meta property="og:title" content="${localTitle}"/>\n  <meta property="og:description" content="${localDesc}"/>\n  $1`);
    changed = true;
  }

  // Inject JSON-LD into homepages
  const relPath = filepath.replace(outDir + '/', '').replace(outDir, '');
  const isHomepage = relPath === 'index.html' || relPath === 'zh-cn/index.html' || relPath === 'zh-tw/index.html';
  if (isHomepage && !content.includes('application/ld+json')) {
    const ldJson = relPath === 'zh-cn/index.html' ? JSON_LD_ZHCN
      : relPath === 'zh-tw/index.html' ? JSON_LD_ZHTW : JSON_LD_EN;
    content = content.replace('</head>', `\n  <script type="application/ld+json">\n${ldJson}\n  </script>\n  </head>`);
    changed = true;
  }

  if (changed) {
    await writeFile(filepath, content, 'utf-8');
    const shortPath = filepath.replace(outDir, '');
    console.log(`Fixed: ${shortPath}`);
  }
}

async function main() {
  const files = await glob('**/*.html', { cwd: outDir, absolute: true });
  await Promise.all(files.map(fixFile));
  console.log(`\n✅ Fixed SEO attributes in ${files.length} HTML files`);
}

main().catch(console.error);
