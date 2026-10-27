// Smoke test: serves the folder, opens every game and tab in Chromium, and fails on any page error,
// horizontal overflow, or progress that does not survive a reload. Run with: node tests/smoke.cjs
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".json": "application/json", ".webmanifest": "application/manifest+json", ".png": "image/png" };

function serve() {
  const server = http.createServer((req, res) => {
    const rel = decodeURIComponent(new URL(req.url, "http://x").pathname).replace(/^\/+/, "") || "index.html";
    const file = path.join(ROOT, rel);
    if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
  return new Promise(r => server.listen(0, "127.0.0.1", () => r(server)));
}

const failures = [];
const check = (ok, msg) => { if (!ok) failures.push(msg); console.log((ok ? "ok   " : "FAIL ") + msg); };

(async () => {
  const server = await serve();
  const url = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const errors = [];

  for (const vp of [{ width: 390, height: 844 }, { width: 1280, height: 900 }]) {
    const page = await browser.newPage({ viewport: vp });
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", m => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)/.test(m.text())) errors.push(m.text()); });
    await page.goto(url);
    const games = await page.evaluate(() => GAMES.map(g => ({ id: g.id, tabs: g.tabs.map(t => t[0]) })));
    check(games.length >= 2, `${vp.width}px: at least two games registered`);
    for (const g of games) {
      await page.click("#brand");
      await page.click(`[data-act=game][data-k=${g.id}]`);
      check(await page.$eval("html", e => e.dataset.game) === g.id, `${vp.width}px: switches to ${g.id}`);
      for (const t of g.tabs) {
        await page.click(`[data-act=tab][data-k=${t}]`);
        const html = await page.$eval("#view", e => e.innerHTML.trim());
        const wide = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
        check(html.length > 0 && wide <= 0, `${vp.width}px: ${g.id}/${t} renders without sideways scroll`);
      }
    }
    await page.close();
  }

  // Progress is kept per game and survives a reload.
  const page = await browser.newPage();
  page.on("pageerror", e => errors.push(e.message));
  await page.goto(url);
  await page.click("#brand"); await page.click("[data-act=game][data-k=dune]");
  await page.click("[data-act=tab][data-k=base]");
  await page.click('[data-act=btask][data-g="0"][data-i="0"]');
  await page.click("#brand"); await page.click("[data-act=game][data-k=gowr]");
  await page.click("[data-act=tab][data-k=troph]");
  await page.click('[data-act=troph][data-i="1"]');
  await page.reload();
  check(await page.$eval("html", e => e.dataset.game) === "gowr", "remembers the last game after reload");
  check(await page.$eval('[data-act=troph][data-i="1"]', e => e.getAttribute("aria-pressed")) === "true", "Ragnarök trophy tick survives reload");
  await page.click("#brand"); await page.click("[data-act=game][data-k=dune]");
  check(await page.$eval('[data-act=btask][data-g="0"][data-i="0"]', e => e.getAttribute("aria-pressed")) === "true", "Dune checklist tick survives switching games");

  check(errors.length === 0, "no page errors" + (errors.length ? ": " + errors.join(" | ") : ""));
  await browser.close();
  server.close();
  if (failures.length) { console.error(`\n${failures.length} check(s) failed`); process.exit(1); }
  console.log("\nAll checks passed");
})().catch(e => { console.error(e); process.exit(1); });
