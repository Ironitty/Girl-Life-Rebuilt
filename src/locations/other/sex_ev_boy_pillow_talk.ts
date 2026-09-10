import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterChecker(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['boy_asleep'] === 0) {
    if (((s as any).sex_ev ?? 0)?.['boy_pillow_talk'] > 0) {
      qspCall(s, 'sex_ev_boy_pillow_talk', 'boy_talk');
    } else {
      (s as any).sex_ev['boy_pillow_talk'] = ((s as any).sex_ev['boy_pillow_talk'] ?? 0) + (1);
    }
  }
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
      (s as any).sex_ev['sugar_baby_offer'] = (-1);
    }
    if (((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] === 'hookup'  &&  ((s as any).npc_finance ?? 0)?.[String((s as any).npcID ?? 0)] >= 2  &&  ((s as any).sex_ev ?? 0)?.['sugar_baby_offer'] === 0  &&  (((Math.floor(Math.random() * (2 - -1 + 1)) + (-1)) - ((s as any).npc_selfish ?? 0)?.[String((s as any).npcID ?? 0)]) > 0  ||  ((s as any).sex_ev ?? 0)?.['prostitution'] === 1  ||  ((s as any).npc_womanizer ?? 0)?.[String((s as any).npcID ?? 0)] === 1)) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_sugardaddy_talk', 'sugar_baby_offer'"
    } else {
      (s as any).sex_ev['sugar_baby_offer'] = (-1);
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
        // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'pubes_soft_talk'"
      }
    }
    if (((s as any).sex_ev ?? 0)?.['boy_likes_hair'] === 1  &&  ((s as any).sex_ev ?? 0)?.['boy_like_hair_talk'] === 0) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_body_talk', 'boy_like_hair_talk'"
    }
    if (((Array.isArray((s as any).pcs_appearance) ? ((s as any).pcs_appearance as any[]).indexOf('innocent') : -1) >= 0  ||  (Array.isArray((s as any).pcs_appearance) ? ((s as any).pcs_appearance as any[]).indexOf('nerdy') : -1) >= 0)  &&  ((Array.isArray((s as any).body_count) ? ((s as any).body_count as any[]).indexOf(((s as any).npcID ?? 0)) : -1) < 0  &&  ((s as any).sex_ev ?? 0)?.['fucked_out'] > 0  &&  ((s as any).sex_ev ?? 0)?.['cum_count'] > 2  &&  ((s as any).sex_ev ?? 0)?.['fuck_count'] > 0  &&  ((s as any).sex_ev ?? 0)?.['tap_out'] === 0  &&  ((s as any).sex_ev ?? 0)?.['boy_nerdy_slut_talk'] === 0)) {
      // TODO-QSP: $sex_ev_boy_topics[] = "xgt 'sex_ev_boy_pillow_talk', 'boy_nerdy_slut_talk1'"
    }
    if (Object.keys((s as any).sex_ev_boy_topics ?? {}).length > 0) {
      (s as any).sex_ev['boy_pillow_talk'] = 0;
    }
  }
  scene.build();
}

function enterTemplate(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['template'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  qspCall(s, 'sex_ev_pillow_talk', 'pillow_picture1');
  scene.build();
}

function enterDontSwallowTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['boy_topics'] = ((s as any).sex_ev['boy_topics'] ?? 0) - (1);
  (s as any).sex_ev['dont_swallow_talk'] = 1;
  qspCall(s, 'sex_ev_pillow_talk', 'talk_time_add');
  scene.img('images/shared/sex/after/pillow_talk1.jpg');
  // TODO-QSP: dynamic text: "So you don't swallow?" <<$npcdesc>> asks.
  scene.text(`"So you don't swallow?" ${((s as any).npcdesc ?? 0)} asks.`);
  scene.build();
}

function enterLikeCumTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['boy_topics'] = ((s as any).sex_ev['boy_topics'] ?? 0) - (1);
  (s as any).sex_ev['like_cum_talk'] = 1;
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
    // TODO-QSP: dynamic text: "So you really like the taste of my cum?" <<$npcdesc>> asks, an oddly eager smil...
    scene.text(`"So you really like the taste of my cum?" ${((s as any).npcdesc ?? 0)} asks, an oddly eager smile on his face.`);
    if (((s as any).npc_know_like_cum ?? 0)?.[String((s as any).npcID ?? 0)] === -1) {
    }
  }
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
    default:
      enterChecker(s, scene);
      break;
  }
}

export const sex_ev_boy_pillow_talk: LocationDef = {
  name: 'sex_ev_boy_pillow_talk',
  title: '"You know you don\'t have to swallow if you don\'t like it," h',
  region: 'other',
  enter: enter,
};
