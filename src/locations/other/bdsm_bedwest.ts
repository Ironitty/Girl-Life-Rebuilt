import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterMaster(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bdsm_bedwest', 'check_master_events');
  qspCall(s, 'core_library', 'setloc', 'bdsm_bedwest', 'master');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/masterbed.jpg');
  scene.text('Master bedroom');
  scene.actions([
    { label: 'Go to the landing', goto: ['bdsm_landing', ''] },
  ]);
  scene.build();
}

function enterCheckMasterEvents(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 100) + 0;
  if (((s as any).temp_rand ?? 0) < 3) {
    scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_1'] }]);
  } else {
    if (((s as any).temp_rand ?? 0) < 6) {
      scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_2'] }]);
    } else {
      if (((s as any).temp_rand ?? 0) < 9) {
        scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_3'] }]);
      } else {
        if (((s as any).temp_rand ?? 0) < 12) {
          if (((s as any).bdsmclub ?? 0)?.['role'] === 'sub') {
            scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'master_event_4'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterMasterEvent_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand3.mp4');
  scene.text('You see a submissive woman in lingerie and on a leash, she appears to have earned herself a treat from a dominant man in a suit.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedwest', 'master'] },
  ]);
  scene.build();
}

function enterMasterEvent_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/bedrand7.mp4');
  scene.text('A dominant woman is being pleasured by her sub.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedwest', 'master'] },
  ]);
  scene.build();
}

function enterMasterEvent_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_pun4.mp4');
  scene.text('Ooo, a spanking, someone\'s been a bad girl.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedwest', 'master'] },
  ]);
  scene.build();
}

function enterMasterEvent_4(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'pain', '', 4, 'asscheeks', 'spank');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/spank\'+rand(1, 2)+\'.mp4');
  scene.text('As you are walking into the bedroom you accidentally bump into a man walking out. Before you can even say a word he grabs you by the arm. "Watch where you are going little girl."');
  scene.text('You meekly nod your head. "Sorry, I will be more careful in the future."');
  scene.text('"You don\'t sound very sorry, I think I need to teach you a lesson." With that he pulls you into the room and bares your ass, then he pulls off his belt and spanks you until tears are running down your face.');
  scene.text('Once he believes you learned your lesson he leaves, leaving you behind to rub your sore ass.');
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedwest', 'master'] },
  ]);
  scene.build();
}

function enterGuest(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bdsm_bedwest', 'check_guest_events');
  qspCall(s, 'core_library', 'setloc', 'bdsm_bedwest', 'guest');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/beda.jpg');
  scene.text('Guest bedroom');
  scene.actions([
    { label: 'Go to the landing', goto: ['bdsm_landing', ''] },
  ]);
  scene.build();
}

function enterCheckGuestEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 0) < 96) {
    // TODO-QSP: exit
  }
  scene.actions([{ label: 'Continue', goto: ['bdsm_bedwest', 'guest_event_<<rand(1, 2)>>'] }]);
  scene.build();
}

function enterGuestEvent_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_bound_d1.jpg');
  scene.text('A submissive woman is being tied to a bed by a dominant man.');
  qspCall(s, 'arousal', 'voyeur', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedwest', 'guest'] },
  ]);
  scene.build();
}

function enterGuestEvent_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/suburb/bdsm_club/sex/crossdressfuck.mp4');
  scene.text('You peek in the room when you hear grunts coming from it.');
  scene.text('Inside you a man wearing women\'s clothes being fucked by his mistress wearing a strap-on.');
  qspCall(s, 'arousal', 'voyeur_sex', 5);
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Return', goto: ['bdsm_bedwest', 'guest'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'master':
      enterMaster(s, scene);
      break;
    case 'check_master_events':
      enterCheckMasterEvents(s, scene);
      break;
    case 'master_event_1':
      enterMasterEvent_1(s, scene);
      break;
    case 'master_event_2':
      enterMasterEvent_2(s, scene);
      break;
    case 'master_event_3':
      enterMasterEvent_3(s, scene);
      break;
    case 'master_event_4':
      enterMasterEvent_4(s, scene);
      break;
    case 'guest':
      enterGuest(s, scene);
      break;
    case 'check_guest_events':
      enterCheckGuestEvents(s, scene);
      break;
    case 'guest_event_1':
      enterGuestEvent_1(s, scene);
      break;
    case 'guest_event_2':
      enterGuestEvent_2(s, scene);
      break;
    default:
      enterMaster(s, scene);
      break;
  }
}

export const bdsm_bedwest: LocationDef = {
  name: 'bdsm_bedwest',
  title: 'Master bedroom',
  region: 'other',
  locationType: 'private',
  locclass: 'bedr',
  description: ['Master bedroom'],
  enter: enter,
};
