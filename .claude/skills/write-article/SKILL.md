---
name: write-article
description: This skill is used when we want to create a new article for the bearded developer website. This skill details the location and method for creating the article.
model: sonnet
---

When the user requests to create a new article, we should follow these steps.

1. Firstly understand the subject. If this has not been provided, ask the user about it.
2. We should interrogate the user to find out their opinions and thoughts on the subject matter. This should form the basis for the article. Ask questions that should expect full paragraph responses that allow you to understand the users tone and language.
3. Check our "src/data/article-index.json" file. Make sure that we are not creating a duplicate article. Do not update this file directly.
4. Create the new article folder in the following location "src/app/resources/articles/"
5. Create a "meta.json" file in the article location. Use the following format as an example.

`{
  "title": "AI Automation for E-commerce: What UK Businesses Are Actually Doing in 2026",
  "subtitle": "A Practical View on Where AI Is Making a Real Difference — and Where to Start",
  "description": "An honest look at how UK e-commerce businesses are using AI automation in 2026. What's working, what isn't, and how to figure out where to start without wasting time or money.",
  "date": "2026-03-13",
  "author": "James Plant",
  "image": "/img/articles/ai-automation-ecommerce-2026/ai-automation-header.jpg",
  "tags": [
    "AI",
    "Automation",
    "E-commerce",
    "Business Operations",
    "UK Business",
    "Shopify",
    "BigCommerce"
  ],
  "metadata": {
    "title": "AI Automation for E-commerce: What UK Businesses Are Actually Doing in 2026 | The Bearded Developer",
    "description": "An honest look at how UK e-commerce businesses are using AI automation in 2026. What's working, what isn't, and how to figure out where to start without wasting time or money.",
    "robots": "index, follow"
  },
  "path": "/resources/articles/ai-automation-ecommerce-2026"
}
`

6. Create a new page.js file in the folder location following recent page formats. This should be the full article content. Keep the article content from getting too long and over complicated. The reader should be able to read content inside a couple of page scrolls. If available we should use the humanizer skill when creating content.

7. Update the article index file, do not do this directly. Execute the script `npm run index-articles`. This will update the article index.

8. We need to return to the user two image prompts that match the article. Use the following guidelines:

Style: Bright, airy, minimal — almost entirely white and light grey. Photorealistic 3D render quality. Soft natural  
window light, small green plants (succulents, monstera, ferns) in white ceramic pots as accents.

Each article needs two images: a header and a content image, both visually distinct from other articles — rooted in  
the article's specific concept rather than generic office scenes.

Things to avoid: laptops, whiteboards, clipboards, calculators, monitors with dashboards, sticky notes, stopwatches.

Example prompt:
Photorealistic 3D render. A set of small brass keys arranged neatly on a white surface, one key slightly separated from the group. Small succulent plant in a white ceramic pot as an accent. Soft natural light from a large window casting gentle shadows. Bright, airy, white and light grey tones. Minimal and clean.
