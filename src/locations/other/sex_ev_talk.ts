import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTopicExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyAccidentalCreampie(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['accidental_creampie_convo'] = 1;
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } else {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe') {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You said it's a safe day for you, right?" <<$npcdesc>> asks.
        scene.text(`"You said it's a safe day for you, right?" ${((s as any).npcdesc || '')} asks.`);
        scene.text('"Mhm," you nod.');
        scene.text('"Good," he sighs with relief.');
      } else {
        // TODO-QSP: dynamic text: "Good thing it's one of your safe days," <<$npcdesc>> smiles.
        scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc || '')} smiles.`);
        scene.text('"Mhm," you nod back.');
      }
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "You said it's probably safe for you today, right?" <<$npcdesc>> asks.
          scene.text(`"You said it's probably safe for you today, right?" ${((s as any).npcdesc || '')} asks.`);
          scene.text('"Mhm," you nod. He hesitates, seeming concerned.');
          scene.text('"Maybe you should get a morning after pill just in case."');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoPillOrthodox(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
            scene.actions([
              { label: 'You already have one', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"Don\'t worry," you tell him. "I\'ve already got one. It\'s in my bag."');
    scene.text('He seems relieved.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Take it now', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"In fact..." you say, reaching down for your purse.');
    qspCall(s, 'sex_ev_after', 'plan_b3');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'You\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you insist. "I\'m not worried. Why should you be?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            { label: 'Probably should', handler: (st: GameState) => {
    scene.text('"Yeah," you say with a shy smile. "I probably should, shouldn\'t I?"');
    scene.text('He seems relieved.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
            { label: 'Definitely will', handler: (st: GameState) => {
    scene.text('"I will," you tell him. "Just to be safe."');
    scene.text('He seems relieved.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Good thing it's one of your safe days," <<$npcdesc>> smiles.
          scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc || '')} smiles.`);
          scene.text('"Mhm," you nod back.');
        }
        qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
      } else {
        qspGoto(s, 'sex_ev_talk', 'get_plan_b_question');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieOkayQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    // TODO-QSP: dynamic text: "Speaking of which..." <<$npcdesc>> says, looking intently at the cum slowly dra...
    scene.text(`"Speaking of which..." ${((s as any).npcdesc || '')} says, looking intently at the cum slowly draining from your pussy. "Are you gonna be okay...?"`);
  } else {
    // TODO-QSP: dynamic text: "Speaking of which..." <<$npcdesc>> asks, looking intently at your pussy, clearl...
    scene.text(`"Speaking of which..." ${((s as any).npcdesc || '')} asks, looking intently at your pussy, clearly thinking about when he came inside you earlier. "Are you gonna be okay...?"`);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieOkayMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayBc(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkaySafeish(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayDanger(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieOkayBc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk', 'on_birth_control');
    scene.actions([
      { label: 'On birth control', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I'll be fine," you smile reassuringly. <<$npcdesc>> nods, relaxing a bit.
    scene.text(`"I'll be fine," you smile reassuringly. ${((s as any).npcdesc || '')} nods, relaxing a bit.`);
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('<i>Besides, I\'m on birth control,</i> you think to yourself. <i>But he doesn\'t need to know that.</i>');
    } else {
      scene.text('<i>I mean, what are the odds that something bad happens?</i>');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieOkaySafeish(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'You\'ll be fine', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"It\'s a safe day," you nod. "I should be okay. This time anyways," you smile teasingly.');
    } else {
      scene.text('"It\'s a safe day. I should be okay," you smile reassuringly.');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayUnsure(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'I think so', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('"I think so," you say. "I\'m pretty sure I can\'t get pregnant on my period..."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
        scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
      } else {
        scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
      }
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampieOkayDanger(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayUnsure(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Probably not', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup') {
      scene.text('"Probably not..." you say, grimacing. "Which is why it\'s so important we don\'t run out of condoms in the future...');
    } else {
      scene.text('"Probably not..." you say, grimacing. "I\'m pretty sure I\'m in my fertile window..."');
    }
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"So are you going to get a morning after pill?"');
    }
  } },
    { label: 'Need plan B', handler: (st: GameState) => {
    scene.text('"Not really," you grimace. "I\'m definitely going to need some plan B tomorrow."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterCreampieOkayUnsure(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m not sure', handler: (st: GameState) => {
    scene.text('"I\'m... not sure..." you say hesitantly.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
    { label: 'Roll the dice?', handler: (st: GameState) => {
    scene.text('"I\'m not sure... Maybe we can just roll the dice?" you say with a hesitant smile.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
    { label: 'Need plan B (safety)', handler: (st: GameState) => {
    scene.text('"I\'ll get some plan B tomorrow just to be safe," you say.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterGetPlanBQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    // TODO-QSP: dynamic text: "You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning a...
    scene.text(`"You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning after pill right?" ${((s as any).npcdesc || '')} says, looking intently at the cum slowly draining from your pussy. `);
  } else {
    // TODO-QSP: dynamic text: "You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning a...
    scene.text(`"You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning after pill right?" ${((s as any).npcdesc || '')} asks, looking intently at your pussy, clearly thinking about when he came inside you earlier.`);
  }
  qspGoto(s, 'sex_ev_talk', 'get_plan_b_answer');
  // TODO-QSP: end
  scene.build();
}

function enterGetPlanBAnswer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.text('You hesitate.');
    scene.text('"Uhm..."');
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      scene.text('"Even though you\'re fertile you\'re not gonna get one?"');
    } else {
      scene.text('"This is really something you have to think about?"');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoPillOrthodox(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Too expensive', handler: (st: GameState) => {
    scene.text('"They\'re pretty expensive," you sigh. "I don\'t like spending that much money."');
    scene.text('"A kid is going to be more expensive than that," he points out.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Hormones bad', handler: (st: GameState) => {
    scene.text('"I don\'t like using hormonal products," you say. "I don\'t think it\'s safe to mess with my body like that."');
    scene.text('"But it might be better than having a kid," he points out.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    { label: 'You will', handler: (st: GameState) => {
    scene.text('"I will," you nod.');
    qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'Actually, you have one now...', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_after', 'plan_b_take'
  } },
      ]);
    }
  } },
    { label: 'Tomorrow', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
      scene.text('"I\'ll take it tomorrow," you say. "It is called the morning <i>after</i> pill, isn\'t it?"');
    } else {
      scene.text('"I\'ll get one tomorrow," you say.');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: '"I should, shouldn\'t I?"', handler: (st: GameState) => {
    // TODO-QSP: '"I probably should, shouldn''t I?" you reply with an embarrassed smile. ' + iif(stat['think_virgin'...
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: '"If I remember"', handler: (st: GameState) => {
    // TODO-QSP: '"Hopefully I remember to," you reply with an embarrassed smile. ' + iif(stat['think_virgin'] = 0, '...
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterNoPillOrthodox(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You can\'t - You\'re Orthodox', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    if (((s as any).npc_know_catholic ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"I\'m Orthodox, remember?" you say, shaking your head. "No birth control of any kind."');
    } else {
      scene.text('"I\'m Orthodox," you say, shaking your head. "No birth control of any kind."');
    }
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "I don't care if you're Saint Mary herself," <<$npcdesc>> frowns. "Get the pill....
        scene.text(`"I don't care if you're Saint Mary herself," ${((s as any).npcdesc || '')} frowns. "Get the pill. I'm about to pay child support."`);
        scene.actions([
          { label: 'Stay silent', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'eyeroll');
    // TODO-QSP: dynamic text: You let out a long frustrated breath but don't want to get into a fight, staying...
    scene.text(`You let out a long frustrated breath but don't want to get into a fight, staying silent and neither arguing nor acquiescing to ${((s as any).npcdesc || '')}'s demand.`);
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'No way!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'annoyed');
    scene.text('"No way! I\'ll go to hell if I use birth control!"');
    scene.text('"Stop being stupid. Just take the fucking pill."');
    qspCall(s, 'sex_ev_after', 'quit');
    scene.actions([
      { label: 'Get in a fight (argue)', goto: ['sex_ev_events', 'long_argument'] },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "I don't know if I like that..." <<$npcdesc>> frowns.
        scene.text(`"I don't know if I like that..." ${((s as any).npcdesc || '')} frowns.`);
        scene.actions([
          { label: '"Deal with it"', handler: (st: GameState) => {
    scene.text('"Deal with it," you shrug. "My body, my religion, my choice."');
    scene.text('"So what are you going to do if you get pregnant?"');
    scene.actions([
      { label: 'No answer', handler: (st: GameState) => {
    scene.text('That question leaves you without anything to say and the room descends into an awkward silence...');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
        ]);
      }
    } else {
      if ((((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual')  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
        // TODO-QSP: dynamic text: "Wait so, you're Orthodox so you can't take the morning after pill, but sex befo...
        scene.text(`"Wait so, you're Orthodox so you can't take the morning after pill, but sex before marriage is still okay?" ${((s as any).npcdesc || '')} asks bemusedly.`);
        if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
          scene.actions([
            { label: 'You\'re not fertile anyways', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Premarital sex isn\'t as bad as birth control," you say. "But it shouldn\'t matter anyways. I\'m not fertile right now so it should be fine."');
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.text('<i><b>Should</b> be...</i> you think silently to yourself...');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
          ]);
        }
        scene.actions([
          { label: 'Uhhhh...', handler: (st: GameState) => {
    scene.text('"Uhhhh..."');
    // TODO-QSP: dynamic text: That question stops you in your tracks and a shit eating grin makes its way acro...
    scene.text(`That question stops you in your tracks and a shit eating grin makes its way across ${((s as any).npcdesc || '')}'s face.`);
    scene.text('"Oh shut up," you huff as he chuckles to himself.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'Get irritated', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'annoyed');
    scene.text('"Are you saying you want me to stop having sex with you?" you snap irately.');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "I'm just saying it's hypocritical!" <<$npcdesc>> protests.
      scene.text(`"I'm just saying it's hypocritical!" ${((s as any).npcdesc || '')} protests.`);
      scene.actions([
        { label: 'Let it go', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Ugh, whatever," you huff, deciding the argument isn\'t worth it.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Don\'t let it go', handler: (st: GameState) => {
    qspGoto(s, 'sex_ev_events', 'long_argument');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> holds up his hands in surrender, though an irritating smirk is stil...
      scene.text(`${((s as any).npcdesc || '')} holds up his hands in surrender, though an irritating smirk is still playing on his face..`);
      scene.text('"No, no, not at all. Forget I said anything.');
      scene.text('"<i>Hrmph.</i>"');
      scene.text('You cross your arms in annoyance.');
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
          { label: 'Trying to limit your sins', handler: (st: GameState) => {
    scene.text('"No, that\'s still a sin too," you say with a wry twist of your lips. "But just because I did one bad thing doesn\'t mean I should do more. I\'m trying not to show up to confession with a laundry list."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'It\'s a bigger sin', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Premarital sex isn\'t as bad as birth control," you say. "That\'s practically <i>murder</i>."');
    scene.text('"You really think the morning after pill counts as murder?"');
    scene.text('"Of course! It\'s like killing the babiest of babies. Literally an egg before it hatches."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        scene.text('"Seriously? Sex protection is a sin?"');
        scene.text('"Yes! It is! And I already have enough to confess without adding that on top!"');
        qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
      }
    }
    qspCall(s, 'sex_ev_stats', 'birth_control_know', 'catholic');
  } },
  ]);
  scene.build();
}

function enterChildfreeAccidentalCreampie1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk', 'on_birth_control');
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s a safe day', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"It\'s a safe day," you nod. "I should be okay. This time anyways," you smile teasingly.');
    } else {
      scene.text('"It\'s a safe day, so I should be okay," you smile.');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'I should be okay', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
    } else {
      scene.text('"It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Roll the dice?', handler: (st: GameState) => {
    scene.text('"I\'m not sure... Maybe we can just roll the dice?" you say with a hesitant smile.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
          { label: 'Need plan B', handler: (st: GameState) => {
    scene.text('"I\'ll get some plan B tomorrow," you say.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
          { label: 'Need plan B (safety)', handler: (st: GameState) => {
    scene.text('"I should be okay but I\'ll get some plan B tomorrow just to be safe," you say.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMorningAfterMoney(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
        ]);
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHaveMorningAfter(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStartBcTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup') {
    scene.actions([
      { label: 'What if you start birth control?', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Well..." you start. "What if I started birth control?"');
    // TODO-QSP: dynamic text: You glance up at <<$npcdesc>> as you ask the question, gauging his reaction.
    scene.text(`You glance up at ${((s as any).npcdesc || '')} as you ask the question, gauging his reaction.`);
    scene.text('"Could we go without condoms then?"');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.text('"I wouldn\'t complain if you started birth control but I think we should keep using condoms," he replies. "All it would take is one forgetful day or bad luck. Better to double up on protection."');
      scene.actions([
        { label: 'Sigh', handler: (st: GameState) => {
    scene.text('<i>Ugh, what\'s it going to take for this guy to go bareback?</i> you think to yourself, sighing deeply.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      scene.text('You\'d really do that just to stop using condoms?" he asks.');
      scene.actions([
        { label: 'Condoms suck', handler: (st: GameState) => {
    ((s as any).npc_bc_promise = (s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('"Yeah," you grin back. "They suck."');
    scene.text('"Well then... Let me know when you\'re safe..."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Should be on it anyways', handler: (st: GameState) => {
    ((s as any).npc_bc_promise = (s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('"I should probably be on it if we\'re regularly having sex anyways," you say ruefully and flash him a smile. "But bareback would be a nice bonus..."');
    scene.text('"Well then... Let me know when you\'re safe..."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Been meaning to start', handler: (st: GameState) => {
    ((s as any).npc_bc_promise = (s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('"I\'ve been wanting to start birth control for a while now anyways," you shrug. "Maybe this will give me the motivation to finally do it.');
    scene.text('"Well then... Let me know when you\'re safe..."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMorningAfterMoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> looks at you for a moment before reaching down into his discarded t...
  scene.text(`${((s as any).npcdesc || '')} looks at you for a moment before reaching down into his discarded trousers to grab his wallet, pulling ${qspFunc(s, 'money', 'string_profit', 800)} out.`);
  scene.text('"Here," he says, offering the cash to you. "Get a morning after pill later.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No, you don\'t have to', handler: (st: GameState) => {
    scene.text('"No," you shake your head. "I can\'t ask you to do that."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Take it," he says insistently. "I don\'t want any kids running around. You can thank me by making sure you take that pill later."');
    } else {
      scene.text('"Don\'t worry about it," he says, smiling gently. "I think it would suck for both of us if you got pregnant right now."');
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No, I don\'t want your money," you say, shaking your head and pushing the money away.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> stares at you for a moment, looking almost angry.
      scene.text(`${((s as any).npcdesc || '')} stares at you for a moment, looking almost angry.`);
      scene.text('"Just don\'t fucking get pregnant, okay?" he says, tossing the cash onto his bedside table.');
    } else {
      // TODO-QSP: dynamic text: "If you're sure..." <<$npcdesc>> says hesitantly, withdrawing his hand.
      scene.text(`"If you're sure..." ${((s as any).npcdesc || '')} says hesitantly, withdrawing his hand.`);
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Take it', handler: (st: GameState) => {
    ((s as any).take_morning_after = (s as any).take_morning_after ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You take the money from him, warmed by the gesture.');
    scene.text('"Thanks," you say, giving him the most grateful smile you can.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Seriously," <<$npcdesc>> says returning your smile with a stern look. "Take tha...
      scene.text(`"Seriously," ${((s as any).npcdesc || '')} says returning your smile with a stern look. "Take that pill."`);
    } else {
      scene.text('He just nods back in return.');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    { label: 'Take the money', handler: (st: GameState) => {
    ((s as any).take_morning_after = (s as any).take_morning_after ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You take the money from him, warmed by the gesture.');
    scene.text('"Thanks," you say, giving him the most grateful smile you can.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Don\'t thank me," he says, shaking his head. "I just don\'t want any bastard kids running around. You can thank me by making sure you take that pill tomorrow."');
    } else {
      scene.text('"Don\'t worry about it," he says, grinning. "I think it would suck for both of us if you got pregnant right now."');
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'I have enough money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 740) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).take_morning_after = (s as any).take_morning_after ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
      scene.text('"No," you shake your head. "You don\'t have to do that. I have enough money to buy a pill myself."');
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Just make sure you do," he replies. "I don\'t want any kids running around."');
      } else {
        // TODO-QSP: dynamic text: "If you're sure..." <<$npcdesc>> says hesitantly, withdrawing his hand.
        scene.text(`"If you're sure..." ${((s as any).npcdesc || '')} says hesitantly, withdrawing his hand.`);
      }
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterPcHaveMorningAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'You have one', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"It\'s okay," you smile reassuringly. "I have a morning after pill. It\'s no big deal."');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Take it now', handler: (st: GameState) => {
    scene.text('"In fact..." you say, reaching down for your purse.');
    qspCall(s, 'sex_ev_after', 'plan_b2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFreeCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/after/pillow_talk2.jpg"></center>';
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/2.jpg"></center>';
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/doggy/1.jpg"></center>';
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/cowgirl/1.jpg"></center>';
          }
        }
      }
    }
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"Don\'t worry," you smile. "It\'s a safe day for me. You can come inside me as much as you want today."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> lets out a sigh of relief.
      scene.text(`${((s as any).npcdesc || '')} lets out a sigh of relief.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'It\'s probably safe day', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"Don\'t worry," you smile. "I\'m probably safe. It\'s okay for you to come inside me today."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> lets out a sigh of relief.
      scene.text(`${((s as any).npcdesc || '')} lets out a sigh of relief.`);
    }
    scene.text('<i>Probably...</i> you quietly reiterate to yourself.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
          // TODO-QSP: end !}
          scene.actions([
            { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"Don\'t worry," you smile. "It\'s a safe day for me. You can come inside me as much as you want."');
    scene.actions([
      { label: '<i>I\'ll be fine</i>', handler: (st: GameState) => {
    scene.text('<i>It\'s fine,</i> you think to yourself. <i>A few creampies won\'t kill me...</i>');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: '<i>I hope I get pregnant</i>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <i>I really hope this gets me pregnant,</i> you think giddily to yourself. <i>I ...
    scene.text(`<i>I really hope this gets me pregnant,</i> you think giddily to yourself. <i>I want ${((s as any).npcdesc || '')}'s babies swimming around inside me...</i>`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
          ]);
        }
      }
    }
    scene.actions([
      { label: 'You don\'t need to ask', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"You don\'t need to ask to come inside me y\'know," you murmur.');
    if (((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.actions([
        { label: 'I know how much you like it', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I know how much you like it. Plus I\'m on birth control. So you don\'t need to ask permission."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I know how much you like it."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFreeCreampies2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.actions([
        { label: 'I\'m on birth control', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "You know I\'m on birth control. So if you want to come inside me, you should go right ahead."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I\'m on birth control. So if you want to come inside me, you should go right ahead."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFreeCreampies2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not <i>every</i> time', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "Not <i>every</i> time. I\'ll let you know when it\'s a safe day," you smile gently. "And then you can come inside me as much as you want."');
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc || '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t mind', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I don\'t mind. Plus I\'m on birth control, so it\'s not like it really matters."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I don\'t mind."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFreeCreampies2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I love creampies', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I love it when you come inside. It feels really good. Plus I\'m on birth control. So you don\'t need to ask permission."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I love it when you come inside. It feels really good. So you don\'t need to ask permission."');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFreeCreampies2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFreeCreampies2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: dynamic text: <<$npcdesc>> gives you a predatory grin, so full of desire that it makes you inv...
      scene.text(`${((s as any).npcdesc || '')} gives you a predatory grin, so full of desire that it makes you involuntarily swallow.`);
      scene.text('"Good to know..."');
    } else {
      scene.text('"Good to know," he smirks amusedly.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you a look like he might just burst inside you again before g...
        scene.text(`${((s as any).npcdesc || '')} gives you a look like he might just burst inside you again before giving you a delighted grin.`);
        scene.text('"I\'m gonna pump you full of so much cum, you\'re going to still be dripping next week," he says excitedly and you can\'t help but giggle at his boyish glee.');
      } else {
        scene.text('"Good to know," he smirks amusedly.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
        // TODO-QSP: dynamic text: "Are you sure...?" <<$npcdesc>> asks hesitantly. "You're not worried you're goin...
        scene.text(`"Are you sure...?" ${((s as any).npcdesc || '')} asks hesitantly. "You're not worried you're going to get pregnant? I'm... I'm not really up for having kids..."`);
      } else {
        // TODO-QSP: dynamic text: "Is that really okay?" <<$npcdesc>> asks, wide-eyed.
        scene.text(`"Is that really okay?" ${((s as any).npcdesc || '')} asks, wide-eyed.`);
      }
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
        scene.actions([
          { label: 'I\'m on birth control', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).npc_know_not_bc = (s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you smile gently. "And it should be effective now. So you can come inside me as much as you want."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you smile gently. "So you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc || '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).pillcon2 ?? 0) >= 20000) {
          scene.actions([
            { label: 'I\'m on birth control', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
      scene.text('"I started birth control," you smile gently. "And it should be effective any day now. So you can come inside me as much as you want."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you smile gently. "So you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc || '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you lie with a seductively gentle smile. "And it should be effective now. So you can come inside me as much as you want."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you lie with a seductively gentle smile. "So you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc || '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'I\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you insist, smiling gently. "What could go wrong?"');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 4) + 1) === 1) {
      ((s as any).npc_free_creampies_count = (s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = (-1);
      // TODO-QSP: dynamic text: "I'm not comfortable with it," <<$npcdesc>> says, shaking his head. "Maybe if yo...
      scene.text(`"I'm not comfortable with it," ${((s as any).npcdesc || '')} says, shaking his head. "Maybe if you started birth control..."`);
    } else {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
      // TODO-QSP: dynamic text: "Okay..." <<$npcdesc>> says hesitantly, but smiles back at you anyways.
      scene.text(`"Okay..." ${((s as any).npcdesc || '')} says hesitantly, but smiles back at you anyways.`);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'It feels good', handler: (st: GameState) => {
    scene.text('"It feels so good," you coo gently. "I <i>want</i> you to come inside me. I want you to fill me with your cum..."');
    if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) <= ((s as any).pcs_persuas ?? 0))  ||  (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
      // TODO-QSP: dynamic text: Desire wars with willpower within <<$npcdesc>>. You watch as he struggles back a...
      scene.text(`Desire wars with willpower within ${((s as any).npcdesc || '')}. You watch as he struggles back and forth until he leers at you with a hungry stare and you know which one won out.`);
      // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> says. "I won't ask anymore."
      scene.text(`"Okay." ${((s as any).npcdesc || '')} says. "I won't ask anymore."`);
    } else {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).npc_free_creampies_count = (s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = (-1);
        // TODO-QSP: dynamic text: <<$npcdesc>> hesitates for a moment before shaking his head.
        scene.text(`${((s as any).npcdesc || '')} hesitates for a moment before shaking his head.`);
        scene.text('"I\'m not comfortable with it," he says. "Maybe if you started birth control..."');
      } else {
        // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
        // TODO-QSP: dynamic text: <<$npcdesc>> hesitates for a moment before nodding slowly.
        scene.text(`${((s as any).npcdesc || '')} hesitates for a moment before nodding slowly.`);
        scene.text('"Okay," he says, smiling. "I won\'t ask anymore."');
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I\'ll tell you when it\'s safe', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    scene.text('"I\'ll let you know when it\'s a safe day," you smile gently. "And then you can come inside me as much as you want."');
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc || '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampiePermissionCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterCreampiePermission1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  (((s as any).sex_ev ?? 0)?.['pullout_thank'] + ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] + ((s as any).sex_ev ?? 0)?.['not_inside'] === 0)) {
    scene.actions([
      { label: '"You don\'t have to pull out" (free creampies)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/4.jpg');
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
          } else {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      } else {
        // TODO-QSP: $sex_ev['bed_room']
      }
    } else {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    }
    // TODO-QSP: dynamic text: "You don't have to pull out, you know that right?" you tell <<$npcdesc>>.
    scene.text(`"You don't have to pull out, you know that right?" you tell ${((s as any).npcdesc || '')}.`);
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      scene.text('"So you\'re saying I can come inside you whenever I want?"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"But you\'re not on birth control," he says.');
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.actions([
            { label: 'I am now', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    // TODO-QSP: '"That was then," you reply. "This is now. And now I''m on ' + iif(tabletkishot > 0, 'the shot."', '...
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission3(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.actions([
            { label: 'So what?', handler: (st: GameState) => {
    scene.text('"So what?" you shrug carelessly, grinning. "I don\'t see why that should stop you."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Because I don\'t want kids?" he replies flatly. "Don\'t be stupid."');
      scene.text('"Ugh, you\'re so uptight," you grumble.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
        // TODO-QSP: dynamic text: "Well, if you want to roll the dice..." <<$npcdesc>> grins back.
        scene.text(`"Well, if you want to roll the dice..." ${((s as any).npcdesc || '')} grins back.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: "I don't know..." <<$npcdesc>> says, hesitating. "I don't think it's a good idea...
        scene.text(`"I don't know..." ${((s as any).npcdesc || '')} says, hesitating. "I don't think it's a good idea...`);
        scene.text('"Ugh, boo. You\'re no fun."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } },
            { label: 'I am now (lie)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    // TODO-QSP: '"That was then," you reply. "This is now. And now I''m on ' + iif(tabletkishot > 0, 'the shot."', '...
    scene.text('The lie comes easily.');
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          ((s as any).pc_know_childfree = (s as any).pc_know_childfree ?? {})[String((s as any).npcID ?? 0)] = 1;
          scene.text('"I don\'t want you getting pregnant," he replies. "Not just for you, but for me too. I don\'t want any kids of mine running around out there."');
          if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.actions([
              { label: 'On birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    // TODO-QSP: dynamic text: "Don't worry," you insist. "I'm on ' + iif(tabletkishot > 0, 'the shot. ', 'the ...
    scene.text('"Don\'t worry," you insist. "I\'m on \' + iif(tabletkishot > 0, \'the shot. \', \'the pill. \') + \'I won\'t get pregnant."');
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            ]);
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission3(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.actions([
              { label: '"I\'m on birth control" (lie)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    // TODO-QSP: dynamic text: "Don't worry," you insist. "I'm on ' + iif(tabletkishot > 0, 'the shot. ', 'the ...
    scene.text('"Don\'t worry," you insist. "I\'m on \' + iif(tabletkishot > 0, \'the shot. \', \'the pill. \') + \'I won\'t get pregnant."');
    scene.text('The lie comes easily.');
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
            ]);
          }
        } else {
          scene.text('"Wait, really?" he asks, surprised. "I can... come inside you?"');
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
            // TODO-QSP: dynamic text: <<$npcdesc>> is visibly excited by the prospect.
            scene.text(`${((s as any).npcdesc || '')} is visibly excited by the prospect.`);
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampiePermission2(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreampiePermission2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'On safe days', handler: (st: GameState) => {
    ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"On safe days anyways," you smile. "I\'ll let you know when."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'On birth control', handler: (st: GameState) => {
    ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: iif(npc_know_bc[$npcID] = 0, '"I''m on birth control," you shrug. "Why should it matter?"', '"You kn...
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"I don\'t mind"', handler: (st: GameState) => {
    ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"I don\'t mind," you smile. "Whatever you want to do, go for it."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Fill me up"', handler: (st: GameState) => {
    ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"<i>Fill me up,</i>" you whisper in reply.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Just ask first"', handler: (st: GameState) => {
    ((s as any).npc_ask_creampie = (s as any).npc_ask_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Just ask before you do," you smile back teasingly. "Some warning would be appreciated."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Less mess', handler: (st: GameState) => {
    ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"It\'s less mess," you grin. "Makes for an easy clean up."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCreampiePermission3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'It\'s safe right now', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"But it\'s safe right now," you reassure him. "I won\'t get pregnant if you come inside me now."');
    scene.text('"So you\'ll tell me when it\'s safe for me to come inside you?"');
    scene.text('"Yup."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 100) + 1) > ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: <<$npcdesc>> hesitates for a moment and then shakes his head.
      scene.text(`${((s as any).npcdesc || '')} hesitates for a moment and then shakes his head.`);
      scene.text('"No way. I don\'t want to take the risk."');
      scene.text('"Ugh, boo. You\'re no fun."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
      // TODO-QSP: dynamic text: "Well if it's safe..." <<$npcdesc>> smiles.
      scene.text(`"Well if it's safe..." ${((s as any).npcdesc || '')} smiles.`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
    scene.actions([
      { label: 'It\'s safe right now', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"But it\'s safe right now," you reassure him. "Well, it should be anyways. I won\'t get pregnant if you come inside me now."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "<i>Should</i> be?" <<$npcdesc>> asks pointedly.
      scene.text(`"<i>Should</i> be?" ${((s as any).npcdesc || '')} asks pointedly.`);
      scene.text('"Yeah," you insist. "It\'s not a fertile part of my cycle.');
    } else {
      scene.text('"So you\'ll tell me when it\'s safe for me to come inside you?"');
      scene.text('"Yup."');
    }
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 100) + 1) > ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: <<$npcdesc>> hesitates for a moment and then shakes his head.
      scene.text(`${((s as any).npcdesc || '')} hesitates for a moment and then shakes his head.`);
      scene.text('"No way. I don\'t want to take the risk."');
      scene.text('"Ugh, boo. You\'re no fun."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
      // TODO-QSP: dynamic text: "Well if it's safe..." <<$npcdesc>> smiles.
      scene.text(`"Well if it's safe..." ${((s as any).npcdesc || '')} smiles.`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'ll feel good', handler: (st: GameState) => {
    scene.text('"But it\'ll feel good," you grin at him.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
      // TODO-QSP: dynamic text: "That doesn't matter," <<$npcdesc>> scowls. "I don't want kids."
      scene.text(`"That doesn't matter," ${((s as any).npcdesc || '')} scowls. "I don't want kids."`);
      scene.text('"Ugh, boo. You\'re no fun."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 2;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
        // TODO-QSP: dynamic text: "You make a good point," <<$npcdesc>> grins back.
        scene.text(`"You make a good point," ${((s as any).npcdesc || '')} grins back.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: "I don't know..." <<$npcdesc>> says, hesitating. "I don't think it's a good idea...
        scene.text(`"I don't know..." ${((s as any).npcdesc || '')} says, hesitating. "I don't think it's a good idea...`);
        scene.text('"Ugh, boo. You\'re no fun."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } },
  ]);
  scene.build();
}

function enterForgotBcTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['forgot_bc_chat'] = 1;
  if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    // TODO-QSP: dynamic text: "What the fuck?!" <<$npcdesc>> exclaims. "Are you fucking kidding me? How could ...
    scene.text(`"What the fuck?!" ${((s as any).npcdesc || '')} exclaims. "Are you fucking kidding me? How could you forget? You better not get pregnant on me. I am <i>not</i> having your fucking kids."`);
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'Morning after pill (sorry)', handler: (st: GameState) => {
    qspCall(s, 'medical_din', 'morning_after_pill_function');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill'] = 2;
    scene.text('"I know, I know!" you moan miserably, berating yourself as much as he\'s berating you. "I\'m sorry, I\'m so sorry. I know I fucked up. But I have this at least."');
    scene.text('You fish a plan B pill out of your bag and hold it up for him to see.');
    scene.text('"This ought to buy us some protection," you say, putting it in your mouth and crunching it down dry.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Morning after pill (fuck off)', handler: (st: GameState) => {
    qspCall(s, 'medical_din', 'morning_after_pill_function');
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['angry_after'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill'] = 2;
    scene.text('"<i>\'Your\'</i> kids?" you say, glaring at him. "You know what? You can fuck off! I made a mistake and I admitted it. And you I have the fucking solution," you say, defiantly holding up your morning after pill.');
    scene.text('"So you can fuck off!" you say again, throwing the pill in your mouth and crunching it down dry. "This is what I get for wanting to be accountable and transparent," you grumble, grinding your teeth on the bitter medicine.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      ]);
    }
    scene.actions([
      { label: 'Wallow', handler: (st: GameState) => {
    scene.text('"I know, I know!" you moan miserably, berating yourself as much as he\'s berating you. "I\'m a fucking idiot. I\'m sorry, I\'m so sorry."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Tell him to fuck off', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['angry_after'] = 1;
    scene.text('"<i>\'Your\'</i> kids?" you say, glaring at him. "If I get pregnant, you\'re not the one who\'s gonna have to push your ugly baby out her pussy! Don\'t try to make this about you. You can fuck off!"');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
      // TODO-QSP: dynamic text: "So what? I didn't come inside you last night," <<$npcdesc>> says, looking confu...
      scene.text(`"So what? I didn't come inside you last night," ${((s as any).npcdesc || '')} says, looking confused.`);
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
        scene.text('"Yeah but it may mean we need to start using condoms again for a while," you sigh.');
      } else {
        scene.text('"Yeah but I\'m supposed to take it every day," you sigh.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterForgotBcExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "Shit," <<$npcdesc>> says, looking concerned. "What are you gonna do?"
      scene.text(`"Shit," ${((s as any).npcdesc || '')} says, looking concerned. "What are you gonna do?"`);
      if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
        scene.actions([
          { label: 'Take your morning after pill', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill'] = 2;
    qspCall(s, 'medical_din', 'morning_after_pill_function');
    scene.text('"I have this," you say, fishing around in your bag to pull out your morning after pill.');
    scene.text('"This ought to buy us some protection," you say, putting it in your mouth.');
    scene.text('"Does that work if you were already on the pill? You only forgot one day."');
    scene.text('"Can\'t hurt," you mumble around the pill as you crunch it down.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterForgotBcExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Buy some plan B?', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['plan_b_buy'] = 1;
    scene.text('"Buy a morning after pill?" you say, shrugging. "I don\'t know. Does it still work when you\'re already sort of on birth control?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> shrugs back. Great help.
    scene.text(`${((s as any).npcdesc || '')} shrugs back. Great help.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterForgotBcExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'I don\'t know', handler: (st: GameState) => {
    scene.text('"I don\'t know," you say, looking back at him apologetically. "Hope we get lucky I guess?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterForgotBcExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterForgotBcExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_loc ?? 0) === 'sex_ev_morning') {
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } else {
    qspCall(s, 'sex_ev_pillow_talk2', 'morning_sex_talk');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackThink(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"Hmmm..."');
    scene.text('<i>He\'s got a point,</i> you muse to yourself. <i>Nothing bad happened this time. What <b>if</b> we just stopped using condoms...?</i>');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bareback_thinking'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackTooRisky(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackAgree(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBarebackTooRisky(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Way too risky', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "No way!" you exclaim' + iif(sex_ev['bareback_thinking'] = 1, ', dismissing the ...
    scene.text('"No way!" you exclaim\' + iif(sex_ev[\'bareback_thinking\'] = 1, \', dismissing the thought with a shake of your head. \', \'. \') + \'"That\'s way too risky! Just because nothing went wrong this time doesn\'t mean something can\'t go wrong in the future! We skipped it this time, but it\'s not becoming a regular thing."');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_bareback_risk ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You said that last time too," <<$npcdesc>> snickers.
        scene.text(`"You said that last time too," ${((s as any).npcdesc || '')} snickers.`);
      } else {
        if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "I don't see why," <<$npcdesc>> grumbles. "We both hate using them. We're only m...
          scene.text(`"I don't see why," ${((s as any).npcdesc || '')} grumbles. "We both hate using them. We're only making things worse for ourselves."`);
        } else {
          if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: "Maybe that was asking a bit too much," <<$npcdesc>> replies sheepishly.
            scene.text(`"Maybe that was asking a bit too much," ${((s as any).npcdesc || '')} replies sheepishly.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> sighs deeply.
            scene.text(`${((s as any).npcdesc || '')} sighs deeply.`);
            scene.text('"Guess that was too much to hope for..."');
          }
        }
      }
    } else {
      if (((s as any).npc_bareback_risk ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "But didn't you say that the last time after we went bareback?" <<$npcdesc>> say...
        scene.text(`"But didn't you say that the last time after we went bareback?" ${((s as any).npcdesc || '')} says with a puzzled look.`);
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Yeah, better safe than sorry I guess," <<$npcdesc>> nods. "Using condoms sucks ...
          scene.text(`"Yeah, better safe than sorry I guess," ${((s as any).npcdesc || '')} nods. "Using condoms sucks a lot less than you getting pregnant."`);
        } else {
          // TODO-QSP: dynamic text: "Yeah, better safe than sorry," <<$npcdesc>> nods. "Sorry. Don't know what I was...
          scene.text(`"Yeah, better safe than sorry," ${((s as any).npcdesc || '')} nods. "Sorry. Don't know what I was thinking asking that."`);
        }
      }
    }
    ((s as any).npc_bareback_risk = (s as any).npc_bareback_risk ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterBarebackAgree(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'Bareback on safe days', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'when_safe'
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"I think it would be too risky to go bareback all the time," you say slowly. "But if it\'s at the right time, maybe it will be okay?"');
    // TODO-QSP: dynamic text: "What are you saying?" <<$npcdesc>> asks. He seems to be trying not to get his h...
    scene.text(`"What are you saying?" ${((s as any).npcdesc || '')} asks. He seems to be trying not to get his hopes up before you say it out loud.`);
    scene.text('"As long as I\'m not in danger of getting pregnant, then it should be okay to skip the condom. So if I time it with my cycle, it should be fine. Right?"');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Well... I\'d prefer if we skipped the condoms altogether," he says wistfully. "But that\'s better than nothing."');
    } else {
      scene.text('"That sounds really good," he smiles eagerly.');
    }
    scene.text('"Okay," you smile back. "I\'ll let you know the next time it\'s safe."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start going bareback', handler: (st: GameState) => {
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Okay," you say with an eager smile. "Let\'s stop using condoms then."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks back at you shocked.
    scene.text(`${((s as any).npcdesc || '')} looks back at you shocked.`);
    scene.text('"You really mean it?" he asks.');
    scene.actions([
      { label: 'You really mean it', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['boy_pill_suggest'] === 1) {
      scene.text('"Yeah," you nod. "I really mean it. Let\'s go bareback from now on. If I need to get a pill after, then I\'ll get a pill after."');
    } else {
      scene.text('"Yeah," you nod. "I really mean it. Let\'s go bareback from now on."');
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
        scene.text('<i>I\'m on birth control anyways</i>, you think to yourself. <i>I probably don\'t need to be so extra protective.</i>');
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> seems very excited.
      scene.text(`${((s as any).npcdesc || '')} seems very excited.`);
    }
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Tease him', handler: (st: GameState) => {
    scene.text('"Yeah? Why? Are you saying you want to keep using them?" you reply teasingly.');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Fuck no! I\'ve been waiting forever for this!"');
    } else {
      scene.text('"No! No! I mean, if you\'re good to stop, then I\'m good with it too."');
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> seems very excited.
    scene.text(`${((s as any).npcdesc || '')} seems very excited.`);
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBarebackThinkPill(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"Hmmm..."');
    scene.text('<i>He\'s got a point,</i> you muse to yourself. <i>As long as I make sure I take some plan B by the next day, it should be just fine. Shouldn\'t it?</i>');
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['bareback_thinking'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackTooRisky(s, scene); (s as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackAgree(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBarebackPillExpense(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Too expensive', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"That pill costs money you know," you say irritably. "I\'m not willing to pay for that every time you forget to pull out."');
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] >= 1  &&  ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  (Math.floor(Math.random() * 3) + 1) === 3)  ||  (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
      // TODO-QSP: dynamic text: "How about I pay for it then?" <<$npcdesc>> asks. "Any time you need a morning a...
      scene.text(`"How about I pay for it then?" ${((s as any).npcdesc || '')} asks. "Any time you need a morning after pill because of me, I'll give you money to pay for it."`);
      scene.text('He grabs his wallet and pulls out a wad of notes.');
      // TODO-QSP: dynamic text: "<<$func('money', 'string_profit', 1000)>> should be enough, right?" he grins. "...
      scene.text(`"${qspFunc(s, 'money', 'string_profit', 1000)} should be enough, right?" he grins. "You can buy one to be ready for next time."`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMaPillDealAccept(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.actions([
      { label: 'Couldn\'t impose', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('You blink as he offers the cash to you.');
    scene.text('"No, I couldn\'t possibly," you say, pushing it back towards him. "I\'d feel bad taking your money."');
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
      scene.text('"Why? I\'m your boyfriend," he grins extending the money again. "You feel bad that the guy you\'re dating wants to pay for something?"');
    } else {
      scene.text('"Why? I\'m getting something out of it too," he grins extending the money again. "Just take it and let\'s start going bareback."');
    }
    qspCall(s, 'willpower', 'misc', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"No," you say, forcing the money away again. "I\'m not taking your money for this. We\'ll just keep using condoms."');
    // TODO-QSP: dynamic text: <<$npcdesc>> sighs in disappointment but does as you ask and puts the cash away.
    scene.text(`${((s as any).npcdesc || '')} sighs in disappointment but does as you ask and puts the cash away.`);
    scene.text('"Let me know if you ever change your mind," he says. "Offer will still stand."');
    ((s as any).npc_pay_for_ma_pill_offer = (s as any).npc_pay_for_ma_pill_offer ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMaPillDealAccept(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Hormonal influence', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "It's not just the money," you shake your head, pushing his hand back. "Those pi...
    scene.text('"It\'s not just the money," you shake your head, pushing his hand back. "Those pills are just a bunch of hormones getting dumped into my body. It could totally throw my balance out of whack. I have enough hormonal issues as it is \' + iif(age < 20, \'as a teenage girl.\', \'as a woman.\') + \'I don\'t need more."');
    // TODO-QSP: dynamic text: "Fair enough I suppose," <<$npcdesc>> replies ruefully and puts the money away. ...
    scene.text(`"Fair enough I suppose," ${((s as any).npcdesc || '')} replies ruefully and puts the money away. "Offer's always on the table if you change your mind."`);
    ((s as any).npc_pay_for_ma_pill_offer = (s as any).npc_pay_for_ma_pill_offer ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Not a charity case', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I\'m not some kind of charity case," you say in irritation, practically slapping his hand away. "I can get by just fine on my own and <i>I</i> choose what I want to spend <i>my</i> money on."');
    // TODO-QSP: dynamic text: "Just let me know if you ever change your mind," <<$npcdesc>> shrugs, putting th...
    scene.text(`"Just let me know if you ever change your mind," ${((s as any).npcdesc || '')} shrugs, putting the money away. "Offer is here any time you want it."`);
    ((s as any).npc_pay_for_ma_pill_offer = (s as any).npc_pay_for_ma_pill_offer ?? {})[String((s as any).npcID ?? 0)] = 1;
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "I guess you have a point there," <<$npcdesc>> chuckles. "It could really add up...
      scene.text(`"I guess you have a point there," ${((s as any).npcdesc || '')} chuckles. "It could really add up quickly if things went wrong."`);
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterMaPillDealAccept(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    scene.actions([
      { label: 'Surprise', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Wait really?" you say in surprise, taking the notes from him. "You\'d really do that? I can just have this?"');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBoyPaysForMaPills(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Gratitude', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Oh! Wow," you say, taking the notes from him. "That\'s... This is actually very helpful. That\'s so nice of you! Not sure how many guys would be willing to pay for a girl\'s emergency birth control like this."');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Excitement', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Seriously?!" you say, excitedly grabbing the money. "If you\'re paying for it then sure!"');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyPaysForMaPills(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "Well it would cost me a lot more money if you got pregnant and I had to pay chi...
    scene.text(`"Well it would cost me a lot more money if you got pregnant and I had to pay child support," ${((s as any).npcdesc || '')} chuckles jokingly. "But I make plenty of money. The cost of a few pills is hardly going to make a dent. So you ready to stop using condoms?"`);
  } else {
    // TODO-QSP: dynamic text: "I make enough money to be able to afford the nicer things in life," <<$npcdesc>...
    scene.text(`"I make enough money to be able to afford the nicer things in life," ${((s as any).npcdesc || '')} shrugs somewhat smugly. "What's a few pills here and there? So you ready to stop using condoms?"`);
  }
  scene.text('"I guess as long as you\'re paying for it..." you say.');
  ((s as any).npc_pay_for_ma_pill = (s as any).npc_pay_for_ma_pill ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
  qspCall(s, 'money', 'earn', 1000);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill_money'] = 1;
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterMaPillMoney(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill_money'] === 0  &&  ((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: 'Ask for plan B money', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill_money'] = 1;
    qspCall(s, 'money', 'earn', 1000);
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      scene.text('"Think I could get that money for the pill now?" you ask, rubbing your thighs together over the cum still oozing from your pussy.');
    } else {
      // TODO-QSP: dynamic text: "Think I could get that money for the pill now?" you ask, rubbing your thighs to...
      scene.text(`"Think I could get that money for the pill now?" you ask, rubbing your thighs together as you remember the feeling of ${((s as any).npcdesc || '')}'s cum oozing from your pussy.`);
    }
    // TODO-QSP: dynamic text: "Sure thing," he says, quickly reaching over to his wallet and pulling out a <<$...
    scene.text(`"Sure thing," he says, quickly reaching over to his wallet and pulling out a ${qspFunc(s, 'money', 'string_profit', 1000)} note and handing it to you.`);
    scene.text('"Thanks," you say as you take it.');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackBcSuggest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['using_bc'] === 0) {
    scene.actions([
      { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"Hmmm..." you hum to yourself. "I\'ll think about it...');
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Already am', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      ((s as any).npc_know_bc_not_effective = (s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 1;
      scene.text('"I <i>am</i> on birth control," you sigh. "But it\'s not ready yet. It\'s still going to be a while longer before it\'s effective and I can\'t afford not to use condoms until that happens."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I <i>am</i> on birth control," you sigh. "But hormonal birth control isn\'t 100% effective. I really don\'t want to get pregnant so gotta use condoms, even if I hate them."');
      if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Seriously?" <<$npcdesc>> says, giving you an exasperated look. "You've been on ...
        scene.text(`"Seriously?" ${((s as any).npcdesc || '')} says, giving you an exasperated look. "You've been on birth control this whole time and we're still using condoms? What the hell!"`);
        scene.text('"I just told you, I don\'t want to get pregnant!"');
        scene.text('"You\'re not going to get pregnant while you\'re on birth control! Stop being so paranoid and let\'s just go bareback already!"');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBarebackAgree(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'No way', handler: (st: GameState) => {
    scene.text('"No way!" you exclaim. "Just because nothing went wrong this time doesn\'t mean something can\'t go wrong in the future!"');
    // TODO-QSP: dynamic text: "This is fucking dumb," <<$npcdesc>> grumbles.
    scene.text(`"This is fucking dumb," ${((s as any).npcdesc || '')} grumbles.`);
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Seems a little excessive, don't you think?" <<$npcdesc>> says giving you an odd...
        scene.text(`"Seems a little excessive, don't you think?" ${((s as any).npcdesc || '')} says giving you an odd look.`);
        scene.text('"Better than getting pregnant," you shrug back.');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBorrowMoney(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['borrow_$$'] === 0) {
    scene.actions([
      { label: 'Ask for money...', handler: (st: GameState) => {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['borrow_$$'] = 1;
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorrowPlanb(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Never mind', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['borrow_$$'] = 0
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBorrowPlanb(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: '... for plan B', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    } else {
      // TODO-QSP: $sex_ev['bed_room']
    }
    // TODO-QSP: dynamic text: "Hey, can I borrow some money?" you ask <<$npcdesc>>. "I need it for the morning...
    scene.text(`"Hey, can I borrow some money?" you ask ${((s as any).npcdesc || '')}. "I need it for the morning after pill."`);
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) > 1) {
      // TODO-QSP: dynamic text: "Are you kidding? I barely have any money myself," <<$npcdesc>> scowls. "I got n...
      scene.text(`"Are you kidding? I barely have any money myself," ${((s as any).npcdesc || '')} scowls. "I got nothing to give to you."`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorrowMoneyExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 4) + 1) === 1  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"Actually, I\'m a little strapped for cash myself," he mumbles embarrassedly. "I need every ruble right now. Sorry."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorrowMoneyExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"Aren\'t you on birth control already?" he asks confusedly.');
          if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.text('"I just like being extra safe," you say.');
          } else {
            qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
            scene.text('"I actually stopped a while back... Did I forget to tell you?"');
            // TODO-QSP: dynamic text: You give <<$npcdesc>> an embarrassed smile.
            scene.text(`You give ${((s as any).npcdesc || '')} an embarrassed smile.`);
          }
          if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
            scene.text('"You want to spend my money on a \'just in case\'? Fuck no! You can buy it yourself. If you can\'t afford it, that\'s what birth control is for in the first place."');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBorrowMoneyExit(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                // TODO-QSP: dynamic text: "Ugh, how much do you need?" <<$npcdesc>> grumbles reaching for his wallet.
                scene.text(`"Ugh, how much do you need?" ${((s as any).npcdesc || '')} grumbles reaching for his wallet.`);
              } else {
                scene.text('"How much do you need?" he asks.');
              }
            }
          }
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBorrowPlanb2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 100) ?? '') + ' (just a little)', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 100);
    qspCall(s, 'sex_ev_leave', 'dress_loop');
    // TODO-QSP: dynamic text: "I'm just a little short right now," you say, <<$sex_ev['dress_describe']>>. "On...
    scene.text(`"I'm just a little short right now," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Only about ${qspFunc(s, 'money', 'string_profit', 100)} or so."`);
    // TODO-QSP: dynamic text: "Easy enough," he says and hands you a <<$func('money', 'string_profit', 100)>> ...
    scene.text(`"Easy enough," he says and hands you a ${qspFunc(s, 'money', 'string_profit', 100)} note.`);
    qspCall(s, 'sex_ev_dress_talking', 'ma_pill_ask_money3');
  } },
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 370) ?? '') + ' (half price)', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', 400);
    qspCall(s, 'sex_ev_leave', 'dress_loop');
    // TODO-QSP: dynamic text: "I've only got enough for half," you say, <<$sex_ev['dress_describe']>>. "I thin...
    scene.text(`"I've only got enough for half," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I think that's... ${qspFunc(s, 'money', 'string_profit', 370)}?"`);
    // TODO-QSP: dynamic text: "Here, take <<$func('money', 'string_profit', 400)>>," he says, handing you a co...
    scene.text(`"Here, take ${qspFunc(s, 'money', 'string_profit', 400)}," he says, handing you a couple notes. "I'm not about to count out ${qspFunc(s, 'money', 'string_profit', 30)} in change."`);
    qspCall(s, 'sex_ev_dress_talking', 'ma_pill_ask_money3');
  } },
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 740) ?? '') + ' (full price)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_leave', 'dress_loop');
    // TODO-QSP: dynamic text: "<<$func('money', 'string_profit', 740)>>? I think that's how much it costs. I.....
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 740)}? I think that's how much it costs. I... don't really have any money right now," you admit while ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'money', 'earn', 740);
      // TODO-QSP: dynamic text: "Seriously?" <<$npcdesc>> scowls as hands over the notes. "You don't have <i>any...
      scene.text(`"Seriously?" ${((s as any).npcdesc || '')} scowls as hands over the notes. "You don't have <i>any</i> money? Get a job or something."`);
    } else {
      qspCall(s, 'money', 'earn', 800);
      // TODO-QSP: dynamic text: "Here, just take <<$func('money', 'string_profit', 800)>>," <<$npcdesc>> says, h...
      scene.text(`"Here, just take ${qspFunc(s, 'money', 'string_profit', 800)}," ${((s as any).npcdesc || '')} says, handing you several notes. "Better than you getting pregnant."`);
    }
    qspCall(s, 'sex_ev_dress_talking', 'ma_pill_ask_money3');
  } },
  ]);
  scene.build();
}

function enterBorrowMoneyExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['get_up'] === 0) {
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } else {
    qspCall(s, 'sex_ev_after', 'after_sex2');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatingRules(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'No kissing', handler: (st: GameState) => {
    ((s as any).npc_no_kiss = (s as any).npc_no_kiss ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No kissing," you say.');
    // TODO-QSP: dynamic text: "That's fine," <<$npcdesc>> nods.
    scene.text(`"That's fine," ${((s as any).npcdesc || '')} nods.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheatingRules(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] !== 2) {
    scene.actions([
      { label: 'No creampies', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule = (s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 2;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"You can\'t come inside me," you say. "That\'s too far."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "We always use condoms anyways," <<$npcdesc>> shrugs.
      scene.text(`"We always use condoms anyways," ${((s as any).npcdesc || '')} shrugs.`);
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'creampie') {
        // TODO-QSP: dynamic text: "But that's the best part about fucking you," <<$npcdesc>> grins.
        scene.text(`"But that's the best part about fucking you," ${((s as any).npcdesc || '')} grins.`);
        scene.text('"I\'m serious," you say sternly. "No creampies."');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'mouth') {
          // TODO-QSP: dynamic text: "So long as I can watch you swallow," <<$npcdesc>> grins.
          scene.text(`"So long as I can watch you swallow," ${((s as any).npcdesc || '')} grins.`);
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'facial') {
            // TODO-QSP: dynamic text: "So long as I can come all over your pretty face," <<$npcdesc>> grins.
            scene.text(`"So long as I can come all over your pretty face," ${((s as any).npcdesc || '')} grins.`);
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'tits') {
              // TODO-QSP: dynamic text: "So long as I can come all over your beautiful tits," <<$npcdesc>> grins.
              scene.text(`"So long as I can come all over your beautiful tits," ${((s as any).npcdesc || '')} grins.`);
            } else {
              if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'pullout') {
                // TODO-QSP: dynamic text: "I prefer the pullout method anyways," <<$npcdesc>> grins.
                scene.text(`"I prefer the pullout method anyways," ${((s as any).npcdesc || '')} grins.`);
              }
            }
          }
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheatingRules(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).npc_condom_rule ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'Always condoms', handler: (st: GameState) => {
    ((s as any).npc_condom_rule = (s as any).npc_condom_rule ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"We always have to use a condom," you say.');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Oh, come on. We don-"');
      scene.text('"I\'m serious!" you say sternly. "No condoms, no deal."');
    } else {
      if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "We already do," <<$npcdesc>> smiles.
        scene.text(`"We already do," ${((s as any).npcdesc || '')} smiles.`);
      } else {
        if (((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          // TODO-QSP: dynamic text: "A little redundant, don't you think?" <<$npcdesc>> smirks.
          scene.text(`"A little redundant, don't you think?" ${((s as any).npcdesc || '')} smirks.`);
        } else {
          // TODO-QSP: dynamic text: "I guess that's fair," <<$npcdesc>> says.
          scene.text(`"I guess that's fair," ${((s as any).npcdesc || '')} says.`);
        }
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCheatingRules(s, scene); (s as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Those are the rules," you say. "So as long as we follow those, we can keep doing this."');
    // TODO-QSP: dynamic text: "I can agree to that," <<$npcdesc>> smiles.
    scene.text(`"I can agree to that," ${((s as any).npcdesc || '')} smiles.`);
    qspCall(s, 'sex_ev_after', 'after_sex_dressed');
  } },
  ]);
  scene.build();
}

function enterCheatingEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Smile back', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    if (((s as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You return his smile, the prospect of future encounters already seeping into your panties as you head out the door.');
    } else {
      if (((s as any).PCloSkirt ?? 0) > 0) {
        scene.text('You return his smile, the prospect of future encounters already creating moisture between your thighs as you head out the door.');
      } else {
        scene.text('You return his smile, the prospect of future encounters already seeping into your pants as you head out the door.');
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    { label: 'Guilt', handler: (st: GameState) => {
    scene.text('You return the smile, but a stab of guilt pierces your chest anyways.');
    scene.text('<i>Are you just rationalizing? Making excuses? Why aren\'t you just ending things?</i>');
    scene.text('But you just keep smiling all the way until you close the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyDateAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "We've been having fun, right?" <<$npcdesc>> asks slowly.
  scene.text(`"We've been having fun, right?" ${((s as any).npcdesc || '')} asks slowly.`);
  if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
    scene.actions([
      { label: 'They\'re called simultaneous orgasms', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "They're called simultaneous orgasms, <<$npcdesc>>," you grin back. 
    scene.text(`"They're called simultaneous orgasms, ${((s as any).npcdesc || '')}," you grin back. `);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRapeExplain(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).stat ?? 0)?.['rape_count'] === 1) {
    // TODO-QSP: dynamic text: <<$npcdesc>> stops in shock wondering what has just come over you as your body c...
    scene.text(`${((s as any).npcdesc || '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. The images and sensations of that time come flooding back to you, invading your mind. It's as if you're back in that moment, being violated all over again.`);
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] < 5) {
      // TODO-QSP: dynamic text: <<$npcdesc>> stops in shock wondering what has just come over you as your body c...
      scene.text(`${((s as any).npcdesc || '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. The images and sensations come flooding back to you, invading your mind. The memories of your various attackers won't stop flashing before your eyes, memories of your body being violated like a montage you can't escape.`);
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] < 10) {
        // TODO-QSP: dynamic text: <<$npcdesc>> stops in shock wondering what has just come over you as your body c...
        scene.text(`${((s as any).npcdesc || '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. Images and sensations flood through you, invading your mind. The memories of your attackers all blur together, combining into one horrible sensation like they're all violating you at once.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> stops in shock wondering what has just come over you as your body c...
        scene.text(`${((s as any).npcdesc || '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. Images and sensations flood through you, invading your mind. Your countless rapes leave you a shuddering mess as the trauma threatens to overwhelm you.`);
      }
    }
  }
  // TODO-QSP: dynamic text: "What just...?" <<$npcdesc>> stammers confusedly.
  scene.text(`"What just...?" ${((s as any).npcdesc || '')} stammers confusedly.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to hide it', handler: (st: GameState) => {
    scene.text('"I... I just don\'t like it rough," you whimper, tears running down your cheeks as you sniff, pathetically trying to wipe them away with the back of your hand.');
  } },
    { label: 'Tell him what happened', handler: (st: GameState) => {
    ((s as any).npc_knows_rape_victim = (s as any).npc_knows_rape_victim ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: You crawl up beside <<$npcdesc>>, still shivering as you wipe the tears from you...
    scene.text(`You crawl up beside ${((s as any).npcdesc || '')}, still shivering as you wipe the tears from your eyes that won't stop flowing.`);
    if (((s as any).stat ?? 0)?.['rape_count'] === 1) {
      scene.text('"Listen," you sniff, rubbing your hand across your cheek again. "I was raped once... It was awful and horrible and I... well I... I had a flashback about it just now..."');
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] < 5) {
        scene.text('"I\'ve never told you this but..." you sniff, rubbing your hand across your cheek again. "I\'ve been raped... Several times... and I... I had flashbacks just now..."');
      } else {
        if (((s as any).stat ?? 0)?.['rape_count'] < 10) {
          scene.text('"I\'ve never told you this but..." you sniff, rubbing your hand across your cheek again. "I\'ve been raped... More than a few times... and I... I had flashbacks just now..."');
        } else {
          scene.text('"I\'ve never told you this but..." you sniff, rubbing your hand across your cheek again. "I\'ve been raped... A lot... I don\'t know why it keeps happening but I\'ve been raped so many times I\'ve lost count... And sometimes the trauma just comes out..."');
        }
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> is taken aback and goes quiet. Its several minutes before he finall...
    scene.text(`${((s as any).npcdesc || '')} is taken aback and goes quiet. Its several minutes before he finally speaks again.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I\'m... I\'m so sorry for what happened to you," he says. "I had no idea."');
    scene.text('"It\'s not your fault," you sniff again. "You couldn\'t have known. I never told you. Until now."');
    // TODO-QSP: dynamic text: "So... I should lay off the rough sex in the future?" <<$npcdesc>> asks hesitant...
    scene.text(`"So... I should lay off the rough sex in the future?" ${((s as any).npcdesc || '')} asks hesitantly.`);
    scene.actions([
      { label: 'Just tonight', handler: (st: GameState) => {
    scene.text('"You don\'t have to stop getting rough," you say, rubbing your eyes again. "I just... it doesn\'t always happen to me during this kind of sex, but I guess something triggered me. I like it rough sometimes, I promise. Just not... tonight..."');
    scene.text('The conversation trails off.');
  } },
      { label: 'That would be nice', handler: (st: GameState) => {
    scene.text('"That would be nice," you say wiping your eyes again. "It helps when it\'s not rough..."');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRapeExplain2(s: GameState, scene: SceneBuilder): void {
  scene.text('"I guess I kind of ruined the mood, didn\'t I?" you say with a small laugh of self pity.');
  // TODO-QSP: end
  scene.build();
}

function enterProstitutionPayment(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_calc');
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
    scene.actions([
      { label: 'Ask for your sugar money', handler: (st: GameState) => {
    scene.actions([
      { label: 'Demurely', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk4.jpg');
    scene.text('"Now that we\'ve had our fun..." you smile sweetly. "And I did something for you... Don\'t you have something for me...?"');
    // TODO-QSP: dynamic text: You pout cutely, making doe eyes at <<$npcdesc>> who smiles back and reaches ove...
    scene.text(`You pout cutely, making doe eyes at ${((s as any).npcdesc || '')} who smiles back and reaches over to his wallet.`);
    // TODO-QSP: dynamic text: "Sure do," he says, pulling out <<$func('money', 'string_profit', sex_ev['prosti...
    scene.text(`"Sure do," he says, pulling out ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')} in cash and handing it over to you. "There you go baby girl."`);
    if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('You see he even paid you the money he owed you from last time.');
    }
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
    qspGoto(s, 'sex_ev_talk', 'prostitution_payment_thank');
  } },
      { label: 'Transactionally', handler: (st: GameState) => {
    ((s as any).npc_dislike = (s as any).npc_dislike ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_dislike[String((s as any).npcID ?? 0)] ?? 0) + (1);
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      // TODO-QSP: dynamic text: "Okay, we've fucked. Can I get paid now?" you ask bluntly. <<$npcdesc>> gives yo...
      scene.text(`"Okay, we've fucked. Can I get paid now?" you ask bluntly. ${((s as any).npcdesc || '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}.`);
    } else {
      // TODO-QSP: dynamic text: "Okay, I got you off. Can I get paid now?" you ask bluntly. <<$npcdesc>> gives y...
      scene.text(`"Okay, I got you off. Can I get paid now?" you ask bluntly. ${((s as any).npcdesc || '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}.`);
    }
    if (((s as any).npc_prostitution_tab ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('You see he even paid you the money he owed you from last time.');
    }
    scene.text('"Here," he says. He offers it towards you and you snatch it out of his hand.');
    scene.text('"Thanks," you reply absent-mindedly as you stuff the money into your purse.');
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
    qspGoto(s, 'sex_ev_after', 'relax_together');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).sex_ev ?? 0)?.['prostitution_owed'] > 0) {
      scene.actions([
        { label: 'Ask for your money', handler: (st: GameState) => {
    scene.actions([
      { label: 'Demurely', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk4.jpg');
    if (((s as any).sex_ev ?? 0)?.['prostituation_paid'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 1) {
        scene.text('"Soooo... Now that we\'ve made some cream pies together..." you start, smiling sweetly and drawing your finger in loops on his chest. "Don\'t you have to pay for me to take them home?"');
      } else {
        scene.text('"Soooo... Now that we\'ve some more stuff to make <i>you</i> feel good..." you start, smiling sweetly and drawing your finger in loops on his chest. "Don\'t you need to give <i>me</i> something to feel good?"');
      }
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Fuck, I was hoping you'd forget about that," <<$npcdesc>> scowls as he reaches ...
        scene.text(`"Fuck, I was hoping you'd forget about that," ${((s as any).npcdesc || '')} scowls as he reaches for his money and pulls out some notes. "That's what I get for thinking with my dick."`);
      } else {
        // TODO-QSP: dynamic text: "A deal's a deal, I guess," <<$npcdesc>> says, reaching for his money to pull ou...
        scene.text(`"A deal's a deal, I guess," ${((s as any).npcdesc || '')} says, reaching for his money to pull out some notes.`);
      }
      scene.text('As he proffers it, you pluck it daintily from his fingers.');
    } else {
      // TODO-QSP: dynamic text: "Now that we've had our fun..." you say, smiling sweetly at <<$npcdesc>>. "And I...
      scene.text(`"Now that we've had our fun..." you say, smiling sweetly at ${((s as any).npcdesc || '')}. "And I did something for you... Don't you have something for me...?"`);
      // TODO-QSP: dynamic text: You pout cutely, making doe eyes at <<$npcdesc>> who smiles back and reaches ove...
      scene.text(`You pout cutely, making doe eyes at ${((s as any).npcdesc || '')} who smiles back and reaches over to his wallet.`);
      // TODO-QSP: dynamic text: "Yeah," he says, pulling out <<$func('money', 'string_profit', sex_ev['prostitut...
      scene.text(`"Yeah," he says, pulling out ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')} in cash and handing it over to you. "Worth every ruble."`);
    }
    scene.text('"Thank you very much," you smile back and put the money away into your purse.');
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
    qspCall(s, 'sex_ev_after', 'relax_together');
  } },
      { label: 'Transactionally', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    if (((s as any).sex_ev ?? 0)?.['prostituation_paid'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 1) {
        // TODO-QSP: dynamic text: "Okay, I let you cum inside me. You owe me another <<$func('money', 'string_prof...
        scene.text(`"Okay, I let you cum inside me. You owe me another ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}."`);
      } else {
        // TODO-QSP: dynamic text: "Okay, you paid for extras and we did it. You owe me another <<$func('money', 's...
        scene.text(`"Okay, you paid for extras and we did it. You owe me another ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}."`);
      }
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Fuck's sake, <<$func('money', 'string_profit', sex_ev['prostitution_owed'])>>?"...
        scene.text(`"Fuck's sake, ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}?" ${((s as any).npcdesc || '')} scowls as he reaches for his money and pulls out some notes. "That's what I get for thinking with my dick."`);
        scene.text('As he proffers it, you snatch it from his hand');
      } else {
        // TODO-QSP: dynamic text: "A deal's a deal, I guess," <<$npcdesc>> says, reaching for his money to pull ou...
        scene.text(`"A deal's a deal, I guess," ${((s as any).npcdesc || '')} says, reaching for his money to pull out some notes.`);
      }
      scene.text('As he proffers it, you snatch it from his hand.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        // TODO-QSP: dynamic text: "Okay, we've fucked. Can I get paid now?" you ask bluntly. <<$npcdesc>> gives yo...
        scene.text(`"Okay, we've fucked. Can I get paid now?" you ask bluntly. ${((s as any).npcdesc || '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}.`);
      } else {
        // TODO-QSP: dynamic text: "Okay, I got you off. Can I get paid now?" you ask bluntly. <<$npcdesc>> gives y...
        scene.text(`"Okay, I got you off. Can I get paid now?" you ask bluntly. ${((s as any).npcdesc || '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', ((s as any).sex_ev ?? 0)?.['prostitution_owed'] ?? '')}.`);
      }
      scene.text('"Here," he says. He offers it towards you and you snatch it out of his hand.');
    }
    scene.text('"Thanks," you reply dismissively as you stuff the money into your purse.');
    qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
    qspCall(s, 'sex_ev_after', 'relax_together');
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterProstitutionPaymentThank(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    scene.text('"Thank you daddy," you smile back and put the money away into your purse.');
    qspCall(s, 'sex_ev_after', 'relax_together');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'topic_exit':
      enterTopicExit(s, scene);
      break;
    case 'boy_accidental_creampie':
      enterBoyAccidentalCreampie(s, scene);
      break;
    case 'creampie_okay_question':
      enterCreampieOkayQuestion(s, scene);
      break;
    case 'creampie_okay_menu':
      enterCreampieOkayMenu(s, scene);
      break;
    case 'creampie_okay_bc':
      enterCreampieOkayBc(s, scene);
      break;
    case 'creampie_okay_safeish':
      enterCreampieOkaySafeish(s, scene);
      break;
    case 'creampie_okay_danger':
      enterCreampieOkayDanger(s, scene);
      break;
    case 'creampie_okay_unsure':
      enterCreampieOkayUnsure(s, scene);
      break;
    case 'get_plan_b_question':
      enterGetPlanBQuestion(s, scene);
      break;
    case 'get_plan_b_answer':
      enterGetPlanBAnswer(s, scene);
      break;
    case 'no_pill_orthodox':
      enterNoPillOrthodox(s, scene);
      break;
    case 'childfree_accidental_creampie1':
      enterChildfreeAccidentalCreampie1(s, scene);
      break;
    case 'start_bc_talk1':
      enterStartBcTalk1(s, scene);
      break;
    case 'morning_after_money':
      enterMorningAfterMoney(s, scene);
      break;
    case 'pc_have_morning_after':
      enterPcHaveMorningAfter(s, scene);
      break;
    case 'free_creampies':
      enterFreeCreampies(s, scene);
      break;
    case 'free_creampies2':
      enterFreeCreampies2(s, scene);
      break;
    case 'creampie_permission_code':
      enterCreampiePermissionCode(s, scene);
      break;
    case 'creampie_permission1':
      enterCreampiePermission1(s, scene);
      break;
    case 'creampie_permission2':
      enterCreampiePermission2(s, scene);
      break;
    case 'creampie_permission3':
      enterCreampiePermission3(s, scene);
      break;
    case 'forgot_bc_talk':
      enterForgotBcTalk(s, scene);
      break;
    case 'forgot_bc_exit':
      enterForgotBcExit(s, scene);
      break;
    case 'bareback_think':
      enterBarebackThink(s, scene);
      break;
    case 'bareback_too_risky':
      enterBarebackTooRisky(s, scene);
      break;
    case 'bareback_agree':
      enterBarebackAgree(s, scene);
      break;
    case 'bareback_think_pill':
      enterBarebackThinkPill(s, scene);
      break;
    case 'bareback_pill_expense':
      enterBarebackPillExpense(s, scene);
      break;
    case 'ma_pill_deal_accept':
      enterMaPillDealAccept(s, scene);
      break;
    case 'boy_pays_for_ma_pills':
      enterBoyPaysForMaPills(s, scene);
      break;
    case 'ma_pill_money':
      enterMaPillMoney(s, scene);
      break;
    case 'bareback_bc_suggest':
      enterBarebackBcSuggest(s, scene);
      break;
    case 'borrow_money':
      enterBorrowMoney(s, scene);
      break;
    case 'borrow_planb':
      enterBorrowPlanb(s, scene);
      break;
    case 'borrow_planb2':
      enterBorrowPlanb2(s, scene);
      break;
    case 'borrow_money_exit':
      enterBorrowMoneyExit(s, scene);
      break;
    case 'cheating_rules':
      enterCheatingRules(s, scene);
      break;
    case 'cheating_end':
      enterCheatingEnd(s, scene);
      break;
    case 'boy_date_ask':
      enterBoyDateAsk(s, scene);
      break;
    case 'rape_explain':
      enterRapeExplain(s, scene);
      break;
    case 'rape_explain2':
      enterRapeExplain2(s, scene);
      break;
    case 'prostitution_payment':
      enterProstitutionPayment(s, scene);
      break;
    case 'prostitution_payment_thank':
      enterProstitutionPaymentThank(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_talk: LocationDef = {
  name: 'sex_ev_talk',
  title: '"Here," he says, offering the cash to you. "Get a morning af',
  region: 'other',
  enter: enter,
};
