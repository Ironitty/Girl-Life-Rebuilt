import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nightclub - Restroom</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/toiletwalkway.jpg');
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Enter the men\'s restroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Enter the men\'s restroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['city_nightclubToilet', 'clubtoilet_men'] },
    ]);
  }
  scene.actions([
    { label: 'Enter the women\'s restroom', goto: ['city_nightclubToilet', 'clubtoilet_women'] },
    { label: 'Return to the dance floor', goto: ['city_nightclub', 'inside'] },
  ]);
  scene.build();
}

function enterClubtoiletMen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nightclub - Men\'s Room</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/mentoilet.jpg');
  scene.text('You walk into the men\'s restroom, where you see some sinks and <a href="exec:gt \'mirror\', \'start\'">mirrors</a>.');
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
  qspCall(s, 'stat', '');
  scene.text('<center><b>Nightclub - Women\'s Room</b></center>');
  scene.img('images/locations/city/citycenter/nightclub/womentoilet.jpg');
  scene.text('You walk in to the women\'s restroom. You see some sinks and <a href="exec:gt \'mirror\', \'start\'">mirrors</a>. You notice the last stall has its door wide open.');
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
      enterStart(s, scene);
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
