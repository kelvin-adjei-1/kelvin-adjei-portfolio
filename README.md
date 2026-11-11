# Kelvin Adjei's Portfolio

A responsive portfolio built with React, TypeScript, Vite, and Tailwind CSS. It presents Kelvin's projects, technical skills, experience, education, and contact links.

## Getting started

Use Node.js 20.19+ or 22.12+ and npm.

```bash
npm ci
npm run dev
```

Open the URL printed by Vite. To validate and build the production site:

```bash
npm run lint
npm run build
npm run preview
```

The production files are generated in `dist`.

## Updating the portfolio

Project descriptions, skills, experience, and contact links are maintained in `src/data/portfolio.ts`. The page sections live in `src/components`; global styles are in `src/index.css`.

The contact link opens the visitor's email application; the site does not submit or store messages. The site uses a teal-accented light theme and a violet-accented dark theme; the visitor's preference is saved in the browser. Project links are shown only when a destination is available.
