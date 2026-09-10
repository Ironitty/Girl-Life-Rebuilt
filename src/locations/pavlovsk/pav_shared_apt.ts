import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterUpdate(s: GameState, scene: SceneBuilder): void {
  (s as any).shared_apt['rentWeekly'] = 2000;
  if (((s as any).shared_apt ?? 0)?.['rentLeft'] <= 0) {
    (s as any).shared_apt['rentLeft'] = 0;
  }
  if (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart'] >= 7) {
    (s as any).shared_apt['weekNum'] = (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart']) / 7;
  } else {
    (s as any).shared_apt['weekNum'] = 0;
  }
  if (((s as any).orgB ?? 0) > 100) {
    (s as any).orgB = 100;
  }
  (s as any).shared_apt['price_cook'] = 50;
  (s as any).shared_apt['price_clean'] = 50;
  (s as any).shared_apt['price_handjob'] = 50;
  (s as any).shared_apt['price_blowjob'] = 100;
  (s as any).shared_apt['price_vaginal'] = 150;
  (s as any).shared_apt['price_anal'] = 200;
  (s as any).shared_apt['price_special'] = 250;
  (s as any).Oleg['font'] = '007bff';
  (s as any).Oleg['leaves'] = 9;
  (s as any).Oleg['comes'] = 18;
  (s as any).Oleg['sleeps'] = 23;
  (s as any).Oleg['wakes'] = 8;
  (s as any).Nestor['font'] = '8a0000';
  (s as any).Nestor['leaves'] = 11;
  (s as any).Nestor['comes'] = 19;
  (s as any).Nestor['sleeps'] = 23;
  (s as any).Nestor['wakes'] = 9;
  (s as any).Yakov['font'] = '017a01';
  (s as any).Yakov['leaves'] = 7;
  (s as any).Yakov['comes'] = 16;
  (s as any).Yakov['sleeps'] = 22;
  (s as any).Yakov['wakes'] = 5;
  (s as any).Oleg['mood_txt'] = ((((s as any).Oleg ?? 0)?.['mood'] === 1) ? ('great') : (''));
  (s as any).Nestor['mood_txt'] = ((((s as any).Nestor ?? 0)?.['mood'] === 1) ? ('great') : (''));
  (s as any).Yakov['mood_txt'] = ((((s as any).Yakov ?? 0)?.['mood'] === 1) ? ('great') : (''));
  if (((s as any).shared_apt ?? 0)?.['childWarning'] === 1  &&  ((s as any).shared_apt ?? 0)?.['childWarningDay'] === 0) {
    (s as any).shared_apt['childWarningDay'] = ((s as any).daystart ?? 0);
  }
  qspCall(s, 'stat', '');
  if (((s as any).shared_apt ?? 0)?.['debug'] === 1) {
    scene.text('<a href="exec:shared_apt[\'debug\']=2">Debug</a>');
  } else {
    scene.actions([
      { label: 'Debug', handler: (st: GameState) => {
    qspCall(st, 'pav_shared_apt', 'debug');
  } },
    ]);
  }
  return;
  scene.build();
}

function enterDailyUpdate(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shared_apt ?? 0)?.['enabled'] === 1) {
    if (((s as any).shared_apt ?? 0)?.['alreadyProcessed'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart'] >= 7) {
        (s as any).shared_apt['weekNum'] = (((s as any).daystart ?? 0) - ((s as any).shared_apt ?? 0)?.['intro_daystart']) / 7;
      } else {
        (s as any).shared_apt['weekNum'] = 0;
      }
      if (((s as any).shared_apt ?? 0)?.['weekNum'] >= ((s as any).shared_apt ?? 0)?.['rentWeekNum']) {
        if (((s as any).shared_apt ?? 0)?.['rentLeft'] > 0) {
          (s as any).shared_apt['rentLeft'] = ((s as any).shared_apt['rentLeft'] ?? 0) + (((s as any).shared_apt ?? 0)?.['rentWeekly']);
          (s as any).shared_apt['missedWeeks'] = ((s as any).shared_apt['missedWeeks'] ?? 0) + (1);
          (s as any).shared_apt['Lockrent'] = 1;
          (s as any).shared_apt['rentPaid'] = 0;
        } else {
          (s as any).shared_apt['rentLeft'] = ((s as any).shared_apt ?? 0)?.['rentWeekly'];
          (s as any).shared_apt['missedWeeks'] = 0;
          (s as any).shared_apt['rentPaid'] = 1;
        }
        (s as any).shared_apt['rentWeekNum'] = ((s as any).shared_apt ?? 0)?.['weekNum'] + 1;
        if (((s as any).shared_apt ?? 0)?.['missedWeeks'] >= 2) {
          qspCall(s, 'pav_shared_apt', 'block_apt', 1);
          // TODO-QSP: gs 'notification', 'add', $func('wrap', 'neg', 'You''ve been evicted from the shared apartment for n...
        } else {
          // TODO-QSP: gs 'notification', 'add', $func('wrap', 'neg', 'Your rent is now overdue! You owe <<$func(''money'',...
          // TODO-QSP: gs 'notification', 'add', $func('wrap', 'accent', 'Your weekly rent of <<$func(''money'', ''string_p...
        }
      }
      (s as any).shared_apt['alreadyProcessed'] = ((s as any).daystart ?? 0);
    }
  }
  scene.build();
}

function enterGetRentStatus(s: GameState, scene: SceneBuilder): void {
  if (((s as any).shared_apt ?? 0)?.['rentLeft'] > 0) {
    if (((s as any).shared_apt ?? 0)?.['missedWeeks'] > 1) {
    }
    if (qspFunc(s, 'money', 'can_afford', qspUntranslated(s, "\u00000\u0000", { location: "pav_shared_apt" }))) {
      // TODO-QSP: $result += '<br>You may pay it in <a href="exec:gt ''pav_shared_apt'', ''payCash''">cash</a> now.'
    } else {
      // TODO-QSP: $result += '<br>You may pay it in cash when you have enough money.'
    }
  }
  scene.build();
}

function enterBlockApt(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'block_access', 'shared_apartment', 0);
  (s as any).servitudelvl_bak = ((s as any).shared_apt ?? 0)?.['servitudeLvl'];
  (s as any).shared_apt['seenAd'] = 1;
  if (((s as any).ARGS ?? 0)[1] === 1) {
    (s as any).shared_apt['evicted'] = 1;
  }
  (s as any).shared_apt['previousTenant'] = 1;
  (s as any).shared_apt['servitudeLvl'] = ((s as any).servitudelvl_bak ?? 0);
  scene.build();
}

function enterList(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  // TODO-QSP: dynamic text: <center><h3><<$pcs_firstname>>'s pricelist</h3></center>
  scene.text(`<center><h3>${((s as any).pcs_firstname ?? 0)}'s pricelist</h3></center>`);
  scene.img('images/locations/pavlovsk/resident/sharedapt/list.jpg');
  // TODO-QSP: dynamic text: The basic weekly rent is <<$func('money', 'string_price', shared_apt['rentWeekly...
  scene.text(`The basic weekly rent is ${qspFunc(s, 'money', 'string_price', ((s as any).shared_apt ?? 0)?.['rentWeekly'])}.`);
  scene.text('It is possible to pay it in cash or offer services instead. The prices are following:');
  scene.text('---------------------');
  // TODO-QSP: 'Cook a warm meal: '  +shared_apt['price_cook']
  // TODO-QSP: 'Clean the apartment: '  +shared_apt['price_clean']
  if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] >= 2) {
    scene.text('---------------------');
    scene.text('Written in marker on the paper, are sexual favours you can offer as well.');
    scene.text('---------------------');
    scene.text('Rent discounts for the slut: ');
    // TODO-QSP: 'Handjob: '      +shared_apt['price_handjob']
    // TODO-QSP: 'Blowjob: '      +shared_apt['price_blowjob']
    // TODO-QSP: 'Sex: '        +shared_apt['price_vaginal']
    // TODO-QSP: 'Anal sex: '    +shared_apt['price_anal']
    // TODO-QSP: 'Special treats: '  +shared_apt['price_special']
  }
  scene.text('---------------------');
  scene.text('Not having paid the full weekly rent at the beginning of a new week will lead to termination of the accommodation services.');
  // TODO-QSP: dynamic text: Signed: <a href="exec: gt 'pav_shared_oleg', 'oleg_dick'"><font color=#<<$Oleg['...
  scene.text(`Signed: <a href="exec: gt 'pav_shared_oleg', 'oleg_dick'"><font color=#${((s as any).Oleg ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.['A266']}</font></a>, <a href="exec: gt 'pav_shared_nestor', 'nestor_dick'"><font color=#${((s as any).Nestor ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.['A265']}</font></a>, <a href="exec: gt 'pav_shared_yakov', 'yakov_dick'"><font color=#${((s as any).Yakov ?? 0)?.['font']}>${((s as any).npc_firstname ?? 0)?.['A264']}</font></a>, ${((s as any).pcs_firstname ?? 0)}.`);
  scene.text('---------------------');
  scene.actions([
    { label: 'Continue', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterBathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', 'bathroom');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.text('<center><h3>Bathroom</h3></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/vanrpar.jpg');
  scene.text('This is a modest bathroom, containing everything that young people need for their daily life, such as:');
  // TODO-QSP: dynamic text: A shower, toilet, <a href="exec:gt 'mirror','start'">mirror</a>, where you can '...
  scene.text('A shower, toilet, <a href="exec:gt \'mirror\',\'start\'">mirror</a>, where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, a sink and even a bath tub.');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'home_events', 'bathroom');
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterKitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', 'kitchen');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><h3>Kitchen</h3></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/home/kuhrpar.jpg');
  scene.text('It\'s a modest kitchen, but has all that is needed.');
  // TODO-QSP: dynamic text: You can cook breakfast for the guys between '+func('time', 'get_time_string', 6,...
  scene.text('You can cook breakfast for the guys between \'+func(\'time\', \'get_time_string\', 6, 0)+\' and \'+func(\'time\', \'get_time_string\', 7, 0)+\' and dinner for them between \'+func(\'time\', \'get_time_string\', 18, 0)+\' and \'+func(\'time\', \'get_time_string\', 19, 0)+\'');
  if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
    // TODO-QSP: dynamic text: Above the sink are <b><<mc_inventory['dish_plates']>></b> the clean plates
    scene.text(`Above the sink are <b>${((s as any).mc_inventory ?? 0)?.['dish_plates']}</b> the clean plates`);
  } else {
    scene.text('<b><font color = red>You have no clean dishes left.</font></b>');
  }
  if (((s as any).dirttarelka ?? 0) > 0) {
    // TODO-QSP: dynamic text: The sink has <b><<dirttarelka>></b> dirty dishes. <a href="exec: gs 'kit_din', '...
    scene.text(`The sink has <b>${((s as any).dirttarelka ?? 0)}</b> dirty dishes. <a href="exec: gs 'kit_din', 'dirtarm'">that need to be washed</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
    // TODO-QSP: dynamic text: Above the sink is some detergent to wash the dishes with. There is enough for <b...
    scene.text(`Above the sink is some detergent to wash the dishes with. There is enough for <b>${((s as any).mc_inventory ?? 0)?.['dish_soap']}</b> uses.`);
  } else {
    scene.text('<b><font color = red>You do not have enough detergent, you should buy some from the supermarket.</font></b>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
    }
    // TODO-QSP: dynamic text: In the refrigerator there's enough (your own) food for <b><<mc_inventory['food_b...
    scene.text(`In the refrigerator there's enough (your own) food for <b>${((s as any).mc_inventory ?? 0)?.['food_basic']}</b> servings. ${((s as any).edagot ?? 0)}`);
  }
  qspCall(s, 'kit_din', 'edahota');
  if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
    // TODO-QSP: $func('wrap', 'v_neg b', 'You have nothing to eat, the refrigerator is empty!')
  }
  if (((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 18) {
    scene.text('<a href="exec: gt \'pav_shared_apt\', \'cookForGuys\'">Cook meals for the guys (1:30)</a>');
  }
  qspCall(s, 'core_library', 'kitchen', 'full');
  scene.actions([
    { label: 'Leave', goto: ['pav_shared_apt', 'start'] },
  ]);
  scene.build();
}

function enterPcsRoom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_shared_apt', ((s as any).locArgs?.[0] ?? 0));
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  qspCall(s, 'pav_shared_apt', 'update');
  qspCall(s, 'music_actions', 'clear_restrictions');
  if (((s as any).pcs_magik ?? 0) >= 6  &&  ((s as any).spellbefshild ?? 0) === 1  &&  (!((s as any).tobiQW ?? 0))) {
    scene.actions([{ label: 'Continue', goto: ['tobiQW', 'start'] }]);
  }
  scene.text('<center><b>Living Room</b></center>');
  scene.img('images/shared/home/bedroom/sofabed.jpg');
  scene.text('The living room was never used by the other apartment occupants, so it\'s now rented out as a bedroom. It\'s sparsely decorated, with, a <a href="exec:gt \'bed\', \'start\'">sofa bed</a>, against the back wall.');
  scene.text('Beside the sofa bed is an old cabinet, with your <a href="exec:gt \'alarmclock\', \'start\'">alarm clock</a> on top.');
  if (((s as any).ml_guitar ?? 0)?.['location'] === ((s as any).loc ?? 0)) {
    scene.text('Your guitar rests on its stand next to your bed.');
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['plasma_tv'] === 0) {
  }
  if (((s as any).mc_inventory ?? 0)?.['tech_tv'] >= 1) {
  }
  // TODO-QSP: dynamic text: There is an wall unit at the other side of the room, <<$temp_TV_text>>. Everyone...
  scene.text(`There is an wall unit at the other side of the room, ${((s as any).temp_TV_text ?? 0)}. Everyone in the household spends their time in their own rooms, so there was never a reason to use the living room for its intended purpose.`);
  scene.text('In the corner is an old scratched <a href="exec:gt \'stol\', \'start\'">table</a>.');
  scene.text('There is no door to the living room, instead there\'s <a href="exec:view\'images/shared/home/bedroom/curtain.jpg\'">curtain</a> covering entry to the room, which gives you a modicum of privacy; not much better than the state of the non-existent window curtains.');
  if (((s as any).mc_inventory ?? 0)?.['hula_hoop'] > 0) {
    scene.text('<br>A hula hoop stands in corner of the room. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['skipping_rope'] > 0) {
    scene.text('A jump rope lies on a shelf. ');
  }
  if (((s as any).mc_inventory ?? 0)?.['book_yoga'] > 0) {
    scene.text('A yoga mat is rolled up in a corner. ');
  }
  qspCall(s, 'exercise', 'start');
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access', 'free', 'nocamshow');
    if (((s as any).shared_apt ?? 0)?.['servitudeLvl'] === 2) {
      qspCall(s, 'internet_mobile', 'remove_limitation', 'nocamshow');
    }
    scene.text('Your <a href="exec:gorodokKomp = 1 & gt \'komp\',\'start\'">computer</a> is sitting on small table.');
  }
  if (((s as any).mc_inventory ?? 0)?.['vintage_card'] > 0) {
    // TODO-QSP: act 'View your vintage porn cards': card_deck = 0
    scene.actions([{ label: 'Continue', goto: ['card', ''] }]);
  }
  if (((s as any).mc_inventory ?? 0)?.['card'] > 0) {
    // TODO-QSP: act 'View your new porn cards': card_deck = 1
    scene.actions([{ label: 'Continue', goto: ['card', ''] }]);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0) {
    // TODO-QSP: dynamic text: You have <<mc_inventory['cocaine']>> doses of Pale Lady, hidden from the other h...
    scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['cocaine']} doses of Pale Lady, hidden from the other housemates.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['cocaine'] > 0  &&  ((s as any).drugVars ?? 0)?.['cocaine_day'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Use some Pale Lady (0:05)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'cocaine');
    scene.img('images/shared/drugs/dur.jpg');
    scene.text('You snort some Pale Lady, feeling dizzy for just a moment. After that, you feel fantastic and incredibly horny.');
    scene.actions([
      { label: 'Continue', goto: ['pav_shared_apt', 'pcsRoom'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['tapestry'] > 0) {
    // TODO-QSP: dynamic text: You have <<mc_inventory['tapestry']>> completed tapestries.
    scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['tapestry']} completed tapestries.`);
  }
  if (((s as any).pcs_sewng ?? 0) >= 40  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
    // TODO-QSP: dynamic text: You have enough fabric for <<mc_inventory['sewing_fabric']>> lessons.
    scene.text(`You have enough fabric for ${((s as any).mc_inventory ?? 0)?.['sewing_fabric']} lessons.`);
  }
  if (((s as any).pcs_sewng ?? 0) >= 40  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] <= 0) {
    scene.text('You do not have any fabric.');
  }
  if (((s as any).pcs_sewng ?? 0) >= 80  &&  ((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
    if (((s as any).newgobelen ?? 0) === 0  &&  ((s as any).mc_inventory ?? 0)?.['sewing_fabric'] > 0) {
      scene.actions([
        { label: 'Start a new tapestry', goto: ['sewing', 'tapestry'] },
      ]);
    }
    if (((s as any).newgobelen ?? 0)>=1) {
      // TODO-QSP: dynamic text: Your tapestry is <<newgobelen/10>> percent finished.
      scene.text(`Your tapestry is ${((s as any).newgobelen ?? 0)/10} percent finished.`);
      scene.actions([
        { label: 'Work on the tapestry', goto: ['sewing', 'tapestry'] },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
    scene.text('Your <a href="exec:gt \'stol\', \'bc\'">birth control</a> tablets are in the cabinet next to your bed, along with some <a href="exec:gt \'stol\', \'bc\'">condoms</a>.');
  } else {
    scene.text('Your <a href="exec:gt \'stol\', \'bc\'">birth control</a> tablets are in the cabinet next to your bed.');
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
      scene.text('Your <a href="exec:gt \'stol\', \'bc\'">condoms</a> are in the cabinet next to your bed.');
    }
    if (((s as any).mc_inventory ?? 0)?.['sewing_kit'] === 1) {
      scene.text('Your <a href="exec:gt \'sewing\',\'start\'">sewing kit</a> is stored on a shelf.');
    }
    if (((s as any).mc_inventory ?? 0)?.['trinkets_home'] > 0) {
      // TODO-QSP: dynamic text: You currently have <<mc_inventory['trinkets_home']>> trinkets to sell at the sta...
      scene.text(`You currently have ${((s as any).mc_inventory ?? 0)?.['trinkets_home']} trinkets to sell at the station. The maximum you can carry with you is 30.`);
    }
    qspCall(s, 'din_van', 'wearpan');
    qspCall(s, 'din_van', 'removepan');
    qspCall(s, 'daily_routine', 'offer_here');
    qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
    qspCall(s, 'music_actions', 'start');
    scene.actions([
      { label: 'Relax on your bed', goto: ['bed', 'start'] },
    ]);
  }
  scene.actions([
    { label: '<b>Leave the room</b>', goto: ['pav_shared_apt', 'start'] },
    { label: 'Sit on the sofa bed', goto: ['pav_shared_apt', 'sofabed'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'update':
      enterUpdate(s, scene);
      break;
    case 'daily_update':
      enterDailyUpdate(s, scene);
      break;
    case 'get_rent_status':
      enterGetRentStatus(s, scene);
      break;
    case 'block_apt':
      enterBlockApt(s, scene);
      break;
    case 'list':
      enterList(s, scene);
      break;
    case 'bathroom':
      enterBathroom(s, scene);
      break;
    case 'kitchen':
      enterKitchen(s, scene);
      break;
    case 'pcsRoom':
      enterPcsRoom(s, scene);
      break;
    default:
      enterUpdate(s, scene);
      break;
  }
}

export const pav_shared_apt: LocationDef = {
  name: 'pav_shared_apt',
  title: 'You\'ve been evicted from the shared apartment for not paying rent for multiple weeks!',
  region: 'pavlovsk',
  locationType: 'private',
  locclass: 'bedr',
  enter: enter,
};
