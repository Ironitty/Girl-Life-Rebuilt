import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gdktoilet', 'start');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).ghnow = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Community Center - Restrooms</b></center>');
  scene.img('images/locations/pavlovsk/community/bathroom/bathroom_entrance.jpg');
  scene.text('There is a <a href="exec: gt \'beverage\', \'watercooler\'">drinking fountain</a> near the doors to the bathrooms.');
  if (((s as any).hour ?? 0) >= 8) {
    qspCall(s, 'willpower', 'exhib', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Enter the men\'s restroom [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Enter the men\'s restroom', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'exhib', 'self');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['gdktoilet_mens', 'mens_entrance_events'] },
      ]);
    }
    scene.actions([
      { label: 'Enter the women\'s restroom', goto: ['gdktoilet', 'womens'] },
    ]);
  }
  if (((s as any).hour ?? 0) >= 20  &&  ((s as any).week ?? 0) >= 5  &&  ((s as any).week ?? 0) < 7) {
    if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
      (s as any).volume = 50;
      (s as any).music_loop = 1;
    }
    if (((s as any).gdkincum ?? 0) === ((s as any).daystart ?? 0)  &&  (((s as any).cumloc ?? 0)[6] === 0  &&  ((s as any).cumloc ?? 0)[7] === 0)  &&  ((s as any).cumloc ?? 0)[11] === 0) {
      (s as any).gdkincum = 0;
    }
    if (((s as any).gdkincum ?? 0) !== ((s as any).daystart ?? 0)) {
      if (((s as any).pav_disco_in ?? 0) === ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Return to the dance', goto: ['pav_disco', ''] },
        ]);
      } else {
        scene.actions([
          { label: 'Go to the dance [+$func(\'money\', \'get_cost_string\', 25)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 25) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'pay', 25);
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      scene.actions([{ label: 'Continue', goto: ['pav_disco', ''] }]);
    }
  } },
        ]);
      }
    } else {
      if ((((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1)  &&  ((s as any).cumloc ?? 0)[11] === 1) {
        scene.text('You should clean the cum off your face and clothes before heading back to the dance.');
      } else {
        scene.text('You should clean the cum off your face before heading back to the dance.');
        if (((s as any).cumloc ?? 0)[6] === 1  ||  ((s as any).cumloc ?? 0)[7] === 1) {
          scene.text('You should clean the cum off your clothes before heading back to the dance.');
        }
      }
      (s as any).music_loop = 0;
    }
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 18) {
      // TODO-QSP: act 'Go to the library': gt 'pav_library'
    }
    if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
      // TODO-QSP: act 'Go upstairs to the hobby clubs': gt 'pav_commclubs'
    }
    if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 14  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 20)) {
      // TODO-QSP: act 'Go to the gym': gt 'gdksport', 'start'
    }
    scene.actions([
      { label: 'Change outfit in the locker room', goto: ['wardrobe', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Go outside', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) !== 'nude') {
      qspCall(s, 'arousal', 'end');
      scene.actions([{ label: 'Continue', goto: ['pav_commcenter', ''] }]);
    }
  } },
  ]);
  scene.build();
}

export const gdktoilet: LocationDef = {
  name: 'gdktoilet',
  title: 'Community Center - Restrooms',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'restroom',
  enter: enter,
};
