import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/oldschool/old_school.jpg');
  if (((s as any).gopnik_fight_nightQW ?? 0)?.['invite'] === 1) {
    if (((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).day ?? 0) >= 15  &&  ((s as any).day ?? 0) <= 21  &&  ( ((s as any).kanikuli ?? 0) < 6  ||  ((s as any).gschoolVars ?? 0)?.['school_diploma'] !== 0)) {
      if (((s as any).gopnik_fight_nightQW ?? 0)?.['nights'] === 0) {
        scene.text('You walk down the path that leads to the old school building. It\'s in rough shape; many of the windows have been broken and almost all of the walls are covered in graffiti.');
        scene.text('You know the gopniks and other even less savory types often like to hang out in the building, but you don\'t see any indication of life.');
        scene.text('You know Fight Night is supposed to be happening tonight, unless the gopniks are pranking you, which is not above them.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
          { label: 'Go inside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gopnik_fight_night', 'hall'] },
        ]);
      } else {
        scene.text('You walk down the path that leads to the old school building. It\'s in rough shape; many of the windows have been broken and almost all of the walls are covered in graffiti.');
        scene.text('You know the gopniks and other even less savory types often like to hang out in the building. You don\'t see any indication of life, but you know Fight Night is happening in the old gymnasium.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
          { label: 'Go inside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gopnik_fight_night', 'hall'] },
        ]);
      }
    } else {
      scene.text('You walk down the path that leads to the old school building. It\'s in rough shape; many of the windows have been broken and almost all of the walls are covered in graffiti.');
      scene.text('You know the gopniks and other even less savory types often like to hang out in the building. You don\'t see any indication of life, but you know Fight Night is not happening in the old gymnasium tonight, it only happens on the third Saturday of each month at eight PM. So there is little reason to hang around.');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
      ]);
    }
  } else {
    scene.text('You walk down the path that leads to the old school building. It\'s in rough shape; many of the windows have been broken and almost all of the walls are covered in graffiti.');
    scene.text('You know the gopniks and other even less savory types often like to hang out in the building, but it doesn\'t look like anything is happening right now.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gschool_grounds', 'main'] },
    ]);
  }
  scene.build();
}

export const pav_old_school: LocationDef = {
  name: 'pav_old_school',
  title: 'You walk down the path that leads to the old school building',
  region: 'pavlovsk',
  description: ['You walk down the path that leads to the old school building. It\'s in rough shape; many of the windows have been broken and almost all of the walls are covered in graffiti.'],
  enter: enter,
};
