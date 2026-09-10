import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['dress_talking_flag'] = 1;
  if (((s as any).sex_ev ?? 0)?.['plans_later_talk'] === 0  &&  ((((s as any).hour ?? 0) < 16  &&  ((s as any).hour ?? 0) > 4)  ||  ((s as any).sex_ev ?? 0)?.['sleepover'] === 1)) {
    scene.actions([
      { label: 'Ask him what he\'s doing later', handler: (st: GameState) => {
    (s as any).sex_ev['plans_later_talk'] = 1;
    qspCall(s, 'sex_ev_clothing', 'dress_loop');
    // TODO-QSP: dynamic text: "Got any plans for the rest day?" you ask, casually <<$sex_ev['dress_describe']>...
    scene.text(`"Got any plans for the rest day?" you ask, casually ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    qspCall(s, 'sex_ev_dress_talking', 'dress_talk');
    if (((s as any).npc_day_off ?? 0)?.[String((s as any).npcID ?? 0)] === ((s as any).week ?? 0)) {
      // TODO-QSP: dynamic text: "Not really," <<$npcdesc>> shrugs. "It's my day off so I'm just chilling."
      scene.text(`"Not really," ${((s as any).npcdesc ?? 0)} shrugs. "It's my day off so I'm just chilling."`);
      qspCall(s, 'sex_ev_dress_talking', 'pc_sex_ev_invite');
    } else {
      // TODO-QSP: dynamic text: "I have to go to work," <<$npcdesc>> replies.
      scene.text(`"I have to go to work," ${((s as any).npcdesc ?? 0)} replies.`);
      qspCall(s, 'sex_ev_dress_talking', 'when_do_you_get_off');
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
      if (((s as any).npc_living_together ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'hookup'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== '') {
        scene.actions([
          { label: 'Ask to come over tomorrow', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'pc_sex_ev_invite'
  } },
        ]);
      }
      scene.actions([
        { label: 'Ask to come over later', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_dress_talking', 'pc_sex_ev_invite'
  } },
      ]);
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
          { label: 'End things with <<$npcdesc>>', handler: (st: GameState) => {
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
    }
  }
  scene.actions([
    { label: 'Finish getting dressed', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_leave', 'dressing_finish'
  } },
  ]);
  scene.build();
}

export const sex_ev_dress_talking: LocationDef = {
  name: 'sex_ev_dress_talking',
  region: 'other',
  enter: enter,
};
