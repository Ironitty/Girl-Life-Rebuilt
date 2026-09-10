import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter69Code(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: gs 'arousal', 'bj', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: gs 'arousal', 'cuni', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.build();
}

function enterBjCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: gs 'arousal', 'bj', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.build();
}

function enterCuniCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: gs 'arousal', 'cuni', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.build();
}

function enterCockReact(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterBedStart(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['start_time'] = ((s as any).totminut ?? 0);
  // TODO-QSP: ! gs 'sex_ev_start', 'undress_function'
  // TODO-QSP: ! $sex_ev['bed_room']
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    // TODO-QSP: ! player wins initiative
    // TODO-QSP: ! 'You both tear your clothes off, getting naked as fast as possible, you finishing just before he d...
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
    } else {
      qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
      } else {
        qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterGenerousInitiative(s: GameState, scene: SceneBuilder): void {
  if (((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).sex_ev ?? 0)?.['sensitive_cuni'] !== 1) {
    if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> drags you back into the bedroom, your hair still wet from the showe...
      scene.text(`${((s as any).npcdesc ?? 0)} drags you back into the bedroom, your hair still wet from the shower, and shoves you backwards onto the bed kneeling between your legs.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> begins laying a trail of kisses down your stomach, leading down bet...
      scene.text(`${((s as any).npcdesc ?? 0)} begins laying a trail of kisses down your stomach, leading down between your legs.`);
    }
    qspCall(s, 'sex_ev_foreplay', 'kuni_start_acts');
  } else {
    if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> drags you back into the bedroom and shoves you backwards onto the b...
      scene.text(`${((s as any).npcdesc ?? 0)} drags you back into the bedroom and shoves you backwards onto the bed, starting a trail of kisses up your wet stomach, towards your breasts.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> begins leaving a new trail of kisses up your stomach, towards your ...
      scene.text(`${((s as any).npcdesc ?? 0)} begins leaving a new trail of kisses up your stomach, towards your breasts.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_fuck_start'] },
      { label: 'Continue', goto: ['sex_ev_foreplay', 'nipple_play'] },
    ]);
  }
  scene.build();
}

function enterPoliteInitiative(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSelfishInitiative(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 3) + 1) === 1  ||  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === '69') {
    // TODO-QSP: dynamic text: "I wanna sixty-nine," <<$npc_usedname[$npcID]>> grins at you.
    scene.text(`"I wanna sixty-nine," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grins at you.`);
    qspCall(s, 'sex_ev_foreplay', '69_start');
  } else {
    if ((Math.floor(Math.random() * 2) + 1) === 1) {
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_bj_start'] },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_fuck_start'] },
      ]);
    }
  }
  scene.build();
}

function enterSelfishBjStart(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['bj_request'] = ((s as any).sex_ev['bj_request'] ?? 0) + (1);
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls you towards him and pushes you to your knees in the same moti...
  scene.text(`${((s as any).npcdesc ?? 0)} pulls you towards him and pushes you to your knees in the same motion, dangling his cock in front of your face. It's pretty obvious what he wants right now...`);
  scene.actions([
    { label: 'Don\'t wanna suck cock', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I don\'t really want to suck your dick right now," you complain. "Can we do something else?"');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  (!(Math.floor(Math.random() * 2) + 0))) {
      scene.text('"Okay, like what then?" he asks.');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        scene.actions([
          { label: 'Back to sex', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'position_change');
    qspCall(st, 'sex_ev_condoms', 'condoms');
  } },
        ]);
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_start');
      }
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>>." He prods forward relentlessly with his cock, poking...
        scene.text(`"Come on ${((s as any).pcs_nickname ?? 0)}." He prods forward relentlessly with his cock, poking you in the cheek with it, trying to push it past your lips. "Just do it."`);
      } else {
        scene.text('"Come on, please?" he asks. "I\'d really appreciate it."');
      }
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'How about a handy instead? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'How about a handy instead?', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'bj', 'resist');
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: "Seriously <<$npcdesc>>, I don't feel like it today. Can I give you a handy inst...
    scene.text(`"Seriously ${((s as any).npcdesc ?? 0)}, I don't feel like it today. Can I give you a handy instead?" you ask looking up at him, gently tugging on his cock already. "Please?"`);
    scene.text('"Oh alright," he sighs. "That\'s fine I guess."');
    scene.actions([
      { label: 'Jerk him off', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'handjob_dom1'
  } },
    ]);
  } },
        ]);
      }
      qspCall(s, 'willpower', 'bj', 'resist', 'easy');
      scene.actions([
        { label: 'Blow him reluctantly (submissive)', handler: (st: GameState) => {
    (s as any).sex_ev['reluctant_bj'] = 1;
    scene.text('"Uh... Uhm... Okay I guess..." you mumble as he slips his cock past your lips. You\'re not really happy with this, but you don\'t really know how to say no to his request.');
    scene.actions([
      { label: 'Suck', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        { label: 'Blow him reluctantly (grumble)', handler: (st: GameState) => {
    (s as any).sex_ev['reluctant_bj'] = 1;
    scene.text('"<i>Ugh!</i> Fiiiine," you grumble, leaning forward to take his dick in your mouth.');
    scene.actions([
      { label: 'Suck', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case '69_code':
      enter69Code(s, scene);
      break;
    case 'bj_code':
      enterBjCode(s, scene);
      break;
    case 'cuni_code':
      enterCuniCode(s, scene);
      break;
    case 'cock_react':
      enterCockReact(s, scene);
      break;
    case 'bed_start':
      enterBedStart(s, scene);
      break;
    case 'generous_initiative':
      enterGenerousInitiative(s, scene);
      break;
    case 'polite_initiative':
      enterPoliteInitiative(s, scene);
      break;
    case 'selfish_initiative':
      enterSelfishInitiative(s, scene);
      break;
    case 'selfish_bj_start':
      enterSelfishBjStart(s, scene);
      break;
    default:
      enter69Code(s, scene);
      break;
  }
}

export const sex_ev_foreplay: LocationDef = {
  name: 'sex_ev_foreplay',
  region: 'other',
  enter: enter,
};
