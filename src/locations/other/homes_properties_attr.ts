import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).train_station ?? {}).length < 1) {
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['city'] = 'gt \'city_center\'';
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['pav'] = 'gt \'pav_market\'';
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['pav_park'] = 'gt \'pav_market\'';
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['pushkin'] = 'gt \'pushkin_sq\'';
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['gad'] = 'gt \'train\', \'village\'';
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['gad_forest'] = 'gt \'train\', \'village\'';
    if (!(s as any).train_station) (s as any).train_station = {}; (s as any).train_station['dachi'] = 'gt \'train\', \'communal\'';
  }
  if (Object.keys((s as any).homes ?? {}).length < 18) {
    // TODO-QSP: $homes[] = 'city_apartment'
    // TODO-QSP: $homes[] = 'parents_home'
    // TODO-QSP: $homes[] = 'village_cottage'
    // TODO-QSP: $homes[] = 'old_town_apartment'
    // TODO-QSP: $homes[] = 'matryona_mansion'
    // TODO-QSP: $homes[] = 'pavlovsk_hotel'
    // TODO-QSP: $homes[] = 'maid_bedroom'
    // TODO-QSP: $homes[] = 'niko_apartment'
    // TODO-QSP: $homes[] = 'vasilyhome'
    // TODO-QSP: $homes[] = 'lyceum_dorm'
    // TODO-QSP: $homes[] = 'university_dorm'
    // TODO-QSP: $homes[] = 'hunters_lodge'
    // TODO-QSP: $homes[] = 'shared_apartment'
    // TODO-QSP: $homes[] = 'grandparents_house'
    // TODO-QSP: $homes[] = 'city_house'
    // TODO-QSP: $homes[] = 'meynold_household'
    // TODO-QSP: $homes[] = 'hotel_therapist'
    // TODO-QSP: $homes[] = 'pushkin_ballet_dorm'
  }
  if (Object.keys((s as any).home_name ?? {}).length < 4) {
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_apartment'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['1'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['korr'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['bedr'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['sitr'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['kuhr'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['vanr'] = 'city_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['parents_home'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['2'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['code'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['korrPar'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['bedrPar'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['sitrPar'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['kuhrPar'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['vanrPar'] = 'parents_home';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['village_cottage'] = 'village_cottage';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['3'] = 'village_cottage';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['dachamy'] = 'village_cottage';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['dachain'] = 'village_cottage';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['dachaogr'] = 'village_cottage';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['dachaogr0'] = 'village_cottage';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['old_town_apartment'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['4'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['korr2x'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['bedr2x'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['sitr2x'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['kuhr2x'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['vanr2x'] = 'old_town_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['matryona_mansion'] = 'matryona_mansion';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['5'] = 'matryona_mansion';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_mansion_entrance'] = 'matryona_mansion';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_mansion_residence_1'] = 'matryona_mansion';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_mansion_residence_2'] = 'matryona_mansion';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_mansion_residence_3'] = 'matryona_mansion';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['pavlovsk_hotel'] = 'pavlovsk_hotel';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['6'] = 'pavlovsk_hotel';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['pav_hotel'] = 'pavlovsk_hotel';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['HotelRoom'] = 'pavlovsk_hotel';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['maid_bedroom'] = 'maid_bedroom';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['7'] = 'maid_bedroom';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['nichBedroomServant'] = 'maid_bedroom';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['niko_apartment'] = 'niko_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['8'] = 'niko_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['shulga_apartment'] = 'vasilyhome';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['9'] = 'vasilyhome';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['vasilyhome'] = 'vasilyhome';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['lyceum_dorm'] = 'lyceum_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['10'] = 'lyceum_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['dom_gor'] = 'lyceum_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['university_dorm'] = 'university_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['11'] = 'university_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['uni_grounds'] = 'university_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['uni_dorm'] = 'university_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['hunters_lodge'] = 'hunters_lodge';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['12'] = 'hunters_lodge';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['gad_swamphouse'] = 'hunters_lodge';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['gad_swamp_yard'] = 'hunters_lodge';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['shared_apartment'] = 'shared_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['13'] = 'shared_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['pav_shared_apt'] = 'shared_apartment';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['grandparents_house'] = 'grandparents_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['14'] = 'grandparents_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['gad_gpyard'] = 'grandparents_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['gad_gpbath'] = 'grandparents_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['gad_gphouse'] = 'grandparents_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['gad_gpbarn'] = 'grandparents_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_house'] = 'city_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['15'] = 'city_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_house_res_misc'] = 'city_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_house_res_bath'] = 'city_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_house_re_bedr'] = 'city_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['city_house-res_kitch'] = 'city_house';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['meynold_household'] = 'meynold_household';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['16'] = 'meynold_household';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['mey_home'] = 'meynold_household';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['hotel_therapist'] = 'hotel_therapist';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['17'] = 'hotel_therapist';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['pushkin_ballet_dorm'] = 'pushkin_ballet_dorm';
    if (!(s as any).home_name) (s as any).home_name = {}; (s as any).home_name['18'] = 'pushkin_ballet_dorm';
  }
  scene.build();
}

function enterGetPropertyAttr(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'city_apartment') {
    if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 1;
    if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
    if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'City residential apartment';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'apartment in St. Petersburg\'s residential area';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'city';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'city';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'city_residential';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'korr';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = '';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'vanr';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = '';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'bedr';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = '';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
    if (!(s as any).property) (s as any).property = {}; (s as any).property['price'] = 800000;
    if (!(s as any).property) (s as any).property = {}; (s as any).property['rent'] = 15000;
    if (!(s as any).property) (s as any).property = {}; (s as any).property['rental'] = 1;
    if (!(s as any).property) (s as any).property = {}; (s as any).property['internet_enabled'] = 1;
    if (!(s as any).property) (s as any).property = {}; (s as any).property['can_be_renovated'] = 1;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'parents_home') {
      if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 2;
      if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
      if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Parent\'s home in Pavlovsk';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'parent\'s home in Pavlovsk';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_complex';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = 'start';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'korrPar';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'start';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'vanrPar';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = '';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'bedrPar';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'start';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
      if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'village_cottage') {
        if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 3;
        if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
        if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'My cottage in the cooperative village';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'cottage located in the cooperative village';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'other';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'dachi';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'dachamy';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'dachamy';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = '';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'dachain';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'dachabath';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'dachain';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'start';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
        if (!(s as any).property) (s as any).property = {}; (s as any).property['price'] = 150000;
        if (!(s as any).property) (s as any).property = {}; (s as any).property['internet_enabled'] = 0;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'old_town_apartment') {
          if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 4;
          if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
          if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Old town apartment';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'apartment in the old town of Pushkin';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pushkin';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pushkin';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pushkin_sq';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'korr2x';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = '';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'vanr2x';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = '';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'bedr2x';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = '';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
          if (!(s as any).property) (s as any).property = {}; (s as any).property['rental'] = 1;
          if (!(s as any).property) (s as any).property = {}; (s as any).property['rent'] = 10000;
          if (!(s as any).property) (s as any).property = {}; (s as any).property['internet_enabled'] = 1;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'matryona_mansion') {
            if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 5;
            if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
            if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Matryona mansion';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['display_0'] = 'plot of land in the St. Petersburg\'s suburbs';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['display_1'] = 'impressive mansion under construction in the St. Petersburg\'s suburbs';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['display_2'] = 'impressive mansion in the St. Petersburg\'s suburbs';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = ((s as any).property ?? 0)?.['display_' + String(((s as any).accessible_property ?? 0)?.[String(qspUntranslated(s, "args[1]", { location: "homes_properties_attr" })) + '-construction-status'])];
            if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'city';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'city';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'city_mansion_entrance';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'city_mansion_residence_1';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'yfoyer';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'city_mansion_residence_1';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'ybathroom';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'city_mansion_residence_1';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'ybedroom';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
            if (!(s as any).property) (s as any).property = {}; (s as any).property['price'] = 1500000;
            if (!(s as any).property) (s as any).property = {}; (s as any).property['internet_enabled'] = 1;
            if (!(s as any).property) (s as any).property = {}; (s as any).property['construction_needed'] = 1;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'pavlovsk_hotel') {
              if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 6;
              if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
              if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'My hotel room in Pavlovsk';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'hotel room in Pavlovsk';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_market';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'pav_hotel';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = '';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'HotelRoom';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'shower1';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'HotelRoom';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'normal';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
              if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'maid_bedroom') {
                if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 7;
                if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Nicholas\' Apartment';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'maid bedroom in Nicholas\' apartment';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'city';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'city';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'city_center';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'nichBedroomServant';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'start';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'nichBathServant';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = '';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'nichBedroomServant';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'start';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
                if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'niko_apartment') {
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 8;
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Niko\'s apartment';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'Niko\'s apartment';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_residential';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'pav_residential';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = '';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'pav_residential';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = '';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'pav_residential';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = '';
                  if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                } else {
                  if (((s as any).locArgs?.[1] ?? 0) === 'shulga_apartment') {
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 9;
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Uncle Sergey\'s apartment';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'Uncle Sergey\'s apartment';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_complex';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = 'start';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'vasilyhome';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'hallway';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'vasilyhome';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'bathroom';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'vasilyhome';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'vasily_room';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                    if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
                  } else {
                    if (((s as any).locArgs?.[1] ?? 0) === 'lyceum_dorm') {
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 10;
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Lyceum school';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'room in the Lyceum dorm';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_commercial';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'ETO_hostel';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'town_hostel';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'ETO_hostel';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'shared_bathroom';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'dom_gor';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = '';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
                      if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
                    } else {
                      if (((s as any).locArgs?.[1] ?? 0) === 'university_dorm') {
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 11;
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'University halls';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'room in the university dorm';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'city';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'city';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'city_island';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'uni_dorm';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'dorm_room';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'uni_dorm';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'womens_restroom';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'uni_dorm';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'dorm_room';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
                        if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 'hunters_lodge') {
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 12;
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Hunter\'s lodge in Gadukino';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'hunter\'s lodge in Gadukino';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'gad_forest';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'gadukino';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'gad_swamp_yard';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = 'start';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'gad_swamphouse';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'start';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'gad_swamphouse';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'washstand';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'gad_swamphouse';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'start';
                          if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 'shared_apartment') {
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 13;
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Shared apartment in Pavlovsk';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'shared apartment in Pavlovsk';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_complex';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = 'start';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'pav_shared_apt';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'start';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'pav_shared_apt';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'bathroom';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'pav_shared_apt';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'pcsRoom';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                            if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 'grandparents_house') {
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 14;
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Grandparent\'s house in Gadukino';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'grandparent\'s house in Gadukino';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'gad';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'gadukino';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'gad_gpyard';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = 'start';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'gad_gpyard';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'start';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'gad_gpbath';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'start';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'gad_gpbarn';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'barn_room';
                              if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 'city_house') {
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 15;
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'City residential house';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'house in the St. Petersburg\'s residential area';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'city';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'city';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'city_residential';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'city_house_res_misc';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'fronty';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'city_house_res_bathr';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'bathr';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'city_house_res_bedr';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'bedro';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'permanent_residence';
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['price'] = 800000;
                                if (!(s as any).property) (s as any).property = {}; (s as any).property['internet_enabled'] = 1;
                              } else {
                                if (((s as any).locArgs?.[1] ?? 0) === 'meynold_household') {
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 16;
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Meynold Household';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'the Meynold Household';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_residential';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'mey_home';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'door';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'mey_home';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'bathroom';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'mey_home';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'guest_bedroom';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                                  if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
                                } else {
                                  if (((s as any).locArgs?.[1] ?? 0) === 'hotel_therapist') {
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 17;
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Pavlovsk Hotel Room';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'husband\'s hotel room';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pav';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pavlovsk';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pav_residential';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'pav_hotel';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = '';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'HotelRoom';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'shower1';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'HotelRoom';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'therapist';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                                    if (!(s as any).property) (s as any).property = {}; (s as any).property['free_internet'] = 1;
                                  } else {
                                    if (((s as any).locArgs?.[1] ?? 0) === 'pushkin_ballet_dorm') {
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['id'] = 18;
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['code'] = ((s as any).locArgs?.[1] ?? 0);
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['name'] = 'Pushkin Ballet Dorm';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['display'] = 'ballet dorm';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['region'] = 'pushkin';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['town'] = 'pushkin';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['location'] = 'pushkin_sq';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['location_arg'] = '';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance'] = 'pushkin_ballet_center';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['entrance_arg'] = 'start';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom'] = 'pushkin_ballet_class';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bathroom_arg'] = 'shower';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom'] = 'pushkin_ballet_res';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['bedroom_arg'] = 'bedroom';
                                      if (!(s as any).property) (s as any).property = {}; (s as any).property['type'] = 'temporary_residence';
                                    } else {
                                      if (Object.keys((s as any).home_property_attr_calls ?? {}).length > 0) {
                                        (s as any).i = 0;
                                        // TODO-QSP: :mod_get_property_attr_calls_loop
                                        (s as any).temp_app_loc = qspUntranslated(s, "instr(mid(home_property_attr_calls[i], 3), \"'\")", { location: "homes_properties_attr" });
                                        if (((s as any).loc ?? 0)(((s as any).temp_loc_name ?? 0))) {
                                          // TODO-QSP: dynamic "gs <<$home_property_attr_calls[i]>>"
                                        }
                                        (s as any).i = ((s as any).i ?? 0) + (1);
                                        if (((s as any).i ?? 0) < Object.keys((s as any).home_property_attr_calls ?? {}).length  &&  ((s as any).property ?? 0)?.['code'] !== ((s as any).locArgs?.[1] ?? 0)) {
                                          // TODO-QSP: jump 'mod_get_property_attr_calls_loop'
                                        }
                                        if (((s as any).property ?? 0)?.['code'] !== ((s as any).locArgs?.[1] ?? 0)) {
                                          // TODO-QSP: killvar 'property'
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
  // TODO-QSP: end
  scene.build();
}

function enterGetPropertyAttribute(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties_attr', 'get_property_attr', ((s as any).name ?? 0));
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(1))) === '$') {
  } else {
    (s as any).result = ((s as any).property ?? 0)?.[((s as any).locArgs?.[1] ?? 0)];
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegisterModGetPropertyAttributeCall(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).home_property_attr_calls) ? ((s as any).home_property_attr_calls as any[]).indexOf(((s as any).temp_hpac ?? 0)) : -1) < 0) {
    // TODO-QSP: $home_property_attr_calls[] = $temp_hpac
  }
  // TODO-QSP: end
  scene.build();
}

function enterRemoveModGetPropertyAttributeCall(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_hpacVars) (s as any).temp_hpacVars = {}; (s as any).temp_hpacVars['call'] = qspUntranslated(s, "trim(ARGS[1])", { location: "homes_properties_attr" });
  if (!(s as any).temp_hpacVars) (s as any).temp_hpacVars = {}; (s as any).temp_hpacVars['pos'] = qspUntranslated(s, "arrpos('home_property_attr_calls', temp_hpacVars['call'])", { location: "homes_properties_attr" });
  if (((s as any).temp_hpacVars ?? 0)?.['pos'] >= 0) {
    if (!(s as any).temp_hpacVars) (s as any).temp_hpacVars = {}; (s as any).temp_hpacVars['loc'] = qspUntranslated(s, "instr(mid(temp_hpacVars['call'], 3), \"'\")", { location: "homes_properties_attr" });
    if (!(s as any).temp_hpacVars) (s as any).temp_hpacVars = {}; (s as any).temp_hpacVars['name'] = qspUntranslated(s, "mid(temp_hpacVars['call'], 2, temp_hpacVars['loc'])", { location: "homes_properties_attr" });
    if (((s as any).loc ?? 0)(((s as any).temp_hpacVars ?? 0)?.['name'])) {
      // TODO-QSP: dynamic "gs <<$temp_hpacVars['call']>>"
      if (((s as any).home ?? 0)?.['current'] === ((s as any).property ?? 0)?.['code']) {
        qspCall(s, 'homes_properties', 'set_homeless');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddNewHomeLocation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home_name ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === ''  &&  ((s as any).locArgs?.[3] ?? 0) === '') {
      // TODO-QSP: $home_name[$ARGS[1]] = ''
    } else {
      if (((s as any).locArgs?.[2] ?? 0) !== '') {
        // TODO-QSP: $home_name[$ARGS[1]] = $ARGS[2]
        if ((Array.isArray((s as any).homes) ? ((s as any).homes as any[]).indexOf(((s as any).locArgs?.[2] ?? 0)) : -1) < 0) {
          // TODO-QSP: $homes[] = $ARGS[2]
        }
      } else {
        // TODO-QSP: $home_name[$ARGS[1]] = $home_name[$ARGS[3]]
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddNewTrainStation(s: GameState, scene: SceneBuilder): void {
  if (((s as any).train_station ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
  } else {
    // TODO-QSP: $train_station[$ARGS[1]] = "gt '<<$ARGS[2]>>', '<<$ARGS[3]>>'"
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_property_attr':
      enterGetPropertyAttr(s, scene);
      break;
    case 'get_property_attribute':
      enterGetPropertyAttribute(s, scene);
      break;
    case 'register_mod_get_property_attribute_call':
      enterRegisterModGetPropertyAttributeCall(s, scene);
      break;
    case 'remove_mod_get_property_attribute_call':
      enterRemoveModGetPropertyAttributeCall(s, scene);
      break;
    case 'add_new_home_location':
      enterAddNewHomeLocation(s, scene);
      break;
    case 'add_new_train_station':
      enterAddNewTrainStation(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const homes_properties_attr: LocationDef = {
  name: 'homes_properties_attr',
  region: 'other',
  enter: enter,
};
