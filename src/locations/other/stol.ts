import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><h1>Desk</h1></center>');
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    scene.img('images/shared/home/bedroom/stol.jpg');
  } else {
    scene.img('images/shared/home/bedroom/stol1.jpg');
  }
  scene.text('You sit down at your desk.');
  if (((s as any).mc_inventory ?? 0)?.['mentats'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'drugs', 'mentats' & gt 'stol', 'start'"><b>Take neurobooster p...
    scene.text(`<a href="exec:gs 'drugs', 'mentats' & gt 'stol', 'start'"><b>Take neurobooster pill.</b></a> Uses left: ${((s as any).mc_inventory ?? 0)?.['mentats']}. A warning on the box says not to take more than one per day.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['steroids'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'drugs', 'steroids' & gt 'stol', 'start'"><b>Take steroids.</b>...
    scene.text(`<a href="exec:gs 'drugs', 'steroids' & gt 'stol', 'start'"><b>Take steroids.</b></a> Uses left: ${((s as any).mc_inventory ?? 0)?.['steroids']}.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['aphrodisiac'] > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'drugs', 'aphrodisiac' & gt 'stol', 'start'"><b>Chew aphrodisia...
    scene.text(`<a href="exec:gs 'drugs', 'aphrodisiac' & gt 'stol', 'start'"><b>Chew aphrodisiac gum.</b></a> Uses left: ${((s as any).mc_inventory ?? 0)?.['aphrodisiac']}.`);
  }
  if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1) {
    if (((s as any).mc_inventory ?? 0)?.['dildo_small'] + ((s as any).mc_inventory ?? 0)?.['dildo_normal'] + ((s as any).mc_inventory ?? 0)?.['dildo_big'] + ((s as any).mc_inventory ?? 0)?.['dildo_large'] + ((s as any).mc_inventory ?? 0)?.['dildo_huge'] + ((s as any).mc_inventory ?? 0)?.['dildo_enormous'] + ((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] > 0) {
      scene.actions([
        { label: 'Check out your strapon harness', handler: (st: GameState) => {
    // TODO-QSP: $stol_loc_temp = 'start'
  }, goto: ['stol', 'strapon'] },
      ]);
    } else {
      scene.actions([
        { label: 'Check out your strapon harness', handler: (st: GameState) => {
    // TODO-QSP: '<br>You don''t have any dildos to attach to your strapon ha...
  } },
      ]);
    }
  }
  if (((s as any).mc_inventory ?? 0)?.['cigarettes'] > 0) {
    scene.actions([
      { label: 'Hide some cigarettes in your drawer', handler: (st: GameState) => {
    (s as any).cigIN = qspUntranslated(s, "input('How many cigarettes do you want to hide in your drawer? (Your purse contains <<mc_inventory['cigarettes']>> cigarettes.)')", { location: "stol" });
    if (((s as any).cigIN ?? 0) <= 0  ||  ((s as any).cigIN ?? 0) > ((s as any).mc_inventory ?? 0)?.['cigarettes']) {
      scene.text('You can\'t put this amount into the drawer.');
    } else {
      (s as any).stolcigarettes['' + String((s as any).$loc ?? '') + ''] = ((s as any).stolcigarettes['' + String((s as any).$loc ?? '') + ''] ?? 0) + (((s as any).cigIN ?? 0));
      (s as any).mc_inventory['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) - (((s as any).cigIN ?? 0));
    }
  }, goto: ['stol', 'start'] },
    ]);
  }
  if (((s as any).stolcigarettes ?? 0)?.[String(((s as any).loc ?? 0))] > 0) {
    scene.actions([
      { label: 'Take some cigarettes from your drawer', handler: (st: GameState) => {
    (s as any).cigOUT = qspUntranslated(s, "input (\"How many cigarettes do you want to put in your purse? (There are <<stolcigarettes['<<loc>>']>> cigarettes here.)\")", { location: "stol" });
    if (((s as any).cigOUT ?? 0) <= 0  ||  ((s as any).cigOUT ?? 0) > ((s as any).stolcigarettes ?? 0)?.[String(((s as any).loc ?? 0))]) {
      scene.text('You can\'t take this amount from your drawer.');
    } else {
      (s as any).stolcigarettes['' + String((s as any).$loc ?? '') + ''] = ((s as any).stolcigarettes['' + String((s as any).$loc ?? '') + ''] ?? 0) - (((s as any).cigOUT ?? 0));
      (s as any).mc_inventory['cigarettes'] = ((s as any).mc_inventory['cigarettes'] ?? 0) + (((s as any).cigOUT ?? 0));
    }
  }, goto: ['stol', 'start'] },
    ]);
  }
  if (((s as any).money ?? 0) > 0) {
    if (((s as any).money ?? 0) > ((s as any).bankShortCutMoney ?? 0)  &&  ((s as any).bankShortCutMoney ?? 0) > 0) {
      scene.actions([
        { label: 'Put all of your money except for <<$func(\'money\', \'format\', bankShortCutMoney)>> in the desk drawer', handler: (st: GameState) => {
    qspCall(s, 'money', 'desk_transfer', 0, 'all_to_desk');
    qspCall(s, 'money', 'desk_transfer', ((s as any).bankShortCutMoney ?? 0), 'from_desk');
  }, goto: ['stol', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Put some money in the desk drawer', handler: (st: GameState) => {
    (s as any).stolIN = qspUntranslated(s, "input (\"How much money you want to put in the drawer? (Your purse contains <<func('money', 'format_balance', 'cash')>>.)\")", { location: "stol" });
    if (((s as any).stolIN ?? 0) <= 0  ||  ((s as any).stolIN ?? 0) > ((s as any).money ?? 0)) {
      scene.text('You can\'t put this amount into the drawer.');
    } else {
      qspCall(s, 'money', 'desk_transfer', ((s as any).stolIN ?? 0), 'to_desk');
    }
  }, goto: ['stol', 'start'] },
      { label: 'Put all of your money in the desk drawer', handler: (st: GameState) => {
    qspCall(s, 'money', 'desk_transfer', 0, 'all_to_desk');
  }, goto: ['stol', 'start'] },
    ]);
  }
  if (((s as any).stolmoney ?? 0) > 0) {
    if (((s as any).stolmoney ?? 0) >= ((s as any).bankShortCutMoney ?? 0)  &&  ((s as any).bankShortCutMoney ?? 0) > 0) {
      scene.actions([
        { label: 'Take <<$func(\'money\', \'format\', bankShortCutMoney)>> from the desk drawer', handler: (st: GameState) => {
    qspCall(s, 'money', 'desk_transfer', ((s as any).bankShortCutMoney ?? 0), 'from_desk');
  }, goto: ['stol', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Take some money from the desk drawer', handler: (st: GameState) => {
    (s as any).stolOUT = qspUntranslated(s, "input (\"How much money do you want to put in your purse? (There is <<func('money', 'format_balance', 'desk')>> here.)\")", { location: "stol" });
    if (((s as any).stolOUT ?? 0) <= 0  ||  ((s as any).stolOUT ?? 0) > ((s as any).stolmoney ?? 0)) {
      scene.text('You can\'t take this amount from the drawer.');
    } else {
      qspCall(s, 'money', 'desk_transfer', ((s as any).stolOUT ?? 0), 'from_desk');
      if (((s as any).stolmoney ?? 0) > 0  ||  ((s as any).stolmoney_overflow ?? 0) > 0) {
        // TODO-QSP: dynamic text: You have <<$func('money', 'format_balance', 'desk')>> hidden in the drawer.
        scene.text(`You have ${qspFunc(s, 'money', 'format_balance', 'desk')} hidden in the drawer.`);
      }
    }
  }, goto: ['stol', 'start'] },
      { label: 'Take all of the money from the desk drawer', handler: (st: GameState) => {
    qspCall(s, 'money', 'desk_transfer', 0, 'all_from_desk');
  }, goto: ['stol', 'start'] },
    ]);
  }
  if (((s as any).university ?? 0)?.['enrolled_in_semester'] > ((s as any).university ?? 0)?.['semester_passed']) {
    if (((s as any).university ?? 0)?.['semester_week'] > 0) {
      (s as any).i = 0;
      // TODO-QSP: :study_loop
      if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_\'2\'_semester_\'3\'') {
        if (((s as any).class ?? 0)?.[String(((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)]) + '_' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) + '_optional_weekly_grade_gain'] < ((s as any).class ?? 0)?.[String(((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)]) + '_' + String(((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) + '_optional_weekly_max']) {
          // TODO-QSP: dynamic ' act ''Study for your <<$class_list_name[i]>> class'': gt ''stol'', ''studying'', ''<<$clas...
        } else {
          // TODO-QSP: dynamic text: You don't need to study more this week for your <<$class_list_name[i]>> class.
          scene.text(`You don't need to study more this week for your ${((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]} class.`);
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < ((s as any).arrsize ?? 0)('class_list_institution')) {
        // TODO-QSP: jump 'study_loop'
      }
    } else {
      (s as any).i = 0;
      // TODO-QSP: :exam_loop
      if (((s as any).class_list_institution ?? 0)?.[String((s as any).i ?? 0)] === 'uni_\'2\'_semester_\'3\'') {
        if (qspFunc(s, 'uni_programs', 'exam', 'is_over', ((s as any).class_list_name ?? 0)?.[String((s as any).i ?? 0)]) === 0) {
          // TODO-QSP: dynamic ' act ''Study intensely for your <<$class_list_name[i]>> exam'': gt ''stol'', ''studying_exa...
        }
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < ((s as any).arrsize ?? 0)('class_list_institution')) {
        // TODO-QSP: jump 'exam_loop'
      }
    }
  }
  if (((s as any).lernHome ?? 0) > 0) {
    // TODO-QSP: '<br>You have homework to do. Finishing everything will take <<lernHome>> '+iif(lernHome = 1, 'hour....
    qspCall(s, 'willpower', 'chore', 'self', (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).trait_vars ?? 0)?.['academic'] === 0) ? ('hard') : ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')));
    if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
      (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
    } else {
      (s as any).will_cost = 0;
    }
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Do some homework [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Do some homework (1:00)', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'chore', 'self', (((s as any).grupTipe ?? 0) === 4) ? ('hard') : ((((s as any).trait_vars ?? 0)?.['academic'] > 0) ? ('easy') : ('medium')));
    if (((s as any).trait_vars ?? 0)?.['academic'] === 2) {
      (s as any).will_cost = ((s as any).will_cost ?? 0) / 2;
    } else {
      (s as any).will_cost = 0;
    }
    if (((s as any).will_cost ?? 0) > 0) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    scene.img('images/locations/shared/apartment/homework.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    // TODO-QSP: gs 'mood', 'raise', 5 * trait_vars['academic']
    (s as any).lern = ((s as any).lern ?? 0) + (1);
    qspCall(s, 'stat', '');
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
      qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 0, 0);
      // TODO-QSP: dynamic text: You spend an hour '+iif(lernHome = 0, 'completing', 'doing part of')+' your home...
      scene.text('You spend an hour \'+iif(lernHome = 0, \'completing\', \'doing part of\')+\' your homework.');
    } else {
      qspCall(s, 'grades', 'homework', 'school', 'no', 1, 0, 0);
      // TODO-QSP: dynamic text: You spend an hour '+iif(lernHome = 0, 'completing', 'doing part of')+' your home...
      scene.text('You spend an hour \'+iif(lernHome = 0, \'completing\', \'doing part of\')+\' your homework, but the part for computer class is not as good as it could be since you don\'t have a computer. You could do your homework at the library at the community center in the future since there\'s a computer available to use there.');
    }
    scene.actions([
      { label: 'Continue', goto: ['stol', 'start'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).lernHome ?? 0) > 1) {
    (s as any).will_cost = ((s as any).will_cost ?? 0) * ((s as any).lernHome ?? 0);
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Finish all of your homework [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Finish all of your homework (<<lernHome>>:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (60 * ((s as any).lernHome ?? 0));
    // TODO-QSP: gs 'mood', 'raise', 5 * trait_vars['academic'] *lernHome
    (s as any).lern = ((s as any).lern ?? 0) + (1 + ((s as any).lernHome ?? 0)/2);
    if (((s as any).trait_vars ?? 0)?.['academic'] < 3) {
      qspCall(s, 'willpower', 'pay', 'self', 'chore');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/homework.jpg');
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
      // TODO-QSP: dynamic text: It took you <<lernHome>> hours to complete your homework.
      scene.text(`It took you ${((s as any).lernHome ?? 0)} hours to complete your homework.`);
      qspCall(s, 'grades', 'homework', 'school', 'yes', ((s as any).lernHome ?? 0), 0, 0);
    } else {
      // TODO-QSP: dynamic text: It took you <<lernHome>> hours to complete your homework., but the part for comp...
      scene.text(`It took you ${((s as any).lernHome ?? 0)} hours to complete your homework., but the part for computer class is not as good as it could be since you don't have a computer. You could do your homework at the library at the community center in the future since there's a computer available to use there.`);
      qspCall(s, 'grades', 'homework', 'school', 'no', ((s as any).lernHome ?? 0), 0, 0);
    }
    scene.actions([
      { label: 'Continue', goto: ['stol', 'start'] },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Get up', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Check your birth control', goto: ['stol', 'bc'] },
    { label: 'Modify shortcut amount', handler: (st: GameState) => {
    (s as any).temp_ShortCutMoney = ((s as any).input ?? 0)('((s as any).How ?? 0) ((s as any).much ?? 0) ((s as any).money ?? 0) ((s as any).would ?? 0) ((s as any).you ?? 0) ((s as any).like ?? 0) ((s as any).to ?? 0) ((s as any).use ?? 0) ((s as any).in ?? 0) ((s as any).the ?? 0) ((s as any).shortcuts ?? 0)? [-1 ((s as any).to ?? 0) ((s as any).disable ?? 0)]');
    if (((s as any).temp_ShortCutMoney ?? 0) < 0) {
      (s as any).temp_ShortCutMoney = (-1);
    }
    if (((s as any).temp_ShortCutMoney ?? 0) !== 0) {
      (s as any).bankShortCutMoney = ((s as any).temp_ShortCutMoney ?? 0);
      qspCall(s, 'stol', 'start');
    }
  } },
  ]);
  scene.build();
}

function enterStrapon(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Desk</h1></center>');
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    scene.img('images/shared/home/bedroom/stol.jpg');
  } else {
    scene.img('images/shared/home/bedroom/stol1.jpg');
  }
  if (((s as any).strapNumber ?? 0) === 0) {
    scene.text('Your strapon harness doesn\'t have a dildo attached to it.');
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_small'] === 1) {
    // TODO-QSP: iif(strapNumber = 1, 'Your 10cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 10cm long dildo.')
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_normal'] === 1) {
    // TODO-QSP: iif(strapNumber = 2, 'Your 15cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 15cm long dildo.')
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_big'] === 1) {
    // TODO-QSP: iif(strapNumber = 3, 'Your 20cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 20cm long dildo.')
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_large'] === 1) {
    // TODO-QSP: iif(strapNumber = 4, 'Your 25cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 25cm long dildo.')
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_huge'] === 1) {
    // TODO-QSP: iif(strapNumber = 5, 'Your 30cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 30cm long dildo.')
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_enormous'] === 1) {
    // TODO-QSP: iif(strapNumber = 6, 'Your 35cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 35cm long dildo.')
  }
  if (((s as any).mc_inventory ?? 0)?.['dildo_gigantic'] === 1) {
    // TODO-QSP: iif(strapNumber = 7, 'Your 40cm dildo is attached to your strapon harness.', '<a href="exec:strapNum...
    // TODO-QSP: gt ''stol'', ''strapon''">Attach</a> your 40cm long dildo.')
  }
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    // TODO-QSP: gt 'stol', $stol_loc_temp
  } },
  ]);
  scene.build();
}

function enterBc(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Desk</h1></center>');
  if (((s as any).mc_inventory ?? 0)?.['desk'] === 0) {
    scene.img('images/shared/home/bedroom/stol.jpg');
  } else {
    scene.img('images/shared/home/bedroom/stol1.jpg');
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'din_bad', '');
  scene.text('You have stored your birth control in the drawer of your desk.');
  if (((s as any).args ?? 0)[0] === 'studying') {
    scene.img('images/locations/shared/apartment/homework.jpg');
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (((s as any).mc_inventory ?? 0)?.['tech_computer'] === 1) {
      qspCall(s, 'grades', 'optional_activity_attribute', '<<$ARGS[1]>>', '<<$ARGS[2]>>', 'yes', ((s as any).pcs_intel ?? 0));
    } else {
      qspCall(s, 'grades', 'optional_activity_attribute', '<<$ARGS[1]>>', '<<$ARGS[2]>>', 'no', ((s as any).pcs_intel ?? 0));
    }
    qspCall(s, 'stat', '');
    if (((s as any).dyneval ?? 0) ('RESULT === \'0\'') < ((s as any).dyneval ?? 0) ('RESULT === \'1\'')) {
      scene.text('You study for half an hour, but you can tell you\'ll need to study more if you want to completely understand this week\'s material.');
    } else {
      scene.text('You study for half an hour and think you understand everything that was covered this week.');
    }
    scene.actions([
      { label: 'Get up from your desk', goto: ['stol', '<<$ARGS[3]>>'] },
    ]);
  }
  scene.actions([
    { label: 'Close the drawer', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    { label: 'Check your condoms', handler: (st: GameState) => {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] + ((s as any).mc_inventory ?? 0)?.['normal_condoms'] + ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
      if (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom') {
        scene.img('images/pc/items/accessories/birthcontrol/condoms.jpg');
      }
      if (((s as any).preziktype ?? 0) === 2  ||  ((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'] > 0) {
        // TODO-QSP: dynamic text: You have <<iif(preziktype = 2, mc_inventory['normal_condoms'], mc_inventory['nor...
        scene.text(`You have ${(((s as any).preziktype ?? 0) === 2) ? (((s as any).mc_inventory ?? 0)?.['normal_condoms']) : (((s as any).mc_inventory ?? 0)?.['normal_condoms']+((s as any).mc_inventory ?? 0)?.['equipped_condoms'])} normal, and ${(((s as any).preziktype ?? 0) === 2) ? (((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['sabotaged_condoms']) : (((s as any).mc_inventory ?? 0)?.['sabotaged_condoms'])} sabotaged <a href="exec:gs 'din_bad', 'din_Table_Condom_Menu'"><b>condoms.</b></a>`);
      } else {
        // TODO-QSP: dynamic text: You have <<mc_inventory['equipped_condoms']+mc_inventory['normal_condoms']>> <a ...
        scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['equipped_condoms']+((s as any).mc_inventory ?? 0)?.['normal_condoms']} <a href="exec:gs 'din_bad', 'din_Table_Condom_Menu'"><b>condoms.</b></a>`);
      }
    } else {
      if (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom') {
        scene.img('images/shared/home/bedroom/drawer_empty.jpg');
      }
      scene.text('You are out of condoms.');
    }
  } },
    { label: 'Check your birth control pills', handler: (st: GameState) => {
    if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  ||  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
      if (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom') {
        scene.img('images/pc/items/accessories/birthcontrol/bc_pills.jpg');
      }
      if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] > 0) {
        // TODO-QSP: dynamic text: You have <<mc_inventory['contraceptive_pill']>> unopened packages of <a href="ex...
        scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['contraceptive_pill']} unopened packages of <a href="exec:gs 'din_bad', 'd_tabletkiedt'">birth control pills</a> and ${((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)]} pills left in your opened package.</b>`);
      } else {
        // TODO-QSP: dynamic text: You have <<pillsleft[ptype]>> <a href="exec:gs 'din_bad', 'd_tabletkiedt'">birth...
        scene.text(`You have ${((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)]} <a href="exec:gs 'din_bad', 'd_tabletkiedt'">birth control pills</a> left.</b>`);
        if (((s as any).mc_inventory ?? 0)?.['contraceptive_pill'] > 0  &&  ((s as any).pillsleft ?? 0)?.[String((s as any).ptype ?? 0)] === 0) {
          // TODO-QSP: dynamic text: You have <<mc_inventory['contraceptive_pill']>> unopened packages of <a href="ex...
          scene.text(`You have ${((s as any).mc_inventory ?? 0)?.['contraceptive_pill']} unopened packages of <a href="exec:gs 'din_bad', 'd_tabletkiedt'">birth control pills</a>.`);
        }
        if (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom') {
          scene.img('images/shared/home/bedroom/drawer_empty.jpg');
        }
        scene.text('You are out of <a href="exec:gs \'din_bad\', \'d_tabletkiedt\'">birth control pills</a>.');
      }
    }
    scene.actions([
      { label: 'Check your morning after pills', handler: (st: GameState) => {
    if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
      if (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom') {
        scene.img('images/pc/items/accessories/birthcontrol/morning_after_pill.jpg');
      }
      if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 1) {
        scene.text('You have a <a href="exec:gs\'medical_din\',\'morning_after_pill\'">morning after pill</a> hidden in the back corner of the drawer.');
      } else {
        // TODO-QSP: dynamic text: You have <b><<mc_inventory['morning_after_pill']>></b> <a href="exec:gs'medical_...
        scene.text(`You have <b>${((s as any).mc_inventory ?? 0)?.['morning_after_pill']}</b> <a href="exec:gs'medical_din','morning_after_pill'">morning after pills</a> stacked in the back corner of the drawer.`);
      }
    } else {
      if (((s as any).locclass ?? 0) === 'bedr'  ||  ((s as any).locclass ?? 0) === 'bedroom') {
        scene.img('images/shared/home/bedroom/drawer_empty.jpg');
      }
      scene.text('You have no morning after pills.');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'strapon':
      enterStrapon(s, scene);
      break;
    case 'bc':
      enterBc(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const stol: LocationDef = {
  name: 'stol',
  title: '<center><h1>Desk</h1></center>',
  region: 'other',
  locclass: 'bedr',
  description: ['You sit down at your desk.'],
  enter: enter,
};
