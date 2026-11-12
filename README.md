# BBR Aviation website

First website draft based on `Aviation_BBR_design.md` and `bbr_web_design.md`. Built with Next.js, React and TypeScript, with a static production export.

## Local development

```powershell
npm install
npm run dev
```

Open http://127.0.0.1:3000. Routes: `/`, `/technology`, `/development`, `/readback`.

The readback page is an interactive concept using deterministic synthetic flight samples. It includes parameter selection, sample-time inspection, explicit missing-data intervals, engineering-unit CSV export and an illustrative system topology. It does not connect to or issue commands to hardware. Demo sessions share the same synthetic sample set.

## Verification

```powershell
npm run typecheck
npm run build
```

The build produces `out/`. No credentials or backend are required. Interactive architecture stages and mobile navigation run locally in the browser.

## GitHub and Vercel

Push this directory to the intended GitHub repository, then import that repository into Vercel. Select the Next.js preset, keep this directory as the project root and use `npm run build`. The Next.js configuration enables static export. Vercel will create preview deployments for pull requests once the integration is connected.

Node.js 24 and exact dependency versions are specified, and GitHub Actions runs the production build and TypeScript checks on pushes to `main` and pull requests. No environment variables are required for this static website.

### Vercel import settings

- Framework preset: **Next.js**.
- Root directory: repository root (`./`).
- Install command: `npm ci`.
- Build command: `npm run build`.
- Output directory: keep the Next.js preset default; static export is configured in `next.config.ts`.
- Node.js version: **24.x**.
- Production branch: **main**.

Once the GitHub repository is published, import it in Vercel and deploy. No Vercel project, production domain or account connection has been created by this local setup.

## Content and assets

All aviation performance figures are proposed planning targets, not measured or certified capabilities. Generated scenes are labelled as concepts. Image prompts and provenance are recorded in `public/images/ASSETS.md` when generated assets are added. Google Fonts supplies DM Sans and Manrope with system-font fallbacks; this can be changed to self-hosted font files before production.
