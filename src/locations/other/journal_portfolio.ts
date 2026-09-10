import { qspUntranslated } from '../_shared/qspUntranslated';

import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).args ?? 0)[0] === '') {
    scene.text('<center><h1>Here are all your best photos. You can click on them for a full view.</h1></center>');
    (s as any).i = 0;
    // TODO-QSP: :looplocations
    if (((s as any).portfolio_locations ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: *p '<a href="exec:gt ''journal_portfolio'', ''image_view'', ''locations'', <<i>>"><img height="250" ...
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).portfolio_locations ?? {}).length) {
      // TODO-QSP: jump 'looplocations'
    }
    (s as any).i = 0;
    // TODO-QSP: :looppeople
    if (((s as any).portfolio_people ?? 0)?.[String((s as any).i ?? 0)] === 1) {
      // TODO-QSP: *p '<a href="exec:gt ''journal_portfolio'', ''image_view'', ''people'', <<i>>"><img height="250" src...
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) < Object.keys((s as any).portfolio_people ?? {}).length) {
      // TODO-QSP: jump 'looppeople'
    }
    scene.actions([
      { label: 'Return', goto: ['journal', 'records'] },
      { label: 'Put your journal down', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  }
  if (((s as any).args ?? 0)[0] === 'image_view') {
    scene.img(`images/pc/activities/photography/foto/${((s as any).locArgs?.[1] ?? 0)}/${qspUntranslated(s, "ARGS[2]", { location: "journal_portfolio" })}.jpg`);
    scene.actions([
      { label: 'Return', goto: ['journal_portfolio', ''] },
    ]);
  }
  scene.build();
}

export const journal_portfolio: LocationDef = {
  name: 'journal_portfolio',
  title: '<center><h1>Here are all your best photos. You can click on ',
  region: 'other',
  enter: enter,
};
