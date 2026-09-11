import { qspCall } from '../_shared/qspBridge';

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
    if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      scene.actions([
        { label: 'We\'re through (break up)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['break_up'] = 1;
    scene.text('"We\'re through," you sneer. The moment you\'re fully dressed, you stalk out the door, shouting over your shoulder, "Don\'t fucking call me again!"');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Slam the door', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: The moment you're fully dressed, you stalk out the door, giving <<$npcdesc>> the...
    scene.text(`The moment you're fully dressed, you stalk out the door, giving ${((s as any).npcdesc ?? 0)} the finger as you slam it behind you.`);
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Give him the finger', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: The moment you're fully dressed, you stalk out the door, giving <<$npcdesc>> the...
    scene.text(`The moment you're fully dressed, you stalk out the door, giving ${((s as any).npcdesc ?? 0)} the finger as you slam it behind you.`);
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kick <<$npcdesc>> out', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "You know what, <<$npcdesc>>? <i>Fuck you!</i>" You shove <<$npcdesc>> out of yo...
    scene.text(`"You know what, ${((s as any).npcdesc ?? 0)}? <i>Fuck you!</i>" You shove ${((s as any).npcdesc ?? 0)} out of your bed. "Get the fuck out! We're done here!"`);
    scene.text('You glare daggers at him as he gets dressed. The moment he\'s done, you practically shove him out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterQuit2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['annoyed'] = 1;
  scene.text('Both of you lay back in bed, slightly frustrated with each other to the point that the mood is demonstrably ruined, but neither willing to concede.');
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from the pockets of his discarded clothing and...
      scene.text(`${((s as any).npcdesc ?? 0)} grabs his cigarettes from the pockets of his discarded clothing and lights up, puffing away at it in annoyance.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from his nightstand and lights up, puffing awa...
        scene.text(`${((s as any).npcdesc ?? 0)} grabs his cigarettes from his nightstand and lights up, puffing away at it in annoyance.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from the nightstand and lights up, puffing awa...
        scene.text(`${((s as any).npcdesc ?? 0)} grabs his cigarettes from the nightstand and lights up, puffing away at it in annoyance.`);
      }
    }
  }
  qspCall(s, 'sex_ev_after', 'after_sex2');
  scene.build();
}

function enterStopHere(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Ask to stop', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] > 0) {
      scene.actions([
        { label: 'Confirm', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Satisfied?" you ask sleepily.');
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['blowjob_continue_ask'] === 1) {
        scene.actions([
          { label: 'Confirm', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"There, happy now?" you ask, playing with his cock.');
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Confirm', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_after', 'stop_here_menu');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    qspCall(s, 'sex_ev_sex', 'inserted_img');
    // TODO-QSP: dynamic text: "<i>Now</i> I'm done," you grin, having squeezed every orgasm you could out of <...
    scene.text(`"<i>Now</i> I'm done," you grin, having squeezed every orgasm you could out of ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_after', 'finish_sex');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'You good to stop here?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] > 0) {
      qspCall(s, 'sex_ev_sex', 'inserted_img');
      scene.text('"Is that good enough for you now?" you ask.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['first_break'] === 1) {
        scene.text('"Actually," you say. "I\'m happy if we just to finish here. How about you?"');
      } else {
        qspCall(s, 'sex_ev_sex', 'inserted_img');
        scene.text('"I think I\'m good here," you say. "How about you?"');
      }
    }
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
      { label: 'I\'m shattered', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'inserted_img');
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] === 1) {
      scene.text('"Can we... stop here...?" you pant tiredly. "That last orgasm really took it out of me. I\'m shattered..."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
        scene.text('"Can we... stop here...?" you pant tiredly. "You made me come so many times in a row... I\'m shattered..."');
      } else {
        scene.text('"Can we... stop here...?" you pant tiredly. "I\'m absolutely shattered..."');
      }
    }
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
    scene.actions([
      { label: 'Should get back to the party', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['back_to_party'] = 1;
    qspCall(s, 'sex_ev_sex', 'inserted_img');
    scene.text('"Good to stop here?" you ask. "We should probably get back to the party soon."');
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Need to get going', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'inserted_img');
    scene.text('"You mind if we stop here?" you ask. "I need to get going soon."');
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
    ]);
  }
  qspCall(s, 'sex_ev_pillow_talk2', 'wakeup_sex_late_for_school');
  scene.build();
}

function enterStopHere2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['finish_ask'] = 1;
  if ((((s as any).totminut ?? 0) > ((s as any).sex_ev ?? 0)?.['start_time'] + 60  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    qspCall(s, 'sex_ev_after', 'finish_sex');
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
      if (((s as any).sex_ev ?? 0)?.['back_to_party'] === 0) {
        scene.text('"Yeah," he nods. "We should probably get back to the party soon."');
      } else {
        scene.text('"Yeah," he nods. "Probably should."');
      }
      qspCall(s, 'sex_ev_after', 'finish_sex');
    } else {
      if ((Math.floor(Math.random() * 10) + 1) >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['blowjob_continue_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5) {
        if (((s as any).sex_ev ?? 0)?.['npc_late_work'] === 1) {
          qspCall(s, 'sex_ev_after', 'finish_sex');
        } else {
          if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] > 0  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            qspCall(s, 'sex_ev_after', 'finish_sex');
          } else {
            if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] > 0) {
              // TODO-QSP: dynamic text: "Just a couple more times?" <<$npcdesc>> begs. "I still want to get off a few mo...
              scene.text(`"Just a couple more times?" ${((s as any).npcdesc ?? 0)} begs. "I still want to get off a few more times with you."`);
              qspCall(s, 'sex_ev_after', 'ask_continue_options');
            } else {
              if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  (Math.floor(Math.random() * 3) + 1))) {
                // TODO-QSP: dynamic text: "You're done already?" <<$npcdesc>> complains. "I still want to get off a few mo...
                scene.text(`"You're done already?" ${((s as any).npcdesc ?? 0)} complains. "I still want to get off a few more times with you."`);
                qspCall(s, 'sex_ev_after', 'ask_continue_options');
                ((s as any).sex_ev ?? {})['ask_to_cum_once'] = 1;
                if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
                  // TODO-QSP: dynamic text: "Can I just come real quick?" <<$npcdesc>> asks. "I'm really close."
                  scene.text(`"Can I just come real quick?" ${((s as any).npcdesc ?? 0)} asks. "I'm really close."`);
                } else {
                  // TODO-QSP: end}
                }
                // TODO-QSP: dynamic text: "Are you sure?" <<$npcdesc>> asks. "You haven't gotten to come yet."
                scene.text(`"Are you sure?" ${((s as any).npcdesc ?? 0)} asks. "You haven't gotten to come yet."`);
                qspCall(s, 'sex_ev_after', 'ask_continue_options');
              } else {
                if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
                  // TODO-QSP: dynamic text: "I was actually hoping to go a few more times. But if you want to stop, that's a...
                  scene.text(`"I was actually hoping to go a few more times. But if you want to stop, that's all right." ${((s as any).npcdesc ?? 0)} gives you a gentle smile.`);
                  qspCall(s, 'sex_ev_after', 'ask_continue_options');
                }
              }
            }
          }
        }
      } else {
        qspCall(s, 'sex_ev_after', 'finish_sex');
      }
    }
  }
  scene.build();
}

function enterAskContinueOptions(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_after', 'well_continue');
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (((s as any).hour ?? 0) >= 22  ||  ((s as any).hour ?? 0) < 3)  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Mom will kill me', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['mom_kill'] = (((s as any).sex_ev ?? {})['mom_kill'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['blue_ball'] = 1;
    if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] >= 1) {
      if (((s as any).hour ?? 0) < 3) {
        // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>," you say. "I can't. My mom is already going to kill me ...
        scene.text(`"Seriously ${((s as any).npcdesc ?? 0)}," you say. "I can't. My mom is already going to kill me for staying out past curfew."`);
      } else {
        // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>," you say. "I can't. I need to get home soon or my mom w...
        scene.text(`"Seriously ${((s as any).npcdesc ?? 0)}," you say. "I can't. I need to get home soon or my mom will kill me."`);
      }
    } else {
      // TODO-QSP: dynamic text: "I wish I could, but I need to get home <<$npcdesc>>," you shake your head. "My ...
      scene.text(`"I wish I could, but I need to get home ${((s as any).npcdesc ?? 0)}," you shake your head. "My mom will kill me if I'm not back before midnight."`);
    }
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Well, I guess there\'s always next time," he says softly.');
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - 5) {
        scene.text('"Come on, please? Just a couple more times?"');
        qspCall(s, 'sex_ev_after', 'after_sex1');
        qspCall(s, 'sex_ev_after', 'well_continue');
      } else {
        ((s as any).sex_ev ?? {})['blue_ball'] = 1;
        // TODO-QSP: dynamic text: "Your mom's a bitch, you know that?" <<$npcdesc>> grumbles, pulling away.
        scene.text(`"Your mom's a bitch, you know that?" ${((s as any).npcdesc ?? 0)} grumbles, pulling away.`);
        scene.actions([
          { label: 'Tell me about it', handler: (st: GameState) => {
    scene.text('"Tell me about it," you roll your eyes. "At least you don\'t have to live with her."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
          { label: 'Don\'t talk about my mom like that', handler: (st: GameState) => {
    scene.text('"Hey!" you growl. "Don\'t talk about my mom like that!"');
    scene.text('"But she-"');
    scene.text('"She\'s still my mom, asshole!"');
    qspCall(s, 'sex_ev_after', 'after_sex1');
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
    ((s as any).sex_ev ?? {})['sore_pussy'] = 1;
    ((s as any).sex_ev ?? {})['blue_ball'] = 1;
    scene.text('"My pussy is so sore," you say, rubbing his arm, feeling genuinely apologetic. "You\'re gonna fuck me to death if we keep going."');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> smiles apologetically at you.
      scene.text(`${((s as any).npcdesc ?? 0)} smiles apologetically at you.`);
      scene.text('"Oh. Sorry about that..."');
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - 5) {
        scene.text('"Come on, please? Just a couple more times?"');
        qspCall(s, 'sex_ev_after', 'after_sex1');
        qspCall(s, 'sex_ev_after', 'well_continue');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> seems really disappointed, almost upset.
        scene.text(`${((s as any).npcdesc ?? 0)} seems really disappointed, almost upset.`);
        qspCall(s, 'sex_ev_after', 'after_sex1');
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'I can\'t keep going', handler: (st: GameState) => {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
      } else {
        // TODO-QSP: dynamic text: "I'm sorry <<$npcdesc>>," you say, rubbing his arm, genuinely apologetic. "But I...
        scene.text(`"I'm sorry ${((s as any).npcdesc ?? 0)}," you say, rubbing his arm, genuinely apologetic. "But I just can't keep up with your sex drive. I'm all tapped out. Maybe next time?"`);
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> smiles wistfully at you but also doesn't seem very put off.
      scene.text(`${((s as any).npcdesc ?? 0)} smiles wistfully at you but also doesn't seem very put off.`);
      scene.text('"I guess it\'s fine..."');
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      // TODO-QSP: dynamic text: "I'm sorry <<$npcdesc>>," you say, rubbing his arm, genuinely apologetic. "But I...
      scene.text(`"I'm sorry ${((s as any).npcdesc ?? 0)}," you say, rubbing his arm, genuinely apologetic. "But I just can't keep up with your sex drive. I'm all tapped out. Maybe next time?"`);
      if (((s as any).sex_ev ?? 0)?.['cum_count'] < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - 5) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Come on, please? Just one more time?"');
          scene.actions([
            { label: 'Not happening', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['blue_ball'] = 1;
    scene.text('"Sorry," you shake your head. "But I just can\'t."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
          ]);
        } else {
          scene.text('"Can I at least get a blowjob?"');
          ((s as any).sex_ev ?? {})['blowjob_continue_ask'] = 1;
          qspCall(s, 'sex_ev_foreplay', 'bj_ask2');
          scene.actions([
            { label: 'Not happening', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['blue_ball'] = 1;
    scene.text('"Sorry," you shake your head. "But I just can\'t."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
          ]);
        }
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> seems really disappointed, almost upset.
        scene.text(`${((s as any).npcdesc ?? 0)} seems really disappointed, almost upset.`);
        ((s as any).sex_ev ?? {})['blue_ball'] = 1;
        qspCall(s, 'sex_ev_after', 'after_sex1');
      }
    }
  } },
    { label: 'I don\'t have time', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_time'] = (((s as any).sex_ev ?? {})['no_time'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] >= 1) {
      // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>," you say. "I can't. You're gonna make me late."
      scene.text(`"Seriously ${((s as any).npcdesc ?? 0)}," you say. "I can't. You're gonna make me late."`);
    } else {
      // TODO-QSP: dynamic text: "I wish I could, but I don't have time <<$npcdesc>>," you shake your head. "I re...
      scene.text(`"I wish I could, but I don't have time ${((s as any).npcdesc ?? 0)}," you shake your head. "I really need to get going soon."`);
    }
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Well, I don\'t want to make you late," he says softly.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - 5) {
        scene.text('"Come on, please? Just a couple more times?"');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> seems really disappointed, almost upset.
        scene.text(`${((s as any).npcdesc ?? 0)} seems really disappointed, almost upset.`);
      }
    }
    qspCall(s, 'sex_ev_after', 'after_sex1');
    qspCall(s, 'sex_ev_after', 'well_continue');
  } },
  ]);
  scene.build();
}

function enterWellContinue(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Well...', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['blue_ball'] = 0;
    if (((s as any).sex_ev ?? 0)?.['ask_to_cum_once'] === 1) {
      scene.actions([
        { label: 'Let him finish', handler: (st: GameState) => {
    scene.text('"Okay," you say softly.');
    ((s as any).sex_ev ?? {})['keep_going_continue'] = (((s as any).sex_ev ?? {})['keep_going_continue'] ?? 0) + (1);
    qspCall(s, 'sex_ev_after', 'well_continue2');
  } },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_time'] === 0) {
        scene.actions([
          { label: 'I can be late', handler: (st: GameState) => {
    scene.text('"Well... Maybe I could be a <i>little</i> late..." you say with a soft smile.');
    qspCall(s, 'sex_ev_after', 'well_continue2');
  } },
        ]);
      }
      scene.actions([
        { label: 'Acquiesce', handler: (st: GameState) => {
    scene.text('"Well..." You don\'t really want to keep going but you can\'t bring yourself to say no. With a sigh, you let him pull you back into position.');
    ((s as any).sex_ev ?? {})['keep_going_continue'] = (((s as any).sex_ev ?? {})['keep_going_continue'] ?? 0) + (1);
    qspCall(s, 'sex_ev_after', 'well_continue2');
  } },
        { label: 'We can\'t have that', handler: (st: GameState) => {
    scene.text('"Well, we can\'t have you going unsatisfied now can we?" you say with a teasing smile.');
    ((s as any).sex_ev ?? {})['keep_going_continue'] = (((s as any).sex_ev ?? {})['keep_going_continue'] ?? 0) + (1);
    qspCall(s, 'sex_ev_after', 'well_continue2');
  } },
        { label: 'I have a <i>little</i> more time', handler: (st: GameState) => {
    scene.text('"Well... I guess I might be able to keep going a <i>little</i> longer," you say with a soft smile.');
    qspCall(s, 'sex_ev_after', 'well_continue2');
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterWellContinue2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['keep_going_continue'] = (((s as any).sex_ev ?? {})['keep_going_continue'] ?? 0) + (1);
  qspCall(s, 'sex_ev_sex', 'reset');
  qspCall(s, 'sex_ev_sex', 'keep_fucking_act');
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'he_choose_position');
  } },
    { label: 'Foreplay', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
  } },
    { label: 'Sex', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
      qspCall(s, 'sex_ev_condoms', 'condoms');
    } else {
      qspCall(s, 'sex_ev_sex', 'position_choose');
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
    qspCall(s, 'pain', '', 4, 'cervix', 'ache');
    qspCall(s, 'pain', '', 4, 'vaginal', 'stretch');
    ((s as any).sex_ev ?? {})['tap_out'] = 1;
    ((s as any).sex_ev ?? {})['sore_pussy'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.text('"I can\'t keep this up..." you pant breathlessly. "You\'re just too big for me... I can\'t keep going..."');
    } else {
      // TODO-QSP: dynamic text: "I can't keep this up..." you pant, wincing at the pain of <<$npcdesc>>'s large ...
      scene.text(`"I can't keep this up..." you pant, wincing at the pain of ${((s as any).npcdesc ?? 0)}'s large cock stretching your pussy past its limits. "You're too big for me... I just... I can't keep going..."`);
    }
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Come on, don't be like that," <<$npcdesc>> moans. "You just need to get used to...
      scene.text(`"Come on, don't be like that," ${((s as any).npcdesc ?? 0)} moans. "You just need to get used to it. Don't pussy out now."`);
      scene.actions([
        { label: 'I can\'t', handler: (st: GameState) => {
    ((s as any).npc_dick_too_big ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I just can\'t," you shake your head, legs tightening over your sore lady bits. "My pussy hurts so much, I can\'t handle your cock inside me again."');
    // TODO-QSP: dynamic text: "Ugh," <<$npcdesc>> says rolling his eyes. "Way to be a little bitch about it. N...
    scene.text(`"Ugh," ${((s as any).npcdesc ?? 0)} says rolling his eyes. "Way to be a little bitch about it. Never going to learn to enjoy my big cock unless you practice."`);
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
        { label: 'Force yourself to keep going', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['tap_out'] = 2;
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      scene.text('"I can\'t believe I\'m letting you talk me into this..." you grimace, rubbing your thighs together over your sore pussy. "Okay, keep going..."');
    } else {
      // TODO-QSP: dynamic text: "I can't believe I'm letting you talk me into this..." you grimace, wincing agai...
      scene.text(`"I can't believe I'm letting you talk me into this..." you grimace, wincing again as you adjust your hips around ${((s as any).npcdesc ?? 0)}'s cock. "Okay, keep going..."`);
    }
    if (((s as any).sex_ev ?? 0)?.['boy_cum'] >= 1) {
      qspCall(s, 'sex_ev_sex', 'reset');
      ((s as any).sex_ev ?? {})['must_fuck'] = 1;
      qspCall(s, 'sex_ev_sex', 'position_choose');
      scene.actions([
        { label: 'Let him lead', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'he_choose_position');
  } },
      ]);
    } else {
      qspCall(s, 'sex_ev_sex', 'keep_fucking_act');
    }
  } },
        { label: 'Ask for a break', handler: (st: GameState) => {
    scene.text('"Can\'t we just do something else?" you beg. "Just for a little bit? Give my pussy a break?"');
    scene.text('"That doesn\'t sound so bad. What were you thinking?"');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).npc_dick_too_big ?? {})[String((s as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, looking truly apologetic. "I know it's not easy for ...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, looking truly apologetic. "I know it's not easy for girls to handle. We can try again another time."`);
        scene.actions([
          { label: 'Thanks', handler: (st: GameState) => {
    scene.text('"Thanks," you say, smiling gratefully at him. "Yeah... maybe another time..."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
          { label: 'Don\'t be sorry', handler: (st: GameState) => {
    scene.text('"Don\'t be sorry," you say, shaking your head. "It\'s not your fault you\'ve got such a big dick. Maybe it\'s my fault for having too small a pussy."');
    scene.text('You give him a little smile which he returns.');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
        ]);
      } else {
        ((s as any).npc_dick_too_big ?? {})[String((s as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "Damn, my dick's too big for you?" <<$npcdesc>> asks, smiling smugly when you re...
        scene.text(`"Damn, my dick's too big for you?" ${((s as any).npcdesc ?? 0)} asks, smiling smugly when you return an exhausted nod. "Just one of those big dick problems I guess. Okay we'll try again later."`);
        scene.text('He laughs aloud, not seeming to care much that your pussy is sore beyond belief.');
        scene.actions([
          { label: 'Finish sex', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'after_sex1');
  } },
        ]);
      }
      scene.actions([
        { label: 'Blow him for a little bit', handler: (st: GameState) => {
    scene.text('"I just need a little break," you smile gratefully. "Maybe I can blow you for a little bit and then come back to it?"');
    // TODO-QSP: dynamic text: "That sounds great," <<$npcdesc>> smiles back.
    scene.text(`"That sounds great," ${((s as any).npcdesc ?? 0)} smiles back.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        { label: 'We can do other stuff', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_sex'] = 1;
    scene.text('"We don\'t have to stop," you smile. "My pussy can\'t take your cock anymore, but we can still do other stuff."');
    // TODO-QSP: dynamic text: "Like what?" <<$npcdesc>> smiles back.
    scene.text(`"Like what?" ${((s as any).npcdesc ?? 0)} smiles back.`);
    if (((s as any).sex_ev ?? 0)?.['boy_cum'] >= 1) {
      qspCall(s, 'sex_ev_sex', 'reset');
    }
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterStopHurry1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== 'enjoy') {
  }
  scene.actions([
    { label: '"You good?"', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'inserted_img');
    // TODO-QSP: dynamic text: "You good?" you ask <<$npcdesc>>.
    scene.text(`"You good?" you ask ${((s as any).npcdesc ?? 0)}.`);
    if (((s as any).sex_ev ?? 0)?.['cum_count'] < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - (Math.floor(Math.random() * 3) + 1)  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5) {
      scene.text('"Good enough for now, I guess," he pants. "You gotta go, right?"');
      scene.text('"Yeah," you say wistfully. "Sorry. And thanks."');
    } else {
      scene.text('"Yeah, I\'m good," he sighs with satisfaction.');
    }
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'stop_hurry2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterStopHurry2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    qspCall(s, 'sex_ev_after', 'pull_apart');
  } else {
    // TODO-QSP: $sex_ev['bed_room']
  }
  qspCall(s, 'sex_ev_after', 'after_sex2');
  scene.build();
}

function enterFuckedOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['fucked_out'] = (((s as any).sex_ev ?? {})['fucked_out'] ?? 0) + (1);
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).sex_ev ?? 0)?.['fucked_out'] > 1) {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "I really can't... keep going... <<$npcdesc>> huffs exhaustedly.
    scene.text(`"I really can't... keep going... ${((s as any).npcdesc ?? 0)} huffs exhaustedly.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_again'] === 1) {
      // TODO-QSP: dynamic text: "Wanna keep going?" you eagerly ask <<$npcdesc>>.
      scene.text(`"Wanna keep going?" you eagerly ask ${((s as any).npcdesc ?? 0)}.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        // TODO-QSP: dynamic text: "Wanna keep going?" you eagerly ask, flexing your pussy around <<$npcdesc>>'s co...
        scene.text(`"Wanna keep going?" you eagerly ask, flexing your pussy around ${((s as any).npcdesc ?? 0)}'s cock.`);
      } else {
        // TODO-QSP: dynamic text: "Wanna keep going?" you eagerly ask <<$npcdesc>>.
        scene.text(`"Wanna keep going?" you eagerly ask ${((s as any).npcdesc ?? 0)}.`);
      }
    }
    scene.text('"I don\'t think I can..." he groans.');
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: dynamic text: You look down and see <<$npcdesc>>'s cock already going limp, rapidly deflating ...
      scene.text(`You look down and see ${((s as any).npcdesc ?? 0)}'s cock already going limp, rapidly deflating right before your eyes.`);
    } else {
      // TODO-QSP: dynamic text: You realize with a start that <<$npcdesc>> is getting <i>softer</i>, not harder,...
      scene.text(`You realize with a start that ${((s as any).npcdesc ?? 0)} is getting <i>softer</i>, not harder, inside you.`);
    }
    scene.text('"I think I might be all fucked out for the day..."');
  }
  if (((s as any).sex_ev ?? 0)?.['force_harden'] === 0) {
    scene.actions([
      { label: 'No you\'re not', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['force_harden'] = 1;
    ((s as any).sex_ev ?? {})['not_done'] = 1;
    ((s as any).sex_ev ?? {})['extra_cum'] = (((s as any).sex_ev ?? {})['extra_cum'] ?? 0) + (1);
    qspCall(s, 'sex_ev_sex', 'harden_hand');
    qspCall(s, 'sex_ev_sex', 'harden_mouth');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['cum_count'] < 3) {
    scene.actions([
      { label: '"Seriously?"', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] < 1) {
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('"Seriously?" you scoff. "You\'re already done? I didn\'t even get to come!"');
    } else {
      scene.text('"Seriously?" you scoff. "You\'re already done?"');
    }
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  }
  scene.actions([
    { label: 'Ugh', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['end_comment'] = '"Ugh..." you groan with a roll of your eyes.';
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: $sex_ev['bed_room']
      // TODO-QSP: $sex_ev['end_comment']
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_after', 'pull_apart');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    }
  } },
    { label: 'Sigh', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['end_comment'] = 'You sigh in disappointment.';
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: $sex_ev['bed_room']
      // TODO-QSP: $sex_ev['end_comment']
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_after', 'pull_apart');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    }
  } },
    { label: 'Laugh', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((s as any).sex_ev ?? {})['end_comment'] = '"Oops," you giggle. "Guess I fucked you too hard."';
    } else {
      ((s as any).sex_ev ?? {})['end_comment'] = '"Oops," you giggle. "Guess that\'s my fault."';
    }
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      // TODO-QSP: $sex_ev['bed_room']
      // TODO-QSP: $sex_ev['end_comment']
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_after', 'pull_apart');
      qspCall(s, 'sex_ev_after', 'after_sex2');
    }
  } },
  ]);
  scene.build();
}

function enterNoCondomEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'End here?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('"I guess we shouldn\'t fuck today..."');
    } else {
      scene.text('"I guess that\'s a sign we should stop..."');
    }
    if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
        // TODO-QSP: dynamic text: "I think I'm all fucked out anyways," <<$npcdesc>> sighs limply.
        scene.text(`"I think I'm all fucked out anyways," ${((s as any).npcdesc ?? 0)} sighs limply.`);
        qspCall(s, 'sex_ev_after', 'after_sex1');
      } else {
        if (((s as any).sex_ev ?? 0)?.['condoms_used'] < ((s as any).sex_ev ?? 0)?.['condom_count']) {
          // TODO-QSP: dynamic text: "I have a few," <<$npcdesc>> says, reaching for another one."
          scene.text(`"I have a few," ${((s as any).npcdesc ?? 0)} says, reaching for another one."`);
          qspCall(s, 'sex_ev_stats', 'npc_condom_stats');
          qspCall(s, 'sex_ev_sex', 'reset');
          scene.actions([
            { label: 'Let him lead', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'he_choose_position');
  } },
            { label: 'Sex', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'position_choose');
  } },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 1) {
            // TODO-QSP: dynamic text: "Well this was fucking bullshit," <<$npcdesc>> grumbles.
            scene.text(`"Well this was fucking bullshit," ${((s as any).npcdesc ?? 0)} grumbles.`);
            qspCall(s, 'sex_ev_after', 'after_sex1');
          } else {
            // TODO-QSP: dynamic text: "Yeah, I think so too," <<$npcdesc>> says.
            scene.text(`"Yeah, I think so too," ${((s as any).npcdesc ?? 0)} says.`);
            qspCall(s, 'sex_ev_after', 'after_sex1');
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: "I think I'm all fucked out anyways," <<$npcdesc>> sighs limply.
      scene.text(`"I think I'm all fucked out anyways," ${((s as any).npcdesc ?? 0)} sighs limply.`);
      qspCall(s, 'sex_ev_after', 'after_sex1');
    }
  } },
  ]);
  scene.build();
}

function enterBoySleep(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  ((s as any).sex_ev ?? {})['boy_asleep'] = 1;
  if (((s as any).locArgs?.[1] ?? 0) === 'talking') {
    scene.text('"Hey, do you-"');
    // TODO-QSP: dynamic text: You turn to face <<$npc_usedname[$npcID]>> as you start talking and realize he i...
    scene.text(`You turn to face ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} as you start talking and realize he isn't listening. His eyes are closed, his breathing soft and relaxed. He fell asleep...`);
  } else {
    // TODO-QSP: dynamic text: It's been a while since <<$npc_usedname[$npcID]>> has moved and glancing at him,...
    scene.text(`It's been a while since ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} has moved and glancing at him, you see his eyes are closed, his breathing soft and relaxed. He's fallen asleep...`);
  }
  qspCall(s, 'sex_ev_after', 'after_sex2');
  scene.build();
}

function enterHisWipes(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cum_msg ?? 0) !== ''  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      (s as any).cumspclnt = 18;
    } else {
      (s as any).cumspclnt = 1;
    }
    if (((s as any).cum_loc ?? 0)?.['face'] > 0  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
      scene.img('images/shared/sex/cum/facial/facial36.jpg');
      if (((s as any).sex_ev ?? 0)?.['wipes'] === 2) {
        scene.text('"Hey, got anything I can use to clean up?" you trying not to smile under the spunk covering your face.');
        // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
        scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
      } else {
        scene.text('You reach up and poke at the sperm coating your face. Ew. You really need to clean that up before you do anything else. Reaching down to your purse, you pull some wipes out of your purse.');
      }
      if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
        // TODO-QSP: dynamic text: You carefully wipe the cum from your face, making sure to get every last drop, i...
        scene.text(`You carefully wipe the cum from your face, making sure to get every last drop, including getting the tangled web that ${((s as any).npcdesc ?? 0)} managed to get in your hair. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.`);
      } else {
        scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
      }
    } else {
      if (((s as any).cum_loc ?? 0)?.['stomach'] > 0  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'stomach') {
        scene.img('images/shared/sex/cum/stomach/bellycum3.jpg');
        if (((s as any).sex_ev ?? 0)?.['wipes'] === 2) {
          scene.text('"Hey, got anything I can use to clean up?" you ask, looking at your belly, cum still spattered over it.');
          // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
          scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
        } else {
          scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse.');
        }
      } else {
        if (((s as any).cum_loc ?? 0)?.['butt'] > 0  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'ass'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'back') {
          scene.img('images/shared/sex/cum/back1.jpg');
          if (((s as any).sex_ev ?? 0)?.['wipes'] === 2) {
            scene.text('"Hey, got anything I can use to clean up?" you ask, looking over your shoulder and wiggling your ass to emphasize the cum resting on it.');
            // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
            scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work awkwardly trying to wipe your ass and up your back.`);
          } else {
            scene.text('You really need to clean yourself after up after that. Reaching down to your purse, you pull some wipes out of your purse, awkwardly wiping your ass and back with it.');
          }
        } else {
          if (((s as any).cum_loc ?? 0)?.['vagina']  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
            if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
              // TODO-QSP: $sex_ev['bed_room']
              if (((s as any).sex_ev ?? 0)?.['wipes'] === 1) {
                scene.text('You reach down to your purse and pull out your bag of wipes before you stop, suddenly confused.');
                scene.text('<i>Why did I get out my wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you wanted to do with the,.');
                scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, oblivious to the liquid dribbling down the inside of your thigh.');
              } else {
                if (((s as any).sex_ev ?? 0)?.['wipes'] === 2) {
                  // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
                  scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((s as any).npcdesc ?? 0)} looks at you quizically.`);
                  scene.text('"Did you need something?"');
                  scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
                  scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, oblivious to the liquid dribbling down the inside of your thigh.');
                }
              }
            } else {
              if (((s as any).sex_ev ?? 0)?.['wipes'] === 2) {
                scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
                scene.text('"Hey, got anything I can use to clean up?" you say, holding your fingers over your pussy, trying to keep the cum from spilling out any further.');
                // TODO-QSP: dynamic text: "Oh yeah, right here." <<$npcdesc>> reaches over to his nightstand, pulling a pa...
                scene.text(`"Oh yeah, right here." ${((s as any).npcdesc ?? 0)} reaches over to his nightstand, pulling a packet of tissues and tossing them over to you. Gratefully accepting them, you pull out a handful and get to work cleaning yourself up.`);
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
    if (((s as any).cumloc ?? 0)[13] > 0) {
      scene.text('Once you\'re satisfied that the rest of your body is clean, you wipe your hands off and toss the wipes into the trash.');
    }
    ((s as any).sex_ev ?? {})['wipes'] = 0;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspCall(s, 'sex_ev_after', 'after_sex2');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  }
  scene.build();
}

function enterWipeMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_after', 'wipe_hands');
  qspCall(s, 'sex_ev_after', 'wipe_face');
  qspCall(s, 'sex_ev_after', 'wipe_tits');
  qspCall(s, 'sex_ev_after', 'wipe_pussy');
  scene.actions([
    { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'after_sex2_w_picture'] }]);
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
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
    (s as any).cumspclnt = 13;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.text('You grab some tissues and clean your hands off, wiping the cum from every finger.');
    qspCall(s, 'sex_ev_after', 'wipe_menu');
  } },
    ]);
  }
  scene.build();
}

function enterWipeFace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
    scene.actions([
      { label: 'Wipe your face', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/clean_mouth.mp4');
    (s as any).cumspclnt = 11;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.text('You carefully wipe the cum from your face, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least nobody is going to give you funny looks walking down the street.');
    qspCall(s, 'sex_ev_after', 'wipe_menu');
  } },
    ]);
  }
  scene.build();
}

function enterWipeTits(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
    scene.actions([
      { label: 'Wipe your tits', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (s as any).cumspclnt = 16;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.text('You grab some tissues and clean up, wiping the cum from your tits.');
    qspCall(s, 'sex_ev_after', 'wipe_menu');
  } },
    ]);
  }
  scene.build();
}

function enterWipeStomach(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['stomach'] > 0) {
    scene.actions([
      { label: 'Wipe your belly', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (s as any).cumspclnt = 14;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.text('You carefully wipe across your stomach, making sure to get every last drop. About a minute later, you can still feel a faintly sticky layer over the top of your skin, but at least it won\'t be staining the inside of your top.');
    qspCall(s, 'sex_ev_after', 'wipe_menu');
  } },
    ]);
  }
  scene.build();
}

function enterWipeButt(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['butt'] > 0) {
    scene.actions([
      { label: 'Wipe your butt', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    (s as any).cumspclnt = 4;
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    scene.text('You grab some tissues and clean up, awkwardly wiping your ass and back with it.');
    qspCall(s, 'sex_ev_after', 'wipe_menu');
  } },
    ]);
  }
  scene.build();
}

function enterWipePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    scene.actions([
      { label: 'Wipe your pussy', handler: (st: GameState) => {
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] > 0) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).sex_ev ?? 0)?.['wipes'] === 1) {
        scene.text('You pull out your bag of wipes before you stop, suddenly confused.');
        scene.text('<i>Why did I get out these wipes?</i> you think to yourself. You frown at the packet, befuddled as to what you wanted to do with the,.');
        scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself as you put it back into your purse, completely ignoring the liquid dribbling down your thigh.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['wipes'] === 2) {
          // TODO-QSP: dynamic text: "Hey, do you-" you start and then suddenly lose track of what you were trying to...
          scene.text(`"Hey, do you-" you start and then suddenly lose track of what you were trying to say. You frown to yourself as ${((s as any).npcdesc ?? 0)} looks at you quizzically.`);
          scene.text('"Did you need something?"');
          scene.text('"I uhh..." Your frown deepens. "I wanted to ask you something... but I forgot what it was... I guess it doesn\'t really matter..."');
          scene.text('<i>Meh. If it\'s important, it will come back to me later,</i> you think to yourself, completely ignoring the liquid dribbling down your thigh.');
        }
      }
    } else {
      scene.img('images/shared/sex/cum/clean_pussy.mp4');
      (s as any).cumspclnt = 16;
      qspCall(s, 'cum_cleanup', '');
      qspCall(s, 'stat', '');
      scene.text('You grab some tissues and carefully wipe up the side of your thighs, cleaning your legs of any remaining bodily fluids before giving your pussy a thorough wipe to soak up the cum still leaking from it.');
      scene.text('It takes a few tries, more cum seemingly coming out with every next wipe, but eventually you feel like you got most of it out. At least enough that nothing is going to be running down your legs any time soon.');
    }
    qspCall(s, 'sex_ev_after', 'wipe_menu');
  } },
    ]);
  }
  scene.build();
}

function enterFinishSex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fucked_out'] > 0) {
    qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'fucked_dry');
    scene.text('He just lays there, panting and wheezing in exhaustion.');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } else {
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fake_orgasm_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck'] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 0) === 1)) {
      qspCall(s, 'sex_ev_after', 'no_cum_end');
    } else {
      if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] === 0) {
          qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'unhappy');
          scene.text('"Sorry," you say only a little apologetically. "I really can\'t keep going. I just can\'t."');
          // TODO-QSP: dynamic text: "This is bullshit..." <<$npcdesc>> grumbles.
          scene.text(`"This is bullshit..." ${((s as any).npcdesc ?? 0)} grumbles.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_count'] === 1) {
            qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'unsatisfied');
            scene.text('"Sorry," you say only a little apologetically. "I really can\'t keep going. I just can\'t."');
            // TODO-QSP: dynamic text: "I we barely even got started..." <<$npcdesc>> grumbles.
            scene.text(`"I we barely even got started..." ${((s as any).npcdesc ?? 0)} grumbles.`);
          } else {
            qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'okay');
            // TODO-QSP: dynamic text: "I could go a few more times, but I guess this is good enough for now," <<$npcde...
            scene.text(`"I could go a few more times, but I guess this is good enough for now," ${((s as any).npcdesc ?? 0)} says.`);
          }
        }
        qspCall(s, 'sex_ev_after', 'after_sex1');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
          qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'great');
          // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> pants. "I'm totally tapped out."
          scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} pants. "I'm totally tapped out."`);
        } else {
          qspCall(s, 'sex_ev_stats', 'sex_end_stats', 'good');
          scene.text('"Yeah," he sighs. "I\'m good."');
        }
        qspCall(s, 'sex_ev_after', 'after_sex1');
      }
    }
  }
  scene.build();
}

function enterNoCumEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks, sitting up. "But we didn't fuck. You didn't even ge...
    scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} asks, sitting up. "But we didn't fuck. You didn't even get to come."`);
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
      scene.actions([
        { label: 'You know I\'m saving my virginity', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "Come on <<$npcdesc>>," you sigh. "You know I'm saving myself for marriage."
    scene.text(`"Come on ${((s as any).npcdesc ?? 0)}," you sigh. "You know I'm saving myself for marriage."`);
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'fuckbuddy') {
      scene.text('"And you still have a fuckbuddy."');
      scene.text('"Shut up," you roll your eyes.');
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
        scene.text('"I\'m your boyfriend. Doesn\'t that count for something?"');
        scene.text('"But you\'re not my husband," you reply. "Not unless you married me when I wasn\'t looking."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
          scene.text('"And you still hook up with random guys."');
          scene.text('"Shut up," you roll your eyes.');
        }
      }
    }
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
        scene.actions([
          { label: 'I\'m saving my virginity', handler: (st: GameState) => {
    ((s as any).know_virgin ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sorry," you smile apologetically. "I\'m saving myself for marriage."');
    scene.text('"Why?" he asks, confusedly.');
    if (((s as any).start_type ?? 0)?.['loc'] === 'sg') {
      scene.actions([
        { label: 'Ask my mom', handler: (st: GameState) => {
    scene.text('"I don\'t know," you say, rolling your eyes in exasperation. "Ask my mom why it\'s so important."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      ]);
    }
    scene.actions([
      { label: 'Because I want to', handler: (st: GameState) => {
    scene.text('"Because I want to?" you shrug. "I just think it would be nice to give my virginity to my future husband. Do I need a better reason?"');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'Because I want to (annoyed)', handler: (st: GameState) => {
    scene.text('"Because I want to," you scowl at him. "I have to explain what I want to do with <i>my</i> body?"');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Didn\'t feel like it today', handler: (st: GameState) => {
    scene.text('"Just didn\'t feel like doing anything else today," you shrug. "Wasn\'t in the mood."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'Just wanted to fool around', handler: (st: GameState) => {
    scene.text('"Just wanted to play with your cock for a while," you wink. "Don\'t worry that I didn\'t get off. I had fun." ');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks, sitting up. "But you didn't get to come."
    scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} asks, sitting up. "But you didn't get to come."`);
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.actions([
        { label: 'Loss of virginity is enough', handler: (st: GameState) => {
    scene.text('"You took my virginity today," you say. "I think that counts as enough for me."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      ]);
    }
    scene.actions([
      { label: 'It\'s okay', handler: (st: GameState) => {
    scene.text('"That\'s sweet of you," you say, smiling. "But don\'t worry about that. I\'m okay without it today."');
    scene.text('"You\'re sure?" he asks.');
    scene.text('"Yeah, I\'m sure," you laugh back.');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'I\'m in a rush', handler: (st: GameState) => {
    scene.text('"I\'m in a rush today. But don\'t worry, I still had fun," you say. "A girl doesn\'t need to come every time you know."');
    scene.text('"You really mean that?" he asks.');
    scene.text('"Let\'s just not make a habit of it, all right?" you laugh back.');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  }
  scene.build();
}

function enterBadSexEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'End here (bad end)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/annoyed1.jpg');
    scene.text('"Let\'s call it here," you say, letting your negative feelings get to you.');
    // TODO-QSP: dynamic text: "What, done already?" <<$npcdesc>> says, sitting up.
    scene.text(`"What, done already?" ${((s as any).npcdesc ?? 0)} says, sitting up.`);
    scene.actions([
      { label: 'Don\'t feel like it anymore', handler: (st: GameState) => {
    scene.text('"I don\'t feel like doing anything else," you say, feeling deflated and dejected, sinking further into the bed. "I\'m just... not in the mood anymore."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'You killed the mood', handler: (st: GameState) => {
    scene.text('"You killed the mood," you scowl at him.');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
      { label: 'You\'re an asshole', handler: (st: GameState) => {
    scene.text('"You know what you did," you scowl at him. "Asshole."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBlackOut(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['pass_out'] = 1;
  if (((s as any).sex_ev ?? 0)?.['cum_together'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/2.jpg');
      // TODO-QSP: dynamic text: Your simultaneous orgasm was too much to handle and your vision begins to blur. ...
      scene.text(`Your simultaneous orgasm was too much to handle and your vision begins to blur. At the back of your mind, you realize that your body is succumbing to exhaustion. The last thing you're aware of is ${((s as any).npcdesc ?? 0)}'s cock stuffed inside you, his cum filling your pussy to the brim, and then...`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
        // TODO-QSP: dynamic text: Your simultaneous orgasm was too much to handle and your knees give out undernea...
        scene.text(`Your simultaneous orgasm was too much to handle and your knees give out underneath you, collapsing onto the bed in exhaustion as your vision begins to blur and fade. The last thing you're aware of is ${((s as any).npcdesc ?? 0)}'s cock slipping from your pussy, the tickling sensation of his cum leaking from your snatch, and then...`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/1.jpg');
          // TODO-QSP: dynamic text: Your simultaneous orgasm was too much to handle and you collapse, no strength le...
          scene.text(`Your simultaneous orgasm was too much to handle and you collapse, no strength left to stay upright and your vision begins to blur. At the back of your mind, you realize that your body is succumbing to exhaustion. The last thing you're aware of is your breasts pressed up against ${((s as any).npcdesc ?? 0)}'s chest, his cock stuffed inside you and cum filling your pussy to the brim, and then...`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: Exhaustion hits you in a sudden wave and your vision begins to blur. The last th...
        scene.text(`Exhaustion hits you in a sudden wave and your vision begins to blur. The last thing you're aware of is ${((s as any).npcdesc ?? 0)} inside you, his cock and cum filling your pussy to the brim, and then...`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          scene.img('images/shared/sex/cum/vagcreampie/doggy1.jpg');
          // TODO-QSP: dynamic text: Exhaustion hits you in a sudden wave and your knees give out underneath you, col...
          scene.text(`Exhaustion hits you in a sudden wave and your knees give out underneath you, collapsing onto the bed in exhaustion as your vision begins to blur and fade. The last thing you're aware of is ${((s as any).npcdesc ?? 0)}'s cock slipping from your pussy, the tickling sensation of his cum leaking from your snatch, and then...`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/1.jpg');
            // TODO-QSP: dynamic text: Exhaustion hits you in a sudden wave and you collapse, no strength left to stay ...
            scene.text(`Exhaustion hits you in a sudden wave and you collapse, no strength left to stay upright and your vision begins to blur. The last thing you're aware of is your breasts pressed up against ${((s as any).npcdesc ?? 0)}'s chest, his cock and cum filling your pussy to the brim, and then...`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial') {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>'s cum still hot on your face. Your vision ...
        scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? 0)}'s cum still hot on your face. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is a trickle of liquid running down your cheek, and then...`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
          scene.img('images/shared/sex/after/sleep4.jpg');
          // TODO-QSP: dynamic text: You collapse to the bed as soon as you gulp, no strength left for you to stay up...
          scene.text(`You collapse to the bed as soon as you gulp, no strength left for you to stay upright. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is the salty taste of ${((s as any).npcdesc ?? 0)}'s cum on your lips, and then...`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'spit') {
            scene.img('images/pc/body/cum/cumsleep/cumsleep1.jpg');
            // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>'s cum still dribbling down your chin. Your...
            scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? 0)}'s cum still dribbling down your chin. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is a trickle of liquid running down your cheek, and then...`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth') {
              scene.img('images/shared/sex/cum/facial/sleep4.jpg');
              // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>'s cum hot on your face, still running down...
              scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? 0)}'s cum hot on your face, still running down your chin. Your vision blurs and you struggle to keep your eyes open. The last thing you remember is a trickle of liquid dribbling from your lips, and then...`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'tits') {
                if (((s as any).pcs_pubes ?? 0) < 3) {
                  scene.img('images/shared/sex/after/sleep1.jpg');
                } else {
                  scene.img('images/shared/sex/after/sleep2.jpg');
                }
                // TODO-QSP: dynamic text: You collapse to the bed, <<$npcdesc>>'s cum hot on your chest. Your vision blurs...
                scene.text(`You collapse to the bed, ${((s as any).npcdesc ?? 0)}'s cum hot on your chest. Your vision blurs and you struggle to keep your eyes open, to keep conscious. The last thing you remember is a trickle of liquid running down between your breasts, and then...`);
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
  scene.actions([
    { label: '. . .', handler: (st: GameState) => {
    if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) === 3  &&  ((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
      (s as any).hour = ((s as any).hour ?? 0) + (2);
      qspCall(s, 'stat', '');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'black_out_wake'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'parents_home') {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'black_out_wake_mother'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'black_out_wake_anya'] }]);
        }
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'sleep_function'] }]);
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
  scene.text(`"You passed out suddenly," ${((s as any).npcdesc ?? 0)} says, looking annoyed. "You need to get dressed and get out. My girlfriend is going to be here any minute."`);
  ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  qspCall(s, 'sex_ev_after', 'black_out_wake_options');
  scene.build();
}

function enterBlackOutWakeOptions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pc_know_npc_has_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).sex_ev ?? 0)?.['girlfriend_discover'] !== 1) {
    scene.actions([
      { label: 'Girlfriend?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['girlfriend_discover'] = 1;
    scene.text('"Girlfriend?" you mumble, mind still foggy after being shaken awake. "You have a girlfriend?"');
    scene.text('"Yeah, and she\'s gonna catch us unless you get the fuck out of here now."');
    qspCall(s, 'sex_ev_after', 'black_out_wake_options');
  } },
    ]);
  }
  scene.actions([
    { label: 'Find your clothes', goto: ['sex_ev_after', 'black_out_wake2'] },
    { label: 'Shower?', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Ugh..." you moan, holding your hand to your head. "Can I borrow your shower first? I\'m kind of-"');
    // TODO-QSP: dynamic text: "No, no time," <<$npcdesc>> says, shaking his head. "If you wanted that, then yo...
    scene.text(`"No, no time," ${((s as any).npcdesc ?? 0)} says, shaking his head. "If you wanted that, then you shouldn't have fallen asleep on me."`);
    scene.actions([
      { label: 'Get out of bed', goto: ['sex_ev_after', 'black_out_wake2'] },
      { label: 'Get out of bed (grumble)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/leave_bed1.mp4');
    if (((s as any).cumloc ?? 0) > 0) {
      scene.text('"I can\'t believe you\'re going to make me leave like this," you grumbled annoyedly as you stumble out of bed, grimacing at the cum on your body as you gather your bearings before getting up to gather your clothes.');
    } else {
      scene.text('"It\'s just a shower," you grumbled annoyedly as you stumble out of bed, getting your bearings before getting up to gather your clothes.');
    }
    scene.actions([
      { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((s as any).cumloc ?? 0) > 0) {
      // TODO-QSP: dynamic text: Sleepily, you pull your clothing on, frowning as you feel cum smear across the i...
      scene.text(`Sleepily, you pull your clothing on, frowning as you feel cum smear across the inside. ${((s as any).npcdesc ?? 0)} stands beside you impatiently, constantly checking the time and the door.`);
    } else {
      // TODO-QSP: dynamic text: Sleepily, you pull your clothing on slowly. <<$npcdesc>> stands beside you impat...
      scene.text(`Sleepily, you pull your clothing on slowly. ${((s as any).npcdesc ?? 0)} stands beside you impatiently, constantly checking the time and the door.`);
    }
    // TODO-QSP: dynamic text: Once you've picked up the last of your things, <<$npcdesc>> hurries you to the d...
    scene.text(`Once you've picked up the last of your things, ${((s as any).npcdesc ?? 0)} hurries you to the door, practically pushing you out.`);
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
  ((s as any).pc_know_npc_has_girlfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
  scene.img('images/shared/sex/after/leave_bed1.mp4');
  scene.text('You stumble out of bed, getting your bearings before getting up to gather your clothes.');
  scene.actions([
    { label: 'Get dressed', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    if (((s as any).cumloc ?? 0) > 0) {
      // TODO-QSP: dynamic text: Groggily, you pull your clothing on, frowning as you feel cum smear across the i...
      scene.text(`Groggily, you pull your clothing on, frowning as you feel cum smear across the inside. ${((s as any).npcdesc ?? 0)} is throwing your things at you, constantly checking the time and the door.`);
    } else {
      // TODO-QSP: dynamic text: Groggily, you pull your clothing on slowly. <<$npcdesc>> is throwing your things...
      scene.text(`Groggily, you pull your clothing on slowly. ${((s as any).npcdesc ?? 0)} is throwing your things at you, constantly checking the time and the door.`);
    }
    // TODO-QSP: dynamic text: Once you've picked up the last of your things, <<$npcdesc>> hurries you to the d...
    scene.text(`Once you've picked up the last of your things, ${((s as any).npcdesc ?? 0)} hurries you to the door, practically pushing you out.`);
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
    // TODO-QSP: dynamic text: "I'll text you next time I want to hook up," <<$npcdesc>> says, and slams the do...
    scene.text(`"I'll text you next time I want to hook up," ${((s as any).npcdesc ?? 0)} says, and slams the door behind you.`);
  } else {
    // TODO-QSP: dynamic text: The moment you clear the threshold, <<$npcdesc>> slams it behind you, leaving yo...
    scene.text(`The moment you clear the threshold, ${((s as any).npcdesc ?? 0)} slams it behind you, leaving you alone in the dark.`);
  }
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterCumClean(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat_cum_msg ?? 0) !== '') {
    scene.actions([
      { label: 'Clean up', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      scene.actions([
        { label: 'Ask him if he has any wipes', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if (((s as any).trait_vars ?? 0)?.['cum_addict'] === 0) {
      (s as any).cumspclnt = 20;
    } else {
      (s as any).cumspclnt = 18;
    }
    qspCall(s, 'cum_cleanup', '');
    qspCall(s, 'stat', '');
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      qspCall(s, 'sex_ev_reactions', 'facial_smile_img');
      scene.text('"Got anything for this?" you ask, smiling wryly as you point to the sticky strands of cum covering your face.');
    } else {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.img('images/shared/sex/cum/vagcreampie/after1.mp4');
        scene.text('"Got anything for this?" you ask, smiling wryly as you wipe your hands through your legs at the globs of cum still leaking from between them.');
      } else {
        if (((s as any).cum_loc ?? 0)?.['hands'] > 0) {
          // TODO-QSP: $sex_ev['bed_room']
          scene.text('"Got anything for this?" you ask, holding up your hand, spreading your fingers to emphasize the sticky strands of cum hanging from them.');
        } else {
          // TODO-QSP: $sex_ev['bed_room']
          scene.text('"Got anything for this?" you ask, smiling wryly as you point to the sticky strands of cum covering your body.');
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['sex_over'] > 0) {
      // TODO-QSP: dynamic text: "Yeah, got some wipes right here." <<$npcdesc>> reaches for his nightstand, pull...
      scene.text(`"Yeah, got some wipes right here." ${((s as any).npcdesc ?? 0)} reaches for his nightstand, pulling a bag of wipes out of the drawer. He pulls one out and starts wiping himself down, tossing you the bag.`);
    } else {
      // TODO-QSP: dynamic text: "Yeah, got some wipes right here." <<$npcdesc>> reaches for his nightstand, pull...
      scene.text(`"Yeah, got some wipes right here." ${((s as any).npcdesc ?? 0)} reaches for his nightstand, pulling a bag of wipes out of the drawer and tossing it over.`);
    }
    // TODO-QSP: dynamic text: You pull out a handful and clean yourself off as well. Following <<$npcdesc>>'s ...
    scene.text(`You pull out a handful and clean yourself off as well. Following ${((s as any).npcdesc ?? 0)}'s lead, you finish by tossing the used wipe into a small trashcan in the corner of the room.`);
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
      ]);
    }
    if (((s as any).mc_inventory ?? 0)?.['makeup_wipes'] > 0) {
      scene.actions([
        { label: 'Use your wipes', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_after', 'wipe_menu');
    scene.actions([
      { label: 'Clean everything', handler: (st: GameState) => {
    qspCall(s, 'cum_cleanup', 'cleanloc');
    qspCall(s, 'stat', '');
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Leaning down off the bed, you dig around with a clean hand, grab a bag of wipes, and start cleaning yourself off.');
    if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      // TODO-QSP: dynamic text: Feeling nice, you also take a moment to clean <<$npcdesc>>'s cock for him at the...
      scene.text(`Feeling nice, you also take a moment to clean ${((s as any).npcdesc ?? 0)}'s cock for him at the same time. Once you're both all wiped down off, you toss it into the wastebasket by his bed.`);
    }
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).cumloc ?? 0)[13] > 0) {
      scene.actions([
        { label: 'Lick your fingers clean', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    qspCall(s, 'stat', '');
    qspCall(s, 'cum_cleanup', 'cleanloc');
    ((s as any).stat ?? {})['swallow'] = (((s as any).stat ?? {})['swallow'] ?? 0) + (1);
    scene.img('images/shared/sex/cum/lick_fingers.jpg');
    if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      // TODO-QSP: dynamic text: Briefly making eye contact with <<$npcdesc>>, you use your fingers to gather up ...
      scene.text(`Briefly making eye contact with ${((s as any).npcdesc ?? 0)}, you use your fingers to gather up all the loose cum on you and stick out your tongue, running it up your hand, licking every drop from it and into your mouth. You give your hand a thorough tongue bath, sucking your fingers clean at the end. Once finished, you smack your lips, smiling at ${((s as any).npcdesc ?? 0)} who stared at you the whole time.`);
      if (((s as any).sex_ev ?? 0)?.['he_cleaned'] === 0) {
        scene.text('"Any chance I could get one of those?" he gestures towards his cock.');
        scene.actions([
          { label: 'You\'re on your own', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Sorry soldier, but you\'re on your own," you giggle.');
    scene.text('"<i>Of course I am...</i>" He sighs but reaches for his nightstand, pulling a pack of wipes from it and gets to work cleaning himself up. Once he\'s done, he tosses the used wipe into a trash can in the corner of his room.');
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_sex', 'sex_end');
    }
  } },
          { label: 'Sure', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"Sure thing," you smile. Crawling forward between his legs, you bend down and run your lips up and down his shaft, sucking, kissing, and licking every curve and contour until it\'s completely clean.');
    scene.text('"There. All better?"');
    scene.text('"Much better," he smiles back.');
    if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] <= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
      scene.text('He seems more than pleased by your act of service, considering the stiffness that seems to have returned to his dick under your touch.');
    }
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspCall(s, 'sex_ev_after', 'after_sex1');
    } else {
      qspCall(s, 'sex_ev_after', 'stop_here');
      qspCall(s, 'sex_ev_sex', 'keep_going');
    }
  } },
        ]);
      } else {
        scene.text('You lick the sticky salty liquid off your fingers and gulp it down.');
        if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_after', 'after_sex2_w_picture'] },
          ]);
        } else {
          qspCall(s, 'sex_ev_sex', 'sex_end');
        }
      }
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Never mind', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterFacialMouthClean(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['last_cum'] === 'facial'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'face_mouth')  &&  ((s as any).sex_ev ?? 0)?.['boy_in_shower'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    scene.actions([
      { label: 'Clean him off with your mouth', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['react'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial24.jpg');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
      // TODO-QSP: dynamic text: You lean forward, wrapping your lips around <<$npcdesc>> and run them up and dow...
      scene.text(`You lean forward, wrapping your lips around ${((s as any).npcdesc ?? 0)} and run them up and down to clean him off. You can faintly taste the salty sweetness of yourself on his cock, as well as the remnants of cum that was still inside it, drawn out your mouth. Looking up at ${((s as any).npcdesc ?? 0)}, you are greeted with the sight of him staring down at you.`);
    } else {
      // TODO-QSP: dynamic text: Opening your mouth, you lean forward, wrapping your lips around <<$npcdesc>>'s c...
      scene.text(`Opening your mouth, you lean forward, wrapping your lips around ${((s as any).npcdesc ?? 0)}'s cock and running them up and down to clean him off. You can taste the remnants of cum that was still inside it, drawn out by your mouth. Looking up at ${((s as any).npcdesc ?? 0)}, you are greeted with the sight of him staring down at you.`);
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  scene.build();
}

function enterAfterSex1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['sex_over'] = 1;
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1  &&  (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl')) {
    scene.actions([
      { label: 'Pull apart', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_after', 'pull_apart');
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    if ((((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (((s as any).sex_ev ?? 0)?.['fuck_count'] >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - 1)  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(s, 'sex_ev_pillow_talk', 'high_five1');
    } else {
      if (((s as any).npc_last_sex_score ?? 0)?.[String((s as any).npcID ?? 0)] >= 3  &&  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_misogynist ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'good_slut_ev'] }]);
      } else {
        qspCall(s, 'sex_ev_after', 'post_cigarette_boy');
      }
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] > 0) {
      scene.img('images/shared/sex/cum/both_holes1.jpg');
      // TODO-QSP: dynamic text: You lay back, settling down on the other side of the bed. Your body relaxes and ...
      scene.text(`You lay back, settling down on the other side of the bed. Your body relaxes and you feel ${((s as any).npcdesc ?? 0)}'s cum seep from both pussy and asshole, running down your thighs into the bedsheets.`);
    } else {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_loc ?? 0)?.['anus'] === 0) {
        scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        // TODO-QSP: dynamic text: You lay back, settling down on the other side of the bed. Your body relaxes and ...
        scene.text(`You lay back, settling down on the other side of the bed. Your body relaxes and you feel ${((s as any).npcdesc ?? 0)}'s cum seep from your pussy, trickling down the crack of your ass into the bedsheets.`);
      } else {
        if (((s as any).cum_loc ?? 0)?.['anus'] > 0  &&  ((s as any).cum_loc ?? 0)?.['vagina'] === 0) {
          scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
          // TODO-QSP: dynamic text: You lay back, settling down on the other side of the bed. Your body relaxes and ...
          scene.text(`You lay back, settling down on the other side of the bed. Your body relaxes and you feel ${((s as any).npcdesc ?? 0)}'s cum seep from your puckered hole, trickling down the curve of your ass into the bedsheets.`);
        } else {
          // TODO-QSP: $sex_ev['bed_room']
        }
      }
    }
    if ((((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (((s as any).sex_ev ?? 0)?.['fuck_count'] >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] - 1)  &&  (Math.floor(Math.random() * 2) + 0) === 1) {
      qspCall(s, 'sex_ev_pillow_talk', 'high_five1');
    } else {
      qspCall(s, 'sex_ev_after', 'post_cigarette_boy');
    }
  } },
    ]);
  }
  scene.build();
}

function enterPostCigaretteBoy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    // TODO-QSP: dynamic text: The two of you pull apart and <<$npcdesc>> reaches over to his nightstand and pu...
    scene.text(`The two of you pull apart and ${((s as any).npcdesc ?? 0)} reaches over to his nightstand and pulls out a pack of cigarettes.`);
  } else {
    // TODO-QSP: 'You both lay back, basking in the afterglow of your fuck together. ' + iif(npc_smoker[$npcID] > 0, ...
  }
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    qspCall(s, 'sex_ev_events', 'offer_ciga1');
  } else {
    qspCall(s, 'sex_ev_after', 'after_sex2');
  }
  scene.build();
}

function enterPullApart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie'  ||  ((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie_surprise') {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/after/miss_after1.mp4');
      if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
        // TODO-QSP: $sex_ev['end_comment']
      }
      // TODO-QSP: dynamic text: <<$npcdesc>> climbs off of you, removing his cock from your pussy, allowing a gu...
      scene.text(`${((s as any).npcdesc ?? 0)} climbs off of you, removing his cock from your pussy, allowing a gush of cum from his last orgasm to be released, and flops down on the other side of the bed as it trickles down the crack of your ass into the bedsheets.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/after/doggy_after1.mp4');
        if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
          // TODO-QSP: $sex_ev['end_comment']
        }
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls out from behind you, releasing a gush of cum from your pussy ...
        scene.text(`${((s as any).npcdesc ?? 0)} pulls out from behind you, releasing a gush of cum from your pussy that oozes down your thighs as you roll over together onto your backs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/after/cowgirl_after1.mp4');
          if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
            // TODO-QSP: $sex_ev['end_comment']
          }
          // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, releasing a gush of cum from your pussy, and flop...
          scene.text(`You climb off of ${((s as any).npcdesc ?? 0)}, releasing a gush of cum from your pussy, and flop down next to him. As soon as his cock vacates your pussy, cum begins to drip from it, trickling down the crack of your ass into the bedsheets.`);
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
      scene.text(`${((s as any).npcdesc ?? 0)} removes his cock from your pussy, climbing out from between your legs, flopping onto the other side of the bed.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/after/doggy_after1.mp4');
        if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
          // TODO-QSP: $sex_ev['end_comment']
        }
        // TODO-QSP: dynamic text: <<$npcdesc>> pulls out from behind you and you roll over together onto your back...
        scene.text(`${((s as any).npcdesc ?? 0)} pulls out from behind you and you roll over together onto your backs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/after/cowgirl_after1.mp4');
          if (((s as any).sex_ev ?? 0)?.['end_comment'] !== '') {
            // TODO-QSP: $sex_ev['end_comment']
          }
          // TODO-QSP: dynamic text: You climb off of <<$npcdesc>>, letting his cock slip from your pussy, and flop d...
          scene.text(`You climb off of ${((s as any).npcdesc ?? 0)}, letting his cock slip from your pussy, and flop down beside him.`);
        }
      }
    }
  }
  scene.build();
}

function enterAfterSex2WPicture(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  qspCall(s, 'sex_ev_after', 'after_sex2');
  scene.build();
}

function enterLoverRoomDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s apartment is neat and tidy.
        scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s apartment is neat and tidy.`);
      } else {
        if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s apartment is a bit of a mess with a sink of unwashed...
          scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s apartment is a bit of a mess with a sink of unwashed dishes, cluttered tabletops, and randomly thrown clothing.`);
        } else {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s apartment feels very "lived in." Not messy exactly, ...
          scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s apartment feels very "lived in." Not messy exactly, but everything just askew enough to know what gets used on a regular basis.`);
        }
      }
    } else {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 6) {
        if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s fancy bedroom is neat, tidy, and well kept.
          scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s fancy bedroom is neat, tidy, and well kept.`);
        } else {
          if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s bedroom is a bit of a mess with. The tops of his dre...
            scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom is a bit of a mess with. The tops of his dressers are cluttered with items, the bed you're laying in doesn't seem like it's been made properly in ages, and you can see clothes randomly littering the floor of his walk-in closet.`);
          } else {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s bedroom feels very "lived in." Not messy exactly, bu...
            scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom feels very "lived in." Not messy exactly, but everything just askew enough to know what gets used on a regular basis`);
          }
        }
      } else {
        if (((s as any).npc_neat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s bedroom is neat and tidy.
          scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom is neat and tidy.`);
        } else {
          if (((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s bedroom is a bit of a mess with overflowing bins of ...
            scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom is a bit of a mess with overflowing bins of dirty laundry, cluttered dressers, and random items littering the floor.`);
          } else {
            // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s bedroom feels very "lived in." Not messy exactly, bu...
            scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s bedroom feels very "lived in." Not messy exactly, but everything just askew enough to know what gets used on a regular basis.`);
          }
        }
      }
    }
  }
  scene.build();
}

function enterAfterSex2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['sex_over'] = 1;
  ((s as any).sex_ev ?? {})['pillow_talking'] = 0;
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    ((s as any).sex_ev ?? {})['fun'] = 'fuck';
  } else {
    ((s as any).sex_ev ?? {})['fun'] = 'fun';
  }
  qspCall(s, 'sex_ev_after', 'lover_room_desc');
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
    scene.text(`Your midnight fuck over, you and ${((s as any).npcdesc ?? 0)} cuddle up together and fall asleep again.`);
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
              { label: 'Thanks for the <<$sex_ev[\'fun\']>>', handler: (st: GameState) => {
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
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    if (((s as any).sex_ev ?? 0)?.['get_up'] === 1) {
      ((s as any).sex_ev ?? {})['get_up'] = 0;
      // TODO-QSP: dynamic text: You climb back into bed with <<$npcdesc>>, snuggling up with him to relax.
      scene.text(`You climb back into bed with ${((s as any).npcdesc ?? 0)}, snuggling up with him to relax.`);
    } else {
      // TODO-QSP: dynamic text: You and <<$npcdesc>> both lay back, quietly relaxing together in the still bliss...
      scene.text(`You and ${((s as any).npcdesc ?? 0)} both lay back, quietly relaxing together in the still bliss of your love-making.`);
    }
  }, goto: ['sex_ev_after', 'relax_together'] },
      ]);
    }
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> is asleep, snoring softly beside you.
    scene.text(`${((s as any).npcdesc ?? 0)} is asleep, snoring softly beside you.`);
    qspCall(s, 'sex_ev_after', 'cuddle_up2');
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
          scene.text(`${((s as any).npcdesc ?? 0)} is in the shower. You can hear the water running through the door.`);
        } else {
          if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 3  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
            // TODO-QSP: dynamic text: <<$npcdesc>> is in the shower and you can hear water running through the wall.
            scene.text(`${((s as any).npcdesc ?? 0)} is in the shower and you can hear water running through the wall.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> is taking a shower somewhere else in his apartment.
            scene.text(`${((s as any).npcdesc ?? 0)} is taking a shower somewhere else in his apartment.`);
          }
        }
        qspCall(s, 'sex_ev_events', 'rummage_drawers_link');
        scene.actions([
          { label: 'Wait to use the bathroom', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: You wait patiently on the bed for <<$npcdesc>> to finish his shower.
    scene.text(`You wait patiently on the bed for ${((s as any).npcdesc ?? 0)} to finish his shower.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'boy_shower_finish');
  } },
    ]);
  } },
          { label: 'Join him in the shower', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_shower', 'shower_join1');
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
  qspCall(s, 'sex_ev_after', 'post_sex_pee1');
  qspCall(s, 'sex_ev_after', 'cum_clean');
  qspCall(s, 'sex_ev_after', 'cock_clean');
  qspCall(s, 'sex_ev_after', 'plan_b');
  qspCall(s, 'sex_ev_after', 'birth_control_pill_take');
  if (((s as any).sex_ev ?? 0)?.['leaving'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cant_stay'] === 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
    qspCall(s, 'sex_ev_leave', 'go_out_after');
    scene.actions([
      { label: 'Ask to hang out', goto: ['sex_ev_leave', 'hang_out_after'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['action_restricted'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    qspCall(s, 'sex_ev_after', 'spend_night_ask');
  }
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
