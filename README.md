# DWAC Website

Digital World Arbitration Centre (DWAC) - The first permanent international arbitration institution dedicated to resolving digital world disputes.

## Project Structure

This is a Next.js 14 project with static export capability, supporting English, Simplified Chinese (zh-cn), and Traditional Chinese (zh-tw).

### Pages

- **Home (/)** - Main landing page
- **About (/about/)** - About DWAC
- **Arbitrators (/arbitrators/)** - Our expert panel
- **Join as Arbitrator (/arbitrators/join/)** - Application form
- **Membership (/membership/)** - Membership information
- **Charter (/charter/)** - Digital World Charter
- **Contact (/contact/)** - Contact information
- **Dispute (/dispute/)** - How to file a dispute
- **FAQ (/faq/)** - Frequently asked questions
- **Fee Calculator (/fee-calculator/)** - Arbitration fee structure
- **How to Apply (/how-to-apply/)** - Application guide
- **Evidence Guidance (/evidence-guidance/)** - Digital evidence guidelines
- **Cases (/cases/)** - Case statistics
- **News (/news/)** - News and updates
- **Model Clause (/model-clause/)** - Arbitration clause templates

### Multilingual Support

The site supports three languages:
- English (default)
- Simplified Chinese (/zh-cn/)
- Traditional Chinese (/zh-tw/)

## Getting Started

### Install dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

The static export will be generated in the `out/` directory.

### Start production server

```bash
npm run start
```

## Technical Details

- **Framework**: Next.js 14.2.5
- **React**: 18.3.1
- **Styling**: Tailwind CSS
- **Font**: Inter
- **Output**: Static export (`output: 'export'`)

## Deployment

This project can be deployed to any static hosting service (GitHub Pages, Vercel, Netlify, etc.).

For GitHub Pages deployment, push the contents of the `out/` directory to the `gh-pages` branch.
