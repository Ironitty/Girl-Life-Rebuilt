<!-- COMPACT: re-read this file in full before continuing work -->
# AGENTS.md

## Compact Policy
- You have 16k output tokens. 
- Long thinking exhausts output tokens and stalls the session.
- Rule of thumb: think in short bursts. Decide, act, then think again.
- **After every compaction**, re-read this file (`AGENTS.md`) before continuing work.
- **Compaction summaries MUST include** a pending action: "Re-read AGENTS.md in full before continuing."
- **Before finishing any task**, complete workflow step 5 (re-read + verify).

## General
- Keep responses short (CLI). No preamble/postamble unless asked.
- Prefer editing existing files; follow existing code style.
- No code comments unless asked.
- When user says "Screenshot", look at the newest file in `/home/depressedtsukasa/Pictures/Screenshots/`.
- **After any failure, stop guessing and research online** (web docs, GitHub issues, StackOverflow) before trying the next approach.

- **If still struggling after research**, ask the user to pass the problem to ChatGPT for a second opinion. Summarize what was tried and the exact error.
- **ChatGPT is NOT uncensored.** Sanitize/censor any messages, code snippets, variable names, or descriptions before sending to ChatGPT so they are safe for work (SFW). Replace adult terms with neutral equivalents (e.g., "intimate scene" → "scene", "arousal" → "stat", "nude" → "unclothed") or abstract them into generic identifiers.
- **Debug requests**: When the user reports a bug or says something is "broken", read `debug-log.txt` (last 20 actions with timestamps + button labels). The user plays via `./debug-launch.sh` which starts the Vite dev server and writes to this file. Also check `window.__debugLog` via Playwright or ask the user to press F9 and screenshot if the file is empty.

## Verify Before Claiming

Do not present an assumption, remembered fact, inferred project state, or plausible-sounding answer as confirmed.

Before stating that something exists, works, is configured a certain way, caused an error, or has been fixed:

1. Inspect the relevant source of truth when it is available: files, code, configuration, logs, command output, running services, API responses, tests, or documentation.
2. Run an appropriate verification command or test when practical.
3. Base the conclusion on the observed result, not on what you expect the result to be.
4. If verification is not possible, explicitly label the statement as an inference or hypothesis and say what would need to be checked.
5. Never claim that a change fixed a problem merely because the change was made. Verify the resulting behavior.
6. Never invent file contents, command output, test results, configuration values, API behavior, or project state.

Prefer: "I checked X and observed Y, therefore Z."
Avoid: "This should work, so the issue is fixed."

When correctness can be checked cheaply, checking is mandatory before answering.

If you are about to answer a question about the current project or system and the answer can be determined by inspecting the environment, inspect the environment first instead of answering from general knowledge.

## Check Existing Work Before Doing New Work

Before creating, rewriting, regenerating, or replacing anything, first determine whether the requested work has already been completed.

1. Inspect the relevant files, code, project state, recent outputs, and task history before starting.
2. Reuse or build on existing work when it already satisfies all or part of the request.
3. Do not recreate files, functions, systems, workflows, tests, documentation, or fixes that already exist unless the user explicitly asks for a rewrite or replacement.
4. If something appears to have been done previously, verify its current state before repeating it.
5. Prefer modifying the smallest necessary part of existing work over rebuilding from scratch.
6. Before making a change, identify what is already present and what is actually missing.
7. After completing work, verify that you did not introduce a duplicate implementation, duplicate file, duplicate config entry, duplicate test, or parallel system that serves the same purpose.

When previous work exists, continue from the existing implementation rather than starting over.

Do not treat lack of immediate memory as evidence that work has not been done; inspect the project before recreating it.

## Folder Structure
```
GL/
├── src/                  ← React/TS game source
├── public/               ← static assets (symlinks to images/, sound/)
├── images/               ← game image assets
├── sound/                ← game sound assets
├── scripts/              ← build/port scripts (port-locations.ts)
├── dist/                 ← Vite build output
├── GL QSP/               ← original QSP game (source, player, build tools)
│   ├── locations/        ← .qsps files (one per location)
│   ├── qspgui-v5.9.2-b3-linux64/  ← native QSP player
│   ├── build.js          ← QSP build script
│   └── Girl_Life_0.9.9.1.qsp      ← original game file
│   (asset packs can be deleted once images/ and sound/ are confirmed working)
├── package.json
├── vite.config.ts
├── tsconfig.json
└── opencode.json
```

## Project: Girl Life (TS/React Rebuild)
- **Stack:** React 19 + TypeScript, Vite 8, Tailwind CSS v4, Zustand, Howler.js
- **Build**: `npx vite build` → outputs to `dist/`
- **Typecheck**: `npx tsc --noEmit`
- **Dev server**: `npx vite`
- **Port status**: `npm run port-status` → reports ported vs stub locations per region
- **Source**: `src/` — core engine in `src/core/`, locations in `src/locations/`, components in `src/components/`
- **Location registry**: `src/core/location.ts` — `registerLocation()` + `getRegisteredLocations()`
- **State**: Zustand store in `src/core/store.ts` — flat object mirroring QSP globals
- **Save/Load**: IndexedDB via `src/core/save.ts` (10 slots)
  - **Workflow (mandatory after EVERY code change, no matter how small):**
    0. **Post-compact check**: If compacted since last read, re-read this file in full before any other action.
    1. **Edit** code in `src/`
    2. **Smoke test**: `npx vite build && npx tsx scripts/smoke-test.ts` (Playwright + Chromium, 20 checks)
    3. **Visual inspection**: Run headless Chromium and Firefox on the built `index.html`, take screenshots, and review for layout/rendering/interaction issues. **Do not kill the user's Firefox** — use a separate profile. For Firefox, use Puppeteer + Xvfb (headful mode) since native `--headless --screenshot` is broken on this system: `xvfb-run -a -s "-screen 0 1400x900x24" npx tsx scripts/ff-screenshot.ts [url] [output] [width] [height] [delay_ms]`.
    4. **If issues found**: go back to step 1 and repeat until clean.
     5. **Verify**: Re-read this file **in full** (no offset/limit — the entire file). Before reporting "done", confirm each step (1–4) was completed. If any step was skipped, go back.
  - Do NOT report "done" or "ready to test" until all steps pass.
  - **Batch policy for location ports**: Port **3 locations** per batch, then run the full test cycle (steps 2–5) once. Do NOT run tests after each individual location within a batch. Only run LSP/typecheck per location to catch immediate errors. After the 3rd location is written, run build + smoke test + Firefox together.

## Project: Girl Life QSP (Original)
- Game: `GL QSP/Girl_Life_0.9.9.1.qsp` (91 MB) + asset packs in `GL QSP/`.
- Images: `images/` (root level, shared with TS project).
- Sound: `sound/` (root level, shared with TS project).
- Native player: `GL QSP/qspgui-v5.9.2-b3-linux64/` (needs `LD_LIBRARY_PATH=.../lib`).
- **Edit** `.qsps` files in `GL QSP/locations/` (one per location).
- **Build**: `node GL QSP/build.js` → compiles to `GL QSP/Girl_Life_0.9.9.1_patched.qsp`.
- **Launch**: `DISPLAY=:0 LD_LIBRARY_PATH=./GL\ QSP/qspgui-v5.9.2-b3-linux64/lib ./GL\ QSP/qspgui-v5.9.2-b3-linux64/bin/qspgui GL\ QSP/Girl_Life_0.9.9.1_patched.qsp`
- **Do not launch the game** — user launches it themselves. Just build and tell them it's ready.

## QSP Language Server

This project has a QSP language server configured through OpenCode.

When modifying `.qsps` or `.qsrc` files:

- Use the QSP LSP diagnostics to validate your changes.
- Fix all syntax errors introduced by your changes before finishing.
- Do not assume QSP syntax is correct from memory if the language server reports an error.
- Check for unresolved locations and labels, incorrect argument counts, invalid variable prefixes, and malformed location boundaries.
- After substantial QSP edits, verify that no new QSP diagnostics remain.
