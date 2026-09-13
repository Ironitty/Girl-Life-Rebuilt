import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInitFight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fight', 'clearPCSArrayPlayer');
  (s as any).temp_clear_check = 0;
  // TODO-QSP: :ClearAllyLoop
  if (((s as any).temp_clear_check ?? 0) > 1) {
    // TODO-QSP: gs 'fight', 'clearPCSArray', temp_clear_check - 1
    (s as any).temp_clear_check = ((s as any).temp_clear_check ?? 0) - (1);
    // TODO-QSP: jump 'ClearAllyLoop'
  }
  // TODO-QSP: $pcs_name[0] = 'You'
  if (((s as any).locArgs?.[1] ?? 0) === 1) {
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
  (s as any).OppDiffBonus = qspUntranslated(s, "ARGS[1]", { location: "fight" });
  (s as any).i = 0;
  // TODO-QSP: $opp_name[i] = 'Opponent 1'
  // TODO-QSP: $opp_image[i] = 'images/locations/shared/street/mugger.jpg'
  if (!(s as any).opp_def) (s as any).opp_def = {}; (s as any).opp_def[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_run) (s as any).opp_run = {}; (s as any).opp_run[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_wrstlng) (s as any).opp_wrstlng = {}; (s as any).opp_wrstlng[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_kick) (s as any).opp_kick = {}; (s as any).opp_kick[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_punch) (s as any).opp_punch = {}; (s as any).opp_punch[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_jab) (s as any).opp_jab = {}; (s as any).opp_jab[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_stren) (s as any).opp_stren = {}; (s as any).opp_stren[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_agil) (s as any).opp_agil = {}; (s as any).opp_agil[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_vital) (s as any).opp_vital = {}; (s as any).opp_vital[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_health) (s as any).opp_health = {}; (s as any).opp_health[String((s as any).i ?? 0)] = (((s as any).opp_vital ?? 0) * 10 + ((s as any).opp_stren ?? 0) * 5);
  if (!(s as any).opp_react) (s as any).opp_react = {}; (s as any).opp_react[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_willpwr) (s as any).opp_willpwr = {}; (s as any).opp_willpwr[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  if (!(s as any).opp_shoot) (s as any).opp_shoot = {}; (s as any).opp_shoot[String((s as any).i ?? 0)] = (Math.floor(Math.random() * 50) + 1) + ((s as any).OppDiffBonus ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterApplyDamage(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).fightAppDam) (s as any).fightAppDam = {}; (s as any).fightAppDam['TargetType'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).fightAppDam) (s as any).fightAppDam = {}; (s as any).fightAppDam['TargetNumber'] = qspUntranslated(s, "ARGS[2]", { location: "fight" });
  if (!(s as any).fightAppDam) (s as any).fightAppDam = {}; (s as any).fightAppDam['Damage'] = qspUntranslated(s, "ARGS[3]", { location: "fight" });
  if (!(s as any).fightAppDam) (s as any).fightAppDam = {}; (s as any).fightAppDam['TargetName'] = 0;
  if (!(s as any).fightAppDam) (s as any).fightAppDam = {}; (s as any).fightAppDam['Shield'] = 0;
  if (!(s as any).fightAppDam) (s as any).fightAppDam = {}; (s as any).fightAppDam['OverShieldDamage'] = 0;
  // TODO-QSP: dynamic "
  if (((s as any).fightAppDam ?? 0)?.['TargetType']((s as any)._clone ?? 0)[((s as any).fightAppDam ?? 0)?.['TargetNumber']] > 0) {
    // TODO-QSP: <<$fightAppDam['TargetType']>>_clone[<<fightAppDam['TargetNumber']>>] -= 1
    if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
      // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose a clone.""
    } else {
      // TODO-QSP: ""<<$fightAppDam['TargetName']>> loses a clone.""
    }
  } else {
    if (((s as any).fightAppDam ?? 0)?.['TargetType']((s as any)._shield ?? 0)[((s as any).fightAppDam ?? 0)?.['TargetNumber']] >= ((s as any).fightAppDam ?? 0)?.['Damage']) {
      // TODO-QSP: <<$fightAppDam['TargetType']>>_shield[<<fightAppDam['TargetNumber']>>] -= <<fightAppDam['Damage']>>
      if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
        // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose <<fightAppDam['Damage']>> defense.""
      } else {
        // TODO-QSP: ""<<$fightAppDam['TargetName']>> loses <<fightAppDam['Damage']>> defense.""
      }
    } else {
      if (((s as any).fightAppDam ?? 0)?.['TargetType']((s as any)._shield ?? 0)[((s as any).fightAppDam ?? 0)?.['TargetNumber']] > 0) {
        // TODO-QSP: <<$fightAppDam['TargetType']>>_shield[<<fightAppDam['TargetNumber']>>] = 0
        if (((s as any).fightAppDam ?? 0)?.['TargetName'] === 'you') {
          // TODO-QSP: ""<<$fightAppDam['TargetName']>> lose <<fightAppDam['Shield']>> defense.""
        } else {
          // TODO-QSP: ""<<$fightAppDam['TargetName']>> losses <<fightAppDam['Shield']>> defense.""
        }
      }
      if (((s as any).fightAppDam ?? 0)?.['TargetType']((s as any)._health ?? 0)[((s as any).fightAppDam ?? 0)?.['TargetNumber']] > ((s as any).fightAppDam ?? 0)?.['OverShieldDamage']) {
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
  // TODO-QSP: <tr>
  // TODO-QSP: <th align="left"><b><font size=18>Allies</font></b></td>
  // TODO-QSP: <th align="center" valign="center" rowspan=<<tableSize * 2 + 1>> ><b><font size=18>vs.</font></b></c...
  // TODO-QSP: <th align="right"><b><font size=18>Opponents</font></b></td>
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
    if (!(s as any).pcs_timer) (s as any).pcs_timer = {}; (s as any).pcs_timer[String((s as any).i ?? 0)] = 60 - (((s as any).pcs_react ?? 0)?.[String((s as any).i ?? 0)]/2);
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'PCSTimerInit'
  }
  (s as any).i = 0;
  // TODO-QSP: :OppTimerInit
  if (((s as any).i ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
    if (!(s as any).opp_timer) (s as any).opp_timer = {}; (s as any).opp_timer[String((s as any).i ?? 0)] = 60 - (((s as any).opp_react ?? 0)?.[String((s as any).i ?? 0)]/2);
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
  (s as any).fightTimNum = 0;
  (s as any).fightTimLow = 99999;
  (s as any).i = 0;
  // TODO-QSP: :LowTimerLoop1
  if (((s as any).i ?? 0) < Object.keys((s as any).pcs_timer ?? {}).length) {
    if (((s as any).pcs_stun ?? 0)?.[String((s as any).i ?? 0)] > 0) {
      if (!(s as any).pcs_stun) (s as any).pcs_stun = {}; (s as any).pcs_stun[String((s as any).i ?? 0)] = ((s as any).pcs_stun[String((s as any).i ?? 0)] ?? 0) - (1);
    } else {
      if (((s as any).pcs_health ?? 0)?.[String((s as any).i ?? 0)] > 0) {
        if (((s as any).pcs_timer ?? 0)?.[String((s as any).i ?? 0)] < ((s as any).fightTimLow ?? 0)) {
          (s as any).fightTimLow = ((s as any).pcs_timer ?? 0)?.[String((s as any).i ?? 0)];
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
      if (!(s as any).opp_stun) (s as any).opp_stun = {}; (s as any).opp_stun[String((s as any).i ?? 0)] = ((s as any).opp_stun[String((s as any).i ?? 0)] ?? 0) - (1);
    } else {
      if (((s as any).opp_health ?? 0)?.[String((s as any).i ?? 0)] > 0) {
        if (((s as any).opp_timer ?? 0)?.[String((s as any).i ?? 0)] < ((s as any).fightTimLow ?? 0)) {
          (s as any).fightTimLow = ((s as any).opp_timer ?? 0)?.[String((s as any).i ?? 0)];
          (s as any).fightTimNum = ((s as any).i ?? 0);
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
      if (!(s as any).pcs_clone) (s as any).pcs_clone = {}; (s as any).pcs_clone[0] = 3;
    }
    if (((s as any).spellbefshild ?? 0) === 1) {
      if (!(s as any).pcs_shield) (s as any).pcs_shield = {}; (s as any).pcs_shield[0] = 500;
    }
  }
  qspCall(s, 'fight', 'result_check');
  qspCall(s, 'fight', 'findActiveTimer');
  // TODO-QSP: gt 'fight', $fightTimType, fightTimNum
  // TODO-QSP: end
  scene.build();
}

function enterPrintStats(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['CharType'] = ((s as any).locArgs?.[1] ?? 0);
  (s as any).i = qspUntranslated(s, "ARGS[2]", { location: "fight" });
  if (((s as any).fightPStats ?? 0)?.['CharType'] === 'opp') {
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Name'] = ((s as any).opp_name ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Health'] = ((s as any).opp_health ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Mana'] = ((s as any).opp_mana ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Willpower'] = ((s as any).opp_willpwr ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Shield'] = ((s as any).opp_shield ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Fog'] = ((s as any).opp_fog ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Clone'] = ((s as any).opp_clone ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Stun'] = ((s as any).opp_stun ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Timer'] = ((s as any).opp_timer ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Image'] = ((s as any).opp_image ?? 0)?.[String((s as any).i ?? 0)];
  } else {
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Name'] = ((s as any).pcs_name ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Health'] = ((s as any).pcs_health ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Mana'] = ((s as any).pcs_mana ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Willpower'] = ((s as any).pcs_willpwr ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Shield'] = ((s as any).pcs_shield ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Fog'] = ((s as any).pcs_fog ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Clone'] = ((s as any).pcs_clone ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Stun'] = ((s as any).pcs_stun ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Timer'] = ((s as any).pcs_timer ?? 0)?.[String((s as any).i ?? 0)];
    if (!(s as any).fightPStats) (s as any).fightPStats = {}; (s as any).fightPStats['Image'] = ((s as any).pcs_image ?? 0)?.[String((s as any).i ?? 0)];
  }
  // TODO-QSP: <tr>
  // TODO-QSP: <td rowspan=4 align=right valign=center>
  // TODO-QSP: <img HEIGHT=70 src='<<$fightPStats['Image']>>'>
  // TODO-QSP: <br> <b><<$fightPStats['Name']>></b>
  // TODO-QSP: </td>
  // TODO-QSP: <td align=right> Life </td>
  // TODO-QSP: <td align=right> <b><font color = red><<fightPStats['Health']>></font></b> </td>
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
  // TODO-QSP: end
  scene.build();
}

function enterStatDisplay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: <table border=1><th colspan=4><b><font size=12>Opponents</font></b></th>
  // TODO-QSP: "
  (s as any).j = 0;
  // TODO-QSP: :OppLoopRC1
  if (((s as any).j ?? 0) < Object.keys((s as any).opp_health ?? {}).length) {
    // TODO-QSP: $fightStatText += func('fight', 'printStats', 'opp', j)
    (s as any).j = ((s as any).j ?? 0) + (1);
    // TODO-QSP: jump 'OppLoopRC1'
  }
  // TODO-QSP: $fightStatText += "</table>"
  // TODO-QSP: <table border=1><th colspan=4><b><font size=12>Opponents</font></b></th>
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
    scene.actions([{ label: 'Continue', goto: ['ender', 'win'] }]);
  }
  if (qspFunc(s, 'fight', 'AvailableTargets', 'pcs') === 0) {
    scene.text('<b><font color = red> You lost!</font></b>');
    scene.actions([{ label: 'Continue', goto: ['ender', 'loss'] }]);
  } else {
    if (qspFunc(s, 'fight', 'AvailableTargets', 'opp') === 0) {
      scene.text('<b><font color = green> You won!</font></b>');
      scene.actions([{ label: 'Continue', goto: ['ender', 'win'] }]);
    } else {
      if (((s as any).pcs_willpwr ?? 0) <= 0) {
        scene.text('<b><font color = red> You cannot summon the will to fight!</font></b>');
        scene.actions([{ label: 'Continue', goto: ['ender', 'loss'] }]);
      }
    }
  }
  // TODO-QSP: end
  // TODO-QSP: $AttackType[0] = 'Kick'
  // TODO-QSP: $AttackSkill[0] = 'kick'
  if (!(s as any).AttackMin) (s as any).AttackMin = {}; (s as any).AttackMin[0] = 5;
  if (!(s as any).AttackMax) (s as any).AttackMax = {}; (s as any).AttackMax[0] = 8;
  if (!(s as any).AttackTime) (s as any).AttackTime = {}; (s as any).AttackTime[0] = 40;
  // TODO-QSP: $AttackType[1] = 'Hard Punch'
  // TODO-QSP: $AttackSkill[1] = 'punch'
  if (!(s as any).AttackMin) (s as any).AttackMin = {}; (s as any).AttackMin[1] = 4;
  if (!(s as any).AttackMax) (s as any).AttackMax = {}; (s as any).AttackMax[1] = 6;
  if (!(s as any).AttackTime) (s as any).AttackTime = {}; (s as any).AttackTime[1] = 30;
  // TODO-QSP: $AttackType[2] = 'Jab'
  // TODO-QSP: $AttackSkill[2] = 'jab'
  if (!(s as any).AttackMin) (s as any).AttackMin = {}; (s as any).AttackMin[2] = 2;
  if (!(s as any).AttackMax) (s as any).AttackMax = {}; (s as any).AttackMax[2] = 3;
  if (!(s as any).AttackTime) (s as any).AttackTime = {}; (s as any).AttackTime[2] = 15;
  scene.build();
}

function enterAttack(s: GameState, scene: SceneBuilder): void {
  (s as any).fightAtk_Type = qspUntranslated(s, "arrpos('AttackType', fightAtk_Type_str)", { location: "fight" });
  (s as any).fightAtk_TargetNumber = qspUntranslated(s, "ARGS[3]", { location: "fight" });
  (s as any).fightAtk_AttackerNumber = qspUntranslated(s, "ARGS[4]", { location: "fight" });
  if (((s as any).fightAtk_TargetType ?? 0) === 'opp'  &&  (!((s as any).fightAtk_AttackerNumber ?? 0))) {
    if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['DefenderName'] = ((s as any).opp_name ?? 0)?.[String((s as any).fightAtk_TargetNumber ?? 0)];
    if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['AttackerName'] = 'You';
    // TODO-QSP: gs 'exp_gain', $AttackSkill[fightAtk_Type], rand(1, 3)
    qspCall(s, 'exp_gain', 'def', Math.floor(Math.random() * 3) + 0);
  } else {
    if (((s as any).fightAtk_TargetType ?? 0) === 'opp') {
      if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['AttackerName'] = ((s as any).pcs_name ?? 0)?.[String((s as any).fightAtk_AttackerNumber ?? 0)];
      if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['DefenderName'] = ((s as any).opp_name ?? 0)?.[String((s as any).fightAtk_TargetNumber ?? 0)];
    } else {
      if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['AttackerName'] = ((s as any).opp_name ?? 0)?.[String((s as any).fightAtk_AttackerNumber ?? 0)];
      if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['DefenderName'] = ((s as any).pcs_name ?? 0)?.[String((s as any).fightAtk_TargetNumber ?? 0)];
    }
  }
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['AttackerSkillValue'] = 0;
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['TargetReactValue'] = 0;
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['TargetAgilValue'] = 0;
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['TargetHealthBefore'] = 0;
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['MinDamage'] = ((s as any).AttackMin ?? 0)?.[String((s as any).fightAtk_Type ?? 0)];
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['MaxDamage'] = ((s as any).AttackMax ?? 0)?.[String((s as any).fightAtk_Type ?? 0)];
  if (((s as any).fightAtk_TargetType ?? 0) === 'opp'  &&  (!((s as any).fightAtk_AttackerNumber ?? 0))) {
    // TODO-QSP: dynamic text: You attempt to <<$fightAtk_Type_str>> <<$fightAtk["DefenderName"]>>!
    scene.text(`You attempt to ${((s as any).fightAtk_Type_str ?? 0)} ${((s as any).fightAtk ?? 0)?.['DefenderName']}!`);
  } else {
    // TODO-QSP: dynamic text: <<$fightAtk["AttackerName"]>> attempts to <<$fightAtk_Type_str>> <<$fightAtk["De...
    scene.text(`${((s as any).fightAtk ?? 0)?.['AttackerName']} attempts to ${((s as any).fightAtk_Type_str ?? 0)} ${((s as any).fightAtk ?? 0)?.['DefenderName']}!`);
  }
  if ((0 as any) > 0) {
    (s as any).rand_fogRedDmgMax = (Math.floor(Math.random() * (((s as any).fightAtk ?? {})?.['MaxDamage']-((s as any).fightAtk ?? {})?.['MinDamage'] - 0 + 1)) + (0)) + ((s as any).fightAtk ?? {})?.['MinDamage'];
    (s as any).rand_fogRedDmgMin = qspUntranslated(s, "rand(0, fightAtk['MinDamage'])", { location: "fight" });
    if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['MaxDamage'] = ((s as any).fightAtk['MaxDamage'] ?? 0) - (((s as any).rand_fogRedDmgMax ?? 0));
    if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['MinDamage'] = ((s as any).fightAtk['MinDamage'] ?? 0) - (((s as any).rand_fogRedDmgMin ?? 0));
    if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['Damage'] = qspUntranslated(s, "rand(fightAtk['MinDamage'], fightAtk['MaxDamage'])", { location: "fight" });
    if (((s as any).fightAtk ?? 0)?.['MaxDamage'] < ((s as any).fightAtk ?? 0)?.['MinDamage']) {
      if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['MaxDamage'] = ((s as any).fightAtk ?? 0)?.['MinDamage'];
    }
    // TODO-QSP: dynamic "<<$fightAtk_TargetType>>_fog[<<fightAtk_TargetNumber>>] -= rand(1, 5)"
  }
  if ((0 as any) < 0) {
    // TODO-QSP: dynamic "<<$fightAtk_TargetType>>_fog[<<fightAtk_TargetNumber>>] = 0"
  }
  if (((s as any).fightAtk ?? 0)?.['AttackerSkillValue'] + (Math.floor(Math.random() * 41) + 0) > ((s as any).fightAtk ?? 0)?.['TargetReactValue'] / 4 + 3 * ((s as any).fightAtk ?? 0)?.['TargetAgilValue'] / 4) {
    // TODO-QSP: dynamic "fightAtk['Damage'] = <<$fightAtk_AttackerType>>_stren[<<fightAtk_AttackerNumber>>] * rand(<...
    // TODO-QSP: gs 'fight', 'applyDamage', $fightAtk_TargetType, fightAtk_TargetNumber, fightAtk['Damage']
  } else {
    if ((Math.floor(Math.random() * 4) + 0) !== 0) {
      if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_AttackerNumber ?? 0))) {
        scene.text('You avoid the blow.');
      } else {
        // TODO-QSP: dynamic text: <<$fightAtk["DefenderName"]>> avoids the blow.
        scene.text(`${((s as any).fightAtk ?? 0)?.['DefenderName']} avoids the blow.`);
      }
    } else {
      // TODO-QSP: gs 'fight', 'applyDamage', $fightAtk_TargetType, fightAtk_TargetNumber, fightAtk['Damage']
    }
  }
  if (!(s as any).fightAtk) (s as any).fightAtk = {}; (s as any).fightAtk['TargetHealthLoss'] = 0;
  if (((s as any).fightAtk ?? 0)?.['TargetHealthLoss']*2 > ((s as any).fightAtk ?? 0)?.['TargetHealthBefore']) {
    qspCall(s, 'fight', 'devastating');
  } else {
    if (((s as any).fightAtk ?? 0)?.['TargetHealthLoss'] > 50) {
      qspCall(s, 'fight', 'hard');
    } else {
      if (((s as any).fightAtk ?? 0)?.['TargetHealthLoss'] > 0) {
        qspCall(s, 'fight', 'light');
      } else {
        if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
          scene.text('You avoid their attack.');
        } else {
          scene.text('They avoid your attack.');
        }
      }
    }
  }
  // TODO-QSP: dynamic "<<$fightAtk_AttackerType>>_timer[<<fightAtk_AttackerNumber>>] += AttackTime[<<fightAtk_Type...
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['fight', 'main'] },
  ]);
  scene.build();
}

function enterDevastating(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).fightAtk_Type ?? 0))) {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
    }
    if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
      // TODO-QSP: dynamic text: They land a devastating kick to your <<$bodypart>>. You are stunned.
      scene.text(`They land a devastating kick to your ${((s as any).bodypart ?? 0)}. You are stunned.`);
      if (((s as any).bodypart ?? 0) === 'head') {
        qspCall(s, 'pain', '', 7, 'head', 'kick');
      } else {
        qspCall(s, 'pain', '', 7, 'tummy', 'kick');
      }
    } else {
      // TODO-QSP: dynamic text: You deliver a devastating kick to their <<$bodypart>>. <<$fightAtk["DefenderName...
      scene.text(`You deliver a devastating kick to their ${((s as any).bodypart ?? 0)}. ${((s as any).fightAtk ?? 0)?.['DefenderName']} is stunned.`);
    }
  } else {
    if (((s as any).fightAtk_Type ?? 0) === 1) {
      if ((!(Math.floor(Math.random() * 4) + 0))) {
      } else {
        if ((!(Math.floor(Math.random() * 3) + 0))) {
        } else {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
          }
        }
      }
      if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
        // TODO-QSP: dynamic text: They land a devastating punch to your <<$bodypart>>. You are stunned.
        scene.text(`They land a devastating punch to your ${((s as any).bodypart ?? 0)}. You are stunned.`);
        if (((s as any).bodypart ?? 0) === 'head') {
          qspCall(s, 'pain', '', 7, 'head', 'hit');
        } else {
          if (((s as any).bodypart ?? 0) === 'chest') {
            qspCall(s, 'pain', '', 5, 'chest', 'hit');
            qspCall(s, 'pain', '', 5, 'breast', 'hit');
          } else {
            if (((s as any).bodypart ?? 0) === 'ribs') {
              qspCall(s, 'pain', '', 7, 'ribs', 'hit');
            } else {
              qspCall(s, 'pain', '', 7, 'tummy', 'hit');
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: You deliver a devastating punch to their <<$bodypart>>. <<$fightAtk["DefenderNam...
        scene.text(`You deliver a devastating punch to their ${((s as any).bodypart ?? 0)}. ${((s as any).fightAtk ?? 0)?.['DefenderName']} is stunned.`);
      }
    } else {
      if (((s as any).fightAtk_Type ?? 0) === 2) {
        if ((!(Math.floor(Math.random() * 4) + 0))) {
        } else {
          if ((!(Math.floor(Math.random() * 3) + 0))) {
          } else {
            if ((!(Math.floor(Math.random() * 2) + 0))) {
            }
          }
        }
        if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
          // TODO-QSP: dynamic text: They land a devastating jab to your <<$bodypart>>. You are stunned.
          scene.text(`They land a devastating jab to your ${((s as any).bodypart ?? 0)}. You are stunned.`);
          if (((s as any).bodypart ?? 0) === 'head') {
            qspCall(s, 'pain', '', 7, 'head', 'hit');
          } else {
            if (((s as any).bodypart ?? 0) === 'chest') {
              qspCall(s, 'pain', '', 5, 'chest', 'hit');
              qspCall(s, 'pain', '', 5, 'breast', 'hit');
            } else {
              if (((s as any).bodypart ?? 0) === 'ribs') {
                qspCall(s, 'pain', '', 7, 'ribs', 'hit');
              } else {
                qspCall(s, 'pain', '', 7, 'tummy', 'hit');
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: You deliver a devastating jab to their <<$bodypart>>. <<$fightAtk["DefenderName"...
          scene.text(`You deliver a devastating jab to their ${((s as any).bodypart ?? 0)}. ${((s as any).fightAtk ?? 0)?.['DefenderName']} is stunned.`);
        }
      }
    }
  }
  // TODO-QSP: dynamic '<<$fightAtk_TargetType>>_stun[<<fightAtk_TargetNumber>>] += 1'
  // TODO-QSP: dynamic '<<$fightAtk_TargetType>>_timer[<<fightAtk_TargetNumber>>] += AttackTime[<<fightAtk_Type>>]'
  // TODO-QSP: end
  scene.build();
}

function enterHard(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).fightAtk_Type ?? 0))) {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
    }
    if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
      // TODO-QSP: dynamic text: They land a hard kick to your <<$bodypart>>. You are stunned.
      scene.text(`They land a hard kick to your ${((s as any).bodypart ?? 0)}. You are stunned.`);
      if (((s as any).bodypart ?? 0) === 'head') {
        qspCall(s, 'pain', '', 4, 'head', 'kick');
      } else {
        qspCall(s, 'pain', '', 4, 'tummy', 'kick');
      }
    } else {
      // TODO-QSP: dynamic text: You deliver a hard kick to their <<$bodypart>>. <<$fightAtk["DefenderName"]>> is...
      scene.text(`You deliver a hard kick to their ${((s as any).bodypart ?? 0)}. ${((s as any).fightAtk ?? 0)?.['DefenderName']} is stunned.`);
    }
  } else {
    if (((s as any).fightAtk_Type ?? 0) === 1) {
      if ((!(Math.floor(Math.random() * 6) + 0))) {
      } else {
        if ((!(Math.floor(Math.random() * 6) + 0))) {
        } else {
          if ((!(Math.floor(Math.random() * 6) + 0))) {
          } else {
            if ((!(Math.floor(Math.random() * 6) + 0))) {
            } else {
              if ((!(Math.floor(Math.random() * 3) + 0))) {
              } else {
                if ((!(Math.floor(Math.random() * 2) + 0))) {
                }
              }
            }
          }
        }
      }
      if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
        // TODO-QSP: dynamic text: They land a hard punch to your <<$bodypart>>. You are stunned.
        scene.text(`They land a hard punch to your ${((s as any).bodypart ?? 0)}. You are stunned.`);
        if (((s as any).bodypart ?? 0) === 'head') {
          qspCall(s, 'pain', '', 4, 'head', 'hit');
        } else {
          if (((s as any).bodypart ?? 0) === 'cheeks') {
            qspCall(s, 'pain', '', 4, 'cheeks', 'hit');
          } else {
            if (((s as any).bodypart ?? 0) === 'nose') {
              qspCall(s, 'pain', '', 4, 'nose', 'hit');
            } else {
              if (((s as any).bodypart ?? 0) === 'mouth') {
                qspCall(s, 'pain', '', 4, 'mouth', 'hit');
                if ((Math.floor(Math.random() * 10) + 1) === 1) {
                  scene.text('You can feel a teeth rock out from the impact.');
                  (s as any).pcs_missing_teeth = ((s as any).pcs_missing_teeth ?? 0) + (1);
                }
              } else {
                if (((s as any).bodypart ?? 0) === 'chest') {
                  qspCall(s, 'pain', '', 3, 'chest', 'hit');
                  qspCall(s, 'pain', '', 3, 'breast', 'hit');
                } else {
                  if (((s as any).bodypart ?? 0) === 'ribs') {
                    qspCall(s, 'pain', '', 4, 'ribs', 'hit');
                  } else {
                    qspCall(s, 'pain', '', 4, 'tummy', 'hit');
                  }
                }
              }
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: You deliver a hard punch to their <<$bodypart>>. <<$fightAtk["DefenderName"]>> i...
        scene.text(`You deliver a hard punch to their ${((s as any).bodypart ?? 0)}. ${((s as any).fightAtk ?? 0)?.['DefenderName']} is stunned.`);
      }
    } else {
      if (((s as any).fightAtk_Type ?? 0) === 2) {
        if ((!(Math.floor(Math.random() * 6) + 0))) {
        } else {
          if ((!(Math.floor(Math.random() * 6) + 0))) {
          } else {
            if ((!(Math.floor(Math.random() * 6) + 0))) {
            } else {
              if ((!(Math.floor(Math.random() * 6) + 0))) {
              } else {
                if ((!(Math.floor(Math.random() * 3) + 0))) {
                } else {
                  if ((!(Math.floor(Math.random() * 2) + 0))) {
                  }
                }
              }
            }
          }
        }
        if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
          // TODO-QSP: dynamic text: They land a hard jab to your <<$bodypart>>.
          scene.text(`They land a hard jab to your ${((s as any).bodypart ?? 0)}.`);
          if (((s as any).bodypart ?? 0) === 'head') {
            qspCall(s, 'pain', '', 4, 'head', 'hit');
          } else {
            if (((s as any).bodypart ?? 0) === 'cheeks') {
              qspCall(s, 'pain', '', 4, 'cheeks', 'hit');
            } else {
              if (((s as any).bodypart ?? 0) === 'nose') {
                qspCall(s, 'pain', '', 4, 'nose', 'hit');
              } else {
                if (((s as any).bodypart ?? 0) === 'mouth') {
                  qspCall(s, 'pain', '', 4, 'mouth', 'hit');
                  if ((Math.floor(Math.random() * 20) + 1) === 1) {
                    scene.text('You can feel a teeth rock out from the impact.');
                    (s as any).pcs_missing_teeth = ((s as any).pcs_missing_teeth ?? 0) + (1);
                  }
                } else {
                  if (((s as any).bodypart ?? 0) === 'chest') {
                    qspCall(s, 'pain', '', 3, 'chest', 'hit');
                    qspCall(s, 'pain', '', 3, 'breast', 'hit');
                  } else {
                    if (((s as any).bodypart ?? 0) === 'ribs') {
                      qspCall(s, 'pain', '', 4, 'ribs', 'hit');
                    } else {
                      qspCall(s, 'pain', '', 4, 'tummy', 'hit');
                    }
                  }
                }
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: You deliver a hard jab to their <<$bodypart>>.
          scene.text(`You deliver a hard jab to their ${((s as any).bodypart ?? 0)}.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLight(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).fightAtk_Type ?? 0))) {
    if ((!(Math.floor(Math.random() * 3) + 0))) {
    }
    if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
      // TODO-QSP: dynamic text: They only manage a glancing kick to your <<$bodypart>>.
      scene.text(`They only manage a glancing kick to your ${((s as any).bodypart ?? 0)}.`);
      if (((s as any).bodypart ?? 0) === 'leg') {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          qspCall(s, 'pain', '', 1, 'legL', 'kick');
        } else {
          qspCall(s, 'pain', '', 1, 'legR', 'kick');
        }
      } else {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          qspCall(s, 'pain', '', 1, 'armL', 'kick');
        } else {
          qspCall(s, 'pain', '', 1, 'armR', 'kick');
        }
      }
    } else {
      // TODO-QSP: dynamic text: Your kick just glances their <<$bodypart>>.
      scene.text(`Your kick just glances their ${((s as any).bodypart ?? 0)}.`);
    }
  } else {
    if (((s as any).fightAtk_Type ?? 0) === 1) {
      if ((!(Math.floor(Math.random() * 6) + 0))) {
      } else {
        if ((!(Math.floor(Math.random() * 6) + 0))) {
        } else {
          if ((!(Math.floor(Math.random() * 6) + 0))) {
          } else {
            if ((!(Math.floor(Math.random() * 6) + 0))) {
            } else {
              if ((!(Math.floor(Math.random() * 3) + 0))) {
              }
            }
          }
        }
      }
      if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
        // TODO-QSP: dynamic text: They punch you but it just glances your <<$bodypart>>.
        scene.text(`They punch you but it just glances your ${((s as any).bodypart ?? 0)}.`);
        if (((s as any).bodypart ?? 0) === 'leg') {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            qspCall(s, 'pain', '', 1, 'legL', 'kick');
          } else {
            qspCall(s, 'pain', '', 1, 'legR', 'kick');
          }
        } else {
          if (((s as any).bodypart ?? 0) === 'arm') {
            if ((!(Math.floor(Math.random() * 2) + 0))) {
              qspCall(s, 'pain', '', 1, 'armL', 'kick');
            } else {
              qspCall(s, 'pain', '', 1, 'armR', 'kick');
            }
          } else {
            if (((s as any).bodypart ?? 0) === 'nose') {
              qspCall(s, 'pain', '', 1, 'nose', 'hit');
            } else {
              if (((s as any).bodypart ?? 0) === 'mouth') {
                qspCall(s, 'pain', '', 1, 'mouth', 'hit');
              } else {
                if (((s as any).bodypart ?? 0) === 'chest') {
                  qspCall(s, 'pain', '', 1, 'chest', 'hit');
                  qspCall(s, 'pain', '', 1, 'breast', 'hit');
                } else {
                  qspCall(s, 'pain', '', 1, 'tummy', 'hit');
                }
              }
            }
          }
        }
      } else {
        // TODO-QSP: dynamic text: You hard punch just glaces their <<$bodypart>>. <<$fightAtk["DefenderName"]>> is...
        scene.text(`You hard punch just glaces their ${((s as any).bodypart ?? 0)}. ${((s as any).fightAtk ?? 0)?.['DefenderName']} is stunned.`);
      }
    } else {
      if (((s as any).fightAtk_Type ?? 0) === 2) {
        if ((!(Math.floor(Math.random() * 6) + 0))) {
        } else {
          if ((!(Math.floor(Math.random() * 6) + 0))) {
          } else {
            if ((!(Math.floor(Math.random() * 6) + 0))) {
            } else {
              if ((!(Math.floor(Math.random() * 6) + 0))) {
              } else {
                if ((!(Math.floor(Math.random() * 3) + 0))) {
                } else {
                  if ((!(Math.floor(Math.random() * 2) + 0))) {
                  }
                }
              }
            }
          }
        }
        if (((s as any).fightAtk_TargetType ?? 0) === 'pcs'  &&  (!((s as any).fightAtk_TargetNumber ?? 0))) {
          // TODO-QSP: dynamic text: They jab you but it just glances your <<$bodypart>>.
          scene.text(`They jab you but it just glances your ${((s as any).bodypart ?? 0)}.`);
          if (((s as any).bodypart ?? 0) === 'head') {
            qspCall(s, 'pain', '', 1, 'head', 'hit');
          } else {
            if (((s as any).bodypart ?? 0) === 'cheeks') {
              qspCall(s, 'pain', '', 1, 'cheeks', 'hit');
            } else {
              if (((s as any).bodypart ?? 0) === 'nose') {
                qspCall(s, 'pain', '', 1, 'nose', 'hit');
              } else {
                if (((s as any).bodypart ?? 0) === 'mouth') {
                  qspCall(s, 'pain', '', 1, 'mouth', 'hit');
                } else {
                  if (((s as any).bodypart ?? 0) === 'chest') {
                    qspCall(s, 'pain', '', 1, 'chest', 'hit');
                    qspCall(s, 'pain', '', 1, 'breast', 'hit');
                  } else {
                    if (((s as any).bodypart ?? 0) === 'ribs') {
                      qspCall(s, 'pain', '', 1, 'ribs', 'hit');
                    } else {
                      qspCall(s, 'pain', '', 1, 'tummy', 'hit');
                    }
                  }
                }
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: Your jab just glaces their <<$bodypart>>.
          scene.text(`Your jab just glaces their ${((s as any).bodypart ?? 0)}.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAvailableTargets(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 0;
  // TODO-QSP: :AvailTargetLoop
  if (((s as any).i ?? 0) < Object.keys((s as any)[((s as any).locArgs?.[1] ?? 0)+'_health'] ?? {}).length) {
    if ((0 as any) > 0) {
      // TODO-QSP: fightAvailTarg[] = i
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'AvailTargetLoop'
  }
  (s as any).result = 0;
  return;
  // TODO-QSP: end
  scene.build();
}

function enterRandomTarget(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'fight', 'AvailableTargets', ((s as any).locArgs?.[1] ?? 0)) > 0) {
    (s as any).result = ((s as any).fightAvailTarg ?? 0)[((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('fightAvailTarg'))-1];
  } else {
    (s as any).result = (-1);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterFightAlgorithm(s: GameState, scene: SceneBuilder): void {
  (s as any).AttackerNumber = qspUntranslated(s, "ARGS[2]", { location: "fight" });
  if (((s as any).AttackerType ?? 0) === 'pcs') {
  }
  (s as any).TargetNumber = qspFunc(s, 'fight', 'RandomTarget', ((s as any).TargetType ?? 0));
  if (((s as any).TargetNumber ?? 0)>= 0) {
    (s as any).ActionMade = 0;
    if ((0 as any) > 0) {
      // TODO-QSP: gs 'fight', 'buildCasterSpellList', $dyneval('$result=$<<$AttackerType>>_spells[<<AttackerNumber>>]'...
      if ((0 as any) < 50) {
        (s as any).ActionMade = qspFunc(s, 'fight', 'spellListCheck', '$comHealSpells', ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0), ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0));
      }
      if ((0 as any) === 0  &&  (!((s as any).ActionMade ?? 0))) {
        (s as any).ActionMade = qspFunc(s, 'fight', 'spellCheck', 'multiclone', ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0), ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0));
        if ((!((s as any).ActionMade ?? 0))) {
          (s as any).ActionMade = qspFunc(s, 'fight', 'spellCheck', 'clone', ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0), ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0));
        }
      }
      if ((0 as any) === 0  &&  (!((s as any).ActionMade ?? 0))) {
        (s as any).ActionMade = qspFunc(s, 'fight', 'spellListCheck', '$comShldSpells', ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0), ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0));
      }
      if ((!((s as any).ActionMade ?? 0))) {
        (s as any).ActionMade = qspFunc(s, 'fight', 'spellListCheck', '$comAtkSpells', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), ((s as any).AttackerType ?? 0), ((s as any).AttackerNumber ?? 0));
      }
      scene.actions([
        { label: 'Next', goto: ['fight', 'main'] },
      ]);
    }
    if ((!((s as any).ActionMade ?? 0))) {
      if ((Math.floor(Math.random() * ((0 as any) - 0 + 1)) + (0)) > 40) {
        qspCall(s, 'fight', 'Attack', 'Kick', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), ((s as any).AttackerNumber ?? 0));
      } else {
        if ((Math.floor(Math.random() * ((0 as any) - 0 + 1)) + (0)) > 40) {
          qspCall(s, 'fight', 'Attack', 'Hard Punch', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), ((s as any).AttackerNumber ?? 0));
        } else {
          qspCall(s, 'fight', 'Attack', 'Jab', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), ((s as any).AttackerNumber ?? 0));
        }
      }
    } else {
      // TODO-QSP: dynamic "<<$AttackerType>>_timer[<<AttackerNumber>>] += 50"
    }
  } else {
    scene.actions([{ label: 'Continue', goto: ['fight', 'main'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterOpponent(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fight', 'statDisplay');
  // TODO-QSP: gs 'fight', 'fightAlgorithm', 'opp', ARGS[1]
  // TODO-QSP: end
  scene.build();
}

function enterPlayer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fight', 'statDisplay');
  if ((!((s as any).locArgs?.[2] ?? 0))) {
    if (((s as any).start_type ?? 0)?.['magic'] !== 'nomagic') {
      scene.actions([
        { label: 'Cast a Spell', handler: (st: GameState) => {
    qspCall(st, 'fight', 'spellcast');
  } },
      ]);
    }
    if (qspFunc(s, 'fight', 'AvailableTargets', 'opp') > 0) {
      (s as any).i = 0;
      // TODO-QSP: :loop000000
      if (((s as any).i ?? 0) < Object.keys((s as any).fightAvailTarg ?? {}).length) {
        // TODO-QSP: dynamic "
        // TODO-QSP: "
        (s as any).i = ((s as any).i ?? 0) + (1);
        // TODO-QSP: jump 'loop000000'
        scene.actions([
          { label: 'Kick <<$op_name_000000>>', handler: (st: GameState) => {
    // TODO-QSP: gs 'fight', 'Attack', 'Kick', 'opp', <<fightAvailTarg[i]>>, 0
  } },
          { label: 'Punch <<$op_name_000000>> hard', handler: (st: GameState) => {
    // TODO-QSP: gs 'fight', 'Attack', 'Hard Punch', 'opp', <<fightAvailTarg[i]>>, 0
  } },
          { label: 'Jab <<$op_name_000000>>', handler: (st: GameState) => {
    // TODO-QSP: gs 'fight', 'Attack', 'Jab', 'opp', <<fightAvailTarg[i]>>, 0
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Surrender', goto: ['ender', 'surrender'] },
    ]);
  } else {
    // TODO-QSP: gs 'fight', 'fightAlgorithm', 'pcs', ARGS[2]
  }
  // TODO-QSP: end
  scene.build();
}

function enterBuildCasterSpellList(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :loop000001
  (s as any).i = qspUntranslated(s, "instr(tmpStr, ',')", { location: "fight" });
  if (((s as any).i ?? 0) > 0) {
    // TODO-QSP: $casterSpellList[] = $trim($mid($tmpStr, 1, i-1))
    // TODO-QSP: jump 'loop000001'
  } else {
    // TODO-QSP: $casterSpellList[] = $trim($tmpStr)
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSpellCheck(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).spellCheckVar) (s as any).spellCheckVar = {}; (s as any).spellCheckVar['SpellName'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).spellCheckVar) (s as any).spellCheckVar = {}; (s as any).spellCheckVar['TargetType'] = ((s as any).locArgs?.[2] ?? 0);
  if (!(s as any).spellCheckVar) (s as any).spellCheckVar = {}; (s as any).spellCheckVar['TargetNumber'] = qspUntranslated(s, "ARGS[3]", { location: "fight" });
  if (!(s as any).spellCheckVar) (s as any).spellCheckVar = {}; (s as any).spellCheckVar['CasterType'] = ((s as any).locArgs?.[4] ?? 0);
  if (!(s as any).spellCheckVar) (s as any).spellCheckVar = {}; (s as any).spellCheckVar['CasterNumber'] = qspUntranslated(s, "ARGS[5]", { location: "fight" });
  if (!(s as any).spellCheckVar) (s as any).spellCheckVar = {}; (s as any).spellCheckVar['CasterMana'] = 0;
  if ((Array.isArray((s as any).casterSpellList) ? ((s as any).casterSpellList as any[]).indexOf(((s as any).spellCheckVar ?? 0)?.['SpellName']) : -1)>=0  &&  ((s as any).spellCheckVar ?? 0)?.['CasterMana'] >= ((s as any).spellMana ?? 0)[((s as any).spellCheckVar ?? 0)?.['SpellName']]) {
    if (((s as any).spellTarget ?? 0)[((s as any).spellCheckVar ?? 0)?.['SpellName']] === 'self') {
      // TODO-QSP: gs 'castSpellNPC', $spellCheckVar['SpellName'], $spellCheckVar['CasterType'], spellCheckVar['CasterN...
    } else {
      // TODO-QSP: gs 'castSpellNPC', $spellCheckVar['SpellName'], $spellCheckVar['TargetType'], spellCheckVar['TargetN...
    }
    (s as any).result = 1;
  } else {
    (s as any).result = 0;
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSpellListCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).i = 0;
  (s as any).ActionMade1 = 0;
  // TODO-QSP: :loop000002
  if (((s as any).i ?? 0) < Object.keys((s as any)[((s as any).locArgs?.[1] ?? 0)] ?? {}).length  &&  ((s as any).ActionMade1 ?? 0)===0) {
    // TODO-QSP: ActionMade1 = func('fight', 'spellCheck', '<<$ARGS[1]>>[<<i>>]', $ARGS[2], ARGS[3], $ARGS[4], ARGS[5])
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'loop000002'
  }
  (s as any).result = ((s as any).ActionMade1 ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterSpellcast(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: func('spellBook', 'targetable', '$combatSpells', 'gt ''fight'', ''main''', 'pcs_timer[0] += 50')
  // TODO-QSP: end
  scene.actions([
    { label: 'Next', goto: ['fight', 'main'] },
  ]);
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
