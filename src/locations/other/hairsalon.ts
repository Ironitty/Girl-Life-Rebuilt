import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'hairsalon';
  (s as any).menu_arg = 'start';
  scene.text('<center><b>The Golden Curl Salon</b></center>');
  scene.img('images/locations/city/citycenter/mall/golden curl/golden curl.jpg');
  scene.text('Established several years back, The Golden Curl is known to offer high-quality services ranging from hairstyles, dimensional hair shading, to updos, expansions, and fixing.');
  scene.text('As you as you walk in you are greeted by a smiling receptionist, "Welcome to The Golden Curl Salon! What can we do for you today?"');
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).hour ?? 0) <= 8  ||  ((s as any).hour ?? 0) >= 20) {
    scene.text('The hair salon is closed. You should return during their working hours.');
    scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
]);
    return;
  }
  // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 750) = 1, '"exec:gt ''hairsalon'', ...
  scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 750) === 1) ? ('"exec:gt \'hairsalon\', \'cuthair\'"') : ('')) + '>Get a haircut - 750₽</a>');
  // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 500) = 1, '"exec:gt ''hairsalon'', ...
  scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 500) === 1) ? ('"exec:gt \'hairsalon\', \'curlhair\'"') : ('')) + '>Get your hair curled - 500₽</a>');
  // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 500) = 1, '"exec:gt ''hairsalon'', ...
  scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 500) === 1) ? ('"exec:gt \'hairsalon\', \'straighthair\'"') : ('')) + '>Get your hair straightened - 500₽</a>');
  // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 1000) = 1, '"exec:gt ''hairsalon'',...
  scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 1000) === 1) ? ('"exec:gt \'hairsalon\', \'dyehair\'"') : ('')) + '>Get your hair dyed - 1000₽</a>');
  if (((s as any).nathcol ?? 0) !== ((s as any).pcs_haircol ?? 0)) {
    if (((s as any).dyefade ?? 0) > 0  &&  ((s as any).dyefade ?? 0) < 7) {
      // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 500) = 1, '"exec:gt ''hairsalon'', ...
      scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 500) === 1) ? ('"exec:gt \'hairsalon\', \'touchup\'"') : ('')) + '>Touch up hair colour - 500₽</a>');
    } else {
      if ((!((s as any).dyefade ?? 0))) {
        // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 1000) = 1, '"exec:gt ''hairsalon'',...
        scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 1000) === 1) ? ('"exec:gt \'hairsalon\', \'touchup2\'"') : ('')) + '>Re-dye your existing hair colour - 1000₽</a>');
      }
    }
  }
  // TODO-QSP: dynamic text: '<a href=' + iif(func('money', 'can_afford', 1250) = 1, '"exec:gt ''hairsalon'',...
  scene.text('<a href=' + ((qspFunc(s, 'money', 'can_afford', 1250) === 1) ? ('"exec:gt \'hairsalon\', \'braidhair\'"') : ('')) + '>Get your hair braided - 1250₽</a>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['city_mall', ''] },
    { label: 'Buy Scrunchies', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 100) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 100);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['scrunchies'] = ((st as any).mc_inventory['scrunchies'] ?? 0) + (10);
      qspCall(st, 'stat', '');
      scene.text('"Only scrunchies today please!" you tell the cashier.');
      // TODO-QSP: dynamic text: '"That''ll be ' + $func('money', 'string_price', 100) + '!" the receptionist rep...
      scene.text('"That\'ll be 100₽!" the receptionist replies back.');
      scene.text('You pay for the scrunchies as you are handed a little box.');
      scene.actions([
        { label: 'Move away', goto: ['hairsalon', 'start'] },
      ]);
    }
  } },
    { label: 'Buy Hair accessories', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 120) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 120);
      ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['kirbygrips'] = ((st as any).mc_inventory['kirbygrips'] ?? 0) + (10);
      qspCall(st, 'stat', '');
      scene.text('"Only hair pins today please!" you tell the cashier.');
      // TODO-QSP: dynamic text: '"That''ll be ' + $func('money', 'string_price', 120) + '!" the receptionist rep...
      scene.text('"That\'ll be 120₽!" the receptionist replies back.');
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
    qspCall(st, 'stat', '');
    scene.text('"I\'d like to have my hair cut very short!" you tell her.');
    scene.text('"Of course! And what is your name?" she says with a friendly smile on her face, typing down your name in the computer. It doesn\'t take long before you are shown to a free seat.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 10;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"I\'d like to have my hair cut short, but not too short." you tell her.');
    scene.text('"Of course! That\'s not an issue at all!" she says, typing in your name in the computer. The receptionist leads you to one of the free seats and makes a gesture to you, to sit down.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 60) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 31;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. And with that you have a new hairstyle, which barely reaches your earlobes.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 31;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. And with that you have a new hairstyle, which barely reaches your earlobes.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 31;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"Could you cut my hair back to my chin line, please?" you ask the receptionist.');
    scene.text('"Shouldn\'t be any issues at all. Let me just fill out your name here and you\'ll be ready to go." she tells you and before you know it she shows you to a free chair where you are seated.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 90) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 81;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your new hairstyle goes down to your chin-line and you have a fringe, covering your forehead.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 81;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your new hairstyle goes down to you chin-line.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 81;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"I would like to have my hair cut back to about the height of my shoulder. Would you please be so kind and do that?" you ask her.');
    scene.text('"Sure, no problem at all!" she tells you, geasturing you, to take a seat into a free chair and wait for the hairdresser.');
    scene.actions([
      { label: 'Sit down.', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 170) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 161;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your hair now goes just to your shoulders and you have a fringe, covering your forehead.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 161;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. Your hair now goes just to your shoulders.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 161;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"Could you cut my hair back to where my bra-strap sits?" you ask the receptionist.');
    scene.text('"We\'ll take care of it, don\'t you worry!" she says, typing your name into the computer and leading you to a free seat, "The hairdresser will come around in just a second."');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 280) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 261;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the line where your bra sits, in addition she made you a fringe, covering your forehead, as requested.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 261;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the line where your bra sits.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 261;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"Could you cut my hair back to about the small of my back?" you ask the receptionist.');
    scene.text('"Oh, of course! Just a second if you don\'t mind…" she says as she adds your name to the system, "Follow me please and I\'ll show you to your seat…"');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 401) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 401;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to the small of your back, in addition she made you a fringe, covering your forehead, as requested.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 401;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to the small of your back.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 401;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"Could you cut my hair back to about the top of your hips?" you ask her.');
    scene.text('"That won\'t be any issues!" she says as she fills out a form, asking you some questions. After she\'s done, she gestures you sit down on one of the free seat, "The hairdresser will see you in a second."');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 601) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 601;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the top of your hips, in addition she made you a fringe, covering your forehead, as requested.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 601;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She cut your hair back to about the top of your hips.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 601;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    qspCall(st, 'stat', '');
    scene.text('"Could you cut my hair back a bit?" you ask the receptionist.');
    scene.text('"Wow, your hair is beautiful! It won\'t be any problems!", she tells you and before you know it she shows you to a free chair where you are seated.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    if (((st as any).pcs_hairlng ?? 0) > 801) {
      qspCall(st, 'stat', '');
      scene.text('The hairdresser comes over, "Before we begin, I need to ask if I should cut you a fringe or not?"');
      scene.actions([
        { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 801;
    (st as any).hbangs = 1;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She just cuts the tips of your, barely making it shorter and as requested, she cut you a nice fringe, which now covers your forehead.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
        { label: 'No', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_hairlng = 801;
    (st as any).hbangs = 0;
    (st as any).pcs_hairbsh = 1;
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About half an hour passes as the hairdresser is done cutting your hair. She just cuts the tips of your, barely making it shorter.');
    scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
      ]);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 30;
      (st as any).pcs_hairlng = 801;
      (st as any).pcs_hairbsh = 1;
      qspCall(st, 'money', 'pay', 750);
      qspCall(st, 'stat', '');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
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
  // TODO-QSP: end
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
    if (((s as any).straight ?? 0) >= 10  ||  (((s as any).defcurly ?? 0) === 0  &&  ((s as any).curly ?? 0) === 0)) {
      scene.text('The receptionist looks at you, "I\'m sorry but your hair is already as straight as we can make it… Come see us when it\'s a bit more curly and we\'ll sort you out."');
      scene.actions([
        { label: 'Move away', goto: ['hairsalon', 'start'] },
      ]);
    } else {
      if (((s as any).hbraids ?? 0) > 0) {
        scene.text('"Your hair is in braids right now, to straighten it we would have to remove them. Is that what you want us to do?" the receptionist asks you.');
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (20+((st as any).hbraids ?? 0)*2+((st as any).pcs_hairlng ?? 0)/100);
    (st as any).hbraids = 0;
    qspCall(st, 'money', 'pay', 500);
    (st as any).curly = 0;
    qspCall(st, 'stat', '');
    if ((!((st as any).defcurly ?? 0))) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('About twenty minutes pass as your braids were removed and your hair was straightened back to its original shape, "You can pay at the reception, hun." the hairdresser tells you before heading off…');
    } else {
      (st as any).straight = (Math.floor(Math.random() * 8) + 14);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('About twenty minutes pass as your braids were removed and your hair was straightened back to its original shape, "You can pay at the reception, hun." the hairdresser tells you before heading off…');
    }
    qspCall(st, 'stat', '');
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
        if ((!((s as any).defcurly ?? 0))) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMixed(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.text('About twenty minutes pass as your hair is straightened back to its original shape, "You can pay at the receptionist." the hairdresser tells you before heading off…');
        } else {
          (s as any).straight = (Math.floor(Math.random() * 8) + 14);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMixed(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.text('About twenty minutes pass as your hair is straightened back to its original shape, "You can pay at the receptionist." the hairdresser tells you before heading off…');
        }
        qspCall(s, 'money', 'pay', 500);
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCurlhair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('"I would like to have my hair curled!" you tell the receptionist.');
  if (((s as any).pcs_hairlng ?? 0) <= 80) {
    scene.text('"Sorry, your hair is too short to curl. But don\'t hesitate to come back when it\'s grown out." the receptionist replies, smiling.');
    scene.actions([
      { label: 'Move away', goto: ['hairsalon', 'start'] },
    ]);
  } else {
    if (((s as any).curly ?? 0) >= 10) {
      scene.text('The receptionist looks at you, "Your hair is already as curly as we can make it… Come see us when it\'s a bit less curly and we\'ll sort you out."');
      scene.actions([
        { label: 'Move away', goto: ['hairsalon', 'start'] },
      ]);
    } else {
      if (((s as any).hbraids ?? 0) > 0) {
        scene.text('"Your hair is in braids right now, to curl it we would have to remove them. Is that what you want us to do?" the receptionist asks you.');
        scene.actions([
          { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (20+((st as any).hbraids ?? 0)*2+((st as any).pcs_hairlng ?? 0)/100);
    (st as any).hbraids = 0;
    qspCall(st, 'money', 'pay', 500);
    qspCall(st, 'stat', '');
    if ((!((st as any).defcurly ?? 0))) {
      (st as any).curly = (Math.floor(Math.random() * 8) + 14);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('About twenty minutes pass as your braids are removed and your hair got curled, "You can pay at the reception, hun." the hairdresser tells you before heading off…');
    } else {
      (st as any).curly = 2147483647;
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.text('About twenty minutes pass as your braids are removed and your hair got curled, "You can pay at the reception, hun." the hairdresser tells you before heading off…');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
          { label: 'No', goto: ['hairsalon', 'start'] },
        ]);
      } else {
        (s as any).minut = ((s as any).minut ?? 0) + 20;
        qspCall(s, 'money', 'pay', 500);
        qspCall(s, 'stat', '');
        if ((!((s as any).defcurly ?? 0))) {
          (s as any).curly = (Math.floor(Math.random() * 8) + 14);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMixed(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.text('About twenty minutes pass as you have your hair curled, "It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
        } else {
          (s as any).curly = 2147483647;
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMixed(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.text('About twenty minutes pass as you have your hair curled back to its original shape, "It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
        }
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDyehair(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('"I would like to dye my hair!" you excitedly tell the receptionist.');
  if (((s as any).hbraids ?? 0) > 0) {
    scene.text('"Your hair is in braids right now, to dye it we would have to remove them.');
    return;
  }
  scene.text('She smiles hearing you that excited, "We\'ll fix that for you! What colour would like to have your hair dyed?"');
  if (((s as any).pcs_haircol ?? 0) !== ((s as any).nathcol ?? 0)) {
    scene.actions([
      { label: 'Return to natural colour', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: "I want to go back to my natural hair colour." you say as you pick at your hair ...
    scene.text(`"I want to go back to my natural hair colour." you say as you pick at your hair in the mirror, "I don't think ${((st as any).pcs_haircolor ?? '')} is working for me."`);
    scene.text('"Sure thing!", she says in a cheerful way, "Just a second and I\'ll see who of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'money', 'pay', 1000);
    (st as any).pcs_haircol = ((st as any).nathcol ?? 0);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 0) {
    scene.actions([
      { label: 'Black', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Black!" you say, "I want it to be raven black, dark as the night, please."');
    scene.text('"Sure thing!", she says in a cheerful way, "Just a second and I\'ll see who of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_haircol = 0;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 1) {
    scene.actions([
      { label: 'Brown', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I\'d like to have my hair brown!" you say.');
    scene.text('"Sure thing!", she says in a cheerful way, "Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_haircol = 1;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 2) {
    scene.actions([
      { label: 'Red', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I\'d like to have my hair colour in a fiercely red!" you say with a devilish grin.');
    scene.text('"Sure thing!", she says in a cheerful way, "Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_haircol = 2;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 3) {
    scene.actions([
      { label: 'Blonde', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"Blonde! Blondes have more fun. I want to see if that is true!" you giggle.');
    scene.text('"Blondes definitely have more fun!", she says with a wink, "Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).pcs_haircol = 3;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 4) {
    scene.actions([
      { label: 'Light red', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Light red, red like a fire truck." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 4;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Move away', goto: ['hairsalon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 5) {
    scene.actions([
      { label: 'Dark blue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I want a really dark blue colour, almost purple." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 5;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 6) {
    scene.actions([
      { label: 'Medium blue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I feel like trying an electric blue." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 6;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 7) {
    scene.actions([
      { label: 'Light blue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Make my hair light blue, like candy floss." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 7;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 8) {
    scene.actions([
      { label: 'Dark green', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" the receptionist asks cheerfully.');
    scene.text('"I want a deep green, like emerald." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 8;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 9) {
    scene.actions([
      { label: 'Medium green', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I\'d like a nice forest green, like summer leaves." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 9;
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Move away', goto: ['hairsalon', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 10) {
    scene.actions([
      { label: 'Light green', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Can you do a nice light green, sort of like new leaves?" you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 10;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 11) {
    scene.actions([
      { label: 'Dark pink', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"How about a really dark pink, almost like a cross between purple and red." you tell her, smiling.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 11;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 12) {
    scene.actions([
      { label: 'Medium pink', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I want it to be pink like bubble gum with maybe a few really light pink streaks." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 12;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 13) {
    scene.actions([
      { label: 'Light pink', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"A soft light pink, like candy floss." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 13;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 14) {
    scene.actions([
      { label: 'Dark purple', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I want it nice dark purple, like a really dark red wine." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 14;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 15) {
    scene.actions([
      { label: 'Medium purple', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I\'m leaning towards purple, not that dark so you can\'t tell it is purple, you know?" you tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 15;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 16) {
    scene.actions([
      { label: 'Light purple', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"I\'m thinking a really light purple colour, like grape soda." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 16;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 17) {
    scene.actions([
      { label: 'Light orange', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Light orange, just like a fox." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 17;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 18) {
    scene.actions([
      { label: 'Dark red', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Dark Red, like a fine wine." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 18;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 23);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 19) {
    scene.actions([
      { label: 'Medium red', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Medium Red, just like a cherry." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 19;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 23);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 20) {
    scene.actions([
      { label: 'Turquoise', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Turquoise, just like the oceans." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 20;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 23);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 21) {
    scene.actions([
      { label: 'Medium orange', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Medium orange, just like a pumpkin." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 21;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 23);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).pcs_haircol ?? 0) !== 22) {
    scene.actions([
      { label: 'Dark orange', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('"I want to try something really different." you tell her.');
    scene.text('"And what would that be?" The receptionist asks cheerfully.');
    scene.text('"Dark orange, just like rust-looking." you excitedly tell her.');
    scene.text('"Just a second and I\'ll see which of our hairdressers\' are available, why don\'t you take a seat?" she says and points you over to sit in one of the seats.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).pcs_haircol = 22;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 23);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 750);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later your hair is dyed and dried as the hairdresser removes the dryer hood, "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change your mind', goto: ['hairsalon', 'start'] },
  ]);
  scene.build();
}

function enterTouchup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  (s as any).dyefade = (Math.floor(Math.random() * 8) + 35);
  (s as any).collength = ((s as any).pcs_hairlng ?? 0);
  qspCall(s, 'money', 'pay', 500);
  qspCall(s, 'stat', '');
  scene.text('The receptionist nods her head excitedly and leads you to an empty chair.');
  scene.text('The hairdresser has a bubbly personality, chatting about this and that without pause or much feedback from you, but you don\'t mind as it keeps you distracted while you go through the usual wash and dry routine.');
  scene.text('She flits around your head with her tools, and before you know it, your hair is restored to its earlier luster and color.');
  scene.text('"It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
  ]);
  scene.build();
}

function enterTouchup2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: 'The receptionist smiles apologetically, "Sorry, but you''re going to need a com...
  scene.text('The receptionist smiles apologetically, "Sorry, but you\'re going to need a completely new dye job to cover that up. We can help you out with it if you want? It\'s only 1000₽."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sure', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 45;
    (st as any).dyefade = (Math.floor(Math.random() * 8) + 35);
    (st as any).collength = ((st as any).pcs_hairlng ?? 0);
    qspCall(st, 'money', 'pay', 1000);
    qspCall(st, 'stat', '');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('About an hour later, everything should be dried up. The hairdresser removes the dryer hood. "And we\'re all done. It\'s been great talking to you. You can pay at the reception." the hairdresser tells you, smiling.');
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    { label: 'No thanks', goto: ['hairsalon', 'start'] },
  ]);
  scene.build();
}

function enterBraidhair(s: GameState, scene: SceneBuilder): void {
  scene.text('"I would like to have my hair braided!" you tell the receptionist.');
  if (((s as any).hbraids ?? 0) > 10) {
    scene.text('The receptionist looks confusingly at you, "Sorry, but your hair is already braided."');
    scene.actions([
{ label: 'Move away', goto: ['hairsalon', 'start'] },
]);
    return;
  } else {
    if (((s as any).pcs_hairlng ?? 0) <= 80) {
      scene.text('"Sorry, but your hair is too short to braid. But don\'t hesitate to come back when it\'s grown out." the receptionist replies, smiling.');
      scene.actions([
{ label: 'Move away', goto: ['hairsalon', 'start'] },
]);
      return;
    } else {
      if (((s as any).pcs_hairlng ?? 0) > 800) {
        scene.text('"Sorry, but your hair is too long to make a braid that will not fall apart…" the receptionist replies, smiling.');
        scene.actions([
          { label: 'Move away', goto: ['hairsalon', 'start'] },
        ]);
      }
    }
  }
  scene.text('"I\'ll have someone help you out straight away! Just a second while I get someone, feel free to take a seat." the receptionist tells you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit down', handler: (st: GameState) => {
    scene.text('"Just relax, we\'ll be done in no time.", the hairdresser tells you.');
    scene.actions([
      { label: 'Relax', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).pcs_hairlng ?? 0)/20);
    (st as any).hbraids = 30;
    qspCall(st, 'money', 'pay', 1250);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMixed(st, scene); (st as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: About <<pcs_hairlng/20>> minutes pass as your braids are done, "You can pay at t...
    scene.text(`About ${((st as any).pcs_hairlng ?? '')/20} minutes pass as your braids are done, "You can pay at the reception, hun." the hairdresser tells you before heading off…`);
    scene.actions([
      { label: 'Look in the mirror', goto: ['hairsalon', 'mirror'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMirror(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mood', 'raise', 'small');
  qspCall(s, 'stat', '');
  scene.img(`${qspFunc(s, '$face_image')}`);
  scene.text('You take a long look at your new hairstyle in the mirror. You\'re really pleased with the work that the hairdresser did.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['hairsalon', 'start'] },
  ]);
  scene.build();
}

function enterMixed(s: GameState, scene: SceneBuilder): void {
  (s as any).chat_rand = (Math.floor(Math.random() * 11) + 1);
  if (((s as any).chat_rand ?? 0) === 1) {
    scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "Did you hear about that BDSM club?"');
    scene.text('One of the women sitting next to you gasped, "No I would never go to such a place."');
    scene.text('"Well you know Lana, well she said some guy she dated had been there…" the hairdresser fills in.');
    scene.text('A third woman chimes in, "I hear you can only be invited if someone from within the club vouches for you." The other two look at her.');
    scene.text('"What? It\'s just what I heard… for this guy…" then they start asking her about this guy.');
  } else {
    if (((s as any).chat_rand ?? 0) === 2) {
      scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "I was in Moscow last week, great shops. Doesn\'t have the same vibe as St. Petersburg."');
      scene.text('"Did you go clubbing?" her colleague asks her.');
      scene.text('The hairdresser naughtily looks towards her, "Yeah, met this guy. Dead rich. Sucked his cock in his Maserati."');
      scene.text('"No way!" the colleague exclaims.');
      scene.text('Your hairdresser nods, "Yeah, he said he loves girls from St. Petersburg because we\'re always up for sex."');
      scene.text('"He\'s not wrong." as they both start laughing.');
    } else {
      if (((s as any).chat_rand ?? 0) === 3) {
        scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "Do you have a boyfriend, hun?" the hairdresser asks.');
        scene.text('Before you\'re able to answer another hairdresser chimes in, "Be sure to pick one with the biggest cock…"');
        scene.text('The hairdresser turns to her colleague, "You can\'t tell that in front of a customer! But you should take her advice, those are the real keepers you\'ll thank me later…"');
      } else {
        if (((s as any).chat_rand ?? 0) === 4) {
          scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "So what is the biggest one you\'ve ever had?"');
          scene.text('"E-Excuse me?!" you stumble…');
          scene.text('"The biggest one I\'ve ever had was 18 cm," the woman sitting next to you admits, "I\'ve been with one guy that had an enormous one, way bigger than my husbands… that one must\'ve been easily over 20 cm." the hairdresser\'s colleague sighs.');
          scene.text('The hairdresser\'s face turns a bit red, "Well there\'s that time I was on a trip…" The others turn their attention to her, "I\'m not even a size queen, but I\'ve never seen anything like it, it was easily 30 cm…" The others start laughing, not really believing the hairdresser…');
        } else {
          if (((s as any).chat_rand ?? 0) === 5) {
            scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "So I was helping Anastasia dye a customer\'s hair," she stops and scans the room, "But we really messed up the hair…"');
            scene.text('"Oh, yeah. What did you do?" her colleague pries.');
            scene.text('"I left Anastasia alone only for a moment and I don\'t know what she did but the customer started balding…" the hairdresser says a bit worryingly, "I\'m surprised that she got to keep the job…"');
          } else {
            if (((s as any).chat_rand ?? 0) === 6) {
              scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "Have you heard about the commotion at the Sauna the other day?"');
              scene.text('"No, what happened?!" you curiously ask.');
              scene.text('"Apparently there are rumors going around that it\'s all a big front for a brothel, but I wouldn\'t know, I\'ve never visited the place…" she whispers.');
            } else {
              if (((s as any).chat_rand ?? 0) === 7) {
                scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "Scandalous, I can\'t believe what our city has come to…"');
                scene.text('"What\'s wrong now?" her colleague chimes in.');
                scene.text('"There are lots of street walkers turning up lately everywhere…" the hairdresser concernedly, "No one wants to see that around the town. It gives it a bad reputation. I really hope that the police take care of it."');
              } else {
                if (((s as any).chat_rand ?? 0) === 8) {
                  scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "Oh girl you look so beautiful, you should try out modeling"');
                  scene.text('"Who me?!" you try to avert the attention from yourself.');
                  scene.text('"Yes, you. There\'s a model agency here in the city center that you should go and see. I\'m positive they\'ll take you on." the hairdresser speaks in a convinced manner.');
                } else {
                  if (((s as any).chat_rand ?? 0) === 9) {
                    scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "I had a customer not too long ago spending money like crazy…"');
                    scene.text('"Oh?" her colleague turns her attention to the conversation, "A rich husband?"');
                    scene.text('The hairdresser shakes her head, "No, she was in adult movies. There\'s a porn studio here in the city center. They pay good money but I don\'t know, I would never be caught alive shooting a sex movie for everyone to watch. Who knows what crazy people are out there."');
                    scene.text('"And think about your family finding out, that would ruin all those relationships…" the colleague adds.');
                  } else {
                    if (((s as any).chat_rand ?? 0) === 10) {
                      scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "So I had a customer the other day, that was a bit off if we put it that way…"');
                      scene.text('Everyone around turns their attention towards the hairdresser waiting for her to continue, "Yeah, so there was an older lady, really sweet and everything but in the middle of the appointment she pulled out a boiled egg, peeled it and ate it just like it was nothing. Just a bit weird you know…"');
                    } else {
                      if (((s as any).chat_rand ?? 0) === 11) {
                        scene.text('The hairdresser proceeds to work on your hair and quickly gets into gossiping, "So I had this glammed up woman visiting me not too long ago… She was really fit and good-looking, I won\'t lie I was jealous and was pretty bitchy to her."');
                        scene.text('"Why is that? A customer is a customer no matter who it is." her colleague starts arguing with the hairdresser.');
                        scene.text('"I know, but with that body, I couldn\'t help myself and do you know where she worked?!" she raises her voice a little, "As a stripper, can you believe it?! At that strip joint, in the red light district by the industry area. I hated her so much, only because she was so damn good-looking…"');
                      } else {
                        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMixed(s, scene); (s as any).locArgs = __savedLocArgs; }
                      }
                    }
                  }
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
    case 'curlhair':
      enterCurlhair(s, scene);
      break;
    case 'dyehair':
      enterDyehair(s, scene);
      break;
    case 'touchup':
      enterTouchup(s, scene);
      break;
    case 'touchup2':
      enterTouchup2(s, scene);
      break;
    case 'braidhair':
      enterBraidhair(s, scene);
      break;
    case 'mirror':
      enterMirror(s, scene);
      break;
    case 'mixed':
      enterMixed(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hairsalon: LocationDef = {
  name: 'hairsalon',
  title: 'The Golden Curl Salon',
  region: 'other',
  enter: enter,
};
