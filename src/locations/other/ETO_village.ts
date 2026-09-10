import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCommunityAlleys(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/1dachi.jpg');
  scene.text('You walk through the alleys. This community is not very populated. Occasionally there are gardeners working in the area. You hear the clank of a saw somewhere at the edge of the forest. At the end of the alley is an artificial reservoir. There are some houses for sale.');
  if (((s as any).exhib ?? 0)?.['status'] === 0) {
    scene.text('You don\'t know anybody here, and the locals haven\'t formed any opinion about you yet.');
  }
  if (((s as any).exhib ?? 0)?.['status'] === 10) {
    scene.text('You can start at the <a href="exec:gt \'ETO_village\', \'saw_noise\'">clanging saws</a>.');
  }
  scene.actions([
    { label: 'Go to the forest', goto: ['ETO_village', 'forest_area'] },
    { label: 'Go down to the lake', goto: ['ETO_village', 'lake_area'] },
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterForestArea(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).forest['rand'] = Math.floor(Math.random() * 100) + 1;
  scene.img('images/locations/suburban/1fores.jpg');
  scene.text('Leafy forest.');
  if (((s as any).forest ?? 0)?.['rand'] < 30) {
    scene.img('images/locations/suburban/1fores.jpg');
    scene.text('Leafy forest.');
    scene.text('You can see a mushroom picker in the distance.');
    scene.actions([
      { label: 'Get his attention', goto: ['ETO_village', 'mushroom_picker'] },
    ]);
  } else {
    scene.img('images/locations/suburban/1fores.jpg');
    scene.text('Leafy forest.');
    scene.actions([
      { label: 'Undress', goto: ['ETO_village', 'forest_nude'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterMushroomPicker(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('You wave at the mushroom picker, and he stops to look at you.');
  scene.actions([
    { label: 'Show your pussy', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'flash', 'pussy', 'outdoors', 2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/suburban/2fores.jpg');
    scene.text('Smiling, you show the mushroom picker your pussy. He stops in his tracks and stares at you, not understanding what\'s happening.');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterForestNude(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'arousal', 'end');
  scene.img('images/locations/suburban/3fores.jpg');
  scene.text('You strip down completely and go for a walk in the woods. Your heart pounds in your chest. Fresh air and a gentle warm breeze caress your skin. The sun warms you thoroughly. You thought you would feel cold quickly, but the hot summer sun proves you wrong. You leave your clothes on the ground and hope no one finds them! In this area, there are only mushroom pickers, but what if you meet one? You\'d be so embarrassed! You find a nice clearing where the wind has died down.');
  scene.actions([
    { label: 'Next', handler: (st: GameState) => {
    scene.img('images/locations/suburban/4fores.jpg');
    scene.text('You lie down and soak up the sun in the meadow, completely naked. You don\'t encounter anyone, which is both good and bad. It was nice, though a little stressful. After finishing your sunbathing and relaxing, you need to go back and find your clothes.');
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpringWater(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/rodnik.jpg');
  scene.text('Spring water.');
  qspCall(s, 'treeCircEntry', 'Village');
  scene.actions([
    { label: 'Drink from the spring', handler: (st: GameState) => {
    if (((s as any).pcs_hydra ?? 0) >= 90) {
      scene.text('You are not thirsty.');
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
      (s as any).cumspclnt = 2;
      qspCall(s, 'cum_cleanup', '');
      (s as any).pcs_breath = 0;
      scene.text('You gladly drink the spring water.');
    }
    scene.actions([
      { label: 'Leave', goto: ['dachi', ''] },
    ]);
  } },
    { label: 'Leave', goto: ['dachi', ''] },
  ]);
  scene.build();
}

function enterInfoColumn(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/suburban/stolbik.jpg');
  scene.text('The writing on the column has some useful information.');
  // TODO-QSP: dynamic text: Nina in the 3rd alley sells goat milk at <<$func('money', 'string_price', 300)>>...
  scene.text(`Nina in the 3rd alley sells goat milk at ${qspFunc(s, 'money', 'string_price', 300)} per liter`);
  if (((s as any).pcs_energy ?? 0) < 70) {
    if (qspFunc(s, 'money', 'can_afford', 300) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 300);
      (s as any).minut = ((s as any).minut ?? 0) + 30;
      (s as any).frost = 0;
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'stat', '');
      (s as any).fat = ((s as any).fat ?? 0) + (1);
      (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
      scene.text('You gladly drink some goat\'s milk.');
      scene.actions([
        { label: 'Leave', goto: ['dachi', ''] },
      ]);
    }
    scene.actions([
      { label: 'Buy milk [+$func(\'money\', \'get_cost_string\', 300)]' }, // TODO-QSP: empty action body
    ]);
  }
  scene.text('You feel too full to drink such thick and creamy milk at the moment.');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'community_alleys':
      enterCommunityAlleys(s, scene);
      break;
    case 'forest_area':
      enterForestArea(s, scene);
      break;
    case 'mushroom_picker':
      enterMushroomPicker(s, scene);
      break;
    case 'forest_nude':
      enterForestNude(s, scene);
      break;
    case 'spring_water':
      enterSpringWater(s, scene);
      break;
    case 'info_column':
      enterInfoColumn(s, scene);
      break;
    default:
      enterCommunityAlleys(s, scene);
      break;
  }
}

export const ETO_village: LocationDef = {
  name: 'ETO_village',
  title: 'Lake',
  region: 'other',
  description: ['You walk through the alleys. This community is not very populated. Occasionally there are gardeners working in the area. You hear the clank of a saw somewhere at the edge of the forest. At the end of the alley is an artificial reservoir. There are some houses for sale.'],
  enter: enter,
};
