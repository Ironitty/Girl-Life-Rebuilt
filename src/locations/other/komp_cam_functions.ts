import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMFCInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Actives'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Passives'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Outsiders'] = ((s as any).camConst ?? 0)?.['MFC_N'];
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Lurkers'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Viewers'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Followers'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_time'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_account'] = 1;
  if (((s as any).camGirl ?? 0)?.['MFC_camname'] === '') {
    scene.text('You consider which name you\'d like to register under.');
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_camname'] = window.prompt("Which name would you like to use? (Leave blank for " + (((s as any).pcs_nickname ?? 0)) + ")") ?? '';
    if (((s as any).camGirl ?? 0)?.['MFC_camname'] === '') {
      ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_camname'] = '' + ((s as any).pcs_nickname ?? 0) + '';
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHourlyEvents(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMFCHourlyEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMFCHourlyEvents(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_time'] = ((s as any).camGirl['MFC_time'] ?? 0) - (10);
  if (((s as any).camGirl ?? 0)?.['MFC_time'] < 0) {
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_time'] = 0;
  }
  if (((s as any).camGirl ?? 0)?.['online'] === 0  ||  ((s as any).camGirl ?? 0)?.['type'] !== 'MFC') {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Ot'] = ((s as any).camGirl ?? 0)?.['MFC_Outsiders'];
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Lt'] = ((s as any).camGirl ?? 0)?.['MFC_Lurkers'];
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['At'] = ((s as any).camGirl ?? 0)?.['MFC_Actives'];
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Pt'] = ((s as any).camGirl ?? 0)?.['MFC_Passives'];
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['X'] = ((((s as any).temp_camVars ?? {})?.['Pt'] ?? 0) + (((s as any).temp_camVars ?? {})?.['At'] ?? 0));
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['N'] = ((s as any).camConst ?? 0)?.['MFC_N'];
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMFCViews(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['days_not_online'] = Math.max(0, ((s as any).daystart ?? 0) - (((s as any).camGirl ?? {})?.['MFC_last_online'] ?? 0) - 1);
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['PO_g'] = (Math.floor(Math.random() * ((((s as any).temp_camVars ?? {})?.['days_not_online'] ?? 0) * (((s as any).temp_camVars ?? {})?.['days_not_online'] ?? 0) / 2 - 0 + 1)) + (0));
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).temp_camVars ?? 0)?.['PO_g'], ((s as any).temp_camVars ?? 0)?.['X']);
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['v2'] = qspFunc(s, 'math', 'long_div', ((s as any).temp_camVars ?? 0)?.['v1'], ((s as any).temp_camVars ?? 0)?.['N']);
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['r_PO'] = parseFloat(((s as any).temp_camVars ?? 0)?.['v2']);
    if (((s as any).temp_camVars ?? 0)?.['days_not_online'] >= 3  &&  (Math.floor(Math.random() * 3) + 0) === 0  ||  ((s as any).temp_camVars ?? 0)?.['days_not_online'] >= 7  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['r_PO'] = ((s as any).temp_camVars['r_PO'] ?? 0) + ((Math.floor(Math.random() * ((Math.floor(Math.random() * ((Math.floor(Math.random() * (((s as any).temp_camVars ?? 0)?.['days_not_online'] - 0 + 1)) + (0)) - 0 + 1)) + (0)) - 0 + 1)) + (0)));
    }
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['minFollower'] = (((s as any).camGirl ?? {})?.['MFC_maxFollowers'] ?? 0) / 10;
    if (((s as any).temp_camVars ?? 0)?.['r_PO'] > ((s as any).temp_camVars ?? 0)?.['X'] - ((s as any).temp_camVars ?? 0)?.['minFollower']) {
      ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['r_PO'] = Math.max(0, (((s as any).temp_camVars ?? {})?.['X'] ?? 0) - (((s as any).temp_camVars ?? {})?.['minFollower'] ?? 0));
    }
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Passives'] = (((s as any).temp_camVars ?? {})?.['X'] ?? 0) - (((s as any).temp_camVars ?? {})?.['r_PO'] ?? 0);
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Outsiders'] = (((s as any).temp_camVars ?? {})?.['N'] ?? 0) - (((s as any).camGirl ?? {})?.['MFC_Passives'] ?? 0);
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Actives'] = 0;
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Lurkers'] = 0;
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Viewers'] = 0;
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Followers'] = ((s as any).camGirl ?? 0)?.['MFC_Passives'];
  }
  // TODO-QSP: end
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterCheckAvailableAnalDildo(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_vibe_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_small_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_normal_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_big_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_large_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_huge_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_enormous_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_gigantic_available'] = 0;
  if (((s as any).mc_inventory ?? 0)?.['vibe'] === 1) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_vibe_available'] = 1;
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_small_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 10)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_normal_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 15)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_big_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 20)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_large_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 25)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_huge_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 30)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_enormous_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1   &&  ((s as any).pcs_ass ?? 0) >= 35)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['anal_gigantic_available'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckAvailableVaginalDildo(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_vibe_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_small_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_normal_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_big_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_large_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_huge_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_enormous_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_gigantic_available'] = 0;
  if (((s as any).mc_inventory ?? 0)?.['vibe'] === 1) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_vibe_available'] = 1;
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_small_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 10)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_normal_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 15)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_big_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 20)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_large_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 25)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_huge_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 30)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_enormous_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1   &&  ((s as any).pcs_vag ?? 0) >= 35)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['vaginal_gigantic_available'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckAvailableOralDildo(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_small_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_normal_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_big_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_large_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_huge_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_enormous_available'] = 0;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_gigantic_available'] = 0;
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_small_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 10)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_normal_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 15)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_big_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 20)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_large_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 25)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_huge_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 30)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_enormous_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1   &&  ((s as any).pcs_throat ?? 0) >= 35)) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_available'] = 1;
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['oral_gigantic_available'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCamming(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).locArgs?.[1] ?? 0));
    qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), ((s as any).locArgs?.[1] ?? 0));
  }
  ((s as any).ARGS = (s as any).ARGS ?? {})[1] = ((String((s as any).locArgs?.[1] ?? '') < 0) ? (-((s as any).locArgs?.[1] ?? 0)) : (((s as any).locArgs?.[1] ?? 0)));
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterUpdateCamBonus(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterUpdateStats(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterViews(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterDonate(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterUpdateCamBonus(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = 4 * ((s as any).pcs_mood ?? 0) + 2 * ((s as any).pcs_apprnc ?? 0) + 2 * ((s as any).pcs_perform ?? 0) + ((s as any).pcs_compskl ?? 0);
  if ((String(((s as any).camGirl ?? 0)?.['type']).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    qspCall(s, 'LOCA', 'camGirl', 'UpdateCamBonus', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).camGirl ?? 0)?.['type'] + '_UpdateCamBonus', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (Math.min((((s as any).temp_camVars ?? {})?.['fame_bonus'] ?? 0) + (((s as any).fame ?? {})?.['city_performer'] ?? 0), 3000));
  ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = (((s as any).temp_camVars ?? {})?.['Bonus_base'] ?? 0) / 24;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).clothingworntype ?? 0) === 'fetish') {
      ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (15);
    }
  } else {
    ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (5);
    if (((s as any).braworntype ?? 0) === 'none') {
      ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (5);
    }
    if (((s as any).pantyworntype ?? 0) === 'none') {
      ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (10);
    }
  }
  ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = (((s as any).camGirl ?? {})?.['CamBonus'] ?? 0) * 480 / (480 + ((s as any).camGirl ?? 0)[(((s as any).camGirl ?? {})?.['type'] ?? 0) + '_time']);
  ((s as any).camGirl = (s as any).camGirl ?? {})['CamBonus'] = Math.min(Math.max(0, ((s as any).camGirl ?? 0)?.['CamBonus']), 250);
  // TODO-QSP: end
  scene.build();
}

function enterMFC_UpdateCamBonus(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + ((((s as any).trait_vars ?? {})?.['exhibitionist_exp'] ?? 0) + (((s as any).camGirl ?? {})?.['MFC_fame'] ?? 0));
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (600 * (((s as any).camGirl ?? {})?.['MFC_Viewers'] ?? 0)   / (5000 + (((s as any).camGirl ?? {})?.['MFC_Viewers'] ?? 0)));
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (600 * (((s as any).camGirl ?? {})?.['MFC_Followers'] ?? 0) / (5000 + (((s as any).camGirl ?? {})?.['MFC_Followers'] ?? 0)));
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (120);
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('dance') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (120);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('request') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (120);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('private') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (240);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('erotic') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (360);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('fetish') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (480);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('porn') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (600);
  }
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['fame_bonus'] = (((s as any).fame ?? {})?.['city_sexind'] ?? 0) + (((s as any).fame ?? {})?.['city_social'] ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterUpdateStats(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).camGirl ?? 0)?.['type']).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    qspCall(s, 'LOCA', 'camGirl', 'UpdateStats', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).camGirl ?? 0)?.['type'] + '_UpdateStats', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMFC_UpdateStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['FameIncMin'] = (((s as any).camGirl ?? {})?.['CamBonus'] ?? 0) / 30;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['FameIncMax'] = (((s as any).camGirl ?? {})?.['CamBonus'] ?? 0) / 15;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_FameInc'] = ((s as any).camGirl['MFC_FameInc'] ?? 0) + ((Math.floor(Math.random() * (((s as any).temp_camVars ?? 0)?.['FameIncMax'] - ((s as any).temp_camVars ?? 0)?.['FameIncMin'] + 1)) + (((s as any).temp_camVars ?? 0)?.['FameIncMin'])));
  if (((s as any).totminut ?? 0) >= ((s as any).camGirl ?? 0)?.['next_stat_update']) {
    ((s as any).camGirl = (s as any).camGirl ?? {})['next_stat_update'] = ((s as any).totminut ?? 0) + 30;
    if (((s as any).perform_lvl ?? 0)  < 30) {
      qspCall(s, 'exp_gain', 'perform', Math.min((Math.floor(Math.random() * ((((s as any).camGirl ?? {})?.['MFC_FameInc'] ?? 0) / 6 - 0 + 1)) + (0)), 1));
    }
    if (((s as any).compskl_lvl ?? 0)  < 30) {
      qspCall(s, 'exp_gain', 'compskl', Math.min((Math.floor(Math.random() * ((((s as any).camGirl ?? {})?.['MFC_FameInc'] ?? 0) / 6 - 0 + 1)) + (0)), 1));
    }
    if (((s as any).inhib_lvl ?? 0)  < 50) {
      qspCall(s, 'exp_gain', 'inhib', Math.min((Math.floor(Math.random() * ((((s as any).camGirl ?? {})?.['MFC_FameInc'] ?? 0) / 6 - 0 + 1)) + (0)), 1));
    }
    qspCall(s, 'fame', 'city', 'media', (Math.floor(Math.random() * ((((s as any).camGirl ?? {})?.['MFC_FameInc'] ?? 0) / 6 - 0 + 1)) + (0)));
    qspCall(s, 'fame', 'city', 'porn', (Math.floor(Math.random() * ((((s as any).camGirl ?? {})?.['MFC_FameInc'] ?? 0) / 6 - 0 + 1)) + (0)));
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_FameInc'] = 0;
  }
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_fame'] = Math.min(((((s as any).fame ?? {})?.['city_sexind'] ?? 0) + (((s as any).fame ?? {})?.['city_social'] ?? 0) + (((s as any).camGirl ?? {})?.['MFC_Followers'] ?? 0) / 50) / 5, 400);
  // TODO-QSP: end
  scene.build();
}

function enterViews(s: GameState, scene: SceneBuilder): void {
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['dt'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['tt'] = (((s as any).camGirl ?? 0)?.[((s as any).camGirl ?? 0)?.['type'] + '_time'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['N'] = (((s as any).camConst ?? 0)?.[((s as any).camGirl ?? 0)?.['type'] + '_N'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['Ot'] = (((s as any).camGirl ?? 0)?.[((s as any).camGirl ?? 0)?.['type'] + '_Outsiders'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['Lt'] = (((s as any).camGirl ?? 0)?.[((s as any).camGirl ?? 0)?.['type'] + '_Lurkers'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['At'] = (((s as any).camGirl ?? 0)?.[((s as any).camGirl ?? 0)?.['type'] + '_Actives'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['Pt'] = (((s as any).camGirl ?? 0)?.[((s as any).camGirl ?? 0)?.['type'] + '_Passives'] ?? 0);
  if ((String(((s as any).camGirl ?? 0)?.['type']).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    qspCall(s, 'LOCA', 'camGirl', 'views', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).camGirl ?? 0)?.['type'] + '_views', ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterViewsCore(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: camGirl[$camGirl['type'] + '_time']     += cam_viewsVars['dt']
  // TODO-QSP: camGirl[$camGirl['type'] + '_Outsiders'] = cam_viewsVars['nO']
  // TODO-QSP: camGirl[$camGirl['type'] + '_Lurkers']   = cam_viewsVars['nL']
  // TODO-QSP: camGirl[$camGirl['type'] + '_Actives']   = cam_viewsVars['nA']
  // TODO-QSP: camGirl[$camGirl['type'] + '_Passives']  = cam_viewsVars['nP']
  // TODO-QSP: camGirl[$camGirl['type'] + '_Viewers']   = camGirl[$camGirl['type'] + '_Actives'] + camGirl[$camGirl...
  // TODO-QSP: camGirl[$camGirl['type'] + '_Followers'] = camGirl[$camGirl['type'] + '_Actives'] + camGirl[$camGirl...
  if (((s as any).camGirl ?? 0)[((s as any).camGirl ?? 0)?.['type'] + '_Viewers'] > ((s as any).camGirl ?? 0)[((s as any).camGirl ?? 0)?.['type'] + '_maxViewers']) {
    // TODO-QSP: camGirl[$camGirl['type'] + '_maxViewers'] = camGirl[$camGirl['type'] + '_Viewers']
  }
  if (((s as any).camGirl ?? 0)[((s as any).camGirl ?? 0)?.['type'] + '_Followers'] > ((s as any).camGirl ?? 0)[((s as any).camGirl ?? 0)?.['type'] + '_maxFollowers']) {
    // TODO-QSP: camGirl[$camGirl['type'] + '_maxFollowers'] = camGirl[$camGirl['type'] + '_Followers']
  }
  // TODO-QSP: end
  scene.build();
}

function enterMFCViews(s: GameState, scene: SceneBuilder): void {
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['OL_g'] = 10;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['OL_a'] = 50 + (((s as any).camGirl ?? {})?.['CamBonus'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['LO_t'] = 25;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['LO_g'] = 1500;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['LA_g'] = 2000;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['LA_a'] = 50 * (50 + (((s as any).camGirl ?? {})?.['CamBonus'] ?? 0));
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['AP_t'] = 50;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['AP_g'] = 100;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['PA_g'] = 2000;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['PO_g'] = 1;
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['PO_a'] = 30;
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('private') : -1) >= 0) {
    // TODO-QSP: cam_viewsVars['OL_g'] /= 5
    // TODO-QSP: cam_viewsVars['OL_a'] /= 5
    // TODO-QSP: cam_viewsVars['LO_g'] *= 2
    // TODO-QSP: cam_viewsVars['LA_g'] /= 4
    // TODO-QSP: cam_viewsVars['LA_a'] /= 5
    // TODO-QSP: cam_viewsVars['AP_t'] *= 2
    // TODO-QSP: cam_viewsVars['AP_g'] *= 2
    // TODO-QSP: cam_viewsVars['PA_g'] /= 4
  }
  // TODO-QSP: end
  scene.build();
}

function enterViewsCore(s: GameState, scene: SceneBuilder): void {
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['N2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['N'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  if (((s as any).camGirl ?? 0)?.['debug'] === 1) {
    // TODO-QSP: "
    (s as any).Ot = ((s as any).cam_viewsVars ?? 0)?.['Ot'];
    (s as any).Lt = ((s as any).cam_viewsVars ?? 0)?.['Lt'];
    (s as any).At = ((s as any).cam_viewsVars ?? 0)?.['At'];
    (s as any).Pt = ((s as any).cam_viewsVars ?? 0)?.['Pt'];
    // TODO-QSP: "
  }
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['OL_g'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['OL_a'], ((s as any).cam_viewsVars ?? 0)?.['At']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v3'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['v2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Ot'], ((s as any).cam_viewsVars ?? 0)?.['v3']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v4'], ((s as any).cam_viewsVars ?? 0)?.['N2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_OL'] = parseFloat(((s as any).cam_viewsVars ?? 0)?.['v5']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v1'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['LO_t'], ((s as any).cam_viewsVars ?? 0)?.['tt']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Lt'], ((s as any).cam_viewsVars ?? 0)?.['v1']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v3'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['v2'], ((s as any).cam_viewsVars ?? 0)?.['LO_g']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['LO_t'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v3'], ((s as any).cam_viewsVars ?? 0)?.['v4']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_LO'] = parseFloat(((s as any).cam_viewsVars ?? 0)?.['v5']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['LA_g'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['LA_a'], ((s as any).cam_viewsVars ?? 0)?.['At']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v3'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['v2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Lt'], ((s as any).cam_viewsVars ?? 0)?.['v3']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v4'], ((s as any).cam_viewsVars ?? 0)?.['N2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_LA'] = parseFloat(((s as any).cam_viewsVars ?? 0)?.['v5']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v1'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['AP_t'], ((s as any).cam_viewsVars ?? 0)?.['tt']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['At'], ((s as any).cam_viewsVars ?? 0)?.['v1']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v3'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['v2'], ((s as any).cam_viewsVars ?? 0)?.['AP_g']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['AP_t'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v3'], ((s as any).cam_viewsVars ?? 0)?.['v4']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_AP'] = parseFloat(((s as any).cam_viewsVars ?? 0)?.['v5']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Pt'], ((s as any).cam_viewsVars ?? 0)?.['PA_g']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v2'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_PA'] = parseFloat(((s as any).cam_viewsVars ?? 0)?.['v2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['PO_a'], ((s as any).cam_viewsVars ?? 0)?.['At']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['PO_g'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v3'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['v2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Pt'], ((s as any).cam_viewsVars ?? 0)?.['v3']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v4'], ((s as any).cam_viewsVars ?? 0)?.['N2']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_PO'] = parseFloat(((s as any).cam_viewsVars ?? 0)?.['v5']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_OL'] = Math.max(0, ((s as any).cam_viewsVars ?? 0)?.['r_OL']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_LO'] = Math.max(0, ((s as any).cam_viewsVars ?? 0)?.['r_LO']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_AP'] = Math.max(0, ((s as any).cam_viewsVars ?? 0)?.['r_AP']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['r_PA'] = Math.max(0, ((s as any).cam_viewsVars ?? 0)?.['r_PA']);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['rand_LOL'] = (Math.floor(Math.random() * (((s as any).cam_viewsVars ?? 0)?.['r_OL'] - -(((s as any).cam_viewsVars ?? {})?.['r_LO'] ?? 0) + 1)) + (-(((s as any).cam_viewsVars ?? {})?.['r_LO'] ?? 0)));
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['rand_APA'] = (Math.floor(Math.random() * (((s as any).cam_viewsVars ?? 0)?.['r_PA'] - -(((s as any).cam_viewsVars ?? {})?.['r_AP'] ?? 0) + 1)) + (-(((s as any).cam_viewsVars ?? {})?.['r_AP'] ?? 0)));
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['d_LOL'] = Math.max(-((((s as any).cam_viewsVars ?? {})?.['Lt'] ?? 0) / 2), Math.min(((s as any).cam_viewsVars ?? 0)?.['rand_LOL'], (((s as any).cam_viewsVars ?? {})?.['Ot'] ?? 0) / 2));
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['d_LA'] = (Math.floor(Math.random() * (Math.min(8, Math.max(0, ((s as any).cam_viewsVars ?? 0)?.['Lt']), Math.max(1, 3 * (((s as any).cam_viewsVars ?? {})?.['r_LA'] ?? 0))) - 0 + 1)) + (0));
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['d_APA'] = Math.max(-((((s as any).cam_viewsVars ?? {})?.['At'] ?? 0) / 2), Math.min(((s as any).cam_viewsVars ?? 0)?.['rand_APA'], (((s as any).cam_viewsVars ?? {})?.['Pt'] ?? 0) / 2));
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['d_PO'] = (Math.floor(Math.random() * (Math.max(0, Math.min((((s as any).cam_viewsVars ?? {})?.['Pt'] ?? 0) / 3, ((s as any).cam_viewsVars ?? 0)?.['r_PO'])) - 0 + 1)) + (0));
  if (((s as any).camGirl ?? 0)?.['debug'] === 1) {
    // TODO-QSP: "
    (s as any).r_OL = ((s as any).cam_viewsVars ?? 0)?.['r_OL'];
    (s as any).r_LO = ((s as any).cam_viewsVars ?? 0)?.['r_LO'];
    (s as any).r_LA = ((s as any).cam_viewsVars ?? 0)?.['r_LA'];
    (s as any).r_AP = ((s as any).cam_viewsVars ?? 0)?.['r_AP'];
    (s as any).r_PA = ((s as any).cam_viewsVars ?? 0)?.['r_PA'];
    (s as any).r_PO = ((s as any).cam_viewsVars ?? 0)?.['r_PO'];
    (s as any).d_LOL = ((s as any).cam_viewsVars ?? 0)?.['d_LOL'];
    (s as any).d_LA = ((s as any).cam_viewsVars ?? 0)?.['d_LA'];
    (s as any).d_APA = ((s as any).cam_viewsVars ?? 0)?.['d_APA'];
    (s as any).d_PO = ((s as any).cam_viewsVars ?? 0)?.['d_PO'];
    // TODO-QSP: "
  }
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nO'] = (((s as any).cam_viewsVars ?? {})?.['Ot'] ?? 0) - (((s as any).cam_viewsVars ?? {})?.['d_LOL'] ?? 0) + (((s as any).cam_viewsVars ?? {})?.['d_PO'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nL'] = (((s as any).cam_viewsVars ?? {})?.['Lt'] ?? 0) + (((s as any).cam_viewsVars ?? {})?.['d_LOL'] ?? 0) - (((s as any).cam_viewsVars ?? {})?.['d_LA'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nA'] = (((s as any).cam_viewsVars ?? {})?.['At'] ?? 0) + (((s as any).cam_viewsVars ?? {})?.['d_APA'] ?? 0) + (((s as any).cam_viewsVars ?? {})?.['d_LA'] ?? 0);
  ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nP'] = (((s as any).cam_viewsVars ?? {})?.['Pt'] ?? 0) - (((s as any).cam_viewsVars ?? {})?.['d_APA'] ?? 0) - (((s as any).cam_viewsVars ?? {})?.['d_PO'] ?? 0);
  if (((s as any).camGirl ?? 0)?.['debug'] === 1) {
    // TODO-QSP: "
    (s as any).nO = ((s as any).cam_viewsVars ?? 0)?.['nO'];
    (s as any).nL = ((s as any).cam_viewsVars ?? 0)?.['nL'];
    (s as any).nA = ((s as any).cam_viewsVars ?? 0)?.['nA'];
    (s as any).nP = ((s as any).cam_viewsVars ?? 0)?.['nP'];
    // TODO-QSP: "
  }
  if (((s as any).cam_viewsVars ?? 0)?.['nL'] < 0) {
    ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nO'] = ((s as any).cam_viewsVars['nO'] ?? 0) - (((s as any).cam_viewsVars ?? 0)?.['nL']);
    ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nL'] = 0;
  }
  if (((s as any).cam_viewsVars ?? 0)?.['nA'] < 0) {
    ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nP'] = ((s as any).cam_viewsVars['nP'] ?? 0) - (((s as any).cam_viewsVars ?? 0)?.['nA']);
    ((s as any).cam_viewsVars = (s as any).cam_viewsVars ?? {})['nA'] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterDonate(s: GameState, scene: SceneBuilder): void {
  if ((String(((s as any).camGirl ?? 0)?.['type']).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    qspCall(s, 'LOCA', 'camGirl', 'views', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0));
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).camGirl ?? 0)?.['type'] + '_donate', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), ((s as any).locArgs?.[3] ?? 0), ((s as any).locArgs?.[4] ?? 0)]; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMFCDonate(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_last_tokens_made'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_donate_message'] = '';
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['N'] = ((s as any).camConst ?? 0)?.['MFC_N'];
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['dt'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['CamBonus'] = (25 + 10 * (((s as any).temp_camVars ?? {})?.['dt'] ?? 0)) / 50 + (75 + (((s as any).camGirl ?? {})?.['CamBonus'] ?? 0)) / 50;
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['eff_V'] = (((s as any).temp_camVars ?? {})?.['CamBonus'] ?? 0) * (((s as any).camGirl ?? {})?.['MFC_Actives'] ?? 0) + (((s as any).camGirl ?? {})?.['MFC_Lurkers'] ?? 0);
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('request') : -1) >= 0) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['p'] = 100;
  } else {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['p'] = 67 * (((s as any).temp_camVars ?? {})?.['eff_V'] ?? 0) / ((((s as any).temp_camVars ?? {})?.['N'] ?? 0) / 100 + (((s as any).temp_camVars ?? {})?.['eff_V'] ?? 0));
  }
  if ((Math.floor(Math.random() * 100) + 0) >= ((s as any).temp_camVars ?? 0)?.['p']) {
    return;
  }
  ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['mult'] = 100 * (((s as any).temp_camVars ?? {})?.['CamBonus'] ?? 0) * (((s as any).temp_camVars ?? {})?.['eff_V'] ?? 0) / ((((s as any).temp_camVars ?? {})?.['N'] ?? 0) / 10 + (((s as any).temp_camVars ?? {})?.['eff_V'] ?? 0));
  if (((s as any).temp_camVars ?? 0)?.['mult'] > 1) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['mult'] = (Math.floor(Math.random() * (((s as any).temp_camVars ?? 0)?.['mult'] - 1 + 1)) + (1));
  }
  if ((Math.floor(Math.random() * (((s as any).temp_camVars ?? 0)?.['eff_V'] / ((s as any).temp_camVars ?? 0)?.['CamBonus'] - 0 + 1)) + (0)) < ((s as any).camGirl ?? 0)?.['MFC_Actives']) {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['payout'] = 4 * Math.max(1, ((((s as any).temp_camVars ?? {})?.['mult'] ?? 0) / 2));
  } else {
    ((s as any).temp_camVars = (s as any).temp_camVars ?? {})['payout'] = 2 * Math.max(1, ((((s as any).temp_camVars ?? {})?.['mult'] ?? 0) / 2));
  }
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_tokens'] = ((s as any).camGirl['MFC_tokens'] ?? 0) + (((s as any).temp_camVars ?? 0)?.['payout']);
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_last_tokens_made'] = ((s as any).temp_camVars ?? 0)?.['payout'];
  if (((s as any).temp_camVars ?? 0)?.['payout'] > 0) {
    ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_donate_message'] = qspFunc(s, 'wrap', 'v_pos', '+' + (((s as any).temp_camVars ?? 0)?.[String((s as any).payout ?? 0)] ?? 0) + ' Tokens');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPrintStatus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).camGirl ?? 0)?.['type'] === 'MFC') {
    if (((s as any).camGirl ?? 0)?.['MFC_time'] >= 180) {
      if (((s as any).camGirl ?? 0)?.['MFC_time'] < 240) {
        scene.text('<font color="orange">You\'ve been streaming a while. Viewers are slightly more likely to leave, but you can still keep going.</font>');
      } else {
        if (((s as any).camGirl ?? 0)?.['MFC_time'] < 360) {
          scene.text('You\'ve been streaming a while and it\'s starting to show. Viewers are more likely to leave.');
        } else {
          if (((s as any).camGirl ?? 0)?.['MFC_time'] < 480) {
            scene.text('You\'ve been streaming a lot and it\'s showing. Viewers are likely to leave. Maybe you should take a break and continue tomorrow.');
          } else {
            scene.text('<center><b>You\'ve been streaming for too long and it\'s showing. Viewers are very likely to leave. Maybe you should take a break and continue in a few days.</b></center>');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTokensToRub(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).locArgs?.[1] ?? 0) * 2;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStartCamming(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl = (s as any).camGirl ?? {})['online'] = 1;
  ((s as any).camGirl = (s as any).camGirl ?? {})['type'] = ((s as any).locArgs?.[1] ?? 0);
  // TODO-QSP: camGirl[$camGirl['type'] + '_last_online'] = daystart
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).camGirl ?? 0)?.['type'] + '_start_camming']; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMFCStartCamming(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'clothing', 'strip');
  qspCall(s, 'underwear', 'wear');
  // TODO-QSP: end
  scene.build();
}

function enterStopCamming(s: GameState, scene: SceneBuilder): void {
  ((s as any).camGirl = (s as any).camGirl ?? {})['online'] = 0;
  // TODO-QSP: camGirl[$camGirl['type'] + '_last_online'] = daystart
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).camGirl ?? 0)?.['type'] + '_stop_camming']; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).camGirl = (s as any).camGirl ?? {})['type'] = '';
  // TODO-QSP: end
  scene.build();
}

function enterMFCStopCamming(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'money', 'earn', qspFunc(s, 'komp_cam_functions', 'tokens_to_rub', ((s as any).camGirl ?? 0)?.['MFC_tokens']), 'bank');
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_tokens'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_donate_message'] = '';
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Passives'] = ((s as any).camGirl['MFC_Passives'] ?? 0) + (((s as any).camGirl ?? 0)?.['MFC_Actives']);
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Outsiders'] = ((s as any).camGirl['MFC_Outsiders'] ?? 0) + (((s as any).camGirl ?? 0)?.['MFC_Lurkers']);
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Actives'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Lurkers'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Viewers'] = 0;
  ((s as any).camGirl = (s as any).camGirl ?? {})['MFC_Followers'] = ((s as any).camGirl ?? 0)?.['MFC_Passives'];
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).camConst = (s as any).camConst ?? {})['MFC_N'] = 100000;
  const arg = s.locArg;
  switch (arg) {
    case 'MFC_init':
      enterMFCInit(s, scene);
      break;
    case 'hourly_events':
      enterHourlyEvents(s, scene);
      break;
    case 'MFC_hourly_events':
      enterMFCHourlyEvents(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'check_available_anal_dildo':
      enterCheckAvailableAnalDildo(s, scene);
      break;
    case 'check_available_vaginal_dildo':
      enterCheckAvailableVaginalDildo(s, scene);
      break;
    case 'check_available_oral_dildo':
      enterCheckAvailableOralDildo(s, scene);
      break;
    case 'camming':
      enterCamming(s, scene);
      break;
    case 'UpdateCamBonus':
      enterUpdateCamBonus(s, scene);
      break;
    case 'MFC_UpdateCamBonus':
      enterMFC_UpdateCamBonus(s, scene);
      break;
    case 'UpdateStats':
      enterUpdateStats(s, scene);
      break;
    case 'MFC_UpdateStats':
      enterMFC_UpdateStats(s, scene);
      break;
    case 'views':
      enterViews(s, scene);
      break;
    case 'MFC_views':
      enterMFCViews(s, scene);
      break;
    case 'views_core':
      enterViewsCore(s, scene);
      break;
    case 'donate':
      enterDonate(s, scene);
      break;
    case 'MFC_donate':
      enterMFCDonate(s, scene);
      break;
    case 'print_status':
      enterPrintStatus(s, scene);
      break;
    case 'tokens_to_rub':
      enterTokensToRub(s, scene);
      break;
    case 'start_camming':
      enterStartCamming(s, scene);
      break;
    case 'MFC_start_camming':
      enterMFCStartCamming(s, scene);
      break;
    case 'stop_camming':
      enterStopCamming(s, scene);
      break;
    case 'MFC_stop_camming':
      enterMFCStopCamming(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_cam_functions: LocationDef = {
  name: 'komp_cam_functions',
  title: '+ Tokens',
  region: 'other',
  enter: enter,
};
