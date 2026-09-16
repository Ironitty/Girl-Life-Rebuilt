import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'bdsm_dressing', '');
  (s as any).location_type = 'private';
  ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['role'] = '';
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/suburb/bdsm_club/dressingroom.jpg');
  scene.text('A huge dressing room. Mostly used by submissives to dress as staff and because of this, it is a safe space and games are not allowed.');
  scene.text('It contains several <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027wardrobe\\u0027, \\u0027start\\u0027); return false;">wardrobes</a> (where you can choose outfits and organize your clothing).');
  scene.text('There are whole cabinets filled with designer clothing belonging to various club members and plenty of <a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027mirror\\u0027, \\u0027start\\u0027); return false;">mirrors</a> you can use.');
  scene.text('It is here where you must set your role for your visit, you can also change it here but must be wearing the correct clothing for your role or you will only be able to leave.');
  scene.text('Submissives must wear either maid or submissive sex shop clothing or be naked.');
  scene.text('Dominants must wear clothing of minimum "expensive" quality.');
  if (((s as any).PMaid ?? 0) === 1  ||  ((s as any).PCloStyle3 ?? 0) === 2  ||  ((s as any).clothingworntype ?? 0) === 'nude') {
    scene.actions([
      { label: 'Enter the club\'s foyer (submissive role)', handler: (st: GameState) => {
    ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['role'] = 'sub';
    qspGoto(s, 'bdsm_hallway', 'foyer');
  } },
    ]);
  }
  if (((s as any).daystart ?? 0) > ((s as any).bdsmclub ?? 0)?.['payday'] + 30) {
    scene.text('You do not have a paid subscription so you cannot enter the club as a dominant, you can go direct to the office and pay from here.');
    scene.actions([
      { label: 'Go to office and pay subscription', goto: ['bdsm_mansion', 'office'] },
    ]);
  } else {
    if (((s as any).PCloQuality ?? 0) >= 5  &&  ((s as any).bdsmclub ?? 0)?.['domtraining'] === 1) {
      scene.actions([
        { label: 'Enter the club\'s foyer (dominant role)', handler: (st: GameState) => {
    ((s as any).bdsmclub = (s as any).bdsmclub ?? {})['role'] = 'dom';
    qspGoto(s, 'bdsm_hallway', 'foyer');
  } },
      ]);
    }
  }
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.actions([
      { label: 'Leave the club', goto: ['city_suburbs', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the Foyer (no role set)', goto: ['bdsm_hallway', 'foyer'] },
  ]);
  scene.build();
}

export const bdsm_dressing: LocationDef = {
  name: 'bdsm_dressing',
  title: 'A huge dressing room. Mostly used by submissives to dress as',
  region: 'other',
  locationType: 'private',
  description: ['A huge dressing room. Mostly used by submissives to dress as staff and because of this, it is a safe space and games are not allowed.'],
  enter: enter,
};
