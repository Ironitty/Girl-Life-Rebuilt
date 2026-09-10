import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterSexafterstrip1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npcStat', 'A172', 1);
  qspCall(s, 'npcStat', 'A173', 2);
  qspCall(s, 'npcStat', 'A174', 3);
  (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
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
  scene.text(`-${((s as any).pcs_nickname ?? 0)}, we demand to continue the activities, " he said, smiling and pointing to his dick.`);
  qspCall(s, 'stat', '');
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
    (s as any).mc_inventory['lubricant'] = ((s as any).mc_inventory['lubricant'] ?? 0) + (1);
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
      (s as any).hunterVars['IgorLove'] = 0;
      (s as any).hunterVars['IgorQW'] = ((s as any).hunterVars['IgorQW'] ?? 0) - (100);
      if (((s as any).hunterVars ?? 0)?.['IgorLove'] === 3) {
        qspCall(s, 'lover_love', 'divorce');
      }
    }
    if (((s as any).hunterVars ?? 0)?.['SergeiLove'] === 1) {
      (s as any).hunterVars['SergeiLove'] = 0;
      (s as any).hunterVars['SergeiQw'] = ((s as any).hunterVars['SergeiQw'] ?? 0) - (100);
    }
    if (((s as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
      (s as any).hunterVars['AndreiLove'] = 0;
      (s as any).hunterVars['AndreiQw'] = ((s as any).hunterVars['AndreiQw'] ?? 0) - (100);
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
  (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
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
  scene.text(`-${((s as any).pcs_nickname ?? 0)}, that was really cool, " he said, smiling. - Want to continue?`);
  scene.text('- Of course you reply, smiling right back.');
  // TODO-QSP: gs 'arousal', 'foreplay', 5, $npcID[2], 'sub'
  qspCall(s, 'stat', '');
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
  (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  // TODO-QSP: npc_had_sex[$boy[1]] = 1
  // TODO-QSP: npc_had_sex[$boy[2]] = 1
  // TODO-QSP: npc_had_sex[$boy[3]] = 1
  (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
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
  scene.text(`- You know what to do ${((s as any).pcs_nickname ?? 0)}, - said Andrei smiling.`);
  // TODO-QSP: gs 'arousal', 'foreplay', 5, $npcID[1], 'sub'
  qspCall(s, 'stat', '');
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
  scene.text(`- You know what to do ${((s as any).pcs_nickname ?? 0)}, - said ${((s as any).boydesc ?? 0)} smiling.`);
  qspCall(s, 'arousal', 'foreplay', 5, 'sub');
  qspCall(s, 'stat', '');
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
    (s as any).hunterVars['Andreisex'] = ((s as any).hunterVars['Andreisex'] ?? 0) + (Math.floor(Math.random() * 19) + 6);
  }
  if (((s as any).doublelovesex ?? 0) === 1) {
    (s as any).hunterVars['Sergeisex'] = ((s as any).hunterVars['Sergeisex'] ?? 0) + (Math.floor(Math.random() * 22) + 9);
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
    scene.actions([
      { label: 'Suck', goto: ['huntersex', 'doubleloveOralCum12_1'] },
      { label: 'Suck', goto: ['huntersex', 'doubleloveOralCum12_2'] },
    ]);
  }
  scene.build();
}

function enterDoubleloveOral12(s: GameState, scene: SceneBuilder): void {
  (s as any).lubonus = ((s as any).lubonus ?? 0) + (1);
  scene.img('images/locations/gadukino/sex/hunter/doubleloveoral12.\' + rand(1, 2) + \'.jpg');
  scene.text('You kneel in front of guys and begin sucking their dicks, taking turns and paying attention to each one…');
  if (((s as any).temphunt ?? 0) <= 2) {
    qspCall(s, 'boyStat', 'A172');
  } else {
    qspCall(s, 'boyStat', 'A173');
    if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 5) {
      qspCall(s, 'boyStat', 'A63');
    } else {
      qspCall(s, 'boyStat', 'A62');
    }
    qspCall(s, 'oral', 'start');
    if (((s as any).temphunt ?? 0) === 1  ||  ((s as any).temphunt ?? 0) === 3) {
      qspCall(s, 'boyStat', 'A174');
    } else {
      qspCall(s, 'boyStat', 'A173');
      if (((s as any).temphunt ?? 0) === 4  ||  ((s as any).temphunt ?? 0) === 6) {
        qspCall(s, 'boyStat', 'A61');
      } else {
        qspCall(s, 'boyStat', 'A62');
      }
      qspCall(s, 'oral', 'start');
      // TODO-QSP: dynamic text: <<$textsexhunter[5]>>
      scene.text(`${qspUntranslated(s, "textsexhunter[5]", { location: "huntersex" })}`);
      qspCall(s, 'arousal', 'bj', 5, 'sub', 'group');
      qspCall(s, 'stat', '');
      qspCall(s, 'huntersex', 'rng_1');
    }
  }
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
    default:
      enterSexafterstrip1(s, scene);
      break;
  }
}

export const huntersex: LocationDef = {
  name: 'huntersex',
  title: 'You tiredly sit down on the edge of the table to rest and ha',
  region: 'other',
  description: ['You tiredly sit down on the edge of the table to rest and have a smoke. During the dance you captivated the guys attention, but when you are approached by Igor, you notice that they are now completely naked.'],
  enter: enter,
};
