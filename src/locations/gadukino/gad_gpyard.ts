import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  qspCall(s, 'core_library', 'setloc', 'gad_gpyard', 'start');
  (s as any).location_type = 'public_outdoors';
  (s as any).locclass = undefined;
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'gadukino_event', 'sound');
  scene.text('<center><h4>Your grandparents\' yard</h4></center>');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/gadukino/gp_dacha/dvor.jpg');
    } else {
      scene.img('images/locations/gadukino/gp_dacha/dvor_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/village/dvor_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/village/dvor_winter_night.jpg');
    }
  }
  scene.text('A fenced yard behind your grandparents\' house. The yard contains a small barn, garden, root cellar, and banya where you can bathe.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('You are naked and can only go into your grandparent\'s house to get dressed or go to the banya.');
    scene.actions([
      { label: 'Enter your grandparents\' house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gphouse', 'main'] },
      { label: 'Enter the banya', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbath', 'start'] },
    ]);
  } else {
    if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 1  ||  (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10)) {
      scene.text('In the yard there are several <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_gpyard\u0027, \u0027chickens\u0027); return false;">chickens</a> running around.');
    }
    if (qspFunc(s, 'homes_properties', 'is_current_home')  &&  ((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
      if (((s as any).status ?? 0)?.['dog'] === '') {
        qspGoto(s, 'pet_dog', 'name');
      } else {
        if (((s as any).rex ?? 0)?.['gadukino_day'] !== ((s as any).daystart ?? 0)) {
          ((s as any).rex = (s as any).rex ?? {})['relationship'] = ((s as any).rex['relationship'] ?? 0) + (2);
          ((s as any).rex = (s as any).rex ?? {})['gadukino_day'] = ((s as any).daystart ?? 0);
        }
        scene.text(`<br><a href="#" onclick="window.__gameStore.getState().doGoto(/u0027pet_dog/u0027, /u0027gadukino/u0027); return false;">${(((s as any).rex ?? 0)?.['name'] ?? '')}</a> is running around in the garden.`);
      }
    }
  }
  if (((s as any).MiraVars ?? 0)?.['guest'] === 1  ||  qspFunc(s, 'miroslava_schedule', 'is_here')) {
    scene.text('Your friend <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027miroslava\u0027, \u0027start\u0027); return false;">Mira</a> stands next to you.');
  }
  qspCall(s, 'gp_zlatek', 'check_for_chores', 'yard');
  if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 1  ||  (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10)) {
    scene.actions([
      { label: 'Look at your grandparents\' chickens', goto: ['gad_gpyard', 'chickens'] },
    ]);
  }
  if (qspFunc(s, 'miroslava_schedule', 'is_here', 'gp')  &&  ((s as any).MiraVars ?? 0)?.['guest'] === 0) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You went out into the yard and noticed Mira standing there.');
    scene.text(`"Oh, ${((s as any).pcs_nickname ?? '')}, hi. I hope you don't mind me visiting. I was bored being home alone," she said, smiling.`);
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['guestday'] = ((s as any).daystart ?? 0);
    ((s as any).MiraVars = (s as any).MiraVars ?? {})['guest'] = 1;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['gad_gpyard', 'start'] },
    ]);
  }
  if (qspFunc(s, 'clothing', 'lost_clothes_here', 'gad_gpyard')) {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([
        { label: 'Get dressed', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_gpyard', 1);
    qspCall(st, 'underwear', 'wear');
    qspGoto(st, 'gad_gpyard', 'start');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Pick up your clothes', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_gpyard');
    scene.text('You picked up your clothes.');
    qspGoto(st, 'gad_gpyard', 'start');
  } },
      ]);
    }
  }
  scene.actions([
    { label: '<b>Leave and go into the village</b>', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspGoto(st, 'gadukino', '');
    } else {
      alert('<b><font color = red>You need to get dressed.</font></b>');
      qspGoto(st, 'gad_gpyard', 'start');
    }
  } },
    { label: 'Enter your grandparents\' house', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gphouse', 'main'] },
    { label: 'Enter the banya', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbath', 'start'] },
    { label: 'Go to the barn', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpbarn', ''] },
    { label: 'Go to the root cellar', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'root_cellar'] },
    { label: 'Go to the garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'garden'] },
  ]);
  scene.build();
}

function enterRootCellar(s: GameState, scene: SceneBuilder): void {
  (s as any).loc_arg = 'root_cellar';
  scene.text('<center><h4>Root Cellar</h4></center>');
  scene.img('images/locations/gadukino/gp_dacha/root_cellar.jpg');
  if (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) >= 20) {
    scene.text('Your grandparents\' root cellar is full.');
  } else {
    if (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) > 0) {
      scene.text('Your grandparents\' root cellar is partially full.');
    } else {
      scene.text('Your grandparents\' root cellar is empty.');
    }
  }
  scene.text('Even though your grandparents allow you to store extra mushrooms and berries you pick, they reserve the right to use them, too, so you aren\'t surprised if any go missing.');
  if (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) > 0) {
    (s as any).temp_text = 'You currently are storing ';
    if (((s as any).boletus_stored ?? 0) > 0) {
      (s as any).temp_text = ((s as any).temp_text ?? 0) + ('<b>' + ((s as any).boletus_stored ?? 0) + '</b> kg of raw mushrooms');
      if (((s as any).bilberry_stored ?? 0) > 0) {
        (s as any).temp_text = ((s as any).temp_text ?? '') + ' and ';
      }
    }
    if (((s as any).bilberry_stored ?? 0) > 0) {
      (s as any).temp_text = ((s as any).temp_text ?? '') + '<b>' + ((s as any).bilberry_stored ?? 0) + '</b> kg of raw berries';
    }
    (s as any).temp_text = ((s as any).temp_text ?? 0) + ('.');
    scene.text(`${((s as any).temp_text ?? '')}`);
    (s as any).temp_text = undefined;
  }
  if (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) >= 20) {
    scene.text('You can\'t store anymore mushrooms and berries.');
  } else {
    scene.text(`You can still store <b>${20 - ((s as any).boletus_stored ?? '') - ((s as any).bilberry_stored ?? '')}</b> kg of mushrooms and berries.`);
  }
  if (((s as any).fish_stored ?? 0) > 0) {
    scene.text(`You currently are storing <b>${((s as any).fish_stored ?? '')}</b> kg of preserved fish.`);
  }
  if (((s as any).fish_stored ?? 0) >= 10) {
    scene.text('You can\'t store anymore preserved fish.');
  } else {
    scene.text(`You can still store <b>${10 - ((s as any).fish_stored ?? '')}</b> kg of preserved fish.`);
  }
  if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) >= 5) {
    scene.text('Your basket is full and you cannot carry more.');
  } else {
    if (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) > 0) {
      scene.text('Your basket is partially full.');
    } else {
      scene.text('Your basket is empty.');
    }
  }
  if (((s as any).boletus ?? 0) > 0) {
    scene.text(`You currently are carrying <b>${((s as any).boletus ?? '')}</b> kg of raw mushrooms.`);
  }
  if (((s as any).boletus_cooked ?? 0) > 0) {
    scene.text(`You currently are carrying <b>${((s as any).boletus_cooked ?? '')}</b> kg of cooked mushrooms.`);
  }
  if (((s as any).bilberry ?? 0) > 0) {
    scene.text(`You currently are carrying <b>${((s as any).bilberry ?? '')}</b> kg of raw berries.`);
  }
  if ((((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) < 20)  &&  (((s as any).boletus ?? 0) > 0  ||  ((s as any).bilberry ?? 0) > 0)) {
    if (((s as any).boletus ?? 0) > 0) {
      scene.actions([
        { label: 'Store 1 kg of raw mushrooms', handler: (st: GameState) => {
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (1);
    (st as any).boletus = ((st as any).boletus ?? 0) - (1);
    qspGoto(st, 'gad_gpyard', 'root_cellar');
  } },
      ]);
    }
    if (((s as any).bilberry ?? 0) > 0) {
      scene.actions([
        { label: 'Store 1 kg of raw berries', handler: (st: GameState) => {
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (1);
    (st as any).bilberry = ((st as any).bilberry ?? 0) - (1);
    qspGoto(st, 'gad_gpyard', 'root_cellar');
  } },
      ]);
    }
    scene.actions([
      { label: 'Store as many raw mushrooms and berries that will fit (Max 20 kgs):', handler: (st: GameState) => {
    do {
      if (((st as any).boletus ?? 0) > 0  &&  ((st as any).boletus_stored ?? 0) + ((st as any).bilberry_stored ?? 0) < 20) {
        (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (1);
        (st as any).boletus = ((st as any).boletus ?? 0) - (1);
      }
      if (((st as any).bilberry ?? 0) > 0  &&  ((st as any).boletus_stored ?? 0) + ((st as any).bilberry_stored ?? 0) < 20) {
        (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (1);
        (st as any).bilberry = ((st as any).bilberry ?? 0) - (1);
      }
      qspGoto(st, 'gad_gpyard', 'root_cellar');
    } while (((st as any).boletus_stored ?? 0) + ((st as any).bilberry_stored ?? 0) < 20  &&  ((st as any).boletus ?? 0) + ((st as any).bilberry ?? 0) > 0);
  } },
    ]);
  }
  if (((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) <= 10) {
    if (((s as any).mc_inventory ?? 0)?.['mushrooms'] > 0  &&  ((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) <= 10) {
      scene.actions([
        { label: 'Store 10 kg of bought mushrooms', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mushrooms'] = ((st as any).mc_inventory['mushrooms'] ?? 0) - (1);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) + (10);
    qspGoto(st, 'gad_gpyard', 'root_cellar');
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['berries'] > 0  &&  ((s as any).boletus_stored ?? 0) + ((s as any).bilberry_stored ?? 0) <= 10) {
      scene.actions([
        { label: 'Store 10 kg of bought berries', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['berries'] = ((st as any).mc_inventory['berries'] ?? 0) - (1);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) + (10);
    qspGoto(st, 'gad_gpyard', 'root_cellar');
  } },
      ]);
    }
  }
  if ((((s as any).boletus_stored ?? 0) > 0  ||  ((s as any).bilberry_stored ?? 0) > 0)  &&  (((s as any).boletus ?? 0) + ((s as any).boletus_cooked ?? 0) + ((s as any).bilberry ?? 0) < 5)) {
    if ((((s as any).boletus_stored ?? 0) > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_can_mushrooms'] !== 1)  ||  (((s as any).boletus_stored ?? 0) > 5  &&  ((s as any).grandmaQW ?? 0)?.['chore_can_mushrooms'] === 1)) {
      scene.actions([
        { label: 'Retrieve 1 kg of raw mushrooms', handler: (st: GameState) => {
    (st as any).boletus = ((st as any).boletus ?? 0) + (1);
    (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) - (1);
    qspGoto(st, 'gad_gpyard', 'root_cellar');
  } },
      ]);
    }
    if ((((s as any).bilberry_stored ?? 0) > 0  &&  ((s as any).grandmaQW ?? 0)?.['chore_can_berries'] !== 1)  ||  (((s as any).bilberry_stored ?? 0) > 5  &&  ((s as any).grandmaQW ?? 0)?.['chore_can_berries'] === 1)) {
      scene.actions([
        { label: 'Retrieve 1 kg of raw berries', handler: (st: GameState) => {
    (st as any).bilberry = ((st as any).bilberry ?? 0) + (1);
    (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) - (1);
    qspGoto(st, 'gad_gpyard', 'root_cellar');
  } },
      ]);
    }
    scene.actions([
      { label: 'Retrieve as many raw mushrooms and berries as you can carry (Max 5 kgs)', handler: (st: GameState) => {
    while (true) {
      if (((st as any).boletus_stored ?? 0) > 0) {
        (st as any).boletus = ((st as any).boletus ?? 0) + (1);
        (st as any).boletus_stored = ((st as any).boletus_stored ?? 0) - (1);
        if (((st as any).boletus ?? 0) + ((st as any).boletus_cooked ?? 0) + ((st as any).bilberry ?? 0) < 5) {
          break;
        }
      }
      if (((st as any).bilberry_stored ?? 0) > 0) {
        (st as any).bilberry = ((st as any).bilberry ?? 0) + (1);
        (st as any).bilberry_stored = ((st as any).bilberry_stored ?? 0) - (1);
        if (((st as any).boletus ?? 0) + ((st as any).boletus_cooked ?? 0) + ((st as any).bilberry ?? 0) < 5) {
          break;
        }
      }
      qspGoto(st, 'gad_gpyard', 'root_cellar');
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Go back to the yard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'start'] },
  ]);
  scene.build();
}

function enterChickens(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/chickens1.jpg');
  scene.text('Ordinary chickens clucking about their pen.');
  qspCall(s, 'gp_elene', 'check_for_chores', 'chickens');
  scene.actions([
    { label: 'Leave', goto: ['gad_gpyard', 'start'] },
  ]);
  scene.build();
}

function enterGarden(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'secluded';
  qspCall(s, 'core_library', 'setloc', 'gad_gpyard', 'garden');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'miroslava_schedule', '');
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21) {
      scene.img('images/locations/gadukino/village/garden.jpg');
    } else {
      scene.img('images/locations/gadukino/village/garden_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      scene.img('images/locations/gadukino/village/garden_winter.jpg');
    } else {
      scene.img('images/locations/gadukino/village/garden_winter_night.jpg');
    }
  }
  scene.text('A large vegetable garden that your grandparents are very proud of.');
  if (((s as any).month ?? 0) >= 4  &&  ((s as any).month ?? 0) <= 10) {
    scene.text('There is also a small land plot is dedicated to growing <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_gpyard\u0027, \u0027strawberry\u0027); return false;">strawberries</a> and a <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027gad_gpyard\u0027, \u0027fruit_garden\u0027); return false;">fruit tree orchard</a>.');
  } else {
    scene.text('There is also a small plot of land dedicated to growing strawberries and a small fruit tree orchard, but they are not in season right now.');
  }
  qspCall(s, 'gp_elene', 'check_for_chores', 'garden');
  scene.actions([
    { label: 'Go back to the yard', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'start'] },
  ]);
  scene.build();
}

function enterStrawberry(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpyard', 'strawberry');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  if (((s as any).month ?? 0) === 6  ||  ((s as any).month ?? 0) === 7) {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21) {
      scene.img('images/locations/gadukino/gp_dacha/strawberry1.jpg');
    } else {
      scene.img('images/locations/gadukino/gp_dacha/strawberry_night.jpg');
    }
  } else {
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21) {
      scene.img('images/locations/gadukino/gp_dacha/strawberry2.jpg');
    } else {
      scene.img('images/locations/gadukino/gp_dacha/strawberry_night.jpg');
    }
  }
  if (((s as any).month ?? 0) >= 7  &&  ((s as any).month ?? 0) <= 9) {
    scene.text('It\'s strawberry season, you approach the field where the strawberries grow, searching for some ripe strawberries.');
  } else {
    scene.text('You approach the field where the strawberries grow, but it\'s not strawberry season right now.');
  }
  if (((s as any).month ?? 0) >= 7  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).strawberriesday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat some strawberries (1:00)', handler: (st: GameState) => {
    (st as any).strawberriesday = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (40);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (15);
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/eat_strawberries.jpg');
    scene.text('You spend some time wandering through the plot searching for ripe strawberries. You walk along, picking off the ones that you find and popping them in your mouth.');
    scene.actions([
      { label: 'Finish', goto: ['gad_gpyard', 'strawberry'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'gp_elene', 'check_for_chores', 'strawberry');
  scene.actions([
    { label: 'Go back to the garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'garden'] },
  ]);
  scene.build();
}

function enterFruitGarden(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gad_gpyard', 'fruit_garden');
  qspCall(s, 'gadukino_event', 'sound');
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) < 21) {
    scene.img('images/locations/gadukino/gp_dacha/fruit_garden.jpg');
  } else {
    scene.img('images/locations/gadukino/gp_dacha/fruit_garden_night.jpg');
  }
  scene.text('There are apples and pears growing in the fruit orchard.');
  if (((s as any).month ?? 0) >= 7  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).fruitday ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat the fruit (1:00)', handler: (st: GameState) => {
    (st as any).fruitday = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    (st as any).pcs_energy = ((st as any).pcs_energy ?? 0) + (30);
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    (st as any).pcs_breath = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/village/eat_fruit.jpg');
    scene.text('You spend some time wandering around the orchard munching on the ripe fruit.');
    scene.actions([
      { label: 'Finish', goto: ['gad_gpyard', 'fruit_garden'] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'gp_elene', 'check_for_chores', 'fruit_garden');
  scene.actions([
    { label: 'Go back to the garden', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['gad_gpyard', 'garden'] },
  ]);
  scene.build();
}

function enterCikl(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['check'] = 0;
  (s as any).mushroom_pickers = 0;
  (s as any).forestpicnic = 0;
  if (((s as any).gadstay ?? 0) === 1  &&  (!((s as any).lost_girl ?? 0))) {
    if (((s as any).daystart ?? 0) > (((s as any).grandmaQW ?? 0)?.['last_day_helped'] + 3)  &&  ((s as any).daystart ?? 0) > (((s as any).grandpaQW ?? 0)?.['last_day_helped'] + 3)) {
      if ((((s as any).daystart ?? 0) - ((s as any).grandmaQW ?? 0)?.['last_day_helped']) <= (((s as any).daystart ?? 0) - ((s as any).grandpaQW ?? 0)?.['last_day_helped'])) {
        scene.text(`You haven't helped your grandparents with any chores in ${((s as any).daystart ?? '') - (((s as any).grandmaQW ?? {})?.['last_day_helped'] ?? 0)} days. You should help out more often to stay on your grandparents' good side.`);
      } else {
        scene.text(`You haven't helped your grandparents with any chores in ${((s as any).daystart ?? '') - (((s as any).grandpaQW ?? {})?.['last_day_helped'] ?? 0)} days. You should help out more often to stay on your grandparents' good side.`);
      }
      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['help_amount'] = ((s as any).grandmaQW['help_amount'] ?? 0) - (1);
    }
  }
  if (((s as any).grandmaQW ?? 0)?.['chore_clean_floor'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_clean_floor'] === 2) {
    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_clean_floor'] = 0;
    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
  } else {
    if (((s as any).grandmaQW ?? 0)?.['chore_wash_clothes'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_wash_clothes'] === 2) {
      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_wash_clothes'] = 0;
      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
    } else {
      if (((s as any).grandmaQW ?? 0)?.['chore_milk_cow'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_milk_cow'] === 2) {
        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_milk_cow'] = 0;
        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
      } else {
        if (((s as any).grandmaQW ?? 0)?.['chore_groceries'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_groceries'] === 2) {
          ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_groceries'] = 0;
          ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
        } else {
          if (((s as any).grandmaQW ?? 0)?.['chore_can_mushrooms'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_can_mushrooms'] === 2) {
            ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_can_mushrooms'] = 0;
            ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
          } else {
            if (((s as any).grandmaQW ?? 0)?.['chore_can_berries'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_can_berries'] === 2) {
              ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_can_berries'] = 0;
              ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
            } else {
              if (((s as any).grandmaQW ?? 0)?.['chore_can_veggies'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_can_veggies'] === 2) {
                ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_can_veggies'] = 0;
                ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
              } else {
                if (((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_feed_chickens'] === 2) {
                  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_feed_chickens'] = 0;
                  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                } else {
                  if (((s as any).grandmaQW ?? 0)?.['chore_work_in_garden'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_work_in_garden'] === 2) {
                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_work_in_garden'] = 0;
                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                  } else {
                    if (((s as any).grandmaQW ?? 0)?.['chore_water_garden'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_water_garden'] === 2) {
                      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_water_garden'] = 0;
                      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                    } else {
                      if (((s as any).grandmaQW ?? 0)?.['chore_collect_strawberries'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_collect_strawberries'] === 2) {
                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_collect_strawberries'] = 0;
                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                      } else {
                        if (((s as any).grandmaQW ?? 0)?.['chore_collect_fruit'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_collect_fruit'] === 2) {
                          ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_collect_fruit'] = 0;
                          ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                        } else {
                          if (((s as any).grandmaQW ?? 0)?.['chore_harvest_garden'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_harvest_garden'] === 2) {
                            ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_harvest_garden'] = 0;
                            ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                          } else {
                            if (((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] === 2) {
                              ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 2;
                            } else {
                              if (((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_gather_mushrooms'] === 2  &&  ((s as any).grandmaQW ?? 0)?.['disappointment'] === 2) {
                                ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_mushrooms'] = 0;
                                ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_mushroom_quantity'] = 0;
                                ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                              } else {
                                if (((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] === 2) {
                                  ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 2;
                                } else {
                                  if (((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_gather_berries'] === 2  &&  ((s as any).grandmaQW ?? 0)?.['disappointment'] === 2) {
                                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_berries'] = 0;
                                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_berry_quantity'] = 0;
                                    ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
                                  } else {
                                    if (((s as any).grandmaQW ?? 0)?.['chore_gather_both'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_gather_both'] === 2) {
                                      ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 2;
                                    } else {
                                      if (((s as any).grandmaQW ?? 0)?.['chore_gather_both'] === 1  ||  ((s as any).grandmaQW ?? 0)?.['chore_gather_both'] === 2  &&  ((s as any).grandmaQW ?? 0)?.['disappointment'] === 2) {
                                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_gather_both'] = 0;
                                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_mushroom_quantity'] = 0;
                                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['chore_berry_quantity'] = 0;
                                        ((s as any).grandmaQW = (s as any).grandmaQW ?? {})['disappointment'] = 1;
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
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_fetch_firewood'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_fetch_firewood'] === 2) {
    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_fetch_firewood'] = 0;
    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
  } else {
    if (((s as any).grandpaQW ?? 0)?.['chore_feed_horse'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_feed_horse'] === 2) {
      ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_horse'] = 0;
      ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
    } else {
      if (((s as any).grandpaQW ?? 0)?.['chore_feed_cow'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_feed_cow'] === 2) {
        ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_cow'] = 0;
        ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
      } else {
        if (((s as any).grandpaQW ?? 0)?.['chore_clean_yard'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_clean_yard'] === 2) {
          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_clean_yard'] = 0;
          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
        } else {
          if (((s as any).grandpaQW ?? 0)?.['chore_feed_boar'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_feed_boar'] === 2) {
            ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_feed_boar'] = 0;
            ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
          } else {
            if (((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_bathe_horse'] === 2) {
              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bathe_horse'] = 0;
              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bathe_horse_prog'] = 0;
              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
            } else {
              if (((s as any).grandpaQW ?? 0)?.['chore_brush_horse'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_brush_horse'] === 2) {
                ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_brush_horse'] = 0;
                ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
              } else {
                if (((s as any).grandpaQW ?? 0)?.['chore_lead_horse_to_field'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_lead_horse_to_field'] === 2) {
                  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_lead_horse_to_field'] = 0;
                  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
                } else {
                  if (((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_herd_cattle'] === 2) {
                    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_herd_cattle'] = 0;
                    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
                  } else {
                    if (((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_lead_cow_to_field'] === 2) {
                      ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_lead_cow_to_field'] = 0;
                      ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
                    } else {
                      if (((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 2) {
                        ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 2;
                      } else {
                        if (((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 2  &&  ((s as any).grandpaQW ?? 0)?.['disappointment'] === 2) {
                          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_mushrooms'] = 0;
                          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_mushroom_quantity'] = 0;
                          ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
                        } else {
                          if (((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] === 2) {
                            ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 2;
                          } else {
                            if (((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_gather_berries'] === 2  &&  ((s as any).grandpaQW ?? 0)?.['disappointment'] === 2) {
                              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_berries'] = 0;
                              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_berry_quantity'] = 0;
                              ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
                            } else {
                              if (((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 2) {
                                ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 2;
                              } else {
                                if (((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 2  &&  ((s as any).grandpaQW ?? 0)?.['disappointment'] === 2) {
                                  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_gather_both'] = 0;
                                  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_mushroom_quantity'] = 0;
                                  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_berry_quantity'] = 0;
                                  ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
                                } else {
                                  if (((s as any).grandpaQW ?? 0)?.['chore_bale_hay'] === 1  ||  ((s as any).grandpaQW ?? 0)?.['chore_bale_hay'] === 2) {
                                    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['chore_bale_hay'] = 0;
                                    ((s as any).grandpaQW = (s as any).grandpaQW ?? {})['disappointment'] = 1;
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
            }
          }
        }
      }
    }
  }
  if (((s as any).boletus_stored ?? 0) > 0) {
    (s as any).boletus_stored = ((s as any).boletus_stored ?? 0) - ((Math.floor(Math.random() * 2) + 0));
  }
  if (((s as any).bilberry_stored ?? 0) > 0) {
    (s as any).bilberry_stored = ((s as any).bilberry_stored ?? 0) - ((Math.floor(Math.random() * 2) + 0));
  }
  if (((s as any).boletus_stored ?? 0) < 0) {
    (s as any).boletus_stored = 0;
  }
  if (((s as any).bilberry_stored ?? 0) < 0) {
    (s as any).bilberry_stored = 0;
  }
  (s as any).catout = undefined;
  (s as any).feedcat = undefined;
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'root_cellar':
      enterRootCellar(s, scene);
      break;
    case 'chickens':
      enterChickens(s, scene);
      break;
    case 'garden':
      enterGarden(s, scene);
      break;
    case 'strawberry':
      enterStrawberry(s, scene);
      break;
    case 'fruit_garden':
      enterFruitGarden(s, scene);
      break;
    case 'cikl':
      enterCikl(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gad_gpyard: LocationDef = {
  name: 'gad_gpyard',
  title: '<center><h4>Your grandparents\' yard</h4></center>',
  region: 'gadukino',
  locationType: 'secluded',
  enter: enter,
};
