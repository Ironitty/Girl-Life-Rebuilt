import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
    scene.text('<center><h2>Pavlovsk Park</h2></center>');
    if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
      scene.img('images/locations/pavlovsk/lake/skver.spring.jpg');
    } else {
      scene.img('images/locations/pavlovsk/park/skver.jpg');
      if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
        scene.img('images/locations/pavlovsk/lake/skver.autumn.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.winter.jpg');
      }
      scene.text('You go for a walk along the main square of Pavlovsk Park. During the summer, it\'s one of the primary places in town where locals and tourists enjoy spending their spare time. As long as the weather is nice, it\'s always busy; people are resting, walking, playing and dating to their heart\'s desires, enjoying the pleasant surroundings.');
      qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 1);
      qspCall(s, 'stat', '');
      scene.text('<center><h2>Pavlovsk Park</h2></center>');
      if (((s as any).month ?? 0) === 3  ||  ((s as any).month ?? 0) === 4  ||  ((s as any).month ?? 0) === 5) {
        scene.img('images/locations/pavlovsk/lake/skver.spring.night.jpg');
      } else {
        scene.img('images/locations/pavlovsk/lake/skver.summer.night.jpg');
        if (((s as any).month ?? 0) === 9  ||  ((s as any).month ?? 0) === 10  ||  ((s as any).month ?? 0) === 11) {
          scene.img('images/locations/pavlovsk/lake/skver.autumn.night.jpg');
        } else {
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
        }
        scene.text('You go for a walk along the main square of Pavlovsk Park. Most people leave the park as it gets dark, and only a few still hang around after dark. They mainly congregate around the movie theater, cafe or some of the benches near the park\'s entrance, which are still well lit. Few venture deeper into the park at night.');
      }
      scene.actions([
        { label: 'Continue your walk', goto: ['pav_parkev', 'walk1'] },
      ]);
    }
  }
  scene.build();
}

export const pav_parkev: LocationDef = {
  name: 'pav_parkev',
  title: '<center><h2>Pavlovsk Park</h2></center>',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  enter: enter,
};
