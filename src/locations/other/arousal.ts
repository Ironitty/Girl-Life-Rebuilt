import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'traits', 'sizequeen', 'update');
  qspCall(s, 'arousal_stats', 'end', ((s as any).locArgs?.[1] ?? 0));
  return;
  if (((';count;count2;checks;auto_lube;').indexOf((';\' + $ARGS[0] + \';'))) + 1 > 0) {
    qspCall(s, 'arousal_funcs', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    return;
  }
  if (((s as any).arousal_overcall ?? 0)?.['args'] === ((s as any).locArgs?.[0] ?? 0) + ((s as any).locArgs?.[1] ?? 0) + ((s as any).locArgs?.[2] ?? 0) + ((s as any).locArgs?.[3] ?? 0) + ((s as any).locArgs?.[4] ?? 0) + ((s as any).locArgs?.[5] ?? 0) + ((s as any).locArgs?.[6] ?? 0) + ((s as any).locArgs?.[7] ?? 0) + ((s as any).locArgs?.[8] ?? 0)) {
    (s as any).arousal_overcall = 1;
  } else {
    (s as any).arousal_overcall = 0;
    ((s as any).arousal_overcall ?? {})['args'] = ((s as any).locArgs?.[0] ?? 0) + ((s as any).locArgs?.[1] ?? 0) + ((s as any).locArgs?.[2] ?? 0) + ((s as any).locArgs?.[3] ?? 0) + ((s as any).locArgs?.[4] ?? 0) + ((s as any).locArgs?.[5] ?? 0) + ((s as any).locArgs?.[6] ?? 0) + ((s as any).locArgs?.[7] ?? 0) + ((s as any).locArgs?.[8] ?? 0);
  }
  (s as any).temp_time = ((s as any).ARGS ?? 0)[0] + ((s as any).ARGS ?? 0)[1] + ((s as any).ARGS ?? 0)[2] + ((s as any).ARGS ?? 0)[3] + ((s as any).ARGS ?? 0)[4] + ((s as any).ARGS ?? 0)[5] + ((s as any).ARGS ?? 0)[6] + ((s as any).ARGS ?? 0)[7] + ((s as any).ARGS ?? 0)[8];
  if ((!((s as any).temp_time ?? 0))) {
    scene.text('Error: Arousal called with a duration of 0 minutes.');
  } else {
    if (((s as any).temp_time ?? 0) > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + (((s as any).temp_time ?? 0));
    }
  }
  ((s as any).stim ?? {})['time'] = ((((s as any).temp_time ?? 0) > 0) ? (((s as any).temp_time ?? 0)) : (-((s as any).temp_time ?? 0)));
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unaware') : -1) >= 0) {
    ((s as any).arousalVars ?? {})['unaware'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_orgasm_msg') : -1) >= 0) {
    ((s as any).arousalVars ?? {})['text'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('self') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('masturbation') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('masturbate') : -1) >= 0  ||  ((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(5))) === 'self_') {
    ((s as any).arousalVars ?? {})['self'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_stats') : -1) >= 0) {
    ((s as any).arousalVars ?? {})['no_stats'] = 1;
  }
  if (((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(11))) === 'dick_length') {
    if (((s as any).npcID ?? 0) === '') {
      ((s as any).arousalVars ?? {})['self'] = 1;
    } else {
      qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'j');
    }
    // TODO-QSP: dynamic "
    // TODO-QSP: gs 'npcStat', $npcID<<$mid($ARGS[2], 12)>>, 'k'
    (s as any).dick_length11 = qspUntranslated(s, "dick_length0", { location: "arousal" });
    (s as any).silavag11 = qspUntranslated(s, "silavag0", { location: "arousal" });
    (s as any).dick_width11 = qspUntranslated(s, "dick_width0", { location: "arousal" });
    // TODO-QSP: "
  } else {
    if (((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'dick') {
      if (((s as any).npcID ?? 0) === '') {
        ((s as any).arousalVars ?? {})['self'] = 1;
      } else {
        qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'j');
      }
      // TODO-QSP: dynamic "
      // TODO-QSP: gs 'npcStat', $npcID<<$mid($ARGS[2], 5)>>, 'k'
      (s as any).dick_length11 = qspUntranslated(s, "dick_length0", { location: "arousal" });
      (s as any).silavag11 = qspUntranslated(s, "silavag0", { location: "arousal" });
      (s as any).dick_width11 = qspUntranslated(s, "dick_width0", { location: "arousal" });
      // TODO-QSP: "
    } else {
      if (qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[2] ?? 0))) {
        if (((((s as any).locArgs?.[2] ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'D') {
        } else {
          if (qspFunc(s, 'npc', 'is_npcID', ((s as any).locArgs?.[3] ?? 0))) {
          }
        }
        if (((s as any).arousal_npcID1 ?? 0) === '') {
          ((s as any).arousalVars ?? {})['self'] = 1;
        } else {
          qspCall(s, 'npcStat', '', ((s as any).arousal_npcID1 ?? 0), 'j');
        }
        if (((s as any).arousal_npcID2 ?? 0) === '') {
        }
        if (((s as any).temp_index ?? 0) !== 'none') {
          qspCall(s, 'npc', 'copy_npcStat', ((s as any).temp_index ?? 0), 'k');
        } else {
          qspCall(s, 'npcStat', '', ((s as any).arousal_npcID2 ?? 0), 'k');
        }
      } else {
        if (((s as any).npcID ?? 0) === '') {
          ((s as any).arousalVars ?? {})['self'] = 1;
          qspCall(s, 'npcStat', 'D1', 'k');
        } else {
          qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'j');
          qspCall(s, 'npcStat', '', ((s as any).npcID ?? 0), 'k', ((s as any).npcCondom ?? 0));
        }
      }
    }
  }
  if (((s as any).arousalVars ?? 0)?.['self'] === 0  &&  ((((s as any).npcID11 ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'D') {
    (s as any).silavag11 = ((s as any).silavag10 ?? 0);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('prostitution') : -1) >= 0) {
    (s as any).silavag11 = Math.floor(Math.random() * 2) + 0;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gangbang') : -1) >= 0) {
    (s as any).silavag11 = Math.floor(Math.random() * 3) + 0;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rape') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rough') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) >= 0) {
    (s as any).silavag11 = 0;
  }
  ((s as any).arousalVars ?? {})['girth_range'] = Math.min(Math.max(1, (((s as any).dick_width11 ?? 0) - 9) * 5), 30);
  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'anal'  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('anal_finger') : -1) < 0) {
    if (((s as any).anal_slip ?? 0) < Math.max(1, 8 + ((s as any).pain ?? 0)?.['asshole']/2 - ((s as any).pcs_ass ?? 0))) {
      ((s as any).anslipVars ?? {})['cum'] = (Math.floor(Math.random() * (3 * cumvol[3] - 2 * cumvol[3] + 1)) + (2 * cumvol[3])) / 30;
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('spit') : -1) >= 0) {
        ((s as any).anslipVars ?? {})['spit'] = 4;
      }
      if (((s as any).ar_anal_lube ?? 0) === 1) {
        ((s as any).anslipVars ?? {})['lube'] = 8;
      } else {
        if (Math.max('anslipVars') < Math.min(Math.max(1, 8 + ((s as any).pain ?? 0)?.['asshole']/2 - ((s as any).pcs_ass ?? 0)), 8)) {
          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('lube') : -1) >= 0  &&  (!((s as any).ar_anal_lube ?? 0))) {
            ((s as any).anslipVars ?? {})['lube'] = 8;
            (s as any).ar_anal_lube = 1;
          } else {
            if (((s as any).auto_anal_lube ?? 0) === 1  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rape') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gangbang') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rough') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('BDSM') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bound') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('humiliation') : -1) < 0) {
              qspCall(s, 'arousal_funcs', 'auto_lube', 'anal');
            }
          }
        }
      }
      (s as any).anal_slip = qspUntranslated(s, "max('anslipVars')", { location: "arousal" });
      if (((s as any).anal_slip ?? 0) !== ((s as any).lubonus ?? 0)  &&  ((s as any).lubonus ?? 0) > 0) {
        (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (((s as any).lubonus ?? 0));
        (s as any).lubonus = ((s as any).anal_slip ?? 0);
      }
    }
  }
  if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'vagi'  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('vaginal_finger') : -1) < 0) {
    if (((s as any).vaginal_slip ?? 0) < Math.max(1, 8 + ((s as any).pain ?? 0)?.['vaginal'] / 2 - ((s as any).pcs_vag ?? 0))) {
      ((s as any).vagslipVars ?? {})['horny'] = Math.min(((s as any).pcs_horny ?? 0) / 10, 10);
      ((s as any).vagslipVars ?? {})['cum'] = (Math.floor(Math.random() * (2 * cumvol[0] - cumvol[0] + 1)) + (cumvol[0])) / 10;
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('spit') : -1) >= 0) {
        ((s as any).vagslipVars ?? {})['spit'] = 4;
      }
      if (((s as any).ar_vag_lube ?? 0) === 1) {
        ((s as any).vagslipVars ?? {})['lube'] = 8;
      } else {
        if (Math.max('vagslipVars') < Math.min(Math.max(1, 8 + ((s as any).pain ?? 0)?.['vaginal']/2 - ((s as any).pcs_vag ?? 0)), 8)) {
          if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('lube') : -1) >= 0  &&  (!((s as any).ar_vag_lube ?? 0))) {
            ((s as any).vagslipVars ?? {})['lube'] = 8;
            (s as any).ar_vag_lube = 1;
          } else {
            if (((s as any).auto_vag_lube ?? 0) === 1  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rape') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gangbang') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rough') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('BDSM') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bound') : -1) < 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('humiliation') : -1) < 0) {
              qspCall(s, 'arousal_funcs', 'auto_lube', 'vag');
            }
          }
        }
      }
      (s as any).vaginal_slip = qspUntranslated(s, "max('vagslipVars')", { location: "arousal" });
    }
  }
  if (((((s as any).locArgs?.[0] ?? 0)).slice((((((s as any).locArgs?.[0] ?? 0)).length) - 3)-1)) !== 'give') {
    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'vagi'  ||  ((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'anal') {
      if (((s as any).dick_length11 ?? 0) >= 22) {
        ((s as any).trait_vars ?? {})['sizequeen_temp'] = (((s as any).trait_vars ?? {})['sizequeen_temp'] ?? 0) + (3);
      } else {
        if (((s as any).dick_length11 ?? 0) >= 17) {
          ((s as any).trait_vars ?? {})['sizequeen_temp'] = (((s as any).trait_vars ?? {})['sizequeen_temp'] ?? 0) + (1);
        } else {
          if (((s as any).dick_length11 ?? 0) <= 7) {
            ((s as any).trait_vars ?? {})['sizequeen_temp'] = (((s as any).trait_vars ?? {})['sizequeen_temp'] ?? 0) - (3);
          } else {
            if (((s as any).dick_length11 ?? 0) <= 12) {
              ((s as any).trait_vars ?? {})['sizequeen_temp'] = (((s as any).trait_vars ?? {})['sizequeen_temp'] ?? 0) - (2);
            }
          }
        }
      }
    }
    if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'vagi') {
      if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
        if (((s as any).arousalVars ?? 0)?.['pcs_vag_backup'] === 0) {
          ((s as any).arousalVars ?? {})['pcs_vag_backup'] = ((s as any).pcs_vag ?? 0);
        }
        (s as any).pcs_vag = ((s as any).dick_length11 ?? 0);
      } else {
        if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1) {
          if (((s as any).arousalVars ?? 0)?.['pcs_vag_backup'] === 0) {
            ((s as any).arousalVars ?? {})['pcs_vag_backup'] = ((s as any).pcs_vag ?? 0);
          }
          (s as any).pcs_vag = Math.min(((s as any).dick_length11 ?? 0), ((s as any).pcs_vag ?? 0) + 10);
        } else {
          if (((s as any).trait_vars ?? 0)?.['elasticity'] < 0) {
            if (((s as any).arousalVars ?? 0)?.['pcs_vag_backup'] === 0) {
              ((s as any).arousalVars ?? {})['pcs_vag_backup'] = ((s as any).pcs_vag ?? 0);
            }
            (s as any).pcs_vag = Math.max(5, ((s as any).pcs_vag ?? 0) - 5);
          }
        }
      }
    } else {
      if (((((s as any).locArgs?.[0] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'anal') {
        if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
          if (((s as any).arousalVars ?? 0)?.['pcs_ass_backup'] === 0) {
            ((s as any).arousalVars ?? {})['pcs_ass_backup'] = ((s as any).pcs_ass ?? 0);
          }
          (s as any).pcs_ass = ((s as any).dick_length11 ?? 0);
        } else {
          if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1) {
            if (((s as any).arousalVars ?? 0)?.['pcs_ass_backup'] === 0) {
              ((s as any).arousalVars ?? {})['pcs_ass_backup'] = ((s as any).pcs_ass ?? 0);
            }
            (s as any).pcs_ass = Math.min(((s as any).dick_length11 ?? 0), ((s as any).pcs_ass ?? 0) + 10);
          } else {
            if (((s as any).trait_vars ?? 0)?.['elasticity'] < 0) {
              if (((s as any).arousalVars ?? 0)?.['pcs_ass_backup'] === 0) {
                ((s as any).arousalVars ?? {})['pcs_ass_backup'] = ((s as any).pcs_ass ?? 0);
              }
              (s as any).pcs_ass = Math.max(5, ((s as any).pcs_ass ?? 0) - 5);
            }
          }
        }
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'bj'  ||  ((s as any).locArgs?.[0] ?? 0) === 'dildo_suck'  ||  ((s as any).locArgs?.[0] ?? 0) === 'strap_suck') {
          if (((s as any).succubusflag ?? 0) === 1  &&  ((s as any).sucskill ?? 0) >= 4) {
            if (((s as any).arousalVars ?? 0)?.['pcs_throat_backup'] === 0) {
              ((s as any).arousalVars ?? {})['pcs_throat_backup'] = ((s as any).pcs_throat ?? 0);
            }
            (s as any).pcs_throat = ((s as any).dick_length11 ?? 0);
          } else {
            if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1) {
              if (((s as any).arousalVars ?? 0)?.['pcs_throat_backup'] === 0) {
                ((s as any).arousalVars ?? {})['pcs_throat_backup'] = ((s as any).pcs_throat ?? 0);
              }
              (s as any).pcs_throat = Math.min(((s as any).dick_length11 ?? 0), ((s as any).pcs_throat ?? 0) + 10);
            } else {
              if (((s as any).trait_vars ?? 0)?.['elasticity'] < 0) {
                if (((s as any).arousalVars ?? 0)?.['pcs_throat_backup'] === 0) {
                  ((s as any).arousalVars ?? {})['pcs_throat_backup'] = ((s as any).pcs_throat ?? 0);
                }
                (s as any).pcs_throat = Math.max(5, ((s as any).pcs_throat ?? 0) - 5);
              }
            }
          }
        }
      }
    }
  }
  ((s as any).stim ?? {})['act'] = 1;
  ((s as any).stim ?? {})['mag'] = qspFunc(s, 'arousal_funcs', 'get_base_stimmag');
  (s as any).pain_coeff = 0;
  ((s as any).arousalVars ?? {})['max_sex_pain'] = (120 - ((s as any).pcs_vital ?? 0)) / 4;
  ((s as any).stim ?? {})['kinkno'] = 0;
  ((s as any).stim ?? {})['kink'] = 0;
  ((s as any).stim ?? {})['pref'] = 0;
  if (0  &&  ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('porn') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('voyeur') : -1) >= 0  &&  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('erotic') : -1) >= 0)) {
    ((s as any).stim ?? {})['no_kinks'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('BDSM') : -1) >= 0) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 2) + 4);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bound') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 2) + 2);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'bound'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'bound'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['bound'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 4) + 7);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'beast'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'beast'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['beast'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('creampie') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'creampie'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'creampie'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['creampie'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('deepthroat') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'deepthroat'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'deepthroat'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['deepthroat'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('dom') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'dom'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'dom'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['dom'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('exhibitionism') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'exhibitionism'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'exhibitionism'));
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 5) + 2);
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['exhibitionism'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('feet') : -1) > 1  ||  ((s as any).arousalVars ?? 0)?.['foot'] === 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'feet'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'feet'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['feet'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gangbang') : -1) > 1  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gang') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 6) + 10);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'gangbang'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'gangbang'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_gang'] = 1;
    } else {
      ((s as any).stim ?? {})['gangbang'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gloryhole') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'gloryhole'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'gloryhole'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_gloryhole'] = 1;
    } else {
      ((s as any).stim ?? {})['gloryhole'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('group') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'group'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'group'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_group'] = 1;
    } else {
      ((s as any).stim ?? {})['group'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('orgy') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'orgy'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'orgy'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_orgy'] = 1;
    } else {
      ((s as any).stim ?? {})['orgy'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('humiliation') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'humiliation'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'humiliation'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['humiliation'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('incest') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'incest'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'incest'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['incest'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('lesbian') : -1) > 1  ||  ((s as any).arousalVars ?? 0)?.['lesbian'] === 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'lesbian'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'lesbian'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_lesbian'] = 1;
    } else {
      ((s as any).stim ?? {})['lesbian'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('maso') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 2) + 3);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'maso'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'maso'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['maso'] = 1;
  }
  if (((s as any).arousalVars ?? 0)?.['self'] === 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'masturbate'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'masturbate'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['masturbate'] = 1;
    ((s as any).orgasm_flag ?? {})['masturbate'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('pregnant') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'pregnant'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'pregnant'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['pregnant'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('prostitution') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.max(0, (Math.floor(Math.random() * (2 - -3 + 1)) + (-3))));
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'prostitution'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'prostitution'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_prostitution'] = 1;
    } else {
      ((s as any).stim ?? {})['prostitution'] = 1;
      if ((((s as any).count ?? 0)?.['vaginal'] === 1  ||  ((s as any).count ?? 0)?.['vaginal_strap'] === 1)  &&  ((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
        ((s as any).virgin_stats ?? {})['prostitute'] = 1;
      }
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('public') : -1) > 1) {
    ((s as any).stim ?? {})['public'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rape') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 16) + 15);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'rape'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'rape'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).rape ?? {})[1] = ((s as any).daystart ?? 0);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_rape'] = 1;
    } else {
      ((s as any).stim ?? {})['rape'] = 1;
    }
    if ((((s as any).count ?? 0)?.['vaginal'] === 1  ||  ((s as any).count ?? 0)?.['vaginal_strap'] === 1)  &&  ((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
      ((s as any).virgin_stats ?? {})['rape'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rough') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 3) + 5);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'rough'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'rough'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['rough'] = 1;
    (s as any).pcs_hairbsh = (-1);
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('shemale') : -1) > 1) {
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'shemale'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'shemale'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).stim ?? {})['hidden_shemale'] = 1;
    } else {
      ((s as any).stim ?? {})['shemale'] = 1;
    }
    if ((((s as any).count ?? 0)?.['vaginal'] === 1  ||  ((s as any).count ?? 0)?.['vaginal_strap'] === 1)  &&  ((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
      ((s as any).virgin_stats ?? {})['shemale'] = 1;
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('sub') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.floor(Math.random() * 2) + 1);
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'sub'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'sub'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['sub'] = 1;
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unknown') : -1) > 1) {
    (s as any).pain_coeff = ((s as any).pain_coeff ?? 0) + (Math.max(0, (Math.floor(Math.random() * (1 - -4 + 1)) + (-4))));
    ((s as any).stim ?? {})['kink'] = (((s as any).stim ?? {})['kink'] ?? 0) + (qspFunc(s, 'fetish', 'get_exp', 'unknown'));
    ((s as any).stim ?? {})['pref'] = (((s as any).stim ?? {})['pref'] ?? 0) + (qspFunc(s, 'fetish', 'get_pref', 'unknown'));
    ((s as any).stim ?? {})['kinkno'] = (((s as any).stim ?? {})['kinkno'] ?? 0) + (1);
    ((s as any).stim ?? {})['unknown'] = 1;
  }
  if (((s as any).stim ?? 0)?.['kinkno'] > 0) {
    ((s as any).stim ?? {})['kink'] = ((s as any).stim ?? {})?.['kink'] / ((s as any).stim ?? {})?.['kinkno'];
    ((s as any).stim ?? {})['pref'] = ((s as any).stim ?? {})?.['pref'] / ((s as any).stim ?? {})?.['kinkno'];
    ((s as any).stim ?? {})['kinkno'] = 0;
  }
  if ((Math.floor(Math.random() * 100) + 0) < ((s as any).stim ?? 0)?.['kink']) {
    ((s as any).stim ?? {})['kink'] = 120;
  } else {
    if ((Math.floor(Math.random() * 80) + 0) < ((s as any).stim ?? 0)?.['kink']) {
      ((s as any).stim ?? {})['kink'] = 110;
    } else {
      if ((Math.floor(Math.random() * 60) + 0) < ((s as any).stim ?? 0)?.['kink']) {
        ((s as any).stim ?? {})['kink'] = 100;
      } else {
        if ((Math.floor(Math.random() * 40) + 0) < ((s as any).stim ?? 0)?.['kink']) {
          ((s as any).stim ?? {})['kink'] = 90;
        } else {
          ((s as any).stim ?? {})['kink'] = 80;
        }
      }
    }
  }
  scene.build();
}

function enterForeplay(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_foreplay'] = 1;
    } else {
      ((s as any).count ?? {})['foreplay'] = 1;
    }
  }
  scene.build();
}

function enterForeplayGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_foreplay_give'] = 1;
    } else {
      ((s as any).count ?? {})['foreplay_give'] = 1;
    }
  }
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 10;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_kiss'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_kissed) ? ((s as any).arousal_npc_hidden_kissed as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_kissed[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['kiss'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_kissed) ? ((s as any).arousal_npc_kissed as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_kissed[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterMassage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_massage'] = 1;
    } else {
      ((s as any).count ?? {})['massage'] = 1;
    }
  }
  scene.build();
}

function enterMassageGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 4) + 3) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).count ?? {})['massage_give'] = 1;
  ((s as any).stim ?? {})['act'] = 10;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_massage_give'] = 1;
    } else {
      ((s as any).count ?? {})['massage_give'] = 1;
    }
  }
  scene.build();
}

function enterErotic(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 5;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_erotic'] = 1;
    } else {
      ((s as any).count ?? {})['erotic'] = 1;
    }
  }
  scene.build();
}

function enterEroticNudity(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 5;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_erotic_nudity'] = 1;
    } else {
      ((s as any).count ?? {})['erotic_nudity'] = 1;
    }
  }
  scene.build();
}

function enterPorn(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_hidden_porn'] = 1;
    } else {
      ((s as any).count ?? {})['porn'] = 1;
    }
  }
  scene.build();
}

function enterVoyeur(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_voyeur'] = 1;
    } else {
      ((s as any).count ?? {})['voyeur'] = 1;
    }
  }
  scene.build();
}

function enterVoyeurSex(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 35;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_voyeur_sex'] = 1;
    } else {
      ((s as any).count ?? {})['voyeur_sex'] = 1;
    }
  }
  scene.build();
}

function enterBreasts(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).lactation ?? 0)?.['active'] > 0  &&  ((s as any).lactation ?? 0)?.['breastmv'] > 3 * ((s as any).lactation ?? 0)?.['breastmm'] / 2) {
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) + (Math.floor(Math.random() * 11) + 10);
    ((s as any).lactation ?? {})['breastmv'] = Math.max(0, ((s as any).lactation ?? {})?.['breastmv'] - (Math.floor(Math.random() * (((s as any).lactation ?? {})?.['breastmv'] / 10 - ((s as any).lactation ?? {})?.['breastmv'] / 20 + 1)) + (((s as any).lactation ?? {})?.['breastmv'] / 20)) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 2));
  }
  if (((s as any).pain_coeff ?? 0) > 0) {
    qspCall(s, 'pain', '', (Math.floor(Math.random() * (pain_coeff / 2 - 0 + 1)) + (0)), 'breasts', 'twist');
    qspCall(s, 'pain', '', (Math.floor(Math.random() * (pain_coeff / 2 - 0 + 1)) + (0)), 'nipples', 'pinch');
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_breasts'] = 1;
    } else {
      ((s as any).count ?? {})['breasts'] = 1;
    }
  }
  scene.build();
}

function enterClitFinger(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['clit'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (6);
  ((s as any).stim ?? {})['act'] = 100;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_clit_finger'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['clit_finger'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  scene.build();
}

function enterClitSuck(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['clit'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (7);
  ((s as any).stim ?? {})['act'] = 100;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_clit_suck'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['clit_suck'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterClitVibe(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['clit'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (2);
  ((s as any).stim ?? {})['act'] = 75;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_clit_vibe'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['clit_vibe'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterVaginalFinger(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (1);
  ((s as any).stim ?? {})['act'] = 80;
  if (((s as any).pain_coeff ?? 0) > 0) {
    qspCall(s, 'pain', '', 0, 'vaginal', 'stretch');
    ((s as any).pain ?? {})['vaginal'] = qspUntranslated(s, "min(pain['vaginal'], arousalVars['max_sex_pain'])", { location: "arousal" });
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_finger'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_finger'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 4) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterVaginalFist(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 70;
  ((s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], 30, ((s as any).pcs_vag ?? 0));
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).tatiana ?? {})['virginity_restore'] = 0;
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
    qspCall(s, 'arousal_funcs', 'set_virginity_stats', 'fisting');
    ((s as any).virgin_stats ?? {})['lost_cause'] = 'fisting';
  }
  if ((!((s as any).arousal_overcall ?? 0))) {
    // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_vag, vaginal_slip, pain['vaginal'], rand(15, 20), rand(35, ...
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) - (((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff']);
    // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'vaginal', 'stretch'
    ((s as any).pain ?? {})['vaginal'] = qspUntranslated(s, "min(pain['vaginal'], arousalVars['max_sex_pain'])", { location: "arousal" });
    qspCall(s, 'pain', '', qspUntranslated(s, "rand(0, arousalVars['girth_diff'])", { location: "arousal" }), 'labia', 'stretch');
    ((s as any).pain ?? {})['labia'] = qspUntranslated(s, "min(pain['labia'], arousalVars['max_sex_pain'])", { location: "arousal" });
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).vgape ?? 0) + ((s as any).pcs_vag ?? 0) / 2) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_fist'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_fist'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 6) + 15) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterSelfFisting(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['act'] = 70;
  ((s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], 30, ((s as any).pcs_vag ?? 0));
  ((s as any).tatiana ?? {})['virginity_restore'] = 0;
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
    qspCall(s, 'arousal_funcs', 'set_virginity_stats', 'fisting');
    ((s as any).virgin_stats ?? {})['lost_cause'] = 'fisting';
  }
  if (((s as any).vaginal_slip ?? 0) < Math.max(1, ((s as any).pcs_hydra ?? 0) / 20)) {
    (s as any).vaginal_slip = Math.max(1, ((s as any).pcs_hydra ?? 0) / 20);
  }
  if ((!((s as any).arousal_overcall ?? 0))) {
    // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_vag, vaginal_slip, pain['vaginal'], rand(10, 15), rand(30, ...
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) - (((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff']);
    // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'vaginal', 'stretch'
    ((s as any).pain ?? {})['vaginal'] = qspUntranslated(s, "min(pain['vaginal'], arousalVars['max_sex_pain'])", { location: "arousal" });
    qspCall(s, 'pain', '', qspUntranslated(s, "rand(0, arousalVars['girth_diff'])", { location: "arousal" }), 'labia', 'stretch');
    ((s as any).pain ?? {})['labia'] = qspUntranslated(s, "min(pain['labia'], arousalVars['max_sex_pain'])", { location: "arousal" });
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).vgape ?? 0) + ((s as any).pcs_vag ?? 0) / 2) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_self_fisting'] = 1;
    } else {
      ((s as any).count ?? {})['self_fisting'] = 1;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 6) + 10) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterCuni(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (4);
  ((s as any).stim ?? {})['act'] = 80;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_cuni'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['cuni'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterVaginal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 1) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  if ((Math.floor(Math.random() * 121) + 0) < ((s as any).locArgs?.[1] ?? 0)) {
    (s as any).cumprecheck = 1;
    qspCall(s, 'cum_manage', '');
  }
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (3);
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_vaginal) ? ((s as any).arousal_npc_hidden_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_vaginal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_vaginal) ? ((s as any).arousal_npc_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_vaginal[] = $npcID10
        }
      }
      if (((s as any).stat ?? 0)?.['biggest_cock'] < ((s as any).dick_length11 ?? 0)) {
        ((s as any).stat ?? {})['biggest_cock'] = ((s as any).dick_length11 ?? 0);
        ((s as any).stat ?? {})['biggest_cock_desc'] = ((s as any).dick_desc11 ?? 0);
        ((s as any).stat ?? {})['biggest_girth'] = ((s as any).dick_width11 ?? 0);
      }
    }
  }
  ((s as any).tatiana ?? {})['virginity_restore'] = 0;
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
    qspCall(s, 'arousal_funcs', 'set_virginity_stats');
    ((s as any).virgin_stats ?? {})['lost_cause'] = 'vaginal';
    ((s as any).virgin_stats ?? {})['unaware'] = ((s as any).arousalVars ?? 0)?.['unaware'];
  }
  qspCall(s, 'arousal_funcs', 'in_vag');
  scene.build();
}

function enterTrib(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (3);
  ((s as any).stim ?? {})['act'] = 70;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).pain_coeff ?? 0) > 0) {
    // TODO-QSP: gs 'pain', rand(0, pain_coeff) / 5, 'clitoris', 'twist'
    ((s as any).pain ?? {})['clitoris'] = qspUntranslated(s, "min(pain['clitoris'], arousalVars['max_sex_pain'])", { location: "arousal" });
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_trib'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_vaginal) ? ((s as any).arousal_npc_hidden_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_vaginal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['trib'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_vaginal) ? ((s as any).arousal_npc_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_vaginal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterVaginalDildo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (1);
  ((s as any).tatiana ?? {})['virginity_restore'] = 0;
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
    qspCall(s, 'arousal_funcs', 'set_virginity_stats');
    ((s as any).virgin_stats ?? {})['lost_cause'] = 'dildo';
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_dildo'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_vaginal) ? ((s as any).arousal_npc_hidden_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_vaginal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_dildo'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_vaginal) ? ((s as any).arousal_npc_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_vaginal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  qspCall(s, 'arousal_funcs', 'in_vag');
  scene.build();
}

function enterVaginalStrap(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 1) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (1);
  ((s as any).tatiana ?? {})['virginity_restore'] = 0;
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
    qspCall(s, 'arousal_funcs', 'set_virginity_stats');
    ((s as any).virgin_stats ?? {})['lost_cause'] = 'strapon';
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_strap'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_vaginal) ? ((s as any).arousal_npc_hidden_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_vaginal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_strap'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_vaginal) ? ((s as any).arousal_npc_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_vaginal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  qspCall(s, 'arousal_funcs', 'in_vag');
  scene.build();
}

function enterVaginalVibe(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['vaginal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (2);
  ((s as any).stim ?? {})['act'] = 90;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_vibe'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_vaginal) ? ((s as any).arousal_npc_hidden_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_vaginal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_vibe'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_vaginal) ? ((s as any).arousal_npc_vaginal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_vaginal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 6) + 5) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterAnalFinger(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  ((s as any).stim ?? {})['act'] = 40;
  if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
    ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (1);
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) + (20 * ((s as any).trait_vars ?? {})?.['buttslut']);
  }
  if (((s as any).pain_coeff ?? 0) > 0) {
    qspCall(s, 'pain', '', 0, 'asshole', 'stretch');
    ((s as any).pain ?? {})['asshole'] = qspUntranslated(s, "min(pain['asshole'], arousalVars['max_sex_pain'])", { location: "arousal" });
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_finger'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_finger'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2)) < ((s as any).cumvol ?? 0)[3]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 4) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterAnalFist(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) + (20 * ((s as any).trait_vars ?? {})?.['buttslut']);
  }
  ((s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], 30, ((s as any).pcs_ass ?? 0));
  if ((!((s as any).arousal_overcall ?? 0))) {
    // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_ass, anal_slip, pain['asshole'], rand(15, 20), rand(35, 40)...
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) - (((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff']);
    // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'asshole', 'stretch'
    ((s as any).pain ?? {})['asshole'] = qspUntranslated(s, "min(pain['asshole'], arousalVars['max_sex_pain'])", { location: "arousal" });
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > ((s as any).agape ?? 0) * 2 + ((s as any).pcs_ass ?? 0) / 2) {
      (s as any).agape = ((s as any).agape ?? 0) + (1);
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_fist'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_fist'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2)) < ((s as any).cumvol ?? 0)[3]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 6) + 15) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterSelfFistingAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  if (((s as any).anal_slip ?? 0) < Math.max(1, ((s as any).pcs_hydra ?? 0) / 20)) {
    (s as any).anal_slip = Math.max(1, ((s as any).pcs_hydra ?? 0) / 20);
  }
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) + (20 * Math.min(((s as any).trait_vars ?? 0)?.['buttslut'], 2));
  }
  ((s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], 30, ((s as any).pcs_ass ?? 0));
  if ((!((s as any).arousal_overcall ?? 0))) {
    // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_ass, anal_slip, pain['asshole'], rand(10, 15), rand(30, 35)...
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) - (((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff']);
    // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'asshole', 'stretch'
    ((s as any).pain ?? {})['asshole'] = qspUntranslated(s, "min(pain['asshole'], arousalVars['max_sex_pain'])", { location: "arousal" });
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).agape ?? 0) + ((s as any).pcs_ass ?? 0) / 2) {
      (s as any).agape = ((s as any).agape ?? 0) + (1);
    }
    qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_self_fisting_anal'] = 1;
    } else {
      ((s as any).count ?? {})['self_fisting_anal'] = 1;
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2)) < ((s as any).cumvol ?? 0)[3]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 6) + 10) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterRimming(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).trait_vars ?? 0)?.['buttslut'] === 1) {
    ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (2 * Math.min(((s as any).trait_vars ?? 0)?.['buttslut'], 2));
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) + (20 * ((s as any).trait_vars ?? {})?.['buttslut']);
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_rimming'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['rimming'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  scene.build();
}

function enterAnal(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 4) + 1) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_anal) ? ((s as any).arousal_npc_hidden_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_anal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_anal) ? ((s as any).arousal_npc_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_anal[] = $npcID10
        }
      }
      if (((s as any).stat ?? 0)?.['biggest_cock_anal'] < ((s as any).dick_length11 ?? 0)) {
        ((s as any).stat ?? {})['biggest_cock_anal_desc'] = ((s as any).dick_desc11 ?? 0);
        ((s as any).stat ?? {})['biggest_cock_anal'] = ((s as any).dick_length11 ?? 0);
        ((s as any).stat ?? {})['biggest_girth_anal'] = ((s as any).dick_width11 ?? 0);
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'in_anal');
  scene.build();
}

function enterAnalDildo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_dildo'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_anal) ? ((s as any).arousal_npc_hidden_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_anal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_dildo'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_anal) ? ((s as any).arousal_npc_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_anal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  qspCall(s, 'arousal_funcs', 'in_anal');
  scene.build();
}

function enterAnalStrap(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 1) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_strap'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_anal) ? ((s as any).arousal_npc_hidden_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_anal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_strap'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_anal) ? ((s as any).arousal_npc_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_anal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  qspCall(s, 'arousal_funcs', 'in_anal');
  scene.build();
}

function enterAnalVibe(s: GameState, scene: SceneBuilder): void {
  ((s as any).orgasm_flag ?? {})['anal'] = 1;
  ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (1);
  ((s as any).stim ?? {})['act'] = 60;
  if (((s as any).trait_vars ?? 0)?.['buttslut'] === 1) {
    ((s as any).stim ?? {})['mag'] = (((s as any).stim ?? {})['mag'] ?? 0) + (qspUntranslated(s, "min(trait_vars['buttslut'], 2)", { location: "arousal" }));
    ((s as any).stim ?? {})['act'] = (((s as any).stim ?? {})['act'] ?? 0) + (10 + 20 * (((s as any).trait_vars ?? {})?.['buttslut'] - 1));
  }
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_vibe'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_anal) ? ((s as any).arousal_npc_hidden_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_anal[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_vibe'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_anal) ? ((s as any).arousal_npc_anal as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_anal[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2)) < ((s as any).cumvol ?? 0)[3]) {
    qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 6) + 5) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  }
  scene.build();
}

function enterBDSM(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_BDSM'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['BDSM'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterPee(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 10;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_pee'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['pee'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterFlashlite(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 10;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_flashlite'] = 1;
    } else {
      ((s as any).count ?? {})['flashlite'] = 1;
    }
  }
  scene.build();
}

function enterFlash(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_flash'] = 1;
    } else {
      ((s as any).count ?? {})['flash'] = 1;
    }
  }
  scene.build();
}

function enterStriptease(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_striptease'] = 1;
    } else {
      ((s as any).count ?? {})['striptease'] = 1;
    }
  }
  scene.build();
}

function enterHj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 4) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_hj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['hj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterClitFingerGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 70;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_clit_finger_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['clit_finger_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  scene.build();
}

function enterVaginalFingerGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 60;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_finger_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_finger_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  scene.build();
}

function enterVaginalFistGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 50;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_fist_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_fist_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterAnalFingerGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 40;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_finger_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_finger_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  scene.build();
}

function enterAnalFistGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_fist_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_fist_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterDildoHands(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 4) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_dildo_hands'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['dildo_hands'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterStrapHands(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 4) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_strap_hands'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_handstuff) ? ((s as any).arousal_npc_hidden_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_handstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['strap_hands'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_handstuff) ? ((s as any).arousal_npc_handstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_handstuff[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterTitjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 45;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_titjob'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_titstuff) ? ((s as any).arousal_npc_hidden_titstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_titstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['titjob'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_titstuff) ? ((s as any).arousal_npc_titstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_titstuff[] = $npcID10
        }
      }
    }
  }
  if (((s as any).pain_coeff ?? 0) > 0) {
    qspCall(s, 'pain', '', 0, 'breasts', 'pull');
  }
  scene.build();
}

function enterFootjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 25;
  ((s as any).arousalVars ?? {})['foot'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_footjob'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_footstuff) ? ((s as any).arousal_npc_hidden_footstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_footstuff[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['footjob'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_footstuff) ? ((s as any).arousal_npc_footstuff as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_footstuff[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterBj(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 45;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_bj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_oral) ? ((s as any).arousal_npc_hidden_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_oral[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['bj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_oral) ? ((s as any).arousal_npc_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_oral[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'in_throat');
  scene.build();
}

function enterClitSuckGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 30;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_clit_suck_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_oral) ? ((s as any).arousal_npc_hidden_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_oral[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['clit_suck_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_oral) ? ((s as any).arousal_npc_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_oral[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterCuniGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 30;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_cuni_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_oral) ? ((s as any).arousal_npc_hidden_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_oral[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['cuni_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_oral) ? ((s as any).arousal_npc_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_oral[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterRimmingGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_rimming_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_oral) ? ((s as any).arousal_npc_hidden_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_oral[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['rimming_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_oral) ? ((s as any).arousal_npc_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_oral[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  scene.build();
}

function enterDildoSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 10));
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_dildo_suck'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_oral) ? ((s as any).arousal_npc_hidden_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_oral[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['dildo_suck'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_oral) ? ((s as any).arousal_npc_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_oral[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'in_throat');
  scene.build();
}

function enterStrapSuck(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 10));
  ((s as any).stim ?? {})['act'] = 30;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_strap_suck'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_hidden_oral) ? ((s as any).arousal_npc_hidden_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_oral[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['strap_suck'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
        if ((Array.isArray((s as any).arousal_npc_oral) ? ((s as any).arousal_npc_oral as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_oral[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'in_throat');
  scene.build();
}

function enterMagicdHj(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 50;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_magicd_hj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['magicd_hj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 3);
  scene.build();
}

function enterDildoHandsGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_dildo_hands_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['dildo_hands_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterStrapHandsGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_strap_hands_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['strap_hands_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterMagicdBj(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 60;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_magicd_bj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['magicd_bj'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 4);
  scene.build();
}

function enterDildoSuckGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_dildo_suck_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['dildo_suck_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterStrapSuckGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 25;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_strap_suck_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['strap_suck_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterVaginalDildoGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 60;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_dildo_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_dildo_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  scene.build();
}

function enterVaginalVibeGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 60;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_vibe_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_vibe_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  scene.build();
}

function enterVaginalStrapGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 70;
  ((s as any).arousalVars ?? {})['lesbian'] = 1;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_vaginal_strap_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['vaginal_strap_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  scene.build();
}

function enterMagicdVaginal(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 90;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_magicd_vaginal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['magicd_vaginal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 5);
  scene.build();
}

function enterAnalDildoGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 2) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 40;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_dildo_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_dildo_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  scene.build();
}

function enterAnalVibeGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 40;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_vibe_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_vibe_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 1);
  scene.build();
}

function enterAnalStrapGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 40;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_anal_strap_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['anal_strap_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 2);
  scene.build();
}

function enterMagicdAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 80;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_magicd_anal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['magicd_anal'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  qspCall(s, 'arousal_funcs', 'feed', 5);
  scene.build();
}

function enterBDSMGive(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 4) + 0) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
  ((s as any).stim ?? {})['act'] = 20;
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_BDSM_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['BDSM_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  scene.build();
}

function enterPeeGive(s: GameState, scene: SceneBuilder): void {
  ((s as any).stim ?? {})['act'] = 10;
  (s as any).last_pee = ((s as any).totminut ?? 0);
  if (((s as any).arousalVars ?? 0)?.['no_stats'] === 0) {
    if (((s as any).arousalVars ?? 0)?.['unaware'] === 1) {
      ((s as any).count ?? {})['hidden_pee_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_hidden_sexual) ? ((s as any).arousal_npc_hidden_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_hidden_sexual[] = $npcID10
        }
      }
    } else {
      ((s as any).count ?? {})['pee_give'] = 1;
      if (((s as any).arousalVars ?? 0)?.['self'] === 0) {
        if ((Array.isArray((s as any).arousal_npc_sexual) ? ((s as any).arousal_npc_sexual as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
          // TODO-QSP: $arousal_npc_sexual[] = $npcID10
        }
      }
    }
  }
  // TODO-QSP: end
  if (((s as any).pcs_hairbsh ?? 0) >= 0) {
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rape') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 30:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rough') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 40:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gangbang') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 50:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('orgy') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 60:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('group') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 70:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('BDSM') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 80:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 100:  pcs_hairbsh = -1
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('maso') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 125:  pcs_hairbsh = rand(-1, 0)
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('prostitution') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 150:  pcs_hairbsh = rand(-1, 0)
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unknown') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 200:  pcs_hairbsh = rand(-1, pcs_hairbsh)
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('anal') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('anal_strap') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 220: pcs_hairbsh = rand(-1, pcs_hairbsh)
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('vaginal') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('vaginal_strap') : -1) >= 0) {
      // TODO-QSP: if rand(30, pcs_hairlng) > 240: pcs_hairbsh = rand(-1, pcs_hairbsh)
    }
    if (((s as any).pcs_hairbsh ?? 0) > 0) {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bound') : -1) >= 0) {
        // TODO-QSP: if rand(30, pcs_hairlng) > 270:  pcs_hairbsh = rand(0, pcs_hairbsh)
      }
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('sub') : -1) >= 0) {
        // TODO-QSP: if rand(30, pcs_hairlng) > 300:  pcs_hairbsh = rand(0, pcs_hairbsh)
      }
    }
  }
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rape') : -1) >= 0) {
      // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 7: pcs_makeup = 0
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('rough') : -1) >= 0) {
      // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 5: pcs_makeup = 0
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('gangbang') : -1) >= 0) {
      // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 5: pcs_makeup = 0
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) >= 0) {
      // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 4: pcs_makeup = 0
    }
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bj') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('deepthroat') : -1) >= 0) {
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('group') : -1) >= 0) {
        // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 3: pcs_makeup = 0
      }
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('orgy') : -1) >= 0) {
        // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 3: pcs_makeup = 0
      }
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('BDSM') : -1) >= 0) {
        // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 3: pcs_makeup = 0
      }
      if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('deepthroat') : -1) >= 0) {
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('maso') : -1) >= 0) {
          // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 3: pcs_makeup = 0
        }
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('prostitution') : -1) >= 0) {
          // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 4: pcs_makeup = 0
        }
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('unknown') : -1) >= 0) {
          // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 4: pcs_makeup = 0
        }
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bound') : -1) >= 0) {
          // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 5: pcs_makeup = 0
        }
        if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('sub') : -1) >= 0) {
          // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 5: pcs_makeup = 0
        }
      }
    }
    if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
      if (((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bj') : -1) >= 0  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('cuni_give') : -1) >= 0)) {
        // TODO-QSP: if rand(pcs_makeup, pcs_makupskl / 10) < 3: pcs_makeup = rand(0, 1)
      }
    }
  }
  ((s as any).stim ?? {})['mag'] = qspUntranslated(s, "max(1, min(stim['mag'], 9))", { location: "arousal" });
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_arousal') : -1) > 1) {
    ((s as any).stim ?? {})['total'] = 0;
  } else {
    ((s as any).stim ?? {})['total'] = qspFunc(s, 'arousal_funcs', 'calc_stimtotal', ((s as any).stim ?? 0)?.['mag'], ((s as any).stim ?? 0)?.['act'], ((s as any).stim ?? 0)?.['kink'], ((s as any).stim ?? 0)?.['pref'], ((s as any).stim ?? 0)?.['time']);
  }
  qspCall(s, 'pain', 'calc');
  if (((s as any).pain ?? 0)?.['total'] > 0) {
    (s as any).temp_maso_exp = qspFunc(s, 'fetish', 'get_exp', 'maso');
    (s as any).temp_maso_pref = qspFunc(s, 'fetish', 'get_pref', 'maso');
    if (((s as any).temp_maso_pref ?? 0) <= 0  &&  ((s as any).pain ?? 0)?.['total'] < 50) {
      if (((s as any).pain ?? 0)?.['total'] - (3 + ((s as any).temp_maso_exp ?? 0)) / 6 > 0) {
        ((s as any).stim ?? {})['total'] = (((s as any).stim ?? {})['total'] ?? 0) - ((((s as any).pain ?? {})?.['total'] - (((s as any).temp_maso_exp ?? 0) / 6)));
      }
    } else {
      if (((s as any).temp_maso_pref ?? 0) < 25  &&  ((s as any).pain ?? 0)?.['total'] < 55) {
        ((s as any).stim ?? {})['total'] = (((s as any).stim ?? {})['total'] ?? 0) + (((((s as any).pain ?? {})?.['total'] * ((s as any).temp_maso_exp ?? 0) + 200) / 400) * ((s as any).stim ?? {})?.['time'] / 60);
      } else {
        if (((s as any).temp_maso_pref ?? 0) < 50  &&  ((s as any).pain ?? 0)?.['total'] < 70) {
          ((s as any).stim ?? {})['total'] = (((s as any).stim ?? {})['total'] ?? 0) + (((((s as any).pain ?? {})?.['total'] * ((s as any).temp_maso_exp ?? 0) + 150) / 300) * ((s as any).stim ?? {})?.['time'] / 60);
        } else {
          if (((s as any).temp_maso_pref ?? 0) < 75  &&  ((s as any).pain ?? 0)?.['total'] < 85) {
            ((s as any).stim ?? {})['total'] = (((s as any).stim ?? {})['total'] ?? 0) + (((((s as any).pain ?? {})?.['total'] * ((s as any).temp_maso_exp ?? 0) + 100) / 200) * ((s as any).stim ?? {})?.['time'] / 60);
          } else {
            if (((s as any).temp_maso_pref ?? 0) >= 75) {
              ((s as any).stim ?? {})['total'] = (((s as any).stim ?? {})['total'] ?? 0) + (((((s as any).pain ?? {})?.['total'] * ((s as any).temp_maso_exp ?? 0) + 50 ) / 100) * ((s as any).stim ?? {})?.['time'] / 60);
            } else {
              ((s as any).stim ?? {})['total'] = 0;
            }
          }
        }
      }
    }
  }
  if (((s as any).arousalVars ?? 0)?.['sizequeen_turnoff'] === 1) {
    ((s as any).stim ?? {})['total'] = 0;
    qspCall(s, 'mood', 'lower', qspUntranslated(s, "max(stim['time'], 10)", { location: "arousal" }));
  }
  ((s as any).stim ?? {})['event'] = (((s as any).stim ?? {})['event'] ?? 0) + (((s as any).stim ?? 0)?.['total']);
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).stim ?? 0)?.['total']);
  if (((s as any).pcs_horny ?? 0) < 0) {
    (s as any).pcs_horny = 0;
  }
  if (((s as any).arousalVars ?? 0)?.['pcs_vag_backup'] !== 0  &&  ((s as any).arousalVars ?? 0)?.['pcs_vag_backup'] !== ((s as any).pcs_vag ?? 0)) {
    (s as any).pcs_vag = ((s as any).arousalVars ?? 0)?.['pcs_vag_backup'];
    ((s as any).arousalVars ?? {})['pcs_vag_backup'] = 0;
  }
  if (((s as any).arousalVars ?? 0)?.['pcs_ass_backup'] !== 0  &&  ((s as any).arousalVars ?? 0)?.['pcs_ass_backup'] !== ((s as any).pcs_ass ?? 0)) {
    (s as any).pcs_ass = ((s as any).arousalVars ?? 0)?.['pcs_ass_backup'];
    ((s as any).arousalVars ?? {})['pcs_ass_backup'] = 0;
  }
  if (((s as any).arousalVars ?? 0)?.['pcs_throat_backup'] !== 0  &&  ((s as any).arousalVars ?? 0)?.['pcs_throat_backup'] !== ((s as any).pcs_throat ?? 0)) {
    (s as any).pcs_throat = ((s as any).arousalVars ?? 0)?.['pcs_throat_backup'];
    ((s as any).arousalVars ?? {})['pcs_throat_backup'] = 0;
  }
  if (Object.keys((s as any).orgasm_flag ?? {}).length > 0) {
    ((s as any).orgasm_flag ?? {})['trigger'] = 1;
    (s as any).nymphosex_flag = 1;
  }
  (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).stim ?? {})?.['total'] * (100 + ((((s as any).trait_vars ?? 0)?.['sensitivity'] > 0) ? (100) : (0)) - ((((s as any).trait_vars ?? 0)?.['sensitivity'] < 0) ? (50) : (0))) / 100);
  if (((s as any).orgasm_buildup ?? 0) < 0) {
    (s as any).orgasm_buildup = 0;
  }
  if (((s as any).orgasm_or ?? 0) !== '!') {
    if (((s as any).orgasm_buildup ?? 0) >= 300  &&  ((s as any).pcs_horny ?? 0) >= 60) {
      qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
    } else {
      if (((s as any).orgasm_flag ?? 0)?.['trigger'] !== 0) {
        if (((s as any).orgasm_buildup ?? 0) >= 50  &&  ((s as any).pcs_horny ?? 0) >= 300) {
          qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
        } else {
          if (((s as any).orgasm_or ?? 0) === 'yes'  ||  ((s as any).orgasm_or ?? 0) === 'custom') {
            qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
          } else {
            (s as any).temp_org_buildup = ((s as any).orgasm_buildup ?? 0) + ((s as any).pcs_horny ?? 0) / 2;
            (s as any).temp_stim_total = ((s as any).stim ?? {})?.['total'] + ((((s as any).trait_vars ?? 0)?.['sensitivity'] > 0) ? (2) : (0)) + (Math.floor(Math.random() * (3 - -3 + 1)) + (-3));
            if (((s as any).temp_org_buildup ?? 0) >= 300) {
              if (((s as any).temp_stim_total ?? 0) > 4) {
                qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
              }
            } else {
              if (((s as any).temp_org_buildup ?? 0) >= 250) {
                if (((s as any).temp_stim_total ?? 0) > 5) {
                  qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
                }
              } else {
                if (((s as any).temp_org_buildup ?? 0) >= 200) {
                  if (((s as any).temp_stim_total ?? 0) > 6) {
                    qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
                  }
                } else {
                  if (((s as any).temp_org_buildup ?? 0) >= 150) {
                    if (((s as any).temp_stim_total ?? 0) > 8) {
                      qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
                    }
                  } else {
                    if (((s as any).temp_org_buildup ?? 0) >= 100) {
                      if (((s as any).temp_stim_total ?? 0) > 10) {
                        qspCall(s, 'orgasm', '', ((s as any).locArgs?.[0] ?? 0), ((s as any).npcID10 ?? 0));
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
  // TODO-QSP: copyarr('temp_arousal_args', 'ARGS')
  qspCall(s, 'arousal_funcs', 'check_events', 'temp_arousal_args');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'end':
      enterEnd(s, scene);
      break;
    case 'foreplay':
      enterForeplay(s, scene);
      break;
    case 'foreplay_give':
      enterForeplayGive(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'massage':
      enterMassage(s, scene);
      break;
    case 'massage_give':
      enterMassageGive(s, scene);
      break;
    case 'erotic':
      enterErotic(s, scene);
      break;
    case 'erotic_nudity':
      enterEroticNudity(s, scene);
      break;
    case 'porn':
      enterPorn(s, scene);
      break;
    case 'voyeur':
      enterVoyeur(s, scene);
      break;
    case 'voyeur_sex':
      enterVoyeurSex(s, scene);
      break;
    case 'breasts':
      enterBreasts(s, scene);
      break;
    case 'clit_finger':
      enterClitFinger(s, scene);
      break;
    case 'clit_suck':
      enterClitSuck(s, scene);
      break;
    case 'clit_vibe':
      enterClitVibe(s, scene);
      break;
    case 'vaginal_finger':
      enterVaginalFinger(s, scene);
      break;
    case 'vaginal_fist':
      enterVaginalFist(s, scene);
      break;
    case 'self_fisting':
      enterSelfFisting(s, scene);
      break;
    case 'cuni':
      enterCuni(s, scene);
      break;
    case 'vaginal':
      enterVaginal(s, scene);
      break;
    case 'trib':
      enterTrib(s, scene);
      break;
    case 'vaginal_dildo':
      enterVaginalDildo(s, scene);
      break;
    case 'vaginal_strap':
      enterVaginalStrap(s, scene);
      break;
    case 'vaginal_vibe':
      enterVaginalVibe(s, scene);
      break;
    case 'anal_finger':
      enterAnalFinger(s, scene);
      break;
    case 'anal_fist':
      enterAnalFist(s, scene);
      break;
    case 'self_fisting_anal':
      enterSelfFistingAnal(s, scene);
      break;
    case 'rimming':
      enterRimming(s, scene);
      break;
    case 'anal':
      enterAnal(s, scene);
      break;
    case 'anal_dildo':
      enterAnalDildo(s, scene);
      break;
    case 'anal_strap':
      enterAnalStrap(s, scene);
      break;
    case 'anal_vibe':
      enterAnalVibe(s, scene);
      break;
    case 'BDSM':
      enterBDSM(s, scene);
      break;
    case 'pee':
      enterPee(s, scene);
      break;
    case 'flashlite':
      enterFlashlite(s, scene);
      break;
    case 'flash':
      enterFlash(s, scene);
      break;
    case 'striptease':
      enterStriptease(s, scene);
      break;
    case 'hj':
      enterHj(s, scene);
      break;
    case 'clit_finger_give':
      enterClitFingerGive(s, scene);
      break;
    case 'vaginal_finger_give':
      enterVaginalFingerGive(s, scene);
      break;
    case 'vaginal_fist_give':
      enterVaginalFistGive(s, scene);
      break;
    case 'anal_finger_give':
      enterAnalFingerGive(s, scene);
      break;
    case 'anal_fist_give':
      enterAnalFistGive(s, scene);
      break;
    case 'dildo_hands':
      enterDildoHands(s, scene);
      break;
    case 'strap_hands':
      enterStrapHands(s, scene);
      break;
    case 'titjob':
      enterTitjob(s, scene);
      break;
    case 'footjob':
      enterFootjob(s, scene);
      break;
    case 'bj':
      enterBj(s, scene);
      break;
    case 'clit_suck_give':
      enterClitSuckGive(s, scene);
      break;
    case 'cuni_give':
      enterCuniGive(s, scene);
      break;
    case 'rimming_give':
      enterRimmingGive(s, scene);
      break;
    case 'dildo_suck':
      enterDildoSuck(s, scene);
      break;
    case 'strap_suck':
      enterStrapSuck(s, scene);
      break;
    case 'magicd_hj':
      enterMagicdHj(s, scene);
      break;
    case 'dildo_hands_give':
      enterDildoHandsGive(s, scene);
      break;
    case 'strap_hands_give':
      enterStrapHandsGive(s, scene);
      break;
    case 'magicd_bj':
      enterMagicdBj(s, scene);
      break;
    case 'dildo_suck_give':
      enterDildoSuckGive(s, scene);
      break;
    case 'strap_suck_give':
      enterStrapSuckGive(s, scene);
      break;
    case 'vaginal_dildo_give':
      enterVaginalDildoGive(s, scene);
      break;
    case 'vaginal_vibe_give':
      enterVaginalVibeGive(s, scene);
      break;
    case 'vaginal_strap_give':
      enterVaginalStrapGive(s, scene);
      break;
    case 'magicd_vaginal':
      enterMagicdVaginal(s, scene);
      break;
    case 'anal_dildo_give':
      enterAnalDildoGive(s, scene);
      break;
    case 'anal_vibe_give':
      enterAnalVibeGive(s, scene);
      break;
    case 'anal_strap_give':
      enterAnalStrapGive(s, scene);
      break;
    case 'magicd_anal':
      enterMagicdAnal(s, scene);
      break;
    case 'BDSM_give':
      enterBDSMGive(s, scene);
      break;
    case 'pee_give':
      enterPeeGive(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const arousal: LocationDef = {
  name: 'arousal',
  title: 'Error: Arousal called with a duration of 0 minutes.',
  region: 'other',
  enter: enter,
};
