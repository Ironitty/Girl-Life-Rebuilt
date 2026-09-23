import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChrisWalkHome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  if (((s as any).christinaQW ?? 0)?.['subpath'] === 4) {
    ((s as any).christinaQW = (s as any).christinaQW ?? {})['subpath'] = 5;
    scene.text('"About time, bitch. Come on, lets go." She starts walking away at a brisk pace. You follow, making sure to stay at least one step behind her.');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/christina_home/front_door.jpg');
    scene.text('You follow her into the residential district of Pavlovsk, until you get to a large house about ten minutes from the school. Christina\'s parents are obviously fairly wealthy, to own a house this size.');
    scene.text('You enter the house behind her.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Listen to her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    // TODO-QSP: dynamic text: '"Ok, here are the rules you will follow, or I will '+iif(christinaQW['fight'] =...
    scene.text('"Ok, here are the rules you will follow, or I will ' + ((((st as any).christinaQW ?? 0)?.['fight'] === -1) ? ('beat you black and blue. Again.') : ('spank the absolute shit out of you.')) + '"');
    scene.text('"1. You will not speak unless spoken to, or otherwise given permission. When you do, you will either call me by name in the presence of others, or Mistress when we are alone."');
    scene.text('"2. You will do anything I say. If I say clean, you will clean. If I say strip and lick my pussy, you will do it. No hesitation."');
    scene.text('"3. If you meet my parents or brothers, you will be polite, demure, and discreet about anything and everything I do. Only Sly knows anything about my personal life, and the only one who lives here with me, full time. My parents are almost always traveling for work, so you will only see them on special occasions."');
    scene.text('"4. You will listen to Sly. His demands are usually pretty simple: suck his dick, spread your legs, that kind of thing. You don\'t have to do everything he says, but if you annoy him, it better be for a damned good reason because he is the only member of my family I give a shit about."');
    scene.text('"You may speak."');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.actions([
        { label: 'I\'m a virgin', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('Christina rolls her eyes. "Of course you are. Sly\'s gonna love that. He loves popping cherries, just ask Lina or Lariska. Won\'t be long before you\'re going to be begging him for his cock regularly, just like Lina."');
    scene.text('"Does Lariska have sex with him?"');
    scene.text('"Jealous? …No, not anymore, she refuses to touch him. Don\'t ask me why, if he wasn\'t…" She stares off into space for a few moments before coming back to the conversation. "Anyway. Those are the rules, for now. Follow them, or else."');
    scene.actions([
      { label: 'Yes, Mistress', goto: ['Zvereva_house', 'chris_bedro'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes, Mistress', goto: ['Zvereva_house', 'chris_bedro'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.text('"About time, bitch. Come on, lets go." She starts walking away at a brisk pace. You follow, making sure to stay at least one step behind her.');
    scene.actions([
      { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.img('images/locations/pavlovsk/resident/christina_home/front_door.jpg');
    scene.text('You follow her home and into her house, to her room.');
    qspCall(st, 'stat', '');
    qspGoto(st, 'Zvereva_house', 'chris_bedro');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChrisShower(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big18.jpg');
  scene.text('You find Christina in the shower. She hasn\'t noticed you yet.');
  qspCall(s, 'arousal', 'erotic_nudity', 5);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'Zvereva_house', 'hallw');
  } },
    { label: 'Join her', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big18.jpg');
    scene.text('Removing your clothes, you walk over to the glass door and softly clear your throat and wait to be noticed.');
    scene.text('When she sees you, she opens the door and says "Get in here, I need my back washed."');
    scene.text('You step inside, lather your hands in soap, and start washing her.');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).pcs_hairbsh = 1;
    (st as any).pcs_makeup = 1;
    if (((st as any).deodorant_on ?? 0) === 1) {
      qspCall(st, 'sweat', 'remove_deo');
      scene.text('<br>Your deodorant gets washed away in the shower.');
    }
    qspCall(st, 'arousal', 'erotic_nudity', 20, 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish the shower', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'Zvereva_house', 'bathr');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBedChat(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
  scene.text('Making sure to keep your eyes down, you stand quietly until she addresses you.');
  scene.text('"I can see you want something. Speak."');
  if (((s as any).christinaQW ?? 0)?.['lar_lina'] === 0) {
    scene.actions([
      { label: 'Ask about Lariska', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['lar_lina'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
    scene.text('"What made you decide to take Lariska in?"');
    scene.text('"Pfft. She doesn\'t know how to stand up for herself. When we were little, I found her getting bullied by some older boys and stepped in. Kicked one right in the balls, and the rest ran off. She just kinda started following me around after that."');
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_house_events', 'bed_chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).christinaQW ?? 0)?.['lar_lina'] === 1) {
    scene.actions([
      { label: 'Ask about Lina', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['lar_lina'] = 2;
    scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
    scene.text('"What about Lina?"');
    scene.text('"That dumb bitch? She was friends with Lariska first, followed her around until Lariska started following me. At first she would ask Lariska what she should do, but Lariska is bad at making decisions, so when I started telling her what to do, she just automatically did it."');
    scene.text('"She really looks up to you, Mistress."');
    if (((st as any).slyQW ?? 0)?.['met'] === 2) {
      scene.text('"Unlike Lariska, she actually needs someone to be in charge. Without me she would be completely fucking lost. She pretty addicted to Sly\'s dick too."');
      scene.text('"Well, it is a nice dick, Mistress."');
      scene.text('She bites her lip a bit, before nodding.');
    } else {
      if (((st as any).slyQW ?? 0)?.['met'] === 1) {
        scene.text('"Unlike Lariska, she actually needs someone to be in charge. Without me she would be completely fucking lost. She pretty addicted to Sly\'s dick too. You would be too, if you actually did what I told you to and go find him."');
      } else {
        scene.text('"Unlike Lariska, she actually needs someone to be in charge. Without me she would be completely fucking lost. She pretty addicted to Sly\'s dick too. You will be too," she says with a smirk on her face.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_house_events', 'bed_chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).slyQW ?? 0)?.['met'] === 2  &&  ((s as any).christinaQW ?? 0)?.['subpath'] < 6  &&  ((s as any).slyQW ?? 0)?.['Chris_caught'] === 5) {
    scene.actions([
      { label: 'Inquire about the moans', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
    scene.text('"So… sometimes when I\'m getting fucked by your brother, I hear these moans."');
    scene.text('She looks bored. "Yeah, no shit. I can hear you all the way across the house."');
    scene.text('"I\'m not sure where they\'re coming from, but they aren\'t the noises I\'m making."');
    scene.text('"How would you know? I\'ve seen your face, I doubt you…" She trails off, her face turning red as she realizes she just admitted to peeking.');
    scene.text('Rather than confront her, you take another tact. "You seem to really care for Sly."');
    scene.text('She gives you a dangerous look, but you can see her emotions are all over the place. "Of course I do, he\'s my brother."');
    // TODO-QSP: '"You said you don''t like your brothers," you say gently. ' + $OpenInnerThought + 'Maybe she''s in ...
    scene.text('"Yeah. I also said he is the only one of them I actually like. Don\'t you ever listen, moron?!" ');
    if (((st as any).christinaQW ?? 0)?.['fight'] === -1) {
      scene.text('"I have been listening, <i>Mistress</i>. I\'ve been listening to you watch us. While masturbating. Maybe you would want to join?"');
    } else {
      scene.text('"I\'m sorry Mistress. I\'m just trying to say… you could join us, if you wanted."');
    }
    scene.text('"What are you trying to say, slut? That I want to fuck him?! My brother?! That\'s disgusting!"');
    scene.actions([
      { label: 'Encourage her', handler: (st: GameState) => {
    ((st as any).christinaQW = (st as any).christinaQW ?? {})['subpath'] = 6;
    scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
    scene.text('"It\'s ok, Mistress. I would understand if you did, he is a good catch, after all."');
    scene.text('Rather than yell at you some more, she bites her lip, seemingly lost in thought.');
    // TODO-QSP: dynamic text: 'Satisfied she''s '+iif(christinaQW['fight'] = -1, 'taken the bait', 'considerin...
    scene.text('Satisfied she\'s ' + ((((st as any).christinaQW ?? 0)?.['fight'] === -1) ? ('taken the bait') : ('considering it')) + ', you step back and stay quiet.');
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_house_events', 'bed_chat'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).slyQW ?? 0)?.['met'] === 0  &&  ((s as any).christinaQW ?? 0)?.['subpath'] < 6) {
    scene.actions([
      { label: 'Ask about Sly', handler: (st: GameState) => {
    ((st as any).slyQW = (st as any).slyQW ?? {})['met'] = 1;
    scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
    scene.text('Can you tell me about your brother, Sly?');
    scene.text('Giving you an appraising look, she says "Silvestr is the youngest of my older brothers and the only one of them I actually like. He taught me how to fight, and where I learned to push my body to achieve the perfection you see today."');
    scene.text('"When will I meet him?"');
    scene.text('"Why haven\'t you already? It\'s why I brought you home. What, did you think I wanted to fuck you? Get out there and say hello. He will take it from there. Remember, do what he says or else."');
    if (((st as any).stat ?? 0)?.['think_virgin'] === 1) {
      scene.text('"But I\'m a virgin. My mother makes me do regular check ups at the gynecologist!"');
      scene.text('Christina starts laughing. "Yeah right!"');
      scene.text('"Really, Mistress. I don\'t have a choice. If she finds out I\'ve lost my virginity to your brother there will be a lot of trouble." You let the unspoken threat hang in the air.');
      scene.text('She stares at you for a long time before saying "You\'re serious? Ugh, fine. I won\'t let him pop your cherry, for now. Good thing he loves blowjobs and anal. You <b>will</b> do those, a lot. No arguments, get used to your place."');
    }
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_house_events', 'bed_chat'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Step away', goto: ['Zvereva_house', 'chris_bedro'] },
    { label: 'Ask about the rules', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/christina/home/bedroom/bed_chat.jpg');
    // TODO-QSP: dynamic text: '"Again? Ok fine, here are the rules you will follow, or I will '+iif(christinaQ...
    scene.text('"Again? Ok fine, here are the rules you will follow, or I will ' + ((((st as any).christinaQW ?? 0)?.['fight'] === -1) ? ('beat you black and blue. Again.') : ('spank the absolute shit out of you.')) + '"');
    scene.text('"1. You will not speak unless spoken to, or otherwise given permission. When you do, you will either call me by name in the presence of others, or Mistress when we are alone."');
    scene.text('"2. You will do anything I say. If I say clean, you will clean. If I say strip and lick my pussy, you will do it. No hesitation."');
    scene.text('"3. If you meet my parents or brothers, you will be polite, demure, and discreet about anything and everything I do. Only Sly knows anything about my personal life, and the only one who lives here with me, full time. My parents are almost always traveling for work, so you will only see them on special occasions."');
    scene.text('"4. You will listen to Sly. His demands are usually pretty simple: suck his dick, spread your legs, that kind of thing. You don\'t have to do everything he says, but if you annoy him, it better be for a damned good reason because he is the only member of my family I give a shit about."');
    scene.actions([
      { label: 'Continue', goto: ['Zvereva_house_events', 'bed_chat'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Chris_walk_home':
      enterChrisWalkHome(s, scene);
      break;
    case 'chris_shower':
      enterChrisShower(s, scene);
      break;
    case 'bed_chat':
      enterBedChat(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Zvereva_house_events: LocationDef = {
  name: 'Zvereva_house_events',
  title: '"About time, bitch. Come on, lets go." She starts walking aw',
  region: 'other',
  enter: enter,
};
