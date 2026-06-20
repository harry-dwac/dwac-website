/**
 * Post-build script to fix HTML lang attributes in exported pages.
 * - zh-cn pages → lang="zh-CN"
 * - zh-tw pages → lang="zh-TW"
 * - EN pages → lang="en"
 * Also adds missing Open Graph locale tags and Organization JSON-LD to homepages.
 */
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, extname, resolve } from 'path';
import { glob } from 'glob';

const outDir = resolve('./out');

const JSON_LD_EN = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Digital World Arbitration Center",
  "alternateName": "DWAC",
  "url": "https://www.dwac.net",
  "logo": "https://www.dwac.net/icon.png",
  "description": "The world's first permanent international arbitration institution dedicated to resolving digital world disputes. Professional, efficient, and globally enforceable arbitration services.",
  "email": "secretary@dwac.net",
  "foundingDate": "2025",
}, null, 2);

const JSON_LD_ZHCN = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "数字世界仲裁中心",
  "alternateName": "DWAC",
  "url": "https://www.dwac.net/zh-cn",
  "logo": "https://www.dwac.net/icon.png",
  "description": "首个专注于解决数字世界纠纷的永久性国际仲裁机构。专业、高效、全球可执行的仲裁服务。",
  "email": "secretary@dwac.net",
  "foundingDate": "2025",
}, null, 2);

const JSON_LD_ZHTW = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "數位世界仲裁中心",
  "alternateName": "DWAC",
  "url": "https://www.dwac.net/zh-tw",
  "logo": "https://www.dwac.net/icon.png",
  "description": "首個專注於解決數位世界糾紛的永久性國際仲裁機構。專業、高效、全球可執行的仲裁服務。",
  "email": "secretary@dwac.net",
  "foundingDate": "2025",
}, null, 2);

async function fixFile(filepath) {
  let content = await readFile(filepath, 'utf-8');
  
  let newLang, newOgLocale;
  if (filepath.includes('/zh-cn/')) {
    newLang = 'zh-CN';
    newOgLocale = 'zh_CN';
  } else if (filepath.includes('/zh-tw/')) {
    newLang = 'zh-TW';
    newOgLocale = 'zh_TW';
  } else {
    newLang = 'en';
    newOgLocale = 'en_US';
  }
  
  // Replace existing lang attribute
  let changed = false;
  if (/<html[^>]*lang="[^"]*"[^>]*>/.test(content)) {
    content = content.replace(/<html([^>]*)lang="[^"]*"/, `<html$1lang="${newLang}"`);
    changed = true;
  }
  
  // Fix og:locale:content if it exists
  if (/<meta property="og:locale"[^>]*content="[^"]*"[^>]*>/.test(content)) {
    content = content.replace(
      /<meta property="og:locale"[^>]*content="[^"]*"/,
      `<meta property="og:locale" content="${newOgLocale}"`
    );
    changed = true;
  }
  
  // Inject JSON-LD into homepages
  const relPath = filepath.replace(outDir + '/', '').replace(outDir, '');
  const isHomepage = relPath === 'index.html' || relPath === 'zh-cn/index.html' || relPath === 'zh-tw/index.html';
  let ldInjected = false;
  if (isHomepage && !content.includes('application/ld+json')) {
    const ldJson = (relPath === 'zh-cn/index.html') ? JSON_LD_ZHCN
      : (relPath === 'zh-tw/index.html') ? JSON_LD_ZHTW
      : JSON_LD_EN;
    const ldScript = `\n  <script type="application/ld+json">\n${ldJson}\n  </script>`;
    content = content.replace('</head>', `${ldScript}\n  </head>`);
    ldInjected = true;
    changed = true;
  }

  if (changed) {
    await writeFile(filepath, content, 'utf-8');
    const msg = `Fixed: ${filepath} → lang="${newLang}"${ldInjected ? ' + JSON-LD' : ''}`;
    console.log(msg);
  }
}

async function main() {
  const files = await glob('**/*.html', { cwd: outDir, absolute: true });
  await Promise.all(files.map(fixFile));
  console.log(`\n✅ Fixed lang attributes in ${files.length} HTML files`);
}

main().catch(console.error);
