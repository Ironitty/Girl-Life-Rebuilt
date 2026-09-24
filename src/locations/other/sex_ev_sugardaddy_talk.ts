import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterVirginityPaidTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virginity_paid_talk'] = 1;
  qspCall(s, 'sex_ev_stats', 'prostitution_init', (((s as any).sex_ev ?? {})?.['buy_virginity'] ?? 0) * 1000);
  scene.img('images/shared/misc/money.jpg');
  // TODO-QSP: dynamic text: "By the way, here," <<$npcdesc>> says, suddenly turning away from you and diggin...
  scene.text(`"By the way, here," ${((s as any).npcdesc ?? '')} says, suddenly turning away from you and digging about for a moment before coming up with a wad of bank notes.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'What\'s this for?', handler: (st: GameState) => {
    scene.text('"What is this for?" you ask, confused.');
    // TODO-QSP: dynamic text: "Your virginity," <<$npcdesc>> smiles at you. "I told you I''d pay you for it an...
    scene.text(`"Your virginity," ${((st as any).npcdesc ?? '')} smiles at you. "I told you I'd pay you for it and I don't want to be called a cheat. So here, full price."`);
    // TODO-QSP: dynamic text: He''s holding about <<$func(''money'', ''string_profit'', sex_ev[''buy_virginity...
    scene.text(`He's holding about ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['buy_virginity'] ?? 0) * 1000)}.`);
    scene.actions([
      { label: 'Refuse (shame)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('A pang suddenly goes through your chest, echoed by a throb from your deflowered pussy, pierced by a man you just met.');
    scene.text('"No, that\'s okay," you say, pushing the money away. "I don\'t want it."');
    // TODO-QSP: dynamic text: "Are you sure?" <<$npcdesc>> looks at you quizzically. "I''m a man of my word."
    scene.text(`"Are you sure?" ${((st as any).npcdesc ?? '')} looks at you quizzically. "I'm a man of my word."`);
    scene.actions([
      { label: 'Insist no', handler: (st: GameState) => {
    scene.text('"No," you say again, more softly.');
    scene.text('<i>I already feel dirty enough...</i>');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Take the money', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code');
    scene.img('images/shared/misc/take_money.jpg');
    scene.text('"Okay I guess," you say, more softly. The ache in your chest deepens as you grasp the bank notes, crinkling between your fingers, and you suddenly feel very <i>dirty</i>...');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Accept it', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code');
    scene.img('images/shared/misc/take_money.jpg');
    scene.text('Blinking in surprise, you automatically reach out to take what he\'s holding before you can register what\'s happening.');
    // TODO-QSP: dynamic text: "For your virginity," <<$npcdesc>> smiles. "I told you I''d pay for it and I''m ...
    scene.text(`"For your virginity," ${((st as any).npcdesc ?? '')} smiles. "I told you I'd pay for it and I'm a man of my word."`);
    // TODO-QSP: dynamic text: "Oh! Thank you," you say, still stunned. Counting out the notes, you see it''s <...
    scene.text(`"Oh! Thank you," you say, still stunned. Counting out the notes, you see it's ${qspFunc(s, 'money', 'string_profit', ((st as any).sex_ev ?? 0)?.['prostitution_paid'] ?? '')}.`);
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterSugarBabyOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = (Math.floor(Math.random() * 11) + 10);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_baby_offer'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
  // TODO-QSP: dynamic text: "I really enjoyed this," <<$npcdesc>> says.
  scene.text(`"I really enjoyed this," ${((s as any).npcdesc ?? '')} says.`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
    scene.actions([
      { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you smile back in a way he knows you mean it.');
    qspGoto(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer2');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Me too (lie)', handler: (st: GameState) => {
    scene.text('"Me too," you lie, hiding behind an empty smile.');
    qspGoto(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"I could tell"', handler: (st: GameState) => {
    scene.text('"I could tell," you smirk in reply. He grins back.');
    qspGoto(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer2');
  } },
  ]);
  scene.build();
}

function enterSugarBabyOffer2(s: GameState, scene: SceneBuilder): void {
  scene.text('"So how about we do it again?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Play coy', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"Do what?" you ask innocently.');
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
      scene.text('"Well, you for starters," he snickers. "Though not tonight. Another night. And I could make it worth your while..."');
    } else {
      scene.text('"This," he says, gesturing at the bed and your nude body. "You spend some time with me and I make it worth your while."');
    }
    qspGoto(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer3');
  } },
  ]);
  scene.build();
}

function enterSugarBabyOffer3(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarBabyOfferHowMuch(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHaveABoyfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHaveAGirlfriend(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Not a hooker', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/annoyed1.jpg');
    scene.text('"I\'m not a hooker," you frown, eyebrows coming together in annoyance.');
    // TODO-QSP: dynamic text: "I didn''t say you were," <<$npcdesc>> snickers back. "Don''t think of it that w...
    scene.text(`"I didn't say you were," ${((st as any).npcdesc ?? '')} snickers back. "Don't think of it that way. Think of it more like... a sugar daddy relationship. Will you be my baby? Will you let me be your daddy?"`);
    qspCall(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_refuse');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSugarBabyOfferHowMuch(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSugarBabyRefuse(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sugar_baby_offer'] = (-1);
    scene.actions([
      { label: 'Nice try but no', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Nice try but no," you huff, rolling your eyes and looking away.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Not that kind of girl', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"I\'m not that kind of girl," you sneer.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: '"You\'re disgusting"', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"You\'re disgusting," you sneer.');
    scene.text('"Hey, what\'s the point of money if you don\'t spend it?" he chuckles back.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: '"You can\'t afford me"', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Please," you scoff. "You can\'t afford me."');
    scene.text('"So you say, but your loss in the end I suppose," he smirks back.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSugarBabyOfferHowMuch(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'How much?', handler: (st: GameState) => {
    scene.text('"Depends," you muse. "How much are we talking?"');
    // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_offer''...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100, 1)} a night?"`);
    qspCall(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_refuse');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSugarBabyOfferAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSugarBabyOfferHaggle(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterJustAHookup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) <= 9) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['just_a'] = 'one night stand';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['just_a'] = 'random hookup';
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'This was a ' + String(((s as any).sex_ev ?? 0)?.['just_a'] ?? '' ?? ''), handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    // TODO-QSP: dynamic text: "No," you shake your head. "This was just a <<$sex_ev[''just_a'']>>. I''m not lo...
    scene.text(`"No," you shake your head. "This was just a ${((st as any).sex_ev ?? 0)?.['just_a'] ?? ''}. I'm not looking for anything lasting."`);
    scene.text('"Whatever, your loss," he shrugs.');
    scene.text('"Pfft-! Yeah, sure," you snigger back.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterHaveABoyfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
    scene.actions([
      { label: 'I have a boyfriend', handler: (st: GameState) => {
    ((st as any).npc_know_boyfriend = (st as any).npc_know_boyfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    // TODO-QSP: dynamic text: "I have a boyfriend," you say, giving him a look as you''re <<$sex_ev[''dress_de...
    scene.text(`"I have a boyfriend," you say, giving him a look as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).sex_ev ?? 0)?.['sugar_daddy_offer'] > 0) {
      // TODO-QSP: dynamic text: "So?" <<$npcdesc>> grins shamelessly. "Does that change the value of the money?"
      scene.text(`"So?" ${((st as any).npcdesc ?? '')} grins shamelessly. "Does that change the value of the money?"`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSugarBabyRefuse(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_how_much');
      scene.actions([
        { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Just wanted to make sure you knew," you reply, shrugging as you''re <<$sex_ev['...
    scene.text(`"Just wanted to make sure you knew," you reply, shrugging as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "So how much are we talking here?"`);
    // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_offer''...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100, 1)} a 'date?'"`);
    qspCall(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_accept');
  } },
      ]);
    } else {
      if (((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] <= 5) {
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex') {
          scene.text('"So? I have a girlfriend," he grins shamelessly. "Doesn\'t mean we can\'t keep fucking."');
          scene.actions([
            { label: 'No way', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    scene.text('"Yeah, no," you grimace. "That\'s a kind of drama I <i>don\'t</i> want to deal with.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
            { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "So long as you know," you reply, <<$sex_ev[''dress_describe'']>>. You exchange ...
    scene.text(`"So long as you know," you reply, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. You exchange numbers with him and a moment later a notification pings in your messages.`);
    qspCall(st, 'sex_ev_hookup_leave', 'fuckbuddy_text');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          ]);
        } else {
          qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
          scene.text('"Whatever, your loss," he shrugs. "Looks like I\'m a better lay than him anyways."');
          scene.text('"Yeah, sure," you snigger back, pulling on the rest of your clothes. You give yourself a once over, making sure everything\'s in place and wave goodbye as you head towards the door.');
          qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
        }
      } else {
        qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you''re left in an extremely unco...
        scene.text(`"Oh. Uhh, well..." ${((st as any).npcdesc ?? '')} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        scene.text('<i>Holy fuck this is awkward,</i> you think to yourself.');
        qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHaveAGirlfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_girlfriends ?? 0) > 0) {
    scene.actions([
      { label: 'I have a girlfriend', handler: (st: GameState) => {
    ((st as any).npc_know_girlfriend = (st as any).npc_know_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspCall(st, 'sex_ev_leave', 'dress_loop');
    // TODO-QSP: dynamic text: "I have a girlfriend," you say, giving him a look as you''re <<$sex_ev[''dress_d...
    scene.text(`"I have a girlfriend," you say, giving him a look as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).sex_ev ?? 0)?.['sugar_daddy_offer'] > 0) {
      // TODO-QSP: dynamic text: "So?" <<$npcdesc>> grins shamelessly. "Does that change the value of the money?"
      scene.text(`"So?" ${((st as any).npcdesc ?? '')} grins shamelessly. "Does that change the value of the money?"`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSugarBabyRefuse(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_how_much');
      scene.actions([
        { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "Just wanted to make sure you knew," you reply, shrugging as you''re <<$sex_ev['...
    scene.text(`"Just wanted to make sure you knew," you reply, shrugging as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "So how much are we talking here?"`);
    // TODO-QSP: dynamic text: "How about... <<$func(''money'', ''string_profit'', sex_ev[''sugar_daddy_offer''...
    scene.text(`"How about... ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100, 1)} a 'date?'"`);
    qspCall(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_accept');
  } },
      ]);
    } else {
      if (((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] <= 5) {
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex') {
          scene.text('"Hey, me too!" he grins shamelessly.');
          scene.actions([
            { label: 'No way', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"Nice try but no," you grimace.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
            { label: 'So long as you know', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    qspCall(st, 'sex_ev_stats', 'fuckbuddy_add');
    // TODO-QSP: dynamic text: "So long as you know," you reply, <<$sex_ev[''dress_describe'']>>. You exchange ...
    scene.text(`"So long as you know," you reply, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. You exchange numbers with him and a moment later a notification pings in your messages.`);
    qspCall(st, 'sex_ev_hookup_leave', 'fuckbuddy_text');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          ]);
        } else {
          scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
          scene.text('"Whatever, your loss," he shrugs. "Bi girls always come back when they start missing dick."');
          scene.text('"That\'s what strapons are for," you roll your eyes.');
          qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
        }
      } else {
        qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
        // TODO-QSP: dynamic text: "Oh. Uhh, well..." <<$npcdesc>> trails off and you''re left in an extremely unco...
        scene.text(`"Oh. Uhh, well..." ${((st as any).npcdesc ?? '')} trails off and you're left in an extremely uncomfortable silence while you get dressed in front of him.`);
        scene.text('<i>Holy fuck this is awkward,</i> you think to yourself.');
        qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSugarBabyOfferAccept(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'sugar_daddy_add');
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    // TODO-QSP: dynamic text: "That sounds... mutually beneficial," you say, slowly <<$sex_ev[''dress_describe...
    scene.text(`"That sounds... mutually beneficial," you say, slowly ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    // TODO-QSP: dynamic text: "I''ll look forward to the next time you come over then," <<$npcdesc>> smirks. "...
    scene.text(`"I'll look forward to the next time you come over then," ${((st as any).npcdesc ?? '')} smirks. "Give me your number so I can tell you when to come over.`);
    scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterSugarBabyOfferHaggle(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Haggle', handler: (st: GameState) => {
    // TODO-QSP: :invalid_counter_offer
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sugar_daddy_counteroffer'] = window.prompt("Pick a number between 10 and 50. The number will be multiplied by 100. (10 will be 1000, 25 will be 2500, 50 will be 5000)") ?? '';
    if (((st as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > 50  ||  ((st as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < 10) {
      // TODO-QSP: jump 'invalid_counter_offer'
    } else {
      qspGoto(st, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle2');
    }
  } },
  ]);
  scene.build();
}

function enterSugarBabyOfferHaggle2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = qspFunc(s, 'sex_ev_stats', 'sugar_daddy_haggle_limit');
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] === ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer']) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSugarBabyOfferAccept(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer']) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'];
      qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
      // TODO-QSP: dynamic text: "Why don''t we say <<sex_ev[''sugar_daddy_counteroffer''] * 100>>? I''d feel bad...
      scene.text(`"Why don't we say ${(((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100}? I'd feel bad if I took too much," you smirk`);
      // TODO-QSP: dynamic text: "Hey if you''re willing to put out for less, I won''t complain," <<$npcdesc>> gr...
      scene.text(`"Hey if you're willing to put out for less, I won't complain," ${((s as any).npcdesc ?? '')} grins back. "Give me your number so I can tell you when to come over.`);
      scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > ((s as any).sex_ev ?? 0)?.['haggle_limit']) {
        if (((s as any).sex_ev ?? 0)?.['haggle_fail'] === 1) {
          qspGoto(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle_fail');
        } else {
          qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
          // TODO-QSP: dynamic text: "How about <<sex_ev[''sugar_daddy_counteroffer''] * 100>>?" you smirk.
          scene.text(`"How about ${(((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100}?" you smirk.`);
          // TODO-QSP: dynamic text: "You greedy bitch," <<$npcdesc>> snickers back. "You''re not worth that much. Co...
          scene.text(`"You greedy bitch," ${((s as any).npcdesc ?? '')} snickers back. "You're not worth that much. Come on, try again."`);
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_fail'] = 1;
          qspGoto(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle');
        }
      } else {
        if ((Math.floor(Math.random() * (((s as any).pcs_persuas ?? 0) - 1 + 1)) + (1)) > ((s as any).npc_willpower ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] < ((s as any).sex_ev ?? 0)?.['sugar_daddy_offer'] + 2) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = ((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'];
          qspCall(s, 'sex_ev_stats', 'sugar_daddy_add');
          qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
          // TODO-QSP: dynamic text: "Why don''t we say... <<sex_ev[''sugar_daddy_counteroffer''] * 100>>?" you smirk...
          scene.text(`"Why don't we say... ${(((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100}?" you smirk, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "That seems worth my time."`);
          // TODO-QSP: dynamic text: "You drive a hard bargain baby girl," <<$npcdesc>> grins back. "But I think I ca...
          scene.text(`"You drive a hard bargain baby girl," ${((s as any).npcdesc ?? '')} grins back. "But I think I can work with that. Give me your number so I can tell you when to come over.`);
          scene.text('You hand him your phone and when you get it back you see he\'s the latest saved contact.');
          qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
        } else {
          if (((s as any).sex_ev ?? 0)?.['haggle_fail'] === 1) {
            qspGoto(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle_fail');
          } else {
            qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_offer'] = ((s as any).sex_ev['sugar_daddy_offer'] ?? 0) + ((Math.floor(Math.random() * 2) + 1));
            // TODO-QSP: dynamic text: "How about... <<sex_ev[''sugar_daddy_counteroffer''] * 100>>?" you ask, <<$sex_e...
            scene.text(`"How about... ${(((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100}?" you ask, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
            // TODO-QSP: dynamic text: "Seems a little steep," <<$npcdesc>> frowns. "Why don''t we try <<sex_ev[''sugar...
            scene.text(`"Seems a little steep," ${((s as any).npcdesc ?? '')} frowns. "Why don't we try ${(((s as any).sex_ev ?? {})?.['sugar_daddy_offer'] ?? 0) * 100}?`);
            qspGoto(s, 'sex_ev_sugardaddy_talk', 'sugar_baby_offer_haggle');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSugarBabyOfferHaggleFail(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_baby_offer'] = (-1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['haggle_limit'] = qspFunc(s, 'sex_ev_stats', 'sugar_daddy_haggle_limit');
  // TODO-QSP: dynamic text: "How about <<sex_ev[''sugar_daddy_counteroffer''] * 100>>?" you try again, <<$se...
  scene.text(`"How about ${(((s as any).sex_ev ?? {})?.['sugar_daddy_counteroffer'] ?? 0) * 100}?" you try again, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
  if (((s as any).sex_ev ?? 0)?.['sugar_daddy_counteroffer'] > ((s as any).sex_ev ?? 0)?.['haggle_limit']) {
    // TODO-QSP: dynamic text: "Who do you think you are?" <<$npcdesc>> scoffs. "I could fuck a supermodel for ...
    scene.text(`"Who do you think you are?" ${((s as any).npcdesc ?? '')} scoffs. "I could fuck a supermodel for that kind of money. You know what? Forget it. I don't need another gold digger in my life."`);
  } else {
    // TODO-QSP: dynamic text: "Still too rich for my blood," <<$npcdesc>> says with a shake of his head. "You ...
    scene.text(`"Still too rich for my blood," ${((s as any).npcdesc ?? '')} says with a shake of his head. "You know what? Forget it. I don't need another gold digger in my life."`);
  }
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterWifeProblems(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_wife ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['wife_problem_talk'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['wife_problem_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', 5);
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Ugh, my wife has been such a bitch lately. Complaining about \'working too late\' and \'not spending enough time with me\'. I have a life outside her, you know? Thinks she can boss me around just because we\'re married."');
      scene.actions([
        { label: 'Side with him', handler: (st: GameState) => {
    scene.text('"That\'s why you have hot young things like me," you grin.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'She has a point', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Ugh, my wife has been such a bitch lately. Complaining about \'working too late\' and \'not spending enough time with me\'. I have a life outside her, you know? Thinks she can boss me around just because we\'re married."');
    scene.text('"Well, you <i>are</i> married," you say. "You ought to spend time with your wife."');
    scene.text('He frowns.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
        if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] >= 4) {
          // TODO-QSP: dynamic text: "It''s been so hard at home lately," <<$npcdesc>> sighs. He talks about his wife...
          scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? '')} sighs. He talks about his wife and how much he cares about her, but how he feels like she's never there for him. "We don't even have sex anymore. Now the only way I can get anything is by paying girls like you."`);
        } else {
          // TODO-QSP: dynamic text: "It''s been so hard at home lately," <<$npcdesc>> sighs. He talks about his wife...
          scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? '')} sighs. He talks about his wife and how much he cares about her, but how he feels like she's never there for him. "I just want to feel like I'm married again."`);
        }
        scene.actions([
          { label: 'Comfort him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    qspCall(st, 'sex_ev_pillow_talk', 'talk_time_add', (Math.floor(Math.random() * 6) + 15));
    scene.text('"You poor baby," you coo softly. "It\'s okay. You\'re here with me. You don\'t have to think about her right now."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'Pretend to listen', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'talk_time_add', (Math.floor(Math.random() * 6) + 15));
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Mhm."');
    scene.text('"Oh yeah."');
    scene.text('"Wow I can\'t believe that."');
    scene.text('You hear to him drone on, making the necessary noises to make it seem like you\'re listening but really you\'re just thinking about...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPretendListenThoughts(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Play therapist', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'love');
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 6);
    scene.text('"Have you talked to her about it?" you ask.');
    scene.text('"No," he admits. "I\'m just tired of fighting about it."');
    scene.text('"Well, nothing is going to change if you don\'t tell her how you feel."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTherapyReact(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "It''s been so hard at home lately," <<$npcdesc>> sighs. "My wife is always sayi...
        scene.text(`"It's been so hard at home lately," ${((s as any).npcdesc ?? '')} sighs. "My wife is always saying I'm not spending enough time with her. Working too late, drinking too much. Can't she see that it's the stress at home that makes me run away to other things? I can't stand it there."`);
        scene.actions([
          { label: 'Comfort him', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.text('"You poor baby," you coo softly. "It\'s okay. You\'re here with me. You don\'t have to think about her right now."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'She has a point', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    // TODO-QSP: dynamic text: "It''s been so hard at home lately," <<$npcdesc>> sighs. "My wife is always sayi...
    scene.text(`"It's been so hard at home lately," ${((st as any).npcdesc ?? '')} sighs. "My wife is always saying I'm not spending enough time with her. Working too late, drinking too much. Can't she see that it's the stress at home that makes me run away to other things? I can't stand it there."`);
    scene.text('"Well, you <i>are</i> married," you say. "You ought to spend time with your wife."');
    scene.text('He sighs, looking away from you.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTherapyReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Empathize with him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'talk_time_add', (Math.floor(Math.random() * 6) + 15));
    // TODO-QSP: dynamic text: You spend the better part of an hour talking through <<$npc_usedname[$npcID]>>''...
    scene.text(`You spend the better part of an hour talking through ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}'s problems.`);
    scene.text('And it isn\'t just lip service. You <i>do</i> feel bad for him. You <i>do</i> want to help him. And he seems to recognize and appreciate that.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'The things you do for money...', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'talk_time_add', (Math.floor(Math.random() * 6) + 15));
    // TODO-QSP: dynamic text: You spend the better part of an hour talking through <<$npc_usedname[$npcID]>>''...
    scene.text(`You spend the better part of an hour talking through ${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')}'s problems, listening to him go on and on and <i>on</i> about his shitty wife and his shitty problems.`);
    scene.text('<i>Sigh</i>. This would be so much easier if you could let him fuck you and leave.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterPretendListenThoughts(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Grocery shopping':
  scene.text('... what you need to buy at the store later.');
  scene.text('<i>What\'s left in the fridge? I can\'t remember.</i>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPretendListenEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  // TODO-QSP: act'What you want to eat later':
  if (((s as any).hour ?? 0) >= 21) {
    scene.text('... what you want to have for breakfast.');
    scene.text('<i>Pancakes? Eggs? Maybe I should just have a cup of coffee and call it quits.</i>');
  } else {
    if (((s as any).hour ?? 0) >= 16) {
      scene.text('... what you want to have for dinner later.');
      scene.text('<i>Should I go out for dinner? Maybe I should cook something at home. Takeout and split the difference?</i>');
    } else {
      scene.text('... what you want to have for lunch later.');
      scene.text('<i>Should I go out for lunch? Maybe I should cook something at home. Takeout and split the difference?</i>');
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPretendListenEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterPretendListenEnd(s: GameState, scene: SceneBuilder): void {
  scene.text('It\'s something like half an hour before he finally lets the topic die and you don\'t have to pretend to listen anymore.');
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterWorkComplaints(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add', (Math.floor(Math.random() * 6) + 10));
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    qspGoto(s, 'sex_ev_sugardaddy_talk', 'coworker_complain');
  } else {
    qspGoto(s, 'sex_ev_sugardaddy_talk', 'subbordinate_complain');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCoworkerComplain(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['coworker_complain_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> goes on for a long time, complaining about his co-work...
  scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} goes on for a long time, complaining about his co-workers.`);
  scene.text('"...eeps mistaking me for this other dickhead. Though I admit it\'s logical since he does the same thing I do and does the same thing I do, has a pension for the same kind of suits I wear, and even goes to the same barber I do. Though I have a slightly better haircut."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWorkComplainReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSubbordinateComplain(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['subbordinate_complain_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> goes on for a long time, complaining about his subordi...
  scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} goes on for a long time, complaining about his subordinates.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWorkComplainReact(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWorkEmails(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['work_emails_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  scene.text('He shows you shockingly confidential emails and details about his work.');
  // TODO-QSP: end
  scene.build();
}

function enterWorkComplainReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Listen intently':
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
  scene.text('To other people, what he says might seem boring. But you can\'t help but hang on every word. And you can tell he appreciates it.');
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  // TODO-QSP: act'Smile and pretend to listen':
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
  scene.text('You nod along, smiling like a Barbie as he goes on and on and <i>on and on and on...</i>');
  scene.text('<i>For fuck\'s sake, how can anybody talk about themselves this much? What a fucking bore. Makes me wonder if it\'s even worth the money...</i>');
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  // TODO-QSP: act'Sigh in boredom':
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
  scene.text('As the minutes drag on, you start to feel your soul breaking. He\'s so. Fucking. Boring.');
  scene.text('You let out a long and tired sigh and he\'s so caught up in his own idiotic tirade that he doesn\'t even notice. Is this <i>really</i> worth the money he\'s paying you?');
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  // TODO-QSP: end
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
    case 'pretend_listen_end':
      enterPretendListenEnd(s, scene);
      break;
    case 'work_complaints':
      enterWorkComplaints(s, scene);
      break;
    case 'coworker_complain':
      enterCoworkerComplain(s, scene);
      break;
    case 'subbordinate_complain':
      enterSubbordinateComplain(s, scene);
      break;
    case 'work_emails':
      enterWorkEmails(s, scene);
      break;
    case 'work_complain_react':
      enterWorkComplainReact(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_sugardaddy_talk: LocationDef = {
  name: 'sex_ev_sugardaddy_talk',
  title: '"So how about we do it again?"',
  region: 'other',
  enter: enter,
};
