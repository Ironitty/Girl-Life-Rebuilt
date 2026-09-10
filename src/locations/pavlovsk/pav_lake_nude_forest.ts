import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_lake_nude_forest', '');
  qspCall(s, 'stat', '');
  scene.text('The woods near the secludeed beach');
  scene.img('images/locations/pavlovsk/lake/secluded_beach/voyeurism/voyeurism_start_event_4.jpg');
  scene.text('You are in the woods near the secluded beach.');
  if ((!((s as any).voyeurism_forest ?? 0))) {
    scene.text('<font color="red" SIZE="4" FACE="Calibri">A sexy blonde in a dark dress wals past you. She seems to be heading through the woods with purpose in a direction you\'ve never gone. Intrigued by her, you decide to follow her to see what she is doing.</font>');
  } else {
    scene.text('<font color="black" SIZE="4" FACE="Calibri">You find a good place to hide behind several bushes where you\'ll have a clear view of the beach, but the people won\'t see you. Excitement twists in your belly at the thought of being caught spying on the lounging beach bums. After spending some time observing the beach-goers you notice that the girls are often going into the forest to pee. You figure that following one of them wouldn\'t be difficult.</font>');
  }
  if (((s as any).temper ?? 0) >= 20  &&  ((s as any).month ?? 0) >= 5  &&  ((s as any).month ?? 0) <= 9  &&  ((s as any).hour ?? 0) >= 6  &&  ((s as any).hour ?? 0) <= 20) {
    if ((!((s as any).voyeurism_forest ?? 0))) {
      (s as any).voyeurism_forest = 1;
      qspCall(s, 'willpower', 'voyeur', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Follow the girl [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Follow the girl', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['pav_lake_nude_events', 'pav_lake_nude_forest_piss'] },
        ]);
      }
    } else {
      qspCall(s, 'willpower', 'voyeur', 'self', 'easy');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Spy on nudists [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Spy on nudists', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'voyeur', 'self', 'easy');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'pav_lake_nude_events', 'pav_lake_nude_nudist');
    scene.actions([
      { label: 'Look', goto: ['pav_lake_nude_forest', ''] },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'voyeur', 'self');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Spy on girl going for a pee [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Spy on girl going for a pee', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'voyeur', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'arousal', 'voyeur', 10);
    (s as any).voyeurism = ((s as any).voyeurism ?? 0) + (1);
    (s as any).viewforestpiss = Math.floor(Math.random() * 169) + 1;
    scene.img(`images/locations/pavlovsk/lake/secluded_beach/piss_forest/piss_forest_${((s as any).viewforestpiss ?? 0)}.jpg`);
    scene.text('You slip behind a tree and watch as a cute girl looks for a private spot to do her business. She finally decides on a patch of dirt near some bushes and squats down. You peek your head around the tree for a better look as the girl finds her balance and appears to relax. A stream of urine begins to flow from her and you hear a light moan escape her mouth.');
    scene.actions([
      { label: 'Go back', goto: ['pav_lake_nude_forest', ''] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Go to the beach', goto: ['pav_lake_nude', ''] },
  ]);
  scene.build();
}

export const pav_lake_nude_forest: LocationDef = {
  name: 'pav_lake_nude_forest',
  title: 'The woods near the secludeed beach',
  region: 'pavlovsk',
  description: ['The woods near the secludeed beach'],
  enter: enter,
};
