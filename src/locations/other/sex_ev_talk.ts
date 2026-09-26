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
  scene.build();
}

function enterBoyAccidentalCreampie(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['accidental_creampie_convo'] = 1;
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  } else {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe') {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text(`"You said it's a safe day for you, right?" ${((s as any).npcdesc ?? '')} asks.`);
        scene.text('"Mhm," you nod.');
        scene.text('"Good," he sighs with relief.');
      } else {
        scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc ?? '')} smiles.`);
        scene.text('"Mhm," you nod back.');
      }
      qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
    } else {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text(`"You said it's probably safe for you today, right?" ${((s as any).npcdesc ?? '')} asks.`);
          scene.text('"Mhm," you nod. He hesitates, seeming concerned.');
          scene.text('"Maybe you should get a morning after pill just in case."');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoPillOrthodox(s, scene); (s as any).locArgs = __savedLocArgs; }
          if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
            scene.actions([
              { label: 'You already have one', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"Don\'t worry," you tell him. "I\'ve already got one. It\'s in my bag."');
    scene.text('He seems relieved.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Take it now', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"In fact..." you say, reaching down for your purse.');
    qspCall(st, 'sex_ev_after', 'plan_b3');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'You\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you insist. "I\'m not worried. Why should you be?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            { label: 'Probably should', handler: (st: GameState) => {
    scene.text('"Yeah," you say with a shy smile. "I probably should, shouldn\'t I?"');
    scene.text('He seems relieved.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
            { label: 'Definitely will', handler: (st: GameState) => {
    scene.text('"I will," you tell him. "Just to be safe."');
    scene.text('He seems relieved.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          ]);
        } else {
          scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc ?? '')} smiles.`);
          scene.text('"Mhm," you nod back.');
        }
        qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
      } else {
        qspGoto(s, 'sex_ev_talk', 'get_plan_b_question');
      }
    }
  }
  scene.build();
}

function enterCreampieOkayQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.text(`"Speaking of which..." ${((s as any).npcdesc ?? '')} says, looking intently at the cum slowly draining from your pussy. "Are you gonna be okay...?"`);
  } else {
    scene.text(`"Speaking of which..." ${((s as any).npcdesc ?? '')} asks, looking intently at your pussy, clearly thinking about when he came inside you earlier. "Are you gonna be okay...?"`);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayMenu(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  scene.build();
}

function enterCreampieOkayBc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk', 'on_birth_control');
    scene.actions([
      { label: 'On birth control', handler: (st: GameState) => {
    scene.text(`"I'll be fine," you smile reassuringly. ${((st as any).npcdesc ?? '')} nods, relaxing a bit.`);
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('<i>Besides, I\'m on birth control,</i> you think to yourself. <i>But he doesn\'t need to know that.</i>');
    } else {
      scene.text('<i>I mean, what are the odds that something bad happens?</i>');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.build();
}

function enterCreampieOkaySafeish(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'You\'ll be fine', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    if (((st as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"It\'s a safe day," you nod. "I should be okay. This time anyways," you smile teasingly.');
    } else {
      scene.text('"It\'s a safe day. I should be okay," you smile reassuringly.');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayUnsure(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'I think so', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    if (((st as any).mesec ?? 0) > 0) {
      scene.text('"I think so," you say. "I\'m pretty sure I can\'t get pregnant on my period..."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
        scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
      } else {
        scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
      }
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  }
  scene.build();
}

function enterCreampieOkayDanger(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCreampieOkayUnsure(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Probably not', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'danger';
    if (((st as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms'  &&  ((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] !== 'hookup') {
      scene.text('"Probably not..." you say, grimacing. "Which is why it\'s so important we don\'t run out of condoms in the future...');
    } else {
      scene.text('"Probably not..." you say, grimacing. "I\'m pretty sure I\'m in my fertile window..."');
    }
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.text('"So are you going to get a morning after pill?"');
    }
  } },
    { label: 'Need plan B', handler: (st: GameState) => {
    scene.text('"Not really," you grimace. "I\'m definitely going to need some plan B tomorrow."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterCreampieOkayUnsure(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I\'m not sure', handler: (st: GameState) => {
    scene.text('"I\'m... not sure..." you say hesitantly.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
    { label: 'Roll the dice?', handler: (st: GameState) => {
    scene.text('"I\'m not sure... Maybe we can just roll the dice?" you say with a hesitant smile.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
    { label: 'Need plan B (safety)', handler: (st: GameState) => {
    scene.text('"I\'ll get some plan B tomorrow just to be safe," you say.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterGetPlanBQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.text('"You\'re gonna ' + ((((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) ? ('take that') : ('get a')) + ` morning after pill right?" ${((s as any).npcdesc ?? '')} says, looking intently at the cum slowly draining from your pussy. `);
  } else {
    scene.text('"You\'re gonna ' + ((((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) ? ('take that') : ('get a')) + ` morning after pill right?" ${((s as any).npcdesc ?? '')} asks, looking intently at your pussy, clearly thinking about when he came inside you earlier.`);
  }
  qspGoto(s, 'sex_ev_talk', 'get_plan_b_answer');
  scene.build();
}

function enterGetPlanBAnswer(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.text('You hesitate.');
    scene.text('"Uhm..."');
    if (((st as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      scene.text('"Even though you\'re fertile you\'re not gonna get one?"');
    } else {
      scene.text('"This is really something you have to think about?"');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNoPillOrthodox(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Too expensive', handler: (st: GameState) => {
    scene.text('"They\'re pretty expensive," you sigh. "I don\'t like spending that much money."');
    scene.text('"A kid is going to be more expensive than that," he points out.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Hormones bad', handler: (st: GameState) => {
    scene.text('"I don\'t like using hormonal products," you say. "I don\'t think it\'s safe to mess with my body like that."');
    scene.text('"But it might be better than having a kid," he points out.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    { label: 'You will', handler: (st: GameState) => {
    scene.text('"I will," you nod.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
    if (((st as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'Actually, you have one now...', goto: ['sex_ev_after', 'plan_b_take'] },
      ]);
    }
  } },
    { label: 'Tomorrow', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
      scene.text('"I\'ll take it tomorrow," you say. "It is called the morning <i>after</i> pill, isn\'t it?"');
    } else {
      scene.text('"I\'ll get one tomorrow," you say.');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: '"I should, shouldn\'t I?"', handler: (st: GameState) => {
    scene.text('"I probably should, shouldn\'t I?" you reply with an embarrassed smile. ' + ((((st as any).stat ?? 0)?.['think_virgin'] === 0) ? ('"The thought didn\'t really occur to me."') : ('"I\'m kind of new to this whole \'worrying about pregnancy\' thing. First time and all..."')));
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: '"If I remember"', handler: (st: GameState) => {
    scene.text('"Hopefully I remember to," you reply with an embarrassed smile. ' + ((((st as any).stat ?? 0)?.['think_virgin'] === 0) ? ('"I\'m bad at remembering important things I need to do."') : ('"I\'m kind of new to this whole \'worrying about pregnancy\' thing. First time and all..."')));
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterNoPillOrthodox(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You can\'t - You\'re Orthodox', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    if (((st as any).npc_know_catholic ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I\'m Orthodox, remember?" you say, shaking your head. "No birth control of any kind."');
    } else {
      scene.text('"I\'m Orthodox," you say, shaking your head. "No birth control of any kind."');
    }
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`"I don't care if you're Saint Mary herself," ${((st as any).npcdesc ?? '')} frowns. "Get the pill. I'm about to pay child support."`);
        scene.actions([
          { label: 'Stay silent', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 'eyeroll');
    scene.text(`You let out a long frustrated breath but don't want to get into a fight, staying silent and neither arguing nor acquiescing to ${((st as any).npcdesc ?? '')}'s demand.`);
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'No way!', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 'annoyed');
    scene.text('"No way! I\'ll go to hell if I use birth control!"');
    scene.text('"Stop being stupid. Just take the fucking pill."');
    qspCall(st, 'sex_ev_after', 'quit');
    scene.actions([
      { label: 'Get in a fight (argue)', goto: ['sex_ev_events', 'long_argument'] },
    ]);
  } },
        ]);
      } else {
        scene.text(`"I don't know if I like that..." ${((st as any).npcdesc ?? '')} frowns.`);
        scene.actions([
          { label: '"Deal with it"', handler: (st: GameState) => {
    scene.text('"Deal with it," you shrug. "My body, my religion, my choice."');
    scene.text('"So what are you going to do if you get pregnant?"');
    scene.actions([
      { label: 'No answer', handler: (st: GameState) => {
    scene.text('That question leaves you without anything to say and the room descends into an awkward silence...');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
        ]);
      }
    } else {
      if ((((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual')  &&  ((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] !== 'husband') {
        scene.text(`"Wait so, you're Orthodox so you can't take the morning after pill, but sex before marriage is still okay?" ${((st as any).npcdesc ?? '')} asks bemusedly.`);
        if (((st as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
          scene.actions([
            { label: 'You\'re not fertile anyways', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Premarital sex isn\'t as bad as birth control," you say. "But it shouldn\'t matter anyways. I\'m not fertile right now so it should be fine."');
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.text('<i><b>Should</b> be...</i> you think silently to yourself...');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          ]);
        }
        scene.actions([
          { label: 'Uhhhh...', handler: (st: GameState) => {
    scene.text('"Uhhhh..."');
    scene.text(`That question stops you in your tracks and a shit eating grin makes its way across ${((st as any).npcdesc ?? '')}'s face.`);
    scene.text('"Oh shut up," you huff as he chuckles to himself.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'Get irritated', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 'annoyed');
    scene.text('"Are you saying you want me to stop having sex with you?" you snap irately.');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text(`"I'm just saying it's hypocritical!" ${((st as any).npcdesc ?? '')} protests.`);
      scene.actions([
        { label: 'Let it go', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Ugh, whatever," you huff, deciding the argument isn\'t worth it.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Don\'t let it go', handler: (st: GameState) => {
    qspGoto(st, 'sex_ev_events', 'long_argument');
  } },
      ]);
    } else {
      scene.text(`${((st as any).npcdesc ?? '')} holds up his hands in surrender, though an irritating smirk is still playing on his face..`);
      scene.text('"No, no, not at all. Forget I said anything.');
      scene.text('"<i>Hrmph.</i>"');
      scene.text('You cross your arms in annoyance.');
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
          { label: 'Trying to limit your sins', handler: (st: GameState) => {
    scene.text('"No, that\'s still a sin too," you say with a wry twist of your lips. "But just because I did one bad thing doesn\'t mean I should do more. I\'m trying not to show up to confession with a laundry list."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'It\'s a bigger sin', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Premarital sex isn\'t as bad as birth control," you say. "That\'s practically <i>murder</i>."');
    scene.text('"You really think the morning after pill counts as murder?"');
    scene.text('"Of course! It\'s like killing the babiest of babies. Literally an egg before it hatches."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        scene.text('"Seriously? Sex protection is a sin?"');
        scene.text('"Yes! It is! And I already have enough to confess without adding that on top!"');
        qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
      }
    }
    qspCall(st, 'sex_ev_stats', 'birth_control_know', 'catholic');
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
    if (((st as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"It\'s a safe day," you nod. "I should be okay. This time anyways," you smile teasingly.');
    } else {
      scene.text('"It\'s a safe day, so I should be okay," you smile.');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'I should be okay', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
    } else {
      scene.text('"It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Roll the dice?', handler: (st: GameState) => {
    scene.text('"I\'m not sure... Maybe we can just roll the dice?" you say with a hesitant smile.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
          { label: 'Need plan B', handler: (st: GameState) => {
    scene.text('"I\'ll get some plan B tomorrow," you say.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
          { label: 'Need plan B (safety)', handler: (st: GameState) => {
    scene.text('"I should be okay but I\'ll get some plan B tomorrow just to be safe," you say.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMorningAfterMoney(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
        ]);
      }
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcHaveMorningAfter(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  scene.build();
}

function enterStartBcTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup') {
    scene.actions([
      { label: 'What if you start birth control?', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Well..." you start. "What if I started birth control?"');
    scene.text(`You glance up at ${((st as any).npcdesc ?? '')} as you ask the question, gauging his reaction.`);
    scene.text('"Could we go without condoms then?"');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] === 2) {
      scene.text('"I wouldn\'t complain if you started birth control but I think we should keep using condoms," he replies. "All it would take is one forgetful day or bad luck. Better to double up on protection."');
      scene.actions([
        { label: 'Sigh', handler: (st: GameState) => {
    scene.text('<i>Ugh, what\'s it going to take for this guy to go bareback?</i> you think to yourself, sighing deeply.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      scene.text('You\'d really do that just to stop using condoms?" he asks.');
      scene.actions([
        { label: 'Condoms suck', handler: (st: GameState) => {
    ((st as any).npc_bc_promise = (st as any).npc_bc_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text('"Yeah," you grin back. "They suck."');
    scene.text('"Well then... Let me know when you\'re safe..."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Should be on it anyways', handler: (st: GameState) => {
    ((st as any).npc_bc_promise = (st as any).npc_bc_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text('"I should probably be on it if we\'re regularly having sex anyways," you say ruefully and flash him a smile. "But bareback would be a nice bonus..."');
    scene.text('"Well then... Let me know when you\'re safe..."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Been meaning to start', handler: (st: GameState) => {
    ((st as any).npc_bc_promise = (st as any).npc_bc_promise ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text('"I\'ve been wanting to start birth control for a while now anyways," you shrug. "Maybe this will give me the motivation to finally do it.');
    scene.text('"Well then... Let me know when you\'re safe..."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterMorningAfterMoney(s: GameState, scene: SceneBuilder): void {
  scene.text(`${((s as any).npcdesc ?? '')} looks at you for a moment before reaching down into his discarded trousers to grab his wallet, pulling ${qspFunc(s, 'money', 'string_profit', 800)} out.`);
  scene.text('"Here," he says, offering the cash to you. "Get a morning after pill later.');
  scene.actions([
    { label: 'No, you don\'t have to', handler: (st: GameState) => {
    scene.text('"No," you shake your head. "I can\'t ask you to do that."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Take it," he says insistently. "I don\'t want any kids running around. You can thank me by making sure you take that pill later."');
    } else {
      scene.text('"Don\'t worry about it," he says, smiling gently. "I think it would suck for both of us if you got pregnant right now."');
    }
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"No, I don\'t want your money," you say, shaking your head and pushing the money away.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text(`${((st as any).npcdesc ?? '')} stares at you for a moment, looking almost angry.`);
      scene.text('"Just don\'t fucking get pregnant, okay?" he says, tossing the cash onto his bedside table.');
    } else {
      scene.text(`"If you're sure..." ${((st as any).npcdesc ?? '')} says hesitantly, withdrawing his hand.`);
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Take it', handler: (st: GameState) => {
    ((st as any).take_morning_after = (st as any).take_morning_after ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('You take the money from him, warmed by the gesture.');
    scene.text('"Thanks," you say, giving him the most grateful smile you can.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text(`"Seriously," ${((st as any).npcdesc ?? '')} says returning your smile with a stern look. "Take that pill."`);
    } else {
      scene.text('He just nods back in return.');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
    { label: 'Take the money', handler: (st: GameState) => {
    ((st as any).take_morning_after = (st as any).take_morning_after ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('You take the money from him, warmed by the gesture.');
    scene.text('"Thanks," you say, giving him the most grateful smile you can.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Don\'t thank me," he says, shaking his head. "I just don\'t want any bastard kids running around. You can thank me by making sure you take that pill tomorrow."');
    } else {
      scene.text('"Don\'t worry about it," he says, grinning. "I think it would suck for both of us if you got pregnant right now."');
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'I have enough money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 740) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      ((st as any).take_morning_after = (st as any).take_morning_after ?? {})[String((st as any).npcID ?? 0)] = ((st as any).daystart ?? 0);
      scene.text('"No," you shake your head. "You don\'t have to do that. I have enough money to buy a pill myself."');
      if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"Just make sure you do," he replies. "I don\'t want any kids running around."');
      } else {
        scene.text(`"If you're sure..." ${((st as any).npcdesc ?? '')} says hesitantly, withdrawing his hand.`);
      }
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterPcHaveMorningAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'You have one', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"It\'s okay," you smile reassuringly. "I have a morning after pill. It\'s no big deal."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Take it now', handler: (st: GameState) => {
    scene.text('"In fact..." you say, reaching down for your purse.');
    qspCall(st, 'sex_ev_after', 'plan_b2');
  } },
    ]);
  } },
    ]);
  }
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
    scene.actions([
      { label: 'You don\'t need to ask', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'temp_pic') || ''));
    scene.text('"You don\'t need to ask to come inside me y\'know," you murmur.');
    if (((st as any).pc_cum_pref_know ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
      scene.actions([
        { label: 'I know how much you like it', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'temp_pic') || ''));
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I know how much you like it. Plus I\'m on birth control. So you don\'t need to ask permission."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I know how much you like it."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFreeCreampies2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.actions([
        { label: 'I\'m on birth control', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'temp_pic') || ''));
    if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "You know I\'m on birth control. So if you want to come inside me, you should go right ahead."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I\'m on birth control. So if you want to come inside me, you should go right ahead."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFreeCreampies2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not <i>every</i> time', handler: (st: GameState) => {
    ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'when_safe';
    scene.text(String(qspFunc(s, 'sex_ev', 'temp_pic') || ''));
    scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "Not <i>every</i> time. I\'ll let you know when it\'s a safe day," you smile gently. "And then you can come inside me as much as you want."');
    scene.text(`"Okay." ${((st as any).npcdesc ?? '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t mind', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'temp_pic') || ''));
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I don\'t mind. Plus I\'m on birth control, so it\'s not like it really matters."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I don\'t mind."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFreeCreampies2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I love creampies', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'temp_pic') || ''));
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I love it when you come inside. It feels really good. Plus I\'m on birth control. So you don\'t need to ask permission."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I love it when you come inside. It feels really good. So you don\'t need to ask permission."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFreeCreampies2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFreeCreampies2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    ((s as any).npc_free_creampies = (s as any).npc_free_creampies ?? {})[String((s as any).npcID ?? 0)] = 'at_will';
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text(`${((s as any).npcdesc ?? '')} gives you a predatory grin, so full of desire that it makes you involuntarily swallow.`);
      scene.text('"Good to know..."');
    } else {
      scene.text('"Good to know," he smirks amusedly.');
    }
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      ((s as any).npc_free_creampies = (s as any).npc_free_creampies ?? {})[String((s as any).npcID ?? 0)] = 'at_will';
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        scene.text(`${((s as any).npcdesc ?? '')} gives you a look like he might just burst inside you again before giving you a delighted grin.`);
        scene.text('"I\'m gonna pump you full of so much cum, you\'re going to still be dripping next week," he says excitedly and you can\'t help but giggle at his boyish glee.');
      } else {
        scene.text('"Good to know," he smirks amusedly.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterTopicExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
        scene.text(`"Are you sure...?" ${((s as any).npcdesc ?? '')} asks hesitantly. "You're not worried you're going to get pregnant? I'm... I'm not really up for having kids..."`);
      } else {
        scene.text(`"Is that really okay?" ${((s as any).npcdesc ?? '')} asks, wide-eyed.`);
      }
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
        scene.actions([
          { label: 'I\'m on birth control', handler: (st: GameState) => {
    ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'at_will';
    if (((st as any).npc_know_not_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      ((st as any).npc_know_not_bc = (st as any).npc_know_not_bc ?? {})[String((st as any).npcID ?? 0)] = 0;
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you smile gently. "And it should be effective now. So you can come inside me as much as you want."');
    } else {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you smile gently. "So you can come inside me as much as you want."');
    }
    scene.text(`"Okay." ${((st as any).npcdesc ?? '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        if (((s as any).pillcon2 ?? 0) >= 20000) {
          scene.actions([
            { label: 'I\'m on birth control', handler: (st: GameState) => {
    ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'at_will';
    if (((st as any).npc_know_not_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
      scene.text('"I started birth control," you smile gently. "And it should be effective any day now. So you can come inside me as much as you want."');
    } else {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you smile gently. "So you can come inside me as much as you want."');
    }
    scene.text(`"Okay." ${((st as any).npcdesc ?? '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.actions([
            { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'at_will';
    if (((st as any).npc_know_not_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you lie with a seductively gentle smile. "And it should be effective now. So you can come inside me as much as you want."');
    } else {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you lie with a seductively gentle smile. "So you can come inside me as much as you want."');
    }
    scene.text(`"Okay." ${((st as any).npcdesc ?? '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'I\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you insist, smiling gently. "What could go wrong?"');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 4) + 1) === 1) {
      ((st as any).npc_free_creampies_count = (st as any).npc_free_creampies_count ?? {})[String((st as any).npcID ?? 0)] = (-1);
      scene.text(`"I'm not comfortable with it," ${((st as any).npcdesc ?? '')} says, shaking his head. "Maybe if you started birth control..."`);
    } else {
      ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'at_will';
      scene.text(`"Okay..." ${((st as any).npcdesc ?? '')} says hesitantly, but smiles back at you anyways.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'It feels good', handler: (st: GameState) => {
    scene.text('"It feels so good," you coo gently. "I <i>want</i> you to come inside me. I want you to fill me with your cum..."');
    if ((((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie'  &&  ((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * (100 - ((st as any).npc_willpwr ?? 0)?.[String((st as any).npcID ?? 0)] + 1)) + (((st as any).npc_willpwr ?? 0)?.[String((st as any).npcID ?? 0)])) <= ((st as any).pcs_persuas ?? 0))  ||  (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie'  &&  ((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] !== 1)) {
      ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'at_will';
      scene.text(`Desire wars with willpower within ${((st as any).npcdesc ?? '')}. You watch as he struggles back and forth until he leers at you with a hungry stare and you know which one won out.`);
      scene.text(`"Okay." ${((st as any).npcdesc ?? '')} says. "I won't ask anymore."`);
    } else {
      if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        ((st as any).npc_free_creampies_count = (st as any).npc_free_creampies_count ?? {})[String((st as any).npcID ?? 0)] = (-1);
        scene.text(`${((st as any).npcdesc ?? '')} hesitates for a moment before shaking his head.`);
        scene.text('"I\'m not comfortable with it," he says. "Maybe if you started birth control..."');
      } else {
        ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'at_will';
        scene.text(`${((st as any).npcdesc ?? '')} hesitates for a moment before nodding slowly.`);
        scene.text('"Okay," he says, smiling. "I won\'t ask anymore."');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I\'ll tell you when it\'s safe', handler: (st: GameState) => {
    ((st as any).npc_free_creampies = (st as any).npc_free_creampies ?? {})[String((st as any).npcID ?? 0)] = 'when_safe';
    scene.text('"I\'ll let you know when it\'s a safe day," you smile gently. "And then you can come inside me as much as you want."');
    scene.text(`"Okay." ${((st as any).npcdesc ?? '')} smiles back, beaming at you.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  scene.build();
}

function enterCreampiePermissionCode(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_creampie_permission = (s as any).npc_creampie_permission ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['creampie_allowance'] = 1;
  scene.build();
}

function enterCreampiePermission1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === ''  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_allowance'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  (((s as any).sex_ev ?? 0)?.['pullout_thank'] + ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] + ((s as any).sex_ev ?? 0)?.['not_inside'] === 0)) {
    scene.actions([
      { label: '"You don\'t have to pull out" (free creampies)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 0) {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/4.jpg');
        } else {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            scene.img('images/shared/sex/cum/pullout_doggy1.mp4');
          } else {
            scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
          }
        }
      } else {
        scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
      }
    } else {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    }
    scene.text(`"You don't have to pull out, you know that right?" you tell ${((st as any).npcdesc ?? '')}.`);
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] < 1) {
      scene.text('"So you\'re saying I can come inside you whenever I want?"');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission2(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_know_not_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"But you\'re not on birth control," he says.');
        if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.actions([
            { label: 'I am now', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    scene.text('"That was then," you reply. "This is now. And now I\'m on ' + ((((st as any).tabletkishot ?? 0) > 0) ? ('the shot."') : ('the pill."')));
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission3(st, scene); (st as any).locArgs = __savedLocArgs; }
          scene.actions([
            { label: 'So what?', handler: (st: GameState) => {
    scene.text('"So what?" you shrug carelessly, grinning. "I don\'t see why that should stop you."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Because I don\'t want kids?" he replies flatly. "Don\'t be stupid."');
      scene.text('"Ugh, you\'re so uptight," you grumble.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_risktaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
        scene.text(`"Well, if you want to roll the dice..." ${((st as any).npcdesc ?? '')} grins back.`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text(`"I don't know..." ${((st as any).npcdesc ?? '')} says, hesitating. "I don't think it's a good idea...`);
        scene.text('"Ugh, boo. You\'re no fun."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
            { label: 'I am now (lie)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    scene.text('"That was then," you reply. "This is now. And now I\'m on ' + ((((st as any).tabletkishot ?? 0) > 0) ? ('the shot."') : ('the pill."')));
    scene.text('The lie comes easily.');
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      } else {
        if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
          ((st as any).pc_know_childfree = (st as any).pc_know_childfree ?? {})[String((st as any).npcID ?? 0)] = 1;
          scene.text('"I don\'t want you getting pregnant," he replies. "Not just for you, but for me too. I don\'t want any kids of mine running around out there."');
          if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.actions([
              { label: 'On birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    scene.text('"Don\'t worry," you insist. "I\'m on ' + ((((st as any).tabletkishot ?? 0) > 0) ? ('the shot. ') : ('the pill. ')) + 'I won\'t get pregnant."');
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            ]);
          } else {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission3(st, scene); (st as any).locArgs = __savedLocArgs; }
            scene.actions([
              { label: '"I\'m on birth control" (lie)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    scene.text('"Don\'t worry," you insist. "I\'m on ' + ((((st as any).tabletkishot ?? 0) > 0) ? ('the shot. ') : ('the pill. ')) + 'I won\'t get pregnant."');
    scene.text('The lie comes easily.');
    scene.text('"So you\'re saying I can come inside you whenever I want?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            ]);
          }
        } else {
          scene.text('"Wait, really?" he asks, surprised. "I can... come inside you?"');
          if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
            scene.text(`${((st as any).npcdesc ?? '')} is visibly excited by the prospect.`);
          }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCreampiePermission2(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterCreampiePermission2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'On safe days', handler: (st: GameState) => {
    ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"On safe days anyways," you smile. "I\'ll let you know when."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'On birth control', handler: (st: GameState) => {
    ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('iif(npc_know_bc[$npcID] = 0, \'"I\'m on birth control," you shrug. "Why should it matter?"\', \'"You know I\'m on birth control anyways," you shrug. "So what\'s the difference?"\')');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: '"I don\'t mind"', handler: (st: GameState) => {
    ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"I don\'t mind," you smile. "Whatever you want to do, go for it."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Fill me up"', handler: (st: GameState) => {
    ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"<i>Fill me up,</i>" you whisper in reply.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '"Just ask first"', handler: (st: GameState) => {
    ((st as any).npc_ask_creampie = (st as any).npc_ask_creampie ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Just ask before you do," you smile back teasingly. "Some warning would be appreciated."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Less mess', handler: (st: GameState) => {
    ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"It\'s less mess," you grin. "Makes for an easy clean up."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCreampiePermission3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'It\'s safe right now', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'safe';
    scene.text('"But it\'s safe right now," you reassure him. "I won\'t get pregnant if you come inside me now."');
    scene.text('"So you\'ll tell me when it\'s safe for me to come inside you?"');
    scene.text('"Yup."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 100) + 1) > ((st as any).npc_rel ?? 0)?.[String((st as any).npcID ?? 0)]) {
      scene.text(`${((st as any).npcdesc ?? '')} hesitates for a moment and then shakes his head.`);
      scene.text('"No way. I don\'t want to take the risk."');
      scene.text('"Ugh, boo. You\'re no fun."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
      scene.text(`"Well if it's safe..." ${((st as any).npcdesc ?? '')} smiles.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
    scene.actions([
      { label: 'It\'s safe right now', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    scene.text('"But it\'s safe right now," you reassure him. "Well, it should be anyways. I won\'t get pregnant if you come inside me now."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text(`"<i>Should</i> be?" ${((st as any).npcdesc ?? '')} asks pointedly.`);
      scene.text('"Yeah," you insist. "It\'s not a fertile part of my cycle.');
    } else {
      scene.text('"So you\'ll tell me when it\'s safe for me to come inside you?"');
      scene.text('"Yup."');
    }
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 100) + 1) > ((st as any).npc_rel ?? 0)?.[String((st as any).npcID ?? 0)]) {
      scene.text(`${((st as any).npcdesc ?? '')} hesitates for a moment and then shakes his head.`);
      scene.text('"No way. I don\'t want to take the risk."');
      scene.text('"Ugh, boo. You\'re no fun."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
      scene.text(`"Well if it's safe..." ${((st as any).npcdesc ?? '')} smiles.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'It\'ll feel good', handler: (st: GameState) => {
    scene.text('"But it\'ll feel good," you grin at him.');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      scene.text(`"That doesn't matter," ${((st as any).npcdesc ?? '')} scowls. "I don't want kids."`);
      scene.text('"Ugh, boo. You\'re no fun."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'creampie') {
        ((st as any).npc_creampie_permission = (st as any).npc_creampie_permission ?? {})[String((st as any).npcID ?? 0)] = 2;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
        scene.text(`"You make a good point," ${((st as any).npcdesc ?? '')} grins back.`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        scene.text(`"I don't know..." ${((st as any).npcdesc ?? '')} says, hesitating. "I don't think it's a good idea...`);
        scene.text('"Ugh, boo. You\'re no fun."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTopicExit(st, scene); (st as any).locArgs = __savedLocArgs; }
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
    scene.text(`"What the fuck?!" ${((s as any).npcdesc ?? '')} exclaims. "Are you fucking kidding me? How could you forget? You better not get pregnant on me. I am <i>not</i> having your fucking kids."`);
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      scene.actions([
        { label: 'Morning after pill (sorry)', handler: (st: GameState) => {
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    scene.text('"I know, I know!" you moan miserably, berating yourself as much as he\'s berating you. "I\'m sorry, I\'m so sorry. I know I fucked up. But I have this at least."');
    scene.text('You fish a plan B pill out of your bag and hold it up for him to see.');
    scene.text('"This ought to buy us some protection," you say, putting it in your mouth and crunching it down dry.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Morning after pill (fuck off)', handler: (st: GameState) => {
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['angry_after'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    scene.text('"<i>\'Your\'</i> kids?" you say, glaring at him. "You know what? You can fuck off! I made a mistake and I admitted it. And you I have the fucking solution," you say, defiantly holding up your morning after pill.');
    scene.text('"So you can fuck off!" you say again, throwing the pill in your mouth and crunching it down dry. "This is what I get for wanting to be accountable and transparent," you grumble, grinding your teeth on the bitter medicine.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      ]);
    }
    scene.actions([
      { label: 'Wallow', handler: (st: GameState) => {
    scene.text('"I know, I know!" you moan miserably, berating yourself as much as he\'s berating you. "I\'m a fucking idiot. I\'m sorry, I\'m so sorry."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Tell him to fuck off', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['angry_after'] = 1;
    scene.text('"<i>\'Your\'</i> kids?" you say, glaring at him. "If I get pregnant, you\'re not the one who\'s gonna have to push your ugly baby out her pussy! Don\'t try to make this about you. You can fuck off!"');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
      scene.text(`"So what? I didn't come inside you last night," ${((s as any).npcdesc ?? '')} says, looking confused.`);
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
        scene.text('"Yeah but it may mean we need to start using condoms again for a while," you sigh.');
      } else {
        scene.text('"Yeah but I\'m supposed to take it every day," you sigh.');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterForgotBcExit(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.text(`"Shit," ${((s as any).npcdesc ?? '')} says, looking concerned. "What are you gonna do?"`);
      if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
        scene.actions([
          { label: 'Take your morning after pill', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    scene.text('"I have this," you say, fishing around in your bag to pull out your morning after pill.');
    scene.text('"This ought to buy us some protection," you say, putting it in your mouth.');
    scene.text('"Does that work if you were already on the pill? You only forgot one day."');
    scene.text('"Can\'t hurt," you mumble around the pill as you crunch it down.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterForgotBcExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Buy some plan B?', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['plan_b_buy'] = 1;
    scene.text('"Buy a morning after pill?" you say, shrugging. "I don\'t know. Does it still work when you\'re already sort of on birth control?"');
    scene.text(`${((st as any).npcdesc ?? '')} shrugs back. Great help.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterForgotBcExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'I don\'t know', handler: (st: GameState) => {
    scene.text('"I don\'t know," you say, looking back at him apologetically. "Hope we get lucky I guess?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterForgotBcExit(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  scene.build();
}

function enterForgotBcExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temp_loc ?? 0) === 'sex_ev_morning') {
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } else {
    qspCall(s, 'sex_ev_pillow_talk2', 'morning_sex_talk');
  }
  scene.build();
}

function enterBarebackThink(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"Hmmm..."');
    scene.text('<i>He\'s got a point,</i> you muse to yourself. <i>Nothing bad happened this time. What <b>if</b> we just stopped using condoms...?</i>');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bareback_thinking'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBarebackTooRisky(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBarebackAgree(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBarebackTooRisky(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Way too risky', handler: (st: GameState) => {
    scene.text('"No way!" you exclaim' + ((((st as any).sex_ev ?? 0)?.['bareback_thinking'] === 1) ? (', dismissing the thought with a shake of your head. ') : ('. ')) + '"That\'s way too risky! Just because nothing went wrong this time doesn\'t mean something can\'t go wrong in the future! We skipped it this time, but it\'s not becoming a regular thing."');
    if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      if (((st as any).npc_bareback_risk ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text(`"You said that last time too," ${((st as any).npcdesc ?? '')} snickers.`);
      } else {
        if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text(`"I don't see why," ${((st as any).npcdesc ?? '')} grumbles. "We both hate using them. We're only making things worse for ourselves."`);
        } else {
          if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            scene.text(`"Maybe that was asking a bit too much," ${((st as any).npcdesc ?? '')} replies sheepishly.`);
          } else {
            scene.text(`${((st as any).npcdesc ?? '')} sighs deeply.`);
            scene.text('"Guess that was too much to hope for..."');
          }
        }
      }
    } else {
      if (((st as any).npc_bareback_risk ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text(`"But didn't you say that the last time after we went bareback?" ${((st as any).npcdesc ?? '')} says with a puzzled look.`);
      } else {
        if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          scene.text(`"Yeah, better safe than sorry I guess," ${((st as any).npcdesc ?? '')} nods. "Using condoms sucks a lot less than you getting pregnant."`);
        } else {
          scene.text(`"Yeah, better safe than sorry," ${((st as any).npcdesc ?? '')} nods. "Sorry. Don't know what I was thinking asking that."`);
        }
      }
    }
    ((st as any).npc_bareback_risk = (st as any).npc_bareback_risk ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterBarebackAgree(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
    scene.actions([
      { label: 'Bareback on safe days', handler: (st: GameState) => {
    ((st as any).npc_bareback = (st as any).npc_bareback ?? {})[String((st as any).npcID ?? 0)] = 'when_safe';
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"I think it would be too risky to go bareback all the time," you say slowly. "But if it\'s at the right time, maybe it will be okay?"');
    scene.text(`"What are you saying?" ${((st as any).npcdesc ?? '')} asks. He seems to be trying not to get his hopes up before you say it out loud.`);
    scene.text('"As long as I\'m not in danger of getting pregnant, then it should be okay to skip the condom. So if I time it with my cycle, it should be fine. Right?"');
    if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Well... I\'d prefer if we skipped the condoms altogether," he says wistfully. "But that\'s better than nothing."');
    } else {
      scene.text('"That sounds really good," he smiles eagerly.');
    }
    scene.text('"Okay," you smile back. "I\'ll let you know the next time it\'s safe."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.actions([
    { label: 'Start going bareback', handler: (st: GameState) => {
    ((st as any).npc_bareback = (st as any).npc_bareback ?? {})[String((st as any).npcID ?? 0)] = 'never_use';
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Okay," you say with an eager smile. "Let\'s stop using condoms then."');
    scene.text(`${((st as any).npcdesc ?? '')} looks back at you shocked.`);
    scene.text('"You really mean it?" he asks.');
    scene.actions([
      { label: 'You really mean it', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['boy_pill_suggest'] === 1) {
      scene.text('"Yeah," you nod. "I really mean it. Let\'s go bareback from now on. If I need to get a pill after, then I\'ll get a pill after."');
    } else {
      scene.text('"Yeah," you nod. "I really mean it. Let\'s go bareback from now on."');
      if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
        scene.text('<i>I\'m on birth control anyways</i>, you think to yourself. <i>I probably don\'t need to be so extra protective.</i>');
      }
      scene.text(`${((st as any).npcdesc ?? '')} seems very excited.`);
    }
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Tease him', handler: (st: GameState) => {
    scene.text('"Yeah? Why? Are you saying you want to keep using them?" you reply teasingly.');
    if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Fuck no! I\'ve been waiting forever for this!"');
    } else {
      scene.text('"No! No! I mean, if you\'re good to stop, then I\'m good with it too."');
    }
    scene.text(`${((st as any).npcdesc ?? '')} seems very excited.`);
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBarebackThinkPill(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"Hmmm..."');
    scene.text('<i>He\'s got a point,</i> you muse to yourself. <i>As long as I make sure I take some plan B by the next day, it should be just fine. Shouldn\'t it?</i>');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bareback_thinking'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBarebackTooRisky(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBarebackAgree(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBarebackPillExpense(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Too expensive', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"That pill costs money you know," you say irritably. "I\'m not willing to pay for that every time you forget to pull out."');
    if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] >= 1  &&  ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] < 1  &&  (Math.floor(Math.random() * 3) + 1) === 3)  ||  (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 2  &&  ((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1))) {
      scene.text(`"How about I pay for it then?" ${((st as any).npcdesc ?? '')} asks. "Any time you need a morning after pill because of me, I'll give you money to pay for it."`);
      scene.text('He grabs his wallet and pulls out a wad of notes.');
      scene.text(`"${qspFunc(s, 'money', 'string_profit', 1000)} should be enough, right?" he grins. "You can buy one to be ready for next time."`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMaPillDealAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.actions([
      { label: 'Couldn\'t impose', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('You blink as he offers the cash to you.');
    scene.text('"No, I couldn\'t possibly," you say, pushing it back towards him. "I\'d feel bad taking your money."');
    if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'boyfriend') {
      scene.text('"Why? I\'m your boyfriend," he grins extending the money again. "You feel bad that the guy you\'re dating wants to pay for something?"');
    } else {
      scene.text('"Why? I\'m getting something out of it too," he grins extending the money again. "Just take it and let\'s start going bareback."');
    }
    qspCall(st, 'willpower', 'misc', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
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
    scene.text(`${((st as any).npcdesc ?? '')} sighs in disappointment but does as you ask and puts the cash away.`);
    scene.text('"Let me know if you ever change your mind," he says. "Offer will still stand."');
    ((st as any).npc_pay_for_ma_pill_offer = (st as any).npc_pay_for_ma_pill_offer ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMaPillDealAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Hormonal influence', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It\'s not just the money," you shake your head, pushing his hand back. "Those pills are just a bunch of hormones getting dumped into my body. It could totally throw my balance out of whack. I have enough hormonal issues as it is ' + ((((st as any).age ?? 0) < 20) ? ('as a teenage girl.') : ('as a woman.')) + 'I don\'t need more."');
    scene.text(`"Fair enough I suppose," ${((st as any).npcdesc ?? '')} replies ruefully and puts the money away. "Offer's always on the table if you change your mind."`);
    ((st as any).npc_pay_for_ma_pill_offer = (st as any).npc_pay_for_ma_pill_offer ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Not a charity case', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I\'m not some kind of charity case," you say in irritation, practically slapping his hand away. "I can get by just fine on my own and <i>I</i> choose what I want to spend <i>my</i> money on."');
    scene.text(`"Just let me know if you ever change your mind," ${((st as any).npcdesc ?? '')} shrugs, putting the money away. "Offer is here any time you want it."`);
    ((st as any).npc_pay_for_ma_pill_offer = (st as any).npc_pay_for_ma_pill_offer ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      ]);
    } else {
      scene.text(`"I guess you have a point there," ${((st as any).npcdesc ?? '')} chuckles. "It could really add up quickly if things went wrong."`);
      qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterMaPillDealAccept(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Accept', handler: (st: GameState) => {
    scene.actions([
      { label: 'Surprise', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Wait really?" you say in surprise, taking the notes from him. "You\'d really do that? I can just have this?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBoyPaysForMaPills(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Gratitude', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Oh! Wow," you say, taking the notes from him. "That\'s... This is actually very helpful. That\'s so nice of you! Not sure how many guys would be willing to pay for a girl\'s emergency birth control like this."');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Excitement', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Seriously?!" you say, excitedly grabbing the money. "If you\'re paying for it then sure!"');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoyPaysForMaPills(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text(`"Well it would cost me a lot more money if you got pregnant and I had to pay child support," ${((s as any).npcdesc ?? '')} chuckles jokingly. "But I make plenty of money. The cost of a few pills is hardly going to make a dent. So you ready to stop using condoms?"`);
  } else {
    scene.text(`"I make enough money to be able to afford the nicer things in life," ${((s as any).npcdesc ?? '')} shrugs somewhat smugly. "What's a few pills here and there? So you ready to stop using condoms?"`);
  }
  scene.text('"I guess as long as you\'re paying for it..." you say.');
  ((s as any).npc_pay_for_ma_pill = (s as any).npc_pay_for_ma_pill ?? {})[String((s as any).npcID ?? 0)] = 1;
  ((s as any).npc_bareback = (s as any).npc_bareback ?? {})[String((s as any).npcID ?? 0)] = 'never_use';
  qspCall(s, 'money', 'earn', 1000);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill_money'] = 1;
  qspGoto(s, 'sex_ev_pillow_talk', 'topic_route');
  scene.build();
}

function enterMaPillMoney(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill_money'] === 0  &&  ((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: 'Ask for plan B money', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill_money'] = 1;
    qspCall(st, 'money', 'earn', 1000);
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
      scene.text('"Think I could get that money for the pill now?" you ask, rubbing your thighs together over the cum still oozing from your pussy.');
    } else {
      scene.text(`"Think I could get that money for the pill now?" you ask, rubbing your thighs together as you remember the feeling of ${((st as any).npcdesc ?? '')}'s cum oozing from your pussy.`);
    }
    scene.text(`"Sure thing," he says, quickly reaching over to his wallet and pulling out a ${qspFunc(s, 'money', 'string_profit', 1000)} note and handing it to you.`);
    scene.text('"Thanks," you say as you take it.');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  scene.build();
}

function enterBarebackBcSuggest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['using_bc'] === 0) {
    scene.actions([
      { label: 'Think about it', handler: (st: GameState) => {
    scene.text('"Hmmm..." you hum to yourself. "I\'ll think about it...');
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Already am', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    if (((st as any).birth_control ?? 0)?.['think_safe'] === 0) {
      ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
      scene.text('"I <i>am</i> on birth control," you sigh. "But it\'s not ready yet. It\'s still going to be a while longer before it\'s effective and I can\'t afford not to use condoms until that happens."');
    } else {
      qspCall(st, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I <i>am</i> on birth control," you sigh. "But hormonal birth control isn\'t 100% effective. I really don\'t want to get pregnant so gotta use condoms, even if I hate them."');
      if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`"Seriously?" ${((st as any).npcdesc ?? '')} says, giving you an exasperated look. "You've been on birth control this whole time and we're still using condoms? What the hell!"`);
        scene.text('"I just told you, I don\'t want to get pregnant!"');
        scene.text('"You\'re not going to get pregnant while you\'re on birth control! Stop being so paranoid and let\'s just go bareback already!"');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBarebackAgree(st, scene); (st as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'No way', handler: (st: GameState) => {
    scene.text('"No way!" you exclaim. "Just because nothing went wrong this time doesn\'t mean something can\'t go wrong in the future!"');
    scene.text(`"This is fucking dumb," ${((st as any).npcdesc ?? '')} grumbles.`);
    qspGoto(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        scene.text(`"Seems a little excessive, don't you think?" ${((st as any).npcdesc ?? '')} says giving you an odd look.`);
        scene.text('"Better than getting pregnant," you shrug back.');
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterBorrowMoney(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['borrow_$$'] === 0) {
    scene.actions([
      { label: 'Ask for money...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['borrow_$$'] = 1;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowPlanb(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Never mind', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['borrow_$$'] = 0;
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterBorrowPlanb(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    scene.actions([
      { label: '... for plan B', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    } else {
      scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    }
    scene.text(`"Hey, can I borrow some money?" you ask ${((st as any).npcdesc ?? '')}. "I need it for the morning after pill."`);
    if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 0  &&  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) > 1) {
      scene.text(`"Are you kidding? I barely have any money myself," ${((st as any).npcdesc ?? '')} scowls. "I got nothing to give to you."`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowMoneyExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 4) + 1) === 1  &&  ((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
        scene.text('"Actually, I\'m a little strapped for cash myself," he mumbles embarrassedly. "I need every ruble right now. Sorry."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowMoneyExit(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Aren\'t you on birth control already?" he asks confusedly.');
          if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.text('"I just like being extra safe," you say.');
          } else {
            qspCall(st, 'sex_ev_stats', 'no_birth_control_know');
            scene.text('"I actually stopped a while back... Did I forget to tell you?"');
            scene.text(`You give ${((st as any).npcdesc ?? '')} an embarrassed smile.`);
          }
          if (((st as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
            qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
            scene.text('"You want to spend my money on a \'just in case\'? Fuck no! You can buy it yourself. If you can\'t afford it, that\'s what birth control is for in the first place."');
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBorrowMoneyExit(st, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
              if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
                scene.text(`"Ugh, how much do you need?" ${((st as any).npcdesc ?? '')} grumbles reaching for his wallet.`);
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
  scene.build();
}

function enterBorrowPlanb2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 100) ?? '') + ' (just a little)', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 100);
    qspCall(st, 'sex_ev_leave', 'dress_loop');
    scene.text(`"I'm just a little short right now," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "Only about ${qspFunc(s, 'money', 'string_profit', 100)} or so."`);
    scene.text(`"Easy enough," he says and hands you a ${qspFunc(s, 'money', 'string_profit', 100)} note.`);
    qspCall(st, 'sex_ev_dress_talking', 'ma_pill_ask_money3');
  } },
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 370) ?? '') + ' (half price)', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 400);
    qspCall(st, 'sex_ev_leave', 'dress_loop');
    scene.text(`"I've only got enough for half," you say, ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}. "I think that's... ${qspFunc(s, 'money', 'string_profit', 370)}?"`);
    scene.text(`"Here, take ${qspFunc(s, 'money', 'string_profit', 400)}," he says, handing you a couple notes. "I'm not about to count out ${qspFunc(s, 'money', 'string_profit', 30)} in change."`);
    qspCall(st, 'sex_ev_dress_talking', 'ma_pill_ask_money3');
  } },
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 740) ?? '') + ' (full price)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'dress_loop');
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 740)}? I think that's how much it costs. I... don't really have any money right now," you admit while ${(((st as any).sex_ev ?? 0)?.['dress_describe'] ?? '')}.`);
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'money', 'earn', 740);
      scene.text(`"Seriously?" ${((st as any).npcdesc ?? '')} scowls as hands over the notes. "You don't have <i>any</i> money? Get a job or something."`);
    } else {
      qspCall(st, 'money', 'earn', 800);
      scene.text(`"Here, just take ${qspFunc(s, 'money', 'string_profit', 800)}," ${((st as any).npcdesc ?? '')} says, handing you several notes. "Better than you getting pregnant."`);
    }
    qspCall(st, 'sex_ev_dress_talking', 'ma_pill_ask_money3');
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
  scene.build();
}

function enterCheatingRules(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'No kissing', handler: (st: GameState) => {
    ((st as any).npc_no_kiss = (st as any).npc_no_kiss ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"No kissing," you say.');
    scene.text(`"That's fine," ${((st as any).npcdesc ?? '')} nods.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheatingRules(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] !== 2) {
    scene.actions([
      { label: 'No creampies', handler: (st: GameState) => {
    ((st as any).npc_boyfriend_creampie_rule = (st as any).npc_boyfriend_creampie_rule ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"You can\'t come inside me," you say. "That\'s too far."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text(`"We always use condoms anyways," ${((st as any).npcdesc ?? '')} shrugs.`);
    } else {
      if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 'creampie') {
        scene.text(`"But that's the best part about fucking you," ${((st as any).npcdesc ?? '')} grins.`);
        scene.text('"I\'m serious," you say sternly. "No creampies."');
      } else {
        if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 'mouth') {
          scene.text(`"So long as I can watch you swallow," ${((st as any).npcdesc ?? '')} grins.`);
        } else {
          if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 'facial') {
            scene.text(`"So long as I can come all over your pretty face," ${((st as any).npcdesc ?? '')} grins.`);
          } else {
            if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 'tits') {
              scene.text(`"So long as I can come all over your beautiful tits," ${((st as any).npcdesc ?? '')} grins.`);
            } else {
              if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 'pullout') {
                scene.text(`"I prefer the pullout method anyways," ${((st as any).npcdesc ?? '')} grins.`);
              }
            }
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheatingRules(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).npc_condom_rule ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'Always condoms', handler: (st: GameState) => {
    ((st as any).npc_condom_rule = (st as any).npc_condom_rule ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"We always have to use a condom," you say.');
    if (((st as any).npc_no_condoms ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Oh, come on. We don-"');
      scene.text('"I\'m serious!" you say sternly. "No condoms, no deal."');
    } else {
      if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`"We already do," ${((st as any).npcdesc ?? '')} smiles.`);
      } else {
        if (((st as any).npc_boyfriend_creampie_rule ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text(`"A little redundant, don't you think?" ${((st as any).npcdesc ?? '')} smirks.`);
        } else {
          scene.text(`"I guess that's fair," ${((st as any).npcdesc ?? '')} says.`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheatingRules(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  scene.actions([
    { label: 'Done', handler: (st: GameState) => {
    scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
    scene.text('"Those are the rules," you say. "So as long as we follow those, we can keep doing this."');
    scene.text(`"I can agree to that," ${((st as any).npcdesc ?? '')} smiles.`);
    qspCall(st, 'sex_ev_after', 'after_sex_dressed');
  } },
  ]);
  scene.build();
}

function enterCheatingEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Smile back', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    if (((st as any).pantyworntype ?? 0) !== 'none') {
      scene.text('You return his smile, the prospect of future encounters already seeping into your panties as you head out the door.');
    } else {
      if (((st as any).PCloSkirt ?? 0) > 0) {
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
  scene.text(`"We've been having fun, right?" ${((s as any).npcdesc ?? '')} asks slowly.`);
  if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 0) {
    scene.actions([
      { label: 'They\'re called simultaneous orgasms', handler: (st: GameState) => {
    scene.text(`"They're called simultaneous orgasms, ${((st as any).npcdesc ?? '')}," you grin back. `);
  } },
    ]);
  }
  scene.build();
}

function enterRapeExplain(s: GameState, scene: SceneBuilder): void {
  scene.text(String(qspFunc(s, 'sex_ev', 'bed_room') || ''));
  if (((s as any).stat ?? 0)?.['rape_count'] === 1) {
    scene.text(`${((s as any).npcdesc ?? '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. The images and sensations of that time come flooding back to you, invading your mind. It's as if you're back in that moment, being violated all over again.`);
  } else {
    if (((s as any).stat ?? 0)?.['rape_count'] < 5) {
      scene.text(`${((s as any).npcdesc ?? '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. The images and sensations come flooding back to you, invading your mind. The memories of your various attackers won't stop flashing before your eyes, memories of your body being violated like a montage you can't escape.`);
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] < 10) {
        scene.text(`${((s as any).npcdesc ?? '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. Images and sensations flood through you, invading your mind. The memories of your attackers all blur together, combining into one horrible sensation like they're all violating you at once.`);
      } else {
        scene.text(`${((s as any).npcdesc ?? '')} stops in shock wondering what has just come over you as your body convulses in uncontrollable sobs. Images and sensations flood through you, invading your mind. Your countless rapes leave you a shuddering mess as the trauma threatens to overwhelm you.`);
      }
    }
  }
  scene.text(`"What just...?" ${((s as any).npcdesc ?? '')} stammers confusedly.`);
  scene.actions([
    { label: 'Try to hide it', handler: (st: GameState) => {
    scene.text('"I... I just don\'t like it rough," you whimper, tears running down your cheeks as you sniff, pathetically trying to wipe them away with the back of your hand.');
  } },
    { label: 'Tell him what happened', handler: (st: GameState) => {
    ((st as any).npc_knows_rape_victim = (st as any).npc_knows_rape_victim ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text(`You crawl up beside ${((st as any).npcdesc ?? '')}, still shivering as you wipe the tears from your eyes that won't stop flowing.`);
    if (((st as any).stat ?? 0)?.['rape_count'] === 1) {
      scene.text('"Listen," you sniff, rubbing your hand across your cheek again. "I was raped once... It was awful and horrible and I... well I... I had a flashback about it just now..."');
    } else {
      if (((st as any).stat ?? 0)?.['rape_count'] < 5) {
        scene.text('"I\'ve never told you this but..." you sniff, rubbing your hand across your cheek again. "I\'ve been raped... Several times... and I... I had flashbacks just now..."');
      } else {
        if (((st as any).stat ?? 0)?.['rape_count'] < 10) {
          scene.text('"I\'ve never told you this but..." you sniff, rubbing your hand across your cheek again. "I\'ve been raped... More than a few times... and I... I had flashbacks just now..."');
        } else {
          scene.text('"I\'ve never told you this but..." you sniff, rubbing your hand across your cheek again. "I\'ve been raped... A lot... I don\'t know why it keeps happening but I\'ve been raped so many times I\'ve lost count... And sometimes the trauma just comes out..."');
        }
      }
    }
    scene.text(`${((st as any).npcdesc ?? '')} is taken aback and goes quiet. Its several minutes before he finally speaks again.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I\'m... I\'m so sorry for what happened to you," he says. "I had no idea."');
    scene.text('"It\'s not your fault," you sniff again. "You couldn\'t have known. I never told you. Until now."');
    scene.text(`"So... I should lay off the rough sex in the future?" ${((st as any).npcdesc ?? '')} asks hesitantly.`);
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
    scene.text(`You pout cutely, making doe eyes at ${((st as any).npcdesc ?? '')} who smiles back and reaches over to his wallet.`);
    scene.text(`"Sure do," he says, pulling out ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))} in cash and handing it over to you. "There you go baby girl."`);
    if (((st as any).npc_prostitution_tab ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('You see he even paid you the money he owed you from last time.');
    }
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code');
    qspGoto(st, 'sex_ev_talk', 'prostitution_payment_thank');
  } },
      { label: 'Transactionally', handler: (st: GameState) => {
    ((st as any).npc_dislike = (st as any).npc_dislike ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_dislike[String((st as any).npcID ?? 0)] ?? 0) + (1);
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text(`"Okay, we've fucked. Can I get paid now?" you ask bluntly. ${((st as any).npcdesc ?? '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}.`);
    } else {
      scene.text(`"Okay, I got you off. Can I get paid now?" you ask bluntly. ${((st as any).npcdesc ?? '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}.`);
    }
    if (((st as any).npc_prostitution_tab ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('You see he even paid you the money he owed you from last time.');
    }
    scene.text('"Here," he says. He offers it towards you and you snatch it out of his hand.');
    scene.text('"Thanks," you reply absent-mindedly as you stuff the money into your purse.');
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code');
    qspGoto(st, 'sex_ev_after', 'relax_together');
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
    if (((st as any).sex_ev ?? 0)?.['prostituation_paid'] > 0) {
      if (((st as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 1) {
        scene.text('"Soooo... Now that we\'ve made some cream pies together..." you start, smiling sweetly and drawing your finger in loops on his chest. "Don\'t you have to pay for me to take them home?"');
      } else {
        scene.text('"Soooo... Now that we\'ve some more stuff to make <i>you</i> feel good..." you start, smiling sweetly and drawing your finger in loops on his chest. "Don\'t you need to give <i>me</i> something to feel good?"');
      }
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`"Fuck, I was hoping you'd forget about that," ${((st as any).npcdesc ?? '')} scowls as he reaches for his money and pulls out some notes. "That's what I get for thinking with my dick."`);
      } else {
        scene.text(`"A deal's a deal, I guess," ${((st as any).npcdesc ?? '')} says, reaching for his money to pull out some notes.`);
      }
      scene.text('As he proffers it, you pluck it daintily from his fingers.');
    } else {
      scene.text(`"Now that we've had our fun..." you say, smiling sweetly at ${((st as any).npcdesc ?? '')}. "And I did something for you... Don't you have something for me...?"`);
      scene.text(`You pout cutely, making doe eyes at ${((st as any).npcdesc ?? '')} who smiles back and reaches over to his wallet.`);
      scene.text(`"Yeah," he says, pulling out ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))} in cash and handing it over to you. "Worth every ruble."`);
    }
    scene.text('"Thank you very much," you smile back and put the money away into your purse.');
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code');
    qspCall(st, 'sex_ev_after', 'relax_together');
  } },
      { label: 'Transactionally', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    if (((st as any).sex_ev ?? 0)?.['prostituation_paid'] > 0) {
      if (((st as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 1) {
        scene.text(`"Okay, I let you cum inside me. You owe me another ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}."`);
      } else {
        scene.text(`"Okay, you paid for extras and we did it. You owe me another ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}."`);
      }
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        scene.text(`"Fuck's sake, ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}?" ${((st as any).npcdesc ?? '')} scowls as he reaches for his money and pulls out some notes. "That's what I get for thinking with my dick."`);
        scene.text('As he proffers it, you snatch it from his hand');
      } else {
        scene.text(`"A deal's a deal, I guess," ${((st as any).npcdesc ?? '')} says, reaching for his money to pull out some notes.`);
      }
      scene.text('As he proffers it, you snatch it from his hand.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        scene.text(`"Okay, we've fucked. Can I get paid now?" you ask bluntly. ${((st as any).npcdesc ?? '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}.`);
      } else {
        scene.text(`"Okay, I got you off. Can I get paid now?" you ask bluntly. ${((st as any).npcdesc ?? '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? 0)?.['prostitution_owed'] ?? ''))}.`);
      }
      scene.text('"Here," he says. He offers it towards you and you snatch it out of his hand.');
    }
    scene.text('"Thanks," you reply dismissively as you stuff the money into your purse.');
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code');
    qspCall(st, 'sex_ev_after', 'relax_together');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterProstitutionPaymentThank(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    scene.text('"Thank you daddy," you smile back and put the money away into your purse.');
    qspCall(st, 'sex_ev_after', 'relax_together');
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
