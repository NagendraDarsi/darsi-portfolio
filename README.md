# Darsi Nagendra — Portfolio

A static, responsive portfolio site built with Vue 3 + TypeScript + Vite.

Sections: Hero, About, Skills, Experience (timeline), Projects (Zimmereifrank, Hassel, PG Management System, business workflow automation), Education, Contact.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs a fully static site to `dist/` — deployable to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.) with no server required.

## Preview a production build

```bash
npm run preview
```

## Editing content

All resume content (profile, skills, experience, projects, education) lives in `src/data/resume.ts` — update it there and the whole site updates.
