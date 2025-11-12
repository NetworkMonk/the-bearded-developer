## Purpose

Short, focused guidance to help AI coding agents be productive in this repository (a Next.js 14 app using the `app/` directory). Use these rules to make code changes, add content, and run common developer workflows without guessing project-specific conventions.

## Top-level architecture (big picture)

- This is a Next.js (v14) app using the `src/app/` directory. Core app files:
  - `src/app/layout.js` — global layout and providers
  - `src/app/page.js` — home page
  - `src/app/api/contact/route.js` — serverless API endpoint for contact form
- UI components live under `src/components/` (e.g. `CookieConsent.js`, `NextJsImage.js`, `Project.js`). Many components wrap Next primitives (images, links) — prefer existing wrappers (e.g. `NextJsImage`) when adding new images.
- Article/content pages are under `src/app/resources/articles/` with one subfolder per article (slug-based). Article assets (thumbnails, images) live in `public/img/articles/<slug>/`.
- A generated JSON index is kept at `data/article-index.json` and produced by `scripts/index-articles.js` (see "index articles" below).

## Key workflows and commands

- Local dev: `npm run dev` (runs `next dev`). Use port 3000 by default.
- Build: `npm run build` then `npm run start` for production preview.
- Lint: `npm run lint` (uses `next lint`).
- Rebuild article index: `npm run index-articles` — run this after adding/updating files under `src/app/resources/articles/` so `data/article-index.json` reflects changes. This script is essential when adding new article pages.

## Project-specific conventions

- App directory (server and client components): follow existing patterns in `src/app/*`. If a file is named `page.js` in a folder, it is a route. Use `layout.js` for shared UI.
- Articles: create `src/app/resources/articles/<slug>/page.js` (and any supporting files) and add images to `public/img/articles/<slug>/`. After adding, run `npm run index-articles` to update `data/article-index.json` which is consumed by the listing components (see `src/components/articles/ArticleList.js`).
- Images: prefer `src/components/NextJsImage.js` when embedding images so caching, sizes and local path handling remain consistent.
- Styling: Tailwind + SCSS coexist. Global styles: `src/app/globals.scss` and `tailwind.config.js` + `postcss.config.mjs`. Preserve class-based Tailwind usage in existing components.
- Cookie consent: the cookie consent system is implemented under `src/components/cookie-consent/` (e.g. `ConsentForm.js`, `Customise.js`, `FloatingBanner.js`). When modifying behavior, update both UI components and any cookie state logic in `src/components/CookieConsent.js`.

## Integration points & external dependencies

- Contact form: `src/app/api/contact/route.js` — server route used by the contact page (`src/app/contact/page.js`). Keep payload shape consistent with the route handler.
- Analytics: `@vercel/analytics` is present in `package.json` — mind analytics imports on pages.
- Third-party UI libs: Font Awesome and Headless UI are in dependencies; follow current import patterns (see `src/components` for examples).

## Typical change examples (copyable guidance)

- Add a new article:
  1. Create `src/app/resources/articles/<slug>/page.js` following existing article page files (use `Article.js`/`ArticleContainer.js` patterns).
  2. Add images to `public/img/articles/<slug>/` (thumbnail, hero, in-article images).
  3. Run `npm run index-articles` to regenerate `data/article-index.json`.
  4. Verify listing and article pages locally with `npm run dev`.

- Modify contact API contract:
  - Update `src/app/api/contact/route.js` and then update any client calls in `src/app/contact/page.js` and tests (if any). Keep the request/response shape in sync.

## Files to inspect when editing behavior

- Layout / routing: `src/app/layout.js`, `src/app/page.js`
- API routes: `src/app/api/**/route.js`
- Articles/indexing: `src/app/resources/articles/**`, `scripts/index-articles.js`, `data/article-index.json`, `src/components/articles/ArticleList.js`
- Images & wrappers: `src/components/NextJsImage.js`, `public/img/`
- Cookie consent: `src/components/cookie-consent/*`, `src/components/CookieConsent.js`
- Styling config: `tailwind.config.js`, `postcss.config.mjs`, `src/app/globals.scss`

## Small-but-critical tips for agents

- Do not add new image files referenced by absolute filesystem paths; put them under `public/img/...` and reference them as `/img/...` (or use `NextJsImage`).
- When updating article content, always run `npm run index-articles` — many pages read the generated `data/article-index.json` instead of scanning the filesystem at runtime.
- Prefer reusing existing components (e.g. `Article`, `ArticleContainer`, `Thumbnail`) to keep markup and styles consistent.
- Check `package.json` scripts for non-obvious commands (e.g. `index-articles`) before adding new automation.

## If you need more context

- Open `src/app/resources/articles/` and `src/components/articles/` to see concrete patterns for article pages and listings.
- Ask maintainers for expected contact API payloads or any external service keys (this repo does not store secrets).

---

If any instruction is unclear or you need examples for a specific change (adding an article, changing cookie consent, or extending the API), tell me which task and I'll expand the example with exact code edits.

## Article PR checklist

When adding or updating articles prefer using the PR checklist at `.github/PULL_REQUEST_TEMPLATE.md`. It covers the required files (`meta.json`, `page.js`), image placement (`public/img/articles/<slug>/`), running `npm run index-articles` to update `src/data/article-index.json`, linting, and a local preview step. Reviewers should ensure metadata, alt text, and image paths are correct.
