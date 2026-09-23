import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterInhib(s: GameState, scene: SceneBuilder): void {
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (((s as any).locArgs?.[1] ?? 0));
  // TODO-QSP: gs 'exp_notification', 'track_exp', 'inhib', ARGS[1]
  return;
  // TODO-QSP: end
  if (((String(';vball_block;vball_rec;vball_serve;vball_set;vball_spike;').indexOf(String(';' + (String((s as any).locArgs?.[0] ?? '')) + ';'))) + 1) > 0) {
    ((s as any).expgainVars = (s as any).expgainVars ?? {})['statName'] = 'vball';
    ((s as any).expgainVars = (s as any).expgainVars ?? {})['attrArray'] = ((s as any).locArgs?.[0] ?? 0);
  } else {
    if ((Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf(String((s as any).locArgs?.[0] ?? '')) : -1) >= 0) {
      ((s as any).expgainVars = (s as any).expgainVars ?? {})['statName'] = ((s as any).locArgs?.[0] ?? 0);
      ((s as any).expgainVars = (s as any).expgainVars ?? {})['attrArray'] = ((s as any).locArgs?.[0] ?? 0);
    } else {
      if ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(String((s as any).locArgs?.[0] ?? '')) : -1) >= 0) {
        ((s as any).expgainVars = (s as any).expgainVars ?? {})['statName'] = ((s as any).locArgs?.[0] ?? 0);
        ((s as any).expgainVars = (s as any).expgainVars ?? {})['attrArray'] = '';
      } else {
        scene.text(`Error in gs 'exp_gain': ${((s as any).locArgs?.[0] ?? '')} is neither a skill nor an attribute`);
        return;
      }
    }
  }
  ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = qspFunc(s, '_difficulty', 'get_exp_gain');
  ((s as any).expgainVars = (s as any).expgainVars ?? {})['trait_index'] = 0;
  // TODO-QSP: :trait_loop
  ((s as any).expgainVars = (s as any).expgainVars ?? {})['trait'] = qspUntranslated(s, "traitattskl[expgainVars['trait_index']]", { location: "exp_gain" });
  if (((s as any).expgainVars ?? 0)?.['trait'] !== '') {
    ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars['exp_gain_mult'] ?? 0) + (((s as any).trait_vars ?? 0)?.[((s as any).expgainVars ?? 0)?.['trait'] + '-' + ((s as any).expgainVars ?? 0)?.['statName'] + '-exp_gain']);
    ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars['exp_gain_mult'] ?? 0) + (((s as any).trait_vars ?? 0)?.['all-' + ((s as any).expgainVars ?? 0)?.['statName'] + '-exp_gain']);
  }
  ((s as any).expgainVars = (s as any).expgainVars ?? {})['trait_index'] = ((s as any).expgainVars['trait_index'] ?? 0) + (1);
  if (((s as any).expgainVars ?? 0)?.['trait_index'] < Object.keys((s as any).traitattskl ?? {}).length) {
    // TODO-QSP: jump 'trait_loop'
  }
  if (((s as any).pcs_stam ?? 0) <= 0) {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
      ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 50 / 400;
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
        ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 100 / 400;
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
          ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 150 / 400;
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
            ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 180 / 400;
          } else {
            ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 200 / 400;
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
        ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 75 / 400;
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
          ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 150 / 400;
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
            ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 225 / 400;
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
              ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 270 / 400;
            } else {
              ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 300 / 400;
            }
          }
        }
      }
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
        ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 100 / 400;
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
          ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 200 / 400;
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
            ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 300 / 400;
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
              ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 360 / 400;
            } else {
              ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})?.['exp_gain_mult'] ?? 0) * 400 / 400;
            }
          }
        }
      }
    }
  }
  if (((s as any).expgainVars ?? 0)?.['exp_gain_mult'] <= 0) {
    return;
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: <<$expgainVars['statName']>>_exp_frac += <<ARGS[1]>> * expgainVars['exp_gain_mult']
  ((s as any).expgainVars = (s as any).expgainVars ?? {})['exp_gain'] = ((s as any)[((s as any).expgainVars ?? {})['statName'] + '_exp_frac'] ?? 0) / 100;
  // TODO-QSP: <<$expgainVars['statName']>>_exp_frac = <<$expgainVars['statName']>>_exp_frac mod 100
  // TODO-QSP: "
  if (((s as any).expgainVars ?? 0)?.['exp_gain'] <= 0) {
    return;
  }
  if (! (0 as any)) {
    qspCall(s, 'exp_deg', '', ((s as any).locArgs?.[0] ?? 0), 'reset');
  } else {
    if (((s as any).expgainVars ?? 0)?.['statName'] === 'magik') {
      (s as any).magik_adj = ((s as any).magik_adj ?? 0) + (((s as any).expgainVars ?? 0)?.['exp_gain']);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).no_exp_gain ?? 0) === 1) {
    // TODO-QSP: exit
  }
  if (String((s as any).locArgs?.[0] ?? '') === 'stren_plus'  &&  ((s as any).stren_plus_lvl ?? 0) >= 50  &&  ((s as any).drugVars ?? 0)?.['steroids_dose'] === 0) {
    return;
  }
  const arg = s.locArg;
  switch (arg) {
    case 'inhib':
      enterInhib(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const exp_gain: LocationDef = {
  name: 'exp_gain',
  title: 'Error in gs \'exp_gain\':  is neither a skill nor an attribute',
  region: 'other',
  enter: enter,
};
