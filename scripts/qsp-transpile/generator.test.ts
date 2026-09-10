import { describe, it, expect } from 'vitest';
import { parseQsp } from './parser';
import { generateTs } from './generator';

function gen(qsp: string, name = 'testloc'): string {
  const loc = parseQsp(qsp, `${name}.qsps`);
  return generateTs(loc).code;
}

describe('numeric normalization', () => {
  it('strips leading zeros from 0000', () => {
    const code = gen('# x\nresult = 0000\n--- x ---');
    expect(code).toContain('(s as any).result = 0;');
  });
  it('strips leading zeros from 08 (octal trap)', () => {
    const code = gen('# x\nresult = 08\n--- x ---');
    expect(code).toContain('(s as any).result = 8;');
  });
  it('keeps plain integers', () => {
    const code = gen('# x\nresult = 123\n--- x ---');
    expect(code).toContain('(s as any).result = 123;');
  });
  it('strips leading zeros inside arithmetic', () => {
    const code = gen('# x\nresult = 08 + 5\n--- x ---');
    expect(code).toContain('8 + 5');
    expect(code).not.toMatch(/\b08\b/);
  });
});

describe('array-access values (arithmetic)', () => {
  it('does not swallow WORD[\'a\'] - WORD[\'b\'] as one key', () => {
    const code = gen("# x\nKGD['needExp'] = KGD['needExpNextLvl'] - KGD['exp']\n--- x ---");
    expect(code).toContain("['needExpNextLvl']");
    expect(code).toContain("['exp']");
    expect(code).not.toContain("\\'");
    // both accesses must be state-prefixed, no bare KGD[
    expect(code).not.toMatch(/[^.\w]KGD\[/);
  });
  it('handles <<i>> dynamic keys in arithmetic', () => {
    const code = gen("# x\nKGD['needExp_<<i>>'] = KGD['needExpNextLvl_<<i>>'] - KGD['exp_<<i>>']\n--- x ---");
    expect(code).toContain('String((s as any).i');
    expect(code).not.toContain("\\'");
    expect(code).not.toMatch(/[^.\w]KGD\[/);
  });
});

describe('dollar-prefixed vars in expressions', () => {
  it('translates $ARGS[0] inside arithmetic without stray $', () => {
    const code = gen('# x\nresult = $ARGS[0] + 5\n--- x ---');
    expect(code).not.toMatch(/\.\$/);
    expect(code).not.toMatch(/\$\(/);
  });
});

describe('dynamic text (segment IR)', () => {
  it('emits a template literal with ${} interpolation', () => {
    const code = gen("# x\n'Hello <<npc_name>>.'\n--- x ---");
    expect(code).toContain('${((s as any).npc_name ?? 0)}');
    // must NOT render the raw expression as literal text (old bug: backtick without ${})
    expect(code).not.toMatch(/`Hello \(\(s as any\)/);
  });
  it('handles literal + expr + literal segments', () => {
    const code = gen("# x\n'You have <<count>> items, <<npc_name>>.'\n--- x ---");
    expect(code).toContain('You have ${((s as any).count ?? 0)} items, ${((s as any).npc_name ?? 0)}.');
  });
  it('handles multiple <<...>> blocks in one string', () => {
    const code = gen("# x\n'<<a>> and <<b>> end'\n--- x ---");
    expect(code).toContain('${((s as any).a ?? 0)} and ${((s as any).b ?? 0)} end');
  });
  it('handles a $-prefixed dynamic name', () => {
    const code = gen("# x\n'Hi <<$npc_name>>'\n--- x ---");
    expect(code).toContain('${((s as any).npc_name ?? 0)}');
  });
});

describe('noisy fallback', () => {
  it('emits qspUntranslated for untranslatable values', () => {
    const code = gen("# x\nresult = foo'bar\n--- x ---");
    expect(code).toContain('qspUntranslated(');
    expect(code).toContain('import { qspUntranslated }');
  });
});

describe('auto-generated header', () => {
  it('adds the DO NOT EDIT header', () => {
    const code = gen('# x\nresult = 1\n--- x ---');
    expect(code.startsWith('// AUTO-GENERATED FILE')).toBe(true);
  });
});
