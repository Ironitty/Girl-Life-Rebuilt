import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_preferences ?? 0)[String((s as any).locArgs?.[0] ?? '')] === '') {
    if (! qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[0] ?? 0))) {
      // TODO-QSP: exit
    }
    // TODO-QSP: npc_attraction[$ARGS[0]] = pcs_apprnc
    // TODO-QSP: npc_rel_hotcat[$ARGS[0]] = pcs_hotcat
    return;
  }
  if (Object.keys((s as any).ARGS ?? {}).length === 1) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[1] = 2;
  }
  // TODO-QSP: npc_attraction[$ARGS[0]] = pcs_apprnc
  ((s as any).temp_snaVars = (s as any).temp_snaVars ?? {})['max_i'] = 0;
  if (((s as any).temp_snaVars ?? 0)?.['max_i'] > 0) {
    ((s as any).temp_snaVars = (s as any).temp_snaVars ?? {})['i'] = 0;
    // TODO-QSP: :preferences_loop_start
    (s as any).temp_trait = qspUntranslated(s, "npc_attr_pref_traits[temp_snaVars['i']]", { location: "set_npc_attraction" });
    if (qspFunc(s, 'pcs_has_attr', ((s as any).temp_trait ?? 0))) {
      // TODO-QSP: npc_attraction[$ARGS[0]] += npc_attr_pref_values[$temp_trait]
    }
    ((s as any).temp_snaVars = (s as any).temp_snaVars ?? {})['i'] = ((s as any).temp_snaVars['i'] ?? 0) + (1);
    if (((s as any).temp_snaVars ?? 0)?.['i'] < ((s as any).temp_snaVars ?? 0)?.['max_i']) {
      // TODO-QSP: jump 'preferences_loop_start'
    }
  }
  // TODO-QSP: npc_attraction[$ARGS[0]] = min(max(0, npc_attraction[$ARGS[0]]), 200)
  // TODO-QSP: npc_rel_hotcat[$ARGS[0]] = func('AppearanceSystem', 'ConvertToHotcat', npc_attraction[$ARGS[0]])
  if (String((s as any).locArgs?.[1] ?? '') >= 0) {
    // TODO-QSP: npc_rel_hotcat[$ARGS[0]] = min(max(pcs_hotcat - ARGS[1], npc_rel_hotcat[$ARGS[0]]), pcs_hotcat + ARG...
  }
  scene.build();
}

export const set_npc_attraction: LocationDef = {
  name: 'set_npc_attraction',
  region: 'other',
  enter: enter,
};
