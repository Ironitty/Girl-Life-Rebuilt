import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  (s as any).detention_set = 0;
  (s as any).i = Math.floor(Math.random() * 100) + 1;
  if (((((s as any).grupTipe ?? 0) === 3  &&  ((s as any).i ?? 0) <= 20)  ||  (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).i ?? 0) <= 30)  ||  ((s as any).i ?? 0) <= 10)  &&  ((s as any).pantyworntype ?? 0) !== 'none') {
  } else {
    (s as any).demerit = ((s as any).demerit ?? 0) - (20);
    (s as any).grupvalue[3] = ((s as any).grupvalue[3] ?? 0) - (2);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (2);
    qspCall(s, 'archetypes', 'gain', 'punk', 'small', 'Served detention', 7);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/detention/detention.jpg');
    scene.text('You arrive back at school on a Saturday - it sucks. Considering you spent all week here already, what could be worse than wasting part of a Saturday in school too? You walk into the library and take a seat at one of the tables.');
    scene.text('A few of the other students are here and by the time the bell rings, a couple more have trickled in. The teacher is the last to come. He sits behind his desk and, one by one, calls out the names on his list to make sure everyone who\'s supposed to be here is present.');
    scene.text('You confirm your presence, cursing the fact that you\'re stuck here. Once he finishes, he tells everyone to study quietly and use their time to "do homework or whatever"; it would appear he doesn\'t want to be here anymore than the rest of you.');
    scene.text('After giving somebody who was talking a deathly stare that quietens the room, the teacher pulls out a laptop and starts typing away, ignoring you and probably counting the minutes until he can go home, just like you.');
    (s as any).i = Math.floor(Math.random() * 100) + 1;
    if (((s as any).i ?? 0) <= 10) {
      scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Chat with <<$rand_girl>>'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Chat with <<$rand_boy>>'] }]);
      if (((s as any).i ?? 0) <= 25) {
        scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Help friends in need'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'strange'] }]);
        if (((s as any).i ?? 0) <= 40) {
          scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'company'] }]);
        } else {
          if (((s as any).Ivanov_toilet ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['gschool_detention', 'Ivanov'] }]);
          } else {
            scene.actions([
              { label: 'Look around', goto: ['gschool_detention', 'sitting'] },
            ]);
          }
          if (((s as any).i ?? 0) <= 50) {
            if ((((s as any).anushkaQW ?? 0)?.['toilet'] === 1  ||  ((s as any).npc_rel ?? 0)?.['A144'] > 50)) {
              scene.actions([{ label: 'Continue', goto: ['anushka', 'plan'] }]);
            } else {
              scene.actions([
                { label: 'Look around', goto: ['gschool_detention', 'sitting'] },
              ]);
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['anushka', 'temptation'] }]);
            scene.actions([
              { label: 'Look around', goto: ['gschool_detention', 'sitting'] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

export const gschool_detention: LocationDef = {
  name: 'gschool_detention',
  title: 'Detention',
  region: 'other',
  enter: enter,
};
