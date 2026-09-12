import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
  // TODO-QSP: end
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['init'] < ((s as any).totminut ?? 0) - 60) {
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['init'] = ((s as any).totminut ?? 0);
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['at_home'] = 1;
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['type'] = 'home_date';
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['loc'] = 'date_hangout';
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['loc_img'] = 'loc_img';
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['talk_img'] = 'talk_img';
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['activity_count'] = ((s as any).date_ev['activity_count'] ?? 0) + (1);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLocImg(s: GameState, scene: SceneBuilder): void {
  scene.img(`${((s as any).npc_pic ?? 0)?.[String((s as any).npcID ?? 0)]}`);
  // TODO-QSP: end
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
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterSettleIn(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit on the couch', handler: (st: GameState) => {
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['hangout_loc'] = 'living_couch';
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
        scene.actions([{ label: 'Continue', goto: ['date_hangout', 'vodka_deliver'] }]);
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
  }, goto: ['date_hangout', 'tea_deliver'] },
        ]);
      }
    } else {
      scene.text('"Sure," he smiles.');
      scene.text('It takes him a few minutes, but eventually he comes back with a mug of tea for you.');
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'tea_deliver'] }]);
    }
  } },
          { label: 'Accept the drink', handler: (st: GameState) => {
    scene.text('"Okay," you nod and he smiles back.');
    scene.text('"Coming right up."');
    scene.text('You hear the clinking of glass and he comes back with a cup filled with a crystal clear liquid.');
  }, goto: ['date_hangout', 'vodka_deliver'] },
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
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'tea_deliver'] }]);
    } else {
      scene.text('"Okay," he smiles and moves to sit down with you.');
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'activity_menu'] }]);
    }
  } },
          { label: 'Tea?', handler: (st: GameState) => {
    scene.text('"How about tea?"');
    scene.text('"Sure," he smiles.');
    scene.text('It takes him a few minutes, but eventually he comes back with a mug of tea for you.');
  }, goto: ['date_hangout', 'tea_deliver'] },
          { label: 'Vodka?', handler: (st: GameState) => {
    scene.text('"I\'d love some vodka if you have any."');
    scene.text('"Coming right up," he smiles.');
    scene.text('You hear the clinking of glass and he comes back with a cup filled with a crystal clear liquid.');
  }, goto: ['date_hangout', 'vodka_deliver'] },
        ]);
      } else {
        scene.text('"Make yourself at home, I guess," he says, gesturing vaguely and sits down with you.');
        scene.actions([{ label: 'Continue', goto: ['date_hangout', 'activity_menu'] }]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterTeaDeliver(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a sip', handler: (st: GameState) => {
    scene.img('images/shared/drinks/tea.jpg');
    qspCall(s, 'beverage', 'tea_stats');
    qspCall(s, 'stat', '');
    if (((s as any).date_ev ?? 0)?.['hangout_loc'] === 'living_couch') {
      scene.text('Accepting the mug, you take a sip and a warm wave washes through your stomach. Sighing, you settle into the couch.');
    } else {
      if (((s as any).date_ev ?? 0)?.['hangout_loc'] === 'kitchen_table') {
        scene.text('Accepting the mug, you take a sip and a warm wave washes through your stomach Sighing, you settle back into your seat.');
      } else {
        scene.text('Accepting the mug, you take a sip and a warm wave washes through your stomach Sighing, you settle back into your seat.');
      }
    }
  }, goto: ['date_hangout', 'activity_menu'] },
  ]);
  scene.build();
}

function enterVodkaDeliver(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take a sip', handler: (st: GameState) => {
    qspCall(s, 'beverage', 'vodka_stats');
    qspCall(s, 'stat', '');
    if (((s as any).date_ev ?? 0)?.['hangout_loc'] === 'living_couch') {
      scene.text('Accepting the glass, you take a sip and a burning chill washes through your stomach and leaves you feeling warm. Sighing, you settle into the couch.');
    } else {
      if (((s as any).date_ev ?? 0)?.['hangout_loc'] === 'kitchen_table') {
        scene.text('Accepting the glass, you take a sip and a burning chill washes through your stomach and leaves you feeling warm. Sighing, you settle back into your seat.');
      } else {
        scene.text('Accepting the glass, you take a sip and a burning chill washes through your stomach and leaves you feeling warm. Sighing, you settle back into your seat.');
      }
    }
  }, goto: ['date_hangout', 'activity_menu'] },
  ]);
  scene.build();
}

function enterActivityMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 3) {
    scene.actions([
      { label: 'Say goodnight', goto: ['date_after', 'apartment_date_end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Say goodbye', goto: ['date_after', 'apartment_date_end'] },
    ]);
  }
  if (((s as any).date_ev ?? 0)?.['last_active'] === 'chatting') {
    scene.actions([
      { label: 'Keep chatting', goto: ['date_hangout', 'chat_top'] },
    ]);
  } else {
    scene.actions([
      { label: 'Chat about stuff', goto: ['date_hangout', 'chat_top'] },
    ]);
  }
  if (((s as any).date_ev ?? 0)?.['cuddle_active'] === 0) {
    scene.actions([
      { label: 'Cuddle up together', goto: ['date_hangout', 'cuddle_up'] },
    ]);
  } else {
    scene.actions([
      { label: 'Separate', goto: ['date_hangout', 'cuddle_stop'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatTop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['chat_count'] = ((s as any).date_ev['chat_count'] ?? 0) + (1);
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['last_active'] = 'chatting';
  qspCall(s, 'date_hangout', 'loc_img');
  qspCall(s, 'date_funcs', 'set_continue', 'date_hangout', 'chat_top');
  qspCall(s, 'date_hangout', 'activity_menu');
  if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] >= (Math.floor(Math.random() * 10) + 1)  &&  ((s as any).date_ev ?? 0)?.['make_move_lock'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['date_hangout', 'boy_making_moves', '\'chat\''] }]);
  } else {
    scene.actions([{ label: 'Continue', goto: ['date_talk', 'talk_menu'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFlirtTop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['chat_count'] = ((s as any).date_ev['chat_count'] ?? 0) + (1);
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['last_active'] = 'flirting';
  qspCall(s, 'date_hangout', 'loc_img');
  qspCall(s, 'date_funcs', 'set_continue', 'date_hangout', 'flirt_top');
  // TODO-QSP: dynamic text: You're flirting with <<$npcdesc>>
  scene.text(`You're flirting with ${((s as any).npcdesc ?? 0)}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Flirt romantically', handler: (st: GameState) => {
    qspCall(s, 'date_hangout', 'talk_img');
    qspCall(s, 'date_hangout', 'activity_menu');
    qspCall(s, 'date_talk', 'flirt_arg', 'romantically');
  } },
  ]);
  scene.build();
}

function enterWatchHangTop(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pick something', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'watch_hang_menu'
  } },
  ]);
  scene.build();
}

function enterWatchHangMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Something romantic', handler: (st: GameState) => {
    scene.text('"Can we watch something romantic?"');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Okay, if that\'s what you want."');
    } else {
      scene.text('"I guess."');
    }
    scene.actions([
      { label: 'Watch', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'watch_part1', 'romantic'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterWatchPart1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['cont_arg'] = 'watch_part2';
  qspCall(s, 'date_hangout', 'watching_image');
  if (((s as any).locArgs?.[1] ?? 0) === 'romantic') {
    scene.text('You watch something romantic.');
  } else {
    scene.text('You watch something together.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterWatchSexScene(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/phone_ignore.mp4');
  if (((s as any).locArgs?.[1] ?? 0) === 'romantic') {
    scene.text('A steamy, sensual sex scene begins.');
  } else {
    scene.text('As the movie progresses and the scene changes, the characters are thrust into an intimate sex scene. The protagonist\'s phone buzzes in the foreground while she enthusiastically rides another man, her hips rolling like waves and breasts jiggling with every arch of her back.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s turning you on...', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'watch_turnon'
  } },
  ]);
  scene.build();
}

function enterTurnonBottomDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['turnon_desc'] = 'seeping into your panties. ';
  } else {
    if (((s as any).PCloPantsShortness ?? 0) >= 3) {
      if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['turnon_desc'] = 'seeping into the crotch of your pants. ';
    } else {
      if (((s as any).PCloPantsShortness ?? 0) > 0) {
        if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['turnon_desc'] = 'seeping into the crotch of your shorts. ';
      } else {
        if (((s as any).PCloSkirtShortness ?? 0) > 0) {
          if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['turnon_desc'] = 'wetting your thighs beneath your skirt. ';
        } else {
          if (!(s as any).temp) (s as any).temp = {}; (s as any).temp['turnon_desc'] = 'wetting your thighs. ';
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWatchTurnon(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_hangout', 'turnon_bottom_desc');
  if (((s as any).locArgs?.[1] ?? 0) === 'romantic') {
    // TODO-QSP: dynamic text: The characters on the screen keep rubbing their bodies together, a writhing mass...
    scene.text(`The characters on the screen keep rubbing their bodies together, a writhing mass of sensual flesh, and a heat blossoms inside you. Your brain knows its fake, but your body can't tell the difference. With a start, you realize you're squirming in your seat. Your nipples are hard, you're rubbing your legs together, and a hot moisture is ${((s as any).temp ?? 0)?.['turnon_desc']}`);
  } else {
    // TODO-QSP: dynamic text: The characters on the screen keep rubbing their bodies together, a writhing mass...
    scene.text(`The characters on the screen keep rubbing their bodies together, a writhing mass of sensual flesh, and a heat blossoms inside you. Your brain knows its fake, but your body can't tell the difference. With a start, you realize you're squirming in your seat. Your nipples are hard, you're rubbing your legs together, and a hot moisture is ${((s as any).temp ?? 0)?.['turnon_desc']}`);
  }
  if ((Math.floor(Math.random() * 5) + 1) <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['boy_turned_on'] = 1;
    if (((s as any).date_ev ?? 0)?.['cuddle_active'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is faring no better and you can feel his <<$npc_dick_desc[$npcID]>>...
      scene.text(`${((s as any).npcdesc ?? 0)} is faring no better and you can feel his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock hardening against your ass, consciously or unconsciously grinding his hips into yours a little bit.`);
    } else {
      // TODO-QSP: dynamic text: A glance over shows a similar effect happening to <<$npcdesc>>. You can already ...
      scene.text(`A glance over shows a similar effect happening to ${((s as any).npcdesc ?? 0)}. You can already see the hard outline of his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock, bulging in his pants.`);
    }
  } else {
    // TODO-QSP: dynamic text: You shoot a quick glance at <<$npcdesc>> to see if he notices, but he's still ab...
    scene.text(`You shoot a quick glance at ${((s as any).npcdesc ?? 0)} to see if he notices, but he's still absorbed in the movie. Or maybe just the scene and its sex. In either case, he doesn't notice your arousal.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ignore it', handler: (st: GameState) => {
    scene.text('As hard as it is, you force yourself to try to ignore your horniness and focus on the movie. Which, unfortunately does leave you focusing on the sex scene too. But eventually it ends and you manage to transition back to a more normal state, albeit with stickier thighs.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'watch_part2'
  } },
    ]);
  } },
    { label: 'Make a move', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'pc_making_moves', 'watching'
  } },
  ]);
  scene.build();
}

function enterWatchPart2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_hangout', 'loc_img');
  scene.text('Eventually, it comes to an end and the credits roll on screen. You glance at the clock.');
  // TODO-QSP: dynamic text: <b>' + $func('time', 'get_time_string') + '</b>
  scene.text('<b>\' + $func(\'time\', \'get_time_string\') + \'</b>');
  if (((s as any).date_ev ?? 0)?.['boy_turned_on'] === 1) {
    scene.actions([
      { label: '<<$npcdesc>> is saying something...', handler: (st: GameState) => {
    // TODO-QSP: date_ev['boy_turned_on'] = 0
  }, goto: ['date_hangout', 'boy_making_moves', 'watch_end'] },
    ]);
  } else {
    scene.actions([
      { label: 'Do something else', handler: (st: GameState) => {
    qspCall(s, 'date_hangout', 'loc_img');
    scene.text('You decide you don\'t want to call it quits yet, but maybe want to do something other than watch TV.');
  }, goto: ['date_hangout', 'activity_menu'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcMakingMoves(s: GameState, scene: SceneBuilder): void {
  scene.img('images/system/image_needed.png');
  if (((s as any).date_ev ?? 0)?.['cuddle_active'] === 0) {
    if (((s as any).locArgs?.[1] ?? 0) === 'watching') {
      if (((s as any).date_ev ?? 0)?.['boy_turned_on'] === 1) {
        // TODO-QSP: dynamic text: Heart pounding inside your chest, you scooch over to <<$npcdesc>>. Your hand lig...
        scene.text(`Heart pounding inside your chest, you scooch over to ${((s as any).npcdesc ?? 0)}. Your hand lightly trails up the inside of his thigh until it bumps up against his rock hard ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock in his pants. You let your fingers trace the outline of it, all but grabbing hold of it, with your gaze fixed on him, the movie forgotten in the background. Desire burns in his eyes to match your own.`);
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          if (((s as any).PCloSkirtShortness ?? 0) > 0) {
            scene.text('Suddenly you feel <i>his</i> hand, reaching under your skirt...');
          } else {
            scene.text('Suddenly you feel <i>his</i> hand, slipping down the front of your pants...');
          }
          scene.actions([
            { label: 'Continue', goto: ['date_hangout', 'hand_down_pants'] },
          ]);
        } else {
          scene.actions([
            { label: 'Kiss him', goto: ['date_hangout', 'kiss_to_sex'] },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: Heart pounding inside your chest, you scooch over to <<$npcdesc>>. Your hand lig...
        scene.text(`Heart pounding inside your chest, you scooch over to ${((s as any).npcdesc ?? 0)}. Your hand lightly trails up the inside of his thigh until it bumps up against his soft ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock in his pants. You let your fingers trace the outline of it, all but grabbing hold of it, with your gaze fixed on him, the movie forgotten in the background.`);
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  ||  (Math.floor(Math.random() * 10) + 1) <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
          // TODO-QSP: dynamic text: Your attentions startle <<$npcdesc>>, but his cock stiffens at your touch noneth...
          scene.text(`Your attentions startle ${((s as any).npcdesc ?? 0)}, but his cock stiffens at your touch nonetheless.`);
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            if (((s as any).PCloSkirtShortness ?? 0) > 0) {
              scene.text('Suddenly you feel <i>his</i> hand, reaching under your skirt...');
            } else {
              scene.text('Suddenly you feel <i>his</i> hand, slipping down the front of your pants...');
            }
            scene.actions([
              { label: 'Continue', goto: ['date_hangout', 'hand_down_pants'] },
            ]);
          } else {
            scene.actions([
              { label: 'Kiss him', goto: ['date_hangout', 'kiss_to_sex'] },
            ]);
          }
        } else {
          // TODO-QSP: dynamic text: Your attentions startle <<$npcdesc>>, who looks back at you with bewildered eyes...
          scene.text(`Your attentions startle ${((s as any).npcdesc ?? 0)}, who looks back at you with bewildered eyes.`);
          // TODO-QSP: dynamic text: "Uhh, <<$pcs_nickname>>... what are you doing?"
          scene.text(`"Uhh, ${((s as any).pcs_nickname ?? 0)}... what are you doing?"`);
          scene.actions([
            { label: 'Back down', handler: (st: GameState) => {
    qspCall(s, 'date_hangout', 'loc_img');
    scene.text('The muscles in your neck and back scrunch up as a wave of embarrassment rolls through you.');
    // TODO-QSP: dynamic text: "Oh. Er, um... I just..." <<$npcdesc>> looks as awkward as you feel, if that's e...
    scene.text(`"Oh. Er, um... I just..." ${((s as any).npcdesc ?? 0)} looks as awkward as you feel, if that's even possible.`);
    scene.text('"Can we just um, keep watching?"');
    scene.text('"Sure." You settle down, hoping he can\'t see how red your face is. It ends up being really hard to concentrate on what you\'re watching for a totally different reason.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gt 'date_hangout', $date_ev['cont_arg']
  } },
    ]);
  } },
          ]);
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'watching') {
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyMakingMoves(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/necking1.mp4');
  if (((s as any).locArgs?.[1] ?? 0) === 'chat') {
    if (((s as any).date_ev ?? 0)?.['chat_count'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> and you talk about inconsequential things. But it's less than a min...
      scene.text(`${((s as any).npcdesc ?? 0)} and you talk about inconsequential things. But it's less than a minute before he moves closer to you. And then he's sitting next to you. And then he's caressing your face and peppering your neck with kisses. If you don't stop him, you know exactly where this is going to go...`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> and you are talk about inconsequential things when he moves closer ...
      scene.text(`${((s as any).npcdesc ?? 0)} and you are talk about inconsequential things when he moves closer to you. And then he's sitting next to you. And then he's caressing your face and peppering your neck with kisses. If you don't stop him, you know exactly where this is going to go...`);
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'watch_end') {
      scene.text('"That was nice, wasn\'t it?" he murmurs, kissing you on the neck.');
      scene.text('"Yeah." It\'s only after you say that, you realize his arm is wrapping around your waist. And his hands are plucking at your clothes... It\'s pretty clear what he wants right now...');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> moves closer to you. And then he's sitting next to you. And then he...
      scene.text(`${((s as any).npcdesc ?? 0)} moves closer to you. And then he's sitting next to you. And then he's caressing your face and peppering your neck with kisses. If you don't stop him, you know exactly where this is going to go...`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him', handler: (st: GameState) => {
    if (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/foreplay/necking1.mp4');
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'boy_making_moves_press'] }]);
    } else {
      // TODO-QSP: dynamic text: "<<$npcdesc>>! <<$npcdesc>>, stop-!" you say, turning your face from his kisses.
      scene.text(`"${((s as any).npcdesc ?? 0)}! ${((s as any).npcdesc ?? 0)}, stop-!" you say, turning your face from his kisses.`);
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'boy_making_moves_stop'] }]);
    }
  } },
    { label: 'Kiss him back', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'kiss', 5);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kiss/makeout.mp4');
    scene.text('Feeling the mood, you let his kisses path their way up your neck to find your lips. One kiss becomes two and soon you\'re having a full-blown makeout session together. If you don\'t stop soon, it\'s going to escalate into something more...');
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    if (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'boy_making_moves_press'] }]);
    } else {
      qspCall(s, 'date_hangout', 'loc_img');
      scene.text('Abruptly, you break off a kiss, gasping for breath.');
      if (((s as any).npc_last_sex ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"Sorry," you say, shyly. "Things are just moving a little fast right now. Is it okay if we... slow down a little?"');
        scene.text('"Yeah," he says, grinning ruefully himself. "I guess I was getting carried away."');
      } else {
        scene.text('"Sorry," you say, shyly. "I just... don\'t want to do anything right now... Is that okay?"');
        scene.text('"I guess..." he says, grinning ruefully himself.');
      }
      scene.actions([{ label: 'Continue', goto: ['date_hangout', 'activity_menu'] }]);
    }
  } },
      { label: 'Let it escalate (sex)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: ... and <<$npcdesc>>'s tongue in your mouth makes it impossible to care. You moa...
    scene.text(`... and ${((s as any).npcdesc ?? 0)}'s tongue in your mouth makes it impossible to care. You moan around it as his hands start to find the sensitive parts of your body and you thinking...`);
    scene.actions([
      { label: 'Screw it', handler: (st: GameState) => {
    scene.text('<i>Oh screw it, I don\'t even care anymore...</i>');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'go_to_sex'
  } },
    ]);
  } },
      { label: 'Bad idea', handler: (st: GameState) => {
    scene.text('<i>Ohhhhhh this is such a bad idea...</i> as your eyes roll into the back of your head with pleasure.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'go_to_sex'
  } },
    ]);
  } },
      { label: 'Excited!', handler: (st: GameState) => {
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['starting_mood'] = 'excited';
    if (((s as any).pcs_think ?? 0)?.['think_virgin'] === 0) {
      scene.text('<i>Oh this is going to feel sooooooo gooood...</i> as your eyes roll into the back of your head with pleasure.');
    } else {
      scene.text('<i>I wonder if I might lose my virginity tonight...</i> as your heart flutters in your chest.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'go_to_sex'
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Let it escalate (reluctant sex)', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 5);
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['starting_mood'] = 'reluctant';
    scene.text('An itch in your spine starts to build as you realize you don\'t like where this is going. But the pressure is too much for you to say no, you don\'t feel like you can talk him out of it. And if you can\'t say no, then he\'s just going to get to do whatever he wants...');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'go_to_sex'
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyMakingMovesPress(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$npcdesc>>-, <<$npcdesc>> stop-" you try to say but he doesn't seem to hear y...
  scene.text(`"${((s as any).npcdesc ?? 0)}-, ${((s as any).npcdesc ?? 0)} stop-" you try to say but he doesn't seem to hear you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him firmly', handler: (st: GameState) => {
    qspCall(s, 'date_hangout', 'loc_img');
    // TODO-QSP: dynamic text: "<<$npcdesc>>!"
    scene.text(`"${((s as any).npcdesc ?? 0)}!"`);
    scene.text('You all but shove him away from you.');
  }, goto: ['date_hangout', 'boy_making_moves_stop'] },
    { label: 'Let it happen', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/necking2.mp4');
    scene.text('Deaf to your pleas, he\'s plucking at your clothes now, and you realize with reluctance, you\'re just going to have to let him do this...');
    if (!(s as any).sex_ev) (s as any).sex_ev = {}; (s as any).sex_ev['starting_mood'] = 'reluctant';
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'go_to_sex'
  } },
    ]);
  } },
    { label: 'Melt into it', handler: (st: GameState) => {
    scene.img('images/shared/sex/kiss/makeout2.mp4');
    qspCall(s, 'arousal', 'kiss', 5, 'no_orgasm_msg');
    scene.text('<i>Mmmmmmmm...</i>');
    // TODO-QSP: '<<$npcdesc>>''s lips on you feel <i>soooooo goooood</i> and you let yourself melt into his ministra...
    scene.actions([
      { label: 'Get fingered', handler: (st: GameState) => {
    // TODO-QSP: xgt 'date_hangout', 'hand_down_pants'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyMakingMovesStop(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"Sorry," he grins. "I can\'t help myself, you\'re just so hot."');
  } else {
    if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Sorry," he says, pulling back with a bashful smile.');
    } else {
      scene.text('"Sorry," he says, pulling back with a bashful smile.');
    }
  }
  qspCall(s, 'date_hangout', 'activity_menu');
  // TODO-QSP: end
  scene.build();
}

function enterCuddleUp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_hangout', 'talk_img');
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] !== 'sex'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband'  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 50) {
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 25) {
      // TODO-QSP: dynamic text: Feeling close to <<$npcdesc>>, you want to feel even closer and start snuggling ...
      scene.text(`Feeling close to ${((s as any).npcdesc ?? 0)}, you want to feel even closer and start snuggling up to him. Unfortunately, he doesn't seem to feel the same way as he visibly stiffens and backs off more to his side of the furniture.`);
    } else {
      if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['cuddle_active'] = 1;
      // TODO-QSP: dynamic text: Feeling close to <<$npcdesc>>, you want to feel even closer and start snuggling ...
      scene.text(`Feeling close to ${((s as any).npcdesc ?? 0)}, you want to feel even closer and start snuggling up to him. You feel him stiffen awkwardly, but he doesn't move away. Maybe he doesn't share your feelings...`);
    }
  } else {
    if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['cuddle_active'] = 1;
    // TODO-QSP: dynamic text: Feeling close to <<$npcdesc>>, you want to feel even closer and start snuggling ...
    scene.text(`Feeling close to ${((s as any).npcdesc ?? 0)}, you want to feel even closer and start snuggling up to him. He smiles and does the same, wrapping his arm around you and pulling you into his warmth.`);
  }
  scene.actions([{ label: 'Continue', goto: ['date_hangout', 'activity_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterCuddleStop(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['cuddle_active'] = 0;
  scene.actions([{ label: 'Continue', goto: ['date_hangout', 'activity_menu'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterHandDownPants(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg');
  if (((s as any).PCloSkirtShortness ?? 0) > 0) {
    scene.img('images/shared/sex/foreplay/fingering_skirt2.mp4');
  } else {
    scene.img('images/shared/sex/foreplay/fingering_pants1.jpg');
  }
  // TODO-QSP: dynamic text: A gasp escapes your lips as <<$npcdesc>>'s hand finds your moist slit and slips ...
  scene.text(`A gasp escapes your lips as ${((s as any).npcdesc ?? 0)}'s hand finds your moist slit and slips a finger inside. His lips never leave yours and you have to moan past his tongue as he fingers you noisily.`);
  if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] > 2) {
    if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('He growls in your ear, "Let\'s take it to the bed..."');
    } else {
      scene.text('He whispers in your ear, "Let\'s take it to the bed..."');
    }
  } else {
    if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('He growls in your ear, "Let\'s get you undressed..."');
    } else {
      scene.text('He whispers in your ear, "Let\'s get undressed..."');
    }
    scene.actions([
      { label: 'Continue', goto: ['date_hangout', 'go_to_sex'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKissToSex(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kiss/kotovpre30.mp4');
  // TODO-QSP: dynamic text: Grabbing hold of him, you pull <<$npcdesc>> atop you letting his lips find yours...
  scene.text(`Grabbing hold of him, you pull ${((s as any).npcdesc ?? 0)} atop you letting his lips find yours in a passionate kiss. His tongue eagerly meets your own when you slip it between his lips and his hands roam your body, plucking at your clothing.`);
  scene.text('Well, there\'s no going back now.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['date_hangout', 'go_to_sex'] },
  ]);
  scene.build();
}

function enterGoToSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'date_hangout', 'date_end_stats');
  if (!(s as any).date_ev) (s as any).date_ev = {}; (s as any).date_ev['npc_home_sex'] = 1;
  scene.actions([{ label: 'Continue', goto: ['sex_ev_start', 'npc_home_start'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterDateEndStats(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).date_count_hangout) (s as any).date_count_hangout = {}; (s as any).date_count_hangout[String((s as any).npcID ?? 0)] = ((s as any).date_count_hangout[String((s as any).npcID ?? 0)] ?? 0) + (1);
  // TODO-QSP: end
  // TODO-QSP: --- date_hangout ---------------------------------
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
    case 'tea_deliver':
      enterTeaDeliver(s, scene);
      break;
    case 'vodka_deliver':
      enterVodkaDeliver(s, scene);
      break;
    case 'activity_menu':
      enterActivityMenu(s, scene);
      break;
    case 'chat_top':
      enterChatTop(s, scene);
      break;
    case 'flirt_top':
      enterFlirtTop(s, scene);
      break;
    case 'watch_hang_top':
      enterWatchHangTop(s, scene);
      break;
    case 'watch_hang_menu':
      enterWatchHangMenu(s, scene);
      break;
    case 'watch_part1':
      enterWatchPart1(s, scene);
      break;
    case 'watch_sex_scene':
      enterWatchSexScene(s, scene);
      break;
    case 'turnon_bottom_desc':
      enterTurnonBottomDesc(s, scene);
      break;
    case 'watch_turnon':
      enterWatchTurnon(s, scene);
      break;
    case 'watch_part2':
      enterWatchPart2(s, scene);
      break;
    case 'pc_making_moves':
      enterPcMakingMoves(s, scene);
      break;
    case 'boy_making_moves':
      enterBoyMakingMoves(s, scene);
      break;
    case 'boy_making_moves_press':
      enterBoyMakingMovesPress(s, scene);
      break;
    case 'boy_making_moves_stop':
      enterBoyMakingMovesStop(s, scene);
      break;
    case 'cuddle_up':
      enterCuddleUp(s, scene);
      break;
    case 'cuddle_stop':
      enterCuddleStop(s, scene);
      break;
    case 'hand_down_pants':
      enterHandDownPants(s, scene);
      break;
    case 'kiss_to_sex':
      enterKissToSex(s, scene);
      break;
    case 'go_to_sex':
      enterGoToSex(s, scene);
      break;
    case 'date_end_stats':
      enterDateEndStats(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const date_hangout: LocationDef = {
  name: 'date_hangout',
  title: '"Hey, come on in."',
  region: 'other',
  enter: enter,
};
