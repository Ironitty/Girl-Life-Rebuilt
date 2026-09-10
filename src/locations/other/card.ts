import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/cards/porndeck.jpg');
  // TODO-QSP: dynamic text: You pull your deck of cards out and spread them around ' + iif($card_loc = 'gad_...
  scene.text('You pull your deck of cards out and spread them around \' + iif($card_loc = \'gad_gpbarn\', \'an old desk in the barn\', \'your desk\') + \' to look at them.');
  if (((s as any).card_deck ?? 0) === 0) {
    scene.actions([
      { label: 'Throw away your deck of vintage porn cards', handler: (st: GameState) => {
    (s as any).mc_inventory['vintage_card'] = 0;
    (s as any).vcard_trash = 1;
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Throw away your deck of new porn cards', handler: (st: GameState) => {
    (s as any).mc_inventory['card'] = 0;
    dynamicGoto(st, 'loc');
  } },
    ]);
  }
  scene.actions([
    { label: 'Put the cards away', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Pull a card from the deck', handler: (st: GameState) => {
    (s as any).you_slut = ((s as any).you_slut ?? 0) + (1);
    if (((s as any).you_slut ?? 0) >= 10  &&  ((s as any).you_slut ?? 0) <= 100) {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + ((((s as any).you_slut ?? 0)/10));
    } else {
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    }
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    (s as any).papkarand = Math.floor(Math.random() * 5) + 0;
    if (((s as any).papkarand ?? 0) === 0) {
    }
    if (((s as any).papkarand ?? 0) === 1) {
    }
    if (((s as any).papkarand ?? 0) === 2) {
    }
    if (((s as any).papkarand ?? 0) === 3) {
    }
    if (((s as any).papkarand ?? 0) === 4) {
    }
    if (((s as any).papkarand ?? 0) === 4) {
      (s as any).numcard = Math.floor(Math.random() * 2) + 1;
      (s as any).nomcard = 10;
    } else {
      (s as any).numcard = Math.floor(Math.random() * 13) + 2;
      if (((s as any).numcard ?? 0) < 10) {
        (s as any).nomcard = ((s as any).numcard ?? 0);
      }
      if (((s as any).numcard ?? 0) >= 10) {
        (s as any).nomcard = 10;
      }
    }
    if (((s as any).card_deck ?? 0) === 0) {
      scene.img(`images/pc/items/accessories/cards/card/${((s as any).papkacard ?? 0)}/${((s as any).papkacard ?? 0)}${((s as any).numcard ?? 0)}.jpg`);
    } else {
      scene.img(`images/pc/items/accessories/cards/card2/${((s as any).papkacard ?? 0)}/${((s as any).papkacard ?? 0)}${((s as any).numcard ?? 0)}.jpg`);
    }
    // TODO-QSP: dynamic text: Denomination card <<nomcard>>
    scene.text(`Denomination card ${((s as any).nomcard ?? 0)}`);
    scene.actions([
      { label: 'Put the card back into the deck', goto: ['card', ''] },
    ]);
  } },
  ]);
  scene.build();
}

export const card: LocationDef = {
  name: 'card',
  region: 'other',
  enter: enter,
};
