import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    // TODO-QSP: "The blur you see just outside the ring seems to shift. Something did not go right!"
    if (((s as any).treeCircArg ?? 0)?.[String((s as any).randomLoc ?? 0)] === "") {
      // TODO-QSP: gt $treeCircLoc[$randomLoc]
    } else {
      // TODO-QSP: gt $treeCircLoc[$randomLoc], $treeCircArg[$randomLoc]
    }
    scene.text('You feel drained, but the energy fizzles out and nothing happens');
  }
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
    (s as any).spellComplete[String((s as any).regenArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 120;
    // TODO-QSP: $spellCompExec[regenArrIdx] = 'pcs_health += (5 * <<regenVal>>)'
    // TODO-QSP: $spellTickExec[regenArrIdx] = 'pcs_health += <<regenVal>>'
  } else {
    qspCall(s, 'spellTimer', 'add', 'regenerate', 120, 'pcs_health += (5 * <<regenVal>>)', 'pcs_health += <<regenVal>>');
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterPainblock(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'drugs', 'painkiller', 'spell');
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterCuredisease(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'cheatmenu_din', 'std_cure');
    (s as any).pain['head'] = ((s as any).pain['head'] ?? 0) + (10);
    (s as any).pain['nose'] = ((s as any).pain['nose'] ?? 0) + (10);
    (s as any).pain['mouth'] = ((s as any).pain['mouth'] ?? 0) + (10);
    (s as any).pain['lips'] = ((s as any).pain['lips'] ?? 0) + (10);
    (s as any).pain['throat'] = ((s as any).pain['throat'] ?? 0) + (10);
    (s as any).pain['asshole'] = ((s as any).pain['asshole'] ?? 0) + (10);
    (s as any).pain['chest'] = ((s as any).pain['chest'] ?? 0) + (10);
    (s as any).pain['tummy'] = ((s as any).pain['tummy'] ?? 0) + (10);
    (s as any).pain['urethra'] = ((s as any).pain['urethra'] ?? 0) + (10);
    (s as any).pain['vaginal'] = ((s as any).pain['vaginal'] ?? 0) + (10);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterCurewounds(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'medical_din', 'healthTreatment', 'spell');
    qspCall(s, 'medical_din', 'healthTreatment', 'spell');
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterCurewounds2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0) * 10 + ((s as any).pcs_stren ?? 0) * 5 + 1000;
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterBerserk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  (s as any).spellArrIdx = qspUntranslated(s, "arrpos('spellTimeName', 'berserk')", { location: "spell" });
  qspCall(s, 'drugs', 'painkiller', 'spell');
  (s as any).drugVars['painkiller_points'] = ((s as any).drugVars['painkiller_points'] ?? 0) + (50);
  if (((s as any).spellArrIdx ?? 0) >= 0) {
    (s as any).spellComplete[String((s as any).spellArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 120;
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
    (s as any).lactation['lactmess'] = 0;
    (s as any).pcs_sweat = 10;
    (s as any).pcs_breath = 1;
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterGlamour(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) <= 0) {
    return;
  }
  (s as any).spellArrIdx = qspUntranslated(s, "arrpos('spellTimeName', 'glamour')", { location: "spell" });
  if (((s as any).spellArrIdx ?? 0) >= 0) {
    (s as any).spellComplete[String((s as any).spellArrIdx ?? 0)] = ((s as any).totminut ?? 0) + 120;
  } else {
    (s as any).glamouractive = 1;
    qspCall(s, 'spellTimer', 'add', 'glamour', 120, 'glamouractive = 0');
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterAlterself(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    qspCall(s, 'stat', '');
  }
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).SuccessValue ?? 0) > 0) {
    if (((s as any).locArgs?.[2] ?? 0) === '') {
      (s as any).ARGS[2] = '210';
    }
    (s as any).MakeupArg[0] = 0;
    (s as any).MakeupArg[1] = 0;
    (s as any).MakeupArg[2] = 0;
    (s as any).pcs_hairbsh = 1;
    (s as any).pcs_makeup = ((s as any).MakeupArg ?? 0)[0] + 1;
    (s as any).pcs_lipbalm = ((s as any).pcs_lipbalm ?? 0) + (8 * ((s as any).MakeupArg ?? 0)[1]);
    if (((s as any).MakeupArg ?? 0)[2] === 1  &&  ((s as any).pcs_lashes ?? 0) < 3) {
      (s as any).pcs_lashes = 3;
    } else {
      (s as any).pcs_lashes = 4;
    }
    qspCall(s, 'stat', '');
  }
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
  (s as any).lactation['lactmess'] = 0;
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
      (s as any).pcs_pubes = 1;
      if (((((s as any).pubestyle ?? 0) >= 2  &&  ((s as any).pubestyle ?? 0) < 10)  ||  ((s as any).pubestyle ?? 0) >= 12)  &&  ((s as any).pcs_pubes ?? 0) > 15) {
        (s as any).pcs_pubes = 16;
      } else {
        (s as any).pcs_pubes = 26;
        if (((s as any).pubestyle ?? 0) === 11  &&  ((s as any).pcs_pubes ?? 0) > 10) {
          (s as any).pcs_pubes = 0;
        }
      }
      qspCall(s, 'body', 'Update_Appearance');
      qspCall(s, 'stat', '');
    }
  }
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
    default:
      enterTeleport(s, scene);
      break;
  }
}

export const spell: LocationDef = {
  name: 'spell',
  title: 'The spell fizzles. Nothing seems to happen.',
  region: 'other',
  enter: enter,
};
