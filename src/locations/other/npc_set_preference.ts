import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterReset(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $npc_preferences[$ARGS[1]] = ''
  // TODO-QSP: end
  if (!isNaN((String(((s as any).locArgs?.[0] ?? 0)).slice((2)-1))) && (String(((s as any).locArgs?.[0] ?? 0)).slice((2)-1)) !== '') {
    if (String((s as any).locArgs?.[1] ?? '') === '') {
      // TODO-QSP: exit
    }
    if (String((s as any).locArgs?.[2] ?? '') === '') {
      ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['value'] = ((s as any).locArgs?.[2] ?? 0);
    } else {
      ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['value'] = qspFunc(s, 'npc_set_preference', 'get_value', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    }
    ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['index'] = qspUntranslated(s, "arrpos('npc_nsp_pref_traits', ARGS[1])", { location: "npc_set_preference" });
    if (((s as any).temp_nsprefVars ?? 0)?.['value'] !== 0) {
      if (Object.keys((s as any).npc_nsp_pref_traits ?? {}).length === 0) {
        ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['pref_string'] = qspUntranslated(s, "\"killvar 'npc_pref_traits'", { location: "npc_set_preference" });
        // TODO-QSP: $npc_pref_traits[] = '<<$ARGS[1]>>'
        ((s as any).npc_pref_values = (s as any).npc_pref_values ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = (((s as any).temp_nsprefVars ?? 0)?.['value']);
        // TODO-QSP: "
        // TODO-QSP: $npc_preferences[$ARGS[0]] = $replace($temp_nsprefVars['pref_string'], '  ', '')
      } else {
        if (((s as any).temp_nsprefVars ?? 0)?.['index'] >= 0) {
          // TODO-QSP: npc_nsp_pref_values[$ARGS[1]] = temp_nsprefVars['value']
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRebuildPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: $temp_nsprefVars['pref_string'] = "$npc_pref_traits[] = '<<$ARGS[1]>>'
          ((s as any).npc_pref_values = (s as any).npc_pref_values ?? {})[String(((s as any).locArgs?.[1] ?? 0))] = (((s as any).temp_nsprefVars ?? 0)?.['value']);
          // TODO-QSP: "
          // TODO-QSP: $npc_preferences[$ARGS[0]] += $replace($temp_nsprefVars['pref_string'], '  ', '')
        }
      }
    } else {
      if (((s as any).temp_nsprefVars ?? 0)?.['index'] >= 0) {
        qspCall(s, 'array', 'remove_element', 'npc_nsp_pref_values', ((s as any).locArgs?.[1] ?? 0));
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRebuildPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  scene.build();
}

function enterRebuildPreferences(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['pref_string'] = qspUntranslated(s, "\"killvar 'npc_pref_traits'", { location: "npc_set_preference" });
  // TODO-QSP: "
  ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['i'] = 0;
  ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['max_i'] = 0;
  // TODO-QSP: :rebuild_preferences_loop
  ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['trait'] = qspUntranslated(s, "npc_nsp_pref_traits[temp_nsprefVars['i']]", { location: "npc_set_preference" });
  // TODO-QSP: $temp_nsprefVars['pref_string'] += "$npc_pref_traits[] = '<<$temp_nsprefVars['trait']>>'
  // TODO-QSP: npc_pref_values['<<$temp_nsprefVars['trait']>>'] = <<npc_nsp_pref_values[temp_nsprefVars['i']]>>
  // TODO-QSP: "
  ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['i'] = ((s as any).temp_nsprefVars['i'] ?? 0) + (1);
  if (((s as any).temp_nsprefVars ?? 0)?.['i'] < ((s as any).temp_nsprefVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'rebuild_preferences_loop'
  }
  // TODO-QSP: $npc_preferences[$ARGS[1]] = $replace($temp_nsprefVars['pref_string'], '  ', '')
  // TODO-QSP: end
  scene.build();
}

function enterRemovePreference(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[2] ?? '') === '') {
    // TODO-QSP: exit
  }
  ((s as any).temp_nsprefVars = (s as any).temp_nsprefVars ?? {})['index'] = qspUntranslated(s, "arrpos('npc_nsp_pref_traits', ARGS[2])", { location: "npc_set_preference" });
  if (((s as any).temp_nsprefVars ?? 0)?.['index'] >= 0) {
    qspCall(s, 'array', 'remove_element', 'npc_nsp_pref_values', ((s as any).locArgs?.[2] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRebuildPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetValue(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 20;
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 10;
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 5;
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['neutral'] = 0;
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-5);
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-10);
  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-20);
  if (String((s as any).locArgs?.[1] ?? '') === 'body_bmi_starving') {
    ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 60;
    ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 40;
    ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 20;
    ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-3);
    ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-5);
    ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-10);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'body_bmi_underweight') {
      ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 10;
      ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 5;
      ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 3;
      ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-10);
      ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-25);
      ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-35);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'body_bmi_normal') {
        ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 5;
        ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 2;
        ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 1;
        ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-25);
        ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-50);
        ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-70);
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'body_bmi_overweight') {
          ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 10;
          ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 5;
          ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 3;
          ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-15);
          ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-25);
          ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-35);
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'body_bmi_obese') {
            ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 60;
            ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 40;
            ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 20;
            ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-3);
            ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-5);
            ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-10);
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'body_skin_bad') {
              ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 3;
              ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 2;
              ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 1;
              ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-1);
              ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-2);
              ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-3);
            } else {
              if (String((s as any).locArgs?.[1] ?? '') === 'body_skin_normal') {
                ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 3;
                ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 2;
                ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 1;
                ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-1);
                ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-2);
                ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-3);
              } else {
                if (String((s as any).locArgs?.[1] ?? '') === 'body_skin_good') {
                  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['love'] = 3;
                  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['like'] = 2;
                  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['approve'] = 1;
                  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['disapprove'] = (-1);
                  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['dislike'] = (-2);
                  ((s as any).temp_pref_values = (s as any).temp_pref_values ?? {})['hate'] = (-3);
                }
              }
            }
          }
        }
      }
    }
  }
  if (String((s as any).locArgs?.[2] ?? '') !== '') {
    (s as any).result = (((s as any).temp_pref_values ?? 0)?.[((s as any).locArgs?.[2] ?? 0)] ?? 0);
  } else {
    if (String((s as any).locArgs?.[2] ?? '') === ((s as any).temp_pref_values ?? 0)?.['neutral']) {
      (s as any).result = 'neutral';
    } else {
      if (String((s as any).locArgs?.[2] ?? '') < (((s as any).temp_pref_values ?? 0)?.['hate'] + ((s as any).temp_pref_values ?? 0)?.['dislike']) / 2) {
        (s as any).result = 'hate';
      } else {
        if (String((s as any).locArgs?.[2] ?? '') > (((s as any).temp_pref_values ?? 0)?.['love'] + ((s as any).temp_pref_values ?? 0)?.['like']) / 2) {
          (s as any).result = 'love';
        } else {
          if (String((s as any).locArgs?.[2] ?? '') < (((s as any).temp_pref_values ?? 0)?.['dislike'] + ((s as any).temp_pref_values ?? 0)?.['disaprove']) / 2) {
            (s as any).result = 'dislike';
          } else {
            if (String((s as any).locArgs?.[2] ?? '') > (((s as any).temp_pref_values ?? 0)?.['like'] + ((s as any).temp_pref_values ?? 0)?.['approve']) / 2) {
              (s as any).result = 'like';
            } else {
              if (String((s as any).locArgs?.[2] ?? '') < (((s as any).temp_pref_values ?? 0)?.['disaprove'] + ((s as any).temp_pref_values ?? 0)?.['neutral']) / 2) {
                (s as any).result = 'disaprove';
              } else {
                if (String((s as any).locArgs?.[2] ?? '') > (((s as any).temp_pref_values ?? 0)?.['approve'] + ((s as any).temp_pref_values ?? 0)?.['neutral']) / 2) {
                  (s as any).result = 'approve';
                } else {
                  (s as any).result = 'neutral';
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBackup(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).npc_pref_traits ?? {}).length > 0) {
    // TODO-QSP: copyarr('$npc_backup_traits', '$npc_pref_traits')
    // TODO-QSP: copyarr('npc_backup_values', 'npc_pref_values')
  }
  // TODO-QSP: end
  scene.build();
}

function enterRestore(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).npc_backup_traits ?? {}).length > 0) {
    // TODO-QSP: copyarr('$npc_pref_traits', '$npc_backup_traits')
    // TODO-QSP: copyarr('npc_pref_values', 'npc_backup_values')
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'reset':
      enterReset(s, scene);
      break;
    case 'rebuild_preferences':
      enterRebuildPreferences(s, scene);
      break;
    case 'remove_preference':
      enterRemovePreference(s, scene);
      break;
    case 'get_value':
      enterGetValue(s, scene);
      break;
    case 'backup':
      enterBackup(s, scene);
      break;
    case 'restore':
      enterRestore(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const npc_set_preference: LocationDef = {
  name: 'npc_set_preference',
  region: 'other',
  enter: enter,
};
