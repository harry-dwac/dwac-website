# DWAC SEO 整改任务记录

**日期**: 2026-06-26
**状态**: ✅ 全部完成

---

## ✅ 已完成整改

### P0 - 严重问题（2026-06-26 完成）

- [x] **hreflang 标签全部修复**
  - EN 首页正确指向 zh-cn/zh-tw
  - ZH-CN 页面正确指向 en/zh-tw（修正了大写 URL）
  - ZH-TW 页面正确指向 en/zh-cn
  - 修复脚本: `scripts/fix-lang-attrs.mjs`
  - 推送: commit `5f79c749b`

- [x] **canonical URL 大小写修复**
  - ZH-CN 页面 canonical 从 `/zh-CN/` 修正为 `/zh-cn/`
  - ZH-TW 页面 canonical 从 `/zh-TW/` 修正为 `/zh-tw/`

- [x] **中文页面 meta description 本地化**
  - ZH-CN 页面 description → 中文
  - ZH-TW 页面 description → 繁体中文

- [x] **Google Search Console 验证成功**
  - HTML meta tag 验证方法
  - 验证码: `_STaEeru8O7Ef6K1hfQs8mt7HVtfIQrjF4M4QSj4ink`
  - 添加位置: `src/app/layout.tsx` metadata
  - 推送: commit `3ae0266b2f`
  - GSC 验证完成: 2026-06-26

### P1 - JSON-LD 结构化数据丰富化（2026-06-26 完成）

- [x] **首页三语** - Organization + WebSite (SearchAction) + LegalService
- [x] **新闻详情页** - NewsArticle + BreadcrumbList
- [x] **新闻列表页** - CollectionPage + BreadcrumbList
- [x] **仲裁员页面** - ProfilePage + BreadcrumbList
- [x] **其他页面** - WebPage + BreadcrumbList
- [x] **面包屑本地化** - ZH-CN「首页」/ ZH-TW「首頁」
- [x] **JSON-LD logo 引用** - 修正为 `og-image.png`（避免 404）
- 推送: commit `5f79c749b`（254 文件变更，+10001/-1269 行）

---

## ⚠️ 仍需关注（非阻塞）

- **logo.png 404** - 引用路径问题，视觉非阻塞（og-image.png 正常）
- **manifest.json 404** - PWA 相关，非核心 SEO 因子
- **Google 搜索收录** - 新站正常，GSC 需 1-2 天收集数据后可见
- **googlee0a6928b1217a5bc.html** - Next.js 静态导出冲突，但 GSC meta tag 验证已成功，无需此文件

---

## 📊 推送记录

| Commit | 描述 |
|--------|------|
| `5f79c749b` | fix: hreflang, canonical, meta desc, JSON-LD enrichment（254 文件）|
| `3ae0266b2f` | chore: add GSC verification meta tag |
| `805a21e19` | chore: add GSC HTML verification file（需删除，验证已通过）|

## 🔗 验证链接

- **GSC 仪表板**: https://search.google.com/search-console/settings/ownership?resource_id=https://www.dwac.net/
- **Sitemap**: https://www.dwac.net/sitemap.xml
- **robots.txt**: https://www.dwac.net/robots.txt
