import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).nerdstudynight['start_time'] = ((s as any).totminut ?? 0);
  (s as any).nerdstudynight['day'] = ((s as any).daystart ?? 0);
  scene.img('images/locations/pavlovsk/community/library/nerdsstudy/nerds_study\' + rand(1, 5) + \'.jpg');
  if (((s as any).grupTipe ?? 0) === 3) {
    scene.text('You arrive at the library and see all of your fellow nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. You sit down with your fellow students and start studying.');
  } else {
    scene.text('You arrive at the library and see the nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. When they see you, they all go quiet, they look back and forth a bit and finally Feofan speaks up. "Do you need something?"');
    scene.text('You smile to him and the rest. "My grades are not as good as I would like, so I thought I would come study with the smartest kids in school."');
    scene.text('They exchange looks again and this time Artem speaks up. "Yeah ok, but we are here to study." Then they go back to studying among each other.');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 250) {
      scene.text('You arrive at the library and see the nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. When they see you, they all go quiet, they look back and forth a bit and finally Feofan speaks up. "Do you need something?"');
      scene.text('You smile to him and the rest. "My grades are not as good as I would like, so I thought I would come study with the smartest kids in school."');
      scene.text('They exchange looks again and this time they huddle up a bit and start whispering back and forth it seems like they are arguing but finally Artem looks up at you and says. "Yeah ok, we know your reputation and we want no part of it, we are here to study and that\'s it, so no funny business." Then they go back to studying among each other.');
    } else {
      scene.text('You arrive at the library and see the nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. When they see you, they all go quiet, they look back and forth a bit and finally Feofan speaks up. "Do you need something?"');
      scene.text('You smile to him and the rest. "My grades are not as good as I would like, so I thought I would come study with the smartest kids in school."');
      scene.text('They exchange looks again and this time Artem speaks up. "We don\'t want any trouble."');
      scene.text('You give them a reassuring smile. "I promise I am not here to cause problems, I just need help with my school work."');
      scene.text('They exchange looks and a few of them nod before Feofan speaks up again. "Ok sure you can study with us."');
    }
    scene.actions([
      { label: 'Leave', goto: ['pav_library', ''] },
      { label: 'Study', goto: ['pav_library_nerdstudy', 'nerd_study_night1'] },
      { label: 'Chat', goto: ['pav_library_nerdstudy', 'nerd_study_night2'] },
    ]);
  }
  scene.build();
}

export const pav_library_nerdstudy: LocationDef = {
  name: 'pav_library_nerdstudy',
  title: 'You arrive at the library and see all of your fellow nerds h',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['You arrive at the library and see all of your fellow nerds have already gathered around one of the tables. Some are grabbing some books or looking up things on their laptop, while others are sitting and chatting before the study session begins. You sit down with your fellow students and start studying.'],
  enter: enter,
};
