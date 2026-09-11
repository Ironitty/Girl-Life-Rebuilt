import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask <<$npcdesc>> to take your virginity', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['virgin'] = 1;
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
    ((s as any).sex_ev ?? {})['virgin'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Well..." You bite your lip, heart pounding inside your chest, mulling over what you\'re about to say. "What if... I let you fuck me?"');
    qspCall(s, 'sex_ev_virgin', 'start_flavor');
    qspCall(s, 'sex_ev_virgin', 'start_options');
  } },
  ]);
  scene.build();
}

function enterStart3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['virgin'] = 1;
  // TODO-QSP: dynamic text: Your breath catches in your throat as <<$npcdesc>> moves closer and closer. Your...
  scene.text(`Your breath catches in your throat as ${((s as any).npcdesc ?? 0)} moves closer and closer. Your pussy feels like it's on fire. You want it so badly that it <i>hurts</i>.`);
  scene.text('"Okay," you whisper, spreading your legs, gasping when his fingers find your dripping lips. "You can have it. Take my virginity."');
  qspCall(s, 'sex_ev_virgin', 'start_flavor');
  qspCall(s, 'sex_ev_virgin', 'start_options');
  scene.build();
}

function enterStart4(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['virgin'] = 1;
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
  ((s as any).sex_ev ?? {})['virgin'] = 1;
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
      if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Are you sure?" he asks. "I thought you said you were saving it for marriage?"');
        scene.text('"I\'m sick of waiting."');
      } else {
        scene.text('"Really?" he asks, eyes wide. "Are you sure?"');
        scene.text('"I\'m sick of waiting."');
      }
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
        if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"Are you sure?" he asks. "I thought you said you were saving it for marriage?"');
          scene.text('"I\'m sure," you smile back. "I don\'t want to wait anymore. I want you <i>now</i>."');
        } else {
          scene.text('"Really?" he asks, eyes wide. "Are you sure?"');
          scene.text('"I\'m sure," you smile back. "I don\'t want to wait anymore. I want you <i>now</i>."');
        }
      }
    }
  }
  scene.build();
}

function enterStartOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev ?? {})['virgin_fuck'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0  &&  ((s as any).sex_ev ?? 0)?.['condom_setup'] !== 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_condoms', 'condoms'
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['force_initiative'] === 2) {
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
      ]);
    } else {
      scene.actions([
        { label: 'Let him take the lead', goto: ['sex_ev_virgin', 'his_choice'] },
        { label: 'Spread your legs', goto: ['sex_ev_virgin', 'miss_virg_norm1'] },
        { label: 'Get on all fours', goto: ['sex_ev_virgin', 'doggy_virg_norm1'] },
        { label: 'Climb on top', goto: ['sex_ev_virgin', 'cowgirl_virg_norm1'] },
      ]);
    }
  }
  scene.build();
}

function enterStartWithCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
  } else {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
  }
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
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
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
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
  ((s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).orgasm ?? 0);
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
    ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"We can\'t do that," you shake your head. "I\'m saving my virginity."');
  }
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] !== -1)  ||  ((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).sex_ev ?? 0)?.['virgin_deny'] === 0) {
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'buy_virginity1'] },
    ]);
  } else {
    if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 3) + 1) === 1)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        scene.text('"Come on," he whispers. "I\'m so fucking hard for you right now... Let me pop your cherry..."');
      } else {
        scene.text('"Come on," he whispers. "What are you waiting for? Just lose it already. It\'ll feel <i>really</i> good..."');
      }
      qspCall(s, 'sex_ev_virgin', 'anal_instead');
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
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
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
    } else {
      ((s as any).sex_ev ?? {})['no_sex'] = 1;
      // TODO-QSP: dynamic text: "Oh," <<$npcdesc>> seems taken aback. "Sorry, I didn't realize. Did you want to ...
      scene.text(`"Oh," ${((s as any).npcdesc ?? 0)} seems taken aback. "Sorry, I didn't realize. Did you want to do something else then?"`);
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    }
  }
  scene.build();
}

function enterHookupWait(s: GameState, scene: SceneBuilder): void {
  ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 1;
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
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: "Wait!" you yelp. <<$npcdesc>> freezes up, hands on your ass, and you can feel h...
      scene.text(`"Wait!" you yelp. ${((s as any).npcdesc ?? 0)} freezes up, hands on your ass, and you can feel his cock pressing right against your pussy lips.`);
      scene.text('Sitting up and looking over your shoulder to face him, you stammer out, "I... I\'m a virgin..."');
      scene.text('"Oh." He slumps backwards, not sure where you\'re going with this.');
      qspCall(s, 'sex_ev_virgin', 'not_ready');
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
    } else {
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
    }
  }
  qspCall(s, 'sex_ev_condoms', 'virgin_condom_ask1');
  qspCall(s, 'sex_ev_condoms', 'virgin_condom_pc_ask1');
  scene.build();
}

function enterLoverWait(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_virgin', 'hookup_wait'] }]);
  }
  if (((s as any).WIP_enabled ?? 0) > 0  &&  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).sex_ev ?? {})['rape_ev'] = 1;
    scene.img('images/shared/sex/vag/miss/3.jpg');
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Wait!" you yelp. "Knock it off! You know I\'m saving my virg-!"');
      // TODO-QSP: dynamic text: Your protests cut off in a choked scream as <<$npcdesc>> rams his cock full forc...
      scene.text(`Your protests cut off in a choked scream as ${((s as any).npcdesc ?? 0)} rams his cock full force into you, stabbing it through your hymen and sending waves of agony through you. Tears well up in your eyes as you look up at ${((s as any).npcdesc ?? 0)}, horrified at what he's done.`);
      if (((s as any).sex_ev ?? 0)?.['virgin_deny'] >= 10) {
        scene.text('"I\'m so fucking sick of you blueballing me," he says. "So we\'re gonna fuck today, whether you like it or not."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['virgin_deny'] > 0) {
          scene.text('"I got tired of waiting," he says.');
        } else {
          scene.text('"Congratulations on becoming a woman," he says.');
        }
      }
    } else {
      scene.text('"Wait!" you yelp. "I\'m a-"');
      // TODO-QSP: dynamic text: Your protests cut off in a choked scream as <<$npcdesc>> rams his cock full forc...
      scene.text(`Your protests cut off in a choked scream as ${((s as any).npcdesc ?? 0)} rams his cock full force into you, stabbing it through your hymen and sending waves of agony through you.`);
      scene.text('"... virgin..." you whimper helplessly, tears running down your cheeks.');
    }
    // TODO-QSP: gs 'sex_ev_<<$sex_ev[''pos'']>>', '<<$sex_ev[''pos'']>>_goto'
  } else {
    if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] >= (Math.floor(Math.random() * 10) + 1)  ||  (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
      if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Wait!" you yelp. "Knock it off! You know I\'m saving my virginity!"');
      } else {
        scene.text('"Wait!" you yelp. "I\'m a virgin! You can\'t!"');
      }
      qspCall(s, 'arousal', 'foreplay', (-5));
      // TODO-QSP: dynamic text: <<$npcdesc>> can't stop moving, rubbing his cock against your pussy lips.
      scene.text(`${((s as any).npcdesc ?? 0)} can't stop moving, rubbing his cock against your pussy lips.`);
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Come on," he whispers. "I\'m so fucking hard right now... Just let me fuck you already..."');
      } else {
        if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>..." he whispers. "Please... I want to be your first time so b...
          scene.text(`"${((s as any).pcs_nickname ?? 0)}..." he whispers. "Please... I want to be your first time so bad..."`);
        } else {
          scene.text('"Come on," he whispers. "Just lose it already. It\'ll feel <i>really</i> good..."');
        }
      }
      qspCall(s, 'sex_ev_virgin', 'anal_instead');
      scene.actions([
        { label: 'No way!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['virgin_deny'] = (((s as any).sex_ev ?? {})['virgin_deny'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['no_sex'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No means no!" You snap your legs closed and turn your face away. "Take it for an answer already."');
    scene.text('He pulls back with a sigh.');
    qspCall(s, 'sex_ev_virgin', 'change_mind');
  } },
        { label: 'Well...', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
    scene.text('<i>Well...</i> You moan softly under his touch. It feels <i>so good.</i> What if... you just... let him...');
    // TODO-QSP: dynamic text: <<$npcdesc>> gently pushes your legs open and his hardon rubs up against your sn...
    scene.text(`${((s as any).npcdesc ?? 0)} gently pushes your legs open and his hardon rubs up against your snatch.`);
    qspCall(s, 'sex_ev_condoms', 'virgin_condom_ask1');
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
        { label: 'Hesitate', handler: (st: GameState) => {
    if (((s as any).pcs_horny ?? 0) >= 60) {
      ((s as any).sex_ev ?? {})['hesitate_describe'] = 'You hesitate, heart pounding in your chest, unsure of whether you want him to do. The hardness of his cock caresses the folds of your pussy, rubbing up against your clit. And you can\'t deny how turned on you are right now. You can see your wetness glisten on his shaft, coating it in a viscous sheen. But is this how you want your first time to go? Like this? With ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_virgin" }) + '?';
    } else {
      ((s as any).sex_ev ?? {})['hesitate_describe'] = 'You hesitate, heart pounding in your chest, unsure of whether you want him to do. The hardness of his cock caresses the folds of your pussy, rubbing up against your clit. Is this how you want your first time to go? Like this? With ' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_virgin" }) + '?';
    }
    if (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
      // TODO-QSP: $sex_ev['hesitate_describe']
      // TODO-QSP: dynamic text: But before you can come to a conclusion, <<$npcdesc>> seems to take your hesitat...
      scene.text(`But before you can come to a conclusion, ${((s as any).npcdesc ?? 0)} seems to take your hesitation as acquiescence. With one last slide across your snatch, he pushes himself into you, and you can already feel his head stretching your entrance.`);
      scene.actions([
        { label: 'Stop him!', goto: ['sex_ev_virgin', 'virgin_force_stop'] },
        { label: 'Let it happen', goto: ['sex_ev_virgin', 'virgin_force_happen'] },
        { label: 'Panic!', goto: ['sex_ev_virgin', 'virgin_force_panic'] },
      ]);
    } else {
      scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
      // TODO-QSP: $sex_ev['hesitate_describe']
      qspCall(s, 'sex_ev_virgin', 'anal_instead');
      scene.actions([
        { label: 'Say no', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "No," you sigh, pushing <<$npcdesc>> away. "I can't do it."
    scene.text(`"No," you sigh, pushing ${((s as any).npcdesc ?? 0)} away. "I can't do it."`);
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    qspCall(s, 'sex_ev_virgin', 'anal_instead');
  } },
        { label: '"Okay"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['position'] = 'miss';
    scene.text('"Okay," you say in a small voice, not even a whisper.');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> looks down at you eagerly.
    scene.text(`"What?" ${((s as any).npcdesc ?? 0)} looks down at you eagerly.`);
    scene.text('"Okay," you say, a little louder, and with trembling nerves spread your thighs a little wider. "Just put it in me."');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((s as any).npcdesc ?? 0)} grabs a condom off his nightstand.`);
      qspCall(s, 'sex_ev_condoms', 'virgin_condom1');
    } else {
      // TODO-QSP: dynamic text: You spread your legs for him and moments later, <<$npcdesc>> takes your virginit...
      scene.text(`You spread your legs for him and moments later, ${((s as any).npcdesc ?? 0)} takes your virginity.`);
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_virgin', 'his_choice'
  } },
      ]);
    }
  } },
        { label: 'Smile (yes)', handler: (st: GameState) => {
    scene.text('"Okay," you say in a small voice, with a smile creeping across your face.');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> looks down at you eagerly.
    scene.text(`"What?" ${((s as any).npcdesc ?? 0)} looks down at you eagerly.`);
    scene.text('"Okay," you say, heart pounding in your chest now with excitement, and spread your legs. "You convinced me. Put it in."');
    ((s as any).sex_ev ?? {})['position'] = 'miss';
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((s as any).npcdesc ?? 0)} grabs a condom off his nightstand.`);
      qspCall(s, 'sex_ev_condoms', 'virgin_condom1');
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_virgin', 'his_choice'
  } },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    } else {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Wait!" you yelp. "Knock it off! You know I\'m saving my virginity!"');
        scene.text('"Sorry. I got caught up in the moment. I forgot."');
      } else {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
          scene.text('"Wait!" you yelp. "I\'m a virgin! You can\'t!"');
          scene.text('"Oh. I didn\'t realize. You realize that we\'re fuckbuddies right?"');
          scene.text('"A girl can have fun while saving herself for marriage."');
          scene.text('"Well what do you want to do instead?"');
        } else {
          scene.text('"Wait!" you yelp. "I\'m a virgin! You can\'t!"');
          scene.text('"Well what do you want to do instead?"');
        }
      }
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_virgin', 'anal_instead');
    }
  }
  scene.build();
}

function enterNotReady(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'I\'m just not sure if I\'m ready', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m just not sure if I\'m ready," you mumble shyly.');
    if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] !== -1) {
      qspCall(s, 'sex_ev_virgin', 'buy_virginity1');
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Well... we don\'t have to if you\'re not ready. We can do something else."');
        qspCall(s, 'sex_ev_virgin', 'want_to');
        qspCall(s, 'sex_ev_virgin', 'bj_instead');
        scene.actions([
          { label: 'If that\'s really okay', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_sex'] = 1;
    if (((s as any).sex_ev ?? 0)?.['cum_count'] > 0) {
      scene.text('"Are you sure?" you ask. "I feel kind of bad now... we got this far and all..."');
      scene.text('"Yeah of course. It\'s your body, your choice. I can\'t <i>make</i> you fuck me. Besides, you already got me off earlier. It\'s not like you\'d be blueballing me if we stopped now."');
      scene.text('"If it\'s really okay then..."');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    } else {
      scene.text('"Are you sure?" you ask. "I feel kind of bad now... we got this far and all..."');
      scene.text('"Yeah of course. It\'s your body, your choice."');
      scene.text('"If it\'s really okay then..."');
      // TODO-QSP: dynamic text: "Maybe..." <<$npcdesc>> seems hesitant to say something. "Maybe you could give m...
      scene.text(`"Maybe..." ${((s as any).npcdesc ?? 0)} seems hesitant to say something. "Maybe you could give me a blowjob?"`);
      scene.actions([
        { label: 'Sounds fair', handler: (st: GameState) => {
    scene.text('"Yeah," you smile. "That sounds fair."');
    scene.text('You wiggle down the bed and lean down to get between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Seriously? We get right here and you're going to call it quits?" <<$npcdesc>> s...
          scene.text(`"Seriously? We get right here and you're going to call it quits?" ${((s as any).npcdesc ?? 0)} seems furious.`);
          qspCall(s, 'sex_ev_virgin', 'want_to');
          qspCall(s, 'sex_ev_virgin', 'bj_instead');
          scene.actions([
            { label: 'I\'m just scared!', handler: (st: GameState) => {
    scene.text('"I\'m jus-" you try to protest before he interrupts, shouting at you.');
    scene.text('<i><b>"Are you fucking kidding me?!"</b></i>');
    scene.text('You recoil slightly in instinctual fear.');
    if (((s as any).temp_rape_variable ?? 0) > 6) {
    } else {
      scene.text('"Get the fuck out!" he shouts again, pointing at the door.');
      scene.text('"But-!"');
      scene.text('"<i>Get out!</i>"');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'scared_exit'] }]);
    }
  } },
          ]);
        } else {
          scene.text('"Uhh... well..."');
          // TODO-QSP: dynamic text: <<$npcdesc>> looks down at himself, almost as if contemplating what to do with h...
          scene.text(`${((s as any).npcdesc ?? 0)} looks down at himself, almost as if contemplating what to do with his solidly erect dick.`);
          scene.text('"Soooo... you <i>don\'t</i> want to have sex...?');
          qspCall(s, 'sex_ev_virgin', 'want_to');
          qspCall(s, 'sex_ev_virgin', 'bj_instead');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterWantTo(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'No, I want to', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/foreplay/miss1.jpg');
      scene.text('"No, no," you shake your head. "I want to. I was just getting cold feet."');
      // TODO-QSP: dynamic text: You spread your legs wider, tugging on <<$npcdesc>>'s cock, beckoning him in.
      scene.text(`You spread your legs wider, tugging on ${((s as any).npcdesc ?? 0)}'s cock, beckoning him in.`);
      scene.actions([
        { label: 'Lose your virginity', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_virgin', 'miss_virg_norm1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_virgin', 'miss_virg_hard1'] }]);
    }
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/foreplay/doggy1.jpg');
        scene.text('"No, no," you shake your head. "I want to. I was just getting cold feet."');
        scene.text('You adjust your knees, spreading your legs a little wider and squaring your shoulders to look forward.');
        scene.actions([
          { label: 'Lose your virginity', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_virgin', 'doggy_virg_norm1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_virgin', 'doggy_virg_hard1'] }]);
    }
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
          scene.text('"No, no," you shake your head. "I want to. I was just getting cold feet."');
          scene.text('You scoot forward, raising your hips so you\'re right over his cock. You grab hold of it and begin guiding it inside you.');
          scene.actions([
            { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'cowgirl_virg_norm1'] },
          ]);
        }
      }
    }
    scene.text('"Let\'s do this. Make me a woman."');
  } },
  ]);
  scene.build();
}

function enterBjInstead(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Can I just blow you', handler: (st: GameState) => {
    scene.text('"Can I just blow you instead?"');
    if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('"Ugh fine, but it better be good." He grabs you roughly by the head and shoves you down towards his crotch.');
        scene.actions([
          { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
        ]);
      } else {
        scene.text('"No, it\'s fuck or nothing! So what\'s it gonna be?"');
        scene.actions([
          { label: 'Don\'t give in', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"... nothing then."');
    scene.text('<i><b>"Are you fucking kidding me?!"</b></i> he screams.');
    scene.text('You recoil from him in fear.');
    if (((s as any).temp_rape_variable ?? 0) > 6) {
    } else {
      scene.text('"Get the fuck out!" he shouts again, pointing at the door.');
      scene.text('"But-!"');
      scene.text('"<i>Get out!</i>"');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'scared_exit'] }]);
    }
  } },
          { label: 'Give in', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/foreplay/miss1.jpg');
      // TODO-QSP: dynamic text: Unable to summon the will to say no, you nod and spread your legs, allowing <<$n...
      scene.text(`Unable to summon the will to say no, you nod and spread your legs, allowing ${((s as any).npcdesc ?? 0)} to eagerly push his cock inside you.`);
      scene.actions([
        { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'miss_virg_hard1'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/foreplay/doggy1.jpg');
        // TODO-QSP: dynamic text: Unable to summon the will to say no, you nod and turn around. You bite your lip ...
        scene.text(`Unable to summon the will to say no, you nod and turn around. You bite your lip in apprehension as you feel ${((s as any).npcdesc ?? 0)} push his cock inside you.`);
        scene.actions([
          { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'doggy_virg_hard1'] },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
          scene.text('Unable to summon the will to say no, you nod and raise your hips again. You bite your lip in apprehension as you slowly lower yourself down onto his cock.');
          scene.actions([
            { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'cowgirl_virg_norm1'] },
          ]);
        }
      }
    }
  } },
        ]);
      }
    } else {
      scene.text('"Well, I\'ll never say no to a blowjob."');
      scene.text('"Thanks," you smile. With that, you scoot down the bed and lean down, lowering your head between his legs.');
      scene.actions([
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterAnalInstead(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'What about anal instead?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['anal_allowed'] = 1;
    scene.text('"Well... how about anal instead?"');
    if (((s as any).npc_anal_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> pauses.
      scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} pauses.`);
      scene.text('"Wait, really?"');
      if ((!((s as any).pcs_ass ?? 0))) {
        scene.text('"I\'m an anal virgin too," you admit. "But it\'s not as important to me as my <i>virginity</i>."');
      } else {
        scene.text('"It\'s nothing I haven\'t done before," you smirk.');
      }
    } else {
      scene.text('"Well, I won\'t say no to that," he grins.');
    }
    // TODO-QSP: act'Bend over': gt 'sex_ev_anal', 'anal_start'
  } },
  ]);
  scene.build();
}

function enterVirginForceStop(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: "No!" you cry, and push <<$npcdesc>> off of you.
  scene.text(`"No!" you cry, and push ${((s as any).npcdesc ?? 0)} off of you.`);
  scene.actions([
    { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/shared/sex_after/wakeup_shock3.mp4');
    // TODO-QSP: dynamic text: "No!" you cry, and push <<$npcdesc>> off of you.
    scene.text(`"No!" you cry, and push ${((s as any).npcdesc ?? 0)} off of you.`);
    scene.text('Right after you do, you suddenly feel a jolt of guilt.');
    scene.text('"Sorry," you shudder, jittery from your violent reaction and the adrenaline spike that came with it. "I didn\'t mean to be so... I\'m just not..."');
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      // TODO-QSP: dynamic text: The look of shock on <<$npcdesc>>'s face quickly darkens into anger.
      scene.text(`The look of shock on ${((s as any).npcdesc ?? 0)}'s face quickly darkens into anger.`);
      scene.text('"Get the fuck out," he sneers.');
      scene.text('"But-"');
      scene.text('"OUT!" he screams.');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_leave', 'scared_exit'] }]);
    } else {
      ((s as any).sex_ev ?? {})['fuck_locked'] = 1;
      // TODO-QSP: dynamic text: "No, no, I'm sorry," <<$npcdesc>> says quickly, looking mollified. "It's my faul...
      scene.text(`"No, no, I'm sorry," ${((s as any).npcdesc ?? 0)} says quickly, looking mollified. "It's my fault, I was pushing too hard. I didn't mean to-"`);
      scene.actions([
        { label: 'Forgive him', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"It\'s okay," you mumble, giving a half-sad smile. "Maybe we could do something else...?"');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    }
  } },
  ]);
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
    case 'lover_wait':
      enterLoverWait(s, scene);
      break;
    case 'not_ready':
      enterNotReady(s, scene);
      break;
    case 'want_to':
      enterWantTo(s, scene);
      break;
    case 'bj_instead':
      enterBjInstead(s, scene);
      break;
    case 'anal_instead':
      enterAnalInstead(s, scene);
      break;
    case 'virgin_force_stop':
      enterVirginForceStop(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_virgin: LocationDef = {
  name: 'sex_ev_virgin',
  title: '"Okay," you whisper, spreading your legs, gasping when his f',
  region: 'other',
  enter: enter,
};
