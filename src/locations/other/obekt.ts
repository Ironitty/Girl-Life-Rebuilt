import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'obekt', '');
  (s as any).location_type = 'secluded';
  qspCall(s, 'stat', '');
  scene.text('<center><h4>An object</h4></center>');
  scene.img('images/locations/construction/obekt.jpg');
  scene.text('The construction work has stopped and there is complete silence, the only person there is the guard walking around.');
  if (qspFunc(s, 'car_funcs', 'is_here')) {
    // TODO-QSP: dynamic text: The <a href="exec:gs ''carF'', ''start''"> <<$car[''name'']>></a> is standing in...
    scene.text(`The <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027carF/u0027, /u0027start/u0027); return false;"> ${((s as any).car ?? 0)?.['name'] ?? ''}</a> is standing in the parking.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the road', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '16'] },
    { label: 'Sneak into the construction site', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).obekt ?? 0)?.['open'] === 0) {
      if (((st as any).obekt ?? 0)?.['bil'] === 0) {
        ((st as any).obekt = (st as any).obekt ?? {})['bil'] = 1;
        scene.text('Before you\'re able to enter, you hear a voice asking you what you\'re doing. It\'s the guard that caught you. He points towards the direction you should be heading instead.');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        qspGoto(st, 'obekt', 'obekt2');
      }
    }
  } },
  ]);
  scene.build();
}

function enterObekt2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'obekt2', '');
  (s as any).location_type = 'secluded';
  qspCall(s, 'stat', '');
  scene.text('<center><h4>An object</h4></center>');
  scene.img('images/locations/construction/obekt.jpg');
  scene.text('There is not much to see at the construction site, only a trailer where a guard sits. The entrance is closed…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the construction site', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', ''] },
  ]);
  scene.build();
}

function enterDungeon0(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pre/shared/dunpre.jpg');
  scene.text('The man-made cave in depth which shows the door.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get out of the dungeon', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'obekt2'] },
    { label: 'Enter the door', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon1'] },
  ]);
  scene.build();
}

function enterDungeon1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pre/shared/dunpre1.jpg');
  scene.text('Quite large and deserted room in which there is nothing but a bunch of bones in the corner.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Retreat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon0'] },
    { label: 'Advance', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon2'] },
  ]);
  scene.build();
}

function enterDungeon2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pre/shared/dunpre2.jpg');
  scene.text('Dilapidated gallery in the recesses of which are visible doors to other rooms.');
  if (((s as any).obekt ?? 0)?.['svitokRTS'] === 1) {
    // TODO-QSP: exit
  }
  if (((s as any).obekt ?? 0)?.['openstateDM2'] === 2) {
    qspGoto(s, 'obekt', 'dungeon5');
    scene.actions([
      { label: 'Sign in third room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit from the gallery', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon1'] },
    { label: 'Sign in 1yu room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon3'] },
    { label: 'Sign in 2w room', handler: (st: GameState) => {
    if (((st as any).obekt ?? 0)?.['openstateDM1'] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + (5);
      qspGoto(st, 'obekt', 'dungeon4');
    } else {
      if (((st as any).obekt ?? 0)?.['openstateDM1'] === 0) {
        // TODO-QSP: :markanotherrand
        ((st as any).obekt = (st as any).obekt ?? {})['DMN'] = '' + (String(String(10000 + (Math.floor(Math.random() * 10000) + 0))).slice((2)-1, ((2)-1)+(4))) + '';
        if (((st as any).obekt ?? 0)?.['DMN'] === ((String(((st as any).obekt ?? 0)?.['DMN']).slice((2)-1))) + ((String(((st as any).obekt ?? 0)?.['DMN']).slice((1)-1, ((1)-1)+(1))))) {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '8809') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '7111') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '2172') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '3213') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '7662') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '9312') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '8193') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '8096') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '7756') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '6855') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '9881') {
          // TODO-QSP: jump 'markanotherrand'
        }
        if (((st as any).obekt ?? 0)?.['DMN'] === '5531') {
          // TODO-QSP: jump 'markanotherrand'
        }
        ((st as any).obekt = (st as any).obekt ?? {})['i'] = 1;
        ((st as any).obekt = (st as any).obekt ?? {})['numdmr'] = 0;
        // TODO-QSP: :markdnm
        if (((String('69').indexOf(String((String(((st as any).obekt ?? 0)?.['DMN']).slice((((st as any).obekt ?? 0)?.['i'])-1, ((((st as any).obekt ?? 0)?.['i'])-1)+(1)))))) + 1) > 0) {
          ((st as any).obekt = (st as any).obekt ?? {})['numdmr'] = ((st as any).obekt['numdmr'] ?? 0) + (1);
        } else {
          if ((String(((st as any).obekt ?? 0)?.['DMN']).slice((((st as any).obekt ?? 0)?.['i'])-1, ((((st as any).obekt ?? 0)?.['i'])-1)+(1))) === '8') {
            ((st as any).obekt = (st as any).obekt ?? {})['numdmr'] = ((st as any).obekt['numdmr'] ?? 0) + (2);
          }
        }
        ((st as any).obekt = (st as any).obekt ?? {})['i'] = ((st as any).obekt['i'] ?? 0) + (1);
        if (((st as any).obekt ?? 0)?.['i'] < 5) {
          // TODO-QSP: jump 'markdnm'
        }
        ((st as any).obekt = (st as any).obekt ?? {})['numberOSDM'] = window.prompt((((st as any).obekt ?? 0)?.['DMN']) + " >= ?") ?? '';
        if (((st as any).obekt ?? 0)?.['numberOSDM'] < 0  ||  ((st as any).obekt ?? 0)?.['numberOSDM'] >= 9  ||  ((st as any).obekt ?? 0)?.['numberOSDM'] !== ((st as any).obekt ?? 0)?.['numdmr']) {
        } else {
          ((st as any).obekt = (st as any).obekt ?? {})['openstateDM1'] = 1;
        }
        qspGoto(st, 'obekt', 'dungeon2');
      }
    }
  } },
  ]);
  scene.build();
}

function enterDungeon3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pre/shared/dunpre3.jpg');
  scene.text('The room in which the middle stands a stone dais on which are various dusty bottles.');
  scene.text('Scrawled on the wall of what is <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obekt/u0027, /u0027dungeon3_labels/u0027); return false;">signs</a>.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon2'] },
  ]);
  scene.build();
}

function enterDungeon3Labels(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('8809 = 6');
  scene.text('7111 = 0');
  scene.text('2172 = 0');
  scene.text('6666 = 4');
  scene.text('1111 = 0');
  scene.text('3213 = 0');
  scene.text('7662 = 2');
  scene.text('9312 = 1');
  scene.text('0000 = 4');
  scene.text('2222 = 0');
  scene.text('3333 = 0');
  scene.text('5555 = 0');
  scene.text('8193 = 3');
  scene.text('8096 = 5');
  scene.text('7777 = 0');
  scene.text('9999 = 4');
  scene.text('7756 = 1');
  scene.text('6855 = 3');
  scene.text('9881 = 5');
  scene.text('5531 = 0');
  scene.text('Have a smart sense in such tomfoolery, because often clever fool walks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from labels', goto: ['obekt', 'dungeon3'] },
  ]);
  scene.build();
}

function enterDungeon4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pre/shared/dunpre4.jpg');
  scene.text('Small room in which there are what that <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obekt/u0027, /u0027dungeon4_drums/u0027); return false;">Drums</a>.');
  if (((s as any).obekt ?? 0)?.['openstateDM2'] === 1) {
    scene.text('In another barrel you see a device where you can enter numbers.');
    scene.actions([
      { label: 'Enter the numbers', handler: (st: GameState) => {
    ((st as any).obekt = (st as any).obekt ?? {})['numberOSDM2'] = window.prompt("12, 1, 1, 1, 2, 1, 3, ?, ?, ?, ?") ?? '';
    if (((st as any).obekt ?? 0)?.['numberOSDM2'] === 1415) {
      ((st as any).obekt = (st as any).obekt ?? {})['openstateDM2'] = 2;
    }
    qspCall(st, 'array', 'remove_element', 'dungeon', 'numberOSDM2');
    qspGoto(st, 'obekt', 'dungeon4');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon2'] },
  ]);
  scene.build();
}

function enterDungeon4Drums(s: GameState, scene: SceneBuilder): void {
  if (((s as any).obekt ?? 0)?.['openstateDM2'] === 0) {
    ((s as any).obekt = (s as any).obekt ?? {})['openstateDM2'] = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('Chimes hear soon reconcile those who quarrel.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from the barrel', goto: ['obekt', 'dungeon4'] },
  ]);
  scene.build();
}

function enterDungeon5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pre/shared/dunpre5.jpg');
  scene.text('The room in which the middle, sitting on a stone throne cobwebbed skeleton.');
  if (((s as any).obekt ?? 0)?.['svitokRTS'] === 0) {
    scene.text('In the hands of a skeleton lying <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027obekt/u0027, /u0027dungeon5_scroll/u0027); return false;">scroll</a>.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['obekt', 'dungeon2'] },
  ]);
  scene.build();
}

function enterDungeon5Scroll(s: GameState, scene: SceneBuilder): void {
  ((s as any).obekt = (s as any).obekt ?? {})['svitokRTS'] = 1;
  ((s as any).obekt = (s as any).obekt ?? {})['heart'] = ((s as any).obekt['heart'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.text('You picked up the scroll and he crumbled. As if you breathed in the wind. You listen to the feelings and understand that you have something changed. You feel like somewhere, as if in another dimension another beating heart belongs to you, which will die for you in battle.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away', goto: ['obekt', 'dungeon5'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'obekt2':
      enterObekt2(s, scene);
      break;
    case 'dungeon0':
      enterDungeon0(s, scene);
      break;
    case 'dungeon1':
      enterDungeon1(s, scene);
      break;
    case 'dungeon2':
      enterDungeon2(s, scene);
      break;
    case 'dungeon3':
      enterDungeon3(s, scene);
      break;
    case 'dungeon3_labels':
      enterDungeon3Labels(s, scene);
      break;
    case 'dungeon4':
      enterDungeon4(s, scene);
      break;
    case 'dungeon4_drums':
      enterDungeon4Drums(s, scene);
      break;
    case 'dungeon5':
      enterDungeon5(s, scene);
      break;
    case 'dungeon5_scroll':
      enterDungeon5Scroll(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const obekt: LocationDef = {
  name: 'obekt',
  title: '<center><h4>An object</h4></center>',
  region: 'other',
  locationType: 'secluded',
  description: ['The construction work has stopped and there is complete silence, the only person there is the guard walking around.'],
  enter: enter,
};
