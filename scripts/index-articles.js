const fs = require("fs");
const path = require("path");

// Paths
const articlesRoot = path.join(__dirname, "../src/app/resources/articles");
const outputPath = path.join(__dirname, "../src/data/article-index.json");

// Helper to get all subdirectories
function getSubfolders(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => path.join(dir, d.name));
}

// Main logic
async function collectArticles() {
  const subfolders = getSubfolders(articlesRoot);
  const articles = [];

  for (const folder of subfolders) {
    const metaPath = path.join(folder, "meta.json");
    if (fs.existsSync(metaPath)) {
      const meta = JSON.parse(fs.readFileSync(metaPath, "utf-8"));
      // Make path relative to src/app
      const relativePath = path.relative(
        path.join(__dirname, "../src/app"),
        folder
      );
      articles.push({ ...meta, path: `/${relativePath}` });
    }
  }

  // Write to output file
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify({ articles }, null, 2), "utf-8");
  console.log(`Indexed ${articles.length} articles.`);
}

collectArticles().catch((err) => {
  console.error("Error indexing articles:", err);
  process.exit(1);
});
