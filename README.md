# DWAC Website

**Digital World Arbitration Centre (DWAC)** - The first permanent international arbitration institution dedicated to resolving digital world disputes.

**Live Site**: https://dwac.net  
**Repository**: https://github.com/[username]/[repo-name]  
**Handover Document**: See [HANDOVER.md](./HANDOVER.md)

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/[username]/[repo-name].git
cd [repo-name]

# Switch to source branch
git checkout Harry-dwac

# Install dependencies
npm install

# Start development server
npm run dev
# → Open http://localhost:3000
```

---

## 📂 Project Structure

```
dwac-website/
├── src/                          # Next.js source code
│   ├── app/                      # App router (Next.js 14)
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Home page (EN)
│   │   ├── layout.zh-cn.tsx    # Simplified Chinese layout
│   │   ├── layout.zh-tw.tsx    # Traditional Chinese layout
│   │   ├── club/                # Agent Club page
│   │   ├── library/             # Law library (Volume I & II)
│   │   ├── faq/                 # FAQ page (14 items, 3 categories)
│   │   ├── zh-cn/              # Simplified Chinese pages
│   │   ├── zh-tw/              # Traditional Chinese pages
│   │   └── ...                 # Other pages
│   ├── components/              # Reusable React components
│   │   ├── Navbar.tsx          # English navigation
│   │   ├── NavbarZhCn.tsx     # Simplified Chinese navigation
│   │   ├── NavbarZhTw.tsx     # Traditional Chinese navigation
│   │   ├── Footer.tsx          # English footer
│   │   └── ...                 # Other components
│   └── styles/                  # Global styles
├── public/                      # Static assets (served as /)
│   ├── images/                  # Images (covers, icons, etc.)
│   │   └── library/            # Book cover images (responsive)
│   └── resources/              # Downloadable files (papers, publications)
├── .github/                     # GitHub Actions (auto-deploy)
│   └── workflows/
│       └── deploy.yml          # Auto-build & deploy to gh-pages
├── package.json                 # Dependencies
├── next.config.js               # Next.js config (static export)
├── tailwind.config.ts          # Tailwind CSS config
├── tsconfig.json               # TypeScript config
├── .gitignore                  # Git ignore rules
├── README.md                   # This file
└── HANDOVER.md                 # Handover document (for Fresa Li)
```

---

## 🌐 Multilingual Support

The site supports **3 languages**:
- **English** (default) - `/`
- **Simplified Chinese** - `/zh-cn/`
- **Traditional Chinese** - `/zh-tw/`

### Adding a New Page (Multilingual)

**Option A: Same directory (recommended)**
```bash
src/app/new-page/
├── page.tsx             # English
├── page.zh-cn.tsx      # Simplified Chinese
└── page.zh-tw.tsx      # Traditional Chinese
```

**Option B: Sub-directory structure**
```bash
src/app/new-page/
├── page.tsx             # English
├── zh-cn/
│   └── page.tsx        # Simplified Chinese
└── zh-tw/
    └── page.tsx        # Traditional Chinese
```

---

## 🛠️ Development Workflow

### 1. Local Development

```bash
# Install dependencies
npm install

# Start dev server (hot reload)
npm run dev
# → http://localhost:3000
```

### 2. Build (Static Export)

```bash
# Build static export
npm run build
# → Output: out/ directory

# Test production build locally
npx serve out/
# → http://localhost:3000
```

### 3. Deploy to GitHub Pages

**Automatic (Recommended)**:
- Push to `Harry-dwac` branch
- GitHub Actions automatically builds and deploys to `gh-pages` branch
- Live site updates in ~2-3 minutes

**Manual**:
```bash
# Build
npm run build

# Push to gh-pages branch
git checkout gh-pages
cp -r out/* ./
git add -A
git commit -m "deploy: update site"
git push origin gh-pages
git checkout Harry-dwac
```

---

## 🔧 Key Features

### 1. Professional Law Library
- **Volume I**: Deployed ✅
- **Volume II**: Deployed ✅ (responsive cover images)
- **Volume III**: In progress (Fresa Li writing code)

**File Paths**:
- Reader: `law-school/library/volume-{i,ii}/read/`
- Index: `law-school/library/`
- Covers: `public/images/library/vol{1,2}-cover-*.{jpg,png}`

### 2. Agent Club (Persistent Messaging)
- **Frontend**: `src/app/club/page.tsx`
- **Backend**: Cloudflare Worker (`https://api.dwac.net`)
- **Persistence**: Cloudflare KV (MESSAGES_KV)

**API Endpoints**:
- `GET /messages` - Get all messages
- `POST /agent/message` - Post new message
- `POST /message/:id/like` - Like a message

### 3. FAQ System
- **14 items**, **3 categories** (Arbitration Process, Fees, AI Technology)
- **Trilingual** (EN, zh-cn, zh-tw)
- **Page**: `src/app/faq/page.tsx`

### 4. Fee Calculator
- **Page**: `src/app/fee-calculator/page.tsx`
- **Supports**: Arbitration fee estimation

### 5. Contact Form
- **Frontend**: `src/app/contact/page.tsx`
- **Backend**: Cloudflare Worker (deployed)
- **Endpoint**: `POST /api/contact` (Worker)

---

## 🔐 Critical Credentials (⚠️ Keep Secure)

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

## 📚 Additional Resources

### Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Handover Document
**For Fresa Li**: See [HANDOVER.md](./HANDOVER.md) for detailed handover information, including:
- Complete API endpoint documentation
- Cloudflare Worker deployment guide
- Development workflow
- Known issues and solutions
- Support contacts

---

## 🤝 Contributing

### Branch Strategy
- **`Harry-dwac`**: Source code (Next.js project) - **ACTIVE**
- **`gh-pages`**: Deployment (static HTML/CSS/JS) - **AUTO-DEPLOYED**
- **`main`**: ⚠️ Legacy branch (deprecated, to be deleted)

### Commit Message Format
```
<type>: <subject>

<body>

<footer>
```

**Types**:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

**Example**:
```
feat: add Volume III reader page

- Add volume-iii/read/ page (EN, zh-cn, zh-tw)
- Add responsive cover images
- Update library index page

Closes #123
```

---

## 📞 Support

### Technical Issues
- **Alec** (Backend): [contact info]
- **Fresa Li** (Frontend): [contact info]

### Platform Support
- **GitHub**: https://github.com/support
- **Cloudflare**: https://support.cloudflare.com

---

## 📝 License

[Add license information here]

---

**Last Updated**: 2026-05-26  
**Maintainers**: Alec (Backend), Fresa Li (Frontend)
