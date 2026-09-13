import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetBaseStimmag(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1 + (Math.floor(Math.random() * 3) + 0) + (Math.floor(Math.random() * 4) + 0) + (Math.floor(Math.random() * 4) + 0);
  // TODO-QSP: end
  scene.build();
}

function enterCalcStimtotal(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).tempStim) (s as any).tempStim = {}; (s as any).tempStim['mag'] = 0;
  if (!(s as any).tempStim) (s as any).tempStim = {}; (s as any).tempStim['act'] = 0;
  if (!(s as any).tempStim) (s as any).tempStim = {}; (s as any).tempStim['kink'] = 0;
  if (!(s as any).tempStim) (s as any).tempStim = {}; (s as any).tempStim['pref'] = qspUntranslated(s, "ARGS[4]", { location: "arousal_funcs" });
  if (!(s as any).tempStim) (s as any).tempStim = {}; (s as any).tempStim['time'] = 0;
  (s as any).result = (((s as any).tempStim ?? {})?.['mag'] * ((s as any).tempStim ?? {})?.['act'] * ((s as any).tempStim ?? {})?.['kink'] / 100 + ((s as any).tempStim ?? {})?.['pref']) * ((s as any).tempStim ?? {})?.['time'] / 120;
  // TODO-QSP: end
  scene.build();
}

function enterStretch(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_amount = (((!((s as any).locArgs?.[2] ?? 0))) ? (1) : (qspUntranslated(s, "ARGS[2]", { location: "arousal_funcs" })));
  if (((s as any).locArgs?.[1] ?? 0) === 'vaginal') {
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (((s as any).temp_amount ?? 0));
    }
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (((s as any).temp_amount ?? 0));
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'anal') {
      if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (((s as any).temp_amount ?? 0));
      }
      if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (((s as any).temp_amount ?? 0));
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'oral') {
        if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
          (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (((s as any).temp_amount ?? 0));
        }
        if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (((s as any).temp_amount ?? 0));
        }
      }
    }
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetHolePain(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length < 5) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[4] = ((s as any).dick_length11 ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length < 6) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[5] = ((s as any).arousalVars ?? 0)?.['girth_range'];
  }
  if (Object.keys((s as any).ARGS ?? {}).length < 7) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[6] = ((s as any).silavag11 ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length < 8) {
    if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[7] = ((s as any).stim ?? 0)?.['time'];
  }
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['hole_size'] = qspUntranslated(s, "ARGS[1]", { location: "arousal_funcs" });
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['hole_slip'] = qspUntranslated(s, "ARGS[2]", { location: "arousal_funcs" });
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['pain'] = qspUntranslated(s, "ARGS[3]", { location: "arousal_funcs" });
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['length'] = qspUntranslated(s, "ARGS[4]", { location: "arousal_funcs" });
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['girth'] = qspUntranslated(s, "ARGS[5]", { location: "arousal_funcs" });
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['skill'] = 0;
  if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['stim_time'] = 0;
  if (!(s as any).arousalVars) (s as any).arousalVars = {}; (s as any).arousalVars['girth_diff'] = 0;
  if (!(s as any).arousalVars) (s as any).arousalVars = {}; (s as any).arousalVars['length_diff'] = 0;
  if (((s as any).temp_arousalVars ?? 0)?.['pain'] < ((s as any).arousalVars ?? 0)?.['max_sex_pain']  &&  ((s as any).temp_arousalVars ?? 0)?.['stim_time'] > 0) {
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['i'] = 0;
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['maxi'] = ((s as any).temp_arousalVars ?? 0)?.['stim_time'];
    // TODO-QSP: :stim_time_loop
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = 0;
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = 0;
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = (((s as any).temp_arousalVars ?? {})?.['length'] - ((s as any).temp_arousalVars ?? {})?.['hole_size']) * 1000 / 4;
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = (((s as any).temp_arousalVars ?? {})?.['girth'] - ((s as any).temp_arousalVars ?? {})?.['hole_size']) * 1000 / 2;
    if ((Math.floor(Math.random() * 3) + 0) < ((s as any).pain_coeff ?? 0)) {
      if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) + ((Math.floor(Math.random() * (((s as any).pain_coeff ?? 0) - ((s as any).pain_coeff ?? 0) / 2 + 1)) + (((s as any).pain_coeff ?? 0) / 2)) * 1000);
      if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) + ((Math.floor(Math.random() * (((s as any).pain_coeff ?? 0) - ((s as any).pain_coeff ?? 0) / 2 + 1)) + (((s as any).pain_coeff ?? 0) / 2)) * 1000);
    }
    if (((s as any).temp_arousalVars ?? 0)?.['pain'] > 0) {
      if ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] - ((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2 + 1)) + (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2)) < ((s as any).temp_arousalVars ?? 0)?.['pain']) {
        if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) + ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? {})?.['pain'] / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['hole_slip'] / 4) - ((s as any).temp_arousalVars ?? {})?.['pain'] / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['hole_slip'] / 2) + 1)) + (((s as any).temp_arousalVars ?? {})?.['pain'] / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['hole_slip'] / 2))) * 1000);
      }
      if ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] - ((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2 + 1)) + (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2)) < ((s as any).temp_arousalVars ?? 0)?.['pain']) {
        if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) + ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? {})?.['pain'] / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['hole_slip'] / 4) - ((s as any).temp_arousalVars ?? {})?.['pain'] / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['hole_slip'] / 2) + 1)) + (((s as any).temp_arousalVars ?? {})?.['pain'] / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['hole_slip'] / 2))) * 1000);
      }
    }
    if (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] > 0) {
      if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? {})?.['hole_slip'] * 500 - ((s as any).temp_arousalVars ?? {})?.['hole_slip'] * 250 + 1)) + (((s as any).temp_arousalVars ?? {})?.['hole_slip'] * 250)));
      if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) - ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? {})?.['hole_slip'] * 1000 - ((s as any).temp_arousalVars ?? {})?.['hole_slip'] * 500 + 1)) + (((s as any).temp_arousalVars ?? {})?.['hole_slip'] * 500)));
    } else {
      if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) + (Math.max(1, (Math.floor(Math.random() * (((s as any).temp_arousalVars ?? {})?.['ltdif'] / 4 - ((s as any).temp_arousalVars ?? {})?.['ltdif'] / 6 + 1)) + (((s as any).temp_arousalVars ?? {})?.['ltdif'] / 6))) / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['skill'] + 1));
      if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) + (Math.max(1, (Math.floor(Math.random() * (((s as any).temp_arousalVars ?? {})?.['grdif'] / 2 - ((s as any).temp_arousalVars ?? {})?.['grdif'] / 4 + 1)) + (((s as any).temp_arousalVars ?? {})?.['grdif'] / 4))) / Math.max(1, ((s as any).temp_arousalVars ?? {})?.['skill'] + 1));
    }
    if (((s as any).temp_arousalVars ?? 0)?.['skill'] > 0  &&  ((s as any).temp_arousalVars ?? 0)?.['ltdif'] > 0) {
      // TODO-QSP: temp_arousalVars['ltdif'] /= max(1, temp_arousalVars['skill'] + 1)
    }
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['ltdif'] = Math.max(0, ((s as any).temp_arousalVars ?? {})?.['ltdif'] / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_size'] / 6)));
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['grdif'] = Math.max(0, ((s as any).temp_arousalVars ?? {})?.['grdif'] / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_size'] / 6)));
    if (!(s as any).arousalVars) (s as any).arousalVars = {}; (s as any).arousalVars['length_diff'] = ((s as any).arousalVars['length_diff'] ?? 0) + (((s as any).temp_arousalVars ?? 0)?.['ltdif']);
    if (!(s as any).arousalVars) (s as any).arousalVars = {}; (s as any).arousalVars['girth_diff'] = ((s as any).arousalVars['girth_diff'] ?? 0) + (((s as any).temp_arousalVars ?? 0)?.['grdif']);
    if (!(s as any).temp_arousalVars) (s as any).temp_arousalVars = {}; (s as any).temp_arousalVars['i'] = ((s as any).temp_arousalVars['i'] ?? 0) + (1 + ((s as any).temp_arousalVars ?? {})?.['skill']);
    if (((s as any).temp_arousalVars ?? 0)?.['i'] < ((s as any).temp_arousalVars ?? 0)?.['maxi']) {
      // TODO-QSP: jump 'stim_time_loop'
    }
  }
  // TODO-QSP: arousalVars['length_diff'] /= 1000
  // TODO-QSP: arousalVars['girth_diff'] /= 1000
  // TODO-QSP: end
  scene.build();
}

function enterInVag(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).arousal_overcall ?? 0))) {
    if (((s as any).anal_slip ?? 0) < Math.max(1, ((s as any).vaginal_slip ?? 0) / 2)) {
      (s as any).anal_slip = Math.max(1, ((s as any).vaginal_slip ?? 0) / (Math.floor(Math.random() * 2) + 2));
      if (((s as any).cumloc ?? 0)[0] > 0) {
        (s as any).anal_slip = ((s as any).anal_slip ?? 0) + ((Math.floor(Math.random() * (((s as any).cumvol ?? 0)[0] / 10 - ((s as any).cumvol ?? 0)[0] / 15 + 1)) + (((s as any).cumvol ?? 0)[0] / 15)));
      }
    }
    // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_vag, vaginal_slip, pain['vaginal'], dick_length11, arousalV...
    if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = 80 - ((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff'] + 8 * ((s as any).silavag11 ?? 0);
    if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], ((s as any).dick_length11 ?? 0), ((s as any).pcs_vag ?? 0));
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 2  &&  ((s as any).sexcontra ?? 0) === 3) {
      // TODO-QSP: stim['act'] /= 2
    }
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 0) {
      // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'vaginal', 'stretch'
      if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['vaginal'] = qspUntranslated(s, "min(pain['vaginal'], arousalVars['max_sex_pain'])", { location: "arousal_funcs" });
      if ((Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).dick_length11 ?? 0) / Math.max(1, ((s as any).silavag11 ?? 0))) {
        qspCall(s, 'pain', '', qspUntranslated(s, "rand(0, arousalVars['length_diff'])", { location: "arousal_funcs" }), 'cervix', 'shock');
        if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['cervix'] = qspUntranslated(s, "min(pain['cervix'], arousalVars['max_sex_pain'])", { location: "arousal_funcs" });
      }
      if ((Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).arousalVars ?? 0)?.['girth_range'] / Math.max(1, ((s as any).silavag11 ?? 0))) {
        qspCall(s, 'pain', '', qspUntranslated(s, "rand(0, arousalVars['girth_diff'])", { location: "arousal_funcs" }), 'labia', 'stretch');
        if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['labia'] = qspUntranslated(s, "min(pain['labia'], arousalVars['max_sex_pain'])", { location: "arousal_funcs" });
      }
    }
    if (((s as any).pain_coeff ?? 0) > 0) {
      // TODO-QSP: gs 'pain', rand(0, pain_coeff) / 5, 'clitoris', 'hit'
    }
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).vgape ?? 0) + ((s as any).pcs_vag ?? 0) / 2) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    if (((s as any).pcs_vag ?? 0) < ((s as any).dick_length11 ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    }
    if (((s as any).pcs_vag ?? 0) < ((s as any).dick_length11 ?? 0) / 2) {
      qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
    // TODO-QSP: gs 'cum_manage', 'cum_decay', ((dick_length11 + arousalVars['girth_range']) / 2) * max(1, stim['time...
  }
  // TODO-QSP: end
  scene.build();
}

function enterInAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['buttslut'] === 1) {
    if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['mag'] = ((s as any).stim['mag'] ?? 0) + (1);
  } else {
    if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 2) {
      if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['mag'] = ((s as any).stim['mag'] ?? 0) + (3);
    }
  }
  if ((!((s as any).arousal_overcall ?? 0))) {
    if (((s as any).vaginal_slip ?? 0) < Math.max(1, ((s as any).anal_slip ?? 0) / 2)  &&  ((s as any).cumloc ?? 0)[3] > 0) {
      (s as any).vaginal_slip = ((s as any).vaginal_slip ?? 0) + ((Math.floor(Math.random() * (((s as any).cumvol ?? 0)[3] / 5 - ((s as any).cumvol ?? 0)[3] / 10 + 1)) + (((s as any).cumvol ?? 0)[3] / 10)));
    }
    // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_ass, anal_slip, pain['asshole'], dick_length11, arousalVars...
    if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = 80 - ((s as any).arousalVars ?? {})?.['girth_diff'] + ((s as any).arousalVars ?? {})?.['length_diff'] + 8 * ((s as any).silavag11 ?? 0);
    if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
      if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = ((s as any).stim['act'] ?? 0) + (10 + 5 * (((s as any).trait_vars ?? {})?.['buttslut'] - 1));
    }
    if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], ((s as any).dick_length11 ?? 0), ((s as any).pcs_ass ?? 0));
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 0) {
      // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'asshole', 'stretch'
      if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['asshole'] = qspUntranslated(s, "min(pain['asshole'], arousalVars['max_sex_pain'])", { location: "arousal_funcs" });
    }
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).agape ?? 0) + ((s as any).pcs_ass ?? 0) / 2) {
      (s as any).agape = ((s as any).agape ?? 0) + (1);
    }
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick_length11 ?? 0)) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    }
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick_length11 ?? 0) / 2) {
      qspCall(s, 'arousal_funcs', 'stretch', 'anal', 1);
    }
  }
  if (((s as any).locArgs?.[1] ?? 0) > 0  &&  ((s as any).cumvol ?? 0)[3] > (Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2))) {
    // TODO-QSP: gs 'cum_manage', 'cum_decay', ((dick_length11 + arousalVars['girth_range']) / 2) * max(1, stim['time...
  }
  // TODO-QSP: end
  scene.build();
}

function enterInThroat(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).arousal_overcall ?? 0))) {
    if (((s as any).anal_slip ?? 0) < Math.max(1, ((s as any).pcs_hydra ?? 0) / 20)) {
      (s as any).anal_slip = ((s as any).anal_slip ?? 0) + (Math.max(1, ((s as any).pcs_hydra ?? 0) / 20));
    }
    if (((s as any).vaginal_slip ?? 0) < Math.max(1, ((s as any).pcs_hydra ?? 0) / 20)) {
      (s as any).vaginal_slip = ((s as any).vaginal_slip ?? 0) + (Math.max(1, ((s as any).pcs_hydra ?? 0) / 20));
    }
    if (((s as any).pain_coeff ?? 0) > 0) {
      qspCall(s, 'pain', '', 0, 'mouth', 'stretch');
    }
    if (((s as any).pcs_lipbalm ?? 0) > 0) {
      (s as any).pcs_lipbalm = Math.max(0, ((s as any).pcs_lipbalm ?? 0) - Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
      if (((s as any).stim ?? 0)?.['rape']  ||  ((s as any).stim ?? 0)?.['hidden_rape']  ||  ((s as any).stim ?? 0)?.['rough']  ||  ((s as any).stim ?? 0)?.['gangbang']  ||  ((s as any).stim ?? 0)?.['hidden_gangbang']  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) >= 0) {
        (s as any).pcs_lipbalm = Math.max(0, ((s as any).pcs_lipbalm ?? 0) - Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
      }
    }
    if (((s as any).stim ?? 0)?.['deepthroat'] === 1) {
      // TODO-QSP: gs 'arousal_funcs', 'get_hole_pain', pcs_throat, pcs_hydra / 10, pain['throat'], dick_length11, arou...
      if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = 80 - ((s as any).arousalVars ?? {})?.['length_diff'] + ((s as any).arousalVars ?? {})?.['girth_diff'] + 8 * ((s as any).silavag11 ?? 0);
      if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], ((s as any).dick_length11 ?? 0), ((s as any).pcs_throat ?? 0));
      if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 0) {
        // TODO-QSP: gs 'pain', arousalVars['girth_diff'] + arousalVars['length_diff'], 'throat', 'stretch'
        if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['throat'] = qspUntranslated(s, "min(pain['throat'], arousalVars['max_sex_pain'])", { location: "arousal_funcs" });
        // TODO-QSP: gs 'pain', arousalVars['girth_diff'], 'jaw', 'stretch'
        if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['jaw'] = qspUntranslated(s, "min(pain['jaw'], arousalVars['max_sex_pain'])", { location: "arousal_funcs" });
      }
      if (((s as any).pcs_throat ?? 0) < ((s as any).dick_length11 ?? 0)) {
        qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
      }
      if (((s as any).pcs_throat ?? 0) < ((s as any).dick_length11 ?? 0) / 2) {
        qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
      }
    } else {
      if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', ((s as any).stim ?? 0)?.['act'], ((s as any).dick_length11 ?? 0), ((s as any).pcs_throat ?? 0));
    }
    if (((s as any).pcs_throat ?? 0) < ((s as any).dick_length11 ?? 0) / 3) {
      qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetVirginityStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] !== '') {
    // TODO-QSP: exit
  }
  if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['day_lost'] = ((s as any).daystart ?? 0);
  if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['age_lost'] = ((s as any).age ?? 0);
  if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['lost_cause'] = 'unknown';
  if (((s as any).arousalVars ?? 0)?.['self']  ||  ((s as any).locArgs?.[1] ?? 0) === 'birth') {
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['taker_ID'] = 'self';
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['virgin_taker'] = ((s as any).pcs_nickname ?? 0);
  } else {
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['taker_ID'] = ((s as any).npcID10 ?? 0);
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['virgin_taker'] = ((s as any).npcdesc10 ?? 0);
  }
  if ((String(((s as any).locArgs?.[1] ?? 0)).indexOf(String('fist'))) + 1) {
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_desc'] = 'fist';
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_size'] = 25;
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_width'] = 15;
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_girth'] = 'monstrous';
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'birth') {
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_desc'] = 'your child';
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_size'] = 25;
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_width'] = 15;
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_girth'] = 'monstrous';
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['lost_cause'] = 'birth';
    } else {
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_desc'] = ((s as any).dick_desc11 ?? 0);
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_size'] = ((s as any).dick_length11 ?? 0);
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_width'] = ((s as any).dick_width11 ?? 0);
      if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['cock_girth'] = ((s as any).dick_girth11 ?? 0);
    }
  }
  if (((s as any).day ?? 0) === ((s as any).birthday ?? 0)  &&  ((s as any).month ?? 0) === ((s as any).birthmonth ?? 0)) {
    if (!(s as any).virgin_stats) (s as any).virgin_stats = {}; (s as any).virgin_stats['birthday'] = 1;
  }
  // TODO-QSP: end
  scene.build();
}

function enterFeed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if ((!((s as any).succubusflag ?? 0))) {
    // TODO-QSP: exit
  }
  if (((s as any).arousalVars ?? 0)?.['no_feeding'] !== 0) {
    // TODO-QSP: exit
  }
  if (((s as any).arousalVars ?? 0)?.['self'] !== 0) {
    // TODO-QSP: exit
  }
  if ((!((s as any).npcGender10 ?? 0))) {
    // TODO-QSP: exit
  }
  if (!(s as any).arousal_npc_feed) (s as any).arousal_npc_feed = {}; (s as any).arousal_npc_feed[String((s as any).npcID10 ?? 0)] = ((s as any).arousal_npc_feed[String((s as any).npcID10 ?? 0)] ?? 0) + (((s as any).ARGS ?? 0)[1] * ((s as any).stim ?? {})?.['time']);
  if ((Array.isArray((s as any).arousal_npc_feed_ids) ? ((s as any).arousal_npc_feed_ids as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
    // TODO-QSP: $arousal_npc_feed_ids[] = $npcID10
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: copyarr('ARGS', $ARGS[1])
  qspCall(s, 'nichUtil', 'onArouse', ((s as any).locArgs?.[0] ?? 0));
  return;
  // TODO-QSP: end
  scene.build();
}

function enterCount(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal_funcs', 'count2', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).count ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1  ||  ((s as any).count ?? 0)['hidden_' + ((s as any).locArgs?.[1] ?? 0)] === 1) {
    if (!(s as any).count) (s as any).count = {}; (s as any).count['flashlite'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['flash'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['voyeur'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['voyeur_sex'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['erotic'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['erotic_nudity'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['hidden_flashlite'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['hidden_flash'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['hidden_voyeur'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['hidden_voyeur_sex'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['hidden_erotic'] = 0;
    if (!(s as any).count) (s as any).count = {}; (s as any).count['hidden_erotic_nudity'] = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterCount2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).count ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: count[$ARGS[1]] = 0
    // TODO-QSP: stat[$ARGS[1]] += 1
  }
  if (((s as any).count ?? 0)['hidden_' + ((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: count['hidden_' + $ARGS[1]] = 0
    // TODO-QSP: stat['hidden_' + $ARGS[1]] += 1
  }
  // TODO-QSP: end
  scene.build();
}

function enterChecks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stim ?? 0)[((s as any).locArgs?.[1] ?? 0)] === 1) {
    // TODO-QSP: stim[$ARGS[1]] = 0
    if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) >= 0) {
      qspCall(s, 'fetish', 'add_exp', ((s as any).locArgs?.[1] ?? 0), 1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAutoLube(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'anal'  &&  ((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).anal_slip ?? 0) < 8 + ((s as any).pain ?? 0)?.['asshole'] / 2 - ((s as any).pcs_ass ?? 0)) {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      (s as any).ar_anal_lube = 1;
      if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
      if (!(s as any).anslipVars) (s as any).anslipVars = {}; (s as any).anslipVars['lube'] = 8;
      if (!(s as any).count) (s as any).count = {}; (s as any).count['anal_finger'] = 1;
      if (!(s as any).count) (s as any).count = {}; (s as any).count['vaginal_finger'] = 1;
      if (((s as any).locArgs?.[2] ?? 0) !== 'custom') {
        scene.text('You rub some lube in and around your anus.');
      } else {
        if (((s as any).lube_txt ?? 0) !== '') {
          // TODO-QSP: $lube_txt
        }
      }
      if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['mag'] = qspFunc(s, 'arousal_funcs', 'get_base_stimmag');
      if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['act'] = 40;
      if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['mag'] = ((s as any).temp_stim['mag'] ?? 0) + (1);
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['act'] = ((s as any).temp_stim['act'] ?? 0) + (20 * ((s as any).trait_vars ?? {})?.['buttslut']);
      }
      if ((Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2)) < ((s as any).cumvol ?? 0)[3]) {
        qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 4) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
      }
      if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['mag'] = qspUntranslated(s, "max(1, min(temp_stim['mag'], 9))", { location: "arousal_funcs" });
      if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['total'] = qspFunc(s, 'arousal_funcs', 'calc_stimtotal', ((s as any).temp_stim ?? 0)?.['mag'], ((s as any).temp_stim ?? 0)?.['act']);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).temp_stim ?? 0)?.['total']);
      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).temp_stim ?? 0)?.['total']);
      if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['event'] = ((s as any).stim['event'] ?? 0) + (((s as any).temp_stim ?? 0)?.['total']);
    } else {
      if (((s as any).locArgs?.[2] ?? 0) !== 'custom'  ||  (((s as any).locArgs?.[2] ?? 0) === 'custom'  &&  ((s as any).lube_txt ?? 0) !== '')) {
        scene.text('You do not have any lube left so cannot use it during this sex act.');
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'vag'  &&  ((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).vaginal_slip ?? 0) < 8 + ((s as any).pain ?? 0)?.['vaginal'] / 2 - ((s as any).pcs_vag ?? 0)) {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        (s as any).ar_vag_lube = 1;
        if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
        if (!(s as any).vagslipVars) (s as any).vagslipVars = {}; (s as any).vagslipVars['lube'] = 8;
        if (((s as any).locArgs?.[2] ?? 0) !== 'custom') {
          scene.text('You rub some lube in and around your vagina.');
        } else {
          if (((s as any).lube_txt ?? 0) !== '') {
            // TODO-QSP: $lube_txt
          }
        }
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['mag'] = qspFunc(s, 'arousal_funcs', 'get_base_stimmag');
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['mag'] = ((s as any).temp_stim['mag'] ?? 0) + (1);
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['act'] = 80;
        if ((Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
          qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * 4) + 2) * Math.max(1, ((s as any).stim ?? {})?.['time'] / 5));
        }
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['mag'] = qspUntranslated(s, "max(1, min(temp_stim['mag'], 9))", { location: "arousal_funcs" });
        if (!(s as any).temp_stim) (s as any).temp_stim = {}; (s as any).temp_stim['total'] = qspFunc(s, 'arousal_funcs', 'calc_stimtotal', ((s as any).temp_stim ?? 0)?.['mag'], ((s as any).stim ?? 0)?.['act']);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (((s as any).temp_stim ?? 0)?.['total']);
        (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + (((s as any).temp_stim ?? 0)?.['total']);
        if (!(s as any).stim) (s as any).stim = {}; (s as any).stim['event'] = ((s as any).stim['event'] ?? 0) + (((s as any).temp_stim ?? 0)?.['total']);
      } else {
        if (((s as any).locArgs?.[2] ?? 0) !== 'custom'  ||  (((s as any).locArgs?.[2] ?? 0) === 'custom'  &&  ((s as any).lube_txt ?? 0) !== '')) {
          scene.text('You do not have any lube left so cannot use it during this sex act.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_base_stimmag':
      enterGetBaseStimmag(s, scene);
      break;
    case 'calc_stimtotal':
      enterCalcStimtotal(s, scene);
      break;
    case 'stretch':
      enterStretch(s, scene);
      break;
    case 'get_hole_pain':
      enterGetHolePain(s, scene);
      break;
    case 'in_vag':
      enterInVag(s, scene);
      break;
    case 'in_anal':
      enterInAnal(s, scene);
      break;
    case 'in_throat':
      enterInThroat(s, scene);
      break;
    case 'set_virginity_stats':
      enterSetVirginityStats(s, scene);
      break;
    case 'feed':
      enterFeed(s, scene);
      break;
    case 'check_events':
      enterCheckEvents(s, scene);
      break;
    case 'count':
      enterCount(s, scene);
      break;
    case 'count2':
      enterCount2(s, scene);
      break;
    case 'checks':
      enterChecks(s, scene);
      break;
    case 'auto_lube':
      enterAutoLube(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const arousal_funcs: LocationDef = {
  name: 'arousal_funcs',
  title: 'You rub some lube in and around your anus.',
  region: 'other',
  enter: enter,
};
