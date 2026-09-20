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
3. **Visual inspection**: Headless Chromium + Firefox screenshots. Use separate Firefox profile (don't kill user's). Firefox: `xvfb-run -a -s "-screen 0 1400x900x24" npx tsx scripts/ff-screenshot.ts [url] [output] [width] [height] [delay_ms]`.
4. **If issues found**: go back to step 1.
5. **Verify**: Re-read this file in full. Confirm steps 1–4 completed.

Do NOT report "done" until all steps pass.

**Batch policy**: Port 3 locations per batch, then run the full test cycle once. Only run LSP/typecheck per location within a batch.

### Comprehensive Audit
`npx tsx scripts/comprehensive-audit.ts` — 3-phase (static, render, interaction). Requires `npx vite build` first. Port 4174. Give it **7200000 ms timeout**.

Flags: `--skip-static`, `--skip-render`, `--skip-interaction`, `--filter <regex>`, `--start-after <loc>`, `--check-todo`, `--verbose`.

`--start-after <loc>` is phase-specific: without `--skip-render` → Phase 2 resumes; with `--skip-render` → Phase 3 resumes.

Exclusion sets at top of file: `EXCLUDE_EXEC_DATA`, `EXCLUDE_FUNC_LITERAL`, `EXCLUDE_EXPR`, `EXCLUDE_BG`, `EXCLUDE_NO_ACTIONS`, `EXCLUDE_JS_ERRORS`, `EXCLUDE_UNTRANSLATED`.

**Audit failure triage (mandatory)**: Classify each failure into exactly one category and act:
1. **Missing TEST_STATE variable** → add to TEST_STATE + `initialState` in `store.ts`, rebuild, resume.
2. **Transpiler bug** (`qspFunc` unresolved, backslash paths, `qspUntranslated` in image path, `ARGS[N]` misread) → **STOP.** Grep all generated files for the pattern, fix the transpiler pipeline (`generator.ts`, `parser.ts`, or `qspBridge.ts` runtime dispatcher), regenerate (`npx tsx scripts/qsp-transpile/index.ts transpile --force --all`), rebuild, resume.
3. **Genuinely special case** (no `act` commands in QSP source, missing asset that never existed) → add to exclusion set with a comment.

**Anti-pattern: "Sweep Mode."** Do NOT triage-and-exclude in a loop "for later." If you say "transpiler bug," you must fix it before resuming.

**No reclassification.** `qspFunc` unresolved is ALWAYS Category 2, even if the root cause is in the runtime dispatcher (`qspBridge.ts`) rather than the transpiler source. The transpiler chose to emit a runtime call instead of resolving inline — fixing the dispatcher IS fixing the transpiler's output. Do NOT downgrade to Category 3 by arguing "this is a runtime issue, not a transpiler bug."

**Stop-and-fix rule.** Any Category 2 failure, even a single instance, requires stopping the sweep and fixing the root cause before resuming. Do NOT exclude a single instance and move on — if the same signature appears again later, you've already paid the cost twice.

**Exclusion Discipline.** Before adding ANY location to an exclusion set, rule out Category 1 and 2:
- `'undefined' in text` → check missing TEST_STATE vars (Cat 1) or handler `s`/`st` bug (Cat 2)
- `empty destination` → check unimplemented `qspCall`/`mod_*` targets, no-arg `gt 'loc'` → `['loc','']` (Cat 2), or redirect chains that never build a scene (Cat 2)
- Only exclude as Category 3 when QSP source is genuinely broken/deprecated or the asset never existed.
- The exclusion comment must cite specific evidence ("deprecated in QSP source", "no act commands"), not just restate the symptom.

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
