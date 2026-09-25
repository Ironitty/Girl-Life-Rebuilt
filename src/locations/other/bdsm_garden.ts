import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGarden(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheckGardenEvents(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'core_library', 'setloc', 'bdsm_garden', 'garden');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/garden.jpg');
  scene.text('Extensive garden, meticulously designed and maintained. Split into different areas each with its own theme and inspiration.');
  scene.actions([
    { label: 'Go to the conservatory', goto: ['bdsm_conservatory', ''] },
    { label: 'Go to the garage', goto: ['bdsm_garden', 'garage'] },
  ]);
  scene.build();
}

function enterCheckGardenEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = (Math.floor(Math.random() * 100) + 0);
  if (((s as any).temp_rand ?? 0) < 5) {
    if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub'  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      qspGoto(s, 'bdsm_garden', 'gEV1');
    }
  } else {
    if (((s as any).temp_rand ?? 0) < 8) {
      qspGoto(s, 'bdsm_garden', 'garden_event_2');
    } else {
      if (((s as any).temp_rand ?? 0) < 11) {
        qspGoto(s, 'bdsm_garden', 'garden_event_3');
      } else {
        if (((s as any).temp_rand ?? 0) < 14) {
          if (((s as any).sunWeather ?? 0) === 1) {
            qspGoto(s, 'bdsm_garden', 'garden_event_4');
          }
        } else {
          if (((s as any).temp_rand ?? 0) < 17) {
            if (((s as any).sunWeather ?? 0) === 1) {
              qspGoto(s, 'bdsm_garden', 'garden_event_5');
            }
          }
        }
      }
    }
  }
  (s as any).temp_rand = undefined;
  scene.build();
}

function enterGardenEvent_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/garrand.mp4');
  scene.text('The gardener is fucking a sub, gagged and tied to a tree.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enterGardenEvent_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/uniform.jpg');
  scene.text('A strapping young dom is checking a sub is adhering to the dress code. Looks like she forgot her panties.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enterGardenEvent_4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/drink.jpg');
  scene.text('A dominant woman is forcing a naked man to drink from the fountain.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enterGardenEvent_5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/race.jpg');
  scene.text('A cluster of people are gathered around five women bent over in a row masturbating, you quickly realize everyone is betting on who will orgasm first. You briefly wonder if there is a prize for winning.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enterGEV1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/randgirl.jpg');
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.text('Another submissive woman approaches you and says, "If you are looking to earn a nice bonus, there is a group of older men at the outside dining table. If you strip off, go over to them and have sex with them, they will give you a load of cash."');
    scene.text('This isn\'t exactly the BDSM you come here for, but it is not breaking any rules and you have the choice.');
    scene.actions([
      { label: 'Strip and go meet the older men', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    qspGoto(st, 'bdsm_garden', 'gEV2');
  } },
    ]);
  } else {
    scene.text('Another submissive woman approaches you and says, "If you are looking to earn a nice bonus, there is a group of older men at the outside dining table. If you go over and have sex with them, they will give you a load of cash."');
    scene.text('This isn\'t exactly the BDSM you come here for, but it is not breaking any rules and you have the choice.');
    scene.actions([
      { label: 'Go and meet the older men', goto: ['bdsm_garden', 'gEV2'] },
    ]);
  }
  scene.actions([
    { label: 'Don\'t go and see the older men', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enterGEV2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup1.mp4');
  scene.text('You walk over to the older men, they can\'t take their eyes of your beautiful naked body.');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'gEV3'] },
  ]);
  scene.build();
}

function enterGEV3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  (s as any).sexpartkno = 1;
  (s as any).cumprecheck = 1;
  qspCall(s, 'arousal_funcs', 'stretch', 'vaginal');
  (s as any).dick = (Math.floor(Math.random() * 10) + 12);
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup2.mp4');
  scene.text('Half of the men are already naked and probably asked the sub who spoke to you. You leave them no doubt as to your intentions and lead one of the men onto the table.');
  scene.text('You crawl on top of him and already aroused in anticipation, you quickly take him inside and start to grind.');
  qspCall(s, 'arousal', 'foreplay', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'gEV4'] },
  ]);
  scene.build();
}

function enterGEV4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup3.mp4');
  scene.text('You let the man go from under you and lie on your back. All of the men surround you and you do all you can to please them with your mouth and hands.');
  scene.text('Unseen hands rub your pussy and you start to feel the familiar sense of bliss, soon overtaken by a need to be filled.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'group');
  qspCall(s, 'arousal', 'hj', (-10), 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal_finger', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'gEV5'] },
  ]);
  scene.build();
}

function enterGEV5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup4.mp4');
  scene.text('"Fuck me." You moan to no particular man. The invite is soon accepted and as you continue to suck one of the men\'s cocks another pushes itself into your pussy.');
  qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'gEV6'] },
  ]);
  scene.build();
}

function enterGEV6(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup5.mp4');
  scene.text('Not wanting this to turn into a creampie party, you get yourself onto all fours and spend some time sucking on the cocks that you have otherwise been neglecting.');
  qspCall(s, 'arousal', 'bj', 10, 'sub', 'group');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'gEV7'] },
  ]);
  scene.build();
}

function enterGEV7(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup6.mp4');
  scene.text('Experience tells you that they are close to finishing and you lie back and tell them to finish on your face.');
  scene.text('Almost immediately the right side of your face receives a warm, sticky treat.');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'gEV8'] },
  ]);
  scene.build();
}

function enterGEV8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/grup7.mp4');
  scene.text('You remain in position lending a helping hand where needed and take another 6 cumshots to your face.');
  scene.text('As you reveal in your successful work, you realize for the first time that there were 7 men there.');
  scene.text(`You get up, still naked and your face covered in cum. The men have had their fun and are leaving. You find ${qspFunc(s, 'money', 'string_profit', 2000)} on the table.`);
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'arousal', 'hj', 2, 'sub', 'group');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'arousal', 'hj', 2, 'sub', 'group');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'arousal', 'hj', 2, 'sub', 'group');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'arousal', 'hj', 2, 'sub', 'group');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'arousal', 'hj', 2, 'sub', 'group');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'npcgeneratec', '0', 'Old Man', (Math.floor(Math.random() * 21) + 55));
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'arousal', 'hj', 2, 'sub', 'group');
  qspCall(s, 'cum_call', 'face', 'Old Man');
  qspCall(s, 'money', 'earn', 2000);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Continue', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enterGarage(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_garden', 'garage');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/garage.jpg');
  scene.text('The garage has many different expensive cars, the doors are shut and it is surprisingly warm.');
  scene.actions([
    { label: 'Go to reception', goto: ['bdsm_mansion', 'reception'] },
    { label: 'Go to the garden', goto: ['bdsm_garden', 'garden'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).location_type = 'private';
  const arg = s.locArg;
  switch (arg) {
    case 'garden':
      enterGarden(s, scene);
      break;
    case 'check_garden_events':
      enterCheckGardenEvents(s, scene);
      break;
    case 'garden_event_2':
      enterGardenEvent_2(s, scene);
      break;
    case 'garden_event_3':
      enterGardenEvent_3(s, scene);
      break;
    case 'garden_event_4':
      enterGardenEvent_4(s, scene);
      break;
    case 'garden_event_5':
      enterGardenEvent_5(s, scene);
      break;
    case 'gEV1':
      enterGEV1(s, scene);
      break;
    case 'gEV2':
      enterGEV2(s, scene);
      break;
    case 'gEV3':
      enterGEV3(s, scene);
      break;
    case 'gEV4':
      enterGEV4(s, scene);
      break;
    case 'gEV5':
      enterGEV5(s, scene);
      break;
    case 'gEV6':
      enterGEV6(s, scene);
      break;
    case 'gEV7':
      enterGEV7(s, scene);
      break;
    case 'gEV8':
      enterGEV8(s, scene);
      break;
    case 'garage':
      enterGarage(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_garden: LocationDef = {
  name: 'bdsm_garden',
  title: 'Extensive garden, meticulously designed and maintained. Spli',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
