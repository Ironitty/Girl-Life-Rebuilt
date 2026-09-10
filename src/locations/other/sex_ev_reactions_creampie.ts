import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCreampieReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
    qspCall(s, 'sex_ev_cum', 'cum_inside_pull_away');
  }
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'creampie') {
    if (((s as any).sex_ev ?? 0)?.['creampie_ask'] === 1  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] > 0  &&  ((s as any).npc_boyfriend_creampie_rule ?? 0)?.[String((s as any).npcID ?? 0)] < 3  &&  ((s as any).npc_free_creampies_count ?? 0)?.[String((s as any).npcID ?? 0)] === 0) {
      qspCall(s, 'sex_ev_reactions_creampie', 'thought_no_creampies');
    } else {
      if (((s as any).sex_ev ?? 0)?.['reluctant_creampie'] !== 1  &&  ((s as any).sex_ev ?? 0)?.['unhappy_creampie'] !== 1) {
        scene.actions([
          { label: 'Happy creampie', handler: (st: GameState) => {
    // TODO-QSP: xgt 'sex_ev_reactions_creampie', 'creampie_happy'
  } },
        ]);
      }
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_conflicted');
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_unhappy');
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_cum_together_react');
      qspCall(s, 'sex_ev_talk', 'free_creampies');
      qspCall(s, 'sex_ev_reactions_creampie', 'creampie_safe_day');
      qspCall(s, 'sex_ev_reactions_creampie', 'did_you_come_inside');
      qspCall(s, 'sex_ev_reactions_creampie', 'have_plan_b2');
      qspCall(s, 'sex_ev_reactions', 'cum_already');
      qspCall(s, 'sex_ev_reactions_creampie', 'pull-out_finish');
    }
  }
  scene.build();
}

function enterFirstCreampie(s: GameState, scene: SceneBuilder): void {
  if (((s as any).stat ?? 0)?.['total_creampies'] === 1) {
    scene.actions([
      { label: 'First creampie', handler: (st: GameState) => {
    (s as any).npc_first_creampie[$npcID] = 1;
    scene.actions([
      { label: 'Is that what it feels like?', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['accidental_creampie_count'] === 1) {
    } else {
      if (((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
        if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
          scene.img('images/shared/sex/vag/miss/3.jpg');
        } else {
          scene.img('images/shared/sex/vag/doggy/1.jpg');
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/vag/cowgirl/3.jpg');
          }
          if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
            scene.img('images/shared/sex/cum/vagcreampie/miss1.jpg');
          } else {
            scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
            if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
              scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
            }
          }
        }
        qspCall(s, 'sex_ev_reactions_creampie', 'what_creampie_feels_like');
      }
      if (((s as any).stat ?? 0)?.['think_virgin'] === 0) {
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
          scene.img('images/shared/sex/cum/vagcreampie/doggy2.jpg');
          if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
            scene.img('images/shared/sex/cum/vagcreampie/cowgirl1.mp4');
          }
        }
        if (((s as any).sex_ev ?? 0)?.['orgasm'] < ((s as any).orgasm ?? 0)) {
          scene.text('"Hey, can I tell you something?" you ask, breathing hard after your orgasm.');
        } else {
          // TODO-QSP: dynamic text: "Hey, can I tell you something?" you ask, giving <<$npcdesc>> a look.
          scene.text(`"Hey, can I tell you something?" you ask, giving ${((s as any).npcdesc ?? 0)} a look.`);
        }
        scene.text('"Sure," he says. "What is it?"');
        scene.text('"I\'ve never let a guy come inside me before," you smile back warmly. "You\'re my first."');
        qspCall(s, 'sex_ev_sex', 'sex_end');
      }
    }
  } },
        ]);
      }
    }
  } },
    ]);
  } },
    ]);
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
    default:
      enterCreampieReact(s, scene);
      break;
  }
}

export const sex_ev_reactions_creampie: LocationDef = {
  name: 'sex_ev_reactions_creampie',
  region: 'other',
  enter: enter,
};
