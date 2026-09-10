import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gadukino_event', 'sound');
  scene.text('<center><b>Spring</b></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    scene.img('images/locations/gadukino/hunters/\'+iif(DayStage < 4, \'swampspring.jpg\', \'swampspring_night.jpg\')+\'');
  } else {
    scene.img('images/locations/gadukino/hunters/\'+iif(DayStage < 4, \'swampspring_winter.jpg\', \'swampspring_winter_night.jpg\')+\'');
  }
  scene.text('You come across a natural spring with pure natural water.');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hydra ?? 0) < 150) {
    scene.actions([
      { label: 'Drink the water', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_breath = 0;
    scene.img('images/locations/gadukino/hunters/hands.jpg');
    scene.text('You take a sip of the spring water.');
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (25);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gad_swampspring', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).bucket ?? 0) < 10) {
    scene.actions([
      { label: 'Collect water in a bucket', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/vedro.jpg');
    scene.text('You fill the bucket with water.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).bucket = ((s as any).bucket ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', goto: ['gad_swampspring', ''] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Go back to the hut', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['gad_swamp_yard', 'start'] },
  ]);
  scene.build();
}

export const gad_swampspring: LocationDef = {
  name: 'gad_swampspring',
  title: '<center><b>Spring</b></center>',
  region: 'gadukino',
  locationType: 'secluded',
  description: ['You come across a natural spring with pure natural water.'],
  enter: enter,
};
