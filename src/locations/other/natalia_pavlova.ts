import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFirstChat(s: GameState, scene: SceneBuilder): void {
  ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['introduction'] = 1;
  if (((s as any).grupTipe ?? 0) === 1) {
    scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up and smiles.');
    scene.text(`You smile back at her. "Hey Natalia. I thought I'd come and say hello. I'm ${((s as any).pcs_nickname ?? '')}."`);
    scene.text('She just stares at you. "Umm… Hi? Sorry, I thought you were one of the \'cool kids\', so I\'m just surprised that you\'re here."');
    scene.text('You smile. "I just thought I\'d be friendly and welcome you to our school."');
    scene.text(`"Oh. Thank you, ${((s as any).pcs_nickname ?? '')}."`);
    scene.text('You smile. "Don\'t worry, I get it. A new school is daunting. Maybe we\'ll chat again at some point?"');
    scene.text(`"Yes, I'd like that," she answers. "See you later, ${((s as any).pcs_nickname ?? '')}."`);
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up and smiles.');
      scene.text(`You smile back at her. "Hey Natalia. I'm ${((s as any).pcs_nickname ?? '')}."`);
      scene.text('She just stares at you. "Umm… Hi? Sorry, I thought you were one of the sporty kids, so I\'m just surprised you\'re here."');
      scene.text('You smile. "I thought I\'d be friendly and welcome you to our school."');
      scene.text(`"Oh. Thank you, ${((s as any).pcs_nickname ?? '')}."`);
      scene.text('You smile. "Don\'t worry, I get it. A new school is daunting. Maybe we\'ll chat again at some point?"');
      scene.text(`"Yes, I'd like that," she answers. "See you later, ${((s as any).pcs_nickname ?? '')}."`);
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.text('You see Natalia sitting with the other nerds, reading a book. When she notices you, she glances up and smiles.');
        scene.text(`You smile back at her. "Hey Natalia. I'm ${((s as any).pcs_nickname ?? '')}."`);
        scene.text(`"Hi, ${((s as any).pcs_nickname ?? '')}. It's nice to meet you," she replies in a quiet voice.`);
        scene.text('You smile. "I just thought I\'d be friendly."');
        scene.text('"Thanks, I\'m just a little overwhelmed getting to know loads of new people and a different environment. It\'s a bit daunting."');
        scene.text('You smile. "Don\'t worry. Maybe we\'ll chat again soon, but before I go; Can I ask you something?"');
        scene.text('"Of course," she replies with a smile.');
        scene.text('"You don\'t go to the game nights. I just wondered why?"');
        scene.text('"Ah, right. Not really my scene. I prefer my books, and I also want to focus on my studies, which doesn\'t allow for many distractions."');
        scene.text('"Oh, okay. I\'d like to chat about what you like to read at some point."');
        scene.text('"Yes, I\'d like that," she answers while smiling at you.');
        scene.text('"Okay, see you later. I think it\'s time for class."');
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up with a worried expression.');
          scene.text(`You smile at her. "Hey Natalia. I'm ${((s as any).pcs_nickname ?? '')}."`);
          scene.text('She just stares at you. "Umm… Hi? Sorry, I thought you were one of the gopniks, so I\'m not sure why you\'d want to speak to me?"');
          scene.text('You decide to reassure her. "I\'m not here to cause trouble. We\'re not all bad, you know."');
          scene.text('"I didn\'t mean to offend you, I was just a little surprised is all."');
          scene.text('You smile. "I get that. Anyway, hello and welcome to our school. Maybe we\'ll chat again at some point?"');
          scene.text(`"Yes, I'd like that," she answers. "See you later, ${((s as any).pcs_nickname ?? '')}."`);
        } else {
          if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 175) {
            scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up at you.');
            scene.text(`You smile. "Hi, I'm ${((s as any).pcs_nickname ?? '')}."`);
            scene.text('Natalia turns to you. "Umm… Hi? What brings you here?"');
            scene.text('"I wanted to welcome you to the school is all," you reply');
            scene.text('"That\'s nice of you," she replies with a smile. "However, I\'d like to get to the end of this chapter before class." She returns to reading her book without waiting for your reply.');
            scene.text('You turn away and wait for the next class to start, thinking she seems nice. At least she was reasonably friendly, unlike many of your classmates.');
          } else {
            scene.text('You see Natalia sitting with the nerds, reading a book. When she notices you, she glances up at you.');
            scene.text(`You smile. "Hi, I'm ${((s as any).pcs_nickname ?? '')}."`);
            scene.text('Natalia turns to you. "Umm… Hi? What brings you here?"');
            scene.text('"I wanted to welcome you to the school is all," you reply.');
            scene.text('"That\'s nice of you," she replies with a smile. "However, I can\'t be seen associating with you, given your reputation. It\'s difficult enough for me as it is. If you\'ll excuse men, I\'d like to get to the end of this chapter before class." She returns to reading her book without waiting for your reply.');
            scene.text('You turn away and wait for the next class to start, thinking she seems nice. At least she was reasonably friendly compared to many of your classmates.');
          }
        }
      }
    }
  }
  scene.build();
}

function enterLibrary(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A240');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'exp_gain', 'chrsm', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'npc_relationship', 'modify', 'A240', 'like', 1, 'library');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big240.jpg');
  if (((s as any).npc_rel ?? 0)?.['A240'] < 60) {
    scene.text('You spot Natalia in the library, so you walk over and greet her. "Hey Natalia, how are you?" you ask in a quiet voice.');
    scene.text(`"I'm fine, ${((s as any).pcs_nickname ?? '')}. You?"`);
    scene.text('"Mustn\'t grumble," you answer.');
    scene.text('You spend a few minutes chatting about developments in school and some of the latest news.');
    scene.text(`After a brief pause, she leans in close to you. "Look ${((s as any).pcs_nickname ?? '')}, please don't take this the wrong way, but… Umm…" She stops and blushes.`);
    scene.text('You\'re somewhat puzzled by her behaviour. "Sorry Natalia, but I have no clue what you\'re talking about. Do you want to start again?"');
    scene.text(`She looks at you and reaches a decision. "Sorry, ${((s as any).pcs_nickname ?? '')}, it was a silly idea. Please just forget about it."`);
    scene.text('"Oh. Okay. See you later."');
    scene.actions([
      { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } else {
    if (((s as any).nataliaQW ?? 0)?.['sex_agree'] === 0) {
      scene.text('You spot Natalia in the library, so you walk over and greet her. "Hey Natalia, how are you?" you ask in a quiet voice.');
      scene.text(`"I'm fine, ${((s as any).pcs_nickname ?? '')}. You?"`);
      scene.text('"Mustn\'t grumble," you answer.');
      scene.text(`You spend a few minutes chatting about developments in school and some of the latest news then she leans close to you. "Look, ${((s as any).pcs_nickname ?? '')}, please don't take this the wrong way, but… Umm…" She stops and blushes.`);
      scene.text('You\'re somewhat puzzled by her behaviour. "Come on Nat, we\'re friends, aren\'t we? What is it?"');
      scene.text('She looks embarrassed as she replies. "Okay, but this must stay our secret. So how to put this… Well, I\'m very focused on my studies and can\'t have any distractions, but sometimes I just need a bit of… \'relief\', if you know what I mean?"');
      scene.text('You look at her as you realize what she means. "Oh… Oh! I guess that\'s one of the disadvantages of being our age, but it can be nice too," you reply and wink at her. "So what do you mean?"');
      scene.text('"Well… we could help each other? Nothing serious though, as my studies come first. I can\'t afford the distraction of a serious relationship."');
      scene.actions([
        { label: 'No', handler: (st: GameState) => {
    ((st as any).nataliaQW = (st as any).nataliaQW ?? {})['sex_agree'] = (-1);
    scene.text('"I\'m sorry, but you\'re my friend and I value that. This isn\'t something I\'d want to get into now. Maybe another time."');
    scene.text(`"Okay, ${((st as any).pcs_nickname ?? '')}, no problem. If you change your mind, just let me know. Sorry if I embarrassed you."`);
    scene.text('"Of course. You\'re my friend, and that\'s unchanged." You smile at her and wave goodbye.');
    scene.actions([
      { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        { label: 'Yes', handler: (st: GameState) => {
    ((st as any).nataliaQW = (st as any).nataliaQW ?? {})['sex_agree'] = 1;
    scene.text('"You know what, that would be great. I know that must have been difficult to ask, so thanks for confiding in me," you smile at her before leaving.');
    scene.actions([
      { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).nataliaQW ?? 0)?.['sex_agree'] === -1  ||  ((s as any).nataliaQW ?? 0)?.['library_sex_day'] === ((s as any).daystart ?? 0)) {
        scene.text('You spot Natalia in the library, so you walk over and greet her. "Hey Natalia, how are you?" you ask in a quiet voice.');
        scene.text(`"I'm fine, ${((s as any).pcs_nickname ?? '')}. You?"`);
        scene.text('"Mustn\'t grumble," you answer.');
        scene.text('You spend a few minutes chatting about developments in school and some of the latest news.');
        if (((s as any).nataliaQW ?? 0)?.['sex_agree'] === -1) {
          scene.actions([
            { label: 'Tell her that you\'re ready for a sexual relationship', handler: (st: GameState) => {
    ((st as any).nataliaQW = (st as any).nataliaQW ?? {})['sex_agree'] = 1;
    scene.text('After your friendly catch up, you prod Natalia in the arm to get her attention.');
    scene.text('When she turns to you, you lean in very close to her. "Erm… I\'ve been thinking about your earlier suggestion…" You pause to gather yourself as you realize your face is getting redder and redder. You nervously clear your throat and continue. "Well I\'ve thought about it, and yes that would be great. Although I\'d understand if…"');
    scene.text(`Clearly realizing you're finding this difficult, she cuts you off to save you further embarrassment. "It's okay, ${((st as any).pcs_nickname ?? '')}. I understand. I'll look forward to it." She pauses before continuing. "I can't now, but maybe next time?" She gives you a quick hug before getting up and leaving.`);
    scene.actions([
      { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
        ]);
      } else {
        scene.text('You spot Natalia in the library, so you walk over and greet her. "Hey Natalia, how are you?" you ask in a quiet voice.');
        scene.text(`"I'm fine, ${((s as any).pcs_nickname ?? '')}. You?"`);
        scene.text('"Mustn\'t grumble," you answer.');
        scene.text(`You spend a few minutes chatting about developments in school and some of the latest news before she leans close to you. "${((s as any).pcs_nickname ?? '')}… You remember our conversation about 'helping' each other out?" she asks.`);
        scene.text('You nod.');
        scene.text('"So… There\'s a spare room here that\'s never used. Shall we?"');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.text('"Sorry, but I\'m not in the mood now, and I have to get going. I just wanted to say hi before heading off."');
    scene.text('"No problem. See you soon," she replies.');
    scene.actions([
      { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    ((st as any).nataliaQW = (st as any).nataliaQW ?? {})['library_sex_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/kiss1.mp4');
    scene.text(`You silently nod before Natalia looks around. "Come on, ${((st as any).pcs_nickname ?? '')}, follow me," she whispers.`);
    scene.text('You both quickly leave the library and enter a small bathroom. Pushing a cabinet under the handle, she effectively locks the door before she gives you a passionate kiss.');
    scene.text(`"Okay ${((st as any).pcs_nickname ?? '')}, clothes off… Now!"`);
    scene.text('You giggle. "Desperate, or just practicing to be a dominatrix?"');
    scene.text('She laughs. "The former, I guess… So what are you waiting for?!"');
    scene.text('"Right. Well, you too then. Guess I\'d better see to your needs first, seeing as you\'re so desperate!" you reply.');
    scene.text('"Now you\'re talking!" she laughs.');
    scene.actions([
      { label: 'Get busy', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/2.mp4');
    scene.text('"Come on, I thought you were the desperate one? I\'m undressed and waiting!"');
    scene.text('Natalia finishes getting undressed as you get to work on her breasts.');
    scene.actions([
      { label: 'Move down', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/3.mp4');
    scene.text('"Just lie back and let me get to work on you."');
    scene.text('Natalia lies back and you slowly kiss your way down her body to her pussy.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/4.mp4');
    scene.text('Natalia starts moaning as you continue and you soon feel her pushing you back. "Let me sit up," she pants.');
    scene.text('Once she\'s sat up, you get back to work, flicking your tongue in and out whilst sucking at her clit.');
    scene.actions([
      { label: 'Getting her off', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni_give', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/5.mp4');
    scene.text('Her body soon starts to shake, and she lies down again, unable to sit up as she nears the point of no return.');
    scene.text('You redouble your efforts as she starts to shake and moan softly before she suddenly quivers and lets out a gasp as she reaches her peak and squirts into your mouth.');
    scene.actions([
      { label: 'Ending kiss', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/giving/6.mp4');
    scene.text('After sucking her dry, you slowly work your way up her body to her lips and kiss her. It\'s a long sensual kiss, and she sucks up her juices from around your mouth.');
    scene.text(`You then slowly pull apart, and she smiles at you. "Fuck ${((st as any).pcs_nickname ?? '')}, you're too good at that!"`);
    scene.text('"My turn now, and you know the required standard," you say while smiling at her.');
    scene.actions([
      { label: 'Boobs', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/2.mp4');
    scene.text('You both slowly stand as the bath fills with water, and Natalia looks at you lustfully as she gives you a kiss before moving down to your breasts.');
    scene.text('She starts kissing them and playing with your nipple as you bite your lip.');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/3.mp4');
    scene.text('Sitting on the bath corner, you spread your legs to allow Natalia to work on your pussy.');
    scene.text('She starts softly licking your pussy, quickening her pace before slowing again.');
    scene.actions([
      { label: 'Teasing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'cuni', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/4.mp4');
    scene.text('Natalia continues to tease, and your breathing starts to get shallow, enjoying her touch.');
    scene.text('Her tongue flicks in and out of you as she fingers your ass, your excitement slowly building.');
    scene.actions([
      { label: 'Bliss', handler: (st: GameState) => {
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni', 3, 'lesbian', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/5.mp4');
    scene.text('It doesn\'t take long for you to reach the edge as her tongue licks you and flicks in and out of your soaked pussy.');
    scene.text('You suddenly moan louder than you intended as you shake and spasm as you reach the moment of utter bliss.');
    scene.actions([
      { label: 'Sensual kiss', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 3, 'lesbian');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/6.mp4');
    scene.text('You slowly come down from your high as Natalia leans back in the bath and smiles. "So? How did I do?"');
    scene.text('You climb on top of her and give her a long, passionate kiss. "Does that answer your question?" you reply while winking at her.');
    scene.actions([
      { label: 'Need a wash', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'lesbian');
    qspCall(st, 'stat', '');
    qspCall(st, 'arousal', 'end');
    scene.img('images/characters/pavlovsk/school/girl/natalia/love/bathroom/receiving/1.mp4');
    scene.text('"We both need a good wash as we\'re all sweaty and sticky… Again! Let\'s shower quickly and then be on our way before we get caught?"');
    scene.text('"Yeah, sounds good," she replies in a low, lusty voice.');
    scene.text('You step into the bath, pour some gel on each other, and wash each down, occasionally pausing to enjoy each other\'s bodies.');
    scene.text('"Shit, not too much of that or we\'ll have to go another round!" you say to her.');
    scene.text('"Yeah, you\'re right. This has been fun, but let\'s not push our luck."');
    scene.text('You both quickly finish up, dry off and get dressed before leaving.');
    scene.actions([
      { label: 'Go back to the library', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
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
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'first_chat':
      enterFirstChat(s, scene);
      break;
    case 'library':
      enterLibrary(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const natalia_pavlova: LocationDef = {
  name: 'natalia_pavlova',
  title: 'You see Natalia sitting with the nerds, reading a book. When',
  region: 'other',
  enter: enter,
};
