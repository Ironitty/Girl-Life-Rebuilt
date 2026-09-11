import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).arturKnow = 1;
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
  scene.text('Arthur leads you to the parking lot where his black Priora is parked. You get into the car and Arthur drives you to a neighborhood you\'ve never ventured into, but you recognize it as an Armenian area of town.');
  scene.text('"I eat real food for lunch, meat on skewers, not the rubbish in the cafe. And real jam." He says proudly. You continue to make small talk while driving towards your destination.');
  scene.actions([
    { label: 'Go to his home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'drugs', 'alcohol', 'vodka', 2);
    qspCall(s, 'boyStat', 'A73');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('Arthur has generously set the table with food and you eat meat wrapped in grape leaves and roasted on skewers. You drink strong Chacha with your food and quickly find yourself getting tipsy. Once you\'re nearly done with your meal Arthur turns on some music before approaching, a look of lust on his face. "Come to me girl." He says authoritatively');
    if (((s as any).condomtalkartur ?? 0) === 0  &&  ((s as any).arturSex ?? 0) > 0) {
      scene.actions([
        { label: 'Ask him to wear a condom', handler: (st: GameState) => {
    (s as any).condomtalkartur = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/arthur/artur.jpg');
    scene.text('You ask Arthur to wear a condom. He scoffs loudly at the suggestion and shakes his head."What? Sex with a condom is like breathing through a mask. No!"');
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_commercial', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    (st as any).arturTimes = ((st as any).arturTimes ?? 0) + (1);
  }, goto: ['arturSex', ''] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'sex', 'resist', 'hard');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_commercial', ''] },
      ]);
    }
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    (st as any).arturTimes = ((st as any).arturTimes ?? 0) + (1);
  }, goto: ['arturSex', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const arturHome: LocationDef = {
  name: 'arturHome',
  title: 'Arthur leads you to the parking lot where his black Priora i',
  region: 'other',
  description: ['Arthur leads you to the parking lot where his black Priora is parked. You get into the car and Arthur drives you to a neighborhood you\'ve never ventured into, but you recognize it as an Armenian area of town.'],
  enter: enter,
};
