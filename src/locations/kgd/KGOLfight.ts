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
    // TODO-QSP: dynamic text: Your poison blade causes <<KGOLspell4 * 10>> damage to the enemy.
    scene.text(`Your poison blade causes ${((s as any).KGOLspell4 ?? 0) * 10} damage to the enemy.`);
  }
  if (((s as any).firecircle ?? 0) > 0) {
    (s as any).firecircle = ((s as any).firecircle ?? 0) - (1);
    (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGOLspell9 ?? 0) * 50);
    // TODO-QSP: dynamic text: Circle of Fire causes <<KGOLspell9 * 50>> damage to the enemy.
    scene.text(`Circle of Fire causes ${((s as any).KGOLspell9 ?? 0) * 50} damage to the enemy.`);
  }
  // TODO-QSP: dynamic text: <<$KGOLname>>
  scene.text(`${((s as any).KGOLname ?? 0)}`);
  // TODO-QSP: dynamic text: Health: <<KGHP>>
  scene.text(`Health: ${((s as any).KGHP ?? 0)}`);
  // TODO-QSP: dynamic text: Mana: <<KGMana>>
  scene.text(`Mana: ${((s as any).KGMana ?? 0)}`);
  // TODO-QSP: dynamic text: <<$KGname>>
  scene.text(`${((s as any).KGname ?? 0)}`);
  // TODO-QSP: dynamic text: Health: <<KGHPV>>
  scene.text(`Health: ${((s as any).KGHPV ?? 0)}`);
  // TODO-QSP: dynamic text: Mana: <<KGManaV>>
  scene.text(`Mana: ${((s as any).KGManaV ?? 0)}`);
  if (((s as any).KGOLhirka ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your rejuvenation tonic will automatically restore up to <<KGOLhirka>> health.
    scene.text(`Your rejuvenation tonic will automatically restore up to ${((s as any).KGOLhirka ?? 0)} health.`);
  }
  // TODO-QSP: dynamic text: Distance: <<KGOLdist>> meter(s)
  scene.text(`Distance: ${((s as any).KGOLdist ?? 0)} meter(s)`);
  if (((s as any).KGOLtimer ?? 0) > 0) {
    // TODO-QSP: dynamic text: Divine Protection will last for <<KGOLtimer>> more rounds.
    scene.text(`Divine Protection will last for ${((s as any).KGOLtimer ?? 0)} more rounds.`);
  }
  if (((s as any).KGOLcooldown ?? 0) > 0) {
    // TODO-QSP: dynamic text: Your skill(s) will finish cooldown in <<KGOLcooldown>> rounds.
    scene.text(`Your skill(s) will finish cooldown in ${((s as any).KGOLcooldown ?? 0)} rounds.`);
  }
  if (((s as any).KGHP ?? 0) <= 0) {
    (s as any).KGOLloss = ((s as any).KGOLloss ?? 0) + (1);
    (s as any).poison = 0;
    (s as any).firecircle = 0;
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) - (100);
    scene.text('You have lost the fight.');
    return;
    scene.actions([
      { label: 'Continue', goto: ['KGOLgame', ''] },
    ]);
  }
  if (((s as any).KGHPV ?? 0) <= 0) {
    (s as any).poison = 0;
    (s as any).firecircle = 0;
    (s as any).KGOLWin = ((s as any).KGOLWin ?? 0) + (1);
    (s as any).KGOLmoney = ((s as any).KGOLmoney ?? 0) + (((s as any).KGOLPrizeM ?? 0));
    (s as any).KGOLexp = ((s as any).KGOLexp ?? 0) + (((s as any).KGOLPrizeExp ?? 0));
    (s as any).pcs_mana = ((s as any).pcs_mana ?? 0) + (100);
    // TODO-QSP: dynamic text: <<$KGname>> has fallen.
    scene.text(`${((s as any).KGname ?? 0)} has fallen.`);
    // TODO-QSP: dynamic text: You have won the fight and earned <<KGOLPrizeM>> coins and <<KGOLPrizeExp>> expe...
    scene.text(`You have won the fight and earned ${((s as any).KGOLPrizeM ?? 0)} coins and ${((s as any).KGOLPrizeExp ?? 0)} experience.`);
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
    return;
    scene.actions([
      { label: 'Disengage', goto: ['KGOLgame', ''] },
    ]);
  }
  (s as any).KGOLiniV = ((s as any).rand ?? 0)(((s as any).KGOLspeedV ?? 0) / 2, ((s as any).KGOLspeedV ?? 0) * 2);
  (s as any).KGOLini = ((s as any).rand ?? 0)(((s as any).KGOLspeed ?? 0) / 2, ((s as any).KGOLspeed ?? 0) * 2);
  if (((s as any).KGOLini ?? 0) === ((s as any).KGOLiniV ?? 0)) {
    (s as any).hodrand = Math.floor(Math.random() * 2) + 0;
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
            { label: 'Powerful Strike (<<KGOLspell * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell ?? 0));
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0)+(((s as any).KGOLspell ?? 0) * 100);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
            { label: 'Multiple Blows (<<KGOLspell2 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell2 ?? 0));
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0);
    (s as any).KGLOloop = ((s as any).KGOLspell2 ?? 0) + 1;
    qspCall(s, 'KGOLexpa', 'KGOLatkKGOLspell2');
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
            { label: 'Increase Armor (<<KGOLspell3 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell3 ?? 0));
    (s as any).KGOLbronaMod = ((s as any).KGOLbronaMod ?? 0) + (((s as any).KGOLspell3 ?? 0) * 5);
    (s as any).KGOLtimer = ((s as any).KGOLtimer ?? 0) + (((s as any).KGOLspell3 ?? 0) + 1);
    (s as any).KGOLcooldown = ((s as any).KGOLcooldown ?? 0) + (((s as any).KGOLspell3 ?? 0) + 3);
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
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
              { label: 'Stealth Strike (<<KGOLspell4 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell4 ?? 0));
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0)+(((s as any).KGOLspell5 ?? 0) * 100);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
              { label: 'Poison Blade (<<KGOLspell5 * 10>>mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell5 ?? 0));
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatkPoison');
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
              { label: 'Invisibility (<<KGOLspell6 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell6 ?? 0));
    (s as any).unvis = ((s as any).unvis ?? 0) + (((s as any).KGOLspell6 ?? 0) + 1);
    (s as any).KGOLcooldown = ((s as any).KGOLcooldown ?? 0) + (((s as any).KGOLspell6 ?? 0) + 3);
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
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
              { label: 'Fireball (<<KGOLspell7 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell7 ?? 0));
    (s as any).KGOLpower = ((s as any).rand ?? 0)(((s as any).KGOLspell7 ?? 0) * 100, ((s as any).KGOLspell7 ?? 0) * 200);
    qspCall(s, 'KGOLexpa', 'KGOLatkFB');
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
              { label: 'Kinetic Pulse (<<KGOLspell5 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell5 ?? 0));
    (s as any).KGOLdist = ((s as any).KGOLdist ?? 0) + (((s as any).rand ?? 0)(((s as any).KGOLspell5 ?? 0) * 10, ((s as any).KGOLspell5 ?? 0) * 50));
    // TODO-QSP: dynamic text: A wave of energy bursts from within you, throwing the enemy back. The distance b...
    scene.text(`A wave of energy bursts from within you, throwing the enemy back. The distance between you is now ${((s as any).KGOLdist ?? 0)} meter(s).`);
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
              { label: 'Circle of Fire (<<KGOLspell9 * 10>> mana)', handler: (st: GameState) => {
    (s as any).KGMana = ((s as any).KGMana ?? 0) - (((s as any).KGOLspell9 ?? 0));
    (s as any).firecircle = ((s as any).firecircle ?? 0) + (((s as any).KGOLspell9 ?? 0) + 1);
    (s as any).KGOLcooldown = ((s as any).KGOLcooldown ?? 0) + (((s as any).KGOLspell9 ?? 0) + 3);
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
    (s as any).KGOLpower = ((s as any).KGOLintel ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
    (s as any).KGOLpower = ((s as any).KGOLintel ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
    (s as any).KGOLpower = ((s as any).KGOLspeed ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
    (s as any).KGOLpower = ((s as any).KGOLstren ?? 0) + ((s as any).KGOLwpower ?? 0);
    qspCall(s, 'KGOLexpa', 'KGOLatk');
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
    (s as any).KGOLdist = ((s as any).KGOLdist ?? 0) - (((s as any).rand ?? 0)(((s as any).KGOLspeed ?? 0)/20, ((s as any).KGOLspeed ?? 0)/10));
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    if (((s as any).KGOLpotionH ?? 0) > 0) {
      scene.actions([
        { label: 'Drink a health potion', handler: (st: GameState) => {
    (s as any).KGOLpotionH = ((s as any).KGOLpotionH ?? 0) - (1);
    (s as any).KGHP = ((s as any).KGHP ?? 0) + (100);
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    if (((s as any).KGOLpotionM ?? 0) > 0) {
      scene.actions([
        { label: 'Drink a mana potion', handler: (st: GameState) => {
    (s as any).KGOLpotionM = ((s as any).KGOLpotionM ?? 0) - (1);
    (s as any).KGMana = ((s as any).KGMana ?? 0) + (100);
    dynamicGoto(st, 'curloc');
  } },
      ]);
    }
    scene.actions([
      { label: 'Flee from the enemy', handler: (st: GameState) => {
    (s as any).KGOLdist = ((s as any).KGOLdist ?? 0) + (((s as any).rand ?? 0)(((s as any).KGOLspeed ?? 0)/20, ((s as any).KGOLspeed ?? 0)/10));
    dynamicGoto(st, 'curloc');
  } },
    ]);
  } else {
    scene.text('Opponent\'s turn');
    if (((s as any).KGOLdist ?? 0) <= ((s as any).KGOLneedDist ?? 0)) {
      // TODO-QSP: dynamic text: <<$KGname>> attacks you.
      scene.text(`${((s as any).KGname ?? 0)} attacks you.`);
      qspCall(s, 'KGOLexpa', 'KGOLatkV');
    } else {
      (s as any).KGOLdist = ((s as any).KGOLdist ?? 0) - (((s as any).rand ?? 0)(((s as any).KGOLspeedV ?? 0)/20, ((s as any).KGOLspeedV ?? 0)/10));
      // TODO-QSP: dynamic text: <<$KGname>> moves towards you.
      scene.text(`${((s as any).KGname ?? 0)} moves towards you.`);
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
