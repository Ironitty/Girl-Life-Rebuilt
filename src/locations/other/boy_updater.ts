import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterHomeImgUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).home_img_update ?? 0)?.[String((s as any).npcID ?? 0)] !== 21062026) {
    ((s as any).home_img_update = (s as any).home_img_update ?? {})[String((s as any).npcID ?? 0)] = 21062026;
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'mansion') {
      ((s as any).temp = (s as any).temp ?? {})['update_folder'] = 'mansion';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'multi_bedroom') {
      ((s as any).temp = (s as any).temp ?? {})['update_folder'] = 'multi_bedroom';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'one_bedroom') {
      ((s as any).temp = (s as any).temp ?? {})['update_folder'] = '1bedroom';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'studio') {
      ((s as any).temp = (s as any).temp ?? {})['update_folder'] = 'studio';
    }
    if (((s as any).npc_apt_type_label ?? 0)?.[String((s as any).npcID ?? 0)] === 'student_dorm') {
      ((s as any).temp = (s as any).temp ?? {})['update_folder'] = 'studio';
    }
    // TODO-QSP: $npc_apt_bedroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''upd...
    // TODO-QSP: $npc_apt_guestroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''u...
    // TODO-QSP: $npc_apt_kitchen[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''upd...
    // TODO-QSP: $npc_apt_livingroom[$npcID]  = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp['...
    // TODO-QSP: $npc_apt_bathroom[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''up...
    // TODO-QSP: $npc_apt_hall[$npcID] = '<img <<$set_imgh>> src="images/shared/romance/lovers/homes/<<$temp[''update...
    if (((s as any).npc_apt_guest_bathroom ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      ((s as any).npc_apt_guest_bathroom = (s as any).npc_apt_guest_bathroom ?? {})[String((s as any).npcID ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/romance/lovers/homes/' + ((s as any).temp ?? 0)?.['update_folder'] + '/' + ((s as any).npc_apt_number ?? 0)?.[String((s as any).npcID ?? 0)] + '/bathg.jpg">';
    }
    if (((s as any).npc_apt_office ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      ((s as any).npc_apt_office = (s as any).npc_apt_office ?? {})[String((s as any).npcID ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/romance/lovers/homes/' + ((s as any).temp ?? 0)?.['update_folder'] + '/' + ((s as any).npc_apt_number ?? 0)?.[String((s as any).npcID ?? 0)] + '/office.jpg">';
    }
    if (((s as any).npc_apt_pool ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      ((s as any).npc_apt_pool = (s as any).npc_apt_pool ?? {})[String((s as any).npcID ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/romance/lovers/homes/' + ((s as any).temp ?? 0)?.['update_folder'] + '/' + ((s as any).npc_apt_number ?? 0)?.[String((s as any).npcID ?? 0)] + '/pool.jpg">';
    }
    if (((s as any).npc_apt_sauna ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      ((s as any).npc_apt_sauna = (s as any).npc_apt_sauna ?? {})[String((s as any).npcID ?? 0)] = '<img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/romance/lovers/homes/' + ((s as any).temp ?? 0)?.['update_folder'] + '/' + ((s as any).npc_apt_number ?? 0)?.[String((s as any).npcID ?? 0)] + '/sauna.jpg">';
    }
    if (((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      ((s as any).npc_apt_spare = (s as any).npc_apt_spare ?? {})[String((s as any).npcID ?? 0)] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="' + ((s as any).npcgeneratecVars ?? 0)?.['home_path'] + '/' + ((s as any).temp ?? 0)?.['update_folder'] + '/' + ((s as any).npc_apt_number ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] + '/' + ((s as any).npc_apt_sparetype ?? 0)?.[((s as any).locArgs?.[1] ?? 0)] + '.jpg"></center>';
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFavBodyPart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      // TODO-QSP: $npc_fav_body_part[$npcID] = 'pussy'
    } else {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        // TODO-QSP: $npc_fav_body_part[$npcID] = 'tits'
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 2) {
          // TODO-QSP: $npc_fav_body_part[$npcID] = 'ass'
        } else {
          // TODO-QSP: $npc_fav_body_part[$npcID] = 'thighs'
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDickUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
      if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
        // TODO-QSP: $npc_dick_noun[$npcID] = 'micropenis'
      } else {
        if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
          // TODO-QSP: $npc_dick_noun[$npcID] = 'short cock'
        } else {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
            // TODO-QSP: $npc_dick_noun[$npcID] = 'chode'
          }
        }
      }
    } else {
      if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 16) {
        if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
          // TODO-QSP: $npc_dick_noun[$npcID] = 'pencil dick'
        } else {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
            // TODO-QSP: $npc_dick_noun[$npcID] = 'dick'
          } else {
            if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
              // TODO-QSP: $npc_dick_noun[$npcID] = 'thick cock'
            }
          }
        }
      } else {
        if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
            // TODO-QSP: $npc_dick_noun[$npcID] = 'long cock'
          } else {
            if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
              // TODO-QSP: $npc_dick_noun[$npcID] = 'sizeable cock'
            } else {
              if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
                // TODO-QSP: $npc_dick_noun[$npcID] = 'enormous cock'
              }
            }
          }
        } else {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
            // TODO-QSP: $npc_dick_noun[$npcID] = 'lengthy dick'
          } else {
            if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
              // TODO-QSP: $npc_dick_noun[$npcID] = 'gigantic cock'
            } else {
              if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
                // TODO-QSP: $npc_dick_noun[$npcID] = 'monster cock'
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 10) {
      if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
        // TODO-QSP: $npc_dick_desc[$npcID] = 'tiny'
      } else {
        if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
          // TODO-QSP: $npc_dick_desc[$npcID] = 'short'
        } else {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
            // TODO-QSP: $npc_dick_desc[$npcID] = 'chode'
          }
        }
      }
    } else {
      if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 16) {
        if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
          // TODO-QSP: $npc_dick_desc[$npcID] = 'skinny'
        } else {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
            // TODO-QSP: $npc_dick_desc[$npcID] = 'normal'
          } else {
            if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
              // TODO-QSP: $npc_dick_desc[$npcID] = 'thick'
            }
          }
        }
      } else {
        if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] < 20) {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
            // TODO-QSP: $npc_dick_desc[$npcID] = 'long'
          } else {
            if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
              // TODO-QSP: $npc_dick_desc[$npcID] = 'huge'
            } else {
              if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
                // TODO-QSP: $npc_dick_desc[$npcID] = 'enormous'
              }
            }
          }
        } else {
          if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'skinny'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'slim') {
            // TODO-QSP: $npc_dick_desc[$npcID] = 'lengthy'
          } else {
            if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'well proportioned'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thicker than average') {
              // TODO-QSP: $npc_dick_desc[$npcID] = 'gigantic'
            } else {
              if (((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'thick'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'massive'  ||  ((s as any).npc_thdick ?? 0)?.[String((s as any).npcID ?? 0)] === 'monstrous') {
                // TODO-QSP: $npc_dick_desc[$npcID] = 'monstrous'
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

function enterCondomUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      // TODO-QSP: $npc_condom_type[$npcID] = 'normal'
    } else {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        // TODO-QSP: $npc_condom_type[$npcID] = 'extra_thin'
      } else {
        // TODO-QSP: $npc_condom_type[$npcID] = 'ribbed'
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStaminaUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    ((s as any).npc_sex_stamina = (s as any).npc_sex_stamina ?? {})[String((s as any).npcID ?? 0)] = Math.floor(Math.random() * 10) + 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterScheduleUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if ((Math.floor(Math.random() * 3) + 1) === 1) {
        ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 8;
        ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 12;
        ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 13;
        ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 21;
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 15;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 20;
          ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 6;
          ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 14;
        } else {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 18;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 22;
          ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 9;
          ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 17;
        }
      }
      ((s as any).npc_day_off = (s as any).npc_day_off ?? {})[String((s as any).npcID ?? 0)] = Math.floor(Math.random() * 7) + 1;
    } else {
      if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 8;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 12;
          ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 13;
          ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 21;
        } else {
          ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 18;
          ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 22;
          ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 9;
          ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 17;
        }
      } else {
        if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 8;
            ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 12;
            ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 13;
            ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 21;
          } else {
            ((s as any).npc_start_free_time = (s as any).npc_start_free_time ?? {})[String((s as any).npcID ?? 0)] = 18;
            ((s as any).npc_end_free_time = (s as any).npc_end_free_time ?? {})[String((s as any).npcID ?? 0)] = 22;
            ((s as any).npc_work_start = (s as any).npc_work_start ?? {})[String((s as any).npcID ?? 0)] = 9;
            ((s as any).npc_work_end = (s as any).npc_work_end ?? {})[String((s as any).npcID ?? 0)] = 17;
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTraitUpdates(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    if (((s as any).npc_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: $npc_rel_goal[$npcID] = 'sex'
    } else {
      if (((s as any).npc_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
        // TODO-QSP: $npc_rel_goal[$npcID] = 'casual'
      } else {
        if (((s as any).npc_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
          // TODO-QSP: $npc_rel_goal[$npcID] = 'serious'
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNameUpdates(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_usedname ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    // TODO-QSP: $pcs_usedname[$npcID] = $pcs_nickname
  }
  // TODO-QSP: end
  scene.build();
}

function enterUnique_NPCStatSeed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).boy ?? 0) === 'A11') {
  }
  // TODO-QSP: end
  scene.build();
}

function enterKolkaSeed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_ev_seeded ?? 0)?.['A134'] !== 1) {
    ((s as any).npc_sex_ev_seeded = (s as any).npc_sex_ev_seeded ?? {})['A134'] = 1;
    ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})['A134'] = 'fuckbuddy';
    ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})['A134'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/home/bedrpar.jpg"></center>';
    ((s as any).npc_humor = (s as any).npc_humor ?? {})['A134'] = 'perverted';
    ((s as any).npc_smoker = (s as any).npc_smoker ?? {})['A134'] = 0;
    ((s as any).npc_latesleeper = (s as any).npc_latesleeper ?? {})['A134'] = 1;
    ((s as any).npc_risktaker = (s as any).npc_risktaker ?? {})['A134'] = 1;
    ((s as any).npc_no_condoms = (s as any).npc_no_condoms ?? {})[String((s as any).npcID ?? 0)] = 2;
    ((s as any).npc_messy = (s as any).npc_messy ?? {})['A134'] = 1;
    ((s as any).npc_arrogant = (s as any).npc_arrogant ?? {})['A134'] = 1;
    ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})['A134'] = 'miss';
    ((s as any).npc_sex_speed = (s as any).npc_sex_speed ?? {})['A134'] = 2;
    ((s as any).npc_dirty_lover = (s as any).npc_dirty_lover ?? {})['A134'] = 1;
    ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})['A134'] = 'creampie';
    ((s as any).npc_tit_pref = (s as any).npc_tit_pref ?? {})['A134'] = 3;
    ((s as any).npc_bush_pref = (s as any).npc_bush_pref ?? {})['A134'] = 1;
    ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})['A134'] = 'tits';
    ((s as any).npc_sexdrive = (s as any).npc_sexdrive ?? {})['A134'] = 4;
    ((s as any).npc_sex_stamina = (s as any).npc_sex_stamina ?? {})['A134'] = 5;
    ((s as any).npc_sex_volume = (s as any).npc_sex_volume ?? {})['A134'] = 2;
  }
  // TODO-QSP: end
  scene.build();
}

function enterVasilySeed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sex_ev_seeded ?? 0)?.['A11'] !== 1) {
    ((s as any).npc_sex_ev_seeded = (s as any).npc_sex_ev_seeded ?? {})['A11'] = 1;
    ((s as any).npc_rel_type = (s as any).npc_rel_type ?? {})['A11'] = 'fuckbuddy';
    ((s as any).npc_apt_bedroom = (s as any).npc_apt_bedroom ?? {})['A11'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/vasily_room.jpg"></center>';
    ((s as any).npc_apt_kitchen = (s as any).npc_apt_kitchen ?? {})['A11'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/kuh.jpg"></center>';
    ((s as any).npc_apt_livingroom = (s as any).npc_apt_livingroom ?? {})['A11'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/bigroom.jpg"></center>';
    ((s as any).npc_apt_bathroom = (s as any).npc_apt_bathroom ?? {})['A11'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/vanna.jpg"></center>';
    ((s as any).npc_apt_hall = (s as any).npc_apt_hall ?? {})['A11'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/locations/pavlovsk/resident/apartment/shulginhome/korr.jpg"></center>';
    ((s as any).npc_humor = (s as any).npc_humor ?? {})['A11'] = 'perverted';
    ((s as any).npc_smoker = (s as any).npc_smoker ?? {})['A11'] = 2;
    ((s as any).npc_latesleeper = (s as any).npc_latesleeper ?? {})['A11'] = 1;
    ((s as any).npc_risktaker = (s as any).npc_risktaker ?? {})['A11'] = 1;
    ((s as any).npc_messy = (s as any).npc_messy ?? {})['A11'] = 1;
    ((s as any).npc_arrogant = (s as any).npc_arrogant ?? {})['A11'] = 1;
    ((s as any).npc_fav_pos = (s as any).npc_fav_pos ?? {})['A11'] = 'doggy';
    ((s as any).npc_sex_speed = (s as any).npc_sex_speed ?? {})['A11'] = 2;
    ((s as any).npc_dirty_lover = (s as any).npc_dirty_lover ?? {})['A11'] = 1;
    ((s as any).npc_cum_pref = (s as any).npc_cum_pref ?? {})['A11'] = 'creampie';
    qspCall(s, 'npc_set_preference', 'A11', 'body_tits_big', 'like');
    qspCall(s, 'npc_set_preference', 'A11', 'hair_pubes_shaven', 'like');
    ((s as any).npc_fav_body_part = (s as any).npc_fav_body_part ?? {})['A11'] = 'tits';
    ((s as any).npc_sexdrive = (s as any).npc_sexdrive ?? {})['A11'] = 4;
    ((s as any).npc_sex_stamina = (s as any).npc_sex_stamina ?? {})['A11'] = 5;
  }
  // TODO-QSP: end
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
    case 'dick_update':
      enterDickUpdate(s, scene);
      break;
    case 'condom_update':
      enterCondomUpdate(s, scene);
      break;
    case 'stamina_update':
      enterStaminaUpdate(s, scene);
      break;
    case 'schedule_update':
      enterScheduleUpdate(s, scene);
      break;
    case 'trait_updates':
      enterTraitUpdates(s, scene);
      break;
    case 'name_updates':
      enterNameUpdates(s, scene);
      break;
    case 'unique_NPC_stat_seed':
      enterUnique_NPCStatSeed(s, scene);
      break;
    case 'kolka_seed':
      enterKolkaSeed(s, scene);
      break;
    case 'vasily_seed':
      enterVasilySeed(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const boy_updater: LocationDef = {
  name: 'boy_updater',
  region: 'other',
  enter: enter,
};
