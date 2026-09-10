import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).GadBoy['mitka_day'] = ((s as any).daystart ?? 0);
  if (((s as any).GadBoy ?? 0)?.['first_drink'] === 0) {
    (s as any).GadBoy['first_drink'] = 1;
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>Mitka Shkvoryen</b></center>');
  scene.img('images/characters/shared/headshots_main/big63.jpg');
  if (((s as any).npc_rel ?? 0)?.['A63'] < 20) {
    scene.text('You and Mitka are strangers.');
  } else {
    scene.text('You and Mitka are acquaintances.');
    if (((s as any).npc_rel ?? 0)?.['A63'] < 60) {
      scene.text('You and Mitka are friends.');
    } else {
      scene.text('You and Mitka are good friends.');
      scene.text('You and Mitka are best friends.');
    }
    scene.text('He is barely older than you, you remember him from your childhood. You both used to swim in the local river together.');
    if (((s as any).npc_QW ?? 0)?.['A63'] === 0) {
      scene.text('You blush as you recall that you used to swim naked together when you were little.');
      if (((s as any).pcs_horny ?? 0) >= 50) {
        scene.text('You bite your lip and glance down at his crotch and can\'t help but wonder how much he has grown since then.');
      }
    }
    // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, how are you doing?"
    scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, how are you doing?"`);
    if ((((s as any).npc_rel ?? 0)?.['A63'] >= 60  ||  ((s as any).npc_QW ?? 0)?.['A63'] > 0)  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 3) {
      scene.actions([
        { label: '"I\'m doing fine, thanks."', handler: (st: GameState) => {
    // TODO-QSP: xgt 'mitka', 'sex_chat'
  } },
      ]);
    } else {
      scene.actions([
        { label: '"I\'m doing fine, thanks."', handler: (st: GameState) => {
    // TODO-QSP: xgt 'mitka', 'normal_chat'
  } },
      ]);
    }
  }
  scene.build();
}

export const mitka: LocationDef = {
  name: 'mitka',
  title: 'Mitka Shkvoryen',
  region: 'other',
  description: ['You and Mitka are strangers.'],
  enter: enter,
};
