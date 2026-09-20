import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterFuckornot(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  if (((s as any).fuckornot ?? 0) === 2) {
    (s as any).fuckornot = 3;
  }
  scene.img('images/pc/items/accessories/computer/fuckornot/fuckable_list.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckornotList(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('10: Perfection - Would let her do whatever she wants to me.');
  scene.text('9: Smoking Hot - Would eat her ass.');
  scene.text('8: Hot - Would fuck that ass.');
  scene.text('7: Damn girl - Bragging rights for fucking.');
  scene.text('6: Smashable - Totally fuckable. Fuck buddy material');
  scene.text('5: Merely fuckable - Wouldn\'t mind smashing it. Blowjob buddy material.');
  scene.text('4: Almost fuckable - Doable in the dark or to get a blowjob from.');
  scene.text('3: Unattractive - Doable if I get myself drunk first. Good match for Petia.');
  scene.text('2: Fugly - Has potential compared to a trash bin. Even Lesco could do better.');
  scene.text('1: Hideous - Wouldn\'t touch it with a stick.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the site', handler: (st: GameState) => {
    if (((st as any).view_location ?? 0) === 'school') {
      qspGoto(st, 'gschool_lessons', 'short_break');
    } else {
      if (((st as any).view_location ?? 0) === 'school_lesson') {
        qspGoto(st, 'gschool_lessons2', 'computer');
      } else {
        qspGoto(st, 'komp', 'browse');
      }
    }
  } },
  ]);
  scene.build();
}

function enterHotornot(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  if (((s as any).hotornot ?? 0) === 2) {
    (s as any).hotornot = 3;
  }
  scene.img('images/pc/items/accessories/computer/hotornot/hotornot.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHotornotList(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('10: Perfection - Would let him do whatever he wants to me.');
  scene.text('9: Smoking Hot - Arm candy.');
  scene.text('8: Hot - Would ride him.');
  scene.text('7: Damn son - Bragging rights for fucking.');
  scene.text('6: Rideable - Totally fuckable. Fuck buddy material');
  scene.text('5: Merely fuckable. - Doggy style so I don\'t have to look at him.');
  scene.text('4: Almost fuckable - Might sit on his face.');
  scene.text('3: Unattractive - Not even Zinaida would be seen with him.');
  scene.text('2: Fugly - Horribly ugly. Just being seen with him would lose you social standing.');
  scene.text('1: Hideous - Wouldn\'t touch it with a stick. Not even a whore would take his money.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the site', handler: (st: GameState) => {
    if (((st as any).view_location ?? 0) === 'school') {
      qspGoto(st, 'gschool_lessons', 'short_break');
    } else {
      if (((st as any).view_location ?? 0) === 'school_lesson') {
        qspGoto(st, 'gschool_lessons2', 'computer');
      } else {
        qspGoto(st, 'komp', 'browse');
      }
    }
  } },
  ]);
  scene.build();
}

function enterFuckornotList(s: GameState, scene: SceneBuilder): void {
  (s as any).fu_count = 0;
  (s as any).fu_text = '<center><table cellspacing="3">';
  (s as any).j = 10;
  // TODO-QSP: :fu_loop_2
  (s as any).i = 1;
  // TODO-QSP: :fu_loop
  if (((s as any).pcs_hotcat ?? 0) === ((s as any).j ?? 0)  &&  (!((s as any).hotcat_rating_set ?? 0))) {
    (s as any).hotcat_rating_set = 1;
    // TODO-QSP: $fu_text += '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="<<func('...
    // TODO-QSP: $fu_text += '<<$pcs_nickname>>, <<pcs_hotcat>>/10' + '</td>'
    (s as any).fu_count = ((s as any).fu_count ?? 0) + (1);
    if (((s as any).fu_count ?? 0) === 6) {
      // TODO-QSP: $fu_text += '</tr><tr>'
      (s as any).fu_count = 0;
    }
  } else {
    if (((s as any).npc_gender ?? 0)['A' + ((s as any).i ?? 0)] === 1  &&  ((s as any).npc_hotcat ?? 0)['A' + ((s as any).i ?? 0)] === ((s as any).j ?? 0)  &&  (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] > 0  &&  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] < 6)) {
      // TODO-QSP: $fu_text += '' + '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="ima...
      (s as any).fu_count = ((s as any).fu_count ?? 0) + (1);
      if (((s as any).fu_count ?? 0) === 6) {
        // TODO-QSP: $fu_text += '</tr><tr>'
        (s as any).fu_count = 0;
      }
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'fu_loop'
  }
  (s as any).j = ((s as any).j ?? 0) - (1);
  if (((s as any).j ?? 0) > 0) {
    // TODO-QSP: jump 'fu_loop_2'
  }
  // TODO-QSP: end
  scene.build();
}

function enterHotornotList(s: GameState, scene: SceneBuilder): void {
  (s as any).ho_count = 0;
  (s as any).ho_text = '<center><table cellspacing="3">';
  (s as any).j = 10;
  // TODO-QSP: :ho_loop_2
  (s as any).i = 1;
  // TODO-QSP: :ho_loop
  if (((s as any).npc_gender ?? 0)['A' + ((s as any).i ?? 0)] === 0  &&  ((s as any).npc_hotcat ?? 0)['A' + ((s as any).i ?? 0)] === ((s as any).j ?? 0)  &&  (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] > 0  &&  ((s as any).npc_grupTipe ?? 0)['A' + ((s as any).i ?? 0)] < 6)) {
    // TODO-QSP: $ho_text += '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="images/c...
    (s as any).ho_count = ((s as any).ho_count ?? 0) + (1);
    if (((s as any).ho_count ?? 0) === 6) {
      // TODO-QSP: $ho_text += '</tr><tr>'
      (s as any).ho_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'ho_loop'
  }
  (s as any).j = ((s as any).j ?? 0) - (1);
  if (((s as any).j ?? 0) > 0) {
    // TODO-QSP: jump 'ho_loop_2'
  }
  // TODO-QSP: end
  scene.build();
}

function enterFuckornotUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  scene.img('images/pc/items/accessories/computer/fuckornot/fuckable_list.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterFuckornotUniList(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('10: Perfection - Could die happy after tapping that.');
  scene.text('9: Angelic - Would hit that anywhere anytime.');
  scene.text('8: Smoking Hot - Bragging rights for fucking.');
  scene.text('7: Hot - Hot enough for a steady fuck.');
  scene.text('6: Doggy bitch - Would totally hit that from behind. Fuck buddy material');
  scene.text('5: Barely fuckable - Would let her suck my dick. Blowjob buddy material.');
  scene.text('4: Almost fuckable - Would fuck if she wore a bag over her head.');
  scene.text('3: Unattractive - Maybe if I was really horny and really drunk.');
  scene.text('2: Fugly - I would passout before I got drunk enough to hit that.');
  scene.text('1: Hideous - Are you sure it is even a girl?');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the site', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterHotornotUni(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'internet_mobile', 'use_internet', ((s as any).subs ?? 0), 5);
  scene.img('images/pc/items/accessories/computer/hotornot/hotornot.jpg');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterHotornotUniList(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('10: Perfection - His wish is my command.');
  scene.text('9: Dreamy - Would let him do whatever he wants to me.');
  scene.text('8: Smoking Hot - So hot, would happily have a one night stand.');
  scene.text('7: Hot - Would ride him hard and long.');
  scene.text('6: Rideable - Totally fuckable. Fuck buddy material');
  scene.text('5: Merely fuckable. - Doggy style so I don\'t have to look at him.');
  scene.text('4: Almost fuckable - Might sit on his face.');
  scene.text('3: Unattractive - Almost certainly still a virgin, what girl would want to ride that?');
  scene.text('2: Fugly - Horribly ugly. Wouldn\'t even be seen with him in public.');
  scene.text('1: Hideous - Wouldn\'t touch it with a stick. Not even a whore would take his money.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the site', goto: ['komp', 'browse'] },
  ]);
  scene.build();
}

function enterFuckornotUniList(s: GameState, scene: SceneBuilder): void {
  (s as any).fu_count = 0;
  (s as any).fu_text = '<center><table cellspacing="3">';
  (s as any).j = 10;
  // TODO-QSP: :fu_loop_2_uni
  (s as any).i = 1;
  // TODO-QSP: :fu_loop_uni
  if (((s as any).pcs_hotcat ?? 0) === ((s as any).j ?? 0)  &&  (!((s as any).hotcat_rating_set ?? 0))) {
    (s as any).fu_count = ((s as any).fu_count ?? 0) + (1);
    (s as any).hotcat_rating_set = 1;
    // TODO-QSP: $fu_text += '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="<<$func(...
    // TODO-QSP: $fu_text += '<<$pcs_nickname>>, <<pcs_hotcat>>/10' + '</td>'
    if (((s as any).fu_count ?? 0) === 6) {
      // TODO-QSP: $fu_text += '</tr><tr>'
      (s as any).fu_count = 0;
    }
  }
  if (((s as any).npc_gender ?? 0)['A' + ((s as any).i ?? 0)] === 1  &&  ((s as any).npc_hotcat ?? 0)['A' + ((s as any).i ?? 0)] === ((s as any).j ?? 0)  &&  ((s as any).npc_uni_active ?? 0)['A' + ((s as any).i ?? 0)] === 1  &&  ((s as any).npc_uni_eduType ?? 0)['A' + ((s as any).i ?? 0)] !== 'professor') {
    (s as any).fu_count = ((s as any).fu_count ?? 0) + (1);
    // TODO-QSP: $fu_text += '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="images/c...
    if (((s as any).fu_count ?? 0) === 6) {
      // TODO-QSP: $fu_text += '</tr><tr>'
      (s as any).fu_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'fu_loop_uni'
  }
  (s as any).j = ((s as any).j ?? 0) - (1);
  if (((s as any).j ?? 0) > 0) {
    // TODO-QSP: jump 'fu_loop_2_uni'
  }
  // TODO-QSP: end
  scene.build();
}

function enterHotornotUniList(s: GameState, scene: SceneBuilder): void {
  (s as any).ho_count = 0;
  (s as any).ho_text = '<center><table cellspacing="3">';
  (s as any).j = 10;
  // TODO-QSP: :ho_loop_2_uni
  (s as any).i = 1;
  // TODO-QSP: :ho_loop_uni
  if (((s as any).npc_gender ?? 0)['A' + ((s as any).i ?? 0)] === 0  &&  ((s as any).npc_hotcat ?? 0)['A' + ((s as any).i ?? 0)] === ((s as any).j ?? 0)  &&  ((s as any).npc_uni_active ?? 0)['A' + ((s as any).i ?? 0)] === 1  &&  ((s as any).npc_uni_eduType ?? 0)['A' + ((s as any).i ?? 0)] !== 'professor') {
    (s as any).ho_count = ((s as any).ho_count ?? 0) + (1);
    // TODO-QSP: $ho_text += '<td bgcolor=<<$theme[''table_bg_alt'']>> align="center"><img height="100" src="images/c...
    if (((s as any).ho_count ?? 0) === 6) {
      // TODO-QSP: $ho_text += '</tr><tr>'
      (s as any).ho_count = 0;
    }
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'ho_loop_uni'
  }
  (s as any).j = ((s as any).j ?? 0) - (1);
  if (((s as any).j ?? 0) > 0) {
    // TODO-QSP: jump 'ho_loop_2_uni'
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'fuckornot':
      enterFuckornot(s, scene);
      break;
    case 'hotornot':
      enterHotornot(s, scene);
      break;
    case 'fuckornot_list':
      enterFuckornotList(s, scene);
      break;
    case 'hotornot_list':
      enterHotornotList(s, scene);
      break;
    case 'fuckornot_uni':
      enterFuckornotUni(s, scene);
      break;
    case 'hotornot_uni':
      enterHotornotUni(s, scene);
      break;
    case 'fuckornot_uni_list':
      enterFuckornotUniList(s, scene);
      break;
    case 'hotornot_uni_list':
      enterHotornotUniList(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const komp_HF_or_not: LocationDef = {
  name: 'komp_HF_or_not',
  title: '10: Perfection - Would let her do whatever she wants to me.',
  region: 'other',
  enter: enter,
};
