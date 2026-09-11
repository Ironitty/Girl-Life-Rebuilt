import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterJudgeStart(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'shoplift') {
    // TODO-QSP: gt 'court_sentence_events', 'judge_shoplift', $mid($ARGS[1], 10)
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'prostitution') {
      // TODO-QSP: gt 'court_sentence_events', 'judge_prostitution', $mid($ARGS[1], 14)
    } else {
      qspCall(s, 'LOCA', 'mod_sentenceevents', 'hearing');
    }
  }
  scene.build();
}

function enterJudgeEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['sentence', 'punishment'] }]);
  scene.build();
}

function enterJudgeShoplift(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/court/judge.jpg');
  scene.text('The judge speaks with a stern, firm voice. "I see that you\'re here because you were caught stealing."');
  scene.text('You sink your glance in shame and nod meekly.');
  scene.text('The judge continues. "Let\'s see what the detectives concluded during their investigation."');
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
    // TODO-QSP: dynamic text: The judge sits and quietly glances through the report, looking at you from time ...
    scene.text(`The judge sits and quietly glances through the report, looking at you from time to time. "The detective seems to be quite positive in the report, Miss ${((s as any).pcs_lastname ?? 0)}."`);
    scene.text('You suddenly feel a little emboldened as the detective seems to have come through for you. You even manage to let out a little smirk.');
    scene.text('He looks at you sternly. "Since you\'ve already admitted your guilt, I don\'t need to listen to your plea."');
    scene.text('"Yes, your honor…" you respectfully answer.');
    if (((s as any).policeQW ?? 0)?.['missed_court_dates'] > 0) {
      // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
      scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}…" Just as he's about to close it, he stops at the last page. "Wait, what is this? Have you missed a sentencing?"`);
      scene.text('You look around, trying to come up with an excuse, but decide it\'s best to admit your guilt. "Yes…" you meekly answer.');
      // TODO-QSP: dynamic text: The judge clears their throat as their eyes pierce through you. "This is a serio...
      scene.text(`The judge clears their throat as their eyes pierce through you. "This is a serious offence, Miss ${((s as any).pcs_lastname ?? 0)}. I'll have to take this into consideration when deciding your punishment."`);
      scene.text('You try your best to hold back your tears as you nod your head.');
    } else {
      // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
      scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}. I'll now proceed with the sentencing."`);
      scene.text('You nod and take a deep breath as you await your punishment.');
    }
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
      scene.text('The judge sits and quietly glances through the report, looking at you from time to time. "The detective has only written neutral comments in the report."');
      scene.text('You let out a sigh of relief, suddenly feeling a little more hopeful since you can probably expect a lighter sentencing than usual.');
      scene.text('He looks at you sternly. "Since you\'ve already admitted your guilt, I don\'t need to listen to your plea."');
      scene.text('"Yes, your honor…" you respectfully answer.');
      if (((s as any).policeQW ?? 0)?.['missed_court_dates'] > 0) {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}…" Just as he's about to close it, he stops at the last page. "Wait, what is this? Have you missed a sentencing?"`);
        scene.text('You look around, trying to come up with an excuse, but decide it\'s best to admit your guilt. "Yes…" you meekly answer.');
        // TODO-QSP: dynamic text: The judge clears their throat as their eyes pierce through you. "This is a serio...
        scene.text(`The judge clears their throat as their eyes pierce through you. "This is a serious offence, Miss ${((s as any).pcs_lastname ?? 0)}. I'll have to take this into consideration when deciding your punishment."`);
        scene.text('You try your best to hold back your tears as you nod your head.');
        scene.actions([
          { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}. I'll now proceed with the sentencing."`);
        scene.text('You nod and take a deep breath as you await your punishment.');
      }
    } else {
      // TODO-QSP: dynamic text: The judge sits and quietly glances through the report, looking at you from time ...
      scene.text(`The judge sits and quietly glances through the report, looking at you from time to time. "Miss ${((s as any).pcs_lastname ?? 0)}, this report is quite damaging…"`);
      scene.text('You look nonchalantly at the judge, almost ignoring what he has to say.');
      scene.text('He looks at you sternly. "Since you\'ve already admitted your guilt, there\'s no need for me to listen to your plea."');
      scene.text('"Whatever," you mutter as you shrug your shoulders.');
      if (((s as any).policeQW ?? 0)?.['missed_court_dates'] > 0) {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}…" Just as he's about to close it, he stops at the last page. "Wait, what is this? Have you missed a sentencing?"`);
        scene.text('You look around, trying to come up with an excuse, but decide it\'s best to admit your guilt. "Yes…" you meekly answer.');
        // TODO-QSP: dynamic text: The judge clears their throat as their eyes pierce through you. "This is a serio...
        scene.text(`The judge clears their throat as their eyes pierce through you. "This is a serious offence, Miss ${((s as any).pcs_lastname ?? 0)}. I'll have to take this into consideration when deciding your punishment."`);
        scene.text('You try your best to hold back your tears as you nod your head.');
      } else {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}. I'll now proceed with the sentencing."`);
        scene.text('You nod and take a deep breath as you await your punishment.');
      }
    }
  }
  scene.actions([
    { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
  ]);
  scene.build();
}

function enterJudgeProstitution(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/shared/court/judge.jpg');
  scene.text('The judge speaks with a stern, firm voice. "I see that you\'re here because you were caught prostituting."');
  scene.text('You sink your glance in shame and nod meekly.');
  scene.text('The judge continues. "Let\'s see what the detectives concluded during their investigation."');
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
    // TODO-QSP: dynamic text: The judge sits and quietly glances through the report, looking at you from time ...
    scene.text(`The judge sits and quietly glances through the report, looking at you from time to time. "The detective seems to be quite positive in the report, Miss ${((s as any).pcs_lastname ?? 0)}."`);
    scene.text('You suddenly feel a little emboldened as the detective seems to have come through for you. You even manage to let out a little smirk.');
    scene.text('He looks at you sternly. "Since you\'ve already admitted your guilt, I don\'t need to listen to your plea."');
    scene.text('"Yes, your honor…" you respectfully answer.');
    if (((s as any).policeQW ?? 0)?.['missed_court_dates'] > 0) {
      // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
      scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}…" Just as he's about to close it, he stops at the last page. "Wait, what is this? Have you missed a sentencing?"`);
      scene.text('You look around, trying to come up with an excuse, but decide it\'s best to admit your guilt. "Yes…" you meekly answer.');
      // TODO-QSP: dynamic text: The judge clears their throat as their eyes pierce through you. "This is a serio...
      scene.text(`The judge clears their throat as their eyes pierce through you. "This is a serious offence, Miss ${((s as any).pcs_lastname ?? 0)}. I'll have to take this into consideration when deciding your punishment."`);
      scene.text('You try your best to hold back your tears as you nod your head.');
      scene.actions([
        { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
      scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}. I'll now proceed with the sentencing."`);
      scene.text('You nod and take a deep breath as you await your punishment.');
      scene.actions([
        { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
      ]);
    }
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
      scene.text('The judge sits and quietly glances through the report, looking at you from time to time. "The detective has only written neutral comments in the report."');
      scene.text('You let out a sigh of relief, suddenly feeling a little more hopeful since you can probably expect a lighter sentencing than usual.');
      scene.text('He looks at you sternly. "Since you\'ve already admitted your guilt, I don\'t need to listen to your plea."');
      scene.text('"Yes, your honor…" you respectfully answer.');
      if (((s as any).policeQW ?? 0)?.['missed_court_dates'] > 0) {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}…" Just as he's about to close it, he stops at the last page. "Wait, what is this? Have you missed a sentencing?"`);
        scene.text('You look around, trying to come up with an excuse, but decide it\'s best to admit your guilt. "Yes…" you meekly answer.');
        // TODO-QSP: dynamic text: The judge clears their throat as their eyes pierce through you. "This is a serio...
        scene.text(`The judge clears their throat as their eyes pierce through you. "This is a serious offence, Miss ${((s as any).pcs_lastname ?? 0)}. I'll have to take this into consideration when deciding your punishment."`);
        scene.text('You try your best to hold back your tears as you nod your head.');
        scene.actions([
          { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}. I'll now proceed with the sentencing."`);
        scene.text('You nod and take a deep breath as you await your punishment.');
        scene.actions([
          { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: The judge sits and quietly glances through the report, looking at you from time ...
      scene.text(`The judge sits and quietly glances through the report, looking at you from time to time. "Miss ${((s as any).pcs_lastname ?? 0)}, this report is quite damaging…"`);
      scene.text('You look nonchalantly at the judge, almost ignoring what he has to say.');
      scene.text('He looks at you sternly. "Since you\'ve already admitted your guilt, there\'s no need for me to listen to your plea."');
      scene.text('"Whatever," you mutter as you shrug your shoulders.');
      if (((s as any).policeQW ?? 0)?.['missed_court_dates'] > 0) {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}…" Just as he's about to close it, he stops at the last page. "Wait, what is this? Have you missed a sentencing?"`);
        scene.text('You look around, trying to come up with an excuse, but decide it\'s best to admit your guilt. "Yes…" you meekly answer.');
        // TODO-QSP: dynamic text: The judge clears their throat as their eyes pierce through you. "This is a serio...
        scene.text(`The judge clears their throat as their eyes pierce through you. "This is a serious offence, Miss ${((s as any).pcs_lastname ?? 0)}. I'll have to take this into consideration when deciding your punishment."`);
        scene.text('You try your best to hold back your tears as you nod your head.');
        scene.actions([
          { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
        ]);
      } else {
        // TODO-QSP: dynamic text: The judge continues flipping throughout the report. "Everything seems to check o...
        scene.text(`The judge continues flipping throughout the report. "Everything seems to check out, Miss ${((s as any).pcs_lastname ?? 0)}. I'll now proceed with the sentencing."`);
        scene.text('You nod and take a deep breath as you await your punishment.');
        scene.actions([
          { label: 'Await punishment', goto: ['court_sentence_events', 'judge_end'] },
        ]);
      }
    }
  }
  scene.build();
}

function enterPunishmentStart(s: GameState, scene: SceneBuilder): void {
  if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(8))) === 'shoplift') {
    ((s as any).policeQW ?? {})['shoplift_counter'] = (((s as any).policeQW ?? {})['shoplift_counter'] ?? 0) + (1);
    // TODO-QSP: gs 'court_sentence_events', 'punishment_shoplift', $mid($ARGS[1], 10)
  } else {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(12))) === 'prostitution') {
      ((s as any).policeQW ?? {})['prostitution_counter'] = (((s as any).policeQW ?? {})['prostitution_counter'] ?? 0) + (1);
      // TODO-QSP: gs 'court_sentence_events', 'punishment_shoplift', $mid($ARGS[1], 14)
    } else {
      qspCall(s, 'LOCA', 'mod_sentenceevents', 'punishment', ((s as any).locArgs?.[1] ?? 0));
    }
  }
  scene.build();
}

function enterPunishmentShoplift(s: GameState, scene: SceneBuilder): void {
  if (((s as any).policeQW ?? 0)?.['shoplift_counter'] <= 5) {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
      (s as any).temp_fine = 5000 + (((s as any).policeQW ?? {})?.['shoplift_value'] / 2);
      qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
      scene.text('The judge reads out your sentence.');
      // TODO-QSP: dynamic text: "I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine...
      scene.text(`"I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine) + '. You can pay this fine at the post office. You've been lucky this time, Miss ${((s as any).pcs_lastname ?? 0)}."`);
      scene.text('You nod and quickly make your way out of the courtroom.');
    } else {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
        (s as any).temp_fine = 5000 + ((s as any).policeQW ?? {})?.['shoplift_value'];
        qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
        scene.text('The judge reads out your sentence.');
        // TODO-QSP: dynamic text: "I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine...
        scene.text('"I hereby sentence you to a fine of \' + $func(\'money\', \'string_price\', temp_fine) + \'. You can pay this fine at the post office."');
        scene.text('You nod and quickly make your way out of the courtroom.');
      } else {
        (s as any).temp_fine = 5000 + (3 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 2);
        qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
        scene.text('The judge reads out your sentence.');
        // TODO-QSP: dynamic text: "I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine...
        scene.text('"I hereby sentence you to a fine of \' + $func(\'money\', \'string_price\', temp_fine) + \'. You can pay this fine at the post office. If you appear in front of this court again, then I suggest you check your attitude."');
        scene.text('You nod and quickly make your way out of the courtroom.');
      }
    }
  } else {
    if (((s as any).policeQW ?? 0)?.['shoplift_counter'] <= 10) {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
        (s as any).temp_fine = 7500 + (3 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 4);
        qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
        scene.text('The judge reads out your sentence.');
        // TODO-QSP: dynamic text: "It appears that I need to increase the fine to a sum of ' + $func('money', 'str...
        scene.text('"It appears that I need to increase the fine to a sum of \' + $func(\'money\', \'string_price\', temp_fine) + \'. Hopefully, this will teach you a lesson."');
        scene.text('You nod and quickly make your way out of the courtroom.');
      } else {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
          (s as any).temp_fine = 7500 + (3 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 2);
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          scene.text('The judge reads out your sentence.');
          // TODO-QSP: dynamic text: "It appears that I need to increase the fine to a sum of ' + $func('money', 'str...
          scene.text('"It appears that I need to increase the fine to a sum of \' + $func(\'money\', \'string_price\', temp_fine) + \'. Hopefully, this will teach you a lesson."');
          scene.text('You nod and quickly make your way out of the courtroom.');
        } else {
          (s as any).temp_fine = 7500 + (9 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 4);
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: "I see you've still got an attitude issue, so I hereby sentence you to pay a sum...
          scene.text('"I see you\'ve still got an attitude issue, so I hereby sentence you to pay a sum of \' + $func(\'money\', \'string_price\', temp_fine) + \'. In addition, you will also serve 20 hours of community service at the Mercy Clinic."');
          scene.text('You nod and quickly make your way out of the courtroom.');
        }
      }
    } else {
      if (((s as any).policeQW ?? 0)?.['shoplift_counter'] <= 15) {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
          (s as any).temp_fine = 10000 + ((s as any).policeQW ?? {})?.['shoplift_value'];
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>… I see that name come up quite often here. It appears that I ...
          scene.text(`"${((s as any).pcs_lastname ?? 0)}… I see that name come up quite often here. It appears that I need to increase the fine even further to a sum of ' + $func('money', 'string_price', temp_fine) + '."`);
          scene.text('You nod and quickly make your way out of the courtroom.');
        } else {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
            (s as any).temp_fine = 10000 + (2 * ((s as any).policeQW ?? {})?.['shoplift_value']);
            qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>… I see that name come up quite often here. It appears that I ...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}… I see that name come up quite often here. It appears that I need to increase the fine even further to a sum of ' + $func('money', 'string_price', temp_fine) + '. I also sentence you to 20 hours of community service at the Mercy Clinic."`);
            scene.text('You nod and quickly make your way out of the courtroom.');
          } else {
            (s as any).temp_fine = 10000 + (5 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 2);
            qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>… I see that name come up quite often here. It appears that I ...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}… I see that name come up quite often here. It appears that I need to increase the fine even further to a sum of ' + $func('money', 'string_price', temp_fine) + ' and increase the community service at the Mercy Clinic to 40 hours."`);
            scene.text('You nod and quickly make your way out of the courtroom.');
          }
        }
      } else {
        if (((s as any).policeQW ?? 0)?.['shoplift_counter'] <= 20) {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
            (s as any).temp_fine = 15000 + (5 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 4);
            qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
            // TODO-QSP: dynamic text: "This is starting to get out of hand, Miss <<$pcs_lastname>>! It appears that I ...
            scene.text(`"This is starting to get out of hand, Miss ${((s as any).pcs_lastname ?? 0)}! It appears that I need to increase the fine even further to a sum of ' + $func('money', 'string_price', temp_fine) + ' and also sentence you to 20 hours of community service at the Mercy Clinic."`);
            scene.text('You nod and quickly make your way out of the courtroom.');
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
              (s as any).temp_fine = 15000 + (5 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 2);
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: "This is starting to get out of hand, Miss <<$pcs_lastname>>! It appears that I ...
              scene.text(`"This is starting to get out of hand, Miss ${((s as any).pcs_lastname ?? 0)}! It appears that I need to increase the fine even further to a sum of ' + $func('money', 'string_price', temp_fine) + ' and increase the community service at the Mercy Clinic to 40 hours."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            } else {
              (s as any).temp_fine = 15000 + (3 * ((s as any).policeQW ?? {})?.['shoplift_value']);
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: "This is starting to get out of hand, Miss <<$pcs_lastname>>! It appears that I ...
              scene.text(`"This is starting to get out of hand, Miss ${((s as any).pcs_lastname ?? 0)}! It appears that I need to increase the fine even further to a sum of ' + $func('money', 'string_price', temp_fine) + ' and increase the community service at the Mercy Clinic to 80 hours."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            }
          }
        } else {
          if (((s as any).policeQW ?? 0)?.['shoplift_counter'] <= 25) {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
              (s as any).temp_fine = 25000 + (3 * ((s as any).policeQW ?? {})?.['shoplift_value'] / 2);
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: "What a surprise! Miss <<$pcs_lastname>> stands in front of me again. You're sta...
              scene.text(`"What a surprise! Miss ${((s as any).pcs_lastname ?? 0)} stands in front of me again. You're starting to annoy me! Are you doing this on purpose? Pay this fine of ' + $func('money', 'string_price', temp_fine) + ' and enjoy your 40 hours of community service at the Mercy Clinic."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            } else {
              if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
                (s as any).temp_fine = 25000 + (3 * ((s as any).policeQW ?? {})?.['shoplift_value']);
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: "What a surprise! Miss <<$pcs_lastname>> stands in front of me again. You're sta...
                scene.text(`"What a surprise! Miss ${((s as any).pcs_lastname ?? 0)} stands in front of me again. You're starting to annoy me! Are you doing this on purpose? Pay the fine of ' + $func('money', 'string_price', temp_fine) + ' and enjoy your 80 hours of community service at the Mercy Clinic."`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              } else {
                (s as any).temp_fine = 25000 + (4 * ((s as any).policeQW ?? {})?.['shoplift_value']);
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: "What a surprise! Miss <<$pcs_lastname>> stands in front of me again. You're sta...
                scene.text(`"What a surprise! Miss ${((s as any).pcs_lastname ?? 0)} stands in front of me again. You're starting to annoy me! Are you doing this on purpose? Pay the fine of ' + $func('money', 'string_price', temp_fine) + ' and enjoy your 120 hours of community service at the Mercy Clinic."`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              }
            }
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
              (s as any).temp_fine = 50000 + (2 * ((s as any).policeQW ?? {})?.['shoplift_value']);
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: The judge sighs. "Here we are again, Miss <<$pcs_lastname>>. I'm getting tired o...
              scene.text(`The judge sighs. "Here we are again, Miss ${((s as any).pcs_lastname ?? 0)}. I'm getting tired of being lenient. The fine will be set to ' + $func('money', 'string_price', temp_fine) + ' and the community service at the Mercy Clinic to 80 hours."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            } else {
              if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
                (s as any).temp_fine = 50000 + (4 * ((s as any).policeQW ?? {})?.['shoplift_value']);
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: The judge sighs. "Here we are again, Miss <<$pcs_lastname>>. I'm getting tired o...
                scene.text(`The judge sighs. "Here we are again, Miss ${((s as any).pcs_lastname ?? 0)}. I'm getting tired of being lenient. The fine will be set to ' + $func('money', 'string_price', temp_fine) + ' and the community service at the Mercy Clinic to 120 hours."`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              } else {
                (s as any).temp_fine = 50000 + (5 * ((s as any).policeQW ?? {})?.['shoplift_value']);
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: The judge sighs. "Here we are again, Miss <<$pcs_lastname>>. I'm getting tired o...
                scene.text(`The judge sighs. "Here we are again, Miss ${((s as any).pcs_lastname ?? 0)}. I'm getting tired of being lenient, so you're getting the maximum sentence. The fine will be set to ' + $func('money', 'string_price', temp_fine) + ' and the community service at the Mercy Clinic to 160 hours. I hope you'll think about your actions before stealing again!"`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterPunishmentProstitution(s: GameState, scene: SceneBuilder): void {
  if (((s as any).policeQW ?? 0)?.['prostitution_counter'] <= 5) {
    if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
      (s as any).temp_fine = 6000;
      qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
      scene.text('The judge reads out your sentence.');
      // TODO-QSP: dynamic text: "I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine...
      scene.text(`"I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine) + '. You can pay this fine at the post office. You've been lucky this time, Miss ${((s as any).pcs_lastname ?? 0)}."`);
      scene.text('You nod and quickly make your way out of the courtroom.');
    } else {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
        (s as any).temp_fine = 7000;
        qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
        scene.text('The judge reads out your sentence.');
        // TODO-QSP: dynamic text: "I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine...
        scene.text('"I hereby sentence you to a fine of \' + $func(\'money\', \'string_price\', temp_fine) + \'. You can pay this fine at the post office."');
        scene.text('You nod and quickly make your way out of the courtroom.');
      } else {
        (s as any).temp_fine = 8000;
        qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
        scene.text('The judge reads out your sentence.');
        // TODO-QSP: dynamic text: "I hereby sentence you to a fine of ' + $func('money', 'string_price', temp_fine...
        scene.text('"I hereby sentence you to a fine of \' + $func(\'money\', \'string_price\', temp_fine) + \'. You can pay this fine at the post office. If you appear in front of this court again, then I suggest you check your attitude."');
        scene.text('You nod and quickly make your way out of the courtroom.');
      }
    }
  } else {
    if (((s as any).policeQW ?? 0)?.['prostitution_counter'] <= 10) {
      if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
        (s as any).temp_fine = 9000;
        qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
        // TODO-QSP: dynamic text: "I see that I need to increase the fine to ' + $func('money', 'string_price', te...
        scene.text('"I see that I need to increase the fine to \' + $func(\'money\', \'string_price\', temp_fine) + \'. Hopefully this will get you to reconsider your actions."');
        scene.text('You nod and quickly make your way out of the courtroom.');
      } else {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
          (s as any).temp_fine = 10500;
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: "I see that I need to increase the fine to ' + $func('money', 'string_price', te...
          scene.text('"I see that I need to increase the fine to \' + $func(\'money\', \'string_price\', temp_fine) + \'. Hopefully, this will get you to reconsider your actions."');
          scene.text('You nod and quickly make your way out of the courtroom.');
        } else {
          (s as any).temp_fine = 11500;
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: "I see you've still got an attitude problem, so I hereby sentence you to pay a f...
          scene.text('"I see you\'ve still got an attitude problem, so I hereby sentence you to pay a fine of \' + $func(\'money\', \'string_price\', temp_fine) + \'. I\'ll also add 20 hours of community service at the Mercy Clinic. Hopefully this will help you reconsider your actions."');
          scene.text('You nod and quickly make your way out of the courtroom.');
        }
      }
    } else {
      if (((s as any).policeQW ?? 0)?.['prostitution_counter'] <= 15) {
        if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
          (s as any).temp_fine = 12000;
          qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>… I see that name come up quite often here. It appears that I ...
          scene.text(`"${((s as any).pcs_lastname ?? 0)}… I see that name come up quite often here. It appears that I need to increase the fine even further to ' + $func('money', 'string_price', temp_fine) + '."`);
          scene.text('You nod and quickly make your way out of the courtroom.');
        } else {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
            (s as any).temp_fine = 14000;
            qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>… I see that name come up quite often here. It appears that I ...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}… I see that name come up quite often here. It appears that I need to increase the fine even further to ' + $func('money', 'string_price', temp_fine) + ' and sentence you to 20 hours of community service at the Mercy Clinic."`);
            scene.text('You nod and quickly make your way out of the courtroom.');
          } else {
            (s as any).temp_fine = 15000;
            qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>… I see that name come up quite often here. It appears that I ...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}… I see that name come up quite often here. It appears that I need to increase the fine even further to ' + $func('money', 'string_price', temp_fine) + ' and increase the community service at the Mercy Clinic to 40 hours."`);
            scene.text('You nod and quickly make your way out of the courtroom.');
          }
        }
      } else {
        if (((s as any).policeQW ?? 0)?.['prostitution_counter'] <= 20) {
          if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
            (s as any).temp_fine = 17500;
            qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
            // TODO-QSP: dynamic text: "This is starting to get out of hand, Miss <<$pcs_lastname>>! It appears that I ...
            scene.text(`"This is starting to get out of hand, Miss ${((s as any).pcs_lastname ?? 0)}! It appears that I need to increase the fine even further to ' + $func('money', 'string_price', temp_fine) + ' and sentence you to 20 hours of community service at the Mercy Clinic."`);
            scene.text('You nod and quickly make your way out of the courtroom.');
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
              (s as any).temp_fine = 20000;
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: "This is starting to get out of hand, Miss <<$pcs_lastname>>! It appears that I ...
              scene.text(`"This is starting to get out of hand, Miss ${((s as any).pcs_lastname ?? 0)}! It appears that I need to increase the fine even further to ' + $func('money', 'string_price', temp_fine) + ' and increase the community service at the Mercy Clinic to 40 hours."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            } else {
              (s as any).temp_fine = 21000;
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: "This is starting to get out of hand, Miss <<$pcs_lastname>>! It appears that I ...
              scene.text(`"This is starting to get out of hand, Miss ${((s as any).pcs_lastname ?? 0)}! It appears that I need to increase the fine even further to ' + $func('money', 'string_price', temp_fine) + ' and increase the community service at the Mercy Clinic to 80 hours."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            }
          }
        } else {
          if (((s as any).policeQW ?? 0)?.['prostitution_counter'] <= 25) {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
              (s as any).temp_fine = 28000;
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: "What a surprise! <<$pcs_lastname>> stands in front of me again. You're starting...
              scene.text(`"What a surprise! ${((s as any).pcs_lastname ?? 0)} stands in front of me again. You're starting to annoy me! Are you doing this on purpose? Pay this fine of ' + $func('money', 'string_price', temp_fine) + ' and enjoy your 40 hours of community service at the Mercy Clinic."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            } else {
              if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
                (s as any).temp_fine = 21000;
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: "What a surprise! <<$pcs_lastname>> stands in front of me again. You're starting...
                scene.text(`"What a surprise! ${((s as any).pcs_lastname ?? 0)} stands in front of me again. You're starting to annoy me! Are you doing this on purpose? Pay this fine of ' + $func('money', 'string_price', temp_fine) + ' and enjoy your 80 hours of community service at the Mercy Clinic."`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              } else {
                (s as any).temp_fine = 32000;
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: "What a surprise! <<$pcs_lastname>> stands in front of me again. You're starting...
                scene.text(`"What a surprise! ${((s as any).pcs_lastname ?? 0)} stands in front of me again. You're starting to annoy me! Are you doing this on purpose? Pay this fine of ' + $func('money', 'string_price', temp_fine) + ' and enjoy your 120 hours of community service at the Mercy Clinic."`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              }
            }
          } else {
            if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'easy') {
              (s as any).temp_fine = 55000;
              qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
              // TODO-QSP: dynamic text: The judge sighs. "Here we are again, Miss <<$pcs_lastname>>. I'm getting tired o...
              scene.text(`The judge sighs. "Here we are again, Miss ${((s as any).pcs_lastname ?? 0)}. I'm getting tired of being lenient. The fine will be set to ' + $func('money', 'string_price', temp_fine) + ' and the community service at the Mercy Clinic to 80 hours."`);
              scene.text('You nod and quickly make your way out of the courtroom.');
            } else {
              if (((((s as any).locArgs?.[1] ?? 0)).slice((1)-1, ((1)-1)+(4))) === 'norm') {
                (s as any).temp_fine = 57500;
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: The judge sighs. "Here we are again, Miss <<$pcs_lastname>>. I'm getting tired o...
                scene.text(`The judge sighs. "Here we are again, Miss ${((s as any).pcs_lastname ?? 0)}. I'm getting tired of being lenient. The fine will be set to ' + $func('money', 'string_price', temp_fine) + ' and the community service at the Mercy Clinic to 120 hours."`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              } else {
                (s as any).temp_fine = 60000;
                qspCall(s, 'court_functions', 'add_fine', ((s as any).temp_fine ?? 0));
                // TODO-QSP: dynamic text: The judge sighs. "Here we are again, Miss <<$pcs_lastname>>. I'm getting tired o...
                scene.text(`The judge sighs. "Here we are again, Miss ${((s as any).pcs_lastname ?? 0)}. I'm getting tired of being lenient, so you're getting the maximum sentence. The fine will be set to ' + $func('money', 'string_price', temp_fine) + ' and the community service at the Mercy Clinic to 160 hours. I hope you'll think about your actions before stealing again!"`);
                scene.text('You nod and quickly make your way out of the courtroom.');
              }
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'judge_start':
      enterJudgeStart(s, scene);
      break;
    case 'judge_end':
      enterJudgeEnd(s, scene);
      break;
    case 'judge_shoplift':
      enterJudgeShoplift(s, scene);
      break;
    case 'judge_prostitution':
      enterJudgeProstitution(s, scene);
      break;
    case 'punishment_start':
      enterPunishmentStart(s, scene);
      break;
    case 'punishment_shoplift':
      enterPunishmentShoplift(s, scene);
      break;
    case 'punishment_prostitution':
      enterPunishmentProstitution(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const court_sentence_events: LocationDef = {
  name: 'court_sentence_events',
  title: 'The judge speaks with a stern, firm voice. "I see that you\'r',
  region: 'other',
  enter: enter,
};
