import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'rolanapt', 'home');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  scene.text('You walk up to the front door and knock.');
  if (((s as any).hour ?? 0) >= 23) {
    scene.text('It\'s too late in the day to visit Mr. Matveev');
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  } else {
    scene.text('Mr. Matveev is probably at work.');
    if (((s as any).newbath ?? 0) === 1  &&  ((s as any).rolanworker ?? 0) === 3  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] >= 2  &&  ((s as any).RolanLoc ?? 0)?.[String((s as any).hour ?? 0)] <= 8) {
      scene.text('You can\'t wait to see Rolan\'s face.');
      scene.actions([
        { label: 'Ring the doorbell', goto: ['rolanbath', 'surprise'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/resident/apartment/aptrolan/rolanwelcome.jpg');
      // TODO-QSP: dynamic text: The door opens, "Welcome, Miss <<$pcs_lastname>>, here, take a seat."
      scene.text(`The door opens, "Welcome, Miss ${((s as any).pcs_lastname ?? 0)}, here, take a seat."`);
      scene.text('No one answers. Rolan is not home.');
      scene.actions([
        { label: 'Enter', goto: ['rolanapt', 'hallway'] },
        { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Move away from the door', goto: ['pav_complex', 'start'] },
    ]);
  }
  scene.build();
}

export const rolanapt: LocationDef = {
  name: 'rolanapt',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'private',
  locclass: 'kitr',
  description: ['You walk up to the front door and knock.'],
  enter: enter,
};
