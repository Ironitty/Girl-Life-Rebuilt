import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTopicExit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  scene.build();
}

function enterBoyAccidentalCreampie(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['accidental_creampie_convo'] = 1;
  if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'safe') {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You said it's a safe day for you, right?" <<$npcdesc>> asks.
        scene.text(`"You said it's a safe day for you, right?" ${((s as any).npcdesc ?? 0)} asks.`);
        scene.text('"Mhm," you nod.');
        scene.text('"Good," he sighs with relief.');
      } else {
        // TODO-QSP: dynamic text: "Good thing it's one of your safe days," <<$npcdesc>> smiles.
        scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc ?? 0)} smiles.`);
        scene.text('"Mhm," you nod back.');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'prob_safe') {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "You said it's probably safe for you today, right?" <<$npcdesc>> asks.
          scene.text(`"You said it's probably safe for you today, right?" ${((s as any).npcdesc ?? 0)} asks.`);
          scene.text('"Mhm," you nod. He hesitates, seeming concerned.');
          scene.text('"Maybe you should get a morning after pill just in case."');
          qspCall(s, 'sex_ev_talk', 'no_pill_orthodox');
          if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
            scene.actions([
              { label: 'You already have one', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill'] = 1;
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
    qspCall(s, 'sex_ev_talk', 'morning_after_money');
  } },
            { label: 'Probably should', handler: (st: GameState) => {
    scene.text('"Yeah," you say with a shy smile. "I probably should, shouldn\'t I?"');
    scene.text('He seems relieved.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            { label: 'Definitely will', handler: (st: GameState) => {
    scene.text('"I will," you tell him. "Just to be safe."');
    scene.text('He seems relieved.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: "Good thing it's one of your safe days," <<$npcdesc>> smiles.
          scene.text(`"Good thing it's one of your safe days," ${((s as any).npcdesc ?? 0)} smiles.`);
          scene.text('"Mhm," you nod back.');
        }
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_talk', 'get_plan_b_question'] }]);
      }
    }
  }
  scene.build();
}

function enterCreampieOkayQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    // TODO-QSP: dynamic text: "Speaking of which..." <<$npcdesc>> says, looking intently at the cum slowly dra...
    scene.text(`"Speaking of which..." ${((s as any).npcdesc ?? 0)} says, looking intently at the cum slowly draining from your pussy. "Are you gonna be okay...?"`);
  } else {
    // TODO-QSP: dynamic text: "Speaking of which..." <<$npcdesc>> asks, looking intently at your pussy, clearl...
    scene.text(`"Speaking of which..." ${((s as any).npcdesc ?? 0)} asks, looking intently at your pussy, clearly thinking about when he came inside you earlier. "Are you gonna be okay...?"`);
  }
  qspCall(s, 'sex_ev_talk', 'creampie_okay_menu');
  scene.build();
}

function enterCreampieOkayMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(s, 'sex_ev_talk', 'creampie_okay_bc');
    } else {
      qspCall(s, 'sex_ev_talk', 'creampie_okay_safeish');
    }
  } else {
    qspCall(s, 'sex_ev_talk', 'creampie_okay_danger');
  }
  scene.build();
}

function enterCreampieOkayBc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk', 'on_birth_control');
    scene.actions([
      { label: 'On birth control', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I'll be fine," you smile reassuringly. <<$npcdesc>> nods, relaxing a bit.
    scene.text(`"I'll be fine," you smile reassuringly. ${((s as any).npcdesc ?? 0)} nods, relaxing a bit.`);
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('<i>Besides, I\'m on birth control,</i> you think to yourself. <i>But he doesn\'t need to know that.</i>');
    } else {
      scene.text('<i>I mean, what are the odds that something bad happens?</i>');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  scene.build();
}

function enterCreampieOkaySafeish(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
    scene.actions([
      { label: 'You\'ll be fine', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
      scene.text('"It\'s a safe day," you nod. "I should be okay. This time anyways," you smile teasingly.');
    } else {
      scene.text('"It\'s a safe day. I should be okay," you smile reassuringly.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } else {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      qspCall(s, 'sex_ev_talk', 'creampie_okay_unsure');
      scene.actions([
        { label: 'I think so', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    if (((s as any).mesec ?? 0) > 0) {
      scene.text('"I think so," you say. "I\'m pretty sure I can\'t get pregnant on my period..."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms') {
        scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
      } else {
        scene.text('"I think so," you say. "It <i>should</i> be a safe day for me as long as I\'m keeping track of my cycle correctly..."');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
  }
  scene.build();
}

function enterCreampieOkayDanger(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_talk', 'creampie_okay_unsure');
  scene.actions([
    { label: 'Probably not', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
    if (((s as any).sex_ev ?? 0)?.['convo'] === 'used_all_condoms'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup') {
      scene.text('"Probably not..." you say, grimacing. "Which is why it\'s so important we don\'t run out of condoms in the future...');
    } else {
      scene.text('"Probably not..." you say, grimacing. "I\'m pretty sure I\'m in my fertile window..."');
    }
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.text('"So are you going to get a morning after pill?"');
    }
  } },
    { label: 'Need plan B', handler: (st: GameState) => {
    scene.text('"Not really," you grimace. "I\'m definitely going to need some plan B tomorrow."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterCreampieOkayUnsure(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I\'m not sure', handler: (st: GameState) => {
    scene.text('"I\'m... not sure..." you say hesitantly.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
    { label: 'Roll the dice?', handler: (st: GameState) => {
    scene.text('"I\'m not sure... Maybe we can just roll the dice?" you say with a hesitant smile.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
    { label: 'Need plan B (safety)', handler: (st: GameState) => {
    scene.text('"I\'ll get some plan B tomorrow just to be safe," you say.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterGetPlanBQuestion(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    // TODO-QSP: dynamic text: "You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning a...
    scene.text(`"You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning after pill right?" ${((s as any).npcdesc ?? 0)} says, looking intently at the cum slowly draining from your pussy. `);
  } else {
    // TODO-QSP: dynamic text: "You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning a...
    scene.text(`"You're gonna ' + iif(sex_ev['ma_pill'] = 1, 'take that', 'get a') + ' morning after pill right?" ${((s as any).npcdesc ?? 0)} asks, looking intently at your pussy, clearly thinking about when he came inside you earlier.`);
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_talk', 'get_plan_b_answer'] }]);
  scene.build();
}

function enterGetPlanBAnswer(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.text('You hesitate.');
    scene.text('"Uhm..."');
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      scene.text('"Even though you\'re fertile you\'re not gonna get one?"');
    } else {
      scene.text('"This is really something you have to think about?"');
    }
    qspCall(s, 'sex_ev_talk', 'no_pill_orthodox');
    scene.actions([
      { label: 'Too expensive', handler: (st: GameState) => {
    scene.text('"They\'re pretty expensive," you sigh. "I don\'t like spending that much money."');
    scene.text('"A kid is going to be more expensive than that," he points out.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Hormones bad', handler: (st: GameState) => {
    scene.text('"I don\'t like using hormonal products," you say. "I don\'t think it\'s safe to mess with my body like that."');
    scene.text('"But it might be better than having a kid," he points out.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: '"I should, shouldn\'t I?"', handler: (st: GameState) => {
    // TODO-QSP: '"I probably should, shouldn''t I?" you reply with an embarrassed smile. ' + iif(stat['think_virgin'...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: '"If I remember"', handler: (st: GameState) => {
    // TODO-QSP: '"Hopefully I remember to," you reply with an embarrassed smile. ' + iif(stat['think_virgin'] = 0, '...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterNoPillOrthodox(s: GameState, scene: SceneBuilder): void {
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
        scene.text(`"I don't care if you're Saint Mary herself," ${((s as any).npcdesc ?? 0)} frowns. "Get the pill. I'm about to pay child support."`);
        scene.actions([
          { label: 'Stay silent', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'eyeroll');
    // TODO-QSP: dynamic text: You let out a long frustrated breath but don't want to get into a fight, staying...
    scene.text(`You let out a long frustrated breath but don't want to get into a fight, staying silent and neither arguing nor acquiescing to ${((s as any).npcdesc ?? 0)}'s demand.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
        scene.text(`"I don't know if I like that..." ${((s as any).npcdesc ?? 0)} frowns.`);
        scene.actions([
          { label: '"Deal with it"', handler: (st: GameState) => {
    scene.text('"Deal with it," you shrug. "My body, my religion, my choice."');
    scene.text('"So what are you going to do if you get pregnant?"');
    scene.actions([
      { label: 'No answer', handler: (st: GameState) => {
    scene.text('That question leaves you without anything to say and the room descends into an awkward silence...');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
        ]);
      }
    } else {
      if ((((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual')  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
        // TODO-QSP: dynamic text: "Wait so, you're Orthodox so you can't take the morning after pill, but sex befo...
        scene.text(`"Wait so, you're Orthodox so you can't take the morning after pill, but sex before marriage is still okay?" ${((s as any).npcdesc ?? 0)} asks bemusedly.`);
        if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
          scene.actions([
            { label: 'You\'re not fertile anyways', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Premarital sex isn\'t as bad as birth control," you say. "But it shouldn\'t matter anyways. I\'m not fertile right now so it should be fine."');
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
      scene.text('<i><b>Should</b> be...</i> you think silently to yourself...');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        }
        scene.actions([
          { label: 'Uhhhh...', handler: (st: GameState) => {
    scene.text('"Uhhhh..."');
    // TODO-QSP: dynamic text: That question stops you in your tracks and a shit eating grin makes its way acro...
    scene.text(`That question stops you in your tracks and a shit eating grin makes its way across ${((s as any).npcdesc ?? 0)}'s face.`);
    scene.text('"Oh shut up," you huff as he chuckles to himself.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'Get irritated', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'annoyed');
    scene.text('"Are you saying you want me to stop having sex with you?" you snap irately.');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "I'm just saying it's hypocritical!" <<$npcdesc>> protests.
      scene.text(`"I'm just saying it's hypocritical!" ${((s as any).npcdesc ?? 0)} protests.`);
      scene.actions([
        { label: 'Let it go', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 7);
    scene.text('"Ugh, whatever," you huff, deciding the argument isn\'t worth it.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Don\'t let it go', goto: ['sex_ev_events', 'long_argument'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> holds up his hands in surrender, though an irritating smirk is stil...
      scene.text(`${((s as any).npcdesc ?? 0)} holds up his hands in surrender, though an irritating smirk is still playing on his face..`);
      scene.text('"No, no, not at all. Forget I said anything.');
      scene.text('"<i>Hrmph.</i>"');
      scene.text('You cross your arms in annoyance.');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
          { label: 'Trying to limit your sins', handler: (st: GameState) => {
    scene.text('"No, that\'s still a sin too," you say with a wry twist of your lips. "But just because I did one bad thing doesn\'t mean I should do more. I\'m trying not to show up to confession with a laundry list."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'It\'s a bigger sin', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Premarital sex isn\'t as bad as birth control," you say. "That\'s practically <i>murder</i>."');
    scene.text('"You really think the morning after pill counts as murder?"');
    scene.text('"Of course! It\'s like killing the babiest of babies. Literally an egg before it hatches."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        scene.text('"Seriously? Sex protection is a sin?"');
        scene.text('"Yes! It is! And I already have enough to confess without adding that on top!"');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        scene.actions([
          { label: 'Roll the dice?', handler: (st: GameState) => {
    scene.text('"I\'m not sure... Maybe we can just roll the dice?" you say with a hesitant smile.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
          { label: 'Need plan B', handler: (st: GameState) => {
    scene.text('"I\'ll get some plan B tomorrow," you say.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
          { label: 'Need plan B (safety)', handler: (st: GameState) => {
    scene.text('"I should be okay but I\'ll get some plan B tomorrow just to be safe," you say.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_talk', 'morning_after_money');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
        ]);
      }
    }
    qspCall(s, 'sex_ev_talk', 'pc_have_morning_after');
  }
  scene.build();
}

function enterStartBcTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup') {
    scene.actions([
      { label: 'What if you start birth control?', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Well..." you start. "What if I started birth control?"');
    // TODO-QSP: dynamic text: You glance up at <<$npcdesc>> as you ask the question, gauging his reaction.
    scene.text(`You glance up at ${((s as any).npcdesc ?? 0)} as you ask the question, gauging his reaction.`);
    scene.text('"Could we go without condoms then?"');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.text('"I wouldn\'t complain if you started birth control but I think we should keep using condoms," he replies. "All it would take is one forgetful day or bad luck. Better to double up on protection."');
      scene.actions([
        { label: 'Sigh', handler: (st: GameState) => {
    scene.text('<i>Ugh, what\'s it going to take for this guy to go bareback?</i> you think to yourself, sighing deeply.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      scene.text('You\'d really do that just to stop using condoms?" he asks.');
      scene.actions([
        { label: 'Condoms suck', handler: (st: GameState) => {
    ((s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('"Yeah," you grin back. "They suck."');
    scene.text('"Well then... Let me know when you\'re safe..."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Should be on it anyways', handler: (st: GameState) => {
    ((s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('"I should probably be on it if we\'re regularly having sex anyways," you say ruefully and flash him a smile. "But bareback would be a nice bonus..."');
    scene.text('"Well then... Let me know when you\'re safe..."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Been meaning to start', handler: (st: GameState) => {
    ((s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('"I\'ve been wanting to start birth control for a while now anyways," you shrug. "Maybe this will give me the motivation to finally do it.');
    scene.text('"Well then... Let me know when you\'re safe..."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterMorningAfterMoney(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> looks at you for a moment before reaching down into his discarded t...
  scene.text(`${((s as any).npcdesc ?? 0)} looks at you for a moment before reaching down into his discarded trousers to grab his wallet, pulling ${qspFunc(s, 'money', 'string_profit', 800)} out.`);
  scene.text('"Here," he says, offering the cash to you. "Get a morning after pill later.');
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
      scene.text(`${((s as any).npcdesc ?? 0)} stares at you for a moment, looking almost angry.`);
      scene.text('"Just don\'t fucking get pregnant, okay?" he says, tossing the cash onto his bedside table.');
    } else {
      // TODO-QSP: dynamic text: "If you're sure..." <<$npcdesc>> says hesitantly, withdrawing his hand.
      scene.text(`"If you're sure..." ${((s as any).npcdesc ?? 0)} says hesitantly, withdrawing his hand.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Take it', handler: (st: GameState) => {
    ((s as any).take_morning_after ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You take the money from him, warmed by the gesture.');
    scene.text('"Thanks," you say, giving him the most grateful smile you can.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Seriously," <<$npcdesc>> says returning your smile with a stern look. "Take tha...
      scene.text(`"Seriously," ${((s as any).npcdesc ?? 0)} says returning your smile with a stern look. "Take that pill."`);
    } else {
      scene.text('He just nods back in return.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    { label: 'Take the money', handler: (st: GameState) => {
    ((s as any).take_morning_after ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You take the money from him, warmed by the gesture.');
    scene.text('"Thanks," you say, giving him the most grateful smile you can.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Don\'t thank me," he says, shaking his head. "I just don\'t want any bastard kids running around. You can thank me by making sure you take that pill tomorrow."');
    } else {
      scene.text('"Don\'t worry about it," he says, grinning. "I think it would suck for both of us if you got pregnant right now."');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'I have enough money [+$func(\'money\', \'get_cost_string\', 740)]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 740) === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      ((s as any).take_morning_after ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
      scene.text('"No," you shake your head. "You don\'t have to do that. I have enough money to buy a pill myself."');
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Just make sure you do," he replies. "I don\'t want any kids running around."');
      } else {
        // TODO-QSP: dynamic text: "If you're sure..." <<$npcdesc>> says hesitantly, withdrawing his hand.
        scene.text(`"If you're sure..." ${((s as any).npcdesc ?? 0)} says hesitantly, withdrawing his hand.`);
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterPcHaveMorningAfter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'You have one', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill'] = 1;
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
  scene.build();
}

function enterFreeCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_talk" }) + ' src="images/shared/sex/after/pillow_talk2.jpg"></center>';
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_talk" }) + ' src="images/shared/sex/vag/miss/2.jpg"></center>';
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_talk" }) + ' src="images/shared/sex/vag/doggy/1.jpg"></center>';
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_talk" }) + ' src="images/shared/sex/vag/cowgirl/1.jpg"></center>';
          }
        }
      }
    }
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.actions([
        { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"Don\'t worry," you smile. "It\'s a safe day for me. You can come inside me as much as you want today."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> lets out a sigh of relief.
      scene.text(`${((s as any).npcdesc ?? 0)} lets out a sigh of relief.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'It\'s probably safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['preg_risk'] = 'prob_safe';
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"Don\'t worry," you smile. "I\'m probably safe. It\'s okay for you to come inside me today."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> lets out a sigh of relief.
      scene.text(`${((s as any).npcdesc ?? 0)} lets out a sigh of relief.`);
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
    ((s as any).sex_ev ?? {})['preg_risk'] = 'safe';
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"Don\'t worry," you smile. "It\'s a safe day for me. You can come inside me as much as you want."');
    scene.actions([
      { label: '<i>I\'ll be fine</i>', handler: (st: GameState) => {
    scene.text('<i>It\'s fine,</i> you think to yourself. <i>A few creampies won\'t kill me...</i>');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: '<i>I hope I get pregnant</i>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <i>I really hope this gets me pregnant,</i> you think giddily to yourself. <i>I ...
    scene.text(`<i>I really hope this gets me pregnant,</i> you think giddily to yourself. <i>I want ${((s as any).npcdesc ?? 0)}'s babies swimming around inside me...</i>`);
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
    qspCall(s, 'sex_ev_talk', 'free_creampies2');
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
    qspCall(s, 'sex_ev_talk', 'free_creampies2');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not <i>every</i> time', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "Not <i>every</i> time. I\'ll let you know when it\'s a safe day," you smile gently. "And then you can come inside me as much as you want."');
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc ?? 0)} smiles back, beaming at you.`);
    qspCall(s, 'sex_ev_talk', 'topic_exit');
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
    qspCall(s, 'sex_ev_talk', 'free_creampies2');
  } },
      { label: 'I love creampies', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I love it when you come inside. It feels really good. Plus I\'m on birth control. So you don\'t need to ask permission."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I love it when you come inside. It feels really good. So you don\'t need to ask permission."');
    }
    qspCall(s, 'sex_ev_talk', 'free_creampies2');
  } },
    ]);
  } },
    ]);
  }
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
