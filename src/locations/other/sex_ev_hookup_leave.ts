import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 20) + 1) < ((s as any).sex_ev ?? 0)?.['cum_count'] + ((s as any).sex_ev ?? 0)?.['extra_cum']) {
    (s as any).sex_ev['continuation'] = 1;
  }
  (s as any).sex_ev['leaving'] = 1;
  qspCall(s, 'sex_ev_clothing', 'dress_loop');
  if (((s as any).sex_ev ?? 0)?.['angry_after'] === 1  ||  ((s as any).sex_ev ?? 0)?.['annoyed'] > 0) {
    // TODO-QSP: dynamic text: "I have to go," you say flatly, reaching down for your clothes without looking a...
    scene.text(`"I have to go," you say flatly, reaching down for your clothes without looking at ${((s as any).npcdesc ?? 0)}.`);
  } else {
    // TODO-QSP: dynamic text: "This has been nice," you say, <<$sex_ev['dress_describe']>>. "But I really shou...
    scene.text(`"This has been nice," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}. "But I really should go."`);
    if (((s as any).sex_ev ?? 0)?.['get_up'] === 0) {
      // TODO-QSP: dynamic text: As nice as this is, you really can't stay and you heave yourself up and away fro...
      scene.text(`As nice as this is, you really can't stay and you heave yourself up and away from ${((s as any).npcdesc ?? 0)}, getting up from the bed and moving over to where your discarded clothes were thrown.`);
      // TODO-QSP: dynamic text: "I should go," you say, <<$sex_ev['dress_describe']>>.
      scene.text(`"I should go," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    } else {
      // TODO-QSP: dynamic text: "I should go," you say, <<$sex_ev['dress_describe']>>.
      scene.text(`"I should go," you say, ${((s as any).sex_ev ?? 0)?.['dress_describe']}.`);
    }
    qspCall(s, 'sex_ev_hookup_leave', 'hookup_continuation');
  }
  scene.build();
}

export const sex_ev_hookup_leave: LocationDef = {
  name: 'sex_ev_hookup_leave',
  title: 'hey cutie',
  region: 'other',
  enter: enter,
};
