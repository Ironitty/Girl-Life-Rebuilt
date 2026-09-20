import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/kat.jpg');
  scene.text('The warm rays of sun on your naked body feel nice, but at the same time… you have nothing to do! You get bored just lying there and try to kill time by looking around you, examining the other beach-goers.');
  scene.text('After a few minutes, a beautiful girl lies down near you. She\'s truly gorgeous, and you can\'t help but stare in her direction every once in a while.');
  qspCall(s, 'willpower', 'misc', 'self', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Approach her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Approach her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('You decide to walk up to the girl, and try to start a conversation with her.');
    scene.actions([
      { label: 'Greet', goto: ['Katlake', 'znakomstvo'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore her', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterZnakomstvo(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/kat.jpg');
  scene.text('The warm rays of sun on your naked body feel nice, but at the same time… you have nothing to do! You get bored just lying there and try to kill time by looking around you, examining the other beach-goers.');
  scene.text('After a few minutes, a beautiful girl lies down near you. She\'s truly gorgeous, and you can\'t help but stare in her direction every once in a while.');
  if (((s as any).pcs_apprnc ?? 0) < 56) {
    (s as any).katday = ((s as any).daystart ?? 0);
    scene.text('"Erm… hello!" you say, a bit shyly.');
    scene.text('The girl wrinkles her nose when she sees you, but says nothing. She keeps giving you a cold stare that indicates that she wants nothing to do with you.');
    scene.text('"Damn, that didn\'t go well", you think to yourself while you walk away, a bit disheartened. You look at her again from a distance and notice how perfect she looks. She must spend a lot of time trying to look good every day… maybe that\'s why she didn\'t like you?');
    scene.actions([
      { label: 'Continue sunbathing until the hour is over', goto: ['Nudelake', ''] },
    ]);
  } else {
    (s as any).katday = ((s as any).daystart ?? 0);
    (s as any).telkat = ((s as any).telkat ?? 0) + (1);
    qspCall(s, 'telefon', 'AddContact', 'A219', 'icon_kat', 0);
    // TODO-QSP: gs 'telefon', 'SetOutCallSchedule', 'A219', "$telsob = 'Kate' & gt 'lover_call', 'mobilaraz'", "hour...
    (s as any).kat = 1;
    qspCall(s, 'npc_relationship', 'modify', 'A219', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    scene.text('"Erm… hello!" you say, a bit shyly.');
    scene.text('The girl takes off her sunglasses and examines your body, top to bottom. Her face breaks out into a small smile and she says: "Hey, you!"');
    scene.text('She keeps looking at you with that gorgeous smile of hers and waits for you to continue. Damn, she expects you to continue!');
    scene.text('You frantically try to think of something to say, and blush when you can\'t think of anything.');
    scene.text('Her smile widens when she sees how nervous you are, and she decides to help you out: "I\'m Katja, but my friends call me Kat! What\'s your name?"');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>", you exhale with relief. Feeling a lot more at ease, you hav...
    scene.text(`"${((s as any).pcs_nickname || '')}", you exhale with relief. Feeling a lot more at ease, you have a nice conversation with her for another half hour while you enjoy the warmth of the sun together.`);
    scene.text('Then she has to go, and says: "This was nice! Maybe I\'ll see you around here more often?"');
    scene.actions([
      { label: 'Finish', goto: ['Nudelake', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/kat.jpg');
  scene.text('Kat already noticed you walking towards her, and gives you a little wave as you approach her.');
  // TODO-QSP: dynamic text: She smiles: "Hi <<$pcs_nickname>>, how''s it going?"
  scene.text(`She smiles: "Hi ${((s as any).pcs_nickname || '')}, how's it going?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['Nudelake', ''] },
    { label: 'Suggest playing volleyball', goto: ['Katlake', 'voleybol'] },
    { label: 'Suggest going for a walk', goto: ['Katlake', 'walk'] },
    { label: 'Chat with Kat', handler: (st: GameState) => {
    (st as any).katday = ((st as any).daystart ?? 0);
    qspCall(st, 'npc_relationship', 'modify', 'A219', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    qspCall(st, 'mood', 'raise', 'small');
    scene.text('Time flies when you lie on the beach with Kat, exchanging stories with her. She is an excellent conversationalist, and you enjoy talking with her.');
    scene.actions([
      { label: 'Leave', goto: ['Nudelake', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVoleybol(s: GameState, scene: SceneBuilder): void {
  (s as any).katday = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A219', 3);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'exp_gain', 'agil', 1);
  qspCall(s, 'exp_gain', 'react', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/volleyball.jpg');
  scene.text('"Hey, Kat! Want to go play some volleyball over there? Those girls look like they could use some competition!" you say.');
  scene.text('The other girls gladly accept your challenge, happy to play together against others instead of just playing against each other.');
  scene.text('You spend the next half hour in a fierce competition, and have a lot of fun playing volleyball with Kat on your team.');
  scene.text('At one point when you fumble and miss the ball, Kat slaps your ass playfully. Her hand stays on your buttocks for way longer than you expected, and she squeezes gently before finally letting go. She gives you a goofy smile and focuses on the game again, but for the rest of the game you can\'t help but keep thinking of her hand on your ass, and how nice it felt…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterWalk(s: GameState, scene: SceneBuilder): void {
  (s as any).katday = ((s as any).daystart ?? 0);
  qspCall(s, 'npc_relationship', 'modify', 'A219', 2);
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/kat.jpg');
  scene.text('The warm rays of sun on your naked body feel nice, but at the same time… you have nothing to do! You get bored just lying there and try to kill time by looking around you, examining the other beach-goers.');
  scene.text('After a few minutes, a beautiful girl lies down near you. She\'s truly gorgeous, and you can\'t help but stare in her direction every once in a while.');
  scene.text('You and Kat walk along the beach for a half hour, chatting merrily about all kinds of topics.');
  (s as any).kwalrand = (Math.floor(Math.random() * 101) + 0);
  if (((s as any).kwalrand ?? 0) >= 80  &&  ((s as any).kwalrand ?? 0) < 90  &&  ((s as any).npc_rel ?? 0)?.['A219'] > 20) {
    qspGoto(s, 'Kwlake1', '');
  }
  if (((s as any).kwalrand ?? 0) >= 90  &&  ((s as any).npc_rel ?? 0)?.['A219'] > 20) {
    qspGoto(s, 'Kwlake2', '');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['Nudelake', ''] },
  ]);
  scene.build();
}

function enterKey(s: GameState, scene: SceneBuilder): void {
  (s as any).katkey = 1;
  qspCall(s, 'npc_relationship', 'modify', 'A219', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/lake/sun.jpg');
  scene.text('While you\'re sunbathing, you suddenly feel very dizzy and nauseated. You try to stand up and get help, but faint before you get very far.');
  scene.text('');
  // TODO-QSP: dynamic text: "Take it easy, <<$pcs_nickname>>!" you hear Kat''s voice in the darkness. "You''...
  scene.text(`"Take it easy, ${((s as any).pcs_nickname || '')}!" you hear Kat's voice in the darkness. "You're safe, just relax!"`);
  scene.text('You slowly try to open your eyes, and are staring right into Kat\'s concerned face when you finally manage.');
  scene.text('"Easy now…", she gives you a reassuring smile. You notice you have a damp towel on your head, and that you\'re in the shade under a large tree at the edge of the beach. Kat must\'ve carried you here.');
  scene.text('"Wha… what happened?" you mutter.');
  scene.text('Kat gives you a reassuring smile and says: "Sunstroke, that\'s what. When I found you, you were passed out on the beach!"');
  scene.text('When you try to thank her, she shushes you: "Shh… before you say you\'re fine: I\'m not letting you go. No offense, but you still look terrible! I had to run to the sea three times to soak the towel again, you were out for quite a while!"');
  scene.text('"But I really feel oka-" you try to say, but Kat interrupts you.');
  scene.text('She has a caring smile on her face when she says: "I\'m not taking no for an answer. You\'re coming home with me so I can keep an eye on you, and that\'s final!"');
  scene.text('You reluctantly agree to let her take you to her home… after all, your health is important and she just saved you!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with Kat', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['swim'], lastwornclothingnumber['swim']
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['swim'], lastwornpantynumber['swim']
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['swim'], lastwornbranumber['swim']
    qspGoto(st, 'kathouse0', '');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'znakomstvo':
      enterZnakomstvo(s, scene);
      break;
    case 'kat':
      enterKat(s, scene);
      break;
    case 'voleybol':
      enterVoleybol(s, scene);
      break;
    case 'walk':
      enterWalk(s, scene);
      break;
    case 'key':
      enterKey(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Katlake: LocationDef = {
  name: 'Katlake',
  title: 'The warm rays of sun on your naked body feel nice, but at th',
  region: 'other',
  description: ['The warm rays of sun on your naked body feel nice, but at the same time… you have nothing to do! You get bored just lying there and try to kill time by looking around you, examining the other beach-goers.'],
  enter: enter,
};
