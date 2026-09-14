import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $exp_docs[0] = 'Doctor Sokolnikov'
  // TODO-QSP: $exp_docs[1] = 'Doctor Ivanov'
  // TODO-QSP: $trial_names[0]    = 'Enhancement pill'
  if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[0] = 500;
  // TODO-QSP: $trial_sections[0]  = 'enhancement_pill'
  if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[0] = (-1);
  // TODO-QSP: $trial_names[1]    = 'Breast Cream'
  if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[1] = 5000;
  // TODO-QSP: $trial_sections[1]  = 'breast_cream'
  if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[1] = 1;
  if (!(s as any).trial_durations) (s as any).trial_durations = {}; (s as any).trial_durations[1] = 4;
  // TODO-QSP: $trial_names[2]    = 'Hair Extension Shampoo'
  if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[2] = 2500;
  // TODO-QSP: $trial_sections[2]  = 'hair_cream'
  if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[2] = 1;
  if (!(s as any).trial_durations) (s as any).trial_durations = {}; (s as any).trial_durations[2] = 5;
  // TODO-QSP: $trial_names[3]    = 'Aphrodisiac pills'
  if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[3] = 10000;
  // TODO-QSP: $trial_sections[3]  = 'aphrodisiac_pill'
  if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[3] = 1;
  if (!(s as any).trial_durations) (s as any).trial_durations = {}; (s as any).trial_durations[3] = 5;
  // TODO-QSP: $trial_names[4]    = 'Butt Injection'
  if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[4] = 10000;
  // TODO-QSP: $trial_sections[4]  = 'butt_injection'
  if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[4] = 1;
  if (!(s as any).trial_durations) (s as any).trial_durations = {}; (s as any).trial_durations[4] = 5;
  // TODO-QSP: $trial_names[5]    = 'Fertility treatment'
  if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[5] = 10000;
  // TODO-QSP: $trial_sections[5]  = 'fertility_shot'
  if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[5] = 1;
  if (!(s as any).trial_durations) (s as any).trial_durations = {}; (s as any).trial_durations[5] = 3;
  if (((s as any).therapistQW ?? 0)?.['breast_cream'] === 1  &&  ((s as any).experimentQW ?? 0)?.['times_participated_1'] === 0  &&  ((s as any).locArgs?.[0] ?? 0) === 'see_trials') {
    // TODO-QSP: $trial_names[1] = '<b>Breast Cream</b>'
    (s as any).cetl_i = 0;
    // TODO-QSP: :therapist_overwrite_loop
    // TODO-QSP: $trial_names[cetl_i]  = $trial_names[1]
    if (!(s as any).trial_pays) (s as any).trial_pays = {}; (s as any).trial_pays[String((s as any).cetl_i ?? 0)] = qspUntranslated(s, "trial_pays[1]", { location: "city_experimental_trials_list" });
    // TODO-QSP: $trial_sections[cetl_i]  = $trial_sections[1]
    if (!(s as any).trial_maxs) (s as any).trial_maxs = {}; (s as any).trial_maxs[String((s as any).cetl_i ?? 0)] = qspUntranslated(s, "trial_maxs[1]", { location: "city_experimental_trials_list" });
    (s as any).cetl_i = ((s as any).cetl_i ?? 0) + (1);
    if (((s as any).cetl_i ?? 0) < Object.keys((s as any).trial_names ?? {}).length) {
      // TODO-QSP: jump 'therapist_overwrite_loop'
    }
  }
  scene.build();
}

function enterSeeTrials(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'city_experimental_trials_list', 'see_trials');
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images\\locations\\city\\residential\\clinic\\experiments\\experiment_form.jpg');
  scene.text('You look through the long list of various available clinical trials and the following stick out:');
  scene.text('<center><table align="center" width=80%>');
  (s as any).cetl_i = 0;
  // TODO-QSP: :loop_start
  if (((s as any).trial_maxs ?? 0)?.[String((s as any).cetl_i ?? 0)] === -1  ||  ((s as any).experimentQW ?? 0)['times_participated_' + ((s as any).cetl_i ?? 0)] < ((s as any).trial_maxs ?? 0)?.[String((s as any).cetl_i ?? 0)]) {
    // TODO-QSP: $temp_text += '<tr><td bgcolor="<<$temp_bgcolor>>" align="center"><a href="exec: gt ''city_experimen...
  } else {
    // TODO-QSP: $temp_text += '<tr><td bgcolor="<<$temp_bgcolor>>" align="center"><font color="<<$func("shortgs", "r...
  }
  // TODO-QSP: $temp_text += '</td> <td bgcolor="<<$temp_bgcolor>>" align="right"><font color="<<$func("shortgs", "...
  // TODO-QSP: dynamic text: <<$temp_text>>
  scene.text(`${((s as any).temp_text || '')}`);
  (s as any).cetl_i = ((s as any).cetl_i ?? 0) + (1);
  if (((s as any).cetl_i ?? 0) < Object.keys((s as any).trial_names ?? {}).length) {
    // TODO-QSP: jump 'loop_start'
  }
  scene.text('</table></center>');
  // TODO-QSP: end
  if (((s as any).locArgs?.[0] ?? 0) === ((s as any).trial_sections ?? 0)[0]) {
    // TODO-QSP: gs 'core_library', 'setloc', 'city_experimental_trials_list', $trial_sections[0]
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images\\system\\image_needed.png');
    scene.text('We have developed a range of enhancement pills that are designed to improve both body and mood. They\'ve just been approved for human trials, so we\'re still cataloguing the effects.');
    scene.text('The following are expected: mood swings, aches, itches, rashes and physical changes.');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActGoBack(s, scene); (s as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Sign up', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = qspUntranslated(s, "trial_names[0]", { location: "city_experimental_trials_list" });
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc1.jpg');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc2.jpg');
    }
    // TODO-QSP: dynamic text: You are approached by a doctor in a white lab coat, <<$temp_doc>> neatly sown on...
    scene.text(`You are approached by a doctor in a white lab coat, ${((s as any).temp_doc || '')} neatly sown on the chest. "Miss ${((s as any).pcs_lastname || '')}? Please follow me."`);
    // TODO-QSP: dynamic text: You are guided through narrow hallways until you end up in <<$temp_doc>>'s priva...
    scene.text(`You are guided through narrow hallways until you end up in ${((s as any).temp_doc || '')}'s private office, where you take a seat in one of the free chairs available.`);
    (s as any).temp_rand = Math.floor(Math.random() * 90) + 0;
    if (((s as any).temp_rand ?? 0) < 10) {
      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_cyan';
      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_cyan_taken'] = ((s as any).experimentQW['pill_cyan_taken'] ?? 0) + (1);
      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 3) + 1;
    } else {
      if (((s as any).temp_rand ?? 0) < 20) {
        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_red';
        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_red_taken'] = ((s as any).experimentQW['pill_red_taken'] ?? 0) + (1);
        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 3) + 2;
      } else {
        if (((s as any).temp_rand ?? 0) < 30) {
          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_blue';
          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_blue_taken'] = ((s as any).experimentQW['pill_blue_taken'] ?? 0) + (1);
          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 3) + 2;
        } else {
          if (((s as any).temp_rand ?? 0) < 40) {
            if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_yellow';
            if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_yellow_taken'] = ((s as any).experimentQW['pill_yellow_taken'] ?? 0) + (1);
            if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 4) + 2;
          } else {
            if (((s as any).temp_rand ?? 0) < 50) {
              if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_orange';
              if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_orange_taken'] = ((s as any).experimentQW['pill_orange_taken'] ?? 0) + (1);
              if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 3) + 2;
            } else {
              if (((s as any).temp_rand ?? 0) < 60) {
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_violet';
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_violet_taken'] = ((s as any).experimentQW['pill_violet_taken'] ?? 0) + (1);
                if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = 1;
              } else {
                if (((s as any).temp_rand ?? 0) < 65) {
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_brown';
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_brown_taken'] = ((s as any).experimentQW['pill_brown_taken'] ?? 0) + (1);
                  if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 3) + 2;
                } else {
                  if (((s as any).temp_rand ?? 0) < 70) {
                    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_purple';
                    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_purple_taken'] = ((s as any).experimentQW['pill_purple_taken'] ?? 0) + (1);
                    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = Math.floor(Math.random() * 3) + 2;
                  } else {
                    if (((s as any).temp_rand ?? 0) < 80) {
                      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_green';
                      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_green_taken'] = ((s as any).experimentQW['pill_green_taken'] ?? 0) + (1);
                      if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = 1;
                    } else {
                      if (((s as any).temp_rand ?? 0) < 85) {
                        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_gray';
                        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_gray_taken'] = ((s as any).experimentQW['pill_gray_taken'] ?? 0) + (1);
                        if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = 1;
                      } else {
                        if (((s as any).temp_rand ?? 0) < 90) {
                          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = 'pill_pink';
                          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['pill_pink_taken'] = ((s as any).experimentQW['pill_pink_taken'] ?? 0) + (1);
                          if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = 1;
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
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['times_participated_0'] = ((s as any).experimentQW['times_participated_0'] ?? 0) + (1);
    // TODO-QSP: dynamic text: <<$temp_doc>> briefly searches through a drawer, pulls out a nondescript <font c...
    scene.text(`${((s as any).temp_doc || '')} briefly searches through a drawer, pulls out a nondescript <font color=${((s as any).temp_pill_color || '')}>${((s as any).temp_pill_color || '')} pill</font> and hands it to you. "Please swallow this, and you'll get paid."`);
    scene.actions([
      { label: 'Swallow the <font color=<<$temp_pill_color>>><<$temp_pill_color>> pill</font>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img(`images\\locations\\city\\residential\\clinic\\experiments\\pill${Math.floor(Math.random() * 3) + 2}.jpg`);
    // TODO-QSP: dynamic text: The doctor observes as you swallow the pill and then makes a note on a clipboard...
    scene.text(`The doctor observes as you swallow the pill and then makes a note on a clipboard. "Thank you for your participation, Miss ${((s as any).pcs_lastname || '')}. We'll speak again soon."`);
    // TODO-QSP: gs 'city_experimental_trials_list', 'act_return', trial_pays[0]
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === ((s as any).trial_sections ?? 0)[1]) {
      // TODO-QSP: gs 'core_library', 'setloc', 'city_experimental_trials_list', $trial_sections[1]
      (s as any).minut = ((s as any).minut ?? 0) + 2;
      qspCall(s, 'stat', '');
      scene.text('We have developed a cream, based on natural hormones, which enhances the natural growth of breasts, leading to fuller and more natural looking breasts.');
      scene.text('No side effects are listed for this clinical trial.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActGoBack(s, scene); (s as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'Sign up', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['times_participated_1'] = ((s as any).experimentQW['times_participated_1'] ?? 0) + (1);
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = qspUntranslated(s, "trial_sections[1]", { location: "city_experimental_trials_list" });
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = qspUntranslated(s, "trial_durations[1]", { location: "city_experimental_trials_list" });
    if (((s as any).therapistQW ?? 0)?.['breast_cream'] === 1) {
      if (!(s as any).therapistQW) (s as any).therapistQW = {}; (s as any).therapistQW['breast_cream'] = 2;
    }
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc1.jpg');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc2.jpg');
    }
    // TODO-QSP: dynamic text: You are approached by a doctor in a white lab coat, <<$temp_doc>> neatly sown on...
    scene.text(`You are approached by a doctor in a white lab coat, ${((s as any).temp_doc || '')} neatly sown on the chest. "Miss ${((s as any).pcs_lastname || '')}? Please follow me."`);
    // TODO-QSP: dynamic text: You are guided through narrow hallways until you end up in <<$temp_doc>>'s priva...
    scene.text(`You are guided through narrow hallways until you end up in ${((s as any).temp_doc || '')}'s private office, where he gestures you lie on the exam table. "Please lie down and expose your chest."`);
    scene.actions([
      { label: 'Undress and lie down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\bustcream1.jpg');
    // TODO-QSP: dynamic text: <<$temp_doc>> puts on a pair of latex gloves and grabs a generic white tube. Squ...
    scene.text(`${((s as any).temp_doc || '')} puts on a pair of latex gloves and grabs a generic white tube. Squeezing a large amount of white cream into his hands, he starts massaging it into your breasts.`);
    // TODO-QSP: dynamic text: The massage continues for about a minute, at which point <<$temp_doc>> steps awa...
    scene.text(`The massage continues for about a minute, at which point ${((s as any).temp_doc || '')} steps away and takes off his gloves. "Thank you for your participation, Miss ${((s as any).pcs_lastname || '')}. We'll speak again soon."`);
    // TODO-QSP: gs 'city_experimental_trials_list', 'act_return', trial_pays[1]
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === ((s as any).trial_sections ?? 0)[2]) {
        // TODO-QSP: gs 'core_library', 'setloc', 'city_experimental_trials_list', $trial_sections[2]
        (s as any).minut = ((s as any).minut ?? 0) + 2;
        qspCall(s, 'stat', '');
        scene.text('We have developed a hair extension shampoo which enhances your natural hair growth, leading to longer, fuller and glossier hair.');
        scene.text('No side effects are listed for this clinical trial.');
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActGoBack(s, scene); (s as any).locArgs = __savedLocArgs; }
        scene.actions([
          { label: 'Sign up', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['times_participated_2'] = ((s as any).experimentQW['times_participated_2'] ?? 0) + (1);
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = qspUntranslated(s, "trial_sections[2]", { location: "city_experimental_trials_list" });
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = qspUntranslated(s, "trial_durations[2]", { location: "city_experimental_trials_list" });
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc1.jpg');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc2.jpg');
    }
    // TODO-QSP: dynamic text: You are approached by a doctor in a white lab coat, <<$temp_doc>> neatly sown on...
    scene.text(`You are approached by a doctor in a white lab coat, ${((s as any).temp_doc || '')} neatly sown on the chest. "Miss ${((s as any).pcs_lastname || '')}? Please follow me."`);
    // TODO-QSP: dynamic text: You are guided through narrow hallways until you end up in <<$temp_doc>>'s priva...
    scene.text(`You are guided through narrow hallways until you end up in ${((s as any).temp_doc || '')}'s private office, where he gestures you lie on the exam table. "Please lie down."`);
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\haircream1.jpg');
    // TODO-QSP: dynamic text: <<$temp_doc>> puts on a pair of latex gloves and grabs a generic chestnut brown ...
    scene.text(`${((s as any).temp_doc || '')} puts on a pair of latex gloves and grabs a generic chestnut brown tube. He squeezes a large amount of beige cream into his hands and starts massaging it into your hair and scalp.`);
    // TODO-QSP: dynamic text: The massage continues for about a minute, at which point <<$temp_doc>> steps awa...
    scene.text(`The massage continues for about a minute, at which point ${((s as any).temp_doc || '')} steps away and takes off his gloves. "Thank you for your participation, Miss ${((s as any).pcs_lastname || '')}. We'll speak again soon."`);
    // TODO-QSP: gs 'city_experimental_trials_list', 'act_return', trial_pays[2]
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === ((s as any).trial_sections ?? 0)[3]) {
          // TODO-QSP: gs 'core_library', 'setloc', 'city_experimental_trials_list', $trial_sections[3]
          (s as any).minut = ((s as any).minut ?? 0) + 2;
          qspCall(s, 'stat', '');
          scene.text('We have developed a general aphrodisiac to put you and your partner in the mood and ready to go for hours.');
          scene.text('No side effects are listed for this clinical trial.');
          scene.text('<sub><small>Warning! This is a strictly personal enhancer. The clinic is not liable for any criminal allegations if used on other subjects.</small></sub>');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActGoBack(s, scene); (s as any).locArgs = __savedLocArgs; }
          scene.actions([
            { label: 'Sign up', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['times_participated_3'] = ((s as any).experimentQW['times_participated_3'] ?? 0) + (1);
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = qspUntranslated(s, "trial_sections[3]", { location: "city_experimental_trials_list" });
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = qspUntranslated(s, "trial_durations[3]", { location: "city_experimental_trials_list" });
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc1.jpg');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc2.jpg');
    }
    // TODO-QSP: dynamic text: You are approached by a doctor in a white lab coat, <<$temp_doc>> neatly sown on...
    scene.text(`You are approached by a doctor in a white lab coat, ${((s as any).temp_doc || '')} neatly sown on the chest. "Miss ${((s as any).pcs_lastname || '')}? Please follow me."`);
    // TODO-QSP: dynamic text: You are guided through narrow hallways until you end up in <<$temp_doc>>'s priva...
    scene.text(`You are guided through narrow hallways until you end up in ${((s as any).temp_doc || '')}'s private office, where you take a seat in one of the free chairs available.`);
    // TODO-QSP: dynamic text: <<$temp_doc>> briefly searches through a drawer, pulls out a brightly coloured p...
    scene.text(`${((s as any).temp_doc || '')} briefly searches through a drawer, pulls out a brightly coloured pink pill and hands it to you. "Please swallow this, and you'll get paid."`);
    scene.actions([
      { label: 'Swallow the aphrodisiac</font>', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\pill1.jpg');
    // TODO-QSP: dynamic text: The doctor observes as you swallow the pill and then makes a note on a clipboard...
    scene.text(`The doctor observes as you swallow the pill and then makes a note on a clipboard. "Thank you for your participation, Miss ${((s as any).pcs_lastname || '')}. We'll speak again soon."`);
    // TODO-QSP: gs 'city_experimental_trials_list', 'act_return', trial_pays[3]
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === ((s as any).trial_sections ?? 0)[4]) {
            // TODO-QSP: gs 'core_library', 'setloc', 'city_experimental_trials_list', $trial_sections[4]
            (s as any).minut = ((s as any).minut ?? 0) + 2;
            qspCall(s, 'stat', '');
            scene.text('Disappointed by your genetic disposition to a flat behind, but afraid of invasive surgery? We at Kardashian Medics have heard you and developed our patented<sup>*</sup> KBI treatment! Get a behind like ours!');
            scene.text('No side effects are listed for this clinical trial.');
            scene.text('<br><br><br><br><br><br><br><br><br><br>');
            scene.text('<sub><small>*Patent following. The Kardashian Butt Injection is not affiliated with the Kardashian family.</small></sub>');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActGoBack(s, scene); (s as any).locArgs = __savedLocArgs; }
            scene.actions([
              { label: 'Sign up', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['times_participated_4'] = ((s as any).experimentQW['times_participated_4'] ?? 0) + (1);
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = qspUntranslated(s, "trial_sections[4]", { location: "city_experimental_trials_list" });
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = qspUntranslated(s, "trial_durations[4]", { location: "city_experimental_trials_list" });
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc1.jpg');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc2.jpg');
    }
    // TODO-QSP: dynamic text: You are approached by a doctor in a white lab coat, <<$temp_doc>> neatly sown on...
    scene.text(`You are approached by a doctor in a white lab coat, ${((s as any).temp_doc || '')} neatly sown on the chest. "Miss ${((s as any).pcs_lastname || '')}? Please follow me."`);
    // TODO-QSP: dynamic text: You are guided through narrow hallways until you end up in <<$temp_doc>>'s priva...
    scene.text(`You are guided through narrow hallways until you end up in ${((s as any).temp_doc || '')}'s private office, where he gestures you lie on the exam table. "Please expose your buttocks and lie face down on the exam table."`);
    scene.actions([
      { label: 'Undress and lie down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\assinjection1.jpg');
    // TODO-QSP: dynamic text: <<$temp_doc>> briefly searches through a drawer and pulls out a syringe filled w...
    scene.text(`${((s as any).temp_doc || '')} briefly searches through a drawer and pulls out a syringe filled with a light brownish liquid. A mild sting and a small injection in each bottock, and you are done.`);
    // TODO-QSP: dynamic text: "Thank you for your participation, Miss <<$pcs_lastname>>. We'll speak again soo...
    scene.text(`"Thank you for your participation, Miss ${((s as any).pcs_lastname || '')}. We'll speak again soon."`);
    // TODO-QSP: gs 'city_experimental_trials_list', 'act_return', trial_pays[4]
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === ((s as any).trial_sections ?? 0)[5]) {
              // TODO-QSP: gs 'core_library', 'setloc', 'city_experimental_trials_list', $trial_sections[5]
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              qspCall(s, 'stat', '');
              scene.text('Do you want a baby, but are having problems getting pregnant? Fear not, for we have developed the answer! Just one shot and your chances of bringing that little ray of sunshine into your life will quadruple!');
              scene.text('Side effects include: Hormonal imbalance, superovulation and uncontrolled arousal.');
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterActGoBack(s, scene); (s as any).locArgs = __savedLocArgs; }
              scene.actions([
                { label: 'Sign up', handler: (st: GameState) => {
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['times_participated_5'] = ((s as any).experimentQW['times_participated_5'] ?? 0) + (1);
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_active'] = qspUntranslated(s, "trial_sections[5]", { location: "city_experimental_trials_list" });
    if (!(s as any).experimentQW) (s as any).experimentQW = {}; (s as any).experimentQW['trial_duration'] = qspUntranslated(s, "trial_durations[5]", { location: "city_experimental_trials_list" });
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc1.jpg');
    } else {
      scene.img('images\\locations\\city\\residential\\clinic\\experiments\\doc2.jpg');
    }
    // TODO-QSP: dynamic text: You are approached by a doctor in a white lab coat, <<$temp_doc>> neatly sown on...
    scene.text(`You are approached by a doctor in a white lab coat, ${((s as any).temp_doc || '')} neatly sown on the chest. "Miss ${((s as any).pcs_lastname || '')}? Please follow me."`);
    // TODO-QSP: dynamic text: You are guided through narrow hallways until you end up in <<$temp_doc>>'s priva...
    scene.text(`You are guided through narrow hallways until you end up in ${((s as any).temp_doc || '')}'s private office, where he gestures you lie on the exam table. "Please expose your stomach and lie face down on the exam table."`);
    scene.actions([
      { label: 'Lie down', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    scene.img('images\\locations\\city\\residential\\clinic\\experiments\\pregshot1.jpg');
    // TODO-QSP: dynamic text: <<$temp_doc>> briefly searches through a drawer and pulls out a syringe filled w...
    scene.text(`${((s as any).temp_doc || '')} briefly searches through a drawer and pulls out a syringe filled with a bubbling red liquid. A sharp sting and an injection into your lower stomach, and you are done.`);
    // TODO-QSP: dynamic text: "Thank you for your participation, Miss <<$pcs_lastname>>. We'll speak again soo...
    scene.text(`"Thank you for your participation, Miss ${((s as any).pcs_lastname || '')}. We'll speak again soon."`);
    // TODO-QSP: gs 'city_experimental_trials_list', 'act_return', trial_pays[5]
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Go back', handler: (st: GameState) => {
    qspCall(st, 'city_experimental_trials_list', 'killvars');
  }, goto: ['city_experimental_trials', 'front_desk'] },
  ]);
  scene.build();
}

function enterActGoBack(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back', goto: ['city_experimental_trials_list', 'see_trials'] },
  ]);
  scene.build();
}

function enterActReturn(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_pay = qspUntranslated(s, "ARGS[1]", { location: "city_experimental_trials_list" });
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to the clinic', handler: (st: GameState) => {
    qspCall(s, 'money', 'earn', ((s as any).temp_pay ?? 0));
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKillvars(s, scene); (s as any).locArgs = __savedLocArgs; }
  }, goto: ['city_clinic', 'start'] },
  ]);
  scene.build();
}

function enterKillvars(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'see_trials':
      enterSeeTrials(s, scene);
      break;
    case 'act_go_back':
      enterActGoBack(s, scene);
      break;
    case 'act_return':
      enterActReturn(s, scene);
      break;
    case 'killvars':
      enterKillvars(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_experimental_trials_list: LocationDef = {
  name: 'city_experimental_trials_list',
  title: 'You look through the long list of various available clinical',
  region: 'city',
  enter: enter,
};
