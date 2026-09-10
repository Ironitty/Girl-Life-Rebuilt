import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).isnum ?? 0)(((s as any).locArgs?.[0] ?? 0))) {
    if (((s as any).locArgs?.[0] ?? 0) !== '') {
      (s as any).ARGS[0] = qspUntranslated(s, "val(ARGS[0])", { location: "npcgeneratec" });
    }
    (s as any).npcgen_lastrun = 1;
    (s as any).npcgeneratecVars['gender'] = qspUntranslated(s, "ARGS[0]", { location: "npcgeneratec" });
    if (((s as any).ARGS ?? 0)[2] !== 0) {
      (s as any).npcgeneratecVars['age'] = qspUntranslated(s, "ARGS[2]", { location: "npcgeneratec" });
    } else {
      (s as any).npcgeneratecVars['age'] = Math.floor(Math.random() * 18) + 18;
    }
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      (s as any).npcgeneratecVars['name'] = ((s as any).locArgs?.[1] ?? 0);
    } else {
      if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 0) {
        (s as any).npcgeneratecVars['name'] = 'A Male';
      } else {
        (s as any).npcgeneratecVars['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
        if (((s as any).npcgeneratecVars ?? 0)?.['gender'] === 2) {
          (s as any).npcgeneratecVars['name'] = ((((s as any).npcgeneratecVars ?? 0)?.['age'] <= 25) ? ('A Girl') : ('A Woman'));
        } else {
          (s as any).npcgeneratecVars['name'] = 'A Male';
        }
      }
      if (((s as any).ARGS ?? 0)[3] !== 0) {
        (s as any).npcgeneratecVars['loc'] = qspUntranslated(s, "ARGS[3]", { location: "npcgeneratec" });
      } else {
        if (((s as any).region ?? 0) === 'pav') {
          (s as any).npcgeneratecVars['loc'] = 1;
        } else {
          (s as any).npcgeneratecVars['loc'] = Math.floor(Math.random() * 2) + 3;
        }
      }
      (s as any).npcgeneratecVars['anonymous'] = qspUntranslated(s, "ARGS[4]", { location: "npcgeneratec" });
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('attracted') : -1) > 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('like') : -1) > 0) {
        (s as any).npcgeneratecVars['attracted'] = 'like';
      } else {
        (s as any).npcgeneratecVars['attracted'] = 'dislike';
        (s as any).npcgeneratecVars['attracted'] = '';
      }
      qspCall(s, 'npcgeneratec', 'init');
    }
  }
  scene.build();
}

export const npcgeneratec: LocationDef = {
  name: 'npcgeneratec',
  region: 'other',
  enter: enter,
};
