import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistFuckedPussyStage ?? 0) < 2  &&  (!((s as any).knowpreg ?? 0))) {
    if (((s as any).shotdays ?? 0) < 14  &&  ((s as any).birth_control ?? 0)?.['implant_status'] === 0) {
      scene.actions([
        { label: 'Get a birth control shot (0:15)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2750) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'medical_din', 'birth_control_shot');
    }
  } },
      ]);
    }
    if (((s as any).birth_control ?? 0)?.['implant_status'] === 0) {
      scene.actions([
        { label: 'Get a birth control implant (0:35)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 19650) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'medical_din', 'birth_control_implant');
    }
  } },
      ]);
    } else {
      if (((s as any).birth_control ?? 0)?.['implant_status'] === 1  ||  ((s as any).birth_control ?? 0)?.['implant_status'] === 2) {
        scene.actions([
          { label: 'Renew your birth control implant (0:35)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 19650) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'medical_din', 'birth_control_renew');
    }
  } },
        ]);
      }
    }
  }
  if (((s as any).birth_control ?? 0)?.['implant_status'] > 0) {
    scene.actions([
      { label: 'Remove your birth control implant (0:20)', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspGoto(st, 'medical_din', 'birth_control_remove');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControlShot(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('You\'re escorted into an examination room, where you\'re told that they must do a small test before giving you the shot. You wait for fifteen minutes before the nurse comes back in.');
  if ((!((s as any).preg ?? 0))) {
    qspCall(s, 'money', 'pay', 2750);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlShot2(s, scene); (s as any).locArgs = __savedLocArgs; }
    // TODO-QSP: dynamic text: "Everything looks great," she says and gives you a reassuring smile as she stick...
    scene.text(`"Everything looks great," she says and gives you a reassuring smile as she sticks a needle in your arm and depresses the plunger. "All done! You should be good for three months, give or take. It depends on body type, hormone levels and so on. If you want to be perfectly safe, we recommend you come back for another treatment one week before the three months are over. Have a nice day, Miss ${((s as any).pcs_lastname ?? '')}!"`);
    scene.text('You thank her and wish her the same while you gather your things.');
  } else {
    qspCall(s, 'money', 'pay', 650);
    scene.text('"I\'m sorry, but we can\'t give you the shot because you\'re pregnant."');
    // TODO-QSP: dynamic text: 'After the initial shock subsides, you pay the ' + $func('money', 'string_price'...
    scene.text('After the initial shock subsides, you pay the 650₽ for the test and leave.');
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBirthControlImplant(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('You\'re escorted into an examination room, where you\'re told that they must do a small test before inserting the implant into your left arm. You wait for fifteen minutes before the nurse comes back in.');
  if ((!((s as any).preg ?? 0))) {
    qspCall(s, 'money', 'pay', 19650);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).tabletkicheck = 0;
    (s as any).tabletkishot = 0;
    ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 3;
    ((s as any).birth_control = (s as any).birth_control ?? {})['implant_timer'] = 1095;
    (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25) + 4000);
    (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) + (((((s as any).pillcon2 ?? 0) + 15000) / 25) + 4000);
    scene.text('"Everything looks great," she says and gives you a reassuring smile. "Please lie down, the procedure won\'t take long."');
    scene.text('She numbs part of your upper arm with a local anesthetic. You have to wait for a few minutes for it to take effect before she makes a tiny incision and pushes a small tube inside your arm. It\'s no bigger than a matchstick.');
    scene.text('"All done! You should be good to go for three years."');
  } else {
    qspCall(s, 'money', 'pay', 650);
    scene.text('"I\'m sorry, but we can\'t give you the implant because you\'re pregnant."');
    // TODO-QSP: dynamic text: 'After the initial shock subsides, you only have to pay ' + $func('money', 'stri...
    scene.text('After the initial shock subsides, you only have to pay 650₽ for the test and leave.');
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBirthControlRenew(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('You\'re escorted into an examination room, where you\'re told that you have to do a small test before inserting the implant into your left arm. You wait for fifteen minutes before the nurse comes back in.');
  if ((!((s as any).preg ?? 0))) {
    qspCall(s, 'money', 'pay', 19650);
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).tabletkicheck = 0;
    (s as any).tabletkishot = 0;
    ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 3;
    ((s as any).birth_control = (s as any).birth_control ?? {})['implant_timer'] = 1095;
    (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25) + 4000);
    (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) + (((((s as any).pillcon2 ?? 0) + 15000) / 25) + 4000);
    scene.text('"Everything looks great," she says and gives you a reassuring smile. "Please lie down, the procedure won\'t take long."');
    scene.text('She numbs part of your upper arm with a local anesthetic. You have to wait a few minutes for it to take effect before she makes a tiny incision, takes out your old implant and pushes in a new one.');
    scene.text('"All done! You should be good to go for another three years."');
  } else {
    qspCall(s, 'money', 'pay', 1650);
    ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 0;
    ((s as any).birth_control = (s as any).birth_control ?? {})['implant_timer'] = 0;
    scene.text('"I\'m sorry, but we can\'t renew your implant because you\'re pregnant."');
    // TODO-QSP: dynamic text: 'After the initial shock subsides, you only have to pay ' + $func('money', 'stri...
    scene.text('After the initial shock subsides, you only have to pay 1650₽ for the test and the removal of your old implant and leave.');
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterBirthControlRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 1000);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  ((s as any).birth_control = (s as any).birth_control ?? {})['implant_status'] = 0;
  ((s as any).birth_control = (s as any).birth_control ?? {})['implant_timer'] = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('"Everything looks great," she says and gives you a reassuring smile. "Please lie down, the procedure won\'t take long."');
  scene.text('She numbs part of your upper arm with a local anesthetic. You have to wait for a few minutes for it to take effect before she makes a tiny incision and removes your implant. "All done!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterAbortion(s: GameState, scene: SceneBuilder): void {
  (s as any).vidage = ((s as any).vidage ?? 0) + (1);
  (s as any).abort = ((s as any).abort ?? 0) + (1);
  (s as any).abortionbirthdate = ((s as any).daystart ?? 0);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRemovePreg(s, scene); (s as any).locArgs = __savedLocArgs; }
  (s as any).knowpregloss = 1;
  (s as any).abortrand = (Math.floor(Math.random() * 11) + 0);
  if (((s as any).age ?? 0) > 18) {
    if (((s as any).abortrand ?? 0) < 10) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (1);
    }
    if (((s as any).abortrand ?? 0) === 10) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (10);
    }
  } else {
    if (((s as any).abortrand ?? 0) < 7) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (2);
    }
    if (((s as any).abortrand ?? 0) >= 7) {
      (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (10);
    }
  }
  (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  if (((s as any).broodcurse ?? 0) > 0) {
    qspGoto(s, 'gameover', 'force', '13');
  }
  scene.build();
}

function enterRemovePreg(s: GameState, scene: SceneBuilder): void {
  (s as any).pregtime = 0;
  (s as any).pregtalk = 0;
  (s as any).pcs_pregtalk = 0;
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A16'] = 0;
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 0;
  (s as any).preg = 0;
  (s as any).thinkpreg = 0;
  (s as any).knowpreg = 0;
  (s as any).pregChem = 0;
  ((s as any).vomit = (s as any).vomit ?? {})['morning_sick'] = 0;
  (s as any).cycle = 4;
  (s as any).RecovH = (Math.floor(Math.random() * 201) + 375);
  (s as any).nextBaby = 0;
  // TODO-QSP: :poliabortloop
  if (((s as any).yearkid ?? 0)[((s as any).nextBaby ?? 0)-1] === 0) {
    (s as any).BabyEmbryo = ((s as any).BabyEmbryo ?? 0) - (1);
  }
  (s as any).nextBaby = ((s as any).nextBaby ?? 0) - (1);
  if (((s as any).nextBaby ?? 0) > 0) {
    // TODO-QSP: jump 'poliabortloop'
  }
  scene.build();
}

function enterBirthControlShot2(s: GameState, scene: SceneBuilder): void {
  (s as any).tabletkishot = (Math.floor(Math.random() * 8) + 84);
  (s as any).shotdays = 93;
  (s as any).tabletkicheck = 2;
  (s as any).pillcon = 40000;
  (s as any).pillcon2 = 40000;
  scene.build();
}

function enterHealthTreatment(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'painkiller', ((String((s as any).locArgs?.[1] ?? '') === 'spell') ? ('spell') : ('gift')));
  qspCall(s, 'drugs', 'painkiller', ((String((s as any).locArgs?.[1] ?? '') === 'spell') ? ('spell') : ('gift')));
  qspCall(s, 'drugs', 'painkiller', ((String((s as any).locArgs?.[1] ?? '') === 'spell') ? ('spell') : ('gift')));
  (s as any).pcs_health = Math.min(((s as any).healthmax ?? 0), Math.max(((s as any).pcs_health ?? 0) + ((s as any).healthmax ?? 0) / 4, ((s as any).healthmax ?? 0) / 2));
  if (((s as any).pillcon ?? 0) > 0  &&  (!(Math.floor(Math.random() * 5) + 0))) {
    (s as any).pillcon = ((s as any).pillcon ?? 0) - (2500);
  }
  (s as any).Kandidoz = Math.min(((s as any).Kandidoz ?? 0), 0);
  scene.build();
}

function enterHealSTDs(s: GameState, scene: SceneBuilder): void {
  (s as any).Venera = 0;
  (s as any).GerpesOnce = 0;
  (s as any).Gerpes = 0;
  (s as any).SifacOnce = 0;
  (s as any).Sifilis = 0;
  (s as any).TriperOnce = 0;
  (s as any).Triper = 0;
  (s as any).TriperOral = 0;
  (s as any).KandidozOnce = 0;
  (s as any).Kandidoz = 0;
  // TODO-QSP: end
  scene.build();
}

function enterMorningAfterPillFunction(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cycle ?? 0) === 1) {
    (s as any).focH = ((s as any).focH ?? 0) - (120);
  }
  ((s as any).stat = (s as any).stat ?? {})['morning_after_pill'] = ((s as any).stat['morning_after_pill'] ?? 0) + (1);
  ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['morning_after_pill'] = ((s as any).mc_inventory['morning_after_pill'] ?? 0) - (1);
  if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
    ((s as any).LudaQW = (s as any).LudaQW ?? {})['luda_ma_pill'] = 1;
  }
  ((s as any).stat = (s as any).stat ?? {})['last_morning_after_pill'] = ((s as any).daystart ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterMorningAfterPill(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/items/accessories/birthcontrol/morning_after_pill.jpg');
  scene.text('The instructions say: <i>Intended to try to stop an egg from releasing and if an egg has already released, it will be of no help</i>');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
    if (((s as any).knowpreg ?? 0) === 0  &&  (!((s as any).thinkpreg ?? 0))) {
      scene.actions([
        { label: 'Swallow', handler: (st: GameState) => {
    // TODO-QSP: delact 'Swallow' & delact 'Reconsider'
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/pc/items/accessories/birthcontrol/pill_t...
    scene.text(`<center><img ${((st as any).set_imgh ?? '')} src="images/pc/items/accessories/birthcontrol/pill_take` + ((((st as any).locclass ?? 0) === 'kitr'  ||  ((st as any).locclass ?? 0) === 'kitchen') ? (2) : (1)) + '.jpg"></center>');
    if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      ((st as any).LudaQW = (st as any).LudaQW ?? {})['luda_ma_pill'] = 1;
      scene.text('<i>I suppose this is why Aunt Luda gave me this,</i> you think as you take out the morning after pill.');
    }
    if (((st as any).locclass ?? 0) === 'kitr'  ||  ((st as any).locclass ?? 0) === 'kitchen') {
      scene.text('You fill up a small glass of water and pop the pill out of the packaging. Putting it in your mouth, you gulp and wash it down with sips of water from the glass, feeling the lump of medication slide down your throat.');
    } else {
      if (((st as any).locclass ?? 0) === 'bathroom') {
        scene.text('Removing the pill from the packaging, you pop it in your mouth and gulp it down with a handful of water from the sink, feeling the lump of medication slide down your throat.');
      } else {
        if (((st as any).mc_inventory ?? 0)?.['refill_bottle'] > 1) {
          scene.text('Removing the pill from the packaging, you pop it in your mouth and gulp it down with a sip from your water bottle, feeling the lump of medication slide down your throat.');
        } else {
          scene.text('Removing the pill from the packaging, you pop it in your mouth and gulp it down dry, wincing in discomfort as you feel it stick slightly on the way down.');
        }
      }
    }
    scene.text('<i>Well, that\'s that,</i> you think to yourself. <i>Hopefully I won\'t get pregnant now. I need to be more careful in the future.</i>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterPillFunction(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
  } },
        { label: 'Reconsider', handler: (st: GameState) => {
    // TODO-QSP: delact 'Swallow'
    // TODO-QSP: delact 'Reconsider'
  } },
      ]);
    } else {
      if (((s as any).knowpreg ?? 0) === 1) {
        scene.text('I\'m already pregnant, what\'s the point?');
      } else {
        scene.text('If I\'m pregnant, what\'s the point?');
      }
    }
  } else {
    scene.text('I\'m a virgin, what\'s the point?');
  }
  // TODO-QSP: end
  scene.build();
}

function enterGiveBirth(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kid ?? 0) > 0) {
    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 361) + 300));
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 361) + 120));
  }
  scene.img('images/locations/shared/clinic/birthing.jpg');
  scene.text('You lay on the bed and your feet are put in stirrups. Your contractions get closer and closer, and after some time and a lot of swearing, you finally give birth.');
  // TODO-QSP: :multikidloop
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 61) + 30));
  (s as any).sterilewb = ((s as any).sterilewb ?? 0) + (1);
  (s as any).nextBaby = qspUntranslated(s, "arrpos('kidname', 'unborn')", { location: "medical_din" });
  (s as any).kid = ((s as any).kid ?? 0) + (1);
  (s as any).BabyEmbryo = ((s as any).BabyEmbryo ?? 0) - (1);
  ((s as any).daykid = (s as any).daykid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).day ?? 0);
  ((s as any).monthkid = (s as any).monthkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).month ?? 0);
  ((s as any).yearkid = (s as any).yearkid ?? {})[String((s as any).nextBaby ?? 0)] = ((s as any).year ?? 0);
  if (((s as any).polkid ?? 0)?.[String((s as any).nextBaby ?? 0)] === 0) {
    // TODO-QSP: $polreb[nextBaby] = 'girl'
    scene.text('"Congratulations, it\'s a girl! What is her name?"');
  } else {
    // TODO-QSP: $polreb[nextBaby] = 'boy'
    scene.text('"Congratulations, it\'s a boy! What is his name?"');
  }
  // TODO-QSP: $kidname[nextBaby] = input("Enter your <<$polreb[nextBaby]>>''s name")
  if (((s as any).kidname ?? 0)?.[String((s as any).nextBaby ?? 0)] === '') {
    if (((s as any).polkid ?? 0)?.[String((s as any).nextBaby ?? 0)] === 0) {
      // TODO-QSP: $kidname[nextBaby] = 'Masha'
    } else {
      // TODO-QSP: $kidname[nextBaby] = 'Misha'
    }
  }
  // TODO-QSP: dynamic text: The doctors clean up <<$kidname[nextBaby]>>.
  scene.text(`The doctors clean up ${((s as any).kidname ?? 0)?.[String((s as any).nextBaby ?? 0)] ?? ''}.`);
  if (((s as any).BabyEmbryo ?? 0) > 0) {
    // TODO-QSP: dynamic text: You don''t have much time to look at your <<$polreb[nextBaby]>> because you''re ...
    scene.text(`You don't have much time to look at your ${((s as any).polreb ?? 0)?.[String((s as any).nextBaby ?? 0)] ?? ''} because you're having an another contraction. Your next baby is coming!`);
    // TODO-QSP: jump 'multikidloop'
  }
  (s as any).preg = 0;
  (s as any).RecovH = (Math.floor(Math.random() * 701) + 1175);
  (s as any).pregbirthdate = ((s as any).daystart ?? 0);
  (s as any).thinkpreg = 0;
  (s as any).knowpreg = 0;
  (s as any).knowpregrecover = 1;
  (s as any).vidage = ((s as any).vidage ?? 0) + (1);
  (s as any).pregtalk = 0;
  (s as any).pcs_pregtalk = 0;
  (s as any).pregTalkFamily = 0;
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A16'] = 0;
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A34'] = 0;
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A29'] = 0;
  (s as any).pregChem = 0;
  ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['preg'] = (((s as any).pcs_mass ?? {})?.['preg'] ?? 0) / 2;
  if (((s as any).pcs_mass ?? 0)?.['preg'] > 0) {
    ((s as any).bodyVars = (s as any).bodyVars ?? {})['RecovH_next'] = (((s as any).RecovH ?? 0) * ((((s as any).pcs_mass ?? {})?.['preg'] ?? 0)-1)) / (((s as any).pcs_mass ?? {})?.['preg'] ?? 0);
  }
  (s as any).cycle = 4;
  if (((s as any).virgin_stats ?? 0)?.['lost_cause'] === '') {
    qspCall(s, 'arousal_funcs', 'set_virginity_stats', 'birth');
    ((s as any).virgin_stats = (s as any).virgin_stats ?? {})['lost_cause'] = 'birth';
  }
  qspCall(s, 'cum_cleanup', 'reset');
  qspCall(s, 'din_bad', 'd_cycreport_choice');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'birth_control':
      enterBirthControl(s, scene);
      break;
    case 'birth_control_shot':
      enterBirthControlShot(s, scene);
      break;
    case 'birth_control_implant':
      enterBirthControlImplant(s, scene);
      break;
    case 'birth_control_renew':
      enterBirthControlRenew(s, scene);
      break;
    case 'birth_control_remove':
      enterBirthControlRemove(s, scene);
      break;
    case 'abortion':
      enterAbortion(s, scene);
      break;
    case 'remove_preg':
      enterRemovePreg(s, scene);
      break;
    case 'birthControlShot':
      enterBirthControlShot2(s, scene);
      break;
    case 'healthTreatment':
      enterHealthTreatment(s, scene);
      break;
    case 'healSTDs':
      enterHealSTDs(s, scene);
      break;
    case 'morning_after_pill_function':
      enterMorningAfterPillFunction(s, scene);
      break;
    case 'morning_after_pill':
      enterMorningAfterPill(s, scene);
      break;
    case 'give_birth':
      enterGiveBirth(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const medical_din: LocationDef = {
  name: 'medical_din',
  title: 'You\'re escorted into an examination room, where you\'re told ',
  region: 'other',
  locclass: 'bathroom',
  enter: enter,
};
