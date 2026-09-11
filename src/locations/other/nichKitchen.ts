import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'nichKitchen', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  (s as any).sexpartkno = 1;
  qspCall(s, 'npcStat', 'A52');
  qspCall(s, 'npcStat', 'A161', 'a');
  scene.text('<center><b>Nicholas\' Kitchen</b></center>');
  scene.img('images/locations/city/citycenter/nichApartment/kitchen.jpg');
  scene.text('The kitchen has a sleek, contemporary design with lots of metal and polished wood - black, white and gray dominate the room\'s color scheme and all appliances and additional furniture in it adhere to this order.');
  scene.text('It seems to house every kitchen device known to man - all of them the most expensive variant of their kind - and the fridge and freezer cabinet are filled to the top with fresh food. There\'s also a refrigerated wine rack, stocked with bottle upon bottle of reds and whites of the finest vintages.');
  (s as any).nichCookPresent = qspFunc(s, 'nichUtil', 'isPresent', 'cook', 'kitchen');
  if (((s as any).nichCookPresent ?? 0) === 1) {
    if (((s as any).nichKnowsCook ?? 0) === 1) {
      scene.text('<a href="exec: gt \'nichCook\', \'desc\'">Jegor</a>, the cook of the family, is preparing some meals.');
    } else {
      scene.text('<a href="exec: gt \'nichCook\', \'desc\'">The cook of the family</a> is preparing some meals.');
    }
  }
  if (((s as any).nichWork ?? 0) === 2) {
    if (((s as any).nichBreakfLast ?? 0) !== ((s as any).daystart ?? 0)  &&  ((((s as any).week ?? 0) <= 5  &&  (((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 7  ||  (((s as any).hour ?? 0) === 8  &&  ((s as any).minut ?? 0) < 15)))  ||  (((s as any).week ?? 0) > 5  &&  (((s as any).hour ?? 0) === 7  ||  ((s as any).hour ?? 0) === 8  ||  (((s as any).hour ?? 0) === 9  &&  ((s as any).minut ?? 0) < 15))))) {
      scene.actions([
        { label: 'Prepare breakfast', goto: ['nichLivingroom', 'breakfast'] },
      ]);
    }
    qspCall(s, 'nichChore', 'inspect', 'kitchen');
  }
  qspCall(s, 'kit_din', 'edahota');
  qspCall(s, 'core_library', 'kitchen', 'full');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the living room', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  }, goto: ['nichLivingroom', ''] },
  ]);
  scene.build();
}

export const nichKitchen: LocationDef = {
  name: 'nichKitchen',
  title: '<center><b>Nicholas\' Kitchen</b></center>',
  region: 'other',
  locationType: 'private',
  description: ['The kitchen has a sleek, contemporary design with lots of metal and polished wood - black, white and gray dominate the room\'s color scheme and all appliances and additional furniture in it adhere to this order.'],
  enter: enter,
};
