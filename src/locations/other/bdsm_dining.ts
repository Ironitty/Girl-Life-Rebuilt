import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'bdsm_dining', 'check_events');
  qspCall(s, 'core_library', 'setloc', 'bdsm_dining', '');
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/diningroom.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the Foyer', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

function enterCheckEvents(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 100) + 0) < 70) {
    // TODO-QSP: exit
  }
  scene.actions([{ label: 'Continue', goto: ['bdsm_dining', 'event_<<rand(1, 10)>>'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEvent_1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/maid_a8.jpg');
  scene.text('You see a maid bending over a table.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_2(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_b2.jpg');
  scene.text('You see a maid giving a man a blowjob.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_3(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_b6.mp4');
  scene.text('A submissive women is giving a man a blowjob.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_4(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_bound_e1.mp4');
  scene.text('Two dominant women are having fun with a bound and gagged submissive women.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_5(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_bound_e2.mp4');
  scene.text('Two dominant women are having fun with a bound and gagged submissive women.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_6(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/maid_mis3.mp4');
  scene.text('A dominant woman is trying to read a magazine while her sub pleasures her.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_7(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/suburb/bdsm_club/sex/tablepussy<<iif(rand(0, 1)=0, `);
  scene.text('A naked woman sits on the end of the table with her feet on it and her legs spread wide. A middle aged couple stand in front of her, the woman pointing at varies parts of the naked woman\'s pussy, apparently giving her husband an anatomy lesson on pussies and the proper way to pleasure them.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_8(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/locations/city/suburb/bdsm_club/sex/girltable${Math.floor(Math.random() * 5) + 1}.jpg`);
  scene.text('A woman is on all fours between two men sitting in chairs talking. There is a serving tray on her back with drinks and snacks on it.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_9(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/footstool.jpg');
  scene.text('A dominant woman has her legs propped up on a young mans back who is on all fours, while another young man sits and massages her feet.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_10(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/sex/spank\'+rand(1, 8)+\'.jpg');
  scene.text('A well dressed man has a young woman bent over his knees with her bare ass exposed, giving her a spanking. The sound from the flesh on flesh slaps carry some distance.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enterEvent_11(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/diningroom.jpg');
  scene.text('A group of women and men are sitting in chairs while they order two young women to strip naked and then change into different fetish clothing and then walk back and forth in them for a bit. Then they repeat the whole process again, a bit of a fetish clothing fashion show.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['bdsm_dining', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check_events':
      enterCheckEvents(s, scene);
      break;
    case 'event_1':
      enterEvent_1(s, scene);
      break;
    case 'event_2':
      enterEvent_2(s, scene);
      break;
    case 'event_3':
      enterEvent_3(s, scene);
      break;
    case 'event_4':
      enterEvent_4(s, scene);
      break;
    case 'event_5':
      enterEvent_5(s, scene);
      break;
    case 'event_6':
      enterEvent_6(s, scene);
      break;
    case 'event_7':
      enterEvent_7(s, scene);
      break;
    case 'event_8':
      enterEvent_8(s, scene);
      break;
    case 'event_9':
      enterEvent_9(s, scene);
      break;
    case 'event_10':
      enterEvent_10(s, scene);
      break;
    case 'event_11':
      enterEvent_11(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bdsm_dining: LocationDef = {
  name: 'bdsm_dining',
  title: 'You see a maid bending over a table.',
  region: 'other',
  locationType: 'private',
  enter: enter,
};
