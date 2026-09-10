import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSetWillpower(s: GameState, scene: SceneBuilder): void {
  if (((s as any).katjaQW ?? 0)?.['dom'] < 0) {
    qspCall(s, 'willpower', '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'easy');
  } else {
    qspCall(s, 'willpower', '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0));
    qspCall(s, 'willpower', '', ((s as any).locArgs?.[1] ?? 0), ((s as any).locArgs?.[2] ?? 0), 'hard');
  }
  scene.build();
}

function enterActivity(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'katja_meynold_schedule', '');
  if (((s as any).locat ?? 0)?.['katja'] === 53  &&  (((s as any).katjaQW ?? 0)?.['know_katja_uni'] === 1  ||  (((s as any).start_type ?? 0)?.['loc'] === 'sg'  ||  ((s as any).start_type ?? 0)?.['magic'] !== 'tg'))) {
    if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 600 < ((s as any).totminut ?? 0)) {
      (s as any).katjaQW['disco_loc'] = 0;
    }
    if (((s as any).katjaQW ?? 0)?.['disco_loc'] >= 3  &&  ((s as any).katjaQW ?? 0)?.['disco_loc'] <= 6) {
      if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 30 < ((s as any).totminut ?? 0)) {
        (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
        if (((Math.floor(Math.random() * 15) + 1) <= (((s as any).min ?? 0)(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  &&  ((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0)  ||  (((s as any).katjaQW ?? 0)?.['liberated']  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
          if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 3  &&  (Math.floor(Math.random() * 5) + 0) < 4) {
            (s as any).katjaQW['nightclub_private_room_boy'] = 1;
            (s as any).katjaQW['disco_loc'] = 7;
          } else {
            (s as any).katjaQW['alone_with_other_day'] = ((s as any).daystart ?? 0);
            if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 5) {
              qspCall(s, 'katja_procedural', 'sex_set', 0, 1);
            } else {
              qspCall(s, 'katja_procedural', 'sex_set', 2);
              qspCall(s, 'katja_procedural', 'sex_set', 1);
            }
            if (((s as any).hour ?? 0) > 10) {
              (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0);
            } else {
              (s as any).locat['katja_rand2'] = ((s as any).daystart ?? 0) - 1;
            }
            (s as any).locat['katja_save2'] = 54;
            (s as any).locat['katja'] = ((s as any).locat ?? 0)?.['katja_save2'];
          }
        } else {
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            (s as any).katjaQW['disco_loc'] = 2;
            (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (Math.floor(Math.random() * 2) + 1);
          } else {
            (s as any).katjaQW['disco_loc'] = 8;
            (s as any).katjaQW['disco_loc'] = 1;
          }
        }
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 15 < ((s as any).totminut ?? 0)) {
        (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
        (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
        if ((!(Math.floor(Math.random() * 9) + 0))) {
          (s as any).katjaQW['disco_loc'] = 8;
        } else {
          (s as any).katjaQW['disco_loc'] = 1;
        }
      }
      if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 7) {
        if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 60 < ((s as any).totminut ?? 0)) {
          (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
          if ((!(Math.floor(Math.random() * 5) + 0))) {
            (s as any).katjaQW['disco_loc'] = 8;
          } else {
            (s as any).katjaQW['disco_loc'] = 7;
            (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
            (s as any).katjaQW['disco_loc'] = 1;
          }
        }
      } else {
        if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 15 < ((s as any).totminut ?? 0)) {
          (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
          if ((!(Math.floor(Math.random() * 6) + 0))) {
            (s as any).katjaQW['disco_loc'] = 2;
          } else {
            (s as any).katjaQW['disco_loc'] = 1;
          }
        }
        if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 9) {
          if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 60 < ((s as any).totminut ?? 0)) {
            (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
            if ((!(Math.floor(Math.random() * 5) + 0))) {
              (s as any).katjaQW['disco_loc'] = 8;
            } else {
              (s as any).katjaQW['disco_loc'] = 9;
              (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
              (s as any).katjaQW['disco_loc'] = 1;
            }
          }
        } else {
          if (((s as any).katjaQW ?? 0)?.['disco_check_time'] + 15 < ((s as any).totminut ?? 0)) {
            (s as any).katjaQW['disco_check_time'] = ((s as any).totminut ?? 0);
            if ((Math.floor(Math.random() * 4) + 1) <= 3) {
              (s as any).katjaQW['disco_loc'] = 1;
            } else {
              (s as any).katjaQW['disco_loc'] = 2;
              (s as any).katjaQW['drinks'] = ((s as any).katjaQW['drinks'] ?? 0) + (1);
              if ((!(Math.floor(Math.random() * 9) + 0))) {
                (s as any).katjaQW['disco_loc'] = 8;
              } else {
                (s as any).katjaQW['disco_loc'] = 3;
                if ((Math.floor(Math.random() * 12) + 1) <= (((s as any).min ?? 0)(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10  ||  (((s as any).katjaQW ?? 0)?.['relationship_talk'] === 1  &&  ((s as any).katjaQW ?? 0)?.['faithful'] === 0  &&  (Math.floor(Math.random() * 8) + 1) <= (((s as any).min ?? 0)(qspFunc(s, 'katja_procedural', 'willing_to_be_naughty'), 100) - 50) / 10)  ||  (((s as any).katjaQW ?? 0)?.['liberated'] === 1  &&  (Math.floor(Math.random() * 4) + 0) === 0)) {
                  (s as any).katjaQW['disco_loc'] = Math.floor(Math.random() * 3) + 4;
                }
              }
            }
            if (((s as any).locArgs?.[1] ?? 0) === 'dance_floor') {
              if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 1) {
                scene.text('You see <a href="exec: gt \'katja_nightclub\',\'dance_approach\'">Katja</a> on the dance floor, dancing alone.');
              } else {
                scene.text('You see <a href="exec: gt \'katja_nightclub\',\'dance_guy_approach\'">Katja</a> on the dance floor, dancing with a guy.');
                if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 4) {
                } else {
                  if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 6) {
                  }
                  if (((s as any).locArgs?.[1] ?? 0) === 'bar') {
                    if (((s as any).katjaQW ?? 0)?.['disco_loc'] === 2) {
                      scene.text('You see <a href="exec: gt \'katja_nightclub\',\'bar_approach\'">Katja</a> at the bar, talking with the bartender.');
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
    case 'set_willpower':
      enterSetWillpower(s, scene);
      break;
    case 'activity':
      enterActivity(s, scene);
      break;
    default:
      enterSetWillpower(s, scene);
      break;
  }
}

export const katja_nightclub: LocationDef = {
  name: 'katja_nightclub',
  region: 'other',
  enter: enter,
};
