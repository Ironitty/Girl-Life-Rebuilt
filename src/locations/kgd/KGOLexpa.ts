import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLneedExpNextLvl = (((s as any).KGOLlvl ?? 0) * 10) * ((s as any).KGOLlvl ?? 0);
  (s as any).KGOLneedExp = ((s as any).KGOLneedExpNextLvl ?? 0) - ((s as any).KGOLexp ?? 0);
  if (((s as any).KGOLneedExp ?? 0) <= 0  &&  ((s as any).KGOLlvl ?? 0) > ((s as any).KGOLlvlr ?? 0)) {
    (s as any).KGOLlvlr = ((s as any).KGOLlvl ?? 0);
    (s as any).KGOLpoint = ((s as any).KGOLpoint ?? 0) + (10);
    (s as any).KGOLspellpoint = ((s as any).KGOLspellpoint ?? 0) + (1);
    (s as any).KGOLlvl = ((s as any).KGOLlvl ?? 0) + (1);
    (s as any).KGOLexp = 0;
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatk(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLzasV = (Math.floor(Math.random() * (KGOLspeedV - KGOLspeedV / 4 + 1)) + (KGOLspeedV / 4));
  (s as any).KGOLataka = (Math.floor(Math.random() * (KGOLspeed * 2 - KGOLspeed / 2 + 1)) + (KGOLspeed / 2));
  if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0)) {
    if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (KGOLpower - KGOLpower / 2 + 1)) + (KGOLpower / 2));
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`You deal ${((s as any).KGHPnpow ?? 0)} damage`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (KGOLpower / 4 - KGOLpower / 10 + 1)) + (KGOLpower / 10));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).KGOLbronaV ?? 0);
      if (((s as any).KGHPntpow ?? 0) <= 0) {
        (s as any).KGHPntpow = 1;
      }
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`<center><b>The enemy's armor protects them and you deal ${((s as any).KGHPnpow ?? 0)} damage instead</b></center>`);
    }
  } else {
    scene.text(`${((s as any).KGname ?? 0)} dodged your attack`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatkPoison(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLzasV = (Math.floor(Math.random() * (KGOLspeedV - KGOLspeedV / 4 + 1)) + (KGOLspeedV / 4));
  (s as any).KGOLataka = (Math.floor(Math.random() * (KGOLspeed * 2 - KGOLspeed / 2 + 1)) + (KGOLspeed / 2));
  if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0)) {
    (s as any).poison = ((s as any).poison ?? 0) + (((s as any).KGOLspell4 ?? 0) + 1);
    if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (KGOLpower - KGOLpower / 2 + 1)) + (KGOLpower / 2));
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`You deal ${((s as any).KGHPnpow ?? 0)} damage`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (KGOLpower / 4 - KGOLpower/10 + 1)) + (KGOLpower/10));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).KGOLbronaV ?? 0);
    }
    if (((s as any).KGHPntpow ?? 0) <= 0) {
      (s as any).KGHPntpow = 1;
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`<center><b>The enemy's armor protects them and you deal ${((s as any).KGHPnpow ?? 0)} damage instead</b></center>`);
    }
  } else {
    scene.text(`${((s as any).KGname ?? 0)} dodged your attack`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatkFB(s: GameState, scene: SceneBuilder): void {
  (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGOLpower ?? 0));
  scene.text(`Fireball inflicts ${((s as any).KGOLpower ?? 0)} damage`);
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatkV(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLzas = (Math.floor(Math.random() * (KGOLspeed - KGOLspeed/4 + 1)) + (KGOLspeed/4));
  (s as any).KGOLatakaV = (Math.floor(Math.random() * (KGOLspeedV * 2 - KGOLspeedV/2 + 1)) + (KGOLspeedV/2));
  if (((s as any).KGOLatakaV ?? 0) >= ((s as any).KGOLzas ?? 0)) {
    if (((s as any).KGOLatakaV ?? 0) >= ((s as any).KGOLzas ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (KGOLpowerV - KGOLpowerV / 2 + 1)) + (KGOLpowerV / 2));
      (s as any).KGHP = ((s as any).KGHP ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`You receive ${((s as any).KGHPnpow ?? 0)} damage`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (KGOLpowerV / 4 - KGOLpowerV/10 + 1)) + (KGOLpowerV/10));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).KGOLbrona ?? 0);
      if (((s as any).KGHPntpow ?? 0) <= 0) {
        (s as any).KGHPntpow = 1;
      }
      (s as any).KGHP = ((s as any).KGHP ?? 0) - (((s as any).KGHPnpow ?? 0));
      // TODO-QSP: dynamic text: <font color="brown">Contact with <<KGHPnpow>></font>
      scene.text(`<font color="brown">Contact with ${((s as any).KGHPnpow ?? 0)}</font>`);
    }
  } else {
    scene.text('You dodge the attack');
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGOLrise(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Character Stats</b></center>');
  // TODO-QSP: dynamic text: Strength: <<KGOLstren>>
  scene.text(`Strength: ${((s as any).KGOLstren ?? 0)}`);
  // TODO-QSP: dynamic text: Speed: <<KGOLspeed>>
  scene.text(`Speed: ${((s as any).KGOLspeed ?? 0)}`);
  // TODO-QSP: dynamic text: Endurance: <<KGOLvital>>
  scene.text(`Endurance: ${((s as any).KGOLvital ?? 0)}`);
  // TODO-QSP: dynamic text: Intelligence: <<KGOLintel>>
  scene.text(`Intelligence: ${((s as any).KGOLintel ?? 0)}`);
  // TODO-QSP: dynamic text: Upgrade points available: <<KGOLpoint>>
  scene.text(`Upgrade points available: ${((s as any).KGOLpoint ?? 0)}`);
  if (((s as any).KGOLpoint ?? 0) > 0) {
    scene.actions([
      { label: 'Improve your strength', handler: (st: GameState) => {
    (s as any).KGOLstren = ((s as any).KGOLstren ?? 0) + (1);
    (s as any).KGOLpoint = ((s as any).KGOLpoint ?? 0) - (1);
    qspCall(s, 'KGOLexpa', 'KGOLrise');
  } },
      { label: 'Improve your speed', handler: (st: GameState) => {
    (s as any).KGOLspeed = ((s as any).KGOLspeed ?? 0) + (1);
    (s as any).KGOLpoint = ((s as any).KGOLpoint ?? 0) - (1);
    qspCall(s, 'KGOLexpa', 'KGOLrise');
  } },
      { label: 'Improve your endurance', handler: (st: GameState) => {
    (s as any).KGOLvital = ((s as any).KGOLvital ?? 0) + (1);
    (s as any).KGOLpoint = ((s as any).KGOLpoint ?? 0) - (1);
    qspCall(s, 'KGOLexpa', 'KGOLrise');
  } },
      { label: 'Improve your intelligence', handler: (st: GameState) => {
    (s as any).KGOLintel = ((s as any).KGOLintel ?? 0) + (1);
    (s as any).KGOLpoint = ((s as any).KGOLpoint ?? 0) - (1);
    qspCall(s, 'KGOLexpa', 'KGOLrise');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the stats screen', goto: ['KGOLgame', ''] },
  ]);
  scene.build();
}

function enterKGOLrise2(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>Character Skills</b></center>');
  // TODO-QSP: dynamic text: Skill points available: <<KGOLspellpoint/4>>
  scene.text(`Skill points available: ${((s as any).KGOLspellpoint ?? 0)/4}`);
  if (((s as any).KGOLspellpoint ?? 0) >= 4) {
    if (((s as any).KGOLklass ?? 0) === 'Warrior') {
      // TODO-QSP: dynamic text: Powerful Strike = <<KGOLspell>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell +...
      scene.text(`Powerful Strike = ${((s as any).KGOLspell ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
      // TODO-QSP: dynamic text: Multiple Blows = <<KGOLspell2>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell2 ...
      scene.text(`Multiple Blows = ${((s as any).KGOLspell2 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell2 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
      // TODO-QSP: dynamic text: Increased Armor = <<KGOLspell3>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell3...
      scene.text(`Increased Armor = ${((s as any).KGOLspell3 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell3 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
    } else {
      if (((s as any).KGOLklass ?? 0) === 'Rogue') {
        // TODO-QSP: dynamic text: Stealth Strike = <<KGOLspell4>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell4 ...
        scene.text(`Stealth Strike = ${((s as any).KGOLspell4 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell4 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
        // TODO-QSP: dynamic text: Poison Blade = <<KGOLspell5>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell5 +=...
        scene.text(`Poison Blade = ${((s as any).KGOLspell5 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell5 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
        // TODO-QSP: dynamic text: Invisibility = <<KGOLspell6>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell6 +=...
        scene.text(`Invisibility = ${((s as any).KGOLspell6 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell6 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
      } else {
        if (((s as any).KGOLklass ?? 0) === 'Mage') {
          // TODO-QSP: dynamic text: Fireball = <<KGOLspell7>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell7 += 1 &...
          scene.text(`Fireball = ${((s as any).KGOLspell7 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell7 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
          // TODO-QSP: dynamic text: Kinetic Pulse = <<KGOLspell8>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell8 +...
          scene.text(`Kinetic Pulse = ${((s as any).KGOLspell8 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell8 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
          // TODO-QSP: dynamic text: Circle of Fire = <<KGOLspell9>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell9 ...
          scene.text(`Circle of Fire = ${((s as any).KGOLspell9 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell9 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
        } else {
          if (((s as any).KGOLklass ?? 0) === 'Priest') {
            // TODO-QSP: dynamic text: Divine Strike = <<KGOLspell10>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell10...
            scene.text(`Divine Strike = ${((s as any).KGOLspell10 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell10 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
            // TODO-QSP: dynamic text: Healing = <<KGOLspell11>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell11 += 1 ...
            scene.text(`Healing = ${((s as any).KGOLspell11 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell11 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
            // TODO-QSP: dynamic text: Divine Protection = <<KGOLspell12>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspe...
            scene.text(`Divine Protection = ${((s as any).KGOLspell12 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell12 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
          } else {
            if (((s as any).KGOLklass ?? 0) === 'Archer') {
              // TODO-QSP: dynamic text: Powerful Shot = <<KGOLspell13>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell13...
              scene.text(`Powerful Shot = ${((s as any).KGOLspell13 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell13 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
              // TODO-QSP: dynamic text: Triple Shot = <<KGOLspell14>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell14 +...
              scene.text(`Triple Shot = ${((s as any).KGOLspell14 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell14 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
              // TODO-QSP: dynamic text: Regen Mana = <<KGOLspell15>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell15 +=...
              scene.text(`Regen Mana = ${((s as any).KGOLspell15 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell15 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
            } else {
              if (((s as any).KGOLklass ?? 0) === 'Barbarian') {
                // TODO-QSP: dynamic text: Thunderbolt = <<KGOLspell16>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell16 +...
                scene.text(`Thunderbolt = ${((s as any).KGOLspell16 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell16 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
                // TODO-QSP: dynamic text: Stun = <<KGOLspell17>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell17 += 1 & g...
                scene.text(`Stun = ${((s as any).KGOLspell17 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell17 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
                // TODO-QSP: dynamic text: Recovery = <<KGOLspell18>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell18 += 1...
                scene.text(`Recovery = ${((s as any).KGOLspell18 ?? 0)}. <a href="exec:KGOLspellpoint -= 4 & KGOLspell18 += 1 & gs 'KGOLexpa', 'KGOLrise2'">Spend a skill point</a>`);
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Exit the skills screen', goto: ['KGOLgame', ''] },
  ]);
  scene.build();
}

function enterKGOLatkKGOLspell2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: :multiloop
  qspCall(s, 'KGOLexpa', 'KGOLatk');
  (s as any).KGLOloop = ((s as any).KGLOloop ?? 0) - (1);
  if (((s as any).KGLOloop ?? 0) > 0) {
    // TODO-QSP: jump 'multiloop'
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'KGOLatk':
      enterKGOLatk(s, scene);
      break;
    case 'KGOLatkPoison':
      enterKGOLatkPoison(s, scene);
      break;
    case 'KGOLatkFB':
      enterKGOLatkFB(s, scene);
      break;
    case 'KGOLatkV':
      enterKGOLatkV(s, scene);
      break;
    case 'KGOLrise':
      enterKGOLrise(s, scene);
      break;
    case 'KGOLrise2':
      enterKGOLrise2(s, scene);
      break;
    case 'KGOLatkKGOLspell2':
      enterKGOLatkKGOLspell2(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const KGOLexpa: LocationDef = {
  name: 'KGOLexpa',
  title: 'You deal <<KGHPnpow>> damage',
  region: 'kgd',
  enter: enter,
};
