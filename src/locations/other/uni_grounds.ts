import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'main') {
    (s as any).music_loop = 0;
    qspCall(s, 'core_library', 'setloc', 'uni_grounds', '');
    qspCall(s, 'katja_meynold_schedule', '');
    qspCall(s, 'schedule', 'A23');
    qspCall(s, 'stat', '');
    if (((s as any).university ?? 0)?.['campus_event_time'] > ((s as any).totminut ?? 0)) {
      (s as any).university['campus_event_time'] = ((s as any).totminut ?? 0);
    }
    if (((s as any).totminut ?? 0) > ((s as any).university ?? 0)?.['campus_event_time'] + 60  &&  ((s as any).sunWeather ?? 0) === 1  &&  (((s as any).hour ?? 0) !== 8  ||  ((s as any).minut ?? 0) <= 50)  &&  (((s as any).hour ?? 0) !== 9  ||  ((s as any).minut ?? 0) <= 20)  &&  (((s as any).hour ?? 0) !== 13  ||  ((s as any).minut ?? 0) <= 5)  &&  (((s as any).university ?? 0)?.['semester_week'] + ((s as any).university ?? 0)?.['exam_week']) > 0) {
      (s as any).university['campus_event_time'] = ((s as any).totminut ?? 0);
      if (((s as any).hour ?? 0) > 7  &&  (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3)) {
        if ((((s as any).hotornot_uni ?? 0) === 0  ||  ((s as any).fuckornot_uni ?? 0) === 0)  &&  ((s as any).yearstart ?? 0) === 2  &&  ((s as any).month ?? 0) >= 9  &&  ((s as any).day ?? 0) >= 11) {
          (s as any).fuckornot_uni = 1;
          (s as any).hotornot_uni = 1;
          scene.text('As you head to class, you overhear many of your fellow students talking. It seems someone has made websites ranking both the male and female students on how bangable they are. You overhear someone mention the links and make a note of them to check when you get a chance.');
        } else {
          scene.actions([{ label: 'Continue', goto: ['uni_grounds', 'day_warm'] }]);
          if (((s as any).temper ?? 0) >= 8  &&  Math.floor(Math.random() * 10) + 0 === 0) {
            scene.actions([{ label: 'Continue', goto: ['uni_grounds', 'day_warm'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['uni_grounds', 'day_cold'] }]);
          }
          if ((((s as any).hour ?? 0) > 15  ||  ((s as any).hour ?? 0) === 1)  &&  (((s as any).daystage ?? 0) === 4  ||  ((s as any).daystage ?? 0) === 5)) {
            if (((s as any).temper ?? 0) >= 12  &&  Math.floor(Math.random() * 5) + 0 === 0) {
              scene.actions([{ label: 'Continue', goto: ['uni_grounds', 'night_warm'] }]);
            }
          }
        }
        if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
          if (((s as any).month ?? 0) >= 11  &&  ((s as any).month ?? 0) <= 12  ||  ((s as any).month ?? 0) >= 1  &&  ((s as any).month ?? 0) <= 3) {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
            }
            if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
            }
          } else {
            if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) <= 23) {
            }
            if (((s as any).hour ?? 0) >= 0  &&  ((s as any).hour ?? 0) <= 7) {
            }
          }
        }
        if (((s as any).mother ?? 0)?.['kickedout_timer'] !== 0  &&  ((s as any).mother ?? 0)?.['kickedout_timer'] + 3 <= ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 6  &&  ((s as any).hour ?? 0) <= 15  &&  ((s as any).cumloc ?? 0)[11] === 0) {
          qspCall(s, 'mother_chats', 'reconciliation_talk');
          return;
        }
        if (((s as any).hotcat ?? 0) >= 6  &&  ((s as any).hour ?? 0) > 15  &&  ((s as any).hour ?? 0) < 18  &&  ((s as any).week ?? 0) < 6  &&  ((s as any).porn_studio ?? 0)?.['pickup_porn'] === 0  &&  ((s as any).film ?? 0) === 0  &&  Math.floor(Math.random() * 3) + 1 === 1) {
          scene.actions([{ label: 'Continue', goto: ['pickup_porn', 'start'] }]);
        }
        scene.text('<center><b>University Campus</b></center>');
        if (((s as any).month ?? 0) >= 11  ||  ((s as any).month ?? 0) <= 3) {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/city/island/university/uni_day_winter.jpg');
            scene.text('The university boasts a large amount of buildings hosting many different types of classes. Snow covers the ground and the cold wind bites through your clothes. Only a few of the walkways have been cleared of snow.');
            if (((s as any).week ?? 0) > 5) {
              scene.text('The campus is pretty quiet right now. The few students you see are rushing across the cold snowy quad.');
            } else {
              scene.text('The campus is quite lively right now with many students rushing to their next class, trying not to slip on any icy spots in the courtyard.');
            }
          } else {
            scene.img('images/locations/city/island/university/uni_winter_night.jpg');
            scene.text('The university boasts a large amount of buildings hosting many different types of classes. Snow covers the ground and the biting wind chills you to the bone. The lights around the walkways glare off the snow and give it a surreal glow, lighting the night up surprisingly well.');
            scene.text('It\'s very quiet, with only a few students rushing across the campus, trying not to slip on any patches of ice.');
          }
        } else {
          if (((s as any).daystage ?? 0) === 2  ||  ((s as any).daystage ?? 0) === 3) {
            scene.img('images/locations/city/island/university/uni_day.jpg');
            scene.text('The university boasts a large amount of buildings hosting many different types of classes. It is nice and warm out.');
            if (((s as any).week ?? 0) === 7) {
              scene.text('Despite it being a Sunday, the quad is busy with students taking advantage of the nice weather, at least those who aren\'t still in their dorm rooms, recovering from a weekend of partying.');
            } else {
              scene.text('The campus is quite lively right now. Many of the students are taking advantage of the weather to hang out on the quad.');
              scene.text('The campus is quite lively right now. Most of the students are on their way to their next class, or hanging out with friends.');
            }
          } else {
            scene.img('images/locations/city/island/university/uni_night.jpg');
            scene.text('The university boasts a large amount of buildings hosting many different types of classes. During the night, the quad is fairly well lit, though the lights are spread out enough to leave dark spots scattered around.');
            if (((s as any).week ?? 0) === 7) {
              scene.text('The campus is quiet right now. Most of the students seem to be sleeping, worn out from the weekend.');
            } else {
              scene.text('The campus is quite lively right now. Many of the students are moving around the courtyard visiting each other or enjoying their weekend.');
              scene.text('The campus is quiet right now. Most of the students seem to be sleeping or studying late.');
            }
          }
        }
        if (((s as any).locat ?? 0)?.['katja'] === 25) {
          // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
          scene.text('You see \'+iif(katjaQW[\'know_katja_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'a redheaded girl\', \'<a href="exec:gt \'katja_chat\', \'start\'">Katja</a>\')+\' sitting while talking on her phone.');
        }
        if (((s as any).locat ?? 0)?.['A23'] === 17) {
          // TODO-QSP: dynamic text: You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' and...
          scene.text('You see \'+iif(AlbinaQW[\'know_albina_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'an attractive looking brunette\', \'<a href="exec:gt \'albina_events\', \'albina_jogging_uni\'">Albina</a>\')+\' jogging around the quad.');
          scene.text('Her well-toned physique and tight fitting yoga pants are drawing the attention of multiple boys and even some girls around her, but she appears to have earbuds in and doesn\'t pay much attention to them.');
        }
        if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'uni_lessons', 'schedule');
        }
        if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'uni_lessons', 'exam_schedule');
        }
        if (qspFunc(s, 'homes_properties', 'has_access', 'university_dorm')  ||  ((s as any).university ?? 0)?.['student'] === 1) {
          scene.actions([
            { label: 'Go to your room', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 7;
  }, goto: ['uni_dorm', 'dorm_room'] },
          ]);
        }
        if (((s as any).daystart ?? 0) >= 760) {
          qspCall(s, 'natbel_uni_dates_2', 'set_act');
        }
        if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 7)  ||  (((s as any).hour ?? 0) > 8  &&  ((s as any).hour ?? 0) < 23)) {
          scene.actions([
            { label: 'Go to the library', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['uni_library', 'start'] },
          ]);
        }
        if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 7  &&  ((s as any).hour ?? 0) < 17) {
          scene.actions([
            { label: 'Go to the administration building', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['uni_admin', 'start'] },
          ]);
        }
        if (((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) > 9  &&  ((s as any).hour ?? 0) < 17) {
          scene.actions([
            { label: 'Go to the university cafe', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
  }, goto: ['uni_cafe', ''] },
          ]);
        }
        scene.actions([
          { label: 'Return to the city', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['city_island', ''] },
          { label: 'Go to the dorms', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
  }, goto: ['uni_dorm', ''] },
        ]);
      }
    }
  }
  scene.build();
}

export const uni_grounds: LocationDef = {
  name: 'uni_grounds',
  title: 'As you head to class, you overhear many of your fellow stude',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['As you head to class, you overhear many of your fellow students talking. It seems someone has made websites ranking both the male and female students on how bangable they are. You overhear someone mention the links and make a note of them to check when you get a chance.'],
  enter: enter,
};
