import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'core_library', 'setloc', 'JuliaMilHome', 'home');
  (s as any).popolaini = 0;
  (s as any).saunaYouRoom = 0;
  (s as any).boycherdaksex = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  if (((s as any).NatashaHomeDay ?? 0) !== ((s as any).daystart ?? 0)) {
    (s as any).NatashaHomeDay = ((s as any).daystart ?? 0);
    (s as any).NatashaLoc = 0;
  }
  if (((s as any).juliaQW ?? 0)?.['home_unlocked'] === 0) {
    (s as any).juliaQW['home_unlocked'] = 1;
  }
  scene.img('images/locations/pavlovsk/resident/apartment/aptdoor.jpg');
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) < 15  &&  ((s as any).week ?? 0) < 6) {
    scene.text('You knock on the door, but no one comes to answer. Julia must not be home.');
  } else {
    scene.text('It\'s too late in the day to visit Julia.');
    if (((s as any).hour ?? 0) < 8) {
      scene.text('It\'s too early in the day to visit Julia.');
    } else {
      // TODO-QSP: dynamic text: You knock on the door. You hear footsteps in the apartment and sure enough, a fe...
      scene.text(`You knock on the door. You hear footsteps in the apartment and sure enough, a few seconds later Julia opens the door. "Oh, hi ${((s as any).pcs_nickname ?? 0)}! Come on in!"`);
      scene.actions([
        { label: 'Enter Julia\'s apartment', goto: ['JuliaMilHome', 'hallway'] },
      ]);
    }
  }
  scene.actions([
    { label: 'Leave', goto: ['pod_ezd', 'etaj_3'] },
  ]);
  scene.build();
}

export const JuliaMilHome: LocationDef = {
  name: 'JuliaMilHome',
  title: 'Entrance hall',
  region: 'other',
  locationType: 'bathroom',
  locclass: 'bedr',
  description: ['You knock on the door, but no one comes to answer. Julia must not be home.'],
  enter: enter,
};
