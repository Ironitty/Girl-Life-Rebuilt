import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).kisvrand = 0;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cinema</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/cards/0.jpg');
  // TODO-QSP: dynamic text: You sit down with <<$telsob>> to have some drinks, and play some cards.
  scene.text(`You sit down with ${((s as any).telsob ?? 0)} to have some drinks, and play some cards.`);
  scene.actions([
    { label: 'Play', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
        if (((s as any).kisvrand ?? 0) < 2) {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
      }
    } else {
      (s as any).masha = ((s as any).masha ?? 0) + (1);
      if (((s as any).masha ?? 0) >= 20) {
        (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
        if (((s as any).kisvrand ?? 0) < 2) {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
      }
      if (((s as any).telsob ?? 0) === 'Kate') {
        qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
        if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
          (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
          if (((s as any).kisvrand ?? 0) < 2) {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
          scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
        } else {
          (s as any).kisvrand = Math.floor(Math.random() * 9) + 0;
          if (((s as any).kisvrand ?? 0) <= 1) {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '2'] }]);
            scene.actions([{ label: 'Continue', goto: ['kazinosvid', '3'] }]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const kazinosvid: LocationDef = {
  name: 'kazinosvid',
  title: '<center><b>Cinema</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
