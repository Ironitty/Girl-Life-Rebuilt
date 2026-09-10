import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKendraRoomStart(s: GameState, scene: SceneBuilder): void {
  (s as any).reccoldorm = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/island/university/dorm/kendraroom/room.jpg');
  scene.text('There are two beds, one on each side of the window, along with various pictures and posters hanging on both sides of the room. A string of large lights hang from one of the walls and just down from the beds on each side are two desks, both decorated with slight differences. A small couch and two wardrobes are near the door.');
  scene.text('As you walk in the room, she follows behind you. "What should I do with you today, slave?" You know it\'s a rhetorical question and she really doesn\'t want you to answer. As you turn to look at her, you can tell she has something in mind that will likely either humiliate you or turn you into her submissive pet. "Maybe I\'ll have you do my nails, or maybe lick my ass? Perhaps I\'ll fuck you, or find someone to fuck you. So many choices…"');
  scene.actions([
    { label: 'I should get going', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'loathe');
    (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big84.jpg');
    scene.text('You look over at the clock. "I should really get going. Sorry to have bothered you."');
    scene.text('She looks at you with a very annoyed glare. "What is this? I don\'t have time for games. Don\'t come back unless you\'re serious about playing!" She grabs you by the arm and shoves you out the door, closing it behind you.');
    scene.actions([
      { label: 'Go to the eighth floor', goto: ['uni_dorm', 'eighth_floor'] },
    ]);
  } },
    { label: 'Submit to your mistress', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A84', 'like');
    (s as any).kendraQW['sub'] = ((s as any).kendraQW['sub'] ?? 0) + (1);
    qspCall(s, 'stat', '');
  }, goto: ['kendra', 'kendra_room_routing'] },
  ]);
  scene.build();
}

function enterKendraRoomRouting(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kendraQW ?? 0)?.['dom'] < 11) {
    // TODO-QSP: gt 'kendra', 'kendra_room_'+kendraQW['dom']
  } else {
    scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_couch'] }]);
    if (((s as any).kendraQW ?? 0)?.['dom'] === 13) {
      scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_bed'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_couch_strap'] }]);
      if (((s as any).kendraQW ?? 0)?.['dom'] === 15) {
        scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_bed_strap'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_gloryhole'] }]);
        if (((s as any).kendraQW ?? 0)?.['dom'] === 17) {
          scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_gloryhole'] }]);
        } else {
          (s as any).kendraQW['dom'] = Math.floor(Math.random() * 18) + 0;
          scene.actions([{ label: 'Continue', goto: ['kendra', 'kendra_room_routing'] }]);
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'kendra_room_start':
      enterKendraRoomStart(s, scene);
      break;
    case 'kendra_room_routing':
      enterKendraRoomRouting(s, scene);
      break;
    default:
      enterKendraRoomStart(s, scene);
      break;
  }
}

export const kendra: LocationDef = {
  name: 'kendra',
  title: 'There are two beds, one on each side of the window, along wi',
  region: 'other',
  locationType: 'event',
  description: ['There are two beds, one on each side of the window, along with various pictures and posters hanging on both sides of the room. A string of large lights hang from one of the walls and just down from the beds on each side are two desks, both decorated with slight differences. A small couch and two wardrobes are near the door.'],
  enter: enter,
};
