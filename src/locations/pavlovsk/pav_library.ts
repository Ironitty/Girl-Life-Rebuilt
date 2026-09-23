import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_library', '');
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Community center library</b></center>');
  scene.img('images/locations/pavlovsk/community/library/gdkbibl.jpg');
  scene.text('For such a small town, the library is surprisingly large, containing many interesting books on a wide variety of subjects.');
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 19) {
    qspGoto(s, 'pav_library', '');
    scene.actions([
      { label: 'Wait for game night to start', handler: (st: GameState) => {
    (st as any).minut = 60;
  } },
    ]);
  }
  if (((s as any).nerd_game ?? 0)?.['game_day'] === ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) === 20) {
    scene.actions([
      { label: 'Join the nerds', goto: ['nerd_game_night', 'game'] },
    ]);
  }
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 18) {
    scene.text('The library is closed.');
    return;
  }
  if (((s as any).start_type ?? 0)?.['loc'] === 'sg'  &&  (!((s as any).kanikuli ?? 0))) {
    if (((s as any).week ?? 0) <= 5  &&  ((s as any).nerdstudynight ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 15  &&  ((s as any).gschoolVars ?? 0)?.['school_diploma'] === 0) {
      (s as any).temp_nerds_here = 1;
      scene.text('The nerds are sitting at a table studying together.');
    } else {
      if (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
        if (((s as any).nataliaQW ?? 0)?.['library_day_check'] !== ((s as any).daystart ?? 0)) {
          ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['library_day_check'] = ((s as any).daystart ?? 0);
          if ((!(Math.floor(Math.random() * 4) + 0))) {
            ((s as any).nataliaQW = (s as any).nataliaQW ?? {})['library_day'] = ((s as any).daystart ?? 0);
          }
        }
        if (((s as any).nataliaQW ?? 0)?.['library_day'] === ((s as any).daystart ?? 0)) {
          scene.text('You see your classmate <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027natalia_pavlova/u0027, /u0027library/u0027); return false;">Natalia Pavlova</a> sitting alone at one of the tables.');
        }
      }
    }
  }
  scene.text('Between the bookshelves are some tables which can be used for studying. Some of them have <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027internet_mobile/u0027, /u0027get_access/u0027, /u0027free/u0027); return false;">computers</a> for public use.');
  if (((s as any).lernHome ?? 0) > 0) {
    scene.text('You could do your homework with the help of one of the computers.');
  }
  if (((s as any).lernHome ?? 0) > 0) {
    qspCall(s, 'willpower', 'chore', 'self', ((((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : (((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')))));
    if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
      (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
    } else {
      if (((s as any).trait_vars ?? 0)?.['academic'] >= 3) {
        (s as any).will_cost = 0;
      }
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Do your homework', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Do your homework (1:00)', handler: (st: GameState) => {
    if (((st as any).will_cost ?? 0) > 0) {
      qspCall(st, 'willpower', 'pay', 'self', 'chore');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    // TODO-QSP: gs 'mood', 'raise', 5 * trait_vars['academic']
    (st as any).lern = ((st as any).lern ?? 0) + (1);
    qspCall(st, 'stat', '');
    qspCall(st, 'grades', 'homework', 'school', 'yes', 1, 0, 0);
    scene.img('images/locations/pavlovsk/community/library/homework.jpg');
    scene.text('You sit down at one of the tables with a computer and use it to help you do your homework.');
    // TODO-QSP: dynamic text: 'After an hour, you''ve ' + iif(lernHome = 0, 'completed', 'done a part of') + '...
    scene.text('After an hour, you\'ve ' + (((!((st as any).lernHome ?? 0))) ? ('completed') : ('done a part of')) + ' your homework.');
    scene.actions([
      { label: 'Get up from the table', goto: ['pav_library', ''] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).temp_nerds_here ?? 0)  &&  ((s as any).gschoolVars ?? 0)?.['block'] === 0  &&  ((((s as any).class ?? 0)?.['school_grades_above_40'] + ((s as any).class ?? 0)?.['school_grades_above_70'] + ((s as any).class ?? 0)?.['school_grades_above_90']) <= 20  ||  ((s as any).grupTipe ?? 0) === 3)) {
    scene.actions([
      { label: 'Join the nerd\'s study group', goto: ['pav_library_nerdstudy', 'nerd_study_night'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
    { label: 'Go to the toilets', goto: ['gdktoilet', 'start'] },
    { label: 'Read a book', goto: ['pav_library', 'read'] },
    { label: 'Borrow a book', goto: ['pav_library', 'loan'] },
  ]);
  scene.build();
}

function enterRead(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_library', 'read');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Community center library</b></center>');
  scene.img('images/locations/pavlovsk/community/library/gdkbibl.jpg');
  if (((s as any).hour ?? 0) >= 18) {
    scene.text('The librarian finds you still reading and shooshes you out of the library');
    return;
  }
  qspCall(s, 'library_functions', 'set_library_read_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
    { label: 'Go back', goto: ['pav_library', ''] },
  ]);
  scene.build();
}

function enterLoan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pav_library', 'loan');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Community center library</b></center>');
  scene.img('images/locations/pavlovsk/community/library/gdkbibl.jpg');
  if (((s as any).hour ?? 0) >= 18) {
    scene.text('The library is closing for the night.');
    return;
  }
  qspCall(s, 'library_functions', 'set_loan_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['pav_commcenter', ''] },
    { label: 'Go back', goto: ['pav_library', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'read':
      enterRead(s, scene);
      break;
    case 'loan':
      enterLoan(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pav_library: LocationDef = {
  name: 'pav_library',
  title: 'Community center library',
  region: 'pavlovsk',
  locationType: 'public_indoors',
  description: ['For such a small town, the library is surprisingly large, containing many interesting books on a wide variety of subjects.'],
  enter: enter,
};
