import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak18.jpg');
  if (((s as any).ShowerIvan ?? 0) === 4  &&  ((s as any).centr ?? 0) === 1) {
    (s as any).centr = 2;
    scene.text('You enter the gym and see your coach talking to a strange man.');
    scene.actions([
      { label: 'Say hello to Coach', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak11.jpg');
    scene.text('After greeting Mikhail, an awkward silence follows because you don\'t know what to say.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what are you doing here?" Mikhail asks you in astonishment.
    scene.text(`"${((st as any).pcs_nickname || '')}, what are you doing here?" Mikhail asks you in astonishment.`);
    // TODO-QSP: dynamic text: "Well, I wanted to improve my physical fitness, and since the sports club doesn'...
    scene.text('"Well, I wanted to improve my physical fitness, and since the sports club doesn\'t open until 14:00, I figured it was worth the trip into the city to come here," you explain hastily.');
    // TODO-QSP: dynamic text: The coach looks at you with an approving nod, "That is good, <<$pcs_nickname>>."
    scene.text(`The coach looks at you with an approving nod, "That is good, ${((st as any).pcs_nickname || '')}."`);
    scene.text('The stranger smiles at you and says, "I am Guang. Your coach and I are old friends from when we used to compete against each other. He represented the people of the Soviet Republics, and I, naturally, represented the people of the Republic of China. After my team beat his so many times, his government finally convinced me to change sides as it were. Now I train the athletes of the Russian Federation, and Mikhail and I meet here from time to time."');
    // TODO-QSP: dynamic text: "I am sorry, <<$pcs_nickname>> and Guang, but my wife is expecting me and I must...
    scene.text(`"I am sorry, ${((st as any).pcs_nickname || '')} and Guang, but my wife is expecting me and I must be going," the coach says, looking at his watch. He then departs, leaving you in the company of the Chinese trainer.`);
    scene.actions([
      { label: 'Ask about the coach', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak12.jpg');
    scene.text('As soon as Mikhail left, you bombard the other trainer with questions about the coach, wanting to know about his life, his girlfriend, competitions and, of course, the European championship. Dumbfounded, Guang stares at you, unable to get a word in edgewise for the next few minutes as you jump from subject to subject without pause.');
    scene.text('Guang finally manages to force himself into the conversation as you pause momentarily to draw in a breath.');
    scene.text('"If you don\'t know these things, it means that Misha didn\'t tell you, so why should I tell you and betray my friend\'s trust?" he asks you.');
    scene.text('You are at a loss, not knowing how to proceed. Fearing that he is going to continue to scold you, you prepare to leave.');
    scene.text('"Now, if you had some huangjiu, I would happily answer some of your questions," he says dreamily.');
    scene.text('You stare at the Chinese trainer in puzzlement, not understanding what he is asking for.');
    scene.text('"Huangjiu is rice wine from my country," he explains sighing wistfully, "Sadly, it is hard to find outside of great cities like St. Petersburg or Moscow."');
    scene.text('"Okay, so if I bring you a bottle of wungzoo wine you will answer my questions?" you ask eagerly.');
    scene.text('"Huangjiu," he corrects you, "it is called huangjiu. If you find me a bottle, I will answer any question you like."');
    scene.text('"It is a deal," you exclaim and start to head for the door then turn back to Guang, "Where can I find your rice wine, your huangjiu?"');
    scene.text('The older man just smiles at you and shrugs.');
    scene.text('You think about it and remember there were a couple of Chinese merchants at the market back home. Maybe one of them will have the rice wine.');
    (st as any).ShowerIvan = 5;
    scene.actions([
      { label: 'Move away', goto: ['havana', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).ShowerIvan ?? 0) === 5  &&  ((s as any).centr ?? 0) === 2) {
      scene.text('You see Guang and hurry over to him.');
      scene.actions([
        { label: 'Greet Guang', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak13.jpg');
    scene.text('You go up to Guang and say hello.');
    scene.text('"Have you brought it?" he asks.');
    if (((st as any).ricewine ?? 0) === 1) {
      scene.actions([
        { label: 'Give him the wine', handler: (st: GameState) => {
    (st as any).ricewine = 2;
    (st as any).ShowerIvan = 6;
    scene.text('You show him the bottle of wine and stare questioningly at the other coach.');
    scene.text('Guang sighs, "Okay, I will answer one of your questions, but don\'t bug me anymore, and slow down, you talk like a rabid monkey."');
    scene.text('You feel offended being compared to a rabid monkey, but you restrain yourself.');
    scene.actions([
      { label: 'Ask question', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak15.jpg');
    scene.text('About the European championship, tell me why the coach doesn\'t want to talk about it," you ask after taking a deep breath.');
    scene.text('Guang bites his lip thoughtfully, then begins the story.');
    scene.text('"The stories are true, your coach really was on the national team. And they did make it to the European championships."');
    scene.text('With bated breath, you listen to the story.');
    scene.actions([
      { label: 'Play on', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak14.jpg');
    scene.text('"Well, during the tournament, he met a player on another national team from another country… ahem, the female national team of another country, that is. Well, the acquaintance grew into something more…');
    scene.actions([
      { label: 'Play on', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/sex/voltrenerspeak16.mp4');
    scene.text('To make a long story short, he fucked the member of the other team," then the Chinese coach giggled, "and although she was on the senior team, they were actually minors, and she was only 16 years old. She immediately ran and told her teammates and they went running to their coach."');
    scene.actions([
      { label: 'Surprised', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/volley/event/voltrenerspeak17.jpg');
    scene.text('"He almost ended up in jail, but the officials decided to avoid a scandal and just kicked Mikhail off of the team," Guang concluded his story.');
    // TODO-QSP: $OpenInnerThought + '"Now I understand why coach shies away from me whenever we start to get close,"...
    scene.actions([
      { label: 'Move away', goto: ['havana', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Why are you here then?" he asks as he walks away from you.');
      scene.actions([
        { label: 'Move away', goto: ['havana', 'start'] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

export const VolleyTrenCentr: LocationDef = {
  name: 'VolleyTrenCentr',
  title: 'You enter the gym and see your coach talking to a strange ma',
  region: 'other',
  description: ['You enter the gym and see your coach talking to a strange man.'],
  enter: enter,
};
