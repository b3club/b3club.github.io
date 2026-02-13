# B3 Website

## Introduction
This project is the public website for **Bricks, Blocks, and Bots (B3)**.

Primary goal:
- Present B3’s mission, curriculum, and community in a fast static site.
- Convert visitors to the Founding cohort/waitlist.
- Publish ongoing project spotlights, mentor interviews, and community updates.

The site is built with Astro and Tailwind, and its content model is based on:
- `docs/BRAND.md`
- `docs/SITEMAP.md`

## System Design
### Architecture
- Framework: Astro 5 (static build)
- Styling: Tailwind CSS + global brand styles
- Content source: Markdown content collections (Astro Content)
- Deployment target: GitHub Pages
- Custom domain: managed in Porkbun DNS

### Key Assets and Where They Live
- App config:
  - `package.json`
  - `astro.config.mjs`
  - `tailwind.config.cjs`
- Layout and global shell:
  - `src/layouts/BaseLayout.astro`
  - `src/components/SiteHeader.astro`
  - `src/components/SiteFooter.astro`
- Global styling:
  - `src/styles/global.css`
- Route pages:
  - `src/pages`
- Content model + markdown collections:
  - `src/content.config.ts`
  - `src/content/curriculum`
  - `src/content/project-spotlights`
  - `src/content/mentor-interviews`
  - `src/content/community-updates`
- Static assets (logo, favicon, icons):
  - `public`

## Update Content and Run Locally
### Install and run
From the repository root:
```bash
npm install
npm run dev
```

Local dev server defaults to:
- [http://localhost:4321](http://localhost:4321)

### Add or update curriculum content
1. Edit or add markdown files in:
   - `src/content/curriculum`
2. Required frontmatter fields:
   - `title`
   - `summary`
   - `order`
3. New file example:
```md
---
title: New Track
summary: One-line summary of the track.
order: 6
---

Track content goes here.
```

### Add or update blog content
Choose the right collection folder:
- Project spotlight: `src/content/project-spotlights`
- Mentor interview: `src/content/mentor-interviews`
- Community update: `src/content/community-updates`

Required frontmatter:
- `title`
- `excerpt`
- `publishDate` (YYYY-MM-DD)
- `author`

Example:
```md
---
title: Sample Post
excerpt: One-line summary for cards and SEO previews.
publishDate: 2026-02-13
author: B3 Team
---

Post body content.
```

### Validate before commit
```bash
npm run build
```

## Deploy to GitHub Pages + Porkbun Domain Setup
### 1) GitHub Pages deployment
Recommended: GitHub Actions deployment from `main` branch.

Create workflow file:
- `.github/workflows/deploy.yml`

GitHub repo settings:
1. Go to Settings -> Pages.
2. Source: GitHub Actions.

### 2) Add custom domain to project
1. In GitHub Pages settings, set custom domain to your domain (example: `b3fc.org`).
2. Add a CNAME file in repo so every deployment preserves domain mapping:
   - `public/CNAME`
3. CNAME file content:
```text
b3fc.org
```

### 3) Porkbun DNS configuration
In Porkbun DNS for your domain:
1. Root domain (`b3fc.org`) A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
2. `www` CNAME record:
   - `www` -> `<github-username>.github.io`
3. Optional redirect:
   - forward `www.b3fc.org` to `b3fc.org` (or the opposite, your canonical choice).

### 4) Confirm Astro site URL config
Ensure the production URL matches your canonical domain in:
- `astro.config.mjs`

Current setting should remain:
```js
site: 'https://b3fc.org'
```

### 5) Post-deploy checklist
- Open domain and verify HTTPS certificate is active.
- Validate favicon and logo load.
- Click through key routes (`/`, `/curriculum`, `/blog`, `/join`).
- Re-run `npm run build` locally if deployment output looks wrong.
