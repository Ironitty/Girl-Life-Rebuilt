import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cafe</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/0.jpg');
  // TODO-QSP: dynamic text: You and <<$telsob>> go to a small cafe in the center of the city.
  scene.text(`You and ${((s as any).telsob ?? 0)} go to a small cafe in the center of the city.`);
  scene.actions([
    { label: 'Chat', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
        if (((s as any).kaferand ?? 0) < 2) {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
          scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
      }
    } else {
      (s as any).masha = ((s as any).masha ?? 0) + (1);
      if (((s as any).masha ?? 0) >= 20) {
        (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
        if (((s as any).kaferand ?? 0) < 2) {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
          scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
      }
      if (((s as any).telsob ?? 0) === 'Kate') {
        qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
        if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
          (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
          if (((s as any).kaferand ?? 0) < 2) {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
            scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
          scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
        } else {
          (s as any).kaferand = Math.floor(Math.random() * 9) + 0;
          if (((s as any).kaferand ?? 0) <= 1) {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kafesvid', '2'] }]);
            scene.actions([{ label: 'Continue', goto: ['kafesvid', 'end'] }]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const kafesvid: LocationDef = {
  name: 'kafesvid',
  title: '<center><b>Cafe</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
