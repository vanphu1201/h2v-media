import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const { default: server } = await import("../dist/server/server.js");

const pages = [
  { route: "/", output: "dist/client/index.html" },
  { route: "/tuyendung", output: "dist/client/tuyendung/index.html" },
];

for (const page of pages) {
  const response = await server.fetch(new Request(`https://prerender.local${page.route}`));

  if (!response.ok) {
    throw new Error(`Failed to prerender ${page.route}: ${response.status} ${response.statusText}`);
  }

  const outputPath = path.join(projectRoot, page.output);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, await response.text(), "utf8");
}

console.log(`Prerendered ${pages.length} static pages for Vercel.`);
