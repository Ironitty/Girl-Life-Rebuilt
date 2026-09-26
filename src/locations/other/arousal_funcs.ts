import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetBaseStimmag(s: GameState, scene: SceneBuilder): void {
  (s as any).result = 1 + (Math.floor(Math.random() * 3) + 0) + (Math.floor(Math.random() * 4) + 0) + (Math.floor(Math.random() * 4) + 0);
  scene.build();
}

function enterCalcStimtotal(s: GameState, scene: SceneBuilder): void {
  ((s as any).tempStim = (s as any).tempStim ?? {})['mag'] = Math.max(1, ((s as any).locArgs?.[1] ?? 0));
  ((s as any).tempStim = (s as any).tempStim ?? {})['act'] = Math.max(1, ((s as any).locArgs?.[2] ?? 0));
  ((s as any).tempStim = (s as any).tempStim ?? {})['kink'] = Math.max(80, ((s as any).locArgs?.[3] ?? 0));
  ((s as any).tempStim = (s as any).tempStim ?? {})['pref'] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).tempStim = (s as any).tempStim ?? {})['time'] = Math.max(1, ((s as any).locArgs?.[5] ?? 0));
  (s as any).result = ((((s as any).tempStim ?? {})?.['mag'] ?? 0) * (((s as any).tempStim ?? {})?.['act'] ?? 0) * (((s as any).tempStim ?? {})?.['kink'] ?? 0) / 100 + (((s as any).tempStim ?? {})?.['pref'] ?? 0)) * (((s as any).tempStim ?? {})?.['time'] ?? 0) / 120;
  (s as any).tempStim = undefined;
  scene.build();
}

function enterStretch(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_amount = ((String((s as any).locArgs?.[2] ?? '') === 0) ? (1) : (((s as any).locArgs?.[2] ?? 0)));
  if (String((s as any).locArgs?.[1] ?? '') === 'vaginal') {
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (((s as any).temp_amount ?? 0));
    }
    if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
      (s as any).pcs_vag = ((s as any).pcs_vag ?? 0) + (((s as any).temp_amount ?? 0));
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'anal') {
      if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (((s as any).temp_amount ?? 0));
      }
      if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
        (s as any).pcs_ass = ((s as any).pcs_ass ?? 0) + (((s as any).temp_amount ?? 0));
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'oral') {
        if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 0  ||  (!(Math.floor(Math.random() * 4) + 0))) {
          (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (((s as any).temp_amount ?? 0));
        }
        if (((s as any).trait_vars ?? 0)?.['elasticity'] >= 1  &&  (!(Math.floor(Math.random() * 3) + 0))) {
          (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + (((s as any).temp_amount ?? 0));
        }
      }
    }
  }
  (s as any).temp_amount = undefined;
  return;
  scene.build();
}

function enterGetHolePain(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).ARGS ?? {}).length < 5) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[4] = ((s as any).dick_length11 ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length < 6) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[5] = (((s as any).arousalVars ?? 0)?.['girth_range']);
  }
  if (Object.keys((s as any).ARGS ?? {}).length < 7) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[6] = ((s as any).silavag11 ?? 0);
  }
  if (Object.keys((s as any).ARGS ?? {}).length < 8) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[7] = (((s as any).stim ?? 0)?.['time']);
  }
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['hole_size'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['hole_slip'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['pain'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['length'] = ((s as any).locArgs?.[4] ?? 0);
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['girth'] = ((s as any).locArgs?.[5] ?? 0);
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['skill'] = Math.max(0, Math.min(((s as any).locArgs?.[6] ?? 0), 2));
  ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['stim_time'] = Math.max(1, ((s as any).locArgs?.[7] ?? 0));
  ((s as any).arousalVars = (s as any).arousalVars ?? {})['girth_diff'] = 0;
  ((s as any).arousalVars = (s as any).arousalVars ?? {})['length_diff'] = 0;
  if (((s as any).temp_arousalVars ?? 0)?.['pain'] < ((s as any).arousalVars ?? 0)?.['max_sex_pain']  &&  ((s as any).temp_arousalVars ?? 0)?.['stim_time'] > 0) {
    ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['i'] = 0;
    ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['maxi'] = (((s as any).temp_arousalVars ?? 0)?.['stim_time']);
    do {
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = 0;
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = 0;
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = ((((s as any).temp_arousalVars ?? {})?.['length'] ?? 0) - (((s as any).temp_arousalVars ?? {})?.['hole_size'] ?? 0)) * 1000 / 4;
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = ((((s as any).temp_arousalVars ?? {})?.['girth'] ?? 0) - (((s as any).temp_arousalVars ?? {})?.['hole_size'] ?? 0)) * 1000 / 2;
      if ((Math.floor(Math.random() * 3) + 0) < ((s as any).pain_coeff ?? 0)) {
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) + ((Math.floor(Math.random() * (((s as any).pain_coeff ?? 0) - ((s as any).pain_coeff ?? 0) / 2 + 1)) + (((s as any).pain_coeff ?? 0) / 2)));
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) + ((Math.floor(Math.random() * (((s as any).pain_coeff ?? 0) - ((s as any).pain_coeff ?? 0) / 2 + 1)) + (((s as any).pain_coeff ?? 0) / 2)));
      }
      if (((s as any).temp_arousalVars ?? 0)?.['pain'] > 0) {
        if ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] - ((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2 + 1)) + (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2)) < ((s as any).temp_arousalVars ?? 0)?.['pain']) {
          ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) + ((Math.floor(Math.random() * ((((s as any).temp_arousalVars ?? {})?.['pain'] ?? 0) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) / 4) - (((s as any).temp_arousalVars ?? {})?.['pain'] ?? 0) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) / 2) + 1)) + ((((s as any).temp_arousalVars ?? {})?.['pain'] ?? 0) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) / 2))));
        }
        if ((Math.floor(Math.random() * (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] - ((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2 + 1)) + (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] / 2)) < ((s as any).temp_arousalVars ?? 0)?.['pain']) {
          ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) + ((Math.floor(Math.random() * ((((s as any).temp_arousalVars ?? {})?.['pain'] ?? 0) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) / 4) - (((s as any).temp_arousalVars ?? {})?.['pain'] ?? 0) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) / 2) + 1)) + ((((s as any).temp_arousalVars ?? {})?.['pain'] ?? 0) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) / 2))));
        }
      }
      if (((s as any).temp_arousalVars ?? 0)?.['hole_slip'] > 0) {
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) - ((Math.floor(Math.random() * ((((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) * 500 - (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) * 250 + 1)) + ((((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) * 250)));
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) - ((Math.floor(Math.random() * ((((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) * 1000 - (((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) * 500 + 1)) + ((((s as any).temp_arousalVars ?? {})?.['hole_slip'] ?? 0) * 500)));
      } else {
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) + (Math.max(1, (Math.floor(Math.random() * ((((s as any).temp_arousalVars ?? {})?.['ltdif'] ?? 0) / 4 - (((s as any).temp_arousalVars ?? {})?.['ltdif'] ?? 0) / 6 + 1)) + ((((s as any).temp_arousalVars ?? {})?.['ltdif'] ?? 0) / 6))) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['skill'] ?? 0) + 1));
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = ((s as any).temp_arousalVars['grdif'] ?? 0) + (Math.max(1, (Math.floor(Math.random() * ((((s as any).temp_arousalVars ?? {})?.['grdif'] ?? 0) / 2 - (((s as any).temp_arousalVars ?? {})?.['grdif'] ?? 0) / 4 + 1)) + ((((s as any).temp_arousalVars ?? {})?.['grdif'] ?? 0) / 4))) / Math.max(1, (((s as any).temp_arousalVars ?? {})?.['skill'] ?? 0) + 1));
      }
      if (((s as any).temp_arousalVars ?? 0)?.['skill'] > 0  &&  ((s as any).temp_arousalVars ?? 0)?.['ltdif'] > 0) {
        ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = ((s as any).temp_arousalVars['ltdif'] ?? 0) / (Math.max(1, (((s as any).temp_arousalVars ?? {})?.['skill'] ?? 0) + 1));
      }
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['ltdif'] = Math.max(0, (((s as any).temp_arousalVars ?? {})?.['ltdif'] ?? 0) / Math.max(1, ((((s as any).temp_arousalVars ?? {})?.['hole_size'] ?? 0) / 6)));
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['grdif'] = Math.max(0, (((s as any).temp_arousalVars ?? {})?.['grdif'] ?? 0) / Math.max(1, ((((s as any).temp_arousalVars ?? {})?.['hole_size'] ?? 0) / 6)));
      ((s as any).arousalVars = (s as any).arousalVars ?? {})['length_diff'] = ((s as any).arousalVars['length_diff'] ?? 0) + ((((s as any).temp_arousalVars ?? 0)?.['ltdif']));
      ((s as any).arousalVars = (s as any).arousalVars ?? {})['girth_diff'] = ((s as any).arousalVars['girth_diff'] ?? 0) + ((((s as any).temp_arousalVars ?? 0)?.['grdif']));
      ((s as any).temp_arousalVars = (s as any).temp_arousalVars ?? {})['i'] = ((s as any).temp_arousalVars['i'] ?? 0) + (1 + (((s as any).temp_arousalVars ?? {})?.['skill'] ?? 0));
    } while (((s as any).temp_arousalVars ?? 0)?.['i'] < ((s as any).temp_arousalVars ?? 0)?.['maxi']);
  }
  ((s as any).arousalVars = (s as any).arousalVars ?? {})['length_diff'] = ((s as any).arousalVars['length_diff'] ?? 0) / (1000);
  ((s as any).arousalVars = (s as any).arousalVars ?? {})['girth_diff'] = ((s as any).arousalVars['girth_diff'] ?? 0) / (1000);
  (s as any).temp_arousalVars = undefined;
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).pcs_vag ?? 0), ((s as any).vaginal_slip ?? 0), (((s as any).pain ?? 0)?.['vaginal']), ((s as any).dick_length11 ?? 0), (((s as any).arousalVars ?? 0)?.['girth_range']), ((s as any).silavag11 ?? 0), Math.max(1, (((s as any).stim ?? 0)?.['time']))]; enterGetHolePain(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).stim = (s as any).stim ?? {})['act'] = 80 - (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0) + 8 * ((s as any).silavag11 ?? 0);
    ((s as any).stim = (s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', (((s as any).stim ?? 0)?.['act']), ((s as any).dick_length11 ?? 0), ((s as any).pcs_vag ?? 0));
    if (((s as any).trait_vars ?? 0)?.['creampie_fetish'] === 2  &&  ((s as any).sexcontra ?? 0) === 3) {
      ((s as any).stim = (s as any).stim ?? {})['act'] = ((s as any).stim['act'] ?? 0) / (2);
    }
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 0) {
      qspCall(s, 'pain', '', (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0), 'vaginal', 'stretch');
      ((s as any).pain = (s as any).pain ?? {})['vaginal'] = Math.min((((s as any).pain ?? 0)?.['vaginal']), (((s as any).arousalVars ?? 0)?.['max_sex_pain']));
      if ((Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).dick_length11 ?? 0) / Math.max(1, ((s as any).silavag11 ?? 0))) {
        qspCall(s, 'pain', '', (Math.floor(Math.random() * ((((s as any).arousalVars ?? 0)?.['length_diff']) - 0 + 1)) + (0)), 'cervix', 'shock');
        ((s as any).pain = (s as any).pain ?? {})['cervix'] = Math.min((((s as any).pain ?? 0)?.['cervix']), (((s as any).arousalVars ?? 0)?.['max_sex_pain']));
      }
      if ((Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).arousalVars ?? 0)?.['girth_range'] / Math.max(1, ((s as any).silavag11 ?? 0))) {
        qspCall(s, 'pain', '', (Math.floor(Math.random() * ((((s as any).arousalVars ?? 0)?.['girth_diff']) - 0 + 1)) + (0)), 'labia', 'stretch');
        ((s as any).pain = (s as any).pain ?? {})['labia'] = Math.min((((s as any).pain ?? 0)?.['labia']), (((s as any).arousalVars ?? 0)?.['max_sex_pain']));
      }
    }
    if (((s as any).pain_coeff ?? 0) > 0) {
      qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).pain_coeff ?? 0) - 0 + 1)) + (0)), 'clitoris', 'hit');
    }
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).vgape ?? 0) + ((s as any).pcs_vag ?? 0) / 2) {
      (s as any).vgape = ((s as any).vgape ?? 0) + (1);
    }
    if (((s as any).pcs_vag ?? 0) < ((s as any).dick_length11 ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vaginal']; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).pcs_vag ?? 0) < ((s as any).dick_length11 ?? 0) / 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vaginal']; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') > 0  &&  (Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
    qspCall(s, 'cum_manage', 'cum_decay', ((((s as any).dick_length11 ?? 0) + (((s as any).arousalVars ?? {})?.['girth_range'] ?? 0)) / 2) * Math.max(1, (((s as any).stim ?? {})?.['time'] ?? 0) / 5));
  }
  scene.build();
}

function enterInAnal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['buttslut'] === 1) {
    ((s as any).stim = (s as any).stim ?? {})['mag'] = ((s as any).stim['mag'] ?? 0) + (1);
  } else {
    if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 2) {
      ((s as any).stim = (s as any).stim ?? {})['mag'] = ((s as any).stim['mag'] ?? 0) + (3);
    }
  }
  if ((!((s as any).arousal_overcall ?? 0))) {
    if (((s as any).vaginal_slip ?? 0) < Math.max(1, ((s as any).anal_slip ?? 0) / 2)  &&  ((s as any).cumloc ?? 0)[3] > 0) {
      (s as any).vaginal_slip = ((s as any).vaginal_slip ?? 0) + ((Math.floor(Math.random() * (((s as any).cumvol ?? 0)[3] / 5 - ((s as any).cumvol ?? 0)[3] / 10 + 1)) + (((s as any).cumvol ?? 0)[3] / 10)));
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).pcs_ass ?? 0), ((s as any).anal_slip ?? 0), (((s as any).pain ?? 0)?.['asshole']), ((s as any).dick_length11 ?? 0), (((s as any).arousalVars ?? 0)?.['girth_range']), ((s as any).silavag11 ?? 0), Math.max(1, (((s as any).stim ?? 0)?.['time']))]; enterGetHolePain(s, scene); (s as any).locArgs = __savedLocArgs; }
    ((s as any).stim = (s as any).stim ?? {})['act'] = 80 - (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0) + 8 * ((s as any).silavag11 ?? 0);
    if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
      ((s as any).stim = (s as any).stim ?? {})['act'] = ((s as any).stim['act'] ?? 0) + (10 + 5 * ((((s as any).trait_vars ?? {})?.['buttslut'] ?? 0) - 1));
    }
    ((s as any).stim = (s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', (((s as any).stim ?? 0)?.['act']), ((s as any).dick_length11 ?? 0), ((s as any).pcs_ass ?? 0));
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 0) {
      qspCall(s, 'pain', '', (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0), 'asshole', 'stretch');
      ((s as any).pain = (s as any).pain ?? {})['asshole'] = Math.min((((s as any).pain ?? 0)?.['asshole']), (((s as any).arousalVars ?? 0)?.['max_sex_pain']));
    }
    if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 2 * ((s as any).agape ?? 0) + ((s as any).pcs_ass ?? 0) / 2) {
      (s as any).agape = ((s as any).agape ?? 0) + (1);
    }
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick_length11 ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'anal', 1]; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).pcs_ass ?? 0) < ((s as any).dick_length11 ?? 0) / 2) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'anal', 1]; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  if (String((s as any).locArgs?.[1] ?? '') > 0  &&  ((s as any).cumvol ?? 0)[3] > (Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2))) {
    qspCall(s, 'cum_manage', 'cum_decay', ((((s as any).dick_length11 ?? 0) + (((s as any).arousalVars ?? {})?.['girth_range'] ?? 0)) / 2) * Math.max(1, (((s as any).stim ?? {})?.['time'] ?? 0) / 5));
  }
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
      qspCall(s, 'pain', '', (Math.floor(Math.random() * (((s as any).pain_coeff ?? 0) - 0 + 1)) + (0)), 'mouth', 'stretch');
    }
    if (((s as any).pcs_lipbalm ?? 0) > 0) {
      (s as any).pcs_lipbalm = Math.max(0, ((s as any).pcs_lipbalm ?? 0) - Math.max(1, (((s as any).stim ?? {})?.['time'] ?? 0) / 5));
      if (((s as any).stim ?? 0)?.['rape']  ||  ((s as any).stim ?? 0)?.['hidden_rape']  ||  ((s as any).stim ?? 0)?.['rough']  ||  ((s as any).stim ?? 0)?.['gangbang']  ||  ((s as any).stim ?? 0)?.['hidden_gangbang']  ||  (Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('beast') : -1) >= 0) {
        (s as any).pcs_lipbalm = Math.max(0, ((s as any).pcs_lipbalm ?? 0) - Math.max(1, (((s as any).stim ?? {})?.['time'] ?? 0) / 5));
      }
    }
    if (((s as any).stim ?? 0)?.['deepthroat'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).pcs_throat ?? 0), ((s as any).pcs_hydra ?? 0) / 10, (((s as any).pain ?? 0)?.['throat']), ((s as any).dick_length11 ?? 0), (((s as any).arousalVars ?? 0)?.['girth_range']), ((s as any).silavag11 ?? 0), Math.max(1, (((s as any).stim ?? 0)?.['time']))]; enterGetHolePain(s, scene); (s as any).locArgs = __savedLocArgs; }
      ((s as any).stim = (s as any).stim ?? {})['act'] = 80 - (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + 8 * ((s as any).silavag11 ?? 0);
      ((s as any).stim = (s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', (((s as any).stim ?? 0)?.['act']), ((s as any).dick_length11 ?? 0), ((s as any).pcs_throat ?? 0));
      if (((s as any).arousalVars ?? 0)?.['girth_diff'] + ((s as any).arousalVars ?? 0)?.['length_diff'] > 0) {
        qspCall(s, 'pain', '', (((s as any).arousalVars ?? {})?.['girth_diff'] ?? 0) + (((s as any).arousalVars ?? {})?.['length_diff'] ?? 0), 'throat', 'stretch');
        ((s as any).pain = (s as any).pain ?? {})['throat'] = Math.min((((s as any).pain ?? 0)?.['throat']), (((s as any).arousalVars ?? 0)?.['max_sex_pain']));
        qspCall(s, 'pain', '', (((s as any).arousalVars ?? 0)?.['girth_diff']), 'jaw', 'stretch');
        ((s as any).pain = (s as any).pain ?? {})['jaw'] = Math.min((((s as any).pain ?? 0)?.['jaw']), (((s as any).arousalVars ?? 0)?.['max_sex_pain']));
      }
      if (((s as any).pcs_throat ?? 0) < ((s as any).dick_length11 ?? 0)) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'oral', 1]; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
      if (((s as any).pcs_throat ?? 0) < ((s as any).dick_length11 ?? 0) / 2) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'oral', 1]; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      ((s as any).stim = (s as any).stim ?? {})['act'] = qspFunc(s, 'traits', 'sizequeen', 'calc_effect', (((s as any).stim ?? 0)?.['act']), ((s as any).dick_length11 ?? 0), ((s as any).pcs_throat ?? 0));
    }
    if (((s as any).pcs_throat ?? 0) < ((s as any).dick_length11 ?? 0) / 3) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'oral', 1]; enterStretch(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  scene.build();
}

function enterSetVirginityStats(s: GameState, scene: SceneBuilder): void {
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] !== '') {
    return;
  }
  ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['day_lost'] = ((s as any).daystart ?? 0);
  ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['age_lost'] = ((s as any).age ?? 0);
  ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'unknown';
  if (((s as any).arousalVars ?? 0)?.['self']  ||  String((s as any).locArgs?.[1] ?? '') === 'birth') {
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['taker_ID'] = 'self';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['virgin_taker'] = ((s as any).pcs_nickname ?? 0);
  } else {
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['taker_ID'] = ((s as any).npcID10 ?? 0);
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['virgin_taker'] = ((s as any).npcdesc10 ?? 0);
  }
  if (((String(((s as any).locArgs?.[1] ?? 0)).indexOf(String('fist'))) + 1)) {
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'fist';
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = 25;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_width'] = 15;
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_girth'] = 'monstrous';
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'birth') {
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = 'your child';
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = 25;
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_width'] = 15;
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_girth'] = 'monstrous';
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'birth';
    } else {
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_desc'] = ((s as any).dick_desc11 ?? 0);
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_size'] = ((s as any).dick_length11 ?? 0);
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_width'] = ((s as any).dick_width11 ?? 0);
      ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['cock_girth'] = ((s as any).dick_girth11 ?? 0);
    }
  }
  if (((s as any).day ?? 0) === ((s as any).birthday ?? 0)  &&  ((s as any).month ?? 0) === ((s as any).birthmonth ?? 0)) {
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['birthday'] = 1;
  }
  scene.build();
}

function enterFeed(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') <= 0) {
    return;
  }
  if ((!((s as any).succubusflag ?? 0))) {
    return;
  }
  if (((s as any).arousalVars ?? 0)?.['no_feeding'] !== 0) {
    return;
  }
  if (((s as any).arousalVars ?? 0)?.['self'] !== 0) {
    return;
  }
  if ((!((s as any).npcGender10 ?? 0))) {
    return;
  }
  ((s as any).arousal_npc_feed = (s as any).arousal_npc_feed ?? {})[String((s as any).npcID10 ?? 0)] = ((s as any).arousal_npc_feed[String((s as any).npcID10 ?? 0)] ?? 0) + (((s as any).locArgs?.[1] ?? 0) * (((s as any).stim ?? {})?.['time'] ?? 0));
  if ((Array.isArray((s as any).arousal_npc_feed_ids) ? ((s as any).arousal_npc_feed_ids as any[]).indexOf(((s as any).npcID10 ?? 0)) : -1) < 0) {
    (s as any).arousal_npc_feed_ids = [...((s as any).arousal_npc_feed_ids ?? []), ((s as any).npcID10 ?? 0)];
  }
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nichUtil', 'onArouse', ((s as any).locArgs?.[0] ?? 0));
  return;
  scene.build();
}

function enterCount(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterCount2(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).count ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1  ||  ((s as any).count ?? 0)['hidden_' + String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).count = (s as any).count ?? {})['flashlite'] = 0;
    ((s as any).count = (s as any).count ?? {})['flash'] = 0;
    ((s as any).count = (s as any).count ?? {})['voyeur'] = 0;
    ((s as any).count = (s as any).count ?? {})['voyeur_sex'] = 0;
    ((s as any).count = (s as any).count ?? {})['erotic'] = 0;
    ((s as any).count = (s as any).count ?? {})['erotic_nudity'] = 0;
    ((s as any).count = (s as any).count ?? {})['hidden_flashlite'] = 0;
    ((s as any).count = (s as any).count ?? {})['hidden_flash'] = 0;
    ((s as any).count = (s as any).count ?? {})['hidden_voyeur'] = 0;
    ((s as any).count = (s as any).count ?? {})['hidden_voyeur_sex'] = 0;
    ((s as any).count = (s as any).count ?? {})['hidden_erotic'] = 0;
    ((s as any).count = (s as any).count ?? {})['hidden_erotic_nudity'] = 0;
  }
  scene.build();
}

function enterCount2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).count ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).count = (s as any).count ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).stat = (s as any).stat ?? {})[((s as any).locArgs?.[1] ?? 0)] = ((s as any).stat[((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  }
  if (((s as any).count ?? 0)['hidden_' + String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).count = (s as any).count ?? {})['hidden_' + ((s as any).locArgs?.[1] ?? 0)] = 0;
    ((s as any).stat = (s as any).stat ?? {})['hidden_' + ((s as any).locArgs?.[1] ?? 0)] = ((s as any).stat['hidden_' + ((s as any).locArgs?.[1] ?? 0)] ?? 0) + (1);
  }
  scene.build();
}

function enterChecks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stim ?? 0)[String((s as any).locArgs?.[1] ?? '')] === 1) {
    ((s as any).stim = (s as any).stim ?? {})[((s as any).locArgs?.[1] ?? 0)] = 0;
    if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(String((s as any).locArgs?.[1] ?? '')) : -1) >= 0) {
      qspCall(s, 'fetish', 'add_exp', ((s as any).locArgs?.[1] ?? 0), 1);
    }
  }
  scene.build();
}

function enterAutoLube(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'anal'  &&  ((s as any).auto_anal_lube ?? 0) === 1  &&  ((s as any).anal_slip ?? 0) < 8 + ((s as any).pain ?? 0)?.['asshole'] / 2 - ((s as any).pcs_ass ?? 0)) {
    if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      (s as any).ar_anal_lube = 1;
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
      ((s as any).anslipVars = (s as any).anslipVars ?? {})['lube'] = 8;
      ((s as any).count = (s as any).count ?? {})['anal_finger'] = 1;
      ((s as any).count = (s as any).count ?? {})['vaginal_finger'] = 1;
      if (String((s as any).locArgs?.[2] ?? '') !== 'custom') {
        scene.text('You rub some lube in and around your anus.');
      } else {
        if (((s as any).lube_txt ?? 0) !== '') {
          scene.text(String((s as any).lube_txt ?? ''));
        }
      }
      ((s as any).temp_stim = (s as any).temp_stim ?? {})['mag'] = qspFunc(s, 'arousal_funcs', 'get_base_stimmag');
      ((s as any).temp_stim = (s as any).temp_stim ?? {})['act'] = 40;
      if (((s as any).trait_vars ?? 0)?.['buttslut'] >= 1) {
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['mag'] = ((s as any).temp_stim['mag'] ?? 0) + (1);
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['act'] = ((s as any).temp_stim['act'] ?? 0) + (20 * (((s as any).trait_vars ?? {})?.['buttslut'] ?? 0));
      }
      if ((Math.floor(Math.random() * (((s as any).pcs_ass ?? 0) - ((s as any).pcs_ass ?? 0) / 2 + 1)) + (((s as any).pcs_ass ?? 0) / 2)) < ((s as any).cumvol ?? 0)[3]) {
        qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * (5 - 2 + 1)) + (2)));
      }
      ((s as any).temp_stim = (s as any).temp_stim ?? {})['mag'] = Math.max(1, Math.min((((s as any).temp_stim ?? 0)?.['mag']), 9));
      ((s as any).temp_stim = (s as any).temp_stim ?? {})['total'] = qspFunc(s, 'arousal_funcs', 'calc_stimtotal', (((s as any).temp_stim ?? 0)?.['mag']), (((s as any).temp_stim ?? 0)?.['act']));
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((((s as any).temp_stim ?? 0)?.['total']));
      (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + ((((s as any).temp_stim ?? 0)?.['total']));
      ((s as any).stim = (s as any).stim ?? {})['event'] = ((s as any).stim['event'] ?? 0) + ((((s as any).temp_stim ?? 0)?.['total']));
      (s as any).temp_stim = undefined;
    } else {
      if (String((s as any).locArgs?.[2] ?? '') !== 'custom'  ||  (String((s as any).locArgs?.[2] ?? '') === 'custom'  &&  ((s as any).lube_txt ?? 0) !== '')) {
        scene.text('You do not have any lube left so cannot use it during this sex act.');
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'vag'  &&  ((s as any).auto_vag_lube ?? 0) === 1  &&  ((s as any).vaginal_slip ?? 0) < 8 + ((s as any).pain ?? 0)?.['vaginal'] / 2 - ((s as any).pcs_vag ?? 0)) {
      if (((s as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
        (s as any).minut = ((s as any).minut ?? 0) + 1;
        (s as any).ar_vag_lube = 1;
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) - (1);
        ((s as any).vagslipVars = (s as any).vagslipVars ?? {})['lube'] = 8;
        if (String((s as any).locArgs?.[2] ?? '') !== 'custom') {
          scene.text('You rub some lube in and around your vagina.');
        } else {
          if (((s as any).lube_txt ?? 0) !== '') {
            scene.text(String((s as any).lube_txt ?? ''));
          }
        }
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['mag'] = qspFunc(s, 'arousal_funcs', 'get_base_stimmag');
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['mag'] = ((s as any).temp_stim['mag'] ?? 0) + (1);
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['act'] = 80;
        if ((Math.floor(Math.random() * (((s as any).pcs_vag ?? 0) - ((s as any).pcs_vag ?? 0) / 2 + 1)) + (((s as any).pcs_vag ?? 0) / 2)) < ((s as any).cumvol ?? 0)[0]) {
          qspCall(s, 'cum_manage', 'cum_decay', (Math.floor(Math.random() * (5 - 2 + 1)) + (2)));
        }
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['mag'] = Math.max(1, Math.min((((s as any).temp_stim ?? 0)?.['mag']), 9));
        ((s as any).temp_stim = (s as any).temp_stim ?? {})['total'] = qspFunc(s, 'arousal_funcs', 'calc_stimtotal', (((s as any).temp_stim ?? 0)?.['mag']), (((s as any).stim ?? 0)?.['act']));
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((((s as any).temp_stim ?? 0)?.['total']));
        (s as any).orgasm_buildup = ((s as any).orgasm_buildup ?? 0) + ((((s as any).temp_stim ?? 0)?.['total']));
        ((s as any).stim = (s as any).stim ?? {})['event'] = ((s as any).stim['event'] ?? 0) + ((((s as any).temp_stim ?? 0)?.['total']));
        (s as any).temp_stim = undefined;
      } else {
        if (String((s as any).locArgs?.[2] ?? '') !== 'custom'  ||  (String((s as any).locArgs?.[2] ?? '') === 'custom'  &&  ((s as any).lube_txt ?? 0) !== '')) {
          scene.text('You do not have any lube left so cannot use it during this sex act.');
        }
      }
    }
  }
  (s as any).lube_txt = undefined;
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
