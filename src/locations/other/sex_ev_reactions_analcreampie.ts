import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
  }
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'anal_creampie') {
    if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'thought_no_creampies');
    } else {
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_happy');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_conflicted');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_unhappy');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_cum_together_react');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside');
      qspCall(s, 'sex_ev_reactions', 'cum_already');
      qspCall(s, 'sex_ev_reactions_analcreampie', 'pull-out_finish');
    }
  }
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_acp_known ?? 0) === 1) {
    scene.actions([
      { label: 'First anal creampie', handler: (st: GameState) => {
    (s as any).npc_first_creampie[$npcID] = 1;
    scene.actions([
      { label: 'Is that what it feels like?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        scene.img('images/shared/sex/vag/cowgirl/3.jpg');
      } else {
        scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
      }
    }
    qspCall(s, 'sex_ev_reactions_analcreampie', 'what_creampie_feels_like');
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterWhatCreampieFeelsLike(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
    scene.text('"Is... is that what it feels like when a guy comes in your ass...?" you stammer breathlessly.');
  } else {
    scene.text('"Is... is that what it feels like when a guy comes in your ass...?" you gasp in shock.');
  }
  if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    qspCall(s, 'sex_ev_reactions_analcreampie', 'did_you_come_inside_boy_react1');
  } else {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
      // TODO-QSP: dynamic text: "Wait, was that your first creampie?" <<$npcdesc>> asks.
      scene.text(`"Wait, was that your first creampie?" ${((s as any).npcdesc ?? 0)} asks.`);
      scene.actions([
        { label: '"You\'re my first"', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/4.jpg');
      } else {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/smile1.jpg');
        }
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
        } else {
          scene.img('images/shared/sex/cum/analcreampie/after1.jpg');
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/analcreampie/cowgirl1.mp4');
          }
        }
        // TODO-QSP: dynamic text: "Yeah," you nod, giving <<$npcdesc>> a warm smile. "You're my first."
        scene.text(`"Yeah," you nod, giving ${((s as any).npcdesc ?? 0)} a warm smile. "You're my first."`);
        if (((s as any).npc_cum_pref ?? 0)?.[String((s as any).npcID ?? 0)] === 'creampie') {
          scene.text('"Careful," he smiles back at you. "You might get addicted."');
        } else {
          scene.text('He smiles back at you.');
        }
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    } else {
      scene.text('"Yeah," he smiles back. "Feels pretty good doesn\'t it?"');
      scene.text('"Yeah. Did you like it?"');
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
      scene.text('You nod back, too overwhelmed to be able to say anything else.');
      qspCall(s, 'sex_ev_sex', 'sex_end');
    } else {
      scene.actions([
        { label: 'Feels gross', handler: (st: GameState) => {
    scene.text('"Ugh," you grimace in disgust. "This might be one of the grossest things I\'ve ever felt."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
        { label: 'Feels good', handler: (st: GameState) => {
    scene.text('"Yeah," you can\'t help but smile back. "It feels <i>really</i> good..."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
    if (((s as any).stat ?? 0)?.['total_creampies'] > 0) {
      scene.actions([
        { label: 'Feels different from vaginal creampies', handler: (st: GameState) => {
    scene.text('"It feels totally different from when a guy comes in my pussy," you murmur, still astonished by it.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'creampie_react':
      enterCreampieReact(s, scene);
      break;
    case 'first_creampie':
      enterFirstCreampie(s, scene);
      break;
    case 'what_creampie_feels_like':
      enterWhatCreampieFeelsLike(s, scene);
      break;
    default:
      enterCreampieReact(s, scene);
      break;
  }
}

export const sex_ev_reactions_analcreampie: LocationDef = {
  name: 'sex_ev_reactions_analcreampie',
  title: '"Is... is that what it feels like when a guy comes in your a',
  region: 'other',
  enter: enter,
};
