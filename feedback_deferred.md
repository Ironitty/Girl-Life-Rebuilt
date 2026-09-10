# Deferred Advice from ChatGPT

## Major Systems (build in this order)

### 1. Transport System
- Model transport independently of UI
- Interfaces:
  ```ts
  interface TransportRoute {
    id: string;
    stops: TransportStop[];
    departures: DepartureRule[];
    fare: number;
  }

  interface Trip {
    routeId: string;
    from: string;
    to: string;
    departureTime: number;
    arrivalTime: number;
  }
  ```
- Engine flow: find next departure → validate fare/conditions → pay → advance time → possibly run travel events → arrive
- **Schedule simulation yes; mandatory travel scene no.** Traveling screen only worthwhile when something can happen during travel (random encounters, intermediate stops, dialogue, choosing to get off early)
- For uneventful rides: advance time and navigate immediately
- Port `transport_functions` from QSP

### 2. Shop System
- High-fan-out infrastructure, build alongside transport
- Port `shop_utils` (1652 lines) from QSP ✅
- Shop operations should expose operations and eventually produce ordinary `ActionDef`s
- Do NOT add shop semantics directly into `ActionDef`

### 3. NPC Dialogue System
- Use typed TypeScript data + small interpreter (NOT raw JSON, NOT a DSL yet)
- Interfaces:
  ```ts
  interface DialogueNode {
    id: string;
    speaker: string;
    text: string | ((ctx: DialogueContext) => string);
    choices?: DialogueChoice[];
    next?: string;
  }

  interface DialogueChoice {
    label: string;
    visible?: (ctx: DialogueContext) => boolean;
    enabled?: (ctx: DialogueContext) => boolean;
    effect?: (ctx: DialogueContext) => void;
    next?: string;
    exit?: boolean;
  }
  ```
- Architecture: typed dialogue definitions → dialogue interpreter → SceneBuilder → React
- Multiple speakers = different `speaker` values
- Relationship/mood/time conditions in `visible`; item transfers and relationship changes in `effect`
- Only invent a DSL if hundreds of dialogues later show TS representation is genuinely too verbose
- Do NOT add dialogue semantics directly into `ActionDef`

### 4. Weather + Street Events
- Build AFTER transport and shops
- Should plug into time/location infrastructure instead of becoming special cases
- Currently missing: `weatherFall` and `sunWeather` never set by game logic
- Port `calendar_events` and `street_events` from QSP

---

## Smaller Deferred Items

### Store Actions Under One Property
- Future variant: put all store actions under one `actions` property so extraction becomes `{ actions, ...state }`
- Don't refactor hundreds of callers just for this; current whitelist-based extraction is sufficient

### Contract Tests: Explicit Metadata on Non-Stub Locations
- Eventually require explicit `locationType` (and other metadata) on every non-stub location via contract tests
- Currently only DEV-mode warning for fully-ported locations missing explicit `locationType`

### Call-Stack Lifecycle (Suspend/Resume)
- `call()` is nuanced: if it represents a visible subscene, may eventually want `suspend/resume` lifecycle concepts
- Don't make `exit()` responsible for solving the entire call-stack lifecycle yet
- Currently: `exit()` is triggered on `goto()` (which includes `call()`), not on `invoke()`

### Job System as Nested Object
- Do NOT promote 20 job fields into 20 new top-level globals
- Prefer nested structure:
  ```ts
  job: {
    currentJob: ...,
    experience: ...,
    nextShift: ...,
    ...
  }
  ```
- `misc` is best for obscure one-off legacy event flags during migration, not emerging domain models

### ActionDef: Single Nested Navigation Union
- Longer-term: replace three separate navigation properties with a single nested union:
  ```ts
  navigation?:
    | { type: 'goto'; location: string; arg?: string }
    | { type: 'call'; location: string; arg?: string }
    | { type: 'invoke'; routine: string; arg?: string };
  ```
- Aesthetically cleaner, lets future transition metadata grow without bloating `ActionDef`
- Current XOR type is functionally fine; no urgency

### Dual Build (Release + Debug)
- Could produce both `GirlLife.html` and `GirlLife-debug.html` later if useful
- Debug build would include full undo/redo history, debug labels, inspection UI
- Release build strips those (already done via `import.meta.env.DEV` checks)

### JSON-Only Persistent State Constraint
- Enforce: "Anything in persistent GameState must be plain serializable data"
- No functions, services, DOM objects, class instances, Maps/Sets with special semantics
- Static definitions live outside the save
- Add stricter test to verify no non-serializable values leak into persistent state

### Component Locations: Navigation via ActionDef
- Complex components (wardrobe, etc.) can have internal controls
- But global navigation ("Leave," "Go home," "Return to shop") should preferably remain normal `ActionDef`s
- Keeps navigation semantics centralized instead of creating a second engine inside React

---

## Round 1 Deferred Items

### CI Ratchet on Misc Count
- Dev tooling should produce a report of misc variables with read/write counts
- Build fails if misc variable count exceeds a ratchet threshold
- "Existing migration debt is allowed but new debt can't silently accumulate"
- Example output:
  ```
  Unknown QSP variables encountered:
  pcs_temper             117 reads, 42 writes
  voyeurism               91 reads, 11 writes
  Total: 67
  Build fails if > 67.
  ```

### `npm run port-status` Tool ✅
- Report port completion per region
- "For this project, tooling around the migration is probably worth almost as much as additional game-engine work"
- Current: `scripts/port-status.ts`, run via `npm run port-status`

### `gameVersion` in Save Schema
- SaveFile should include `gameVersion: string` alongside `schemaVersion: number`
- Not yet added to the save envelope

### Tauri / ZIP Distribution
- "Eventually, if this becomes a proper distributable game, Tauri would solve a lot"
- Normal filesystem-backed save files while retaining the same React application
- "A ZIP or later Tauri executable still gives you easy distribution"
- Keep `vite-plugin-singlefile` now (convenient), but don't treat it as an architectural requirement
- Distinguish: `GirlLife/ { index.html, assets/ }` (good) vs `GirlLife.html 150MB` (bad)

### Save Round-Trip Full Equality Test
- Original suggestion: `expect(loaded).toEqual(original)` for full state equality
- Current: JSON round-trip test validates specific fields, not full deep equality
- Becomes "increasingly valuable as the state grows"

### Build Validator: Asset Path Checks
- Contract tests should verify:
  - Every asset path exists on disk
  - Asset filename casing is correct
  - Every original QSP location is classified (ported / stub / deliberately excluded)
- Currently: contract tests check goto/call targets but NOT asset paths

### `QspValue` Type for Misc
- "QSP variables won't all necessarily be numeric"
- Suggested: `type QspValue = number | string` or separate numeric/string buckets
- Current: `misc: Record<string, number | string | boolean>` (covers this, but no separate buckets)

---

## Round 2 Deferred Items

### Clothing Catalog Normalization
- Full `ClothingDef` catalog with static definitions in `data/clothing/`:
  ```ts
  interface ClothingDef {
    id: string;
    name: string;
    slot: ClothingSlot;
    layer: number;
    warmth: number;
    attractiveness: number;
    tags: string[];
  }
  ```
- Saved state: `ClothingState { owned: Record<string, number>; worn: Partial<Record<ClothingSlot, string>> }`
- Facade provides: `clothing.wear()`, `clothing.remove()`, `clothing.isWearing()`, `clothing.getWarmth()`, `clothing.getVisibleLayers()`
- Current: facade exists (`src/systems/clothing.ts`) but full catalog with static defs not yet built
- "Location code shouldn't care how you store clothing. That's the important part of the facade."
- Legacy fields (`clothingworntype`, `pantyworntype`) are "compatibility state rather than the long-term source of truth"

### Time Boundary Ordering Formalized
- `advanceTime()` should own boundary events with explicit ordering:
  ```text
  advance clock
  → hourly
  → midnight daily reset
  → calendar events
  → NPC schedule update
  → derived stats
  ```
- "Write some disproportionately thorough tests for this one system"
- Test cases: `23:50 + 20 min`, `23:50 + 24h`, month end, year end, multiple-day sleep
- "A time bug can affect practically every system in the game"
- Current: `advanceTime` exists but boundary ordering may not be fully formalized with tests

### External Side Effects After COMMIT
- "External side effects should preferably happen after successful state transition"
- Order: state changes → scene build → validation → COMMIT → audio → autosave → other external effects
- "Otherwise rollback can restore game state but can't 'unplay' a sound or undo a disk write"
- Not yet explicitly enforced in the engine pipeline

### misc Split into Meaningful Buckets (Long-Term)
- "No need to do that immediately"
- Suggested eventual structure:
  ```ts
  flags: Record<string, boolean>;
  counters: Record<string, number>;
  vars: Record<string, string | number>;
  ```
- "I'd rather see `eventFlags['pav_beach_seen_igor']` than `misc['pav_beach_seen_igor']`"
- Current: single `misc: Record<string, number | string | boolean>`

### `data/` Directory Population
- Suggested structure:
  ```text
  data/
  ├── npcs/       ← immutable definitions
  ├── clothing/
  ├── items/
  ├── spells/
  ├── jobs/
  └── locations/  ← metadata only, if useful
  ```
- "Static definitions do not belong in saves. Player-specific/dynamic state does."
- Current: `data/` directory may not be fully populated with all categories

### Code-Splitting by Region (Not Urgent)
- "If you eventually decide to code-split by region (Pavlovsk chunk, City chunk, Gadukino chunk...)"
- "You'll need to change away from eager global registration or generate a manifest that supports lazy loading"
- "Not remotely urgent"

### Profile Startup Performance
- Profile: cold startup time, JS parse/compile time, memory after startup, build time, HMR time
- "Rather than watching bundle bytes alone"
- "I'd reconsider single-file only when users actually experience something undesirable"
- "Add a loading screen doesn't meaningfully solve initial JS parse/execute time"
- "This issue is firmly in the later bucket"

### Combat Save Decision
- "Whether CombatState belongs in the save depends on one game rule"
- If players can save during combat: `GameState.combat?: CombatState`
- If saving during combat is prohibited: `EngineRuntime.combat?: CombatState`
- "Make that decision explicitly rather than allowing it to happen accidentally"
- Current: combat state location not explicitly decided

---

## Round 3 Deferred Items

### Howler `html5` for `file://` Protocol ✅
- Howler defaults to Web Audio (XHR loading), which is inconsistent under `file://` origins
- Fix: `new Howl({ src: [...], html5: location.protocol === 'file:' })`
- `html5: true` forces Howler onto `HTMLAudioElement` instead of XHR→WebAudio
- "You don't need to base64-inline the whole soundtrack"
- Current: implemented in `src/core/audio.ts` (checks `file:` protocol)

### Audio Check in Smoke Tests
- "Given that you already have Chromium and Firefox testing, add one trivial audio check to each"
- "That's much more valuable than trying to reason about every browser's evolving `file://` rules"
- Current: smoke tests don't verify audio playback

### IndexedDB `file://` Warning Message
- "Local saves are tied to this browser/location. Export a save before moving the game or switching browsers."
- IndexedDB is scoped by origin; `file:` origin is browser-dependent, often `"null"`
- "Moving `index.html` can make the old IndexedDB saves inaccessible"
- "Your existing JSON export/import is therefore not just a nice extra; it's the reliable portable-save mechanism"
- Current: no warning shown in Save UI

### `Object.freeze` for Built Scenes (REVISED in Round 4)
- Round 3 suggested freezing built scenes. Round 4 REVISED: do NOT freeze the live `SceneState`
- "Your current location model intentionally permits handlers to do things like `st.scene.mainText = '...'`"
- "Freezing the runtime scene therefore changes the semantics of hundreds of already-ported actions"
- Instead: debug history snapshots scene containers (copy `curActs` array, copy `mainText` if array) while retaining handler function references
- "Runtime scene mutability is a feature of your QSP compatibility layer. Debug-history immutability should be implemented by the debugger, not imposed on the engine"
- Current: `snapshotScene` in `debugHistory.ts` copies `curActs` but does NOT copy `mainText` (should add if `mainText` is an array)

### Handler IDs for Persistent Replay
- "Handler IDs become worthwhile someday if you want persistent replay files, saveable scenes, modding APIs, deterministic action logs, or networking"
- "They're unnecessary just to implement a 100-step development undo buffer"
- Current: inline handler functions in ActionDef (fine for dev undo buffer)

### Tauri for Filesystem Saves
- "If Girl Life eventually becomes a Tauri application, normal filesystem saves would eliminate this entire class of issue"
- Eliminates IndexedDB origin-scoping problems under `file://`
- Not urgent while single-file + JSON export/import works

---

## Round 4 Deferred Items

### Single-File Size Policy
- "At 2.36 MB, I would do absolutely nothing"
- Benchmarking thresholds:
  | Size | Reaction |
  |-----:|----------|
  | 2–10 MB | Ignore it |
  | 10–20 MB | Measure cold startup |
  | 20–50 MB | Start questioning large inlined assets |
  | 50+ MB | Strongly consider separating assets |
  | 100+ MB | Abandon "everything in one HTML" |
- "The distinction between code and images matters a lot"
- "A 12 MB minified JS game is one thing. A 70 MB HTML file because you've stuffed 50 MB of JPEGs into base64 is much less attractive"
- Vite only base64-inlines assets below `build.assetsInlineLimit` (default 4 KiB)
- `public/` resources are NOT inlined by vite-plugin-singlefile

### Don't Use a Service Worker
- "Service workers require secure contexts—normally HTTPS, with localhost allowed for development"
- "`file://` is not a deployment model you should depend on for service-worker registration"
- "A service worker wouldn't solve your fundamental single-file issue anyway"

### Future Directory Structure (Escape Hatch)
- Plan for this future structure rather than fighting to embed the entire asset library:
  ```text
  GirlLife/
  ├── GirlLife.html       ← all code/UI/game logic
  ├── images/
  ├── sound/
  └── saves/              ← eventually, if packaged
  ```
- "You still have extremely simple distribution: ZIP that directory"
- "The original QSP distribution was already around 91 MB including assets"

### Lazy-Loaded Images Only Help If External
- "If `const beach = 'data:image/jpeg;base64,...'` already exists inside the bundle, lazy rendering can postpone decoding/rendering but cannot remove those bytes from index.html"
- "Real lazy loading requires: index.html + images/beach.jpg + images/train.jpg"
- Only relevant when moving to the future directory structure

### Test for Handler That Modifies `st.scene`
- "I would add one test specifically exercising a handler that modifies `st.scene`, because your current smoke path understandably missed this class of failure"
- Test should verify that after a handler mutates `st.scene.mainText` or `st.scene.curActs`, the debug history snapshot still has the OLD values
- Current: no such test exists

### `MutableSceneState` Type Distinction
- "I'd also make the type distinction explicit":
  ```ts
  type MutableSceneState = {
    mainText: string;
    curActs: ActionDef[];
    backimage?: string;
    // ...
  };
  ```
- "and don't freeze `SceneBuilder.build()`"
- Current: single `SceneState` type used for both runtime and snapshots

### `executionLocation` / `sourceLocation` Context for Invoke
- "If translated code needs to know which source block am I currently executing, introduce something separate"
- Options: `executionLocation` field on GameState, or pass through context:
  ```ts
  invoke(s, routine, {
    sourceLocation: 'shop_utils',
    arg,
  });
  ```
- "Then `s.loc` continues to mean where the player is, which is much safer"
- Current: `invoke()` doesn't set `s.loc` (correct), but no `sourceLocation` context exists yet
- Only needed if ported code references `$CURLOC` during a GOSUB

### `snapshotScene` Should Copy `mainText` If Array
- Round 4 suggests:
  ```ts
  mainText: Array.isArray(scene.mainText)
    ? [...scene.mainText]
    : scene.mainText,
  ```
- Current: `snapshotScene` only copies `curActs`, not `mainText`
- Low priority unless `mainText` is actually an array type in the codebase
