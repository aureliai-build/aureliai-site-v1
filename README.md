# Aurelia AI Website

Marketing site for Aurelia AI, built with [Astro](https://astro.build) and deployed on [Cloudflare Pages](https://pages.cloudflare.com).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is written to `dist/`.

## Cloudflare Pages settings

| Setting | Value |
|---------|-------|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Production branch | `main` |

## Deploy

Push to `main` on GitHub. Cloudflare rebuilds automatically.

```bash
git add .
git commit -m "Update site content"
git push origin main
```

## Pages

- `/` — Home
- `/services` — Services
- `/projects` — Projects
- `/about` — About
- `/contact` — Contact

## Customize

- Content: `src/pages/`
- Layout and navigation: `src/layouts/BaseLayout.astro`
- Styles: `src/styles/global.css`
- Logo: `public/logo.svg` (replace with `public/logo.png` if preferred)
