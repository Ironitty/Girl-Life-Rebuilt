import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).KGOLset ?? 0) === '') {
    (s as any).KGOLset = 'You are wearing nothing on your head';
  }
  if (((s as any).KGOLset2 ?? 0) === '') {
    (s as any).KGOLset2 = 'You are wearing simple clothes';
  }
  if (((s as any).KGOLset3 ?? 0) === '') {
    (s as any).KGOLset3 = 'You are wearing simple shoes';
  }
  if (((s as any).KGOLset4 ?? 0) === '') {
    (s as any).KGOLset4 = 'You have no gloves on your hands';
  }
  if (((s as any).KGOLset5 ?? 0) === '') {
    (s as any).KGOLset5 = 'You have no weapon equipped';
  }
  (s as any).KGHPMAX = ((s as any).KGOLvital ?? 0) * 10;
  (s as any).KGManaMax = ((s as any).KGOLintel ?? 0) * 10;
  if (((s as any).KGHP ?? 0) > ((s as any).KGHPMAX ?? 0)) {
    (s as any).KGHP = ((s as any).KGHPMAX ?? 0);
  }
  if (((s as any).KGMana ?? 0) > ((s as any).KGManaMax ?? 0)) {
    (s as any).KGMana = ((s as any).KGManaMax ?? 0);
  }
  (s as any).KGOLbrona = ((s as any).KGOLbrona ?? 0) - (((s as any).KGOLbronaMod ?? 0));
  (s as any).KGOLbronaMod = 0;
  (s as any).KGOLstren = ((s as any).KGOLstren ?? 0) - (((s as any).KGOLstrenMod ?? 0));
  (s as any).KGOLstrenMod = 0;
  (s as any).KGOLspeed = ((s as any).KGOLspeed ?? 0) - (((s as any).KGOLspeedMod ?? 0));
  (s as any).KGOLspeedMod = 0;
  (s as any).KGOLvital = ((s as any).KGOLvital ?? 0) - (((s as any).KGOLvitalMod ?? 0));
  (s as any).KGOLvitalMod = 0;
  (s as any).KGOLintel = ((s as any).KGOLintel ?? 0) - (((s as any).KGOLintelMod ?? 0));
  (s as any).KGOLintelMod = 0;
  (s as any).KGOLwpower = ((s as any).KGOLwpower ?? 0) - (((s as any).KGOLwpowerMod ?? 0));
  (s as any).KGOLwpowerMod = 0;
  (s as any).KGOLcooldown = 0;
  if (((s as any).KGHP ?? 0) < ((s as any).KGHPMAX ?? 0)  &&  ((s as any).KGOLhirka ?? 0) > 0) {
    (s as any).kghneed = ((s as any).KGHPMAX ?? 0) - ((s as any).KGHP ?? 0);
    if (((s as any).KGOLhirka ?? 0) >= ((s as any).kghneed ?? 0)) {
      (s as any).KGOLhirka = ((s as any).KGOLhirka ?? 0) - (((s as any).kghneed ?? 0));
      (s as any).KGHP = ((s as any).KGHPMAX ?? 0);
    } else {
      (s as any).KGHP = ((s as any).KGOLhirka ?? 0);
      (s as any).KGOLhirka = 0;
    }
  }
  if (((s as any).KGHP ?? 0) < 0) {
    (s as any).KGHP = 0;
  }
  qspCall(s, 'KGOLexpa', '');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027KGstart\u0027, \u0027\u0027); return false;">Exit the game</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027KGOLgame\u0027, \u0027KGOLstat\u0027); return false;">View Statistics</a>');
  scene.text(`${((s as any).KGOLname ?? '')}, Level ${((s as any).KGOLlvl ?? '')} ${((s as any).KGOLrace ?? '')} ${((s as any).KGOLklass ?? '')}`);
  scene.text(`Health: ${((s as any).KGHP ?? '')}`);
  scene.text(`Mana: ${((s as any).KGMana ?? '')}`);
  if (((s as any).KGHP ?? 0) < ((s as any).KGHPMAX ?? 0)) {
    scene.text(`You have ${((s as any).KGHP ?? '')*100/((s as any).KGHPMAX ?? '')}% of your overall health left.`);
  }
  if (((s as any).KGMana ?? 0) < ((s as any).KGManaMax ?? 0)) {
    scene.text(`You have ${((s as any).KGMana ?? '')*100/((s as any).KGManaMax ?? '')}% of your overall mana left.`);
  }
  if (((s as any).KGOLhirka ?? 0) > 0) {
    scene.text(`Hirka will automatically restore ${((s as any).KGOLhirka ?? '')} health.`);
  }
  if (((s as any).KGOLPrizeM ?? 0) > 0) {
    scene.text(`You have ${((s as any).KGOLmoney ?? '')} coins.`);
  }
  if (((s as any).KGOLneedExp ?? 0) <= 0) {
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027KGOLexpa\u0027, \u0027KGOLrise\u0027); return false;">\' + $func(\'wrap\', \'neg\', \'Earn experience points to improve your stats.\') + \'</a>\'');
  }
  if (((s as any).KGOLpoint ?? 0) > 0) {
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027KGOLexpa\u0027, \u0027KGOLrise\u0027); return false;">\' + $func(\'wrap\', \'neg\', \'You have upgrade points that have not been allocated.\') + \'</a>\'');
  }
  if (((s as any).KGOLspellpoint ?? 0) >= 4) {
    scene.text('\'<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027KGOLexpa\u0027, \u0027KGOLrise2\u0027); return false;">\' + $func(\'wrap\', \'neg\', \'You have skill points to spend.\') + \'</a>\'');
  }
  scene.text(`${((s as any).KGOLspellpoint ?? '')}`);
  scene.text('');
  scene.text('<center><b>Countryside</b></center>');
  scene.text('You are in a picturesque village with other player characters. An NPC is standing near some pillars.');
  if (((s as any).KGHP ?? 0) < ((s as any).KGHPMAX ?? 0)  ||  ((s as any).KGMana ?? 0) < ((s as any).KGManaMax ?? 0)) {
    scene.actions([
      { label: 'Regenerate (1:00)', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 60;
    (st as any).KGHP = ((st as any).KGHPMAX ?? 0);
    (st as any).KGMana = ((st as any).KGManaMax ?? 0);
    scene.text('You sit for an hour waiting for your health and mana to regenerate. It\'s boring, but at least it was free.');
    scene.actions([
      { label: 'Leave', goto: ['KGOLgame', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).KGHP ?? 0) > 0) {
    scene.actions([
      { label: 'Farm near the village', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).KGOLdist = (Math.floor(Math.random() * 10) + 1);
    scene.text('A variety of monsters roam around the fields near the village.');
    scene.actions([
      { label: 'Predatory flower', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '0');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Iridescent beetle', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '1');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Sundew', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '2');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Toothless dog', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '3');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Young cactus', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '4');
    qspGoto(st, 'KGOLfight', '');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).KGOLlvl ?? 0) >= 5  &&  ((s as any).KGHP ?? 0) > 0) {
    scene.actions([
      { label: 'Farm near the mill', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    (st as any).KGOLdist = (Math.floor(Math.random() * 10) + 1);
    scene.text('A variety of monsters roam around the fields near the mill.');
    scene.actions([
      { label: 'Toad', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '5');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Royal beetle', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '6');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Spotted mantis', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '7');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Plague Rat', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '8');
    qspGoto(st, 'KGOLfight', '');
  } },
      { label: 'Prickly cactus', handler: (st: GameState) => {
    qspCall(st, 'KGOLenemy', '9');
    qspGoto(st, 'KGOLfight', '');
  } },
    ]);
  } },
      { label: 'Level 5 Boss', handler: (st: GameState) => {
    qspCall(st, 'KGOLboss', '1');
    qspGoto(st, 'KGOLfight', '');
  } },
    ]);
  }
  scene.actions([
    { label: 'Approach the NPC', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    if ((!((st as any).KGOLmqw ?? 0))) {
      (st as any).KGOLmqw = 1;
      scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill prey 5 predatory flowers."`);
      scene.text('Reward: Weapon (class locked)');
    } else {
      if (((st as any).KGOLmqw ?? 0) === 1  &&  ((st as any).KGOLqwvip ?? 0) >= 5) {
        (st as any).KGOLqwvip = 0;
        (st as any).KGOLmqw = 2;
        (st as any).KGOLwpower = 10;
        if (((st as any).KGOLklass ?? 0) === 'Warrior'  ||  ((st as any).KGOLklass ?? 0) === 'Barbarian') {
          (st as any).KGOLset5 = 'You are equipped with a simple sword';
        } else {
          if (((st as any).KGOLklass ?? 0) === 'Rogue') {
            (st as any).KGOLset5 = 'You are equipped with a set of daggers';
          } else {
            if (((st as any).KGOLklass ?? 0) === 'Magician'  ||  ((st as any).KGOLklass ?? 0) === 'Priest') {
              (st as any).KGOLset5 = 'You are equipped with a simple staff';
            } else {
              if (((st as any).KGOLklass ?? 0) === 'Archer') {
                (st as any).KGOLset5 = 'You are equipped with a simple bow';
              }
            }
          }
        }
        scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here's your weapon."`);
      } else {
        if (((st as any).KGOLmqw ?? 0) === 2) {
          (st as any).KGOLmqw = 3;
          scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill 10 iridescent beetles."`);
          scene.text('Reward: Leather armor');
        } else {
          if (((st as any).KGOLmqw ?? 0) === 3  &&  ((st as any).KGOLqwvip ?? 0) >= 10) {
            (st as any).KGOLqwvip = 0;
            (st as any).KGOLmqw = 4;
            (st as any).KGOLbrona = ((st as any).KGOLbrona ?? 0) + (10);
            (st as any).KGOLset2 = 'You are wearing simple leather armor';
            scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here's your armor."`);
          } else {
            if (((st as any).KGOLmqw ?? 0) === 4) {
              (st as any).KGOLmqw = 5;
              scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill 20 sundews."`);
              scene.text('Reward: Leather boots');
            } else {
              if (((st as any).KGOLmqw ?? 0) === 5  &&  ((st as any).KGOLqwvip ?? 0) >= 20) {
                (st as any).KGOLqwvip = 0;
                (st as any).KGOLmqw = 6;
                (st as any).KGOLbrona = ((st as any).KGOLbrona ?? 0) + (2);
                (st as any).KGOLset3 = 'You are wearing a pair of rugged leather boots';
                scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here are your boots."`);
              } else {
                if (((st as any).KGOLmqw ?? 0) === 6) {
                  (st as any).KGOLmqw = 7;
                  scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill 25 toothless dogs."`);
                  scene.text('Reward: Leather Gauntlets');
                } else {
                  if (((st as any).KGOLmqw ?? 0) === 7  &&  ((st as any).KGOLqwvip ?? 0) >= 25) {
                    (st as any).KGOLqwvip = 0;
                    (st as any).KGOLmqw = 8;
                    (st as any).KGOLbrona = ((st as any).KGOLbrona ?? 0) + (2);
                    (st as any).KGOLset4 = 'You are wearing a pair of leather gauntlets';
                    scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here are your gauntlets."`);
                  } else {
                    if (((st as any).KGOLmqw ?? 0) === 8) {
                      (st as any).KGOLmqw = 9;
                      scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill 30 young cacti."`);
                      scene.text('Reward: Leather Helmet');
                    } else {
                      if (((st as any).KGOLmqw ?? 0) === 9  &&  ((st as any).KGOLqwvip ?? 0) >= 30) {
                        (st as any).KGOLqwvip = 0;
                        (st as any).KGOLmqw = 10;
                        (st as any).KGOLbrona = ((st as any).KGOLbrona ?? 0) + (2);
                        (st as any).KGOLset = 'You are wearing a leather helmet';
                        scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here's your helmet."`);
                      } else {
                        if (((st as any).KGOLmqw ?? 0) === 10  &&  ((st as any).KGOLlvl ?? 0) >= 5) {
                          (st as any).KGOLmqw = 11;
                          scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill 10 toads."`);
                          scene.text('Reward: 100 experience points');
                        } else {
                          if (((st as any).KGOLmqw ?? 0) === 11  &&  ((st as any).KGOLqwvip ?? 0) >= 10) {
                            (st as any).KGOLqwvip = 0;
                            (st as any).KGOLmqw = 12;
                            (st as any).KGOLexp = ((st as any).KGOLexp ?? 0) + (100);
                            scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here's your reward!"`);
                          } else {
                            if (((st as any).KGOLmqw ?? 0) === 12  &&  ((st as any).KGOLlvl ?? 0) >= 5) {
                              (st as any).KGOLmqw = 13;
                              scene.text(`(NPC) - "${((st as any).KGOLname ?? '')}, I need you to kill 10 royal beetles."`);
                              scene.text('Reward: 200 experience points');
                            } else {
                              if (((st as any).KGOLmqw ?? 0) === 13  &&  ((st as any).KGOLqwvip ?? 0) >= 10) {
                                (st as any).KGOLqwvip = 0;
                                (st as any).KGOLmqw = 14;
                                (st as any).KGOLexp = ((st as any).KGOLexp ?? 0) + (200);
                                scene.text(`(NPC) - "Thank you, ${((st as any).KGOLname ?? '')}! Here's your reward!"`);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['KGOLgame', ''] },
    ]);
  } },
    { label: 'Go to the store', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    if (((st as any).KGOLmoney ?? 0) >= 300) {
      scene.actions([
        { label: 'Buy health potion (300 coins)', handler: (st: GameState) => {
    (st as any).KGOLmoney = ((st as any).KGOLmoney ?? 0) - (300);
    (st as any).KGOLpotionH = ((st as any).KGOLpotionH ?? 0) + (1);
    qspGoto(st, 'KGOLgame', '');
  } },
      ]);
    }
    if (((st as any).KGOLmoney ?? 0) >= 300) {
      scene.actions([
        { label: 'Buy a mana potion (300 coins)', handler: (st: GameState) => {
    (st as any).KGOLmoney = ((st as any).KGOLmoney ?? 0) - (300);
    (st as any).KGOLpotionM = ((st as any).KGOLpotionM ?? 0) + (1);
    qspGoto(st, 'KGOLgame', '');
  } },
      ]);
    }
    if (((st as any).KGOLmoney ?? 0) >= 1500  &&  ((st as any).KGOLhirka ?? 0) <= 0) {
      scene.actions([
        { label: 'Buy a Rejuvenation Tonic (1500 coins)', handler: (st: GameState) => {
    (st as any).KGOLmoney = ((st as any).KGOLmoney ?? 0) - (1500);
    (st as any).KGOLhirka = ((st as any).KGOLhirka ?? 0) + (10000);
    qspGoto(st, 'KGOLgame', '');
  } },
      ]);
    }
    scene.actions([
      { label: 'Leave', goto: ['KGOLgame', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterKGOLstat(s: GameState, scene: SceneBuilder): void {
  scene.text(`${((s as any).KGOLname ?? '')}, level ${((s as any).KGOLlvl ?? '')} ${((s as any).KGOLrace ?? '')} ${((s as any).KGOLklass ?? '')}`);
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027KGOLgame\u0027, \u0027KGOLstat2\u0027); return false;">Close Statistics</a>');
  if (((s as any).KGOLneedExp ?? 0) > 0) {
    // TODO-QSP: pl 'Total experience points: <<KGOLexp>> Experience needed to level up: <<KGOLneedExp>>'
  } else {
    // TODO-QSP: pl '<a href="exec:gs ''KGOLexpa'', ''KGOLrise''">' + $func('wrap', 'neg', 'Earn experience points to...
  }
  scene.text(`Strength: ${((s as any).KGOLstren ?? '')}`);
  scene.text(`Speed: ${((s as any).KGOLspeed ?? '')}`);
  scene.text(`Endurance: ${((s as any).KGOLvital ?? '')}`);
  scene.text(`Intelligence: ${((s as any).KGOLintel ?? '')}`);
  scene.text(`Armor protection: ${((s as any).KGOLbrona ?? '')}`);
  scene.text(`Weapons damage: ${((s as any).KGOLwpower ?? '')}`);
  scene.text('');
  scene.text('<center>Equipment</center>');
  scene.text(`${((s as any).KGOLset ?? '')}`);
  scene.text(`${((s as any).KGOLset2 ?? '')}`);
  scene.text(`${((s as any).KGOLset3 ?? '')}`);
  scene.text(`${((s as any).KGOLset4 ?? '')}`);
  scene.text(`${((s as any).KGOLset5 ?? '')}`);
  scene.text('');
  scene.text('<center>Supplies</center>');
  if (((s as any).KGOLpotionH ?? 0) > 0) {
    // TODO-QSP: pl 'You have <<KGOLpotionH>> health potion(s). <a href="exec:KGOLpotionH -= 1 & KGHP += 100 & gs ''s...
  }
  if (((s as any).KGOLpotionM ?? 0) > 0) {
    // TODO-QSP: pl 'You have <<KGOLpotionM>> mana potion(s). <a href="exec:KGOLpotionM -= 1 & KGMana += 100 & gs ''s...
  }
  scene.text('<center>PVE</center>');
  scene.text(`You have won ${((s as any).KGOLWin ?? '')} times and lost ${((s as any).KGOLLoss ?? '')} times.`);
  scene.text('<center>PVP</center>');
  scene.text(`You have won ${((s as any).KGOLpvpWin ?? '')} times and lost ${((s as any).KGOLpvpLoss ?? '')} times.`);
  scene.build();
}

function enterKGOLstat2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  qspGoto(s, 'KGOLgame', '');
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'KGOLstat':
      enterKGOLstat(s, scene);
      break;
    case 'KGOLstat2':
      enterKGOLstat2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KGOLgame: LocationDef = {
  name: 'KGOLgame',
  title: 'Earn experience points to improve your stats.',
  region: 'kgd',
  description: ['You are in a picturesque village with other player characters. An NPC is standing near some pillars.'],
  enter: enter,
};
