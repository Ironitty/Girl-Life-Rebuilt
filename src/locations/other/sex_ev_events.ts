// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterRandEvCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).sex_ev['rand_ev'] = ((s as any).sex_ev['rand_ev'] ?? 0) + (1);
  if (Math.floor(Math.random() * 20) + 1 <= ((s as any).sex_ev ?? 0)?.['rand_ev']) {
    (s as any).sex_ev['rand_ev'] = 0;
    if (Math.floor(Math.random() * 100) + 1 > ((s as any).npc_sexskill ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: $sex_ev_sex_events[] = "gt 'sex_ev_events', 'bad_thrust_start'"
    }
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss'  &&  ((s as any).sex_ev ?? 0)?.['phone_film'] === 0  &&  ((s as any).npc_sex_filmer ?? 0)?.[String((s as any).npcID ?? 0)] === 1  &&  Math.floor(Math.random() * 20) + 1 < ((s as any).npc_sexdrive ?? 0)?.[String((s as any).npcID ?? 0)]) {
      // TODO-QSP: $sex_ev_sex_events[] = "gt 'sex_ev_events', 'sex_film1'"
    }
    if (((s as any).arrsize ?? 0)('sex_ev_sex_events') > 0) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic $sex_ev_sex_events[rand(0, arrsize('sex_ev_sex_event...
  } },
      ]);
    }
  } else {
    (s as any).sex_ev['changing_pos_ev'] = ((s as any).sex_ev['changing_pos_ev'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['changing_pos_ev'] > Math.floor(Math.random() * 4) + 2) {
      (s as any).sex_ev['changing_pos_ev'] = 0;
      scene.actions([
        { label: 'Continue', goto: ['sex_ev_events', 'position_swap_ev'] },
      ]);
    }
  }
  scene.build();
}

function enterBadThrustStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
    scene.img('images/shared/sex/vag/miss/pain1.mp4');
    // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
    scene.text(`${((s as any).npcdesc ?? 0)} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
  } else {
    scene.img('images/shared/sex/vag/doggy/shock1.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
    scene.text(`${((s as any).npcdesc ?? 0)} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
    if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
      scene.img('images/shared/sex/vag/cowgirl/2.jpg');
      // TODO-QSP: dynamic text: You're just bouncing your hips back down onto <<$npcdesc>>'s cock when you feel ...
      scene.text(`You're just bouncing your hips back down onto ${((s as any).npcdesc ?? 0)}'s cock when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain.`);
    } else {
      scene.img('images/shared/sex/anal/doggy/anal.jpg');
      // TODO-QSP: dynamic text: <<$npcdesc>> is just going through the motions of his next thrust when you feel ...
      scene.text(`${((s as any).npcdesc ?? 0)} is just going through the motions of his next thrust when you feel an awkward <i>jolt</i> inside you and a sudden stab of pain right up your ass.`);
    }
    scene.actions([
      { label: 'Yelp', goto: ['sex_ev_events', 'bad_thrust_yelp'] },
    ]);
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'rand_ev_check':
      enterRandEvCheck(s, scene);
      break;
    case 'bad_thrust_start':
      enterBadThrustStart(s, scene);
      break;
    default:
      enterRandEvCheck(s, scene);
      break;
  }
}

export const sex_ev_events: LocationDef = {
  name: 'sex_ev_events',
  region: 'other',
  enter: enter,
};
