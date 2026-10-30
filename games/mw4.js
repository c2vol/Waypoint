/* Call of Duty: Modern Warfare 4 pack (PS5). Camo tracker for the 33 launch weapons.
   Weapons and camo challenges from Game8, GamesRadar and Codmunity, October 2026. */
(function () {
// [key, class name, Platinum challenge, Harmonic Break challenge, weapons]. Challenges are "Multiplayer · DMZ".
const CLASSES = [
  ["ar", "Assault Rifles", "50 headshots · 100 in DMZ", "25 double kills · 50 in DMZ",
    ["Kastov 762", "Han 86", "Hyeon Burst", "Patriot XMR", "Axion", "Cronen Squall", "M4", "Oden"]],
  ["smg", "SMGs", "25 kills from behind · 75 in DMZ", "50 hipfire kills · 100 in DMZ",
    ["X-58 Nyx", "Vel 46", "ISO Nightshade", "WZ.55 Striga", "PPSh-41"]],
  ["sg", "Shotguns", "50 hipfire kills · 125 in DMZ", "2 kills without reloading, 25 times · 50 in DMZ",
    ["Rezi 12", "Warlord"]],
  ["lmg", "LMGs", "3 kills without dying, 15 times · 3 kills without taking damage, 50 times in DMZ", "2 kills without releasing the trigger, 25 times · 75 in DMZ",
    ["APOC-338", "FiNN LMG", "Type 73"]],
  ["mr", "Marksman Rifles", "75 prone kills · 150 in DMZ", "75 one-shot kills · 150 in DMZ",
    ["Mosin-Nagant", "MAR-9", "Oris 8.6"]],
  ["sr", "Sniper Rifles", "75 prone kills · 150 in DMZ", "75 one-shot kills · 150 in DMZ",
    ["Astaroth .57", "Signal 50", "KG-7 Vulcan"]],
  ["pis", "Pistols", "20 kills from behind · 75 in DMZ", "40 hipfire kills · 100 in DMZ",
    ["SANG 9mm", ".50 GS", "Mojave .357", "Krait P68"]],
  ["lau", "Launchers", "2 kills without taking damage, 15 times · 50 in DMZ", "10 kills in a match, 7 times · 15 in DMZ",
    ["PILA", "RPG-8", "JOKR", "PM-40 Anvil"]],
  ["mel", "Melee", "3 kills without dying, 15 times · 3 kills without taking damage, 50 times in DMZ", "25 kills from behind · 75 in DMZ",
    ["FSS Carbon Edge 1095"]]
];
// Every weapon, flattened: { n: name, c: class row }. Indexes are what we save, so only ever add to the end of a class list.
const W = [].concat(...CLASSES.map(c => c[4].map(n => ({ n, c }))));
const MIL = 8, SPEC = 3;
const TIERS = ["Gold", "Platinum", "Harmonic Break"];
const MP = [["Mercurial Drift", "10 kills in a match, 250 times"], ["Polyatomic Reforged", "3 kills without taking damage in a match, 300 times"], ["Orion Reforged", "5 kills without dying in a match, 500 times"]];
const DMZ = [["Chiral", "2,500 Tier 3+ enemy kills"], ["Ripple Tide", "Exfil 2 Lieutenant dog tags in one deployment, 50 times"], ["Helio", "25,000 kills with legendary weapons on a max-level operator"]];
const PRESTIGE = [["Pyroclast", "Prestige the weapon"], ["Pyroclast Terminus", "Max the weapon level after its first prestige"], ["Pyroclast Scatter", "Prestige Master level 150"], ["Pyroclast Cascade", "Prestige Master level 250"]];
const TIP = [
  ["How the ladder works", "Level a weapon for its 8 military camos, then earn its 3 special camos. That opens Gold. Gold on every weapon in a class opens Platinum for that class. Platinum on all 33 opens Harmonic Break, and Harmonic Break on all 33 unlocks Divergence."],
  ["Gold", "Get 15 kills in one Multiplayer match, or 100 enemy kills in one DMZ match (50 for launchers)."],
  ["After Divergence", "Two mastery tracks open on each weapon. Multiplayer: Mercurial Drift, Polyatomic Reforged, Orion Reforged. DMZ: Chiral, Ripple Tide, Helio. They are long grinds, so pick favorites."],
  ["Pick either mode", "Every challenge has a Multiplayer count and a bigger DMZ count. Use whichever mode you enjoy; both fill the same camo."],
  ["Pin what you are grinding", "Tap Pin on a weapon and it shows on Home with its next camo and the challenge, so you can check it between matches."],
  ["Prestige camos are separate", "Pyroclast camos come from weapon prestige, not challenges, and are not needed for Divergence."],
  ["Check your counts", "Challenge numbers come from Game8, GamesRadar and Codmunity in the first week after launch and may change with patches. The in-game camo screen is the final word."]
];

const ICON = {
  home: '<path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6"/>',
  guns: '<path d="M3 9h14l2 2h2v3h-6l-1 2h-3l1-2H8l-2 5H3l2-5H3z"/>',
  mast: '<path d="M12 3l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.4 6.8 19.1l1-5.8L3.5 9.2l5.9-.9z"/>',
  lib: '<path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h10"/>'
};

// One weapon's saved progress: m military (0-8), s special (0-3), t top tier (0-3), mp and dmz mastery (0-3).
const wp = i => Object.assign({ m: 0, s: 0, t: 0, mp: 0, dmz: 0 }, state.w[i]);
const camos = p => p.m + p.s + p.t + p.mp + p.dmz;
const MAXC = MIL + SPEC + 3 + 3 + 3;
const tierAt = k => W.filter((_, i) => wp(i).t >= k).length;
const classTier = (c, k) => W.filter((w, i) => w.c === c && wp(i).t >= k).length;
const pct = (a, b) => Math.round(100 * a / b);
function top(p) {
  if (p.mp || p.dmz) return [p.mp >= p.dmz ? MP[p.mp - 1][0] : DMZ[p.dmz - 1][0], "hb"];
  if (p.t) return [TIERS[p.t - 1], ["gold", "plat", "hb"][p.t - 1]];
  if (p.s) return [p.s + " special", ""];
  if (p.m) return [p.m + " military", ""];
  return ["No camos yet", ""];
}
// What this weapon needs next, as [camo, how].
function nextUp(i) {
  const p = wp(i), c = W[i].c, size = c[4].length;
  if (p.m < MIL) return ["Military camo " + (p.m + 1), "Keep levelling the weapon"];
  if (p.s < SPEC) return ["Special camo " + (p.s + 1), "Complete its special camo challenge in game"];
  if (p.t === 0) return ["Gold", "15 kills in one match · 100 in one DMZ match" + (c[0] === "lau" ? " (50 for launchers)" : "")];
  if (p.t === 1) { const g = classTier(c, 1); return ["Platinum", g < size ? `Needs Gold on every ${c[1].replace(/s$/, "")} first (${g}/${size}). Then ${c[2]}` : c[2]]; }
  if (p.t === 2) { const pl = tierAt(2); return ["Harmonic Break", pl < W.length ? `Needs Platinum on all ${W.length} weapons first (${pl}/${W.length}). Then ${c[3]}` : c[3]]; }
  const hb = tierAt(3);
  if (hb < W.length) return ["Divergence", `Harmonic Break on all ${W.length} weapons (${hb}/${W.length})`];
  if (p.mp < 3) return [MP[p.mp][0], MP[p.mp][1]];
  if (p.dmz < 3) return [DMZ[p.dmz][0], DMZ[p.dmz][1] + " in DMZ"];
  return ["Done", "Every camo on this weapon"];
}

function header() {
  return `<span>Gold ${tierAt(1)}/${W.length}</span><b>Harmonic Break ${tierAt(3)}/${W.length}</b>`;
}
function renderHome() {
  const g = tierAt(1), pl = tierAt(2), hb = tierAt(3), N = W.length;
  const stage = hb === N ? "Divergence unlocked" : pl === N ? hb + " of " + N + " Harmonic Break" : g === N ? pl + " of " + N + " Platinum" : g + " of " + N + " Gold";
  let h = `<section class="card next"><div class="label">Road to Divergence</div><h2>${stage}</h2>
    <div class="kv"><span>Gold</span><b>${g}/${N}</b></div><div class="kv"><span>Platinum</span><b>${pl}/${N}</b></div><div class="kv"><span>Harmonic Break</span><b>${hb}/${N}</b></div>
    <div class="bar" style="margin:8px 0 12px"><i style="width:${pct(g + pl + hb, 3 * N)}%"></i></div>
    <div class="btnrow"><button class="btn primary" data-act="tab" data-k="guns">Update camos</button></div></section>`;
  const pins = W.map((w, i) => i).filter(i => state.pin[i]);
  h += `<section class="card"><div class="label">Grinding now</div>`;
  h += pins.length ? pins.map(i => { const [n, how] = nextUp(i); return `<button class="nextitem task" data-act="goto" data-i="${i}">
      <span class="stitle"><b>${esc(W[i].n)}</b><span class="why">Next: <b style="display:inline;color:var(--fg)">${esc(n)}</b>. ${esc(how)}</span></span></button>`; }).join("")
    : `<p class="note" style="margin:6px 0 0">Open a weapon on the Camos tab and tap Pin. It shows here with its next camo and the challenge to do.</p>`;
  h += `</section>`;
  const closest = CLASSES.filter(c => classTier(c, 1) < c[4].length).map(c => [c, classTier(c, 1) / c[4].length]).sort((a, b) => b[1] - a[1])[0];
  if (closest && closest[1] > 0) {
    const c = closest[0];
    h += `<section class="card"><div class="label">Closest Platinum unlock</div><h2 style="margin-top:4px">${esc(c[1])}</h2>
      <div class="note">${classTier(c, 1)} of ${c[4].length} have Gold. Gold on the rest opens Platinum for the class.</div>
      <div class="btnrow" style="margin-top:12px"><button class="btn" data-act="cls" data-k="${c[0]}" data-go="1">Show ${esc(c[1])}</button></div></section>`;
  }
  return h;
}
function stepper(i, f, have, max, what) {
  return `<div class="item"><div class="nm">${what}</div><div class="short ${have >= max ? "ok" : ""}">${have >= max ? "Done" : have + "/" + max}</div>
    <div class="stepper"><button data-act="cdec" data-i="${i}" data-f="${f}" aria-label="One fewer ${what}">−</button>
    <input type="number" inputmode="numeric" min="0" max="${max}" value="${have}" data-act="cnum" data-i="${i}" data-f="${f}" aria-label="${what} earned">
    <button data-act="cinc" data-i="${i}" data-f="${f}" aria-label="One more ${what}">+</button><span class="need">of ${max}</span></div></div>`;
}
function ladder(i, f, have, rows) {
  return rows.map((r, k) => taskRow(have > k, r[0], esc(r[1]), `data-act="rung" data-i="${i}" data-f="${f}" data-k="${k + 1}"`)).join("");
}
function weaponCard(i) {
  const w = W[i], p = wp(i), open = state.open === i, [tn, tc] = top(p);
  let h = `<section class="phase ${open ? "open" : ""}"><button class="phead" data-act="wopen" data-i="${i}" aria-expanded="${open}">
    <span class="t"><h2>${esc(w.n)}${state.pin[i] ? ' <span class="pill now">Pinned</span>' : ""}</h2><span class="meta"><span class="pill ${tc}">${esc(tn)}</span></span></span>
    <span class="n">${camos(p)}/${MAXC}</span>${CHEV}</button><div class="pbar"><i style="width:${pct(camos(p), MAXC)}%"></i></div>`;
  if (open) {
    const c = w.c;
    h += `<div class="detail" style="padding-left:16px">` + stepper(i, "m", p.m, MIL, "Military camos") + stepper(i, "s", p.s, SPEC, "Special camos") +
      `<div><div class="label">Mastery</div>` + ladder(i, "t", p.t, [["Gold", "15 kills in one match · 100 in one DMZ match"], ["Platinum", `Gold on all ${c[4].length} ${c[1]}, then ${c[2]}`], ["Harmonic Break", `Platinum on all ${W.length} weapons, then ${c[3]}`]]) + `</div>
      <div><div class="label">Multiplayer, after Divergence</div>` + ladder(i, "mp", p.mp, MP) + `</div>
      <div><div class="label">DMZ, after Divergence</div>` + ladder(i, "dmz", p.dmz, DMZ) + `</div>
      <div class="btnrow"><button class="btn ${state.pin[i] ? "" : "primary"}" data-act="pin" data-i="${i}">${state.pin[i] ? "Unpin" : "Pin to Home"}</button></div></div>`;
  }
  return h + `</section>`;
}
function renderGuns() {
  const f = state.cls;
  const chips = [["all", "All"], ["pin", "Pinned"]].concat(CLASSES.map(c => [c[0], c[1]]));
  let h = `<div class="chips" role="group" aria-label="Weapon class">${chips.map(([k, n]) => `<button class="chip" data-act="cls" data-k="${k}" aria-pressed="${f === k}">${esc(n)}</button>`).join("")}</div>`;
  const list = W.map((w, i) => i).filter(i => f === "all" || (f === "pin" ? state.pin[i] : W[i].c[0] === f));
  if (!list.length) return h + `<div class="empty">${f === "pin" ? "Nothing pinned yet. Open a weapon and tap Pin to Home." : "Nothing here."}</div>`;
  return h + list.map(weaponCard).join("") + `<p class="note">Ticking Gold also fills in the military and special camos, since Gold needs them. The in-game camo screen is the final word.</p>`;
}
function renderMast() {
  const N = W.length, hb = tierAt(3);
  const rows = CLASSES.map(c => `<div class="kv"><span>${esc(c[1])}</span><b>${classTier(c, 1)} · ${classTier(c, 2)} · ${classTier(c, 3)} <span style="color:var(--muted);font-weight:400">of ${c[4].length}</span></b></div>`).join("");
  const mpN = k => W.filter((_, i) => wp(i).mp >= k).length, dzN = k => W.filter((_, i) => wp(i).dmz >= k).length;
  return `<section class="card next"><div class="label">Divergence</div><h2>${hb === N ? "Unlocked" : hb + " of " + N + " Harmonic Break"}</h2>
      <div class="bar" style="margin:4px 0 8px"><i style="width:${pct(hb, N)}%"></i></div>
      <p class="note" style="margin:0">Harmonic Break on every weapon unlocks Divergence and the two mastery tracks below.</p></section>
    <section class="card"><div class="label">By class: Gold · Platinum · Harmonic Break</div>${rows}</section>
    <section class="card"><div class="label">Multiplayer mastery</div>${MP.map((m, k) => `<div class="kv"><span>${m[0]}</span><b>${mpN(k + 1)}/${N}</b></div>`).join("")}</section>
    <section class="card"><div class="label">DMZ mastery</div>${DMZ.map((m, k) => `<div class="kv"><span>${m[0]}</span><b>${dzN(k + 1)}/${N}</b></div>`).join("")}</section>`;
}
const NOTE_FIELDS = [["grind", "What I'm grinding"], ["loadouts", "Loadouts"], ["todo", "Reminders"]];
function renderLib() {
  const tabs = [["guide", "Guide"], ["class", "By class"], ["notes", "Notes"]];
  const head = `<div class="seg" role="group" aria-label="Guide section">${tabs.map(([k, n]) => `<button data-act="lib" data-k="${k}" aria-pressed="${state.lib === k}">${n}</button>`).join("")}</div>`;
  if (state.lib === "notes") {
    const n = state.notes || {};
    return head + `<section class="card"><div class="label">My notes</div><p class="note" style="margin:6px 0 4px">Private to you. Saved as you type.</p>` +
      NOTE_FIELDS.map(([k, t]) => `<label class="field" style="margin-top:12px">${t}<textarea data-note="${k}" rows="3" placeholder="Type here">${esc(n[k] || "")}</textarea></label>`).join("") + `</section>`;
  }
  if (state.lib === "class") {
    return head + CLASSES.map(c => `<section class="card"><div class="label">${esc(c[1])} (${c[4].length})</div>
      <div class="lib"><h3>Platinum</h3><p>${esc(c[2])}</p></div><div class="lib"><h3>Harmonic Break</h3><p>${esc(c[3])}</p></div>
      <p class="note" style="margin:8px 0 0">${esc(c[4].join(", "))}</p></section>`).join("") +
      `<p class="note">Multiplayer count first, then the DMZ count. From Game8 and Codmunity.</p>`;
  }
  return head + `<section class="card">` + TIP.map(t => `<div class="lib"><h3>${esc(t[0])}</h3><p>${esc(t[1])}</p></div>`).join("") + `</section>
    <section class="card"><div class="label">Prestige camos</div>${PRESTIGE.map(p => `<div class="kv"><span>${p[0]}</span><b style="text-align:right">${p[1]}</b></div>`).join("")}</section>
    <p class="note">From Game8, GamesRadar and Codmunity camo guides, October 2026.</p>`;
}

function setW(i, p) { state.w[i] = p; }
function onClick(a, b) {
  const i = Number(b.dataset.i), f = b.dataset.f;
  if (a === "goto") { state.tab = "guns"; state.open = i; state.cls = "all"; return "nav"; }
  if (a === "wopen") { state.open = state.open === i ? -1 : i; return "render"; }
  if (a === "cls") { state.cls = b.dataset.k; if (b.dataset.go) { state.tab = "guns"; return "nav"; } }
  else if (a === "lib") { state.lib = b.dataset.k; }
  else if (a === "pin") { state.pin[i] = !state.pin[i]; if (!state.pin[i]) delete state.pin[i]; }
  else if (a === "cinc" || a === "cdec") {
    const p = wp(i), max = f === "m" ? MIL : SPEC;
    p[f] = Math.max(0, Math.min(max, p[f] + (a === "cinc" ? 1 : -1))); setW(i, p);
  }
  else if (a === "rung") {
    // Tapping the highest ticked camo unticks it; tapping any other sets the track to that camo.
    const p = wp(i), k = Number(b.dataset.k);
    p[f] = p[f] === k ? k - 1 : k;
    if (p.t >= 1) { p.m = MIL; p.s = SPEC; }
    if (f !== "t" && p[f] > 0) p.t = 3;
    if (f === "t" && p.t < 3) { p.mp = 0; p.dmz = 0; }
    setW(i, p);
  }
  else return;
  return "save";
}
function onChange(a, t, n) {
  if (a !== "cnum") return;
  const i = Number(t.dataset.i), f = t.dataset.f, p = wp(i);
  p[f] = Math.min(f === "m" ? MIL : SPEC, n); setW(i, p);
  return "save";
}

registerGame({
  id: "mw4",
  name: "Modern Warfare 4",
  title: "Modern Warfare 4",
  blurb: "Camo tracker for all 33 weapons",
  themeColor: "#4d6a24",
  storageKey: "arrakis-mw4-v1",
  syncDoc: "state-mw4",
  art: '<svg viewBox="0 0 64 64" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="64" height="64" fill="#1c2414"/><path d="M0 0h14v10H6v8H0zM22 4h16v8h-8v6H22zM46 0h18v14h-8V8h-10zM0 30h10v12H0zM50 26h14v14h-6v-6h-8zM14 48h14v8h8v8H14zM40 50h12v6h12v8H40z" fill="#3c4a26"/><path d="M8 18h8v8H8zM34 14h10v8H34zM18 34h6v6h-6zM44 40h8v8h-8z" fill="#5b6b38"/><circle cx="32" cy="32" r="13" fill="none" stroke="#e2b34a" stroke-width="2.5"/><path d="M32 13v10M32 41v10M13 32h10M41 32h10" stroke="#e2b34a" stroke-width="2.5" stroke-linecap="round"/><circle cx="32" cy="32" r="2.2" fill="#f2d68a"/></svg>',
  tabs: [["home", "Home"], ["guns", "Camos"], ["mast", "Mastery"], ["lib", "Guide"]],
  icons: ICON,
  defaults: () => ({ u: 0, tab: "home", w: {}, pin: {}, open: -1, cls: "all", lib: "guide", notes: {} }),
  header,
  summary: () => "Gold " + tierAt(1) + "/" + W.length + ", Harmonic Break " + tierAt(3) + "/" + W.length,
  views: { home: renderHome, guns: renderGuns, mast: renderMast, lib: renderLib },
  inputActs: ["cnum"],
  onClick, onChange
});
})();
