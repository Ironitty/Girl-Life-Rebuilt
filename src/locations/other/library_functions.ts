import { dynamicGoto, qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterReadBook(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
    (s as any).glassqw = 1;
    alert('  The text blurs across the page. It seems you have poor eyesight. Maybe you should visit an ophthalmologist?');
    dynamicGoto(s, 'prevLoc', 'prevArg');
  }
  (s as any).blizoruk = ((s as any).blizoruk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (String((s as any).locArgs?.[1] ?? '') !== 'porn') {
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      (s as any).lastread = ((s as any).totminut ?? 0);
      (s as any).lastreadday = ((s as any).daystart ?? 0);
      ((s as any).trait_vars = (s as any).trait_vars ?? {})['bookworm_exp'] = ((s as any).trait_vars['bookworm_exp'] ?? 0) + (1);
    }
    if (String((s as any).locArgs?.[1] ?? '') !== '') {
    }
  }
  scene.build();
}

function enterSetReadPornAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).mc_inventory ?? 0)?.['mag_porn'] > 0) {
    scene.actions([
      {
        label: 'Read the porn magazine',
        handler: (st: GameState) => {
          if (((st as any).blizoruk ?? 0) === 500 || ((st as any).glassqw ?? 0) === 1) {
            (st as any).glassqw = 1;
            alert('  The text blurs across the page, it seems you have poor eyesight. Probably from all the porn. Maybe you should visit an ophthalmologist?');
            dynamicGoto(st, 'prevLoc', 'prevArg');
            return;
          }
          (st as any).minut = ((st as any).minut ?? 0) + 5;
          scene.text('<center><img src="images/pc/items/accessories/magazines/porn.jpg"></center>');
          if (((st as any).mc_inventory ?? 0)?.['mag_porn'] === 1) {
            scene.text('<font color="magenta">Boring</font>, you\'ve memorized this magazine by heart, you think that is time to buy a new one.');
          } else {
            (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + 10;
            scene.text('You flip through the porno magazine, reading the stories and looking at the pictures. A small excitement begins to cover your body.');
          }
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['mag_porn'] = ((st as any).mc_inventory['mag_porn'] ?? 0) - 1;
          qspCall(st, 'stat', '');
        },
      },
    ]);
  }
  scene.build();
}

function enterSetHomeReadActs(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    {
      label: 'Read a book',
      handler: (st: GameState) => {
        qspCall(st, 'stat', '');
        const cw = (st as any).clothingworntype ?? '';
        const bw = (st as any).braworntype ?? '';
        const pw = (st as any).pantyworntype ?? '';
        if (cw === 'nude' && bw === 'none' && pw === 'none') {
          scene.text('<center><img src="images/pc/activities/reading/bed_book_nude.jpg"></center>');
        } else if (cw === 'nude' && bw !== 'none' && pw !== 'none') {
          scene.text('<center><img src="images/pc/activities/reading/bed_book_underwear.jpg"></center>');
        } else {
          scene.text('<center><img src="images/pc/activities/reading/bed_book_dressed.jpg"></center>');
        }
        const books = ['adventure_books', 'fantasy_books', 'romance_books', 'science_books', 'scifi_books'];
        const names = ['adventure novel', 'fantasy novel', 'romance novel', 'science book', 'science fiction novel'];
        const bookText: string[] = [];
        let anyBook = 0;
        for (let i = 0; i < books.length; i++) {
          const key = books[i];
          const pages = ((st as any).BookVars ?? 0)?.[key.replace('_books', '_pages')] ?? 0;
          const count = ((st as any).mc_inventory ?? 0)?.[key] ?? 0;
          if (count <= 0) {
            if (pages > 0) anyBook = 1;
          } else {
            anyBook = 1;
            if (pages <= 0) {
              ((st as any).BookVars = (st as any).BookVars ?? {})[key.replace('_books', '_pages')] = Math.floor(Math.random() * 201) + 400;
              ((st as any).mc_inventory = (st as any).mc_inventory ?? {})[key] = count - 1;
            }
            if (((st as any).mc_inventory ?? 0)?.[key] > 0) {
              const c = ((st as any).mc_inventory ?? 0)?.[key];
              bookText.push(`${c} ${names[i]}${c === 1 ? '' : 's'}`);
            }
          }
        }
        if (anyBook === 0) {
          scene.text('You scratch your head looking at the book you already read, thinking. "Damn, nothing to read, maybe I\'ll take a walk or search the market for a new book?"');
        }
        if (bookText.length > 0) {
          scene.text(`You still have ${bookText.join(', ')} you haven't started on.`);
        }
        qspCall(st, 'library_functions', 'set_home_read_adventure_book_act');
        qspCall(st, 'library_functions', 'set_home_read_fantasy_book_act');
        qspCall(st, 'library_functions', 'set_home_read_romance_book_act');
        qspCall(st, 'library_functions', 'set_home_read_science_book_act');
        qspCall(st, 'library_functions', 'set_home_read_scifi_book_act');
        qspCall(st, 'library_functions', 'set_home_read_artem_book_act');
        if (((st as any).tractatus ?? 0) > 0) {
          scene.actions([
            {
              label: `Study Aleksei's magical discourse on unarmed combat. You feel that there are ${((st as any).tractatus ?? 0) * 100} pages left (0:15)`,
              handler: (st2: GameState) => {
                if (((st2 as any).pcs_mana ?? 0) <= 400) {
                  alert('The text makes no sense! You don\'t have enough mana to trigger it\'s magic, so is better if you rest to recover.');
                  dynamicGoto(st2, 'prevLoc', 'prevArg');
                  return;
                }
                (st2 as any).minut = ((st2 as any).minut ?? 0) + 15;
                (st2 as any).tractatus = ((st2 as any).tractatus ?? 0) - 1;
                if ((st2 as any).tractatus === 0) (st2 as any).totalbook = ((st2 as any).totalbook ?? 0) + 1;
                (st2 as any).pcs_mana = ((st2 as any).pcs_mana ?? 0) - 400;
                qspCall(st2, 'stat', '');
                const cw2 = (st2 as any).clothingworntype ?? '';
                const bw2 = (st2 as any).braworntype ?? '';
                const pw2 = (st2 as any).pantyworntype ?? '';
                if (cw2 === 'nude' && bw2 === 'none' && pw2 === 'none') {
                  scene.text('<center><img src="images/pc/activities/reading/bed_book_nude.jpg"></center>');
                } else if (cw2 === 'nude' && bw2 !== 'none' && pw2 !== 'none') {
                  scene.text('<center><img src="images/pc/activities/reading/bed_book_underwear.jpg"></center>');
                } else {
                  scene.text('<center><img src="images/pc/activities/reading/bed_book_dressed.jpg"></center>');
                }
                scene.text('As you read the strange text, the words blur and suddenly you are <i>inspired</i>. Your mind fill with new ideas and revelations, the defects in your combat form polished and the knows at how inflict the maximum level of pain at the minimal cost… sharpened.');
              },
            },
          ]);
        }
        scene.actions([{ label: 'Close the book', handler: (st3: GameState) => { dynamicGoto(st3, 'prevLoc', 'prevArg'); } }]);
      },
    },
  ]);
  const mags = ['mag_cooking', 'mag_fashion', 'mag_computer', 'mag_biography', 'mag_knitting', 'mag_fitness'];
  const hasMag = mags.some(m => (((s as any).mc_inventory ?? 0)?.[m] ?? 0) > 0);
  if (!hasMag) {
    scene.text('You have no magazines to read.');
  } else {
    scene.actions([
      {
        label: 'Read a magazine',
        handler: (st: GameState) => {
          qspCall(st, 'stat', '');
          const cw = (st as any).clothingworntype ?? '';
          const bw = (st as any).braworntype ?? '';
          const pw = (st as any).pantyworntype ?? '';
          if (cw === 'nude' && bw === 'none' && pw === 'none') {
            scene.text('<center><img src="images/pc/activities/reading/bed_magazine_nude.jpg"></center>');
          } else if (cw === 'nude' && bw === 'none' && pw !== 'none') {
            scene.text('<center><img src="images/pc/activities/reading/bed_magazine_topless.jpg"></center>');
          } else if (cw === 'nude' && bw !== 'none' && pw !== 'none') {
            scene.text('<center><img src="images/pc/activities/reading/bed_magazine_underwear.jpg"></center>');
          } else {
            scene.text('<center><img src="images/pc/activities/reading/bed_magazine_dressed.jpg"></center>');
          }
          qspCall(st, 'library_functions', 'set_magazine_acts');
          scene.actions([{ label: 'Return', handler: (st2: GameState) => { dynamicGoto(st2, 'prevLoc', 'prevArg'); } }]);
        },
      },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'read_book':
      enterReadBook(s, scene);
      break;
    case 'set_read_porn_act':
      enterSetReadPornAct(s, scene);
      break;
    case 'set_home_read_acts':
      enterSetHomeReadActs(s, scene);
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
