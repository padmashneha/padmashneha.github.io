# Padma Shneha — Portfolio

Personal portfolio built with Next.js (static export), TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Editing content

All copy — name, about, skills, projects, experience, certifications, awards, links — lives in one file:

```
src/content/data.ts
```

Edit that file and every section of the site updates. No need to touch components for text changes.

To add or update a project case study, add/edit an entry in the `projects` array in that file — a new page at `/projects/<slug>` is generated automatically at build time.

To update your resume, replace `public/resume.pdf` with a new file of the same name.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static site output is generated in `out/`.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes `out/` to GitHub Pages. Enable Pages once in the repo: **Settings → Pages → Source → GitHub Actions**.

## Stack

- Next.js 16 (App Router, static export)
- TypeScript
- Tailwind CSS v4
- next-themes (dark mode)
- Framer Motion (scroll animations)
