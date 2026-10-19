# AGENTS.md

## Project

Vite + React 19 + TypeScript SPA for browsing saved jobs. The parent folder says "react-next.js-practice-files", but this app is **not** Next.js — there is no routing framework, server code, or API layer.

## Commands

- `npm run dev` — Vite dev server
- `npm run build` — `tsc -b && vite build` (this is also the typecheck; there is no separate script)
- `npm run lint` — Oxlint (config: `.oxlintrc.json`, non-type-aware)
- No test runner is configured. Do not invent test commands.

## Architecture

- Entry: `src/main.tsx` → `src/App.tsx`. `App.tsx` fetches `/jobs.json` **once at module scope** and passes the promise down; `MainComponents` unwraps it with React's `use()` inside `<Suspense>`.
- Job data is served from `public/jobs.json` (plain `fetch("/jobs.json")`). If you change the job shape, update `src/JobsTypes.ts` and all consumers.
- All UI state (`jobsData`, `saveJobs`) lives in `src/components/MainComponents.tsx`; filter/search/save behavior flows through props from there.

## Styling

- Tailwind CSS v4 via `@tailwindcss/vite`, configured entirely in `src/index.css` (`@import "tailwindcss"` + `@plugin "daisyui"`). There is no `tailwind.config.js`; do not add one for simple customization.
- UI uses daisyUI 5 component classes.

## TypeScript quirks

- `verbatimModuleSyntax` is on: use `import type` for type-only imports.
- `noUnusedLocals`, `noUnusedParameters`, and `erasableSyntaxOnly` are on — avoid unused vars and non-erasable syntax (e.g. enums with runtime behavior, parameter properties).
