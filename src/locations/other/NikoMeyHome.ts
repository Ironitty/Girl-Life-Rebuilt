import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAftermath(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel ?? 0)?.['A25'] >= 80) {
  }
  if (((s as any).npc_rel ?? 0)?.['A14'] < 90) {
    qspCall(s, 'npc_relationship', 'set', 'A14', 90);
  }
  if (((s as any).npc_rel ?? 0)?.['A15'] < 90) {
    qspCall(s, 'npc_relationship', 'set', 'A15', 90);
  }
  if (((s as any).npc_rel ?? 0)?.['A240'] < 90) {
    qspCall(s, 'npc_relationship', 'set', 'A240', 90);
  }
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (45);
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'sweat', 'add', 5);
  (s as any).minut = ((s as any).minut ?? 0) + 270;
  (s as any).NikoAftermath = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
  // TODO-QSP: dynamic text: You slowly open your eyes and see <<$VK_VikName>> playfully shaking your shoulde...
  scene.text(`You slowly open your eyes and see ${((s as any).VK_VikName ?? 0)} playfully shaking your shoulder. "Hey there, sleepy head! Did you sleep well?"`);
  // TODO-QSP: dynamic text: You give <<$VK_VikName>> a warm smile. "I guess but… Where am I?"
  scene.text(`You give ${((s as any).VK_VikName ?? 0)} a warm smile. "I guess but… Where am I?"`);
  scene.text('"After what happened at school, we couldn\'t just leave you there, so we brought you back to our place."');
  scene.text('You scratch your head. "We?"');
  // TODO-QSP: dynamic text: <<$VK_VikName>> smiles and turns to her left.
  scene.text(`${((s as any).VK_VikName ?? 0)} smiles and turns to her left.`);
  scene.actions([
    { label: 'Look', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
    scene.text('You turn to see Katja and Natalia sitting next to the bed. "I\'m so glad that you\'re okay! I was worried when you didn\'t wake up!" Katja says in a concerned voice.');
    scene.text('Natalia nods in agreement. "I cleaned your hair for you. It was… messy."');
    // TODO-QSP: dynamic text: You look around the room, then back at <<$VK_VikName>>. "Thank you all for helpi...
    scene.text(`You look around the room, then back at ${((s as any).VK_VikName ?? 0)}. "Thank you all for helping me. I can't believe what happened in school wasn't a dream! I want it to be a dream, so bad…"`);
    scene.text('You can feel tears forming under your eyes as Katja hugs you. "I don\'t know what caused it, but we\'ll find a way to make things better. You didn\'t deserve what they did to you."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> places her hand on your shoulder. "There there, you'll be alrigh...
    scene.text(`${((s as any).VK_VikName ?? 0)} places her hand on your shoulder. "There there, you'll be alright."`);
    // TODO-QSP: dynamic text: Natalia gives you a very supportive smile as she lightly squeezes your hand as K...
    scene.text(`Natalia gives you a very supportive smile as she lightly squeezes your hand as Katja sighs. "What's going at school these days? First Sonia and now ${((s as any).pcs_nickname ?? 0)}. These boys are animals."`);
    // TODO-QSP: dynamic text: "What exactly happened, <<$pcs_nickname>>?" Natalia asks as she places her hand ...
    scene.text(`"What exactly happened, ${((s as any).pcs_nickname ?? 0)}?" Natalia asks as she places her hand on your leg.`);
    scene.actions([
      { label: 'Tell them your story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    scene.text('You take a deep breath. "It all started when I met Nikolai. He…"');
    scene.text('Katja cuts you off. "Wait, do you mean that gopnik punk Niko? You should never have trusted that loser!"');
    scene.text('Natalia nods. "She\'s right. That boy is bad news. He\'s always lying to everyone. Even the other boys know not to trust him."');
    scene.actions([
      { label: 'Look at Katja', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Natalia.jpg');
    scene.text('You look up, surprised by their opinions of Niko. "But he treats me with such love and compassion. He always calls me his princess!"');
    // TODO-QSP: dynamic text: Katja places her arms around your neck. "Listen <<$pcs_nickname>>, you can go ou...
    scene.text(`Katja places her arms around your neck. "Listen ${((s as any).pcs_nickname ?? 0)}, you can go out with whoever you want. I'm just concerned that he'll use you."`);
    scene.text('You lay back as you consider your options. "So how did you end up… naked at school?" Natalia asks.');
    scene.actions([
      { label: 'Return to your story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
    scene.text('"Niko is always teaching me how to be more confident and daring. He tells me to do things that are very scary at first, but end up being very exciting. I don\'t know why it excites me so much, but I feel so alive when I\'m with Niko. He always makes me feel safe and he tells me…"');
    // TODO-QSP: dynamic text: Katja cuts you off again. "Makes you feel safe? Like how he kept you safe today?...
    scene.text(`Katja cuts you off again. "Makes you feel safe? Like how he kept you safe today?" You lower your head and remain silent for a few seconds before Katja continues. "I'm sorry ${((s as any).pcs_nickname ?? 0)}, I just get so angry when I see good people getting used by assholes like him. Continue your story, please."`);
    scene.actions([
      { label: 'Continue your story', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/vicky.jpg');
    scene.text('You take a second before continuing. "He helps me find my confidence and break out of my safety bubble. I\'m always trying something new and facing my fears. I… I just don\'t know what to do without him. Niko always guides me in bettering myself and feeling so alive."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> places her hand on your shoulder. "If you really care for him, t...
    scene.text(`${((s as any).VK_VikName ?? 0)} places her hand on your shoulder. "If you really care for him, then maybe you can work things out with him…"`);
    // TODO-QSP: dynamic text: Katja immediately cuts <<$VK_VikName>> off. "No! You need to dump that freak! Do...
    scene.text(`Katja immediately cuts ${((s as any).VK_VikName ?? 0)} off. "No! You need to dump that freak! Do you really want to stay with a boy who stripped you down and let those gopnik punks… RAPE YOU!!!?"`);
    // TODO-QSP: dynamic text: Natalia tries to calm her. "We might not like him, but it's <<$pcs_nickname>>'s ...
    scene.text(`Natalia tries to calm her. "We might not like him, but it's ${((s as any).pcs_nickname ?? 0)}'s decision and we can't control her. We can only give her our advice and hope that she makes the right decision… on her own."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/vicky/vickysmile1.jpg');
    scene.text('You lightly grip your hair as you respond. "I just… need to think about this for a while."');
    // TODO-QSP: dynamic text: <<$VK_VikName>> stands up. "Well, you take all the time you need. If you need an...
    scene.text(`${((s as any).VK_VikName ?? 0)} stands up. "Well, you take all the time you need. If you need anything, then don't be afraid to holler," she says in a cheerful tone before walking toward the door and motioning for the other girls to follow.`);
    scene.actions([
      { label: 'Watch <<$VK_VikName>> leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/Katja2.jpg');
    scene.text('Katja stands up. "I\'m sorry that I\'ve been a bit stern, I just don\'t want to see what happened today repeat itself. When you finish resting, come see me okay? We can have a nice chat together. Don\'t worry, I won\'t lecture you again."');
    scene.text('"Come see me too, I\'d like to speak with you. Now get some rest," Natalia adds and the girls leave the room as you lay down and close your eyes…');
    scene.actions([
      { label: 'Rest', goto: ['NikoDreams', 'woods'] },
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
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAftermath2(s: GameState, scene: SceneBuilder): void {
  (s as any).music_loop = 0;
  (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (10);
  qspCall(s, 'sweat', 'add', 10);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/meynold/bedroom/katja.jpg');
  // TODO-QSP: dynamic text: You quickly jump up and see Katja with a concerned look on her face. "It's okay ...
  scene.text(`You quickly jump up and see Katja with a concerned look on her face. "It's okay ${((s as any).pcs_nickname ?? 0)}. You were just having a bad dream."`);
  scene.text('You look around the room, trying to get your bearings before turning to Katja. "Thank you Katja, I hope these nightmare don\'t become a habit."');
  scene.text('Katja rubs your forehead. "Everything will be alright. You don\'t need to worry about anything right now. You\'re among friends. Remember that." You give her a smile and an approving nod and she returns the smile. "Now that\'s what I like to see, a fresh smile."');
  scene.text('You both giggle before Katja speaks again. "Vicky has something planned that she thinks we will all enjoy. It\'s hard to imagine what it is but who knows? It might be fun. Anyway, you should get yourself washed up. A nice relaxing bath can work wonders for the body and mind. You should also see Vicky when you have the chance. She\'ll be pleased to see you up."');
  if (((s as any).NataliaPavlovaQW ?? 0) >= 10) {
    scene.text('I know that Natalia will be excited to see that you\'re okay too. She was panicking over you. The two of you must be close."');
    scene.text('You nod. "I\'ll go see them. Thank you for your help." Katja smiles. "Don\'t mention it. I couldn\'t just leave you there." You give Katja an approving nod as you climb out of bed.');
  } else {
    scene.text('I\'m sure Natalia will be pleased to see that you\'re okay too. She seemed very worried about you. She obviously has a kind heart."');
    scene.text('You nod. "I\'ll go see them. Thank you for your help." Katja smiles. "Don\'t mention it. I couldn\'t just leave you there." You give Katja an approving nod as you climb out of bed.');
  }
  scene.actions([
    { label: 'Get up', goto: ['NikoMeyHome', 'hallway'] },
  ]);
  scene.build();
}

function enterHallway(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>Hallway</b></center>');
  scene.img('images/locations/pavlovsk/resident/meynolds/corridor.jpg');
  scene.text('Large and bright, this \'hallway\' stretches for quite a bit. You\'ve never seen anything like this before! There\'s a mirror covering half of one of the walls and you see the kitchen not too far away.');
  scene.text('There are stairs leading to the second floor. You can also see two doors with the signs \'Toilet\' and \'Bathroom\' attached to them.');
  if (((s as any).VKAftermathEvent ?? 0) === 2) {
    // TODO-QSP: dynamic text: You see <a href="exec:gt 'NikoMeyHome', 'vickychat3'"><<$VK_VikName>></a> leanin...
    scene.text(`You see <a href="exec:gt 'NikoMeyHome', 'vickychat3'">${((s as any).VK_VikName ?? 0)}</a> leaning against the wall, playing a game on her phone.`);
  }
  if (((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKKatjaChat ?? 0) < 2  ||  ((s as any).VKAftermathEvent ?? 0) === 2  &&  ((s as any).VKNatChat ?? 0) < 2) {
    scene.actions([
      { label: 'Kitchen', goto: ['NikoMeyHome', 'vickychat3'] },
    ]);
  } else {
    scene.actions([
      { label: 'Kitchen', goto: ['NikoMeyHome', 'meal_time'] },
      { label: 'Kitchen', goto: ['NikoMeyHome', 'kitchen'] },
    ]);
  }
  if (((s as any).VKMeyLock ?? 0) !== 2) {
    scene.actions([
      { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom_locked'] },
    ]);
  } else {
    if (((s as any).VKVickyChat ?? 0) === 1) {
      scene.actions([
        { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom'] },
      ]);
    } else {
      scene.actions([
        { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom'] },
      ]);
    }
    if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKVickyChat ?? 0) < 4  ||  ((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKKatjaChat ?? 0) < 3  ||  ((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).VKNatChat ?? 0) < 3) {
      scene.actions([
        { label: 'Leave and go home', goto: ['NikoMeyHome', 'leaving'] },
      ]);
    } else {
      scene.actions([
        { label: 'Leave and go home', goto: ['NikoMeyHome', 'vicky_goodbye'] },
      ]);
    }
    if (((s as any).VKAftermathEvent ?? 0) === 3  &&  ((s as any).NikoAftermath ?? 0) === 1  &&  ((s as any).VKVickyChat ?? 0) === 3) {
      scene.text('<font color=#ffae00>You can hear some loud music coming from Vicky\'s room.</font>');
      if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
        (s as any).volume = 10;
        (s as any).music_loop = 1;
      }
    }
    scene.actions([
      { label: 'Bathroom', goto: ['NikoMeyHome', 'bathroom_hornet'] },
    ]);
  }
  scene.actions([
    { label: 'Katja\'s room', goto: ['NikoMeyHome', 'katja_room'] },
    { label: 'Vicky\'s room', goto: ['NikoMeyHome', 'vicky_room'] },
    { label: 'Lounge', goto: ['NikoMeyHome', 'lounge'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'aftermath':
      enterAftermath(s, scene);
      break;
    case 'aftermath2':
      enterAftermath2(s, scene);
      break;
    case 'hallway':
      enterHallway(s, scene);
      break;
    default:
      enterAftermath(s, scene);
      break;
  }
}

export const NikoMeyHome: LocationDef = {
  name: 'NikoMeyHome',
  title: 'Hallway',
  region: 'other',
  locationType: 'bathroom',
  description: ['"After what happened at school, we couldn\'t just leave you there, so we brought you back to our place."'],
  enter: enter,
};
