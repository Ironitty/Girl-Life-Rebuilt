import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).static_num ?? 0), (-10));
    qspCall(s, 'fame', 'pav', 'sex', 10);
    // TODO-QSP: dynamic text: <<$npc_firstname[$static_num]>> looks at you "What is that? Is that sperm? Fuck ...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).static_num ?? 0)] ?? ''} looks at you "What is that? Is that sperm? Fuck you nasty slut, you could at least clean yourself afterwards."`);
    if (((s as any).loc ?? 0) === 'gschool_lunch') {
      scene.actions([
        { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    return;
  }
  if (((s as any).cumloc ?? 0)[12] === 1  &&  (!(Math.floor(Math.random() * 31) + 0))) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).static_num ?? 0), (-10));
    qspCall(s, 'fame', 'pav', 'sex', 15);
    // TODO-QSP: dynamic text: <<$npc_firstname[$static_num]>> looks at you, "What is that smell on your breath...
    scene.text(`${((s as any).npc_firstname ?? 0)?.[String((s as any).static_num ?? 0)] ?? ''} looks at you, "What is that smell on your breath? Yuck It's smells like sperm. Couldn't you at least clean your mouth after sucking dicks."`);
    if (((s as any).loc ?? 0) === 'gschool_lunch') {
      scene.actions([
        { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
    return;
  }
  scene.build();
}

export const cumreaction: LocationDef = {
  name: 'cumreaction',
  region: 'other',
  enter: enter,
};
