import { qspGoto, qspCall } from '../_shared/qspBridge';
import { SceneBuilder } from '../../core/scene';
import type { GameState, ActionDef, LocationDef } from '../../core/types';

function rand(a: number, b: number): number { return Math.floor(Math.random() * (b - a + 1)) + a; }

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
  scene.build();
}

function enterWakeEvents(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if ((st.alarmVars ?? {})['alarmOn'] === 0) {
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    scene.nl();
    scene.text('You groggily tap it a few times before finally getting it to turn off.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  } else {
    if ((st.npc_earlyriser ?? {})[String(st.npcID ?? 0)] === 0) {
      if ((st.sex_ev ?? {})['loc'] === 'pc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under your covers with ' + String(st.npcdesc ?? '') + '\'s arms wrapped around you.');
      } else if ((st.sex_ev ?? {})['loc'] === 'npc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, tucked under the covers of ' + String(st.npcdesc ?? '') + '\'s bed.');
      } else {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under the covers with ' + String(st.npcdesc ?? '') + '\'s arms wrapped around you.');
      }
    } else {
      if ((st.sex_ev ?? {})['loc'] === 'pc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under your covers.');
      } else if ((st.sex_ev ?? {})['loc'] === 'npc_home') {
        scene.text('Your mind stirs and you slowly come to consciousness, tucked under the covers.');
      } else {
        scene.text('Your mind stirs and you slowly come to consciousness, snuggled under the covers.');
      }
    }
    scene.actions([
      { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
    ]);
    qspCall(s, 'sex_ev_wakeup', 'kiss_wake');
  }
  qspCall(s, 'sex_ev_wakeup', 'late_for_school');
  qspCall(s, 'sex_ev_wakeup', 'after_sleepfuck_wake');
  qspCall(s, 'sex_ev_wakeup', 'guilt_start');
  qspCall(s, 'sex_ev_wakeup', 'forgot_bc_pill');
  scene.build();
}

function enterWakeAlone(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.img('images/shared/romance/misc/wakeup1.mp4');
  if ((st.alarmVars ?? {})['alarmOn'] === 0) {
    scene.text('A loud sound disrupts your sleep. As you slowly crack open your eyes, you see the illuminated screen of your phone, displaying your morning alarm and asking if you want to snooze it.');
    scene.nl();
    scene.text('You groggily tap it a few times before finally getting it to turn off.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  } else {
    scene.text('Your mind stirs and you slowly come to awareness that it\'s morning and you\'re snuggled under the covers.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_wakeup', 'wake_alone2'] },
    ]);
  }
  scene.build();
}

function enterWakeAlone2(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.img('images/shared/romance/misc/wake_alone1.mp4');
  scene.text('It\'s only then that you sit up in bed and realize that ' + String(st.npcdesc ?? '') + ' is gone.');
  scene.nl();
  scene.text('You vaguely remember passing out last night. He must have left after you fell asleep. Or early this morning.');
  scene.nl();
  scene.text('Either way, now it\'s just... you.');
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_leave', 'exit'] },
  ]);
  scene.build();
}

function enterSleepFuckWake(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if (st.daystage === 2) {
    scene.img('images/shared/romance/misc/wakeup1.mp4');
  } else {
    scene.img('images/shared/sex/after/sleep4.jpg');
  }
  scene.text('Your mind stirs and you slowly come to consciousness. The first thing you notice...');
  scene.nl();
  const sev = st.sex_ev ?? {};
  if (sev['sleep_cum_vagina'] === 1) {
    scene.text('<i>Is that cum leaking out of my pussy?</i>');
  } else if (sev['sleep_cum_face'] === 1) {
    scene.text('<i>Is there cum on my face?</i>');
  } else if (sev['sleep_cum_tits'] === 1) {
    scene.text('<i>Is there cum on my tits?</i>');
  } else if (sev['sleep_cum_stomach'] === 1) {
    scene.text('<i>Is that cum on my stomach?</i>');
  } else if (sev['sleep_cum_hair'] === 1) {
    scene.text('<i>Is that cum in my hair?</i>');
  } else if (sev['sleep_cum_back'] === 1) {
    scene.text('<i>Is that cum on my back?</i>');
  } else if (sev['sleep_cum_butt'] === 1) {
    scene.text('<i>Is that cum on my butt?</i>');
  }
  scene.actions([
    { label: 'Continue', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      const sev2 = st2.sex_ev ?? {};
      if (sev2['sleep_cum_vagina'] === 1) {
        sc.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        sc.text('You pull aside the covers and discover, yes, it is indeed fresh cum dripping from your pussy.');
      } else if (sev2['sleep_cum_face'] === 1) {
        sc.img('images/shared/sex/cum/facial/facial35.jpg');
        sc.text('You blink carefully, running your hand across your cheek to discover, yes, there is indeed fresh cum on your face.');
      } else if (sev2['sleep_cum_tits'] === 1) {
        sc.img('images/pc/body/cum/cumtits/cumtits8.jpg');
        sc.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your tits.');
      } else if (sev2['sleep_cum_stomach'] === 1) {
        sc.img('images/pc/body/cum/cumbelly/cumbelly10.jpg');
        sc.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your belly.');
      } else if (sev2['sleep_cum_hair'] === 1) {
        sc.img('images/pc/body/cum/cumhair/cumhair1.jpg');
        sc.text('You sit up, looking down to discover, yes, there is indeed fresh cum in your hair.');
      } else if (sev2['sleep_cum_back'] === 1) {
        sc.img('images/pc/body/cum/cumsleep/cumsleep2.jpg');
        sc.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your back.');
      } else if (sev2['sleep_cum_butt'] === 1) {
        sc.img('images/pc/body/cum/cumass/cumass6.jpg');
        sc.text('You sit up, looking down to discover, yes, there is indeed fresh cum on your ass.');
      }
      sc.actions([
        { label: 'Did you fuck me in my sleep?', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"\u2026 did you fuck me while I was sleeping last night?" you ask.');
          sc2.actions([
            { label: 'Just wondered', handler: (st4: GameState) => {
              const sc3 = new SceneBuilder();
              sc3.text('"Was just wondering," you reply.');
              qspCall(st4, 'sex_ev_morning', 'morning_menu1');
              (st4 as any).scene = sc3.build();
              (st4 as any).navigationVersion++;
            } },
            { label: 'Explains the dream', handler: (st4: GameState) => {
              const sc3 = new SceneBuilder();
              sc3.text('"Well that explains the weird dreams I was having," you say.');
              qspCall(st4, 'sex_ev_morning', 'morning_menu1');
              (st4 as any).scene = sc3.build();
              (st4 as any).navigationVersion++;
            } },
          ]);
          if ((st3.npc_sleep_sex_okay ?? {})[String(st3.npcID ?? 0)] === 0) {
            sc2.text('"Yeah. Got horny and you wouldn\'t wake up."');
            sc2.actions([
              { label: 'Don\'t make a habit out of it', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                sc3.text('"It was fine this time," you say. "But don\'t make a habit out of it."');
                sc3.text('"No promises," ' + String(st4.npcdesc ?? '') + ' smirks mischievously.');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
              { label: 'Wake me up next time', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 1;
                sc3.text('"Wake me up next time," you say. "Maybe I want to get some too."');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
              { label: 'That\'s fine', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 2;
                sc3.text('"That\'s fine," you say. "A guy\'s gotta take care of his needs, doesn\'t he?"');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
              { label: 'Sleep orgasms are the best', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 2;
                sc3.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
            ]);
          } else {
            sc2.text('"Yeah," he grins.');
            if ((st3.npc_sleep_sex_okay ?? {})[String(st3.npcID ?? 0)] === -1) {
              sc2.actions([
                { label: 'Get mad', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  sc3.text('You glare daggers at him.');
                  sc3.text('"If I weren\'t in a rush to get up, I\'d rip your head off."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
                { label: 'Let it slide', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  sc3.text('"No," you say. "But I can\'t do much about it now."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            } else {
              sc2.actions([
                { label: 'Sleep orgasms are the best', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 2;
                  sc3.text('"I love it when you fuck me in my sleep," you grin. "I have the best orgasms."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            }
          }
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
        { label: 'Someone had fun last night', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"Somebody had fun last night," you muse, looking over at ' + String(st3.npcdesc ?? '') + ' who is also waking.');
          if ((st3.npc_sleep_sex_okay ?? {})[String(st3.npcID ?? 0)] === 0) {
            sc2.text('"Yeah. Got horny while you were asleep. Is that okay?"');
            sc2.actions([
              { label: 'Ask next time', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 1;
                sc3.text('"Just ask next time," you smirk.');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
              { label: 'That\'s fine', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 2;
                sc3.text('"That\'s fine," you smirk. "A guy\'s gotta take care of his needs, doesn\'t he?"');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
              { label: 'Sleep orgasms are the best', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 2;
                sc3.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
            ]);
          } else {
            sc2.text('"Yeah," he grins. "That okay?"');
            if ((st3.npc_sleep_sex_okay ?? {})[String(st3.npcID ?? 0)] === -1) {
              sc2.actions([
                { label: 'Get mad', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  sc3.text('"No," you say, glaring daggers at him. "If I weren\'t in a rush to get up, I\'d rip your head off."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
                { label: 'Let it slide', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  sc3.text('"No," you say irritably. "But I can\'t do much about it now."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            } else {
              sc2.actions([
                { label: 'Of course', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  sc3.text('"Of course it is," you smile. "I said you could."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
                { label: 'Sleep orgasms are the best', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  (st4.npc_sleep_sex_okay ?? {})[String(st4.npcID ?? 0)] = 2;
                  sc3.text('"Feel free to do it again," you grin. "I have the best orgasms when I\'m sleeping."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            }
          }
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
        { label: 'Thanks for not waking me', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"Thanks for not waking me," you yawn pleasantly. You roll your hips as you do, noting that your pussy <i>definitely</i> feels used. "I really needed the sleep."');
          sc2.text('"Thanks for letting me fuck you," he grins.');
          sc2.text('"Any time," you smile.');
          qspCall(st3, 'sex_ev_morning', 'morning_menu1');
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}


function enterLateForSchool(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if (st.kanikuli === 0 && (st.start_type ?? {})['loc'] === 'sg' && (st.gschoolVars ?? {})['school_diploma'] === 0 && (st.gschoolVars ?? {})['block'] === 0 && st.week < 6 && st.hour >= 7) {
    scene.actions([
      { label: 'School!', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        sc.img('images/shared/romance/misc/wakeup2.mp4');
        sc.text('Your eyes snap open as the cold clarity of shock washes over you and frantically grab your phone.');
        sc.nl();
        qspCall(st2, 'shortgs', 'calendar_display');
        sc.nl();
        sc.text('Oh <i>fuck!</i> You need to get to school!');
        if ((st2.sex_ev ?? {})['loc'] !== 'pc_home') {
          qspCall(st2, 'sex_ev_wakeup', 'late_school_not_at_home');
        } else {
          sc.actions([
            { label: 'Get up!', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"I need to go," you say, hurriedly hauling ' + String(st3.npcdesc ?? '') + ' out of your bed. "And so do you."');
              if ((st3.npc_latesleeper ?? {})[String(st3.npcID ?? 0)] === 1) {
                st3.minut += rand(2, 3);
                sc2.text(String(st3.npcdesc ?? '') + ' groggily starts gathering his clothes as you impatiently try to get him to go faster, constantly checking the clock to see how much time he\'s wasting. When he\'s <i>finally</i> dressed you rush ' + String(st3.npcdesc ?? '') + ' to the door and shove him out and slam it shut, racing to get ready for class.');
              } else {
                st3.minut += 1;
                sc2.text('At your command, ' + String(st3.npcdesc ?? '') + ' starts throwing his clothes on while you impatiently keep checking the clock. Thankfully it\'s not more than a minute before he\'s fully dressed and you rush him out the door and slam it behind him, racing to get ready for class.');
              }
              qspCall(st3, 'stat', '');
              sc2.actions([
                { label: 'Continue', goto: ['sex_ev_leave', 'exit'] },
              ]);
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
        }
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}

function enterLateSchoolNotAtHome(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.actions([
    { label: '<i>Get dressed!</i>', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/pc/activities/misc/dress_1.mp4');
      qspCall(st2, 'clothing', 'wear_last_worn');
      qspCall(st2, 'underwear', 'wear');
      sc.text('Scrambling from the bed, you start grabbing your clothes and throwing them on as fast as you can.');
      if (st2.PCloStyle2 === 4) {
        sc.text('You probably don\'t have time for a shower, but at least you don\'t have to run home and change clothes, you think gratefully to yourself as your pull on your discarded uniform from last night.');
      } else {
        sc.text('You need to get home and change into your uniform! You\'re not sure if you have time for a shower, but you definitely <i>need</i> to get your uniform!');
      }
      sc.text('"Hey, what\'s wrong?" ' + String(st2.npcdesc ?? '') + ' says, turning over and squinting at you with sleepy eyes.');
      sc.actions([
        { label: 'I need to be somewhere!', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"I\'m gonna be late for something!" you say hurriedly. "Gotta go!"');
          sc2.text('With one last quick check, you make sure all your clothes are in place and rush out the door, leaving ' + String(st3.npcdesc ?? '') + ' and your night together behind you.');
          sc2.actions([
            { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
          ]);
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
        { label: 'I\'m gonna be late for school!', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          if (st3.PCloStyle2 === 4) {
            sc2.text('"I need to go! I\'m going to be late for school!" you huff, pulling your skirt up and buttoning your shirt as fast as you can. It\'s a bit wrinkled from laying in a pile all night, but it\'ll do in a pinch.');
          } else {
            sc2.text('"I need to go! I\'m going to be late for school!" you huff. "I need to go home! I don\'t have my uniform! Shit! <i>Fuck!</i>"');
          }
          if ((st3.npc_car ?? {})[String(st3.npcID ?? 0)] === 1 && (st3.npc_selfish ?? {})[String(st3.npcID ?? 0)] !== 1) {
            sc2.text('"You need a ride? I can drop you off in my car."');
            sc2.actions([
              { label: 'No thanks', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.sex_ev ?? {})['bed_room'];
                sc3.text('"No, I\'ll be okay. But thanks for the offer."');
                sc3.nl();
                sc3.text('With one last quick check, you make sure all your clothes are in place and call, "See you later!" over your shoulder as you rush out the door.');
                sc3.actions([
                  { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
                ]);
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
              { label: 'That\'d be great', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.sex_ev ?? {})['bed_room'];
                sc3.text('"Really?" you perk up. "That\'d be great!"');
                sc3.text('"Let me just get dressed."');
                sc3.text('You collect your things while he throws on some clothes and grabs his keys, then both of you head outside and climb into his car.');
                sc3.text('"Where do you want me to take you?" he asks');
                sc3.actions([
                  { label: 'Take me home', handler: (st5: GameState) => {
                    (st5.sex_ev ?? {})['give_lift'] = 1;
                    qspGoto(st5, 'sex_ev_morning', 'give_lift');
                  } },
                  { label: 'Take me to school', handler: (st5: GameState) => {
                    (st5.sex_ev ?? {})['give_lift'] = 2;
                    qspGoto(st5, 'sex_ev_morning', 'give_lift');
                  } },
                ]);
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
            ]);
            if ((st3.npc_residence ?? {})[String(st3.npcID ?? 0)] === 1) {
              sc2.actions([
                { label: 'I can walk', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  (st4.sex_ev ?? {})['bed_room'];
                  sc3.text('"That\'s okay," you shake your head. "I live right around the corner, I can just walk. But thanks for the offer."');
                  qspCall(st4, 'sex_ev_leave', 'hurry_leave');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            }
            sc2.actions([
              { label: 'Can\'t let people see', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                (st4.sex_ev ?? {})['bed_room'];
                sc3.text('You hesitate for a moment, considering it.');
                sc3.nl();
                sc3.text('"No," you shake your head. "I don\'t want someone seeing me get out of your car. Rumors spread like fire at my school. I can\'t risk it."');
                qspCall(st4, 'sex_ev_leave', 'hurry_leave');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
            ]);
          } else {
            sc2.text('With one last quick check, you make sure all your clothes are in place and grab the rest of your things. "See you later!" you call over your shoulder as you rush out the door.');
            qspCall(st3, 'sex_ev_leave', 'hurry_leave');
          }
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterThrowUp(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  (st.sex_ev ?? {})['bed_room'];
  scene.text('Your stomach churns, waking you from sleep.');
  scene.nl();
  scene.text('<b>You\'re about to throw up.</b>');
  scene.actions([
    { label: 'Run to the bathroom', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      st2.minut += 1;
      qspCall(st2, 'stat', '');
      sc.img('images/locations/shared/home/bathroom/vomit.jpg');
      sc.text('Clamping your hand over your mouth, you scramble from your bed and tear your way to the bathroom. You barely manage to lift the lid up in time and violently hurl into the toilet bowl.');
      sc.actions([
        { label: 'Continue', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          st3.minut += rand(2, 8);
          qspCall(st3, 'stat', '');
          sc2.img('images/locations/shared/home/bathroom/vomit_after.jpg');
          sc2.text('After several minutes of retching, your stomach finally seems to be empty, and you just lay there, panting over the toilet bowl.');
          if ((st3.npc_latesleeper ?? {})[String(st3.npcID ?? 0)] === 0) {
            (st3.sex_ev ?? {})['boy_in_shower'] = 0;
            sc2.nl();
            sc2.text(String(((st3.npc_usedname ?? {})[String(st3.npcID ?? 0)] ?? '')) + ' peeks his head in through the door.');
            sc2.text('"Hey, you okay?"');
            sc2.actions([
              { label: 'No idea', handler: (st4: GameState) => {
                const sc3 = new SceneBuilder();
                sc3.text('"No idea," you groan.');
                if (rand(1, 100) < (st4.npc_intel ?? {})[String(st4.npcID ?? 0)] && (st4.npc_creampie_count ?? {})[String(st4.npcID ?? 0)] > 0) {
                  st4.thinkpreg = 1;
                  sc3.text('"You\'re not... pregnant are you...?"');
                  sc3.text('The blood drains from your face. You clutch the toilet bowl in panic as your stomach turns again.');
                  if (st4.daystart - st4.daylastperiod > 28) {
                    sc3.text('<i>Your period is late...</i>');
                  }
                  sc3.text('"Oh <i>shit</i>..." you whisper before hurling up your guts again.');
                } else {
                  sc3.text(String((st4.npc_usedname ?? {})[String(st4.npcID ?? 0)] ?? '') + ' makes a face and leaves you to keep throwing up until you feel you can stand.');
                }
                qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                (st4 as any).scene = sc3.build();
                (st4 as any).navigationVersion++;
              } },
            ]);
            if ((st3.vomit ?? {})['hangover'] === 1) {
              sc2.actions([
                { label: 'Hungover', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  sc3.text('"No," you groan. "I\'m really hungover..."');
                  qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            } else if ((st3.vomit ?? {})['morning_sick'] === 1) {
              if (st3.knowpreg === 1) {
                if (st3.morning_sickness === 0) {
                  st3.morning_sickness = 1;
                  sc2.text('<i>Ugh, is this what morning sickness feels like?</i> you think to yourself as you lay there on the floor.');
                } else {
                  sc2.text('<i>Ugh! Why does pregnancy have to come with so many side effects...</i> you think to yourself as you lay there on the floor.');
                }
              } else if (st3.thinkpreg === 1) {
                sc2.actions([
                  { label: 'Might be pregnant', handler: (st4: GameState) => {
                    const sc3 = new SceneBuilder();
                    sc3.text('"Erm..." You clutch the toilet bowl, hesitating before answering. "I uhh... I might be pregnant..."');
                    qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                    (st4 as any).scene = sc3.build();
                    (st4 as any).navigationVersion++;
                  } },
                ]);
              } else if (st3.knowpreg === 0) {
                if (st3.daystart - st3.daylastperiod > 28 && rand(1, 100) < st3.pcs_intel) {
                  sc2.actions([
                    { label: 'Might be pregnant', handler: (st4: GameState) => {
                      st4.thinkpreg = 1;
                      const sc3 = new SceneBuilder();
                      sc3.text('"Erm..." You clutch the toilet bowl, hesitating before answering as you do some of the mental math. "I uhh... I might be pregnant..."');
                      sc3.text('"Really?"');
                      sc3.text('"My period is a little late..." you admit, biting your lip.');
                      qspCall(st4, 'sex_ev_morning', 'morning_menu1');
                      (st4 as any).scene = sc3.build();
                      (st4 as any).navigationVersion++;
                    } },
                  ]);
                }
              }
            }
          } else {
            sc2.text('When your guts stop coming up, you stumble to your feet and stagger out the door to see ' + String((st3.npc_usedname ?? {})[String(st3.npcID ?? 0)] ?? '') + ' still snoring in bed.');
            qspCall(st3, 'sex_ev_morning', 'morning_menu1');
          }
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterYawnWake(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  (st.sex_ev ?? {})['bed_room'];
  scene.text('You open your mouth wide, yawning loudly and stretching your arms back as the covers fall off of you.');
  scene.nl();
  if ((st.npc_earlyriser ?? {})[String(st.npcID ?? 0)] === 1) {
    if ((st.sex_ev ?? {})['boy_make_breakfast'] === 1) {
      if ((st.npc_apt_type ?? {})[String(st.npcID ?? 0)] === 2 && (st.sex_ev ?? {})['loc'] !== 'pc_home' && (st.sex_ev ?? {})['loc'] !== 'family_home') {
        scene.text(String(st.npcdesc ?? '') + ' is already up, doing something in his kitchen area and the smell of coffee and fresh food wafts over to you in bed.');
      } else {
        scene.text('The bed next to you is empty but the smell of coffee and cooked grains and proteins waft through the apartment.');
      }
      scene.nl();
      scene.text('Checking your phone, the time reads:');
      scene.nl();
      qspCall(s, 'shortgs', 'calendar_display');
    } else if ((st.sex_ev ?? {})['boy_in_shower'] === 1) {
      qspCall(s, 'sex_ev_morning', 'npc_morning_shower_desc');
      scene.nl();
      scene.text('Checking your phone, the time reads:');
      scene.nl();
      qspCall(s, 'shortgs', 'calendar_display');
    } else {
      scene.text('You grope around for your phone and when you switch on the display the time reads:');
      scene.nl();
      qspCall(s, 'shortgs', 'calendar_display');
      scene.nl();
      scene.text('"Hey sleepyhead," ' + String(st.npcdesc ?? '') + ' smirks as he comes back into the room, a towel around his waist, hair still damp from the shower.');
    }
  } else if ((st.npc_latesleeper ?? {})[String(st.npcID ?? 0)] === 1) {
    scene.text(String(st.npcdesc ?? '') + ' is still completely passed out beside you, your movement not interrupting his snoring in the slightest. Groping around for your phone, the time reads:');
    scene.nl();
    qspCall(s, 'shortgs', 'calendar_display');
    (st.sex_ev ?? {})['boy_asleep'] = 1;
  } else {
    scene.text('Your movement causes ' + String(st.npcdesc ?? '') + ' to stir as well, blinking his eyes open. Reaching down, you grab your phone and switch on the display.');
    scene.nl();
    qspCall(s, 'shortgs', 'calendar_display');
  }
  qspGoto(s, 'sex_ev_morning', 'morning_menu1');
  scene.build();
}

function enterKissWake(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.npc_earlyriser ?? {})[String(st.npcID ?? 0)] !== 1) {
    scene.actions([
      { label: 'Kiss ' + String(st.npcdesc ?? ''), handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        qspCall(st2, 'arousal', 'kiss', 1, 'no_orgasm_msg', (st2.sex_ev ?? {})['prostitution_flag']);
        (st2.sex_ev ?? {})['boy_asleep'] = 0;
        qspCall(st2, 'npc_relationship', 'modify', st2.npcID, 'like');
        sc.img('images/shared/sex/kiss/bed1.jpg');
        sc.text('You roll over onto ' + String(st2.npcdesc ?? '') + ', resting your breasts on his chest as you straddle him.');
        sc.text('"Good <i>-mmmph-</i> morning," you murmur, planting a kiss on his lips.');
        if ((st2.cum_loc ?? {})['face'] > 0) {
          sc.text('"Ugch~! What the fuck is that?" he sputters, shaking his head in disgust.');
          sc.actions([
            { label: 'Didn\'t wash my face', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"It\'s your cum," you say. "Didn\'t get to wash it off after you cumshot me last night."');
              sc2.text('"Couldn\'t you have washed it off before you kissed me?"');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              sc2.actions([
                { label: 'Give ' + String(st3.npcdesc ?? '') + ' a blowjob', handler: (st4: GameState) => {
                  qspCall(st4, 'arousal', 'bj', 1, 'no_orgasm_msg', (st4.sex_ev ?? {})['prostitution_flag']);
                  const sc3 = new SceneBuilder();
                  sc3.img('images/shared/sex/blowjob/bj47.mp4');
                  sc3.text('"Let me make it up to you," you smile, throwing back the covers and wrapping your lips around his morning wood.');
                  qspCall(st4, 'sex_ev_wakeup', 'bj_wake');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
            { label: 'His fault', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"It\'s your fault," you say. "You\'re the one who plastered my face last night."');
              sc2.text('"Couldn\'t you have washed it off before you kissed me?"');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              sc2.actions([
                { label: 'Give ' + String(st3.npcdesc ?? '') + ' a blowjob', handler: (st4: GameState) => {
                  qspCall(st4, 'arousal', 'bj', 1, 'no_orgasm_msg', (st4.sex_ev ?? {})['prostitution_flag']);
                  const sc3 = new SceneBuilder();
                  sc3.img('images/shared/sex/blowjob/bj47.mp4');
                  sc3.text('"Let me make it up to you," you smile, throwing back the covers and wrapping your lips around his morning wood.');
                  qspCall(st4, 'sex_ev_wakeup', 'bj_wake');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
            { label: 'Oops, forgot', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"Oops," you say. "Forgot I fell asleep last night with your cum on my face."');
              sc2.text('"Ugh! How do you forget something like that?"');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              sc2.actions([
                { label: 'Give ' + String(st3.npcdesc ?? '') + ' a blowjob', handler: (st4: GameState) => {
                  qspCall(st4, 'arousal', 'bj', 1, 'no_orgasm_msg', (st4.sex_ev ?? {})['prostitution_flag']);
                  const sc3 = new SceneBuilder();
                  sc3.img('images/shared/sex/blowjob/bj47.mp4');
                  sc3.text('"Let me make it up to you," you smile, throwing back the covers and wrapping your lips around his morning wood.');
                  qspCall(st4, 'sex_ev_wakeup', 'bj_wake');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
        } else {
          sc.text('"Morning," he smiles back.');
          qspCall(st2, 'sex_ev_morning', 'morning_menu1');
          sc.actions([
            { label: 'Give ' + String(st2.npcdesc ?? '') + ' a blowjob', handler: (st3: GameState) => {
              qspCall(st3, 'arousal', 'bj', 1, 'no_orgasm_msg', (st3.sex_ev ?? {})['prostitution_flag']);
              const sc2 = new SceneBuilder();
              sc2.img('images/shared/sex/blowjob/bj47.mp4');
              sc2.text('You break the kiss from ' + String(st3.npcdesc ?? '') + '\'s lips and start trailing them down his neck and then his chest and then his stomach and soon you have your lips wrapped around his morning wood.');
              qspCall(st3, 'sex_ev_wakeup', 'bj_wake');
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
        }
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}

function enterBjWake(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  (st.sex_ev ?? {})['boy_asleep'] = 0;
  qspCall(s, 'arousal', 'bj', 1, 'no_orgasm_msg', (st.sex_ev ?? {})['prostitution_flag']);
  if ((st.npc_end_free_time ?? 0) <= st.hour + 2) {
    (st.sex_ev ?? {})['npc_late_work'] = 1;
    scene.text('"Nngh," he grunts as you start sucking his cock. "I\'m gonna be late for work..."');
    scene.actions([
      { label: 'Too bad (stop)', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        sc.img('images/shared/sex/blowjob/bj48.mp4');
        sc.text('You give ' + String(st2.npcdesc ?? '') + ' one more good suck before you withdraw your lips.');
        sc.text('"Too bad," you smirk, teasing his cock with your hand while you savour his taste. "Guess it\'ll have to wait until later."');
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
      { label: 'I\'ll be fast', handler: (st2: GameState) => {
        (st2.sex_ev ?? {})['morning_fuck'] = 1;
        const sev = st2.sex_ev ?? {};
        if (sev['cum_count'] >= 5 + (sev['extra_cum'] ?? 0)) {
          sev['extra_cum'] = (sev['extra_cum'] ?? 0) + 5;
        }
        const sc = new SceneBuilder();
        sc.img('images/shared/sex/blowjob/bj48.mp4');
        sc.text('You give ' + String(st2.npcdesc ?? '') + ' one more good suck before you withdraw your lips to speak.');
        sc.text('"Don\'t worry," you say, working his cock with your hand as a smirk spreads across your lips. "I\'ll be fast."');
        sc.text('And you wrap your lips back around his shaft.');
        qspCall(st2, 'sex_ev_sex', 'session_reset');
        sc.actions([
          { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
        ]);
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  } else {
    scene.actions([
      { label: 'Stop', handler: (st2: GameState) => {
        qspCall(st2, 'npc_relationship', 'modify', st2.npcID, 'dislike');
        const sc = new SceneBuilder();
        sc.img('images/shared/sex/blowjob/bj48.mp4');
        sc.text('You pull away, working his cock with your hand.');
        sc.text('"Just making sure you\'re fully awake," you grin, letting go with one more teasing jerk.');
        sc.text('"Ungh, you teasing bitch," he grumbles.');
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
    if ((st.npc_fav_pos ?? {})[String(st.npcID ?? 0)] === 'blowjob' || rand(1, 10) < (st.npc_sexdrive ?? {})[String(st.npcID ?? 0)] || (st.sex_ev ?? {})['boy_asleep'] === 0) {
      scene.text('"Nngh... that feels great..." he moans sleepily.');
      scene.actions([
        { label: 'Want me to keep going?', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.img('images/shared/sex/blowjob/bj48.mp4');
          sc.text('"Want me to keep going?" you ask pulling your lips away with a teasing pop.');
          sc.text('"Fuck yes," he groans and you get back to work.');
          qspCall(st2, 'sex_ev_sex', 'session_reset');
          sc.actions([
            { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
          ]);
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
        { label: 'Keep sucking', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.text('"Mmmm," you hum around the cock in your mouth, sending shivers through his body that you can feel between your lips. You never stop sucking.');
          qspCall(st2, 'sex_ev_sex', 'session_reset');
          sc.actions([
            { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
          ]);
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
      ]);
    } else {
      scene.text('"Nngh... Hey... what are you doing...?" he groans sleepily.');
      scene.actions([
        { label: 'Best wakeup in the world', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.img('images/shared/sex/blowjob/bj48.mp4');
          sc.text('"Just giving you the best wakeup call in the world," you grin pulling your lips away with a teasing pop. "Want me to stop?"');
          sc.text('"Fuck no," he groans and you get back to work.');
          qspCall(st2, 'sex_ev_sex', 'session_reset');
          sc.actions([
            { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
          ]);
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
        { label: 'Guess', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.img('images/shared/sex/blowjob/play1.mp4');
          sc.text('"Nngh... Hey... what are you doing...?" he groans sleepily.');
          sc.text('You pull your lips away with a pop and stare ' + String(st2.npcdesc ?? '') + ' straight in the eye.');
          sc.nl();
          sc.text('"Guess."');
          sc.nl();
          sc.text('Without waiting for a response you resume running your tongue up and down his shaft and peppering it with kisses before swallowing it whole again.');
          qspCall(st2, 'sex_ev_sex', 'session_reset');
          sc.actions([
            { label: 'Continue', goto: ['sex_ev_foreplay', 'bj_dom2'] },
          ]);
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
      ]);
    }
  }
  scene.build();
}

function enterAfterSleepfuckWake(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.sex_ev ?? {})['sleep_fuck'] === 2) {
    scene.actions([
      { label: 'Nice night', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        sc.img('images/shared/sex/after/pillow_talk4.jpg');
        sc.text('"That was nice," you smile sleepily at ' + String(st2.npcdesc ?? '') + '. "Our little mid-night romp I mean. Slept like a baby after. How about you?"');
        if ((st2.npc_humor ?? {})[String(st2.npcID ?? 0)] === 'intellectual') {
          sc.text('"I would say that fucking you always puts me to sleep, but that feels like sending the wrong message," he smiles back.');
        } else {
          sc.text('"I sleep better after a good fuck too," he grins.');
        }
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}


function enterCumshotWakeup1(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.img('images/shared/sex/sleep/cumshot_wake1.mp4');
  scene.text('You gasp as you are suddenly awakened by the shock of something wet spattering across your face. Your eyes flutter open just in time to see another spurt of cum exit ' + String(st.npcdesc ?? '') + '\'s cock and hit you square in the face.');
  scene.actions([
    { label: 'What the fuck!', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/sleep/cumshot_wake2.mp4');
      sc.text('"What the fuck are you doing?!" you exclaim, sputtering as strands of semen dribble last your lips.');
      sc.text('"You were so hot lying there," ' + String(st2.npcdesc ?? '') + ' snickers, a lewd grin smeared across his face. "I got hard just looking at you."');
      sc.text('"So you thought it would be a good idea to cum on my face?!"');
      sc.text('"Come on, don\'t be like that. Here, clean me off. Get the rest out." He lowers his cock, pushing it towards your lips.');
      qspCall(st2, 'sex_ev_wakeup', 'cumshot_wakeup_clean1');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
    { label: 'Take it in stride', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/sleep/cumshot_wake2.mp4');
      sc.text('You sputter briefly as some of the salty sperm slips past your lips, but can\'t help but feel amusement when you see the lewd satisfaction on ' + String(st2.npcdesc ?? '') + '\'s face.');
      sc.actions([
        { label: 'Guess that means no morning BJ', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"Guess that means it\'s too late for a morning blowjob," you snicker.');
          sc2.text('"No it\'s not," he grins back and pushes his cock towards your lips.');
          qspCall(st3, 'sex_ev_wakeup', 'cumshot_wakeup_clean2');
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
        { label: 'At least I haven\'t put on makeup', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"At least I haven\'t put on my makeup yet," you giggle.');
          sc2.text('"Clean me off too," he insists, pushing his cock towards your lips.');
          qspCall(st3, 'sex_ev_wakeup', 'cumshot_wakeup_clean2');
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  if ((st.npc_cumshot_wake ?? {})[String(st.npcID ?? 0)] > 0) {
    scene.actions([
      { label: 'Again?! (annoyed)', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        sc.img('images/shared/sex/sleep/cumshot_wake2.mp4');
        sc.text('"Ugh, again?!" you moan, allowing the salty sperm to slip into your mouth.');
        sc.text('"You know you love it. Come here, clean me off," he says, pushing his cock towards your lips.');
        qspCall(st2, 'sex_ev_wakeup', 'cumshot_wakeup_clean1');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  (st.npc_cumshot_wake ?? {})[String(st.npcID ?? 0)] = ((st.npc_cumshot_wake ?? {})[String(st.npcID ?? 0)] ?? 0) + 1;
  scene.build();
}

function enterCumshotWakeupClean1(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.actions([
    { label: 'No way', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      (st2.sex_ev ?? {})['bed_room'];
      sc.text('"Ugh!" you grimace, turning your head away from the offending cock. "No way. I\'m not giving you a blowjob as a reward for being a pervert."');
      qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
    { label: 'Acquiesce', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/sleep/cumshot_wake3.mp4');
      qspCall(st2, 'arousal', 'bj', 1, 'sub');
      qspCall(st2, 'cum_call', 'mouth_swallow', st2.npcID, 1, 0, 5);
      sc.text('Before you can make any more protest, ' + String(st2.npcdesc ?? '') + '\'s cock pushes into your mouth. Your eyes accuse him of being a jerk but your lips suck obediently, drawing the last drops of cum from his shaft.');
      qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      qspCall(st2, 'sex_ev_wakeup', 'cumshot_wakeup_bj');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterCumshotWakeupClean2(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.actions([
    { label: 'No way', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      (st2.sex_ev ?? {})['bed_room'];
      sc.text('"Nuh uh!" you giggle, turning your head away from his tip. "One face shot is all you get No double dipping."');
      qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
    { label: 'Acquiesce', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/sleep/cumshot_wake3.mp4');
      qspCall(st2, 'arousal', 'bj', 1, 'sub');
      qspCall(st2, 'cum_call', 'mouth_swallow', st2.npcID, 1, 0, 5);
      sc.text('"Oh fiiiine," you say, mock frowning as ' + String(st2.npcdesc ?? '') + '\'s cock pushes past your lips and you subserviently suck out the last drops of cum from it.');
      qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      qspCall(st2, 'sex_ev_wakeup', 'cumshot_wakeup_bj');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterCumshotWakeupBj(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Keep sucking', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.text('Unable to help yourself, you keep sucking his cock. What started to soften immediately stiffens up again and you know you\'ve just started another round...');
      qspCall(st2, 'sex_ev_sex', 'session_reset');
      sc.actions([
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_dom2'] },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterWakeupFondling(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  qspCall(s, 'arousal', 'foreplay', -rand(5, 10), 'no_orgasm_msg', (st.sex_ev ?? {})['prostitution_flag']);
  scene.img('images/shared/sex/sleep/fondle1.jpg');
  scene.text('You stir as you feel a hands roaming your body. One passes over your breasts, squeezing them on the way down to your stomach. The other is already snaking its way between your legs. Something stiff and warm is poking into your lower back.');
  scene.actions([
    { label: '"Good morning"', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.text('"Mmmmm..." you hum, smiling to yourself as his fingers find your pussy. "Good morning to you too, mister."');
      if ((st2.npc_fav_body_part ?? {})[String(st2.npcID ?? 0)] === 'tits') {
        sc.text('"Sorry, couldn\'t help myself," he murmurs, reaching up to grope your breasts again. "Your tits just feel so good."');
      } else {
        sc.text('"Sorry, couldn\'t help myself," he murmurs.');
      }
      sc.actions([
        { label: 'Time to get up anyways', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          (st3.sex_ev ?? {})['bed_room'];
          sc2.text('"I don\'t mind," you reply. "It was about time to get up anyways."');
          qspCall(st3, 'sex_ev_morning', 'morning_menu1');
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
        { label: 'Have wakeup sex', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.text('"So did you just want to cop a feel or were you interested in something else?" you reply, grinding back and forth between his hard-on and his fingers.');
          qspCall(st3, 'sex_ev_sex', 'session_reset');
          qspCall(st3, 'sex_ev_foreplay', 'foreplay_choose');
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}


function enterForgotBcPill(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if (st.pilldaychk < st.daystart - 1 && (st.birth_control ?? {})['using_bc'] > 0) {
    scene.actions([
      { label: 'Forgot your birth control', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        (st2 as any).temp_loc = 'sex_ev_morning';
        (st2.sex_ev ?? {})['forgot_bc'] = 1;
        if ((st2.npc_earlyriser ?? {})[String(st2.npcID ?? 0)] !== 1) {
          sc.img('images/shared/sex/after/wakeup_shock1.mp4');
          sc.text('You bolt upright as a horrible realization jolts through your mind.');
        } else {
          sc.img('images/shared/sex/after/wakeup1.jpg');
          sc.text('You jolt awake as a horrible realization jumps through your mind.');
        }
        sc.nl();
        sc.text('<i>I forgot to take my birth control!</i>');
        sc.actions([
          { label: 'Panic', handler: (st3: GameState) => {
            const sc2 = new SceneBuilder();
            sc2.img('images/shared/sex/after/wakeup_shock2.mp4');
            sc2.text('Panic begins to set in as you sit up, your breathing already at the edge of hyperventilation.');
            sc2.nl();
            const sev = st3.sex_ev ?? {};
            if (sev['creampie_count'] > 3) {
              sc2.text('Not only did you forget your birth control, but ' + String(st3.npcdesc ?? '') + ' came inside you last night too. <i>A lot.</i> How could you fuck up like this?');
            } else if (sev['creampie_count'] > 0) {
              sc2.text('Not only did you forget your birth control, but ' + String(st3.npcdesc ?? '') + ' came inside you last night too. How could you fuck up like this?');
            } else {
              if ((st3.pharmacy_timers ?? {})['birth_control'] > 0) {
                sc2.text(String(st3.npcdesc ?? '') + ' didn\'t come inside you yesterday, but this breaks your streak. Aunt Luda said you need to take it every day or it won\'t work. So if you take it now, does that mean you\'re still not safe?');
              } else {
                sc2.text(String(st3.npcdesc ?? '') + ' didn\'t come inside you yesterday, but this breaks your streak. Are you still safe if you skip a day?');
              }
            }
            if ((st3.mc_inventory ?? {})['morning_after_pill'] > 0) {
              sc2.nl();
              if ((st3.LudaQW ?? {})['free_condoms'] === 1 && (st3.LudaQW ?? {})['luda_ma_pill'] === 0) {
                sc2.text('Wait, don\'t you have that morning after pill Aunt Luda gave you?');
              } else {
                sc2.text('Wait, don\'t you have a morning after pill in your bag?');
              }
            }
            qspGoto(st3, 'sex_ev_wakeup', 'forgot_bc_pill2');
            (st3 as any).scene = sc2.build();
            (st3 as any).navigationVersion++;
          } },
          { label: 'Calm down', handler: (st3: GameState) => {
            const sc2 = new SceneBuilder();
            sc2.img('images/shared/sex/after/wakeup_shock2.mp4');
            sc2.text('You sit up and start taking big deep breaths, forcing yourself to calm down and try to approach the situation logically.');
            const sev = st3.sex_ev ?? {};
            if (sev['creampie_count'] > 0) {
              sc2.actions([
                { label: 'You can take a morning after pill', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  const sev2 = st4.sex_ev ?? {};
                  if (sev2['creampie_count'] > 5) {
                    sc3.text('Okay, so ' + String(st4.npcdesc ?? '') + ' came inside you last night... <i>A lot.</i> But you can still take a morning after pill. Maybe it\'ll be okay.');
                  } else if (sev2['creampie_count'] > 1) {
                    sc3.text('Okay, so ' + String(st4.npcdesc ?? '') + ' came inside you last night... More than once... A <i>few</i> times. But you can still take a morning after pill. Maybe it\'ll be okay.');
                  } else if (sev2['creampie_count'] === 1) {
                    sc3.text('Okay, so ' + String(st4.npcdesc ?? '') + ' came inside you last night... But only once. That\'s not too bad, right? Maybe you can still take a morning after pill. Maybe it\'ll be okay.');
                  }
                  if ((st4.mc_inventory ?? {})['morning_after_pill'] > 0) {
                    sc3.nl();
                    if ((st4.LudaQW ?? {})['free_condoms'] === 1 && (st4.LudaQW ?? {})['luda_ma_pill'] === 0) {
                      sc3.text('Actually, you have the one Aunt Luda gave you. For emergencies she said...');
                    } else {
                      sc3.text('Actually, you have one in your bag. You could take it right now.');
                    }
                  }
                  qspGoto(st4, 'sex_ev_wakeup', 'forgot_bc_pill2');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            } else {
              if (sev['no_condom'] === 0) {
                (st3.sex_ev ?? {})['forgot_bc_act'] = 'You used condoms';
              } else {
                (st3.sex_ev ?? {})['forgot_bc_act'] = String(st3.npcdesc ?? '') + ' didn\'t come inside you';
              }
              sc2.actions([
                { label: String((st3.sex_ev ?? {})['forgot_bc_act'] ?? ''), handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  if ((st4.pharmacy_timers ?? {})['birth_control'] > 0) {
                    sc3.text(String(st4.npcdesc ?? '') + ' didn\'t come inside you yesterday, so you\'re not in any real danger of getting pregnant right this second.' + ((st4.sex_ev ?? {})['no_condom'] === 0 ? ' Besides, you used condoms.' : ' ') + 'But this breaks your streak. Aunt Luda said you need to take it every day or it won\'t work. So if you take it now, does that mean you\'re still not safe?');
                  } else {
                    sc3.text(String(st4.npcdesc ?? '') + ' didn\'t come inside you yesterday, so you\'re not in any real danger of getting pregnant right this second.' + ((st4.sex_ev ?? {})['no_condom'] === 0 ? ' Besides, you used condoms.' : ' ') + 'But does this mean you\'ll need to wait a few days to build up the birth control in your system again? If you take your next pill now, does that mean you\'re still not safe?');
                  }
                  qspGoto(st4, 'sex_ev_wakeup', 'forgot_bc_pill2');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            }
            if ((st3.stat ?? {})['preg_risk'] !== 'danger') {
              sc2.actions([
                { label: 'You\'re not fertile right now', handler: (st4: GameState) => {
                  const sc3 = new SceneBuilder();
                  const sev2 = st4.sex_ev ?? {};
                  if (sev2['creampie_count'] > 0) {
                    if (sev2['creampie_count'] > 5) {
                      sc3.text('Okay, so ' + String(st4.npcdesc ?? '') + ' came inside you last night... <i>A lot.</i> But it\'s not the fertile stage of your cycle. You should be fine, right?');
                    } else if (sev2['creampie_count'] > 1) {
                      sc3.text('Okay, so ' + String(st4.npcdesc ?? '') + ' came inside you last night... More than once... A <i>few</i> times. But it\'s not the fertile stage of your cycle. You should be fine, right?');
                    } else if (sev2['creampie_count'] === 1) {
                      sc3.text('Okay, so ' + String(st4.npcdesc ?? '') + ' came inside you last night... But only once. And it\'s not the fertile stage of your cycle. You should be fine, right?');
                    }
                  } else {
                    if ((st4.pharmacy_timers ?? {})['birth_control'] > 0) {
                      sc3.text(String(st4.npcdesc ?? '') + ' didn\'t come inside you yesterday, so you\'re not in any real danger of getting pregnant right this second. But this breaks your streak. Aunt Luda said you need to take it every day or it won\'t work. So if you take it now, does that mean you\'re still not safe?');
                    } else {
                      sc3.text(String(st4.npcdesc ?? '') + ' didn\'t come inside you yesterday, so you\'re not in any real danger of getting pregnant right this second. But does this mean you\'ll need to wait a few days to build up the birth control in your system again? If you take your next pill now, does that mean you\'re still not safe?');
                    }
                  }
                  qspGoto(st4, 'sex_ev_wakeup', 'forgot_bc_pill2');
                  (st4 as any).scene = sc3.build();
                  (st4 as any).navigationVersion++;
                } },
              ]);
            }
            (st3 as any).scene = sc2.build();
            (st3 as any).navigationVersion++;
          } },
        ]);
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}

function enterForgotBcPill2(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.actions([
    { label: 'Continue', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      (st2.sex_ev ?? {})['bed_room'];
      if ((st2.npc_earlyriser ?? {})[String(st2.npcID ?? 0)] === 1) {
        qspCall(st2, 'sex_ev_morning', 'npc_morning_shower_desc');
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      } else if ((st2.npc_latesleeper ?? {})[String(st2.npcID ?? 0)] === 1) {
        sc.text(String(st2.npcdesc ?? '') + ' is still asleep next to you snoring softly, completely ignorant to the situation.');
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      } else {
        sc.text(String(st2.npcdesc ?? '') + ' stirs next to you.');
        if ((st2.npc_selfish ?? {})[String(st2.npcID ?? 0)] !== 1 && (st2.npc_abusive ?? {})[String(st2.npcID ?? 0)] !== 1 && rand(1, 3) === 3) {
          sc.text('"Hey." He yawns, glancing over at you before blinking, a look of concern on his face. "What\'s up? Something wrong?"');
          sc.actions([
            { label: 'Don\'t tell him', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"It\'s nothing," you mumble, flashing a smile to pretend like everything is fine.');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
            { label: 'Tell him', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"I forgot my birth control yesterday," you sigh. "I fucked up. I\'m sorry."');
              qspCall(st3, 'sex_ev_talk', 'forgot_bc_talk');
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
          if ((st2.mc_inventory ?? {})['morning_after_pill'] > 0) {
            sc.actions([
              { label: 'Take your morning after pill', handler: (st3: GameState) => {
                qspCall(st3, 'medical_din', 'morning_after_pill_function');
                const sc2 = new SceneBuilder();
                sc2.text('"I forgot my birth control yesterday," you sigh, opening the packaging on your plan B and popping it into your mouth. "Don\'t worry, I\'m taking a morning after pill right now. I\'m just mad at myself for being so stupid."');
                qspCall(st3, 'sex_ev_morning', 'morning_menu1');
                (st3 as any).scene = sc2.build();
                (st3 as any).navigationVersion++;
              } },
            ]);
          }
        } else {
          sc.text('"Hey," he stretches, looking over at you. "You just wake up too?"');
          sc.actions([
            { label: 'Yeah', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.text('"Yeah," you mumble, trying to keep a straight face while you shove down your shameful feelings.');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
        }
      }
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterStopHookingUp(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.sex_ev ?? {})['type'] === 'hookup') {
    if ((st as any).something_or_other === 1) {
    } else {
      if ((st.stat ?? {})['hangover'] === 1) {
        scene.actions([
          { label: 'Another drunken hookup', handler: (st2: GameState) => {
            (st2 as any).scene = new SceneBuilder().build();
            (st2 as any).navigationVersion++;
          } },
        ]);
      } else {
        scene.actions([
          { label: 'Another random hookup', handler: (st2: GameState) => {
            (st2 as any).scene = new SceneBuilder().build();
            (st2 as any).navigationVersion++;
          } },
        ]);
      }
    }
  }
  scene.build();
}

function enterFuckedEx(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.npc_rel_type ?? {})[String(st.npcID ?? 0)] === 'ex_boyfriend') {
    scene.actions([
      { label: 'Ugh, I fucked him again', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        sc.text('<i>Shit,</i> you sigh internally. <i>I said I was going to stop sleeping with him...</i>');
        sc.text('<i>Shit,</i> you sigh internally. <i>I can\'t believe I fucked him again...</i>');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}

function enterCheatNoGuiltStart(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if (st.pcs_lovers + st.pcs_girlfriends > 0) {
    const loverArr = st.pcs_lover_arr ?? [];
    const pos = loverArr.indexOf(String(st.npcID ?? 0));
    if (pos === -1) {
      if ((st.stat ?? {})['boyfriends_current'] > 0) {
        scene.actions([
          { label: 'Your boyfriend (no guilt)', handler: (st2: GameState) => {
            (st2.sex_ev ?? {})['cheat'] = 'boyfriend';
            qspCall(st2, 'sex_ev_wakeup', 'cheat_no_guilt1');
          } },
        ]);
      }
      if (st.pcs_girlfriends > 0) {
        scene.actions([
          { label: 'Your girlfriend (no guilt)', handler: (st2: GameState) => {
            (st2.sex_ev ?? {})['cheat'] = 'girlfriend';
            qspCall(st2, 'sex_ev_wakeup', 'cheat_no_guilt1');
          } },
        ]);
      }
    }
  }
  scene.build();
}

function enterCheatNoGuilt1(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  const cheat = (st.sex_ev ?? {})['cheat'] ?? '';
  scene.text('Thoughts of your ' + String(cheat) + ' cross your mind.');
  scene.actions([
    { label: 'Oops', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.text('<i>Oops,</i> you think. <i>I think I just cheated on my ' + String((st2.sex_ev ?? {})['cheat'] ?? '') + '.</i>');
      sc.text('The realization brings with it no guilt, to you this moment just as much of an oopsie as dropping a pencil.');
      sc.actions([
        { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
      ]);
      qspCall(st2, 'sex_ev_wakeup', 'kiss_wake');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  if ((st.lover_stat ?? {})['fighting_flag'] === 1) {
    scene.actions([
      { label: 'Serves them right', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        const cheat2 = (st2.sex_ev ?? {})['cheat'] ?? '';
        sc.text('<i>Serves </i>' + (cheat2 === 'boyfriend' ? '<i>him</i>' : '<i>her</i>') + '<i>right,</i> you think, taking a perverse satisfaction in cheating on ' + (cheat2 === 'boyfriend' ? 'him' : 'her') + ' after your recent fight.');
        sc.actions([
          { label: '<i>Yawn</i>', goto: ['sex_ev_wakeup', 'yawn_wake'] },
        ]);
        qspCall(st2, 'sex_ev_wakeup', 'kiss_wake');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}


function enterGuiltInit(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.sex_ev ?? {})['guilt_check'] === 0) {
    (st.sex_ev ?? {})['guilt_check'] = 1;
    if (st.pcs_lover + st.pcs_girlfriends > 0) {
      (st.sex_ev ?? {})['guilt_count'] = ((st.sex_ev ?? {})['guilt_count'] ?? 0) + 1;
    }
    if ((st.sex_ev ?? {})['buy_virginity'] > 0 && (st.sex_ev ?? {})['fuck_count'] > 0) {
      (st.sex_ev ?? {})['guilt_count'] = ((st.sex_ev ?? {})['guilt_count'] ?? 0) + 1;
    }
  }
  scene.build();
}

function enterGuiltStart(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.sex_ev ?? {})['guilt_check'] === 0) {
    qspCall(s, 'sex_ev_wakeup', 'guilt_init');
  }
  if ((st.sex_ev ?? {})['guilt_count'] > 0) {
    scene.actions([
      { label: 'Guilt', handler: (st2: GameState) => {
        const sc = new SceneBuilder();
        (st2.sex_ev ?? {})['guilt'] = 1;
        if ((st2.npc_earlyriser ?? {})[String(st2.npcID ?? 0)] !== 1) {
          sc.img('images/shared/sex/after/wakeup_shock1.mp4');
          sc.text('You bolt upright as a lance of guilt pierces your chest.');
        } else {
          sc.img('images/shared/sex/after/wakeup1.jpg');
          sc.text('You jolt awake as a lance of guilt pierces your chest.');
        }
        if (st2.npcID !== 'one_of_svetas_lovers') {
          if ((st2.stat ?? {})['boyfriends_current'] > 0) {
            sc.actions([
              { label: 'Your boyfriend', handler: (st3: GameState) => {
                (st3.sex_ev ?? {})['cheat'] = 'boyfriend';
                qspCall(st3, 'sex_ev_wakeup', 'cheat_guilt1');
              } },
            ]);
          }
          if (st2.pcs_girlfriends > 0) {
            sc.actions([
              { label: 'Your girlfriend', handler: (st3: GameState) => {
                (st3.sex_ev ?? {})['cheat'] = 'girlfriend';
                qspCall(st3, 'sex_ev_wakeup', 'cheat_guilt1');
              } },
            ]);
          }
          if ((st2.juliaQW ?? {})['date'] === 1) {
            sc.actions([
              { label: 'Julia', handler: (st3: GameState) => {
                (st3.sex_ev ?? {})['cheat'] = 'Julia';
                qspCall(st3, 'sex_ev_wakeup', 'cheat_guilt1');
              } },
            ]);
          }
        }
        qspCall(st2, 'sex_ev_wakeup', 'guilt_prostitution1');
        (st2 as any).scene = sc.build();
        (st2 as any).navigationVersion++;
      } },
    ]);
  }
  scene.build();
}

function enterGuiltActRecount(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  const sev = st.sex_ev ?? {};
  if (sev['bj'] > 0) {
    scene.text('<i>Sucking his cock...</i>');
  }
  if (sev['cum_choice'] === 'face') {
    scene.text('<i>How he came on your face...</i>');
  }
  if (sev['cum_choice'] === 'mouth') {
    scene.text(sev['swallow'] === 1 ? '<i>When you swallowed his cum...</i>' : '<i>When he came in your mouth...</i>');
  }
  if (sev['fuck'] > 0) {
    if (sev['virgin'] === 1) {
      scene.text('<i>You gave him your virginity...</i>');
    } else if (sev['loc'] === 'npc_home') {
      scene.text('<i>Fucking him on his bed...</i>');
    } else if (sev['loc'] === 'pc_home') {
      scene.text('<i>Fucking him in your bed...</i>');
    } else if (sev['loc'] === 'hotel_room') {
      scene.text('<i>Fucking him in this hotel room...</i>');
    }
    if (sev['prostitution_flag'] !== 'prostitution') {
      if (sev['paid_no_condom'] === 1) {
        scene.text('You let him talk you into doing it without a condom...!');
      }
      if (sev['paid_free_creampies'] === 1) {
        scene.text('You even let him come inside you...!');
      }
    } else {
      if (sev['out_of_condoms'] === 1 && sev['condom_count'] > 3) {
        scene.text('<i>You did it so many times you ran out of condoms...</i>');
      } else if (sev['no_condom'] === 1) {
        scene.text('<i>You let him do it without a condom...</i>');
      }
    }
  }
  if (sev['creampie_orgasm'] === 1) {
    scene.text('<i>You came together, orgasming as he filled you with his cum...</i>');
  } else if (sev['creampie_orgasm'] >= 3) {
    scene.text('<i>How many times did you come together? How many orgasms came as he filled you with his cum...?</i>');
  } else if (sev['simultaneous_orgasm_count'] === 1) {
    scene.text('<i>You had a simultaneous orgasm...</i>');
  } else if (sev['simultaneous_orgasm_count'] >= 3 && sev['no_condom'] !== 1) {
    scene.text('<i>How many times did you come together? How many orgasms came as he filled the condom inside you...?</i>');
  } else {
    if (sev['orgasm_count'] > 2) {
      scene.text('<i>He made you come so many times...</i>');
    } else if (sev['orgasm_count'] > 0) {
      scene.text('<i>How he made you come...</i>');
    }
    if (sev['creampie_count'] > 3) {
      scene.text('<i>The multiple loads of cum pumped into your pussy...</i>');
    } else if (sev['creampie_count'] > 0) {
      scene.text('<i>When he came inside you...</i>');
    }
  }
  if ((st.birth_control ?? {})['using_bc'] === 0 && (st.birth_control ?? {})['think_safe'] === 0 && sev['no_condom'] !== 1) {
    if (st.pillcon2 > 0) {
      scene.text('<i>And you stopped using birth control...</i>');
    } else {
      scene.text('<i>You\'re not even on birth control...</i>');
    }
  }
  scene.build();
}

function enterCheatGuilt1(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  const cheat = (st.sex_ev ?? {})['cheat'] ?? '';
  if (cheat === 'boyfriend' || cheat === 'girlfriend') {
    scene.text('<i>My ' + String(cheat) + '...</i> you think.');
  } else {
    scene.text('<i>' + String(cheat) + '...</i> you think.');
  }
  scene.actions([
    { label: 'Wallow', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      const cheat2 = (st2.sex_ev ?? {})['cheat'] ?? '';
      if ((st2.stat ?? {})['bf_cheated_on'] <= 10) {
        sc.img('images/shared/sex/after/wakeup_shock2.mp4');
        sc.text('You sit up and throw your legs over the edge of the bed, hands at your sides, taking deep guilty breaths as your heart pounds inside your chest.');
        sc.nl();
        if (cheat2 === 'boyfriend' || cheat2 === 'girlfriend') {
          sc.text('<i>I just cheated on my ' + String(cheat2) + '...</i>');
        } else {
          sc.text('<i>I just cheated on ' + String(cheat2) + '...</i> you think.');
        }
        sc.nl();
        sc.text('Your thoughts wander through your night with ' + String(st2.npcdesc ?? '') + '...');
        sc.nl();
        qspCall(st2, 'sex_ev_wakeup', 'guilt_act_recount');
        if ((st2.sex_ev ?? {})['prostitution_flag'] === 'prostitution') {
          sc.nl();
          sc.text('<i>And what for? Money...?</i>');
        }
        sc.nl();
        sc.text('You feel sick to your stomach...');
      } else {
        sc.img('images/shared/sex/after/wakeup_shock2.mp4');
        sc.text('You sit up, throwing your legs over the side of the bed as the shame flows through you.');
        sc.text('It\'s nothing you haven\'t felt before. This isn\'t the first time you\'ve cheated. It\'s not the second time. It\'s not even the tenth time. You\'ve lost count by now. But somehow, the crippling guilt always feels the same.');
      }
      qspCall(st2, 'sex_ev_wakeup', 'cheat_guilt_excuses');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterCheatGuiltExcuses(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  const cheat = (st.sex_ev ?? {})['cheat'] ?? '';
  scene.actions([
    { label: 'It\'s not your fault', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/after/wakeup_shock2.mp4');
      if (cheat === 'Julia' || cheat === 'girlfriend') {
        sc.text('<i>It\'s not my fault,</i> you try to rationalize. <i>I have needs. Sexual needs. Strap-ons and dildos and fingering aren\'t enough for me. My body wants dick. <b>He</b> preyed on that. <b>He</b> seduced me. I\'m a victim here...</i>');
      } else {
        sc.text('<i>It\'s not my fault,</i> you try to rationalize. <i>I have needs. Sexual needs. He preyed on that. He seduced me. I\'m a victim here...</i>');
      }
      sc.nl();
      sc.text('All your excuses ring hollow in your ears.');
      qspCall(st2, 'sex_ev_wakeup', 'cheat_guilt2');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
    { label: 'It\'s just sex', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/after/wakeup_shock2.mp4');
      if (cheat === 'Julia') {
        sc.text('<i>It\'s just sex,</i> you try to rationalize. <i>It\'s not like I\'m falling in love with ' + String(st2.npcdesc ?? '') + ' or anything. I just really needed some cock, which ' + String((st2.sex_ev ?? {})['cheat'] ?? '') + ' obviously doesn\'t have. Strap-ons and dildos aren\'t the same. It\'s not cheating. It\'s just sex.</i>.');
      } else if (cheat === 'girlfriend') {
        sc.text('<i>It\'s just sex,</i> you try to rationalize. <i>It\'s not like I\'m falling in love with ' + String(st2.npcdesc ?? '') + ' or anything. I just really needed some cock, which my girlfriend obviously doesn\'t have. Strap-ons and dildos aren\'t the same. It\'s not cheating. It\'s just sex.</i>.');
      } else {
        sc.text('<i>It\'s just sex,</i> you try to rationalize. <i>It\'s not like I\'m falling in love with ' + String(st2.npcdesc ?? '') + ' or anything. It\'s not cheating. It\'s just sex.</i>.');
      }
      sc.text('<i>It\'s just sex...</i>');
      sc.nl();
      sc.text('Only you can decide whether or not you believe yourself.');
      qspCall(st2, 'sex_ev_wakeup', 'cheat_guilt2');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
    { label: 'You\'re a whore', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/after/wakeup_shock3.mp4');
      sc.text('You scold yourself internally, screaming insults that impale your own soul.');
      sc.nl();
      const fuckbuddyArr = st2.fuckbuddy ?? [];
      if (fuckbuddyArr.length > 5) {
        sc.text('<i>One lover isn\'t enough for you? Not even two? You need to have a whole stable to satisfy you? You filthy cock-hungry whore!</i>');
      } else if (fuckbuddyArr.length > 1) {
        sc.text('<i>You slut! You can\'t keep your legs closed. Just how much cock do you need? You\'re nothing but a filthy whore...</i>');
      } else {
        sc.text('<i>You slut! What\'s wrong with you? A committed relationship isn\'t enough to satisfy you? Can\'t keep your legs closed? You\'re nothing but a filthy whore...</i>');
      }
      sc.nl();
      if ((st2.stat ?? {})['bf_cheated_on'] > 10) {
        sc.text('You breathe deeply, letting the pain take its course, waiting for it to subside. It\'s nothing you haven\'t felt before...');
      }
      sc.actions([
        { label: 'Continue', goto: ['sex_ev_wakeup', 'cheat_guilt3'] },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterCheatGuilt2(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.nl();
  if ((st.stat ?? {})['bf_cheated_on'] <= 10) {
    scene.text('The guilt doesn\'t go away.');
  } else {
    scene.text('You breathe deeply, letting the pain take its course, waiting for it to subside. It\'s nothing you haven\'t felt before...');
  }
  scene.actions([
    { label: 'Continue', goto: ['sex_ev_wakeup', 'cheat_guilt3'] },
  ]);
  scene.build();
}

function enterCheatGuilt3(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  scene.img('images/shared/sex/after/wakeup_shock2.mp4');
  if ((st.npc_earlyriser ?? {})[String(st.npcID ?? 0)] === 1) {
    if ((st.sex_ev ?? {})['loc'] === 'player_home') {
      (st.sex_ev ?? {})['npc_morning_shower'] = 1;
      scene.text('The bed next to you is empty but you can hear water running through the wall. ' + String(st.npcdesc ?? '') + ' must be in the shower.');
    } else {
      qspCall(s, 'sex_ev_morning', 'npc_morning_shower_desc');
    }
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } else if ((st.npc_latesleeper ?? {})[String(st.npcID ?? 0)] === 1) {
    if ((st.sex_ev ?? {})['type'] === 'hookup') {
      scene.text(String(st.npcdesc ?? '') + ', the guy from last night, is still asleep next to you, completely ignorant to your internal strife, snoring softly.');
    } else {
      scene.text(String(st.npcdesc ?? '') + ' is still asleep next to you, completely ignorant to your internal strife, snoring softly.');
    }
    qspCall(s, 'sex_ev_morning', 'morning_menu1');
  } else {
    scene.text(String(st.npcdesc ?? '') + ' stirs next to you.');
    if ((st.npc_selfish ?? {})[String(st.npcID ?? 0)] !== 1 && (st.npc_abusive ?? {})[String(st.npcID ?? 0)] !== 1 && rand(1, 3) === 3) {
      scene.text('"Hey." He yawns, glancing over at you before blinking, a look of concern on his face. "What\'s up? Something wrong?"');
      scene.actions([
        { label: 'It\'s nothing', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.text('"It\'s nothing," you mumble, trying to keep a straight face while you shove down your shameful feelings.');
          qspCall(st2, 'sex_ev_morning', 'morning_menu1');
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
      ]);
    } else {
      scene.text('"Hey," he stretches, looking over at you. "You just wake up too?"');
      scene.actions([
        { label: 'Yeah', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.text('"Yeah," you mumble, trying to keep a straight face while you shove down your shameful feelings.');
          qspCall(st2, 'sex_ev_morning', 'morning_menu1');
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
      ]);
    }
  }
  scene.build();
}


function enterGuiltProstitution1(s: GameState, scene: SceneBuilder): void {
  const st = s as any;
  if ((st.sex_ev ?? {})['buy_virginity'] > 0 && (st.sex_ev ?? {})['fuck_count'] > 0) {
    qspCall(s, 'sex_ev_wakeup', 'guilt_virginity1');
  } else if ((st.sex_ev ?? {})['prostitution'] === 1 && st.NOT_DISABLED === 1) {
    if ((st.stat ?? {})['prostitution_count'] === 0) {
      scene.actions([
        { label: 'You sold yourself', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.nl();
          sc.text('<i>I just whored myself out...</i> you think to yourself.');
          sc.actions([
            { label: 'Sit up', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.img('images/shared/sex/after/wakeup_shock2.mp4');
              sc2.text('You sit up, taking deep breaths as the guilt and shame course through your body as the memories of last night wash over you.');
              sc2.nl();
              sc2.text('<i>I fucked someone for money...</i> you think.');
              sc2.nl();
              sc2.text('You took his money and spread your legs...');
              qspCall(st3, 'sex_ev_wakeup', 'guilt_act_recount');
              sc2.nl();
              sc2.text('Something so important and you just gave it away...');
              sc2.nl();
              sc2.text('For what? Money...?');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
      ]);
    } else {
      scene.actions([
        { label: 'You sold yourself again', handler: (st2: GameState) => {
          const sc = new SceneBuilder();
          sc.nl();
          sc.text('<i>I just whored myself out...</i> you think to yourself. <i>Again.</i>');
          sc.actions([
            { label: 'Sit up', handler: (st3: GameState) => {
              const sc2 = new SceneBuilder();
              sc2.img('images/shared/sex/after/wakeup_shock2.mp4');
              sc2.text('You sit up, taking deep breaths as the guilt and shame course through your body as the memories of last night wash over you.');
              sc2.nl();
              qspCall(st3, 'sex_ev_wakeup', 'guilt_act_recount');
              sc2.nl();
              sc2.text('For what? So you could earn a few more rubles...?');
              qspCall(st3, 'sex_ev_morning', 'morning_menu1');
              (st3 as any).scene = sc2.build();
              (st3 as any).navigationVersion++;
            } },
          ]);
          (st2 as any).scene = sc.build();
          (st2 as any).navigationVersion++;
        } },
      ]);
    }
  }
  scene.build();
}

function enterGuiltVirginity1(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You sold your virginity', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.nl();
      sc.text('<i>I sold my virginity last night...</i> you think.');
      sc.actions([
        { label: 'Sit up', handler: (st3: GameState) => {
          const sc2 = new SceneBuilder();
          sc2.img('images/shared/sex/after/wakeup_shock2.mp4');
          sc2.text('You sit up, taking deep breaths as the guilt and shame course through you.');
          sc2.nl();
          sc2.text('<i>I sold my virginity to a complete stranger...</i> you think to yourself again.');
          sc2.nl();
          sc2.text('You took his money and spread your legs...');
          if ((st3.sex_ev ?? {})['paid_no_condom'] === 1) {
            sc2.text('You let him talk you into doing it without a condom...!');
          }
          if ((st3.sex_ev ?? {})['paid_free_creampies'] === 1) {
            sc2.text('You even let him come inside you...!');
          }
          sc2.nl();
          sc2.text('Something so important and you just gave it away...');
          sc2.nl();
          sc2.text('For what? Money...?');
          qspCall(st3, 'sex_ev_wakeup', 'guilt_virginity2');
          (st3 as any).scene = sc2.build();
          (st3 as any).navigationVersion++;
        } },
      ]);
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterGuiltVirginity2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Shame', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/after/wakeup_shock3.mp4');
      sc.text('<i>You\'re nothing but a filthy whore...</i>');
      sc.nl();
      sc.text('The moment as you think it, you can\'t escape. Shame fills your entire body and you can barely breathe as the thought buries itself in your heart and you can\'t help but think it over and over and over again.');
      qspCall(st2, 'sex_ev_wakeup', 'guilt_virginity_end');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
    { label: 'Your mother', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/after/wakeup_shock3.mp4');
      sc.text('<i>You <b>filthy</b> whore!</i>');
      sc.nl();
      sc.text('The moment as you think it, you can\'t escape. Shame fills your entire body and you can barely breathe as the image of your mother condemning you buries itself in your heart and you can\'t help but think it over and over and over again.');
      qspCall(st2, 'sex_ev_wakeup', 'guilt_virginity_end');
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
    } },
  ]);
  scene.build();
}

function enterGuiltVirginityEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Continue', handler: (st2: GameState) => {
      const sc = new SceneBuilder();
      sc.img('images/shared/sex/after/wakeup_shock3.mp4');
      if ((st2.npc_earlyriser ?? {})[String(st2.npcID ?? 0)] === 1) {
        if ((st2.sex_ev ?? {})['loc'] === 'player_home') {
          (st2.sex_ev ?? {})['boy_shower'] = 1;
          sc.text('The bed next to you is empty but you can hear water running through the wall. ' + String(st2.npcdesc ?? '') + ' must be in the shower.');
        } else {
          qspCall(st2, 'sex_ev_morning', 'npc_morning_shower_desc');
        }
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      } else if ((st2.npc_latesleeper ?? {})[String(st2.npcID ?? 0)] === 1) {
        if ((st2.sex_ev ?? {})['type'] === 'hookup') {
          sc.text(String(st2.npcdesc ?? '') + ', the guy from last night, is still asleep next to you, completely ignorant to your internal strife, snoring softly.');
        } else {
          sc.text(String(st2.npcdesc ?? '') + ' is still asleep next to you, completely ignorant to your internal strife, snoring softly.');
        }
        qspCall(st2, 'sex_ev_morning', 'morning_menu1');
      } else {
        sc.text('You feel movement in the bed and turn to see ' + String(st2.npcdesc ?? '') + ' stirring next to you.');
        sc.text('"Last night was great," he smiles.');
        sc.actions([
          { label: 'Hide your feelings', handler: (st3: GameState) => {
            const sc2 = new SceneBuilder();
            sc2.nl();
            sc2.text('"Y-yeah," you stammer, trying to keep a straight face while you shove down your shameful feelings.');
            qspCall(st3, 'sex_ev_morning', 'morning_menu1');
            (st3 as any).scene = sc2.build();
            (st3 as any).navigationVersion++;
          } },
          { label: 'Fake smile', handler: (st3: GameState) => {
            const sc2 = new SceneBuilder();
            sc2.nl();
            sc2.text('"Yeah! I had a really good time!" you say, giving him back a bright smile with all of your dark feelings barricaded behind it.');
            qspCall(st3, 'sex_ev_morning', 'morning_menu1');
            (st3 as any).scene = sc2.build();
            (st3 as any).navigationVersion++;
          } },
        ]);
      }
      (st2 as any).scene = sc.build();
      (st2 as any).navigationVersion++;
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
  title: 'Your mind stirs and you slowly come to consciousness. The fi',
  region: 'other',
  enter: enter,
};
