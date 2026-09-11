import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterAnalStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
    qspCall(s, 'sex_ev_sex', 'speed_select');
    scene.actions([
      { label: 'Anal (doggy)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_present_ass'
  } },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] !== 'girl'  &&  ((s as any).sex_ev ?? 0)?.['force_initiative'] !== 1) {
      qspCall(s, 'sex_ev_sex', 'speed_select');
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_goto'
    } else {
      qspCall(s, 'sex_ev_sex', 'speed_select');
      scene.actions([
        { label: 'Anal (doggy)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_present_ass'
  } },
      ]);
    }
  }
  scene.build();
}

function enterAnalInsertActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0) {
    scene.actions([
      { label: 'Bend over (anal)', goto: ['sex_ev_anal', 'anal_doggy_insert_slow'] },
    ]);
  } else {
    scene.actions([
      { label: 'Insertion', goto: ['sex_ev_anal', 'anal_doggy_insert_slow'] },
    ]);
  }
  scene.build();
}

function enterAnalDoggySwitch(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['change_pos'] = 0;
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You push <<$npcdesc>> off of you, closing your legs and rolling onto your knees.
      scene.text(`You push ${((s as any).npcdesc ?? 0)} off of you, closing your legs and rolling onto your knees.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>'s cock slip from your pussy and give him ...
        scene.text(`You lean forward, letting ${((s as any).npcdesc ?? 0)}'s cock slip from your pussy and give him a sultry look over your shoulder.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You lift your hips, letting <<$npcdesc>>'s cock slip from your ass. Then, you tu...
          scene.text(`You lift your hips, letting ${((s as any).npcdesc ?? 0)}'s cock slip from your ass. Then, you turn around, getting on hands and knees, presenting your ass towards him.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      // TODO-QSP: dynamic text: With a mischievous grin, you put yourself on all fours and present your ass towa...
      scene.text(`With a mischievous grin, you put yourself on all fours and present your ass towards ${((s as any).npcdesc ?? 0)}.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> rolls you onto your knees, pulling your hips back towards him.
      scene.text(`${((s as any).npcdesc ?? 0)} rolls you onto your knees, pulling your hips back towards him.`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
    if (((s as any).stat ?? 0)?.['anal'] === 0) {
      scene.text('"I want to try anal."');
    } else {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"That''s enough of that. Time for you to shove it up my ass.', 'Th...
    }
    scene.actions([
      { label: 'Get fucked in the ass', goto: ['sex_ev_anal', 'anal_doggy_insert_slow'] },
    ]);
  } else {
    if (((s as any).sex_ev ?? 0)?.['anal_allowed'] < 1  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs. "I want to fuck your ass."`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs. "I want to fuck your ass."`);
      }
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_ask'
    } else {
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_no_ask'
    }
  }
  scene.build();
}

function enterAnalPresentAss(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
    scene.text('You turn around and get on your knees, presenting your ass towards him and giving him a sultry look over your shoulder.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
      scene.text('You get back on your knees, waggling your ass enticingly at him.');
    }
  }
  if (((s as any).stat ?? 0)?.['anal'] === 0) {
    scene.text('"I want to try anal."');
  } else {
    if (((s as any).sex_ev ?? 0)?.['anal_count'] > 0) {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"That''s enough of that. Time for you to shove it in my ass again....
    } else {
      // TODO-QSP: iif(stat['no_sex_swearing'] = 0, '"That''s enough of that. Time for you to shove it in my ass again....
    }
  }
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0  ||  ((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0) {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } else {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_goto2'
  }
  scene.build();
}

function enterAnalAsk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['anal_ask'] = 1;
  if ((!((s as any).pcs_ass ?? 0))) {
    scene.actions([
      { label: 'Tell him you\'re an anal virgin', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['anal_virgin'] = 1;
    scene.text('"Nobody\'s ever fucked my ass before," you tell him.');
    scene.actions([
      { label: 'I\'m just not sure if I\'m ready', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m just not sure if I\'m ready," you mumble shyly.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Well... we don\'t have to if you\'re not ready. We can do something else."');
      qspCall(s, 'sex_ev_anal', 'want_to');
      qspCall(s, 'sex_ev_anal', 'bj_instead');
      qspCall(s, 'sex_ev_anal', 'fuck_instead');
      scene.actions([
        { label: 'If that\'s really okay', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_anal'] = 1;
    scene.text('"If that\'s really okay," you smile gratefully.');
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Yeah of course. It\'s your body, your choice. I know not every girl is into anal. Maybe we could just... fuck again?"');
      qspCall(s, 'sex_ev_sex', 'position_choose');
    } else {
      scene.text('"Yeah of course. It\'s your body, your choice. I know not every girl is into anal. Maybe you could... give me a blowjob?"');
      scene.actions([
        { label: 'Sounds fair', handler: (st: GameState) => {
    scene.text('"Yeah," you smile. "That sounds fair."');
    scene.text('You wiggle down the bed and lean down to get between his legs.');
    scene.actions([
      { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      scene.text('"Uhh... well..."');
      // TODO-QSP: dynamic text: <<$npcdesc>> looks down at himself, almost as if contemplating what to do with h...
      scene.text(`${((s as any).npcdesc ?? 0)} looks down at himself, almost as if contemplating what to do with his solidly erect dick.`);
      scene.text('"Soooo... you <i>don\'t</i> want to do anal...?');
      qspCall(s, 'sex_ev_anal', 'want_to');
      qspCall(s, 'sex_ev_anal', 'bj_instead');
      qspCall(s, 'sex_ev_anal', 'fuck_instead');
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
    scene.actions([
      { label: 'I told you no', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['new_pos'] = 1;
    ((s as any).sex_ev ?? {})['not_anal'] = 1;
    scene.text('"I told you no already," you growl.');
    scene.text('He sighs in disappointment.');
    qspCall(s, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  scene.actions([
    { label: 'Deny him', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_anal'] = 1;
    ((s as any).sex_ev ?? {})['new_pos'] = 1;
    ((s as any).sex_ev ?? {})['not_anal'] = 1;
    if (((s as any).npc_anal_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Sorry <<$npc_usedname[$npcID]>>," you shake your head. "Not today."
      scene.text(`"Sorry ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," you shake your head. "Not today."`);
    } else {
      // TODO-QSP: dynamic text: "Sorry <<$npc_usedname[$npcID]>>," you shake your head. "I'm not ready."
      scene.text(`"Sorry ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}," you shake your head. "I'm not ready."`);
    }
    scene.text('He sighs in disappointment.');
    qspCall(s, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Allow it', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    scene.text('"Okay," you say, turning around and presenting your rear hole to him.');
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_insert_acts'
  } },
  ]);
  scene.build();
}

function enterAnalWait1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_anal_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "Oh, uhh..." <<$npc_usedname[$npcID]>> stops awkwardly. "I, uhm, thought maybe w...
    scene.text(`"Oh, uhh..." ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} stops awkwardly. "I, uhm, thought maybe we could... y'know, since we did it before...?"`);
  } else {
    // TODO-QSP: dynamic text: "Oh, uhh..." <<$npc_usedname[$npcID]>> stops awkwardly. "I, uhm, thought maybe w...
    scene.text(`"Oh, uhh..." ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} stops awkwardly. "I, uhm, thought maybe we could try it...? Uhm, anal?"`);
  }
  scene.actions([
    { label: 'Ask first (polite)', handler: (st: GameState) => {
    scene.text('"You need to ask first," you chide softly. "You can\'t just stick it in my ass without permission"');
    scene.text('"Oh. Sorry. Uhm. So... can I... put it in your ass?"');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Nope!" you smile. "Gotta ask next time."');
    scene.text('"Aww..."');
    ((s as any).sex_ev ?? {})['new_pos'] = 1;
    ((s as any).sex_ev ?? {})['not_anal'] = 1;
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      qspCall(s, 'sex_ev_sex', 'position_choose');
    } else {
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    }
  } },
      { label: 'Acquiesce', handler: (st: GameState) => {
    scene.text('"Yes you may," you smile. "See? That wasn\'t so hard was it?"');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> gleefully prepares to put his cock in your ass.
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} gleefully prepares to put his cock in your ass.`);
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Ask first (annoyed)', handler: (st: GameState) => {
    scene.text('"You need to ask first," you scowl. "You can\'t just stick it in my ass like that!"');
    scene.text('"Oh. Sorry. Uhm. So... can I... put it in your ass?"');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"<i>No.</i> Not after what you just tried."');
    scene.text('"Aww..."');
    ((s as any).sex_ev ?? {})['new_pos'] = 1;
    ((s as any).sex_ev ?? {})['not_anal'] = 1;
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      qspCall(s, 'sex_ev_sex', 'position_choose');
    } else {
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
    }
  } },
      { label: '<i>Yes</i> (eager)', handler: (st: GameState) => {
    scene.text('"<i>Yes,</i>" you grin. "See? Permission is <i>hot.</i>"');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> gleefully prepares to put his cock in your ass.
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} gleefully prepares to put his cock in your ass.`);
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
      { label: 'Acquiesce', handler: (st: GameState) => {
    scene.text('"... <i>fine</i>."');
    // TODO-QSP: dynamic text: You give a sigh of resignation as <<$npc_usedname[$npcID]>> gleefully prepares t...
    scene.text(`You give a sigh of resignation as ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} gleefully prepares to put his cock in your ass.`);
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNoAssToPussy1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['anal_count'] > 0) {
    scene.actions([
      { label: 'Stop him - No ass to pussy!', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    // TODO-QSP: dynamic text: "Woah!" you snap your legs closed and move away from <<$npc_usedname[$npcID]>> a...
    scene.text(`"Woah!" you snap your legs closed and move away from ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} as he tries to enter you. "What do you think you're doing?"`);
    scene.text('He looks confused.');
    scene.text('"You can\'t stick it in my pussy after having it in my ass," you explain. "I\'m going to get infections!"');
    scene.actions([
      { label: 'Anal only', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['no_vag'] = 1;
    scene.text('"Once you\'ve gone anal, you can\'t go back to pussy. We\'re only doing anal until we\'re done."');
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal') {
      scene.text('"Won\'t hear any complaints from me," he grins.');
    } else {
      scene.text('"Oh, okay."');
    }
    qspCall(s, 'sex_ev_anal', 'anal_goto');
  } },
      { label: 'Clean his cock first', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['anal_dirt'] = 0;
    scene.text('"At least clean yourself off first," you say, gesturing to the wipes by the bed.');
    scene.text('"Oh, okay," he nods and wipes his cock off.');
    qspCall(s, 'sex_ev_sex', 'rand_position');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterNoVaginal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
    scene.actions([
      { label: 'Stop him (anal only)', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['no_vag'] === 0) {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        scene.text('"Wait! You can\'t!"');
      }
    } else {
      ((s as any).sex_ev ?? {})['change_pos'] = 1;
      scene.text('"Hey!" you shout. "I told you, no pussy sex."');
      scene.text('"Right, sorry, sorry. I forgot."');
      qspCall(s, 'sex_ev_anal', 'anal_start');
    }
  } },
    ]);
  }
  scene.build();
}

function enterAnalNoAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/doggy1.jpg');
  // TODO-QSP: dynamic text: You get down on all fours, spreading your knees apart. A second later, you feel ...
  scene.text(`You get down on all fours, spreading your knees apart. A second later, you feel the head of his ${((s as any).dick_desc ?? 0)} cock pressed up against your rear hole.`);
  if (((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'big'  ||  ((s as any).npc_dick_class ?? 0)?.[String((s as any).npcID ?? 0)] === 'extra_big') {
    if (((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).stat ?? 0)?.['biggest_cock_anal']) {
      scene.actions([
        { label: '"Is that gonna fit inside me?"', handler: (st: GameState) => {
    scene.text('You can\'t help but gulp anxiously, feeling the size of him resting between your cheeks.');
    scene.text('"Is that going to fit inside me?" you ask, nervously staring at his member with wide eyes.');
    scene.text('"Don\'t worry," he grins. "It\'s gone into plenty of other girls before."');
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.actions([
          { label: '"I love big cocks"', handler: (st: GameState) => {
    scene.text('You grin, feeling the size of him resting between your cheeks.');
    scene.text('"I love a guy with a big cock," you grin and he grins back.');
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: '"I love big cocks"', handler: (st: GameState) => {
    scene.text('You grin, feeling the size of him resting between your cheeks.');
    scene.text('"Have I ever told you how much I love the size of your cock?" you grin.');
    scene.text('"You could stand to mention it more," he grins back as he starts to push in.');
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
        ]);
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['no_vag'] < 1  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((s as any).sex_ev ?? 0)?.['anal_allowed'] < 1) {
    scene.actions([
      { label: 'Wrong hole?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Uhh, <<$npc_usedname[$npcID]>>?" You straighten up. "That's not the right hole....
    scene.text(`"Uhh, ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}?" You straighten up. "That's not the right hole."`);
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      if (((s as any).stat ?? 0)?.['anal'] === 0) {
        ((s as any).sex_ev ?? {})['surprise_anal'] = 1;
      }
      scene.text('"Says who?" he snickers and pushes in.');
      scene.actions([
        { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
      ]);
    } else {
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_wait1'
    }
  } },
      { label: 'Wait, that\'s my ass!', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    // TODO-QSP: dynamic text: "Wait! <<$npc_usedname[$npcID]>>!" You straighten up, eyes wide in panic. "That'...
    scene.text(`"Wait! ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}!" You straighten up, eyes wide in panic. "That's my ass!"`);
    if (((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'anal'  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
      if (((s as any).stat ?? 0)?.['anal'] === 0) {
        ((s as any).sex_ev ?? {})['surprise_anal'] = 1;
      }
      scene.text('"I know."');
      scene.text('And then he pushes into it.');
      scene.actions([
        { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
      ]);
    } else {
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_wait1'
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Wait for him to put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    { label: '"I\'ve been waiting for this"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "I've been waiting all ' + iif(hour < 21 or hour < 5, 'day', 'night') + ' for th...
    scene.text('"I\'ve been waiting all \' + iif(hour < 21 or hour < 5, \'day\', \'night\') + \' for this," you grin, spreading your thighs even wider to make room for him and he grins back at you.');
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnalDoggyInsertSlow(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['first_anal_insertion'] = 1;
  ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  qspCall(s, 'sex_ev_sex', 'insertion_arousal_code');
  qspCall(s, 'stat', '');
  ((s as any).sex_ev ?? {})['position'] = 'anal';
  scene.img('images/shared/sex/anal/doggy/insert1.mp4');
  ((s as any).sex_ev ?? {})['anal_insert_desc1'] = '' + qspUntranslated(s, "npcdesc>", { location: "sex_ev_anal" }) + ' carefully positions himself behind you, lining up the head of his cock with your backdoor, and gently squeezes it into the hole between your cheeks.';
  if (((s as any).dick_desc ?? 0) === 'tiny') {
    ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'Not that he needed to be careful. His hips come flush with your ass, and you still feel plenty of wiggle room inside you. He might as well have put his finger in...';
  } else {
    if (((s as any).dick_desc ?? 0) === 'short') {
      ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, and you feel his cock start to fill you up before abruptly stopping short as his hips collide with your ass.';
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, and you feel his cock stretching you out as he pushes in, before stopping short as his hips collide with your ass...';
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He slips into your sphincter, comfortably sliding his cock all the way in, though it isn\'t a very tight fit...';
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter and fills your ass with his perfectly average length and girth...';
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'You immediately feel your sphincter stretch out as he pushes in, your ass straining to accommodate his thick girth...';
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, comfortable at first, before you realize that it\'s not stopping. His length keeps going all the way up your ass until you feel like it\'s <i>bulging</i> inside you. Though it isn\'t a very tight fit width-wise...';
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, comfortable at first, before you realize that it\'s not stopping. His length keeps going all the way up your ass until you feel like it\'s <i>bulging</i> inside you...';
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'You immediately feel your sphincter stretch out as he pushes in, your walls straining to accommodate his thick girth. Even as you struggle with his width, his length quickly makes its presence known as well when his cock hits deep inside you that you feel as if your stomach is <i>bulging</i>. It seems to barely fit inside you...';
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, comfortable at first, before you realize that it\'s not stopping. His length keeps going all the way up your ass until you feel like it <i>bulging</i> inside your stomach. And from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you. Although it isn\'t a very tight fit width-wise...';
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, filling your ass with so much cock that it feels as if it\'s bulging inside your stomach. And from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you...';
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          ((s as any).sex_ev ?? {})['anal_insert_desc2'] = 'You immediately feel your sphincter stretch out as he pushes in, your walls straining to accommodate his thick girth. Even as your ass struggles with his width, his length quickly makes its presence known, filling your ass with so much cock that it feels as if it\'s <i>bulging</i> inside your stomach. And from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you...';
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
  }
  // TODO-QSP: $sex_ev['anal_insert_desc1']
  // TODO-QSP: $sex_ev['anal_insert_desc2']
  qspCall(s, 'sex_ev_anal', 'anal_pain1');
  qspCall(s, 'sex_ev_anal', 'anal_insert_orgasm');
  scene.actions([
    { label: 'Enjoyment', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        scene.text('"Oh <i>fuck!</i> That\'s big!" You groan, squirming in pleasure around the cock that is absolutely filling your ass right now.');
      } else {
        scene.text('"Oh, fuck!" you groan in pleasure. "I still can\'t get over how fucking big you are!"');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly, giving <<$npcdesc>> a wry smile afterwa...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly, giving ${((s as any).npcdesc ?? 0)} a wry smile afterwards. "I can never quite get used to how big you are."`);
      } else {
        scene.text('"Nngh~! <i>Fuck,</i> you\'re so big!" You groan loudly, grinning as you do.');
      }
    }
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.text('You let out a loud moan as heat fills up your insides and your pussy begins to salivate with just the insertion of his cock into your asshole.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a husky groan as an indescribable ache rocks through your insides. Like a crumb of bread to a woman starving to death, just the insertion of his cock into your asshole sets your lustful hunger ablaze.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      { label: 'Gasp', handler: (st: GameState) => {
    scene.text('You gasp as the pleasure of his insertion sends heat washing through your hips and electric tingles racing across your skin.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you from behind, your ass involuntarily squeezing his shaft at the insertion.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Discomfort', handler: (st: GameState) => {
    if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a painful groan as your insides <i>ache</i> as if you had been punched in the gut. Which, in some ways, you have been...');
    qspCall(s, 'sex_ev_anal', 'anal_goto');
  } },
        { label: 'He\'s big!', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/insert_shock1.mp4');
    // TODO-QSP: $sex_ev['anal_insert_desc1']
    // TODO-QSP: $sex_ev['anal_insert_desc2']
    if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      if (((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        if (((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
          scene.text('"Oh, <i>fuck!</i>" you groan, squirming as your asshole is already beginning to ache. "It\'s like a fucking baseball bat inside me!"');
        } else {
          scene.text('"Oh <i>fuck!</i> That\'s big!" You groan, squirming as your asshole is already beginning to ache.');
        }
        if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"Pretty incredible, isn\'t it?" he grins haughtily, taking a moment seemingly to admire the size of his own cock. ');
        } else {
          if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your ass is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your ass is so tight," ${((s as any).npcdesc ?? 0)} grins back.`);
          }
        }
      } else {
        scene.text('"Oh, fuck!" you groan in discomfort. "That\'s still <i>fucking</i> big!" ');
        if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 0) {
            scene.text('"Won\'t be able to go back to regular cocks after this," he chuckles.');
          } else {
            scene.text('"I\'m spoiling you for life," he chuckles. "No guy is ever going to fill you up like this."');
          }
        } else {
          if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your ass is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your ass is so tight," ${((s as any).npcdesc ?? 0)} grins back.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly as <<$npcdesc>>'s cock overstuffs your p...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly as ${((s as any).npcdesc ?? 0)}'s cock overstuffs your poor asshole and you're already starting to ache. "I can never get used to how <i>big</i> you are."`);
      } else {
        scene.text('"Nngh~!" you groan loudly.');
      }
    }
    qspCall(s, 'sex_ev_anal', 'anal_goto');
  } },
      ]);
    }
    scene.actions([
      { label: 'Gasp', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/insert_shock1.mp4');
    // TODO-QSP: $sex_ev['anal_insert_desc1']
    // TODO-QSP: $sex_ev['anal_insert_desc2']
    scene.text('Your breath hitches in discomfort as the cock pokes awkward spots in your intestines and settles in behind you.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/insert_shock1.mp4');
    // TODO-QSP: $sex_ev['anal_insert_desc1']
    // TODO-QSP: $sex_ev['anal_insert_desc2']
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you from behind, your ass involuntarily squeezing his shaft at the insertion.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnalInsertOrgasm(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['sensitivity'] > 0  ||  (((s as any).orgasm_buildup ?? 0) >= 100  &&  (((s as any).trait_vars ?? 0)?.['sensitivity'] >= 0  ||  ((s as any).trait_vars ?? 0)?.['sensitivity_override'] === 1))) {
    scene.actions([
      { label: 'Orgasm!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)) {
      // TODO-QSP: gs 'arousal', 'anal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    }
    ((s as any).sex_ev ?? {})['insertion_orgasm'] = 1;
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev ?? {})['orgasm_count'] = (((s as any).sex_ev ?? {})['orgasm_count'] ?? 0) + (1);
    scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] === 0) {
      scene.text('You\'re so turned on; just that one thrust is all it takes for you to come.');
    } else {
      scene.text('That\'s all it takes. Just that one thrust. And you\'re already coming.');
    }
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short'  ||  ((s as any).dick_desc ?? 0) === 'chode'  ||  ((s as any).dick_desc ?? 0) === 'skinny'  ||  ((s as any).dick_desc ?? 0) === 'normal') {
      scene.text('Muscles tighten. Heat blossoms. You gasp aloud. Electric tingles race across your body from your toes to the tips of your nipples as your arms give out underneath you and you convulse in orgasm. You groan a wordless cry of ecstasy.');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> 's cock fills</i> you to the brim, and you gasp aloud as it starts....
      scene.text(`${((s as any).npcdesc ?? 0)} 's cock fills</i> you to the brim, and you gasp aloud as it starts. Muscles tighten. Heat blossoms. Electric tingles race across your body from your toes to the tips of your nipples as your arms give out underneath you and you convulse in orgasm. You groan a wordless cry of ecstasy.`);
      scene.actions([
        { label: 'You\'re really big', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    if (((s as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('"You\'re really big," you pant dizzily, head still swimming from orgasm. "I didn\'t expect how good that would feel just to get you inside me."');
    } else {
      scene.text('"It\'s your big cock," you pant giddily, head still swimming from orgasm. "The way you fill</i> me. It\'s indescribable."');
    }
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      ]);
    }
    // TODO-QSP: dynamic text: "I'm that good, huh?" <<$npcdesc>> grins smugly.
    scene.text(`"I'm that good, huh?" ${((s as any).npcdesc ?? 0)} grins smugly.`);
    if (((s as any).trait_vars ?? 0)?.['sensitivity'] > 0) {
      scene.actions([
        { label: '[Easy Orgasm trait]', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    scene.text('"I come easy," you smile tiredly at him, head still swimming from orgasm. "Sometimes just one thrust is all it takes for me."');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Really horny', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    scene.text('"I\'m really horny," you moan, practically melting underneath him.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAnalGirlOrgasmContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
    scene.text('You\'ve barely finished your orgasm when he rolls you onto your knees and pulls your hips back towards him. With one swift thrust, he plunges his cock straight up your ass, earning an involuntary gasp from your lips.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      // TODO-QSP: dynamic text: While your pussy spasms uncontrollably in orgasm, you vaguely feel <<$npcdesc>> ...
      scene.text(`While your pussy spasms uncontrollably in orgasm, you vaguely feel ${((s as any).npcdesc ?? 0)} slip his cock out from you. And then without warning, he shoves it up your ass. You quiver, your asshole flexing around his cock as your pussy spasms beneath it, unable to approve or protest as climax overcomes you.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/doggy/dog1.jpg');
        scene.text('You\'ve barely finished quivering when he pulls you off of him and rolls you onto your knees, pulling your hips back towards him. With one swift thrust, he plunges his cock straight up your ass, earning an involuntary gasp from your lips.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
          // TODO-QSP: dynamic text: <<$npcdesc>> doesn't give you a moment to rest, continuing to fuck you all the w...
          scene.text(`${((s as any).npcdesc ?? 0)} doesn't give you a moment to rest, continuing to fuck you all the way through your orgasm. You quiver, your asshole flexing around his cock as your pussy spasms beneath it, driving you insane as he doesn't stop even after you've finished.`);
        }
      }
    }
  }
  scene.text('"I\'m not finished yet," he growls from behind you.');
  ((s as any).sex_ev ?? {})['position'] = 'anal';
  ((s as any).sex_ev ?? {})['pos_speed'] = 'anal' + qspUntranslated(s, "sex_ev['speed']>", { location: "sex_ev_anal" }) + '';
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnalGoto(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0  ||  ((s as any).sex_ev ?? 0)?.['anal_count'] < 1) {
    if (((s as any).sex_ev ?? 0)?.['anal_allowed'] < 1  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs. "I want to fuck your ass."`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? 0)}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs. "I want to fuck your ass."`);
      }
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_ask'
    } else {
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_no_ask'
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['change_pos'] === 1) {
      // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_switch'
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['anal_fuck'] > 0) {
          // TODO-QSP: xgt 'sex_ev_anal', 'anal_goto2'
        } else {
          if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
            ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
          }
          ((s as any).sex_ev ?? {})['pos_speed'] = 'anal' + qspUntranslated(s, "sex_ev['speed']>", { location: "sex_ev_anal" }) + '';
          scene.actions([
            { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterAnalGoto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0) {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_goto'
  } else {
    ((s as any).sex_ev ?? {})['cock_inserted'] = 1;
    ((s as any).sex_ev ?? {})['position'] = 'anal';
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev ?? {})['speed'] = Math.floor(Math.random() * 3) + 1;
    }
    ((s as any).sex_ev ?? {})['pos_speed'] = 'anal' + qspUntranslated(s, "sex_ev['speed']>", { location: "sex_ev_anal" }) + '';
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', 'anal<<sex_ev[''speed'']>>.2'
  } },
    ]);
  }
  scene.build();
}

function enterAnalChangePosition(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/2.jpg');
    // TODO-QSP: dynamic text: "I'm not really feeling anal right now," you say, looking at <<$npcdesc>> over y...
    scene.text(`"I'm not really feeling anal right now," you say, looking at ${((s as any).npcdesc ?? 0)} over your shoulder. "Could we try another position for now?"`);
    scene.text('He pauses with his cock fully inserted, hands on your ass.');
    scene.text('"What did you have in mind?"');
    ((s as any).sex_ev ?? {})['change_pos'] = 1;
    qspCall(s, 'sex_ev_sex', 'position_change');
  } },
  ]);
  scene.build();
}

function enterAnalPain1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    scene.actions([
      { label: 'Dick is too big', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['dick_too_big'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    // TODO-QSP: dynamic text: That first thrust of <<$npcdesc>>'s hips elicits a gasp of pain from your lips a...
    scene.text(`That first thrust of ${((s as any).npcdesc ?? 0)}'s hips elicits a gasp of pain from your lips and makes your knees want to buckle in agony. His cock is too much for your poor asshole, and it feels like you're being torn in half.`);
    qspCall(s, 'sex_ev_anal', 'anal_pain2');
  } },
    ]);
  }
  scene.actions([
    { label: 'Ouch!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('A lance of pain pierces through your asshole. Whether it\'s the angle or technique or just the fact that it\'s his cocking up your ass, you can\'t say for certain. The only thing you are sure of is that this hurts! </i>');
    qspCall(s, 'sex_ev_anal', 'anal_pain2');
  } },
  ]);
  scene.build();
}

function enterAnalPain2(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/3.jpg');
    // TODO-QSP: dynamic text: As much as you want the pain to stop, the idea of speaking up and ruining the mo...
    scene.text(`As much as you want the pain to stop, the idea of speaking up and ruining the mood makes you cringe. Instead, you let your arms collapse and bury your face into the pillow, hoping that it muffles the sound you make every time ${((s as any).npcdesc ?? 0)} thrusts into you.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Tell <<$npcdesc>> It hurts', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_anal', 'anal_pain3');
  } },
    { label: 'Ask to try something else', handler: (st: GameState) => {
    if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_fav_pos ?? 0)?.[String((s as any).npcID ?? 0)] === 'miss')  ||  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
      scene.img('images/shared/sex/vag/doggy/3.jpg');
      scene.text('"Do you think? We could try! Something else?" you manage to gasp out.');
      qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
      // TODO-QSP: dynamic text: "Come on, don't be a baby," <<$npcdesc>> grunts back. "It's already inside." 
      scene.text(`"Come on, don't be a baby," ${((s as any).npcdesc ?? 0)} grunts back. "It's already inside." `);
      scene.text('Heedless of your cry, he starts fucking you without even a second\'s pause, and you moan in pain and discomfort with every thrust.');
      qspCall(s, 'sex_ev_cum', 'fuck_cum');
      qspCall(s, 'sex_ev_sex', 'fuck_continue');
    } else {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
      scene.text('"Do you think? We could try! Something else?" you ask.');
      // TODO-QSP: dynamic text: <<$npcdesc>> pauses just as he was preparing to start fucking you for real, hand...
      scene.text(`${((s as any).npcdesc ?? 0)} pauses just as he was preparing to start fucking you for real, hands on your ass.`);
      scene.text('"What did you have in mind?" he asks.');
      qspCall(s, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(s, 'sex_ev_sex', 'position_change');
    }
  } },
  ]);
  scene.build();
}

function enterAnalPain3(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) >= 2))  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
    scene.text('"Ouch! Hey! Ow!" you yell. "Wait! That hurts!"');
    // TODO-QSP: iif(sex_ev['speed'] < 3, '"It''ll get better," <<$npcdesc>> says uncaringly and continues to fuck yo...
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => {
    // TODO-QSP: gt 'sex_ev_anal', $sex_ev['pos_speed']
  } },
    ]);
  } else {
    scene.img('images/shared/sex/anal/doggy/anal.jpg');
    scene.text('"Ouch!" you yell. "Wait! Ow!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops halfway through a thrust, jabbing you painfully with his cock...
    scene.text(`${((s as any).npcdesc ?? 0)} stops halfway through a thrust, jabbing you painfully with his cock again and nearly falling on you in the process.`);
    scene.text('"Shit! Sorry," he says. "What happened? Are you okay?"');
    scene.actions([
      { label: 'Be irritated', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    scene.text('"Your dick is up my ass! What the fuck do you think happened?" you scowl. "Do <i>you</i> know what it feels like to have a cock up your ass?!"');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).sex_ev ?? 0)?.['anal_ask'] > 0) {
        // TODO-QSP: dynamic text: "You're the one that wanted to do anal!" <<$npcdesc>> huffs back.
        scene.text(`"You're the one that wanted to do anal!" ${((s as any).npcdesc ?? 0)} huffs back.`);
      } else {
        // TODO-QSP: dynamic text: "Well, sorry that your ass doesn't exactly come with an instruction manual!" <<$...
        scene.text(`"Well, sorry that your ass doesn't exactly come with an instruction manual!" ${((s as any).npcdesc ?? 0)} sneers back.`);
      }
    } else {
      scene.text('"Oh. Sorry," he mumbles sheepishly. ');
    }
    scene.text('"Whatever. Can we just move around to get a better angle?"');
    scene.text('The two of you awkwardly shuffle around for a minute, trying to find a position for your hips that\'s a little more comfortable.');
    // TODO-QSP: dynamic text: "How's that?" <<$npcdesc>> asks. 
    scene.text(`"How's that?" ${((s as any).npcdesc ?? 0)} asks. `);
    scene.actions([
      { label: 'Fine, I guess', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('"Fine, I guess," you sigh. It doesn\'t really feel good, but at least it doesn\'t hurt anymore.');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes your response as approval and starts moving again.
    scene.text(`${((s as any).npcdesc ?? 0)} takes your response as approval and starts moving again.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal_goto2'] },
    ]);
  } },
      { label: 'Better', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"<i>Finally</i>," you sigh. "Yes, that feels better. Try to remember this next time."');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to be a little ticked off by your attitude but starts moving ...
    scene.text(`${((s as any).npcdesc ?? 0)} seems to be a little ticked off by your attitude but starts moving again anyways.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal_goto2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).npc_like ?? {})[String((s as any).npcID ?? 0)] = (((s as any).npc_like ?? {})[String((s as any).npcID ?? 0)] ?? 0) + (2);
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    if (((s as any).sex_ev ?? 0)?.['dick_too_big'] === 1) {
      ((s as any).sex_ev ?? {})['dick_too_big'] = 2;
      ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
      (s as any).minut = ((s as any).minut ?? 0) + (Math.floor(Math.random() * 2) + 1);
      scene.text('"Your dick is kind of big for my ass," you smile ruefully. "Can we just pause for a sec to let me adjust?"');
      scene.text('"Oh. Yeah, sure."');
      // TODO-QSP: dynamic text: You spend a couple minutes with <<$npcdesc>>'s entire length inside you, taking ...
      scene.text(`You spend a couple minutes with ${((s as any).npcdesc ?? 0)}'s entire length inside you, taking deep breaths as you slowly let it stretch your asshole. Eventually the pain fades to nothing more than a dull ache.`);
      scene.text('"Okay," you nod. "You can start moving again."');
    } else {
      scene.text('"I\'m fine," you chuckle. "Your dick is kind of at an awkward angle, though. Can we adjust a little?"');
      scene.text('"Oh. Yeah, sure."');
      scene.text('The two of you shuffle around a little, finding a position for your hips that\'s a little more comfortable for your ass.');
      // TODO-QSP: dynamic text: "How's that?" <<$npcdesc>> asks. 
      scene.text(`"How's that?" ${((s as any).npcdesc ?? 0)} asks. `);
      scene.text('"Much better," you nod back, and he begins thrusting.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal_goto2'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterAnal1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  scene.img('images/shared/sex/anal/doggy/slow1.mp4');
  qspCall(s, 'sex_ev_anal', 'anal1_start_desc');
  qspCall(s, 'sex_ev_anal', 'anal_pain1');
  qspCall(s, 'sex_ev_anal', 'anal_change_position');
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    scene.img('images/shared/sex/anal/doggy/slow2.mp4');
    qspCall(s, 'sex_ev_anal', 'anal1_enjoy_desc');
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      qspCall(s, 'sex_ev_sex', 'girl_cum_pre');
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Doesn\'t feel good', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    // TODO-QSP: dynamic text: As <<$npcdesc>> continues to slowly pump in and out of you, you realize that thi...
    scene.text(`As ${((s as any).npcdesc ?? 0)} continues to slowly pump in and out of you, you realize that this isn't really doing it for you. It doesn't feel bad exactly, but you can tell that this isn't going to get you off either.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'This is too slow', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    // TODO-QSP: dynamic text: Closing your eyes, you try to focus on the sensations, <<$npcdesc>> on top of yo...
    scene.text(`Closing your eyes, you try to focus on the sensations, ${((s as any).npcdesc ?? 0)} on top of you, his cock stretching your asshole, going in and out... in and out... in and out.`);
    scene.text('Your eyes snap open when you realize this isn\'t going to work and hold back a sigh. This is so slow! You don\'t want this dainty, gentle lovemaking; you want him to fuck you!');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['bored'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
    scene.img('images/shared/sex/anal/doggy/slow2.mp4');
    // TODO-QSP: dynamic text: As much as you want <<$npcdesc>> to pick up the pace, you don't want to be a bit...
    scene.text(`As much as you want ${((s as any).npcdesc ?? 0)} to pick up the pace, you don't want to be a bitch about it, so you bite your tongue. You sigh silently instead, chewing on your cheek and letting your expression lapse into boredom, thankful that at least you're facing away from him so you don't have to put on a performance.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can you fuck me faster?', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/slow1.mp4');
    // TODO-QSP: dynamic text: "This is boring," you say, looking at <<$npcdesc>> over your shoulder. "Can you ...
    scene.text(`"This is boring," you say, looking at ${((s as any).npcdesc ?? 0)} over your shoulder. "Can you go faster? I'm never going to get off at this rate."`);
    scene.text('"I can go faster," he grunts.');
    scene.text('"Finally," you say, spreading your knees a little more as he picks up the pace.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal2.1'] },
    ]);
  } },
      { label: 'I want you to pound me', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/slow1.mp4');
    // TODO-QSP: dynamic text: "Hey," you say, turning your head over your shoulder to look <<$npcdesc>> right ...
    scene.text(`"Hey," you say, turning your head over your shoulder to look ${((s as any).npcdesc ?? 0)} right in the eyes. "I didn't come here for you to hump me like a Disney princess. I came here to <b>fuck. </b> Now fuck me like you mean it already!"`);
    if (((s as any).npc_sex_speed ?? 0)?.[String((s as any).npclastgenerated ?? 0)] === 1) {
      // TODO-QSP: dynamic text: A concentrated look shadows <<$npcdesc>>'s face and quickly starts fucking you w...
      scene.text(`A concentrated look shadows ${((s as any).npcdesc ?? 0)}'s face and quickly starts fucking you with accelerated speed.`);
    } else {
      // TODO-QSP: dynamic text: Before you can even finish your sentence, <<$npcdesc>> grabs you by the hips and...
      scene.text(`Before you can even finish your sentence, ${((s as any).npcdesc ?? 0)} grabs you by the hips and rams his cock into you.`);
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal3.1'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnal1_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  scene.img('images/shared/sex/anal/doggy/slow2.mp4');
  qspCall(s, 'sex_ev_anal', 'anal1.1_desc');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnal1_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  scene.img(`images/shared/sex/anal/doggy/slow${Math.floor(Math.random() * 2) + 1}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Fina...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? 0)} keeps slowly fucking you from behind. Finally, the stabbing pain between your asscheeks is starting to go away. It seems your virgin asshole is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? 0)}'s thrusts. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first anal.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>> cont...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? 0)} continues to thrust into your back door, trying with all your might to prevent yourself from bursting into tears. It hurts so much, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Clos...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? 0)} keeps slowly fucking you from behind. Closing your eyes, you focus, adjusting your knees and the spread of your thighs, your arms and the angle of penetration, your timing, and trying to move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc ?? 0)}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb, and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? 0)}'s thrusts. It hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>> cont...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? 0)} continues to thrust into you from behind, trying with all your might to prevent yourself from bursting into tears. It hurts so much, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, throwing them back to ...
      scene.text(`Nevertheless, you try to move your hips in time with his, throwing them back to meet his thrusts and doing your best to make ${((s as any).npcdesc ?? 0)} feel good, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to slowly thrust into your ass fro...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? 0)} continues to slowly thrust into your ass from behind. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls; every thrust fills you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it easier to reach the deepest parts of your asshole.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>'s cock inside of you, clenching your abdomen and throw...
          scene.text(`You focus on ${((s as any).npcdesc ?? 0)}'s cock inside of you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your asshole tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock into you from beh...
            scene.text(`You grunt passively as ${((s as any).npcdesc ?? 0)} continues to pump his cock into you from behind. His manhood drives deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock into you from behind....
              scene.text(`You moan softly as ${((s as any).npcdesc ?? 0)} continues to pump his cock into you from behind. It still basically feels numb to your asshole other than the occasional bump, but you don't want him to feel bad about it either, so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                qspCall(s, 'sex_ev_anal', 'anal1.2_dirty_talk');
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your ass still barely feels anything oth...
                scene.text(`All your dirty talk is just that: talk. Your ass still barely feels anything other than the occasional bump, but you don't want ${((s as any).npcdesc ?? 0)} to feel bad about it either, so you play along, pretending it feels good.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant like a bitch in heat as your asshole tightens up and you start throwing...
        scene.text(`You pant like a bitch in heat as your asshole tightens up and you start throwing your hips back to meet ${((s as any).npcdesc ?? 0)}'s thrusts. By the way his breathing changes, you think you're doing as good a job of pleasing him as he is for you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          qspCall(s, 'sex_ev_anal', 'anal1.2_moan_desc');
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            qspCall(s, 'sex_ev_anal', 'anal1.2_dirty_talk');
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if (((((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_<<$npcID>> ', 'talk_output');
              }
            } else {
              // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>'s cock inside you.
              scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? 0)}'s cock inside you.`);
              qspCall(s, 'sex_ev_anal', 'anal1.2_sensation_desc');
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnal1_bored(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  qspCall(s, 'sex_ev_sex', 'fuck_no_cum_code');
  scene.img('images/shared/sex/anal/doggy/slow2.mp4');
  scene.text('He keeps fucking you very slowly.');
  scene.text('And it\'s very boring</i>.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnal2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  scene.img('images/shared/sex/anal/doggy/med1.mp4');
  qspCall(s, 'sex_ev_anal', 'anal2_start_desc');
  qspCall(s, 'sex_ev_anal', 'anal_pain1');
  qspCall(s, 'sex_ev_anal', 'anal_change_position');
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    if (((s as any).pcs_pubes ?? 0) < 4) {
      scene.img('images/shared/sex/anal/doggy/med1.mp4');
    } else {
      scene.img('images/shared/sex/anal/doggy/med2.mp4');
    }
    qspCall(s, 'sex_ev_anal', 'anal2_enjoy_desc');
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      qspCall(s, 'sex_ev_sex', 'girl_cum_pre');
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Doesn\'t feel good', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    // TODO-QSP: dynamic text: As <<$npcdesc>> continues to steadily fuck you from behind, you realize that thi...
    scene.text(`As ${((s as any).npcdesc ?? 0)} continues to steadily fuck you from behind, you realize that this isn't really doing it for you. It doesn't feel bad exactly, but you can tell that this isn't going to get you off either.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Pace is wrong', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    scene.img(`images/shared/sex/anal/doggy/med${Math.floor(Math.random() * 2) + 1}.mp4`);
    scene.text('You groan softly, but not in pleasure. More like frustration. Even though he\'s fucking you at what would probably be considered to be a "normal" pace, it\'s not what you\'re in the mood for. It just feels... wrong.');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    // TODO-QSP: dynamic text: Sighing internally, you decide not to ruin the mood. <<$npcdesc>> continues to e...
    scene.text(`Sighing internally, you decide not to ruin the mood. ${((s as any).npcdesc ?? 0)} continues to enthusiastically clap your cheeks, and you let your expression lapse into boredom, grateful that at least you don't have to act like you're having a good time.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Could you be a little more gentle?', handler: (st: GameState) => {
    scene.text('"Could you slow down a little?" you ask. "I think I\'m in the mood for something a little more... sensual...');
    // TODO-QSP: dynamic text: "I can do that," <<$npcdesc>> says, smiling gently, and slows down, putting more...
    scene.text(`"I can do that," ${((s as any).npcdesc ?? 0)} says, smiling gently, and slows down, putting more effort into the motion of his hips instead of the speed.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal1.1'] },
    ]);
  } },
    ]);
  } },
    { label: 'Can you fuck me harder?', handler: (st: GameState) => {
    scene.img(`images/shared/sex/anal/doggy/med${Math.floor(Math.random() * 2) + 1}.mp4`);
    scene.text('"Can you go harder?" you grunt, throwing your hips back against his, trying to amplify the force. "This is kind of boring for me. I like it rough."');
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.text('"You\'re pretty kinky, you know that?"');
      scene.text('"Shut up and fuck me," you reply, throwing your hips back into him as he speeds up.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal3.1'] },
    ]);
  } },
    { label: 'Boooooring', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['bored'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    // TODO-QSP: dynamic text: Sighing internally, you decide not to ruin the mood. <<$npcdesc>> continues to e...
    scene.text(`Sighing internally, you decide not to ruin the mood. ${((s as any).npcdesc ?? 0)} continues to enthusiastically clap your cheeks, and you let your expression lapse into boredom, grateful that at least you don't have to act like you're having a good time.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
  ]);
  scene.build();
}

function enterAnal2_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  if (((s as any).pcs_pubes ?? 0) < 4) {
    scene.img('images/shared/sex/anal/doggy/med1.mp4');
  } else {
    scene.img('images/shared/sex/anal/doggy/med2.mp4');
  }
  qspCall(s, 'sex_ev_anal', 'anal2.1_desc');
  ((s as any).sex_ev ?? {})['pos_speed'] = 'anal2';
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnal2_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  if (((s as any).pcs_pubes ?? 0) < 4) {
    scene.img('images/shared/sex/anal/doggy/med1.mp4');
  } else {
    scene.img('images/shared/sex/anal/doggy/med2.mp4');
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps steadily fucking you from behind. Fi...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? 0)} keeps steadily fucking you from behind. Finally, the stabbing pain between your legs is starting to go away. It seems your virgin asshole is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? 0)}'s hips colliding with your ass. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time, and you endure, clenching the bedsheets tight with both hands.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            scene.text('You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. It hurts so much, but you can\'t bring yourself to tell him to stop.');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Clos...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? 0)} keeps slowly fucking you from behind. Closing your eyes, you focus, adjusting your knees and the spread of your thighs, your arms and the angle of penetration, your timing, and trying to move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc ?? 0)}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb, and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? 0)}'s hips clapping against your ass. It still hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>>'s hi...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? 0)}'s hips loudly clap into your ass and pain lances through your asshole. It hurts so much, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, throwing them back to ...
      scene.text(`Nevertheless, you try to move your hips in time with his, throwing them back to meet ${((s as any).npcdesc ?? 0)}'s thrusts, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to steadily fuck you from behind. ...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? 0)} continues to steadily fuck you from behind. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls; every thrust fills you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it slide in and out of you with much greater, and pleasurable, force.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>'s cock inside of you, clenching your abdomen and throw...
          scene.text(`You focus on ${((s as any).npcdesc ?? 0)}'s cock inside of you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your asshole tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock into you from beh...
            scene.text(`You grunt passively as ${((s as any).npcdesc ?? 0)} continues to pump his cock into you from behind. His manhood hammers deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pump his cock into you from behind....
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? 0)} continues to pump his cock into you from behind. It still basically feels numb to your ass other than the slapping of his hips against yours, but you don't want him to feel bad about it either, so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                qspCall(s, 'sex_ev_anal', 'anal2.2_dirty_talk');
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. For all the effort <<$npcdesc>> is putti...
                scene.text(`All your dirty talk is just that: talk. For all the effort ${((s as any).npcdesc ?? 0)} is putting in, you can't say it feels very good. But you don't want ${((s as any).npcdesc ?? 0)} to feel bad about it either, so you play along, pretending otherwise.`);
              } else {
                if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
                  if (((((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                    qspCall(s, 'sex_ev_sex_talk_<<$npcID>> ', 'talk_output');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant like a bitch in heat as your asshole tightens up and you start throwing...
        scene.text(`You pant like a bitch in heat as your asshole tightens up and you start throwing your hips back to meet ${((s as any).npcdesc ?? 0)}'s thrusts. By the way his breathing changes, you think you're doing as good a job of pleasing him as he is for you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Nngh~! Ngh~! Ngh~! Nnngh~!</i>"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Yes~! Mmm~! Ahh~!</i>"');
            }
          }
          qspCall(s, 'sex_ev_anal', 'anal2.2_moan_desc');
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            qspCall(s, 'sex_ev_anal', 'anal2.2_dirty_talk');
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if (((((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_<<$npcID>> ', 'talk_output');
              }
            } else {
              qspCall(s, 'sex_ev_anal', 'anal2.2_sensation_desc');
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnal2_bored(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  if (((s as any).pcs_pubes ?? 0) < 4) {
    scene.img('images/shared/sex/anal/doggy/med1.mp4');
  } else {
    scene.img('images/shared/sex/anal/doggy/med2.mp4');
  }
  scene.text('He keeps fucking you at a medium pace. It\'s boring.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnal3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['anal_virgin_fuck'] = 1;
  ((s as any).sex_ev ?? {})['rough_check'] = 1;
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  // TODO-QSP: gs 'arousal', 'anal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'rough'
  scene.img('images/shared/sex/anal/doggy/rough1.mp4');
  // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you from behind, the impact ripplin...
  scene.text(`You gasp as ${((s as any).npcdesc ?? 0)} slams his cock into you from behind, the impact rippling through your entire body. As your head jerks back reflexively, ${((s as any).npcdesc ?? 0)}'s hand grabs hold of your hair, yanking on it to pull you harder onto his cock.`);
  qspCall(s, 'sex_ev_anal', 'anal3_start_desc');
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] !== 1) {
    scene.actions([
      { label: 'So rough!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    qspCall(s, 'sex_ev_anal', 'anal3_too_rough');
  } },
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/anal/doggy/hard1.mp4');
    // TODO-QSP: dynamic text: For whatever reason, you can't bring yourself to say anything and simply endure ...
    scene.text(`For whatever reason, you can't bring yourself to say anything and simply endure the rough treatment. You sigh in relief when ${((s as any).npcdesc ?? 0)} releases your hair, but only for a brief moment when he uses his extra hand to grab hold of your ass and pound you even harder. You grab onto the edge of the bed and hang on for dear life, whimpering as he mercilessly fucks you.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'It hurts!', handler: (st: GameState) => {
    if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_speed_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 3)  ||  (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] !== 1)) {
      scene.text('"Oh fuck! It hurts!" you cry.');
      // TODO-QSP: dynamic text: "Hurts fucking good, doesn't it?" <<$npcdesc>> grunts back, not even pausing for...
      scene.text(`"Hurts fucking good, doesn't it?" ${((s as any).npcdesc ?? 0)} grunts back, not even pausing for a single beat.`);
      scene.actions([
        { label: 'Please slow down!', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('"Please!" you beg, tears welling up in your eyes. "Please slow down! I can\'t-! Take-!');
    // TODO-QSP: dynamic text: But <<$npcdesc>> is heedless of your cries. He keeps a firm hold on your hair an...
    scene.text(`But ${((s as any).npcdesc ?? 0)} is heedless of your cries. He keeps a firm hold on your hair and pulls hard with every thrust, forcing unceasing cries of pain from your lips.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'If you slow down, I will kill you', handler: (st: GameState) => {
    qspCall(s, 'sweat', 'add', 1);
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    ((s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: You scream another cry of agonizing pleasure and grimace at <<$npcdesc>>.
    scene.text(`You scream another cry of agonizing pleasure and grimace at ${((s as any).npcdesc ?? 0)}.`);
    scene.text('"If you slow down, I will <i>fucking</i> kill you," you snarl, throwing your hips forward to slam into his for more force.');
    qspCall(s, 'sex_ev_anal', 'anal3_enjoy_desc');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      scene.img('images/shared/sex/anal/doggy/anal.jpg');
      // TODO-QSP: dynamic text: "Oh fuck! It hurts!" you moan, and <<$npcdesc>> stops abruptly, letting you coll...
      scene.text(`"Oh fuck! It hurts!" you moan, and ${((s as any).npcdesc ?? 0)} stops abruptly, letting you collapse to the bed as he releases your hair.`);
      if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
        scene.text('"Oh! Sorry. I thought you might like it rough. Do you want me to stop?"');
      } else {
        scene.text('"Oh! Sorry. I thought you wouldn\'t mind. Do you want me to stop?"');
      }
      scene.actions([
        { label: 'No (enjoy)', handler: (st: GameState) => {
    ((s as any).npc_knows_pc_likes_rough ?? {})[String((s as any).npcID ?? 0)] = 1;
    ((s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"No," you smile back at him. "I want you to pound me."');
    // TODO-QSP: dynamic text: In response, <<$npcdesc>> yanks you back by the hair even harder than before, sl...
    scene.text(`In response, ${((s as any).npcdesc ?? 0)} yanks you back by the hair even harder than before, slamming his cock into you to fulfill your request.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal3.1'] },
    ]);
  } },
        { label: 'Yes, gentle, please', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"Yes, please," you say, giving him a small smile. "A little more gently would be very nice."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal1.1'] },
    ]);
  } },
        { label: 'Not <i>too</i> gentle', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"You don\'t have to be too gentle with me," you giggle. "I just don\'t want to feel like I\'m having sex with Vlad the Impaler here."');
    scene.text('You sigh in relief as he picks up his pace again; this time without leaving, you feel like you\'re being battered to bits.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal2.2'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  if (((s as any).WIP_enabled ?? 0) > 0  &&  ((s as any).stat ?? 0)?.['rape_count'] > 0  &&  ((s as any).trait_vars ?? 0)?.['repressed_trait'] === 0) {
    scene.actions([
      { label: 'Rape flashbacks', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rape_flashback'] = 1;
    scene.actions([
      { label: 'Hold it in', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/hard2.mp4');
    ((s as any).sex_ev ?? {})['rough_hurt'] = 1;
    if (((s as any).stat ?? 0)?.['rape_count'] === 1) {
      scene.text('Your arms give out from underneath you as you break down in terror; the memory of your rape explodes like a missile inside your mind. The images and sensations come flooding back to you, memories of your body being violated flashing before your eyes like a montage you can\'t turn off. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
    } else {
      if (((s as any).stat ?? 0)?.['rape_count'] < 5) {
        scene.text('Your arms give out from underneath you as you break down in terror, the memories of the several times you\'ve been raped exploding like a missile inside your mind. The images and sensations come flooding back to you, memories of your body being violated flashing before your eyes like a montage you can\'t turn off. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
      } else {
        if (((s as any).stat ?? 0)?.['rape_count'] < 10) {
          scene.text('Your arms give out from underneath you as you break down in terror, the memories of the several times you\'ve been raped exploding like a missile inside your mind. The images and sensations come flooding back to you—memories of your attackers all blurring together, combining into one horrible sensation like they\'re all violating you at once. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
        } else {
          scene.text('Your arms give out from underneath you as you break down in terror, reducing you to barely more than a shuddering mess as the trauma of your countless rapes threatens to overwhelm you. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
        }
      }
    }
    // TODO-QSP: dynamic text: You don't want to ruin the mood. Besides, <<$npcdesc>> wouldn't understand...
    scene.text(`You don't want to ruin the mood. Besides, ${((s as any).npcdesc ?? 0)} wouldn't understand...`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/hard2.mp4');
    scene.text('"<i><b> NO!</b></i> "You shriek. "<i><b>STOP! STOP! STOP! STOP! STOP!</b></i>"');
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
      ((s as any).sex_ev ?? {})['rough_hurt'] = 1;
      ((s as any).sex_ev ?? {})['rape_hurt'] = 1;
      ((s as any).sex_ev ?? {})['boy_cum'] = 2;
      // TODO-QSP: dynamic text: But despite your desperate screams, <<$npcdesc>> doesn't even slow down, instead...
      scene.text(`But despite your desperate screams, ${((s as any).npcdesc ?? 0)} doesn't even slow down, instead continuing to pummel you from behind as you cry in terror.`);
      qspCall(s, 'sex_ev_cum', 'fuck_cum');
      qspCall(s, 'sex_ev_sex', 'fuck_continue');
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_talk2', 'rape_explain');
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
    qspCall(s, 'sex_ev_anal', 'anal3_enjoy_desc');
    qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      qspCall(s, 'sex_ev_sex', 'girl_cum_pre');
    }
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Doesn\'t feel good', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    // TODO-QSP: dynamic text: <<$npcdesc>> may be going hard and fast, but to you, it doesn't feel like anythi...
    scene.text(`${((s as any).npcdesc ?? 0)} may be going hard and fast, but to you, it doesn't feel like anything at all. It doesn't hurt, nor does it feel good. You're just getting... fucked...?`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['fake_orgasm_count'] = (((s as any).sex_ev ?? {})['fake_orgasm_count'] ?? 0) + (1);
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (s as any).fake_orgasm = ((s as any).fake_orgasm ?? 0) + (1);
    qspCall(s, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/anal/doggy/hard1.mp4');
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((s as any).npcdesc ?? 0)}'s cock with your asshole as hard as you can, dramatically shaking your shoulders, faking climax.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((s as any).npcdesc ?? 0)} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant, forcing breathlessness into your voice.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Do you need me to slow down for a bit?"');
      scene.text('"That would... be nice," you smile.');
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_anal', 'anal1'] },
        ]);
      } else {
        scene.actions([
          { label: 'Continue', goto: ['sex_ev_anal', 'anal2'] },
        ]);
      }
    } else {
      scene.text('"I\'m going to keep going, okay?"');
      scene.text('You nod, not really wanting to put any more energy into the performance, and he picks back up into his awful jackhammer pace again.');
      qspCall(s, 'sex_ev_cum', 'fuck_cum');
      qspCall(s, 'sex_ev_sex', 'fuck_continue');
    }
  } },
  ]);
  scene.build();
}

function enterAnal3_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 3);
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sex_ev ?? {})['rough_fuck'] = 1;
    scene.img('images/shared/sex/anal/doggy/rough1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> suddenly grabs you by the hair, sending lances of pain through your...
    scene.text(`${((s as any).npcdesc ?? 0)} suddenly grabs you by the hair, sending lances of pain through your scalp. He pulls hard, and you gasp as you're yanked backwards and slammed into his cock with the force of a nail being smashed by a hammer.`);
    // TODO-QSP: dynamic text: "Yeah <i>bitch?!</i>" <<$npcdesc>> snarls. "You want me to fuck you harder? Well...
    scene.text(`"Yeah <i>bitch?!</i>" ${((s as any).npcdesc ?? 0)} snarls. "You want me to fuck you harder? Well, then take it, you fucking slut!" and starts roughly fucking you in a way completely unlike his previous mannerisms.`);
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
    ((s as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    qspCall(s, 'sex_ev_anal', 'anal3.1_desc');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Suffer', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as he keeps fucking you roughly. It's all yo...
    scene.text(`Tears begin to well up in your eyes as he keeps fucking you roughly. It's all you can do not to sob, but ${((s as any).npcdesc ?? 0)} is unrelenting. He keeps a firm hold on your hair and pulls hard with every thrust, forcing cries of pain from your lips.`);
    scene.text('This isn\'t what you wanted...');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
    scene.img('images/shared/sex/anal/doggy/hard1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace, pounding you from behind. You throw your hips ba...
    scene.text(`${((s as any).npcdesc ?? 0)} picks up the pace, pounding you from behind. You throw your hips back in joyous ecstasy, feeling greater and greater pleasure every time his hips slam into you.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  qspCall(s, 'sex_ev_anal', 'anal_change_position');
  scene.build();
}

function enterAnal3_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['rough_check'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_anal', 'anal3'] }]);
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 3);
  qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
  scene.img(`images/shared/sex/anal/doggy/hard${Math.floor(Math.random() * 2) + 1}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take gasping breaths as <<$npcdesc>> keeps pounding his cock into you from b...
        scene.text(`You take gasping breaths as ${((s as any).npcdesc ?? 0)} keeps pounding his cock into you from behind. Somehow, the stabbing pain between your legs is starting to go away. It seems your virgin asshole is starting to adjust to getting jackhammered.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? 0)}'s hips colliding with your ass. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let a little pain cause you to asshole out of your first time and clench the bedsheets tight with both hands.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you from behind, cl...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc ?? 0)} keeps slamming into you from behind, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great, and wet drops roll down your cheeks and into the mattress as ${((s as any).npcdesc ?? 0)} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you from behind. It hurts s...
              scene.text(`You sob openly as ${((s as any).npcdesc ?? 0)} smashes his cock into you from behind. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he drives you straight into bed with his thrusts.`);
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take gasping breaths as <<$npcdesc>> keeps pounding his cock into you from b...
        scene.text(`You take gasping breaths as ${((s as any).npcdesc ?? 0)} keeps pounding his cock into you from behind. You focus hard, trying with all your might to squeeze some kind of pleasure from this. Anything to make the pain go away. And somehow, after several minutes, it does. ${((s as any).npcdesc ?? 0)} continues to pound your ass, but suddenly you feel able to tolerate it, even if it doesn't feel very good either.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? 0)}'s hips colliding with your ass. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let the pain show, clenching the bedsheets tight with both hands to keep from crying out loud.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you from behind, cl...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc ?? 0)} keeps slamming into you from behind, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great, and tiny drops of moisture leak from your eyes and onto the mattress as ${((s as any).npcdesc ?? 0)} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you from behind. It hurts s...
              scene.text(`You sob openly as ${((s as any).npcdesc ?? 0)} smashes his cock into you from behind. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he pounds you straight into the bed with his thrusts.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you move your hips in time with his, throwing them back to meet <<...
      scene.text(`Nevertheless, you move your hips in time with his, throwing them back to meet ${((s as any).npcdesc ?? 0)}'s demolishing thrusts and try to ride the wave, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to pound your ass from behind. You...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? 0)} continues to pound your ass from behind. You aren't sure what changed, but it's like your body is coming alive. His cock stretches your walls; it's so <i>deep</i> inside you, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it hammer you harder and harder with greater satisfaction every time.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>'s cock as he pounds you, clenching your abdomen and th...
          scene.text(`You focus on ${((s as any).npcdesc ?? 0)}'s cock as he pounds you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your ass tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt in time with <<$npcdesc>>'s thrusts as he continues to pound his cock ...
            scene.text(`You grunt in time with ${((s as any).npcdesc ?? 0)}'s thrusts as he continues to pound his cock into you from behind. His manhood hammers deep inside you, slamming into you in a way that doesn't exactly feel "good," but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pound his cock between your legs. I...
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? 0)} continues to pound his cock between your legs. It still basically feels numb to your ass other than the slamming of his hips against yours, but you don't want him to feel bad about it either, so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                qspCall(s, 'sex_ev_anal', 'anal3.2_dirty_talk');
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. <<$npcdesc>> continues to relentlessly s...
                scene.text(`All your dirty talk is just that: talk. ${((s as any).npcdesc ?? 0)} continues to relentlessly smash your ass with his cock, and you honestly can't say it feels very good. But you don't want ${((s as any).npcdesc ?? 0)} to feel bad about it either, so you play along, pretending otherwise.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> pounds you from behind. Your assho...
        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? 0)} pounds you from behind. Your asshole almost involuntarily tightens up, desperately throwing your hips back to meet ${((s as any).npcdesc ?? 0)}'s thrusts. By the way his breathing changes, you think you're giving just as good as you're getting as you feel arousal dribble down your thighs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] >= 1) {
          qspCall(s, 'sex_ev_anal', 'anal3.2_moan_desc');
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            qspCall(s, 'sex_ev_anal', 'anal3.2_dirty_talk');
          } else {
            qspCall(s, 'sex_ev_anal', 'anal3.2_sensation_desc');
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  scene.build();
}

function enterAnalCreampieMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Creampie', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)  ||  ((s as any).pcs_horny ?? 0) > 90) {
      if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        scene.actions([
          { label: 'Come together', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You just nod, unable to say anything, and grab hold of him tightly. You can feel...
    scene.text(`You just nod, unable to say anything, and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your ass feels the same way. It feels like any moment you might just-`);
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      // TODO-QSP: dynamic text: You just nod, unable to say anything, eagerly throwing your hips back into his t...
      scene.text(`You just nod, unable to say anything, eagerly throwing your hips back into his thrusts. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your ass feels the same way. It feels like any moment you might just-`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        // TODO-QSP: dynamic text: You just nod, unable to say anything, and grab hold of him tightly. You can feel...
        scene.text(`You just nod, unable to say anything, and grab hold of him tightly. You can feel ${((s as any).npcdesc ?? 0)}'s cock swelling inside you, right on the edge of bursting. The tension in your ass feels the same way. It feels like any moment you might just-`);
        // TODO-QSP: end !}
        ((s as any).sex_ev ?? {})['he_ask_creampie_yes'] = 1;
      }
    }
    scene.actions([
      { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
          if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).sex_ev ?? 0)?.['safe_day'] + ((s as any).sex_ev ?? 0)?.['probably_safe_day'] === 0) {
            if (((s as any).birth_control ?? 0)?.['think_safe'] === 1) {
              scene.actions([
                { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    if (((s as any).tabletkishot ?? 0) > 0) {
      scene.text('"I\'m on the shot now," you smile at him. "Go ahead."');
    } else {
      scene.text('"I\'m on the pill now," you smile at him. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).stat ?? 0)?.['safe_day'] === 1) {
                scene.actions([
                  { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"It\'s a safe day," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).stat ?? 0)?.['probably_safe_day'] === 1) {
                  scene.actions([
                    { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['probably_safe_day'] = 1;
    scene.text('"It\'s probably fine today," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).sex_ev ?? 0)?.['safe_day'] === 0  &&  ((s as any).sex_ev ?? 0)?.['probably_safe_day'] === 0  &&  ((s as any).sex_ev ?? 0)?.['danger_day'] === 0) {
                    scene.actions([
                      { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"It\'s a safe day," you say with a deceitful smile. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                    ]);
                  }
                }
              }
            }
          }
          scene.actions([
            { label: 'Go ahead', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"Okay," you nod. "Go ahead."');
    } else {
      scene.text('"Okay," you manage to grunt out. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
            { label: 'Allow him (reluctant)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['reluctant_creampie'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"If you really want to, I guess," you say somewhat hesitantly.');
    } else {
      scene.text('"If you really want to, I guess," you grunt out between thrusts.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
            { label: 'Allow him (disgust)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['unhappy_creampie'] = 1;
    if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"Ugh," you grimace in disgust. "I guess if you have</i> to."');
    } else {
      scene.text('"Ugh," you grunt between thrusts, grimacing in disgust. "I guess if you have</i> to." ');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).sex_ev ?? 0)?.['cum_where'] === 1) {
            if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] + ((s as any).sex_ev ?? 0)?.['safe_day'] + ((s as any).sex_ev ?? 0)?.['probably_safe_day'] === 0) {
              if (((s as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
                scene.actions([
                  { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    if (((s as any).tabletkishot ?? 0) > 0) {
      scene.text('"I\'m on the shot now," you smile at him. "Go ahead."');
    } else {
      scene.text('"I\'m on the pill now," you smile at him. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).stat ?? 0)?.['safe_day'] === 1) {
                  scene.actions([
                    { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"You can come inside me," you pant. "It\'s a safe day."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                  ]);
                } else {
                  if (((s as any).stat ?? 0)?.['probably_safe_day'] === 1) {
                    scene.actions([
                      { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['probably_safe_day'] = 1;
    scene.text('"You can come inside me," you pant. "It should be safe today."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                    ]);
                  } else {
                    if (((s as any).stat ?? 0)?.['dangerous_day'] === 1  &&  ((s as any).sex_ev ?? 0)?.['danger_day'] === 0) {
                      scene.actions([
                        { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"It\'s a safe day," you say with a deceitful smile. "You can come inside me."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                        { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_stats', 'birth_control_know');
    scene.text('"I\'m on birth control," you say, telling a barefaced lie. "You can come inside me."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                      ]);
                    }
                  }
                }
              }
            }
          }
        }
        scene.actions([
          { label: '"You can come inside"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"It\'s okay," you murmur. "You can come inside."');
      } else {
        scene.text('"It\'s-! Okay!" you grunt out between poundings. "You can-! Come inside-!"');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"It\'s okay," you murmur. "You can just come inside."');
      } else {
        scene.text('"It\'s-! Okay!" you grunt out between poundings. "You can just... Come inside!"');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: '"Fill me up"', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"Do it," you smile. "Fill me up."');
      } else {
        scene.text('"Do it!" you cry. "Fill me up!"');
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"Come inside me," you smile. "Fill me up."');
      } else {
        scene.text('"Come inside me!" you cry. "Fill me up!"');
      }
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Fake a simultaneous orgasm', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_cum', 'cum_together_fake');
  } },
        ]);
      }
      if ((((s as any).pcs_horny ?? 0) > 90  ||  ((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0))  &&  ((s as any).sex_ev ?? 0)?.['he_ask_creampie'] === 0) {
        scene.actions([
          { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
        ]);
      }
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.actions([
          { label: 'Make him come inside you', goto: ['sex_ev_cum', 'cum_force'] },
        ]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).npc_rule_no_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 0) {
      scene.actions([
        { label: 'Creampies cost extra', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['p_creampie_bonus'] = 1;
    ((s as any).sex_ev ?? {})['prostitution_bonus'] = (((s as any).sex_ev ?? {})['prostitution_bonus'] ?? 0) + (1000);
    scene.text('"Finishing inside costs extra," you smirk teasingly.');
    scene.text('"Ungh~! Done!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn't even hesitate and thrusts balls deep into you with a loud g...
    scene.text(`${((s as any).npcdesc ?? 0)} doesn't even hesitate and thrusts balls deep into you with a loud groan.`);
    scene.actions([
      { label: 'Get creampied', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'anal_start':
      enterAnalStart(s, scene);
      break;
    case 'anal_insert_acts':
      enterAnalInsertActs(s, scene);
      break;
    case 'anal_doggy_switch':
      enterAnalDoggySwitch(s, scene);
      break;
    case 'anal_present_ass':
      enterAnalPresentAss(s, scene);
      break;
    case 'anal_ask':
      enterAnalAsk(s, scene);
      break;
    case 'anal_wait1':
      enterAnalWait1(s, scene);
      break;
    case 'no_ass_to_pussy1':
      enterNoAssToPussy1(s, scene);
      break;
    case 'no_vaginal':
      enterNoVaginal(s, scene);
      break;
    case 'anal_no_ask':
      enterAnalNoAsk(s, scene);
      break;
    case 'anal_doggy_insert_slow':
      enterAnalDoggyInsertSlow(s, scene);
      break;
    case 'anal_insert_orgasm':
      enterAnalInsertOrgasm(s, scene);
      break;
    case 'anal_girl_orgasm_continue':
      enterAnalGirlOrgasmContinue(s, scene);
      break;
    case 'anal_goto':
      enterAnalGoto(s, scene);
      break;
    case 'anal_goto2':
      enterAnalGoto2(s, scene);
      break;
    case 'anal_change_position':
      enterAnalChangePosition(s, scene);
      break;
    case 'anal_pain1':
      enterAnalPain1(s, scene);
      break;
    case 'anal_pain2':
      enterAnalPain2(s, scene);
      break;
    case 'anal_pain3':
      enterAnalPain3(s, scene);
      break;
    case 'anal1':
      enterAnal1(s, scene);
      break;
    case 'anal1.1':
      enterAnal1_1(s, scene);
      break;
    case 'anal1.2':
      enterAnal1_2(s, scene);
      break;
    case 'anal1.bored':
      enterAnal1_bored(s, scene);
      break;
    case 'anal2':
      enterAnal2(s, scene);
      break;
    case 'anal2.1':
      enterAnal2_1(s, scene);
      break;
    case 'anal2.2':
      enterAnal2_2(s, scene);
      break;
    case 'anal2.bored':
      enterAnal2_bored(s, scene);
      break;
    case 'anal3':
      enterAnal3(s, scene);
      break;
    case 'anal3.1':
      enterAnal3_1(s, scene);
      break;
    case 'anal3.2':
      enterAnal3_2(s, scene);
      break;
    case 'anal_creampie_menu':
      enterAnalCreampieMenu(s, scene);
      break;
    default:
      enterAnalStart(s, scene);
      break;
  }
}

export const sex_ev_anal: LocationDef = {
  name: 'sex_ev_anal',
  title: '"I want to try anal."',
  region: 'other',
  enter: enter,
};
