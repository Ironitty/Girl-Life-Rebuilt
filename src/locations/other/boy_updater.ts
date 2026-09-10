// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHomeImgUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home_img_update ?? 0)?.[String((s as any).npcID ?? 0)] !== 21062026) {
    (s as any).home_img_update[$npcID] = 21062026;
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'mansion') {
      (s as any).temp['update_folder'] = 'mansion';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'multi_bedroom') {
      (s as any).temp['update_folder'] = 'multi_bedroom';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'one_bedroom') {
      (s as any).temp['update_folder'] = '1bedroom';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'studio') {
      (s as any).temp['update_folder'] = 'studio';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'student_dorm') {
      (s as any).temp['update_folder'] = 'studio';
    }
    // TODO-QSP: $npc_apt_bedroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''upd...
    // TODO-QSP: $npc_apt_guestroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''u...
    // TODO-QSP: $npc_apt_kitchen[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''upd...
    // TODO-QSP: $npc_apt_livingroom[$npcID]  = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp['...
    // TODO-QSP: $npc_apt_bathroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''up...
    // TODO-QSP: $npc_apt_hall[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''update...
    if (((s as any).npc_apt_guest_bathroom ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      (s as any).npc_apt_guest_bathroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[\'update_folder\']>>/<<npc_apt_number[$npcID]>>/bathg.jpg">';
    }
    if (((s as any).npc_apt_office ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      (s as any).npc_apt_office[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[\'update_folder\']>>/<<npc_apt_number[$npcID]>>/office.jpg">';
    }
    if (((s as any).npc_apt_pool ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      (s as any).npc_apt_pool[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[\'update_folder\']>>/<<npc_apt_number[$npcID]>>/pool.jpg">';
    }
    if (((s as any).npc_apt_sauna ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      (s as any).npc_apt_sauna[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[\'update_folder\']>>/<<npc_apt_number[$npcID]>>/sauna.jpg">';
    }
    if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      (s as any).npc_apt_spare[$npcID] = '<center><img <<$set_imgh>> src="<<$npcgeneratecVars[\'home_path\']>>/<<$temp[\'update_folder\']>>/<<npc_apt_number[$ARGS[1]]>>/<<$npc_apt_sparetype[$ARGS[1]]>>.jpg"></center>';
    }
  }
  scene.build();
}

function enterFavBodyPart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    if (Math.floor(Math.random() * 4) + 1 === 1) {
      // TODO-QSP: $npc_fav_body_part[$npcID] = 'pussy'
    } else {
      // TODO-QSP: $npc_fav_body_part[$npcID] = 'tits'
      if (Math.floor(Math.random() * 2) + 1 === 2) {
        // TODO-QSP: $npc_fav_body_part[$npcID] = 'ass'
      } else {
        // TODO-QSP: $npc_fav_body_part[$npcID] = 'thighs'
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'home_img_update':
      enterHomeImgUpdate(s, scene);
      break;
    case 'fav_body_part':
      enterFavBodyPart(s, scene);
      break;
    default:
      enterHomeImgUpdate(s, scene);
      break;
  }
}

export const boy_updater: LocationDef = {
  name: 'boy_updater',
  region: 'other',
  enter: enter,
};
