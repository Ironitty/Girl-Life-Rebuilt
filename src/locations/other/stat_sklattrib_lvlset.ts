import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_stren = ((s as any).stren_lvl ?? 0) + ((s as any).stren_plus_lvl ?? 0) + (((s as any).arch_effects ?? {})?.['strength_effect'] ?? 0);
  if (((s as any).pcs_stren ?? 0) < 1) {
    (s as any).pcs_stren = 1;
  }
  (s as any).pcs_agil = ((s as any).agil_lvl ?? 0);
  if (((s as any).pcs_agil ?? 0) < 1) {
    (s as any).pcs_agil = 1;
  }
  (s as any).pcs_vital = ((s as any).vital_lvl ?? 0);
  if (((s as any).pcs_vital ?? 0) < 1) {
    (s as any).pcs_vital = 1;
  }
  (s as any).pcs_intel = ((s as any).intel_lvl ?? 0) + (((s as any).arch_effects ?? {})?.['intelligence_effect'] ?? 0) - (5 * ((s as any).noorgasm ?? 0));
  if (((s as any).pcs_intel ?? 0) < 1) {
    (s as any).pcs_intel = 1;
  }
  (s as any).pcs_react = ((s as any).react_lvl ?? 0);
  if (((s as any).pcs_react ?? 0) < 1) {
    (s as any).pcs_react = 1;
  }
  (s as any).pcs_sprt = ((s as any).sprt_lvl ?? 0) + (((s as any).arch_effects ?? {})?.['spirit_effect'] ?? 0);
  if (((s as any).pcs_sprt ?? 0) < 1) {
    (s as any).pcs_sprt = 1;
  }
  (s as any).pcs_chrsm = ((s as any).chrsm_lvl ?? 0) + (((s as any).arch_effects ?? {})?.['charisma_effect'] ?? 0);
  if (((s as any).pcs_chrsm ?? 0) < 1) {
    (s as any).pcs_chrsm = 1;
  }
  (s as any).pcs_prcptn = ((s as any).prcptn_lvl ?? 0) + (((s as any).arch_effects ?? {})?.['perception_effect'] ?? 0);
  if (((s as any).pcs_prcptn ?? 0) < 1) {
    (s as any).pcs_prcptn = 1;
  }
  (s as any).pcs_magik = ((s as any).magik_lvl ?? 0);
  if (((s as any).pcs_magik ?? 0) < 0) {
    (s as any).pcs_magik = 0;
  }
  (s as any).pcs_butt_tr = ((s as any).butt_tr_lvl ?? 0);
  if (((s as any).pcs_butt_tr ?? 0) < 0) {
    (s as any).pcs_butt_tr = 0;
  }
  (s as any).pcs_jab = (((s as any).jab_lvl ?? 0) + (((s as any).pcs_agil ?? 0) * 2 + ((s as any).pcs_stren ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['combat_effect'] ?? 0);
  ((s as any).jab = (s as any).jab ?? {})[0] = 'stren';
  ((s as any).jab = (s as any).jab ?? {})[1] = 'agil';
  (s as any).pcs_punch = (((s as any).punch_lvl ?? 0) + (((s as any).pcs_stren ?? 0) * 2 + ((s as any).pcs_agil ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['combat_effect'] ?? 0);
  ((s as any).punch = (s as any).punch ?? {})[0] = 'stren';
  ((s as any).punch = (s as any).punch ?? {})[1] = 'agil';
  (s as any).pcs_kick = (((s as any).kick_lvl ?? 0) + (((s as any).pcs_stren ?? 0) * 3 + ((s as any).pcs_agil ?? 0)) / 4) / 2 + (((s as any).arch_effects ?? {})?.['combat_effect'] ?? 0);
  ((s as any).kick = (s as any).kick ?? {})[0] = 'stren';
  ((s as any).kick = (s as any).kick ?? {})[1] = 'agil';
  (s as any).pcs_def = (((s as any).def_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_stren ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['combat_effect'] ?? 0);
  ((s as any).def = (s as any).def ?? {})[0] = 'stren';
  ((s as any).def = (s as any).def ?? {})[1] = 'agil';
  ((s as any).def = (s as any).def ?? {})[2] = 'react';
  (s as any).pcs_shoot = (((s as any).shoot_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['combat_effect'] ?? 0);
  ((s as any).shoot = (s as any).shoot ?? {})[0] = 'agil';
  ((s as any).shoot = (s as any).shoot ?? {})[1] = 'react';
  (s as any).pcs_bushcraft = (((s as any).bushcraft_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 3) / 2;
  ((s as any).bushcraft = (s as any).bushcraft ?? {})[0] = 'stren';
  ((s as any).bushcraft = (s as any).bushcraft ?? {})[1] = 'agil';
  ((s as any).bushcraft = (s as any).bushcraft ?? {})[2] = 'intel';
  (s as any).pcs_vokal = (((s as any).vokal_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_chrsm ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['music_effect'] ?? 0);
  ((s as any).vokal = (s as any).vokal ?? {})[0] = 'intel';
  ((s as any).vokal = (s as any).vokal ?? {})[1] = 'chrsm';
  (s as any).pcs_sewng = (((s as any).sewng_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['sewing_effect'] ?? 0);
  ((s as any).sewng = (s as any).sewng ?? {})[0] = 'agil';
  ((s as any).sewng = (s as any).sewng ?? {})[1] = 'intel';
  (s as any).pcs_instrmusic = (((s as any).instrmusic_lvl ?? 0) + (2 * ((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['music_effect'] ?? 0);
  ((s as any).instrmusic = (s as any).instrmusic ?? {})[0] = 'agil';
  ((s as any).instrmusic = (s as any).instrmusic ?? {})[1] = 'intel';
  (s as any).pcs_photoskl = (((s as any).photoskl_lvl ?? 0) + (2 * ((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2;
  ((s as any).photoskl = (s as any).photoskl ?? {})[0] = 'intel';
  ((s as any).photoskl = (s as any).photoskl ?? {})[1] = 'react';
  (s as any).pcs_artskls = (((s as any).artskls_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['artistic_effect'] ?? 0);
  ((s as any).artskls = (s as any).artskls ?? {})[0] = 'agil';
  ((s as any).artskls = (s as any).artskls ?? {})[1] = 'intel';
  ((s as any).artskls = (s as any).artskls ?? {})[2] = 'react';
  (s as any).pcs_danc = (((s as any).danc_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['dancing_effect'] ?? 0);
  ((s as any).danc = (s as any).danc ?? {})[0] = 'agil';
  ((s as any).danc = (s as any).danc ?? {})[1] = 'vital';
  ((s as any).danc = (s as any).danc ?? {})[2] = 'react';
  (s as any).pcs_dancero = (((s as any).dancero_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_chrsm ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['erotic_dance_effect'] ?? 0);
  ((s as any).dancero = (s as any).dancero ?? {})[0] = 'agil';
  ((s as any).dancero = (s as any).dancero ?? {})[1] = 'vital';
  ((s as any).dancero = (s as any).dancero ?? {})[2] = 'chrsm';
  (s as any).pcs_dancpol = (((s as any).dancpol_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_chrsm ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['pole_dance_effect'] ?? 0);
  ((s as any).dancpol = (s as any).dancpol ?? {})[0] = 'stren';
  ((s as any).dancpol = (s as any).dancpol ?? {})[1] = 'agil';
  ((s as any).dancpol = (s as any).dancpol ?? {})[2] = 'chrsm';
  (s as any).pcs_chess = (((s as any).chess_lvl ?? 0) + ((s as any).pcs_intel ?? 0)) / 2 + (5 * ((s as any).logictrt ?? 0)) + (((s as any).arch_effects ?? {})?.['chess_effect'] ?? 0);
  ((s as any).chess = (s as any).chess ?? {})[0] = 'intel';
  (s as any).pcs_gaming = (((s as any).gaming_lvl ?? 0) + (2 * ((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2;
  ((s as any).gaming = (s as any).gaming ?? {})[0] = 'intel';
  ((s as any).gaming = (s as any).gaming ?? {})[1] = 'react';
  (s as any).pcs_humint = (((s as any).humint_lvl ?? 0) + (((s as any).pcs_react ?? 0) + ((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['people_skills_effect'] ?? 0);
  ((s as any).humint = (s as any).humint ?? {})[0] = 'react';
  ((s as any).humint = (s as any).humint ?? {})[1] = 'chrsm';
  ((s as any).humint = (s as any).humint ?? {})[2] = 'prcptn';
  (s as any).pcs_persuas = (((s as any).persuas_lvl ?? 0) + (((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['people_skills_effect'] ?? 0) + (((s as any).arch_effects ?? {})?.['persuasion_effect'] ?? 0);
  ((s as any).persuas = (s as any).persuas ?? {})[0] = 'chrsm';
  ((s as any).persuas = (s as any).persuas ?? {})[1] = 'prcptn';
  (s as any).pcs_run = (((s as any).run_lvl ?? 0) + (2 * (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0)) + ((s as any).pcs_vital ?? 0)) / 5) / 2 + (((s as any).arch_effects ?? {})?.['sports_effect'] ?? 0);
  ((s as any).run = (s as any).run ?? {})[0] = 'stren';
  ((s as any).run = (s as any).run ?? {})[1] = 'agil';
  ((s as any).run = (s as any).run ?? {})[2] = 'vital';
  (s as any).pcs_vball_block = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + (((s as any).pcs_hgt ?? 0) - 170) + (((s as any).arch_effects ?? {})?.['revealing_sports_effect'] ?? 0);
  ((s as any).vball_block = (s as any).vball_block ?? {})[0] = 'vital';
  ((s as any).vball_block = (s as any).vball_block ?? {})[1] = 'react';
  (s as any).pcs_vball_rec = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['revealing_sports_effect'] ?? 0);
  ((s as any).vball_rec = (s as any).vball_rec ?? {})[0] = 'agil';
  ((s as any).vball_rec = (s as any).vball_rec ?? {})[1] = 'react';
  (s as any).pcs_vball_serve = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['revealing_sports_effect'] ?? 0);
  ((s as any).vball_serve = (s as any).vball_serve ?? {})[0] = 'stren';
  ((s as any).vball_serve = (s as any).vball_serve ?? {})[1] = 'prcptn';
  (s as any).pcs_vball_set = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['revealing_sports_effect'] ?? 0);
  ((s as any).vball_set = (s as any).vball_set ?? {})[0] = 'agil';
  ((s as any).vball_set = (s as any).vball_set ?? {})[1] = 'prcptn';
  (s as any).pcs_vball_spike = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['revealing_sports_effect'] ?? 0);
  ((s as any).vball_spike = (s as any).vball_spike ?? {})[0] = 'stren';
  ((s as any).vball_spike = (s as any).vball_spike ?? {})[1] = 'vital';
  (s as any).pcs_vball = (((s as any).pcs_vball_block ?? 0) + ((s as any).pcs_vball_rec ?? 0) + ((s as any).pcs_vball_serve ?? 0) + ((s as any).pcs_vball_set ?? 0) + ((s as any).pcs_vball_spike ?? 0)) / 5;
  ((s as any).vball = (s as any).vball ?? {})[0] = 'stren';
  ((s as any).vball = (s as any).vball ?? {})[1] = 'agil';
  ((s as any).vball = (s as any).vball ?? {})[2] = 'vital';
  ((s as any).vball = (s as any).vball ?? {})[3] = 'react';
  ((s as any).vball = (s as any).vball ?? {})[4] = 'prcptn';
  (s as any).pcs_icesktng = (((s as any).icesktng_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + 2 * ((s as any).pcs_agil ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['revealing_sports_effect'] ?? 0);
  ((s as any).icesktng = (s as any).icesktng ?? {})[0] = 'stren';
  ((s as any).icesktng = (s as any).icesktng ?? {})[1] = 'agil';
  (s as any).pcs_wrstlng = (((s as any).wrstlng_lvl ?? 0) + (2 * ((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 4) / 2 + (((s as any).arch_effects ?? {})?.['combat_effect'] ?? 0);
  ((s as any).wrstlng = (s as any).wrstlng ?? {})[0] = 'stren';
  ((s as any).wrstlng = (s as any).wrstlng ?? {})[1] = 'agil';
  ((s as any).wrstlng = (s as any).wrstlng ?? {})[2] = 'vital';
  (s as any).pcs_ftbll = (((s as any).ftbll_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['sports_effect'] ?? 0);
  ((s as any).ftbll = (s as any).ftbll ?? {})[0] = 'stren';
  ((s as any).ftbll = (s as any).ftbll ?? {})[1] = 'agil';
  ((s as any).ftbll = (s as any).ftbll ?? {})[2] = 'vital';
  (s as any).pcs_bkbll = (((s as any).bkbll_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['sports_effect'] ?? 0);
  ((s as any).bkbll = (s as any).bkbll ?? {})[0] = 'agil';
  ((s as any).bkbll = (s as any).bkbll ?? {})[1] = 'pcs_vital';
  ((s as any).bkbll = (s as any).bkbll ?? {})[2] = 'react';
  (s as any).pcs_splcstng = (((s as any).splcstng_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2;
  ((s as any).splcstng = (s as any).splcstng ?? {})[0] = 'intel';
  ((s as any).splcstng = (s as any).splcstng ?? {})[1] = 'react';
  (s as any).pcs_observ = (((s as any).observ_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2;
  ((s as any).observ = (s as any).observ ?? {})[0] = 'intel';
  ((s as any).observ = (s as any).observ ?? {})[1] = 'react';
  ((s as any).observ = (s as any).observ ?? {})[2] = 'prcptn';
  (s as any).pcs_makupskl = (((s as any).makupskl_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['makeup_effect'] ?? 0);
  ((s as any).makupskl = (s as any).makupskl ?? {})[0] = 'agil';
  ((s as any).makupskl = (s as any).makupskl ?? {})[1] = 'intel';
  (s as any).pcs_compskl = (((s as any).compskl_lvl ?? 0) + ((s as any).pcs_intel ?? 0)) / 2 + (((s as any).arch_effects ?? {})?.['computer_effect'] ?? 0);
  ((s as any).compskl = (s as any).compskl ?? {})[0] = 'intel';
  (s as any).pcs_comphckng = (((s as any).comphckng_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['computer_effect'] ?? 0);
  ((s as any).comphckng = (s as any).comphckng ?? {})[0] = 'intel';
  ((s as any).comphckng = (s as any).comphckng ?? {})[1] = 'react';
  (s as any).pcs_hndiwrk = (((s as any).hndiwrk_lvl ?? 0) + (2 * ((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 3) / 2;
  ((s as any).hndiwrk = (s as any).hndiwrk ?? {})[0] = 'agil';
  ((s as any).hndiwrk = (s as any).hndiwrk ?? {})[1] = 'intel';
  (s as any).pcs_servng = (((s as any).servng_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['service_effect'] ?? 0);
  ((s as any).servng = (s as any).servng ?? {})[0] = 'vital';
  ((s as any).servng = (s as any).servng ?? {})[1] = 'intel';
  (s as any).pcs_cleaning = (((s as any).cleaning_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['cleaning_effect'] ?? 0);
  ((s as any).cleaning = (s as any).cleaning ?? {})[0] = 'vital';
  ((s as any).cleaning = (s as any).cleaning ?? {})[1] = 'intel';
  (s as any).pcs_mdlng = ((((s as any).mdlng_lvl ?? 0) * 3 / 2) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 4) / 2 + (((s as any).arch_effects ?? {})?.['modeling_effect'] ?? 0);
  ((s as any).mdlng = (s as any).mdlng ?? {})[0] = 'agil';
  ((s as any).mdlng = (s as any).mdlng ?? {})[1] = 'vital';
  (s as any).pcs_medcn = (((s as any).medcn_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2;
  ((s as any).medcn = (s as any).medcn ?? {})[0] = 'intel';
  ((s as any).medcn = (s as any).medcn ?? {})[1] = 'react';
  ((s as any).medcn = (s as any).medcn ?? {})[2] = 'prcptn';
  (s as any).pcs_heels = (((s as any).heels_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['heels_effect'] ?? 0) + ((((s as any).trait_vars ?? 0)?.['heel_preference'] > 0) ? ((((s as any).trait_vars ?? {})?.['heel_preference'] ?? 0) * 5) : (0));
  if (((s as any).trait_vars ?? 0)?.['heel_preference'] < 0) {
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + ((((s as any).trait_vars ?? {})?.['heel_preference_exp'] ?? 0) / 625);
  }
  if (((s as any).pcs_heels ?? 0) < 0) {
    (s as any).pcs_heels = 0;
  }
  ((s as any).heels = (s as any).heels ?? {})[0] = 'agil';
  ((s as any).heels = (s as any).heels ?? {})[1] = 'react';
  (s as any).pcs_pool = ((((s as any).pool_lvl ?? 0) * 3) + ((s as any).pcs_intel ?? 0)) / 4;
  ((s as any).pool = (s as any).pool ?? {})[0] = 'intel';
  (s as any).pcs_inhib = ((s as any).inhib_lvl ?? 0) + (((s as any).alko ?? 0) * 3) + (((s as any).arch_effects ?? {})?.['inhib_effect'] ?? 0);
  (s as any).pcs_inhib = qspFunc(s, 'math', 'int_clamp', ((s as any).pcs_inhib ?? 0), 0, 100);
  ((s as any).inhib = (s as any).inhib ?? {})[0] = 'chrsm';
  (s as any).pcs_perform = (((s as any).perform_lvl ?? 0) + (((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['performance_effect'] ?? 0);
  ((s as any).perform = (s as any).perform ?? {})[0] = 'chrsm';
  ((s as any).perform = (s as any).perform ?? {})[1] = 'prcptn';
  (s as any).pcs_cheer = (((s as any).cheer_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['cheerleading_effect'] ?? 0);
  ((s as any).cheer = (s as any).cheer ?? {})[0] = 'agil';
  ((s as any).cheer = (s as any).cheer ?? {})[1] = 'vital';
  ((s as any).cheer = (s as any).cheer ?? {})[2] = 'react';
  (s as any).pcs_musicprod = (((s as any).musicprod_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_sprt ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2 + (((s as any).arch_effects ?? {})?.['music_effect'] ?? 0);
  ((s as any).musicprod = (s as any).musicprod ?? {})[0] = 'intel';
  ((s as any).musicprod = (s as any).musicprod ?? {})[1] = 'sprt';
  ((s as any).musicprod = (s as any).musicprod ?? {})[2] = 'prcptn';
  (s as any).pcs_songwrit = (((s as any).songwrit_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_sprt ?? 0)) / 2) / 2 + (((s as any).arch_effects ?? {})?.['songwriting_effect'] ?? 0);
  ((s as any).songwrit = (s as any).songwrit ?? {})[0] = 'intel';
  ((s as any).songwrit = (s as any).songwrit ?? {})[1] = 'sprt';
  scene.build();
}

export const stat_sklattrib_lvlset: LocationDef = {
  name: 'stat_sklattrib_lvlset',
  region: 'other',
  enter: enter,
};
