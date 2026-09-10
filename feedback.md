Yes. **One-location-at-a-time LLM porting is probably the slowest viable approach** for a 1,400-location game. You want to turn the job from “rewrite 1,400 programs” into “mechanically convert the repetitive 70–90%, then use the model on exceptions.”

Given the architecture you already have, I’d change the workflow pretty aggressively.

### 1. Classify locations automatically before porting them

Have a script scan every `.qsps` location and assign a complexity class:

```text
A — trivial
    text/images
    simple ACT
    simple GOTO
    basic assignments

B — moderate
    IF/ELSE
    variable changes
    time advancement
    several actions

C — complex
    loops
    dynamic variable names
    GS/GOSUB
    nested conditions
    heavy state interaction

D — system-heavy
    shop_utils
    combat
    dialogue systems
    transport
    calendar
    etc.
```

You may discover that hundreds of those 1,372 stubs are effectively:

```qsp
if hour >= 8 and hour < 20:
    act 'Go inside':
        gt 'store'
    end
end

act 'Go home':
    gt 'home'
end
```

Qwen should **not be hand-authoring those individually**.

Your script should.

---

### 2. Upgrade `port-locations.ts` from “stub generator” into a real transpiler

This is where I think you'll get the largest speedup.

You're not trying to compile arbitrary QSP perfectly. You only need to recognize the common Girl Life patterns.

For example, automatically translate:

```qsp
act 'Go to the park':
    minut += 15
    pcs_mood += 5
    gt 'pav_park'
end
```

into:

```ts
scene.action({
  label: 'Go to the park',

  handler: s => {
    advanceTime(s, 15);
    s.pcs_mood += 5;
  },

  goto: ['pav_park', ''],
});
```

Automatically handle common constructs like:

```text
ACT
IF / ELSEIF / ELSE
GT
GS
SET
variable += value
variable -= value
dynamic text
images
simple rand()
simple ARGS checks
```

Even if the transpiler only handles **60% of syntax**, that could fully convert a very large fraction of locations.

For unsupported statements:

```ts
// TODO-QSP: unsupported expression:
// dyneval(...)
```

Then Qwen only has to fix the TODOs.

---

### 3. Let the script decide whether an AI review is even needed

Have conversion produce a score:

```text
pav_bus_stop
  conversion confidence: 97%
  unsupported constructs: 0
  unknown variables: 0
  unresolved targets: 0

AUTO-ACCEPT
```

versus:

```text
pav_market
  conversion confidence: 63%
  unsupported constructs: 7
  dynamic variable access: 3
  invokes: 4

AI REVIEW REQUIRED
```

Then the workflow becomes:

```text
QSP
 ↓
transpiler
 ↓
contract tests
 ↓
┌──────────────────────────┐
│ clean + tests pass       │ → done
│ warnings / failures      │ → Qwen
└──────────────────────────┘
```

That's dramatically more scalable.

---

### 4. Port batches instead of individual files

For the model-assisted portion, don't give Qwen:

> Port `pav_market.qsps`.

Give it something like:

> Port these 20 related Pavlovsk exterior locations. Preserve existing architecture. Run tests. Fix failures. Do not redesign systems.

Related files share:

* naming
* variables
* common conditions
* navigation
* images
* helper patterns

Once the model has context for one, the next 19 are cheaper cognitively.

I'd probably batch approximately:

```text
Trivial:      30–100 files/run
Moderate:     10–30
Complex:       2–10
Systems:       1 at a time
```

depending on context size.

Your local 65k context setup is especially well suited to this.

---

### 5. Make Qwen work from failing tests rather than visually comparing QSP

Your contract-testing infrastructure is now a major advantage.

Have the automated pipeline:

```text
convert 30 locations
→ npm test
→ collect failures
→ give Qwen ONLY:
    original QSP
    generated TS
    compiler errors
    contract failures
→ repair batch
```

That's much easier for a model than:

> Please carefully port this entire file and don't miss anything.

The model becomes a **repair system**, which LLMs are generally much better at than perfect one-shot translation.

---

### 6. Generate semantic checks from the QSP before conversion

You can extract facts from the source without understanding everything.

For example:

```text
Original pav_station:

Actions:
  Buy ticket
  Enter station
  Walk home

Navigation targets:
  train
  pav_residential
  ticket_office

Reads:
  money
  hour
  month

Writes:
  money
  minut

Calls:
  transport_functions
```

Then automatically compare this with generated TS.

If original says:

```text
3 actions
2 state writes
3 targets
```

but ported TS has:

```text
2 actions
1 state write
2 targets
```

flag it.

This creates a **semantic port checklist** without needing perfect QSP interpretation.

Your existing state-access AST script already gives you half the infrastructure for the TS side.

---

### 7. Port high-fan-out shared code before dependent locations

This is probably slowing Qwen down right now.

If 80 locations depend on:

```text
shop_utils
```

and it doesn't exist yet, Qwen either:

* invents temporary substitutes,
* leaves TODOs,
* or repeatedly reasons around the same missing system.

Do the dependency graph first.

Calculate:

```text
location/routine              inbound dependencies

shop_utils                   112
transport_functions           87
street_events                 61
NPC dialogue helpers          44
...
```

Port the top of that list.

Then hundreds of later locations collapse into:

```ts
shop.open(...)
```

instead of reimplementing shop logic.

---

### 8. Build reusable translations for repeated QSP idioms

Girl Life likely has patterns repeated hundreds of times.

For example, instead of translating:

```qsp
if money >= 100:
    money -= 100
    minut += 15
    gt 'foo'
end
```

every time, have helpers:

```ts
transaction(s, {
  cost: 100,
  minutes: 15,
});
```

Likewise:

```ts
requireMoney(...)
travelTo(...)
changeMood(...)
npcRelationship(...)
randomChance(...)
isOpen(...)
```

But only extract helpers when you find actual repeated patterns.

Every helper can turn dozens of future QSP lines into one TS line.

---

### 9. Run multiple port workers on non-overlapping batches

This is one place where parallelism actually helps.

Split:

```text
Worker A → Pavlovsk exterior
Worker B → City exterior
Worker C → simple residential interiors
Worker D → shops
```

provided they aren't simultaneously modifying shared engine files.

The important rule should be:

> Port workers may modify only their assigned `locations/` files. Changes to `core/`, `systems/`, and shared utilities go through a separate integration pass.

Otherwise you'll get merge-conflict hell and multiple agents inventing competing APIs.

---

### 10. Freeze the engine API for the bulk-port stage

This might be the most important human/process recommendation.

Qwen shouldn't reconsider architecture while translating locations.

Give it a strict porting specification like:

```text
For each QSP location:

- use defineLocation()
- use SceneBuilder
- use ActionDef handler + declarative navigation
- do not add GameState fields unless necessary
- unknown vars go to misc
- do not modify core/
- do not create new systems
- preserve original behavior
- mark unsupported behavior TODO-QSP
- run contract tests
```

Without this, a coding model can spend half its time “improving” the design.

You want a factory, not an architect.

---

## The workflow I'd actually use

Something like:

```text
                 All 1,394 QSP locations
                           │
                           ▼
                Complexity/dependency scan
                           │
          ┌────────────────┼────────────────┐
          ▼                ▼                ▼
       Simple           Moderate          Complex
          │                │                │
          ▼                ▼                │
  automatic transpiler   transpiler         │
          │             + AI repair          │
          │                │                ▼
          │                │          manual/AI port
          └────────────┬───┴────────────────┘
                       ▼
               TypeScript compile
                       ▼
                contract tests
                       ▼
               semantic diff check
                       ▼
                 marked PORTED
```

Then have one generated dashboard:

```text
Girl Life Port

Total              1394
Automatically done  614
AI-reviewed          238
Hand-ported           72
Blocked               31
Remaining            439

Completion          68.5%
```

That gives you something much more actionable than watching Qwen grind through filenames.

### Where I think the biggest payoff is

If I were working on your project, I would **stop Qwen's one-by-one port right now** and spend the next development effort improving `port-locations.ts`.

You don't need a perfect QSP compiler.

If you can automatically handle just:

```text
text
images
assignments
IF
ACT
GT
GS
simple expressions
```

I suspect a surprisingly large portion of Girl Life becomes either completely automatic or “95% ported, please repair these three TODOs.”

That's the path that could turn **a month-plus migration into a much smaller amount of actual model work**.
