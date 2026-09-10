import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterFamily(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  (s as any).pcs_makeup = 1;
  (s as any).cumspclnt = 1;
  qspCall(s, 'cum_cleanup', '');
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/anya/progulka.jpg');
  // TODO-QSP: dynamic text: You feel a hand patting your leg and open your eyes to see Anya kneeling next to...
  scene.text(`You feel a hand patting your leg and open your eyes to see Anya kneeling next to you. "${((s as any).pcs_nickname ?? 0)}, are you okay? It looks like you were having a bad dream." You quickly look around and realize that you're in your bedroom as Anya stands up. "Come on, everyone's waiting for us."`);
  scene.text('You tilt your head as you reply. "Who\'s waiting for us?"');
  scene.text('She smiles. "You know. Mom, Vlad and Kolka. Have you hit your head or something? Come on, you know that we can\'t eat breakfast without you." She takes your hand and leads you to the kitchen.');
  scene.actions([
    { label: 'Enter kitchen', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big28.jpg');
    scene.text('You enter the kitchen to see your stepfather and Kolka laughing at a joke that you can\'t quite hear. They both stop laughing as you enter. Anya offers you a chair and sits down next to you. You look around in relief until you hear something bumping against the kitchen door.');
    scene.actions([
      { label: 'Turn to see what it is', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost\'+rand(4, 6)+\'.jpg');
    // TODO-QSP: dynamic text: Your mother backs out of the kitchen with a tray of food and places some in fron...
    scene.text(`Your mother backs out of the kitchen with a tray of food and places some in front of each of you. "Nice of you to finally join us, ${((s as any).pcs_nickname ?? 0)}. I was beginning to think that you were never going to wake up." You giggle as you start eating.`);
    scene.actions([
      { label: 'Eat breakfast', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/mom/prost\'+rand(4, 6)+\'.jpg');
    scene.text('Your mother suddenly shouts out. "HEY! No eating until your brother gets here!" You look and see your stepfather whispering in Kolka\'s ear, but stopping as soon as you face them.');
    scene.text('You point at Kolka. "He\'s right there…"');
    scene.text('Your mother crosses her arms. "I\'m not talking about Kolka." She walks back to the kitchen as your brother and stepfather continue cackling and whispering at each other. You look around in confusion until you hear light moaning nearby.');
    scene.text('You peek over the kitchen doorway to see your mother bent over the stove with a dark burly figure pressing against her before you suddenly feel someone\'s hand on one of your breasts.');
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big34.jpg');
    scene.text('You turn to see Kolka squeezing your right breast as he gives your stepfather a thumbs up. You push Kolka away and hear your stepfather shouting. "Hey, don\'t push your little brother like that!"');
    scene.text('You\'re taken aback as you respond. "But he touched me!"');
    // TODO-QSP: dynamic text: Your mother then enters the room with her pants around her ankles. "Come on <<$p...
    scene.text(`Your mother then enters the room with her pants around her ankles. "Come on ${((s as any).pcs_nickname ?? 0)}, it's not like all the other boys haven't already fucked you before. Why not let your brother have a chance?"`);
    // TODO-QSP: dynamic text: Kolka quickly chimes in. "Yeah <<$pcs_nickname>>, don't be selfish!"
    scene.text(`Kolka quickly chimes in. "Yeah ${((s as any).pcs_nickname ?? 0)}, don't be selfish!"`);
    scene.text('You see everyone in the room scolding you before you hear a voice shout. "Don\'t worry everyone, I\'ll put this bitch in her place!"');
    scene.actions([
      { label: 'Turn to see who it is', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/yurikev/avatars/threaten1.jpg');
    scene.text('You turn to see Yurik without any clothes on walking into the room before grabbing you by your throat and pushing you against the wall.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/help/event/gif/ra8.mp4');
    scene.text('You can faintly feel something entering your pussy and feel tears streaming down your cheeks. You faintly hear some soft voices in the distance. "Watch her head! Don\'t drop her! Come on, get that door open!"');
    // TODO-QSP: dynamic text: A few seconds later, you hear someone whispering in your ear. "It's okay <<$pcs_...
    scene.text(`A few seconds later, you hear someone whispering in your ear. "It's okay ${((s as any).pcs_firstname ?? 0)}. This is your place now. You didn't think that you could keep that precious body to yourself, did you?"`);
    scene.actions([
      { label: 'Turn around', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('You slowly turn to see Niko standing next to you with a wide grin on his face. "You never need to worry my princess. I\'ll keep your pussy well fed with all the cocks in town." He leans over and gives you a kiss on the cheek.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev2/home/bedroom/cum/cum10.mp4');
    scene.text('You suddenly hear Yurik groan as he starts pumping his cum inside your pussy before talking to Niko. "What a worthless whore. Couldn\'t even rock her hips a little. If I wanted to fuck a blow up doll, I would have kept fucking her mother."');
    scene.text('He then leaves as you start hearing the soft voices again, but they sound closer. "Is she going to be okay? She\'ll be fine. She just needs some more rest… She\'s moving. Do you think she\'s…?"');
    scene.actions([
      { label: '…', goto: ['NikoMeyHome', 'aftermath'] },
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
  } },
  ]);
  scene.build();
}

function enterWoods(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sound_settings ?? 0)?.['music_off'] === 0) {
    (s as any).volume = 100;
    (s as any).music_loop = 1;
  }
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  (s as any).VKWoods = 1;
  (s as any).VKSmiley = 3;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/1.jpg');
  // TODO-QSP: 'You can feel grass on your face which you quickly brush away before looking around and noticing tha...
  // TODO-QSP: 'You stand up and look around, trying to get your bearings when you hear music and the sounds of lau...
  scene.actions([
    { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods2'] },
  ]);
  scene.build();
}

function enterWoods2(s: GameState, scene: SceneBuilder): void {
  (s as any).VKWoods = 2;
  (s as any).VKSmiley = ((s as any).VKSmiley ?? 0) - (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/nightmares/happyhome/woods/2.jpg');
  // TODO-QSP: $OpenInnerThought + 'These woods are so dark. How did I get here?' + $CloseInnerThought
  if (((s as any).VKSmiley ?? 0) === 1) {
    scene.text('You can hear laughter close by.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
  } else {
    scene.text('You can hear laughter in the distance.');
    if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
    }
    if (((s as any).VKSmiley ?? 0) === 3) {
      scene.text('You can hear someone laughing far away.');
      if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
      }
    }
    if (((s as any).VKSmiley ?? 0) === 1) {
      scene.actions([
        { label: 'Move deeper into the woods', goto: ['NikoDreams', 'smiley1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Move deeper into the woods', goto: ['NikoDreams', 'woods3'] },
      ]);
    }
    scene.actions([
      { label: 'Hide', goto: ['NikoDreams', 'woods_hide'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'family':
      enterFamily(s, scene);
      break;
    case 'woods':
      enterWoods(s, scene);
      break;
    case 'woods2':
      enterWoods2(s, scene);
      break;
    default:
      enterFamily(s, scene);
      break;
  }
}

export const NikoDreams: LocationDef = {
  name: 'NikoDreams',
  title: '<<"Smiley">>',
  region: 'other',
  description: ['You tilt your head as you reply. "Who\'s waiting for us?"'],
  enter: enter,
};
