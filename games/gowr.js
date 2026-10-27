/* God of War Ragnarök pack (PS5). Trophy and collectible data from PowerPyx and Push Square, October 2026. */
(function () {
const DATA = {
  // [name, grade, how to unlock]
  trophies: [
    ["The Bear and the Wolf", "plat", "Earn every other trophy"],
    ["Ready for Commitment", "gold", "Fully upgrade one armor set"],
    ["Ragnarök", "gold", "Defeat the All-Father"],
    ["Grave Mistake", "gold", "Defeat King Hrolf"],
    ["The True Queen", "gold", "Defeat Gná"],
    ["Spartan Ways", "silver", "Learn the Spartan teachings"],
    ["Full Belly", "silver", "Obtain all Apples of Idunn and Horns of Blood Mead"],
    ["Phalanx", "silver", "Obtain all shields"],
    ["Collector", "silver", "Obtain all relics and sword hilts"],
    ["Dragon Slayer", "silver", "Craft the Dragon Scaled Armor set"],
    ["How It's Going", "silver", "Fully repair the Amulet of Yggdrasil"],
    ["Funeral for a Friend", "silver", "Attend the funeral"],
    ["Full Gufa", "silver", "Free the Hafgufas"],
    ["Making Amends", "silver", "Free the Lyngbakr"],
    ["It Was a Good Day", "silver", "Retrieve Mardöll"],
    ["Invasive Species", "silver", "Complete all Crater Hunts"],
    ["Besties", "silver", "Pet Speki and Svanna"],
    ["Rightful Place", "silver", "Return all Lindwyrms to Ratatoskr"],
    ["Pure of Hart", "silver", "Return the Stags of the Four Seasons"],
    ["Trials by Fire", "silver", "Complete the Trials of Muspelheim"],
    ["The Florist", "bronze", "Collect one flower from each of the Nine Realms"],
    ["The Librarian", "bronze", "Collect all books"],
    ["The Curator", "bronze", "Collect all artifacts"],
    ["How It Started", "bronze", "Equip an enchantment"],
    ["Spit Shine", "bronze", "Upgrade one piece of armor"],
    ["Knock off the Rust", "bronze", "Purchase a skill"],
    ["A Grizzly Encounter", "bronze", "Battle the Bear"],
    ["Blood Debt", "bronze", "Battle the God of Thunder"],
    ["Backyard Brawl", "bronze", "Battle the Mysterious Valkyrie"],
    ["Root of the Problem", "bronze", "Battle Nidhögg"],
    ["The Cauldron", "bronze", "Destroy Gryla's cauldron"],
    ["Off the Leash", "bronze", "Battle Garm"],
    ["Comeuppance", "bronze", "Battle Heimdall"],
    ["Better Together", "bronze", "Battle Hrist and Mist"],
    ["Rebel Leader", "bronze", "Return the Hammer of the Rebellion"],
    ["New Friends", "bronze", "Fetch Lunda's orb"]
  ],
  // [name, total, trophy it counts toward]
  collect: [
    { g: "On the realm map", items: [
      ["Odin's Ravens", 48, ""], ["Artifacts", 38, "The Curator"], ["Lore", 80, ""], ["Legendary Chests", 53, ""],
      ["Nornir Chests", 35, "Full Belly (they hold the Apples and Horns)"], ["Yggdrasil Rifts", 15, ""], ["Remnants of Asgard", 10, ""],
      ["Buried Treasures", 10, ""], ["Draugr Holes", 6, ""], ["Hel Tears", 6, ""], ["Lindwyrms", 6, "Rightful Place"],
      ["Stags of the Four Seasons", 4, "Pure of Hart"], ["Nine Realms in Bloom flowers", 9, "The Florist"], ["Muspelheim Trials", 15, "Trials by Fire"]] },
    { g: "Gear and books", items: [
      ["Favors", 47, ""], ["Books", 14, "The Librarian"], ["Relics and sword hilts", 14, "Collector"], ["Shields", 5, "Phalanx"], ["Jewels of Yggdrasil", 7, ""]] }
  ],
  // [name, realm, place]
  berserkers: [
    ["Fraekni the Zealous", "Midgard", "Lake of Nine"],
    ["Bodvar the Fierce", "Svartalfheim", "Jarnsmida Pitmines"],
    ["Starolfr the Troublesome", "Svartalfheim", "Jarnsmida Pitmines"],
    ["Hardrefill the Callous", "Svartalfheim", "Nidavellir"],
    ["Beigadr the Feared", "Svartalfheim", "Alberich Island"],
    ["Svipdagr the Cold", "Alfheim", "The Barrens"],
    ["Sisters of Illska (two at once)", "Alfheim", "The Barrens"],
    ["Hjalti the Stolid", "Alfheim", "The Forbidden Sands"],
    ["Hvitserkr the Bold", "Vanaheim", "Pilgrim's Landing"],
    ["Haklangr the Bearded", "Vanaheim", "The Sinkholes"],
    ["Skjothendi the Unerring", "Niflheim", "Mist Fields, after the story"],
    ["King Hrolf", "Midgard", "King's Grave, once all the others are down"]
  ],
  tips: [
    ["Nothing is missable", "Every trophy, Favor and collectible can be finished after the story, in one playthrough."],
    ["Difficulty does not matter", "No trophy needs a difficulty. Drop to Give Me Story for a hard fight and change back any time."],
    ["Berserkers unlock mid-story", "The gravestones open once you have the Inert Hilt of Skofnung from The Word of Fate. They are easier after the story."],
    ["King Hrolf", "Aim for gear level 9, buy a Resurrection Stone, and turn on Miniboss Checkpoints under Settings, Accessibility, Combat."],
    ["Level colors", "An orange or purple level on an enemy means you are under-geared. Red means you will not survive it yet."],
    ["Check your counts", "Totals here come from PowerPyx. The realm map in game shows what is left in each area, so trust it if they differ."]
  ]
};
const COL = [].concat(...DATA.collect.map(c => c.items));
const GRADE = { plat: "Platinum", gold: "Gold", silver: "Silver", bronze: "Bronze" };

const ICON = {
  home: '<path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6"/>',
  hunt: '<path d="M4 9h16v10H4zM4 9l2-4h12l2 4M10 13h4"/>',
  boss: '<path d="M12 3c-4 0-7 3-7 7 0 2.5 1.2 4 2.5 5v3h9v-3c1.3-1 2.5-2.5 2.5-5 0-4-3-7-7-7zM9.5 11h.01M14.5 11h.01M10 21v-3M14 21v-3"/>',
  troph: '<path d="M8 4h8v5a4 4 0 01-8 0zM8 6H5a3 3 0 003 4M16 6h3a3 3 0 01-3 4M12 13v4M8 20h8M9 17h6"/>',
  lib: '<path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h10"/>'
};

const got = i => !!state.troph[i];
const colHave = i => Math.min(COL[i][1], Number(state.col[i]) || 0);
function counts() {
  const t = DATA.trophies.filter((_, i) => got(i)).length;
  const b = DATA.berserkers.filter((_, i) => state.bers[i]).length;
  const have = COL.reduce((s, _, i) => s + colHave(i), 0), all = COL.reduce((s, c) => s + c[1], 0);
  return { t, b, have, all, pct: Math.round(100 * have / all) };
}
const pct = (a, b) => Math.round(100 * a / b);

function header() {
  const c = counts();
  return `<span>Collectibles ${c.pct}%</span><b>Trophies ${c.t}/${DATA.trophies.length}</b>`;
}
function renderHome() {
  const c = counts(), T = DATA.trophies.length, next = DATA.trophies.map((t, i) => [t, i]).filter(([, i]) => i > 0 && !got(i)).slice(0, 3);
  let h = `<section class="card next"><div class="label">Road to platinum</div>
    <h2>${c.t === T ? "Platinum earned" : c.t + " of " + T + " trophies"}</h2>
    <div class="bar" style="margin:4px 0 12px"><i style="width:${pct(c.t, T)}%"></i></div>`;
  if (next.length) h += `<p class="note" style="margin:0 0 4px">Next up:</p>` + next.map(([t, i]) => taskRow(false, t[0], esc(t[2]) + ` <span class="pill ${t[1]}">${GRADE[t[1]]}</span>`, `data-act="troph" data-i="${i}"`)).join("");
  h += `<div class="btnrow" style="margin-top:10px"><button class="btn primary" data-act="tab" data-k="troph">All trophies</button></div></section>`;
  h += `<section class="card"><div class="label">Collectibles</div><div class="big" style="margin-top:4px">${c.pct}%</div>
    <div class="note">${fmt(c.have)} of ${fmt(c.all)} found across the Nine Realms.</div>
    <div class="btnrow" style="margin-top:12px"><button class="btn" data-act="tab" data-k="hunt">Update counts</button></div></section>`;
  h += `<section class="card"><div class="label">Berserkers</div><div class="big" style="margin-top:4px">${c.b}/${DATA.berserkers.length}</div>
    <div class="note">${state.bers[DATA.berserkers.length - 1] ? "King Hrolf is down." : "King Hrolf wakes once all the others are beaten."}</div>
    <div class="btnrow" style="margin-top:12px"><button class="btn" data-act="tab" data-k="boss">Berserker list</button><button class="btn" data-act="goto" data-tab="lib" data-lib="tips">Tips</button></div></section>`;
  return h;
}
function renderHunt() {
  let h = "";
  DATA.collect.forEach(grp => {
    const off = COL.indexOf(grp.items[0]);
    const have = grp.items.reduce((s, _, j) => s + colHave(off + j), 0), all = grp.items.reduce((s, c) => s + c[1], 0);
    h += `<section class="card"><div class="label">${esc(grp.g)} (${have}/${all})</div>` + grp.items.map((it, j) => {
      const i = off + j, n = colHave(i), done = n >= it[1];
      return `<div class="item"><div class="nm">${esc(it[0])}</div><div class="short ${done ? "ok" : ""}">${done ? "Done" : n + "/" + it[1]}</div>
        ${it[2] ? `<div class="wh">Counts toward ${esc(it[2])}</div>` : ""}
        <div class="stepper"><button data-act="cdec" data-i="${i}" aria-label="One fewer ${esc(it[0])}">−</button>
        <input type="number" inputmode="numeric" min="0" max="${it[1]}" value="${n}" data-act="col" data-i="${i}" aria-label="${esc(it[0])} found">
        <button data-act="cinc" data-i="${i}" aria-label="One more ${esc(it[0])}">+</button><span class="need">of ${it[1]}</span></div></div>`;
    }).join("") + `</section>`;
  });
  return h + `<p class="note">Totals are from PowerPyx's 100% guide. Your realm map in game shows what is left in each area.</p>`;
}
function renderBoss() {
  const B = DATA.berserkers, done = B.filter((_, i) => state.bers[i]).length, armed = state.confirm === "bers";
  return `<section class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><div class="label">Berserkers (${done}/${B.length})</div>
    <button class="btn" data-act="bclear">${armed ? "Tap again to clear" : "Clear ticks"}</button></div>` +
    B.map((b, i) => taskRow(!!state.bers[i], b[0], esc(b[1] + ", " + b[2]), `data-act="bers" data-i="${i}"`)).join("") +
    `<p class="note" style="margin:10px 0 0">Beating all of them is the Fit for a King Favor and the Grave Mistake trophy. Locations from PowerPyx.</p></section>
    <section class="card"><div class="label">Other optional bosses</div>` +
    [[4, "Gná, Queen of the Valkyries"], [19, "The Trials of Muspelheim"]].map(([i, n]) => taskRow(got(i), n, "Trophy: " + esc(DATA.trophies[i][0]), `data-act="troph" data-i="${i}"`)).join("") + `</section>`;
}
function renderTroph() {
  const T = DATA.trophies, f = state.tf;
  const per = Object.keys(GRADE).map(g => { const all = T.filter(t => t[1] === g), have = all.filter(t => got(T.indexOf(t))).length; return `<div class="kv"><span>${GRADE[g]}</span><b>${have}/${all.length}</b></div>`; }).join("");
  const rows = T.map((t, i) => [t, i]).filter(([, i]) => f === "all" || (f === "todo" ? !got(i) : got(i)));
  return `<div class="seg" role="group" aria-label="Show">${[["all","All"],["todo","To do"],["done","Earned"]].map(([k, n]) => `<button data-act="tf" data-k="${k}" aria-pressed="${f === k}">${n}</button>`).join("")}</div>
    <section class="card"><div class="label">By grade</div>${per}<p class="note" style="margin:8px 0 0">No trophy is missable and none needs a set difficulty.</p></section>
    <section class="card">${rows.length ? rows.map(([t, i]) => taskRow(got(i), t[0], esc(t[2]) + ` <span class="pill ${t[1]}">${GRADE[t[1]]}</span>`, `data-act="troph" data-i="${i}"`)).join("") : '<div class="empty">Nothing here yet.</div>'}</section>
    <p class="note">The platinum ticks itself once the other 35 are earned. Names and conditions from PowerPyx.</p>`;
}
const NOTE_FIELDS = [["quest","Current quest"],["build","Gear and build"],["todo","Reminders"]];
function renderLib() {
  const tabs = [["tips","Tips"],["notes","Notes"]];
  const head = `<div class="seg" role="group" aria-label="Library section">${tabs.map(([k, n]) => `<button data-act="lib" data-k="${k}" aria-pressed="${state.lib === k}">${n}</button>`).join("")}</div>`;
  if (state.lib === "notes") {
    const n = state.notes || {};
    return head + `<section class="card"><div class="label">My notes</div><p class="note" style="margin:6px 0 4px">Private to you. Saved as you type.</p>` +
      NOTE_FIELDS.map(([k, t]) => `<label class="field" style="margin-top:12px">${t}<textarea data-note="${k}" rows="3" placeholder="Type here">${esc(n[k] || "")}</textarea></label>`).join("") + `</section>`;
  }
  return head + `<section class="card">` + DATA.tips.map(t => `<div class="lib"><h3>${esc(t[0])}</h3><p>${esc(t[1])}</p></div>`).join("") + `</section>
    <p class="note">From PowerPyx and Push Square trophy guides.</p>`;
}

function syncPlat() { const rest = DATA.trophies.every((_, i) => i === 0 || got(i)); if (rest) state.troph[0] = true; else delete state.troph[0]; }
function onClick(a, b) {
  const i = Number(b.dataset.i);
  if (a === "goto") { state.tab = b.dataset.tab; if (b.dataset.lib) state.lib = b.dataset.lib; return "nav"; }
  if (a === "troph") { if (i === 0) return; state.troph[i] = !state.troph[i]; if (!state.troph[i]) delete state.troph[i]; syncPlat(); }
  else if (a === "bers") { state.bers[i] = !state.bers[i]; if (!state.bers[i]) delete state.bers[i]; }
  else if (a === "bclear") { if (state.confirm !== "bers") { state.confirm = "bers"; return "render"; } state.bers = {}; }
  else if (a === "cinc" || a === "cdec") { state.col[i] = Math.max(0, Math.min(COL[i][1], colHave(i) + (a === "cinc" ? 1 : -1))); }
  else if (a === "tf") { state.tf = b.dataset.k; }
  else if (a === "lib") { state.lib = b.dataset.k; }
  else return;
  state.confirm = "";
  return "save";
}
function onChange(a, t, n) {
  if (a !== "col") return;
  const i = Number(t.dataset.i); state.col[i] = Math.min(COL[i][1], n);
  return "save";
}

registerGame({
  id: "gowr",
  name: "God of War Ragnarök",
  title: "Ragnarök",
  blurb: "Trophies, collectibles, Berserkers",
  themeColor: "#2a6496",
  storageKey: "arrakis-gowr-v1",
  syncDoc: "state-gowr",
  mark: '<path d="M6 20L18 4M14 4h4v4M5 10c2 0 4 2 4 4s-2 4-4 4"/>',
  tabs: [["home","Home"],["hunt","Collect"],["boss","Bosses"],["troph","Trophies"],["lib","Library"]],
  icons: ICON,
  defaults: () => ({ u: 0, tab: "home", troph: {}, bers: {}, col: {}, tf: "all", lib: "tips", notes: {}, confirm: "" }),
  header,
  views: { home: renderHome, hunt: renderHunt, boss: renderBoss, troph: renderTroph, lib: renderLib },
  inputActs: ["col"],
  onClick, onChange
});
})();
