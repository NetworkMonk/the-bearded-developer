## Pull Request Checklist — Adding or Updating an Article

Use this checklist when creating a PR that adds or updates an article under `src/app/resources/articles/`.

- [ ] Title the PR: "Add article: <slug>" or "Update article: <slug>".
- [ ] Article folder added/updated at `src/app/resources/articles/<slug>/` containing:
  - `meta.json` with `title`, `subTitle`, `description`, `date`, `author`, `image`, `tags`, and `metadata` (title/description/robots).
  - `page.js` for the article content that imports `meta.json` and uses the `ArticleContainer` pattern.
- [ ] Images placed under `public/img/articles/<slug>/` and referenced as `/img/articles/<slug>/...` (do NOT use absolute filesystem paths).
- [ ] Run the article indexer and commit the updated index file:

```bash
npm run index-articles
git add src/data/article-index.json
```

- [ ] Confirm `meta.json.image` points to an existing image path in `public/img/articles/<slug>/` (header image used by `ArticleContainer`).
- [ ] Accessibility: all images include descriptive `alt` text; headings use semantic elements; links have meaningful labels.
- [ ] SEO/metadata: `meta.json.metadata.title` and `.description` are set and concise (max ~60/155 chars recommended).
- [ ] Run linter locally and fix errors:

```bash
npm run lint
```

- [ ] Preview locally and verify the article page and listing render correctly:

```bash
npm run dev
# open http://localhost:3000/resources/articles/<slug>
```

- [ ] Add a short PR description listing key changes (files added/modified) and any manual verification steps performed.
- [ ] Add screenshots of the article in the PR if visual changes matter (hero image, layout, or responsive differences).

Optional reminders for reviewers
- Ensure the article follows existing patterns in `src/components/articles/ArticleContainer.js` and `Article.js`.
- Verify there are no hard-coded credentials or PII in the article content or meta files.

If anything in this checklist is unclear, leave a comment on the PR and tag the repository maintainers for a quick review.
