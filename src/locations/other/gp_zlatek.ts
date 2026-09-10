import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/grandparents/grandpa.jpg');
  scene.text('Your grandfather is a grumpy old man who is always complaining about the village elders and how they have neglected the village to barely being fit to live in. He can walk but requires a cane. So he doesn\'t leave the house anymore unless he really has to.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.text('Grandpa looks shocked, but it doesn\'t stop him from having a good look at you.');
    // TODO-QSP: dynamic text: "My God, <<$pcs_nickname>>! Are you trying to give me a heart attack? Go and put...
    scene.text(`"My God, ${((s as any).pcs_nickname ?? 0)}! Are you trying to give me a heart attack? Go and put some clothes on!"`);
    return;
    scene.actions([
      { label: 'Maybe you should get dressed before talking to him', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).grigory_flower ?? 0) > 0  &&  ((s as any).grigory_flower ?? 0) < 10) {
    // TODO-QSP: act 'Talk to him about the flowers': gt 'grigory', 'flower3'
  }
  if (((s as any).grandpaQW ?? 0)?.['chore_gather_mushrooms'] === 1) {
    // TODO-QSP: dynamic text: You promised to bring grandpa <<grandpaQW['chore_mushroom_quantity']>> kg of mus...
    scene.text(`You promised to bring grandpa ${((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']} kg of mushrooms.`);
  } else {
    // TODO-QSP: dynamic text: You promised to bring grandpa <<grandpaQW['chore_berry_quantity']>> kg of berrie...
    scene.text(`You promised to bring grandpa ${((s as any).grandpaQW ?? 0)?.['chore_berry_quantity']} kg of berries.`);
    if (((s as any).grandpaQW ?? 0)?.['chore_gather_both'] === 1) {
      // TODO-QSP: dynamic text: You promised to bring grandpa <<grandpaQW['chore_mushroom_quantity']>> kg mushro...
      scene.text(`You promised to bring grandpa ${((s as any).grandpaQW ?? 0)?.['chore_mushroom_quantity']} kg mushrooms and ${((s as any).grandpaQW ?? 0)?.['chore_berry_quantity']} kg of berries.`);
    }
    qspCall(s, 'gp_zlatek', 'set_report_chores_acts');
    qspCall(s, 'gp_zlatek', 'get_random_chore_act');
    qspCall(s, 'gp_zlatek', 'set_talk_acts');
  }
  scene.actions([
    { label: 'Leave him alone', goto: ['gp_zlatek', 'return'] },
  ]);
  scene.build();
}

export const gp_zlatek: LocationDef = {
  name: 'gp_zlatek',
  title: 'Your grandfather is a grumpy old man who is always complaini',
  region: 'other',
  description: ['Your grandfather is a grumpy old man who is always complaining about the village elders and how they have neglected the village to barely being fit to live in. He can walk but requires a cane. So he doesn\'t leave the house anymore unless he really has to.'],
  enter: enter,
};
