import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Class schedule</h2></center>');
  scene.text('Monday: Math, Russian, Literature, Art, Biology, P.E');
  scene.text('Tuesday: English, Geography, Science, Shop, Computer, Music');
  scene.text('Wednesday: Math, Russian, Biology, History, Computer and P.E.');
  scene.text('Thursday: English, Geography, Science, Shop, Computer, Music');
  scene.text('Friday: Math, Russian, Literature, Art, History and P.E.');
  scene.text('<center><h2>Grades</h2></center>');
  qspCall(s, 'grades', 'assign_grade_description', 'school');
  // TODO-QSP: *p '<table cellpadding="2" cellspacing="0">'
  // TODO-QSP: *p '<tr><td>Math:</td><td><<$class_grade_desc[''school_math_grade'']>></td><td>' + $func('progressba...
  // TODO-QSP: *p '<tr><td>Russian:</td><td><<$class_grade_desc[''school_rus_grade'']>></td><td>' + $func('progress...
  // TODO-QSP: *p '<tr><td>Literature:</td><td><<$class_grade_desc[''school_lit_grade'']>></td><td>' + $func('progr...
  // TODO-QSP: *p '<tr><td>Art:</td><td><<$class_grade_desc[''school_art_grade'']>></td><td>' + $func('progressbar'...
  // TODO-QSP: *p '<tr><td>Biology:</td><td><<$class_grade_desc[''school_bio_grade'']>></td><td>' + $func('progress...
  // TODO-QSP: *p '<tr><td>English:</td><td><<$class_grade_desc[''school_eng_grade'']>></td><td>' + $func('progress...
  // TODO-QSP: *p '<tr><td>Geography:</td><td><<$class_grade_desc[''school_geo_grade'']>></td><td>' + $func('progre...
  // TODO-QSP: *p '<tr><td>Science:</td><td><<$class_grade_desc[''school_sci_grade'']>></td><td>' + $func('progress...
  // TODO-QSP: *p '<tr><td>History:</td><td><<$class_grade_desc[''school_his_grade'']>></td><td>' + $func('progress...
  // TODO-QSP: *p '<tr><td>Shop:</td><td><<$class_grade_desc[''school_shop_grade'']>></td><td>' + $func('progressba...
  // TODO-QSP: *p '<tr><td>Computer:</td><td><<$class_grade_desc[''school_comp_grade'']>></td><td>' + $func('progre...
  // TODO-QSP: *p '<tr><td>Music:</td><td><<$class_grade_desc[''school_mus_grade'']>></td><td>' + $func('progressba...
  // TODO-QSP: *p '<tr><td>P.E.:</td><td><<$class_grade_desc[''school_pe_grade'']>></td><td>' + $func('progressbar'...
  // TODO-QSP: *p '</table>'
  // TODO-QSP: dynamic text: A grade of 1 means "Very Poor" and is generally only used for absence. 2 means "...
  scene.text(`A grade of 1 means "Very Poor" and is generally only used for absence. 2 means "Unsatisfactory" and is also a failing grade. 3 means "Satisfactory" and is a passing grade. 4 means "Good". 5 means "Excellent" and is only given to the best students. The number shown on the progress bar (0–100) is the internal variable grade that changes with ${((s as any).pcs_nickname ?? 0)}'s actions; the letter grade beside it is the official mark.`);
  qspCall(s, 'grades', 'grade above', 'school', 90);
  qspCall(s, 'grades', 'grade above', 'school', 70);
  qspCall(s, 'grades', 'grade above', 'school', 50);
  qspCall(s, 'grades', 'grade above', 'school', 40);
  if (((s as any).class ?? 0)?.['school_grades_above_90'] === 13) {
    scene.text('You\'re getting top marks in all your classes and are the best student in the school. You\'ll have no problem getting into university.');
  } else {
    scene.text('You\'re getting top marks in more than half of your classes and are not failing any of the others. You\'re one of the best students in the school and will have no problem getting into university.');
    if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6) {
      scene.text('You\'re getting top marks in more than half of your classes, and even if you are doing worse in the others, you\'re still one of the best students in the school. You should have no problem getting into university.');
    } else {
      scene.text('You\'re only getting top marks in a few of your classes, but the rest of your grades are still good. You should have no trouble getting into university.');
      if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
        scene.text('You\'re only getting top marks in a few of your classes, but you\'re not failing any of the others and will likely have no trouble getting into university. Improving your bad grades wouldn\'t be a bad idea, though.');
      } else {
        scene.text('You\'re getting top marks in a few of your classes, but you should try and improve your other grades if you want to get into university.');
        if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
          scene.text('You\'re only getting top marks in some of your classes, but you\'re not failing any classes. You\'ll need to improve your grades if you want to get into university.');
        } else {
          scene.text('You\'re getting top marks in a few of your classes, but are scoring poorly in some of the others. You should improve your grades if you want to get into university.');
          if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
            scene.text('You\'re getting top marks in a few of your classes, but are scoring poorly in a lot of the others. If you want to get into university, then you\'ll need to do something about your bad grades.');
          } else {
            scene.text('Even a top mark or two won\'t help when you\'re failing more than half of your classes. Your grades will require a lot of work if you want to go to university.');
            if (((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
              scene.text('You\'re getting good grades in all of your classes, but no excellent grades. You should have no trouble getting into university, but getting some better marks won\'t hurt.');
            } else {
              scene.text('You\'re getting good grades in over half of your classes, but no excellent grades. You\'re not failing any classes, but it wouldn\'t hurt to improve some of your bad grades, especially if you want to get into university.');
              if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                scene.text('You\'re getting good grades in over half of your classes, but are scoring poorly in a few of the others. You\'ll need to improve your grades if you want to get into university.');
              } else {
                scene.text('You\'re getting good grades in a few of your classes, but no excellent grades. You\'re not failing any classes, but you\'ll need to improve your grades if you want to get into university.');
                if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                  scene.text('You\'re getting good grades in a few of your classes, but are failing a few of the others. If you want to get into university, then you\'ll need to improve some of your bad grades.');
                } else {
                  scene.text('You\'re getting good grades in a few of your classes, but are failing a lot of the others. If you want to get into university, then you\'ll really need to improve your grades.');
                  if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0) {
                    scene.text('A good grade or two isn\'t enough when you\'re failing more than half of your classes. It will require a lot of work for you to turn this one around.');
                  } else {
                    scene.text('You\'re not getting any good grades, but at least you\'re not failing any classes. Your grades will require a lot of work if you want to go to university.');
                    if (((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                      scene.text('Failing this many classes puts you in danger of not graduating.');
                    } else {
                      scene.text('You\'re failing a lot of your classes and are barely passing the rest. You won\'t graduate if you can\'t get your grades up.');
                      scene.text('You\'re failing all of your classes! You need to do something about this if you want to graduate.');
                    }
                    qspCall(s, 'journal_school', 'leaveactions');
                    scene.actions([
                      { label: 'Go back', goto: ['journal', 'generaltab'] },
                    ]);
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

export const journal_school: LocationDef = {
  name: 'journal_school',
  title: '<center><h2>Class schedule</h2></center>',
  region: 'other',
  description: ['Monday: Math, Russian, Literature, Art, Biology, P.E'],
  enter: enter,
};
