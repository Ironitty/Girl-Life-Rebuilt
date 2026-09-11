import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).args ?? 0)[0] === 'start') {
    qspCall(s, 'core_library', 'setloc', 'dachain', 'start');
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
    scene.text('There is a <a href="exec:gt \'bed\', \'start\'">bed</a> against one wall. Next to it is a <a href="exec:gt \'wardrobe\', \'start\'">wardrobe</a> (where you can choose outfits and organize your clothing). On the other side of the bed is a table and a <a href="exec:gt \'mirror\', \'start\'">mirror</a>');
    scene.text('There is a sofa in front of the fireplace, a kitchen alcove opposite the bed and the door to the bathroom next to that.');
    if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    }
    if (((s as any).mc_inventory ?? 0)?.['desk'] === 1) {
    }
    // TODO-QSP: dynamic text: In front of the window there is <<$stol>>.
    scene.text(`In front of the window there is ${((s as any).stol ?? 0)}.`);
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
      qspCall(s, 'internet_mobile', 'get_access');
      scene.text('Your <a href="exec: gt \'komp\',\'start\'">computer</a> is on the table. Unfortunately, there is no internet service in the village.');
    }
    if (((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
      if (((s as any).exhib ?? 0)?.['status'] === 11) {
        scene.text('Kopashatsya working in the garden, hmm… maybe sometime <a href="exec: gt \'ETO_village\', \'garden_check\'">motivate</a> for them to work quicker and smarter.');
      } else {
        if (((s as any).exhib ?? 0)?.['status'] === 12) {
          scene.text('Leave in <a href="exec: gt \'ETO_village\', \'hanging_clothes\'">garden in lingerie and robe</a>.');
        } else {
          if (((s as any).exhib ?? 0)?.['status'] === 13  &&  ((s as any).temp ?? 0) !== ((s as any).daystart ?? 0)) {
            scene.text('I wonder how to <a href="exec: gt \'ETO_village\', \'worker_conversation\'">garden</a>');
          }
        }
      }
    }
    qspCall(s, 'daily_routine', 'offer_here');
    qspCall(s, 'prostitution_functions', 'prostitute_outfit_at_home');
    qspCall(s, 'music_actions', 'start');
    scene.actions([
      { label: 'Go outside', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      (s as any).minut = ((s as any).minut ?? 0) + (5);
      scene.actions([{ label: 'Continue', goto: ['dachamy', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['dachain', 'start'] }]);
    }
  } },
      { label: 'Go to the Bathroom', goto: ['dachain', 'dachabath'] },
      { label: 'Go to the kitchen alcove', goto: ['dachain', 'dachakit'] },
      { label: 'Get in the bed', goto: ['bed', 'start'] },
      { label: 'Lie on the couch', goto: ['divan', 'start'] },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'dachakit') {
    qspCall(s, 'core_library', 'setloc', 'dachain', 'dachakit');
    qspCall(s, 'kit_din', '');
    qspCall(s, 'stat', '');
    scene.text('<center><b>Cottage Kitchen</b></center>');
    if (qspFunc(s, 'homes_properties', 'is_property_renovated')) {
      scene.img('images/locations/suburban/cottage/dachakit2.jpg');
    } else {
      scene.img('images/locations/suburban/cottage/dachakit1.jpg');
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_plates'] > 0) {
      // TODO-QSP: dynamic text: <b><<mc_inventory['dish_plates']>></b> clean plates are stored in the cupboard.
      scene.text(`<b>${((s as any).mc_inventory ?? 0)?.['dish_plates']}</b> clean plates are stored in the cupboard.`);
    } else {
      scene.text('<center><b>You have no clean dishes left.</b></center>');
    }
    if (((s as any).dirttarelka ?? 0) > 0) {
      // TODO-QSP: dynamic text: <b><<dirttarelka>></b> dirty dishes are lying in the sink. <a href="exec:gs 'kit...
      scene.text(`<b>${((s as any).dirttarelka ?? 0)}</b> dirty dishes are lying in the sink. <a href="exec:gs 'kit_din', 'dirtarm'">Wash the dishes</a>.`);
    }
    if (((s as any).mc_inventory ?? 0)?.['dish_soap'] > 0) {
      // TODO-QSP: dynamic text: Next to the sink is dishwashing liquid, enough for <b><<mc_inventory['dish_soap'...
      scene.text(`Next to the sink is dishwashing liquid, enough for <b>${((s as any).mc_inventory ?? 0)?.['dish_soap']}</b> uses.`);
    } else {
      scene.text('<center><b>You have nothing to wash dishes with, you need to buy dishwashing liquid.</b></center>');
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
    scene.actions([
      { label: 'Go into the main room', goto: ['dachain', 'start'] },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'dachabath') {
    qspCall(s, 'core_library', 'setloc', 'dachain', 'dachabath');
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
    scene.actions([
      { label: 'Go into the main room', goto: ['dachain', 'start'] },
    ]);
  }
  scene.build();
}

export const dachain: LocationDef = {
  name: 'dachain',
  title: 'Cottage',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'kitr',
  description: ['Your favorite summer residence.'],
  enter: enter,
};
