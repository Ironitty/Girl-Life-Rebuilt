import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.text('You leisurely stroll through the park.');
  // TODO-QSP: dynamic text: <<$npcdesc>> tells you an anecdote:<br>
  scene.text(`${((s as any).npcdesc ?? 0)} tells you an anecdote:<br>`);
  qspCall(s, 'anekdot', '');
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
      qspCall(s, 'boylove', 'tits');
    }
    if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 30) {
      qspCall(s, 'boylove', 'figure');
    }
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 25) {
        qspCall(s, 'boylove', 'figure');
      }
    } else {
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 15) {
        qspCall(s, 'boylove', 'tits');
      }
      if (((s as any).npc_dates ?? 0)?.[String((s as any).npcID ?? 0)] > 20) {
        qspCall(s, 'boylove', 'figure');
      }
    }
  }
  scene.actions([
    { label: 'Laugh', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    // TODO-QSP: xgt 'parkM', 'a'
  } },
    { label: 'Smile', handler: (st: GameState) => {
    // TODO-QSP: xgt 'parkM', 'a'
  } },
    { label: 'Not funny', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    // TODO-QSP: xgt 'parkM', 'a'
  } },
  ]);
  scene.build();
}

function enterA(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_gentle ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    qspCall(s, 'stihi', '');
    // TODO-QSP: dynamic text: <<$npcdesc>> reads poetry to you <<$stihi>>.
    scene.text(`${((s as any).npcdesc ?? 0)} reads poetry to you ${((s as any).stihi ?? 0)}.`);
    scene.actions([
      { label: 'Further', goto: ['parkM', 'aa'] },
    ]);
  } else {
    if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> to take you by the hand and leads you through the deserted paths of...
      scene.text(`${((s as any).npcdesc ?? 0)} to take you by the hand and leads you through the deserted paths of the park.`);
      scene.actions([
        { label: 'Further', goto: ['parkM', 'aa'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> hugs your waist. "You're a cool girl." he said and leans in to kiss...
      scene.text(`${((s as any).npcdesc ?? 0)} hugs your waist. "You're a cool girl." he said and leans in to kiss you on the lips.`);
      scene.actions([
        { label: 'Kiss', goto: ['parkM', 'kiss'] },
        { label: 'Step back', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    // TODO-QSP: dynamic text: <<$npcdesc>> does not look happy as you pull away from his kiss, "Okay, <<$pcs_n...
    scene.text(`${((s as any).npcdesc ?? 0)} does not look happy as you pull away from his kiss, "Okay, ${((s as any).pcs_nickname ?? 0)}, lets keep on trekking."`);
    scene.actions([
      { label: 'Next', goto: ['parkM', 'aa'] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  // TODO-QSP: dynamic text: <<$npcdesc>> kisses you and reaches around to gently massage your ass. His touch...
  scene.text(`${((s as any).npcdesc ?? 0)} kisses you and reaches around to gently massage your ass. His touch excites you and ${((s as any).npcdesc ?? 0)} takes you by the hand and drags you into the bushes.`);
  qspCall(s, 'arousal', 'kiss', 15);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Stop it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    // TODO-QSP: dynamic text: <<$npcdesc>> does not look happy as you push his hand away, "Okay, <<$pcs_nickna...
    scene.text(`${((s as any).npcdesc ?? 0)} does not look happy as you push his hand away, "Okay, ${((s as any).pcs_nickname ?? 0)}, Let's keep on going."`);
    scene.actions([
      { label: 'Further', goto: ['parkM', 'aa'] },
    ]);
  } },
    { label: 'Go with it', goto: ['parkM', 'sexrand'] },
  ]);
  scene.build();
}

function enterSexrand(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/event/park/park.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls you into the bushes and exposes your breasts, suckling on you...
  scene.text(`${((s as any).npcdesc ?? 0)} pulls you into the bushes and exposes your breasts, suckling on your nipples. You close your eyes, immersed in bliss. ${((s as any).npcdesc ?? 0)} kneels in front of you and starts on your pussy.`);
  qspCall(s, 'arousal', 'foreplay', 15);
  qspCall(s, 'arousal', 'cuni', (-15));
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Stop it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    // TODO-QSP: dynamic text: You sidestep and cover your chest, <<$npcdesc>> looks annoyed, "Okay, <<$pcs_nic...
    scene.text(`You sidestep and cover your chest, ${((s as any).npcdesc ?? 0)} looks annoyed, "Okay, ${((s as any).pcs_nickname ?? 0)}, Let's go."`);
    scene.actions([
      { label: 'Further', goto: ['parkM', 'aa'] },
    ]);
  } },
    { label: 'Allow', goto: ['parkM', 'sexrand1'] },
  ]);
  scene.build();
}

function enterSexrand1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/event/park/park1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> bares your pussy and began to caress it gently, then increasing the...
  scene.text(`${((s as any).npcdesc ?? 0)} bares your pussy and began to caress it gently, then increasing the tempo, you are very excited, your pussy is sopping, aching for more. ${((s as any).npcdesc ?? 0)} whispers to you, "Suck me!"`);
  qspCall(s, 'arousal', 'vaginal_finger', 15);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'We can not do that here', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    // TODO-QSP: dynamic text: You backed away from him and began to dress, <<$npcdesc>> does not look happy, "...
    scene.text(`You backed away from him and began to dress, ${((s as any).npcdesc ?? 0)} does not look happy, "Okay, ${((s as any).pcs_nickname ?? 0)}, Let's go."`);
    scene.actions([
      { label: 'Next', goto: ['parkM', 'aa'] },
    ]);
  } },
    { label: 'Get on your knees', goto: ['parkM', 'sexrand2'] },
  ]);
  scene.build();
}

function enterSexrand2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  (s as any).bja = ((s as any).bja ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/event/park/park2.jpg');
  // TODO-QSP: dynamic text: You kneel in front of <<$npcdesc>> swallowing his sticking <<$dick_desc>> member...
  scene.text(`You kneel in front of ${((s as any).npcdesc ?? 0)} swallowing his sticking ${((s as any).dick_desc ?? 0)} member. You cup his balls and began to suck.`);
  // TODO-QSP: dynamic text: After a few minutes <<$npcdesc>> tells you, "Baby, if you continue, I'll finish....
  scene.text(`After a few minutes ${((s as any).npcdesc ?? 0)} tells you, "Baby, if you continue, I'll finish. Let's have sex!"`);
  qspCall(s, 'arousal', 'bj', 15, 'sub');
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Continue to suck', goto: ['parkM', 'sexrand3'] },
    { label: 'Sex', goto: ['parkM', 'sexrand4'] },
  ]);
  scene.build();
}

function enterSexrand3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/boyfriend/sex/event/park/park3.jpg');
  // TODO-QSP: dynamic text: You continued enthusiastically sucking his cock and <<$npcdesc>> moans, grabs yo...
  scene.text(`You continued enthusiastically sucking his cock and ${((s as any).npcdesc ?? 0)} moans, grabs you by the hair realizing a vigorous stream of burning semen into your mouth.`);
  scene.text('You choke swallowing it, but his mighty load doesn\'t fit in your mouths and pours out spreading onto your chin.');
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls his member out of your cum-filled mouth stuffed and tucked it...
  scene.text(`${((s as any).npcdesc ?? 0)} pulls his member out of your cum-filled mouth stuffed and tucked it into his pants, helping you rise then says goodbye, promising to call you.`);
  qspCall(s, 'arousal', 'bj', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
    } else {
      if (((s as any).home ?? 0)?.['town'] === 'oldtown') {
        scene.actions([{ label: 'Continue', goto: ['pushkin_parks', 'start'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterSexrand4(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/characters/city/boyfriend/sex/event/park/park4.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls you to your feet, turns you around and bends you over as he e...
  scene.text(`${((s as any).npcdesc ?? 0)} pulls you to your feet, turns you around and bends you over as he enters you. You have to grab the ground to keep from going over as he pounds you.`);
  qspCall(s, 'arousal', 'vaginal', 15, 'sub');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0), 1);
  qspCall(s, 'stat', '');
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    if (((s as any).home ?? 0)?.['town'] === 'pavlovsk') {
      scene.actions([{ label: 'Continue', goto: ['pav_park', 'start'] }]);
    } else {
      if (((s as any).home ?? 0)?.['town'] === 'oldtown') {
        scene.actions([{ label: 'Continue', goto: ['pushkin_parks', 'start'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['city_park', 'start'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterAa(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  scene.img('images/locations/pavlovsk/park/skver.jpg');
  if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 55) {
    // TODO-QSP: dynamic text: <center>While walking for an hour <<$npcdesc>> proposes to hold your hand.</cent...
    scene.text(`<center>While walking for an hour ${((s as any).npcdesc ?? 0)} proposes to hold your hand.</center>`);
    scene.actions([
      { label: 'You gladly accept', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    (s as any).temp = Math.floor(Math.random() * 3) + 1;
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/locations/gadukino/hunters/hanterhands.jpg');
    } else {
      if (((s as any).temp ?? 0) === 2) {
        scene.img('images/locations/pavlovsk/park/holding_hands_park_1.jpg');
      } else {
        scene.img('images/locations/shared/date/parkholding.jpg');
      }
    }
    scene.text('<center>You hold his hand as you walk through the park.</center>');
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
    ]);
  } },
      { label: 'Reject his request', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <center><<$npcdesc>> looks rather disappointed as you continue your walk through...
    scene.text(`<center>${((s as any).npcdesc ?? 0)} looks rather disappointed as you continue your walk through the park.</center>`);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 65) {
      // TODO-QSP: dynamic text: <center>While walking for an hour <<$npcdesc>> stops to give you a warm hug.</ce...
      scene.text(`<center>While walking for an hour ${((s as any).npcdesc ?? 0)} stops to give you a warm hug.</center>`);
      scene.actions([
        { label: 'Hug him', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    (s as any).temp = Math.floor(Math.random() * 4) + 1;
    scene.img(`images/locations/pavlovsk/park/hugging_park_${((s as any).temp ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: <center>You enjoy <<$npcdesc>>'s warm embrace.</center>
    scene.text(`<center>You enjoy ${((s as any).npcdesc ?? 0)}'s warm embrace.</center>`);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
    ]);
  } },
        { label: 'Pull away', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <center><<$npcdesc>> looks rather disappointed as you continue your walk through...
    scene.text(`<center>${((s as any).npcdesc ?? 0)} looks rather disappointed as you continue your walk through the park.</center>`);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 75) {
        // TODO-QSP: dynamic text: <center>While walking for an hour <<$npcdesc>> stops occasionally to give you a ...
        scene.text(`<center>While walking for an hour ${((s as any).npcdesc ?? 0)} stops occasionally to give you a tender kiss.</center>`);
        scene.actions([
          { label: 'Gladly accept with a warm smile', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    (s as any).temp = Math.floor(Math.random() * 5) + 1;
    scene.img(`images/locations/pavlovsk/park/kissing_park_${((s as any).temp ?? 0)}.jpg`);
    // TODO-QSP: dynamic text: <center>You are very happy with all the affection and attention <<$npcdesc>> is ...
    scene.text(`<center>You are very happy with all the affection and attention ${((s as any).npcdesc ?? 0)} is giving you.</center>`);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
    ]);
  } },
          { label: 'Pull away', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/rejectedkiss.jpg');
    // TODO-QSP: dynamic text: <center><<$npcdesc>> looks rather disappointed as you continue your walk through...
    scene.text(`<center>${((s as any).npcdesc ?? 0)} looks rather disappointed as you continue your walk through the park.</center>`);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), (Math.floor(Math.random() * (0 - -1 + 1)) + (-1)));
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
    ]);
  } },
        ]);
      } else {
        (s as any).temploverrand = Math.floor(Math.random() * 3) + 1;
        if (((s as any).temploverrand ?? 0) === 1) {
        } else {
          if (((s as any).temploverrand ?? 0) === 2) {
          }
        }
        // TODO-QSP: dynamic text: <center><<$npcdesc>> takes you on a nice walk through the park…</center>
        scene.text(`<center>${((s as any).npcdesc ?? 0)} takes you on a nice walk through the park…</center>`);
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
    if (((s as any).temploverrand ?? 0) < 3) {
      (s as any).temp = Math.floor(Math.random() * 5) + 1;
      scene.img(`images/locations/pavlovsk/park/kissing_park_${((s as any).temp ?? 0)}.jpg`);
    } else {
      (s as any).temp = Math.floor(Math.random() * 3) + 1;
      scene.img(`images/locations/pavlovsk/park/making_out_park_bench_${((s as any).temp ?? 0)}.jpg`);
    }
    // TODO-QSP: dynamic text: <center>While walking for an hour <<$npcdesc>> <<$temploveraction>></center>
    scene.text(`<center>While walking for an hour ${((s as any).npcdesc ?? 0)} ${((s as any).temploveraction ?? 0)}</center>`);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), Math.floor(Math.random() * 2) + 0);
    scene.actions([
      { label: '<<$npcdesc>> takes you home…', goto: ['sexm', 'start'] },
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'a':
      enterA(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'sexrand':
      enterSexrand(s, scene);
      break;
    case 'sexrand1':
      enterSexrand1(s, scene);
      break;
    case 'sexrand2':
      enterSexrand2(s, scene);
      break;
    case 'sexrand3':
      enterSexrand3(s, scene);
      break;
    case 'sexrand4':
      enterSexrand4(s, scene);
      break;
    case 'aa':
      enterAa(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const parkM: LocationDef = {
  name: 'parkM',
  title: 'You leisurely stroll through the park.',
  region: 'other',
  description: ['You leisurely stroll through the park.'],
  enter: enter,
};
