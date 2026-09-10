import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPrintStats(s: GameState, scene: SceneBuilder): void {
  scene.text('<h3>Playroom</h3>');
  // TODO-QSP: dynamic text: <b>Orgasm meter: <<brothel_vars['orgasm_meter']>> / 100</b>
  scene.text(`<b>Orgasm meter: ${((s as any).brothel_vars ?? 0)?.['orgasm_meter']} / 100</b>`);
  // TODO-QSP: dynamic text: <b>Rage meter: <<brothel_vars['rage_meter']>> / 100</b>
  scene.text(`<b>Rage meter: ${((s as any).brothel_vars ?? 0)?.['rage_meter']} / 100</b>`);
  return;
  scene.build();
}

function enterSection1PrefUpdate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fetish', 'add_exp', 'sub');
  qspCall(s, 'fetish', 'add_exp', 'prostitution');
  if (((s as any).locArgs?.[1] ?? 0) === 'maso') {
    qspCall(s, 'fetish', 'add_exp', 'maso');
    if (((s as any).fetishes ?? 0)?.['maso_pref'] > 20) {
      qspCall(s, 'mood', 'raise', 'tiny');
    } else {
      qspCall(s, 'mood', 'lower', 'tiny');
    }
    if (((s as any).pain ?? 0)?.['total'] >= 10) {
      if (((s as any).pain ?? 0)?.['total'] <= 45) {
        if (Math.floor(Math.random() * 10) + 1 === 1) {
          if (((s as any).fetishes ?? 0)?.['maso_pref'] < -25) {
            qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
          } else {
            qspCall(s, 'fetish', 'add_pref', 'maso', 1);
            qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
          }
        }
      } else {
        if (Math.floor(Math.random() * 8) + 1 === 1) {
          qspCall(s, 'fetish', 'add_pref', 'maso', 1);
        }
        if (Math.floor(Math.random() * 8) + 1 === 1) {
          qspCall(s, 'fetish', 'add_pref', 'maso', (-1));
        }
      }
    }
  } else {
    qspCall(s, 'fetish', 'add_exp', 'bound');
    if (((s as any).fetishes ?? 0)?.['bound_pref'] > 20) {
      qspCall(s, 'mood', 'raise', 'tiny');
    } else {
      qspCall(s, 'mood', 'lower', 'tiny');
    }
    if (Math.floor(Math.random() * 10) + 1 === 1) {
      if (((s as any).fetishes ?? 0)?.['bound_pref'] > 15) {
        qspCall(s, 'fetish', 'add_pref', 'bound', 1);
      } else {
        qspCall(s, 'fetish', 'add_pref', 'bound', (-1));
        if (Math.floor(Math.random() * 100) + 1 <= ((s as any).min ?? 0)(((s as any).pcs_horny ?? 0), 100)) {
          qspCall(s, 'fetish', 'add_pref', 'bound', 1);
        } else {
          qspCall(s, 'fetish', 'add_pref', 'bound', (-1));
        }
      }
    } else {
      qspCall(s, 'fetish', 'add_exp', 'humiliation');
      if (((s as any).fetishes ?? 0)?.['humiliation_pref'] > 20) {
        qspCall(s, 'mood', 'raise', 'tiny');
      } else {
        qspCall(s, 'mood', 'lower', 'tiny');
      }
      if (Math.floor(Math.random() * 10) + 1 === 1) {
        if (((s as any).fetishes ?? 0)?.['humiliation_pref'] > 15) {
          qspCall(s, 'fetish', 'add_pref', 'humiliation', 1);
        } else {
          qspCall(s, 'fetish', 'add_pref', 'humiliation', (-1));
          if (Math.floor(Math.random() * 100) + 1 <= ((s as any).min ?? 0)(((s as any).pcs_horny ?? 0), 100)) {
            qspCall(s, 'fetish', 'add_pref', 'humiliation', 1);
          } else {
            qspCall(s, 'fetish', 'add_pref', 'humiliation', (-1));
          }
        }
      } else {
        qspCall(s, 'fetish', 'add_exp', 'sub');
        if (((s as any).fetishes ?? 0)?.['sub_pref'] > 20) {
          qspCall(s, 'mood', 'raise', 'tiny');
        } else {
          qspCall(s, 'mood', 'lower', 'tiny');
        }
        if (Math.floor(Math.random() * 10) + 1 === 1) {
          if (((s as any).fetishes ?? 0)?.['sub_pref'] > 15) {
            qspCall(s, 'fetish', 'add_pref', 'sub', 1);
          } else {
            qspCall(s, 'fetish', 'add_pref', 'sub', (-1));
            if (Math.floor(Math.random() * 100) + 1 <= ((s as any).min ?? 0)(((s as any).pcs_horny ?? 0), 100)) {
              qspCall(s, 'fetish', 'add_pref', 'sub', 1);
            } else {
              qspCall(s, 'fetish', 'add_pref', 'sub', (-1));
            }
          }
        }
        return;
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'print_stats':
      enterPrintStats(s, scene);
      break;
    case 'section1_pref_update':
      enterSection1PrefUpdate(s, scene);
      break;
    default:
      enterPrintStats(s, scene);
      break;
  }
}

export const brothel_section1: LocationDef = {
  name: 'brothel_section1',
  title: '"Only the customers should be getting you out of this cage. Don\'t make me come over here again."',
  region: 'other',
  enter: enter,
};
