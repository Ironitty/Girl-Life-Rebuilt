import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[1] ?? 0) <= 0) {
    // TODO-QSP: exit
  }
  if (((s as any).no_exp_gain ?? 0) === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'stren_plus'  &&  ((s as any).stren_plus_lvl ?? 0) >= 50  &&  ((s as any).drugVars ?? 0)?.['steroids_dose'] === 0) {
    return;
  }
  if (((';vball_block;vball_rec;vball_serve;vball_set;vball_spike;').indexOf((';' + ((s as any).locArgs?.[0] ?? 0) + ';'))) + 1 > 0) {
    ((s as any).expgainVars ?? {})['statName'] = 'vball';
    ((s as any).expgainVars ?? {})['attrArray'] = ((s as any).locArgs?.[0] ?? 0);
  } else {
    if ((Array.isArray((s as any).skl_name) ? ((s as any).skl_name as any[]).indexOf(((s as any).locArgs?.[0] ?? 0)) : -1) >= 0) {
      ((s as any).expgainVars ?? {})['statName'] = ((s as any).locArgs?.[0] ?? 0);
      ((s as any).expgainVars ?? {})['attrArray'] = ((s as any).locArgs?.[0] ?? 0);
    } else {
      if ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(((s as any).locArgs?.[0] ?? 0)) : -1) >= 0) {
        ((s as any).expgainVars ?? {})['statName'] = ((s as any).locArgs?.[0] ?? 0);
        ((s as any).expgainVars ?? {})['attrArray'] = '';
      } else {
        scene.text(`Error in gs 'exp_gain': ${((s as any).locArgs?.[0] ?? 0)} is neither a skill nor an attribute`);
        return;
      }
    }
  }
  ((s as any).expgainVars ?? {})['exp_gain_mult'] = qspFunc(s, '_difficulty', 'get_exp_gain');
  ((s as any).expgainVars ?? {})['trait_index'] = 0;
  // TODO-QSP: :trait_loop
  ((s as any).expgainVars ?? {})['trait'] = qspUntranslated(s, "traitattskl[expgainVars['trait_index']]", { location: "exp_gain" });
  if (((s as any).expgainVars ?? 0)?.['trait'] !== '') {
    ((s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})['exp_gain_mult'] ?? 0) + (((s as any).trait_vars ?? 0)?.[((s as any).expgainVars ?? {})?.['trait'] + '-' + ((s as any).expgainVars ?? {})?.['statName'] + '-exp_gain']);
    ((s as any).expgainVars ?? {})['exp_gain_mult'] = (((s as any).expgainVars ?? {})['exp_gain_mult'] ?? 0) + (((s as any).trait_vars ?? 0)?.['all-\' + $expgainVars[\'statName\'] + \'-exp_gain']);
  }
  ((s as any).expgainVars ?? {})['trait_index'] = (((s as any).expgainVars ?? {})['trait_index'] ?? 0) + (1);
  if (((s as any).expgainVars ?? 0)?.['trait_index'] < Object.keys((s as any).traitattskl ?? {}).length) {
    // TODO-QSP: jump 'trait_loop'
  }
  if (((s as any).pcs_stam ?? 0) <= 0) {
    if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
      ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 50 / 400;
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
        ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 100 / 400;
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
          ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 150 / 400;
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
            ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 180 / 400;
          } else {
            ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 200 / 400;
          }
        }
      }
    }
  } else {
    if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
        ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 75 / 400;
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
          ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 150 / 400;
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
            ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 225 / 400;
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
              ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 270 / 400;
            } else {
              ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 300 / 400;
            }
          }
        }
      }
    } else {
      if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 20) {
        ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 100 / 400;
      } else {
        if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 10) {
          ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 200 / 400;
        } else {
          if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 5) {
            ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 300 / 400;
          } else {
            if (((s as any).pcs_condition ?? 0)?.['lack_of_sleep'] >= 2) {
              ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 360 / 400;
            } else {
              ((s as any).expgainVars ?? {})['exp_gain_mult'] = ((s as any).expgainVars ?? {})?.['exp_gain_mult'] * 400 / 400;
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
  // TODO-QSP: expgainVars['exp_gain'] = <<$expgainVars['statName']>>_exp_frac / 100
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
    } else {
      // TODO-QSP: dynamic "<<$expgainVars['statName']>>_exp += <<expgainVars['exp_gain']>>"
    }
    // TODO-QSP: gs 'exp_notification', 'track_exp', $expgainVars['statName'], expgainVars['exp_gain']
    if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_bonus') : -1) < 0) {
    }
    if (((s as any).expgainVars ?? 0)?.['attrArray'] !== '') {
      ((s as any).expgainVars ?? {})['i'] = 0;
      ((s as any).expgainVars ?? {})['maxi'] = 0;
      if (((s as any).expgainVars ?? 0)?.['maxi'] > 0) {
        // TODO-QSP: :attrib_loop
        ((s as any).expgainVars ?? {})['attr'] = 0;
        if ((Array.isArray((s as any).att_name) ? ((s as any).att_name as any[]).indexOf(((s as any).expgainVars ?? 0)?.['attr']) : -1) >= 0) {
          // TODO-QSP: dynamic "
          if (((s as any).expgainVars ?? 0)?.['attr']((s as any)._lvl ?? 0) < 100 + ((s as any).expgainVars ?? 0)?.['attr']((s as any)._muta ?? 0)) {
            // TODO-QSP: <<$expgainVars['attr']>>_exp_skill_derived += 40 * <<expgainVars['exp_gain']>> / expgainVars['maxi']
          } else {
            qspCall(s, 'exp_deg', '', '' + qspUntranslated(s, "expgainVars['attr']>", { location: "exp_gain" }) + '', 'reset');
          }
          // TODO-QSP: "
        }
        ((s as any).expgainVars ?? {})['i'] = (((s as any).expgainVars ?? {})['i'] ?? 0) + (1);
        if (((s as any).expgainVars ?? 0)?.['i'] < ((s as any).expgainVars ?? 0)?.['maxi']) {
          // TODO-QSP: jump 'attrib_loop'
        }
      }
    }
  }
  scene.build();
}

function enterInhib(s: GameState, scene: SceneBuilder): void {
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "exp_gain" }));
  // TODO-QSP: gs 'exp_notification', 'track_exp', 'inhib', ARGS[1]
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
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
  title: 'Error in gs \'exp_gain\': <<$ARGS[0]>> is neither a skill nor an attribute',
  region: 'other',
  enter: enter,
};
