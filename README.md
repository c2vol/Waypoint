# Waypoint

A free companion app for the games you play. It installs on your phone or computer like a regular app and works offline. Tap the game name at the top to switch games; each game keeps its own progress.

Games so far:

- **Dune: Awakening**: crafting recipes and planner, Deep Desert map, faction rank calculator, base checklists and endgame reference.
- **God of War Ragnarök** (PS5): trophy checklist with grades, collectible counters per type, Berserker tracker, tips and notes.

## Dune: Awakening

- **Home**: Countdown to the weekly reset, your faction rank snapshot, and quick links.
- **Craft**: Recipes for Cutterays, unique weapons, compactors and vehicle turrets, with a shortfall tracker for what you have versus what you need. A build planner adds up one shopping list across everything you want to craft, in raw materials or as listed.
- **Base**: Tick lists for workshop and refinery setup, storage and supplies, vehicles, and a pre-reset checklist.
- **Rank**: Faction rank calculator that estimates how many days you need to reach a target rank.
- **Maps**: Tappable Deep Desert grid for the current week, where you can mark your own finds, plus links to interactive maps for Hagga Basin and other areas.
- **Library**: Resource and gear reference, crafting tiers, a Landsraad overview, and private notes.

## God of War Ragnarök

- **Home**: Platinum progress, the next trophies to go for, collectibles and Berserker totals.
- **Collect**: Counters for Ravens, Artifacts, Lore, chests, Rifts, flowers, Lindwyrms and the rest, with the trophy each one feeds.
- **Bosses**: All Berserker gravestones with realm and area, plus Gná and the Muspelheim Trials.
- **Trophies**: All 36, filterable, with totals per grade. The platinum ticks itself.
- **Library**: Tips for the platinum and private notes.

## Install

- **iPhone:** open the site in Safari, tap Share, then **Add to Home Screen**.
- **Mac:** in Safari, choose File, then **Add to Dock**. In Chrome, click the install icon in the address bar.

## Notes

- Your progress and notes are saved on your own device only. There is no account and nothing is sent anywhere.
- Dune recipe numbers come from the community Awakening Wiki as of October 2026 and may change with game updates. Items marked unconfirmed in the app are not verified.
- The Deep Desert layout is for one week and does not update itself. Check an online companion map after each weekly reset.
- Fan-made and unofficial. Not affiliated with Funcom or Legendary.
- God of War Ragnarök totals come from the PowerPyx 100% guide and trophy list. The in-game realm map is the final word.

## Code layout

No build step: serve the folder with any static server (for example `python3 -m http.server`) and open it.

- `index.html`: page shell and all styles, including each game's palette.
- `js/core.js`: shared helpers and `registerGame()`.
- `games/<id>.js`: one file per game, with its data, tabs, views and actions.
- `js/app.js`: game switcher, saving, sync and event routing. Loaded last.
- `sw.js`: offline cache. Add new files to its list and bump its version.

To add a game, copy `games/gowr.js`, change the `id`, `storageKey` and content, add a `<script>` tag for it in `index.html` before `js/app.js`, add it to `sw.js`, and optionally add a palette under `:root[data-game="<id>"]` in `index.html`.

The app was called Arrakis when it only covered Dune, so the repository and the saved-progress keys still use that name. Renaming the repository on GitHub is optional and does not affect anyone's saved progress.
