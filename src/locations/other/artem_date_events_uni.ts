import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstdate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
  scene.text('You enjoy a pleasant walk around the quad while making small talk with Artem.');
  scene.text('After a while, you end up near the small movie theater on campus. Artem\'s eyes light up when he sees it. "Hey, let\'s go see a movie!"');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Sounds like fun', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/shared/cinema/kino_${Math.floor(Math.random() * 3) + 1}.jpg`);
    scene.text('You enter the movie theater with Artem. After he buys the tickets and some popcorn, candy and soda for the two of you, you head into the dark theater and find some seats in the back row to watch the movie.');
    scene.actions([
      { label: 'Leave the theater', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('When the movie ends, you and Artem leave the theater and he offers to walk you back to the dorms.');
    // TODO-QSP: dynamic text: Arriving outside your dorm building, Artem stops and looks at you. "I had fun, <...
    scene.text(`Arriving outside your dorm building, Artem stops and looks at you. "I had fun, ${((s as any).pcs_nickname || '')}."`);
    scene.text('You smile at him. "Me too."');
    scene.text('He smiles widely. "Great! Maybe we can do it again some time?"');
    scene.text('You nod. "Maybe. We\'ll see."');
    scene.text('He smiles and nods. "Okay, I better get home. Talk to you later."');
    scene.text('"Bye Artem," you reply and he heads to his dorm room.');
    scene.actions([
      { label: 'Go back to the dorms', goto: ['uni_dorm', ''] },
    ]);
  } },
    ]);
  } },
    { label: 'Just keep walking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img(`images/locations/shared/park/walk_${Math.floor(Math.random() * 2) + 1}.jpg`);
    scene.text('You don\'t really feel like going to the cinema. "Let\'s just enjoy the walk we\'re on."');
    scene.text('Artem is happy enough to just spend time with you, regardless of what the two of you are doing. He nods as you continue on your walk, talking about everyday things. After a while, he checks his watch. "We should be getting back. I\'ll walk you to your dorm."');
    // TODO-QSP: dynamic text: Once you're outside your dorm room, Artem stops and looks at you. "I had fun, <<...
    scene.text(`Once you're outside your dorm room, Artem stops and looks at you. "I had fun, ${((s as any).pcs_nickname || '')}."`);
    scene.text('You smile at him. "Me too."');
    scene.text('He smiles widely. "Great! Maybe we can do it again some time?"');
    scene.text('You nod. "Maybe. We\'ll see."');
    scene.text('He smiles and nods. "Okay, I better get back. Talk to you later."');
    scene.text('"Bye Artem," you reply and he heads back to his dorm room.');
    scene.actions([
      { label: 'Go back to the dorms', goto: ['uni_dorm', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterArtemDate(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A2', 1);
  scene.actions([{ label: 'Continue', goto: ['artem_date_events_uni', 'firstdate'] }]);
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'firstdate':
      enterFirstdate(s, scene);
      break;
    case 'artem_date':
      enterArtemDate(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_date_events_uni: LocationDef = {
  name: 'artem_date_events_uni',
  title: 'You enjoy a pleasant walk around the quad while making small',
  region: 'other',
  enter: enter,
};
