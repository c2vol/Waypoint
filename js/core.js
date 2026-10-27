/* Shared helpers and the game registry. Loaded before any game pack. */
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const fmt = n => Number(n).toLocaleString("en-US");

// The current game's saved state. app.js swaps it when you change game.
let state = {};

/* A game pack calls registerGame({...}) with:
   id, name, title, blurb, themeColor, mark (svg paths), storageKey, syncDoc,
   tabs [[key, label]], icons {key: svg paths}, defaults(), header(), views {key: fn},
   inputActs [acts whose clicks are ignored], onClick(act, el), onChange(act, el, n), onInput(event).
   onClick and onChange return "save", "render" or "nav", or nothing when the act is not theirs. */
const GAMES = [];
function registerGame(g) { GAMES.push(g); }

// A tick row, shared by checklists in every game.
const CHECK = '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
function taskRow(on, title, why, attrs) {
  return `<button class="task" ${attrs} aria-pressed="${on}"><span class="chk" style="${on ? "background:var(--good);border-color:var(--good)" : ""}">${CHECK.replace("<svg", `<svg style="opacity:${on ? 1 : 0}"`)}</span>
    <span class="stitle"><b>${esc(title)}</b>${why ? `<span class="why">${why}</span>` : ""}</span></button>`;
}
