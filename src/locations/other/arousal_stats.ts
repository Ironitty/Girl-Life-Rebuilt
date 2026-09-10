import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStatLoopCore1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[4] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[5] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[6] ?? 0) === '') {
    // TODO-QSP: exit
  }
  (s as any).arousal_maxi = 0;
  if (((s as any).arousal_maxi ?? 0) > 0) {
    (s as any).arousal_i = 0;
    // TODO-QSP: :arousal_stat_core_loop1
    if (((s as any).dyneval ?? 0)('result === \'0\'[arousal_temp_npcID]') === 0) {
      if (((s as any).locArgs?.[7] ?? 0) !== '') {
        qspCall(s, 'arousal_stats', '', ((s as any).locArgs?.[7] ?? 0), ((s as any).arousal_temp_npcID ?? 0));
      }
      if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
        // TODO-QSP: stat[$ARGS[4]] += 1
      } else {
        // TODO-QSP: stat[$ARGS[5]] += 1
        // TODO-QSP: stat[$ARGS[6]] += 1
      }
    }
    if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
      // TODO-QSP: stat[$ARGS[4] + '_times'] += 1
    } else {
      // TODO-QSP: stat[$ARGS[5] + '_times'] += 1
      // TODO-QSP: stat[$ARGS[6] + '_times'] += 1
    }
    // TODO-QSP: dynamic '<<$ARGS[2]>>[$arousal_temp_npcID] += 1'
    if (((s as any).locArgs?.[3] ?? 0) !== '') {
      // TODO-QSP: dynamic '<<$ARGS[3]>>[$arousal_temp_npcID] = daystart'
    }
    if (((s as any).locArgs?.[8] ?? 0) !== '') {
      if (((s as any).locArgs?.[3] ?? 0) !== '') {
      }
      // TODO-QSP: stat[$ARGS[8]] = daystart
      // TODO-QSP: stat[$ARGS[8] + '_' + $su_ld_variant] = daystart
      if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
        (s as any).stat['last_sex_day_man'] = ((s as any).daystart ?? 0);
        // TODO-QSP: stat['last_sex_day_man_' + $su_ld_variant] = daystart
      } else {
        (s as any).stat['last_sex_day_woman'] = ((s as any).daystart ?? 0);
        // TODO-QSP: stat['last_sex_day_woman_' + $su_ld_variant] = daystart
        (s as any).stat['last_sex_day_herm'] = ((s as any).daystart ?? 0);
        // TODO-QSP: stat['last_sex_day_herm_' + $su_ld_variant] = daystart
      }
    }
    (s as any).arousal_i = ((s as any).arousal_i ?? 0) + (1);
    if (((s as any).arousal_i ?? 0) < ((s as any).arousal_maxi ?? 0)) {
      // TODO-QSP: jump 'arousal_stat_core_loop1'
    }
  }
  return;
  scene.build();
}

function enterSetStatFucked(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_vaginal_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_anal_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    (s as any).stat['men_fucked'] = ((s as any).stat['men_fucked'] ?? 0) + (1);
  } else {
    (s as any).stat['women_fucked'] = ((s as any).stat['women_fucked'] ?? 0) + (1);
    (s as any).stat['herm_fucked'] = ((s as any).stat['herm_fucked'] ?? 0) + (1);
  }
  return;
  scene.build();
}

function enterSetStatHiddenFucked(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_hidden_vaginal_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_hidden_anal_count ?? 0)[((s as any).locArgs?.[1] ?? 0)] > 0) {
    // TODO-QSP: exit
  }
  if (((s as any).npc_gender ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 0) {
    (s as any).stat['men_hidden_fucked'] = ((s as any).stat['men_hidden_fucked'] ?? 0) + (1);
  } else {
    (s as any).stat['women_hidden_fucked'] = ((s as any).stat['women_hidden_fucked'] ?? 0) + (1);
    (s as any).stat['herm_hidden_fucked'] = ((s as any).stat['herm_hidden_fucked'] ?? 0) + (1);
  }
  return;
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).orgasm_buildup ?? 0) > 350) {
    (s as any).orgasm_buildup = 350;
  }
  if (((s as any).orgasm_buildup ?? 0) > 300) {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (30);
  } else {
    (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (20);
    if (((s as any).orgasm_buildup ?? 0) > 100) {
      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) - (10);
    }
    if (((s as any).stim ?? 0)?.['lesbian'] === 1) {
      (s as any).stat['lesbian_count'] = ((s as any).stat['lesbian_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['hidden_lesbian'] === 1) {
      (s as any).stat['lesbian_unaware_count'] = ((s as any).stat['lesbian_unaware_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['gangbang'] === 1) {
      (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['group'] === 1) {
      (s as any).stat['groupsex_count'] = ((s as any).stat['groupsex_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['orgy'] === 1) {
      (s as any).stat['orgy_count'] = ((s as any).stat['orgy_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['hidden_gang'] === 1) {
      (s as any).stat['gangbang_unaware_count'] = ((s as any).stat['gangbang_unaware_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['hidden_group'] === 1) {
      (s as any).stat['groupsex_unaware_count'] = ((s as any).stat['groupsex_unaware_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['hidden_orgy'] === 1) {
      (s as any).stat['orgy_unaware_count'] = ((s as any).stat['orgy_unaware_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['gloryhole'] === 1) {
      (s as any).stat['gloryhole'] = ((s as any).stat['gloryhole'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['hidden_gloryhole'] === 1) {
      (s as any).stat['hidden_gloryhole'] = ((s as any).stat['hidden_gloryhole'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['rape'] === 1) {
      (s as any).stat['rape_count'] = ((s as any).stat['rape_count'] ?? 0) + (1);
      (s as any).stat['last_sex_day_rape'] = ((s as any).daystart ?? 0);
      (s as any).stat['last_sex_day_rape_known'] = ((s as any).daystart ?? 0);
    }
    if (((s as any).stim ?? 0)?.['hidden_rape'] === 1) {
      (s as any).stat['rape_unaware_count'] = ((s as any).stat['rape_unaware_count'] ?? 0) + (1);
      (s as any).stat['last_sex_day_rape'] = ((s as any).daystart ?? 0);
      (s as any).stat['last_sex_day_rape_hidden'] = ((s as any).daystart ?? 0);
    }
    if (((s as any).stim ?? 0)?.['public'] === 1) {
      if (((s as any).count ?? 0)?.['hj'] === 1) {
        (s as any).stat['public_hj'] = ((s as any).stat['public_hj'] ?? 0) + (1);
      }
      if (((s as any).count ?? 0)?.['bj'] === 1) {
        (s as any).stat['public_bj'] = ((s as any).stat['public_bj'] ?? 0) + (1);
      }
      if (((s as any).count ?? 0)?.['titjob'] === 1) {
        (s as any).stat['public_titjob'] = ((s as any).stat['public_titjob'] ?? 0) + (1);
      }
      if (((s as any).count ?? 0)?.['vaginal_finger'] === 1) {
        (s as any).stat['public_fingering'] = ((s as any).stat['public_fingering'] ?? 0) + (1);
      }
      if (((s as any).count ?? 0)?.['vaginal'] === 1  ||  ((s as any).count ?? 0)?.['vaginal_strap'] === 1) {
        (s as any).stat['public_sex'] = ((s as any).stat['public_sex'] ?? 0) + (1);
      }
      if (((s as any).count ?? 0)?.['anal'] === 1  ||  ((s as any).count ?? 0)?.['anal_strap'] === 1) {
        (s as any).stat['public_anal'] = ((s as any).stat['public_anal'] ?? 0) + (1);
      }
    }
    if (((s as any).stim ?? 0)?.['shemale'] === 1) {
      (s as any).stat['shemale_count'] = ((s as any).stat['shemale_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['hidden_shemale'] === 1) {
      (s as any).hidden_shemale = ((s as any).hidden_shemale ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['prostitution'] === 1) {
      (s as any).stat['prostitution_count'] = ((s as any).stat['prostitution_count'] ?? 0) + (1);
      // TODO-QSP: npc_prostitution_count[$ARGS[1]] += 1
    }
    if (((s as any).stim ?? 0)?.['hidden_prostitution'] === 1) {
      (s as any).stat['hidden_prostitution_count'] = ((s as any).stat['hidden_prostitution_count'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['masturbate'] === 1) {
      (s as any).stat['mast'] = ((s as any).stat['mast'] ?? 0) + (1);
    }
    if (((s as any).stim ?? 0)?.['rape'] === 0) {
      (s as any).temp_chastity_break = ((s as any).daystart ?? 0) - ((s as any).stat ?? 0)?.['last_sex_day'] >= ((s as any).arch_const ?? 0)?.['sex_chastity_days'];
      (s as any).temp_base_act_fired = 0;
      if (((s as any).stim ?? 0)?.['masturbate'] === 1) {
        qspCall(s, 'archetypes', 'sex_change', 100, (-800), 'Masturbation');
        (s as any).temp_base_act_fired = 1;
      }
      if (((s as any).arrsize ?? 0)('arousal_npc_oral') > 0) {
        qspCall(s, 'archetypes', 'sex_change', 150, (-1200), 'Oral sex');
        (s as any).temp_base_act_fired = 1;
      }
      if (((s as any).arrsize ?? 0)('arousal_npc_vaginal') > 0) {
        qspCall(s, 'archetypes', 'sex_change', 250, (-2000), 'Vaginal sex');
        (s as any).temp_base_act_fired = 1;
      }
      if (((s as any).arrsize ?? 0)('arousal_npc_anal') > 0) {
        qspCall(s, 'archetypes', 'sex_change', 300, (-2400), 'Anal sex');
        (s as any).temp_base_act_fired = 1;
      }
      if (((s as any).count ?? 0)?.['anal_strap_give'] === 1  ||  ((s as any).count ?? 0)?.['vaginal_strap_give'] === 1) {
        qspCall(s, 'archetypes', 'sex_change', 250, (-2000), 'Pegging');
        (s as any).temp_base_act_fired = 1;
      }
      if (((s as any).temp_chastity_break ?? 0) === 1  &&  ((s as any).temp_base_act_fired ?? 0) === 1) {
        // TODO-QSP: gs 'archetypes', 'change', 0, 0, -arch_const['sex_chastity_bonus_prude'], 0, 0, 1, 'story', 'Breakin...
      }
      if (((s as any).stim ?? 0)?.['public'] === 1) {
        qspCall(s, 'archetypes', 'sex_change', 300, (-2000), 'Sex in public');
      }
      if (((s as any).stim ?? 0)?.['group'] === 1) {
        qspCall(s, 'archetypes', 'sex_change', 300, (-2000), 'Group sex');
      }
      if (((s as any).stim ?? 0)?.['orgy'] === 1) {
        qspCall(s, 'archetypes', 'sex_change', 600, (-4000), 'Orgy');
      }
      if (((s as any).stim ?? 0)?.['gloryhole'] === 1) {
        qspCall(s, 'archetypes', 'sex_change', 300, (-2000), 'Gloryhole');
      }
    }
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_kissed', 'npc_kissed_count', 'npc_last_kissed', 'men_kissed', 'women_kissed', 'herm_kissed');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_kissed', 'npc_hidden_kissed_count', '', 'men_hidden_kissed', 'women_hidden_kissed', 'herm_hidden_kissed');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_handstuff', 'npc_handstuff_count', 'npc_last_handstuff', 'men_jerked', 'women_fingered', 'herm_jerked');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_handstuff', 'npc_hidden_handstuff_count', '', 'men_hidden_jerked', 'women_hidden_fingered', 'herm_hidden_jerked');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_footstuff', 'npc_footstuff_count', 'npc_last_footstuff', 'men_feetfucked', 'women_feetfucked', 'herm_feetfucked');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_footstuff', 'npc_hidden_footstuff_count', '', 'men_hidden_feetfucked', 'women_hidden_feetfucked', 'herm_hidden_feetfucked');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_titstuff', 'npc_titstuff_count', 'npc_last_titstuff', 'men_titfucked', 'women_titfucked', 'herm_titfucked');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_titstuff', 'npc_hidden_titstuff_count', '', 'men_hidden_titfucked', 'women_hidden_titfucked', 'herm_hidden_titfucked');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_oral', 'npc_oral_count', 'npc_last_oral', 'men_blown', 'women_munched', 'herm_blown', '', 'last_sex_day_oral');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_oral', 'npc_hidden_oral_count', '', 'men_hidden_blown', 'women_hidden_munched', 'herm_hidden_blown', '', 'last_sex_day_oral');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_vaginal', 'npc_vaginal_count', 'npc_last_vaginal', 'men_vaginal_fucked', 'women_vaginal_fucked', 'herm_vaginal_fucked', 'set_stat_fucked', 'last_sex_day_vaginal');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_vaginal', 'npc_hidden_vaginal_count', '', 'men_hidden_vaginal_fucked', 'women_hidden_vaginal_fucked', 'herm_hidden_vaginal_fucked', 'set_stat_hidden_fucked', 'last_sex_day_vaginal');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_anal', 'npc_anal_count', 'npc_last_anal', 'men_anal_fucked', 'women_anal_fucked', 'herm_anal_fucked', 'set_stat_fucked', 'last_sex_day_anal');
    qspCall(s, 'arousal_stats', 'stat_loop_core1', '$arousal_npc_hidden_anal', 'npc_hidden_anal_count', '', 'men_hidden_anal_fucked', 'women_hidden_anal_fucked', 'herm_hidden_anal_fucked', 'set_stat_hidden_fucked', 'last_sex_day_anal');
    (s as any).arousal_maxi = 0;
    if (((s as any).arousal_maxi ?? 0) > 0) {
      (s as any).arousal_i = 0;
      // TODO-QSP: :arousal_sexual_loop
      if (((s as any).npc_sexual ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
        if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
          (s as any).stat['male_sexual_partners'] = ((s as any).stat['male_sexual_partners'] ?? 0) + (1);
        } else {
          (s as any).stat['female_sexual_partners'] = ((s as any).stat['female_sexual_partners'] ?? 0) + (1);
          (s as any).stat['herm_sexual_partners'] = ((s as any).stat['herm_sexual_partners'] ?? 0) + (1);
        }
      }
      if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
        (s as any).stat['male_sexual_times'] = ((s as any).stat['male_sexual_times'] ?? 0) + (1);
      } else {
        (s as any).stat['female_sexual_times'] = ((s as any).stat['female_sexual_times'] ?? 0) + (1);
        (s as any).stat['herm_sexual_times'] = ((s as any).stat['herm_sexual_times'] ?? 0) + (1);
      }
      (s as any).npc_sexual[$arousal_temp_npcID] = ((s as any).npc_sexual[$arousal_temp_npcID] ?? 0) + (1);
      (s as any).npc_last_sexual[$arousal_temp_npcID] = ((s as any).daystart ?? 0);
      (s as any).stat['last_sex_day'] = ((s as any).daystart ?? 0);
      (s as any).stat['last_sex_day_known'] = ((s as any).daystart ?? 0);
      (s as any).arousal_i = ((s as any).arousal_i ?? 0) + (1);
      if (((s as any).arousal_i ?? 0) < ((s as any).arousal_maxi ?? 0)) {
        // TODO-QSP: jump 'arousal_sexual_loop'
      }
    }
    (s as any).arousal_maxi = 0;
    if (((s as any).arousal_maxi ?? 0) > 0) {
      (s as any).arousal_i = 0;
      // TODO-QSP: :arousal_hidden_sexual_loop
      if (((s as any).npc_hidden_sexual ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
        if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
          (s as any).stat['male_hidden_sexual_partners'] = ((s as any).stat['male_hidden_sexual_partners'] ?? 0) + (1);
        } else {
          (s as any).stat['female_hidden_sexual_partners'] = ((s as any).stat['female_hidden_sexual_partners'] ?? 0) + (1);
          (s as any).stat['herm_hidden_sexual_partners'] = ((s as any).stat['herm_hidden_sexual_partners'] ?? 0) + (1);
        }
      }
      if (((s as any).npc_gender ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] === 0) {
        (s as any).stat['male_hidden_sexual_times'] = ((s as any).stat['male_hidden_sexual_times'] ?? 0) + (1);
      } else {
        (s as any).stat['female_hidden_sexual_times'] = ((s as any).stat['female_hidden_sexual_times'] ?? 0) + (1);
        (s as any).stat['herm_hidden_sexual_times'] = ((s as any).stat['herm_hidden_sexual_times'] ?? 0) + (1);
      }
      (s as any).npc_hidden_sexual[$arousal_temp_npcID] = ((s as any).npc_hidden_sexual[$arousal_temp_npcID] ?? 0) + (1);
      (s as any).stat['last_sex_day'] = ((s as any).daystart ?? 0);
      (s as any).stat['last_sex_day_hidden'] = ((s as any).daystart ?? 0);
      (s as any).arousal_i = ((s as any).arousal_i ?? 0) + (1);
      if (((s as any).arousal_i ?? 0) < ((s as any).arousal_maxi ?? 0)) {
        // TODO-QSP: jump 'arousal_hidden_sexual_loop'
      }
    }
    if (((s as any).succubusflag ?? 0) === 1) {
      (s as any).arousal_maxi = 0;
      if (((s as any).arousal_maxi ?? 0) > 0) {
        (s as any).arousal_i = 0;
        // TODO-QSP: :arousal_feed_loop
        if (((s as any).arousal_npc_feed ?? 0)?.[String((s as any).arousal_temp_npcID ?? 0)] >= 24) {
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (((s as any).succublvl ?? 0) * 20);
          (s as any).succubxp = ((s as any).succubxp ?? 0) + (5);
          (s as any).sucabslez = 1;
        } else {
          (s as any).arousal_feed_orgasm_flag = 0;
          (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (((s as any).succublvl ?? 0) * 20);
          (s as any).succubxp = ((s as any).succubxp ?? 0) + (5);
          (s as any).sucabslez = 1;
        }
        (s as any).arousal_i = ((s as any).arousal_i ?? 0) + (1);
        if (((s as any).arousal_i ?? 0) < ((s as any).arousal_maxi ?? 0)) {
          // TODO-QSP: jump 'arousal_feed_loop'
        }
      }
    }
    if (((s as any).analPlugOut ?? 0) > 0) {
      if (((s as any).pain ?? 0)?.['asshole'] > 10) {
        qspCall(s, 'dinsex', 'after_anal', 'no_plug');
      } else {
        qspCall(s, 'dinsex', 'after_anal', 'pc');
      }
    }
    qspCall(s, 'arousal_funcs', 'checks', 'maso');
    qspCall(s, 'arousal_funcs', 'checks', 'bound');
    qspCall(s, 'arousal_funcs', 'checks', 'beast');
    qspCall(s, 'arousal_funcs', 'checks', 'pregnant');
    qspCall(s, 'arousal_funcs', 'checks', 'exhibitionism');
    qspCall(s, 'arousal_funcs', 'checks', 'rough');
    qspCall(s, 'arousal_funcs', 'checks', 'prostitution');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_prostitution');
    qspCall(s, 'arousal_funcs', 'checks', 'dom');
    qspCall(s, 'arousal_funcs', 'checks', 'sub');
    qspCall(s, 'arousal_funcs', 'checks', 'incest');
    qspCall(s, 'arousal_funcs', 'checks', 'feet');
    qspCall(s, 'arousal_funcs', 'checks', 'lesbian');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_lesbian');
    qspCall(s, 'arousal_funcs', 'checks', 'group');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_group');
    qspCall(s, 'arousal_funcs', 'checks', 'gangbang');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_gang');
    qspCall(s, 'arousal_funcs', 'checks', 'orgy');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_orgy');
    qspCall(s, 'arousal_funcs', 'checks', 'humiliation');
    qspCall(s, 'arousal_funcs', 'checks', 'deepthroat');
    qspCall(s, 'arousal_funcs', 'checks', 'unknown');
    qspCall(s, 'arousal_funcs', 'checks', 'gloryhole');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_gloryhole');
    qspCall(s, 'arousal_funcs', 'checks', 'rape');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_rape');
    qspCall(s, 'arousal_funcs', 'checks', 'shemale');
    qspCall(s, 'arousal_funcs', 'checks', 'hidden_shemale');
    qspCall(s, 'arousal_funcs', 'checks', 'masturbate');
    (s as any).stim['event'] = 0;
    qspCall(s, 'arousal_funcs', 'count', 'foreplay');
    qspCall(s, 'arousal_funcs', 'count', 'foreplay_give');
    qspCall(s, 'arousal_funcs', 'count', 'kiss');
    qspCall(s, 'arousal_funcs', 'count', 'massage');
    qspCall(s, 'arousal_funcs', 'count', 'massage_give');
    qspCall(s, 'arousal_funcs', 'count', 'porn');
    qspCall(s, 'arousal_funcs', 'count', 'breasts');
    qspCall(s, 'arousal_funcs', 'count', 'clit_finger');
    qspCall(s, 'arousal_funcs', 'count', 'clit_suck');
    qspCall(s, 'arousal_funcs', 'count', 'clit_vibe');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_finger');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_fist');
    qspCall(s, 'arousal_funcs', 'count', 'self_fisting');
    qspCall(s, 'arousal_funcs', 'count', 'cuni');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal');
    qspCall(s, 'arousal_funcs', 'count', 'trib');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_dildo');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_strap');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_vibe');
    qspCall(s, 'arousal_funcs', 'count', 'anal_finger');
    qspCall(s, 'arousal_funcs', 'count', 'anal_fist');
    qspCall(s, 'arousal_funcs', 'count', 'self_fisting_anal');
    qspCall(s, 'arousal_funcs', 'count', 'rimming');
    qspCall(s, 'arousal_funcs', 'count', 'anal');
    qspCall(s, 'arousal_funcs', 'count', 'anal_dildo');
    qspCall(s, 'arousal_funcs', 'count', 'anal_strap');
    qspCall(s, 'arousal_funcs', 'count', 'anal_vibe');
    qspCall(s, 'arousal_funcs', 'count', 'BDSM');
    qspCall(s, 'arousal_funcs', 'count', 'pee');
    qspCall(s, 'arousal_funcs', 'count', 'striptease');
    qspCall(s, 'arousal_funcs', 'count', 'hj');
    qspCall(s, 'arousal_funcs', 'count', 'clit_finger_give');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_finger_give');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_fist_give');
    qspCall(s, 'arousal_funcs', 'count', 'anal_finger_give');
    qspCall(s, 'arousal_funcs', 'count', 'anal_fist_give');
    qspCall(s, 'arousal_funcs', 'count', 'dildo_hands');
    qspCall(s, 'arousal_funcs', 'count', 'strap_hands');
    qspCall(s, 'arousal_funcs', 'count', 'titjob');
    qspCall(s, 'arousal_funcs', 'count', 'footjob');
    qspCall(s, 'arousal_funcs', 'count', 'bj');
    qspCall(s, 'arousal_funcs', 'count', 'clit_suck_give');
    qspCall(s, 'arousal_funcs', 'count', 'cuni_give');
    qspCall(s, 'arousal_funcs', 'count', 'rimming_give');
    qspCall(s, 'arousal_funcs', 'count', 'dildo_suck');
    qspCall(s, 'arousal_funcs', 'count', 'strap_suck');
    qspCall(s, 'arousal_funcs', 'count', 'magicd_hj');
    qspCall(s, 'arousal_funcs', 'count', 'dildo_hands_give');
    qspCall(s, 'arousal_funcs', 'count', 'strap_hands_give');
    qspCall(s, 'arousal_funcs', 'count', 'magicd_bj');
    qspCall(s, 'arousal_funcs', 'count', 'dildo_suck_give');
    qspCall(s, 'arousal_funcs', 'count', 'strap_suck_give');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_dildo_give');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_vibe_give');
    qspCall(s, 'arousal_funcs', 'count', 'vaginal_strap_give');
    qspCall(s, 'arousal_funcs', 'count', 'magicd_vaginal');
    qspCall(s, 'arousal_funcs', 'count', 'anal_dildo_give');
    qspCall(s, 'arousal_funcs', 'count', 'anal_strap_give');
    qspCall(s, 'arousal_funcs', 'count', 'anal_vibe_give');
    qspCall(s, 'arousal_funcs', 'count', 'magicd_anal');
    qspCall(s, 'arousal_funcs', 'count', 'BDSM_give');
    qspCall(s, 'arousal_funcs', 'count', 'pee_give');
    qspCall(s, 'arousal_funcs', 'count2', 'erotic');
    qspCall(s, 'arousal_funcs', 'count2', 'erotic_nudity');
    qspCall(s, 'arousal_funcs', 'count2', 'voyeur');
    qspCall(s, 'arousal_funcs', 'count2', 'voyeur_sex');
    qspCall(s, 'arousal_funcs', 'count2', 'flashlite');
    qspCall(s, 'arousal_funcs', 'count2', 'flash');
    (s as any).temp_beast_exp = qspFunc(s, 'fetish', 'get_exp', 'beast');
    if (((s as any).zoo ?? 0) > ((s as any).temp_beast_exp ?? 0)) {
      // TODO-QSP: func('fetish', 'set_exp', 'beast', zoo)
    } else {
      (s as any).zoo = ((s as any).temp_beast_exp ?? 0);
    }
    if (((s as any).locArgs?.[1] ?? 0) !== 'no_stat') {
      qspCall(s, 'stat', '');
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'stat_loop_core1':
      enterStatLoopCore1(s, scene);
      break;
    case 'set_stat_fucked':
      enterSetStatFucked(s, scene);
      break;
    case 'set_stat_hidden_fucked':
      enterSetStatHiddenFucked(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    default:
      enterStatLoopCore1(s, scene);
      break;
  }
}

export const arousal_stats: LocationDef = {
  name: 'arousal_stats',
  region: 'other',
  enter: enter,
};
