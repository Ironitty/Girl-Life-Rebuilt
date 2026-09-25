import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_indoors';
  (s as any).loc = 'city_nightclubToilet';
  (s as any).loc_arg = 'start';
  (s as any).menu_loc = 'city_nightclubToilet';
  (s as any).menu_arg = 'start';
  qspCall(s, 'themes', 'indoors');
  (s as any).locclass = undefined;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nightclub - Restroom</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/toiletwalkway.jpg');
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'city_nightclubToilet', 'clubtoilet_men');
  } },
    ]);
  }
  scene.actions([
    { label: 'Enter the women\'s restroom', goto: ['city_nightclubToilet', 'clubtoilet_women'] },
    { label: 'Return to the dance floor', goto: ['city_nightclub', 'inside'] },
  ]);
  scene.build();
}

function enterClubtoiletMen(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_nightclubToilet';
  (s as any).loc_arg = 'clubtoilet_men';
  (s as any).locM = 'city_nightclubToilet';
  (s as any).locM_arg = 'clubtoilet_men';
  (s as any).menu_loc = 'city_nightclubToilet';
  (s as any).menu_arg = 'clubtoilet_men';
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'restroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nightclub - Men\'s Room</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/mentoilet.jpg');
  scene.text('You walk into the men\'s restroom, where you see some sinks and <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirrors</a>.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  qspCall(s, 'din_van', 'palelady');
  scene.actions([
    { label: 'Leave', goto: ['city_nightclubToilet', 'start'] },
  ]);
  scene.build();
}

function enterClubtoiletWomen(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'city_nightclubToilet';
  (s as any).loc_arg = 'clubtoilet_women';
  (s as any).locM = 'city_nightclubToilet';
  (s as any).locM_arg = 'clubtoilet_women';
  (s as any).menu_loc = 'city_nightclubToilet';
  (s as any).menu_arg = 'clubtoilet_women';
  (s as any).location_type = 'bathroom';
  (s as any).locclass = 'restroom';
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nightclub - Women\'s Room</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/womentoilet.jpg');
  scene.text('You walk in to the women\'s restroom. You see some sinks and <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027mirror\u0027, \u0027start\u0027); return false;">mirrors</a>. You notice the last stall has its door wide open.');
  qspCall(s, 'din_van', 'tampon');
  qspCall(s, 'din_van', 'quickwash');
  qspCall(s, 'din_van', 'basin');
  qspCall(s, 'din_van', 'publicpan');
  qspCall(s, 'din_van', 'palelady');
  scene.actions([
    { label: 'Leave', goto: ['city_nightclubToilet', 'start'] },
    { label: 'Go to the last stall', goto: ['gloryhole', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'clubtoilet_men':
      enterClubtoiletMen(s, scene);
      break;
    case 'clubtoilet_women':
      enterClubtoiletWomen(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_nightclubToilet: LocationDef = {
  name: 'city_nightclubToilet',
  title: 'Nightclub - Restroom',
  region: 'city',
  locationType: 'bathroom',
  locclass: 'restroom',
  enter: enter,
};
