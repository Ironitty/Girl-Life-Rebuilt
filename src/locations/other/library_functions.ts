import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterReadBook(s: GameState, scene: SceneBuilder): void {
  if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
    (s as any).glassqw = 1;
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
  }
  (s as any).blizoruk = ((s as any).blizoruk ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  if (((s as any).locArgs?.[1] ?? 0) !== 'porn') {
    if (((s as any).trait_vars ?? 0)?.['bookworm'] > 0) {
      (s as any).lastread = ((s as any).totminut ?? 0);
      (s as any).lastreadday = ((s as any).daystart ?? 0);
      (s as any).trait_vars['bookworm_exp'] = ((s as any).trait_vars['bookworm_exp'] ?? 0) + (1);
    }
    if (((s as any).locArgs?.[1] ?? 0) !== '') {
      // TODO-QSP: dynamic "
      if (((s as any).pcs_ ?? 0)((s as any).locArgs?.[1] ?? 0) >= 50) {
        qspCall(s, 'exp_gain', '<<$ARGS[1]>>', Math.floor(Math.random() * 2) + 0);
      } else {
        if (((s as any).pcs_ ?? 0)((s as any).locArgs?.[1] ?? 0) >= 25) {
          qspCall(s, 'exp_gain', '<<$ARGS[1]>>', Math.floor(Math.random() * 2) + 1);
        } else {
          qspCall(s, 'exp_gain', '<<$ARGS[1]>>', Math.floor(Math.random() * 3) + 1);
          // TODO-QSP: end"
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'read_magazine') {
      if (((s as any).blizoruk ?? 0) === 500  ||  ((s as any).glassqw ?? 0) === 1) {
        (s as any).glassqw = 1;
        scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
      }
      qspCall(s, 'mood', 'raise', 'tiny');
      (s as any).minut = ((s as any).minut ?? 0) + 30;
    }
  }
  // TODO-QSP: "
  scene.build();
}

function enterSetLoanActs(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'library_functions', 'return_book_act');
  qspCall(s, 'library_functions', 'pay_debt_act');
  qspCall(s, 'library_functions', 'loan_book_act');
  scene.build();
}

function enterReturnBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lib_book_loaned ?? 0) !== '') {
    // TODO-QSP: dynamic text: You've currently borrowed <<$lib_book_loaned>>.
    scene.text(`You've currently borrowed ${((s as any).lib_book_loaned ?? 0)}.`);
    if (((s as any).lib_debt ?? 0) <= 0) {
      (s as any).temp_loan_days_left = ((s as any).lib_debt ?? 0) / -50;
      // TODO-QSP: dynamic text: You have <<temp_loan_days_left>> days left before you need to return it.
      scene.text(`You have ${((s as any).temp_loan_days_left ?? 0)} days left before you need to return it.`);
    } else {
      scene.text('Your book is overdue!');
    }
    scene.actions([
      { label: 'Return your loaned book', handler: (st: GameState) => {
    if ((!((s as any).lib_book_read ?? 0))) {
      if (((s as any).lib_book_loaned ?? 0) === 'an adventure novel') {
        (s as any).mc_inventory['adventure_books'] = ((s as any).mc_inventory['adventure_books'] ?? 0) - (1);
      } else {
        if (((s as any).lib_book_loaned ?? 0) === 'a fantasy novel') {
          (s as any).mc_inventory['fantasy_books'] = ((s as any).mc_inventory['fantasy_books'] ?? 0) - (1);
        } else {
          if (((s as any).lib_book_loaned ?? 0) === 'a romance novel') {
            (s as any).mc_inventory['romance_books'] = ((s as any).mc_inventory['romance_books'] ?? 0) - (1);
          } else {
            if (((s as any).lib_book_loaned ?? 0) === 'a science book') {
              (s as any).mc_inventory['science_books'] = ((s as any).mc_inventory['science_books'] ?? 0) - (1);
            } else {
              if (((s as any).lib_book_loaned ?? 0) === 'a science fiction novel') {
                (s as any).mc_inventory['scifi_books'] = ((s as any).mc_inventory['scifi_books'] ?? 0) - (1);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).lib_book_read ?? 0) === 1) {
        if (((s as any).lib_book_loaned ?? 0) === 'an adventure novel') {
          (s as any).BookVars['adventure_pages'] = 0;
        } else {
          if (((s as any).lib_book_loaned ?? 0) === 'a fantasy novel') {
            (s as any).BookVars['fantasy_pages'] = 0;
          } else {
            if (((s as any).lib_book_loaned ?? 0) === 'a romance novel') {
              (s as any).BookVars['romance_pages'] = 0;
            } else {
              if (((s as any).lib_book_loaned ?? 0) === 'a science book') {
                (s as any).BookVars['science_pages'] = 0;
              } else {
                if (((s as any).lib_book_loaned ?? 0) === 'a science fiction novel') {
                  (s as any).BookVars['scifi_pages'] = 0;
                }
              }
            }
          }
        }
      }
    }
    (s as any).lib_book_read = 0;
    if (((s as any).lib_debt ?? 0) <= 0) {
      (s as any).lib_debt = 0;
    }
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  scene.build();
}

function enterPayDebtAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lib_debt ?? 0) > 0) {
    // TODO-QSP: dynamic text: You owe an outstanding debt of <<$func('money', 'string_price', lib_debt)>> to t...
    scene.text(`You owe an outstanding debt of ${qspFunc(s, 'money', 'string_price', ((s as any).lib_debt ?? 0))} to the library.`);
    if (qspFunc(s, 'money', 'can_afford', ((s as any).lib_debt ?? 0)) === 0) {
      scene.text('You don\'t have enough money to pay your debt!');
    } else {
      scene.actions([
        { label: 'Pay your debt', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', ((s as any).lib_debt ?? 0));
    (s as any).lib_debt = 0;
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  }
  scene.build();
}

function enterLoanBookAct(s: GameState, scene: SceneBuilder): void {
  if (((s as any).lib_book_loaned ?? 0) === ''  &&  (!((s as any).lib_debt ?? 0))) {
    scene.actions([
      { label: 'Borrow an adventure novel', handler: (st: GameState) => {
    (s as any).mc_inventory['adventure_books'] = ((s as any).mc_inventory['adventure_books'] ?? 0) + (1);
    (s as any).lib_book_read = 0;
    (s as any).lib_debt = (-700);
    scene.text('You find an adventure novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you're late incurs a <<$fu...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Borrow a fantasy novel', handler: (st: GameState) => {
    (s as any).mc_inventory['fantasy_books'] = ((s as any).mc_inventory['fantasy_books'] ?? 0) + (1);
    (s as any).lib_book_read = 0;
    (s as any).lib_debt = (-700);
    scene.text('You find a fantasy novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you're late incurs a <<$fu...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Borrow a romance novel', handler: (st: GameState) => {
    (s as any).mc_inventory['romance_books'] = ((s as any).mc_inventory['romance_books'] ?? 0) + (1);
    (s as any).lib_book_read = 0;
    (s as any).lib_debt = (-700);
    scene.text('You find a fantasy novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you're late incurs a <<$fu...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Borrow a science book', handler: (st: GameState) => {
    (s as any).mc_inventory['science_books'] = ((s as any).mc_inventory['science_books'] ?? 0) + (1);
    (s as any).lib_book_read = 0;
    (s as any).lib_debt = (-700);
    scene.text('You find a science book that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you're late incurs a <<$fu...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
      { label: 'Borrow a science fiction novel', handler: (st: GameState) => {
    (s as any).mc_inventory['scifi_books'] = ((s as any).mc_inventory['scifi_books'] ?? 0) + (1);
    (s as any).lib_book_read = 0;
    (s as any).lib_debt = (-700);
    scene.text('You find a science fiction novel that catches your interest and bring it to the librarian, who notes your name and the title of the book down before handing it to you.');
    // TODO-QSP: dynamic text: "You need to return it within 2 weeks. Every day that you're late incurs a <<$fu...
    scene.text(`"You need to return it within 2 weeks. Every day that you're late incurs a ${qspFunc(s, 'money', 'string_price', 50)} fine."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
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
      enterReadBook(s, scene);
      break;
  }
}

export const library_functions: LocationDef = {
  name: 'library_functions',
  title: 'Your book is overdue!',
  region: 'other',
  enter: enter,
};
