import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_bmi');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
  }
  if (((s as any).temp_trait ?? 0) === 'body_bmi_starving'  ||  ((s as any).temp_trait ?? 0) === 'body_bmi_underweight') {
    (s as any).figurePrefMin = 0;
    (s as any).figurePrefMax = 18;
  } else {
    (s as any).figurePrefMin = 19;
    (s as any).figurePrefMax = 25;
    if (((s as any).temp_trait ?? 0) === 'body_bmi_overweight'  ||  ((s as any).temp_trait ?? 0) === 'body_bmi_obese') {
      (s as any).figurePrefMin = 26;
      (s as any).figurePrefMax = 99;
    } else {
      (s as any).figurePrefMin = 0;
      (s as any).figurePrefMax = 99;
    }
    qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
    if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    }
    if (((s as any).temp_trait ?? 0) === 'body_tits_small') {
      (s as any).titMin = 0;
      (s as any).titMax = 1;
    } else {
      (s as any).titMin = 2;
      (s as any).titMax = 3;
      if (((s as any).temp_trait ?? 0) === 'body_tits_big') {
        (s as any).titMin = 4;
        (s as any).titMax = 5;
      } else {
        (s as any).titMin = 6;
        (s as any).titMax = 99;
        (s as any).titMin = 0;
        (s as any).titMax = 99;
      }
      qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
      }
      if (((s as any).temp_trait ?? 0) === 'hair_color_black') {
        (s as any).temp_haircol = 0;
      } else {
        (s as any).temp_haircol = 1;
        if (((s as any).temp_trait ?? 0) === 'hair_color_red') {
          (s as any).temp_haircol = 2;
        } else {
          (s as any).temp_haircol = 3;
        }
        (s as any).husb_birth_year = ((s as any).year ?? 0) - ((s as any).boyage ?? 0);
        (s as any).husbAge = ((s as any).boyage ?? 0);
        qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_piercings');
        if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
        }
        if (((s as any).temp_trait ?? 0) === 'cosmetics_piercings_none'  ||  ((s as any).temp_trait ?? 0) === 'cosmetics_piercings_few') {
          (s as any).pierPrefTmpMin = 0;
          (s as any).pierPrefTmpMax = 2;
        } else {
          (s as any).pierPrefTmpMin = 3;
          (s as any).pierPrefTmpMax = 5;
          if (((s as any).temp_trait ?? 0) === 'cosmetics_piercings_lot') {
            (s as any).pierPrefTmpMin = 6;
            (s as any).pierPrefTmpMax = 99;
          } else {
            (s as any).pierPrefTmpMin = 0;
            (s as any).pierPrefTmpMax = 99;
          }
          qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'cosmetics_tattoos');
          if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
          }
          if (((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_none'  ||  ((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_few') {
            (s as any).tattPrefTmpMin = 0;
            (s as any).tattPrefTmpMax = 2;
          } else {
            (s as any).tattPrefTmpMin = 3;
            (s as any).tattPrefTmpMax = 5;
            if (((s as any).temp_trait ?? 0) === 'cosmetics_tattoos_lot') {
              (s as any).tattPrefTmpMin = 6;
              (s as any).tattPrefTmpMax = 99;
            } else {
              (s as any).tattPrefTmpMin = 0;
              (s as any).tattPrefTmpMax = 99;
            }
            qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_lips');
            if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
            }
            if (((s as any).temp_trait ?? 0) === 'body_lips_normal'  ||  ((s as any).temp_trait ?? 0) === 'body_lips_plump') {
              (s as any).lipsPrefTmpMin = 2;
              (s as any).lipsPrefTmpMax = 3;
            } else {
              (s as any).lipsPrefTmpMin = 3;
              (s as any).lipsPrefTmpMax = 99;
              (s as any).lipsPrefTmpMin = 0;
              (s as any).lipsPrefTmpMax = 99;
            }
            if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] <= 40) {
            } else {
              if ((!(Math.floor(Math.random() * 2) + 0))) {
              }
              (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
              if (((s as any).temp_rand ?? 0) === 0  &&  ((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
              }
            }
            return;
          }
        }
      }
    }
  }
  scene.build();
}

export const lover_pref: LocationDef = {
  name: 'lover_pref',
  region: 'other',
  enter: enter,
};
