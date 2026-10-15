# Girl-Life-Rebuilt

A browser port of the original **Girl Life** game, which was written in QSP (Quest Scripting Program). This repository reimplements the game in modern web technologies so it runs in any browser — no QSP player required.

> **This is a fan port.** The original game's QSP source and the `qspgui` player are *not* included in this repository. Everything you need to play is here: the game code plus all bundled image and sound assets.

## What is the game?

Girl Life is a life-simulation / visual novel set in the Russian city of Pavlovsk. You play a young woman managing her daily life — tracking stats such as health, willpower, stamina, mood, hunger and thirst, building relationships, working and studying, and exploring the city and its surroundings.

> **Content note:** the game contains mature/adult themes and is intended for players 18+.

## Requirements

- [Node.js](https://nodejs.org/) (LTS) and npm

## Getting the game

Clone the repository from GitHub, then install dependencies:

```bash
git clone https://github.com/Ironitty/Girl-Life-Rebuilt.git
cd Girl-Life-Rebuilt
npm install
```

## Playing

### Option A — build a standalone file (recommended)

```bash
npx vite build
```

This produces a single self-contained `index.html` at the root of the repository (all JavaScript and CSS inlined; it loads the bundled `images/` and `sound/` folders that ship with the repo). Open that file in any browser:

- double-click `index.html`, or
- on Linux: `npm run play`

The game works fully offline over `file://` in both Chrome and Firefox.

### Option B — dev server

```bash
npm run dev
```

Then open the local URL Vite prints (typically `http://localhost:5173`). This is handy if you want live reload while tinkering with the code.

## Tech stack

React 19 + TypeScript, built with Vite. Styling via Tailwind CSS, state via Zustand, audio via Howler.js. The build is bundled into one HTML file with `vite-plugin-singlefile`.

## Repository layout

- `src/core/` — the game engine (state, save/load, location registry)
- `src/locations/` — the game's locations and events
- `src/components/` — the UI
- `images/`, `sound/` — game assets (also symlinked into `public/`)
- `scripts/` — build, test, and audit tooling
