import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterReadBook(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
    (s as any).glassqw = 1;
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  (s as any).blizoruk = ((s as any).blizoruk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (Number((s as any).locArgs?.[1] ?? 0) !== 'porn') {
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      (s as any).lastread = ((s as any).totminut ?? 0);
      (s as any).lastreadday = ((s as any).daystart ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = ((s as any).trait_vars['bookworm_exp'] ?? 0) + (1);
    }
    if (Number((s as any).locArgs?.[1] ?? 0) !== '') {
      // TODO-QSP: dynamic "
      if (((s as any)['pcs_' + String((s as any).locArgs?.[1] ?? '')] ?? 0) >= 50) {
        qspCall(s, 'exp_gain', '' + ((s as any).locArgs?.[1] ?? 0) + '', (Math.floor(Math.random() * 2) + 0));
      } else {
        if (((s as any)['pcs_' + String((s as any).locArgs?.[1] ?? '')] ?? 0) >= 25) {
          qspCall(s, 'exp_gain', '' + ((s as any).locArgs?.[1] ?? 0) + '', (Math.floor(Math.random() * 2) + 1));
        } else {
          qspCall(s, 'exp_gain', '' + ((s as any).locArgs?.[1] ?? 0) + '', (Math.floor(Math.random() * 3) + 1));
          // TODO-QSP: end"
        }
      }
    }
  } else {
    if (Number((s as any).locArgs?.[0] ?? 0) === 'read_magazine') {
      if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
        (s as any).glassqw = 1;
        dynamicGoto(s, 'prevLoc', 'prevArg');
      }
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
    }
  }
  scene.build();
}

function enterSetLibraryReadActs(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = ((s as any).pcs_intel ?? 0) * 2 + ((s as any).pcs_sprt ?? 0);
  if (((s as any).temp ?? 0) < 100) {
    (s as any).diff = 'hard';
  } else {
    if (((s as any).temp ?? 0) < 150) {
      (s as any).diff = 'medium';
    } else {
      (s as any).diff = 'easy';
    }
  }
  qspCall(s, 'willpower', 'misc', 'self', ((s as any).diff ?? 0));
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Read from the collected works of Leo Tolstoy (1:00)', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Read from the collected works of Leo Tolstoy (1:00)', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'exp_gain', 'sprt', (Math.floor(Math.random() * 4) + 3));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/books/tolstoy.jpg');
    scene.text('You read the book for an hour. Tolstoy is certainly a classic writer, but he used a <i>lot</i> of words.');
    scene.actions([
      { label: 'Put the book back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Read an adventure novel (1:00)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/books/fiction' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You spend an hour reading an adventure novel, immersing yourself in daring deeds and awesome twists.');
    scene.actions([
      { label: 'Put the book back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Read a fantasy novel (1:00)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/books/fantasy' + (Math.floor(Math.random() * 9) + 1) + '.jpg');
    scene.text('You spend an hour reading a fantasy novel, rescuing damsels from dragons, digging for jewels with dwarves and performing word changing magic alongside elves and druids.');
    scene.actions([
      { label: 'Put the book back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Read a romance novel (1:00)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'mood', 'raise', 'small');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/books/romance' + (Math.floor(Math.random() * 20) + 1) + '.jpg');
    scene.text('You spend a very short hour reading a romance novel - choosing between a vampire or a werewolf, falling in love with an obscenely wealthy Grey… Several of the scenes are very steamy and you find yourself getting quite aroused.');
    scene.actions([
      { label: 'Put the book back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Read a book on science (1:00)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 4) + 3));
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/books/science1.jpg');
    scene.text('You spend an hour reading, trying to make sense of all the clever propositions written inside and understand the subject it describes.');
    scene.actions([
      { label: 'Put the book back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    { label: 'Read a science fiction novel (1:00)', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'mood', 'raise', 'small');
    ((st as any).grupvalue = (st as any).grupvalue ?? {})[3] = ((st as any).grupvalue[3] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/pc/items/accessories/books/scifi' + (Math.floor(Math.random() * 6) + 1) + '.jpg');
    scene.text('You spend an hour reading a science fiction novel - flying off into space, travelling though time, running from rogue AI and creating monsters with your hunchbacked assistant.');
    scene.actions([
      { label: 'Put the book back', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetHomeReadActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['mag_cooking'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['mag_fashion'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['mag_computer'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['mag_biography'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['mag_knitting'] === 0  &&  ((s as any).mc_inventory ?? 0)?.['mag_fitness'] === 0) {
    scene.text('You have no magazines to read.');
  } else {
    scene.actions([
      { label: 'Read a magazine', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_magazine_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_magazine_topless.jpg');
      } else {
        if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
          scene.img('images/pc/activities/reading/bed_magazine_underwear.jpg');
        } else {
          scene.img('images/pc/activities/reading/bed_magazine_dressed.jpg');
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetMagazineActs(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Read a book', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    (st as any).temp_book_any = 0;
    if (((st as any).mc_inventory ?? 0)?.['adventure_books'] <= 0) {
      if (((st as any).BookVars ?? 0)?.['adventure_pages'] > 0) {
        (st as any).temp_book_any = 1;
      }
    } else {
      (st as any).temp_book_any = 1;
      if (((st as any).BookVars ?? 0)?.['adventure_pages'] <= 0) {
        if (((st as any).lib_book_loaned ?? 0) === 'an adventure novel'  &&  (!((st as any).lib_book_read ?? 0))) {
          (st as any).lib_book_read = 1;
        }
        ((st as any).BookVars = (st as any).BookVars ?? {})['adventure_pages'] = (Math.floor(Math.random() * 201) + 400);
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['adventure_books'] = ((st as any).mc_inventory['adventure_books'] ?? 0) - (1);
      }
      if (((st as any).mc_inventory ?? 0)?.['adventure_books'] > 0) {
        // TODO-QSP: $book_text[] = '<<mc_inventory[''adventure_books'']>> adventure novel' + iif(mc_inventory['adventure...
      }
    }
    if (((st as any).mc_inventory ?? 0)?.['fantasy_books'] <= 0) {
      if (((st as any).BookVars ?? 0)?.['fantasy_pages'] > 0) {
        (st as any).temp_book_any = 1;
      }
    } else {
      (st as any).temp_book_any = 1;
      if (((st as any).BookVars ?? 0)?.['fantasy_pages'] <= 0) {
        if (((st as any).lib_book_loaned ?? 0) === 'a fantasy novel'  &&  (!((st as any).lib_book_read ?? 0))) {
          (st as any).lib_book_read = 1;
        }
        ((st as any).BookVars = (st as any).BookVars ?? {})['fantasy_pages'] = (Math.floor(Math.random() * 201) + 400);
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['fantasy_books'] = ((st as any).mc_inventory['fantasy_books'] ?? 0) - (1);
      }
      if (((st as any).mc_inventory ?? 0)?.['fantasy_books'] > 0) {
        // TODO-QSP: $book_text[] = '<<mc_inventory[''fantasy_books'']>> fantasy novel' + iif(mc_inventory['fantasy_books...
      }
    }
    if (((st as any).mc_inventory ?? 0)?.['romance_books'] <= 0) {
      if (((st as any).BookVars ?? 0)?.['romance_pages'] > 0) {
        (st as any).temp_book_any = 1;
      }
    } else {
      (st as any).temp_book_any = 1;
      if (((st as any).BookVars ?? 0)?.['romance_pages'] <= 0) {
        if (((st as any).lib_book_loaned ?? 0) === 'a romance novel'  &&  (!((st as any).lib_book_read ?? 0))) {
          (st as any).lib_book_read = 1;
        }
        ((st as any).BookVars = (st as any).BookVars ?? {})['romance_pages'] = (Math.floor(Math.random() * 201) + 400);
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['romance_books'] = ((st as any).mc_inventory['romance_books'] ?? 0) - (1);
      }
      if (((st as any).mc_inventory ?? 0)?.['romance_books'] > 0) {
        // TODO-QSP: $book_text[] = '<<mc_inventory[''romance_books'']>> romance novel' + iif(mc_inventory['romance_books...
      }
    }
    if (((st as any).mc_inventory ?? 0)?.['science_books'] <= 0) {
      if (((st as any).BookVars ?? 0)?.['science_pages'] > 0) {
        (st as any).temp_book_any = 1;
      }
    } else {
      (st as any).temp_book_any = 1;
      if (((st as any).BookVars ?? 0)?.['science_pages'] <= 0) {
        if (((st as any).lib_book_loaned ?? 0) === 'a science book'  &&  (!((st as any).lib_book_read ?? 0))) {
          (st as any).lib_book_read = 1;
        }
        ((st as any).BookVars = (st as any).BookVars ?? {})['science_pages'] = (Math.floor(Math.random() * 201) + 400);
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['science_books'] = ((st as any).mc_inventory['science_books'] ?? 0) - (1);
      }
      if (((st as any).mc_inventory ?? 0)?.['science_books'] > 0) {
        // TODO-QSP: $book_text[] = '<<mc_inventory[''science_books'']>> science book' + iif(mc_inventory['science_books'...
      }
    }
    if (((st as any).mc_inventory ?? 0)?.['scifi_books'] <= 0) {
      if (((st as any).BookVars ?? 0)?.['scifi_pages'] > 0) {
        (st as any).temp_book_any = 1;
      }
    } else {
      (st as any).temp_book_any = 1;
      if (((st as any).BookVars ?? 0)?.['scifi_pages'] <= 0) {
        if (((st as any).lib_book_loaned ?? 0) === 'a science fiction novel'  &&  (!((st as any).lib_book_read ?? 0))) {
          (st as any).lib_book_read = 1;
        }
        ((st as any).BookVars = (st as any).BookVars ?? {})['scifi_pages'] = (Math.floor(Math.random() * 201) + 400);
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['scifi_books'] = ((st as any).mc_inventory['scifi_books'] ?? 0) - (1);
      }
      if (((st as any).mc_inventory ?? 0)?.['scifi_books'] > 0) {
        // TODO-QSP: $book_text[] = '<<mc_inventory[''scifi_books'']>> science fiction novel' + iif(mc_inventory['scifi_b...
      }
    }
    if (((st as any).temp_book_any ?? 0) === 0  &&  (((st as any).artem_borrowed_book ?? 0) <= 0  &&  ((st as any).BookVars ?? 0)?.['artem_pages'] <= 0)) {
      scene.text('You scratch your head looking at the book you already read, thinking. "Damn, nothing to read, maybe I\'ll take a walk or search the market for a new book?"');
    }
    if (Object.keys((st as any).book_text ?? {}).length > 0) {
      // TODO-QSP: dynamic text: You still have <<func(''string'', ''enumerate_list'', ''$book_text'')>> you have...
      scene.text(`You still have ${qspFunc(s, 'string', 'enumerate_list', '$book_text')} you haven't started on.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeReadAdventureBookAct(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeReadFantasyBookAct(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeReadRomanceBookAct(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeReadScienceBookAct(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeReadScifiBookAct(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSetHomeReadArtemBookAct(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).tractatus ?? 0) > 0) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Study Aleksei\'s magical discourse on unarmed combat. You feel that there are ' + String(((st as any).tractatus ?? '') * 100 ?? '') + ' pages left (0:15) ', handler: (st: GameState) => {
    if (((st as any).pcs_mana ?? 0) <= 400) {
      dynamicGoto(st, 'prevLoc', 'prevArg');
    }
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).tractatus = ((st as any).tractatus ?? 0) - (1);
    if ((!((st as any).tractatus ?? 0))) {
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
    }
    qspCall(st, 'mood', 'raise', 'tiny');
    (st as any).pcs_mana = ((st as any).pcs_mana ?? 0) - (400);
    qspCall(st, 'exp_gain', 'def', (Math.floor(Math.random() * 4) + 7));
    qspCall(st, 'exp_gain', 'jab', (Math.floor(Math.random() * 4) + 7));
    qspCall(st, 'exp_gain', 'kick', (Math.floor(Math.random() * 4) + 7));
    qspCall(st, 'exp_gain', 'punch', (Math.floor(Math.random() * 4) + 7));
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    scene.text('As you read the strange text, the words blur and suddenly you are <i>inspired</i>. Your mind fill with new ideas and revelations, the defects in your combat form polished and the knows at how inflict the maximum level of pain at the minimal cost… sharpened.');
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSetHomeReadAdventureBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BookVars ?? 0)?.['adventure_pages'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Read Adventure Novel. There are ' + String(((s as any).BookVars ?? 0)?.['adventure_pages'] ?? '' ?? '') + ' pages left (1:00)', handler: (st: GameState) => {
    (st as any).temp_pages_read = (80 + (Math.floor(Math.random() * 41) + 0) + (((st as any).trait_vars ?? {})?.['academic'] ?? 0) * 5);
    ((st as any).BookVars = (st as any).BookVars ?? {})['adventure_pages'] = ((st as any).BookVars['adventure_pages'] ?? 0) - (((st as any).temp_pages_read ?? 0));
    if (((st as any).BookVars ?? 0)?.['adventure_pages'] <= 0) {
      ((st as any).BookVars = (st as any).BookVars ?? {})['adventure_pages'] = 0;
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
      if (((st as any).lib_book_read ?? 0) === 1  &&  ((st as any).lib_book_loaned ?? 0) === 'an adventure novel') {
        (st as any).lib_book_read = 2;
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    if (((st as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      if (((st as any).pcs_stren ?? 0) > 1) {
        qspCall(st, 'exp_deg', 'stren', 1);
      }
      if (((st as any).pcs_vital ?? 0) > 5) {
        qspCall(st, 'exp_deg', 'vital', 1);
      }
      if (((st as any).BookVars ?? 0)?.['adventure_pages'] <= 0) {
        scene.text('You read the final chapters of the adventure novel, completely immersed in the climactic ending to the authors entralling story.');
      } else {
        // TODO-QSP: dynamic text: For an hour you enthusiastically read the novel, completely immersed in the auth...
        scene.text(`For an hour you enthusiastically read the novel, completely immersed in the authors world. By the end you've read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (3);
      if (((st as any).BookVars ?? 0)?.['adventure_pages'] <= 0) {
        scene.text('You read the final chapters of the adventure novel.');
      } else {
        // TODO-QSP: dynamic text: Over the course of an hour you read <<temp_pages_read>> pages.
        scene.text(`Over the course of an hour you read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetHomeReadFantasyBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BookVars ?? 0)?.['fantasy_pages'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Read fantasy book. There are ' + String(((s as any).BookVars ?? 0)?.['fantasy_pages'] ?? '' ?? '') + ' pages left (1:00)', handler: (st: GameState) => {
    (st as any).temp_pages_read = (80 + (Math.floor(Math.random() * 41) + 0) + (((st as any).trait_vars ?? {})?.['academic'] ?? 0) * 5);
    ((st as any).BookVars = (st as any).BookVars ?? {})['fantasy_pages'] = ((st as any).BookVars['fantasy_pages'] ?? 0) - (((st as any).temp_pages_read ?? 0));
    if (((st as any).BookVars ?? 0)?.['fantasy_pages'] <= 0) {
      ((st as any).BookVars = (st as any).BookVars ?? {})['fantasy_pages'] = 0;
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
      if (((st as any).lib_book_read ?? 0) === 1  &&  ((st as any).lib_book_loaned ?? 0) === 'a fantasy novel') {
        (st as any).lib_book_read = 2;
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    if (((st as any).trait_vars ?? 0)?.['bookworm_exp'] > 0) {
      qspCall(st, 'mood', 'raise', 'small');
      if (((st as any).pcs_stren ?? 0) > 1) {
        qspCall(st, 'exp_deg', 'stren', 1);
      }
      if (((st as any).pcs_vital ?? 0) > 5) {
        qspCall(st, 'exp_deg', 'vital', 1);
      }
      if (((st as any).BookVars ?? 0)?.['fantasy_pages'] <= 0) {
        scene.text('You read the final chapters of the fantasy novel, completely immersed in the climactic ending to the authors entralling story.');
      } else {
        // TODO-QSP: dynamic text: For an hour you enthusiastically read the novel, completely immersed in the auth...
        scene.text(`For an hour you enthusiastically read the novel, completely immersed in the authors world. By the end you've read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      if (((st as any).BookVars ?? 0)?.['fantasy_pages'] <= 0) {
        scene.text('You read the final chapters of the fantasy novel.');
      } else {
        // TODO-QSP: dynamic text: Over the course of an hour you read <<temp_pages_read>> pages.
        scene.text(`Over the course of an hour you read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetHomeReadRomanceBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BookVars ?? 0)?.['romance_pages'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Read Romance Novel. There are ' + String(((s as any).BookVars ?? 0)?.['romance_pages'] ?? '' ?? '') + ' pages left (1:00)', handler: (st: GameState) => {
    (st as any).temp_pages_read = (80 + (Math.floor(Math.random() * 41) + 0) + (((st as any).trait_vars ?? {})?.['academic'] ?? 0) * 5);
    ((st as any).BookVars = (st as any).BookVars ?? {})['romance_pages'] = ((st as any).BookVars['romance_pages'] ?? 0) - (((st as any).temp_pages_read ?? 0));
    if (((st as any).BookVars ?? 0)?.['romance_pages'] <= 0) {
      ((st as any).BookVars = (st as any).BookVars ?? {})['romance_pages'] = 0;
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
      if (((st as any).lib_book_read ?? 0) === 1  &&  ((st as any).lib_book_loaned ?? 0) === 'a romance novel') {
        (st as any).lib_book_read = 2;
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    if (((st as any).trait_vars ?? 0)?.['bookworm_exp'] > 0) {
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
      if (((st as any).pcs_stren ?? 0) > 1) {
        qspCall(st, 'exp_deg', 'stren', 1);
      }
      if (((st as any).pcs_vital ?? 0) > 5) {
        qspCall(st, 'exp_deg', 'vital', 1);
      }
      if (((st as any).BookVars ?? 0)?.['romance_pages'] <= 0) {
        scene.text('You read the final chapters of the romance novel, completely immersed in the climactic ending to the authors entralling story.');
      } else {
        // TODO-QSP: dynamic text: For an hour you enthusiastically read the novel, completely immersed in the auth...
        scene.text(`For an hour you enthusiastically read the novel, completely immersed in the authors world. By the end you've read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      if (((st as any).BookVars ?? 0)?.['romance_pages'] <= 0) {
        scene.text('You read the final chapters of the romance novel.');
      } else {
        // TODO-QSP: dynamic text: Over the course of an hour you read <<temp_pages_read>> pages.
        scene.text(`Over the course of an hour you read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetHomeReadScienceBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BookVars ?? 0)?.['science_pages'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Read Science Book. There are ' + String(((s as any).BookVars ?? 0)?.['science_pages'] ?? '' ?? '') + ' pages left (1:00)', handler: (st: GameState) => {
    (st as any).temp_pages_read = (70 + (Math.floor(Math.random() * 41) + 0) + (((st as any).trait_vars ?? {})?.['academic'] ?? 0) * 10);
    ((st as any).BookVars = (st as any).BookVars ?? {})['science_pages'] = ((st as any).BookVars['science_pages'] ?? 0) - (((st as any).temp_pages_read ?? 0));
    if (((st as any).BookVars ?? 0)?.['science_pages'] <= 0) {
      ((st as any).BookVars = (st as any).BookVars ?? {})['science_pages'] = 0;
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
      if (((st as any).lib_book_read ?? 0) === 1  &&  ((st as any).lib_book_loaned ?? 0) === 'a science book') {
        (st as any).lib_book_read = 2;
      }
    }
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 4) + 3));
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    if (((st as any).trait_vars ?? 0)?.['bookworm_exp'] > 0) {
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      if (((st as any).pcs_stren ?? 0) > 1) {
        qspCall(st, 'exp_deg', 'stren', 1);
      }
      if (((st as any).pcs_vital ?? 0) > 5) {
        qspCall(st, 'exp_deg', 'vital', 1);
      }
      if (((st as any).BookVars ?? 0)?.['science_pages'] <= 0) {
        scene.text('You read the final chapters of the science book, completely immersed in the conclusions the authors make.');
      } else {
        // TODO-QSP: dynamic text: For an hour you enthusiastically read the book, completely immersed in absorbing...
        scene.text(`For an hour you enthusiastically read the book, completely immersed in absorbing the knowledge within. By the end you've read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (3);
      if (((st as any).BookVars ?? 0)?.['science_pages'] <= 0) {
        scene.text('You read the final chapters of the science book.');
      } else {
        // TODO-QSP: dynamic text: Over the course of an hour you read <<temp_pages_read>> pages.
        scene.text(`Over the course of an hour you read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetHomeReadScifiBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BookVars ?? 0)?.['scifi_pages'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Read Science Fiction Novel. There are ' + String(((s as any).BookVars ?? 0)?.['scifi_pages'] ?? '' ?? '') + ' pages left (1:00)', handler: (st: GameState) => {
    (st as any).temp_pages_read = (80 + (Math.floor(Math.random() * 41) + 0) + (((st as any).trait_vars ?? {})?.['academic'] ?? 0) * 5);
    ((st as any).BookVars = (st as any).BookVars ?? {})['scifi_pages'] = ((st as any).BookVars['scifi_pages'] ?? 0) - (((st as any).temp_pages_read ?? 0));
    if (((st as any).BookVars ?? 0)?.['scifi_pages'] <= 0) {
      ((st as any).BookVars = (st as any).BookVars ?? {})['scifi_pages'] = 0;
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
      if (((st as any).lib_book_read ?? 0) === 1  &&  ((st as any).lib_book_loaned ?? 0) === 'a science fiction novel') {
        (st as any).lib_book_read = 2;
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    if (((st as any).trait_vars ?? 0)?.['bookworm_exp'] > 0) {
      qspCall(st, 'mood', 'raise', 'small');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      if (((st as any).pcs_stren ?? 0) > 1) {
        qspCall(st, 'exp_deg', 'stren', 1);
      }
      if (((st as any).pcs_vital ?? 0) > 5) {
        qspCall(st, 'exp_deg', 'vital', 1);
      }
      if (((st as any).BookVars ?? 0)?.['scifi_pages'] <= 0) {
        scene.text('You read the final chapters of the science fiction novel, completely immersed in the climactic ending to the authors entralling story.');
      } else {
        // TODO-QSP: dynamic text: For an hour you enthusiastically read the novel, completely immersed in the auth...
        scene.text(`For an hour you enthusiastically read the novel, completely immersed in the authors world. By the end you've read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (3);
      if (((st as any).BookVars ?? 0)?.['scifi_pages'] <= 0) {
        scene.text('You read the final chapters of the science fiction novel.');
      } else {
        // TODO-QSP: dynamic text: Over the course of an hour you read <<temp_pages_read>> pages.
        scene.text(`Over the course of an hour you read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetHomeReadArtemBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).BookVars ?? 0)?.['artem_pages'] > 0) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Read the book you borrowed from Artem. There are ' + String(((s as any).BookVars ?? 0)?.['artem_pages'] ?? '' ?? '') + ' pages left (1:00) ', handler: (st: GameState) => {
    (st as any).temp_pages_read = (80 + (Math.floor(Math.random() * 41) + 0) + (((st as any).trait_vars ?? {})?.['academic'] ?? 0) * 5);
    ((st as any).BookVars = (st as any).BookVars ?? {})['artem_pages'] = ((st as any).BookVars['artem_pages'] ?? 0) - (((st as any).temp_pages_read ?? 0));
    if (((st as any).BookVars ?? 0)?.['artem_pages'] <= 0) {
      ((st as any).BookVars = (st as any).BookVars ?? {})['artem_pages'] = 0;
      (st as any).totalbook = ((st as any).totalbook ?? 0) + (1);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReadBook(s, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) === 'none'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
      scene.img('images/pc/activities/reading/bed_book_nude.jpg');
    } else {
      if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).braworntype ?? 0) !== 'none'  &&  ((st as any).pantyworntype ?? 0) !== 'none') {
        scene.img('images/pc/activities/reading/bed_book_underwear.jpg');
      } else {
        scene.img('images/pc/activities/reading/bed_book_dressed.jpg');
      }
    }
    if (((st as any).trait_vars ?? 0)?.['bookworm_exp'] > 0) {
      qspCall(st, 'mood', 'raise', 'small');
      if (((st as any).pcs_stren ?? 0) > 1) {
        qspCall(st, 'exp_deg', 'stren', 1);
      }
      if (((st as any).pcs_vital ?? 0) > 5) {
        qspCall(st, 'exp_deg', 'vital', 1);
      }
      if (((st as any).BookVars ?? 0)?.['artem_pages'] <= 0) {
        scene.text('You read the final chapters of the book, completely immersed in the climactic ending to the authors entralling story');
      } else {
        // TODO-QSP: dynamic text: For an hour you enthusiastically read the book, completely immersed in the autho...
        scene.text(`For an hour you enthusiastically read the book, completely immersed in the authors world. By the end you've read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    } else {
      qspCall(st, 'mood', 'raise', 'tiny');
      if (((st as any).BookVars ?? 0)?.['artem_pages'] <= 0) {
        scene.text('You read the final chapters of the book.');
      } else {
        // TODO-QSP: dynamic text: Over the course of an hour you read <<temp_pages_read>> pages.
        scene.text(`Over the course of an hour you read ${((st as any).temp_pages_read ?? '')} pages.`);
      }
    }
    scene.actions([
      { label: 'Close the book', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetMagazineActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['mag_cooking'] > 0) {
    scene.actions([
      { label: 'Read your cooking magazine', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_magazine');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_cooking'] = ((st as any).mc_inventory['mag_cooking'] ?? 0) - (1);
    scene.text('You relax for half an hour reading your cooking magazine.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_fashion'] > 0) {
    scene.actions([
      { label: 'Read your fashion magazine', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_magazine');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_fashion'] = ((st as any).mc_inventory['mag_fashion'] ?? 0) - (1);
    qspCall(st, 'exp_gain', 'makupskl', 1);
    scene.text('You relax for half an hour reading your fashion magazine.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_computer'] > 0) {
    scene.actions([
      { label: 'Read your computing magazine', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_magazine');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_computer'] = ((st as any).mc_inventory['mag_computer'] ?? 0) - (1);
    qspCall(st, 'exp_gain', 'compskl', 1);
    scene.text('You relax for half an hour reading your computing magazine.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_biography'] > 0) {
    scene.actions([
      { label: 'Read your biographical magazine', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_magazine');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_biography'] = ((st as any).mc_inventory['mag_biography'] ?? 0) - (1);
    scene.text('You relax for half an hour reading your biographical magazine.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_knitting'] > 0) {
    scene.actions([
      { label: 'Read your knitting magazine', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_magazine');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_knitting'] = ((st as any).mc_inventory['mag_knitting'] ?? 0) - (1);
    if (((st as any).pcs_sewng ?? 0) <= 100) {
      qspCall(st, 'exp_gain', 'sewng', (Math.floor(Math.random() * 3) + 1));
    }
    scene.text('You relax for half an hour reading your knitting magazine.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).mc_inventory ?? 0)?.['mag_fitness'] > 0) {
    scene.actions([
      { label: 'Read your fitness magazine', handler: (st: GameState) => {
    qspCall(st, 'library_functions', 'read_magazine');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_fitness'] = ((st as any).mc_inventory['mag_fitness'] ?? 0) - (1);
    scene.text('You relax for half an hour reading your fitness magazine.');
    scene.actions([
      { label: 'Return', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetReadPornAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.actions([
      { label: 'Read the porn magazine', handler: (st: GameState) => {
    if (((st as any).blizoruk ?? 0) === 500  ||  ((st as any).glassqw ?? 0) === 1) {
      (st as any).glassqw = 1;
      dynamicGoto(st, 'prevLoc', 'prevArg');
    }
    scene.img('images/pc/items/accessories/magazines/porn.jpg');
    if (((st as any).mc_inventory ?? 0)?.['mag_porn'] === 1) {
      scene.text('<font color="magenta">Boring</font>, you\'ve memorized this magazine by heart, you think that is time to buy a new one.');
    } else {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      scene.text('You flip through the porno magazine, reading the stories and looking at the pictures. A small excitement begins to cover your body.');
    }
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_porn'] = ((st as any).mc_inventory['mag_porn'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Put away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSetBookBuyActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a science book', 'science', 350]; enterSetSingleBookBuyAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'an adventure novel', 'adventure', 350]; enterSetSingleBookBuyAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a fantasy novel', 'fantasy', 350]; enterSetSingleBookBuyAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a science fiction novel', 'scifi', 350]; enterSetSingleBookBuyAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'a romance novel', 'romance', 350]; enterSetSingleBookBuyAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSetSingleBookBuyAct(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[3] ?? 0) <= 0) {
    ((s as any).ARGS = (s as any).ARGS ?? {})[3] = 350;
  }
  // TODO-QSP: dynamic "
  // TODO-QSP: act ""Buy <<$ARGS[1]>>"" + $func('money', 'get_cost_string', <<ARGS[3]>>):
  if (qspFunc(s, 'money', 'can_afford', Number((s as any).locArgs?.[3] ?? 0)) === 0) {
    s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
  } else {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    // TODO-QSP: gs 'money', 'pay', <<ARGS[3]>>
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})[String(((s as any).locArgs?.[2] ?? 0)) + '_books'] = ((s as any).mc_inventory[String(((s as any).locArgs?.[2] ?? 0)) + '_books'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You buy <<$ARGS[1]>> for <<$func('money', 'string_price', ARGS[3])>>.
    scene.text(`You buy ${((s as any).locArgs?.[1] ?? '')} for ${qspFunc(s, 'money', 'string_price', ((s as any).locArgs?.[3] ?? ''))}.`);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  // TODO-QSP: "
  // TODO-QSP: end
  scene.build();
}

function enterSetLoanActs(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReturnBookAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPayDebtAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLoanBookAct(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterReturnBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lib_book_loaned ?? 0) !== '') {
    // TODO-QSP: dynamic text: You''ve currently borrowed <<$lib_book_loaned>>.
    scene.text(`You've currently borrowed ${((s as any).lib_book_loaned ?? '')}.`);
    if (((s as any).lib_debt ?? 0) <= 0) {
      (s as any).temp_loan_days_left = ((s as any).lib_debt ?? 0) / -50;
      // TODO-QSP: dynamic text: You have <<temp_loan_days_left>> days left before you need to return it.
      scene.text(`You have ${((s as any).temp_loan_days_left ?? '')} days left before you need to return it.`);
    } else {
      scene.text('Your book is overdue!');
    }
    scene.actions([
      { label: 'Return your loaned book', handler: (st: GameState) => {
    if ((!((st as any).lib_book_read ?? 0))) {
      if (((st as any).lib_book_loaned ?? 0) === 'an adventure novel') {
        ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['adventure_books'] = ((st as any).mc_inventory['adventure_books'] ?? 0) - (1);
      } else {
        if (((st as any).lib_book_loaned ?? 0) === 'a fantasy novel') {
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['fantasy_books'] = ((st as any).mc_inventory['fantasy_books'] ?? 0) - (1);
        } else {
          if (((st as any).lib_book_loaned ?? 0) === 'a romance novel') {
            ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['romance_books'] = ((st as any).mc_inventory['romance_books'] ?? 0) - (1);
          } else {
            if (((st as any).lib_book_loaned ?? 0) === 'a science book') {
              ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['science_books'] = ((st as any).mc_inventory['science_books'] ?? 0) - (1);
            } else {
              if (((st as any).lib_book_loaned ?? 0) === 'a science fiction novel') {
                ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['scifi_books'] = ((st as any).mc_inventory['scifi_books'] ?? 0) - (1);
              }
            }
          }
        }
      }
    } else {
      if (((st as any).lib_book_read ?? 0) === 1) {
        if (((st as any).lib_book_loaned ?? 0) === 'an adventure novel') {
          ((st as any).BookVars = (st as any).BookVars ?? {})['adventure_pages'] = 0;
        } else {
          if (((st as any).lib_book_loaned ?? 0) === 'a fantasy novel') {
            ((st as any).BookVars = (st as any).BookVars ?? {})['fantasy_pages'] = 0;
          } else {
            if (((st as any).lib_book_loaned ?? 0) === 'a romance novel') {
              ((st as any).BookVars = (st as any).BookVars ?? {})['romance_pages'] = 0;
            } else {
              if (((st as any).lib_book_loaned ?? 0) === 'a science book') {
                ((st as any).BookVars = (st as any).BookVars ?? {})['science_pages'] = 0;
              } else {
                if (((st as any).lib_book_loaned ?? 0) === 'a science fiction novel') {
                  ((st as any).BookVars = (st as any).BookVars ?? {})['scifi_pages'] = 0;
                }
              }
            }
          }
        }
      }
    }
    (st as any).lib_book_loaned = '';
    (st as any).lib_book_read = 0;
    if (((st as any).lib_debt ?? 0) <= 0) {
      (st as any).lib_debt = 0;
    }
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPayDebtAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lib_debt ?? 0) > 0) {
    // TODO-QSP: dynamic text: You owe an outstanding debt of <<$func(''money'', ''string_price'', lib_debt)>> ...
    scene.text(`You owe an outstanding debt of ${qspFunc(s, 'money', 'string_price', ((s as any).lib_debt ?? ''))} to the library.`);
    if (qspFunc(s, 'money', 'can_afford', ((s as any).lib_debt ?? 0)) === 0) {
      scene.text('You don\'t have enough money to pay your debt!');
    } else {
      scene.actions([
        { label: 'Pay your debt', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).lib_debt ?? 0));
    (st as any).lib_debt = 0;
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLoanBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lib_book_loaned ?? 0) === ''  &&  (!((s as any).lib_debt ?? 0))) {
    scene.actions([
      { label: 'Borrow an adventure novel', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['adventure_books'] = ((st as any).mc_inventory['adventure_books'] ?? 0) + (1);
    (st as any).lib_book_read = 0;
    (st as any).lib_book_loaned = 'an adventure novel';
    (st as any).lib_debt = (-700);
    scene.text('You find an adventure novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you''re late incurs a <<$f...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Borrow a fantasy novel', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['fantasy_books'] = ((st as any).mc_inventory['fantasy_books'] ?? 0) + (1);
    (st as any).lib_book_read = 0;
    (st as any).lib_book_loaned = 'a fantasy novel';
    (st as any).lib_debt = (-700);
    scene.text('You find a fantasy novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you''re late incurs a <<$f...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Borrow a romance novel', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['romance_books'] = ((st as any).mc_inventory['romance_books'] ?? 0) + (1);
    (st as any).lib_book_read = 0;
    (st as any).lib_book_loaned = 'a romance novel';
    (st as any).lib_debt = (-700);
    scene.text('You find a fantasy novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you''re late incurs a <<$f...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Borrow a science book', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['science_books'] = ((st as any).mc_inventory['science_books'] ?? 0) + (1);
    (st as any).lib_book_read = 0;
    (st as any).lib_book_loaned = 'a science book';
    (st as any).lib_debt = (-700);
    scene.text('You find a science book that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you''re late incurs a <<$f...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
      { label: 'Borrow a science fiction novel', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['scifi_books'] = ((st as any).mc_inventory['scifi_books'] ?? 0) + (1);
    (st as any).lib_book_read = 0;
    (st as any).lib_book_loaned = 'a science fiction novel';
    (st as any).lib_debt = (-700);
    scene.text('You find a science fiction novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you''re late incurs a <<$f...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'read_book':
      enterReadBook(s, scene);
      break;
    case 'set_library_read_acts':
      enterSetLibraryReadActs(s, scene);
      break;
    case 'set_home_read_acts':
      enterSetHomeReadActs(s, scene);
      break;
    case 'set_home_read_adventure_book_act':
      enterSetHomeReadAdventureBookAct(s, scene);
      break;
    case 'set_home_read_fantasy_book_act':
      enterSetHomeReadFantasyBookAct(s, scene);
      break;
    case 'set_home_read_romance_book_act':
      enterSetHomeReadRomanceBookAct(s, scene);
      break;
    case 'set_home_read_science_book_act':
      enterSetHomeReadScienceBookAct(s, scene);
      break;
    case 'set_home_read_scifi_book_act':
      enterSetHomeReadScifiBookAct(s, scene);
      break;
    case 'set_home_read_artem_book_act':
      enterSetHomeReadArtemBookAct(s, scene);
      break;
    case 'set_magazine_acts':
      enterSetMagazineActs(s, scene);
      break;
    case 'set_read_porn_act':
      enterSetReadPornAct(s, scene);
      break;
    case 'set_book_buy_acts':
      enterSetBookBuyActs(s, scene);
      break;
    case 'set_single_book_buy_act':
      enterSetSingleBookBuyAct(s, scene);
      break;
    case 'set_loan_acts':
      enterSetLoanActs(s, scene);
      break;
    case 'return_book_act':
      enterReturnBookAct(s, scene);
      break;
    case 'pay_debt_act':
      enterPayDebtAct(s, scene);
      break;
    case 'loan_book_act':
      enterLoanBookAct(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const library_functions: LocationDef = {
  name: 'library_functions',
  title: 'Your book is overdue!',
  region: 'other',
  enter: enter,
};
