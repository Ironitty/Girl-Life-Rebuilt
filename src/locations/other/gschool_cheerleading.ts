import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/afterschool/cheerleading/poster.jpg');
  scene.text('Walking through the hallway, you notice a poster saying that a spot has opened up on the school\'s cheerleading squad and that tryouts are being held after school today. The squad is ruled with an iron fist by Albina and is made up of only the most popular and athletic girls in school.');
  scene.text('However, this hasn\'t stopped some of the nerds from working out and even attending dancing lessons to try out for a spot, despite them spreading rumors about the squad, most of them sexual.');
  if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
    scene.text('You\'re just the kind of person that the squad is looking for and feel that Albina will heavily approve of you.');
  } else {
    scene.text('You know that Albina would judge you harshly since you\'re not a jock or part of the cool group.');
    if (((s as any).grupTipe ?? 0) === 5) {
      scene.text('You\'re an outcast. Albina wouldn\'t even look at you, never mind give you a chance. Would it even be worth trying?');
    }
    scene.actions([
      { label: 'Decide to give it a try', handler: (st: GameState) => {
    (s as any).cheerleadingQW['quest_stage'] = 1;
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('"I\'m one of them. They would be mad to not at least consider me! Those nerds and their rumors are just jealous losers!" you think to yourself as you decide to attend the tryouts and show them that you deserve that spot.');
    } else {
      scene.text('While you\'re not as athletically inclined and they have no respect for you, you decide that you\'re going to try anyway.');
      scene.text('"I\'ll show those stuck up bimbos that I can be as good as any one of them!" you tell yourself as you walk away with a steely confidence.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
      { label: 'This doesn\'t interest you', handler: (st: GameState) => {
    (s as any).cheerleadingQW['reject'] = ((s as any).daystart ?? 0);
    (s as any).cheerleadingQW['quest_stage'] = (-1);
    if (((s as any).grupTipe ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 2) {
      scene.text('Even though you\'re capable enough to try out, prancing around on the field to amuse people doesn\'t sound fun to you at all. You shake your head and continue on your way.');
    } else {
      scene.text('"Why would I ever want to join a group of skimpily dressed sluts prancing around a field for the amusement of perverts?" you think to yourself as you walk away in disgust.');
    }
    qspCall(s, 'gschool_events', 'leave_break_events');
  } },
    ]);
  }
  scene.build();
}

export const gschool_cheerleading: LocationDef = {
  name: 'gschool_cheerleading',
  title: '(Last chance to join cheerleading)',
  region: 'other',
  locationType: 'event',
  description: ['Walking through the hallway, you notice a poster saying that a spot has opened up on the school\'s cheerleading squad and that tryouts are being held after school today. The squad is ruled with an iron fist by Albina and is made up of only the most popular and athletic girls in school.'],
  enter: enter,
};
