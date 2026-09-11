import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 0;
  qspCall(s, 'core_library', 'setloc', 'city_sauna', '');
  (s as any).sauna = ((s as any).sauna ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sauna</b></center>');
  scene.img('images/locations/city/residential/sauna/sauna.jpg');
  scene.text('A luxurious high quality public sauna built a long time ago. The sauna houses separate changing rooms and shower facilities for men and women.');
  if (((s as any).saunaWhore ?? 0) >= 1) {
    // TODO-QSP: act 'Go to work': gt 'city_saunawhore', 'saunawork'
  }
  if (((s as any).week ?? 0) === 5  &&  ((s as any).workDisk ?? 0) === 2) {
    scene.text('There\'s a security guard waiting at the entrance for you to arrive.');
    scene.actions([
      { label: 'Hand over the disk', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    (s as any).workDisk = 3;
    (s as any).konvert = 1;
    qspCall(s, 'stat', '');
    scene.text('You hand over the disk and are given a thick envelope in return.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).hour ?? 0) >= 8) {
    // TODO-QSP: act 'Head to the sauna': gt 'city_sauna', 'sauna2'
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_residential', ''] },
  ]);
  scene.build();
}

function enterSauna2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_sauna', 'sauna2');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Sauna</b></center>');
  scene.img('images/locations/city/residential/sauna/sauna1.jpg');
  // TODO-QSP: dynamic text: A one hour session costs ' + $func('money', 'string_price', 2000) + '.
  scene.text('A one hour session costs \' + $func(\'money\', \'string_price\', 2000) + \'.');
  if (((s as any).saunaday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Stay [+$func(\'money\', \'get_cost_string\', 2000)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 2000) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 2000);
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      (s as any).fat = ((s as any).fat ?? 0) - (10);
      (s as any).pcs_sweat = Math.floor(Math.random() * 6) + 0;
      qspCall(s, 'din_van', 'showerdin');
      (s as any).saunaday = ((s as any).daystart ?? 0);
      qspCall(s, 'mood', 'raise', 'medium');
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (50);
      if (((s as any).pcs_horny ?? 0) < 0) {
        (s as any).pcs_horny = 0;
      }
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (((s as any).healthmax ?? 0)/5);
      (s as any).pcs_stam = ((s as any).stammax ?? 0);
      if (((s as any).sauna_daystart ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).sauna_daystart = ((s as any).daystart ?? 0);
        (s as any).pcs_skin = ((s as any).pcs_skin ?? 0) + (Math.floor(Math.random() * 3) + 2);
        (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) + (5);
      }
      (s as any).pcs_mana = (((s as any).pcs_intel ?? 0)*((s as any).pcs_magik ?? 0)) + ((s as any).pcs_magik ?? 0)*100 + ((s as any).pcs_vital ?? 0)*10 + ((s as any).rikudo ?? 0);
      qspCall(s, 'stat', '');
      scene.img('images/locations/city/shared/sauna/sau.jpg');
      scene.text('You spend an hour relaxing in the heat of the sauna before having a cool shower and dressing. You feel revitalised.');
      scene.actions([
        { label: 'Leave', goto: ['city_sauna', ''] },
      ]);
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['city_sauna', ''] },
  ]);
  scene.build();
}

function enterSaunaroom(s: GameState, scene: SceneBuilder): void {
  (s as any).phone_off = 1;
  qspCall(s, 'core_library', 'setloc', 'city_sauna', 'saunaroom');
  (s as any).saunaYouRoom = 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>Room</b></center>');
  scene.img('images/locations/city/residential/sauna/saunaroom.jpg');
  // TODO-QSP: dynamic text: <br>The room has a thread bare <a href="exec:minut += 1 & gt 'bed2'">bed</a> and...
  scene.text('<br>The room has a thread bare <a href="exec:minut += 1 & gt \'bed2\'">bed</a> and a cheap <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> where you can choose outfits and organize your clothing.');
  if (((s as any).pcs_energy ?? 0) >= 10) {
    scene.text('<br>Hanging on the wall is a dirty <a href="exec:gt \'mirror\', \'start\'">mirror</a>. The floor is littered with dozens of porn magazines and a selection of sex toys are scattered throughout the room. There\'s so much stuff lying around, there\'s barely enough space to do some basic <a href="exec:gt \'city_sauna\', \'saunafitness\'">exercise</a>.');
  } else {
    scene.text('<br>Hanging on the wall is a dirty <a href="exec:gt \'mirror\', \'start\'">mirror</a>. The floor is littered with dozens of porn magazines and a selection of sex toys are scattered throughout the room. There\'s so much stuff lying around, there\'s barely enough space for some basic exercises but you feel too hungry to any.');
  }
  // TODO-QSP: $func('alarmclock', 'base_alarmclock_text')
  scene.text('If you run out of personal hygiene or beauty products, you can ask for more at a cost.');
  if (((s as any).workDolg ?? 0) > 0) {
    qspCall(s, 'money', 'debt_pay', 'workDolg');
    if (((s as any).workDolg ?? 0) <= 0) {
      (s as any).abductionReturned = 1;
    }
    // TODO-QSP: 'Your debt is ' + $func('money', 'string_debt', workDolg)
  }
  if (((s as any).workDolg ?? 0) > 0) {
    if (((s as any).mc_inventory ?? 0)?.['cosmetics'] === 0) {
      scene.actions([
        { label: 'Ask for some cosmetics (Add <<$func(\'money\', \'string_debt\', 1200)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_add', 'workDolg', 1200);
    ((s as any).mc_inventory ?? {})['cosmetics'] = (((s as any).mc_inventory ?? {})['cosmetics'] ?? 0) + (20);
  }, goto: ['city_sauna', 'saunaroom'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['shampoo'] === 0) {
      scene.actions([
        { label: 'Ask for some shampoo (Add <<$func(\'money\', \'string_debt\', 400)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_add', 'workDolg', 400);
    ((s as any).mc_inventory ?? {})['shampoo'] = (((s as any).mc_inventory ?? {})['shampoo'] ?? 0) + (20);
  }, goto: ['city_sauna', 'saunaroom'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['razor'] === 0) {
      scene.actions([
        { label: 'Ask for some razors (Add <<$func(\'money\', \'string_debt\', 700)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_add', 'workDolg', 700);
    ((s as any).mc_inventory ?? {})['razor'] = (((s as any).mc_inventory ?? {})['razor'] ?? 0) + (20);
  }, goto: ['city_sauna', 'saunaroom'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['tampons'] === 0) {
      scene.actions([
        { label: 'Ask for some tampons (Add <<$func(\'money\', \'string_debt\', 400)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_add', 'workDolg', 400);
    ((s as any).mc_inventory ?? {})['tampons'] = (((s as any).mc_inventory ?? {})['tampons'] ?? 0) + (20);
  }, goto: ['city_sauna', 'saunaroom'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['deodorant'] === 0) {
      scene.actions([
        { label: 'Ask for some deodorant (Add <<$func(\'money\', \'string_debt\', 200)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_add', 'workDolg', 200);
    ((s as any).mc_inventory ?? {})['deodorant'] = (((s as any).mc_inventory ?? {})['deodorant'] ?? 0) + (20);
  }, goto: ['city_sauna', 'saunaroom'] },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['vitamins'] === 0) {
      scene.actions([
        { label: 'Ask for some vitamins (Add <<$func(\'money\', \'string_debt\', 150)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'money', 'debt_add', 'workDolg', 150);
    ((s as any).mc_inventory ?? {})['vitamins'] = (((s as any).mc_inventory ?? {})['vitamins'] ?? 0) + (30);
  }, goto: ['city_sauna', 'saunaroom'] },
      ]);
    }
    scene.actions([
      { label: 'Have some food (0:30) (Add <<$func(\'money\', \'string_debt\', 200)>> to debt)', handler: (st: GameState) => {
    qspCall(s, 'food', 'medium_meal');
    qspCall(s, 'money', 'debt_add', 'workDolg', 200);
  } },
      { label: 'Drink some water (0:05)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water');
  } },
    ]);
  } else {
    if (((s as any).saunaWhore ?? 0) >= 1) {
      qspCall(s, 'core_library', 'kitchen', 'hotel');
      scene.actions([
        { label: 'Buy some food (0:30) [+$func(\'money\', \'get_cost_string\', 200)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'food', 'medium_meal');
      qspCall(s, 'money', 'pay', 200);
    }
  } },
      ]);
    }
  }
  qspCall(s, 'library_functions', 'set_read_porn_act');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    // TODO-QSP: act 'Masturbate': gt 'selfplay', 'start'
  }
  if (((s as any).pcs_sleep ?? 0) <= 80) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
    }
    if (((s as any).succubusQW ?? 0) === 2) {
      scene.actions([
        { label: '<<$sleep_txt>>', goto: ['pre_sleep', 'start'] },
      ]);
    } else {
      if (((s as any).workDolg ?? 0) <= 0  &&  qspFunc(s, 'money', 'can_afford', 850) === 0) {
        scene.text('<br>You don\'t have enough money to sleep here tonight.');
      } else {
        scene.actions([
          { label: '<<$sleep_txt>>', handler: (st: GameState) => {
    qspCall(s, 'shortgs', 'autosave');
    if (((s as any).workDolg ?? 0) > 0) {
      qspCall(s, 'money', 'debt_add', 'workDolg', 850);
    } else {
      qspCall(s, 'money', 'pay', 850);
    }
  }, goto: ['pre_sleep', 'start'] },
        ]);
      }
    }
  }
  scene.actions([
    { label: '<b>Exit to the sauna</b>', goto: ['city_saunawhore', 'saunawork'] },
  ]);
  scene.build();
}

function enterSaunafitness(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/exercises/push_nude.mp4');
  qspCall(s, 'exercise', 'tier2', 30, 'stren');
  scene.text('You do push-ups for 30 minutes, improving your strength.');
  qspCall(s, 'exercise', 'pushups_inner');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sauna2':
      enterSauna2(s, scene);
      break;
    case 'saunaroom':
      enterSaunaroom(s, scene);
      break;
    case 'saunafitness':
      enterSaunafitness(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_sauna: LocationDef = {
  name: 'city_sauna',
  title: 'Sauna',
  region: 'city',
  locationType: 'private',
  description: ['A luxurious high quality public sauna built a long time ago. The sauna houses separate changing rooms and shower facilities for men and women.'],
  enter: enter,
};
