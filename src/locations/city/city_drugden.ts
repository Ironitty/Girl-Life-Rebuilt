import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  scene.text('A local drug den where addicts come to buy and use heroin in peace.');
  scene.text('A skinny guy opens the door with a paranoid look in his eyes.');
  scene.text('"Are you sure you can afford to be here? My product ain\'t cheap…"');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Push the door open', goto: ['city_drugden', 'start'] },
  ]);
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  scene.text('The skinny guy looks you up and down as you enter.');
  scene.text('"So what can I get for you, honey?"');
  if (((s as any).drugUser ?? 0) === 1) {
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).drugVars ?? 0)?.['pav_dropoff'] === 0) {
      // TODO-QSP: act 'Ask for a drop-off point in Pavlovsk':  minut += 5
      qspCall(s, 'events', 'ask_pav_drug_dropoff');
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
      { label: 'Ask for heroin', goto: ['city_drugden', 'heroin'] },
      { label: 'Ask for amphetamine', goto: ['city_drugden', 'amphetamine'] },
      { label: 'Ask for weed', goto: ['city_drugden', 'joints'] },
      { label: 'Ask for cocaine', goto: ['city_drugden', 'cocaine'] },
    ]);
  } else {
    if ((!((s as any).drugUser ?? 0))) {
      scene.text('"Ahhh, what do you have?" you ask.');
      scene.text('His eyes light up and he smiles wildy. "Well, I have some H and amphetamine…"');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
        { label: 'Ask for heroin', goto: ['city_drugden', 'heroin'] },
        { label: 'Ask for amphetamine', goto: ['city_drugden', 'amphetamine'] },
        { label: 'Ask for weed', goto: ['city_drugden', 'joints'] },
        { label: 'Ask for cocaine', goto: ['city_drugden', 'cocaine'] },
      ]);
    } else {
      if (((s as any).drugVars ?? 0)?.['amphetamine_high'] > 23  ||  ((s as any).drugVars ?? 0)?.['heroin_high'] > 23) {
        scene.actions([{ label: 'Continue', goto: ['city_drugden', 'kiteHigh'] }]);
      }
    }
  }
  scene.build();
}

function enterKiteHigh(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: delact 'Leave'
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'events', 'snkayf1');
  } },
  ]);
  scene.build();
}

function enterAmphetamine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  // TODO-QSP: dynamic text: "That'll be ' + $func('money', 'string_price', 80) + ' per pill," he says.
  scene.text('"That\'ll be \' + $func(\'money\', \'string_price\', 80) + \' per pill," he says.');
  // TODO-QSP: dynamic text: You have <<mc_inventory['amphetamine']>> pills.
  scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['amphetamine']} pills.`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Buy 20 pills [+$func(\'money\', \'get_cost_string\', 1600, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1600, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1600, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['amphetamine'] = (((s as any).mc_inventory ?? {})['amphetamine'] ?? 0) + (20);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'amphetamine'] }]);
    }
  } },
    { label: 'Buy 10 pills [+$func(\'money\', \'get_cost_string\', 800, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 800, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 800, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['amphetamine'] = (((s as any).mc_inventory ?? {})['amphetamine'] ?? 0) + (10);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'amphetamine'] }]);
    }
  } },
    { label: 'Buy 5 pills [+$func(\'money\', \'get_cost_string\', 400, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 400, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 400, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['amphetamine'] = (((s as any).mc_inventory ?? {})['amphetamine'] ?? 0) + (5);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'amphetamine'] }]);
    }
  } },
    { label: 'Buy some heroin instead', goto: ['city_drugden', 'heroin'] },
    { label: 'Buy some weed instead', goto: ['city_drugden', 'joints'] },
    { label: 'Buy some cocaine instead', goto: ['city_drugden', 'cocaine'] },
  ]);
  scene.build();
}

function enterJoints(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  // TODO-QSP: dynamic text: "Weed for five joints will be ' + $func('money', 'string_price', 250) + '," he s...
  scene.text('"Weed for five joints will be \' + $func(\'money\', \'string_price\', 250) + \'," he says.');
  // TODO-QSP: dynamic text: You have enough weed for <<mc_inventory['joints']>> joints.
  scene.text(`You have enough weed for ${((s as any).mc_inventory ?? 0)?.['joints']} joints.`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Buy enough weed for 20 joints [+$func(\'money\', \'get_cost_string\', 1000, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1000, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['joints'] = (((s as any).mc_inventory ?? {})['joints'] ?? 0) + (20);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'joints'] }]);
    }
  } },
    { label: 'Buy enough weed for 10 joints [+$func(\'money\', \'get_cost_string\', 500, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 500, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 500, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['joints'] = (((s as any).mc_inventory ?? {})['joints'] ?? 0) + (10);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'joints'] }]);
    }
  } },
    { label: 'Buy enough weed for 5 joints [+$func(\'money\', \'get_cost_string\', 250, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 250, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 250, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['joints'] = (((s as any).mc_inventory ?? {})['joints'] ?? 0) + (5);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'joints'] }]);
    }
  } },
    { label: 'Buy some heroin instead', goto: ['city_drugden', 'heroin'] },
    { label: 'Buy some amphetamine instead', goto: ['city_drugden', 'amphetamine'] },
    { label: 'Buy some cocaine instead', goto: ['city_drugden', 'cocaine'] },
  ]);
  scene.build();
}

function enterCocaine(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  // TODO-QSP: dynamic text: "A line will set you back ' + $func('money', 'string_price', 360) + '," he says.
  scene.text('"A line will set you back \' + $func(\'money\', \'string_price\', 360) + \'," he says.');
  // TODO-QSP: dynamic text: You have enough cocaine for <<mc_inventory['cocaine']>> lines.
  scene.text(`You have enough cocaine for ${((s as any).mc_inventory ?? 0)?.['cocaine']} lines.`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Buy enough cocaine for 20 lines [+$func(\'money\', \'get_cost_string\', 7200, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 7200, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 7200, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['cocaine'] = (((s as any).mc_inventory ?? {})['cocaine'] ?? 0) + (20);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'cocaine'] }]);
    }
  } },
    { label: 'Buy enough cocaine for 10 lines [+$func(\'money\', \'get_cost_string\', 3600, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 3600, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 3600, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['cocaine'] = (((s as any).mc_inventory ?? {})['cocaine'] ?? 0) + (10);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'cocaine'] }]);
    }
  } },
    { label: 'Buy enough cocaine for 5 lines [+$func(\'money\', \'get_cost_string\', 1800, ...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 1800, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 1800, 'cash');
      (s as any).drugUser = 1;
      ((s as any).mc_inventory ?? {})['cocaine'] = (((s as any).mc_inventory ?? {})['cocaine'] ?? 0) + (5);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_drugden', 'cocaine'] }]);
    }
  } },
    { label: 'Buy some heroin instead', goto: ['city_drugden', 'heroin'] },
    { label: 'Buy some amphetamine instead', goto: ['city_drugden', 'amphetamine'] },
    { label: 'Buy some weed instead', goto: ['city_drugden', 'joints'] },
  ]);
  scene.build();
}

function enterHeroin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  // TODO-QSP: dynamic text: "That'll be ' + $func('money', 'string_price', 420) + '," he says.
  scene.text('"That\'ll be \' + $func(\'money\', \'string_price\', 420) + \'," he says.');
  if (qspFunc(s, 'money', 'can_afford', 420, 'cash') === 0  &&  ((s as any).drugVars ?? 0)?.['heroin_need'] > 0) {
    scene.actions([
      { label: 'Beg him to give you some', handler: (st: GameState) => {
    qspCall(st, 'city_drugden', 'drugslut');
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Buy heroin and smoke it [+$func(\'money\', \'get_cost_string\', 420, \'...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 420, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 420, 'cash');
      if (((s as any).drugVars ?? 0)?.['heroin_used'] <= 10) {
        (s as any).minut = ((s as any).minut ?? 0) + 20;
        qspCall(s, 'stat', '');
        scene.text('<center><b>Local drug den</b></center>');
        scene.img('images/locations/city/residential/den/narkopriton.jpg');
        scene.text('It\'s obvious that you have no idea what to do. He takes pity on you and shapes some foil, then sprinkles the heroin on it. He hands you a straw and tells you to heat the underside of the foil until the drugs turn to a liquid and start to boil, then inhale it sharply with a straw.');
        scene.text('"So where do I get…"');
        scene.text('You haven\'t even finished the question and he\'s holding out a straw for you to use.');
        scene.text('"Thanks."');
        scene.text('Finding a couch, you sit down and look at your drugs.');
        qspCall(s, 'willpower', 'drugs', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Return the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Return the drugs [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drugs', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/narkopriton.jpg');
    scene.text('You change your mind and give the drugs back.');
    scene.text('"I don\'t do refunds, girl," he replies.');
    scene.text('"I know," you shrug.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Use the drugs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/chase_dragon.jpg');
    scene.text('You follow the instructions, unable to stop yourself from trembling a little as you quickly inhale the vapor.');
    scene.text('The rush is instantaneous and you close your eyes as it rolls over you.');
    (s as any).drugUser = 1;
    qspCall(s, 'drugs', 'heroin');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'events', 'snkayf1');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).drugVars ?? 0)?.['heroin_inject'] < 1) {
          (s as any).minut = ((s as any).minut ?? 0) + 10;
          qspCall(s, 'stat', '');
          scene.text('<center><b>Local drug den</b></center>');
          scene.img('images/locations/city/residential/den/narkopriton.jpg');
          scene.text('You know what to do by now and don\'t require any help from the dealer.');
          scene.text('"You know this is all well and good, but if you want to really forget about everything you have to inject it," he tells you.');
          qspCall(s, 'willpower', 'drugs', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Stick to smoking it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/chase_dragon.jpg');
    scene.text('You follow the instructions, unable to stop yourself from trembling a little as you quickly inhale the vapor.');
    scene.text('The rush is instantaneous and you close your eyes as it rolls over you.');
    (s as any).drugUser = 1;
    qspCall(s, 'drugs', 'heroin');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave in a daze', handler: (st: GameState) => {
    qspCall(st, 'events', 'snkayf1');
  } },
    ]);
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Stick to smoking it [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree and inject it', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/usingheroin.jpg');
    scene.text('He helps you cook you up a shot while giving you instructions so you can do it yourself next time. He then loads the needle and hands it to you.');
    scene.text('"Thanks," you smile and take the needle before finding a couch to sit on.');
    scene.text('You inject the needle into your arm, unable to stop yourself from trembling a little.');
    scene.text('The rush is instantaneous and you close your eyes as it rolls over you.');
    ((s as any).drugVars ?? {})['heroin_inject'] = 1;
    (s as any).drugUser = 1;
    qspCall(s, 'drugs', 'heroin');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave in a daze', handler: (st: GameState) => {
    qspCall(st, 'events', 'snkayf1');
  } },
    ]);
  } },
          ]);
        } else {
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          (s as any).drugUser = 1;
          qspCall(s, 'drugs', 'heroin');
          qspCall(s, 'stat', '');
          scene.text('<center><b>Local drug den</b></center>');
          scene.img('images/locations/city/residential/den/usingheroin.jpg');
          scene.text('You buy some heroin and find a quiet place in the house to use it. Without thinking twice, you shoot up.');
          scene.text('As an experienced user, you regain your senses quickly after the blissful rush of the drug.');
          scene.actions([
            { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
          ]);
        }
      }
    }
  } },
    { label: 'Buy some amphetamine instead', goto: ['city_drugden', 'amphetamine'] },
    { label: 'Buy some weed instead', goto: ['city_drugden', 'joints'] },
    { label: 'Buy some cocaine instead', goto: ['city_drugden', 'cocaine'] },
  ]);
  scene.build();
}

function enterDrugslut(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Local drug den</b></center>');
  scene.img('images/locations/city/residential/den/narkopriton.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).drugVars ?? 0)?.['heroin_whore'] > 0) {
    scene.text('"Bobka, please! You remember me, right? I\'m good for it, you can trust me!" you beg, but he gives you a wicked grin.');
    // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! You know I don't do credit!" he snorts.
    scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}! You know I don't do credit!" he snorts.`);
    qspCall(s, 'willpower', 'drugs', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave dejectedly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave dejectedly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    if (((s as any).drugVars ?? 0)?.['heroin_whore'] > 5) {
      scene.actions([
        { label: 'Submit to your fate', handler: (st: GameState) => {
    scene.img('images/locations/city/residential/den/crackwhore.jpg');
    scene.text('Your ever increasing dependence on drugs has taken its toll on you. Your will has slowly being worn down by always having to go to Bobka to beg for your next dosage and he readily supplies it, considering it an investment. When he thinks you\'re ready, he offers you permanent lodging in the drug den.');
    scene.text('You readily accept. Paid housing, food and your daily dose! What more could you need?');
    scene.text('Of course Bobka is no kind Samaritan, and expects things from you in return…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore2.jpg');
    scene.text('Your life has changed drastically. Your mouth, pussy and ass are completely owned by Bobka, and he readily whores you out. The rumour of the drug den having a new full-time whore spreads quickly. Bobka is willing to rent you out to whoever is willing to pay, even if they\'re not paying much at all! Some money is better than no money in the end…');
    scene.text('You try to resist at first, but you soon realize that you can\'t. You need Bobka to survive, and have no choice but to meekly accept your new role as his whore.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore3.jpg');
    scene.text('"What difference does it make?" you think to yourself as yet another stranger buries his cock in your well-used ass.');
    scene.text('Bobka sold you to a brothel owner, who keeps you in his basement as a cheap attraction for his regulars. He takes good care of you though, giving you a roof over your head and the daily dosage of heroin you need so badly.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore4.jpg');
    scene.text('In the rare moments your mind is not intoxicated by your last hit, you think back to the friends and family you used to have. It all seems surreal now…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore5.jpg');
    scene.text('Your future was so bright when you were in school. The teachers would sing your praises, saying how much potential you had.');
    scene.text('You can\'t help but wonder what they would think of you now. On your knees as some random stranger feeds you his fat cock. The guy snaps you out of your memories when he roughly forces his cock down your throat, nearly making you choke.');
    scene.text('It\'s nothing new to you. This is your life now. You don\'t try to resist or fend him off, but simply open your mouth wider and stick your tongue out to give him full access to your throat.');
    scene.text('You\'ve long since realized that you\'re a whore now, doing whatever perverted acts the customers demand from you. You have to! Anything to earn enough money for your next dose…');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/bobka/sex/crackwhore6.jpg');
    scene.text('You\'ve long since stopped taking care of yourself, tending to your poor-paying customers\' cocks out of sheer habit. Your former beauty is completely gone, and traces of dried semen cover your hair, face and clothes.');
    scene.text('The brothel owner is starting to lose his patience with you. Even his customers, who already have fairly low standards, no longer seem to be very interested in you. Lucky for you, some them of them can\'t afford any better.');
    scene.text('Occasionally, when you get ready to offer your broken down holes to yet another customer, you wonder… Was there anything you could\'ve done differently?');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'gameover', 'force', 8
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Promise you\'ll do anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/narkopriton.jpg');
    scene.text('With a trembling lip, you drop to your knees and continue to beg. "Please! I\'ll do anything, anything you want!"');
    scene.text('He looks at you appreciatively for a moment before he gives you a short nod. "Shut up and follow me. I may have some for you, but you\'re going to have to earn it."');
    scene.actions([
      { label: 'Follow him into the house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).bobrand = Math.floor(Math.random() * 5) + 0;
    if (((s as any).bobrand ?? 0) < 3) {
    } else {
      if (((s as any).bobrand ?? 0) === 3) {
      }
    }
    // TODO-QSP: dynamic text: bobrand: <<bobrand>>
    scene.text(`bobrand: ${((s as any).bobrand ?? 0)}`);
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/narkopriton.jpg');
    scene.text('You keep begging Bobka to give you some heroin as you follow him to an empty room.');
    // TODO-QSP: dynamic text: He just laughs at you. <<$bobtalk>>
    scene.text(`He just laughs at you. ${((s as any).bobtalk ?? 0)}`);
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: '<<$bobtext>>', handler: (st: GameState) => {
    // TODO-QSP: drugVars['heroin_whore'] += 1
    // TODO-QSP: gt 'city_bobka', bobrand
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).drugVars ?? 0)?.['heroin_whore'] === 0) {
      scene.text('"Please!" you beg. "I need a hit… I need it badly! Please, I\'ll pay you back! I promise!"');
      scene.text('The guy laughs. "Yeah, sure. Do you know how many times a day I hear that? If I had a ruble for every time someone told me that, I would\'ve retired by now! I don\'t do credit, simple as that. Get lost."');
      qspCall(s, 'willpower', 'drugs', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Leave dejectedly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Leave dejectedly [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'drugs', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
        ]);
      }
      scene.actions([
        { label: 'Promise you\'ll do anything', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    scene.text('With a trembling lip, you drop to your knees and continue to beg. "Please! I\'ll do anything, anything you want!"');
    scene.text('He looks at you appreciatively for a moment before he gives you a short nod. "Shut up and follow me. I may have some for you, but you\'re going to have to earn it."');
    scene.actions([
      { label: 'Follow him into the house', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('You follow him dejectedly. You don\'t know what he wants from you, but what choice do you have?');
    scene.text('He takes you by the hand and pulls you into an empty room. He doesn\'t bother closing the door.');
    scene.text('"Get down on your knees and suck me off!" he orders. "If you do good, we\'ll see about getting you your hit."');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Change your mind and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['city_residential', ''] },
      ]);
    }
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    ((s as any).drugVars ?? {})['heroin_whore'] = (((s as any).drugVars ?? {})['heroin_whore'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'dinSex', 'std_trigger');
    scene.img('images/characters/city/bobka/sex/bj.jpg');
    scene.text('You need the drugs, so you drop to your knees and quickly pull his pants down without even thinking about it. His cock is still flaccid, but you close your lips around it anyway, doing the best you can to arouse him. You slowly feel his cock grow hard inside your mouth and obediently suck him off until you feel several warm jets of cum land on the back of your throat.');
    scene.text('"Could be better…" the guy moans in boredom.');
    scene.text('He pulls up his pants and throws you a syringe with a discompassionate look in his eyes.');
    scene.text('"This what you were looking for?" he smirks.');
    qspCall(s, 'arousal', 'bj', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take the hit right in front of him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'heroin');
    scene.text('<center><b>Local drug den</b></center>');
    scene.img('images/locations/city/residential/den/usingheroin.jpg');
    scene.text('You grab the syringe off the ground and use it without a second thought, injecting it into your arm with a shaky hand.');
    scene.text('He shakes his head, almost as if he is disappointed in you. "I reckon I\'m going to see you around more often! My name is Bobka. Who are you?"');
    // TODO-QSP: dynamic text: The drugs are quickly clouding your mind, and you barely register him talking. "...
    scene.text(`The drugs are quickly clouding your mind, and you barely register him talking. "${((s as any).pcs_nickname ?? 0)}…" you mutter softly.`);
    // TODO-QSP: dynamic text: He laughs. "I think we'll be seeing more of you here, <<$pcs_nickname>>…"
    scene.text(`He laughs. "I think we'll be seeing more of you here, ${((s as any).pcs_nickname ?? 0)}…"`);
    scene.text('When the fog in your mind clears, Bobka is gone and you\'re by yourself in the room.');
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'kiteHigh':
      enterKiteHigh(s, scene);
      break;
    case 'amphetamine':
      enterAmphetamine(s, scene);
      break;
    case 'joints':
      enterJoints(s, scene);
      break;
    case 'cocaine':
      enterCocaine(s, scene);
      break;
    case 'heroin':
      enterHeroin(s, scene);
      break;
    case 'drugslut':
      enterDrugslut(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_drugden: LocationDef = {
  name: 'city_drugden',
  title: '<center><b>Local drug den</b></center>',
  region: 'city',
  description: ['A local drug den where addicts come to buy and use heroin in peace.'],
  enter: enter,
};
