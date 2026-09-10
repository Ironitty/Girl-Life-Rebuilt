Yes: **fix the generator and regenerate all 1,400 files. Do not hand-fix the generated output.** Given that the transpiler is your source of truth and the defects are systematic, hand-fixing 43 + 614 files would create a second source of truth and guarantee that the same defects return on the next regeneration.

Your plan is basically right, but I would tighten it in a few places.

### 1. Generator fix + full regeneration is the right call

The strongest reason isn't just the number of affected files; it's that you've identified **generator-level root causes**. Once a defect is deterministic and originates upstream, fixing downstream outputs is technical debt.

I would do this order:

```text
Add minimal regression fixtures for each known bug
        ↓
Fix generator
        ↓
Run generator tests
        ↓
Regenerate all 1,400 files
        ↓
Diff old vs new generated tree
        ↓
tsc -b
        ↓
vite build
        ↓
Playwright smoke
```

For the fixtures, I'd specifically cover:

```text
0000
08
normal integer such as 123
dynamic object key
dynamic variable name
$-prefixed variable inside an expression
<<$npc_name>>
literal + <<expression>> + literal
multiple <<...>> blocks in one string
```

One minor change to your numeric fix: I wouldn't necessarily use `parseInt` unless you actually want JS-number conversion at transpile time. If the goal is just canonical valid decimal source, stripping leading zeroes is safer because it doesn't risk precision loss on unusually large QSP integer literals:

```ts
if (/^\d+$/.test(v)) {
  return v.replace(/^0+(?=\d)/, "");
}
```

That gives:

```text
0000 → 0
08   → 8
00042 → 42
```

without converting through a JavaScript `number`.

### 2. A safe fallback is useful, but don't make it silently safe

This is the part of your plan I'd change most.

This:

```ts
String((state as any).x ?? '')
// TODO
```

keeps TypeScript happy, but it can turn an obvious compiler failure into a much harder **silent gameplay bug**.

You want:

> **syntactically valid output, but semantically conspicuous fallback.**

For example, introduce one runtime helper:

```ts
qspUntranslated(
  state,
  rawExpression,
  {
    location: "some_location",
    line: 123
  }
)
```

The generated TS remains valid, but the helper can behave differently by environment:

```ts
function qspUntranslated(
  state: GameState,
  raw: string,
  meta: { location: string; line?: number }
): string {
  console.warn(
    `[QSP TRANSPILER FALLBACK] ${meta.location}:${meta.line ?? "?"}: ${raw}`
  );

  return `[UNTRANSLATED: ${raw}]`;
}
```

Even better, make it **throw in tests/development modes where appropriate**, while returning a visible sentinel in normal gameplay.

Also have the transpiler produce a report:

```text
Generated locations:       1400
Translation fallbacks:       17

Fallbacks:
  pavlovsk_market:234     $foo[$bar<<i>>]
  bedroom:91              ...
  ...
```

Then CI can enforce something like:

```text
Syntax errors:       MUST be 0
New fallbacks:       MUST be 0
Known fallbacks:     allowed temporarily
```

That's much safer than comments. A `// TODO` is invisible once nobody is looking at the generated file.

In fact, I'd consider generated `TODO`s almost useless here because **generated files aren't where you should fix the problem anyway**.

### 3. Parse inline text into segments instead of building source strings piecemeal

Yes, there's a cleaner pattern than repeatedly concatenating bits of generated source like:

```ts
"'literal' + `" + "${expr}" + "`..."
```

Treat QSP inline text as a tiny syntax of its own.

Parse:

```text
Hello <<$npc_name>>, your score is <<score>>.
```

into an intermediate representation:

```ts
[
  { type: "text", value: "Hello " },
  { type: "expr", value: "$npc_name" },
  { type: "text", value: ", your score is " },
  { type: "expr", value: "score" },
  { type: "text", value: "." }
]
```

Then generate one template literal:

```ts
`Hello ${String((state as any).npc_name ?? "")}, your score is ${String((state as any).score ?? 0)}.`
```

That gives you a clean separation:

```text
QSP parsing
    ↓
Text/Expression segments
    ↓
Expression translator
    ↓
JS/TS emitter
```

That's much harder to break than manipulating the final TypeScript string directly.

Make sure literal segments escape:

```text
`
\
${
```

correctly.

Longer term, if this transpiler keeps becoming more sophisticated, I'd strongly consider generating a **TypeScript AST** rather than assembling TypeScript source with strings. The TypeScript compiler API or a library such as ts-morph can print valid syntax for you. That eliminates an entire class of bugs involving parentheses, quoting, computed properties, and escaping.

You don't necessarily need to undertake that rewrite now, though. A proper intermediate representation for QSP expressions/text would already be a major improvement.

### 4. Definitely diff the complete 1,400-file regeneration

This is important because your generator changes affect foundational translation functions. A build going green proves syntax/type correctness, **not semantic equivalence**.

I would regenerate on a branch and inspect the overall shape of the change before trusting it.

Useful commands:

```bash
git status --short
```

Then:

```bash
git diff --stat
```

And:

```bash
git diff --numstat
```

I'd also inspect actual changes without drowning in 1,400 files:

```bash
git diff --word-diff
```

and search specifically for suspicious remnants after regeneration:

```bash
grep -RInE '\b0[0-9]+\b' src/generated
```

Adjust the generated directory as appropriate.

Likewise, search for the patterns that shouldn't survive:

```bash
grep -RIn '\.\$' src/generated
```

and any mangled dynamic-key pattern you've identified.

Most importantly, have the **generator itself count constructs**. For example:

```text
Dynamic interpolations translated:  8,431
Dynamic keys translated:              612
Fallbacks:                              4
Generator warnings:                     4
```

Those metrics become very useful when making future parser changes. If the next change suddenly says:

```text
Dynamic interpolations translated: 2,100
Fallbacks:                         6,335
```

you know something is catastrophically wrong even if `tsc` passes.

### One additional thing I'd add

Before replacing the existing generated tree, have the generator write to a temporary directory once:

```text
generated-current/
generated-new/
```

Then compare them.

That lets you inspect the blast radius **before altering the known tree**. Once you're happy, regenerate normally or atomically replace it.

I'd also establish the rule:

```text
Generated files are never manually edited.
```

Put a header at the top of every one:

```ts
// AUTO-GENERATED FILE.
// Source: QSP transpiler.
// DO NOT EDIT THIS FILE DIRECTLY.
// Fix the parser/generator and regenerate.
```

That will prevent future agents—especially given the behavior you've already seen from Qwen—from "fixing" individual generated TypeScript files instead of the transpiler.

So I'd approve your plan with one substantive modification: **use a tracked, noisy fallback rather than a benign placeholder**. Getting the compiler to zero errors is valuable, but you don't want `0 TypeScript errors` to become a way of hiding `200 untranslated QSP expressions`.
