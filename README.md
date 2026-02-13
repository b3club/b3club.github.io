# B3 Club Website

Astro site scaffolded from `/Users/smgil/Projects/b3club.github.io/docs/BRAND.md` and `/Users/smgil/Projects/b3club.github.io/docs/SITEMAP.md`, styled with an AstroWind-inspired Tailwind theme.

## Stack

- Astro 5
- Tailwind CSS
- Astro content collections
- Static output for GitHub Pages

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Content Model

- Curriculum tracks: `/Users/smgil/Projects/b3club.github.io/src/content/curriculum`
- Blog collections:
  - `/Users/smgil/Projects/b3club.github.io/src/content/project-spotlights`
  - `/Users/smgil/Projects/b3club.github.io/src/content/mentor-interviews`
  - `/Users/smgil/Projects/b3club.github.io/src/content/community-updates`

## Key Routes

- `/`
- `/about`
- `/curriculum` and `/curriculum/[slug]`
- `/community` and `/community/events`
- `/blog` and category post routes
- `/join`, `/contact`, `/faq`, `/privacy`, `/terms`
