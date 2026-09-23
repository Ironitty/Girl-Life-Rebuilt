import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/pc/items/accessories/cards/porndeck.jpg');
  // TODO-QSP: dynamic text: 'You pull your deck of cards out and spread them around ' + iif($card_loc = 'gad...
  scene.text('You pull your deck of cards out and spread them around ' + ((((s as any).card_loc ?? 0) === 'gad_gpbarn') ? ('an old desk in the barn') : ('your desk')) + ' to look at them.');
  if ((!((s as any).card_deck ?? 0))) {
    scene.actions([
      { label: 'Throw away your deck of vintage porn cards', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['vintage_card'] = 0;
    (st as any).vcard_trash = 1;
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } else {
    if (((s as any).card_deck ?? 0) === 1) {
      scene.actions([
        { label: 'Throw away your deck of new porn cards', handler: (st: GameState) => {
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['card'] = 0;
    dynamicGoto(st, 'prevLoc');
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Put the cards away', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    { label: 'Pull a card from the deck', handler: (st: GameState) => {
    (st as any).you_slut = ((st as any).you_slut ?? 0) + (1);
    if (((st as any).you_slut ?? 0) >= 10  &&  ((st as any).you_slut ?? 0) <= 100) {
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + ((((st as any).you_slut ?? 0)/10));
    } else {
      if (((st as any).you_slut ?? 0) >= 100) {
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      }
    }
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    (st as any).papkarand = (Math.floor(Math.random() * 5) + 0);
    if ((!((st as any).papkarand ?? 0))) {
      (st as any).papkacard = 'a';
    }
    if (((st as any).papkarand ?? 0) === 1) {
      (st as any).papkacard = 'b';
    }
    if (((st as any).papkarand ?? 0) === 2) {
      (st as any).papkacard = 'c';
    }
    if (((st as any).papkarand ?? 0) === 3) {
      (st as any).papkacard = 'd';
    }
    if (((st as any).papkarand ?? 0) === 4) {
      (st as any).papkacard = 'j';
    }
    if (((st as any).papkarand ?? 0) === 4) {
      (st as any).numcard = (Math.floor(Math.random() * 2) + 1);
      (st as any).nomcard = 10;
    } else {
      (st as any).numcard = (Math.floor(Math.random() * 13) + 2);
      if (((st as any).numcard ?? 0) < 10) {
        (st as any).nomcard = ((st as any).numcard ?? 0);
      }
      if (((st as any).numcard ?? 0) >= 10) {
        (st as any).nomcard = 10;
      }
    }
    if ((!((st as any).card_deck ?? 0))) {
      scene.img(`images/pc/items/accessories/cards/card/${((st as any).papkacard ?? '')}/${((st as any).papkacard ?? '')}${((st as any).numcard ?? '')}.jpg`);
    } else {
      if (((st as any).card_deck ?? 0) === 1) {
        scene.img(`images/pc/items/accessories/cards/card2/${((st as any).papkacard ?? '')}/${((st as any).papkacard ?? '')}${((st as any).numcard ?? '')}.jpg`);
      }
    }
    // TODO-QSP: dynamic text: Denomination card <<nomcard>>
    scene.text(`Denomination card ${((st as any).nomcard ?? '')}`);
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
