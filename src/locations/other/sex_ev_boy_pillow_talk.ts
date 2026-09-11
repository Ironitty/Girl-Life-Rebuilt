import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterChecker(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['boy_pillow_talk'] > 0) {
      qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_talk');
    } else {
      ((s as any).sex_ev ?? {})['boy_pillow_talk'] = (((s as any).sex_ev ?? {})['boy_pillow_talk'] ?? 0) + (1);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyTalk(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 2) + 0) === 1) {
    if (((s as any).sex_ev ?? 0)?.['good_for_you'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sex_over'] === 1) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_favorite_part', 'boy_good_for_you'"
    }
    if (((s as any).sex_ev ?? 0)?.['boob_fondle'] === 0) {
      qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'body_tits');
      if (((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
        // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_body_talk', 'boob_fondle'"
      } else {
        // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_body_talk', 'tits_admire'"
      }
    }
    if (((s as any).sex_ev ?? 0)?.['bodycount_ask'] === 0  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'bodycount_ask'"
    }
    if (((s as any).sex_ev ?? 0)?.['no_kids'] === 1  &&  ((s as any).npc_know_no_kids ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['no_kids_talk'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_no_kids'
    }
    // TODO-QSP: "
    if (((s as any).sex_ev ?? 0)?.['drink_fluid'] === 0  &&  (((s as any).sex_ev ?? 0)?.['loc'] === 'npc_home'  ||  (((s as any).sex_ev ?? 0)?.['loc'] === 'hotel_room'))  &&  (!((s as any).npc_selfish ?? 0))) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_drink_offer'"
    }
    if (((s as any).sex_ev ?? 0)?.['boy_shower'] === 0  &&  ((s as any).sex_ev ?? 0)?.['action_restricted'] === 0  &&  ((s as any).sex_ev ?? 0)?.['sex_over'] > 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_take_shower'"
    }
    if (((s as any).sex_ev ?? 0)?.['broken_condom'] >= 1  &&  ((s as any).sex_ev ?? 0)?.['broken_condom_talk'] !== 1  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_broken_condom'"
    }
    if (((s as any).npc_thinkage ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['age_ask_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['angry_after'] < 1  &&  ((s as any).sex_ev ?? 0)?.['mad'] < 1) {
      // TODO-QSP: $sex_ev_boy_topics[] = "gt 'sex_ev_boy_pillow_talk', 'age_ask_talk'"
    }
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cant_believe_creampie_talk'] !== 1) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2'"
    }
    if (((s as any).sex_ev ?? 0)?.['no_condom'] === 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).npc_no_condoms ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).sex_ev ?? 0)?.['wish_no_condoms_talk'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_hates_condoms'"
    }
    if (((s as any).sex_ev ?? 0)?.['first_date_fuck_talk'] === 0  &&  ((s as any).date_ev ?? 0) > 0  &&  ((s as any).sex_ev ?? 0)?.['date_before_sex'] === 1  &&  ((s as any).npc_date_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['virgin'] !== 1  &&  (Array.isArray((s as any).body_count) ? ((s as any).body_count as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_first_date_fuck'"
    }
    if ((((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  ||  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'childish')  &&  ((s as any).sex_ev ?? 0)?.['lesbian_ask'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_lesbian_ask1'"
    }
    if (((s as any).sex_ev ?? 0)?.['buy_virginity'] > 0  &&  ((s as any).sex_ev ?? 0)?.['deflowered'] > 0  &&  ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] < 1  &&  ((s as any).sex_ev ?? 0)?.['virginity_paid_talk'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_sugardaddy_talk', 'virginity_paid_talk'"
    } else {
      ((s as any).sex_ev ?? {})['sugar_baby_offer'] = (-1);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'hookup'  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] >= 2  &&  ((s as any).sex_ev ?? 0)?.['sugar_baby_offer'] === 0  &&  (((Math.floor(Math.random() * (2 - -1 + 1)) + (-1)) - ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)]) > 0  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1  ||  ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer'"
    } else {
      ((s as any).sex_ev ?? {})['sugar_baby_offer'] = (-1);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'sugar_daddy') {
      if (((s as any).npc_wife ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  ((s as any).sex_ev ?? 0)?.['wife_problem_talk'] === 0) {
        // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_sugardaddy_talk', 'wife_problems'"
      }
      if (((s as any).sex_ev ?? 0)?.['work_complaints'] === 0) {
        // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_sugardaddy_talk', 'work_complaints'"
      }
    }
    if (((s as any).sex_ev ?? 0)?.['boy_pube_talk'] < 1) {
      if (((s as any).npc_know_pubeshape ?? 0)?.[String((s as any).npcID ?? 0)] !== ((s as any).pube_style ?? 0)?.['shape']) {
        // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_body_talk', 'boy_pube_talk_start'"
      } else {
        if (((s as any).npc_know_pubeshape ?? 0)?.[String((s as any).npcID ?? 0)] !== ''  &&  ((s as any).pube_style ?? 0)?.['shape'] === 'bush'  &&  ((((s as any).npc_likes ?? 0)).indexOf((';pubes;'))) + 1) {
          // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'pubes_soft_talk'"
        }
      }
    }
    if (((s as any).sex_ev ?? 0)?.['boy_likes_hair'] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_like_hair_talk'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_body_talk', 'boy_like_hair_talk'"
    }
    if (((Array.isArray((s as any).pcs_appearance) ? ((s as any).pcs_appearance as any[]).indexOf('innocent') : -1) >= 0  ||  (Array.isArray((s as any).pcs_appearance) ? ((s as any).pcs_appearance as any[]).indexOf('nerdy') : -1) >= 0)  &&  ((Array.isArray((s as any).body_count) ? ((s as any).body_count as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0  &&  ((s as any).sex_ev ?? 0)?.['fucked_out'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] > 2  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['tap_out'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_nerdy_slut_talk'] === 0)) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_nerdy_slut_talk1'"
    }
    if (Object.keys((s as any).sex_ev_boy_topics ?? {}).length > 0) {
      ((s as any).sex_ev ?? {})['boy_pillow_talk'] = 0;
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterTemplate(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['template'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  // TODO-QSP: end
  scene.build();
}

function enterDontSwallowTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_topics'] = (((s as any).sex_ev ?? {})['boy_topics'] ?? 0) - (1);
  ((s as any).sex_ev ?? {})['dont_swallow_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  // TODO-QSP: dynamic text: "So you don't swallow?" <<$npcdesc>> asks.
  scene.text(`"So you don't swallow?" ${((s as any).npcdesc ?? 0)} asks.`);
  // TODO-QSP: end
  scene.build();
}

function enterLikeCumTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_topics'] = (((s as any).sex_ev ?? {})['boy_topics'] ?? 0) - (1);
  ((s as any).sex_ev ?? {})['like_cum_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  if (((s as any).npc_know_like_cum ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
    // TODO-QSP: dynamic text: "So... you know how you swallowed my cum earlier?" <<$npcdesc>> asks.
    scene.text(`"So... you know how you swallowed my cum earlier?" ${((s as any).npcdesc ?? 0)} asks.`);
    scene.actions([
      { label: 'Yeah...?', handler: (st: GameState) => {
    scene.text('"Yeah?" you reply, eyebrow raised, wondering where he\'s going with this.');
    if (((s as any).sex_ev ?? 0)?.['tasty_cum'] === 1) {
      scene.text('"I was wondering... do you really like the taste of it? I mean, I know you said you thought it was tasty earlier, but... do you? Or is that just something you say?"');
    } else {
      scene.text('"I was wondering... do you really like the taste of it?"');
    }
    qspCall(s, 'sex_ev_boy_pillow_talk', 'like_cum_talk2');
  } },
      { label: 'You want to know if I like cum?', handler: (st: GameState) => {
    scene.text('"You want to know if I like the taste of cum, don\'t you?"');
    // TODO-QSP: dynamic text: <<$npc_usedname[$npcID]>> blinks and you give him a knowing look.
    scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} blinks and you give him a knowing look.`);
    scene.text('"Uhh, yeah. How did you know?"');
    scene.text('"All guys want to know if girls like it," you smirk back haughtily.');
    scene.text('"So... do you...?"');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'like_cum_talk2');
  } },
    ]);
  } else {
    if (((s as any).npc_know_like_cum ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      // TODO-QSP: dynamic text: "So you really like the taste of my cum?" <<$npcdesc>> asks, an oddly eager smil...
      scene.text(`"So you really like the taste of my cum?" ${((s as any).npcdesc ?? 0)} asks, an oddly eager smile on his face.`);
    } else {
      if (((s as any).npc_know_like_cum ?? 0)?.[String((s as any).npcID ?? 0)] === -1) {
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLikeCumTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
    scene.actions([
      { label: 'It was an acquired taste', handler: (st: GameState) => {
    scene.text('"It was kind of an acquired taste," you smile wryly. "It took a few loads before I got used to the flavor. But I don\'t mind it now."');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'sex_ev_boy_pillow_talk', 'dont_have_to_swallow_talk');
    } else {
      // TODO-QSP: dynamic text: "That's fucking hot," <<$npc_usedname[$npcID]>> grins back.
      scene.text(`"That's fucking hot," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} grins back.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
    ]);
  }
  if (((s as any).stat ?? 0)?.['swallow'] === ((s as any).sex_ev ?? 0)?.['swallow_count']) {
    scene.actions([
      { label: 'You\'ve never swallowed before', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Actually... I've never swallowed before," you admit. A smile creeps across your...
    scene.text(`"Actually... I've never swallowed before," you admit. A smile creeps across your face as you see ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]}'s jaw drop. "You're my first time."`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Getting used to it', handler: (st: GameState) => {
    scene.text('"I\'m... getting used to it," you admit shyly. "It can be a little thick though."');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'dont_have_to_swallow_talk');
  } },
    { label: 'Just say it is because it\'s hot', handler: (st: GameState) => {
    ((s as any).npc_know_like_cum ?? {})[String((s as any).npcID ?? 0)] = (-1);
    if (((s as any).sex_ev ?? 0)?.['tasty_cum'] === 1) {
      scene.text('"It\'s just something I say if I\'m being honest," you admit. "I really don\'t like the taste all that much. It\'s salty and bitter and I kind of have to force it down a little. But guys think it\'s sexy when you say it so..."');
      scene.text('You shrug, a slightly guilty smile on your face.');
    } else {
      scene.text('"Not really," you admit. "It\'s salty and bitter and I kind of have to force it down a little. But guys think it\'s sexy when you say it so..."');
      scene.text('You shrug, a slightly guilty smile on your face.');
    }
    scene.text('"Sorry?"');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'sex_ev_boy_pillow_talk', 'dont_have_to_swallow_talk');
    } else {
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted') {
        scene.text('"Well there goes that fantasy," he sighs dramatically, but chuckles afterwards to let you know he\'s holding the whole situation in good humor.');
      } else {
        scene.text('"I probably should have expected that," he says ruefully.');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterDontHaveToSwallowTalk(s: GameState, scene: SceneBuilder): void {
  scene.text('"You know you don\'t have to swallow if you don\'t like it," he says, looking at you a little concerned.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Really?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"Really?" you ask, somewhat surprised.');
    scene.text('"Yeah, really. I don\'t want you to feel like you have to do something you don\'t like."');
    scene.text('"That\'s really sweet of you," you smile back warmly.');
    scene.text('The two of you share an oddly intimate smile given the conversation topic.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'No, you want to', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    if (((s as any).npc_know_like_cum ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      scene.text('"No," you shake your head. "I want to. I\'m not being polite. I <i>like</i> the taste. And I like it even more if you like watching me do it."');
    } else {
      if (((s as any).trait_vars ?? 0)?.['cumeater'] === 1) {
        scene.text('"No," you shake your head. "I want to. I\'m used to it at this point. And I like it even more if you like watching me do it."');
      } else {
        if (((s as any).npc_know_like_cum ?? 0)?.[String((s as any).npcID ?? 0)] === -1) {
          scene.text('"No," you shake your head. "I want to. If you think it\'s hot, I think it\'s hot. Even if I don\'t like the taste."');
        } else {
          scene.text('"No," you shake your head. "I want to. If you think it\'s hot, I think it\'s hot. I don\'t care about the taste either way."');
        }
      }
    }
    scene.text('The two of you share an oddly intimate moment, despite the conversation topic.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterBoyDrinkOffer(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['drink_fluid'] = 1;
  // TODO-QSP: $sex_ev['bed_room']
  if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_generous ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: dynamic text: <<$npcdesc>> gets up for a moment to pull a bottle of clear liquid off a nearby ...
    scene.text(`${((s as any).npcdesc ?? 0)} gets up for a moment to pull a bottle of clear liquid off a nearby table.`);
    // TODO-QSP: dynamic text: "Care for a drink?" <<$npcdesc>> asks as he slides back into bed with you, offer...
    scene.text(`"Care for a drink?" ${((s as any).npcdesc ?? 0)} asks as he slides back into bed with you, offering you the bottle. The sharp smell wafting from the mouth of it lets you know it's vodka.`);
  } else {
    // TODO-QSP: dynamic text: <<$npcdesc>> gets up for a moment to pull a bottle of clear liquid off a nearby ...
    scene.text(`${((s as any).npcdesc ?? 0)} gets up for a moment to pull a bottle of clear liquid off a nearby table and takes a swig.`);
    scene.text('"You want a drink?" he asks, holding the bottle out towards you. The scent of his breath leaves no doubt that it contains vodka.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Water?', handler: (st: GameState) => {
    qspCall(s, 'beverage', 'water_stats');
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Actually, have you got any water?" you ask.');
    // TODO-QSP: dynamic text: "Oh, sure." <<$npcdesc>> gets up for a minute and comes back with another bottle...
    scene.text(`"Oh, sure." ${((s as any).npcdesc ?? 0)} gets up for a minute and comes back with another bottle that seems cleaner. You take a drink and the filtered taste of tap water hits your tongue, refreshing you in your post-sex cooldown.`);
    scene.text('"Thanks," you smile.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Take a drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Sure." You take the bottle from him and the burning taste of alcohol hits the back of your throat, stinging it on the way down before warming your belly.');
    if (((s as any).cum_loc ?? 0)?.['mouth'] > 0) {
      if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
        scene.actions([
          { label: 'Vodka (cum chaser)', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'mouth') {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'love');
    }
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Sure." You take the bottle from him and the burning taste of alcohol hits the back of your throat, stinging it on the way down before warming your belly. "Ahh. Nothing like a good shot of vodka to use as a cum chaser."');
    scene.text('You flash him a sultry smile as he takes a drink for himself.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      }
      scene.actions([
        { label: 'Good to clear the taste of cum', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/drink1.jpg');
    scene.text('"Sure." You take the bottle from him and the burning taste of alcohol hits the back of your throat, stinging it on the way down before warming your belly. "Thanks. Needed that to clear the taste of your cum away."');
    scene.text('You let him have a teasing smile as he takes a drink for himself.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
  ]);
  scene.build();
}

function enterBoyBrokenCondom(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['broken_condom_talk'] === 0  &&  ((s as any).sex_ev ?? 0)?.['broken_condom'] >= 1) {
    ((s as any).sex_ev ?? {})['broken_condom_talk'] = 1;
    ((s as any).sex_ev ?? {})['boy_topics'] = (((s as any).sex_ev ?? {})['boy_topics'] ?? 0) - (1);
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    if (((s as any).npc_pay_for_ma_pill ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
      if (((s as any).sex_ev ?? 0)?.['ma_pill_money'] === 0) {
        scene.img('images/shared/sex/after/pillow_talk1.jpg');
        // TODO-QSP: dynamic text: "Oh, before I forget. Since the condom broke, I think I owe you this," <<$npcdes...
        scene.text(`"Oh, before I forget. Since the condom broke, I think I owe you this," ${((s as any).npcdesc ?? 0)} says, reaching over to his wallet and handing you a ${qspFunc(s, 'money', 'string_profit', 1000)} note. "For the morning after pill."`);
        scene.text('"Thanks," you say, taking the money.');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.img('images/shared/sex/after/pillow_talk1.jpg');
          // TODO-QSP: dynamic text: "Don't forget to buy the pill later," <<$npcdesc>> reminds you.
          scene.text(`"Don't forget to buy the pill later," ${((s as any).npcdesc ?? 0)} reminds you.`);
          scene.actions([
            { label: 'Don\'t worry', handler: (st: GameState) => {
    scene.text('"Don\'t worry," you nod. "I won\'t forget."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            { label: 'Get irritated', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'dislike');
    scene.text('"I know, I know," you scowl in irritation. "You don\'t have to freaking remind me."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        }
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['ma_pill'] > 0) {
        scene.img('images/shared/sex/after/pillow_talk1.jpg');
        if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
          // TODO-QSP: dynamic text: "Really unlucky about that broken condom," <<$npcdesc>> says. "But at least you ...
          scene.text(`"Really unlucky about that broken condom," ${((s as any).npcdesc ?? 0)} says. "But at least you have that morning after pill."`);
        } else {
          if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 2) {
            // TODO-QSP: dynamic text: "Really unlucky about that broken condom," <<$npcdesc>> says. "Good thing you ha...
            scene.text(`"Really unlucky about that broken condom," ${((s as any).npcdesc ?? 0)} says. "Good thing you had that morning after pill."`);
          }
        }
        qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_take_pill_now');
        scene.actions([
          { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you nod back.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 0  &&  ((s as any).sex_ev ?? 0)?.['ma_pill'] === 0  &&  (((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] !== 1  &&  (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1  ||  ((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] === 1))) {
          scene.img('images/shared/sex/after/pillow_talk1.jpg');
          if (((s as any).cum_loc ?? 0)?.['vagina'] > 0) {
            // TODO-QSP: dynamic text: "Are you going to be okay?" <<$npcdesc>> asks, looking worriedly at your pussy s...
            scene.text(`"Are you going to be okay?" ${((s as any).npcdesc ?? 0)} asks, looking worriedly at your pussy still leaking his cum. "You know, with the... broken condom and everything...?"`);
          } else {
            // TODO-QSP: dynamic text: "Are you going to be okay?" <<$npcdesc>> asks, looking worriedly at your pussy. ...
            scene.text(`"Are you going to be okay?" ${((s as any).npcdesc ?? 0)} asks, looking worriedly at your pussy. "You know, with the... broken condom and everything...?"`);
          }
          if (((s as any).mc_inventory ?? 0)?.['morning_after_pill'] === 0) {
            scene.actions([
              { label: 'I\'ll buy a morning after pill', handler: (st: GameState) => {
    scene.text('"It\'s okay," you nod reassuringly. "I\'ll get a morning after pill tomorrow. No big deal."');
    scene.text('He smiles back, seeming to relax a bit.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          } else {
            qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_take_pill_now');
            scene.actions([
              { label: 'I have a pill', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill'] = 1;
    scene.text('"It\'s okay," you smile. "I have a morning after pill. No big deal."');
    scene.text('He nods, smiling and seeming to relax a bit.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyTakePillNow(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['ma_pill'] < 2  &&  ((s as any).mc_inventory ?? 0)?.['morning_after_pill'] > 0) {
    scene.actions([
      { label: 'Take your morning after pill (shy)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill'] = 2;
    scene.text('"It\'s okay," you say. "In fact..."');
    // TODO-QSP: dynamic text: <<$npcdesc>> watches you reach into your purse and pull out your morning after p...
    scene.text(`${((s as any).npcdesc ?? 0)} watches you reach into your purse and pull out your morning after pill and you can't help but blush beneath his gaze.`);
    if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      scene.text('"My aunt gave me this for emergencies," you say shyly, blush intensifying as you put it in your mouth and force it down with a dry swallow.');
    } else {
      scene.text('"The instructions say to take it as soon as possible for best effect," you smile shyly, blush intensifying as you put it in your mouth and force it down with a dry swallow.');
    }
    qspCall(s, 'medical_din', 'morning_after_pill_function');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Take your morning after pill (sexy)', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill'] = 2;
    scene.text('"It\'s fine," you say, smiling mischievously. "In fact..."');
    // TODO-QSP: dynamic text: As <<$npcdesc>> watches you pull your morning after pill from your purse, you gi...
    scene.text(`As ${((s as any).npcdesc ?? 0)} watches you pull your morning after pill from your purse, you give him a smouldering look. Sticking out your tongue at him, you pop the pill onto your mouth, swallowing with a wide grin.`);
    if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'swallow') {
      scene.text('"If only I thought to do this earlier," you grin. "Could\'ve washed it down with your load."');
    } else {
      if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
        scene.text('"My aunt gave me this," you grin.');
        // TODO-QSP: dynamic text: "She sounds like a good aunt," <<$npcdesc>> smirks back. "Or a slutty one."
        scene.text(`"She sounds like a good aunt," ${((s as any).npcdesc ?? 0)} smirks back. "Or a slutty one."`);
        scene.text('"Kind of both actually," you say, causing both of you to laugh.');
      } else {
        scene.text('"I\'m not ready to be a mom," you smirk.');
      }
    }
    qspCall(s, 'medical_din', 'morning_after_pill_function');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyMorningPillTalk1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  if (((s as any).sex_ev ?? 0)?.['ma_pill'] < 1) {
    if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 0) {
      scene.text('"You\'re gonna get a morning after pill, right?"');
      if (((s as any).hour ?? 0) < 20) {
        scene.actions([
          { label: 'Right after this', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    if (((s as any).hour ?? 0) < 19) {
      scene.text('"As soon as leave," you nod.');
    } else {
      scene.text('"Right after this," you say, checking the time on your phone. "If I can make it there before it closes."');
    }
    if (((s as any).sex_ev ?? 0)?.['cant_believe_creampie_talk'] === 0) {
      scene.text('He nods back, somehow looking worried and relieved at the same time.');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2');
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Tomorrow', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['ma_pill_tomorrow'] = 1;
    scene.text('"First thing tomorrow," you nod. "As soon as the pharmacy opens up."');
    if (((s as any).sex_ev ?? 0)?.['cant_believe_creampie_talk'] === 0) {
      scene.text('He nods back, somehow looking worried and relieved at the same time.');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2');
    }
  } },
        ]);
      }
    } else {
      if (((s as any).sex_ev ?? 0)?.['ma_pill'] === 1) {
        scene.text('"Are you gonna take that morning after pill now?"');
        scene.actions([
          { label: 'Thanks for the reminder', handler: (st: GameState) => {
    scene.text('"Oh, yeah." You smile at him as you pull it out of your bag. "Thanks for the reminder."');
    scene.text('"I have a vested interest in you not getting pregnant," he replies dryly.');
    qspCall(s, 'sex_ev_after', 'plan_b3');
  } },
          { label: 'Oh! Right!', handler: (st: GameState) => {
    scene.text('"Oh!" You bolt upright with a squeak. "That\'s right! I totally forgot."');
    scene.text('"That\'s not very comforting," he says, frowning as you scrabble through your bag for the pill.');
    qspCall(s, 'sex_ev_after', 'plan_b3');
  } },
          { label: 'You don\'t need reminding (irritated)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('"Ugh, what are you, my mother?" you huff, rolling your eyes irritably. "I\'m not a toddler, I can do it myself."');
    scene.text('"I just don\'t want you to forget," he says frowning. "It\'s important to me that you don\'t get pregnant."');
    scene.text('"And it isn\'t to me?" you snap as you dig through your purse for the pill. "I wasn\'t going to forget!"');
    scene.text('You scowl at him, shoving the pill into your mouth and gulping with an angry swallow.');
    ((s as any).sex_ev ?? {})['ma_pill'] = 2;
    qspCall(s, 'medical_din', 'morning_after_pill_function');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      }
    }
    // TODO-QSP: iif(cum_loc['vagina'] > 0, '<<$npcdesc>> glances between your legs with a concerned look, watching h...
  } else {
    // TODO-QSP: '"It''s a good thing you had that morning after pill," <<$npcdesc>> says, ' + iif(cum_loc['vagina'] ...
    if (((s as any).LudaQW ?? 0)?.['free_condoms'] === 1  &&  ((s as any).LudaQW ?? 0)?.['luda_ma_pill'] === 0) {
      scene.actions([
        { label: 'Thank my aunt', handler: (st: GameState) => {
    // TODO-QSP: iif(sex_ev['aunt_pill'] = 0, '"You can thank my aunt for that," you say with a wry smirk. "She gave ...
    qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2');
  } },
      ]);
    }
    scene.actions([
      { label: 'Yeah', handler: (st: GameState) => {
    scene.text('"Yeah," you nod in agreement. "Would\'ve been really bad if I didn\'t."');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2');
  } },
      { label: 'You stay prepared', handler: (st: GameState) => {
    scene.text('"It helps to be prepared," you smile back. "Hope for the best, plan for the worst."');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2');
  } },
      { label: 'It was lucky (unhappy)', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/annoyed1.jpg');
    scene.text('"You mean we got <i>lucky</i>," you reply sternly. "We would\'ve been seriously screwed if I didn\'t."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyAccidentalCreampieTalk1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_accidental_creampie_talk2');
  // TODO-QSP: end
  scene.build();
}

function enterBoyAccidentalCreampieTalk2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cant_believe_creampie_talk'] === 1) {
    scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
  } else {
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    ((s as any).sex_ev ?? {})['cant_believe_creampie_talk'] = 1;
    scene.text('"I\'m so sorry I came inside you," he says.');
    if (((s as any).stat ?? 0)?.['preg_risk'] !== 'danger'  &&  ((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      scene.actions([
        { label: 'You shouldn\'t get pregnant', handler: (st: GameState) => {
    // TODO-QSP: '"It''s okay. ' + iif($stat['preg_risk'] = 'safe', 'It''s a safe day in my cycle. I won''t get pregn...
    // TODO-QSP: dynamic text: You look over at <<$npcdesc>> with a small rueful smile.
    scene.text(`You look over at ${((s as any).npcdesc ?? 0)} with a small rueful smile.`);
    scene.text('"Guess we can just count ourselves lucky this time."');
    scene.text('"Yeah," he nods, returning the small smile.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    }
    if (((s as any).sex_ev ?? 0)?.['pullout_game'] === 1) {
      scene.actions([
        { label: 'Never trusting him to pull out', handler: (st: GameState) => {
    scene.actions([
      { label: 'Playful', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 5) {
      scene.text('"I don\'t know why I haven\'t learned my lesson yet. You suck at pulling out."');
    } else {
      if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
        scene.text('"It\'s not like this is the first time you\'ve done it," you say, rolling your eyes with a soft chuckle. "I should stop trusting you to pull out."');
      } else {
        scene.text('"I\'m never trusting you to pull out again," you say, rolling your eyes to the heavens but unable to keep the smirk off your face.');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Irritated', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    if (((s as any).npc_pullout_failure ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      scene.text('"I don\'t know why I do this to myself. You <i>always</i> do this," you scowl bitterly. "I\'m never trusting you to pull out again."');
    } else {
      scene.text('"I\'m never trusting you to pull out again," you harrumph irritably.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Just an accident', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"It\'s okay," you murmur gently. "It was just an accident. It happens."');
    if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      if (((s as any).sex_ev ?? 0)?.['preg_risk'] === ''  ||  ((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
        scene.text('"That doesn\'t make it any less dangerous. What if you get pregnant?"');
        qspCall(s, 'sex_ev_talk', 'childfree_accidental_creampie1');
        qspCall(s, 'sex_ev_talk', 'pc_have_morning_after');
      } else {
        scene.text('"That doesn\'t excuse it." He shakes his head. "It\'s pure luck that it was a safe day for you."');
        scene.actions([
          { label: 'Reassure him', handler: (st: GameState) => {
    scene.text('"But it still <i>is</i> a safe day," you smile back. "We all mess up. Can\'t be perfect all the time. I\'ll take the lucky moments when it doesn\'t cost us anything."');
    // TODO-QSP: dynamic text: <<$npcdesc>> takes a deep breath and lets it out slowly, giving you a small smil...
    scene.text(`${((s as any).npcdesc ?? 0)} takes a deep breath and lets it out slowly, giving you a small smile in return, seeming to relax, if only a little.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          { label: 'We\'ll be better next time', handler: (st: GameState) => {
    scene.text('"Then we\'ll be more careful next time," you smile back. "Let\'s count ourselves lucky for now and we can make sure it doesn\'t happen again in the future."');
    // TODO-QSP: dynamic text: <<$npcdesc>> looks like he's feeling a little better.
    scene.text(`${((s as any).npcdesc ?? 0)} looks like he's feeling a little better.`);
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      }
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> visibly relaxes, seeming reassured that you aren't mad about his mi...
      scene.text(`${((s as any).npcdesc ?? 0)} visibly relaxes, seeming reassured that you aren't mad about his mistake.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
      { label: 'Is it really that hard to pull out?', handler: (st: GameState) => {
    scene.actions([
      { label: 'Amused', handler: (st: GameState) => {
    scene.text('"Is it really that hard to pull your dick out without dumping your load in me?" You give him an amused look, lips twisted in a failed attempt to keep from smiling.');
    if (((s as any).npc_abusive ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      scene.text('He knows you\'re not really mad, but he still has the decency to blush.');
    }
    if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
      scene.text('"In all seriousness? Yes! You have no idea how good it feels to finish inside. One second you think you\'re all good, think you can hold out a little longer. The next you\'re suddenly coming and it feels like you\'ve died and gone to heaven."');
    } else {
      if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'pullout') {
        scene.text('"I\'m normally a lot better about it," he mumbles bashfully.');
      } else {
        scene.text('"Well, it isn\'t easy," he replies with a small smile of his own.');
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Irritated', handler: (st: GameState) => {
    scene.text('"Is it really so hard to pull your dick out without coming inside me?" you scowl irritably. "It\'s not like you can\'t feel it coming."');
    scene.text('He withers at the look you give him, at least having the decency to look repentant.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyLikeHairTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_like_hair_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 1);
  // TODO-QSP: dynamic text: "I love your hair," <<$npc_usedname[$npcID]>> murmurs, running his fingers throu...
  scene.text(`"I love your hair," ${((s as any).npc_usedname ?? 0)?.[String((s as any).npcID ?? 0)]} murmurs, running his fingers through your locks.`);
  if (((s as any).pcs_haircolor ?? 0) === 'black') {
    scene.actions([
      { label: 'You do?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"You do?" you ask, surprised.');
    scene.text('"Don\'t know why everybody is into blondes," he smiles. "Black hair is so sexy."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } else {
    if (((s as any).pcs_haircolor ?? 0) === 'brown') {
      scene.actions([
        { label: 'You do?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"You do?" you ask, surprised.');
    scene.text('"Don\'t know why everybody is into blondes," he smiles. "Brunettes are gorgeous."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      ]);
    } else {
      if (((s as any).pcs_haircolor ?? 0) === 'red') {
        scene.actions([
          { label: 'You do?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"You do?" you ask, surprised.');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"I never understood the whole idiom about redheaded stepchildren," he jokes. "Cause you\'re proof that they\'re hot."');
    } else {
      scene.text('"Who doesn\'t think redheads are hot?" he grins back. ');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
        ]);
      } else {
        if (((s as any).pcs_haircolor ?? 0) === 'blonde') {
          scene.actions([
            { label: 'You do?', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    scene.text('"You do?" you ask, surprised.');
    scene.text('"It\'s gorgeous," he smiles. "Blondes are so sexy."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyCondomRule(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['condom'] !== 1) {
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyTakeShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
  if (((s as any).pcs_sweat ?? 0) >= 20  ||  (Math.floor(Math.random() * 2) + 1) === 1) {
    ((s as any).sex_ev ?? {})['join_shower_offer'] = 1;
    if (((s as any).pcs_sweat ?? 0) >= 20) {
      // TODO-QSP: dynamic text: "I could really use a shower after that," <<$npcdesc>> says. "Want to join me?"
      scene.text(`"I could really use a shower after that," ${((s as any).npcdesc ?? 0)} says. "Want to join me?"`);
    } else {
      // TODO-QSP: dynamic text: "I think I'm gonna take a shower," <<$npcdesc>> says. "Want to join me?"
      scene.text(`"I think I'm gonna take a shower," ${((s as any).npcdesc ?? 0)} says. "Want to join me?"`);
    }
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['boy_in_shower'] = 1;
    scene.text('"That\'s okay, I think I\'m just going to keep chilling here for a while," you reply.');
    // TODO-QSP: dynamic text: "Suit yourself," <<$npcdesc>> shrugs and gets up, leaving you alone in the sheet...
    scene.text(`"Suit yourself," ${((s as any).npcdesc ?? 0)} shrugs and gets up, leaving you alone in the sheets.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'after_sex2_w_picture');
  } },
    ]);
  } },
      { label: 'Sure', handler: (st: GameState) => {
    scene.text('"Sure," you reply. "That sounds nice."');
    // TODO-QSP: dynamic text: You let <<$npcdesc>> lead you out of bed and into the bathroom.
    scene.text(`You let ${((s as any).npcdesc ?? 0)} lead you out of bed and into the bathroom.`);
    scene.actions([
      { label: 'Shower together', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
    ]);
  } else {
    // TODO-QSP: dynamic text: "I think I'm gonna take a shower," <<$npcdesc>> says.
    scene.text(`"I think I'm gonna take a shower," ${((s as any).npcdesc ?? 0)} says.`);
    scene.actions([
      { label: 'Have fun', handler: (st: GameState) => {
    ((s as any).sex_ev ?? {})['boy_in_shower'] = 1;
    // TODO-QSP: dynamic text: "Okay. Have fun in there," you reply and <<$npcdesc>> gets up, leaving you alone...
    scene.text(`"Okay. Have fun in there," you reply and ${((s as any).npcdesc ?? 0)} gets up, leaving you alone in the sheets.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_after', 'after_sex2_w_picture');
  } },
    ]);
  } },
      { label: 'Ask to join', handler: (st: GameState) => {
    scene.text('"Maybe I could join you in there," you suggest.');
    scene.text('"That sounds like a good idea," he smiles back.');
    // TODO-QSP: dynamic text: You let <<$npcdesc>> lead you out of bed and into the bathroom.
    scene.text(`You let ${((s as any).npcdesc ?? 0)} lead you out of bed and into the bathroom.`);
    scene.actions([
      { label: 'Shower together', goto: ['sex_ev_shower', 'shower_together1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyHatesCondomsStartDesc(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_rough ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
    // TODO-QSP: dynamic text: "Ugh, I fucking hate using condoms," <<$npcdesc>> sighs. "I can barely feel anyt...
    scene.text(`"Ugh, I fucking hate using condoms," ${((s as any).npcdesc ?? 0)} sighs. "I can barely feel anything."`);
  } else {
    // TODO-QSP: dynamic text: "Ugh, condoms are the worst," <<$npcdesc>> sighs. "I can barely feel anything."
    scene.text(`"Ugh, condoms are the worst," ${((s as any).npcdesc ?? 0)} sighs. "I can barely feel anything."`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBoyHatesCondoms(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['wish_no_condoms_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
  qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_hates_condoms_start_desc');
  // TODO-QSP: end
  scene.actions([
    { label: 'Disagree', handler: (st: GameState) => {
    scene.actions([
      { label: 'Can\'t afford to get pregnant', handler: (st: GameState) => {
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"You know I\'m not on birth control," you frown. "I\'m not getting pregnant just because <i>you</i> want to go bareback. Besides, you still came so it looks like you can feel plenty to me."');
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"I know, I know. I don\'t want you to get pregnant either. But it doesn\'t mean I have to like using condoms either."');
          scene.text('He gives you a rueful smile.');
        }
      } else {
        qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
        scene.text('"I\'m not on birth control," you frown. "I\'m not about to risk getting pregnant just for a bit of bareback sex. Besides, you still came so it looks like you can feel plenty to me."');
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"Well on that we agree. But it doesn\'t mean I have to like condoms too."');
          scene.text('He gives you a rueful smile.');
        }
      }
    } else {
      scene.text('"They feel fine," you say. "Sex still feels like sex and I can\'t afford to get pregnant."');
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Aren\'t you already on birth control?" he asks. "What do we need condoms for?"');
        scene.text('"Safety," you reply emphatically. "Birth control and condoms can both fail. So doubling up gives me the best chance of avoiding pregnancy. Besides, you obviously ended up cumming so I think you can feel plenty even with a condom."');
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"I don\'t want kids either and even <i>I\'m</i> not that careful," he grumbles quietly.');
        } else {
          if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
            scene.text('"Easy for <i>you</i> to say," he grumbles quietly. "You\'re the one getting fucked instead of doing the fucking."');
          }
        }
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"Well on that we agree. But it doesn\'t mean I have to like using condoms."');
          scene.text('He gives you a rueful smile.');
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Not that bad', handler: (st: GameState) => {
    scene.text('"I dunno," you shrug. "I don\'t think they\'re <i>that</i> bad."');
    scene.text('"That\'s cause you don\'t know what it\'s like to have one wrapped around your dick," he replies wryly.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'You don\'t mind them', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"I don\'t think they\'re all that bad," you smirk wryly. "Still feels pretty good to me."');
    scene.text('"That\'s cause you\'re not the one with your dick wrapped in it," he retorts.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
    { label: 'Agree', handler: (st: GameState) => {
    if (((s as any).stat ?? 0)?.['preg_risk'] === 'danger') {
      scene.actions([
        { label: 'But you\'re fertile', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_hates_condoms_start_desc');
    if (((s as any).sex_ev ?? 0)?.['preg_risk'] === 'danger') {
      // TODO-QSP: dynamic text: "I know <<$npc_lovername[$npcID]>>. I want to go bareback too," you coo sympathe...
      scene.text(`"I know ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}. I want to go bareback too," you coo sympathetically. "But you know it's a danger day for me. I could get pregnant if we do it raw."`);
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"I know, I know. I don\'t want you to get pregnant either. But it doesn\'t mean I have to like using condoms either."');
        scene.text('He gives you a rueful smile.');
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        if ((((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)] > 0  ||  ((s as any).npc_arrogant ?? 0)?.[String((s as any).npcID ?? 0)] > 0)  &&  ((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
          scene.text('"I\'d pull out in time," he mutters quietly.');
          if (((s as any).npc_pullout_failure_last_time ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
            scene.actions([
              { label: 'You mean like you "pulled out" last time? (annoyed)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 3);
    // TODO-QSP: dynamic text: "You mean like you 'pulled out' the last time?" you sneer pointedly, remembering...
    scene.text(`"You mean like you 'pulled out' the last time?" you sneer pointedly, remembering how the very last time ${((s as any).npcdesc ?? 0)} said that, he blew a fat load in your pussy.`);
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "That was a one time thing," <<$npcdesc>> says, dismissing your memory with a wa...
      scene.text(`"That was a one time thing," ${((s as any).npcdesc ?? 0)} says, dismissing your memory with a wave of his hand. "I wouldn't make that mistake twice."`);
    } else {
      // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed at the reminder.
      scene.text(`At least ${((s as any).npcdesc ?? 0)} has the decency to look embarrassed at the reminder.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
              { label: 'You mean like you "pulled out" last time? (amused)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 2);
    // TODO-QSP: dynamic text: "You mean like you 'pulled out' the last time?" you snicker, remembering how the...
    scene.text(`"You mean like you 'pulled out' the last time?" you snicker, remembering how the very last time ${((s as any).npcdesc ?? 0)} said that, he blew a fat load in your pussy.`);
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] === 2  ||  ((s as any).npc_risktaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      // TODO-QSP: dynamic text: "That was a one time thing," <<$npcdesc>> says, dismissing your memory with a wa...
      scene.text(`"That was a one time thing," ${((s as any).npcdesc ?? 0)} says, dismissing your memory with a wave of his hand. "I wouldn't make that mistake twice."`);
      scene.text('"Heh. Yeah. Sure." You roll your eyes in amusement.');
    } else {
      // TODO-QSP: dynamic text: At least <<$npcdesc>> has the decency to look embarrassed at the reminder.
      scene.text(`At least ${((s as any).npcdesc ?? 0)} has the decency to look embarrassed at the reminder.`);
      scene.text('"Mhmm..." you hum smugly.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
            ]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
          }
          scene.actions([
            { label: 'Keep talking', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_pillow_talk', 'topic_route'
  } },
          ]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        }
      }
    } else {
      ((s as any).sex_ev ?? {})['preg_risk'] = 'danger';
      // TODO-QSP: dynamic text: "I know <<$npc_lovername[$npcID]>>. I wanted to go bareback too," you coo sympat...
      scene.text(`"I know ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}. I wanted to go bareback too," you coo sympathetically. "But it's a danger day for me. I could've gotten pregnant if we did it raw."`);
      if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"I know, I know. I don\'t want you to get pregnant either. But it doesn\'t mean I have to like using condoms either."');
        scene.text('He gives you a rueful smile.');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'But can\'t afford to get pregnant', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk1.jpg');
    qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_hates_condoms_start_desc');
    if (((s as any).birth_control ?? 0)?.['think_safe'] === 0) {
      if (((s as any).npc_know_not_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        // TODO-QSP: dynamic text: "I know <<$npc_lovername[$npcID]>>," you reply sympathetically. "I hate using th...
        scene.text(`"I know ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you reply sympathetically. "I hate using them too. But you know I'm not on birth control. I can't afford to get pregnant."`);
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"I know, I know. I don\'t want you to get pregnant either. But it doesn\'t mean I have to like using condoms either."');
          scene.text('He gives you a rueful smile.');
        }
      } else {
        qspCall(s, 'sex_ev_stats', 'no_birth_control_know');
        // TODO-QSP: dynamic text: "I know <<$npc_lovername[$npcID]>>," you reply sympathetically. "I hate using th...
        scene.text(`"I know ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you reply sympathetically. "I hate using them too. But I'm not on birth control. It would be really bad if I got pregnant."`);
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"Well on that we agree. But it doesn\'t mean I have to like condoms too."');
          scene.text('He gives you a rueful smile.');
        }
      }
    } else {
      // TODO-QSP: dynamic text: "I know <<$npc_lovername[$npcID]>>," you say. "I hate using them too. But I can'...
      scene.text(`"I know ${((s as any).npc_lovername ?? 0)?.[String((s as any).npcID ?? 0)]}," you say. "I hate using them too. But I can't afford to get pregnant."`);
      if (((s as any).npc_know_bc ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
        scene.text('"Aren\'t you already on birth control?" he asks. "What do we need condoms for?"');
        scene.text('"Safety," you reply emphatically. "Birth control and condoms can both fail. So doubling up gives me the best chance of avoiding pregnancy."');
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"I don\'t want kids either and even <i>I\'m</i> not that careful," he grumbles quietly.');
        }
      } else {
        if (((s as any).npc_childfree ?? 0)?.[String((s as any).npcID ?? 0)] === 1) {
          scene.text('"Well on that we agree. But it doesn\'t mean I have to like using condoms."');
          scene.text('He gives you a rueful smile.');
        }
      }
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterAgeAskTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['age_ask_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  if (((s as any).vidage ?? 0) < 20) {
    // TODO-QSP: dynamic text: "How old did you say you were again?" <<$npcdesc>> asks, looking sidelong at you...
    scene.text(`"How old did you say you were again?" ${((s as any).npcdesc ?? 0)} asks, looking sidelong at you and letting his eyes run up and down your nubile body.`);
  } else {
    // TODO-QSP: dynamic text: "How old did you say you were again?" <<$npcdesc>> asks, looking sidelong at you...
    scene.text(`"How old did you say you were again?" ${((s as any).npcdesc ?? 0)} asks, looking sidelong at you and letting his eyes run up and down your nubile body.`);
  }
  if (((s as any).age ?? 0) < 18) {
    scene.actions([
      { label: 'Lie', handler: (st: GameState) => {
    ((s as any).npc_thinkage ?? {})[String((s as any).npcID ?? 0)] = 18;
    scene.text('"I\'m 18," you lie with a bright smile.');
  }, goto: ['sex_ev_boy_pillow_talk', 'age_ask_respond'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him', handler: (st: GameState) => {
    ((s as any).npc_thinkage ?? {})[String((s as any).npcID ?? 0)] = ((s as any).age ?? 0);
    if (((s as any).age ?? 0) < 18) {
      // TODO-QSP: dynamic text: "I'm <<age>>," you say. "Is that a problem?"
      scene.text(`"I'm ${((s as any).age ?? 0)}," you say. "Is that a problem?"`);
    } else {
      // TODO-QSP: dynamic text: "I'm <<age>>," you say. "Is that a problem?"
      scene.text(`"I'm ${((s as any).age ?? 0)}," you say. "Is that a problem?"`);
    }
  }, goto: ['sex_ev_boy_pillow_talk', 'age_ask_respond'] },
    { label: 'Tease him (tell)', handler: (st: GameState) => {
    ((s as any).npc_thinkage ?? {})[String((s as any).npcID ?? 0)] = ((s as any).age ?? 0);
    if (((s as any).age ?? 0) < 18) {
      // TODO-QSP: dynamic text: "I'm <<age>>," you smirk. "So it's legal for us to fuck as long as you don't pou...
      scene.text(`"I'm ${((s as any).age ?? 0)}," you smirk. "So it's legal for us to fuck as long as you don't pour me a drink."`);
      scene.text('"I guess I better give you something to concentrate on so you don\'t start drinking," he grins back.');
    } else {
      // TODO-QSP: dynamic text: "I'm <<age>>," you smirk. "Is that a problem?"
      scene.text(`"I'm ${((s as any).age ?? 0)}," you smirk. "Is that a problem?"`);
      scene.text('"Not at all," he grins back. "I like em young and hot."');
    }
  }, goto: ['sex_ev_boy_pillow_talk', 'age_ask_respond'] },
    { label: 'Tease him (don\'t tell)', handler: (st: GameState) => {
    scene.text('"I didn\'t..." you smirk wryly, eyes twinkling with mischief as you let the question stew in him.');
  }, goto: ['sex_ev_boy_pillow_talk', 'age_ask_respond'] },
  ]);
  scene.build();
}

function enterAgeAskRespond(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_thinkage ?? 0)?.[String((s as any).npcID ?? 0)] < 20  &&  ((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'perverted'  &&  ((s as any).npc_age ?? 0)?.[String((s as any).npcID ?? 0)] >= 28) {
    scene.text('"You know what the best thing about teenage girls is?" he grins. "I get older and they stay the same age."');
    scene.actions([
      { label: 'Play into it', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('"That\'s the thing about us teenage girls," you reply. "We\'re all sex crazed dick addicts who love fucking."');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Snicker', handler: (st: GameState) => {
    scene.text('You roll your eyes, but snicker anyways.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
      { label: 'Gross', handler: (st: GameState) => {
    scene.img('images/shared/sex/after/pillow_talk_eyeroll.mp4');
    scene.text('<i>Ugh. Gross...</i> you think, rolling your eyes.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  } else {
    if (((s as any).npc_thinkage ?? 0)?.[String((s as any).npcID ?? 0)] < 18) {
      scene.text('"Not at all," he grins back. "I like em young and hot."');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      scene.text('"Not at all," he grins back.');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPubesSoftTalk(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['boy_pube_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  // TODO-QSP: dynamic text: "Your bush is so soft," <<$npcdesc>> murmurs, running his fingers through the sm...
  scene.text(`"Your bush is so soft," ${((s as any).npcdesc ?? 0)} murmurs, running his fingers through the smooth fur of your mound.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Get embarrassed', handler: (st: GameState) => {
    scene.text('"What are you saying?!" you squeak, flushing hot with embarrassment as he continues to gently rub your pubic area.');
    scene.text('"I\'m saying that you\'re beautiful," he smiles at you. "Not just in appearance, but texture too."');
    scene.text('"Stop it, weirdo!" You turn your face away from him, unable to bear anymore of his strange praise.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Get embarrassed (and lash out)', handler: (st: GameState) => {
    scene.text('"What are you saying?! Stop it!" You abruptly slap his hand away from you, glaring at him to cover the hot flush of embarrassment filling your cheeks.');
    if (((s as any).npc_argumentative ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', '', ((s as any).npcID ?? 0), 'modify', 'dislike');
      scene.text('"I was just trying to pay you a compliment," he frowns.');
      scene.text('"Well, pick one that isn\'t so weird next time!" you snap. "Seriously, who compliments someone\'s pubes?!');
    } else {
      scene.text('"I\'m saying that you\'re beautiful." He smiles at you, apparently uncowed by your reaction. "Not just in appearance, but texture too."');
      scene.text('"Well say it differently if you\'re going to say it!" you snap and turn your face away to cross your arms and harrumph to hide your face. "I mean, who compliments a girl on the feel of her pubes?! Weirdo!"');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
  ]);
  scene.build();
}

function enterBodycountAsk(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['bodycount_ask'] === 0) {
    ((s as any).sex_ev ?? {})['bodycount_ask'] = 1;
    // TODO-QSP: sex_ev[$ARGS[1]] = 1
    qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
    // TODO-QSP: dynamic text: "Tell me honestly," <<$npcdesc>> says. "How many guys have you fucked?"
    scene.text(`"Tell me honestly," ${((s as any).npcdesc ?? 0)} says. "How many guys have you fucked?"`);
    qspCall(s, 'sex_ev_boy_pillow_talk', 'bodycount_answers');
    scene.actions([
      { label: 'Be secretive', handler: (st: GameState) => {
    scene.text('"A girl doesn\'t kiss and tell," you reply, a mischievous smirk on your lips.');
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBodycountAnswers(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'shortgs', 'guy') >= 30  &&  ((s as any).sex_ev ?? 0)?.['body_count_recent'] === 0) {
    scene.actions([
      { label: 'Recently or total?', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_boy_pillow_talk', 'bodycount_recent'
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer honestly', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_boy_pillow_talk', 'bodycount_honest'
  } },
  ]);
  scene.build();
}

function enterBodycountHonest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['deflowered'] === 1) {
      // TODO-QSP: dynamic text: "I'd never had sex before ' + iif(daystage >= 4, 'tonight,"', 'today,"') + 'you ...
      scene.text('"I\'d never had sex before \' + iif(daystage >= 4, \'tonight,"\', \'today,"\') + \'you tell him somewhat abashedly.');
    } else {
      scene.text('Just one. You." He smiles at you warmly and you return it.');
    }
    scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
  } else {
    if (((s as any).stat ?? 0)?.['men_fucked'] === 1) {
      if (((s as any).npc_fuck_times ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
        scene.text('"Just one other guy," you tell him. "You\'re actually only my second."');
        scene.text('"Somehow that doesn\'t feel as special as being first," he says wryly.');
      } else {
        scene.text('Just one. You." He smiles at you warmly and you return it.');
      }
      scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
    } else {
      if (((s as any).stat ?? 0)?.['men_fucked'] < 5) {
        // TODO-QSP: '"Just a few," you tell him. "About ' + iif(npc_fuck_times[$npcID] > 0, '<<$func(''string'', ''parse...
        qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
        qspCall(s, 'sex_ev_pillow_talk2', 'dont_hookup');
      } else {
        if (((s as any).stat ?? 0)?.['men_fucked'] < 10) {
          // TODO-QSP: '"I''ve been around the block a few times," you tell him. "About ' + iif(npc_fuck_times[$npcID] > 0,...
          qspCall(s, 'sex_ev_pillow_talk', 'topic_route');
          qspCall(s, 'sex_ev_pillow_talk2', 'dont_hookup');
        } else {
          if (((s as any).stat ?? 0)?.['men_fucked'] < 25) {
            // TODO-QSP: '"I''ve been around the block a few times," you tell him. "I think my body count is up to ' + iif(np...
            scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
          } else {
            if (((s as any).stat ?? 0)?.['men_fucked'] < 30) {
              // TODO-QSP: '"A couple dozen or so," you tell him. "I think my body count is up to ' + iif(npc_fuck_times[$npcID...
              scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
            } else {
              if (((s as any).stat ?? 0)?.['men_fucked'] < 50) {
                scene.text('"A few dozen at this point," you tell him. "I\'m starting to lose count."');
                qspCall(s, 'sex_ev_boy_pillow_talk', 'bodycount_slut');
              } else {
                if (((s as any).stat ?? 0)?.['men_fucked'] < 100) {
                  scene.text('"I\'ve lost count at this point," you grin. "I\'m pretty sure I\'m not at a hundred yet but definitely over 50."');
                  qspCall(s, 'sex_ev_boy_pillow_talk', 'bodycount_slut');
                } else {
                  if (((s as any).stat ?? 0)?.['men_fucked'] < 200) {
                    scene.text('"At least a hundred," you grin. "Couldn\'t tell you much after that. It\'s hard to keep track after the first fifty."');
                    qspCall(s, 'sex_ev_boy_pillow_talk', 'bodycount_slut');
                  } else {
                    scene.text('"Hundreds," you grin.');
                    qspCall(s, 'sex_ev_boy_pillow_talk', 'bodycount_slut');
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

function enterBodycountRecent(s: GameState, scene: SceneBuilder): void {
  ((s as any).sex_ev ?? {})['body_count_recent'] = qspFunc(s, 'shortgs', 'count_func', 'npc_last_sex', (((s as any).daystart ?? 0) - 30));
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
  scene.text('"Just recently or you want the full count?" you ask smirking.');
  if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
    scene.text('"There\'s a difference? Well now I <i>have</i> to know," he grins back.');
    if (((s as any).sex_ev ?? 0)?.['body_count_recent'] <= 5) {
      scene.actions([
        { label: 'Been in a dry spell', handler: (st: GameState) => {
    scene.text('"I\'ve been in kind of a dry spell lately. I\'ve only been with..."');
    // TODO-QSP: dynamic text: You raise your hand, holding up <<sex_ev['body_count_recent']>> fingers.
    scene.text(`You raise your hand, holding up ${((s as any).sex_ev ?? 0)?.['body_count_recent']} fingers.`);
    if (((s as any).sex_ev ?? 0)?.['body_count_recent'] === 1) {
      scene.text('"... guy in the last month."');
      // TODO-QSP: dynamic text: "Just me?" <<$npcdesc>> blinks as you nod ruefully. "So what's the total then?"
      scene.text(`"Just me?" ${((s as any).npcdesc ?? 0)} blinks as you nod ruefully. "So what's the total then?"`);
    } else {
      scene.text('"... guys in the last month."');
      if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] !== 'intellectual') {
        // TODO-QSP: dynamic text: "13 year old me would have been stoked by those numbers," <<$npcdesc>> grins. "I...
        scene.text(`"13 year old me would have been stoked by those numbers," ${((s as any).npcdesc ?? 0)} grins. "If that's a dry spell, then what's the total?"`);
      } else {
        // TODO-QSP: dynamic text: "If that's a dry spell for you then I can't wait to hear the total," <<$npcdesc>...
        scene.text(`"If that's a dry spell for you then I can't wait to hear the total," ${((s as any).npcdesc ?? 0)} grins.`);
      }
    }
  }, goto: ['sex_ev_boy_pillow_talk', 'bodycount_answers'] },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him the recent count', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Hmmm. Probably about... <<sex_ev['body_count_recent']>> guys in the last month?...
    scene.text(`"Hmmm. Probably about... ${((s as any).sex_ev ?? 0)?.['body_count_recent']} guys in the last month?"`);
    if (((s as any).sex_ev ?? 0)?.['body_count_recent'] >= 30) {
      // TODO-QSP: dynamic text: <<$npcdesc>>'s eyebrows go up at that.
      scene.text(`${((s as any).npcdesc ?? 0)}'s eyebrows go up at that.`);
      scene.text('"That\'s more than guys than there are days in the month. Wow. You\'re a real slut, aren\'t you?"');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_boy_pillow_talk', 'bodycount_slut_responses'] }]);
    } else {
      scene.text('"If that\'s the recent, then what\'s the total?"');
      scene.actions([{ label: 'Continue', goto: ['sex_ev_boy_pillow_talk', 'bodycount_answers'] }]);
    }
  } },
      ]);
    }
  } else {
    scene.text('WIP options');
    scene.actions([{ label: 'Continue', goto: ['sex_ev_boy_pillow_talk', 'bodycount_answers'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterBodycountSlut(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npc_indiscreet ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    qspCall(s, 'fame', '', ((s as any).region ?? 0), 'slut', 'medium');
  }
  if (((s as any).npc_bodycount_know ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    if (((s as any).npc_bodycount_know ?? 0)?.[String((s as any).npcID ?? 0)] < 5) {
      // TODO-QSP: dynamic text: "Wow. You've turned into a real slut, haven't you?" <<$npcdesc>> laughs. "You li...
      scene.text(`"Wow. You've turned into a real slut, haven't you?" ${((s as any).npcdesc ?? 0)} laughs. "You like having sex that much?"`);
    } else {
      if (((s as any).npc_bodycount_know ?? 0)?.[String((s as any).npcID ?? 0)] < 25) {
        // TODO-QSP: dynamic text: "You've been slutting it up around town, huh?" <<$npcdesc>> laughs. "You like ha...
        scene.text(`"You've been slutting it up around town, huh?" ${((s as any).npcdesc ?? 0)} laughs. "You like having sex that much?"`);
      } else {
        if (((s as any).npc_bodycount_know ?? 0)?.[String((s as any).npcID ?? 0)] < 30) {
          // TODO-QSP: dynamic text: "You've turned yourself into a proper slut, I see," <<$npcdesc>> laughs. "You li...
          scene.text(`"You've turned yourself into a proper slut, I see," ${((s as any).npcdesc ?? 0)} laughs. "You like having sex that much?"`);
        } else {
          // TODO-QSP: dynamic text: "Still slutting it up around town, huh?" <<$npcdesc>> laughs. "You like having s...
          scene.text(`"Still slutting it up around town, huh?" ${((s as any).npcdesc ?? 0)} laughs. "You like having sex that much?"`);
        }
      }
    }
  } else {
    scene.text('"Wow. You\'re kind of a slut, aren\'t you?"');
  }
  ((s as any).npc_bodycount_know ?? {})[String((s as any).npcID ?? 0)] = ((s as any).stat ?? 0)?.['men_fucked'];
  scene.actions([{ label: 'Continue', goto: ['sex_ev_boy_pillow_talk', 'bodycount_slut_responses'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterBodycountSlutResponses(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Own it', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"Well... yeah," you shrug, smirking. "I love sex. Why should I hold back from fucking guys?"');
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
      // TODO-QSP: dynamic text: "So you aren't looking for anything more... serious?" <<$npcdesc>> asks.
      scene.text(`"So you aren't looking for anything more... serious?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_boy_pillow_talk', 'bodycount_serious'] }]);
    } else {
      // TODO-QSP: dynamic text: "No complaints here as long as you keep fucking me," <<$npcdesc>> grins back.
      scene.text(`"No complaints here as long as you keep fucking me," ${((s as any).npcdesc ?? 0)} grins back.`);
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Not <i>just</i> about sex (service)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    scene.text('"Well, it\'s not <i>just</i> about the sex," you say slowly. "Though I like that part too. It\'s about making other people happy. The feeling that I\'m getting somebody off gets <i>me</i> off. It feels good to make someone else happy and there\'s not much better proof of they\'re happiness than when they\'re cumming," you end with a smirk.');
    if (((s as any).npc_caretaker ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
      qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
      // TODO-QSP: dynamic text: "I know what you mean," <<$npcdesc>> smiles. "My partner cumming is important to...
      scene.text(`"I know what you mean," ${((s as any).npcdesc ?? 0)} smiles. "My partner cumming is important to my own experience too."`);
    } else {
      scene.text('"No disagreements here," he smirks back.');
    }
  }, goto: ['sex_ev_pillow_talk', 'topic_route'] },
    { label: 'Not <i>just</i> about sex (self-confidence)', handler: (st: GameState) => {
    qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1', 5);
    // TODO-QSP: dynamic text: "Well, it's not <i>just</i> about the sex," you say slowly. "Though I like that ...
    scene.text(`"Well, it's not <i>just</i> about the sex," you say slowly. "Though I like that part too. The thing is, I like men." You smirk at ${((s as any).npcdesc ?? 0)}. "I know what I want and I want what I like. So I'm going to do whatever I want and <i>who</i>ever I want. So I'll go out, meet a guy. Decide if I like him. Maybe fuck him, maybe not. If I enjoy his company I'll hang a round a while until I get bored. Find someone new to have fun with. If that makes me a slut, then so be it."`);
    if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'serious') {
      // TODO-QSP: dynamic text: "So you aren't looking for anything more... serious?" <<$npcdesc>> asks.
      scene.text(`"So you aren't looking for anything more... serious?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.actions([{ label: 'Continue', goto: ['sex_ev_boy_pillow_talk', 'bodycount_serious'] }]);
    } else {
      if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'casual') {
        // TODO-QSP: dynamic text: "I don't think it does," <<$npcdesc>> shakes his head. "People are allowed to ha...
        scene.text(`"I don't think it does," ${((s as any).npcdesc ?? 0)} shakes his head. "People are allowed to have their fun.`);
        scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
      } else {
        if (((s as any).npc_rel_goal ?? 0)?.[String((s as any).npcID ?? 0)] === 'sex') {
          scene.text('"I think it definitely makes you a slut," he grins. "But I don\'t care as long as you keep letting me fuck you."');
          scene.text('"Keep me entertained and I will," you smirk back.');
          scene.actions([{ label: 'Continue', goto: ['sex_ev_pillow_talk', 'topic_route'] }]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'checker':
      enterChecker(s, scene);
      break;
    case 'boy_talk':
      enterBoyTalk(s, scene);
      break;
    case 'template':
      enterTemplate(s, scene);
      break;
    case 'dont_swallow_talk':
      enterDontSwallowTalk(s, scene);
      break;
    case 'like_cum_talk':
      enterLikeCumTalk(s, scene);
      break;
    case 'like_cum_talk2':
      enterLikeCumTalk2(s, scene);
      break;
    case 'dont_have_to_swallow_talk':
      enterDontHaveToSwallowTalk(s, scene);
      break;
    case 'boy_drink_offer':
      enterBoyDrinkOffer(s, scene);
      break;
    case 'boy_broken_condom':
      enterBoyBrokenCondom(s, scene);
      break;
    case 'boy_take_pill_now':
      enterBoyTakePillNow(s, scene);
      break;
    case 'boy_morning_pill_talk1':
      enterBoyMorningPillTalk1(s, scene);
      break;
    case 'boy_accidental_creampie_talk1':
      enterBoyAccidentalCreampieTalk1(s, scene);
      break;
    case 'boy_accidental_creampie_talk2':
      enterBoyAccidentalCreampieTalk2(s, scene);
      break;
    case 'boy_like_hair_talk':
      enterBoyLikeHairTalk(s, scene);
      break;
    case 'boy_condom_rule':
      enterBoyCondomRule(s, scene);
      break;
    case 'boy_take_shower':
      enterBoyTakeShower(s, scene);
      break;
    case 'boy_hates_condoms_start_desc':
      enterBoyHatesCondomsStartDesc(s, scene);
      break;
    case 'boy_hates_condoms':
      enterBoyHatesCondoms(s, scene);
      break;
    case 'age_ask_talk':
      enterAgeAskTalk(s, scene);
      break;
    case 'age_ask_respond':
      enterAgeAskRespond(s, scene);
      break;
    case 'pubes_soft_talk':
      enterPubesSoftTalk(s, scene);
      break;
    case 'bodycount_ask':
      enterBodycountAsk(s, scene);
      break;
    case 'bodycount_answers':
      enterBodycountAnswers(s, scene);
      break;
    case 'bodycount_honest':
      enterBodycountHonest(s, scene);
      break;
    case 'bodycount_recent':
      enterBodycountRecent(s, scene);
      break;
    case 'bodycount_slut':
      enterBodycountSlut(s, scene);
      break;
    case 'bodycount_slut_responses':
      enterBodycountSlutResponses(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const sex_ev_boy_pillow_talk: LocationDef = {
  name: 'sex_ev_boy_pillow_talk',
  title: '"You know you don\'t have to swallow if you don\'t like it," h',
  region: 'other',
  enter: enter,
};
