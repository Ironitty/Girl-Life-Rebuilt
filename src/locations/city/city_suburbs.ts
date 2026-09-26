import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_suburbs', 'start');
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Elite settlement<h4></center>');
  scene.img('images/locations/city/suburb/settlement.jpg');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    scene.text(`Your <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;">${(((s as any).car ?? 0)?.['name'] ?? '')}</a> stands on the street.`);
  }
  scene.text('The <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=20; return s; }); window.__gameStore.getState().doGoto(\u0027metro\u0027, \u0027suburbs\u0027); return false;">Metro</a> station is a 20 minute walk from here.');
  qspCall(s, 'taxi', '');
  if (((s as any).AlexandriaQW ?? 0) > 6) {
    if (((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 20) {
      scene.text('You can visit <a href="#" onclick="window.__gameStore.setState((s) => { s.minut +=5; return s; }); window.__gameStore.getState().doGoto(\u0027AlexandriaHome\u0027, \u0027intercom\u0027); return false;">Aleksei\'s home</a> if you want to see the cranky wizard.');
    }
  }
  if (((s as any).bdsmclub ?? 0)?.['unlocked'] === 1) {
    scene.actions([
      { label: 'Go to the BDSM club', goto: ['bdsm_mansion', 'start'] },
    ]);
  }
  if (qspFunc(s, 'homes_properties', 'has_access', 'matryona_mansion') === 0) {
    scene.text('There is a vacant plot of land for sale where a large mansion could be constructed.');
    scene.actions([
      { label: 'Visit the land for sale (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_mansion_entrance', ''] },
    ]);
  } else {
    if (qspFunc(s, 'homes_properties', 'is_property_of_status', 'owned', 'matryona_mansion')) {
      (s as any).constructionstatus = qspFunc(s, 'homes_properties', 'get_property_construction_status', 'matryona_mansion');
      if ((!((s as any).constructionstatus ?? 0))) {
        scene.text('Your vacant plot of land is near hear');
      } else {
        if (((s as any).constructionstatus ?? 0) === 1) {
          scene.text('You mansion is partially built near here.');
        } else {
          scene.text('Your mansion is not too far from here.');
        }
      }
      scene.actions([
        { label: 'Visit your mansion (0:10)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['city_mansion_entrance', ''] },
      ]);
    } else {
      scene.text('One of the most impressive buildings is your newly built mansion.');
      scene.actions([
        { label: 'Visit Matryona Mansion', goto: ['city_mansion_entrance', ''] },
      ]);
    }
  }
  if (((s as any).AlexandriaQW ?? 0) === 6) {
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Look for Alexandria', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Look for Alexandria', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'easy');
    qspGoto(st, 'alexandriaEv', 'interview1');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Walk to the main road (0:01)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '1'] },
    { label: 'Walk to the Metro (0:20)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
  }, goto: ['metro', 'suburbs'] },
    { label: 'Walk to the bus station (0:05)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['bus', 'suburbs'] },
    { label: 'Walk to the canals (0:15)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['city_canals', 'start'] },
    { label: 'View the insane asylum (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_suburbs', 'ps1'] },
    { label: 'View the creepy old building (0:02)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_suburbs', 'ps2'] },
  ]);
  scene.build();
}

function enterPs1(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_suburbs';
  (s as any).menu_arg = 'ps1';
  qspCall(s, 'stat', '');
  scene.text('<center><h4>Insane asylum<h4></center>');
  scene.text('The inscription on the sign by the road reads, "Closed to the public".');
  if ((!((s as any).psiklik ?? 0))) {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/city/suburb/asylum0.jpg" ></center>`);
  }
  if (((s as any).psiklik ?? 0) === 1) {
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/city/suburb/asylum1.jpg" ></center>`);
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_suburbs', 'start'] },
  ]);
  scene.build();
}

function enterPs2(s: GameState, scene: SceneBuilder): void {
  (s as any).menu_loc = 'city_suburbs';
  (s as any).menu_arg = 'ps2';
  qspCall(s, 'stat', '');
  scene.text('<center><h4>An old abandoned building<h4></center>');
  scene.img('images/locations/city/suburb/abandoned.jpg');
  scene.text('An abandoned building that spoils the local communities appearance and intimidates local residents.');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['city_suburbs', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'public_outdoors';
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'ps1':
      enterPs1(s, scene);
      break;
    case 'ps2':
      enterPs2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_suburbs: LocationDef = {
  name: 'city_suburbs',
  title: '<center><h4>Elite settlement<h4></center>',
  region: 'city',
  locationType: 'public_outdoors',
  enter: enter,
};
