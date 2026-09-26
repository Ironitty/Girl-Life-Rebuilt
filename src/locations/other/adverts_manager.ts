import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'saveposition', '');
  qspGoto(s, 'adverts_manager', 'show');
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) > 8) {
    ((s as any).adv_chance = (s as any).adv_chance ?? {})['guitar'] = 50;
  }
  scene.build();
}

function enterCheckLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_commercial') {
    (s as any).adv_locationImg = 'images/locations/shared/noticeboards/pav_commercial.jpg';
    if (((s as any).adv_pav_commercial ?? 0)[(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
      (s as any).adv_location_result = 1;
    } else {
      (s as any).adv_location_result = 0;
    }
  } else {
    if (((s as any).loc ?? 0) === 'pav_commcenter') {
      (s as any).adv_locationImg = 'images/locations/shared/noticeboards/pav_commcenter.jpg';
      if (((s as any).adv_pav_commcenter ?? 0)[(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
        (s as any).adv_location_result = 1;
      } else {
        (s as any).adv_location_result = 0;
      }
    } else {
      if (((s as any).loc ?? 0) === 'city_industrial') {
        (s as any).adv_locationImg = 'images/locations/shared/noticeboards/city_industrial.jpg';
        if (((s as any).adv_city_industrial ?? 0)[(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
          (s as any).adv_location_result = 1;
        } else {
          (s as any).adv_location_result = 0;
        }
      } else {
        if (((s as any).loc ?? 0) === 'city_residential') {
          (s as any).adv_locationImg = 'images/locations/shared/noticeboards/city_residential.jpg';
          if (((s as any).adv_city_residential ?? 0)[(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
            (s as any).adv_location_result = 1;
          } else {
            (s as any).adv_location_result = 0;
          }
        } else {
          if (((s as any).loc ?? 0) === 'city_center') {
            (s as any).adv_locationImg = 'images/locations/shared/noticeboards/city_citycenter.jpg';
            if (((s as any).adv_city_center ?? 0)[(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] === 1) {
              (s as any).adv_location_result = 1;
            } else {
              (s as any).adv_location_result = 0;
            }
          } else {
            (s as any).adv_locationImg = 'images/locations/shared/noticeboards/pav_residential.jpg';
            (s as any).adv_location_result = 2;
          }
        }
      }
    }
  }
  scene.build();
}

function enterShow(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).adv_init ?? 0))) {
    qspCall(s, 'adverts_definition', 'init');
    (s as any).adv_lastAppearanceChance = (-1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAppearanceChance(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).week ?? 0) === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAppearanceChance(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSumAdverts(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Noticeboard</b></center>');
  (s as any).adv_Text = '<center>You look at the noticeboard to see if any advert will peak your interest.<br>';
  if (((s as any).adv_unknownCount ?? 0) === 0  &&  (!((s as any).adv_knownCount ?? 0))) {
    (s as any).adv_Text = ((s as any).adv_Text ?? 0) + ('There is no advert today. Maybe I should come back next week?<br>');
  } else {
    if (((s as any).adv_unknownCount ?? 0) > 0  &&  ((s as any).adv_knownCount ?? 0) > 0) {
      (s as any).adv_Text = ((s as any).adv_Text ?? 0) + ('You see ' + ((s as any).adv_unknownCount ?? 0) + ' new and ' + ((s as any).adv_knownCount ?? 0) + ' known ' + (((((s as any).adv_knownCount ?? 0) + ((s as any).adv_unknownCount ?? 0)) === 1) ? ('advert') : ('adverts')) + '.<br>');
    } else {
      if (((s as any).adv_unknownCount ?? 0) > 0) {
        (s as any).adv_Text = ((s as any).adv_Text ?? 0) + ('You see ' + ((s as any).adv_unknownCount ?? 0) + ' new ' + ((((s as any).adv_unknownCount ?? 0) === 1) ? ('advert') : ('adverts')) + '.<br>');
      } else {
        if (((s as any).adv_knownCount ?? 0) > 0) {
          (s as any).adv_Text = ((s as any).adv_Text ?? 0) + ('You see ' + ((s as any).adv_knownCount ?? 0) + ' known ' + ((((s as any).adv_knownCount ?? 0) === 1) ? ('advert') : ('adverts')) + '.<br>');
        }
      }
    }
    if (((s as any).adv_unknownCount ?? 0) > 0) {
      (s as any).adv_Text = ((s as any).adv_Text ?? '') + 'It might be a good idea to look at new ' + ((((s as any).adv_unknownCount ?? 0) === 1) ? ('advert') : ('adverts')) + '. Perhaps there is an opportunity that I could miss?<br>';
    }
  }
  (s as any).adv_Text = ((s as any).adv_Text ?? 0) + ('</center>');
  s.scene = { ...s.scene, mainText: String((s as any).adv_Text || ''), curActs: [] };
  if (((s as any).adv_unknownCount ?? 0) > 0) {
    scene.text('<center><b>New Adverts</b></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0]; enterShowAdverts(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).adv_knownCount ?? 0) > 0) {
    scene.text('<center><b>Known Adverts</b></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterShowAdverts(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  (s as any).adv_location_result = undefined;
  (s as any).adv_locationImg = undefined;
  (s as any).adv_knownCount = undefined;
  (s as any).adv_unknownCount = undefined;
  (s as any).adv_Text = undefined;
  scene.actions([
    { label: 'Leave the board', goto: ['restoreposition', ''] },
  ]);
  scene.build();
}

function enterSumAdverts(s: GameState, scene: SceneBuilder): void {
  (s as any).adv_knownCount = 0;
  (s as any).adv_unknownCount = 0;
  (s as any).i = 1;
  do {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckLocation(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).adv_location_result ?? 0) > 0  &&  ((s as any).adv_appearance ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      if (((s as any).adv_known ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        (s as any).adv_knownCount = ((s as any).adv_knownCount ?? 0) + (1);
      } else {
        (s as any).adv_unknownCount = ((s as any).adv_unknownCount ?? 0) + (1);
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
  } while (((s as any).i ?? 0) <= ((s as any).adv_listSize ?? 0));
  scene.build();
}

function enterAppearanceChance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).adv_lastAppearanceChance ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).adv_lastAppearanceChance = ((s as any).daystart ?? 0);
    (s as any).i = 1;
    do {
      if (((s as any).adv_chance ?? 0)[(((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)])] > (Math.floor(Math.random() * 100) + 0)) {
        ((s as any).adv_appearance = (s as any).adv_appearance ?? {})[String((s as any).i ?? 0)] = 1;
      } else {
        ((s as any).adv_appearance = (s as any).adv_appearance ?? {})[String((s as any).i ?? 0)] = 0;
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
    } while (((s as any).i ?? 0) <= ((s as any).adv_listSize ?? 0));
  }
  scene.build();
}

function enterShowAdverts(s: GameState, scene: SceneBuilder): void {
  (s as any).adv_table_adverts = '<center><table>';
  (s as any).i = 1;
  do {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckLocation(s, scene); (s as any).locArgs = __savedLocArgs; }
    if (((s as any).adv_location_result ?? 0) > 0  &&  ((s as any).adv_known ?? 0)?.[String((s as any).i ?? 0)] === ((s as any).args ?? 0)[1]  &&  ((s as any).adv_appearance ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      if ((!((s as any).i2 ?? 0))) {
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? '') + '<tr>';
      }
      (s as any).i2 = ((s as any).i2 ?? 0) + (1);
      if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? 0) + ('<td><table bgcolor=#404040>');
      } else {
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? 0) + ('<td><table bgcolor=#FFF8DC>');
      }
      if (((s as any).adv_known ?? 0)?.[String((s as any).i ?? 0)] === 1) {
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? 0) + ('<tr><td align=center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027adverts_manager\u0027, \u0027view_advert\u0027, (((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)] ?? \u0027\u0027)); return false;"><img height="150" src="' + (((s as any).adv_imgPath ?? 0)?.[String((((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)] ?? 0))]) + '"></a></td></tr><tr><td align=center>' + (((s as any).adv_name ?? 0)?.[String((((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)] ?? 0))]) + '</td></tr></table></td>');
      } else {
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? 0) + ('<tr><td align=center><a href="#" onclick="window.__gameStore.getState().doGoto(\u0027adverts_manager\u0027, \u0027view_advert\u0027, (((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)] ?? \u0027\u0027)); return false;"><img height="150" src="' + ((s as any).adv_locationImg ?? 0) + '"></a></td></tr><tr><td align=center>' + (((s as any).adv_nameHidden ?? 0)?.[String((((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)] ?? 0))]) + '</td></tr></table></td>');
      }
      if (((s as any).i2 ?? 0) % 6 === 0) {
        (s as any).i2 = 0;
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? '') + '</tr>';
      }
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i2 ?? 0) % 6 !== 0) {
      do {
        (s as any).i2 = ((s as any).i2 ?? 0) + (1);
        (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? 0) + ('<td></td>');
      } while (!(((s as any).i2 ?? 0) % 6 === 0));
    }
    (s as any).adv_table_adverts = ((s as any).adv_table_adverts ?? 0) + ('</table></center>');
    s.scene = { ...s.scene, mainText: String((s as any).adv_table_adverts || ''), curActs: [] };
    (s as any).adv_table_adverts = undefined;
  } while (((s as any).i ?? 0) <= ((s as any).adv_listSize ?? 0));
  scene.build();
}

function enterViewAdvert(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Advert</b></center>');
  scene.img(`${(((s as any).adv_imgPath ?? 0)?.[String((((s as any).args ?? 0)?.[1] ?? 0))] ?? '')}`);
  ((s as any).adv_known = (s as any).adv_known ?? {})[(((s as any).args ?? 0)?.[2] ?? 0)] = 1;
  qspCall(s, 'adverts_view', '$args[1]');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Go back', goto: ['adverts_manager', 'show'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'check_location':
      enterCheckLocation(s, scene);
      break;
    case 'show':
      enterShow(s, scene);
      break;
    case 'sum_adverts':
      enterSumAdverts(s, scene);
      break;
    case 'appearance_chance':
      enterAppearanceChance(s, scene);
      break;
    case 'show_adverts':
      enterShowAdverts(s, scene);
      break;
    case 'view_advert':
      enterViewAdvert(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const adverts_manager: LocationDef = {
  name: 'adverts_manager',
  title: 'Noticeboard',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
