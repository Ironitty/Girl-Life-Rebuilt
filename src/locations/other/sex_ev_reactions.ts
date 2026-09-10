import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterCumReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['react'] === 0) {
    scene.actions([
      { label: 'React', handler: (st: GameState) => {
    (s as any).sex_ev['react'] = 1;
    qspCall(s, 'sex_ev_reactions', 'react_menu');
  } },
    ]);
  }
  if ((((s as any).sex_ev ?? 0)?.['orgasm_count'] >= 5  ||  ((s as any).pcs_sleep ?? 0) < 30)  &&  (((s as any).hour ?? 0) >= 20  ||  ((s as any).hour ?? 0) < 5)) {
    scene.actions([
      { label: 'Collapse', goto: ['sex_ev_after', 'black_out'] },
    ]);
  }
  scene.build();
}

function enterReactMenu(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sex_ev_reactions', 'bask_satisfaction');
  qspCall(s, 'sex_ev_reactions', 'handjob_react');
  qspCall(s, 'sex_ev_reactions', 'kuni_react');
  qspCall(s, 'sex_ev_reactions_creampie', 'creampie_react');
  qspCall(s, 'sex_ev_reactions_analcreampie', 'creampie_react');
  qspCall(s, 'sex_ev_reactions', 'swallow_react1');
  qspCall(s, 'sex_ev_reactions', 'cum_mouth_like_that');
  qspCall(s, 'sex_ev_reactions', 'cum_tits_react1');
  qspCall(s, 'sex_ev_reactions', 'facial_reactions');
  qspCall(s, 'sex_ev_reactions', 'pullout_react_menu');
  qspCall(s, 'sex_ev_reactions', 'condom_reactions');
  qspCall(s, 'sex_ev_reactions', 'no_cum_inside');
  qspCall(s, 'sex_ev_reactions', 'no_mouth_cum');
  qspCall(s, 'sex_ev_reactions', 'no_facial');
  qspCall(s, 'sex_ev_reactions', 'no_tits_cum');
  scene.build();
}

function enterHandjobReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'hand') {
    scene.actions([
      { label: 'I like to finish the job', handler: (st: GameState) => {
    scene.text('"It\'s fun when guys come in your hand," you smirk. "You can feel everything."');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  scene.build();
}

function enterKuniReact(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'kuni'  ||  ((s as any).sex_ev ?? 0)?.['position'] === 'facesit') {
    scene.actions([
      { label: 'You\'re good at that', handler: (st: GameState) => {
    (s as any).sex_ev['good_at_cuni'] = 1;
    // TODO-QSP: dynamic text: "You're pretty good at that," you smile, looking down at <<$npcdesc>>, his lips ...
    scene.text(`"You're pretty good at that," you smile, looking down at ${((s as any).npcdesc ?? 0)}, his lips glistening with your juices.`);
    scene.text('He just gives a smug grin and a shrug in return.');
    qspCall(s, 'sex_ev_sex', 'sex_end');
  } },
    ]);
  }
  scene.build();
}

function enterCondomReactions(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['last_cum'] === 'condom') {
    qspCall(s, 'sex_ev_reactions', 'good_thing_condom');
    qspCall(s, 'sex_ev_reactions', 'cum_already');
    if (((s as any).sex_ev ?? 0)?.['came_together'] === 2  &&  ((s as any).sex_ev ?? 0)?.['cock_inserted'] === 1) {
      scene.actions([
        { label: 'Did we come together?', handler: (st: GameState) => {
    (s as any).sex_ev['came_together'] = 3;
    if (((s as any).npc_know_love_creampie ?? 0)?.[String((s as any).npcID ?? 0)] !== 1) {
      scene.text('You nod hazily, mind still swimming from your orgasm.');
    } else {
      if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
        scene.img('images/shared/sex/vag/miss/2.jpg');
        // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
        scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc ?? 0)} just nods, breathing heavily on top of you. You can feel the swollen rubber around his cock bulging inside you.`);
      } else {
        scene.img('images/shared/sex/vag/doggy/1.jpg');
        // TODO-QSP: dynamic text: Your knees give out underneath you, falling down to the bed with <<$npcdesc>> on...
        scene.text(`Your knees give out underneath you, falling down to the bed with ${((s as any).npcdesc ?? 0)} on top of you.`);
        // TODO-QSP: dynamic text: Did you...? did we...? together..?" you pant. <<$npcdesc>> just nods, breathing ...
        scene.text(`Did you...? did we...? together..?" you pant. ${((s as any).npcdesc ?? 0)} just nods, breathing heavily on top of you. You can feel the swollen rubber around his cock bulging inside you.`);
        if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
          scene.img('images/shared/sex/vag/cowgirl/3.jpg');
          // TODO-QSP: dynamic text: You sit back on your haunches, feeling <<$npcdesc>>'s cock <i>squish</i> inside ...
          scene.text(`You sit back on your haunches, feeling ${((s as any).npcdesc ?? 0)}'s cock <i>squish</i> inside you, watching his chest rise and falls with the same laboured breathing as your own.`);
          // TODO-QSP: dynamic text: Did you...? did we...? together..?" you murmur. <<$npcdesc>> just nods. You can ...
          scene.text(`Did you...? did we...? together..?" you murmur. ${((s as any).npcdesc ?? 0)} just nods. You can feel the swollen rubber around his cock bulging inside you.`);
        }
      }
      qspCall(s, 'sex_ev_reactions', 'good_thing_condom');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'sex_ev_sex', 'sex_end');
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
    case 'cum_react':
      enterCumReact(s, scene);
      break;
    case 'react_menu':
      enterReactMenu(s, scene);
      break;
    case 'handjob_react':
      enterHandjobReact(s, scene);
      break;
    case 'kuni_react':
      enterKuniReact(s, scene);
      break;
    case 'condom_reactions':
      enterCondomReactions(s, scene);
      break;
    default:
      enterCumReact(s, scene);
      break;
  }
}

export const sex_ev_reactions: LocationDef = {
  name: 'sex_ev_reactions',
  title: 'A few minutes pass and your breathing slowly calms, relaxing',
  region: 'other',
  enter: enter,
};
