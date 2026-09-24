import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dachain', 'start');
  (s as any).location_type = 'private';
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'music_actions', 'clear_restrictions');
  scene.text('<center><b>Cottage</b></center>');
  if (qspFunc(s, 'homes_properties', 'is_property_renovated')) {
    scene.img('images/locations/suburban/cottage/dacharoom2.jpg');
  } else {
    scene.img('images/locations/suburban/cottage/dacharoom1.jpg');
  }
  scene.text('Your favorite summer residence.');
  scene.text('There is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027bed/u0027, /u0027start/u0027); return false;">bed</a> against one wall. Next to it is a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027wardrobe/u0027, /u0027start/u0027); return false;">wardrobe</a> (where you can choose outfits and organize your clothing). On the other side of the bed is a table and a <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027mirror/u0027, /u0027start/u0027); return false;">mirror</a>');
  scene.text('There is a sofa in front of the fireplace, a kitchen alcove opposite the bed and the door to the bathroom next to that.');
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    (s as any).stol = 'an old wooden <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stol/u0027, /u0027start/u0027); return false;">table</a>';
  }
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 1) {
    (s as any).stol = 'a new <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027stol/u0027, /u0027start/u0027); return false;">table</a>';
  }
  // TODO-QSP: dynamic text: In front of the window there is <<$stol>>.
  scene.text(`In front of the window there is ${((s as any).stol ?? '')}.`);
  if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
    qspCall(s, 'internet_mobile', 'get_access');
    scene.text('Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027komp/u0027, /u0027start/u0027); return false;">computer</a> is on the table. Unfortunately, there is no internet service in the village.');
  }
  if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    if (((s as any).exhib ?? 0)?.['status'] === 11) {
      scene.text('Kopashatsya working in the garden, hmm… maybe sometime <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027ETO_village/u0027, /u0027garden_check/u0027); return false;">motivate</a> for them to work quicker and smarter.');
    } else {
      if (((s as any).exhib ?? 0)?.['status'] === 12) {
        scene.text('Leave in <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027ETO_village/u0027, /u0027hanging_clothes/u0027); return false;">garden in lingerie and robe</a>.');
      } else {
        if (((s as any).exhib ?? 0)?.['status'] === 13  &&  ((s as any).temp ?? 0) !== ((s as any).daystart ?? 0)) {
          scene.text('I wonder how to <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027ETO_village/u0027, /u0027worker_conversation/u0027); return false;">garden</a>');
        }
      }
    }
  }
  qspCall(s, 'daily_routine', 'offer_here');
  qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
  qspCall(s, 'music_actions', 'start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) !== 'nude') {
      (st as any).minut = ((st as any).minut ?? 0) + (5);
      qspGoto(st, 'dachamy', '');
    } else {
      qspGoto(st, 'dachain', 'start');
    }
  } },
    { label: 'Go to the Bathroom', goto: ['dachain', 'dachabath'] },
    { label: 'Go to the kitchen alcove', goto: ['dachain', 'dachakit'] },
    { label: 'Get in the bed', goto: ['bed', 'start'] },
    { label: 'Lie on the couch', goto: ['divan', 'start'] },
  ]);
  scene.build();
}

function enterDachakit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dachain', 'dachakit');
  (s as any).location_type = 'private';
  (s as any).locclass = 'kitr';
  qspCall(s, 'kit_din', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cottage Kitchen</b></center>');
  if (qspFunc(s, 'homes_properties', 'is_property_renovated')) {
    scene.img('images/locations/suburban/cottage/dachakit2.jpg');
  } else {
    scene.img('images/locations/suburban/cottage/dachakit1.jpg');
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
    // TODO-QSP: dynamic text: <b><<mc_inventory[''dish_plates'']>></b> clean plates are stored in the cupboard...
    scene.text(`<b>${(((s as any).mc_inventory ?? 0)?.['dish_plates'] ?? '')}</b> clean plates are stored in the cupboard.`);
  } else {
    scene.text('<center><b>You have no clean dishes left.</b></center>');
  }
  if (((s as any).dirttarelka ?? 0) > 0) {
    // TODO-QSP: dynamic text: <b><<dirttarelka>></b> dirty dishes are lying in the sink. <a href="exec:gs ''ki...
    scene.text(`<b>${((s as any).dirttarelka ?? '')}</b> dirty dishes are lying in the sink. <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kit_din/u0027, /u0027dirtarm/u0027); return false;">Wash the dishes</a>.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
    // TODO-QSP: dynamic text: Next to the sink is dishwashing liquid, enough for <b><<mc_inventory[''dish_soap...
    scene.text(`Next to the sink is dishwashing liquid, enough for <b>${(((s as any).mc_inventory ?? 0)?.['dish_soap'] ?? '')}</b> uses.`);
  } else {
    scene.text('<center><b>You have nothing to wash dishes with, you need to buy dishwashing liquid.</b></center>');
  }
  if (((s as any).mc_inventory ?? 0)?.['food_basic'] > 0) {
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] === 0  ||  ((s as any).edahot ?? 0) > 0) {
      (s as any).edagot = '';
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0  &&  (!((s as any).edahot ?? 0))) {
      (s as any).edagot = '<a href="#" onclick="window.__gameStore.getState().doGoto(/u0027kit_din/u0027, /u0027edagotd/u0027); return false;">Cook a meal</a>';
    }
    // TODO-QSP: dynamic text: 'There''s enough food for <b><<mc_inventory[''food_basic'']>></b> ' + iif(mc_inv...
    scene.text(`There's enough food for <b>${(((s as any).mc_inventory ?? 0)?.['food_basic'] ?? '')}</b> ` + ((((s as any).mc_inventory ?? 0)?.['food_basic'] === 1) ? ('serving') : ('servings')) + `. ${((s as any).edagot ?? '')}`);
  } else {
    if (((s as any).mc_inventory ?? 0)?.['food_diet'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['food_basic'] === 0) {
      scene.text('<center><b>The fridge is empty. You have nothing to eat.</b></center>');
    }
  }
  qspCall(s, 'kit_din', 'edahota');
  qspCall(s, 'lover_living', 'kitchen');
  qspCall(s, 'core_library', 'kitchen', 'full');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go into the main room', goto: ['dachain', 'start'] },
  ]);
  scene.build();
}

function enterDachabath(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'dachain', 'dachabath');
  (s as any).location_type = 'bathroom';
  (s as any).bathtype = 'bathtub shower';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Cottage Bathroom</b></center>');
  if (qspFunc(s, 'homes_properties', 'is_property_renovated')) {
    scene.img('images/locations/suburban/cottage/dachavan2.jpg');
  } else {
    scene.img('images/locations/suburban/cottage/dachavan1.jpg');
  }
  qspCall(s, 'selfplay', 'suction_dildo');
  qspCall(s, 'din_van', 'private');
  qspCall(s, 'home_events', 'bathroom');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go into the main room', goto: ['dachain', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'dachakit':
      enterDachakit(s, scene);
      break;
    case 'dachabath':
      enterDachabath(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dachain: LocationDef = {
  name: 'dachain',
  title: 'Cottage',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'kitr',
  enter: enter,
};
