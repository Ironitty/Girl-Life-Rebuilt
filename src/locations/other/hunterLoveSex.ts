// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).klismaday ?? 0) !== ((s as any).daystart ?? 0)) {
    // TODO-QSP: dynamic text: <<$boydesc>>: Damn, they weren't lying about that body of yours.
    scene.text(`${((s as any).boydesc ?? 0)}: Damn, they weren't lying about that body of yours.`);
    // TODO-QSP: dynamic text: Don't worry, we were only told good things, <<$pcs_nickname>>. Do you want it in...
    scene.text(`Don't worry, we were only told good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
    // TODO-QSP: dynamic text: Oh, anal won't work for me today <<$boydesc>>, I'm not quite ready… if you know ...
    scene.text(`Oh, anal won't work for me today ${((s as any).boydesc ?? 0)}, I'm not quite ready… if you know what I mean…`);
    // TODO-QSP: dynamic text: I understand, says <<$boydesc>>. - Okay, next time, come with a clean ass!
    scene.text(`I understand, says ${((s as any).boydesc ?? 0)}. - Okay, next time, come with a clean ass!`);
  } else {
    // TODO-QSP: dynamic text: <<$boydesc>>: Damn, they weren't lying about that body of yours.
    scene.text(`${((s as any).boydesc ?? 0)}: Damn, they weren't lying about that body of yours.`);
    // TODO-QSP: dynamic text: Don't worry, we were only told good things, <<$pcs_nickname>>. Do you want it in...
    scene.text(`Don't worry, we were only told good things, ${((s as any).pcs_nickname ?? 0)}. Do you want it in the ass or in the mouth? " he asks you.`);
    scene.text('"Let\'s not rush things too fast", you say.');
  }
  // TODO-QSP: xgt 'hunterLoveSex', 'din_hunters_bj'
  // TODO-QSP: end & !! --- din_mesec ---
  scene.build();
}

export const hunterLoveSex: LocationDef = {
  name: 'hunterLoveSex',
  title: '<<$npc_firstname[\'A9\']>> <<$npc_lastname[\'A9\']>>',
  region: 'other',
  enter: enter,
};
