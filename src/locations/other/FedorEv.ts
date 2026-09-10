import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[0] ?? 0) === ''  ||  ((s as any).locArgs?.[0] ?? 0) === 'Start') {
    (s as any).numnpc = 5;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A5']} ${((s as any).npc_lastname ?? 0)?.['A5']}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    if (((s as any).kotovLoveQW ?? 0) > 0  &&  ((s as any).week ?? 0) < 5  &&  ((s as any).kotovVSkozlov ?? 0) === 0  &&  ((s as any).fedorKozlovQW ?? 0) >= 10) {
      scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Vitek Vs Fedor'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Strela Chat'] }]);
      if (((s as any).FedorvsDimka ?? 0) === 2) {
        scene.actions([{ label: 'Continue', goto: ['FedorEv4', 'Dimka Aftermath'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Gorslut'] }]);
        if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).fame ?? 0)?.['pav_slut'] >= 250  &&  ((s as any).FedorLove ?? 0) === 0) {
          scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Gorslut 2'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['FedorEv2', 'Fedor Breakup'] }]);
          if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  ((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).FedorvsDimka ?? 0) === 1) {
            scene.actions([{ label: 'Continue', goto: ['FedorMisc', 'Fedor Vs Dimka'] }]);
          } else {
            if (Math.floor(Math.random() * 2) + 0 === 0) {
              scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Fedor Date 2'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Fedor Date 3'] }]);
            }
            scene.actions([{ label: 'Continue', goto: ['FedorEv', 'Fedor Date'] }]);
          }
        }
      }
    }
  }
  scene.build();
}

export const FedorEv: LocationDef = {
  name: 'FedorEv',
  title: '<<$npc_firstname[\'A5\']>> <<$npc_lastname[\'A5\']>>',
  region: 'other',
  enter: enter,
};
