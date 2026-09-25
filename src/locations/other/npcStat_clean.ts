// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter_Dynamic__(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcID ?? 0)?.[String((s as any).npcStat_clean_i ?? 0)] !== ''  &&  ((s as any).npcStatCalled ?? 0)?.[String((s as any).npcStat_clean_i ?? 0)] < ((s as any).daystart ?? 0) - 2) {
    delete (s as any)['npcStatCalled' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcID' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcdesc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['dick_length' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['dick_width' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcSexskill' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcSpermPot' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcSpermVol' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$boy' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$boydesc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['dick' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['silavag' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$dick_girth' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$dick_girth_pref' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$dick_class' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$dick_desc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$dick_desc_pref' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcAge' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcGender' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcApprnc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcHotcat' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcHair' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcEyes' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcClo' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcHeight' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcHeight_pref' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcBuild' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcBuild_pref' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcRelat' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcAttraction' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['npcRelHotcat' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$npcCondom' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xe' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xec' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xem' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xemc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xyr' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xyrc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xyrs' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xyrsc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xemself' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$xemselfc' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$person' + ((s as any).npcStat_clean_i ?? 0) + ''];
    delete (s as any)['$personc' + ((s as any).npcStat_clean_i ?? 0) + ''];
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).npcStat_clean_i = 0;
  while (true) {
    if (((s as any).npcStat_clean_i ?? 0) > 0  &&  ((s as any).npcStatCalled ?? 0)?.[String((s as any).npcStat_clean_i ?? 0)] < ((s as any).daystart ?? 0) - 2) {
      (s as any).npcStatCalled = undefined;
      (s as any).npcID = undefined;
      (s as any).npcdesc = undefined;
      (s as any).dick_length = undefined;
      (s as any).dick_width = undefined;
      (s as any).npcSexskill = undefined;
      (s as any).npcSpermPot = undefined;
      (s as any).npcSpermVol = undefined;
      (s as any).boy = undefined;
      (s as any).boydesc = undefined;
      (s as any).dick = undefined;
      (s as any).silavag = undefined;
      (s as any).dick_girth = undefined;
      (s as any).dick_girth_pref = undefined;
      (s as any).dick_class = undefined;
      (s as any).dick_desc = undefined;
      (s as any).dick_desc_pref = undefined;
      (s as any).npcAge = undefined;
      (s as any).npcGender = undefined;
      (s as any).npcApprnc = undefined;
      (s as any).npcHotcat = undefined;
      (s as any).npcHair = undefined;
      (s as any).npcEyes = undefined;
      (s as any).npcClo = undefined;
      (s as any).npcHeight = undefined;
      (s as any).npcHeight_pref = undefined;
      (s as any).npcBuild = undefined;
      (s as any).npcBuild_pref = undefined;
      (s as any).npcRelat = undefined;
      (s as any).npcAttraction = undefined;
      (s as any).npcRelHotcat = undefined;
      (s as any).npcCondom = undefined;
      (s as any).xe = undefined;
      (s as any).xec = undefined;
      (s as any).xem = undefined;
      (s as any).xemc = undefined;
      (s as any).xyr = undefined;
      (s as any).xyrc = undefined;
      (s as any).xyrs = undefined;
      (s as any).xyrsc = undefined;
      (s as any).xemself = undefined;
      (s as any).xemselfc = undefined;
      (s as any).person = undefined;
      (s as any).personc = undefined;
      (s as any).npcStat_clean_i = ((s as any).npcStat_clean_i ?? 0) - (1);
      break;
    }
    (s as any).npcStat_clean_i = 1;
    do {
      (s as any).npcStat_clean_i = ((s as any).npcStat_clean_i ?? 0) + (1);
      (s as any).npc_Stat_clean_i = undefined;
    } while (((s as any).npcStat_clean_i ?? 0) < 26);
  }
  const arg = s.locArg;
  switch (arg) {
    case '__dynamic__':
      enter_Dynamic__(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npcStat_clean: LocationDef = {
  name: 'npcStat_clean',
  region: 'other',
  enter: enter,
};
