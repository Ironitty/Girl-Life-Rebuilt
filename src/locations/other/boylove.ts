import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_color');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: dynamic text: <<$npcdesc>> says that you have beautiful hair.
    scene.text(`${((s as any).npcdesc || '')} says that you have beautiful hair.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_black') {
        // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes black-haired wo...
        scene.text(`${((s as any).npcdesc || '')} says that you are very beautiful, although he likes black-haired women.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_brown') {
          // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes brunettes.
          scene.text(`${((s as any).npcdesc || '')} says that you are very beautiful, although he likes brunettes.`);
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_red') {
            // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes redheads.
            scene.text(`${((s as any).npcdesc || '')} says that you are very beautiful, although he likes redheads.`);
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'hair_color_blonde') {
              // TODO-QSP: dynamic text: <<$npcdesc>> says that you are very beautiful, although he likes bondes.
              scene.text(`${((s as any).npcdesc || '')} says that you are very beautiful, although he likes bondes.`);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFigure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_bmi');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: dynamic text: <<$npcdesc>> tells you that you have a perfect figure.
    scene.text(`${((s as any).npcdesc || '')} tells you that you have a perfect figure.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_starving'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_underweight') {
        // TODO-QSP: dynamic text: <<$npcdesc>> says that you love him despite the fact that he always met with ski...
        scene.text(`${((s as any).npcdesc || '')} says that you love him despite the fact that he always met with skinny.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_normal') {
          if (qspFunc(s, 'pcs_has_attr', ' || ', 'body_bmi_starving', 'body_bmi_underweight')) {
            // TODO-QSP: dynamic text: <<$npcdesc>> asks whether you have anorexia.
            scene.text(`${((s as any).npcdesc || '')} asks whether you have anorexia.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> asks whether you are going on a diet.
            scene.text(`${((s as any).npcdesc || '')} asks whether you are going on a diet.`);
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_overweight'  ||  ((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_bmi_obese') {
            // TODO-QSP: dynamic text: <<$npcdesc>> says that you are beautiful, but the woman should be in the body.
            scene.text(`${((s as any).npcdesc || '')} says that you are beautiful, but the woman should be in the body.`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTits(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
  if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: dynamic text: <<$npcdesc>> tells you that you have perfect breasts.
    scene.text(`${((s as any).npcdesc || '')} tells you that you have perfect breasts.`);
  } else {
    if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] !== '') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - (-1) + 1)) + ((-1))));
      if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_small') {
        // TODO-QSP: dynamic text: <<$npcdesc>> says that you love him despite the fact that he prefers small breas...
        scene.text(`${((s as any).npcdesc || '')} says that you love him despite the fact that he prefers small breasts.`);
      } else {
        if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_average') {
          if (qspFunc(s, 'pcs_has_attr', 'body_tits_small')) {
            // TODO-QSP: dynamic text: <<$npcdesc>> says that you are beautiful, though small breasts.
            scene.text(`${((s as any).npcdesc || '')} says that you are beautiful, though small breasts.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> says that you have a really huge breasts.
            scene.text(`${((s as any).npcdesc || '')} says that you have a really huge breasts.`);
          }
        } else {
          if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_big') {
            if (qspFunc(s, 'pcs_has_attr', 'body_tits_huge')) {
              // TODO-QSP: dynamic text: <<$npcdesc>> says that you have a really huge breasts.
              scene.text(`${((s as any).npcdesc || '')} says that you have a really huge breasts.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> says that you are beautiful, though small breasts.
              scene.text(`${((s as any).npcdesc || '')} says that you are beautiful, though small breasts.`);
            }
          } else {
            if (((s as any).ngpPrefResult ?? 0)?.['NotPos'] === 'body_tits_huge') {
              // TODO-QSP: dynamic text: <<$npcdesc>> says that you are beautiful, though small breasts.
              scene.text(`${((s as any).npcdesc || '')} says that you are beautiful, though small breasts.`);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
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
