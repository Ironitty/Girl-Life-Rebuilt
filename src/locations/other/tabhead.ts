// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).tabhead_max_i = 0;
  if ((!((s as any).tabhead_max_i ?? 0))) {
    (s as any).tabhead_max_i = undefined;
    return;
  }
  (s as any).tabhead_table = '<center><b><table width="90%" cellspacing="0" cellpadding="0" valign="top"><tr>';
  (s as any).tabhead_i = 0;
  do {
    (s as any).tabhead_table = ((s as any).tabhead_table ?? 0) + ('<th padding=' + 40 / ((s as any).tabhead_max_i ?? 0) + '>');
    if (String((s as any).locArgs?.[0] ?? '') === ((s as any).tabhead_i ?? 0)) {
      (s as any).tabhead_table = ((s as any).tabhead_table ?? 0) + ('' + (((s as any).tabsname ?? 0)?.[String((s as any).tabhead_i ?? 0)] ?? 0) + '');
    } else {
      (s as any).tabhead_table = ((s as any).tabhead_table ?? 0) + ('<a href="#" onclick="window.__gameStore.setState((s) => { /* TODO-QSP: ' + (((s as any).tabsaction ?? 0)?.[String((s as any).tabhead_i ?? 0)] ?? 0) + ' */ return s; }); return false;">' + (((s as any).tabsname ?? 0)?.[String((s as any).tabhead_i ?? 0)] ?? 0) + '</a>');
    }
    (s as any).tabhead_table = ((s as any).tabhead_table ?? 0) + ('</th>');
    if (((s as any).tabhead_i ?? 0) > 0  &&  (Array.isArray((s as any).tabsrow) ? ((s as any).tabsrow as any[]).indexOf(((s as any).tabhead_i ?? 0)) : -1) >= 0) {
      (s as any).tabhead_table = ((s as any).tabhead_table ?? '') + '</tr><tr>';
    }
    (s as any).tabhead_i = ((s as any).tabhead_i ?? 0) + (1);
    (s as any).tabhead_table = ((s as any).tabhead_table ?? 0) + ('</tr></table></b></center>');
    (s as any).tabhead_i = undefined;
    (s as any).tabhead_max_i = undefined;
    (s as any).tabhead_table = undefined;
    (s as any).tabsname = undefined;
    (s as any).tabsaction = undefined;
    (s as any).tabsrow = undefined;
  } while (((s as any).tabhead_i ?? 0) < ((s as any).tabhead_max_i ?? 0));
  scene.build();
}

export const tabhead: LocationDef = {
  name: 'tabhead',
  region: 'other',
  enter: enter,
};
