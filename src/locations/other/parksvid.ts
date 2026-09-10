import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'mood', 'raise', 'tiny');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Park</b></center>');
  scene.img('images/characters/city/boyfriend/sex/event/park/0.jpg');
  // TODO-QSP: dynamic text: You go to the park ' + iif($home['town'] = 'pavlovsk', 'in Pavlovsk', 'in St. Pe...
  scene.text(`You go to the park ' + iif($home['town'] = 'pavlovsk', 'in Pavlovsk', 'in St. Petersburg') + ' with ${((s as any).telsob ?? 0)}.`);
  scene.actions([
    { label: 'Go for a walk', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).parksvidrand = Math.floor(Math.random() * 6) + 0;
        if (((s as any).parksvidrand ?? 0) > 0  &&  ((s as any).parksvidrand ?? 0) < 3) {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
      }
    } else {
      (s as any).masha = ((s as any).masha ?? 0) + (1);
      if (((s as any).masha ?? 0) >= 20) {
        (s as any).parksvidrand = Math.floor(Math.random() * 11) + 0;
        if (((s as any).parksvidrand ?? 0) > 0  &&  ((s as any).parksvidrand ?? 0) < 3) {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
      }
      if (((s as any).telsob ?? 0) === 'Kate') {
        qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
        if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
          (s as any).parksvidrand = Math.floor(Math.random() * 11) + 0;
          if (((s as any).parksvidrand ?? 0) > 0  &&  ((s as any).parksvidrand ?? 0) < 3) {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 50) {
          scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
        } else {
          (s as any).parksvidrand = Math.floor(Math.random() * 11) + 0;
          if (((s as any).parksvidrand ?? 0) <= 1) {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['parksvid', '2'] }]);
            scene.actions([{ label: 'Continue', goto: ['parksvid', '3'] }]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const parksvid: LocationDef = {
  name: 'parksvid',
  title: '<center><b>Park</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
