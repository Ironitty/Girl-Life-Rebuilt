import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>The Golden Curl Salon</b></center>');
  scene.img('images/locations/city/citycenter/mall/golden curl/golden curl.jpg');
  scene.text('Established several years back, The Golden Curl is known to offer high-quality services ranging from hairstyles, dimensional hair shading, to updos, expansions, and fixing.');
  scene.text('As you as you walk in you are greeted by a smiling receptionist, "Welcome to The Golden Curl Salon! What can we do for you today?"');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).hour ?? 0) <= 8  ||  ((s as any).hour ?? 0) >= 20) {
    scene.text('The hair salon is closed. You should return during their working hours.');
    return;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    ]);
  }
  // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 750) = 1, '"exec:gt 'hairsalon', 'cu...
  scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 750) = 1, \'"exec:gt \'hairsalon\', \'cuthair\'"\', \') + \'>Get a haircut - \' + $func(\'money\', \'string_price\', 750) + \'</a>');
  // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 500) = 1, '"exec:gt 'hairsalon', 'cu...
  scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 500) = 1, \'"exec:gt \'hairsalon\', \'curlhair\'"\', \') + \'>Get your hair curled - \' + $func(\'money\', \'string_price\', 500) + \'</a>');
  // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 500) = 1, '"exec:gt 'hairsalon', 'st...
  scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 500) = 1, \'"exec:gt \'hairsalon\', \'straighthair\'"\', \') + \'>Get your hair straightened - \' + $func(\'money\', \'string_price\', 500) + \'</a>');
  // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 1000) = 1, '"exec:gt 'hairsalon', 'd...
  scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 1000) = 1, \'"exec:gt \'hairsalon\', \'dyehair\'"\', \') + \'>Get your hair dyed - \' + $func(\'money\', \'string_price\', 1000) + \'</a>');
  if (((s as any).nathcol ?? 0) !== ((s as any).pcs_haircol ?? 0)) {
    if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
      // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 500) = 1, '"exec:gt 'hairsalon', 'to...
      scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 500) = 1, \'"exec:gt \'hairsalon\', \'touchup\'"\', \') + \'>Touch up hair colour - \' + $func(\'money\', \'string_price\', 500) + \'</a>');
    } else {
      // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 1000) = 1, '"exec:gt 'hairsalon', 't...
      scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 1000) = 1, \'"exec:gt \'hairsalon\', \'touchup2\'"\', \') + \'>Re-dye your existing hair colour - \' + $func(\'money\', \'string_price\', 1000) + \'</a>');
    }
  }
  // TODO-QSP: dynamic text: <a href=' + iif(func('money', 'can_afford', 1250) = 1, '"exec:gt 'hairsalon', 'b...
  scene.text('<a href=\' + iif(func(\'money\', \'can_afford\', 1250) = 1, \'"exec:gt \'hairsalon\', \'braidhair\'"\', \') + \'>Get your hair braided - \' + $func(\'money\', \'string_price\', 1250) + \'</a>');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'Buy Scrunchies [+$func(\'money\', \'get_cost_string\', 100)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 100);
      (s as any).mc_inventory['scrunchies'] = ((s as any).mc_inventory['scrunchies'] ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.text('"Only scrunchies today please!" you tell the cashier.');
      // TODO-QSP: dynamic text: "That'll be ' + $func('money', 'string_price', 100) + '!" the receptionist repli...
      scene.text('"That\'ll be \' + $func(\'money\', \'string_price\', 100) + \'!" the receptionist replies back.');
      scene.text('You pay for the scrunchies as you are handed a little box.');
      scene.actions([
        { label: 'Move away', goto: ['hairsalon', 'start'] },
      ]);
    }
  } },
    { label: 'Buy Hair accessories [+$func(\'money\', \'get_cost_string\', 120)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 120) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 120);
      (s as any).mc_inventory['kirbygrips'] = ((s as any).mc_inventory['kirbygrips'] ?? 0) + (10);
      qspCall(s, 'stat', '');
      scene.text('"Only hair pins today please!" you tell the cashier.');
      // TODO-QSP: dynamic text: "That'll be ' + $func('money', 'string_price', 120) + '!" the receptionist repli...
      scene.text('"That\'ll be \' + $func(\'money\', \'string_price\', 120) + \'!" the receptionist replies back.');
      scene.text('You pay for the hair pins as you are handed a little box.');
      scene.actions([
        { label: 'Move away', goto: ['hairsalon', 'start'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCuthair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('You approach the receptionist and ask, "Hi, I would like to get my hair cut. Can someone do it right away or should I come back later?"');
  scene.text('She checks the computer, "There seems to be an available time, have you already decided on how much we shall cut off?"');
  if (((s as any).pcs_hairlng ?? 0) > 10) {
    scene.actions([
      { label: 'Very short', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I\'d like to have my hair cut very short!" you tell her.');
    scene.text('"Of course! And what is your name?" she says with a friendly smile on her face, typing down your name in the computer. It doesn\'t take long before you are shown to a free seat.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 10;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done and what\'s left from you former hairstyle is a very short buzzcut.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 31) {
    scene.actions([
      { label: 'Short, but not too short', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I\'d like to have my hair cut short, but not too short." you tell her.');
    scene.text('"Of course! That\'s not an issue at all!" she says, typing in your name in the computer. The receptionist leads you to one of the free seats and makes a gesture to you, to sit down.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 60) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 31;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. And with that you have a new hairstyle, which barely reaches your earlobes.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 31;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. And with that you have a new hairstyle, which barely reaches your earlobes.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 31;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. And with that you have a new hairstyle, which barely reaches your earlobes.');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 81) {
    scene.actions([
      { label: 'About chin-line length', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Could you cut my hair back to my chin line, please?" you ask the receptionist.');
    scene.text('"Shouldn\'t be any issues at all. Let me just fill out your name here and you\'ll be ready to go." she tells you and before you know it she shows you to a free chair where you are seated.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 90) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 81;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your new hairstyle goes down to your chin-line and you have a fringe, covering your forehead.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 81;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your new hairstyle goes down to you chin-line.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 81;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your new hairstyle goes down to you chin-line.');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 161) {
    scene.actions([
      { label: 'Shoulder length', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"I would like to have my hair cut back to about the height of my shoulder. Would you please be so kind and do that?" you ask her.');
    scene.text('"Sure, no problem at all!" she tells you, geasturing you, to take a seat into a free chair and wait for the hairdresser.');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 170) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 161;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your hair now goes just to your shoulders and you have a fringe, covering your forehead.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 161;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your hair now goes just to your shoulders.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 161;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your hair now goes just to your shoulders.');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 261) {
    scene.actions([
      { label: 'About brastrap length', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Could you cut my hair back to where my bra-strap sits?" you ask the receptionist.');
    scene.text('"We\'ll take care of it, don\'t you worry!" she says, typing your name into the computer and leading you to a free seat, "The hairdresser will come around in just a second."');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 280) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 261;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the line where your bra sits, in addition she made you a fringe, covering your forehead, as requested.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 261;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the line where your bra sits.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 261;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the line where your bra sits.');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 401) {
    scene.actions([
      { label: 'About back length', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Could you cut my hair back to about the small of my back?" you ask the receptionist.');
    scene.text('"Oh, of course! Just a second if you don\'t mind…" she says as she adds your name to the system, "Follow me please and I\'ll show you to your seat…"');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 401) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 401;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to the small of your back, in addition she made you a fringe, covering your forehead, as requested.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 401;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to the small of your back.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 401;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to the small of your back.');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 601) {
    scene.actions([
      { label: 'About hip length', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Could you cut my hair back to about the top of your hips?" you ask her.');
    scene.text('"That won\'t be any issues!" she says as she fills out a form, asking you some questions. After she\'s done, she gestures you sit down on one of the free seat, "The hairdresser will see you in a second."');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 601) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 601;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the top of your hips, in addition she made you a fringe, covering your forehead, as requested.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 601;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the top of your hips.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 601;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the top of your hips.');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_hairlng ?? 0) > 801) {
    scene.actions([
      { label: 'Cut the tips', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('"Could you cut my hair back a bit?" you ask the receptionist.');
    scene.text('"Wow, your hair is beautiful! It won\'t be any problems!", she tells you and before you know it she shows you to a free chair where you are seated.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((s as any).pcs_hairlng ?? 0) > 801) {
      qspCall(s, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 801;
    (s as any).hbangs = 1;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She just cuts the tips of your, barely making it shorter and as requested, she cut you a nice fringe, which now covers your forehead.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).pcs_hairlng = 801;
    (s as any).hbangs = 0;
    (s as any).pcs_hairbsh = 1;
    qspCall(s, 'money', 'pay', 750);
    qspCall(s, 'stat', '');
    qspCall(s, 'hairsalon', 'mixed');
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She just cuts the tips of your, barely making it shorter.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).pcs_hairlng = 801;
      (s as any).pcs_hairbsh = 1;
      qspCall(s, 'money', 'pay', 750);
      qspCall(s, 'stat', '');
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About half an hour passes as the hairdresser is done cutting your hair. She just cuts the tips of your, barely making it shorter. ');
      scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Change your mind', goto: ['hairsalon', 'start'] },
  ]);
  scene.build();
}

function enterStraighthair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('"I would like to have my hair straightened…" you tell the receptionist.');
  if (((s as any).pcs_hairlng ?? 0) <= 80) {
    scene.text('"Sorry, your hair is too short to straighten. But don\'t hesitate to come back when it\'s grown out." the receptionist replies, smiling.');
    scene.actions([
      { label: 'Move away', goto: ['hairsalon', 'start'] },
    ]);
  } else {
    scene.text('The receptionist looks at you, "I\'m sorry but your hair is already as straight as we can make it… Come see us when it\'s a bit more curly and we\'ll sort you out."');
    if (((s as any).hbraids ?? 0) > 0) {
      scene.text('"Your hair is in braids right now, to straighten it we would have to remove them. Is that what you want us to do?" the receptionist asks you.');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (20+((s as any).hbraids ?? 0)*2+((s as any).pcs_hairlng ?? 0)/100);
    (s as any).hbraids = 0;
    qspCall(s, 'money', 'pay', 500);
    (s as any).curly = 0;
    qspCall(s, 'stat', '');
    if (((s as any).defcurly ?? 0) === 0) {
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About twenty minutes pass as your braids were removed and your hair was straightened back to its original shape, "You can pay at the reception, hun." the hairdresser tells you before heading off…');
    } else {
      (s as any).straight = Math.floor(Math.random() * 8) + 14;
      qspCall(s, 'hairsalon', 'mixed');
      scene.text('About twenty minutes pass as your braids were removed and your hair was straightened back to its original shape, "You can pay at the reception, hun." the hairdresser tells you before heading off…');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', goto: ['hairsalon', 'start'] },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 20;
      (s as any).curly = 0;
      qspCall(s, 'stat', '');
      if (((s as any).defcurly ?? 0) === 0) {
        qspCall(s, 'hairsalon', 'mixed');
        scene.text('About twenty minutes pass as your hair is straightened back to its original shape, "You can pay at the receptionist." the hairdresser tells you before heading off…');
      } else {
        (s as any).straight = Math.floor(Math.random() * 8) + 14;
        qspCall(s, 'hairsalon', 'mixed');
        scene.text('About twenty minutes pass as your hair is straightened back to its original shape, "You can pay at the receptionist." the hairdresser tells you before heading off…');
      }
      qspCall(s, 'money', 'pay', 500);
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
      ]);
    }
    scene.actions([
      { label: 'Move away', goto: ['hairsalon', 'start'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'cuthair':
      enterCuthair(s, scene);
      break;
    case 'straighthair':
      enterStraighthair(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const hairsalon: LocationDef = {
  name: 'hairsalon',
  title: 'The Golden Curl Salon',
  region: 'other',
  description: ['Established several years back, The Golden Curl is known to offer high-quality services ranging from hairstyles, dimensional hair shading, to updos, expansions, and fixing.'],
  enter: enter,
};
