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
    (s as any).runnerQW['joined_team'] = 1;
    scene.text('You sign up for the track team.');
    scene.actions([
      { label: 'Leave', goto: ['havana', 'dressing_room'] },
    ]);
  } },
      ]);
    } else {
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
        if (((s as any).week ?? 0) === 6  &&  ((s as any).pcs_run ?? 0) >= 20  &&  ((s as any).runnerQW ?? 0)?.['comp_day'] !== ((s as any).daystart ?? 0)) {
          scene.actions([
            { label: 'Enter competition race  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        }
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
        scene.actions([
          { label: 'Go to team practice  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        ]);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['deodorant'] > 0  &&  (!((s as any).deodorant_on ?? 0))) {
      // TODO-QSP: 'Your deodorant will last for <b><<mc_inventory[''deodorant'']>></b> more '+iif(mc_inventory['deodor...
      scene.actions([
        { label: 'Apply deodorant (0:01)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).mc_inventory['deodorant'] = ((s as any).mc_inventory['deodorant'] ?? 0) - (1);
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
  }
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'dressing_room':
      enterDressingRoom(s, scene);
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
