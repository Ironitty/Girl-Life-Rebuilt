import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (Object.keys((s as any).policeQW_courtletter_dates ?? {}).length > 0  &&  ((s as any).daystart ?? 0) >= ((s as any).policeQW_courtletter_dates ?? 0)[0]) {
    scene.actions([{ label: 'Continue', goto: ['courtletter', 'letter'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLetter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if ((((s as any).policeQW ?? 0)?.['missed_court_dates'] + ((s as any).policeQW ?? 0)?.['missed_fine_deadlines']) > 1) {
    if ((((s as any).policeQW ?? 0)?.['tot_court_dates_missed'] + ((s as any).policeQW ?? 0)?.['tot_fines_deadlines_missed']) > 30  &&  ((s as any).policeQW ?? 0)?.['tot_arrested'] > 10) {
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['tot_arrested'] = ((s as any).policeQW['tot_arrested'] ?? 0) + (1);
      if (((s as any).policeQW ?? 0)?.['arrest_gameover_flag'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['sentence', 'police_arrest', '2'] }]);
      } else {
        if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['arrest_gameover_flag'] = 1;
        scene.actions([{ label: 'Continue', goto: ['sentence', 'police_arrest', '1'] }]);
      }
    } else {
      if ((((s as any).policeQW ?? 0)?.['missed_court_dates'] + ((s as any).policeQW ?? 0)?.['missed_fine_deadlines']) > 3) {
        if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['tot_arrested'] = ((s as any).policeQW['tot_arrested'] ?? 0) + (1);
        scene.actions([{ label: 'Continue', goto: ['sentence', 'police_arrest', '0'] }]);
      }
    }
  }
  scene.img('images/shared/mail/letter_open.jpg');
  if (((s as any).policeQW_courtletter_subjects ?? 0)[0] === 'fine') {
    if (((s as any).policeQW ?? 0)?.['courtletter_fine_counter'] < 10) {
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['courtletter_fine_counter'] = ((s as any).policeQW['courtletter_fine_counter'] ?? 0) + (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'stat', '');
      scene.text('As you enter your home you notice an envelope from the court. You anxiously look at it and take a deep breath before opening the envelope.');
      if (((s as any).week ?? 0) < 6) {
        scene.text('Going through the letter you read that you\'ve a week to pay your fine in full.');
      } else {
        scene.text('Going through the letter you read that you\'ve until Monday, a week from now, to pay your fine in full.');
      }
      scene.text('<i>Failure to pay the fine in full with in a week from now, will have dire consequences for the accused.</i> Your heart drops as you read that line…');
      scene.text('<i>You should mail your fine payment using the enclosed envelope.</i>');
      scene.text('You put the letter back in the envelope and let out a loud sigh…');
      if (((s as any).policeQW ?? 0)?.['legal_fine'] <= 0) {
        qspCall(s, 'mood', 'raise', 'huge');
        qspCall(s, 'stat', '');
        scene.text('You realize that you\'ve already paid off your fines and sigh with relief.');
      } else {
        scene.text('You put the letter back in the envelope and let out a loud sigh…');
      }
    } else {
      scene.text('As you come home you see the familiar envelope from the court. You already know the gist of it, <i>failure to pay your fine will have dire consequences,</i> yadda yadda…');
      scene.text('You glance through the letter seeing the same information once again and as you finish you throw it to the side and continue further on inside your apartment…');
      if (((s as any).policeQW ?? 0)?.['legal_fine'] <= 0) {
        scene.text('You\'ve already paid your fines, why are they even bothering you.');
      }
    }
    if (((s as any).policeQW ?? 0)?.['legal_fine'] > 0) {
      scene.actions([
        { label: 'Mail the payment for your legal fines [+$func(\'money\', \'get_debt_cost_string\', p...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).policeQW ?? 0)?.['legal_fine'], 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'debt_pay', 'policeQW[\'legal_fine\']', 0, 'cash');
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['missed_fine_deadlines'] = 0;
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['fine_deadline'] = 0;
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['arrest_gameover_flag'] = 0;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('You put the full amount of your outstanding fine/s in the envelope and seal it. No more than 5 minutes later you\'ve posted the letter and are back.');
      scene.actions([
        { label: 'Done', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
      ]);
    }
  } else {
    if (((s as any).policeQW_courtletter_subjects ?? 0)[0] === 'missed_fine') {
      if (((s as any).policeQW ?? 0)?.['courtletter_fine_counter'] < 10) {
        if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['courtletter_fine_counter'] = ((s as any).policeQW['courtletter_fine_counter'] ?? 0) + (1);
        qspCall(s, 'mood', 'lower', 'huge');
        qspCall(s, 'stat', '');
        scene.text('As you enter your home you notice an envelope from the court. You anxiously look at it and take a deep breath before opening the envelope.');
        if (((s as any).policeQW ?? 0)?.['legal_fine'] <= 0) {
          qspCall(s, 'mood', 'raise', 'huge');
          qspCall(s, 'stat', '');
          scene.text('Going through the letter you read that you\'ve a week to pay your fine in full, which you already did.');
          scene.text('Happy that you\'ve managed to avoid this worry, you put the letter away.');
        } else {
          (s as any).temp_fine = 250 * (Math.floor(Math.random() * 6) + 5);
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          if (((s as any).week ?? 0) < 6) {
            // TODO-QSP: dynamic text: Going through the letter you read that you've failed to pay your fine. The court...
            scene.text('Going through the letter you read that you\'ve failed to pay your fine. The court given you another \' + $func(\'money\', \'string_price\', temp_fine) + \' fine and has graciously decided to give you a week to pay your fine in full.');
          } else {
            // TODO-QSP: dynamic text: Going through the letter you read that you've failed to pay your fine. The court...
            scene.text('Going through the letter you read that you\'ve failed to pay your fine. The court given you another \' + $func(\'money\', \'string_price\', temp_fine) + \' fine and has graciously decided to give you until Monday, a week from now, to pay your fine in full.');
          }
          scene.text('<i>Failure to pay the fine in full with in a week from now, will have dire consequences for the accused.</i> Your heart drops as you read that line…');
          scene.text('<i>You should mail your fine payment using the enclosed envelope.</i>');
          scene.text('You put the letter back in the envelope and let out a loud sigh…');
        }
      } else {
        if (((s as any).policeQW ?? 0)?.['legal_fine'] <= 0) {
          scene.text('As you come home you see the familiar envelope from the court. You already know the gist of it, <i>failed to pay your fine, failure to pay your fine will have dire consequences,</i> yadda yadda…');
          scene.text('You already paid off your fines and as you finish you throw it to the side and continue further on inside your apartment…');
        } else {
          (s as any).temp_fine = 250 * (Math.floor(Math.random() * 11) + 10);
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: As you come home you see the familiar envelope from the court. You already know ...
          scene.text('As you come home you see the familiar envelope from the court. You already know the gist of it, <i>failed to pay your fine, additional \' + $func(\'money\', \'string_price\', temp_fine) + \' fine, failure to pay your fine will have dire consequences,</i> yadda yadda…');
          scene.text('You glance through the letter seeing the same information once again and as you finish you throw it to the side and continue further on inside your apartment…');
        }
      }
      if (((s as any).policeQW ?? 0)?.['legal_fine'] > 0) {
        scene.actions([
          { label: 'Mail the payment for your legal fine/s [+$func(\'money\', \'get_debt_cost_string\', p...]', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford_debt', ((s as any).policeQW ?? 0)?.['legal_fine'], 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((s as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(s, 'money', 'debt_pay', 'policeQW[\'legal_fine\']', 0, 'cash');
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['missed_fine_deadlines'] = 0;
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['fine_deadline'] = 0;
      if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['arrest_gameover_flag'] = 0;
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.text('You put the full amount of your outstanding fine/s in the envelope and seal it. No more than 5 minutes later you\'ve posted the letter and are back.');
      scene.actions([
        { label: 'Done', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
      ]);
    }
  } },
        ]);
      }
    } else {
      if ((String(qspUntranslated(s, "policeQW_courtletter_subjects[0]", { location: "courtletter" })).slice((1)-1, ((1)-1)+(12))) === 'missed_court') {
        if (((s as any).week ?? 0) === 6) {
          // TODO-QSP: policeQW_courthearing_dates[] = daystart + 9
        } else {
          if (((s as any).week ?? 0) === 7) {
            // TODO-QSP: policeQW_courthearing_dates[] = daystart + 8
          } else {
            // TODO-QSP: policeQW_courthearing_dates[] = daystart + 7
          }
        }
        // TODO-QSP: $policeQW_courthearing_subjects[] = $mid($policeQW_courtletter_subjects[0], 14)
        if (((s as any).policeQW ?? 0)?.['courtletter_hearing_counter'] < 10) {
          if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['courtletter_hearing_counter'] = ((s as any).policeQW['courtletter_hearing_counter'] ?? 0) + (1);
          qspCall(s, 'mood', 'lower', 'huge');
          qspCall(s, 'stat', '');
          scene.text('As you enter your home you notice an envelope from the court. You anxiously look at it and take a deep breath before opening the envelope.');
          (s as any).temp_fine = 500 * (Math.floor(Math.random() * 6) + 5);
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          if (((s as any).week ?? 0) < 6) {
            // TODO-QSP: dynamic text: Going through the letter you read that you've missed your court hearing. A new c...
            scene.text('Going through the letter you read that you\'ve missed your court hearing. A new court hearing has been scheduled a week from now and you\'ve been fined \' + $func(\'money\', \'string_price\', temp_fine) + \'.');
          } else {
            // TODO-QSP: dynamic text: Going through the letter you read that you've missed your court hearing. A new c...
            scene.text('Going through the letter you read that you\'ve missed your court hearing. A new court hearing has been scheduled on Monday, a week from now and you\'ve been fined \' + $func(\'money\', \'string_price\', temp_fine) + \'.');
          }
          scene.text('<i>Failing to appear in court will have dire consequences for the accused.</i> Your heart drops as you read that line…');
          // TODO-QSP: dynamic text: <i>The court is located in the city center. You should arrive at '+func('time', ...
          scene.text('<i>The court is located in the city center. You should arrive at 9:00 as there are a lot of cases and we can\'t say when your turn might come up.</i>');
          scene.text('You put the letter back in the envelope and let out a loud sigh…');
        } else {
          (s as any).temp_fine = 500 * (Math.floor(Math.random() * 11) + 10);
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: As you come home you see the familiar envelope from the court. You already know ...
          scene.text('As you come home you see the familiar envelope from the court. You already know the gist of it, <i>missed court, \' + $func(\'money\', \'string_price\', temp_fine) + \' fine, failure to show up will have dire consequences,</i> yadda yadda…');
          scene.text('You glance through the letter seeing the same information once again and as you finish you throw it to the side and continue further on inside your apartment…');
        }
      } else {
        if (((s as any).week ?? 0) === 6) {
          // TODO-QSP: policeQW_courthearing_dates[] = daystart + 9
        } else {
          if (((s as any).week ?? 0) === 7) {
            // TODO-QSP: policeQW_courthearing_dates[] = daystart + 8
          } else {
            // TODO-QSP: policeQW_courthearing_dates[] = daystart + 7
          }
        }
        // TODO-QSP: $policeQW_courthearing_subjects[] = $policeQW_courtletter_subjects[0]
        if (((s as any).policeQW ?? 0)?.['courtletter_hearing_counter'] < 10) {
          if (!(s as any).policeQW) (s as any).policeQW = {}; (s as any).policeQW['courtletter_hearing_counter'] = ((s as any).policeQW['courtletter_hearing_counter'] ?? 0) + (1);
          qspCall(s, 'mood', 'lower', 'huge');
          qspCall(s, 'stat', '');
          scene.text('As you enter your home you notice an envelope from the court. You anxiously look at it and take a deep breath before opening the envelope.');
          if (((s as any).week ?? 0) < 6) {
            scene.text('Going through the letter you read that you\'ve been summoned to appear in court a week from now.');
          } else {
            scene.text('Going through the letter you read that you\'ve been summoned to appear in court on Monday, a week from now.');
          }
          scene.text('<i>Failing to appear in court will have dire consequences for the accused.</i> Your heart drops as you read that line…');
          // TODO-QSP: dynamic text: <i>The court is located in the city center. You should arrive at '+func('time', ...
          scene.text('<i>The court is located in the city center. You should arrive at 9:00 as there are a lot of cases and we can\'t say when your turn might come up.</i>');
          scene.text('You put the letter back in the envelope and let out a loud sigh…');
        } else {
          scene.text('As you come home you see the familiar envelope from the court. You already know the gist of it, <i>failure to show up will have dire consequences,</i> yadda yadda…');
          scene.text('You glance through the letter seeing the same information once again and as you finish you throw it to the side and continue further on inside your apartment…');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'letter':
      enterLetter(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const courtletter: LocationDef = {
  name: 'courtletter',
  title: 'As you enter your home you notice an envelope from the court',
  region: 'other',
  enter: enter,
};
