import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><h1>Here are all your best photos. You can click on them for a full view.</h1></center>');
  (s as any).i = 0;
  // TODO-QSP: :looplocations
  if (((s as any).portfolio_locations ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    scene.img(`images/pc/activities/photography/foto/locations/${((s as any).i ?? '')}.jpg`);
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < Object.keys((s as any).portfolio_locations ?? {}).length) {
    // TODO-QSP: jump 'looplocations'
  }
  (s as any).i = 0;
  // TODO-QSP: :looppeople
  if (((s as any).portfolio_people ?? 0)?.[String((s as any).i ?? 0)] === 1) {
    scene.img(`images/pc/activities/photography/foto/people/${((s as any).i ?? '')}.jpg`);
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) < Object.keys((s as any).portfolio_people ?? {}).length) {
    // TODO-QSP: jump 'looppeople'
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['journal', 'records'] },
    { label: 'Put your journal down', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterImageView(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/pc/activities/photography/foto/${((s as any).locArgs?.[1] ?? '')}/${((s as any).locArgs?.[2] ?? '')}.jpg`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Return', goto: ['journal_portfolio', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'image_view':
      enterImageView(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const journal_portfolio: LocationDef = {
  name: 'journal_portfolio',
  title: '<center><h1>Here are all your best photos. You can click on ',
  region: 'other',
  enter: enter,
};
