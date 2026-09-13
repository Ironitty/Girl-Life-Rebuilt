import { qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_stren = ((s as any).stren_lvl ?? 0) + ((s as any).stren_plus_lvl ?? 0) + ((s as any).arch_effects ?? {})?.['strength_effect'];
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
  (s as any).pcs_intel = ((s as any).intel_lvl ?? 0) + ((s as any).arch_effects ?? {})?.['intelligence_effect'] - (5 * ((s as any).noorgasm ?? 0));
  if (((s as any).pcs_intel ?? 0) < 1) {
    (s as any).pcs_intel = 1;
  }
  (s as any).pcs_react = ((s as any).react_lvl ?? 0);
  if (((s as any).pcs_react ?? 0) < 1) {
    (s as any).pcs_react = 1;
  }
  (s as any).pcs_sprt = ((s as any).sprt_lvl ?? 0) + ((s as any).arch_effects ?? {})?.['spirit_effect'];
  if (((s as any).pcs_sprt ?? 0) < 1) {
    (s as any).pcs_sprt = 1;
  }
  (s as any).pcs_chrsm = ((s as any).chrsm_lvl ?? 0) + ((s as any).arch_effects ?? {})?.['charisma_effect'];
  if (((s as any).pcs_chrsm ?? 0) < 1) {
    (s as any).pcs_chrsm = 1;
  }
  (s as any).pcs_prcptn = ((s as any).prcptn_lvl ?? 0) + ((s as any).arch_effects ?? {})?.['perception_effect'];
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
  (s as any).pcs_jab = (((s as any).jab_lvl ?? 0) + (((s as any).pcs_agil ?? 0) * 2 + ((s as any).pcs_stren ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['combat_effect'];
  // TODO-QSP: $jab[0] = 'stren'
  // TODO-QSP: $jab[1] = 'agil'
  (s as any).pcs_punch = (((s as any).punch_lvl ?? 0) + (((s as any).pcs_stren ?? 0) * 2 + ((s as any).pcs_agil ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['combat_effect'];
  // TODO-QSP: $punch[0] = 'stren'
  // TODO-QSP: $punch[1] = 'agil'
  (s as any).pcs_kick = (((s as any).kick_lvl ?? 0) + (((s as any).pcs_stren ?? 0) * 3 + ((s as any).pcs_agil ?? 0)) / 4) / 2 + ((s as any).arch_effects ?? {})?.['combat_effect'];
  // TODO-QSP: $kick[0] = 'stren'
  // TODO-QSP: $kick[1] = 'agil'
  (s as any).pcs_def = (((s as any).def_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_stren ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['combat_effect'];
  // TODO-QSP: $def[0] = 'stren'
  // TODO-QSP: $def[1] = 'agil'
  // TODO-QSP: $def[2] = 'react'
  (s as any).pcs_shoot = (((s as any).shoot_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['combat_effect'];
  // TODO-QSP: $shoot[0] = 'agil'
  // TODO-QSP: $shoot[1] = 'react'
  (s as any).pcs_bushcraft = (((s as any).bushcraft_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 3) / 2;
  // TODO-QSP: $bushcraft[0] = 'stren'
  // TODO-QSP: $bushcraft[1] = 'agil'
  // TODO-QSP: $bushcraft[2] = 'intel'
  (s as any).pcs_vokal = (((s as any).vokal_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_chrsm ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['music_effect'];
  // TODO-QSP: $vokal[0] = 'intel'
  // TODO-QSP: $vokal[1] = 'chrsm'
  (s as any).pcs_sewng = (((s as any).sewng_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['sewing_effect'];
  // TODO-QSP: $sewng[0] = 'agil'
  // TODO-QSP: $sewng[1] = 'intel'
  (s as any).pcs_instrmusic = (((s as any).instrmusic_lvl ?? 0) + (2 * ((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['music_effect'];
  // TODO-QSP: $instrmusic[0] = 'agil'
  // TODO-QSP: $instrmusic[1] = 'intel'
  (s as any).pcs_photoskl = (((s as any).photoskl_lvl ?? 0) + (2 * ((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2;
  // TODO-QSP: $photoskl[0] = 'intel'
  // TODO-QSP: $photoskl[1] = 'react'
  (s as any).pcs_artskls = (((s as any).artskls_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['artistic_effect'];
  // TODO-QSP: $artskls[0] = 'agil'
  // TODO-QSP: $artskls[1] = 'intel'
  // TODO-QSP: $artskls[2] = 'react'
  (s as any).pcs_danc = (((s as any).danc_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['dancing_effect'];
  // TODO-QSP: $danc[0] = 'agil'
  // TODO-QSP: $danc[1] = 'vital'
  // TODO-QSP: $danc[2] = 'react'
  (s as any).pcs_dancero = (((s as any).dancero_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_chrsm ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['erotic_dance_effect'];
  // TODO-QSP: $dancero[0] = 'agil'
  // TODO-QSP: $dancero[1] = 'vital'
  // TODO-QSP: $dancero[2] = 'chrsm'
  (s as any).pcs_dancpol = (((s as any).dancpol_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_chrsm ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['pole_dance_effect'];
  // TODO-QSP: $dancpol[0] = 'stren'
  // TODO-QSP: $dancpol[1] = 'agil'
  // TODO-QSP: $dancpol[2] = 'chrsm'
  (s as any).pcs_chess = (((s as any).chess_lvl ?? 0) + ((s as any).pcs_intel ?? 0)) / 2 + (5 * ((s as any).logictrt ?? 0)) + ((s as any).arch_effects ?? {})?.['chess_effect'];
  // TODO-QSP: $chess[0] = 'intel'
  (s as any).pcs_gaming = (((s as any).gaming_lvl ?? 0) + (2 * ((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2;
  // TODO-QSP: $gaming[0] = 'intel'
  // TODO-QSP: $gaming[1] = 'react'
  (s as any).pcs_humint = (((s as any).humint_lvl ?? 0) + (((s as any).pcs_react ?? 0) + ((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['people_skills_effect'];
  // TODO-QSP: $humint[0] = 'react'
  // TODO-QSP: $humint[1] = 'chrsm'
  // TODO-QSP: $humint[2] = 'prcptn'
  (s as any).pcs_persuas = (((s as any).persuas_lvl ?? 0) + (((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['people_skills_effect'] + ((s as any).arch_effects ?? {})?.['persuasion_effect'];
  // TODO-QSP: $persuas[0] = 'chrsm'
  // TODO-QSP: $persuas[1] = 'prcptn'
  (s as any).pcs_run = (((s as any).run_lvl ?? 0) + (2 * (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0)) + ((s as any).pcs_vital ?? 0)) / 5) / 2 + ((s as any).arch_effects ?? {})?.['sports_effect'];
  // TODO-QSP: $run[0] = 'stren'
  // TODO-QSP: $run[1] = 'agil'
  // TODO-QSP: $run[2] = 'vital'
  (s as any).pcs_vball_block = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + (((s as any).pcs_hgt ?? 0) - 170) + ((s as any).arch_effects ?? {})?.['revealing_sports_effect'];
  // TODO-QSP: $vball_block[0] = 'vital'
  // TODO-QSP: $vball_block[1] = 'react'
  (s as any).pcs_vball_rec = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['revealing_sports_effect'];
  // TODO-QSP: $vball_rec[0] = 'agil'
  // TODO-QSP: $vball_rec[1] = 'react'
  (s as any).pcs_vball_serve = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['revealing_sports_effect'];
  // TODO-QSP: $vball_serve[0] = 'stren'
  // TODO-QSP: $vball_serve[1] = 'prcptn'
  (s as any).pcs_vball_set = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['revealing_sports_effect'];
  // TODO-QSP: $vball_set[0] = 'agil'
  // TODO-QSP: $vball_set[1] = 'prcptn'
  (s as any).pcs_vball_spike = (((s as any).vball_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_vital ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['revealing_sports_effect'];
  // TODO-QSP: $vball_spike[0] = 'stren'
  // TODO-QSP: $vball_spike[1] = 'vital'
  (s as any).pcs_vball = (((s as any).pcs_vball_block ?? 0) + ((s as any).pcs_vball_rec ?? 0) + ((s as any).pcs_vball_serve ?? 0) + ((s as any).pcs_vball_set ?? 0) + ((s as any).pcs_vball_spike ?? 0)) / 5;
  // TODO-QSP: $vball[0] = 'stren'
  // TODO-QSP: $vball[1] = 'agil'
  // TODO-QSP: $vball[2] = 'vital'
  // TODO-QSP: $vball[3] = 'react'
  // TODO-QSP: $vball[4] = 'prcptn'
  (s as any).pcs_icesktng = (((s as any).icesktng_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + 2 * ((s as any).pcs_agil ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['revealing_sports_effect'];
  // TODO-QSP: $icesktng[0] = 'stren'
  // TODO-QSP: $icesktng[1] = 'agil'
  (s as any).pcs_wrstlng = (((s as any).wrstlng_lvl ?? 0) + (2 * ((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 4) / 2 + ((s as any).arch_effects ?? {})?.['combat_effect'];
  // TODO-QSP: $wrstlng[0] = 'stren'
  // TODO-QSP: $wrstlng[1] = 'agil'
  // TODO-QSP: $wrstlng[2] = 'vital'
  (s as any).pcs_ftbll = (((s as any).ftbll_lvl ?? 0) + (((s as any).pcs_stren ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['sports_effect'];
  // TODO-QSP: $ftbll[0] = 'stren'
  // TODO-QSP: $ftbll[1] = 'agil'
  // TODO-QSP: $ftbll[2] = 'vital'
  (s as any).pcs_bkbll = (((s as any).bkbll_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['sports_effect'];
  // TODO-QSP: $bkbll[0] = 'agil'
  // TODO-QSP: $bkbll[1] = 'pcs_vital'
  // TODO-QSP: $bkbll[2] = 'react'
  (s as any).pcs_splcstng = (((s as any).splcstng_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2;
  // TODO-QSP: $splcstng[0] = 'intel'
  // TODO-QSP: $splcstng[1] = 'react'
  (s as any).pcs_observ = (((s as any).observ_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2;
  // TODO-QSP: $observ[0] = 'intel'
  // TODO-QSP: $observ[1] = 'react'
  // TODO-QSP: $observ[2] = 'prcptn'
  (s as any).pcs_makupskl = (((s as any).makupskl_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['makeup_effect'];
  // TODO-QSP: $makupskl[0] = 'agil'
  // TODO-QSP: $makupskl[1] = 'intel'
  (s as any).pcs_compskl = (((s as any).compskl_lvl ?? 0) + ((s as any).pcs_intel ?? 0)) / 2 + ((s as any).arch_effects ?? {})?.['computer_effect'];
  // TODO-QSP: $compskl[0] = 'intel'
  (s as any).pcs_comphckng = (((s as any).comphckng_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['computer_effect'];
  // TODO-QSP: $comphckng[0] = 'intel'
  // TODO-QSP: $comphckng[1] = 'react'
  (s as any).pcs_hndiwrk = (((s as any).hndiwrk_lvl ?? 0) + (2 * ((s as any).pcs_agil ?? 0) + ((s as any).pcs_intel ?? 0)) / 3) / 2;
  // TODO-QSP: $hndiwrk[0] = 'agil'
  // TODO-QSP: $hndiwrk[1] = 'intel'
  (s as any).pcs_servng = (((s as any).servng_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['service_effect'];
  // TODO-QSP: $servng[0] = 'vital'
  // TODO-QSP: $servng[1] = 'intel'
  (s as any).pcs_cleaning = (((s as any).cleaning_lvl ?? 0) + (((s as any).pcs_vital ?? 0) + ((s as any).pcs_intel ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['cleaning_effect'];
  // TODO-QSP: $cleaning[0] = 'vital'
  // TODO-QSP: $cleaning[1] = 'intel'
  (s as any).pcs_mdlng = ((((s as any).mdlng_lvl ?? 0) * 3 / 2) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0)) / 4) / 2 + ((s as any).arch_effects ?? {})?.['modeling_effect'];
  // TODO-QSP: $mdlng[0] = 'agil'
  // TODO-QSP: $mdlng[1] = 'vital'
  (s as any).pcs_medcn = (((s as any).medcn_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_react ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2;
  // TODO-QSP: $medcn[0] = 'intel'
  // TODO-QSP: $medcn[1] = 'react'
  // TODO-QSP: $medcn[2] = 'prcptn'
  (s as any).pcs_heels = (((s as any).heels_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_react ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['heels_effect'] + ((((s as any).trait_vars ?? 0)?.['heel_preference'] > 0) ? (((s as any).trait_vars ?? {})?.['heel_preference'] * 5) : (0));
  if (((s as any).trait_vars ?? 0)?.['heel_preference'] < 0) {
    (s as any).pcs_heels = ((s as any).pcs_heels ?? 0) + (((s as any).trait_vars ?? {})?.['heel_preference_exp'] / 625);
  }
  if (((s as any).pcs_heels ?? 0) < 0) {
    (s as any).pcs_heels = 0;
  }
  // TODO-QSP: $heels[0] = 'agil'
  // TODO-QSP: $heels[1] = 'react'
  (s as any).pcs_pool = ((((s as any).pool_lvl ?? 0) * 3) + ((s as any).pcs_intel ?? 0)) / 4;
  // TODO-QSP: $pool[0] = 'intel'
  (s as any).pcs_inhib = ((s as any).inhib_lvl ?? 0) + (((s as any).alko ?? 0) * 3) + ((s as any).arch_effects ?? {})?.['inhib_effect'];
  (s as any).pcs_inhib = qspFunc(s, 'math', 'int_clamp', ((s as any).pcs_inhib ?? 0), 0, 100);
  // TODO-QSP: $inhib[0] = 'chrsm'
  (s as any).pcs_perform = (((s as any).perform_lvl ?? 0) + (((s as any).pcs_chrsm ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['performance_effect'];
  // TODO-QSP: $perform[0] = 'chrsm'
  // TODO-QSP: $perform[1] = 'prcptn'
  (s as any).pcs_cheer = (((s as any).cheer_lvl ?? 0) + (((s as any).pcs_agil ?? 0) + ((s as any).pcs_vital ?? 0) + ((s as any).pcs_react ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['cheerleading_effect'];
  // TODO-QSP: $cheer[0] = 'agil'
  // TODO-QSP: $cheer[1] = 'vital'
  // TODO-QSP: $cheer[2] = 'react'
  (s as any).pcs_musicprod = (((s as any).musicprod_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_sprt ?? 0) + ((s as any).pcs_prcptn ?? 0)) / 3) / 2 + ((s as any).arch_effects ?? {})?.['music_effect'];
  // TODO-QSP: $musicprod[0] = 'intel'
  // TODO-QSP: $musicprod[1] = 'sprt'
  // TODO-QSP: $musicprod[2] = 'prcptn'
  (s as any).pcs_songwrit = (((s as any).songwrit_lvl ?? 0) + (((s as any).pcs_intel ?? 0) + ((s as any).pcs_sprt ?? 0)) / 2) / 2 + ((s as any).arch_effects ?? {})?.['songwriting_effect'];
  // TODO-QSP: $songwrit[0] = 'intel'
  // TODO-QSP: $songwrit[1] = 'sprt'
  scene.build();
}

export const stat_sklattrib_lvlset: LocationDef = {
  name: 'stat_sklattrib_lvlset',
  region: 'other',
  enter: enter,
};
