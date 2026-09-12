import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterOs1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).body_paint_day = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/artstudio/downud1.jpg');
  scene.text('You are taken aback by all the naked people, with their bodies only covered by body paint.');
  scene.text('One of the painted naked girls approaches you. "Hello, sorry for being so forward, but we could really use your participation right now, and perhaps if you like it, we could even take you to participate in some of our other shows."');
  scene.text('"Huozhnik Moses Kruzhinsky is a very talented artist. As you can see, it\'s not just us girls participating. There are guys here too," she says pointing some of them out.');
  scene.text('"So what do you say? Would you like to join us?"');
  if (((s as any).pcs_inhib ?? 0) < 50) {
    scene.text('You consider it. Having your naked body painted and then walking around in public sounds a little shameful, but it\'d be really interesting too.');
  }
  if (((s as any).pcs_inhib ?? 0) > 30) {
    scene.actions([
      { label: 'Agree', goto: ['dibodi', 'bodiart'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    (st as any).bodimodel1 = 1;
  }, goto: ['ugol', ''] },
    { label: 'Doubt', goto: ['dibodi', 'bodiart1'] },
  ]);
  scene.build();
}

function enterBodiart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).bodimodel = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/artstudio/downud1.jpg');
  scene.text('"I\'m so glad, you agreed. That\'s Moses Kruzhinsky over there, though everyone just calls him Masya," she says, pointing at a man painting a girl. "My name is Galina."');
  scene.text('She turns back to the artist waving her arms and cries, "Masya, there is a new girl here that would be perfect for your work." The artist looks up and then stares at you with an appraising look. After a moment, he nods and goes back to his current work.');
  if (((s as any).stat ?? 0)?.['lesbian_count'] > 0) {
    scene.text('Galina chats about a variety of things, using her hands to gesture often, which causes her breasts to move in pleasant ways. You barely pay attention to what she says as you find yourself staring at her chest.');
    scene.text('After a few minutes, perhaps noticing you paying more attention to her body than to what she is saying she falls silent.');
    scene.text('Several minutes of silence pass before she speaks again. "Our place is in the Old Town. You can come visit anytime. It was nice meeting you, but I need to get back to work."');
  } else {
    scene.text('Galina chats about a variety of things, using her hands to gesture often. However after a few minutes, she tells you, "Our place is in the Old Town. You can come visit anytime. It was nice meeting you, but I need to get back to work."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['ugol', ''] },
  ]);
  scene.build();
}

function enterBodiart1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).bodimodel = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/artstudio/downud1.jpg');
  scene.text('"I understand your reluctance, but you shouldn\'t be worried. Moses Kruzhinsky is a great artist,"');
  scene.text('she says, pointing to a man painting a girl. "Everyone just calls him Masya though. My name is Galina."');
  scene.text('You listen to her and tell her, "I have done photo shoots before, but this," you gesture at the other models, "this is a bit different. I\'m not sure I\'m ok being naked in public in a crowd of people."');
  scene.text('"Don\'t worry about it," says Galina, "even if we are completely naked, you don\'t have to worry about rape or anything like that happening to you. We all watch out for one another, and we will make sure no one bothers you. We all make sure no one bothers anyone. We are we almost like one big family."');
  scene.text('Then she turns back to the artist waving her arms and cries, "Masya, there is a new girl for your work who in my opinion would be perfect." The artist looks up and then stares at you with an appraising look. After a moment, he nods and goes back to his work.');
  if (((s as any).stat ?? 0)?.['lesbian_count'] > 0) {
    scene.text('She chats about a variety of things, using her hands to gesture often, which causes her breasts to move in pleasant ways. You barely pay attention to her as you find yourself staring at her chest.');
    scene.text('After a bit, perhaps noticing you watching her body more than paying attention to her, she falls silent.');
    scene.text('Several minutes of silence pass before she speaks up again. "Our place is in the Old Town. You can come visit anytime. It was nice meeting you, but I need to get back to work."');
  } else {
    scene.text('Galina chats about a variety of things, using her hands to gesture often. However after a few minutes, she tells you, "Our place is in the Old Town. You can come visit anytime. It was nice meeting you, but I need to get back to work."');
  }
  if (((s as any).pcs_inhib ?? 0) > 30) {
    scene.actions([
      { label: 'Agree', goto: ['ugol', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', handler: (st: GameState) => {
    (st as any).bodimodel1 = 1;
  }, goto: ['ugol', ''] },
    { label: 'I\'ll think about it', handler: (st: GameState) => {
    (st as any).bodimodel2 = 1;
  }, goto: ['ugol', ''] },
  ]);
  scene.build();
}

function enterSgtusa(s: GameState, scene: SceneBuilder): void {
  (s as any).tusa = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/photo.jpg');
  scene.text('You walk over to a group of girls and boys talking and introduce yourself.');
  scene.text('You are surprisingly well received.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['pushkin_sq', ''] },
  ]);
  scene.build();
}

function enterSotusa(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pushkin/photo.jpg');
  if (((s as any).sttan ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    (s as any).sttan = 1;
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, what's with the no panties?" The crowd laughs out loud, ...
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, what's with the no panties?" The crowd laughs out loud, noticing your lack of underwear.`);
    scene.actions([
      { label: 'Continue', goto: ['pushkin_sq', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSptusa(s: GameState, scene: SceneBuilder): void {
  (s as any).arts = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pushkin/marinka/marinka.jpg');
  scene.text('You ask Marinka whether Masya\'s studio is around here. In response, Marinka nods her head, "Yes, it\'s in the courtyard at the other end of that passage over there."');
  // TODO-QSP: end
  scene.actions([
    { label: 'You live around here?', handler: (st: GameState) => {
    scene.text('"Yes," Marinka says.');
    scene.actions([
      { label: 'Say goodbye and leave', goto: ['pushkin', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'os1':
      enterOs1(s, scene);
      break;
    case 'bodiart':
      enterBodiart(s, scene);
      break;
    case 'bodiart1':
      enterBodiart1(s, scene);
      break;
    case 'sgtusa':
      enterSgtusa(s, scene);
      break;
    case 'sotusa':
      enterSotusa(s, scene);
      break;
    case 'sptusa':
      enterSptusa(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dibodi: LocationDef = {
  name: 'dibodi',
  title: 'You are taken aback by all the naked people, with their bodi',
  region: 'other',
  enter: enter,
};
