import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
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
  if (((s as any).KGOLdist ?? 0) < 0) {
    (s as any).KGOLdist = 0;
  }
  if (((s as any).KGOLtimer ?? 0) > 0) {
    (s as any).KGOLtimer = ((s as any).KGOLtimer ?? 0) - (1);
    if (((s as any).KGOLtimer ?? 0) <= 0) {
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
    }
  }
  if (((s as any).unvis ?? 0) > 0) {
    scene.text('You are invisible.');
  }
  if (((s as any).poison ?? 0) > 0) {
    (s as any).poison = ((s as any).poison ?? 0) - (1);
    (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGOLspell4 ?? 0) * 10);
    scene.text(`Your poison blade causes ${((s as any).KGOLspell4 ?? '') * 10} damage to the enemy.`);
  }
  if (((s as any).firecircle ?? 0) > 0) {
    (s as any).firecircle = ((s as any).firecircle ?? 0) - (1);
    (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGOLspell9 ?? 0) * 50);
    scene.text(`Circle of Fire causes ${((s as any).KGOLspell9 ?? '') * 50} damage to the enemy.`);
  }
  scene.text(`${((s as any).KGOLname ?? '')}`);
  scene.text(`Health: ${((s as any).KGHP ?? '')}`);
  scene.text(`Mana: ${((s as any).KGMana ?? '')}`);
  scene.text(`${((s as any).KGname ?? '')}`);
  scene.text(`Health: ${((s as any).KGHPV ?? '')}`);
  scene.text(`Mana: ${((s as any).KGManaV ?? '')}`);
  if (((s as any).KGOLhirka ?? 0) > 0) {
    scene.text(`Your rejuvenation tonic will automatically restore up to ${((s as any).KGOLhirka ?? '')} health.`);
  }
  scene.text(`Distance: ${((s as any).KGOLdist ?? '')} meter(s)`);
  if (((s as any).KGOLtimer ?? 0) > 0) {
    scene.text(`Divine Protection will last for ${((s as any).KGOLtimer ?? '')} more rounds.`);
  }
  if (((s as any).KGOLcooldown ?? 0) > 0) {
    scene.text(`Your skill(s) will finish cooldown in ${((s as any).KGOLcooldown ?? '')} rounds.`);
  }
  if (((s as any).KGHP ?? 0) <= 0) {
    (s as any).KGOLloss = ((s as any).KGOLloss ?? 0) + (1);
    (s as any).poison = 0;
    (s as any).firecircle = 0;
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (100);
    scene.text('You have lost the fight.');
    scene.actions([
{ label: 'Continue', goto: ['KGOLgame', ''] },
]);
    return;
  }
  if (((s as any).KGHPV ?? 0) <= 0) {
    (s as any).poison = 0;
    (s as any).firecircle = 0;
    (s as any).KGOLWin = ((s as any).KGOLWin ?? 0) + (1);
    (s as any).KGOLmoney = ((s as any).KGOLmoney ?? 0) + (((s as any).KGOLPrizeM ?? 0));
    (s as any).KGOLexp = ((s as any).KGOLexp ?? 0) + (((s as any).KGOLPrizeExp ?? 0));
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) + (100);
    scene.text(`${((s as any).KGname ?? '')} has fallen.`);
    scene.text(`You have won the fight and earned ${((s as any).KGOLPrizeM ?? '')} coins and ${((s as any).KGOLPrizeExp ?? '')} experience.`);
    if (((s as any).KGOLennumBoss ?? 0) === 1  &&  (!((s as any).boss5lvl ?? 0))) {
      (s as any).boss5lvl = 1;
      (s as any).KGOLhirka = ((s as any).KGOLhirka ?? 0) + (5000);
      scene.text('The boss drops a hirka');
    }
    if (((s as any).KGOLennum ?? 0) === 0  &&  ((s as any).KGOLmqw ?? 0) === 1) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    if (((s as any).KGOLennum ?? 0) === 1  &&  ((s as any).KGOLmqw ?? 0) === 3) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    if (((s as any).KGOLennum ?? 0) === 2  &&  ((s as any).KGOLmqw ?? 0) === 5) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    if (((s as any).KGOLennum ?? 0) === 3  &&  ((s as any).KGOLmqw ?? 0) === 7) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    if (((s as any).KGOLennum ?? 0) === 4  &&  ((s as any).KGOLmqw ?? 0) === 9) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    if (((s as any).KGOLennum ?? 0) === 5  &&  ((s as any).KGOLmqw ?? 0) === 11) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    if (((s as any).KGOLennum ?? 0) === 6  &&  ((s as any).KGOLmqw ?? 0) === 13) {
      (s as any).KGOLqwvip = ((s as any).KGOLqwvip ?? 0) + (1);
      scene.text('You have killed a mob for your current quest.');
    }
    scene.actions([
{ label: 'Disengage', goto: ['KGOLgame', ''] },
]);
    return;
  }
  (s as any).KGOLiniV = (Math.floor(Math.random() * (((s as any).KGOLspeedV ?? 0) * 2 - ((s as any).KGOLspeedV ?? 0) / 2 + 1)) + (((s as any).KGOLspeedV ?? 0) / 2));
  (s as any).KGOLini = (Math.floor(Math.random() * (((s as any).KGOLspeed ?? 0) * 2 - ((s as any).KGOLspeed ?? 0) / 2 + 1)) + (((s as any).KGOLspeed ?? 0) / 2));
  if (((s as any).KGOLini ?? 0) === ((s as any).KGOLiniV ?? 0)) {
    (s as any).hodrand = (Math.floor(Math.random() * 2) + 0);
    if ((!((s as any).hodrand ?? 0))) {
      (s as any).KGOLini = 1;
      (s as any).KGOLiniV = 0;
    }
    if (((s as any).hodrand ?? 0) === 1) {
      (s as any).KGOLini = 0;
      (s as any).KGOLiniV = 1;
    }
  }
  if (((s as any).KGOLini ?? 0) > ((s as any).KGOLiniV ?? 0)) {
    (s as any).KGOLiniSUM = ((s as any).KGOLiniSUM ?? 0) + (1);
  }
  if (((s as any).KGOLini ?? 0) < ((s as any).KGOLiniV ?? 0)) {
    (s as any).KGOLiniSUM = ((s as any).KGOLiniSUM ?? 0) - (1);
  }
  if (((s as any).KGOLiniSUM ?? 0) > 3) {
    (s as any).KGOLini = 0;
    (s as any).KGOLiniV = 1;
    (s as any).KGOLiniSUM = 0;
  }
  if (((s as any).KGOLiniSUM ?? 0) < -3) {
    (s as any).KGOLini = 1;
    (s as any).KGOLiniV = 0;
    (s as any).KGOLiniSUM = 0;
  }
  if (((s as any).KGOLini ?? 0) > ((s as any).KGOLiniV ?? 0)  ||  ((s as any).unvis ?? 0) > 0) {
    scene.text('Now your turn');
    if (((s as any).KGOLklass ?? 0) === 'Warrior') {
      if (((s as any).KGOLdist ?? 0) < 3) {
        if (((s as any).KGOLspell ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell ?? 0) * 10) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Powerful Strike (' + String(((s as any).KGOLspell ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell ?? 0));
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0)+(((st as any).KGOLspell ?? 0) * 100);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).KGOLspell2 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell2 ?? 0) * 10) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Multiple Blows (' + String(((s as any).KGOLspell2 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell2 ?? 0));
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0);
    (st as any).KGLOloop = ((st as any).KGOLspell2 ?? 0) + 1;
    qspCall(st, 'KGOLexpa', 'KGOLatkKGOLspell2');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
          ]);
        }
        if (((s as any).KGOLspell3 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell3 ?? 0) * 10  &&  ((s as any).KGOLcooldown ?? 0) <= 0) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Increase Armor (' + String(((s as any).KGOLspell3 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell3 ?? 0));
    (st as any).KGOLbronaMod = ((st as any).KGOLbronaMod ?? 0) + (((st as any).KGOLspell3 ?? 0) * 5);
    (st as any).KGOLtimer = ((st as any).KGOLtimer ?? 0) + (((st as any).KGOLspell3 ?? 0) + 1);
    (st as any).KGOLcooldown = ((st as any).KGOLcooldown ?? 0) + (((st as any).KGOLspell3 ?? 0) + 3);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Attack', handler: (st: GameState) => {
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).KGOLklass ?? 0) === 'Rogue') {
        if (((s as any).KGOLdist ?? 0) < 5) {
          if (((s as any).KGOLspell4 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell4 ?? 0) * 10) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Stealth Strike (' + String(((s as any).KGOLspell4 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell4 ?? 0));
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0)+(((st as any).KGOLspell5 ?? 0) * 100);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).KGOLspell5 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell5 ?? 0) * 10) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Poison Blade (' + String(((s as any).KGOLspell5 ?? '') * 10 ?? '') + 'mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell5 ?? 0));
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatkPoison');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).KGOLspell6 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell6 ?? 0) * 10  &&  ((s as any).KGOLcooldown ?? 0) <= 0) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Invisibility (' + String(((s as any).KGOLspell6 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell6 ?? 0));
    (st as any).unvis = ((st as any).unvis ?? 0) + (((st as any).KGOLspell6 ?? 0) + 1);
    (st as any).KGOLcooldown = ((st as any).KGOLcooldown ?? 0) + (((st as any).KGOLspell6 ?? 0) + 3);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Attack', handler: (st: GameState) => {
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
          ]);
        }
      } else {
        if (((s as any).KGOLklass ?? 0) === 'Mage') {
          if (((s as any).KGOLspell7 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell7 ?? 0) * 10) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Fireball (' + String(((s as any).KGOLspell7 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell7 ?? 0));
    (st as any).KGOLpower = (Math.floor(Math.random() * (((st as any).KGOLspell7 ?? 0) * 200 - ((st as any).KGOLspell7 ?? 0) * 100 + 1)) + (((st as any).KGOLspell7 ?? 0) * 100));
    qspCall(st, 'KGOLexpa', 'KGOLatkFB');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).KGOLspell8 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell8 ?? 0) * 10) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Kinetic Pulse (' + String(((s as any).KGOLspell5 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell5 ?? 0));
    (st as any).KGOLdist = ((st as any).KGOLdist ?? 0) + ((Math.floor(Math.random() * (((st as any).KGOLspell5 ?? 0) * 50 - ((st as any).KGOLspell5 ?? 0) * 10 + 1)) + (((st as any).KGOLspell5 ?? 0) * 10)));
    scene.text(`A wave of energy bursts from within you, throwing the enemy back. The distance between you is now ${((st as any).KGOLdist ?? '')} meter(s).`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          if (((s as any).KGOLspell9 ?? 0) > 0  &&  ((s as any).KGMana ?? 0) >= ((s as any).KGOLspell9 ?? 0) * 10  &&  ((s as any).KGOLcooldown ?? 0) <= 0) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Circle of Fire (' + String(((s as any).KGOLspell9 ?? '') * 10 ?? '') + ' mana)', handler: (st: GameState) => {
    (st as any).KGMana = ((st as any).KGMana ?? 0) - (((st as any).KGOLspell9 ?? 0));
    (st as any).firecircle = ((st as any).firecircle ?? 0) + (((st as any).KGOLspell9 ?? 0) + 1);
    (st as any).KGOLcooldown = ((st as any).KGOLcooldown ?? 0) + (((st as any).KGOLspell9 ?? 0) + 3);
    scene.text('A circle of burning hellfire surrounds you.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Attack', handler: (st: GameState) => {
    (st as any).KGOLpower = ((st as any).KGOLintel ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).KGOLklass ?? 0) === 'Priest') {
            scene.actions([
              { label: 'Attack', handler: (st: GameState) => {
    (st as any).KGOLpower = ((st as any).KGOLintel ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).KGOLklass ?? 0) === 'Archer') {
              scene.actions([
                { label: 'Attack', handler: (st: GameState) => {
    (st as any).KGOLpower = ((st as any).KGOLspeed ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).KGOLklass ?? 0) === 'Barbarian') {
                if (((s as any).KGOLdist ?? 0) < 2) {
                  scene.actions([
                    { label: 'Attack', handler: (st: GameState) => {
    (st as any).KGOLpower = ((st as any).KGOLstren ?? 0) + ((st as any).KGOLwpower ?? 0);
    qspCall(st, 'KGOLexpa', 'KGOLatk');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } },
                  ]);
                }
              }
            }
          }
        }
      }
    }
    if (((s as any).KGOLdist ?? 0) > 0) {
      scene.actions([
        { label: 'Run towards the enemy', handler: (st: GameState) => {
    (st as any).KGOLdist = ((st as any).KGOLdist ?? 0) - ((Math.floor(Math.random() * (((st as any).KGOLspeed ?? 0)/10 - ((st as any).KGOLspeed ?? 0)/20 + 1)) + (((st as any).KGOLspeed ?? 0)/20)));
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    if (((s as any).KGOLpotionH ?? 0) > 0) {
      scene.actions([
        { label: 'Drink a health potion', handler: (st: GameState) => {
    (st as any).KGOLpotionH = ((st as any).KGOLpotionH ?? 0) - (1);
    (st as any).KGHP = ((st as any).KGHP ?? 0) + (100);
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    if (((s as any).KGOLpotionM ?? 0) > 0) {
      scene.actions([
        { label: 'Drink a mana potion', handler: (st: GameState) => {
    (st as any).KGOLpotionM = ((st as any).KGOLpotionM ?? 0) - (1);
    (st as any).KGMana = ((st as any).KGMana ?? 0) + (100);
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    scene.actions([
      { label: 'Flee from the enemy', handler: (st: GameState) => {
    (st as any).KGOLdist = ((st as any).KGOLdist ?? 0) + ((Math.floor(Math.random() * (((st as any).KGOLspeed ?? 0)/10 - ((st as any).KGOLspeed ?? 0)/20 + 1)) + (((st as any).KGOLspeed ?? 0)/20)));
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } else {
    scene.text('Opponent\'s turn');
    if (((s as any).KGOLdist ?? 0) <= ((s as any).KGOLneedDist ?? 0)) {
      scene.text(`${((s as any).KGname ?? '')} attacks you.`);
      qspCall(s, 'KGOLexpa', 'KGOLatkV');
    } else {
      (s as any).KGOLdist = ((s as any).KGOLdist ?? 0) - ((Math.floor(Math.random() * (((s as any).KGOLspeedV ?? 0)/10 - ((s as any).KGOLspeedV ?? 0)/20 + 1)) + (((s as any).KGOLspeedV ?? 0)/20)));
      scene.text(`${((s as any).KGname ?? '')} moves towards you.`);
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'curloc');
  } },
    ]);
  }
  scene.build();
}

export const KGOLfight: LocationDef = {
  name: 'KGOLfight',
  title: 'You are invisible.',
  region: 'kgd',
  description: ['You are invisible.'],
  enter: enter,
};
