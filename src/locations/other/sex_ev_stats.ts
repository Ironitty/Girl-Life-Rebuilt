import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterNpcUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    ((s as any).npc_usedname ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_firstname ?? 0)?.[String((s as any).npcID ?? 0)];
  }
  qspCall(s, 'boy_updater', 'fav_body_part');
  qspCall(s, 'boy_updater', 'dick_update');
  qspCall(s, 'boy_updater', 'condom_update');
  qspCall(s, 'boy_updater', 'stamina_update');
  qspCall(s, 'boy_updater', 'humor_update');
  qspCall(s, 'boy_updater', 'schedule_update');
  qspCall(s, 'boy_updater', 'trait_updates');
  qspCall(s, 'boy_updater', 'name_updates');
  scene.build();
}

function enterStartingStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'transfer_backup', 0, 'sex_ev');
  qspCall(s, 'outfit', 'safe_backup', 'sex_ev');
  ((s as any).sex_ev ?? {})['starting_makeup'] = ((s as any).pcs_makeup ?? 0);
  ((s as any).sex_ev ?? {})['cum_vagina'] = ((s as any).cum_loc ?? 0)?.['vagina'];
  ((s as any).sex_ev ?? {})['cum_labia'] = ((s as any).cum_loc ?? 0)?.['labia'];
  ((s as any).sex_ev ?? {})['cum_panty_front'] = ((s as any).cum_loc ?? 0)?.['panty_front'];
  ((s as any).sex_ev ?? {})['cum_anus'] = ((s as any).cum_loc ?? 0)?.['anus'];
  ((s as any).sex_ev ?? {})['cum_butt'] = ((s as any).cum_loc ?? 0)?.['butt'];
  ((s as any).sex_ev ?? {})['cum_panty_back'] = ((s as any).cum_loc ?? 0)?.['panty_back'];
  ((s as any).sex_ev ?? {})['cum_clothes_groin'] = ((s as any).cum_loc ?? 0)?.['clothes_groin'];
  ((s as any).sex_ev ?? {})['cum_clothes'] = ((s as any).cum_loc ?? 0)?.['clothes'];
  ((s as any).sex_ev ?? {})['cum_back'] = ((s as any).cum_loc ?? 0)?.['back'];
  ((s as any).sex_ev ?? {})['cum_legs '] = ((s as any).cum_loc ?? 0)?.['legs '];
  ((s as any).sex_ev ?? {})['cum_arms'] = ((s as any).cum_loc ?? 0)?.['arms'];
  ((s as any).sex_ev ?? {})['cum_face'] = ((s as any).cum_loc ?? 0)?.['face'];
  ((s as any).sex_ev ?? {})['cum_mouth'] = ((s as any).cum_loc ?? 0)?.['mouth'];
  ((s as any).sex_ev ?? {})['cum_hands'] = ((s as any).cum_loc ?? 0)?.['hands'];
  ((s as any).sex_ev ?? {})['cum_stomach'] = ((s as any).cum_loc ?? 0)?.['stomach'];
  ((s as any).sex_ev ?? {})['cum_tits'] = ((s as any).cum_loc ?? 0)?.['tits'];
  ((s as any).sex_ev ?? {})['cum_hair'] = ((s as any).cum_loc ?? 0)?.['hair'];
  ((s as any).sex_ev ?? {})['starting_sweat'] = ((s as any).pcs_sweat ?? 0);
  if ((!((s as any).orgasm ?? 0))) {
    ((s as any).sex_ev ?? {})['never_orgasmed'] = 1;
  }
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev ?? {})['orgasm_limit'] = ((s as any).orgasm ?? 0) + 6;
  ((s as any).sex_ev ?? {})['pc_condom_count'] = ((s as any).mc_inventory ?? 0)?.['normal_condoms'];
  ((s as any).sex_ev ?? {})['start_time'] = ((s as any).totminut ?? 0);
  ((s as any).sex_ev ?? {})['start_hour'] = ((s as any).hour ?? 0);
  ((s as any).sex_ev ?? {})['sex_stamina'] = ((s as any).npc_sex_stamina ?? 0)?.[String((s as any).npcID ?? 0)];
  if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
    ((s as any).sex_ev ?? {})['magik'] = ((s as any).pcs_magik ?? 0);
  }
  if (((s as any).tabletkiday ?? 0) === ((s as any).daystart ?? 0)) {
    ((s as any).sex_ev ?? {})['bc_take'] = 1;
  }
  if (((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    // TODO-QSP: $npc_lovername[$npcID] = 'babe'
    // TODO-QSP: $npc_lovername2[$npcID] = 'baby'
  }
  if (((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
    ((s as any).sex_ev ?? {})['creampie_allowance'] = 1;
  }
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    if (((s as any).tabletkishot ?? 0) > 0) {
      ((s as any).sex_ev ?? {})['bc_type'] = 'shot';
    } else {
      ((s as any).sex_ev ?? {})['bc_type'] = ' pill';
    }
  }
  scene.build();
}

function enterSexEndStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['sex_over'] = 1;
  ((s as any).sex_ev ?? {})['last_cum_time'] = ((s as any).totminut ?? 0);
  ((s as any).sex_ev ?? {})['finish_time'] = ((s as any).totminut ?? 0);
  // TODO-QSP: $npc_last_sex_enjoyment[$npcID] = $sex_ev['fuck_enjoyment']
  ((s as any).npc_last_orgasm_count ?? {})[String((s as any).npcID ?? 0)] = ((s as any).sex_ev ?? 0)?.['orgasm_count'];
  if (((s as any).locArgs?.[1] ?? 0) === 'unhappy') {
    ((s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 0;
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'unsatisfied') {
      ((s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 1 + ((s as any).sex_ev ?? {})?.['fav_npc_position'];
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'okay') {
        ((s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 2 + ((s as any).sex_ev ?? {})?.['fav_npc_position'];
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'good') {
          ((s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 3 + ((s as any).sex_ev ?? {})?.['fav_npc_position'];
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'great') {
            ((s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 4 + ((s as any).sex_ev ?? {})?.['fav_npc_position'];
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'fucked_dry') {
              ((s as any).npc_last_sex_score ?? {})[String((s as any).npcID ?? 0)] = 5 + ((s as any).sex_ev ?? {})?.['fav_npc_position'];
            }
          }
        }
      }
    }
  }
  if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 0) {
    // TODO-QSP: $npc_last_sex_quality[$npcID] = 'unhappy'
  } else {
    if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 1) {
      // TODO-QSP: $npc_last_sex_quality[$npcID] = 'unsatisfied'
    } else {
      if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 2) {
        // TODO-QSP: $npc_last_sex_quality[$npcID] = 'okay'
      } else {
        if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 3) {
          // TODO-QSP: $npc_last_sex_quality[$npcID] = 'good'
        } else {
          if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] <= 4  &&  ((s as any).locArgs?.[1] ?? 0) !== 'fucked_dry') {
            // TODO-QSP: $npc_last_sex_quality[$npcID] = 'great'
          } else {
            // TODO-QSP: $npc_last_sex_quality[$npcID] = 'fucked_dry'
          }
        }
      }
    }
  }
  scene.build();
}

function enterStartingMood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'reluctant') {
    ((s as any).sex_ev ?? {})['starting_mood'] = 'reluctant';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'consensual') {
      ((s as any).sex_ev ?? {})['starting_mood'] = 'consensual';
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'excited') {
        ((s as any).sex_ev ?? {})['starting_mood'] = 'excited';
      } else {
        ((s as any).sex_ev ?? {})['starting_mood'] = 'consensual';
      }
    }
  }
  scene.build();
}

function enterSaveStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
    if (((s as any).sex_ev ?? 0)?.['bed_choice'] !== 'anya_bed') {
      ((s as any).stat ?? {})['bed_cum'] = ((s as any).totminut ?? 0);
      // TODO-QSP: $cum_sheets[] = $npcID
    } else {
      ((s as any).stat ?? {})['anya_bed_cum'] = ((s as any).daystart ?? 0);
    }
  }
  if ((Array.isArray((s as any).body_count) ? ((s as any).body_count as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
    // TODO-QSP: $body_count[] = $npcID
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'npc_update':
      enterNpcUpdate(s, scene);
      break;
    case 'starting_stats':
      enterStartingStats(s, scene);
      break;
    case 'sex_end_stats':
      enterSexEndStats(s, scene);
      break;
    case 'starting_mood':
      enterStartingMood(s, scene);
      break;
    case 'save_stats':
      enterSaveStats(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_stats: LocationDef = {
  name: 'sex_ev_stats',
  region: 'other',
  enter: enter,
};
