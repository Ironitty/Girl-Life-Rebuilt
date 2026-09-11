import { qspUntranslated } from '../_shared/qspUntranslated';

import { dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterKGDhire(s: GameState, scene: SceneBuilder): void {
  (s as any).baseHP = qspUntranslated(s, "ARGS[2]", { location: "KGDgame" });
  (s as any).baseDam = qspUntranslated(s, "ARGS[3]", { location: "KGDgame" });
  (s as any).i = 2;
  // TODO-QSP: :kgdhire_loop
  if (((s as any).KGD ?? 0)['sput_' + ((s as any).i ?? 0)] === 1) {
    (s as any).i = 6;
  }
  if (((s as any).KGD ?? 0)['sput_' + ((s as any).i ?? 0)] === 0) {
    (s as any).KGD['name_' + String((s as any).i || '') + ''] = ((s as any).type ?? 0);
    (s as any).KGD['lvl_' + String((s as any).i || '') + ''] = 1;
    (s as any).KGD['HP_' + String((s as any).i || '') + ''] = ((s as any).baseHP ?? 0);
    (s as any).KGD['damage_' + String((s as any).i || '') + ''] = ((s as any).baseDam ?? 0);
    (s as any).KGD['sput_' + String((s as any).i || '') + ''] = 1;
    (s as any).KGD['exp_' + String((s as any).i || '') + ''] = 0;
    (s as any).i = 6;
  }
  (s as any).i = ((s as any).i ?? 0) + (1);
  if (((s as any).i ?? 0) <= 6) {
    // TODO-QSP: jump 'kgdhire_loop'
  }
  scene.build();
}

function enterMngFarm(s: GameState, scene: SceneBuilder): void {
  (s as any).KGD['table'] = '<center><table border="0">';
  (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2" align="center">Farm Manager</td></tr>');
  (s as any).i = 1;
  // TODO-QSP: :farmmanage_loop
  if (((s as any).KGD ?? 0)['farm_' + ((s as any).i ?? 0)] === 0) {
    (s as any).i = 10;
  }
  if (((s as any).KGD ?? 0)['farm_' + ((s as any).i ?? 0)] === 1) {
    (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td>farm ' + qspUntranslated(s, "i>", { location: "KGDgame" }) + '</td><td>Level: \'+KGD[\'farm_level_<<i>>\']+\'</td><td>Production: \'+KGD[\'farm_rate_<<i>>\']*KGD[\'farm_level_<<i>>\']+\' R/D</td></tr>');
    if (((s as any).KGD ?? 0)['farm_level_' + ((s as any).i ?? 0)] < 5  &&  ((s as any).KGD ?? 0)?.['money'] >= 100*((s as any).KGD ?? 0)['farm_level_' + ((s as any).i ?? 0)]) {
      (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2"><a href="exec:KGD[\'farm_level_' + qspUntranslated(s, "i>", { location: "KGDgame" }) + '\'] += 1 & KGD[\'farm_rate_<<i>>\'] += 2 & KGD[\'money\'] -= 100*KGD[\'farm_level_<<i>>\'] & gt \'KGDgame\', \'MngFarm\'">Upgrade farm (<<100*KGD[\'farm_level_<<i>>\']>> resources)</a></td></tr>');
    } else {
      (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2">\' + $func(\'wrap\', \'neg\', \'Upgrade farm (' + 100*((s as any).KGD ?? 0)['farm_level_' + ((s as any).i ?? 0) + '']> + ' resources)\') + \'</td></tr>');
    }
  }
  if (((s as any).i ?? 0) < 10) {
    (s as any).i = ((s as any).i ?? 0) + (1);
    // TODO-QSP: jump 'farmmanage_loop'
  }
  (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('</table></center>');
  // TODO-QSP: $KGD['table']
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
  ]);
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).KGDsavegame ?? 0))) {
    if (((s as any).KGD1 ?? 0)?.['save'] === 0) {
      (s as any).KGDsavegame = 1;
    } else {
      if (((s as any).KGD2 ?? 0)?.['save'] > 0) {
        (s as any).KGDsavegame = 2;
      } else {
        if (((s as any).KGD3 ?? 0)?.['save'] > 0) {
          (s as any).KGDsavegame = 3;
        } else {
          if (((s as any).KGD4 ?? 0)?.['save'] > 0) {
            (s as any).KGDsavegame = 4;
          } else {
            if (((s as any).KGD5 ?? 0)?.['save'] > 0) {
              (s as any).KGDsavegame = 5;
            } else {
              if (((s as any).KGD6 ?? 0)?.['save'] > 0) {
                (s as any).KGDsavegame = 6;
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: copyarr 'KGD<<KGDsavegame>>', 'KGD'
  scene.actions([
    { label: 'Back to the main menu', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'KGDhire':
      enterKGDhire(s, scene);
      break;
    case 'MngFarm':
      enterMngFarm(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    default:
      enterKGDhire(s, scene);
      break;
  }
}

export const KGDgame: LocationDef = {
  name: 'KGDgame',
  title: 'Upgrade farm (<<100*KGD[\'farm_level_<<i>>\']>> resources)',
  region: 'kgd',
  enter: enter,
};
