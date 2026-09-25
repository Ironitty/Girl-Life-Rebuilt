import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterMarishaEvent(s: GameState, scene: SceneBuilder): void {
  (s as any).marisha_day = ((s as any).daystart ?? 0);
  if (((s as any).MarishaQW ?? 0)?.['Event'] === 0) {
    qspGoto(s, 'marisha_ev', '0');
  } else {
    if (((s as any).MarishaQW ?? 0)?.['Event'] === 1) {
      qspGoto(s, 'marisha_ev', '1');
    } else {
      if (((s as any).MarishaQW ?? 0)?.['Event'] === 2) {
        qspGoto(s, 'marisha_ev', '2');
      }
    }
  }
  scene.build();
}

function enter0(s: GameState, scene: SceneBuilder): void {
  ((s as any).MarishaQW = (s as any).MarishaQW ?? {})['Event'] = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
  scene.text('As you are walking away from the boys, you notice a girl peeking at one of Kolka\'s friends from behind the bleachers.');
  scene.actions([
    { label: 'Approach her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Spotted'] = ((st as any).MarishaQW['Spotted'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('She continues to watch the boys walk off as you approach but before you can get close, she notices you walking toward her and quickly darts away, obviously not wanting to talk.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => { qspGoto(st, 'gschool_grounds', ((st as any).loc_arg ?? '')); } },
    ]);
  } },
    { label: 'Ignore her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Ignored'] = ((st as any).MarishaQW['Ignored'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('$OpenInnerThought + \'What is her problem? Oh well.\' + $CloseInnerThought + \' You shrug your shoulders then walk away.\'');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter1(s: GameState, scene: SceneBuilder): void {
  ((s as any).MarishaQW = (s as any).MarishaQW ?? {})['Event'] = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
  scene.text('As you are walking away from the boys, you the same girl from last time, staring at one of Kolka\'s friends from behind the bleachers.');
  scene.actions([
    { label: 'Approach her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Spotted'] = ((st as any).MarishaQW['Spotted'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('She continues to watch the boys walk off as you approach but before you can get close, she notices you walking toward her and curiously looks at you before walking away. She is obviously not interested in talking.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    { label: 'Ignore her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Ignored'] = ((st as any).MarishaQW['Ignored'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('$OpenInnerThought + \'She is here again? What is she up too?\' + $CloseInnerThought + \' You shrug your shoulders then walk away.\'');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter2(s: GameState, scene: SceneBuilder): void {
  ((s as any).MarishaQW = (s as any).MarishaQW ?? {})['Event'] = 3;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
  scene.text('As you are walking away from the boys, you the girl again sneaking around the bleachers. ' + ((s as any).OpenInnerThought ?? '') + 'If I approach her then she is going to run away again. Maybe I can sneak up on her.' + ((s as any).CloseInnerThought ?? ''));
  scene.actions([
    { label: 'Approach her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Spotted'] = ((st as any).MarishaQW['Spotted'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('She continues to watch the boys walk off as you pretend to not notice her. You slowly walk away but watch her stare at the boys while you sneak up to her. As you get close, you ask, "What are you doing?" She jumps up, obviously startled by your sudden appearance before replying, "I was just… Looking for my lost earring. I know I dropped it here somewhere."');
    scene.text('"Really? Because I have been seeing you here for the past few days. Do you lose many earrings here?" She remains quiet for a few seconds before trying to walk off but you stand in front of her. "What\'s wrong? Why are you peeking at those boys? Do you like one of them?" She stares at the ground for a few seconds before saying, "I\'m sorry for bothering you. I won\'t do it again." She then tries to walk around you.');
    scene.actions([
      { label: 'Continue questioning her', handler: (st: GameState) => {
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Main'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('You gently grab onto her arm and say, "Come on. You can tell me. Maybe I can help." She looks at you for a few seconds before saying, "Well, I do kind of like one of them." You gently rub her arm as you respond, "Have you spoken to him yet?" She replies, "No, he seems too busy with his friends. I didn\'t want to disturb him." You say, "Well you will never know if he likes you, that way."');
    scene.text('She downcasts her eyes before saying, "But I don\'t know what else to do…" You respond, "Well let me help you then." She looks up to you then asks, "You would do that for me? Why?" You nod your head, "Because you look like you could use some help and I\'m a sucker for love stories." She smiles as she happily nods, "Thank you so much. I\'ll try to find a way to repay you."');
    scene.actions([
      { label: 'Ask her name', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text(`"So my name is ${((st as any).pcs_firstname ?? '')} but my friends call me ${((st as any).pcs_nickname ?? '')}. What is your name?" She replies, "My name is Marisha." You then say, "Let's start by heading to the mall. We need to get you a nicer outfit." She nods before walking with you to the mall`);
    scene.actions([
      { label: 'Head to the mall', goto: ['marisha_ev', 'Mall'] },
    ]);
  } },
    ]);
  } },
      { label: 'Let her go', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('You let her walk off as you look at her while feeling puzzled. ' + ((st as any).OpenInnerThought ?? '') + 'I don\'t know what her problem is but hopefully I won\'t be seeing her again.' + ((st as any).CloseInnerThought ?? ''));
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } },
    { label: 'Ignore her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['Ignored'] = ((st as any).MarishaQW['Ignored'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('$OpenInnerThought + \'I\'m just going to ignore her from now on.\' + $CloseInnerThought + \' You then shake your head before walking away.\'');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMall(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
  scene.text('You both arrive at the mall then you head to the clothing shop. You guide Marisha to the clothing store where you grab the sexiest outfit that you can find and say, "Let\'s try this one. You will look cute in it." She quickly shakes her head and instead, grabs a more conservative outfit then says, "I like this one." You shake your head and say, "Suit yourself." She then turns to you and says, "I like this outfit. I hope I can keep it clean though because my mother always gets upset with me for getting my clothes dirty. Even my clothes right now are dirty." You respond, "You can always use my shower to clean yourself up." She responds, "If you don\'t mind." You reply, "It\'s no trouble at all. Let\'s go."');
  scene.actions([
    { label: 'Take her home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    qspCall(st, 'beverage', 'water');
    qspCall(st, 'food', 'snack');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text('As you enter your house, no one is around so you lead Marisha to your bathroom where she begins taking a shower. You start heading to your bedroom to wait when you notice your brother spying on her.');
    scene.actions([
      { label: 'Shoo him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 180;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text(`You quickly gesture him to leave which he quickly does before you head back to your room and patiently wait for Marisha to finish showering. After a few minutes, Marisha comes back and sits on the bed next to you before saying, "Thank you for helping me out ${((st as any).pcs_firstname ?? '')}. I really appreciate it." You place your hand on her shoulder then say, "No need to thank me. You can stay the night if you want." She nods and says, "That sounds great." You both then spend the night chatting about various topics.`);
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    (st as any).loc = (((st as any).home ?? 0)?.['bedroom']);
    (st as any).loc_arg = (((st as any).home ?? 0)?.['bedroom_arg']);
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['marisha_sleepover'] = 1;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pre_sleep', 'prepare_sleep');
  } },
    ]);
  } },
      { label: 'Ignore him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 180;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/marisha/marisha.jpg');
    scene.text(`You ignore him and he continues to spy on her as you wait patiently in your room. After a few minutes, Marisha comes back and sits on the bed next to you before saying, "Thank you for helping me out ${((st as any).pcs_firstname ?? '')}. I really appreciate it." You place your hand on her shoulder then say, "No need to thank me. You can stay the night if you want." She nods and says, "That sounds great." You both then spend the night chatting about various topics.`);
    scene.actions([
      { label: 'Go to sleep', handler: (st: GameState) => {
    qspCall(st, 'outfit', 'strip_all');
    (st as any).loc = (((st as any).home ?? 0)?.['bedroom']);
    (st as any).loc_arg = (((st as any).home ?? 0)?.['bedroom_arg']);
    ((st as any).MarishaQW = (st as any).MarishaQW ?? {})['marisha_sleepover'] = 1;
    qspCall(st, 'stat', '');
    qspGoto(st, 'pre_sleep', 'prepare_sleep');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'marisha_event':
      enterMarishaEvent(s, scene);
      break;
    case '0':
      enter0(s, scene);
      break;
    case '1':
      enter1(s, scene);
      break;
    case '2':
      enter2(s, scene);
      break;
    case 'Mall':
      enterMall(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const marisha_ev: LocationDef = {
  name: 'marisha_ev',
  title: 'As you are walking away from the boys, you notice a girl pee',
  region: 'other',
  enter: enter,
};
