// Fixes "TypeError: Invalid URL" when building on Windows.
//
// Next 14 bundles @vercel/og, which loads its font and wasm files with
//   fileURLToPath(join(import.meta.url, "../file"))
// On Windows, path.join turns the file:// URL into backslashes and
// fileURLToPath throws, breaking /icon, /apple-icon, /opengraph-image and
// /survey/og. Converting the URL to a path first and then joining loads the
// exact same files and works on every OS (including Vercel's Linux builds).
//
// Runs before `build` and `dev`. Safe to run repeatedly; does nothing once
// patched or if a future Next version no longer has the pattern.
const fs = require("fs");
const path = require("path");

const file = path.join(
  process.cwd(),
  "node_modules/next/dist/compiled/@vercel/og/index.node.js"
);

if (!fs.existsSync(file)) process.exit(0);

const src = fs.readFileSync(file, "utf8");
const pattern = /fileURLToPath\(join\(import\.meta\.url, ("[^"]+")\)\)/g;
const out = src.replace(pattern, "join(fileURLToPath(import.meta.url), $1)");

if (out !== src) {
  fs.writeFileSync(file, out);
  console.log("patch-vercel-og: patched @vercel/og file paths for Windows");
}
