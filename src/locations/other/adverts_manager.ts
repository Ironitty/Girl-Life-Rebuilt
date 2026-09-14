import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'saveposition', '');
  scene.actions([{ label: 'Continue', goto: ['adverts_manager', 'show'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).month ?? 0) > 8) {
    if (!(s as any).adv_chance) (s as any).adv_chance = {}; (s as any).adv_chance['guitar'] = 50;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'pav_commercial') {
    if (((s as any).adv_pav_commercial ?? 0)[((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)]] === 1) {
      (s as any).adv_location_result = 1;
    } else {
      (s as any).adv_location_result = 0;
    }
  } else {
    if (((s as any).loc ?? 0) === 'pav_commcenter') {
      if (((s as any).adv_pav_commcenter ?? 0)[((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)]] === 1) {
        (s as any).adv_location_result = 1;
      } else {
        (s as any).adv_location_result = 0;
      }
    } else {
      if (((s as any).loc ?? 0) === 'city_industrial') {
        if (((s as any).adv_city_industrial ?? 0)[((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)]] === 1) {
          (s as any).adv_location_result = 1;
        } else {
          (s as any).adv_location_result = 0;
        }
      } else {
        if (((s as any).loc ?? 0) === 'city_residential') {
          if (((s as any).adv_city_residential ?? 0)[((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)]] === 1) {
            (s as any).adv_location_result = 1;
          } else {
            (s as any).adv_location_result = 0;
          }
        } else {
          if (((s as any).loc ?? 0) === 'city_center') {
            if (((s as any).adv_city_center ?? 0)[((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)]] === 1) {
              (s as any).adv_location_result = 1;
            } else {
              (s as any).adv_location_result = 0;
            }
          } else {
            (s as any).adv_location_result = 2;
          }
        }
      }
    }
  }
  // TODO-QSP: end
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
  if (((s as any).adv_unknownCount ?? 0) === 0  &&  (!((s as any).adv_knownCount ?? 0))) {
    // TODO-QSP: $adv_Text += 'There is no advert today. Maybe I should come back next week?<br>'
  } else {
    if (((s as any).adv_unknownCount ?? 0) > 0  &&  ((s as any).adv_knownCount ?? 0) > 0) {
      // TODO-QSP: $adv_Text += 'You see <<adv_unknownCount>> new and <<adv_knownCount>> known ' + iif((adv_knownCount ...
    } else {
      if (((s as any).adv_unknownCount ?? 0) > 0) {
        // TODO-QSP: $adv_Text += 'You see <<adv_unknownCount>> new ' + iif(adv_unknownCount = 1, 'advert', 'adverts') + ...
      } else {
        if (((s as any).adv_knownCount ?? 0) > 0) {
          // TODO-QSP: $adv_Text += 'You see <<adv_knownCount>> known ' + iif(adv_knownCount = 1, 'advert', 'adverts') + '....
        }
      }
    }
    if (((s as any).adv_unknownCount ?? 0) > 0) {
      // TODO-QSP: $adv_Text += 'It might be a good idea to look at new ' + iif(adv_unknownCount = 1, 'advert', 'advert...
    }
  }
  // TODO-QSP: $adv_Text += '</center>'
  // TODO-QSP: $adv_Text
  if (((s as any).adv_unknownCount ?? 0) > 0) {
    scene.text('<center><b>New Adverts</b></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 0]; enterShowAdverts(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).adv_knownCount ?? 0) > 0) {
    scene.text('<center><b>Known Adverts</b></center>');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1]; enterShowAdverts(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the board', goto: ['restoreposition', ''] },
  ]);
  scene.build();
}

function enterSumAdverts(s: GameState, scene: SceneBuilder): void {
  (s as any).adv_knownCount = 0;
  (s as any).adv_unknownCount = 0;
  (s as any).i = 1;
  // TODO-QSP: :sum_visible_loop
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckLocation(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).adv_location_result ?? 0) > 0  &&  ((s as any).adv_appearance ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    if (((s as any).adv_known ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      (s as any).adv_knownCount = ((s as any).adv_knownCount ?? 0) + (1);
    } else {
      (s as any).adv_unknownCount = ((s as any).adv_unknownCount ?? 0) + (1);
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).adv_listSize ?? 0)) {
    // TODO-QSP: jump 'sum_visible_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterAppearanceChance(s: GameState, scene: SceneBuilder): void {
  if (((s as any).adv_lastAppearanceChance ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).adv_lastAppearanceChance = ((s as any).daystart ?? 0);
    (s as any).i = 1;
    // TODO-QSP: :appearance_loop
    if (((s as any).adv_chance ?? 0)[((s as any).adv_list ?? 0)?.[String((s as any).i ?? 0)]] > (Math.floor(Math.random() * 100) + 0)) {
      if (!(s as any).adv_appearance) (s as any).adv_appearance = {}; (s as any).adv_appearance[String((s as any).i ?? 0)] = 1;
    } else {
      if (!(s as any).adv_appearance) (s as any).adv_appearance = {}; (s as any).adv_appearance[String((s as any).i ?? 0)] = 0;
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= ((s as any).adv_listSize ?? 0)) {
      // TODO-QSP: jump 'appearance_loop'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterShowAdverts(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 1;
  // TODO-QSP: :show_adverts_loop
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckLocation(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).adv_location_result ?? 0) > 0  &&  ((s as any).adv_known ?? 0)?.[String((s as any).i ?? 0)] === ((s as any).args ?? 0)[1]  &&  ((s as any).adv_appearance ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    if ((!((s as any).i2 ?? 0))) {
      // TODO-QSP: $adv_table_adverts += '<tr>'
    }
    (s as any).i2 = ((s as any).i2 ?? 0) + (1);
    if (((s as any).theme ?? 0)?.['is_dark'] === 1) {
      // TODO-QSP: $adv_table_adverts += '<td><table bgcolor=#404040>'
    } else {
      // TODO-QSP: $adv_table_adverts += '<td><table bgcolor=#FFF8DC>'
    }
    if (((s as any).adv_known ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: $adv_table_adverts += '<tr><td align=center><a href="exec: gt ''adverts_manager'', ''view_advert'', ...
    } else {
      // TODO-QSP: $adv_table_adverts += '<tr><td align=center><a href="exec: gt ''adverts_manager'', ''view_advert'', ...
    }
    if (((s as any).i2 ?? 0) % 6 === 0) {
      (s as any).i2 = 0;
      // TODO-QSP: $adv_table_adverts += '</tr>'
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).adv_listSize ?? 0)) {
    // TODO-QSP: jump 'show_adverts_loop'
  }
  if (((s as any).i2 ?? 0) % 6 !== 0) {
    // TODO-QSP: :show_advert_loop_close
    (s as any).i2 = ((s as any).i2 ?? 0) + (1);
    // TODO-QSP: $adv_table_adverts += '<td></td>'
    if (((s as any).i2 ?? 0) % 6 === 0) {
      (s as any).i2 = 0;
      // TODO-QSP: $adv_table_adverts += '</tr>'
    } else {
      // TODO-QSP: jump 'show_advert_loop_close'
    }
  }
  // TODO-QSP: $adv_table_adverts += '</table></center>'
  // TODO-QSP: $adv_table_adverts
  // TODO-QSP: end
  scene.build();
}

function enterViewAdvert(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Advert</b></center>');
  scene.img(`${qspUntranslated(s, "adv_imgPath[''<<args[1]", { location: "adverts_manager" })}']>>`);
  // TODO-QSP: adv_known[args[2]] = 1
  // TODO-QSP: gs 'adverts_view', $args[1]
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['adverts_manager', 'show'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
