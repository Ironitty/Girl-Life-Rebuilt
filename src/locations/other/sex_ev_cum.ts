import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sex_ev ?? 0)?.['girl_orgasm'] === 1) {
    if (((s as any).sex_ev ?? 0)?.['speed'] === 3) {
      (s as any).sex_ev['rough_cum'] = ((s as any).sex_ev['rough_cum'] ?? 0) + (1);
    }
    (s as any).sex_ev['consecutive_orgasm'] = ((s as any).sex_ev['consecutive_orgasm'] ?? 0) + (1);
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) - (((s as any).pcs_horny ?? 0)/3);
    (s as any).sex_ev['orgasm'] = ((s as any).orgasm ?? 0);
    (s as any).sex_ev['orgasm_count'] = ((s as any).sex_ev['orgasm_count'] ?? 0) + (1);
    if (((s as any).sex_ev ?? 0)?.['consecutive_orgasm'] > 1) {
      (s as any).sex_ev['consecutive_orgasm_desc'] = 'Come again!';
    } else {
      (s as any).sex_ev['consecutive_orgasm_desc'] = 'Come!';
    }
    scene.actions([
      { label: '<<$sex_ev[\'consecutive_orgasm_desc\']>>', handler: (st: GameState) => {
    if (((s as any).sex_ev ?? 0)?.['position'] === 'miss') {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'miss_cum'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'doggy_cum'] }]);
      if (((s as any).sex_ev ?? 0)?.['position'] === 'cowgirl') {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'cowgirl_cum'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['sex_ev_cum', 'anal_doggy_cum'] }]);
      }
    }
    if (((s as any).sex_ev ?? 0)?.['orgasm'] === ((s as any).orgasm ?? 0)  &&  ((s as any).sex_ev ?? 0)?.['cum_choice'] !== 'creampie_surprise'  &&  ((s as any).sex_ev ?? 0)?.['boy_cum'] < 1) {
      scene.actions([
        { label: 'Fake an orgasm', handler: (st: GameState) => {
    (s as any).sex_ev['fake_orgasm_count'] = ((s as any).sex_ev['fake_orgasm_count'] ?? 0) + (1);
    (s as any).fake_orgasm = ((s as any).fake_orgasm ?? 0) + (1);
    qspCall(s, 'sex_ev_sex', 'fuck_arousal_code');
    qspCall(s, 'stat', '');
    scene.img(`images/shared/sex/vag/${((s as any).sex_ev ?? 0)?.['\'position\'']}/slow2.mp4`);
    scene.text('"Ugh! Ugh! Ugh! <i>Ughhhh!!</i>"');
    if (((s as any).pcs_horny ?? 0) >= 80) {
      // TODO-QSP: dynamic text: <<$npcdesc>> is doing a good job, even if he's not quite getting you off. You do...
      scene.text(`${((s as any).npcdesc ?? 0)} is doing a good job, even if he's not quite getting you off. You don't think you'll manage to come this time, but you don't want him to feel bad about it either. So...`);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> isn't doing bad, but he's nowhere near to really getting you off. B...
      scene.text(`${((s as any).npcdesc ?? 0)} isn't doing bad, but he's nowhere near to really getting you off. But you also don't want him to feel bad, so...`);
    }
    // TODO-QSP: dynamic text: You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now ...
    scene.text(`You moan loudly despite the distinct <i>lack</i> of pleasure you feel right now before crying out and clenching down on ${((s as any).npcdesc ?? 0)}'s cock with your pussy as hard as you can, dramatically tensing all your muscles as hard as you can, forcing your body to quiver.`);
    // TODO-QSP: dynamic text: <<$npcdesc>> slows down even more for a beat.
    scene.text(`${((s as any).npcdesc ?? 0)} slows down even more for a beat.`);
    scene.text('"Did you just...?"');
    scene.text('"Yeah," you pant with feigned breathlessness and smile at him. "You\'re incredible."');
    scene.text('He smiles back and gets right on back to fucking you.');
    qspCall(s, 'sex_ev_cum', 'fuck_cum');
  } },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

export const sex_ev_cum: LocationDef = {
  name: 'sex_ev_cum',
  title: '"<i>Nmmnnghhhaaaaaaaaaa!</i>"',
  region: 'other',
  enter: enter,
};
