import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
    if (((s as any).vibratorIN ?? 0) === 1) {
      if (((s as any).pcs_horny ?? 0) >= 100) {
        // TODO-QSP: $sleep_events[] = 'gs ''sleep_events'', ''vibr_orgasm'' '
      }
    } else {
      if (((s as any).pcs_horny ?? 0) > 80  &&  ((s as any).pcs_sleep ?? 0) >= 30  &&  (Math.floor(Math.random() * 60) + 0) === 0  &&  ((s as any).succubusQW ?? 0) !== 1  &&  ((s as any).succubusQW ?? 0) !== 2) {
        // TODO-QSP: $sleep_events[] = 'gs ''sleep_events'', ''wake_horny'' '
      }
    }
    if (((s as any).strip_club ?? 0)?.['ivanna_dream'] === 1  &&  (!(Math.floor(Math.random() * 60) + 0))) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_events'', ''ivanna_dream'' '
    }
    if ((((s as any).start_type ?? 0) === 'sg_tg'  &&  (((s as any).year ?? 0) === 2016  &&  (((s as any).month ?? 0) > 8  &&  ((s as any).month ?? 0) < 11))  ||  (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg')  &&  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) < 11))  &&  (!(Math.floor(Math.random() * 9) + 0))) {
      if (((s as any).tgQW ?? 0)?.['dream_sex_anya'] === 0  &&  ((s as any).start_type ?? 0) === 'sg_tg') {
        // TODO-QSP: $tgQWtemp[] = 'dream_sex_anya'
      } else {
        if (((s as any).tgQW ?? 0)?.['dream_sex_vika'] === 0  &&  ((s as any).start_type ?? 0) === 'uni_tg') {
          // TODO-QSP: $tgQWtemp[] = 'dream_sex_vika'
        } else {
          if (((s as any).tgQW ?? 0)?.['dream_sex_albina'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1)) {
            // TODO-QSP: $tgQWtemp[] = 'dream_sex_albina'
          } else {
            if (((s as any).tgQW ?? 0)?.['dream_sex_bella'] === 0  &&  ((s as any).start_type ?? 0) === 'sg_tg') {
              // TODO-QSP: $tgQWtemp[] = 'dream_sex_bella'
            } else {
              if (((s as any).tgQW ?? 0)?.['dream_sex_nush'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1)) {
                // TODO-QSP: $tgQWtemp[] = 'dream_sex_nush'
              } else {
                if (((s as any).tgQW ?? 0)?.['dream_sex_julia'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).nerd_game ?? 0)?.['stage'] >= 1)) {
                  // TODO-QSP: $tgQWtemp[] = 'dream_sex_julia'
                } else {
                  if (((s as any).tgQW ?? 0)?.['dream_sex_katja_vicky'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 1)) {
                    // TODO-QSP: $tgQWtemp[] = 'dream_sex_katja_vicky'
                  }
                }
              }
            }
          }
        }
      }
      if (Object.keys((s as any).tgQWtemp ?? {}).length > 0) {
        // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_events'', ''male_dream'' '
      }
    }
    qspCall(s, 'blackmailer', 'blackmail_sleep_events');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModSleepevents(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 1;
  if (((s as any).sleepVars ?? 0)?.['events_active'] === 1) {
    ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
    if (((s as any).vibratorIN ?? 0) === 1) {
      if (((s as any).pcs_horny ?? 0) >= 100) {
        // TODO-QSP: $sleep_events[] = 'gs ''sleep_events'', ''vibr_orgasm'' '
      }
    } else {
      if (((s as any).pcs_horny ?? 0) > 80  &&  ((s as any).pcs_sleep ?? 0) >= 30  &&  (Math.floor(Math.random() * 60) + 0) === 0  &&  ((s as any).succubusQW ?? 0) !== 1  &&  ((s as any).succubusQW ?? 0) !== 2) {
        // TODO-QSP: $sleep_events[] = 'gs ''sleep_events'', ''wake_horny'' '
      }
    }
    if (((s as any).strip_club ?? 0)?.['ivanna_dream'] === 1  &&  (!(Math.floor(Math.random() * 60) + 0))) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_events'', ''ivanna_dream'' '
    }
    if ((((s as any).start_type ?? 0) === 'sg_tg'  &&  (((s as any).year ?? 0) === 2016  &&  (((s as any).month ?? 0) > 8  &&  ((s as any).month ?? 0) < 11))  ||  (((s as any).start_type ?? 0) === 'city_tg'  ||  ((s as any).start_type ?? 0) === 'uni_tg')  &&  (((s as any).year ?? 0) === 2017  &&  ((s as any).month ?? 0) < 11))  &&  (!(Math.floor(Math.random() * 9) + 0))) {
      if (((s as any).tgQW ?? 0)?.['dream_sex_anya'] === 0  &&  ((s as any).start_type ?? 0) === 'sg_tg') {
        // TODO-QSP: $tgQWtemp[] = 'dream_sex_anya'
      } else {
        if (((s as any).tgQW ?? 0)?.['dream_sex_vika'] === 0  &&  ((s as any).start_type ?? 0) === 'uni_tg') {
          // TODO-QSP: $tgQWtemp[] = 'dream_sex_vika'
        } else {
          if (((s as any).tgQW ?? 0)?.['dream_sex_albina'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).AlbinaQW ?? 0)?.['know_albina_uni'] === 1)) {
            // TODO-QSP: $tgQWtemp[] = 'dream_sex_albina'
          } else {
            if (((s as any).tgQW ?? 0)?.['dream_sex_bella'] === 0  &&  ((s as any).start_type ?? 0) === 'sg_tg') {
              // TODO-QSP: $tgQWtemp[] = 'dream_sex_bella'
            } else {
              if (((s as any).tgQW ?? 0)?.['dream_sex_nush'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).anushkaQW ?? 0)?.['coffee_hole'] === 1)) {
                // TODO-QSP: $tgQWtemp[] = 'dream_sex_nush'
              } else {
                if (((s as any).tgQW ?? 0)?.['dream_sex_julia'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).nerd_game ?? 0)?.['stage'] >= 1)) {
                  // TODO-QSP: $tgQWtemp[] = 'dream_sex_julia'
                } else {
                  if (((s as any).tgQW ?? 0)?.['dream_sex_katja_vicky'] === 0  &&  (((s as any).start_type ?? 0) === 'sg_tg'  ||  ((s as any).katjaQW ?? 0)?.['QWstage'] >= 1)) {
                    // TODO-QSP: $tgQWtemp[] = 'dream_sex_katja_vicky'
                  }
                }
              }
            }
          }
        }
      }
      if (Object.keys((s as any).tgQWtemp ?? {}).length > 0) {
        // TODO-QSP: $sleep_events_priority[] = 'gs ''sleep_events'', ''male_dream'' '
      }
    }
    qspCall(s, 'blackmailer', 'blackmail_sleep_events');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterModSleepevents(s, scene); (s as any).locArgs = __savedLocArgs; }
  }
  // TODO-QSP: end
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'sleep_events', 'mod_sleepevents');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEventHandler(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      qspGoto(s, 'sleep_events', 'event_handler2', 'priority');
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        qspGoto(s, 'sleep_events', 'event_handler2');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_interrupt']; enterContinue(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = ((s as any).sleepVars['events_done'] ?? 0) + (1);
  if (String((s as any).locArgs?.[1] ?? '') === 'priority') {
    (s as any).temp_slev_id = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
    (s as any).temp_sleep_event_chosen = (((s as any).sleep_events_priority ?? 0)?.[String((s as any).temp_slev_id ?? 0)] ?? 0);
  } else {
    (s as any).temp_slev_id = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
    (s as any).temp_sleep_event_chosen = (((s as any).sleep_events ?? 0)?.[String((s as any).temp_slev_id ?? 0)] ?? 0);
  }
  qspGoto(s, 'sleep_events', 'event_end', 'sleep');
  // TODO-QSP: end
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'dream') {
    qspGoto(s, 'sleep_events', 'continue', 'dream');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'wake') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ((s as any).locArgs?.[2] ?? 0)]; enterExit(s, scene); (s as any).locArgs = __savedLocArgs; }
      qspGoto(s, 'wakeup', 'start');
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'no_interrupt') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'no_interrupt']; enterContinue(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'sleep') {
          qspGoto(s, 'sleep_events', 'continue', 'sleep');
        } else {
          qspGoto(s, 'sleep_events', 'continue', 'sleep');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 0;
  (s as any).inSleep = 0;
  qspCall(s, 'wakeup', 'wear_bed_clothes');
  if (String((s as any).locArgs?.[1] ?? '') !== 0) {
    qspCall(s, 'clothing', 'strip');
  }
  // TODO-QSP: end
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars = (s as any).sleepVars ?? {})['stat_display'] = 0;
  if (String((s as any).locArgs?.[1] ?? '') === 'sleep') {
    qspGoto(s, 'sleep', 'sleep_handler');
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'dream') {
      qspGoto(s, 'sleep', 'start');
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVibrOrgasm(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'sleep_events', 'vibr_orgasm2');
  // TODO-QSP: end
  scene.build();
}

function enterWakeHorny(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'sleep_events', 'wake_horny2');
  // TODO-QSP: end
  scene.build();
}

function enterVibrOrgasm2(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'vaginal_vibe', 5, 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/oface/o_face.jpg');
  // TODO-QSP: dynamic text: You abruptly wake up in the throes of an orgasm. As you recover, you check your ...
  scene.text(`You abruptly wake up in the throes of an orgasm. As you recover, you check your alarm clock. It reads ${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to sleep', handler: (st: GameState) => {
    qspGoto(st, 'sleep_events', 'event_end', 'dream');
  } },
    { label: 'Give up trying to sleep', handler: (st: GameState) => {
    scene.img('images/shared/sex/oface/kotovfirst1.jpg');
    scene.text('Maybe trying to sleep with a vibrator in your pussy wasn\'t such a good idea…');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'wake']; enterEventEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMaleDream(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'sleep_events', 'male_dream1');
  // TODO-QSP: end
  scene.build();
}

function enterMaleDream1(s: GameState, scene: SceneBuilder): void {
  ((s as any).tgQWtemp = (s as any).tgQWtemp ?? {})['chosen_dream'] = (Math.floor(Math.random() * (0 - 0 + 1)) + (0));
  qspGoto(s, 'sleep_events_magic', '$tgQWtemp[tgQWtemp[\'chosen_dream\']]');
  // TODO-QSP: end
  scene.build();
}

function enterMaleDreamEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pantyworntype ?? 0) === 'none') {
    scene.img('images/shared/sex/mast/klit.jpg');
    scene.text('You suddenly jolt awake and find yourself rubbing your soaking wet pussy. <i>Your</i> pussy.');
    scene.text('You sigh in frustration, your subconscious seemingly choosing to remind you of what you\'ve lost, and what you might have had… You wonder if your magical abilities also had something to do with it.');
    scene.text('Still, it <i>was</i> a <i>very</i> pleasurable dream, even if you didn\'t get to cum during it and your chances of fucking a girl as a boy again are all but non-existent.');
  } else {
    scene.img('images/shared/sex/mast/start.jpg');
    scene.text('You suddenly jolt awake and find your panties soaked through with your juices. <i>Your</i> pussy juices.');
    scene.text('You sigh in frustration, your subconscious seemingly choosing to remind you of what you\'ve lost, and what you might have had… You wonder if your magic also had something to do with it.');
    scene.text('Still, it <i>was</i> a <i>very</i> pleasurable dream, even if you didn\'t get to cum during it and your chances of fucking a girl like that as a boy again are all but non-existent.');
  }
  // TODO-QSP: dynamic text: The dream is still playing vividly in your mind and you feel yourself getting ar...
  scene.text(`The dream is still playing vividly in your mind and you feel yourself getting aroused by it as you glance over and check your alarm clock. It reads ${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to sleep', handler: (st: GameState) => {
    qspGoto(st, 'sleep_events', 'event_end', 'dream');
  } },
    { label: 'Get up', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'wake']; enterEventEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterIvannaDream(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'sleep_events', 'ivanna_dream1');
  // TODO-QSP: end
  scene.build();
}

function enterIvannaDream1(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = Math.max(100, ((s as any).pcs_horny ?? 0));
  ((s as any).strip_club = (s as any).strip_club ?? {})['ivanna_dream'] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/redlight/stripclub/ivanna3.jpg');
  scene.text('You dream about working a shift at the bar in the strip club when a naked Ivanna suddenly appears in front of you.');
  // TODO-QSP: dynamic text: "Let''s have some fun, <<$pcs_nickname>>," she smirks.
  scene.text(`"Let's have some fun, ${((s as any).pcs_nickname ?? '')}," she smirks.`);
  scene.text('You suddenly find yourself in one of the strip club\'s private rooms eagerly riding a massive dick as the thick, warm shaft stretches your inner walls.');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('Even though you\'ve never had sex, the sensation of having a cock in your pussy feels <i>very</i> real. You can even feel it twitching inside you.');
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('You\'ve never had a cock in your pussy before, yet the sensation feels <i>very</i> real. You can even feel it twitching inside you.');
    } else {
      scene.text('Having your pussy fucked in this dream feels just as real, if not <i>better</i> than it would in reality. A wave of pleasure rushes through you as you feel the cock twitching inside you.');
    }
  }
  scene.text('"Your little pussy is nice and tight! Fuck, I think I\'m going to cum right now!" a familiar voice says and you look behind you.');
  scene.text('To your surprise, you see that you\'re being fucked by a grinning Ivanna, who somehow now has a cock. A cock that feels great in your pussy. You think that you\'re about to…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Cum', goto: ['sleep_events', 'ivanna_dream_orgasm'] },
  ]);
  scene.build();
}

function enterIvannaDreamOrgasm(s: GameState, scene: SceneBuilder): void {
  (s as any).orgasm_or = 'yes';
  qspCall(s, 'arousal', 'erotic', 5, 'no_orgasm_msg');
  qspCall(s, 'arousal', 'end');
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/oface/kotovfirst.jpg');
  // TODO-QSP: dynamic text: 'You abruptly wake up in the throes of a powerful orgasm that all but overwhelms...
  scene.text('You abruptly wake up in the throes of a powerful orgasm that all but overwhelms you, ' + ((((s as any).pantyworntype ?? 0) !== 'none') ? ('your legs and panties') : ('your legs and sheets')) + ' drenched with the juices trickling from your soaking wet pussy.');
  scene.text('You\'re not sure why you were having a wet dream about Ivanna in particular, or why she had a cock, but it felt very real for some reason, as if you were <i>actually</i> having sex.');
  // TODO-QSP: dynamic text: It''s still playing vividly in your mind as you glance over and check your alarm...
  scene.text(`It's still playing vividly in your mind as you glance over and check your alarm clock. It reads ${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to sleep', handler: (st: GameState) => {
    qspGoto(st, 'sleep_events', 'event_end', 'dream');
  } },
    { label: 'Get up', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 'wake']; enterEventEnd(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWakeHorny2(s: GameState, scene: SceneBuilder): void {
  (s as any).inSleep = 1;
  (s as any).SleepHorny = ((s as any).SleepHorny ?? 0) + (1);
  qspCall(s, 'stat', '');
  if (((s as any).pantyworntype ?? 0) === 'none') {
    if (((s as any).SleepHorny ?? 0) === 1) {
      scene.img('images/shared/home/sleep_horny.jpg');
    } else {
      if (((s as any).SleepHorny ?? 0) === 2) {
        scene.img('images/shared/sex/mast/klit.jpg');
      } else {
        if (((s as any).SleepHorny ?? 0) >= 3) {
          scene.img('images/shared/sex/oface/kotovfirst1.jpg');
        }
      }
    }
  } else {
    if (((s as any).SleepHorny ?? 0) === 1) {
      scene.img('images/shared/sex/mast/start.jpg');
    } else {
      if (((s as any).SleepHorny ?? 0) === 2) {
        scene.img('images/shared/sex/undress/kiska.jpg');
      } else {
        if (((s as any).SleepHorny ?? 0) >= 3) {
          scene.img('images/shared/sex/oface/kotovfirst1.jpg');
        }
      }
    }
  }
  // TODO-QSP: dynamic text: You glance at your alarm clock. It reads <b><<func(''time'', ''get_time_string''...
  scene.text(`You glance at your alarm clock. It reads <b>${qspFunc(s, 'time', 'get_time_string', ((s as any).hour ?? ''), ((s as any).minut ?? ''), ((s as any).cheatVars ?? 0)?.['time_format'] ?? '')}</b>.`);
  if (((s as any).SleepHorny ?? 0) === 1) {
    scene.text('Your wet dream and overall horniness rouse you from your sleep. From one moment to the next, you\'re wide awake and very much aware that your pussy is hot and wet.');
    scene.text('You could try and go back to sleep, but it\'s doubtful that you would find this kind of sleep very restful, not to mention the frustration that comes with ignoring your needs. Masturbating is an option though, and not the worst one in this situation. It might take some time, but you\'d be able to sleep like a baby after.');
    scene.text('Of course, you could always give up on trying to sleep and just get up.');
  } else {
    if (((s as any).SleepHorny ?? 0) === 2) {
      scene.text('You\'re so horny that you\'ve woken a second time. Your pussy is still wet and wanting attention.');
      scene.text('You could try and go back to sleep again, but it\'s doubtful that you will get much sleep, and continuously ignoring your needs won\'t help. Maybe you should masturbate and make the most of the time that\'s left?');
      scene.text('You\'ll have to get up one way or another soon.');
    } else {
      if (((s as any).SleepHorny ?? 0) >= 3) {
        scene.text('Once again, your horniness has roused you from your sleep. Going back to sleep almost feels like a waste of time at this point since you won\'t get much rest until you fix this problem.');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          qspCall(s, 'underwear', 'remove');
          scene.text('You\'ve removed your underwear since your panties were soaked through.');
        }
        scene.text('Maybe you should just get up?');
      }
    }
  }
  if (((s as any).loc ?? 0) === 'bedrPar'  &&  ((s as any).sisterLesb ?? 0) === 6  &&  ((s as any).hour ?? 0) < 6) {
    scene.text('You could wake Anya up and see if she would be willing to help you…');
  } else {
    if (((s as any).loc ?? 0) === 'FedorEv4') {
      scene.text('You could wake Fedor up and see if he can help you…');
    } else {
      if ((((s as any).loc ?? 0) === 'bedr'  ||  ((s as any).loc ?? 0) === 'bedr2x')  &&  ((s as any).husID ?? 0) !== '') {
        // TODO-QSP: dynamic text: You could wake <<$npc_usedname[$husID]>> up and see if he can help you…
        scene.text(`You could wake ${(((s as any).npc_usedname ?? 0)?.[String((s as any).husID ?? 0)] ?? '')} up and see if he can help you…`);
      }
    }
  }
  if (((s as any).loc ?? 0) === 'bedrPar'  &&  ((s as any).hour ?? 0) < 6) {
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Masturbate', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'selfplay', 'start');
  } },
    ]);
  }
  if (((s as any).strip_here ?? 0) === 1) {
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sleep_events', 'event_end', 'wake'
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sleep_events', 'event_end', 'wake', 1
  } },
    ]);
  }
  if (((s as any).loc ?? 0) === 'bedrPar'  &&  ((s as any).sisterLesb ?? 0) === 6  &&  ((s as any).hour ?? 0) < 6) {
    scene.actions([
      { label: 'Wake Anya up', handler: (st: GameState) => {
    (st as any).strip_here = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'sistersleep', 'sister_sleep');
  } },
    ]);
  } else {
    if (((s as any).loc ?? 0) === 'FedorEv4') {
      scene.actions([
        { label: 'Wake Fedor up', handler: (st: GameState) => {
    (st as any).strip_here = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'FedorEv4_sex', 'Bedroom 2');
  } },
      ]);
    } else {
      if ((((s as any).loc ?? 0) === 'bedr'  ||  ((s as any).loc ?? 0) === 'bedr2x')  &&  ((s as any).husID ?? 0) !== '') {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Wake ' + String((((s as any).npc_usedname ?? 0)?.[String((s as any).husID ?? 0)] ?? '') ?? '') + ' up', handler: (st: GameState) => {
    (st as any).strip_here = 0;
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', 1]; enterExit(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspGoto(st, 'husbSex', 'variant');
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Try and go back to sleep', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'small');
    (st as any).pcs_sleep = ((st as any).pcs_sleep ?? 0) - (5);
    qspGoto(st, 'sleep_events', 'event_end', 'dream');
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
    case 'mod_sleepevents':
      enterModSleepevents(s, scene);
      break;
    case 'event_handler':
      enterEventHandler(s, scene);
      break;
    case 'event_handler2':
      enterEventHandler2(s, scene);
      break;
    case 'event_end':
      enterEventEnd(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'continue':
      enterContinue(s, scene);
      break;
    case 'vibr_orgasm':
      enterVibrOrgasm(s, scene);
      break;
    case 'wake_horny':
      enterWakeHorny(s, scene);
      break;
    case 'vibr_orgasm2':
      enterVibrOrgasm2(s, scene);
      break;
    case 'male_dream':
      enterMaleDream(s, scene);
      break;
    case 'male_dream1':
      enterMaleDream1(s, scene);
      break;
    case 'male_dream_end':
      enterMaleDreamEnd(s, scene);
      break;
    case 'ivanna_dream':
      enterIvannaDream(s, scene);
      break;
    case 'ivanna_dream1':
      enterIvannaDream1(s, scene);
      break;
    case 'ivanna_dream_orgasm':
      enterIvannaDreamOrgasm(s, scene);
      break;
    case 'wake_horny2':
      enterWakeHorny2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sleep_events: LocationDef = {
  name: 'sleep_events',
  title: 'You suddenly jolt awake and find yourself rubbing your soaki',
  region: 'other',
  enter: enter,
};
