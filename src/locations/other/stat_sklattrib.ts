import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetXpprvXpnxt(s: GameState, scene: SceneBuilder): void {
  return;
  scene.build();
}

function enterAddAttToList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_funcs', 'add_att_to_list', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterAddSklToList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_funcs', 'add_skl_to_list', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
  return;
  scene.build();
}

function enterAddTraitToList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat_funcs', 'add_trait_to_list', ((s as any).locArgs?.[1] ?? 0));
  return;
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[0] ?? '') === 'daycall') {
    ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = 0;
    do {
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
      (s as any).temp_sklattrib = undefined;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDegradationLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
    } while (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterAdvancementLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat_sklattrib_lvlset', '');
  return;
  scene.build();
}

function enterDaycall(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (String((s as any).locArgs?.[0] ?? '') === 'daycall') {
    ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = 0;
    do {
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
      (s as any).temp_sklattrib = undefined;
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDegradationLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
    } while (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[0] ?? 0)]; enterAdvancementLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'stat_sklattrib_lvlset', '');
  return;
  scene.build();
}

function enterDegradationLoop(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'attribute';
  do {
    ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = 0;
    while (true) {
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['deg_loss'] = qspFunc(s, '_difficulty', 'get_deg_loss');
      if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      } else {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "skl_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['deg_loss'] = 75 * (((s as any).temp_sklattrib ?? {})?.['deg_loss'] ?? 0) / 100;
      }
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['trait_index'] = 0;
      do {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['trait'] = qspUntranslated(s, "traitattskl[temp_sklattrib['trait_index']]", { location: "stat_sklattrib" });
        if (((s as any).temp_sklattrib ?? 0)?.['trait'] !== '') {
          ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['deg_loss'] = ((s as any).temp_sklattrib['deg_loss'] ?? 0) + ((((s as any).trait_vars ?? 0)?.[(((s as any).temp_sklattrib ?? 0)?.['trait']) + '-' + (((s as any).temp_sklattrib ?? 0)?.['name']) + '-deg_loss'] ?? 0));
          ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['deg_loss'] = ((s as any).temp_sklattrib['deg_loss'] ?? 0) + ((((s as any).trait_vars ?? 0)?.['all-' + (((s as any).temp_sklattrib ?? 0)?.['name']) + '-deg_loss'] ?? 0));
        }
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['trait_index'] = ((s as any).temp_sklattrib['trait_index'] ?? 0) + (1);
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
        if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
          if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length) {
            break;
          }
          ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'skill';
        } else {
          if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).skl_name ?? {}).length) {
            break;
          }
          ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'END';
        }
        (s as any).temp_sklattrib = undefined;
        return;
      } while (((s as any).temp_sklattrib ?? 0)?.['trait_index'] < Object.keys((s as any).traitattskl ?? {}).length);
    }
  } while (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill');
  scene.build();
}

function enterAdvancementLoop(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'daycall') {
    ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['daycall'] = 1;
  }
  ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'attribute';
  do {
    ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = 0;
    while (true) {
      if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      } else {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "skl_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      }
      if (((s as any).temp_sklattrib ?? 0)?.['daycall']) {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['update_stat'] = 1;
      }
      if (((s as any).temp_sklattrib ?? 0)?.['update_stat']) {
      }
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
      if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
        if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length) {
          break;
        }
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'skill';
      } else {
        if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).skl_name ?? {}).length) {
          break;
        }
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'END';
      }
      (s as any).temp_sklattrib = undefined;
      return;
    }
  } while (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill');
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInitVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).attsklupdate ?? 0)  &&  String((s as any).locArgs?.[1] ?? '') === '') {
    return;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterInitLoop(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).attsklupdate = 1;
  scene.build();
}

function enterInitLoop(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'attribute';
  do {
    ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = 0;
    while (true) {
      if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "att_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      } else {
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['name'] = qspUntranslated(s, "skl_name[temp_sklattrib['index']]", { location: "stat_sklattrib" });
      }
      ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['index'] = ((s as any).temp_sklattrib['index'] ?? 0) + (1);
      if (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'attribute') {
        if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).att_name ?? {}).length) {
          break;
        }
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'skill';
      } else {
        if (((s as any).temp_sklattrib ?? 0)?.['index'] < Object.keys((s as any).skl_name ?? {}).length) {
          break;
        }
        ((s as any).temp_sklattrib = (s as any).temp_sklattrib ?? {})['stat_type'] = 'END';
      }
      (s as any).temp_sklattrib = undefined;
      return;
    }
  } while (((s as any).temp_sklattrib ?? 0)?.['stat_type'] === 'skill');
  scene.build();
}

function enterInitVars(s: GameState, scene: SceneBuilder): void {
  ((s as any).att_name = (s as any).att_name ?? {})[0] = 'stren\'      & $att_desc[\'stren\']    = \'Strength';
  ((s as any).att_name = (s as any).att_name ?? {})[1] = 'agil\'      & $att_desc[\'agil\']      = \'Agility';
  ((s as any).att_name = (s as any).att_name ?? {})[2] = 'vital\'      & $att_desc[\'vital\']    = \'Endurance';
  ((s as any).att_name = (s as any).att_name ?? {})[3] = 'intel\'      & $att_desc[\'intel\']    = \'Intelligence';
  ((s as any).att_name = (s as any).att_name ?? {})[4] = 'react\'      & $att_desc[\'react\']    = \'Reaction';
  ((s as any).att_name = (s as any).att_name ?? {})[5] = 'sprt\'      & $att_desc[\'sprt\']      = \'Spirit';
  ((s as any).att_name = (s as any).att_name ?? {})[6] = 'chrsm\'      & $att_desc[\'chrsm\']    = \'Charisma';
  ((s as any).att_name = (s as any).att_name ?? {})[7] = 'prcptn\'      & $att_desc[\'prcptn\']    = \'Perception';
  ((s as any).att_name = (s as any).att_name ?? {})[8] = 'magik\'      & $att_desc[\'magik\']    = \'Magic';
  ((s as any).att_name = (s as any).att_name ?? {})[9] = 'stren_plus\'    & $att_desc[\'stren_plus\']  = \'Musculature';
  ((s as any).att_name = (s as any).att_name ?? {})[10] = 'butt_tr\'      & $att_desc[\'butt_tr\']    = \'Butt Training';
  ((s as any).skl_name = (s as any).skl_name ?? {})[0] = 'jab\'        & $skl_desc[\'jab\']      = \'Jabs';
  ((s as any).skl_name = (s as any).skl_name ?? {})[1] = 'punch\'      & $skl_desc[\'punch\']    = \'Power Strikes';
  ((s as any).skl_name = (s as any).skl_name ?? {})[2] = 'kick\'      & $skl_desc[\'kick\']      = \'Kicks';
  ((s as any).skl_name = (s as any).skl_name ?? {})[3] = 'def\'        & $skl_desc[\'def\']      = \'Defense';
  ((s as any).skl_name = (s as any).skl_name ?? {})[4] = 'shoot\'      & $skl_desc[\'shoot\']    = \'Shooting Accuracy';
  ((s as any).skl_name = (s as any).skl_name ?? {})[5] = 'vokal\'      & $skl_desc[\'vokal\']    = \'Singing';
  ((s as any).skl_name = (s as any).skl_name ?? {})[6] = 'sewng\'      & $skl_desc[\'sewng\']    = \'Tailoring';
  ((s as any).skl_name = (s as any).skl_name ?? {})[7] = 'instrmusic\'    & $skl_desc[\'instrmusic\']  = \'Instrumental Music';
  ((s as any).skl_name = (s as any).skl_name ?? {})[8] = 'photoskl\'    & $skl_desc[\'photoskl\']    = \'Photography';
  ((s as any).skl_name = (s as any).skl_name ?? {})[9] = 'artskls\'      & $skl_desc[\'artskls\']    = \'Artistic Skills';
  ((s as any).skl_name = (s as any).skl_name ?? {})[10] = 'danc\'      & $skl_desc[\'danc\']      = \'Modern Dancing';
  ((s as any).skl_name = (s as any).skl_name ?? {})[11] = 'dancero\'      & $skl_desc[\'dancero\']    = \'Erotic Dancing';
  ((s as any).skl_name = (s as any).skl_name ?? {})[12] = 'dancpol\'      & $skl_desc[\'dancpol\']    = \'Pole Dancing';
  ((s as any).skl_name = (s as any).skl_name ?? {})[13] = 'chess\'      & $skl_desc[\'chess\']    = \'Chess';
  ((s as any).skl_name = (s as any).skl_name ?? {})[14] = 'gaming\'      & $skl_desc[\'gaming\']    = \'Gaming';
  ((s as any).skl_name = (s as any).skl_name ?? {})[15] = 'humint\'      & $skl_desc[\'humint\']    = \'People Skills';
  ((s as any).skl_name = (s as any).skl_name ?? {})[16] = 'persuas\'      & $skl_desc[\'persuas\']    = \'Persuasion';
  ((s as any).skl_name = (s as any).skl_name ?? {})[17] = 'run\'        & $skl_desc[\'run\']      = \'Running';
  ((s as any).skl_name = (s as any).skl_name ?? {})[18] = 'icesktng\'    & $skl_desc[\'icesktng\']    = \'Ice Skating';
  ((s as any).skl_name = (s as any).skl_name ?? {})[19] = 'wrstlng\'      & $skl_desc[\'wrstlng\']    = \'Wrestling';
  ((s as any).skl_name = (s as any).skl_name ?? {})[20] = 'ftbll\'      & $skl_desc[\'ftbll\']    = \'Football';
  ((s as any).skl_name = (s as any).skl_name ?? {})[21] = 'splcstng\'    & $skl_desc[\'splcstng\']    = \'Spell Casting';
  ((s as any).skl_name = (s as any).skl_name ?? {})[22] = 'observ\'      & $skl_desc[\'observ\']    = \'Observation';
  ((s as any).skl_name = (s as any).skl_name ?? {})[23] = 'makupskl\'    & $skl_desc[\'makupskl\']    = \'Makeup Skill';
  ((s as any).skl_name = (s as any).skl_name ?? {})[24] = 'compskl\'      & $skl_desc[\'compskl\']    = \'Computer Skill';
  ((s as any).skl_name = (s as any).skl_name ?? {})[25] = 'comphckng\'    & $skl_desc[\'comphckng\']  = \'Computer Hacking';
  ((s as any).skl_name = (s as any).skl_name ?? {})[26] = 'hndiwrk\'      & $skl_desc[\'hndiwrk\']    = \'Handiwork';
  ((s as any).skl_name = (s as any).skl_name ?? {})[27] = 'servng\'      & $skl_desc[\'servng\']    = \'Serving';
  ((s as any).skl_name = (s as any).skl_name ?? {})[28] = 'mdlng\'      & $skl_desc[\'mdlng\']    = \'Modeling';
  ((s as any).skl_name = (s as any).skl_name ?? {})[29] = 'medcn\'      & $skl_desc[\'medcn\']    = \'Medicine';
  ((s as any).skl_name = (s as any).skl_name ?? {})[30] = 'heels\'      & $skl_desc[\'heels\']    = \'Heels';
  ((s as any).skl_name = (s as any).skl_name ?? {})[31] = 'pool\'      & $skl_desc[\'pool\']      = \'Pool';
  ((s as any).skl_name = (s as any).skl_name ?? {})[32] = 'inhib\'      & $skl_desc[\'inhib\']    = \'Inhibition';
  ((s as any).skl_name = (s as any).skl_name ?? {})[33] = 'perform\'      & $skl_desc[\'perform\']    = \'Performance';
  ((s as any).skl_name = (s as any).skl_name ?? {})[34] = 'bushcraft\'    & $skl_desc[\'bushcraft\']  = \'Bushcraft';
  ((s as any).skl_name = (s as any).skl_name ?? {})[35] = 'cleaning\'    & $skl_desc[\'cleaning\']    = \'Cleaning';
  ((s as any).skl_name = (s as any).skl_name ?? {})[36] = 'bkbll\'      & $skl_desc[\'bkbll\']    = \'Basketball';
  ((s as any).skl_name = (s as any).skl_name ?? {})[37] = 'cheer\'      & $skl_desc[\'cheer\']    = \'Cheerleading';
  ((s as any).skl_name = (s as any).skl_name ?? {})[38] = 'musicprod\'    & $skl_desc[\'musicprod\']  = \'Music Production';
  ((s as any).skl_name = (s as any).skl_name ?? {})[39] = 'songwrit\'    & $skl_desc[\'songwrit\']    = \'Songwriting';
  ((s as any).skl_name = (s as any).skl_name ?? {})[40] = 'vball\'      & $skl_desc[\'vball\']    = \'Volleyball';
  return;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'set_xpprv_xpnxt':
      enterSetXpprvXpnxt(s, scene);
      break;
    case 'add_att_to_list':
      enterAddAttToList(s, scene);
      break;
    case 'add_skl_to_list':
      enterAddSklToList(s, scene);
      break;
    case 'add_trait_to_list':
      enterAddTraitToList(s, scene);
      break;
    case 'daycall':
      enterDaycall(s, scene);
      break;
    case 'degradation_loop':
      enterDegradationLoop(s, scene);
      break;
    case 'advancement_loop':
      enterAdvancementLoop(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'init_loop':
      enterInitLoop(s, scene);
      break;
    case 'init_vars':
      enterInitVars(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const stat_sklattrib: LocationDef = {
  name: 'stat_sklattrib',
  region: 'other',
  enter: enter,
};
