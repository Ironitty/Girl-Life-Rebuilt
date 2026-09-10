import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  (s as any).sex_ev['pillow_talking'] = 1;
  // TODO-QSP: dynamic text: You and <<$npcdesc>> relax on the bed together, idly chitchatting as you bask in...
  scene.text(`You and ${((s as any).npcdesc ?? 0)} relax on the bed together, idly chitchatting as you bask in the afterglow.`);
  if (((s as any).sex_ev ?? 0)?.['deflowered'] === 1  &&  ((s as any).sex_ev ?? 0)?.['virgin_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    qspCall(s, 'sex_ev_virgin', 'first_time_talk');
  } else {
    if (((s as any).npc_sugar_gifts ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'sex_ev_events', 'sugar_daddy_gift');
    } else {
      qspCall(s, 'sex_ev_events', 'sugar_daddy_gift');
      (s as any).sugar_gift_day[String((s as any).npcID ?? 0)] = 1;
      qspCall(s, 'sex_ev_pillow_talk', 'topics');
    }
    qspCall(s, 'sex_ev_pillow_talk', 'topics');
  }
  qspCall(s, 'sex_ev_after', 'sore_pussy_msg');
  scene.build();
}

function enterStopTalk(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Stop talking', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      // TODO-QSP: xgt 'sex_ev_after', 'relax_together'
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
  scene.build();
}

function enterPillowPicture1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['sex_over'] === 0  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.img('images/shared/sex/vag/miss/3.jpg');
    } else {
      scene.img('images/shared/sex/vag/doggy/1.jpg');
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'annoyed') {
        scene.img('images/shared/sex/after/annoyed1.jpg');
      } else {
        scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
        if (((s as any).locArgs?.[1] ?? 0) === 'laugh') {
          scene.img('images/shared/sex/after/pillow_talk6.mp4');
        } else {
          scene.img('images/shared/sex/after/kiss1.jpg');
          if (((s as any).locArgs?.[1] ?? 0) === 'shudder') {
            scene.img('images/shared/sex/after/shudder.mp4');
          } else {
            scene.img(`images/shared/sex/after/pillow_talk${qspUntranslated(s, "ARGS[1]", { location: "sex_ev_pillow_talk" })}.jpg`);
            if (((s as any).sex_ev ?? 0)?.['smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
              if (((s as any).sex_ev ?? 0)?.['boy_smoke_time'] + 5 > ((s as any).totminut ?? 0)) {
                scene.img('images/shared/sex/after/bed_smoke3.jpg');
              } else {
                scene.img('images/shared/sex/after/phone_smoke.jpg');
                scene.img(`images/shared/sex/after/bed_smoke1_${Math.floor(Math.random() * 2) + 1}.jpg`);
              }
            } else {
              scene.img(`images/shared/sex/after/bed_smoke2_${Math.floor(Math.random() * 2) + 1}.jpg`);
              if (((s as any).locArgs?.[2] ?? 0) === 'mp4') {
                scene.img(`images/shared/sex/after/${((s as any).locArgs?.[1] ?? 0)}.mp4`);
              } else {
                scene.img(`images/shared/sex/after/${((s as any).locArgs?.[1] ?? 0)}.jpg`);
                if (((s as any).ARGS ?? 0)[1] === 1) {
                  scene.img('images/shared/sex/after/pillow_talk1.jpg');
                } else {
                  scene.img('images/shared/sex/after/pillow_talk2.jpg');
                  if (((s as any).ARGS ?? 0)[1] === 3) {
                    scene.img('images/shared/sex/after/pillow_talk3.jpg');
                  } else {
                    scene.img('images/shared/sex/after/pillow_talk4.jpg');
                    if (((s as any).ARGS ?? 0)[1] === 5) {
                      scene.img('images/shared/sex/after/pillow_talk5.jpg');
                    } else {
                      scene.img('images/shared/sex/after/pillow_talk6.jpg');
                      if (((s as any).ARGS ?? 0)[1] === 7) {
                        scene.img('images/shared/sex/after/pillow_talk7.jpg');
                      } else {
                        scene.img('images/shared/sex/after/smile1.jpg');
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
    default:
      enterStart(s, scene);
      break;
  }
}

export const sex_ev_pillow_talk: LocationDef = {
  name: 'sex_ev_pillow_talk',
  region: 'other',
  enter: enter,
};
