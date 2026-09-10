import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    (s as any).sex_ev['break_up'] = 1;
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
  (s as any).sex_ev['annoyed'] = 1;
  scene.text('Both of you lay back in bed, slightly frustrated with each other to the point that the mood is demonstrably ruined, but neither willing to concede.');
  if (((s as any).npc_smoker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from the pockets of his discarded clothing and...
      scene.text(`${((s as any).npcdesc ?? 0)} grabs his cigarettes from the pockets of his discarded clothing and lights up, puffing away at it in annoyance.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from his nightstand and lights up, puffing awa...
      scene.text(`${((s as any).npcdesc ?? 0)} grabs his cigarettes from his nightstand and lights up, puffing away at it in annoyance.`);
      // TODO-QSP: dynamic text: <<$npcdesc>> grabs his cigarettes from the nightstand and lights up, puffing awa...
      scene.text(`${((s as any).npcdesc ?? 0)} grabs his cigarettes from the nightstand and lights up, puffing away at it in annoyance.`);
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
      scene.actions([
        { label: 'Confirm', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"There, happy now?" you ask, playing with his cock.');
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
        { label: 'Confirm', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_after', 'stop_here_menu');
  } },
      ]);
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
      scene.text('"Actually," you say. "I\'m happy if we just to finish here. How about you?"');
      qspCall(s, 'sex_ev_sex', 'inserted_img');
      scene.text('"I think I\'m good here," you say. "How about you?"');
    }
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
      { label: 'I\'m shattered', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'inserted_img');
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] === 1) {
      scene.text('"Can we... stop here...?" you pant tiredly. "That last orgasm really took it out of me. I\'m shattered..."');
    } else {
      scene.text('"Can we... stop here...?" you pant tiredly. "You made me come so many times in a row... I\'m shattered..."');
      scene.text('"Can we... stop here...?" you pant tiredly. "I\'m absolutely shattered..."');
    }
    qspCall(s, 'sex_ev_after', 'stop_here2');
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'house_party') {
    scene.actions([
      { label: 'Should get back to the party', handler: (st: GameState) => {
    (s as any).sex_ev['back_to_party'] = 1;
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
  (s as any).sex_ev['finish_ask'] = 1;
  if ((((s as any).totminut ?? 0) > ((s as any).sex_ev ?? 0)?.['start_time'] + 60  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] > 0)  ||  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    qspCall(s, 'sex_ev_after', 'finish_sex');
  } else {
    if (((s as any).sex_ev ?? 0)?.['back_to_party'] === 0) {
      scene.text('"Yeah," he nods. "We should probably get back to the party soon."');
    } else {
      scene.text('"Yeah," he nods. "Probably should."');
    }
    qspCall(s, 'sex_ev_after', 'finish_sex');
    if (Math.floor(Math.random() * 10) + 1 >= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['blowjob_continue_ask'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] < 5) {
      if (((s as any).sex_ev ?? 0)?.['npc_late_work'] === 1) {
        qspCall(s, 'sex_ev_after', 'finish_sex');
      } else {
        qspCall(s, 'sex_ev_after', 'finish_sex');
        if (((s as any).sex_ev ?? 0)?.['keep_going_continue'] > 0) {
          // TODO-QSP: dynamic text: "Just a couple more times?" <<$npcdesc>> begs. "I still want to get off a few mo...
          scene.text(`"Just a couple more times?" ${((s as any).npcdesc ?? 0)} begs. "I still want to get off a few more times with you."`);
          qspCall(s, 'sex_ev_after', 'ask_continue_options');
        } else {
          // TODO-QSP: dynamic text: "You're done already?" <<$npcdesc>> complains. "I still want to get off a few mo...
          scene.text(`"You're done already?" ${((s as any).npcdesc ?? 0)} complains. "I still want to get off a few more times with you."`);
          qspCall(s, 'sex_ev_after', 'ask_continue_options');
          (s as any).sex_ev['ask_to_cum_once'] = 1;
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            // TODO-QSP: dynamic text: "Can I just come real quick?" <<$npcdesc>> asks. "I'm really close."
            scene.text(`"Can I just come real quick?" ${((s as any).npcdesc ?? 0)} asks. "I'm really close."`);
          } else {
            // TODO-QSP: end}
            if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0) {
              // TODO-QSP: dynamic text: "Are you sure?" <<$npcdesc>> asks. "You haven't gotten to come yet."
              scene.text(`"Are you sure?" ${((s as any).npcdesc ?? 0)} asks. "You haven't gotten to come yet."`);
              qspCall(s, 'sex_ev_after', 'ask_continue_options');
            } else {
              // TODO-QSP: dynamic text: "I was actually hoping to go a few more times. But if you want to stop, that's a...
              scene.text(`"I was actually hoping to go a few more times. But if you want to stop, that's all right." ${((s as any).npcdesc ?? 0)} gives you a gentle smile.`);
              qspCall(s, 'sex_ev_after', 'ask_continue_options');
            }
            qspCall(s, 'sex_ev_after', 'finish_sex');
          }
        }
      }
    }
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
    default:
      enterQuit(s, scene);
      break;
  }
}

export const sex_ev_after: LocationDef = {
  name: 'sex_ev_after',
  title: 'Both of you lay back in bed, slightly frustrated with each o',
  region: 'other',
  enter: enter,
};
