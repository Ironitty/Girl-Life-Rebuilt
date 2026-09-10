import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Boy\'s bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/boysbathroom.jpg');
  scene.text('After the bell rings and you see the boys leave their bathroom, you slip inside and hurry into one of the stalls. Your heart is pounding with a mixture of fear and excitement - you know you shouldn\'t be in here but that\'s part of the thrill. You can\'t lock the stall without making it obvious you\'re here, so you simply sit on the toilet with your feet pulled up. Hopefully that\'s enough to keep you hidden should someone else enter the bathroom.');
  scene.actions([
    { label: 'Play on your phone', handler: (st: GameState) => {
    (s as any).school_bunk = 0;
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/usephone1.jpg');
    scene.text('You pull out your phone, looking for something to do. You can\'t really text anyone right now and the games you can play aren\'t very good, but it sure as hell beats sitting through another boring class.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 25) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boys'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'caughtb'] }]);
      if (((s as any).i ?? 0) <= 65) {
        (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb'] }]);
      } else {
        (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
        scene.actions([
          { label: 'Continue to play on phone', goto: ['gschool_boys_bathroom', 'bathroom2'] },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Have a smoke', handler: (st: GameState) => {
    (s as any).school_bunk = 1;
    qspCall(s, 'drugs', 'smoke');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Boy\'s bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/smoke1.jpg');
    scene.text('You pull out a cigarette, light it and take a long drag, holding it in for a bit. A sense of calmness overtakes you as the smoke slowly fills your lungs. This is definitely better than going to class.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 25) {
      (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'boys'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'caughtb'] }]);
      if (((s as any).i ?? 0) <= 65) {
        (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
        scene.actions([{ label: 'Continue', goto: ['gschool_boys_bathroom', 'companyb'] }]);
      } else {
        (s as any).demerit = ((s as any).demerit ?? 0) + (Math.floor(Math.random() * 2) + 1);
        scene.actions([
          { label: 'Keep smoking', goto: ['gschool_boys_bathroom', 'bathroom2'] },
        ]);
      }
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

export const gschool_boys_bathroom: LocationDef = {
  name: 'gschool_boys_bathroom',
  title: 'Boy\'s bathroom',
  region: 'other',
  locationType: 'public_indoors',
  description: ['After the bell rings and you see the boys leave their bathroom, you slip inside and hurry into one of the stalls. Your heart is pounding with a mixture of fear and excitement - you know you shouldn\'t be in here but that\'s part of the thrill. You can\'t lock the stall without making it obvious you\'re here, so you simply sit on the toilet with your feet pulled up. Hopefully that\'s enough to keep you hidden should someone else enter the bathroom.'],
  enter: enter,
};
