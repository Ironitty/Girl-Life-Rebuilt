<!-- COMPACT: re-read this file in full before continuing work -->
# AGENTS.md

## Compact Policy
- You have 16k output tokens. Think in short bursts: decide, act, then think again.
- **After every compaction**, re-read this file in full before continuing work.
- **Compaction summaries MUST include**: "Re-read AGENTS.md in full before continuing."
- **Before finishing any task**, complete workflow step 5 (re-read + verify).

## General
- **Think before acting.** Before every command or edit, pause and ask: does this still make sense given what's changed? Am I just repeating the last step on autopilot?
- Keep responses short (CLI). No preamble/postamble unless asked.
- Prefer editing existing files; follow existing code style. No code comments unless asked.
- When user says "Screenshot", look at the newest file in `/home/depressedtsukasa/Pictures/Screenshots/`.
- **After any failure, research online** (web docs, GitHub issues, StackOverflow) before trying the next approach.
- **If still stuck**, ask the user to pass the problem to ChatGPT. Sanitize for SFW: replace adult terms with neutral equivalents ("intimate scene" → "scene", "arousal" → "stat", "nude" → "unclothed").
- **Debug requests**: Read `debug-log.txt` (last 20 actions with timestamps + button labels). User plays via `./debug-launch.sh`. Also check `window.__debugLog` via Playwright or ask user to press F9 and screenshot.
- **`pkill` is unreliable** on this system. To free a port, use `lsof -ti:<port> | xargs kill -9` instead.

## Verify Before Claiming
Inspect before you claim. If you can check it cheaply, checking is mandatory.
- Prefer: "I checked X and observed Y, therefore Z."
- Avoid: "This should work, so the issue is fixed."
- If verification is not possible, label it as an inference and say what would need to be checked.
- Never invent file contents, command output, test results, or project state.

## Check Existing Work
Before creating or replacing anything, check if it already exists. Don't treat lack of memory as evidence the work hasn't been done. Prefer modifying the smallest necessary part over rebuilding.

## Folder Structure
```
GL/
├── src/                  ← React/TS game source (core/, locations/, components/)
├── public/               ← static assets (symlinks to images/, sound/)
├── images/               ← game image assets
├── sound/                ← game sound assets
├── scripts/              ← build/port scripts
├── dist/                 ← Vite build output
├── GL QSP/               ← original QSP game
│   ├── locations/        ← .qsps files (one per location)
│   ├── qspgui-v5.9.2-b3-linux64/  ← native QSP player
│   ├── build.js          ← QSP build script
│   └── Girl_Life_0.9.9.1.qsp
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Project: Girl Life (TS/React Rebuild)
- **Stack:** React 19 + TypeScript, Vite 8, Tailwind CSS v4, Zustand, Howler.js
- **Build**: `npx vite build` → `dist/`
- **Typecheck**: `npx tsc --noEmit`
- **Dev server**: `npx vite`
- **Port status**: `npm run port-status`
- **Source layout**: `src/core/` (engine), `src/locations/` (game locations), `src/components/` (UI)
- **Location registry**: `src/core/location.ts` — `registerLocation()` + `getRegisteredLocations()`
- **State**: Zustand store in `src/core/store.ts` — flat object mirroring QSP globals
- **Save/Load**: IndexedDB via `src/core/save.ts` (10 slots)

### Workflow (mandatory after EVERY code change)
0. **Post-compact check**: If compacted since last read, re-read this file in full.
1. **Edit** code in `src/`
2. **Smoke test**: `npx vite build && npx tsx scripts/smoke-test.ts`
3. **Targeted test** : Write a Playwright test in `scripts/test-<name>.ts` that checks the **actual state values** affected by the fix, not just "no crash". Use `page.evaluate` to read Zustand store state. Run it and confirm the values are correct.
4. **Visual inspection**: Headless Chromium + Firefox screenshots. Use separate Firefox profile (don't kill user's). Firefox: `xvfb-run -a -s "-screen 0 1400x900x24" npx tsx scripts/ff-screenshot.ts [url] [output] [width] [height] [delay_ms]`.
5. **If issues found**: go back to step 1.
6. **Verify**: Re-read this file in full. Confirm steps 1–5 completed.

Do NOT report "done" until all steps pass.

### Render and Interaction Audit
`npx tsx scripts/render-interaction-audit.ts` — 5-phase (static, render, interaction, excluded render, excluded interaction). Requires `npx vite build` first. Port 4174. Give it **7200000 ms timeout**.

**Default: continue on failure** — tests all targets, reports every failure at the end. Use `--stop-on-fail` to stop at the first failure (old behavior).

**Nothing is allowed to fail the audit.** The audit passes ONLY when all 5 phases report zero failures. There is no "warning" tier — a warning is an unresolved failure. Phase 4/5 failures are bugs by default: every one must be investigated and fixed. If a location is genuinely bug-free (Cat 3), fix the root cause — typically by adding the missing state variables to `TEST_STATE` so state-dependent buttons appear (Cat 1) — rather than skipping the check. Only after exhausting Cat 1/2 fixes may the phase logic itself be modified to handle the case. Never treat "excluded" or "warning" as "passing."

**Default procedure (filtered → full):**
A full audit can take an hour or more. Full audits should only be run after all known issues have been adressed.
1. After fixing specific issues, run **filtered audit** on affected locations first: `npx tsx scripts/render-interaction-audit.ts --filter "<regex>"` to confirm the fixes.
2. Only after filtered audit passes, run **full audit** to verify no regressions.
3. Timeouts count as errors — investigate and fix them, don't just increase the timeout. This is a text based game, nothing should take that long.
4. **NEVER re-run a full audit when a recent log already exists.** Check `logs/audit-*.log` for the most recent complete audit before running a new one. The audit script writes timestamped logs to `logs/`. Use `grep -E "^(PASS|FAIL|Phase|===|[0-9]+ failure)" logs/audit-<latest>.log` to read results. Only run a new full audit if no recent log covers the current code state.

Flags: `--skip-static`, `--skip-render`, `--skip-interaction`, `--filter <regex>`, `--start-after <loc>`, `--check-todo`, `--verbose`, `--stop-on-fail`.

`--start-after <loc>` is phase-specific: without `--skip-render` → Phase 2 resumes; with `--skip-render` → Phase 3 resumes.

Exclusion sets at top of file: `EXCLUDE_EXEC_DATA`, `EXCLUDE_FUNC_LITERAL`, `EXCLUDE_EXPR`, `EXCLUDE_BG`, `EXCLUDE_NO_ACTIONS`, `EXCLUDE_JS_ERRORS`, `EXCLUDE_UNTRANSLATED`.

**Transpiler status: FROZEN.** The QSP transpiler (`scripts/qsp-transpile/`) is no longer the primary fix mechanism. Generated files in `src/locations/` are now treated as hand-editable source. Do NOT run `npx tsx scripts/qsp-transpile/index.ts transpile --force --all` unless explicitly asked — it will overwrite manual fixes.

**TODO-QSP fix workflow (manual, one-by-one):**
1. Read the `TODO-QSP` comment in the generated file.
2. Find the corresponding line in `GL QSP/locations/<name>.qsps`.
3. Classify:
   - **Cat 1 — Missing TEST_STATE var**: Add to `TEST_STATE` + `initialState` in `store.ts`. Rebuild, re-run audit.
   - **Cat 2 — Translatable bug**: Hand-edit the generated `.ts` file to fix the logic. Verify against QSP source semantics. If the same pattern appears in 3+ files, grep for it and fix all instances.
   - **Cat 3 — Genuinely special**: Add to the appropriate exclusion set in `render-interaction-audit.ts` with a comment citing evidence.
4. After each fix (or batch of related fixes): `npx vite build && npx tsx scripts/smoke-test.ts`.
5. Periodically run the full audit to verify no regressions.

**Exclusion Discipline.** Before adding ANY location to an exclusion set, rule out Cat 1 and 2:
- `'undefined' in text` → check missing TEST_STATE vars (Cat 1) or handler bug (Cat 2)
- `empty destination` → check unimplemented `qspCall` targets or redirect chains (Cat 2)
- Only exclude as Cat 3 when QSP source is genuinely broken/deprecated or the asset never existed.
- The exclusion comment must cite specific evidence ("deprecated in QSP source", "no act commands"), not just restate the symptom.

### Asset Integrity Audit
`npx tsx scripts/asset-audit.ts` — standalone (NOT part of the render/interaction audit). Walks `src/locations/**`, extracts static + random-suffix + dynamic asset references, resolves each against `public/` (symlinks to `images/` and `sound/`), and reports every missing asset with `file:line`. Logs to `logs/asset-audit-*.log`.

- **Typo** (a near-match exists — case mismatch, doubled path segment, or a numbered sequence gap): hard fail, exit 1. Fix the code path to point at the real asset.
- **Absent** (no near-match; genuinely not in the shipped bundle): documented Cat 3, reported but NOT a hard fail. The QSP main asset bundle is absent from this repo, so these are not recoverable — 193 are currently documented.
- **Dynamic** refs (asset prefix built from non-`Math.random` state, e.g. `s.npc + '_portrait'`): listed for manual review, never a hard fail.

Run it after any change that adds or edits asset paths. It catches broken images/audio the render/interaction audit misses (that audit's 404 filter hides them).

## Evidence Before Action

For any non-trivial debugging, coding, configuration, architecture, or project-state
task, do not immediately modify files or execute a proposed fix.

Before the first write/change action:

1. Inspect the relevant existing implementation.
2. Inspect any directly related code, configuration, logs, or runtime state needed
   to establish the current behavior.
3. Determine what is already implemented so completed work is not repeated.
4. Identify the observed evidence for the actual problem or missing behavior.
5. Form a concrete plan based on that evidence.
6. Only then modify the project.

A plausible explanation is not sufficient evidence.

Do not make a change merely because it seems likely to work. When the environment
can answer the question, inspect the environment first.

After making a change, verify the result using the appropriate source of truth:
tests, compiler output, runtime behavior, logs, generated output, or direct
inspection.

For non-trivial tasks, a rapid conclusion without inspecting the relevant project
state is a failure to follow these instructions.

## Project: Girl Life QSP (Original)
- **Edit** `.qsps` files in `GL QSP/locations/` (one per location).
- **Build**: `node GL QSP/build.js` → `GL QSP/Girl_Life_0.9.9.1_patched.qsp`.
- **Launch**: `DISPLAY=:0 LD_LIBRARY_PATH=./GL\ QSP/qspgui-v5.9.2-b3-linux64/lib ./GL\ QSP/qspgui-v5.9.2-b3-linux64/bin/qspgui GL\ QSP/Girl_Life_0.9.9.1_patched.qsp`
- **Do not launch the game** — user launches it themselves. Just build and tell them it's ready.

## QSP Language Server
When modifying `.qsps` or `.qsrc` files:
- Use QSP LSP diagnostics to validate changes. Fix all syntax errors before finishing.
- Check for unresolved locations/labels, incorrect argument counts, invalid variable prefixes, malformed boundaries.
- After substantial edits, verify no new QSP diagnostics remain.
