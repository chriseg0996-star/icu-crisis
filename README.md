# ICU Crisis

**A mobile-first clinical simulation game. Diagnose and manage real ICU patients under time pressure.**

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status: Ready](https://img.shields.io/badge/Status-Ready-brightgreen.svg)

## Play Now

**[Play ICU Crisis →](https://chriseg0996-star.github.io/icu-crisis)**

Open on any modern browser (desktop, mobile, tablet). No installation needed. Installable as a PWA on supported devices.

---

## About

ICU Crisis is a vanilla JavaScript browser game that teaches critical care reasoning through play. You are an intensivist managing mechanically ventilated patients across 30 campaign levels, plus daily and survival modes.

Unlike traditional medical simulations, ICU Crisis **never tells you the diagnosis**. You must synthesize clinical clues, order diagnostics, and manage competing physiological problems to stabilize your patients.

The UI is available in **English and Spanish** only (toggle in-game). No additional languages are planned.

---

## Game Modes

### Campaign (30 levels)
Six tiers (I–VI) with progressive unlock. The campaign menu shows continue, overall progress, tier tabs, and a per-tier level grid with star ratings.

### Daily Case
One seeded case per calendar day. Same puzzle for all players. Daily streak tracking and shareable emoji score grids (MAP, SpO₂, Lac, time).

### Survival
Endless escalating cases. Score = patients stabilized and cumulative points. Share your run when it ends.

---

## Features

### 30-Level Progression System
- **Tier 1 (Levels 1–5):** Single-pathology cases (edema, airway obstruction, sepsis)
- **Tier 2 (Levels 6–10):** Single pathologies at higher difficulty
- **Tier 3 (Levels 11–15):** Two overlapping pathologies
- **Tier 4 (Levels 16–20):** Complex three-way cases
- **Tier 5 (Levels 21–25):** Diagnostic challenges; multiple acute events
- **Tier 6 (Levels 26–30):** Master cases; rapid deterioration; true ICU reasoning

Unlock progression via `localStorage` (`icu5` save key). Star ratings (1–3) for each level.

### Meta-Game
- **Coins & rank** — Earn coins from wins, missions, and achievements; rank up from Intern to Attending
- **Daily missions** — Rotating objectives with coin rewards
- **Achievements** — 20+ unlockable badges tracked in your profile
- **Cosmetic shop** — Monitor themes, badges, frames, and scrubs visible in menu, profile, and in-game monitor
- **Profile** — 6×5 campaign grid, achievement list, stats summary
- **Share** — Copy or native-share results with emoji performance bars (campaign, daily, survival)

### 9+ Pathologies
- **Pulmonary Edema** — PEEP-responsive, diuretic-dependent
- **Airway Obstruction** — Secretion-driven, suctioning critical
- **Septic Shock** — Vasoplegia, tachycardia, lactate rising
- **Pulmonary Embolism** — Sudden desaturation, RV strain
- **COPD Exacerbation** — Air trapping, CO₂ retention, auto-PEEP
- **Cardiogenic Shock** — Low output, pulmonary edema, cold peripheries
- **Hypovolemic Shock** — Hemorrhage or fluid loss, tachycardia
- **RV Failure** — Venous congestion, fluid-resistant hypotension
- **Mixed Pathology** — Multiple concurrent problems (no dominant issue)

No diagnosis names are ever revealed until after the case is resolved. You diagnose through clinical reasoning and lab/imaging findings.

### Diagnostic Tools (Delayed, Partial Information)
- **Lung POCUS** (5s delay) — B-lines vs A-lines, consolidation, lung sliding
- **Bedside Echo** (8s delay) — LV function, RV dilation, IVC status
- **Labs Panel** (6s delay) — WBC, hemoglobin, creatinine, lactate
- **VExUS** (7s delay) — Venous congestion grading (0–3)

Each tool gives real clinical information but never directly names the diagnosis.

### Real Physiology Engine
- **Hemodynamics:** Vascular tone, cardiac output, perfusion, lactate dynamics
- **Ventilation:** Mechanical compliance, lung injury, PEEP, tidal volume, auto-PEEP
- **Oxygenation:** FiO₂ response, shunt physiology, P/F ratio
- **Sepsis:** Infection progression, phase transitions (stable → declining → unstable → crashing)
- **Acute Events:** Mucus plugging, tension pneumothorax, vasoplegia, hemorrhage

### Mechanical Ventilation System
- **PEEP:** 4–18 cmH₂O (affects oxygenation, venous return, auto-PEEP)
- **Tidal Volume:** 4–10 ml/kg (volutrauma risk; hidden on Normal difficulty)
- **FiO₂:** 21–100% (toxicity risk above 60%)
- **Monitoring:** Real-time compliance, peak pressure, P/F ratio

### Treatment Actions
- **Fluids:** +500ml bolus; transient MAP/preload response
- **Norepinephrine:** Vascular tone restoration; microperfusion risk after 120s
- **Diuretics:** 45s infusion; pulmonary edema reduction
- **Suction:** Clears secretions; airway obstruction relief
- **ABG:** 15s turnaround; reveals pH, PaO₂, PaCO₂, lactate, P/F ratio + physiology interpretation

Each action has a cooldown. Transient boost system simulates realistic intervention timing.

### Contextual Alerts
No generic "risk warnings." Alerts only fire when they describe a meaningful clinical pattern:
- "MAP supported but lactate still rising — perfusion inadequate despite vasopressor"
- "SpO₂ not improving despite FiO₂ — airway pressures elevated"
- "No MAP response to fluids — consider alternate cause"

### Scoring & Star Ratings
- **Win Conditions:** Stabilization (tier-dependent sustained stability window) or survival (10 min)
- **Scoring:** MAP/SpO₂ goal achievement (30% each), lactate trend (15%), stabilization bonus (15%), speed bonus
- **Stars:** 1–3 based on grade (A/B/C/D/F)
- **Penalties:** Lung injury >40 (-10), >3 wrong interventions (-10)
- **Stabilization bar:** In-game progress toward the required stable seconds

### Mobile-First Design
- Touch-friendly buttons and spacing
- Minimal text; maximum visual feedback
- Dark PACS-style interface (medical workstation aesthetic)
- Waveform ECG strip
- Real-time vital sign display with color coding

---

## How to Play

### The Brief
You receive an admission brief with:
- Patient demographics and history
- Admission vitals (no diagnosis hinting)
- Physical exam findings (raw clinical observations)
- Concern statement ("What worries me")

### The Game
1. Accept the patient
2. Initial ventilator settings: PEEP 8, FiO₂ 40, VT 6 ml/kg
3. Monitor the vital sign panel (MAP, SpO₂, HR, RR)
4. Identify the primary problem from the problem bar
5. Order diagnostics (POCUS, Echo, Labs, VExUS)
6. Manage treatments (fluids, vasopressors, diuretics, suction, ABG)
7. Titrate ventilation (PEEP, FiO₂, VT)
8. Stabilize the patient (goals: MAP ≥65, SpO₂ ≥90, lactate <2.5, sustained stability per level)

### Win
Patient stabilizes OR survives 10 minutes.

### Lose
Cardiac arrest (MAP <50 for 8s or SpO2 <75 for 8s).

### Clinical Reasoning
You must think like an ICU attending:
- "Warm extremities + wide pulse pressure + rising lactate = sepsis. Fluids + vasopressor."
- "Bilateral crackles + B-lines + high PEEP response = edema. Diuretic."
- "Clear lungs + sudden desaturation + RV heave = PE. Cautious fluids."

No prompts. No hints. Pure clinical synthesis.

---

## Technical Details

### Stack
- `index.html` — game logic, UI, styles (~2,400 lines)
- `i18n.js` — English/Spanish strings (~900 lines)
- `fonts.css` + `fonts/` — bundled Orbitron & Share Tech Mono (offline)
- `manifest.json` — PWA install metadata
- Vanilla JavaScript (ES6), no npm dependencies
- CSS Grid + Flexbox layout
- Canvas-based ECG waveform

### Compatibility
- Chrome/Edge 90+
- Safari 14+ (iPhone, iPad)
- Firefox 88+
- Mobile WebView (iOS 14+, Android 9+)

### Performance
- 60 FPS game loop via `requestAnimationFrame`
- Deterministic physics (portable to server/multiplayer)
- `localStorage` for progression persistence
- Core game assets ~200 KB (HTML + i18n); full repo includes icons and OG image

---

## Run Locally

### Option 1: Direct (No Server)
```bash
git clone https://github.com/chriseg0996-star/icu-crisis.git
cd icu-crisis
# Open index.html in your browser (drag-and-drop works)
```

### Option 2: Local Server (Recommended)
Service worker and PWA features work best over HTTP:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server

# Then visit http://localhost:8000
```

---

## GitHub Pages Deployment

This repo is set up for GitHub Pages. The game is live at:

**https://chriseg0996-star.github.io/icu-crisis**

Push to `main` to deploy. After updates, users may need a hard refresh once for the service worker cache to roll forward.

To enable on your own fork:
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / root folder
4. Save

Your game will be live at `YOUR_USERNAME.github.io/icu-crisis` within 1–2 minutes.

---

## Pathology Details (No Spoilers)

### Edema
Crackles, B-lines, compliance drop. PEEP-responsive. Fluids worsen. Diuretics critical.

### Airway Obstruction
Rhonchi, high peak pressures. Suctioning essential. FiO₂/PEEP temporizing only.

### Sepsis
Warm extremities, tachycardia, rising lactate, collapsing MAP. Fluids + vasopressor early.

### PE
Sudden desaturation despite clear lungs. RV strain on echo. Avoid excess fluids.

### COPD
Prolonged expiration, auto-PEEP, CO₂ rising. Reduce RR, allow exhalation.

### Cardiogenic Shock
Cold extremities, high JVP, gallop rhythm, pulmonary edema. Cautious fluids; vasopressors + diuretics.

### Hypovolemic Shock
Flat JVP, narrow pulse pressure, fluid-responsive. Aggressive resuscitation.

### RV Failure
High JVP, hepatomegaly, fluid-resistant hypotension. Diuretics; avoid high PEEP.

---

## Feedback & Contribution

Found a bug? Want to suggest a new pathology or feature?

- **Issues:** Open an issue on GitHub
- **Pull requests:** Welcome (code, documentation, translations)
- **Playtesting:** Share your scores and feedback

---

## License

MIT License — See LICENSE file for details.

Use, modify, and distribute freely. Attribution appreciated but not required.

---

## Credits

**Design & Development:** Christopher Godines Hernández

**Clinical Advisors:** ICU attendings and fellows at CMN Siglo XXI, Mexico City

**Inspiration:** Real ICU cases, 15+ years of critical care medicine, and the desire to make clinical reasoning fun.

---

## Roadmap

**Shipped**
- [x] English + Spanish UI
- [x] Daily Case with streaks and share grids
- [x] Survival mode
- [x] Meta-game (coins, missions, achievements, shop, profile)
- [x] Campaign menu redesign with tier tabs and progress
- [x] PWA + service worker offline cache
- [x] Bundled web fonts (no Google Fonts CDN)

- [x] Campaign hints for levels 2–30 (one-time tips per level)
- [x] 8 acute events (plug, pneumo, bleed, arrhythmia, sepsis flare, bronchospasm, flash edema)
- [x] Achievement-unlocked monitor themes (amber/red) and silver frame
- [x] Survival balance: softer late curve, grace window, milestone coins
- [x] Profile: 7-day daily score log, win streak / best streak
- [x] Campaign levels 21–30: ramping difficulty (not flat spike)
- [x] Mobile safe-area padding (notch/home indicator)

**Planned**
- [ ] Player avatar (full chibi character)
- [ ] Custom case builder (create and share cases)
- [ ] Advanced ventilation modes (HFOV, ECMO)

---

**Play now:** https://chriseg0996-star.github.io/icu-crisis

Good luck in the ICU. Your patients are counting on you.
