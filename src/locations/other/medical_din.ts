import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistFuckedPussyStage ?? 0) < 2  &&  (!((s as any).knowpreg ?? 0))) {
    if (((s as any).shotdays ?? 0) < 14  &&  ((s as any).birth_control ?? 0)?.['implant_status'] === 0) {
      scene.actions([
        { label: 'Get a birth control shot (0:15) [+$func(\'money\', \'get_cost_string\', 2750)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2750) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: xgt 'medical_din', 'birth_control_shot'
    }
  } },
      ]);
    }
    if (((s as any).birth_control ?? 0)?.['implant_status'] === 0) {
      scene.actions([
        { label: 'Get a birth control implant (0:35) [+$func(\'money\', \'get_cost_string\', 19650)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 19650) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: xgt 'medical_din', 'birth_control_implant'
    }
  } },
      ]);
    } else {
      if (((s as any).birth_control ?? 0)?.['implant_status'] === 1  ||  ((s as any).birth_control ?? 0)?.['implant_status'] === 2) {
        scene.actions([
          { label: 'Renew your birth control implant (0:35) [+$func(\'money\', \'get_cost_string\', 19650)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 19650) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: xgt 'medical_din', 'birth_control_renew'
    }
  } },
        ]);
      }
    }
  }
  if (((s as any).birth_control ?? 0)?.['implant_status'] > 0) {
    scene.actions([
      { label: 'Remove your birth control implant (0:20) [+$func(\'money\', \'get_cost_string\', 1000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      // TODO-QSP: xgt 'medical_din', 'birth_control_remove'
    }
  } },
    ]);
  }
  scene.build();
}

function enterBirthControlShot(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('You\'re escorted into an examination room, where you\'re told that they must do a small test before giving you the shot. You wait for fifteen minutes before the nurse comes back in.');
  if ((!((s as any).preg ?? 0))) {
    qspCall(s, 'money', 'pay', 2750);
    qspCall(s, 'medical_din', 'birthControlShot');
    // TODO-QSP: dynamic text: "Everything looks great," she says and gives you a reassuring smile as she stick...
    scene.text(`"Everything looks great," she says and gives you a reassuring smile as she sticks a needle in your arm and depresses the plunger. "All done! You should be good for three months, give or take. It depends on body type, hormone levels and so on. If you want to be perfectly safe, we recommend you come back for another treatment one week before the three months are over. Have a nice day, Miss ${((s as any).pcs_lastname ?? 0)}!"`);
    scene.text('You thank her and wish her the same while you gather your things.');
  } else {
    qspCall(s, 'money', 'pay', 650);
    scene.text('"I\'m sorry, but we can\'t give you the shot because you\'re pregnant."');
    // TODO-QSP: dynamic text: After the initial shock subsides, you pay the ' + $func('money', 'string_price',...
    scene.text('After the initial shock subsides, you pay the \' + $func(\'money\', \'string_price\', 650) + \' for the test and leave.');
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
    (s as any).birth_control['implant_status'] = 3;
    (s as any).birth_control['implant_timer'] = 1095;
    (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25) + 4000);
    (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) + (((((s as any).pillcon2 ?? 0) + 15000) / 25) + 4000);
    scene.text('"Everything looks great," she says and gives you a reassuring smile. "Please lie down, the procedure won\'t take long."');
    scene.text('She numbs part of your upper arm with a local anesthetic. You have to wait for a few minutes for it to take effect before she makes a tiny incision and pushes a small tube inside your arm. It\'s no bigger than a matchstick.');
    scene.text('"All done! You should be good to go for three years."');
  } else {
    qspCall(s, 'money', 'pay', 650);
    scene.text('"I\'m sorry, but we can\'t give you the implant because you\'re pregnant."');
    // TODO-QSP: dynamic text: After the initial shock subsides, you only have to pay ' + $func('money', 'strin...
    scene.text('After the initial shock subsides, you only have to pay \' + $func(\'money\', \'string_price\', 650) + \' for the test and leave.');
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
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
    (s as any).birth_control['implant_status'] = 3;
    (s as any).birth_control['implant_timer'] = 1095;
    (s as any).pillcon = ((s as any).pillcon ?? 0) + (((((s as any).pillcon ?? 0) + 15000) / 25) + 4000);
    (s as any).pillcon2 = ((s as any).pillcon2 ?? 0) + (((((s as any).pillcon2 ?? 0) + 15000) / 25) + 4000);
    scene.text('"Everything looks great," she says and gives you a reassuring smile. "Please lie down, the procedure won\'t take long."');
    scene.text('She numbs part of your upper arm with a local anesthetic. You have to wait a few minutes for it to take effect before she makes a tiny incision, takes out your old implant and pushes in a new one.');
    scene.text('"All done! You should be good to go for another three years."');
  } else {
    qspCall(s, 'money', 'pay', 1650);
    (s as any).birth_control['implant_status'] = 0;
    (s as any).birth_control['implant_timer'] = 0;
    scene.text('"I\'m sorry, but we can\'t renew your implant because you\'re pregnant."');
    // TODO-QSP: dynamic text: After the initial shock subsides, you only have to pay ' + $func('money', 'strin...
    scene.text('After the initial shock subsides, you only have to pay \' + $func(\'money\', \'string_price\', 1650) + \' for the test and the removal of your old implant and leave.');
    (s as any).thinkpreg = 1;
    (s as any).knowpreg = 1;
  }
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterBirthControlRemove(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'money', 'pay', 1000);
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  (s as any).birth_control['implant_status'] = 0;
  (s as any).birth_control['implant_timer'] = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/clinic/poli.jpg');
  scene.text('"Everything looks great," she says and gives you a reassuring smile. "Please lie down, the procedure won\'t take long."');
  scene.text('She numbs part of your upper arm with a local anesthetic. You have to wait for a few minutes for it to take effect before she makes a tiny incision and removes your implant. "All done!"');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterAbortion(s: GameState, scene: SceneBuilder): void {
  (s as any).vidage = ((s as any).vidage ?? 0) + (1);
  (s as any).abort = ((s as any).abort ?? 0) + (1);
  (s as any).abortionbirthdate = ((s as any).daystart ?? 0);
  qspCall(s, 'medical_din', 'remove_preg');
  (s as any).knowpregloss = 1;
  (s as any).abortrand = Math.floor(Math.random() * 11) + 0;
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
    // TODO-QSP: gt 'gameover', 'force', 13
  }
  if (((s as any).locArgs?.[0] ?? 0) === 'remove_preg') {
    (s as any).pregtime = 0;
    (s as any).pregtalk = 0;
    (s as any).pcs_pregtalk = 0;
    (s as any).npc_pregtalk['A16'] = 0;
    (s as any).npc_pregtalk['A34'] = 0;
    (s as any).preg = 0;
    (s as any).thinkpreg = 0;
    (s as any).knowpreg = 0;
    (s as any).pregChem = 0;
    (s as any).vomit['morning_sick'] = 0;
    (s as any).cycle = 4;
    (s as any).RecovH = Math.floor(Math.random() * 201) + 375;
    (s as any).nextBaby = 0;
    // TODO-QSP: :poliabortloop
    if (((s as any).yearkid ?? 0)[((s as any).nextBaby ?? 0)-1] === 0) {
      (s as any).BabyEmbryo = ((s as any).BabyEmbryo ?? 0) - (1);
    }
    (s as any).nextBaby = ((s as any).nextBaby ?? 0) - (1);
    if (((s as any).nextBaby ?? 0) > 0) {
      // TODO-QSP: jump 'poliabortloop'
    }
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'birthControlShot') {
      (s as any).tabletkishot = Math.floor(Math.random() * 8) + 84;
      (s as any).shotdays = 93;
      (s as any).tabletkicheck = 2;
      (s as any).pillcon = 40000;
      (s as any).pillcon2 = 40000;
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'healthTreatment') {
        qspCall(s, 'drugs', 'painkiller', ((((s as any).locArgs?.[1] ?? 0) === 'spell') ? ('spell') : ('gift')));
        qspCall(s, 'drugs', 'painkiller', ((((s as any).locArgs?.[1] ?? 0) === 'spell') ? ('spell') : ('gift')));
        qspCall(s, 'drugs', 'painkiller', ((((s as any).locArgs?.[1] ?? 0) === 'spell') ? ('spell') : ('gift')));
        (s as any).pcs_health = Math.min(((s as any).healthmax ?? 0), Math.max(((s as any).pcs_health ?? 0) + ((s as any).healthmax ?? 0) / 4, ((s as any).healthmax ?? 0) / 2));
        if (((s as any).pillcon ?? 0) > 0  &&  (!(Math.floor(Math.random() * 5) + 0))) {
          (s as any).pillcon = ((s as any).pillcon ?? 0) - (2500);
        }
        (s as any).Kandidoz = 0;
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'healSTDs') {
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
        }
      }
    }
  }
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
    default:
      enterBirthControl(s, scene);
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
