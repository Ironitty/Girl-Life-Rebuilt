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
  scene.img('images/characters/city/boyfriend/sex/event/cinema/0.jpg');
  // TODO-QSP: dynamic text: You and <<$telsob>> buy your tickets, drinks, and popcorn. With that done you he...
  scene.text(`You and ${((s as any).telsob ?? 0)} buy your tickets, drinks, and popcorn. With that done you head into the theater where your movie is showing.`);
  scene.actions([
    { label: 'Watch the movie', handler: (st: GameState) => {
    if (((s as any).telsob ?? 0) === 'Alla') {
      (s as any).alla = ((s as any).alla ?? 0) + (1);
      if (((s as any).alla ?? 0) >= 20) {
        (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
        if (((s as any).kisvrand ?? 0) <= 4) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
        }
        if (((s as any).kisvrand ?? 0) === 5) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
        }
        if (((s as any).kisvrand ?? 0) >= 6) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
      }
    } else {
      (s as any).masha = ((s as any).masha ?? 0) + (1);
      if (((s as any).masha ?? 0) >= 20) {
        (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
        if (((s as any).kisvrand ?? 0) <= 4) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
        }
        if (((s as any).kisvrand ?? 0) === 5) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
        }
        if (((s as any).kisvrand ?? 0) >= 6) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
      }
      if (((s as any).telsob ?? 0) === 'Kate') {
        qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
        if (((s as any).npc_rel ?? 0)?.['A219'] >= 20) {
          (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
          if (((s as any).kisvrand ?? 0) <= 4) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
          }
          if (((s as any).kisvrand ?? 0) === 5) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
          }
          if (((s as any).kisvrand ?? 0) >= 6) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
          }
        } else {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
        }
      } else {
        qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 1);
        if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 60) {
          scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
        } else {
          (s as any).kisvrand = Math.floor(Math.random() * 21) + 0;
          if (((s as any).kisvrand ?? 0) <= 4) {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '1'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '2'] }]);
            scene.actions([{ label: 'Continue', goto: ['kinosvid', '3'] }]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

export const kinosvid: LocationDef = {
  name: 'kinosvid',
  title: '<center><b>Cinema</b></center>',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
