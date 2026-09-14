import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $textsexhunter[2] = '<<$boydesc>> staring you in the face until your lips slide on his hard dick. In...
  // TODO-QSP: $textsexhunter[3] = '<<$boydesc>> finished and left with a satisfied smile on her face, and you are ...
  // TODO-QSP: $textsexhunter[4] = 'Enough to enjoy in this position, the guy says…'
  // TODO-QSP: $textsexhunter[5] = 'Guys look you in the face while your lips slide on their hard members. Interrup...
  // TODO-QSP: $textsexhunter[6] = '<<$boydesc>> finished and walked away with a satisfied smile on his face, and y...
  // TODO-QSP: $textsexhunter[7] = 'Enough to enjoy in this position, guys…'
  // TODO-QSP: $textsexhunter[8] = '<<$boydesc>> staring you in the face until your lips slide on his hard dick…'
  // TODO-QSP: $textsexhunter[9] = 'Guys look you in the face while your lips slide on their hard members…'
  // TODO-QSP: $textsexhunter[10] = '<<$boydesc>> finished and walked away with a satisfied smile on her face, and ...
  // TODO-QSP: $textsexhunter[11] = 'Gradually, a pleasant warmth growing and throbbing in the abdomen, then the se...
  // TODO-QSP: $textsexhunter[12] = 'You feel nice when <<dick>> cm dick is moving inside of your ass and you moan ...
  scene.build();
}

function enterSexafterstrip1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A172', 1);
  qspCall(s, 'npcStat', 'A173', 2);
  qspCall(s, 'npcStat', 'A174', 3);
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  // TODO-QSP: npc_had_sex[$boy[1]] = 1
  // TODO-QSP: npc_had_sex[$boy[2]] = 1
  // TODO-QSP: npc_had_sex[$boy[3]] = 1
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'smoke');
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  scene.img('images/locations/gadukino/sex/dance/dance5.jpg');
  scene.text('You tiredly sit down on the edge of the table to rest and have a smoke. During the dance you captivated the guys attention, but when you are approached by Igor, you notice that they are now completely naked.');
  // TODO-QSP: dynamic text: -<<$pcs_nickname>>, we demand to continue the activities, " he said, smiling and...
  scene.text(`-${((s as any).pcs_nickname || '')}, we demand to continue the activities, " he said, smiling and pointing to his dick.`);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Stroke him', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/dancesexoi.jpg');
    scene.text('The alcohol had dulled your sense of shame and you quickly took his cock your in hand and began to stroke it…');
    scene.actions([
      { label: 'Put his cock in your mouth', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/dancesexoi1.jpg');
    scene.text('You slowly wrap your mouth around his member…');
    scene.text('Sensing his chance, Igor suddenly shoves his entire dick down your throat before you can protest. Tears begin to well up in your eyes…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'deepthroat'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck on', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/dancesexoi2.jpg');
    scene.text('Igor continues to batter your mouth, while Andrei and Sergei watch and even help him, pushing your head deeper on his cock…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'deepthroat'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Suck them all', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/dancesexoasi1.\' + rand(1, 3) + \'.jpg');
    scene.text('Andrei and Sergei aren\'t content to just watch you all night and put hands on their dicks as well. You began to suck and stroke the circle of guys around you, alternating attention to each member.');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[3], 'sub', 'gangbang'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie down on your back', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/hantersgrvaosi1.\' + rand(1, 2) + \'.jpg');
    scene.text('The guys put you on the bed and Andrei settles down between your legs, while Igor and Sergei hover over you and put their members in front of your face…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[3], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'gangbang'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie on your side', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/hantersgrv2aosi1.\' + rand(1, 3) + \'.jpg');
    scene.text('Andrei rolls you to the side and without even moving from between your legs, and Igor and Sergei reposition to put their dicks in the face again…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[3], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'gangbang'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get on all fours', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/hantersgrvioas1.\' + rand(1, 4) + \'.jpg');
    scene.text('Igor pushes you down on all fours and then moves behind you. He begins to pound you from behind with increasing frequency. Sergei and Andrei refuse to give you a rest and shove their dicks in your mouth…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[3], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[2], 'sub', 'gangbang'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sit down', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/hantersgrvsoia1.\' + rand(1, 3) + \'.jpg');
    scene.text('Sergei sits on the bed, and pulls you on top of him. Igor and Andrei adjust to this new position accordingly…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[3], 'sub', 'gangbang'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/dancesexoi3.jpg');
    scene.text('You continue to suck Igor, but then you feel someone\'s finger begins to penetrate your ass…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'gangbang'
    qspCall(s, 'arousal', 'anal_finger', (-2), 'sub', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(s, 'mood', 'raise', 'small');
    scene.img('images/locations/gadukino/sex/dance/dancesexoi4.jpg');
    scene.text('Andrei greased your ass with vaseline…');
    scene.text('- Well, even so, not dry, " you thought with relief.');
    if (!(s as any).mc_inventory) (s as any).mc_inventory = {}; (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) + (1);
    qspCall(s, 'arousal', 'anal_finger', 5, 'lube', 'gangbang');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Lie down on the ground', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/hantersgrdpvaaios1.\' + rand(1, 2) + \'.jpg');
    scene.text('Andrei gets on the ground and pulls you down with him. You feel his dick pop into your ass.');
    scene.text('Igor moves in front of you and lines up on your second exposed hole.');
    scene.text('You think, "At least I only have to suck one dick at a time now…"');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[3], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'anal', 5, $npcID[2], 'sub', 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -10, $npcID[1], 'sub', 'gangbang'
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Kneel in front of the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    scene.img('images/locations/gadukino/sex/dance/dancesexoi5.jpg');
    scene.text('Without a word all three guys pull out of you and drag you to your knees.');
    scene.text('They all begin to masturbate in front of your face, and you prepare yourself for the amount of cum that is about to cover you…');
    scene.actions([
      { label: 'Wait patiently', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1, '', '', 20
    // TODO-QSP: gs 'cum_call', 'face', $boy[2], 1, '', '', 20
    // TODO-QSP: gs 'cum_call', 'face', $boy[3], 1, '', '', 20
    // TODO-QSP: gs 'cum_call', 'stomach', $boy[2], 1, '', '', 20
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $boy[1], 1, '', '', 20
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[3], 1, '', '', 20
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/dance/dancesexoi6.jpg');
    scene.text('Finally, the guys started to cum. Jets of sperm struck your face, some got in your mouth and dripped onto your breast and stomach as well…');
    scene.actions([
      { label: 'Pass out', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dancesexson.jpg');
    scene.text('As soon as the guys moved away from you, you passed out on the floor from exhaustion…');
    scene.text('Before you totally lost consciousness you hear the guys talking about you…');
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      scene.text('" - I told you Igor, that she was a whore, and you didn\'t believe me. Well, now you know…" says Andrei.');
    }
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 1  ||  ((s as any).hunterVars ?? 0)?.['IgorLove'] === 2) {
      scene.text('" - and I thought she really was the one." replies Igor. You realize that your relationship with him is now over.');
    }
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 3) {
      scene.text('" - and I thought she really was the one." replies Igor. You realize that your marriage with him is now over.');
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      scene.text('" - I told you Sergei, that she was a whore, and you didn\'t believe me," says Andrei.');
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] > 0) {
      scene.text('" - Yeah, you were right all along." relies Sergei. You realize that your relationship with him is now over.');
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiLove'] > 0) {
      scene.text('" - Yeah, I thought you were different, but in the end you were just a slut like all the other girls" says Andrei. He spits on you before walking away. You realize that your relationship with him is now over.');
    }
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (50);
    qspCall(s, 'mood', 'raise', 'large');
    (s as any).huntdanceslut = 1;
    if (((s as any).hunterVars ?? 0)?.['IgorLove'] > 0) {
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['IgorLove'] = 0;
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (100);
      if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 3) {
        qspCall(s, 'lover_love', 'divorce');
      }
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 1) {
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['SergeiLove'] = 0;
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (100);
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['AndreiLove'] = 0;
      if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (100);
    }
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel1.jpg');
    scene.text('You don\'t know how long you were asleep for, but your head is pounding when you wake up and your whole body hurts.');
    scene.text('You vaguely remember dancing for the guys yesterday but the rest is still blurry.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'sleep_simple', 'forced', 600);
    scene.actions([
      { label: 'Further', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexafterstrip3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A172', 1);
  qspCall(s, 'npcStat', 'A173', 2);
  qspCall(s, 'npcStat', 'A174', 3);
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  // TODO-QSP: npc_had_sex[$boy[1]] = 1
  // TODO-QSP: npc_had_sex[$boy[2]] = 1
  // TODO-QSP: npc_had_sex[$boy[3]] = 1
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'smoke');
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
  scene.img('images/locations/gadukino/sex/dance/dance6.jpg');
  scene.text('You tiredly sit down on the edge of the table to rest and have a smoke. Igor comes over to you naked.');
  // TODO-QSP: dynamic text: -<<$pcs_nickname>>, that was really cool, " he said, smiling. - Want to continue...
  scene.text(`-${((s as any).pcs_nickname || '')}, that was really cool, " he said, smiling. - Want to continue?`);
  scene.text('- Of course you reply, smiling right back.');
  // TODO-QSP: gs 'arousal', 'foreplay', 5, $npcID[2], 'sub'
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/dance/dancesexoi2.\' + rand(0, 4) + \'.jpg');
    scene.text('You wrap your lips around Igor\'s member…');
    qspCall(s, 'boyStat', 'A173');
    qspCall(s, 'oral', 'start');
    scene.text('You try to swallow as Igor\'s dick as deeply as possible and he seems to like it…');
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'sub', 'deepthroat'
    qspCall(s, 'stat', '');
    if (((s as any).pcs_sleep ?? 0) < 10) {
      scene.actions([
        { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
      ]);
    } else {
      scene.actions([
        { label: 'Suck all the guys', goto: ['huntersex', 'huntersgrOasi'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterHuntersexnude(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A172', 1);
  qspCall(s, 'boyStat', 'A173', 2);
  qspCall(s, 'boyStat', 'A174', 3);
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  // TODO-QSP: npc_had_sex[$boy[1]] = 1
  // TODO-QSP: npc_had_sex[$boy[2]] = 1
  // TODO-QSP: npc_had_sex[$boy[3]] = 1
  if (!(s as any).stat) (s as any).stat = {}; (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 9);
  scene.img('images/locations/gadukino/hunters/hantersrelax1.4.jpg');
  scene.text('You approached the guys with a playful smile…');
  // TODO-QSP: dynamic text: - You know what to do <<$pcs_nickname>>, - said Andrei smiling.
  scene.text(`- You know what to do ${((s as any).pcs_nickname || '')}, - said Andrei smiling.`);
  // TODO-QSP: gs 'arousal', 'foreplay', 5, $npcID[1], 'sub'
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Suck', goto: ['huntersex', 'huntersgrOasi'] },
  ]);
  scene.build();
}

function enterSluthomesex(s: GameState, scene: SceneBuilder): void {
  (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 3);
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  qspCall(s, 'outfit', 'strip_all', 'gad_swamphouse');
  if (((s as any).hunterandreisex ?? 0) === 0  &&  ((s as any).temphunt ?? 0) === 1) {
    (s as any).hunterandreisex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).huntersergeisex ?? 0) === 0  &&  ((s as any).temphunt ?? 0) === 2) {
    (s as any).huntersergeisex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).hunterigorsex ?? 0) === 0  &&  ((s as any).temphunt ?? 0) === 3) {
    (s as any).hunterigorsex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 1) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  scene.img('images/locations/gadukino/sex/hunter/sluthomesex1.jpg');
  scene.text('When you reached the couch, he immediately began to undress you.');
  // TODO-QSP: dynamic text: - You know what to do <<$pcs_nickname>>, - said <<$boydesc>> smiling.
  scene.text(`- You know what to do ${((s as any).pcs_nickname || '')}, - said ${((s as any).boydesc || '')} smiling.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Squat', goto: ['huntersex', 'sluthomeSTART'] },
  ]);
  scene.build();
}

function enterDoublelovesex(s: GameState, scene: SceneBuilder): void {
  (s as any).slutgosex = 0;
  (s as any).doublelovesex = 0;
  (s as any).dirty_dickA = 0;
  (s as any).dirty_dickB = 0;
  (s as any).dirty_dickC = 0;
  (s as any).boyAsex = 0;
  (s as any).boyBsex = 0;
  (s as any).boyCsex = 0;
  (s as any).boyAsexa = 0;
  (s as any).boyBsexa = 0;
  (s as any).boyCsexa = 0;
  qspCall(s, 'npcStat', 'A172');
  qspCall(s, 'npcStat', 'A173', 'a');
  qspCall(s, 'npcStat', 'A174', 'b');
  if (((s as any).slutgosex ?? 0) === 2) {
    (s as any).huntslutsex = ((s as any).huntslutsex ?? 0) + (Math.floor(Math.random() * 4) + 6);
  }
  if (((s as any).doublelovesex ?? 0) === 1) {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (Math.floor(Math.random() * 19) + 6);
  }
  if (((s as any).doublelovesex ?? 0) === 1) {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + (Math.floor(Math.random() * 22) + 9);
  }
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  scene.img('images/locations/gadukino/sex/hunter/doublelovesex.jpg');
  if (((s as any).doublelovesex ?? 0) === 1) {
    scene.text('The guys surround you and begin to grab at and kiss your body. You feel pressure on your shoulders so you kneel down before them…');
  } else {
    scene.text('The guys surround you and begin to undress you. You feel pressure on your shoulders so you kneel down before them…');
  }
  qspCall(s, 'arousal', 'foreplay', 5, ((s as any).npcID ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID1 ?? 0), 'sub', 'group');
  qspCall(s, 'arousal', 'foreplay', (-5), ((s as any).npcID2 ?? 0), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).huntsexa ?? 0) < 4) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'doubleloveOral12'] },
    ]);
  } else {
    if (((s as any).huntsexa ?? 0) === 4) {
      scene.actions([
        { label: 'Suck', goto: ['huntersex', 'doubleloveOralCum12_1'] },
      ]);
    } else {
      scene.actions([
        { label: 'Suck', goto: ['huntersex', 'doubleloveOralCum12_2'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOral12(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoral12.\' + rand(1, 2) + \'.jpg');
  scene.text('You kneel in front of guys and begin sucking their dicks, taking turns and paying attention to each one…');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  } else {
    if (((s as any).temphunt ?? 0) === 3) {
      qspCall(s, 'boyStat', 'A173');
    } else {
      if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
        qspCall(s, 'boyStat', 'A63');
      } else {
        qspCall(s, 'boyStat', 'A62');
      }
    }
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  } else {
    if (((s as any).temphunt ?? 0) === 2) {
      qspCall(s, 'boyStat', 'A173');
    } else {
      if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
        qspCall(s, 'boyStat', 'A61');
      } else {
        qspCall(s, 'boyStat', 'A62');
      }
    }
  }
  qspCall(s, 'oral', 'start');
  // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOralCum12_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoralcum12.1.jpg');
  scene.text('You kneel in front of guys and begin sucking their dicks, taking turns and paying attention to each one…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOralCum12_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoralcum12.2.jpg');
  scene.text('You kneel in front of guys and begin sucking their dicks, taking turns and paying attention to each one…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveDog112(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doublelovedog112.\' + rand(1, 3) + \'.jpg');
  scene.text('You bend over in between the boys and suck one cock, while the second penetrates you from behind…');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_4(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveDogCum112_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovedogcum112_1.jpg');
  scene.text('You bend over in between the boys and suck one cock, while the second penetrates you from behind…');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveDogCum112_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovedogcum112_2.jpg');
  scene.text('You bend over in between the boys and suck one cock, while the second penetrates you from behind…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveDog212(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doublelovedog212.\' + rand(1, 3) + \'.jpg');
  scene.text('You bend over in between the boys and suck one cock, while the second penetrates you from behind…');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_4(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveDogCum212_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovedogcum212_1.jpg');
  scene.text('You bend over in between the boys and suck one cock, while the second penetrates you from behind…');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveDogCum212_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovedogcum212_2.jpg');
  scene.text('You bend over in between the boys and suck one cock, while the second penetrates you from behind…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveSide12(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doubleloveside12.\' + rand(1, 2) + \'.jpg');
  scene.text('You lie on your side with a member in front of your face, and the other one penetrating you from behind…');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_1(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveSideCum12_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovesidecum12_1.jpg');
  scene.text('You lie on your side with a member in front of your face, and the other one penetrating you from behind…');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveSideCum12_2(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doublelovesidecum12_2.jpg');
  scene.text('You lie on your side with a member in front of your face, and the other one penetrating you from behind…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCow112(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doublelovecow112.\' + rand(1, 2) + \'.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 8) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_5(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 8) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCowCum1'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCowCum112_1(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doublelovecowcum112_1.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCowCum112_2(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doublelovecowcum112_2.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCow212(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovecow212.\' + rand(1, 2) + \'.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[7]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[7]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 7) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_5(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCowCum212_1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovecowcum212_1.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_2(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCowCum212_2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/doublelovecowcum212_2.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) - (1);
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[6]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[6]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveSide2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyBsexa = ((s as any).boyBsexa ?? 0) + (1);
  }
  scene.img('images/locations/gadukino/sex/hunter/doubleloveside2.\' + rand(1, 2) + \'.jpg');
  scene.text('You lie on your side with a member in front of your face, and the other one penetrating you from behind…');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'doubleloveSideCum2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'doubleloveOral2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveSideCum2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/hunter/doublelovesidecum2.jpg');
  scene.text('You lie on your side with a member in front of your face, and the other one penetrating you from behind…');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  (s as any).lubonus = 0;
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCow1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  scene.img('images/locations/gadukino/sex/hunter/doublelovecow1.\' + rand(1, 2) + \'.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveCowCum1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  scene.img('images/locations/gadukino/sex/hunter/doublelovecowcum1.jpg');
  scene.text('One of the guys lays on the ground and you mount him. The second puts his cock in your mouth…');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  (s as any).lubonus = 0;
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'anal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOral1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
    (s as any).boyAsexa = ((s as any).boyAsexa ?? 0) + (1);
  }
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoral1.\' + rand(1, 2) + \'.jpg');
  scene.text('You kneel in front of the boys, their cocks pointed right at your face…');
  qspCall(s, 'oral', 'start');
  // TODO-QSP: dynamic text: <<$textsexhunter[2]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[2]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'doubleloveOralCum1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOralCum1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  }
  if (((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A63');
  }
  if (((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoralcum1.jpg');
  scene.text('You kneel in front of the boys, their cocks pointed right at your face…');
  qspCall(s, 'oral', 'start');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  (s as any).lubonus = 0;
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOral2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoral2.\' + rand(1, 2) + \'.jpg');
  scene.text('You kneel in front of the boys, their cocks pointed right at your face…');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[2]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[2]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'doubleloveOralCum2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOralCum2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
    qspCall(s, 'boyStat', 'A174');
  }
  if (((s as any).temphunt ?? 0) === 2) {
    qspCall(s, 'boyStat', 'A173');
  }
  if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
    qspCall(s, 'boyStat', 'A61');
  }
  if (((s as any).temphunt ?? 0) === 5) {
    qspCall(s, 'boyStat', 'A62');
  }
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoralcum2.jpg');
  scene.text('You kneel in front of the boys, their cocks pointed right at your face…');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).boyBsexa ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  (s as any).lubonus = 0;
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDoubleloveOralCum12(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  (s as any).lubonus = 0;
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  }
  if ((((s as any).clothingworntype ?? 0) !== 'nude'  &&  ((s as any).PSwim ?? 0) === 0)) {
    qspCall(s, 'cum_call', 'clothes_hidden', ((s as any).boy ?? 0), 1);
  }
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoralcum12.\' + rand(1, 3) + \'.jpg');
  scene.text('You are on your knees in front of the boys with an open mouth.');
  scene.text('Soon, a jet of sperm hits you in the mouth, then another, and another. The sperm fills your mouth and runs down your chin and onto your breasts.');
  scene.text('The guys put their dicks back in their pants and go about their business, leaving you alone to freshen up.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'end');
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] === 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  }
  if (((s as any).hunterVars ?? 0)?.['forest_sex'] > 0) {
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (!(s as any).hunterVars) (s as any).hunterVars = {}; (s as any).hunterVars['forest_sex'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 60;
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeSTART(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  scene.img('images/locations/gadukino/sex/hunter/sluthomestart.jpg');
  scene.text('You crouched down and began to pull down the guy\'s pants. When it was done, the he looks at you and says…');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'sluthomeORAL1'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'sluthomeOralCum1'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Panties', goto: ['huntersex', 'sluthomeTanga'] },
    ]);
  }
  // TODO-QSP: end & !! --- sluthomeSTART ---
  scene.build();
}

function enterSluthomeORAL1(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoral1.\' + rand(1, 3) + \'.jpg');
  scene.text('You slowly put his dick in your mouth and begin to suck on it…');
  qspCall(s, 'oral', 'start');
  // TODO-QSP: dynamic text: <<$textsexhunter[2]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[2]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 5) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_6(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeOralCum1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoralcum1.jpg');
  scene.text('Without warning, the guy begins to cum.');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end & !! --- sluthomeOralCum1 ---
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeORAL2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoral2.\' + rand(1, 3) + \'.jpg');
  scene.text('You continue sucking on his dick…');
  qspCall(s, 'oral', 'start');
  // TODO-QSP: dynamic text: <<$textsexhunter[2]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[2]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 4) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_6(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeOralCum2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoralcum2.jpg');
  scene.text('Without warning, the guy begins to cum.');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'oral', 'start');
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeORAL3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoral3.\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pushes his whole weight against your head, forcing you to swallow m...
  scene.text(`${((s as any).boydesc || '')} pushes his whole weight against your head, forcing you to swallow more of his ${((s as any).dick || '')} cm dick.`);
  if (((s as any).dick ?? 0) > ((s as any).pcs_throat ?? 0)) {
    scene.text('Immediately your gag reflex kicks in you feel tears forming in your eyes.');
  }
  if (((s as any).dick ?? 0) < ((s as any).pcs_throat ?? 0)) {
    scene.text('Fortunately your throat is well trained and you swallow the guy\'s whole dick without any difficulties.');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'sluthomeOralCum3'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Panties', goto: ['huntersex', 'sluthomeTanga'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeOralCum3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoralcum3.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> pushes his whole weight against your head, forcing you to swallow m...
  scene.text(`${((s as any).boydesc || '')} pushes his whole weight against your head, forcing you to swallow more of his ${((s as any).dick || '')} cm dick.`);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  if (((s as any).dick ?? 0) > ((s as any).pcs_throat ?? 0)) {
    scene.text('Immediately your gag reflex kicks in you feel tears forming in your eyes.');
  }
  if (((s as any).dick ?? 0) < ((s as any).pcs_throat ?? 0)) {
    scene.text('Fortunately your throat is well trained and you swallow the guy\'s whole dick without any difficulties.');
  }
  // TODO-QSP: dynamic text: <<$boydesc>> he began to move faster and you realized that he was already ready ...
  scene.text(`${((s as any).boydesc || '')} he began to move faster and you realized that he was already ready to cum…`);
  qspCall(s, 'dinsex', 'dinrandswallow');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeORAL4(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoral4.\' + rand(1, 3) + \'.jpg');
  scene.text('You continue sucking on his dick…');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
    qspCall(s, 'mood', 'lower', 'small');
  }
  // TODO-QSP: dynamic text: <<$textsexhunter[2]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[2]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 13) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_7(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeOralCum4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
  scene.img('images/locations/gadukino/sex/hunter/sluthomeoralcum4.\' + rand(1, 3) + \'.jpg');
  // TODO-QSP: dynamic text: You are on your knees in front of the guy with your mouth open. <<$boydesc>> fie...
  scene.text(`You are on your knees in front of the guy with your mouth open. ${((s as any).boydesc || '')} fiercely rubs his ${((s as any).dick || '')} member in front of your face…`);
  // TODO-QSP: dynamic text: Soon a jet of sperm hits you in the mouth, then a second and a third. The sperm ...
  scene.text(`Soon a jet of sperm hits you in the mouth, then a second and a third. The sperm fills your mouth and runs down your chin, dripping down onto your breasts and stomach. ${((s as any).boydesc || '')} has you clean his dick before putting it back in his pants and going about their business, leaving you alone to freshen up.`);
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeTanga(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthometanga.jpg');
  // TODO-QSP: dynamic text: - <<$pcs_nickname>>, let's take off your panties - said <<$boydesc>>. - Then the...
  scene.text(`- ${((s as any).pcs_nickname || '')}, let's take off your panties - said ${((s as any).boydesc || '')}. - Then the real fun can begin.`);
  scene.text('You quickly sat down on the bed and pulled off your last piece of clothing. He did promise you some fun…');
  qspCall(s, 'underwear', 'remove');
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 13) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_7(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalDog1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeanaldog1.\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> bends you over the couch and begins pound your ass…
  scene.text(`${((s as any).boydesc || '')} bends you over the couch and begins pound your ass…`);
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  (s as any).huntsexa = Math.floor(Math.random() * 12) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_7(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalDogCum1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeAnalDogCum1.jpg');
  scene.text('You feel his pace quicken and you are sure he is about to cum.');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeAnalDog2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeanaldog2.\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: dynamic text: You bend over the couch as position yourself so <<$boydesc>> could go into your ...
  scene.text(`You bend over the couch as position yourself so ${((s as any).boydesc || '')} could go into your ass deeper…`);
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  (s as any).huntsexa = Math.floor(Math.random() * 13) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_7(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalDogCum2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeAnalDogCum2.jpg');
  scene.text('You feel his pace quicken and you are sure he is about to cum.');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeAnalCow1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeanalcow1.\' + rand(1, 3) + \'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> he lies on his back, you climb on top of him…
  scene.text(`${((s as any).boydesc || '')} he lies on his back, you climb on top of him…`);
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  (s as any).huntsexa = Math.floor(Math.random() * 12) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_7(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalCowCum1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  scene.img('images/locations/gadukino/sex/hunter/sluthomeAnalCowCum1.jpg');
  scene.text('You feel his pace quicken and you are sure he is about to cum.');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeAnalCow2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeanalcow2.\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> he lies on his back, you climb on top of him…
  scene.text(`${((s as any).boydesc || '')} he lies on his back, you climb on top of him…`);
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'sluthomeORAL4'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'sluthomeAnalSide1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'sluthomeAnalSideCum1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalCowCum2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  scene.img('images/locations/gadukino/sex/hunter/sluthomeAnalCowCum2.jpg');
  scene.text('You feel his pace quicken and you are sure he is about to cum.');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeAnalSide1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeanalside1.\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> puts you on the side, and begins to penetrate your ass.
  scene.text(`${((s as any).boydesc || '')} puts you on the side, and begins to penetrate your ass.`);
  (s as any).pose = 0;
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 12) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_7(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalSideCum1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeAnalSideCum1.jpg');
  scene.text('You feel his pace quicken and you are sure he is about to cum.');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterSluthomeAnalSide2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeanalside2.\' + rand(1, 2) + \'.jpg');
  // TODO-QSP: dynamic text: <<$boydesc>> puts you on the side, and begins to penetrate your ass.
  scene.text(`${((s as any).boydesc || '')} puts you on the side, and begins to penetrate your ass.`);
  (s as any).pose = 0;
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[4]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[4]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub');
  qspCall(s, 'stat', '');
  (s as any).dirty_dickA = ((s as any).dirty_dickA ?? 0) + (1);
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'sluthomeORAL4'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Kneel', goto: ['huntersex', 'sluthomeOralCum4'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterSluthomeAnalSideCum2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/sluthomeAnalSideCum2.jpg');
  scene.text('You feel his pace quicken and you are sure he is about to cum.');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  // TODO-QSP: dynamic text: <<$textsexhunter[3]>>
  scene.text(`${qspUntranslated(s, "textsexhunter[3]", { location: "huntersex" })}`);
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['gad_swamphouse', 'start'] },
  ]);
  scene.build();
}

function enterHuntersgrOasi(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/dance/dancesexoasi1.\' + rand(1, 3) + \'.jpg');
  scene.text('You began to suck all the guys around you, alternating between each member.');
  (s as any).pose = 0;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (Math.floor(Math.random() * 11) + 10);
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'gangbang');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'deepthroat', 'gangbang');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'deepthroat', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 10) + 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVaOsi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvaosi1.\' + rand(1, 2) + \'.jpg');
  scene.text('The guys put you on the bed, Andrei gets down between your legs, while Igor and Sergei put their members in front of your face…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVOsi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvosi.jpg');
  scene.text('Andrei roughly fucks you for a while before deciding he has better things to do and unceremoniously cumming inside you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_9(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVaO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvao.jpg');
  scene.text('Sergei and Igor enjoy being sucked by you for a while before deciding they have better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Sergei and Igor get up and walk away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_12(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVaOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvaoi.jpg');
  scene.text('Sergei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Sergei gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_10(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVsOai(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvsoai1.\' + rand(1, 3) + \'.jpg');
  scene.text('The guys put you on the bed, Sergei gets down between your legs, while Igor and Andrei put their members in front of your face…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVOai(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvoai.jpg');
  scene.text('Sergei roughly fucks you for a while before deciding he has better things to do and unceremoniously cumming inside you…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  scene.text('Sergei gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_10(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVsOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvsoi.jpg');
  scene.text('Andrei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_9(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVsO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvso.jpg');
  scene.text('Sergei and Igor enjoy being sucked by you for a while before deciding they have better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Sergei and Igor had finished and walked away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr1As'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrViOas(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvioas1.\' + rand(1, 4) + \'.jpg');
  scene.text('You get down on all fours. Igor begins to penetrate you from behind, while Sergei and Andrei put their members in front of your face…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsex ?? 0))) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrViO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvio.jpg');
  scene.text('Sergei and Andrei enjoy being sucked by you for a while before deciding they have better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsex ?? 0))) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Andrei and Sergei get up and walk away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'end');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr1Ai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVsOia(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvsoia1.\' + rand(1, 3) + \'.jpg');
  scene.text('Sergei sat down on the bed, and pulled you on top of him, while Igor and Andrei put their dicks in front of your face…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVsOi1(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvao.jpg');
  scene.text('Andrei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Andrey gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_9(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVaOis(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvaois1.\' + rand(1, 3) + \'.jpg');
  scene.text('Andrei sat down on the bed, and pulled you on top of him, while Igor and Sergei put their dicks in front of your face…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVaOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvaos.jpg');
  scene.text('Igor enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Igor gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_11(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrVO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrvo.jpg');
  scene.text('You begin to cum after the marathon of sex you have engaged in.');
  scene.text('Seeing you cum the guys around you quickly do as well.');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Everyone is exhausted and immediately fell asleep.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgrV2aOsi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrv2aosi1.\' + rand(1, 3) + \'.jpg');
  scene.text('Andrei put you on your side and began to get down between your legs, while Igor and Sergei stood in front of your face with their dicks waiting…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrV2aOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrv2aos.jpg');
  scene.text('Igor enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Igor gets up and walks away.');
  qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'vaginal', (-5), 'sub', 'group', 'rough');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_11(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrDPVaAiOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrdpvaaios1.\' + rand(1, 2) + \'.jpg');
  scene.text('Andrei lays down on the couch and pulls you on top of him, Igor straddles you and lines up to penetrate your second hole, while Sergei expects you to suck his dick too…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172', 'a');
  qspCall(s, 'boyStat', 'A173', 'b');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'deepthroat');
  qspCall(s, 'dinsex2', 'doublepenetration', (-10), 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrDPVaAOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgrdpvaaos.jpg');
  // TODO-QSP: dynamic text: After a while <<$boydesc2>> moaned and you felt like your ass fills with heat. H...
  scene.text(`After a while ${((s as any).boydesc2 || '')} moaned and you felt like your ass fills with heat. He gets up and walks away.`);
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172', 'a');
  qspCall(s, 'boyStat', 'A173', 'b');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'arousal', 'bj', 10, 'gangbang', 'deepthroat');
  qspCall(s, 'dinsex2', 'doublepenetration', 10, 'sub', 'gangbang');
  qspCall(s, 'cum_call', 'anus', ((s as any).boy ?? 0), 1);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_11(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrAiOsa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgraiosa.jpg');
  scene.text('The guys put you on your back, Igor spreads your legs and puts the tip of his dick against your ass, while Andrei and Sergei over you and put their members in front of your face…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  (s as any).huntsexa = Math.floor(Math.random() * 9) + 2;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_8(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrAiO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgraio.jpg');
  scene.text('Andrei and Sergei enjoy being sucked by you for a while before deciding they have better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Andrei and Sergei get up and walk away.');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr1Ai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrO3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgro3.\' + rand(1, 4) + \'.jpg');
  scene.text('The guys drag you to your kness and surround you. They began to masturbate in front of your face, sometimes inserting their member into your mouth, and you get ready for the cum about to cover you…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait patiently', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).pose = 0;
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'stomach', ((s as any).boy ?? 0), 1);
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/dance/hantersgro3cum1.\' + rand(1, 6) + \'.jpg');
    scene.text('Finally all the guys start to cum. Jets of sperm cover your face, hit you in the mouth and drip all over your body too…');
    if (((s as any).hunterVars ?? 0)?.['sexnude'] === 0) {
      scene.actions([
        { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
      ]);
    }
    if (((s as any).hunterVars ?? 0)?.['sexnude'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['gad_swamphouse', 'start'] }]);
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['sexnude'] = 0
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterHuntersgrAOsa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgraosa.jpg');
  scene.text('Igor roughly fucks you for a while before deciding he has better things to do and unceremoniously cumming inside you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (2);
  scene.text('Igor gets up and walks away.');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_11(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2VaOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vaoi.jpg');
  scene.text('The guys put you on your back, Andrei spreads your legs and puts the tip of his dick against your pussy, while Igor puts his member in front of your face…');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_10(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2VOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2voi.jpg');
  scene.text('Andrei roughly fucks you for a while before deciding he has better things to do and unceremoniously cumming inside you…');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr1Ai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2VO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vo.jpg');
  scene.text('The guys climax at the same time and cover you in their cum.');
  scene.text('They get you to clean their dicks off before walking away and leaving you alone.');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'boy_puts_condom');
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'dinsex', 'sexcum');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgr2ViOa(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vioa1.\' + rand(1, 2) + \'.jpg');
  scene.text('The guys put you all fours, Igor spreads your legs and puts the tip of his dick against your pussy, while Andrei puts his member in front of your face…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsex ?? 0))) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_10(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2ViO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vio.jpg');
  scene.text('Andrei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickA ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsex ?? 0))) {
    (s as any).boyCsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr1Ai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2VsO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vso.jpg');
  scene.text('Igor enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsex ?? 0))) {
    (s as any).boyBsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Igor gets up and walks away, but you continue with Sergei.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr1As'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2VaOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vaos.jpg');
  scene.text('Andrei put you on your side and began penetrate you from behind, while Sergei put his dick in your face…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_11(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2VaO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2vao.jpg');
  scene.text('Sergei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'dinsex', 'vaginal_sex', 10);
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Sergei gets up and walks away, but you continue with Andrei.');
  qspCall(s, 'arousal', 'vaginal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_12(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2AiOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2aios.jpg');
  scene.text('The guys put you on your back, with Igor in between your legs, and Sergei with his dick in front of your face…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_9(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2AOs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2aos.jpg');
  scene.text('Igor roughly fucks you for a while before deciding he has better things to do and unceremoniously cumming inside you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  scene.text('Igor had finished and passed out, you are left with Sergei.');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr1As'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2AiO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2aio.jpg');
  scene.text('Sergei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickB ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  (s as any).dirty_dickC = ((s as any).dirty_dickC ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Sergei gets up and walks away, but you continue with Igor.');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr1Ai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2AOi(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2aoi.jpg');
  scene.text('Sergei enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsexa ?? 0))) {
    (s as any).boyBsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  scene.text('Sergei gets up and walks away, but you continue with Andrei and Igor.');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group', 'rough');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr1Ai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2AsO(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2aso.jpg');
  scene.text('Igor enjoys being sucked by you for a while before deciding he has better things to do and unceremoniously cumming all over you…');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start');
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).dirty_dickC ?? 0) > 0) {
    // TODO-QSP: dynamic text: <<$textsexhunter[1]>>
    scene.text(`${qspUntranslated(s, "textsexhunter[1]", { location: "huntersex" })}`);
    qspCall(s, 'mood', 'lower', 'tiny');
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (20);
  }
  qspCall(s, 'boyStat', 'A174');
  if ((!((s as any).boyBsexa ?? 0))) {
    (s as any).boyBsexa = 1;
  }
  (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri\' & gs \'dinsex', 'analsex');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  qspCall(s, 'dinsex', 'dinrandswallow');
  scene.text('Igor gets up and walks away, but you continue with Andrei and Sergei.');
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'group');
  qspCall(s, 'arousal', 'bj', (-5), 'sub', 'group');
  qspCall(s, 'stat', '');
  if (((s as any).pcs_sleep ?? 0) >= 10) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr1As'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2DPVaAs(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2dpvaas1.\' + rand(1, 3) + \'.jpg');
  scene.text('Andrei lay on the couch, and pulled you on top of him, while Sergei immediately began to aim for you second hole…');
  qspCall(s, 'boyStat', 'A172', 'a');
  qspCall(s, 'boyStat', 'A174', 'b');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  if ((!((s as any).boyBsexa ?? 0))) {
    (s as any).boyBsexa = 1;
  }
  (s as any).dirty_dickB = ((s as any).dirty_dickB ?? 0) + (1);
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'dinsex2', 'doublepenetration', 10, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_11(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgr2DPVaA(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr2dpvaa.jpg');
  scene.text('Sergei roughly fucks you for a while before deciding he has better things to do and unceremoniously cumming inside you…');
  qspCall(s, 'boyStat', 'A172', 'a');
  qspCall(s, 'boyStat', 'A174', 'b');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  if ((!((s as any).boyBsexa ?? 0))) {
    (s as any).boyBsexa = 1;
  }
  qspCall(s, 'dinSex', 'boy_wants_anal', ((s as any).boydesc2 ?? 0), 'lubri');
  qspCall(s, 'dinsex2', 'doublepenetration', 10, 'sub', 'gangbang');
  // TODO-QSP: dynamic text: After a while <<$boydesc2>> moaned and you felt like your ass fills with heat. H...
  scene.text(`After a while ${((s as any).boydesc2 || '')} moaned and you felt like your ass fills with heat. He finished and went outside, you stayed with Andrei`);
  qspCall(s, 'cum_call', 'anus', ((s as any).boy2 ?? 0), 1);
  qspCall(s, 'stat', '');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRng_12(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersgrO2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  (s as any).pose = 0;
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  (s as any).body_write = ((s as any).body_write ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/dance/hantersgro2cum1.\' + rand(1, 2) + \'.jpg');
  scene.text('Sergei and Igor put you on your back and begin to cum on you. A jet of sperm hit in your mouth and face and another hit your breasts and stomach. For fun, the guys wrote on your body to commemorate the event…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgr1Va(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 1;
  scene.img('images/locations/gadukino/sex/dance/hantersgr1va.jpg');
  scene.text('Andrei quickened his pace and you feel him cum deep inside of you.');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsex ?? 0))) {
    (s as any).boyAsex = 1;
  }
  qspCall(s, 'arousal', 'vaginal', 5, 'sub');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgr1Ai(s: GameState, scene: SceneBuilder): void {
  (s as any).pose = 0;
  scene.img('images/locations/gadukino/sex/dance/hantersgr1ai.jpg');
  scene.text('Igor quickened his pace and you feel him cum deep inside of you.');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'boyStat', 'A173');
  if ((!((s as any).boyCsexa ?? 0))) {
    (s as any).boyCsexa = 1;
  }
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgr1Aa(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/dance/hantersgr1aa.jpg');
  scene.text('Andrei quickened his pace and you feel him cum deep inside of you.');
  scene.text('Andrei gets up and walks away.');
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).boyAsexa ?? 0))) {
    (s as any).boyAsexa = 1;
  }
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgr1As(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/dance/hantersgr1as.jpg');
  scene.text('Sergei quickened his pace and you feel him cum deep inside of you.');
  scene.text('Sergei gets up and walks away.');
  qspCall(s, 'boyStat', 'A174');
  if (!(s as any).npc_had_sex) (s as any).npc_had_sex = {}; (s as any).npc_had_sex[String((s as any).boy ?? 0)] = 1;
  qspCall(s, 'arousal', 'anal', 5, 'sub', 'rough');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersgrO1(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), 1, '', '', 20);
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1, '', '', 20);
  (s as any).body_write = ((s as any).body_write ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/dance/hantersgro1cum.jpg');
  scene.text('Andrei put you on your back and then shot his cum all over you. Jets of sperm hit in your mouth, and on your face and hair.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', goto: ['huntersex', 'huntersGrEnd'] },
  ]);
  scene.build();
}

function enterHuntersGrEnd(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  scene.img('images/locations/gadukino/hunters/dancesexson.jpg');
  scene.text('As soon as the guys moved away from you, you instantly passed out from exhaustion…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wake up', handler: (st: GameState) => {
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (50);
    qspCall(s, 'mood', 'raise', 'large');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel1.jpg');
    scene.text('You don\'t know how long you slept for, but you have a terrible headache and you vaguely remembered what happened yesterday.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'sleep_simple', 'forced', 600);
    scene.actions([
      { label: 'Further', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRng_1(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 6) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Kneel', goto: ['huntersex', 'doubleloveOralCum12'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDog112'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDog212'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'doubleloveSide12'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCow112'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 6) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCow212'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_2(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'doubleloveSide2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'doubleloveOral2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_3(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCow1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'doubleloveOral1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_4(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 7) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Kneel', goto: ['huntersex', 'doubleloveOralCum12'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDogCum112_1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDogCum112_2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 4) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDog212'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'doubleloveSide12'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 6) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCow112'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 7) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCow212'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_5(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Kneel', goto: ['huntersex', 'doubleloveOralCum12'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDog112'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'doubleloveDog212'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'doubleloveSide12'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCowCum112_1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 6) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCowCum112_2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 7) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'doubleloveCow212'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_6(s: GameState, scene: SceneBuilder): void {
  if (((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'sluthomeORAL2'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'sluthomeOralCum2'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'sluthomeORAL3'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 4) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'sluthomeOralCum3'] },
    ]);
  }
  if (((s as any).huntsexa ?? 0) === 5) {
    scene.actions([
      { label: 'Panties', goto: ['huntersex', 'sluthomeTanga'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_7(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'sluthomeOralCum4'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'sluthomeAnalDog1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'sluthomeAnalDogCum1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 4) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'sluthomeAnalDog2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5) {
    scene.actions([
      { label: 'Doggy', goto: ['huntersex', 'sluthomeAnalDogCum2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 6) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'sluthomeAnalCow1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 7) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'sluthomeAnalCowCum1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 8) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'sluthomeAnalCow2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 9) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'sluthomeAnalCowCum2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 10) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'sluthomeAnalSide1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 11) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'sluthomeAnalSideCum1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 12) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'sluthomeAnalSide2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 13) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'sluthomeAnalSideCum2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_8(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexb = Math.floor(Math.random() * 8) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Suck on', goto: ['huntersex', 'huntersgrOasi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVaOsi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) < 4) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVOsi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVaO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVaOi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVsOai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVsO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) < 4) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVOai'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) === 4) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrVsOi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 4  &&  ((s as any).huntsexb ?? 0) <= 5) {
    scene.actions([
      { label: 'Get on all fours', goto: ['huntersex', 'huntersgrViOas'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 4  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Get on all fours', goto: ['huntersex', 'huntersgrViO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5  &&  ((s as any).huntsexb ?? 0) === 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrVsOia'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrVsOi1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 5  &&  ((s as any).huntsexb ?? 0) < 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrVaOis'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 6  &&  ((s as any).huntsexb ?? 0) <= 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrVO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 6  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrVaOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 7  &&  ((s as any).huntsexb ?? 0) <= 5) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'huntersgrV2aOsi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 7  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'huntersgrV2aOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 8  &&  ((s as any).huntsexb ?? 0) <= 4) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrDPVaAiOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 8  &&  ((s as any).huntsexb ?? 0) > 4) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgrDPVaAOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 9  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrAiOsa'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 9  &&  ((s as any).huntsexb ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrAiO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 9  &&  ((s as any).huntsexb ?? 0) < 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrAOsa'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 10) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrO3'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_9(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexb = Math.floor(Math.random() * 8) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr2VsO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr2AiOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr2AiO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) < 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr2AOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) <= 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr2AOi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr2AsO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_10(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  (s as any).huntsexb = Math.floor(Math.random() * 8) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr2VaOi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1  &&  ((s as any).huntsexb ?? 0) === 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr2VO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1  &&  ((s as any).huntsexb ?? 0) < 5) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgr2VOi'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) <= 4) {
    scene.actions([
      { label: 'Get on all fours', goto: ['huntersex', 'huntersgr2ViOa'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) > 4) {
    scene.actions([
      { label: 'Get on all fours', goto: ['huntersex', 'huntersgr2ViO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrO2'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_11(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 2) + 1;
  (s as any).huntsexb = Math.floor(Math.random() * 8) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1  &&  ((s as any).huntsexb ?? 0) > 4) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'huntersgr2VaOs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1  &&  ((s as any).huntsexb ?? 0) <= 4) {
    scene.actions([
      { label: 'Lie on your side', goto: ['huntersex', 'huntersgr2VaO'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) > 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr2DPVaAs'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2  &&  ((s as any).huntsexb ?? 0) <= 5) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr2DPVaA'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterRng_12(s: GameState, scene: SceneBuilder): void {
  (s as any).huntsexa = Math.floor(Math.random() * 3) + 1;
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr1Va'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 2) {
    scene.actions([
      { label: 'Lie on your back', goto: ['huntersex', 'huntersgrO1'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) >= 10  &&  ((s as any).huntsexa ?? 0) === 3) {
    scene.actions([
      { label: 'Sit down', goto: ['huntersex', 'huntersgr1Aa'] },
    ]);
  }
  if (((s as any).pcs_sleep ?? 0) < 10) {
    scene.actions([
      { label: 'Pass out', goto: ['hunters', 'huntersgroupfaint'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'sexafterstrip1':
      enterSexafterstrip1(s, scene);
      break;
    case 'sexafterstrip3':
      enterSexafterstrip3(s, scene);
      break;
    case 'huntersexnude':
      enterHuntersexnude(s, scene);
      break;
    case 'sluthomesex':
      enterSluthomesex(s, scene);
      break;
    case 'doublelovesex':
      enterDoublelovesex(s, scene);
      break;
    case 'doubleloveOral12':
      enterDoubleloveOral12(s, scene);
      break;
    case 'doubleloveOralCum12_1':
      enterDoubleloveOralCum12_1(s, scene);
      break;
    case 'doubleloveOralCum12_2':
      enterDoubleloveOralCum12_2(s, scene);
      break;
    case 'doubleloveDog112':
      enterDoubleloveDog112(s, scene);
      break;
    case 'doubleloveDogCum112_1':
      enterDoubleloveDogCum112_1(s, scene);
      break;
    case 'doubleloveDogCum112_2':
      enterDoubleloveDogCum112_2(s, scene);
      break;
    case 'doubleloveDog212':
      enterDoubleloveDog212(s, scene);
      break;
    case 'doubleloveDogCum212_1':
      enterDoubleloveDogCum212_1(s, scene);
      break;
    case 'doubleloveDogCum212_2':
      enterDoubleloveDogCum212_2(s, scene);
      break;
    case 'doubleloveSide12':
      enterDoubleloveSide12(s, scene);
      break;
    case 'doubleloveSideCum12_1':
      enterDoubleloveSideCum12_1(s, scene);
      break;
    case 'doubleloveSideCum12_2':
      enterDoubleloveSideCum12_2(s, scene);
      break;
    case 'doubleloveCow112':
      enterDoubleloveCow112(s, scene);
      break;
    case 'doubleloveCowCum112_1':
      enterDoubleloveCowCum112_1(s, scene);
      break;
    case 'doubleloveCowCum112_2':
      enterDoubleloveCowCum112_2(s, scene);
      break;
    case 'doubleloveCow212':
      enterDoubleloveCow212(s, scene);
      break;
    case 'doubleloveCowCum212_1':
      enterDoubleloveCowCum212_1(s, scene);
      break;
    case 'doubleloveCowCum212_2':
      enterDoubleloveCowCum212_2(s, scene);
      break;
    case 'doubleloveSide2':
      enterDoubleloveSide2(s, scene);
      break;
    case 'doubleloveSideCum2':
      enterDoubleloveSideCum2(s, scene);
      break;
    case 'doubleloveCow1':
      enterDoubleloveCow1(s, scene);
      break;
    case 'doubleloveCowCum1':
      enterDoubleloveCowCum1(s, scene);
      break;
    case 'doubleloveOral1':
      enterDoubleloveOral1(s, scene);
      break;
    case 'doubleloveOralCum1':
      enterDoubleloveOralCum1(s, scene);
      break;
    case 'doubleloveOral2':
      enterDoubleloveOral2(s, scene);
      break;
    case 'doubleloveOralCum2':
      enterDoubleloveOralCum2(s, scene);
      break;
    case 'doubleloveOralCum12':
      enterDoubleloveOralCum12(s, scene);
      break;
    case 'sluthomeSTART':
      enterSluthomeSTART(s, scene);
      break;
    case 'sluthomeORAL1':
      enterSluthomeORAL1(s, scene);
      break;
    case 'sluthomeOralCum1':
      enterSluthomeOralCum1(s, scene);
      break;
    case 'sluthomeORAL2':
      enterSluthomeORAL2(s, scene);
      break;
    case 'sluthomeOralCum2':
      enterSluthomeOralCum2(s, scene);
      break;
    case 'sluthomeORAL3':
      enterSluthomeORAL3(s, scene);
      break;
    case 'sluthomeOralCum3':
      enterSluthomeOralCum3(s, scene);
      break;
    case 'sluthomeORAL4':
      enterSluthomeORAL4(s, scene);
      break;
    case 'sluthomeOralCum4':
      enterSluthomeOralCum4(s, scene);
      break;
    case 'sluthomeTanga':
      enterSluthomeTanga(s, scene);
      break;
    case 'sluthomeAnalDog1':
      enterSluthomeAnalDog1(s, scene);
      break;
    case 'sluthomeAnalDogCum1':
      enterSluthomeAnalDogCum1(s, scene);
      break;
    case 'sluthomeAnalDog2':
      enterSluthomeAnalDog2(s, scene);
      break;
    case 'sluthomeAnalDogCum2':
      enterSluthomeAnalDogCum2(s, scene);
      break;
    case 'sluthomeAnalCow1':
      enterSluthomeAnalCow1(s, scene);
      break;
    case 'sluthomeAnalCowCum1':
      enterSluthomeAnalCowCum1(s, scene);
      break;
    case 'sluthomeAnalCow2':
      enterSluthomeAnalCow2(s, scene);
      break;
    case 'sluthomeAnalCowCum2':
      enterSluthomeAnalCowCum2(s, scene);
      break;
    case 'sluthomeAnalSide1':
      enterSluthomeAnalSide1(s, scene);
      break;
    case 'sluthomeAnalSideCum1':
      enterSluthomeAnalSideCum1(s, scene);
      break;
    case 'sluthomeAnalSide2':
      enterSluthomeAnalSide2(s, scene);
      break;
    case 'sluthomeAnalSideCum2':
      enterSluthomeAnalSideCum2(s, scene);
      break;
    case 'huntersgrOasi':
      enterHuntersgrOasi(s, scene);
      break;
    case 'huntersgrVaOsi':
      enterHuntersgrVaOsi(s, scene);
      break;
    case 'huntersgrVOsi':
      enterHuntersgrVOsi(s, scene);
      break;
    case 'huntersgrVaO':
      enterHuntersgrVaO(s, scene);
      break;
    case 'huntersgrVaOi':
      enterHuntersgrVaOi(s, scene);
      break;
    case 'huntersgrVsOai':
      enterHuntersgrVsOai(s, scene);
      break;
    case 'huntersgrVOai':
      enterHuntersgrVOai(s, scene);
      break;
    case 'huntersgrVsOi':
      enterHuntersgrVsOi(s, scene);
      break;
    case 'huntersgrVsO':
      enterHuntersgrVsO(s, scene);
      break;
    case 'huntersgrViOas':
      enterHuntersgrViOas(s, scene);
      break;
    case 'huntersgrViO':
      enterHuntersgrViO(s, scene);
      break;
    case 'huntersgrVsOia':
      enterHuntersgrVsOia(s, scene);
      break;
    case 'huntersgrVsOi1':
      enterHuntersgrVsOi1(s, scene);
      break;
    case 'huntersgrVaOis':
      enterHuntersgrVaOis(s, scene);
      break;
    case 'huntersgrVaOs':
      enterHuntersgrVaOs(s, scene);
      break;
    case 'huntersgrVO':
      enterHuntersgrVO(s, scene);
      break;
    case 'huntersgrV2aOsi':
      enterHuntersgrV2aOsi(s, scene);
      break;
    case 'huntersgrV2aOs':
      enterHuntersgrV2aOs(s, scene);
      break;
    case 'huntersgrDPVaAiOs':
      enterHuntersgrDPVaAiOs(s, scene);
      break;
    case 'huntersgrDPVaAOs':
      enterHuntersgrDPVaAOs(s, scene);
      break;
    case 'huntersgrAiOsa':
      enterHuntersgrAiOsa(s, scene);
      break;
    case 'huntersgrAiO':
      enterHuntersgrAiO(s, scene);
      break;
    case 'huntersgrO3':
      enterHuntersgrO3(s, scene);
      break;
    case 'huntersgrAOsa':
      enterHuntersgrAOsa(s, scene);
      break;
    case 'huntersgr2VaOi':
      enterHuntersgr2VaOi(s, scene);
      break;
    case 'huntersgr2VOi':
      enterHuntersgr2VOi(s, scene);
      break;
    case 'huntersgr2VO':
      enterHuntersgr2VO(s, scene);
      break;
    case 'huntersgr2ViOa':
      enterHuntersgr2ViOa(s, scene);
      break;
    case 'huntersgr2ViO':
      enterHuntersgr2ViO(s, scene);
      break;
    case 'huntersgr2VsO':
      enterHuntersgr2VsO(s, scene);
      break;
    case 'huntersgr2VaOs':
      enterHuntersgr2VaOs(s, scene);
      break;
    case 'huntersgr2VaO':
      enterHuntersgr2VaO(s, scene);
      break;
    case 'huntersgr2AiOs':
      enterHuntersgr2AiOs(s, scene);
      break;
    case 'huntersgr2AOs':
      enterHuntersgr2AOs(s, scene);
      break;
    case 'huntersgr2AiO':
      enterHuntersgr2AiO(s, scene);
      break;
    case 'huntersgr2AOi':
      enterHuntersgr2AOi(s, scene);
      break;
    case 'huntersgr2AsO':
      enterHuntersgr2AsO(s, scene);
      break;
    case 'huntersgr2DPVaAs':
      enterHuntersgr2DPVaAs(s, scene);
      break;
    case 'huntersgr2DPVaA':
      enterHuntersgr2DPVaA(s, scene);
      break;
    case 'huntersgrO2':
      enterHuntersgrO2(s, scene);
      break;
    case 'huntersgr1Va':
      enterHuntersgr1Va(s, scene);
      break;
    case 'huntersgr1Ai':
      enterHuntersgr1Ai(s, scene);
      break;
    case 'huntersgr1Aa':
      enterHuntersgr1Aa(s, scene);
      break;
    case 'huntersgr1As':
      enterHuntersgr1As(s, scene);
      break;
    case 'huntersgrO1':
      enterHuntersgrO1(s, scene);
      break;
    case 'huntersGrEnd':
      enterHuntersGrEnd(s, scene);
      break;
    case 'rng_1':
      enterRng_1(s, scene);
      break;
    case 'rng_2':
      enterRng_2(s, scene);
      break;
    case 'rng_3':
      enterRng_3(s, scene);
      break;
    case 'rng_4':
      enterRng_4(s, scene);
      break;
    case 'rng_5':
      enterRng_5(s, scene);
      break;
    case 'rng_6':
      enterRng_6(s, scene);
      break;
    case 'rng_7':
      enterRng_7(s, scene);
      break;
    case 'rng_8':
      enterRng_8(s, scene);
      break;
    case 'rng_9':
      enterRng_9(s, scene);
      break;
    case 'rng_10':
      enterRng_10(s, scene);
      break;
    case 'rng_11':
      enterRng_11(s, scene);
      break;
    case 'rng_12':
      enterRng_12(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const huntersex: LocationDef = {
  name: 'huntersex',
  title: 'You tiredly sit down on the edge of the table to rest and ha',
  region: 'other',
  enter: enter,
};
