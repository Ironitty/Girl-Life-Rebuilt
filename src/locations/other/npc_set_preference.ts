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
    if (((s as any).locArgs?.[1] ?? 0) === '') {
      // TODO-QSP: exit
    }
    if (((s as any).locArgs?.[2] ?? 0) === '') {
      if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['value'] = qspUntranslated(s, "ARGS[2]", { location: "npc_set_preference" });
    } else {
      if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['value'] = qspFunc(s, 'npc_set_preference', 'get_value', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    }
    if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['index'] = qspUntranslated(s, "arrpos('npc_nsp_pref_traits', ARGS[1])", { location: "npc_set_preference" });
    if (((s as any).temp_nsprefVars ?? 0)?.['value'] !== 0) {
      if (Object.keys((s as any).npc_nsp_pref_traits ?? {}).length === 0) {
        if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['pref_string'] = qspUntranslated(s, "\"killvar 'npc_pref_traits'", { location: "npc_set_preference" });
        // TODO-QSP: $npc_pref_traits[] = '<<$ARGS[1]>>'
        if (!(s as any).npc_pref_values) (s as any).npc_pref_values = {}; (s as any).npc_pref_values['' + String((s as any).$ARGS[1] || '') + ''] = ((s as any).temp_nsprefVars ?? 0)?.['value'];
        // TODO-QSP: "
        // TODO-QSP: $npc_preferences[$ARGS[0]] = $replace($temp_nsprefVars['pref_string'], '  ', '')
      } else {
        if (((s as any).temp_nsprefVars ?? 0)?.['index'] >= 0) {
          // TODO-QSP: npc_nsp_pref_values[$ARGS[1]] = temp_nsprefVars['value']
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterRebuildPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: $temp_nsprefVars['pref_string'] = "$npc_pref_traits[] = '<<$ARGS[1]>>'
          if (!(s as any).npc_pref_values) (s as any).npc_pref_values = {}; (s as any).npc_pref_values['' + String((s as any).$ARGS[1] || '') + ''] = ((s as any).temp_nsprefVars ?? 0)?.['value'];
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
  if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['pref_string'] = qspUntranslated(s, "\"killvar 'npc_pref_traits'", { location: "npc_set_preference" });
  // TODO-QSP: "
  if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['i'] = 0;
  if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['max_i'] = 0;
  // TODO-QSP: :rebuild_preferences_loop
  if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['trait'] = qspUntranslated(s, "npc_nsp_pref_traits[temp_nsprefVars['i']]", { location: "npc_set_preference" });
  // TODO-QSP: $temp_nsprefVars['pref_string'] += "$npc_pref_traits[] = '<<$temp_nsprefVars['trait']>>'
  // TODO-QSP: npc_pref_values['<<$temp_nsprefVars['trait']>>'] = <<npc_nsp_pref_values[temp_nsprefVars['i']]>>
  // TODO-QSP: "
  if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['i'] = ((s as any).temp_nsprefVars['i'] ?? 0) + (1);
  if (((s as any).temp_nsprefVars ?? 0)?.['i'] < ((s as any).temp_nsprefVars ?? 0)?.['max_i']) {
    // TODO-QSP: jump 'rebuild_preferences_loop'
  }
  // TODO-QSP: $npc_preferences[$ARGS[1]] = $replace($temp_nsprefVars['pref_string'], '  ', '')
  // TODO-QSP: end
  scene.build();
}

function enterRemovePreference(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[2] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if (!(s as any).temp_nsprefVars) (s as any).temp_nsprefVars = {}; (s as any).temp_nsprefVars['index'] = qspUntranslated(s, "arrpos('npc_nsp_pref_traits', ARGS[2])", { location: "npc_set_preference" });
  if (((s as any).temp_nsprefVars ?? 0)?.['index'] >= 0) {
    qspCall(s, 'array', 'remove_element', 'npc_nsp_pref_values', ((s as any).locArgs?.[2] ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[1] ?? 0)]; enterRebuildPreferences(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGetValue(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 20;
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 10;
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 5;
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['neutral'] = 0;
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-5);
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-10);
  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-20);
  if (((s as any).locArgs?.[1] ?? 0) === 'body_bmi_starving') {
    if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 60;
    if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 40;
    if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 20;
    if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-3);
    if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-5);
    if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-10);
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'body_bmi_underweight') {
      if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 10;
      if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 5;
      if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 3;
      if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-10);
      if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-25);
      if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-35);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'body_bmi_normal') {
        if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 5;
        if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 2;
        if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 1;
        if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-25);
        if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-50);
        if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-70);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'body_bmi_overweight') {
          if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 10;
          if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 5;
          if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 3;
          if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-15);
          if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-25);
          if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-35);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'body_bmi_obese') {
            if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 60;
            if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 40;
            if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 20;
            if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-3);
            if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-5);
            if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-10);
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'body_skin_bad') {
              if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 3;
              if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 2;
              if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 1;
              if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-1);
              if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-2);
              if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-3);
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'body_skin_normal') {
                if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 3;
                if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 2;
                if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 1;
                if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-1);
                if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-2);
                if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-3);
              } else {
                if (((s as any).locArgs?.[1] ?? 0) === 'body_skin_good') {
                  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['love'] = 3;
                  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['like'] = 2;
                  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['approve'] = 1;
                  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['disapprove'] = (-1);
                  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['dislike'] = (-2);
                  if (!(s as any).temp_pref_values) (s as any).temp_pref_values = {}; (s as any).temp_pref_values['hate'] = (-3);
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
    (s as any).result = ((s as any).temp_pref_values ?? 0)?.[((s as any).locArgs?.[2] ?? 0)];
  } else {
    if (((s as any).locArgs?.[2] ?? 0) === ((s as any).temp_pref_values ?? 0)?.['neutral']) {
    } else {
      if (((s as any).locArgs?.[2] ?? 0) < (((s as any).temp_pref_values ?? 0)?.['hate'] + ((s as any).temp_pref_values ?? 0)?.['dislike']) / 2) {
      } else {
        if (((s as any).locArgs?.[2] ?? 0) > (((s as any).temp_pref_values ?? 0)?.['love'] + ((s as any).temp_pref_values ?? 0)?.['like']) / 2) {
        } else {
          if (((s as any).locArgs?.[2] ?? 0) < (((s as any).temp_pref_values ?? 0)?.['dislike'] + ((s as any).temp_pref_values ?? 0)?.['disaprove']) / 2) {
          } else {
            if (((s as any).locArgs?.[2] ?? 0) > (((s as any).temp_pref_values ?? 0)?.['like'] + ((s as any).temp_pref_values ?? 0)?.['approve']) / 2) {
            } else {
              if (((s as any).locArgs?.[2] ?? 0) < (((s as any).temp_pref_values ?? 0)?.['disaprove'] + ((s as any).temp_pref_values ?? 0)?.['neutral']) / 2) {
              } else {
                if (((s as any).locArgs?.[2] ?? 0) > (((s as any).temp_pref_values ?? 0)?.['approve'] + ((s as any).temp_pref_values ?? 0)?.['neutral']) / 2) {
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
