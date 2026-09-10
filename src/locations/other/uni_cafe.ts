import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'uni_cafe', '');
  qspCall(s, 'stat', '');
  qspCall(s, 'katja_meynold_schedule', '');
  qspCall(s, 'schedule', 'A23');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>University Cafe</b></center>');
  scene.img('images/locations/city/island/university/uni_cafe.jpg');
  scene.text('The university cafe is a popular spot for students preparing for their exams or just unwinding from their busy schedule.');
  scene.text('It offers a rich variation of reasonably priced food and beverages. You can often overhear students complaining about the free, yet somewhat sub-par quality wi-fi.');
  if (((s as any).locat ?? 0)?.['katja'] === 28) {
    // TODO-QSP: dynamic text: You see '+iif(katjaQW['know_katja_uni'] = 0 and ($start_type['loc'] ! 'sg' and $...
    scene.text('You see \'+iif(katjaQW[\'know_katja_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'a cute redheaded girl\', \'<a href="exec:gt \'katja_chat\', \'uni_cafe\'">Katja</a>\')+\' sitting at a table eating her lunch.');
  }
  if ((((s as any).start_type ?? 0)?.['loc'] === 'sg'  ||  ((s as any).start_type ?? 0)?.['magic'] !== 'tg'  ||  ((s as any).artemQW ?? 0)?.['knows_dorm_room_number'] === 1)  &&  ((s as any).locat ?? 0)?.['A2'] === 'uni_cafe_lunch') {
    scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="exec:gt \'uni_cafe\',\'artem\'">Artem.</a>');
  }
  if (((s as any).locat ?? 0)?.['A23'] === 14) {
    // TODO-QSP: dynamic text: You see '+iif(AlbinaQW['know_albina_uni'] = 0 and ($start_type['loc'] ! 'sg' and...
    scene.text('You see \'+iif(AlbinaQW[\'know_albina_uni\'] = 0 and ($start_type[\'loc\'] ! \'sg\' and $start_type[\'magic\'] = \'tg\'), \'an attractive looking brunette\', \'<a href="exec:gt \'albina_events\', \'uni_cafe\'">Albina</a>\')+\' sitting at one of the tables, eating her lunch while texting on her phone.');
  }
  if (((s as any).week ?? 0) < 5  &&  ((s as any).hour ?? 0) === 12  &&  ((s as any).minut ?? 0) >= 30) {
    (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
    if ((((s as any).start_type ?? 0)?.['loc'] === 'sg'  ||  ((s as any).start_type ?? 0)?.['magic'] !== 'tg')  &&  ((s as any).yearstart ?? 0) > 1) {
      if (((s as any).temp_rand ?? 0) === 1) {
        scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="exec:gt \'uni_cafe\',\'lazar\'">Lazar.</a>');
      } else {
        scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="exec:gt \'uni_cafe\',\'dimka\'">Dimka.</a>');
        if (((s as any).temp_rand ?? 0) === 3) {
          scene.text('You see a familiar face sitting at one of the tables having lunch, your former classmate <a href="exec:gt \'uni_cafe\',\'marcus\'">Marcus.</a>');
        }
      }
      if (((s as any).temp_rand ?? 0) === 5) {
        if (((s as any).meet_kendra ?? 0) === 1) {
          scene.text('You see <a href="exec:gt \'uni_cafe\', \'kendra\'">Kendra</a> sitting at one of the tables having lunch.');
        } else {
          scene.text('You see a familiar face sitting at one of the tables having lunch, your mistress <a href="exec:gt \'uni_cafe\',\'kendra\'">Kendra.</a>');
          if (((s as any).pcs_hotcat ?? 0) >= 5) {
            scene.text('As you look around, you see a pretty young <a href="exec:gt \'uni_cafe\',\'kendra\'">black woman</a> sitting at one of the tables having lunch. She notices you and gives you a quick once-over before smiling and leaning back. She seems to be watching you with an inviting smile to join her.');
          } else {
            scene.text('As you look around, you see a pretty young black woman sitting at one of the tables. She notices you and gives you a quick once-over before returning to what she was doing. After a few minutes, she finishes her drink before getting up and leaving.');
          }
          if (((s as any).temp_rand ?? 0) === 6) {
            if (((s as any).DjibrilQW ?? 0)?.['meet'] === 1) {
              scene.text('You see a familiar face sitting at one of the tables having lunch, Olu\'s nephew <a href="exec:gt \'uni_cafe\',\'djibril\'">Djibril.</a>');
            } else {
              scene.text('As you look around, you see an attractive young <a href="exec:gt \'uni_cafe\',\'djibril\'">black man</a> sitting at one of the tables having lunch. When he notices you looking at him, he gives you a friendly smile and a wave. It seems he is the friendly sort and seems to be interested in you.');
              scene.text('As you look around, you see an attractive young black man sitting at one of the tables having lunch. He notices you and gives you a quick once-over before returning to what he is doing. After a few minutes, he finishes his drink before getting up and leaving.');
            }
          } else {
            scene.text('As you look around, you don\'t see anyone you recognize hanging out today.');
          }
        }
        qspCall(s, 'uni_cafe', 'menu');
        if (((s as any).university ?? 0)?.['semester_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'uni_lessons', 'schedule');
        }
        if (((s as any).university ?? 0)?.['exam_week'] > 0  &&  ((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
          qspCall(s, 'uni_lessons', 'exam_schedule');
        }
        scene.actions([
          { label: 'Leave', goto: ['uni_grounds', ''] },
        ]);
      }
    }
  }
  scene.build();
}

export const uni_cafe: LocationDef = {
  name: 'uni_cafe',
  title: 'University Cafe',
  region: 'other',
  locationType: 'public_indoors',
  description: ['The university cafe is a popular spot for students preparing for their exams or just unwinding from their busy schedule.'],
  enter: enter,
};
