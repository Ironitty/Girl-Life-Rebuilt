import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
    scene.text(`${((s as any).npcdesc ?? '')} says that you have beautiful hair.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_black') {
        scene.text(`${((s as any).npcdesc ?? '')} says that you are very beautiful, although he likes black-haired women.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_brown') {
          scene.text(`${((s as any).npcdesc ?? '')} says that you are very beautiful, although he likes brunettes.`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_red') {
            scene.text(`${((s as any).npcdesc ?? '')} says that you are very beautiful, although he likes redheads.`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_blonde') {
              scene.text(`${((s as any).npcdesc ?? '')} says that you are very beautiful, although he likes bondes.`);
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterFigure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'body_bmi');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
    scene.text(`${((s as any).npcdesc ?? '')} tells you that you have a perfect figure.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_starving'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_underweight') {
        scene.text(`${((s as any).npcdesc ?? '')} says that you love him despite the fact that he always met with skinny.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_normal') {
          if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_starving', 'body_bmi_underweight')) {
            scene.text(`${((s as any).npcdesc ?? '')} asks whether you have anorexia.`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} asks whether you are going on a diet.`);
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_overweight'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_obese') {
            scene.text(`${((s as any).npcdesc ?? '')} says that you are beautiful, but the woman should be in the body.`);
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '$npcID', 'randomPosIndNeg', 'body_tits');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * 2) + 0));
    scene.text(`${((s as any).npcdesc ?? '')} tells you that you have perfect breasts.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_small') {
        scene.text(`${((s as any).npcdesc ?? '')} says that you love him despite the fact that he prefers small breasts.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
            scene.text(`${((s as any).npcdesc ?? '')} says that you are beautiful, though small breasts.`);
          } else {
            scene.text(`${((s as any).npcdesc ?? '')} says that you have a really huge breasts.`);
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_huge')) {
              scene.text(`${((s as any).npcdesc ?? '')} says that you have a really huge breasts.`);
            } else {
              scene.text(`${((s as any).npcdesc ?? '')} says that you are beautiful, though small breasts.`);
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              scene.text(`${((s as any).npcdesc ?? '')} says that you are beautiful, though small breasts.`);
            }
          }
        }
      }
    }
  }
  (s as any).ngpPrefResult = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'hair':
      enterHair(s, scene);
      break;
    case 'figure':
      enterFigure(s, scene);
      break;
    case 'tits':
      enterTits(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const boylove: LocationDef = {
  name: 'boylove',
  region: 'other',
  enter: enter,
};
