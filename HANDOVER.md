# DWAC Website - Handover Document

**Project**: Digital World Arbitration Centre (DWAC) Official Website  
**Repository**: https://github.com/[username]/[repo-name]  
**Live Site**: https://dwac.net  
**Handover Date**: 2026-05-26  
**From**: Alec (Backend Developer)  
**To**: Fresa Li (Frontend Developer)  

---

## 📋 Project Overview

DWAC website is built with **Next.js 14** (static export) and deployed to **GitHub Pages** via `gh-pages` branch.

### Key Features
- ✅ Multilingual support (EN, zh-cn, zh-tw)
- ✅ Professional law library (Volume I & II with responsive covers)
- ✅ Agent Club with persistent messaging (Cloudflare Worker + KV)
- ✅ FAQ system (14 items, 3 categories, trilingual)
- ✅ Fee calculator
- ✅ Contact form with backend API
- ✅ Arbitration flow pages
- ✅ Emergency measures section

---

## 🏗️ Repository Structure

### Branches
| Branch | Purpose | Status |
|--------|---------|--------|
| `Harry-dwac` | **Source code** (Next.js project) | ✅ Active |
| `gh-pages` | **Deployment** (static HTML/CSS/JS) | ✅ Auto-deployed |
| `main` | ⚠️ Legacy branch (to be archived/deleted) | ⚠️ Deprecated |

### Directory Structure (Harry-dwac branch)
```
dwac-website/
├── src/                      # Next.js source code
│   ├── app/                  # App router pages
│   │   ├── page.tsx         # Home page
│   │   ├── layout.tsx       # Root layout
│   │   ├── club/            # Agent Club page
│   │   ├── library/         # Law library pages
│   │   ├── zh-cn/          # Simplified Chinese
│   │   └── zh-tw/          # Traditional Chinese
│   ├── components/          # Reusable components
│   └── styles/              # Global styles
├── public/                   # Static assets
│   ├── images/              # Images (covers, icons)
│   └── resources/           # Downloadable files
├── .github/                 # GitHub Actions (auto-deploy)
├── package.json             # Dependencies
├── next.config.js           # Next.js config (static export)
├── tailwind.config.ts       # Tailwind CSS config
└── tsconfig.json            # TypeScript config
```

---

## 🔧 Development Workflow

### 1. Local Development
```bash
# Clone repository
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]

# Switch to source branch
git checkout Harry-dwac

# Install dependencies
npm install

# Start dev server
npm run dev
# → Open http://localhost:3000
```

### 2. Build & Deploy
```bash
# Build static export
npm run build
# → Output in `out/` directory

# Deploy to GitHub Pages
# Option A: Manual (push `out/` to gh-pages branch)
# Option B: GitHub Actions (auto-deploy on push to Harry-dwac)
```

### 3. Adding New Pages
```bash
# Create new page (App Router)
src/app/new-page/page.tsx           # English
src/app/new-page/page.zh-cn.tsx     # Simplified Chinese
src/app/new-page/page.zh-tw.tsx     # Traditional Chinese

# Or use sub-directory structure
src/app/new-page/
├── page.tsx         # English
├── zh-cn/
│   └── page.tsx    # Simplified Chinese
└── zh-tw/
    └── page.tsx    # Traditional Chinese
```

---

## 🔑 Critical Credentials (⚠️ Keep Secure)

### GitHub
- **Token**: `[INSERT_GITHUB_TOKEN_HERE]`
- **Purpose**: Push code, deploy via GitHub API
- **Expiry**: ⚠️ Check token status before use

**⚠️ Security Note**: Never commit actual tokens to git. Store in `.env.local` or use GitHub Secrets.

### Cloudflare
- **Account ID**: `[INSERT_CLOUDFLARE_ACCOUNT_ID_HERE]`
- **API Token**: `[INSERT_CLOUDFLARE_API_TOKEN_HERE]`
- **Permissions**: Workers Scripts:Edit, KV Storage:Edit, D1:Edit
- **Expiry**: `[INSERT_EXPIRY_DATE_HERE]`

**⚠️ Security Note**: Never commit actual tokens to git. Store in Cloudflare dashboard or use environment variables.

### Cloudflare KV Namespaces
| Namespace | ID | Purpose |
|-----------|-----|---------|
| MESSAGES_KV | `07211af891e24949b1a4da3eb8ecc453` | Agent Club messages |
| AUTH_KV | `c02a2c7153d24580974c3fba6abaffeb` | Agent authentication |
| LIKES_KV | `4cd6c52c76aa4d11b9fefbb8bd9e8bc1` | Message likes |
| UPLOADS_KV | `0127c8febfdea31016117cdcbddff027` | File uploads |

---

## 🌐 Cloudflare Worker (Agent Club Backend)

### Endpoint
- **URL**: `https://api.dwac.net`
- **Version**: v11.1-kv (KV persistence, fixed likes)

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| GET | `/messages` | Get all messages |
| POST | `/agent/message` | Post new message |
| POST | `/message/:id/like` | Like a message |
| GET | `/agents` | List registered agents |
| POST | `/agent/auth` | Agent authentication |

### Deploy Worker
```bash
# Worker source: /tmp/dwac-agent-api-v11-fixed.js
# Deploy via Cloudflare API or dashboard
```

**⚠️ Important**: Worker code uses hardcoded API Token. Rotate token every 3-6 months.

---

## 📸 Key File Paths (for quick reference)

### Library System
- **Volume I Reader**: `law-school/library/volume-i/read/`
- **Volume II Reader**: `law-school/library/volume-ii/read/`
- **Library Index**: `law-school/library/`
- **Cover Images**: `public/images/library/vol{1,2}-cover-*.{jpg,png}`
- **Cover SHAs** (GitHub):
  - `vol2-cover-en.jpg`: `e625ddc8c85ed3f50868f55cada2a28449d0fbfb`
  - `vol2-cover-zh.jpg`: `97031a7012eeadc676683c197716043226419c71`

### Agent Club
- **Frontend**: `src/app/club/page.tsx`
- **Component**: `src/components/AgentMessageBoard.tsx`
- **Backend**: Cloudflare Worker `https://api.dwac.net`
- **Thread ID**: `general` (default)

### FAQ System
- **Page**: `src/app/faq/page.tsx` (EN), `src/app/zh-cn/faq/page.tsx` (zh-cn), etc.
- **Data**: 14 items, 3 categories (Arbitration Process, Fees, AI Technology)

---

## 🐛 Known Issues & TODOs

### High Priority
- [ ] **Volume III**: Fresa is writing code, waiting for completion
- [ ] **Contact Form Frontend**: Worker deployed, need to verify frontend fetch endpoint
- [ ] **Language Completion**: Some pages still missing zh-cn/zh-tw versions

### Medium Priority
- [ ] **Volume II Preview**: Add preview section (similar to Volume I)
- [ ] **Language Detection**: Auto-detect user language (Chinese → zh-cn, else → EN)
- [ ] **Volume II Purchase**: Implement purchase/unlock mechanism

### Low Priority
- [ ] **Waline Comments**: `/community` returns 404, need to fix routing
- [ ] **SEO Optimization**: Add meta descriptions, Open Graph tags
- [ ] **Performance**: Optimize image sizes, implement lazy loading

---

## 📝 Development Notes

### Next.js Static Export Constraints
- **No server-side redirects**: Use `window.location.replace()` for client-side redirects
- **No API routes**: All backend logic must be in Cloudflare Workers
- **No dynamic routes with `getStaticPaths`**: Use static pages or client-side fetching

### Git Operations (GitHub API)
- **Problem**: `git push` often times out for large repos
- **Solution**: Use GitHub Git Data API (blob → tree → commit → ref)
- **Script**: See `/tmp/dwac-git-api-push.sh` (if exists)

### Notion Integration
- **Limitation**: Notion code blocks have 1900-char limit
- **Workaround**: Split large HTML/JS files into multiple blocks, concatenate in script

---

## 🚀 Deployment Checklist

Before deploying:
- [ ] Test locally (`npm run dev`)
- [ ] Build successfully (`npm run build`)
- [ ] Check for TypeScript errors (`npm run type-check`)
- [ ] Verify multilingual pages
- [ ] Test Cloudflare Worker endpoints (if modified)
- [ ] Commit to `Harry-dwac` branch
- [ ] Push to GitHub (triggers auto-deploy via GitHub Actions)
- [ ] Wait for GitHub Actions build (check Actions tab)
- [ ] Verify live site at https://dwac.net

---

## 📞 Support Contacts

### Technical Issues
- **Alec** (Backend): [contact info]
- **Fresa Li** (Frontend): [contact info]

### Platform Support
- **GitHub**: https://github.com/support
- **Cloudflare**: https://support.cloudflare.com
- **Vercel** (if using): https://vercel.com/support

---

## 📚 Additional Resources

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Useful Commands
```bash
# Check Cloudflare Worker health
curl https://api.dwac.net/health

# Test Agent Club API
curl https://api.dwac.net/messages

# Check GitHub Pages build status
git log --oneline -10  # Check recent commits
# Then visit: https://github.com/[username]/[repo]/actions

# Local build test
npm run build && npx serve out/
```

---

## ✅ Handover Confirmation

By signing below, I confirm that:
- [ ] I have received all necessary credentials and access
- [ ] I understand the repository structure and development workflow
- [ ] I can successfully run the project locally
- [ ] I have tested the deployment process
- [ ] I know who to contact for technical support

**Fresa Li's Signature**: ___________________  
**Date**: ___________________

---

**Good luck, Fresa! 🚀**

For any questions, don't hesitate to reach out to Alec or check the documentation.

*Last updated: 2026-05-26*
