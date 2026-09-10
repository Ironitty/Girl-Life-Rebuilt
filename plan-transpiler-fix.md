# Plan: Fix QSP Transpiler Generator + Regenerate All 1400 Locations

> **Status: READY TO EXECUTE** (decisions locked, root causes verified).
> This doc is self-contained — a new chat can pick this up cold. Re-read `AGENTS.md` first.

## 1. Objective

The custom QSP→TS transpiler (`scripts/qsp-transpile/`) auto-converts all 1400 QSP
locations into TS location files. The generated output has two systematic defect
classes that must be fixed **at the generator** (not by hand-editing generated files),
then all 1400 files regenerated and verified.

**Goal:** `tsc -b` = 0 errors, `vite build` succeeds, smoke test 20/20, and no more
literal-garbage dynamic text in the game.

## 2. Project context (verified)

- **Stack:** React 19 + TS, Vite 8 (rolldown), Tailwind v4, Zustand, Howler.js.
- **Real typecheck is `npx tsc -b`** (build mode). Root `tsconfig.json` has `"files": []`
  + references; `tsconfig.app.json` includes `"src"`. `npx tsc --noEmit` on the root
  checks almost nothing — **use `tsc -b`**.
- **Build:** `npx vite build` → `dist/`. **Dev:** `npx vite`. **Smoke:** `npx tsx scripts/smoke-test.ts` (Playwright + Chromium, 20 checks, port 4173).
- **NOT a git repo** (verified `git rev-parse` → "not a git repository"). So "diff old vs new"
  = copy-tree + `diff -r`, **not** git.
- **vitest** is available (`npm test` = `vitest run`). No transpiler test harness exists yet.
- **Transpiler is the source of truth**; the 1400 output files are regenerable.
  Rule to establish: *generated files are never manually edited.*

### Current defect counts (verified via `tsc -b` + grep)
- **406 `tsc -b` errors in 43 files** (all transpiler generator bugs).
- **614 files** render dynamic text as literal garbage (backtick-without-`${}` bug).
- **1081 files** contain `TODO-QSP` markers (mix of dynamic-text + unsupported constructs).
- **1096 of 1402** location files import `qspBridge` (transpiled signature); ~306 are simple
  transpiled locations with no GS calls.
- QSP has **702 modules / 5496 `module.func` combos**; `qspBridge.ts` has **114 case branches**
  covering top-frequency modules; unmapped calls just `warn()` in dev.

### What's already done (do NOT redo)
- Core engine + ~30 core systems ported (arousal, willpower, mood, money, npc_relationship,
  drugs, fame, exp_gain, sweat, cum_call, stats, theme, food, grades, jobs, calendar…).
- Transpiler built: `parser.ts` (30KB), `generator.ts` (37KB), `classify.ts`, `index.ts`, `ast.ts`.
- `qspBridge.ts` (`src/locations/_shared/`) dispatches `qspCall(s, module, func, ...args)`.
- Tooling: `port-status.ts`, `dep-graph.ts`, `state-access-report`, `misc-ratchet`, `smoke-test.ts`,
  `ff-screenshot.ts`.
- Game boots through the full pipeline (title → new game → game screen).

### Known-misleading tooling (out of scope for this plan)
- `port-status.ts` reports 1401/1400 "ported" by counting any `enter:` — ignores the 43 broken
  files and the TODOs. Fix later.

## 3. Root causes (all in `scripts/qsp-transpile/generator.ts`)

| # | Bug | Symptom (verified) | Location |
|---|-----|--------------------|----------|
| 1 | **Number normalization** — `translateValue` does `if (/^\d+$/.test(v)) return v;` (returns raw int literal) | `result = 0000` (TS1121 octal), `+ (08)` (TS1489 leading zero) | `translateValue()` in generator.ts |
| 2 | **Dynamic var / computed object key** — dynamic name + mid-expression `$` not stripped | `String((s as any).i> ?? 0)` (stray `>`), `(s as any).$((s as any).ARGS ?? 0)?.[...]` (TS1109/TS1003) | `translateValue()` / `buildKeyExpr()` (generator.ts:904) |
| 3 | **Dynamic text** — `qspStringToJs` wraps a translated expr in backticks **without `${}`** | 614 files show `((s as any).npc_nickname ?? 0)?.['A29']` literally | `qspStringToJs()` at generator.ts:760 |

Example offending lines (from the current tree):
- `src/locations/other/body_structure.ts:15` → `(s as any).result = 0000;`
- `src/locations/other/body_structure.ts:70` → `... + (08);`
- `src/locations/kgd/KGDexp.ts:17` → `String((s as any).i> ?? 0)` and `KGD[\'exp_' + ...]`
- `src/locations/other/_menu_settings.ts:164` → `(s as any).(((s as any).$((s as any).ARGS ?? 0)...`
- `src/locations/other/calendar_events.ts:101` → `((s as any).ARGS ?? 0)[2]`

## 4. Decisions (locked)

1. **Fix the generator + regenerate ALL 1400** (do not hand-fix generated output).
2. **Dynamic text:** full **segment-IR refactor** of `qspStringToJs` (not the minimal `${}` patch).
3. **Fallback:** **noisy** `qspUntranslated` helper — `console.warn` + visible sentinel in dev,
   **throw in test mode** (vitest). Not a silent placeholder.
4. **Numeric fix:** strip leading zeros with regex (NOT `parseInt`) to avoid precision loss on
   large QSP integers.

## 5. Files

**Create**
- `scripts/qsp-transpile/generator.test.ts` — vitest regression fixtures.
- `src/locations/_shared/qspUntranslated.ts` — noisy fallback helper.

**Modify**
- `scripts/qsp-transpile/generator.ts` — the 4 fixes + AUTO-GENERATED header + metrics.
- `scripts/qsp-transpile/index.ts` — add `--output-dir` flag; print metrics + fallback report.

## 6. Execution sequence

**Step 1 — Fixtures (red first).** `generator.test.ts` covering:
- `0000`→`0`, `08`→`8`, `123`→`123` (numeric normalization).
- dynamic object key, dynamic variable name, `$`-prefixed var inside an expression.
- `<<$npc_name>>`, literal+expr+literal, multiple `<<...>>` blocks in one string (segment IR).
- an untranslatable expression → emits `qspUntranslated(...)`.

**Step 2 — Generator fixes** (`generator.ts`):
- Numeric: `if (/^\d+$/.test(v)) return v.replace(/^0+(?=\d)/, "");`
- Dynamic var/key + `$`-strip in `translateValue`/`buildKeyExpr`.
- **Segment IR text:** rewrite `qspStringToJs` to parse `<<...>>` into `{type:'text'|'expr'}`
  segments, then emit **one** template literal. Escape `` ` ``, `\`, and `${` in literal segments.
- **Noisy fallback:** untranslatable exprs emit `qspUntranslated(s, 'raw', {location, line})`.
- **Header:** `// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler` at top of every file.
- **Metrics:** count dynamic interpolations, dynamic keys, fallbacks, warnings; return in GenResult.

**Step 3 — Fallback helper** (`qspUntranslated.ts`):
```ts
export function qspUntranslated(s: GameState, raw: string, meta: { location: string; line?: number }): string {
  if (import.meta.env.MODE === 'test') {
    throw new Error(`[QSP UNTRANSLATED] ${meta.location}:${meta.line ?? '?'}: ${raw}`);
  }
  console.warn(`[QSP TRANSPILER FALLBACK] ${meta.location}:${meta.line ?? '?'}: ${raw}`);
  return `[UNTRANSLATED: ${raw}]`;
}
```

**Step 4 — Run tests:** `npx vitest run scripts/qsp-transpile` → green.

**Step 5 — Temp-dir regen.** Add `--output-dir <dir>` to `index.ts` (currently `OUTPUT_DIR` is
hardcoded to `src/locations`). Then:
```
npx tsx scripts/qsp-transpile/index.ts transpile --all --output-dir /tmp/gl-regen-new
diff -r src/locations /tmp/gl-regen-new
```
Inspect blast radius before touching the real tree.

**Step 6 — Real regen** into `src/locations` once the diff looks sane:
```
npx tsx scripts/qsp-transpile/index.ts transpile --all
```

**Step 7 — Verify gates:**
- `npx tsc -b` = **0 errors**
- `npx vite build` succeeds
- `npx tsx scripts/smoke-test.ts` = **20/20** (on fresh dist — build must have run first)
- grep for remnant bugs: `grep -RInE '\b0[0-9]+\b' src/locations`, `grep -RIn '\.\$' src/locations`,
  and the mangled dynamic-key pattern.
- confirm the 614-file literal-text pattern (backtick-without-`${}`) is gone.

**Step 8 — Firefox visual check** + re-read AGENTS.md (workflow step 5) before reporting done:
```
xvfb-run -a -s "-screen 0 1400x900x24" npx tsx scripts/ff-screenshot.ts [url] [output] [width] [height] [delay_ms]
```

## 7. Done-gates (all must pass)

- [ ] `tsc -b` = 0 errors
- [ ] `vite build` OK
- [ ] smoke test 20/20 on fresh dist
- [ ] no remnant-bug grep hits (`\b0[0-9]+\b`, `\.\$`, mangled dynamic keys)
- [ ] 614-file literal-text pattern gone
- [ ] no **new** fallbacks beyond the known set (generator metrics report)
- [ ] Firefox visual check clean
- [ ] AGENTS.md re-read in full

## 8. Gotchas / notes for a new chat

- **Regenerate overwrites the ~750 currently-clean files** — that's the accepted trade-off for
  consistency. The temp-dir diff (step 5) is the safety net.
- **`tsc --noEmit` on root is a trap** — it checks nothing. Always `tsc -b`.
- **Stale dist trap:** smoke test passing on an old `dist/` is meaningless; always build first.
- **`port-status` is misleading** until rewritten (counts `enter:` as "ported").
- **Deferred systems** (transport, NPC dialogue, weather/street events) are NOT part of this plan —
  see `feedback_deferred.md`.
- **qspBridge gaps** (unmapped `module.func` → `warn()` in dev) are a separate follow-up, not this plan.
- If a single thinking block runs >90s, run `/compact` then re-read `AGENTS.md` (compact policy).

## 9. Source docs

- `AGENTS.md` — conventions, workflow, compact policy (re-read in full before continuing).
- `feedback.md` — ChatGPT strategy doc (transpiler-first, classification, confidence scoring).
- `parserNotes` — ChatGPT second opinion that approved this plan with the tightenings folded in
  (noisy fallback, segment IR, leading-zero strip, temp-dir diff, AUTO-GENERATED header, metrics).
- `feedback_deferred.md` — deferred systems (transport, shop, NPC dialogue, weather).
- `MIGRATION_REPORT.md` — location complexity breakdown by region.
