/* App shell: picks the game, loads and saves its state, draws tabs and header, routes events. Loaded last. */
const APP_KEY = "arrakis-app-v1";
let game = GAMES[0], picking = false;

function gameById(id) { return GAMES.find(g => g.id === id); }
function loadApp() {
  try { const a = JSON.parse(localStorage.getItem(APP_KEY) || "{}"); if (gameById(a.game)) game = gameById(a.game); } catch (e) {}
}
function saveApp() { try { localStorage.setItem(APP_KEY, JSON.stringify({ game: game.id })); } catch (e) {} }

/* ---------- storage: device first, account sync when available ---------- */
let docRef = null, timer = null, saving = false, again = false;
function setSync(t) { const e = $("#sync"); if (e) e.textContent = t; }
function loadLocal() {
  state = game.defaults();
  try { const s = localStorage.getItem(game.storageKey); if (s) state = Object.assign(game.defaults(), JSON.parse(s)); } catch (e) {}
}
function save() {
  state.u = Date.now();
  try { localStorage.setItem(game.storageKey, JSON.stringify(state)); } catch (e) {}
  if (docRef) { clearTimeout(timer); timer = setTimeout(flush, 700); }
}
async function flush() {
  if (!docRef) return;
  if (saving) { again = true; return; }
  saving = true;
  try { await docRef.set({ state: JSON.stringify(state) }); setSync("Synced"); }
  catch (e) { setSync("On this device"); }
  saving = false;
  if (again) { again = false; flush(); }
}
async function connect() {
  const g = game;
  try {
    if (!window.claude || !window.claude.use) return;
    const db = await window.claude.use("db"), user = await window.claude.use("user");
    if (!db || !user) return;
    const id = await user.id();
    if (!id || g !== game) return;
    const ref = db.doc("data/users/" + id + "/" + g.syncDoc);
    const snap = await ref.get();
    if (g !== game) return;
    docRef = ref;
    if (snap.exists) {
      const remote = JSON.parse(snap.data().state);
      if (remote && remote.u > state.u) { state = Object.assign(g.defaults(), remote); try { localStorage.setItem(g.storageKey, JSON.stringify(state)); } catch (e) {} render(); setSync("Synced"); return; }
    }
    flush();
  } catch (e) { docRef = null; }
}
function switchGame(id) {
  const g = gameById(id);
  picking = false;
  if (!g || g === game) return;
  clearTimeout(timer); if (docRef) flush();
  docRef = null; game = g; saveApp(); loadLocal(); setSync("On this device");
  render(); window.scrollTo(0, 0); connect();
}

/* ---------- shell ---------- */
const CHEV = '<svg class="chev" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
function renderShell() {
  const root = document.documentElement;
  root.dataset.game = game.id;
  document.title = game.title + " · Waypoint";
  const tc = $('meta[name="theme-color"]'); if (tc) tc.content = game.themeColor;
  $("#brand").innerHTML = `<span class="mark"><svg viewBox="0 0 24 24" aria-hidden="true">${game.mark}</svg></span><h1>${esc(game.title)}</h1>${GAMES.length > 1 ? CHEV : ""}`;
  $("#brand").setAttribute("aria-expanded", picking);
  $("#sub").innerHTML = game.header();
  const tabs = $("#tabs");
  tabs.style.setProperty("--n", game.tabs.length);
  tabs.innerHTML = game.tabs.map(([k, n]) =>
    `<button data-act="tab" data-k="${k}" ${state.tab === k ? 'aria-current="page"' : ""}><svg viewBox="0 0 24 24" aria-hidden="true">${game.icons[k]}</svg>${n}</button>`).join("");
}
function renderPicker() {
  return `<section class="card picker"><div class="label">Waypoint · Your games</div>` + GAMES.map(g =>
    `<button class="gamerow" data-act="game" data-k="${g.id}" ${g === game ? 'aria-current="true"' : ""}>
      <span class="mark" style="background:${g.themeColor};color:#fff"><svg viewBox="0 0 24 24" aria-hidden="true">${g.mark}</svg></span>
      <span class="stitle"><b>${esc(g.name)}</b><span class="why">${esc(g.blurb)}</span></span>${g === game ? '<span class="pill now">Open</span>' : ""}</button>`).join("") + `</section>`;
}
function render() {
  if (!game.tabs.some(x => x[0] === state.tab)) state.tab = "home";
  renderShell();
  $("#view").innerHTML = (picking ? renderPicker() : "") + game.views[state.tab]();
}

/* ---------- events ---------- */
function after(r) {
  if (r === "save" || r === "nav") save();
  if (r) render();
  if (r === "nav") window.scrollTo(0, 0);
}
document.addEventListener("click", e => {
  const b = e.target.closest("[data-act]"); if (!b) return;
  const a = b.dataset.act;
  if ((game.inputActs || []).includes(a)) return;
  if (a === "picker") { picking = !picking; render(); if (picking) window.scrollTo(0, 0); return; }
  if (a === "game") { if (b.dataset.k === game.id) { picking = false; render(); } else switchGame(b.dataset.k); return; }
  if (a === "tab") { state.tab = b.dataset.k; picking = false; after("nav"); return; }
  after(game.onClick(a, b));
});
document.addEventListener("change", e => {
  const t = e.target.closest("[data-act]"); if (!t) return;
  const n = Math.max(0, Math.round(Number(t.value) || 0));
  after(game.onChange(t.dataset.act, t, n));
});
document.addEventListener("input", e => {
  if (e.target.dataset && e.target.dataset.note) { state.notes = state.notes || {}; state.notes[e.target.dataset.note] = e.target.value; save(); return; }
  if (game.onInput) game.onInput(e);
});

loadApp();
loadLocal();
render();
connect();

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
