import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_drunk['A60'] = 0;
  (s as any).GadBoy['drunk_event'] = 0;
  (s as any).MiraVars['drunk_event'] = 0;
  (s as any).GadBoy['drinkday'] = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/mitka_old_trailer.jpg');
  scene.text('You follow the boys into the woods. Soon the familiar old trailer comes into view.');
  if (((s as any).sunWeather ?? 0) === 1) {
    scene.text('The skies are clear today so you all decide to drink outside tonight.');
    scene.text('You quickly head over to the bench and sit down before anyone else can claim it.');
    scene.actions([
      { label: 'Sit down outside', goto: ['mitkabuh_group', 'partywithMira'] },
    ]);
  } else {
    scene.text('The weather is poor outside today so you all decide to drink inside tonight.');
    scene.text('The inside of the trailer looks like last time, just with maybe a few more empty bottles and cups strewn about. You quickly head over to the best couch and sit down before anyone else can claim it.');
    scene.actions([
      { label: 'Go inside the trailer', goto: ['mitkabuh_group', 'partywithMira'] },
    ]);
  }
  scene.build();
}

function enterPartywithMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mitkabuh_group', ((s as any).partywithMira ?? 0));
  scene.img('images/locations/gadukino/village/drunk.jpg');
  // TODO-QSP: dynamic text: You, Mira, Mitka, Kolyamba and Vasyan are sitting on some '+iif(sunWeather=1, 'l...
  scene.text('You, Mira, Mitka, Kolyamba and Vasyan are sitting on some \'+iif(sunWeather=1, \'logs outside\', \'couches inside\')+\' the trailer. There is plenty of moonshine to go around but no snacks.');
  if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).alko ?? 0) < 10) {
    (s as any).alko = 10;
  }
  if (((s as any).MiraVars ?? 0)?.['drunk_event'] === 1  &&  ((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
    (s as any).npc_drunk['A60'] = 10;
  }
  if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 1) {
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    scene.text('You and Mira are both way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
    scene.text('As you are leaving the guys call after you both "Hey whores, come drink with us again, we love fucking you both!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a response and just walk away with Mira.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
    ]);
  } else {
    (s as any).GadBoy['drunk_event'] = 1;
    (s as any).MiraVars['drunk_event'] = 1;
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 1;
    if (((s as any).temp_rand ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A61', '0');
      qspCall(s, 'boyStat', 'A62', '1');
      qspCall(s, 'boyStat', 'A63', '2');
    } else {
      qspCall(s, 'boyStat', 'A61', '0');
      qspCall(s, 'boyStat', 'A63', '1');
      qspCall(s, 'boyStat', 'A62', '2');
      if (((s as any).temp_rand ?? 0) === 3) {
        qspCall(s, 'boyStat', 'A62', '0');
        qspCall(s, 'boyStat', 'A61', '1');
        qspCall(s, 'boyStat', 'A63', '2');
      } else {
        qspCall(s, 'boyStat', 'A62', '0');
        qspCall(s, 'boyStat', 'A63', '1');
        qspCall(s, 'boyStat', 'A61', '2');
        if (((s as any).temp_rand ?? 0) === 5) {
          qspCall(s, 'boyStat', 'A63', '0');
          qspCall(s, 'boyStat', 'A62', '1');
          qspCall(s, 'boyStat', 'A61', '2');
        } else {
          qspCall(s, 'boyStat', 'A63', '0');
          qspCall(s, 'boyStat', 'A61', '1');
          qspCall(s, 'boyStat', 'A62', '2');
        }
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) <= 4  &&  ((s as any).mesec ?? 0) === 0) {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_sex'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_bj'] }]);
          if (((s as any).temp_rand ?? 0) <= 9) {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_show'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh_group', 'group_anal'] }]);
          }
          qspCall(s, 'willpower', 'drink', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Drink with Mira and the boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/drinking.jpg');
    scene.text('Mitka pours some of the brew into two clear plastic shot glasses and hands them over to you.');
    scene.text('You take one glass and give it to Mira while the other you quickly gulp down. Mira does the same with the one you gave her.');
    scene.text('You and Mira have almost the same reaction to the moonshine. Your eyes widen and you coughs a little, sucking in your breath with a smile. You chat with the boys as they drink as well.');
    scene.text('Mitka looks at you approvingly, "Good shit, right?"');
    scene.text('"Just as good as the last batch you made!" you reply.');
    (s as any).npc_drunk['A60'] = ((s as any).npc_drunk['A60'] ?? 0) + (5);
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh_group', 'partywithMira'] },
    ]);
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'partywithMira':
      enterPartywithMira(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mitkabuh_group: LocationDef = {
  name: 'mitkabuh_group',
  title: 'You follow the boys into the woods. Soon the familiar old tr',
  region: 'other',
  locationType: 'public_indoors',
  description: ['You follow the boys into the woods. Soon the familiar old trailer comes into view.'],
  enter: enter,
};
