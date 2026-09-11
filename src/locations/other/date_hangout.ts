import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  if (((s as any).locArgs?.[1] ?? 0) === 'knock') {
    // TODO-QSP: dynamic text: You knock on the door and <<$npcdesc>> opens up.
    scene.text(`You knock on the door and ${((s as any).npcdesc ?? 0)} opens up.`);
    scene.text('"Hey, come on in."');
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'together') {
      // TODO-QSP: dynamic text: You and <<$npcdesc>> saunter up to his door together, which he unlocks and leads...
      scene.text(`You and ${((s as any).npcdesc ?? 0)} saunter up to his door together, which he unlocks and leads you inside.`);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'disco') {
        // TODO-QSP: dynamic text: Strolling away from the disco, you come to <<$npcdesc>>'s apartment with him, an...
        scene.text(`Strolling away from the disco, you come to ${((s as any).npcdesc ?? 0)}'s apartment with him, and he unlocks the door to lead you inside.`);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'club') {
          // TODO-QSP: dynamic text: Leaving the club, you take a cab ride to <<$npcdesc>>'s apartment with him, and ...
          scene.text(`Leaving the club, you take a cab ride to ${((s as any).npcdesc ?? 0)}'s apartment with him, and he unlocks the door to lead you inside.`);
        } else {
          // TODO-QSP: dynamic text: You and <<$npcdesc>> saunter up to his door together, which he unlocks and leads...
          scene.text(`You and ${((s as any).npcdesc ?? 0)} saunter up to his door together, which he unlocks and leads you inside.`);
        }
      }
    }
  }
  qspCall(s, 'date_hangout', 'init', ((s as any).locArgs?.[2] ?? 0));
  // TODO-QSP: dynamic text: <center><<$npc_apt_hall[$npcID]>></center>
  scene.text(`<center>${((s as any).npc_apt_hall ?? 0)?.[String((s as any).npcID ?? 0)]}</center>`);
  qspCall(s, 'date_hangout', 'settle_in');
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['init'] < ((s as any).totminut ?? 0) - 60) {
    ((s as any).date_ev ?? {})['init'] = ((s as any).totminut ?? 0);
    ((s as any).date_ev ?? {})['at_home'] = 1;
    ((s as any).date_ev ?? {})['type'] = 'home_date';
    ((s as any).date_ev ?? {})['loc'] = 'date_hangout';
    ((s as any).date_ev ?? {})['loc_img'] = 'loc_img';
    ((s as any).date_ev ?? {})['talk_img'] = 'talk_img';
    ((s as any).date_ev ?? {})['activity_count'] = (((s as any).date_ev ?? {})['activity_count'] ?? 0) + (1);
  }
  // TODO-QSP: if
  // TODO-QSP: end}
  scene.build();
}

function enterLocImg(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  scene.build();
}

function enterTalkImg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['cuddle_active'] === 0) {
    if (((s as any).locArgs?.[1] ?? 0) !== 0) {
      scene.img(`images/shared/romance/dates/chill/couch_talk${qspUntranslated(s, "ARGS[1]", { location: "date_hangout" })}.jpg`);
    } else {
      scene.img(`images/shared/romance/dates/chill/couch_talk${Math.floor(Math.random() * 2) + 1}.jpg`);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) !== 0) {
      scene.img(`images/shared/romance/dates/chill/couch_talk${qspUntranslated(s, "ARGS[1]", { location: "date_hangout" })}.jpg`);
    } else {
      scene.img(`images/shared/romance/dates/chill/couch_talk${Math.floor(Math.random() * 2) + 1}.jpg`);
    }
  }
  scene.build();
}

function enterWatchingImage(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.img('images/shared/romance/dates/chill/laptop_watch1.jpg');
  } else {
    if (((s as any).date_ev ?? 0)?.['get_snacks'] > 0) {
      scene.img('images/shared/romance/dates/chill/tv_snacks1.jpg');
    } else {
      scene.img('images/shared/romance/dates/chill/tv_watch1.jpg');
    }
  }
  scene.build();
}

function enterSettleIn(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Sit on the couch', handler: (st: GameState) => {
    ((s as any).date_ev ?? {})['hangout_loc'] = 'living_couch';
    qspCall(s, 'date_hangout', 'loc_img');
    if (((s as any).coatworntype ?? 0) !== 'none') {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: As you step in, <<$npcdesc>> helps you to shrug out of your coat and hangs it up...
        scene.text(`As you step in, ${((s as any).npcdesc ?? 0)} helps you to shrug out of your coat and hangs it up for you by the door. While he does that, you drift over to his sofa and plop down on it.`);
      } else {
        // TODO-QSP: dynamic text: As you step in, you shrug yourself out of your coat and put it over the back of ...
        scene.text(`As you step in, you shrug yourself out of your coat and put it over the back of a chair. That finished, you meander on over to ${((s as any).npcdesc ?? 0)}'s sofa and plop down on it.`);
      }
    } else {
      // TODO-QSP: dynamic text: As you step in, you take in the sight of <<$npcdesc>>'s apartment and after a br...
      scene.text(`As you step in, you take in the sight of ${((s as any).npcdesc ?? 0)}'s apartment and after a brief moment, meander on over to his sofa and plop down on it.`);
    }
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"How about I get us something to drink?" You can tell by his tone that he definitely doesn\'t mean any kind of "soft" drinks.');
        scene.text('"Uhm-"');
        scene.text('"I\'ll get us some vodka."');
        scene.text('Before you even have a chance to voice your opinion, he already has a bottle out and is pouring generous measures into two glasses, handing one to you.');
        // TODO-QSP: xgt 'date_hangout', 'vodka_deliver'
      } else {
        scene.text('"How about I get us something to drink?" You can tell by his tone that he definitely doesn\'t mean any kind of "soft" drinks.');
        scene.actions([
          { label: 'How about tea?', handler: (st: GameState) => {
    scene.text('You hesitate.');
    if (((s as any).alko ?? 0) > 0) {
      scene.text('"I don\'t know... I think I might have had enough to drink tonight... Can I have some tea instead?"');
    } else {
      scene.text('"I don\'t know if I\'m up for that... Can I have a cup of tea instead?"');
    }
    if (((s as any).npc_pushy ?? 0) > 0) {
      scene.text('"Come on, you can handle a drink or two. Don\'t worry about it."');
      qspCall(s, 'willpower', 'resist', 'drink');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('"No," you say, firmly. "I really don\'t want anything with alcohol in it."');
    scene.text('"Well, if you insist," he sighs.');
    scene.text('It takes him a few minutes, but eventually he comes back with a mug of tea for you.');
    // TODO-QSP: xgt 'date_hangout', 'tea_deliver'
  } },
        ]);
      }
    } else {
      scene.text('"Sure," he smiles.');
      scene.text('It takes him a few minutes, but eventually he comes back with a mug of tea for you.');
      // TODO-QSP: xgt 'date_hangout', 'tea_deliver'
    }
  } },
          { label: 'Accept the drink', handler: (st: GameState) => {
    scene.text('"Okay," you nod and he smiles back.');
    scene.text('"Coming right up."');
    scene.text('You hear the clinking of glass and he comes back with a cup filled with a crystal clear liquid.');
    // TODO-QSP: xgt 'date_hangout', 'vodka_deliver'
  } },
        ]);
      }
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Can I get you something to drink?" <<$npcdesc>> says. "Anything you like."
        scene.text(`"Can I get you something to drink?" ${((s as any).npcdesc ?? 0)} says. "Anything you like."`);
        scene.actions([
          { label: 'No thanks', handler: (st: GameState) => {
    scene.text('"That\'s okay," you say politely. "I don\'t need anything."');
    if (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"No, really. Let me get you something," he says.');
      scene.text('"No, I\'m really-" you start.');
      scene.text('"I\'ll get you some tea," he smiles and busies himself in the kitchen before you can stop him.');
      scene.text('It takes him a few minutes, but eventually he comes back with a mug of tea for you.');
      // TODO-QSP: xgt 'date_hangout', 'tea_deliver'
    } else {
      scene.text('"Okay," he smiles and moves to sit down with you.');
      // TODO-QSP: xgt 'date_hangout', 'activity_menu'
    }
  } },
          { label: 'Tea?', handler: (st: GameState) => {
    scene.text('"How about tea?"');
    scene.text('"Sure," he smiles.');
    scene.text('It takes him a few minutes, but eventually he comes back with a mug of tea for you.');
    // TODO-QSP: xgt 'date_hangout', 'tea_deliver'
  } },
          { label: 'Vodka?', handler: (st: GameState) => {
    scene.text('"I\'d love some vodka if you have any."');
    scene.text('"Coming right up," he smiles.');
    scene.text('You hear the clinking of glass and he comes back with a cup filled with a crystal clear liquid.');
    // TODO-QSP: xgt 'date_hangout', 'vodka_deliver'
  } },
        ]);
      } else {
        scene.text('"Make yourself at home, I guess," he says, gesturing vaguely and sits down with you.');
        // TODO-QSP: xgt 'date_hangout', 'activity_menu'
      }
    }
  } },
    { label: 'Sit in the kitchen', handler: (st: GameState) => {
    // TODO-QSP: end}
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'init':
      enterInit(s, scene);
      break;
    case 'loc_img':
      enterLocImg(s, scene);
      break;
    case 'talk_img':
      enterTalkImg(s, scene);
      break;
    case 'watching_image':
      enterWatchingImage(s, scene);
      break;
    case 'settle_in':
      enterSettleIn(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const date_hangout: LocationDef = {
  name: 'date_hangout',
  title: '"Hey, come on in."',
  region: 'other',
  description: ['"Hey, come on in."'],
  enter: enter,
};
