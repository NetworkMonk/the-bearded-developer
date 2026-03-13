# CLAUDE.md — The Bearded Developer

Instructions for Claude Code on how this project works and how to create content.

---

## Project Overview

This is a Next.js site for The Bearded Developer — a specialist digital services agency offering Shopify, BigCommerce, NetSuite, Celigo integration, and bespoke web development services.

**Primary SEO focus areas:**
- Celigo integration services
- BigCommerce development and integrations
- Digital support retainers
- NetSuite / ERP integrations
- Shopify development

---

## Writing Style and Tone

- **Always use UK English** — colour, organisation, licence, recognise, catalogue, etc.
- Write for a **non-technical audience**. The reader is likely a business owner, operations manager, or decision-maker — not a developer.
- Avoid jargon. If a technical term must be used, explain it in plain English immediately after.
- Tone is **honest, practical, and direct**. Not salesy. Not padded.
- Do not over-complicate. If something can be said in one sentence, do not use three.
- Use real-world scenarios and concrete examples rather than abstract concepts.
- **Never add emoji** to article content.

---

## Article File Structure

Each article lives in its own directory under:

```
src/app/resources/articles/[article-slug]/
```

Each directory contains exactly two files:

### 1. `meta.json`

```json
{
  "title": "Full Article Title",
  "subtitle": "Subtitle / Supporting Headline",
  "description": "Meta description — 1–2 sentences, keyword-rich, under 160 characters ideally.",
  "date": "YYYY-MM-DD",
  "author": "James Plant",
  "image": "/img/articles/[article-slug]/[header-image].jpg",
  "tags": [
    "Tag One",
    "Tag Two"
  ],
  "metadata": {
    "title": "Full Article Title | The Bearded Developer",
    "description": "Same as description above.",
    "robots": "index, follow"
  },
  "path": "/resources/articles/[article-slug]"
}
```

Note: some older articles use `subTitle` (camelCase). New articles should use `subtitle` (lowercase).

### 2. `page.js`

Standard imports at the top of every article page:

```js
import Image from "next/image";
import article from "./meta.json";
import ArticleContainer from "@/components/articles/ArticleContainer";
import { lexend } from "@/app/fonts";
import Link from "next/link";

export const metadata = {
  title: article.metadata.title,
  description: article.metadata.description,
};
```

---

## Article Page Layout

Every article uses the same two-column layout inside `ArticleContainer`:

```jsx
<ArticleContainer article={article}>
  <section className="md:p-12 relative grid md:grid-cols-3 gap-8">

    {/* Main content — 2/3 width */}
    <div className="md:col-span-2">
      ...
    </div>

    {/* Sticky sidebar — 1/3 width */}
    <aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">
      ...
    </aside>

  </section>
</ArticleContainer>
```

---

## Article Content Structure

### Headings

```jsx
{/* Article title */}
<h2 className={`text-4xl md:text-5xl font-bold ${lexend.className}`}>
  Article Title
</h2>

{/* Section headings */}
<h3 className={`text-2xl font-semibold mt-8 ${lexend.className}`}>
  Section Heading
</h3>

{/* Subsection headings (inside callout boxes) */}
<h4 className={`font-semibold ${lexend.className} text-[colour]-900`}>
  Subsection Heading
</h4>
```

### Body text

```jsx
<p className="mt-10">First paragraph after the title.</p>
<p className="mt-6">Subsequent paragraphs.</p>
<p className="mt-4">Paragraphs inside sections.</p>
```

### Images

Always include a header image near the top and one content image mid-article:

```jsx
<Image
  src="/img/articles/[article-slug]/[filename].jpg"
  alt="Descriptive alt text"
  width={640}
  height={400}
  className="mx-auto my-8 rounded-lg shadow-md"
/>
```

Images are stored in: `public/img/articles/[article-slug]/`

---

## Callout Box Colour System

Use coloured callout boxes consistently to signal meaning. Do not mix colour meanings.

| Colour | Use for |
|--------|---------|
| `bg-red-50` + `border-l-4 border-red-500` | Warning signs, problems, what goes wrong |
| `bg-blue-50` | Diagnostic steps, how-to, informational |
| `bg-green-50` | Quick fixes, positive outcomes, recommendations |
| `bg-yellow-50` + `border-l-4 border-yellow-500` | When to get professional help, caution, things to watch |
| `bg-gray-50` | Neutral information, context |
| `bg-orange-50` | Secondary recommendations, moderate severity |
| `bg-purple-50` | Used for MuleSoft/contrast comparisons |

### Standard callout box pattern:

```jsx
<div className="mt-6 bg-[colour]-50 p-6 rounded-lg border-l-4 border-[colour]-500">
  <h4 className={`font-semibold ${lexend.className} text-[colour]-900`}>
    Heading
  </h4>
  <ul className="mt-3 list-disc list-inside space-y-2 text-[colour]-800 text-sm">
    <li>Item</li>
  </ul>
</div>
```

---

## CTA Gradient Block

Every article ends with a gradient CTA section before the closing "bottom line" paragraphs:

```jsx
<div className="mt-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg p-8 text-white">
  <h3 className="text-2xl font-bold mb-4">
    CTA Heading
  </h3>
  <p className="mb-6">
    One or two sentences of supporting copy.
  </p>
  <div className="flex flex-wrap gap-4">
    <Link
      href="/services/[service]"
      className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
    >
      Primary CTA
    </Link>
    <Link
      href="/contact"
      className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block border-2 border-white"
    >
      Secondary CTA
    </Link>
  </div>
</div>
```

---

## Sidebar Structure

The sticky sidebar should always include:

1. **Quick reference section** — a scannable summary of the article's key points using left-coloured borders
2. **Related articles** — `bg-blue-50` panel with links to 3–5 related articles
3. **Relevant service pages** — `bg-green-50` panel with links to service pages
4. **Closing CTA** — a short sentence with a `/contact` link

```jsx
<aside className="md:col-span-1 bg-gray-100 p-6 rounded-lg mt-10 md:mt-0 md:sticky top-10">

  <h3 className={`text-xl font-semibold ${lexend.className}`}>
    Quick Reference
  </h3>
  <div className="mt-4 space-y-3 text-sm">
    <div className="border-l-4 border-blue-400 pl-3">
      <strong>Item</strong><br />
      Short description
    </div>
  </div>

  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
    <h4 className={`font-semibold ${lexend.className}`}>Related Articles</h4>
    <ul className="text-sm mt-2 space-y-2">
      <li><Link href="/resources/articles/..." className="text-blue-600 hover:underline">Title</Link></li>
    </ul>
  </div>

  <div className="mt-6 p-4 bg-green-50 rounded-lg">
    <h4 className={`font-semibold ${lexend.className}`}>Our Services</h4>
    <ul className="text-sm mt-2 space-y-2">
      <li><Link href="/services/..." className="text-blue-600 hover:underline">Service Name</Link></li>
    </ul>
  </div>

  <p className="mt-4 text-sm">
    Short closing line.{" "}
    <Link href="/contact" className="text-blue-600 hover:underline font-semibold">
      Get in touch
    </Link>.
  </p>

</aside>
```

---

## Service Pages (Internal Linking Targets)

Always link to relevant service pages within article body and sidebar. Available service pages:

| Service | Path |
|---------|------|
| Shopify | `/services/shopify` |
| BigCommerce | `/services/bigcommerce` |
| NetSuite | `/services/netsuite` |
| Celigo | `/services/celigo` |
| Integrations | `/services/integrations` |
| Bespoke / Support Retainers | `/services/bespoke` |
| AI | `/services/ai` |

Link to service pages **within the article body** when introducing a recommended solution, and always include them in the sidebar's "Our Services" panel.

---

## Article Index

After creating a new article, run the following command from the project root to update the index automatically:

```bash
npm run index-articles
```

**Do not edit `src/data/article-index.json` directly.** The script reads all `meta.json` files and rebuilds the index. Manual edits will be overwritten the next time the script runs.

---

## Image Style Guide

Images are generated using Bing DALL-E. All images should follow the same visual style:

**Core aesthetic:** Bright, airy, minimal — almost entirely white and light grey. Photorealistic 3D render quality.

**Consistent elements:**
- Soft natural window light casting gentle shadows (never harsh artificial light)
- Small green plants as accents — succulents, monstera leaves, or small ferns in white ceramic pots
- White or light grey walls, surfaces, and furniture

### Generating Unique Images Per Article

**Each article must have images that are visually distinct from all other articles on the site.** Before writing the image prompts, think about the article's core concept and find a physical object, metaphor, or scene that represents it specifically — not generically.

Ask: *What physical object or scene best captures the central idea of this article?* Then build the prompt around that specific concept rather than defaulting to a generic office scene.

**Themes already used — do not repeat these:**
- Open laptop on a desk
- Whiteboard or framed flowchart/diagram on a wall
- Clipboard with a checklist
- Calculator and budget documents on a desk
- Computer monitor with a dark dashboard
- Framed warning sign posters on a wall
- Sticky notes spread across a desk
- Stopwatch with coloured blocks

**Wider range of scene types to draw from:**
- A specific physical object that metaphorically represents the article's concept (e.g. a compass for navigation/decision-making, a set of keys for access/unlocking, a magnifying glass for investigation)
- Small physical items sorted, arranged, or grouped on a clean white surface (cards, tokens, envelopes, labels) — representing categorisation, triage, or organisation
- A single striking object with strong symbolic relevance to the topic, lit cleanly against a white surface
- A simple craft or workshop scene — tools laid out neatly, a workbench, materials in progress
- An outdoor-facing window with a plant and a single relevant object on the sill
- A product or packaging scene if the article relates to e-commerce fulfilment or retail
- A simple architectural or spatial metaphor — a doorway, a bridge, a set of steps

**Prompt format:**
> Photorealistic 3D render. [Unique scene rooted in the article's specific concept]. Small [succulent/monstera/fern] plant in a white ceramic pot as an accent. Soft natural light from a large window casting gentle shadows. Bright, airy, white and light grey tones. Minimal and clean.

**Before writing prompts, briefly note:**
1. What is the article's single most important concept or metaphor?
2. What physical object or scene could represent that without a laptop or whiteboard?
3. Are either of these prompts too similar to an existing article's images?

### Image file naming

- Header image: descriptive name ending in `-header.jpg` (e.g. `integration-header.jpg`)
- Content image: descriptive name reflecting the content it accompanies (e.g. `sorting-tray.jpg`, `magnifying-glass-list.jpg`)

---

## SEO Principles

- **Title tag format:** `[Article Title] | The Bearded Developer`
- **Meta description:** 1–2 sentences, keyword-rich, ideally under 160 characters
- **Article titles:** Lead with the primary keyword, follow with a benefit or qualifier
- **Internal linking:** Every article should link to at least one service page and 2–3 related articles
- **Tags:** 4–6 tags per article; include the primary platform (Shopify, BigCommerce, Celigo, NetSuite) where relevant

---

## Before Writing Any Article — Pre-Writing Interview

**Always ask James at least 5 questions before writing any article.** The goal is to capture his genuine opinions, experience, and voice so the article reads as human-authored rather than generated. Do not skip this step, even if the topic seems straightforward.

Questions should be tailored to the specific article topic but should always aim to uncover:

1. **His honest, practical take** on the subject — not the textbook answer, his actual opinion from working with clients
2. **A real-world example or scenario** he has encountered — a specific client situation, problem he has seen repeatedly, or outcome he has witnessed
3. **The biggest misconception** businesses have about the topic — what he finds himself correcting most often
4. **How it connects to the tools and services he works with** — Celigo, NetSuite, Shopify, BigCommerce, support retainers
5. **What advice he would give to a business owner** who knows nothing about the subject — the "coffee conversation" version

Wait for his answers before writing anything. Build the article structure and content around what he says. His language, opinions, and examples should be woven directly into the copy — not paraphrased into generic advice.

---

## Adding a New Article — Checklist

1. **Ask at least 5 pre-writing questions** and wait for answers (see above)
2. Create directory: `src/app/resources/articles/[article-slug]/`
3. Create `meta.json` with title, subtitle, description, date, author, image path, tags, metadata, and path
4. Create `page.js` using the standard imports, layout, and component patterns above
5. Run `npm run index-articles` to update the article index
6. Create image directory: `public/img/articles/[article-slug]/`
7. Generate header image and content image using Bing DALL-E with the style guide above
8. Save images to the image directory

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Fonts:** Lexend (imported via `@/app/fonts`) — used for all headings
- **Images:** next/image component
- **Links:** next/link component
- **Deployment:** Cloudflare (via open-next / wrangler)
