import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).pav_park_meet_kol_event_type = ((s as any).locArgs?.[0] ?? 0);
  if (((s as any).pav_park_meet_kol_event_type ?? 0) === 'meet_start') {
    (s as any).pav_park_meet_kol_event_is_winter = (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12);
    (s as any).pav_park_meet_kol_event_is_day = (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3);
    (s as any).temprand = (Math.floor(Math.random() * 3) + 1);
    if (((s as any).pav_park_meet_kol_event_is_winter ?? 0) === -1  &&  (!((s as any).pav_park_meet_kol_event_is_day ?? 0))) {
      (s as any).temprand = 1;
    }
    if (((s as any).temprand ?? 0) === 1) {
      if (((s as any).pav_park_meet_kol_event_is_winter ?? 0) === -1) {
        scene.img('images/locations/pavlovsk/park/skver_znacom_1.jpg');
      } else {
        scene.img('images/locations/pavlovsk/park/gop/skver_znacom_3.jpg');
      }
      scene.text('You see a group of teenagers sitting on a park bench, listening to some music.');
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        qspCall(s, 'placer', 'init');
        ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = (Math.floor(Math.random() * 5) + 2);
        ((s as any).placerParameter = (s as any).placerParameter ?? {})['recognize_status'] = 1;
        (s as any).place = 1;
        qspCall(s, 'placer_man', '');
        scene.text('You don\'t think you\'ve ever seen them before as the guys walk towards you.');
        scene.text(`"${(((s as any).placerStringParameter ?? 0)?.['text_start_meet'] ?? '')}"`);
        scene.actions([
          { label: 'Meet', goto: ['placer_act', ''] },
        ]);
      } else {
        scene.text('The guys look at you for a second, but you see one of them shake his head before they turn their backs on you and pretend you\'re not there.');
        scene.actions([
          { label: 'Finish your walk', goto: ['pav_park', 'start'] },
        ]);
      }
    } else {
      if ((((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3)  &&  (((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12)) {
        scene.img('images/locations/pavlovsk/park/event/walk/walk_winter_day.jpg');
      } else {
        if ((((s as any).month ?? 0) === 1  ||  ((s as any).month ?? 0) === 2  ||  ((s as any).month ?? 0) === 12)) {
          scene.img('images/locations/pavlovsk/lake/skver.winter.night.jpg');
        } else {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/pavlovsk/park/event/walk/walk_day.jpg');
          } else {
            scene.img('images/locations/pavlovsk/park/event/walk/walk_night.jpg');
          }
        }
      }
      scene.text('You take a relaxing and refreshing walk through the park, trying to figure out the meaning of life.');
    }
  } else {
    if (((s as any).pav_park_meet_kol_event_type ?? 0) === 'meet_start_1') {
      scene.img('images/locations/pavlovsk/park/skver_znacom_1.jpg');
      scene.text('Some gopniks are sitting on their haunches just off to the side of one of the main paths, drinking beer. The area around them is littered with empty bottles.');
      if (((s as any).pcs_hotcat ?? 0) >= 5) {
        qspCall(s, 'placer', 'init');
        ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = (Math.floor(Math.random() * 4) + 3);
        ((s as any).placerParameter = (s as any).placerParameter ?? {})['recognize_status'] = 2;
        (s as any).place = 1;
        qspCall(s, 'placer_man', '');
        scene.text('You don\'t think you\'ve ever seen them before as the guys walk towards you.');
        scene.text(`"${(((s as any).placerStringParameter ?? 0)?.['text_start_meet'] ?? '')}"`);
        scene.actions([
          { label: 'Meet', goto: ['placer_act', ''] },
        ]);
      } else {
        scene.text('The guys look at you for a second, but you see one of them shake his head before they turn their backs on you and pretend you\'re not there.');
        scene.actions([
          { label: 'Finish your walk', goto: ['pav_park', 'deeper_park'] },
        ]);
      }
    } else {
      if (((s as any).pav_park_meet_kol_event_type ?? 0) === 'meet_start_2') {
        scene.img('images/locations/pavlovsk/park/event/walk/walk_deep_day.jpg');
        scene.text('You stroll through the park by yourself, enjoying its beauty.');
        if (((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('You don\'t think you\'ve ever seen them before as the guys walk towards you.');
          scene.text('"Hey there, good looking. Why don\'t you come to hang out with us?"');
          qspCall(s, 'placer', 'init');
          ((s as any).placerParameter = (s as any).placerParameter ?? {})['number_of_man'] = (Math.floor(Math.random() * 4) + 3);
          ((s as any).placerParameter = (s as any).placerParameter ?? {})['recognize_status'] = 2;
          (s as any).place = 1;
          qspCall(s, 'placer_man', '');
          scene.actions([
            { label: 'Agree to hang out', goto: ['placer_act', ''] },
          ]);
        } else {
          scene.text('The guys look at you for a second, but you see one of them shake his head before they turn their backs on you and pretend you\'re not there.');
        }
      }
    }
  }
  scene.build();
}

export const pav_park_meet_kol_event: LocationDef = {
  name: 'pav_park_meet_kol_event',
  title: 'You see a group of teenagers sitting on a park bench, listen',
  region: 'pavlovsk',
  description: ['You see a group of teenagers sitting on a park bench, listening to some music.'],
  enter: enter,
};
