import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Ask ' + String(((s as any).npcdesc ?? '') ?? '') + ' to take your virginity', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: With a fast beating heart, you turn to look at <<$npcdesc>>.
    scene.text(`With a fast beating heart, you turn to look at ${((st as any).npcdesc ?? '')}.`);
    // TODO-QSP: dynamic text: "<<$npcdesc>>... I want you to take my virginity."
    scene.text(`"${((st as any).npcdesc ?? '')}... I want you to take my virginity."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStartFlavor(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStartOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterStart2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Give ' + String(((s as any).npcdesc ?? '') ?? '') + ' your virginity', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Well..." You bite your lip, heart pounding inside your chest, mulling over what you\'re about to say. "What if... I let you fuck me?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStartFlavor(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStartOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterStart3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  // TODO-QSP: dynamic text: Your breath catches in your throat as <<$npcdesc>> moves closer and closer. Your...
  scene.text(`Your breath catches in your throat as ${((s as any).npcdesc ?? '')} moves closer and closer. Your pussy feels like it's on fire. You want it so badly that it <i>hurts</i>.`);
  scene.text('"Okay," you whisper, spreading your legs, gasping when his fingers find your dripping lips. "You can have it. Take my virginity."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartFlavor(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterStart4(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: Your breath catches in your throat as <<$npcdesc>> moves closer and closer. You ...
  scene.text(`Your breath catches in your throat as ${((s as any).npcdesc ?? '')} moves closer and closer. You know what you told him before. You know that you want to save it. But right now, you just can't hold yourself back. Your pussy feels like it's on fire. You want it so badly that it <i>hurts</i>.`);
  scene.text('"Okay," you whisper, spreading your legs, gasping when his fingers find your dripping lips. "You can have me."');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartFlavor(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterStart5(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterStartOptions(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).orgasm ?? 0);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_fuck'] = 1;
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
  // TODO-QSP: end
  scene.build();
}

function enterStartWithCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['using_pc_condoms'] === 1) {
    qspCall(s, 'sex_ev_stats', 'pc_condom_stats');
  } else {
    qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
  }
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
    // TODO-QSP: dynamic text: With the condom securely wrapped around <<$npcdesc>>''s cock, he moves back in b...
    scene.text(`With the condom securely wrapped around ${((s as any).npcdesc ?? '')}'s cock, he moves back in between your legs before he stops, hesitating.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartOptions2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: With the condom securely wrapped around <<$npcdesc>>''s cock, he moves back in b...
    scene.text(`With the condom securely wrapped around ${((s as any).npcdesc ?? '')}'s cock, he moves back in between your legs.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVirgStart(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStartWithoutCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((Math.floor(Math.random() * 2) + 1) === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
    // TODO-QSP: dynamic text: <<$npcdesc>> moves back in between your legs before he stops, hesitating.
    scene.text(`${((s as any).npcdesc ?? '')} moves back in between your legs before he stops, hesitating.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterStartOptions2(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> moves back in, lining his naked cock up with your pussy. Moments la...
    scene.text(`${((s as any).npcdesc ?? '')} moves back in, lining his naked cock up with your pussy. Moments later, he takes your virginity.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMissVirgStart(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStartOptions2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm_count'] = ((s as any).orgasm ?? 0);
  scene.text('"Did you want to decide how we do this?" he asks. "It\'s <i>your</i> first time after all."');
  // TODO-QSP: end
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
    qspGoto(s, 'sex_ev_virgin', 'lover_wait');
  }
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('"Knock it off," you shake your head. "You know I\'m saving my virginity."');
  } else {
    ((s as any).know_virgin = (s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 1;
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalInstead(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Saving it for marriage', handler: (st: GameState) => {
    scene.text('"Sorry," you say, denying him. "I\'ve got to stay a virgin until I get married."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangeMind(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: '', labelFn: (s: GameState) => 'Saving it for marriage (' + String(((s as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? '') + ' says)', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Sorry," you say, denying him. "I''ve got to stay a virgin until I get married. ...
    scene.text(`"Sorry," you say, denying him. "I've got to stay a virgin until I get married. ${((st as any).npc_nickname ?? 0)?.['A29'] ?? ''}'s orders."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangeMind(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Waiting for the right guy', handler: (st: GameState) => {
    scene.text('"Nope," you say, denying him. "I\'m waiting for the right guy. Sorry to say but I don\'t think you\'re him."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangeMind(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Well...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t wait for your permission and starts rubbing his cock again...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't wait for your permission and starts rubbing his cock against your pussy lips.`);
    scene.text('You\'re about to protest when his tip rubs right against your clit and a wave of pleasure flushes through your hips, causing an involuntary moan. Your judgement starts to get clouded, your willpower eroded.');
    scene.text('<i>Well...</i> You moan softly under his touch. It feels <b>so good.</b> <i>What if... I just... let him...</i>');
    // TODO-QSP: dynamic text: <<$npcdesc>> gently pushes your legs open. You can feel his hardon rubbing right...
    scene.text(`${((st as any).npcdesc ?? '')} gently pushes your legs open. You can feel his hardon rubbing right against your clit.`);
    qspCall(st, 'sex_ev_condoms', 'virgin_condom_ask1');
    qspCall(st, 'sex_ev_condoms', 'virgin_condom_pc_ask1');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((st as any).npcdesc ?? '') ?? '') + ' take your virginity', handler: (st: GameState) => {
    scene.text('"Okay," you whisper. "Put it in."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((st as any).npcdesc ?? '')} grabs a condom off his nightstand.`);
      qspCall(st, 'sex_ev_condoms', 'virgin_condom1');
    } else {
      // TODO-QSP: dynamic text: You spread your legs for him and moments later, <<$npcdesc>> takes your virginit...
      scene.text(`You spread your legs for him and moments later, ${((st as any).npcdesc ?? '')} takes your virginity.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMissVirgStart(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
      ]);
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_sex'] = 1;
      // TODO-QSP: dynamic text: "Oh," <<$npcdesc>> seems taken aback. "Sorry, I didn''t realize. Did you want to...
      scene.text(`"Oh," ${((s as any).npcdesc ?? '')} seems taken aback. "Sorry, I didn't realize. Did you want to do something else then?"`);
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHookupWait(s: GameState, scene: SceneBuilder): void {
  ((s as any).know_virgin = (s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    // TODO-QSP: dynamic text: "Wait!" you yelp, closing up your legs halfway. <<$npcdesc>> freezes up, body ov...
    scene.text(`"Wait!" you yelp, closing up your legs halfway. ${((s as any).npcdesc ?? '')} freezes up, body over yours, his cock resting against your pussy.`);
    scene.text('"I... I\'m a virgin..."');
    scene.text('"Oh." He slumps backwards, not sure where you\'re going with this.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotReady(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Go slow okay?', handler: (st: GameState) => {
    scene.text('"Just... go slow, okay? I\'m new at this," you smile nervously, spreading your legs again.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and gently pushes cock into your pussy.
    scene.text(`${((st as any).npcdesc ?? '')} nods and gently pushes cock into your pussy.`);
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'miss_virg_norm1'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: "Wait!" you yelp. <<$npcdesc>> freezes up, hands on your ass, and you can feel h...
      scene.text(`"Wait!" you yelp. ${((s as any).npcdesc ?? '')} freezes up, hands on your ass, and you can feel his cock pressing right against your pussy lips.`);
      scene.text('Sitting up and looking over your shoulder to face him, you stammer out, "I... I\'m a virgin..."');
      scene.text('"Oh." He slumps backwards, not sure where you\'re going with this.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotReady(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Go slow okay?', handler: (st: GameState) => {
    scene.text('"Just... go slow, okay? I\'m new at this," you smile nervously.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and you turn back around and hold your breath, feeling him gen...
    scene.text(`${((st as any).npcdesc ?? '')} nods and you turn back around and hold your breath, feeling him gently push his cock into your pussy.`);
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'doggy_virg_norm1'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: "Wait!" you yelp. <<$npcdesc>> freezes up, putting his hands up.
        scene.text(`"Wait!" you yelp. ${((s as any).npcdesc ?? '')} freezes up, putting his hands up.`);
        scene.text('Still resting your thighs on top of his, you stammer out, "I... I\'m a virgin..."');
        scene.text('"Oh." He relaxes back onto the bed underneath you, not sure where you\'re going with this.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotReady(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Go slow okay?', handler: (st: GameState) => {
    scene.text('"Just... go slow, okay? I\'m new at this," you smile nervously.');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods and you raise your hips again, biting your lip in apprehension...
    scene.text(`${((st as any).npcdesc ?? '')} nods and you raise your hips again, biting your lip in apprehension as you slowly lower yourself down onto his cock.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterLoverWait(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    qspGoto(s, 'sex_ev_virgin', 'hookup_wait');
  }
  if (((s as any).WIP_enabled ?? 0) > 0  &&  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rape_ev'] = 1;
    scene.img('images/shared/sex/vag/miss/3.jpg');
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Wait!" you yelp. "Knock it off! You know I\'m saving my virg-!"');
      // TODO-QSP: dynamic text: Your protests cut off in a choked scream as <<$npcdesc>> rams his cock full forc...
      scene.text(`Your protests cut off in a choked scream as ${((s as any).npcdesc ?? '')} rams his cock full force into you, stabbing it through your hymen and sending waves of agony through you. Tears well up in your eyes as you look up at ${((s as any).npcdesc ?? '')}, horrified at what he's done.`);
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
      scene.text(`Your protests cut off in a choked scream as ${((s as any).npcdesc ?? '')} rams his cock full force into you, stabbing it through your hymen and sending waves of agony through you.`);
      scene.text('"... virgin..." you whimper helplessly, tears running down your cheeks.');
    }
    qspCall(s, 'sex_ev_' + ((s as any).sex_ev ?? 0)?.['pos'] + '', '' + ((s as any).sex_ev ?? 0)?.['pos'] + '_goto');
  } else {
    if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] >= (Math.floor(Math.random() * 10) + 1)  ||  (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
      if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Wait!" you yelp. "Knock it off! You know I\'m saving my virginity!"');
      } else {
        scene.text('"Wait!" you yelp. "I\'m a virgin! You can\'t!"');
      }
      qspCall(s, 'arousal', 'foreplay', (-5));
      // TODO-QSP: dynamic text: <<$npcdesc>> can''t stop moving, rubbing his cock against your pussy lips.
      scene.text(`${((s as any).npcdesc ?? '')} can't stop moving, rubbing his cock against your pussy lips.`);
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Come on," he whispers. "I\'m so fucking hard right now... Just let me fuck you already..."');
      } else {
        if (((s as any).npc_gentle_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>..." he whispers. "Please... I want to be your first time so b...
          scene.text(`"${((s as any).pcs_nickname ?? '')}..." he whispers. "Please... I want to be your first time so bad..."`);
        } else {
          scene.text('"Come on," he whispers. "Just lose it already. It\'ll feel <i>really</i> good..."');
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalInstead(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'No way!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_deny'] = ((st as any).sex_ev['virgin_deny'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_sex'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No means no!" You snap your legs closed and turn your face away. "Take it for an answer already."');
    scene.text('He pulls back with a sigh.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterChangeMind(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Well...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
    scene.text('<i>Well...</i> You moan softly under his touch. It feels <i>so good.</i> What if... you just... let him...');
    // TODO-QSP: dynamic text: <<$npcdesc>> gently pushes your legs open and his hardon rubs up against your sn...
    scene.text(`${((st as any).npcdesc ?? '')} gently pushes your legs open and his hardon rubs up against your snatch.`);
    qspCall(st, 'sex_ev_condoms', 'virgin_condom_ask1');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Let ' + String(((st as any).npcdesc ?? '') ?? '') + ' take your virginity', handler: (st: GameState) => {
    scene.text('"Okay," you whisper. "Put it in."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((st as any).npcdesc ?? '')} grabs a condom off his nightstand.`);
      qspCall(st, 'sex_ev_condoms', 'virgin_condom1');
    } else {
      // TODO-QSP: dynamic text: You spread your legs for him and moments later, <<$npcdesc>> takes your virginit...
      scene.text(`You spread your legs for him and moments later, ${((st as any).npcdesc ?? '')} takes your virginity.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMissVirgStart(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
        { label: 'Hesitate', handler: (st: GameState) => {
    if (((st as any).pcs_horny ?? 0) >= 60) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['hesitate_describe'] = 'You hesitate, heart pounding in your chest, unsure of whether you want him to do. The hardness of his cock caresses the folds of your pussy, rubbing up against your clit. And you can\'t deny how turned on you are right now. You can see your wetness glisten on his shaft, coating it in a viscous sheen. But is this how you want your first time to go? Like this? With ' + ((st as any).npcdesc ?? 0) + '?';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['hesitate_describe'] = 'You hesitate, heart pounding in your chest, unsure of whether you want him to do. The hardness of his cock caresses the folds of your pussy, rubbing up against your clit. Is this how you want your first time to go? Like this? With ' + ((st as any).npcdesc ?? 0) + '?';
    }
    if (((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
      // TODO-QSP: $sex_ev['hesitate_describe']
      // TODO-QSP: dynamic text: But before you can come to a conclusion, <<$npcdesc>> seems to take your hesitat...
      scene.text(`But before you can come to a conclusion, ${((st as any).npcdesc ?? '')} seems to take your hesitation as acquiescence. With one last slide across your snatch, he pushes himself into you, and you can already feel his head stretching your entrance.`);
      scene.actions([
        { label: 'Stop him!', goto: ['sex_ev_virgin', 'virgin_force_stop'] },
        { label: 'Let it happen', goto: ['sex_ev_virgin', 'virgin_force_happen'] },
        { label: 'Panic!', goto: ['sex_ev_virgin', 'virgin_force_panic'] },
      ]);
    } else {
      scene.img('images/shared/sex/vag/miss/pussyhump.mp4');
      // TODO-QSP: $sex_ev['hesitate_describe']
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Say no', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "No," you sigh, pushing <<$npcdesc>> away. "I can''t do it."
    scene.text(`"No," you sigh, pushing ${((st as any).npcdesc ?? '')} away. "I can't do it."`);
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: '"Okay"', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
    scene.text('"Okay," you say in a small voice, not even a whisper.');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> looks down at you eagerly.
    scene.text(`"What?" ${((st as any).npcdesc ?? '')} looks down at you eagerly.`);
    scene.text('"Okay," you say, a little louder, and with trembling nerves spread your thighs a little wider. "Just put it in me."');
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((st as any).npcdesc ?? '')} grabs a condom off his nightstand.`);
      qspCall(st, 'sex_ev_condoms', 'virgin_condom1');
    } else {
      // TODO-QSP: dynamic text: You spread your legs for him and moments later, <<$npcdesc>> takes your virginit...
      scene.text(`You spread your legs for him and moments later, ${((st as any).npcdesc ?? '')} takes your virginity.`);
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
    scene.text(`"What?" ${((st as any).npcdesc ?? '')} looks down at you eagerly.`);
    scene.text('"Okay," you say, heart pounding in your chest now with excitement, and spread your legs. "You convinced me. Put it in."');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['position'] = 'miss';
    if (((st as any).npc_condom_conscious ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs a condom off his nightstand.
      scene.text(`${((st as any).npcdesc ?? '')} grabs a condom off his nightstand.`);
      qspCall(st, 'sex_ev_condoms', 'virgin_condom1');
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
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalInstead(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNotReady(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m just not sure if I\'m ready', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m just not sure if I\'m ready," you mumble shyly.');
    if (((st as any).npc_finance ?? 0)?.[String((st as any).npcID ?? 0)] === 2  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1  &&  ((st as any).npc_assertive ?? 0)?.[String((st as any).npcID ?? 0)] !== -1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyVirginity1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('"Well... we don\'t have to if you\'re not ready. We can do something else."');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantTo(st, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'If that\'s really okay', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_sex'] = 1;
    if (((st as any).sex_ev ?? 0)?.['cum_count'] > 0) {
      scene.text('"Are you sure?" you ask. "I feel kind of bad now... we got this far and all..."');
      scene.text('"Yeah of course. It\'s your body, your choice. I can\'t <i>make</i> you fuck me. Besides, you already got me off earlier. It\'s not like you\'d be blueballing me if we stopped now."');
      scene.text('"If it\'s really okay then..."');
      qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
    } else {
      scene.text('"Are you sure?" you ask. "I feel kind of bad now... we got this far and all..."');
      scene.text('"Yeah of course. It\'s your body, your choice."');
      scene.text('"If it\'s really okay then..."');
      // TODO-QSP: dynamic text: "Maybe..." <<$npcdesc>> seems hesitant to say something. "Maybe you could give m...
      scene.text(`"Maybe..." ${((st as any).npcdesc ?? '')} seems hesitant to say something. "Maybe you could give me a blowjob?"`);
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
        if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Seriously? We get right here and you''re going to call it quits?" <<$npcdesc>> ...
          scene.text(`"Seriously? We get right here and you're going to call it quits?" ${((st as any).npcdesc ?? '')} seems furious.`);
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantTo(st, scene); (st as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
          scene.actions([
            { label: 'I\'m just scared!', handler: (st: GameState) => {
    scene.text('"I\'m jus-" you try to protest before he interrupts, shouting at you.');
    scene.text('<i><b>"Are you fucking kidding me?!"</b></i>');
    scene.text('You recoil slightly in instinctual fear.');
    if (((st as any).temp_rape_variable ?? 0) > 6) {
    } else {
      scene.text('"Get the fuck out!" he shouts again, pointing at the door.');
      scene.text('"But-!"');
      scene.text('"<i>Get out!</i>"');
      qspGoto(st, 'sex_ev_leave', 'scared_exit');
    }
  } },
          ]);
        } else {
          scene.text('"Uhh... well..."');
          // TODO-QSP: dynamic text: <<$npcdesc>> looks down at himself, almost as if contemplating what to do with h...
          scene.text(`${((st as any).npcdesc ?? '')} looks down at himself, almost as if contemplating what to do with his solidly erect dick.`);
          scene.text('"Soooo... you <i>don\'t</i> want to have sex...?');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantTo(st, scene); (st as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterWantTo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No, I want to', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/foreplay/miss1.jpg');
      scene.text('"No, no," you shake your head. "I want to. I was just getting cold feet."');
      // TODO-QSP: dynamic text: You spread your legs wider, tugging on <<$npcdesc>>''s cock, beckoning him in.
      scene.text(`You spread your legs wider, tugging on ${((st as any).npcdesc ?? '')}'s cock, beckoning him in.`);
      scene.actions([
        { label: 'Lose your virginity', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspGoto(st, 'sex_ev_virgin', 'miss_virg_norm1');
    } else {
      qspGoto(st, 'sex_ev_virgin', 'miss_virg_hard1');
    }
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/foreplay/doggy1.jpg');
        scene.text('"No, no," you shake your head. "I want to. I was just getting cold feet."');
        scene.text('You adjust your knees, spreading your legs a little wider and squaring your shoulders to look forward.');
        scene.actions([
          { label: 'Lose your virginity', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspGoto(st, 'sex_ev_virgin', 'doggy_virg_norm1');
    } else {
      qspGoto(st, 'sex_ev_virgin', 'doggy_virg_hard1');
    }
  } },
        ]);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Can I just blow you', handler: (st: GameState) => {
    scene.text('"Can I just blow you instead?"');
    if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
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
    if (((st as any).temp_rape_variable ?? 0) > 6) {
    } else {
      scene.text('"Get the fuck out!" he shouts again, pointing at the door.');
      scene.text('"But-!"');
      scene.text('"<i>Get out!</i>"');
      qspGoto(st, 'sex_ev_leave', 'scared_exit');
    }
  } },
          { label: 'Give in', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/foreplay/miss1.jpg');
      // TODO-QSP: dynamic text: Unable to summon the will to say no, you nod and spread your legs, allowing <<$n...
      scene.text(`Unable to summon the will to say no, you nod and spread your legs, allowing ${((st as any).npcdesc ?? '')} to eagerly push his cock inside you.`);
      scene.actions([
        { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'miss_virg_hard1'] },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/foreplay/doggy1.jpg');
        // TODO-QSP: dynamic text: Unable to summon the will to say no, you nod and turn around. You bite your lip ...
        scene.text(`Unable to summon the will to say no, you nod and turn around. You bite your lip in apprehension as you feel ${((st as any).npcdesc ?? '')} push his cock inside you.`);
        scene.actions([
          { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'doggy_virg_hard1'] },
        ]);
      } else {
        if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
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
  // TODO-QSP: end
  scene.actions([
    { label: 'What about anal instead?', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_allowed'] = 1;
    scene.text('"Well... how about anal instead?"');
    if (((st as any).npc_anal_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> pauses.
      scene.text(`${(((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} pauses.`);
      scene.text('"Wait, really?"');
      if ((!((st as any).pcs_ass ?? 0))) {
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
  scene.text(`"No!" you cry, and push ${((s as any).npcdesc ?? '')} off of you.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Apologize', handler: (st: GameState) => {
    scene.img('images/shared/sex_after/wakeup_shock3.mp4');
    // TODO-QSP: dynamic text: "No!" you cry, and push <<$npcdesc>> off of you.
    scene.text(`"No!" you cry, and push ${((st as any).npcdesc ?? '')} off of you.`);
    scene.text('Right after you do, you suddenly feel a jolt of guilt.');
    scene.text('"Sorry," you shudder, jittery from your violent reaction and the adrenaline spike that came with it. "I didn\'t mean to be so... I\'m just not..."');
    if (((st as any).npc_rel_goal ?? 0)?.[String((st as any).npcID ?? 0)] === 'sex'  &&  (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      // TODO-QSP: dynamic text: The look of shock on <<$npcdesc>>''s face quickly darkens into anger.
      scene.text(`The look of shock on ${((st as any).npcdesc ?? '')}'s face quickly darkens into anger.`);
      scene.text('"Get the fuck out," he sneers.');
      scene.text('"But-"');
      scene.text('"OUT!" he screams.');
      qspGoto(st, 'sex_ev_leave', 'scared_exit');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_locked'] = 1;
      // TODO-QSP: dynamic text: "No, no, I''m sorry," <<$npcdesc>> says quickly, looking mollified. "It''s my fa...
      scene.text(`"No, no, I'm sorry," ${((st as any).npcdesc ?? '')} says quickly, looking mollified. "It's my fault, I was pushing too hard. I didn't mean to-"`);
      scene.actions([
        { label: 'Forgive him', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"It\'s okay," you mumble, giving a half-sad smile. "Maybe we could do something else...?"');
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterVirginForceHappen(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_pushed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss2';
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  scene.img('images/shared/sex/vag/miss/blood1.jpg');
  scene.text('"Wait a minute! I-!"');
  // TODO-QSP: dynamic text: <<$npcdesc>> thrusts his full length inside you and the next word of whatever yo...
  scene.text(`${((s as any).npcdesc ?? '')} thrusts his full length inside you and the next word of whatever you were going to say is choked off by a <i>stab</i> of pain in between your thighs. Your mouth is frozen in a silent gasp of both pain and shock and when you look down, you see a glistening red coating ${((s as any).npcdesc ?? '')}'s shaft and with it, a realization.`);
  scene.text('You just lost your virginity.');
  // TODO-QSP: dynamic text: <<$npcdesc>> grins at you.
  scene.text(`${((s as any).npcdesc ?? '')} grins at you.`);
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"Congratulations."');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/med4.mp4"></video></center>';
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: <<$npcdesc>> starts pumping his cock in and out of you at a steady pace, causing...
    scene.text(`${((st as any).npcdesc ?? '')} starts pumping his cock in and out of you at a steady pace, causing squelching from your bloodied pussy with every thrust. After a minute or two, you think...`);
    qspGoto(st, 'sex_ev_virgin', 'virgin_enjoyment');
  } },
  ]);
  scene.build();
}

function enterVirginForcePanic(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_pushed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss2';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  scene.img('images/shared/sex/vag/miss/enter2.mp4');
  scene.text('"Ahh! <i>Ahh! <b>Ahh! AHH!</b></i>"');
  // TODO-QSP: dynamic text: Your voice increases in pitch as your eyes increase in size, watching <<$npcdesc...
  scene.text(`Your voice increases in pitch as your eyes increase in size, watching ${((s as any).npcdesc ?? '')} penetrates your pussy. It's as if you can feel each and every millimeter of his cock as it slides in until-`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Eek!', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    scene.img('images/shared/sex/vag/miss/blood1.jpg');
    scene.text('"<i>Eek!</i>"');
    scene.text('Your pitched noises turn into a sharp squeak as you feel something <i>rip</i> inside of you and your head snaps back into the pillow. Looking back down, you see tints of red glistening on his cock and it comes to a realization all at once.');
    scene.text('You just lost your virginity.');
    // TODO-QSP: dynamic text: <<$npcdesc>> grins at you.
    scene.text(`${((st as any).npcdesc ?? '')} grins at you.`);
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Congratulations."');
    }
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/med4.mp4"></video></center>';
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: <<$npcdesc>> starts pumping his cock in and out of you at a steady pace, causing...
    scene.text(`${((st as any).npcdesc ?? '')} starts pumping his cock in and out of you at a steady pace, causing squelching from your bloodied pussy with every thrust. After a minute or two, you think...`);
    qspGoto(st, 'sex_ev_virgin', 'virgin_enjoyment');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBuyVirginity1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['buy_virginity'] = 5;
  scene.img('images/shared/misc/money.jpg');
  scene.text('"Would this change your mind?" He picks up his wallet and pulls several large notes from it.');
  scene.text('"W-what?" you gasp in surprise.');
  // TODO-QSP: dynamic text: "<<$func(''money'', ''string_profit'', 5000)>>," he says. "<<$func(''money'', ''...
  scene.text(`"${qspFunc(s, 'money', 'string_profit', 5000)}," he says. "${qspFunc(s, 'money', 'string_profit', 5000)} to let me take your virginity."`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuyVirginityConsider(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'No way!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "What?! No way!" You gape at <<$npcdesc>> in horror, snapping your legs closed. ...
    scene.text(`"What?! No way!" You gape at ${((st as any).npcdesc ?? '')} in horror, snapping your legs closed. "What on earth kind of offer is that?"`);
    qspGoto(st, 'sex_ev_virgin', 'buy_virginity_bigger_offer');
  } },
    { label: 'I\'m not a hooker!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "What the fuck?" You snap your legs closed as you gape at <<$npcdesc>>''s audaci...
    scene.text(`"What the fuck?" You snap your legs closed as you gape at ${((st as any).npcdesc ?? '')}'s audacity. "What do you think I am? Some kind of hooker?"`);
    scene.text('"Only if you say yes," he smirks.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNotForSale(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyVirginityConsider(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Try to haggle', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "<i>Only</i> <<$func(''money'', ''string_profit'', 5000)>>?" you ask. "Surely my...
    scene.text(`"<i>Only</i> ${qspFunc(s, 'money', 'string_profit', 5000)}?" you ask. "Surely my first time is worth more than that. I've only got one of these after all."`);
    scene.text('A teasing smirk tugs at the corner of your lips.');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['buy_virginity'] = 10;
    // TODO-QSP: dynamic text: "You make a good point," <<$npcdesc>> grins. "How about <<$func(''money'', ''str...
    scene.text(`"You make a good point," ${((st as any).npcdesc ?? '')} grins. "How about ${qspFunc(s, 'money', 'string_profit', 10000)} then?"`);
    scene.text('He counts out twice as many notes and casually tosses them on the bed.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyVirginityConsider(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Not enough', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sorry," you reply. "That\'s not enough for me. Guess you\'re not getting lucky tonight."');
    // TODO-QSP: dynamic text: "Well, let me know if you change your mind," <<$npcdesc>> smirks as he moves the...
    scene.text(`"Well, let me know if you change your mind," ${((st as any).npcdesc ?? '')} smirks as he moves the cash to a bedside table. "But that's fine. We can still have fun without losing your virginity. Why don't we just do this instead?"`);
    if (((st as any).npc_pussyeater ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('He gently pushes you onto your back and spreads your knees apart with his hands, dipping his head between your thighs...');
      scene.actions([
        { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: He puts a firm hand on your shoulder and pushes you to your knees. His <<$dick_d...
      scene.text(`He puts a firm hand on your shoulder and pushes you to your knees. His ${((st as any).dick_desc ?? '')} cock dangles before you as he moves his hand to your head and pulls your face toward it.`);
      scene.actions([
        { label: 'Suck him off', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNotForSale(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Not for sale', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m not for sale!" you snap.');
    if (((st as any).npc_pushy ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).npc_womanizer ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).sex_ev ?? 0)?.['not_for_sale'] !== ((st as any).totminut ?? 0)) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_for_sale'] = ((st as any).totminut ?? 0);
      // TODO-QSP: dynamic text: "Fine. <<$func(''money'', ''string_profit'', 10000)>> then."
      scene.text(`"Fine. ${qspFunc(s, 'money', 'string_profit', 10000)} then."`);
      scene.text('He counts out twice as many notes and casually tosses them on the bed.');
      // TODO-QSP: dynamic text: "Let me fuck you and <<$func(''money'', ''string_profit'', 10000)>> are yours ri...
      scene.text(`"Let me fuck you and ${qspFunc(s, 'money', 'string_profit', 10000)} are yours right now."`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyVirginityConsider(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'No means no!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_deny'] = ((st as any).sex_ev['virgin_deny'] ?? 0) + (1);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I said no already!"');
    // TODO-QSP: dynamic text: "Well, let me know if you change your mind," <<$npcdesc>> smirks as he moves the...
    scene.text(`"Well, let me know if you change your mind," ${((st as any).npcdesc ?? '')} smirks as he moves the cash to a bedside table. "But that's fine. We can still have fun without losing your virginity. Why don't we just do this instead?"`);
    if (((st as any).npc_pussyeater ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('He gently pushes you onto your back and spreads your knees apart with his hands, dipping his head between your thighs...');
      scene.actions([
        { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: He puts a firm hand on your shoulder and pushes you to your knees. His <<$dick_d...
      scene.text(`He puts a firm hand on your shoulder and pushes you to your knees. His ${((st as any).dick_desc ?? '')} cock dangles before you as he moves his hand to your head and pulls your face toward it.`);
      scene.actions([
        { label: 'Suck him off', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  } },
      ]);
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_deny'] = ((st as any).sex_ev['virgin_deny'] ?? 0) + (1);
      // TODO-QSP: dynamic text: "Well, let me know if you change your mind," <<$npcdesc>> smirks as he moves the...
      scene.text(`"Well, let me know if you change your mind," ${((st as any).npcdesc ?? '')} smirks as he moves the cash to a bedside table. "But that's fine. We can still have fun without losing your virginity. Why don't we just do this instead?"`);
      if (((st as any).npc_pussyeater ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.text('He gently pushes you onto your back and spreads your knees apart with his hands, dipping his head between your thighs...');
        scene.actions([
          { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: He puts a firm hand on your shoulder and pushes you to your knees. His <<$dick_d...
        scene.text(`He puts a firm hand on your shoulder and pushes you to your knees. His ${((st as any).dick_desc ?? '')} cock dangles before you as he moves his hand to your head and pulls your face toward it.`);
        scene.actions([
          { label: 'Suck him off', goto: ['sex_ev_foreplay', 'bj_sub1'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBuyVirginityBiggerOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['buy_virginity'] = 10;
  // TODO-QSP: dynamic text: "Fine. <<$func(''money'', ''string_profit'', 10000)>> then."
  scene.text(`"Fine. ${qspFunc(s, 'money', 'string_profit', 10000)} then."`);
  scene.text('He counts out twice as many notes and casually tosses them on the bed.');
  // TODO-QSP: dynamic text: "Let me fuck you and <<$func(''money'', ''string_profit'', 10000)>> are yours ri...
  scene.text(`"Let me fuck you and ${qspFunc(s, 'money', 'string_profit', 10000)} are yours right now."`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNotForSale(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBuyVirginityConsider(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBuyVirginityConsider(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Consider it', handler: (st: GameState) => {
    scene.text('<i>Well...</i>');
    scene.text('You chew your lip as you start to consider it.');
    // TODO-QSP: dynamic text: <i><<$func(''money'', ''string_profit'', sex_ev[''buy_virginity''] * 1000, 1)>> ...
    scene.text(`<i>${qspFunc(s, 'money', 'string_profit', (((st as any).sex_ev ?? {})?.['buy_virginity'] ?? 0) * 1000, 1)} is a lot of money...</i>`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterNotForSale(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBuyVirginityAccept(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBuyVirginityAccept(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take the money (reluctant)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I guess that seems fair..." you say. You hesitantly pick up the cash, a heavy weight in your heart as you put it into your purse.');
    qspGoto(st, 'sex_ev_virgin', 'buy_virginity_accept2');
  } },
    { label: 'Take the money (agreeable)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That seems a fair price," you say slowly. You pick up the cash and slip it into your purse.');
    qspGoto(st, 'sex_ev_virgin', 'buy_virginity_accept2');
  } },
    { label: 'Take the money (surprised)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Well..." you say, hesitantly picking up the cash. "If you\'re really willing to pay this much then..."');
    scene.text('You quickly take the money and slip it into your bag.');
    qspGoto(st, 'sex_ev_virgin', 'buy_virginity_accept2');
  } },
    { label: 'Take the money (eager)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Your eyes go wide for a moment and then you quickly snatch the cash as if afraid he\'ll suddenly change his mind.');
    scene.text('"Damn! If you\'re gonna pay this much, then yeah I\'ll let you fuck me!" you say, giddy as you slip the money into your bag.');
    qspGoto(st, 'sex_ev_virgin', 'buy_virginity_accept2');
  } },
  ]);
  scene.build();
}

function enterBuyVirginityAccept2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'prostitution_init', (((s as any).sex_ev ?? {})?.['buy_virginity'] ?? 0) * 1000);
  qspCall(s, 'sex_ev_stats', 'prostitution_pay_code');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['force_initiative'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['must_fuck_vag'] = 1;
  qspCall(s, 'sex_ev_condoms', 'setup');
  // TODO-QSP: dynamic text: No sooner have you finished than <<$npcdesc>> firmly grabs you by the shoulders ...
  scene.text(`No sooner have you finished than ${((s as any).npcdesc ?? '')} firmly grabs you by the shoulders and pushes you onto the bed.`);
  if ((((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] < 1)  ||  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCondomOffer(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_condoms', 'condoms'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoCondomOffer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "I''ll throw in another <<$func(''money'', ''string_profit'', 5000)>> right now ...
  scene.text(`"I'll throw in another ${qspFunc(s, 'money', 'string_profit', 5000)} right now if we can do it without a condom," he says.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Too far', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
    scene.text('"That\'s too far," you say, shaking your head.');
    scene.text('"Damn," he says ruefully.');
    qspGoto(st, 'sex_ev_condoms', 'condoms');
  } },
    { label: 'Don\'t push it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['condom'] = 1;
    scene.text('"Don\'t push it," you say, giving him a nasty glare.');
    scene.text('"You\'re cute when you\'re mad," he snickers back.');
    qspGoto(st, 'sex_ev_condoms', 'condoms');
  } },
    { label: 'Agree (hesitant)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 5000);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: dynamic text: "O-okay," you stammer. <<$npcdesc>> doesn''t even hesitate and immediately pulls...
    scene.text(`"O-okay," you stammer. ${((st as any).npcdesc ?? '')} doesn't even hesitate and immediately pulls out another ${qspFunc(s, 'money', 'string_profit', 5000)} and slaps it on the bedside table.`);
    scene.text('"This is gonna feel so good," he grins.');
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.text('<i>It should be a safe day anyways...</i> you think to yourself nervously.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.text('<i>It shouldn\'t be <b>too</b> risky today...</i> you think to yourself nervously.');
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
          scene.text('<i>What am I thinking?!</i> you think to yourself panickedly. <i>It\'s a danger day today! I could get pregnant!</i>');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Agree (eager)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 5000);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    scene.text('"It\'s your money," you say with a smirk and a shrug. "I won\'t say no if you want to give me more."');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t even hesitate and immediately pulls out another <<$func(''...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't even hesitate and immediately pulls out another ${qspFunc(s, 'money', 'string_profit', 5000)} and slaps it on the bedside table.`);
    scene.text('"This is gonna feel so good," he grins as he gets into position.');
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.text('<i>It should be a safe day anyways...</i> you think to yourself.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.text('<i>It shouldn\'t be <b>too</b> risky today...</i> you think to yourself.');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Cash up front', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 5000);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    // TODO-QSP: dynamic text: "Only if you pay me up front," you say. <<$npcdesc>> doesn''t even hesitate and ...
    scene.text(`"Only if you pay me up front," you say. ${((st as any).npcdesc ?? '')} doesn't even hesitate and immediately pulls out another ${qspFunc(s, 'money', 'string_profit', 5000)} and slaps it on the bedside table.`);
    scene.text('"All yours," he grins he grins as he gets into position.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'But you can\'t come inside', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_no_condom'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_condom'] = 1;
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] !== 'creampie') {
      qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 5000);
      // TODO-QSP: dynamic text: "Only if you promise not to come inside me," you say. <<$npcdesc>> doesn''t even...
      scene.text(`"Only if you promise not to come inside me," you say. ${((st as any).npcdesc ?? '')} doesn't even hesitate and immediately pulls out another ${qspFunc(s, 'money', 'string_profit', 5000)} and slaps it on the bedside table.`);
      scene.text('"This is gonna feel so good," he grins as he gets into position.');
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
      ]);
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPaidCreampieOffer(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterPaidCreampieOffer(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "But that''s the best part," he grins back. "Fine. Another <<$func(''money'', ''...
  scene.text(`"But that's the best part," he grins back. "Fine. Another ${qspFunc(s, 'money', 'string_profit', 10000)} if you let me come inside you. ${qspFunc(s, 'money', 'string_profit', ((((s as any).sex_ev ?? {})?.['buy_virginity'] ?? 0) + 10) * 1000, 1)} in total."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Too far', handler: (st: GameState) => {
    scene.text('"That\'s too far," you say, shaking your head. "I can\'t let you come inside me without a condom."');
    scene.text('"Damn," he says ruefully. "Guess I\'ll just take what I can get then."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Don\'t push it', handler: (st: GameState) => {
    scene.text('"Don\'t push it," you say, giving him a nasty glare. "No condoms is one thing, but now it just sounds like you\'re trying to knock me up."');
    if (((st as any).npc_childfree ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Wouldn\'t dream of it," he snickers, getting into position.. "I hate kids."');
    } else {
      scene.text('"What if I am?" he snickers, getting into position.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Agree (hesitant)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 10000);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_free_creampies'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    // TODO-QSP: dynamic text: "I can''t believe I''m letting you do this..." you say reluctantly and <<$npcdes...
    scene.text(`"I can't believe I'm letting you do this..." you say reluctantly and ${((st as any).npcdesc ?? '')} doesn't even hesitate, immediately pulling out another ${qspFunc(s, 'money', 'string_profit', 10000)} and slaps it on the bedside table.`);
    scene.text('"This is gonna feel so good," he grins.');
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.text('<i>It should be a safe day anyways...</i> you think to yourself nervously as you put the money in your bag.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.text('<i>It shouldn\'t be <b>too</b> risky today...</i> you think to yourself nervously as you put the money in your bag.');
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
          scene.text('<i>What am I thinking?!</i> you think to yourself panickedly as you put the money in your bag. <i>It\'s a danger day today! I could get pregnant!</i>');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Agree (agreeable)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 10000);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_free_creampies'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"Well..." you say with a slow smirk. "It\'s your money."');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t even hesitate, immediately pulling out another <<$func(''m...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't even hesitate, immediately pulling out another ${qspFunc(s, 'money', 'string_profit', 10000)} and slaps it on the bedside table.`);
    scene.text('"This is gonna feel so good," he grins.');
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.text('<i>It should be a safe day anyways...</i> you think to yourself as you put the money in your bag.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.text('<i>It shouldn\'t be <b>too</b> risky today...</i> you think to yourself as you put the money in your bag.');
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
          scene.text('<i>I can just get a morning after pill</i> you think to yourself as you put the money in your bag, realizing it\'s the fertile part of your cycle.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
    { label: 'Agree (eager)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'prostitution_pay_code', 10000);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['paid_free_creampies'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_allowance'] = 1;
    scene.text('"For <i>another</i> 10 grand?" you say eyes sparkling. "Go ahead! Come inside me as much as you want!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t even hesitate and immediately pulls out another <<$func(''...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't even hesitate and immediately pulls out another ${qspFunc(s, 'money', 'string_profit', 10000)} and slaps it on the bedside table.`);
    scene.text('"This is gonna feel so good," he grins as he gets into position.');
    if (((st as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      scene.text('<i>It should be a safe day anyways...</i> you think to yourself nervously as you put the money in your bag.');
    } else {
      if (((st as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.text('<i>It shouldn\'t be <b>too</b> risky today...</i> you think to yourself nervously as you put the money in your bag.');
      } else {
        if (((st as any).stat ?? 0)?.['preg_risk'] === 'danger') {
          scene.text('<i>I can just get a morning after pill</i> you think to yourself as you put the money in your bag, realizing it\'s the fertile part of your cycle.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'his_choice'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHisChoice(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['his_choice_virg'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_fuck'] = 1;
  qspCall(s, 'sex_ev_sex', 'speed_select');
  if (((s as any).sex_ev ?? 0)?.['position'] === '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] < 3  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
        } else {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
        }
      }
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
        } else {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
        }
      }
    }
  }
  qspGoto(s, 'sex_ev_virgin', 'insertion_pre');
  // TODO-QSP: end
  scene.build();
}

function enterInsertionPre(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === '') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> lays you down on your back and spreads your legs, placing the head ...
    scene.text(`${((s as any).npcdesc ?? '')} lays you down on your back and spreads your legs, placing the head of his ${(((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} across the folds of your virgin pussy.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/foreplay/doggy1.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> rolls you onto your knees, spreading them apart slightly as he posi...
      scene.text(`${((s as any).npcdesc ?? '')} rolls you onto your knees, spreading them apart slightly as he positions himself behind you. You can feel him thumbing the folds of your pussy as you look over your shoulder towards him.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
        // TODO-QSP: dynamic text: "It might be better if you do this yourself," <<$npcdesc>> says and lays back on...
        scene.text(`"It might be better if you do this yourself," ${((s as any).npcdesc ?? '')} says and lays back on the bed, motioning for you to climb on top of him. You do as he says, throwing your legs over his until his ${(((s as any).npc_dick_noun ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} is upright between your thighs, flat against your belly and giving you a <i>very vivid</i> image of exactly how far this thing is going to go into you.`);
      }
    }
  }
  scene.text('"You ready?" he asks.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.text('"No," you squeak with a tremble right before you start to put it inside.');
    } else {
      scene.text('"No," you squeak with a tremble right before he starts to put it inside.');
    }
    scene.actions([
      { label: 'Lose your virginity', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_virgin', 'virgin_fuck_route'
  } },
    ]);
  } },
    { label: 'Nod', handler: (st: GameState) => {
    scene.text('You nod with only a <i>small</i> gulp and get ready for insertion.');
    scene.actions([
      { label: 'Lose your virginity', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_virgin', 'virgin_fuck_route'
  } },
    ]);
  } },
    { label: 'Smile', handler: (st: GameState) => {
    scene.text('"More than ready," you smile and get ready for insertion.');
    scene.actions([
      { label: 'Lose your virginity', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_virgin', 'virgin_fuck_route'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVirginFuckRoute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] !== '') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      qspGoto(s, 'sex_ev_virgin', 'miss_virg_norm1');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        qspGoto(s, 'sex_ev_virgin', 'doggy_virg_norm1');
      } else {
        qspGoto(s, 'sex_ev_virgin', 'cowgirl_virg_norm1');
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['speed'] < 3  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        qspGoto(s, 'sex_ev_virgin', 'miss_virg_norm1');
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          qspGoto(s, 'sex_ev_virgin', 'doggy_virg_norm1');
        } else {
          qspGoto(s, 'sex_ev_virgin', 'cowgirl_virg_norm1');
        }
      }
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss') {
        qspGoto(s, 'sex_ev_virgin', 'miss_virg_hard1');
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
          qspGoto(s, 'sex_ev_virgin', 'doggy_virg_hard1');
        } else {
          qspGoto(s, 'sex_ev_virgin', 'cowgirl_virg_norm1');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChangeMind(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).sex_ev ?? 0)?.['bj_count'] === 0) {
      scene.text('"Ugh, fine," he grumbles, backing off. "At least suck me off if you\'re not going to let me fuck you," he says, shoving your head towards his cock.');
    } else {
      scene.text('"Ugh, fine," he grumbles, backing off. "At least suck me off again if you\'re not going to let me fuck you," he says, shoving your head towards his cock.');
    }
    qspCall(s, 'willpower', 'bj', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Can we 69?', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Can we 69?', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('"Can we at least sixty-nine? I really need some loving down there right now."');
    scene.text('"I can get behind that," he grins, laying back.');
    scene.actions([
      { label: 'Climb over him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Blow him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
      { label: 'Grumble (but still do it)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['reluctant_bj'] = 1;
    scene.text('You grumble to yourself but lean forward anyways and take his dick into your mouth.');
    scene.actions([
      { label: 'Suck', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"That\'s fair," he smiles wryly. "What do you want to do instead then?"');
    } else {
      scene.text('"Okay, fine," he sighs, backing off. "What do you want to do instead then?"');
    }
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  }
  ((s as any).know_virgin = (s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 1;
  // TODO-QSP: end
  scene.build();
}

function enterNoCondom1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterNoCondom2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Then we\'re not fucking', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Woah! What the fuck?!" you exclaim, snapping your legs closed and pulling back from him. "If you\'re not gonna use a condom, there\'s no way I\'m letting you fuck me!"');
    scene.text('"Don\'t be such a bitch about it! Come on! Let\'s just do this!"');
    scene.actions([
      { label: 'Stand firm' }, // TODO-QSP: empty action body
      { label: 'Let him pressure you' }, // TODO-QSP: empty action body
    ]);
  } },
    { label: 'Maybe it\'s okay?' }, // TODO-QSP: empty action body
    { label: 'What the fuck?!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"What the fuck?!" you exclaim, snapping your legs closed and pulling back from him. "You don\'t use condoms?"');
    scene.text('"No! Of course I don\'t!" he says. "Condoms fucking suck. Can\'t feel anything with one of those on."');
  } },
  ]);
  scene.build();
}

function enterMissVirgStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_fuck'] = 1;
  qspCall(s, 'sex_ev_sex', 'speed_select');
  if (((s as any).sex_ev ?? 0)?.['speed'] === 3  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_likes_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'miss_virg_hard1'] },
    ]);
  } else {
    scene.actions([
      { label: 'Lose your virginity', goto: ['sex_ev_virgin', 'miss_virg_norm1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissVirgNorm1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['big_cock_virgin'] = 1;
    // TODO-QSP: $virginity_desc[] = 'big_dick'
  }
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  scene.img('images/shared/sex/vag/miss/enter1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> presses his cock inside you slowly, centimeter by centimeter. It fi...
  scene.text(`${((s as any).npcdesc ?? '')} presses his cock inside you slowly, centimeter by centimeter. It fills you up, stretching your walls until you feel it bump against your hymen. He doesn't stop though, and keeps pushing until... you feel him tear straight through your maidenhood, eliciting a gasp from your mouth. Whether in excitement or pain, you aren't really sure.`);
  scene.text('"You okay?"');
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    scene.actions([
      { label: 'He\'s big!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'big';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMissVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'It hurts', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'hurt';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMissVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I\'m fine', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'fine';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMissVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Just hum', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'mmm';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMissVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMissVirgNorm1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_virgin', '' + ((s as any).sex_ev ?? 0)?.['virgin_react'] + '_react1');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/miss/blood_condom1.jpg');
    } else {
      scene.img('images/shared/sex/vag/miss/blood1.jpg');
    }
    qspCall(st, 'sex_ev_virgin', '' + ((st as any).sex_ev ?? 0)?.['virgin_react'] + '_react2');
    scene.text('"I\'ll be gentle," he says, and begins to move again.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pos_speed'] = 'miss1';
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/slow1.mp4"></video></center>';
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: As promised, <<$npcdesc>> fucks you very gently, slowly pumping his cock in and ...
    scene.text(`As promised, ${((st as any).npcdesc ?? '')} fucks you very gently, slowly pumping his cock in and out of you. He displays what you can only imagine is incredible patience, as he maintains this slow and gentle pace for several minutes, at which point you think...`);
    qspGoto(st, 'sex_ev_virgin', 'virgin_enjoyment');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMissVirgKiss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/kiss1.mp4');
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  qspCall(s, 'arousal', 'kiss', 2, 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  qspCall(s, 'arousal', 'kiss', (-10), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['kiss'] = 1;
  if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: Unable to contain yourself, you forget your rules and reach up, pulling <<$npcde...
    scene.text(`Unable to contain yourself, you forget your rules and reach up, pulling ${((s as any).npcdesc ?? '')}'s face down to press it against yours. Your eyes roll back in your head, feeling the thrust of his cock in your pussy and the invasion of his tongue in your mouth. You moan into his mouth and he moans back.`);
  } else {
    // TODO-QSP: dynamic text: Caught up in the moment, you reach up and grab <<$npcdesc>>''s face, pulling it ...
    scene.text(`Caught up in the moment, you reach up and grab ${((s as any).npcdesc ?? '')}'s face, pulling it down to kiss him. Your eyes roll back in your head, feeling the thrust of his cock in your pussy and the invasion of his tongue in your mouth. You moan into his mouth and he moans back.`);
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMissVirgNorm2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/miss/slow1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> slows down and you sigh in relief.
  scene.text(`${((s as any).npcdesc ?? '')} slows down and you sigh in relief.`);
  scene.text('Now that he isn\'t trying to tear you in half, you close your eyes, trying to focus on the sensations and you...');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginEnjoyment(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterMissVirgHard1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'vaginal', 1, 'rough', 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_insertion'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'miss';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss3';
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
    scene.img('images/shared/sex/vag/miss/blood_condom1.jpg');
  } else {
    scene.img('images/shared/sex/vag/miss/blood1.jpg');
  }
  // TODO-QSP: dynamic text: You half gasp half shriek as <<$npcdesc>> slams his cock inside you, tearing str...
  scene.text(`You half gasp half shriek as ${((s as any).npcdesc ?? '')} slams his cock inside you, tearing straight through your hymen in one thrust and your eyes water at the intense stab of pain.`);
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: Despite telling <<$npcdesc>> how important your first time is to you, he doesn''...
    scene.text(`Despite telling ${((s as any).npcdesc ?? '')} how important your first time is to you, he doesn't seem to care about taking it easy on you. You scream in pain as he rams his cock in and out of you with tremendous force, pistoning with jackhammer like intensity.`);
  } else {
    // TODO-QSP: dynamic text: If you thought that <<$npcdesc>> was going to take it easy on you for your first...
    scene.text(`If you thought that ${((s as any).npcdesc ?? '')} was going to take it easy on you for your first time, you were sorely mistaken. Literally. You scream in pain as he rams his cock in and out of you with tremendous force, pistoning with jackhammer like intensity.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/miss/hard2.mp4');
    scene.text('<i>"Ahh! Ahh!! AH! AHH!!"</i>');
    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you roughly and with high intensity. It hurts so much. Every ...
    scene.text(`${((st as any).npcdesc ?? '')} fucks you roughly and with high intensity. It hurts so much. Every time his cock stabs into you, you wonder if you're going to die. The force of his thrusts bounce your breasts so violently they hurt. It feels like your pussy is being fucked into an open wound and you question if you're going to have internal bruises tomorrow morning.`);
    scene.actions([
      { label: 'Endure it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    qspCall(st, 'sex_ev_sex', 'fuck_no_cum_code');
    qspCall(st, 'stat', '');
    scene.text('You decided to give him your virginity and you don\'t want to be a sour puss by trying to back out now. You grit your teeth and endure, spending every second hoping it will end soon.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can we slow down?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Can we-! Slow down-! A little-?" you whimper under <<$npcdesc>>''s relentless p...
    scene.text(`"Can we-! Slow down-! A little-?" you whimper under ${((st as any).npcdesc ?? '')}'s relentless pounding. "This is-! A bit-! Rough-!"`);
    if (((Math.floor(Math.random() * 10) + 1) >= 7  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      (st as any).orgasm_or = 'no';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_check'] = 1;
      scene.text('"This is what sex is like," he grins. "You\'ll get used to it soon, then it\'ll feel really good."');
      scene.text('He keeps fucking you roughly and you keep your teeth clenched. Despite his promises, that good feeling never comes and you spend the next few minutes in agony, waiting for it to end.');
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed_change'] = 1;
      scene.text('"Oh! Sorry! I just... I thought it would make you feel good..."');
      scene.text('He stops and pulls back before pushing into you again, slowly, and much more gently.');
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_virgin', 'miss_virg_norm2'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMissVirgHard2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss2';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  qspCall(s, 'arousal', 'vaginal', (-15), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  scene.img('images/shared/sex/vag/miss/med1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace as you command and you instinctively arch your ba...
  scene.text(`${((s as any).npcdesc ?? '')} picks up the pace as you command and you instinctively arch your back, getting him to thrust deeper into you. The heightened pace feels even better than it did when he was being gentle and you moan loudly with intense pleasure.`);
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
    scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((s as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to come.`);
  } else {
    scene.text('It\'s your first time having sex, but it\'s mindblowingly good. Why didn\'t you do this sooner?!');
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterMissVirgHard2_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_enjoy'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'miss3';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  qspCall(s, 'arousal', 'vaginal', (-15), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  scene.img('images/shared/sex/vag/miss/rough1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace as you command and you groan loudly, face contort...
  scene.text(`${((s as any).npcdesc ?? '')} picks up the pace as you command and you groan loudly, face contorting in a mixture of pain and pleasure. Maybe sensing something within you, he reaches up and grabs a fistful of your hair, using it to pull himself into you even harder.`);
  scene.text('It hurts. But that makes it feel even better.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggyVirgNorm1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy1';
  (s as any).orgasm_or = 'no';
  qspCall(s, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy1';
  scene.img('images/shared/sex/vag/doggy/blood1.jpg');
  // TODO-QSP: dynamic text: <<$npcdesc>> slowly presses his cock inside you from behind. It fills you up, st...
  scene.text(`${((s as any).npcdesc ?? '')} slowly presses his cock inside you from behind. It fills you up, stretching your walls before bumping against your hymen. After a brief pause, he pushes through, tearing your maidenhood and causing you to gasp. Whether in excitement or pain, you aren't really sure yet.`);
  scene.text('"You okay?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'It hurts', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'hurt';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'I\'m fine', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'fine';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Just hum', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'mmm';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDoggyVirgNorm1_1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterDoggyVirgNorm1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_virgin', '' + ((s as any).sex_ev ?? 0)?.['virgin_react'] + '_react1');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/blood1.jpg');
    qspCall(st, 'sex_ev_virgin', '' + ((st as any).sex_ev ?? 0)?.['virgin_react'] + '_react2');
    scene.text('"I\'ll be gentle," he says, and begins to move again.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pos_speed'] = 'doggy1';
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/doggy/slow1.mp4"></video></center>';
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: As promised, <<$npcdesc>> fucks you very gently, slowly pumping his cock in and ...
    scene.text(`As promised, ${((st as any).npcdesc ?? '')} fucks you very gently, slowly pumping his cock in and out of you. He displays what you can only imagine is incredible patience, as he maintains this slow and gentle pace for several minutes, at which point you think...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyVirgNorm2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy1';
  scene.img('images/shared/sex/vag/doggy/slow1.mp4');
  // TODO-QSP: dynamic text: As <<$npcdesc>> changes his pace, you sigh deeply, feeling like you can breathe ...
  scene.text(`As ${((s as any).npcdesc ?? '')} changes his pace, you sigh deeply, feeling like you can breathe again.`);
  scene.text('Now that you aren\'t worried about being literally fucked to death, you feel like you can focus on the sensations of your first time and you...');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterVirginEnjoyment(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoggyVirgHard1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'doggy';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy3';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
  scene.img('images/shared/sex/vag/doggy/blood2.jpg');
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: Without warning, <<$npcdesc>> plunges his entire cock all the way inside you. He...
    scene.text(`Without warning, ${((s as any).npcdesc ?? '')} plunges his entire cock all the way inside you. He tears straight through your hymen, eliciting a uncontainable shriek of pain from your lips and tears immediately filling your eyes. If he understood how much saving your virginity meant to you, then he doesn't show it as he throws his full weight against you and bears you down onto the bed. Your arms and legs buckle beneath you, and his cock drives all the way inside you. `);
    scene.text('He doesn\'t give you even a moment to adjust and begins fucking you full force, absolutely <i>pounding</i> your pussy.');
  } else {
    // TODO-QSP: dynamic text: Without warning, <<$npcdesc>> plunges his entire cock all the way inside you. He...
    scene.text(`Without warning, ${((s as any).npcdesc ?? '')} plunges his entire cock all the way inside you. He tears straight through your hymen, eliciting a uncontainable shriek of pain from your lips and tears immediately filling your eyes. If he understood how much saving your virginity meant to you, then he doesn't show it as he throws his full weight against you and bears you down onto the bed. Your arms and legs buckle beneath you, and his cock drives all the way inside you.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t stop for even a second and begins fucking you <i>hard</i>.
    scene.text(`${((s as any).npcdesc ?? '')} doesn't stop for even a second and begins fucking you <i>hard</i>.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Scream', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal', 1, 'rough', 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/doggy/laying_down1.mp4');
    scene.text('<i>"Mmmm! Mmm!! MM!! MMM!!"</i>');
    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you roughly and without mercy or restraint. It hurts so much....
    scene.text(`${((st as any).npcdesc ?? '')} fucks you roughly and without mercy or restraint. It hurts so much. Every time his cock slams back in to you, you feel like you're going to die. It's like your pussy is being torn in half and you wonder if you're going to piss blood after this. He lets all of his weight rest on top of you, driving the breath from your lungs. You can't even scream. All you can do is squirm beneath ${((st as any).npcdesc ?? '')} as he pounds your virgin pussy over and over again.`);
    scene.actions([
      { label: 'Endure it', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    qspCall(st, 'stat', '');
    scene.text('The next few minutes pass by in a torturous blur. You have no idea how much time actually passes by, only that every second of it is filled with pain, tears, and prayer that it will end after the next thrust.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can we slow down?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Can we-! Slow down-! A little-?" you manage to gasp under <<$npcdesc>>''s relen...
    scene.text(`"Can we-! Slow down-! A little-?" you manage to gasp under ${((st as any).npcdesc ?? '')}'s relentless pounding. "This is-! Too-! Rough-!"`);
    if (((Math.floor(Math.random() * 10) + 1) >= 7  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0) === 1)  &&  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      (st as any).orgasm_or = 'no';
      scene.text('"This is what sex is like," he grins. "You\'ll get used to it soon, then it\'ll feel really good."');
      scene.text('He keeps fucking you roughly and you keep your teeth clenched. Despite his promises, that good feeling never comes and you spend the next few minutes in agony, waiting for it to end.');
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed_change'] = 1;
      scene.text('"Oh! Sorry! I just... I thought it would make you feel good..."');
      // TODO-QSP: dynamic text: He stops and pulls back for a moment. You take a breath of relief, pulling yours...
      scene.text(`He stops and pulls back for a moment. You take a breath of relief, pulling yourself back up to your arms and knees again and ${((st as any).npcdesc ?? '')} re-enters you. Slowly this time, and much more gently.`);
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_virgin', 'doggy_virg_norm2'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyVirgHard2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy2';
  (s as any).orgasm_or = '';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  qspCall(s, 'arousal', 'vaginal', (-15), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  scene.img('images/shared/sex/vag/doggy/med2.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace as you command and you start to push your hips ba...
  scene.text(`${((s as any).npcdesc ?? '')} picks up the pace as you command and you start to push your hips back in times with his. The sound of your ass being clapped echoes off the walls. The heightened pace feels even better than it did when he was being gentle and you moan loudly with intense pleasure.`);
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
    scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((s as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to come.`);
  } else {
    scene.text('It\'s your first time having sex, but it\'s mind-blowingly good. Why didn\'t you do this sooner?!');
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterDoggyVirgHard2_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_enjoy'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'doggy3';
  (s as any).orgasm_or = '';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  qspCall(s, 'arousal', 'vaginal', (-15), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  scene.img('images/shared/sex/vag/doggy/rough1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace as you command and you groan loudly, face contort...
  scene.text(`${((s as any).npcdesc ?? '')} picks up the pace as you command and you groan loudly, face contorting in a mixture of pain and pleasure. Maybe sensing something within you, he reaches up and grabs a fistful of your hair, using it to pull himself into you even harder.`);
  scene.text('It hurts. But that makes it feel even better.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlVirgNorm1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['no_condom'] = 1;
  }
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'cowgirl';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl1';
  scene.img('images/shared/sex/vag/cowgirl/enter1.mp4');
  // TODO-QSP: dynamic text: Grabbing hold of <<$npcdesc>>''s cock, you try to guide it in with your hand as ...
  scene.text(`Grabbing hold of ${((s as any).npcdesc ?? '')}'s cock, you try to guide it in with your hand as you ease yourself down onto it. It's kind of awkward to do and you have a lot of difficulty getting it to enter your pussy straight.`);
  if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "It''s okay, take your time," <<$npcdesc>> assures you. "Hard to get it in, isn'...
    scene.text(`"It's okay, take your time," ${((s as any).npcdesc ?? '')} assures you. "Hard to get it in, isn't it?"`);
    scene.text('"Y-yeah," you blush, embarrassed at your obvious lack of experience.');
    scene.text('Finally, you manage to get the tip inside your pussy and carefully lower yourself down. You feel your walls stretch slowly and keep going lower until you feel yourself bump into something, some kind of resistance. It takes a moment, but then you realize it\'s your hymen.');
    // TODO-QSP: dynamic text: "Ready?" <<$npcdesc>> asks gently.
    scene.text(`"Ready?" ${((s as any).npcdesc ?? '')} asks gently.`);
    scene.text('"Mhmm," you nod. With a deep breath, you lift yourself up slightly and bounce straight down, tearing through your virginity.');
    scene.actions([
      { label: '<b>!!!!</b>', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/blood1.jpg');
    // TODO-QSP: dynamic text: The pain of <<$npcdesc>>''s cock ripping through your hymen is enough to make yo...
    scene.text(`The pain of ${((st as any).npcdesc ?? '')}'s cock ripping through your hymen is enough to make your eyes water.`);
    scene.text('"Fuck!" you involuntarily squeak. "Fuckfuckfuckfuckfuckfuckfuck! That hurts!"');
    // TODO-QSP: dynamic text: "It''s okay," <<$npcdesc>> says, assuring you, putting his hands on your hips. "...
    scene.text(`"It's okay," ${((st as any).npcdesc ?? '')} says, assuring you, putting his hands on your hips. "Take it slow, alright?"`);
    scene.actions([
      { label: 'Take his advice', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/slow1.mp4');
    scene.text('You nod in response, taking deep breaths trying to adjust to feeling this... <i>thing</i> impaling you, filling you up, stretching you to your limits. Once you feel ready, you start to move.');
    scene.text('Clenching your jaw, you slowly lift yourself up before sliding back down on his cock. And then again. And again. And again. Your legs feel slick with something running down your thighs, but it doesn\'t feel like your juices. In fact it\'s hard to feel aroused at all right now. Suddenly you realize; it\'s blood. You did just pop your cherry after all...');
    // TODO-QSP: dynamic text: You soldier onwards, continuing to ride <<$npcdesc>>. A few minutes pass and you...
    scene.text(`You soldier onwards, continuing to ride ${((st as any).npcdesc ?? '')}. A few minutes pass and you work yourself up to a slow but steady rhythm, bouncing up and down on his cock. And soon, you realize you...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Go hard, power through', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_arousal_code');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/condom1.mp4');
    } else {
      scene.img('images/shared/sex/vag/cowgirl/hard2.mp4');
    }
    scene.text('<i>Fuck that,</i> you think and immediately raise your hips up and slam them back down again.');
    scene.text('"AHH! FUCK!" you shout, leaning back and bouncing again.');
    scene.text('"Hey! Slow down! I-!"');
    scene.text('"SHUT THE FUCK UP!" you scream. "I\'M GONNA FUCK YOU AND I\'M GONNA LIKE IT!"');
    // TODO-QSP: dynamic text: You soldier onwards, continuing to fuck <<$npcdesc>> with relentless fervor, rid...
    scene.text(`You soldier onwards, continuing to fuck ${((st as any).npcdesc ?? '')} with relentless fervor, riding him like your life depends on it. Soon, you realize...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Come on, hurry up," <<$npcdesc>> complains loudly.
      scene.text(`"Come on, hurry up," ${((s as any).npcdesc ?? '')} complains loudly.`);
      scene.text('"I\'m <i>trying!</i>" you yelp, blushing hard at your obvious lack of experience.');
      scene.text('Finally, you manage to get the tip inside your pussy and carefully lower yourself down. You feel your walls stretch slowly and keep going lower until you feel yourself bump into something, some kind of resistance. It takes a moment, but then you realize it\'s your hymen and you sit there for a moment, pausing.');
      // TODO-QSP: dynamic text: "Come on already!" <<$npcdesc>> doesn''t wait for a response and thrusts his hip...
      scene.text(`"Come on already!" ${((s as any).npcdesc ?? '')} doesn't wait for a response and thrusts his hips up, sending his cock tearing through your virginity.`);
      scene.actions([
        { label: '<b>!!!!</b>', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/blood1.jpg');
    // TODO-QSP: dynamic text: The pain of <<$npcdesc>>''s cock ripping through your hymen is enough to make yo...
    scene.text(`The pain of ${((st as any).npcdesc ?? '')}'s cock ripping through your hymen is enough to make your eyes water.`);
    scene.text('"<i><b>FUCK!</b></i>" you shout. "Cocksucker! Motherfuck! Piece of shit, <i>bastard!</i>"');
    scene.text('You continue to scream obscenities at him even as he grabs your hips.');
    scene.text('"You were taking too long, decided to help you take the plunge," he grins, trying to guide you back up again.');
    scene.actions([
      { label: 'Ride him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/condom1.mp4');
    } else {
      scene.img('images/shared/sex/vag/cowgirl/slow1.mp4');
    }
    // TODO-QSP: dynamic text: Deciding you''re already this far, you let him, slowly lifting yourself up and s...
    scene.text(`Deciding you're already this far, you let him, slowly lifting yourself up and sliding back down on his cock. And then again. And again. And again. A few minutes pass and you've worked yourself up to a steady rhythm, bouncing up and down on ${((st as any).npcdesc ?? '')}'s cock. And soon, you realize you...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Fuck him angrily', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_arousal_code');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/condom1.mp4');
    } else {
      scene.img('images/shared/sex/vag/cowgirl/hard2.mp4');
    }
    scene.text('"FINE!" you shout, leaning back and bouncing again. "You want me to take the plunge?! I\'LL FUCKING PLUNGE THEN!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> grins back at you and pulls you back down with equal eagerness, and...
    scene.text(`${((st as any).npcdesc ?? '')} grins back at you and pulls you back down with equal eagerness, and soon you're riding ${((st as any).npcdesc ?? '')} with relentless fervor, fucking him like there's no tomorrow. Somewhere in the back of your mind, you realize your first time is turning into some kind of hate fuck but the anger that burns within refuses to let you back down. Soon, you realize...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "You okay up there?" <<$npcdesc>> asks, a quizzical look on his face.
      scene.text(`"You okay up there?" ${((s as any).npcdesc ?? '')} asks, a quizzical look on his face.`);
      scene.text('"Y-yeah," you stammer. "I\'m just having a hard time... getting it in..." You blush hard, embarrassed at your obvious lack of experience.');
      scene.text('Finally, you manage to get the tip inside your pussy and carefully lower yourself down. You feel your walls stretch slowly and keep going lower until you feel yourself bump into something, some kind of resistance. It takes a moment, but then you realize it\'s your hymen.');
      // TODO-QSP: dynamic text: "Whenever you''re ready," <<$npcdesc>> says.
      scene.text(`"Whenever you're ready," ${((s as any).npcdesc ?? '')} says.`);
      scene.text('You nod back at him and take a deep breath. You lift yourself up slightly, and then force yourself straight down, tearing through your virginity.');
      scene.actions([
        { label: '<b>!!!!</b>', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/blood1.jpg');
    // TODO-QSP: dynamic text: The pain of <<$npcdesc>>''s cock ripping through your hymen is enough to make yo...
    scene.text(`The pain of ${((st as any).npcdesc ?? '')}'s cock ripping through your hymen is enough to make your eyes water.`);
    scene.text('"Fuck!" you involuntarily squeak. "Fuckfuckfuckfuckfuckfuckfuck! That hurts!"');
    // TODO-QSP: dynamic text: "Keep moving, it''ll get better," <<$npcdesc>> says, assuring you, putting his h...
    scene.text(`"Keep moving, it'll get better," ${((st as any).npcdesc ?? '')} says, assuring you, putting his hands on your hips.`);
    scene.actions([
      { label: 'Take his advice', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/vag/cowgirl/slow1.mp4');
    scene.text('You nod in response and clench your jaw, slowly lifting yourself up before sliding back down on his cock. You slowly go up and down a few more times when you feel something running down your thighs. It takes you a moment, as you don\'t feel very aroused right now so you figure it can\'t be your juices. And then you realize; it\'s blood. The last mark of your virginity.');
    // TODO-QSP: dynamic text: You soldier onwards, continuing to ride <<$npcdesc>>. A few minutes pass and you...
    scene.text(`You soldier onwards, continuing to ride ${((st as any).npcdesc ?? '')}. A few minutes pass and you work yourself up to a slow but steady rhythm, bouncing up and down on his cock. And soon, you realize you...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Go hard, power through', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_arousal_code');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['condom'] === 1) {
      scene.img('images/shared/sex/vag/cowgirl/condom1.mp4');
    } else {
      scene.img('images/shared/sex/vag/cowgirl/hard2.mp4');
    }
    scene.text('You immediately raise your hips up and slam them back down again.');
    scene.text('"AHH! FUCK!" you shout, leaning back and bouncing again.');
    scene.text('"Hey!" he grunts in surprise. "You don\'t have to do it like-');
    scene.text('"SHUT THE FUCK UP!" you scream. "You said it\'ll get better if I keep moving right?! So I\'m gonna fucking keep moving!"');
    // TODO-QSP: dynamic text: You pound yourself down on <<$npcdesc>>''s cock, fucking him with reckless aband...
    scene.text(`You pound yourself down on ${((st as any).npcdesc ?? '')}'s cock, fucking him with reckless abandon, riding him like your life depends on it, trying to plow your way past the hard part to the "good part." <i>Whatever that's supposed to feel like,</i> you think to yourself with gritted teeth. Soon, you realize...`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterVirginEnjoyment(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlVirgHard1(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = '';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  qspCall(s, 'arousal', 'vaginal', (-10), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl2';
  scene.img('images/shared/sex/vag/cowgirl/med3.mp4');
  // TODO-QSP: dynamic text: Feeling good, you pick up the pace, bouncing up and down on <<$npcdesc>>''s cock...
  scene.text(`Feeling good, you pick up the pace, bouncing up and down on ${((s as any).npcdesc ?? '')}'s cock with giddy excitement. Going a little harder feels even better than before and without warning you begin bursting into giggles.`);
  scene.text('Who knew that sex was so much fun?');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlVirgHard2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'cowgirl3';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
  qspCall(s, 'arousal', 'vaginal', (-10), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
  scene.img('images/shared/sex/vag/cowgirl/hard2.mp4');
  // TODO-QSP: dynamic text: With no warning other than a sudden cry, you throw yourself down on <<$npcdesc>>...
  scene.text(`With no warning other than a sudden cry, you throw yourself down on ${((s as any).npcdesc ?? '')}'s cock with as much force as you can. The impact reverberates through you flaring both the pain and the pleasure inside of your cunt. You raise yourself up and impale yourself again and again and again until you're riding him like a bucking stallion. Tears stream down your face and protracted groans of exertion escape from behind your teeth, clenched in a fierce grin. Your pussy hurts so much, and you never want this pain to end.`);
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterVirgContinueHarder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    if (((s as any).sex_ev ?? 0)?.['virgin_pain_good'] !== 1) {
      qspGoto(s, 'sex_ev_virgin', 'miss_virg_hard2');
    } else {
      qspGoto(s, 'sex_ev_virgin', 'miss_virg_hard2_2');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      if (((s as any).sex_ev ?? 0)?.['virgin_pain_good'] !== 1) {
        qspGoto(s, 'sex_ev_virgin', 'doggy_virg_hard2');
      } else {
        qspGoto(s, 'sex_ev_virgin', 'doggy_virg_hard2_2');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] !== 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = (Math.floor(Math.random() * (1 - (-1) + 1)) + ((-1)));
  }
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] > 0) {
    qspCall(s, 'sex_ev_cum', 'fuck_cum_random');
  } else {
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.actions([
        { label: 'Orgasm', goto: ['sex_ev_virgin', 'girl_cum'] },
      ]);
    } else {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 2;
    }
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'warn') {
    if (((s as any).sex_ev ?? 0)?.['boy_cum'] === 2  &&  ((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
      // TODO-QSP: $sex_ev['virgin_media']
      // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
      scene.text(`A short while later, ${((s as any).npcdesc ?? '')} reaches his limit.`);
      scene.text('"I\'m-! Almost there!" he says, breaking away from your lips, panting heavily.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_cum'] === 2) {
        // TODO-QSP: $sex_ev['virgin_media']
        // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
        scene.text(`A short while later, ${((s as any).npcdesc ?? '')} reaches his limit.`);
        scene.text('"I\'m-! Almost there!" he says, panting heavily.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['kiss'] === 1) {
          // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
          scene.text(`A short while later, ${((s as any).npcdesc ?? '')} reaches his limit.`);
          scene.text('"I\'m-! Almost there!" he says, breaking away from your lips, panting heavily.');
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            scene.text('You barely register what he\'s saying. The feeling of his cock stretching your walls, the tension that keeps tightening and tightening inside you. You feel like you\'re about to burst. It\'s all so new to you that when you realize what\'s happening, it startles you.');
            scene.text('"I think am too," you whisper, on the verge of orgasming from your first time, barely able to speak.');
          }
        } else {
          // TODO-QSP: dynamic text: A short while later, <<$npcdesc>> reaches his limit.
          scene.text(`A short while later, ${((s as any).npcdesc ?? '')} reaches his limit.`);
          scene.text('"I\'m-! Almost there!"');
          if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
            scene.text('You barely register what he\'s saying. The feeling of his cock stretching your walls, the tension that keeps tightening and tightening inside you. You feel like you\'re about to burst. It\'s all so new to you that when you realize what\'s happening, it startles you.');
            scene.text('"I think am too," you whisper, on the verge of orgasming from your first time, barely able to speak.');
          }
        }
      }
    }
    if (((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['condom'] !== 1)  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== 'pullout'  &&  ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask'] = 1;
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_creampie'] = 1;
        if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          // TODO-QSP: dynamic text: "Let''s come together," <<$npcdesc>> says, smiling at you.
          scene.text(`"Let's come together," ${((s as any).npcdesc ?? '')} says, smiling at you.`);
        } else {
          // TODO-QSP: dynamic text: "I wanna come inside you so bad," <<$npcdesc>> says, grunting with the effort of...
          scene.text(`"I wanna come inside you so bad," ${((s as any).npcdesc ?? '')} says, grunting with the effort of holding himself back from blowing his load inside you right now.`);
        }
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_mouth'] = 1;
          // TODO-QSP: dynamic text: "Let me come in your mouth," <<$npcdesc>> says, grunting with the effort of hold...
          scene.text(`"Let me come in your mouth," ${((s as any).npcdesc ?? '')} says, grunting with the effort of holding himself back from blowing his load right now.`);
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'face') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_facial'] = 1;
            // TODO-QSP: dynamic text: "I wanna come on your face," <<$npcdesc>> says, grunting with the effort of hold...
            scene.text(`"I wanna come on your face," ${((s as any).npcdesc ?? '')} says, grunting with the effort of holding himself back from blowing his load right now. "I want to see my cum all over you."`);
          } else {
            if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['he_ask_tits'] = 1;
              // TODO-QSP: dynamic text: "I wanna come on your tits," <<$npcdesc>> says, grunting with the effort of hold...
              scene.text(`"I wanna come on your tits," ${((s as any).npcdesc ?? '')} says, grunting with the effort of holding himself back from blowing his load right now.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['he_ask_facial'] === 1) {
      scene.actions([
        { label: 'You can come on my face', goto: ['sex_ev_cum', 'cum_facial'] },
      ]);
    } else {
      scene.actions([
        { label: 'On my face!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['facial_ask'] = 1
  }, goto: ['sex_ev_cum', 'cum_facial'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
      scene.actions([
        { label: 'Let him come in your mouth', goto: ['sex_ev_cum', 'cum_mouth'] },
      ]);
    } else {
      scene.actions([
        { label: 'In my mouth!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['mouth_ask'] = 1
  }, goto: ['sex_ev_cum', 'cum_mouth'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
      scene.actions([
        { label: 'Let him come on your tits', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', '');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'On my tits!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['tits_ask'] = 1
    qspCall(st, 'sex_ev_cum', '');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
      if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
        if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
          scene.actions([
            { label: 'Come together', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', '');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Let\'s come together', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', '');
  } },
          ]);
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
          scene.actions([
            { label: 'Let him come inside you', handler: (st: GameState) => {
    ((st as any).npc_creampie_okay = (st as any).npc_creampie_okay ?? {})[String((st as any).npcID ?? 0)] = 1;
    qspGoto(st, 'sex_ev_cum', 'cum_inside');
  } },
            { label: 'Let\'s come together (fake orgasm)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', '');
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Come inside me!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
  }, goto: ['sex_ev_cum', 'cum_inside'] },
            { label: 'Let\'s come together (fake orgasm)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', '');
  } },
          ]);
        }
      }
      scene.actions([
        { label: 'Pull out!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['pullout_ask'] = 1
  }, goto: ['sex_ev_cum', 'cum_pullout'] },
        { label: 'Not inside me!', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['not_inside'] = 1
  }, goto: ['sex_ev_cum', 'cum_not_inside'] },
      ]);
    } else {
      scene.actions([
        { label: 'Let him come in the condom', goto: ['sex_ev_cum', 'cum_condom'] },
      ]);
    }
    scene.actions([
      { label: 'Come wherever you want', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_wherever'] = 1;
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('"You can come wherever you want," you say, trying to smile through the pained expression on your face.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('"Come wherever you want," you grunt, still numbly going along with the motion of his thrusting.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'enjoy') {
          if (((st as any).sex_ev ?? 0)?.['position'] === 'doggy') {
            // TODO-QSP: dynamic text: You turn your head over your shoulder to look at <<$npcdesc>>.
            scene.text(`You turn your head over your shoulder to look at ${((st as any).npcdesc ?? '')}.`);
          }
          scene.text('"Come wherever you want," you smile.');
        }
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_his_choice'] },
    ]);
  } },
      { label: 'Finish him with your hand', goto: ['sex_ev_cum', 'cum_jerkoff'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'creampie_surprise') {
      if (((s as any).sex_ev ?? 0)?.['condom'] === 1) {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_cum', 'cum_condom_pre'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_cum', 'creampie_surprise'] },
        ]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'his_choice') {
        qspCall(s, 'sex_ev_cum', 'cum_his_choice');
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    (st as any).fake_orgasm = ((st as any).fake_orgasm ?? 0) + (1);
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    scene.img('images/shared/sex/vag/miss/slow2.mp4');
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    if (((st as any).pcs_horny ?? 0) >= 80) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is doing a good job, even if he''s not quite getting you off. You d...
      scene.text(`${((st as any).npcdesc ?? '')} is doing a good job, even if he's not quite getting you off. You don't think you'll manage to come this time, but you don't want him to feel bad about it either. So...`);
    } else {
      if (((st as any).pcs_horny ?? 0) >= 40) {
        // TODO-QSP: dynamic text: <<$npcdesc>> isn''t doing bad, but he''s nowhere near to really getting you off....
        scene.text(`${((st as any).npcdesc ?? '')} isn't doing bad, but he's nowhere near to really getting you off. But you also don't want him to feel bad, so...`);
      }
    }
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((st as any).npcdesc ?? '')}'s cock with your pussy as hard as you can, dramatically tensing all your muscles as hard as you can, forcing your body to quiver.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((st as any).npcdesc ?? '')} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant with feigned breathlessness and smile at him. "You\'re incredible."');
    scene.text('He smiles back and gets right on back to fucking you.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGirlCum(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_cum'] = 2;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    qspGoto(s, 'sex_ev_virgin', 'miss_cum');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      qspGoto(s, 'sex_ev_virgin', 'doggy_cum');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        qspGoto(s, 'sex_ev_virgin', 'cowgirl_cum');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMissCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss3') {
    scene.img('images/shared/sex/vag/miss/orgasm_rough1.mp4');
    scene.text('You orgasm in rough missionary position.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'miss2') {
      scene.img('images/shared/sex/vag/miss/med1.mp4');
    } else {
      scene.img('images/shared/sex/vag/miss/med1.mp4');
      // TODO-QSP: dynamic text: The feeling of <<$npcdesc>>''s cock inside you is so wonderful, your pussy tight...
      scene.text(`The feeling of ${((s as any).npcdesc ?? '')}'s cock inside you is so wonderful, your pussy tightens on him with every gentle thrust. The feeling is so sublime and the experience is so new, you don't realize you're about to orgasm until right before it happens. The pleasure that was building inside you suddenly releases and you find yourself caught in the throes of it, shuddering uncontrollably beneath ${((s as any).npcdesc ?? '')} with his cock in a vice grip inside you.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['pos_speed'] === 'miss3') {
      scene.img('images/shared/sex/vag/miss/orgasm_rough1.mp4');
      scene.text('Eventually, your orgasm fades and you\'re left teetering at the edge of blacking out, taking ragged gasps of breath in an effort to stay conscious.');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/rough1.mp4"></video></center>';
    } else {
      if (((st as any).sex_ev ?? 0)?.['pos_speed'] === 'miss2') {
        scene.img('images/shared/sex/vag/miss/med1.mp4');
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/med1.mp4"></video></center>';
      } else {
        scene.img('images/shared/sex/vag/miss/med1.mp4');
        scene.text('Eventually, your orgasm fades and you\'re left panting heavily, trying to catch your breath.');
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/vag/miss/slow2.mp4"></video></center>';
      }
    }
    // TODO-QSP: dynamic text: <i>Woah... Orgasming from real sex is... really different...</i> you think, groa...
    scene.text(`<i>Woah... Orgasming from real sex is... really different...</i> you think, groans coming from your mouth as ${((st as any).npcdesc ?? '')} continues fucking your still-sensitive pussy.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'fuck_cum'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDoggyCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'doggy3') {
    scene.img('images/shared/sex/vag/doggy/orgasm_rough1.mp4');
    scene.text('You orgasm in rough doggy position.');
  } else {
    scene.img('images/shared/sex/vag/doggy/orgasm1.mp4');
    scene.text('You orgasm in doggy style.');
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterCowgirlCum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/vag/cowgirl/orgasm1.mp4');
  scene.text('You orgasm in cowgirl.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterHurtReact1(s: GameState, scene: SceneBuilder): void {
  scene.text('"It hurts," you wince, eyes beginning to tear up in pain.');
  scene.text('"I know," he nods sympathetically. "Just a little more. I\'m almost all the way in."');
  // TODO-QSP: end
  scene.build();
}

function enterHurtReact2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: 'He keeps pushing inside, eliciting more grunts of discomfort from you, until he finally stops movin...
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says.
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says.`);
  } else {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says. Ju...
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says. Just after he says that, you feel something running down the curve of your thigh. <i>What is tha-</i> you start to wonder before it hits you; it's blood from your torn hymen. You've officially lost your virginity.`);
  }
  // TODO-QSP: dynamic text: 'After a minute or two of letting <<$npcdesc>>''s cock stretch your ' + iif($sex...
  scene.text(`After a minute or two of letting ${((s as any).npcdesc ?? '')}'s cock stretch your ` + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass,') : ('pussy,')) + ' you nod for him to move again.');
  scene.text('"Okay. You can keep going," you grimace, hoping this horrible experience ends soon.');
  // TODO-QSP: end
  scene.build();
}

function enterFineReact1(s: GameState, scene: SceneBuilder): void {
  scene.text('"I\'m fine," you grunt, in a little bit of discomfort, but determined to power through.');
  scene.text('"Okay," he nods. "Just a little more. I\'m almost all the way in."');
  // TODO-QSP: end
  scene.build();
}

function enterFineReact2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: 'He keeps pushing inside, eliciting more grunts of discomfort from you, until he...
  scene.text('He keeps pushing inside, eliciting more grunts of discomfort from you, until he finally stops moving and you think he\'s fully inside you. Having a penis inside you is a decidedly strange experience. You can feel his cock bulging inside your ' + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass,') : ('pussy,')) + ' stretching it to its limits and straining against them. You feel "full", and you can\'t think of another way to describe it at the moment.');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says.
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says.`);
  } else {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says. Ju...
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says. Just after he says that, you feel something running down the curve of your thigh. <i>What is tha-</i> you start to wonder before it hits you; it's blood from your torn hymen. You've officially lost your virginity.`);
  }
  // TODO-QSP: dynamic text: 'After a minute or two of letting <<$npcdesc>>''s cock stretch your ' + iif($sex...
  scene.text(`After a minute or two of letting ${((s as any).npcdesc ?? '')}'s cock stretch your ` + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass,') : ('pussy,')) + ' you signal for him to move again.');
  scene.text('"Okay. You can keep going," you nod.');
  // TODO-QSP: end
  scene.build();
}

function enterMmmReact1(s: GameState, scene: SceneBuilder): void {
  scene.text('"Mhmm," you hum, nodding, not feeling able to say anything else in the moment.');
  scene.text('"Okay," he nods. "Just a little more. I\'m almost all the way in."');
  // TODO-QSP: end
  scene.build();
}

function enterMmmReact2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: 'He keeps pushing inside, eliciting more grunts of discomfort from you, until he...
  scene.text('He keeps pushing inside, eliciting more grunts of discomfort from you, until he finally stops moving and you think he\'s fully inside you. Having a penis inside you is a decidedly strange experience. You can feel his cock bulging inside your ' + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass,') : ('pussy,')) + ' stretching it to its limits and straining against them. You feel "full", and you can\'t think of another way to describe it at the moment.');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says.
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says.`);
  } else {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says. Ju...
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says. Just after he says that, you feel something running down the curve of your thigh. <i>What is tha-</i> you start to wonder before it hits you; it's blood from your torn hymen. You've officially lost your virginity.`);
  }
  // TODO-QSP: dynamic text: 'After a minute or two of letting <<$npcdesc>>''s cock stretch your ' + iif($sex...
  scene.text(`After a minute or two of letting ${((s as any).npcdesc ?? '')}'s cock stretch your ` + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass,') : ('pussy,')) + ' you signal for him to move again.');
  scene.text('"Okay. You can keep going," you nod.');
  // TODO-QSP: end
  scene.build();
}

function enterBigReact1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
    // TODO-QSP: dynamic text: "<i>Ahh~!</i>" you gasp, feeling breathless as <<$npcdesc>> begins to penetrate ...
    scene.text(`"<i>Ahh~!</i>" you gasp, feeling breathless as ${((s as any).npcdesc ?? '')} begins to penetrate you. "You're really <i>-eep-!</i>!" Your next word is cut short as the entirety of his head pushes into you, stretching your entrance, and causing you to squeal. "<i>Ohmygod</i>, your dick is huge-!"`);
  } else {
    // TODO-QSP: dynamic text: "<i>Ahh~!</i>" you gasp, feeling breathless as <<$npcdesc>> begins to penetrate ...
    scene.text(`"<i>Ahh~!</i>" you gasp, feeling breathless as ${((s as any).npcdesc ?? '')} begins to penetrate you. "You're really <i>-ah-</i> big-!"`);
  }
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: '"Sorry about that," he mumbles shyly. "Maybe not the best guy to lose your ' + ...
    scene.text('"Sorry about that," he mumbles shyly. "Maybe not the best guy to lose your ' + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('anal virginity,') : ('virginity')) + ' to. Just hold on a little longer. I\'m almost all the way in."');
  } else {
    if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "You picked a great cock to lose your virginity to," he grins, forcing more of h...
      scene.text(`"You picked a great cock to lose your virginity to," he grins, forcing more of his ${((s as any).dick_desc ?? '')} shaft inside you.`);
    } else {
      scene.text('"Just a little more," he says. "I\'m almost all the way in."');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBigReact2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: 'You barely stifle another gasp as <<$npcdesc>> finishes pushing the entire leng...
  scene.text(`You barely stifle another gasp as ${((s as any).npcdesc ?? '')} finishes pushing the entire length of his ${((s as any).dick_desc ?? '')} cock into your ` + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass.') : ('pussy.')) + ' It makes you feel stuffed, like your stomach is <i>bulging</i> with it inside you. Your ' + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass') : ('pussy')) + ' is crying in protest and sharp pains lance through your uncomfortably stretched sex.');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says.
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says.`);
  } else {
    // TODO-QSP: dynamic text: "Let''s just take a minute. Give you some time to adjust," <<$npcdesc>> says. Ju...
    scene.text(`"Let's just take a minute. Give you some time to adjust," ${((s as any).npcdesc ?? '')} says. Just after he says that, you feel something running down the curve of your thigh. <i>What is tha-</i> you start to wonder before it hits you; it's blood from your torn hymen. You've officially lost your virginity.`);
  }
  // TODO-QSP: dynamic text: 'After a minute or two of letting <<$npcdesc>>''s cock stretch your ' + iif($sex...
  scene.text(`After a minute or two of letting ${((s as any).npcdesc ?? '')}'s cock stretch your ` + ((((s as any).sex_ev ?? 0)?.['position'] === 'anal') ? ('ass,') : ('pussy,')) + ' you nod for him to move again.');
  scene.text('"Okay. You can keep going," you grunt out.');
  // TODO-QSP: end
  scene.build();
}

function enterVirginEnjoyment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed_change'] === 1) {
    scene.actions([
      { label: '... still find it painful', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_hurt'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.text('... still find it really painful.');
    // TODO-QSP: dynamic text: Maybe it''s just the after effect of being too rough with you before carrying ov...
    scene.text(`Maybe it's just the after effect of being too rough with you before carrying over, but this <i>really fucking hurts!</i> Every time ${((st as any).npcdesc ?? '')} thrusts into you, it feels like your vagina is going to split in half. Everything about it hurts. Your insides hurt, your vulva hurts, your cervix hurts, it feels like your pussy is literally being stabbed. You keep expecting it to get better, for the pain to go away and the enjoyment to start, but it never does. All you can do is clench your teeth, squeeze your eyes shut, and keep enduring until it's over.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... aren\'t really enjoying it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_numb'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal', 1, 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 3));
    qspCall(st, 'stat', '');
    scene.text('... still don\'t really enjoy it...');
    // TODO-QSP: dynamic text: It hurt when <<$npcdesc>> first entered you and when he was just pounding on you...
    scene.text(`It hurt when ${((st as any).npcdesc ?? '')} first entered you and when he was just pounding on you with no regard for your comfort, but now that he's slowed down, it's just a sort of pressure you feel inside you. The sensation isn't painful but it you're not getting any pleasure from it either. After his previous speed, maybe your pussy just went numb...?`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... are starting to feel good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_good'] = 1;
    (st as any).orgasm_or = '';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.text('... start to feel really good...');
    scene.text('The pain of the previous form of fucking begins to fade and pleasure takes its place. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced, you can feel his cock deep inside you and it feels <i>so good</i>, causing you to openly moan as he fucks you.');
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it, you almost don''t realize when you'...
      scene.text(`You're so caught up in the enjoyment of it, you almost don't realize when you're about to come. The pressure inside you building and building with each time ${((st as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut as you cum hard on ${((st as any).npcdesc ?? '')}'s dick.`);
    } else {
      scene.text('You spend the next several minutes fucking joyously, wondering why you waited so long to feel this good!');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    scene.actions([
      { label: '... this is painful', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_hurt'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.text('<i>... this is really painful.</i>');
    if (((st as any).sex_ev ?? 0)?.['pos_speed'] === 'cowgirl3') {
      // TODO-QSP: dynamic text: This was a fucking terrible idea! Why did you think that you could lose your vir...
      scene.text(`This was a fucking terrible idea! Why did you think that you could lose your virginity like this? Why are you even trying? Tears well up in your eyes as you continue to impale yourself on ${((st as any).npcdesc ?? '')}'s cock, wondering to yourself why you're so fucking stupid.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'hurt') {
        // TODO-QSP: dynamic text: What initially started as a painful experience continues to be one. Every time <...
        scene.text(`What initially started as a painful experience continues to be one. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your vagina is going to split in half. Everything about it hurts. Your insides hurt, your vulva hurts, your cervix hurts, it feels like your pussy is literally being stabbed. You spend each moment praying he'll just cum already and your agony can end.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'fine') {
          // TODO-QSP: dynamic text: It wasn''t so bad when he first entered you, but what started as mild discomfort...
          scene.text(`It wasn't so bad when he first entered you, but what started as mild discomfort has become full blown agony. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your vagina is going to split in half. Everything about it hurts. Your insides hurt, your vulva hurts, your cervix hurts, it feels like your pussy is literally being stabbed. You keep expecting it to get better, for the pain to go away and the enjoyment to start, but it never does. All you can do is clench your teeth, squeeze your eyes shut, and keep enduring until it's over.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'mmm') {
            // TODO-QSP: dynamic text: It wasn''t so bad when he first entered you, but what started as mild discomfort...
            scene.text(`It wasn't so bad when he first entered you, but what started as mild discomfort has become full blown agony. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your vagina is going to split in half. Everything about it hurts. Your insides hurt, your vulva hurts, your cervix hurts, it feels like your pussy is literally being stabbed. You keep expecting it to get better, for the pain to go away and the enjoyment to start, but it never does. All you can do is clench your teeth, squeeze your eyes shut, and keep enduring until it's over.`);
          } else {
            // TODO-QSP: dynamic text: What initially started as a painful experience continues to be one. Every time <...
            scene.text(`What initially started as a painful experience continues to be one. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your vagina is going to split in half. Everything about it hurts. Your insides hurt, your vulva hurts, your cervix hurts, it feels like your pussy is literally being stabbed. You spend each moment praying he'll just cum already and your agony can end.`);
          }
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... you aren\'t really enjoying it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_numb'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.text('<i>... you aren\'t really enjoying this...</i>');
    if (((st as any).sex_ev ?? 0)?.['pos_speed'] === 'cowgirl3') {
      // TODO-QSP: dynamic text: It takes you a few minutes, but at some point you realize it doesn''t really hur...
      scene.text(`It takes you a few minutes, but at some point you realize it doesn't really hurt anymore. Actually, you don't really feel anything. You keep slamming your hips down on ${((st as any).npcdesc ?? '')}, expecting to feel something pleasurable, but all you really feel is a vague pressure inside you that ebbs and flows with the motions of your hips. Despite how hard you're riding him, you can't help but feel the experience is... boring?`);
    } else {
      // TODO-QSP: dynamic text: It hurt when <<$npcdesc>> first entered you, but now that your pussy has adjuste...
      scene.text(`It hurt when ${((st as any).npcdesc ?? '')} first entered you, but now that your pussy has adjusted but that pain has taken a back seat and become nothing more than a dull throb. But other than that, it's just a sort of pressure you feel inside you that comes and goes with the motions of his cock. The sensation isn't painful but it you're not getting any pleasure from it either. The experience is just sort of... bland.`);
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... this feels good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_good'] = 1;
    (st as any).orgasm_or = '';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'arousal', 'vaginal', (-15), 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    qspCall(st, 'stat', '');
    scene.text('<i>... this is starting to feel really good...</i>');
    if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'hurt') {
      scene.text('The initial pain you felt is still there, but now there\'s something else that\'s going along with it. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced. Your arousal flows like water from your pussy and his cock is slick with your blood and juices. It reaches deep inside you and it feels <i>so good</i>, causing you to openly moan.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'fine') {
        // TODO-QSP: dynamic text: That "fullness" you remarked upon earlier has somehow become even more full as <...
        scene.text(`That "fullness" you remarked upon earlier has somehow become even more full as ${((st as any).npcdesc ?? '')} has continued to fuck you. Your arousal flows like water from your pussy and his cock is slick with your blood and juices. It reaches deep inside you and it feels <i>so good</i>, causing you to openly moan.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'mmm') {
          // TODO-QSP: dynamic text: That "fullness" you remarked upon earlier has somehow become even more full as <...
          scene.text(`That "fullness" you remarked upon earlier has somehow become even more full as ${((st as any).npcdesc ?? '')} has continued to fuck you. Your arousal flows like water from your pussy and his cock is slick with your blood and juices. It reaches deep inside you and it feels <i>so good</i>, causing you to openly moan.`);
        } else {
          scene.text('The initial pain you felt is still there, but now there\'s something else that\'s going along with it. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced. Your arousal flows like water from your pussy and his cock is slick with your blood and juices. It reaches deep inside you and it feels <i>so good</i>, causing you to openly moan.');
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
      scene.actions([
        { label: '"Fuck me harder"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: "<<$npcdesc>>," you say. "I want you to fuck me harder."
    scene.text(`"${((st as any).npcdesc ?? '')}," you say. "I want you to fuck me harder."`);
    scene.text('"You\'re sure?" he asks.');
    scene.text('"Yeah, I\'m sure," you grin lustfully. "I can take it. I <i>want</i> it. Give me your dick!"');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'virg_continue_harder'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['pos_speed'] !== 'cowgirl3') {
        scene.actions([
          { label: 'Pick up the pace', goto: ['sex_ev_virgin', 'cowgirl_virg_hard2'] },
        ]);
      }
    }
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.actions([
        { label: 'Kiss him', goto: ['sex_ev_virgin', 'miss_virg_kiss'] },
      ]);
    }
    scene.actions([
      { label: 'Continue at this pace', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
      scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((st as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to come.`);
    } else {
      scene.text('You spend the next several minutes fucking joyously, wondering why you waited so long to feel this good!');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
      { label: '... this feels painfully good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_pain_good'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    (st as any).orgasm_or = '';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'arousal', 'vaginal', (-15), 'no_orgasm_msg', ((st as any).sex_ev ?? 0)?.['prostitution_flag']);
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: The initial pain you felt is still there, but somehhow it''s evolved. <<$npcdesc...
    scene.text(`The initial pain you felt is still there, but somehhow it's evolved. ${((st as any).npcdesc ?? '')}'s cock is slick with your blood cock and every time moves inside you, it feels like your vagina is going to split in half. It reaches deep inside you, like a knife stabbing into your cervix. And it feels <i>so good</i>.`);
    scene.text('It hurts like fire, but somehow it burns you in all the best ways. And you want nothing more than for it to continue. There are tears in your eyes, but you honestly can\'t tell anymore if they\'re tears of pain or tears of joy.');
    if (((st as any).sex_ev ?? 0)?.['position'] !== 'cowgirl') {
      scene.actions([
        { label: '"Fuck me harder"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: "<<$npcdesc>>," you say, tears now streaming down your face. "I want you to fuck...
    scene.text(`"${((st as any).npcdesc ?? '')}," you say, tears now streaming down your face. "I want you to fuck me harder."`);
    scene.text('"You\'re sure?" he asks hesitantly.');
    scene.text('"Yes! I\'m sure!" you cry even harder. "I <i>want</i> it. Give me your dick. Split me in half!"');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_virgin', 'virg_continue_harder'] },
    ]);
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['pos_speed'] !== 'cowgirl3') {
        scene.actions([
          { label: 'Fuck him harder', goto: ['sex_ev_virgin', 'cowgirl_virg_hard2'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue at this pace', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
      scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((st as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to come.`);
    } else {
      scene.text('You spend the next several minutes fucking joyously, wondering why you waited so long to feel this good!');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstTimeTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['virgin_talk'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['good_for_you'] = 1;
  if (String((s as any).locArgs?.[1] ?? '') === '') {
    scene.text('"So," he asks. "How was your first time?"');
  } else {
    scene.text('"Speaking of which," he asks. "How was your first time?"');
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
      qspCall(s, 'sex_ev_talk', 'nice_lie1');
      qspCall(s, 'sex_ev_talk', 'amazing_lie1');
    }
    scene.actions([
      { label: 'It really hurt', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = (-1);
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It really hurt," you grimace. "God, it was like I was getting stabbed with a knife! I don\'t get why people like doing this so much."');
    scene.text('"It gets better. You were probably too tight because you were a virgin."');
    scene.actions([
      { label: 'Really?', handler: (st: GameState) => {
    scene.text('"Really?" you ask, voice heavy with sketicism.');
    // TODO-QSP: dynamic text: "Yeah, really," <<$npcdesc>> laughs back. "Some girls I know said their first ti...
    scene.text(`"Yeah, really," ${((st as any).npcdesc ?? '')} laughs back. "Some girls I know said their first time hurt. But those same girls love it now."`);
    scene.text('"Wish you could\'ve warned me."');
    scene.text('"If it\'s any consolation, your pussy felt great."');
    scene.text('"It\'s not," you harumph, crossing your arms and he laughs again.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'I hope so', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I hope so," you groan, throwing your head back as <<$npcdesc>> laughs.
    scene.text(`"I hope so," you groan, throwing your head back as ${((st as any).npcdesc ?? '')} laughs.`);
    scene.text('"If it\'s any consolation, your pussy felt great."');
    scene.text('"It\'s not," you harumph, crossing your arms and he laughs again.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'How would you know?', handler: (st: GameState) => {
    scene.text('"How would you know?" you ask, giving him a dirty look. "Have you ever taken a cock inside you?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> laughs in reply but holds his hands up in surrender.
    scene.text(`${((st as any).npcdesc ?? '')} laughs in reply but holds his hands up in surrender.`);
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      { label: 'Didn\'t feel much (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 1;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('Not wanting to spoil the mood, you decide to lie.');
    scene.text('"I didn\'t feel very much to be honest. Maybe it\'s just because it\'s the first time?"');
    scene.text('"Maybe," he shrugs back.');
    scene.text('<i>God, I <b>wish</b> I didn\'t feel very much,</i> you cry internally.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
        qspCall(s, 'sex_ev_talk', 'nice_lie1');
        qspCall(s, 'sex_ev_talk', 'amazing_lie1');
      }
      scene.actions([
        { label: 'Didn\'t feel much', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 1;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"It was... I don\'t know..." you admit. "I didn\'t actually feel much. It hurt when you first put it in me, but after that it was just sort of... there... inside me..."');
    scene.actions([
      { label: 'Reassure him it wasn\'t bad', handler: (st: GameState) => {
    scene.text('"It wasn\'t bad!" you rush to reassure him. "But... it wasn\'t... what I expected I guess? I don\'t really know how this is supposed to feel..."');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Well, maybe it\'ll be better in the future. But I\'m sorry I couldn\'t make your first time special."');
      scene.text('You blush at how sweet he\'s being, but you don\'t say anything else and leave it there.');
    } else {
      scene.text('"Eh, this is why first times suck. You\'ll feel better next time, now that you\'re not a virgin."');
      scene.text('"I hope so," you say, not really sure how else to respond.');
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      { label: 'Disappointed', handler: (st: GameState) => {
    scene.text('"It was pretty disappointing if I\'m being honest," you say. "I was expecting more."');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Sorry I couldn''t live up to expectation," <<$npcdesc>> says with a rueful smil...
      scene.text(`"Sorry I couldn't live up to expectation," ${((st as any).npcdesc ?? '')} says with a rueful smile.`);
      scene.text('You blush at how sweet he\'s being, but you don\'t say anything else and leave it there.');
    } else {
      // TODO-QSP: dynamic text: "This is why first times suck," <<$npcdesc>> shrugs. "You''ll feel better next t...
      scene.text(`"This is why first times suck," ${((st as any).npcdesc ?? '')} shrugs. "You'll feel better next time, now that you're not a virgin."`);
      scene.text('"I hope so," you say, not really sure how else to respond.');
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'It was nice', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 2;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"It was... nice," you say, giving a genuine smile. "Felt really good. I just felt... <i>full</i>. Like my insides were getting massaged but like, better than a massage."');
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I''m glad I was able to give you a good first time," <<$npcdesc>> smiles back, ...
      scene.text(`"I'm glad I was able to give you a good first time," ${((st as any).npcdesc ?? '')} smiles back, leaning in to kiss you.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissTurnHead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Kiss him back', handler: (st: GameState) => {
    scene.text('You smile and let him press his lips against yours, leaning in to steal another one when he pulls away.');
    scene.text('<i>Wow, he\'s really sweet,</i> you think to yourself when he finally breaks away from the kiss.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> grins. "Might not always be that way though. Not every guy'...
      scene.text(`"Yeah," ${((st as any).npcdesc ?? '')} grins. "Might not always be that way though. Not every guy's as good a lay as I am."`);
      qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
        { label: 'It was amazing', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 3;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('"It was amazing!" you gush with a shameless grin. "It was like I\'ve been missing something this entire time. And you being inside me made me feel <i>full</i>. I can\'t believe I waited this long to have sex! I need to be careful or I could get addicted to this!"');
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: Perhaps spurred by your words, <<$npcdesc>> quickly moves in to kiss you.
      scene.text(`Perhaps spurred by your words, ${((st as any).npcdesc ?? '')} quickly moves in to kiss you.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissTurnHead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Kiss him back', handler: (st: GameState) => {
    scene.text('You smile and let him. He presses his lips against you passionately and your eyes go wide in surprise when you feel his tongue snake between your lips and press against yours. You push back with your own, enjoying the way it feels, savoring the taste of his mouth. It\'s not as good as the sex you just experienced, but it feels <i>damn</i> nice. You even lean in to steal another kiss when he pulls away.');
    scene.text('"I could get addicted to you if I\'m not careful," he whispers when you finally let him break away.');
    scene.text('Despite everything, you turn feel your face turn beet red. Whether from arousal or embarrassment or both, you\'re not sure. But fuck!');
    scene.text('<i>He is <b>so</b> sweet!</i> you think to yourself.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> grins. "Might not always be that way though. Not every guy'...
      scene.text(`"Yeah," ${((st as any).npcdesc ?? '')} grins. "Might not always be that way though. Not every guy's as good a lay as I am."`);
      scene.actions([
        { label: 'Thought: Really?!', handler: (st: GameState) => {
    scene.text('<i>Fuck, really?!</i> you think to yourself. <i>This isn\'t how it always feels? Shit!</i>');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Thought: Arrogant much?', handler: (st: GameState) => {
    scene.text('<i>Fuck, arrogant much?</i> you think to yourself. <i>If only his dick was as big as his head.</i>');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHurtThenGood(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNumbThenGood(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBigCockVirgin(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterArrogantReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Thought: Really?!', handler: (st: GameState) => {
    scene.text('<i>Fuck, really?!</i> you think to yourself. <i>This isn\'t how it always feels?</i>');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'Thought: "Arrogant much?"', handler: (st: GameState) => {
    scene.text('<i>If only his dick was as big as his head,</i> you think to yourself, resisting the urge to roll your eyes.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterNiceLie1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It was nice (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 3;
    ((st as any).first_time_nice_lie1 = (st as any).first_time_nice_lie1 ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('"It was... nice," you say, giving a forced smile. Actually, it hurt like hell! But you don\'t want to spoil the mood so you just lie instead. "Felt really good."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('"It was... nice," you say, giving a forced smile. Actually, it didn\'t feel like very much at all. All you really felt was a weird pressure moving inside you. Didn\'t feel bad, but it didn\'t feel good either. But you don\'t want to hurt his feelings so you just lie instead. "Felt really good."');
      }
    }
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I''m glad I was able to give you a good first time," <<$npcdesc>> smiles back, ...
      scene.text(`"I'm glad I was able to give you a good first time," ${((st as any).npcdesc ?? '')} smiles back, leaning in to kiss you.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissTurnHead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Kiss him back', handler: (st: GameState) => {
    scene.text('You smile and let him press his lips against yours, leaning in to steal another one when he pulls away. Unlike the experience you just had, this <i>does</i> feel nice.');
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('Losing your virginity was painful, but at least he\'s sweet.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('Losing your virginity didn\'t feel like much in the end, but at least he\'s sweet.');
      }
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> grins. "Might not always be that way though. Not every guy'...
      scene.text(`"Yeah," ${((st as any).npcdesc ?? '')} grins. "Might not always be that way though. Not every guy's as good a lay as I am."`);
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was fucking torture!</i>');
      } else {
        if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was boring as all hell!</i>');
        }
      }
      qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterNiceLie2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It was nice (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 3;
    ((st as any).first_time_nice_lie1 = (st as any).first_time_nice_lie1 ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('"It was... nice," you say, giving a forced smile, trying to ignore his hand between your legs. Actually, it hurt like hell! But you don\'t want to spoil the mood so you just lie instead. "Felt really good."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('"It was... nice," you say, giving a forced smile, boredly ignoring his hand between your legs. Actually, it didn\'t feel like very much at all. All you really felt was a weird pressure moving inside you. Didn\'t feel bad, but it didn\'t feel good either. But you don\'t want to hurt his feelings so you just lie instead. "Felt really good."');
      }
    }
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "I''m glad I was able to give you a good first time," <<$npcdesc>> smiles back, ...
      scene.text(`"I'm glad I was able to give you a good first time," ${((st as any).npcdesc ?? '')} smiles back, leaning in to kiss you.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissTurnHead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Kiss him back', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You smile and let <<$npcdesc>> press his lips against yours, gasping into his mo...
    scene.text(`You smile and let ${((st as any).npcdesc ?? '')} press his lips against yours, gasping into his mouth when you feel his fingers thumb over your clit again before pulling away. Unlike the experience you just had, this <i>does</i> feel nice.`);
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('Losing your virginity was painful, but at least he\'s sweet.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('Losing your virginity didn\'t feel like much in the end, but at least he\'s sweet.');
      }
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> grins, giving your clit a hard rub before pulling away. "Mi...
      scene.text(`"Yeah," ${((st as any).npcdesc ?? '')} grins, giving your clit a hard rub before pulling away. "Might not always be that way though. Not every guy's as good a lay as I am."`);
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was fucking torture!</i>');
      } else {
        if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was boring as all hell!</i>');
        }
      }
      qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterAmazingLie1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It was amazing (lie)', handler: (st: GameState) => {
    ((st as any).first_time_nice_amazing = (st as any).first_time_nice_amazing ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 3;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('"It was amazing!" you say, giving a fake smile, hoping it isn\'t coming out like a grimace. Actually, it hurt like hell! But you don\'t want to spoil the mood so you just lie instead. "I loved the way it felt when you were inside me. I could get addicted to this if I\'m not careful."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('"It was amazing!" you say, giving a fake smile. Actually, it didn\'t feel like very much at all. All you really felt was a weird pressure moving inside you. Didn\'t feel bad, but it didn\'t feel good either. But you don\'t want to hurt his feelings so you just lie instead. "I loved the way it felt when you were inside me. I could get addicted to this if I\'m not careful."');
      }
    }
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: Perhaps spurred by your words, <<$npcdesc>> quickly moves in to kiss you.
      scene.text(`Perhaps spurred by your words, ${((st as any).npcdesc ?? '')} quickly moves in to kiss you.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissTurnHead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Kiss him back', handler: (st: GameState) => {
    scene.text('You smile and let him. He presses his lips against you passionately and your eyes go wide in surprise when you feel his tongue snake between your lips and press against yours. You push back with your own, enjoying the way it feels, savoring the taste of his mouth. Unlike the experience you just had, this <i>does</i> feel nice. You even lean in to steal another kiss when he pulls away.');
    scene.text('"I could get addicted to you if I\'m not careful," he whispers when you finally let him break away.');
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('Losing your virginity was painful, but at least he\'s sweet.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        // TODO-QSP: dynamic text: Losing your virginity didn''t feel like much in the end, but at least <<$npcdesc...
        scene.text(`Losing your virginity didn't feel like much in the end, but at least ${((st as any).npcdesc ?? '')} is sweet.`);
      }
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Better hope you don''t," <<$npcdesc>> grins. "Not every guy''s as good a lay as...
      scene.text(`"Better hope you don't," ${((st as any).npcdesc ?? '')} grins. "Not every guy's as good a lay as I am. Could be hard for you to get your fix."`);
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was fucking torture!</i>');
      } else {
        if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was boring as hell!</i>');
        }
      }
      qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterAmazingLie2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It was amazing (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_enjoyment_share'] = 3;
    ((st as any).first_time_nice_amazing = (st as any).first_time_nice_amazing ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.img(`images/shared/sex/after/pillow_talk${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('"It was amazing!" you say, giving a forced grin, trying to ignore the hand between your legs. Actually, it hurt like hell! But you don\'t want to spoil the mood so you just lie instead. "I loved the way it felt when you were inside me. I could get addicted to this if I\'m not careful."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        scene.text('"It was amazing!" you say, giving a forced grin, boredly ignoring hand between your legs. Actually, it didn\'t feel like very much at all. All in all, the experience was pretty boring. Practically numb. But you don\'t want to hurt his feelings so you just lie instead. "I loved the way it felt when you were inside me. I could get addicted to this if I\'m not careful."');
      }
    }
    if (((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: Perhaps spurred by your words, <<$npcdesc>> quickly moves in to kiss you.
      scene.text(`Perhaps spurred by your words, ${((st as any).npcdesc ?? '')} quickly moves in to kiss you.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissTurnHead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Kiss him back', handler: (st: GameState) => {
    scene.text('You smile and let him. He presses his lips against you passionately and your eyes go wide in surprise when you feel his tongue snake between your lips and press against yours. You push back with your own, enjoying the way it feels, savoring the taste of his mouth. Then you feel his fingers give your clit another good rub, making you moan directly into his mouth. Unlike the experience you just had, this <i>does</i> feel nice. You bite your lip, letting the pleasure roll through you.');
    scene.text('"I could get addicted to you if I\'m not careful," he whispers when you finally let him break away.');
    if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
      scene.text('Losing your virginity was painful, but at least he\'s sweet.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
        // TODO-QSP: dynamic text: Losing your virginity didn''t feel like much in the end, but at least <<$npcdesc...
        scene.text(`Losing your virginity didn't feel like much in the end, but at least ${((st as any).npcdesc ?? '')} is sweet.`);
      }
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Better hope you don''t," <<$npcdesc>> grins. "Not every guy''s as good a lay as...
      scene.text(`"Better hope you don't," ${((st as any).npcdesc ?? '')} grins. "Not every guy's as good a lay as I am. Could be hard for you to get your fix."`);
      if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
        scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was fucking torture!</i>');
      } else {
        if (((st as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
          scene.text('<i>Fuck, I hope so,</i> you think to yourself. <i>That was boring as all hell!</i>');
        }
      }
      qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
    }
  } },
  ]);
  scene.build();
}

function enterHurtThenGood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin_hurt'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
      scene.actions([
        { label: 'It hurt but then it felt good', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It was really painful at first," you smile sheepishly. "It took me a while to get used to it, but eventually I started feeling really good. It was really surprising how much it hurt though."');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm'] > 0) {
      scene.actions([
        { label: 'It hurt until you came inside', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It was really painful at first," you smile sheepishly. "Actually, I didn\'t enjoy it at all. But then when you came..." You stop, shivering involuntarily. "I don\'t know what happened, but it made me come too. After that, everything started feeling really good."');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNumbThenGood(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin_numb'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
      scene.actions([
        { label: 'It took a while to feel good', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It didn\'t actually feel like much at first," you confess. "A little bit of pain when you put it in, and then my pussy went almost numb for a while. I couldn\'t really feel anything. But after a while I started feeling really good. Thanks for keeping it up until then."');
    // TODO-QSP: dynamic text: You smile gratefully at <<$npcdesc>>.
    scene.text(`You smile gratefully at ${((st as any).npcdesc ?? '')}.`);
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm'] > 0) {
      scene.actions([
        { label: 'Felt good when you came inside', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"It didn\'t actually feel like much at first," you confess. "A little bit of pain when you put it in, and then my pussy went almost numb for a while. I couldn\'t really feel anything. But then when you came..." You stop, shivering involuntarily. "It... <i>awoke</i> something in me. Somehow it made me come too. And then it started feeling really good."');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBigCockVirgin(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['big_cock_virgin'] === 1  &&  ((s as any).pain ?? 0)?.['vaginal'] > 10) {
    scene.actions([
      { label: 'He was too big', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I think you might have been too big for me," you admit, ruefully rubbing your thighs together over your sore, throbbing pussy.');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      scene.text('"Sorry," he replies with a small smile, looking as apologetic as he says. "I probably wasn\'t the best one to have your first time with."');
      scene.actions([
        { label: 'Reassure him', handler: (st: GameState) => {
    scene.text('Despite the pain, you touch him affectionately on the arm.');
    scene.text('"I wouldn\'t have done anything differently," you smile back softly.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Probably not." You grimace as another throb of pain pulses inside you. You\'re going to be feeling this tomorrow for sure...');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        { label: '"Next time will be better"', handler: (st: GameState) => {
    ((st as any).npc_rel = (st as any).npc_rel ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_rel[String((st as any).npcID ?? 0)] ?? 0) + (1);
    scene.text('"I\'m not too stressed about it," you smile wryly. "Next time will be better."');
    // TODO-QSP: dynamic text: "Next time...?" <<$npcdesc>> raises an amused eyebrow.
    scene.text(`"Next time...?" ${((st as any).npcdesc ?? '')} raises an amused eyebrow.`);
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "You''ll be grateful one day," he grins back, stopping to seemingly admire his o...
        scene.text(`"You'll be grateful one day," he grins back, stopping to seemingly admire his own ${((st as any).dick_desc ?? '')} cock. "After a bunch of tiny limp dick dudes with micro penises, you'll look back and remember me."`);
        scene.actions([
          { label: 'Laugh', handler: (st: GameState) => {
    scene.text('"I hope not!" you laugh in return.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'Arrogant much? (thought)', handler: (st: GameState) => {
    // TODO-QSP: $virginity_desc[] = 'douchebag'
    scene.text('<i>Fuck me,</i> you think to yourself. <i>I gave my virginity to a douchebag...</i>');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: "It <i>is</i> a pretty big one," he replies with a small smile, looking down at ...
        scene.text(`"It <i>is</i> a pretty big one," he replies with a small smile, looking down at his own ${((st as any).dick_desc ?? '')} cock. "Not much I can do about the size of my own dick though."`);
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Just the way you were born I guess," you smile before another throb of pain pulses inside you, turning it to a wince. You\'re going to be feeling this tomorrow for sure...');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
          { label: 'Joke about it', handler: (st: GameState) => {
    scene.text('"As if you wish you were smaller," you snort. "Don\'t lie. You like having a big dick."');
    // TODO-QSP: dynamic text: "Okay, maybe I do," <<$npcdesc>> chuckles.
    scene.text(`"Okay, maybe I do," ${((st as any).npcdesc ?? '')} chuckles.`);
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      }
    }
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKissTurnHead(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_virgin ---------------------------------
  scene.actions([
    { label: 'Turn your head', handler: (st: GameState) => {
    scene.text('You turn your head quickly, moving your lips away from his.');
    if (((st as any).pcs_lover ?? 0) > 0) {
      scene.actions([
        { label: 'I have a boyfriend', handler: (st: GameState) => {
    scene.text('"Don\'t do that," you say, not meeting his eyes. "I have a boyfriend."');
    scene.text('"Kissing isn\'t the worst thing we\'ve done if you\'re worried about cheating," he smirks, but backs off anyways.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    } else {
      if (((st as any).npc_know_cheat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.actions([
          { label: 'Boyfriend, remember?', handler: (st: GameState) => {
    scene.text('"Hey," you say, not meeting his eyes. "I have a boyfriend, remember?"');
    scene.text('"Kissing isn\'t the worst thing we\'ve done if you\'re worried about cheating," he smirks, but backs off anyways.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Too intimate', handler: (st: GameState) => {
    scene.text('"Uhh, sorry... I guess I\'m not ready for that yet..."');
    scene.text('"We just had sex and you don\'t want to kiss?" he asks, amusedly. "That\'s too intimate for you?"');
    scene.text('"Uhh, yeah... I guess..." you smile awkwardly back.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
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
    case 'virgin_force_happen':
      enterVirginForceHappen(s, scene);
      break;
    case 'virgin_force_panic':
      enterVirginForcePanic(s, scene);
      break;
    case 'buy_virginity1':
      enterBuyVirginity1(s, scene);
      break;
    case 'not_for_sale':
      enterNotForSale(s, scene);
      break;
    case 'buy_virginity_bigger_offer':
      enterBuyVirginityBiggerOffer(s, scene);
      break;
    case 'buy_virginity_consider':
      enterBuyVirginityConsider(s, scene);
      break;
    case 'buy_virginity_accept':
      enterBuyVirginityAccept(s, scene);
      break;
    case 'buy_virginity_accept2':
      enterBuyVirginityAccept2(s, scene);
      break;
    case 'no_condom_offer':
      enterNoCondomOffer(s, scene);
      break;
    case 'paid_creampie_offer':
      enterPaidCreampieOffer(s, scene);
      break;
    case 'his_choice':
      enterHisChoice(s, scene);
      break;
    case 'insertion_pre':
      enterInsertionPre(s, scene);
      break;
    case 'virgin_fuck_route':
      enterVirginFuckRoute(s, scene);
      break;
    case 'change_mind':
      enterChangeMind(s, scene);
      break;
    case 'no_condom1':
      enterNoCondom1(s, scene);
      break;
    case 'no_condom2':
      enterNoCondom2(s, scene);
      break;
    case 'miss_virg_start':
      enterMissVirgStart(s, scene);
      break;
    case 'miss_virg_norm1':
      enterMissVirgNorm1(s, scene);
      break;
    case 'miss_virg_norm1.1':
      enterMissVirgNorm1_1(s, scene);
      break;
    case 'miss_virg_kiss':
      enterMissVirgKiss(s, scene);
      break;
    case 'miss_virg_norm2':
      enterMissVirgNorm2(s, scene);
      break;
    case 'miss_virg_hard1':
      enterMissVirgHard1(s, scene);
      break;
    case 'miss_virg_hard2':
      enterMissVirgHard2(s, scene);
      break;
    case 'miss_virg_hard2_2':
      enterMissVirgHard2_2(s, scene);
      break;
    case 'doggy_virg_norm1':
      enterDoggyVirgNorm1(s, scene);
      break;
    case 'doggy_virg_norm1.1':
      enterDoggyVirgNorm1_1(s, scene);
      break;
    case 'doggy_virg_norm2':
      enterDoggyVirgNorm2(s, scene);
      break;
    case 'doggy_virg_hard1':
      enterDoggyVirgHard1(s, scene);
      break;
    case 'doggy_virg_hard2':
      enterDoggyVirgHard2(s, scene);
      break;
    case 'doggy_virg_hard2_2':
      enterDoggyVirgHard2_2(s, scene);
      break;
    case 'cowgirl_virg_norm1':
      enterCowgirlVirgNorm1(s, scene);
      break;
    case 'cowgirl_virg_hard1':
      enterCowgirlVirgHard1(s, scene);
      break;
    case 'cowgirl_virg_hard2':
      enterCowgirlVirgHard2(s, scene);
      break;
    case 'virg_continue_harder':
      enterVirgContinueHarder(s, scene);
      break;
    case 'fuck_cum':
      enterFuckCum(s, scene);
      break;
    case 'girl_cum':
      enterGirlCum(s, scene);
      break;
    case 'miss_cum':
      enterMissCum(s, scene);
      break;
    case 'doggy_cum':
      enterDoggyCum(s, scene);
      break;
    case 'cowgirl_cum':
      enterCowgirlCum(s, scene);
      break;
    case 'hurt_react1':
      enterHurtReact1(s, scene);
      break;
    case 'hurt_react2':
      enterHurtReact2(s, scene);
      break;
    case 'fine_react1':
      enterFineReact1(s, scene);
      break;
    case 'fine_react2':
      enterFineReact2(s, scene);
      break;
    case 'mmm_react1':
      enterMmmReact1(s, scene);
      break;
    case 'mmm_react2':
      enterMmmReact2(s, scene);
      break;
    case 'big_react1':
      enterBigReact1(s, scene);
      break;
    case 'big_react2':
      enterBigReact2(s, scene);
      break;
    case 'virgin_enjoyment':
      enterVirginEnjoyment(s, scene);
      break;
    case 'first_time_talk':
      enterFirstTimeTalk(s, scene);
      break;
    case 'arrogant_react':
      enterArrogantReact(s, scene);
      break;
    case 'nice_lie1':
      enterNiceLie1(s, scene);
      break;
    case 'nice_lie2':
      enterNiceLie2(s, scene);
      break;
    case 'amazing_lie1':
      enterAmazingLie1(s, scene);
      break;
    case 'amazing_lie2':
      enterAmazingLie2(s, scene);
      break;
    case 'hurt_then_good':
      enterHurtThenGood(s, scene);
      break;
    case 'numb_then_good':
      enterNumbThenGood(s, scene);
      break;
    case 'big_cock_virgin':
      enterBigCockVirgin(s, scene);
      break;
    case 'kiss_turn_head':
      enterKissTurnHead(s, scene);
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
