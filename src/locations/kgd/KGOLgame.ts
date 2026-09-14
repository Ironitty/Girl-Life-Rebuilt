import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  if (((s as any).KGOLset ?? 0) === '') {
  }
  if (((s as any).KGOLset2 ?? 0) === '') {
  }
  if (((s as any).KGOLset3 ?? 0) === '') {
  }
  if (((s as any).KGOLset4 ?? 0) === '') {
  }
  if (((s as any).KGOLset5 ?? 0) === '') {
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
  scene.text('<a href="exec: gt \'KGstart\'">Exit the game</a>');
  scene.text('<a href="exec: gt \'KGOLgame\', \'KGOLstat\'">View Statistics</a>');
  // TODO-QSP: dynamic text: <<$KGOLname>>, Level <<KGOLlvl>> <<$KGOLrace>> <<$KGOLklass>>
  scene.text(`${((s as any).KGOLname || '')}, Level ${((s as any).KGOLlvl || '')} ${((s as any).KGOLrace || '')} ${((s as any).KGOLklass || '')}`);
  // TODO-QSP: dynamic text: Health: <<KGHP>>
  scene.text(`Health: ${((s as any).KGHP || '')}`);
  // TODO-QSP: dynamic text: Mana: <<KGMana>>
  scene.text(`Mana: ${((s as any).KGMana || '')}`);
  if (((s as any).KGHP ?? 0) < ((s as any).KGHPMAX ?? 0)) {
    // TODO-QSP: dynamic text: You have <<KGHP*100/KGHPMAX>>% of your overall health left.
    scene.text(`You have ${((s as any).KGHP ?? '')*100/((s as any).KGHPMAX ?? '')}% of your overall health left.`);
  }
  if (((s as any).KGMana ?? 0) < ((s as any).KGManaMax ?? 0)) {
    // TODO-QSP: dynamic text: You have <<KGMana*100/KGManaMax>>% of your overall mana left.
    scene.text(`You have ${((s as any).KGMana ?? '')*100/((s as any).KGManaMax ?? '')}% of your overall mana left.`);
  }
  if (((s as any).KGOLhirka ?? 0) > 0) {
    // TODO-QSP: dynamic text: Hirka will automatically restore <<KGOLhirka>> health.
    scene.text(`Hirka will automatically restore ${((s as any).KGOLhirka || '')} health.`);
  }
  if (((s as any).KGOLPrizeM ?? 0) > 0) {
    // TODO-QSP: dynamic text: You have <<KGOLmoney>> coins.
    scene.text(`You have ${((s as any).KGOLmoney || '')} coins.`);
  }
  if (((s as any).KGOLneedExp ?? 0) <= 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'KGOLexpa', 'KGOLrise'">' + $func('wrap', 'neg', 'Earn experien...
    scene.text('<a href="exec:gs \'KGOLexpa\', \'KGOLrise\'">Earn experience points to improve your stats.</a>');
  }
  if (((s as any).KGOLpoint ?? 0) > 0) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'KGOLexpa', 'KGOLrise'">' + $func('wrap', 'neg', 'You have upgr...
    scene.text('<a href="exec:gs \'KGOLexpa\', \'KGOLrise\'">You have upgrade points that have not been allocated.</a>');
  }
  if (((s as any).KGOLspellpoint ?? 0) >= 4) {
    // TODO-QSP: dynamic text: <a href="exec:gs 'KGOLexpa', 'KGOLrise2'">' + $func('wrap', 'neg', 'You have ski...
    scene.text('<a href="exec:gs \'KGOLexpa\', \'KGOLrise2\'">You have skill points to spend.</a>');
  }
  // TODO-QSP: dynamic text: <<KGOLspellpoint>>
  scene.text(`${((s as any).KGOLspellpoint || '')}`);
  scene.text('');
  scene.text('<center><b>Countryside</b></center>');
  scene.text('You are in a picturesque village with other player characters. An NPC is standing near some pillars.');
  if (((s as any).KGHP ?? 0) < ((s as any).KGHPMAX ?? 0)  ||  ((s as any).KGMana ?? 0) < ((s as any).KGManaMax ?? 0)) {
    scene.actions([
      { label: 'Regenerate (1:00)', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    (s as any).KGHP = ((s as any).KGHPMAX ?? 0);
    (s as any).KGMana = ((s as any).KGManaMax ?? 0);
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
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).KGOLdist = Math.floor(Math.random() * 10) + 1;
    scene.text('A variety of monsters roam around the fields near the village.');
    scene.actions([
      { label: 'Predatory flower', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '0');
  }, goto: ['KGOLfight', ''] },
      { label: 'Iridescent beetle', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '1');
  }, goto: ['KGOLfight', ''] },
      { label: 'Sundew', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '2');
  }, goto: ['KGOLfight', ''] },
      { label: 'Toothless dog', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '3');
  }, goto: ['KGOLfight', ''] },
      { label: 'Young cactus', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '4');
  }, goto: ['KGOLfight', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).KGOLlvl ?? 0) >= 5  &&  ((s as any).KGHP ?? 0) > 0) {
    scene.actions([
      { label: 'Farm near the mill', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).KGOLdist = Math.floor(Math.random() * 10) + 1;
    scene.text('A variety of monsters roam around the fields near the mill.');
    scene.actions([
      { label: 'Toad', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '5');
  }, goto: ['KGOLfight', ''] },
      { label: 'Royal beetle', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '6');
  }, goto: ['KGOLfight', ''] },
      { label: 'Spotted mantis', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '7');
  }, goto: ['KGOLfight', ''] },
      { label: 'Plague Rat', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '8');
  }, goto: ['KGOLfight', ''] },
      { label: 'Prickly cactus', handler: (st: GameState) => {
    qspCall(s, 'KGOLenemy', '9');
  }, goto: ['KGOLfight', ''] },
    ]);
  } },
      { label: 'Level 5 Boss', handler: (st: GameState) => {
    qspCall(s, 'KGOLboss', '1');
  }, goto: ['KGOLfight', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Approach the NPC', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if ((!((s as any).KGOLmqw ?? 0))) {
      (s as any).KGOLmqw = 1;
      // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill prey 5 predatory flowers."
      scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill prey 5 predatory flowers."`);
      scene.text('Reward: Weapon (class locked)');
    } else {
      if (((s as any).KGOLmqw ?? 0) === 1  &&  ((s as any).KGOLqwvip ?? 0) >= 5) {
        (s as any).KGOLqwvip = 0;
        (s as any).KGOLmqw = 2;
        (s as any).KGOLwpower = 10;
        if (((s as any).KGOLklass ?? 0) === 'Warrior'  ||  ((s as any).KGOLklass ?? 0) === 'Barbarian') {
        } else {
          if (((s as any).KGOLklass ?? 0) === 'Rogue') {
          } else {
            if (((s as any).KGOLklass ?? 0) === 'Magician'  ||  ((s as any).KGOLklass ?? 0) === 'Priest') {
            } else {
              if (((s as any).KGOLklass ?? 0) === 'Archer') {
              }
            }
          }
        }
        // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here's your weapon."
        scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here's your weapon."`);
      } else {
        if (((s as any).KGOLmqw ?? 0) === 2) {
          (s as any).KGOLmqw = 3;
          // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill 10 iridescent beetles."
          scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill 10 iridescent beetles."`);
          scene.text('Reward: Leather armor');
        } else {
          if (((s as any).KGOLmqw ?? 0) === 3  &&  ((s as any).KGOLqwvip ?? 0) >= 10) {
            (s as any).KGOLqwvip = 0;
            (s as any).KGOLmqw = 4;
            (s as any).KGOLbrona = ((s as any).KGOLbrona ?? 0) + (10);
            // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here's your armor."
            scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here's your armor."`);
          } else {
            if (((s as any).KGOLmqw ?? 0) === 4) {
              (s as any).KGOLmqw = 5;
              // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill 20 sundews."
              scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill 20 sundews."`);
              scene.text('Reward: Leather boots');
            } else {
              if (((s as any).KGOLmqw ?? 0) === 5  &&  ((s as any).KGOLqwvip ?? 0) >= 20) {
                (s as any).KGOLqwvip = 0;
                (s as any).KGOLmqw = 6;
                (s as any).KGOLbrona = ((s as any).KGOLbrona ?? 0) + (2);
                // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here are your boots."
                scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here are your boots."`);
              } else {
                if (((s as any).KGOLmqw ?? 0) === 6) {
                  (s as any).KGOLmqw = 7;
                  // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill 25 toothless dogs."
                  scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill 25 toothless dogs."`);
                  scene.text('Reward: Leather Gauntlets');
                } else {
                  if (((s as any).KGOLmqw ?? 0) === 7  &&  ((s as any).KGOLqwvip ?? 0) >= 25) {
                    (s as any).KGOLqwvip = 0;
                    (s as any).KGOLmqw = 8;
                    (s as any).KGOLbrona = ((s as any).KGOLbrona ?? 0) + (2);
                    // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here are your gauntlets."
                    scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here are your gauntlets."`);
                  } else {
                    if (((s as any).KGOLmqw ?? 0) === 8) {
                      (s as any).KGOLmqw = 9;
                      // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill 30 young cacti."
                      scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill 30 young cacti."`);
                      scene.text('Reward: Leather Helmet');
                    } else {
                      if (((s as any).KGOLmqw ?? 0) === 9  &&  ((s as any).KGOLqwvip ?? 0) >= 30) {
                        (s as any).KGOLqwvip = 0;
                        (s as any).KGOLmqw = 10;
                        (s as any).KGOLbrona = ((s as any).KGOLbrona ?? 0) + (2);
                        // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here's your helmet."
                        scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here's your helmet."`);
                      } else {
                        if (((s as any).KGOLmqw ?? 0) === 10  &&  ((s as any).KGOLlvl ?? 0) >= 5) {
                          (s as any).KGOLmqw = 11;
                          // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill 10 toads."
                          scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill 10 toads."`);
                          scene.text('Reward: 100 experience points');
                        } else {
                          if (((s as any).KGOLmqw ?? 0) === 11  &&  ((s as any).KGOLqwvip ?? 0) >= 10) {
                            (s as any).KGOLqwvip = 0;
                            (s as any).KGOLmqw = 12;
                            (s as any).KGOLexp = ((s as any).KGOLexp ?? 0) + (100);
                            // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here's your reward!"
                            scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here's your reward!"`);
                          } else {
                            if (((s as any).KGOLmqw ?? 0) === 12  &&  ((s as any).KGOLlvl ?? 0) >= 5) {
                              (s as any).KGOLmqw = 13;
                              // TODO-QSP: dynamic text: (NPC) - "<<$KGOLname>>, I need you to kill 10 royal beetles."
                              scene.text(`(NPC) - "${((s as any).KGOLname || '')}, I need you to kill 10 royal beetles."`);
                              scene.text('Reward: 200 experience points');
                            } else {
                              if (((s as any).KGOLmqw ?? 0) === 13  &&  ((s as any).KGOLqwvip ?? 0) >= 10) {
                                (s as any).KGOLqwvip = 0;
                                (s as any).KGOLmqw = 14;
                                (s as any).KGOLexp = ((s as any).KGOLexp ?? 0) + (200);
                                // TODO-QSP: dynamic text: (NPC) - "Thank you, <<$KGOLname>>! Here's your reward!"
                                scene.text(`(NPC) - "Thank you, ${((s as any).KGOLname || '')}! Here's your reward!"`);
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
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    if (((s as any).KGOLmoney ?? 0) >= 300) {
      scene.actions([
        { label: 'Buy health potion (300 coins)', handler: (st: GameState) => {
    (s as any).KGOLmoney = ((s as any).KGOLmoney ?? 0) - (300);
    (s as any).KGOLpotionH = ((s as any).KGOLpotionH ?? 0) + (1);
  }, goto: ['KGOLgame', ''] },
      ]);
    }
    if (((s as any).KGOLmoney ?? 0) >= 300) {
      scene.actions([
        { label: 'Buy a mana potion (300 coins)', handler: (st: GameState) => {
    (s as any).KGOLmoney = ((s as any).KGOLmoney ?? 0) - (300);
    (s as any).KGOLpotionM = ((s as any).KGOLpotionM ?? 0) + (1);
  }, goto: ['KGOLgame', ''] },
      ]);
    }
    if (((s as any).KGOLmoney ?? 0) >= 1500  &&  ((s as any).KGOLhirka ?? 0) <= 0) {
      scene.actions([
        { label: 'Buy a Rejuvenation Tonic (1500 coins)', handler: (st: GameState) => {
    (s as any).KGOLmoney = ((s as any).KGOLmoney ?? 0) - (1500);
    (s as any).KGOLhirka = ((s as any).KGOLhirka ?? 0) + (10000);
  }, goto: ['KGOLgame', ''] },
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
  // TODO-QSP: dynamic text: <<$KGOLname>>, level <<KGOLlvl>> <<$KGOLrace>> <<$KGOLklass>>
  scene.text(`${((s as any).KGOLname || '')}, level ${((s as any).KGOLlvl || '')} ${((s as any).KGOLrace || '')} ${((s as any).KGOLklass || '')}`);
  scene.text('<a href="exec: gt \'KGOLgame\', \'KGOLstat2\'">Close Statistics</a>');
  if (((s as any).KGOLneedExp ?? 0) > 0) {
    // TODO-QSP: pl 'Total experience points: <<KGOLexp>> Experience needed to level up: <<KGOLneedExp>>'
  } else {
    // TODO-QSP: pl '<a href="exec:gs ''KGOLexpa'', ''KGOLrise''">' + $func('wrap', 'neg', 'Earn experience points to...
  }
  // TODO-QSP: dynamic text: Strength: <<KGOLstren>>
  scene.text(`Strength: ${((s as any).KGOLstren || '')}`);
  // TODO-QSP: dynamic text: Speed: <<KGOLspeed>>
  scene.text(`Speed: ${((s as any).KGOLspeed || '')}`);
  // TODO-QSP: dynamic text: Endurance: <<KGOLvital>>
  scene.text(`Endurance: ${((s as any).KGOLvital || '')}`);
  // TODO-QSP: dynamic text: Intelligence: <<KGOLintel>>
  scene.text(`Intelligence: ${((s as any).KGOLintel || '')}`);
  // TODO-QSP: dynamic text: Armor protection: <<KGOLbrona>>
  scene.text(`Armor protection: ${((s as any).KGOLbrona || '')}`);
  // TODO-QSP: dynamic text: Weapons damage: <<KGOLwpower>>
  scene.text(`Weapons damage: ${((s as any).KGOLwpower || '')}`);
  scene.text('');
  scene.text('<center>Equipment</center>');
  // TODO-QSP: dynamic text: <<$KGOLset>>
  scene.text(`${((s as any).KGOLset || '')}`);
  // TODO-QSP: dynamic text: <<$KGOLset2>>
  scene.text(`${((s as any).KGOLset2 || '')}`);
  // TODO-QSP: dynamic text: <<$KGOLset3>>
  scene.text(`${((s as any).KGOLset3 || '')}`);
  // TODO-QSP: dynamic text: <<$KGOLset4>>
  scene.text(`${((s as any).KGOLset4 || '')}`);
  // TODO-QSP: dynamic text: <<$KGOLset5>>
  scene.text(`${((s as any).KGOLset5 || '')}`);
  scene.text('');
  scene.text('<center>Supplies</center>');
  if (((s as any).KGOLpotionH ?? 0) > 0) {
    // TODO-QSP: pl 'You have <<KGOLpotionH>> health potion(s). <a href="exec:KGOLpotionH -= 1 & KGHP += 100 & gs ''s...
  }
  if (((s as any).KGOLpotionM ?? 0) > 0) {
    // TODO-QSP: pl 'You have <<KGOLpotionM>> mana potion(s). <a href="exec:KGOLpotionM -= 1 & KGMana += 100 & gs ''s...
  }
  scene.text('<center>PVE</center>');
  // TODO-QSP: dynamic text: You have won <<KGOLWin>> times and lost <<KGOLLoss>> times.
  scene.text(`You have won ${((s as any).KGOLWin || '')} times and lost ${((s as any).KGOLLoss || '')} times.`);
  scene.text('<center>PVP</center>');
  // TODO-QSP: dynamic text: You have won <<KGOLpvpWin>> times and lost <<KGOLpvpLoss>> times.
  scene.text(`You have won ${((s as any).KGOLpvpWin || '')} times and lost ${((s as any).KGOLpvpLoss || '')} times.`);
  // TODO-QSP: end
  scene.build();
}

function enterKGOLstat2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.actions([{ label: 'Continue', goto: ['KGOLgame', ''] }]);
  // TODO-QSP: end
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
