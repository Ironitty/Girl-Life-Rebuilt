import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMFCInit(s: GameState, scene: SceneBuilder): void {
  (s as any).camGirl['MFC_Actives'] = 0;
  (s as any).camGirl['MFC_Passives'] = 0;
  (s as any).camGirl['MFC_Outsiders'] = ((s as any).camConst ?? 0)?.['MFC_N'];
  (s as any).camGirl['MFC_Lurkers'] = 0;
  (s as any).camGirl['MFC_Viewers'] = 0;
  (s as any).camGirl['MFC_Followers'] = 0;
  (s as any).camGirl['MFC_time'] = 0;
  (s as any).camGirl['MFC_account'] = 1;
  if (((s as any).camGirl ?? 0)?.['MFC_camname'] === '') {
    scene.text('You consider which name you\'d like to register under.');
    (s as any).camGirl['MFC_camname'] = qspUntranslated(s, "input(\"Which name would you like to use? (Leave blank for <<pcs_nickname>>)\")", { location: "komp_cam_functions" });
    if (((s as any).camGirl ?? 0)?.['MFC_camname'] === '') {
      (s as any).camGirl['MFC_camname'] = '<<$pcs_nickname>>';
    }
  }
  scene.build();
}

function enterHourlyEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'komp_cam_functions', 'MFC_hourly_events');
  scene.build();
}

function enterMFCHourlyEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).camGirl['MFC_time'] = ((s as any).camGirl['MFC_time'] ?? 0) - (10);
  if (((s as any).camGirl ?? 0)?.['MFC_time'] < 0) {
    (s as any).camGirl['MFC_time'] = 0;
  }
  if (((s as any).camGirl ?? 0)?.['online'] === 0  ||  ((s as any).camGirl ?? 0)?.['type'] !== 'MFC') {
    (s as any).temp_camVars['Ot'] = ((s as any).camGirl ?? 0)?.['MFC_Outsiders'];
    (s as any).temp_camVars['Lt'] = ((s as any).camGirl ?? 0)?.['MFC_Lurkers'];
    (s as any).temp_camVars['At'] = ((s as any).camGirl ?? 0)?.['MFC_Actives'];
    (s as any).temp_camVars['Pt'] = ((s as any).camGirl ?? 0)?.['MFC_Passives'];
    (s as any).temp_camVars['X'] = (((s as any).temp_camVars ?? 0)?.['Pt'] + ((s as any).temp_camVars ?? 0)?.['At']);
    (s as any).temp_camVars['N'] = ((s as any).camConst ?? 0)?.['MFC_N'];
    qspCall(s, 'komp_cam_functions', 'MFC_views');
    (s as any).temp_camVars['days_not_online'] = ((s as any).max ?? 0)(0, ((s as any).daystart ?? 0) - ((s as any).camGirl ?? 0)?.['MFC_last_online'] - 1);
    (s as any).temp_camVars['PO_g'] = ((s as any).rand ?? 0)(0, ((s as any).temp_camVars ?? 0)?.['days_not_online'] * ((s as any).temp_camVars ?? 0)?.['days_not_online'] / 2) * ((s as any).cam_viewsVars ?? 0)?.['PO_g'];
    (s as any).temp_camVars['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).temp_camVars ?? 0)?.['PO_g'], ((s as any).temp_camVars ?? 0)?.['X']);
    (s as any).temp_camVars['v2'] = qspFunc(s, 'math', 'long_div', ((s as any).temp_camVars ?? 0)?.['v1'], ((s as any).temp_camVars ?? 0)?.['N']);
    (s as any).temp_camVars['r_PO'] = qspUntranslated(s, "val(temp_camVars['v2'])", { location: "komp_cam_functions" });
    if (((s as any).temp_camVars ?? 0)?.['days_not_online'] >= 3  &&  Math.floor(Math.random() * 3) + 0 === 0  ||  ((s as any).temp_camVars ?? 0)?.['days_not_online'] >= 7  &&  Math.floor(Math.random() * 2) + 0 === 0) {
      (s as any).temp_camVars['r_PO'] = ((s as any).temp_camVars['r_PO'] ?? 0) + (qspUntranslated(s, "rand(0, rand(0, rand(0, temp_camVars['days_not_online'])))", { location: "komp_cam_functions" }));
    }
    (s as any).temp_camVars['minFollower'] = ((s as any).camGirl ?? 0)?.['MFC_maxFollowers'] / 10;
    if (((s as any).temp_camVars ?? 0)?.['r_PO'] > ((s as any).temp_camVars ?? 0)?.['X'] - ((s as any).temp_camVars ?? 0)?.['minFollower']) {
      (s as any).temp_camVars['r_PO'] = ((s as any).max ?? 0)(0, ((s as any).temp_camVars ?? 0)?.['X'] - ((s as any).temp_camVars ?? 0)?.['minFollower']);
    }
    (s as any).camGirl['MFC_Passives'] = ((s as any).temp_camVars ?? 0)?.['X'] - ((s as any).temp_camVars ?? 0)?.['r_PO'];
    (s as any).camGirl['MFC_Outsiders'] = ((s as any).temp_camVars ?? 0)?.['N'] - ((s as any).camGirl ?? 0)?.['MFC_Passives'];
    (s as any).camGirl['MFC_Actives'] = 0;
    (s as any).camGirl['MFC_Lurkers'] = 0;
    (s as any).camGirl['MFC_Viewers'] = 0;
    (s as any).camGirl['MFC_Followers'] = ((s as any).camGirl ?? 0)?.['MFC_Passives'];
  }
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheckAvailableAnalDildo(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_camVars['anal_available'] = 0;
  (s as any).temp_camVars['anal_vibe_available'] = 0;
  (s as any).temp_camVars['anal_small_available'] = 0;
  (s as any).temp_camVars['anal_normal_available'] = 0;
  (s as any).temp_camVars['anal_big_available'] = 0;
  (s as any).temp_camVars['anal_large_available'] = 0;
  (s as any).temp_camVars['anal_huge_available'] = 0;
  (s as any).temp_camVars['anal_enormous_available'] = 0;
  (s as any).temp_camVars['anal_gigantic_available'] = 0;
  if (((s as any).mc_inventory ?? 0)?.['vibe'] === 1) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_vibe_available'] = 1;
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_small_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 10)) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_normal_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 15)) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_big_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 20)) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_large_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 25)) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_huge_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  &&  ((s as any).pcs_ass ?? 0) >= 30)) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_enormous_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1   &&  ((s as any).pcs_ass ?? 0) >= 35)) {
    (s as any).temp_camVars['anal_available'] = 1;
    (s as any).temp_camVars['anal_gigantic_available'] = 1;
  }
  scene.build();
}

function enterCheckAvailableVaginalDildo(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_camVars['vaginal_available'] = 0;
  (s as any).temp_camVars['vaginal_vibe_available'] = 0;
  (s as any).temp_camVars['vaginal_small_available'] = 0;
  (s as any).temp_camVars['vaginal_normal_available'] = 0;
  (s as any).temp_camVars['vaginal_big_available'] = 0;
  (s as any).temp_camVars['vaginal_large_available'] = 0;
  (s as any).temp_camVars['vaginal_huge_available'] = 0;
  (s as any).temp_camVars['vaginal_enormous_available'] = 0;
  (s as any).temp_camVars['vaginal_gigantic_available'] = 0;
  if (((s as any).mc_inventory ?? 0)?.['vibe'] === 1) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_vibe_available'] = 1;
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_small_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 10)) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_normal_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 15)) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_big_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 20)) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_large_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 25)) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_huge_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  &&  ((s as any).pcs_vag ?? 0) >= 30)) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_enormous_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1   &&  ((s as any).pcs_vag ?? 0) >= 35)) {
    (s as any).temp_camVars['vaginal_available'] = 1;
    (s as any).temp_camVars['vaginal_gigantic_available'] = 1;
  }
  scene.build();
}

function enterCheckAvailableOralDildo(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_camVars['oral_available'] = 0;
  (s as any).temp_camVars['oral_small_available'] = 0;
  (s as any).temp_camVars['oral_normal_available'] = 0;
  (s as any).temp_camVars['oral_big_available'] = 0;
  (s as any).temp_camVars['oral_large_available'] = 0;
  (s as any).temp_camVars['oral_huge_available'] = 0;
  (s as any).temp_camVars['oral_enormous_available'] = 0;
  (s as any).temp_camVars['oral_gigantic_available'] = 0;
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_small_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 10)) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_normal_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 15)) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_big_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 20)) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_large_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 25)) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_huge_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1  &&  ((s as any).pcs_throat ?? 0) >= 30)) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_enormous_available'] = 1;
  }
  if ((((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1   &&  ((s as any).pcs_throat ?? 0) >= 35)) {
    (s as any).temp_camVars['oral_available'] = 1;
    (s as any).temp_camVars['oral_gigantic_available'] = 1;
  }
  scene.build();
}

function enterCamming(s: GameState, scene: SceneBuilder): void {
  if (((s as any).ARGS ?? 0)[1] > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "komp_cam_functions" }));
    // TODO-QSP: gs 'internet_mobile', 'use_internet', $subs, ARGS[1]
  }
  (s as any).ARGS[1] = (((s as any).ARGS ?? 0)[1] < 0) ? (-((s as any).ARGS ?? 0)[1]) : (qspUntranslated(s, "ARGS[1]", { location: "komp_cam_functions" }));
  // TODO-QSP: gs 'komp_cam_functions', 'UpdateCamBonus', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  // TODO-QSP: gs 'komp_cam_functions', 'UpdateStats', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  // TODO-QSP: gs 'komp_cam_functions', 'views', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  // TODO-QSP: gs 'komp_cam_functions', 'donate', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  scene.build();
}

function enterUpdateCamBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_camVars['Bonus_base'] = 4 * ((s as any).pcs_mood ?? 0) + 2 * ((s as any).pcs_apprnc ?? 0) + 2 * ((s as any).pcs_perform ?? 0) + ((s as any).pcs_compskl ?? 0);
  if (((qspUntranslated(s, "\u00000\u0000", { location: "komp_cam_functions" })).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    // TODO-QSP: gs 'LOCA', 'camGirl', 'UpdateCamBonus', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  } else {
    // TODO-QSP: gs 'komp_cam_functions', $camGirl['type'] + '_UpdateCamBonus', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  }
  (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (((s as any).min ?? 0)(((s as any).temp_camVars ?? 0)?.['fame_bonus'] + ((s as any).fame ?? 0)?.['city_performer'], 3000));
  (s as any).camGirl['CamBonus'] = ((s as any).temp_camVars ?? 0)?.['Bonus_base'] / 24;
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    if (((s as any).clothingworntype ?? 0) === 'fetish') {
      (s as any).camGirl['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (15);
    }
  } else {
    (s as any).camGirl['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (5);
    if (((s as any).braworntype ?? 0) === 'none') {
      (s as any).camGirl['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (5);
    }
    if (((s as any).pantyworntype ?? 0) === 'none') {
      (s as any).camGirl['CamBonus'] = ((s as any).camGirl['CamBonus'] ?? 0) + (10);
    }
  }
  (s as any).camGirl['CamBonus'] = ((s as any).camGirl ?? 0)?.['CamBonus'] * 480 / (480 + ((s as any).camGirl ?? 0)[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._time ?? 0)']);
  (s as any).camGirl['CamBonus'] = qspUntranslated(s, "min(max(0, camGirl['CamBonus']), 250)", { location: "komp_cam_functions" });
  scene.build();
}

function enterMFC_UpdateCamBonus(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (((s as any).trait_vars ?? 0)?.['exhibitionist_exp'] + ((s as any).camGirl ?? 0)?.['MFC_fame']);
  (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (600 * ((s as any).camGirl ?? 0)?.['MFC_Viewers']   / (5000 + ((s as any).camGirl ?? 0)?.['MFC_Viewers']));
  (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (600 * ((s as any).camGirl ?? 0)?.['MFC_Followers'] / (5000 + ((s as any).camGirl ?? 0)?.['MFC_Followers']));
  (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (120);
  if (((s as any).arrpos ?? 0)('ARGS', 'dance') >= 0) {
    (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (120);
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'request') >= 0) {
    (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (120);
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'private') >= 0) {
    (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (240);
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'erotic') >= 0) {
    (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (360);
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'fetish') >= 0) {
    (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (480);
  }
  if (((s as any).arrpos ?? 0)('ARGS', 'porn') >= 0) {
    (s as any).temp_camVars['Bonus_base'] = ((s as any).temp_camVars['Bonus_base'] ?? 0) + (600);
  }
  (s as any).temp_camVars['fame_bonus'] = ((s as any).fame ?? 0)?.['city_sexind'] + ((s as any).fame ?? 0)?.['city_social'];
  scene.build();
}

function enterUpdateStats(s: GameState, scene: SceneBuilder): void {
  if (((qspUntranslated(s, "\u00000\u0000", { location: "komp_cam_functions" })).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    // TODO-QSP: gs 'LOCA', 'camGirl', 'UpdateStats', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  } else {
    // TODO-QSP: gs 'komp_cam_functions', $camGirl['type'] + '_UpdateStats', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  }
  scene.build();
}

function enterMFC_UpdateStats(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_camVars['FameIncMin'] = ((s as any).camGirl ?? 0)?.['CamBonus'] / 30;
  (s as any).temp_camVars['FameIncMax'] = ((s as any).camGirl ?? 0)?.['CamBonus'] / 15;
  (s as any).camGirl['MFC_FameInc'] = ((s as any).camGirl['MFC_FameInc'] ?? 0) + (qspUntranslated(s, "rand(temp_camVars['FameIncMin'], temp_camVars['FameIncMax'])", { location: "komp_cam_functions" }));
  if (((s as any).totminut ?? 0) >= ((s as any).camGirl ?? 0)?.['next_stat_update']) {
    (s as any).camGirl['next_stat_update'] = ((s as any).totminut ?? 0) + 30;
    if (((s as any).perform_lvl ?? 0)  < 30) {
      qspCall(s, 'exp_gain', 'perform', ((s as any).min ?? 0)(((s as any).rand ?? 0)(0, ((s as any).camGirl ?? 0)?.['MFC_FameInc'] / 6), 1));
    }
    if (((s as any).compskl_lvl ?? 0)  < 30) {
      qspCall(s, 'exp_gain', 'compskl', ((s as any).min ?? 0)(((s as any).rand ?? 0)(0, ((s as any).camGirl ?? 0)?.['MFC_FameInc'] / 6), 1));
    }
    if (((s as any).inhib_lvl ?? 0)  < 50) {
      qspCall(s, 'exp_gain', 'inhib', ((s as any).min ?? 0)(((s as any).rand ?? 0)(0, ((s as any).camGirl ?? 0)?.['MFC_FameInc'] / 6), 1));
    }
    qspCall(s, 'fame', 'city', 'media', ((s as any).rand ?? 0)(0, ((s as any).camGirl ?? 0)?.['MFC_FameInc'] / 6));
    qspCall(s, 'fame', 'city', 'porn', ((s as any).rand ?? 0)(0, ((s as any).camGirl ?? 0)?.['MFC_FameInc'] / 6));
    (s as any).camGirl['MFC_FameInc'] = 0;
  }
  (s as any).camGirl['MFC_fame'] = ((s as any).min ?? 0)((((s as any).fame ?? 0)?.['city_sexind'] + ((s as any).fame ?? 0)?.['city_social'] + ((s as any).camGirl ?? 0)?.['MFC_Followers'] / 50) / 5, 400);
  scene.build();
}

function enterViews(s: GameState, scene: SceneBuilder): void {
  (s as any).cam_viewsVars['dt'] = qspUntranslated(s, "ARGS[1]", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['tt'] = ((s as any).camGirl ?? 0)?.[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._time ?? 0)'];
  (s as any).cam_viewsVars['N'] = ((s as any).camConst ?? 0)?.[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._N ?? 0)'];
  (s as any).cam_viewsVars['Ot'] = ((s as any).camGirl ?? 0)?.[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._Outsiders ?? 0)'];
  (s as any).cam_viewsVars['Lt'] = ((s as any).camGirl ?? 0)?.[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._Lurkers ?? 0)'];
  (s as any).cam_viewsVars['At'] = ((s as any).camGirl ?? 0)?.[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._Actives ?? 0)'];
  (s as any).cam_viewsVars['Pt'] = ((s as any).camGirl ?? 0)?.[$((s as any).camGirl ?? 0)?.['type'] + '((s as any)._Passives ?? 0)'];
  if (((qspUntranslated(s, "\u00000\u0000", { location: "komp_cam_functions" })).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    // TODO-QSP: gs 'LOCA', 'camGirl', 'views', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  } else {
    // TODO-QSP: gs 'komp_cam_functions', $camGirl['type'] + '_views', $ARGS[2], $ARGS[3], $ARGS[4]
  }
  qspCall(s, 'komp_cam_functions', 'views_core');
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
  scene.build();
}

function enterMFCViews(s: GameState, scene: SceneBuilder): void {
  (s as any).cam_viewsVars['OL_g'] = 10;
  (s as any).cam_viewsVars['OL_a'] = 50 + ((s as any).camGirl ?? 0)?.['CamBonus'];
  (s as any).cam_viewsVars['LO_t'] = 25;
  (s as any).cam_viewsVars['LO_g'] = 1500;
  (s as any).cam_viewsVars['LA_g'] = 2000;
  (s as any).cam_viewsVars['LA_a'] = 50 * (50 + ((s as any).camGirl ?? 0)?.['CamBonus']);
  (s as any).cam_viewsVars['AP_t'] = 50;
  (s as any).cam_viewsVars['AP_g'] = 100;
  (s as any).cam_viewsVars['PA_g'] = 2000;
  (s as any).cam_viewsVars['PO_g'] = 1;
  (s as any).cam_viewsVars['PO_a'] = 30;
  if (((s as any).arrpos ?? 0)('ARGS', 'private') >= 0) {
    // TODO-QSP: cam_viewsVars['OL_g'] /= 5
    // TODO-QSP: cam_viewsVars['OL_a'] /= 5
    // TODO-QSP: cam_viewsVars['LO_g'] *= 2
    // TODO-QSP: cam_viewsVars['LA_g'] /= 4
    // TODO-QSP: cam_viewsVars['LA_a'] /= 5
    // TODO-QSP: cam_viewsVars['AP_t'] *= 2
    // TODO-QSP: cam_viewsVars['AP_g'] *= 2
    // TODO-QSP: cam_viewsVars['PA_g'] /= 4
  }
  scene.build();
}

function enterViewsCore(s: GameState, scene: SceneBuilder): void {
  (s as any).cam_viewsVars['N2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['N'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  if (((s as any).camGirl ?? 0)?.['debug'] === 1) {
    // TODO-QSP: "
    (s as any).Ot = ((s as any).cam_viewsVars ?? 0)?.['Ot'];
    (s as any).Lt = ((s as any).cam_viewsVars ?? 0)?.['Lt'];
    (s as any).At = ((s as any).cam_viewsVars ?? 0)?.['At'];
    (s as any).Pt = ((s as any).cam_viewsVars ?? 0)?.['Pt'];
    // TODO-QSP: "
  }
  (s as any).cam_viewsVars['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['OL_g'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  (s as any).cam_viewsVars['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['OL_a'], ((s as any).cam_viewsVars ?? 0)?.['At']);
  (s as any).cam_viewsVars['v3'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['v2']);
  (s as any).cam_viewsVars['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Ot'], ((s as any).cam_viewsVars ?? 0)?.['v3']);
  (s as any).cam_viewsVars['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v4'], ((s as any).cam_viewsVars ?? 0)?.['N2']);
  (s as any).cam_viewsVars['r_OL'] = qspUntranslated(s, "val(cam_viewsVars['v5'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['v1'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['LO_t'], ((s as any).cam_viewsVars ?? 0)?.['tt']);
  (s as any).cam_viewsVars['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Lt'], ((s as any).cam_viewsVars ?? 0)?.['v1']);
  (s as any).cam_viewsVars['v3'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['v2'], ((s as any).cam_viewsVars ?? 0)?.['LO_g']);
  (s as any).cam_viewsVars['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['LO_t'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  (s as any).cam_viewsVars['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v3'], ((s as any).cam_viewsVars ?? 0)?.['v4']);
  (s as any).cam_viewsVars['r_LO'] = qspUntranslated(s, "val(cam_viewsVars['v5'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['LA_g'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  (s as any).cam_viewsVars['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['LA_a'], ((s as any).cam_viewsVars ?? 0)?.['At']);
  (s as any).cam_viewsVars['v3'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['v2']);
  (s as any).cam_viewsVars['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Lt'], ((s as any).cam_viewsVars ?? 0)?.['v3']);
  (s as any).cam_viewsVars['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v4'], ((s as any).cam_viewsVars ?? 0)?.['N2']);
  (s as any).cam_viewsVars['r_LA'] = qspUntranslated(s, "val(cam_viewsVars['v5'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['v1'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['AP_t'], ((s as any).cam_viewsVars ?? 0)?.['tt']);
  (s as any).cam_viewsVars['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['At'], ((s as any).cam_viewsVars ?? 0)?.['v1']);
  (s as any).cam_viewsVars['v3'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['v2'], ((s as any).cam_viewsVars ?? 0)?.['AP_g']);
  (s as any).cam_viewsVars['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['AP_t'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  (s as any).cam_viewsVars['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v3'], ((s as any).cam_viewsVars ?? 0)?.['v4']);
  (s as any).cam_viewsVars['r_AP'] = qspUntranslated(s, "val(cam_viewsVars['v5'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Pt'], ((s as any).cam_viewsVars ?? 0)?.['PA_g']);
  (s as any).cam_viewsVars['v2'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  (s as any).cam_viewsVars['r_PA'] = qspUntranslated(s, "val(cam_viewsVars['v2'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['v1'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['PO_a'], ((s as any).cam_viewsVars ?? 0)?.['At']);
  (s as any).cam_viewsVars['v2'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['PO_g'], ((s as any).cam_viewsVars ?? 0)?.['N']);
  (s as any).cam_viewsVars['v3'] = qspFunc(s, 'math', 'long_add', ((s as any).cam_viewsVars ?? 0)?.['v1'], ((s as any).cam_viewsVars ?? 0)?.['v2']);
  (s as any).cam_viewsVars['v4'] = qspFunc(s, 'math', 'long_mult', ((s as any).cam_viewsVars ?? 0)?.['Pt'], ((s as any).cam_viewsVars ?? 0)?.['v3']);
  (s as any).cam_viewsVars['v5'] = qspFunc(s, 'math', 'long_div', ((s as any).cam_viewsVars ?? 0)?.['v4'], ((s as any).cam_viewsVars ?? 0)?.['N2']);
  (s as any).cam_viewsVars['r_PO'] = qspUntranslated(s, "val(cam_viewsVars['v5'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['r_OL'] = qspUntranslated(s, "max(0, cam_viewsVars['r_OL'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['r_LO'] = qspUntranslated(s, "max(0, cam_viewsVars['r_LO'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['r_AP'] = qspUntranslated(s, "max(0, cam_viewsVars['r_AP'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['r_PA'] = qspUntranslated(s, "max(0, cam_viewsVars['r_PA'])", { location: "komp_cam_functions" });
  (s as any).cam_viewsVars['rand_LOL'] = ((s as any).rand ?? 0)(-((s as any).cam_viewsVars ?? 0)?.['r_LO'], ((s as any).cam_viewsVars ?? 0)?.['r_OL']);
  (s as any).cam_viewsVars['rand_APA'] = ((s as any).rand ?? 0)(-((s as any).cam_viewsVars ?? 0)?.['r_AP'], ((s as any).cam_viewsVars ?? 0)?.['r_PA']);
  (s as any).cam_viewsVars['d_LOL'] = ((s as any).max ?? 0)(-(((s as any).cam_viewsVars ?? 0)?.['Lt'] / 2), ((s as any).min ?? 0)(((s as any).cam_viewsVars ?? 0)?.['rand_LOL'], ((s as any).cam_viewsVars ?? 0)?.['Ot'] / 2));
  (s as any).cam_viewsVars['d_LA'] = ((s as any).rand ?? 0)(0, ((s as any).min ?? 0)(8, ((s as any).max ?? 0)(0, ((s as any).cam_viewsVars ?? 0)?.['Lt']), ((s as any).max ?? 0)(1, 3 * ((s as any).cam_viewsVars ?? 0)?.['r_LA']))) / 3;
  (s as any).cam_viewsVars['d_APA'] = ((s as any).max ?? 0)(-(((s as any).cam_viewsVars ?? 0)?.['At'] / 2), ((s as any).min ?? 0)(((s as any).cam_viewsVars ?? 0)?.['rand_APA'], ((s as any).cam_viewsVars ?? 0)?.['Pt'] / 2));
  (s as any).cam_viewsVars['d_PO'] = ((s as any).rand ?? 0)(0, ((s as any).max ?? 0)(0, ((s as any).min ?? 0)(((s as any).cam_viewsVars ?? 0)?.['Pt'] / 3, ((s as any).cam_viewsVars ?? 0)?.['r_PO'])));
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
  (s as any).cam_viewsVars['nO'] = ((s as any).cam_viewsVars ?? 0)?.['Ot'] - ((s as any).cam_viewsVars ?? 0)?.['d_LOL'] + ((s as any).cam_viewsVars ?? 0)?.['d_PO'];
  (s as any).cam_viewsVars['nL'] = ((s as any).cam_viewsVars ?? 0)?.['Lt'] + ((s as any).cam_viewsVars ?? 0)?.['d_LOL'] - ((s as any).cam_viewsVars ?? 0)?.['d_LA'];
  (s as any).cam_viewsVars['nA'] = ((s as any).cam_viewsVars ?? 0)?.['At'] + ((s as any).cam_viewsVars ?? 0)?.['d_APA'] + ((s as any).cam_viewsVars ?? 0)?.['d_LA'];
  (s as any).cam_viewsVars['nP'] = ((s as any).cam_viewsVars ?? 0)?.['Pt'] - ((s as any).cam_viewsVars ?? 0)?.['d_APA'] - ((s as any).cam_viewsVars ?? 0)?.['d_PO'];
  if (((s as any).camGirl ?? 0)?.['debug'] === 1) {
    // TODO-QSP: "
    (s as any).nO = ((s as any).cam_viewsVars ?? 0)?.['nO'];
    (s as any).nL = ((s as any).cam_viewsVars ?? 0)?.['nL'];
    (s as any).nA = ((s as any).cam_viewsVars ?? 0)?.['nA'];
    (s as any).nP = ((s as any).cam_viewsVars ?? 0)?.['nP'];
    // TODO-QSP: "
  }
  if (((s as any).cam_viewsVars ?? 0)?.['nL'] < 0) {
    (s as any).cam_viewsVars['nO'] = ((s as any).cam_viewsVars['nO'] ?? 0) - (((s as any).cam_viewsVars ?? 0)?.['nL']);
    (s as any).cam_viewsVars['nL'] = 0;
  }
  if (((s as any).cam_viewsVars ?? 0)?.['nA'] < 0) {
    (s as any).cam_viewsVars['nP'] = ((s as any).cam_viewsVars['nP'] ?? 0) - (((s as any).cam_viewsVars ?? 0)?.['nA']);
    (s as any).cam_viewsVars['nA'] = 0;
  }
  scene.build();
}

function enterDonate(s: GameState, scene: SceneBuilder): void {
  if (((qspUntranslated(s, "\u00000\u0000", { location: "komp_cam_functions" })).slice((1)-1, ((1)-1)+(4))) === 'mod_') {
    // TODO-QSP: gs 'LOCA', 'camGirl', 'views', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  } else {
    // TODO-QSP: gs 'komp_cam_functions', $camGirl['type'] + '_donate', ARGS[1], $ARGS[2], $ARGS[3], $ARGS[4]
  }
  scene.build();
}

function enterMFCDonate(s: GameState, scene: SceneBuilder): void {
  (s as any).camGirl['MFC_last_tokens_made'] = 0;
  (s as any).camGirl['MFC_donate_message'] = '';
  (s as any).temp_camVars['N'] = ((s as any).camConst ?? 0)?.['MFC_N'];
  (s as any).temp_camVars['dt'] = qspUntranslated(s, "ARGS[1]", { location: "komp_cam_functions" });
  (s as any).temp_camVars['CamBonus'] = (25 + 10 * ((s as any).temp_camVars ?? 0)?.['dt']) / 50 + (75 + ((s as any).camGirl ?? 0)?.['CamBonus']) / 50;
  (s as any).temp_camVars['eff_V'] = ((s as any).temp_camVars ?? 0)?.['CamBonus'] * ((s as any).camGirl ?? 0)?.['MFC_Actives'] + ((s as any).camGirl ?? 0)?.['MFC_Lurkers'];
  if (((s as any).arrpos ?? 0)('ARGS', 'request') >= 0) {
    (s as any).temp_camVars['p'] = 100;
  } else {
    (s as any).temp_camVars['p'] = 67 * ((s as any).temp_camVars ?? 0)?.['eff_V'] / (((s as any).temp_camVars ?? 0)?.['N'] / 100 + ((s as any).temp_camVars ?? 0)?.['eff_V']);
  }
  if (Math.floor(Math.random() * 100) + 0 >= ((s as any).temp_camVars ?? 0)?.['p']) {
    return;
  }
  (s as any).temp_camVars['mult'] = 100 * ((s as any).temp_camVars ?? 0)?.['CamBonus'] * ((s as any).temp_camVars ?? 0)?.['eff_V'] / (((s as any).temp_camVars ?? 0)?.['N'] / 10 + ((s as any).temp_camVars ?? 0)?.['eff_V']);
  if (((s as any).temp_camVars ?? 0)?.['mult'] > 1) {
    (s as any).temp_camVars['mult'] = qspUntranslated(s, "rand(1, temp_camVars['mult'])", { location: "komp_cam_functions" });
  }
  if (((s as any).rand ?? 0)(0, ((s as any).temp_camVars ?? 0)?.['eff_V'] / ((s as any).temp_camVars ?? 0)?.['CamBonus']) < ((s as any).camGirl ?? 0)?.['MFC_Actives']) {
    (s as any).temp_camVars['payout'] = 4 * ((s as any).max ?? 0)(1, (((s as any).temp_camVars ?? 0)?.['mult'] / 2));
  } else {
    (s as any).temp_camVars['payout'] = 2 * ((s as any).max ?? 0)(1, (((s as any).temp_camVars ?? 0)?.['mult'] / 2));
  }
  (s as any).camGirl['MFC_tokens'] = ((s as any).camGirl['MFC_tokens'] ?? 0) + (((s as any).temp_camVars ?? 0)?.['payout']);
  (s as any).camGirl['MFC_last_tokens_made'] = ((s as any).temp_camVars ?? 0)?.['payout'];
  if (((s as any).temp_camVars ?? 0)?.['payout'] > 0) {
    (s as any).camGirl['MFC_donate_message'] = qspFunc(s, 'wrap', 'v_pos', '+<<temp_camVars[\'payout\']>> Tokens');
  }
  scene.build();
}

function enterPrintStatus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).camGirl ?? 0)?.['type'] === 'MFC') {
    if (((s as any).camGirl ?? 0)?.['MFC_time'] >= 180) {
      if (((s as any).camGirl ?? 0)?.['MFC_time'] < 240) {
        scene.text('<font color="orange">You\'ve been streaming a while. Viewers are slightly more likely to leave, but you can still keep going.</font>');
      } else {
        scene.text('You\'ve been streaming a while and it\'s starting to show. Viewers are more likely to leave.');
        if (((s as any).camGirl ?? 0)?.['MFC_time'] < 480) {
          scene.text('You\'ve been streaming a lot and it\'s showing. Viewers are likely to leave. Maybe you should take a break and continue tomorrow.');
        } else {
          scene.text('<center><b>You\'ve been streaming for too long and it\'s showing. Viewers are very likely to leave. Maybe you should take a break and continue in a few days.</b></center>');
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
    default:
      enterMFCInit(s, scene);
      break;
  }
}

export const komp_cam_functions: LocationDef = {
  name: 'komp_cam_functions',
  title: '+<<temp_camVars[\'payout\']>> Tokens',
  region: 'other',
  description: ['You consider which name you\'d like to register under.'],
  enter: enter,
};
