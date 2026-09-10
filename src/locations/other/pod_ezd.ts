import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterOccupants(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pod_ezd', 'occupants');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/housemates.jpg');
  scene.text('Floor 1 - Apartment number 2: Artem Chebotarev');
  scene.text('Floor 2 - Apartment number 7: Your Family              Apartment number 9: Uncle Misha');
  scene.text('Floor 3 - Apartment number 13: Sergey and Vasily Shulgin      Apartment number 15: Julia Milova');
  scene.text('Floor 4 - Apartment number 19: Natasha Belova            Apartment number 21: Aunt Luda');
  scene.text('Floor 5');
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enterLeaveBuilding(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 4  ||  ((s as any).motherWorry ?? 0) !== 0  ||  ((s as any).age ?? 0) >= 18  ||  qspFunc(s, 'homes_properties', 'has_access', 'parents_home') === 0) {
    scene.actions([{ label: 'Continue', goto: ['pav_complex', 'start'] }]);
  }
  scene.text('<font color=red>Are you sure? Your mother will worry if you go out at this time.</font>');
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Yes, go outside [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Yes, go outside', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
  }, goto: ['pav_complex', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'No, stay inside', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEtaj_2(s: GameState, scene: SceneBuilder): void {
  if (Math.floor(Math.random() * 3) + 0 === 0  &&  (((s as any).totminut ?? 0) > ((s as any).floor2_event_time ?? 0) + 60)  ||  (((s as any).totminut ?? 0) < ((s as any).floor2_event_time ?? 0) - 1440)) {
    (s as any).floor2_event_time = ((s as any).totminut ?? 0);
    qspCall(s, 'pod_ezd', 'floor2_events');
  }
  qspCall(s, 'core_library', 'setloc', 'pod_ezd', 'etaj_2');
  qspCall(s, 'stat', '');
  scene.text('<center>2nd floor of the apartment building</center>');
  if (((s as any).pod_whore_countQW ?? 0) <= 15) {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj2.jpg');
    scene.text('<center>The second floor stairwell is clean and well maintained. It was renovated not long ago, and the inhabitants do their best to keep it clean.</center>');
  } else {
    scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj2_whore.jpg');
    scene.text('<center>The second floor stairwell was renovated not long ago, but some hoodlums already sprayed graffiti on the walls, telling the world what a whore you are. You could <a href="exec: gt \'pod_ezd\', \'etaj2_paint\'">cover it up</a> if you want to.</center>');
  }
  scene.text('<br>The stairwell is empty.');
  if (qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
    scene.actions([
      { label: '<b>Apartment 7: Your parents</b>', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).pavhome_enter = 1;
  }, goto: ['korrPar', ''] },
    ]);
  } else {
    scene.actions([
      { label: '<b>Apartment 7: Your parents (knock)</b>', goto: ['mother_chats', 'knock'] },
      { label: '<b>Apartment 7: Your parents</b>', handler: (st: GameState) => {
    // TODO-QSP: msg 'Your knock is unanswered, and you no longer have a key....
  } },
    ]);
  }
  scene.actions([
    { label: 'Go down to the first floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_1'] },
    { label: 'Go up to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_3'] },
    { label: 'Apartment 9: Uncle Misha', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) < 5) {
      scene.text('It\'s too late to visit Uncle Misha, he\'s probably sleeping now.');
    } else {
      scene.text('It\'s too early in the morning to visit Uncle Misha, he\'s probably still sleeping.');
      if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 19) {
        scene.text('You ring the doorbell, but no one answers the door.');
      } else {
        qspCall(s, 'stat', '');
        scene.text('The door opens and Uncle Misha invites you into the apartment.');
        if (((s as any).mishahouse_count ?? 0) <= 0  &&  ((s as any).dyadyamishaevent ?? 0) >= 1  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) <= 23  ||  ((s as any).mishahouse_count ?? 0) <= 0  &&  ((s as any).dyadyamishaevent ?? 0) >= 1  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) <= 23) {
          // TODO-QSP: dynamic text: You ring the bell and Uncle Misha opens the door. He says: "Sorry <<$pcs_nicknam...
          scene.text(`You ring the bell and Uncle Misha opens the door. He says: "Sorry ${((s as any).pcs_nickname ?? 0)}, I'm busy right now. Maybe come back tomorrow?"`);
        } else {
          scene.text('You ring the doorbell, but no one answers the door.');
        }
        scene.actions([
          { label: 'Enter', handler: (st: GameState) => {
    (s as any).mishahouse_day = ((s as any).daystart ?? 0);
    (s as any).mishahouse_count = ((s as any).mishahouse_count ?? 0) - (1);
  }, goto: ['misha', '1'] },
        ]);
      }
      scene.actions([
        { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'pod_ezd', 'lift', 'etaj_2'
  } },
        { label: '<b>Leave and go to the courtyard</b>', handler: (st: GameState) => {
    qspCall(st, 'pod_ezd', 'leave_building');
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'occupants':
      enterOccupants(s, scene);
      break;
    case 'leave_building':
      enterLeaveBuilding(s, scene);
      break;
    case 'etaj_2':
      enterEtaj_2(s, scene);
      break;
    default:
      enterOccupants(s, scene);
      break;
  }
}

export const pod_ezd: LocationDef = {
  name: 'pod_ezd',
  title: 'Ground floor of the apartment building',
  region: 'other',
  locationType: 'public_indoors',
  description: ['Floor 1 - Apartment number 2: Artem Chebotarev'],
  enter: enter,
};
