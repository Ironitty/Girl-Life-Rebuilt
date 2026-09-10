import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['lover_left'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone'] }]);
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'sleep_fuck_wake'] }]);
  }
  if (((s as any).vomit ?? 0)?.['hangover'] + ((s as any).vomit ?? 0)?.['morning_sick'] + ((s as any).vomit ?? 0)?.['unlucky'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'throw_up'] }]);
  } else {
    if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (Math.floor(Math.random() * 2) + 1) === 2) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'cumshot_wakeup1'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wakeup_fondling'] }]);
    }
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wake_events'] }]);
  }
  scene.build();
}

function enterWakeEvents(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) {
    scene.text('A loud sound pierces your consciousness like a spear through the brain, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover, as you look around in bewilderment at what is making that awful sound, only to find it is your phone alarm going off.');
    // TODO-QSP: else}
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    qspCall(s, 'sex_ev_wakeup', 'kiss_wake');
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  } else {
    scene.text('A sharp lance of pain pierces your consciousness, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover.');
    // TODO-QSP: else}
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, snuggled under your covers...
        scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under your covers with ${((s as any).npcdesc ?? 0)}'s arms wrapped around you.`);
      } else {
        // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, tucked under the covers of...
        scene.text(`Your mind stirs and you slowly come to consciousness, tucked under the covers of ${((s as any).npcdesc ?? 0)}'s bed.`);
        // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, snuggled under the covers ...
        scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under the covers with ${((s as any).npcdesc ?? 0)}'s arms wrapped around you.`);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under your covers.');
      } else {
        scene.text('Your mind stirs and you slowly come to consciousness, tucked under the covers.');
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under the covers.');
      }
    }
    qspCall(s, 'sex_ev_wakeup', 'kiss_wake');
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  }
  qspCall(s, 'sex_ev_wakeup', 'late_for_school');
  qspCall(s, 'sex_ev_wakeup', 'after_sleepfuck_wake');
  qspCall(s, 'sex_ev_wakeup', 'guilt_start');
  qspCall(s, 'sex_ev_wakeup', 'forgot_bc_pill');
  scene.build();
}

function enterWakeAlone(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) {
    scene.text('A loud sound pierces your consciousness like a spear through the brain, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover, as you look around in bewilderment at what is making that awful sound, only to find it is your phone alarm going off.');
    // TODO-QSP: else}
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    scene.text('You groggily tap it a few times before finally getting it to turn off.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  } else {
    scene.text('A sharp lance of pain pierces your consciousness, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover.');
    // TODO-QSP: else}
    scene.text('Your mind stirs and you slowly come to awareness that it\'s morning and you\'re snuggled under the covers.');
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  }
  scene.build();
}

function enterWakeAlone2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wake_alone1.mp4');
  // TODO-QSP: dynamic text: It's only then that you sit up in bed and realize that <<$npcdesc>> is gone.
  scene.text(`It's only then that you sit up in bed and realize that ${((s as any).npcdesc ?? 0)} is gone.`);
  scene.text('You vaguely remember passing out last night. He must have left after you fell asleep. Or early this morning.');
  scene.text('Either way, now it\'s just... you.');
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterHangover(s: GameState, scene: SceneBuilder): void {
  scene.text('He wakes up at the same time as you');
  // TODO-QSP: :loopwakeup3
  if (((s as any).sex_ev ?? 0)?.['hangover'] === 1) {
    // TODO-QSP: act 'I need coffee and a shower'
    scene.actions([
      { label: 'I need coffee', handler: (st: GameState) => {
    scene.text('"I desperately need coffee," you wince, rubbing your brow as if will somehow make your blindingly painful headache go away.');
    // TODO-QSP: dynamic text: "Me too." <<$npcdesc>> says, seemingly in the same state.
    scene.text(`"Me too." ${((s as any).npcdesc ?? 0)} says, seemingly in the same state.`);
  } },
      { label: 'Can I use your shower?' }, // TODO-QSP: empty action body
    ]);
  }
  scene.build();
}

function enterSleepFuckWake(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystage ?? 0) === 2) {
    scene.img('images/shared/romance/misc/wakeup1.mp4');
  } else {
    scene.img('images/shared/sex/after/sleep4.jpg');
  }
  scene.text('Your mind stirs and you slowly come to consciousness. The first thing you notice...');
  if (((s as any).sex_ev ?? 0)?.['sleep_cum_vagina'] === 1) {
    scene.text('<i>Is that cum leaking out of my pussy?</i>');
  } else {
    scene.text('<i>Is there cum on my face?</i>');
    if (((s as any).sex_ev ?? 0)?.['sleep_cum_tits'] === 1) {
      scene.text('<i>Is there cum on my tits?</i>');
    } else {
      scene.text('<i>Is that cum on my stomach?</i>');
      if (((s as any).sex_ev ?? 0)?.['sleep_cum_hair'] === 1) {
        scene.text('<i>Is that cum in my hair?</i>');
      } else {
        scene.text('<i>Is that cum on my back?</i>');
        if (((s as any).sex_ev ?? 0)?.['sleep_cum_butt'] === 1) {
          scene.text('<i>Is that cum on my butt?</i>');
        }
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sleep_cum_vagina'] === 1) {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You pull aside the covers and discover, yes, it is indeed fresh cum dripping from your pussy.');
    } else {
      scene.img('images/shared/sex/cum/facial/facial35.jpg');
      scene.text('You blink carefully, running your hand across your cheek to discover, yes, there is indeed fresh cum on your face.');
      if (((s as any).sex_ev ?? 0)?.['sleep_cum_tits'] === 1) {
        scene.img('images/pc/body/cum/cumtits/cumtits8.jpg');
        scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your tits.');
      } else {
        scene.img('images/pc/body/cum/cumbelly/cumbelly10.jpg');
        scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your belly.');
        if (((s as any).sex_ev ?? 0)?.['sleep_cum_hair'] === 1) {
          scene.img('images/pc/body/cum/cumhair/cumhair1.jpg');
          scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum in your hair.');
        } else {
          scene.img('images/pc/body/cum/cumsleep/cumsleep2.jpg');
          scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your back.');
          if (((s as any).sex_ev ?? 0)?.['sleep_cum_butt'] === 1) {
            scene.img('images/pc/body/cum/cumass/cumass6.jpg');
            scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your ass.');
          }
          scene.actions([
            { label: 'Did you fuck me in my sleep?', handler: (st: GameState) => {
    scene.text('"... did you fuck me while I was sleeping last night?" you ask.');
    if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Yeah. Got horny and you wouldn\'t wake up."');
      scene.actions([
        { label: 'Don\'t make a habit out of it', handler: (st: GameState) => {
    scene.text('"It was fine this time," you say. "But don\'t make a habit out of it."');
    // TODO-QSP: dynamic text: "No promises," <<$npcdesc>> smirks mischievously.
    scene.text(`"No promises," ${((s as any).npcdesc ?? 0)} smirks mischievously.`);
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Wake me up next time', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Wake me up next time," you say. "Maybe I want to get some too."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'That\'s fine', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"That\'s fine," you say. "A guy\'s gotta take care of his needs, doesn\'t he?"');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      ]);
    } else {
      scene.text('"Yeah," he grins.');
      if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] === -1) {
        scene.actions([
          { label: 'Get mad', handler: (st: GameState) => {
    scene.text('You glare daggers at him.');
    scene.text('"If I weren\'t in a rush to get up, I\'d rip your head off."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Let it slide', handler: (st: GameState) => {
    scene.text('"No," you say. "But I can\'t do much about it now."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"I love it when you fuck me in my sleep," you grin. "I have the best orgasms."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Just wondered', handler: (st: GameState) => {
    scene.text('"Was just wondering," you reply.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Explains the dream', handler: (st: GameState) => {
    scene.text('"Well that explains the weird dreams I was having," you say.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  } },
            { label: 'Someone had fun last night', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Somebody had fun last night," you muse, looking over at <<$npcdesc>> who is als...
    scene.text(`"Somebody had fun last night," you muse, looking over at ${((s as any).npcdesc ?? 0)} who is also waking.`);
    if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Yeah. Got horny while you were asleep. Is that okay?"');
      scene.actions([
        { label: 'Ask next time', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Just ask next time," you smirk.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'That\'s fine', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"That\'s fine," you smirk. "A guy\'s gotta take care of his needs, doesn\'t he?"');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      ]);
    } else {
      scene.text('"Yeah," he grins. "That okay?"');
      if (((s as any).npc_sleep_sex_okay ?? 0)?.[String((s as any).npcID ?? 0)] === -1) {
        scene.actions([
          { label: 'Get mad', handler: (st: GameState) => {
    scene.text('"No," you say, glaring daggers at him. "If I weren\'t in a rush to get up, I\'d rip your head off."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Let it slide', handler: (st: GameState) => {
    scene.text('"No," you say irritably. "But I can\'t do much about it now."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Of course', handler: (st: GameState) => {
    scene.text('"Of course it is," you smile. "I said you could."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    (s as any).npc_sleep_sex_okay[String((s as any).npcID ?? 0)] = 2;
    scene.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
  } },
            { label: 'Thanks for not waking me', handler: (st: GameState) => {
    scene.text('"Thanks for not waking me," you yawn pleasantly. You roll your hips as you do, noting that your pussy <i>definitely</i> feels used. "I really needed the sleep."');
    scene.text('"Thanks for letting me fuck you," he grins.');
    scene.text('"Any time," you smile.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
          ]);
        }
      }
    }
    // TODO-QSP: dynamic text: When your guts stop coming up, you stumble to your feet and stagger out the door...
    scene.text(`When your guts stop coming up, you stumble to your feet and stagger out the door to see ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} still snoring in bed.`);
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterWakeupFondling(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: gs 'arousal', 'foreplay', -rand(5,10), 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.img('images/shared/sex/sleep/fondle1.jpg');
  scene.text('You stir as you feel a hands roaming your body. One passes over your breasts, squeezing them on the way down to your stomach. The other is already snaking its way between your legs. Something stiff and warm is poking into your lower back.');
  scene.actions([
    { label: '"Good morning"', handler: (st: GameState) => {
    scene.text('"Mmmmm..." you hum, smiling to yourself as his fingers find your pussy. "Good morning to you too, mister."');
    if (((s as any).npc_fav_body_part ?? 0)?.[String((s as any).npcID ?? 0)] === 'tits') {
      scene.text('"Sorry, couldn\'t help myself," he murmurs, reaching up to grope your breasts again. "Your tits just feel so good."');
    } else {
      scene.text('"Sorry, couldn\'t help myself," he murmurs.');
    }
    scene.actions([
      { label: 'Time to get up anyways', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I don\'t mind," you reply. "It was about time to get up anyways."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Have wakeup sex', handler: (st: GameState) => {
    scene.text('"So did you just want to cop a feel or were you interested in something else?" you reply, grinding back and forth between his hard-on and his fingers.');
    qspCall(s, 'sex_ev_sex', 'session_reset');
    qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterForgotBcPill(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pilldaychk ?? 0) < ((s as any).daystart ?? 0) - 1  &&  ((s as any).birth_control ?? 0)?.['using_bc'] > 0) {
    scene.actions([
      { label: 'Forgot your birth control', handler: (st: GameState) => {
    (s as any).sex_ev['forgot_bc'] = 1;
    if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.img('images/shared/sex/after/wakeup_shock1.mp4');
      scene.text('You bolt upright as a horrible realization jolts through your mind.');
    } else {
      scene.img('images/shared/sex/after/wakeup1.jpg');
      scene.text('You jolt awake as a horrible realization jumps through your mind.');
    }
    scene.text('<i>I forgot to take my birth control!</i>');
    scene.actions([
      { label: 'Panic', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    scene.text('Panic begins to set in as you sit up, your breathing already at the edge of hyperventilation.');
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 3) {
      // TODO-QSP: dynamic text: Not only did you forget your birth control, but <<$npcdesc>> came inside you las...
      scene.text(`Not only did you forget your birth control, but ${((s as any).npcdesc ?? 0)} came inside you last night too. <i>A lot.</i> How could you fuck up like this?`);
    } else {
      // TODO-QSP: dynamic text: Not only did you forget your birth control, but <<$npcdesc>> came inside you las...
      scene.text(`Not only did you forget your birth control, but ${((s as any).npcdesc ?? 0)} came inside you last night too. How could you fuck up like this?`);
      if (((s as any).pharmacy_timers ?? 0)?.['birth_control'] > 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> didn't come inside you yesterday, but this breaks your streak. Aunt...
        scene.text(`${((s as any).npcdesc ?? 0)} didn't come inside you yesterday, but this breaks your streak. Aunt Luda said you need to take it every day or it won't work. So if you take it now, does that mean you're still not safe?`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> didn't come inside you yesterday, but this breaks your streak. Are ...
        scene.text(`${((s as any).npcdesc ?? 0)} didn't come inside you yesterday, but this breaks your streak. Are you still safe if you skip a day?`);
      }
    }
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
        scene.text('Wait, don\'t you have that morning after pill Aunt Luda gave you?');
      } else {
        scene.text('Wait, don\'t you have a morning after pill in your bag?');
      }
    }
    // TODO-QSP: xgt 'sex_ev_wakeup', 'forgot_bc_pill2'
  } },
      { label: 'Calm down', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    scene.text('You sit up and start taking big deep breaths, forcing yourself to calm down and try to approach the situation logically.');
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
      if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
        scene.actions([
          { label: 'You\'re not fertile right now', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 5) {
        // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... <i>A lot.</i> But it's not t...
        scene.text(`Okay, so ${((s as any).npcdesc ?? 0)} came inside you last night... <i>A lot.</i> But it's not the fertile stage of your cycle. You should be fine, right?`);
      } else {
        // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... More than once... A <i>few</...
        scene.text(`Okay, so ${((s as any).npcdesc ?? 0)} came inside you last night... More than once... A <i>few</i> times. But it's not the fertile stage of your cycle. You should be fine, right?`);
        if (((s as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
          // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... But only once. And it's not ...
          scene.text(`Okay, so ${((s as any).npcdesc ?? 0)} came inside you last night... But only once. And it's not the fertile stage of your cycle. You should be fine, right?`);
        }
        if (((s as any).pharmacy_timers ?? 0)?.['birth_control'] > 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> didn't come inside you yesterday, so you're not in any real danger ...
          scene.text(`${((s as any).npcdesc ?? 0)} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second. But this breaks your streak. Aunt Luda said you need to take it every day or it won't work. So if you take it now, does that mean you're still not safe?`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> didn't come inside you yesterday, so you're not in any real danger ...
          scene.text(`${((s as any).npcdesc ?? 0)} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second. But does this mean you'll need to wait a few days to build up the birth control in your system again? If you take your next pill now, does that mean you're still not safe?`);
        }
      }
      // TODO-QSP: xgt 'sex_ev_wakeup', 'forgot_bc_pill2'
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'You can take a morning after pill', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 5) {
      // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... <i>A lot.</i> But you can st...
      scene.text(`Okay, so ${((s as any).npcdesc ?? 0)} came inside you last night... <i>A lot.</i> But you can still take a morning after pill. Maybe it'll be okay.`);
    } else {
      // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... More than once... A <i>few</...
      scene.text(`Okay, so ${((s as any).npcdesc ?? 0)} came inside you last night... More than once... A <i>few</i> times. But you can still take a morning after pill. Maybe it'll be okay.`);
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
        // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... But only once. That's not to...
        scene.text(`Okay, so ${((s as any).npcdesc ?? 0)} came inside you last night... But only once. That's not too bad, right? Maybe you can still take a morning after pill. Maybe it'll be okay.`);
      }
      if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
        if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
          scene.text('Actually, you have the one Aunt Luda gave you. For emergencies she said...');
        } else {
          scene.text('Actually, you have one in your bag. You could take it right now.');
        }
      }
      // TODO-QSP: xgt 'sex_ev_wakeup', 'forgot_bc_pill2'
    }
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 0) {
      (s as any).sex_ev['forgot_bc_act'] = 'You used condoms';
    } else {
      (s as any).sex_ev['forgot_bc_act'] = '<<$npcdesc>> didn\'t come inside you';
    }
    scene.actions([
      { label: '<<$sex_ev[\'forgot_bc_act\']>>', handler: (st: GameState) => {
    if (((s as any).pharmacy_timers ?? 0)?.['birth_control'] > 0) {
      // TODO-QSP: dynamic text: <<$npcdesc>> didn't come inside you yesterday, so you're not in any real danger ...
      scene.text(`${((s as any).npcdesc ?? 0)} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second.' + iif(sex_ev['no_condom'] = 0, ' Besides, you used condoms.', ' ') + 'But this breaks your streak. Aunt Luda said you need to take it every day or it won't work. So if you take it now, does that mean you're still not safe?`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> didn't come inside you yesterday, so you're not in any real danger ...
      scene.text(`${((s as any).npcdesc ?? 0)} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second.' + iif(sex_ev['no_condom'] = 0, ' Besides, you used condoms.', ' ') + 'But does this mean you'll need to wait a few days to build up the birth control in your system again? If you take your next pill now, does that mean you're still not safe?`);
    }
    // TODO-QSP: xgt 'sex_ev_wakeup', 'forgot_bc_pill2'
  } },
    ]);
  } },
      ]);
    }
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'wake_events':
      enterWakeEvents(s, scene);
      break;
    case 'wake_alone':
      enterWakeAlone(s, scene);
      break;
    case 'wake_alone2':
      enterWakeAlone2(s, scene);
      break;
    case 'hangover':
      enterHangover(s, scene);
      break;
    case 'sleep_fuck_wake':
      enterSleepFuckWake(s, scene);
      break;
    case 'wakeup_fondling':
      enterWakeupFondling(s, scene);
      break;
    case 'forgot_bc_pill':
      enterForgotBcPill(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const sex_ev_wakeup: LocationDef = {
  name: 'sex_ev_wakeup',
  title: 'A loud sound pierces your consciousness like a spear through',
  region: 'other',
  enter: enter,
};
