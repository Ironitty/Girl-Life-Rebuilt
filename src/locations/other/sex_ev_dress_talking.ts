import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDressTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['dress_talking_flag'] = 1;
  if (((s as any).sex_ev ?? 0)?.['plans_later_talk'] === 0  &&  ((((s as any).hour ?? 0) < 16  &&  ((s as any).hour ?? 0) > 4)  ||  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1)) {
    scene.actions([
      { label: 'Ask him what he\'s doing later', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['plans_later_talk'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Got any plans for the rest day?" you ask, casually <<$sex_ev[''dress_describe''...
    scene.text(`"Got any plans for the rest day?" you ask, casually ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)) {
      // TODO-QSP: dynamic text: "Not really," <<$npcdesc>> shrugs. "It''s my day off so I''m just chilling."
      scene.text(`"Not really," ${((st as any).npcdesc ?? '')} shrugs. "It's my day off so I'm just chilling."`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSexEvInvite(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "I have to go to work," <<$npcdesc>> replies.
      scene.text(`"I have to go to work," ${((st as any).npcdesc ?? '')} replies.`);
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWhenDoYouGetOff(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['good_time'] === 0  &&  ((s as any).sex_ev ?? 0)?.['annoyed'] === 0  &&  ((s as any).sex_ev ?? 0)?.['mad'] === 0  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] === 0) {
    scene.actions([
      { label: 'I had a good time', goto: ['sex_ev_dress_talking', 'had_a_good_time'] },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['spend_night_thanks'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    scene.actions([
      { label: 'Thanks for letting me stay over', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'stay_over_thanks'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['fuck_count'] > 5  &&  ((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === ''  &&  ((s as any).pain ?? 0)?.['vaginal'] > 10) {
    scene.actions([
      { label: 'I\'m gonna walk funny because of you', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'walk_funny'
  } },
    ]);
  }
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).cum_vol ?? 0)?.['vagina'] > 100  &&  ((s as any).sex_ev ?? 0)?.['cum_leak_talk'] === ''  &&  ((s as any).hour ?? 0) < 10) {
    scene.actions([
      { label: 'Gonna be leaking cum all day', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'leak_all_day'
  } },
    ]);
  }
  if (((s as any).sex_ev ?? 0)?.['sex_ev_ask'] === 0) {
    if ((Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0) {
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'dating'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'fuckbuddy'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'sugar_daddy'  ||  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
        scene.actions([
          { label: 'We should hook up again later (fuckbuddies?)', goto: ['sex_ev_hookup_leave', 'pc_fuckbuddy_request'] },
          { label: 'Maybe I could see you again sometime? (dating?)', goto: ['sex_ev_hookup_leave', 'pc_date_request'] },
        ]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1  ||  ((s as any).hour ?? 0) < 5) {
        scene.actions([
          { label: 'Ask to come over later', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'pc_sex_ev_invite'
  } },
        ]);
      } else {
        if (((s as any).npc_living_together ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
          scene.actions([
            { label: 'Ask to come over tomorrow', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'pc_sex_ev_invite'
  } },
          ]);
        }
      }
    }
  }
  if (((s as any).sex_ev ?? 0)?.['ma_pill_money'] === 0  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0  &&  ((s as any).birth_control ?? 0)?.['using_bc'] <= 0  &&  ((s as any).sex_ev ?? 0)?.['creampie_count'] > 0  &&  ((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    scene.actions([
      { label: 'Ask for money for plan B', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'ma_pill_ask_money1'
  } },
    ]);
  }
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy'  &&  ((s as any).sex_ev ?? 0)?.['sugar_daddy_paid'] === 0  &&  ((s as any).npc_sugar_nice_things ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    if (((s as any).pantyworntype ?? 0) !== 'none'  &&  ((s as any).braworntype ?? 0) === 'none'  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).sex_ev ?? 0)?.['mad'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['loc'] !== 'pc_home') {
      scene.actions([
        { label: 'Give him your panties', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'panty_gift'
  } },
      ]);
    }
    if ((!(Array.isArray((s as any).lover) ? ((s as any).lover as any[]).indexOf(((s as any).npcID ?? 0)) : -1))) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'End things with ' + String(((s as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'break_up_ev'
  } },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['panty_wear'] === 1  &&  ((s as any).sex_ev ?? 0)?.['bra_wear'] === 0  &&  ((s as any).pantyworntype ?? 0) === 'none') {
      // TODO-QSP: $sex_ev_dress_topics[] += "xgt 'sex_ev_dress_talking', 'no_panties_today'"
    }
    if (((s as any).sex_ev ?? 0)?.['dress_end'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sex_ev_ask'] === 0  &&  (Math.floor(Math.random() * 2) + 0) === 1  &&  ((s as any).sex_ev ?? 0)?.['type'] !== 'hookup') {
      // TODO-QSP: $sex_ev_dress_topics[] += "xgt 'sex_ev_dress_talking', 'npc_sex_ev_invite'"
    }
    qspCall(s, 'sex_ev_dress_talking', 'dress_talk_boy');
    scene.actions([
      { label: 'Ask for your sugar money', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'sugar_money'
  } },
      { label: 'Ask for your prostitution money', handler: (st: GameState) => {
    // TODO-QSP: end}
  } },
    ]);
  } else {
    qspCall(s, 'sex_ev_dress_talking', 'pc_dress_talk_menu');
    // TODO-QSP: !
  }
  // TODO-QSP: end}
  if (((s as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((s as any).sex_ev ?? 0)?.['type'] === 'hookup') {
    // TODO-QSP: $sex_ev_dress_topics[] += "xgt 'sex_ev_hookup_leave', 'hookup_continuation'"
  }
  if ((Math.floor(Math.random() * 2) + 1) === 1  &&  Object.keys((s as any).sex_ev_dress_topics ?? {}).length > 0) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic $sex_ev_dress_topics[rand(0, arrsize('sex_ev_dress_t...
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish getting dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing_finish'
  } },
  ]);
  scene.build();
}

function enterHadAGoodTime(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['good_time'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['spend_night_thanks'] === 1) {
    // TODO-QSP: dynamic text: "Last night was really great," you smile at <<$npcdesc>>. "I had a lot of fun."
    scene.text(`"Last night was really great," you smile at ${((s as any).npcdesc ?? '')}. "I had a lot of fun."`);
  } else {
    if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      // TODO-QSP: dynamic text: "I had a great time last night," you smile at <<$npcdesc>>.
      scene.text(`"I had a great time last night," you smile at ${((s as any).npcdesc ?? '')}.`);
    } else {
      // TODO-QSP: dynamic text: "This was really fun," you smile at <<$npcdesc>>. "I had a great time."
      scene.text(`"This was really fun," you smile at ${((s as any).npcdesc ?? '')}. "I had a great time."`);
    }
  }
  if (((s as any).sex_ev ?? 0)?.['blue_ball'] === 0) {
    // TODO-QSP: dynamic text: "Me too," he smirks back, watching you <<$sex_ev[''dress_describe'']>>.
    scene.text(`"Me too," he smirks back, watching you ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
  } else {
    if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"Still bullshit that I didn\'t get to finish properly," he mutters sourly.');
    } else {
      // TODO-QSP: dynamic text: "I just wish it didn''t have to end so soon," he replies, watching you <<$sex_ev...
      scene.text(`"I just wish it didn't have to end so soon," he replies, watching you ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      scene.text('"Sorry," you say ruefully.');
    }
  }
  qspGoto(s, 'sex_ev_dress_talking', 'dress_talk');
  // TODO-QSP: end
  scene.build();
}

function enterStayOverThanks(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['spend_night_thanks'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
    scene.actions([
      { label: 'Thanks for letting me stay over', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['spend_night_thanks'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).sex_ev ?? 0)?.['good_time'] === 1) {
      // TODO-QSP: dynamic text: "Thanks for letting me stay over too," you tell <<$npcdesc>>. "I really apprecia...
      scene.text(`"Thanks for letting me stay over too," you tell ${((st as any).npcdesc ?? '')}. "I really appreciate it."`);
    } else {
      // TODO-QSP: dynamic text: "Thanks for letting me spend the night," you tell <<$npcdesc>>. "I really apprec...
      scene.text(`"Thanks for letting me spend the night," you tell ${((st as any).npcdesc ?? '')}. "I really appreciate it."`);
    }
    if (((st as any).sex_ev ?? 0)?.['virgin'] === 1  &&  ((st as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      // TODO-QSP: dynamic text: "Thanks for letting me pop your cherry," he smirks back, watching you <<$sex_ev[...
      scene.text(`"Thanks for letting me pop your cherry," he smirks back, watching you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    } else {
      if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "Lucky my girlfriend wasn''t coming over," he smirks back, watching you <<$sex_e...
        scene.text(`"Lucky my girlfriend wasn't coming over," he smirks back, watching you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      } else {
        if (((st as any).npc_caretaker ?? 0)?.[String((st as any).npcID ?? 0)] === 1  ||  ((st as any).npc_generous ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "Yeah no problem," he smiles back, watching you <<$sex_ev[''dress_describe'']>>.
          scene.text(`"Yeah no problem," he smiles back, watching you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
        } else {
          if (((st as any).sex_ev ?? 0)?.['pass_out'] === 1) {
            // TODO-QSP: dynamic text: "You passed out on me," he shrugs, watching you <<$sex_ev[''dress_describe'']>>....
            scene.text(`"You passed out on me," he shrugs, watching you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "What was I supposed to do? Wake you up and kick you out?"`);
          } else {
            // TODO-QSP: dynamic text: He shrugs in a "whatever" manner while he watches you <<$sex_ev[''dress_describe...
            scene.text(`He shrugs in a "whatever" manner while he watches you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
          }
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterHadAGoodTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['hookup_continuation_check'] === 0  &&  ((st as any).sex_ev ?? 0)?.['type'] === 'hookup') {
      qspCall(st, 'sex_ev_hookup_leave', 'hookup_continuation');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWalkFunny(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 16) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['walk_funny_day'] = 'day';
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['walk_funny_day'] = 'day tomorrow';
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Embarrassed', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['walk_funny_talk'] = 'embarrassed';
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
      // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
      scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you say, blushing slightly as you pull your panties up over your sore pussy.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
        scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you say, blushing slightly as you pull your pants up over your sore pussy.`);
      } else {
        // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
        scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you say, blushing as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWalkFunny2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Annoyed', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['walk_funny_talk'] = 'annoyed';
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
      // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
      scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you scowl, wincing slightly as you pull your panties up over your sore pussy.`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
        scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you scowl, wincing slightly as you pull your pants up over your sore pussy.`);
      } else {
        // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
        scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you scowl, wincing slightly as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWalkFunny2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Sexy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['walk_funny_talk'] = 'sexy';
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
      // TODO-QSP: dynamic text: "You wore my pussy out," you say ruefully while also sexily rubbing your thighs ...
      scene.text(`"You wore my pussy out," you say ruefully while also sexily rubbing your thighs together even as you pull your panties up over your throbbing snatch. "I'm going to be walking funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you."`);
    } else {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips'  &&  ((st as any).pantyworntype ?? 0) === 'none') {
        // TODO-QSP: dynamic text: "You wore my pussy out," you say ruefully while also sexily rubbing your thighs ...
        scene.text(`"You wore my pussy out," you say ruefully while also sexily rubbing your thighs together even as you pull your pants up over your throbbing snatch. "I'm going to be walking funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you."`);
      } else {
        // TODO-QSP: dynamic text: "I''m going to walk funny all <<$sex_ev[''walk_funny_day'']>> because of you," y...
        scene.text(`"I'm going to walk funny all ${((st as any).sex_ev ?? 0)?.['walk_funny_day'] ?? ''} because of you," you say ruefully while also sexily rubbing your thighs together even as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterWalkFunny2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterWalkFunny2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['rough_enjoy'] === 1) {
    // TODO-QSP: dynamic text: "I know you like it rough," <<$npcdesc>> smirks at your awkward stance.
    scene.text(`"I know you like it rough," ${((s as any).npcdesc ?? '')} smirks at your awkward stance.`);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalkFunny3(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "Sorry," <<$npcdesc>> says with a guilty smile.
      scene.text(`"Sorry," ${((s as any).npcdesc ?? '')} says with a guilty smile.`);
      if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'embarrassed') {
        scene.text('"It\'s okay," you reply. "It\'s my fault too."');
      } else {
        if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'annoyed') {
          scene.text('"At least you have the decency to apologize," you reply with a rueful smirk.');
        } else {
          if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'sexy') {
            scene.text('"Don\'t be. I loved it."');
            scene.text('You flash a sexy smile back at him.');
          }
        }
      }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "You know you liked it," <<$npcdesc>> says, proudly looking at your awkward stan...
        scene.text(`"You know you liked it," ${((s as any).npcdesc ?? '')} says, proudly looking at your awkward stance.`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalkFunny3(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).npc_rough_lover ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          // TODO-QSP: dynamic text: "It wasn''t good sex if you aren''t sore the next day," <<$npcdesc>> snickers, s...
          scene.text(`"It wasn't good sex if you aren't sore the next day," ${((s as any).npcdesc ?? '')} snickers, seemingly taking pleasure in your awkward stance.`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalkFunny3(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "I''ll take credit for that," <<$npcdesc>> says, smirking at your awkward stance...
          scene.text(`"I'll take credit for that," ${((s as any).npcdesc ?? '')} says, smirking at your awkward stance.`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterWalkFunny3(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterWalkFunny3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'embarrassed') {
    scene.text('You can\'t help but blush even deeper at his reply.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'annoyed') {
      scene.text('Your scowl deepens at his reply.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'sexy') {
        scene.text('You flash a sexy smile back at him.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLeakAllDay(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Embarrassed', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_leak_talk'] = 'embarrassed';
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).kanikuli ?? 0) === 0  &&  ((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((st as any).week ?? 0) < 5  ||  ((st as any).week ?? 0) === 7)) {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        scene.text('"I can\'t believe I have to go to class full of your cum," you say, blushing furiously as you pull your panties up over your dripping snatch. The aforementioned cum immediately seeps into the fabric, creating an uncomfortable damp spot. "I\'m going to be sitting in it all day!"');
      } else {
        if (((st as any).pantyworntype ?? 0) === 'none') {
          if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
            scene.text('"I can\'t believe I have to go to class full of your cum," you say, blushing furiously as you slip your skirt up over your hips, feeling the aforementioned cum trickle down your thighs. "I\'m going to be leaking all day! It\'s gonna stain my skirt!"');
          } else {
            if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.text('"I can\'t believe I have to go to class full of your cum," you say, blushing furiously as you pull your pants up over your dripping snatch. The aforementioned cum immediately seeps into the fabric, creating an uncomfortable damp spot between your thighs. "I\'m going to be leaking all day! It\'s gonna stain my skirt!"');
            } else {
              if (((st as any).PCloSkirt ?? 0) > 0) {
                // TODO-QSP: dynamic text: "I can''t believe I have to go to class full of your cum," you say, blushing fur...
                scene.text(`"I can't believe I have to go to class full of your cum," you say, blushing furiously as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, suddenly feeling some trickle down your thighs beneath your skirt. "I'm going to be leaking all day! It's gonna stain my skirt!"`);
              } else {
                // TODO-QSP: dynamic text: "I can''t believe I have to go to class full of your cum," you say, blushing fur...
                scene.text(`"I can't believe I have to go to class full of your cum," you say, blushing furiously as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into the fabric of your pants, creating an uncomfortable damp spot between your thighs. "I'm going to be leaking all day! It's gonna stain my skirt!"`);
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: "I can''t believe I have to go to class full of your cum," you say, blushing fur...
          scene.text(`"I can't believe I have to go to class full of your cum," you say, blushing furiously as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into your panties, creating an uncomfortable damp spot between your thighs. "I'm going to be leaking all day! It's gonna stain my skirt!"`);
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        scene.text('"I\'m so full of your cum, I\'m going to have to sit in it all," you say, blushing furiously as you pull your panties up over your dripping snatch. The aforementioned cum immediately seeps into the fabric, creating an uncomfortable damp spot. "It\'s gonna stain my panties!"');
      } else {
        if (((st as any).pantyworntype ?? 0) === 'none') {
          if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
            scene.text('"I\'m so full of your cum, I\'m going to be leaking all day," you say, blushing furiously as you slip your skirt up over your hips, feeling the aforementioned cum trickle down your thighs. "It\'s gonna stain my skirt!"');
          } else {
            if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.text('"I\'m so full of your cum, I\'m going to have to sit in it all," you say, blushing furiously as you pull your pants up over your dripping snatch. The aforementioned cum immediately seeps into the fabric, creating an uncomfortable damp spot between your thighs.');
            } else {
              if (((st as any).PCloSkirt ?? 0) > 0) {
                // TODO-QSP: dynamic text: "I''m so full of your cum, I''m going to be leaking all day," you say, blushing ...
                scene.text(`"I'm so full of your cum, I'm going to be leaking all day," you say, blushing furiously as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, suddenly feeling some trickle down your thighs beneath your skirt. "It's gonna stain my skirt!"`);
              } else {
                // TODO-QSP: dynamic text: "I''m so full of your cum, I''m going to be sitting in it all day," you say, blu...
                scene.text(`"I'm so full of your cum, I'm going to be sitting in it all day," you say, blushing furiously as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into the fabric of your pants, creating an uncomfortable damp spot between your thighs.`);
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: "I''m so full of your cum, I''m going to be sitting in it all day," you say, blu...
          scene.text(`"I'm so full of your cum, I'm going to be sitting in it all day," you say, blushing furiously as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into your panties, creating an uncomfortable damp spot between your thighs. "It's gonna stain my panties!"`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeakAllDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Annoyed', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_leak_talk'] = 'annoyed';
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).kanikuli ?? 0) === 0  &&  ((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((st as any).week ?? 0) < 5  ||  ((st as any).week ?? 0) === 7)) {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        // TODO-QSP: dynamic text: "I can''t believe I have to go to class like this," you scowl, pulling your pant...
        scene.text(`"I can't believe I have to go to class like this," you scowl, pulling your panties up over your hips and immediately feel a glob of ${((st as any).npcdesc ?? '')}'s cum seep out to form an uncomfortable damp spot on the fabric. "I'm going to be sitting in this all day!"`);
      } else {
        if (((st as any).pantyworntype ?? 0) === 'none') {
          if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
            // TODO-QSP: dynamic text: "I can''t believe I have to go to class like this," you scowl as you slip your s...
            scene.text(`"I can't believe I have to go to class like this," you scowl as you slip your skirt up over your hips and feel ${((st as any).npcdesc ?? '')}'s cum trickle out of your pussy and down your thighs. "If my classmates see this, it's your fault."`);
          } else {
            if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.text('"I can\'t believe I have to go to class like this," you scowl, pulling your pants up over your dripping snatch and immediately feel an uncomfortable damp spot form on the fabric. "Ugh! This is going to be leaking out of me all day!"');
            } else {
              if (((st as any).PCloSkirt ?? 0) > 0) {
                // TODO-QSP: dynamic text: "I can''t believe I have to go to class like this," you scowl as you''re <<$sex_...
                scene.text(`"I can't believe I have to go to class like this," you scowl as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, suddenly feeling some trickle down your thighs beneath your skirt. "I'm going to be leaking all day! It's gonna stain my skirt!"`);
              } else {
                // TODO-QSP: dynamic text: "I can''t believe I have to go to class like this," you scowl as you''re <<$sex_...
                scene.text(`"I can't believe I have to go to class like this," you scowl as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into the fabric of your pants, creating an uncomfortable damp spot between your thighs. "I'm going to be leaking all day! <i>And</i> my pants are gonna stain!"`);
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: "I can''t believe I have to go to class like this," you scowl as you''re <<$sex_...
          scene.text(`"I can't believe I have to go to class like this," you scowl as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. ${((st as any).npcdesc ?? '')}'s cum has already seeped into your panties, creating an uncomfortable damp spot between your thighs. "I'm going to be sitting in cum soaked panties all day because of you."`);
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        scene.text('"I can\'t believe how much cum you pumped into me," you scowl, pulling your panties up over your dripping snatch. The aforementioned cum immediately seeps into the fabric, creating an uncomfortable damp spot. "I\'m going to be leaking <i>all day!</i> My panties are gonna stain!"');
      } else {
        if (((st as any).pantyworntype ?? 0) === 'none') {
          if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
            scene.text('"I can\'t believe how much cum you pumped into me," you scowl as you slip your skirt up over your hips, feeling the aforementioned cum trickle down your thighs. "It\'s gonna be running down my legs all day!"');
          } else {
            if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.text('"I can\'t believe how much cum you pumped into me," you scowl, pulling your pants up over your dripping snatch. The aforementioned cum immediately seeps into the fabric, creating an uncomfortable damp spot between your thighs. "I\'m going to be leaking <i>all day!</i> This is gonna stain!"');
            } else {
              if (((st as any).PCloSkirt ?? 0) > 0) {
                // TODO-QSP: dynamic text: "I can''t believe how much cum you pumped into me," you scowl as you''re <<$sex_...
                scene.text(`"I can't believe how much cum you pumped into me," you scowl as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, suddenly feeling some trickle down your thighs beneath your skirt. "It's gonna be running down my legs all day!"`);
              } else {
                // TODO-QSP: dynamic text: "I can''t believe how much cum you pumped into me," you scowl as you''re <<$sex_...
                scene.text(`"I can't believe how much cum you pumped into me," you scowl as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into the fabric of your pants, creating an uncomfortable damp spot between your thighs. "I'm going to be leaking <i>all day!</i> This is gonna stain!"`);
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: "I can''t believe how much cum you pumped into me," you scowl as you''re <<$sex_...
          scene.text(`"I can't believe how much cum you pumped into me," you scowl as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into your panties, creating an uncomfortable damp spot between your thighs. "I'm going to be leaking <i>all day!</i> This is gonna stain!"`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeakAllDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Sexy', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['cum_leak_talk'] = 'sexy';
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).kanikuli ?? 0) === 0  &&  ((st as any).start_type ?? 0)?.['loc'] === 'sg'  &&  ((st as any).gschoolVars ?? 0)?.['school_diploma'] === 0  &&  ((st as any).gschoolVars ?? 0)?.['block'] === 0  &&  (((st as any).week ?? 0) < 5  ||  ((st as any).week ?? 0) === 7)) {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        scene.text('"My pussy is so full of your cum," you say with a sultry smirk, pulling your panties up over your dripping snatch. It seeps into the fabric, forming a damp spot. "My panties are going to be soaked with it before class is over."');
      } else {
        if (((st as any).pantyworntype ?? 0) === 'none') {
          if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
            scene.text('"My pussy is so full of your cum," you say with a sultry smirk as you slip your skirt up over your hips, feeling the aforementioned cum trickle down your thighs. "You\'re going to be leaking out of me through all my classes."');
          } else {
            if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.text('"My pussy is so full of your cum," you say with a sultry smirk, pulling your pants up over your dripping snatch. It seeps into the fabric, forming a damp spot between your thighs. "This might end up staining my uniform."');
            } else {
              if (((st as any).PCloSkirt ?? 0) > 0) {
                // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk as you''re <<$sex...
                scene.text(`"My pussy is so full of your cum," you say with a sultry smirk as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, feeling it trickle down your thighs beneath your skirt. "You're going to be leaking out of me through all my classes."`);
              } else {
                // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk as you''re <<$sex...
                scene.text(`"My pussy is so full of your cum," you say with a sultry smirk as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into the fabric of your pants, forming a damp spot between your thighs. "This might end up staining my uniform."`);
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk as you''re <<$sex...
          scene.text(`"My pussy is so full of your cum," you say with a sultry smirk as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into your panties, forming a damp spot between your thighs. "My panties are going to be soaked with it before class is over."`);
        }
      }
    } else {
      if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'pulling your panties up') {
        // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk, pulling your pan...
        scene.text(`"My pussy is so full of your cum," you say with a sultry smirk, pulling your panties up over your hips and immediately feeling a glob of ${((st as any).npcdesc ?? '')}'s cum seep out to form a damp spot on the fabric. "You're going to be leaking out of me all day."`);
      } else {
        if (((st as any).pantyworntype ?? 0) === 'none') {
          if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'slipping your skirt up your legs') {
            scene.text('"My pussy is so full of your cum," you say with a sultry smirk as you slip your skirt up over your hips, feeling the thick liquid run down your thighs. "You\'re going to be leaking out of me all day."');
          } else {
            if (((st as any).sex_ev ?? 0)?.['dress_describe'] === 'tugging your pants over your hips') {
              scene.text('"My pussy is so full of your cum," you say with a sultry smirk pulling your pants up over your dripping snatch and immediately feel a damp spot form on the fabric. "This might end up staining my pants."');
            } else {
              if (((st as any).PCloSkirt ?? 0) > 0) {
                // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk as you''re <<$sex...
                scene.text(`"My pussy is so full of your cum," you say with a sultry smirk as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} and feel thick liquid trickle down your thighs beneath your skirt. "You're going to be leaking out of me all day."`);
              } else {
                // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk as you''re <<$sex...
                scene.text(`"My pussy is so full of your cum," you say with a sultry smirk as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. The aforementioned cum has already seeped into the fabric of your pants, forming a damp spot between your thighs. "You're going to be leaking out of me all day."`);
              }
            }
          }
        } else {
          // TODO-QSP: dynamic text: "My pussy is so full of your cum," you say with a sultry smirk as you''re <<$sex...
          scene.text(`"My pussy is so full of your cum," you say with a sultry smirk as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, feeling a distinct damp spot between your legs. "My panties are already soaked with it."`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterLeakAllDay2(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterLeakAllDay2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      // TODO-QSP: dynamic text: "Sorry about that," <<$npcdesc>> replies with a guilty smile, though you can''t ...
      scene.text(`"Sorry about that," ${((s as any).npcdesc ?? '')} replies with a guilty smile, though you can't help noticing that his eyes are fixed between your legs.`);
    } else {
      // TODO-QSP: dynamic text: "Sorry about that," <<$npcdesc>> replies with a guilty smile.
      scene.text(`"Sorry about that," ${((s as any).npcdesc ?? '')} replies with a guilty smile.`);
    }
  } else {
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "Hot," <<$npcdesc>> grins, looking directly between your thighs.
      scene.text(`"Hot," ${((s as any).npcdesc ?? '')} grins, looking directly between your thighs.`);
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLeakAllDay3(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterLeakAllDay3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'embarrassed') {
    scene.text('You can\'t help but blush even deeper at his reply.');
  } else {
    if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'annoyed') {
      scene.text('Your scowl deepens at his reply.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['walk_funny_talk'] === 'sexy') {
        scene.text('You flash a sexy smile back at him.');
      }
    }
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterWhenDoYouGetOff(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask what time he gets off', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "What time do you get off?" you ask while <<$sex_ev[''dress_describe'']>>.
    scene.text(`"What time do you get off?" you ask while ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    // TODO-QSP: dynamic text: "Around <<npc_start_free_time[$npcID]>>. Why?"
    scene.text(`"Around ${((st as any).npc_start_free_time ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}. Why?"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSexEvInvite(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Just curious', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Just curious," you shrug, <<$sex_ev[''dress_describe'']>> next.
    scene.text(`"Just curious," you shrug, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} next.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRuinedPanties(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cum_loc ?? 0)?.['vagina'] > 0  &&  ((s as any).sex_ev ?? 0)?.['ruin_my_panties'] === 0  &&  ((s as any).lastwornpantytype ?? 0) !== 'none'  &&  ((s as any).sex_ev ?? 0)?.['panty_wear'] !== 1) {
    scene.actions([
      { label: '' }, // TODO-QSP: empty action body
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcDateLaterResponse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_know_cheat ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    if (((s as any).npc_fidelity_num ?? 0)?.[String((s as any).npcID ?? 0)] < 7) {
      // TODO-QSP: dynamic text: "You''re still with that stick in the mud?" <<$npcdesc>> scoffs.
      scene.text(`"You're still with that stick in the mud?" ${((s as any).npcdesc ?? '')} scoffs.`);
    }
  } else {
    ((s as any).npc_know_cheat = (s as any).npc_know_cheat ?? {})[String((s as any).npcID ?? 0)] = 1;
    if (((s as any).npc_fidelity_num ?? 0)?.[String((s as any).npcID ?? 0)] < 7) {
      // TODO-QSP: dynamic text: "And you''re fucking me right before your date?" <<$npcdesc>> snickers. "Hot."
      scene.text(`"And you're fucking me right before your date?" ${((s as any).npcdesc ?? '')} snickers. "Hot."`);
    } else {
      // TODO-QSP: dynamic text: "Oh." <<$npcdesc>> looks away uncomfortably.
      scene.text(`"Oh." ${((s as any).npcdesc ?? '')} looks away uncomfortably.`);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcSexEvInvite(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 5) {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['invite_today'] = 1;
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_ev_ask'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    if (((s as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      // TODO-QSP: dynamic text: "Want to do this again later?" you grin, <<$sex_ev[''dress_describe'']>>.
      scene.text(`"Want to do this again later?" you grin, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    } else {
      // TODO-QSP: dynamic text: "Want to do this again later?" you grin, <<$sex_ev[''dress_describe'']>>. "In th...
      scene.text(`"Want to do this again later?" you grin, ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "In the daytime?"`);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      if (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).npcID ?? 0)] - (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] / (Math.floor(Math.random() * 4) + 7)) < ((s as any).daystart ?? 0)) {
        // TODO-QSP: dynamic text: "You''re gonna bleed me dry at this rate," <<$npcdesc>> chuckles ruefully. "But ...
        scene.text(`"You're gonna bleed me dry at this rate," ${((s as any).npcdesc ?? '')} chuckles ruefully. "But I'd like that. How about ${((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}?"`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBusyTime(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexEvPlan(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: "I don''t think I can afford such frequent visits from you," <<$npcdesc>> chuckl...
        scene.text(`"I don't think I can afford such frequent visits from you," ${((s as any).npcdesc ?? '')} chuckles ruefully. "Maybe another time."`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)) {
        if ((Math.floor(Math.random() * 10) + 1)/2 <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
          scene.text('"Maybe. What time were you thinking?"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvTimeset(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "Twice in one day might be a little bit too much for me," <<$npcdesc>> smiles ba...
          scene.text(`"Twice in one day might be a little bit too much for me," ${((s as any).npcdesc ?? '')} smiles back ruefully.`);
          qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
          // TODO-QSP: dynamic text: "Damn," you sigh in disappointment as you continue <<$sex_ev[''dress_describe'']...
          scene.text(`"Damn," you sigh in disappointment as you continue ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if ((Math.floor(Math.random() * 10) + 1)/2 <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
          scene.text('"What time were you thinking?"');
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvTimeset(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "Think I might be a little too tapped out from work," <<$npcdesc>> grunts.
          scene.text(`"Think I might be a little too tapped out from work," ${((s as any).npcdesc ?? '')} grunts.`);
          qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
          // TODO-QSP: dynamic text: "Damn," you sigh in disappointment as you continue <<$sex_ev[''dress_describe'']...
          scene.text(`"Damn," you sigh in disappointment as you continue ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } else {
    if (((s as any).hour ?? 0) >= 5) {
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['invite_tomorrow'] = 1;
      ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_ev_ask'] = 1;
      qspCall(s, 'sex_ev_clothing', 'dress_loop');
      // TODO-QSP: dynamic text: "Want to do this again tomorrow?" you ask, flashing a smile while you''re <<$sex...
      scene.text(`"Want to do this again tomorrow?" you ask, flashing a smile while you're ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
        if (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).npcID ?? 0)] - (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] / 10) < ((s as any).daystart ?? 0)) {
          // TODO-QSP: dynamic text: "You''re gonna bleed me dry at this rate," <<$npcdesc>> chuckles ruefully. "But ...
          scene.text(`"You're gonna bleed me dry at this rate," ${((s as any).npcdesc ?? '')} chuckles ruefully. "But I'd like that. How about ${((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}?"`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBusyTime(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSexEvPlan(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          // TODO-QSP: dynamic text: "I don''t think I can afford such frequent visits from you," <<$npcdesc>> chuckl...
          scene.text(`"I don't think I can afford such frequent visits from you," ${((s as any).npcdesc ?? '')} chuckles ruefully. "Maybe another time."`);
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      } else {
        if (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1  ||  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).week ?? 0) === 7)) {
          if ((Math.floor(Math.random() * 10) + 1)/2 <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
            scene.text('"Hmm... It\'ll be my day off... What time were you thinking?"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvTimeset(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            scene.text('"Sorry, I have some things I need to get done tomorrow."');
            qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
            // TODO-QSP: dynamic text: "Damn," you sigh disappointedly, continuing <<$sex_ev[''dress_describe'']>>
            scene.text(`"Damn," you sigh disappointedly, continuing ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}`);
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        } else {
          if ((Math.floor(Math.random() * 10) + 1)/2 <= ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
            scene.text('"What time were you thinking?"');
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvTimeset(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            scene.text('"Sorry, I have some things I need to get done tomorrow."');
            qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
            // TODO-QSP: dynamic text: "Damn," you sigh disappointedly, continuing <<$sex_ev[''dress_describe'']>>
            scene.text(`"Damn," you sigh disappointedly, continuing ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}`);
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcSexEvTimeset(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'How about...', handler: (st: GameState) => {
    // TODO-QSP: :invalid_timeset
    ((st as any).npc_booty_call_time = (st as any).npc_booty_call_time ?? {})[String((st as any).npcID ?? 0)] = 0;
    if (((st as any).npc_booty_call_time ?? 0)?.[String((st as any).npcID ?? 0)] > 22) {
      // TODO-QSP: jump 'invalid_timeset'
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterPcSexEvInvite2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
  ]);
  scene.build();
}

function enterPcSexEvInvite2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['invite_today'] === 1) {
    if (((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: "How about <<npc_booty_call_time[$npcID]>>?" you smirk <<$sex_ev[''dress_describ...
      scene.text(`"How about ${((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}?" you smirk ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "We can get off together."`);
      scene.text('"Works for me," he grins back.');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteAccepted(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "How about <<npc_booty_call_time[$npcID]>>?" you ask <<$sex_ev[''dress_describe'...
      scene.text(`"How about ${((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}?" you ask ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
      if (((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).npc_end_free_time ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)]) {
        qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
        // TODO-QSP: dynamic text: "Sorry, that doesn''t work for me," <<$npcdesc>> grunts.
        scene.text(`"Sorry, that doesn't work for me," ${((s as any).npcdesc ?? '')} grunts.`);
        qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
        // TODO-QSP: dynamic text: "Damn," you sigh disappointedly, continuing <<$sex_ev[''dress_describe'']>>
        scene.text(`"Damn," you sigh disappointedly, continuing ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        // TODO-QSP: dynamic text: "That sounds good," <<$npcdesc>> grins back. "Okay, see you then."
        scene.text(`"That sounds good," ${((s as any).npcdesc ?? '')} grins back. "Okay, see you then."`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteAccepted(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  } else {
    // TODO-QSP: dynamic text: "How about <<npc_booty_call_time[$npcID]>>?" you ask <<$sex_ev[''dress_describe'...
    scene.text(`"How about ${((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}?" you ask ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).npc_end_free_time ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)]) {
      qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
      // TODO-QSP: dynamic text: "Sorry, that doesn''t work for me," <<$npcdesc>> grunts.
      scene.text(`"Sorry, that doesn't work for me," ${((s as any).npcdesc ?? '')} grunts.`);
      qspCall(s, 'sex_ev_clothing', 'dress_loop_code');
      // TODO-QSP: dynamic text: "Damn," you sigh disappointedly, continuing <<$sex_ev[''dress_describe'']>>
      scene.text(`"Damn," you sigh disappointedly, continuing ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "That sounds good," <<$npcdesc>> grins back. "Okay, see you then."
      scene.text(`"That sounds good," ${((s as any).npcdesc ?? '')} grins back. "Okay, see you then."`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteAccepted(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcSexEvInviteAccepted(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call', 'set_booty_call_date');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['morning_after'] === 1) {
    qspCall(s, 'sex_ev_morning', 'end_morning');
  }
  // TODO-QSP: end
  scene.build();
}

function enterPcSexEvInviteDenied(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'booty_call', 'block_booty_calls');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterDressTalk(s, scene); (s as any).locArgs = __savedLocArgs; }
  if (((s as any).sex_ev ?? 0)?.['morning_after'] === 1) {
    qspCall(s, 'sex_ev_morning', 'end_morning');
  }
  // TODO-QSP: end
  scene.build();
}

function enterNpcSexEvInvite(s: GameState, scene: SceneBuilder): void {
  if ((((Math.floor(Math.random() * 10) + 1) < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]  ||  (Math.floor(Math.random() * 200) + 1) < ((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)])  &&  ((s as any).sex_ev ?? 0)?.['sex_ev_ask'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sex_ev_he_ask'] === 0)  &&  (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'sugar_daddy'  ||  (((s as any).npc_sugar_daddy_timer ?? 0)?.[String((s as any).npcID ?? 0)] - (((s as any).npc_rel ?? 0)?.[String((s as any).npcID ?? 0)] / 10) < ((s as any).daystart ?? 0)))) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sex_ev_ask'] = 1;
    if (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_tomorrow'] = 1;
      if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "You busy tomorrow?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>...
        scene.text(`"You busy tomorrow?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It'll be my day off and my girlfriend won't be around. Want to come over and do this again?"`);
      } else {
        // TODO-QSP: dynamic text: "You busy tomorrow?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>...
        scene.text(`"You busy tomorrow?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It'll be my day off. Want to come by and do this again?"`);
      }
    } else {
      if (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  &&  (((st as any).sex_ev ?? 0)?.['sleepover'] === 1  ||  ((st as any).hour ?? 0) < 5)) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_today'] = 1;
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
          ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
          // TODO-QSP: dynamic text: "You busy later?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>>. ...
          scene.text(`"You busy later?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Today's my day off and my girlfriend won't be around. Want to come over and do this again?"`);
        } else {
          // TODO-QSP: dynamic text: "You busy later?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>>. ...
          scene.text(`"You busy later?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It's my day off. Want to come by and do this again?"`);
        }
      } else {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_tomorrow'] = 1;
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1  &&  ((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] === 6) {
          ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
          // TODO-QSP: dynamic text: "You busy tomorrow?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>...
          scene.text(`"You busy tomorrow?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "My girlfriend won't be around. Want to come over and do this again?"`);
        } else {
          // TODO-QSP: dynamic text: "You busy tomorrow?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>...
          scene.text(`"You busy tomorrow?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Want to come by and do this again?"`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBusyLater(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'What time?', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "That depends," you say, <<$sex_ev[''dress_describe'']>>. "What time were you th...
    scene.text(`"That depends," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "What time were you thinking?"`);
    // TODO-QSP: dynamic text: "<<npc_start_free_time[$npcID]>>?" <<$npcdesc>> asks.
    scene.text(`"${((st as any).npc_start_free_time ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}?" ${((st as any).npcdesc ?? '')} asks.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBusyTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexEvPlan(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
    ]);
  } else {
    ((s as any).sex_ev = (s as any).sex_ev ?? {})['sex_ev_he_ask'] = 1;
    qspGoto(s, 'sex_ev_dress_talking', 'dress_talk');
  }
  // TODO-QSP: end
  scene.build();
}

function enterSexEvInviteLater(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    ((st as any).sex_ev = (st as any).sex_ev ?? {})['sex_ev_ask'] = 1;
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0)  &&  ((st as any).sex_ev ?? 0)?.['sleepover'] === 1) {
      // TODO-QSP: $sex_ev_plan_loc[$npcID] = 'lover_home'
      ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_today'] = 1;
      if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
        ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
        // TODO-QSP: dynamic text: "You busy later?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>>. ...
        scene.text(`"You busy later?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It's my day off and my girlfriend won't be around. Want to come over to my place and do this again?"`);
      } else {
        // TODO-QSP: dynamic text: "You busy later?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>>. ...
        scene.text(`"You busy later?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It's my day off. Want to come by and do this again?"`);
      }
    } else {
      if ((((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === ((st as any).week ?? 0) + 1)  ||  (((st as any).week ?? 0) === 7  &&  ((st as any).npc_day_off ?? 0)?.[String((st as any).npcID ?? 0)] === 1)) {
        ((st as any).sex_ev = (st as any).sex_ev ?? {})['invite_tomorrow'] = 1;
        if (((st as any).npc_girlfriend ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
          ((st as any).pc_know_npc_has_girlfriend = (st as any).pc_know_npc_has_girlfriend ?? {})[String((st as any).npcID ?? 0)] = 1;
          // TODO-QSP: dynamic text: "You busy tomorrow?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>...
          scene.text(`"You busy tomorrow?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "My girlfriend won't be around. Want to come over and do this again?"`);
        } else {
          // TODO-QSP: dynamic text: "You busy tomorrow?" <<$npcdesc>> asks as you''re <<$sex_ev[''dress_describe'']>...
          scene.text(`"You busy tomorrow?" ${((st as any).npcdesc ?? '')} asks as you're ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "It'll be my day off. Want to come by and do this again?"`);
        }
      }
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBusyLater(s, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'What time?', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "That depends," you say, <<$sex_ev[''dress_describe'']>>. "What time were you th...
    scene.text(`"That depends," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "What time were you thinking?"`);
    // TODO-QSP: dynamic text: "<<npc_start_free_time[$npcID]>>?" <<$npcdesc>> asks.
    scene.text(`"${((st as any).npc_start_free_time ?? 0)?.[String((st as any).npcID ?? 0)] ?? ''}?" ${((st as any).npcdesc ?? '')} asks.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBusyTime(s, scene); (st as any).locArgs = __savedLocArgs; }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexEvPlan(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBusyLater(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m busy', handler: (st: GameState) => {
    qspCall(st, 'booty_call', 'block_booty_calls');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1) {
      // TODO-QSP: dynamic text: "I can''t, sorry," you say, <<$sex_ev[''dress_describe'']>>. "I''ve got a busy s...
      scene.text(`"I can't, sorry," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I've got a busy schedule tomorrow."`);
    } else {
      // TODO-QSP: dynamic text: "I can''t, sorry," you say, <<$sex_ev[''dress_describe'']>>. "I''m busy today."
      scene.text(`"I can't, sorry," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I'm busy today."`);
    }
    // TODO-QSP: dynamic text: "Damn," <<$npcdesc>> says disappointedly.
    scene.text(`"Damn," ${((st as any).npcdesc ?? '')} says disappointedly.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterBusyTime(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m busy', handler: (st: GameState) => {
    qspCall(st, 'booty_call', 'block_booty_calls');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I can''t, sorry," you say, <<$sex_ev[''dress_describe'']>>. "I have something t...
    scene.text(`"I can't, sorry," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I have something to do then."`);
    // TODO-QSP: dynamic text: "Damn," <<$npcdesc>> says disappointedly.
    scene.text(`"Damn," ${((st as any).npcdesc ?? '')} says disappointedly.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['morning_after'] === 1) {
      qspCall(st, 'sex_ev_morning', 'end_morning');
    }
  } },
  ]);
  scene.build();
}

function enterSexEvPlan(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
    scene.actions([
      { label: 'As long as you\'re paying', handler: (st: GameState) => {
    qspCall(st, 'booty_call', 'set_booty_call_date');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "As long as you''re paying for it," you smirk, <<$sex_ev[''dress_describe'']>>.
    scene.text(`"As long as you're paying for it," you smirk, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if ((Math.floor(Math.random() * 2) + 0) === 1) {
      // TODO-QSP: dynamic text: "Greedy bitch," <<$npcdesc>> grins back lewdly.
      scene.text(`"Greedy bitch," ${((st as any).npcdesc ?? '')} grins back lewdly.`);
    } else {
      // TODO-QSP: dynamic text: "Great," <<$npcdesc>> grins back.
      scene.text(`"Great," ${((st as any).npcdesc ?? '')} grins back.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['morning_after'] === 1) {
      qspCall(st, 'sex_ev_morning', 'end_morning');
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sounds good', handler: (st: GameState) => {
    qspCall(st, 'booty_call', 'set_booty_call_date');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Sounds good," you grin, <<$sex_ev[''dress_describe'']>>. "I''ll see you then."
    scene.text(`"Sounds good," you grin, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I'll see you then."`);
    // TODO-QSP: dynamic text: "Great," <<$npcdesc>> grins back.
    scene.text(`"Great," ${((st as any).npcdesc ?? '')} grins back.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['morning_after'] === 1) {
      qspCall(st, 'sex_ev_morning', 'end_morning');
    }
  } },
    { label: 'I\'ve got nothing better to do', handler: (st: GameState) => {
    qspCall(st, 'booty_call', 'set_booty_call_date');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Sure," you smirk, <<$sex_ev[''dress_describe'']>>. "I got nothing better to do....
    scene.text(`"Sure," you smirk, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I got nothing better to do."`);
    // TODO-QSP: dynamic text: "Great," <<$npcdesc>> grins back.
    scene.text(`"Great," ${((st as any).npcdesc ?? '')} grins back.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['morning_after'] === 1) {
      qspCall(st, 'sex_ev_morning', 'end_morning');
    }
  } },
    { label: 'I could fit it in', handler: (st: GameState) => {
    qspCall(st, 'booty_call', 'set_booty_call_date');
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I think I can fit that in," you smirk, <<$sex_ev[''dress_describe'']>>.
    scene.text(`"I think I can fit that in," you smirk, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).npc_humor ?? 0)?.[String((st as any).npcID ?? 0)] === 'perverted') {
      // TODO-QSP: dynamic text: "You sure can," <<$npcdesc>> grins lewdly at you.
      scene.text(`"You sure can," ${((st as any).npcdesc ?? '')} grins lewdly at you.`);
    } else {
      // TODO-QSP: dynamic text: "Great," <<$npcdesc>> grins back.
      scene.text(`"Great," ${((st as any).npcdesc ?? '')} grins back.`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
    if (((st as any).sex_ev ?? 0)?.['morning_after'] === 1) {
      qspCall(st, 'sex_ev_morning', 'end_morning');
    }
  } },
    { label: 'Another time?', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "That''s no good for me," you shake your head while <<$sex_ev[''dress_describe''...
    scene.text(`"That's no good for me," you shake your head while ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I have something to do then. What about..."`);
    scene.actions([
      { label: 'Pick a time', handler: (st: GameState) => {
    // TODO-QSP: :invalid_timeset2
    ((st as any).npc_booty_call_time = (st as any).npc_booty_call_time ?? {})[String((st as any).npcID ?? 0)] = 0;
    if (((st as any).npc_booty_call_time ?? 0)?.[String((st as any).npcID ?? 0)] > 22) {
      // TODO-QSP: jump 'invalid_timeset2'
    } else {
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSexEvPlan2(s, scene); (st as any).locArgs = __savedLocArgs; }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexEvPlan2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_leave', 'dressing_image');
  // TODO-QSP: dynamic text: "That''s no good for me," you shake your head while <<$sex_ev[''dress_describe''...
  scene.text(`"That's no good for me," you shake your head while ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I have something to do then. What about ${((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}? Does that work for you?"`);
  if ((((s as any).sex_ev ?? 0)?.['invite_tomorrow'] === 1  &&  (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0) + 1  ||  (((s as any).week ?? 0) === 7  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === 1)))  ||  (((s as any).sex_ev ?? 0)?.['invite_today'] === 1  &&  ((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0))) {
    scene.text('"Sure," he smirks. "It\'s my day off. Any time works for me."');
    scene.text('"Great," you say back. "I\'ll swing by tomorrow."');
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteAccepted(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] > ((s as any).npc_end_free_time ?? 0)?.[String((s as any).npcID ?? 0)]  ||  ((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] < ((s as any).npc_start_free_time ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: dynamic text: "No," <<$npcdesc>> grunts with a shake of his head. "I''ll be busy then too."
      scene.text(`"No," ${((s as any).npcdesc ?? '')} grunts with a shake of his head. "I'll be busy then too."`);
      scene.text('"Damn it all!" you curse. "Why is it so hard just to schedule a time to have sex?!"');
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteDenied(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      // TODO-QSP: dynamic text: "I think that works for me," <<$npcdesc>> says with a nod of his head.
      scene.text(`"I think that works for me," ${((s as any).npcdesc ?? '')} says with a nod of his head.`);
      // TODO-QSP: dynamic text: "Great," you smile back. "Then I''ll see you at <<npc_booty_call_time[$npcID]>>....
      scene.text(`"Great," you smile back. "Then I'll see you at ${((s as any).npc_booty_call_time ?? 0)?.[String((s as any).npcID ?? 0)] ?? ''}."`);
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPcSexEvInviteAccepted(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMaPillAskMoney1(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill_money'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  // TODO-QSP: dynamic text: "Hey, can you give me money for some plan B?" you ask <<$npcdesc>> as you''re <<...
  scene.text(`"Hey, can you give me money for some plan B?" you ask ${((s as any).npcdesc ?? '')} as you're ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I'd really like to not get pregnant."`);
  if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  (Math.floor(Math.random() * 4) + 1) > 1) {
    // TODO-QSP: dynamic text: "Are you kidding? I barely have any money myself," <<$npcdesc>> scowls. "Buy it ...
    scene.text(`"Are you kidding? I barely have any money myself," ${((s as any).npcdesc ?? '')} scowls. "Buy it yourself."`);
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie'] > 0) {
      scene.actions([
        { label: '"It\'s your fault (teasing)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Hey, this is your fault after all," you reply, <<$sex_ev[''dress_describe'']>> ...
    scene.text(`"Hey, this is your fault after all," you reply, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} and giving him a smirk. "You're the one who blew his load inside me."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
        { label: '"It\'s your fault (annoyed)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Hey! You don''t get to be annoyed at me after the shit you pulled, " you scowl,...
    scene.text(`"Hey! You don't get to be annoyed at me after the shit you pulled, " you scowl, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "<i>You're</i> the one who blasted a load of baby batter up my cunt."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      ]);
    }
    scene.actions([
      { label: 'Sorry', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Sorry," you reply, sheepishly <<$sex_ev[''dress_describe'']>>.
    scene.text(`"Sorry," you reply, sheepishly ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } else {
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        if ((Math.floor(Math.random() * 3) + 1) === 1) {
          // TODO-QSP: dynamic text: "Uhh, yeah... let me..." <<$npcdesc>> has a worried expression on his face as he...
          scene.text(`"Uhh, yeah... let me..." ${((s as any).npcdesc ?? '')} has a worried expression on his face as he scrambles through drawers and trouser pockets. Eventually he returns empty handed with a sheepish look on his face. "I- er... I don't have anything to spare right now. Not unless I don't want to pay rent. Sorry..."`);
          scene.actions([
            { label: 'Apologize', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Sorry," you repeat back to <<$npcdesc>>, feeling a pang of guilt hit you while ...
    scene.text(`"Sorry," you repeat back to ${((st as any).npcdesc ?? '')}, feeling a pang of guilt hit you while ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I didn't mean to make things hard on you."`);
    scene.text('"No! It wouldn\'t be a problem if I had some money!" he says insistently. "I just... don\'t... right now..."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
          ]);
        } else {
          if ((Math.floor(Math.random() * 2) + 1) === 1) {
            // TODO-QSP: dynamic text: "Uhh, yeah... let me..." <<$npcdesc>> has a worried expression on his face as he...
            scene.text(`"Uhh, yeah... let me..." ${((s as any).npcdesc ?? '')} has a worried expression on his face as he scrambles through drawers and trouser pockets. Eventually he returns with a few crumpled notes. "Is ${qspFunc(s, 'money', 'string_profit', 400)} enough...?"`);
            scene.actions([
              { label: 'Feel bad (refuse the money)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: A pang of guilt hits you that you try to hide by <<$sex_ev[''dress_describe'']>>...
    scene.text(`A pang of guilt hits you that you try to hide by ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    scene.text('"Oh uhm... You know what? It\'s okay. I\'ll figure it out on my own."');
    scene.text('"Are you sure?" he says, holding out the money.');
    scene.actions([
      { label: 'It\'s fine', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Yeah, it''s fine," you say, <<$sex_ev[''dress_describe'']>> and give him a fake...
    scene.text(`"Yeah, it's fine," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} and give him a fake smile. "Don't worry about it."`);
    scene.text('"Oh. Well. If you say so..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks a little guilty and a lot relieved as he puts the money away.
    scene.text(`${((st as any).npcdesc ?? '')} looks a little guilty and a lot relieved as he puts the money away.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Reluctantly accept', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 400);
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Uhm... Well..." you mumble. A few seconds go by as you hem and haw while <<$sex...
    scene.text(`"Uhm... Well..." you mumble. A few seconds go by as you hem and haw while ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "If it's really okay..."`);
    scene.text('You reach out to take the money. The guilt intensifies as he smiles back at you.');
    scene.text('"It\'s no problem."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
              { label: '"I\'ll make it work"', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 400);
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I''ll make it work," you smile at <<$npcdesc>> before <<$sex_ev[''dress_describ...
    scene.text(`"I'll make it work," you smile at ${((st as any).npcdesc ?? '')} before ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Thanks."`);
    scene.text('"It\'s no problem," he smiles back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: "Uhh, yeah... let me..." <<$npcdesc>> has a worried expression on his face as he...
            scene.text(`"Uhh, yeah... let me..." ${((s as any).npcdesc ?? '')} has a worried expression on his face as he scrambles through drawers and trouser pockets. Eventually he returns with a few crumpled notes. "I think I've got... ${qspFunc(s, 'money', 'string_profit', 800)}? Is that enough?"`);
            scene.actions([
              { label: 'Feel bad (refuse the money)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: A pang of guilt hits you that you try to hide by <<$sex_ev[''dress_describe'']>>...
    scene.text(`A pang of guilt hits you that you try to hide by ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    scene.text('"Oh uhm... You know what? It\'s okay. I\'ll figure it out on my own."');
    scene.text('"Are you sure?" he says, holding out the money.');
    scene.actions([
      { label: 'It\'s fine', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Yeah, it''s fine," you say, <<$sex_ev[''dress_describe'']>> and give him a fake...
    scene.text(`"Yeah, it's fine," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} and give him a fake smile. "Don't worry about it."`);
    scene.text('"Oh. Well. If you say so..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks a little guilty and a lot relieved as he puts the money away.
    scene.text(`${((st as any).npcdesc ?? '')} looks a little guilty and a lot relieved as he puts the money away.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Reluctantly accept', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 800);
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Uhm... Well..." you mumble. A few seconds go by as you hem and haw while <<$sex...
    scene.text(`"Uhm... Well..." you mumble. A few seconds go by as you hem and haw while ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "If it's really okay..."`);
    scene.text('You reach out to take the money. The guilt intensifies as he smiles back at you.');
    scene.text('"It\'s no problem."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
              { label: 'Thank him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "That''s perfect," you smile at <<$npcdesc>> before <<$sex_ev[''dress_describe''...
    scene.text(`"That's perfect," you smile at ${((st as any).npcdesc ?? '')} before ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Thanks."`);
    scene.text('"It\'s no problem," he smiles back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
              { label: '"I owe you"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You''re a lifesaver," you smile at <<$npcdesc>> before <<$sex_ev[''dress_descri...
    scene.text(`"You're a lifesaver," you smile at ${((st as any).npcdesc ?? '')} before ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I owe you one."`);
    scene.text('"It\'s no problem," he smiles back.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
              { label: '"I\'ll get you the change"', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Thanks," you smile at <<$npcdesc>> before <<$sex_ev[''dress_describe'']>>. "I''...
    scene.text(`"Thanks," you smile at ${((st as any).npcdesc ?? '')} before ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I'll pay you back the change, I promise," you add teasingly.`);
    scene.text('"Keep the change," he chuckles in return. "What am I gonna do with a few extra rubles anyways?"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
            ]);
          }
        }
      } else {
        // TODO-QSP: dynamic text: "Sure," <<$npcdesc>> says, reaching for his wallet. "How much do you need?"
        scene.text(`"Sure," ${((s as any).npcdesc ?? '')} says, reaching for his wallet. "How much do you need?"`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMaPillAskMoney2(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    } else {
      if ((Math.floor(Math.random() * 4) + 1) === 1  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"Actually, I\'m a little strapped for cash myself," he mumbles embarrassedly. "I need every ruble right now. Sorry."');
        qspCall(s, 'sex_ev_talk', 'borrow_money_exit');
      } else {
        // TODO-QSP: dynamic text: "Sure," <<$npcdesc>> says, reaching for his wallet. "How much do you need?"
        scene.text(`"Sure," ${((s as any).npcdesc ?? '')} says, reaching for his wallet. "How much do you need?"`);
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterMaPillAskMoney2(s, scene); (s as any).locArgs = __savedLocArgs; }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterMaPillAskMoney2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 100) ?? '') + ' (just a little)', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 100);
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I''m just a little short right now," you say, <<$sex_ev[''dress_describe'']>>. ...
    scene.text(`"I'm just a little short right now," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Only about ${qspFunc(s, 'money', 'string_profit', 100)} or so."`);
    // TODO-QSP: dynamic text: "Easy enough," he says and hands you a <<$func(''money'', ''string_profit'', 100...
    scene.text(`"Easy enough," he says and hands you a ${qspFunc(s, 'money', 'string_profit', 100)} note.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMaPillAskMoney3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 370) ?? '') + ' (half price)', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 400);
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I''ve only got enough for half," you say, <<$sex_ev[''dress_describe'']>>. "I t...
    scene.text(`"I've only got enough for half," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I think that's... ${qspFunc(s, 'money', 'string_profit', 370)}?"`);
    // TODO-QSP: dynamic text: "Here, take <<$func(''money'', ''string_profit'', 400)>>," he says, handing you ...
    scene.text(`"Here, take ${qspFunc(s, 'money', 'string_profit', 400)}," he says, handing you a couple notes. "I'm not about to count out ${qspFunc(s, 'money', 'string_profit', 30)} in change."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMaPillAskMoney3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: '', labelFn: (s: GameState) => String(qspFunc(s, 'money', 'string_profit', 740) ?? '') + ' (full price)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "<<$func(''money'', ''string_profit'', 740)>>? I think that''s how much it costs...
    scene.text(`"${qspFunc(s, 'money', 'string_profit', 740)}? I think that's how much it costs. I... don't really have any money right now," you admit while ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    if (((st as any).npc_selfish ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      qspCall(st, 'money', 'earn', 740);
      // TODO-QSP: dynamic text: "Seriously?" <<$npcdesc>> scowls as hands over the notes. "You don''t have <i>an...
      scene.text(`"Seriously?" ${((st as any).npcdesc ?? '')} scowls as hands over the notes. "You don't have <i>any</i> money? Get a job or something."`);
    } else {
      qspCall(st, 'money', 'earn', 800);
      // TODO-QSP: dynamic text: "Here, just take <<$func(''money'', ''string_profit'', 800)>>," <<$npcdesc>> say...
      scene.text(`"Here, just take ${qspFunc(s, 'money', 'string_profit', 800)}," ${((st as any).npcdesc ?? '')} says, handing you several notes. "Better than you getting pregnant."`);
    }
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterMaPillAskMoney3(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMaPillAskMoney3(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['accidental_creampie'] > 0) {
    scene.actions([
      { label: 'Don\'t cum inside me next time (tease)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text('"If you don\'t want to pay for birth control, maybe you shouldn\'t come inside me," you snicker.');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Don\'t cum inside me next time (annoyed)', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    scene.text('"Hey, don\'t forget this is your fault," you snap. "I wouldn\'t need the money if you didn\'t come inside me. You\'re just paying the consequences of your own actions."');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Thank him', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Thanks," you grin at <<$npcdesc>> after finishing <<$sex_ev[''dress_describe'']...
    scene.text(`"Thanks," you grin at ${((st as any).npcdesc ?? '')} after finishing ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "You're a lifesaver."`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    { label: 'Kiss his cheek', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "You''re the best," you smile, finishing <<$sex_ev[''dress_describe'']>> and mov...
    scene.text(`"You're the best," you smile, finishing ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''} and move over to peck ${((st as any).npcdesc ?? '')} on the cheek.`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterDressTalk(s, scene); (st as any).locArgs = __savedLocArgs; }
  } },
  ]);
  scene.build();
}

function enterMoneyForMaPill(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['ma_pill_money'] = 1;
  qspCall(s, 'money', 'earn', 1000);
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  // TODO-QSP: dynamic text: "Hey," <<$npcdesc>> says as you''re <<$sex_ev[''dress_describe'']>>. "Don''t for...
  scene.text(`"Hey," ${((s as any).npcdesc ?? '')} says as you're ${((s as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Don't forget this."`);
  // TODO-QSP: dynamic text: He grabs his wallet and pulls out a <<$func(''money'', ''string_profit'', 1000)>...
  scene.text(`He grabs his wallet and pulls out a ${qspFunc(s, 'money', 'string_profit', 1000)} note, holding it out to you.`);
  scene.text('"For the morning after pill," he says.');
  scene.text('"Oh yeah, thanks," you nod, taking it from him.');
  qspCall(s, 'sex_ev_leave', 'dressing2');
  // TODO-QSP: end
  scene.build();
}

function enterSugarMoney(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['sugar_daddy_paid'] = 1;
  ((s as any).sex_ev = (s as any).sex_ev ?? {})['prostitution_paid'] = 1;
  // TODO-QSP: gs 'money', 'earn', npc_sugar_daddy_price[$npcID]
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask demurely', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Now that I''ve given you your sugar," you say, <<$sex_ev[''dress_describe'']>>....
    scene.text(`"Now that I've given you your sugar," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Can I get mine?"`);
    // TODO-QSP: dynamic text: You pause to make innocent doe eyes at <<$npcdesc>>.
    scene.text(`You pause to make innocent doe eyes at ${((st as any).npcdesc ?? '')}.`);
    // TODO-QSP: dynamic text: "Of course, darling," he grins, pulling out <<$func(''money'', ''string_profit''...
    scene.text(`"Of course, darling," he grins, pulling out ${qspFunc(s, 'money', 'string_profit', ((st as any).npc_sugar_daddy_price ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} in cash and handing it over.`);
    scene.text('"Thank you daddy," you smile sweetly as you tuck it into your purse.');
    qspCall(st, 'sex_ev_leave', 'dressing2');
  } },
    { label: 'Ask transactionally', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Can I get paid now?" you ask bluntly, barely even looking at him as you <<$sex_...
    scene.text(`"Can I get paid now?" you ask bluntly, barely even looking at him as you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> gives you a look but reaches over to his wallet and pulls out <<$fu...
    scene.text(`${((st as any).npcdesc ?? '')} gives you a look but reaches over to his wallet and pulls out ${qspFunc(s, 'money', 'string_profit', ((st as any).npc_sugar_daddy_price ?? 0)?.[String((st as any).npcID ?? 0)] ?? '')} in cash and handing it over.`);
    scene.text('"Thanks," you reply absent-mindedly as you stuff the money into your purse.');
    qspCall(st, 'sex_ev_leave', 'dressing2');
  } },
  ]);
  scene.build();
}

function enterBreakUpEv(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  // TODO-QSP: iif($sex_ev['loc'] ! 'pc_home', '"This is the last time I''m coming over," you say abruptly while <<...
  // TODO-QSP: dynamic text: "Huh?" <<$npcdesc>> looks at you oddly. "What are you talking about?"
  scene.text(`"Huh?" ${((s as any).npcdesc ?? '')} looks at you oddly. "What are you talking about?"`);
  if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'boyfriend') {
    scene.actions([
      { label: 'I\'m breaking up with you', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "I''m breaking up with you," you say, <<$sex_ev[''dress_describe'']>>.
    scene.text(`"I'm breaking up with you," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}.`);
    scene.text('"What?! Why?"');
    qspGoto(st, 'sex_ev_dress_talking', 'breakup_explain');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Don\'t text me anymore', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_clothing', 'dress_loop');
    if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'fuckbuddy') {
      // TODO-QSP: dynamic text: "Don''t text me to come over," you say, <<$sex_ev[''dress_describe'']>>. "We can...
      scene.text(`"Don't text me to come over," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "We can't be fuckbuddies anymore."`);
    } else {
      if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'sugar_daddy') {
        // TODO-QSP: dynamic text: "Don''t text me to come over," you say, <<$sex_ev[''dress_describe'']>>. "I can'...
        scene.text(`"Don't text me to come over," you say, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I can't be your sugar baby anymore."`);
      }
    }
    scene.text('"Why not?" he asks.');
    qspGoto(st, 'sex_ev_dress_talking', 'breakup_explain');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBreakupExplain(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_dress_talking', 'no_more_cheating_breakup');
  // TODO-QSP: end
  scene.actions([
    { label: 'Don\'t explain', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    if (((st as any).npc_rel_type ?? 0)?.[String((st as any).npcID ?? 0)] === 'boyfriend') {
      scene.text('"I just can\'t be with you anymore," you say. "I\'m sorry."');
    } else {
      scene.text('"I just can\'t do this any longer," you say. "I\'m sorry."');
    }
    scene.text('You grab your things and leave.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
    { label: 'You don\'t satisfy me', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'unsatisfied_breakup'
  } },
  ]);
  scene.build();
}

function enterUnsatisfiedBreakup(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_two_pump ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    scene.actions([
      { label: 'You\'re a two pump chump', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'dress_loop');
    // TODO-QSP: dynamic text: "You''re just not what I want out of a fuckbuddy," you say flatly as you <<$sex_...
    scene.text(`"You're just not what I want out of a fuckbuddy," you say flatly as you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "You come too fast. I can't trust you to get me off."`);
    scene.text('"Wait but-"');
    scene.actions([
      { label: 'Grab your things', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'grab_things_leave'
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)] < 5) {
      scene.actions([
        { label: 'You don\'t last long enough for me', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'dress_loop');
    // TODO-QSP: dynamic text: "You''re just not what I want out of a fuckbuddy," you say flatly as you <<$sex_...
    scene.text(`"You're just not what I want out of a fuckbuddy," you say flatly as you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "You can't keep it up and I can't trust you to get me off."`);
    scene.text('"Wait but-"');
    scene.actions([
      { label: 'Grab your things', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'grab_things_leave'
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You last too long', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'dress_loop');
    // TODO-QSP: dynamic text: "You''re just not what I want out of a fuckbuddy," you say flatly as you <<$sex_...
    scene.text(`"You're just not what I want out of a fuckbuddy," you say flatly as you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "Honestly, your sex drive is way too high. By the time you're satisfied, my pussy is sore."`);
    scene.text('"Wait but-"');
    scene.actions([
      { label: 'Grab your things', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'grab_things_leave'
  } },
    ]);
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sexually incompatible', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    // TODO-QSP: dynamic text: "You''re not what I want out of a fuckbuddy," you say flatly as you <<$sex_ev[''...
    scene.text(`"You're not what I want out of a fuckbuddy," you say flatly as you ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I just don't think we're sexually compatible."`);
    scene.text('You shrug once, grab your things, and leave without another word.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'End things with ' + String(((st as any).npcdesc ?? '') ?? ''), handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'break_up_ev'
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIsntGoingToWork(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_lover ?? 0) > 0  &&  (((s as any).npc_know_have_boyfriend ?? 0) + ((s as any).npc_know_have_girlfriend ?? 0) === 0)) {
    if (((s as any).stat ?? 0)?.['boyfriends_current'] > 0) {
      scene.actions([
        { label: 'I can\'t keep cheating on my boyfriend', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    if (((st as any).npc_know_cheat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I can\'t keep cheating on my boyfriend like this," you say, hanging your head shamefully. "It\'s wrong, and I just can\'t do this anymore. I have to go."');
    } else {
      scene.text('"The truth is, I\'m in a relationship with somebody," you say, hanging your head shamefully. "I\'ve been cheating on them with you this whole time. It\'s wrong, and I— I just can\'t do this anymore!"');
    }
    scene.text('You grab your things and rush out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
      ]);
    }
    if (((s as any).pcs_girlfriends ?? 0) > 0) {
      scene.actions([
        { label: 'I can\'t keep cheating on my girlfriend', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    if (((st as any).npc_know_cheat ?? 0)?.[String((st as any).npcID ?? 0)] === 1) {
      scene.text('"I can\'t keep cheating on my girlfriend like this," you say, hanging your head shamefully. "It\'s wrong, and I just can\'t do this anymore. I have to go."');
    } else {
      scene.text('"The truth is, I\'m in a relationship with somebody," you say, hanging your head shamefully. "I\'ve been cheating on them with you this whole time. It\'s wrong, and I— I just can\'t do this anymore!"');
    }
    scene.text('You grab your things and rush out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'I\'ve started seeing somebody', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'dress_loop');
    // TODO-QSP: dynamic text: "The truth is, I''ve started seeing somebody. The sex has been good, but..." You...
    scene.text(`"The truth is, I've started seeing somebody. The sex has been good, but..." You shake your head, ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "I can't keep doing this. I don't want to fuck things up with them."`);
    if (((st as any).npc_fidelity_num ?? 0)?.[String((st as any).npcID ?? 0)] < 7) {
      scene.text('"Come on," he says. "We\'re just having fun. It\'s not cheating if it\'s just physical. When you masturbate in the shower, you\'re not cheating on him with your showerhead are you?"');
      scene.actions([
        { label: 'No means no', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"You\'re not going to change my mind," you say. "We\'re done."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
        { label: 'Well...', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'dress_loop');
    // TODO-QSP: dynamic text: You pause halfway through <<$sex_ev[''dress_describe'']>>, biting your lip in co...
    scene.text(`You pause halfway through ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}, biting your lip in consideration.`);
    scene.actions([
      { label: 'As long as it\'s just physical', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_dress_talking', 'dress_loop');
    // TODO-QSP: dynamic text: "Well..." you say, slowly <<$sex_ev[''dress_describe'']>>. "As long as it''s <i>...
    scene.text(`"Well..." you say, slowly ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "As long as it's <i>just</i> physical..."`);
    // TODO-QSP: dynamic text: "Thatta girl," <<$npcdesc>> grins from bed.
    scene.text(`"Thatta girl," ${((st as any).npcdesc ?? '')} grins from bed.`);
    qspCall(st, 'sex_ev_after', 'cheating_end');
  } },
      { label: 'Set some rules', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Okay..." you say, slowly <<$sex_ev[''dress_describe'']>>. "But there have to be...
    scene.text(`"Okay..." you say, slowly ${((st as any).sex_ev ?? 0)?.['dress_describe'] ?? ''}. "But there have to be rules!"`);
    qspCall(st, 'sex_ev_talk', 'cheating_rules');
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: "Oh." <<$npc_firstname[$npclastsaved]>> looks at you. "I guess that''s fair. So....
      scene.text(`"Oh." ${((st as any).npc_firstname ?? 0)?.[String((st as any).npclastsaved ?? 0)] ?? ''} looks at you. "I guess that's fair. So... I'll see you around?"`);
      scene.actions([
        { label: 'See you', handler: (st: GameState) => {
    scene.text('"Yeah," you mumble wistfully. "See you..."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
        { label: 'No I won\'t', handler: (st: GameState) => {
    scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
    scene.text('"No, I won\'t," you frown. "That\'s the point."');
    scene.text('And with that, you head out the door.');
    scene.actions([
      { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGrabThingsLeave(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/romance/misc/depart_annoyed1.mp4');
  scene.text('"This just isn\'t going to work," you say, cutting him off. "We\'re done."');
  scene.text('And with that, you head out the door.');
  // TODO-QSP: end
  // TODO-QSP: --- sex_ev_dress_talking ---------------------------------
  scene.actions([
    { label: 'Leave', goto: ['sex_ev_leave', 'break_up'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'dress_talk':
      enterDressTalk(s, scene);
      break;
    case 'had_a_good_time':
      enterHadAGoodTime(s, scene);
      break;
    case 'stay_over_thanks':
      enterStayOverThanks(s, scene);
      break;
    case 'walk_funny':
      enterWalkFunny(s, scene);
      break;
    case 'walk_funny2':
      enterWalkFunny2(s, scene);
      break;
    case 'walk_funny3':
      enterWalkFunny3(s, scene);
      break;
    case 'leak_all_day':
      enterLeakAllDay(s, scene);
      break;
    case 'leak_all_day2':
      enterLeakAllDay2(s, scene);
      break;
    case 'leak_all_day3':
      enterLeakAllDay3(s, scene);
      break;
    case 'when_do_you_get_off':
      enterWhenDoYouGetOff(s, scene);
      break;
    case 'ruined_panties':
      enterRuinedPanties(s, scene);
      break;
    case 'npc_date_later_response':
      enterNpcDateLaterResponse(s, scene);
      break;
    case 'pc_sex_ev_invite':
      enterPcSexEvInvite(s, scene);
      break;
    case 'pc_sex_ev_timeset':
      enterPcSexEvTimeset(s, scene);
      break;
    case 'pc_sex_ev_invite2':
      enterPcSexEvInvite2(s, scene);
      break;
    case 'pc_sex_ev_invite_accepted':
      enterPcSexEvInviteAccepted(s, scene);
      break;
    case 'pc_sex_ev_invite_denied':
      enterPcSexEvInviteDenied(s, scene);
      break;
    case 'npc_sex_ev_invite':
      enterNpcSexEvInvite(s, scene);
      break;
    case 'sex_ev_invite_later':
      enterSexEvInviteLater(s, scene);
      break;
    case 'busy_later':
      enterBusyLater(s, scene);
      break;
    case 'busy_time':
      enterBusyTime(s, scene);
      break;
    case 'sex_ev_plan':
      enterSexEvPlan(s, scene);
      break;
    case 'sex_ev_plan2':
      enterSexEvPlan2(s, scene);
      break;
    case 'ma_pill_ask_money1':
      enterMaPillAskMoney1(s, scene);
      break;
    case 'ma_pill_ask_money2':
      enterMaPillAskMoney2(s, scene);
      break;
    case 'ma_pill_ask_money3':
      enterMaPillAskMoney3(s, scene);
      break;
    case 'money_for_ma_pill':
      enterMoneyForMaPill(s, scene);
      break;
    case 'sugar_money':
      enterSugarMoney(s, scene);
      break;
    case 'break_up_ev':
      enterBreakUpEv(s, scene);
      break;
    case 'breakup_explain':
      enterBreakupExplain(s, scene);
      break;
    case 'unsatisfied_breakup':
      enterUnsatisfiedBreakup(s, scene);
      break;
    case 'isnt_going_to_work':
      enterIsntGoingToWork(s, scene);
      break;
    case 'grab_things_leave':
      enterGrabThingsLeave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_dress_talking: LocationDef = {
  name: 'sex_ev_dress_talking',
  title: 'You can\'t help but blush even deeper at his reply.',
  region: 'other',
  enter: enter,
};
