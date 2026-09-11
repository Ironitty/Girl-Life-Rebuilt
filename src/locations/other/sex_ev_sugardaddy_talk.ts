import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterVirginityPaidTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['virginity_paid_talk'] = 1;
  // TODO-QSP: gs 'sex_ev_stats', 'prostitution_init', sex_ev['buy_virginity'] * 1000
  scene.img('images/shared/misc/money.jpg');
  // TODO-QSP: dynamic text: "By the way, here," <<$npcdesc>> says, suddenly turning away from you and diggin...
  scene.text(`"By the way, here," ${((s as any).npcdesc ?? 0)} says, suddenly turning away from you and digging about for a moment before coming up with a wad of bank notes.`);
  scene.actions([
    { label: 'What\'s this for?', handler: (st: GameState) => {
    scene.text('"What is this for?" you ask, confused.');
    // TODO-QSP: dynamic text: "Your virginity," <<$npcdesc>> smiles at you. "I told you I'd pay you for it and...
    scene.text(`"Your virginity," ${((s as any).npcdesc ?? 0)} smiles at you. "I told you I'd pay you for it and I don't want to be called a cheat. So here, full price."`);
    // TODO-QSP: dynamic text: He's holding about <<$func('money', 'string_profit', sex_ev['buy_virginity'] * 1...
    scene.text(`He's holding about ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? {})?.['buy_virginity'] * 1000)}.`);
    scene.actions([
      { label: 'Refuse (shame)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('A pang suddenly goes through your chest, echoed by a throb from your deflowered pussy, pierced by a man you just met.');
    scene.text('"No, that\'s okay," you say, pushing the money away. "I don\'t want it."');
    // TODO-QSP: dynamic text: "Are you sure?" <<$npcdesc>> looks at you quizzically. "I'm a man of my word."
    scene.text(`"Are you sure?" ${((s as any).npcdesc ?? 0)} looks at you quizzically. "I'm a man of my word."`);
    scene.actions([
      { label: 'Insist no', handler: (st: GameState) => {
    scene.text('"No," you say again, more softly.');
    scene.text('<i>I already feel dirty enough...</i>');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Take the money', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
    scene.img('images/shared/misc/take_money.jpg');
    scene.text('"Okay I guess," you say, more softly. The ache in your chest deepens as you grasp the bank notes, crinkling between your fingers, and you suddenly feel very <i>dirty</i>...');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Accept it', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
    scene.img('images/shared/misc/take_money.jpg');
    scene.text('Blinking in surprise, you automatically reach out to take what he\'s holding before you can register what\'s happening.');
    // TODO-QSP: dynamic text: "For your virginity," <<$npcdesc>> smiles. "I told you I'd pay for it and I'm a ...
    scene.text(`"For your virginity," ${((s as any).npcdesc ?? 0)} smiles. "I told you I'd pay for it and I'm a man of my word."`);
    // TODO-QSP: dynamic text: "Oh! Thank you," you say, still stunned. Counting out the notes, you see it's <<...
    scene.text(`"Oh! Thank you," you say, still stunned. Counting out the notes, you see it's ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_paid'])}.`);
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterSugarBabyOffer(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['sugar_daddy_offer'] = Math.floor(Math.random() * 11) + 10;
  (s as any).sex_ev['sugar_baby_offer'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
  // TODO-QSP: dynamic text: "I really enjoyed this," <<$npcdesc>> says.
  scene.text(`"I really enjoyed this," ${((s as any).npcdesc ?? 0)} says.`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    scene.actions([
      { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you smile back in a way he knows you mean it.');
    // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer2'
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Me too (lie)', handler: (st: GameState) => {
    scene.text('"Me too," you lie, hiding behind an empty smile.');
    // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer2'
  } },
    ]);
  }
  scene.actions([
    { label: '"I could tell"', handler: (st: GameState) => {
    scene.text('"I could tell," you smirk in reply. He grins back.');
    // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer2'
  } },
  ]);
  scene.build();
}

function enterSugarBabyOffer2(s: GameState, scene: SceneBuilder): void {
  scene.text('"So how about we do it again?"');
  scene.actions([
    { label: 'Play coy', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"Do what?" you ask innocently.');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      scene.text('"Well, you for starters," he snickers. "Though not tonight. Another night. And I could make it worth your while..."');
    } else {
      scene.text('"This," he says, gesturing at the bed and your nude body. "You spend some time with me and I make it worth your while."');
    }
    // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer3'
  } },
  ]);
  scene.build();
}

function enterSugarBabyOffer3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_how_much');
  qspCall(s, 'sex_ev_sugardaddy_talk', 'have_a_boyfriend');
  qspCall(s, 'sex_ev_sugardaddy_talk', 'have_a_girlfriend');
  scene.actions([
    { label: 'Not a hooker', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/annoyed1.jpg');
    scene.text('"I\'m not a hooker," you frown, eyebrows coming together in annoyance.');
    // TODO-QSP: dynamic text: "I didn't say you were," <<$npcdesc>> snickers back. "Don't think of it that way...
    scene.text(`"I didn't say you were," ${((s as any).npcdesc ?? 0)} snickers back. "Don't think of it that way. Think of it more like... a sugar daddy relationship. Will you be my baby? Will you let me be your daddy?"`);
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_refuse');
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_how_much');
  } },
  ]);
  scene.build();
}

function enterSugarBabyRefuse(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Refuse him', handler: (st: GameState) => {
    (s as any).sex_ev['sugar_baby_offer'] = (-1);
    scene.actions([
      { label: 'Nice try but no', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Nice try but no," you huff, rolling your eyes and looking away.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Not that kind of girl', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"I\'m not that kind of girl," you sneer.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: '"You\'re disgusting"', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"You\'re disgusting," you sneer.');
    scene.text('"Hey, what\'s the point of money if you don\'t spend it?" he chuckles back.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: '"You can\'t afford me"', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Please," you scoff. "You can\'t afford me."');
    scene.text('"So you say, but your loss in the end I suppose," he smirks back.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSugarBabyOfferHowMuch(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'How much?', handler: (st: GameState) => {
    scene.text('"Depends," you muse. "How much are we talking?"');
    // TODO-QSP: dynamic text: "How about... <<$func('money', 'string_profit', sex_ev['sugar_daddy_offer'] * 10...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] * 100, 1)} a night?"`);
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_refuse');
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_accept');
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle');
  } },
  ]);
  scene.build();
}

function enterJustAHookup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 9) {
    (s as any).sex_ev['just_a'] = 'one night stand';
  } else {
    (s as any).sex_ev['just_a'] = 'random hookup';
  }
  scene.actions([
    { label: 'This was a <<$sex_ev[\'just_a\']>>', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    // TODO-QSP: dynamic text: "No," you shake your head. "This was just a <<$sex_ev['just_a']>>. I'm not looki...
    scene.text(`"No," you shake your head. "This was just a ${((s as any).sex_ev ?? 0)?.['just_a']}. I'm not looking for anything lasting."`);
    scene.text('"Whatever, your loss," he shrugs.');
    scene.text('"Pfft-! Yeah, sure," you snigger back.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterHaveABoyfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'I have a boyfriend', handler: (st: GameState) => {
    (s as any).npc_know_boyfriend[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    // TODO-QSP: dynamic text: "I have a boyfriend," you say, giving him a look as you're <<$sex_ev['dress_desc...
    scene.text(`"I have a boyfriend," you say, giving him a look as you're ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    if (((s as any).sex_ev ?? 0)?.['sugar_daddy_offer'] > 0) {
      // TODO-QSP: dynamic text: "So?" <<$npcdesc>> grins shamelessly. "Does that change the value of the money?"
      scene.text(`"So?" ${((s as any).npcdesc ?? 0)} grins shamelessly. "Does that change the value of the money?"`);
      qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_refuse');
      qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_how_much');
      scene.actions([
        { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Just wanted to make sure you knew," you reply, shrugging as you're <<$sex_ev['d...
    scene.text(`"Just wanted to make sure you knew," you reply, shrugging as you're ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "So how much are we talking here?"`);
    // TODO-QSP: dynamic text: "How about... <<$func('money', 'string_profit', sex_ev['sugar_daddy_offer'] * 10...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] * 100, 1)} a 'date?'"`);
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_accept');
  } },
      ]);
    } else {
      if (((s as any).npc_fidelity_num ?? 0)?.[String((s as any).npcID ?? 0)] <= 5) {
        if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
          scene.text('"So? I have a girlfriend," he grins shamelessly. "Doesn\'t mean we can\'t keep fucking."');
          scene.actions([
            { label: 'No way', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    scene.text('"Yeah, no," you grimace. "That\'s a kind of drama I <i>don\'t</i> want to deal with.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
            { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "So long as you know," you reply, <<$sex_ev['dress_describe']>>. You exchange nu...
    scene.text(`"So long as you know," you reply, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. You exchange numbers with him and a moment later a notification pings in your messages.`);
    qspCall(s, 'sex_ev_hookup_leave', 'fuckbuddy_text');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          ]);
        } else {
          qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
          scene.text('"Whatever, your loss," he shrugs. "Looks like I\'m a better lay than him anyways."');
          scene.text('"Yeah, sure," you snigger back, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
          // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
        }
      } else {
        qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you're left in an extremely uncom...
        scene.text(`"Oh. Uhh, well..." ${((s as any).npcdesc ?? 0)} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        scene.text('<i>Holy fuck this is awkward,</i> you think to yourself.');
        // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterHaveAGirlfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_girlfriends ?? 0) > 0) {
    scene.actions([
      { label: 'I have a girlfriend', handler: (st: GameState) => {
    (s as any).npc_know_girlfriend[String((s as any).npcID ?? 0)] = 1;
    qspCall(s, 'sex_ev_leave', 'dress_loop');
    // TODO-QSP: dynamic text: "I have a girlfriend," you say, giving him a look as you're <<$sex_ev['dress_des...
    scene.text(`"I have a girlfriend," you say, giving him a look as you're ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    if (((s as any).sex_ev ?? 0)?.['sugar_daddy_offer'] > 0) {
      // TODO-QSP: dynamic text: "So?" <<$npcdesc>> grins shamelessly. "Does that change the value of the money?"
      scene.text(`"So?" ${((s as any).npcdesc ?? 0)} grins shamelessly. "Does that change the value of the money?"`);
      qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_refuse');
      qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_how_much');
      scene.actions([
        { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Just wanted to make sure you knew," you reply, shrugging as you're <<$sex_ev['d...
    scene.text(`"Just wanted to make sure you knew," you reply, shrugging as you're ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "So how much are we talking here?"`);
    // TODO-QSP: dynamic text: "How about... <<$func('money', 'string_profit', sex_ev['sugar_daddy_offer'] * 10...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] * 100, 1)} a 'date?'"`);
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_accept');
  } },
      ]);
    } else {
      if (((s as any).npc_fidelity_num ?? 0)?.[String((s as any).npcID ?? 0)] <= 5) {
        if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
          scene.text('"Hey, me too!" he grins shamelessly.');
          scene.actions([
            { label: 'No way', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"Nice try but no," you grimace.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
            { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    qspCall(s, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "So long as you know," you reply, <<$sex_ev['dress_describe']>>. You exchange nu...
    scene.text(`"So long as you know," you reply, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. You exchange numbers with him and a moment later a notification pings in your messages.`);
    qspCall(s, 'sex_ev_hookup_leave', 'fuckbuddy_text');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          ]);
        } else {
          scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
          scene.text('"Whatever, your loss," he shrugs. "Bi girls always come back when they start missing dick."');
          scene.text('"That\'s what strapons are for," you roll your eyes.');
          // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
        }
      } else {
        qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you're left in an extremely uncom...
        scene.text(`"Oh. Uhh, well..." ${((s as any).npcdesc ?? 0)} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        scene.text('<i>Holy fuck this is awkward,</i> you think to yourself.');
        // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterSugarBabyOfferAccept(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    // TODO-QSP: dynamic text: "That sounds... mutually beneficial," you say, slowly <<$sex_ev['dress_describe'...
    scene.text(`"That sounds... mutually beneficial," you say, slowly ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    // TODO-QSP: dynamic text: "I'll look forward to the next time you come over then," <<$npcdesc>> smirks. "G...
    scene.text(`"I'll look forward to the next time you come over then," ${((s as any).npcdesc ?? 0)} smirks. "Give me your number so I can tell you when to come over.`);
    scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterSugarBabyOfferHaggle(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Haggle', handler: (st: GameState) => {
    // TODO-QSP: :invalid_counter_offer
    (s as any).sex_ev['sugar_daddy_counteroffer'] = 0;
    if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > 50  ||  ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < 10) {
      // TODO-QSP: jump 'invalid_counter_offer'
    } else {
      // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle2'
    }
  } },
  ]);
  scene.build();
}

function enterSugarBabyOfferHaggle2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
  (s as any).sex_ev['haggle_limit'] = qspFunc(s, 'sex_ev_stats', 'sugar_daddy_haggle_limit');
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] === ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer']) {
    qspCall(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_accept');
  } else {
    if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer']) {
      (s as any).sex_ev['sugar_daddy_offer'] = ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'];
      qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
      // TODO-QSP: dynamic text: "Why don't we say <<sex_ev['sugar_daddy_counteroffer'] * 100>>? I'd feel bad if ...
      scene.text(`"Why don't we say ${((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] * 100}? I'd feel bad if I took too much," you smirk`);
      // TODO-QSP: dynamic text: "Hey if you're willing to put out for less, I won't complain," <<$npcdesc>> grin...
      scene.text(`"Hey if you're willing to put out for less, I won't complain," ${((s as any).npcdesc ?? 0)} grins back. "Give me your number so I can tell you when to come over.`);
      scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
      // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
    } else {
      if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > ((s as any).sex_ev ?? 0)?.['haggle_limit']) {
        if (((s as any).sex_ev ?? 0)?.['haggle_fail'] === 1) {
          // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle_fail'
        } else {
          qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
          // TODO-QSP: dynamic text: "How about <<sex_ev['sugar_daddy_counteroffer'] * 100>>?" you smirk.
          scene.text(`"How about ${((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] * 100}?" you smirk.`);
          // TODO-QSP: dynamic text: "You greedy bitch," <<$npcdesc>> snickers back. "You're not worth that much. Com...
          scene.text(`"You greedy bitch," ${((s as any).npcdesc ?? 0)} snickers back. "You're not worth that much. Come on, try again."`);
          (s as any).sex_ev['haggle_fail'] = 1;
          // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle'
        }
      } else {
        if ((Math.floor(Math.random() * (((s as any).pcs_persuas ?? 0) - 1 + 1)) + (1)) > ((s as any).npc_willpower ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer'] + 2) {
          (s as any).sex_ev['sugar_daddy_offer'] = ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'];
          qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
          qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
          // TODO-QSP: dynamic text: "Why don't we say... <<sex_ev['sugar_daddy_counteroffer'] * 100>>?" you smirk, <...
          scene.text(`"Why don't we say... ${((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] * 100}?" you smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "That seems worth my time."`);
          // TODO-QSP: dynamic text: "You drive a hard bargain baby girl," <<$npcdesc>> grins back. "But I think I ca...
          scene.text(`"You drive a hard bargain baby girl," ${((s as any).npcdesc ?? 0)} grins back. "But I think I can work with that. Give me your number so I can tell you when to come over.`);
          scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
          // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
        } else {
          if (((s as any).sex_ev ?? 0)?.['haggle_fail'] === 1) {
            // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle_fail'
          } else {
            qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
            (s as any).sex_ev['sugar_daddy_offer'] = ((s as any).sex_ev['sugar_daddy_offer'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
            // TODO-QSP: dynamic text: "How about... <<sex_ev['sugar_daddy_counteroffer'] * 100>>?" you ask, <<$sex_ev[...
            scene.text(`"How about... ${((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] * 100}?" you ask, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
            // TODO-QSP: dynamic text: "Seems a little steep," <<$npcdesc>> frowns. "Why don't we try <<sex_ev['sugar_d...
            scene.text(`"Seems a little steep," ${((s as any).npcdesc ?? 0)} frowns. "Why don't we try ${((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] * 100}?`);
            // TODO-QSP: xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle'
          }
        }
      }
    }
  }
  scene.build();
}

function enterSugarBabyOfferHaggleFail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
  (s as any).sex_ev['sugar_baby_offer'] = (-1);
  (s as any).sex_ev['haggle_limit'] = qspFunc(s, 'sex_ev_stats', 'sugar_daddy_haggle_limit');
  // TODO-QSP: dynamic text: "How about <<sex_ev['sugar_daddy_counteroffer'] * 100>>?" you try again, <<$sex_...
  scene.text(`"How about ${((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] * 100}?" you try again, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > ((s as any).sex_ev ?? 0)?.['haggle_limit']) {
    // TODO-QSP: dynamic text: "Who do you think you are?" <<$npcdesc>> scoffs. "I could fuck a supermodel for ...
    scene.text(`"Who do you think you are?" ${((s as any).npcdesc ?? 0)} scoffs. "I could fuck a supermodel for that kind of money. You know what? Forget it. I don't need another gold digger in my life."`);
  } else {
    // TODO-QSP: dynamic text: "Still too rich for my blood," <<$npcdesc>> says with a shake of his head. "You ...
    scene.text(`"Still too rich for my blood," ${((s as any).npcdesc ?? 0)} says with a shake of his head. "You know what? Forget it. I don't need another gold digger in my life."`);
  }
  // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  scene.build();
}

function enterWifeProblems(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_wife ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['wife_problem_talk'] === 0) {
    (s as any).sex_ev['wife_problem_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', 5);
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Ugh, my wife has been such a bitch lately. Complaining about \'working too late\' and \'not spending enough time with me\'. I have a life outside her, you know? Thinks she can boss me around just because we\'re married."');
      scene.actions([
        { label: 'Side with him', handler: (st: GameState) => {
    scene.text('"That\'s why you have hot young things like me," you grin.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
        { label: 'She has a point', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Ugh, my wife has been such a bitch lately. Complaining about \'working too late\' and \'not spending enough time with me\'. I have a life outside her, you know? Thinks she can boss me around just because we\'re married."');
    scene.text('"Well, you <i>are</i> married," you say. "You ought to spend time with your wife."');
    scene.text('He frowns.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      ]);
    } else {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
        if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] >= 4) {
          // TODO-QSP: dynamic text: "It's been so hard at home lately," <<$npcdesc>> sighs. He talks about his wife ...
          scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? 0)} sighs. He talks about his wife and how much he cares about her, but how he feels like she's never there for him. "We don't even have sex anymore. Now the only way I can get anything is by paying girls like you."`);
        } else {
          // TODO-QSP: dynamic text: "It's been so hard at home lately," <<$npcdesc>> sighs. He talks about his wife ...
          scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? 0)} sighs. He talks about his wife and how much he cares about her, but how he feels like she's never there for him. "I just want to feel like I'm married again."`);
        }
        scene.actions([
          { label: 'Comfort him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', Math.floor(Math.random() * 6) + 15);
    scene.text('"You poor baby," you coo softly. "It\'s okay. You\'re here with me. You don\'t have to think about her right now."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          { label: 'Pretend to listen', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', Math.floor(Math.random() * 6) + 15);
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Mhm."');
    scene.text('"Oh yeah."');
    scene.text('"Wow I can\'t believe that."');
    scene.text('You hear to him drone on, making the necessary noises to make it seem like you\'re listening but really you\'re just thinking about...');
    qspCall(s, 'sex_ev_sugardaddy_talk', 'pretend_listen_thoughts');
  } },
          { label: 'Play therapist', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 6);
    scene.text('"Have you talked to her about it?" you ask.');
    scene.text('"No," he admits. "I\'m just tired of fighting about it."');
    scene.text('"Well, nothing is going to change if you don\'t tell her how you feel."');
    qspCall(s, 'sex_ev_sugardaddy_talk', 'therapy_react');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "It's been so hard at home lately," <<$npcdesc>> sighs. "My wife is always sayin...
        scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? 0)} sighs. "My wife is always saying I'm not spending enough time with her. Working too late, drinking too much. Can't she see that it's the stress at home that makes me run away to other things? I can't stand it there."`);
        scene.actions([
          { label: 'Comfort him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"You poor baby," you coo softly. "It\'s okay. You\'re here with me. You don\'t have to think about her right now."');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          { label: 'She has a point', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    // TODO-QSP: dynamic text: "It's been so hard at home lately," <<$npcdesc>> sighs. "My wife is always sayin...
    scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? 0)} sighs. "My wife is always saying I'm not spending enough time with her. Working too late, drinking too much. Can't she see that it's the stress at home that makes me run away to other things? I can't stand it there."`);
    scene.text('"Well, you <i>are</i> married," you say. "You ought to spend time with your wife."');
    scene.text('He sighs, looking away from you.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterTherapyReact(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Empathize with him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', Math.floor(Math.random() * 6) + 15);
    // TODO-QSP: dynamic text: You spend the better part of an hour talking through <<$npc_usedname[$npcID]>>'s...
    scene.text(`You spend the better part of an hour talking through ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s problems.`);
    scene.text('And it isn\'t just lip service. You <i>do</i> feel bad for him. You <i>do</i> want to help him. And he seems to recognize and appreciate that.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    { label: 'The things you do for money...', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', Math.floor(Math.random() * 6) + 15);
    // TODO-QSP: dynamic text: You spend the better part of an hour talking through <<$npc_usedname[$npcID]>>'s...
    scene.text(`You spend the better part of an hour talking through ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s problems, listening to him go on and on and <i>on</i> about his shitty wife and his shitty problems.`);
    scene.text('<i>Sigh</i>. This would be so much easier if you could let him fuck you and leave.');
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterPretendListenThoughts(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Grocery shopping':
  scene.text('... what you need to buy at the store later.');
  scene.text('<i>What\'s left in the fridge? I can\'t remember.</i>');
  qspCall(s, 'sex_ev_sugardaddy_talk', 'pretend_listen_end');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'virginity_paid_talk':
      enterVirginityPaidTalk(s, scene);
      break;
    case 'sugar_baby_offer':
      enterSugarBabyOffer(s, scene);
      break;
    case 'sugar_baby_offer2':
      enterSugarBabyOffer2(s, scene);
      break;
    case 'sugar_baby_offer3':
      enterSugarBabyOffer3(s, scene);
      break;
    case 'sugar_baby_refuse':
      enterSugarBabyRefuse(s, scene);
      break;
    case 'sugar_baby_offer_how_much':
      enterSugarBabyOfferHowMuch(s, scene);
      break;
    case 'just_a_hookup':
      enterJustAHookup(s, scene);
      break;
    case 'have_a_boyfriend':
      enterHaveABoyfriend(s, scene);
      break;
    case 'have_a_girlfriend':
      enterHaveAGirlfriend(s, scene);
      break;
    case 'sugar_baby_offer_accept':
      enterSugarBabyOfferAccept(s, scene);
      break;
    case 'sugar_baby_offer_haggle':
      enterSugarBabyOfferHaggle(s, scene);
      break;
    case 'sugar_baby_offer_haggle2':
      enterSugarBabyOfferHaggle2(s, scene);
      break;
    case 'sugar_baby_offer_haggle_fail':
      enterSugarBabyOfferHaggleFail(s, scene);
      break;
    case 'wife_problems':
      enterWifeProblems(s, scene);
      break;
    case 'therapy_react':
      enterTherapyReact(s, scene);
      break;
    case 'pretend_listen_thoughts':
      enterPretendListenThoughts(s, scene);
      break;
    default:
      enterVirginityPaidTalk(s, scene);
      break;
  }
}

export const sex_ev_sugardaddy_talk: LocationDef = {
  name: 'sex_ev_sugardaddy_talk',
  title: '"So how about we do it again?"',
  region: 'other',
  enter: enter,
};
