import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterYfoyer(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_1', 'yfoyer');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  if (((s as any).frost ?? 0) > 0) {
    (s as any).frost = 0;
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Foyer</b></center>');
  if (((s as any).ymanrem ?? 0)[3] === 3) {
    scene.img('images/locations/city/suburb/mansion/y_foyer.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[3] === 2) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  qspCall(s, 'courtletter', '');
  if (((s as any).ymanrem ?? 0)[3] >= 1) {
    scene.text('The main hall of Matryona Mansion. You can visit the different rooms in the mansion from here.');
    scene.text('There\'s a <a href="exec:gt \'mirror\', \'start\'">mirror</a> hanging on the wall.');
    if (((s as any).mc_inventory ?? 0)?.['umbrella'] > 0) {
      scene.text('There\'s an umbrella hanging on a hook by the door.');
    }
    scene.actions([
      { label: 'Go to your bedroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'ybedroom'] },
      { label: 'Go to your bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'ybathroom'] },
      { label: 'Go to your kitchen', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'ykitchen'] },
      { label: 'Go to your living room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'yliving'] },
      { label: 'Go to your lounge', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'ylounge'] },
      { label: 'Go to your library', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'ylibrary'] },
      { label: 'Go to your office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'yoffice'] },
      { label: 'Go to your nursery', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_2', 'ynursery'] },
      { label: 'Go to your gym', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_3', 'ygym'] },
    ]);
  }
  if (((s as any).bassMansion ?? 0) === 1) {
    // TODO-QSP: act 'Go to your pool': minut += 1
    scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_3', 'ypool'] }]);
  }
  if (((s as any).banaMansion ?? 0) >= 1) {
    // TODO-QSP: act 'Go to your sauna': minut += 1
    scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_3', 'ysauna'] }]);
  }
  if (qspFunc(s, 'homes_properties', 'is_current_home') === 0) {
    scene.actions([
      { label: 'Set this apartment as your main home', handler: (st: GameState) => {
    qspCall(st, 'homes_properties', 'set_home');
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
    ]);
  } else {
    if (((s as any).status ?? 0)?.['dog'] !== 'blocked'  &&  ((s as any).menu_off ?? 0) === 0  &&  ((s as any).rex ?? 0)?.['owned'] === 1) {
      if (((s as any).rex ?? 0)?.['status'] === 0) {
        scene.actions([{ label: 'Continue', goto: ['pet_dog', 'name'] }]);
      } else {
        if (((s as any).hour ?? 0) > 5) {
          // TODO-QSP: dynamic text: <br>Your dog <a href="exec: gt 'pet_dog', 'start'"><<$rex['name']>></a> is lying...
          scene.text(`<br>Your dog <a href="exec: gt 'pet_dog', 'start'">${((s as any).rex ?? 0)?.['name']}</a> is lying on the floor.<br>`);
        } else {
          if (((s as any).hour ?? 0) < 6) {
            // TODO-QSP: dynamic text: <br><<$rex['name']>> is sleeping in his dog basket.<br>
            scene.text(`<br>${((s as any).rex ?? 0)?.['name']} is sleeping in his dog basket.<br>`);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Walk outside', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['city_mansion_entrance', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['city_mansion_residence_1', 'yfoyer'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterYbedroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_1', 'ybedroom');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bedroom</b></center>');
  if (((s as any).ymanrem ?? 0)[4] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_bedroom.jpg');
    scene.text('<center>Your large bedroom with all the necessities that a modern bedroom has.</center>');
  } else {
    if (((s as any).ymanrem ?? 0)[4] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'library_functions', 'set_read_porn_act');
  if (((s as any).pcs_horny ?? 0) >= 50) {
    scene.actions([
      { label: 'Masturbate', goto: ['selfplay', 'start'] },
    ]);
  }
  if (((s as any).ymanrem ?? 0)[4] === 2) {
    scene.text('It\'s a bright and beautiful room, with a large <a href="exec:gt \'bed\', \'start\'">continental bed</a>.');
    scene.text('There\'s a table and a <a href="exec:gt \'mirror\', \'start\'">mirror</a> placed in one of the corners.');
    if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
      scene.text('You have hidden your porn magazine in your nightstand.');
    }
    scene.text('On one side of the room is the entrance to a walk-in <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a>.');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
    { label: 'Relax on your bed', goto: ['bed', 'start'] },
  ]);
  scene.build();
}

function enterYbathroom(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_1', 'ybathroom');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Bathroom</b></center>');
  if (((s as any).ymanrem ?? 0)[5] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_bathroom.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[5] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[5] === 2) {
    // TODO-QSP: dynamic text: The ornate room holds a shower, toilet, sink, <a href="exec:gt 'mirror','start'"...
    scene.text('The ornate room holds a shower, toilet, sink, <a href="exec:gt \'mirror\',\'start\'">mirror</a> where you can \' + iif(pcs_hairbsh < 1, \'<a href="exec:gt \'mirror\',\'brush\'">brush</a>\', \'brush\') + \' your hair, and even a bath tub.');
    qspCall(s, 'selfplay', 'suction_dildo');
    qspCall(s, 'din_van', 'private');
    qspCall(s, 'din_van', 'misery_2');
    qspCall(s, 'home_events', 'bathroom');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enterYkitchen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_mansion_residence_1', 'ykitchen');
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Kitchen</b></center>');
  if (((s as any).ymanrem ?? 0)[6] === 2) {
    scene.img('images/locations/city/suburb/mansion/y_kitchen.jpg');
  } else {
    if (((s as any).ymanrem ?? 0)[6] === 1) {
      scene.img('images/locations/city/suburb/mansion/i_finished.jpg');
    } else {
      scene.img('images/locations/city/suburb/mansion/i_unfinished.jpg');
    }
  }
  if (((s as any).ymanrem ?? 0)[6] === 2) {
    scene.text('A well stocked kitchen containing all the necessities to make whatever meal you please.');
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
      // TODO-QSP: dynamic text: You have <b><<mc_inventory['dish_plates']>></b> clean plates left.
      scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['dish_plates']}</b> clean plates left.`);
    } else {
      scene.text('<center><b>You don\'t have any clean plates left.</b></center>');
    }
    if (((s as any).dirttarelka ?? 0) > 0) {
      // TODO-QSP: dynamic text: There are <b><<dirttarelka>></b> dirty dishes in the sink. <a href="exec:gs 'kit...
      scene.text(`There are <b>${((s as any).dirttarelka ?? 0)}</b> dirty dishes in the sink. <a href="exec:gs 'kit_din', 'dirtarm'">Wash the dishes</a>.`);
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
      // TODO-QSP: 'Under the sink is some dishwashing detergent, which is enough for <b><<mc_inventory[''dish_soap'']>...
    } else {
      scene.text('<center><b>You have nothing to wash dishes with. You should buy some detergent.</b></center>');
    }
    if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
      if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
      }
      if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
      }
      // TODO-QSP: dynamic text: There's enough food for <b><<mc_inventory['food_basic']>></b> ' + iif(mc_invento...
      scene.text(`There's enough food for <b>${((s as any).mc_inventory ?? 0)?.['food_basic']}</b> ' + iif(mc_inventory['food_basic'] = 1, 'serving', 'servings') + '. ${((s as any).edagot ?? 0)}`);
    } else {
      if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
        scene.text('<center><b>The fridge is empty. You have nothing to eat.</b></center>');
      }
    }
    qspCall(s, 'kit_din', 'edahota');
    qspCall(s, 'lover_living', 'kitchen');
    qspCall(s, 'core_library', 'kitchen', 'full');
  }
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['city_mansion_residence_1', 'yfoyer'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'yfoyer':
      enterYfoyer(s, scene);
      break;
    case 'ybedroom':
      enterYbedroom(s, scene);
      break;
    case 'ybathroom':
      enterYbathroom(s, scene);
      break;
    case 'ykitchen':
      enterYkitchen(s, scene);
      break;
    default:
      enterYfoyer(s, scene);
      break;
  }
}

export const city_mansion_residence_1: LocationDef = {
  name: 'city_mansion_residence_1',
  title: 'Foyer',
  region: 'city',
  locationType: 'private',
  locclass: 'kitr',
  description: ['The main hall of Matryona Mansion. You can visit the different rooms in the mansion from here.'],
  enter: enter,
};
