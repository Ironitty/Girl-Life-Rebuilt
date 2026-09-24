import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitFight(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClearPCSArrayPlayer(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).temp_clear_check = 0;
  // TODO-QSP: :ClearAllyLoop
  if (((s as any).temp_clear_check ?? 0) > 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).temp_clear_check ?? 0) - 1]; enterClearPCSArray(s, scene); (s as any).locArgs = __savedLocArgs; }
    (s as any).temp_clear_check = ((s as any).temp_clear_check ?? 0) - (1);
    // TODO-QSP: jump 'ClearAllyLoop'
  }
  // TODO-QSP: $pcs_name[0] = 'You'
  if (String((s as any).locArgs?.[1] ?? '') === 1) {
    // TODO-QSP: $pcs_image[0] = 'images/system/1_openings/1_tf/mikhail_1.jpg'
  } else {
    // TODO-QSP: $pcs_image[0] = $func('$face_image')
  }
  // TODO-QSP: end
  scene.build();
}

function enterClearPCSArray(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterClearPCSArrayPlayer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRandomOpp(s: GameState, scene: SceneBuilder): void {
  (s as any).OppDiffBonus = ((s as any).locArgs?.[1] ?? 0);
  (s as any).i = 0;
  // TODO-QSP: $opp_name[i] = 'Opponent 1'
  // TODO-QSP: $opp_image[i] = 'images/locations/shared/street/mugger.jpg'
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
  // TODO-QSP: end
  scene.build();
}

function enterApplyDamage(s: GameState, scene: SceneBuilder): void {
  ((s as any).fightAppDam = (s as any).fightAppDam ?? {})['TargetType'] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).fightAppDam = (s as any).fightAppDam ?? {})['TargetNumber'] = ((s as any).locArgs?.[2] ?? 0);
  ((s as any).fightAppDam = (s as any).fightAppDam ?? {})['Damage'] = ((s as any).locArgs?.[3] ?? 0);
  ((s as any).fightAppDam = (s as any).fightAppDam ?? {})['TargetName'] = 0;
  ((s as any).fightAppDam = (s as any).fightAppDam ?? {})['Shield'] = 0;
  ((s as any).fightAppDam = (s as any).fightAppDam ?? {})['OverShieldDamage'] = 0;
  // TODO-QSP: dynamic "
  if (((s as any)[((s as any).fightAppDam ?? {})['TargetType'] + '_clone'] ?? 0)?.[((s as any).fightAppDam ?? 0)?.['TargetNumber']] > 0) {
    // TODO-QSP: <<$fightAppDam['TargetType']>>_clone[<<fightAppDam['TargetNumber']>>] -= 1
    if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
      // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose a clone.""
    } else {
      // TODO-QSP: ""<<$fightAppDam['TargetName']>> loses a clone.""
    }
  } else {
    if (((s as any)[((s as any).fightAppDam ?? {})['TargetType'] + '_shield'] ?? 0)?.[((s as any).fightAppDam ?? 0)?.['TargetNumber']] >= ((s as any).fightAppDam ?? 0)?.['Damage']) {
      // TODO-QSP: <<$fightAppDam['TargetType']>>_shield[<<fightAppDam['TargetNumber']>>] -= <<fightAppDam['Damage']>>
      if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
        // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose <<fightAppDam['Damage']>> defense.""
      } else {
        // TODO-QSP: ""<<$fightAppDam['TargetName']>> loses <<fightAppDam['Damage']>> defense.""
      }
    } else {
      if (((s as any)[((s as any).fightAppDam ?? {})['TargetType'] + '_shield'] ?? 0)?.[((s as any).fightAppDam ?? 0)?.['TargetNumber']] > 0) {
        // TODO-QSP: <<$fightAppDam['TargetType']>>_shield[<<fightAppDam['TargetNumber']>>] = 0
        if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
          // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose <<fightAppDam['Shield']>> defense.""
        } else {
          // TODO-QSP: ""<<$fightAppDam['TargetName']>> losses <<fightAppDam['Shield']>> defense.""
        }
      }
      if (((s as any)[((s as any).fightAppDam ?? {})['TargetType'] + '_health'] ?? 0)?.[((s as any).fightAppDam ?? 0)?.['TargetNumber']] > ((s as any).fightAppDam ?? 0)?.['OverShieldDamage']) {
        // TODO-QSP: <<$fightAppDam['TargetType']>>_health[<<fightAppDam['TargetNumber']>>] -= <<fightAppDam['OverShieldD...
      } else {
        // TODO-QSP: <<$fightAppDam['TargetType']>>_health[<<fightAppDam['TargetNumber']>>] = 0
      }
      if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
        // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose <<fightAppDam['OverShieldDamage']>> health.""
      } else {
        // TODO-QSP: ""<<$fightAppDam['TargetName']>> loses <<fightAppDam['OverShieldDamage']>> health.""
      }
    }
  }
  // TODO-QSP: "
  // TODO-QSP: end
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
  // TODO-QSP: </tr>'
  (s as any).i = 0;
  // TODO-QSP: :FightPoster
  if (((s as any).i ?? 0) < ((s as any).tableSize ?? 0)) {
    // TODO-QSP: $HTMLText += '
    // TODO-QSP: <tr>
    // TODO-QSP: <td align="left"><img HEIGHT=300 src="<<$pcs_image[i]>>"></left></td>
    // TODO-QSP: <td align="right"><img HEIGHT=300 src="<<$opp_image[i]>>"></right></td>
    // TODO-QSP: </tr>
    // TODO-QSP: <tr>
    // TODO-QSP: <td align="left"><b><font size=10><<$pcs_name[i]>></font></b></left></td>
    // TODO-QSP: <td align="right"><b><font size=10><<$opp_name[i]>></font></b></right></td>
    // TODO-QSP: </tr>'
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'FightPoster'
  }
  // TODO-QSP: $HTMLText += '</table>'
  (s as any).i = 0;
  // TODO-QSP: :PCSTimerInit
  if (((s as any).i ?? 0) < Object.keys((s as any).pcs_health ?? {}).length) {
    ((s as any).pcs_timer = (s as any).pcs_timer ?? {})[String((s as any).i ?? 0)] = 60 - ((((s as any).pcs_react ?? 0)?.[String((s as any).i ?? 0)] ?? 0)/2);
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'PCSTimerInit'
  }
  (s as any).i = 0;
  // TODO-QSP: :OppTimerInit
  if (((s as any).i ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
    ((s as any).opp_timer = (s as any).opp_timer ?? {})[String((s as any).i ?? 0)] = 60 - ((((s as any).opp_react ?? 0)?.[String((s as any).i ?? 0)] ?? 0)/2);
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'OppTimerInit'
  }
  (s as any).fight_start = 1;
  // TODO-QSP: end
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
  // TODO-QSP: :LowTimerLoop1
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
    // TODO-QSP: jump 'LowTimerLoop1'
  }
  (s as any).i = 0;
  // TODO-QSP: :LowTimerLoop2
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
    // TODO-QSP: jump 'LowTimerLoop2'
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: <td rowspan=4 align=left valign=center>"
  if (((s as any).fightPStats ?? 0)?.['Shield'] > 0) {
    // TODO-QSP: $fightStatRowText += "<b><font color = purple>Protection <<fightPStats['Shield']>> units</font></b><...
  }
  if (((s as any).fightPStats ?? 0)?.['Clone'] > 0) {
    // TODO-QSP: $fightStatRowText += "<b><font color = purple>Clones active <<fightPStats['Clone']>> </font></b><br>...
  }
  if (((s as any).fightPStats ?? 0)?.['Fog'] > 0) {
    // TODO-QSP: $fightStatRowText += "<b><font color = purple>Obscuring Fog <<fightPStats['Fog']>> units</font></b><...
  }
  if (((s as any).fightPStats ?? 0)?.['Stun'] > 0) {
    // TODO-QSP: $fightStatRowText += "<b><font color = purple>Stunned <<fightPStats['Stun']>> rounds</font></b>"
  }
  // TODO-QSP: $fightStatRowText += "
  // TODO-QSP: </td>
  // TODO-QSP: </tr>
  // TODO-QSP: <tr>
  // TODO-QSP: <td align=right> Mana </td>
  // TODO-QSP: <td align=right> <b><font color= blue><<fightPStats['Mana']>></font></b> </td>
  // TODO-QSP: </tr>
  // TODO-QSP: <tr>
  // TODO-QSP: <td align=right> Willpower </td>
  // TODO-QSP: <td align=right> <b><font color = green><<fightPStats['Willpower']>></font></b> </td>
  // TODO-QSP: </tr>
  // TODO-QSP: <tr>
  // TODO-QSP: <td align=right> Initiative </td>
  // TODO-QSP: <td align=right> <b><font color = orange><<fightPStats['Timer']>></font></b> </td>
  // TODO-QSP: </tr><tr><td colspan=4 bgcolor=grey></td></tr>"
  (s as any).result = ((s as any).fightStatRowText ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "
  (s as any).j = 0;
  // TODO-QSP: :OppLoopRC1
  if (((s as any).j ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
    // TODO-QSP: $fightStatText += func('fight', 'printStats', 'opp', j)
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'OppLoopRC1'
  }
  // TODO-QSP: $fightStatText += "</table>"
  // TODO-QSP: "
  (s as any).j = 0;
  // TODO-QSP: :PCSLoopRC1
  if (((s as any).j ?? 0) < Object.keys((s as any).pcs_health ?? {}).length) {
    // TODO-QSP: $fightStatText += func('fight', 'printStats', 'pcs', j)
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'PCSLoopRC1'
  }
  // TODO-QSP: $fightStatText += "</table>"
  // TODO-QSP: end
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
  // TODO-QSP: end
  // TODO-QSP: $AttackType[0] = 'Kick'
  // TODO-QSP: $AttackSkill[0] = 'kick'
  ((s as any).AttackMin = (s as any).AttackMin ?? {})[0] = 5;
  ((s as any).AttackMax = (s as any).AttackMax ?? {})[0] = 8;
  ((s as any).AttackTime = (s as any).AttackTime ?? {})[0] = 40;
  // TODO-QSP: $AttackType[1] = 'Hard Punch'
  // TODO-QSP: $AttackSkill[1] = 'punch'
  ((s as any).AttackMin = (s as any).AttackMin ?? {})[1] = 4;
  ((s as any).AttackMax = (s as any).AttackMax ?? {})[1] = 6;
  ((s as any).AttackTime = (s as any).AttackTime ?? {})[1] = 30;
  // TODO-QSP: $AttackType[2] = 'Jab'
  // TODO-QSP: $AttackSkill[2] = 'jab'
  ((s as any).AttackMin = (s as any).AttackMin ?? {})[2] = 2;
  ((s as any).AttackMax = (s as any).AttackMax ?? {})[2] = 3;
  ((s as any).AttackTime = (s as any).AttackTime ?? {})[2] = 15;
  scene.build();
}

function enterAttack(s: GameState, scene: SceneBuilder): void {
  (s as any).fightAtk_Type_str = ((s as any).locArgs?.[1] ?? 0);
  (s as any).fightAtk_Type = qspUntranslated(s, "arrpos('AttackType', fightAtk_Type_str)", { location: "fight" });
  (s as any).fightAtk_TargetType = ((s as any).locArgs?.[2] ?? 0);
  (s as any).fightAtk_TargetNumber = ((s as any).locArgs?.[3] ?? 0);
  (s as any).fightAtk_AttackerNumber = ((s as any).locArgs?.[4] ?? 0);
  if (((s as any).fightAtk_TargetType ?? 0) === 'opp'  &&  (!((s as any).fightAtk_AttackerNumber ?? 0))) {
    (s as any).fightAtk_AttackerType = 'pcs';
    ((s as any).fightAtk = (s as any).fightAtk ?? {})['DefenderName'] = (((s as any).opp_name ?? 0)?.[String((s as any).fightAtk_TargetNumber ?? 0)] ?? 0);
    ((s as any).fightAtk = (s as any).fightAtk ?? {})['AttackerName'] = 'You';
    qspCall(s, 'exp_gain', '', (((s as any).AttackSkill ?? 0)?.[String((s as any).fightAtk_Type ?? 0)] ?? 0), (Math.floor(Math.random() * 3) + 1));
    qspCall(s, 'exp_gain', 'def', (Math.floor(Math.random() * 3) + 0));
  } else {
    if (((s as any).fightAtk_TargetType ?? 0) === 'opp') {
      ((s as any).fightAtk = (s as any).fightAtk ?? {})['AttackerName'] = (((s as any).pcs_name ?? 0)?.[String((s as any).fightAtk_AttackerNumber ?? 0)] ?? 0);
      ((s as any).fightAtk = (s as any).fightAtk ?? {})['DefenderName'] = (((s as any).opp_name ?? 0)?.[String((s as any).fightAtk_TargetNumber ?? 0)] ?? 0);
      (s as any).fightAtk_AttackerType = 'pcs';
    } else {
      (s as any).fightAtk_AttackerType = 'opp';
      ((s as any).fightAtk = (s as any).fightAtk ?? {})['AttackerName'] = (((s as any).opp_name ?? 0)?.[String((s as any).fightAtk_AttackerNumber ?? 0)] ?? 0);
      ((s as any).fightAtk = (s as any).fightAtk ?? {})['DefenderName'] = (((s as any).pcs_name ?? 0)?.[String((s as any).fightAtk_TargetNumber ?? 0)] ?? 0);
    }
  }
  ((s as any).fightAtk = (s as any).fightAtk ?? {})['AttackerSkillValue'] = 0;
  ((s as any).fightAtk = (s as any).fightAtk ?? {})['TargetReactValue'] = 0;
  ((s as any).fightAtk = (s as any).fightAtk ?? {})['TargetAgilValue'] = 0;
  ((s as any).fightAtk = (s as any).fightAtk ?? {})['TargetHealthBefore'] = 0;
  ((s as any).fightAtk = (s as any).fightAtk ?? {})['MinDamage'] = (((s as any).AttackMin ?? 0)?.[String((s as any).fightAtk_Type ?? 0)] ?? 0);
  ((s as any).fightAtk = (s as any).fightAtk ?? {})['MaxDamage'] = (((s as any).AttackMax ?? 0)?.[String((s as any).fightAtk_Type ?? 0)] ?? 0);
  if (((s as any).fightAtk_TargetType ?? 0) === 'opp'  &&  (!((s as any).fightAtk_AttackerNumber ?? 0))) {
    // TODO-QSP: dynamic text: You attempt to <<$fightAtk_Type_str>> <<$fightAtk["DefenderName"]>>!
    scene.text(`You attempt to ${((s as any).fightAtk_Type_str ?? '')} ${(((s as any).fightAtk ?? 0)?.['DefenderName'] ?? '')}!`);
  } else {
    // TODO-QSP: dynamic text: <<$fightAtk["AttackerName"]>> attempts to <<$fightAtk_Type_str>> <<$fightAtk["De...
    scene.text(`${(((s as any).fightAtk ?? 0)?.['AttackerName'] ?? '')} attempts to ${((s as any).fightAtk_Type_str ?? '')} ${(((s as any).fightAtk ?? 0)?.['DefenderName'] ?? '')}!`);
  }
  if ((0 as any) > 0) {
    (s as any).rand_fogRedDmgMax = (Math.floor(Math.random() * ((((s as any).fightAtk ?? {})?.['MaxDamage'] ?? 0)-(((s as any).fightAtk ?? {})?.['MinDamage'] ?? 0) - 0 + 1)) + (0));
    (s as any).rand_fogRedDmgMin = (Math.floor(Math.random() * ((((s as any).fightAtk ?? 0)?.['MinDamage']) - 0 + 1)) + (0));
    ((s as any).fightAtk = (s as any).fightAtk ?? {})['MaxDamage'] = ((s as any).fightAtk['MaxDamage'] ?? 0) - (((s as any).rand_fogRedDmgMax ?? 0));
    ((s as any).fightAtk = (s as any).fightAtk ?? {})['MinDamage'] = ((s as any).fightAtk['MinDamage'] ?? 0) - (((s as any).rand_fogRedDmgMin ?? 0));
    ((s as any).fightAtk = (s as any).fightAtk ?? {})['Damage'] = (Math.floor(Math.random() * ((((s as any).fightAtk ?? 0)?.['MaxDamage']) - (((s as any).fightAtk ?? 0)?.['MinDamage']) + 1)) + ((((s as any).fightAtk ?? 0)?.['MinDamage'])));
    if (((s as any).fightAtk ?? 0)?.['MaxDamage'] < ((s as any).fightAtk ?? 0)?.['MinDamage']) {
      ((s as any).fightAtk = (s as any).fightAtk ?? {})['MaxDamage'] = (((s as any).fightAtk ?? 0)?.['MinDamage']);
    }
  }
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
