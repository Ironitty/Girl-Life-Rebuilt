import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterInit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'beta_journal', 'nav_construct');
  if (((s as any).debug ?? 0)?.['journal'] !== '') {
    // TODO-QSP: dynamic text: <h2><font color = "red">Error with:</font> <<$debug['journal']>></h2>
    scene.text(`<h2><font color = "red">Error with:</font> ${((s as any).debug ?? 0)?.['journal']}</h2>`);
    ((s as any).debug ?? {})['journal'] = '';
  }
  if (((s as any).journal ?? 0)?.['alert'] === 1) {
    scene.text('<div>');
    scene.text('<center><h3><font color = "orange">⚠ Today\'s Quests and Tasks</font></h3></center>');
    scene.text('<ul style="margin:0; padding:0;">🧭 You have to attend starlets</ul>');
    scene.text('<ul style="margin:0; padding:0;">💕 You have a date with {npc} today at {time}, {location}</ul>');
    scene.text('</div>');
  } else {
    scene.text('<div>');
    scene.text('<center><h3>Today\'s Random Tips</h3></center>');
    scene.text('<ul style="margin:0; padding:0;">🧭 Visit the school sports field to meet your brother, and maybe other jocks.</ul>');
    scene.text('</div>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Test vcard', handler: (st: GameState) => {
    qspCall(st, 'beta_journal_relationships', 'vcard', 274);
  } },
    { label: 'Test Glossary', handler: (st: GameState) => {
    qspCall(st, 'beta_journal_geography', 'geo_pavlovsk');
  } },
  ]);
  scene.build();
}

function enterGameFlags(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['cat'] !== 'dancer') {
    scene.text('Non-dancer start - ballet content disabled. Please choose Avid Dancer in June school year to enable.');
  }
  if (((s as any).start_type ?? 0)?.['magic'] === 'nomagic') {
    scene.text('Non-magic start - all magic quests is disabled. Please restart game to play the magical questlines.');
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'init':
      enterInit(s, scene);
      break;
    case 'game_flags':
      enterGameFlags(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const beta_journal_quests: LocationDef = {
  name: 'beta_journal_quests',
  title: '<div>',
  region: 'other',
  enter: enter,
};
