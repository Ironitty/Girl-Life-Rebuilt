import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).tobiQW = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    scene.text('"Hi Mikhail, how\'s it going?"');
  } else {
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, how's it going?"
    scene.text(`"Hi ${((s as any).pcs_nickname ?? 0)}, how's it going?"`);
  }
  scene.text('You are just dumbfounded by surprise. In your bedroom is Reinhold, and he obviously knows who you are.');
  scene.actions([
    { label: 'How did you find me?', goto: ['tobiQW', '1'] },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
  scene.text('"How did you find me?"');
  scene.text('"You have absorbed the power of the amulet and are now potentially the most powerful entity in existence. Tatiana couldn\'t hide something that big, and when I spoke to her, she told me your address."');
  scene.actions([
    { label: 'What now?', goto: ['tobiQW', '2'] },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
  scene.text('Reinhold looks at you, sighs and asks you, "Have you ever been teleported?"');
  scene.text('You aren\'t able to process this quickly and just shake your head.');
  scene.actions([
    { label: 'Poof!', goto: ['tobiQW', '3'] },
  ]);
  scene.build();
}

function enter3(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Tatianas\' Laboratory</b></center>');
  scene.img('images/locations/city/citycenter/lab/lab.jpg');
  scene.text('"Just let yourself in. It\'s not like this is a laboratory with sensitive equipment in it," Tatiana sarcastically lambastes Reinhold.');
  // TODO-QSP: dynamic text: "Well maybe if you hadn't been playing games, we would have both talked to <<$pc...
  scene.text(`"Well maybe if you hadn't been playing games, we would have both talked to ${((s as any).pcs_firstname ?? 0)} and sorted this out already."`);
  scene.text('Gustav puts his arm around you and makes sure you\'re OK while Tatiana and Reinhold bicker like an old married couple.');
  scene.text('Eventually, they stop long enough to see you and remember what they are here for.');
  scene.text('Reinhold addresses you, "Firstly, I have to ask how much you know about the world of magic."');
  scene.text('You start telling him what Tatiana told you about the Sidhe and the Succubae. Tatiana starts giggling like a schoolgirl.');
  scene.text('"I\'ll stop you there. All magicians train in one main school of magic and one main personality type. Tatiana, as well as being a specialist in body magics, is also a prankster in training. I specialize in space/time magic and tutoring."');
  scene.text('"The council of the elders has representatives from all of the Fae touched races. The identities of members are kept secret to protect them from external influence or corruption. I\'m an officer of the council and help address the day to day problems and act on their behalf."');
  scene.actions([
    { label: 'And the Succubae and the Sidhe stuff?', goto: ['tobiQW', '4'] },
  ]);
  scene.build();
}

function enter4(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Tatianas\' Laboratory</b></center>');
  scene.img('images/locations/city/citycenter/lab/lab.jpg');
  scene.text('Reinhold laughs, then looks to Tatiana, "That\'s a story the fairies tell their young."');
  scene.text('Tatiana replies, "There\'s no fooling you. I didn\'t have time to explain it properly, and you have to admit this is funny."');
  scene.text('"Toying with potentially the most powerful mage any of us will ever meet, it\'s a good thing your trickster alignment was able to save her in the first place, or you\'d be screwed."');
  if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
    scene.text('"This is nice and everything, but I was a man and would quite like to be one again.');
    scene.text('Reinhold shakes his head.');
    scene.text('"No, I have no idea how you\'d manage to survive trying that. I have consulted more powerful friends, and they all think that you\'d receive a rush of power that you could never control. The result would be a gruesome death, but the exact nature of that death is still being debated."');
  } else {
    scene.text('"This is all very interesting, but why are we here?"');
  }
  scene.actions([
    { label: 'Continue', goto: ['tobiQW', '5'] },
  ]);
  scene.build();
}

function enter5(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
  scene.text('"The council want to have you trained. I know what they would do, it would involve isolating you with a bunch of highly skilled trainers and pounding you with information about magic and using it."');
  scene.text('"This is bad, magic is not a separate entity you must experience life to understand its nuances. I have persuaded them to allow me to take you as an apprentice."');
  scene.text('"Tatiana thought this was a stupid idea as I can\'t take you to council meetings or out on dangerous tasks and I\'m not meant to tutor now that I serve the council. This is all true, and as such, I have decided that the first school of magic you should study is body magics."');
  scene.text('You understand the implication, "Tatiana\'s speciality, so I\'m your apprentice but studying with Tatiana while I learn body magic."');
  scene.text('"Exactly, but I will not be able to protect you due to my commitments, so you\'ll need this."');
  scene.text('He takes out a gun and places it on the table in front of you.');
  scene.text('Tatiana quickly slides it back to Reinhold.');
  scene.actions([
    { label: 'They\'re off again', goto: ['tobiQW', '6'] },
  ]);
  scene.build();
}

function enter6(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Tatianas\' Laboratory</b></center>');
  scene.img('images/locations/city/citycenter/lab/lab.jpg');
  scene.text('"She needs to be able to protect herself."');
  scene.text('"A gun is not going to help against a magical being, and most likely, it\'ll end up being used against her."');
  scene.text('"I\'ll show her how to shoot it, it\'s just in case. She might be the most powerful mage ever, but right now, she knows nothing."');
  scene.text('"Fuck you! I\'m training her, and she is a very quick learner."');
  scene.text('"I meant relatively, you\'re just a kid yourself. What if a powerful demon attacks her? You\'d be too busy running away to help."');
  scene.text('"Once. I run away once, and you never shut up about it."');
  scene.actions([
    { label: 'Sometime later', goto: ['tobiQW', '7'] },
  ]);
  scene.build();
}

function enter7(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Tatianas\' Laboratory</b></center>');
  scene.img('images/locations/city/citycenter/lab/lab.jpg');
  scene.text('Eventually Gustav stands between them, places a massive hand on each and pushes them apart.');
  scene.text('"I am training her in kickboxing. I was a brown sash before the incident, and I have continued training my skills since."');
  scene.text('Reinhold holds up his hands, "Fine she can train to fight with you, and there\'s a gym across the street. Some physical training is good for discipline and training the mind."');
  scene.text('He picks up the gun and puts it in a hidden holster.');
  scene.actions([
    { label: 'What now?', goto: ['tobiQW', '8'] },
  ]);
  scene.build();
}

function enter8(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
  scene.text('"If anyone asks, you are my apprentice, and I am helping you with your magic studies."');
  scene.text('"You should carry on learning from Tatiana and Gustav, and occasionally, I may need you to carry out tasks or accompany me on missions."');
  scene.text('"Tatiana is something of a magical detective and private eye, so she can help you develop by getting you to help her."');
  scene.actions([
    { label: 'Continue', goto: ['tobiQW', '9'] },
  ]);
  scene.build();
}

function enter9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_tatiana.jpg');
  scene.text('"I can even pay you a bit of cash for the help. It\'ll depend on your skill as to what I can get you to do, but if it gives me more time to study, I\'ll see it as a favor."');
  scene.text('"You should go now. Reinhold is pausing time, and I can feel it starting to strain his reserve."');
  scene.actions([
    { label: 'Poof', goto: ['tobiQW', '10'] },
  ]);
  scene.build();
}

function enter10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/1_openings/shared/npc_reinhold.jpg');
  scene.text('"OK, I have to go. Look after yourself, and don\'t do anything to attract too much attention."');
  scene.text('After these words, Reinhold creates a vortex into which he is pulled, and everything is back to normal.');
  scene.actions([
    { label: 'Get out of bed', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Try to sleep', goto: ['bed2', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case '3':
      enter3(s, scene);
      break;
    case '4':
      enter4(s, scene);
      break;
    case '5':
      enter5(s, scene);
      break;
    case '6':
      enter6(s, scene);
      break;
    case '7':
      enter7(s, scene);
      break;
    case '8':
      enter8(s, scene);
      break;
    case '9':
      enter9(s, scene);
      break;
    case '10':
      enter10(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const tobiQW: LocationDef = {
  name: 'tobiQW',
  title: 'Tatianas\' Laboratory',
  region: 'other',
  locationType: 'event',
  description: ['"Hi Mikhail, how\'s it going?"'],
  enter: enter,
};
