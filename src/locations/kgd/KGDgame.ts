import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterKGDhire(s: GameState, scene: SceneBuilder): void {
  (s as any).type = ((s as any).locArgs?.[1] ?? 0);
  (s as any).baseHP = ((s as any).locArgs?.[2] ?? 0);
  (s as any).baseDam = ((s as any).locArgs?.[3] ?? 0);
  (s as any).i = 2;
  do {
    if (((s as any).KGD ?? 0)['sput_' + (((s as any).i ?? 0))] === 1) {
      (s as any).i = 6;
    }
    if (((s as any).KGD ?? 0)['sput_' + (((s as any).i ?? 0))] === 0) {
      ((s as any).KGD = (s as any).KGD ?? {})['name_' + String(((s as any).i ?? 0))] = ((s as any).type ?? 0);
      ((s as any).KGD = (s as any).KGD ?? {})['lvl_' + String(((s as any).i ?? 0))] = 1;
      ((s as any).KGD = (s as any).KGD ?? {})['HP_' + String(((s as any).i ?? 0))] = ((s as any).baseHP ?? 0);
      ((s as any).KGD = (s as any).KGD ?? {})['damage_' + String(((s as any).i ?? 0))] = ((s as any).baseDam ?? 0);
      ((s as any).KGD = (s as any).KGD ?? {})['sput_' + String(((s as any).i ?? 0))] = 1;
      ((s as any).KGD = (s as any).KGD ?? {})['exp_' + String(((s as any).i ?? 0))] = 0;
      (s as any).i = 6;
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    (s as any).type = undefined;
    (s as any).baseHP = undefined;
    (s as any).baseDam = undefined;
    (s as any).i = undefined;
  } while (((s as any).i ?? 0) <= 6);
  scene.build();
}

function enterMngFarm(s: GameState, scene: SceneBuilder): void {
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = '<center><table border="0">';
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2" align="center">Farm Manager</td></tr>');
  (s as any).i = 1;
  while (true) {
    if (((s as any).KGD ?? 0)['farm_' + (((s as any).i ?? 0))] === 0) {
      (s as any).i = 10;
    }
    if (((s as any).KGD ?? 0)['farm_' + (((s as any).i ?? 0))] === 1) {
      ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td>farm ' + ((s as any).i ?? 0) + '</td><td>Level: \'+KGD[\'farm_level_' + ((s as any).i ?? 0) + '\']+\'</td><td>Production: \'+KGD[\'farm_rate_' + ((s as any).i ?? 0) + '\']*KGD[\'farm_level_' + ((s as any).i ?? 0) + '\']+\' R/D</td></tr>');
      if (((s as any).KGD ?? 0)['farm_level_' + (((s as any).i ?? 0))] < 5  &&  ((s as any).KGD ?? 0)?.['money'] >= 100*((s as any).KGD ?? 0)['farm_level_' + (((s as any).i ?? 0))]) {
        ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2"><a href="#" onclick="window.__gameStore.setState((s) => { (s.KGD ??= {})\u0027farm_level_' + ((s as any).i ?? 0) + '\u0027 +=1; (s.KGD ??= {})\u0027farm_rate_' + ((s as any).i ?? 0) + '\u0027 +=2; (s.KGD ??= {})\u0027money\u0027 -=100*KGD[\u0027farm_level_' + ((s as any).i ?? 0) + '\u0027]; return s; }); window.__gameStore.getState().doGoto(\u0027KGDgame\u0027, \u0027MngFarm\u0027); return false;">Upgrade farm (' + 100*((s as any).KGD ?? 0)['farm_level_' + ((s as any).i ?? 0) + ''] + ' resources)</a></td></tr>');
      } else {
        ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2">\' + $func(\'wrap\', \'neg\', \'Upgrade farm (' + 100*((s as any).KGD ?? 0)['farm_level_' + ((s as any).i ?? 0) + ''] + ' resources)\') + \'</td></tr>');
      }
    }
    if (((s as any).i ?? 0) < 10) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      break;
    }
    ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('</table></center>');
    scene.text(String(qspFunc(s, 'KGD', 'table') || ''));
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  }
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
  (s as any)[KGD] ? (s as any)[KGD] = { ...(s as any)['KGD' + ((s as any).KGDsavegame ?? 0) + ''] } : (s as any)[KGD] = { ...(s as any)['KGD' + ((s as any).KGDsavegame ?? 0) + ''] };
  (s as any).KGD = undefined;
  scene.actions([
    { label: 'Back to the main menu', goto: ['komp', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'KGDexp', '');
  if (((s as any).KGD ?? 0)?.['totminut'] === 0) {
    ((s as any).KGD = (s as any).KGD ?? {})['totminut'] = ((s as any).totminut ?? 0);
  }
  ((s as any).KGD = (s as any).KGD ?? {})['totminut'] = ((s as any).KGD['totminut'] ?? 0) + (10);
  if (((s as any).KGD ?? 0)?.['totminut'] - 180 >= ((s as any).totminut ?? 0)) {
    ((s as any).KGD = (s as any).KGD ?? {})['blocked'] = 1;
    ((s as any).KGD = (s as any).KGD ?? {})['totminut'] = ((s as any).totminut ?? 0);
    scene.text('You\'ve been playing for 3 hours and your computer is running hot. It\'s time to take a break.');
    scene.actions([
      { label: 'Back to the main menu', goto: ['KGDgame', 'exit'] },
    ]);
  } else {
    if (((s as any).KGD ?? 0)?.['blocked'] === 1  &&  ((s as any).KGD ?? 0)?.['totminut'] + 60 > ((s as any).totminut ?? 0)) {
      ((s as any).KGD = (s as any).KGD ?? {})['totminut'] = ((s as any).KGD['totminut'] ?? 0) - (10);
      scene.text('Your computer is still too hot to play with.');
      scene.actions([
        { label: 'Back to the main menu', goto: ['KGDgame', 'exit'] },
      ]);
    } else {
      if (((s as any).KGD ?? 0)?.['blocked'] === 1  &&  ((s as any).KGD ?? 0)?.['totminut'] + 60 <= ((s as any).totminut ?? 0)) {
        ((s as any).KGD = (s as any).KGD ?? {})['blocked'] = 0;
        ((s as any).KGD = (s as any).KGD ?? {})['totminut'] = ((s as any).totminut ?? 0);
      }
    }
  }
  scene.text(`<center><b>Date ${(((s as any).KGD ?? 0)?.['day'] ?? '')}</b></center>`);
  scene.text('<center><b>Your town</b></center>');
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = '<center><table border="0" align="center">';
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2" align="center">Buildings</td></tr>');
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td align="center">Warehouse:</td><td align="left">which stores ' + (((s as any).KGD ?? 0)?.['money']) + ' Resources</td></tr>');
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td align="right">Farms:</td><td align="left">you own ' + (((s as any).KGD ?? 0)?.['farm_owned']) + ' farms</td></tr>');
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td align="right">Camp:</td><td align="left">' + (((s as any).KGD ?? 0)?.['Cavalry']) + (((s as any).KGD ?? 0)?.['Archers']) + (((s as any).KGD ?? 0)?.['Infantrie']) + ' troops</td></tr>');
  ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('</table></center>');
  scene.text(String(qspFunc(s, 'KGD', 'table') || ''));
  if (((s as any).KGD ?? 0)?.['sput_2'] > 0) {
    scene.text('<center><b>List Party hero (max. 6)</b></center>');
    (s as any).i = 2;
    ((s as any).KGD = (s as any).KGD ?? {})['table'] = '<center><table border="0"><tr><th>Name</th><th>Level</th><th>HP</th><th>DMG</th></tr>';
    do {
      if (((s as any).KGD ?? 0)['sput_' + (((s as any).i ?? 0))] > 0) {
        ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td>' + (((s as any).KGD ?? 0)?.['name_' + String(((s as any).i ?? 0))]) + '</td><td>' + (((s as any).KGD ?? 0)?.['lvl_' + String(((s as any).i ?? 0))]) + '</td><td>' + (((s as any).KGD ?? 0)?.['HP_' + String(((s as any).i ?? 0))]) + '</td><td>' + (((s as any).KGD ?? 0)?.['damage_' + String(((s as any).i ?? 0))]) + '</td></tr>');
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      ((s as any).KGD = (s as any).KGD ?? {})['table'] = ((s as any).KGD['table'] ?? 0) + ('</table></center>');
      scene.text(String(qspFunc(s, 'KGD', 'table') || ''));
    } while (((s as any).i ?? 0) <= 6);
  } else {
    scene.text('<center> You do not have any heroes in your party. </center>');
  }
  if (((s as any).KGD ?? 0)?.['money'] >= 150  &&  ((s as any).KGD ?? 0)?.['farm_10'] === 0) {
    scene.actions([
      { label: 'Build a farm (150 resources)', handler: (st: GameState) => {
    (st as any).i = 1;
    do {
      if (((st as any).KGD ?? 0)['farm_' + (((st as any).i ?? 0))] === 0) {
        ((st as any).KGD = (st as any).KGD ?? {})['money'] = ((st as any).KGD['money'] ?? 0) - (150);
        ((st as any).KGD = (st as any).KGD ?? {})['farm_' + String(((st as any).i ?? 0))] = 1;
        ((st as any).KGD = (st as any).KGD ?? {})['farm_level_' + String(((st as any).i ?? 0))] = 1;
        ((st as any).KGD = (st as any).KGD ?? {})['farm_rate_' + String(((st as any).i ?? 0))] = 5;
        ((st as any).KGD = (st as any).KGD ?? {})['farm_owned'] = ((st as any).KGD['farm_owned'] ?? 0) + (1);
        (st as any).i = 10;
        dynamicGoto(st, 'curloc');
      }
      (st as any).i = ((st as any).i ?? 0) + (1);
    } while (((st as any).i ?? 0) <= 10);
  } },
    ]);
  }
  if (((s as any).KGD ?? 0)?.['farm_1'] === 1) {
    scene.actions([
      { label: 'Manage farms', goto: ['KGDgame', 'MngFarm'] },
    ]);
  }
  if (((s as any).KGD ?? 0)?.['brod'] === 0  &&  ((s as any).KGD ?? 0)?.['partyCreate'] > 0) {
    scene.actions([
      { label: 'Win territory', handler: (st: GameState) => {
    ((st as any).KGD = (st as any).KGD ?? {})['brod'] = 1;
    qspGoto(st, 'KGDbefore', '');
  } },
    ]);
  }
  if (((s as any).KGD ?? 0)?.['sput_6'] === 0  &&  ((s as any).KGD ?? 0)?.['money'] >= 250) {
    scene.actions([
      { label: 'Hire a hero (250 resources)', handler: (st: GameState) => {
    ((st as any).KGD = (st as any).KGD ?? {})['money'] = ((st as any).KGD['money'] ?? 0) - (250);
    ((st as any).KGD = (st as any).KGD ?? {})['partyCreate'] = 0;
    scene.actions([
      { label: 'Warrior', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', '');
  } },
      { label: 'Magician', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', '');
  } },
      { label: 'Archer', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', '');
  } },
      { label: 'Priest', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', '');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGD ?? 0)?.['money'] >= 100) {
    scene.actions([
      { label: 'Train troops (100 resources)', handler: (st: GameState) => {
    scene.actions([
      { label: 'train Infantrie', handler: (st: GameState) => {
    ((st as any).KGD = (st as any).KGD ?? {})['money'] = ((st as any).KGD['money'] ?? 0) - (100);
    ((st as any).KGD = (st as any).KGD ?? {})['Infantrie'] = ((st as any).KGD['Infantrie'] ?? 0) + (10);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'train Cavalry', handler: (st: GameState) => {
    ((st as any).KGD = (st as any).KGD ?? {})['money'] = ((st as any).KGD['money'] ?? 0) - (100);
    ((st as any).KGD = (st as any).KGD ?? {})['Cavalry'] = ((st as any).KGD['Cavalry'] ?? 0) + (10);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'train Archers', handler: (st: GameState) => {
    ((st as any).KGD = (st as any).KGD ?? {})['money'] = ((st as any).KGD['money'] ?? 0) - (100);
    ((st as any).KGD = (st as any).KGD ?? {})['Archers'] = ((st as any).KGD['Archers'] ?? 0) + (10);
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Next Day', handler: (st: GameState) => {
    ((st as any).KGD = (st as any).KGD ?? {})['brod'] = 0;
    ((st as any).KGD = (st as any).KGD ?? {})['day'] = ((st as any).KGD['day'] ?? 0) + (1);
    (st as any).i = 1;
    while (true) {
      if (((st as any).KGD ?? 0)['farm_' + (((st as any).i ?? 0))] === 0) {
        (st as any).i = 10;
      }
      if (((st as any).KGD ?? 0)['farm_' + (((st as any).i ?? 0))] === 1) {
        ((st as any).KGD = (st as any).KGD ?? {})['farm'] = ((st as any).KGD['farm'] ?? 0) + (((st as any).KGD ?? 0)['farm_rate_' + ((st as any).i ?? 0) + ''] * ((st as any).KGD ?? 0)['farm_level_' + ((st as any).i ?? 0) + '']);
      }
      if (((st as any).i ?? 0) < 10) {
        (st as any).i = ((st as any).i ?? 0) + (1);
        break;
      }
      ((st as any).KGD = (st as any).KGD ?? {})['money'] = ((st as any).KGD['money'] ?? 0) + ((((st as any).KGD ?? 0)?.['farm']));
      ((st as any).KGD = (st as any).KGD ?? {})['farm'] = 0;
      dynamicGoto(st, 'curloc');
    }
  } },
    { label: 'Arrange the soldiers', handler: (st: GameState) => {
    (st as any).i = 1;
    ((st as any).KGD = (st as any).KGD ?? {})['partyCreate'] = 1;
    do {
      if (((st as any).i ?? 0) === 1) {
        (st as any).temp_suffix = 'st';
      } else {
        if (((st as any).i ?? 0) === 2) {
          (st as any).temp_suffix = 'nd';
        } else {
          if (((st as any).i ?? 0) === 3) {
            (st as any).temp_suffix = 'rd';
          } else {
            (st as any).temp_suffix = 'th';
          }
        }
      }
      ((st as any).KGD = (st as any).KGD ?? {})['place_' + String(((st as any).i ?? 0))] = '' + ((st as any).i ?? 0) + '' + ((st as any).temp_suffix ?? 0) + ' place is empty';
      ((st as any).KGD = (st as any).KGD ?? {})['place_' + String(((st as any).i ?? 0)) + '_rank'] = 0;
      (st as any).i = ((st as any).i ?? 0) + (1);
      qspGoto(st, 'KGDparty', '');
    } while (((st as any).i ?? 0) < 6);
  } },
    { label: 'Quit Game', goto: ['KGDgame', 'exit'] },
  ]);
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
      enterDefault(s, scene);
      break;
  }
}

export const KGDgame: LocationDef = {
  name: 'KGDgame',
  title: 'Upgrade farm (\']>> resources)',
  region: 'kgd',
  enter: enter,
};
