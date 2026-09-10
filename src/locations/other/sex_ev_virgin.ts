import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask <<$npcdesc>> to take your virginity', handler: (st: GameState) => {
    (s as any).sex_ev['virgin'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: With a fast beating heart, you turn to look at <<$npcdesc>>.
    scene.text(`With a fast beating heart, you turn to look at ${((s as any).npcdesc ?? 0)}.`);
    // TODO-QSP: dynamic text: "<<$npcdesc>>... I want you to take my virginity."
    scene.text(`"${((s as any).npcdesc ?? 0)}... I want you to take my virginity."`);
    qspCall(s, 'sex_ev_virgin', 'start_flavor');
    qspCall(s, 'sex_ev_virgin', 'start_options');
  } },
  ]);
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Give <<$npcdesc>> your virginity', handler: (st: GameState) => {
    (s as any).sex_ev['virgin'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Well..." You bite your lip, heart pounding inside your chest, mulling over what you\'re about to say. "What if... I let you fuck me?"');
    qspCall(s, 'sex_ev_virgin', 'start_flavor');
    qspCall(s, 'sex_ev_virgin', 'start_options');
  } },
  ]);
  scene.build();
}

function enterStart3(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['virgin'] = 1;
  // TODO-QSP: dynamic text: Your breath catches in your throat as <<$npcdesc>> moves closer and closer. Your...
  scene.text(`Your breath catches in your throat as ${((s as any).npcdesc ?? 0)} moves closer and closer. Your pussy feels like it's on fire. You want it so badly that it <i>hurts</i>.`);
  scene.text('"Okay," you whisper, spreading your legs, gasping when his fingers find your dripping lips. "You can have it. Take my virginity."');
  qspCall(s, 'sex_ev_virgin', 'start_flavor');
  qspCall(s, 'sex_ev_virgin', 'start_options');
  scene.build();
}

function enterStart4(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['virgin'] = 1;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: Your breath catches in your throat as <<$npcdesc>> moves closer and closer. You ...
  scene.text(`Your breath catches in your throat as ${((s as any).npcdesc ?? 0)} moves closer and closer. You know what you told him before. You know that you want to save it. But right now, you just can't hold yourself back. Your pussy feels like it's on fire. You want it so badly that it <i>hurts</i>.`);
  scene.text('"Okay," you whisper, spreading your legs, gasping when his fingers find your dripping lips. "You can have me."');
  qspCall(s, 'sex_ev_virgin', 'start_flavor');
  qspCall(s, 'sex_ev_virgin', 'start_options');
  scene.build();
}

function enterStart5(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['virgin'] = 1;
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('"Enough of the foreplay," you say with a lusty growl. "It\'s time to fuck."');
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"I was wondering when you\'d spread your legs for me," he grins.');
    } else {
      scene.text('"I was wondering if you were ever going to let me fuck you," he says with a gentle smile.');
    }
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"It\'s about damn time," he grins back wickedly.');
    } else {
      scene.text('"Are you sure?" he asks. "I thought you said you were saving it for marriage?"');
      scene.text('"I\'m sick of waiting."');
      scene.text('"Really?" he asks, eyes wide. "Are you sure?"');
      scene.text('"I\'m sick of waiting."');
    }
  }
  qspCall(s, 'sex_ev_virgin', 'start_options');
  scene.build();
}

function enterStartFlavor(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin_flavor_skip'] === 0) {
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"I was wondering when you\'d spread your legs for me," he grins.');
        scene.text('"Hey! Be nice," you say shyly. "This is my first time..."');
      } else {
        scene.text('"I was wondering if you were ever going to let me fuck you," he says with a gentle smile.');
        scene.text('"It\'s my first time," you say shyly. "But I want to give it to you."');
      }
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It\'s about damn time," he grins wickedly.');
        scene.text('"Hey! Be nice!" you blush. "Don\'t make me regret this."');
      } else {
        scene.text('"Are you sure?" he asks. "I thought you said you were saving it for marriage?"');
        scene.text('"I\'m sure," you smile back. "I don\'t want to wait anymore. I want you <i>now</i>."');
        scene.text('"Really?" he asks, eyes wide. "Are you sure?"');
        scene.text('"I\'m sure," you smile back. "I don\'t want to wait anymore. I want you <i>now</i>."');
      }
    }
  }
  scene.build();
}

function enterStartOptions(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['orgasm_count'] = ((s as any).orgasm ?? 0);
  (s as any).sex_ev['virgin_fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0  &&  ((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_condoms', 'condoms'
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
      { label: 'Let him take the lead', goto: ['sex_ev_virgin', 'his_choice'] },
      { label: 'Spread your legs', goto: ['sex_ev_virgin', 'miss_virg_norm1'] },
      { label: 'Get on all fours', goto: ['sex_ev_virgin', 'doggy_virg_norm1'] },
      { label: 'Climb on top', goto: ['sex_ev_virgin', 'cowgirl_virg_norm1'] },
    ]);
  }
  scene.build();
}

function enterStartWithCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
  } else {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
  }
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 1 === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
    // TODO-QSP: dynamic text: With the condom securely wrapped around <<$npcdesc>>'s cock, he moves back in be...
    scene.text(`With the condom securely wrapped around ${((s as any).npcdesc ?? 0)}'s cock, he moves back in between your legs before he stops, hesitating.`);
    qspCall(s, 'sex_ev_virgin', 'start_options2');
  } else {
    // TODO-QSP: dynamic text: With the condom securely wrapped around <<$npcdesc>>'s cock, he moves back in be...
    scene.text(`With the condom securely wrapped around ${((s as any).npcdesc ?? 0)}'s cock, he moves back in between your legs.`);
    qspCall(s, 'sex_ev_virgin', 'miss_virg_start');
  }
  scene.build();
}

function enterStartWithoutCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 1 === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
    // TODO-QSP: dynamic text: <<$npcdesc>> moves back in between your legs before he stops, hesitating.
    scene.text(`${((s as any).npcdesc ?? 0)} moves back in between your legs before he stops, hesitating.`);
    qspCall(s, 'sex_ev_virgin', 'start_options2');
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> moves back in, lining his naked cock up with your pussy. Moments la...
    scene.text(`${((s as any).npcdesc ?? 0)} moves back in, lining his naked cock up with your pussy. Moments later, he takes your virginity.`);
    qspCall(s, 'sex_ev_virgin', 'miss_virg_start');
  }
  scene.build();
}

function enterStartOptions2(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['orgasm_count'] = ((s as any).orgasm ?? 0);
  scene.text('"Did you want to decide how we do this?" he asks. "It\'s <i>your</i> first time after all."');
  scene.actions([
    { label: 'Let him take the lead', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You shake your head.');
    scene.text('"You pick. I trust your experience," you smile.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Spread your legs', goto: ['sex_ev_virgin', 'miss_virg_norm1'] },
    { label: 'Get on all fours', goto: ['sex_ev_virgin', 'doggy_virg_norm1'] },
    { label: 'Climb on top', goto: ['sex_ev_virgin', 'cowgirl_virg_norm1'] },
  ]);
  scene.build();
}

function enterSavingVirginity(s: GameState, scene: SceneBuilder): void {
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_virgin', 'lover_wait'] }]);
  }
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('"Knock it off," you shake your head. "You know I\'m saving my virginity."');
  } else {
    (s as any).know_virgin[$npcID] = 1;
    scene.text('"We can\'t do that," you shake your head. "I\'m saving my virginity."');
  }
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] !== -1)  ||  ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).sex_ev ?? 0)?.['virgin_deny'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'buy_virginity1'] },
    ]);
  } else {
    if (Math.floor(Math.random() * 2) + 1 === 1) {
      scene.text('"Come on," he whispers. "I\'m so fucking hard for you right now... Let me pop your cherry..."');
    } else {
      scene.text('"Come on," he whispers. "What are you waiting for? Just lose it already. It\'ll feel <i>really</i> good..."');
    }
    qspCall(s, 'sex_ev_virgin', 'anal_instead');
    (s as any).sex_ev['no_sex'] = 1;
    // TODO-QSP: dynamic text: "Oh," <<$npcdesc>> seems taken aback. "Sorry, I didn't realize. Did you want to ...
    scene.text(`"Oh," ${((s as any).npcdesc ?? 0)} seems taken aback. "Sorry, I didn't realize. Did you want to do something else then?"`);
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    scene.actions([
      { label: 'Saving it for marriage', handler: (st: GameState) => {
    scene.text('"Sorry," you say, denying him. "I\'ve got to stay a virgin until I get married."');
    qspCall(s, 'sex_ev_virgin', 'change_mind');
  } },
      { label: 'Saving it for marriage (<<$npc_nickname[\'A29\']>> says)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry," you say, denying him. "I've got to stay a virgin until I get married. <...
    scene.text(`"Sorry," you say, denying him. "I've got to stay a virgin until I get married. ${((s as any).npc_nickname ?? 0)?.['A29']}'s orders."`);
    qspCall(s, 'sex_ev_virgin', 'change_mind');
  } },
      { label: 'Waiting for the right guy', handler: (st: GameState) => {
    scene.text('"Nope," you say, denying him. "I\'m waiting for the right guy. Sorry to say but I don\'t think you\'re him."');
    qspCall(s, 'sex_ev_virgin', 'change_mind');
  } },
      { label: 'Well...', handler: (st: GameState) => {
    (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
    scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn't wait for your permission and starts rubbing his cock agains...
    scene.text(`${((s as any).npcdesc ?? 0)} doesn't wait for your permission and starts rubbing his cock against your pussy lips.`);
    scene.text('You\'re about to protest when his tip rubs right against your clit and a wave of pleasure flushes through your hips, causing an involuntary moan. Your judgement starts to get clouded, your willpower eroded.');
    scene.text('<i>Well...</i> You moan softly under his touch. It feels <b>so good.</b> <i>What if... I just... let him...</i>');
    // TODO-QSP: dynamic text: <<$npcdesc>> gently pushes your legs open. You can feel his hardon rubbing right...
    scene.text(`${((s as any).npcdesc ?? 0)} gently pushes your legs open. You can feel his hardon rubbing right against your clit.`);
    qspCall(s, 'sex_ev_condoms', 'virgin_condom_ask1');
    qspCall(s, 'sex_ev_condoms', 'virgin_condom_pc_ask1');
    scene.actions([
      { label: 'Let <<$npcdesc>> take your virginity', handler: (st: GameState) => {
    scene.text('"Okay," you whisper. "Put it in."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((s as any).npcdesc ?? 0)} grabs a condom off his nightstand.`);
      qspCall(s, 'sex_ev_condoms', 'virgin_condom1');
    } else {
      // TODO-QSP: dynamic text: You spread your legs for him and moments later, <<$npcdesc>> takes your virginit...
      scene.text(`You spread your legs for him and moments later, ${((s as any).npcdesc ?? 0)} takes your virginity.`);
      qspCall(s, 'sex_ev_virgin', 'miss_virg_start');
    }
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterHookupWait(s: GameState, scene: SceneBuilder): void {
  (s as any).know_virgin[$npcID] = 1;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    // TODO-QSP: dynamic text: "Wait!" you yelp, closing up your legs halfway. <<$npcdesc>> freezes up, body ov...
    scene.text(`"Wait!" you yelp, closing up your legs halfway. ${((s as any).npcdesc ?? 0)} freezes up, body over yours, his cock resting against your pussy.`);
    scene.text('"I... I\'m a virgin..."');
    scene.text('"Oh." He slumps backwards, not sure where you\'re going with this.');
    qspCall(s, 'sex_ev_virgin', 'not_ready');
    scene.actions([
      { label: 'Go slow okay?', handler: (st: GameState) => {
    scene.text('"Just... go slow, okay? I\'m new at this," you smile nervously, spreading your legs again.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and gently pushes cock into your pussy.
    scene.text(`${((s as any).npcdesc ?? 0)} nods and gently pushes cock into your pussy.`);
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'miss_virg_norm1'] },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Wait!" you yelp. <<$npcdesc>> freezes up, hands on your ass, and you can feel h...
    scene.text(`"Wait!" you yelp. ${((s as any).npcdesc ?? 0)} freezes up, hands on your ass, and you can feel his cock pressing right against your pussy lips.`);
    scene.text('Sitting up and looking over your shoulder to face him, you stammer out, "I... I\'m a virgin..."');
    scene.text('"Oh." He slumps backwards, not sure where you\'re going with this.');
    qspCall(s, 'sex_ev_virgin', 'not_ready');
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      // TODO-QSP: dynamic text: "Wait!" you yelp. <<$npcdesc>> freezes up, putting his hands up.
      scene.text(`"Wait!" you yelp. ${((s as any).npcdesc ?? 0)} freezes up, putting his hands up.`);
      scene.text('Still resting your thighs on top of his, you stammer out, "I... I\'m a virgin..."');
      scene.text('"Oh." He relaxes back onto the bed underneath you, not sure where you\'re going with this.');
      qspCall(s, 'sex_ev_virgin', 'not_ready');
      scene.actions([
        { label: 'Go slow okay?', handler: (st: GameState) => {
    scene.text('"Just... go slow, okay? I\'m new at this," you smile nervously.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and you raise your hips again, biting your lip in apprehension...
    scene.text(`${((s as any).npcdesc ?? 0)} nods and you raise your hips again, biting your lip in apprehension as you slowly lower yourself down onto his cock.`);
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'cowgirl_virg_norm1'] },
    ]);
  } },
      ]);
    }
    qspCall(s, 'sex_ev_condoms', 'virgin_condom_ask1');
    qspCall(s, 'sex_ev_condoms', 'virgin_condom_pc_ask1');
    scene.actions([
      { label: 'Go slow okay?', handler: (st: GameState) => {
    scene.text('"Just... go slow, okay? I\'m new at this," you smile nervously.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and you turn back around and hold your breath, feeling him gen...
    scene.text(`${((s as any).npcdesc ?? 0)} nods and you turn back around and hold your breath, feeling him gently push his cock into your pussy.`);
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'doggy_virg_norm1'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start1':
      enterStart1(s, scene);
      break;
    case 'start2':
      enterStart2(s, scene);
      break;
    case 'start3':
      enterStart3(s, scene);
      break;
    case 'start4':
      enterStart4(s, scene);
      break;
    case 'start5':
      enterStart5(s, scene);
      break;
    case 'start_flavor':
      enterStartFlavor(s, scene);
      break;
    case 'start_options':
      enterStartOptions(s, scene);
      break;
    case 'start_with_condom':
      enterStartWithCondom(s, scene);
      break;
    case 'start_without_condom':
      enterStartWithoutCondom(s, scene);
      break;
    case 'start_options2':
      enterStartOptions2(s, scene);
      break;
    case 'saving_virginity':
      enterSavingVirginity(s, scene);
      break;
    case 'hookup_wait':
      enterHookupWait(s, scene);
      break;
    default:
      enterStart1(s, scene);
      break;
  }
}

export const sex_ev_virgin: LocationDef = {
  name: 'sex_ev_virgin',
  title: '"Okay," you whisper, spreading your legs, gasping when his f',
  region: 'other',
  enter: enter,
};
