// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  ((s as any).KGD = (s as any).KGD ?? {})['needExpNextLvl'] = ((((s as any).KGD ?? {})?.['lvl'] ?? 0) * 10) * (((s as any).KGD ?? {})?.['lvl'] ?? 0);
  ((s as any).KGD = (s as any).KGD ?? {})['needExp'] = (((s as any).KGD ?? {})?.['needExpNextLvl'] ?? 0) - (((s as any).KGD ?? {})?.['exp'] ?? 0);
  if (((s as any).KGD ?? 0)?.['needExp'] <= 0  &&  ((s as any).KGD ?? 0)?.['lvl'] > ((s as any).KGD ?? 0)?.['lvlr']) {
    ((s as any).KGD = (s as any).KGD ?? {})['lvlr'] = (((s as any).KGD ?? 0)?.['lvl']);
    ((s as any).KGD = (s as any).KGD ?? {})['lvl'] = ((s as any).KGD['lvl'] ?? 0) + (1);
    ((s as any).KGD = (s as any).KGD ?? {})['exp'] = 0;
    ((s as any).KDG = (s as any).KDG ?? {})['HP'] = ((s as any).KDG['HP'] ?? 0) + (10);
    ((s as any).KGD = (s as any).KGD ?? {})['damage'] = ((s as any).KGD['damage'] ?? 0) + (5);
  }
  (s as any).i = 2;
  // TODO-QSP: :kgdexp_loop
  ((s as any).KGD = (s as any).KGD ?? {})['needExpNextLvl_' + String(((s as any).i ?? 0))] = (((s as any).KGD ?? 0)['lvl_' + ((s as any).i ?? 0) + ''] * 10) * ((s as any).KGD ?? 0)['lvl_' + ((s as any).i ?? 0) + ''];
  ((s as any).KGD = (s as any).KGD ?? {})['needExp_' + String(((s as any).i ?? 0))] = ((s as any).KGD ?? 0)['needExpNextLvl_' + ((s as any).i ?? 0) + ''] - ((s as any).KGD ?? 0)['exp_' + ((s as any).i ?? 0) + ''];
  if (((s as any).KGD ?? 0)['needExp_' + (((s as any).i ?? 0))] <= 0  &&  ((s as any).KGD ?? 0)['lvl_' + (((s as any).i ?? 0))] > ((s as any).KGD ?? 0)['lvlr_' + (((s as any).i ?? 0))]) {
    ((s as any).KGD = (s as any).KGD ?? {})['lvlr_' + String(((s as any).i ?? 0))] = (((s as any).KGD ?? 0)?.['lvl_' + String(((s as any).i ?? 0))]);
    ((s as any).KGD = (s as any).KGD ?? {})['lvl_' + String(((s as any).i ?? 0))] = ((s as any).KGD['lvl_' + String(((s as any).i ?? 0))] ?? 0) + (1);
    ((s as any).KGD = (s as any).KGD ?? {})['exp_' + String(((s as any).i ?? 0))] = 0;
    ((s as any).KGD = (s as any).KGD ?? {})['HP_' + String(((s as any).i ?? 0))] = ((s as any).KGD['HP_' + String(((s as any).i ?? 0))] ?? 0) + (10);
    ((s as any).KGD = (s as any).KGD ?? {})['damage_' + String(((s as any).i ?? 0))] = ((s as any).KGD['damage_' + String(((s as any).i ?? 0))] ?? 0) + (5);
  }
  if (((s as any).i ?? 0) < 6) {
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'kgdexp_loop'
  }
  scene.build();
}

export const KGDexp: LocationDef = {
  name: 'KGDexp',
  region: 'kgd',
  enter: enter,
};
