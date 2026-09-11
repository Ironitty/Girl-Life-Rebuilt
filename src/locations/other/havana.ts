import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'havana', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Fitness Center</b></center>');
  scene.img('images/locations/city/citycenter/gym/desk.jpg');
  scene.text('This modern and well staffed fitness center features all of the latest equipment, as well as trainers to help you make the most of them.');
  scene.text('There is a <a href="exec: gt \'beverage\', \'watercooler\'">drinking fountain</a> near the doors to the bathrooms.');
  // TODO-QSP: dynamic text: You may buy '+iif(abonement > 0, 'a subscription package', 'an additional subscr...
  scene.text('You may buy \'+iif(abonement > 0, \'a subscription package\', \'an additional subscription package\')+\' for access to all available facilities at reception.');
  if (((s as any).abonement ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your existing subscription package is valid for <<abonement>> more classes.
    scene.text(`Your existing subscription package is valid for ${((s as any).abonement ?? 0)} more classes.`);
  }
  scene.text('<b>Benefits included in your subscription:</b>');
  scene.text('Running');
  scene.text('CrossFit');
  scene.text('Aerobics');
  scene.text('Weight Training');
  scene.text('Cross Trainer');
  scene.text('Tennis lessons');
  scene.text('Dance classes');
  scene.text('Yoga');
  scene.text('Kickboxing');
  scene.text('Free access to swimming pool');
  qspCall(s, 'shortgs', 'clothing_status');
  if ((!((s as any).PSport ?? 0))) {
    if (((s as any).PCloStyle2 ?? 0) !== 6  &&  (!((s as any).PCloSport ?? 0))) {
      scene.text('<font color = "red">🗴</font> You\'re not dressed in sports clothes.</font>');
    }
    if (((s as any).PShoStyle2 ?? 0) !== 2  &&  (!((s as any).PShoSport ?? 0))) {
      scene.text('<font color = "red">🗴</font> You\'re not wearing training shoes.</font>');
    }
    scene.text('Sportswear is required for all available classes and activities.');
  }
  if (((s as any).abonement ?? 0) > 0) {
    scene.actions([
      { label: 'Go to the dressing room', goto: ['havana', 'dressing_room'] },
    ]);
  } else {
    scene.actions([
      { label: 'Use the pool [+$func(\'money\', \'get_cost_string\', 150)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 150) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 150);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['havana', 'dressing_room'] }]);
    }
  } },
    ]);
  }
  if ((!((s as any).abonement ?? 0))) {
    scene.text('How long do you want to subscribe for?');
  } else {
    scene.text('Extend your subscription:');
  }
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td>'
  if (qspFunc(s, 'money', 'can_afford', 1500)) {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''money'', ''pay'', 1500 & abonement += 10 & gt ''havana'', ''s...
  } else {
    // TODO-QSP: $temp_table +=    '<<$func(''money'', ''string_price'', 1500)>> for 10 lessons'
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=    '<td>'
  if (qspFunc(s, 'money', 'can_afford', 3000)) {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''money'', ''pay'', 3000 & abonement += 20 & gt ''havana'', ''s...
  } else {
    // TODO-QSP: $temp_table +=    '<<$func(''money'', ''string_price'', 3000)>> for 20 lessons'
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=    '<td>'
  if (qspFunc(s, 'money', 'can_afford', 7500)) {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''money'', ''pay'', 7500 & abonement += 50 & gt ''havana'', ''s...
  } else {
    // TODO-QSP: $temp_table +=    '<<$func(''money'', ''string_price'', 7500)>> for 50 lessons'
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table +=  '<tr>'
  // TODO-QSP: $temp_table +=    '<td>'
  if (qspFunc(s, 'money', 'can_afford', 14500)) {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''money'', ''pay'', 14500 & abonement += 100 & gt ''havana'', '...
  } else {
    // TODO-QSP: $temp_table +=    '<<$func(''money'', ''string_price'', 14500)>> for 100 lessons'
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=    '<td>'
  if (qspFunc(s, 'money', 'can_afford', 28500)) {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''money'', ''pay'', 28500 & abonement += 200 & gt ''havana'', '...
  } else {
    // TODO-QSP: $temp_table +=    '<<$func(''money'', ''string_price'', 28500)>> for 200 lessons'
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=    '<td>'
  if (qspFunc(s, 'money', 'can_afford', 69000)) {
    // TODO-QSP: $temp_table +=    '<a href="exec: gs ''money'', ''pay'', 69000 & abonement += 500 & gt ''havana'', '...
  } else {
    // TODO-QSP: $temp_table +=    '<<$func(''money'', ''string_price'', 69000)>> for 500 lessons'
  }
  // TODO-QSP: $temp_table +=    '</td>'
  // TODO-QSP: $temp_table +=  '</tr>'
  // TODO-QSP: $temp_table +=  '</table></center>'
  // TODO-QSP: dynamic text: <<$temp_table>>
  scene.text(`${((s as any).temp_table ?? 0)}`);
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterDressingRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'havana', 'dressing_room');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Changing Room</b></center>');
  scene.img('images/locations/city/citycenter/gym/locker.jpg');
  scene.text('<b>Attention! Visitors to the sports section must wear appropriate clothing and shoes when using the facilities.</b>');
  if (((s as any).abonement ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your existing subscription package is valid for <<abonement>> more classes.
    scene.text(`Your existing subscription package is valid for ${((s as any).abonement ?? 0)} more classes.`);
  }
  if (((s as any).nichTanya ?? 0)?.['Known'] === 0  &&  ((Math.floor(Math.random() * 100) + 1) <= 20  ||  ((s as any).nichDebug ?? 0) === 1)) {
    scene.text('You notice <a href="exec:gt \'havana\', \'fitgirl\'">a cute girl</a> in the locker room.');
  }
  if (((s as any).fightClubQW ?? 0)?.['story'] === 0  &&  ((s as any).kickbox ?? 0)?.['sash'] >= 2  &&  (((s as any).gschoolVars ?? 0)?.['school_diploma'] === 1  ||  ((s as any).gschoolVars ?? 0)?.['block'] === 1)) {
    scene.actions([{ label: 'Continue', goto: ['fightClub_intro', 'start'] }]);
  }
  if (((s as any).mc_inventory ?? 0)?.['shampoo'] <= 0) {
    scene.text('You\'ve run out of shampoo and will have to buy some more before you can wash yourself.');
  } else {
    scene.actions([
      { label: 'Take a shower (0:15)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (1);
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    if (((s as any).pcs_inhib ?? 0) < 15) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'din_van', 'showerdin');
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You go into the bathroom and turn on the shower. You lather your body and wash in the shower.');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    scene.actions([
      { label: 'Leave the shower', goto: ['havana', 'dressing_room'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'wardrobe', 'default_clothing_options');
  if ((((s as any).pcs_makeup ?? 0) === 1  ||  ((s as any).cosmetic_tattoo ?? 0) > 0)  &&  ((s as any).PSwim ?? 0) === 1) {
    scene.actions([
      { label: 'Use the pool', handler: (st: GameState) => {
    qspCall(st, 'shoes', 'strip');
  }, goto: ['havana_pool', 'start'] },
    ]);
  } else {
    if ((!((s as any).PSwim ?? 0))) {
      scene.actions([
        { label: 'Change into swimwear', goto: ['changingroom', ''] },
      ]);
    }
    if (((s as any).pcs_makeup ?? 0) !== 1  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
      // TODO-QSP: *pl 'You need to wash your make-up off first if you want to go in the pool.'
    }
  }
  if (((s as any).abonement ?? 0) > 0) {
    if (((s as any).PSport ?? 0)) {
      scene.actions([
        { label: 'Go to the gym', goto: ['havana', 'gym'] },
        { label: 'Go to the dance studio', goto: ['havana_dance', ''] },
        { label: 'Do a crossfit workout', goto: ['havana_crossfit', 'box'] },
      ]);
    }
    if (((s as any).runnerQW ?? 0)?.['joined_team'] === 0) {
      scene.actions([
        { label: 'Join track team', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).runnerQW ?? {})['joined_team'] = 1;
    scene.text('You sign up for the track team.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).PSport ?? 0)) {
        if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
          if (((s as any).week ?? 0) === 6  &&  ((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)) {
            scene.actions([
              { label: 'Enter competition race  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
            ]);
          }
          scene.actions([
            { label: 'Go to team practice  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
          ]);
        } else {
          if (((s as any).pcs_energy ?? 0) < 20) {
            if (((s as any).week ?? 0) === 6  &&  ((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)) {
              scene.actions([
                { label: 'Enter competition race  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
              ]);
            }
            scene.actions([
              { label: 'Go to team practice  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
            ]);
          } else {
            if (((s as any).pcs_hydra ?? 0) < 20) {
              if (((s as any).week ?? 0) === 6  &&  ((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)) {
                scene.actions([
                  { label: 'Enter competition race', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
                ]);
              }
              scene.actions([
                { label: 'Go to team practice  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
              ]);
            } else {
              if (((s as any).week ?? 0) === 6  &&  ((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)) {
                scene.actions([
                  { label: 'Enter competition race', goto: ['havana_running', 'race_start'] },
                ]);
              }
              scene.actions([
                { label: 'Go to team practice', goto: ['havana_running', 'start'] },
              ]);
            }
          }
        }
      }
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
    // TODO-QSP: 'Your deodorant will last for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['deodor...
    scene.actions([
      { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).mc_inventory ?? {})['deodorant'] = (((s as any).mc_inventory ?? {})['deodorant'] ?? 0) - (1);
    qspCall(s, 'sweat', 'deo');
    // TODO-QSP: iif(func('body_din', 'pregnancyVisibility') = 1, '<center><img <<$set_imgh>> src="images/shared/home...
    scene.text('You apply deodorant to your armpits. It will keep you feeling fresh and clean for longer.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).menu_off = 0;
  }, goto: ['havana', 'dressing_room'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'din_van', 'tampon');
  scene.actions([
    { label: 'Exit the locker room', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude'  &&  (!((s as any).PSwim ?? 0))) {
      if (((s as any).Fit ?? 0)?.['FMR'] === 0  &&  ((s as any).vidage ?? 0) <= 40  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).fame ?? 0)?.['city_sport'] >= 10) {
        scene.actions([{ label: 'Continue', goto: ['havana', 'FMR'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['havana', 'start'] }]);
      }
    } else {
      scene.actions([
        { label: 'Return', goto: ['havana', 'dressing_room'] },
      ]);
    }
  } },
    { label: 'Use mirror', goto: ['mirror', 'start'] },
    { label: 'Change outfit', goto: ['wardrobe', 'start'] },
  ]);
  scene.build();
}

function enterFitgirl(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/tanya/gym/idle0.jpg');
  scene.text('The girl notices you and smiles again before heading into the shower.');
  scene.actions([
    { label: 'Turn away', goto: ['havana', 'dressing_room'] },
    { label: 'Follow her', handler: (st: GameState) => {
    (s as any).pcs_hairbsh = 0;
    (s as any).pcs_makeup = 1;
    (s as any).noshampoo = 1;
    qspCall(s, 'din_van', 'showerdin');
    (s as any).shovertania = ((s as any).shovertania ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/gym/shower0.jpg');
    scene.text('There\'s no one else here. The girl looks around and smiles at you again before turning away.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
      { label: 'Approach her', handler: (st: GameState) => {
    scene.img('images/characters/city/tanya/gym/shower1.jpg');
    scene.text('You walk up to the girl and she turns to face you.');
    scene.text('"Can I help you?" she asks with a puzzled stare.');
    scene.text('"Maybe I can help you?" you reply. "You look like you could use some help washing up there…"');
    if (((s as any).pcs_hotcat ?? 0) < 6) {
      scene.text('The girl glares at you in disgust while covering herself up. "Eww, what the fuck?! Are you some kind of pervert?!"');
      scene.text('Startled, you quickly run out of the room as the girl shouts after you, calling you various names.');
      scene.actions([
        { label: 'Continue', goto: ['havana', 'dressing_room'] },
      ]);
    } else {
      scene.text('The girl smirks at you as she looks you over. "Oh? And what part of me do you think needs cleaning?"');
      qspCall(s, 'willpower', 'misc', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Tease her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tease her [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'outfit', 'strip_all');
    qspCall(s, 'arousal', 'foreplay', (-5), 'dom', 'lesbian');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/tanya/gym/shower_mol1.jpg');
    scene.text('"Down here for a start," you grin and firmly grope her ass before you start fondling her pussy with your fingers.');
    scene.text('She gasps before she starts moaning softly.');
    scene.actions([
      { label: 'Continue', goto: ['havana', 'tanya_introduction'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Uhhh', handler: (st: GameState) => {
    if (((s as any).pcs_hotcat ?? 0) < 7) {
      qspCall(s, 'arousal', 'end');
      scene.img('images/characters/city/tanya/gym/shower1.jpg');
      scene.text('The girl smiles at you. "You\'re cute, but I need to be somewhere else."');
      scene.text('She then returns to the changing room, leaving you alone in the showers. You follow a few minutes later, but she\'s already gone.');
      scene.actions([
        { label: 'Continue', goto: ['havana', 'dressing_room'] },
      ]);
    } else {
      qspCall(s, 'outfit', 'strip_all');
      qspCall(s, 'arousal', 'foreplay', (-5), 'sub', 'lesbian');
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/tanya/gym/shower_mol2.jpg');
      scene.text('"Oh. Has cutie lost her nerve?" the girl smirks before she suddenly spins you around and starts groping your ass while nuzzling at your neck.');
      scene.actions([
        { label: 'Continue', goto: ['havana', 'tanya_introduction'] },
      ]);
    }
  } },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTanyaIntroduction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'outfit', 'wear_last_worn');
  qspCall(s, 'panties', 'dispose');
  ((s as any).nichTanya ?? {})['Relationship'] = 1;
  ((s as any).nichTanya ?? {})['Known'] = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A218', 5);
  ((s as any).nichTanya ?? {})['FuckLast'] = ((s as any).daystart ?? 0);
  qspCall(s, 'arousal', 'end');
  scene.img('images/characters/city/tanya/gym/shower1.jpg');
  scene.text('Just as you\'re about to go further, a group of women enter the showers. The girl is clearly afraid of being spotted with you and takes the first opportunity to quietly return to the dressing room.');
  scene.text('You follow her a few seconds later, but she\'s already started to dress herself.');
  scene.text('"So. Does cute girl have a name?" the girl asks.');
  // TODO-QSP: dynamic text: "I'm <<$pcs_nickname>>," you reply while trying to find your panties.
  scene.text(`"I'm ${((s as any).pcs_nickname ?? 0)}," you reply while trying to find your panties.`);
  scene.text('"Looking for these?" she asks and you look up to see her twirling your panties on her finger.');
  scene.text('"Can I have them back please?" you ask while holding out your hand.');
  scene.text('"Nope. You seduced me. I\'ve never been with a girl before, so I think I\'ve earned this as a memento," she replies before she pockets them.');
  scene.text('"I\'m Tanya by the way. I live nearby with my parents. You should come over some time so we can… continue where we left off… I\'m usually home in the late afternoon," she winks before leaving the room.');
  // TODO-QSP: dynamic text: <i>You can now visit Tanya at her parents home in the Downtown area once a day a...
  scene.text('<i>You can now visit Tanya at her parents home in the Downtown area once a day after \'+func(\'time\', \'get_time_string\', 16, 0)+\'.</i>');
  scene.actions([
    { label: 'Continue', goto: ['havana', 'dressing_room'] },
  ]);
  scene.build();
}

function enterGym(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).sportzalrand = Math.floor(Math.random() * 21) + 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Fitness Center</b></center>');
  scene.img('images/locations/city/citycenter/gym/schedule.jpg');
  scene.text('There are a lot of different classes and clubs available at the fitness center, all designed to improve physical development.');
  if (((s as any).abonement ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your existing subscription package is valid for <<abonement>> more classes.
    scene.text(`Your existing subscription package is valid for ${((s as any).abonement ?? 0)} more classes.`);
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
    if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 12  &&  ((s as any).week ?? 0) === 7) {
      if (((s as any).centr ?? 0) === 1) {
        scene.text('You see <a href="exec:gt \'VolleyTrenCentr\'">Mikhail Nikolaevich</a> talking with a strange man.');
      } else {
        if (((s as any).centr ?? 0) === 2  &&  ((s as any).ricewine ?? 0) < 2) {
          scene.text('You see <a href="exec:gt \'VolleyTrenCentr\'">Guang</a> in the hall.');
        }
      }
    }
  }
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.actions([
      { label: 'Aerobics (Burn fat)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      { label: 'Free weights (Build muscle)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      { label: 'Cross trainer (endurance)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      { label: 'Tennis practice (agility)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      { label: 'Tennis practice (reactions)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      { label: 'Yoga (agility)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
      { label: 'Go to the kickboxing gym  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You''re too exhausted to do this. ...
  } },
    ]);
  } else {
    if (((s as any).pcs_energy ?? 0) < 20) {
      scene.actions([
        { label: 'Aerobics (Burn fat)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Free weights (Build muscle)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Cross trainer (endurance)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Tennis practice (agility)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Tennis practice (reactions)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Yoga (agility)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        { label: 'Go to the kickboxing gym  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
      ]);
    } else {
      if (((s as any).pcs_hydra ?? 0) < 20) {
        scene.actions([
          { label: 'Aerobics (Burn fat)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          { label: 'Free weights (Build muscle)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          { label: 'Cross trainer (endurance)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          { label: 'Tennis practice (agility)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          { label: 'Tennis practice (reactions)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          { label: 'Yoga (agility)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
          { label: 'Go to the kickboxing gym  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Aerobics (Burn fat)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier1', 30, 'vital', 'react');
    (s as any).fat = ((s as any).fat ?? 0) - (Math.floor(Math.random() * 5) + 0);
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/gym/fit11.jpg');
    scene.text('You do some very vigorous exercises to the music, burning some fat.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Light weights (Build strength)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/gym/fit2.jpg');
    scene.text('You do some reps with the lighter dumbbells, building your strength.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Heavy weights (Build muscle <font color=red>This can lead to extreme strength at a cost to appearance</font>)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren_plus');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/gym/fit6.jpg');
    scene.text('You pump the heavy weights, building your muscle.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Squats (Tone your butt)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier2', 30, 'stren', 'butt_tr');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/butt_gym.jpg');
    scene.text('You do various squats to tone your thighs and glutes, which also helps with building strength.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Cross trainer (endurance)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'vital');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/gym/fit3.jpg');
    scene.text('You spend half an hour doing reps on the cross trainer, developing your endurance.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Tennis practice (agility)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'agil');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/gym/fit4.jpg');
    scene.text('You run some tennis exercises, concentrating on defensive drills.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Tennis practice (reactions)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'react');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/pc/activities/exercises/gym/fit4.jpg');
    scene.text('You run some tennis exercises, concentrating on court reactions.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Yoga (agility)', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier2', 30, 'sprt', 'agil');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    qspCall(s, 'mood', 'raise', 'medium');
    scene.img('images/pc/activities/exercises/yoga_dressed.mp4');
    scene.text('You spend half an hour performing a yoga session, improving your agility. You also feel yourself relaxing, improving your mood.');
    if (((s as any).pcs_stam ?? 0) < 30) {
      scene.text('You\'re too tired to do any more exercise and will have to rest and regain some stamina.');
    } else {
      scene.actions([
        { label: 'Continue', goto: ['havana', 'gym'] },
      ]);
    }
    qspCall(s, 'havana', 'exercise_end');
  } },
          { label: 'Go to the kickboxing gym', goto: ['havana_kickboxing', 'start'] },
        ]);
      }
    }
  }
  qspCall(s, 'havana', 'exercise_end');
  scene.build();
}

function enterExerciseEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).result = Math.floor(Math.random() * 20) + 0;
  scene.actions([
    { label: 'Finish your workout', handler: (st: GameState) => {
    if ((!((s as any).result ?? 0))) {
      scene.img('images/locations/city/citycenter/gym/sex/zal1.jpg');
      scene.text('As you finish up your workout, you spot a rather attractive looking guy working out on the weight machine.');
      scene.actions([
        { label: 'Ignore him', handler: (st: GameState) => {
    scene.text('You focus on finishing your workout before you head to the changing room.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
    ]);
  } },
        { label: 'Flirt with him', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/zal1.jpg');
    scene.text('You approach and smile at him. "Working hard?"');
    scene.text('The man looks up and grins. "Yeah. I\'m benching pretty high, but I\'m aiming to go higher."');
    scene.text('He notices you staring at his muscular arms and shamelessly flexes. "Like what you see, girl?"');
    scene.actions([
      { label: 'Apologize', handler: (st: GameState) => {
    scene.text('"Oh sorry, I didn\'t mean to stare! You\'re in very good shape, though!" you reply.');
    scene.text('The man just smiles. "No need to apologize, I appreciate the compliment. Now if you\'ll excuse me, I need to shower before I leave."');
    scene.text('He gets up off the machine and heads to the changing room, leaving you in the gym.');
    scene.actions([
      { label: 'Continue', goto: ['havana', 'gym'] },
    ]);
  } },
      { label: 'Very much', handler: (st: GameState) => {
    scene.text('"Oh, very much so…" you mumble while still absent-mindedly staring at him.');
    scene.text('"Thanks," he says with a grin. "It\'s nice to know that my hard work is getting the intended results."');
    if (((s as any).hour ?? 0) >= 20  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.text('He looks around the empty room before smiling at you. "You\'re pretty cute. Do you want to help me… relax? I\'m feeling pretty tense after that workout."');
      qspCall(s, 'willpower', 'misc', 'force');
      if (((s as any).pcs_willpwr ?? 0) > ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Suck his dick [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the gym', Math.floor(Math.random() * 27) + 19);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/bj9.jpg');
    scene.text('You nod and squat on the floor as the man gets up and eagerly pulls his shorts down, releasing his already rock hard dick. The head is already glistening with precum.');
    scene.text('He places his hand on the back of your head as you take his cock into your mouth and start sucking.');
    scene.text('"Oh fuck yeah, use that tongue, girl!" he groans as you gaze up at him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', (-5), 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'cum_call', 'mouth_swallow', 'guy from the gym');
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/cum14.jpg');
    scene.text('You continue sucking his dick, the thrill of being caught only empowering you further. The guy then groans loudly and says that he\'s about to cum.');
    scene.text('A few seconds later, you feel spurts of warm cum hitting your throat as his cock twitches in your mouth.');
    scene.text('Once he finishes, he pulls out and grins down at you. "Fuck, that was just what I needed! You\'re a damn pro at sucking dick!"');
    scene.text('You smile up at him before making a show of swallowing his cum as he fixes his shorts.');
    scene.text('"That was fun, but we should get going before someone spots us," he says and you both head to your respective changing rooms.');
    scene.actions([
      { label: 'Continue', goto: ['havana', 'dressing_room'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Suck his dick [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Oh, I\'m not that type of girl," you reply as you feel yourself blushing a little.');
    scene.text('The man smiles, but you can tell that he\'s disappointed. "Shame. It would have been fun. Maybe next time?"');
    scene.text('He gets up off the machine and heads to the changing room, leaving you in the gym.');
    scene.actions([
      { label: 'Continue', goto: ['havana', 'gym'] },
    ]);
  } },
      ]);
    } else {
      scene.text('He looks you over and seems to consider something before changing his mind.');
      scene.text('"If you\'ll excuse me, I need to shower before I leave."');
      scene.text('He gets up off the machine and heads to the changing room, leaving you in the gym.');
      scene.actions([
        { label: 'Stay in the gym', goto: ['havana', 'gym'] },
        { label: 'Go to the locker room', goto: ['havana', 'dressing_room'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).result ?? 0) === 1  &&  ((s as any).hour ?? 0) >= 20  &&  ((s as any).pcs_hotcat ?? 0) >= 7) {
        scene.img('images/locations/city/citycenter/gym/sex/zal3.jpg');
        scene.text('You finish up your workout and are taking a break on one of the weight benches when a guy sits behind you and suddenly starts caressing your breasts.');
        qspCall(s, 'willpower', 'misc', 'self', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Hit him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Hit him [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('You jab him as hard as you can in the ribs and quickly squirm out of his grasp as he cries out in pain. You then run to the changing room without looking back.');
    scene.actions([
      { label: 'Continue', goto: ['havana', 'dressing_room'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Remain still', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/zal3.jpg');
    scene.text('You gasp, but otherwise don\'t react, which causes the man to laugh.');
    scene.text('"That\'s it. Just let it happen," he whispers in your ear.');
    scene.text('You squirm slightly when he pulls your top down and starts groping your bare breasts.');
    scene.text('"Fuck, your tits feel great!" he says before he starts teasing your nipples.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/zal4.jpg');
    scene.text('The man suddenly gets up and walks round in front of you, where he pulls his shorts down. He grins at you as he starts grinding his cock between your breasts.');
    scene.text('"Don\'t be shy now," he says and reaches for your hand.');
    scene.text('Just as he\'s about to force you to jack him off, a noise suddenly startles you and you look around the room.');
    scene.text('"Is somebody there?" the man shouts. "Show yourself!"');
    scene.text('After a few seconds of silence, the man fixes his shorts. "Fuck this, I thought the place was empty!"');
    scene.text('He quickly flees from the room without another word, leaving you alone. After taking a minute to fix your top and compose yourself, you head to the changing room.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).result ?? 0) === 2  &&  ((s as any).pcs_hotcat ?? 0) >= 6) {
          scene.text('As you finish your workout, a rather pretty looking girl approaches you.');
          scene.text('"Hey, you! I need a squash partner and my boyfriend is taking <i>forever</i> to show up! Can you play with me until he gets here?"');
          scene.actions([
            { label: 'Refuse', handler: (st: GameState) => {
    scene.text('You shake your head before heading to the changing room.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
    ]);
  } },
            { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/zal5.jpg');
    scene.text('You agree and head to the squash court to start the game. Neither of you are any good, but it\'s good exercise. After a while, you notice a man looking at your clumsy attempt at playing and he offers to show you how to play correctly.');
    scene.text('He stands behind you and puts one hand on your hand, guiding your racket and showing you how to strike the ball as You feel his other hand stroking your hip. He pushes you forwards a little, causing your ass to press up against his groin.');
    scene.text('You look at the girl and her smile gives away the fact that she knows exactly what\'s going on here; this guy must be her boyfriend.');
    scene.actions([
      { label: 'Escape', handler: (st: GameState) => {
    scene.text('You break free from his grasp before running out of the room.');
    scene.text('"Awww, you\'re no fun!" you hear the girl call out behind you.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
    ]);
  } },
      { label: 'Join in', handler: (st: GameState) => {
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    (s as any).girl = ((s as any).girl ?? 0) + (1);
    qspCall(s, 'npcgeneratec', '', 0, 'guy from the gym', Math.floor(Math.random() * 27) + 19, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'npcgeneratec', '', 1, 'girl from the gym', Math.floor(Math.random() * 27) + 19, Math.floor(Math.random() * 2) + 3, 1);
    qspCall(s, 'npcStat', '', ((s as any).npclastgenerated ?? 0), 'a');
    scene.img('images/locations/city/citycenter/gym/sex/zal5.jpg');
    scene.text('You smile at the girl and she nods at her boyfriend, who starts groping your ass.');
    scene.text('"We\'re too exposed here. We should go to our usual spot," the girl says.');
    scene.text('The guy nods and they lead you to what appears to be a storage area for equipment.');
    scene.text('Once inside, the guy pulls off his pants and takes a seat on an old weightlifting bench.');
    qspCall(s, 'arousal', 'foreplay', (-2), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'foreplay', (-3), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/threesome1.jpg');
    scene.text('You and the girl kneel in front of the guy and take turns sucking his dick, causing him to groan loudly as he compliments you.');
    scene.text('"Fuck, that feels good!" he says. "I need to fuck her before I blow my load!"');
    scene.text('"You\'re cumming already?" the girl moans.');
    scene.text('"Hey, it\'s not my fault that I have two hot girls worshipping my cock!" he replies with a grin.');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Strip', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/threesome2.jpg');
    scene.text('You all strip your clothes off before they have you lie back on the bench and spread your legs. As the guy moves in between your legs, the girl straddles the bench above you and sits on your face.');
    scene.text('She starts grinding against you, her wetness smearing across your face as you feel the guy\'s dick slide into your pussy, causing you to moan softly into the girl\'s crotch.');
    scene.text('You keep licking and teasing her pussy as the guy fucks you with plenty of enthusiasm, but little technique. After a few minutes, he moans out that he\'s about to cum.');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Keep going', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/sex/threesome3.jpg');
    scene.text('You keep licking the girl\'s pussy and sucking on her clit, quickly bringing her to orgasm. She cums over your face as you feel the guy pull out before spurts of warm cum splatter over your pussy and stomach.');
    scene.text('Once he\'s done, the girl climbs off you and you all take a minute to recover.');
    scene.text('"You didn\'t even fuck me before you came!" the girl moans.');
    scene.text('"Sorry, but this girl you brought has a great pussy! You also worked me up earlier, so it\'s not really my fault!"');
    scene.text('They start bickering with each other, so you quietly gather your clothes up before getting dressed and slipping out of the room.');
    scene.text('You feel pretty dirty and should probably clean up in the shower.');
    qspCall(s, 'arousal', 'vaginal', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'cuni_give', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'cum_call', 'labia', ((s as any).npcID ?? 0));
    qspCall(s, 'cum_call', 'stomach', ((s as any).npcID ?? 0));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Go to the changing room', goto: ['havana', 'dressing_room'] },
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
        } else {
          if (((s as any).result ?? 0) === 3) {
            scene.img('images/locations/city/citycenter/gym/sex/zal6.jpg');
            scene.text('As you work out, another girl approaches and smiles before engaging you in conversation. As you exercise together, two guys walk up and try to chat you up.');
            scene.actions([
              { label: 'Ignore them', handler: (st: GameState) => {
    scene.text('You both ignore their attempts at flirting with you, but they keep trying until they eventually get bored and finally leave the two of you in peace to finish your workout.');
    scene.text('Once you\'re done, the girl thanks you for the company before heading to the changing room.');
    scene.actions([
      { label: 'Stay in the gym', goto: ['havana', 'gym'] },
      { label: 'Go to the locker room', goto: ['havana', 'dressing_room'] },
    ]);
  } },
              { label: 'Flirt back', handler: (st: GameState) => {
    scene.text('You flirt with one of the guys, who seems excited that you\'re talking to him and doubles down on his own flirting efforts.');
    scene.text('"Piss off already, you fucking perv! I\'m not going to suck your dick!" you suddenly hear the other girl cry out.');
    scene.text('You turn to see her pushing the other guy away, who makes a quick and embarrassing retreat. His friend curses him for ruining their chances as he follows.');
    scene.text('The girl shakes her head before she returns to her workout. "I swear this city is overrun with sleazy perverts!"');
    scene.text('You finish your workout together and she thanks you for the company before heading to the changing room.');
    scene.actions([
      { label: 'Stay in the gym', goto: ['havana', 'gym'] },
      { label: 'Go to the locker room', goto: ['havana', 'dressing_room'] },
    ]);
  } },
            ]);
          } else {
            scene.text('Nothing interesting happens as you finish your workout.');
            scene.actions([
              { label: 'Go to the changing room', goto: ['havana', 'dressing_room'] },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterFMR(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).Fit ?? {})['FMR'] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/citycenter/photo/fotograph.jpg');
  if (((s as any).job_status ?? 0)?.['city_aphrodite_model'] === 'employed') {
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>!"
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}!"`);
    scene.text('You turn and see a man with several cameras hanging from his neck. You recognize him as one of Aphrodite\'s photographers. Now that you think about it, he\'s been hanging around some of the sports events in which you have participated.');
    scene.text('"The agency sent me to tell you that our sponsors want to give you an opportunity as a fitness model. It seems you\'re getting pretty famous!"');
    scene.text('You smile. The fitness gigs at the agency are paid based not only on your modeling experience, but also your relative sports fame and bodybuild.');
    // TODO-QSP: dynamic text: "Congratulations <<$pcs_nickname>>, you've earned it!" he smiles.
    scene.text(`"Congratulations ${((s as any).pcs_nickname ?? 0)}, you've earned it!" he smiles.`);
    scene.text('He then turns around and, after waving a final goodbye, leaves.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'start'] },
    ]);
  } else {
    scene.text('You see a man with several cameras hanging from his neck. You vaguely remember him hanging around some of the sports events in which you have participated. He smiles and quickly takes your hand in a handshake.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>, isn't it? I'm here to make a proposal. A serious business <i...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}, isn't it? I'm here to make a proposal. A serious business <i>career-oriented</i> proposal. Would you consider becoming a model?"`);
    scene.text('You blink, utterly taken aback. You? A model?! You have the looks, and it\'s not that weird for a woman in the sports career to be offered a job in the model business, but are you going to trust this stranger?');
    scene.text('Sensing your hesitation, the man pushes a business card into your hands. "You don\'t need to give an answer right now. Ask around if you want, and when you\'ve made your decision, come and see us. If you pass some basic tests, you can start a new and very exciting career."');
    scene.text('After waving goodbye, the man leaves and you glance down at the card.');
    scene.text('<i>Aphrodite Photography</i>');
    scene.text('You remember seeing that name around the city center. Maybe you could go and take a look?');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'start'] },
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
    case 'dressing_room':
      enterDressingRoom(s, scene);
      break;
    case 'fitgirl':
      enterFitgirl(s, scene);
      break;
    case 'tanya_introduction':
      enterTanyaIntroduction(s, scene);
      break;
    case 'gym':
      enterGym(s, scene);
      break;
    case 'exercise_end':
      enterExerciseEnd(s, scene);
      break;
    case 'FMR':
      enterFMR(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const havana: LocationDef = {
  name: 'havana',
  title: 'Fitness Center',
  region: 'other',
  locationType: 'private',
  locclass: 'changingroom',
  description: ['This modern and well staffed fitness center features all of the latest equipment, as well as trainers to help you make the most of them.'],
  enter: enter,
};
