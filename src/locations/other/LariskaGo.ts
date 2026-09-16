import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A13'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A13'] ?? ''}</b></center>`);
  scene.img('images/characters/shared/headshots_main/big13.jpg');
  scene.text('You join Lariska and start walking with her to her home.');
  scene.actions([
    { label: 'Go with Lariska', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text(`<center><b>${((s as any).npc_firstname ?? 0)?.['A13'] ?? ''} ${((s as any).npc_lastname ?? 0)?.['A13'] ?? ''}</b></center>`);
    scene.img('images/characters/shared/headshots_main/big13.jpg');
    scene.text('You walk down the street with Lariska, discussing small stuff until you reach her place, about 15 minutes later.');
    scene.actions([
      { label: 'Enter her apartment', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/girl/lariska/home_1.jpg');
    if (((s as any).LariskaQW ?? 0)?.['story'] === 5) {
      scene.text('Entering the apartment, you see that it is decorated in a Japanese style.');
      scene.text('"You have a nice apartment, Lariska." You say, looking around with interest.');
      scene.text('"Thank you. Mother makes a good living, although she is usually only home on the weekends," she says a bit sadly.');
      scene.text('You follow Lariska to her room.');
      ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 6;
    } else {
      scene.text('You go into the japanese styled apartment, then follow Lariska to her room.');
    }
    if (((s as any).frost ?? 0) > 0) {
      (s as any).frost = 0;
    }
    scene.actions([
      { label: 'Go to Lariska\'s bedroom', goto: ['LariskaHome', 'lariska_bedroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

export const LariskaGo: LocationDef = {
  name: 'LariskaGo',
  region: 'other',
  description: ['You join Lariska and start walking with her to her home.'],
  enter: enter,
};
