#!/usr/bin/env node
/**
 * postbuild.js - Fix html lang for locale pages after static export.
 * Replaces lang="en" with lang="zh-CN" in out/zh-cn/ and lang="zh-TW" in out/zh-tw/.
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const mappings = [
  { dir: 'zh-cn', lang: 'zh-CN' },
  { dir: 'zh-tw', lang: 'zh-TW' },
];

let fixed = 0;

for (const { dir, lang } of mappings) {
  const localeDir = path.join(outDir, dir);
  if (!fs.existsSync(localeDir)) {
    console.log('Skip: ' + localeDir + ' not found');
    continue;
  }

  function walk(d) {
    const entries = fs.readdirSync(d, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(d, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name.endsWith('.html')) {
        let html = fs.readFileSync(full, 'utf8');
        if (html.includes('lang="en"')) {
          html = html.replace(/<html\s+lang="en"/, '<html lang="' + lang + '"');
          fs.writeFileSync(full, html, 'utf8');
          fixed++;
        }
      }
    }
  }

  walk(localeDir);
}

console.log('Fixed lang in ' + fixed + ' HTML files');
