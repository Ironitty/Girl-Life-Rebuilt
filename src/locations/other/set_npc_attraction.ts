import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_preferences ?? 0)[String((s as any).locArgs?.[0] ?? '')] === '') {
    if (! qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[0] ?? 0))) {
      return;
    }
    ((s as any).npc_attraction = (s as any).npc_attraction ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).pcs_apprnc ?? 0);
    ((s as any).npc_rel_hotcat = (s as any).npc_rel_hotcat ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).pcs_hotcat ?? 0);
    return;
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 2;
  }
  ((s as any).npc_attraction = (s as any).npc_attraction ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).pcs_apprnc ?? 0);
  ((s as any).temp_snaVars = (s as any).temp_snaVars ?? {})['max_i'] = 0;
  if (((s as any).temp_snaVars ?? 0)?.['max_i'] > 0) {
    ((s as any).temp_snaVars = (s as any).temp_snaVars ?? {})['i'] = 0;
    do {
      (s as any).temp_trait = qspUntranslated(s, "npc_attr_pref_traits[temp_snaVars['i']]", { location: "set_npc_attraction" });
      if (qspFunc(s, 'pcs_has_attr', ((s as any).temp_trait ?? 0))) {
        ((s as any).npc_attraction = (s as any).npc_attraction ?? {})[((s as any).locArgs?.[0] ?? 0)] = ((s as any).npc_attraction[((s as any).locArgs?.[0] ?? 0)] ?? 0) + ((((s as any).npc_attr_pref_values ?? 0)?.[String((s as any).temp_trait ?? 0)] ?? 0));
      }
      ((s as any).temp_snaVars = (s as any).temp_snaVars ?? {})['i'] = ((s as any).temp_snaVars['i'] ?? 0) + (1);
    } while (((s as any).temp_snaVars ?? 0)?.['i'] < ((s as any).temp_snaVars ?? 0)?.['max_i']);
  }
  (s as any).temp_snaVars = undefined;
  ((s as any).npc_attraction = (s as any).npc_attraction ?? {})[((s as any).locArgs?.[0] ?? 0)] = Math.min(Math.max(0, (((s as any).npc_attraction ?? 0)?.[((s as any).locArgs?.[0] ?? 0)] ?? 0)), 200);
  ((s as any).npc_rel_hotcat = (s as any).npc_rel_hotcat ?? {})[((s as any).locArgs?.[0] ?? 0)] = qspFunc(s, 'AppearanceSystem', 'ConvertToHotcat', (((s as any).npc_attraction ?? 0)?.[((s as any).locArgs?.[0] ?? 0)] ?? 0));
  if (String((s as any).locArgs?.[1] ?? '') >= 0) {
    ((s as any).npc_rel_hotcat = (s as any).npc_rel_hotcat ?? {})[((s as any).locArgs?.[0] ?? 0)] = Math.min(Math.max(((s as any).pcs_hotcat ?? 0) - ((s as any).locArgs?.[1] ?? 0), (((s as any).npc_rel_hotcat ?? 0)?.[((s as any).locArgs?.[0] ?? 0)] ?? 0)), ((s as any).pcs_hotcat ?? 0) + ((s as any).locArgs?.[1] ?? 0));
  }
  (s as any).npc_attr_pref_traits = undefined;
  (s as any).npc_attr_pref_values = undefined;
  scene.build();
}

export const set_npc_attraction: LocationDef = {
  name: 'set_npc_attraction',
  region: 'other',
  enter: enter,
};
