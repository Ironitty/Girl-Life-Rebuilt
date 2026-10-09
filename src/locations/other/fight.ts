import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, LocationDef } from '../../core/types';
import { SceneBuilder } from '../../core/scene';

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function fv(s: GameState, type: string, stat: string, num: number | string): number {
  return (s as any)[type + '_' + stat]?.[num] ?? 0;
}
function fstr(s: GameState, type: string, stat: string, num: number | string): string {
  return (s as any)[type + '_' + stat]?.[num] ?? '';
}
function fadd(s: GameState, type: string, stat: string, num: number | string, delta: number): void {
  const arr = (s as any)[type + '_' + stat] = (s as any)[type + '_' + stat] ?? {};
  arr[num] = (arr[num] ?? 0) + delta;
}
function fset(s: GameState, type: string, stat: string, num: number | string, value: number): void {
  const arr = (s as any)[type + '_' + stat] = (s as any)[type + '_' + stat] ?? {};
  arr[num] = value;
}
function arrPos(s: GameState, arrName: string, value: string): number {
  const arr = (s as any)[arrName] ?? {};
  const keys = Object.keys(arr);
  for (let i = 0; i < keys.length; i++) {
    if (String(arr[keys[i]]) === value) return i;
  }
  return -1;
}

function enterDefault(_s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitFight(s: GameState, scene: SceneBuilder): void {
  (s as any).opp_name = undefined;
  (s as any).opp_image = undefined;
  (s as any).opp_def = undefined;
  (s as any).opp_run = undefined;
  (s as any).opp_wrstlng = undefined;
  (s as any).opp_kick = undefined;
  (s as any).opp_punch = undefined;
  (s as any).opp_jab = undefined;
  (s as any).opp_stren = undefined;
  (s as any).opp_agil = undefined;
  (s as any).opp_vital = undefined;
  (s as any).opp_react = undefined;
  (s as any).opp_health = undefined;
  (s as any).opp_willpwr = undefined;
  (s as any).opp_shoot = undefined;
  (s as any).opp_magik = undefined;
  (s as any).opp_mana = undefined;
  (s as any).opp_fog = undefined;
  (s as any).opp_clone = undefined;
  (s as any).opp_shield = undefined;
  (s as any).opp_dambonus = undefined;
  (s as any).opp_init = undefined;
  (s as any).opp_stun = undefined;
  (s as any).opp_spells = undefined;
  (s as any).opp_timer = undefined;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClearPCSArrayPlayer(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_clear_check = Object.keys((s as any).pcs_health ?? {}).length;
  while (true) {
    if (((s as any).temp_clear_check ?? 0) > 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_clear_check ?? 0) - 1]; enterClearPCSArray(s, scene); (s as any).locArgs = __savedLocArgs; }
      (s as any).temp_clear_check = ((s as any).temp_clear_check ?? 0) - (1);
      continue;
    }
    break;
  }
  (s as any).clear_check = undefined;
  ((s as any).pcs_name = (s as any).pcs_name ?? {})[0] = 'You';
  if (String((s as any).locArgs?.[1] ?? '') === '1') {
    ((s as any).pcs_image = (s as any).pcs_image ?? {})[0] = 'images/system/1_openings/1_tf/mikhail_1.jpg';
  } else {
    ((s as any).pcs_image = (s as any).pcs_image ?? {})[0] = qspFunc(s, '$face_image', '');
  }
  scene.build();
}

function enterClearPCSArray(s: GameState, scene: SceneBuilder): void {
  const idx = String((s as any).locArgs?.[1] ?? 0);
  if ((s as any).pcs_name) delete (s as any).pcs_name[idx];
  if ((s as any).pcs_image) delete (s as any).pcs_image[idx];
  if ((s as any).pcs_def) delete (s as any).pcs_def[idx];
  if ((s as any).pcs_run) delete (s as any).pcs_run[idx];
  if ((s as any).pcs_wrstlng) delete (s as any).pcs_wrstlng[idx];
  if ((s as any).pcs_kick) delete (s as any).pcs_kick[idx];
  if ((s as any).pcs_punch) delete (s as any).pcs_punch[idx];
  if ((s as any).pcs_jab) delete (s as any).pcs_jab[idx];
  if ((s as any).pcs_stren) delete (s as any).pcs_stren[idx];
  if ((s as any).pcs_agil) delete (s as any).pcs_agil[idx];
  if ((s as any).pcs_vital) delete (s as any).pcs_vital[idx];
  if ((s as any).pcs_react) delete (s as any).pcs_react[idx];
  if ((s as any).pcs_health) delete (s as any).pcs_health[idx];
  if ((s as any).pcs_willpwr) delete (s as any).pcs_willpwr[idx];
  if ((s as any).pcs_shoot) delete (s as any).pcs_shoot[idx];
  if ((s as any).pcs_magik) delete (s as any).pcs_magik[idx];
  if ((s as any).pcs_mana) delete (s as any).pcs_mana[idx];
  if ((s as any).pcs_fog) delete (s as any).pcs_fog[idx];
  if ((s as any).pcs_clone) delete (s as any).pcs_clone[idx];
  if ((s as any).pcs_shield) delete (s as any).pcs_shield[idx];
  if ((s as any).pcs_dambonus) delete (s as any).pcs_dambonus[idx];
  if ((s as any).pcs_init) delete (s as any).pcs_init[idx];
  if ((s as any).pcs_stun) delete (s as any).pcs_stun[idx];
  if ((s as any).pcs_spells) delete (s as any).pcs_spells[idx];
  if ((s as any).pcs_timer) delete (s as any).pcs_timer[idx];
  scene.build();
}

function enterClearPCSArrayPlayer(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_fog = undefined;
  (s as any).pcs_clone = undefined;
  (s as any).pcs_shield = undefined;
  (s as any).pcs_stun = undefined;
  scene.build();
}

function enterRandomOpp(s: GameState, scene: SceneBuilder): void {
  (s as any).OppDiffBonus = ((s as any).locArgs?.[1] ?? 0);
  (s as any).i = 0;
  ((s as any).opp_name = (s as any).opp_name ?? {})[String((s as any).i ?? 0)] = 'Opponent 1';
  ((s as any).opp_image = (s as any).opp_image ?? {})[String((s as any).i ?? 0)] = 'images/locations/shared/street/mugger.jpg';
  ((s as any).opp_def = (s as any).opp_def ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_run = (s as any).opp_run ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_wrstlng = (s as any).opp_wrstlng ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_kick = (s as any).opp_kick ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_punch = (s as any).opp_punch ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_jab = (s as any).opp_jab ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_stren = (s as any).opp_stren ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_agil = (s as any).opp_agil ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_vital = (s as any).opp_vital ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_health = (s as any).opp_health ?? {})[String((s as any).i ?? 0)] = (((s as any).opp_vital ?? 0) * 10 + ((s as any).opp_stren ?? 0) * 5);
  ((s as any).opp_react = (s as any).opp_react ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_willpwr = (s as any).opp_willpwr ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  ((s as any).opp_shoot = (s as any).opp_shoot ?? {})[String((s as any).i ?? 0)] = (Math.floor(Math.random() * (50 - 1 + 1)) + (1));
  (s as any).OppDiffBonus = undefined;
  (s as any).i = undefined;
  scene.build();
}

function enterApplyDamage(s: GameState, scene: SceneBuilder): void {
  const tType = (s as any).locArgs?.[1] ?? '';
  const tNum = (s as any).locArgs?.[2] ?? 0;
  const damage = Number((s as any).locArgs?.[3] ?? 0);
  const shield = fv(s, tType, 'shield', tNum);
  (s as any).fightAppDam = {
    TargetType: tType,
    TargetNumber: tNum,
    Damage: damage,
    TargetName: fstr(s, tType, 'name', tNum),
    Shield: shield,
    OverShieldDamage: damage - shield,
  };
  const clone = fv(s, tType, 'clone', tNum);
  const name = (s as any).fightAppDam.TargetName;
  if (clone > 0) {
    fset(s, tType, 'clone', tNum, clone - 1);
    scene.text(name === 'you' ? `"you lose a clone."` : `"${name} loses a clone."`);
  } else if (shield >= damage) {
    fset(s, tType, 'shield', tNum, shield - damage);
    scene.text(name === 'you' ? `"you lose ${damage} defense."` : `"${name} loses ${damage} defense."`);
  } else {
    if (shield > 0) {
      fset(s, tType, 'shield', tNum, 0);
      scene.text(name === 'you' ? `"you lose ${shield} defense."` : `"${name} losses ${shield} defense."`);
    }
    const health = fv(s, tType, 'health', tNum);
    const over = (s as any).fightAppDam.OverShieldDamage;
    if (health > over) {
      fset(s, tType, 'health', tNum, health - over);
    } else {
      fset(s, tType, 'health', tNum, 0);
    }
    scene.text(name === 'you' ? `"you lose ${over} health."` : `"${name} loses ${over} health."`);
  }
  (s as any).fightAppDam = undefined;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).inFight = 1;
  qspCall(s, 'themes', 'indoors');
  if (Object.keys((s as any).pcs_health ?? {}).length > Object.keys((s as any).opp_health ?? {}).length) {
    (s as any).tableSize = 0;
  } else {
    (s as any).tableSize = 0;
  }
  (s as any).HTMLText = '<table border=1>\n<tr>\n<th align="left"><b><font size=18>Allies</font></b></td>\n<th align="center" valign="center" rowspan=' + ((s as any).tableSize ?? 0) * 2 + 1 + ' ><b><font size=18>vs.</font></b></center></td>\n<th align="right"><b><font size=18>Opponents</font></b></td>\n</tr>';
  (s as any).i = 0;
  while (true) {
    if (((s as any).i ?? 0) < ((s as any).tableSize ?? 0)) {
      (s as any).HTMLText = ((s as any).HTMLText ?? 0) + ('\n<tr>\n<td align="left"><img HEIGHT=300 src="' + (((s as any).pcs_image ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '"></left></td>\n<td align="right"><img HEIGHT=300 src="' + (((s as any).opp_image ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '"></right></td>\n</tr>\n<tr>\n<td align="left"><b><font size=10>' + (((s as any).pcs_name ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '</font></b></left></td>\n<td align="right"><b><font size=10>' + (((s as any).opp_name ?? 0)?.[String((s as any).i ?? 0)] ?? 0) + '</font></b></right></td>\n</tr>');
      (s as any).i = ((s as any).i ?? 0) + (1);
      continue;
    }
    break;
  }
  (s as any).HTMLText = ((s as any).HTMLText ?? 0) + ('</table>');
  (s as any).i = 0;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).pcs_health ?? {}).length) {
      ((s as any).pcs_timer = (s as any).pcs_timer ?? {})[String((s as any).i ?? 0)] = 60 - ((((s as any).pcs_react ?? 0)?.[String((s as any).i ?? 0)] ?? 0)/2);
      (s as any).i = ((s as any).i ?? 0) + (1);
      continue;
    }
    break;
  }
  (s as any).i = 0;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
      ((s as any).opp_timer = (s as any).opp_timer ?? {})[String((s as any).i ?? 0)] = 60 - ((((s as any).opp_react ?? 0)?.[String((s as any).i ?? 0)] ?? 0)/2);
      (s as any).i = ((s as any).i ?? 0) + (1);
      continue;
    }
    break;
  }
  (s as any).fight_start = 1;
  (s as any).HTMLText = undefined;
  (s as any).tableSize = undefined;
  (s as any).i = undefined;
  scene.actions([
    { label: 'Fight!', goto: ['fight', 'main'] },
  ]);
  scene.build();
}

function enterFindActiveTimer(s: GameState, scene: SceneBuilder): void {
  (s as any).fightTimType = 'player';
  (s as any).fightTimNum = 0;
  (s as any).fightTimLow = 99999;
  (s as any).i = 0;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).pcs_timer ?? {}).length) {
      if (((s as any).pcs_stun ?? 0)?.[String((s as any).i ?? 0)] > 0) {
        ((s as any).pcs_stun = (s as any).pcs_stun ?? {})[String((s as any).i ?? 0)] = ((s as any).pcs_stun[String((s as any).i ?? 0)] ?? 0) - (1);
      } else {
        if (((s as any).pcs_health ?? 0)?.[String((s as any).i ?? 0)] > 0) {
          if (((s as any).pcs_timer ?? 0)?.[String((s as any).i ?? 0)] < ((s as any).fightTimLow ?? 0)) {
            (s as any).fightTimLow = (((s as any).pcs_timer ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
            (s as any).fightTimNum = ((s as any).i ?? 0);
          }
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      continue;
    }
    break;
  }
  (s as any).i = 0;
  while (true) {
    if (((s as any).i ?? 0) < Object.keys((s as any).opp_timer ?? {}).length) {
      if (((s as any).opp_stun ?? 0)?.[String((s as any).i ?? 0)] > 0) {
        ((s as any).opp_stun = (s as any).opp_stun ?? {})[String((s as any).i ?? 0)] = ((s as any).opp_stun[String((s as any).i ?? 0)] ?? 0) - (1);
      } else {
        if (((s as any).opp_health ?? 0)?.[String((s as any).i ?? 0)] > 0) {
          if (((s as any).opp_timer ?? 0)?.[String((s as any).i ?? 0)] < ((s as any).fightTimLow ?? 0)) {
            (s as any).fightTimLow = (((s as any).opp_timer ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
            (s as any).fightTimNum = ((s as any).i ?? 0);
            (s as any).fightTimType = 'opponent';
          }
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      continue;
    }
    break;
  }
  (s as any).i = undefined;
  scene.build();
}

function enterMain(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fight_start ?? 0) === 1) {
    (s as any).fight_start = 0;
    if (((s as any).spellavtoklon ?? 0) === 1) {
      ((s as any).pcs_clone = (s as any).pcs_clone ?? {})[0] = 3;
    }
    if (((s as any).spellbefshild ?? 0) === 1) {
      ((s as any).pcs_shield = (s as any).pcs_shield ?? {})[0] = 500;
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterResultCheck(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFindActiveTimer(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspGoto(s, 'fight', ((s as any).fightTimType ?? ''), ((s as any).fightTimNum ?? ''));
  scene.build();
}

function enterPrintStats(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightPStats = (s as any).fightPStats ?? {})['CharType'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).i = ((s as any).locArgs?.[2] ?? 0);
  if (((s as any).fightPStats ?? 0)?.['CharType'] === 'opp') {
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Name'] = (((s as any).opp_name ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Health'] = (((s as any).opp_health ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Mana'] = (((s as any).opp_mana ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Willpower'] = (((s as any).opp_willpwr ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Shield'] = (((s as any).opp_shield ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Fog'] = (((s as any).opp_fog ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Clone'] = (((s as any).opp_clone ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Stun'] = (((s as any).opp_stun ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Timer'] = (((s as any).opp_timer ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Image'] = (((s as any).opp_image ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
  } else {
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Name'] = (((s as any).pcs_name ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Health'] = (((s as any).pcs_health ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Mana'] = (((s as any).pcs_mana ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Willpower'] = (((s as any).pcs_willpwr ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Shield'] = (((s as any).pcs_shield ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Fog'] = (((s as any).pcs_fog ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Clone'] = (((s as any).pcs_clone ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Stun'] = (((s as any).pcs_stun ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Timer'] = (((s as any).pcs_timer ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
    ((s as any).fightPStats = (s as any).fightPStats ?? {})['Image'] = (((s as any).pcs_image ?? 0)?.[String((s as any).i ?? 0)] ?? 0);
  }
  (s as any).fightStatRowText = '\n<tr>\n<td rowspan=4 align=right valign=center>\n<img HEIGHT=70 src=\'' + (((s as any).fightPStats ?? 0)?.['Image']) + '\'>\n<br> <b>' + (((s as any).fightPStats ?? 0)?.['Name']) + '</b>\n</td>\n<td align=right> Life </td>\n<td align=right> <b><font color = red>' + (((s as any).fightPStats ?? 0)?.['Health']) + '</font></b> </td>\n<td rowspan=4 align=left valign=center>';
  if (((s as any).fightPStats ?? 0)?.['Shield'] > 0) {
    (s as any).fightStatRowText = ((s as any).fightStatRowText ?? '') + '<b><font color = purple>Protection ' + (((s as any).fightPStats ?? 0)?.['Shield']) + ' units</font></b><br>';
  }
  if (((s as any).fightPStats ?? 0)?.['Clone'] > 0) {
    (s as any).fightStatRowText = ((s as any).fightStatRowText ?? '') + '<b><font color = purple>Clones active ' + (((s as any).fightPStats ?? 0)?.['Clone']) + ' </font></b><br>';
  }
  if (((s as any).fightPStats ?? 0)?.['Fog'] > 0) {
    (s as any).fightStatRowText = ((s as any).fightStatRowText ?? '') + '<b><font color = purple>Obscuring Fog ' + (((s as any).fightPStats ?? 0)?.['Fog']) + ' units</font></b><br>';
  }
  if (((s as any).fightPStats ?? 0)?.['Stun'] > 0) {
    (s as any).fightStatRowText = ((s as any).fightStatRowText ?? '') + '<b><font color = purple>Stunned ' + (((s as any).fightPStats ?? 0)?.['Stun']) + ' rounds</font></b>';
  }
  (s as any).fightStatRowText = ((s as any).fightStatRowText ?? 0) + ('\n</td>\n</tr>\n<tr>\n<td align=right> Mana </td>\n<td align=right> <b><font color= blue>' + (((s as any).fightPStats ?? 0)?.['Mana']) + '</font></b> </td>\n</tr>\n<tr>\n<td align=right> Willpower </td>\n<td align=right> <b><font color = green>' + (((s as any).fightPStats ?? 0)?.['Willpower']) + '</font></b> </td>\n</tr>\n<tr>\n<td align=right> Initiative </td>\n<td align=right> <b><font color = orange>' + (((s as any).fightPStats ?? 0)?.['Timer']) + '</font></b> </td>\n</tr><tr><td colspan=4 bgcolor=grey></td></tr>');
  (s as any).result = ((s as any).fightStatRowText ?? 0);
  (s as any).i = undefined;
  (s as any).fightPStats = undefined;
  (s as any).fightPStats = undefined;
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  let fightStatText = '\n<table border=1><th colspan=4><b><font size=12>Opponents</font></b></th>\n';
  let j = 0;
  while (j < Object.keys((s as any).opp_health ?? {}).length) {
    fightStatText += qspFunc(s, 'fight', 'printStats', 'opp', j);
    j++;
  }
  fightStatText += '</table>';
  scene.text(qspFunc(s, 'cleanHTML', fightStatText));
  scene.nl();
  fightStatText = '\n<table border=1><th colspan=4><b><font size=12>Opponents</font></b></th>\n';
  j = 0;
  while (j < Object.keys((s as any).pcs_health ?? {}).length) {
    fightStatText += qspFunc(s, 'fight', 'printStats', 'pcs', j);
    j++;
  }
  fightStatText += '</table>';
  scene.text(qspFunc(s, 'cleanHTML', fightStatText));
  scene.build();
}

function enterResultCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['win_fights'] === 1) {
    qspGoto(s, 'ender', 'win');
  }
  if (qspFunc(s, 'fight', 'AvailableTargets', 'pcs') === 0) {
    scene.text('<b><font color = red> You lost!</font></b>');
    qspGoto(s, 'ender', 'loss');
  } else {
    if (qspFunc(s, 'fight', 'AvailableTargets', 'opp') === 0) {
      scene.text('<b><font color = green> You won!</font></b>');
      qspGoto(s, 'ender', 'win');
    } else {
      if (((s as any).pcs_willpwr ?? 0) <= 0) {
        scene.text('<b><font color = red> You cannot summon the will to fight!</font></b>');
        qspGoto(s, 'ender', 'loss');
      }
    }
  }
  (s as any).i = undefined;
  ((s as any).AttackType = (s as any).AttackType ?? {})[0] = 'Kick';
  ((s as any).AttackSkill = (s as any).AttackSkill ?? {})[0] = 'kick';
  ((s as any).AttackMin = (s as any).AttackMin ?? {})[0] = 5;
  ((s as any).AttackMax = (s as any).AttackMax ?? {})[0] = 8;
  ((s as any).AttackTime = (s as any).AttackTime ?? {})[0] = 40;
  ((s as any).AttackType = (s as any).AttackType ?? {})[1] = 'Hard Punch';
  ((s as any).AttackSkill = (s as any).AttackSkill ?? {})[1] = 'punch';
  ((s as any).AttackMin = (s as any).AttackMin ?? {})[1] = 4;
  ((s as any).AttackMax = (s as any).AttackMax ?? {})[1] = 6;
  ((s as any).AttackTime = (s as any).AttackTime ?? {})[1] = 30;
  ((s as any).AttackType = (s as any).AttackType ?? {})[2] = 'Jab';
  ((s as any).AttackSkill = (s as any).AttackSkill ?? {})[2] = 'jab';
  ((s as any).AttackMin = (s as any).AttackMin ?? {})[2] = 2;
  ((s as any).AttackMax = (s as any).AttackMax ?? {})[2] = 3;
  ((s as any).AttackTime = (s as any).AttackTime ?? {})[2] = 15;
  scene.build();
}

function enterAttack(s: GameState, scene: SceneBuilder): void {
  const typeStr = (s as any).locArgs?.[1] ?? '';
  const type = arrPos(s, 'AttackType', typeStr);
  const tType = (s as any).locArgs?.[2] ?? '';
  const tNum = (s as any).locArgs?.[3] ?? 0;
  const atkNum = (s as any).locArgs?.[4] ?? 0;
  (s as any).fightAtk_Type_str = typeStr;
  (s as any).fightAtk_Type = type;
  (s as any).fightAtk_TargetType = tType;
  (s as any).fightAtk_TargetNumber = tNum;
  (s as any).fightAtk_AttackerNumber = atkNum;
  if (tType === 'opp' && !atkNum) {
    (s as any).fightAtk_AttackerType = 'pcs';
    (s as any).fightAtk = { DefenderName: fstr(s, 'opp', 'name', tNum), AttackerName: 'You' };
    qspCall(s, 'exp_gain', '', (s as any).AttackSkill?.[type] ?? '', rand(1, 3));
    qspCall(s, 'exp_gain', 'def', rand(0, 2));
  } else if (tType === 'opp') {
    (s as any).fightAtk = { AttackerName: fstr(s, 'pcs', 'name', atkNum), DefenderName: fstr(s, 'opp', 'name', tNum) };
    (s as any).fightAtk_AttackerType = 'pcs';
  } else {
    (s as any).fightAtk_AttackerType = 'opp';
    (s as any).fightAtk = { AttackerName: fstr(s, 'opp', 'name', atkNum), DefenderName: fstr(s, 'pcs', 'name', tNum) };
  }
  const atkType = (s as any).fightAtk_AttackerType;
  const skill = (s as any).AttackSkill?.[type] ?? '';
  (s as any).fightAtk.AttackerSkillValue = fv(s, atkType, skill, atkNum);
  (s as any).fightAtk.TargetReactValue = fv(s, tType, 'stun', tNum) > 0 ? 0 : fv(s, tType, 'react', tNum);
  (s as any).fightAtk.TargetAgilValue = fv(s, tType, 'stun', tNum) > 0 ? 0 : fv(s, tType, 'agil', tNum);
  (s as any).fightAtk.TargetHealthBefore = fv(s, tType, 'health', tNum);
  (s as any).fightAtk.MinDamage = (s as any).AttackMin?.[type] ?? 0;
  (s as any).fightAtk.MaxDamage = (s as any).AttackMax?.[type] ?? 0;
  if (tType === 'opp' && !atkNum) {
    scene.text(`You attempt to ${typeStr} ${(s as any).fightAtk.DefenderName}!`);
  } else {
    scene.text(`${(s as any).fightAtk.AttackerName} attempts to ${typeStr} ${(s as any).fightAtk.DefenderName}!`);
  }
  scene.nl();
  if (fv(s, tType, 'fog', tNum) > 0) {
    const fogRedDmgMax = rand(0, (s as any).fightAtk.MaxDamage - (s as any).fightAtk.MinDamage) + (s as any).fightAtk.MinDamage;
    const fogRedDmgMin = rand(0, (s as any).fightAtk.MinDamage);
    (s as any).fightAtk.MaxDamage -= fogRedDmgMax;
    (s as any).fightAtk.MinDamage -= fogRedDmgMin;
    (s as any).fightAtk.Damage = rand((s as any).fightAtk.MinDamage, (s as any).fightAtk.MaxDamage);
    if ((s as any).fightAtk.MaxDamage < (s as any).fightAtk.MinDamage) {
      (s as any).fightAtk.MaxDamage = (s as any).fightAtk.MinDamage;
    }
    fset(s, tType, 'fog', tNum, fv(s, tType, 'fog', tNum) - rand(1, 5));
  }
  if (fv(s, tType, 'fog', tNum) < 0) {
    fset(s, tType, 'fog', tNum, 0);
  }
  if ((s as any).fightAtk.AttackerSkillValue + rand(0, 40) > (s as any).fightAtk.TargetReactValue / 4 + 3 * (s as any).fightAtk.TargetAgilValue / 4) {
    (s as any).fightAtk.Damage = fv(s, atkType, 'stren', atkNum) * rand((s as any).fightAtk.MinDamage, (s as any).fightAtk.MaxDamage) / 3;
    { const __saved = (s as any).locArgs; (s as any).locArgs = ['', tType, tNum, (s as any).fightAtk.Damage]; enterApplyDamage(s, scene); (s as any).locArgs = __saved; }
  } else if (rand(0, 3) !== 0) {
    if (tType === 'pcs' && !atkNum) {
      scene.text('You avoid the blow.');
    } else {
      scene.text(`${(s as any).fightAtk.DefenderName} avoids the blow.`);
    }
  } else {
    { const __saved = (s as any).locArgs; (s as any).locArgs = ['', tType, tNum, (s as any).fightAtk.Damage ?? 0]; enterApplyDamage(s, scene); (s as any).locArgs = __saved; }
  }
  (s as any).fightAtk.TargetHealthLoss = (s as any).fightAtk.TargetHealthBefore - fv(s, tType, 'health', tNum);
  if ((s as any).fightAtk.TargetHealthLoss * 2 > (s as any).fightAtk.TargetHealthBefore) {
    { const __saved = (s as any).locArgs; (s as any).locArgs = ['']; enterDevastating(s, scene); (s as any).locArgs = __saved; }
  } else if ((s as any).fightAtk.TargetHealthLoss > 50) {
    { const __saved = (s as any).locArgs; (s as any).locArgs = ['']; enterHard(s, scene); (s as any).locArgs = __saved; }
  } else if ((s as any).fightAtk.TargetHealthLoss > 0) {
    { const __saved = (s as any).locArgs; (s as any).locArgs = ['']; enterLight(s, scene); (s as any).locArgs = __saved; }
  } else {
    if (tType === 'pcs' && tNum === 0) {
      scene.text('You avoid their attack.');
    } else {
      scene.text('They avoid your attack.');
    }
  }
  fadd(s, atkType, 'timer', atkNum, (s as any).AttackTime?.[type] ?? 0);
  scene.curActs.length = 0;
  scene.action({ label: 'Next', goto: ['fight', 'main'] });
  (s as any).fightAtk = undefined;
  (s as any).fightAtk_Type = undefined;
  (s as any).fightAtk_TargetType = undefined;
  (s as any).fightAtk_TargetNumber = undefined;
  (s as any).fightAtk_AttackerNumber = undefined;
  scene.build();
}

function enterDevastating(s: GameState, scene: SceneBuilder): void {
  const tType = (s as any).fightAtk_TargetType;
  const tNum = (s as any).fightAtk_TargetNumber;
  const type = (s as any).fightAtk_Type;
  const isPcs = tType === 'pcs' && tNum === 0;
  let bodypart = '';
  if (type === 0) {
    bodypart = rand(0, 2) === 0 ? 'head' : 'stomach';
    if (isPcs) {
      scene.text(`They land a devastating kick to your ${bodypart}. You are stunned.`);
      if (bodypart === 'head') qspCall(s, 'pain', '', 7, 'head', 'kick');
      else qspCall(s, 'pain', '', 7, 'tummy', 'kick');
    } else {
      scene.text(`You deliver a devastating kick to their ${bodypart}. ${(s as any).fightAtk.DefenderName} is stunned.`);
    }
  } else {
    if (rand(0, 3) === 0) bodypart = 'head';
    else if (rand(0, 2) === 0) bodypart = 'chest';
    else if (rand(0, 1) === 0) bodypart = 'ribs';
    else bodypart = 'stomach';
    const verb = type === 1 ? 'punch' : 'jab';
    if (isPcs) {
      scene.text(`They land a devastating ${verb} to your ${bodypart}. You are stunned.`);
      if (bodypart === 'head') qspCall(s, 'pain', '', 7, 'head', 'hit');
      else if (bodypart === 'chest') { qspCall(s, 'pain', '', 5, 'chest', 'hit'); qspCall(s, 'pain', '', 5, 'breast', 'hit'); }
      else if (bodypart === 'ribs') qspCall(s, 'pain', '', 7, 'ribs', 'hit');
      else qspCall(s, 'pain', '', 7, 'tummy', 'hit');
    } else {
      scene.text(`You deliver a devastating ${verb} to their ${bodypart}. ${(s as any).fightAtk.DefenderName} is stunned.`);
    }
  }
  fadd(s, tType, 'stun', tNum, 1);
  fadd(s, tType, 'timer', tNum, (s as any).AttackTime?.[type] ?? 0);
  scene.build();
}

function enterHard(s: GameState, scene: SceneBuilder): void {
  const tType = (s as any).fightAtk_TargetType;
  const tNum = (s as any).fightAtk_TargetNumber;
  const type = (s as any).fightAtk_Type;
  const isPcs = tType === 'pcs' && tNum === 0;
  let bodypart = '';
  if (type === 0) {
    bodypart = rand(0, 2) === 0 ? 'head' : 'stomach';
    if (isPcs) {
      scene.text(`They land a hard kick to your ${bodypart}. You are stunned.`);
      if (bodypart === 'head') qspCall(s, 'pain', '', 4, 'head', 'kick');
      else qspCall(s, 'pain', '', 4, 'tummy', 'kick');
    } else {
      scene.text(`You deliver a hard kick to their ${bodypart}. ${(s as any).fightAtk.DefenderName} is stunned.`);
    }
  } else {
    if (rand(0, 5) === 0) bodypart = 'head';
    else if (rand(0, 5) === 0) bodypart = 'cheeks';
    else if (rand(0, 5) === 0) bodypart = 'nose';
    else if (rand(0, 5) === 0) bodypart = 'mouth';
    else if (rand(0, 2) === 0) bodypart = 'chest';
    else if (rand(0, 1) === 0) bodypart = 'ribs';
    else bodypart = 'stomach';
    const verb = type === 1 ? 'punch' : 'jab';
    const stunned = type === 1 ? ' You are stunned.' : '';
    if (isPcs) {
      scene.text(`They land a hard ${verb} to your ${bodypart}.${stunned}`);
      if (bodypart === 'head') qspCall(s, 'pain', '', 4, 'head', 'hit');
      else if (bodypart === 'cheeks') qspCall(s, 'pain', '', 4, 'cheeks', 'hit');
      else if (bodypart === 'nose') qspCall(s, 'pain', '', 4, 'nose', 'hit');
      else if (bodypart === 'mouth') {
        qspCall(s, 'pain', '', 4, 'mouth', 'hit');
        const rockChance = type === 1 ? 10 : 20;
        if (rand(1, rockChance) === 1) {
          scene.text('You can feel a teeth rock out from the impact.');
          (s as any).pcs_missing_teeth = ((s as any).pcs_missing_teeth ?? 0) + 1;
        }
      }
      else if (bodypart === 'chest') { qspCall(s, 'pain', '', 3, 'chest', 'hit'); qspCall(s, 'pain', '', 3, 'breast', 'hit'); }
      else if (bodypart === 'ribs') qspCall(s, 'pain', '', 4, 'ribs', 'hit');
      else qspCall(s, 'pain', '', 4, 'tummy', 'hit');
    } else {
      scene.text(`You deliver a hard ${verb} to their ${bodypart}. ${(s as any).fightAtk.DefenderName} is stunned.`);
    }
  }
  scene.build();
}

function enterLight(s: GameState, scene: SceneBuilder): void {
  const tType = (s as any).fightAtk_TargetType;
  const tNum = (s as any).fightAtk_TargetNumber;
  const type = (s as any).fightAtk_Type;
  const isPcs = tType === 'pcs' && tNum === 0;
  let bodypart = '';
  if (type === 0) {
    bodypart = rand(0, 2) === 0 ? 'leg' : 'arm';
    if (isPcs) {
      scene.text(`They only manage a glancing kick to your ${bodypart}.`);
      if (bodypart === 'leg') {
        if (rand(0, 1) === 0) qspCall(s, 'pain', '', 1, 'legL', 'kick');
        else qspCall(s, 'pain', '', 1, 'legR', 'kick');
      } else {
        if (rand(0, 1) === 0) qspCall(s, 'pain', '', 1, 'armL', 'kick');
        else qspCall(s, 'pain', '', 1, 'armR', 'kick');
      }
    } else {
      scene.text(`Your kick just glances their ${bodypart}.`);
    }
  } else if (type === 1) {
    if (rand(0, 5) === 0) bodypart = 'leg';
    else if (rand(0, 5) === 0) bodypart = 'arm';
    else if (rand(0, 5) === 0) bodypart = 'nose';
    else if (rand(0, 5) === 0) bodypart = 'mouth';
    else if (rand(0, 2) === 0) bodypart = 'chest';
    else bodypart = 'stomach';
    if (isPcs) {
      scene.text(`They punch you but it just glances your ${bodypart}.`);
      if (bodypart === 'leg') {
        if (rand(0, 1) === 0) qspCall(s, 'pain', '', 1, 'legL', 'kick');
        else qspCall(s, 'pain', '', 1, 'legR', 'kick');
      } else if (bodypart === 'arm') {
        if (rand(0, 1) === 0) qspCall(s, 'pain', '', 1, 'armL', 'kick');
        else qspCall(s, 'pain', '', 1, 'armR', 'kick');
      } else if (bodypart === 'nose') qspCall(s, 'pain', '', 1, 'nose', 'hit');
      else if (bodypart === 'mouth') qspCall(s, 'pain', '', 1, 'mouth', 'hit');
      else if (bodypart === 'chest') { qspCall(s, 'pain', '', 1, 'chest', 'hit'); qspCall(s, 'pain', '', 1, 'breast', 'hit'); }
      else qspCall(s, 'pain', '', 1, 'tummy', 'hit');
    } else {
      scene.text(`You hard punch just glaces their ${bodypart}. ${(s as any).fightAtk.DefenderName} is stunned.`);
    }
  } else {
    if (rand(0, 5) === 0) bodypart = 'head';
    else if (rand(0, 5) === 0) bodypart = 'cheeks';
    else if (rand(0, 5) === 0) bodypart = 'nose';
    else if (rand(0, 5) === 0) bodypart = 'mouth';
    else if (rand(0, 2) === 0) bodypart = 'chest';
    else if (rand(0, 1) === 0) bodypart = 'ribs';
    else bodypart = 'stomach';
    if (isPcs) {
      scene.text(`They jab you but it just glances your ${bodypart}.`);
      if (bodypart === 'head') qspCall(s, 'pain', '', 1, 'head', 'hit');
      else if (bodypart === 'cheeks') qspCall(s, 'pain', '', 1, 'cheeks', 'hit');
      else if (bodypart === 'nose') qspCall(s, 'pain', '', 1, 'nose', 'hit');
      else if (bodypart === 'mouth') qspCall(s, 'pain', '', 1, 'mouth', 'hit');
      else if (bodypart === 'chest') { qspCall(s, 'pain', '', 1, 'chest', 'hit'); qspCall(s, 'pain', '', 1, 'breast', 'hit'); }
      else if (bodypart === 'ribs') qspCall(s, 'pain', '', 1, 'ribs', 'hit');
      else qspCall(s, 'pain', '', 1, 'tummy', 'hit');
    } else {
      scene.text(`Your jab just glaces their ${bodypart}.`);
    }
  }
  scene.build();
}

function enterAvailableTargets(s: GameState, scene: SceneBuilder): void {
  const type = (s as any).locArgs?.[1] ?? '';
  (s as any).fightAvailTarg = [];
  let i = 0;
  const healthArr = (s as any)[type + '_health'] ?? {};
  while (i < Object.keys(healthArr).length) {
    if (fv(s, type, 'health', i) > 0) {
      (s as any).fightAvailTarg.push(i);
    }
    i++;
  }
  (s as any).result = (s as any).fightAvailTarg.length;
  (s as any).i = undefined;
  scene.build();
}

function enterRandomTarget(s: GameState, scene: SceneBuilder): void {
  const type = (s as any).locArgs?.[1] ?? '';
  if (qspFunc(s, 'fight', 'AvailableTargets', type) > 0) {
    const list = (s as any).fightAvailTarg ?? [];
    (s as any).result = list[rand(0, list.length - 1)];
  } else {
    (s as any).result = -1;
  }
  scene.build();
}

function enterFightAlgorithm(s: GameState, scene: SceneBuilder): void {
  const atkType = (s as any).locArgs?.[1] ?? '';
  const atkNum = (s as any).locArgs?.[2] ?? 0;
  const tType = atkType === 'pcs' ? 'opp' : 'pcs';
  const tNum = qspFunc(s, 'fight', 'RandomTarget', tType);
  if (tNum >= 0) {
    let actionMade = 0;
    if (fv(s, atkType, 'magik', atkNum) > 0) {
      const spellsStr = fstr(s, atkType, 'spells', atkNum);
      { const __saved = (s as any).locArgs; (s as any).locArgs = ['', spellsStr]; enterBuildCasterSpellList(s, scene); (s as any).locArgs = __saved; }
      if (fv(s, atkType, 'health', atkNum) < 50) {
        actionMade = qspFunc(s, 'fight', 'spellListCheck', '$comHealSpells', atkType, atkNum, atkType, atkNum);
      }
      if (fv(s, atkType, 'clone', atkNum) === 0 && actionMade === 0) {
        actionMade = qspFunc(s, 'fight', 'spellCheck', 'multiclone', atkType, atkNum, atkType, atkNum);
        if (actionMade === 0) {
          actionMade = qspFunc(s, 'fight', 'spellCheck', 'clone', atkType, atkNum, atkType, atkNum);
        }
      }
      if (fv(s, atkType, 'shield', atkNum) === 0 && actionMade === 0) {
        actionMade = qspFunc(s, 'fight', 'spellListCheck', '$comShldSpells', atkType, atkNum, atkType, atkNum);
      }
      if (actionMade === 0) {
        actionMade = qspFunc(s, 'fight', 'spellListCheck', '$comAtkSpells', tType, tNum, atkType, atkNum);
      }
    }
    if (actionMade === 0) {
      if (rand(0, fv(s, atkType, 'kick', atkNum)) > 40) {
        { const __saved = (s as any).locArgs; (s as any).locArgs = ['', 'Kick', tType, tNum, atkNum]; enterAttack(s, scene); (s as any).locArgs = __saved; }
      } else if (rand(0, fv(s, atkType, 'punch', atkNum)) > 40) {
        { const __saved = (s as any).locArgs; (s as any).locArgs = ['', 'Hard Punch', tType, tNum, atkNum]; enterAttack(s, scene); (s as any).locArgs = __saved; }
      } else {
        { const __saved = (s as any).locArgs; (s as any).locArgs = ['', 'Jab', tType, tNum, atkNum]; enterAttack(s, scene); (s as any).locArgs = __saved; }
      }
    } else {
      fadd(s, atkType, 'timer', atkNum, 50);
    }
  } else {
    qspGoto(s, 'fight', 'main');
  }
  scene.build();
}

function enterOpponent(s: GameState, scene: SceneBuilder): void {
  enterStatDisplay(s, scene);
  { const __saved = (s as any).locArgs; (s as any).locArgs = ['', 'opp', (s as any).locArgs?.[1] ?? 0]; enterFightAlgorithm(s, scene); (s as any).locArgs = __saved; }
  scene.build();
}

function enterPlayer(s: GameState, scene: SceneBuilder): void {
  enterStatDisplay(s, scene);
  const playerNum = (s as any).locArgs?.[2] ?? 0;
  if (playerNum === 0) {
    if ((s as any).start_type?.['magic'] !== 'nomagic') {
      scene.action({
        label: 'Cast a Spell',
        handler: (st: GameState) => {
          st.scene = { ...st.scene, mainText: '', curActs: [] };
          qspCall(st, 'fight', 'spellcast');
        }
      });
    }
    if (qspFunc(s, 'fight', 'AvailableTargets', 'opp') > 0) {
      const availTarg = (s as any).fightAvailTarg ?? [];
      for (let i = 0; i < availTarg.length; i++) {
        const num = availTarg[i];
        const opName = fstr(s, 'opp', 'name', num);
        scene.action({
          label: `Kick ${opName}`,
          handler: (st: GameState) => {
            const sc = new SceneBuilder();
            (st as any).locArgs = ['', 'Kick', 'opp', num, 0];
            enterAttack(st, sc);
            st.scene = sc.build();
            st.navigationVersion++;
          }
        });
        scene.action({
          label: `Punch ${opName} hard`,
          handler: (st: GameState) => {
            const sc = new SceneBuilder();
            (st as any).locArgs = ['', 'Hard Punch', 'opp', num, 0];
            enterAttack(st, sc);
            st.scene = sc.build();
            st.navigationVersion++;
          }
        });
        scene.action({
          label: `Jab ${opName}`,
          handler: (st: GameState) => {
            const sc = new SceneBuilder();
            (st as any).locArgs = ['', 'Jab', 'opp', num, 0];
            enterAttack(st, sc);
            st.scene = sc.build();
            st.navigationVersion++;
          }
        });
      }
    }
    scene.action({ label: 'Surrender', goto: ['ender', 'surrender'] });
  } else {
    { const __saved = (s as any).locArgs; (s as any).locArgs = ['', 'pcs', playerNum]; enterFightAlgorithm(s, scene); (s as any).locArgs = __saved; }
  }
  scene.build();
}

function enterBuildCasterSpellList(s: GameState, scene: SceneBuilder): void {
  (s as any).casterSpellList = [];
  let tmpStr = String((s as any).locArgs?.[1] ?? '').trim();
  while (true) {
    const i = tmpStr.indexOf(',') + 1;
    if (i > 0) {
      (s as any).casterSpellList.push(tmpStr.slice(0, i - 1).trim());
      tmpStr = tmpStr.slice(i).trim();
    } else {
      (s as any).casterSpellList.push(tmpStr.trim());
      break;
    }
  }
  (s as any).i = undefined;
  (s as any).tmpStr = undefined;
  scene.build();
}

function enterSpellCheck(s: GameState, scene: SceneBuilder): void {
  const spellName = (s as any).locArgs?.[1] ?? '';
  const tType = (s as any).locArgs?.[2] ?? '';
  const tNum = (s as any).locArgs?.[3] ?? 0;
  const cType = (s as any).locArgs?.[4] ?? '';
  const cNum = (s as any).locArgs?.[5] ?? 0;
  const casterMana = fv(s, cType, 'mana', cNum);
  if (arrPos(s, 'casterSpellList', spellName) >= 0 && casterMana >= ((s as any).spellMana?.[spellName] ?? 0)) {
    if ((s as any).spellTarget?.[spellName] === 'self') {
      qspCall(s, 'castSpellNPC', spellName, cType, cNum, cType, cNum);
    } else {
      qspCall(s, 'castSpellNPC', spellName, tType, tNum, cType, cNum);
    }
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  (s as any).spellCheckVar = undefined;
  scene.build();
}

function enterSpellListCheck(s: GameState, scene: SceneBuilder): void {
  const arrName = (s as any).locArgs?.[1] ?? '';
  const tType = (s as any).locArgs?.[2] ?? '';
  const tNum = (s as any).locArgs?.[3] ?? 0;
  const cType = (s as any).locArgs?.[4] ?? '';
  const cNum = (s as any).locArgs?.[5] ?? 0;
  const arr = (s as any)[arrName.replace(/^\$/, '')] ?? {};
  let i = 0;
  let actionMade1 = 0;
  while (i < Object.keys(arr).length && actionMade1 === 0) {
    actionMade1 = qspFunc(s, 'fight', 'spellCheck', String(arr[i]), tType, tNum, cType, cNum);
    i++;
  }
  (s as any).result = actionMade1;
  (s as any).ActionMade1 = undefined;
  scene.build();
}

function enterSpellcast(s: GameState, scene: SceneBuilder): void {
  scene.curActs.length = 0;
  scene.action({ label: 'Next', goto: ['fight', 'main'] });
  qspFunc(s, 'spellBook', 'targetable', '$combatSpells', "gt 'fight', 'main'", 'pcs_timer[0] += 50');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'initFight':
      enterInitFight(s, scene);
      break;
    case 'clearPCSArray':
      enterClearPCSArray(s, scene);
      break;
    case 'clearPCSArrayPlayer':
      enterClearPCSArrayPlayer(s, scene);
      break;
    case 'randomOpp':
      enterRandomOpp(s, scene);
      break;
    case 'applyDamage':
      enterApplyDamage(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'findActiveTimer':
      enterFindActiveTimer(s, scene);
      break;
    case 'main':
      enterMain(s, scene);
      break;
    case 'printStats':
      enterPrintStats(s, scene);
      break;
    case 'statDisplay':
      enterStatDisplay(s, scene);
      break;
    case 'result_check':
      enterResultCheck(s, scene);
      break;
    case 'Attack':
      enterAttack(s, scene);
      break;
    case 'devastating':
      enterDevastating(s, scene);
      break;
    case 'hard':
      enterHard(s, scene);
      break;
    case 'light':
      enterLight(s, scene);
      break;
    case 'AvailableTargets':
      enterAvailableTargets(s, scene);
      break;
    case 'RandomTarget':
      enterRandomTarget(s, scene);
      break;
    case 'fightAlgorithm':
      enterFightAlgorithm(s, scene);
      break;
    case 'opponent':
      enterOpponent(s, scene);
      break;
    case 'player':
      enterPlayer(s, scene);
      break;
    case 'buildCasterSpellList':
      enterBuildCasterSpellList(s, scene);
      break;
    case 'spellCheck':
      enterSpellCheck(s, scene);
      break;
    case 'spellListCheck':
      enterSpellListCheck(s, scene);
      break;
    case 'spellcast':
      enterSpellcast(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fight: LocationDef = {
  name: 'fight',
  title: '<b><font color = red> You lost!</font></b>',
  region: 'other',
  enter: enter,
};
