import type { GameState } from './types';
import { getBaseStimmag, calcStimTotal, feed, inVag, inAnal, inThroat, getHolePain, stretch, setVirginityStats, autoLube, checkEvents, arousalStatsEnd } from './arousal_funcs';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export interface ArousalParams {
  act: string;
  time: number;
  themes?: string[];
  npcID?: string;
  dildoID?: string;
  dickVar?: string;
}

export function arousal(s: GameState, params: ArousalParams): void {
  const { act, time } = params;
  const themes = params.themes || [];
  const args = [act, String(time), params.dickVar || '', params.npcID || '', params.dildoID || '', ...themes];

  if (act === 'end') {
    arousalStatsEnd(s, params.themes?.[0]);
    return;
  }

  const arousalVars: Record<string, number> = {};
  const orgasmFlag: Record<string, number> = {};
  const stim: Record<string, number> = { act: 1, mag: 0, kink: 0, pref: 0, kinkno: 0, total: 0, event: 0, time: 0 };

  const tempTime = time;
  if (tempTime === 0) {
    // error: duration 0
  } else if (tempTime > 0) {
    s.minut += tempTime;
  }
  stim['time'] = tempTime > 0 ? tempTime : -tempTime;

  if (themes.includes('unaware')) arousalVars['unaware'] = 1;
  if (themes.includes('no_orgasm_msg')) arousalVars['text'] = 1;
  if (themes.includes('self') || themes.includes('masturbation') || themes.includes('masturbate') || act.startsWith('self_')) {
    arousalVars['self'] = 1;
  }
  if (themes.includes('no_stats')) arousalVars['no_stats'] = 1;

  if (s.npcID.length === 0) {
    arousalVars['self'] = 1;
  }

  if (themes.includes('prostitution')) s.silavag11 = rand(0, 1);
  if (themes.includes('gangbang')) s.silavag11 = rand(0, 2);
  if (themes.includes('rape') || themes.includes('rough') || themes.includes('beast')) s.silavag11 = 0;
  stim['girth_range'] = Math.min(Math.max(1, (s.dick_width11 - 9) * 5), 30);

  // SlipVars
  if (act.startsWith('anal') && !themes.includes('anal_finger')) {
    const target = Math.max(1, 8 + (s.pain['asshole'] || 0) / 2 - s.pcs_ass);
    if (s.anal_slip < target) {
      const anslipVars: Record<string, number> = {};
      anslipVars['cum'] = rand(2 * (s.cumvol['3'] || 10), 3 * (s.cumvol['3'] || 10)) / 30;
      if (themes.includes('spit')) anslipVars['spit'] = 4;
      if (s.ar_anal_lube === 1) anslipVars['lube'] = 8;
      else if (Math.max(...Object.values(anslipVars)) < Math.min(target, 8)) {
        if (themes.includes('lube') && s.ar_anal_lube === 0) {
          anslipVars['lube'] = 8;
          s.ar_anal_lube = 1;
        } else if (s.auto_anal_lube === 1 && !themes.includes('rape') && !themes.includes('gangbang') && !themes.includes('rough') && !themes.includes('beast') && !themes.includes('BDSM') && !themes.includes('bound') && !themes.includes('humiliation')) {
          autoLube(s, 'anal');
        }
      }
      s.anal_slip = Math.max(...Object.values(anslipVars));
      if (s.anal_slip !== s.lubonus && s.lubonus > 0) {
        s.anal_slip += s.lubonus;
        s.lubonus = s.anal_slip;
      }
    }
  }

  if (act.startsWith('vagi') && !themes.includes('vaginal_finger')) {
    const target = Math.max(1, 8 + (s.pain['vaginal'] || 0) / 2 - s.pcs_vag);
    if (s.vaginal_slip < target) {
      const vagslipVars: Record<string, number> = {};
      vagslipVars['horny'] = Math.min(s.pcs_horny / 10, 10);
      vagslipVars['cum'] = rand(s.cumvol['0'] || 10, 2 * (s.cumvol['0'] || 10)) / 10;
      if (themes.includes('spit')) vagslipVars['spit'] = 4;
      if (s.ar_vag_lube === 1) vagslipVars['lube'] = 8;
      else if (Math.max(...Object.values(vagslipVars)) < Math.min(target, 8)) {
        if (themes.includes('lube') && s.ar_vag_lube === 0) {
          vagslipVars['lube'] = 8;
          s.ar_vag_lube = 1;
        } else if (s.auto_vag_lube === 1 && !themes.includes('rape') && !themes.includes('gangbang') && !themes.includes('rough') && !themes.includes('beast') && !themes.includes('BDSM') && !themes.includes('bound') && !themes.includes('humiliation')) {
          autoLube(s, 'vag');
        }
      }
      s.vaginal_slip = Math.max(...Object.values(vagslipVars));
    }
  }

  // Sizequeen exp
  if (!act.endsWith('give')) {
    if (act.startsWith('vagi') || act.startsWith('anal')) {
      if (s.dick_length11 >= 22) s.trait_vars['sizequeen_temp'] = (s.trait_vars['sizequeen_temp'] || 0) + 3;
      else if (s.dick_length11 >= 17) s.trait_vars['sizequeen_temp'] = (s.trait_vars['sizequeen_temp'] || 0) + 1;
      else if (s.dick_length11 <= 7) s.trait_vars['sizequeen_temp'] = (s.trait_vars['sizequeen_temp'] || 0) - 3;
      else if (s.dick_length11 <= 12) s.trait_vars['sizequeen_temp'] = (s.trait_vars['sizequeen_temp'] || 0) - 2;
    }
  }

  // Succubus / elasticity
  if (act.startsWith('vagi')) {
    if (s.succubusflag === 1 && s.sucskill >= 4) {
      if (arousalVars['pcs_vag_backup'] === 0) arousalVars['pcs_vag_backup'] = s.pcs_vag;
      s.pcs_vag = s.dick_length11;
    } else if ((s.trait_vars['elasticity'] || 0) >= 1) {
      if (arousalVars['pcs_vag_backup'] === 0) arousalVars['pcs_vag_backup'] = s.pcs_vag;
      s.pcs_vag = Math.min(s.dick_length11, s.pcs_vag + 10);
    } else if ((s.trait_vars['elasticity'] || 0) < 0) {
      if (arousalVars['pcs_vag_backup'] === 0) arousalVars['pcs_vag_backup'] = s.pcs_vag;
      s.pcs_vag = Math.max(5, s.pcs_vag - 5);
    }
  } else if (act.startsWith('anal')) {
    if (s.succubusflag === 1 && s.sucskill >= 4) {
      if (arousalVars['pcs_ass_backup'] === 0) arousalVars['pcs_ass_backup'] = s.pcs_ass;
      s.pcs_ass = s.dick_length11;
    } else if ((s.trait_vars['elasticity'] || 0) >= 1) {
      if (arousalVars['pcs_ass_backup'] === 0) arousalVars['pcs_ass_backup'] = s.pcs_ass;
      s.pcs_ass = Math.min(s.dick_length11, s.pcs_ass + 10);
    } else if ((s.trait_vars['elasticity'] || 0) < 0) {
      if (arousalVars['pcs_ass_backup'] === 0) arousalVars['pcs_ass_backup'] = s.pcs_ass;
      s.pcs_ass = Math.max(5, s.pcs_ass - 5);
    }
  } else if (act === 'bj' || act === 'dildo_suck' || act === 'strap_suck') {
    if (s.succubusflag === 1 && s.sucskill >= 4) {
      if (arousalVars['pcs_throat_backup'] === 0) arousalVars['pcs_throat_backup'] = s.pcs_throat;
      s.pcs_throat = s.dick_length11;
    } else if ((s.trait_vars['elasticity'] || 0) >= 1) {
      if (arousalVars['pcs_throat_backup'] === 0) arousalVars['pcs_throat_backup'] = s.pcs_throat;
      s.pcs_throat = Math.min(s.dick_length11, s.pcs_throat + 10);
    } else if ((s.trait_vars['elasticity'] || 0) < 0) {
      if (arousalVars['pcs_throat_backup'] === 0) arousalVars['pcs_throat_backup'] = s.pcs_throat;
      s.pcs_throat = Math.max(5, s.pcs_throat - 5);
    }
  }

  stim['mag'] = getBaseStimmag(s);
  let painCoeff = 0;
  arousalVars['max_sex_pain'] = (120 - s.pcs_vital) / 4;

  // Fetish processing
  const fetishList = [
    'bound', 'beast', 'creampie', 'deepthroat', 'dom', 'exhibitionism',
    'feet', 'gangbang', 'gloryhole', 'group', 'orgy', 'humiliation',
    'incest', 'lesbian', 'maso', 'pregnant', 'prostitution', 'rape',
    'rough', 'shemale', 'sub', 'unknown'
  ];
  const painAdditions: Record<string, [number, number]> = {
    BDSM: [4, 5], bound: [2, 3], beast: [7, 10], gangbang: [10, 15],
    maso: [3, 4], prostitution: [-3, 2], rape: [15, 30], rough: [5, 7],
    sub: [1, 2], unknown: [-4, 1]
  };

  if (themes.includes('BDSM')) painCoeff += rand(4, 5);
  for (const f of fetishList) {
    if (themes.includes(f)) {
      stim['kink'] += getFetishExp(s, f);
      stim['pref'] += getFetishPref(s, f);
      stim['kinkno'] += 1;
      stim[f] = 1;
      if (f === 'exhibitionism') s.inhib_exp += rand(2, 6);
      if (f === 'gangbang' && arousalVars['unaware'] === 1) stim['hidden_gang'] = 1;
      if (f === 'gloryhole' && arousalVars['unaware'] === 1) stim['hidden_gloryhole'] = 1;
      if (f === 'group' && arousalVars['unaware'] === 1) stim['hidden_group'] = 1;
      if (f === 'orgy' && arousalVars['unaware'] === 1) stim['hidden_orgy'] = 1;
      if (f === 'lesbian' && arousalVars['unaware'] === 1) stim['hidden_lesbian'] = 1;
      if (f === 'prostitution' && arousalVars['unaware'] === 1) stim['hidden_prostitution'] = 1;
      if (f === 'rape' && arousalVars['unaware'] === 1) stim['hidden_rape'] = 1;
      if (f === 'shemale' && arousalVars['unaware'] === 1) stim['hidden_shemale'] = 1;
      if (f === 'rape') {
        s.rape[0] = s.daystart;
        if ((s.count['vaginal'] === 1 || s.count['vaginal_strap'] === 1) && !s.virgin_stats['lost_cause']) s.virgin_stats['rape'] = 1;
      }
      if (f === 'prostitution') {
        if ((s.count['vaginal'] === 1 || s.count['vaginal_strap'] === 1) && !s.virgin_stats['lost_cause']) s.virgin_stats['prostitute'] = 1;
      }
      if (f === 'shemale') {
        if ((s.count['vaginal'] === 1 || s.count['vaginal_strap'] === 1) && !s.virgin_stats['lost_cause']) s.virgin_stats['shemale'] = 1;
      }
      if (f === 'rough') s.pcs_hairbsh = -1;
    }
  }
  if (arousalVars['foot'] === 1 || themes.includes('feet')) {
    stim['kink'] += getFetishExp(s, 'feet');
    stim['pref'] += getFetishPref(s, 'feet');
    stim['kinkno'] += 1;
    stim['feet'] = 1;
  }
  if (arousalVars['lesbian'] === 1 || themes.includes('lesbian')) {
    if (!stim['lesbian']) {
      stim['kink'] += getFetishExp(s, 'lesbian');
      stim['pref'] += getFetishPref(s, 'lesbian');
      stim['kinkno'] += 1;
      stim['lesbian'] = 1;
    }
  }
  if (arousalVars['self'] === 1) {
    stim['kink'] += getFetishExp(s, 'masturbate');
    stim['pref'] += getFetishPref(s, 'masturbate');
    stim['kinkno'] += 1;
    stim['masturbate'] = 1;
    orgasmFlag['masturbate'] = 1;
  }
  if (themes.includes('public')) stim['public'] = 1;

  if (stim['kinkno'] > 0) {
    stim['kink'] = stim['kink'] / stim['kinkno'];
    stim['pref'] = stim['pref'] / stim['kinkno'];
    stim['kinkno'] = 0;
  }

  // Kink bonus randomization
  if (rand(0, 99) < stim['kink']) stim['kink'] = 120;
  else if (rand(0, 79) < stim['kink']) stim['kink'] = 110;
  else if (rand(0, 59) < stim['kink']) stim['kink'] = 100;
  else if (rand(0, 39) < stim['kink']) stim['kink'] = 90;
  else stim['kink'] = 80;

  // Act-specific setup
  applyAct(s, act, stim, arousalVars, orgasmFlag, themes, painCoeff);

  // Hair damage
  if (s.pcs_hairbsh >= 0) {
    const hairChecks: [string, number][] = [
      ['rape', 30], ['rough', 40], ['gangbang', 50], ['orgy', 60],
      ['group', 70], ['BDSM', 80], ['beast', 100], ['maso', 125],
      ['prostitution', 150], ['unknown', 200]
    ];
    for (const [theme, threshold] of hairChecks) {
      if (themes.includes(theme) && rand(30, s.pcs_hairlng) > threshold) {
        s.pcs_hairbsh = theme === 'maso' || theme === 'prostitution' ? rand(-1, 0) : -1;
      }
    }
  }

  // Makeup damage
  if (s.pcs_makeup > (s.makeup['base'] || 0)) {
    const makeupChecks: [string[], number][] = [
      [['rape'], 7], [['rough'], 5], [['gangbang'], 5], [['beast'], 4]
    ];
    for (const [req, threshold] of makeupChecks) {
      if (req.every(r => themes.includes(r)) && rand(s.pcs_makeup, Math.floor(s.pcs_makupskl / 10)) < threshold) {
        s.pcs_makeup = 0;
      }
    }
  }

  stim['mag'] = Math.max(1, Math.min(stim['mag'], 9));

  // Arousal calculation
  if (themes.includes('no_arousal')) {
    stim['total'] = 0;
  } else {
    stim['total'] = calcStimTotal(stim['mag'], stim['act'], stim['kink'], stim['pref'], stim['time']);
  }

  // Pain reduction
  const painTotal = s.pain['total'] || 0;
  if (painTotal > 0) {
    const masoExp = getFetishExp(s, 'maso');
    const masoPref = getFetishPref(s, 'maso');
    if (masoPref <= 0 && painTotal < 50) {
      if (painTotal - (3 + masoExp) / 6 > 0) {
        stim['total'] -= (painTotal - (masoExp / 6));
      }
    } else if (masoPref < 25 && painTotal < 55) {
      stim['total'] += ((painTotal * masoExp + 200) / 400) * stim['time'] / 60;
    } else if (masoPref < 50 && painTotal < 70) {
      stim['total'] += ((painTotal * masoExp + 150) / 300) * stim['time'] / 60;
    } else if (masoPref < 75 && painTotal < 85) {
      stim['total'] += ((painTotal * masoExp + 100) / 200) * stim['time'] / 60;
    } else if (masoPref >= 75) {
      stim['total'] += ((painTotal * masoExp + 50) / 100) * stim['time'] / 60;
    } else {
      stim['total'] = 0;
    }
  }

  stim['event'] += stim['total'];
  s.pcs_horny += stim['total'];
  if (s.pcs_horny < 0) s.pcs_horny = 0;

  // Reset size backups
  if (arousalVars['pcs_vag_backup'] !== 0 && arousalVars['pcs_vag_backup'] !== s.pcs_vag) {
    s.pcs_vag = arousalVars['pcs_vag_backup'];
    arousalVars['pcs_vag_backup'] = 0;
  }
  if (arousalVars['pcs_ass_backup'] !== 0 && arousalVars['pcs_ass_backup'] !== s.pcs_ass) {
    s.pcs_ass = arousalVars['pcs_ass_backup'];
    arousalVars['pcs_ass_backup'] = 0;
  }
  if (arousalVars['pcs_throat_backup'] !== 0 && arousalVars['pcs_throat_backup'] !== s.pcs_throat) {
    s.pcs_throat = arousalVars['pcs_throat_backup'];
    arousalVars['pcs_throat_backup'] = 0;
  }

  // Orgasm determination
  if (Object.keys(orgasmFlag).length > 0) {
    orgasmFlag['trigger'] = 1;
  }

  const sensMod = (s.trait_vars['sensitivity'] || 0) > 0 ? 100 : 0;
  const sensModNeg = (s.trait_vars['sensitivity'] || 0) < 0 ? 50 : 0;
  s.orgasm_buildup += stim['total'] * (100 + sensMod - sensModNeg) / 100;
  if (s.orgasm_buildup < 0) s.orgasm_buildup = 0;

  if (s.orgasm_or !== 'no') {
    if (s.orgasm_buildup >= 300 && s.pcs_horny >= 60) {
      triggerOrgasm(s, act);
    } else if (orgasmFlag['trigger'] !== 0) {
      if (s.orgasm_buildup >= 50 && s.pcs_horny >= 300) {
        triggerOrgasm(s, act);
      } else if (s.orgasm_or === 'yes' || s.orgasm_or === 'custom') {
        triggerOrgasm(s, act);
      } else {
        const orgBuildup = s.orgasm_buildup + s.pcs_horny / 2;
        const stimTotal = stim['total'] + ((s.trait_vars['sensitivity'] || 0) > 0 ? 2 : 0) + rand(-3, 3);
        if (orgBuildup >= 300) { if (stimTotal > 4) triggerOrgasm(s, act); }
        else if (orgBuildup >= 250) { if (stimTotal > 5) triggerOrgasm(s, act); }
        else if (orgBuildup >= 200) { if (stimTotal > 6) triggerOrgasm(s, act); }
        else if (orgBuildup >= 150) { if (stimTotal > 8) triggerOrgasm(s, act); }
        else if (orgBuildup >= 100) { if (stimTotal > 10) triggerOrgasm(s, act); }
      }
    }
  }

  checkEvents(s, args);
}

function triggerOrgasm(s: GameState, act: string): void {
  s.orgasm += 1;
  s.orgasm_buildup = 0;
  s.pcs_horny = Math.max(0, s.pcs_horny - 50);
}

function getFetishExp(s: GameState, fetish: string): number {
  return (s as unknown as Record<string, unknown>)[`fetish_exp_${fetish}`] as number || 0;
}

function getFetishPref(s: GameState, fetish: string): number {
  return (s as unknown as Record<string, unknown>)[`fetish_pref_${fetish}`] as number || 0;
}

function applyAct(
  s: GameState,
  act: string,
  stim: Record<string, number>,
  arousalVars: Record<string, number>,
  orgasmFlag: Record<string, number>,
  themes: string[],
  painCoeff: number
): void {
  const time = Math.max(1, stim['time']);
  const hidden = arousalVars['unaware'] === 1;
  const noStats = arousalVars['no_stats'] === 1;

  const addStat = (key: string, val: number) => {
    if (!noStats) s.count[key] = (s.count[key] || 0) + val;
  };
  const addHiddenStat = (key: string, val: number) => {
    if (hidden && !noStats) s.count[`hidden_${key}`] = (s.count[`hidden_${key}`] || 0) + val;
  };
  const addNpc = (arr: string[], hiddenArr: string[], npcId: string) => {
    if (npcId && npcId !== '0') {
      if (!arr.includes(npcId)) arr.push(npcId);
      if (hidden && !hiddenArr.includes(npcId)) hiddenArr.push(npcId);
    }
  };

  switch (act) {
    case 'foreplay':
      stim['act'] = 2;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('foreplay', 1);
      addHiddenStat('foreplay', 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 2) * Math.max(1, time / 5);
      break;

    case 'kiss':
      stim['act'] = 3;
      stim['mag'] = Math.max(1, stim['mag'] - 2);
      addStat('kiss', 1);
      addHiddenStat('kiss', 1);
      addNpc(s.arousal_npc_kissed, s.arousal_npc_hidden_kissed, s.npcID[0] || '');
      s.pcs_hydra -= rand(1, 2) * Math.max(1, time / 5);
      break;

    case 'massage':
      stim['act'] = 4;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('massage', 1);
      addHiddenStat('massage', 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 2) * Math.max(1, time / 5);
      break;

    case 'erotic':
    case 'nudity':
    case 'porn':
    case 'voyeur':
      stim['act'] = 5;
      stim['mag'] = Math.max(1, stim['mag'] - 3);
      addStat(act, 1);
      addHiddenStat(act, 1);
      break;

    case 'breasts':
      stim['act'] = 6;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('breasts', 1);
      addHiddenStat('breasts', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'clit_finger':
      stim['act'] = 7;
      addStat('clit_finger', 1);
      addHiddenStat('clit_finger', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'clit_suck':
      stim['act'] = 8;
      addStat('clit_suck', 1);
      addHiddenStat('clit_suck', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'clit_vibe':
      stim['act'] = 9;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('clit_vibe', 1);
      addHiddenStat('clit_vibe', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(2, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'vaginal_finger':
      stim['act'] = 10;
      addStat('vaginal_finger', 1);
      addHiddenStat('vaginal_finger', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'vaginal_fist':
      stim['act'] = 11;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('vaginal_fist', 1);
      addHiddenStat('vaginal_fist', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(3, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 4) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['vaginal'] = Math.min((s.pain['vaginal'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      break;

    case 'self_fisting':
      stim['act'] = 12;
      stim['mag'] = Math.min(9, stim['mag'] + 2);
      addStat('self_fisting', 1);
      addHiddenStat('self_fisting', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(3, 6) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 5) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['vaginal'] = Math.min((s.pain['vaginal'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      break;

    case 'cuni':
      stim['act'] = 13;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('cuni', 1);
      addHiddenStat('cuni', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'anal_finger':
      stim['act'] = 14;
      addStat('anal_finger', 1);
      addHiddenStat('anal_finger', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['asshole'] = Math.min((s.pain['asshole'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      break;

    case 'rimming':
      stim['act'] = 15;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('rimming', 1);
      addHiddenStat('rimming', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'anal':
    case 'anal_dildo':
      stim['act'] = 16;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('anal', 1);
      addHiddenStat('anal', 1);
      addNpc(s.arousal_npc_anal, s.arousal_npc_hidden_anal, s.npcID[0] || '');
      feed(s, 3);
      s.pcs_hydra -= rand(3, 6) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 5) * Math.max(1, time / 5);
      s.fat += rand(1, 3) * Math.max(1, time / 5);
      inAnal(s, stim);
      if (painCoeff > 0) s.pain['asshole'] = Math.min((s.pain['asshole'] || 0) + rand(painCoeff, painCoeff + 5), 120);
      stretch(s, 'anal');
      if (s.virgin_stats['anal'] === 1) setVirginityStats(s, act);
      break;

    case 'vaginal':
    case 'vaginal_dildo':
    case 'vaginal_strap':
      stim['act'] = 17;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat(act, 1);
      addHiddenStat(act, 1);
      addNpc(s.arousal_npc_vaginal, s.arousal_npc_hidden_vaginal, s.npcID[0] || '');
      feed(s, 3);
      s.pcs_hydra -= rand(3, 6) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 5) * Math.max(1, time / 5);
      s.fat += rand(1, 3) * Math.max(1, time / 5);
      inVag(s, stim);
      if (painCoeff > 0) s.pain['vaginal'] = Math.min((s.pain['vaginal'] || 0) + rand(painCoeff, painCoeff + 5), 120);
      stretch(s, 'vaginal');
      if (s.virgin_stats['vaginal'] === 1) setVirginityStats(s, act);
      break;

    case 'bj':
    case 'dildo_suck':
    case 'strap_suck':
      stim['act'] = 18;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('bj', 1);
      addHiddenStat('bj', 1);
      addNpc(s.arousal_npc_oral, s.arousal_npc_hidden_oral, s.npcID[0] || '');
      feed(s, 2);
      s.pcs_hydra -= rand(2, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 4) * Math.max(1, time / 5);
      inThroat(s, stim);
      if (painCoeff > 0) s.pain['throat'] = Math.min((s.pain['throat'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      if (s.virgin_stats['oral'] === 1) setVirginityStats(s, act);
      break;

    case 'giving_vaginal':
    case 'giving_vaginal_dildo':
    case 'giving_vaginal_strap':
      stim['act'] = 19;
      addStat('giving_vaginal', 1);
      addHiddenStat('giving_vaginal', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(3, 6) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 5) * Math.max(1, time / 5);
      s.fat += rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_anal':
    case 'giving_anal_dildo':
      stim['act'] = 20;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('giving_anal', 1);
      addHiddenStat('giving_anal', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(3, 6) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 5) * Math.max(1, time / 5);
      s.fat += rand(1, 3) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['asshole'] = Math.min((s.pain['asshole'] || 0) + rand(painCoeff, painCoeff + 5), 120);
      break;

    case 'giving_bj':
    case 'giving_dildo_suck':
    case 'giving_strap_suck':
      stim['act'] = 21;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('giving_bj', 1);
      addHiddenStat('giving_bj', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 4) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['throat'] = Math.min((s.pain['throat'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      break;

    case 'giving_clit_finger':
      stim['act'] = 22;
      addStat('giving_clit_finger', 1);
      addHiddenStat('giving_clit_finger', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_clit_suck':
      stim['act'] = 23;
      addStat('giving_clit_suck', 1);
      addHiddenStat('giving_clit_suck', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_clit_vibe':
      stim['act'] = 24;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('giving_clit_vibe', 1);
      addHiddenStat('giving_clit_vibe', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(2, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_vaginal_finger':
      stim['act'] = 25;
      addStat('giving_vaginal_finger', 1);
      addHiddenStat('giving_vaginal_finger', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_vaginal_fist':
      stim['act'] = 26;
      stim['mag'] = Math.min(9, stim['mag'] + 1);
      addStat('giving_vaginal_fist', 1);
      addHiddenStat('giving_vaginal_fist', 1);
      feed(s, 3);
      s.pcs_hydra -= rand(3, 5) * Math.max(1, time / 5);
      s.pcs_stam -= rand(2, 4) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['vaginal'] = Math.min((s.pain['vaginal'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      break;

    case 'giving_anal_finger':
      stim['act'] = 27;
      addStat('giving_anal_finger', 1);
      addHiddenStat('giving_anal_finger', 1);
      feed(s, 2);
      s.pcs_hydra -= rand(2, 4) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 3) * Math.max(1, time / 5);
      if (painCoeff > 0) s.pain['asshole'] = Math.min((s.pain['asshole'] || 0) + rand(painCoeff, painCoeff + 3), 120);
      break;

    case 'giving_rimming':
      stim['act'] = 28;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('giving_rimming', 1);
      addHiddenStat('giving_rimming', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_breasts':
      stim['act'] = 29;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('giving_breasts', 1);
      addHiddenStat('giving_breasts', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'handstuff':
      stim['act'] = 30;
      addStat('handstuff', 1);
      addHiddenStat('handstuff', 1);
      addNpc(s.arousal_npc_handstuff, s.arousal_npc_hidden_handstuff, s.npcID[0] || '');
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'titstuff':
      stim['act'] = 31;
      addStat('titstuff', 1);
      addHiddenStat('titstuff', 1);
      addNpc(s.arousal_npc_titstuff, s.arousal_npc_hidden_titstuff, s.npcID[0] || '');
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'footstuff':
      stim['act'] = 32;
      addStat('footstuff', 1);
      addHiddenStat('footstuff', 1);
      addNpc(s.arousal_npc_footstuff, s.arousal_npc_hidden_footstuff, s.npcID[0] || '');
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_handstuff':
      stim['act'] = 33;
      addStat('giving_handstuff', 1);
      addHiddenStat('giving_handstuff', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_titstuff':
      stim['act'] = 34;
      addStat('giving_titstuff', 1);
      addHiddenStat('giving_titstuff', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_footstuff':
      stim['act'] = 35;
      addStat('giving_footstuff', 1);
      addHiddenStat('giving_footstuff', 1);
      feed(s, 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      break;

    case 'giving_kiss':
      stim['act'] = 36;
      stim['mag'] = Math.max(1, stim['mag'] - 2);
      addStat('giving_kiss', 1);
      addHiddenStat('giving_kiss', 1);
      addNpc(s.arousal_npc_kissed, s.arousal_npc_hidden_kissed, s.npcID[0] || '');
      s.pcs_hydra -= rand(1, 2) * Math.max(1, time / 5);
      break;

    case 'giving_foreplay':
      stim['act'] = 37;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('giving_foreplay', 1);
      addHiddenStat('giving_foreplay', 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 2) * Math.max(1, time / 5);
      break;

    case 'giving_massage':
      stim['act'] = 38;
      stim['mag'] = Math.max(1, stim['mag'] - 1);
      addStat('giving_massage', 1);
      addHiddenStat('giving_massage', 1);
      s.pcs_hydra -= rand(1, 3) * Math.max(1, time / 5);
      s.pcs_stam -= rand(1, 2) * Math.max(1, time / 5);
      break;

    case 'giving_erotic':
    case 'giving_nudity':
    case 'giving_porn':
    case 'giving_voyeur':
      stim['act'] = 39;
      stim['mag'] = Math.max(1, stim['mag'] - 3);
      addStat('giving_erotic', 1);
      addHiddenStat('giving_erotic', 1);
      break;

    default:
      stim['act'] = 1;
      break;
  }
}
