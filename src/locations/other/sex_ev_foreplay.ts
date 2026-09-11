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
  ((s as any).sex_ev ?? {})['bj_request'] = (((s as any).sex_ev ?? {})['bj_request'] ?? 0) + (1);
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
  scene.build();
}

function enterFingeringOrgasm(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKuniAsk(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterCuniTooSensitive(s: GameState, scene: SceneBuilder): void {
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
  scene.build();
}

function enterBjAsk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: "How about a blowjob?" <<$npcdesc>> asks.
  scene.text(`"How about a blowjob?" ${((s as any).npcdesc ?? 0)} asks.`);
  qspCall(s, 'sex_ev_foreplay', 'bj_ask2');
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
