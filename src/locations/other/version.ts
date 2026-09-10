// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: <center><table width='80%' cellspacing='0' cellpadding='20' valign='top'><tr><td width='500' cellspa...
  // TODO-QSP: <center><h1>Changelog</h1></center>
  // TODO-QSP: "
  // TODO-QSP: $temp_text += "
  // TODO-QSP: <center><h3>0.9</h3></center>
  // TODO-QSP: "
  scene.build();
}

export const version: LocationDef = {
  name: 'version',
  region: 'other',
  enter: enter,
};
