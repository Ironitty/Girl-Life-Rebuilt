import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_library', ((s as any).locArgs?.[0] ?? 0));
  (s as any).location_type = 'public_indoors';
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>National Library of Russia</b></center>');
  scene.img('images/locations/city/citycenter/library/downlibint.jpg');
  scene.text('A huge library with thousands upon thousands of books. You could spend years in here and probably still wouldn\'t be able to read it all.');
  if (((s as any).hour ?? 0) < 8  ||  ((s as any).hour ?? 0) >= 19) {
    scene.text('The library is closed.');
    return;
  }
  scene.text('There is a large IT section with <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027internet_mobile/u0027, /u0027get_access/u0027, /u0027free/u0027); return false;">computers</a> available for public use.');
  if (((s as any).MagicLibrary ?? 0) === 1) {
    qspCall(s, 'spellList', 'teacherActions', '$librarySpells', 'city_library', '');
    scene.actions([
      { label: 'Read magic books', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_book', 'splcstng');
    qspCall(st, 'stat', '');
    scene.text('<center><b>Grimoire Magicka</b></center>');
    (st as any).imageid = (Math.floor(Math.random() * 2) + 1);
    scene.img(`images/locations/city/citycenter/library/mage_learning_${((st as any).imageid || '')}.jpg`);
    scene.text('You pick out one of the magic books you can actually read and sit down with it.');
    scene.text('You discover that not only is the subject matter complex and mostly a mystery to you, but the descriptions and explanations are unnecessarily wordy, as if the writer had something to prove.');
    scene.text('After about an hour, you decide to take a break from it and instead test your memory. You don\'t remember much, but you understand magic a little better than before.');
    if (qspFunc(s, 'spellList', 'numAvailableSpells', 'librarySpells') <= 0) {
      scene.text('There doesn\'t seem to be any more spells to learn here, but you can still improve your skills in the ones that you\'ve already found.');
    } else {
      if ((!(Math.floor(Math.random() * 10) + 0))) {
        qspCall(st, 'spellList', 'addAvailableSpells', 'librarySpells');
      }
    }
    qspCall(st, 'spellList', 'teacherActions', '$librarySpells', 'city_library', '');
    scene.actions([
      { label: 'Put the book down', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  qspCall(s, 'camera', 'check_location');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Read a book', goto: ['city_library', 'read'] },
    { label: 'Borrow a book', goto: ['city_library', 'loan'] },
  ]);
  scene.build();
}

function enterRead(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_library', 'read');
  if (((s as any).hour ?? 0) <= 7  ||  ((s as any).hour ?? 0) >= 19) {
    scene.text('The library is closed.');
    return;
  }
  qspCall(s, 'library_functions', 'set_library_read_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Go back', goto: ['city_library', ''] },
  ]);
  scene.build();
}

function enterLoan(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_library', 'loan');
  if (((s as any).hour ?? 0) <= 7  ||  ((s as any).hour ?? 0) >= 19) {
    scene.text('The library is closed.');
    return;
  }
  qspCall(s, 'library_functions', 'set_loan_acts');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_center', ''] },
    { label: 'Go back', goto: ['city_library', ''] },
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

export const city_library: LocationDef = {
  name: 'city_library',
  title: 'National Library of Russia',
  region: 'city',
  locationType: 'public_indoors',
  description: ['A huge library with thousands upon thousands of books. You could spend years in here and probably still wouldn\'t be able to read it all.'],
  enter: enter,
};
