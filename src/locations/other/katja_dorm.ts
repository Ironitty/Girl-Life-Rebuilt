import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'katja_dorm', 'start');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A14']} 'S Dorm Room</b></center>`);
  scene.img('images/characters/pavlovsk/school/girl/katja/uni/dorm/dorm_room.jpg');
  // TODO-QSP: dynamic text: The dorm room has two beds. The one on the left belongs to ' + iif( sofiaQW['kno...
  scene.text('The dorm room has two beds. The one on the left belongs to \' + iif( sofiaQW[\'know\'] = 0, \'Katja\'s roommate\', \'Sofia\') + \' while the one on the right is Katja\'s. Above Katja\'s bed is a full bookcase, and the wall is plastered with posters and notes.');
  // TODO-QSP: dynamic text: Her table is likewise full of stuff; in the middle of it sits her laptop. ' + ii...
  scene.text('Her table is likewise full of stuff; in the middle of it sits her laptop. \' + iif( sofiaQW[\'know\'] = 0, \'Her roommate\'s\', \'Sofia\') + \' side of the room is a lot less cluttered.');
  if (((s as any).locat ?? 0)?.['katja'] === 31) {
    scene.text('Katja is sitting at her desk.');
    scene.actions([
      { label: 'Talk to Katja', goto: ['katja_dorm', 'talk'] },
    ]);
  } else {
    scene.text('Katja is asleep, so you should not disturb her.');
    if (((s as any).locat ?? 0)?.['katja'] === 22) {
      scene.text('Katja is getting dressed and doing her makeup. She doesn\'t want to be disturbed right now.');
    } else {
      if (((s as any).minut ?? 0) < 50) {
        scene.text('Katja is preparing to go to class, collecting the things she needs.');
        scene.actions([
          { label: 'Talk to Katja', goto: ['katja_chat', 'chat'] },
        ]);
      } else {
        scene.text('Katja is heading out the door to class and has no time to talk.');
      }
      if (((s as any).locat ?? 0)?.['katja'] === 35) {
        scene.text('Katja is moving around getting dressed up, seemingly preparing for a night out.');
        scene.actions([
          { label: 'Talk to Katja', goto: ['katja_party', 'going_out'] },
        ]);
      } else {
        scene.text('Katja is moving around the room while setting up her laptop.');
        if (((s as any).locat ?? 0)?.['katja'] === 52) {
          scene.text('Katja is sitting on her bed, having set up her laptop so she can watch a film.');
          scene.actions([
            { label: 'Talk to Katja', goto: ['katja_dorm', 'movie_talk2'] },
          ]);
        } else {
          scene.text('Katja is not in her room.');
        }
        scene.actions([
          { label: 'Talk to Katja', goto: ['katja_dorm', 'movie_talk1'] },
          { label: 'Leave Katja\'s dorm room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
  }, goto: ['uni_dorm', 'second_floor'] },
        ]);
      }
    }
  }
  scene.build();
}

export const katja_dorm: LocationDef = {
  name: 'katja_dorm',
  title: '<<$npc_firstname[\'A14\']>> \'S Dorm Room',
  region: 'other',
  locationType: 'public_indoors',
  locclass: 'livingr',
  description: ['Katja is sitting at her desk.'],
  enter: enter,
};
