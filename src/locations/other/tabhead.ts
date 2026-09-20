// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).tabhead_max_i = 0;
  if ((!((s as any).tabhead_max_i ?? 0))) {
    return;
  }
  (s as any).tabhead_table = '<center><b><table width="90%" cellspacing="0" cellpadding="0" valign="top"><tr>';
  (s as any).tabhead_i = 0;
  // TODO-QSP: :tabs_loop
  // TODO-QSP: $tabhead_table += '<th padding=<<40 / tabhead_max_i>>>'
  if (Number((s as any).locArgs?.[0] ?? 0) === ((s as any).tabhead_i ?? 0)) {
    // TODO-QSP: $tabhead_table += '<<$tabsname[tabhead_i]>>'
  } else {
    // TODO-QSP: $tabhead_table += '<a href="exec:<<$tabsaction[tabhead_i]>>"><<$tabsname[tabhead_i]>></a>'
  }
  // TODO-QSP: $tabhead_table += '</th>'
  if (((s as any).tabhead_i ?? 0) > 0  &&  (Array.isArray((s as any).tabsrow) ? ((s as any).tabsrow as any[]).indexOf(((s as any).tabhead_i ?? 0)) : -1) >= 0) {
    // TODO-QSP: $tabhead_table += '</tr><tr>'
  }
  (s as any).tabhead_i = ((s as any).tabhead_i ?? 0) + (1);
  if (((s as any).tabhead_i ?? 0) < ((s as any).tabhead_max_i ?? 0)) {
    // TODO-QSP: jump 'tabs_loop'
  }
  // TODO-QSP: $tabhead_table += '</tr></table></b></center>'
  scene.build();
}

export const tabhead: LocationDef = {
  name: 'tabhead',
  region: 'other',
  enter: enter,
};
