# Aureliai Website

Marketing site for **Aureliai** — an AI consulting company focused on automation, knowledge systems, and practical AI delivery.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/) via GitHub.

**Live site:** [aureliai-site-v1.aureliai-common-0c7.workers.dev](https://aureliai-site-v1.aureliai-common-0c7.workers.dev)

## Stack

| Layer | Technology |
|-------|------------|
| Framework | Astro 6 |
| Styling | Tailwind CSS v4 |
| Hosting | Cloudflare Workers (`@astrojs/cloudflare`) |
| Source control | GitHub → auto-deploy on push to `main` |

## Local development

**Requirements:** Node.js 22.12+

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output is written to `dist/`. Static assets are served from `dist/client/` when deployed.

## Deploy

Push to `main` on GitHub. Cloudflare rebuilds and deploys automatically.

```bash
git add .
git commit -m "Update site content"
git push origin main
```

Check status in **Cloudflare Dashboard → Workers & Pages → aureliai-site-v1 → Deployments**.

## Cloudflare configuration

The project uses `wrangler.jsonc` for Workers settings. Key bindings:

| Binding | Resource | Purpose |
|---------|----------|---------|
| `SESSION` | KV Namespace | Astro session storage (required by Cloudflare adapter) |
| `ASSETS` | Static assets | HTML, CSS, images from `dist/` |
| `IMAGES` | Cloudflare Images | Image optimization (auto-provisioned by adapter) |

The `SESSION` KV namespace must use an **existing** namespace ID in `wrangler.jsonc`. Do not leave the `id` empty — Wrangler will try to create a duplicate namespace and the deploy will fail.

```jsonc
"kv_namespaces": [
  {
    "binding": "SESSION",
    "id": "643b88f76deb40d7b31cdfc03d46e8d1"
  }
]
```

Namespace name in Cloudflare: `aureliai-site-v1-session`

## Pages

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/services` | `src/pages/services.astro` |
| `/projects` | `src/pages/projects.astro` |
| `/about` | `src/pages/about.astro` |
| `/contact` | `src/pages/contact.astro` |

## Project structure

```text
aureliai-site-v1/
├── public/              # Static files (logo, favicon)
├── src/
│   ├── components/      # Reusable UI (Hero, FAQ, FeatureGrid, etc.)
│   ├── data/site.ts     # Company copy, services, projects, FAQs
│   ├── layouts/         # BaseLayout (nav, footer)
│   ├── pages/           # One file per route
│   └── styles/          # global.css (Tailwind + theme tokens)
├── astro.config.mjs
├── wrangler.jsonc       # Cloudflare Workers config
└── package.json
```

## Customize

| What to change | Where |
|----------------|--------|
| Company name, email, services, FAQs | `src/data/site.ts` |
| Homepage sections | `src/pages/index.astro` + `src/components/` |
| Navigation and footer | `src/layouts/BaseLayout.astro` |
| Colors and fonts | `src/styles/global.css` |
| Logo | `public/logo.svg` |

## Troubleshooting deploys

| Error | Fix |
|-------|-----|
| `namespace ... already exists [code: 10014]` | Add the existing KV namespace `id` to `wrangler.jsonc` |
| Build fails on Cloudflare | Run `npm run build` locally first and fix any errors |
| Old content on live site | Hard refresh (`Cmd+Shift+R`) or wait ~1 min for CDN cache |

## Optional next steps

- Add a custom domain in **Workers & Pages → Custom domains**
- Enable [Cloudflare Web Analytics](https://www.cloudflare.com/web-analytics/) (free)
- Replace placeholder GitHub project links in `src/data/site.ts`
