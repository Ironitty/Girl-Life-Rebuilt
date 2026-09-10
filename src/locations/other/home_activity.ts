import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterWashSheets(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img('images/system/image_needed.png');
  scene.text('You wash your sheets.');
  // TODO-QSP: act'Continue': gt 'bed_get_out', 'start'
  scene.build();
}

function enterVomitingCheck(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_at_a_home')) {
    qspCall(s, 'home_activity', 'vomiting_images');
    scene.actions([{ label: 'Continue', goto: ['home_activity', 'morning_vomit'] }]);
  } else {
    (s as any).vomit['morning_sick'] = 0;
    (s as any).vomit['hangover'] = 0;
    (s as any).vomit['unlucky'] = 0;
  }
  scene.build();
}

function enterVomitingImages(s: GameState, scene: SceneBuilder): void {
  if (((s as any).at_home_txt ?? 0) === 'city_apartment') {
    if (((s as any).rembedr ?? 0) === 0) {
      (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr.jpg"></center>';
    } else {
      (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr2.jpg"></center>';
    }
    if (((s as any).remvanr ?? 0) === 0) {
      (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/city/residential/apartment/vanr.jpg"></center>';
    } else {
      (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/shared/bathroom/vanr2.jpg"></center>';
    }
  } else {
    (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg"></center>';
    (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg"></center>';
    if (((s as any).at_home_txt ?? 0) === 'village_cottage') {
      if (qspFunc(s, 'homes_properties', 'is_property_renovated', 'village_cottage')) {
        (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/suburban/cottage/dacharoom2.jpg"></center>';
        (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/suburban/cottage/dacharoom2.jpg"></center>';
      } else {
        (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/suburban/cottage/dacharoom1.jpg"></center>';
        (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/suburban/cottage/dacharoom1.jpg"></center>';
      }
    } else {
      (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/residential/apartment/bedr2.jpg"></center>';
      (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pushkin/apartment/vanr2x.jpg"></center>';
      if (((s as any).at_home_txt ?? 0) === 'matryona_mansion') {
        if (((s as any).ymanrem ?? 0)[4] === 2) {
          (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/suburb/mansion/y_bedroom.jpg"></center>';
        } else {
          (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/suburb/mansion/i_finished.jpg"></center>';
          (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/suburb/mansion/i_unfinished.jpg"></center>';
        }
        if (((s as any).ymanrem ?? 0)[5] === 2) {
          (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/city/suburb/mansion/y_bathroom.jpg"></center>';
        } else {
          (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/city/suburb/mansion/i_finished.jpg"></center>';
          (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/city/suburb/mansion/i_unfinished.jpg"></center>';
        }
      } else {
        if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 1) {
          (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.normal.jpg"></center>';
          (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.normal1.jpg"></center>';
        } else {
          (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.better.jpg"></center>';
          (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.better1.jpg"></center>';
          if (((s as any).HotelRoom ?? 0)?.[String((s as any).region ?? 0)] === 3) {
            (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.best.jpg"></center>';
            (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"></center>';
          }
          (s as any).home_activity['vomit_bedroom'] = '';
          (s as any).home_activity['vomit_bathroom'] = '';
          // TODO-QSP: 'vasilyhome', 'bathroom' !}
          if (((s as any).at_home_txt ?? 0) === 'shared_apartment') {
            (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/shared/home/bedroom/sofabed.jpg"></center>';
            (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg"></center>';
            (s as any).home_activity['vomit_bedroom'] = '';
            (s as any).home_activity['vomit_bathroom'] = qspUntranslated(s, "'' !}", { location: "home_activity" });
          } else {
            (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/city/residential/house/crh_bedroom.jpg"></center>';
            (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/city/residential/house/crh_bathroom.jpg"></center>';
            if (((s as any).at_home_txt ?? 0) === 'meynold_household') {
              (s as any).home_activity['vomit_bedroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/resident/meynolds/guestroom.jpg"></center>';
              (s as any).home_activity['vomit_bathroom'] = '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/hotel.room.best1.jpg"></center>';
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'wash_sheets':
      enterWashSheets(s, scene);
      break;
    case 'vomiting_check':
      enterVomitingCheck(s, scene);
      break;
    case 'vomiting_images':
      enterVomitingImages(s, scene);
      break;
    default:
      enterWashSheets(s, scene);
      break;
  }
}

export const home_activity: LocationDef = {
  name: 'home_activity',
  title: 'You wash your sheets.',
  region: 'other',
  description: ['You wash your sheets.'],
  enter: enter,
};
