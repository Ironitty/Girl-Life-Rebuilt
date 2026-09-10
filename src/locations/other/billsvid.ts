import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).bilrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).bilsvidukiy = 0;
  (s as any).bilsvidkiy = 0;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Pool</b></center>');
  scene.img('images/locations/city/citycenter/mall/pool/sex/0.jpg');
  // TODO-QSP: dynamic text: You and <<$telsob>> rent a booth
  scene.text(`You and ${((s as any).telsob ?? 0)} rent a booth`);
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
        if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
        }
        if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
        }
        if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
      }
    } else {
      (s as any).masha = ((s as any).masha ?? 0) + (1);
      if (((s as any).masha ?? 0) >= 20) {
        (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
        if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
        }
        if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
        }
        if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
      }
      if (((s as any).telsob ?? 0) === 'Kate') {
        qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
        if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
          (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
          if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
          }
          if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
          }
          if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] >= 60) {
          (s as any).bilrand = Math.floor(Math.random() * 11) + 0;
          if (((s as any).bilrand ?? 0) > 0  &&  ((s as any).bilrand ?? 0) < 3) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '1'] }]);
          }
          if (((s as any).bilrand ?? 0) > 2  &&  ((s as any).bilrand ?? 0) < 5) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '2'] }]);
          }
          if (((s as any).bilrand ?? 0) === 0  ||  ((s as any).bilrand ?? 0) > 4) {
            scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['billsvid', '3'] }]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const billsvid: LocationDef = {
  name: 'billsvid',
  title: '<center><b>Pool</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
