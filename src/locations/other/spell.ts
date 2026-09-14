import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).SuccessValue = ((!isNaN(((s as any).locArgs?.[1] ?? 0)) && ((s as any).locArgs?.[1] ?? 0) !== '') ? (qspUntranslated(s, "val(ARGS[1])", { location: "spell" })) : (qspUntranslated(s, "ARGS[1]", { location: "spell" })));
  if (((s as any).spellTarget ?? 0)[((s as any).locArgs?.[2] ?? 0)] === 'self') {
    (s as any).TargetNumber = qspUntranslated(s, "ARGS[3]", { location: "spell" });
    (s as any).CasterNumber = qspUntranslated(s, "ARGS[3]", { location: "spell" });
  } else {
    if (((s as any).spellTarget ?? 0)[((s as any).locArgs?.[2] ?? 0)] === 'team') {
      (s as any).TargetNumber = qspUntranslated(s, "ARGS[3]", { location: "spell" });
      (s as any).CasterNumber = qspUntranslated(s, "ARGS[4]", { location: "spell" });
    } else {
      if (((s as any).TargetType ?? 0) === 'pcs') {
        if (((s as any).locArgs?.[0] ?? 0) === 'heal'  ||  ((s as any).locArgs?.[0] ?? 0) === 'clone'  ||  ((s as any).locArgs?.[0] ?? 0) === 'multiclone'  ||  ((s as any).locArgs?.[0] ?? 0) === 'energo'  ||  ((s as any).locArgs?.[0] ?? 0) === 'haste') {
        }
      } else {
        if (((s as any).TargetType ?? 0) === 'opp') {
        }
      }
      (s as any).TargetNumber = qspUntranslated(s, "ARGS[3]", { location: "spell" });
      (s as any).CasterNumber = qspUntranslated(s, "ARGS[4]", { location: "spell" });
    }
  }
  if (!(s as any).spellFunc) (s as any).spellFunc = {}; (s as any).spellFunc['UpdateAttrib'] = qspUntranslated(s, "{", { location: "spell" });
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['BaseArray'] = ((s as any).locArgs?.[0] ?? 0);
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['TargetType'] = ((s as any).locArgs?.[1] ?? 0);
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['TargetNum'] = qspUntranslated(s, "ARGS[2]", { location: "spell" });
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['Operation'] = ((s as any).locArgs?.[3] ?? 0);
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['Amount'] = qspUntranslated(s, "ARGS[4]", { location: "spell" });
  if (((s as any).SpellFuncVar ?? 0)?.['Operation'] === '===') {
    // TODO-QSP: !"opp_fog[0] = 0"
    // TODO-QSP: dynamic "<<$SpellFuncVar['TargetType']>>_<<$SpellFuncVar['BaseArray']>>[<<SpellFuncVar['TargetNum']>...
  } else {
    if (((s as any).SpellFuncVar ?? 0)?.['Operation'] === '+'  ||  ((s as any).SpellFuncVar ?? 0)?.['Operation'] === '-') {
      // TODO-QSP: !"opp_fog[0] += 10"
      // TODO-QSP: dynamic "<<$SpellFuncVar['TargetType']>>_<<$SpellFuncVar['BaseArray']>>[<<SpellFuncVar['TargetNum']>...
    } else {
      // TODO-QSP: dynamic text: Invalid Operator, must be "+", "-", or "=".
      scene.text('Invalid Operator, must be "+", "-", or "=".');
    }
  }
  if (!(s as any).spellFunc) (s as any).spellFunc = {}; (s as any).spellFunc['GetCombatantName'] = qspUntranslated(s, "{", { location: "spell" });
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['TargetType'] = ((s as any).locArgs?.[0] ?? 0);
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['TargetNum'] = qspUntranslated(s, "ARGS[1]", { location: "spell" });
  if (!(s as any).spellFunc) (s as any).spellFunc = {}; (s as any).spellFunc['ApplyDamageToAll'] = qspUntranslated(s, "{", { location: "spell" });
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['TargetType'] = ((s as any).locArgs?.[0] ?? 0);
  if (!(s as any).SpellFuncVar) (s as any).SpellFuncVar = {}; (s as any).SpellFuncVar['Damage'] = qspUntranslated(s, "ARGS[1]", { location: "spell" });
  // TODO-QSP: dynamic "
  // TODO-QSP: :DamageAllLoop1
  if (((s as any).i ?? 0) < Object.keys((s as any)['' + qspUntranslated(s, "SpellFuncVar['TargetType']>", { location: "spell" }) + '_health'] ?? {}).length) {
    // TODO-QSP: gs 'fight', 'applyDamage', '<<$SpellFuncVar['TargetType']>>', i, <<SpellFuncVar['Damage']>>
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'DamageAllLoop1'
  }
  // TODO-QSP: "
  scene.build();
}

function enterTeleport(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :RandLocLoop
  if (((s as any).randomLoc ?? 0) === ((s as any).NewLocation ?? 0)  ||  ((s as any).randomLoc ?? 0) === ((s as any).EntryPoint ?? 0)) {
    // TODO-QSP: jump 'RandLocLoop'
  }
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: "The blur you see just outside the ring seems to shift."
    if (((s as any).treeCircArg ?? 0)?.[String((s as any).NewLocation ?? 0)] === "") {
      // TODO-QSP: gt $treeCircLoc[$NewLocation]
    } else {
      // TODO-QSP: gt $treeCircLoc[$NewLocation], $treeCircArg[$NewLocation]
    }
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      // TODO-QSP: "The blur you see just outside the ring seems to shift. Something did not go right!"
      if (((s as any).treeCircArg ?? 0)?.[String((s as any).randomLoc ?? 0)] === "") {
        // TODO-QSP: gt $treeCircLoc[$randomLoc]
      } else {
        // TODO-QSP: gt $treeCircLoc[$randomLoc], $treeCircArg[$randomLoc]
      }
    } else {
      scene.text('You feel drained, but the energy fizzles out and nothing happens');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRegenerate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  (s as any).regenVal = 5 * ((s as any).SuccessValue ?? 0);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).regenVal ?? 0));
  (s as any).regenArrIdx = qspUntranslated(s, "arrpos('spellTimeName', 'regenerate')", { location: "spell" });
  if (((s as any).regenArrIdx ?? 0) >= 0) {
    if (!(s as any).spellComplete) (s as any).spellComplete = {}; (s as any).spellComplete[String((s as any).regenArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 120;
    // TODO-QSP: $spellCompExec[regenArrIdx] = 'pcs_health += (5 * <<regenVal>>)'
    // TODO-QSP: $spellTickExec[regenArrIdx] = 'pcs_health += <<regenVal>>'
  } else {
    qspCall(s, 'spellTimer', 'add', 'regenerate', 120, 'pcs_health += (5 * ' + qspUntranslated(s, "regenVal>", { location: "spell" }) + ')', 'pcs_health += ' + qspUntranslated(s, "regenVal>", { location: "spell" }) + '');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterPainblock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'drugs', 'painkiller', 'spell');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCuredisease(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'cheatmenu_din', 'std_cure');
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['head'] = ((s as any).pain['head'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['nose'] = ((s as any).pain['nose'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['mouth'] = ((s as any).pain['mouth'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['lips'] = ((s as any).pain['lips'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['throat'] = ((s as any).pain['throat'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['asshole'] = ((s as any).pain['asshole'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['chest'] = ((s as any).pain['chest'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['tummy'] = ((s as any).pain['tummy'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['urethra'] = ((s as any).pain['urethra'] ?? 0) + (10);
    if (!(s as any).pain) (s as any).pain = {}; (s as any).pain['vaginal'] = ((s as any).pain['vaginal'] ?? 0) + (10);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCurewounds(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'medical_din', 'healthTreatment', 'spell');
    qspCall(s, 'medical_din', 'healthTreatment', 'spell');
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCurewounds2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5 + 1000;
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBerserk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  (s as any).spellArrIdx = qspUntranslated(s, "arrpos('spellTimeName', 'berserk')", { location: "spell" });
  qspCall(s, 'drugs', 'painkiller', 'spell');
  if (!(s as any).drugVars) (s as any).drugVars = {}; (s as any).drugVars['painkiller_points'] = ((s as any).drugVars['painkiller_points'] ?? 0) + (50);
  if (((s as any).spellArrIdx ?? 0) >= 0) {
    if (!(s as any).spellComplete) (s as any).spellComplete = {}; (s as any).spellComplete[String((s as any).spellArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 120;
  } else {
    (s as any).healthPercent = ((s as any).pcs_health ?? 0) * 100 / ((s as any).healthmax ?? 0);
    (s as any).staminPercent = ((s as any).pcs_stam ?? 0) * 100 / ((s as any).stammax ?? 0);
    (s as any).stren_lvl = ((s as any).stren_lvl ?? 0) + (200);
    (s as any).stren_lvlst = ((s as any).stren_lvlst ?? 0) + (200);
    (s as any).stren_muta = ((s as any).stren_muta ?? 0) + (4);
    (s as any).agil_lvl = ((s as any).agil_lvl ?? 0) + (200);
    (s as any).agil_lvlst = ((s as any).agil_lvlst ?? 0) + (200);
    (s as any).agil_muta = ((s as any).agil_muta ?? 0) + (4);
    (s as any).vital_lvl = ((s as any).vital_lvl ?? 0) + (200);
    (s as any).vital_lvlst = ((s as any).vital_lvlst ?? 0) + (200);
    (s as any).vital_muta = ((s as any).vital_muta ?? 0) + (4);
    qspCall(s, 'stat', '');
    (s as any).pcs_health = (((s as any).healthPercent ?? 0) * ((s as any).healthmax ?? 0) / 100) + 1;
    (s as any).pcs_stam = (((s as any).staminPercent ?? 0) * ((s as any).stammax ?? 0)) + 1;
    // TODO-QSP: ! Return Stats to normal
    (s as any).stren_lvl = ((s as any).stren_lvl ?? 0) - (200);
    (s as any).stren_lvlst = ((s as any).stren_lvlst ?? 0) - (200);
    (s as any).stren_muta = ((s as any).stren_muta ?? 0) - (4);
    (s as any).agil_lvl = ((s as any).agil_lvl ?? 0) - (200);
    (s as any).agil_lvlst = ((s as any).agil_lvlst ?? 0) - (200);
    (s as any).agil_muta = ((s as any).agil_muta ?? 0) - (4);
    (s as any).vital_lvl = ((s as any).vital_lvl ?? 0) - (200);
    (s as any).vital_lvlst = ((s as any).vital_lvlst ?? 0) - (200);
    (s as any).vital_muta = ((s as any).vital_muta ?? 0) - (4);
    qspCall(s, 'spellTimer', 'add', 'berserk', 120, ((s as any).berserkCode ?? 0), '');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
      (s as any).cumspclnt = 1;
    } else {
      (s as any).cumspclnt = 18;
    }
    qspCall(s, 'cum_cleanup', '');
    (s as any).body_write = 0;
    (s as any).face_write = 0;
    if (!(s as any).lactation) (s as any).lactation = {}; (s as any).lactation['lactmess'] = 0;
    (s as any).pcs_sweat = 10;
    (s as any).pcs_breath = 1;
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGlamour(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  (s as any).spellArrIdx = qspUntranslated(s, "arrpos('spellTimeName', 'glamour')", { location: "spell" });
  if (((s as any).spellArrIdx ?? 0) >= 0) {
    if (!(s as any).spellComplete) (s as any).spellComplete = {}; (s as any).spellComplete[String((s as any).spellArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 120;
  } else {
    (s as any).glamouractive = 1;
    qspCall(s, 'spellTimer', 'add', 'glamour', 120, 'glamouractive = 0');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterAlterself(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    if (((s as any).locArgs?.[2] ?? 0) === '') {
      if (!(s as any).ARGS) (s as any).ARGS = {}; (s as any).ARGS[2] = '210';
    }
    if (!(s as any).MakeupArg) (s as any).MakeupArg = {}; (s as any).MakeupArg[0] = 0;
    if (!(s as any).MakeupArg) (s as any).MakeupArg = {}; (s as any).MakeupArg[1] = 0;
    if (!(s as any).MakeupArg) (s as any).MakeupArg = {}; (s as any).MakeupArg[2] = 0;
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = ((s as any).MakeupArg ?? 0)[0] + 1;
    (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8 * ((s as any).MakeupArg ?? 0)[1]);
    if (((s as any).MakeupArg ?? 0)[2] === 1  &&  ((s as any).pcs_lashes ?? 0) < 3) {
      (s as any).pcs_lashes = 3;
    } else {
      if (((s as any).MakeupArg ?? 0)[2] === 2  &&  ((s as any).pcs_lashes ?? 0) < 4) {
        (s as any).pcs_lashes = 4;
      }
    }
    qspCall(s, 'stat', '');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCosmetica(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
    (s as any).cumspclnt = 1;
  } else {
    (s as any).cumspclnt = 18;
  }
  qspCall(s, 'cum_cleanup', '');
  if (!(s as any).lactation) (s as any).lactation = {}; (s as any).lactation['lactmess'] = 0;
  (s as any).pcs_sweat = 10;
  (s as any).pcs_breath = 1;
  (s as any).body_write = 0;
  (s as any).face_write = 0;
  (s as any).klismaday = ((s as any).daystart ?? 0);
  (s as any).klismaday1 = 1;
  (s as any).pcs_hairbsh = 1;
  (s as any).pcs_makeup = 3;
  if (((s as any).lashair ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 3) {
    (s as any).pcs_leghair = 0;
  }
  if (((s as any).shave_menu ?? 0) === 1  ||  ((s as any).shave_menu ?? 0) === 2) {
    if (((s as any).lashair ?? 0) === 1) {
      (s as any).pcs_pubes = 0;
    } else {
      if (((s as any).pubestyle ?? 0) === 1) {
        (s as any).pcs_pubes = 1;
      } else {
        if (((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) < 10)  ||  ((s as any).pubestyle ?? 0) >= 12)  &&  ((s as any).pcs_pubes ?? 0) > 15) {
          (s as any).pcs_pubes = 16;
        } else {
          if (((s as any).pubestyle ?? 0) === 10  &&  ((s as any).pcs_pubes ?? 0) > 29) {
            (s as any).pcs_pubes = 26;
          } else {
            if (((s as any).pubestyle ?? 0) === 11  &&  ((s as any).pcs_pubes ?? 0) > 10) {
              (s as any).pcs_pubes = 0;
            }
          }
        }
      }
    }
  }
  qspCall(s, 'body', 'Update_Appearance');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterPenisenvy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/magic/cast_spell.jpg');
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  (s as any).spellArrIdx = qspUntranslated(s, "arrpos('spellTimeName', 'penisenvy')", { location: "spell" });
  if (((s as any).spellArrIdx ?? 0) >= 0) {
    if (!(s as any).spellComplete) (s as any).spellComplete = {}; (s as any).spellComplete[String((s as any).spellArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 30;
  } else {
    (s as any).penisEnvyVariable = 1;
    qspCall(s, 'spellTimer', 'add', 'penisenvy', 30, 'penisEnvyVariable = 0', '');
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterFog(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A Fog materializes around, obscuring <<dynev...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A Fog materializes around, obscuring ${0} from enemies.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterClone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>><<SuccessValue>> clone<<iif(SuccessValue>1,"...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>${((s as any).SuccessValue || '')} clone${((((s as any).SuccessValue ?? 0)>1) ? ('s') : (''))} springs from ${0} confusing enemies.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0  &&  (0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! A <<dyneval($spellFunc["...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! A ${0} clone disappears.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStun(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    (s as any).stunner = 1;
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>><<dyneval($spellFunc["GetCombatantName"], $T...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>${0} is stunned.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterWeapon(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: "weapon"
  // TODO-QSP: end
  scene.build();
}

function enterWind(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) === 2) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A wind blows through the area, eliminating t...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A wind blows through the area, eliminating the fog around ${0} from the battlefield.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) === 1) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A wind blows through the area, eliminating a...
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A wind blows through the area, eliminating all fog on the battlefield.</font></b>`);
    } else {
      if (((s as any).SuccessValue ?? 0) === -1) {
        // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>A wind blows through the area, eliminating th...
        scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>A wind blows through the area, eliminating the fog around ${0} from the battlefield.</font></b>`);
      } else {
        scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMulticlone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>><<SuccessValue * 3>> clones of <<dyneval($sp...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>${((s as any).SuccessValue ?? '') * 3} clones of ${0} spring forth, confusing the enemy.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0  &&  ((s as any).klon ?? 0) > 0) {
      if ((0 as any) < 3) {
      }
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! Some clones of <<dyneval...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! Some clones of ${0} disappear.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnergo(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>An energy shield materializes around <<dynev...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>An energy shield materializes around ${0}, granting protection from enemies.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHaste(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>><<dyneval($spellFunc["GetCombatantName"], $T...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>${0} feel mind and body race though a sluggish world.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHeal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    if ((!((s as any).menu_off ?? 0))) {
    } else {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>><<dyneval($spellFunc["GetCombatantName"], $T...
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>${0} surge with life, feeling much stronger.</font></b>`);
    }
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterHand(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    (s as any).TargetStren = 0;
    (s as any).TargetStrenDelta = ((s as any).TargetStren ?? 0)*20*((s as any).SuccessValue ?? 0)/100;
    (s as any).TargetStrenBase = ((s as any).TargetStren ?? 0)*10;
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Power flows from the hands of <<dyneval($spe...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Power flows from the hands of ${0}.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterScaldingtouch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 100 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Flames spring from your hands.</font></b>
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Flames spring from your hands.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBurninghands(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 250 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A torrent of flames jets from your hands.</f...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A torrent of flames jets from your hands.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirebarrier(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A flaming barrier springs up between you and...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A flaming barrier springs up between you and your opponents.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirestorm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Uncountable glowing embers streak down upon ...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Uncountable glowing embers streak down upon the foes of ${0}.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! Uncountable glowing embe...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! Uncountable glowing embers streak down upon the battlefield, burning everyone.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFlameshield(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A Shield made of flames interposes itself be...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A Shield made of flames interposes itself between ${0} and the enemy.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterShock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 100 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You build a static electric charge in your h...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You build a static electric charge in your hand and zap your opponent.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 50);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! You manage to zap yourse...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! You manage to zap yourself with a static charge.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLightning(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 200 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You shoot a lightning bolt from your hand, z...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You shoot a lightning bolt from your hand, zapping your opponent.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 100);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! You manage to zap yourse...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! You manage to zap yourself with lightning.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterElectricbarrier(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A wall of dancing lightning springs up aroun...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A wall of dancing lightning springs up around yourself.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enter1000birds(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, (100 * SuccessValue)
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You shoot hundreds of small lightning bolts ...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You shoot hundreds of small lightning bolts toward your enemy.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! Hundreds of small lightn...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! Hundreds of small lightning bolts curl toward the battlefield, shocking everyone.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDancingsphere(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A large field of lightning dances around you...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A large field of lightning dances around you, blocking attacks.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuicksand(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 100 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You trap your opponent in quicksand.</font><...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You trap your opponent in quicksand.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), 100);
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 50);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! You are both trapped in ...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! You are both trapped in quicksand.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEarthshield(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Tendrils of earth rise to defend you.</font>...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Tendrils of earth rise to defend you.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAbyss(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 250 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>The Earth opens up beneath your opponent's f...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>The Earth opens up beneath your opponent's feet, slamming shut damaging him and depriving him of the ability to move.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), 250);
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 200);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! The Earth opens up benea...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! The Earth opens up beneath your opponent's feet, slamming shut damaging him and depriving him of the ability to move. You are also caught.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEarthguardian(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>The Earth itself comes alive defending you f...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>The Earth itself comes alive defending you from attacks. It draws from the power of the land to regenerate itself every round. You now have ${((s as any).defence || '')} protection units.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSando(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, (250 * SuccessValue)
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Two huge plates of earth collapse together, ...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Two huge plates of earth collapse together, crushing the enemy and depriving him of the ability to move.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 50);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! Two huge plates of earth...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! Two huge plates of earth collapse together with crushing force, but the enemy is missed and you are instead caught.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWindgust(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 100 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You create a gust of wind.</font></b>
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You create a gust of wind.</font></b>`);
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy clones are vaporized.</font></b>
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy clones are vaporized.</font></b>`);
    }
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy fog is torn to shreds by the wind.</fo...
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy fog is torn to shreds by the wind.</font></b>`);
    }
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPressure(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 200 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You dramatically raise the air pressure.</fo...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You dramatically raise the air pressure.</font></b>`);
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy clones are vaporized.</font></b>
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy clones are vaporized.</font></b>`);
    }
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy fog is torn to shreds by the wind.</fo...
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy fog is torn to shreds by the wind.</font></b>`);
    }
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterVacuum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A turbulent sphere of vacuum surrounds you, ...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A turbulent sphere of vacuum surrounds you, blocking incoming attacks. You now have ${((s as any).defence || '')} protection units.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterVacuumshells(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 250 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Turbulent spheres of vacuum bombard your ene...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Turbulent spheres of vacuum bombard your enemy. The air is full of whistling sounds as the spheres fly by at high speeds over the battlefield.</font></b>`);
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy clones are vaporized.</font></b>
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy clones are vaporized.</font></b>`);
    }
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy fog is torn to shreds by the wind.</fo...
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy fog is torn to shreds by the wind.</font></b>`);
    }
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDevouringvacuum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A devouring vacuum sucks away your enemy's d...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A devouring vacuum sucks away your enemy's defenses.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeechmana(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'fight', 'applyDamage', ((s as any).TargetType ?? 0), ((s as any).TargetNumber ?? 0), 100);
    (s as any).damTipM = 1000;
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You leech mana from your enemy.</font></b>
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You leech mana from your enemy.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 50);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! Ouch!</font></b>
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! Ouch!</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFlood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 200 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A surge of water rises towards your enemy.</...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A surge of water rises towards your enemy.</font></b>`);
  } else {
    if (((s as any).SuccessValue ?? 0) < 0) {
      qspCall(s, 'fight', 'applyDamage', ((s as any).CasterType ?? 0), ((s as any).CasterNumber ?? 0), 100);
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColBad>>>The spell backfires! A surge of water rises t...
      scene.text(`<b><font color = ${((s as any).SplTxtColBad || '')}>The spell backfires! A surge of water rises towards your enemy, but misses and hits you.</font></b>`);
    } else {
      scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBlister(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>A protective sphere of water surrounds you.<...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>A protective sphere of water surrounds you.</font></b>`);
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSharkrockets(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: gs 'fight', 'applyDamage', $TargetType, TargetNumber, 150 * SuccessValue
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Blobs of water shaped like sharks fly toward...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Blobs of water shaped like sharks fly towards your enemy, striking them.</font></b>`);
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy clones are vaporized.</font></b>
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy clones are vaporized.</font></b>`);
    }
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGreatflood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>You have filled the whole neighborhood with ...
    scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>You have filled the whole neighborhood with water, protecting you and devouring enemy mana.</font></b>`);
    if ((0 as any) > 0) {
      // TODO-QSP: dynamic text: <b><font color = <<$SplTxtColGood>>>Enemy clones are vaporized.</font></b>
      scene.text(`<b><font color = ${((s as any).SplTxtColGood || '')}>Enemy clones are vaporized.</font></b>`);
    }
  } else {
    scene.text('<b>The spell fizzles. Nothing seems to happen.</b>');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'teleport':
      enterTeleport(s, scene);
      break;
    case 'regenerate':
      enterRegenerate(s, scene);
      break;
    case 'painblock':
      enterPainblock(s, scene);
      break;
    case 'curedisease':
      enterCuredisease(s, scene);
      break;
    case 'curewounds':
      enterCurewounds(s, scene);
      break;
    case 'curewounds2':
      enterCurewounds2(s, scene);
      break;
    case 'berserk':
      enterBerserk(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'glamour':
      enterGlamour(s, scene);
      break;
    case 'alterself':
      enterAlterself(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'cosmetica':
      enterCosmetica(s, scene);
      break;
    case 'penisenvy':
      enterPenisenvy(s, scene);
      break;
    case 'fog':
      enterFog(s, scene);
      break;
    case 'clone':
      enterClone(s, scene);
      break;
    case 'stun':
      enterStun(s, scene);
      break;
    case 'weapon':
      enterWeapon(s, scene);
      break;
    case 'wind':
      enterWind(s, scene);
      break;
    case 'multiclone':
      enterMulticlone(s, scene);
      break;
    case 'energo':
      enterEnergo(s, scene);
      break;
    case 'haste':
      enterHaste(s, scene);
      break;
    case 'heal':
      enterHeal(s, scene);
      break;
    case 'hand':
      enterHand(s, scene);
      break;
    case 'scaldingtouch':
      enterScaldingtouch(s, scene);
      break;
    case 'burninghands':
      enterBurninghands(s, scene);
      break;
    case 'firebarrier':
      enterFirebarrier(s, scene);
      break;
    case 'firestorm':
      enterFirestorm(s, scene);
      break;
    case 'flameshield':
      enterFlameshield(s, scene);
      break;
    case 'shock':
      enterShock(s, scene);
      break;
    case 'lightning':
      enterLightning(s, scene);
      break;
    case 'electricbarrier':
      enterElectricbarrier(s, scene);
      break;
    case '1000birds':
      enter1000birds(s, scene);
      break;
    case 'dancingsphere':
      enterDancingsphere(s, scene);
      break;
    case 'quicksand':
      enterQuicksand(s, scene);
      break;
    case 'earthshield':
      enterEarthshield(s, scene);
      break;
    case 'abyss':
      enterAbyss(s, scene);
      break;
    case 'earthguardian':
      enterEarthguardian(s, scene);
      break;
    case 'sando':
      enterSando(s, scene);
      break;
    case 'windgust':
      enterWindgust(s, scene);
      break;
    case 'pressure':
      enterPressure(s, scene);
      break;
    case 'vacuum':
      enterVacuum(s, scene);
      break;
    case 'vacuumshells':
      enterVacuumshells(s, scene);
      break;
    case 'devouringvacuum':
      enterDevouringvacuum(s, scene);
      break;
    case 'leechmana':
      enterLeechmana(s, scene);
      break;
    case 'flood':
      enterFlood(s, scene);
      break;
    case 'blister':
      enterBlister(s, scene);
      break;
    case 'sharkrockets':
      enterSharkrockets(s, scene);
      break;
    case 'greatflood':
      enterGreatflood(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const spell: LocationDef = {
  name: 'spell',
  title: 'The spell fizzles. Nothing seems to happen.',
  region: 'other',
  enter: enter,
};
