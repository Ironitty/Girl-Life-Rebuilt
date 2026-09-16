import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).argc = 0;
  if (((s as any).risk_boy ?? 0) === '') {
    (s as any).risk_boy = ((s as any).locArgs?.[0] ?? 0);
  }
  (s as any).eff_contra = ((((s as any).argc ?? 0) > 1) ? (((s as any).locArgs?.[1] ?? 0)) : (((s as any).sexcontra ?? 0)));
  if (((s as any).eff_contra ?? 0) !== 3) {
    (s as any).tmp = qspFunc(s, 'pregriskeval', 'eff_contra');
    if (((s as any).succubusflag ?? 0) === 1) {
      scene.text('You think to yourself, "This should be Yummy!"');
    } else {
      if (((s as any).tmp ?? 0) === -4) {
        scene.text('You chuckle to yourself, "Well, at least I can\'t get any more pregnant than I already am!"');
      } else {
        if (((s as any).tmp ?? 0) === -3) {
          scene.text('"I don\'t think I can get pregnant on my period…" you think to yourself.');
        } else {
          if (((s as any).tmp ?? 0) === -2) {
            scene.text('"I\'m glad I got my birth control shot!" you think to yourself.');
          } else {
            if (((s as any).tmp ?? 0) === -1) {
              // TODO-QSP: dynamic text: "Good thing '+iif(birth_control['implant_status'] > 1, 'I have a birth control i...
              scene.text('"Good thing \'+iif(birth_control[\'implant_status\'] > 1, \'I have a birth control implant\', \'I\'m on the pill\')+\'…" you think to yourself.');
            } else {
              if (((s as any).tmp ?? 0) === 1) {
                if (((s as any).risk_boy ?? 0) !== '') {
                  // TODO-QSP: dynamic text: You subconsciously put a hand on your belly as you realize you could become preg...
                  scene.text(`You subconsciously put a hand on your belly as you realize you could become pregnant with the child of ${((s as any).risk_boy || '')}.`);
                } else {
                  scene.text('You subconsciously put a hand on your belly as you realize you could get pregnant if you do this too much.');
                }
              } else {
                if (((s as any).tmp ?? 0) === 2) {
                  if (((s as any).risk_boy ?? 0) !== '') {
                    // TODO-QSP: dynamic text: You think about the load of sperm <<$risk_boy>> just pumped into your unprotecte...
                    scene.text(`You think about the load of sperm ${((s as any).risk_boy || '')} just pumped into your unprotected vagina… and right now he has no clue.`);
                  } else {
                    scene.text('You think about the load of sperm swimming in your unprotected vagina… and right now he has no clue.');
                  }
                } else {
                  if (((s as any).risk_boy ?? 0) !== '') {
                    // TODO-QSP: dynamic text: "Oh, God!" You realize with horror that you could become pregnant with the child...
                    scene.text(`"Oh, God!" You realize with horror that you could become pregnant with the child of ${((s as any).risk_boy || '')}.`);
                  } else {
                    scene.text('"Damn! I could get pregnant!" you think in horror.');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const cuminsidereact: LocationDef = {
  name: 'cuminsidereact',
  title: 'You think to yourself, "This should be Yummy!"',
  region: 'other',
  description: ['You think to yourself, "This should be Yummy!"'],
  enter: enter,
};
