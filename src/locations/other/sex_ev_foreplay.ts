import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enter69Code(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: gs 'arousal', 'bj', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: gs 'arousal', 'cuni', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: end
  scene.build();
}

function enterBjCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: gs 'arousal', 'bj', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: end
  scene.build();
}

function enterCuniCode(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] !== 'enjoy') {
  }
  // TODO-QSP: gs 'arousal', 'cuni', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: end
  scene.build();
}

function enterCockReact(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBedStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['start_time'] = ((s as any).totminut ?? 0);
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
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
        } else {
          qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
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
    if (((s as any).sex_ev ?? 0)?.['sensitive_cuni'] === 1) {
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_fuck_start'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['start_shower'] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> drags you back into the bedroom and shoves you backwards onto the b...
        scene.text(`${((s as any).npcdesc ?? 0)} drags you back into the bedroom and shoves you backwards onto the bed, starting a trail of kisses up your wet stomach, towards your breasts.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> begins leaving a new trail of kisses up your stomach, towards your ...
        scene.text(`${((s as any).npcdesc ?? 0)} begins leaving a new trail of kisses up your stomach, towards your breasts.`);
      }
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_foreplay', 'nipple_play'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPoliteInitiative(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterSelfishBjStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bj_request'] = (((s as any).sex_ev ?? {})['bj_request'] ?? 0) + (1);
  // TODO-QSP: $sex_ev['bed_room']
  // TODO-QSP: dynamic text: <<$npcdesc>> pulls you towards him and pushes you to your knees in the same moti...
  scene.text(`${((s as any).npcdesc ?? 0)} pulls you towards him and pushes you to your knees in the same motion, dangling his cock in front of your face. It's pretty obvious what he wants right now...`);
  // TODO-QSP: end
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
          { label: 'How about a handy instead? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
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
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Can we 69? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Can we 69? [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    scene.text('"How about we sixty-nine instead?" you ask. "I could use some loving down there myself right now..."');
    scene.text('"I can get behind that," he grins, laying back.');
    scene.actions([
      { label: 'Climb over him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', '69_sub');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Blow him reluctantly (submissive)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reluctant_bj'] = 1;
    scene.text('"Uh... Uhm... Okay I guess..." you mumble as he slips his cock past your lips. You\'re not really happy with this, but you don\'t really know how to say no to his request.');
    scene.actions([
      { label: 'Suck', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        { label: 'Blow him reluctantly (grumble)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reluctant_bj'] = 1;
    scene.text('"<i>Ugh!</i> Fiiiine," you grumble, leaning forward to take his dick in your mouth.');
    scene.actions([
      { label: 'Suck', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  } },
    { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
  ]);
  scene.build();
}

function enterSelfishFuckStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_condoms', 'setup');
  ((s as any).sex_ev ?? {})['position_rand'] = Math.floor(Math.random() * 3) + 1;
  ((s as any).sex_ev ?? {})['must_fuck'] = 1;
  qspCall(s, 'sex_ev_sex', 'speed_select');
  if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== ''  ||  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  ||  (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] <= 0  &&  (Math.floor(Math.random() * 2) + 1) === 1)) {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
      ((s as any).sex_ev ?? {})['position'] = 'miss';
      scene.img('images/shared/sex/foreplay/miss3.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down on the bed and spreads your legs, preparing to thru...
      scene.text(`${((s as any).npcdesc ?? 0)} pushes you down on the bed and spreads your legs, preparing to thrust between them.`);
      qspCall(s, 'sex_ev_miss', 'miss_insert_acts');
      qspCall(s, 'sex_ev_condoms', 'condom_wait');
      qspCall(s, 'sex_ev_condoms', 'dont_cum_in_me');
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
        ((s as any).sex_ev ?? {})['position'] = 'doggy';
        scene.img('images/shared/sex/foreplay/doggy1.jpg');
        // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down on the bed and draws you up to your knees, preparin...
        scene.text(`${((s as any).npcdesc ?? 0)} pushes you down on the bed and draws you up to your knees, preparing to thrust into you from behind.`);
        qspCall(s, 'sex_ev_doggy', 'doggy_insert_acts');
        qspCall(s, 'sex_ev_condoms', 'condom_wait');
        qspCall(s, 'sex_ev_condoms', 'dont_cum_in_me');
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  ||  ((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
          ((s as any).sex_ev ?? {})['position'] = 'cowgirl';
          scene.img('images/shared/sex/foreplay/cowgirl1.jpg');
          // TODO-QSP: dynamic text: <<$npcdesc>> drags you down on the bed with him, pulling you up so you're stradd...
          scene.text(`${((s as any).npcdesc ?? 0)} drags you down on the bed with him, pulling you up so you're straddling him to ride his cock.`);
          qspCall(s, 'sex_ev_cowgirl', 'cowgirl_insert_acts');
          qspCall(s, 'sex_ev_condoms', 'condom_wait');
          qspCall(s, 'sex_ev_condoms', 'dont_cum_in_me');
        } else {
          qspCall(s, 'sex_ev_sex', 'rand_position');
          scene.actions([{ label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_fuck_start'] }]);
        }
      }
    }
  } else {
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (((s as any).sex_ev ?? 0)?.['condom_count'] > 0  &&  ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((s as any).npc_always_condoms ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
      scene.img('images/shared/sex/cock/condom1.jpg');
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position_rand'] === 1) {
        ((s as any).sex_ev ?? {})['position'] = 'miss';
        // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down on the bed and spreads your legs, pausing only to g...
        scene.text(`${((s as any).npcdesc ?? 0)} pushes you down on the bed and spreads your legs, pausing only to grab a condom and roll it onto his cock.`);
        ((s as any).sex_ev ?? {})['condom'] = 1;
        if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0) {
          scene.actions([
            { label: 'I\'m saving my virginity', goto: ['sex_ev_virgin', 'saving_virginity'] },
          ]);
        } else {
          qspCall(s, 'sex_ev_miss', 'miss_insert_acts');
        }
      } else {
        if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position_rand'] === 2) {
          ((s as any).sex_ev ?? {})['position'] = 'doggy';
          // TODO-QSP: dynamic text: <<$npcdesc>> pushes you down on the bed and draws you up to your knees, preparin...
          scene.text(`${((s as any).npcdesc ?? 0)} pushes you down on the bed and draws you up to your knees, preparing to thrust into you from behind.`);
          scene.text('"I\'m going to fuck you silly," he growls as he tears open a condom and starts rolling it onto his cock.');
          if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0) {
            scene.actions([
              { label: 'I\'m saving my virginity', goto: ['sex_ev_virgin', 'saving_virginity'] },
            ]);
          } else {
            scene.actions([
              { label: 'Continue', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['condom'] = 1;
    qspCall(s, 'sex_ev_doggy', 'doggy_insert_acts');
  } },
            ]);
          }
          qspCall(s, 'sex_ev_condoms', 'temp_disable_condoms');
          if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
            qspCall(s, 'sex_ev_condoms', 'disable_condoms');
          }
        } else {
          if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'cowgirl'  ||  ((s as any).sex_ev ?? 0)?.['position_rand'] === 3) {
            ((s as any).sex_ev ?? {})['position'] = 'cowgirl';
            // TODO-QSP: dynamic text: <<$npcdesc>> drags you down on the bed with him, pulling you up so you're stradd...
            scene.text(`${((s as any).npcdesc ?? 0)} drags you down on the bed with him, pulling you up so you're straddling him to ride his cock.`);
            scene.text('"I\'m going to fuck you silly," he growls as he tears open a condom and starts rolling it onto his cock.');
            if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0) {
              scene.actions([
                { label: 'I\'m saving my virginity', goto: ['sex_ev_virgin', 'saving_virginity'] },
              ]);
            } else {
              scene.actions([
                { label: 'Continue', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['condom'] = 1;
    qspCall(s, 'sex_ev_cowgirl', 'cowgirl_insert_acts');
  } },
              ]);
            }
            qspCall(s, 'sex_ev_condoms', 'temp_disable_condoms');
            if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
              qspCall(s, 'sex_ev_condoms', 'disable_condoms');
            }
          } else {
            qspCall(s, 'sex_ev_sex', 'rand_position');
            scene.actions([{ label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_fuck_start'] }]);
          }
        }
      }
    } else {
      qspCall(s, 'sex_ev_sex', 'rand_position');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_foreplay', 'selfish_fuck_start'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFingeringStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['position'] = 'fingering';
  // TODO-QSP: gs 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.img('images/shared/sex/foreplay/fingering1.mp4');
  if (((s as any).pcs_horny ?? 0) > 60) {
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s hand slides down your belly, snaking between your th...
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s hand slides down your belly, snaking between your thighs towards your dripping snatch.`);
  } else {
    if (((s as any).pcs_horny ?? 0) > 30) {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s hand slides down your belly, snaking between your th...
      scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s hand slides down your belly, snaking between your thighs towards your moist snatch.`);
    } else {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>>'s hand slides down your belly, snaking between your th...
      scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s hand slides down your belly, snaking between your thighs towards your snatch.`);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread for him', handler: (st: GameState) => {
    scene.text('Almost on instinct, your legs widen and your hips buck, begging without words for him to touch you...');
    scene.actions([
      { label: 'Get fingered', goto: ['sex_ev_foreplay', 'fingering_ev1'] },
    ]);
  } },
    { label: 'Beg for it', handler: (st: GameState) => {
    scene.text('"Yes! Yes please!" you mumble hoarsely, unconsciously bucking your hips into his hand, trying to pull him closer.');
    scene.actions([
      { label: 'Get fingered', goto: ['sex_ev_foreplay', 'fingering_init'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFingeringInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  scene.img('images/shared/sex/foreplay/fingering1.mp4');
  if (((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)] >= 75) {
    // TODO-QSP: gs 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: dynamic text: <<$npcdesc>> makes you gasp involuntarily, his touch sending thrills through you...
    scene.text(`${((s as any).npcdesc ?? 0)} makes you gasp involuntarily, his touch sending thrills through you from the first moment of contact. It's like his fingers know everything about your pussy, slipping between your folds to hit all the right spots, worshiping your clit with lavish attention. He's got you squirming in seconds and you can feel your girlcum slopping out with every movement of his hand.`);
    scene.text('Fuck! He\'s good at this!');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFingeringGoodCycle(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', 'vaginal_finger', 5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  if (((s as any).sex_ev ?? 0)?.['finger_cycle'] === 0) {
    ((s as any).sex_ev ?? {})['finger_cycle'] = (((s as any).sex_ev ?? {})['finger_cycle'] ?? 0) + (1);
    // TODO-QSP: dynamic text: The sloppy wet sounds of your pussy getting finger fucked emit from between your...
    scene.text(`The sloppy wet sounds of your pussy getting finger fucked emit from between your thighs. The coarse noise of your heavy breathing joins it. ${((s as any).npcdesc ?? 0)} is driving you crazy, plunging his fingers into your snatch and rubbing your clit with perfect coordination and you can't help but gyrate your hips in time with his movements.`);
  } else {
    // TODO-QSP: gs 'arousal', 'breasts', -5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    ((s as any).sex_ev ?? {})['finger_cycle'] = 0;
    // TODO-QSP: dynamic text: Deciding his relentless fingering of your pussy isn't enough, <<$npcdesc>> bends...
    scene.text(`Deciding his relentless fingering of your pussy isn't enough, ${((s as any).npcdesc ?? 0)} bends his head to wrap his lips around one of your nipples, gently sucking on it. The moan that escapes your own lips only serves to encourage him further, and the sound of his suckling joins the schlicking of your pussy.`);
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] >= ((s as any).orgasm ?? 0)) {
    scene.text('If he keeps this up, he\'ll definitely make you cum!');
  } else {
    scene.text('The pressure inside you has built to bursting. Any second now you just-! might-! <i>cum-!</i>');
    scene.actions([
      { label: 'Orgasm', goto: ['sex_ev_foreplay', 'fingering_orgasm'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFingeringOrgasm(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterKuniAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him to eat you out', handler: (st: GameState) => {
    scene.text('"Do you think you could give me some TLC?" you ask. "A little tongue action?"');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Be careful what you ask for," <<$npcdesc>> grins, quickly settling between your...
      scene.text(`"Be careful what you ask for," ${((s as any).npcdesc ?? 0)} grins, quickly settling between your thighs.`);
    } else {
      // TODO-QSP: dynamic text: "I guess I could," <<$npcdesc>> says, moving down between your thighs.
      scene.text(`"I guess I could," ${((s as any).npcdesc ?? 0)} says, moving down between your thighs.`);
    }
    scene.actions([
      { label: 'Get eaten out', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'pussy_lick_start'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterKuniStartActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kuni_yes ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
    scene.actions([
      { label: 'Close your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_close'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Spread your legs', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'kuni_leg_spread'
  } },
  ]);
  scene.build();
}

function enterKuniLegSpread(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['kuni'] = 1;
  if (((s as any).kuni_no ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).kuni_yes ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.text('Realizing what he wants, you realize that you want it too and spread your legs, inviting him in. Despite initiating it, he seems surprised that you\'re actually letting him.');
    scene.text('"You finally trust me enough to let me eat you out?"');
    scene.text('"Yeah," you smile. "Come and get it."');
    scene.text('He settles down between your legs and dives in.');
    scene.actions([
      { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'pussy_lick_start');
  } },
    ]);
  } else {
    if (((s as any).mesec ?? 0) > 0  &&  ((s as any).npc_pussyeater_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Just warning you, I\'m on my period," you say, spreading your legs and showing him your bleeding snatch.');
      scene.text('"I don\'t mind."');
      scene.text('"I know, just wanted to let you get ready for the taste," you grin.');
      scene.actions([
        { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'period_lick');
  } },
      ]);
    } else {
      if (((s as any).mesec ?? 0) > 0) {
        scene.text('"I\'m on my period. You may not want to go down on me right now," you say, spreading your legs and showing him your bleeding snatch.');
        if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          ((s as any).npc_pussyeater_know ?? {})[String((s as any).npcID ?? 0)] = 1;
          scene.text('"I don\'t mind," he says and you gasp when you feel his tongue on your clit.');
          scene.actions([
            { label: 'Get eaten out', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_foreplay', 'period_lick');
  } },
          ]);
        } else {
          scene.text('"Oh. Maybe not then. How about this insted?"');
          // TODO-QSP: dynamic text: <<$npcdesc>> climbs up in front of you, bending his head towards your breasts.
          scene.text(`${((s as any).npcdesc ?? 0)} climbs up in front of you, bending his head towards your breasts.`);
          scene.actions([
            { label: 'Continue', goto: ['sex_ev_foreplay', 'nipple_play'] },
          ]);
        }
      } else {
        scene.text('Moments later, you feel his tongue on your clit.');
        scene.actions([
          { label: 'Get eaten out', goto: ['sex_ev_foreplay', 'pussy_lick_start'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniLegClose(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).kuni_no ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.text('"Woah!" you say with wide eyes, snapping your legs closed.');
    // TODO-QSP: dynamic text: "What?" <<$npcdesc>> looks up at you confused.
    scene.text(`"What?" ${((s as any).npcdesc ?? 0)} looks up at you confused.`);
    if (((s as any).sex_ev ?? 0)?.['cuni_orgasm'] >= 3) {
      scene.actions([
        { label: 'Too sensitive', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sensitive_cuni'] = 1;
    scene.text('"You\'ve eaten me out too many times today already," you say with a wry smile. "My pussy is too sensitive to let you down there again."');
    // TODO-QSP: dynamic text: "Oh. Well..." <<$npcdesc>> smirks back at you smugly.
    scene.text(`"Oh. Well..." ${((s as any).npcdesc ?? 0)} smirks back at you smugly.`);
    qspCall(s, 'sex_ev_foreplay', 'cuni_alternatives');
  } },
      ]);
    }
    scene.actions([
      { label: 'Too personal', handler: (st: GameState) => {
    ((s as any).kuni_no ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['kuni_no'] = 1;
    qspCall(s, 'sex_ev_foreplay_desc', 'kuni_deny1');
    if (((s as any).npc_pushy ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"Just trust me," he smiles, and starts moving back down between your legs.');
      scene.actions([
        { label: 'Stop him', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hey!" you snap, nearly kneeing him in the head to keep him away from your pussy. "I said I don\'t want to!"');
    scene.text('"Fine," he sighs. "What do you want to do instead then?"');
  }, goto: ['sex_ev_foreplay', 'cuni_alternatives'] },
        { label: 'Let it happen', goto: ['sex_ev_foreplay', 'pussy_lick_start'] },
      ]);
    } else {
      scene.text('"Oh. Well..."');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_foreplay', 'cuni_alternatives'] }]);
    }
  } },
    ]);
  } else {
    if (((s as any).kuni_no ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay_desc', 'kuni_deny2');
      qspCall(s, 'sex_ev_foreplay', 'cuni_alternatives');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCuniAlternatives(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_no_kiss ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'We could just make out?', handler: (st: GameState) => {
    scene.text('"Can we just... make out?" you ask.');
    scene.text('"That sounds good," he smiles back.');
    scene.actions([
      { label: 'Make out with him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'makeout_dom1'
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    qspCall(s, 'sex_ev_virgin', 'start2');
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.actions([
        { label: 'We could just skip to fucking?', handler: (st: GameState) => {
    scene.text('"We could just get right to fucking?"');
    scene.text('"That sounds good."');
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    qspCall(s, 'sex_ev_condoms', 'condoms');
    qspCall(s, 'sex_ev_sex', 'position_change');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'We could fuck again?', handler: (st: GameState) => {
    scene.text('"How about you just fuck me again?" you ask.');
    scene.text('"That sounds good."');
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    qspCall(s, 'sex_ev_condoms', 'condoms');
    qspCall(s, 'sex_ev_sex', 'position_change');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You could play with my tits?', handler: (st: GameState) => {
    scene.text('"You could play with my tits instead?" you say.');
    scene.text('"That sounds like fun," he smiles back.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'nipple_play'] },
    ]);
  } },
    { label: 'I could suck your cock?', handler: (st: GameState) => {
    scene.text('"Maybe... I could suck your cock instead?" you say, a mischievous smirk on your face.');
    scene.text('"That could be nice," he smiles, leaning back.');
    scene.actions([
      { label: 'Play with his cock (mouth)', goto: ['sex_ev_foreplay', 'blowjob_tease_dom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPeriodLick(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kuni/pussylick4.mp4');
  // TODO-QSP: gs 'arousal', 'cuni',rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: gs 'arousal', 'cuni',-10, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  ((s as any).sex_ev ?? {})['position'] = 'kuni';
  // TODO-QSP: dynamic text: You lay back on the bed, letting your eyes roll back in your skull. Blood and pu...
  scene.text(`You lay back on the bed, letting your eyes roll back in your skull. Blood and pussy juice flow like water from your cunt and ${((s as any).npcdesc ?? 0)} laps it up like ambrosia. It feels <i>so</i> good and you relax while he goes to work on you down there.`);
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/pussylickorgasm2.mp4');
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    // TODO-QSP: dynamic text: It doesn't take long before you're buckling under <<$npcdesc>>'s tongue, squirmi...
    scene.text(`It doesn't take long before you're buckling under ${((s as any).npcdesc ?? 0)}'s tongue, squirming in orgasm as he continues teasing, sucking, playing with your clit. You groan a loud ragged breath as you come hard beneath his touch.`);
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay', 'pussy_lick_loop');
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        qspCall(s, 'sex_ev_foreplay', 'transition1');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Don\'t stop!', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'cuni',rand(1, 2), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kuni/pussylickorgasm2.mp4');
    scene.text('"Don\'t stop!" you cry.');
    scene.text('You\'re so close~! You\'re right there~! Any second now~!');
    scene.text('"Don\'t stop! Don\'t stop! Don\'t stop! Don\'t stop! Don\'t-!"');
    scene.text('<i>There!</i>');
    scene.text('You let out an explosive groan as your orgasm smashes through you. Your body is so tight, you can\'t even find the strength in you to fill your lungs, clenching your teeth and forced to hold your breath until your climax has finished its crescendo.');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay', 'pussy_lick_loop');
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        qspCall(s, 'sex_ev_foreplay', 'transition1');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyLickStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/kuni/pussylick1.mp4');
  // TODO-QSP: gs 'arousal', 'cuni',rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  ((s as any).sex_ev ?? {})['position'] = 'kuni';
  ((s as any).sex_ev ?? {})['cuni_count'] = (((s as any).sex_ev ?? {})['cuni_count'] ?? 0) + (1);
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    ((s as any).sex_ev ?? {})['creampie_eat'] = (((s as any).sex_ev ?? {})['creampie_eat'] ?? 0) + (1);
    (s as any).cumspclnt = 0;
    qspCall(s, 'cum_cleanup', '');
    // TODO-QSP: dynamic text: You lay back on the bed and let <<$npcdesc>>'s tongue explore your pussy. It pla...
    scene.text(`You lay back on the bed and let ${((s as any).npcdesc ?? 0)}'s tongue explore your pussy. It playfully flicks across your clit, making you squirm. It runs up the lips of your snatch and you can feel ${((s as any).npcdesc ?? 0)} slurping up the load he deposited inside you, sending shivers through your spine. Every once in a while, he licks the side of your thigh, prompting ticklish giggles. It feels <i>so</i> good and you relax while he goes to work on you down there.`);
  } else {
    // TODO-QSP: dynamic text: You lay back on the bed, closing your eyes, letting them roll back in your skull...
    scene.text(`You lay back on the bed, closing your eyes, letting them roll back in your skull, and focus on the sensation of ${((s as any).npcdesc ?? 0)}'s tongue exploring your pussy. It playfully flicks across your clit, making you squirm. It runs up the lips of your snatch, sending shivers through your spine. Every once in a while, he licks the side of your thigh, prompting ticklish giggles. It feels <i>so</i> good and you relax while he goes to work on you down there.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'pussy_lick_continue');
  // TODO-QSP: end
  scene.build();
}

function enterPussyLickReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
    ((s as any).sex_ev ?? {})['creampie_eat'] = (((s as any).sex_ev ?? {})['creampie_eat'] ?? 0) + (1);
    (s as any).cumspclnt = 0;
    qspCall(s, 'cum_cleanup', '');
    // TODO-QSP: dynamic text: You lay back on the bed, closing your eyes, letting them roll back in your skull...
    scene.text(`You lay back on the bed, closing your eyes, letting them roll back in your skull, and focus on the sensation of ${((s as any).npcdesc ?? 0)}'s tongue exploring your pussy. It playfully flicks across your clit, making you squirm. It runs up the lips of your snatch and you can feel ${((s as any).npcdesc ?? 0)} slurping up the load he deposited inside you, sending shivers through your spine. Every once in a while, he licks the side of your thigh, prompting ticklish giggles. It feels <i>so</i> good and you relax while he goes to work on you down there.`);
  } else {
    // TODO-QSP: dynamic text: You lay back on the bed, closing your eyes, letting them roll back in your skull...
    scene.text(`You lay back on the bed, closing your eyes, letting them roll back in your skull, and focus on the sensation of ${((s as any).npcdesc ?? 0)}'s tongue exploring your pussy. It playfully flicks across your clit, making you squirm. It runs up the lips of your snatch, sending shivers through your spine. Every once in a while, he licks the side of your thigh, prompting ticklish giggles. It feels <i>so</i> good and you relax while he goes to work on you down there.`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyLickContinue(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.actions([
      { label: 'Orgasm', handler: (st: GameState) => {
    scene.img('images/shared/sex/kuni/pussylickorgasm2.mp4');
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['cuni_orgasm'] = (((s as any).sex_ev ?? {})['cuni_orgasm'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    // TODO-QSP: dynamic text: It doesn't take long before you're buckling under <<$npcdesc>>'s tongue, squirmi...
    scene.text(`It doesn't take long before you're buckling under ${((s as any).npcdesc ?? 0)}'s tongue, squirming in orgasm as he continues teasing, sucking, playing with your clit. You groan a loud ragged breath as you come hard beneath his touch.`);
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay', 'pussy_lick_loop');
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        qspCall(s, 'sex_ev_foreplay', 'transition1');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Don\'t stop!', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'cuni',rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/kuni/pussylickorgasm2.mp4');
    scene.text('"Don\'t stop!" you cry.');
    scene.text('You\'re so close! You\'re right there! Any second now you-!');
    scene.text('"Don\'t stop! Don\'t stop! Don\'t stop! Don\'t stop! Don\'t-!"');
    scene.text('<i>There!</i>');
    scene.text('You let out an explosive moan as your orgasm smashes through you. Your body is so tight, you can\'t even find the strength in you to fill your lungs, clenching your teeth and forced to hold your breath until your climax has finished its crescendo.');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      qspCall(s, 'sex_ev_foreplay', 'pussy_lick_loop');
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        qspCall(s, 'sex_ev_foreplay', 'transition1');
      } else {
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPussyLickLoop(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cuni_count'] = (((s as any).sex_ev ?? {})['cuni_count'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] === 0) {
    // TODO-QSP: dynamic text: But <<$npcdesc>> is relentless. Even as your climax winds down, he doesn't stop,...
    scene.text(`But ${((s as any).npcdesc ?? 0)} is relentless. Even as your climax winds down, he doesn't stop, continuing to eat you out.`);
  }
  if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] < 4) {
    if (((s as any).sex_ev ?? 0)?.['no_sex'] !== 1) {
      scene.actions([
        { label: 'Stop him (let\'s fuck)', handler: (st: GameState) => {
    (s as any).pcs_horny = 60;
    ((s as any).sex_ev ?? {})['consecutive_cuni_orgasm'] = 0;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('He tries to dive right back in but you put your hand on his head and push him away from your pussy.');
    scene.text('"Wait, stop!" He looks up at you with curiosity.');
    scene.text('"This isn\'t the only thing I want to do today," you say.');
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Come again', handler: (st: GameState) => {
    (s as any).pcs_horny = 90;
    // TODO-QSP: gs 'arousal', 'cuni',rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['consecutive_cuni_orgasm'] = (((s as any).sex_ev ?? {})['consecutive_cuni_orgasm'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['cuni_orgasm'] = (((s as any).sex_ev ?? {})['cuni_orgasm'] ?? 0) + (1);
    scene.img('images/shared/sex/kuni/pussylickorgasm2.mp4');
    if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] === 1) {
      scene.text('"OH FUCK!" you cry, exploding in climax again off the back of your previous orgasm. But apparently two in a row still isn\'t enough for him as he continues on, still eating you out.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] === 2) {
        scene.text('The third orgasm happens before you even finish spasming from the second.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] === 3) {
          scene.text('The fourth orgasm reduces you to a quivering mess.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] === 4) {
            scene.text('The fifth leaves you hyperventilating, raggedly gasping for breath and as his tongue touches your pussy again, it\'s so sensitive that it <i>hurts</i>.');
          }
        }
      }
    }
    qspCall(s, 'sex_ev_foreplay', 'pussy_lick_loop');
  } },
    ]);
  }
  qspCall(s, 'sex_ev_foreplay', 'cuni_too_sensitive');
  qspCall(s, 'sex_ev_sex', 'sex_start');
  // TODO-QSP: end
  scene.build();
}

function enterCuniTooSensitive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop him (too sensitive)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sensitive_cuni'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Stop! Stop! Stop!" you cry desperately, pushing his head away and snapping your legs closed, your entire body writhing uncontrollably on the bed as orgasmic tremors continue to quake through you. "I can\'t take it anymore!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks up at you, wet lips pulled back in a grin. You look at him fr...
    scene.text(`${((s as any).npcdesc ?? 0)} looks up at you, wet lips pulled back in a grin. You look at him from the corner of your eye, face half buried in the sheets, breathing hard as he stands up. You can see he's still as hard as a rock, but something about his expression says to you that he got off on this anyway.`);
    scene.actions([
      { label: 'Give me a minute', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Give me a minute..." you pant. "And we can do something else..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> waits patiently for you, a satisfied looking smirk on his face.
    scene.text(`${((s as any).npcdesc ?? 0)} waits patiently for you, a satisfied looking smirk on his face.`);
    scene.text('"Oh fuck you," you say.');
    scene.text('"Ready and waiting for it," he says back, still smirking.');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
      { label: 'I\'m done', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m done," you say, taking ragged breaths. "I\'m shattered... I can\'t keep going after that..."');
    qspCall(s, 'sex_ev_after', 'after_sex1');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNipplePlay(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/nipple_play1.mp4');
  // TODO-QSP: gs 'arousal', 'foreplay',rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  ((s as any).sex_ev ?? {})['position'] = 'nipple_play';
  // TODO-QSP: dynamic text: <<$npcdesc>> leans forward, grabbing ahold of your breasts with his hands and us...
  scene.text(`${((s as any).npcdesc ?? 0)} leans forward, grabbing ahold of your breasts with his hands and uses his mouth on your nipples. He sucks them up, flicks at the tips with his tongue, sending electricity flying through them. Heat spreads through your hips and you can feel wetness pooling between your thighs.`);
  if ((Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).kuni_no ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  (((s as any).mesec ?? 0) === 0  ||  ((s as any).npc_pussyeater_know ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).sex_ev ?? 0)?.['sensitive_cuni'] !== 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> pulls back from your chest and pushes you down...
    scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} pulls back from your chest and pushes you down, beginning to move between your legs to eat you out.`);
    qspCall(s, 'sex_ev_foreplay', 'kuni_start_acts');
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_locked'] === 0) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss2.jpg');
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> pulls back from your chest and pushes you down...
    scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} pulls back from your chest and pushes you down, spreading your legs.`);
    ((s as any).sex_ev ?? {})['position'] = 'miss';
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.actions([
        { label: 'Stop him (virgin)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['position'] = 'miss'
  }, goto: ['sex_ev_virgin', 'lover_wait'] },
        { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom'] !== 0  ||  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 0) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_miss', 'miss_goto'] }]);
      } else {
        qspCall(s, 'sex_ev_condoms', 'condoms');
      }
    }
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npcdesc>> breathes in your ear. "I want to feel your mou...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npcdesc ?? 0)} breathes in your ear. "I want to feel your mouth on my cock..."`);
      // TODO-QSP: dynamic text: Before you know it, your head is being pushed down between <<$npcdesc>>'s thighs...
      scene.text(`Before you know it, your head is being pushed down between ${((s as any).npcdesc ?? 0)}'s thighs and his ${((s as any).npc_dick_desc ?? 0)?.[String((s as any).npcID ?? 0)]} cock is pushed into your mouth.`);
      scene.actions([
        { label: 'Suck', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "How about a blowjob?" <<$npcdesc>> asks.
  scene.text(`"How about a blowjob?" ${((s as any).npcdesc ?? 0)} asks.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_ask2');
  // TODO-QSP: end
  scene.build();
}

function enterBjAsk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['think_virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Fuck instead?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Hmmm... I couuuuld..." you hum, pretending to think before breaking into a wide grin. "Or we could just fuck again?"');
    } else {
      scene.text('"Hmmm... I couuuuld..." you hum, pretending to think before breaking into a wide grin. "Or we could just fuck?"');
    }
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'doggy') {
      // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> jumps you, eliciting uncont...
      scene.text(`Your eyes meet for just a moment before ${((s as any).npcdesc ?? 0)} jumps you, eliciting uncontrollable giggles as he flips you onto your knees and plunges into your pussy.`);
      scene.actions([
        { label: 'Get fucked', goto: ['sex_ev_doggy', 'doggy_goto2'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: Your eyes meet for just a moment before <<$npcdesc>> jumps you, eliciting uncont...
      scene.text(`Your eyes meet for just a moment before ${((s as any).npcdesc ?? 0)} jumps you, eliciting uncontrollable giggles as he forces your legs apart and plunges into your pussy.`);
      scene.actions([
        { label: 'Get fucked', goto: ['sex_ev_miss', 'miss_goto2'] },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['scrunchies'] > 0  &&  ((s as any).hscrunchw ?? 0) === 0  &&  ((s as any).pcs_hairlng ?? 0) > 80) {
    scene.actions([
      { label: 'Let me put my hair up', handler: (st: GameState) => {
    (s as any).hscrunchw = 1;
    if (((s as any).sex_ev ?? 0)?.['bj_count'] === 0) {
      ((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] = (((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
        ((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] = (((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
      }
    }
    scene.text('"Okay," you say. "Just let me put my hair up first."');
    if (qspFunc(s, 'pcs_has_attr', 'hairband_arm')) {
      scene.text('Using one hand to pull your hair back, you use your other hand to pull one of the hairbands you keep on your wrists and twist it around, letting it snap tight into an expertly tied ponytail.');
      scene.actions([
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
        { label: '"I keep these for blowjobs"', handler: (st: GameState) => {
    ((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] = (((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
      ((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] = (((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    }
    // TODO-QSP: dynamic text: "I carry these just for blowjobs you know," you add teasingly as you descend you...
    scene.text(`"I carry these just for blowjobs you know," you add teasingly as you descend your lips down onto ${((s as any).npcdesc ?? 0)}'s cock.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
      ]);
    } else {
      scene.text('You grab a hairband from your bag and pull the hair out of your face, letting the elastic snap tight to leave you with a neat ponytail.');
      scene.actions([
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
        { label: '"I keep these for blowjobs"', handler: (st: GameState) => {
    ((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] = (((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
      ((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] = (((s as any).ponytail_bj_train ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (1);
    }
    // TODO-QSP: dynamic text: "I always carry some hair bands in case of blowjobs," you add teasingly as you d...
    scene.text(`"I always carry some hair bands in case of blowjobs," you add teasingly as you descend your lips down onto ${((s as any).npcdesc ?? 0)}'s cock.`);
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Reluctant', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reluctant_bj'] = 1;
    scene.text('"Ugh, fiiine..." you sigh and crawl down between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
    { label: 'Reluctant (joking)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reluctant_bj'] = 1;
    scene.text('"Ugh, fiiine! If I really have to..." you mock sigh, but not without flashing a wide grin before crawling down between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
    { label: 'Okay', handler: (st: GameState) => {
    scene.text('"Okay," you smile and crawl down between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
    { label: 'Love to', handler: (st: GameState) => {
    scene.text('"I\'d love to," you grin, licking your lips and getting some saliva going.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjSub1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bj_count'] = (((s as any).sex_ev ?? {})['bj_count'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['bj_type'] = 'sub';
  // TODO-QSP: gs 'arousal', 'bj',rand(2,7), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  if (((s as any).sex_ev ?? 0)?.['reluctant_bj'] === 1) {
    scene.img('images/shared/sex/blowjob/bj46.mp4');
    scene.text('You grumble internally but get to work anyway, spending a few minutes bobbing your head up and down on his cock. You weren\'t really in the mood to begin with, so you get bored quickly, but hopefully he\'ll want to do something else soon.');
  } else {
    scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 5) + 46}.mp4`);
    // TODO-QSP: dynamic text: You lean forward and take him in your mouth, gently sucking his cock. He tastes ...
    scene.text(`You lean forward and take him in your mouth, gently sucking his cock. He tastes of sweat and musk and the scent of it fills your nostrils as you bob your head up and down, doing your best to make ${((s as any).npcdesc ?? 0)} feel good.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjSub1Continue(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep blowing <<$npcdesc>>', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
    scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 5) + 46}.mp4`);
    // TODO-QSP: dynamic text: You keep blowing <<$npcdesc>>, working his cock with your lips and his shaft wit...
    scene.text(`You keep blowing ${((s as any).npcdesc ?? 0)}, working his cock with your lips and his shaft with your hand, making sure to add in lots of tongue and drool even more spit.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_sort');
  } },
    { label: 'Pull back (sex)', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj3.mp4');
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('You pull your mouth off his cock with a pop.');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('"Did you want to keep doing this or do you want to fuck now?" you ask while jerking him gently.');
    } else {
      scene.text('"Did you want to keep doing this or do you want to fuck again?" you ask while jerking him gently.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
  ]);
  scene.build();
}

function enterBjSub2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bj_count'] = (((s as any).sex_ev ?? {})['bj_count'] ?? 0) + (1);
  // TODO-QSP: gs 'arousal', 'bj',rand(2,7), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bj52.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> slowly pumps his cock in and out of your mouth, plunging it all the...
  scene.text(`${((s as any).npcdesc ?? 0)} slowly pumps his cock in and out of your mouth, plunging it all the way down your throat where you can feel it press against your windpipe. You keep it loose while he does all the work, occasionally letting your tongue snake out for a cheeky lick, but otherwise just let ${((s as any).npcdesc ?? 0)} keep fucking your face.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjSubCumSurprise(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/gag3.mp4');
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    ((s as any).sex_ev ?? {})['cum_mouth_surprise'] = 1;
    if (((s as any).pcs_throat ?? 0) <= 10) {
      // TODO-QSP: dynamic text: Without any warning <<$npcdesc>> grabs your head and shoves it down to the base ...
      scene.text(`Without any warning ${((s as any).npcdesc ?? 0)} grabs your head and shoves it down to the base of his cock. It stretches your jaw wide, making you gag reflexively, and just as you're about to protest, something spurts out into your throat.`);
    } else {
      // TODO-QSP: dynamic text: Without any warning <<$npcdesc>> grabs your head and shoves it down to the base ...
      scene.text(`Without any warning ${((s as any).npcdesc ?? 0)} grabs your head and shoves it down to the base of his cock. You've sucked enough dick that it doesn't cause any real problems for you, though a little warning would have been nice. And then something spurts directly into the back of your throat.`);
    }
    scene.actions([
      { label: 'Take it in stride (swallow)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['bj_cum'] = 1;
    ((s as any).sex_ev ?? {})['swallow'] = 1;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/swallow5.mp4');
    // TODO-QSP: dynamic text: You hum in surprise, but take it in stride anyway, continuing to suck as <<$npcd...
    scene.text(`You hum in surprise, but take it in stride anyway, continuing to suck as ${((s as any).npcdesc ?? 0)} comes right down your throat. You swallow it all as best you can until his hips stop bucking beneath you and you slowly pull away, gulping one last time to get the last drops.`);
    qspCall(s, 'sex_ev_reactions', 'bj_warning_next_time');
    qspCall(s, 'sex_ev_reactions', 'bj_tasty');
    qspCall(s, 'sex_ev_reactions', 'bj_already');
  } },
      { label: 'Take it in stride (spit)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['bj_cum'] = 2;
    ((s as any).sex_ev ?? {})['spit'] = 1;
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/spit6.mp4');
    // TODO-QSP: dynamic text: You hum in surprise, but take it in stride anyway, continuing to suck as <<$npcd...
    scene.text(`You hum in surprise, but take it in stride anyway, continuing to suck as ${((s as any).npcdesc ?? 0)} straight into the back of your throat. You carefully let it pool there, waiting until his hips stop bucking beneath you. When he finally stops, you gather it to the front of your mouth and spit it out, letting it spill past your lips and all over ${((s as any).npcdesc ?? 0)}'s dick.`);
    qspCall(s, 'sex_ev_reactions', 'bj_warning_next_time');
    qspCall(s, 'sex_ev_reactions', 'bj_already');
  } },
      { label: 'Gag', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['bj_cum'] = 4;
    ((s as any).sex_ev ?? {})['gag'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/spit3.mp4');
    // TODO-QSP: dynamic text: The moment the cum touches your throat, you gag. Your eyes water and you cough i...
    scene.text(`The moment the cum touches your throat, you gag. Your eyes water and you cough involuntarily, mouth explosively erupting with cum and spilling all over ${((s as any).npcdesc ?? 0)}'s cock and the floor.`);
    qspCall(s, 'sex_ev_reactions', 'bj_warning_next_time');
    scene.actions([
      { label: 'Sorry', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m sorry," you wheeze, eyes stinging with tears as you try to clear your throat. "It was... I\'ll do better next time."');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).npc_bj_cum_warn ?? {})[String((s as any).npcID ?? 0)] = 1;
      // TODO-QSP: dynamic text: "No, no!" <<$npcdesc>> says hurriedly. "It's my fault. I should have warned you....
      scene.text(`"No, no!" ${((s as any).npcdesc ?? 0)} says hurriedly. "It's my fault. I should have warned you. You were just so good, I couldn't hold back. I'll be more careful next time."`);
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> raises you by the chin, tilting your head back to look into your ey...
        scene.text(`${((s as any).npcdesc ?? 0)} raises you by the chin, tilting your head back to look into your eyes.`);
        scene.text('"So that means you\'ll swallow it all next time, right?"');
        scene.actions([
          { label: 'I\'ll try', handler: (st: GameState) => {
    scene.text('"I\'ll do my best," you say.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
          { label: 'Nod', handler: (st: GameState) => {
    scene.text('Holding his gaze, you simply nod once.');
    scene.text('"You promise?"');
    scene.text('"Yes."');
    scene.text('"Say it."');
    scene.text('"I promise, I\'ll swallow it all next time."');
    scene.text('"Good girl."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        ]);
      } else {
        scene.text('"I\'m looking forward to it," he grins.');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjSubCumWhere(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Where do you want to cum?', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    // TODO-QSP: dynamic text: You pull your lips off <<$npcdesc>>'s cock with a pop.
    scene.text(`You pull your lips off ${((s as any).npcdesc ?? 0)}'s cock with a pop.`);
    // TODO-QSP: dynamic text: "Where do want to come <<$npc_lovername[$npcID]>>?" you ask. You can feel him th...
    scene.text(`"Where do want to come ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}?" you ask. You can feel him throbbing in your hand. He's right at the edge, kept there with your constant teasing, smattering of kisses and licks.`);
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial') {
      scene.text('"Let me come on your face!" he grunts in a strained voice, clearly on the verge of exploding.');
      qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face1.2');
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
        scene.text('"Let me come on your tits!" he grunts in a strained voice, clearly on the verge of exploding.');
        qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits1.2');
      } else {
        scene.text('"Let me come in your mouth!" he grunts in a strained voice, clearly on the verge of exploding.');
        qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth1.2');
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjSubCumHand(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish him with your hand', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['last_cum'] = 'hand';
    ((s as any).sex_ev ?? {})['cum_hand'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/handjob/hand0,1.mp4');
    if (((s as any).sex_ev ?? 0)?.['bj_cum'] !== 3) {
      scene.text('Removing his cock from your mouth, you instead kneel in front of him and work his cock with your hand. Moments later cum erupts from the tip, spraying into the air and dribbling back down his shaft and through your fingers.');
    } else {
      scene.text('Removing his cock from your mouth, you kneel in front of him and work his cock with your hand until cum erupts from the tip, spraying into the air and dribbling back down his shaft and through your fingers.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
    qspCall(s, 'sex_ev_after', 'wipe_hands');
  } },
  ]);
  scene.build();
}

function enterBjSubCumMouth1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['he_ask_mouth'] = 1;
  ((s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
  // TODO-QSP: dynamic text: After a few minutes, <<$npcdesc>> taps you on the head.
  scene.text(`After a few minutes, ${((s as any).npcdesc ?? 0)} taps you on the head.`);
  scene.text('"I\'m gonna- <i>nngh-!</i> Can I cum in your mouth?"');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth1.2');
  // TODO-QSP: end
  scene.build();
}

function enterBjSubCumMouth1_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_gag');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face3');
  // TODO-QSP: end
  scene.actions([
    { label: 'Why?', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('You let his cock pop out of your mouth for a moment, giving him a quizzical look.');
    scene.text('"And, why would I let you do that?" you ask, continuing to relentlessly tease him with your mouth.');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Because I want you to," he responds simply, like that\'s the only reason you should ever need.');
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    if (((s as any).npc_abusive ?? 0) > 0) {
      qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_mouth');
    } else {
      scene.text('"No thanks," you smile, deciding to finish him in your own way instead...');
      qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_hand');
      qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face3');
      qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits2');
    }
  } },
        { label: 'Ugh, fine', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    scene.text('"Ugh, fine," you roll your eyes. "Just because you asked, okay?"');
    scene.text('With that, you lower your lips back down to his cock and keep going til he blows.');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_swallow');
  } },
      ]);
    } else {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('"Oh. Well I just... I thought... uhh... Sorry. It\'s a dumb idea isn\'t it?"');
      } else {
        scene.text('"Because it\'s hot?" he says, looking at you expectantly.');
      }
    }
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face3');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_hand');
    scene.actions([
      { label: 'Couldn\'t hurt', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/deep1.mp4');
    // TODO-QSP: dynamic text: "Well, it couldn't hurt I suppose..." you smile and plunge your lips all the way...
    scene.text(`"Well, it couldn't hurt I suppose..." you smile and plunge your lips all the way down to the base of ${((s as any).npcdesc ?? 0)}'s shaft. He blows his load moments later.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_swallow');
  } },
      { label: 'Just wondered (let him)', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/mouth/deep1.mp4');
    // TODO-QSP: dynamic text: "Just wondered if you actually had a reason," you smile. With that, you give him...
    scene.text(`"Just wondered if you actually had a reason," you smile. With that, you give him a few sudden and furious jerks before plunging your head all the way to the base of ${((s as any).npcdesc ?? 0)}'s cock and cum explodes inside your mouth.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_swallow');
  } },
      { label: 'How about my tits instead?', handler: (st: GameState) => {
    scene.text('"How about I let you cum on my tits instead?" you smile enticingly.');
    scene.text('"That sounds like it would be pretty hot," he says and you scooch forward, presenting your chest for him.');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits2');
  } },
    ]);
  } },
    { label: 'Reluctantly let him', handler: (st: GameState) => {
    scene.text('"Mmmrrrm mmm mmmmph~!" You grumble unintelligibly around his cock but keep sucking anyway. Not exactly your ideal way to finish, but if it\'s what he wants...');
    scene.text('About two seconds later, thick salty liquid explodes into your mouth.');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_swallow');
  } },
    { label: 'Let him', handler: (st: GameState) => {
    scene.text('"Mmhmmm~!" You hum a vague noise of approval around his cock and keep sucking. About two seconds later, thick salty liquid explodes into your mouth.');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_swallow');
  } },
    { label: 'How about my tits instead?', handler: (st: GameState) => {
    scene.text('"How about I let you cum on my tits instead?" you smile enticingly.');
    scene.text('"That sounds like it would be pretty hot," he says and you scooch forward, presenting your chest for him.');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits2');
  } },
  ]);
  scene.build();
}

function enterBjSubCumMouth2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him come in your mouth', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_mouth'] = 1;
    ((s as any).sex_ev ?? {})['swallow'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev ?? {})['cum_choice'] = 'swallow';
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/deep1.mp4');
    scene.text('With a mischievous grin, you work his cock with your hand, building up his climax right to the edge. You can tell just by the expression on his face and the swelling of flesh in your hand that he\'s about to blow. At that moment, you plunge your lips straight down to the base of his cock, right as he explodes inside your mouth.');
    qspCall(s, 'sex_ev_reactions', 'bj_warning_thanks');
    qspCall(s, 'sex_ev_reactions', 'bj_tasty');
    qspCall(s, 'sex_ev_reactions', 'bj_swallow_gross');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
  } },
  ]);
  scene.build();
}

function enterBjSubCumMouthSpit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Spit', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_mouth'] = 1;
    ((s as any).sex_ev ?? {})['spit'] = 1;
    ((s as any).sex_ev ?? {})['swallow'] = 0;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/spit6.mp4');
    scene.text('After a few moments, you let the cum pool to the front of your mouth and you draw yourself back up his shaft and release it from your lips, cum immediately spilling over the edge and down his cock.');
    if (((s as any).sex_ev ?? 0)?.['bj_cum_choice'] > 2) {
      qspCall(s, 'sex_ev_reactions', 'bj_warning_thanks');
    }
    if (((s as any).sex_ev ?? 0)?.['cum_mouth_surprise'] === 1) {
      qspCall(s, 'sex_ev_reactions', 'bj_already');
    }
    qspCall(s, 'sex_ev_reactions', 'bj_spit_gross');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjSubCumMouthGag(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him (and gag)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_mouth'] = 1;
    ((s as any).sex_ev ?? {})['gag'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/yuck2.mp4');
    scene.text('"Okay," you smile and stick out your tongue. The first spurt of cum lands on your tongue and you are immediately hit with a wave of primal, uncontrollable <i>revulsion</i>. You immediately spit it out, letting it dribble over your lips and open your mouth back up again, trying to power through. But even as you stick your tongue back out for the next spurt, the nausea overwhelms you and you pull back and gag, retching semen and saliva all over the floor.');
    scene.text('"Oh <i>fuck!</i>" you grimace, tears in your eyes, hand to your mouth, desperately trying to avoid throwing up. "That was... Ugh! Don\'t ever ask me to do that again!"');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterBjSubCumMouthSwallow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Swallow', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['swallow_count'] = (((s as any).sex_ev ?? {})['swallow_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    ((s as any).sex_ev ?? {})['swallow'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/swallow4.mp4');
    // TODO-QSP: dynamic text: Cum spurts into your throat and you carefully push your lips down <<$npcdesc>>'s...
    scene.text(`Cum spurts into your throat and you carefully push your lips down ${((s as any).npcdesc ?? 0)}'s shaft and pull back up, forcing a loud groan from his lips as you try to draw every last bit of sperm from inside him.`);
    // TODO-QSP: dynamic text: You struggle to keep the salty liquid from spilling past your lips but manage to...
    scene.text(`You struggle to keep the salty liquid from spilling past your lips but manage to all the way back up to his tip losing only a single drop along the way. And then, without removing your lips, you swallow the entire load in one gulp with a satisfied, "<i>Ahhh,</i>" smiling up at ${((s as any).npcdesc ?? 0)}.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'Swallow (gross)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['swallow_count'] = (((s as any).sex_ev ?? {})['swallow_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    ((s as any).sex_ev ?? {})['swallow'] = 1;
    ((s as any).sex_ev ?? {})['react'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/yuck1.mp4');
    // TODO-QSP: dynamic text: Thick, salty sperm sprays into your mouth and you can't help but feel just a lit...
    scene.text(`Thick, salty sperm sprays into your mouth and you can't help but feel just a little bit nauseous even as you continue to suck out more cum from ${((s as any).npcdesc ?? 0)}'s cock. But you power through regardless, and with a grimace of deep disgust, you force it down, swallowing the entire load.`);
    if (((s as any).sex_ev ?? 0)?.['swallow_count'] > 1) {
      scene.text('"<i>Yeech</i>!" you wince. "I\'m never going to get used to that!"');
      // TODO-QSP: dynamic text: "But you still keep doing it anyway," <<$npcdesc>> smirks.
      scene.text(`"But you still keep doing it anyway," ${((s as any).npcdesc ?? 0)} smirks.`);
      scene.text('"Yeah, yeah, shut up," you say, rolling your eyes and sticking out your tongue, trying to air it out.');
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      scene.text('"<i>Blech</i>!" you shudder. "That\'s awful!"');
      if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'face') {
        // TODO-QSP: dynamic text: "If you hate swallowing so much, then why didn't you just let me cum on your fac...
        scene.text(`"If you hate swallowing so much, then why didn't you just let me cum on your face like I wanted to?" ${((s as any).npcdesc ?? 0)} asks quizzically.`);
        qspCall(s, 'sex_ev_reactions', 'cum_mouth_swallow_why');
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'tits') {
          // TODO-QSP: dynamic text: "If you hate swallowing so much, then why didn't you just let me cum on your tit...
          scene.text(`"If you hate swallowing so much, then why didn't you just let me cum on your tits?" ${((s as any).npcdesc ?? 0)} asks quizzically.`);
          qspCall(s, 'sex_ev_reactions', 'cum_mouth_swallow_why');
        } else {
          // TODO-QSP: dynamic text: "Then why'd you do it?" <<$npcdesc>> asks, a dumbfounded look on his face.
          scene.text(`"Then why'd you do it?" ${((s as any).npcdesc ?? 0)} asks, a dumbfounded look on his face.`);
          qspCall(s, 'sex_ev_reactions', 'cum_mouth_swallow_why');
          qspCall(s, 'sex_ev_reactions', 'bj_swallow_gross2');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjSubCumFace1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['he_ask_facial'] = 1;
  ((s as any).sex_ev ?? {})['cum_choice'] = 'face';
  // TODO-QSP: dynamic text: Within a few minutes, <<$npcdesc>> taps you on the head."
  scene.text(`Within a few minutes, ${((s as any).npcdesc ?? 0)} taps you on the head."`);
  // TODO-QSP: dynamic text: "<i>Ngh-!</i> <<$pcs_nickname>>-! Can I come on your face? You'd look so hot."
  scene.text(`"<i>Ngh-!</i> ${((s as any).pcs_nickname ?? 0)}-! Can I come on your face? You'd look so hot."`);
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face1.2');
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    scene.text('"Nuh uh," you pop off his cock, giving him a disgusted look. "There\'s no <i>way</i> I\'m letting your spray that all over my face."');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_hand');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits2');
    scene.actions([
      { label: 'How about my mouth instead?', handler: (st: GameState) => {
    scene.text('"How about my mouth?" you smile. "Don\'t you want to just pump it straight down my throat instead?"');
    // TODO-QSP: dynamic text: <<$npcdesc>>'s face turns to a hungry expression. "Well, when you put it like th...
    scene.text(`${((s as any).npcdesc ?? 0)}'s face turns to a hungry expression. "Well, when you put it like that..."`);
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth2');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjSubCumFace1_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him (gross)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_face'] = 1;
    ((s as any).sex_ev ?? {})['last_cum'] = 'facial';
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    // TODO-QSP: dynamic text: "Alright," you sigh. <<$npcdesc>> eagerly sits up positioning himself over you.
    scene.text(`"Alright," you sigh. ${((s as any).npcdesc ?? 0)} eagerly sits up positioning himself over you.`);
    scene.text('You close your eyes right before something warm, wet, and slimy spatters across your face. You flinch at the impact and your expression turns into a grimace as it piles up, slowly dripping down your cheeks.');
    scene.text('"Ugh! That\'s fucking disgusting!" you whine. "I can\'t believe I let you talk me into this."');
    scene.text('"You look great though." You can\'t see him with the cum gluing your eyelids shut, but you\'re pretty sure he\'s wearing a grin you would slap him for.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    qspCall(s, 'sex_ev_after', 'wipe_face');
  } },
    { label: 'Let him (passive)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_face'] = 1;
    ((s as any).sex_ev ?? {})['last_cum'] = 'facial';
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial0,3.mp4');
    scene.text('"Hmmm?" you hum around his cock before letting it pop from your mouth. "Sure. If you like."');
    // TODO-QSP: dynamic text: You let him position himself over you and close your eyes. Moments later warm fl...
    scene.text(`You let him position himself over you and close your eyes. Moments later warm fluid spatters across your face and within seconds, your face is covered in ${((s as any).npcdesc ?? 0)}'s cum. After a little bit to make sure ${((s as any).npcdesc ?? 0)}'s finished, you crack an eye and look up at him.`);
    scene.text('"Happy?" you ask.');
    scene.text('"You have no idea how fucking hot you look right now."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    qspCall(s, 'sex_ev_after', 'wipe_face');
  } },
    { label: 'Stick our your tongue (swallow)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_face'] = 1;
    ((s as any).sex_ev ?? {})['swallow_count'] = (((s as any).sex_ev ?? {})['swallow_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'face_mouth';
    ((s as any).sex_ev ?? {})['swallow'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial25.mp4');
    scene.text('"Hmmm?" you hum around his cock before letting it slip from your mouth. Without saying anything else, you kneel down and close your eyes, sticking out your tongue.');
    scene.text('"Ahhhhh~!"');
    scene.text('"You\'re the fucking best."');
    // TODO-QSP: dynamic text: You can hear the wet squelching sound of his hand working his cock and after a c...
    scene.text(`You can hear the wet squelching sound of his hand working his cock and after a couple seconds, you feel a shot of cum land directly on your tongue. ${((s as any).npcdesc ?? 0)} makes sure to spread his shots around, approximately half of them spattering across your face and the other half landing in your mouth, keeping it open the entire time until you feel him shaking the last drips of his load onto the tip of your tongue.`);
    scene.actions([
      { label: 'Gulp', handler: (st: GameState) => {
    scene.img('images/shared/sex/cum/facial/facial26.mp4');
    // TODO-QSP: dynamic text: Gathering it to the back of your throat, you let his cum pool there for a moment...
    scene.text(`Gathering it to the back of your throat, you let his cum pool there for a moment before swallowing the whole thing in a mighty gulp. You look up at ${((s as any).npcdesc ?? 0)} with cum glazed cheeks and smile at him.`);
    scene.text('"You\'re so fucking hot."');
    scene.text('"Yeah, I know," you grin back.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    qspCall(s, 'sex_ev_after', 'wipe_face');
  } },
    ]);
  } },
    { label: 'Stick our your tongue (spit)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_face'] = 1;
    ((s as any).sex_ev ?? {})['last_cum'] = 'face_mouth';
    ((s as any).sex_ev ?? {})['spit'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/facial/facial29.mp4');
    scene.text('"Hmmm?" you hum around his cock before letting it pop from your mouth. "Alright. Sure."');
    // TODO-QSP: dynamic text: You stick out your tongue and <<$npcdesc>> takes this as an invitation, grabbing...
    scene.text(`You stick out your tongue and ${((s as any).npcdesc ?? 0)} takes this as an invitation, grabbing you by the hair with one hand and working his shaft with the other. A huge blast of cum sprays directly across your face, most of it landing on your cheeks and some even getting in your hair. A little falls inside your mouth and you spit it out as it comes, as ${((s as any).npcdesc ?? 0)} finishes himself over your face. When the cum stops flying, you crack an eye and look up at him.`);
    scene.text('"Happy?" you ask.');
    scene.text('"You have no idea how fucking hot you look right now."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    qspCall(s, 'sex_ev_after', 'wipe_face');
  } },
  ]);
  scene.build();
}

function enterBjSubCumFace2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterBjSubCumFace3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['he_ask_mouth'] === 1) {
    ((s as any).sex_ev ?? {})['act_desc'] = 'How about my face instead?';
    ((s as any).sex_ev ?? {})['cum_desc'] = 'How about you just come on my face instead?';
  } else {
    ((s as any).sex_ev ?? {})['act_desc'] = 'Wanna come on my face?';
    ((s as any).sex_ev ?? {})['cum_desc'] = 'Wanna come on my face?';
  }
  // TODO-QSP: end
  scene.actions([
    { label: '<<$sex_ev[\'act_desc\']>>', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You pull your lips back from his cock with a pop.');
    // TODO-QSP: dynamic text: "<<$sex_ev['cum_desc']>>" you ask.
    scene.text(`"${((s as any).sex_ev ?? 0)?.['cum_desc']}" you ask.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> sits up, working his shaft with his hand as he points it at your fa...
    scene.text(`${((s as any).npcdesc ?? 0)} sits up, working his shaft with his hand as he points it at your face. That seems like a "yes" to you.`);
    qspCall(s, 'sex_ev_cum', 'facial_close_eyes');
    qspCall(s, 'sex_ev_cum', 'facial_tongue_cum');
    qspCall(s, 'sex_ev_cum', 'facial_tongue_spit');
    qspCall(s, 'sex_ev_cum', 'facial_brace');
    scene.actions([
      { label: 'Jerk him yourself', goto: ['sex_ev_cum', 'facial_jerk_him'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjSubCumTits1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['he_ask_tits'] = 1;
  ((s as any).sex_ev ?? {})['cum_choice'] = 'tits';
  // TODO-QSP: dynamic text: Within a few minutes, <<$npcdesc>> taps you on the head."
  scene.text(`Within a few minutes, ${((s as any).npcdesc ?? 0)} taps you on the head."`);
  scene.text('"I\'m gonna- <i>nngh-!</i> You\'d look super hot with my cum on your tits. Can I?"');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits1.2');
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    scene.text('"Ew." You wrinkle your nose in disgust as you pop your mouth off his cock.');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_hand');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face3');
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth2');
  } },
  ]);
  scene.build();
}

function enterBjSubCumTits1_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk him over your tits', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_tits'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'tits';
    qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/chest/jerk1.mp4');
    scene.text('You don\'t say a word, removing your mouth and start working his shaft with your hand instead. Within moments, his cock erupts and warm cum sprays across your chest, leaving long strands dripping down your breasts.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    qspCall(s, 'sex_ev_after', 'wipe_tits');
  } },
    { label: 'Finish him <i>with</i> your tits', goto: ['sex_ev_cum', 'cum_tits4'] },
  ]);
  scene.build();
}

function enterBjSubCumTits2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).tits ?? 0) > 1) {
    scene.actions([
      { label: 'Finish him with your tits', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_tits'] = 1;
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'tits';
    qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/chest/tits1.mp4');
    if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
      scene.text('"How about my tits instead?"');
    }
    scene.text('With a dirty grin, you kneel beneath him and smush his cock between your breasts. You squeeze them together as tightly as possible and work his shaft until a few moment later, he comes, spraying cum all over your tits and hands.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Jerk him over your tits', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_tits'] = 1;
    ((s as any).sex_ev ?? {})['last_cum'] = 'tits';
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'breasts', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/chest/jerk1.mp4');
    if (((s as any).sex_ev ?? 0)?.['he_ask_tits'] === 1) {
      scene.text('"How about my tits instead?"');
    }
    scene.text('With a dirty grin, you kneel beneath him grab hold of his cock and jerking it until he comes with a groan. Cum coats your tits in thick strands, warm against your skin.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    { label: 'Finish him <i>with</i> your tits', goto: ['sex_ev_cum', 'cum_tits4'] },
  ]);
  scene.build();
}

function enterBjForceCumMouth(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cum_mouth'] = 1;
  ((s as any).sex_ev ?? {})['cum_mouth_force'] = 1;
  ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
  scene.img('images/shared/sex/cum/mouth/gag3.mp4');
  scene.text('"No than-" You start trying to tell him you won\'t do it when he violently grabs your head and forces you back onto his cock.');
  scene.text('"I wasn\'t asking."');
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    scene.text('Semen spills into your mouth and you struggle against him, trying to pull away but he holds you firmly onto his manhood. Tears stream from your eyes, running down your face and ruining your makeup in black rivers. All you can do is briefly cough as cum continues to fill your mouth.');
  } else {
    scene.text('Semen spills into your mouth and you struggle against him, trying to pull away but he holds you firmly onto his manhood. Tears stream from your eyes, running down your face. All you can do is briefly cough as cum continues to fill your mouth.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Gag', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/spit3.mp4');
    // TODO-QSP: dynamic text: Finally, your body can't take it anymore and you begin to choke. You cough hard,...
    scene.text(`Finally, your body can't take it anymore and you begin to choke. You cough hard, cum exploding out from your lips and with the strength of a drowning woman, you force yourself off of ${((s as any).npcdesc ?? 0)}'s cock. You retch, violently spewing the rest of his cum from your mouth, taking ragged breaths as you continue to cough.`);
    // TODO-QSP: dynamic text: "Why would the fuck would you do that?" you ask, looking up at <<$npcdesc>> with...
    scene.text(`"Why would the fuck would you do that?" you ask, looking up at ${((s as any).npcdesc ?? 0)} with teary eyes.`);
    scene.text('"I told you I wanted to come in your mouth." He takes you by the chin and lifts your head with his finger. "It\'s not a request. If I want it, you do it."');
    qspCall(s, 'sex_ev_after', 'quit');
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_grumble');
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_submit');
  } },
    { label: 'Swallow!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['swallow_count'] = (((s as any).sex_ev ?? {})['swallow_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'swallow';
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/forced1.mp4');
    scene.text('You gag but he keeps your face held all the way down to his balls. His cum overflows from your mouth and in a desperate attempt to avoid drowning, you swallow. It seems to be exactly what he was waiting for and continues to unload himself directly down your throat.');
    // TODO-QSP: dynamic text: After what seems like an eternity, his orgasm fades and fluid stops filling the ...
    scene.text(`After what seems like an eternity, his orgasm fades and fluid stops filling the back of your mouth and ${((s as any).npcdesc ?? 0)} finally releases you.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_wtf');
    qspCall(s, 'sex_ev_foreplay', 'be_nice');
    qspCall(s, 'sex_ev_foreplay', 'lucky_like');
  } },
    { label: 'Swallow (take it in stride)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['swallow_count'] = (((s as any).sex_ev ?? {})['swallow_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['last_cum'] = 'swallow';
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/cum/mouth/swallow5.mp4');
    // TODO-QSP: dynamic text: You're surprised by his force but you take it in stride, swallowing as <<$npcdes...
    scene.text(`You're surprised by his force but you take it in stride, swallowing as ${((s as any).npcdesc ?? 0)} pumps his member and his cum straight into the back of your throat. You continually swallow it as it comes until there is nothing left to suck up but your own saliva and ${((s as any).npcdesc ?? 0)}'s cock.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_wtf');
    qspCall(s, 'sex_ev_foreplay', 'be_nice');
    qspCall(s, 'sex_ev_foreplay', 'lucky_like');
  } },
    { label: 'Spit (take it in stride)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['last_cum'] = 'mouth';
    scene.img('images/shared/sex/cum/mouth/spit6.mp4');
    // TODO-QSP: dynamic text: You're surprised by his force but you take it in stride, swallowing as <<$npcdes...
    scene.text(`You're surprised by his force but you take it in stride, swallowing as ${((s as any).npcdesc ?? 0)} pumps his member and his cum straight into the back of your throat. You let it pool there until you stop feeling him pulse between your lips and he finally releases you, allowing you to slip off his cock and take a breath as the semen spills from your lips.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_wtf');
    qspCall(s, 'sex_ev_foreplay', 'be_nice');
    qspCall(s, 'sex_ev_foreplay', 'lucky_like');
  } },
  ]);
  scene.build();
}

function enterBjForceCumWtf(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'What the fuck', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['mad'] = 1;
    scene.text('"What the fuck," you cough, dislodging a few stray globules at the back of your throat. "Why would you do that?"');
    // TODO-QSP: dynamic text: "I told you I wanted to come in your mouth." <<$npcdesc>> takes you by the chin ...
    scene.text(`"I told you I wanted to come in your mouth." ${((s as any).npcdesc ?? 0)} takes you by the chin and lifts your head with his finger. "It's not a request. If I want it, you do it."`);
    qspCall(s, 'sex_ev_after', 'quit');
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_grumble');
    qspCall(s, 'sex_ev_foreplay', 'bj_force_cum_submit');
  } },
  ]);
  scene.build();
}

function enterBeNice(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Be nicer next time?', handler: (st: GameState) => {
    scene.text('"If you really want it that badly, maybe be a little nicer about it next time?" You give him a gentle smile, eyes still glistening. "I don\'t mind <i>that</i> much, but if you ask nicely..."');
    scene.text('"We\'ll see," he says.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterLuckyLike(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'re lucky I like you', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Pulling back, you wipe your lips and give <<$npcdesc>> a dry stare.
    scene.text(`Pulling back, you wipe your lips and give ${((s as any).npcdesc ?? 0)} a dry stare.`);
    scene.text('"You\'re lucky I like you," you say. "Otherwise I might get really mad about that."');
    scene.text('"Oh yeah?" he says. "What does that look like? Maybe I want to see that."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterBjForceCumSubmit(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Submit', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (50);
    ((s as any).sex_ev ?? {})['last_cum'] = 'swallow';
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Your eyes go wide and you reflexively gulp. The way he said that was so demeaning and rude and...');
    scene.text('<i>hot...</i>');
    scene.text('Heat spreads through your hips and you can feel your pussy begin to practically <i>drool</i> with moisture.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
  ]);
  scene.build();
}

function enterBjForceCumGrumble(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Grumble', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hmph!" you tug your chin out of his grasp, internally grumbling to yourself, but you don\'t press the issue any further.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0  ||  (((s as any).sex_ev ?? 0)?.['virgin'] < 1  &&  ((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] < 1)  &&  ((s as any).sex_ev ?? 0)?.['no_sex'] !== 1) {
      scene.actions([
        { label: 'Can we have sex now?', handler: (st: GameState) => {
    scene.img('images/shared/sex/misc/wait.mp4');
    scene.text('"Can we have sex now?" you ask, maybe letting a little more exasperation into your voice than you meant to.');
    if ((Math.floor(Math.random() * 10) + 1) <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      scene.text('"Yeah," he smiles. "I think I can go again. Just gimme a minute to get hard."');
      scene.actions([
        { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    ((s as any).sex_ev ?? {})['get_hard'] = 1;
    scene.img('images/shared/sex/misc/wait.mp4');
    // TODO-QSP: dynamic text: You lay back on the bed, staring at the ceiling, waiting impatiently as you list...
    scene.text(`You lay back on the bed, staring at the ceiling, waiting impatiently as you listen to ${((s as any).npcdesc ?? 0)} furiously flapping his flaccid dick around, forcing it to get hard again.`);
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
        { label: 'Help him out (hand)', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'hj',1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/handjob/hj3.mp4');
    // TODO-QSP: dynamic text: "Let me help you out with that," you smile, rolling over and taking <<$npcdesc>>...
    scene.text(`"Let me help you out with that," you smile, rolling over and taking ${((s as any).npcdesc ?? 0)}'s dick in your hand. Even soft, you feel it twitch in response to your touch and you can't help but smile wider at the reaction. You begin working the shaft up and down and in no time at all, you've got nice stiff cock ready for fucking.`);
    ((s as any).sex_ev ?? {})['position'] = '';
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
        { label: 'Help him out (mouth)', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'bj',1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/play1.mp4');
    // TODO-QSP: dynamic text: "Let me help you out with that," you smile, rolling over and taking <<$npcdesc>>...
    scene.text(`"Let me help you out with that," you smile, rolling over and taking ${((s as any).npcdesc ?? 0)}'s dick in your hand. Leaning down, you take the soft tip of his dick and place it between your lips, sucking gently. You instantly feel it twitch and you can't help but smirk, even with a cock in your mouth.`);
    // TODO-QSP: dynamic text: Through a variation of kissing, licking, and sucking, <<$npcdesc>> rapidly stiff...
    scene.text(`Through a variation of kissing, licking, and sucking, ${((s as any).npcdesc ?? 0)} rapidly stiffens up and in no time at all, you have a nice hard cock ready for fucking.`);
    ((s as any).sex_ev ?? {})['position'] = '';
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
      ]);
    } else {
      scene.text('"Nah, I think I\'m tapped out."');
      scene.actions([
        { label: 'Try to get him hard again (hand)', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'hj',rand(1, 2), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('"Not if I have anything to say about it..."');
      scene.text('Or so you thought. You grab his soft, spongy cock in your hand and work it with all you\'ve got. But you can\'t even manage to get a twitch out of it, let alone get him fully hard again.');
      scene.text('"Fuck!" you growl and throw yourself back onto the bed in frustration.');
      qspCall(s, 'sex_ev_after', 'after_sex');
    } else {
      scene.img('images/shared/sex/handjob/hj3.mp4');
      scene.text('"Not if I have anything to say about it," you grin.');
      // TODO-QSP: dynamic text: You forcibly grab <<$npcdesc>>'s dick in your hand and begin kneading it with yo...
      scene.text(`You forcibly grab ${((s as any).npcdesc ?? 0)}'s dick in your hand and begin kneading it with your fingers. You work the shaft up and down and within minutes, despite his initial protests, you have a fully erect cock in your hands. Ready and waiting to be fucked.`);
      ((s as any).sex_ev ?? {})['position'] = '';
      qspCall(s, 'sex_ev_foreplay', 'handjob_dom1');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_sex', 'sex_start');
    }
  } },
        { label: 'Try to get him hard again (mouth)', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'bj',rand(1, 2), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
      // TODO-QSP: $sex_ev['bed_room']
      scene.text('"Not if I have anything to say about it..."');
      scene.text('Or so you thought. You grab his soft, spongy cock in your hand and work it with all you\'ve got. You put it in your mouth and suck on it, trying to reverse inflate it like a meat balloon. But you can\'t even manage to get a twitch out of it, let alone get him fully hard again. It\'s like trying to play billiards with a rope.');
      scene.text('"Fuck!" you growl and throw yourself back onto the bed in frustration.');
      qspCall(s, 'sex_ev_after', 'after_sex');
    } else {
      scene.img('images/shared/sex/blowjob/play1.mp4');
      scene.text('"Not if I have anything to say about it," you grin.');
      // TODO-QSP: dynamic text: You forcibly grab <<$npcdesc>>'s dick in your hand and begin kneading it with yo...
      scene.text(`You forcibly grab ${((s as any).npcdesc ?? 0)}'s dick in your hand and begin kneading it with your fingers. You lean down, sucking on the tip and immediately feel life within, feel it expand and twitch inside your mouth. Continuing to kiss, lick, and suck on it, within minutes, despite his initial protests, you have a fully erect cock in your possession. Ready and waiting to be fucked.`);
      ((s as any).sex_ev ?? {})['position'] = '';
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_sex', 'sex_start');
      scene.actions([
        { label: 'Play with his cock (mouth)', goto: ['sex_ev_foreplay', 'blowjob_tease_dom'] },
      ]);
    }
  } },
      ]);
    }
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterBjSubCumWarn(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bj_cum'] = 3;
  ((s as any).sex_ev ?? {})['cum_warn'] = 1;
  scene.text('After a couple more minutes, he taps you on the head.');
  scene.text('"I\'m-! Almost there-!" he groans loudly.');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_hand');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth2');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face3');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits2');
  if (((s as any).sex_ev ?? 0)?.['no_sex'] !== 1) {
    scene.actions([
      { label: 'Not yet (sex)', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj3.mp4');
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    scene.text('You pull your mouth off his cock with a pop, giving him a lusty stare.');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Not yet big boy," you grin, jerking him gently. "I\'m not done with you yet."');
    } else {
      scene.text('"Not yet big boy," you grin, jerking him gently. "I want you inside me first."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjSubLetsFuck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: After a couple more minutes <<$npcdesc>> pushes your head away, your saliva trai...
  scene.text(`After a couple more minutes ${((s as any).npcdesc ?? 0)} pushes your head away, your saliva trailing from his cock.`);
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"That was great," he smiles. "That was exactly what I wanted. But I want more now."');
      scene.actions([
        { label: 'I\'m saving my virginity', goto: ['sex_ev_virgin', 'saving_virginity'] },
        { label: 'Okay (lose your virginity)', goto: ['sex_ev_virgin', 'start4'] },
      ]);
    } else {
      scene.text('"That was great," he smiles. "That was exactly what I wanted. But <i>now</i> I want your pussy."');
      scene.actions([
        { label: 'I\'m saving my virginity', goto: ['sex_ev_virgin', 'saving_virginity'] },
        { label: 'Let <<$npcdesc>> take your virginity', goto: ['sex_ev_virgin', 'start3'] },
      ]);
    }
  } else {
    scene.text('"That was great," he smiles. "That was exactly what I wanted. But <i>now</i> I want your pussy."');
    scene.actions([
      { label: 'It\'s about time', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['about_time'] = 1
    qspCall(st, 'sex_ev_sex', 'sex_start');
  } },
      { label: 'Let him fuck you', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_start');
  } },
      { label: 'Can we keep doing this?', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"Can I keep doing this?" you ask, continuing to play with his cock, trailing it up and down with kisses and small licks. "I want to finish you off."');
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Fuck that, I want to fuck <i>you!</i>"');
      scene.actions([
        { label: 'Then I don\'t want to do anything', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Then I don\'t want to do anything," you say, pulling away with a harrumph.');
    scene.text('"What the fuck! You\'re just gonna blue ball me like this?"');
    scene.text('"I\'m not getting off here either," you say back with irritation. "But I don\'t want to fuck today and you won\'t settle for a blowjob, so I guess we\'re just not gonna do anything today."');
    scene.text('"Ugh! You\'re impossible!"');
    qspCall(s, 'sex_ev_after', 'quit2');
  } },
        { label: '<i>Fiiiine</i>', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"<i>Fiiiiine,</i>" you roll your eyes, letting out a deep breath. "Let\'s get this over with then."');
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
      ]);
    } else {
      ((s as any).sex_ev ?? {})['not_today'] = 1;
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks quizzically. "You want to <i>keep</i> blowing me?"
        scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} asks quizzically. "You want to <i>keep</i> blowing me?"`);
      } else {
        // TODO-QSP: dynamic text: "What?" <<$npcdesc>> asks quizzically. "Why?"
        scene.text(`"What?" ${((s as any).npcdesc ?? 0)} asks quizzically. "Why?"`);
      }
      if (((s as any).mesec ?? 0) > 0) {
        scene.actions([
          { label: 'I\'m on my period', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"I\'m on my period," you sigh. "I feel all crampy and bloaty and gross. Putting something in my bloody vagina sounds like the most unsexy thing in the world right now."');
    // TODO-QSP: dynamic text: "Well... if that's what you want I guess," <<$npcdesc>> shrugs back.
    scene.text(`"Well... if that's what you want I guess," ${((s as any).npcdesc ?? 0)} shrugs back.`);
    scene.actions([
      { label: 'Get back to it', goto: ['sex_ev_foreplay', 'bj_resume'] },
    ]);
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        scene.actions([
          { label: 'My pussy needs a break', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"My pussy needs a break," you smile gently. "I need a little more time to rest before you fuck me again."');
    // TODO-QSP: dynamic text: "Well... if that's what you want I guess," <<$npcdesc>> shrugs back.
    scene.text(`"Well... if that's what you want I guess," ${((s as any).npcdesc ?? 0)} shrugs back.`);
    scene.actions([
      { label: 'Get back to it', goto: ['sex_ev_foreplay', 'bj_resume'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Don\'t feel like it today', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"I don\'t know," you shrug, continuing to play with his cock. "I\'m just not in the mood. Would rather just do this."');
    // TODO-QSP: dynamic text: "Well... if that's what you want I guess," <<$npcdesc>> shrugs back.
    scene.text(`"Well... if that's what you want I guess," ${((s as any).npcdesc ?? 0)} shrugs back.`);
    scene.actions([
      { label: 'Get back to it', goto: ['sex_ev_foreplay', 'bj_resume'] },
    ]);
  } },
        { label: 'I like giving head', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"I like blowjobs," you smile, continuing to play with his cock. "I\'m having fun."');
    } else {
      scene.text('"I like blowjobs," you shrug. "I think they\'re fun. I just want to keep sucking you."');
      scene.text('You give his cock another lick.');
      scene.text('"I\'m not really in the mood to fuck right now."');
    }
    // TODO-QSP: dynamic text: "Well... if that's what you want I guess," <<$npcdesc>> says leaning back as you...
    scene.text(`"Well... if that's what you want I guess," ${((s as any).npcdesc ?? 0)} says leaning back as you go back to work.`);
    scene.actions([
      { label: 'Get back to it', goto: ['sex_ev_foreplay', 'bj_resume'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjResume(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', 'bj',rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bj47.mp4');
  // TODO-QSP: dynamic text: You go back to blowing <<$npcdesc>>, humming to yourself as you relax while bobb...
  scene.text(`You go back to blowing ${((s as any).npcdesc ?? 0)}, humming to yourself as you relax while bobbing your head up and down the length of his cock.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjSubCumSort(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bj_cum_choice'] = Math.floor(Math.random() * 20) + 1;
  if (((s as any).sex_ev ?? 0)?.['bj_cum_choice'] > 12  &&  ((s as any).sex_ev ?? 0)?.['not_today'] === 0) {
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_lets_fuck');
  } else {
    if ((Math.floor(Math.random() * 10) + 1) === ((s as any).sex_ev ?? 0)?.['sex_stamina'] - 1  ||  ((Math.floor(Math.random() * 10) + 1) > ((s as any).sex_ev ?? 0)?.['sex_stamina'] - 2  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob')) {
      qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_surprise');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cycle_limit'] >= ((s as any).sex_ev ?? 0)?.['sex_stamina']) {
        if (((s as any).sex_ev ?? 0)?.['bj_cum_choice'] > 10  ||  ((s as any).sex_ev ?? 0)?.['bj_warning'] === 1) {
          qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_warn');
        } else {
          if (((s as any).sex_ev ?? 0)?.['bj_cum_choice'] > 8) {
            qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth1');
          } else {
            if (((s as any).sex_ev ?? 0)?.['bj_cum_choice'] > 6) {
              qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face1');
            } else {
              if (((s as any).sex_ev ?? 0)?.['bj_cum_choice'] > 4) {
                qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits1');
              } else {
                if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
                  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_surprise');
                } else {
                  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_warn');
                }
              }
            }
          }
        }
      } else {
        qspCall(s, 'sex_ev_foreplay', 'bj_sub1_continue');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjSubCumWait(s: GameState, scene: SceneBuilder): void {
  scene.text('After a couple more minutes, he taps you on the head.');
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.text('"Wait-! I\'m gonna come if you keep that up!" he groans loudly. "I wanna fuck you first."');
  } else {
    scene.text('"Wait-! I\'m gonna come if you keep that up!" he groans loudly. "I wanna fuck you again."');
  }
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_hand');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth2');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_face3');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_tits2');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull back (sex)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You pull your mouth off his cock with a pop and a grin on your lips.');
    scene.text('"Me too," you say, climbing back onto the bed.');
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
  ]);
  scene.build();
}

function enterBjEnd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_sex', 'harden_hand');
  qspCall(s, 'sex_ev_sex', 'harden_mouth');
  // TODO-QSP: end
  scene.build();
}

function enterForeplayChoose(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
  ((s as any).sex_ev ?? {})['fuck'] = 0;
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'makeout') {
    scene.actions([
      { label: 'Make out with him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'makeout_dom1'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'handjob'  &&  ((s as any).sex_ev ?? 0)?.['position'] !== 'makeout') {
    scene.actions([
      { label: 'Play with his cock (hand)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'handjob_dom1'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'blowjob') {
    scene.actions([
      { label: 'Play with his cock (mouth)', goto: ['sex_ev_foreplay', 'blowjob_tease_dom'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== '69') {
    qspCall(s, 'sex_ev_foreplay', '69_start');
  }
  if (((s as any).sex_ev ?? 0)?.['position'] !== 'facesit') {
    qspCall(s, 'sex_ev_foreplay', 'facesit_1');
  }
  qspCall(s, 'sex_ev_foreplay', 'kuni_ask');
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
    scene.actions([
      { label: 'Skip the foreplay', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['skip_foreplay'] = 1;
  }, goto: ['sex_ev_sex', 'sex_pre'] },
    ]);
  } else {
    scene.actions([
      { label: 'Fuck again', goto: ['sex_ev_sex', 'sex_pre'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Let him lead', handler: (st: GameState) => {
    if (((((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['orgasm_count'] === 0)  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
      qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          qspCall(s, 'sex_ev_foreplay', 'generous_initiative');
        } else {
          qspCall(s, 'sex_ev_foreplay', 'selfish_initiative');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterForeplayRand(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterMakeoutDom1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['kiss_count'] = (((s as any).sex_ev ?? {})['kiss_count'] ?? 0) + (1);
  ((s as any).npc_no_kiss ?? {})[String((s as any).npcID ?? 0)] = 2;
  // TODO-QSP: gs 'arousal', 'kiss',rand(2,4), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: gs 'arousal', 'foreplay',-10, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  ((s as any).sex_ev ?? {})['position'] = 'makeout';
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.img('images/shared/sex/foreplay/makeout1.mp4');
  } else {
    scene.img('images/shared/sex/foreplay/grope1.mp4');
  }
  if (((s as any).sex_ev ?? 0)?.['foreplay_change'] >= 1) {
    // TODO-QSP: dynamic text: You crawl over <<$npcdesc>> kissing him passionately while his hands roam all ov...
    scene.text(`You crawl over ${((s as any).npcdesc ?? 0)} kissing him passionately while his hands roam all over your body.`);
    ((s as any).sex_ev ?? {})['foreplay_change'] = 2;
  } else {
    ((s as any).sex_ev ?? {})['foreplay_change'] = (((s as any).sex_ev ?? {})['foreplay_change'] ?? 0) + (1);
    // TODO-QSP: dynamic text: You push <<$npcdesc>> onto the bed, crawling over him and plunge your tongue int...
    scene.text(`You push ${((s as any).npcdesc ?? 0)} onto the bed, crawling over him and plunge your tongue into his mouth, kissing him with everything you've got while his hands roam all over your body.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move your hand to his cock', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'kiss',rand(2,4), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: gs 'arousal', 'hj',-rand(2,4), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/foreplay/makeout2.mp4');
    scene.text('You snake your hand down to his cock and jerk it gently while continuing to make out with him.');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Keep making out', goto: ['sex_ev_foreplay', 'makeout_dom3'] },
      { label: 'Withdraw your hand', goto: ['sex_ev_foreplay', 'makeout_dom2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterMakeoutDom2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['kiss_count'] = (((s as any).sex_ev ?? {})['kiss_count'] ?? 0) + (1);
  // TODO-QSP: gs 'arousal', 'kiss', rand(2,4), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.img('images/shared/sex/foreplay/makeout1.mp4');
    // TODO-QSP: dynamic text: You continue making out with <<$npcdesc>>, loving the taste of his lips and the ...
    scene.text(`You continue making out with ${((s as any).npcdesc ?? 0)}, loving the taste of his lips and the feel of his tongue against yours.`);
  } else {
    scene.img('images/shared/sex/foreplay/grope1.mp4');
    // TODO-QSP: gs 'arousal', 'foreplay',-10, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    // TODO-QSP: dynamic text: You continue making out with <<$npcdesc>>, loving the taste of his lips. <<$npcd...
    scene.text(`You continue making out with ${((s as any).npcdesc ?? 0)}, loving the taste of his lips. ${((s as any).npcdesc ?? 0)} can't keep his hands off of you, groping your breasts while continuing to plunge his tongue down your throat.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  qspCall(s, 'sex_ev_sex', 'sex_start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep making out', goto: ['sex_ev_foreplay', 'makeout_dom2'] },
    { label: 'Move your hand to his cock', goto: ['sex_ev_foreplay', 'makeout_dom3'] },
  ]);
  scene.build();
}

function enterMakeoutDom3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', 'kiss',rand(2,7), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: gs 'arousal', 'hj',-rand(2,4), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  ((s as any).sex_ev ?? {})['hj_count'] = (((s as any).sex_ev ?? {})['hj_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    scene.img('images/shared/sex/foreplay/makeout2.mp4');
    // TODO-QSP: dynamic text: You continue making out with <<$npcdesc>> while jerking him off, loving the tast...
    scene.text(`You continue making out with ${((s as any).npcdesc ?? 0)} while jerking him off, loving the taste of his lips and the feel of his tongue against yours and the hard swell of his cock in your hand.`);
  } else {
    // TODO-QSP: gs 'arousal', 'foreplay',-5, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    scene.img('images/shared/sex/foreplay/grope1.mp4');
    // TODO-QSP: dynamic text: You continue making out with <<$npcdesc>> while jerking him off, loving the tast...
    scene.text(`You continue making out with ${((s as any).npcdesc ?? 0)} while jerking him off, loving the taste of his lips and the hard swell of his cock in your hand. In return, ${((s as any).npcdesc ?? 0)} can't keep his hands off of you, endlessly groping your breasts while he continues to plunge his tongue down your throat.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  qspCall(s, 'sex_ev_sex', 'sex_start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep making out', goto: ['sex_ev_foreplay', 'makeout_dom3'] },
    { label: 'Withdraw your hand', goto: ['sex_ev_foreplay', 'makeout_dom2'] },
  ]);
  scene.build();
}

function enterHandjobDom1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', 'hj',rand(1, 4), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  ((s as any).sex_ev ?? {})['position'] = 'handjob';
  ((s as any).sex_ev ?? {})['hj_count'] = (((s as any).sex_ev ?? {})['hj_count'] ?? 0) + (1);
  scene.img('images/shared/sex/handjob/hj2.mp4');
  if (((s as any).sex_ev ?? 0)?.['foreplay_change'] >= 1) {
    scene.text('Pulling away, you lay down beside him and start working his shaft with your hand. He\'s rock hard in your grip and he moans under your touch.');
    ((s as any).sex_ev ?? {})['foreplay_change'] = 2;
  } else {
    ((s as any).sex_ev ?? {})['foreplay_change'] = (((s as any).sex_ev ?? {})['foreplay_change'] ?? 0) + (1);
    // TODO-QSP: dynamic text: You lay down beside <<$npcdesc>>, taking his shaft in your hand and working it w...
    scene.text(`You lay down beside ${((s as any).npcdesc ?? 0)}, taking his shaft in your hand and working it with sensual tugs. He's rock hard in your grip and he moans under your touch.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  qspCall(s, 'sex_ev_sex', 'sex_start');
  // TODO-QSP: end
  scene.actions([
    { label: 'Make him come in your hand', goto: ['sex_ev_foreplay', 'hj_cum1'] },
  ]);
  scene.build();
}

function enterHjCum1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cum_hand'] = 1;
  qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
  scene.img('images/shared/sex/cum/handjob/hand0,1.mp4');
  if (((s as any).sex_ev ?? 0)?.['position'] === 'handjob') {
    scene.text('You feel him tense under your touch and he tries to speak.');
    scene.text('"Hang on, wai-"');
    scene.text('But before he can finish his sentence, you squeeze harder and speed up. Thick cum erupts from his cock, wads of it flying through the air, streams of it running down your fingers. A dirty grin is plastered across your face as you work his cock with your hand, milking him for every drop.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob') {
      // TODO-QSP: dynamic text: <<$npcdesc>> groans loudly and cum erupts from the tip of his cock. The thick li...
      scene.text(`${((s as any).npcdesc ?? 0)} groans loudly and cum erupts from the tip of his cock. The thick liquid dribbles down your fingers, mixing with your saliva, making his shaft even more slippery in your hand. A dirty grin is plastered across your face the whole time as you work his cock, determined to milk him for every drop.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> groans loudly and cum erupts from the tip of his cock. The thick li...
      scene.text(`${((s as any).npcdesc ?? 0)} groans loudly and cum erupts from the tip of his cock. The thick liquid dribbles down your fingers, making his shaft incredibly slippery in your hand. A dirty grin is plastered across your face the whole time as you work his cock, determined to milk him for every drop.`);
    }
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterBlowjobTeaseDom(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['position'] = 'blowjob_tease';
  ((s as any).sex_ev ?? {})['bj_tease'] = (((s as any).sex_ev ?? {})['bj_tease'] ?? 0) + (1);
  // TODO-QSP: gs 'arousal', 'bj',rand(2,3), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/play1.mp4');
  if (((s as any).sex_ev ?? 0)?.['foreplay_change'] >= 1  &&  ((s as any).sex_ev ?? 0)?.['bj_count'] >= 1) {
    // TODO-QSP: dynamic text: You move down between <<$npcdesc>>'s legs, dipping your head and using your mout...
    scene.text(`You move down between ${((s as any).npcdesc ?? 0)}'s legs, dipping your head and using your mouth to play with his cock, licking it, sucking it, kissing it, teasing it, enjoying every little twitch and reaction it elicits from him.`);
    ((s as any).sex_ev ?? {})['foreplay_change'] = 2;
  } else {
    ((s as any).sex_ev ?? {})['foreplay_change'] = (((s as any).sex_ev ?? {})['foreplay_change'] ?? 0) + (1);
    // TODO-QSP: dynamic text: You move down between <<$npcdesc>>'s legs, dipping your head and using your mout...
    scene.text(`You move down between ${((s as any).npcdesc ?? 0)}'s legs, dipping your head and using your mouth to play with his cock, licking it, sucking it, kissing it, teasing it, enjoying every little twitch and reaction it elicits from him.`);
  }
  qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  // TODO-QSP: end
  scene.actions([
    { label: 'Blow him', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_foreplay', 'bj_dom2'
  } },
  ]);
  scene.build();
}

function enterBjTeaseContinue(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep teasing', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
    // TODO-QSP: gs 'arousal', 'bj',rand(1, 3), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/blowjob/play1.mp4');
    // TODO-QSP: dynamic text: You continue swirling your tongue around <<$npcdesc>>, nibbling at the edges so ...
    scene.text(`You continue swirling your tongue around ${((s as any).npcdesc ?? 0)}, nibbling at the edges so to speak. Every lick causes a twitch. Every kiss, a pulse. His hips roll beneath you, his cock throbs in your hand.`);
    if ((Math.floor(Math.random() * 10) + 1) >= ((s as any).sex_ev ?? 0)?.['sex_stamina']) {
      // TODO-QSP: dynamic text: "Hey-!" <<$npcdesc>> grunts. "I'm gonna come if you keep that up."
      scene.text(`"Hey-!" ${((s as any).npcdesc ?? 0)} grunts. "I'm gonna come if you keep that up."`);
    } else {
      if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob') {
        // TODO-QSP: dynamic text: "Ungh-!" <<$npcdesc>> moans. "Stop teasing me! I want you to blow me for real."
        scene.text(`"Ungh-!" ${((s as any).npcdesc ?? 0)} moans. "Stop teasing me! I want you to blow me for real."`);
      } else {
        // TODO-QSP: dynamic text: "Ungh-! Fuck-!" <<$npcdesc>> moans. "You're driving me crazy!"
        scene.text(`"Ungh-! Fuck-!" ${((s as any).npcdesc ?? 0)} moans. "You're driving me crazy!"`);
      }
    }
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Make him come', goto: ['sex_ev_foreplay', 'bj_dom1_cum'] },
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjDom1Cum(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/handjob/hj3.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>>'s warning only makes you want to force him to come even more and yo...
  scene.text(`${((s as any).npcdesc ?? 0)}'s warning only makes you want to force him to come even more and you begin rapidly jerking him off and he writhes under your touch. You feel a pulse run through his dick and you know he's going to come right now.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Tease him to completion', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_foreplay', 'bj_dom_tease_cum');
    qspCall(s, 'sex_ev_sex', 'sex_end');
    scene.text('"Sorry," you shamelessly grin. "I couldn\'t resist."');
  } },
    { label: 'In your mouth (swallow)', goto: ['sex_ev_foreplay', 'bj_dom_swallow1'] },
    { label: 'In your mouth (spit)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cum_mouth'] = 1;
  }, goto: ['sex_ev_foreplay', 'bj_dom_spit1'] },
  ]);
  scene.build();
}

function enterBjDomMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Slow and sensual', goto: ['sex_ev_foreplay', 'bj_sensual'] },
    { label: 'Wet and sloppy', goto: ['sex_ev_foreplay', 'bj_sloppy'] },
    { label: 'Deepthroat', goto: ['sex_ev_foreplay', 'bj_deepthroat'] },
  ]);
  scene.build();
}

function enterBjDom2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bj_count'] = (((s as any).sex_ev ?? {})['bj_count'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
  // TODO-QSP: gs 'arousal', 'bj',rand(2,7), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 5) + 46}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['position'] === 'blowjob_tease') {
    // TODO-QSP: dynamic text: Deciding he's had enough teasing, you take <<$npcdesc>> between your lips and be...
    scene.text(`Deciding he's had enough teasing, you take ${((s as any).npcdesc ?? 0)} between your lips and begin blowing him in earnest.`);
  }
  ((s as any).sex_ev ?? {})['position'] = 'blowjob';
  // TODO-QSP: dynamic text: You give him your best head, taking pride in your work, bobbing up and down his ...
  scene.text(`You give him your best head, taking pride in your work, bobbing up and down his shaft and putting in the effort to make ${((s as any).npcdesc ?? 0)} feel good.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_dom_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjSensual(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
  // TODO-QSP: gs 'arousal', 'bj',rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 2) + 47}.mp4`);
  ((s as any).sex_ev ?? {})['position'] = 'blowjob';
  // TODO-QSP: dynamic text: With the utmost care you go down on <<$npcdesc>>'s cock. Your lips part, letting...
  scene.text(`With the utmost care you go down on ${((s as any).npcdesc ?? 0)}'s cock. Your lips part, letting his flesh slide between them, your tongue teasing the tip while you gently suck on it. In some ways its less like you're blowing him and almost like you're kissing him. Not with the wild and sloppy energy of uncontrollable lust but like the sensual romance of love making and he groans in pleasure as you french kiss his cock.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_dom_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjSloppy(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
  // TODO-QSP: gs 'arousal', 'bj',rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bj46.mp4');
  ((s as any).sex_ev ?? {})['position'] = 'blowjob';
  // TODO-QSP: dynamic text: You give <<$npcdesc>> a sloppy blowjob, loud wet slurping sounds coming from you...
  scene.text(`You give ${((s as any).npcdesc ?? 0)} a sloppy blowjob, loud wet slurping sounds coming from your mouth as you suck his cock.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_dom_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjDeepthroat(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['deepthroat'] = 1;
  ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
  ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
  // TODO-QSP: gs 'arousal', 'bj',rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/blowjob/bj49.mp4');
  ((s as any).sex_ev ?? {})['position'] = 'blowjob';
  // TODO-QSP: dynamic text: You deepthroat <<$npcdesc>>, taking the entirety of his cock down to the base un...
  scene.text(`You deepthroat ${((s as any).npcdesc ?? 0)}, taking the entirety of his cock down to the base until you taste his balls and his tip is bulging at the back of your throat.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_dom_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enterBjDomCumSort(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 10) + 1) === ((s as any).sex_ev ?? 0)?.['sex_stamina'] - 1  ||  ((Math.floor(Math.random() * 10) + 1) > ((s as any).sex_ev ?? 0)?.['sex_stamina'] - 2  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob')) {
    qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_surprise');
  } else {
    if (((s as any).sex_ev ?? 0)?.['cycle_limit'] >= ((s as any).sex_ev ?? 0)?.['sex_stamina']) {
      qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_warn');
    } else {
      if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] !== 'blowjob') {
        scene.text('After a few minutes, you feel his hand on your head, trying to slow you down.');
        if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
          scene.text('"Hey-" he grunts. "If you keep that up, I\'m gonna come. I still wanna fuck you."');
        } else {
          scene.text('"Hey-" he grunts. "If you keep that up, I\'m gonna come. I wanna fuck again."');
        }
        qspCall(s, 'sex_ev_foreplay', 'bj_dom2_cum_act');
      } else {
        qspCall(s, 'sex_ev_foreplay', 'bj_dom2_continue');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjDom2Continue(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull back (sex)', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj3.mp4');
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('You pull your mouth off his cock with a pop, giving him a lusty stare.');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('"Enough of the foreplay," you say, jerking him gently. "I want you inside me..."');
    } else {
      scene.text('"I\'m tired of giving head. <i>I want to fuck you again</i>," you whisper.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
    { label: 'Keep blowing <<$npcdesc>>', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
    scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 5) + 46}.mp4`);
    // TODO-QSP: dynamic text: You keep blowing <<$npcdesc>>, working his cock with your lips and his shaft wit...
    scene.text(`You keep blowing ${((s as any).npcdesc ?? 0)}, working his cock with your lips and his shaft with your hand, making sure to add in lots of tongue and drool even more spit.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_dom_cum_sort');
  } },
    { label: 'Dirty talk', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
    scene.img(`images/shared/sex/blowjob/bj${Math.floor(Math.random() * 5) + 46}.mp4`);
    // TODO-QSP: dynamic text: "You taste so good," you moan loudly as you briefly come up for air before plung...
    scene.text(`"You taste so good," you moan loudly as you briefly come up for air before plunging your lips back down ${((s as any).npcdesc ?? 0)}'s shaft.`);
    qspCall(s, 'sex_ev_foreplay', 'bj_dom_cum_sort');
  } },
  ]);
  scene.build();
}

function enterBjDom2CumAct(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull back (sex)', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj3.mp4');
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    scene.text('You pull your mouth off his cock with a pop, giving him a lusty stare.');
    if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      scene.text('"If you want to fuck me," you grin, jerking him gently. "Then hurry up and fuck me."');
    } else {
      scene.text('"Then hurry up and get your cock inside me again," you grin, jerking him gently.');
    }
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
    { label: 'Make him come', handler: (st: GameState) => {
    scene.img('images/shared/sex/handjob/hj3.mp4');
    scene.text('You ignore his protests and redouble your efforts. His cock twitches in your mouth. His hips squirm beneath you. You can even feel him clenching his muscles through his balls. Unable to suppress a smile even with your lips still around his cock, you can tell he\'s about to come.');
    scene.text('You pull your mouth away and you grab hold of his manhood, jerking his cock rapidly, still slick with your saliva.');
    // TODO-QSP: dynamic text: "I want you to come for me <<$npc_lovername[$npcID]>>," you whisper sensually. Y...
    scene.text(`"I want you to come for me ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you whisper sensually. You feel him tense up and you know he's going to blow any moment. "Come on ${((s as any).npc_lovername2 ?? 0)?.[String((s as any).npcID ?? 0)]}! Come on, come on, come on, come on!"`);
    scene.text('A single pulse courses through his cock and you know he\'s about to blow.');
    scene.actions([
      { label: 'Make him come in your hand', goto: ['sex_ev_foreplay', 'hj_cum1'] },
      { label: 'Tease him to completion', goto: ['sex_ev_foreplay', 'bj_dom_tease_cum'] },
      { label: 'In your mouth', goto: ['sex_ev_foreplay', 'bj_dom_swallow1'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjDomTeaseCum(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'hands', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev ?? {})['cum_choice'] = 'hand';
  ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
  scene.img('images/shared/sex/cum/tease_cum1.mp4');
  scene.text('You angle the tip of his cock away from your face and lick the shaft of his cock, moving your tongue in small teasing circles. Seconds later, cum erupts from the tip and he buckles beneath you. You can\'t help but smirk at his expression as you feel the warm liquid dribble down his shaft and across your fingers.');
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterBjDomSpit1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth', ((s as any).npcID ?? 0), 1);
  ((s as any).sex_ev ?? {})['swallow'] = 1;
  ((s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
  ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
  scene.img('images/shared/sex/cum/mouth/swallow5.mp4');
  // TODO-QSP: dynamic text: You quickly wrap your lips around his cock and plunge down as far as you can go....
  scene.text(`You quickly wrap your lips around his cock and plunge down as far as you can go. Not even a second later, he explodes in your mouth, shaft pulsing between your lips, warm liquid splashing against your tonsils. You hold yourself there, humming as ${((s as any).npcdesc ?? 0)} buckles beneath you, waiting until he's ridden his orgasm to completion.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Spit', goto: ['sex_ev_foreplay', 'bj_dom_spit2'] },
  ]);
  scene.build();
}

function enterBjDomSpit2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/cum/mouth/spit6.mp4');
  // TODO-QSP: dynamic text: Once you're pretty sure he's done, you draw your head back up <<$npcdesc>>'s coc...
  scene.text(`Once you're pretty sure he's done, you draw your head back up ${((s as any).npcdesc ?? 0)}'s cock, letting his cum spill from your lips along the way. You watch it run back down his shaft and look up at ${((s as any).npcdesc ?? 0)}, giving him a cum drip smile.`);
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enterBjDomSwallow1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['swallow'] = 1;
  ((s as any).sex_ev ?? {})['swallow_count'] = (((s as any).sex_ev ?? {})['swallow_count'] ?? 0) + (1);
  ((s as any).sex_ev ?? {})['cum_choice'] = 'mouth';
  scene.img('images/shared/sex/cum/mouth/deep1.mp4');
  scene.text('You quickly wrap your lips around his cock and plunge down as far as you can go. Not even a second later, he explodes in your mouth, shaft pulsing between your lips, warm liquid splashing against your tonsils. You hold yourself there, eyes tearing up as you let him ride out his orgasm halfway down your throat.');
  qspCall(s, 'sex_ev_foreplay', 'bj_sub_cum_mouth_spit');
  // TODO-QSP: end
  scene.actions([
    { label: 'Gulp', handler: (st: GameState) => {
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    ((s as any).sex_ev ?? {})['cum_count'] = (((s as any).sex_ev ?? {})['cum_count'] ?? 0) + (1);
    scene.img('images/shared/sex/cum/mouth/deep2.mp4');
    // TODO-QSP: dynamic text: Carefully, very carefully, you slowly draw your lips back up <<$npcdesc>>'s cock...
    scene.text(`Carefully, very carefully, you slowly draw your lips back up ${((s as any).npcdesc ?? 0)}'s cock, sucking the whole time to make sure not a single drop of his cum spills around your lips. It's really difficult to keep sucking and not choke on the cum pooling at the back of your throat. The effort makes your eyes water, but you still manage to draw all the way back up to his tip where you finally swallow his load and get your first gasp of clean air.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom_swallow_react'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjDomSwallowReact(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/blowjob/play1.mp4');
  if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).npc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    // TODO-QSP: dynamic text: "Holy..." <<$npcdesc>> lets his head fall back onto his pillow, his mind seeming...
    scene.text(`"Holy..." ${((s as any).npcdesc ?? 0)} lets his head fall back onto his pillow, his mind seemingly blown by your blowjob skills. Taking satisfaction in a job well done, you continue teasing his cock, running your lips up and down its shaft, peppering it with kisses. "That was incredible..."`);
    scene.text('"Mmmm?" you hum pleasantly. "You liked it that much?"');
    scene.text('"Like you sucked the soul outta me," he smiles tiredly. "I love the feeling of blowing a load in a girl\'s mouth like that, but that was something else."');
    scene.actions([
      { label: 'You like oral creampies?', handler: (st: GameState) => {
    // TODO-QSP: $npc_cum_pref_know[$npcID] = $npc_cum_pref[$npcID]
    scene.text('"You really like to come in my mouth that much?" you ask, giving his shaft another kiss.');
    scene.text('"Yeah," he sighs. "Even better than nutting inside a pussy."');
    scene.actions([
      { label: 'Good to know', handler: (st: GameState) => {
    scene.text('"Good to know," you smirk, running your tongue across his tip.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I like it too', handler: (st: GameState) => {
    scene.text('"I like it too," you smirk, running your tongue across his tip. "Guess we both got what we wanted."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'I\'ll keep it in mind', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I'll keep that in mind then," giving <<$npcdesc>> a mischievous smirk and runni...
    scene.text(`"I'll keep that in mind then," giving ${((s as any).npcdesc ?? 0)} a mischievous smirk and running your tongue across his tip.`);
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } },
      { label: 'Lucky you', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 0) {
      scene.text('"Lucky you," you smirk, giving his tip another gentle suck before letting it pop from your mouth. "You got a blowjob specialist, free of charge."');
    } else {
      scene.text('"Lucky you," you smirk, giving his tip another gentle suck before letting it pop from your mouth. "You ordered the right girl for the job then."');
    }
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  } else {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth'  &&  ((s as any).npc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: "Woah," <<$npcdesc>>'s head flops onto the pillow, while you continue to play wi...
      scene.text(`"Woah," ${((s as any).npcdesc ?? 0)}'s head flops onto the pillow, while you continue to play with his cock, still twitching in the throes of post-orgasm bliss. "Your mouth is so fucking good."`);
      scene.actions([
        { label: 'I know you love oral creampies', handler: (st: GameState) => {
    scene.text('"I know how much you love coming in my mouth," you smirk, peppering his shaft with kisses. "Thought I\'d give you a treat and suck you dry."');
    scene.text('"You\'re the best," he pants.');
    scene.text('"I know that too," you grin, giving his tip another lick.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Woah," <<$npcdesc>>'s head flops onto the pillow, while you continue to play wi...
      scene.text(`"Woah," ${((s as any).npcdesc ?? 0)}'s head flops onto the pillow, while you continue to play with his cock, still twitching in the throes of post-orgasm bliss. "That was great."`);
    }
    scene.actions([
      { label: 'I know', handler: (st: GameState) => {
    scene.text('"Don\'t need to tell me how good I am at giving head," you smirk, giving his shaft another lick. "I already know I\'m the best."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Glad you enjoyed it', handler: (st: GameState) => {
    scene.text('"Glad you enjoyed the ride," you smirk, giving his shaft another lick.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      { label: 'Return the favor?', handler: (st: GameState) => {
    scene.text('"Well, if you really want to show you\'re grateful," you smirk. "How about you return the favor?"');
    if (((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"I\'d love to," he smiles and flips you over onto your back.');
      scene.actions([
        { label: 'Spread your legs', goto: ['sex_ev_foreplay', 'pussy_lick_start'] },
        { label: 'Mount his face instead', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Nuh uh," you grin, grabbing him with your thighs and twisting both of you around so you\'re on top. "I don\'t want it like that."');
    scene.text('You throw your knees down on each side of his head and lower your pussy onto his face.');
    scene.actions([
      { label: 'Make him eat you out', goto: ['sex_ev_foreplay', 'facesit_2'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Nah," he says. "I think I\'m good."');
        qspCall(s, 'sex_ev_sex', 'sex_end');
        scene.actions([
          { label: 'Wasn\'t asking', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I wasn\'t asking," you say and push him backwards onto the bed. Before he can even protest, you throw your thighs over his head and drop your hips, mounting his face.');
    scene.actions([
      { label: 'Make him eat you out', goto: ['sex_ev_foreplay', 'facesit_2'] },
    ]);
  } },
        ]);
      } else {
        if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
          scene.text('"I guess I could," he says, gently rolling you onto your back. "It\'s only fair after all."');
          scene.actions([
            { label: 'Spread your legs', goto: ['sex_ev_foreplay', 'pussy_lick_start'] },
            { label: 'Mount his face instead', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Nuh uh," you grin, grabbing him with your thighs and twisting both of you around so you\'re on top. "I don\'t want it like that."');
    scene.text('You throw your knees down on each side of his head and lower your pussy onto his face.');
    scene.actions([
      { label: 'Make him eat you out', goto: ['sex_ev_foreplay', 'facesit_2'] },
    ]);
  } },
          ]);
        } else {
          scene.text('"I don\'t know if I can," he mumbles. "I\'m feeling kind of tapped out to be honest..."');
          qspCall(s, 'sex_ev_sex', 'sex_end');
          scene.actions([
            { label: 'Wasn\'t asking', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That doesn\'t mean your tongue stops working," you say, shoving him down and throwing your thighs over his shoulders.');
    scene.text('"And I wasn\'t asking," you say, shoving your pussy into his face.');
    scene.actions([
      { label: 'Make him eat you out', goto: ['sex_ev_foreplay', 'facesit_2'] },
    ]);
  } },
          ]);
        }
      }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter69Start(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '69 with <<$npc_usedname[$npcID]>>', handler: (st: GameState) => {
    scene.img('images/shared/sex/69/pre1.jpg');
    ((s as any).sex_ev ?? {})['position'] = '69';
    ((s as any).sex_ev ?? {})['fuck_pos'] = 0;
    ((s as any).sex_ev ?? {})['cock_inserted'] = 0;
    ((s as any).sex_ev ?? {})['69_count'] = (((s as any).sex_ev ?? {})['69_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    if (((s as any).sex_ev ?? 0)?.['foreplay_change'] >= 1) {
      // TODO-QSP: dynamic text: You crawl towards <<$npcdesc>>, throwing your legs over his head and scooching y...
      scene.text(`You crawl towards ${((s as any).npcdesc ?? 0)}, throwing your legs over his head and scooching your ass over his head. Grinning, you lower your hips down to his face while simultaneously grabbing his cock and preparing it for your mouth.`);
      ((s as any).sex_ev ?? {})['foreplay_change'] = 2;
    } else {
      ((s as any).sex_ev ?? {})['foreplay_change'] = (((s as any).sex_ev ?? {})['foreplay_change'] ?? 0) + (1);
      // TODO-QSP: dynamic text: You push <<$npcdesc>> back onto the bed and throw your legs over him, reversing ...
      scene.text(`You push ${((s as any).npcdesc ?? 0)} back onto the bed and throw your legs over him, reversing yourself in the process, and scooching your ass back towards his head. Grinning, you lower your hips down to his face while simultaneously grabbing his cock and preparing it for your mouth.`);
    }
    // TODO-QSP: act'Enjoy it': $sex_ev['foreplay_enjoyment'] = 'enjoy' & gt 'sex_ev_foreplay', '69_1'
    // TODO-QSP: act'Token effort': $sex_ev['foreplay_enjoyment'] = 'unsatisfying' & gt 'sex_ev_foreplay', '69_1'
    // TODO-QSP: act'Distracting': $sex_ev['foreplay_enjoyment'] = 'distracted' & gt 'sex_ev_foreplay', '69_1'
  } },
  ]);
  scene.build();
}

function enter69_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['temp'] = Math.floor(Math.random() * 6) + 5;
  scene.img(`images/shared/sex/69/${Math.floor(Math.random() * 2) + 1}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] === 'enjoy') {
    // TODO-QSP: dynamic text: The sensation of having your mouth filled with cock and <<$npcdesc>>'s tongue ru...
    scene.text(`The sensation of having your mouth filled with cock and ${((s as any).npcdesc ?? 0)}'s tongue running across your pussy sends a shudder through you. You feel your slit salivating between your legs and it quickly being lapped up by ${((s as any).npcdesc ?? 0)}'s tongue as the drool from your own tongue dribbles down the length of his cock.`);
    scene.text('<i>Oh fuck... this is so fucking hot...</i> you think as your eyes roll back in your head.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] === 'unsatisfying') {
      // TODO-QSP: dynamic text: After getting into position and giving <<$npcdesc>>'s cock a few sloppy sucks, y...
      scene.text(`After getting into position and giving ${((s as any).npcdesc ?? 0)}'s cock a few sloppy sucks, you quickly decide this isn't for you. His tongue between your legs proves to be far less satisfying when you have to have a dick in your mouth, and the constant need to adjust in order to keep your bodies lined up correctly isn't very sexy.`);
      scene.text('In the end, there\'s nothing to do but soldier on and keep sucking dick and hoping he gets bored as quickly as you do and you can move on to doing something else...');
    } else {
      if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] === 'distracted') {
        // TODO-QSP: dynamic text: The sensation of having your mouth filled with cock and <<$npcdesc>>'s tongue ru...
        scene.text(`The sensation of having your mouth filled with cock and ${((s as any).npcdesc ?? 0)}'s tongue running across your pussy is... <i>really</i> distracting.`);
        scene.text('It sounded fun on paper but trying to suck a dick while you\'re getting your pussy eaten at the same time leaves you unable to focus on either thing. Every time you stop to enjoy his tongue, his hips buck and suddenly you\'re being choked by his cock. And when you focus on sucking him off, his tongue will hit your clit and you have to stop yourself from biting his dick off!');
        scene.text('How does anybody enjoy this?!');
      }
    }
  }
  qspCall(s, 'sex_ev_foreplay', '69_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enter69_2(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/shared/sex/69/${Math.floor(Math.random() * 2) + 1}.mp4`);
  ((s as any).sex_ev ?? {})['cycle_limit'] = (((s as any).sex_ev ?? {})['cycle_limit'] ?? 0) + (1);
  if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] === 'enjoy') {
    // TODO-QSP: dynamic text: You keep bobbing your head up and down <<$npcdesc>>'s cock, enjoying the taste o...
    scene.text(`You keep bobbing your head up and down ${((s as any).npcdesc ?? 0)}'s cock, enjoying the taste of him on your tongue as much as you enjoy the feel of his tongue on your pussy. He keeps licking and you keep sucking and you're happy to keep going.`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] === 'unsatisfying') {
      // TODO-QSP: dynamic text: You keep bobbing your head up and down <<$npcdesc>>'s cock by rote, jaw aching w...
      scene.text(`You keep bobbing your head up and down ${((s as any).npcdesc ?? 0)}'s cock by rote, jaw aching with the effort of keeping your teeth off it. His tongue is still working between your legs, but it may as well be on another planet as you focus entirely on putting the most token effort you can into sucking him off until he gets bored.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['foreplay_enjoyment'] === 'distracted') {
        // TODO-QSP: dynamic text: You keep bobbing your head up and down <<$npcdesc>>'s cock, enjoying the taste o...
        scene.text(`You keep bobbing your head up and down ${((s as any).npcdesc ?? 0)}'s cock, enjoying the taste of him on your tongue until you realize how much it hurts your neck. Or that you need to scoot down so he can keep licking your pussy. Or that you need to lift your hips higher so it isn't resting directly on his face. Or that you scooted too far and can't reach his cock with your mouth anymore. Or that he's freeloading and not licking your pussy anymore. Or that the angle is jamming his cock into the back of your throat!`);
        scene.text('But yeah, other than all those distractions, really enjoying this sixty-nine thing...');
      }
    }
  }
  qspCall(s, 'sex_ev_foreplay', '69_cum_sort');
  // TODO-QSP: end
  scene.build();
}

function enter69CumSort(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  // TODO-QSP: gs 'arousal', 'cuni', sex_ev['temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
  // TODO-QSP: gs 'arousal', 'cuni', -sex_ev['temp'], 'no_orgasm_msg', $sex_ev['prostitution_flag']
  if ((Math.floor(Math.random() * 10) + 1) === ((s as any).sex_ev ?? 0)?.['sex_stamina'] - 1  ||  ((Math.floor(Math.random() * 10) + 1) > ((s as any).sex_ev ?? 0)?.['sex_stamina'] - 2  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === '69')) {
    ((s as any).sex_ev ?? {})['cum_mouth_surprise'] = 1;
  } else {
    if (((s as any).sex_ev ?? 0)?.['cycle_limit'] >= ((s as any).sex_ev ?? 0)?.['sex_stamina']) {
      ((s as any).sex_ev ?? {})['boy_cum'] = 1;
    }
  }
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.text('Just a little more... a little more... and you\'re gonna...');
    // TODO-QSP: act'Come!': gt 'sex_ev_foreplay', '69_girl_cum'
  } else {
    if (((s as any).sex_ev ?? 0)?.['boy_cum'] === 1) {
      qspCall(s, 'sex_ev_foreplay', '69_cum_warn');
    } else {
      if ((Math.floor(Math.random() * 10) + 1) > 7  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] !== '69') {
        scene.text('After a few minutes, you feel his hand tapping your ass, trying to slow you down.');
        if (((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
          scene.text('"Hey-" he grunts. "If you keep that up, I\'m gonna come. I still wanna fuck you."');
        } else {
          scene.text('"Hey-" he grunts. "If you keep that up, I\'m gonna come. I wanna fuck again."');
        }
        qspCall(s, 'sex_ev_foreplay', '69_cum_menu');
      } else {
        // TODO-QSP: act'Keep 69ing': gt 'sex_ev_foreplay', '69_2'
        qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter69CumWarn(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>-!" <<$npc_usedname[$npcID]>> grunts. "I'm cumming-!"
  scene.text(`"${((s as any).pcs_nickname ?? 0)}-!" ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grunts. "I'm cumming-!"`);
  scene.text('His hips buck upwards, shoving his cock further into your mouth.');
  // TODO-QSP: act'Suck him dry': gt 'sex_ev_foreplay', '69_boy_cum'
  // TODO-QSP: end
  scene.build();
}

function enter69CumMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Suck him dry': gt 'sex_ev_foreplay', '69_boy_cum'
  // TODO-QSP: end
  scene.actions([
    { label: 'Pull back (sex)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['must_fuck'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You pull your mouth off his cock with a pop and look back at him, a grin on your lips.');
    scene.text('"Me too," you say, throwing your self off of his face.');
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
  ]);
  scene.build();
}

function enter69BoyCum(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['last_cum'] = 'swallow';
  ((s as any).sex_ev ?? {})['swallow'] = 1;
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
  scene.img('images/shared/sex/cum/mouth/69_cum1.mp4');
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    ((s as any).sex_ev ?? {})['came_together'] = 2;
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    // TODO-QSP: dynamic text: An explosion of thick salty liquid bursts in your mouth, immediately followed by...
    scene.text(`An explosion of thick salty liquid bursts in your mouth, immediately followed by another explosion of pleasure between your hips. His cum hitting the back of your throat sets off your orgasm as your eyes roll back in your head and start choking it down, trying not to drown in it while you're busy drowning in pleasure. Your thighs tighten around ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s head, wrestling your need to breath with your orgasm and need to swallow.`);
    // TODO-QSP: dynamic text: It takes a while for your orgasm to die down but once it does, you realize you'v...
    scene.text(`It takes a while for your orgasm to die down but once it does, you realize you've sucked him dry and take a shuddering gasp through your nose, lips still wrapped around ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s softening cock.`);
  } else {
    // TODO-QSP: dynamic text: An explosion of thick salty liquid bursts in your mouth, filling the back of you...
    scene.text(`An explosion of thick salty liquid bursts in your mouth, filling the back of your throat. Without missing a beat, you start gulping, swallowing ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cum as soon as it leaves his cock, practically letting him come straight down your throat. He pulses between your lips, hips bucking, but you never stop sucking, relishing the groans you hear coming from under your ass and between your thighs.`);
    // TODO-QSP: dynamic text: It takes a while for his orgasm to die down but once it does, you realize you've...
    scene.text(`It takes a while for his orgasm to die down but once it does, you realize you've sucked him dry and take a deep, slow breath through your nose, lips still wrapped around ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s softening cock.`);
  }
  qspCall(s, 'sex_ev_sex', 'sex_end');
  // TODO-QSP: end
  scene.build();
}

function enter69GirlCum(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
  scene.img('images/shared/sex/cum/mouth/69_cum1.mp4');
  scene.text('<i>Fuck!</i>');
  if (((s as any).sex_ev ?? 0)?.['boy_cum'] === 0) {
    // TODO-QSP: dynamic text: Pleasure explodes through your body, your pussy quivering uncontrollably beneath...
    scene.text(`Pleasure explodes through your body, your pussy quivering uncontrollably beneath the ministrations of ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s tongue even as your eyes roll back in your head. Your thighs tighten around his head and your throat is choked with his cock and everything is <i>perfect</i> as your vision goes white in mind numbing ecstasy for a few moments. When your orgasm finally dies down, you take a shuddering gasp through your nose, lips still wrapped around ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s cock.`);
    // TODO-QSP: act'Keep 69ing': gt 'sex_ev_foreplay', '69_2'
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } else {
    ((s as any).sex_ev ?? {})['last_cum'] = 'swallow';
    ((s as any).sex_ev ?? {})['swallow'] = 1;
    ((s as any).sex_ev ?? {})['came_together'] = 2;
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).npcID ?? 0), 1);
    // TODO-QSP: dynamic text: Pleasure explodes through your body, your pussy quivering uncontrollably beneath...
    scene.text(`Pleasure explodes through your body, your pussy quivering uncontrollably beneath the ministrations of ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s tongue. Even as your eyes roll back in your head, a second explosion goes off in your mouth and suddenly your throat is filled with thick, salty, cum. Your thighs tighten around ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s head, wrestling your need to breath with your orgasm and choking down his cum.`);
    scene.text('It takes a while for your orgasm to die down but once it does, you realize there\'s nothing left to swallow either and take a shuddering gasp through your nose, barely managing not to choke on the cock and cum that fills your throat.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFacesit_1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Sit on his face', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    ((s as any).sex_ev ?? {})['position'] = 'facesit';
    ((s as any).sex_ev ?? {})['facesit_count'] = (((s as any).sex_ev ?? {})['facesit_count'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['foreplay_change'] >= 1) {
      // TODO-QSP: dynamic text: You pull away from <<$npcdesc>>'s cock, crawling forward until your legs are ove...
      scene.text(`You pull away from ${((s as any).npcdesc ?? 0)}'s cock, crawling forward until your legs are over his head. You lower your pussy down onto his mouth with a dirty grin.`);
      scene.text('"I think it\'s time for me to get a little tender loving care."');
      ((s as any).sex_ev ?? {})['foreplay_change'] = 2;
    } else {
      ((s as any).sex_ev ?? {})['foreplay_change'] = (((s as any).sex_ev ?? {})['foreplay_change'] ?? 0) + (1);
      // TODO-QSP: dynamic text: You push <<$npcdesc>> back onto the bed and throw your legs over his head. You l...
      scene.text(`You push ${((s as any).npcdesc ?? 0)} back onto the bed and throw your legs over his head. You lower your pussy down onto his mouth with a dirty grin.`);
      scene.text('"I think it\'s time for me to go for a ride."');
    }
    scene.actions([
      { label: 'Make him eat you out', goto: ['sex_ev_foreplay', 'facesit_2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFacesit_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', 'cuni', rand(4,8), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/facesit/1.mp4');
  // TODO-QSP: dynamic text: You press your pussy right onto <<$npcdesc>>'s face, forcing it between his lips...
  scene.text(`You press your pussy right onto ${((s as any).npcdesc ?? 0)}'s face, forcing it between his lips. He immediately complies, sucking gently on your sex while running his tongue through the folds of your pussy to caress your clit.`);
  scene.text('It feels so good, your eyes roll back in your skull and you can\'t help but grab him by the hair, trying to force his face harder into your pussy. Heat courses through your hips and somewhere in the back of your mind, you wonder if it\'s possible to drown a man with girl cum.');
  if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm']) {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/facesit/orgasm1.mp4');
    // TODO-QSP: dynamic text: Euphoric pressure builds and builds inside you until you can't contain it anymor...
    scene.text(`Euphoric pressure builds and builds inside you until you can't contain it anymore. All it takes is ${((s as any).npcdesc ?? 0)}'s tongue brushing against your clit in <i>just</i> the right way, and suddenly you're coming, body racked with spasms as you claw the bedsheets uncontrollably while you ride out your orgasm.`);
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: After a short time, you feel the waves of climax subsiding but without warning, ...
      scene.text(`After a short time, you feel the waves of climax subsiding but without warning, permission, or invitation, ${((s as any).npcdesc ?? 0)} begins working your pussy with his tongue again, diving in deep and sending goosebumps across your skin.`);
      qspCall(s, 'sex_ev_sex', 'sex_start');
      scene.actions([
        { label: 'Let him keep going', goto: ['sex_ev_foreplay', 'facesit_3'] },
        { label: 'Let\'s do something else', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hold your horses cowboy," you grin. "I <i>love</i> your tongue, but how about we do something else instead?"');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    } else {
      scene.text('After a short time, you feel the waves of climax subsiding as you breath hard and lean forward, releasing his face from between your thighs.');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_sex', 'sex_start');
    }
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Keep going until you cum', handler: (st: GameState) => {
    scene.img('images/shared/sex/facesit/orgasm1.mp4');
    scene.text('His mouth stays planted firmly between your lips.');
    scene.text('"Oh <i>fu-!</i>"');
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('Before you can say anything, he starts eating you out again.');
      scene.actions([
        { label: 'Let him', goto: ['sex_ev_foreplay', 'facesit_3'] },
        { label: 'Let\'s do something else', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hold your horses cowboy," you grin. "I love your tongue, but how about we do something else?"');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    } else {
      scene.text('You wind down, pulling back from his face.');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    }
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFacesit_3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/facesit/1.mp4');
  if (((s as any).orgasm ?? 0) > ((s as any).sex_ev ?? 0)?.['orgasm_limit']) {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: <<$npcdesc>>'s tongue caresses your pussy again, but this time instead of pleasu...
    scene.text(`${((s as any).npcdesc ?? 0)}'s tongue caresses your pussy again, but this time instead of pleasure, the shocks it sends through you are like needles through your clit. You cry out, caught between pain and ecstasy but much further towards pain. His tongue touches you again and you reflexively buck your hips away from his face. ${((s as any).npcdesc ?? 0)} looks up at you from between your legs, confused.`);
    scene.text('"What\'s wrong?" he asks. "I thought you were enjoying that."');
    scene.text('"I- I was..." you pant. "But my pussy is too sensitive now." You manage a smile down at him. "You made me come too many times in a row. I don\'t think I can take it any more. I need a break."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>>'s tongue keeps going like a pussy-eating machine, never stopping, a...
    scene.text(`${((s as any).npcdesc ?? 0)}'s tongue keeps going like a pussy-eating machine, never stopping, and always making sure to give the little man in the boat the attention he deserves.`);
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Come again', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'cuni', rand(2,5), 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(s, 'stat', '');
    scene.img('images/shared/sex/facesit/orgasm1.mp4');
    // TODO-QSP: dynamic text: Within minutes, <<$npcdesc>> has you spasming around his mouth again.
    scene.text(`Within minutes, ${((s as any).npcdesc ?? 0)} has you spasming around his mouth again.`);
    if (((s as any).npc_pussyeater ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: But <<$npcdesc>> still doesn't stop, and continues to lap up your juices like he...
      scene.text(`But ${((s as any).npcdesc ?? 0)} still doesn't stop, and continues to lap up your juices like he's dying of thirst.`);
      if (((s as any).sex_ev ?? 0)?.['cuni_orgasm'] < 5) {
        scene.actions([
          { label: 'Let him keep going', goto: ['sex_ev_foreplay', 'facesit_3'] },
        ]);
      }
      qspCall(s, 'sex_ev_foreplay', 'cuni_too_sensitive');
      qspCall(s, 'sex_ev_sex', 'sex_start');
      scene.actions([
        { label: 'Let\'s do something else', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Hold your horses cowboy," you grin. "I love your tongue, but how about we do something else?"');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "How about we do something else now?" <<$npcdesc>> asks as your orgasm winds dow...
      scene.text(`"How about we do something else now?" ${((s as any).npcdesc ?? 0)} asks as your orgasm winds down.`);
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_sex', 'sex_start');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterTransition1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    qspCall(s, 'sex_ev_foreplay_desc', 'transition1_desc');
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_fuck'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] === 0) {
      qspCall(s, 'sex_ev_virgin', 'start1');
    } else {
      scene.actions([
        { label: 'Fuck instead?', handler: (st: GameState) => {
    scene.text('"Uhh, no," you say, turning your head away with a smirk. "How about we fuck instead?"');
    // TODO-QSP: dynamic text: "I won't say no to that," <<$npcdesc>> grins back.
    scene.text(`"I won't say no to that," ${((s as any).npcdesc ?? 0)} grins back.`);
    qspCall(s, 'sex_ev_sex', 'reset');
    qspCall(s, 'sex_ev_condoms', 'condoms');
    qspCall(s, 'sex_ev_sex', 'position_change');
  } },
      ]);
    }
    scene.actions([
      { label: 'Let him', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj51.mp4');
    scene.text('Relaxing your jaw, you let his cock part your lips and slowly slip into inside your mouth.');
    scene.actions([
      { label: 'Blowjob', goto: ['sex_ev_foreplay', 'bj_sub2'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTransition2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_foreplay ---------------------------------
  scene.actions([
    { label: 'End it there', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I think I\'m done there," you pant.');
    // TODO-QSP: dynamic text: "What the hell?" <<$npcdesc>> protests. "How is that fair? Only you got off!"
    scene.text(`"What the hell?" ${((s as any).npcdesc ?? 0)} protests. "How is that fair? Only you got off!"`);
    qspCall(s, 'sex_ev_sex', 'sex_start');
    scene.actions([
      { label: 'Ugh, fine (blowjob)', handler: (st: GameState) => {
    scene.text('"Ugh," you moan irately. "<i>Fine</i>. Come here," you say rolling over and bending your head down towards his cock.');
    scene.actions([
      { label: 'Play with his cock (mouth)', goto: ['sex_ev_foreplay', 'blowjob_tease_dom'] },
    ]);
  } },
      { label: 'Ugh, fine (sex)', handler: (st: GameState) => {
    scene.text('"Ugh," you moan irately. "<i>Fine</i>."');
    scene.text('You turn around, laying back on the bed and spreading your legs. "I guess I can let you fuck me before we stop."');
    ((s as any).sex_ev ?? {})['position_choose'] = 1;
    qspCall(s, 'sex_ev_sex', 'sex_start');
  } },
      { label: 'Sorry, I\'m done', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'finish');
  } },
      { label: 'Blow him', handler: (st: GameState) => {
    scene.text('"You\'re right," you smile apologetically. "It\'s only fair that I get you off too. Here, just let me..."');
    scene.text('You kneel down, taking his cock into your mouth.');
    scene.actions([
      { label: 'Play with his cock (mouth)', goto: ['sex_ev_foreplay', 'blowjob_tease_dom'] },
    ]);
  } },
    ]);
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
    case 'selfish_fuck_start':
      enterSelfishFuckStart(s, scene);
      break;
    case 'fingering_start':
      enterFingeringStart(s, scene);
      break;
    case 'fingering_init':
      enterFingeringInit(s, scene);
      break;
    case 'fingering_good_cycle':
      enterFingeringGoodCycle(s, scene);
      break;
    case 'fingering_orgasm':
      enterFingeringOrgasm(s, scene);
      break;
    case 'kuni_ask':
      enterKuniAsk(s, scene);
      break;
    case 'kuni_start_acts':
      enterKuniStartActs(s, scene);
      break;
    case 'kuni_leg_spread':
      enterKuniLegSpread(s, scene);
      break;
    case 'kuni_leg_close':
      enterKuniLegClose(s, scene);
      break;
    case 'cuni_alternatives':
      enterCuniAlternatives(s, scene);
      break;
    case 'period_lick':
      enterPeriodLick(s, scene);
      break;
    case 'pussy_lick_start':
      enterPussyLickStart(s, scene);
      break;
    case 'pussy_lick_react':
      enterPussyLickReact(s, scene);
      break;
    case 'pussy_lick_continue':
      enterPussyLickContinue(s, scene);
      break;
    case 'pussy_lick_loop':
      enterPussyLickLoop(s, scene);
      break;
    case 'cuni_too_sensitive':
      enterCuniTooSensitive(s, scene);
      break;
    case 'nipple_play':
      enterNipplePlay(s, scene);
      break;
    case 'bj_ask':
      enterBjAsk(s, scene);
      break;
    case 'bj_ask2':
      enterBjAsk2(s, scene);
      break;
    case 'bj_sub1':
      enterBjSub1(s, scene);
      break;
    case 'bj_sub1_continue':
      enterBjSub1Continue(s, scene);
      break;
    case 'bj_sub2':
      enterBjSub2(s, scene);
      break;
    case 'bj_sub_cum_surprise':
      enterBjSubCumSurprise(s, scene);
      break;
    case 'bj_sub_cum_where':
      enterBjSubCumWhere(s, scene);
      break;
    case 'bj_sub_cum_hand':
      enterBjSubCumHand(s, scene);
      break;
    case 'bj_sub_cum_mouth1':
      enterBjSubCumMouth1(s, scene);
      break;
    case 'bj_sub_cum_mouth1.2':
      enterBjSubCumMouth1_2(s, scene);
      break;
    case 'bj_sub_cum_mouth2':
      enterBjSubCumMouth2(s, scene);
      break;
    case 'bj_sub_cum_mouth_spit':
      enterBjSubCumMouthSpit(s, scene);
      break;
    case 'bj_sub_cum_mouth_gag':
      enterBjSubCumMouthGag(s, scene);
      break;
    case 'bj_sub_cum_mouth_swallow':
      enterBjSubCumMouthSwallow(s, scene);
      break;
    case 'bj_sub_cum_face1':
      enterBjSubCumFace1(s, scene);
      break;
    case 'bj_sub_cum_face1.2':
      enterBjSubCumFace1_2(s, scene);
      break;
    case 'bj_sub_cum_face2':
      enterBjSubCumFace2(s, scene);
      break;
    case 'bj_sub_cum_face3':
      enterBjSubCumFace3(s, scene);
      break;
    case 'bj_sub_cum_tits1':
      enterBjSubCumTits1(s, scene);
      break;
    case 'bj_sub_cum_tits1.2':
      enterBjSubCumTits1_2(s, scene);
      break;
    case 'bj_sub_cum_tits2':
      enterBjSubCumTits2(s, scene);
      break;
    case 'bj_force_cum_mouth':
      enterBjForceCumMouth(s, scene);
      break;
    case 'bj_force_cum_wtf':
      enterBjForceCumWtf(s, scene);
      break;
    case 'be_nice':
      enterBeNice(s, scene);
      break;
    case 'lucky_like':
      enterLuckyLike(s, scene);
      break;
    case 'bj_force_cum_submit':
      enterBjForceCumSubmit(s, scene);
      break;
    case 'bj_force_cum_grumble':
      enterBjForceCumGrumble(s, scene);
      break;
    case 'bj_sub_cum_warn':
      enterBjSubCumWarn(s, scene);
      break;
    case 'bj_sub_lets_fuck':
      enterBjSubLetsFuck(s, scene);
      break;
    case 'bj_resume':
      enterBjResume(s, scene);
      break;
    case 'bj_sub_cum_sort':
      enterBjSubCumSort(s, scene);
      break;
    case 'bj_sub_cum_wait':
      enterBjSubCumWait(s, scene);
      break;
    case 'bj_end':
      enterBjEnd(s, scene);
      break;
    case 'foreplay_choose':
      enterForeplayChoose(s, scene);
      break;
    case 'foreplay_rand':
      enterForeplayRand(s, scene);
      break;
    case 'makeout_dom1':
      enterMakeoutDom1(s, scene);
      break;
    case 'makeout_dom2':
      enterMakeoutDom2(s, scene);
      break;
    case 'makeout_dom3':
      enterMakeoutDom3(s, scene);
      break;
    case 'handjob_dom1':
      enterHandjobDom1(s, scene);
      break;
    case 'hj_cum1':
      enterHjCum1(s, scene);
      break;
    case 'blowjob_tease_dom':
      enterBlowjobTeaseDom(s, scene);
      break;
    case 'bj_tease_continue':
      enterBjTeaseContinue(s, scene);
      break;
    case 'bj_dom1_cum':
      enterBjDom1Cum(s, scene);
      break;
    case 'bj_dom_menu':
      enterBjDomMenu(s, scene);
      break;
    case 'bj_dom2':
      enterBjDom2(s, scene);
      break;
    case 'bj_sensual':
      enterBjSensual(s, scene);
      break;
    case 'bj_sloppy':
      enterBjSloppy(s, scene);
      break;
    case 'bj_deepthroat':
      enterBjDeepthroat(s, scene);
      break;
    case 'bj_dom_cum_sort':
      enterBjDomCumSort(s, scene);
      break;
    case 'bj_dom2_continue':
      enterBjDom2Continue(s, scene);
      break;
    case 'bj_dom2_cum_act':
      enterBjDom2CumAct(s, scene);
      break;
    case 'bj_dom_tease_cum':
      enterBjDomTeaseCum(s, scene);
      break;
    case 'bj_dom_spit1':
      enterBjDomSpit1(s, scene);
      break;
    case 'bj_dom_spit2':
      enterBjDomSpit2(s, scene);
      break;
    case 'bj_dom_swallow1':
      enterBjDomSwallow1(s, scene);
      break;
    case 'bj_dom_swallow_react':
      enterBjDomSwallowReact(s, scene);
      break;
    case '69_start':
      enter69Start(s, scene);
      break;
    case '69_1':
      enter69_1(s, scene);
      break;
    case '69_2':
      enter69_2(s, scene);
      break;
    case '69_cum_sort':
      enter69CumSort(s, scene);
      break;
    case '69_cum_warn':
      enter69CumWarn(s, scene);
      break;
    case '69_cum_menu':
      enter69CumMenu(s, scene);
      break;
    case '69_boy_cum':
      enter69BoyCum(s, scene);
      break;
    case '69_girl_cum':
      enter69GirlCum(s, scene);
      break;
    case 'facesit_1':
      enterFacesit_1(s, scene);
      break;
    case 'facesit_2':
      enterFacesit_2(s, scene);
      break;
    case 'facesit_3':
      enterFacesit_3(s, scene);
      break;
    case 'transition1':
      enterTransition1(s, scene);
      break;
    case 'transition2':
      enterTransition2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_foreplay: LocationDef = {
  name: 'sex_ev_foreplay',
  title: 'Fuck! He\'s good at this!',
  region: 'other',
  enter: enter,
};
