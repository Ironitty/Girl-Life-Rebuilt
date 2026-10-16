import { describe, it, expect } from 'vitest';
import { SceneBuilder } from '../scene';
import type { ActionDef } from '../types';

describe('SceneBuilder', () => {
  it('build returns the builder instance', () => {
    const b = new SceneBuilder();
    expect(b.build()).toBe(b);
  });

  it('text appends with blank-line separator', () => {
    const b = new SceneBuilder();
    b.text('first').text('second');
    expect(b.mainText).toBe('first\n\nsecond');
  });

  it('stat sets statText', () => {
    const b = new SceneBuilder();
    b.stat('HP 100');
    expect(b.statText).toBe('HP 100');
  });

  it('action/act/actions push to curActs', () => {
    const b = new SceneBuilder();
    const a: ActionDef = { label: 'do', handler: () => {} };
    b.action(a);
    b.act('second', { handler: () => {} });
    b.actions([{ label: 'third', handler: () => {} }]);
    expect(b.curActs).toHaveLength(3);
    expect(b.curActs[1].label).toBe('second');
    expect(b.curActs[2].label).toBe('third');
  });

  it('img and background set backimage', () => {
    const b = new SceneBuilder();
    b.img('a.png');
    expect(b.backimage).toBe('a.png');
    b.background('b.png');
    expect(b.backimage).toBe('b.png');
  });

  it('obj sets curobjs', () => {
    const b = new SceneBuilder();
    b.obj('swords');
    expect(b.curobjs).toBe('swords');
  });

  it('hideMenu/showMenu toggle menuOff', () => {
    const b = new SceneBuilder();
    expect(b.menuOff).toBe(false);
    b.hideMenu();
    expect(b.menuOff).toBe(true);
    b.showMenu();
    expect(b.menuOff).toBe(false);
  });

  it('nl is a no-op chainable', () => {
    const b = new SceneBuilder();
    expect(b.nl()).toBe(b);
  });
});
