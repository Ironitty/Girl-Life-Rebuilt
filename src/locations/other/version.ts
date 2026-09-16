// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).ul = '<ul style=\'padding: 5px; margin-bottom: 0px; margin-top: 0px\'>';
  (s as any).ulend = '</ul>';
  (s as any).li = '<li style=\'padding: 0px\'>';
  (s as any).liend = '</li>';
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
