/* Dune: Awakening pack. Everything here is specific to this game; shared helpers come from js/core.js. */
(function () {
const DATA = {"ph": ["P1 Checkpoint", "P2 Cutteray Mk5", "P3 Deep Desert & Plastanium", "P4 Faction, Landsraad & Specialization", "P5 Mk6 Gear", "P6 Augments & Uniques", "P7 Endgame Content", "P8 Weekly Loop"], "recipes": [{"name": "Cutteray Mk5", "cat": "Tools", "src": "Awakening Wiki (matches older guides)", "cooler": true, "note": "Survival Fabricator. Checked against the wiki in Oct 2026, no change.", "items": [["Water", 450, 0, "Deathstills, base water"], ["Duraluminum Ingot", 40, 0, "Medium Ore Refinery: 4 Jasmium Crystal + 1 Aluminum Ingot + 500 water each"], ["EMF Generator", 18, 0, "Found in Fremen areas such as caves; wiki lists no recipe"], ["Cobalt Paste", 16, 0, "Chemical Refinery: 2 Erythrite Crystal (medium) or 3 (small) + 75 water each"], ["Ray Amplifier", 10, 0, "Hagga Rift: The Spiral / CHOAM Mineral Extraction Facilities chests"], ["Thermoelectric Cooler", 7, 0, "Crossroads Tradepost, Deep Desert Shield Wall chests, Exchange"]]}, {"name": "Long Shot", "cat": "Weapons", "src": "Your schematic card", "note": "Your in-game card is what counts. The wiki lists higher numbers (170 water, 25 Aluminum Ingot, 10 Mechanical Parts, 15 Silicone, 25 Gun Parts, 5 Compressors, 8 Dust), so if yours differ, edit the amounts you see. Also needs 1 Imperial Permit and a Weapons Fabricator. Wiki stats: 209 damage, 2-round clip, 75 m.", "items": [["Water", 130, 0, "From your schematic card"], ["Aluminum Ingot", 21, 0, "Medium Ore Refinery"], ["Mechanical Parts", 7, 0, ""], ["Silicone Block", 12, 0, "Chemical Refinery"], ["Gun Parts", 21, 0, ""], ["Heavy Caliber Compressor", 4, 12, "You had enough"], ["Spice-infused Aluminum Dust", 6, 15, "You had enough"]]}, {"name": "Cutteray Mk6", "cat": "Tools", "src": "Awakening Wiki", "note": "CORRECTED: Spice Melange is 27 (older guides said 20). Advanced Survival Fabricator. One wiki page lists the Mk6 cooler count as 7 instead of 9, so check your own card.", "items": [["Water", 700, 0, ""], ["Plastanium Ingot", 50, 0, "Medium Ore Refinery: 6 Titanium Ore + 1 Stravidium Fiber + 1,250 water (Large: 4 Titanium)"], ["Spice Melange", 27, 0, "Refine Spice Sand"], ["EMF Generator", 30, 0, ""], ["Cobalt Paste", 30, 0, ""], ["Thermoelectric Cooler", 9, 0, ""], ["Thermo-Responsive Ray Amplifier", 6, 0, "Advanced Survival Fabricator: 3 Ray Amplifier + 2 Plasteel Plate + 2 Copper Ingot + 50 water, or Deep Desert / Landsraad reward"]]}, {"name": "Tarl Cutteray", "cat": "Tools", "src": "Awakening Wiki", "note": "Unique. Survival Fabricator. Schematic: Wreck of the Euporia (about 14%) or The Exchange.", "items": [["Water", 450, 0, ""], ["Duraluminum Ingot", 45, 0, ""], ["EMF Generator", 20, 0, ""], ["Cobalt Paste", 18, 0, ""], ["Ray Amplifier", 12, 0, ""], ["Thermoelectric Cooler", 8, 0, ""], ["Spice-infused Duraluminum Dust", 10, 0, ""]]}, {"name": "Kynes's Cutteray", "cat": "Tools", "src": "Awakening Wiki", "note": "Unique. Advanced Survival Fabricator. Schematic is sold on The Exchange; no drop location is confirmed on the wiki.", "items": [["Water", 700, 0, ""], ["Plastanium Ingot", 55, 0, ""], ["Spice Melange", 72, 0, ""], ["EMF Generator", 35, 0, ""], ["Cobalt Paste", 35, 0, ""], ["Thermo-Responsive Ray Amplifier", 7, 0, ""], ["Thermoelectric Cooler", 10, 0, ""], ["Spice-infused Plastanium Dust", 14, 0, "Testing Stations (hard-to-reach spots)"]]}, {"name": "Dunewatcher", "cat": "Weapons", "src": "Awakening Wiki", "note": "Unique sniper, about 346 damage per shot. Advanced Weapons Fabricator. Schematic: Landsraad Weapons Vendor (65,000 Solari) or The Exchange.", "items": [["Water", 530, 0, ""], ["Plastanium Ingot", 45, 0, ""], ["Spice Melange", 62, 0, ""], ["Mechanical Parts", 16, 0, ""], ["Silicone Block", 31, 0, ""], ["Plasteel Composite Gun Parts", 16, 0, ""], ["Fluted Heavy Caliber Compressor", 6, 0, ""], ["Spice-infused Plastanium Dust", 10, 0, ""]]}, {"name": "Arhun K-28 Lasgun", "cat": "Weapons", "src": "Awakening Wiki", "note": "Automatic lasgun, about 64 damage per shot at 600 RPM, 80 m. Weapons Fabricator and 1 Imperial Permit. Schematic: Testing Station 37 or 185 (about 1.4% each) or The Exchange.", "items": [["Water", 340, 0, ""], ["Duraluminum Ingot", 55, 0, ""], ["Mechanical Parts", 25, 0, ""], ["Cobalt Paste", 20, 0, ""], ["Gun Parts", 47, 0, ""], ["Ray Amplifier", 16, 0, ""], ["Spice-infused Duraluminum Dust", 18, 0, ""]]}, {"name": "Assassin's Rifle", "cat": "Weapons", "src": "Awakening Wiki", "note": "Poison sniper, about 128 damage per shot, 2-round clip, 75 m. Weapons Fabricator. Schematic: Arctus Cavern in Hagga Rift (about 14%) or The Exchange.", "items": [["Water", 70, 0, ""], ["Steel Ingot", 14, 0, ""], ["Mechanical Parts", 7, 0, ""], ["Silicone Block", 6, 0, ""], ["Gun Parts", 16, 0, ""], ["Spice-infused Steel Dust", 6, 0, ""]]}, {"name": "Compact Compactor Mk5", "cat": "Base", "src": "Awakening Wiki", "note": "Static compactor with lower power draw and less worm attention. Survival Fabricator. Schematic: Testing Station 37 or 185, or The Exchange.", "items": [["Water", 450, 0, ""], ["Duraluminum Ingot", 37, 0, ""], ["EMF Generator", 20, 0, ""], ["Silicone Block", 40, 0, ""], ["Cobalt Paste", 18, 0, ""], ["Thermoelectric Cooler", 6, 0, ""], ["Spice-infused Duraluminum Dust", 12, 0, ""]]}, {"name": "Compact Compactor Mk6", "cat": "Base", "src": "Awakening Wiki", "note": "Unique static compactor, smaller and lower power draw. Advanced Survival Fabricator. The wiki has no schematic source beyond The Exchange.", "items": [["Water", 700, 0, ""], ["Plastanium Ingot", 45, 0, ""], ["EMF Generator", 24, 0, ""], ["Cobalt Paste", 30, 0, ""], ["Improved Holtzman Actuator", 8, 0, ""], ["Thermoelectric Cooler", 7, 0, ""], ["Spice Melange", 83, 0, ""], ["Spice-infused Plastanium Dust", 14, 0, ""]]}, {"name": "Omni Static Compactor", "cat": "Base", "src": "Awakening Wiki", "note": "Compacts a spice field into a pick-up sand clump. Very high gather rate, drains a Power Pack per use. Advanced Survival Fabricator. Schematic source not listed on the wiki.", "items": [["Water", 700, 0, ""], ["Plastanium Ingot", 40, 0, ""], ["EMF Generator", 24, 0, ""], ["Cobalt Paste", 30, 0, ""], ["Improved Holtzman Actuator", 8, 0, ""], ["Thermoelectric Cooler", 7, 0, ""], ["Spice Melange", 45, 0, ""]]}, {"name": "Buggy Cutteray Mk5", "cat": "Vehicles", "src": "Awakening Wiki", "note": "Mining turret for the Buggy. Vehicle Fabricator. Needs an attached inventory module, and no analysis mode. Schematic source not listed.", "items": [["Water", 1010, 0, ""], ["Duraluminum Ingot", 100, 0, ""], ["Particle Capacitor", 40, 0, ""], ["Cobalt Paste", 35, 0, ""], ["Ray Amplifier", 23, 0, ""], ["Thermoelectric Cooler", 11, 0, ""]]}, {"name": "Buggy Cutteray Mk6", "cat": "Vehicles", "src": "Awakening Wiki", "note": "Mining turret for the Buggy. Advanced Vehicle Fabricator. Schematic source not listed.", "items": [["Water", 1580, 0, ""], ["Plastanium Ingot", 115, 0, ""], ["Particle Capacitor", 54, 0, ""], ["Cobalt Paste", 67, 0, ""], ["Thermo-Responsive Ray Amplifier", 13, 0, ""], ["Thermoelectric Cooler", 15, 0, ""], ["Spice Melange", 81, 0, ""]]}, {"name": "Augment Station", "cat": "Base", "src": "Method / Destructoid (unconfirmed)", "note": "NOT CONFIRMED. The wiki lists the parts (T6 refined resource, Silicone, T2 machine component, Melange Spice, Cobalt Bar, T6 machinery) with no quantities. The numbers below are from older guides, so check the build menu.", "items": [["Plastanium Ingot", 75, 0, ""], ["Spice Melange", 15, 0, ""]]}], "dd": {"week": "27 Oct to 3 Nov", "src": "Method Deep Desert Companion", "poi": [{"c": "D1", "t": "station", "n": "The Agave Farm"}, {"c": "D6", "t": "wreck", "n": "The Walkway"}, {"c": "D7", "t": "station", "n": "The Yellow Bunker"}, {"c": "F8", "t": "wreck", "n": "Deep Dark Wreck"}, {"c": "G3", "t": "station", "n": "The Forgotten Cells"}, {"c": "H1", "t": "wreck", "n": "The Wrecked Wreck"}, {"c": "H8", "t": "wreck", "n": "The Command Centre"}, {"c": "I5", "t": "station", "n": "The Living Quarters"}, {"c": "A3", "t": "station", "n": "Imperial Testing Station 185"}, {"c": "A4", "t": "station", "n": "Imperial Testing Station 148"}, {"c": "A8", "t": "station", "n": "Imperial Testing Station 186"}, {"c": "B2", "t": "cave", "n": "Loot cave"}, {"c": "C8", "t": "cave", "n": "Loot cave"}]}, "exp": {"Duraluminum Ingot": {"Jasmium Crystal": 4, "Aluminum Ingot": 1, "Water": 500}, "Plastanium Ingot": {"Titanium Ore": 6, "Stravidium Fiber": 1, "Water": 1250}, "Cobalt Paste": {"Erythrite Crystal": 2, "Water": 75}, "Thermo-Responsive Ray Amplifier": {"Ray Amplifier": 3, "Plasteel Plate": 2, "Copper Ingot": 2, "Water": 50}}, "base": [{"g": "Workshop", "items": [["Survival Fabricator", "Cutteray Mk5, Tarl Cutteray, Compact Compactor Mk5"], ["Weapons Fabricator", "Long Shot, Assassin's Rifle, Arhun K-28 Lasgun"], ["Vehicle Fabricator", "Ornithopters and Buggy Cutteray Mk5"], ["Medium Ore Refinery", "Duraluminum Ingot and Plastanium Ingot"], ["Medium Chemical Refinery", "Cobalt Paste and Stravidium Fiber"], ["Large Ore Refinery", "Plastanium for 4 Titanium Ore instead of 6"], ["Advanced Survival Fabricator", "Cutteray Mk6, Kynes's Cutteray, Mk6 compactors"], ["Advanced Weapons Fabricator", "Dunewatcher and other Plastanium-tier weapons"], ["Advanced Vehicle Fabricator", "Buggy Cutteray Mk6"], ["Augmentation Station", "Needs progress in the Crafting Specialization"]]}, {"g": "Storage and supplies", "items": [["Storage Container", "45 slots. Chest is 20, small is 10."], ["Medium container", "100 slots, needs 70 Plastanium"], ["Water stock", "Duraluminum takes 500 water each, Plastanium 1,250"], ["Spare Power Packs", "Compactors drain one per use"]]}, {"g": "Vehicles", "items": [["Assault Ornithopter", "4 seats and one shared side utility slot"], ["Scout Ornithopter", "Best for solo Deep Desert farming"], ["Parked inside your land claim", "Outside it, vehicles decay and storms damage them"], ["Fuel, water and repair gear aboard", ""]]}, {"g": "Before the weekly reset", "items": [["Pack up any Deep Desert base", "All Deep Desert bases are destroyed at reset"], ["Empty vehicles and Deep Desert storage", ""], ["Spend your Mnemonic Recollections", "5 a day, 35 stored at most"], ["Check Method for the new week", "Then clear your map marks in the app"]]}], "ranks": [{"r": 0, "t": "Outsider", "v": 0}, {"r": 1, "t": "Mercenary", "v": 99}, {"r": 2, "t": "Recruit", "v": 150}, {"r": 3, "t": "Contractor", "v": 250}, {"r": 4, "t": "Agent", "v": 500}, {"r": 5, "t": "House Operator", "v": 1000}, {"r": 6, "t": "", "v": 225}, {"r": 7, "t": "", "v": 300}, {"r": 8, "t": "", "v": 375}, {"r": 9, "t": "", "v": 450}, {"r": 10, "t": "", "v": 525}, {"r": 11, "t": "", "v": 600}, {"r": 12, "t": "", "v": 675}, {"r": 13, "t": "", "v": 750}, {"r": 14, "t": "", "v": 825}, {"r": 15, "t": "", "v": 900}, {"r": 16, "t": "", "v": 975}, {"r": 17, "t": "", "v": 1050}, {"r": 18, "t": "", "v": 1125}, {"r": 19, "t": "", "v": 1200}, {"r": 20, "t": "Envoy (A) / Enforcer (H)", "v": 500}], "res": [{"n": "Agave Seeds", "t": "Plant", "w": "The O'odham (NW), north edge densest; day", "u": "Iodine Pills (10 each), CHOAM Ceiling Lights", "s": "Method, Deltia's"}, {"n": "Ray Amplifier", "t": "T4-5", "w": "Hagga Rift (The Spiral, CHOAM Mineral Extraction Facilities), Eastern Vermillius Gap chests", "u": "Cutteray Mk3-Mk5, Arhun K-28 Lasgun", "s": "Deltia's"}, {"n": "Thermoelectric Cooler", "t": "T5", "w": "Crossroads Tradepost (wiki base price 500 Solari); Deep Desert Shield Wall chests; Exchange", "u": "Cutteray Mk5/Mk6 (11 recipes)", "s": "Awakening Wiki"}, {"n": "Thermo-Responsive Ray Amplifier", "t": "T6", "w": "Deep Desert wrecks, testing stations, downed ships, caves; craftable in Advanced Survival Fabricator", "u": "Mk6 Cutteray, Lasguns", "s": "Method"}, {"n": "Cobalt Paste", "t": "T4-5", "w": "Refined from Erythrite Crystal", "u": "Cutterays, Mk5 vehicle parts", "s": "Bisect"}, {"n": "Jasmium", "t": "T5", "w": "Sheol", "u": "Duraluminum Ingots", "s": "KeenGamer"}, {"n": "Duraluminum Ingot", "t": "T5", "w": "Medium Ore Refinery: Aluminum Ingot + Jasmium + 500 water", "u": "Mk5 gear, vehicles, Cutteray Mk5", "s": "KeenGamer"}, {"n": "Titanium Ore", "t": "T6", "w": "Deep Desert rocky outcrops (Shield Wall + weekly hotspots); needs Cutteray Mk5/Mk6", "u": "Plastanium", "s": "Method, Mein-MMO"}, {"n": "Stravidium Mass", "t": "T6", "w": "Deep Desert rock formations (rarer than Titanium)", "u": "Stravidium Fiber > Plastanium", "s": "Method"}, {"n": "Stravidium Fiber", "t": "T6", "w": "Medium Chemical Refinery from Stravidium Mass", "u": "Plastanium", "s": "Method"}, {"n": "Plastanium Ingot", "t": "T6", "w": "Medium/Large Ore Refinery: 6 Titanium + 1 Fiber + 1,250 Water", "u": "Mk6 armor, weapons, vehicles, Augmentation Station", "s": "Deltia's"}, {"n": "Plasteel Composite Armor Plating", "t": "T6", "w": "Deep Desert stations/containers (e.g. Imperial Testing Station #10, Wreck of the Actaeon, Suk Alusus Camp)", "u": "Bulwark, CHOAM Heavy, Mk6 Ornithopter cabin/cockpit/tail", "s": "KeenGamer, Deltia's"}, {"n": "Spice-Infused Plastanium Dust", "t": "T6", "w": "Testing Stations (hard-to-reach spots)", "u": "Mk6 vehicle parts and armor sets", "s": "Deltia's"}, {"n": "Spice Melange", "t": "T6", "w": "Refine Spice Sand; Deep Desert spice fields", "u": "Mk6 crafting, Specialization major traits, Augmentation Station", "s": "Method, U4GM"}, {"n": "Imperial Permits", "t": "Currency-like", "w": "Needed per Unique craft", "u": "Crafting Unique weapons", "s": "Metaforge"}, {"n": "Schematic Patterns / Regis Components", "t": "Augment parts", "w": "Chapter 3 endgame sources", "u": "Crafting Augments", "s": "Method"}], "gear": [{"n": "Adept Disruptor Pistol", "t": "Heavy dart sidearm", "w": "Reward: 'The Rogue Bene Gesserit' quest", "u": "Highest raw damage Adept gun (~341/shot, 4-round clip); charge-up delay; breaks shields", "s": "KeenGamer"}, {"n": "Adept JABAL Spitdart", "t": "Heavy dart", "w": "Craftable Adept tier", "u": "~150 damage/shot", "s": "KeenGamer table"}, {"n": "Adept Rafiq Snubnose", "t": "Heavy dart", "w": "Craftable Adept tier", "u": "~138 damage/shot", "s": "KeenGamer table"}, {"n": "Adept Vulcan GAU-92", "t": "Heavy dart", "w": "Craftable Adept tier", "u": "140-round magazine for suppression", "s": "KeenGamer table"}, {"n": "Adept Karpov 38", "t": "Light dart", "w": "Craftable Adept tier", "u": "Best light dart (~46/shot)", "s": "KeenGamer table"}, {"n": "Long Shot", "t": "Unique poison sniper", "w": "You hold the schematic", "u": "Poison dart rifle; stats unverified", "s": "Your screenshot"}, {"n": "Assassin's Rifle", "t": "Unique poison sniper", "w": "Arctus Cavern (Hagga Rift), ~14.2% drop; Exchange", "u": "~128/shot, 2-round clip, 75 m", "s": "Awakening Wiki"}, {"n": "Dunewatcher", "t": "Unique Mk6 sniper", "w": "Landsraad Weapons Vendor 65,000 Solari; Exchange", "u": "~346/shot; called the best sniper in the game", "s": "Awakening Wiki, Method"}, {"n": "Kynes's Cutteray", "t": "Unique Mk6 tool", "w": "Unique schematic (location not confirmed)", "u": "Best Cutteray: highest yields across ores", "s": "Method"}, {"n": "Tarl Cutteray", "t": "Unique tool", "w": "Stonestep Village, Rockwarren Village, Imperial Testing Stations", "u": "Strong early unique Cutteray", "s": "Awakening Wiki, Deltia's"}, {"n": "Artisan Disruptor Pistol", "t": "Unique sidearm", "w": "Kel's Fallback", "u": "Shield-breaking pistol", "s": "Selphie1999"}, {"n": "House Disruptor Pistol", "t": "Unique sidearm", "w": "Reward: 'The Specialists' contract", "u": "Shield-breaking pistol", "s": "Selphie1999"}, {"n": "Piter's Disruptor", "t": "Unique sidearm", "w": "Wreck of the Archidamas III", "u": "Shield-breaking pistol", "s": "Selphie1999"}, {"n": "Regis Disruptor Pistol", "t": "Unique sidearm", "w": "Deep Desert D2", "u": "Shield-breaking pistol", "s": "Selphie1999"}, {"n": "Fivefinger's Tripleshot Rifle", "t": "Unique rifle", "w": "Wreck of the Delphis", "u": "Three-pellet mid-range rifle", "s": "Selphie1999"}, {"n": "Way of the Fallen", "t": "Unique Maula pistol", "w": "Old Griffin Hideaway (near Griffin's Reach)", "u": "Strong early short-range gun", "s": "Sportskeeda"}, {"n": "Kaleff's Drinker", "t": "Unique short blade", "w": "Wreck of the Alcyon", "u": "Early water-gain blade", "s": "Sportskeeda"}, {"n": "Aren's Vengeance", "t": "Unique burst rifle", "w": "Broken Stone Station", "u": "Early staple", "s": "Sportskeeda"}, {"n": "Shadrath's Edge", "t": "Unique Maula pistol", "w": "Wreck of the Alecto (Western Shield Wall) chest", "u": "Needs repeated chest clears", "s": "Deltia's"}], "tiers": [{"t": "Salvage", "m": "Salvaged Metal", "at": "Basic", "c": "Improvised Cutteray", "rc": "2 Salvaged Metal", "op": "Granite, copper, metal", "nt": "Starter tools"}, {"t": "1", "m": "Copper", "at": "Small Ore Refinery", "c": "Cutteray Mk1", "rc": "6 Copper Ingot", "op": "Mines iron", "nt": "Hagga Basin South"}, {"t": "2", "m": "Iron", "at": "Small Ore Refinery", "c": "Cutteray Mk2", "rc": "10 Iron Ingot", "op": "Steel recipes", "nt": "Iron is heavy - watch inventory"}, {"t": "3", "m": "Steel", "at": "Small Ore Refinery", "c": "Cutteray Mk3", "rc": "90 Water, 15 Steel Ingot, 10 EMF Generator, 10 Cobalt Paste, 5 Ray Amplifier", "op": "Aluminum ore (Eastern Shield Wall)", "nt": "Steel = Iron + Carbon"}, {"t": "4", "m": "Aluminum", "at": "Medium Ore Refinery", "c": "Industrial Cutteray Mk4", "rc": "225 Water, 25 Aluminum Ingot, 14 EMF Generator, 12 Cobalt Paste, 7 Ray Amplifier", "op": "Vehicle/ornithopter fabricators, better structures", "nt": ""}, {"t": "5", "m": "Duraluminum", "at": "Medium Ore Refinery", "c": "Cutteray Mk5", "rc": "450 Water, 40 Duraluminum Ingot, 18 EMF Generator, 16 Cobalt Paste, 10 Ray Amplifier, 7 Thermoelectric Cooler", "op": "Mining Titanium and Stravidium", "nt": "Duraluminum = Aluminum Ingot + Jasmium + 500 water"}, {"t": "6", "m": "Plastanium", "at": "Medium/Large Ore Refinery", "c": "Cutteray Mk6", "rc": "700 Water, 50 Plastanium, 27 Spice Melange, 30 EMF Generator, 30 Cobalt Paste, 9 Thermoelectric Cooler, 6 Thermo-Responsive Ray Amplifier", "op": "Mk6 armor/weapons/vehicles, Augmentation", "nt": "Plastanium = 6 Titanium + 1 Stravidium Fiber + 1,250 Water"}], "loop": [{"c": "Daily", "t": "Spend your 5 Mnemonic Recollections on Landsraad Missions (claim rewards)", "y": "375 faction standing + 625 Spec XP + 5,000 Scrips per day", "s": "Awakening Wiki"}, {"c": "Daily", "t": "Re-roll one unwanted Landsraad Mission (once per hour)", "y": "Keeps missions you can do near you", "s": "Awakening Wiki"}, {"c": "Daily", "t": "Top up water, fuel, repair vehicles and gear", "y": "Prevents run failures", "s": "General"}, {"c": "Weekly", "t": "Run Deep Desert for Titanium/Stravidium/spice after checking the new weekly map", "y": "Layout and hotspots change every week", "s": "Bisect, Method"}, {"c": "Weekly", "t": "Pack up Deep Desert bases before the Coriolis Storm", "y": "All Deep Desert bases are destroyed at reset (~Mon-Tue)", "s": "Method, U4GM"}, {"c": "Weekly", "t": "Check the Landsraad board and guild decree vote", "y": "Decrees last until the end of the session", "s": "Awakening Wiki"}, {"c": "Weekly", "t": "Clear repeatable chests for Unique schematics", "y": "Uniques need repeated clears; drops can be random", "s": "Deltia's"}, {"c": "Weekly", "t": "Run a Testing Station boss (Chapter 3)", "y": "Augment parts, loot, Spec XP", "s": "Awakening Wiki"}]};
function rankInfo(stand, target, perDay) {
  const R = DATA.ranks; let cur = 0, total = 0;
  R.forEach(r => { if (stand >= r.v_total) cur = r.r; });
  const t = R.find(r => r.r === target);
  const need = t ? t.v_total : 0;
  const left = Math.max(0, need - stand);
  return { cur, need, left, days: left === 0 ? 0 : Math.ceil(left / Math.max(1, perDay)) };
}
(function cum() { let c = 0; DATA.ranks.forEach((r, i) => { c = i === 0 ? 0 : c + r.v; r.v_total = c; }); })();
const stepSize = need => need >= 400 ? 50 : need >= 100 ? 10 : need >= 20 ? 5 : 1;
const haveOf = (ri, ii) => { const k = ri + "." + ii; return state.have[k] != null ? state.have[k] : DATA.recipes[ri].items[ii][2]; };

/* ---------- views ---------- */
const ICON = {
  plan: '<path d="M5 6h14M5 12h14M5 18h9"/>',
  craft: '<path d="M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8"/>',
  rank: '<path d="M6 13l6-6 6 6M6 19l6-6 6 6"/>',
  week: '<rect x="4" y="5" width="16" height="15" rx="2"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  map: '<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2zM9 4v14M15 6v14"/>',
  lib: '<path d="M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h10"/>'
};
ICON.home = '<path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6"/>';
ICON.base = '<path d="M3 20h18M5 20V9l7-5 7 5v11M9 20v-5h6v5"/>';
let q = "";

function header() {
  const dr = daysToReset(), info = rankInfo(Number(state.stand) || 0, Number(state.target), Number(state.perDay) || 1);
  return "<span>Weekly reset " + (dr === 0 ? "today" : "in " + dr + " day" + (dr === 1 ? "" : "s")) + "</span><b>Rank " + info.cur + "</b>";
}
function craftNumbers(ri) {
  const r = DATA.recipes[ri];
  const rows = r.items.map((it, ii) => ({ need: it[1], have: haveOf(ri, ii) }));
  const ready = rows.filter(x => x.have >= x.need).length;
  return { ready, total: rows.length };
}
function planTotals() {
  const tot = {};
  const add = (n, q) => { tot[n] = (tot[n] || 0) + q; };
  Object.keys(state.plan).forEach(ri => {
    const n = state.plan[ri]; if (!n) return;
    DATA.recipes[ri].items.forEach(it => {
      const e = state.raw && DATA.exp[it[0]];
      if (e) Object.keys(e).forEach(k => add(k, e[k] * it[1] * n)); else add(it[0], it[1] * n);
    });
  });
  return tot;
}
function renderPlanner() {
  const tot = planTotals(), names = Object.keys(tot).sort(), picked = Object.keys(state.plan).filter(k => state.plan[k]).length;
  let h = `<section class="card"><div class="label">What do you want to build?</div><p class="note" style="margin:6px 0 4px">Set how many of each, then read the combined shopping list.</p>` +
    DATA.recipes.map((r, i) => { const n = state.plan[i] || 0; return `<div class="item" style="grid-template-columns:1fr auto"><div class="nm">${esc(r.name)}<div class="wh" style="font-weight:400">${esc(r.cat)}</div></div>
      <div class="stepper" style="grid-column:auto;margin:0"><button data-act="pdec" data-r="${i}" aria-label="Fewer ${esc(r.name)}">−</button><span style="min-width:28px;text-align:center;font-weight:700;font-variant-numeric:tabular-nums">${n}</span><button data-act="pinc" data-r="${i}" aria-label="More ${esc(r.name)}">+</button></div></div>`; }).join("") + `</section>`;
  h += `<section class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><div class="label">Shopping list</div>
    <button class="btn" data-act="raw" aria-pressed="${state.raw}">${state.raw ? "Raw materials" : "As listed"}</button></div>`;
  if (!picked) h += '<div class="empty">Add something above to see what you need.</div>';
  else h += names.map(n => { const need = tot[n], have = Number(state.pHave[n]) || 0, short = Math.max(0, need - have);
    return `<div class="item"><div class="nm">${esc(n)}</div><div class="short ${short ? "no" : "ok"}">${short ? "Short " + fmt(short) : "Ready"}</div>
      <div class="stepper"><label class="note" for="ph-${esc(n)}" style="flex:none">Have</label><input id="ph-${esc(n)}" type="number" inputmode="numeric" min="0" value="${have}" data-act="pHave" data-n="${esc(n)}" aria-label="${esc(n)} on hand"><span class="need">of ${fmt(need)}</span></div></div>`; }).join("");
  h += `<p class="note" style="margin:10px 0 0">${state.raw ? "Ingots, paste and amplifiers are broken down into what you mine or loot (Plastanium counted at the medium refinery rate). Aluminum Ingot has no recipe listed, so it stays as an ingredient." : "Intermediate items are shown as the recipe lists them."} Amounts are from the Recipes tab, so check anything it marks as unconfirmed.</p></section>`;
  return h;
}
function renderCraft() {
  const head = `<div class="seg" role="group" aria-label="Craft mode">${[["recipes","Recipes"],["planner","Planner"]].map(([k, n]) => `<button data-act="cmode" data-k="${k}" aria-pressed="${state.craftMode === k}">${n}</button>`).join("")}</div>`;
  if (state.craftMode === "planner") return head + renderPlanner();
  const ri = state.recipe, r = DATA.recipes[ri], c = craftNumbers(ri);
  const cats = [...new Set(DATA.recipes.map(x => x.cat))];
  let h = head + `<select id="recipesel" data-act="recipesel" aria-label="Recipe">${cats.map(ct => `<optgroup label="${ct}">${DATA.recipes.map((x, i) => x.cat === ct ? `<option value="${i}" ${i === ri ? "selected" : ""}>${esc(x.name)}</option>` : "").join("")}</optgroup>`).join("")}</select>`;
  h += `<section class="card"><div class="label">${esc(r.name)}</div><div class="big">${c.ready}/${c.total} ready</div>
    <div class="bar"><i style="width:${Math.round(100 * c.ready / c.total)}%"></i></div>
    <div class="note" style="margin-top:8px">Source: ${esc(r.src)}${r.note ? ". " + esc(r.note) : ""}</div></section>`;
  h += `<section class="card">` + r.items.map((it, ii) => {
    const have = haveOf(ri, ii), short = Math.max(0, it[1] - have), st = stepSize(it[1]);
    return `<div class="item"><div class="nm">${esc(it[0])}</div><div class="short ${short ? "no" : "ok"}">${short ? "Short " + fmt(short) : "Ready"}</div>
      ${it[3] ? `<div class="wh">${esc(it[3])}</div>` : ""}
      <div class="stepper"><button data-act="dec" data-r="${ri}" data-i="${ii}" data-s="${st}" aria-label="Fewer ${esc(it[0])}">−</button>
      <input type="number" inputmode="numeric" min="0" value="${have}" data-act="have" data-r="${ri}" data-i="${ii}" aria-label="${esc(it[0])} on hand">
      <button data-act="inc" data-r="${ri}" data-i="${ii}" data-s="${st}" aria-label="More ${esc(it[0])}">+</button>
      <span class="need">of ${fmt(it[1])}</span></div></div>`;
  }).join("") + `</section>`;
  if (r.cooler) {
    const idx = r.items.findIndex(x => x[0] === "Thermoelectric Cooler");
    const miss = Math.max(0, r.items[idx][1] - haveOf(ri, idx)), cost = miss * state.price, left = state.solari - cost;
    h += `<section class="card"><div class="label">Cooler budget</div>
      <div class="grid2" style="margin-block:10px"><div class="field"><label for="price" class="note">Price each (Solari)</label><input id="price" type="number" inputmode="numeric" min="0" value="${state.price}" data-act="price"></div>
      <div class="field"><label for="solari" class="note">Your Solari</label><input id="solari" type="number" inputmode="numeric" min="0" value="${state.solari}" data-act="solari"></div></div>
      <div class="kv"><span>Coolers still needed</span><b>${miss}</b></div>
      <div class="kv"><span>Cost to buy them</span><b>${fmt(cost)}</b></div>
      <div class="kv"><span>${left >= 0 ? "Left over" : "Still short"}</span><b style="color:var(${left >= 0 ? "--good" : "--bad"})">${fmt(Math.abs(left))}</b></div>
      <div class="note" style="margin-top:8px">The 5,000 default is from older guides. The Awakening Wiki gives a base price of 500, so enter what the Crossroads Tradepost actually charges. Solari started at the 7,167 on your screenshot. Update both.</div></section>`;
  }
  const n = Math.max(0, Number(state.ingots) || 0);
  h += `<section class="card"><div class="label">Plastanium scaler</div>
    <div class="field" style="margin-block:10px"><label for="ingots" class="note">Ingots to make (default covers Mk6 Cutteray + Augment Station)</label><input id="ingots" type="number" inputmode="numeric" min="0" value="${n}" data-act="ingots"></div>
    <div class="kv"><span>Titanium Ore</span><b>${fmt(n * 6)}</b></div>
    <div class="kv"><span>Stravidium Fiber</span><b>${fmt(n)}</b></div>
    <div class="kv"><span>Water</span><b>${fmt(n * 1250)}</b></div>
    <div class="note" style="margin-top:8px">Per ingot: 6 Titanium Ore, 1 Stravidium Fiber, 1,250 Water (Deltia's Gaming).</div></section>`;
  return h;
}
function renderRank() {
  const info = rankInfo(Number(state.stand) || 0, Number(state.target), Number(state.perDay) || 1);
  const title = r => { const x = DATA.ranks.find(y => y.r === r); return x && x.t ? x.t : "Rank " + r; };
  return `<section class="card"><div class="label">Faction rank</div>
    <div class="grid2" style="margin-block:12px">
      <div class="field"><label for="stand" class="note">Your total standing</label><input id="stand" type="number" inputmode="numeric" min="0" value="${state.stand}" data-act="stand"></div>
      <div class="field"><label for="target" class="note">Target rank</label><select id="target" data-act="target">${DATA.ranks.filter(r => r.r > 0).map(r => `<option value="${r.r}" ${r.r === Number(state.target) ? "selected" : ""}>${r.r}${r.t ? " " + esc(r.t) : ""}</option>`).join("")}</select></div>
      <div class="field"><label for="perday" class="note">Standing per day</label><input id="perday" type="number" inputmode="numeric" min="1" value="${state.perDay}" data-act="perDay"></div></div>
    <div class="big">${info.days} day${info.days === 1 ? "" : "s"}</div>
    <div class="note">to reach rank ${esc(state.target)} at the daily cap</div></section>
    <section class="card"><div class="kv"><span>Current rank</span><b>${info.cur}${title(info.cur) !== "Rank " + info.cur ? " " + esc(title(info.cur)) : ""}</b></div>
      <div class="kv"><span>Total standing for target</span><b>${fmt(info.need)}</b></div>
      <div class="kv"><span>Still to earn</span><b>${fmt(info.left)}</b></div></section>
    <p class="note">Ranks 1 to 5 come from missions and need 1,999 standing, so the daily cap only applies from rank 5 on. From there each Landsraad Mission claimed with a Mnemonic Recollection gives 75 standing and you get 5 Recollections a day, so 375 a day. Rank 20 also needs a special mission. Source: Dune: Awakening Wiki.</p>`;
}
function daysToReset() {
  const d = new Date(), add = (2 - d.getDay() + 7) % 7;
  return add;
}
function renderHome() {
  const link = "https://method.gg/dune-awakening/deep-desert-companion";
  const dr = daysToReset();
  const info = rankInfo(Number(state.stand) || 0, Number(state.target), Number(state.perDay) || 1);
  const rt = DATA.ranks.find(y => y.r === info.cur);
  let h = `<section class="card next"><div class="label">This week</div>
    <h2>Reset ${dr === 0 ? "is today" : "in " + dr + " day" + (dr === 1 ? "" : "s")}</h2>
    <p style="margin:0 0 12px">Deep Desert layout is for ${esc(DATA.dd.week)}. Pack up any Deep Desert base before the reset, since every base there is destroyed.</p>
    <div class="btnrow"><button class="btn primary" data-act="tab" data-k="map">Open Deep Desert map</button><button class="btn" data-act="tab" data-k="base">Pre-reset checklist</button></div></section>
    <section class="card"><div class="label">Faction rank</div>
    <div class="big" style="margin-top:4px">Rank ${info.cur}</div><div class="note">${rt && rt.t ? esc(rt.t) + ". " : ""}${fmt(info.left)} standing to rank ${esc(state.target)}, about ${info.days} day${info.days === 1 ? "" : "s"} at the daily cap.</div>
    <div class="btnrow" style="margin-top:12px"><button class="btn" data-act="tab" data-k="rank">Open rank planner</button></div></section>`;
  h += `<section class="card"><div class="label">Jump to</div><div class="btnrow" style="margin-top:10px">
    <button class="btn" data-act="goto" data-tab="craft" data-mode="planner">Build planner</button>
    <button class="btn" data-act="goto" data-tab="lib" data-lib="landsraad">Landsraad</button>
    <button class="btn" data-act="goto" data-tab="lib" data-lib="notes">My notes</button>
    <button class="btn" data-act="goto" data-tab="lib" data-lib="resources">Resources</button></div></section>`;
  return h;
}
const DD_MARKS = ["Titanium","Stravidium","Spice","Base","Danger"];
const DD_T = { wreck: ["W","Wreck"], cave: ["C","Loot cave"], station: ["T","Testing station"] };
function renderDD() {
  const rows = "IHGFEDCBA".split(""), cols = [1,2,3,4,5,6,7,8,9];
  const poi = {}; DATA.dd.poi.forEach(p => poi[p.c] = p);
  let g = '<div class="dd" role="group" aria-label="Deep Desert grid"><span></span>' + cols.map(c => `<span class="ax">${c}</span>`).join("");
  rows.forEach(r => {
    g += `<span class="ax">${r}</span>`;
    cols.forEach(c => {
      const id = r + c, p = poi[id], m = state.dd[id] || [];
      g += `<button class="cell ${"ABC".includes(r) ? "" : "pvp"} ${state.ddSel === id ? "sel" : ""}" data-act="ddcell" data-c="${id}" aria-label="${id}${p ? ", " + DD_T[p.t][1] + " " + p.n : ""}${m.length ? ", marked " + m.join(", ") : ""}">${p ? `<span class="p ${p.t}">${DD_T[p.t][0]}</span>` : ""}${m.length ? `<span class="m">${m.map(x => `<i class="${x}"></i>`).join("")}</span>` : ""}</button>`;
    });
  });
  g += "</div>";
  const sel = state.ddSel, sp = sel && poi[sel], sm = (sel && state.dd[sel]) || [];
  const panel = sel ? `<div style="margin-top:14px"><div class="label">Cell ${sel}</div>
    <p style="margin:4px 0 10px">${sp ? esc(DD_T[sp.t][1]) + ": " + esc(sp.n) : "Nothing listed here this week."}</p>
    <div class="chips" style="margin:0;padding:0;flex-wrap:wrap;overflow:visible">${DD_MARKS.map(k => `<button class="chip" data-act="ddmark" data-k="${k}" aria-pressed="${sm.includes(k)}">${k}</button>`).join("")}</div></div>` : '<p class="note" style="margin-top:12px">Tap a cell to see what is there and mark your own finds.</p>';
  return `<section class="card"><div class="label">Deep Desert, this week</div>
    <h2 style="font-size:22px;margin:4px 0 2px">Grid map</h2>
    <p class="note" style="margin:0">Week of ${esc(DATA.dd.week)}. Wrecks, caves and testing stations are from ${esc(DATA.dd.src)}. Shaded rows are the PvP zone. Titanium, Stravidium and spice hotspots could not be read from the source, so you mark those yourself.</p>
    ${g}
    <div class="legend"><span><b style="color:var(--warn)">W</b>Wreck</span><span><b style="color:var(--dusk)">C</b>Loot cave</span><span><b style="color:var(--accent)">T</b>Testing station</span></div>
    ${panel}
    <div class="btnrow" style="margin-top:14px"><button class="btn" data-act="ddclear">${state.confirm === "dd" ? "Tap again to clear marks" : "Clear my marks"}</button><a class="btn primary" href="https://method.gg/dune-awakening/deep-desert-companion" target="_blank" rel="noopener">Hotspots on Method</a></div>
    <p class="note" style="margin:10px 0 0">This is the layout for the week above. The app does not update itself, so on Tuesday check Method for the new week and clear your marks.</p></section>`;
}
function renderBase() {
  let h = "";
  DATA.base.forEach((grp, gi) => {
    const done = grp.items.filter((_, ii) => state.base[gi + "." + ii]).length, armed = state.confirm === "b" + gi;
    h += `<section class="card"><div style="display:flex;justify-content:space-between;align-items:center;gap:8px"><div class="label">${esc(grp.g)} (${done}/${grp.items.length})</div>
      <button class="btn" data-act="breset" data-g="${gi}">${armed ? "Tap again to clear" : "Clear ticks"}</button></div>` +
      grp.items.map((it, ii) => { const on = !!state.base[gi + "." + ii];
        return `<button class="task" data-act="btask" data-g="${gi}" data-i="${ii}" aria-pressed="${on}"><span class="chk" style="${on ? "background:var(--good);border-color:var(--good)" : ""}"><svg viewBox="0 0 24 24" style="opacity:${on ? 1 : 0}"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
        <span class="stitle"><b>${esc(it[0])}</b>${it[1] ? `<span class="why">${esc(it[1])}</span>` : ""}</span></button>`; }).join("") + `</section>`;
  });
  return h;
}
const TH = "https://duneawakening.th.gl/maps/";
const MORE_MAPS = [["Overland Map","Overland Map","1,058"],["The Deep Desert","The Deep Desert","79,081"],["Arrakeen","Arrakeen","81"],["Harko Village","Harko Village","71"],["Wind Pass","Wind Pass","99"],["The Broodworks","The Broodworks","1,118"],["Smuggler's Run","Smuggler's Run","31"],["The Ruins of Tsimpo","The Ruins of Tsimpo","25"],["Wreck of the Tyche","Wreck of the Tyche","36"],["Blushing Cavern","Blushing Cavern","30"]];
function renderMaps() {
  const arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>';
  const pin = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0119 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  const feat = `<a class="card maplink" href="${TH}Hagga%20Basin" target="_blank" rel="noopener" aria-label="Open Hagga Basin map (opens in a new tab)"><span class="ico">${pin}</span><h2>Hagga Basin</h2><span class="by">The Hidden Gaming Lair, 326,101 locations</span><span class="go">${arrow}</span><p>The main PvE overworld. Resource nodes, trainers, vendors and points of interest. Filter by what you need.</p></a>`;
  const rows = MORE_MAPS.map(m => `<a class="maprow" href="${TH + encodeURIComponent(m[1])}" target="_blank" rel="noopener"><span>${esc(m[0])}</span><span class="cnt">${m[2]}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg></a>`).join("");
  return renderDD() + feat + `<section class="card"><div class="label">More maps</div><p class="note" style="margin:6px 0 4px">Cities, dungeons and the Deep Desert resource map, from the same site. The Deep Desert one shows resources year-round, while this week's rotation is the grid above.</p>${rows}</section>
    <div class="note">These are live interactive sites that do not allow embedding, so each opens in a new tab.</div>`;
}
function libList() {
  const L = state.lib, term = q.trim().toLowerCase();
  const hit = o => !term || Object.values(o).join(" ").toLowerCase().includes(term);
  let rows = "";
  if (L === "resources") rows = DATA.res.filter(hit).map(r => `<div class="lib"><h3>${esc(r.n)}</h3><p><span class="k">Tier:</span> ${esc(r.t)}</p><p><span class="k">Where:</span> ${esc(r.w)}</p><p><span class="k">Used for:</span> ${esc(r.u)}</p><p class="note">${esc(r.s)}</p></div>`).join("");
  if (L === "gear") rows = DATA.gear.filter(hit).map(r => `<div class="lib"><h3>${esc(r.n)}</h3><p><span class="k">${esc(r.t)}</span></p><p><span class="k">Schematic:</span> ${esc(r.w)}</p><p><span class="k">Why:</span> ${esc(r.u)}</p><p class="note">${esc(r.s)}</p></div>`).join("");
  if (L === "tiers") rows = DATA.tiers.filter(hit).map(r => `<div class="lib"><h3>Tier ${esc(r.t)}: ${esc(r.m)}</h3><p><span class="k">Refined at:</span> ${esc(r.at)}</p><p><span class="k">${esc(r.c)}:</span> ${esc(r.rc)}</p><p><span class="k">Opens:</span> ${esc(r.op)}</p>${r.nt ? `<p class="note">${esc(r.nt)}</p>` : ""}</div>`).join("");
  return rows || '<div class="empty">Nothing matches that search.</div>';
}
const NOTE_FIELDS = [["base","Base and coordinates"],["guild","Guild and crew"],["decree","Current Landsraad goal"],["todo","Reminders"]];
function renderNotes() {
  const n = state.notes || {};
  return `<section class="card"><div class="label">My notes</div><p class="note" style="margin:6px 0 4px">Private to you. Saved as you type.</p>` +
    NOTE_FIELDS.map(([k, t]) => `<label class="field" style="margin-top:12px">${t}<textarea data-note="${k}" rows="3" placeholder="Type here">${esc(n[k] || "")}</textarea></label>`).join("") + `</section>`;
}
function renderLandsraad() {
  const card = (t, items) => `<section class="card"><h2 style="font-size:20px;margin-bottom:6px">${t}</h2>` + items.map(i => `<div class="kv"><span>${i[0]}</span><span style="text-align:right">${i[1]}</span></div>`).join("") + `</section>`;
  return card("How it works", [
      ["Cycle", "Weekly. Landsraad objectives refresh each cycle."],
      ["Your part", "Complete Landsraad Missions for faction standing."],
      ["Guild part", "Guilds aligned to Atreides or Harkonnen push votes toward weekly Decrees."],
      ["Decrees", "They change server-wide rules for the week, such as PvP rules, vendor access or crafting bonuses."]]) +
    card("Your daily loop", [
      ["Recollections", "5 a day, 35 stored at most"],
      ["Per mission", "75 standing"],
      ["Per day", "375 standing at the cap"],
      ["Rank 20", "Also needs a special mission"]]) +
    card("Weekly reset", [
      ["When", "Around Tuesday"],
      ["Deep Desert", "Wipes and regenerates, outposts there are destroyed"],
      ["Before reset", "Pack up Deep Desert bases and spend your Recollections"]]) +
    '<div class="note">Overview only. Decree effects and guild rules change between updates, so check the in-game Landsraad screen for this week.</div>';
}
function renderLib() {
  const tabs = [["resources","Resources"],["gear","Gear"],["tiers","Tiers"],["landsraad","Landsraad"],["notes","Notes"]];
  const head = `<div class="seg" role="group" aria-label="Library section">${tabs.map(([k, n]) => `<button data-act="lib" data-k="${k}" aria-pressed="${state.lib === k}">${n}</button>`).join("")}</div>`;
  if (state.lib === "landsraad") return head + renderLandsraad();
  if (state.lib === "notes") return head + renderNotes();
  return head + `<input id="search" type="search" placeholder="Search" aria-label="Search library" value="${esc(q)}">
    <section class="card" id="liblist">${libList()}</section>`;
}

/* ---------- events ---------- */
// Return "save" to save and re-render, "render" to re-render only, "nav" to also scroll to the top, or nothing if not ours.
function onClick(a, b) {
  if (a === "goto") { state.tab = b.dataset.tab; if (b.dataset.mode) state.craftMode = b.dataset.mode; if (b.dataset.lib) state.lib = b.dataset.lib; return "nav"; }
  if (a === "cmode") { state.craftMode = b.dataset.k; }
  else if (a === "pinc" || a === "pdec") { const r = b.dataset.r; state.plan[r] = Math.max(0, (state.plan[r] || 0) + (a === "pinc" ? 1 : -1)); if (!state.plan[r]) delete state.plan[r]; }
  else if (a === "raw") { state.raw = !state.raw; }
  else if (a === "btask") { const k = b.dataset.g + "." + b.dataset.i; state.base[k] = !state.base[k]; if (!state.base[k]) delete state.base[k]; }
  else if (a === "breset") { const k = "b" + b.dataset.g; if (state.confirm !== k) { state.confirm = k; return "render"; } DATA.base[b.dataset.g].items.forEach((_, ii) => delete state.base[b.dataset.g + "." + ii]); state.confirm = ""; }
  else if (a === "recipe") { state.recipe = Number(b.dataset.i); }
  else if (a === "inc" || a === "dec") {
    const ri = Number(b.dataset.r), ii = Number(b.dataset.i), st = Number(b.dataset.s);
    state.have[ri + "." + ii] = Math.max(0, haveOf(ri, ii) + (a === "inc" ? st : -st));
  }
  else if (a === "lib") { state.lib = b.dataset.k; }
  else if (a === "ddcell") { state.ddSel = state.ddSel === b.dataset.c ? "" : b.dataset.c; }
  else if (a === "ddmark") { const s = state.ddSel; if (!s) return; const m = state.dd[s] || []; state.dd[s] = m.includes(b.dataset.k) ? m.filter(x => x !== b.dataset.k) : m.concat(b.dataset.k); if (!state.dd[s].length) delete state.dd[s]; }
  else if (a === "ddclear") { if (state.confirm !== "dd") { state.confirm = "dd"; return "render"; } state.dd = {}; state.ddSel = ""; state.confirm = ""; }
  else return;
  if (a !== "ddclear" && a !== "breset") state.confirm = "";
  return "save";
}
function onChange(a, t, n) {
  if (a === "have") state.have[t.dataset.r + "." + t.dataset.i] = n;
  else if (a === "price") state.price = n;
  else if (a === "pHave") state.pHave[t.dataset.n] = n;
  else if (a === "recipesel") state.recipe = Number(t.value);
  else if (a === "solari") state.solari = n;
  else if (a === "ingots") state.ingots = n;
  else if (a === "stand") state.stand = n;
  else if (a === "perDay") state.perDay = Math.max(1, n);
  else if (a === "target") state.target = Number(t.value);
  else return;
  return "save";
}
function onInput(e) {
  if (e.target.id === "search") { q = e.target.value; const l = $("#liblist"); if (l) l.innerHTML = libList(); return true; }
}

registerGame({
  id: "dune",
  name: "Dune: Awakening",
  title: "Arrakis Roadmap",
  blurb: "Crafting, Deep Desert map, faction rank",
  themeColor: "#b4461c",
  // Kept from the single-game version so existing progress carries over.
  storageKey: "arrakis-roadmap-v1",
  syncDoc: "state",
  art: '<svg viewBox="0 0 64 64" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><defs><linearGradient id="art-dune" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4f2357"/><stop offset="1" stop-color="#cf5d5c"/></linearGradient></defs><rect width="64" height="64" fill="url(#art-dune)"/><circle cx="32" cy="34" r="15" fill="#f6a96b"/><circle cx="32" cy="34" r="11" fill="#ffe2b0"/><path d="M0 44c10-5 20-3 30 0s22 3 34-2v22H0z" fill="#7a2a35"/><path d="M0 52c12-3 22 0 34 1s20-2 30-1v12H0z" fill="#4c1a2a"/><path d="M0 59c14-2 30 1 64-1v6H0z" fill="#2d1020"/></svg>',
  tabs: [["home","Home"],["craft","Craft"],["base","Base"],["rank","Rank"],["map","Maps"],["lib","Library"]],
  icons: ICON,
  defaults: () => ({ u: 0, tab: "home", recipe: 0, have: {}, solari: 7167, price: 5000,
    ingots: 125, stand: 1999, target: 10, perDay: 375, lib: "resources", confirm: "", notes: {}, dd: {}, ddSel: "", base: {}, plan: {}, pHave: {}, raw: true, craftMode: "recipes" }),
  header,
  summary: () => { const dr = daysToReset(), info = rankInfo(Number(state.stand) || 0, Number(state.target), Number(state.perDay) || 1); return "Rank " + info.cur + ", weekly reset " + (dr === 0 ? "today" : "in " + dr + " day" + (dr === 1 ? "" : "s")); },
  views: { home: renderHome, craft: renderCraft, base: renderBase, rank: renderRank, map: renderMaps, lib: renderLib },
  inputActs: ["have", "price", "solari", "ingots", "stand", "target", "perDay", "pHave", "recipesel"],
  onClick, onChange, onInput
});
})();
