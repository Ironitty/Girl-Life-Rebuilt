import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $fetish_name[0] = 'maso'
  // TODO-QSP: $fetish_name[1] = 'bound'
  // TODO-QSP: $fetish_name[2] = 'beast'
  // TODO-QSP: $fetish_name[3] = 'exhibitionism'
  // TODO-QSP: $fetish_name[4] = 'rough'
  // TODO-QSP: $fetish_name[5] = 'prostitution'
  // TODO-QSP: $fetish_name[6] = 'dom'
  // TODO-QSP: $fetish_name[7] = 'sub'
  // TODO-QSP: $fetish_name[8] = 'incest'
  // TODO-QSP: $fetish_name[9] = 'feet'
  // TODO-QSP: $fetish_name[10] = 'lesbian'
  // TODO-QSP: $fetish_name[11] = 'group'
  // TODO-QSP: $fetish_name[12] = 'gangbang'
  // TODO-QSP: $fetish_name[13] = 'humiliation'
  // TODO-QSP: $fetish_name[14] = 'deepthroat'
  // TODO-QSP: $fetish_name[15] = 'unknown'
  // TODO-QSP: $fetish_name[16] = 'gloryhole'
  // TODO-QSP: $fetish_name[17] = 'rape'
  // TODO-QSP: $fetish_name[18] = 'shemale'
  // TODO-QSP: $fetish_name[19] = 'masturbate'
  // TODO-QSP: $fetish_name[20] = 'creampie'
  // TODO-QSP: $fetish_name[21] = 'pregnant'
  // TODO-QSP: $fetish_name[22] = 'orgy'
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).tempFetish ?? {})['i'] = 0;
  ((s as any).tempFetish ?? {})['maxi'] = 0;
  // TODO-QSP: :fetish_cikl_loop
  ((s as any).tempFetish ?? {})['name'] = qspUntranslated(s, "fetish_name[tempFetish['i']]", { location: "fetish" });
  // TODO-QSP: gs 'fetish', 'add_bonuses', $tempFetish['name']
  // TODO-QSP: fetishes[$tempFetish['name'] + '_pref'] = max(-100, min(fetishes[$tempFetish['name'] + '_pref'], 100...
  // TODO-QSP: gs 'fetish', 'check_for_traits', $tempFetish['name']
  ((s as any).tempFetish ?? {})['i'] = (((s as any).tempFetish ?? {})['i'] ?? 0) + (1);
  if (((s as any).tempFetish ?? 0)?.['i'] < ((s as any).tempFetish ?? 0)?.['maxi']) {
    // TODO-QSP: jump 'fetish_cikl_loop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterAddBonuses(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fetishes ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_exp_bonus'] !== 0  ||  ((s as any).fetishes ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_pref_bonus'] !== 0) {
    ((s as any).temp ?? {})['j'] = 0;
    // TODO-QSP: :fetish_cikl_loop1
    ((s as any).temp ?? {})['link'] = ((s as any).fetish_link ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).temp ?? 0)?.['j'] + '' + '_name'];
    ((s as any).temp ?? {})['strength'] = ((s as any).fetish_link ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_' + ((s as any).temp ?? 0)?.['j'] + '' + '_strength'];
    if (((s as any).temp ?? 0)?.['link'] !== '') {
      ((s as any).temp ?? {})['exp_bonus'] = ((s as any).fetishes ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_exp_bonus'] * ((s as any).temp ?? {})?.['strength'] / 100;
      ((s as any).temp ?? {})['pref_bonus'] = ((s as any).fetishes ?? 0)[((s as any).locArgs?.[1] ?? 0) + '_pref_bonus'] * ((s as any).temp ?? {})?.['strength'] / 100;
      if (((s as any).temp ?? 0)?.['exp_bonus'] !== 0) {
        // TODO-QSP: gs 'fetish', 'add_exp', $temp['link'], temp['exp_bonus'], 'no_bonus'
      }
      if (((s as any).temp ?? 0)?.['pref_bonus'] !== 0) {
        // TODO-QSP: gs 'fetish', 'add_pref', $temp['link'], temp['pref_bonus'], 'no_bonus'
      }
      ((s as any).temp ?? {})['j'] = (((s as any).temp ?? {})['j'] ?? 0) + (1);
      // TODO-QSP: jump 'fetish_cikl_loop1'
    }
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_exp_bonus'] = 0
  // TODO-QSP: fetishes[$ARGS[1] + '_pref_bonus'] = 0
  // TODO-QSP: end
  scene.build();
}

function enterCheckForTraits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fetish_trait ?? 0)[((s as any).locArgs?.[1] ?? 0)] !== '') {
    // TODO-QSP: dynamic $fetish_trait[$ARGS[1]]
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterAddExp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'add_exp': ${((s as any).locArgs?.[1] ?? 0)} is not in $fetish_name`);
    return;
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = 1;
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_exp'] += ARGS[2]
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_bonus') : -1) < 0) {
    // TODO-QSP: fetishes[$ARGS[1] + '_exp_bonus'] += ARGS[2]
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetExp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'set_exp': ${((s as any).locArgs?.[1] ?? 0)} is not in $fetish_name`);
    return;
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_exp'] = ARGS[2]
  // TODO-QSP: end
  scene.build();
}

function enterGetExp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'get_exp': ${((s as any).locArgs?.[1] ?? 0)} is not in $fetish_name`);
    return;
  }
  (s as any).result = ((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_exp'];
  // TODO-QSP: end
  scene.build();
}

function enterAddPref(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'add_pref': ${((s as any).locArgs?.[1] ?? 0)} is not in $fetish_name`);
    return;
  }
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    ((s as any).ARGS ?? {})[2] = 1;
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_pref'] += ARGS[2]
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('no_bonus') : -1) < 0) {
    // TODO-QSP: fetishes[$ARGS[1] + '_pref_bonus'] += ARGS[2]
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_pref'] = max(-100, min(fetishes[$ARGS[1] + '_pref'], 100))
  // TODO-QSP: end
  scene.build();
}

function enterSetPref(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'set_pref': ${((s as any).locArgs?.[1] ?? 0)} is not in $fetish_name`);
    return;
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_pref'] = ARGS[2]
  // TODO-QSP: fetishes[$ARGS[1] + '_pref'] = max(-100, min(fetishes[$ARGS[1] + '_pref'], 100))
  // TODO-QSP: end
  scene.build();
}

function enterGetPref(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    // TODO-QSP: exit
  }
  if ((Array.isArray((s as any).fetish_name) ? ((s as any).fetish_name as any[]).indexOf(((s as any).locArgs?.[1] ?? 0)) : -1) < 0) {
    scene.text(`Error in gs 'fetish', 'get_pref': ${((s as any).locArgs?.[1] ?? 0)} is not in $fetish_name`);
    return;
  }
  // TODO-QSP: fetishes[$ARGS[1] + '_pref'] = max(-100, min(fetishes[$ARGS[1] + '_pref'], 100))
  (s as any).result = ((s as any).fetishes ?? 0)?.[((s as any).locArgs?.[1] ?? 0) + '_pref'];
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'cikl':
      enterCikl(s, scene);
      break;
    case 'add_bonuses':
      enterAddBonuses(s, scene);
      break;
    case 'check_for_traits':
      enterCheckForTraits(s, scene);
      break;
    case 'add_exp':
      enterAddExp(s, scene);
      break;
    case 'set_exp':
      enterSetExp(s, scene);
      break;
    case 'get_exp':
      enterGetExp(s, scene);
      break;
    case 'add_pref':
      enterAddPref(s, scene);
      break;
    case 'set_pref':
      enterSetPref(s, scene);
      break;
    case 'get_pref':
      enterGetPref(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fetish: LocationDef = {
  name: 'fetish',
  title: 'Error in gs \'fetish\', \'add_exp\': <<$ARGS[1]>> is not in $fetish_name',
  region: 'other',
  enter: enter,
};
