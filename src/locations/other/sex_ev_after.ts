import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterQuit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Storm out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"You know what? <i>Fuck you!</i>"');
    scene.text('You leap off the bed in a huff and start grabbing your things and throwing your clothes on.');
    if (((st as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      scene.actions([
        { label: 'We\'re through (break up)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['break_up'] = 1;
    scene.text('"We\'re through," you sneer. The moment you\'re fully dressed, you stalk out the door, shouting over your shoulder, "Don\'t fucking call me again!"');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Slam the door', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: The moment you''re fully dressed, you stalk out the door, giving <<$npcdesc>> th...
    scene.text(`The moment you're fully dressed, you stalk out the door, giving ${((st as any).npcdesc ?? '')} the finger as you slam it behind you.`);
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Give him the finger', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: The moment you''re fully dressed, you stalk out the door, giving <<$npcdesc>> th...
    scene.text(`The moment you're fully dressed, you stalk out the door, giving ${((st as any).npcdesc ?? '')} the finger as you slam it behind you.`);
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Kick ' + String(((s as any).npcdesc ?? '') ?? '') + ' out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "You know what, <<$npcdesc>>? <i>Fuck you!</i>" You shove <<$npcdesc>> out of yo...
    scene.text(`"You know what, ${((st as any).npcdesc ?? '')}? <i>Fuck you!</i>" You shove ${((st as any).npcdesc ?? '')} out of your bed. "Get the fuck out! We're done here!"`);
    scene.text('You glare daggers at him as he gets dressed. The moment he\'s done, you practically shove him out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterQuit2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['annoyed'] = 1;
  scene.text('Both of you lay back in bed, slightly frustrated with each other to the point that the mood is demonstrably ruined, but neither willing to concede.');
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from the pockets of his discarded clothing and...
      scene.text(`${((s as any).npcdesc ?? '')} grabs his cigarettes from the pockets of his discarded clothing and lights up, puffing away at it in annoyance.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from his nightstand and lights up, puffing awa...
        scene.text(`${((s as any).npcdesc ?? '')} grabs his cigarettes from his nightstand and lights up, puffing away at it in annoyance.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from the nightstand and lights up, puffing awa...
        scene.text(`${((s as any).npcdesc ?? '')} grabs his cigarettes from the nightstand and lights up, puffing away at it in annoyance.`);
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterStopHere(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask to stop', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sleep_fuck'] > 0) {
      scene.actions([
        { label: 'Confirm', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Satisfied?" you ask sleepily.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['blowjob_continue_ask'] === 1) {
        scene.actions([
          { label: 'Confirm', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"There, happy now?" you ask, playing with his cock.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Confirm', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHereMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStopHereMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['force_harden'] > 0  ||  ((s as any).sex_ev ?? 0)?.['not_done'] === 1) {
    scene.actions([
      { label: 'Now I\'m done', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'inserted_img');
    // TODO-QSP: dynamic text: "<i>Now</i> I''m done," you grin, having squeezed every orgasm you could out of ...
    scene.text(`"<i>Now</i> I'm done," you grin, having squeezed every orgasm you could out of ${((st as any).npcdesc ?? '')}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFinishSex(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You good to stop here?', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['keep_going_continue'] > 0) {
      qspCall(st, 'sex_ev_sex', 'inserted_img');
      scene.text('"Is that good enough for you now?" you ask.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['first_break'] === 1) {
        scene.text('"Actually," you say. "I\'m happy if we just to finish here. How about you?"');
      } else {
        qspCall(st, 'sex_ev_sex', 'inserted_img');
        scene.text('"I think I\'m good here," you say. "How about you?"');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I\'m shattered', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'inserted_img');
    if (((st as any).sex_ev ?? 0)?.['consecutive_orgasm'] === 1) {
      scene.text('"Can we... stop here...?" you pant tiredly. "That last orgasm really took it out of me. I\'m shattered..."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
        scene.text('"Can we... stop here...?" you pant tiredly. "You made me come so many times in a row... I\'m shattered..."');
      } else {
        scene.text('"Can we... stop here...?" you pant tiredly. "I\'m absolutely shattered..."');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
    scene.actions([
      { label: 'Should get back to the party', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['back_to_party'] = 1;
    qspCall(st, 'sex_ev_sex', 'inserted_img');
    scene.text('"Good to stop here?" you ask. "We should probably get back to the party soon."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Need to get going', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'inserted_img');
    scene.text('"You mind if we stop here?" you ask. "I need to get going soon."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  qspCall(s, 'sex_ev_pillow_talk2', 'wakeup_sex_late_for_school');
  // TODO-QSP: end
  scene.build();
}

function enterStopHere2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['finish_ask'] = 1;
  if ((((s as any).totminut ?? 0) > ((s as any).sex_ev ?? 0)?.['start_time'] + 60  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinishSex(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      if (((s as any).sex_ev ?? 0)?.['back_to_party'] === 0) {
        scene.text('"Yeah," he nods. "We should probably get back to the party soon."');
      } else {
        scene.text('"Yeah," he nods. "Probably should."');
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinishSex(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['blowjob_continue_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5) {
        if (((s as any).sex_ev ?? 0)?.['npc_late_work'] === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinishSex(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] > 0  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinishSex(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] > 0) {
              // TODO-QSP: dynamic text: "Just a couple more times?" <<$npcdesc>> begs. "I still want to get off a few mo...
              scene.text(`"Just a couple more times?" ${((s as any).npcdesc ?? '')} begs. "I still want to get off a few more times with you."`);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskContinueOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  (Math.floor(Math.random() * 3) + 1))) {
                // TODO-QSP: dynamic text: "You''re done already?" <<$npcdesc>> complains. "I still want to get off a few m...
                scene.text(`"You're done already?" ${((s as any).npcdesc ?? '')} complains. "I still want to get off a few more times with you."`);
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskContinueOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['ask_to_cum_once'] = 1;
                if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                  // TODO-QSP: dynamic text: "Can I just come real quick?" <<$npcdesc>> asks. "I''m really close."
                  scene.text(`"Can I just come real quick?" ${((s as any).npcdesc ?? '')} asks. "I'm really close."`);
                }
                // TODO-QSP: dynamic text: "Are you sure?" <<$npcdesc>> asks. "You haven''t gotten to come yet."
                scene.text(`"Are you sure?" ${((s as any).npcdesc ?? '')} asks. "You haven't gotten to come yet."`);
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskContinueOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  // TODO-QSP: dynamic text: "I was actually hoping to go a few more times. But if you want to stop, that''s ...
                  scene.text(`"I was actually hoping to go a few more times. But if you want to stop, that's all right." ${((s as any).npcdesc ?? '')} gives you a gentle smile.`);
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAskContinueOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              }
            }
          }
        }
      } else {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFinishSex(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAskContinueOptions(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWellContinue(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 3)  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Mom will kill me', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['mom_kill'] = ((st as any).sex_ev['mom_kill'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 1;
    if (((st as any).sex_ev ?? 0)?.['keep_going_continue'] >= 1) {
      if (((st as any).hour ?? 0) < 3) {
        // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>," you say. "I can''t. My mom is already going to kill me...
        scene.text(`"Seriously ${((st as any).npcdesc ?? '')}," you say. "I can't. My mom is already going to kill me for staying out past curfew."`);
      } else {
        // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>," you say. "I can''t. I need to get home soon or my mom ...
        scene.text(`"Seriously ${((st as any).npcdesc ?? '')}," you say. "I can't. I need to get home soon or my mom will kill me."`);
      }
    } else {
      // TODO-QSP: dynamic text: "I wish I could, but I need to get home <<$npcdesc>>," you shake your head. "My ...
      scene.text(`"I wish I could, but I need to get home ${((st as any).npcdesc ?? '')}," you shake your head. "My mom will kill me if I'm not back before midnight."`);
    }
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Well, I guess there\'s always next time," he says softly.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).sex_ev ?? 0)?.['cum_count'] < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - 5) {
        scene.text('"Come on, please? Just a couple more times?"');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 1;
        // TODO-QSP: dynamic text: "Your mom''s a bitch, you know that?" <<$npcdesc>> grumbles, pulling away.
        scene.text(`"Your mom's a bitch, you know that?" ${((st as any).npcdesc ?? '')} grumbles, pulling away.`);
        scene.actions([
          { label: 'Tell me about it', handler: (st: GameState) => {
    scene.text('"Tell me about it," you roll your eyes. "At least you don\'t have to live with her."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Don\'t talk about my mom like that', handler: (st: GameState) => {
    scene.text('"Hey!" you growl. "Don\'t talk about my mom like that!"');
    scene.text('"But she-"');
    scene.text('"She\'s still my mom, asshole!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 3) {
    scene.actions([
      { label: 'Sore pussy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sore_pussy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 1;
    scene.text('"My pussy is so sore," you say, rubbing his arm, feeling genuinely apologetic. "You\'re gonna fuck me to death if we keep going."');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> smiles apologetically at you.
      scene.text(`${((st as any).npcdesc ?? '')} smiles apologetically at you.`);
      scene.text('"Oh. Sorry about that..."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).sex_ev ?? 0)?.['cum_count'] < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - 5) {
        scene.text('"Come on, please? Just a couple more times?"');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> seems really disappointed, almost upset.
        scene.text(`${((st as any).npcdesc ?? '')} seems really disappointed, almost upset.`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I can\'t keep going', handler: (st: GameState) => {
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
      } else {
        // TODO-QSP: dynamic text: "I''m sorry <<$npcdesc>>," you say, rubbing his arm, genuinely apologetic. "But ...
        scene.text(`"I'm sorry ${((st as any).npcdesc ?? '')}," you say, rubbing his arm, genuinely apologetic. "But I just can't keep up with your sex drive. I'm all tapped out. Maybe next time?"`);
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> smiles wistfully at you but also doesn''t seem very put off.
      scene.text(`${((st as any).npcdesc ?? '')} smiles wistfully at you but also doesn't seem very put off.`);
      scene.text('"I guess it\'s fine..."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "I''m sorry <<$npcdesc>>," you say, rubbing his arm, genuinely apologetic. "But ...
      scene.text(`"I'm sorry ${((st as any).npcdesc ?? '')}," you say, rubbing his arm, genuinely apologetic. "But I just can't keep up with your sex drive. I'm all tapped out. Maybe next time?"`);
      if (((st as any).sex_ev ?? 0)?.['cum_count'] < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - 5) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Come on, please? Just one more time?"');
          scene.actions([
            { label: 'Not happening', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 1;
    scene.text('"Sorry," you shake your head. "But I just can\'t."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          scene.text('"Can I at least get a blowjob?"');
          ((st as any).sex_ev = (st as any).sex_ev ?? {})['blowjob_continue_ask'] = 1;
          qspCall(st, 'sex_ev_foreplay', 'bj_ask2');
          scene.actions([
            { label: 'Not happening', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 1;
    scene.text('"Sorry," you shake your head. "But I just can\'t."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> seems really disappointed, almost upset.
        scene.text(`${((st as any).npcdesc ?? '')} seems really disappointed, almost upset.`);
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 1;
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
    { label: 'I don\'t have time', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_time'] = ((st as any).sex_ev['no_time'] ?? 0) + (1);
    if (((st as any).sex_ev ?? 0)?.['keep_going_continue'] >= 1) {
      // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>," you say. "I can''t. You''re gonna make me late."
      scene.text(`"Seriously ${((st as any).npcdesc ?? '')}," you say. "I can't. You're gonna make me late."`);
    } else {
      // TODO-QSP: dynamic text: "I wish I could, but I don''t have time <<$npcdesc>>," you shake your head. "I r...
      scene.text(`"I wish I could, but I don't have time ${((st as any).npcdesc ?? '')}," you shake your head. "I really need to get going soon."`);
    }
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Well, I don\'t want to make you late," he says softly.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['cum_count'] < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - 5) {
        scene.text('"Come on, please? Just a couple more times?"');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> seems really disappointed, almost upset.
        scene.text(`${((st as any).npcdesc ?? '')} seems really disappointed, almost upset.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWellContinue(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Well...', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['blue_ball'] = 0;
    if (((st as any).sex_ev ?? 0)?.['ask_to_cum_once'] === 1) {
      scene.actions([
        { label: 'Let him finish', handler: (st: GameState) => {
    scene.text('"Okay," you say softly.');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['keep_going_continue'] = ((st as any).sex_ev['keep_going_continue'] ?? 0) + (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['no_time'] === 0) {
        scene.actions([
          { label: 'I can be late', handler: (st: GameState) => {
    scene.text('"Well... Maybe I could be a <i>little</i> late..." you say with a soft smile.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
      scene.actions([
        { label: 'Acquiesce', handler: (st: GameState) => {
    scene.text('"Well..." You don\'t really want to keep going but you can\'t bring yourself to say no. With a sigh, you let him pull you back into position.');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['keep_going_continue'] = ((st as any).sex_ev['keep_going_continue'] ?? 0) + (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'We can\'t have that', handler: (st: GameState) => {
    scene.text('"Well, we can\'t have you going unsatisfied now can we?" you say with a teasing smile.');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['keep_going_continue'] = ((st as any).sex_ev['keep_going_continue'] ?? 0) + (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'I have a <i>little</i> more time', handler: (st: GameState) => {
    scene.text('"Well... I guess I might be able to keep going a <i>little</i> longer," you say with a soft smile.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWellContinue2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWellContinue2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['keep_going_continue'] = ((s as any).sex_ev['keep_going_continue'] ?? 0) + (1);
  qspCall(s, 'sex_ev_sex', 'reset');
  qspCall(s, 'sex_ev_sex', 'keep_fucking_act');
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    { label: 'Foreplay', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '');
  } },
    { label: 'Sex', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
      qspCall(st, 'sex_ev_condoms', 'condoms');
    } else {
      qspCall(st, 'sex_ev_sex', 'position_choose');
    }
  } },
  ]);
  scene.build();
}

function enterTapOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous'  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
      scene.actions([
        { label: 'Tap out (too big)', handler: (st: GameState) => {
    qspCall(st, 'pain', '4', 'cervix', 'ache');
    qspCall(st, 'pain', '4', 'vaginal', 'stretch');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['tap_out'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sore_pussy'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.text('"I can\'t keep this up..." you pant breathlessly. "You\'re just too big for me... I can\'t keep going..."');
    } else {
      // TODO-QSP: dynamic text: "I can''t keep this up..." you pant, wincing at the pain of <<$npcdesc>>''s larg...
      scene.text(`"I can't keep this up..." you pant, wincing at the pain of ${((st as any).npcdesc ?? '')}'s large cock stretching your pussy past its limits. "You're too big for me... I just... I can't keep going..."`);
    }
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Come on, don''t be like that," <<$npcdesc>> moans. "You just need to get used t...
      scene.text(`"Come on, don't be like that," ${((st as any).npcdesc ?? '')} moans. "You just need to get used to it. Don't pussy out now."`);
      scene.actions([
        { label: 'I can\'t', handler: (st: GameState) => {
    ((st as any).npc_dick_too_big = (st as any).npc_dick_too_big ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"I just can\'t," you shake your head, legs tightening over your sore lady bits. "My pussy hurts so much, I can\'t handle your cock inside me again."');
    // TODO-QSP: dynamic text: "Ugh," <<$npcdesc>> says rolling his eyes. "Way to be a little bitch about it. N...
    scene.text(`"Ugh," ${((st as any).npcdesc ?? '')} says rolling his eyes. "Way to be a little bitch about it. Never going to learn to enjoy my big cock unless you practice."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Force yourself to keep going', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['tap_out'] = 2;
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.text('"I can\'t believe I\'m letting you talk me into this..." you grimace, rubbing your thighs together over your sore pussy. "Okay, keep going..."');
    } else {
      // TODO-QSP: dynamic text: "I can''t believe I''m letting you talk me into this..." you grimace, wincing ag...
      scene.text(`"I can't believe I'm letting you talk me into this..." you grimace, wincing again as you adjust your hips around ${((st as any).npcdesc ?? '')}'s cock. "Okay, keep going..."`);
    }
    if (((st as any).sex_ev ?? 0)?.['boy_cum'] >= 1) {
      qspCall(st, 'sex_ev_sex', 'reset');
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['must_fuck'] = 1;
      qspCall(st, 'sex_ev_sex', 'position_choose');
      scene.actions([
        { label: 'Let him lead', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
      ]);
    } else {
      qspCall(st, 'sex_ev_sex', 'keep_fucking_act');
    }
  } },
        { label: 'Ask for a break', handler: (st: GameState) => {
    scene.text('"Can\'t we just do something else?" you beg. "Just for a little bit? Give my pussy a break?"');
    scene.text('"That doesn\'t sound so bad. What were you thinking?"');
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    } else {
      if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        ((st as any).npc_dick_too_big = (st as any).npc_dick_too_big ?? {})[String((st as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, looking truly apologetic. "I know it''s not easy for...
        scene.text(`"Sorry," ${((st as any).npcdesc ?? '')} says, looking truly apologetic. "I know it's not easy for girls to handle. We can try again another time."`);
        scene.actions([
          { label: 'Thanks', handler: (st: GameState) => {
    scene.text('"Thanks," you say, smiling gratefully at him. "Yeah... maybe another time..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Don\'t be sorry', handler: (st: GameState) => {
    scene.text('"Don\'t be sorry," you say, shaking your head. "It\'s not your fault you\'ve got such a big dick. Maybe it\'s my fault for having too small a pussy."');
    scene.text('You give him a little smile which he returns.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        ((st as any).npc_dick_too_big = (st as any).npc_dick_too_big ?? {})[String((st as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "Damn, my dick''s too big for you?" <<$npcdesc>> asks, smiling smugly when you r...
        scene.text(`"Damn, my dick's too big for you?" ${((st as any).npcdesc ?? '')} asks, smiling smugly when you return an exhausted nod. "Just one of those big dick problems I guess. Okay we'll try again later."`);
        scene.text('He laughs aloud, not seeming to care much that your pussy is sore beyond belief.');
        scene.actions([
          { label: 'Finish sex', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', '');
  } },
        ]);
      }
      scene.actions([
        { label: 'Blow him for a little bit', handler: (st: GameState) => {
    scene.text('"I just need a little break," you smile gratefully. "Maybe I can blow you for a little bit and then come back to it?"');
    // TODO-QSP: dynamic text: "That sounds great," <<$npcdesc>> smiles back.
    scene.text(`"That sounds great," ${((st as any).npcdesc ?? '')} smiles back.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        { label: 'We can do other stuff', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_sex'] = 1;
    scene.text('"We don\'t have to stop," you smile. "My pussy can\'t take your cock anymore, but we can still do other stuff."');
    // TODO-QSP: dynamic text: "Like what?" <<$npcdesc>> smiles back.
    scene.text(`"Like what?" ${((st as any).npcdesc ?? '')} smiles back.`);
    if (((st as any).sex_ev ?? 0)?.['boy_cum'] >= 1) {
      qspCall(st, 'sex_ev_sex', 'reset');
    }
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterStopHurry1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: end
  scene.actions([
    { label: '"You good?"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'inserted_img');
    // TODO-QSP: dynamic text: "You good?" you ask <<$npcdesc>>.
    scene.text(`"You good?" you ask ${((st as any).npcdesc ?? '')}.`);
    if (((st as any).sex_ev ?? 0)?.['cum_count'] < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - (Math.floor(Math.random() * 3) + 1)  &&  ((st as any).sex_ev ?? 0)?.['cum_count'] < 5) {
      scene.text('"Good enough for now, I guess," he pants. "You gotta go, right?"');
      scene.text('"Yeah," you say wistfully. "Sorry. And thanks."');
    } else {
      scene.text('"Yeah, I\'m good," he sighs with satisfaction.');
    }
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStopHurry2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPullApart(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    // TODO-QSP: $sex_ev['bed_room']
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterFuckedOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fucked_out'] = ((s as any).sex_ev['fucked_out'] ?? 0) + (1);
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['fucked_out'] > 1) {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "I really can''t... keep going... <<$npcdesc>> huffs exhaustedly.
    scene.text(`"I really can't... keep going... ${((s as any).npcdesc ?? '')} huffs exhaustedly.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_again'] === 1) {
      // TODO-QSP: dynamic text: "Wanna keep going?" you eagerly ask <<$npcdesc>>.
      scene.text(`"Wanna keep going?" you eagerly ask ${((s as any).npcdesc ?? '')}.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        // TODO-QSP: dynamic text: "Wanna keep going?" you eagerly ask, flexing your pussy around <<$npcdesc>>''s c...
        scene.text(`"Wanna keep going?" you eagerly ask, flexing your pussy around ${((s as any).npcdesc ?? '')}'s cock.`);
      } else {
        // TODO-QSP: dynamic text: "Wanna keep going?" you eagerly ask <<$npcdesc>>.
        scene.text(`"Wanna keep going?" you eagerly ask ${((s as any).npcdesc ?? '')}.`);
      }
    }
    scene.text('"I don\'t think I can..." he groans.');
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: dynamic text: You look down and see <<$npcdesc>>''s cock already going limp, rapidly deflating...
      scene.text(`You look down and see ${((s as any).npcdesc ?? '')}'s cock already going limp, rapidly deflating right before your eyes.`);
    } else {
      // TODO-QSP: dynamic text: You realize with a start that <<$npcdesc>> is getting <i>softer</i>, not harder,...
      scene.text(`You realize with a start that ${((s as any).npcdesc ?? '')} is getting <i>softer</i>, not harder, inside you.`);
    }
    scene.text('"I think I might be all fucked out for the day..."');
  }
  if (((s as any).sex_ev ?? 0)?.['force_harden'] === 0) {
    scene.actions([
      { label: 'No you\'re not', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['force_harden'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_done'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_cum'] = ((st as any).sex_ev['extra_cum'] ?? 0) + (1);
    qspCall(st, 'sex_ev_sex', 'harden_hand');
    qspCall(st, 'sex_ev_sex', 'harden_mouth');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['cum_count'] < 3) {
    scene.actions([
      { label: '"Seriously?"', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm_count'] < 1) {
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('"Seriously?" you scoff. "You\'re already done? I didn\'t even get to come!"');
    } else {
      scene.text('"Seriously?" you scoff. "You\'re already done?"');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ugh', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['end_comment'] = '"Ugh..." you groan with a roll of your eyes.';
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: $sex_ev['bed_room']
      // TODO-QSP: $sex_ev['end_comment']
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPullApart(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Sigh', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['end_comment'] = 'You sigh in disappointment.';
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: $sex_ev['bed_room']
      // TODO-QSP: $sex_ev['end_comment']
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPullApart(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    { label: 'Laugh', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['end_comment'] = '"Oops," you giggle. "Guess I fucked you too hard."';
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['end_comment'] = '"Oops," you giggle. "Guess that\'s my fault."';
    }
    if (((st as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: $sex_ev['bed_room']
      // TODO-QSP: $sex_ev['end_comment']
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPullApart(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterNoCondomEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'End here?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('"I guess we shouldn\'t fuck today..."');
    } else {
      scene.text('"I guess that\'s a sign we should stop..."');
    }
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]) {
      if (((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']) {
        // TODO-QSP: dynamic text: "I think I''m all fucked out anyways," <<$npcdesc>> sighs limply.
        scene.text(`"I think I'm all fucked out anyways," ${((st as any).npcdesc ?? '')} sighs limply.`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).sex_ev ?? 0)?.['condoms_used'] < ((st as any).sex_ev ?? 0)?.['condom_count']) {
          // TODO-QSP: dynamic text: "I have a few," <<$npcdesc>> says, reaching for another one."
          scene.text(`"I have a few," ${((st as any).npcdesc ?? '')} says, reaching for another one."`);
          qspCall(st, 'sex_ev_stats', 'npc_condom_stats');
          qspCall(st, 'sex_ev_sex', 'reset');
          scene.actions([
            { label: 'Let him lead', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
            { label: 'Sex', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
          ]);
        } else {
          if (((st as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((st as any).sex_ev ?? 0)?.['cum_count'] < 1) {
            // TODO-QSP: dynamic text: "Well this was fucking bullshit," <<$npcdesc>> grumbles.
            scene.text(`"Well this was fucking bullshit," ${((st as any).npcdesc ?? '')} grumbles.`);
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
          } else {
            // TODO-QSP: dynamic text: "Yeah, I think so too," <<$npcdesc>> says.
            scene.text(`"Yeah, I think so too," ${((st as any).npcdesc ?? '')} says.`);
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: "I think I''m all fucked out anyways," <<$npcdesc>> sighs limply.
      scene.text(`"I think I'm all fucked out anyways," ${((st as any).npcdesc ?? '')} sighs limply.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterBoySleep(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_asleep'] = 1;
  if (String((s as any).locArgs?.[1] ?? '') === 'talking') {
    scene.text('"Hey, do you-"');
    // TODO-QSP: dynamic text: You turn to face <<$npc_usedname[$npcID]>> as you start talking and realize he i...
    scene.text(`You turn to face ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} as you start talking and realize he isn't listening. His eyes are closed, his breathing soft and relaxed. He fell asleep...`);
  } else {
    // TODO-QSP: dynamic text: It''s been a while since <<$npc_usedname[$npcID]>> has moved and glancing at him...
    scene.text(`It's been a while since ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} has moved and glancing at him, you see his eyes are closed, his breathing soft and relaxed. He's fallen asleep...`);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHisWipes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cum_msg ?? 0) !== ''  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      (st as any).cumspclnt = 18;
    } else {
      (st as any).cumspclnt = 1;
    }
    if (((st as any).cum_loc ?? 0)?.['face'] > 0  ||  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
      scene.img('images/shared/sex/cum/facial/facial36.jpg');
      if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
        scene.text('"Hey, got anything I can use to clean up?" you trying not to smile under the spunk covering your face.');
        // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
        scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
      } else {
        scene.text('You reach up and poke at the sperm coating your face. Ew. You really need to clean that up before you do anything else. Reaching down to your purse, you pull some wipes out of your purse.');
      }
      if (((st as any).cum_loc ?? 0)?.['hair'] > 0) {
        // TODO-QSP: dynamic text: You carefully wipe the cum from your face, making sure to get every last drop, i...
        scene.text(`You carefully wipe the cum from your face, making sure to get every last drop, including getting the tangled web that ${((st as any).npcdesc ?? '')} managed to get in your hair. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.`);
      } else {
        scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
      }
    } else {
      if (((st as any).cum_loc ?? 0)?.['stomach'] > 0  ||  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'stomach') {
        scene.img('images/shared/sex/cum/stomach/bellycum3.jpg');
        if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
          scene.text('"Hey, got anything I can use to clean up?" you ask, looking at your belly, cum still spattered over it.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
          scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
        } else {
          scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse.');
        }
      } else {
        if (((st as any).cum_loc ?? 0)?.['butt'] > 0  ||  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'ass'  ||  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'back') {
          scene.img('images/shared/sex/cum/back1.jpg');
          if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
            scene.text('"Hey, got anything I can use to clean up?" you ask, looking over your shoulder and wiggling your ass to emphasize the cum resting on it.');
            // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
            scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work awkwardly trying to wipe your ass and up your back.`);
          } else {
            scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse, awkwardly wiping your ass and back with it.');
          }
        } else {
          if (((st as any).cum_loc ?? 0)?.['vagina']  ||  ((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
            if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
              // TODO-QSP: $sex_ev['bed_room']
              if (((st as any).sex_ev ?? 0)?.['wipes'] === 1) {
                scene.text('You reach down to your purse and pull out your bag of wipes before you stop, suddenly confused.');
                scene.text('<i>Why did I get out my wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you wanted to do with the,.');
                scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, oblivious to the liquid dribbling down the inside of your thigh.');
              } else {
                if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
                  // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
                  scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((st as any).npcdesc ?? '')} looks at you quizically.`);
                  scene.text('"Did you need something?"');
                  scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
                  scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, oblivious to the liquid dribbling down the inside of your thigh.');
                }
              }
            } else {
              if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
                scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
                scene.text('"Hey, got anything I can use to clean up?" you say, holding your fingers over your pussy, trying to keep the cum from spilling out any further.');
                // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
                scene.text(`"Oh yeah, right here." ${((st as any).npcdesc ?? '')} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
              } else {
                scene.img('images/shared/sex/cum/cum111.jpg');
                scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse before reaching between your legs to wipe yourself up.');
                scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually you feel like you got most of it out. At least enough that nothing is going to be running down your legs walking home.');
              }
            }
          }
        }
      }
    }
    if (((st as any).cumloc ?? 0)[13] > 0) {
      scene.text('Once you\'re satisfied that the rest of your body is clean, you wipe your hands off and toss the wipes into the trash.');
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['wipes'] = 0;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipeMenu(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWipeHands(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWipeFace(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWipeTits(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWipePussy(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspGoto(st, 'sex_ev_after', 'after_sex2_w_picture');
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
  ]);
  scene.build();
}

function enterWipeHands(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['hands'] > 0) {
    scene.actions([
      { label: 'Wipe your hands', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/clean_hands.mp4');
    (st as any).cumspclnt = 13;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You grab some tissues and clean your hands off, wiping the cum from every finger.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipeFace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
    scene.actions([
      { label: 'Wipe your face', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    (st as any).cumspclnt = 11;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipeTits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
    scene.actions([
      { label: 'Wipe your tits', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (st as any).cumspclnt = 16;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You grab some tissues and clean up, wiping the cum from your tits.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipeStomach(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['stomach'] > 0) {
    scene.actions([
      { label: 'Wipe your belly', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (st as any).cumspclnt = 14;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You carefully wipe across your stomach, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least it won\'t be staining the inside of your top.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipeButt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['butt'] > 0) {
    scene.actions([
      { label: 'Wipe your butt', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (st as any).cumspclnt = 4;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.text('You grab some tissues and clean up, awkwardly wiping your ass and back with it.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWipePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.actions([
      { label: 'Wipe your pussy', handler: (st: GameState) => {
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((st as any).sex_ev ?? 0)?.['wipes'] === 1) {
        scene.text('You pull out your bag of wipes before you stop, suddenly confused.');
        scene.text('<i>Why did I get out these wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you wanted to do with the,.');
        scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, completely ignoring the liquid dribbling down your thigh.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['wipes'] === 2) {
          // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
          scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((st as any).npcdesc ?? '')} looks at you quizzically.`);
          scene.text('"Did you need something?"');
          scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
          scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, completely ignoring the liquid dribbling down your thigh.');
        }
      }
    } else {
      scene.img('images/shared/sex/cum/clean_pussy.mp4');
      (st as any).cumspclnt = 16;
      qspCall(st, 'cum_cleanup', '');
      qspCall(st, 'stat', '');
      scene.text('You grab some tissues and carefully wipe up the side of your thighs, cleaning your legs of any remaining bodily fluids before giving your pussy a thorough wipe to soak up the cum still leaking from it.');
      scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually you feel like you got most of it out. At least enough that nothing is going to be running down your legs any time soon.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFinishSex(s: GameState, scene: SceneBuilder): void {
  (s as any).loc = 'sex_ev_after';
  (s as any).loc_arg = 'after_sex2';
  if (((s as any).sex_ev ?? 0)?.['fucked_out'] > 0) {
    qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'fucked_dry');
    scene.text('He just lays there, panting and wheezing in exhaustion.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fake_orgasm_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck'] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 0) === 1)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterNoCumEnd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] === 0) {
          qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'unhappy');
          scene.text('"Sorry," you say only a little apologetically. "I really can\'t keep going. I just can\'t."');
          // TODO-QSP: dynamic text: "This is bullshit..." <<$npcdesc>> grumbles.
          scene.text(`"This is bullshit..." ${((s as any).npcdesc ?? '')} grumbles.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_count'] === 1) {
            qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'unsatisfied');
            scene.text('"Sorry," you say only a little apologetically. "I really can\'t keep going. I just can\'t."');
            // TODO-QSP: dynamic text: "I we barely even got started..." <<$npcdesc>> grumbles.
            scene.text(`"I we barely even got started..." ${((s as any).npcdesc ?? '')} grumbles.`);
          } else {
            qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'okay');
            // TODO-QSP: dynamic text: "I could go a few more times, but I guess this is good enough for now," <<$npcde...
            scene.text(`"I could go a few more times, but I guess this is good enough for now," ${((s as any).npcdesc ?? '')} says.`);
          }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex1(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
          qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'great');
          // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> pants. "I''m totally tapped out."
          scene.text(`"Yeah," ${((s as any).npcdesc ?? '')} pants. "I'm totally tapped out."`);
        } else {
          qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'good');
          scene.text('"Yeah," he sighs. "I\'m good."');
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex1(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoCumEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks, sitting up. "But we didn''t fuck. You didn''t even ...
    scene.text(`"Really?" ${((s as any).npcdesc ?? '')} asks, sitting up. "But we didn't fuck. You didn't even get to come."`);
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
      scene.actions([
        { label: 'You know I\'m saving my virginity', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "Come on <<$npcdesc>>," you sigh. "You know I''m saving myself for marriage."
    scene.text(`"Come on ${((st as any).npcdesc ?? '')}," you sigh. "You know I'm saving myself for marriage."`);
    if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'fuckbuddy') {
      scene.text('"And you still have a fuckbuddy."');
      scene.text('"Shut up," you roll your eyes.');
    } else {
      if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'boyfriend') {
        scene.text('"I\'m your boyfriend. Doesn\'t that count for something?"');
        scene.text('"But you\'re not my husband," you reply. "Not unless you married me when I wasn\'t looking."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
          scene.text('"And you still hook up with random guys."');
          scene.text('"Shut up," you roll your eyes.');
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
        scene.actions([
          { label: 'I\'m saving my virginity', handler: (st: GameState) => {
    ((st as any).know_virgin = (st as any).know_virgin ?? {})[String((st as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sorry," you smile apologetically. "I\'m saving myself for marriage."');
    scene.text('"Why?" he asks, confusedly.');
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.actions([
        { label: 'Ask my mom', handler: (st: GameState) => {
    scene.text('"I don\'t know," you say, rolling your eyes in exasperation. "Ask my mom why it\'s so important."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Because I want to', handler: (st: GameState) => {
    scene.text('"Because I want to?" you shrug. "I just think it would be nice to give my virginity to my future husband. Do I need a better reason?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Because I want to (annoyed)', handler: (st: GameState) => {
    scene.text('"Because I want to," you scowl at him. "I have to explain what I want to do with <i>my</i> body?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Didn\'t feel like it today', handler: (st: GameState) => {
    scene.text('"Just didn\'t feel like doing anything else today," you shrug. "Wasn\'t in the mood."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Just wanted to fool around', handler: (st: GameState) => {
    scene.text('"Just wanted to play with your cock for a while," you wink. "Don\'t worry that I didn\'t get off. I had fun." ');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks, sitting up. "But you didn''t get to come."
    scene.text(`"Really?" ${((s as any).npcdesc ?? '')} asks, sitting up. "But you didn't get to come."`);
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.actions([
        { label: 'Loss of virginity is enough', handler: (st: GameState) => {
    scene.text('"You took my virginity today," you say. "I think that counts as enough for me."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'It\'s okay', handler: (st: GameState) => {
    scene.text('"That\'s sweet of you," you say, smiling. "But don\'t worry about that. I\'m okay without it today."');
    scene.text('"You\'re sure?" he asks.');
    scene.text('"Yeah, I\'m sure," you laugh back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'I\'m in a rush', handler: (st: GameState) => {
    scene.text('"I\'m in a rush today. But don\'t worry, I still had fun," you say. "A girl doesn\'t need to come every time you know."');
    scene.text('"You really mean that?" he asks.');
    scene.text('"Let\'s just not make a habit of it, all right?" you laugh back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBadSexEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'End here (bad end)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/annoyed1.jpg');
    scene.text('"Let\'s call it here," you say, letting your negative feelings get to you.');
    // TODO-QSP: dynamic text: "What, done already?" <<$npcdesc>> says, sitting up.
    scene.text(`"What, done already?" ${((st as any).npcdesc ?? '')} says, sitting up.`);
    scene.actions([
      { label: 'Don\'t feel like it anymore', handler: (st: GameState) => {
    scene.text('"I don\'t feel like doing anything else," you say, feeling deflated and dejected, sinking further into the bed. "I\'m just... not in the mood anymore."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'You killed the mood', handler: (st: GameState) => {
    scene.text('"You killed the mood," you scowl at him.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'You\'re an asshole', handler: (st: GameState) => {
    scene.text('"You know what you did," you scowl at him. "Asshole."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlackOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pass_out'] = 1;
  if (((s as any).sex_ev ?? 0)?.['cum_together'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: Your simultaneous orgasm was too much to handle and your vision begins to blur. ...
      scene.text(`Your simultaneous orgasm was too much to handle and your vision begins to blur. At the back of your mind, you realize that your body is succumbing to exhaustion. The last thing you're aware of is ${((s as any).npcdesc ?? '')}'s cock stuffed inside you, his cum filling your pussy to the brim, and then...`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        // TODO-QSP: dynamic text: Your simultaneous orgasm was too much to handle and your knees give out undernea...
        scene.text(`Your simultaneous orgasm was too much to handle and your knees give out underneath you, collapsing onto the bed in exhaustion as your vision begins to blur and fade. The last thing you're aware of is ${((s as any).npcdesc ?? '')}'s cock slipping from your pussy, the tickling sensation of his cum leaking from your snatch, and then...`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: Your simultaneous orgasm was too much to handle and you collapse, no strength le...
          scene.text(`Your simultaneous orgasm was too much to handle and you collapse, no strength left to stay upright and your vision begins to blur. At the back of your mind, you realize that your body is succumbing to exhaustion. The last thing you're aware of is your breasts pressed up against ${((s as any).npcdesc ?? '')}'s chest, his cock stuffed inside you and cum filling your pussy to the brim, and then...`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: Exhaustion hits you in a sudden wave and your vision begins to blur. The last th...
        scene.text(`Exhaustion hits you in a sudden wave and your vision begins to blur. The last thing you're aware of is ${((s as any).npcdesc ?? '')} inside you, his cock and cum filling your pussy to the brim, and then...`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
          // TODO-QSP: dynamic text: Exhaustion hits you in a sudden wave and your knees give out underneath you, col...
          scene.text(`Exhaustion hits you in a sudden wave and your knees give out underneath you, collapsing onto the bed in exhaustion as your vision begins to blur and fade. The last thing you're aware of is ${((s as any).npcdesc ?? '')}'s cock slipping from your pussy, the tickling sensation of his cum leaking from your snatch, and then...`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/1.jpg');
            // TODO-QSP: dynamic text: Exhaustion hits you in a sudden wave and you collapse, no strength left to stay ...
            scene.text(`Exhaustion hits you in a sudden wave and you collapse, no strength left to stay upright and your vision begins to blur. The last thing you're aware of is your breasts pressed up against ${((s as any).npcdesc ?? '')}'s chest, his cock and cum filling your pussy to the brim, and then...`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>''s cum still hot on your face. Your vision...
        scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? '')}'s cum still hot on your face. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is a trickle of liquid running down your cheek, and then...`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
          scene.img('images/shared/sex/after/sleep4.jpg');
          // TODO-QSP: dynamic text: You collapse to the bed as soon as you gulp, no strength left for you to stay up...
          scene.text(`You collapse to the bed as soon as you gulp, no strength left for you to stay upright. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is the salty taste of ${((s as any).npcdesc ?? '')}'s cum on your lips, and then...`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
            scene.img('images/pc/body/cum/cumsleep/cumsleep1.jpg');
            // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>''s cum still dribbling down your chin. You...
            scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? '')}'s cum still dribbling down your chin. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is a trickle of liquid running down your cheek, and then...`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
              scene.img('images/shared/sex/cum/facial/sleep4.jpg');
              // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>''s cum hot on your face, still running dow...
              scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? '')}'s cum hot on your face, still running down your chin. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is a trickle of liquid dribbling from your lips, and then...`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
                if (((s as any).pcs_pubes ?? 0) < 3) {
                  scene.img('images/shared/sex/after/sleep1.jpg');
                } else {
                  scene.img('images/shared/sex/after/sleep2.jpg');
                }
                // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>''s cum hot on your chest. Your vision blur...
                scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? '')}'s cum hot on your chest. Your vision blurs and you struggle to keep your eyes open, to keep conscious. The last thing you remember is a trickle of liquid running down between your breasts, and then...`);
              } else {
                if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'pullout') {
                  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
                    scene.img('images/shared/sex/cum/stomach/sleep1.jpg');
                    scene.text('Exhaustion hits you in a sudden wave and your vision begins to blur, you struggle to keep your eyes open. The last thing you remember is hot liquid on your belly, already beginning to cool, and then...');
                  } else {
                    scene.img('images/shared/sex/cum/back1.jpg');
                    scene.text('Exhaustion hits you in a sudden wave and your vision begins to blur, you struggle to keep your eyes open. You can\'t even lift your face off the bedsheets. The last thing you remember is something hot running down the crack of your ass, and then...');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  scene.text('<i>darkness...</i>');
  // TODO-QSP: end
  scene.actions([
    { label: '. . .', handler: (st: GameState) => {
    if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) === 3  &&  ((st as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      (st as any).hour = ((st as any).hour ?? 0) + (2);
      qspCall(st, 'stat', '');
      qspGoto(st, 'sex_ev_after', 'black_out_wake');
    } else {
      if (((st as any).sex_ev ?? 0)?.['loc'] === 'parents_home') {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          qspGoto(st, 'sex_ev_after', 'black_out_wake_mother');
        } else {
          qspGoto(st, 'sex_ev_after', 'black_out_wake_anya');
        }
      } else {
        qspGoto(st, 'sex_ev_after', 'sleep_function');
      }
    }
  } },
  ]);
  scene.build();
}

function enterBlackOutWake(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('You suddenly come to as a hand slaps you across the face.');
  scene.text('"Hey! Wake up!"');
  scene.text('You sit up in a rush, confused.');
  scene.text('"Wha... Whe..."');
  // TODO-QSP: dynamic text: "You passed out suddenly," <<$npcdesc>> says, looking annoyed. "You need to get ...
  scene.text(`"You passed out suddenly," ${((s as any).npcdesc ?? '')} says, looking annoyed. "You need to get dressed and get out. My girlfriend is going to be here any minute."`);
  ((s as any).pc_know_npc_has_girlfriend = (s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlackOutWakeOptions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterBlackOutWakeOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).sex_ev ?? 0)?.['girlfriend_discover'] !== 1) {
    scene.actions([
      { label: 'Girlfriend?', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['girlfriend_discover'] = 1;
    scene.text('"Girlfriend?" you mumble, mind still foggy after being shaken awake. "You have a girlfriend?"');
    scene.text('"Yeah, and she\'s gonna catch us unless you get the fuck out of here now."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlackOutWakeOptions(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Find your clothes', goto: ['sex_ev_after', 'black_out_wake2'] },
    { label: 'Shower?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Ugh..." you moan, holding your hand to your head. "Can I borrow your shower first? I\'m kind of-"');
    // TODO-QSP: dynamic text: "No, no time," <<$npcdesc>> says, shaking his head. "If you wanted that, then yo...
    scene.text(`"No, no time," ${((st as any).npcdesc ?? '')} says, shaking his head. "If you wanted that, then you shouldn't have fallen asleep on me."`);
    scene.actions([
      { label: 'Get out of bed', goto: ['sex_ev_after', 'black_out_wake2'] },
      { label: 'Get out of bed (grumble)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/leave_bed1.mp4');
    if (((st as any).cumloc ?? 0) > 0) {
      scene.text('"I can\'t believe you\'re going to make me leave like this," you grumbled annoyedly as you stumble out of bed, grimacing at the cum on your body as you gather your bearings before getting up to gather your clothes.');
    } else {
      scene.text('"It\'s just a shower," you grumbled annoyedly as you stumble out of bed, getting your bearings before getting up to gather your clothes.');
    }
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((st as any).cumloc ?? 0) > 0) {
      // TODO-QSP: dynamic text: Sleepily, you pull your clothing on, frowning as you feel cum smear across the i...
      scene.text(`Sleepily, you pull your clothing on, frowning as you feel cum smear across the inside. ${((st as any).npcdesc ?? '')} stands beside you impatiently, constantly checking the time and the door.`);
    } else {
      // TODO-QSP: dynamic text: Sleepily, you pull your clothing on slowly. <<$npcdesc>> stands beside you impat...
      scene.text(`Sleepily, you pull your clothing on slowly. ${((st as any).npcdesc ?? '')} stands beside you impatiently, constantly checking the time and the door.`);
    }
    // TODO-QSP: dynamic text: Once you''ve picked up the last of your things, <<$npcdesc>> hurries you to the ...
    scene.text(`Once you've picked up the last of your things, ${((st as any).npcdesc ?? '')} hurries you to the door, practically pushing you out.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'black_out_end'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlackOutWake2(s: GameState, scene: SceneBuilder): void {
  ((s as any).pc_know_npc_has_girlfriend = (s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  scene.img('images/shared/sex/after/leave_bed1.mp4');
  scene.text('You stumble out of bed, getting your bearings before getting up to gather your clothes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((st as any).cumloc ?? 0) > 0) {
      // TODO-QSP: dynamic text: Groggily, you pull your clothing on, frowning as you feel cum smear across the i...
      scene.text(`Groggily, you pull your clothing on, frowning as you feel cum smear across the inside. ${((st as any).npcdesc ?? '')} is throwing your things at you, constantly checking the time and the door.`);
    } else {
      // TODO-QSP: dynamic text: Groggily, you pull your clothing on slowly. <<$npcdesc>> is throwing your things...
      scene.text(`Groggily, you pull your clothing on slowly. ${((st as any).npcdesc ?? '')} is throwing your things at you, constantly checking the time and the door.`);
    }
    // TODO-QSP: dynamic text: Once you''ve picked up the last of your things, <<$npcdesc>> hurries you to the ...
    scene.text(`Once you've picked up the last of your things, ${((st as any).npcdesc ?? '')} hurries you to the door, practically pushing you out.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'black_out_end'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlackOutEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['hall_way']
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
    // TODO-QSP: dynamic text: "I''ll text you next time I want to hook up," <<$npcdesc>> says, and slams the d...
    scene.text(`"I'll text you next time I want to hook up," ${((s as any).npcdesc ?? '')} says, and slams the door behind you.`);
  } else {
    // TODO-QSP: dynamic text: The moment you clear the threshold, <<$npcdesc>> slams it behind you, leaving yo...
    scene.text(`The moment you clear the threshold, ${((s as any).npcdesc ?? '')} slams it behind you, leaving you alone in the dark.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterCumClean(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cum_msg ?? 0) !== '') {
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((st as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      scene.actions([
        { label: 'Ask him if he has any wipes', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((st as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
      (st as any).cumspclnt = 20;
    } else {
      (st as any).cumspclnt = 18;
    }
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    if (((st as any).cum_loc ?? 0)?.['face'] > 0) {
      qspCall(st, 'sex_ev_reactions', 'facial_smile_img');
      scene.text('"Got anything for this?" you ask, smiling wryly as you point to the sticky strands of cum covering your face.');
    } else {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
        scene.text('"Got anything for this?" you ask, smiling wryly as you wipe your hands through your legs at the globs of cum still leaking from between them.');
      } else {
        if (((st as any).cum_loc ?? 0)?.['hands'] > 0) {
          // TODO-QSP: $sex_ev['bed_room']
          scene.text('"Got anything for this?" you ask, holding up your hand, spreading your fingers to emphasize the sticky strands of cum hanging from them.');
        } else {
          // TODO-QSP: $sex_ev['bed_room']
          scene.text('"Got anything for this?" you ask, smiling wryly as you point to the sticky strands of cum covering your body.');
        }
      }
    }
    if (((st as any).sex_ev ?? 0)?.['sex_over'] > 0) {
      // TODO-QSP: dynamic text: "Yeah, got some wipes right here." <<$npcdesc>> reaches for his nightstand, pull...
      scene.text(`"Yeah, got some wipes right here." ${((st as any).npcdesc ?? '')} reaches for his nightstand, pulling a bag of wipes out of the drawer. He pulls one out and starts wiping himself down, tossing you the bag.`);
    } else {
      // TODO-QSP: dynamic text: "Yeah, got some wipes right here." <<$npcdesc>> reaches for his nightstand, pull...
      scene.text(`"Yeah, got some wipes right here." ${((st as any).npcdesc ?? '')} reaches for his nightstand, pulling a bag of wipes out of the drawer and tossing it over.`);
    }
    // TODO-QSP: dynamic text: You pull out a handful and clean yourself off as well. Following <<$npcdesc>>''s...
    scene.text(`You pull out a handful and clean yourself off as well. Following ${((st as any).npcdesc ?? '')}'s lead, you finish by tossing the used wipe into a small trashcan in the corner of the room.`);
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
      ]);
    }
    if (((st as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
      scene.actions([
        { label: 'Use your wipes', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWipeMenu(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Clean everything', handler: (st: GameState) => {
    qspCall(st, 'cum_cleanup', 'cleanloc');
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Leaning down off the bed, you dig around with a clean hand, grab a bag of wipes, and start cleaning yourself off.');
    if (((st as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      // TODO-QSP: dynamic text: Feeling nice, you also take a moment to clean <<$npcdesc>>''s cock for him at th...
      scene.text(`Feeling nice, you also take a moment to clean ${((st as any).npcdesc ?? '')}'s cock for him at the same time. Once you're both all wiped down off, you toss it into the wastebasket by his bed.`);
    }
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  } },
      ]);
    }
    if (((st as any).cumloc ?? 0)[13] > 0) {
      scene.actions([
        { label: 'Lick your fingers clean', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    qspCall(st, 'stat', '');
    qspCall(st, 'cum_cleanup', 'cleanloc');
    ((st as any).stat = (st as any).stat ?? {})['swallow'] = ((st as any).stat['swallow'] ?? 0) + (1);
    scene.img('images/shared/sex/cum/lick_fingers.jpg');
    if (((st as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((st as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      // TODO-QSP: dynamic text: Briefly making eye contact with <<$npcdesc>>, you use your fingers to gather up ...
      scene.text(`Briefly making eye contact with ${((st as any).npcdesc ?? '')}, you use your fingers to gather up all the loose cum on you and stick out your tongue, running it up your hand, licking every drop from it and into your mouth. You give your hand a thorough tongue bath, sucking your fingers clean at the end. Once finished, you smack your lips, smiling at ${((st as any).npcdesc ?? '')} who stared at you the whole time.`);
      if (((st as any).sex_ev ?? 0)?.['he_cleaned'] === 0) {
        scene.text('"Any chance I could get one of those?" he gestures towards his cock.');
        scene.actions([
          { label: 'You\'re on your own', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sorry soldier, but you\'re on your own," you giggle.');
    scene.text('"<i>Of course I am...</i>" He sighs but reaches for his nightstand, pulling a pack of wipes from it and gets to work cleaning himself up. Once he\'s done, he tosses the used wipe into a trash can in the corner of his room.');
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      qspCall(st, 'sex_ev_sex', 'sex_end');
    }
  } },
          { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"Sure thing," you smile. Crawling forward between his legs, you bend down and run your lips up and down his shaft, sucking, kissing, and licking every curve and contour until it\'s completely clean.');
    scene.text('"There. All better?"');
    scene.text('"Much better," he smiles back.');
    if ((Math.floor(Math.random() * 10) + 1) < ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)]  &&  ((st as any).sex_ev ?? 0)?.['cum_count'] <= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']) {
      scene.text('He seems more than pleased by your act of service, considering the stiffness that seems to have returned to his dick under your touch.');
    }
    if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex1(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterStopHere(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'sex_ev_sex', 'keep_going');
    }
  } },
        ]);
      } else {
        scene.text('You lick the sticky salty liquid off your fingers and gulp it down.');
        if (((st as any).sex_ev ?? 0)?.['sex_over'] === 1) {
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_after', 'after_sex2_w_picture'] },
          ]);
        } else {
          qspCall(st, 'sex_ev_sex', 'sex_end');
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Never mind', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', '');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFacialMouthClean(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth')  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    scene.actions([
      { label: 'Clean him off with your mouth', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['react'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial24.jpg');
    if (((st as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((st as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      // TODO-QSP: dynamic text: You lean forward, wrapping your lips around <<$npcdesc>> and run them up and dow...
      scene.text(`You lean forward, wrapping your lips around ${((st as any).npcdesc ?? '')} and run them up and down to clean him off. You can faintly taste the salty sweetness of yourself on his cock, as well as the remnants of cum that was still inside it, drawn out your mouth. Looking up at ${((st as any).npcdesc ?? '')}, you are greeted with the sight of him staring down at you.`);
    } else {
      // TODO-QSP: dynamic text: Opening your mouth, you lean forward, wrapping your lips around <<$npcdesc>>''s ...
      scene.text(`Opening your mouth, you lean forward, wrapping your lips around ${((st as any).npcdesc ?? '')}'s cock and running them up and down to clean him off. You can taste the remnants of cum that was still inside it, drawn out by your mouth. Looking up at ${((st as any).npcdesc ?? '')}, you are greeted with the sight of him staring down at you.`);
    }
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterSex1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_over'] = 1;
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPullApart(st, scene); (st as any).locArgs = __savedLocArgs; }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'childish'  ||  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted')  &&  (((st as any).sex_ev ?? 0)?.['fuck_count'] >= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - 1)  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'sex_ev_pillow_talk', 'high_five1');
    } else {
      if (((st as any).npc_last_sex_score ?? 0)?.[String((st as any).npcID ?? 0)] >= 3  &&  (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_misogynist ?? 0)?.[String((st as any).npcID ?? 0)] > 0)  &&  ((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        qspGoto(st, 'sex_ev_pillow_talk', 'good_slut_ev');
      } else {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostCigaretteBoy(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((st as any).cum_loc ?? 0)?.['anus'] > 0) {
      scene.img('images/shared/sex/cum/both_holes1.jpg');
      // TODO-QSP: dynamic text: You lay back, settling down on the other side of the bed. Your body relaxes and ...
      scene.text(`You lay back, settling down on the other side of the bed. Your body relaxes and you feel ${((st as any).npcdesc ?? '')}'s cum seep from both pussy and asshole, running down your thighs into the bedsheets.`);
    } else {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((st as any).cum_loc ?? 0)?.['anus'] === 0) {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        // TODO-QSP: dynamic text: You lay back, settling down on the other side of the bed. Your body relaxes and ...
        scene.text(`You lay back, settling down on the other side of the bed. Your body relaxes and you feel ${((st as any).npcdesc ?? '')}'s cum seep from your pussy, trickling down the crack of your ass into the bedsheets.`);
      } else {
        if (((st as any).cum_loc ?? 0)?.['anus'] > 0  &&  ((st as any).cum_loc ?? 0)?.['vagina'] === 0) {
          scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
          // TODO-QSP: dynamic text: You lay back, settling down on the other side of the bed. Your body relaxes and ...
          scene.text(`You lay back, settling down on the other side of the bed. Your body relaxes and you feel ${((st as any).npcdesc ?? '')}'s cum seep from your puckered hole, trickling down the curve of your ass into the bedsheets.`);
        } else {
          // TODO-QSP: $sex_ev['bed_room']
        }
      }
    }
    if ((((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'childish'  ||  ((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted')  &&  (((st as any).sex_ev ?? 0)?.['fuck_count'] >= ((st as any).npc_sexdrive ?? 0)?.[String((st as any).npcID ?? 0)] - 1)  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(st, 'sex_ev_pillow_talk', 'high_five1');
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostCigaretteBoy(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPostCigaretteBoy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: The two of you pull apart and <<$npcdesc>> reaches over to his nightstand and pu...
    scene.text(`The two of you pull apart and ${((s as any).npcdesc ?? '')} reaches over to his nightstand and pulls out a pack of cigarettes.`);
  } else {
    // TODO-QSP: 'You both lay back, basking in the afterglow of your fuck together. ' + iif(npc_smoker[$npcID] > 0, ...
  }
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    qspCall(s, 'sex_ev_events', 'offer_ciga1');
  } else {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPullApart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie_surprise') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/after/miss_after1.mp4');
      if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
        // TODO-QSP: $sex_ev['end_comment']
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you, removing his cock from your pussy, allowing a gu...
      scene.text(`${((s as any).npcdesc ?? '')} climbs off of you, removing his cock from your pussy, allowing a gush of cum from his last orgasm to be released, and flops down on the other side of the bed as it trickles down the crack of your ass into the bedsheets.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/after/doggy_after1.mp4');
        if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
          // TODO-QSP: $sex_ev['end_comment']
        }
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls out from behind you, releasing a gush of cum from your pussy ...
        scene.text(`${((s as any).npcdesc ?? '')} pulls out from behind you, releasing a gush of cum from your pussy that oozes down your thighs as you roll over together onto your backs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/after/cowgirl_after1.mp4');
          if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
            // TODO-QSP: $sex_ev['end_comment']
          }
          // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, releasing a gush of cum from your pussy, and flop...
          scene.text(`You climb off of ${((s as any).npcdesc ?? '')}, releasing a gush of cum from your pussy, and flop down next to him. As soon as his cock vacates your pussy, cum begins to drip from it, trickling down the crack of your ass into the bedsheets.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/after/miss_after1.mp4');
      if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
        // TODO-QSP: $sex_ev['end_comment']
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> removes his cock from your pussy, climbing out from between your le...
      scene.text(`${((s as any).npcdesc ?? '')} removes his cock from your pussy, climbing out from between your legs, flopping onto the other side of the bed.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/after/doggy_after1.mp4');
        if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
          // TODO-QSP: $sex_ev['end_comment']
        }
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls out from behind you and you roll over together onto your back...
        scene.text(`${((s as any).npcdesc ?? '')} pulls out from behind you and you roll over together onto your backs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/after/cowgirl_after1.mp4');
          if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
            // TODO-QSP: $sex_ev['end_comment']
          }
          // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, letting his cock slip from your pussy, and flop d...
          scene.text(`You climb off of ${((s as any).npcdesc ?? '')}, letting his cock slip from your pussy, and flop down beside him.`);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterSex2WPicture(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLoverRoomDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s apartment is neat and tidy.
        scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s apartment is neat and tidy.`);
      } else {
        if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s apartment is a bit of a mess with a sink of unwashe...
          scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s apartment is a bit of a mess with a sink of unwashed dishes, cluttered tabletops, and randomly thrown clothing.`);
        } else {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s apartment feels very "lived in." Not messy exactly,...
          scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s apartment feels very "lived in." Not messy exactly, but everything just askew enough to know what gets used on a regular basis.`);
        }
      }
    } else {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
        if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s fancy bedroom is neat, tidy, and well kept.
          scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s fancy bedroom is neat, tidy, and well kept.`);
        } else {
          if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s bedroom is a bit of a mess with. The tops of his dr...
            scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s bedroom is a bit of a mess with. The tops of his dressers are cluttered with items, the bed you're laying in doesn't seem like it's been made properly in ages, and you can see clothes randomly littering the floor of his walk-in closet.`);
          } else {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s bedroom feels very "lived in." Not messy exactly, b...
            scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s bedroom feels very "lived in." Not messy exactly, but everything just askew enough to know what gets used on a regular basis`);
          }
        }
      } else {
        if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s bedroom is neat and tidy.
          scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s bedroom is neat and tidy.`);
        } else {
          if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s bedroom is a bit of a mess with overflowing bins of...
            scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s bedroom is a bit of a mess with overflowing bins of dirty laundry, cluttered dressers, and random items littering the floor.`);
          } else {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>''s bedroom feels very "lived in." Not messy exactly, b...
            scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')}'s bedroom feels very "lived in." Not messy exactly, but everything just askew enough to know what gets used on a regular basis.`);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterSex2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_over'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pillow_talking'] = 0;
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fun'] = 'fuck';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['fun'] = 'fun';
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoverRoomDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['morning_after'] > 0) {
    scene.actions([
      { label: 'Get on with the morning', goto: ['sex_ev_morning', 'morning_menu2'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] > 0) {
      scene.actions([
        { label: 'Go back to sleep', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/cuddle2.jpg');
    // TODO-QSP: dynamic text: Your midnight fuck over, you and <<$npcdesc>> cuddle up together and fall asleep...
    scene.text(`Your midnight fuck over, you and ${((st as any).npcdesc ?? '')} cuddle up together and fall asleep again.`);
    scene.actions([
      { label: 'Sleep', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        qspCall(s, 'sex_ev_leave', 'npc_leave');
      } else {
        if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup'  &&  ((s as any).sex_ev ?? 0)?.['leaving'] === 0) {
          if (((s as any).sex_ev ?? 0)?.['mad'] < 1  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] < 1) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Thanks for the ' + String(((s as any).sex_ev ?? 0)?.['fun'] ?? '' ?? ''), handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_hookup_leave', 'thanks_for_fun'
  } },
            ]);
          }
          scene.actions([
            { label: 'I should go', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_hookup_leave', 'i_should_go'
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Prepare to leave', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'leave_router'
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['npc_late'] !== 1  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
      scene.actions([
        { label: 'Relax on the bed', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'pillow_picture1');
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['get_up'] = 0;
      // TODO-QSP: dynamic text: You climb back into bed with <<$npcdesc>>, snuggling up with him to relax.
      scene.text(`You climb back into bed with ${((st as any).npcdesc ?? '')}, snuggling up with him to relax.`);
    } else {
      // TODO-QSP: dynamic text: You and <<$npcdesc>> both lay back, quietly relaxing together in the still bliss...
      scene.text(`You and ${((st as any).npcdesc ?? '')} both lay back, quietly relaxing together in the still bliss of your love-making.`);
    }
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> is asleep, snoring softly beside you.
    scene.text(`${((s as any).npcdesc ?? '')} is asleep, snoring softly beside you.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCuddleUp2(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['action_restricted'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
      scene.actions([
        { label: 'Use the bathroom', goto: ['sex_ev_after', 'bathroom_after'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_shower'] !== 1) {
        if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          // TODO-QSP: dynamic text: <<$npcdesc>> is in the shower. You can hear the water running through the door.
          scene.text(`${((s as any).npcdesc ?? '')} is in the shower. You can hear the water running through the door.`);
        } else {
          if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
            // TODO-QSP: dynamic text: <<$npcdesc>> is in the shower and you can hear water running through the wall.
            scene.text(`${((s as any).npcdesc ?? '')} is in the shower and you can hear water running through the wall.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> is taking a shower somewhere else in his apartment.
            scene.text(`${((s as any).npcdesc ?? '')} is taking a shower somewhere else in his apartment.`);
          }
        }
        qspCall(s, 'sex_ev_events', 'rummage_drawers_link');
        scene.actions([
          { label: 'Wait to use the bathroom', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: You wait patiently on the bed for <<$npcdesc>> to finish his shower.
    scene.text(`You wait patiently on the bed for ${((st as any).npcdesc ?? '')} to finish his shower.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
    ]);
  } },
          { label: 'Join him in the shower', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
        ]);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['cigarette'] === 0  &&  (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0  ||  ((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).sex_ev ?? 0)?.['npc_late'] !== 1) {
    scene.actions([
      { label: 'Smoke a cigarette', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_after', 'smoke_ciga1'
  } },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPostSexPee1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCumClean(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCockClean(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPlanB(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBirthControlPillTake(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['leaving'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cant_stay'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    qspCall(s, 'sex_ev_leave', 'go_out_after');
    scene.actions([
      { label: 'Ask to hang out', goto: ['sex_ev_leave', 'hang_out_after'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['action_restricted'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpendNightAsk(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterSexDressed(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(s, 'sex_ev_hookup_leave', 'gotta_go');
    } else {
      scene.actions([
        { label: 'Prepare to leave', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'leave_router'
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['leaving'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cant_stay'] === 0) {
      scene.actions([
        { label: 'Hang out', goto: ['sex_ev_leave', 'hang_out_after'] },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Prepare to leave', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'leave_router'
  } },
    ]);
  }
  qspCall(s, 'sex_ev_leave', 'breakup_start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Use the bathroom', goto: ['sex_ev_after', 'bathroom_after'] },
  ]);
  scene.build();
}

function enterBathroomAfter(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['get_up'] = 1;
  // TODO-QSP: $sex_ev['bath_room']
  if ((((s as any).pcs_breath ?? 0) !== 1  ||  ((s as any).cumloc ?? 0)[12] === 1)  &&  (((s as any).mc_inventory ?? 0)?.['travel_toothbrush'] === 1  ||  ((s as any).overnight_bag ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home')) {
    // TODO-QSP: act'Brush your teeth':
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 1;
    ((s as any).teeth = (s as any).teeth ?? {})['brushed'] = ((s as any).teeth['brushed'] ?? 0) + (1);
    if ((Math.floor(Math.random() * 3) + 1) === 1) {
      qspGoto(s, 'sex_ev_events', 'brushing_teeth');
    } else {
      if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).pantyworntype ?? 0) === 'none') {
        scene.img('images/shared/home/bathroom/brushteeth.mp4');
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
        }
      } else {
        scene.img('images/shared/home/bathroom/brushteeth.jpg');
      }
      scene.text('You brush your teeth and now they are clean and minty fresh.');
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
      ]);
    }
  }
  // TODO-QSP: end
  if (((s as any).sex_ev ?? 0)?.['shower'] === 0  ||  ((s as any).stat_cum_msg ?? 0) !== ''  ||  ((s as any).pcs_sweat ?? 0) > 0) {
    if (((s as any).sex_ev ?? 0)?.['sleepover'] === 0) {
      scene.actions([
        { label: 'Take a shower', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', '');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Take a shower', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_morning', '');
  } },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['sanitary_pads'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 2  &&  ((s as any).pillcon ?? 0) < 40000))  &&  ((s as any).isprokp ?? 0) === 0  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).pantyworntype ?? 0) !== 'none'  &&  (!((s as any).knowpreg ?? 0))) {
    scene.actions([
      { label: 'Use a sanitary pad (0:02)', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['sanitary_pads'] = ((st as any).mc_inventory['sanitary_pads'] ?? 0) - (1);
    (st as any).isprokp = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'mood', 'lower', 'tiny');
    scene.img(`images/pc/body/pee/period/pad/${(Math.floor(Math.random() * 2) + 2)}.jpg`);
    scene.text('You use a sanitary pad.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['tampons'] > 0  &&  (((s as any).mesec ?? 0) > 0  ||  (((s as any).placebopart ?? 0) > 2  &&  ((s as any).pillcon ?? 0) < 40000))  &&  ((s as any).isprok ?? 0) === 0  &&  ((s as any).isprokp ?? 0) === 0  &&  (!((s as any).knowpreg ?? 0))) {
    scene.actions([
      { label: 'Use a tampon (0:02)', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['tampons'] = ((st as any).mc_inventory['tampons'] ?? 0) - (1);
    (st as any).isprok = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'mood', 'lower', 'tiny');
    scene.img('images/pc/body/pee/period/tampon/6.jpg');
    scene.text('You use a tampon.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
    ]);
  }
  if (qspFunc(s, '$cum_manage', '', 'check_inner_overflow', 0) === 1) {
    scene.actions([
      { label: 'Let the cum drain from your pussy (0:15)', handler: (st: GameState) => {
    (st as any).cumspclnt = 15;
    qspCall(st, 'cum_cleanup', '');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    if (((st as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
      scene.actions([
        { label: 'Smoke to pass the time', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke');
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/toilet_naked_smoke.jpg');
    scene.text('You know this is going to take a long time so you take your smokes and a lighter into the bathroom with you.');
    // TODO-QSP: dynamic text: Plopping down on the toilet, you light up while waiting for <<$npcdesc>>''s cum ...
    scene.text(`Plopping down on the toilet, you light up while waiting for ${((st as any).npcdesc ?? '')}'s cum to drain from your pussy. Minutes pass between sudden gushes of semen pouring out of your snatch and you pass the time puffing smoke and flicking ashes.`);
    scene.text('After about fifteen minutes, you figure you\'re safe and grab some toilet paper to wipe the last strands from your labia before making sure your long-burned out cigarette is fully extinguished and tossing it in the trash.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Wait it out', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/shared/home/bathroom/toilet_naked.jpg');
    // TODO-QSP: dynamic text: You sit on the toilet humming to yourself while you wait for <<$npcdesc>>''s cum...
    scene.text(`You sit on the toilet humming to yourself while you wait for ${((st as any).npcdesc ?? '')}'s cum to drain from your pussy. It takes a long time with minutes passing between sudden gushes of semen pouring out of your snatch.`);
    scene.text('After about fifteen minutes, you figure you\'re safe and grab some toilet paper to wipe the last strands from your labia.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Back to the bedroom', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['dressed_to_go'] === 1) {
      // TODO-QSP: $sex_ev['bed_room']
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSexDressed(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if (((st as any).sex_ev ?? 0)?.['morning_after'] === 0) {
        qspGoto(st, 'sex_ev_after', 'after_sex2_w_picture');
      } else {
        qspGoto(st, 'sex_ev_morning', 'morning_menu2');
      }
    }
  } },
    { label: 'Use the mirror', handler: (st: GameState) => {
    (st as any).locM = 'sex_ev_after';
    (st as any).locM_arg = 'bathroom_after';
    qspGoto(st, 'mirror', 'start');
  } },
  ]);
  scene.build();
}

function enterPostSexPee1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['pee_after'] < 1  &&  ((s as any).sex_ev ?? 0)?.['shower'] === 0  &&  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Go pee', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        // TODO-QSP: dynamic text: You throw your legs over the side of the bed and as you prepare to stand up, you...
        scene.text(`You throw your legs over the side of the bed and as you prepare to stand up, you feel a sudden gush of ${((st as any).npcdesc ?? '')}'s cum threaten to spill from your pussy.`);
        scene.actions([
          { label: 'Try not to make a mess', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_wobble'] = 1;
    scene.text('You stand carefully, awkwardly holding your hand over your dripping snatch and begin making your way towards the bathroom.');
    // TODO-QSP: dynamic text: "Hey, where you going?" <<$npcdesc>> asks.
    scene.text(`"Hey, where you going?" ${((st as any).npcdesc ?? '')} asks.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostSexPee2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          { label: 'Walk normally', handler: (st: GameState) => {
    scene.text('You don\'t give it a second thought and stand up to stride straight for the bathroom, letting the cum run down your legs and trail across the floor behind you.');
    // TODO-QSP: dynamic text: "Hey, where you going?" <<$npcdesc>> asks.
    scene.text(`"Hey, where you going?" ${((st as any).npcdesc ?? '')} asks.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostSexPee2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      } else {
        scene.text('You throw your legs over the side of the bed and get up to use the toilet.');
        // TODO-QSP: dynamic text: "Hey, where you going?" <<$npcdesc>> asks.
        scene.text(`"Hey, where you going?" ${((st as any).npcdesc ?? '')} asks.`);
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostSexPee2(st, scene); (st as any).locArgs = __savedLocArgs; }
      }
    } else {
      // TODO-QSP: dynamic text: You throw your legs over the side of the bed, leaving <<$npcdesc>> asleep in the...
      scene.text(`You throw your legs over the side of the bed, leaving ${((st as any).npcdesc ?? '')} asleep in the bed alone as you pad your way into the bathroom.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostSexPee3(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPostSexPee2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_wobble'] === 0) {
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Prevent UTI\'s!', handler: (st: GameState) => {
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((st as any).sex_ev ?? 0)?.['cum_wobble'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['virgin'] === 1) {
        scene.text('"I heard girls should always pee after sex to prevent UTI\'s," you say, gulping as the cum between your legs almost spills between your fingers. "Er, I think. It\'s my first time."');
        scene.text('You give him a shy smile and wobble away into the bathroom.');
      } else {
        // TODO-QSP: dynamic text: "Always gotta pee after sex if you wanna prevent UTI''s," you tell <<$npcdesc>> ...
        scene.text(`"Always gotta pee after sex if you wanna prevent UTI's," you tell ${((st as any).npcdesc ?? '')} and continue wobbling awkwardly towards the bathroom with your hand between your legs.`);
      }
    } else {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        if (((st as any).sex_ev ?? 0)?.['virgin'] === 1) {
          scene.text('"I\'m think I\'m supposed to go pee after having sex," you say, turning back to glance at him while the cum continues spilling from your snatch. "To prevent UTI\'s. I think. Pretty sure anyways. It\'s only my first time."');
          scene.text('You give him a sly smile and hurry into the bathroom.');
        } else {
          // TODO-QSP: dynamic text: "Always gotta pee after sex if you wanna prevent UTI''s," you tell <<$npcdesc>> ...
          scene.text(`"Always gotta pee after sex if you wanna prevent UTI's," you tell ${((st as any).npcdesc ?? '')} without breaking stride and calmly head into the bathroom.`);
        }
      } else {
        if (((st as any).sex_ev ?? 0)?.['virgin'] === 1) {
          scene.text('"I\'m think I\'m supposed to go pee after having sex," you say, feeling loose juices running between your lower lips. "To prevent UTI\'s. I think. Pretty sure anyways. It\'s only my first time."');
          scene.text('You give him a sly smile and hurry on to the bathroom.');
        } else {
          // TODO-QSP: dynamic text: "Always gotta pee after sex if you wanna prevent UTI''s," you tell <<$npcdesc>> ...
          scene.text(`"Always gotta pee after sex if you wanna prevent UTI's," you tell ${((st as any).npcdesc ?? '')} without breaking stride and calmly head into the bathroom.`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostSexPee3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Desperately need to pee', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['desperate_pee'] = 1;
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((st as any).sex_ev ?? 0)?.['cum_wobble'] === 1) {
      scene.text('"I <i>really</i> need to take a piss," you say, wobbling towards the bathroom as fast as you can without spilling cum all over the floor. "I\'ve been holding it this entire time!"');
    } else {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.text('"I <i>really</i> need to take a piss," you say, picking up the pace, heedless of the cum now streaking down your legs. "I\'ve been holding it this entire time!"');
      } else {
        scene.text('"I <i>really</i> need to take a piss! I\'ve been holding it this entire time!" you say, picking up the pace, practically sprinting into the bathroom.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPostSexPee3(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterPostSexPee3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Relieve yourself', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/toilet_after.jpg');
    if (((st as any).sex_ev ?? 0)?.['desperate_pee'] === 0) {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.text('You sit down on the toilet and let out a sigh as you unclench your muscles. Warmth trickles out from your snatch and you feel it flush some of the cum from inside as well. You sit there patiently until you and your bladder feel nice and empty.');
      } else {
        scene.text('You sit down on the toilet and let out a sigh as you unclench your muscles. Warmth trickles out from your snatch and you can almost feel it flushing the excess bacteria from your urinary tract. You wait patiently until you and your bladder feel nice and empty and pull some squares from the toilet roll.');
      }
      scene.text('<i>No UTI\'s for this girl!</i> you think to yourself as you fold the soft fabric to wipe yourself.');
    } else {
      if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.text('You practically slam yourself down onto the seat and immediately unclench your muscles. A torrent of hot liquid streams from your snatch and you heave a loud sigh of relief as your strained bladder begins to empty out, with the added bonus of clearing some of the cum from your pussy as well. A short while later you feel pleasantly empty and pull some squares from the toilet roll,');
      } else {
        scene.text('You practically slam yourself down onto the seat and immediately unclench your muscles. A torrent of hot liquid streams from your snatch and you heave a loud sigh of relief as your strained bladder begins to empty out. A short while later you feel pleasantly empty and pull some squares from the toilet roll,');
      }
      scene.text('<i>Ahh... Much better...</i> you sigh again as you fold the soft fabric to wipe yourself.');
    }
    scene.actions([
      { label: 'Finish', goto: ['sex_ev_after', 'bathroom_after'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRelaxTogether(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['relax_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['angry_after'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['mad'] = 0;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSmokeLink(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['after_kiss'] === 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Kiss ' + String(((s as any).npcdesc ?? '') ?? ''), goto: ['sex_ev_after', 'kiss'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] > 0) {
  } else {
    if (((s as any).pcs_sleep ?? 0) < 30  &&  ((s as any).sex_ev ?? 0)?.['get_up'] === 0  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] === 0) {
      scene.actions([
        { label: 'Rest your eyes', goto: ['sex_ev_after', 'bed'] },
      ]);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDrinkFluid(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_talk', 'prostitution_payment');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSorePussyMsg(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop relaxing', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_after', 'after_sex2'
  } },
    { label: 'Pillow talk', goto: ['sex_ev_pillow_talk', 'start'] },
    { label: 'Reflect to yourself', goto: ['sex_ev_reflection', 'start'] },
  ]);
  scene.build();
}

function enterCockClean(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_cleanup'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['fuck'] > 0  &&  ((s as any).sex_ev ?? 0)?.['get_up'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_shower'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    scene.actions([
      { label: 'Clean his cock', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cock_cleanup'] = 1;
    scene.img('images/shared/sex/blowjob/play1.mp4');
    if (((st as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
        // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
        scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and the remnants of the creampie he filled you with.`);
      } else {
        // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
        scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and sucking any remaining cum out of the tip.`);
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['condoms_used'] > 0) {
        if (((st as any).sex_ev ?? 0)?.['cum_condom'] > 0) {
          // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
          scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up your own juices and the cum that filled the inside of the condom.`);
        } else {
          // TODO-QSP: dynamic text: "Here, let me take care of that for you," you say, slithering down between <<$np...
          scene.text(`"Here, let me take care of that for you," you say, slithering down between ${((st as any).npcdesc ?? '')}'s legs and taking his cock in your mouth. You run your lips up and down his shaft and give it a thorough tongue bath, lapping up the condom lube, your own juices, and sucking any remaining cum out of the tip.`);
        }
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> smiles at you appreciatively.
    scene.text(`${((st as any).npcdesc ?? '')} smiles at you appreciatively.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKiss(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['face'] <= 0) {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    (s as any).orgasm_or = 'no';
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['after_kiss'] = 1;
    scene.img('images/shared/sex/after/kiss1.jpg');
    if (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] < 100) {
      qspCall(s, 'arousal', 'kiss', (-2));
      if (((s as any).sex_ev ?? 0)?.['cuni_count'] > 0) {
        // TODO-QSP: dynamic text: You lean over to kiss <<$npcdesc>>, gently pressing your lips against his. They ...
        scene.text(`You lean over to kiss ${((s as any).npcdesc ?? '')}, gently pressing your lips against his. They taste slightly salty, which you recognize as the taste of your own pussy, still on his lips from when he ate you out earlier.`);
      } else {
        // TODO-QSP: dynamic text: You lean over to kiss <<$npcdesc>>, gently pressing your lips against his.
        scene.text(`You lean over to kiss ${((s as any).npcdesc ?? '')}, gently pressing your lips against his.`);
      }
      // TODO-QSP: dynamic text: "What was that for?" <<$npcdesc>> asks.
      scene.text(`"What was that for?" ${((s as any).npcdesc ?? '')} asks.`);
      if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
        scene.actions([
          { label: 'For making me come', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"A thank you," you smile gratefully. "For making me come."');
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['virgin_fuck'] > 0  ||  ((s as any).sex_ev ?? 0)?.['anal_virgin_fuck'] > 0) {
        scene.actions([
          { label: 'For taking your virginity', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((st as any).sex_ev ?? 0)?.['virgin_fuck'] > 0  &&  ((st as any).sex_ev ?? 0)?.['anal_virgin_fuck'] > 0) {
      scene.text('"For taking my virginity," you smile wryly. "Both of them actually. You get the privilege of getting to have been the first one in both my holes."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['virgin_fuck'] > 0) {
        scene.text('"For popping my cherry," you smile wryly. "You\'ve made a woman out of me."');
      } else {
        if (((st as any).sex_ev ?? 0)?.['anal_virgin_fuck'] > 0) {
          scene.text('"For taking my anal virginity," you smile wryly. "I\'ve never let anybody in the back door before."');
        }
      }
    }
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
        ]);
      }
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
        scene.actions([
          { label: 'Because you\'re being paid', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Cause you\'re paying me," you smile wryly.');
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
        ]);
      }
      scene.actions([
        { label: 'Just felt like it', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "I just felt like it," you shrug, giving <<$npcdesc>> a pleasant smile.
    scene.text(`"I just felt like it," you shrug, giving ${((st as any).npcdesc ?? '')} a pleasant smile.`);
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
        { label: 'Cause I like you', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "Cause I like you," you say, giving <<$npcdesc>> a pleasant smile.
    scene.text(`"Cause I like you," you say, giving ${((st as any).npcdesc ?? '')} a pleasant smile.`);
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'kiss', (-10), 'no_orgasm_msg', ((s as any).sex_ev ?? 0)?.['prostitution_flag']);
      qspCall(s, 'arousal', 'kiss', (Math.floor(Math.random() * 2) + 2));
      // TODO-QSP: dynamic text: You lean over to kiss <<$npcdesc>>, gently pressing your lips against his. Insta...
      scene.text(`You lean over to kiss ${((s as any).npcdesc ?? '')}, gently pressing your lips against his. Instantly, it sparks something within you and the kiss takes on a passion of its own and you find yourself drinking him in; his taste, his scent, his tongue, feverishly pressing your faces together as if you might die at any second.`);
      scene.text('It\'s several minutes before you finally break apart, panting breathlessly as you stare into each other\'s eyes.');
      qspGoto(s, 'sex_ev_after', 'relax_together');
    }
    (s as any).orgasm_or = '';
  } else {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: You lean over to kiss <<$npcdesc>> before his eyes widen and he shies away. It p...
    scene.text(`You lean over to kiss ${((s as any).npcdesc ?? '')} before his eyes widen and he shies away. It puzzles you for a moment before he draws a finger around his face in a circle.`);
    scene.text('"You\'ve still got..." You blink before remembering. The cum. Right. He probably doesn\'t want to kiss you with his own load blown all over your face.');
    qspGoto(s, 'sex_ev_after', 'relax_together');
  }
  // TODO-QSP: end
  scene.build();
}

function enterDrinkFluid(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['drink_fluid'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Ask for something to drink', goto: ['sex_ev_after', 'drink_fluid2'] },
    ]);
  } else {
    scene.actions([
      { label: 'Ask for another drink', handler: (st: GameState) => {
    scene.actions([
      { label: 'Water', goto: ['sex_ev_after', 'drink_water2'] },
      { label: 'Vodka', goto: ['sex_ev_after', 'drink_vodka2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDrinkFluid2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['drink_fluid'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
  // TODO-QSP: dynamic text: "Got anything to drink?" you ask <<$npcdesc>>.
  scene.text(`"Got anything to drink?" you ask ${((s as any).npcdesc ?? '')}.`);
  scene.text('"Water or vodka?" he grins.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDrinkWater1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDrinkVodka1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDrinkWater1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['mouth'] > 0) {
    scene.actions([
      { label: 'Water (rinse the taste of cum)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water_stats');
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Water. My mouth could use a rinse," you smirk back with a meaningful look.');
    // TODO-QSP: dynamic text: <<$npcdesc>> proffers a bottle from his nightstand. You take a large swig, swish...
    scene.text(`${((st as any).npcdesc ?? '')} proffers a bottle from his nightstand. You take a large swig, swishing it around in your mouth and removing the residual taste of cum from your tongue. After a swallow, you hand it back so he can take a sip himself.`);
    scene.text('"Thanks," you smile.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Water (thirsty)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water_stats');
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Water," you smirk back. "I\'m parched and I don\'t think vodka will help."');
    if (((st as any).cum_loc ?? 0)?.['mouth'] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> proffers a bottle from his nightstand. You take a grateful swig tha...
      scene.text(`${((st as any).npcdesc ?? '')} proffers a bottle from his nightstand. You take a grateful swig that also happens to leave your mouth feeling clean and free of cum before handing it back so he can take a sip himself.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> proffers a bottle from his nightstand. You take a grateful swig bef...
      scene.text(`${((st as any).npcdesc ?? '')} proffers a bottle from his nightstand. You take a grateful swig before handing it back so he can take a sip himself.`);
    }
    scene.text('"Thanks," you smile.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    { label: 'Water (rehydrate)', handler: (st: GameState) => {
    qspCall(st, 'beverage', 'water_stats');
    scene.img('images/shared/sex/after/drink1.jpg');
    if (((st as any).pcs_sweat ?? 0) > ((st as any).sex_ev ?? 0)?.['starting_sweat'] + 20  &&  ((st as any).sex_ev ?? 0)?.['rough_fuck'] > 0) {
      scene.text('"Water," you reply with a sweaty smirk. "We went pretty hard. I need to replenish some fluids after that."');
    } else {
      if (((st as any).pcs_sweat ?? 0) > ((st as any).sex_ev ?? 0)?.['starting_sweat'] + 20) {
        scene.text('"Water," you reply with a sweaty smirk. "I need to replenish some fluids after that."');
      } else {
        scene.text('"Water," you smirk back. "I think I need to rehydrate."');
      }
    }
    if (((st as any).npc_gymrat ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: iif(sex_ev['rough_fuck'] > 0, '"It was practically a workout," he agrees with no small amount of amu...
    } else {
      // TODO-QSP: iif(rand(1, 2), '"That''s a good idea," he nods.', '"Me too," he huffs tiredly.')
    }
    if (((st as any).cum_loc ?? 0)?.['mouth'] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> hands you a bottle from his nightstand. You take a few large gulps,...
      scene.text(`${((st as any).npcdesc ?? '')} hands you a bottle from his nightstand. You take a few large gulps, swallowing with a pant and leaving your mouth feeling clean of cum before handing it back so he can take a drink himself.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> hands you a bottle from his nightstand. You take a few large gulps,...
      scene.text(`${((st as any).npcdesc ?? '')} hands you a bottle from his nightstand. You take a few large gulps, swallowing with a pant before handing it back so he can take a drink himself.`);
    }
    scene.text('"Thanks," you sigh, feeling finally refreshed.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterDrinkWater2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beverage', 'water_stats');
  scene.img('images/shared/sex/after/drink1.jpg');
  scene.text('"Could I get some more water?" you ask.');
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> hands you a bottle and you drink from it gratefully.
  scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} hands you a bottle and you drink from it gratefully.`);
  qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterDrinkVodka1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['mouth'] > 0  ||  ((s as any).pcs_breath ?? 0) === 0  ||  ((s as any).cumloc ?? 0)[12] === 1  ||  ((s as any).cumspclnt ?? 0) === 2) {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
      scene.actions([
        { label: 'Vodka (cum chaser)', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    ((st as any).cum_loc = (st as any).cum_loc ?? {})['mouth'] = 0;
    (st as any).pcs_breath = 1;
    qspCall(st, 'stat', '');
    if (((st as any).npc_cum_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 'mouth') {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'love');
    }
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Vodka. I need a chaser after that last shot," you smirk back, licking your lips with a meaningful look.');
    // TODO-QSP: dynamic text: <<$npcdesc>> proffers a bottle from his nightstand. You take a large swig and gu...
    scene.text(`${((st as any).npcdesc ?? '')} proffers a bottle from his nightstand. You take a large swig and gulp hard, savouring the burn in your throat, the flourishing of warmth in your belly, and the oddly satisfying flavour of alcohol and cum in your mouth.`);
    scene.text('"Thanks," you grin, handing the bottle back as he takes a drink himself.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
      ]);
    }
    scene.actions([
      { label: 'Vodka (rinse the taste of cum)', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).cumspclnt = 2;
    qspCall(st, 'cum_cleanup', '');
    ((st as any).cum_loc = (st as any).cum_loc ?? {})['mouth'] = 0;
    (st as any).pcs_breath = 1;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Vodka. I have a taste I want to get out of my mouth," you smirk back with a meaningful look.');
    // TODO-QSP: dynamic text: <<$npcdesc>> proffers a bottle from his nightstand. You take a large swig and gu...
    scene.text(`${((st as any).npcdesc ?? '')} proffers a bottle from his nightstand. You take a large swig and gulp hard, sighing as the overpowering flavor of alcohol washes the cum from your tongue and creates a flourishing warmth in your belly.`);
    scene.text('"Thanks," you smile, handing the bottle back as he takes a drink himself.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Vodka', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Vodka," you grin back.');
    // TODO-QSP: dynamic text: <<$npcdesc>> proffers a bottle from his nightstand. You take a large swig and gu...
    scene.text(`${((st as any).npcdesc ?? '')} proffers a bottle from his nightstand. You take a large swig and gulp hard, sighing as you savour the burn in your throat and the flourishing warmth in your belly.`);
    scene.text('"Thanks," you smile, handing the bottle back as he takes a drink himself.');
    qspCall(st, 'sex_ev_pillow_talk', 'topic_route');
  } },
  ]);
  scene.build();
}

function enterDrinkVodka2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'drugs', 'alcohol', 'vodka');
  scene.img('images/shared/sex/after/drink1.jpg');
  scene.text('"Can I get another hit of that vodka?" you ask.');
  // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> hands you a bottle and you take a swig of it gratefull...
  scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} hands you a bottle and you take a swig of it gratefully.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDrinkVodkaEffect(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
  // TODO-QSP: end
  scene.build();
}

function enterDrinkVodkaEffect(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) >= 10) {
    scene.text('The room is spinning...');
  } else {
    if (((s as any).alko ?? 0) >= 6) {
      scene.text('The room starts to spin. You\'re <i>very</i> drunk.');
    } else {
      if (((s as any).alko ?? 0) >= 4) {
        scene.text('Your sight of the wavers slightly and you\'re <i>definitely</i> drunk.');
      } else {
        if (((s as any).alko ?? 0) >= 2) {
          scene.text('Your head buzzes pleasantly from the alcohol.');
        } else {
          if (((s as any).alko ?? 0) === 1) {
            scene.text('Your chest blossoms with warmth as the alcohol hits your stomach.');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlanB(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] !== 2  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] === 0  &&  (!((s as any).mesec ?? 0))) {
    scene.actions([
      { label: 'Take a morning after pill', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_after', 'plan_b_take'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlanBTake(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill'] = 2;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      // TODO-QSP: dynamic text: With <<$npcdesc>>''s cum still leaking from your pussy, you reach down to your p...
      scene.text(`With ${((s as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach down to your purse and pull out the morning after pill Luda gave you.`);
    } else {
      // TODO-QSP: dynamic text: With <<$npcdesc>>''s cum still leaking from your pussy, you reach down to your p...
      scene.text(`With ${((s as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach down to your purse and pull out the morning after pill you keep inside.`);
    }
  } else {
    if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      scene.text('You reach down to your purse and pull out the morning after pill Luda gave you.');
    } else {
      scene.text('You reach down to your purse and pull out the morning after pill you keep inside.');
    }
  }
  qspGoto(s, 'sex_ev_after', 'plan_b2');
  // TODO-QSP: end
  scene.build();
}

function enterPlanB2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPlanB3(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      scene.actions([
        { label: 'Don\'t say anything', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>> watches you pop the pill out of its packaging and you gulp it down ...
    scene.text(`${((st as any).npcdesc ?? '')} watches you pop the pill out of its packaging and you gulp it down without a word of acknowledgment.`);
    scene.text('It\'s not for him, why does he need to know?');
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Take it casually', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>> watches you pop the pill out of its packaging.
    scene.text(`${((st as any).npcdesc ?? '')} watches you pop the pill out of its packaging.`);
    if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['aunt_pill'] = 1;
      scene.text('"My aunt gave me this morning after pill for emergencies," you explain and pop it in your mouth before forcing it down with a dry swallow.');
    } else {
      scene.text('"Morning after pill," you explain and pop it in your mouth before forcing it down with a dry swallow.');
    }
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Take it shyly', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>> watches you pop the pill out of its packaging and you can''t help b...
    scene.text(`${((st as any).npcdesc ?? '')} watches you pop the pill out of its packaging and you can't help but blush beneath his gaze.`);
    if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['aunt_pill'] = 1;
      scene.text('"My aunt gave me this for emergencies," you say shyly, blush intensifying as you put it in your mouth and force it down with a dry swallow.');
    } else {
      scene.text('"The instructions say to take it as soon as possible for best effect," you smile shyly, blush intensifying as you put it in your mouth and force it down with a dry swallow.');
    }
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'Take it sexily', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As <<$npcdesc>> watches you pull the pill from its packaging, you stick out your...
    scene.text(`As ${((st as any).npcdesc ?? '')} watches you pull the pill from its packaging, you stick out your tongue at him, popping the pill onto it and swallowing with a wide grin.`);
    if (((st as any).sex_ev ?? 0)?.['accidental_creampie_convo'] === 1) {
      scene.text('"There," you smirk. "Problem solved."');
    } else {
      if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
        scene.text('"Chaser," you wink.');
      } else {
        if (((st as any).age ?? 0) < 20) {
          scene.text('"Not really looking to become a teen mom," you smirk.');
        } else {
          scene.text('"I\'m not ready to be a mom," you smirk.');
        }
      }
    }
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlanB3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it casually', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>> watches you pop the pill out of its packaging and into your mouth.
    scene.text(`${((st as any).npcdesc ?? '')} watches you pop the pill out of its packaging and into your mouth.`);
    scene.text('"There," you say, forcing it down with a dry swallow. "Problem solved."');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Take it shyly', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <<$npcdesc>> watches you pop the pill out of its packaging and you can''t help b...
    scene.text(`${((st as any).npcdesc ?? '')} watches you pop the pill out of its packaging and you can't help but blush beneath his gaze.`);
    scene.text('"Problem solved," you say, feeling your cheeks redden even further as you force it down with a dry swallow.');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Take it sexily', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: As <<$npcdesc>> watches you pull the pill from its packaging, you stick out your...
    scene.text(`As ${((st as any).npcdesc ?? '')} watches you pull the pill from its packaging, you stick out your tongue at him, popping the pill onto it and swallowing with a wide grin.`);
    if (((st as any).sex_ev ?? 0)?.['last_cum'] === 'swallow'  &&  ((st as any).totminut ?? 0) < ((st as any).sex_ev ?? 0)?.['finish_time'] + 5) {
      scene.text('"Chaser," you wink.');
    } else {
      scene.text('"There," you smirk. "Problem solved."');
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['ma_pill'] = 2;
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBirthControlPillTake(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['remind_hour'] > 0  &&  ((s as any).tabletkiday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] === 0  &&  ((s as any).sex_ev ?? 0)?.['bc_take'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 0  &&  (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  ||  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0)) {
    scene.actions([
      { label: 'Take your birth control', handler: (st: GameState) => {
    ((st as any).birth_control = (st as any).birth_control ?? {})['message_skip'] = ((st as any).daystart ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bc_take'] = 1;
    qspCall(st, 'din_bad', 'quick_takepill');
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).birth_control ?? 0)?.['remind_hour'] > 0  &&  ((st as any).hour ?? 0) >= ((st as any).birth_control ?? 0)?.['remind_hour']  &&  ((st as any).hour ?? 0) <= ((st as any).birth_control ?? 0)?.['remind_hour'] + 1  &&  ((st as any).tabletkiday ?? 0) !== ((st as any).daystart ?? 0)  &&  ((st as any).sex_ev ?? 0)?.['bc_take'] !== 1) {
      scene.text('You notice your phone winking a calendar reminder at you:');
      scene.text('<i><font color="pink"><b>Take your vitamins!</b></font></i>');
      scene.text('Right, you need to take your birth control pill for the day.');
    } else {
      if (((st as any).hour ?? 0) >= ((st as any).birth_control ?? 0)?.['remind_hour']) {
        scene.text('A spark fires somewhere in the back of your brain reminding you of something very important.');
        scene.text('"Oh shit! I almost forgot to take my birth control!"');
      } else {
        scene.text('A sudden thought pops into your head.');
        scene.text('You haven\'t taken your birth control pill for the day.');
      }
    }
    if (((st as any).sex_ev ?? 0)?.['boy_asleep'] === 1) {
      // TODO-QSP: iif(cum_loc['vagina'] > 0, 'With <<$npcdesc>> snoring softly beside you and his cum leaking from you...
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBirthControlPillTake2(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBirthControlPillTake2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Take it shyly', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    } else {
      // TODO-QSP: $sex_ev['bed_room']
    }
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: With <<$npcdesc>>''s cum still leaking from your pussy, you reach down to your p...
      scene.text(`With ${((st as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach down to your purse and pull out your birth control.`);
      if (((st as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
        scene.text('"Hopefully we won\'t have to worry about this stuff soon," you smile, shyly placing the pill between your lips and swallowing.');
      } else {
        scene.text('"This is what the pill is for after all," you smile, shyly placing the pill between your lips and swallowing.');
      }
    } else {
      scene.text('You reach down to your purse and pull out your birth control.');
      if (((st as any).pillcon2 ?? 0) > 20000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
        scene.text('"I think it\'ll kick in soon," you smile, shyly placing the pill between your lips and swallowing.');
      } else {
        if (((st as any).pillcon2 ?? 0) > 10000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
          scene.text('"It\'s gonna be a while before it starts working," you smile, shyly placing the pill between your lips and swallowing.');
        } else {
          if (((st as any).pillcon2 ?? 0) > 0  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
            scene.text('"I only just started it," you smile, shyly placing the pill between your lips and swallowing.');
          } else {
            scene.text('"This is what the pill is for after all," you smile, shyly placing the pill between your lips and swallowing.');
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Take it casually', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    } else {
      // TODO-QSP: $sex_ev['bed_room']
    }
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: With <<$npcdesc>>''s cum still leaking from your pussy, you reach down to your p...
      scene.text(`With ${((st as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach down to your purse and pull out your pills.`);
      scene.text('"My birth control," you explain, casually placing the pill between your lips and swallowing.');
    } else {
      scene.text('You reach down to your purse and pull out your birth control.');
      if (((st as any).pillcon2 ?? 0) > 20000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
        scene.text('"My birth control," you explain, casually placing the pill between your lips and swallowing. "It should be fully effective any day now."');
      } else {
        if (((st as any).pillcon2 ?? 0) > 10000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
          scene.text('"My birth control," you explain, casually placing the pill between your lips and swallowing. "Although it\'ll be a while longer before it starts working."');
        } else {
          if (((st as any).pillcon2 ?? 0) > 0  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
            scene.text('"My birth control," you explain, casually placing the pill between your lips and swallowing. "I only just started recently."');
          } else {
            scene.text('"My birth control," you explain, casually placing the pill between your lips and swallowing.');
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Take it sexily', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['get_up'] === 0) {
      scene.img('images/shared/sex/after/pillow_talk1.jpg');
    } else {
      // TODO-QSP: $sex_ev['bed_room']
    }
    if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: With <<$npcdesc>>''s cum still leaking from your pussy, you reach down to your p...
      scene.text(`With ${((st as any).npcdesc ?? '')}'s cum still leaking from your pussy, you reach down to your purse and pull out your birth control.`);
      // TODO-QSP: dynamic text: You give him a sly look and open your mouth wide, sticking out your tongue and p...
      scene.text(`You give him a sly look and open your mouth wide, sticking out your tongue and placing the pill in the middle of it. You withdraw it into your mouth and gulp hard, all without breaking eye contact with ${((st as any).npcdesc ?? '')}.`);
      if (((st as any).sex_ev ?? 0)?.['risky_creampie'] === 1) {
        scene.text('"You better hope this stuff kicks in soon," you grin.');
      } else {
        if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"My baby police pill," you grin. "So you can keep coming inside me without worry."');
        } else {
          scene.text('"This is what the pill is for after all," you grin.');
        }
      }
    } else {
      scene.text('You reach down to your purse and pull out your birth control.');
      // TODO-QSP: dynamic text: Giving <<$npcdesc>> a sly look, you open your mouth wide, sticking out your tong...
      scene.text(`Giving ${((st as any).npcdesc ?? '')} a sly look, you open your mouth wide, sticking out your tongue and placing the pill in the middle of it. You withdraw it into your mouth and gulp hard, all without breaking eye contact with ${((st as any).npcdesc ?? '')}.`);
      if (((st as any).pillcon2 ?? 0) > 20000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
        scene.text('"Just a few more days and we\'ll never have to worry about condoms again," you grin.');
      } else {
        if (((st as any).pillcon2 ?? 0) > 10000  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
          ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
          scene.text('"It\'ll take a little while, but then we\'ll never have to worry about condoms again," you grin.');
        } else {
          if (((st as any).pillcon2 ?? 0) > 0  &&  ((st as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            ((st as any).npc_know_bc_not_effective = (st as any).npc_know_bc_not_effective ?? {})[String((st as any).npcID ?? 0)] = 1;
            scene.text('"I only just started," you grin. "But in about a few weeks, we\'ll be able to go condom free."');
          } else {
            scene.text('"Nothing sexier than safe sex," you grin.');
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterSmokeLink(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['smoke_time'] + 5 > ((s as any).totminut ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['boy_smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
    // TODO-QSP: 'You and <<$npcdesc>> lay together, ' + iif(sex_ev['smoke_react'] = 0, '<a href="exec: gt ''sex_ev_a...
  } else {
    if (((s as any).sex_ev ?? 0)?.['smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
      // TODO-QSP: '<<$npcdesc>> lays next to you while you ' + iif(sex_ev['smoke_react'] = 0, '<a href="exec: gt ''sex...
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
        // TODO-QSP: 'You lay next to <<$npcdesc>> while he ' + iif(sex_ev['smoke_react'] = 0, '<a href="exec: gt ''sex_e...
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSmokeCiga1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] === 0) {
    scene.actions([
      { label: 'One of yours', goto: ['sex_ev_after', 'smoke_ciga2'] },
      { label: 'Play with your phone', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['phone'] = 2;
    qspGoto(st, 'sex_ev_after', 'smoke_ciga2');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
    scene.actions([
      { label: 'Bum a cigarette', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bum_cigarette'] = 1;
    qspGoto(st, 'sex_ev_after', 'smoke_ciga_bum');
  } },
      { label: 'Bum a cigarette and play with your phone', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bum_cigarette'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cigarette'] = 3;
    qspGoto(st, 'sex_ev_after', 'smoke_ciga_bum');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Never mind', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', '');
  } },
  ]);
  scene.build();
}

function enterSmokeCiga2(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_pc_smoker = (s as any).npc_know_pc_smoker ?? {})[String((s as any).npcID ?? 0)] = 1;
  scene.img('images/shared/sex/after/bed_smoke0.jpg');
  if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['boy_smoked'] !== 1) {
    // TODO-QSP: dynamic text: Watching <<$npcdesc>> inspires you to reach for your own cigarettes and light up...
    scene.text(`Watching ${((s as any).npcdesc ?? '')} inspires you to reach for your own cigarettes and light up too.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['annoyed'] > 0) {
      // TODO-QSP: dynamic text: Feeling very irritated at <<$npcdesc>>, you grab a cigarette and light up.
      scene.text(`Feeling very irritated at ${((s as any).npcdesc ?? '')}, you grab a cigarette and light up.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cigarette'] === 1) {
        scene.text('Still unsatisfied, you pull another cigarette from the box and flick your lighter, ');
      } else {
        scene.text('You pull a cigarette from your purse and place it in your mouth, sparking it with your lighter while inhaling deeply.');
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
    if (((s as any).npcID ?? 0) === 'A69'  &&  ((s as any).sex_ev ?? 0)?.['coach_smoke'] === 0) {
      qspGoto(s, 'sex_ev_A69', 'coach_smoke');
    }
  }
  qspGoto(s, 'sex_ev_after', 'smoke_ciga_act');
  // TODO-QSP: end
  scene.build();
}

function enterSmokeCigaBum(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_know_pc_smoker = (s as any).npc_know_pc_smoker ?? {})[String((s as any).npcID ?? 0)] = 1;
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.img('images/shared/sex/after/bed_smoke0.jpg');
    scene.text('"Can I get one of those?" you ask.');
    // TODO-QSP: dynamic text: <<$npcdesc>> hands over his pack to you and you accept one gratefully, lighting ...
    scene.text(`${((s as any).npcdesc ?? '')} hands over his pack to you and you accept one gratefully, lighting it and inhaling deeply.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSmokeCigaAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    scene.img('images/shared/sex/after/annoyed1.jpg');
    // TODO-QSP: dynamic text: "Got any smokes?" you ask but <<$npcdesc>> just shakes his head.
    scene.text(`"Got any smokes?" you ask but ${((s as any).npcdesc ?? '')} just shakes his head.`);
    scene.text('"I don\'t smoke. It\'s bad for you y\'know."');
    scene.actions([
      { label: 'Damn', handler: (st: GameState) => {
    scene.text('"Damn," you sigh unhappily. "A cigarette is just what I need right now..."');
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
      { label: 'I should probably quit', handler: (st: GameState) => {
    scene.text('"I should probably quit too," you say ruefully. "It just feels so good to smoke one after sex..."');
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSmokeCigaAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Smoke', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['bum_cigarette'] === 1) {
      qspCall(st, 'drugs', 'smoke', 'borrow');
    } else {
      qspCall(st, 'drugs', 'smoke');
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['smoke_time'] = ((st as any).totminut ?? 0);
    if (((st as any).sex_ev ?? 0)?.['phone'] === 2) {
      qspGoto(st, 'sex_ev_after', 'smoke_phone');
    }
    if (((st as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((st as any).sex_ev ?? 0)?.['boy_asleep'] !== 1) {
      if (((st as any).npc_smoker ?? 0)?.[String((st as any).npcID ?? 0)] > 0  &&  ((st as any).sex_ev ?? 0)?.['boy_smoked'] !== 1) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_smoked'] = 1;
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_smoke_time'] = ((st as any).totminut ?? 0);
        scene.img('images/shared/sex/after/bed_smoke3.jpg');
        if (((st as any).sex_ev ?? 0)?.['annoyed'] > 0) {
          scene.text('The two of you puff away in silence, smoking up your irritation and refusing to speak to one another.');
        } else {
          // TODO-QSP: dynamic text: Smoke fills your lungs and you hold it there, savouring it, before exhaling slow...
          scene.text(`Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it's like all your stress goes with it and you sigh happily, relaxing into the bed. ${((st as any).npcdesc ?? '')} does the same beside you.`);
        }
      } else {
        scene.img('images/shared/sex/after/bed_smoke1.jpg');
        if (((st as any).sex_ev ?? 0)?.['annoyed'] > 0) {
          // TODO-QSP: dynamic text: You focus entirely on the cigarette in your mouth, making a point of ignoring <<...
          scene.text(`You focus entirely on the cigarette in your mouth, making a point of ignoring ${((st as any).npcdesc ?? '')} for as long as it burns between your lips.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['cigarette'] === 1) {
            scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. The smoke trails hazily around the room as you enjoy another cigarette.');
          } else {
            scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, relaxing into the bed.');
          }
        }
      }
      qspGoto(st, 'sex_ev_after', 'relax_together');
    } else {
      scene.img('images/shared/sex/after/bed_smoke1.jpg');
      if (((st as any).sex_ev ?? 0)?.['cigarette'] === 1) {
        // TODO-QSP: 'Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. The smoke trail...
      } else {
        // TODO-QSP: 'Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke bl...
      }
      qspGoto(st, 'sex_ev_after', 'after_sex2');
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cigarette'] = 1;
  } },
  ]);
  scene.build();
}

function enterSmokePhone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['boy_smoked'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_smoked'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_smoke_time'] = ((s as any).totminut ?? 0);
    scene.img('images/shared/sex/after/phone_smoke.jpg');
    scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, reaching down for your phone to start scrolling through feeds as you relax into the bed.');
  } else {
    scene.img('images/shared/sex/after/phone_smoke.jpg');
    if (((s as any).sex_ev ?? 0)?.['cigarette'] === 1) {
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. The smoke trails hazily around the room as you enjoy another cigarette while continuing to tap away at your phone.');
    } else {
      scene.text('Smoke fills your lungs and you hold it there, savouring it, before exhaling slowly. As the smoke blows past your lips, it\'s like all your stress goes with it and you sigh happily, reaching for your phone before relaxing into the bed.');
    }
  }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cigarette'] = 1;
  qspGoto(s, 'sex_ev_after', 'relax_together');
  // TODO-QSP: end
  scene.build();
}

function enterSmokeCigaReact(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['smoke_react'] = 1;
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Always smoke after sex', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['phone'] > 0) {
      scene.img('images/shared/sex/after/phone_smoke.jpg');
      scene.text('"There\'s just nothing like a cigarette after sex..." you sigh happily, tapping through your phone while exhaling a plume of smoke.');
    } else {
      scene.img('images/shared/sex/after/bed_smoke1_2.jpg');
      scene.text('"There\'s just nothing like a cigarette after sex..." you sigh happily, feeling your body totally unwind as you exhale a plume of smoke.');
    }
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Smoke in silence', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/bed_smoke3.jpg');
    scene.text('You share a comfortable moment together with ');
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
    { label: '"I needed this"', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['phone'] > 0) {
      scene.img('images/shared/sex/after/phone_smoke.jpg');
      scene.text('"Ahhh... I needed this..." you sigh happily, tapping through your phone while exhaling a plume of smoke.');
    } else {
      scene.img('images/shared/sex/after/bed_smoke1_2.jpg');
      scene.text('"Ahhh... I needed this..." you sigh happily, feeling your body totally unwind as you exhale a plume of smoke.');
    }
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
  ]);
  scene.build();
}

function enterBoySmoking(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask for a puff', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/smoke_bum1.jpg');
    scene.text('"Can I get a puff of that?" you ask, looking at the cigarette in his mouth and holding out your fingers in a V.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/smoke_bum2.jpg');
    scene.text('"Can I get a puff of that?" you ask, looking at the cigarette in his mouth and holding out your fingers in a V.');
    scene.text('"Sure," he says, offering it over to you.');
    scene.actions([
      { label: 'Take a drag', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'smoke', 'borrow');
    scene.img('images/shared/sex/after/smoke_bum2.jpg');
    scene.text('Taking the cigarette, you inhale deeply, letting the warmth and acridity fill your lungs. After a moment, you exhale slowly letting a plume of smoke out from between your lips.');
    scene.text('"Thanks," you sigh with satisfaction as you hand the cigarette back to him. "I really needed that."');
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
      { label: 'Take a drag (and keep it)', handler: (st: GameState) => {
    ((st as any).npc_ciga_steal = (st as any).npc_ciga_steal ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_ciga_steal[String((st as any).npcID ?? 0)] ?? 0) + (1);
    qspCall(st, 'drugs', 'smoke', 'borrow');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['smoke_time'] = ((st as any).totminut ?? 0) - (((st as any).totminut ?? 0) - (((st as any).sex_ev ?? {})?.['boy_smoke_time'] ?? 0));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_smoke_time'] = ((st as any).totminut ?? 0);
    scene.img('images/shared/sex/after/smoke_bum2.jpg');
    scene.text('Taking the cigarette, you inhale deeply, letting the warmth and acridity fill your lungs. After a moment, you exhale slowly letting a plume of smoke out from between your lips.');
    scene.text('"That\'s great," you sigh with satisfaction as you take another drag. He looks expectantly at you for a few moments before you take yet a <i>third</i> drag and he realizes he\'s not getting it back.');
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
      if (((st as any).npc_ciga_steal ?? 0)?.[String((st as any).npcID ?? 0)] > 5) {
        // TODO-QSP: dynamic text: "Why do you always do this?" <<$npcdesc>> mutters in irritation as he slaps out ...
        scene.text(`"Why do you always do this?" ${((st as any).npcdesc ?? '')} mutters in irritation as he slaps out another cigarette to replace the one he lost. "Bitch, can't you just get your own smokes? Why do you have to steal mine?"`);
      } else {
        // TODO-QSP: dynamic text: "So much for ''just a puff,''" <<$npcdesc>> mutters in irritation as he slaps ou...
        scene.text(`"So much for 'just a puff,'" ${((st as any).npcdesc ?? '')} mutters in irritation as he slaps out another cigarette to replace the one he just lost.`);
      }
    } else {
      // TODO-QSP: dynamic text: "What happened to just a puff?" <<$npcdesc>> asks wryly as he pulls another ciga...
      scene.text(`"What happened to just a puff?" ${((st as any).npcdesc ?? '')} asks wryly as he pulls another cigarette out to replace the one he just lost.`);
    }
    qspGoto(st, 'sex_ev_after', 'relax_together');
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpendNightAsk(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).hour ?? 0) >= 20  ||  ((s as any).daystage ?? 0)?.['desc'] === 'mid_night')  &&  ((s as any).sex_ev ?? 0)?.['spend_night'] === 0  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home'  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1) {
    scene.actions([
      { label: 'Ask to spend the night', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['spend_night'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['spend_night_question'] = '"Mind if I spend the night?" you ask';
    } else {
      if (((st as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['spend_night_question'] = '"I can sleep here, right?" you ask';
      }
    }
    // TODO-QSP: dynamic text: <<$sex_ev[''spend_night_question'']>>
    scene.text(`${((st as any).sex_ev ?? 0)?.['spend_night_question'] ?? ''}`);
    if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.actions([
        { label: 'I\'m sick of my mom', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''spend_night_question'']>>. "My mom has been such a bitch lately and ...
    scene.text(`${((st as any).sex_ev ?? 0)?.['spend_night_question'] ?? ''}. "My mom has been such a bitch lately and I don't want to see her."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).hour ?? 0) < 5) {
      if (((st as any).start_type ?? 0)?.['loc'] === 'sg') {
        scene.actions([
          { label: 'Avoid my mom', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''spend_night_question'']>>. "If I go home now, my mom will chew me ou...
    scene.text(`${((st as any).sex_ev ?? 0)?.['spend_night_question'] ?? ''}. "If I go home now, my mom will chew me out for coming back too late. She'll still chew me out later, but I don't want to deal with it right now."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        ]);
      }
    }
    if (((st as any).hour ?? 0) >= 22  ||  ((st as any).hour ?? 0) < 5) {
      scene.actions([
        { label: 'It\'s late', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''spend_night_question'']>>. "It''s late and I don''t want to go."
    scene.text(`${((st as any).sex_ev ?? 0)?.['spend_night_question'] ?? ''}. "It's late and I don't want to go."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    if (((st as any).stat ?? 0)?.['boyfriends_current'] > 0  &&  ((st as any).living_with_npc ?? 0) > 0) {
      scene.actions([
        { label: 'I don\'t want to see my boyfriend(annoyed)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''spend_night_question'']>>. "My boyfriend''s been pissing me off late...
    scene.text(`${((st as any).sex_ev ?? 0)?.['spend_night_question'] ?? ''}. "My boyfriend's been pissing me off lately and I don't want to go home to that."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t feel like going home', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$sex_ev[''spend_night_question'']>>. "I don''t feel like going home tonight."
    scene.text(`${((st as any).sex_ev ?? 0)?.['spend_night_question'] ?? ''}. "I don't feel like going home tonight."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpendNight(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSpendNight(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_cheating_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('"Sorry, can\'t. My girlfriend wanted to come over tonight. In fact, you should leave soon before she catches you."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          scene.text('"Sorry, can\'t. Booked the room for a date with my girlfriend. In fact, you should leave now before before she arrives."');
        }
      }
      scene.text('"Ugh. <i>Bitch!</i>"');
      scene.text('"Yeah, I know. Sucks."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('"Sure, my girlfriend isn\'t gonna be around for a while. You can crash here."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
          scene.text('"Sure. The room is booked until tomorrow anyways."');
        } else {
          scene.text('"Of course," he smiles.');
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCuddleUp(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  } else {
    if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).hour ?? 0) < 22) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
      scene.text('"Sorry, can\'t. I have something to do in the morning."');
      scene.text('"Ugh, really?"');
      scene.text('"Yeah, I know. Sucks."');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).hour ?? 0) < 20  &&  ((s as any).hour ?? 0) > 16) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cant_stay'] = 1;
        ((s as any).npc_cheating_know = (s as any).npc_cheating_know ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Sorry, my girlfriend is coming over soon. Can\'t let her catch you here."');
        scene.text('"Ugh, really?"');
        scene.text('"Yeah, I know. Sucks."');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        scene.text('"Sure, I\'m not doing anything tomorrow. You can crash here."');
        // TODO-QSP: dynamic text: "Thanks," you yawn, snuggling into <<$npcdesc>>. "Appreciate it."
        scene.text(`"Thanks," you yawn, snuggling into ${((s as any).npcdesc ?? '')}. "Appreciate it."`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterCuddleUp(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCuddleUp(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Cuddle up', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/cuddle1.jpg');
    // TODO-QSP: dynamic text: "Thanks," you yawn, snuggling into <<$npcdesc>>. "Appreciate it."
    scene.text(`"Thanks," you yawn, snuggling into ${((st as any).npcdesc ?? '')}. "Appreciate it."`);
    scene.text('He wraps his arms around you in return and you close your eyes, allowing yourself to drift off into sleep.');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    { label: 'Get under the covers (separated)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).npc_cuddler ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"Thanks," you yawn, crawling under the covers. "Appreciate it."');
      scene.text('You snuggle into their warmth and close your eyes, allowing yourself to drift off into sleep.');
      scene.actions([
        { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
      ]);
    } else {
      scene.text('"Thanks," you yawn, crawling under the covers. "Appreciate it."');
      // TODO-QSP: dynamic text: You start to snuggle into their warmth and close your eyes when you feel <<$npcd...
      scene.text(`You start to snuggle into their warmth and close your eyes when you feel ${((st as any).npcdesc ?? '')}'s arm wrap around you.`);
      scene.actions([
        { label: 'Get closer', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/cuddle2.jpg');
    // TODO-QSP: dynamic text: With a smile, you twist around and intertwine your legs with <<$npcdesc>>''s, ge...
    scene.text(`With a smile, you twist around and intertwine your legs with ${((st as any).npcdesc ?? '')}'s, getting even closer. Your thighs hug his. His flaccid member presses against your pelvis. Your breasts smush into his chest.`);
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
        { label: 'Uncomfortable', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/cuddle_reluctant1.mp4');
    scene.text('"What are you doing?" you ask stiffly.');
    scene.text('"Just getting close," he murmurs, pressing his body up against yours.');
    // TODO-QSP: dynamic text: Uncomfortably, you turn away, stifling deep sighs of exasperation and try to fal...
    scene.text(`Uncomfortably, you turn away, stifling deep sighs of exasperation and try to fall asleep. ${((st as any).npcdesc ?? '')} pressing into your back with his flaccid member right between your ass cheeks make it a challenge, but <i>eventually</i> you manage to drift off into sleep.`);
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterCuddleUp2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 1  &&  ((s as any).sex_ev ?? 0)?.['action_restricted'] === 0  &&  ((s as any).sex_ev ?? 0)?.['morning_after'] === 0) {
    // TODO-QSP: act'Watch <<$npc_usedname[$npcID]>> sleep':
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSex2(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Sleep with ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    scene.actions([
      { label: 'Nevermind', goto: ['sex_ev_after', 'after_sex2_w_picture'] },
      { label: 'Cuddle up', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/cuddle1.jpg');
    // TODO-QSP: dynamic text: With your eyelids growing heavy, you snuggle up with <<$npcdesc>>, sharing in hi...
    scene.text(`With your eyelids growing heavy, you snuggle up with ${((st as any).npcdesc ?? '')}, sharing in his warmth and close your eyes. Moments later, sleep takes you.`);
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
      { label: 'Get under the covers', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('With your eyelids growing heavy, you decide to get under the covers, snuggling into their warmth and close your eyes. Moments later, sleep takes you.');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterBed(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
  qspCall(s, 'stat', '');
  if (((s as any).pcs_pubes ?? 0) < 4) {
    scene.img('images/shared/sex/after/sleep1.jpg');
  } else {
    scene.img('images/shared/sex/after/sleep2.jpg');
  }
  scene.text('Your eyelids feel so heavy right now. You should probably get up but... you just need to rest your eyes...');
  scene.text('just... for... a minute...');
  qspCall(s, 'willpower', 'misc', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Force yourself to get up', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Force yourself to get up', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['get_up'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('With tremendous effort, you force your eyes open and haul yourself out of bed. You can\'t fall asleep now, not yet.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAfterSex2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drift off into sleep', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sleep_accident'] = 1;
    if (((st as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.img(`images/shared/sex/cum/facial/sleep${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    } else {
      if (((st as any).cum_loc ?? 0)?.['stomach'] > 0) {
        scene.img('images/shared/sex/cum/stomach/sleep1.jpg');
      } else {
        if (((st as any).cum_loc ?? 0)?.['ass'] > 0  ||  ((st as any).cum_loc ?? 0)?.['back'] > 0) {
          scene.img('images/shared/sex/cum/back1.jpg');
        } else {
          if (((st as any).cum_loc ?? 0)?.['vagina'] > 0) {
            scene.img('images/shared/sex/cum/vagcreampie/after2.jpg');
          } else {
            scene.img('images/shared/home/bedroom/son.jpg');
          }
        }
      }
    }
    scene.text('<i>just... for... a minute...</i>');
    scene.text('That\'s the last thing you remember before everything fading into darkness...');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSorePussyMsg(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_time_total'] > ((s as any).pcs_vag ?? 0) * 3) {
    if (((s as any).pain ?? 0)?.['vaginal'] + (((s as any).vgape ?? 0) * 8) > 70) {
      scene.text('Your pussy throbs painfully, drawing involuntary winces every time. The way it feels, you seriously wonder if you\'ll be able to walk tomorrow.');
    } else {
      if (((s as any).pain ?? 0)?.['vaginal'] + (((s as any).vgape ?? 0) * 8) > 40) {
        scene.text('Your pussy throbs sorely, hot and painfully like a bruise. It\'s a little hard to keep your legs together right now.');
      } else {
        if (((s as any).pain ?? 0)?.['vaginal'] > 10) {
          scene.text('Your pussy throbs uncomfortably between your legs, pulsing like a well-worn-out muscle. Which, you suppose, it is right now.');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSleep(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Fall asleep', handler: (st: GameState) => {
    scene.text('You lay there, your eyelids slowly grow heavier until they close completely and your consciousness drifts slowly into darkness...');
    scene.actions([
      { label: '. . .', goto: ['sex_ev_after', 'sleep_function'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSleepFunction(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'session_reset');
  qspCall(s, 'arousal', 'end');
  if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - (((s as any).sex_ev ?? 0)?.['cum_count']/2) + ((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)]  &&  (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0)  &&  ((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['lover_left'] !== 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleepover'] = 1;
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (5);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_time'] = (Math.floor(Math.random() * 3) + 1);
      (s as any).minut = ((s as any).minut ?? 0) + (60*(((s as any).sex_ev ?? {})?.['sleep_time'] ?? 0));
      (s as any).pcs_sleep = ((s as any).pcs_sleep ?? 0) + (15*(((s as any).sex_ev ?? {})?.['sleep_time'] ?? 0));
      (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (5*(((s as any).sex_ev ?? {})?.['sleep_time'] ?? 0));
      qspCall(s, 'stat', '');
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleep_fuck'] = 1;
    } else {
      if (((s as any).alko ?? 0) > 6) {
        qspCall(s, 'sleep_simple', 'simple');
        qspCall(s, 'pain', '3', 'head', 'ache');
      } else {
        qspCall(s, 'sleep_simple', 'simple');
      }
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (5);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['wake_fuck'] = 1;
    }
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['extra_cum'] = ((s as any).sex_ev['extra_cum'] ?? 0) + (5);
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sleepover'] = 1;
    if (((s as any).alko ?? 0) > 6) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['hangover'] = 1;
      qspCall(s, 'sleep_simple', 'simple');
      qspCall(s, 'pain', '3', 'head', 'ache');
    } else {
      qspCall(s, 'sleep_simple', 'simple');
    }
    if (((s as any).vomit ?? 0)?.['daily_check'] === 0) {
      ((s as any).vomit = (s as any).vomit ?? {})['daily_check'] = 1;
      if (((s as any).alko ?? 0) > 4) {
        ((s as any).vomit = (s as any).vomit ?? {})['hangover'] = 1;
      } else {
        if (((s as any).pregchem ?? 0) > 600  &&  ((s as any).pregchem ?? 0) < 2160  &&  (Math.floor(Math.random() * 4) + 1) === 4) {
          ((s as any).vomit = (s as any).vomit ?? {})['morning_sick'] = 1;
        } else {
          if ((Math.floor(Math.random() * 100) + 1) === 100) {
            ((s as any).vomit = (s as any).vomit ?? {})['unlucky'] = 1;
          }
        }
      }
    }
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  qspFunc(s, 'homes_properties', 'has_access', 'parents_home')) {
      ((s as any).sveta_punishment = (s as any).sveta_punishment ?? {})['no_come_home'] = 1;
    }
    qspGoto(s, 'sex_ev_wakeup', 'start');
  }
  if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) < 4  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'hotel_room') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_make_breakfast'] = 1;
    if (((s as any).sex_ev ?? 0)?.['boy_shower'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 0;
    }
  } else {
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['wake_fuck'] !== 1) {
      if ((Math.floor(Math.random() * 2) + 1) === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 1;
      } else {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_shower'] = 1;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_morning_shower'] = 1;
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['wake_fuck'] === 1) {
    qspGoto(s, 'sex_ev_sex', 'wakeup_sex');
  } else {
    if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
      qspGoto(s, 'sex_ev_sex', 'sleep_sex');
    } else {
      if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 0) {
        qspGoto(s, 'sex_ev_wakeup', 'start');
      } else {
        qspGoto(s, 'sex_ev_wakeup', 'start');
      }
    }
  }
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_after ---------------------------------
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'quit':
      enterQuit(s, scene);
      break;
    case 'quit2':
      enterQuit2(s, scene);
      break;
    case 'stop_here':
      enterStopHere(s, scene);
      break;
    case 'stop_here_menu':
      enterStopHereMenu(s, scene);
      break;
    case 'stop_here2':
      enterStopHere2(s, scene);
      break;
    case 'ask_continue_options':
      enterAskContinueOptions(s, scene);
      break;
    case 'well_continue':
      enterWellContinue(s, scene);
      break;
    case 'well_continue2':
      enterWellContinue2(s, scene);
      break;
    case 'tap_out':
      enterTapOut(s, scene);
      break;
    case 'stop_hurry1':
      enterStopHurry1(s, scene);
      break;
    case 'stop_hurry2':
      enterStopHurry2(s, scene);
      break;
    case 'fucked_out':
      enterFuckedOut(s, scene);
      break;
    case 'no_condom_end':
      enterNoCondomEnd(s, scene);
      break;
    case 'boy_sleep':
      enterBoySleep(s, scene);
      break;
    case 'his_wipes':
      enterHisWipes(s, scene);
      break;
    case 'wipe_menu':
      enterWipeMenu(s, scene);
      break;
    case 'wipe_hands':
      enterWipeHands(s, scene);
      break;
    case 'wipe_face':
      enterWipeFace(s, scene);
      break;
    case 'wipe_tits':
      enterWipeTits(s, scene);
      break;
    case 'wipe_stomach':
      enterWipeStomach(s, scene);
      break;
    case 'wipe_butt':
      enterWipeButt(s, scene);
      break;
    case 'wipe_pussy':
      enterWipePussy(s, scene);
      break;
    case 'finish_sex':
      enterFinishSex(s, scene);
      break;
    case 'no_cum_end':
      enterNoCumEnd(s, scene);
      break;
    case 'bad_sex_end':
      enterBadSexEnd(s, scene);
      break;
    case 'black_out':
      enterBlackOut(s, scene);
      break;
    case 'black_out_wake':
      enterBlackOutWake(s, scene);
      break;
    case 'black_out_wake_options':
      enterBlackOutWakeOptions(s, scene);
      break;
    case 'black_out_wake2':
      enterBlackOutWake2(s, scene);
      break;
    case 'black_out_end':
      enterBlackOutEnd(s, scene);
      break;
    case 'cum_clean':
      enterCumClean(s, scene);
      break;
    case 'facial_mouth_clean':
      enterFacialMouthClean(s, scene);
      break;
    case 'after_sex1':
      enterAfterSex1(s, scene);
      break;
    case 'post_cigarette_boy':
      enterPostCigaretteBoy(s, scene);
      break;
    case 'pull_apart':
      enterPullApart(s, scene);
      break;
    case 'after_sex2_w_picture':
      enterAfterSex2WPicture(s, scene);
      break;
    case 'lover_room_desc':
      enterLoverRoomDesc(s, scene);
      break;
    case 'after_sex2':
      enterAfterSex2(s, scene);
      break;
    case 'after_sex_dressed':
      enterAfterSexDressed(s, scene);
      break;
    case 'bathroom_after':
      enterBathroomAfter(s, scene);
      break;
    case 'post_sex_pee1':
      enterPostSexPee1(s, scene);
      break;
    case 'post_sex_pee2':
      enterPostSexPee2(s, scene);
      break;
    case 'post_sex_pee3':
      enterPostSexPee3(s, scene);
      break;
    case 'relax_together':
      enterRelaxTogether(s, scene);
      break;
    case 'cock_clean':
      enterCockClean(s, scene);
      break;
    case 'kiss':
      enterKiss(s, scene);
      break;
    case 'drink_fluid':
      enterDrinkFluid(s, scene);
      break;
    case 'drink_fluid2':
      enterDrinkFluid2(s, scene);
      break;
    case 'drink_water1':
      enterDrinkWater1(s, scene);
      break;
    case 'drink_water2':
      enterDrinkWater2(s, scene);
      break;
    case 'drink_vodka1':
      enterDrinkVodka1(s, scene);
      break;
    case 'drink_vodka2':
      enterDrinkVodka2(s, scene);
      break;
    case 'drink_vodka_effect':
      enterDrinkVodkaEffect(s, scene);
      break;
    case 'plan_b':
      enterPlanB(s, scene);
      break;
    case 'plan_b_take':
      enterPlanBTake(s, scene);
      break;
    case 'plan_b2':
      enterPlanB2(s, scene);
      break;
    case 'plan_b3':
      enterPlanB3(s, scene);
      break;
    case 'birth_control_pill_take':
      enterBirthControlPillTake(s, scene);
      break;
    case 'birth_control_pill_take2':
      enterBirthControlPillTake2(s, scene);
      break;
    case 'smoke_link':
      enterSmokeLink(s, scene);
      break;
    case 'smoke_ciga1':
      enterSmokeCiga1(s, scene);
      break;
    case 'smoke_ciga2':
      enterSmokeCiga2(s, scene);
      break;
    case 'smoke_ciga_bum':
      enterSmokeCigaBum(s, scene);
      break;
    case 'smoke_ciga_act':
      enterSmokeCigaAct(s, scene);
      break;
    case 'smoke_phone':
      enterSmokePhone(s, scene);
      break;
    case 'smoke_ciga_react':
      enterSmokeCigaReact(s, scene);
      break;
    case 'boy_smoking':
      enterBoySmoking(s, scene);
      break;
    case 'spend_night_ask':
      enterSpendNightAsk(s, scene);
      break;
    case 'spend_night':
      enterSpendNight(s, scene);
      break;
    case 'cuddle_up':
      enterCuddleUp(s, scene);
      break;
    case 'cuddle_up2':
      enterCuddleUp2(s, scene);
      break;
    case 'bed':
      enterBed(s, scene);
      break;
    case 'sore_pussy_msg':
      enterSorePussyMsg(s, scene);
      break;
    case 'sleep':
      enterSleep(s, scene);
      break;
    case 'sleep_function':
      enterSleepFunction(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_after: LocationDef = {
  name: 'sex_ev_after',
  title: 'Both of you lay back in bed, slightly frustrated with each o',
  region: 'other',
  enter: enter,
};
