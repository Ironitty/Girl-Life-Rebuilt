import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterBoyTopics(s: GameState, scene: SceneBuilder): void {
  if (((s as any).date_ev ?? 0)?.['what_do_you_like_talk'] === 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'what_do_you_like_talk'"
  }
  if (((((s as any).npc_conversations ?? 0)?.[String((s as any).npcID ?? 0)]).indexOf((';video_games;'))) + 1 === 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'video_games_talk'"
  }
  if (((s as any).date_ev ?? 0)?.['whats_your_type_talk'] === 0  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'boyfriend'  &&  ((s as any).npc_rel_type ?? 0)?.[String((s as any).npcID ?? 0)] !== 'husband') {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'whats_your_type_talk'"
  }
  qspCall(s, 'npc_get_preference', '', ((s as any).npcID ?? 0), 'randomPosIndNeg', 'hair_length');
  if (((s as any).date_ev ?? 0)?.['love_hair_talk'] === 0  &&  ((s as any).ngpPrefResult ?? 0)?.['HasPos'] !== '') {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'love_hair_talk'"
  }
  if (((s as any).date_ev ?? 0)?.['washing_hands_talk'] === 0  &&  ((s as any).npc_messy ?? 0)?.[String((s as any).npcID ?? 0)] > 0) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'washing_hands_talk'"
  }
  if (((s as any).date_ev ?? 0)?.['flashing_jogger'] === 0  &&  (((s as any).npc_build_desc ?? 0)?.[String((s as any).npcID ?? 0)] === 'athletic'  ||  ((s as any).npc_build_desc ?? 0)?.[String((s as any).npcID ?? 0)] === 'thin'  ||  ((s as any).npc_gymrat ?? 0)?.[String((s as any).npcID ?? 0)] > 0)) {
    // TODO-QSP: $date_ev_topics[] = "gt 'date_boy_talk', 'flashing_jogger'"
  }
  scene.build();
}

function enterWhatDoYouLikeTalk(s: GameState, scene: SceneBuilder): void {
  (s as any).date_ev['what_do_you_like_talk'] = 1;
  // TODO-QSP: dynamic text: "What do you like to do?" <<$npcdesc>> asks.
  scene.text(`"What do you like to do?" ${((s as any).npcdesc ?? 0)} asks.`);
  qspCall(s, 'date_boy_talk', 'what_do_you_like_menu');
  scene.build();
}

function enterWhatDoYouLikeMenu(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Studying', handler: (st: GameState) => {
    scene.text('"I spend a lot of time studying."');
    if (((s as any).npc_humor ?? 0)?.[String((s as any).npcID ?? 0)] === 'intellectual') {
      scene.text('"Oh yeah?" He seems surprised and interested. "What are you studying?"');
      scene.actions([
        { label: 'Getting into uni', handler: (st: GameState) => {
    if (((s as any).class ?? 0)?.['school_grade_average'] <= 20) {
      // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "My grades are ...
      scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "My grades are awful right now. I have to make a complete turnaround if I even want a <i>chance</i> at getting into uni!"`);
    } else {
      // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "My grades are ...
      scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "My grades are awful right now. I have a long way to go if I want to actually get into uni."`);
      if (((s as any).class ?? 0)?.['school_grade_average'] <= 60) {
        // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "My grades aren...
        scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "My grades aren't bad, but they're nothing special. I have a long way to go if I want to actually get into uni."`);
      } else {
        // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "I'm just tryin...
        scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "I'm just trying to get into uni."`);
        // TODO-QSP: dynamic text: "Pretty much everything." You give <<$npcdesc>> a wistful smile. "I'm just tryin...
        scene.text(`"Pretty much everything." You give ${((s as any).npcdesc ?? 0)} a wistful smile. "I'm just trying to get into uni."`);
      }
      scene.actions([
        { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
      ]);
    }
    scene.text('"You really spend your free time studying? That\'s kinda dorky, don\'t you think?" he says, quirking an eyebrow at you.');
    scene.actions([
      { label: 'Blush', handler: (st: GameState) => {
    scene.text('Your face grows hot with embarrassment.');
    scene.text('"I guess..."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      { label: 'You like learning', handler: (st: GameState) => {
    scene.text('"I just like learning, I guess," you shrug. "I know it sounds counter intuitive, but it\'s fun to be the best at something, even if it\'s just studying."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
      { label: 'Uni is really important', handler: (st: GameState) => {
    scene.text('"I really want to get into uni," you tell him. "It\'s hard for me to concentrate on having fun doing other things when I have such important bars to meet for my future."');
    scene.actions([
      { label: 'Continue', goto: ['date_talk', 'continue_rate'] },
    ]);
  } },
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
    case 'boy_topics':
      enterBoyTopics(s, scene);
      break;
    case 'what_do_you_like_talk':
      enterWhatDoYouLikeTalk(s, scene);
      break;
    case 'what_do_you_like_menu':
      enterWhatDoYouLikeMenu(s, scene);
      break;
    default:
      enterBoyTopics(s, scene);
      break;
  }
}

export const date_boy_talk: LocationDef = {
  name: 'date_boy_talk',
  title: '"I love video games!" you smile.',
  region: 'other',
  enter: enter,
};
