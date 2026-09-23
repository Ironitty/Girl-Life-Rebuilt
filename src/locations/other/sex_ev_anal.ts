import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

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
      qspGoto(s, 'sex_ev_anal', 'anal_goto');
    } else {
      qspCall(s, 'sex_ev_sex', 'speed_select');
      scene.actions([
        { label: 'Anal (doggy)', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_present_ass'
  } },
      ]);
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterAnalDoggySwitch(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['change_pos'] = 0;
  scene.img('images/shared/sex/foreplay/doggy2.jpg');
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      // TODO-QSP: dynamic text: You push <<$npcdesc>> off of you, closing your legs and rolling onto your knees.
      scene.text(`You push ${((s as any).npcdesc ?? '')} off of you, closing your legs and rolling onto your knees.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
        // TODO-QSP: dynamic text: You lean forward, letting <<$npcdesc>>''s cock slip from your pussy and give him...
        scene.text(`You lean forward, letting ${((s as any).npcdesc ?? '')}'s cock slip from your pussy and give him a sultry look over your shoulder.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          // TODO-QSP: dynamic text: You lift your hips, letting <<$npcdesc>>''s cock slip from your ass. Then, you t...
          scene.text(`You lift your hips, letting ${((s as any).npcdesc ?? '')}'s cock slip from your ass. Then, you turn around, getting on hands and knees, presenting your ass towards him.`);
        }
      }
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['initiative'] === 'girl') {
      // TODO-QSP: dynamic text: With a mischievous grin, you put yourself on all fours and present your ass towa...
      scene.text(`With a mischievous grin, you put yourself on all fours and present your ass towards ${((s as any).npcdesc ?? '')}.`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> rolls you onto your knees, pulling your hips back towards him.
      scene.text(`${((s as any).npcdesc ?? '')} rolls you onto your knees, pulling your hips back towards him.`);
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
        scene.text(`"${((s as any).pcs_nickname ?? '')}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} murmurs. "I want to fuck your ass."`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? '')}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} murmurs. "I want to fuck your ass."`);
      }
      qspGoto(s, 'sex_ev_anal', 'anal_ask');
    } else {
      qspGoto(s, 'sex_ev_anal', 'anal_no_ask');
    }
  }
  // TODO-QSP: end
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
    qspGoto(s, 'sex_ev_anal', 'anal_doggy_insert_slow');
  } else {
    qspGoto(s, 'sex_ev_anal', 'anal_goto2');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalAsk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_ask'] = 1;
  if ((!((s as any).pcs_ass ?? 0))) {
    scene.actions([
      { label: 'Tell him you\'re an anal virgin', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_virgin'] = 1;
    scene.text('"Nobody\'s ever fucked my ass before," you tell him.');
    scene.actions([
      { label: 'I\'m just not sure if I\'m ready', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"I\'m just not sure if I\'m ready," you mumble shyly.');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"Well... we don\'t have to if you\'re not ready. We can do something else."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantTo(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
      scene.actions([
        { label: 'If that\'s really okay', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_anal'] = 1;
    scene.text('"If that\'s really okay," you smile gratefully.');
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      scene.text('"Yeah of course. It\'s your body, your choice. I know not every girl is into anal. Maybe we could just... fuck again?"');
      qspCall(st, 'sex_ev_sex', 'position_choose');
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
      scene.text(`${((st as any).npcdesc ?? '')} looks down at himself, almost as if contemplating what to do with his solidly erect dick.`);
      scene.text('"Soooo... you <i>don\'t</i> want to do anal...?');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWantTo(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBjInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterFuckInstead(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
    scene.actions([
      { label: 'I told you no', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['new_pos'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_anal'] = 1;
    scene.text('"I told you no already," you growl.');
    scene.text('He sighs in disappointment.');
    qspCall(st, 'sex_ev_sex', 'position_choose');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Deny him', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_anal'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['new_pos'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_anal'] = 1;
    if (((st as any).npc_anal_count ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "Sorry <<$npc_usedname[$npcID]>>," you shake your head. "Not today."
      scene.text(`"Sorry ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you shake your head. "Not today."`);
    } else {
      // TODO-QSP: dynamic text: "Sorry <<$npc_usedname[$npcID]>>," you shake your head. "I''m not ready."
      scene.text(`"Sorry ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}," you shake your head. "I'm not ready."`);
    }
    scene.text('He sighs in disappointment.');
    qspCall(st, 'sex_ev_sex', 'position_choose');
  } },
    { label: 'Allow it', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    scene.text('"Okay," you say, turning around and presenting your rear hole to him.');
    qspGoto(st, 'sex_ev_anal', 'anal_insert_acts');
  } },
  ]);
  scene.build();
}

function enterAnalWait1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_anal_count ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: "Oh, uhh..." <<$npc_usedname[$npcID]>> stops awkwardly. "I, uhm, thought maybe w...
    scene.text(`"Oh, uhh..." ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} stops awkwardly. "I, uhm, thought maybe we could... y'know, since we did it before...?"`);
  } else {
    // TODO-QSP: dynamic text: "Oh, uhh..." <<$npc_usedname[$npcID]>> stops awkwardly. "I, uhm, thought maybe w...
    scene.text(`"Oh, uhh..." ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} stops awkwardly. "I, uhm, thought maybe we could try it...? Uhm, anal?"`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask first (polite)', handler: (st: GameState) => {
    scene.text('"You need to ask first," you chide softly. "You can\'t just stick it in my ass without permission"');
    scene.text('"Oh. Sorry. Uhm. So... can I... put it in your ass?"');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"Nope!" you smile. "Gotta ask next time."');
    scene.text('"Aww..."');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['new_pos'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_anal'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      qspCall(st, 'sex_ev_sex', 'position_choose');
    } else {
      qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
    }
  } },
      { label: 'Acquiesce', handler: (st: GameState) => {
    scene.text('"Yes you may," you smile. "See? That wasn\'t so hard was it?"');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> gleefully prepares to put his cock in your ass.
    scene.text(`${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} gleefully prepares to put his cock in your ass.`);
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['new_pos'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['not_anal'] = 1;
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'doggy'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      qspCall(st, 'sex_ev_sex', 'position_choose');
    } else {
      qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
    }
  } },
      { label: '<i>Yes</i> (eager)', handler: (st: GameState) => {
    scene.text('"<i>Yes,</i>" you grin. "See? Permission is <i>hot.</i>"');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> gleefully prepares to put his cock in your ass.
    scene.text(`${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} gleefully prepares to put his cock in your ass.`);
    scene.actions([
      { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    ]);
  } },
      { label: 'Acquiesce', handler: (st: GameState) => {
    scene.text('"... <i>fine</i>."');
    // TODO-QSP: dynamic text: You give a sigh of resignation as <<$npc_usedname[$npcID]>> gleefully prepares t...
    scene.text(`You give a sigh of resignation as ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} gleefully prepares to put his cock in your ass.`);
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
    scene.text(`"Woah!" you snap your legs closed and move away from ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''} as he tries to enter you. "What do you think you're doing?"`);
    scene.text('He looks confused.');
    scene.text('"You can\'t stick it in my pussy after having it in my ass," you explain. "I\'m going to get infections!"');
    scene.actions([
      { label: 'Anal only', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['no_vag'] = 1;
    scene.text('"Once you\'ve gone anal, you can\'t go back to pussy. We\'re only doing anal until we\'re done."');
    if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'anal') {
      scene.text('"Won\'t hear any complaints from me," he grins.');
    } else {
      scene.text('"Oh, okay."');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalGoto(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Clean his cock first', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['anal_dirt'] = 0;
    scene.text('"At least clean yourself off first," you say, gesturing to the wipes by the bed.');
    scene.text('"Oh, okay," he nods and wipes his cock off.');
    qspCall(st, 'sex_ev_sex', 'rand_position');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNoVaginal(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['no_anal'] > 0) {
    scene.actions([
      { label: 'Stop him (anal only)', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['no_vag'] === 0) {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        scene.text('"Wait! You can\'t!"');
      }
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['change_pos'] = 1;
      scene.text('"Hey!" you shout. "I told you, no pussy sex."');
      scene.text('"Right, sorry, sorry. I forgot."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalStart(st, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalNoAsk(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/foreplay/doggy1.jpg');
  // TODO-QSP: dynamic text: You get down on all fours, spreading your knees apart. A second later, you feel ...
  scene.text(`You get down on all fours, spreading your knees apart. A second later, you feel the head of his ${((s as any).dick_desc ?? '')} cock pressed up against your rear hole.`);
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
    // TODO-QSP: dynamic text: "Uhh, <<$npc_usedname[$npcID]>>?" You straighten up. "That''s not the right hole...
    scene.text(`"Uhh, ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}?" You straighten up. "That's not the right hole."`);
    if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'anal'  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      if (((st as any).stat ?? 0)?.['anal'] === 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['surprise_anal'] = 1;
      }
      scene.text('"Says who?" he snickers and pushes in.');
      scene.actions([
        { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
      ]);
    } else {
      qspGoto(st, 'sex_ev_anal', 'anal_wait1');
    }
  } },
      { label: 'Wait, that\'s my ass!', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    // TODO-QSP: dynamic text: "Wait! <<$npc_usedname[$npcID]>>!" You straighten up, eyes wide in panic. "That'...
    scene.text(`"Wait! ${((st as any).npc_usedname ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}!" You straighten up, eyes wide in panic. "That's my ass!"`);
    if (((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'anal'  &&  (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] > 0  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] > 0)) {
      if (((st as any).stat ?? 0)?.['anal'] === 0) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['surprise_anal'] = 1;
      }
      scene.text('"I know."');
      scene.text('And then he pushes into it.');
      scene.actions([
        { label: 'Insertion', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
      ]);
    } else {
      qspGoto(st, 'sex_ev_anal', 'anal_wait1');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for him to put it in', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_anal', 'anal_doggy_insert_slow'
  } },
    { label: '"I\'ve been waiting for this"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: '"I''ve been waiting all ' + iif(hour < 21 or hour < 5, 'day', 'night') + ' for ...
    scene.text('"I\'ve been waiting all ' + ((((st as any).hour ?? 0) < 21  ||  ((st as any).hour ?? 0) < 5) ? ('day') : ('night')) + ' for this," you grin, spreading your thighs even wider to make room for him and he grins back at you.');
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
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_anal_insertion'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['orgasm'] = ((s as any).orgasm ?? 0);
  qspCall(s, 'sex_ev_sex', 'insertion_arousal_code');
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
  scene.img('images/shared/sex/anal/doggy/insert1.mp4');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc1'] = '' + ((s as any).npcdesc ?? 0) + ' carefully positions himself behind you, lining up the head of his cock with your backdoor, and gently squeezes it into the hole between your cheeks.';
  if (((s as any).dick_desc ?? 0) === 'tiny') {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'Not that he needed to be careful. His hips come flush with your ass, and you still feel plenty of wiggle room inside you. He might as well have put his finger in...';
  } else {
    if (((s as any).dick_desc ?? 0) === 'short') {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, and you feel his cock start to fill you up before abruptly stopping short as his hips collide with your ass.';
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, and you feel his cock stretching you out as he pushes in, before stopping short as his hips collide with your ass...';
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He slips into your sphincter, comfortably sliding his cock all the way in, though it isn\'t a very tight fit...';
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter and fills your ass with his perfectly average length and girth...';
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'You immediately feel your sphincter stretch out as he pushes in, your ass straining to accommodate his thick girth...';
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, comfortable at first, before you realize that it\'s not stopping. His length keeps going all the way up your ass until you feel like it\'s <i>bulging</i> inside you. Though it isn\'t a very tight fit width-wise...';
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, comfortable at first, before you realize that it\'s not stopping. His length keeps going all the way up your ass until you feel like it\'s <i>bulging</i> inside you...';
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'You immediately feel your sphincter stretch out as he pushes in, your walls straining to accommodate his thick girth. Even as you struggle with his width, his length quickly makes its presence known as well when his cock hits deep inside you that you feel as if your stomach is <i>bulging</i>. It seems to barely fit inside you...';
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, comfortable at first, before you realize that it\'s not stopping. His length keeps going all the way up your ass until you feel like it <i>bulging</i> inside your stomach. And from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you. Although it isn\'t a very tight fit width-wise...';
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'He pushes into your sphincter, filling your ass with so much cock that it feels as if it\'s bulging inside your stomach. And from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you...';
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_insert_desc2'] = 'You immediately feel your sphincter stretch out as he pushes in, your walls straining to accommodate his thick girth. Even as your ass struggles with his width, his length quickly makes its presence known, filling your ass with so much cock that it feels as if it\'s <i>bulging</i> inside your stomach. And from the way it pokes your innards, you can tell he hasn\'t even managed to get his full length inside you...';
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalPain1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalInsertOrgasm(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoyment', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'He\'s big!', handler: (st: GameState) => {
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      if (((st as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        scene.text('"Oh <i>fuck!</i> That\'s big!" You groan, squirming in pleasure around the cock that is absolutely filling your ass right now.');
      } else {
        scene.text('"Oh, fuck!" you groan in pleasure. "I still can\'t get over how fucking big you are!"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly, giving <<$npcdesc>> a wry smile afterwa...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly, giving ${((st as any).npcdesc ?? '')} a wry smile afterwards. "I can never quite get used to how big you are."`);
      } else {
        scene.text('"Nngh~! <i>Fuck,</i> you\'re so big!" You groan loudly, grinning as you do.');
      }
    }
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Moan', handler: (st: GameState) => {
    scene.text('You let out a loud moan as heat fills up your insides and your pussy begins to salivate with just the insertion of his cock into your asshole.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a husky groan as an indescribable ache rocks through your insides. Like a crumb of bread to a woman starving to death, just the insertion of his cock into your asshole sets your lustful hunger ablaze.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      { label: 'Gasp', handler: (st: GameState) => {
    scene.text('You gasp as the pleasure of his insertion sends heat washing through your hips and electric tingles racing across your skin.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you from behind, your ass involuntarily squeezing his shaft at the insertion.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
    ]);
  } },
    { label: 'Discomfort', handler: (st: GameState) => {
    if (((st as any).dick_desc ?? 0) === 'long'  ||  ((st as any).dick_desc ?? 0) === 'huge'  ||  ((st as any).dick_desc ?? 0) === 'enormous'  ||  ((st as any).dick_desc ?? 0) === 'lengthy'  ||  ((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
      scene.actions([
        { label: 'Groan', handler: (st: GameState) => {
    scene.text('You let out a painful groan as your insides <i>ache</i> as if you had been punched in the gut. Which, in some ways, you have been...');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalGoto(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: 'He\'s big!', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/insert_shock1.mp4');
    // TODO-QSP: $sex_ev['anal_insert_desc1']
    // TODO-QSP: $sex_ev['anal_insert_desc2']
    if (((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      if (((st as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        if (((st as any).dick_desc ?? 0) === 'gigantic'  ||  ((st as any).dick_desc ?? 0) === 'monstrous') {
          scene.text('"Oh, <i>fuck!</i>" you groan, squirming as your asshole is already beginning to ache. "It\'s like a fucking baseball bat inside me!"');
        } else {
          scene.text('"Oh <i>fuck!</i> That\'s big!" You groan, squirming as your asshole is already beginning to ache.');
        }
        if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          scene.text('"Pretty incredible, isn\'t it?" he grins haughtily, taking a moment seemingly to admire the size of his own cock. ');
        } else {
          if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your ass is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your ass is so tight," ${((st as any).npcdesc ?? '')} grins back.`);
          }
        }
      } else {
        scene.text('"Oh, fuck!" you groan in discomfort. "That\'s still <i>fucking</i> big!" ');
        if (((st as any).npc_arrogant ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
          if (((st as any).sex_ev ?? 0)?.['anal_virgin'] === 0) {
            scene.text('"Won\'t be able to go back to regular cocks after this," he chuckles.');
          } else {
            scene.text('"I\'m spoiling you for life," he chuckles. "No guy is ever going to fill you up like this."');
          }
        } else {
          if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
            scene.text('"Sorry," he says, a sympathetic look in his eyes.');
          } else {
            // TODO-QSP: dynamic text: "Your ass is so tight," <<$npcdesc>> grins back.
            scene.text(`"Your ass is so tight," ${((st as any).npcdesc ?? '')} grins back.`);
          }
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['anal_count'] === 0) {
        // TODO-QSP: dynamic text: "Nngh~! <i>Fuck~!</i>" you groan loudly as <<$npcdesc>>''s cock overstuffs your ...
        scene.text(`"Nngh~! <i>Fuck~!</i>" you groan loudly as ${((st as any).npcdesc ?? '')}'s cock overstuffs your poor asshole and you're already starting to ache. "I can never get used to how <i>big</i> you are."`);
      } else {
        scene.text('"Nngh~!" you groan loudly.');
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalGoto(st, scene); (st as any).locArgs = __savedLocArgs; }
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
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      { label: 'Squeak!', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/insert_shock1.mp4');
    // TODO-QSP: $sex_ev['anal_insert_desc1']
    // TODO-QSP: $sex_ev['anal_insert_desc2']
    scene.text('"Eep-!"');
    scene.text('A squeak escapes your lips he fills you from behind, your ass involuntarily squeezing his shaft at the insertion.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    if (((st as any).sex_ev ?? 0)?.['orgasm'] === ((st as any).orgasm ?? 0)) {
      (st as any).orgasm_or = 'yes';
      // TODO-QSP: gs 'arousal', 'anal', -1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    }
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['insertion_orgasm'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm_count'] = ((st as any).sex_ev['orgasm_count'] ?? 0) + (1);
    scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] === 0) {
      scene.text('You\'re so turned on; just that one thrust is all it takes for you to come.');
    } else {
      scene.text('That\'s all it takes. Just that one thrust. And you\'re already coming.');
    }
    if (((st as any).dick_desc ?? 0) === 'tiny'  ||  ((st as any).dick_desc ?? 0) === 'short'  ||  ((st as any).dick_desc ?? 0) === 'chode'  ||  ((st as any).dick_desc ?? 0) === 'skinny'  ||  ((st as any).dick_desc ?? 0) === 'normal') {
      scene.text('Muscles tighten. Heat blossoms. You gasp aloud. Electric tingles race across your body from your toes to the tips of your nipples as your arms give out underneath you and you convulse in orgasm. You groan a wordless cry of ecstasy.');
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> ''s cock fills</i> you to the brim, and you gasp aloud as it starts...
      scene.text(`${((st as any).npcdesc ?? '')} 's cock fills</i> you to the brim, and you gasp aloud as it starts. Muscles tighten. Heat blossoms. Electric tingles race across your body from your toes to the tips of your nipples as your arms give out underneath you and you convulse in orgasm. You groan a wordless cry of ecstasy.`);
      scene.actions([
        { label: 'You\'re really big', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    if (((st as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((st as any).npc_fuck_times ?? 0)?.[String((st as any).npcID ?? 0)] === 0) {
      scene.text('"You\'re really big," you pant dizzily, head still swimming from orgasm. "I didn\'t expect how good that would feel just to get you inside me."');
    } else {
      scene.text('"It\'s your big cock," you pant giddily, head still swimming from orgasm. "The way you fill</i> me. It\'s indescribable."');
    }
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      ]);
    }
    // TODO-QSP: dynamic text: "I''m that good, huh?" <<$npcdesc>> grins smugly.
    scene.text(`"I'm that good, huh?" ${((st as any).npcdesc ?? '')} grins smugly.`);
    if (((st as any).trait_vars ?? 0)?.['sensitivity'] > 0) {
      scene.actions([
        { label: '[Easy Orgasm trait]', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    scene.text('"I come easy," you smile tiredly at him, head still swimming from orgasm. "Sometimes just one thrust is all it takes for me."');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Really horny', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    scene.text('"I\'m really horny," you moan, practically melting underneath him.');
    scene.actions([
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalGirlOrgasmContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
    scene.text('You\'ve barely finished your orgasm when he rolls you onto your knees and pulls your hips back towards him. With one swift thrust, he plunges his cock straight up your ass, earning an involuntary gasp from your lips.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'doggy') {
      scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
      // TODO-QSP: dynamic text: While your pussy spasms uncontrollably in orgasm, you vaguely feel <<$npcdesc>> ...
      scene.text(`While your pussy spasms uncontrollably in orgasm, you vaguely feel ${((s as any).npcdesc ?? '')} slip his cock out from you. And then without warning, he shoves it up your ass. You quiver, your asshole flexing around his cock as your pussy spasms beneath it, unable to approve or protest as climax overcomes you.`);
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.img('images/shared/sex/vag/doggy/dog1.jpg');
        scene.text('You\'ve barely finished quivering when he pulls you off of him and rolls you onto your knees, pulling your hips back towards him. With one swift thrust, he plunges his cock straight up your ass, earning an involuntary gasp from your lips.');
      } else {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'anal') {
          scene.img('images/shared/sex/anal/doggy/orgasm1.mp4');
          // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t give you a moment to rest, continuing to fuck you all the ...
          scene.text(`${((s as any).npcdesc ?? '')} doesn't give you a moment to rest, continuing to fuck you all the way through your orgasm. You quiver, your asshole flexing around his cock as your pussy spasms beneath it, driving you insane as he doesn't stop even after you've finished.`);
        }
      }
    }
  }
  scene.text('"I\'m not finished yet," he growls from behind you.');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterAnalGoto(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0  ||  ((s as any).sex_ev ?? 0)?.['anal_count'] < 1) {
    if (((s as any).sex_ev ?? 0)?.['anal_allowed'] < 1  &&  ((s as any).sex_ev ?? 0)?.['anal_count'] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] < 1) {
      // TODO-QSP: $sex_ev['bed_room']
      if (((s as any).npc_assertive ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? '')}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} murmurs. "I want to fuck your ass."`);
      } else {
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>," <<$npc_usedname[$npcID]>> murmurs. "I want to fuck your ass...
        scene.text(`"${((s as any).pcs_nickname ?? '')}," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''} murmurs. "I want to fuck your ass."`);
      }
      qspGoto(s, 'sex_ev_anal', 'anal_ask');
    } else {
      qspGoto(s, 'sex_ev_anal', 'anal_no_ask');
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['change_pos'] === 1) {
      qspGoto(s, 'sex_ev_anal', 'anal_doggy_switch');
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 0) {
        qspGoto(s, 'sex_ev_anal', 'anal_doggy_insert_slow');
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] !== ''  &&  ((s as any).sex_ev ?? 0)?.['anal_fuck'] > 0) {
          qspGoto(s, 'sex_ev_anal', 'anal_goto2');
        } else {
          if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
            ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
          }
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
          scene.actions([
            { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalGoto2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['first_anal_insertion'] === 0) {
    qspGoto(s, 'sex_ev_anal', 'anal_goto');
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['cock_inserted'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
    if (((s as any).sex_ev ?? 0)?.['speed'] === 0) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = (Math.floor(Math.random() * 3) + 1);
    }
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal' + ((s as any).sex_ev ?? 0)?.['speed'] + '';
    scene.actions([
      { label: 'Get assfucked', goto: ['sex_ev_anal', 'anal' + String((((s as any).sex_ev ?? {})['speed'])) + '.2'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalChangePosition(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/shared/sex/vag/doggy/2.jpg');
    // TODO-QSP: dynamic text: "I''m not really feeling anal right now," you say, looking at <<$npcdesc>> over ...
    scene.text(`"I'm not really feeling anal right now," you say, looking at ${((st as any).npcdesc ?? '')} over your shoulder. "Could we try another position for now?"`);
    scene.text('He pauses with his cock fully inserted, hands on your ass.');
    scene.text('"What did you have in mind?"');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['change_pos'] = 1;
    qspCall(st, 'sex_ev_sex', 'position_change');
  } },
  ]);
  scene.build();
}

function enterAnalPain1(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy'  ||  ((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
    scene.actions([
      { label: 'Dick is too big', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['dick_too_big'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (st as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: That first thrust of <<$npcdesc>>''s hips elicits a gasp of pain from your lips ...
    scene.text(`That first thrust of ${((st as any).npcdesc ?? '')}'s hips elicits a gasp of pain from your lips and makes your knees want to buckle in agony. His cock is too much for your poor asshole, and it feels like you're being torn in half.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalPain2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ouch!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('A lance of pain pierces through your asshole. Whether it\'s the angle or technique or just the fact that it\'s his cocking up your ass, you can\'t say for certain. The only thing you are sure of is that this hurts! </i>');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnalPain2(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterAnalPain2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    scene.img('images/shared/sex/vag/doggy/3.jpg');
    // TODO-QSP: dynamic text: As much as you want the pain to stop, the idea of speaking up and ruining the mo...
    scene.text(`As much as you want the pain to stop, the idea of speaking up and ruining the mood makes you cringe. Instead, you let your arms collapse and bury your face into the pillow, hoping that it muffles the sound you make every time ${((st as any).npcdesc ?? '')} thrusts into you.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: '', labelFn: (s: GameState) => 'Tell ' + String(((s as any).npcdesc ?? '') ?? '') + ' It hurts', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_anal', 'anal_pain3');
  } },
    { label: 'Ask to try something else', handler: (st: GameState) => {
    if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fav_pos ?? 0)?.[String((st as any).npcID ?? 0)] === 'miss')  ||  (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1)) {
      scene.img('images/shared/sex/vag/doggy/3.jpg');
      scene.text('"Do you think? We could try! Something else?" you manage to gasp out.');
      qspCall(st, 'sex_ev_sex', 'fuck_no_cum_code');
      // TODO-QSP: dynamic text: "Come on, don''t be a baby," <<$npcdesc>> grunts back. "It''s already inside." 
      scene.text(`"Come on, don't be a baby," ${((st as any).npcdesc ?? '')} grunts back. "It's already inside." `);
      scene.text('Heedless of your cry, he starts fucking you without even a second\'s pause, and you moan in pain and discomfort with every thrust.');
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    } else {
      scene.img('images/shared/sex/vag/doggy/2.jpg');
      scene.text('"Do you think? We could try! Something else?" you ask.');
      // TODO-QSP: dynamic text: <<$npcdesc>> pauses just as he was preparing to start fucking you for real, hand...
      scene.text(`${((st as any).npcdesc ?? '')} pauses just as he was preparing to start fucking you for real, hands on your ass.`);
      scene.text('"What did you have in mind?" he asks.');
      qspCall(st, 'sex_ev_foreplay', 'foreplay_choose');
      qspCall(st, 'sex_ev_sex', 'position_change');
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
      { label: 'Get assfucked', handler: (st: GameState) => { qspGoto(st, 'sex_ev_anal', ((st as any).sex_ev['pos_speed'] ?? '')); } },
    ]);
  } else {
    scene.img('images/shared/sex/anal/doggy/anal.jpg');
    scene.text('"Ouch!" you yell. "Wait! Ow!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> stops halfway through a thrust, jabbing you painfully with his cock...
    scene.text(`${((s as any).npcdesc ?? '')} stops halfway through a thrust, jabbing you painfully with his cock again and nearly falling on you in the process.`);
    scene.text('"Shit! Sorry," he says. "What happened? Are you okay?"');
    scene.actions([
      { label: 'Be irritated', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', ((st as any).npcID ?? 0), 'dislike');
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    scene.text('"Your dick is up my ass! What the fuck do you think happened?" you scowl. "Do <i>you</i> know what it feels like to have a cock up your ass?!"');
    if (((st as any).npc_argumentative ?? 0)?.[String((st as any).npcID ?? 0)] > 0) {
      if (((st as any).sex_ev ?? 0)?.['anal_ask'] > 0) {
        // TODO-QSP: dynamic text: "You''re the one that wanted to do anal!" <<$npcdesc>> huffs back.
        scene.text(`"You're the one that wanted to do anal!" ${((st as any).npcdesc ?? '')} huffs back.`);
      } else {
        // TODO-QSP: dynamic text: "Well, sorry that your ass doesn''t exactly come with an instruction manual!" <<...
        scene.text(`"Well, sorry that your ass doesn't exactly come with an instruction manual!" ${((st as any).npcdesc ?? '')} sneers back.`);
      }
    } else {
      scene.text('"Oh. Sorry," he mumbles sheepishly. ');
    }
    scene.text('"Whatever. Can we just move around to get a better angle?"');
    scene.text('The two of you awkwardly shuffle around for a minute, trying to find a position for your hips that\'s a little more comfortable.');
    // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks. 
    scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks. `);
    scene.actions([
      { label: 'Fine, I guess', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    scene.text('"Fine, I guess," you sigh. It doesn\'t really feel good, but at least it doesn\'t hurt anymore.');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes your response as approval and starts moving again.
    scene.text(`${((st as any).npcdesc ?? '')} takes your response as approval and starts moving again.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal_goto2'] },
    ]);
  } },
      { label: 'Better', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"<i>Finally</i>," you sigh. "Yes, that feels better. Try to remember this next time."');
    // TODO-QSP: dynamic text: <<$npcdesc>> seems to be a little ticked off by your attitude but starts moving ...
    scene.text(`${((st as any).npcdesc ?? '')} seems to be a little ticked off by your attitude but starts moving again anyways.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal_goto2'] },
    ]);
  } },
    ]);
  } },
      { label: 'Laugh it off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    ((st as any).npc_like = (st as any).npc_like ?? {})[String((st as any).npcID ?? 0)] = ((st as any).npc_like[String((st as any).npcID ?? 0)] ?? 0) + (2);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.img('images/shared/sex/vag/doggy/smile1.jpg');
    if (((st as any).sex_ev ?? 0)?.['dick_too_big'] === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['dick_too_big'] = 2;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
      (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 1));
      scene.text('"Your dick is kind of big for my ass," you smile ruefully. "Can we just pause for a sec to let me adjust?"');
      scene.text('"Oh. Yeah, sure."');
      // TODO-QSP: dynamic text: You spend a couple minutes with <<$npcdesc>>''s entire length inside you, taking...
      scene.text(`You spend a couple minutes with ${((st as any).npcdesc ?? '')}'s entire length inside you, taking deep breaths as you slowly let it stretch your asshole. Eventually the pain fades to nothing more than a dull ache.`);
      scene.text('"Okay," you nod. "You can start moving again."');
    } else {
      scene.text('"I\'m fine," you chuckle. "Your dick is kind of at an awkward angle, though. Can we adjust a little?"');
      scene.text('"Oh. Yeah, sure."');
      scene.text('The two of you shuffle around a little, finding a position for your hips that\'s a little more comfortable for your ass.');
      // TODO-QSP: dynamic text: "How''s that?" <<$npcdesc>> asks. 
      scene.text(`"How's that?" ${((st as any).npcdesc ?? '')} asks. `);
      scene.text('"Much better," you nod back, and he begins thrusting.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal_goto2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  scene.img('images/shared/sex/anal/doggy/slow1.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal1StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalPain1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img('images/shared/sex/anal/doggy/slow2.mp4');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnal1EnjoyDesc(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      qspCall(st, 'sex_ev_sex', 'girl_cum_pre');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Doesn\'t feel good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    (st as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: As <<$npcdesc>> continues to slowly pump in and out of you, you realize that thi...
    scene.text(`As ${((st as any).npcdesc ?? '')} continues to slowly pump in and out of you, you realize that this isn't really doing it for you. It doesn't feel bad exactly, but you can tell that this isn't going to get you off either.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'This is too slow', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    // TODO-QSP: dynamic text: Closing your eyes, you try to focus on the sensations, <<$npcdesc>> on top of yo...
    scene.text(`Closing your eyes, you try to focus on the sensations, ${((st as any).npcdesc ?? '')} on top of you, his cock stretching your asshole, going in and out... in and out... in and out.`);
    scene.text('Your eyes snap open when you realize this isn\'t going to work and hold back a sigh. This is so slow! You don\'t want this dainty, gentle lovemaking; you want him to fuck you!');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bored'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    qspCall(st, 'sex_ev_sex', 'fuck_no_cum_code');
    scene.img('images/shared/sex/anal/doggy/slow2.mp4');
    // TODO-QSP: dynamic text: As much as you want <<$npcdesc>> to pick up the pace, you don''t want to be a bi...
    scene.text(`As much as you want ${((st as any).npcdesc ?? '')} to pick up the pace, you don't want to be a bitch about it, so you bite your tongue. You sigh silently instead, chewing on your cheek and letting your expression lapse into boredom, thankful that at least you're facing away from him so you don't have to put on a performance.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can you fuck me faster?', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/slow1.mp4');
    // TODO-QSP: dynamic text: "This is boring," you say, looking at <<$npcdesc>> over your shoulder. "Can you ...
    scene.text(`"This is boring," you say, looking at ${((st as any).npcdesc ?? '')} over your shoulder. "Can you go faster? I'm never going to get off at this rate."`);
    scene.text('"I can go faster," he grunts.');
    scene.text('"Finally," you say, spreading your knees a little more as he picks up the pace.');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal2.1'] },
    ]);
  } },
      { label: 'I want you to pound me', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/slow1.mp4');
    // TODO-QSP: dynamic text: "Hey," you say, turning your head over your shoulder to look <<$npcdesc>> right ...
    scene.text(`"Hey," you say, turning your head over your shoulder to look ${((st as any).npcdesc ?? '')} right in the eyes. "I didn't come here for you to hump me like a Disney princess. I came here to <b>fuck. </b> Now fuck me like you mean it already!"`);
    if (((st as any).npc_sex_speed ?? 0)?.[String((st as any).npclastgenerated ?? 0)] === 1) {
      // TODO-QSP: dynamic text: A concentrated look shadows <<$npcdesc>>''s face and quickly starts fucking you ...
      scene.text(`A concentrated look shadows ${((st as any).npcdesc ?? '')}'s face and quickly starts fucking you with accelerated speed.`);
    } else {
      // TODO-QSP: dynamic text: Before you can even finish your sentence, <<$npcdesc>> grabs you by the hips and...
      scene.text(`Before you can even finish your sentence, ${((st as any).npcdesc ?? '')} grabs you by the hips and rams his cock into you.`);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal1_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterAnal1_2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 1);
  scene.img(`images/shared/sex/anal/doggy/slow${(Math.floor(Math.random() * 2) + 1)}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Fina...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps slowly fucking you from behind. Finally, the stabbing pain between your asscheeks is starting to go away. It seems your virgin asshole is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s thrusts. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first anal.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>> cont...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? '')} continues to thrust into your back door, trying with all your might to prevent yourself from bursting into tears. It hurts so much, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Clos...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps slowly fucking you from behind. Closing your eyes, you focus, adjusting your knees and the spread of your thighs, your arms and the angle of penetration, your timing, and trying to move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc ?? '')}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb, and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s thrusts. It hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>> cont...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? '')} continues to thrust into you from behind, trying with all your might to prevent yourself from bursting into tears. It hurts so much, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, throwing them back to ...
      scene.text(`Nevertheless, you try to move your hips in time with his, throwing them back to meet his thrusts and doing your best to make ${((s as any).npcdesc ?? '')} feel good, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to slowly thrust into your ass fro...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')} continues to slowly thrust into your ass from behind. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls; every thrust fills you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it easier to reach the deepest parts of your asshole.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock inside of you, clenching your abdomen and thro...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock inside of you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your asshole tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock into you from beh...
            scene.text(`You grunt passively as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. His manhood drives deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan softly as <<$npcdesc>> continues to pump his cock into you from behind....
              scene.text(`You moan softly as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. It still basically feels numb to your asshole other than the occasional bump, but you don't want him to feel bad about it either, so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. Your ass still barely feels anything oth...
                scene.text(`All your dirty talk is just that: talk. Your ass still barely feels anything other than the occasional bump, but you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either, so you play along, pretending it feels good.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant like a bitch in heat as your asshole tightens up and you start throwing...
        scene.text(`You pant like a bitch in heat as your asshole tightens up and you start throwing your hips back to meet ${((s as any).npcdesc ?? '')}'s thrusts. By the way his breathing changes, you think you're doing as good a job of pleasing him as he is for you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal1_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal1_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + ' ', 'talk_output');
              }
            } else {
              // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you.
              scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you.`);
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal1_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  scene.img('images/shared/sex/anal/doggy/med1.mp4');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal2StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalPain1(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    if (((st as any).pcs_pubes ?? 0) < 4) {
      scene.img('images/shared/sex/anal/doggy/med1.mp4');
    } else {
      scene.img('images/shared/sex/anal/doggy/med2.mp4');
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnal2EnjoyDesc(st, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      qspCall(st, 'sex_ev_sex', 'girl_cum_pre');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Doesn\'t feel good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    (st as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: As <<$npcdesc>> continues to steadily fuck you from behind, you realize that thi...
    scene.text(`As ${((st as any).npcdesc ?? '')} continues to steadily fuck you from behind, you realize that this isn't really doing it for you. It doesn't feel bad exactly, but you can tell that this isn't going to get you off either.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Pace is wrong', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img(`images/shared/sex/anal/doggy/med${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    scene.text('You groan softly, but not in pleasure. More like frustration. Even though he\'s fucking you at what would probably be considered to be a "normal" pace, it\'s not what you\'re in the mood for. It just feels... wrong.');
    scene.actions([
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    (st as any).orgasm_or = 'no';
    // TODO-QSP: dynamic text: Sighing internally, you decide not to ruin the mood. <<$npcdesc>> continues to e...
    scene.text(`Sighing internally, you decide not to ruin the mood. ${((st as any).npcdesc ?? '')} continues to enthusiastically clap your cheeks, and you let your expression lapse into boredom, grateful that at least you don't have to act like you're having a good time.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Could you be a little more gentle?', handler: (st: GameState) => {
    scene.text('"Could you slow down a little?" you ask. "I think I\'m in the mood for something a little more... sensual...');
    // TODO-QSP: dynamic text: "I can do that," <<$npcdesc>> says, smiling gently, and slows down, putting more...
    scene.text(`"I can do that," ${((st as any).npcdesc ?? '')} says, smiling gently, and slows down, putting more effort into the motion of his hips instead of the speed.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal1.1'] },
    ]);
  } },
    ]);
  } },
    { label: 'Can you fuck me harder?', handler: (st: GameState) => {
    scene.img(`images/shared/sex/anal/doggy/med${(Math.floor(Math.random() * 2) + 1)}.mp4`);
    scene.text('"Can you go harder?" you grunt, throwing your hips back against his, trying to amplify the force. "This is kind of boring for me. I like it rough."');
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      scene.text('"You\'re pretty kinky, you know that?"');
      scene.text('"Shut up and fuck me," you reply, throwing your hips back into him as he speeds up.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal3.1'] },
    ]);
  } },
    { label: 'Boooooring', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['bored'] = 1;
    (st as any).orgasm_or = 'no';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    // TODO-QSP: dynamic text: Sighing internally, you decide not to ruin the mood. <<$npcdesc>> continues to e...
    scene.text(`Sighing internally, you decide not to ruin the mood. ${((st as any).npcdesc ?? '')} continues to enthusiastically clap your cheeks, and you let your expression lapse into boredom, grateful that at least you don't have to act like you're having a good time.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal2_1Desc(s, scene); (s as any).locArgs = __savedLocArgs; }
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal2';
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
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
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps steadily fucking you from behind. Fi...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps steadily fucking you from behind. Finally, the stabbing pain between your legs is starting to go away. It seems your virgin asshole is starting to adjust to having a cock inside it.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips colliding with your ass. It still hurts, but you're determined not to let a little pain cause you to pussy out of your first time, and you endure, clenching the bedsheets tight with both hands.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            scene.text('You whimper softly, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. It hurts so much, but you can\'t bring yourself to tell him to stop.');
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take deep breaths as <<$npcdesc>> keeps slowly fucking you from behind. Clos...
        scene.text(`You take deep breaths as ${((s as any).npcdesc ?? '')} keeps slowly fucking you from behind. Closing your eyes, you focus, adjusting your knees and the spread of your thighs, your arms and the angle of penetration, your timing, and trying to move your hips with his. After some minor adjustments, the pain ${((s as any).npcdesc ?? '')}'s cock was causing inside you fades. After a few minutes, it's little more than a dull throb, and you feel much more comfortable, if not all that good.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips clapping against your ass. It still hurts like hell, but you don't say anything, trying your best not to let it show.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper softly, clenching your teeth as hard as you can as <<$npcdesc>>''s h...
            scene.text(`You whimper softly, clenching your teeth as hard as you can as ${((s as any).npcdesc ?? '')}'s hips loudly clap into your ass and pain lances through your asshole. It hurts so much, but you can't bring yourself to tell him to stop.`);
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you try to move your hips in time with his, throwing them back to ...
      scene.text(`Nevertheless, you try to move your hips in time with his, throwing them back to meet ${((s as any).npcdesc ?? '')}'s thrusts, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        (s as any).orgasm_or = '';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to steadily fuck you from behind. ...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')} continues to steadily fuck you from behind. You aren't sure what changed, but it's like your body is waking up from a deep sleep. His cock stretches your walls; every thrust fills you in a way you didn't know you needed to be, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it slide in and out of you with much greater, and pleasurable, force.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock inside of you, clenching your abdomen and thro...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock inside of you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your asshole tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt passively as <<$npcdesc>> continues to pump his cock into you from beh...
            scene.text(`You grunt passively as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. His manhood hammers deep inside you, filling you with this weird sort of "pressure." This doesn't feel "good" exactly, but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pump his cock into you from behind....
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to pump his cock into you from behind. It still basically feels numb to your ass other than the slapping of his hips against yours, but you don't want him to feel bad about it either, so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. For all the effort <<$npcdesc>> is putti...
                scene.text(`All your dirty talk is just that: talk. For all the effort ${((s as any).npcdesc ?? '')} is putting in, you can't say it feels very good. But you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either, so you play along, pretending otherwise.`);
              } else {
                if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
                  if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                    qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + ' ', 'talk_output');
                  }
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant like a bitch in heat as your asshole tightens up and you start throwing...
        scene.text(`You pant like a bitch in heat as your asshole tightens up and you start throwing your hips back to meet ${((s as any).npcdesc ?? '')}'s thrusts. By the way his breathing changes, you think you're doing as good a job of pleasing him as he is for you.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] <= 2  &&  ((s as any).sex_ev ?? 0)?.['moan'] > 0) {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Nngh~! Ngh~! Ngh~! Nnngh~!</i>"');
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Yes~! Mmm~! Ahh~!</i>"');
            }
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal2_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal2_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).sex_ev ?? 0)?.['casual_talk'] > 0) {
              if ((String(((s as any).npcID ?? 0)).slice((1)-1, ((1)-1)+(1))) === 'A') {
                qspCall(s, 'sex_ev_sex_talk_' + ((s as any).npcID ?? 0) + ' ', 'talk_output');
              }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal2_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal3(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_virgin_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_check'] = 1;
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 2);
  // TODO-QSP: gs 'arousal', 'anal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag'], 'rough'
  scene.img('images/shared/sex/anal/doggy/rough1.mp4');
  // TODO-QSP: dynamic text: You gasp as <<$npcdesc>> slams his cock into you from behind, the impact ripplin...
  scene.text(`You gasp as ${((s as any).npcdesc ?? '')} slams his cock into you from behind, the impact rippling through your entire body. As your head jerks back reflexively, ${((s as any).npcdesc ?? '')}'s hand grabs hold of your hair, yanking on it to pull you harder onto his cock.`);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal3StartDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] !== 1) {
    scene.actions([
      { label: 'So rough!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnal3TooRough(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Don\'t ruin the mood', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/anal/doggy/hard1.mp4');
    // TODO-QSP: dynamic text: For whatever reason, you can''t bring yourself to say anything and simply endure...
    scene.text(`For whatever reason, you can't bring yourself to say anything and simply endure the rough treatment. You sigh in relief when ${((st as any).npcdesc ?? '')} releases your hair, but only for a brief moment when he uses his extra hand to grab hold of your ass and pound you even harder. You grab onto the edge of the bed and hang on for dear life, whimpering as he mercilessly fucks you.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'It hurts!', handler: (st: GameState) => {
    if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_speed_pref ?? 0)?.[String((st as any).npcID ?? 0)] === 3)  ||  (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1)) {
      scene.text('"Oh fuck! It hurts!" you cry.');
      // TODO-QSP: dynamic text: "Hurts fucking good, doesn''t it?" <<$npcdesc>> grunts back, not even pausing fo...
      scene.text(`"Hurts fucking good, doesn't it?" ${((st as any).npcdesc ?? '')} grunts back, not even pausing for a single beat.`);
      scene.actions([
        { label: 'Please slow down!', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    (st as any).orgasm_or = 'no';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    scene.text('"Please!" you beg, tears welling up in your eyes. "Please slow down! I can\'t-! Take-!');
    // TODO-QSP: dynamic text: But <<$npcdesc>> is heedless of your cries. He keeps a firm hold on your hair an...
    scene.text(`But ${((st as any).npcdesc ?? '')} is heedless of your cries. He keeps a firm hold on your hair and pulls hard with every thrust, forcing unceasing cries of pain from your lips.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
        { label: 'If you slow down, I will kill you', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', 1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    // TODO-QSP: dynamic text: You scream another cry of agonizing pleasure and grimace at <<$npcdesc>>.
    scene.text(`You scream another cry of agonizing pleasure and grimace at ${((st as any).npcdesc ?? '')}.`);
    scene.text('"If you slow down, I will <i>fucking</i> kill you," you snarl, throwing your hips forward to slam into his for more force.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnal3EnjoyDesc(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      ]);
    } else {
      scene.img('images/shared/sex/anal/doggy/anal.jpg');
      // TODO-QSP: dynamic text: "Oh fuck! It hurts!" you moan, and <<$npcdesc>> stops abruptly, letting you coll...
      scene.text(`"Oh fuck! It hurts!" you moan, and ${((st as any).npcdesc ?? '')} stops abruptly, letting you collapse to the bed as he releases your hair.`);
      if (((st as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
        scene.text('"Oh! Sorry. I thought you might like it rough. Do you want me to stop?"');
      } else {
        scene.text('"Oh! Sorry. I thought you wouldn\'t mind. Do you want me to stop?"');
      }
      scene.actions([
        { label: 'No (enjoy)', handler: (st: GameState) => {
    ((st as any).npc_knows_pc_likes_rough = (st as any).npc_knows_pc_likes_rough ?? {})[String((st as any).npcID ?? 0)] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    scene.text('"No," you smile back at him. "I want you to pound me."');
    // TODO-QSP: dynamic text: In response, <<$npcdesc>> yanks you back by the hair even harder than before, sl...
    scene.text(`In response, ${((st as any).npcdesc ?? '')} yanks you back by the hair even harder than before, slamming his cock into you to fulfill your request.`);
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal3.1'] },
    ]);
  } },
        { label: 'Yes, gentle, please', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['too_rough'] = 1;
    scene.text('"Yes, please," you say, giving him a small smile. "A little more gently would be very nice."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'anal1.1'] },
    ]);
  } },
        { label: 'Not <i>too</i> gentle', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['too_rough'] = 1;
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rape_flashback'] = 1;
    scene.actions([
      { label: 'Hold it in', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/hard2.mp4');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
    if (((st as any).stat ?? 0)?.['rape_count'] === 1) {
      scene.text('Your arms give out from underneath you as you break down in terror; the memory of your rape explodes like a missile inside your mind. The images and sensations come flooding back to you, memories of your body being violated flashing before your eyes like a montage you can\'t turn off. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
    } else {
      if (((st as any).stat ?? 0)?.['rape_count'] < 5) {
        scene.text('Your arms give out from underneath you as you break down in terror, the memories of the several times you\'ve been raped exploding like a missile inside your mind. The images and sensations come flooding back to you, memories of your body being violated flashing before your eyes like a montage you can\'t turn off. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
      } else {
        if (((st as any).stat ?? 0)?.['rape_count'] < 10) {
          scene.text('Your arms give out from underneath you as you break down in terror, the memories of the several times you\'ve been raped exploding like a missile inside your mind. The images and sensations come flooding back to you—memories of your attackers all blurring together, combining into one horrible sensation like they\'re all violating you at once. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
        } else {
          scene.text('Your arms give out from underneath you as you break down in terror, reducing you to barely more than a shuddering mess as the trauma of your countless rapes threatens to overwhelm you. But you hide it, burying your face into the mattress and gritting your teeth as you bite down on the sheets, stifling the scream that wants to escape your lips.');
        }
      }
    }
    // TODO-QSP: dynamic text: You don''t want to ruin the mood. Besides, <<$npcdesc>> wouldn''t understand...
    scene.text(`You don't want to ruin the mood. Besides, ${((st as any).npcdesc ?? '')} wouldn't understand...`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Scream', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/hard2.mp4');
    scene.text('"<i><b> NO!</b></i> "You shriek. "<i><b>STOP! STOP! STOP! STOP! STOP!</b></i>"');
    if (((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['rape_hurt'] = 1;
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['boy_cum'] = 2;
      // TODO-QSP: dynamic text: But despite your desperate screams, <<$npcdesc>> doesn''t even slow down, instea...
      scene.text(`But despite your desperate screams, ${((st as any).npcdesc ?? '')} doesn't even slow down, instead continuing to pummel you from behind as you cry in terror.`);
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Enjoy it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnal3EnjoyDesc(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_sex', 'fuck_rough_arousal_code');
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      qspCall(st, 'sex_ev_sex', 'girl_cum_pre');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Doesn\'t feel good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    // TODO-QSP: dynamic text: <<$npcdesc>> may be going hard and fast, but to you, it doesn''t feel like anyth...
    scene.text(`${((st as any).npcdesc ?? '')} may be going hard and fast, but to you, it doesn't feel like anything at all. It doesn't hurt, nor does it feel good. You're just getting... fucked...?`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    { label: 'Fake an orgasm', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fake_orgasm_count'] = ((st as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    (st as any).fake_orgasm = ((st as any).fake_orgasm ?? 0) + (1);
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    scene.img('images/shared/sex/anal/doggy/hard1.mp4');
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((st as any).npcdesc ?? '')}'s cock with your asshole as hard as you can, dramatically shaking your shoulders, faking climax.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((st as any).npcdesc ?? '')} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant, forcing breathlessness into your voice.');
    if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
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
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    }
  } },
  ]);
  scene.build();
}

function enterAnal3_1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 3);
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['rough_fuck'] = 1;
    scene.img('images/shared/sex/anal/doggy/rough1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> suddenly grabs you by the hair, sending lances of pain through your...
    scene.text(`${((s as any).npcdesc ?? '')} suddenly grabs you by the hair, sending lances of pain through your scalp. He pulls hard, and you gasp as you're yanked backwards and slammed into his cock with the force of a nail being smashed by a hammer.`);
    // TODO-QSP: dynamic text: "Yeah <i>bitch?!</i>" <<$npcdesc>> snarls. "You want me to fuck you harder? Well...
    scene.text(`"Yeah <i>bitch?!</i>" ${((s as any).npcdesc ?? '')} snarls. "You want me to fuck you harder? Well, then take it, you fucking slut!" and starts roughly fucking you in a way completely unlike his previous mannerisms.`);
    scene.actions([
      { label: 'Enjoy it', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_rough_arousal_code');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_enjoy'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterAnal3_1Desc(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Suffer', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['rough_hurt'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as he keeps fucking you roughly. It''s all y...
    scene.text(`Tears begin to well up in your eyes as he keeps fucking you roughly. It's all you can do not to sob, but ${((st as any).npcdesc ?? '')} is unrelenting. He keeps a firm hold on your hair and pulls hard with every thrust, forcing cries of pain from your lips.`);
    scene.text('This isn\'t what you wanted...');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
    scene.img('images/shared/sex/anal/doggy/hard1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace, pounding you from behind. You throw your hips ba...
    scene.text(`${((s as any).npcdesc ?? '')} picks up the pace, pounding you from behind. You throw your hips back in joyous ecstasy, feeling greater and greater pleasure every time his hips slam into you.`);
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
    qspCall(s, 'sex_ev_sex', 'fuck_continue');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnalChangePosition(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterAnal3_2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['rough_check'] === 0) {
    qspGoto(s, 'sex_ev_anal', 'anal3');
  }
  qspCall(s, 'sex_ev_stats', 'position_tracker', 'anal', 3);
  qspCall(s, 'sex_ev_sex', 'fuck_rough_arousal_code');
  scene.img(`images/shared/sex/anal/doggy/hard${(Math.floor(Math.random() * 2) + 1)}.mp4`);
  if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'painful') {
    if (((s as any).sex_ev ?? 0)?.['anal_virgin'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take gasping breaths as <<$npcdesc>> keeps pounding his cock into you from b...
        scene.text(`You take gasping breaths as ${((s as any).npcdesc ?? '')} keeps pounding his cock into you from behind. Somehow, the stabbing pain between your legs is starting to go away. It seems your virgin asshole is starting to adjust to getting jackhammered.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips colliding with your ass. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let a little pain cause you to asshole out of your first time and clench the bedsheets tight with both hands.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you from behind, cl...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc ?? '')} keeps slamming into you from behind, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great, and wet drops roll down your cheeks and into the mattress as ${((s as any).npcdesc ?? '')} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you from behind. It hurts s...
              scene.text(`You sob openly as ${((s as any).npcdesc ?? '')} smashes his cock into you from behind. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he drives you straight into bed with his thrusts.`);
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_pain'] = 0;
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
        // TODO-QSP: dynamic text: You take gasping breaths as <<$npcdesc>> keeps pounding his cock into you from b...
        scene.text(`You take gasping breaths as ${((s as any).npcdesc ?? '')} keeps pounding his cock into you from behind. You focus hard, trying with all your might to squeeze some kind of pleasure from this. Anything to make the pain go away. And somehow, after several minutes, it does. ${((s as any).npcdesc ?? '')} continues to pound your ass, but suddenly you feel able to tolerate it, even if it doesn't feel very good either.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 2) {
          scene.text('"<i>Nn-! Nngh-! Ngh-!</i>"');
          // TODO-QSP: dynamic text: You squeeze your eyes tight as small squeaks of pain escape your lips in time wi...
          scene.text(`You squeeze your eyes tight as small squeaks of pain escape your lips in time with ${((s as any).npcdesc ?? '')}'s hips colliding with your ass. The agony induced by his rough fucking is nearly unbearable, but you're pridefully determined not to let the pain show, clenching the bedsheets tight with both hands to keep from crying out loud.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 3) {
            // TODO-QSP: dynamic text: You whimper pathetically as <<$npcdesc>> keeps slamming into you from behind, cl...
            scene.text(`You whimper pathetically as ${((s as any).npcdesc ?? '')} keeps slamming into you from behind, clenching your teeth as hard as you can, trying with all your might to prevent yourself from bursting into tears. Despite your best efforts, the pain is too great, and tiny drops of moisture leak from your eyes and onto the mattress as ${((s as any).npcdesc ?? '')} continues to pound you.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === 4) {
              // TODO-QSP: dynamic text: You sob openly as <<$npcdesc>> smashes his cock into you from behind. It hurts s...
              scene.text(`You sob openly as ${((s as any).npcdesc ?? '')} smashes his cock into you from behind. It hurts so much you think you're going to die, but you can't manage to tell him to stop. The only thing you can do is cry wordlessly as he pounds you straight into the bed with his thrusts.`);
            }
          }
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
      // TODO-QSP: dynamic text: Nevertheless, you move your hips in time with his, throwing them back to meet <<...
      scene.text(`Nevertheless, you move your hips in time with his, throwing them back to meet ${((s as any).npcdesc ?? '')}'s demolishing thrusts and try to ride the wave, hoping he'll come quickly.`);
    }
  } else {
    if (((s as any).sex_ev ?? 0)?.['fuck_enjoyment'] === 'unsatisfying') {
      if (((s as any).sex_ev ?? 0)?.['fuck_pain'] === -1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
        (s as any).orgasm_or = '';
        // TODO-QSP: dynamic text: Your breath hitches as <<$npcdesc>> continues to pound your ass from behind. You...
        scene.text(`Your breath hitches as ${((s as any).npcdesc ?? '')} continues to pound your ass from behind. You aren't sure what changed, but it's like your body is coming alive. His cock stretches your walls; it's so <i>deep</i> inside you, and even now you can feel yourself get wetter and wetter, slicking up his cock and making it hammer you harder and harder with greater satisfaction every time.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
          ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
          // TODO-QSP: dynamic text: You focus on <<$npcdesc>>''s cock as he pounds you, clenching your abdomen and t...
          scene.text(`You focus on ${((s as any).npcdesc ?? '')}'s cock as he pounds you, clenching your abdomen and throwing your hips back in time with his, trying to squeeze your ass tight around him to make him come faster.`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
            scene.text('"<i>Mm-! Mmm-! Mm-! Mmm-!</i>"');
            // TODO-QSP: dynamic text: You grunt in time with <<$npcdesc>>''s thrusts as he continues to pound his cock...
            scene.text(`You grunt in time with ${((s as any).npcdesc ?? '')}'s thrusts as he continues to pound his cock into you from behind. His manhood hammers deep inside you, slamming into you in a way that doesn't exactly feel "good," but it doesn't feel bad either.`);
          } else {
            if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
              scene.text('"<i>Ah~! Ahh~! Ahhh~!</i>"');
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to pound his cock between your legs. I...
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to pound his cock between your legs. It still basically feels numb to your ass other than the slamming of his hips against yours, but you don't want him to feel bad about it either, so you play along, trying to pretend it feels good.`);
            } else {
              if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal3_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
                // TODO-QSP: dynamic text: All your dirty talk is just that: talk. <<$npcdesc>> continues to relentlessly s...
                scene.text(`All your dirty talk is just that: talk. ${((s as any).npcdesc ?? '')} continues to relentlessly smash your ass with his cock, and you honestly can't say it feels very good. But you don't want ${((s as any).npcdesc ?? '')} to feel bad about it either, so you play along, pretending otherwise.`);
              }
            }
          }
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['cum_speed_up'] === 1) {
        ((s as any).sex_ev = (s as any).sex_ev ?? {})['cum_speed_up'] = 0;
        scene.text('"<i>Hah~! Hahh~! Ahh~! Hahh~!</i>"');
        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> pounds you from behind. Your assho...
        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} pounds you from behind. Your asshole almost involuntarily tightens up, desperately throwing your hips back to meet ${((s as any).npcdesc ?? '')}'s thrusts. By the way his breathing changes, you think you're giving just as good as you're getting as you feel arousal dribble down your thighs.`);
      } else {
        if (((s as any).sex_ev ?? 0)?.['moan'] >= 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal3_2MoanDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).sex_ev ?? 0)?.['dirty_talk'] !== '') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal3_2DirtyTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterAnal3_2SensationDesc(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterAnalCreampieMenu(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['prostitution'] === 1  &&  ((s as any).npc_rule_no_creampies ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['p_creampie_bonus'] === 0) {
    scene.actions([
      { label: 'Creampies cost extra', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['p_creampie_bonus'] = 1;
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['prostitution_bonus'] = ((st as any).sex_ev['prostitution_bonus'] ?? 0) + (1000);
    scene.text('"Finishing inside costs extra," you smirk teasingly.');
    scene.text('"Ungh~! Done!"');
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t even hesitate and thrusts balls deep into you with a loud ...
    scene.text(`${((st as any).npcdesc ?? '')} doesn't even hesitate and thrusts balls deep into you with a loud groan.`);
    scene.actions([
      { label: 'Get creampied', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Creampie', handler: (st: GameState) => {
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)  ||  ((st as any).pcs_horny ?? 0) > 90) {
      if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        scene.actions([
          { label: 'Come together', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['he_ask_creampie_yes'] = 1;
  } },
        ]);
      } else {
        scene.actions([
          { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
        ]);
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
        if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).sex_ev ?? 0)?.['safe_day'] + ((st as any).sex_ev ?? 0)?.['probably_safe_day'] === 0) {
          if (((st as any).birth_control ?? 0)?.['think_safe'] === 1) {
            scene.actions([
              { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    if (((st as any).tabletkishot ?? 0) > 0) {
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
            if (((st as any).stat ?? 0)?.['safe_day'] === 1) {
              scene.actions([
                { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"It\'s a safe day," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
              ]);
            } else {
              if (((st as any).stat ?? 0)?.['probably_safe_day'] === 1) {
                scene.actions([
                  { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['probably_safe_day'] = 1;
    scene.text('"It\'s probably fine today," you smile at him. "Go ahead."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((st as any).sex_ev ?? 0)?.['safe_day'] === 0  &&  ((st as any).sex_ev ?? 0)?.['probably_safe_day'] === 0  &&  ((st as any).sex_ev ?? 0)?.['danger_day'] === 0) {
                  scene.actions([
                    { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['safe_day'] = 1;
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
    if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"Okay," you nod. "Go ahead."');
    } else {
      scene.text('"Okay," you manage to grunt out. "Go ahead."');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Allow him (reluctant)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['reluctant_creampie'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
      scene.text('"If you really want to, I guess," you say somewhat hesitantly.');
    } else {
      scene.text('"If you really want to, I guess," you grunt out between thrusts.');
    }
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
          { label: 'Allow him (disgust)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['unhappy_creampie'] = 1;
    if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
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
        if (((st as any).sex_ev ?? 0)?.['cum_where'] === 1) {
          if (((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] + ((st as any).sex_ev ?? 0)?.['safe_day'] + ((st as any).sex_ev ?? 0)?.['probably_safe_day'] === 0) {
            if (((st as any).birth_control ?? 0)?.['think_safe'] === 1  &&  ((st as any).npc_know_bc ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
              scene.actions([
                { label: 'I\'m on birth control', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
    if (((st as any).tabletkishot ?? 0) > 0) {
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
              if (((st as any).stat ?? 0)?.['safe_day'] === 1) {
                scene.actions([
                  { label: 'It\'s a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"You can come inside me," you pant. "It\'s a safe day."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                ]);
              } else {
                if (((st as any).stat ?? 0)?.['probably_safe_day'] === 1) {
                  scene.actions([
                    { label: 'It\'s probably a safe day', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['probably_safe_day'] = 1;
    scene.text('"You can come inside me," you pant. "It should be safe today."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                  ]);
                } else {
                  if (((st as any).stat ?? 0)?.['dangerous_day'] === 1  &&  ((st as any).sex_ev ?? 0)?.['danger_day'] === 0) {
                    scene.actions([
                      { label: 'It\'s a safe day (lie)', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['safe_day'] = 1;
    scene.text('"It\'s a safe day," you say with a deceitful smile. "You can come inside me."');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_cum', 'cum_inside'] },
    ]);
  } },
                      { label: 'I\'m on birth control (lie)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_stats', 'birth_control_know');
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"It\'s okay," you murmur. "You can come inside."');
      } else {
        scene.text('"It\'s-! Okay!" you grunt out between poundings. "You can-! Come inside-!"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
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
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['creampie_ask'] = 1;
    if (((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 1) {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
        scene.text('"Do it," you smile. "Fill me up."');
      } else {
        scene.text('"Do it!" you cry. "Fill me up!"');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['speed'] !== 3) {
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
    if ((((st as any).pcs_horny ?? 0) > 90  ||  ((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0))  &&  ((st as any).sex_ev ?? 0)?.['he_ask_creampie'] === 0) {
      scene.actions([
        { label: '"Let\'s come together"', handler: (st: GameState) => {
    // TODO-QSP: sex_ev['creampie_ask'] = 1
    qspCall(st, 'sex_ev_cum', 'cum_together');
  } },
      ]);
    }
    if (((st as any).sex_ev ?? 0)?.['position'] === 'miss'  ||  ((st as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.actions([
        { label: 'Make him come inside you', goto: ['sex_ev_cum', 'cum_force'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterAnal1StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> fucks your ass slowly but steadily, each time methodically drawing ...
    scene.text(`${((s as any).npcdesc ?? '')} fucks your ass slowly but steadily, each time methodically drawing himself all the way out before driving his tiny dick balls deep inside you.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> fucks your ass slowly but steadily, each time methodically drawing ...
      scene.text(`${((s as any).npcdesc ?? '')} fucks your ass slowly but steadily, each time methodically drawing himself all the way out before driving his fat choke balls deep inside you.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> fucks your ass slowly but steadily, each time methodically drawing ...
        scene.text(`${((s as any).npcdesc ?? '')} fucks your ass slowly but steadily, each time methodically drawing himself all the way out before driving his skinny dick balls deep inside you.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> fucks your ass slowly but steadily, each time methodically drawing ...
          scene.text(`${((s as any).npcdesc ?? '')} fucks your ass slowly but steadily, each time methodically drawing himself all the way out before driving his dick balls deep inside you.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).agape ?? 0) < 2) {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before stretching your ass out with his thick cock when he drives it balls deep inside you again.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
              scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out just long enough for your ass to feel the empty absence of his thick cock before he drives it balls deep inside you again.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> fucks your ass slowly but steadily, each time methodically drawing ...
              scene.text(`${((s as any).npcdesc ?? '')} fucks your ass slowly but steadily, each time methodically drawing himself all the way out before driving his long dick back in, barely able to fit its generous length inside you.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out just long enough for your ass to feel the absence of his huge cock before driving back in to fill you up, barely able to fit its entirety inside you.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).agape ?? 0) < 2) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before splitting your tight asshole again, barely able to fit the entirety of his enormous cock inside you.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before stretching your well-used asshole again, barely able to fit the entirety of his enormous cock inside you.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                    scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out of your puckering asshole before forcing as much of his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock as he can fit inside you, and still leaving shaft to spare.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).agape ?? 0) < 2) {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before plunging back in, stretching your tight asshole to the limits as he's unable to fit the entire length of his gigantic cock inside you.`);
                      } else {
                        // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                        scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out of your puckering asshole before plunging his gigantic cock back in, just barely able to fit it inside you.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).agape ?? 0) < 2) {
                          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                          scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before forcing the monstrous size of his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm into your tight asshole, threatening to split you in half each time he fails to fit its length inside you.`);
                        } else {
                          // TODO-QSP: dynamic text: <<$npcdesc>> fucks you slowly but steadily, each time methodically drawing himse...
                          scene.text(`${((s as any).npcdesc ?? '')} fucks you slowly but steadily, each time methodically drawing himself all the way out before forcing the monstrous size of his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm back into your ass. You're no anal virgin, but this is ridiculous! And ${((s as any).npcdesc ?? '')} 's cock threatens to split you in half each time he fails to fit its length inside you.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal1EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his dick thrusting into your ass...
    scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his dick thrusting into your ass. There's something about anal that tightens your throat in the most delicious way, even with a dick as small as ${((s as any).npcdesc ?? '')}'s. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat and your pussy salivate beneath the pumping of his cock.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his dick thrusting into your ass...
      scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his dick thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat and your pussy salivate beneath the pumping of his cock. ${((s as any).npcdesc ?? '')} doesn't have much length to him, but the eroticism of anal more than makes up for that as he plunges his fat chode into you again and again.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his skinny dick thrusting into y...
        scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his skinny dick thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat and your pussy salivate beneath the pumping of his skinny cock.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his dick thrusting into your ass...
          scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his dick thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat and your pussy salivate beneath the pumping of his cock.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).agape ?? 0) < 2) {
              // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting into your ass...
              scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat and your pussy salivate. And his cock is so thick, you feel ready to split apart when his length is inside you but feel empty and vacant whenever he draws it back out.`);
            } else {
              // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting into your ass...
              scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat and your pussy salivate. And his cock is so thick, it fills you completely each time he pushes into you down to the hilt.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting into your ass...
              scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat. Plus, with a nice long cock like ${((s as any).npcdesc ?? '')}'s, it goes deep inside you, massaging the back of your pussy from the other side of the wall.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting into your ass...
                scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat. Plus, ${((s as any).npcdesc ?? '')}'s cock is huge. Not only does it fill you completely, but it hits deep inside you, massaging the back of your pussy from the other side of the wall.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting into your ass...
                  scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat. Plus, ${((s as any).npcdesc ?? '')}'s cock is enormous. Your ass struggles to accommodate its massive girth, and its length hits deep inside you, massaging the back of your pussy from the other side of the wall.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You moan as <<$npcdesc>> takes you from behind, his cock thrusting into your ass...
                    scene.text(`You moan as ${((s as any).npcdesc ?? '')} takes you from behind, his cock thrusting into your ass. There's something about anal that tightens your throat in the most delicious way. The feeling of <i>pushed</i> and <i>pulled</i> inside out makes your entire body flush with heat. And with a dick as long as ${((s as any).npcdesc ?? '')}'s, it reaches the deepest part of you, massaging the back of your pussy from the other side of the wall.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      if (((s as any).agape ?? 0) < 2) {
                        // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust of his gigantic...
                        scene.text(`You groan beneath ${((s as any).npcdesc ?? '')}, getting wetter with every thrust of his gigantic cock into your ass. It fills you to the brim and then some, forcing the breath from your lungs and turning your asshole inside out with his sheer size in the most pleasurably painful way possible.`);
                      } else {
                        // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>>, getting wetter with every thrust of his gigantic...
                        scene.text(`You groan beneath ${((s as any).npcdesc ?? '')}, getting wetter with every thrust of his gigantic cock into your ass. It fills you to the brim, forcing the breath from your lungs and turning your asshole inside out with his sheer size in the most pleasurably painful way possible.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        if (((s as any).agape ?? 0) < 2) {
                          // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>> as his monstrous cock splits your asscheeks in tw...
                          scene.text(`You groan beneath ${((s as any).npcdesc ?? '')} as his monstrous cock splits your asscheeks in two. He's way too big for you in both girth and length, pummeling your insides, turning them inside out. The pain makes your eyes water, and you are <i><b>loving every second of it. </b></i>`);
                        } else {
                          // TODO-QSP: dynamic text: You groan beneath <<$npcdesc>> as his monstrous cock splits your asscheeks in tw...
                          scene.text(`You groan beneath ${((s as any).npcdesc ?? '')} as his monstrous cock splits your asscheeks in two. He's destroying your ass with size alone, pummeling your insides, turning them inside out. The pain makes your eyes water, and you are <i><b>loving every second of it. </b></i>`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal1_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only the tip of his tiny dick is still inside of you before smoothly pushing himself back into your ass, pressing his hips against your cheeks.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
      scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his thick chode back into your ass, pressing his hips against your cheeks.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
        scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his skinny dick back into your ass, pressing his hips against your cheeks.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
          scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your ass, pressing his hips against your cheeks.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            if (((s as any).agape ?? 0) < 2) {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
              scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his cock back into your tight ass, his thick girth forcing gasps from your mouth.`);
            } else {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
              scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his cock back into your ass, his thick girth filling you from wall to wall.`);
            }
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
              scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your ass, filling you from end to end with his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your ass, eliciting mews of pleasure as his huge shaft fills you from end to end.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  if (((s as any).pcs_ass ?? 0) <= 15) {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you, eliciting groans of pleasure as the length and girth of his enormous shaft fills you up, stretching your tight ass in every conceivable manner.`);
                  } else {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into your ass, eliciting moans of pleasure as the length and girth of his enormous shaft fills you.`);
                  }
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you. His manhood is so insanely long that the time between those two moments is measured in seconds, and goosebumps wash over your skin as you feel each centimeter of his magnificent length slide in until you feel like it's going to pop out of your mouth.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                      scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you. His manhood is so insanely long that the time between those two moments is measured in seconds, and goosebumps wash over your skin as you feel each centimeter of his gigantic cock slide in until you're full so of dick that it feels like it's going to pop out your mouth.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> slows down, fucking you more gently, pulling out of you until only ...
                        scene.text(`${((s as any).npcdesc ?? '')} slows down, fucking you more gently, pulling out of you until only his tip is still inside of you before smoothly pushing his dick back into you. His manhood is so insanely huge that the time between those two moments is measured in seconds, and goosebumps wash over your skin as you feel each centimeter of his monstrous cock slide in, forcing your walls to stretch to accommodate it, pumping you so full of dick that it feels like it's going to pop out your mouth.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal1_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    scene.text('"<i>Mm~! Mn~! Mmm~! Nnn~!</i>"');
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you. Slowly. Gently. His tin...
      scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you. Slowly. Gently. His tiny dick is driving as deep as it can inside you, finding the hidden secrets of your anus that make your pussy weep with every thrust.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you. Slowly. Gently. His fat...
        scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you. Slowly. Gently. His fat chode driving as deep as it can inside you, stretching your anus and making your pussy weep with every thrust.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you. Slowly. Gently. His ski...
          scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you. Slowly. Gently. His skinny dick is driving as deep as it can inside you, finding the hidden secrets of your anus that make your pussy weep with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you. Slowly. Gently. His coc...
            scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you. Slowly. Gently. His cock is driving deep inside you, filling your anus and making your pussy weep with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              if (((s as any).agape ?? 0) < 2) {
                // TODO-QSP: dynamic text: Tiny mews escape your lips as <<$npcdesc>> continues to assfuck you with his thi...
                scene.text(`Tiny mews escape your lips as ${((s as any).npcdesc ?? '')} continues to assfuck you with his thick cock. Slowly. Gently. He drives it deep inside you, stretching your tight anus with its exceptional girth, making you wetter and wetter with every thrust.`);
              } else {
                // TODO-QSP: dynamic text: Soft moans escape your lips as <<$npcdesc>> continues to assfuck you with his th...
                scene.text(`Soft moans escape your lips as ${((s as any).npcdesc ?? '')} continues to assfuck you with his thick cock. Slowly. Gently. He drives it deep inside you, filling you with its exceptional girth, making you wetter and wetter with every thrust.`);
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you. Slowly. Gently. His lon...
                scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you. Slowly. Gently. His long cock driving deep inside you until it's plunged to the hilt; its presence felt even in the deepest parts of your anus, making you wetter and wetter with every thrust.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you. Slowly. Gently. His hug...
                  scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you. Slowly. Gently. His huge cock driving deep inside you until it's plunged to the hilt; its presence felt even in the deepest parts of your intestines, filling you, making you wetter and wetter with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    if (((s as any).pcs_ass ?? 0) <= 15) {
                      // TODO-QSP: dynamic text: Tiny mews escape your lips as <<$npcdesc>> continues to assfuck you with his eno...
                      scene.text(`Tiny mews escape your lips as ${((s as any).npcdesc ?? '')} continues to assfuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your intestines even as it <i>stretches</i> your tight anus to accommodate his exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                    } else {
                      // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you with his enormous cock. ...
                      scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your intestines even as it <i>stretches</i> your anus to accommodate its exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you with his exceptionally l...
                      scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you with his exceptionally lengthy cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing groans from your lips as your innards feel like they're being turned inside out. Pain never hurt so good.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: You groan softly as <<$npcdesc>> continues to assfuck you with his gigantic cock...
                        scene.text(`You groan softly as ${((s as any).npcdesc ?? '')} continues to assfuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you, <i>filling</i> you until it's plunged to the hilt, forcing groans from your lips as your insides feel like they're being turned inside out. Pain never hurt so good.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: You mew softly as <<$npcdesc>> continues to assfuck you with his gigantic cock. ...
                          scene.text(`You mew softly as ${((s as any).npcdesc ?? '')} continues to assfuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing whimpers from your lips as his insane length makes your innards feel like they're being turned inside out and his absurd girth threatens to tear you in half. Pain never hurt so good.`);
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
      scene.text('"<i>Ahh! Yes! Ahh! Ahh! Ah~!</i>"');
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His tiny ...
        scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His tiny dick is driving as deep as it can inside you, finding the hidden secrets of your anus that make your pussy weep with every thrust.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His fat c...
          scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His fat chode driving as deep as it can inside you, stretching your anus and making your pussy weep with every thrust.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His skinn...
            scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His skinny dick is driving as deep as it can inside you, finding the hidden secrets of your anus that make your pussy weep with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His cock ...
              scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His cock is driving deep inside you, filling your anus and making your pussy weep with every thrust.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                if (((s as any).agape ?? 0) < 2) {
                  // TODO-QSP: dynamic text: Loud groans escape your lips as <<$npcdesc>> continues to fuck you with his thic...
                  scene.text(`Loud groans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his thick cock. Slowly. Gently. He drives it deep inside you, stretching your tight anus with its exceptional girth, making you wetter and wetter with every thrust.`);
                } else {
                  // TODO-QSP: dynamic text: Loud moans escape your lips as <<$npcdesc>> continues to fuck you with his thick...
                  scene.text(`Loud moans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his thick cock. Slowly. Gently. He drives it deep inside you, filling you with its exceptional girth, making you wetter and wetter with every thrust.`);
                }
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His long ...
                  scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His long cock driving deep inside you until it's plunged to the hilt; its presence felt even in the deepest parts of your anus, making you wetter and wetter with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you. Slowly. Gently. His huge ...
                    scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you. Slowly. Gently. His huge cock driving deep inside you until it's plunged to the hilt; its presence felt even in the deepest parts of your intestines, filling you, making you wetter and wetter with every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      if (((s as any).pcs_ass ?? 0) <= 15) {
                        // TODO-QSP: dynamic text: Loud groans escape your lips as <<$npcdesc>> continues to fuck you with his enor...
                        scene.text(`Loud groans escape your lips as ${((s as any).npcdesc ?? '')} continues to fuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your intestines even as it <i>stretches</i> your tight anus to accommodate his exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                      } else {
                        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you with his enormous cock. Sl...
                        scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his enormous cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, making its presence felt in the deepest parts of your intestines even as it <i>stretches</i> your anus to accommodate its exceptional girth. But you love it, becoming wetter and wetter with every thrust.`);
                      }
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you with his exceptionally len...
                        scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his exceptionally lengthy cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing groans from your lips as your innards feel like they're being turned inside out. Pain never hurt so good.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: You groan loudly as <<$npcdesc>> continues to fuck you with his gigantic cock.Sl...
                          scene.text(`You groan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his gigantic cock.Slowly. Gently. He drives it deep inside you, <i>filling</i> you until it's plunged to the hilt, forcing groans from your lips as your insides feel like they're being turned inside out. Pain never hurt so good.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: You moan loudly as <<$npcdesc>> continues to fuck you with his gigantic cock. Sl...
                            scene.text(`You moan loudly as ${((s as any).npcdesc ?? '')} continues to fuck you with his gigantic cock. Slowly. Gently. He drives it deep inside you until it's plunged to the hilt, forcing whimpers from your lips as his insane length makes your innards feel like they're being turned inside out and his absurd girth threatens to tear you in half. Pain never hurt so good.`);
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal1_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: "Ah~! Yes~! Just like that~!" You moan, your voice a hoarse with arousal as <<$n...
      scene.text(`"Ah~! Yes~! Just like that~!" You moan, your voice a hoarse with arousal as ${((s as any).npcdesc ?? '')} does an amazing job fucking you with his tiny cock. "You're so good! Right there~! Right there!"`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: "Ah~! Yes~! Just like that~!" You moan, your voice a hoarse with arousal as <<$n...
        scene.text(`"Ah~! Yes~! Just like that~!" You moan, your voice a hoarse with arousal as ${((s as any).npcdesc ?? '')} does an amazing job fucking you with his stubby cock. "Fuck me with your fat chop!"`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: "Ah~! Yes~! Just like that~!" You moan, your voice a hoarse with arousal as <<$n...
          scene.text(`"Ah~! Yes~! Just like that~!" You moan, your voice a hoarse with arousal as ${((s as any).npcdesc ?? '')} does an amazing job fucking you with his skinny dick. "You're so good! Right there! Right there~!"`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            scene.text('"Ah~! Yes~! Just like that~!" You moan, your voice hoarse with arousal. "You\'re amazing! I\'m so wet."');
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              if (((s as any).agape ?? 0) < 2) {
                scene.text('"Ah~! Yes~! Just like that~!" You moan, your voice hoarse with arousal. "Ungh~! You\'re stretching me out! It\'s so good! I\'m so wet."');
              } else {
                scene.text('"Ah~! Yes~! Just like that~!" You moan, your voice hoarse with arousal. "Ungh~! It feels so good~! Fuck me with your big cock!"');
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                scene.text('"Ungh~!" you groan, your voice hoarse with arousal. "You\'re so deep! Nngh~! Right there! Right there~!"');
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  scene.text('"Ungh~!" you groan, your voice hoarse with arousal. "You\'re so big! Nngh~! Right there! Right there~!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    scene.text('"Ungh~!" you groan, your voice hoarse with arousal. "You\'re so... fucking big! Don\'t stop!"');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      scene.text('"Ungh~!" you groan, your voice hoarse with arousal. "Oh, fuck!</i> I feel you in my stomach!"');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        scene.text('"Ungh~! <i>Fuck!</i>" you groan, your voice hoarse with arousal. "Oh, <i>fuck! </i> You\'re so <i>fucking big! You\'re stretching me out~! I can feel you in my stomach!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          scene.text('"Ungh~! <i>Fuck!</i>" you groan, your voice hoarse with arousal. "Oh, <i>fuck! </i> You\'re so... fucking big! You\'re tearing me in half! Don\'t stop~!"');
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 60) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Yes~! Fuck~!" You moan softly, barely louder than a whisper. "You\'re going to make me come~!"');
        } else {
          scene.text('"Oh <i>fuck</i>~!" you moan. "I\'m going to come~!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! I\'m so wet," you mew softly. "You feel so good inside me!"');
        } else {
          scene.text('"Ah~! That feels so good," you moan quietly. "I\'m going to go crazy!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Just like that~!" you moan. "You\'re so good~! Don\'t stop~! Don\'t stop~!"');
        } else {
          scene.text('"I love the way you fuck me~!" you moan hoarsely. "Keep going~!"');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he moves his cock inside you with...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he moves his cock inside you with tantalizing slowness.`);
            scene.text('"Yours~!" you whimper, squirming beneath him.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Fuck my sloppy pussy~!" you moan softly, barely louder than a whisper. "Make this dirty little slut cum all over your cock~!"');
              } else {
                scene.text('"Oh sh*t! Imgonnacum~!" you moan. "You\'re going to make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck my dirty cunt~!" you mew softly. "Fuck me like the filthy whore I am~!"');
              } else {
                scene.text('"Make this pussy yours~!" you moan. "Own this pussy with your cock~!"');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal1_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: The angle is perfect</i>, and <<$npcdesc>> is rubbing your g-spot through your i...
    scene.text(`The angle is perfect</i>, and ${((s as any).npcdesc ?? '')} is rubbing your g-spot through your intestines with his tiny dick. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: The angle is perfect</i>, and <<$npcdesc>> is stretching your lips out just righ...
      scene.text(`The angle is perfect</i>, and ${((s as any).npcdesc ?? '')} is stretching your lips out just right while the tip of his fat chode rubs your g-spot through your intestines. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: The angle is perfect</i>, and <<$npcdesc>> is rubbing your g-spot through your i...
        scene.text(`The angle is perfect</i>, and ${((s as any).npcdesc ?? '')} is rubbing your g-spot through your intestines with his skinny dick. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: The angle is perfect</i>, and <<$npcdesc>> fills you up just right with his dick...
          scene.text(`The angle is perfect</i>, and ${((s as any).npcdesc ?? '')} fills you up just right with his dick, reaching deep inside you with his dick. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: The angle is perfect</i>, and <<$npcdesc>> fills you up to the brim with his thi...
            scene.text(`The angle is perfect</i>, and ${((s as any).npcdesc ?? '')} fills you up to the brim with his thick cock, stretching your walls and reaching deep inside you. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: The angle is perfect</i>, and <<$npcdesc>> rubbing your g-spot through your inte...
              scene.text(`The angle is perfect</i>, and ${((s as any).npcdesc ?? '')} rubbing your g-spot through your intestines with every thrust of his lengthy manhood, reaching depths inside you rarely found by cocks of shorter length. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: The angle is perfect, and <<$npcdesc>> fills you completely with his huge manhoo...
                scene.text(`The angle is perfect, and ${((s as any).npcdesc ?? '')} fills you completely with his huge manhood and reaching depths inside you rarely found by cocks of shorter length. You can feel your wetness spreading, running down your thighs, and heat radiating from your sex and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: The angle is perfect, and <<$npcdesc>> stuffs you to your limits with his enormo...
                  scene.text(`The angle is perfect, and ${((s as any).npcdesc ?? '')} stuffs you to your limits with his enormous cock. Both his length and girth are exceptional, and you can feel it straining inside your ass, stretching you in every way. Your wetness spreads, running down your thighs. Heat radiates from yours and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: The angle is perfect, and <<$npcdesc>> bumps into your intestines with every thr...
                    scene.text(`The angle is perfect, and ${((s as any).npcdesc ?? '')} bumps into your intestines with every thrust of his ridiculously long cock. Collisions turn into soreness; soreness turns into satisfaction; you can feel him in your stomach. <i>And its so good</i>. Wetness spreads, running down your thighs. Heat radiates from yours and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> fills your ass up and then some, b...
                      scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} fills your ass up and then some, bumping into your intestines with every thrust of his gigantic cock. Collisions turn into soreness; soreness turns into satisfaction; you can feel him in your stomach. <i>And its so good</i>. Wetness spreads, running down your thighs. Heat radiates from yours and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: The angle is <i>perfect</i>, and <<$npcdesc>> fills your ass up and then some, b...
                        scene.text(`The angle is <i>perfect</i>, and ${((s as any).npcdesc ?? '')} fills your ass up and then some, bumping into your intestines and threatening to tear you in half with every thrust of his monstrous cock. Your ass feels stretched to its limits, and your intestines feels like it's being gently punched by a baseball bat. And it feels so good</i>. Your wetness spreads, running down your thighs. Heat radiates from yours and from his. You pant softly as you sink further and further into the feelings of your own arousal.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal2StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
    scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, unceasingly thrusting into you with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
      scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, unceasingly thrusting into you with his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
        scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, unceasingly thrusting into you with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
          scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room with every thrust, and he drives his cock deep as deep as he can every time.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
            scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slaps echo around the room as his hips collide with your ass, the sloppy squelching sounds of your ass fucked by his thick shaft.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
              scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his long, dick hammers deep inside you. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your ass squelching around his long shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick hammers deep inside you. Wet slaps echo around the room as his hips collide with your ass, the huge size of his cock forcing squelches from your chest.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                  scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, and his enormous dick fills you to the brim. Wet slaps echo around the room as his hips collide with your ass, forcing loud squelches from your sphincter with his long girthy cock.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                    scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust and his dick batters your insides with its exceptional length. Wet slaps echo around the room as his hips collide with your ass, the sloppy sounds of your ass squelching around his lengthy shaft.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                      scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust, and his gigantic dick fills you to the brim. Sloppy wet slaps echo around the room as ${((s as any).npcdesc ?? '')} batters your ass with his long, hard cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> drives into you at a steady pace, hard enough that your breasts jig...
                        scene.text(`${((s as any).npcdesc ?? '')} drives into you at a steady pace, hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your asshole to strain and stretch around his long, girthy shaft. Sloppy wet slaps echo around the room as ${((s as any).npcdesc ?? '')} repeatedly batters your ass with his monstrous cock.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal2EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, his tiny dick wiggling around i...
    scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, his tiny dick wiggling around inside you but more than made up for by his enthusiasm. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, his thick chode stretching the ...
      scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, his thick chode stretching the opening of your asshole with his balls deep thrusts. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, his skinny dick slipping in and...
        scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, his skinny dick slipping in and out of you with speed. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, thrusting his dick balls deep i...
          scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, thrusting his dick balls deep into you from behind over and over again. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his thick cock balls d...
            scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his thick cock balls deep into you from behind over and over again. Your asshole stretches with every thrust, and waves of pleasure reverberate through your body every time his hips collide with your ass.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his lengthy cock balls...
              scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his lengthy cock balls deep into you from behind over and over again. He's so deep inside you, and waves of pleasure reverberate through your body every time his hips collide with your ass.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his huge cock balls de...
                scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his huge cock balls deep into you from behind over and over again. He's so <i>deep inside you, filling you from end to end with cock, and waves of pleasure reverberate through your body every time his hips collide with your ass.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his huge cock balls de...
                  scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his huge cock balls deep into you from behind over and over again. He's so <i>deep</i>, so <i>big</i> inside you, filling you from end to end with his length and stretching you to your limits with his magnificent girth. Waves of pleasure reverberate through your body every time his hips collide with your ass.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging the great length of hi...
                    scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging the great length of his cock balls deep into you from behind over and over again. He's so deep that it hurts, but that only makes you even wetter as waves of pleasure reverberate through your body every time his hips collide with your ass.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging his gigantic cock ball...
                      scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging his gigantic cock balls deep into you from behind over and over again. He stuffs you with dick, so deep that it hurts, but that only makes you even wetter as waves of pleasure reverberate through your body every time his hips collide with your ass.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You groan in pleasure as <<$npcdesc>> fucks you, plunging the his monstrous cock...
                        scene.text(`You groan in pleasure as ${((s as any).npcdesc ?? '')} fucks you, plunging the his monstrous cock balls deep into you from behind over and over again. He stuffs you with dick, so deep that it hurts, so thick that you feel ready to tear in half, but that only makes you even wetter as waves of pleasure reverberate through your body every time his hips collide with your ass.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal2_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'anal1') {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
      scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')} 's hips crash into yours, unceasingly thrusting into you with his tiny dick. Wet slapping noises sound alongside the clapping of your cheeks, and you sigh in deep satisfaction.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
        scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')} 's hips crash into yours, unceasingly thrusting into you with his thick chode. Wet slapping noises sound alongside the clapping of your cheeks, and you sigh in deep satisfaction.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
          scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} thrusts unceasingly into you with his skinny dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
            scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} drives his cock deep as deep as he can every time.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
              scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy squelching of your asshole getting reamed by his thick shaft.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his long shaft.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                  scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s dick hammers deep inside you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, the huge size of his cock forcing sloppy wet squelching from your dripping cough.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                    scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s enormous dick stretches you to the limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')} His hips crash into your ass, the enormous size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                      scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, and his dick batters your insides with its exceptional length. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his lengthy shaft.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                        scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust, and his gigantic dick fills you to your absolute limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummeling your insides and forcing sloppy wet squelching from your dripping cunt.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: With the new and improved pace, you find yourself enjoying it a lot more. It''s ...
                          scene.text(`With the new and improved pace, you find yourself enjoying it a lot more. It's hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your asshole to strain and stretch around his monstrously long and girthy shaft. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummeling your insides and forcing sloppy wet squelching from your dripping cunt.`);
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['pos_speed'] === 'anal3') {
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
        scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')} 's hips crash into yours, unceasingly thrusting into you with his tiny dick. Wet slapping noises sound alongside the clapping of your cheeks, and you sigh in deep satisfaction.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
          scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. ${((s as any).npcdesc ?? '')} 's hips crash into yours, unceasingly thrusting into you with his thick chode. Wet slapping noises sound alongside the clapping of your cheeks, and you sigh in deep satisfaction.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
            scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} thrusts unceasingly into you with his skinny dick.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
              scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Wet slapping noises sound alongside the clapping of your cheeks as ${((s as any).npcdesc ?? '')} drives his cock deep as deep as he can every time.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy squelching of your asshole getting reamed by his thick shaft.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                  scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, but not so hard that he's jackhammering you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his long shaft.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                    scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s dick hammers deep inside you. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, the huge size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                      scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust and ${((s as any).npcdesc ?? '')}'s enormous dick stretches you to the limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')} His hips crash into your ass, the enormous size of his cock forcing sloppy wet squelching from your dripping cunt.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                        scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, and his dick batters your insides with its exceptional length. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, accompanied by the sloppy wet squelching of your dripping cunt getting repeatedly impaled by his lengthy shaft.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                          scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust, and his gigantic dick fills you to your absolute limit. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummeling your insides and forcing sloppy wet squelching from your dripping cunt.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: <<$npcdesc>> slows down to a more manageable pace, and you breathe a sigh of rel...
                            scene.text(`${((s as any).npcdesc ?? '')} slows down to a more manageable pace, and you breathe a sigh of relief. With your ass no longer feeling like it's being hammered numb, you start to enjoy this a lot more. It's hard enough that your breasts jiggle with every thrust. His dick fills you completely and then some, forcing your asshole to strain and stretch around his monstrously long and girthy shaft. Loud clapping echoes around the room as ${((s as any).npcdesc ?? '')}'s hips crash into your ass, pummeling your insides and forcing sloppy wet squelching from your dripping cunt.`);
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal2_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan_describe'] = 'softly';
  } else {
    if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['moan_describe'] = 'loudly';
    }
  }
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you. He po...
    scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you. He pounds into you from behind, giving you the strangest satisfaction of pleasure that has very little to do with the tiny dick inside you.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you. His t...
      scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you. His thick chode pounds into you from behind, wonderfully stretching your asshole like a good three-finger fucking, but better.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
        scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind. He pounds your ass, rubbing your g-spot through your intestines with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
          scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind. He pounds your ass, rubbing your g-spot through your intestines with his dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
            scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his <i>thick</i> cock that stretches your walls, squeezing pleasure from your ass with every thrust.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
              scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his long-ass cock that reaches the very depths of your ass without even trying.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his huge cock that fills you wonderfully and reaches the very depths of your ass without even trying.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                  scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind, pounding you with his enormous cock that penetrates you to the depths of your ass and stretches your walls, squeezing pleasure from your ass with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                    scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind with his amazingly lengthy cock, literally pounding pleasure from your intestines with every thrust. Soreness is quickly building up inside you, and it feels so good. </i>`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                      scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind with his gigantic cock, literally pounding pleasure from your intestines with every thrust. Soreness is quickly building up between your legs, and it feels so good. </i>`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You moan <<$sex_ev[''moan_describe'']>> as <<$npcdesc>> keeps fucking you from b...
                        scene.text(`You moan ${((s as any).sex_ev ?? 0)?.['moan_describe'] ?? ''} as ${((s as any).npcdesc ?? '')} keeps fucking you from behind with his monstrous cock. It's stupidly huge, stretching you to breaking with every thrust and literally pounding your intestines with every thrust. Your asshole is so sore, and <i>it feels so good.</i>`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal2_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my ass with your tiny dick!" you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my ass with your fat chode!" you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my ass with your skinny dick!" you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            scene.text('"Ah! <i>Fuck!</i> Yes! Yes! Fuck my ass just like that!" you moan loudly. "Don\'t stop! You\'re so <i>fucking</i> good!"');
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              if (((s as any).agape ?? 0) < 2) {
                scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Fuck, you\'re so big! You\'re stretching me out! Don\'t stop! Fuck my ass with your big cock! It\'s so good!"');
              } else {
                scene.text('"Ah! <i>Fuck!</i> Just like that!" You moan loudly. "Don\'t stop! Fuck my ass with your big cock! Fuck, you\'re so big! You\'re so <i>fucking</i> good!"');
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                scene.text('"Ah! <i>Fuck! </i> Just like that!" You moan loudly. "Ungh~! You\'re so</i> deep! Right there! Right there! You\'re so <i>fucking</i> good!"');
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  scene.text('"Ah! <i>Fuck!</i> Just like that!" You moan loudly. "Fuck my ass with your huge cock! Ungh~! You\'re so</i> deep! You\'re so <i>fucking</i> good!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    scene.text('"Ah! <i>Fuck!</i> Just like that!" You moan loudly. "Fuck my ass with your huge cock! Ungh~! You\'re so</i> deep! You\'re so big! You\'re so <i>fucking</i> good!"');
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      scene.text('"Ah! <i>Fuck!</i> Just like that!" you moan loudly. "Oh <i>fuck!</i> I feel you in my stomach~! It\'s so good!!"');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        scene.text('"Ah! <i>Fuck! </i> Just like that!" you moan loudly. "Oh, <i>fuck! You\'re so deep! You\'re so <i>fucking big! I can feel you in my stomach~! Don\'t stop~!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          scene.text('"Ungh~! <i>Fuck! </i> Just like that!" you moan loudly. "Fuck me with your monstrous cock~! Oh <i>fuck! </i> You\'re so... fucking big! You\'re tearing me in half! I can feel you in my stomach~! Don\'t stop~! Don\'t stop~! Don\'t stop~!"');
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 70) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Yes~! Fuck~!" you pant. "You\'re going to make me come~!"');
        } else {
          scene.text('"Oh fuck~! I\'m going to come! I\'m going to come~! I\'m going to come~! </i>" you moan. "Don\'t stop!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! I\'m so wet," you moan. "You feel so good inside me!"');
        } else {
          scene.text('"My ass can\'t get enough of you~!" you moan. "You\'re making me so wet~!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Just like that~!" you moan. "You\'re so fucking good! Don\'t stop~! Don\'t stop~!"');
        } else {
          scene.text('"Ah~! You\'re so good~!" you moan. "You\'re driving me crazy~!"');
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s pussy is this?" <<$npcdesc>> growls as he slowly withdraws his cock befo...
            scene.text(`"Who's pussy is this?" ${((s as any).npcdesc ?? '')} growls as he slowly withdraws his cock before ramming it back into your cunt.`);
            scene.text('"Yours~!" you whimper into the bedsheets.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Fuck my sloppy pussy~!" you moan loudly. "Make this dirty little slut cum all over your cock~!"');
              } else {
                scene.text('"Oh sh*t! Imgonnacum~!" you moan. "You\'re going to make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck my dirty cunt~!" you moan loudly. "Fuck me like the filthy whore I am~!"');
              } else {
                scene.text('"Make this pussy yours~!" you moan. "Own this pussy with your cock~!"');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal2_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you, l...
    scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you, letting the pressure build inside you as he literally pounds pleasure into you from behind with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you, l...
      scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you, letting the pressure build inside you as he literally pounds pleasure into you from behind with his thick chode.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock inside you, l...
        scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock inside you, letting the pressure build inside you as he literally pounds pleasure into you from behind with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s cock filling your ...
          scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s cock filling your ass, letting the pressure build inside you as he literally pounds pleasure into you from behind with his dick.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s thick cock stretch...
            scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s thick cock stretching the walls of your ass, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s long cock reaching...
              scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s long cock reaching deep inside your ass, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s huge cock filling ...
                scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s huge cock filling you up and reaching deep inside your ass, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s enormous cock that...
                  scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s enormous cock that stretches you to your limits and fills you up from base to tip, letting the pressure build inside you as he literally pounds pleasure into you from behind.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s lengthy cock that ...
                    scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s lengthy cock that batters your intestines, a feeling that you sense in your stomach, letting him literally pound pain and pleasure into you from behind.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You let out sighs of contentment, focusing on <<$npcdesc>>''s gigantic cock that...
                      scene.text(`You let out sighs of contentment, focusing on ${((s as any).npcdesc ?? '')}'s gigantic cock that fills you past your limits as it batters your intestines, a feeling that you sense in your stomach, letting him literally pound pain and pleasure into you from behind.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        scene.text('You groan wordlessly, unable to have any kind of conscious thought except for the monstrous cock inside you, filling you with pain and pleasure as it smashes into your intestines and stretches your asshole to the point of breaking.');
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal3StartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
    scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
      scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his fat choke.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
        scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his skinny dick.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
          scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his cock.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
            scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his thick cock.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
              scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his long cock.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
                scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his huge cock.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
                  scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his enormous cock.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
                    scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his lengthy cock.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
                      scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his gigantic cock.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: <<$npcdesc>> smashes into you with tremendous force, fucking you as hard as he c...
                        scene.text(`${((s as any).npcdesc ?? '')} smashes into you with tremendous force, fucking you as hard as he can with his monstrous cock.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterAnal3EnjoyDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
    scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, letting the sheer force make up for his tiny dick.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
      scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, forcing the girth of his fat chode into you, making it somehow feel longer than it is.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
        scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, slamming his skinny dick into you.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
          scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, slamming his cock into you.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
            scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, splitting your ass in half with his thick cock.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
              scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, slamming every centimeter of his long cock deep inside you.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, forcing every centimeter of his huge cock deep inside you.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                  scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, splitting your ass in half and forcing every centimeter of his enormous cock deep inside you.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                    scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, smashing into your intestines with his lengthy cock on every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                      scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, filling you up and smashing into your intestines with his gigantic cock on every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: Your eyes roll back into your head as <<$npcdesc>> pummels you from behind. Loud...
                        scene.text(`Your eyes roll back into your head as ${((s as any).npcdesc ?? '')} pummels you from behind. Loud slapping echoes off the walls as ${((s as any).npcdesc ?? '')} claps your ass over and over again, splitting your ass in half and smashing into your intestines with his monstrous cock on every thrust.`);
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
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    scene.text('Your mind goes blank with pleasure, and within minutes, your makeup is as fucked as you are.');
  } else {
    if ((!((s as any).pcs_makeup ?? 0))) {
      scene.text('Tears of pleasure blur your sight. and sweat gathers on your skin, and your already ruined makeup gets even worse with every passing moment.');
    } else {
      // TODO-QSP: dynamic text: Your mind goes blank with pleasure, and you groan loudly, letting <<$npcdesc>> f...
      scene.text(`Your mind goes blank with pleasure, and you groan loudly, letting ${((s as any).npcdesc ?? '')} fuck you into blissful oblivion.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal3TooRough(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
    scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s tiny dick does nothing for you, but your hips ache from the repeated clapping of your ass and you can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
      scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s fat chode is uncomfortable in its girth, splitting your ass with painful force and your hips ache from the repeated clapping of your ass. You can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
        scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s skinny dick does nothing for you, but your hips ache from the repeated clapping of your ass and you can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          scene.text('You scream as he pulls harder on your hair and you try to pull away, but you\'re unable to escape. Your hips ache from the repeated clapping of your ass and you can even feel your cheeks turning red and sore from the punishment. It\'s agonizing and unpleasant, you can\'t get any satisfaction out of this at all.');
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
            scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s thick cock is uncomfortable in its girth, splitting your ass with painful force and your hips ache from the repeated clapping of your ass. You can even feel your cheeks turning red and sore from the punishment. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
              scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s long cock keeps painfully bumping against your intestines and your hips ache from the repeated clapping of your ass. The thought of a bruised uterus passes through your head as you groan again. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s huge cock keeps painfully bumping against your intestines and your hips ache from the repeated clapping of your ass. The thought of a bruised uterus passes through your head as you groan again. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                  scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s enormous cock keeps painfully bumping against your intestines, your ass aches from being stretched to fit its girth, and your ass is sore from being repeatedly clapped with sledgehammer force. The thought of a bruised uterus passes through your head as you groan again. It's agonizing and unpleasant, you can't get any satisfaction out of this at all.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                    scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s cock keeps smashing into your intestines, your ass unable to accommodate its unnatural length, and your hips ache from the repeated clapping of your ass. You're sure your uterus is going to be bruised tomorrow and you groan again, wondering if it's possible to be fucked to death.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                      scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s huge cock keeps smashing into your intestines, your ass unable to accommodate its unnatural length, and your hips ache from the repeated clapping of your ass. You're sure your uterus is going to be bruised tomorrow and you groan again, wondering if it's possible to be fucked to death.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You scream as he pulls harder on your hair and you try to pull away, but you''re...
                        scene.text(`You scream as he pulls harder on your hair and you try to pull away, but you're unable to escape. ${((s as any).npcdesc ?? '')}'s monstrous cock keeps smashing into your intestines, your ass unable to accommodate its unnatural length, aching from being stretched to fit its girth. Not to mention your ass is already sore from being repeatedly clapped with sledgehammer force. You're sure your uterus is going to be bruised tomorrow and you groan again, wondering if it's possible to be fucked to death.`);
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
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
    // TODO-QSP: dynamic text: Black tears run down your face and sweat covers your body, destroying your makeu...
    scene.text(`Black tears run down your face and sweat covers your body, destroying your makeup as ${((s as any).npcdesc ?? '')} pummels you into the bed.`);
  } else {
    if ((!((s as any).pcs_makeup ?? 0))) {
      // TODO-QSP: dynamic text: Your already ruined makeup gets worse with every passing moment, getting smeared...
      scene.text(`Your already ruined makeup gets worse with every passing moment, getting smeared across the sheets as ${((s as any).npcdesc ?? '')} pummels you into the bed.`);
    } else {
      // TODO-QSP: dynamic text: Tears run down your face and sweat covers your body as <<$npcdesc>> pummels you ...
      scene.text(`Tears run down your face and sweat covers your body as ${((s as any).npcdesc ?? '')} pummels you into the bed.`);
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterAnal3SlowDown(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'thick'  ||  ((s as any).dick_desc ?? 0) === 'long'  ||  ((s as any).dick_desc ?? 0) === 'huge'  ||  ((s as any).dick_desc ?? 0) === 'enormous'  ||  ((s as any).dick_desc ?? 0) === 'lengthy') {
    scene.text('"Could you-! Slow down-!" you gasp desperately. He releases your hair, letting you collapse face first onto the bed.');
    scene.text('"You\'re too big..." you pant. "I can\'t keep going this hard..."');
  } else {
    if (((s as any).dick_desc ?? 0) === 'gigantic'  ||  ((s as any).dick_desc ?? 0) === 'monstrous') {
      scene.text('"Could you-! Slow down-!" you gasp desperately. He releases your hair, letting you collapse face first onto the bed.');
      scene.text('"You\'re way too big..." you groan. "I\'m gonna die if you keep going this hard..."');
    } else {
      scene.text('"Could you-! Slow down-!" you gasp desperately. He releases your hair, letting you collapse face first onto the bed. "I can\'t keep going this hard..."');
    }
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterAnal3_1Desc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
      scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, somehow managing to make his tiny dick hurt you in all the <i>best</i> ways.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
        scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, forcing his fat chode into your ass to hurt you in all the <i>best</i> ways.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
          scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, stabbing into you with his skinny dick to hurt you in all the <i>best</i> ways.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
            scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hurting in all the <i>best</i> ways.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
              scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, splitting your ass with his thick cock and hurting you in all the <i>best</i> ways.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your intestines with his long cock and hurting you in all the <i>best</i> ways.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                  scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your intestines with his huge cock and hurting you in all the <i>best</i> ways.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                    scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your intestines and threatening to rip your asshole in half with his enormous cock and hurting you in all the <i>best</i> ways.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                      scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your intestines with the entire length of his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock and hurting you in all the <i>best</i> ways.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                        scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, hammering your intestines with his gigantic cock, forcing its entire ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length inside and hurting you in all the <i>best</i> ways.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: Tears begin to well up in your eyes as you half whimper and half moan in half pa...
                          scene.text(`Tears begin to well up in your eyes as you half whimper and half moan in half pain and half pleasure. ${((s as any).npcdesc ?? '')} keeps a firm hold on your hair and pulls hard with every thrust, forcing in the entire ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm length of his monstrous cock inside you, hammering your intestines and threatening to rip your asshole in half and hurting you in all the <i>best</i> ways.`);
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
    scene.text('Wet sloppy claps squelch from your asshole as he relentlessly pounds you into the mattress and your eyes roll back in your head.');
  } else {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
      scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that even his tiny dick is making you break out in a sweat.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
        scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that the fat girth of his chode being force inside you is making you break out in a sweat.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
          scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that even his skinny dick is making you break out in a sweat.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
            scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and his fucking is so violent that you're already starting to break out in a sweat.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
              scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his thick cock threatens to tear you in half with every thrust.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his long cock bashes against your intestines with every thrust.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                  scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his huge cock fills your entire pussy and bashes against your intestines with every thrust.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                    scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his enormous cock batters your intestines, threatening to tear you in half with every thrust.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                      scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock bashing against your intestines, trying to force its way past with every thrust.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                        scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his gigantic ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock filling you up and bashing against your intestines with its weight, trying to force its way past with every thrust.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: The bed creaks underneath you and your breasts jiggle violently with every thrus...
                          scene.text(`The bed creaks underneath you and your breasts jiggle violently with every thrust. ${((s as any).npcdesc ?? '')}'s hips slam against your thighs and you break out in a sweat, his monstrous ${((s as any).npc_dick ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}cm cock trying to force its way into your intestines and split you in half with every thrust.`);
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
    scene.text('And you are loving <i>every second</i> of it.');
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal3_2MoanDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['moan'] === 1) {
    scene.text('"<i>Ah~! Ah~! Haa~! Ah~!</i>"');
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his ti...
      scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his tiny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his fa...
        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his fat chode. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his sk...
          scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his skinny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you with his di...
            scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you with his dick. Sloppy wet sounds squelch from your asshole around his cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
              scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your asshole around his thick cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your asshole around the long cock that hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                  scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your asshole around the huge cock that fills you up and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                    scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your asshole around the enormous cock that stretches you to your limits and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                      scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your sphincter around the lengthy cock that hammers so deep and hard inside your ass that you can feel it in your intestines. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                        scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your sphincter around the gigantic cock that hammers so deep and hard inside your ass that you can feel it in your intestines. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                          scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your sphincter around the monstrous cock that hammers so deep and hard inside your ass that you can feel it in your intestines and threatens to tear you in half at the same time. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['moan'] === 2) {
      scene.text('"Oo<i>oo</i>o<i>oo</i>hh<i>hh</i> <i>aaagggghhhhhhhh</i>..."');
      if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
        // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
        scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his tiny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'chode') {
          // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
          scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his fat chode. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'skinny') {
            // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
            scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his skinny dick. Sloppy wet squelches combine with the loud clapping of your ass cheeks as the rough doggy fucking sends pleasure rocking through your body.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'normal') {
              // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you wi...
              scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you with his dick. Sloppy wet sounds squelch from your asshole around his cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'thick') {
                // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your asshole around his thick cock, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'long') {
                  // TODO-QSP: dynamic text: You pant like a bitch in heat as <<$npcdesc>> continues to pound you from behind...
                  scene.text(`You pant like a bitch in heat as ${((s as any).npcdesc ?? '')} continues to pound you from behind. Sloppy wet sounds squelch from your asshole around the long cock that hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'huge') {
                    // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                    scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your asshole around the huge cock that fills you up and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'enormous') {
                      // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                      scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your asshole around the enormous cock that stretches you to your limits and hammers deep inside you, combining with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'lengthy') {
                        // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                        scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your sphincter around the lengthy cock that hammers so deep and hard inside your ass that you can feel it in your intestines. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'gigantic') {
                          // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                          scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your sphincter around the gigantic cock that hammers so deep and hard inside your ass that you can feel it in your intestines. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
                        } else {
                          if (((s as any).dick_desc ?? 0) === 'monstrous') {
                            // TODO-QSP: dynamic text: You groan loudly, barely able to think as <<$npcdesc>> continues pounding you fr...
                            scene.text(`You groan loudly, barely able to think as ${((s as any).npcdesc ?? '')} continues pounding you from behind. Sloppy wet sounds squelch from your sphincter around the monstrous cock that hammers so deep and hard inside your ass that you can feel it in your intestines and threatens to tear you in half at the same time. It combines with the loud clapping of your ass cheeks that fill the room as the rough doggy fucking sends pleasure rocking through your body.`);
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
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal3_2DirtyTalk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'cock') {
    if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
      scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! Fuck me with your tiny cock!"');
    } else {
      if (((s as any).dick_desc ?? 0) === 'chode') {
        scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! "Fuck me with your fat chode!"');
      } else {
        if (((s as any).dick_desc ?? 0) === 'skinny') {
          scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! Fuck me with your skinny dick!"');
        } else {
          if (((s as any).dick_desc ?? 0) === 'normal') {
            scene.text('"Yes! Fuck! Yes! Just like that!" you scream so hard it hurts. "Clap my fucking ass! Fuck me with your cock!"');
          } else {
            if (((s as any).dick_desc ?? 0) === 'thick') {
              if (((s as any).agape ?? 0) < 2) {
                scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re gonna tear me in half! Don\'t stop! Don\'t stop!"');
              } else {
                scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> Yes! Just like that! Your cock is so big! Don\'t stop! Don\'t stop! Pound my ass!"');
              }
            } else {
              if (((s as any).dick_desc ?? 0) === 'long') {
                scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re <i>so</i> deep! Don\'t stop! Don\'t stop! Pound my ass!"');
              } else {
                if (((s as any).dick_desc ?? 0) === 'huge') {
                  scene.text('"OH FUCK!" you scream so hard it hurts. "You\'re so big! You\'re <i>so</i> big! Don\'t stop! Pound my ass with your big fucking cock!"');
                } else {
                  if (((s as any).dick_desc ?? 0) === 'enormous') {
                    if (((s as any).agape ?? 0) < 2) {
                      scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re <i>so</i> big! You\'re gonna tear me in half! Don\'t stop! Don\'t stop!"');
                    } else {
                      scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> You\'re so big! You\'re <i>so</i> big! Oh fuck! Don\'t stop! Don\'t stop! Don\'t fucking stop!"');
                    }
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'lengthy') {
                      scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> I feel you in my stomach~! <i>Oh my God!</i> Don\'t <i>fucking</i> stop!"');
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'gigantic') {
                        scene.text('"OH FUCK!" you scream so hard it hurts. "Oh <i>fuck!</i> You\'re <i>so</i> deep! You\'re so <i>fucking big</i>! I can feel you in my stomach~! Don\'t stop~!"');
                      } else {
                        if (((s as any).dick_desc ?? 0) === 'monstrous') {
                          scene.text('"OH FUCK!" you scream so hard it hurts. "<i>Fuck!</i> I feel you in my stomach~! Oh <i>fuck!</i> You\'re so big! You\'re <i>so</i> big! You\'re so <i>fucking big</i>! Don\'t fucking stop! Tear me in half with your monstrous cock!"');
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
  } else {
    if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'arousal') {
      if (((s as any).pcs_horny ?? 0) >= 70) {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Yes~! Fuck~! Yes~!" you scream. "I love getting pounded~! You\'re gonna make me come~!"');
        } else {
          scene.text('"Oh <i>fuck</i>~!" you scream. "I\'m so fucking wet~! I\'m gonna come~! I\'m gonna cum all over your cock~!"');
        }
      } else {
        if ((Math.floor(Math.random() * 2) + 0) === 1) {
          scene.text('"Ungh~! Don\'t stop~!" you scream. "Smash my fucking asshole~!"');
        } else {
          scene.text('"My ass can\'t get enough of you~!" you scream. "I need more~! More~! It\'s so good~!"');
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'technique') {
        if (((s as any).pcs_horny ?? 0) >= 70) {
          if ((Math.floor(Math.random() * 2) + 0) === 1) {
            scene.text('"Yes~! Fuck~! Yes~!" you scream. "Pound my fucking ass~! Don\'t stop~! You\'re gonna make me come~!"');
          } else {
            scene.text('"Oh <i>fuck</i>~!" you scream. "I\'m so fucking wet~! I\'m gonna cum all over your cock~! You\'re driving me crazy~!"');
          }
        } else {
          if ((Math.floor(Math.random() * 2) + 0) === 1) {
            scene.text('"Ungh~! Don\'t stop~!" you scream. "Smash my ass~! It feels so good~!"');
          } else {
            scene.text('"Fuck~!" you scream. "Fuck~! Pound my fucking ass~! <b><i>Fuck~!</i></b>"');
          }
        }
      } else {
        if (((s as any).sex_ev ?? 0)?.['dirty_talk'] === 'dirty_girl') {
          if (((s as any).npc_dirty_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Who''s ass is this?" <<$npcdesc>> growls as he pounds his cock into you like a ...
            scene.text(`"Who's ass is this?" ${((s as any).npcdesc ?? '')} growls as he pounds his cock into you like a battering ram.`);
            scene.text('"Yours~!" you whimper into the bedsheets.');
          } else {
            if (((s as any).pcs_horny ?? 0) >= 70) {
              if ((Math.floor(Math.random() * 1) + 1) === 1) {
                scene.text('"Yes~! Fuck my sloppy ass~!" you scream. "Make this dirty little slut cum all over your cock~!"');
              } else {
                scene.text('"Oh shit~! Imgonnacum~!" you scream. "You\'re gonna make this filthy whore cum~!"');
              }
            } else {
              if ((Math.floor(Math.random() * 2) + 0) === 1) {
                scene.text('"Ungh~! Fuck my dirty cunt~!" you scream. "Fuck me like the filthy whore I am~!"');
              } else {
                scene.text('"Make this ass yours~!" you scream. "Own this ass with your cock~!"');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnal3_2SensationDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).dick_desc ?? 0) === 'tiny'  ||  ((s as any).dick_desc ?? 0) === 'short') {
    // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
    scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his tiny dick violently violating your asshole.`);
  } else {
    if (((s as any).dick_desc ?? 0) === 'chode') {
      // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
      scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his fat chode violently violating your asshole.`);
    } else {
      if (((s as any).dick_desc ?? 0) === 'skinny') {
        // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
        scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his skinny dick violently violating your asshole.`);
      } else {
        if (((s as any).dick_desc ?? 0) === 'normal') {
          // TODO-QSP: dynamic text: Youpant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll b...
          scene.text(`Youpant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his dick violently violating your asshole.`);
        } else {
          if (((s as any).dick_desc ?? 0) === 'thick') {
            // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
            scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his thick cock violently stretching out your asshole.`);
          } else {
            if (((s as any).dick_desc ?? 0) === 'long') {
              // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
              scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his long cock repeatedly knocking on your intestines as it violently penetrates you over and over again.`);
            } else {
              if (((s as any).dick_desc ?? 0) === 'huge') {
                // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the sensation of the huge cock inside you repeatedly knocking on your intestines as it violently violates your asshole.`);
              } else {
                if (((s as any).dick_desc ?? 0) === 'enormous') {
                  // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                  scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his enormous cock knock against your intestines while it threatens to tear you in half.`);
                } else {
                  if (((s as any).dick_desc ?? 0) === 'lengthy') {
                    // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                    scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his insanely long cock smash into your intestines over and over and over again in the most blissful agony you've ever experienced.`);
                  } else {
                    if (((s as any).dick_desc ?? 0) === 'gigantic') {
                      // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                      scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his gigantic cock fill your ass, smashing into your intestines over and over and over again in the most blissful agony you've ever experienced.`);
                    } else {
                      if (((s as any).dick_desc ?? 0) === 'monstrous') {
                        // TODO-QSP: dynamic text: You pant heavily as <<$npcdesc>> keeps pounding you from behind. Your eyes roll ...
                        scene.text(`You pant heavily as ${((s as any).npcdesc ?? '')} keeps pounding you from behind. Your eyes roll back in your head and all you can do is gasp for breath and lose yourself in the feeling of his monstrous cock smashing into your intestines, threatening to tear you in half in the most blissful agony you've ever experienced.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterWantTo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'No, I want to', handler: (st: GameState) => {
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    scene.text('"No, no," you shake your head. "I want to. I was just getting cold feet."');
    scene.text('You adjust your knees, spreading your legs a little wider and squaring your shoulders to look forward.');
    scene.actions([
      { label: 'Lose your anal virginity', handler: (st: GameState) => {
    if ((Math.floor(Math.random() * 2) + 0) === 1  ||  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspGoto(st, 'sex_ev_anal', 'anal_virg_norm1');
    } else {
      qspGoto(st, 'sex_ev_anal', 'anal_virg_hard1');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjInstead(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Can I just blow you', handler: (st: GameState) => {
    scene.text('"Can I just blow you instead?"');
    if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('"Ugh fine, but it better be good." He grabs you roughly by the head and shoves you down towards his crotch.');
        scene.actions([
          { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
        ]);
      } else {
        scene.text('"No, it\'s fuck or nothing! So what\'s it gonna be?"');
        scene.actions([
          { label: 'Don\'t give in', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"... nothing then."');
    scene.text('<i><b>"Are you fucking kidding me?!"</b></i> he screams.');
    scene.text('You recoil from him in fear.');
    if (((st as any).temp_rape_variable ?? 0) > 6) {
    } else {
      scene.text('"Get the fuck out!" he shouts again, pointing at the door.');
      scene.text('"But-!"');
      scene.text('"<i>Get out!</i>"');
      scene.actions([
        { label: 'Gather your things and leave', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('After seeing his explosive anger, you don\'t want to stick around any longer than you have to. You throw your clothes on as fast as you can, grab your things, and run out the door.');
    scene.actions([
      { label: 'Escape', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      ]);
    }
  } },
          { label: 'Give in', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    // TODO-QSP: dynamic text: Unable to summon the will to say no, you nod and turn around. You bite your lip ...
    scene.text(`Unable to summon the will to say no, you nod and turn around. You bite your lip in apprehension as you feel ${((st as any).npcdesc ?? '')} push his cock inside your ass.`);
    scene.actions([
      { label: 'Lose your anal virginity', goto: ['sex_ev_anal', 'anal_virg_hard1'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('"Well, I\'ll never say no to a blowjob."');
      scene.text('"Thanks," you smile. With that, you scoot down the bed and lean down, lowering your head between his legs.');
      scene.actions([
        { label: 'Blow him', goto: ['sex_ev_foreplay', 'bj_sub1'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterFuckInstead(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
    scene.actions([
      { label: 'Can we fuck instead?', handler: (st: GameState) => {
    scene.text('"Can I just blow you instead?"');
    if ((((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0)?.[String((st as any).npcID ?? 0)] === 1)  &&  ((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      if ((Math.floor(Math.random() * 2) + 0) === 1) {
        scene.text('"Ugh fine, but it better be good." He grabs you roughly by the shoulders and spreads your knees apart.');
        scene.actions([
          { label: 'Doggy style', goto: ['sex_ev_doggy', 'doggy_start'] },
        ]);
      } else {
        scene.text('"No, it\'s anal or nothing! So what\'s it gonna be?"');
        scene.actions([
          { label: 'Don\'t give in', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('"... nothing then."');
    scene.text('<i><b>"Are you fucking kidding me?!"</b></i> he screams.');
    scene.text('You recoil from him in fear.');
    if (((st as any).temp_rape_variable ?? 0) > 6) {
    } else {
      scene.text('"Get the fuck out!" he shouts again, pointing at the door.');
      scene.text('"But-!"');
      scene.text('"<i>Get out!</i>"');
      scene.actions([
        { label: 'Gather your things and leave', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['bed_room']
    scene.text('After seeing his explosive anger, you don\'t want to stick around any longer than you have to. You throw your clothes on as fast as you can, grab your things, and run out the door.');
    scene.actions([
      { label: 'Escape', goto: ['sex_ev_leave', 'exit'] },
    ]);
  } },
      ]);
    }
  } },
          { label: 'Give in', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    scene.img('images/shared/sex/foreplay/doggy1.jpg');
    // TODO-QSP: dynamic text: Unable to summon the will to say no, you nod and turn around. You bite your lip ...
    scene.text(`Unable to summon the will to say no, you nod and turn around. You bite your lip in apprehension as you feel ${((st as any).npcdesc ?? '')} push his cock inside you.`);
    scene.actions([
      { label: 'Lose your anal virginity', goto: ['sex_ev_anal', 'anal_virg_hard1'] },
    ]);
  } },
        ]);
      }
    } else {
      scene.text('"Well, I\'ll never say no to a good fuck."');
      scene.text('"Thanks," you smile. With that, you scoot down the bed and lean down, lowering your head between his legs.');
      qspCall(st, 'sex_ev_sex', 'position_choose');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalVirgNorm1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_virgin_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['first_anal_insertion'] = 1;
  (s as any).orgasm_or = 'no';
  // TODO-QSP: gs 'arousal', 'anal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal1';
  scene.img('images/shared/sex/anal/doggy/insert_shock1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> rubs his cock over your pussy lips coating it in your juices before...
  scene.text(`${((s as any).npcdesc ?? '')} rubs his cock over your pussy lips coating it in your juices before slowly pushing his cock against your pucker hole, his tip making its way inside using the lubrication. It fills you up, stretching your sphincter. After a brief pause, he pushes through, filling you to the brim and causing you to gasp. Whether in excitement or pain, you aren't really sure yet.`);
  scene.text('"You okay?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'It hurts', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'hurt';
    qspGoto(st, 'sex_ev_anal', 'anal_virg_norm1.1');
  } },
    { label: 'I\'m fine', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'fine';
    qspGoto(st, 'sex_ev_anal', 'anal_virg_norm1.1');
  } },
    { label: 'Just hum', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_react'] = 'mmm';
    qspGoto(st, 'sex_ev_anal', 'anal_virg_norm1.1');
  } },
  ]);
  scene.build();
}

function enterAnalVirgNorm1_1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_virgin_fuck'] = 1;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', '' + ((s as any).sex_ev ?? 0)?.['virgin_react'] + '_react1']; enterDefault(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/insert2.mp4');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', '' + ((st as any).sex_ev ?? 0)?.['virgin_react'] + '_react2']; enterDefault(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.text('"I\'ll be gentle," he says, and begins to move again.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['orgasm'] = ((st as any).orgasm ?? 0);
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['pos_speed'] = 'anal1';
    qspCall(st, 'stat', '');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_media'] = '<center><video autoplay loop ' + ((st as any).set_imgh ?? 0) + ' src="images/shared/sex/anal/doggy/slow2.mp4"></video></center>';
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: As promised, <<$npcdesc>> fucks you very gently, slowly pumping his cock in and ...
    scene.text(`As promised, ${((st as any).npcdesc ?? '')} fucks you very gently, slowly pumping his cock in and out of you. He displays what you can only imagine is incredible resilience, as he maintains this slow and gentle pace for several minutes, at which point you think...`);
    qspGoto(st, 'sex_ev_anal', 'virgin_enjoyment');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnalVirgNorm2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_virgin_fuck'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal1';
  scene.img('images/shared/sex/anal/doggy/slow2.mp4');
  // TODO-QSP: dynamic text: As <<$npcdesc>> changes his pace, you sigh deeply, feeling like you can breathe ...
  scene.text(`As ${((s as any).npcdesc ?? '')} changes his pace, you sigh deeply, feeling like you can breathe again.`);
  scene.text('Now that you aren\'t worried about being literally fucked to death, you feel like you can focus on the sensations of your first time and you...');
  qspGoto(s, 'sex_ev_anal', 'virgin_enjoyment');
  // TODO-QSP: end
  scene.build();
}

function enterAnalVirgHard1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_virgin'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['anal_virgin_fuck'] = 1;
  (s as any).orgasm_or = 'no';
  qspCall(s, 'stat', '');
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['position'] = 'anal';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal3';
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['speed'] = 3;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
  scene.img('images/shared/sex/anal/doggy/hard2.mp4');
  if (((s as any).know_virgin ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: Without warning, <<$npcdesc>> plunges his entire cock all the way inside you. He...
    scene.text(`Without warning, ${((s as any).npcdesc ?? '')} plunges his entire cock all the way inside you. He tears straight through your dry pucker hole, eliciting a uncontainable shriek of pain from your lips and tears Immediately filling your eyes. If he understood how much saving your virginity meant to you, then he doesn't show it as he throws his full weight against you and bears you down onto the bed. Your arms and legs buckle beneath you, and his cock drives all the way inside you. `);
    scene.text('He doesn\'t give you even a moment to adjust and begins fucking you full force, absolutely <i>pounding</i> your ass.');
  } else {
    // TODO-QSP: dynamic text: Without warning, <<$npcdesc>> plunges his entire cock all the way inside you. He...
    scene.text(`Without warning, ${((s as any).npcdesc ?? '')} plunges his entire cock all the way inside you. He tears straight through your unprepared pucker ring, eliciting a uncontainable shriek of pain from your lips and tears immediately filling your eyes. If he understood how much saving your virginity meant to you, then he doesn't show it as he throws his full weight against you and bears you down onto the bed. Your arms and legs buckle beneath you, and his cock drives all the way inside you.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> doesn''t stop for even a second and begins fucking you <i>hard</i>.
    scene.text(`${((s as any).npcdesc ?? '')} doesn't stop for even a second and begins fucking you <i>hard</i>.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Scream', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    // TODO-QSP: gs 'arousal', 'ass', 1, 'rough', 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/anal/doggy/hard2.mp4');
    scene.text('<i>"Mmmm! Mmm!! MM!! MMM!!"</i>');
    // TODO-QSP: dynamic text: <<$npcdesc>> fucks you roughly and without mercy or restraint. It hurts so much....
    scene.text(`${((st as any).npcdesc ?? '')} fucks you roughly and without mercy or restraint. It hurts so much. Every time his cock slams back in to you, you feel like you're going to die. It's like your ass is being torn in half and you wonder if you're going to bleed after this. He lets all of his weight rest on top of you, driving the breath out from your lungs. You can't even scream. All you can do is squirm beneath ${((st as any).npcdesc ?? '')} as he pounds your virgin ass over and over again.`);
    scene.actions([
      { label: 'Endure it', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'fuck_rough_no_cum_code');
    qspCall(st, 'stat', '');
    scene.text('The next few minutes pass by in a torturous blur. You have no idea how much time actually passes by, only that every second of it is filled with pain, tears, and prayer that it will end after the next thrust.');
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: 'Can we slow down?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Can we-! Slow down-! A little-?" you manage to gasp under <<$npcdesc>>''s relen...
    scene.text(`"Can we-! Slow down-! A little-?" you manage to gasp under ${((st as any).npcdesc ?? '')}'s relentless hard pounding. "This is-! Too-! Rough-!"`);
    if (((Math.floor(Math.random() * 10) + 1) >= 7  ||  ((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_abusive ?? 0) === 1)  &&  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] !== 1) {
      (st as any).orgasm_or = 'no';
      scene.text('"This is what sex is like," he grins. "You\'ll get used to it soon, then it\'ll feel really good."');
      scene.text('He keeps fucking you roughly and you keep your teeth clenched. Despite his promises, that good feeling never comes and you spend the next few minutes in agony, waiting for it to end.');
      qspCall(st, 'sex_ev_cum', 'fuck_cum');
      qspCall(st, 'sex_ev_sex', 'fuck_continue');
    } else {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['speed_change'] = 1;
      scene.text('"Oh! Sorry! I just... I thought it would make you feel good..."');
      // TODO-QSP: dynamic text: He stops and pulls back for a moment. You take a breath of relief, pulling yours...
      scene.text(`He stops and pulls back for a moment. You take a breath of relief, pulling yourself back up to your arms and knees again and ${((st as any).npcdesc ?? '')} re-enters you. Slowly this time, and much more gently.`);
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_anal', 'anal_virg_norm2'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterAnalVirgHard2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal2';
  (s as any).orgasm_or = '';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  // TODO-QSP: gs 'arousal', 'anal', -15, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.img('images/shared/sex/anal/doggy/med1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace as you command and you start to push your hips ba...
  scene.text(`${((s as any).npcdesc ?? '')} picks up the pace as you command and you start to push your hips back in times with his. The sound of your ass being clapped echoes off the walls. The heightened pace feels even better than it did when he was being gentle and you moan loudly with intense pleasure.`);
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
    scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((s as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to cum.`);
  } else {
    scene.text('It\'s your first time having your ass fucked, but it\'s mind-blowingly good. Why didn\'t you do this sooner?!');
  }
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterAnalVirgHard2_2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['pos_speed'] = 'anal3';
  (s as any).orgasm_or = '';
  qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
  // TODO-QSP: gs 'arousal', 'anal', -15, 'no_orgasm_msg', $sex_ev['prostitution_flag']
  scene.img('images/shared/sex/anal/doggy/rough1.mp4');
  // TODO-QSP: dynamic text: <<$npcdesc>> picks up the pace as you command and you groan loudly, face contort...
  scene.text(`${((s as any).npcdesc ?? '')} picks up the pace as you command and you groan loudly, face contorting in a mixture of pain and pleasure. Maybe sensing something within you, he reaches up and grabs a fistful of your hair, using it to pull himself into you even harder.`);
  scene.text('It hurts. But that makes it feel even better.');
  qspCall(s, 'sex_ev_cum', 'fuck_cum');
  qspCall(s, 'sex_ev_sex', 'fuck_continue');
  // TODO-QSP: end
  scene.build();
}

function enterVirginEnjoyment(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['speed_change'] === 1) {
    scene.actions([
      { label: '... still find it painful', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_hurt'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.text('... still find it really painful.');
    // TODO-QSP: dynamic text: Maybe it''s just the after effect of being too rough with you before carrying ov...
    scene.text(`Maybe it's just the after effect of being too rough with you before carrying over, but this <i>really fucking hurts!</i> Every time ${((st as any).npcdesc ?? '')} thrusts into you, it feels like your ass is going to split in half. Everything about it hurts. Your insides hurt, your sphincter hurts, your rectum hurts, it feels like someone is literally stabbing your asshole with a knife. You keep expecting it to get better, for the pain to go away and the enjoyment to start, but it never does. All you can do is clench your teeth, squeeze your eyes shut, and keep enduring until it's over.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... aren\'t really enjoying it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_numb'] = 1;
    (st as any).orgasm_or = 'no';
    // TODO-QSP: gs 'arousal', 'anal', 1, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 3));
    qspCall(st, 'stat', '');
    scene.text('... still don\'t really enjoy it...');
    // TODO-QSP: dynamic text: It hurt when <<$npcdesc>> first entered you and when he was just pounding on you...
    scene.text(`It hurt when ${((st as any).npcdesc ?? '')} first entered you and when he was just pounding on you with no regard for your comfort, but now that he's slowed down, it's just a sort of pressure you feel inside you. The sensation isn't painful but it you're not getting any pleasure from it either. After his previous speed, maybe your ass just went numb...?`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... are starting to feel good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_good'] = 1;
    (st as any).orgasm_or = '';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.text('... start to feel really good...');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      scene.text('The pain of the previous form of fucking begins to fade and pleasure takes its place. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced, you can feel his cock deep inside you and it feels <i>so good</i>, causing you to openly moan as he fucks you.');
    } else {
      scene.text('The pain of the previous form of fucking begins to fade and pleasure takes its place. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced--not even from vaginal sex--you can feel his cock deep inside your ass and it feels <i>so good</i>, causing you to openly moan as he fucks you.');
    }
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it, you almost don''t realize when you'...
      scene.text(`You're so caught up in the enjoyment of it, you almost don't realize when you're about to come. The pressure inside you building and building with each time ${((st as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut as you cum hard on ${((st as any).npcdesc ?? '')}'s dick.`);
    } else {
      scene.text('You spend the next several minutes fucking joyously, wondering why you waited so long to feel this good!');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } else {
    scene.actions([
      { label: '... this is painful', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'painful';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_hurt'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    (st as any).minut = ((st as any).minut ?? 0) + ((Math.floor(Math.random() * 2) + 3));
    qspCall(st, 'stat', '');
    scene.text('<i>... this is really painful.</i>');
    if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'hurt') {
      // TODO-QSP: dynamic text: What initially started as a painful experience continues to be one. Every time <...
      scene.text(`What initially started as a painful experience continues to be one. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your ass is going to split in half. Everything about it hurts. Your insides hurt, your sphincter hurts, your rectum hurts, it feels like someone is literally stabbing your asshole with a knife. You spend each moment praying he'll just cum already and your agony can end.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'fine') {
        // TODO-QSP: dynamic text: It wasn''t so bad when he first entered you, but what started as mild discomfort...
        scene.text(`It wasn't so bad when he first entered you, but what started as mild discomfort has become full blown agony. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your ass is going to split in half. Everything about it hurts. Your insides hurt, your sphincter hurts, your rectum hurts, it feels like someone is literally stabbing your asshole with a knife. You keep expecting it to get better, for the pain to go away and the enjoyment to start, but it never does. All you can do is clench your teeth, squeeze your eyes shut, and keep enduring until it's over.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'mmm') {
          // TODO-QSP: dynamic text: It wasn''t so bad when he first entered you, but what started as mild discomfort...
          scene.text(`It wasn't so bad when he first entered you, but what started as mild discomfort has become full blown agony. Every time ${((st as any).npcdesc ?? '')}'s cock moves inside you, it feels like your ass is going to split in half. Everything about it hurts. Your insides hurt, your sphincter hurts, your rectum hurts, it feels like someone is literally stabbing your asshole with a knife. You keep expecting it to get better, for the pain to go away and the enjoyment to start, but it never does. All you can do is clench your teeth, squeeze your eyes shut, and keep enduring until it's over.`);
        }
      }
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... you aren\'t really enjoying it', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'unsatisfying';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_numb'] = 1;
    (st as any).orgasm_or = 'no';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(st, 'stat', '');
    scene.text('<i>... you aren\'t really enjoying this...</i>');
    // TODO-QSP: dynamic text: It hurt when <<$npcdesc>> first entered you, but now that your ass has adjusted ...
    scene.text(`It hurt when ${((st as any).npcdesc ?? '')} first entered you, but now that your ass has adjusted but that pain in your back seat has taken a back seat and become nothing more than a dull throb. But other than that, it's just a sort of pressure you feel inside you that comes and goes with the motions of his cock. The sensation isn't painful but it you're not getting any pleasure from it either. The experience is just sort of... bland.`);
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '... this feels good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_good'] = 1;
    (st as any).orgasm_or = '';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    // TODO-QSP: gs 'arousal', 'anal', -15, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(st, 'stat', '');
    scene.text('<i>... this is starting to feel really good...</i>');
    if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'hurt') {
      if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
        scene.text('The pain of the previous form of fucking begins to fade and pleasure takes its place. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced, you can feel his cock deep inside you and it feels <i>so good</i>, causing you to openly moan.');
      } else {
        scene.text('The pain of the previous form of fucking begins to fade and pleasure takes its place. Like an itch you\'ve never been able to scratch or a "fullness" you\'ve never experienced--not even from vaginal sex--you can feel his cock deep inside your ass and it feels <i>so good</i>, causing you to openly moan.');
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'fine') {
        // TODO-QSP: dynamic text: That "fullness" you remarked upon earlier has somehow become even more full as <...
        scene.text(`That "fullness" you remarked upon earlier has somehow become even more full as ${((st as any).npcdesc ?? '')} has continued to fuck your ass. Arousal flows like water from your pussy, dripping down your thighs. His cock reaches deep inside you and it feels <i>so good</i>, causing you to openly moan.`);
      } else {
        if (((st as any).sex_ev ?? 0)?.['virgin_react'] === 'mmm') {
          // TODO-QSP: dynamic text: That "fullness" you remarked upon earlier has somehow become even more full as <...
          scene.text(`That "fullness" you remarked upon earlier has somehow become even more full as ${((st as any).npcdesc ?? '')} has continued to fuck your ass. Arousal flows like water from your pussy, dripping down your thighs. His cock reaches deep inside you and it feels <i>so good</i>, causing you to openly moan.`);
        }
      }
    }
    scene.actions([
      { label: 'Continue at this pace', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
      scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((st as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to come.`);
    } else {
      scene.text('You spend the next several minutes fucking joyously, wondering why you waited so long to feel this good!');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
    ]);
  } },
      { label: '... this feels painfully good', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['fuck_enjoyment'] = 'enjoy';
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['virgin_pain_good'] = 1;
    (st as any).orgasm_or = '';
    qspCall(st, 'sex_ev_sex', 'fuck_arousal_code');
    // TODO-QSP: gs 'arousal', 'anal', -15, 'no_orgasm_msg', $sex_ev['prostitution_flag']
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: The initial pain you felt is still there, but somehhow it''s evolved. <<$npcdesc...
    scene.text(`The initial pain you felt is still there, but somehhow it's evolved. ${((st as any).npcdesc ?? '')}'s cock is slick with your blood cock and every time moves inside you, it feels like your vagina is going to split in half. It reaches deep inside you, like a knife stabbing into your intestines. And it feels <i>so good</i>.`);
    scene.text('It hurts like fire, but somehow it burns you in all the best ways. And you want nothing more than for it to continue. There are tears in your eyes, but you honestly can\'t tell anymore if they\'re tears of pain or tears of joy.');
    scene.actions([
      { label: 'Continue at this pace', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    if (((st as any).sex_ev ?? 0)?.['orgasm'] < ((st as any).orgasm ?? 0)) {
      // TODO-QSP: dynamic text: You''re so caught up in the enjoyment of it that your orgasm catches you by surp...
      scene.text(`You're so caught up in the enjoyment of it that your orgasm catches you by surprise. The pressure inside you builds and builds with each time ${((st as any).npcdesc ?? '')}'s cock fills you up. One moment you're thinking, <i>More! More! More!</i> and the next, every muscle in your body goes taut and you realize you're about to come.`);
    } else {
      scene.text('You spend the next several minutes fucking joyously, wondering why you waited so long to feel this good!');
    }
    qspCall(st, 'sex_ev_cum', 'fuck_cum');
    qspCall(st, 'sex_ev_sex', 'fuck_continue');
  } },
      { label: '"Fuck me harder"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: "<<$npcdesc>>," you say, tears now streaming down your face. "I want you to fuck...
    scene.text(`"${((st as any).npcdesc ?? '')}," you say, tears now streaming down your face. "I want you to fuck me harder."`);
    scene.text('"You\'re sure?" he asks hesitantly.');
    scene.text('"Yes! I\'m sure!" you cry even harder. "I <i>want</i> it. Give me your dick. Split me in half!"');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'virg_continue_harder'] },
    ]);
  } },
    ]);
  } },
      { label: '"Fuck me harder"', handler: (st: GameState) => {
    // TODO-QSP: $sex_ev['virgin_media']
    // TODO-QSP: dynamic text: "<<$npcdesc>>," you say. "I want you to fuck me harder."
    scene.text(`"${((st as any).npcdesc ?? '')}," you say. "I want you to fuck me harder."`);
    scene.text('"You\'re sure?" he asks.');
    scene.text('"Yeah, I\'m sure," you grin lustfully. "I can take it. I <i>want</i> it. Give me your dick!"');
    scene.actions([
      { label: 'Continue', goto: ['sex_ev_anal', 'virg_continue_harder'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterVirgContinueHarder(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['virgin_pain_good'] !== 1) {
    qspGoto(s, 'sex_ev_anal', 'anal_virg_hard2');
  } else {
    qspGoto(s, 'sex_ev_anal', 'anal_virg_hard2_2');
  }
  // TODO-QSP: end
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
    case 'anal1_start_desc':
      enterAnal1StartDesc(s, scene);
      break;
    case 'anal1_enjoy_desc':
      enterAnal1EnjoyDesc(s, scene);
      break;
    case 'anal1.1_desc':
      enterAnal1_1Desc(s, scene);
      break;
    case 'anal1.2_moan_desc':
      enterAnal1_2MoanDesc(s, scene);
      break;
    case 'anal1.2_dirty_talk':
      enterAnal1_2DirtyTalk(s, scene);
      break;
    case 'anal1.2_sensation_desc':
      enterAnal1_2SensationDesc(s, scene);
      break;
    case 'anal2_start_desc':
      enterAnal2StartDesc(s, scene);
      break;
    case 'anal2_enjoy_desc':
      enterAnal2EnjoyDesc(s, scene);
      break;
    case 'anal2.1_desc':
      enterAnal2_1Desc(s, scene);
      break;
    case 'anal2.2_moan_desc':
      enterAnal2_2MoanDesc(s, scene);
      break;
    case 'anal2.2_dirty_talk':
      enterAnal2_2DirtyTalk(s, scene);
      break;
    case 'anal2.2_sensation_desc':
      enterAnal2_2SensationDesc(s, scene);
      break;
    case 'anal3_start_desc':
      enterAnal3StartDesc(s, scene);
      break;
    case 'anal3_enjoy_desc':
      enterAnal3EnjoyDesc(s, scene);
      break;
    case 'anal3_too_rough':
      enterAnal3TooRough(s, scene);
      break;
    case 'anal3_slow_down':
      enterAnal3SlowDown(s, scene);
      break;
    case 'anal3.1_desc':
      enterAnal3_1Desc(s, scene);
      break;
    case 'anal3.2_moan_desc':
      enterAnal3_2MoanDesc(s, scene);
      break;
    case 'anal3.2_dirty_talk':
      enterAnal3_2DirtyTalk(s, scene);
      break;
    case 'anal3.2_sensation_desc':
      enterAnal3_2SensationDesc(s, scene);
      break;
    case 'want_to':
      enterWantTo(s, scene);
      break;
    case 'bj_instead':
      enterBjInstead(s, scene);
      break;
    case 'fuck_instead':
      enterFuckInstead(s, scene);
      break;
    case 'anal_virg_norm1':
      enterAnalVirgNorm1(s, scene);
      break;
    case 'anal_virg_norm1.1':
      enterAnalVirgNorm1_1(s, scene);
      break;
    case 'anal_virg_norm2':
      enterAnalVirgNorm2(s, scene);
      break;
    case 'anal_virg_hard1':
      enterAnalVirgHard1(s, scene);
      break;
    case 'anal_virg_hard2':
      enterAnalVirgHard2(s, scene);
      break;
    case 'anal_virg_hard2_2':
      enterAnalVirgHard2_2(s, scene);
      break;
    case 'virgin_enjoyment':
      enterVirginEnjoyment(s, scene);
      break;
    case 'virg_continue_harder':
      enterVirgContinueHarder(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_anal: LocationDef = {
  name: 'sex_ev_anal',
  title: '"I want to try anal."',
  region: 'other',
  enter: enter,
};
