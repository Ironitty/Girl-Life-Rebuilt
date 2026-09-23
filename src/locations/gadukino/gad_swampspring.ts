import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'gad_swampspring';
  (s as any).loc_arg = '';
  (s as any).menu_loc = 'gad_swamp_yard';
  (s as any).menu_arg = '';
  (s as any).location_type = 'secluded';
  qspCall(s, 'gadukino_event', 'sound');
  scene.text('<center><b>Spring</b></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/'+iif(DayStag...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('swampspring.jpg') : ('swampspring_night.jpg')) + '"></center>');
  } else {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/gadukino/hunters/'+iif(DayStag...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/gadukino/hunters/` + ((((s as any).DayStage ?? 0) < 4) ? ('swampspring_winter.jpg') : ('swampspring_winter_night.jpg')) + '"></center>');
  }
  scene.text('You come across a natural spring with pure natural water.');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_hydra ?? 0) < 150) {
    scene.actions([
      { label: 'Drink the water', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_breath = 0;
    scene.img('images/locations/gadukino/hunters/hands.jpg');
    scene.text('You take a sip of the spring water.');
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (25);
    }
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
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
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).bucket = ((st as any).bucket ?? 0) + (10);
    qspCall(st, 'stat', '');
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
