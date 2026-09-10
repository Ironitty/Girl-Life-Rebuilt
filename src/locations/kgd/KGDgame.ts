import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'KGDexp', '');
  if (((s as any).KGD ?? 0)?.['totminut'] === 0) {
    (s as any).KGD['totminut'] = ((s as any).totminut ?? 0);
  }
  (s as any).KGD['totminut'] = ((s as any).KGD['totminut'] ?? 0) + (10);
  if (((s as any).KGD ?? 0)?.['totminut'] - 180 >= ((s as any).totminut ?? 0)) {
    (s as any).KGD['blocked'] = 1;
    (s as any).KGD['totminut'] = ((s as any).totminut ?? 0);
    scene.text('You\'ve been playing for 3 hours and your computer is running hot. It\'s time to take a break.');
    scene.actions([
      { label: 'Back to the main menu', goto: ['KGDgame', 'exit'] },
    ]);
  } else {
    (s as any).KGD['totminut'] = ((s as any).KGD['totminut'] ?? 0) - (10);
    scene.text('Your computer is still too hot to play with.');
    if (((s as any).KGD ?? 0)?.['blocked'] === 1  &&  ((s as any).KGD ?? 0)?.['totminut'] + 60 <= ((s as any).totminut ?? 0)) {
      (s as any).KGD['blocked'] = 0;
      (s as any).KGD['totminut'] = ((s as any).totminut ?? 0);
    }
    // TODO-QSP: dynamic text: <center><b>Date <<KGD['day']>></b></center>
    scene.text(`<center><b>Date ${((s as any).KGD ?? 0)?.['day']}</b></center>`);
    scene.text('<center><b>Your town</b></center>');
    (s as any).KGD['table'] = '<center><table border="0" align="center">';
    (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td colspan="2" align="center">Buildings</td></tr>');
    (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td align="center">Warehouse:</td><td align="left">which stores \' + KGD[\'money\'] + \' Resources</td></tr>');
    (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td align="right">Farms:</td><td align="left">you own \' + KGD[\'farm_owned\'] + \' farms</td></tr>');
    (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td align="right">Camp:</td><td align="left">\' + KGD[\'Cavalry\']+KGD[\'Archers\']+KGD[\'Infantrie\'] + \' troops</td></tr>');
    (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('</table></center>');
    // TODO-QSP: $KGD['table']
    if (((s as any).KGD ?? 0)?.['sput_2'] > 0) {
      scene.text('<center><b>List Party hero (max. 6)</b></center>');
      (s as any).i = 2;
      (s as any).KGD['table'] = '<center><table border="0"><tr><th>Name</th><th>Level</th><th>HP</th><th>DMG</th></tr>';
      // TODO-QSP: :kgdparty_loop
      if (((s as any).KGD ?? 0)?.['sput_' + String(((s as any).i ?? 0))] > 0) {
        (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('<tr><td><<$KGD[\'name_<<i>>\']>></td><td><<KGD[\'lvl_<<i>>\']>></td><td><<KGD[\'HP_<<i>>\']>></td><td><<KGD[\'damage_<<i>>\']>></td></tr>');
      }
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) <= 6) {
        // TODO-QSP: jump 'kgdparty_loop'
      }
      (s as any).KGD['table'] = ((s as any).KGD['table'] ?? 0) + ('</table></center>');
      // TODO-QSP: $KGD['table']
    } else {
      scene.text('<center> You do not have any heroes in your party. </center>');
    }
    if (((s as any).KGD ?? 0)?.['money'] >= 150  &&  ((s as any).KGD ?? 0)?.['farm_10'] === 0) {
      scene.actions([
        { label: 'Build a farm (150 resources)', handler: (st: GameState) => {
    (s as any).i = 1;
    // TODO-QSP: :farm_loop
    if (((s as any).KGD ?? 0)?.['farm_' + String(((s as any).i ?? 0))] === 0) {
      (s as any).KGD['money'] = ((s as any).KGD['money'] ?? 0) - (150);
      (s as any).KGD['farm_' + String((s as any).i || '') + ''] = 1;
      (s as any).KGD['farm_level_' + String((s as any).i || '') + ''] = 1;
      (s as any).KGD['farm_rate_' + String((s as any).i || '') + ''] = 5;
      (s as any).KGD['farm_owned'] = ((s as any).KGD['farm_owned'] ?? 0) + (1);
      (s as any).i = 10;
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'curloc'); } }]);
    }
    (s as any).i = ((s as any).i ?? 0) + (1);
    if (((s as any).i ?? 0) <= 10) {
      // TODO-QSP: jump 'farm_loop'
    }
  } },
      ]);
    }
    if (((s as any).KGD ?? 0)?.['farm_1'] === 1) {
      scene.actions([
        { label: 'Manage farms', goto: ['KGDgame', 'MngFarm'] },
      ]);
    }
    scene.actions([
      { label: 'Back to the main menu', goto: ['KGDgame', 'exit'] },
      { label: 'Next Day', handler: (st: GameState) => {
    (s as any).KGD['brod'] = 0;
    (s as any).KGD['day'] = ((s as any).KGD['day'] ?? 0) + (1);
    (s as any).i = 1;
    // TODO-QSP: :kgdnextday_loop
    if (((s as any).KGD ?? 0)?.['farm_' + String(((s as any).i ?? 0))] === 0) {
      (s as any).i = 10;
    }
    if (((s as any).KGD ?? 0)?.['farm_' + String(((s as any).i ?? 0))] === 1) {
      (s as any).KGD['farm'] = ((s as any).KGD['farm'] ?? 0) + (((s as any).KGD ?? 0)?.['farm_rate_' + String(((s as any).i ?? 0))] * ((s as any).KGD ?? 0)?.['farm_level_' + String(((s as any).i ?? 0))]);
    }
    if (((s as any).i ?? 0) < 10) {
      (s as any).i = ((s as any).i ?? 0) + (1);
      // TODO-QSP: jump 'kgdnextday_loop'
    }
    (s as any).KGD['money'] = ((s as any).KGD['money'] ?? 0) + (((s as any).KGD ?? 0)?.['farm']);
    (s as any).KGD['farm'] = 0;
    dynamicGoto(st, 'curloc');
  } },
      { label: 'Arrange the soldiers', handler: (st: GameState) => {
    (s as any).i = 1;
    (s as any).KGD['partyCreate'] = 1;
    // TODO-QSP: :kgdplace_loop
    if (((s as any).i ?? 0) === 1) {
    } else {
      if (((s as any).i ?? 0) === 3) {
      }
      (s as any).KGD['place_' + String((s as any).i || '') + ''] = '<<i>><<$temp_suffix>> place is empty';
      (s as any).KGD['place_' + String((s as any).i || '') + '_rank'] = 0;
      (s as any).i = ((s as any).i ?? 0) + (1);
      if (((s as any).i ?? 0) < 6) {
        // TODO-QSP: jump 'kgdplace_loop'
      }
      scene.actions([{ label: 'Continue', goto: ['KGDparty', ''] }]);
    }
    if (((s as any).KGD ?? 0)?.['brod'] === 0  &&  ((s as any).KGD ?? 0)?.['partyCreate'] > 0) {
      scene.actions([
        { label: 'Win territory', handler: (st: GameState) => {
    (s as any).KGD['brod'] = 1;
  }, goto: ['KGDbefore', ''] },
      ]);
    }
    if (((s as any).KGD ?? 0)?.['sput_6'] === 0  &&  ((s as any).KGD ?? 0)?.['money'] >= 250) {
      scene.actions([
        { label: 'Hire a hero (250 resources)', handler: (st: GameState) => {
    (s as any).KGD['money'] = ((s as any).KGD['money'] ?? 0) - (250);
    (s as any).KGD['partyCreate'] = 0;
    scene.actions([
      { label: 'Warrior', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', 'KGDhire', 'Warrior', 100, 10);
  } },
      { label: 'Magician', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', 'KGDhire', 'Magician', 60, 20);
  } },
      { label: 'Archer', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', 'KGDhire', 'Archer', 80, 15);
  } },
      { label: 'Priest', handler: (st: GameState) => {
    qspCall(st, 'KGDgame', 'KGDhire', 'Priest', 40, 20);
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
    (s as any).KGD['money'] = ((s as any).KGD['money'] ?? 0) - (100);
    (s as any).KGD['Infantrie'] = ((s as any).KGD['Infantrie'] ?? 0) + (10);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'train Cavalry', handler: (st: GameState) => {
    (s as any).KGD['money'] = ((s as any).KGD['money'] ?? 0) - (100);
    (s as any).KGD['Cavalry'] = ((s as any).KGD['Cavalry'] ?? 0) + (10);
    dynamicGoto(st, 'curloc');
  } },
      { label: 'train Archers', handler: (st: GameState) => {
    (s as any).KGD['money'] = ((s as any).KGD['money'] ?? 0) - (100);
    (s as any).KGD['Archers'] = ((s as any).KGD['Archers'] ?? 0) + (10);
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Quit Game', goto: ['KGDgame', 'exit'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

export const KGDgame: LocationDef = {
  name: 'KGDgame',
  title: 'Upgrade farm (<<100*KGD[\'farm_level_<<i>>\']>> resources)',
  region: 'kgd',
  description: ['You\'ve been playing for 3 hours and your computer is running hot. It\'s time to take a break.'],
  enter: enter,
};
