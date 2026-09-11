import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEtaj_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('<center><h3>old apartment building</h3></center>');
  scene.img('images/locations/pavlovsk/resident/sharedapt/apthallway.jpg');
  scene.text('An old apartment complex that hasn\'t seen any kind of maintenance for years.');
  scene.text('The entry doors are left unlocked and even if they weren\'t, they look like they\'ll fall apart at any moment.');
  scene.text('Inside is a board with <a href="exec:gt \'pav_complexold\', \'advert\'">announcements</a> for the tenants.');
  scene.actions([
    { label: 'Leave the building', goto: ['pav_complex', 'start'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/liftnotwork.jpg');
    scene.text('The building supervisor has put a sign on the elevator: "Dear tenants, the elevator is out of order for today. Don\'t worry, I should have it working again by tomorrow!". Unfortunately, that sign has been there for years.');
    scene.actions([
      { label: 'Leave', goto: ['pav_complexold', 'etaj_1'] },
    ]);
  } },
    { label: 'Go up to the second floor', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/brokenstairs.jpg');
    scene.text('The stairs are as run down as the rest of the apartment building. Thankfully, there\'s no one you want to see on the floor above.');
    scene.actions([
      { label: 'Turn back', goto: ['pav_complexold', 'etaj_1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAdvert(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/sharedapt/board.jpg');
  scene.text('');
  scene.actions([
    { label: 'Continue', goto: ['pav_complexold', 'etaj_1'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'etaj_1':
      enterEtaj_1(s, scene);
      break;
    case 'advert':
      enterAdvert(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_complexOld: LocationDef = {
  name: 'pav_complexOld',
  title: '<center><h3>old apartment building</h3></center>',
  region: 'pavlovsk',
  enter: enter,
};
