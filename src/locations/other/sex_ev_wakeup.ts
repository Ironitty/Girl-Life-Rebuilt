import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['lover_left'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone'] }]);
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'sleep_fuck_wake'] }]);
  }
  if (((s as any).vomit ?? 0)?.['hangover'] + ((s as any).vomit ?? 0)?.['morning_sick'] + ((s as any).vomit ?? 0)?.['unlucky'] > 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'throw_up'] }]);
  } else {
    if ((((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).hour ?? 0) >= 7)  &&  ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)])) {
      if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (Math.floor(Math.random() * 2) + 1) === 2) {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'cumshot_wakeup1'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wakeup_fondling'] }]);
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_wakeup', 'wake_events'] }]);
    }
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
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, tucked under the covers of...
          scene.text(`Your mind stirs and you slowly come to consciousness, tucked under the covers of ${((s as any).npcdesc ?? 0)}'s bed.`);
        } else {
          // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, snuggled under the covers ...
          scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under the covers with ${((s as any).npcdesc ?? 0)}'s arms wrapped around you.`);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under your covers.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          scene.text('Your mind stirs and you slowly come to consciousness, tucked under the covers.');
        } else {
          scene.text('Your mind stirs and you slowly come to consciousness, snuggled under the covers.');
        }
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
    if (((s as any).sex_ev ?? 0)?.['sleep_cum_face'] === 1) {
      scene.text('<i>Is there cum on my face?</i>');
    } else {
      if (((s as any).sex_ev ?? 0)?.['sleep_cum_tits'] === 1) {
        scene.text('<i>Is there cum on my tits?</i>');
      } else {
        if (((s as any).sex_ev ?? 0)?.['sleep_cum_stomach'] === 1) {
          scene.text('<i>Is that cum on my stomach?</i>');
        } else {
          if (((s as any).sex_ev ?? 0)?.['sleep_cum_hair'] === 1) {
            scene.text('<i>Is that cum in my hair?</i>');
          } else {
            if (((s as any).sex_ev ?? 0)?.['sleep_cum_back'] === 1) {
              scene.text('<i>Is that cum on my back?</i>');
            } else {
              if (((s as any).sex_ev ?? 0)?.['sleep_cum_butt'] === 1) {
                scene.text('<i>Is that cum on my butt?</i>');
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sleep_cum_vagina'] === 1) {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You pull aside the covers and discover, yes, it is indeed fresh cum dripping from your pussy.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['sleep_cum_face'] === 1) {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        scene.text('You blink carefully, running your hand across your cheek to discover, yes, there is indeed fresh cum on your face.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['sleep_cum_tits'] === 1) {
          scene.img('images/pc/body/cum/cumtits/cumtits8.jpg');
          scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your tits.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['sleep_cum_stomach'] === 1) {
            scene.img('images/pc/body/cum/cumbelly/cumbelly10.jpg');
            scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your belly.');
          } else {
            if (((s as any).sex_ev ?? 0)?.['sleep_cum_hair'] === 1) {
              scene.img('images/pc/body/cum/cumhair/cumhair1.jpg');
              scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum in your hair.');
            } else {
              if (((s as any).sex_ev ?? 0)?.['sleep_cum_back'] === 1) {
                scene.img('images/pc/body/cum/cumsleep/cumsleep2.jpg');
                scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your back.');
              } else {
                if (((s as any).sex_ev ?? 0)?.['sleep_cum_butt'] === 1) {
                  scene.img('images/pc/body/cum/cumass/cumass6.jpg');
                  scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your ass.');
                }
              }
            }
          }
        }
      }
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
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Wake me up next time," you say. "Maybe I want to get some too."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'That\'s fine', handler: (st: GameState) => {
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 2;
    scene.text('"That\'s fine," you say. "A guy\'s gotta take care of his needs, doesn\'t he?"');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 2;
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
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 2;
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
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Just ask next time," you smirk.');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'That\'s fine', handler: (st: GameState) => {
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 2;
    scene.text('"That\'s fine," you smirk. "A guy\'s gotta take care of his needs, doesn\'t he?"');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 2;
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
    ((s as any).npc_sleep_sex_okay ?? {})[String((s as any).npcID ?? 0)] = 2;
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
  } },
  ]);
  scene.build();
}

function enterLateForSchool(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kanikuli ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 7) {
    scene.actions([
      { label: 'School!', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/wakeup2.mp4');
    scene.text('Your eyes snap open as the cold clarity of shock washes over you and frantically grab your phone.');
    qspCall(s, 'shortgs', 'calendar_display');
    scene.text('Oh <i>fuck!</i> You need to get to school!');
    if (((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
      qspCall(s, 'sex_ev_wakeup', 'late_school_not_at_home');
    } else {
      scene.actions([
        { label: 'Get up!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I need to go," you say, hurriedly hauling <<$npcdesc>> out of your bed. "And so...
    scene.text(`"I need to go," you say, hurriedly hauling ${((s as any).npcdesc ?? 0)} out of your bed. "And so do you."`);
    if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 2);
      // TODO-QSP: dynamic text: <<$npcdesc>> groggily starts gathering his clothes as you impatiently try to get...
      scene.text(`${((s as any).npcdesc ?? 0)} groggily starts gathering his clothes as you impatiently try to get him to go faster, constantly checking the clock to see how much time he's wasting. When he's <i>finally</i> dressed you rush ${((s as any).npcdesc ?? 0)} to the door and shove him out and slam it shut, racing to get ready for class.`);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      // TODO-QSP: dynamic text: At your command, <<$npcdesc>> starts throwing his clothes on while you impatient...
      scene.text(`At your command, ${((s as any).npcdesc ?? 0)} starts throwing his clothes on while you impatiently keep checking the clock. Thankfully it's not more than a minute before he's fully dressed and you rush him out the door and slam it behind him, racing to get ready for class.`);
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'exit');
  } },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterLateSchoolNotAtHome(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: '<i>Get dressed!</i>', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(s, 'clothing', 'wear_last_worn');
    qspCall(s, 'underwear', 'wear');
    scene.text('Scrambling from the bed, you start grabbing your clothes and throwing them on as fast as you can.');
    if (((s as any).PCloStyle2 ?? 0) === 4) {
      scene.text('You probably don\'t have time for a shower, but at least you don\'t have to run home and change clothes, you think gratefully to yourself as your pull on your discarded uniform from last night.');
    } else {
      scene.text('You need to get home and change into your uniform! You\'re not sure if you have time for a shower, but you definitely <i>need</i> to get your uniform!');
    }
    // TODO-QSP: dynamic text: "Hey, what's wrong?" <<$npcdesc>> says, turning over and squinting at you with s...
    scene.text(`"Hey, what's wrong?" ${((s as any).npcdesc ?? 0)} says, turning over and squinting at you with sleepy eyes.`);
    scene.actions([
      { label: 'I need to be somewhere!', handler: (st: GameState) => {
    scene.text('"I\'m gonna be late for something!" you say hurriedly. "Gotta go!"');
    // TODO-QSP: dynamic text: With one last quick check, you make sure all your clothes are in place and rush ...
    scene.text(`With one last quick check, you make sure all your clothes are in place and rush out the door, leaving ${((s as any).npcdesc ?? 0)} and your night together behind you.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'exit');
  } },
    ]);
  } },
      { label: 'I\'m gonna be late for school!', handler: (st: GameState) => {
    if (((s as any).PCloStyle2 ?? 0) === 4) {
      scene.text('"I need to go! I\'m going to be late for school!" you huff, pulling your skirt up and buttoning your shirt as fast as you can. It\'s a bit wrinkled from laying in a pile all night, but it\'ll do in a pinch.');
    } else {
      scene.text('"I need to go! I\'m going to be late for school!" you huff. "I need to go home! I don\'t have my uniform! Shit! <i>Fuck!</i>"');
    }
    if (((s as any).npc_car ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.text('"You need a ride? I can drop you off in my car."');
      if (((s as any).npc_residence ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.actions([
          { label: 'I can walk', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That\'s okay," you shake your head. "I live right around the corner, I can just walk. But thanks for the offer."');
    qspCall(s, 'sex_ev_leave', 'hurry_leave');
  } },
        ]);
      }
      scene.actions([
        { label: 'No thanks', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"No, I\'ll be okay. But thanks for the offer."');
    scene.text('With one last quick check, you make sure all your clothes are in place and call, "See you later!" over your shoulder as you rush out the door.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', 'exit');
  } },
    ]);
  } },
        { label: 'That\'d be great', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Really?" you perk up. "That\'d be great!"');
    scene.text('"Let me just get dressed."');
    scene.text('You collect your things while he throws on some clothes and grabs his keys, then both of you head outside and climb into his car.');
    scene.text('"Where do you want me to take you?" he asks');
    scene.actions([
      { label: 'Take me home', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['give_lift'] = 1
  }, goto: ['sex_ev_morning', 'give_lift'] },
      { label: 'Take me to school', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['give_lift'] = 2
  }, goto: ['sex_ev_morning', 'give_lift'] },
    ]);
  } },
        { label: 'Can\'t let people see', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You hesitate for a moment, considering it.');
    scene.text('"No," you shake your head. "I don\'t want someone seeing me get out of your car. Rumors spread like fire at my school. I can\'t risk it."');
    qspCall(s, 'sex_ev_leave', 'hurry_leave');
  } },
      ]);
    } else {
      scene.text('With one last quick check, you make sure all your clothes are in place and grab the rest of your things. "See you later!" you call over your shoulder as you rush out the door.');
      qspCall(s, 'sex_ev_leave', 'hurry_leave');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterThrowUp(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('Your stomach churns, waking you from sleep.');
  scene.text('<b>You\'re about to throw up.</b>');
  // TODO-QSP: act'Run to the bathroom':
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/home/bathroom/vomit.jpg');
  scene.text('Clamping your hand over your mouth, you scramble from your bed and tear your way to the bathroom. You barely manage to lift the lid up in time and violently hurl into the toilet bowl.');
  // TODO-QSP: act'Continue':
  (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 7) + 2);
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/home/bathroom/vomit_after.jpg');
  scene.text('After several minutes of retching, your stomach finally seems to be empty, and you just lay there, panting over the toilet bowl.');
  if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    ((s as any).sex_ev ?? {})['boy_in_shower'] = 0;
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> peeks his head in through the door.
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} peeks his head in through the door.`);
    scene.text('"Hey, you okay?"');
    // TODO-QSP: act'No idea':
    scene.text('"No idea," you groan.');
    if ((Math.floor(Math.random() * 100) + 1) < ((s as any).npc_intel ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      (s as any).thinkpreg = 1;
      scene.text('"You\'re not... pregnant are you...?"');
      scene.text('The blood drains from your face. You clutch the toilet bowl in panic as your stomach turns again.');
      if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 28) {
        scene.text('<i>Your period is late...</i>');
      }
      scene.text('"Oh <i>shit</i>..." you whisper before hurling up your guts again.');
    } else {
      // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> makes a face and leaves you to keep throwing up until ...
      scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} makes a face and leaves you to keep throwing up until you feel you can stand.`);
    }
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  }
  if (((s as any).vomit ?? 0)?.['hangover'] === 1) {
    // TODO-QSP: act'Hungover':
    scene.text('"No," you groan. "I\'m really hungover..."');
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  }
  if (((s as any).vomit ?? 0)?.['morning_sick'] === 1) {
    if (((s as any).knowpreg ?? 0) === 1) {
      if ((!((s as any).morning_sickness ?? 0))) {
        (s as any).morning_sickness = 1;
        scene.text('<i>Ugh, is this what morning sickness feels like?</i> you think to yourself as you lay there on the floor.');
      } else {
        scene.text('<i>Ugh! Why does pregnancy have to come with so many side effects...</i> you think to yourself as you lay there on the floor.');
      }
    } else {
      if (((s as any).thinkpreg ?? 0) === 1) {
        // TODO-QSP: act'Might be pregnant':
        scene.text('"Erm..." You clutch the toilet bowl, hesitating before answering. "I uhh... I might be pregnant..."');
        qspCall(s, 'sex_ev_morning', 'morning_menu1');
      }
    }
  } else {
    if ((!((s as any).knowpreg ?? 0))) {
      if (((s as any).daystart ?? 0) - ((s as any).daylastperiod ?? 0) > 28  &&  (Math.floor(Math.random() * 100) + 1) < ((s as any).pcs_intel ?? 0)) {
        // TODO-QSP: act'Might be pregnant':
        (s as any).thinkpreg = 1;
        scene.text('"Erm..." You clutch the toilet bowl, hesitating before answering as you do some of the mental math. "I uhh... I might be pregnant..."');
        scene.text('"Really?"');
        scene.text('"My period is a little late..." you admit, biting your lip.');
        qspCall(s, 'sex_ev_morning', 'morning_menu1');
      }
    }
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
    case 'late_for_school':
      enterLateForSchool(s, scene);
      break;
    case 'late_school_not_at_home':
      enterLateSchoolNotAtHome(s, scene);
      break;
    case 'throw_up':
      enterThrowUp(s, scene);
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
