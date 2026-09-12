import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  ((s as any).sex_ev ?? {})['pillow_talking'] = 1;
  // TODO-QSP: dynamic text: You and <<$npcdesc>> relax on the bed together, idly chitchatting as you bask in...
  scene.text(`You and ${((s as any).npcdesc ?? 0)} relax on the bed together, idly chitchatting as you bask in the afterglow.`);
  if (((s as any).sex_ev ?? 0)?.['deflowered'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    qspCall(s, 'sex_ev_virgin', 'first_time_talk');
  } else {
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] >= 80  &&  ((s as any).sugar_gift_day ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_sugar_gifts ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        qspCall(s, 'sex_ev_events', 'sugar_daddy_gift');
      } else {
        if (((s as any).npc_sugar_gifts ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  (Math.floor(Math.random() * 5) + 1) === 1) {
          qspCall(s, 'sex_ev_events', 'sugar_daddy_gift');
        } else {
          ((s as any).sugar_gift_day ?? {})[String((s as any).npcID ?? 0)] = 1;
          qspCall(s, 'sex_ev_pillow_talk', 'topics');
        }
      }
    } else {
      qspCall(s, 'sex_ev_pillow_talk', 'topics');
    }
  }
  qspCall(s, 'sex_ev_after', 'sore_pussy_msg');
  // TODO-QSP: end
  scene.build();
}

function enterStopTalk(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Stop talking', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_after', 'relax_together'] }]);
    } else {
      qspCall(s, 'sex_ev_sex', 'break_time');
    }
  } },
  ]);
  scene.build();
}

function enterTopicRoute(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['reflection_active'] === 1) {
    qspCall(s, 'sex_ev_reflection', 'top_menu');
  } else {
    scene.actions([
      { label: 'Keep talking', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      qspCall(s, 'sex_ev_pillow_talk', 'topics');
    } else {
      qspCall(s, 'sex_ev_sex', 'break_time');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPillowPicture1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'annoyed') {
      scene.img('images/shared/sex/after/annoyed1.jpg');
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'eyeroll') {
        scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'laugh') {
          scene.img('images/shared/sex/after/pillow_talk6.mp4');
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'kiss') {
            scene.img('images/shared/sex/after/kiss1.jpg');
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'shudder') {
              scene.img('images/shared/sex/after/shudder.mp4');
            } else {
              if (((s as any).locArgs?.[1] ?? 0) !== 0) {
                scene.img(`images/shared/sex/after/pillow_talk${qspUntranslated(s, "ARGS[1]", { location: "sex_ev_pillow_talk" })}.jpg`);
              } else {
                if (((s as any).sex_ev ?? 0)?.['smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
                  if (((s as any).sex_ev ?? 0)?.['boy_smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
                    scene.img('images/shared/sex/after/bed_smoke3.jpg');
                  } else {
                    if (((s as any).sex_ev ?? 0)?.['phone'] > 0) {
                      scene.img('images/shared/sex/after/phone_smoke.jpg');
                    } else {
                      scene.img(`images/shared/sex/after/bed_smoke1_${Math.floor(Math.random() * 2) + 1}.jpg`);
                    }
                  }
                } else {
                  if (((s as any).sex_ev ?? 0)?.['boy_smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
                    scene.img(`images/shared/sex/after/bed_smoke2_${Math.floor(Math.random() * 2) + 1}.jpg`);
                  } else {
                    if (((s as any).locArgs?.[2] ?? 0) === 'mp4') {
                      scene.img(`images/shared/sex/after/${((s as any).locArgs?.[1] ?? 0)}.mp4`);
                    } else {
                      if (((s as any).locArgs?.[2] ?? 0) === 'jpg') {
                        scene.img(`images/shared/sex/after/${((s as any).locArgs?.[1] ?? 0)}.jpg`);
                      } else {
                        if (((s as any).locArgs?.[1] ?? 0) === 1) {
                          scene.img('images/shared/sex/after/pillow_talk1.jpg');
                        } else {
                          if (((s as any).locArgs?.[1] ?? 0) === 2) {
                            scene.img('images/shared/sex/after/pillow_talk2.jpg');
                          } else {
                            if (((s as any).locArgs?.[1] ?? 0) === 3) {
                              scene.img('images/shared/sex/after/pillow_talk3.jpg');
                            } else {
                              if (((s as any).locArgs?.[1] ?? 0) === 4) {
                                scene.img('images/shared/sex/after/pillow_talk4.jpg');
                              } else {
                                if (((s as any).locArgs?.[1] ?? 0) === 5) {
                                  scene.img('images/shared/sex/after/pillow_talk5.jpg');
                                } else {
                                  if (((s as any).locArgs?.[1] ?? 0) === 6) {
                                    scene.img('images/shared/sex/after/pillow_talk6.jpg');
                                  } else {
                                    if (((s as any).locArgs?.[1] ?? 0) === 7) {
                                      scene.img('images/shared/sex/after/pillow_talk7.jpg');
                                    } else {
                                      if (((s as any).locArgs?.[1] ?? 0) === 'smile') {
                                        scene.img('images/shared/sex/after/smile1.jpg');
                                      } else {
                                        if (((s as any).locArgs?.[1] ?? 0) === 'smile2') {
                                          scene.img('images/shared/sex/after/smile2.jpg');
                                        } else {
                                          if (((s as any).pcs_haircolor ?? 0) === 'blonde') {
                                            scene.img('images/shared/sex/after/pillow_talk5.jpg');
                                          } else {
                                            scene.img('images/shared/sex/after/pillow_talk1.jpg');
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTopics(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  if (((s as any).sex_ev ?? 0)?.['unique_npc'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk_<<$npcID>>', 'topic_menu');
  } else {
    if (((s as any).sex_ev ?? 0)?.['angry_after'] === 0) {
      if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
        scene.actions([
          { label: 'Talk about the sex', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'sex_talk'
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        scene.actions([
          { label: 'Talk about condoms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'condom_talk'
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['wake_fuck'] === 1  ||  ((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 1  ||  ((s as any).sex_ev ?? 0)?.['morning_fuck'] === 1) {
        scene.actions([
          { label: 'Morning sex talk', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'morning_sex_talk'
  } },
        ]);
      }
      qspCall(s, 'sex_ev_talk', 'ma_pill_money');
      scene.actions([
        { label: 'Small talk', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'small_talk'
  } },
        { label: 'Talk about cum', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'cum_talk'
  } },
        { label: 'Play with his cock', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk2', 'dick_talk'
  } },
      ]);
    }
    qspCall(s, 'sex_ev_pillow_talk2', 'talk_late_for_school');
    qspCall(s, 'sex_ev_pillow_talk2', 'take_a_shower');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'checker');
  }
  // TODO-QSP: end
  scene.build();
}

function enterTalkTimeAdd(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).locArgs?.[1] ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + (qspUntranslated(s, "ARGS[1]", { location: "sex_ev_pillow_talk" }));
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterSexTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['convo'] = '';
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_favorite_part', 'good_for_you');
  qspCall(s, 'sex_ev_pillow_talk', 'kuni_wear_out');
  qspCall(s, 'sex_ev_pillow_talk', 'long_time');
  qspCall(s, 'sex_ev_pillow_talk', 'better_than_boyfriend');
  qspCall(s, 'sex_ev_pillow_talk', 'sweaty_sex');
  qspCall(s, 'sex_ev_pillow_talk', 'sore_pussy');
  qspCall(s, 'sex_ev_pillow_talk', 'ruined_makeup');
  qspCall(s, 'sex_ev_pillow_talk', 'first_orgasm');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk', 'couldnt_sleep_fuck');
    qspCall(s, 'sex_ev_talk', 'morning_talk');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterCondomTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] >= 1) {
    if (((s as any).sex_ev ?? 0)?.['used_condoms_talk'] === 0  &&  (((s as any).sex_ev ?? 0)?.['condoms_used'] + ((s as any).sex_ev ?? 0)?.['pc_condoms_used'] >= 5)) {
      scene.actions([
        { label: 'Can\'t believe we ran out of condoms', goto: ['sex_ev_pillow_talk', 'ran_out_of_condoms'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['used_condoms_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['condoms_used'] < 3  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      scene.actions([
        { label: 'You need more condoms', goto: ['sex_ev_pillow_talk', 'ran_out_of_condoms'] },
      ]);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['better_without'] === 0  &&  ((s as any).sex_ev ?? 0)?.['bareback_pillowtalk'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  (((s as any).sex_ev ?? 0)?.['condom'] === 1  ||  ((s as any).sex_ev ?? 0)?.['npc_insist_no_condom'] === 1  ||  ((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1)  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
      scene.actions([
        { label: 'It was better without the condom', goto: ['sex_ev_pillow_talk', 'better_without'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 0) {
        scene.actions([
          { label: 'Glad we went bareback', goto: ['sex_ev_pillow_talk', 'better_without'] },
        ]);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['npc_condom_motive'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['sex_over'] > 0) {
    if (((s as any).sex_ev ?? 0)?.['condom_wasnt_bad'] === 0) {
      scene.actions([
        { label: 'Using condoms wasn\'t so bad', goto: ['sex_ev_pillow_talk', 'condom_wasnt_bad'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['bareback_next_time'] === 0) {
      if (((s as any).sex_ev ?? 0)?.['condom_motive'] === '') {
        scene.actions([
          { label: 'Can we skip the condom next time?', goto: ['sex_ev_pillow_talk', 'bareback_next_time1'] },
        ]);
      } else {
        scene.actions([
          { label: 'Lets skip the condom next time', goto: ['sex_ev_pillow_talk', 'bareback_next_time2'] },
        ]);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['condoms_used'] + ((s as any).sex_ev ?? 0)?.['pc_condoms_used'] > 0  &&  ((s as any).sex_ev ?? 0)?.['wish_no_condoms_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
    scene.actions([
      { label: 'Wish we didn\'t need condoms', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'wish_no_condoms1'
  } },
    ]);
  }
  if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['condom'] < 1  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend'  &&  ((s as any).sex_ev ?? 0)?.['condom_conscious_talk'] === 0) {
    scene.actions([
      { label: 'You always use condoms?', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'always_condoms1'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['bareback_pillowtalk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['better_without'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  (((s as any).sex_ev ?? 0)?.['virgin'] !== 1  ||  ((s as any).sex_ev ?? 0)?.['condom'] === 1)) {
    scene.actions([
      { label: 'Love going bareback', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'love_going_bareback'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterCumTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk', 'so_many_creampies');
  qspCall(s, 'sex_ev_pillow_talk', 'broken_creampie_rule');
  qspCall(s, 'sex_ev_pillow_talk', 'plastered');
  qspCall(s, 'sex_ev_pillow_talk', 'thank_no_creampie');
  qspCall(s, 'sex_ev_pillow_talk', 'sex_mess');
  qspCall(s, 'sex_ev_pillow_talk', 'cant_believe_creampie');
  qspCall(s, 'sex_ev_pillow_talk', 'safe_day_creampie');
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    qspCall(s, 'sex_ev_pillow_talk', 'free_creampies');
  }
  if (((s as any).sex_ev ?? 0)?.['pullout_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0  &&  ((s as any).npc_creampie_permission ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    qspCall(s, 'sex_ev_talk', 'creampie_permission1');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterSmallTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'plans_later');
  qspCall(s, 'sex_ev_pillow_talk2', 'weather_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'fav_body_part');
  if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    qspCall(s, 'sex_ev_talk', 'morning_talk');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topics'
  } },
  ]);
  scene.build();
}

function enterDickTalkTopics(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'whats_it_like_dick');
  qspCall(s, 'sex_ev_pillow_talk2', 'dicks_are_weird');
  qspCall(s, 'sex_ev_pillow_talk2', 'dick_compliment');
  qspCall(s, 'sex_ev_pillow_talk2', 'whats_it_like_fuck_girl');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterMorningSexTalk(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'stop_talk');
  qspCall(s, 'sex_ev_pillow_talk2', 'morning_start_day');
  qspCall(s, 'sex_ev_pillow_talk2', 'morning_sore_pussy');
  qspCall(s, 'sex_ev_pillow_talk2', 'wakeup_sex_late_for_school');
  qspCall(s, 'sex_ev_morning', 'want_breakfast');
  qspCall(s, 'sex_ev_pillow_talk2', 'forgot_bc_talk1');
  // TODO-QSP: end
  scene.actions([
    { label: 'Change the subject', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
  ]);
  scene.build();
}

function enterGoodForYou(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['good_for_you'] === 0  &&  ((s as any).sex_ev ?? 0)?.['mad'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['blue_ball'] !== 1) {
    scene.actions([
      { label: 'Was it good for you?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['good_for_you'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.text('"Was it good for you?" you ask pleasantly.');
    if (((s as any).sex_ev ?? 0)?.['virgin'] !== 1) {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
        scene.text('"Yeah, you were great" he says. "You practically drained my balls. I might not be able to come again for a week. What about you?"');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fucked_out'] === 0) {
          scene.text('"I could\'ve gone a few more times," he says. "But it wasn\'t bad. How about you?"');
        } else {
          scene.text('"Yeah, it was," he says. "How about you?"');
        }
      }
      qspCall(s, 'sex_ev_favorite_part', 'good_for_you_too');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']  ||  ((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"Yeah, you were great" he says. "You practically drained my balls. I might not be able to come again for a week."');
      } else {
        scene.text('"I could\'ve gone a few more times," he says. "But it wasn\'t bad."');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKuniWearOut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cuni_orgasm'] >= 5  &&  ((s as any).sex_ev ?? 0)?.['pussy_psycho_talk'] !== 1) {
    scene.actions([
      { label: 'You\'re a pussyeating psycho', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['pussy_psycho_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['consecutive_cuni_orgasm'] >= 5) {
      scene.text('"You\'re a fucking psycho, you know that?" you pant, gasping for breath. "Who... makes a girl... come five times in a row... with just their tongue?? And... doesn\'t even want... to fuck her?!"');
      scene.text('"I like eating pussy," he shrugs.');
      scene.text('"You have a problem is what you have," you say, staring up at the ceiling with exhaustion crashing down on you.');
    } else {
      scene.text('"You\'re a psycho, you know that?" you say. "What kind of crazy person makes a girl come that much with just their tongue? I came so many times it <i>hurt</i>."');
      scene.text('"I like eating pussy," he shrugs. "I think it\'s fun."');
      // TODO-QSP: dynamic text: "You have a problem," you say, giving <<$npcdesc>> a sidelong glance, still feel...
      scene.text(`"You have a problem," you say, giving ${((s as any).npcdesc ?? 0)} a sidelong glance, still feeling residual throbs pulsing through your clit.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLongTime(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['long_time_talk'] === 0  &&  ((((s as any).totminut ?? 0) > ((s as any).sex_ev ?? 0)?.['start_time'] + 120)  ||  (((s as any).daystage ?? 0)?.['desc'] === 'pre_dawn'  ||  ((s as any).daystage ?? 0)?.['desc'] === 'dawn'  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 0))) {
    scene.actions([
      { label: 'We were at it a long time', handler: (st: GameState) => {
    if ((((s as any).daystage ?? 0)?.['desc'] === 'pre_dawn'  ||  ((s as any).daystage ?? 0)?.['desc'] === 'dawn')  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 0  &&  (((s as any).totminut ?? 0) > ((s as any).sex_ev ?? 0)?.['start_time'] + 480)) {
      scene.actions([
        { label: 'We fucked all night', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['long_time_talk'] = 1;
    ((s as any).sex_ev ?? {})['keep_it_up'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Wow," you pant, looking through the window. "We fucked all night long."');
    scene.text('Sure enough, cracks of purple-orange light glow at the edge of night, the sun is rising.');
    scene.text('"I just can\'t stop fucking you," he grins back. "It\'s too much fun."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    } else {
      scene.actions([
        { label: 'It\'s been hours', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['long_time_talk'] = 1;
    ((s as any).sex_ev ?? {})['keep_it_up'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "Wow," you say, looking over at the clock. "We were at it for a long time. We've...
    scene.text(`"Wow," you say, looking over at the clock. "We were at it for a long time. We've been going for ${(((s as any).totminut ?? 0) - ((s as any).sex_ev ?? {})?.['start_time']) / 60} hours straight!"`);
    scene.text('"It\'s too much fun to fuck you," he grins back. "I couldn\'t stop."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 3  &&  ((s as any).sex_ev ?? 0)?.['keep_it_up'] === 0) {
      scene.actions([
        { label: 'You can really keep it up', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    ((s as any).sex_ev ?? {})['keep_it_up'] = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    // TODO-QSP: dynamic text: "You can really keep it up, huh?" you say, trying to count how many times he cam...
    scene.text(`"You can really keep it up, huh?" you say, trying to count how many times he came. ${((s as any).sex_ev ?? {})?.['cum_count'] - 1}...? ${((s as any).sex_ev ?? 0)?.['cum_count']}??`);
    scene.text('"Yeah, I guess I have a pretty high sex drive," he smiles back.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSorryDidntCum(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cum_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sorry_no_cum_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sore_pussy'] === 1) {
    scene.actions([
      { label: 'Apologize for not making him cum', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sorry_no_cum_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I\'m really sorry you didn\'t get to come," you say. "My pussy just couldn\'t take it anymore."');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "You could have at least sucked me off," <<$npcdesc>> replies sourly.
      scene.text(`"You could have at least sucked me off," ${((s as any).npcdesc ?? 0)} replies sourly.`);
    } else {
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Some girls just can't handle how awesome my cock is," <<$npcdesc>> says with a ...
        scene.text(`"Some girls just can't handle how awesome my cock is," ${((s as any).npcdesc ?? 0)} says with a smug shrug. "I'm used to it."`);
      } else {
        if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "It's okay," <<$npcdesc>> says, looking like he really means it. "I wouldn't wan...
          scene.text(`"It's okay," ${((s as any).npcdesc ?? 0)} says, looking like he really means it. "I wouldn't want you to hurt yourself just for my sake."`);
        } else {
          // TODO-QSP: dynamic text: "It would have been nice..." <<$npcdesc>> admits, looking a little blue-balled.
          scene.text(`"It would have been nice..." ${((s as any).npcdesc ?? 0)} admits, looking a little blue-balled.`);
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBetterThanBoyfriend(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0  &&  ((s as any).sex_ev ?? 0)?.['better_than_lover_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['virgin'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend') {
    scene.actions([
      { label: 'You\'re better than my boyfriend', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['better_than_lover_talk'] = 1;
    ((s as any).npc_know_have_boyfriend ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    // TODO-QSP: dynamic text: "You're even better than my boyfriend," you tell <<$npcdesc>> with a satisfied s...
    scene.text(`"You're even better than my boyfriend," you tell ${((s as any).npcdesc ?? 0)} with a satisfied smile.`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSweatySex(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sweat ?? 0) > ((s as any).sex_ev ?? 0)?.['starting_sweat'] + 20  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['sweaty_talk'] === 0) {
    scene.actions([
      { label: 'I\'m so sweaty', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sweaty_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['rough_fuck'] > 0) {
      scene.text('"Whew, I\'m so sweaty after that," you pant, looking at the moisture running down your skin. "We really went hard didn\'t we?"');
      if (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npcID ?? 0)] === 3) {
        // TODO-QSP: dynamic text: "A hard fuck is the best fuck," <<$npcdesc>> grins back at you.
        scene.text(`"A hard fuck is the best fuck," ${((s as any).npcdesc ?? 0)} grins back at you.`);
      } else {
        if (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
          // TODO-QSP: dynamic text: "It's nice to go hard now and then," <<$npcdesc>> smiles.
          scene.text(`"It's nice to go hard now and then," ${((s as any).npcdesc ?? 0)} smiles.`);
        } else {
          // TODO-QSP: dynamic text: "It's not usually my thing," <<$npcdesc>> says with a small smile. "But since yo...
          scene.text(`"It's not usually my thing," ${((s as any).npcdesc ?? 0)} says with a small smile. "But since you wanted to..."`);
        }
      }
    } else {
      scene.text('"Whew, I\'m so sweaty after that," you pant, looking at the moisture running down your skin. "I didn\'t realize we fucked that hard."');
      if (((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_apt_spare ?? 0)?.[String((s as any).npcID ?? 0)] === 'gym') {
        // TODO-QSP: dynamic text: "Sex is better cardio than most people think," <<$npcdesc>> grins back.
        scene.text(`"Sex is better cardio than most people think," ${((s as any).npcdesc ?? 0)} grins back.`);
      } else {
        ((s as any).sex_ev ?? {})['weather_pillow_talk'] = 1;
        // TODO-QSP: dynamic text: "I don't think we did," <<$npcdesc>> pants back. "I think it's just that hot tod...
        scene.text(`"I don't think we did," ${((s as any).npcdesc ?? 0)} pants back. "I think it's just that hot today."`);
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSorePussy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pain ?? 0)?.['vaginal'] > 10  &&  ((s as any).sex_ev ?? 0)?.['sore_pussy_talk'] === 0) {
    scene.actions([
      { label: 'Sore pussy', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['sore_pussy_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('You wince in discomfort as your pussy throbs between your legs, feeling very tender and more than a worn out.');
    if (((s as any).dick_desc ?? 0) === 'thick'  ||  ((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: '<<$npcdesc>>\'s cock is big', handler: (st: GameState) => {
    scene.actions([
      { label: '<i>Too</i> big', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I think your cock is too big for me," you say, giving a rueful glance at <<$npc...
    scene.text(`"I think your cock is too big for me," you say, giving a rueful glance at ${((s as any).npcdesc ?? 0)}'s enormous manhood as you rub your thighs together. "My pussy feels like it's been pounded by a sledgehammer."`);
    if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"It is pretty impressive, isn\'t it?" he replies smugly, giving his own cock an appreciative glance.');
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend'  &&  ((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
        scene.actions([
          { label: 'Wish my boyfriend was that big', handler: (st: GameState) => {
    ((s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I wish my boyfriend had one like that," you say. "It\'s so big but it feels so good..."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
        ]);
      }
      scene.actions([
        { label: 'Yeah it is', handler: (st: GameState) => {
    scene.text('"Hell yeah it is," you grin back. ');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
        { label: 'Arrogant much?', handler: (st: GameState) => {
    scene.text('"Nice to know my pain isn\'t feeding your ego or anything like that," you say with a raised eyebrow.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 1) === 1) {
        // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says with a guilty smile. "That's the one part of me I can...
        scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says with a guilty smile. "That's the one part of me I can't really control."`);
        scene.actions([
          { label: 'Not his fault', handler: (st: GameState) => {
    scene.text('"I know," you reply. "It\'s not your fault. But it still does hurt a little."');
    scene.text('You give him a small smile to let him know there\'s no hard feelings.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
          { label: 'Worth it', handler: (st: GameState) => {
    scene.text('"Don\'t be sorry," you reply, shaking your head. "The pain is more than worth the pleasure."');
    scene.text('You give him a small smile to let him know you enjoyed yourself.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: "Hey, you're the one who wanted to fuck me," <<$npcdesc>> shrugs.
        scene.text(`"Hey, you're the one who wanted to fuck me," ${((s as any).npcdesc ?? 0)} shrugs.`);
        if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          scene.actions([
            { label: 'Didn\'t know what I was getting into', handler: (st: GameState) => {
    scene.text('"That was before I knew what I was getting into," you respond wryly.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
          ]);
        } else {
          scene.actions([
            { label: 'He\'s got a point', handler: (st: GameState) => {
    scene.text('"You\'ve got a point there," you respond wryly.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
          ]);
        }
      }
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      scene.actions([
        { label: 'Need to get used to this', handler: (st: GameState) => {
    scene.text('"I\'m gonna have to get used to having something so big inside me," you say, wryly twisting your lips while still examining his cock.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
        { label: 'Just need practice', handler: (st: GameState) => {
    scene.text('"I think I just need more practice," you reply, giving him a suggestive look. By the way he stares back, you think he got your meaning.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      scene.actions([
        { label: 'Lucky you\'re my sugar daddy', handler: (st: GameState) => {
    scene.text('"Just count yourself lucky you\'re my sugar daddy," you say, giving him a wry smirk. "If you were just my boyfriend, I might have broken up with you over this."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
        { label: 'Lucky you\'re paying me (insulting)', handler: (st: GameState) => {
    scene.text('"Just count yourself lucky you\'re sugar babying me," you say, wrinkling your nose. "I would never put up with a cock like this if I wasn\'t getting paid."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    } else {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
        scene.actions([
          { label: 'Lucky you\'re my boyfriend', handler: (st: GameState) => {
    scene.text('"Just count yourself lucky you\'re already my boyfriend," you say, giving him a wry smirk. "I might\'ve considered looking for a guy with a smaller cock if we weren\'t dating."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
        ]);
      } else {
        if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'husband') {
          scene.actions([
            { label: 'Lucky you\'re my husband', handler: (st: GameState) => {
    scene.text('"Just count yourself lucky we\'re already married," you say, giving him a teasing smile. "A divorce is too much hassle to go through just because your cock is too big. I\'ll just have to live with the pain."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
          ]);
        }
      }
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I overdid it', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I think I might've overdone it," you say, rubbing your thighs together as you g...
    scene.text(`"I think I might've overdone it," you say, rubbing your thighs together as you give ${((s as any).npcdesc ?? 0)} a rueful look. "Pushed my pussy past its limits, fucking you as much as I did. Should've called it quits a lot sooner."`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      { label: 'We overdid it', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I think we overdid it," you say, rubbing your thighs together as you give <<$np...
    scene.text(`"I think we overdid it," you say, rubbing your thighs together as you give ${((s as any).npcdesc ?? 0)} a rueful look. "You might have fucked my pussy raw."`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      { label: 'Fucked me silly', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "You really fucked me silly," you say, rubbing your thighs together as you give ...
    scene.text(`"You really fucked me silly," you say, rubbing your thighs together as you give ${((s as any).npcdesc ?? 0)} a rueful look. "I think I'm going to have trouble walking after this."`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSorePussy2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterSleepFuckWakeupTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] === 2) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterRoughSexTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['rough_pillow_talk'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] === 1) {
      scene.actions([
        { label: 'I loved it when you got rough' }, // TODO-QSP: empty action body
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['rough_hurt'] === 1) {
        scene.actions([
          { label: 'Did you have to get so rough?' }, // TODO-QSP: empty action body
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRanOutOfCondoms(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  ((s as any).sex_ev ?? {})['used_condoms_talk'] = 1;
  ((s as any).sex_ev ?? {})['keep_it_up'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] >= 1  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0  &&  ((s as any).sex_ev ?? 0)?.['pc_condom_count'] !== 0  &&  ((s as any).sex_ev ?? 0)?.['condoms_used'] === 0) {
    scene.text('"I can\'t believe how many condoms we went through," you say, looking around in awe at the discarded rubber sleeves littering the room. "You used up my <i>whole</i> stash!"');
  } else {
    if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] >= 1  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0  &&  ((s as any).sex_ev ?? 0)?.['pc_condom_count'] !== 0) {
      scene.text('"I can\'t believe we used <i>all</i> our condoms," you say, looking around in awe at the discarded rubber sleeves littering the room. "Your stash and mine!"');
    } else {
      scene.text('"I can\'t believe we used <i>all</i> your condoms," you say, looking around in awe at the discarded rubber sleeves littering the room.');
    }
  }
  scene.text('"We fucked like crazy, didn\'t we?" he nods.');
  scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'sex_talk'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterNeedMoreCondoms(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  ((s as any).sex_ev ?? {})['used_condoms_talk'] = 1;
  ((s as any).sex_ev ?? {})['convo'] = 'used_all_condoms';
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  if (((s as any).sex_ev ?? 0)?.['out_of_condoms'] >= 1  &&  ((s as any).mc_inventory ?? 0)?.['normal_condoms'] === 0  &&  ((s as any).sex_ev ?? 0)?.['condoms_used'] === ((s as any).sex_ev ?? 0)?.['fuck_count']) {
    scene.text('"You really need to buy more condoms," you sigh. "It really puts a damper on things if we can\'t fuck safely."');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_fight');
    } else {
      // TODO-QSP: dynamic text: "I'll put it on my shopping list," <<$npcdesc>> chuckles.
      scene.text(`"I'll put it on my shopping list," ${((s as any).npcdesc ?? 0)} chuckles.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'sex_talk'] }]);
    }
  } else {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.text('"You really need to buy more condoms," you sigh. "We shouldn\'t be taking chances like this."');
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['accidental_creampie_convo'] < 1  &&  (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
        qspCall(s, 'sex_ev_talk', 'boy_accidental_creampie');
      } else {
        if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_fight');
        } else {
          // TODO-QSP: dynamic text: "I'll put it on my shopping list," <<$npcdesc>> chuckles.
          scene.text(`"I'll put it on my shopping list," ${((s as any).npcdesc ?? 0)} chuckles.`);
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'sex_talk'] }]);
        }
      }
    } else {
      scene.text('"You really need to buy more condoms," you sigh. "We shouldn\'t be taking chances like this."');
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Aren't you on birth control?" <<$npcdesc>> asks, bemused.
        scene.text(`"Aren't you on birth control?" ${((s as any).npcdesc ?? 0)} asks, bemused.`);
        scene.text('"I just like being safe. Better to have multiple kinds of birth control in case one fails."');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'sex_talk'] }]);
      } else {
        if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_fight');
        } else {
          // TODO-QSP: dynamic text: "I'll put it on my shopping list," <<$npcdesc>> chuckles.
          scene.text(`"I'll put it on my shopping list," ${((s as any).npcdesc ?? 0)} chuckles.`);
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'sex_talk'] }]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCondomBuyFight(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
  // TODO-QSP: dynamic text: "<i>You</i> could always buy more condoms," <<$npcdesc>> grumbles. "I don't see ...
  scene.text(`"<i>You</i> could always buy more condoms," ${((s as any).npcdesc ?? 0)} grumbles. "I don't see why it's all up to me to get the condoms!"`);
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  (!((s as any).pillcon2 ?? 0))) {
    scene.actions([
      { label: 'You could start the pill', handler: (st: GameState) => {
    ((s as any).pc_start_bc ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    scene.text('You chew your lip for a moment, mulling it over. He\'s kind of right. It\'s a little unfair that he\'s the one paying for all your safe sex.');
    scene.text('"I guess..." you say slowly. "I could start the pill? Then we wouldn\'t have to worry about condoms or pregnancy."');
    // TODO-QSP: dynamic text: You look at <<$npcdesc>>, a gentle smile on your face.
    scene.text(`You look at ${((s as any).npcdesc ?? 0)}, a gentle smile on your face.`);
    scene.text('"That sounds... good," he says back.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  } else {
    if (((s as any).pillcon2 ?? 0) > 0) {
      scene.actions([
        { label: 'Just until my pill kicks in', handler: (st: GameState) => {
    scene.text('"Just a little longer," you say. "Just until my pill has kicked in."');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t respond', handler: (st: GameState) => {
    scene.text('You stay silent, choosing to ignore his response and avoid a fight.');
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    { label: 'He\'s got a point', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    ((s as any).pc_buy_condoms ?? {})[String((s as any).npcID ?? 0)] = 1;
    // TODO-QSP: dynamic text: "I guess you've got a point," you say, giving <<$npcdesc>> a guilty smile. "I'll...
    scene.text(`"I guess you've got a point," you say, giving ${((s as any).npcdesc ?? 0)} a guilty smile. "I'll try to buy some for next time."`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    { label: 'He\'s the one with the dick (argue)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"You\'re the one with the dick," you scowl. "So it\'s your job to get the condoms."');
    scene.text('"My money that\'s getting spent too! I don\'t see you chipping into the safe sex fun!"');
    qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_apology');
    qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_fight2');
  } },
    { label: 'He can\'t get pregnant (argue)', handler: (st: GameState) => {
    scene.text('"<i>You\'re</i> not the one in danger of getting pregnant," you say, sardonically rolling your eyes. "So <i>you</i> pay for the condoms."');
    scene.text('"Hey, this shit is expensive if I\'m always the one buying them!"');
    qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_apology');
    qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_fight2');
  } },
  ]);
  scene.build();
}

function enterCondomBuyFight2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s his responsibility!', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Cause it\'s your dick! Take responsibility for it!"');
    scene.text('"It takes two to fuck, you selfish slut!"');
    qspCall(s, 'sex_ev_pillow_talk', 'angry_end');
  } },
    { label: 'Babies are expensive too!', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"Yeah, because <i>I\'m</i> the one in danger of getting pregnant! If I have a kid, are you going to chip in then?" you shout at him.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0) !== 1) {
      // TODO-QSP: dynamic text: "Of course I am!" <<$npcdesc>> yells back.
      scene.text(`"Of course I am!" ${((s as any).npcdesc ?? 0)} yells back.`);
      qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_apology');
      scene.actions([
        { label: 'I don\'t believe you!', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"Bullshit!" you say. "That\'s what all guys say. But as soon as a there\'s a baby in a girl\'s belly, they all run!"');
    qspCall(s, 'sex_ev_pillow_talk', 'angry_end');
  } },
      ]);
    } else {
      if (((s as any).npc_childfree ?? 0) === 1) {
        // TODO-QSP: dynamic text: "No, because you're going to get an abortion if that shit happens!" <<$npcdesc>>...
        scene.text(`"No, because you're going to get an abortion if that shit happens!" ${((s as any).npcdesc ?? 0)} growls. "I'm not taking care of a fucking kid!"`);
        qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_apology');
        scene.actions([
          { label: 'What the fuck did you just say?', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    ((s as any).npc_big_fight ?? {})[String((s as any).npcID ?? 0)] = ((s as any).daystart ?? 0);
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "What the fuck did you just say?" you say, gaping at <<$npcdesc>> in disbelief. ...
    scene.text(`"What the fuck did you just say?" you say, gaping at ${((s as any).npcdesc ?? 0)} in disbelief. "You did <i>not</i> just say that."`);
    scene.text('"I sure did," he glares back. "There\'s no way I\'m having kids, especially unwanted ones. Because they\'re all unwanted."');
    // TODO-QSP: dynamic text: "It's my <i>fucking</i> body!" you scream at <<$npcdesc>>. "You don't get to mak...
    scene.text(`"It's my <i>fucking</i> body!" you scream at ${((s as any).npcdesc ?? 0)}. "You don't get to make demands like that! You know what? I'm fucking leaving."`);
    scene.text('You get up, grabbing your things in a huff.');
    scene.actions([
      { label: 'Asshole!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Throwing your clothes on as fast as you can, you stomp to the door, shouting, "ASSHOLE!" as you slam it behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'Bastard!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Throwing your clothes on as fast as you can, you stomp to the door, shouting, "BASTARD!" as you slam it behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      { label: 'You\'re such a-!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You sputter in anger, unable to form coherrent sentences as you throw your clothes on as fast as you can.');
    scene.text('"You\'re such a-! I can\'t believ-! You know wh-! UGH! FUCK YOU!" you shout, slamming the door behind you.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        scene.text('"If you help buy the condoms, then you\'re not going to get pregnant!"');
        qspCall(s, 'sex_ev_pillow_talk', 'condom_buy_apology');
        scene.actions([
          { label: 'Refuse to respond', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_pillow_talk', 'angry_end');
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterCondomBuyApology(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Apologize', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('You open your mouth to respond but the argument dies in your throat.');
    // TODO-QSP: dynamic text: "I'm sorry," you say, looking regretfully at <<$npcdesc>>. "You're right. It's n...
    scene.text(`"I'm sorry," you say, looking regretfully at ${((s as any).npcdesc ?? 0)}. "You're right. It's not fair that I'm making you spend money on something that's both our problem."`);
    if (qspFunc(s, 'money', 'can_afford', 2000) !== 1) {
      scene.actions([
        { label: 'I don\'t have a lot of money', handler: (st: GameState) => {
    ((s as any).pc_buy_condoms ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"It\'s just..." You sigh. "Money\'s really tight for me right now. As dumb as it sounds, I can\'t afford to buy condoms. So that\'s why I have to rely on you. Does that make sense?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods, maybe a little begrudgingly, but he seems understanding at le...
    scene.text(`${((s as any).npcdesc ?? 0)} nods, maybe a little begrudgingly, but he seems understanding at least.`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
      ]);
    }
    scene.actions([
      { label: 'You\'ll buy some condoms', handler: (st: GameState) => {
    ((s as any).pc_buy_condoms ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I\'ll try to buy some condoms for next time. Does that sound fair?"');
    // TODO-QSP: dynamic text: <<$npcdesc>> nods, accepting your apology.
    scene.text(`${((s as any).npcdesc ?? 0)} nods, accepting your apology.`);
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBetterWithout(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  ((s as any).sex_ev ?? {})['better_without'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'smile2');
  if (((s as any).sex_ev ?? 0)?.['npc_insist_no_condom'] === 1  ||  ((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
    // TODO-QSP: dynamic text: "By the way," you say, looking at <<$npcdesc>>. "You were right. It was better w...
    scene.text(`"By the way," you say, looking at ${((s as any).npcdesc ?? 0)}. "You were right. It was better without the condom."`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['condom'] === 1) {
      // TODO-QSP: dynamic text: "It was so much better without the condom," you smile sweetly at <<$npcdesc>>.
      scene.text(`"It was so much better without the condom," you smile sweetly at ${((s as any).npcdesc ?? 0)}.`);
    } else {
      // TODO-QSP: dynamic text: "I'm glad we didn't use a condom," you smile sweetly at <<$npcdesc>>.
      scene.text(`"I'm glad we didn't use a condom," you smile sweetly at ${((s as any).npcdesc ?? 0)}.`);
    }
  }
  if ((((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] < 1  ||  ((s as any).npc_know_bc_not_effective ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['accidental_creampie_convo'] < 1  &&  (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
    qspCall(s, 'sex_ev_talk', 'boy_accidental_creampie');
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
          scene.text('"It was so hot watching my cum leak out of you," he grins.');
          scene.actions([
            { label: 'It felt good', handler: (st: GameState) => {
    scene.text('"It felt good," you nod agreeably. "Totally worth it."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        } else {
          scene.text('"It felt so good when I came inside you," he smiles.');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    scene.text('"It felt good for me too," you nod in agreement. "Totally worth it."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        }
        scene.actions([
          { label: 'Worry', handler: (st: GameState) => {
    scene.text('Your smile falters at that, reminding you again of what\'s leaking out of your pussy.');
    scene.text('<i>I hope I\'ll be okay...</i> you think to yourself.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
          scene.text('"I told you we didn\'t need one," he says smugly.');
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        } else {
          scene.text('"It was really good," he smiles back.');
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
        if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_surprise'] === 1) {
          scene.text('"Sorry I... uhh... you know..." He seems embarrassed. "I promised I wouldn\'t come inside you but I ended up doing it anyways."');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pussy still leaking his cum and blushes.
            scene.text(`${((s as any).npcdesc ?? 0)} looks at your pussy still leaking his cum and blushes.`);
          } else {
            // TODO-QSP: dynamic text: <<$npcdesc>> looks at your pussy and blushes.
            scene.text(`${((s as any).npcdesc ?? 0)} looks at your pussy and blushes.`);
          }
        } else {
          scene.text('"Your pussy was amazing."');
          scene.text('"So was your dick," you smile.');
        }
        if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
          if (((s as any).sex_ev ?? 0)?.['ma_pill'] > 0) {
            if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
              scene.text('"Good thing you\'ve got that morning after pill."');
            } else {
              if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 2) {
                scene.text('"Good thing you had that morning after pill."');
              }
            }
            scene.text('"Yeah," you nod. "So, no harm done."');
            scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
          } else {
            // TODO-QSP: dynamic text: "Is it okay that I... you know...?" <<$npcdesc>> eyes your pussy, his cum still ...
            scene.text(`"Is it okay that I... you know...?" ${((s as any).npcdesc ?? 0)} eyes your pussy, his cum still leaking from it.`);
            qspCall(s, 'sex_ev_pillow_talk', 'creampie_okay');
          }
        } else {
          if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"But you\'re on birth control, right?"');
            scene.text('"Yeah," you nod. "So, no harm done."');
            scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
          } else {
            qspCall(s, 'sex_ev_pillow_talk', 'creampie_okay');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
          scene.text('"Told you we didn\'t need one," he laughs.');
        } else {
          scene.text('"It was really good," he smiles back.');
          scene.actions([
            { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          ]);
        }
        if (((s as any).sex_ev ?? 0)?.['dont_need_condom'] === 1) {
          scene.actions([
            { label: 'You were right', handler: (st: GameState) => {
    scene.text('"I guess not," you say, smiling back.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        }
        qspCall(s, 'sex_ev_pillow_talk', 'thank_no_creampie');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCondomWasntBad(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['condom_wasnt_bad'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  // TODO-QSP: dynamic text: "Using condoms wasn't so bad after all," you tell <<$npcdesc>>.
  scene.text(`"Using condoms wasn't so bad after all," you tell ${((s as any).npcdesc ?? 0)}.`);
  if (((s as any).npc_dislike_condom ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.text('"They aren\'t my favorite," he admits to you. "Can\'t say that I enjoy using them as much as not. The way they squeeze my dick is awful. So tight I can barely feel anything."');
  } else {
    if (((s as any).npc_dislike_condom ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"Yeah, right?" he smiles back at you. "Not as good as bareback sex, but really not too bad."');
    } else {
      if (((s as any).npc_dislike_condom ?? 0)?.[String((s as any).npcID ?? 0)] < 0) {
        scene.text('"They really don\'t bother me that much," he smiles back. "I don\'t know why guys make such a big fuss about wearing one."');
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bareback_next_time'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
  // TODO-QSP: dynamic text: "Do you think we could skip the condom next time?" you ask <<$npcdesc>>.
  scene.text(`"Do you think we could skip the condom next time?" you ask ${((s as any).npcdesc ?? 0)}.`);
  if (((s as any).sex_ev ?? 0)?.['npc_condom_motive'] === 'adamant'  ||  ((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'bareback_next_time1_adamant'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['npc_condom_motive'] === 'pregnancy') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'bareback_next_time1_pregnancy'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['npc_condom_motive'] === 'safety') {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'bareback_next_time1_safety'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime1Adamant(s: GameState, scene: SceneBuilder): void {
  scene.text('"I don\'t know," he says, shaking his head. "I\'d much rather be safe than sorry."');
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime1Pregnancy(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    scene.text('"I don\'t know," he says, shaking his head. "The risk of you getting pregnant is just..."');
  } else {
    scene.text('"I don\'t know," he says, shaking his head. "What if you get pregnant?"');
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime1Safety1(s: GameState, scene: SceneBuilder): void {
  scene.text('"I don\'t know," he says, shaking his head. "Isn\'t it better to be safe? Not just with pregnancy but all things."');
  scene.text('It\'s probably safe to assume he\'s talking about STD\'s.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him if he\'s sleeping around', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
    scene.text('"Well, are you sleeping with a lot of girls?" you ask.');
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] > 5) {
      scene.text('"Tons," he grins.');
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: '"Just my girlfriend," he ' + iif($npc_fidelity[$npcID] = 'cheater' or $npc_fidelity[$npcID] = 'open...
      } else {
        // TODO-QSP: '"Erm, no, not really," he says, ' + iif(npc_insecure[$npcID] > 0, 'shyly.', 'awkwardly, not sure wh...
      }
    }
  } },
  ]);
  scene.build();
}

function enterBarebackNextTime1Safety2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] > 5) {
    scene.actions([
      { label: '', handler: (st: GameState) => {
    scene.text('something');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
  // TODO-QSP: dynamic text: "Next time, let's do it without a condom," you smile at <<$npcdesc>>.
  scene.text(`"Next time, let's do it without a condom," you smile at ${((s as any).npcdesc ?? 0)}.`);
  if (((s as any).sex_ev ?? 0)?.['condom_motive'] === 'adamant') {
    scene.text('"I thought you didn\'t want to do it without one?" he says, looking amused.');
    scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'bareback_next_time2_adamant'] }]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['condom_motive'] === 'pregnancy') {
      scene.text('"I thought you were afraid of getting pregnant?" he says, looking amused.');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'bareback_next_time2_pregnancy'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_motive'] === 'safety') {
        scene.text('"I thought you wanted to be safe?" he says, looking amused.');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'bareback_next_time2_safety'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime2Adamant(s: GameState, scene: SceneBuilder): void {
  scene.text('"I don\'t know," he says, shaking his head. "I\'d much rather be safe than sorry."');
  // TODO-QSP: end
  scene.build();
}

function enterBarebackNextTime2Pregnancy(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'When it\'s safe in my cycle', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
      if (((s as any).stat ?? 0)?.['safe_days_remaining'] >= 7) {
        scene.text('"It should be a safe day in my cycle right now," you explain. "So if it still is, then I wouldn\'t mind going without one."');
      } else {
        scene.text('"It should be a safe day in my cycle right now," you explain. "So if it still is, then I wouldn\'t mind going without one."');
      }
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        scene.text('"Will you let me cum inside you?" he asks excitedly.');
        scene.actions([
          { label: 'You don\'t know...', handler: (st: GameState) => {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
      scene.text('"I don\'t know... Doing it raw is one thing but creampies..."');
      scene.text('"Sorry, I didn\'t mean to pressure you. It\'s not that big a deal. We don\'t have to."');
      scene.actions([
        { label: 'Thanks', handler: (st: GameState) => {
    scene.text('"Thanks," you reply warmly.');
    // TODO-QSP: dynamic text: "Yeah, no problem," <<$npcdesc>> smiles back.
    scene.text(`"Yeah, no problem," ${((s as any).npcdesc ?? 0)} smiles back.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
      scene.text('"I don\'t know... Doing it raw is one thing but creampies..."');
      // TODO-QSP: dynamic text: "Come on, please?" <<$npcdesc>> asks, practically begging.
      scene.text(`"Come on, please?" ${((s as any).npcdesc ?? 0)} asks, practically begging.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'bareback_next_time2_pregnancy_creampie_menu'] },
        ]);
      }
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'probably_safe') {
        scene.text('"Well, it\'s just that today is a little bit of a risky day in my cycle," you explain. "But if we wait a few days..."');
        scene.text('"It\'ll be safe?" he grins.');
        scene.text('"Exactly," you smile back."');
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBarebackNextTime2PregnancyCreampieMenu(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'ll think about it', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.mp4');
    scene.text('"I\'ll think about it," you laugh.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "I'll settle for that," <<$npcdesc>> grins back.
      scene.text(`"I'll settle for that," ${((s as any).npcdesc ?? 0)} grins back.`);
    } else {
      // TODO-QSP: dynamic text: "It'll feel really good," <<$npcdesc>> promises.
      scene.text(`"It'll feel really good," ${((s as any).npcdesc ?? 0)} promises.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'smile');
    scene.text('"Sure," you smile. "May as well."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterBarebackNextTime2Safety(s: GameState, scene: SceneBuilder): void {
  scene.text('"I don\'t know," he says, shaking his head. "Isn\'t it better to be safe? Not just with pregnancy but all things."');
  scene.text('It\'s probably safe to assume he\'s talking about STD\'s.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask him if he\'s sleeping around', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
    scene.text('"Well, are you sleeping with a lot of girls?" you ask.');
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex'  &&  ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] > 5) {
      scene.text('"Tons," he grins.');
    } else {
      if (((s as any).npc_girlfriend ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: '"Just my girlfriend," he ' + iif($npc_fidelity[$npcID] = 'cheater' or $npc_fidelity[$npcID] = 'open...
      } else {
        // TODO-QSP: '"Erm, no, not really," he says, ' + iif(npc_insecure[$npcID] > 0, 'shyly.', 'awkwardly, not sure wh...
      }
    }
    ((s as any).sex_ev ?? {})['recent_partners'] = 0;
    (s as any).i = 0;
    // TODO-QSP: :recent_sex_partners_month
    if (((s as any).npc_last_sex ?? 0)?.[String((s as any).i ?? 0)] > ((s as any).daystart ?? 0) - 30) {
      ((s as any).sex_ev ?? {})['recent_partners'] = (((s as any).sex_ev ?? {})['recent_partners'] ?? 0) + (1);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).npc_last_sex ?? {}).length) {
      // TODO-QSP: jump 'recent_sex_partners_month'
    }
    if (((s as any).sex_ev ?? 0)?.['recent_partners'] <= 0) {
    }
  } },
  ]);
  scene.build();
}

function enterAllTheseUsedCondoms(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['many_used_condoms'] === 0  &&  ((s as any).sex_ev ?? 0)?.['condoms_used'] + ((s as any).sex_ev ?? 0)?.['pc_condoms_used'] > 5) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterSorryCondoms1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condoms_used'] + ((s as any).sex_ev ?? 0)?.['pc_condoms_used'] > 0  &&  ((s as any).sex_ev ?? 0)?.['wish_no_condoms_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['pc_wants_condoms'] === 1) {
    scene.actions([
      { label: 'Sorry about the condom', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['wish_no_condoms_talk'] = 1;
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      scene.text('"I\'m really sorry about the condoms by the way," you say, looking meaningfully at the used rubber he tossed aside. "I don\'t want to use them either, but it\'s just too dangerous to go without one today."');
    } else {
      scene.text('"I\'m really sorry about the condoms by the way," you say, looking meaningfully at the used rubber he tossed aside. "I don\'t want to use them either, but I just can\'t risk getting pregnant."');
    }
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"You say that like I don\'t use condoms regularly." He looks amused.');
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "Don't be sorry. I'm not the one who has to deal with the consequences if you ge...
        scene.text(`"Don't be sorry. I'm not the one who has to deal with the consequences if you get pregnant." ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} softly rests his hand on the side of your hip. "It's your body."`);
      } else {
        scene.text('"Would\'ve been better without it," he replies wistfully.');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWishNoCondoms1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['condom_opinion_talk'] = 1;
  ((s as any).sex_ev ?? {})['wish_no_condoms_talk'] = 1;
  if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
    scene.actions([
      { label: 'Want to be creampied', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['want_creampie_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I wish we didn\'t need to use condoms," you sigh. "Creampies feel so much better."');
    qspCall(s, 'sex_ev_pillow_talk', 'wish_no_condoms2');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'They feel bad', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I wish we didn\'t need to use condoms," you sigh, looking at the discarded rubbers with disgust. "I hate how they feel inside me. They\'re so <i>latex-y</i>. Ugh."');
    qspCall(s, 'sex_ev_pillow_talk', 'wish_no_condoms2');
  } },
    { label: 'They\'re such a hassle', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I wish we didn\'t need to use condoms," you sigh, looking at the discarded rubbers with disgust and annoyance. "They\'re such a pain in the ass, always needing to make sure you\'re wrapped up before we start. And if I want to switch back to giving some head, we have to throw it away or I have to suck on rubber."');
    qspCall(s, 'sex_ev_pillow_talk', 'wish_no_condoms2');
  } },
  ]);
  scene.build();
}

function enterWishNoCondoms2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).daystart ?? 0) > ((s as any).npc_bc_promise ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).npc_bc_promise ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    if ((!((s as any).pillcon2 ?? 0))) {
      scene.text('"But you said you were gonna start birth control, didn\'t you?"');
      if (((s as any).npc_bc_promise ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0)  ||  ((s as any).npc_bc_promise ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).daystart ?? 0) - 1) {
        scene.actions([
          { label: 'Give me some time (laugh)', handler: (st: GameState) => {
    // TODO-QSP: iif(npc_bc_promise[$npcID] = daystart, '"Yeah, maybe <i>later</i>," you giggle. "I only just told yo...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'Give me some time (annoyed)', handler: (st: GameState) => {
    // TODO-QSP: iif(npc_bc_promise[$npcID] = daystart, '"Yeah, maybe <i>later</i>," you scowl. "I only just told you...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        scene.actions([
          { label: 'Oops, forgot', handler: (st: GameState) => {
    scene.text('You blink.');
    scene.text('"Oh. Yeah. I forgot about that..." You smile sheepishly.');
    // TODO-QSP: dynamic text: "Are you sure this is a good idea?" <<$npcdesc>> asks, looking concerned.
    scene.text(`"Are you sure this is a good idea?" ${((s as any).npcdesc ?? 0)} asks, looking concerned.`);
    scene.text('"What? Why?"');
    scene.text('"You know that birth control usually involves remembering to take a pill, right?"');
    scene.actions([
      { label: 'Reconsider', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('You stop to consider the question.');
    scene.text('<i>Is</i> this a good idea?');
    // TODO-QSP: iif(age < 20, 'Forgetfulness could be the difference between a happy sex life and becoming a teen mo...
    scene.actions([
      { label: 'Maybe stick to condoms', handler: (st: GameState) => {
    ((s as any).npc_bc_promise ?? {})[String((s as any).npcID ?? 0)] = 0;
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    scene.text('"Maybe..." you say slowly. "... we should just stick to condoms..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> smiles at you, but also breathes a sigh, looking relieved.
    scene.text(`${((s as any).npcdesc ?? 0)} smiles at you, but also breathes a sigh, looking relieved.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'No, you\'ll follow through', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk2.jpg');
    // TODO-QSP: dynamic text: "No," you shake your head and look into <<$npcdesc>>'s eyes. "I'll be good, I pr...
    scene.text(`"No," you shake your head and look into ${((s as any).npcdesc ?? 0)}'s eyes. "I'll be good, I promise. I won't mess up with my future on the line."`);
    // TODO-QSP: iif(npc_childfree[$npcID] = 0, 'He stares back at you, looking concerned but doesn''t say anything f...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
      { label: 'It\'ll be fine', handler: (st: GameState) => {
    scene.text('"It\'ll be fine," you say, smiling gently. "Just trust me."');
    scene.text('He gives you a look but doesn\'t say anything further and lets the matter drop.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'It\'ll be <i>fiiiiine</i>', handler: (st: GameState) => {
    scene.text('"Don\'t worry about it," you say, casually brushing it off. "It\'ll be <i>fiiiiine</i>."');
    scene.text('He stares back at you, looking concerned but doesn\'t say anything further and lets the matter drop.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Not if you get the shot', handler: (st: GameState) => {
    scene.text('"I don\'t need to remember anything if I get the shot," you grin back.');
    scene.text('"Except when you need to renew it." Despite the jab, he smiles back looking nearly excited.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Eventually...', handler: (st: GameState) => {
    scene.text('"Yeah, yeah," you say. "I\'ll get to it eventually."');
    // TODO-QSP: dynamic text: <<$npcdesc>> gives you a look but doesn't say anything.
    scene.text(`${((s as any).npcdesc ?? 0)} gives you a look but doesn't say anything.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).npc_know_bc_not_effective ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "I can't wait until your birth control is ready," <<$npcdesc>> says.
        scene.text(`"I can't wait until your birth control is ready," ${((s as any).npcdesc ?? 0)} says.`);
        scene.text('"Me either," you agree.');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        ((s as any).npc_know_bc_not_effective ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"But you said you were gonna start birth control, didn\'t you?"');
        scene.text('"I did," you smile. "I\'m on the pill now. But it\'s not ready yet. Still going to be a while longer until it\'s safe."');
        scene.text('"Can\'t come soon enough," he smiles back.');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      }
    }
  } else {
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['want_creampie_talk'] === 1) {
        // TODO-QSP: dynamic text: "Yeah," <<$npcdesc>> sighs, equally as deep and wistful as yours. "There's no fe...
        scene.text(`"Yeah," ${((s as any).npcdesc ?? 0)} sighs, equally as deep and wistful as yours. "There's no feeling quite like coming inside a girl... But gotta be safe."`);
      } else {
        // TODO-QSP: dynamic text: "Safety is important," <<$npcdesc>> says. "We don't want to be taking chances do...
        scene.text(`"Safety is important," ${((s as any).npcdesc ?? 0)} says. "We don't want to be taking chances do we?"`);
      }
      qspCall(s, 'sex_ev_talk', 'start_bc_talk1');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Yeah, safety first..." you say, feeling resigned. "I just wish we didn\'t need to use condoms to be safe."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Pleasure is more important', handler: (st: GameState) => {
    scene.text('"Who cares about safety?" you grumble. "Getting off is more important..."');
    if (((s as any).sex_ev ?? 0)?.['orgasm_count'] > 0) {
      scene.text('"The condom didn\'t seem to stop you from doing that," he snickers and you scowl in annoyance.');
    } else {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).know_childfree ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"Maybe for you," he replies, frowning. "I don\'t want any kids of mine running around out there. From you or anybody else."');
      } else {
        scene.text('"I think we can agree to disagree," he frowns.');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['want_creampie_talk'] === 0) {
        if (((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
          // TODO-QSP: dynamic text: "Hey, but we skipped it this time and it turned out alright, didn't it?" <<$npcd...
          scene.text(`"Hey, but we skipped it this time and it turned out alright, didn't it?" ${((s as any).npcdesc ?? 0)} points out.`);
          scene.actions([
            { label: 'He\'s right', handler: (st: GameState) => {
    scene.text('"That is true..." you say slowly.');
    if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      // TODO-QSP: dynamic text: "Maybe we don't have to use them?" <<$npcdesc>> suggests. "Start going bareback?...
      scene.text(`"Maybe we don't have to use them?" ${((s as any).npcdesc ?? 0)} suggests. "Start going bareback?"`);
      qspCall(s, 'sex_ev_talk', 'bareback_think');
      qspCall(s, 'sex_ev_talk', 'bareback_too_risky');
      qspCall(s, 'sex_ev_talk', 'bareback_agree');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
            { label: 'I guess', handler: (st: GameState) => {
    scene.text('"I guess so..." you say hesitantly.');
    if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      // TODO-QSP: dynamic text: "Maybe we don't have to use them?" <<$npcdesc>> suggests. "Start going bareback?...
      scene.text(`"Maybe we don't have to use them?" ${((s as any).npcdesc ?? 0)} suggests. "Start going bareback?"`);
      qspCall(s, 'sex_ev_talk', 'bareback_think');
      qspCall(s, 'sex_ev_talk', 'bareback_too_risky');
      qspCall(s, 'sex_ev_talk', 'bareback_agree');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
            { label: 'We got lucky', handler: (st: GameState) => {
    scene.text('"We were lucky," you say with a roll of your eyes. "If we keep going with no protection, I\'m practically guaranteed to end up with one of your loads inside me on a bad day."');
    if (((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      if ((((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (Math.floor(Math.random() * 3) + 1))  &&  (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 2) + 1))) {
        ((s as any).sex_ev ?? {})['boy_pill_suggest'] = 1;
        scene.text('"That\'s what the morning after pill is for," he argues. "Any time we fuck up, just get a pill."');
        qspCall(s, 'sex_ev_talk', 'bareback_think_pill');
        qspCall(s, 'sex_ev_talk', 'bareback_agree');
        qspCall(s, 'sex_ev_talk', 'bareback_pill_expense');
      } else {
        if ((((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (Math.floor(Math.random() * 3) + 1))  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  ((s as any).npc_know_bc_not_effective ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
          scene.text('"Then why not start birth control?" he asks. "If you\'re on birth control, it won\'t matter whether or not we use condoms."');
          qspCall(s, 'sex_ev_talk', 'bareback_bc_suggest');
        } else {
          if (((s as any).npc_know_bc_not_effective ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"I can\'t wait until your birth control is ready," he says. "Then we can fuck without worry."');
            scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
          } else {
            // TODO-QSP: dynamic text: "Guess you have a point there," <<$npcdesc>> says ruefully. "It can be hard to p...
            scene.text(`"Guess you have a point there," ${((s as any).npcdesc ?? 0)} says ruefully. "It can be hard to pull out sometimes."`);
            scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
          }
        }
      }
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
          ]);
        } else {
          qspCall(s, 'sex_ev_talk', 'boy_accidental_creampie');
        }
        // TODO-QSP: dynamic text: "Sorry about that again," <<$npcdesc>> blushes.
        scene.text(`"Sorry about that again," ${((s as any).npcdesc ?? 0)} blushes.`);
      } else {
        // TODO-QSP: end !}
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['npc_doesnt_want_condoms'] === 1) {
    // TODO-QSP: dynamic text: "Hey, <i>I</i> said I didn't want to use them," <<$npcdesc>> says. "You're the o...
    scene.text(`"Hey, <i>I</i> said I didn't want to use them," ${((s as any).npcdesc ?? 0)} says. "You're the one who insisted."`);
    qspCall(s, 'sex_ev_pillow_talk', 'wish_no_condoms_response_no_kids');
  } else {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      // TODO-QSP: dynamic text: "But you said it was a danger day, didn't you?" <<$npcdesc>> asks.
      scene.text(`"But you said it was a danger day, didn't you?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.text('"Yeah," you reply wistfully. "Had to be safe. But that doesn\'t mean I have to like it."');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      if (((s as any).sex_ev ?? 0)?.['condom_motive'] !== '') {
        // TODO-QSP: dynamic text: "You're the one who asked to use them," <<$npcdesc>> points out.
        scene.text(`"You're the one who asked to use them," ${((s as any).npcdesc ?? 0)} points out.`);
        qspCall(s, 'sex_ev_pillow_talk', 'wish_no_condoms_response_no_kids');
      } else {
        // TODO-QSP: dynamic text: "Tell me about it," <<$npcdesc>> sighs back. "At least you don't need to be the ...
        scene.text(`"Tell me about it," ${((s as any).npcdesc ?? 0)} sighs back. "At least you don't need to be the one to wrap it around your dick."`);
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWishNoCondomsResponseNoKids(s: GameState, scene: SceneBuilder): void {
  if (((s as any).kid ?? 0) < 1) {
    if (((s as any).birth_control ?? 0)?.['using_bc'] > 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.actions([
        { label: 'Birth control hasn\'t kicked in', handler: (st: GameState) => {
    scene.text('"Only cause my birth control hasn\'t kicked in yet," you grumble in annoyance. "And I\'m not ready for kids. The moment I\'m sure I\'m safe, we\'re going bareback."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).birth_control ?? 0)?.['using_bc'] <= 0) {
        scene.actions([
          { label: 'Not on birth control', handler: (st: GameState) => {
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"You know I\'m not on birth control," you sigh in return. "I hate condoms but it\'s too dangerous to go without them."');
    } else {
      qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
      scene.text('"I\'m not on birth control," you sigh in return. "I hate condoms but it\'s too dangerous to go without them. What if I get pregnant?"');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      }
    }
    scene.actions([
      { label: 'A baby would ruin my future', handler: (st: GameState) => {
    if (((s as any).birth_control ?? 0)?.['using_bc'] <= 0) {
      qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
      scene.text('"I can\'t afford to have a baby," you grumble back. "Do you have any idea how badly getting pregnant right now would mess up my future? I have things I want to do. I can\'t do them if I\'m stuck with a kid on my hip. Condoms are a smaller price to pay than an unplanned pregnancy."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I can\'t afford to have a baby," you grumble back. "Do you have any idea how badly getting pregnant right now would mess up my future? I have things I want to do. I\'m on birth control but that can fail just like condoms can break. Good protection is all about layers. And all my dreams are ruined if I end up with a kid right now. Condoms are a smaller price to pay than an unplanned pregnancy."');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
    scene.actions([
      { label: 'It\'s a danger day (annoyed)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      scene.text('"You know I\'m in my fertile stage right now!" you hiss. "Of course I wanted a condom today! I could get pregnant!"');
    } else {
      ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
      scene.text('"I\'m in my fertile stage right now you moron," you say with no small amount of irritation. "Of course I wanted a condom today! I could get pregnant!"');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t want to get pregnant', handler: (st: GameState) => {
    if (((s as any).kid ?? 0) === 1) {
      scene.text('"I just don\'t want to get pregnant," you sigh in return. "I\'ve already got one kid. I\'m not ready for more. Condoms before kids."');
    } else {
      if (((s as any).kid ?? 0) > 1) {
        // TODO-QSP: dynamic text: "I just don't want to get pregnant," you sigh in return. "I've already got <<kid...
        scene.text(`"I just don't want to get pregnant," you sigh in return. "I've already got ${((s as any).kid ?? 0)} kids. I'm not ready for more. Condoms before kids."`);
      } else {
        scene.text('"Condoms before kids," you sigh in return. "I hate condoms but not so much that I\'m okay with getting pregnant. I am <i>not</i> ready to be a mother."');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Can\'t afford to get pregnant (money)', handler: (st: GameState) => {
    if (((s as any).kid ?? 0) === 1) {
      scene.text('"Babies are expensive," you sigh in return. "I\'ve already got one kid. There\'s no way I could afford to care for another right now. I hate condoms but they\'re definitely cheaper than kids."');
    } else {
      if (((s as any).kid ?? 0) > 1) {
        // TODO-QSP: dynamic text: "I can't afford to have more kids," you sigh in return. "I've already got <<kid>...
        scene.text(`"I can't afford to have more kids," you sigh in return. "I've already got ${((s as any).kid ?? 0)}. There's no way I could afford to have more. I hate condoms but they're definitely cheaper than kids."`);
      } else {
        if (((s as any).birth_control ?? 0)?.['using_bc'] <= 0) {
          qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
          scene.text('"Babies are expensive," you sigh in return. "Maybe one day, but there\'s no way I could afford to care for a baby right now. I hate condoms but they\'re cheaper than raising a kid."');
        } else {
          qspCall(s, 'sex_ev_stats', 'birth_control_know');
          scene.text('"Babies are expensive," you sigh in return. "I\'m on birth control but even the pill or the shot can fail just like condoms can break. Good protection is all about layers. I hate condoms but they\'re cheaper than raising a kid."');
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterAlwaysCondoms1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['condom_conscious_talk'] = 1;
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    scene.text('"So... you always use a condom when you hook up with someone?" you ask.');
  } else {
    // TODO-QSP: dynamic text: "So you always use a condom, huh?" you ask <<$npcdesc>>.
    scene.text(`"So you always use a condom, huh?" you ask ${((s as any).npcdesc ?? 0)}.`);
  }
  if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sex_ev ?? {})['no_kids'] = 1;
    scene.text('"Always," he nods. "It\'s just safer for both of us. Neither of us want an STD. And I especially don\'t want you to get pregnant."');
  } else {
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      ((s as any).sex_ev ?? {})['condom_safety'] = 1;
      scene.text('"Always," he nods. "It\'s just safer for both of us."');
    } else {
      if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        ((s as any).sex_ev ?? {})['condom_for_girls'] = 1;
        scene.text('"Well, I know that girls don\'t like to have to ask. I\'d rather assume they want one and use it than risk upsetting them by needing to ask."');
      } else {
        scene.text('"Kind of just habit, I suppose. Gotta wrap it before you tap it, y\'know?"');
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['condom_safety'] === 1) {
    scene.actions([
      { label: 'Safety first', handler: (st: GameState) => {
    scene.text('"Yeah," you nod back. "Safety first. Glad you see it the same way."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['condom_for_girls'] === 1) {
    scene.actions([
      { label: 'What a gentleman!', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
    scene.text('"A gentleman!" you coo. "Just what a girl likes');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Very considerate of him', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"That\'s really considerate of you," you remark. "A lot of guys try to talk girls into going bareback, not thinking about the consequences. It\'s nice to be with a guy who\'s thinking about that stuff first instead of later."');
    // TODO-QSP: dynamic text: "Well I think I'd find it pretty annoying if I got a bad case of the crabs too,"...
    scene.text(`"Well I think I'd find it pretty annoying if I got a bad case of the crabs too," ${((s as any).npcdesc ?? 0)} laughs back.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Doesn\'t it feel bad?', handler: (st: GameState) => {
    scene.text('"Don\'t condoms kind of suck for you though?" you ask. "Isn\'t it hard to feel with one on?"');
    if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.text('"I think sex is pleasurable enough without the added risk. Plus I think a bad case of the crabs would suck a lot more than wearing a condom," he laughs back.');
    } else {
      scene.text('"I don\'t mind it. Actually, I think it\'s kinda comfortable in its own way. Not as good as raw pussy, but it squeezes my dick really tight."');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterLoveGoingBareback(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['bareback_pillowtalk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
    // TODO-QSP: dynamic text: "I love not using condoms with you," you grin at <<$npcdesc>>.
    scene.text(`"I love not using condoms with you," you grin at ${((s as any).npcdesc ?? 0)}.`);
  } else {
    scene.text('"I love not using condoms," you sigh happily.');
  }
  scene.text('"Yeah?" he grins back.');
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'Thank you birth control', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Saves on the hassle and lets me feel everything. I love being on <<$birth_contr...
    scene.text(`"Saves on the hassle and lets me feel everything. I love being on ${((s as any).birth_control ?? 0)?.['type']}.`);
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"Didn\'t know that you were. That\'s a good thing to know."');
    } else {
      // TODO-QSP: dynamic text: "I love you being on <<$birth_control['type']>> too," he snickers.
      scene.text(`"I love you being on ${((s as any).birth_control ?? 0)?.['type']} too," he snickers.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Feels good', handler: (st: GameState) => {
    scene.text('"It feels good so good to do it raw," you say with deep satisfaction. "Condoms get in the way. Bareback is better."');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Birth control is awesome..." <<$npcdesc>> grins.
        scene.text(`"Birth control is awesome..." ${((s as any).npcdesc ?? 0)} grins.`);
      } else {
        // TODO-QSP: dynamic text: "You got that right," <<$npcdesc>> says.
        scene.text(`"You got that right," ${((s as any).npcdesc ?? 0)} says.`);
      }
    } else {
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
        // TODO-QSP: dynamic text: "Good thing today wasn't a danger day," <<$npcdesc>> smiles back at you.
        scene.text(`"Good thing today wasn't a danger day," ${((s as any).npcdesc ?? 0)} smiles back at you.`);
      } else {
        // TODO-QSP: dynamic text: "Yeah, it's pretty good," <<$npcdesc>> agrees.
        scene.text(`"Yeah, it's pretty good," ${((s as any).npcdesc ?? 0)} agrees.`);
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Feels natural', handler: (st: GameState) => {
    scene.text('"Condoms feel... <i>latexy</i>," you say, scrunching your nose in disgust. "Artificial. It\'s better when it\'s just your cock in my pussy and nothing in-between. It feels <i>right</i>."');
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "That's why I never use condoms," <<$npcdesc>> says smugly. "They're bad for the...
      scene.text(`"That's why I never use condoms," ${((s as any).npcdesc ?? 0)} says smugly. "They're bad for the environment."`);
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
        scene.text('"Well they <i>are</i> technically artificial," he chuckles to himself. "I don\'t think latex is a commonly occurring material in the wild."');
      } else {
        if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
          // TODO-QSP: dynamic text: "Good thing today wasn't a danger day," <<$npcdesc>> smiles back at you.
          scene.text(`"Good thing today wasn't a danger day," ${((s as any).npcdesc ?? 0)} smiles back at you.`);
        } else {
          // TODO-QSP: dynamic text: "Never thought of it that way," <<$npcdesc>> muses. "But I agree. It feels good....
          scene.text(`"Never thought of it that way," ${((s as any).npcdesc ?? 0)} muses. "But I agree. It feels good."`);
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'They\'re not sexy', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['mouth_cum_count'] > 0) {
      scene.text('"They\'re not very sexy," you say with a twist of your mouth. "Like if you want to come in my mouth, I need to pull it off first. I feel like some of the moment gets lost there."');
    } else {
      if (((s as any).sex_ev ?? 0)?.['facial_count'] > 0) {
        scene.text('"They\'re not very sexy," you say with a twist of your mouth. "Like if you want to come on my face, you need to pull it off before blowing your load. I feel like some of the moment gets lost there."');
      } else {
        scene.text('"They\'re not very sexy," you say with a twist of your mouth. "Like, it\'s just kind of weird to know when you\'re coming that there\'s basically a balloon of cum getting filled up inside me. Not to mention the cleanup afterwards. It\'s all very awkward."');
      }
    }
    if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Yeah I hate condoms," <<$npcdesc>> says. "Glad you agree."
      scene.text(`"Yeah I hate condoms," ${((s as any).npcdesc ?? 0)} says. "Glad you agree."`);
    } else {
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === 'when_safe'  &&  ((s as any).sex_ev ?? 0)?.['preg_risk'] !== 'danger') {
        // TODO-QSP: dynamic text: "It <i>is</i> kind of awkward isn't it?" <<$npcdesc>> says, nodding along with y...
        scene.text(`"It <i>is</i> kind of awkward isn't it?" ${((s as any).npcdesc ?? 0)} says, nodding along with your thoughts. "Good thing today wasn't a danger day."`);
      } else {
        // TODO-QSP: dynamic text: "It <i>is</i> kind of awkward isn't it?" <<$npcdesc>> says, nodding along with y...
        scene.text(`"It <i>is</i> kind of awkward isn't it?" ${((s as any).npcdesc ?? 0)} says, nodding along with your thoughts.`);
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterStopCondoms1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup'  &&  ((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    scene.actions([
      { label: 'We don\'t have to use condoms',  },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterThankNoCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pullout_thank'] === 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
    scene.actions([
      { label: 'Thanks for pulling out', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['pullout_thank'] = 1;
    scene.text('"Thanks for remembering to pull out," you say.');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text('"Wish I didn\'t have to," he sighs. "Coming inside a girl is the best feeling in the world."');
      if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
        scene.actions([
          { label: 'Not on birth control', handler: (st: GameState) => {
    scene.actions([
      { label: 'I wish you could too', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I wish you could <<$npc_lovername[$npcID]>>, I really do," you say wistfully. "...
    scene.text(`"I wish you could ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}, I really do," you say wistfully. "I love creampies too. But I'm not on birth control."`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Ew', handler: (st: GameState) => {
    scene.text('"Yech~!" you grimace in disgust. "Well that makes one of us."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).npc_dont_like_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"I know you don\'t like it when I come inside."');
        scene.actions([
          { label: 'He remembered!', handler: (st: GameState) => {
    scene.text('"Aww! You remembered!" you coo, touching his arm affectionately.');
    scene.text('"I try," he shrugs.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'He\'s sweet', handler: (st: GameState) => {
    scene.text('"You\'re so sweet, you know that?" you smile warmly, touching his arm affectionately.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['promise_no_creampie'] === 1) {
          scene.text('"Hey, I promised didn\'t I?"');
          if (((s as any).npc_pullout_failure_last_time ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"That didn\'t stop you last time," you snicker back.');
          } else {
            if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
              scene.text('"Didn\'t stop you that other time," you snicker back.');
            } else {
              scene.text('"I know. But some guys don\'t listen. I appreciate that you actually followed through."');
            }
          }
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        } else {
          scene.text('"No problem. Though you didn\'t ask me to. Would it have been a problem if I hadn\'t?"');
          if (((s as any).tabletkishot ?? 0) > 0  ||  ((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.actions([
              { label: 'I just like being extra safe', handler: (st: GameState) => {
    scene.text('"No," you shake your head. "I\'m on birth control so it probably would\'ve been fine. I just like being extra safe."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
              { label: 'I don\'t like creampies', handler: (st: GameState) => {
    ((s as any).npc_dont_like_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"It wouldn\'t have been a \'problem\'. I\'m on birth control. I just don\'t like getting creampied," you grimace. "It feels weird."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          } else {
            if (((s as any).pillcon2 ?? 0) > 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
              scene.actions([
                { label: 'Birth control hasn\'t kicked in', handler: (st: GameState) => {
    ((s as any).npc_know_start_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Probably," you smile wryly. "My birth control hasn\'t kicked in yet."');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text('"Tell me when it does," he says. "I\'ll come to pump you full of cum."');
      scene.actions([
        { label: 'We\'ll see', handler: (st: GameState) => {
    scene.text('"We\'ll see," you smirk.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Me too', handler: (st: GameState) => {
    scene.text('"Me too," you grin back. "I want to feel my pussy overflowing with you."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Patience', handler: (st: GameState) => {
    scene.text('"You\'ll just have to be patient," you smirk.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Gulp', handler: (st: GameState) => {
    scene.text('Suddenly, your throat goes dry and wetness spreads between your thighs simultaneously. The thought of his sperm filling you to the brim and overflowing from your snatch suddenly has you feeling...');
    scene.text('You gulp hard, shivering as you try to suppress the arousal washing over your body.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
              ]);
            } else {
              scene.actions([
                { label: 'I\'m not on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"I\'m not on birth control," you grimace. "Really, I shouldn\'t have even taken the chance. Or I should have said something. But it turned out okay. So thanks."');
    scene.text('You smile warmly at him.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
              ]);
            }
            scene.actions([
              { label: 'I don\'t like creampies', handler: (st: GameState) => {
    scene.text('"I don\'t like getting creampied," you grimace. "It feels weird."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
          scene.actions([
            { label: 'No but thanks anyways', handler: (st: GameState) => {
    scene.text('"No," you shake your head. "But thanks anyways. I thought it was considerate."');
    scene.text('You lean over, giving him a peck on the cheek.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            { label: 'Too intimate', handler: (st: GameState) => {
    ((s as any).know_intimate_creampies ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"Too intimate for me," you grimace. "I have to really trust a guy before I let them do something like that, you know?"');
    scene.text('"You should say something next time then."');
    scene.text('"Probably," you say with an embarrassed smile. "I didn\'t want to ruin the mood..."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
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

function enterThankNoCreampie2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRiskyCreampieCare1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_risky_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).sex_ev ?? 0)?.['risky_creampie'] + 10  &&  ((s as any).sex_ev ?? 0)?.['risky_creampie'] > 0  &&  ((s as any).sex_ev ?? 0)?.['no_condom'] === 1  &&  ((s as any).sex_ev ?? 0)?.['careful_creampie_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
    scene.actions([
      { label: 'Need to be more careful about creampies', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['careful_creampie_talk'] = 1;
    scene.actions([
      { label: '(Concerned)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: "We need to start being more careful about protection," you murmur, anxiously ru...
      scene.text(`"We need to start being more careful about protection," you murmur, anxiously rubbing your belly as you feel ${((s as any).npcdesc ?? 0)}'s cum continue to slowly seep from your pussy. "We've had a lot of risky creampies lately. I'm going to get knocked up at this rate."`);
    } else {
      // TODO-QSP: dynamic text: "We need to start being more careful about protection," you murmur, anxiously ru...
      scene.text(`"We need to start being more careful about protection," you murmur, anxiously rubbing your belly, remembering the feeling of ${((s as any).npcdesc ?? 0)}'s cum filling your pussy. "We've had a lot of risky creampies lately. I'm gonna get knocked up at this rate."`);
    }
    if (((s as any).sex_ev ?? 0)?.['broken_condom'] === 1) {
      if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 3) + 1) === 1) {
        // TODO-QSP: dynamic text: "Hey, it's not my fault the condom broke!" <<$npcdesc>> protests.
        scene.text(`"Hey, it's not my fault the condom broke!" ${((s as any).npcdesc ?? 0)} protests.`);
      }
    } else {
      if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
        if (((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
          // TODO-QSP: dynamic text: "Maybe you should start the pill," <<$npcdesc>> suggests.
          scene.text(`"Maybe you should start the pill," ${((s as any).npcdesc ?? 0)} suggests.`);
          qspCall(s, 'sex_ev_pillow_talk', 'risky_creampie_care_bc');
        } else {
          if (((s as any).npc_condom_conscious ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
            scene.text('"Should we switch back to using condoms?" he asks.');
          } else {
            if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
              scene.text('"Maybe we should start using condoms?" he asks.');
            }
          }
          qspCall(s, 'sex_ev_pillow_talk', 'risky_creampie_care_condoms1');
        }
      }
    }
  } },
      { label: '(Dick drunk)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRiskyCreampieCareCondoms1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Maybe we should', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_condoms', 'reenable_condoms_code');
    scene.text('"That might be a good idea... It\'s been nice going bareback, but I think it\'s becoming clear we\'re not responsible enough to handle it." you say with a rueful smile.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'No, I trust you', handler: (st: GameState) => {
    scene.text('"No," you say with an affectionate smile and a shake of your head. "We don\'t need to go that far. I trust you. We just need to start being more careful."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterRiskyCreampieCareBc(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No way', handler: (st: GameState) => {
    scene.actions([
      { label: 'No hormonal stuff', handler: (st: GameState) => {
    scene.text('"Ew, no way I\'m doing that," you grimace. "Do you have any idea what the pill does? It\'s all hormones and sends them completely out of whack. It could cause anything from headaches and acne to making me literally want to kill myself. Or just completely kill my sex drive. Which I bet you\'d hate," you add with a wry smirk. "I might stop coming by altogether if I start the pill."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Hate pills', handler: (st: GameState) => {
    scene.text('"Ugh, I hate taking pills," you whine. " I hate having to remember to do it, I hate the taste, I hate that weird feeling of it getting stuck in the back of your throat, I hate it! I hate it! I hate it!"');
    scene.text('"Do you hate it more than the idea of getting pregnant?"');
    scene.text('"Hrmph..." You fold your arms and grumble to yourself, letting the subject drift off while you consider the question in silence.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    { label: 'I probably should', handler: (st: GameState) => {
    scene.text('"That might be a good idea... We are having an awful lot of sex after all," you reply with a teasing smirk.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Maybe', handler: (st: GameState) => {
    scene.text('"Maybe..." you say, twisting your lips as you consider the thought.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterCreampieOkay(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['creampie_okay'] = 1;
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    qspCall(s, 'sex_ev_pillow_talk', 'on_birth_control');
  } else {
    qspCall(s, 'sex_ev_talk', 'pc_have_morning_after');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you say reassuringly. "One creampie isn\'t gonna kill me. Besides, like I said, it felt good."');
    scene.text('He nods, relaxing a bit.');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.text('<i>Besides, I\'m on birth control,</i> you think to yourself. <i>But he doesn\'t need to know that.</i>');
    } else {
      scene.text('<i>I mean, what are the odds that something bad happens?</i>');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'It was worth it', handler: (st: GameState) => {
    scene.text('"It was worth it," you grin and he smiles back at you.');
    scene.text('<i>Besides, it\'s just one creampie,</i> you think to yourself. <i>What\'s the worst that could happen?</i>');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterOnBirthControl(s: GameState, scene: SceneBuilder): void {
  if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
    scene.actions([
      { label: 'I\'m on birth control', handler: (st: GameState) => {
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).tabletkishot ?? 0) > 0) {
        scene.text('"Oops, I forgot I haven\'t told you yet," you say. "I\'m on the shot now. I\'ll be fine."');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"Oops, I forgot I haven\'t told you yet," you say. "I\'m on the pill now. I\'ll be fine."');
        }
      }
    } else {
      if (((s as any).tabletkishot ?? 0) > 0) {
        scene.text('"It\'s fine. I\'m on the shot," you reassure him.');
      } else {
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.text('"It\'s fine. I\'m on the pill," you reassure him.');
        }
      }
    }
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to relax, relieved to find out you're on birth control.
    scene.text(`${((s as any).npcdesc ?? 0)} seems to relax, relieved to find out you're on birth control.`);
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } else {
    scene.actions([
      { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"It\'s okay," you smile, telling a barefaced lie. "I\'m on birth control."');
      // TODO-QSP: dynamic text: <<$npcdesc>> seems to relax, relieved that you're not upset.
      scene.text(`${((s as any).npcdesc ?? 0)} seems to relax, relieved that you're not upset.`);
    } else {
      scene.text('"It\'s okay," you smile, telling a barefaced lie. "I\'m on birth control."');
      // TODO-QSP: dynamic text: <<$npcdesc>> seems to relax, relieved that you're not upset.
      scene.text(`${((s as any).npcdesc ?? 0)} seems to relax, relieved that you're not upset.`);
    }
    scene.actions([
      { label: '<i>It\'ll be fine</i>', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: <i>I'm not gonna get pregnant,</i> you think to yourself. <i>Why bother stressin...
    scene.text(`<i>I'm not gonna get pregnant,</i> you think to yourself. <i>Why bother stressing ${((s as any).npcdesc ?? 0)} out about it?</i>`);
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: '<i>Wonder if I\'ll get pregnant</i>', handler: (st: GameState) => {
    scene.text('<i>I wonder if his baby is going to be swimming around inside me after this?</i>');
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
      { label: 'If I get pregnant, you better take responsibility (tease)', handler: (st: GameState) => {
    // TODO-QSP: '"If I get pregnant, you better take responsibility for this," you say with a smile to let him know ...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPlastered(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['plastered'] === 0) {
    ((s as any).sex_ev ?? {})['plastered'] = 1;
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['anus'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['butt'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['back'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['face'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['hands'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['stomach'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['tits'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
    if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
      ((s as any).sex_ev ?? {})['plaster_count'] = (((s as any).sex_ev ?? {})['plaster_count'] ?? 0) + (1);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['plaster_count'] > 3  &&  ((s as any).sex_ev ?? 0)?.['plastered'] === 1) {
    scene.actions([
      { label: 'You really plastered me', handler: (st: GameState) => {
    scene.actions([
      { label: 'Annoyed', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['plastered'] = 2;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
        scene.text('"Ugh, fuck!" you scowl, taking note of all the different places cum is coating or leaking from your body. "Did you have to get it everywhere? You completely plastered me! It\'s even in my fucking hair! Do you have any idea how much of a pain this is going to be to clean off?"');
      } else {
        scene.text('"Ugh, fuck!" you scowl, taking note of all the different places cum is coating or leaking from your body. "Did you have to get it everywhere? You completely plastered me! Do you have any idea how much of a pain this is going to be to clean off?"');
      }
    } else {
      if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
        scene.text('"Holy cow, you really plastered me, huh?" you scowl, taking note of all the different places cum is coating your body. "Did you have to get it everywhere? You completely plastered me! It\'s even in my fucking hair! Do you have any idea how much of a pain this is going to be to clean off?"');
      } else {
        scene.text('"Fucking shit!" you scowl, taking note of all the different places cum is coating or leaking from your body. "Did you have to get it everywhere? You completely plastered me! Do you have any idea how much of a pain this is going to be to clean off?"');
      }
    }
    if (((s as any).npc_bukakke_fetish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "But you look so fucking hot like that," <<$npcdesc>> says, unabashedly leering ...
      scene.text(`"But you look so fucking hot like that," ${((s as any).npcdesc ?? 0)} says, unabashedly leering at your cum-covered body. "Fuck, I want to walk you into the street looking like that."`);
      scene.text('"You\'re disgusting," you say, grimacing at the slimy feeling that coats every part of you.');
    } else {
      if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It\'s not my fault," he grumbles. "You\'re the one who made me come so many times."');
        scene.text('"But you didn\'t have to get it everywhere!" you sneer back, grimacing at the slimy feeling that coats every part of you.');
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
          scene.text('"It\'s not my fault," he grumbles. "You\'re the one who made me come so many times."');
          scene.text('"But you didn\'t have to get it everywhere!" you sneer back, grimacing at the slimy feeling that coats every part of you.');
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Amused', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['plastered'] = 2;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
        scene.text('"You really plastered me," you giggle, taking note of all the different places you can feel cum coating or leaking from your body. "How did you even manage to get it in my hair?"');
      } else {
        scene.text('"You really plastered me," you giggle, taking note of all the different places you can feel cum coating or leaking from your body. "How is there even this much in your balls to spray me with?"');
      }
    } else {
      if (((s as any).cum_loc ?? 0)?.['hair'] > 0) {
        scene.text('"You really plastered me," you giggle, taking note of all the different places you can feel cum on your body. "How did you even manage to get it in my hair?"');
      } else {
        scene.text('"You really plastered me," you giggle, taking note of all the different places you can feel cum on your body. "How is there even this much in your balls to spray me with?"');
      }
    }
    if (((s as any).npc_bukakke_fetish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "You look so fucking hot like that," <<$npcdesc>> says, unabashedly leering at y...
      scene.text(`"You look so fucking hot like that," ${((s as any).npcdesc ?? 0)} says, unabashedly leering at your cum-covered body. "Fuck, I want to walk you into the street looking like that."`);
      scene.actions([
        { label: 'Too far', handler: (st: GameState) => {
    scene.text('"I get bedroom play, but that\'s an extreme I\'m not gonna go to I think," you say, eyeballing him.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        { label: 'Joke', handler: (st: GameState) => {
    scene.text('"I like my new makeup," you smile teasingly. "Maybe I <i>will</i> go out like this."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"It\'s not my fault," he grumbles. "You\'re the one who made me come so many times."');
        scene.text('"I suppose that\'s true," you smile back.');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] === 0) {
          scene.text('"It\'s not my fault," he grumbles. "You\'re the one who made me come outside."');
          if (((s as any).birth_control ?? 0)?.['think_safe'] !== 1) {
            scene.actions([
              { label: 'No birth control (tease)', handler: (st: GameState) => {
    if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      scene.text('"I didn\'t know you wanted to become a daddy so badly," you say teasingly. "No birth control means no creampies on bad days. Unless you want to stop going bareback."');
    } else {
      scene.text('"I didn\'t know you wanted to become a daddy so badly," you say teasingly. "No birth control means no creampies on bad days. Unless you want to stop using condoms."');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
          scene.actions([
            { label: 'It\'s hot', handler: (st: GameState) => {
    scene.text('"I love it," you grin. "It feels hot being covered in your cum like this."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        }
      }
    }
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterMessText(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'  &&  ((s as any).sex_ev ?? 0)?.['mess_for_maid_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 3  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] - (((s as any).sex_ev ?? 0)?.['cum_mouth'] - ((s as any).sex_ev ?? 0)?.['facial_count']) >= 3) {
    ((s as any).sex_ev ?? {})['mess_act'] = 'A real mess for the maids';
    ((s as any).sex_ev ?? {})['mess_dialogue1'] = 'We made a real mess for the maids to clean up,';
  } else {
    if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).sex_ev ?? 0)?.['wash_sheets_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['bed_choice'] === 'anya_bed') {
      ((s as any).sex_ev ?? {})['mess_act'] = 'My sister\'s gonna kill me';
      ((s as any).sex_ev ?? {})['mess_dialogue1'] = 'Oh man...';
    } else {
      if (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).sex_ev ?? 0)?.['wash_sheets_talk'] === 0) {
        ((s as any).sex_ev ?? {})['mess_act'] = 'Need to wash my sheets';
        ((s as any).sex_ev ?? {})['mess_dialogue1'] = 'I\'m gonna have to wash my sheets after this,';
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexMess(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'mess_text');
  if (((((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'  &&  ((s as any).sex_ev ?? 0)?.['mess_for_maid_talk'] === 0)  ||  (((s as any).sex_ev ?? 0)?.['loc'] === 'pc_home'  &&  ((s as any).sex_ev ?? 0)?.['wash_sheets_talk'] === 0))  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] >= 3  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] - (((s as any).sex_ev ?? 0)?.['cum_mouth'] - ((s as any).sex_ev ?? 0)?.['facial_count']) >= 3) {
    scene.actions([
      { label: '<<$sex_ev[\'mess_act\']>>', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['wash_sheets_talk'] = 1;
    ((s as any).sex_ev ?? {})['mess_for_maid_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['cum_count'] - ((s as any).sex_ev ?? 0)?.['cum_condom'] > 1  &&  ((s as any).sex_ev ?? 0)?.['cum_condom'] >= 4) {
        // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the cum on the bed and the used condom...
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_condom'] >= 4) {
          // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the used condoms scattered across the ...
        } else {
          // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the ' + iif(sex_ev['orgasm_count'] >= ...
        }
      }
    } else {
      if (((s as any).mesec ?? 0) > 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] - ((s as any).sex_ev ?? 0)?.['cum_condom'] > 1  &&  ((s as any).sex_ev ?? 0)?.['cum_condom'] >= 4) {
          // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the cum on the bed and the used condom...
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_condom'] >= 4) {
            // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the used condoms scattered across the ...
          } else {
            // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the ' + iif(sex_ev['orgasm_count'] >= ...
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_count'] - ((s as any).sex_ev ?? 0)?.['cum_condom'] > 1  &&  ((s as any).sex_ev ?? 0)?.['cum_condom'] >= 4) {
          // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the cum on the bed and the used condom...
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_condom'] >= 4) {
            // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the used condoms scattered across the ...
          } else {
            // TODO-QSP: '"<<$sex_ev[''mess_dialogue1'']>>" you say, looking at all of the ' + iif(sex_ev['orgasm_count'] >= ...
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['bed_choice'] === 'anya_bed') {
      // TODO-QSP: iif(sisterQW['sex_bed_count'] = 1, '"My sister is gonna kill me for fucking a guy in her bed," you s...
    }
    if (((s as any).sex_ev ?? 0)?.['mess_act'] === 'A real mess for the maids') {
      ((s as any).sex_ev ?? {})['mess_for_maid_talk'] = 1;
      if (((s as any).npc_wife ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fidelity ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 'cheater'  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
        ((s as any).npc_has_wife_know ?? {})[String((s as any).npcID ?? 0)] = 1;
        scene.text('"This is a bigger mess than I made with my wife on my first honeymoon," he chuckles.');
      } else {
        if ((Math.floor(Math.random() * 2) + 1) === 1) {
          scene.text('"I\'m sure they\'ve seen worse," he chuckles.');
        } else {
          scene.text('"At least we don\'t have to do it," he chuckles.');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['mess_act'] === 'My sister\'s gonna kill me') {
        if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
          scene.text('"Maybe she\'ll like the cum stains," he grins back.');
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            scene.text('"Maybe she won\'t notice," he chuckles.');
          } else {
            scene.text('"Maybe you can wash the sheets before she gets home," he chuckles.');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['mess_act'] === 'Need to wash my sheets') {
          if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
            scene.text('"You don\'t like your sheets cum-stained?" he grins back.');
          }
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCantBelieveCreampie(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).sex_ev ?? 0)?.['creampie_wtf'] > 0  ||  (((s as any).sex_ev ?? 0)?.['creampie_restrict'] > 0  &&  ((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] > 0))  &&  ((s as any).sex_ev ?? 0)?.['cant_believe_creampie_talk'] === 0) {
    scene.actions([
      { label: 'I still can\'t believe you came inside', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['cant_believe_creampie_talk'] = 1;
    scene.img('images/shared/sex/after/annoyed1.jpg');
    scene.text('"I still can\'t believe you came inside me," you harrumph, crossing your arms in irritation.');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: '"I know," he sighs, putting his hands over his eyes. "I really fucked up.' + iif(npc_caretaker[$npc...
      qspCall(s, 'sex_ev_pillow_talk', 'cant_believe_creampie_okay');
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'Not as sorry as if you get pregnant', handler: (st: GameState) => {
    // TODO-QSP: '"Not nearly as sorry as you''ll be if I get pregnant," you huff.' + iif(birth_control['think_safe']...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      }
      scene.actions([
        { label: 'We should have used condoms', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['skip_condom'] === 1) {
      scene.text('"We really shouldn\'t have skipped the condom..." you say and sigh bitterly yourself.');
    } else {
      scene.text('"Why didn\'t we just use condoms..." you say and sigh bitterly yourself.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  ||  ((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish')) {
        // TODO-QSP: dynamic text: "But it still felt good, didn't it?" <<$npcdesc>> grins back.
        scene.text(`"But it still felt good, didn't it?" ${((s as any).npcdesc ?? 0)} grins back.`);
        if (((s as any).sex_ev ?? 0)?.['creampie_orgasm_count'] === 0) {
          scene.actions([
            { label: 'Maybe for him', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Maybe for you," you roll your eyes, looking away from him in annoyance.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        }
        scene.actions([
          { label: 'Admit it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/smile1.jpg');
    // TODO-QSP: dynamic text: "But it still felt good, didn't it?" <<$npcdesc>> grins back.
    scene.text(`"But it still felt good, didn't it?" ${((s as any).npcdesc ?? 0)} grins back.`);
    scene.text('"Yeah, I guess," you reply, unable to stop your lips from twisting into a rueful smirk.');
    // TODO-QSP: '"I knew you loved it," he chuckles' + iif(cum_loc['vagina'] > 0, ' while watching his cum flow out ...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'Admit begrudgingly', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    // TODO-QSP: '"Hrmgh... Yeah I guess..." you admit with a deep scowl, unwilling to give him the satisfaction. Tho...
    scene.text('"I knew you loved it."');
    scene.text('"Shut up."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            // TODO-QSP: dynamic text: "I don't see what the big deal is," <<$npcdesc>> huffs. "You're on birth control...
            scene.text(`"I don't see what the big deal is," ${((s as any).npcdesc ?? 0)} huffs. "You're on birth control anyways."`);
            scene.actions([
              { label: 'Relent', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk5.jpg');
    scene.text('A long sigh escapes your lips as they twist into begrudging smirk.');
    scene.text('"I guess that\'s true. It would only be petty if I stay mad at you."');
    // TODO-QSP: dynamic text: <<$npcdesc>> smiles back.
    scene.text(`${((s as any).npcdesc ?? 0)} smiles back.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
              { label: 'Not the point!', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    // TODO-QSP: dynamic text: "That's not the point!" you sneer back. "Just because I'm on the <<$sex_ev['bc_t...
    scene.text(`"That's not the point!" you sneer back. "Just because I'm on the ${((s as any).sex_ev ?? 0)?.['bc_type']} doesn't mean you can just do that whenever you want!"`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, looking bashful. "But at least you're on birth contr...
            scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, looking bashful. "But at least you're on birth control, right?"`);
            scene.actions([
              { label: 'Relent', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk5.jpg');
    scene.text('A long sigh escapes your lips as they twist into begrudging smirk.');
    scene.text('"I suppose that does make it a little less of a big deal."');
    // TODO-QSP: dynamic text: <<$npcdesc>> smiles back, seeing he's forgiven.
    scene.text(`${((s as any).npcdesc ?? 0)} smiles back, seeing he's forgiven.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
          if (((s as any).sex_ev ?? 0)?.['creampie_gross'] === 1) {
            scene.actions([
              { label: 'Still doesn\'t feel good (forgiving)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk5.jpg');
    // TODO-QSP: dynamic text: "That doesn't make it any less gross when you do it," you reply, unable to compl...
    scene.text(`"That doesn't make it any less gross when you do it," you reply, unable to completely keep a growing smirk off your face. ${((s as any).npcdesc ?? 0)} smiles back, seeing he's forgiven.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
              { label: 'Still doesn\'t feel good (annoyed)', handler: (st: GameState) => {
    scene.text('"My protection from pregnancy doesn\'t make your cum inside me any less gross," you grumble in return.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
        } else {
          // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says, looking bashful.
          scene.text(`"Sorry," ${((s as any).npcdesc ?? 0)} says, looking bashful.`);
          qspCall(s, 'sex_ev_pillow_talk', 'cant_believe_creampie_okay');
          if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.actions([
              { label: 'Not as sorry as if you get pregnant', handler: (st: GameState) => {
    // TODO-QSP: '"Not nearly as sorry as you''ll be if I get pregnant," you huff.' + iif(birth_control['think_safe']...
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1) {
      scene.actions([
        { label: 'Never trusting him to pull out', handler: (st: GameState) => {
    if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"I don\'t know why I do this to myself. You <i>always</i> do this," you scowl bitterly. "I\'m never trusting you to pull out again."');
    } else {
      scene.text('"I\'m never trusting you to pull out again," you harrumph again.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCantBelieveCreampieOkay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'It\'s okay', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk5.jpg');
    scene.text('A long sigh escapes your lips and your annoyance relents.');
    if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.actions([
        { label: 'You shouldn\'t get pregnant', handler: (st: GameState) => {
    // TODO-QSP: '"It''s okay. ' + iif($stat['preg_risk'] = 'safe', 'It''s a safe day in my cycle. I won''t get pregn...
    // TODO-QSP: dynamic text: You look over at <<$npcdesc>> with a small rueful smile.
    scene.text(`You look over at ${((s as any).npcdesc ?? 0)} with a small rueful smile.`);
    scene.text('"Guess we can just count ourselves lucky this time."');
    scene.text('"Yeah," he nods, returning the small smile.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
    scene.actions([
      { label: 'Just an accident', handler: (st: GameState) => {
    scene.text('"It was just an accident I suppose," you say in a conciliatory tone. "I won\'t blame you for it this time."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSafeDayCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  &&  (((s as any).stat ?? 0)?.['preg_risk'] === 'safe'  ||  ((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe')  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0) {
    if (((s as any).mesec ?? 0) > 0) {
      scene.actions([
        { label: 'Good thing you\'re on your period', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    ((s as any).sex_ev ?? {})['preg_risk'] = ((s as any).stat ?? 0)?.['preg_risk'];
    scene.text('"It\'s a good thing I\'m on my period," you say softly. "I\'m pretty sure I can\'t get pregnant on my period."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "That's a relief," <<$npcdesc>> sighs.
      scene.text(`"That's a relief," ${((s as any).npcdesc ?? 0)} sighs.`);
    } else {
      // TODO-QSP: dynamic text: "Small blessings," <<$npcdesc>> smirks back at you.
      scene.text(`"Small blessings," ${((s as any).npcdesc ?? 0)} smirks back at you.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).stat ?? 0)?.['preg_risk'] === 'prob_safe') {
        scene.actions([
          { label: 'It\'s a safe day', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    ((s as any).sex_ev ?? {})['preg_risk'] = ((s as any).stat ?? 0)?.['preg_risk'];
    // TODO-QSP: dynamic text: "It ought to be a safe day for me by the way," you say softly, touching <<$npcde...
    scene.text(`"It ought to be a safe day for me by the way," you say softly, touching ${((s as any).npcdesc ?? 0)} on the arm. "In case you were worried about me getting pregnant."`);
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "I was," <<$npcdesc>> sighs. "You've no idea what a relief it is to know. Really...
      scene.text(`"I was," ${((s as any).npcdesc ?? 0)} sighs. "You've no idea what a relief it is to know. Really takes the weight off my shoulders."`);
    } else {
      // TODO-QSP: dynamic text: "Good to know," <<$npcdesc>> says with a small smile.
      scene.text(`"Good to know," ${((s as any).npcdesc ?? 0)} says with a small smile.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        if (((s as any).stat ?? 0)?.['preg_risk'] === 'safe') {
          scene.actions([
            { label: 'It\'s a safe day', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    ((s as any).sex_ev ?? {})['preg_risk'] = ((s as any).stat ?? 0)?.['preg_risk'];
    // TODO-QSP: dynamic text: "It's a safe day for me by the way," you say softly, touching <<$npcdesc>> on th...
    scene.text(`"It's a safe day for me by the way," you say softly, touching ${((s as any).npcdesc ?? 0)} on the arm. "In case you were worried about me getting pregnant."`);
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "I was," <<$npcdesc>> sighs. "You've no idea what a relief it is to know. Really...
      scene.text(`"I was," ${((s as any).npcdesc ?? 0)} sighs. "You've no idea what a relief it is to know. Really takes the weight off my shoulders."`);
    } else {
      // TODO-QSP: dynamic text: "Good to know," <<$npcdesc>> says with a small smile.
      scene.text(`"Good to know," ${((s as any).npcdesc ?? 0)} says with a small smile.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRuinedMakeup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_makeup ?? 0) === 0  &&  ((s as any).sex_ev ?? 0)?.['starting_makeup'] > 1  &&  ((s as any).sex_ev ?? 0)?.['ruin_makeup'] === 0) {
    scene.actions([
      { label: 'You ruined my makeup', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['ruin_makeup'] = 1;
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('Glancing down at the sheets, you suddenly notice dark streaks of color across them. Looking at a nearby reflective surface, you inspect your face. Your lipstick is smeared from your mouth all the way across one cheek and black tears of mascara run down your face.');
    scene.actions([
      { label: 'Impressed', handler: (st: GameState) => {
    scene.text('"Holy shit!" you exclaim. "You fucked me so hard you ruined my makeup!"');
    scene.text('"You could always go out like that," he snickers.');
    scene.text('"So <i>everyone</i> can see how hard you fucked me?" you giggle.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Annoyed', handler: (st: GameState) => {
    scene.text('"Ugh, did you have to ruin my makeup?" you complain. "It took me forever to get it just right!"');
    scene.text('"You could always go out like that," he snickers.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).orgasm ?? 0) > 0  &&  ((s as any).sex_ev ?? 0)?.['never_orgasmed'] === 1  &&  ((s as any).sex_ev ?? 0)?.['first_orgasm_talk'] === 0) {
    scene.actions([
      { label: 'That was your first orgasm', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    ((s as any).sex_ev ?? {})['first_orgasm_talk'] = 1;
    scene.text('"Hey, can I tell you something?" you ask.');
    scene.text('"Hmm? What is it?"');
    scene.actions([
      { label: 'Tell shyly', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You blush as you consider what you're about to say to <<$npcdesc>>.
    scene.text(`You blush as you consider what you're about to say to ${((s as any).npcdesc ?? 0)}.`);
    scene.text('"I\'ve, uhm... I\'ve never orgasmed before."');
    scene.text('"Woah, seriously?" He sits up in shock. "Not even from masturbation?"');
    scene.text('A hot wave of embarrassment washes over your entire body.');
    if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
      // TODO-QSP: dynamic text: "That's-! I don't really-!" You bite your lip in humiliation and <<$npcdesc>> la...
      scene.text(`"That's-! I don't really-!" You bite your lip in humiliation and ${((s as any).npcdesc ?? 0)} laughs. "Let's just say you gave me my first one..."`);
    } else {
      if (((s as any).stat ?? 0)?.['men_fucked'] === 1) {
        // TODO-QSP: dynamic text: "That's-! I don't really-!" You bite your lip in humiliation and <<$npcdesc>> la...
        scene.text(`"That's-! I don't really-!" You bite your lip in humiliation and ${((s as any).npcdesc ?? 0)} laughs. "I've only ever been with one other guy before and... well let's just say he didn't do what you did..."`);
      } else {
        // TODO-QSP: dynamic text: "That's-! I don't really-!" You bite your lip in humiliation and <<$npcdesc>> la...
        scene.text(`"That's-! I don't really-!" You bite your lip in humiliation and ${((s as any).npcdesc ?? 0)} laughs. "I've only ever been with one other guy before and... well let's just say he didn't do what you did..."`);
      }
    }
    scene.text('Smiling shyly at him, you consider...');
    scene.actions([
      { label: 'Leaving it at that', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Kissing him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'kiss');
    // TODO-QSP: dynamic text: The admission of your first climax fills you with a new affection for <<$npcdesc...
    scene.text(`The admission of your first climax fills you with a new affection for ${((s as any).npcdesc ?? 0)} and you lean up to kiss him. Whatever else happened tonight, he'll always be your first orgasm.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
      { label: 'Tell happily', handler: (st: GameState) => {
    scene.text('Letting a gentle but bright smile shine through, you tell him in a hushed whisper,');
    scene.text('"I had my first orgasm tonight."');
    scene.text('"Woah, seriously?" He sits up in shock.');
    // TODO-QSP: dynamic text: "Never," you shake your head. ' + iif(stat['men_fucked'] > 0, '"No guy has ever ...
    scene.text('"Never," you shake your head. \' + iif(stat[\'men_fucked\'] > 0, \'"No guy has ever been good enough to make me cum before. \', \'I\'ve never been with another guy before. \') + \'"You\'re my first."');
    if (((s as any).npc_shy ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      // TODO-QSP: dynamic text: "You sure know how to make a guy feel good about himself," <<$npcdesc>> grins, l...
      scene.text(`"You sure know how to make a guy feel good about himself," ${((s as any).npcdesc ?? 0)} grins, looking rather proud.`);
    } else {
      // TODO-QSP: dynamic text: "Wow, I, uhm... I don't know what to say." <<$npcdesc>> blushes bright red, look...
      scene.text(`"Wow, I, uhm... I don't know what to say." ${((s as any).npcdesc ?? 0)} blushes bright red, looking surprisingly embarrassed for someone who just got told he has a "${((s as any).pcs_firstname ?? 0)}'s First Orgasm" medal.`);
    }
    scene.text('Seeing his reaction, it makes you consider...');
    scene.actions([
      { label: 'Leaving it at that', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
      { label: 'Kissing him', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 'kiss');
    // TODO-QSP: dynamic text: The admission of your first climax fills you with a new affection for <<$npcdesc...
    scene.text(`The admission of your first climax fills you with a new affection for ${((s as any).npcdesc ?? 0)} and you lean up to kiss him. Whatever else happened tonight, he'll always be your first orgasm.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSoManyCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] >= 3  &&  ((s as any).sex_ev ?? 0)?.['creampie_pillow_talk'] === 0) {
    scene.actions([
      { label: 'So many creampies', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['creampie_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: "We made so many creampies," you murmur, shivering as you feel <<$npcdesc>>'s wa...
      scene.text(`"We made so many creampies," you murmur, shivering as you feel ${((s as any).npcdesc ?? 0)}'s warm cum continue to ooze from your sex.`);
    } else {
      scene.text('"We made so many creampies," you murmur, rubbing your legs together, missing the warmth that was filling you up before.');
    }
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        scene.text('"Coming inside a girl is the best," he sighs with satisfaction. "There\'s nothing like blowing your load inside pussy."');
      } else {
        if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
          scene.text('"Coming inside you is the best," he says. "If I could, I\'d fill you up with so much cum that you\'d still be dripping next week."');
        } else {
          // TODO-QSP: dynamic text: "I love coming inside you," <<$npcdesc>> says. "Shame you already cleaned it out...
          scene.text(`"I love coming inside you," ${((s as any).npcdesc ?? 0)} says. "Shame you already cleaned it out. It'd be so hot if you went home with it still inside you."`);
        }
      }
    } else {
      if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
        scene.text('"I must have filled you up completely," he says, grinning at his handiwork. "You\'re overflowing."');
      } else {
        scene.text('"You\'ve got one cum-hungry pussy," he says, grinning at your snatch.');
      }
    }
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['accidental_creampie_convo'] < 1  &&  (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      qspCall(s, 'sex_ev_talk', 'boy_accidental_creampie');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
      { label: 'Did you have to come inside me so many times?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['creampie_pillow_talk'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
      // TODO-QSP: dynamic text: "Did you have to come inside me so many times?" you ask, shivering as you feel <...
      scene.text(`"Did you have to come inside me so many times?" you ask, shivering as you feel ${((s as any).npcdesc ?? 0)}'s warm cum continue to ooze from your sex.`);
    } else {
      scene.text('"Did you have to come inside me so many times?" you ask in annoyance. "It took forever to clean out."');
    }
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
      scene.text('"You said I didn\'t have to ask," he smirks amusedly.');
      scene.text('"That doesn\'t mean I want you to blow every single load inside me," you grumble back.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['ask_creampie_count'] > 0) {
        scene.text('"You\'re the one who asked me to," he smirks back.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['simultaneous_orgasm_count'] > 1) {
          scene.text('"You didn\'t seem to mind when you were coming with me," he smirks back.');
        } else {
          if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
            if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
              scene.text('"I couldn\'t help it," he says. "Coming inside of pussy just feels too good."');
            } else {
              if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
                scene.text('"I couldn\'t help it," he says. "If I could, I\'d fill you up with so much cum that you\'d still be dripping next week."');
              } else {
                scene.text('"I love coming inside you," he says, nodding excitedly. "Shame you already cleaned it out. It\'d be so hot if you went home with it still inside you."');
              }
            }
          } else {
            if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
              scene.text('"Your pussy was begging for it," he says, grinning at his handiwork.');
            } else {
              scene.text('"Your pussy was begging for it," he says, grinning at his handiwork.');
            }
          }
        }
      }
    }
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['accidental_creampie_convo'] < 1  &&  (((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  ||  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      qspCall(s, 'sex_ev_talk', 'boy_accidental_creampie');
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
    if (((s as any).stat ?? 0)?.['total_creampies'] === ((s as any).sex_ev ?? 0)?.['creampie_count']  &&  ((s as any).npc_first_creampie ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.actions([
        { label: 'That was your first creampie', handler: (st: GameState) => {
    scene.actions([
      { label: 'Shy', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'first_creampie_shy');
    scene.text('"I\'ve, uhm... That was... I\'ve never let a guy come inside me before..." you admit, feeling your face flush with crimson heat.');
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_creampie_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: 'That was your first creampie (lie)', handler: (st: GameState) => {
    ((s as any).npc_first_creampie ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).npc_first_creampie_lie ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.actions([
      { label: 'Shyly', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'first_creampie_shy');
    scene.text('"I\'ve, uhm... That was... I\'ve never let a guy come inside me before..." you lie, feeling a sick sense of giddiness inside you as his eyes widen.');
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

function enterFirstCreampieShy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/after/pillow_talk2.jpg');
  scene.text('"Hey... Can I tell you something...?"');
  if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish') {
    // TODO-QSP: dynamic text: "It's not that you're a dude, is it?" <<$npcdesc>> snickers.
    scene.text(`"It's not that you're a dude, is it?" ${((s as any).npcdesc ?? 0)} snickers.`);
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      if (((s as any).sex_ev ?? 0)?.['fucked_out'] === 1) {
        scene.text('"Is it that you want to go another round? Cause I don\'t think could manage that..." He grins in a way that makes his question come off more as a joke than a real ask.');
      } else {
        scene.text('"Is it that you want to go another round? Cause I think I could manage..." He grins in a way that makes his question come off more as a joke than a real ask.');
      }
    } else {
      if (((s as any).npc_sensual_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "Anything..." <<$npcdesc>> replies in a low voice, staring into your eyes.
        scene.text(`"Anything..." ${((s as any).npcdesc ?? 0)} replies in a low voice, staring into your eyes.`);
      } else {
        scene.text('"Sure. What is it?"');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFreeCreampies(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
    scene.actions([
      { label: 'You don\'t need to ask to come inside', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
      ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_pillow_talk" }) + ' src="images/shared/sex/after/pillow_talk2.jpg"></center>';
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_pillow_talk" }) + ' src="images/shared/sex/vag/miss/2.jpg"></center>';
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
          ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_pillow_talk" }) + ' src="images/shared/sex/vag/doggy/1.jpg"></center>';
        } else {
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            ((s as any).sex_ev ?? {})['temp_pic'] = '<center><img ' + qspUntranslated(s, "set_imgh>", { location: "sex_ev_pillow_talk" }) + ' src="images/shared/sex/vag/cowgirl/1.jpg"></center>';
          }
        }
      }
    }
    // TODO-QSP: $sex_ev['temp_pic']
    // TODO-QSP: dynamic text: "Y'know," you say, gently looking into <<$npcdesc>>'s eyes. "You don't need to a...
    scene.text(`"Y'know," you say, gently looking into ${((s as any).npcdesc ?? 0)}'s eyes. "You don't need to ask to come inside me..."`);
    if (((s as any).pc_cum_pref_know ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.actions([
        { label: 'I know how much you like it', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    // TODO-QSP: $sex_ev['temp_pic']
    // TODO-QSP: '"Y''know," you say, gently looking into <<$npcdesc>>''s eyes. "You don''t need to ask to come insid...
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    }
    qspCall(s, 'sex_ev_pillow_talk', 'free_creampies2');
  } },
      ]);
    }
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      scene.actions([
        { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    // TODO-QSP: $sex_ev['temp_pic']
    if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "You know I\'m on birth control. So if you want to come inside me, you can go ahead. It\'s safe."');
    } else {
      scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "I\'m on birth control. So if you want to come inside me, you can go ahead. It\'s safe."');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'free_creampies2');
  } },
      ]);
    } else {
      scene.actions([
        { label: 'It\'s okay when it\'s safe', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    // TODO-QSP: $sex_ev['temp_pic']
    scene.text('"You don\'t need to ask to come inside me y\'know," you murmur. "As long as it\'s a safe day I don\'t mind."');
    // TODO-QSP: dynamic text: "Really?" <<$npcdesc>> asks.
    scene.text(`"Really?" ${((s as any).npcdesc ?? 0)} asks.`);
    scene.text('"Really," you answer. "I\'ll let you know when it\'s safe. And then you can come inside me as much as you want."');
    // TODO-QSP: dynamic text: <<$npcdesc>> is positively beaming back at you.
    scene.text(`${((s as any).npcdesc ?? 0)} is positively beaming back at you.`);
    qspCall(s, 'sex_ev_pillow_talk', 'free_creampies2');
  } },
      ]);
    }
    scene.actions([
      { label: 'I don\'t mind', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['temp_pic']
    // TODO-QSP: '"Y''know," you say, gently looking into <<$npcdesc>>''s eyes. "You don''t need to ask to come insid...
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    }
    qspCall(s, 'sex_ev_pillow_talk', 'free_creampies2');
  } },
      { label: 'I love creampies', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    // TODO-QSP: $sex_ev['temp_pic']
    // TODO-QSP: '"Y''know," you say, gently looking into <<$npcdesc>>''s eyes. "You don''t need to ask to come insid...
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
      ((s as any).npc_know_bc ?? {})[String((s as any).npcID ?? 0)] = 1;
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    }
    qspCall(s, 'sex_ev_pillow_talk', 'free_creampies2');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFreeCreampies2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_bareback ?? 0)?.[String((s as any).npcID ?? 0)] === '') {
    scene.text('"I assume that means no more condoms then?" he asks.');
    if (((s as any).npc_free_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 'at_will') {
      scene.text('"No more condoms," you smile back.');
      qspCall(s, 'sex_ev_talk', 'topic_exit');
    } else {
      if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
        scene.actions([
          { label: 'Pullout on danger days', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    scene.text('"Just remember to pull out when I\'m ovulating," you smirk in reply.');
    qspCall(s, 'sex_ev_talk', 'topic_exit');
  } },
          { label: 'Condoms on danger days', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    // TODO-QSP: $npc_bareback[$npcID] = 'when_safe'
    qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
    scene.text('"Only when it\'s safe," you reply. "I\'m not on birth control so we\'ll still need to use them when I\'m fertile."');
    qspCall(s, 'sex_ev_talk', 'topic_exit');
  } },
        ]);
      }
      scene.actions([
        { label: 'No more condoms', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    // TODO-QSP: $npc_bareback[$npcID] = 'never_use'
    scene.text('"No more condoms," you smile back.');
    qspCall(s, 'sex_ev_talk', 'topic_exit');
  } },
      ]);
    }
  } else {
    if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
        // TODO-QSP: dynamic text: <<$npcdesc>> gives you a predatory grin, so full of desire that it makes you gul...
        scene.text(`${((s as any).npcdesc ?? 0)} gives you a predatory grin, so full of desire that it makes you gulp nervously.`);
        scene.text('"Good to know..."');
      } else {
        scene.text('"Good to know," he smirks amusedly.');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1)  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
        // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
          // TODO-QSP: dynamic text: <<$npcdesc>> gives you a look like he might just burst inside you again before g...
          scene.text(`${((s as any).npcdesc ?? 0)} gives you a look like he might just burst inside you again before giving you a delighted grin.`);
          scene.text('"Next time, I\'m gonna pump you full of so much cum, you\'re going to still be dripping next week," he says excitedly and you can\'t help but giggle at his boyish glee.');
        } else {
          scene.text('"Good to know," he smirks amusedly.');
        }
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
          // TODO-QSP: dynamic text: "Are you sure...?" <<$npcdesc>> asks hesitantly. "You're not worried you're goin...
          scene.text(`"Are you sure...?" ${((s as any).npcdesc ?? 0)} asks hesitantly. "You're not worried you're going to get pregnant? I'm... I'm not really up for having kids..."`);
        } else {
          // TODO-QSP: dynamic text: "Is that really okay?" <<$npcdesc>> asks, wide-eyed.
          scene.text(`"Is that really okay?" ${((s as any).npcdesc ?? 0)} asks, wide-eyed.`);
        }
        if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
          scene.actions([
            { label: 'I\'m on birth control', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you smile gently. "And it should be effective now. So you can come inside me as much as you want."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you smile gently. "So you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc ?? 0)} smiles back, beaming at you.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        } else {
          if (((s as any).pillcon2 ?? 0) >= 20000) {
            scene.actions([
              { label: 'I\'m on birth control', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you smile gently. "And it should be effective any day now. So you can come inside me as much as you want."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you smile gently. "So you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc ?? 0)} smiles back, beaming at you.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          } else {
            scene.actions([
              { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
    if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      ((s as any).npc_know_not_bc ?? {})[String((s as any).npcID ?? 0)] = 0;
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I started birth control," you lie with a seductively gentle smile. "And it should be effective now. So you can come inside me as much as you want."');
    } else {
      qspCall(s, 'sex_ev_stats', 'birth_control_know');
      scene.text('"I\'m on birth control," you lie with a seductively gentle smile. "So you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc ?? 0)} smiles back, beaming at you.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
        }
        scene.actions([
          { label: 'I\'ll be fine', handler: (st: GameState) => {
    scene.text('"I\'ll be fine," you insist, smiling gently. "What could go wrong?"');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  (Math.floor(Math.random() * 4) + 1) === 1) {
      ((s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = (-1);
      // TODO-QSP: dynamic text: "I'm not comfortable with it," <<$npcdesc>> says, shaking his head. "Maybe if yo...
      scene.text(`"I'm not comfortable with it," ${((s as any).npcdesc ?? 0)} says, shaking his head. "Maybe if you started birth control..."`);
    } else {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
      // TODO-QSP: dynamic text: "Okay..." <<$npcdesc>> says hesitantly, but smiles back at you anyways.
      scene.text(`"Okay..." ${((s as any).npcdesc ?? 0)} says hesitantly, but smiles back at you anyways.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'It feels good', handler: (st: GameState) => {
    scene.text('"It feels so good," you coo gently. "I <i>want</i> you to come inside me. I want you to fill me with your cum..."');
    if ((((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * (100 - ((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)] + 1)) + (((s as any).npc_willpwr ?? 0)?.[String((s as any).npcID ?? 0)])) <= ((s as any).pcs_persuas ?? 0))  ||  (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie'  &&  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
      // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
      // TODO-QSP: dynamic text: Desire wars with willpower within <<$npcdesc>>. You watch as he struggles back a...
      scene.text(`Desire wars with willpower within ${((s as any).npcdesc ?? 0)}. You watch as he struggles back and forth until he leers at you with a hungry stare and you know which one won out.`);
      // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> says. "I won't ask anymore."
      scene.text(`"Okay." ${((s as any).npcdesc ?? 0)} says. "I won't ask anymore."`);
    } else {
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        ((s as any).npc_free_creampies_count ?? {})[String((s as any).npcID ?? 0)] = (-1);
        // TODO-QSP: dynamic text: <<$npcdesc>> hesitates for a moment before shaking his head.
        scene.text(`${((s as any).npcdesc ?? 0)} hesitates for a moment before shaking his head.`);
        scene.text('"I\'m not comfortable with it," he says. "Maybe if you started birth control..."');
      } else {
        // TODO-QSP: $npc_free_creampies[$npcID] = 'at_will'
        // TODO-QSP: dynamic text: <<$npcdesc>> hesitates for a moment before nodding slowly.
        scene.text(`${((s as any).npcdesc ?? 0)} hesitates for a moment before nodding slowly.`);
        scene.text('"Okay," he says, smiling. "I won\'t ask anymore."');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'I\'ll tell you when it\'s safe', handler: (st: GameState) => {
    // TODO-QSP: $npc_free_creampies[$npcID] = 'when_safe'
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.text('"I don\'t really want to get pregnant yet either," you smile wryly. "So... I\'ll let you know when it\'s a safe day. And then you can come inside me as much as you want."');
    } else {
      scene.text('"I\'ll let you know when it\'s a safe day," you smile gently. "And then you can come inside me as much as you want."');
    }
    // TODO-QSP: dynamic text: "Okay." <<$npcdesc>> smiles back, beaming at you.
    scene.text(`"Okay." ${((s as any).npcdesc ?? 0)} smiles back, beaming at you.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBrokenCreampieRule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] <= 2  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['broken_creampie_rule'] === 0  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([
      { label: 'Broke my creampie rule', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['broken_creampie_rule'] = 1;
    if (((s as any).sex_ev ?? 0)?.['mad'] > 0) {
      scene.actions([
        { label: 'Be irritated', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I can\'t believe you came inside me," you mutter in annoyance. "You made me break my rule."');
    // TODO-QSP: dynamic text: "You're the one who's cheating," <<$npcdesc>> grumbles. "Don't blame me."
    scene.text(`"You're the one who's cheating," ${((s as any).npcdesc ?? 0)} grumbles. "Don't blame me."`);
    if (((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] === 2) {
      scene.text('"Well, I am <i>now</i>!" you snap. "That\'s why I told you not to come inside!"');
    } else {
      scene.text('"<i>You</i> broke the rule!" you snap. "It\'s completely your fault!"');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
    scene.actions([
      { label: 'Regret', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I guess my rule is broken," you say, twiddling your thumbs awkwardly. "You came inside me..."');
    // TODO-QSP: dynamic text: "So?" <<$npcdesc>> asks. "What does that mean?"
    scene.text(`"So?" ${((s as any).npcdesc ?? 0)} asks. "What does that mean?"`);
    scene.actions([
      { label: 'One time thing', handler: (st: GameState) => {
    scene.text('"It was a one time thing," you say, half to yourself, trying to rationalize. "It was just a mistake, it won\'t happen again. So it doesn\'t count!"');
    // TODO-QSP: dynamic text: "Sure," <<$npcdesc>> shrugs. "Whatever you want to tell yourself..."
    scene.text(`"Sure," ${((s as any).npcdesc ?? 0)} shrugs. "Whatever you want to tell yourself..."`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'I guess I\'m a cheater', handler: (st: GameState) => {
    ((s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I guess... I guess that makes me a cheater..." you say. Guilt and shame fill your stomach as the weight of the admission crashes down upon you.');
    scene.text('What were you thinking? That this would end well?');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
      { label: 'Unashamed', handler: (st: GameState) => {
    ((s as any).npc_boyfriend_creampie_rule ?? {})[String((s as any).npcID ?? 0)] = 3;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "I guess my rule is broken," you say, looking at <<$npcdesc>> wistfully. "You ca...
    scene.text(`"I guess my rule is broken," you say, looking at ${((s as any).npcdesc ?? 0)} wistfully. "You came inside me..."`);
    scene.text('"So?" he asks. "What does that mean?"');
    scene.actions([
      { label: 'If it\'s already broken...', handler: (st: GameState) => {
    scene.text('"If I already broke the rule," you smile. "Then there\'s no need to hold back anymore. More creampies for me."');
    if ((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] <= 5 + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/miss3.jpg');
    // TODO-QSP: dynamic text: Hearing you say that, <<$npcdesc>> pounces on you, spreading your legs apart and...
    scene.text(`Hearing you say that, ${((s as any).npcdesc ?? 0)} pounces on you, spreading your legs apart and resting his cock up against your pussy.`);
    scene.text('"No need to hold back, right?" he grins.');
    scene.actions([
      { label: 'Down boy', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"Down boy!" you giggle, pushing him playfully to the side. "I didn\'t mean right now!"');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'No time like the present', handler: (st: GameState) => {
    scene.text('"No," you shake your head. "No need at all."');
    ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
    scene.actions([
      { label: 'Fuck <<$npcdesc>>', goto: ['sex_ev_miss', 'miss_goto'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
      { label: 'I guess I\'m a cheater', handler: (st: GameState) => {
    ((s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
    scene.text('"I guess that makes me a cheater," you say, your smile breaking into a full grin. Part of you knows that you should feel bad about this, but you don\'t in the slightest.');
    scene.text('It felt good after all. What\'s wrong with feeling good?');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPulloutRepeatFailureTalk1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['failed_to_pullout_talk'] === 0  &&  ((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['promise_no_creampie'] > 0) {
    scene.actions([
      { label: 'I can\'t believe you came inside me again', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['failed_to_pullout_talk'] = 1;
    scene.actions([
      { label: '(Humorous)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    scene.text('"I can\'t believe you came inside me again," you giggle uncontrollably. "You\'re really bad at pulling out, you know that?"');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: '(Annoyed)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk3.jpg');
    scene.text('"I can\'t believe you came inside me again," you sigh in exasperation. "You\'re really bad at pulling out, you know that?"');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHighFive1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  // TODO-QSP: dynamic text: "That was great," <<$npcdesc>> pants, grinning sideways at you.
  scene.text(`"That was great," ${((s as any).npcdesc ?? 0)} pants, grinning sideways at you.`);
  if (((s as any).sex_ev ?? 0)?.['fucked_out'] > 0) {
    scene.actions([
      { label: 'I could\'ve gone more', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['good_for_you'] = 1;
    scene.text('"I could\'ve gone a few more rounds," you reply.');
    scene.text('"Damn," he chuckles. "You\'re insatiable! But still, that was great sex, wasn\'t it?"');
    qspCall(s, 'sex_ev_pillow_talk', 'high_five2');
    qspCall(s, 'sex_ev_pillow_talk', 'weird_high_five');
    qspCall(s, 'sex_ev_pillow_talk', 'fine_high_five');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you pant back. "It was."');
    qspCall(s, 'sex_ev_pillow_talk', 'high_five2');
    qspCall(s, 'sex_ev_pillow_talk', 'agree_high_five');
    qspCall(s, 'sex_ev_pillow_talk', 'weird_high_five');
    qspCall(s, 'sex_ev_pillow_talk', 'fine_high_five');
  } },
    { label: 'If you say so', handler: (st: GameState) => {
    scene.text('"If you say so," you pant back.');
    qspCall(s, 'sex_ev_pillow_talk', 'high_five2');
    qspCall(s, 'sex_ev_pillow_talk', 'weird_high_five');
    qspCall(s, 'sex_ev_pillow_talk', 'fine_high_five');
  } },
  ]);
  scene.build();
}

function enterHighFive2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: dynamic text: <<$npcdesc>> holds up his hand up in the air, causing you to glance over at him.
  scene.text(`${((s as any).npcdesc ?? 0)} holds up his hand up in the air, causing you to glance over at him.`);
  scene.text('"Come on," he says. "Don\'t leave me hanging."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave him hanging', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Oh come on," you roll your eyes. "Have some class."');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
  ]);
  scene.build();
}

function enterAgreeHighFive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Agree (High five)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/high_five.mp4');
    scene.text('"Hell yeah," you laugh, slapping against his hand with yours with a satisfying clap.');
    qspCall(s, 'sex_ev_after', 'post_cigarette_boy');
  } },
  ]);
  scene.build();
}

function enterWeirdHighFive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'re weird (high five)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/high_five.mp4');
    scene.text('"You\'re weird," you say, giving him a look, but slap your hand against his anyways before sinking back into the bed.');
    qspCall(s, 'sex_ev_after', 'post_cigarette_boy');
  } },
  ]);
  scene.build();
}

function enterFineHighFive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Fine (High five)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.img('images/shared/sex/after/high_five.mp4');
    scene.text('"Okay, <i>fine</i>," you say, rolling your eyes but reach over and slap your hand against his anyways, an amused smile on your face.');
    qspCall(s, 'sex_ev_after', 'after_sex2');
  } },
  ]);
  scene.build();
}

function enterGoodSlutEv(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 4);
  // TODO-QSP: dynamic text: "Ahh," <<$npcdesc>> sighs in satisfaction. "You're such a good little whore, <<$...
  scene.text(`"Ahh," ${((s as any).npcdesc ?? 0)} sighs in satisfaction. "You're such a good little whore, ${((s as any).pcs_nickname ?? 0)}."`);
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 0) {
    scene.actions([
      { label: 'You\'re not a whore! (You\'re a slut!)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Hey, don\'t be mean. I\'m not a whore," you frown before letting it melt into a sly smile. "You\'re not paying me. That makes me a slut, not a whore."');
    scene.text('"Yeah you are," he grins in return, leering at your naked just-fucked body.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'after_sex2_w_picture'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'You\'re not a whore!', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"Hey, don\'t be mean," you frown immediately. "I\'m not a whore."');
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1) {
      scene.text('"You let men like me plow your pussy for money," he grins. "What does that make you if not a whore?"');
    } else {
      if (((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
        scene.text('"You let some stranger you\'re not in a relationship with fuck you silly," he grins. "What does that make you if not a whore?"');
      } else {
        scene.text('"You let me use your pussy to satisfaction," he grins. "What does that make you if not a whore?"');
      }
    }
    scene.actions([
      { label: 'No response', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: Your frown deepens but you aren't sure how to respond to that, and so stay silen...
    scene.text(`Your frown deepens but you aren't sure how to respond to that, and so stay silent. Seeing this, ${((s as any).npcdesc ?? 0)} cups your chin, gently caressing your cheek.`);
    scene.text('"Don\'t worry, I like whores," he whispers. "They\'re hot. You\'re hot. I wouldn\'t want you around if you weren\'t."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'after_sex2_w_picture'] },
    ]);
  } },
    ]);
  } },
    { label: '"Only for you"', handler: (st: GameState) => {
    scene.text('"Only for you," you purr, drawing your finger lightly across his chest.');
    if (((s as any).fame ?? 0)[((s as any).region ?? 0) + '_sex'] >= 200) {
      scene.text('"Well I know that isn\'t true," he chuckles.');
    } else {
      scene.text('"You\'re my little whore," he replies, caressing your cheek.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_after', 'after_sex2_w_picture'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCouldntSleepFuck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sleep_fuck'] > 0  &&  ((s as any).sex_ev ?? 0)?.['couldnt_sleep_fuck'] === 0) {
    scene.actions([
      { label: 'Couldn\'t sleep?', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['couldnt_sleep_fuck'] = 1;
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    // TODO-QSP: dynamic text: "So... couldn't sleep?" you ask <<$npcdesc>> amusedly.
    scene.text(`"So... couldn't sleep?" you ask ${((s as any).npcdesc ?? 0)} amusedly.`);
    if (((s as any).sex_ev ?? 0)?.['cum_count'] >= 5) {
      scene.text('"Hard to sleep with my cock snuggled up against your ass," he grins.');
      scene.text('"Easy to get hard you mean," you snicker.');
    } else {
      scene.text('"I didn\'t get enough earlier," he says. "Was still horny."');
      scene.text('"I can tell," you remark, rubbing your wet thighs over your just-fucked pussy.');
    }
  }, goto: ['sex_ev_pillow_talk', 'sex_talk'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAngryEnd(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['angry_after'] = 1;
  scene.text('Your initial comment has escalated into a full blown shouting match, leaving both of you visibly fuming.');
  qspCall(s, 'sex_ev_after', 'after_sex2');
  // TODO-QSP: end
  scene.build();
}

function enterAngryEnd2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['angry_after'] = 1;
  scene.text('Your initial comment has strayed into unhappy territory and both of you are visibly fuming.');
  qspCall(s, 'sex_ev_after', 'after_sex2');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'stop_talk':
      enterStopTalk(s, scene);
      break;
    case 'topic_route':
      enterTopicRoute(s, scene);
      break;
    case 'pillow_picture1':
      enterPillowPicture1(s, scene);
      break;
    case 'topics':
      enterTopics(s, scene);
      break;
    case 'talk_time_add':
      enterTalkTimeAdd(s, scene);
      break;
    case 'sex_talk':
      enterSexTalk(s, scene);
      break;
    case 'condom_talk':
      enterCondomTalk(s, scene);
      break;
    case 'cum_talk':
      enterCumTalk(s, scene);
      break;
    case 'small_talk':
      enterSmallTalk(s, scene);
      break;
    case 'dick_talk_topics':
      enterDickTalkTopics(s, scene);
      break;
    case 'morning_sex_talk':
      enterMorningSexTalk(s, scene);
      break;
    case 'good_for_you':
      enterGoodForYou(s, scene);
      break;
    case 'kuni_wear_out':
      enterKuniWearOut(s, scene);
      break;
    case 'long_time':
      enterLongTime(s, scene);
      break;
    case 'sorry_didnt_cum':
      enterSorryDidntCum(s, scene);
      break;
    case 'better_than_boyfriend':
      enterBetterThanBoyfriend(s, scene);
      break;
    case 'sweaty_sex':
      enterSweatySex(s, scene);
      break;
    case 'sore_pussy':
      enterSorePussy(s, scene);
      break;
    case 'sore_pussy2':
      enterSorePussy2(s, scene);
      break;
    case 'sleep_fuck_wakeup_talk':
      enterSleepFuckWakeupTalk(s, scene);
      break;
    case 'rough_sex_talk':
      enterRoughSexTalk(s, scene);
      break;
    case 'ran_out_of_condoms':
      enterRanOutOfCondoms(s, scene);
      break;
    case 'need_more_condoms':
      enterNeedMoreCondoms(s, scene);
      break;
    case 'condom_buy_fight':
      enterCondomBuyFight(s, scene);
      break;
    case 'condom_buy_fight2':
      enterCondomBuyFight2(s, scene);
      break;
    case 'condom_buy_apology':
      enterCondomBuyApology(s, scene);
      break;
    case 'better_without':
      enterBetterWithout(s, scene);
      break;
    case 'condom_wasnt_bad':
      enterCondomWasntBad(s, scene);
      break;
    case 'bareback_next_time1':
      enterBarebackNextTime1(s, scene);
      break;
    case 'bareback_next_time1_adamant':
      enterBarebackNextTime1Adamant(s, scene);
      break;
    case 'bareback_next_time1_pregnancy':
      enterBarebackNextTime1Pregnancy(s, scene);
      break;
    case 'bareback_next_time1_safety1':
      enterBarebackNextTime1Safety1(s, scene);
      break;
    case 'bareback_next_time1_safety2':
      enterBarebackNextTime1Safety2(s, scene);
      break;
    case 'bareback_next_time2':
      enterBarebackNextTime2(s, scene);
      break;
    case 'bareback_next_time2_adamant':
      enterBarebackNextTime2Adamant(s, scene);
      break;
    case 'bareback_next_time2_pregnancy':
      enterBarebackNextTime2Pregnancy(s, scene);
      break;
    case 'bareback_next_time2_pregnancy_creampie_menu':
      enterBarebackNextTime2PregnancyCreampieMenu(s, scene);
      break;
    case 'bareback_next_time2_safety':
      enterBarebackNextTime2Safety(s, scene);
      break;
    case 'all_these_used_condoms':
      enterAllTheseUsedCondoms(s, scene);
      break;
    case 'sorry_condoms1':
      enterSorryCondoms1(s, scene);
      break;
    case 'wish_no_condoms1':
      enterWishNoCondoms1(s, scene);
      break;
    case 'wish_no_condoms2':
      enterWishNoCondoms2(s, scene);
      break;
    case 'wish_no_condoms_response_no_kids':
      enterWishNoCondomsResponseNoKids(s, scene);
      break;
    case 'always_condoms1':
      enterAlwaysCondoms1(s, scene);
      break;
    case 'love_going_bareback':
      enterLoveGoingBareback(s, scene);
      break;
    case 'stop_condoms1':
      enterStopCondoms1(s, scene);
      break;
    case 'thank_no_creampie':
      enterThankNoCreampie(s, scene);
      break;
    case 'thank_no_creampie2':
      enterThankNoCreampie2(s, scene);
      break;
    case 'risky_creampie_care1':
      enterRiskyCreampieCare1(s, scene);
      break;
    case 'risky_creampie_care_condoms1':
      enterRiskyCreampieCareCondoms1(s, scene);
      break;
    case 'risky_creampie_care_bc':
      enterRiskyCreampieCareBc(s, scene);
      break;
    case 'creampie_okay':
      enterCreampieOkay(s, scene);
      break;
    case 'on_birth_control':
      enterOnBirthControl(s, scene);
      break;
    case 'plastered':
      enterPlastered(s, scene);
      break;
    case 'mess_text':
      enterMessText(s, scene);
      break;
    case 'sex_mess':
      enterSexMess(s, scene);
      break;
    case 'cant_believe_creampie':
      enterCantBelieveCreampie(s, scene);
      break;
    case 'cant_believe_creampie_okay':
      enterCantBelieveCreampieOkay(s, scene);
      break;
    case 'safe_day_creampie':
      enterSafeDayCreampie(s, scene);
      break;
    case 'ruined_makeup':
      enterRuinedMakeup(s, scene);
      break;
    case 'first_orgasm':
      enterFirstOrgasm(s, scene);
      break;
    case 'so_many_creampies':
      enterSoManyCreampies(s, scene);
      break;
    case 'first_creampie':
      enterFirstCreampie(s, scene);
      break;
    case 'first_creampie_shy':
      enterFirstCreampieShy(s, scene);
      break;
    case 'free_creampies':
      enterFreeCreampies(s, scene);
      break;
    case 'free_creampies2':
      enterFreeCreampies2(s, scene);
      break;
    case 'broken_creampie_rule':
      enterBrokenCreampieRule(s, scene);
      break;
    case 'pullout_repeat_failure_talk1':
      enterPulloutRepeatFailureTalk1(s, scene);
      break;
    case 'high_five1':
      enterHighFive1(s, scene);
      break;
    case 'high_five2':
      enterHighFive2(s, scene);
      break;
    case 'agree_high_five':
      enterAgreeHighFive(s, scene);
      break;
    case 'weird_high_five':
      enterWeirdHighFive(s, scene);
      break;
    case 'fine_high_five':
      enterFineHighFive(s, scene);
      break;
    case 'good_slut_ev':
      enterGoodSlutEv(s, scene);
      break;
    case 'couldnt_sleep_fuck':
      enterCouldntSleepFuck(s, scene);
      break;
    case 'angry_end':
      enterAngryEnd(s, scene);
      break;
    case 'angry_end2':
      enterAngryEnd2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_pillow_talk: LocationDef = {
  name: 'sex_ev_pillow_talk',
  title: '"I can\'t believe how many condoms we went through," you say,',
  region: 'other',
  enter: enter,
};
