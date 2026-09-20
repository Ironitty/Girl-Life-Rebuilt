import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'graveyard', '');
  (s as any).region = 'other';
  (s as any).location_type = 'secluded';
  qspCall(s, 'stat', '');
  qspCall(s, 'archetypes', 'gain', 'goth', 'tiny', 'Cemetery visit', 1);
  scene.text('<center><h4>Cemetery</h4></center>');
  scene.img('images/locations/graveyard/graveyard.jpg');
  scene.text('A very peaceful place immersed in the silence of circumferential philosophical thoughts about the impermanence of life.');
  scene.text('At the far end of the cemetery you can see the dilapidated building, which used to be either the crypt or the chapel.');
  scene.actions([
    { label: 'Exit to the highway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '3'] },
    { label: 'Walk to the busstation', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['bus', 'graveyard'] },
    { label: 'Go to the crypt', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    qspCall(st, 'archetypes', 'gain', 'goth', 'small', 'Visited cemetery crypt', 1);
    scene.img('images/locations/graveyard/graveyard2.jpg');
    scene.text('Bars protect the windows, which are covered with dust and surrounded by bushes.');
    scene.actions([
      { label: 'Exit the highway', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['road', '3'] },
    ]);
  } },
  ]);
  scene.build();
}

export const graveyard: LocationDef = {
  name: 'graveyard',
  title: '<center><h4>Cemetery</h4></center>',
  region: 'other',
  locationType: 'secluded',
  description: ['A very peaceful place immersed in the silence of circumferential philosophical thoughts about the impermanence of life.'],
  enter: enter,
};
