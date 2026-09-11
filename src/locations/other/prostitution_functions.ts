import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetPavlovskHours(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['pav_start_hour'] = qspUntranslated(s, "ARGS[1]", { location: "prostitution_functions" });
  ((s as any).prostitute ?? {})['pav_end_hour'] = qspUntranslated(s, "ARGS[2]", { location: "prostitution_functions" });
  scene.build();
}

function enterWlBlock(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['wl_block'] = qspUntranslated(s, "ARGS[1]", { location: "prostitution_functions" });
  if (((s as any).prostitute ?? 0)?.['wl_block']) {
    qspCall(s, 'prostitution_functions', 'set_pavlovsk_hours', 6, 23);
  } else {
    qspCall(s, 'prostitution_functions', 'set_pavlovsk_hours', 14, 2);
  }
  scene.build();
}

function enterCheckForWlife(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).mod_name ?? {}).length > 0) {
    (s as any).mod_i = 0;
    // TODO-QSP: :mod_exec
    if (((s as any).mod_name ?? 0)?.[String((s as any).mod_i ?? 0)] === 'wlife') {
      if (((s as any).prostitute ?? 0)?.['payment_method'] === 0) {
        ((s as any).prostitute ?? {})['wl_block'] = 1;
      }
    }
    (s as any).mod_i = ((s as any).mod_i ?? 0) + (1);
    if (((s as any).mod_i ?? 0) < Object.keys((s as any).mod_name ?? {}).length) {
      // TODO-QSP: jump 'mod_exec'
    }
  }
  scene.build();
}

function enterUpdateProstitutionLocations(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'set_pavlovsk_prostitute');
  if (((s as any).prostitute ?? 0)?.['gadukino'] === 0) {
    qspCall(s, 'prostitution_functions', 'set_gadukino_prostitute');
  }
  if (((s as any).prostitute ?? 0)?.['road'] === 0) {
    qspCall(s, 'prostitution_functions', 'set_highway_prostitute');
  }
  scene.build();
}

function enterSetPavlovskProstitute(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).fame ?? 0)?.['pav_prostitute'] > 250  ||  ((s as any).fame ?? 0)?.['pav_slut'] > 250)  &&  ((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0) {
    ((s as any).prostitute ?? {})['pavlovsk'] = 1;
    ((s as any).prostitute ?? {})['active'] = 1;
    ((s as any).prostitute ?? {})['payment_method'] = 1;
  } else {
    ((s as any).prostitute ?? {})['pavlovsk'] = 0;
  }
  scene.build();
}

function enterSetGadukinoProstitute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2  &&  ((s as any).MiraVars ?? 0)?.['pimp'] !== 1  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0) {
    ((s as any).prostitute ?? {})['gadukino'] = 1;
    ((s as any).prostitute ?? {})['active'] = 1;
    ((s as any).prostitute ?? {})['payment_method'] = 1;
  } else {
    ((s as any).prostitute ?? {})['gadukino'] = 0;
  }
  scene.build();
}

function enterSetHighwayProstitute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['highway_idea'] === 2  &&  ((s as any).prostitute ?? 0)?.['active'] === 1  &&  ((((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['wl_block'] === 0)  ||  (((s as any).prostitute ?? 0)?.['wl_block'] === 1  &&  ((s as any).prostitute ?? 0)?.['payment_method'] === 1))) {
    ((s as any).prostitute ?? {})['road'] = 1;
    ((s as any).prostitute ?? {})['active'] = 1;
    ((s as any).prostitute ?? {})['payment_method'] = 1;
  } else {
    ((s as any).prostitute ?? {})['road'] = 0;
  }
  scene.build();
}

function enterProstituteWorkHours(s: GameState, scene: SceneBuilder): void {
  if (((s as any).region ?? 0) === 'pushkin') {
    (s as any).result = (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 2)  ||  (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 23);
  } else {
    if (((s as any).region ?? 0) === 'pav'  ||  ((((s as any).loc ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'pav_') {
      (s as any).result = (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14)  ||  (((s as any).hour ?? 0) >= 17  &&  ((s as any).hour ?? 0) <= 23);
    } else {
      (s as any).result = 0;
    }
  }
  return;
  scene.build();
}

function enterIsSolicitationLocation(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).curloc ?? 0) === 'shop') {
    // TODO-QSP: exit
  }
  if (((s as any).curloc ?? 0) === 'prostitution_pavlovsk') {
    // TODO-QSP: exit
  }
  if (((s as any).loc ?? 0) !== ((s as any).curloc ?? 0)) {
    // TODO-QSP: exit
  }
  if (((s as any).menu_off ?? 0) === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).loc_arg ?? 0) !== ''  &&  ((s as any).loc_arg ?? 0) !== 'start') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).solicitation_locations) ? ((s as any).solicitation_locations as any[]).indexOf(((s as any).loc ?? 0)) : -1) < 0) {
    // TODO-QSP: exit
  }
  (s as any).result = 1;
  return;
  scene.build();
}

function enterProstituteOutfitAtHome(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'homes_properties', 'is_current_home')  &&  ((s as any).prostitute ?? 0)?.['active']) {
    qspCall(s, 'prostitution_functions', 'work_clothes');
    if (((s as any).prostitute ?? 0)?.['work_clothes']) {
      if (((s as any).prostitute ?? 0)?.['outfit_is_set'] === 1  &&  qspFunc(s, 'prostitution_functions', 'is_default') === 0) {
        scene.actions([
          { label: 'Replace your default prostitute outfit with the current outfit', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'set_default_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
        ]);
      } else {
        if (((s as any).prostitute ?? 0)?.['outfit_is_set'] === 0) {
          scene.actions([
            { label: 'Set the current as your default prostitute outfit', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'set_default_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Change into regular clothes', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'change_into_regular_clothes');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    } else {
      if (((s as any).prostitute ?? 0)?.['outfit_is_set']) {
        if (((s as any).temp_not_wear_reason ?? 0) === 'too_small') {
          scene.actions([
            { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as your outfit is too ...
  } },
          ]);
        } else {
          if (((s as any).temp_not_wear_reason ?? 0) === 'too_large') {
            scene.actions([
              { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as your outfit is too ...
  } },
            ]);
          } else {
            if (((s as any).temp_not_wear_reason ?? 0) === 'low_strength') {
              scene.actions([
                { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as outfit is worn out!...
  } },
              ]);
            } else {
              if (((s as any).temp_not_wear_reason ?? 0) === 'not_owned') {
                scene.actions([
                  { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    // TODO-QSP: msg $func('wrap', 'neg', 'Unavailable as you don''t own that...
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Change into prostitute outfit', handler: (st: GameState) => {
    qspCall(s, 'prostitution_functions', 'change_into_prostitute_outfit');
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                ]);
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterRandomApproachChance(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).pcs_hotcat ?? 0) < 4) {
    // TODO-QSP: exit
  }
  if (((s as any).pcs_hotcat ?? 0) < 6) {
    (s as any).result = 5;
  } else {
    if (((s as any).pcs_hotcat ?? 0) < 8) {
      (s as any).result = 10;
    } else {
      (s as any).result = 0;
    }
  }
  if (((s as any).PCloStyle ?? 0) === 4  ||  ((s as any).PCloProstitute ?? 0) === 1) {
    (s as any).result = ((s as any).result ?? 0) + (5);
  }
  return;
  scene.build();
}

function enterWorkClothes(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['work_clothes'] = 0;
  (s as any).PProstitute = 0;
  if ((!((s as any).PCloProstitute ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).PShoStrip ?? 0)) {
  } else {
    if (((s as any).PShoBimbo ?? 0)) {
    } else {
      if (((s as any).PShoHeels ?? 0) >= 2) {
      } else {
        return;
      }
    }
  }
  ((s as any).prostitute ?? {})['work_clothes'] = 1;
  (s as any).PProstitute = 1;
  return;
  scene.build();
}

function enterIsDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 0;
  if (((s as any).clothingworntype ?? 0) !== ((s as any).prostitute ?? 0)?.['clothingworntype']) {
    // TODO-QSP: exit
  }
  if (((s as any).clothingwornnumber ?? 0) !== ((s as any).prostitute ?? 0)?.['clothingwornnumber']) {
    // TODO-QSP: exit
  }
  if (((s as any).shoeworntype ?? 0) !== ((s as any).prostitute ?? 0)?.['shoeworntype']) {
    // TODO-QSP: exit
  }
  if (((s as any).shoewornnumber ?? 0) !== ((s as any).prostitute ?? 0)?.['shoewornnumber']) {
    // TODO-QSP: exit
  }
  if (((s as any).currentpursetype ?? 0) !== ((s as any).prostitute ?? 0)?.['currentpursetype']) {
    // TODO-QSP: exit
  }
  if (((s as any).currentpursenumber ?? 0) !== ((s as any).prostitute ?? 0)?.['currentpursenumber']) {
    // TODO-QSP: exit
  }
  if (((s as any).coatworntype ?? 0) !== ((s as any).prostitute ?? 0)?.['coatworntype']) {
    // TODO-QSP: exit
  }
  if (((s as any).coatwornnumber ?? 0) !== ((s as any).prostitute ?? 0)?.['coatwornnumber']) {
    // TODO-QSP: exit
  }
  if (((s as any).prostitute ?? 0)?.['underweartype'] === 2) {
    if (((s as any).bodysuitworntype ?? 0) !== ((s as any).prostitute ?? 0)?.['bodysuitworntype']) {
      // TODO-QSP: exit
    }
    if (((s as any).bodysuitwornnumber ?? 0) !== ((s as any).prostitute ?? 0)?.['bodysuitwornnumber']) {
      // TODO-QSP: exit
    }
  } else {
    if (((s as any).pantyworntype ?? 0) !== ((s as any).prostitute ?? 0)?.['pantyworntype']) {
      // TODO-QSP: exit
    }
    if (((s as any).pantywornnumber ?? 0) !== ((s as any).prostitute ?? 0)?.['pantywornnumber']) {
      // TODO-QSP: exit
    }
    if (((s as any).braworntype ?? 0) !== ((s as any).prostitute ?? 0)?.['braworntype']) {
      // TODO-QSP: exit
    }
    if (((s as any).brawornnumber ?? 0) !== ((s as any).prostitute ?? 0)?.['brawornnumber']) {
      // TODO-QSP: exit
    }
  }
  (s as any).result = 1;
  return;
  scene.build();
}

function enterSetDefaultOutfit(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['clothingworntype'] = ((s as any).clothingworntype ?? 0);
  ((s as any).prostitute ?? {})['clothingwornnumber'] = ((s as any).clothingwornnumber ?? 0);
  ((s as any).prostitute ?? {})['underweartype'] = ((s as any).underwear ?? 0)?.['type'];
  ((s as any).prostitute ?? {})['bodysuitworntype'] = ((s as any).bodysuitworntype ?? 0);
  ((s as any).prostitute ?? {})['bodysuitwornnumber'] = ((s as any).bodysuitwornnumber ?? 0);
  ((s as any).prostitute ?? {})['pantyworntype'] = ((s as any).pantyworntype ?? 0);
  ((s as any).prostitute ?? {})['pantywornnumber'] = ((s as any).pantywornnumber ?? 0);
  ((s as any).prostitute ?? {})['braworntype'] = ((s as any).braworntype ?? 0);
  ((s as any).prostitute ?? {})['brawornnumber'] = ((s as any).brawornnumber ?? 0);
  ((s as any).prostitute ?? {})['shoeworntype'] = ((s as any).shoeworntype ?? 0);
  ((s as any).prostitute ?? {})['shoewornnumber'] = ((s as any).shoewornnumber ?? 0);
  ((s as any).prostitute ?? {})['currentpursetype'] = ((s as any).currentpursetype ?? 0);
  ((s as any).prostitute ?? {})['currentpursenumber'] = ((s as any).currentpursenumber ?? 0);
  ((s as any).prostitute ?? {})['coatworntype'] = ((s as any).coatworntype ?? 0);
  ((s as any).prostitute ?? {})['coatwornnumber'] = ((s as any).coatwornnumber ?? 0);
  ((s as any).prostitute ?? {})['outfit_is_set'] = 1;
  scene.build();
}

function enterClearingDefaultOutfit(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['clothingworntype'] = '';
  ((s as any).prostitute ?? {})['clothingwornnumber'] = 0;
  ((s as any).prostitute ?? {})['underweartype'] = 0;
  ((s as any).prostitute ?? {})['bodysuitworntype'] = '';
  ((s as any).prostitute ?? {})['bodysuitwornnumber'] = 0;
  ((s as any).prostitute ?? {})['pantyworntype'] = '';
  ((s as any).prostitute ?? {})['pantywornnumber'] = 0;
  ((s as any).prostitute ?? {})['braworntype'] = '';
  ((s as any).prostitute ?? {})['brawornnumber'] = 0;
  ((s as any).prostitute ?? {})['shoeworntype'] = '';
  ((s as any).prostitute ?? {})['shoewornnumber'] = 0;
  ((s as any).prostitute ?? {})['currentpursetype'] = '';
  ((s as any).prostitute ?? {})['currentpursenumber'] = 0;
  ((s as any).prostitute ?? {})['coatworntype'] = '';
  ((s as any).prostitute ?? {})['coatwornnumber'] = 0;
  ((s as any).prostitute ?? {})['outfit_is_set'] = 0;
  scene.build();
}

function enterChangeIntoProstituteOutfit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wardrobe', 'is_sport');
  qspCall(s, 'wardrobe', 'back_to_regular_clothes');
  ((s as any).lastwornclothingtype ?? {})['prostitute'] = ((s as any).clothingworntype ?? 0);
  ((s as any).lastwornclothingnumber ?? {})['prostitute'] = ((s as any).clothingwornnumber ?? 0);
  ((s as any).lastwornunderwear ?? {})['prostitute'] = 0;
  if (((s as any).underwear ?? 0)?.['type'] === 2) {
    ((s as any).lastwornunderwear ?? {})['prostitute'] = 2;
    ((s as any).lastwornbodysuittype ?? {})['prostitute'] = ((s as any).bodysuitworntype ?? 0);
    ((s as any).lastwornbodysuitnumber ?? {})['prostitute'] = ((s as any).bodysuitwornnumber ?? 0);
  } else {
    ((s as any).lastwornpantytype ?? {})['prostitute'] = ((s as any).pantyworntype ?? 0);
    ((s as any).lastwornpantynumber ?? {})['prostitute'] = ((s as any).pantywornnumber ?? 0);
    ((s as any).lastwornbratype ?? {})['prostitute'] = ((s as any).braworntype ?? 0);
    ((s as any).lastwornbranumber ?? {})['prostitute'] = ((s as any).brawornnumber ?? 0);
  }
  ((s as any).lastwornshoetype ?? {})['prostitute'] = ((s as any).shoeworntype ?? 0);
  ((s as any).lastwornshoenumber ?? {})['prostitute'] = ((s as any).shoewornnumber ?? 0);
  ((s as any).lastwornpursetype ?? {})['prostitute'] = ((s as any).currentpursetype ?? 0);
  ((s as any).lastwornpursenumber ?? {})['prostitute'] = ((s as any).currentpursenumber ?? 0);
  ((s as any).lastworncoattype ?? {})['prostitute'] = ((s as any).coatworntype ?? 0);
  ((s as any).lastworncoatnumber ?? {})['prostitute'] = ((s as any).coatwornnumber ?? 0);
  // TODO-QSP: gs 'clothing', 'wear', $prostitute['clothingworntype'], prostitute['clothingwornnumber']
  if (((s as any).prostitute ?? 0)?.['underweartype'] === 2) {
    // TODO-QSP: gs 'underwear_bodysuits', 'wear', $lastwornbodysuittype['prostitute'], lastwornbodysuitnumber['prost...
  } else {
    // TODO-QSP: gs 'panties', 'wear', $prostitute['pantyworntype'], prostitute['pantywornnumber']
    // TODO-QSP: gs 'bras', 'wear', $prostitute['braworntype'], prostitute['brawornnumber']
  }
  // TODO-QSP: gs 'shoes', 'wear', $prostitute['shoeworntype'], prostitute['shoewornnumber']
  // TODO-QSP: gs 'purses', 'wear', $prostitute['currentpursetype'], prostitute['currentpursenumber']
  // TODO-QSP: gs 'coats', 'wear', $prostitute['coatworntype'], prostitute['coatwornnumber']
  qspCall(s, 'prostitution_functions', 'work_clothes');
  if (((s as any).locArgs?.[1] ?? 0) === 'work') {
    ((s as any).prostitute ?? {})['changed_for_work'] = 1;
  }
  scene.build();
}

function enterChangeIntoRegularClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'wardrobe', 'is_school');
  qspCall(s, 'wardrobe', 'is_sport');
  qspCall(s, 'wardrobe', 'back_to_regular_clothes');
  if (((s as any).default_school_number ?? 0)[2] >= 5  ||  ((s as any).default_sport_number ?? 0)[2] >= 5) {
    if (qspFunc(s, 'prostitution_functions', 'is_default') !== 0) {
      qspCall(s, 'wardrobe', 'back_to_regular_clothes');
    }
  }
  scene.build();
}

function enterChangeToWork(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).locArgs?.[1] ?? 0) === 'car') {
    // TODO-QSP: iif($loc_desc = '', 'You quickly change into your working outfit in your car.', $loc_desc)
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'restroom') {
    // TODO-QSP: iif($loc_desc = '', 'You slip into a stall and quickly change into your working outfit, trying to av...
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'road_side') {
    // TODO-QSP: iif($loc_desc = '', 'You quickly change into your working outfit behind some bushes by the road.', $...
  }
  qspCall(s, 'prostitution_functions', 'change_into_prostitute_outfit', 'work');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterChangeBack(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).locArgs?.[1] ?? 0) === 'car') {
    scene.text('You quickly change into your working everyday clothes in your car.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'restroom') {
    scene.text('You quickly change into your everyday clothes in the men\'s restroom..');
  }
  if (((s as any).loc_arg ?? 0) === 'restroom_women') {
    scene.text('You quickly change into your everyday clothes in the women\'s restroom.');
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'road_side') {
    scene.text('You quickly change into your everyday clothes behind some bushes by the road.');
  }
  qspCall(s, 'prostitution_functions', 'change_into_regular_clothes');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterCheckSolicitationEvent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'prostitution_functions', 'work_clothes');
  if (((s as any).prostitute ?? 0)?.['wl_block'] === 0  &&  ((s as any).prostitute ?? 0)?.['full_block'] === 0  &&  qspFunc(s, 'prostitution_functions', 'prostitute_work_hours')  &&  qspFunc(s, 'prostitution_functions', 'is_solicitation_location')) {
    if (((s as any).prostitute ?? 0)?.['pavlovsk'] === 1  &&  ((s as any).prostitute ?? 0)?.['pav_time_hour'] !== ((s as any).hour ?? 0)  &&  (Math.floor(Math.random() * (70 - -20 + 1)) + (-20)) < ((s as any).minut ?? 0)) {
      qspCall(s, 'prostitution_pavlovsk', 'chance');
    }
    if (((s as any).prostitute ?? 0)?.['pavlovsk'] === 1  &&  ((s as any).prostitute ?? 0)?.['work_clothes']) {
      scene.actions([
        { label: 'Look for clients (prostitution)', goto: ['prostitution_pavlovsk', 'search'] },
      ]);
    }
    ((s as any).prostitute ?? {})['pav_residential_prost_day'] = ((s as any).daystart ?? 0);
  }
  scene.build();
}

function enterWillUnprotected(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc');
  (s as any).will_cost = 0;
  if (((s as any).missCum ?? 0) >= ((s as any).timeTresh ?? 0)) {
    (s as any).will_calc = ((s as any).will_calc ?? 0) + (100);
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'resist') {
    if (((s as any).pro_stats ?? 0)?.['unprotected'] <= 90) {
      (s as any).will_cost = (10 + ((s as any).pro_stats ?? {})?.['unprotected'] + ((s as any).will_calc ?? 0)) / 10;
    } else {
      (s as any).will_cost = (100 + ((s as any).will_calc ?? 0)) / 10;
    }
  } else {
    if (((s as any).pro_stats ?? 0)?.['unprotected'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).pro_stats ?? {})?.['unprotected'] + ((s as any).will_calc ?? 0)) / 10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0)) / 10;
    }
  }
  qspCall(s, 'willpower', 'difficulty', '' + qspUntranslated(s, "ARGS[2]>", { location: "prostitution_functions" }) + '');
  scene.build();
}

function enterWillRimming(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc');
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).stat ?? 0)?.['rimming_give'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).stat ?? {})?.['rimming_give'] + ((s as any).will_calc ?? 0)) / 10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0)) / 10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).stat ?? 0)?.['rimming_give'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).stat ?? {})?.['rimming_give'] + ((s as any).will_calc ?? 0)) / 10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0)) / 10;
      }
    } else {
      if (((s as any).stat ?? 0)?.['rimming_give'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).stat ?? {})?.['rimming_give'] + ((s as any).will_calc ?? 0)) / 10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0)) / 10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', '' + qspUntranslated(s, "ARGS[2]>", { location: "prostitution_functions" }) + '');
  scene.build();
}

function enterWillAtm(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'calc');
  if (((s as any).locArgs?.[1] ?? 0) === 'self') {
    if (((s as any).pro_stats ?? 0)?.['atm'] <= 90) {
      (s as any).will_cost = (100 - ((s as any).pro_stats ?? {})?.['atm'] + ((s as any).will_calc ?? 0)) / 10;
    } else {
      (s as any).will_cost = (10 + ((s as any).will_calc ?? 0)) / 10;
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'force') {
      if (((s as any).pro_stats ?? 0)?.['atm'] <= 40) {
        (s as any).will_cost = (110 - ((s as any).will_enforced ?? 0) - ((s as any).pro_stats ?? {})?.['atm'] + ((s as any).will_calc ?? 0)) / 10;
      } else {
        (s as any).will_cost = (70 - ((s as any).will_enforced ?? 0) + ((s as any).will_calc ?? 0)) / 10;
      }
    } else {
      if (((s as any).pro_stats ?? 0)?.['atm'] <= 90) {
        (s as any).will_cost = (10 + ((s as any).pro_stats ?? {})?.['atm'] + ((s as any).will_calc ?? 0)) / 10;
      } else {
        (s as any).will_cost = (100 + ((s as any).will_calc ?? 0)) / 10;
      }
    }
  }
  qspCall(s, 'willpower', 'difficulty', '' + qspUntranslated(s, "ARGS[2]>", { location: "prostitution_functions" }) + '');
  scene.build();
}

function enterStdCheck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinSex', 'std_trigger', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterStdCheckOral(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinSex', 'std_trigger_oral', ((s as any).locArgs?.[1] ?? 0));
  scene.build();
}

function enterRemoveCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) - (1);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0  &&  ((s as any).preziktype ?? 0) === 2) {
      ((s as any).mc_inventory ?? {})['sabotaged_condoms'] = (((s as any).mc_inventory ?? {})['sabotaged_condoms'] ?? 0) - (1);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['normal_condoms'] > 0  &&  ((s as any).preziktype ?? 0) !== 2) {
        ((s as any).mc_inventory ?? {})['normal_condoms'] = (((s as any).mc_inventory ?? {})['normal_condoms'] ?? 0) - (1);
      }
    }
  }
  scene.build();
}

function enterYourCondom(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['condom'] = 1;
  (s as any).protect = ((((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) ? (1) : (0));
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    if ((Math.floor(Math.random() * (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] - 1 + 1)) + (1)) <= ((s as any).mc_inventory ?? 0)?.['bad_condoms']) {
      ((s as any).mc_inventory ?? {})['bad_condoms'] = (((s as any).mc_inventory ?? {})['bad_condoms'] ?? 0) - (1);
      (s as any).noprotect = 1;
      (s as any).sexcontra = Math.floor(Math.random() * 2) + 4;
    } else {
      (s as any).sexcontra = 3;
    }
    ((s as any).mc_inventory ?? {})['equipped_condoms'] = (((s as any).mc_inventory ?? {})['equipped_condoms'] ?? 0) - (1);
    if (((s as any).preziktype ?? 0) === 2) {
      (s as any).sexcontra = 7;
      (s as any).noprotect = 1;
    }
  } else {
    (s as any).sexcontra = 0;
  }
  scene.build();
}

function enterHisCondom(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 1;
  (s as any).sexcontra = 3;
  // TODO-QSP: *p '<<ucase(mid($bwa_boy,1,1))>><<mid($bwa_boy,2,len($bwa_boy)-1)>> takes his condom and puts it on ...
  scene.build();
}

function enterDarkness(s: GameState, scene: SceneBuilder): void {
  (s as any).fcolor = 0;
  (s as any).bcolor = 0;
  (s as any).lcolor = 0;
  scene.build();
}

function enterParameters(s: GameState, scene: SceneBuilder): void {
  (s as any).protect = 0;
  (s as any).sexcontra = 0;
  qspCall(s, 'npcgeneratec', '', 0, 'client', Math.floor(Math.random() * 48) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  if (((s as any).hour ?? 0) > 19  ||  ((s as any).hour ?? 0) < 7) {
  }
  qspCall(s, 'prostitution_functions', 'std_cum_check');
  if ((Math.floor(Math.random() * 10) + 1) === 10) {
    ((s as any).prostitute ?? {})['mesec_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['mesec_mod'] = 0;
  }
  if ((Math.floor(Math.random() * 100) + 1) > 97) {
    ((s as any).prostitute ?? {})['dirty_anal_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['dirty_anal_mod'] = 0;
  }
  if ((Math.floor(Math.random() * 10) + 1) === 10) {
    ((s as any).prostitute ?? {})['cum_visible_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['cum_visible_mod'] = 0;
  }
  if (((s as any).vidage ?? 0) < 18  &&  (Math.floor(Math.random() * 10) + 1) < 7) {
    ((s as any).prostitute ?? {})['vidage_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['vidage_mod'] = 0;
  }
  (s as any).pro_scene_rand = Math.floor(Math.random() * 100) + 1;
  if (((s as any).pro_scene_rand ?? 0) <= 50) {
    if (((s as any).mesec ?? 0) === 0  ||  ((s as any).prostitute ?? 0)?.['mesec_mod'] === 1) {
      ((s as any).prostitute ?? {})['client_scene'] = 'Vaginal';
    } else {
      if (((s as any).mesec ?? 0) > 0  &&  ((s as any).prostitute ?? 0)?.['mesec_mod'] === 0  &&  (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  ||  ((s as any).prostitute ?? 0)?.['dirty_anal_mod'] === 1)) {
        ((s as any).prostitute ?? {})['client_scene'] = 'Anal';
      } else {
        ((s as any).prostitute ?? {})['client_scene'] = 'Blowjob';
      }
    }
  } else {
    if (((s as any).pro_scene_rand ?? 0) > 50  &&  ((s as any).pro_scene_rand ?? 0) <= 75) {
      if (((s as any).klismaday ?? 0) === ((s as any).daystart ?? 0)  ||  ((s as any).prostitute ?? 0)?.['dirty_anal_mod'] === 1) {
        ((s as any).prostitute ?? {})['client_scene'] = 'Anal';
      } else {
        if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).prostitute ?? 0)?.['dirty_anal_mod'] === 0  &&  (((s as any).mesec ?? 0) === 0  ||  ((s as any).prostitute ?? 0)?.['mesec_mod'] === 1)) {
          ((s as any).prostitute ?? {})['client_scene'] = 'Vaginal';
        } else {
          ((s as any).prostitute ?? {})['client_scene'] = 'Blowjob';
        }
      }
    } else {
      ((s as any).prostitute ?? {})['client_scene'] = 'Blowjob';
    }
  }
  if (((s as any).prostitute ?? 0)?.['customer_total'] < 10) {
    ((s as any).prostitute ?? {})['regular_chance'] = 0;
  } else {
    if (((s as any).prostitute ?? 0)?.['customer_total'] >= 10  &&  ((s as any).prostitute ?? 0)?.['customer_total'] <= 25) {
      ((s as any).prostitute ?? {})['regular_chance'] = 1;
    } else {
      if (((s as any).prostitute ?? 0)?.['customer_total'] > 25  &&  ((s as any).prostitute ?? 0)?.['customer_total'] <= 50) {
        ((s as any).prostitute ?? {})['regular_chance'] = 2;
      } else {
        if (((s as any).prostitute ?? 0)?.['customer_total'] > 50  &&  ((s as any).prostitute ?? 0)?.['customer_total'] <= 100) {
          ((s as any).prostitute ?? {})['regular_chance'] = 3;
        } else {
          if (((s as any).prostitute ?? 0)?.['customer_total'] > 100  &&  ((s as any).prostitute ?? 0)?.['customer_total'] <= 250) {
            ((s as any).prostitute ?? {})['regular_chance'] = 4;
          }
        }
      }
    }
  }
  ((s as any).prostitute ?? {})['client_chance'] = ((s as any).pcs_hotcat ?? 0) * 10 + ((s as any).prostitute ?? {})?.['regular_chance'] * 5 + ((s as any).rand ?? 0)(1, 100) + ((s as any).prostitute ?? {})?.['pity_counter'];
  if (((s as any).pantyworntype ?? 0) === 'eroto'  &&  ((s as any).PCloSkirt ?? 0) > 4) {
    ((s as any).prostitute ?? {})['client_chance'] = (((s as any).prostitute ?? {})['client_chance'] ?? 0) + (10);
  }
  if (((s as any).prostitute ?? 0)?.['regular_timer'] !== ((s as any).daystart ?? 0)  &&  ((s as any).prostitute ?? 0)?.['client_scene'] !== 'Blowjob') {
    if ((((s as any).prostitute ?? 0)?.['regular_chance'] === 1  &&  (Math.floor(Math.random() * 100) + 1) > 95)  ||  (((s as any).prostitute ?? 0)?.['regular_chance'] === 2  &&  (Math.floor(Math.random() * 100) + 1) > 90)  ||  (((s as any).prostitute ?? 0)?.['regular_chance'] === 3  &&  (Math.floor(Math.random() * 100) + 1) > 80)  ||  (((s as any).prostitute ?? 0)?.['regular_chance'] === 4  &&  (Math.floor(Math.random() * 100) + 1) > 60)) {
      ((s as any).prostitute ?? {})['regular'] = 1;
    } else {
      ((s as any).prostitute ?? {})['regular'] = 0;
    }
  } else {
    ((s as any).prostitute ?? {})['regular'] = 0;
  }
  if (((s as any).prostitute ?? 0)?.['regular'] === 0  &&  ((s as any).prostitute ?? 0)?.['rough'] === 0  &&  ((s as any).prostitute ?? 0)?.['std_mod'] === 0  &&  (Math.floor(Math.random() * 100) + 1) > ((s as any).iif ?? 0)(((s as any).pro_brand ?? 0)?.['text_pubic'] === 'cumslut', 84, 92)) {
    ((s as any).prostitute ?? {})['client_creampie'] = 1;
  } else {
    ((s as any).prostitute ?? {})['client_creampie'] = 0;
  }
  if (((s as any).prostitute ?? 0)?.['rough'] === 1  ||  (((s as any).prostitute ?? 0)?.['rough'] === 0  &&  (Math.floor(Math.random() * 100) + 1) > 40)) {
    ((s as any).prostitute ?? {})['propose'] = 0;
  } else {
    ((s as any).prostitute ?? {})['propose'] = 1;
  }
  scene.build();
}

function enterSolicitationEffort(s: GameState, scene: SceneBuilder): void {
  (s as any).cost = qspUntranslated(s, "ARGS[1]", { location: "prostitution_functions" });
  ((s as any).prostitute ?? {})['skin_penalty'] = (((s as any).prostitute ?? {})['skin_penalty'] ?? 0) + (5);
  if (((s as any).temper ?? 0) < 15) {
    ((s as any).prostitute ?? {})['skin_penalty'] = (((s as any).prostitute ?? {})['skin_penalty'] ?? 0) + (5);
  }
  if (((s as any).temper ?? 0) > 25) {
    ((s as any).prostitute ?? {})['skin_penalty'] = (((s as any).prostitute ?? {})['skin_penalty'] ?? 0) + (5);
  }
  if (((s as any).cost ?? 0) <= ((s as any).willpowermax ?? 0) / 4) {
    ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (5);
  } else {
    if (((s as any).cost ?? 0) <= ((s as any).willpowermax ?? 0) / 3) {
      ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (10);
    } else {
      if (((s as any).cost ?? 0) <= ((s as any).willpowermax ?? 0) / 2) {
        ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (15);
      } else {
        ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (20);
      }
    }
  }
  scene.build();
}

function enterClientEffort(s: GameState, scene: SceneBuilder): void {
  if (((s as any).client_type ?? 0) === 'nice') {
    ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (5);
  } else {
    if (((s as any).client_type ?? 0) === 'normal') {
      ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (10);
    } else {
      if (((s as any).client_type ?? 0) === 'abusive') {
        ((s as any).prostitute ?? {})['age_mod'] = (((s as any).prostitute ?? {})['age_mod'] ?? 0) + (20);
      }
    }
  }
  scene.build();
}

function enterDailyEffects(s: GameState, scene: SceneBuilder): void {
  if (((s as any).prostitute ?? 0)?.['age_mod'] >= 100) {
    (s as any).temp_age_mod_remain = qspUntranslated(s, "prostitute['age_mod'] MOD 100", { location: "prostitution_functions" });
    (s as any).vidageday = ((s as any).vidageday ?? 0) - (((((s as any).prostitute ?? {})?.['age_mod'] - ((s as any).temp_age_mod_remain ?? 0)) / 100));
    ((s as any).prostitute ?? {})['age_mod'] = ((s as any).temp_age_mod_remain ?? 0);
  }
  if (((s as any).prostitute ?? 0)?.['skin_penalty'] >= 100) {
    (s as any).temp_skin_remain = qspUntranslated(s, "prostitute['skin_penalty'] MOD 100", { location: "prostitution_functions" });
    (s as any).skinDailyPenalty = ((s as any).skinDailyPenalty ?? 0) + (((((s as any).prostitute ?? {})?.['skin_penalty'] - ((s as any).temp_skin_remain ?? 0)) / 100));
    ((s as any).prostitute ?? {})['skin_penalty'] = ((s as any).temp_skin_remain ?? 0);
  }
  scene.build();
}

function enterPayment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'pav') {
    if (((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob') {
      ((s as any).prostitute ?? {})['payment'] = 425;
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_scene'] === 'anal') {
        ((s as any).prostitute ?? {})['payment'] = 1200;
      } else {
        ((s as any).prostitute ?? {})['payment'] = 1000;
      }
    }
  } else {
    if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob') {
      ((s as any).prostitute ?? {})['payment'] = 350;
      if (((s as any).locArgs?.[1] ?? 0) === 'condom_no') {
        ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (75);
      }
      if (((s as any).locArgs?.[2] ?? 0) === 'inside_yes') {
        ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (50);
      }
    } else {
      if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
        ((s as any).prostitute ?? {})['payment'] = 700;
        if (((s as any).locArgs?.[1] ?? 0) === 'condom_no') {
          ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (300);
        }
        if (((s as any).locArgs?.[2] ?? 0) === 'inside_yes') {
          ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (300);
        }
      } else {
        if (((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
          ((s as any).prostitute ?? {})['payment'] = 900;
          if (((s as any).locArgs?.[1] ?? 0) === 'condom_no') {
            ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (200);
          }
          if (((s as any).locArgs?.[2] ?? 0) === 'inside_yes') {
            ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (100);
          }
        }
      }
    }
  }
  ((s as any).prostitute ?? {})['payment_mod'] = ((s as any).pcs_hotcat ?? 0) * 10;
  if ((!((s as any).pcs_makeup ?? 0))) {
    ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) - (20);
  } else {
    if (((s as any).pcs_makeup ?? 0) > 1) {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (((s as any).pcs_makeup ?? 0) * 10);
    }
  }
  if (((s as any).mesec ?? 0) > 0  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Vaginal') {
    if (((s as any).prostitute ?? 0)?.['mesec_mod'] === 0) {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) - (200);
    } else {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (300);
    }
  }
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).prostitute ?? 0)?.['client_scene'] === 'Anal') {
    if (((s as any).prostitute ?? 0)?.['dirty_anal_mod'] === 0) {
      if (((s as any).locArgs?.[1] ?? 0) === 'condom_no') {
        ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) - (600);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'condom_yes') {
          ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) - (300);
        }
      }
    } else {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (300);
    }
  }
  if (((s as any).prostitute ?? 0)?.['cum_dressed'] === 1) {
    if (((s as any).prostitute ?? 0)?.['cum_visible_mod'] === 0) {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) - (200);
    } else {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (300);
    }
  }
  ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (((s as any).pcs_mood ?? 0) - 50);
  if (((s as any).pantyworntype ?? 0) === 'eroto'  &&  ((s as any).PCloSkirt ?? 0) > 4) {
    ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (50);
  }
  if (((s as any).prostitute ?? 0)?.['vidage_mod'] === 1) {
    ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (50 * (18 - ((s as any).vidage ?? 0)));
  } else {
    ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) - (50 * (18 - ((s as any).vidage ?? 0)));
  }
  if ((((s as any).prostitute ?? 0)?.['client_scene'] === 'Blowjob')  ||  (((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob')) {
    ((s as any).prostitute ?? {})['payment_mod'] = ((s as any).prostitute ?? {})?.['payment_mod'] / 2;
    if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 2) {
      ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (50);
    } else {
      if (((s as any).pcs_piercings ?? 0)?.['tongue'] === 4) {
        ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (75);
      } else {
        if (((s as any).pcs_piercings ?? 0)?.['tongue'] > 0) {
          ((s as any).prostitute ?? {})['payment_mod'] = (((s as any).prostitute ?? {})['payment_mod'] ?? 0) + (25);
        }
      }
    }
  }
  ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})['payment'] ?? 0) + (((s as any).prostitute ?? 0)?.['payment_mod']);
  ((s as any).prostitute ?? {})['payment_backup'] = ((s as any).prostitute ?? 0)?.['payment'];
  ((s as any).prostitute ?? {})['payment'] = (((s as any).prostitute ?? {})?.['payment'] * (100 + ((s as any).prostitute ?? {})?.['client_satisfaction'])) / 100;
  ((s as any).prostitute ?? {})['payment'] = qspFunc(s, 'math', 'int_round', ((s as any).prostitute ?? 0)?.['payment'], 10);
  ((s as any).prostitute ?? {})['payment_backup'] = qspFunc(s, 'math', 'int_round', ((s as any).prostitute ?? 0)?.['payment_backup'], 10);
  scene.build();
}

function enterAbortion(s: GameState, scene: SceneBuilder): void {
  (s as any).abort = ((s as any).abort ?? 0) + (1);
  (s as any).abortionbirthdate = ((s as any).daystart ?? 0);
  qspCall(s, 'medical_din', 'remove_preg');
  (s as any).knowpregloss = 1;
  (s as any).abortrand = Math.floor(Math.random() * 11) + 0;
  if (((s as any).age ?? 0) > 18) {
    if (((s as any).abortrand ?? 0) < 10) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (1);
    }
    if (((s as any).abortrand ?? 0) === 10) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (10);
    }
  } else {
    if (((s as any).abortrand ?? 0) < 7) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (2);
    }
    if (((s as any).abortrand ?? 0) >= 7) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (10);
    }
  }
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  if (((s as any).broodcurse ?? 0) > 0) {
    // TODO-QSP: gt 'gameover', 'force', 13
  }
  scene.build();
}

function enterRandomName(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $pro_boyname[1] = ''
  // TODO-QSP: $pro_boyname[2] = ''
  // TODO-QSP: :pro_rng_jump
  (s as any).temp_pro_roll = Math.floor(Math.random() * 24) + 0;
  if ((!((s as any).temp_pro_roll ?? 0))) {
  } else {
    if (((s as any).temp_pro_roll ?? 0) === 1) {
    } else {
      if (((s as any).temp_pro_roll ?? 0) === 2) {
      } else {
        if (((s as any).temp_pro_roll ?? 0) === 3) {
        } else {
          if (((s as any).temp_pro_roll ?? 0) === 4) {
          } else {
            if (((s as any).temp_pro_roll ?? 0) === 5) {
            } else {
              if (((s as any).temp_pro_roll ?? 0) === 6) {
              } else {
                if (((s as any).temp_pro_roll ?? 0) === 7) {
                } else {
                  if (((s as any).temp_pro_roll ?? 0) === 8) {
                  } else {
                    if (((s as any).temp_pro_roll ?? 0) === 9) {
                    } else {
                      if (((s as any).temp_pro_roll ?? 0) === 10) {
                      } else {
                        if (((s as any).temp_pro_roll ?? 0) === 11) {
                        } else {
                          if (((s as any).temp_pro_roll ?? 0) === 12) {
                          } else {
                            if (((s as any).temp_pro_roll ?? 0) === 13) {
                            } else {
                              if (((s as any).temp_pro_roll ?? 0) === 14) {
                              } else {
                                if (((s as any).temp_pro_roll ?? 0) === 15) {
                                } else {
                                  if (((s as any).temp_pro_roll ?? 0) === 16) {
                                  } else {
                                    if (((s as any).temp_pro_roll ?? 0) === 17) {
                                    } else {
                                      if (((s as any).temp_pro_roll ?? 0) === 18) {
                                      } else {
                                        if (((s as any).temp_pro_roll ?? 0) === 19) {
                                        } else {
                                          if (((s as any).temp_pro_roll ?? 0) === 20) {
                                          } else {
                                            if (((s as any).temp_pro_roll ?? 0) === 21) {
                                            } else {
                                              if (((s as any).temp_pro_roll ?? 0) === 22) {
                                              } else {
                                                if (((s as any).temp_pro_roll ?? 0) === 23) {
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).pro_boyname ?? 0)[1] === '') {
    // TODO-QSP: $pro_boyname[1] = $pro_temp
    // TODO-QSP: jump 'pro_rng_jump'
  } else {
    if (((s as any).pro_boyname ?? 0)[2] === '') {
      // TODO-QSP: $pro_boyname[2] = $pro_temp
    }
  }
  if (((s as any).pro_boyname ?? 0)[1] === ((s as any).pro_boyname ?? 0)[2]) {
    // TODO-QSP: $pro_boyname[2] = ''
    // TODO-QSP: jump 'pro_rng_jump'
  }
  scene.build();
}

function enterTatPierceCount(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pirsingsalon', 'count');
  scene.build();
}

function enterPavClient(s: GameState, scene: SceneBuilder): void {
  ((s as any).prostitute ?? {})['pav_internal'] = 0;
  qspCall(s, 'prostitution_functions', 'std_cum_check');
  if (((s as any).prostitute ?? 0)?.['pav_total'] < 10) {
    ((s as any).prostitute ?? {})['pav_chance'] = 0;
  } else {
    if (((s as any).prostitute ?? 0)?.['pav_total'] >= 10  &&  ((s as any).prostitute ?? 0)?.['pav_total'] <= 25) {
      ((s as any).prostitute ?? {})['pav_chance'] = 1;
    } else {
      if (((s as any).prostitute ?? 0)?.['pav_total'] > 25  &&  ((s as any).prostitute ?? 0)?.['pav_total'] <= 50) {
        ((s as any).prostitute ?? {})['pav_chance'] = 2;
      } else {
        if (((s as any).prostitute ?? 0)?.['pav_total'] > 50  &&  ((s as any).prostitute ?? 0)?.['pav_total'] <= 100) {
          ((s as any).prostitute ?? {})['pav_chance'] = 3;
        } else {
          if (((s as any).prostitute ?? 0)?.['pav_total'] > 100  &&  ((s as any).prostitute ?? 0)?.['pav_total'] <= 250) {
            ((s as any).prostitute ?? {})['pav_chance'] = 4;
          }
        }
      }
    }
  }
  if (((((s as any).prostitute ?? 0)?.['pav_chance'] === 1  &&  (Math.floor(Math.random() * 100) + 1) > 95)  ||  (((s as any).prostitute ?? 0)?.['pav_chance'] === 2  &&  (Math.floor(Math.random() * 100) + 1) > 90)  ||  (((s as any).prostitute ?? 0)?.['pav_chance'] === 3  &&  (Math.floor(Math.random() * 100) + 1) > 80)  ||  (((s as any).prostitute ?? 0)?.['pav_chance'] === 4  &&  (Math.floor(Math.random() * 100) + 1) > 60))  &&  (((s as any).pro_rand ?? 0) !== 8  ||  (((s as any).pro_rand ?? 0) === 8  &&  ((s as any).prostitute ?? 0)?.['pav_regular_s8'] === 1))) {
    ((s as any).prostitute ?? {})['pav_regular'] = 1;
  } else {
    ((s as any).prostitute ?? {})['pav_regular'] = 0;
  }
  ((s as any).prostitute ?? {})['client_behavior'] = (((Math.floor(Math.random() * 100) + 1) < ((s as any).prostitute ?? 0)?.['client_behavior_chance']  ||  ((s as any).prostitute ?? 0)?.['pav_regular'] === -1) ? ('nice') : ('abusive'));
  if (((s as any).pro_rand ?? 0) > 7) {
    ((s as any).prostitute ?? {})['pav_scene'] = 'anal';
  } else {
    if (((s as any).mesec ?? 0) === 0  &&  (Math.floor(Math.random() * 101) + 0) < 50) {
      ((s as any).prostitute ?? {})['pav_scene'] = 'pussy';
    } else {
      ((s as any).prostitute ?? {})['pav_scene'] = 'blowjob';
    }
  }
  if (((s as any).pro_rand ?? 0) === 0  ||  ((s as any).pro_rand ?? 0) === 8  ||  ((s as any).pro_rand ?? 0) === 9  ||  ((((s as any).pro_rand ?? 0) === 2  ||  ((s as any).pro_rand ?? 0) === 3  ||  (((s as any).pro_rand ?? 0) === 5  &&  ((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice')  ||  ((s as any).pro_rand ?? 0) === 6  ||  ((s as any).pro_rand ?? 0) === 7)  &&  ((s as any).prostitute ?? 0)?.['pav_scene'] === 'pussy')) {
    ((s as any).prostitute ?? {})['pav_location'] = 'private';
    if (((s as any).pro_rand ?? 0) === 3  ||  ((s as any).pro_rand ?? 0) === 8) {
      ((s as any).prostitute ?? {})['client_behavior'] = 'abusive';
    }
  } else {
    if (((s as any).pro_rand ?? 0) === 1  &&  ((s as any).prostitute ?? 0)?.['pav_scene'] === 'pussy') {
      ((s as any).prostitute ?? {})['pav_location'] = ((((s as any).prostitute ?? 0)?.['client_behavior'] === 'nice') ? ('private') : ('public'));
    } else {
      if (((((s as any).pro_rand ?? 0) === 2  ||  ((s as any).pro_rand ?? 0) === 3  ||  ((s as any).pro_rand ?? 0) === 6  ||  ((s as any).pro_rand ?? 0) === 7)  &&  ((s as any).prostitute ?? 0)?.['pav_scene'] === 'blowjob')  ||  ((s as any).pro_rand ?? 0) === 4  ||  ((s as any).pro_rand ?? 0) === 5) {
        ((s as any).prostitute ?? {})['pav_location'] = 'public';
        if (((s as any).pro_rand ?? 0) === 5) {
          ((s as any).prostitute ?? {})['client_behavior'] = 'abusive';
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['prostitution_pavlovsk', 'rng'] }]);
      }
    }
  }
  if (((s as any).prostitute ?? 0)?.['pav_regular_s8'] === 1  &&  ((s as any).pro_rand ?? 0) === 8) {
    ((s as any).prostitute ?? {})['pav_regular'] = 1;
  }
  if ((((s as any).pro_rand ?? 0) === 3  ||  ((s as any).pro_rand ?? 0) === 8)  &&  ((s as any).prostitute ?? 0)?.['pav_scene'] === 'private'  &&  ((s as any).prostitute ?? 0)?.['pav_regular'] === 1) {
    ((s as any).prostitute ?? {})['pav_condom_refusal'] = 1;
  } else {
    ((s as any).prostitute ?? {})['pav_condom_refusal'] = 0;
  }
  qspCall(s, 'npcgeneratec', '', 0, 'pavlovsk client', Math.floor(Math.random() * 28) + 18);
  qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
  scene.build();
}

function enterStdCumCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_apprnc ?? 0) === -10  &&  (Math.floor(Math.random() * 10) + 1) < 8) {
    ((s as any).prostitute ?? {})['std_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['std_mod'] = 0;
  }
  if (((s as any).cumloc ?? 0)[0] === 1) {
    ((s as any).prostitute ?? {})['cum_vaginal_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['cum_vaginal_mod'] = 0;
  }
  if (((s as any).cumloc ?? 0)[3] === 1) {
    ((s as any).prostitute ?? {})['cum_anal_mod'] = 1;
  } else {
    ((s as any).prostitute ?? {})['cum_anal_mod'] = 0;
  }
  if (((s as any).cumloc ?? 0)[7] === 1  ||  ((s as any).cumloc ?? 0)[11] === 1  ||  ((s as any).cumloc ?? 0)[13] === 1  ||  ((s as any).cumloc ?? 0)[15] === 1) {
    ((s as any).prostitute ?? {})['cum_dressed'] = 1;
  } else {
    ((s as any).prostitute ?? {})['cum_dressed'] = 0;
  }
  if (((s as any).cumloc ?? 0)[1] === 1  ||  ((s as any).cumloc ?? 0)[4] === 1  ||  ((s as any).cumloc ?? 0)[8] === 1  ||  ((s as any).cumloc ?? 0)[14] === 1  ||  ((s as any).cumloc ?? 0)[16] === 1) {
    ((s as any).prostitute ?? {})['cum_undressed'] = 1;
  } else {
    ((s as any).prostitute ?? {})['cum_undressed'] = 0;
  }
  scene.build();
}

function enterExactRound(s: GameState, scene: SceneBuilder): void {
  (s as any).result = qspFunc(s, 'math', 'int_round', qspUntranslated(s, "ARGS[1]", { location: "prostitution_functions" }), qspUntranslated(s, "ARGS[2]", { location: "prostitution_functions" }));
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_pavlovsk_hours':
      enterSetPavlovskHours(s, scene);
      break;
    case 'wl_block':
      enterWlBlock(s, scene);
      break;
    case 'check_for_wlife':
      enterCheckForWlife(s, scene);
      break;
    case 'update_prostitution_locations':
      enterUpdateProstitutionLocations(s, scene);
      break;
    case 'set_pavlovsk_prostitute':
      enterSetPavlovskProstitute(s, scene);
      break;
    case 'set_gadukino_prostitute':
      enterSetGadukinoProstitute(s, scene);
      break;
    case 'set_highway_prostitute':
      enterSetHighwayProstitute(s, scene);
      break;
    case 'prostitute_work_hours':
      enterProstituteWorkHours(s, scene);
      break;
    case 'is_solicitation_location':
      enterIsSolicitationLocation(s, scene);
      break;
    case 'prostitute_outfit_at_home':
      enterProstituteOutfitAtHome(s, scene);
      break;
    case 'random_approach_chance':
      enterRandomApproachChance(s, scene);
      break;
    case 'work_clothes':
      enterWorkClothes(s, scene);
      break;
    case 'is_default':
      enterIsDefault(s, scene);
      break;
    case 'set_default_outfit':
      enterSetDefaultOutfit(s, scene);
      break;
    case 'clearing_default_outfit':
      enterClearingDefaultOutfit(s, scene);
      break;
    case 'change_into_prostitute_outfit':
      enterChangeIntoProstituteOutfit(s, scene);
      break;
    case 'change_into_regular_clothes':
      enterChangeIntoRegularClothes(s, scene);
      break;
    case 'change_to_work':
      enterChangeToWork(s, scene);
      break;
    case 'change_back':
      enterChangeBack(s, scene);
      break;
    case 'check_solicitation_event':
      enterCheckSolicitationEvent(s, scene);
      break;
    case 'will_unprotected':
      enterWillUnprotected(s, scene);
      break;
    case 'will_rimming':
      enterWillRimming(s, scene);
      break;
    case 'will_atm':
      enterWillAtm(s, scene);
      break;
    case 'std_check':
      enterStdCheck(s, scene);
      break;
    case 'std_check_oral':
      enterStdCheckOral(s, scene);
      break;
    case 'remove_condom':
      enterRemoveCondom(s, scene);
      break;
    case 'your_condom':
      enterYourCondom(s, scene);
      break;
    case 'his_condom':
      enterHisCondom(s, scene);
      break;
    case 'darkness':
      enterDarkness(s, scene);
      break;
    case 'parameters':
      enterParameters(s, scene);
      break;
    case 'solicitation_effort':
      enterSolicitationEffort(s, scene);
      break;
    case 'client_effort':
      enterClientEffort(s, scene);
      break;
    case 'daily_effects':
      enterDailyEffects(s, scene);
      break;
    case 'payment':
      enterPayment(s, scene);
      break;
    case 'abortion':
      enterAbortion(s, scene);
      break;
    case 'random_name':
      enterRandomName(s, scene);
      break;
    case 'tat_pierce_count':
      enterTatPierceCount(s, scene);
      break;
    case 'pav_client':
      enterPavClient(s, scene);
      break;
    case 'std_cum_check':
      enterStdCumCheck(s, scene);
      break;
    case 'exact_round':
      enterExactRound(s, scene);
      break;
    default:
      enterSetPavlovskHours(s, scene);
      break;
  }
}

export const prostitution_functions: LocationDef = {
  name: 'prostitution_functions',
  title: 'Unavailable as your outfit is too small!',
  region: 'other',
  enter: enter,
};
