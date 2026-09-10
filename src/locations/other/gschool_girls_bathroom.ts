import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gschool_girls_bathroom', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Girls bathroom</b></center>');
  scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
  scene.text('You slip into the girl\'s bathroom and into one of the stalls; the other students already in the room don\'t pay any attention to you. You sit on the toilet and pull your feet up so no one can see them under the stall. After a few minutes, you hear the other girls leave as the bell for class rings and relax, a period of peace and quiet ahead of you.');
  scene.actions([
    { label: 'Play on phone', handler: (st: GameState) => {
    (s as any).school_bunk = 0;
    qspCall(s, 'stat', '');
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/usephone\' + rand(1, 2) + \'.jpg');
    scene.text('You sit on the toilet, playing on your phone. With class in session, most people you text with take agonizingly long to respond, and the few games you find to occupy yourself with are pretty terrible, but it still sure as hell beats another boring class.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 25) {
      scene.actions([{ label: 'Continue', goto: ['gschool_girls_bathroom', 'girls'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_girls_bathroom', 'caught'] }]);
      if (((s as any).i ?? 0) <= 60) {
        scene.actions([{ label: 'Continue', goto: ['gschool_girls_bathroom', 'company'] }]);
      } else {
        scene.actions([
          { label: 'Continue to play on phone', goto: ['gschool_girls_bathroom', 'bathroom2'] },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Smoke', handler: (st: GameState) => {
    (s as any).school_bunk = 1;
    qspCall(s, 'drugs', 'smoke');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Girls bathroom</b></center>');
    scene.img('images/locations/pavlovsk/school/bathroom/smoke\' + rand(1, 3) + \'.jpg');
    scene.text('You pull out a cigarette and light it before taking a long drag and holding it for a while. You immediately feel yourself relaxing, the smoke\'s familiar tingling in your lungs taking the edge off. This feels much better than going to class.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 25) {
      scene.actions([{ label: 'Continue', goto: ['gschool_girls_bathroom', 'girls'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_girls_bathroom', 'caught'] }]);
      if (((s as any).i ?? 0) <= 60) {
        scene.actions([{ label: 'Continue', goto: ['gschool_girls_bathroom', 'company'] }]);
      } else {
        scene.actions([
          { label: 'Keep smoking', goto: ['gschool_girls_bathroom', 'bathroom2'] },
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

export const gschool_girls_bathroom: LocationDef = {
  name: 'gschool_girls_bathroom',
  title: 'Girls bathroom',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'school_bathroom',
  description: ['You slip into the girl\'s bathroom and into one of the stalls; the other students already in the room don\'t pay any attention to you. You sit on the toilet and pull your feet up so no one can see them under the stall. After a few minutes, you hear the other girls leave as the bell for class rings and relax, a period of peace and quiet ahead of you.'],
  enter: enter,
};
