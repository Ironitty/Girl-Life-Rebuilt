import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCoursesinfo(s: GameState, scene: SceneBuilder): void {
  (s as any).jumploc = 'generalsub';
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Class schedule</h2></center>');
  scene.text('Monday: Math, Russian, Literature, Art, Biology, P.E');
  scene.text('Tuesday: English, Geography, Science, Shop, Computer, Music');
  scene.text('Wednesday: Math, Russian, Biology, History, Computer and P.E.');
  scene.text('Thursday: English, Geography, Science, Shop, Computer, Music');
  scene.text('Friday: Math, Russian, Literature, Art, History and P.E.');
  scene.text('<center><h2>Grades</h2></center>');
  qspCall(s, 'grades', 'assign_grade_description', 'school');
  (s as any).temp_grade_thr = '20,40,70,90';
  scene.text('<table cellpadding="2" cellspacing="0">');
  // TODO-QSP: dynamic text: '<tr><td>Math:</td><td><<$class_grade_desc[''school_math_grade'']>></td><td>' + ...
  scene.text(`<tr><td>Math:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_math_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_math_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Russian:</td><td><<$class_grade_desc[''school_rus_grade'']>></td><td>' ...
  scene.text(`<tr><td>Russian:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_rus_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_rus_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Literature:</td><td><<$class_grade_desc[''school_lit_grade'']>></td><td...
  scene.text(`<tr><td>Literature:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_lit_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_lit_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Art:</td><td><<$class_grade_desc[''school_art_grade'']>></td><td>' + $f...
  scene.text(`<tr><td>Art:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_art_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_art_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Biology:</td><td><<$class_grade_desc[''school_bio_grade'']>></td><td>' ...
  scene.text(`<tr><td>Biology:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_bio_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_bio_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>English:</td><td><<$class_grade_desc[''school_eng_grade'']>></td><td>' ...
  scene.text(`<tr><td>English:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_eng_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_eng_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Geography:</td><td><<$class_grade_desc[''school_geo_grade'']>></td><td>...
  scene.text(`<tr><td>Geography:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_geo_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_geo_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Science:</td><td><<$class_grade_desc[''school_sci_grade'']>></td><td>' ...
  scene.text(`<tr><td>Science:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_sci_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_sci_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>History:</td><td><<$class_grade_desc[''school_his_grade'']>></td><td>' ...
  scene.text(`<tr><td>History:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_his_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_his_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Shop:</td><td><<$class_grade_desc[''school_shop_grade'']>></td><td>' + ...
  scene.text(`<tr><td>Shop:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_shop_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_shop_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Computer:</td><td><<$class_grade_desc[''school_comp_grade'']>></td><td>...
  scene.text(`<tr><td>Computer:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_comp_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_comp_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>Music:</td><td><<$class_grade_desc[''school_mus_grade'']>></td><td>' + ...
  scene.text(`<tr><td>Music:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_mus_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_mus_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  // TODO-QSP: dynamic text: '<tr><td>P.E.:</td><td><<$class_grade_desc[''school_pe_grade'']>></td><td>' + $f...
  scene.text(`<tr><td>P.E.:</td><td>${((s as any).class_grade_desc ?? 0)?.['school_pe_grade'] ?? ''}</td><td>' + $func('progressbar', 'positive', class['school_pe_grade'], 0, 0, 0, ', ', $temp_grade_thr) + '</td></tr>`);
  scene.text('</table>');
  // TODO-QSP: dynamic text: A grade of 1 means "Very Poor" and is generally only used for absence. 2 means "...
  scene.text(`A grade of 1 means "Very Poor" and is generally only used for absence. 2 means "Unsatisfactory" and is also a failing grade. 3 means "Satisfactory" and is a passing grade. 4 means "Good". 5 means "Excellent" and is only given to the best students. The number shown on the progress bar (0–100) is the internal variable grade that changes with ${((s as any).pcs_nickname || '')}'s actions; the letter grade beside it is the official mark.`);
  qspCall(s, 'grades', 'grade above', 'school', 90);
  qspCall(s, 'grades', 'grade above', 'school', 70);
  qspCall(s, 'grades', 'grade above', 'school', 50);
  qspCall(s, 'grades', 'grade above', 'school', 40);
  if (((s as any).class ?? 0)?.['school_grades_above_90'] === 13) {
    scene.text('You\'re getting top marks in all your classes and are the best student in the school. You\'ll have no problem getting into university.');
  } else {
    if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
      scene.text('You\'re getting top marks in more than half of your classes and are not failing any of the others. You\'re one of the best students in the school and will have no problem getting into university.');
    } else {
      if (((s as any).class ?? 0)?.['school_grades_above_90'] > 6) {
        scene.text('You\'re getting top marks in more than half of your classes, and even if you are doing worse in the others, you\'re still one of the best students in the school. You should have no problem getting into university.');
      } else {
        if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
          scene.text('You\'re only getting top marks in a few of your classes, but the rest of your grades are still good. You should have no trouble getting into university.');
        } else {
          if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
            scene.text('You\'re only getting top marks in a few of your classes, but you\'re not failing any of the others and will likely have no trouble getting into university. Improving your bad grades wouldn\'t be a bad idea, though.');
          } else {
            if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_70'] > 10) {
              scene.text('You\'re getting top marks in a few of your classes, but you should try and improve your other grades if you want to get into university.');
            } else {
              if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                scene.text('You\'re only getting top marks in some of your classes, but you\'re not failing any classes. You\'ll need to improve your grades if you want to get into university.');
              } else {
                if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                  scene.text('You\'re getting top marks in a few of your classes, but are scoring poorly in some of the others. You should improve your grades if you want to get into university.');
                } else {
                  if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                    scene.text('You\'re getting top marks in a few of your classes, but are scoring poorly in a lot of the others. If you want to get into university, then you\'ll need to do something about your bad grades.');
                  } else {
                    if (((s as any).class ?? 0)?.['school_grades_above_90'] > 0) {
                      scene.text('Even a top mark or two won\'t help when you\'re failing more than half of your classes. Your grades will require a lot of work if you want to go to university.');
                    } else {
                      if (((s as any).class ?? 0)?.['school_grades_above_70'] === 13) {
                        scene.text('You\'re getting good grades in all of your classes, but no excellent grades. You should have no trouble getting into university, but getting some better marks won\'t hurt.');
                      } else {
                        if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                          scene.text('You\'re getting good grades in over half of your classes, but no excellent grades. You\'re not failing any classes, but it wouldn\'t hurt to improve some of your bad grades, especially if you want to get into university.');
                        } else {
                          if (((s as any).class ?? 0)?.['school_grades_above_70'] > 6  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                            scene.text('You\'re getting good grades in over half of your classes, but are scoring poorly in a few of the others. You\'ll need to improve your grades if you want to get into university.');
                          } else {
                            if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                              scene.text('You\'re getting good grades in a few of your classes, but no excellent grades. You\'re not failing any classes, but you\'ll need to improve your grades if you want to get into university.');
                            } else {
                              if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                                scene.text('You\'re getting good grades in a few of your classes, but are failing a few of the others. If you want to get into university, then you\'ll need to improve some of your bad grades.');
                              } else {
                                if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0  &&  ((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                                  scene.text('You\'re getting good grades in a few of your classes, but are failing a lot of the others. If you want to get into university, then you\'ll really need to improve your grades.');
                                } else {
                                  if (((s as any).class ?? 0)?.['school_grades_above_70'] > 0) {
                                    scene.text('A good grade or two isn\'t enough when you\'re failing more than half of your classes. It will require a lot of work for you to turn this one around.');
                                  } else {
                                    if (((s as any).class ?? 0)?.['school_grades_above_40'] === 13) {
                                      scene.text('You\'re not getting any good grades, but at least you\'re not failing any classes. Your grades will require a lot of work if you want to go to university.');
                                    } else {
                                      if (((s as any).class ?? 0)?.['school_grades_above_40'] > 10) {
                                        scene.text('Failing this many classes puts you in danger of not graduating.');
                                      } else {
                                        if (((s as any).class ?? 0)?.['school_grades_above_40'] > 6) {
                                          scene.text('You\'re failing a lot of your classes and are barely passing the rest. You won\'t graduate if you can\'t get your grades up.');
                                        } else {
                                          scene.text('You\'re failing all of your classes! You need to do something about this if you want to graduate.');
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal', 'generaltab'] },
  ]);
  scene.build();
}

function enterCreateGrid(s: GameState, scene: SceneBuilder): void {
  (s as any).grid_text = '';
  (s as any).grid_count = 0;
  (s as any).temp_grid_grouptipe = ((s as any).locArgs?.[1] ?? 0);
  (s as any).temp_grid_groupname = ((s as any).locArgs?.[2] ?? 0);
  scene.text('<center><table cellspacing="3">');
  (s as any).i = 1;
  // TODO-QSP: :grid_loop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === ((s as any).temp_grid_grouptipe ?? 0)  &&  ((s as any).schoolenable ?? 0)['A' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: $grid_text += '<td><table bgcolor=<<$theme[''table_bg_alt'']>>><tr><td align="center"><a href="exec:...
    (s as any).grid_count = ((s as any).grid_count ?? 0) + (1);
    if (((s as any).grid_count ?? 0) === 6  &&  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] === ((s as any).temp_grid_grouptipe ?? 0)) {
      // TODO-QSP: $grid_text += '</tr><tr>'
      (s as any).grid_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'grid_loop'
  }
  // TODO-QSP: dynamic text: <<$grid_text>>
  scene.text(`${((s as any).grid_text || '')}`);
  scene.text('</table></center>');
  // TODO-QSP: end
  scene.build();
}

function enterSchool(s: GameState, scene: SceneBuilder): void {
  (s as any).jumploc = 'generalsub';
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>School</h2></center>');
  scene.text('You attend the secondary school in Pavlovsk, which is fairly new, built only a few years ago along with a new sports field. When the school was built it was state of the art, but as the years have passed, it is starting to fall into disrepair. The old school building was left to rot and is now a shell of its former self. It\'s sometimes used by the students as a place to hang out.');
  scene.text('You have known most of your classmates your whole life and are on friendly terms with some of them, but less so with others. They are divided into four different cliques, except for the outcasts, who no one wants anything to do with unless it involves bullying them.');
  scene.text('At the top are the <b>Cool kids</b>. They are the ones with that <i>IT</i> factor. Maybe they are wealthy, charming, possess a good sense of style, are just good looking, or all of the above. They are mostly concerned with appearances above all things. If you don\'t look good, then they don\'t consider you worthy.');
  scene.text('Next are the <b>Jocks</b>. They are all into one or more sports and spend most of their time working out or playing sports while looking down on those with no athletic ability. There is some overlap between them and the cool kids and they mostly get along with each other.');
  scene.text('Following them are the <b>Nerds</b>, who are all into what many consider \'nerdy\' or \'geeky\' stuff like cosplay, role playing games and other fringe activities. Most of them are also very smart and do well in school. They tend to keep their heads down and focus on doing their school work.');
  scene.text('Last are the <b>Gopniks</b>. They are a rowdy bunch that range from small time criminals, to party animals and troublemakers. They thumb their nose at authority and are often barely passing their classes, leaving many to wonder why they bother coming to school at all.');
  scene.text('<center><h2>Students & Teachers</h2></center>');
  scene.text('<center><h2>Cool kids</h2></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 1, 'popular']; enterCreateGrid(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Jocks</h2></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 2, 'jocks']; enterCreateGrid(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Nerds</h2></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 3, 'nerds']; enterCreateGrid(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Gopniks</h2></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 4, 'gopniks']; enterCreateGrid(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Outcast</h2></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 5, 'outcasts']; enterCreateGrid(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><h2>Teachers & Facility</h2></center>');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 6, 'teachers']; enterCreateGrid(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal', 'generaltab'] },
  ]);
  scene.build();
}

function enterPopular(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Cool kids</h2></center>');
  scene.text('All the popular kids listed by popularity within their own clique, which is mostly based on style, natural charm, good looks and how wealthy their family is.');
  qspCall(s, 'journal_NPC_information', 'A1', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A22', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A17', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A15', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A139', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A146', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A140', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A147', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A14', 'gschool');
  if (((s as any).npc_grupTipe ?? 0)?.['A25'] === 1) {
    qspCall(s, 'journal_NPC_information', 'A25', 'gschool');
  }
  qspCall(s, 'journal_NPC_information', 'A148', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A4', 'gschool');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal_school', 'school'] },
  ]);
  scene.build();
}

function enterJocks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Jocks</h2></center>');
  scene.text('All the jocks listed by popularity within their own clique, which mostly is how gifted they are with sports and their attitude.');
  qspCall(s, 'journal_NPC_information', 'A149', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A23', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A3', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A18', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A8', 'gschool');
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 2) {
    qspCall(s, 'journal_NPC_information', 'A5', 'gschool');
  }
  qspCall(s, 'journal_NPC_information', 'A165', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A13', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A150', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A141', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A19', 'gschool');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal_school', 'school'] },
  ]);
  scene.build();
}

function enterNerds(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Nerds</h2></center>');
  scene.text('All the nerds in your school, by their own internal pecking order. It seems even nerds have a hierarchy.');
  qspCall(s, 'journal_NPC_information', 'A152', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A2', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A142', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A153', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A12', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A6', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A16', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A151', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A240', 'gschool');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal_school', 'school'] },
  ]);
  scene.build();
}

function enterGopniks(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Gopniks</h2></center>');
  scene.text('All the gopniks listed by popularity within their own clique, which is mostly how tough they are, their attitude, and how scared the rest are of them. The girls don\'t have the respect of the boys, and most are seen as beneath the guys.');
  qspCall(s, 'journal_NPC_information', 'A9', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A10', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A11', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A157', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A156', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A158', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A154', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A145', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A24', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A20', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A143', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A21', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A144', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A155', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A189', 'gschool');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal_school', 'school'] },
  ]);
  scene.build();
}

function enterOutcasts(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Outcast</h2></center>');
  qspCall(s, 'journal_NPC_information', 'A7', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A159', 'gschool');
  if (((s as any).npc_grupTipe ?? 0)?.['A25'] === 5) {
    qspCall(s, 'journal_NPC_information', 'A25', 'gschool');
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A5'] === 5) {
    qspCall(s, 'journal_NPC_information', 'A5', 'gschool');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal_school', 'school'] },
  ]);
  scene.build();
}

function enterTeachers(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'journal', 'journalmenu');
  scene.text('<center><h2>Teachers & Facility</h2></center>');
  qspCall(s, 'journal_NPC_information', 'A134', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A132', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A26', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A135', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A129', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A128', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A137', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A130', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A131', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A69', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A138', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A136', 'gschool');
  qspCall(s, 'journal_NPC_information', 'A133', 'gschool');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeaveactions(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['journal_school', 'school'] },
  ]);
  scene.build();
}

function enterLeaveactions(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Put your notebook down', handler: (st: GameState) => {
    (s as any).jclose = 1;
    dynamicGoto(s, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'coursesinfo':
      enterCoursesinfo(s, scene);
      break;
    case 'create_grid':
      enterCreateGrid(s, scene);
      break;
    case 'school':
      enterSchool(s, scene);
      break;
    case 'popular':
      enterPopular(s, scene);
      break;
    case 'jocks':
      enterJocks(s, scene);
      break;
    case 'nerds':
      enterNerds(s, scene);
      break;
    case 'gopniks':
      enterGopniks(s, scene);
      break;
    case 'outcasts':
      enterOutcasts(s, scene);
      break;
    case 'teachers':
      enterTeachers(s, scene);
      break;
    case 'leaveactions':
      enterLeaveactions(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const journal_school: LocationDef = {
  name: 'journal_school',
  title: '<center><h2>Class schedule</h2></center>',
  region: 'other',
  enter: enter,
};
