import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['morning_after'] = 1;
  if (((s as any).sex_ev ?? 0)?.['lover_left'] === 1) {
    qspGoto(s, 'sex_ev_wakeup', 'wake_alone');
  }
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1) {
    qspGoto(s, 'sex_ev_wakeup', 'sleep_fuck_wake');
  }
  if (((s as any).vomit ?? 0)?.['hangover'] + ((s as any).vomit ?? 0)?.['morning_sick'] + ((s as any).vomit ?? 0)?.['unlucky'] > 0) {
    qspGoto(s, 'sex_ev_wakeup', 'throw_up');
  } else {
    if ((((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).hour ?? 0) >= 7)  &&  ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)])) {
      if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'facial'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted')  &&  (Math.floor(Math.random() * 2) + 1) === 2) {
        qspGoto(s, 'sex_ev_wakeup', 'cumshot_wakeup1');
      } else {
        qspGoto(s, 'sex_ev_wakeup', 'wakeup_fondling');
      }
    } else {
      qspGoto(s, 'sex_ev_wakeup', 'wake_events');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWakeEvents(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if (((s as any).alarmVars ?? 0)?.['alarmOn'] === 0) {
    scene.text('A loud sound pierces your consciousness like a spear through the brain, bringing you out of sleep. You wake up blearily, head <i>pounding</i> with an awful hangover, as you look around in bewilderment at what is making that awful sound, only to find it is your phone alarm going off.');
    // TODO-QSP: else}
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKissWake(s, scene); (s as any).locArgs = __savedLocArgs; }
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
        scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under your covers with ${((s as any).npcdesc ?? '')}'s arms wrapped around you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
          // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, tucked under the covers of...
          scene.text(`Your mind stirs and you slowly come to consciousness, tucked under the covers of ${((s as any).npcdesc ?? '')}'s bed.`);
        } else {
          // TODO-QSP: dynamic text: Your mind stirs and you slowly come to consciousness, snuggled under the covers ...
          scene.text(`Your mind stirs and you slowly come to consciousness, snuggled under the covers with ${((s as any).npcdesc ?? '')}'s arms wrapped around you.`);
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
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKissWake(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Ugh, my head</i>', goto: ['sex_ev_morning', 'hangover'] },
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLateForSchool(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAfterSleepfuckWake(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGuiltStart(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterForgotBcPill(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterWakeAlone2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/wake_alone1.mp4');
  // TODO-QSP: dynamic text: It''s only then that you sit up in bed and realize that <<$npcdesc>> is gone.
  scene.text(`It's only then that you sit up in bed and realize that ${((s as any).npcdesc ?? '')} is gone.`);
  scene.text('You vaguely remember passing out last night. He must have left after you fell asleep. Or early this morning.');
  scene.text('Either way, now it\'s just... you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_leave', 'exit'] },
  ]);
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['sleep_cum_vagina'] === 1) {
      scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
      scene.text('You pull aside the covers and discover, yes, it is indeed fresh cum dripping from your pussy.');
    } else {
      if (((st as any).sex_ev ?? 0)?.['sleep_cum_face'] === 1) {
        scene.img('images/shared/sex/cum/facial/facial35.jpg');
        scene.text('You blink carefully, running your hand across your cheek to discover, yes, there is indeed fresh cum on your face.');
      } else {
        if (((st as any).sex_ev ?? 0)?.['sleep_cum_tits'] === 1) {
          scene.img('images/pc/body/cum/cumtits/cumtits8.jpg');
          scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your tits.');
        } else {
          if (((st as any).sex_ev ?? 0)?.['sleep_cum_stomach'] === 1) {
            scene.img('images/pc/body/cum/cumbelly/cumbelly10.jpg');
            scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your belly.');
          } else {
            if (((st as any).sex_ev ?? 0)?.['sleep_cum_hair'] === 1) {
              scene.img('images/pc/body/cum/cumhair/cumhair1.jpg');
              scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum in your hair.');
            } else {
              if (((st as any).sex_ev ?? 0)?.['sleep_cum_back'] === 1) {
                scene.img('images/pc/body/cum/cumsleep/cumsleep2.jpg');
                scene.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your back.');
              } else {
                if (((st as any).sex_ev ?? 0)?.['sleep_cum_butt'] === 1) {
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
    if (((st as any).npc_sleep_sex_okay ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"Yeah. Got horny and you wouldn\'t wake up."');
      scene.actions([
        { label: 'Don\'t make a habit out of it', handler: (st: GameState) => {
    scene.text('"It was fine this time," you say. "But don\'t make a habit out of it."');
    // TODO-QSP: dynamic text: "No promises," <<$npcdesc>> smirks mischievously.
    scene.text(`"No promises," ${((st as any).npcdesc ?? '')} smirks mischievously.`);
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Wake me up next time', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"Wake me up next time," you say. "Maybe I want to get some too."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'That\'s fine', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"That\'s fine," you say. "A guy\'s gotta take care of his needs, doesn\'t he?"');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      ]);
    } else {
      scene.text('"Yeah," he grins.');
      if (((st as any).npc_sleep_sex_okay ?? 0)?.[String((st as any).npcID ?? 0)] === -1) {
        scene.actions([
          { label: 'Get mad', handler: (st: GameState) => {
    scene.text('You glare daggers at him.');
    scene.text('"If I weren\'t in a rush to get up, I\'d rip your head off."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Let it slide', handler: (st: GameState) => {
    scene.text('"No," you say. "But I can\'t do much about it now."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"I love it when you fuck me in my sleep," you grin. "I have the best orgasms."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Just wondered', handler: (st: GameState) => {
    scene.text('"Was just wondering," you reply.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Explains the dream', handler: (st: GameState) => {
    scene.text('"Well that explains the weird dreams I was having," you say.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  } },
      { label: 'Someone had fun last night', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Somebody had fun last night," you muse, looking over at <<$npcdesc>> who is als...
    scene.text(`"Somebody had fun last night," you muse, looking over at ${((st as any).npcdesc ?? '')} who is also waking.`);
    if (((st as any).npc_sleep_sex_okay ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"Yeah. Got horny while you were asleep. Is that okay?"');
      scene.actions([
        { label: 'Ask next time', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 1;
    scene.text('"Just ask next time," you smirk.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'That\'s fine', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"That\'s fine," you smirk. "A guy\'s gotta take care of his needs, doesn\'t he?"');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      ]);
    } else {
      scene.text('"Yeah," he grins. "That okay?"');
      if (((st as any).npc_sleep_sex_okay ?? 0)?.[String((st as any).npcID ?? 0)] === -1) {
        scene.actions([
          { label: 'Get mad', handler: (st: GameState) => {
    scene.text('"No," you say, glaring daggers at him. "If I weren\'t in a rush to get up, I\'d rip your head off."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Let it slide', handler: (st: GameState) => {
    scene.text('"No," you say irritably. "But I can\'t do much about it now."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Of course', handler: (st: GameState) => {
    scene.text('"Of course it is," you smile. "I said you could."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Sleep orgasms are the best', handler: (st: GameState) => {
    ((st as any).npc_sleep_sex_okay = (st as any).npc_sleep_sex_okay ?? {})[String((st as any).npcID ?? 0)] = 2;
    scene.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
  } },
      { label: 'Thanks for not waking me', handler: (st: GameState) => {
    scene.text('"Thanks for not waking me," you yawn pleasantly. You roll your hips as you do, noting that your pussy <i>definitely</i> feels used. "I really needed the sleep."');
    scene.text('"Thanks for letting me fuck you," he grins.');
    scene.text('"Any time," you smile.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
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
    qspCall(st, 'shortgs', 'calendar_display');
    scene.text('Oh <i>fuck!</i> You need to get to school!');
    if (((st as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLateSchoolNotAtHome(st, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      scene.actions([
        { label: 'Get up!', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I need to go," you say, hurriedly hauling <<$npcdesc>> out of your bed. "And so...
    scene.text(`"I need to go," you say, hurriedly hauling ${((st as any).npcdesc ?? '')} out of your bed. "And so do you."`);
    if (((st as any).npc_latesleeper ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 2));
      // TODO-QSP: dynamic text: <<$npcdesc>> groggily starts gathering his clothes as you impatiently try to get...
      scene.text(`${((st as any).npcdesc ?? '')} groggily starts gathering his clothes as you impatiently try to get him to go faster, constantly checking the clock to see how much time he's wasting. When he's <i>finally</i> dressed you rush ${((st as any).npcdesc ?? '')} to the door and shove him out and slam it shut, racing to get ready for class.`);
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 1;
      // TODO-QSP: dynamic text: At your command, <<$npcdesc>> starts throwing his clothes on while you impatient...
      scene.text(`At your command, ${((st as any).npcdesc ?? '')} starts throwing his clothes on while you impatiently keep checking the clock. Thankfully it's not more than a minute before he's fully dressed and you rush him out the door and slam it behind him, racing to get ready for class.`);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', '');
  } },
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

function enterLateSchoolNotAtHome(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '<i>Get dressed!</i>', handler: (st: GameState) => {
    scene.img('images/pc/activities/misc/dress_1.mp4');
    qspCall(st, 'clothing', 'wear_last_worn');
    qspCall(st, 'underwear', 'wear');
    scene.text('Scrambling from the bed, you start grabbing your clothes and throwing them on as fast as you can.');
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.text('You probably don\'t have time for a shower, but at least you don\'t have to run home and change clothes, you think gratefully to yourself as your pull on your discarded uniform from last night.');
    } else {
      scene.text('You need to get home and change into your uniform! You\'re not sure if you have time for a shower, but you definitely <i>need</i> to get your uniform!');
    }
    // TODO-QSP: dynamic text: "Hey, what''s wrong?" <<$npcdesc>> says, turning over and squinting at you with ...
    scene.text(`"Hey, what's wrong?" ${((st as any).npcdesc ?? '')} says, turning over and squinting at you with sleepy eyes.`);
    scene.actions([
      { label: 'I need to be somewhere!', handler: (st: GameState) => {
    scene.text('"I\'m gonna be late for something!" you say hurriedly. "Gotta go!"');
    // TODO-QSP: dynamic text: With one last quick check, you make sure all your clothes are in place and rush ...
    scene.text(`With one last quick check, you make sure all your clothes are in place and rush out the door, leaving ${((st as any).npcdesc ?? '')} and your night together behind you.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_leave', '');
  } },
    ]);
  } },
      { label: 'I\'m gonna be late for school!', handler: (st: GameState) => {
    if (((st as any).PCloStyle2 ?? 0) === 4) {
      scene.text('"I need to go! I\'m going to be late for school!" you huff, pulling your skirt up and buttoning your shirt as fast as you can. It\'s a bit wrinkled from laying in a pile all night, but it\'ll do in a pinch.');
    } else {
      scene.text('"I need to go! I\'m going to be late for school!" you huff. "I need to go home! I don\'t have my uniform! Shit! <i>Fuck!</i>"');
    }
    if (((st as any).npc_car ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.text('"You need a ride? I can drop you off in my car."');
      if (((st as any).npc_residence ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        scene.actions([
          { label: 'I can walk', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"That\'s okay," you shake your head. "I live right around the corner, I can just walk. But thanks for the offer."');
    qspCall(st, 'sex_ev_leave', 'hurry_leave');
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
    qspCall(st, 'sex_ev_leave', '');
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
    qspCall(st, 'sex_ev_leave', 'hurry_leave');
  } },
      ]);
    } else {
      scene.text('With one last quick check, you make sure all your clothes are in place and grab the rest of your things. "See you later!" you call over your shoulder as you rush out the door.');
      qspCall(st, 'sex_ev_leave', 'hurry_leave');
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
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 7) + 2));
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/home/bathroom/vomit_after.jpg');
  scene.text('After several minutes of retching, your stomach finally seems to be empty, and you just lay there, panting over the toilet bowl.');
  if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_in_shower'] = 0;
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> peeks his head in through the door.
    scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} peeks his head in through the door.`);
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
      scene.text(`${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} makes a face and leaves you to keep throwing up until you feel you can stand.`);
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
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: dynamic text: When your guts stop coming up, you stumble to your feet and stagger out the door...
  scene.text(`When your guts stop coming up, you stumble to your feet and stagger out the door to see ${(((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? '')} still snoring in bed.`);
  qspCall(s, 'sex_ev_morning', 'morning_menu1');
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  // TODO-QSP: end
  scene.build();
}

function enterYawnWake(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $sex_ev['bed_room']
  scene.text('You open your mouth wide, yawning loudly and stretching your arms back as the covers fall off of you.');
  if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).sex_ev ?? 0)?.['boy_make_breakfast'] === 1) {
      if (((s as any).npc_apt_type ?? 0)?.[String((s as any).npcID ?? 0)] === 2  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home'  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'family_home') {
        // TODO-QSP: dynamic text: <<$npcdesc>> is already up, doing something in his kitchen area and the smell of...
        scene.text(`${((s as any).npcdesc ?? '')} is already up, doing something in his kitchen area and the smell of coffee and fresh food wafts over to you in bed.`);
      } else {
        scene.text('The bed next to you is empty but the smell of coffee and cooked grains and proteins waft through the apartment.');
      }
      scene.text('Checking your phone, the time reads:');
    } else {
      if (((s as any).sex_ev ?? 0)?.['boy_in_shower'] === 1) {
        qspCall(s, 'sex_ev_morning', 'npc_morning_shower_desc');
        scene.text('Checking your phone, the time reads:');
      } else {
        scene.text('You grope around for your phone and when you switch on the display the time reads:');
        // TODO-QSP: dynamic text: "Hey sleepyhead," <<$npcdesc>> smirks as he comes back into the room, a towel ar...
        scene.text(`"Hey sleepyhead," ${((s as any).npcdesc ?? '')} smirks as he comes back into the room, a towel around his waist, hair still damp from the shower.`);
      }
    }
  } else {
    if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is still completely passed out beside you, your movement not interr...
      scene.text(`${((s as any).npcdesc ?? '')} is still completely passed out beside you, your movement not interrupting his snoring in the slightest. Groping around for your phone, the time reads:`);
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_asleep'] = 1;
    } else {
      // TODO-QSP: dynamic text: Your movement causes <<$npcdesc>> to stir as well, blinking his eyes open. Reach...
      scene.text(`Your movement causes ${((s as any).npcdesc ?? '')} to stir as well, blinking his eyes open. Reaching down, you grab your phone and switch on the display.`);
    }
  }
  qspGoto(s, 'sex_ev_morning', 'morning_menu1');
  // TODO-QSP: end
  scene.build();
}

function enterKissWake(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Kiss ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    qspCall(st, 'arousal', 'kiss', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_asleep'] = 0;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/kiss/bed1.jpg');
    // TODO-QSP: dynamic text: You roll over onto <<$npcdesc>>, resting your breasts on his chest as you stradd...
    scene.text(`You roll over onto ${((st as any).npcdesc ?? '')}, resting your breasts on his chest as you straddle him.`);
    scene.text('"Good <i>-mmmph-</i> morning," you murmur, planting a kiss on his lips.');
    if (((st as any).cum_loc ?? 0)?.['face'] > 0) {
      scene.text('"Ugch~! What the fuck is that?" he sputters, shaking his head in disgust.');
      scene.actions([
        { label: 'Didn\'t wash my face', handler: (st: GameState) => {
    scene.text('"It\'s your cum," you say. "Didn\'t get to wash it off after you cumshot me last night."');
    scene.text('"Couldn\'t you have washed it off before you kissed me?"');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Give ' + String(((st as any).npcdesc ?? '') ?? '') + ' a blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    scene.text('"Let me make it up to you," you smile, throwing back the covers and wrapping your lips around his morning wood.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjWake(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: 'His fault', handler: (st: GameState) => {
    scene.text('"It\'s your fault," you say. "You\'re the one who plastered my face last night."');
    scene.text('"Couldn\'t you have washed it off before you kissed me?"');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Give ' + String(((st as any).npcdesc ?? '') ?? '') + ' a blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    scene.text('"Let me make it up to you," you smile, throwing back the covers and wrapping your lips around his morning wood.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjWake(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
        { label: 'Oops, forgot', handler: (st: GameState) => {
    scene.text('"Oops," you say. "Forgot I fell asleep last night with your cum on my face."');
    scene.text('"Ugh! How do you forget something like that?"');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Give ' + String(((st as any).npcdesc ?? '') ?? '') + ' a blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    scene.text('"Let me make it up to you," you smile, throwing back the covers and wrapping your lips around his morning wood.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjWake(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      ]);
    } else {
      scene.text('"Morning," he smiles back.');
      qspCall(st, 'sex_ev_morning', 'morning_menu1');
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Give ' + String(((st as any).npcdesc ?? '') ?? '') + ' a blowjob', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1, 'no_orgasm_msg', (((st as any).sex_ev ?? 0)?.['prostitution_flag']));
    scene.img('images/shared/sex/blowjob/bj47.mp4');
    // TODO-QSP: dynamic text: You break the kiss from <<$npcdesc>>''s lips and start trailing them down his ne...
    scene.text(`You break the kiss from ${((st as any).npcdesc ?? '')}'s lips and start trailing them down his neck and then his chest and then his stomach and soon you have your lips wrapped around his morning wood.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjWake(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBjWake(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['boy_asleep'] = 0;
  qspCall(s, 'arousal', 'bj', 1, 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  if (((s as any).npc_end_free_time ?? 0) <= ((s as any).hour ?? 0) + 2) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_late_work'] = 1;
    scene.text('"Nngh," he grunts as you start sucking his cock. "I\'m gonna be late for work..."');
    scene.actions([
      { label: 'Too bad (stop)', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj48.mp4');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> one more good suck before you withdraw your lips.
    scene.text(`You give ${((st as any).npcdesc ?? '')} one more good suck before you withdraw your lips.`);
    scene.text('"Too bad," you smirk, teasing his cock with your hand while you savour his taste. "Guess it\'ll have to wait until later."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'I\'ll be fast', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['morning_fuck'] = 1;
    if (((st as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((st as any).sex_ev ?? 0)?.['extra_cum']) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['extra_cum'] = ((st as any).sex_ev['extra_cum'] ?? 0) + (5);
    }
    scene.img('images/shared/sex/blowjob/bj48.mp4');
    // TODO-QSP: dynamic text: You give <<$npcdesc>> one more good suck before you withdraw your lips to speak.
    scene.text(`You give ${((st as any).npcdesc ?? '')} one more good suck before you withdraw your lips to speak.`);
    scene.text('"Don\'t worry," you say, working his cock with your hand as a smirk spreads across your lips. "I\'ll be fast."');
    scene.text('And you wrap your lips back around his shaft.');
    qspCall(st, 'sex_ev_sex', 'session_reset');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'blowjob'  ||  (Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
      scene.text('"Nngh... that feels great..." he moans sleepily.');
      scene.actions([
        { label: 'Want me to keep going?', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj48.mp4');
    scene.text('"Want me to keep going?" you ask pulling your lips away with a teasing pop.');
    scene.text('"Fuck yes," he groans and you get back to work.');
    qspCall(st, 'sex_ev_sex', 'session_reset');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
        { label: 'Keep sucking', handler: (st: GameState) => {
    scene.text('"Mmmm," you hum around the cock in your mouth, sending shivers through his body that you can feel between your lips. You never stop sucking.');
    qspCall(st, 'sex_ev_sex', 'session_reset');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"Nngh... Hey... what are you doing...?" he groans sleepily.');
      scene.actions([
        { label: 'Best wakeup in the world', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/bj48.mp4');
    scene.text('"Just giving you the best wakeup call in the world," you grin pulling your lips away with a teasing pop. "Want me to stop?"');
    scene.text('"Fuck no," he groans and you get back to work.');
    qspCall(st, 'sex_ev_sex', 'session_reset');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
        { label: 'Guess', handler: (st: GameState) => {
    scene.img('images/shared/sex/blowjob/play1.mp4');
    scene.text('"Nngh... Hey... what are you doing...?" he groans sleepily.');
    // TODO-QSP: dynamic text: You pull your lips away with a pop and stare <<$npcdesc>> straight in the eye.
    scene.text(`You pull your lips away with a pop and stare ${((st as any).npcdesc ?? '')} straight in the eye.`);
    scene.text('"Guess."');
    scene.text('Without waiting for a response you resume running your tongue up and down his shaft and peppering it with kisses before swallowing it whole again.');
    qspCall(st, 'sex_ev_sex', 'session_reset');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stop', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.img('images/shared/sex/blowjob/bj48.mp4');
    scene.text('You pull away, working his cock with your hand.');
    scene.text('"Just making sure you\'re fully awake," you grin, letting go with one more teasing jerk.');
    scene.text('"Ungh, you teasing bitch," he grumbles.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAfterSleepfuckWake(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 2) {
    scene.actions([
      { label: 'Nice night', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk4.jpg');
    // TODO-QSP: dynamic text: "That was nice," you smile sleepily at <<$npcdesc>>. "Our little mid-night romp ...
    scene.text(`"That was nice," you smile sleepily at ${((st as any).npcdesc ?? '')}. "Our little mid-night romp I mean. Slept like a baby after. How about you?"`);
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"I would say that fucking you always puts me to sleep, but that feels like sending the wrong message," he smiles back.');
    } else {
      scene.text('"I sleep better after a good fuck too," he grins.');
    }
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumshotWakeup1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/sleep/cumshot_wake1.mp4');
  // TODO-QSP: dynamic text: You gasp as you are suddenly awakened by the shock of something wet spattering a...
  scene.text(`You gasp as you are suddenly awakened by the shock of something wet spattering across your face. Your eyes flutter open just in time to see another spurt of cum exit ${((s as any).npcdesc ?? '')}'s cock and hit you square in the face.`);
  if (((s as any).npc_cumshot_wake ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Again?! (annoyed)', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/cumshot_wake2.mp4');
    scene.text('"Ugh, again?!" you moan, allowing the salty sperm to slip into your mouth.');
    scene.text('"You know you love it. Come here, clean me off," he says, pushing his cock towards your lips.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumshotWakeupClean1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  ((s as any).npc_cumshot_wake = (s as any).npc_cumshot_wake ?? {})[String((s as any).npcID ?? 0)] = ((s as any).npc_cumshot_wake[String((s as any).npcID ?? 0)] ?? 0) + (1);
  // TODO-QSP: end
  scene.actions([
    { label: 'What the fuck!', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/cumshot_wake2.mp4');
    scene.text('"What the fuck are you doing?!" you exclaim, sputtering as strands of semen dribble last your lips.');
    // TODO-QSP: dynamic text: "You were so hot lying there," <<$npcdesc>> snickers, a lewd grin smeared across...
    scene.text(`"You were so hot lying there," ${((st as any).npcdesc ?? '')} snickers, a lewd grin smeared across his face. "I got hard just looking at you."`);
    scene.text('"So you thought it would be a good idea to cum on my face?!"');
    scene.text('"Come on, don\'t be like that. Here, clean me off. Get the rest out." He lowers his cock, pushing it towards your lips.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumshotWakeupClean1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Take it in stride', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/cumshot_wake2.mp4');
    // TODO-QSP: dynamic text: You sputter briefly as some of the salty sperm slips past your lips, but can''t ...
    scene.text(`You sputter briefly as some of the salty sperm slips past your lips, but can't help but feel amusement when you see the lewd satisfaction on ${((st as any).npcdesc ?? '')}'s face.`);
    scene.actions([
      { label: 'Guess that means no morning BJ', handler: (st: GameState) => {
    scene.text('"Guess that means it\'s too late for a morning blowjob," you snicker.');
    scene.text('"No it\'s not," he grins back and pushes his cock towards your lips.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumshotWakeupClean2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'At least I haven\'t put on makeup', handler: (st: GameState) => {
    scene.text('"At least I haven\'t put on my makeup yet," you giggle.');
    scene.text('"Clean me off too," he insists, pushing his cock towards your lips.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumshotWakeupClean2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCumshotWakeupClean1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Ugh!" you grimace, turning your head away from the offending cock. "No way. I\'m not giving you a blowjob as a reward for being a pervert."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    { label: 'Acquiesce', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/cumshot_wake3.mp4');
    qspCall(st, 'arousal', 'bj', 1, 'sub');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1, 0, 5);
    // TODO-QSP: dynamic text: Before you can make any more protest, <<$npcdesc>>''s cock pushes into your mout...
    scene.text(`Before you can make any more protest, ${((st as any).npcdesc ?? '')}'s cock pushes into your mouth. Your eyes accuse him of being a jerk but your lips suck obediently, drawing the last drops of cum from his shaft.`);
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumshotWakeupBj(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCumshotWakeupClean2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Nuh uh!" you giggle, turning your head away from his tip. "One face shot is all you get No double dipping."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    { label: 'Acquiesce', handler: (st: GameState) => {
    scene.img('images/shared/sex/sleep/cumshot_wake3.mp4');
    qspCall(st, 'arousal', 'bj', 1, 'sub');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1, 0, 5);
    // TODO-QSP: dynamic text: "Oh fiiiine," you say, mock frowning as <<$npcdesc>>''s cock pushes past your li...
    scene.text(`"Oh fiiiine," you say, mock frowning as ${((st as any).npcdesc ?? '')}'s cock pushes past your lips and you subserviently suck out the last drops of cum from it.`);
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCumshotWakeupBj(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCumshotWakeupBj(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: act'Keep sucking':
  scene.text('Unable to help yourself, you keep sucking his cock. What started to soften immediately stiffens up again and you know you\'ve just started another round...');
  qspCall(s, 'sex_ev_sex', 'session_reset');
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
  ]);
  scene.build();
}

function enterWakeupFondling(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay', -(Math.floor(Math.random() * 6) + 5), 'no_orgasm_msg', (((s as any).sex_ev ?? 0)?.['prostitution_flag']));
  scene.img('images/shared/sex/sleep/fondle1.jpg');
  scene.text('You stir as you feel a hands roaming your body. One passes over your breasts, squeezing them on the way down to your stomach. The other is already snaking its way between your legs. Something stiff and warm is poking into your lower back.');
  // TODO-QSP: end
  scene.actions([
    { label: '"Good morning"', handler: (st: GameState) => {
    scene.text('"Mmmmm..." you hum, smiling to yourself as his fingers find your pussy. "Good morning to you too, mister."');
    if (((st as any).npc_fav_body_part ?? 0)?.[String((st as any).npcID ?? 0)] === 'tits') {
      scene.text('"Sorry, couldn\'t help myself," he murmurs, reaching up to grope your breasts again. "Your tits just feel so good."');
    } else {
      scene.text('"Sorry, couldn\'t help myself," he murmurs.');
    }
    scene.actions([
      { label: 'Time to get up anyways', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I don\'t mind," you reply. "It was about time to get up anyways."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
      { label: 'Have wakeup sex', handler: (st: GameState) => {
    scene.text('"So did you just want to cop a feel or were you interested in something else?" you reply, grinding back and forth between his hard-on and his fingers.');
    qspCall(st, 'sex_ev_sex', 'session_reset');
    qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
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
    (st as any).temp_loc = 'sex_ev_morning';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['forgot_bc'] = 1;
    if (((st as any).npc_earlyriser ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
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
    if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 3) {
      // TODO-QSP: dynamic text: Not only did you forget your birth control, but <<$npcdesc>> came inside you las...
      scene.text(`Not only did you forget your birth control, but ${((st as any).npcdesc ?? '')} came inside you last night too. <i>A lot.</i> How could you fuck up like this?`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
        // TODO-QSP: dynamic text: Not only did you forget your birth control, but <<$npcdesc>> came inside you las...
        scene.text(`Not only did you forget your birth control, but ${((st as any).npcdesc ?? '')} came inside you last night too. How could you fuck up like this?`);
      } else {
        if (((st as any).pharmacy_timers ?? 0)?.['birth_control'] > 0) {
          // TODO-QSP: dynamic text: <<$npcdesc>> didn''t come inside you yesterday, but this breaks your streak. Aun...
          scene.text(`${((st as any).npcdesc ?? '')} didn't come inside you yesterday, but this breaks your streak. Aunt Luda said you need to take it every day or it won't work. So if you take it now, does that mean you're still not safe?`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> didn''t come inside you yesterday, but this breaks your streak. Are...
          scene.text(`${((st as any).npcdesc ?? '')} didn't come inside you yesterday, but this breaks your streak. Are you still safe if you skip a day?`);
        }
      }
    }
    if (((st as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
        scene.text('Wait, don\'t you have that morning after pill Aunt Luda gave you?');
      } else {
        scene.text('Wait, don\'t you have a morning after pill in your bag?');
      }
    }
    qspGoto(st, 'sex_ev_wakeup', 'forgot_bc_pill2');
  } },
      { label: 'Calm down', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    scene.text('You sit up and start taking big deep breaths, forcing yourself to calm down and try to approach the situation logically.');
    if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
      scene.actions([
        { label: 'You can take a morning after pill', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 5) {
      // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... <i>A lot.</i> But you can st...
      scene.text(`Okay, so ${((st as any).npcdesc ?? '')} came inside you last night... <i>A lot.</i> But you can still take a morning after pill. Maybe it'll be okay.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 1) {
        // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... More than once... A <i>few</...
        scene.text(`Okay, so ${((st as any).npcdesc ?? '')} came inside you last night... More than once... A <i>few</i> times. But you can still take a morning after pill. Maybe it'll be okay.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
          // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... But only once. That''s not t...
          scene.text(`Okay, so ${((st as any).npcdesc ?? '')} came inside you last night... But only once. That's not too bad, right? Maybe you can still take a morning after pill. Maybe it'll be okay.`);
        }
      }
    }
    if (((st as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      if (((st as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((st as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
        scene.text('Actually, you have the one Aunt Luda gave you. For emergencies she said...');
      } else {
        scene.text('Actually, you have one in your bag. You could take it right now.');
      }
    }
    qspGoto(st, 'sex_ev_wakeup', 'forgot_bc_pill2');
  } },
      ]);
    } else {
      if (((st as any).sex_ev ?? 0)?.['no_condom'] === 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['forgot_bc_act'] = 'You used condoms';
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['forgot_bc_act'] = '' + ((st as any).npcdesc ?? 0) + ' didn\'t come inside you';
      }
      scene.actions([
        { label: '', labelFn: (s: GameState) => String((((st as any).sex_ev ?? 0)?.['forgot_bc_act'] ?? '') ?? ''), handler: (st: GameState) => {
    if (((st as any).pharmacy_timers ?? 0)?.['birth_control'] > 0) {
      // TODO-QSP: dynamic text: '<<$npcdesc>> didn''t come inside you yesterday, so you''re not in any real dang...
      scene.text(`${((st as any).npcdesc ?? '')} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second.` + ((((st as any).sex_ev ?? 0)?.['no_condom'] === 0) ? (' Besides, you used condoms.') : (' ')) + 'But this breaks your streak. Aunt Luda said you need to take it every day or it won\'t work. So if you take it now, does that mean you\'re still not safe?');
    } else {
      // TODO-QSP: dynamic text: '<<$npcdesc>> didn''t come inside you yesterday, so you''re not in any real dang...
      scene.text(`${((st as any).npcdesc ?? '')} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second.` + ((((st as any).sex_ev ?? 0)?.['no_condom'] === 0) ? (' Besides, you used condoms.') : (' ')) + 'But does this mean you\'ll need to wait a few days to build up the birth control in your system again? If you take your next pill now, does that mean you\'re still not safe?');
    }
    qspGoto(st, 'sex_ev_wakeup', 'forgot_bc_pill2');
  } },
      ]);
    }
    if (((st as any).stat ?? 0)?.['preg_risk'] !== 'danger') {
      scene.actions([
        { label: 'You\'re not fertile right now', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
      if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 5) {
        // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... <i>A lot.</i> But it''s not ...
        scene.text(`Okay, so ${((st as any).npcdesc ?? '')} came inside you last night... <i>A lot.</i> But it's not the fertile stage of your cycle. You should be fine, right?`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['creampie_count'] > 1) {
          // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... More than once... A <i>few</...
          scene.text(`Okay, so ${((st as any).npcdesc ?? '')} came inside you last night... More than once... A <i>few</i> times. But it's not the fertile stage of your cycle. You should be fine, right?`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['creampie_count'] === 1) {
            // TODO-QSP: dynamic text: Okay, so <<$npcdesc>> came inside you last night... But only once. And it''s not...
            scene.text(`Okay, so ${((st as any).npcdesc ?? '')} came inside you last night... But only once. And it's not the fertile stage of your cycle. You should be fine, right?`);
          }
        }
      }
    } else {
      if (((st as any).pharmacy_timers ?? 0)?.['birth_control'] > 0) {
        // TODO-QSP: dynamic text: <<$npcdesc>> didn''t come inside you yesterday, so you''re not in any real dange...
        scene.text(`${((st as any).npcdesc ?? '')} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second. But this breaks your streak. Aunt Luda said you need to take it every day or it won't work. So if you take it now, does that mean you're still not safe?`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> didn''t come inside you yesterday, so you''re not in any real dange...
        scene.text(`${((st as any).npcdesc ?? '')} didn't come inside you yesterday, so you're not in any real danger of getting pregnant right this second. But does this mean you'll need to wait a few days to build up the birth control in your system again? If you take your next pill now, does that mean you're still not safe?`);
      }
    }
    qspGoto(st, 'sex_ev_wakeup', 'forgot_bc_pill2');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterForgotBcPill2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    if (((st as any).npc_earlyriser ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'sex_ev_morning', 'npc_morning_shower_desc');
      qspCall(st, 'sex_ev_morning', 'morning_menu1');
    } else {
      if (((st as any).npc_latesleeper ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: <<$npcdesc>> is still asleep next to you snoring softly, completely ignorant to ...
        scene.text(`${((st as any).npcdesc ?? '')} is still asleep next to you snoring softly, completely ignorant to the situation.`);
        qspCall(st, 'sex_ev_morning', 'morning_menu1');
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> stirs next to you.
        scene.text(`${((st as any).npcdesc ?? '')} stirs next to you.`);
        if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] !== 1  &&  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] !== 1  &&  (Math.floor(Math.random() * 3) + 1) === 3) {
          scene.text('"Hey." He yawns, glancing over at you before blinking, a look of concern on his face. "What\'s up? Something wrong?"');
          if (((st as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
            scene.actions([
              { label: 'Take your morning after pill', handler: (st: GameState) => {
    qspCall(st, 'medical_din', 'morning_after_pill_function');
    scene.text('"I forgot my birth control yesterday," you sigh, opening the packaging on your plan B and popping it into your mouth. "Don\'t worry, I\'m taking a morning after pill right now. I\'m just mad at myself for being so stupid."');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
            ]);
          }
          scene.actions([
            { label: 'Don\'t tell him', handler: (st: GameState) => {
    scene.text('"It\'s nothing," you mumble, flashing a smile to pretend like everything is fine.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
            { label: 'Tell him', handler: (st: GameState) => {
    scene.text('"I forgot my birth control yesterday," you sigh. "I fucked up. I\'m sorry."');
    qspCall(st, 'sex_ev_talk', 'forgot_bc_talk');
  } },
          ]);
        } else {
          scene.text('"Hey," he stretches, looking over at you. "You just wake up too?"');
          scene.actions([
            { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you mumble, trying to keep a straight face while you shove down your shameful feelings.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterStopHookingUp(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    if (((s as any).something_or_other ?? 0) === 1) {
    } else {
      if (((s as any).stat ?? 0)?.['hangover'] === 1) {
        scene.actions([
          { label: 'Another drunken hookup' }, // TODO-QSP: empty action body
        ]);
      } else {
        scene.actions([
          { label: 'Another random hookup' }, // TODO-QSP: empty action body
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckedEx(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'ex_boyfriend') {
    scene.actions([
      { label: 'Ugh, I fucked him again', handler: (st: GameState) => {
    scene.text('<i>Shit,</i> you sigh internally. <i>I said I was going to stop sleeping with him...</i>');
    scene.text('<i>Shit,</i> you sigh internally. <i>I can\'t believe I fucked him again...</i>');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatNoGuiltStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lovers ?? 0) + ((s as any).pcs_girlfriends ?? 0) > 0) {
    if ((Array.isArray((s as any).pcs_lover_arr) ? ((s as any).pcs_lover_arr as any[]).indexOf(((s as any).npcID ?? 0)) : -1) === -1) {
      if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.actions([
          { label: 'Your boyfriend (no guilt)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['cheat'] = 'boyfriend'
    qspCall(st, 'sex_ev_wakeup', '');
  } },
        ]);
      }
      if (((s as any).pcs_girlfriends ?? 0) > 0) {
        scene.actions([
          { label: 'Your girlfriend (no guilt)', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['cheat'] = 'girlfriend'
    qspCall(st, 'sex_ev_wakeup', '');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatNoGuilt1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: Thoughts of your <<$sex_ev[''cheat'']>> cross your mind.
  scene.text(`Thoughts of your ${(((s as any).sex_ev ?? 0)?.['cheat'] ?? '')} cross your mind.`);
  if (((s as any).lover_stat ?? 0)?.['fighting_flag'] === 1) {
    scene.actions([
      { label: 'Serves them right', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '<i>Serves </i>' + iif($sex_ev['cheat'] = 'boyfriend', '<i>him</i>', '<i>her</i>...
    scene.text('<i>Serves </i>' + ((((st as any).sex_ev ?? 0)?.['cheat'] === 'boyfriend') ? ('<i>him</i>') : ('<i>her</i>')) + '<i>right,</i> you think, taking a perverse satisfaction in cheating on ' + ((((st as any).sex_ev ?? 0)?.['cheat'] === 'boyfriend') ? ('him') : ('her')) + ' after your recent fight.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissWake(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Oops', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <i>Oops,</i> you think. <i>I think I just cheated on my <<$sex_ev[''cheat'']>>.<...
    scene.text(`<i>Oops,</i> you think. <i>I think I just cheated on my ${(((st as any).sex_ev ?? 0)?.['cheat'] ?? '')}.</i>`);
    scene.text('The realization brings with it no guilt, to you this moment just as much of an oopsie as dropping a pencil.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKissWake(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGuiltInit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['guilt_check'] === 0) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['guilt_check'] = 1;
    if (((s as any).pcs_lover ?? 0) + ((s as any).pcs_girlfriends ?? 0) > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['guilt_count'] = ((s as any).sex_ev['guilt_count'] ?? 0) + (1);
    }
    if (((s as any).sex_ev ?? 0)?.['buy_virginity'] > 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['guilt_count'] = ((s as any).sex_ev['guilt_count'] ?? 0) + (1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGuiltStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['guilt_check'] === 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGuiltInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  if (((s as any).sex_ev ?? 0)?.['guilt_count'] > 0) {
    scene.actions([
      { label: 'Guilt', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['guilt'] = 1;
    if (((st as any).npc_earlyriser ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.img('images/shared/sex/after/wakeup_shock1.mp4');
      scene.text('You bolt upright as a lance of guilt pierces your chest.');
    } else {
      scene.img('images/shared/sex/after/wakeup1.jpg');
      scene.text('You jolt awake as a lance of guilt pierces your chest.');
    }
    if (((st as any).npcID ?? 0) !== 'one_of_svetas_lovers') {
      if (((st as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.actions([
          { label: 'Your boyfriend', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['cheat'] = 'boyfriend'
    qspCall(st, 'sex_ev_wakeup', '');
  } },
        ]);
      }
      if (((st as any).pcs_girlfriends ?? 0) > 0) {
        scene.actions([
          { label: 'Your girlfriend', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['cheat'] = 'girlfriend'
    qspCall(st, 'sex_ev_wakeup', '');
  } },
        ]);
      }
      if (((st as any).juliaQW ?? 0)?.['date'] === 1) {
        scene.actions([
          { label: 'Julia', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['cheat'] = 'Julia'
    qspCall(st, 'sex_ev_wakeup', '');
  } },
        ]);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltProstitution1(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGuiltActRecount(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['bj'] > 0) {
    scene.text('<i>Sucking his cock...</i>');
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'face') {
    scene.text('<i>How he came on your face...</i>');
  }
  if (((s as any).sex_ev ?? 0)?.['cum_choice'] === 'mouth') {
    // TODO-QSP: iif(sex_ev['swallow'] = 1, '<i>When you swallowed his cum...</i>', '<i>When he came in your mouth......
  }
  if (((s as any).sex_ev ?? 0)?.['fuck'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1) {
      scene.text('<i>You gave him your virginity...</i>');
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home') {
        scene.text('<i>Fucking him on his bed...</i>');
      } else {
        if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home') {
          scene.text('<i>Fucking him in your bed...</i>');
        } else {
          if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room') {
            scene.text('<i>Fucking him in this hotel room...</i>');
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['prostitution_flag'] !== 'prostitution') {
      if (((s as any).sex_ev ?? 0)?.['paid_no_condom'] === 1) {
        scene.text('You let him talk you into doing it without a condom...!');
      }
      if (((s as any).sex_ev ?? 0)?.['paid_free_creampies'] === 1) {
        scene.text('You even let him come inside you...!');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] === 1  &&  ((s as any).sex_ev ?? 0)?.['condom_count'] > 3) {
        scene.text('<i>You did it so many times you ran out of condoms...</i>');
      } else {
        if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1) {
          scene.text('<i>You let him do it without a condom...</i>');
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['creampie_orgasm'] === 1) {
    scene.text('<i>You came together, orgasming as he filled you with his cum...</i>');
  } else {
    if (((s as any).sex_ev ?? 0)?.['creampie_orgasm'] >= 3) {
      scene.text('<i>How many times did you come together? How many orgasms came as he filled you with his cum...?</i>');
    } else {
      if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] === 1) {
        scene.text('<i>You had a simultaneous orgasm...</i>');
      } else {
        if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] >= 3  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
          scene.text('<i>How many times did you come together? How many orgasms came as he filled the condom inside you...?</i>');
        } else {
          if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 2) {
            scene.text('<i>He made you come so many times...</i>');
          } else {
            if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
              scene.text('<i>How he made you come...</i>');
            }
          }
          if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 3) {
            scene.text('<i>The multiple loads of cum pumped into your pussy...</i>');
          } else {
            if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
              scene.text('<i>When he came inside you...</i>');
            }
          }
        }
      }
    }
  }
  if (((s as any).birth_control ?? 0)?.['using_bc'] === 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] !== 1) {
    if (((s as any).pillcon2 ?? 0) > 0) {
      scene.text('<i>And you stopped using birth control...</i>');
    } else {
      scene.text('<i>You\'re not even on birth control...</i>');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCheatGuilt1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cheat'] === 'boyfriend'  ||  ((s as any).sex_ev ?? 0)?.['cheat'] === 'girlfriend') {
    // TODO-QSP: dynamic text: <i>My <<$sex_ev[''cheat'']>>...</i> you think.
    scene.text(`<i>My ${(((s as any).sex_ev ?? 0)?.['cheat'] ?? '')}...</i> you think.`);
  } else {
    // TODO-QSP: dynamic text: <i><<$sex_ev[''cheat'']>>...</i> you think.
    scene.text(`<i>${(((s as any).sex_ev ?? 0)?.['cheat'] ?? '')}...</i> you think.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wallow', handler: (st: GameState) => {
    if (((st as any).stat ?? 0)?.['bf_cheated_on'] <= 10) {
      scene.img('images/shared/sex/after/wakeup_shock2.mp4');
      scene.text('You sit up and throw your legs over the edge of the bed, hands at your sides, taking deep guilty breaths as your heart pounds inside your chest.');
      if (((st as any).sex_ev ?? 0)?.['cheat'] === 'boyfriend'  ||  ((st as any).sex_ev ?? 0)?.['cheat'] === 'girlfriend') {
        // TODO-QSP: dynamic text: <i>I just cheated on my <<$sex_ev[''cheat'']>>...</i>
        scene.text(`<i>I just cheated on my ${(((st as any).sex_ev ?? 0)?.['cheat'] ?? '')}...</i>`);
      } else {
        // TODO-QSP: dynamic text: <i>I just cheated on <<$sex_ev[''cheat'']>>...</i> you think.
        scene.text(`<i>I just cheated on ${(((st as any).sex_ev ?? 0)?.['cheat'] ?? '')}...</i> you think.`);
      }
      // TODO-QSP: dynamic text: Your thoughts wander through your night with <<$npcdesc>>...
      scene.text(`Your thoughts wander through your night with ${((st as any).npcdesc ?? '')}...`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltActRecount(st, scene); (st as any).locArgs = __savedLocArgs; }
      if (((st as any).sex_ev ?? 0)?.['prostitution_flag'] === 'prostitution') {
        scene.text('<i>And what for? Money...?</i>');
      }
      scene.text('You feel sick to your stomach...');
    } else {
      scene.img('images/shared/sex/after/wakeup_shock2.mp4');
      scene.text('You sit up, throwing your legs over the side of the bed as the shame flows through you.');
      scene.text('It\'s nothing you haven\'t felt before. This isn\'t the first time you\'ve cheated. It\'s not the second time. It\'s not even the tenth time. You\'ve lost count by now. But somehow, the crippling guilt always feels the same.');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheatGuiltExcuses(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterCheatGuiltExcuses(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s not your fault', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    if (((st as any).sex_ev ?? 0)?.['cheat'] === 'Julia'  ||  ((st as any).sex_ev ?? 0)?.['cheat'] === 'girlfriend') {
      scene.text('<i>It\'s not my fault,</i> you try to rationalize. <i>I have needs. Sexual needs. Strap-ons and dildos and fingering aren\'t enough for me. My body wants dick. <b>He</b> preyed on that. <b>He</b> seduced me. I\'m a victim here...</i>');
    } else {
      scene.text('<i>It\'s not my fault,</i> you try to rationalize. <i>I have needs. Sexual needs. He preyed on that. He seduced me. I\'m a victim here...</i>');
    }
    scene.text('All your excuses ring hollow in your ears.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheatGuilt2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'It\'s just sex', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    if (((st as any).sex_ev ?? 0)?.['cheat'] === 'Julia') {
      // TODO-QSP: dynamic text: <i>It''s just sex,</i> you try to rationalize. <i>It''s not like I''m falling in...
      scene.text(`<i>It's just sex,</i> you try to rationalize. <i>It's not like I'm falling in love with ${((st as any).npcdesc ?? '')} or anything. I just really needed some cock, which ${(((st as any).sex_ev ?? 0)?.['cheat'] ?? '')} obviously doesn't have. Strap-ons and dildos aren't the same. It's not cheating. It's just sex.</i>.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['cheat'] === 'girlfriend') {
        // TODO-QSP: dynamic text: <i>It''s just sex,</i> you try to rationalize. <i>It''s not like I''m falling in...
        scene.text(`<i>It's just sex,</i> you try to rationalize. <i>It's not like I'm falling in love with ${((st as any).npcdesc ?? '')} or anything. I just really needed some cock, which my girlfriend obviously doesn't have. Strap-ons and dildos aren't the same. It's not cheating. It's just sex.</i>.`);
      } else {
        // TODO-QSP: dynamic text: <i>It''s just sex,</i> you try to rationalize. <i>It''s not like I''m falling in...
        scene.text(`<i>It's just sex,</i> you try to rationalize. <i>It's not like I'm falling in love with ${((st as any).npcdesc ?? '')} or anything. It's not cheating. It's just sex.</i>.`);
      }
    }
    scene.text('<i>It\'s just sex...</i>');
    scene.text('Only you can decide whether or not you believe yourself.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterCheatGuilt2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'You\'re a whore', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock3.mp4');
    scene.text('You scold yourself internally, screaming insults that impale your own soul.');
    if (Object.keys((st as any).fuckbuddy ?? {}).length > 5) {
      scene.text('<i>One lover isn\'t enough for you? Not even two? You need to have a whole stable to satisfy you? You filthy cock-hungry whore!</i>');
    } else {
      if (Object.keys((st as any).fuckbuddy ?? {}).length > 1) {
        scene.text('<i>You slut! You can\'t keep your legs closed. Just how much cock do you need? You\'re nothing but a filthy whore...</i>');
      } else {
        scene.text('<i>You slut! What\'s wrong with you? A committed relationship isn\'t enough to satisfy you? Can\'t keep your legs closed? You\'re nothing but a filthy whore...</i>');
      }
    }
    if (((st as any).stat ?? 0)?.['bf_cheated_on'] > 10) {
      scene.text('You breathe deeply, letting the pain take its course, waiting for it to subside. It\'s nothing you haven\'t felt before...');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_wakeup', 'cheat_guilt3'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCheatGuilt2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['bf_cheated_on'] <= 10) {
    scene.text('The guilt doesn\'t go away.');
  } else {
    scene.text('You breathe deeply, letting the pain take its course, waiting for it to subside. It\'s nothing you haven\'t felt before...');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_wakeup', 'cheat_guilt3'] },
  ]);
  scene.build();
}

function enterCheatGuilt3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/after/wakeup_shock2.mp4');
  if (((s as any).npc_earlyriser ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'player_home') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['npc_morning_shower'] = 1;
      // TODO-QSP: dynamic text: The bed next to you is empty but you can hear water running through the wall. <<...
      scene.text(`The bed next to you is empty but you can hear water running through the wall. ${((s as any).npcdesc ?? '')} must be in the shower.`);
    } else {
      qspCall(s, 'sex_ev_morning', 'npc_morning_shower_desc');
    }
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } else {
    if (((s as any).npc_latesleeper ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        // TODO-QSP: dynamic text: <<$npcdesc>>, the guy from last night, is still asleep next to you, completely i...
        scene.text(`${((s as any).npcdesc ?? '')}, the guy from last night, is still asleep next to you, completely ignorant to your internal strife, snoring softly.`);
      } else {
        // TODO-QSP: dynamic text: <<$npcdesc>> is still asleep next to you, completely ignorant to your internal s...
        scene.text(`${((s as any).npcdesc ?? '')} is still asleep next to you, completely ignorant to your internal strife, snoring softly.`);
      }
      qspCall(s, 'sex_ev_morning', 'morning_menu1');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> stirs next to you.
      scene.text(`${((s as any).npcdesc ?? '')} stirs next to you.`);
      if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  (Math.floor(Math.random() * 3) + 1) === 3) {
        scene.text('"Hey." He yawns, glancing over at you before blinking, a look of concern on his face. "What\'s up? Something wrong?"');
        if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          scene.actions([
            { label: 'Tell him you\'re cheating' }, // TODO-QSP: empty action body
          ]);
        } else {
          if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Thinking about your ' + String((((s as any).sex_ev ?? 0)?.['cheat'] ?? '') ?? '') }, // TODO-QSP: empty action body
            ]);
          } else {
            scene.text('"Hey," he stretches, looking over at you. "You just wake up too?"');
            scene.actions([
              { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you mumble, trying to keep a straight face while you shove down your shameful feelings.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
            ]);
          }
        }
        scene.actions([
          { label: 'It\'s nothing', handler: (st: GameState) => {
    scene.text('"It\'s nothing," you mumble, trying to keep a straight face while you shove down your shameful feelings.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
  }
  scene.build();
}

function enterGuiltProstitution1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['buy_virginity'] > 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGuiltVirginity1(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).NOT_DISABLED ?? 0) === 1) {
      if (((s as any).stat ?? 0)?.['prostitution_count'] === 0) {
        scene.actions([
          { label: 'You sold yourself', handler: (st: GameState) => {
    scene.text('<i>I just whored myself out...</i> you think to yourself.');
    scene.actions([
      { label: 'Sit up', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    scene.text('You sit up, taking deep breaths as the guilt and shame course through your body as the memories of last night wash over you.');
    scene.text('<i>I fucked someone for money...</i> you think.');
    scene.text('You took his money and spread your legs...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltActRecount(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('Something so important and you just gave it away...');
    scene.text('For what? Money...?');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'You sold yourself again', handler: (st: GameState) => {
    scene.text('<i>I just whored myself out...</i> you think to yourself. <i>Again.</i>');
    scene.actions([
      { label: 'Sit up', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    scene.text('You sit up, taking deep breaths as the guilt and shame course through your body as the memories of last night wash over you.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltActRecount(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('For what? So you could earn a few more rubles...?');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterGuiltVirginity1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You sold your virginity', handler: (st: GameState) => {
    scene.text('<i>I sold my virginity last night...</i> you think.');
    scene.actions([
      { label: 'Sit up', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock2.mp4');
    scene.text('You sit up, taking deep breaths as the guilt and shame course through you.');
    scene.text('<i>I sold my virginity to a complete stranger...</i> you think to yourself again.');
    scene.text('You took his money and spread your legs...');
    if (((st as any).sex_ev ?? 0)?.['paid_no_condom'] === 1) {
      scene.text('You let him talk you into doing it without a condom...!');
    }
    if (((st as any).sex_ev ?? 0)?.['paid_free_creampies'] === 1) {
      scene.text('You even let him come inside you...!');
    }
    scene.text('Something so important and you just gave it away...');
    scene.text('For what? Money...?');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltVirginity2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGuiltVirginity2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Shame', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock3.mp4');
    scene.text('<i>You\'re nothing but a filthy whore...</i>');
    scene.text('The moment as you think it, you can\'t escape. Shame fills your entire body and you can barely breathe as the thought buries itself in your heart and you can\'t help but think it over and over and over again.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltVirginityEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Your mother', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock3.mp4');
    scene.text('<i>You <b>filthy</b> whore!</i>');
    scene.text('The moment as you think it, you can\'t escape. Shame fills your entire body and you can barely breathe as the image of your mother condemning you buries itself in your heart and you can\'t help but think it over and over and over again.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGuiltVirginityEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterGuiltVirginityEnd(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_wakeup ---------------------------------
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/wakeup_shock3.mp4');
    if (((st as any).npc_earlyriser ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      if (((st as any).sex_ev ?? 0)?.['loc'] === 'player_home') {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_shower'] = 1;
        // TODO-QSP: dynamic text: The bed next to you is empty but you can hear water running through the wall. <<...
        scene.text(`The bed next to you is empty but you can hear water running through the wall. ${((st as any).npcdesc ?? '')} must be in the shower.`);
      } else {
        qspCall(st, 'sex_ev_morning', 'npc_morning_shower_desc');
      }
      qspCall(st, 'sex_ev_morning', 'morning_menu1');
    } else {
      if (((st as any).npc_latesleeper ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        if (((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
          // TODO-QSP: dynamic text: <<$npcdesc>>, the guy from last night, is still asleep next to you, completely i...
          scene.text(`${((st as any).npcdesc ?? '')}, the guy from last night, is still asleep next to you, completely ignorant to your internal strife, snoring softly.`);
        } else {
          // TODO-QSP: dynamic text: <<$npcdesc>> is still asleep next to you, completely ignorant to your internal s...
          scene.text(`${((st as any).npcdesc ?? '')} is still asleep next to you, completely ignorant to your internal strife, snoring softly.`);
        }
        qspCall(st, 'sex_ev_morning', 'morning_menu1');
      } else {
        // TODO-QSP: dynamic text: You feel movement in the bed and turn to see <<$npcdesc>> stirring next to you.
        scene.text(`You feel movement in the bed and turn to see ${((st as any).npcdesc ?? '')} stirring next to you.`);
        scene.text('"Last night was great," he smiles.');
        scene.actions([
          { label: 'Hide your feelings', handler: (st: GameState) => {
    scene.text('"Y-yeah," you stammer, trying to keep a straight face while you shove down your shameful feelings.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
          { label: 'Fake smile', handler: (st: GameState) => {
    scene.text('"Yeah! I had a really good time!" you say, giving him back a bright smile with all of your dark feelings barricaded behind it.');
    qspCall(st, 'sex_ev_morning', 'morning_menu1');
  } },
        ]);
      }
    }
  } },
  ]);
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
    case 'yawn_wake':
      enterYawnWake(s, scene);
      break;
    case 'kiss_wake':
      enterKissWake(s, scene);
      break;
    case 'bj_wake':
      enterBjWake(s, scene);
      break;
    case 'after_sleepfuck_wake':
      enterAfterSleepfuckWake(s, scene);
      break;
    case 'cumshot_wakeup1':
      enterCumshotWakeup1(s, scene);
      break;
    case 'cumshot_wakeup_clean1':
      enterCumshotWakeupClean1(s, scene);
      break;
    case 'cumshot_wakeup_clean2':
      enterCumshotWakeupClean2(s, scene);
      break;
    case 'cumshot_wakeup_bj':
      enterCumshotWakeupBj(s, scene);
      break;
    case 'wakeup_fondling':
      enterWakeupFondling(s, scene);
      break;
    case 'forgot_bc_pill':
      enterForgotBcPill(s, scene);
      break;
    case 'forgot_bc_pill2':
      enterForgotBcPill2(s, scene);
      break;
    case 'stop_hooking_up':
      enterStopHookingUp(s, scene);
      break;
    case 'fucked_ex':
      enterFuckedEx(s, scene);
      break;
    case 'cheat_no_guilt_start':
      enterCheatNoGuiltStart(s, scene);
      break;
    case 'cheat_no_guilt1':
      enterCheatNoGuilt1(s, scene);
      break;
    case 'guilt_init':
      enterGuiltInit(s, scene);
      break;
    case 'guilt_start':
      enterGuiltStart(s, scene);
      break;
    case 'guilt_act_recount':
      enterGuiltActRecount(s, scene);
      break;
    case 'cheat_guilt1':
      enterCheatGuilt1(s, scene);
      break;
    case 'cheat_guilt_excuses':
      enterCheatGuiltExcuses(s, scene);
      break;
    case 'cheat_guilt2':
      enterCheatGuilt2(s, scene);
      break;
    case 'cheat_guilt3':
      enterCheatGuilt3(s, scene);
      break;
    case 'guilt_prostitution1':
      enterGuiltProstitution1(s, scene);
      break;
    case 'guilt_virginity1':
      enterGuiltVirginity1(s, scene);
      break;
    case 'guilt_virginity2':
      enterGuiltVirginity2(s, scene);
      break;
    case 'guilt_virginity_end':
      enterGuiltVirginityEnd(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_wakeup: LocationDef = {
  name: 'sex_ev_wakeup',
  title: 'A loud sound pierces your consciousness like a spear through',
  region: 'other',
  enter: enter,
};
