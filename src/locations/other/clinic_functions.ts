import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterReceptionOptionLabel(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_rol_state ?? 0) === 'none') {
  } else {
    if (((s as any).temp_rol_state ?? 0) === 'pending') {
      (s as any).temp_rol_daystart = ((((s as any).temp_rol_recur ?? 0) !== '') ? (((s as any).daystart ?? 0)) : (((s as any).event_daystart ?? 0)?.[String((s as any).temp_rol_id ?? 0)]));
      if (((s as any).temp_rol_daystart ?? 0) === ((s as any).daystart ?? 0)) {
      }
    }
  }
  return;
  scene.build();
}

function enterReceptionAttend(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'appointments', 'render_acts', ((s as any).locArgs?.[1] ?? 0), 'clinic_functions', 'request_appointment', 'attend_appointment', ((s as any).temp_ra_recur ?? 0));
  return;
  scene.build();
}

function enterCategoryName(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'Pavlov') {
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'Petrovich') {
    }
    return;
  }
  scene.build();
}

function enterHerpesShot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 450);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).GerpesUkolDay = ((s as any).daystart ?? 0);
  (s as any).GerpesNapr = ((s as any).GerpesNapr ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('You see the nurse and she gives you a painful injection in your ass.');
  if ((!((s as any).GerpesNapr ?? 0))) {
    (s as any).Gerpes = (-10);
    scene.text('You have completed the treatment.');
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterGonorrheaShot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 750);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).TriperUkolDay = ((s as any).daystart ?? 0);
  (s as any).TriperNapr = ((s as any).TriperNapr ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('You see the nurse and she gives you a painful injection in your ass.');
  if ((!((s as any).TriperNapr ?? 0))) {
    (s as any).TriperOral = 0;
    (s as any).TriperOralSigns = 0;
    (s as any).Triper = 0;
    (s as any).Venera = ((s as any).Venera ?? 0) - (1);
    (s as any).TriperOnce = 0;
    scene.text('You have completed the treatment.');
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSyphilisShot(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 1000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).SifNapr = 0;
  (s as any).SifacOnce = 0;
  (s as any).Sifilis = 0;
  (s as any).Venera = ((s as any).Venera ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('You see the nurse and she gives you a painful injection in your ass.');
  scene.text('"That\'s it. You might still feel a little off, but the infection is now cured."');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterYeastCure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 15000);
  (s as any).day = ((s as any).day ?? 0) + (3);
  (s as any).week = ((s as any).week ?? 0) + (3);
  (s as any).KandidozOnce = 0;
  (s as any).Kandidoz = 0;
  qspCall(s, 'stat', '');
  scene.text('There\'s an ambulance waiting outside. It drives you to a cutting edge medical facility, where you spend 3 days being treated and pampered.');
  scene.text('After a long recovery, you have been completely cured of your yeast infection.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterHerpesCure(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 45000);
  (s as any).day = ((s as any).day ?? 0) + (3);
  (s as any).week = ((s as any).week ?? 0) + (3);
  (s as any).GerpesOnce = 0;
  (s as any).Gerpes = 0;
  (s as any).OrHerpes = 0;
  (s as any).GenHerpes = 0;
  (s as any).Venera = ((s as any).Venera ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.text('There\'s an ambulance waiting outside. It drives you to a cutting edge medical facility, where you spend 3 days being treated and pampered.');
  scene.text('After a long recovery, you have been completely cured of your herpes.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterSetElectrolysisAct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).lashair ?? 0))) {
    if (qspFunc(s, 'money', 'can_afford', 80000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''electrolysis''">Electrolysis</a> laser hair removal of le...
    } else {
      // TODO-QSP: 'Electrolysis - laser hair removal of legs and pubic area - ' + $func('money', 'string_price', 80000...
    }
  } else {
    // TODO-QSP: dynamic text: Electrolysis - laser hair removal of legs and pubic area - ' + $func('money', 's...
    scene.text('Electrolysis - laser hair removal of legs and pubic area - \' + $func(\'money\', \'string_price\', 80000) + \' - You have no hair to remove.');
  }
  scene.build();
}

function enterSetLipEnlargementAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) < 4) {
    if (qspFunc(s, 'money', 'can_afford', 25000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''lipPlus''">Lip enlargement surgery</a> - ' + $func('money...
    } else {
      // TODO-QSP: 'Lip enlargement surgery - ' + $func('money', 'string_price', 25000)
    }
  } else {
    // TODO-QSP: dynamic text: Lip enlargement surgery - ' + $func('money', 'string_price', 25000) + ' - Your l...
    scene.text('Lip enlargement surgery - \' + $func(\'money\', \'string_price\', 25000) + \' - Your lips are already big.');
  }
  scene.build();
}

function enterSetLipReductionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lip ?? 0) > 0) {
    if (qspFunc(s, 'money', 'can_afford', 30000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''lipMin''">Lip reduction surgery</a> - ' + $func('money', ...
    } else {
      // TODO-QSP: 'Lip reduction surgery - ' + $func('money', 'string_price', 30000)
    }
  } else {
    // TODO-QSP: dynamic text: Lip reduction surgery - ' + $func('money', 'string_price', 30000) + ' - Your lip...
    scene.text('Lip reduction surgery - \' + $func(\'money\', \'string_price\', 30000) + \' - Your lips are already thin');
  }
  scene.build();
}

function enterSetEyeEnlargementAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyesize ?? 0) < 3) {
    if (qspFunc(s, 'money', 'can_afford', 90000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''eyePlus''">Eye enlargement surgery</a> - ' + $func('money...
    } else {
      // TODO-QSP: 'Eye enlargement surgery - ' + $func('money', 'string_price', 90000)
    }
  } else {
    // TODO-QSP: dynamic text: Eye enlargement surgery - ' + $func('money', 'string_price', 90000) + ' - Your e...
    scene.text('Eye enlargement surgery - \' + $func(\'money\', \'string_price\', 90000) + \' - Your eyes are already big.');
  }
  scene.build();
}

function enterSetEyeReductionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_eyesize ?? 0) > 0) {
    if (qspFunc(s, 'money', 'can_afford', 90000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''eyeMin''">Eye reduction surgery</a> - ' + $func('money', ...
    } else {
      // TODO-QSP: 'Eye reduction surgery - ' + $func('money', 'string_price', 90000)
    }
  } else {
    // TODO-QSP: dynamic text: Eye reduction surgery - ' + $func('money', 'string_price', 90000) + ' - Your eye...
    scene.text('Eye reduction surgery - \' + $func(\'money\', \'string_price\', 90000) + \' - Your eyes are already small.');
  }
  scene.build();
}

function enterSetLiposuctionAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_mass ?? 0)?.['body'] > 40) {
    if (qspFunc(s, 'money', 'can_afford', 75000)) {
      // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''lyposuction''">Liposuction</a> - ' + $func('money', 'stri...
    } else {
      // TODO-QSP: 'Liposuction - ' + $func('money', 'string_price', 75000)
    }
  } else {
    // TODO-QSP: dynamic text: Liposuction - ' + $func('money', 'string_price', 75000) + ' - You're already thi...
    scene.text('Liposuction - \' + $func(\'money\', \'string_price\', 75000) + \' - You\'re already thin.');
  }
  scene.build();
}

function enterSetRemoveBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] !== 0) {
    if (qspFunc(s, 'money', 'can_afford', 90000)) {
      // TODO-QSP: '<a href="exec: stringimplant = 0 & fillimplant = 0 & gt ''clinic_functions'', ''bImplantA'', 0">Rem...
    } else {
      // TODO-QSP: 'Remove breast implants - ' + $func('money', 'string_price', 90000)
    }
  } else {
    // TODO-QSP: dynamic text: Remove breast implants - ' + $func('money', 'string_price', 90000) + ' - You hav...
    scene.text('Remove breast implants - \' + $func(\'money\', \'string_price\', 90000) + \' - You have no breast implants.');
  }
  scene.build();
}

function enterSetGetSmallBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get small breast implants - ' + $func('money', 'string_price', 170000) + ' - You...
    scene.text('Get small breast implants - \' + $func(\'money\', \'string_price\', 170000) + \' - You already have \' + iif(fillimplant = 1, \'fillable\', \'string\') + \' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 170000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''small''">Get small breast implants</a> - '...
  } else {
    // TODO-QSP: 'Get small breast implants - ' + $func('money', 'string_price', 170000)
  }
  return;
  scene.build();
}

function enterSetGetMediumBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get medium breast implants - ' + $func('money', 'string_price', 180000) + ' - Yo...
    scene.text('Get medium breast implants - \' + $func(\'money\', \'string_price\', 180000) + \' - You already have \' + iif(fillimplant = 1, \'fillable\', \'string\') + \' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 180000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''medium''">Get medium breast implants</a> -...
  } else {
    // TODO-QSP: 'Get medium breast implants - ' + $func('money', 'string_price', 180000)
  }
  return;
  scene.build();
}

function enterSetGetLargeBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get large breast implants - ' + $func('money', 'string_price', 190000) + ' - You...
    scene.text('Get large breast implants - \' + $func(\'money\', \'string_price\', 190000) + \' - You already have \' + iif(fillimplant = 1, \'fillable\', \'string\') + \' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 190000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''large''">Get large breast implants</a> - '...
  } else {
    // TODO-QSP: 'Get large breast implants - ' + $func('money', 'string_price', 190000)
  }
  return;
  scene.build();
}

function enterSetGet_XXLBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get XXL breast implants - ' + $func('money', 'string_price', 200000) + ' - You a...
    scene.text('Get XXL breast implants - \' + $func(\'money\', \'string_price\', 200000) + \' - You already have \' + iif(fillimplant = 1, \'fillable\', \'string\') + \' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 200000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''XXL''">Get XXL breast implants</a> - ' + $...
  } else {
    // TODO-QSP: 'Get XXL breast implants - ' + $func('money', 'string_price', 200000)
  }
  return;
  scene.build();
}

function enterSetGetFillableBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get fillable implants - ' + $func('money', 'string_price', 200000) + ' - You alr...
    scene.text('Get fillable implants - \' + $func(\'money\', \'string_price\', 200000) + \' - You already have \' + iif(fillimplant = 1, \'fillable\', \'string\') + \' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 200000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''fillable''">Get fillable implants</a> - ' ...
  } else {
    // TODO-QSP: 'Get fillable implants - ' + $func('money', 'string_price', 200000)
  }
  return;
  scene.build();
}

function enterSetGetStringBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fillimplant ?? 0) === 1  ||  ((s as any).stringimplant ?? 0) === 1) {
    // TODO-QSP: dynamic text: Get string implants - ' + $func('money', 'string_price', 250000) + ' - You alrea...
    scene.text('Get string implants - \' + $func(\'money\', \'string_price\', 250000) + \' - You already have \' + iif(fillimplant = 1, \'fillable\', \'string\') + \' implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 250000)) {
    // TODO-QSP: '<a href="exec: gt ''clinic_functions'', ''bImplantA'', ''string''">Get string implants</a> - ' + $f...
  } else {
    // TODO-QSP: 'Get string implants - ' + $func('money', 'string_price', 250000)
  }
  return;
  scene.build();
}

function enterSetDrainStringBreastImplantAct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).stringimplant ?? 0))) {
    // TODO-QSP: dynamic text: Drain string implant - ' + $func('money', 'string_price', 2000) + ' - You don't ...
    scene.text('Drain string implant - \' + $func(\'money\', \'string_price\', 2000) + \' - You don\'t have string implants.');
    return;
  }
  if (((s as any).bodyVars ?? 0)?.['bust_silicone'] < 30) {
    // TODO-QSP: dynamic text: Drain string implant - ' + $func('money', 'string_price', 2000) + ' - Your strin...
    scene.text('Drain string implant - \' + $func(\'money\', \'string_price\', 2000) + \' - Your string implant is too small to drain.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 2000)) {
    // TODO-QSP: '<a href="exec: xgt ''clinic_functions'', ''bImplantB'', ''drain''">Drain string implant</a> - ' + $...
  } else {
    // TODO-QSP: 'Drain string implant - ' + $func('money', 'string_price', 2000)
  }
  return;
  scene.build();
}

function enterSetBuySiliconeBagAct(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).fillimplant ?? 0))) {
    // TODO-QSP: dynamic text: Buy silicone bag - ' + $func('money', 'string_price', 500) + ' - You don't have ...
    scene.text('Buy silicone bag - \' + $func(\'money\', \'string_price\', 500) + \' - You don\'t have fillable implants.');
    return;
  }
  if (qspFunc(s, 'money', 'can_afford', 500)) {
    // TODO-QSP: '<a href="exec: xgt ''clinic_functions'', ''bImplantB'', ''bag''">Buy silicone bag</a> - ' + $func('...
  } else {
    // TODO-QSP: 'Buy silicone bag - ' + $func('money', 'string_price', 500)
  }
  return;
  scene.build();
}

function enterElectrolysis(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 80000);
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  (s as any).pcs_leghair = 0;
  (s as any).pcs_pubes = 0;
  (s as any).lashair = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/electrolysis.jpg');
  scene.text('The surgeon has you strip completely and lie down on the table. Over the next few hours, you\'re treated by a laser over and over again. When the treatment is finished and you get up from the table, your skin feels silky smooth.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterLipPlus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 25000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and your lips are fuller.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterLipMin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 30000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_lip = ((s as any).pcs_lip ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and your lips are thinner.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEyePlus(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 90000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up again, the procedure is complete and your eyes are larger.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEyeMin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 90000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_eyesize = ((s as any).pcs_eyesize ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and your eyes are smaller.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterLyposuction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 75000);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).pcs_mass['body'] = ((s as any).pcs_mass['body'] ?? 0) - (40);
  if (((s as any).pcs_mass ?? 0)?.['body'] < 11) {
    (s as any).pcs_mass['body'] = 11;
  }
  qspCall(s, 'body', 'softreset');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
  scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply. We\'ll be done before you know it."');
  scene.text('When you wake up, the procedure is complete and you\'re looking thinner.');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBImplantA(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).locArgs?.[1] ?? 0) === 'small') {
    (s as any).temp_pay_amount = 170000;
    (s as any).temp_bust_size = 10;
    (s as any).fillimplant = 0;
    (s as any).stringimplant = 0;
  } else {
    (s as any).temp_pay_amount = 180000;
    (s as any).temp_bust_size = 20;
    (s as any).fillimplant = 0;
    (s as any).stringimplant = 0;
    if (((s as any).locArgs?.[1] ?? 0) === 'large') {
      (s as any).temp_pay_amount = 190000;
      (s as any).temp_bust_size = 30;
      (s as any).fillimplant = 0;
      (s as any).stringimplant = 0;
    } else {
      (s as any).temp_pay_amount = 200000;
      (s as any).temp_bust_size = 40;
      (s as any).fillimplant = 0;
      (s as any).stringimplant = 0;
      if (((s as any).locArgs?.[1] ?? 0) === 'fillable') {
        (s as any).temp_pay_amount = 200000;
        (s as any).temp_bust_size = 20;
        (s as any).fillimplant = 1;
        (s as any).stringimplant = 0;
      } else {
        (s as any).temp_pay_amount = 250000;
        (s as any).temp_bust_size = 20;
        (s as any).fillimplant = 0;
        (s as any).stringimplant = 1;
      }
      qspCall(s, 'money', 'pay', ((s as any).temp_pay_amount ?? 0));
      (s as any).bodyVars['bust_silicone'] = ((s as any).temp_bust_size ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/residential/clinic/cosmeticsur.jpg');
      scene.text('The surgeon has you strip, put on a gown and lie down on the table, where he gives you a mask. "Just breathe in deeply… we\'ll be done before you know it."');
      scene.text('When you wake up again, the procedure is complete and you look down at your new breasts.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'reception_option_label':
      enterReceptionOptionLabel(s, scene);
      break;
    case 'reception_attend':
      enterReceptionAttend(s, scene);
      break;
    case '_category_name':
      enterCategoryName(s, scene);
      break;
    case 'herpes_shot':
      enterHerpesShot(s, scene);
      break;
    case 'gonorrhea_shot':
      enterGonorrheaShot(s, scene);
      break;
    case 'syphilis_shot':
      enterSyphilisShot(s, scene);
      break;
    case 'yeast_cure':
      enterYeastCure(s, scene);
      break;
    case 'herpes_cure':
      enterHerpesCure(s, scene);
      break;
    case 'set_electrolysis_act':
      enterSetElectrolysisAct(s, scene);
      break;
    case 'set_lip_enlargement_act':
      enterSetLipEnlargementAct(s, scene);
      break;
    case 'set_lip_reduction_act':
      enterSetLipReductionAct(s, scene);
      break;
    case 'set_eye_enlargement_act':
      enterSetEyeEnlargementAct(s, scene);
      break;
    case 'set_eye_reduction_act':
      enterSetEyeReductionAct(s, scene);
      break;
    case 'set_liposuction_act':
      enterSetLiposuctionAct(s, scene);
      break;
    case 'set_remove_breast_implant_act':
      enterSetRemoveBreastImplantAct(s, scene);
      break;
    case 'set_get_small_breast_implant_act':
      enterSetGetSmallBreastImplantAct(s, scene);
      break;
    case 'set_get_medium_breast_implant_act':
      enterSetGetMediumBreastImplantAct(s, scene);
      break;
    case 'set_get_large_breast_implant_act':
      enterSetGetLargeBreastImplantAct(s, scene);
      break;
    case 'set_get_XXL_breast_implant_act':
      enterSetGet_XXLBreastImplantAct(s, scene);
      break;
    case 'set_get_fillable_breast_implant_act':
      enterSetGetFillableBreastImplantAct(s, scene);
      break;
    case 'set_get_string_breast_implant_act':
      enterSetGetStringBreastImplantAct(s, scene);
      break;
    case 'set_drain_string_breast_implant_act':
      enterSetDrainStringBreastImplantAct(s, scene);
      break;
    case 'set_buy_silicone_bag_act':
      enterSetBuySiliconeBagAct(s, scene);
      break;
    case 'electrolysis':
      enterElectrolysis(s, scene);
      break;
    case 'lipPlus':
      enterLipPlus(s, scene);
      break;
    case 'lipMin':
      enterLipMin(s, scene);
      break;
    case 'eyePlus':
      enterEyePlus(s, scene);
      break;
    case 'eyeMin':
      enterEyeMin(s, scene);
      break;
    case 'lyposuction':
      enterLyposuction(s, scene);
      break;
    case 'bImplantA':
      enterBImplantA(s, scene);
      break;
    default:
      enterReceptionOptionLabel(s, scene);
      break;
  }
}

export const clinic_functions: LocationDef = {
  name: 'clinic_functions',
  title: '"I\'m sorry, but your slot has already been given to someone ',
  region: 'other',
  enter: enter,
};
