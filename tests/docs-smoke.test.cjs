const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const repoRoot = path.resolve(__dirname, "..");
const htmlFiles = ["docs-src/react-17/index.html"];
const skinFiles = ["docs-src/shared/app.css"];
const expectedStrings = [
  "@stackline/react-multiselect-dropdown",
  "React 17 docs",
];
const themeMarker = /stackline-react17-live-20260527/;

for (const relativePath of htmlFiles) {
  test(`html smoke: ${relativePath}`, () => {
    const filePath = path.join(repoRoot, relativePath);
    const html = fs.readFileSync(filePath, "utf8");
    assert.match(html, /meta name="viewport"/i);
    assert.match(html, /pagead2\.googlesyndication\.com\/pagead\/js\/adsbygoogle\.js/);
    assert.match(html, /googletagmanager\.com\/gtag\/js\?id=G-3KQ9KECXR9/);
    for (const expected of expectedStrings) {
      assert.equal(html.includes(expected), true);
    }
  });
}

for (const relativePath of skinFiles) {
  test(`skin smoke: ${relativePath}`, () => {
    const filePath = path.join(repoRoot, relativePath);
    const source = fs.readFileSync(filePath, "utf8");
    assert.match(source, themeMarker);
  });
}
