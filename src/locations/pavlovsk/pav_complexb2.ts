import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterHousemates(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/housemates.jpg');
  scene.text('Floor 1 - Apartment number');
  scene.text('Floor 2 - Apartment number');
  scene.text('Floor 3 - Apartment number');
  scene.text('Floor 4 - Apartment number 17: Anushka Konstantinov');
  scene.text('Floor 5 - Apartment number');
  scene.actions([
    { label: 'Leave', goto: ['pav_complexb2', 'etaj_1'] },
  ]);
  scene.build();
}

function enterEtaj_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complexb2', 'etaj_1');
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Ground floor of the apartment building</b></center>');
  scene.img('images/locations/pavlovsk/resident/apartment/podezd2.jpg');
  scene.text('<center>A dirty and poorly maintained stairwell, the same as any other in your town.</center>');
  scene.text('There\'s a <a href="exec: gt \'pav_complexb2\', \'housemates\'">list</a> of the people who live here on the wall.');
  scene.text('Someone put up some <a href="exec:gt \'pav_complexb2\',\'pod_objava\'">advertisements</a> on the wall near the entrance.');
  scene.actions([
    { label: 'Leave the building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Go up to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_2'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_complexb2', 'lift', 'etaj_1'
  } },
  ]);
  scene.build();
}

function enterEtaj_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complexb2', 'etaj_2');
  qspCall(s, 'stat', '');
  scene.text('<center>2nd floor of the apartment building</center>');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj2.jpg');
  scene.text('<center>The second floor stairwell is clean and well maintained. It was renovated not long ago, and the inhabitants do their best to keep it clean.</center>');
  scene.actions([
    { label: 'Go down to the first floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_1'] },
    { label: 'Go up to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_3'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_complexb2', 'lift', 'etaj_2'
  } },
  ]);
  scene.build();
}

function enterEtaj_3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complexb2', 'etaj_3');
  qspCall(s, 'stat', '');
  scene.text('<center>3rd floor of the apartment building</center>');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj3.jpg');
  scene.text('<center>The third floor stairwell is clean and well maintained. It was renovated not long ago, and the inhabitants do their best to keep it clean.</center>');
  scene.actions([
    { label: 'Go down to the second floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_2'] },
    { label: 'Go up to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_4'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_complexb2', 'lift', 'etaj_3'
  } },
  ]);
  scene.build();
}

function enterEtaj_4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complexb2', 'etaj_4');
  qspCall(s, 'stat', '');
  scene.text('<center>4th floor of the apartment building</center>');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj4.jpg');
  scene.text('<center>The fourth floor stairwell was renovated not long ago, but some hoodlums have already sprayed graffiti on the walls.</center>');
  if (((s as any).anushkaQW ?? 0)?.['first_visit'] !== 0) {
    scene.actions([
      { label: 'Apartment 17: Anushka Konstantinov', goto: ['anushapt', 'home'] },
    ]);
  }
  scene.actions([
    { label: 'Go down to the third floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_3'] },
    { label: 'Go up to the fifth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_5'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_complexb2', 'lift', 'etaj_4'
  } },
  ]);
  scene.build();
}

function enterEtaj_5(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complexb2', 'etaj_5');
  qspCall(s, 'stat', '');
  scene.text('<center>Floor #5</center>');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/etaj5.jpg');
  scene.text('<center>The fifth floor stairwell looks like most of the other floors, but it has a final set of stairs at the other end of the hall that go up to the roof.</center>');
  scene.actions([
    { label: 'Go down to the fourth floor', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'etaj_4'] },
    { label: 'Go up to the roof', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complexb2', 'roof'] },
    { label: 'Take the elevator', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_complexb2', 'lift', 'etaj_5'
  } },
  ]);
  scene.build();
}

function enterRoof(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_complexb2', 'rppf');
  qspCall(s, 'stat', '');
  scene.text('<center>Roof</center>');
  if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) < 4) {
    scene.img('images/locations/pavlovsk/resident/apartment/roof/roofw.jpg');
  } else {
    if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
      scene.img('images/locations/pavlovsk/resident/apartment/roof/roof.jpg');
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/roof/roofn.jpg');
    }
  }
  scene.text('<center>The roof is fairly flat, with the roof access door in a raised part in the middle of the roof. Along one of the walls is another door to some type of storage or maintenances access. There is several ventilation stacks on the roof as well.</center>');
  if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Change back into your clothes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
  }, goto: ['pav_complexb2', 'roof'] },
    ]);
  }
  if (((s as any).temper ?? 0) >= 15  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
    if (((s as any).PSwim ?? 0) === 0) {
      if (qspFunc(s, 'changingroom', 'count_swim_item') > 0) {
        scene.actions([
          { label: 'Change into a bikini', goto: ['changingroom', ''] },
        ]);
      }
    }
    if (((s as any).PSwim ?? 0) === 1) {
      scene.actions([
        { label: 'Sunbathe (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
    if (((s as any).pcs_sweat ?? 0) < 35) {
      qspCall(s, 'sweat', 'add', 5);
    }
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/residential/apartment/zagar1.jpg');
    if (((s as any).mc_inventory ?? 0)?.['suncream'] === 0) {
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (1);
      scene.text('You lie down to sunbathe.');
    } else {
      (s as any).mc_inventory['suncream'] = ((s as any).mc_inventory['suncream'] ?? 0) - (1);
      (s as any).pcs_tan = ((s as any).pcs_tan ?? 0) + (3);
      scene.text('You put the sunblock on your body and lie down on the roof to sunbathe.');
    }
    scene.actions([
      { label: 'Get Up', goto: ['pav_complexb2', 'roof'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Go down to the fifth floor', handler: (st: GameState) => {
    if (((s as any).PSwim ?? 0) === 1  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', goto: ['pav_complexb2', 'roof'] }]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.actions([{ label: 'Continue', goto: ['pav_complexb2', 'etaj_5'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterLift(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'pav_complexb2', 'lift_events');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/elevator.jpg');
  scene.text('<center>The elevator in the apartment building is quite old. The building supervisor does his best to keep it running, but it breaks down a lot. Someone put up a <a href="exec:gt \'pav_complexb2\',\'elev_objava\',$ARGS[1]">notification</a> in the elevator.</center>');
  scene.actions([
    { label: 'Push button: Floor 1', goto: ['pav_complexb2', 'etaj_1'] },
    { label: 'Push button: Floor 2', goto: ['pav_complexb2', 'etaj_2'] },
    { label: 'Push button: Floor 3', goto: ['pav_complexb2', 'etaj_3'] },
    { label: 'Push button: Floor 4', goto: ['pav_complexb2', 'etaj_4'] },
    { label: 'Push button: Floor 5', goto: ['pav_complexb2', 'etaj_5'] },
  ]);
  scene.build();
}

function enterLiftEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).pod_lift_ev = Math.floor(Math.random() * 101) + 0;
  if (((s as any).pod_lift_ev ?? 0) <= 5) {
    scene.actions([{ label: 'Continue', goto: ['pav_complexb2', 'lift_event_1'] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['pav_complexb2', 'lift_event_2'] }]);
  }
  scene.build();
}

function enterLiftEvent_1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/event/elevator\'+rand(1, 2)+\'.jpg');
  scene.text('When the elevator door opens, you are surprised to see a naked woman standing in it. She looks at you in panic and is frantically pressing all the elevator buttons. You\'re too baffled to do anything until it\'s too late. The door has already closed, and the elevator is moving away from you.');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['pav_complexb2', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterLiftEvent_2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).liftnotwork_day = ((s as any).daystart ?? 0);
  (s as any).liftnotwork_count = ((s as any).liftnotwork_count ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/liftnotwork.jpg');
  scene.text('The building supervisor has put a sign on the elevator: "Dear tenants, the elevator is out of order for today. Don\'t worry, I should have it working again by tomorrow!"');
  // TODO-QSP: dynamic "
  // TODO-QSP: "
  scene.actions([
    { label: 'Leave', goto: ['pav_complexb2', '<<$ARGS[1]>>'] },
  ]);
  scene.build();
}

function enterElevObjava(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/elevator_ob\'+rand(1, 2)+\'.jpg');
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'pav_complexb2', 'lift', $ARGS[1]
  } },
  ]);
  scene.build();
}

function enterPodObjava(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/stairs/pod_ob\'+rand(1, 2)+\'.jpg');
  scene.actions([
    { label: 'Continue', goto: ['pav_complexb2', 'etaj_1'] },
  ]);
  scene.build();
}

function enterAnushkaFirst(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big144.jpg');
  // TODO-QSP: dynamic text: As you walk into the building, you nearly run into Anushka. "Hey <<$pcs_nickname...
  scene.text(`As you walk into the building, you nearly run into Anushka. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up?"`);
  scene.text('You\'re a little surprised to see her, but not disappointed. "Bored and just killing time, you know?"');
  scene.text('She nods and finishes checking the mail. "Yeah, I know the feeling. Want to come up to my place and hang out?"');
  scene.actions([
    { label: 'I can\'t', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_complex', 'start'] },
    { label: 'Sure', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['anushapt', 'firstvisit'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'housemates':
      enterHousemates(s, scene);
      break;
    case 'etaj_1':
      enterEtaj_1(s, scene);
      break;
    case 'etaj_2':
      enterEtaj_2(s, scene);
      break;
    case 'etaj_3':
      enterEtaj_3(s, scene);
      break;
    case 'etaj_4':
      enterEtaj_4(s, scene);
      break;
    case 'etaj_5':
      enterEtaj_5(s, scene);
      break;
    case 'roof':
      enterRoof(s, scene);
      break;
    case 'lift':
      enterLift(s, scene);
      break;
    case 'lift_events':
      enterLiftEvents(s, scene);
      break;
    case 'lift_event_1':
      enterLiftEvent_1(s, scene);
      break;
    case 'lift_event_2':
      enterLiftEvent_2(s, scene);
      break;
    case 'elev_objava':
      enterElevObjava(s, scene);
      break;
    case 'pod_objava':
      enterPodObjava(s, scene);
      break;
    case 'anushkaFirst':
      enterAnushkaFirst(s, scene);
      break;
    default:
      enterHousemates(s, scene);
      break;
  }
}

export const pav_complexb2: LocationDef = {
  name: 'pav_complexb2',
  title: 'Ground floor of the apartment building',
  region: 'pavlovsk',
  locationType: 'public_outdoors',
  description: ['Floor 1 - Apartment number'],
  enter: enter,
};
