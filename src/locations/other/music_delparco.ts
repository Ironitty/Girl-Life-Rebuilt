import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTalkwithzariyah(s: GameState, scene: SceneBuilder): void {
  scene.text('You ask the first waitress about Zariyah, and she directs you to the office. As you approach, she waves at you through the open door, signaling to enter "Yes, yes Ruslan, don\'t worry about it. No, I have to go, talk later."');
  if (((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 1) {
    // TODO-QSP: dynamic text: She puts down the phone "<<$pcs_nickname>>, so glad that you came. How are you? ...
    scene.text(`She puts down the phone "${((s as any).pcs_nickname ?? '')}, so glad that you came. How are you? Did you think about the offer?" she smiles at you as you sit down.`);
    scene.actions([
      { label: 'Accept the offer to play at Del Parco', goto: ['music_delparco', 'delparco_accept'] },
    ]);
  } else {
    if (((s as any).ml_delparcoQW ?? 0)?.['Stage'] === 2) {
      // TODO-QSP: dynamic text: She puts down the phone "<<$pcs_nickname>>, so glad that you came. How are you? ...
      scene.text(`She puts down the phone "${((s as any).pcs_nickname ?? '')}, so glad that you came. How are you? Did you come to talk about the offer?" she smiles at you as you sit down.`);
      scene.actions([
        { label: 'Discuss the live music with', goto: ['music_delparco', 'firstdiscussion'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['cafe_parco', 'start'] },
  ]);
  scene.build();
}

function enterDelparcoAccept(s: GameState, scene: SceneBuilder): void {
  ((s as any).ml_venues = (s as any).ml_venues ?? {})['del_parco'] = 1;
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Stage'] = 2;
  scene.text('You accept.');
  scene.text('(Warning - the event is unfinished, so there is lack of pictures and the text is simplified)');
  // TODO-QSP: end
  scene.actions([
    { label: 'Discuss the live music with', goto: ['music_delparco', 'firstdiscussion'] },
    { label: 'Leave', goto: ['cafe_parco', 'start'] },
  ]);
  scene.build();
}

function enterFirstdiscussion(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).week ?? 0) + 2 <= 7)) {
    (s as any).ml_answerdeadline = ((s as any).week ?? 0) + 2;
  } else {
    (s as any).ml_answerdeadline = ((s as any).week ?? 0) - 5;
  }
  scene.text('You take a seat facing Zariyah "I thought about it a bit more and, yes, I would like to do it just need to know a bit more. I never really did anything like this."');
  // TODO-QSP: dynamic text: She nods and picks up a pen "I understand, <<$pcs_nickname>>. Well, it''s not li...
  scene.text(`She nods and picks up a pen "I understand, ${((s as any).pcs_nickname ?? '')}. Well, it's not like playing in an arena or anything. We just need someone to play on Fridays. It would be half an hour, but it's not background music, you play songs."`);
  // TODO-QSP: dynamic text: She wiggles the pen, writing down some of what she say "And we would pay you. It...
  scene.text(`She wiggles the pen, writing down some of what she say "And we would pay you. It's not a lot of money, but we pay you ${qspFunc(s, 'money', 'string_profit', 800)}. And we would like to start two weeks from now at 8 in the evening."`);
  // TODO-QSP: dynamic text: You think for a moment. <<$func(''money'', ''string_profit'', 800)>> is way more...
  scene.text(`You think for a moment. ${qspFunc(s, 'money', 'string_profit', 800)} is way more than you can get anywhere else in Pavlovsk. On the other hand, 30 minutes is quite a few songs, and you will have to practice a lot in the beginning to do it.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept the offer', handler: (st: GameState) => {
    ((st as any).ml_delparcoQW = (st as any).ml_delparcoQW ?? {})['Stage'] = 4;
    scene.text('"I would love to do it!" you almost bite your tongue as you stop, but the fact that someone asks you to play is a first step to your dream. You almost couldn\'t contain yourself.');
    // TODO-QSP: dynamic text: "Excellent!" Zariyah smiles at you, and pushes the paper she was writing on towa...
    scene.text('"Excellent!" Zariyah smiles at you, and pushes the paper she was writing on towards you "Everything is there. Don\'t forget, two weeks from now, Friday at 20:00, so please be here latest half past seven.');
    scene.text('Trust me, you will need the time to set yourself up. And then every Friday if it works out."');
    ((st as any).ml_gigday = (st as any).ml_gigday ?? {})['delparco'] = ((st as any).daystart ?? 0) + 19 - ((st as any).week ?? 0);
    ((st as any).ml_gighour = (st as any).ml_gighour ?? {})['delparco'] = 19;
    ((st as any).ml_gigfee = (st as any).ml_gigfee ?? {})['delparco'] = 800;
    scene.actions([
      { label: 'Leave', goto: ['cafe_parco', 'start'] },
    ]);
  } },
    { label: 'Ask for some time', handler: (st: GameState) => {
    ((st as any).ml_delparcoQW = (st as any).ml_delparcoQW ?? {})['Stage'] = 3;
    ((st as any).ml_delparcoQW = (st as any).ml_delparcoQW ?? {})['Next Date'] = ((st as any).daystart ?? 0) + 2;
    (st as any).ml_delparcooriginaldate = ((st as any).daystart ?? 0);
    scene.text('"I have to think, I want to make sure that I can do it. It\'s a big commitment and I don\'t want to, you know… not do it right."');
    // TODO-QSP: dynamic text: Zariyah nods "Ok, <<$pcs_nickname>>, but please, let me know by <<$weekName[ml_a...
    scene.text(`Zariyah nods "Ok, ${((st as any).pcs_nickname ?? '')}, but please, let me know by ${((st as any).weekName ?? 0)?.[String((st as any).ml_answerdeadline ?? 0)] ?? ''}."`);
    scene.actions([
      { label: 'Leave', goto: ['cafe_parco', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAcceptafterthinking(s: GameState, scene: SceneBuilder): void {
  (s as any).offset = (((s as any).daystart ?? 0)-((s as any).ml_delparcooriginaldate ?? 0));
  ((s as any).ml_gigday = (s as any).ml_gigday ?? {})['delparco'] = ((s as any).daystart ?? 0) + 19 - ((s as any).offset ?? 0) - ((s as any).week ?? 0);
  ((s as any).ml_gighour = (s as any).ml_gighour ?? {})['delparco'] = 19;
  ((s as any).ml_gigfee = (s as any).ml_gigfee ?? {})['delparco'] = 800;
  ((s as any).ml_delparco = (s as any).ml_delparco ?? {})['performance'] = 50;
  ((s as any).ml_delparcoQW = (s as any).ml_delparcoQW ?? {})['Stage'] = 4;
  scene.text('"I would love to do it!" you almost bite your tongue as you stop, but the fact that someone asks you to play is a first step to your dream. You almost couldn\'t contain yourself.');
  // TODO-QSP: dynamic text: "Excellent!" Zariyah smiles at you, and pushes the paper she was writing on towa...
  scene.text('"Excellent!" Zariyah smiles at you, and pushes the paper she was writing on towards you "Everything is there. Don\'t forget, two weeks from now, Friday at 20:00, so please be here latest half past seven.');
  scene.text('Trust me, you will need the time to set yourself up. And then every Friday if it works out."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['cafe_parco', 'start'] },
  ]);
  scene.build();
}

function enterEveningshow(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  (s as any).ml_correction_chance = (((s as any).ml_performance ?? {})?.['set_quality'] ?? 0) + ((((s as any).pcs_hotcat ?? 0) - 5)*3) + (((s as any).pcs_perform ?? 0)/10);
  (s as any).ml_success = (Math.floor(Math.random() * 101) + 0);
  qspCall(s, 'exp_gain', 'instrmusic', (Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'exp_gain', 'vokal', (Math.floor(Math.random() * 2) + 1));
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['performed_minutes'] = ((s as any).ml_performance['performed_minutes'] ?? 0) + (30);
  ((s as any).ml_performance = (s as any).ml_performance ?? {})['total_time_performed'] = ((s as any).ml_performance['total_time_performed'] ?? 0) + (30);
  scene.img('images/pc/activities/music/GigPlaceHolder.mp4');
  if (((s as any).ml_success ?? 0) < ((s as any).ml_performance ?? 0)?.['set_quality']) {
    ((s as any).ml_delparco = (s as any).ml_delparco ?? {})['performance'] = ((s as any).ml_delparco['performance'] ?? 0) + (10);
    qspCall(s, 'fame', 'pav', 'music', (Math.floor(Math.random() * 5) + 1));
    qspCall(s, 'mood', 'raise', 'small');
    scene.text('You played with no issues playing everything as it was meant to be.');
  } else {
    if (((s as any).ml_success ?? 0) < ((s as any).ml_correction_chance ?? 0)) {
      ((s as any).ml_delparco = (s as any).ml_delparco ?? {})['performance'] = ((s as any).ml_delparco['performance'] ?? 0) + (5);
      qspCall(s, 'fame', 'pav', 'music', (Math.floor(Math.random() * 3) + 1));
      scene.text('You made some mistakes and forgot the lyrics in some places, but you were able to compensate by your performance and yes, your looks.');
      qspCall(s, 'mood', 'raise', 'tiny');
    } else {
      if (((s as any).ml_success ?? 0) < ((s as any).ml_correction_chance ?? 0) + 10) {
        qspCall(s, 'fame', 'pav', 'music', (Math.floor(Math.random() * (0 - (-2) + 1)) + ((-2))));
        qspCall(s, 'mood', 'lower', 'small');
        scene.text('You made quite a few mistakes and forgot the lyrics in places, and even though you tried your best to compensate by your performance and your looks, you could see that people have noticed them. ');
        scene.text('You will have to practice even more and rehearse your songs before your next gig.');
      } else {
        ((s as any).ml_delparco = (s as any).ml_delparco ?? {})['performance'] = ((s as any).ml_delparco['performance'] ?? 0) - (20);
        qspCall(s, 'fame', 'pav', 'music', (Math.floor(Math.random() * ((-5) - (-10) + 1)) + ((-10))));
        qspCall(s, 'mood', 'lower', 'medium');
        scene.text('Today definitely wasn\'t your day. You bombed, there is no better word for it. While you lasted your 30 minutes, you could see on the audience that they didn\'t really enjoy it, even though they politely clapped at the end.');
        scene.text('You will have to do some serious practicing if you want to have another chance to perform.');
      }
    }
  }
  scene.text('(The event is unfinished - do not complain about quality - report only serious bugs)');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['cafe_parco', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'talkwithzariyah':
      enterTalkwithzariyah(s, scene);
      break;
    case 'delparco_accept':
      enterDelparcoAccept(s, scene);
      break;
    case 'firstdiscussion':
      enterFirstdiscussion(s, scene);
      break;
    case 'acceptafterthinking':
      enterAcceptafterthinking(s, scene);
      break;
    case 'eveningshow':
      enterEveningshow(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const music_delparco: LocationDef = {
  name: 'music_delparco',
  title: 'You ask the first waitress about Zariyah, and she directs yo',
  region: 'other',
  enter: enter,
};
