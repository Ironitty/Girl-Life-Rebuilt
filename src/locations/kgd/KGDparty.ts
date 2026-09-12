import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).KDG ?? 0)?.['razm'] === 0) {
    // TODO-QSP: dynamic text: <table><tr><td>Hero:</td><td>Level: <<KGD['lvl']>> </td><td>HP: <<KDG['HP']>> </...
    scene.text(`<table><tr><td>Hero:</td><td>Level: ${((s as any).KGD ?? 0)?.['lvl']} </td><td>HP: ${((s as any).KDG ?? 0)?.['HP']} </td><td>Damage: ${((s as any).KGD ?? 0)?.['damage']}.</td><td><a href="exec:KDG['razm'] = 1 & KGD['subsp'] = 1 & gs 'KGDparty', 'kgddin'">Post</a></td></tr></table>`);
  } else {
    // TODO-QSP: dynamic text: <table><tr><td>Hero:</td><td>Level: <<KGD['lvl']>> </td><td>HP: <<KDG['HP']>> </...
    scene.text(`<table><tr><td>Hero:</td><td>Level: ${((s as any).KGD ?? 0)?.['lvl']} </td><td>HP: ${((s as any).KDG ?? 0)?.['HP']} </td><td>Damage: ${((s as any).KGD ?? 0)?.['damage']}.</td></tr></table>`);
  }
  (s as any).i = 2;
  // TODO-QSP: :party_loop
  if (((s as any).KGD ?? 0)['sput_' + ((s as any).i ?? 0)] === 0) {
    (s as any).i = 7;
  }
  if (((s as any).KGD ?? 0)['sput_' + ((s as any).i ?? 0)] === 1) {
    // TODO-QSP: dynamic text: <table><tr><td><<$KGD['name_<<i>>']>>:</td><td>Level: <<KGD['lvl_<<i>>']>> </td>...
    scene.text(`<table><tr><td>${qspUntranslated(s, "KGD['name_<<i", { location: "KGDparty" })}']>>:</td><td>Level: ${qspUntranslated(s, "KGD['lvl_<<i", { location: "KGDparty" })}']>> </td><td>HP: ${qspUntranslated(s, "KGD['HP_<<i", { location: "KGDparty" })}']>> </td><td>Damage: ${qspUntranslated(s, "KGD['damage_<<i", { location: "KGDparty" })}']>>.</td></tr></table>`);
    (s as any).i = ((s as any).i ?? 0) + (1);
  }
  if (((s as any).i ?? 0) <= 6) {
    // TODO-QSP: jump 'party_loop'
  }
  // TODO-QSP: dynamic text: you have '+iif(KGD['Infantrie'] > 0, 'No', '<<KGD['Infantrie']>>')+' Infantrie, ...
  scene.text(`you have '+iif(KGD['Infantrie'] > 0, 'No', '${((s as any).KGD ?? 0)?.['Infantrie']}')+' Infantrie, '+iif(KGD['Cavalry'] > 0, 'No', '${((s as any).KGD ?? 0)?.['Cavalry']}')+' Cavalry and '+iif(KGD['Archers'] > 0, 'No', '${((s as any).KGD ?? 0)?.['Archers']}')+' Archers.`);
  if (!(s as any).KGD) (s as any).KGD = {}; (s as any).KGD['BP_Lvl'] = (((s as any).KGD ?? {})?.['lvl'] + ((s as any).KGD ?? {})?.['lvl_2'] + ((s as any).KGD ?? {})?.['lvl_3'] + ((s as any).KGD ?? {})?.['lvl_4'] + ((s as any).KGD ?? {})?.['lvl_5'] + ((s as any).KGD ?? {})?.['lvl_6'])/2;
  if (!(s as any).KGD) (s as any).KGD = {}; (s as any).KGD['BP_HP'] = (((s as any).KGD ?? {})?.['HP']+ ((s as any).KGD ?? {})?.['HP_2'] + ((s as any).KGD ?? {})?.['HP_3'] + ((s as any).KGD ?? {})?.['HP_4'] + ((s as any).KGD ?? {})?.['HP_5'] + ((s as any).KGD ?? {})?.['HP_6']) * (((((s as any).KGD ?? {})?.['Infantrie']+1)/5)+((((s as any).KGD ?? {})?.['Cavalry']+1)/10)+((((s as any).KGD ?? {})?.['Archers']+1)/15));
  if (!(s as any).KGD) (s as any).KGD = {}; (s as any).KGD['BP_Damage'] = ((s as any).KGD ?? {})?.['HP'] + ((s as any).KGD ?? {})?.['damage_2'] + ((s as any).KGD ?? {})?.['damage_3'] + ((s as any).KGD ?? {})?.['damage_4'] + ((s as any).KGD ?? {})?.['damage_5'] + ((s as any).KGD ?? {})?.['damage_6'] * (((((s as any).KGD ?? {})?.['Infantrie']+1)/15)+((((s as any).KGD ?? {})?.['Cavalry']+1)/10)+((((s as any).KGD ?? {})?.['Archers']+1)/5));
  if (!(s as any).KGD) (s as any).KGD = {}; (s as any).KGD['BP'] = (((s as any).KGD ?? {})?.['BP_HP'] + ((s as any).KGD ?? {})?.['BP_Damage']) * ((s as any).KGD ?? {})?.['BP_Lvl'];
  scene.actions([
    { label: 'Leave', goto: ['KGDgame', ''] },
  ]);
  scene.build();
}

export const KGDparty: LocationDef = {
  name: 'KGDparty',
  region: 'kgd',
  enter: enter,
};
