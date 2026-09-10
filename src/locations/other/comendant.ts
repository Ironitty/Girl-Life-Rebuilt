import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterPos1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hostel owner</b></center>');
  scene.img('images/locations/pavlovsk/hostel/comendant.jpg');
  scene.text('You see a man standing at the counter doing some work. He\'s the owner and is very friendly.');
  scene.actions([
    { label: 'Become acquainted', goto: ['comendant', 'pos2'] },
  ]);
  scene.build();
}

function enterPos2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).hostel['status'] = 1;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hostel owner</b></center>');
  scene.img('images/locations/pavlovsk/hostel/comendant.jpg');
  scene.text('"Good afternoon! I was just employeed by the school and they\'ve sent me over here until they find a place for me to live. They\'ve said to give you these documents…" you say.');
  scene.text('The man looks up not saying anything and glances over the documents, "Yes, everything seems to be in order. Welcome to my little hostel. My name is Peter, but you can call me Petya."');
  // TODO-QSP: dynamic text: "<<$pcs_firstname>>." you reply.
  scene.text(`"${((s as any).pcs_firstname ?? 0)}." you reply.`);
  scene.text('"A teacher, eh. Those kids sure are lucky to have such a good-looking teacher." he compliments you.');
  scene.text('You blush a little and politely thank him for the compliment.');
  scene.text('"Here are your keys, the room number is on the key fob. You can find the kitchen and bathroom at the end of the corridor, although I should warn you though the bathroom pipes are really bad. And if you have any problems, please come and see me." he says smiling.');
  scene.actions([
    { label: 'Go to your room', goto: ['dom_gor', ''] },
  ]);
  scene.build();
}

function enterPos3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).hostel['status'] = 3;
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hostel owner</b></center>');
  scene.img('images/locations/pavlovsk/hostel/comendant_what.jpg');
  scene.text('"Hello! Just wanted to let you know, the pipes in the bathroom are broken again. The water is turned off so could you take a look at it when you have the time?" you ask.');
  scene.text('He lets out a sigh, "Again…"');
  scene.text('You nod your head, "Yes, I was going for a shower and tried to turn on the water but nothing…"');
  scene.text('"I\'ll immediately call a plumber. Hopefully it will get fixed soon." he replies.');
  scene.text('"I hope so too…" you answer.');
  scene.text('"I\'ll let him know that right away, thank you for telling me that and sorry for the inconvenience."');
  scene.text('As you\'re moving away from the counter, <i>What a strange guy…</i> you think to yourself.');
  scene.actions([
    { label: 'Return to the room', goto: ['dom_gor', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pos1':
      enterPos1(s, scene);
      break;
    case 'pos2':
      enterPos2(s, scene);
      break;
    case 'pos3':
      enterPos3(s, scene);
      break;
    default:
      enterPos1(s, scene);
      break;
  }
}

export const comendant: LocationDef = {
  name: 'comendant',
  title: 'Hostel owner',
  region: 'other',
  description: ['You see a man standing at the counter doing some work. He\'s the owner and is very friendly.'],
  enter: enter,
};
