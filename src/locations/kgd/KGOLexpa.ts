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
  (s as any).KGOLzasV = (Math.floor(Math.random() * (((s as any).KGOLspeedV ?? 0) - ((s as any).KGOLspeedV ?? 0) / 4 + 1)) + (((s as any).KGOLspeedV ?? 0) / 4));
  (s as any).KGOLataka = (Math.floor(Math.random() * (((s as any).KGOLspeed ?? 0) * 2 - ((s as any).KGOLspeed ?? 0) / 2 + 1)) + (((s as any).KGOLspeed ?? 0) / 2));
  if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0)) {
    if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).KGOLpower ?? 0) - ((s as any).KGOLpower ?? 0) / 2 + 1)) + (((s as any).KGOLpower ?? 0) / 2));
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`You deal ${((s as any).KGHPnpow ?? '')} damage`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).KGOLpower ?? 0) / 4 - ((s as any).KGOLpower ?? 0) / 10 + 1)) + (((s as any).KGOLpower ?? 0) / 10));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).KGOLbronaV ?? 0);
      if (((s as any).KGHPntpow ?? 0) <= 0) {
        (s as any).KGHPntpow = 1;
      }
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`<center><b>The enemy's armor protects them and you deal ${((s as any).KGHPnpow ?? '')} damage instead</b></center>`);
    }
  } else {
    scene.text(`${((s as any).KGname ?? '')} dodged your attack`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatkPoison(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLzasV = (Math.floor(Math.random() * (((s as any).KGOLspeedV ?? 0) - ((s as any).KGOLspeedV ?? 0) / 4 + 1)) + (((s as any).KGOLspeedV ?? 0) / 4));
  (s as any).KGOLataka = (Math.floor(Math.random() * (((s as any).KGOLspeed ?? 0) * 2 - ((s as any).KGOLspeed ?? 0) / 2 + 1)) + (((s as any).KGOLspeed ?? 0) / 2));
  if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0)) {
    (s as any).poison = ((s as any).poison ?? 0) + (((s as any).KGOLspell4 ?? 0) + 1);
    if (((s as any).KGOLataka ?? 0) >= ((s as any).KGOLzasV ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).KGOLpower ?? 0) - ((s as any).KGOLpower ?? 0) / 2 + 1)) + (((s as any).KGOLpower ?? 0) / 2));
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`You deal ${((s as any).KGHPnpow ?? '')} damage`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).KGOLpower ?? 0) / 4 - ((s as any).KGOLpower ?? 0)/10 + 1)) + (((s as any).KGOLpower ?? 0)/10));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).KGOLbronaV ?? 0);
    }
    if (((s as any).KGHPntpow ?? 0) <= 0) {
      (s as any).KGHPntpow = 1;
      (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`<center><b>The enemy's armor protects them and you deal ${((s as any).KGHPnpow ?? '')} damage instead</b></center>`);
    }
  } else {
    scene.text(`${((s as any).KGname ?? '')} dodged your attack`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatkFB(s: GameState, scene: SceneBuilder): void {
  (s as any).KGHPV = ((s as any).KGHPV ?? 0) - (((s as any).KGOLpower ?? 0));
  scene.text(`Fireball inflicts ${((s as any).KGOLpower ?? '')} damage`);
  // TODO-QSP: end
  scene.build();
}

function enterKGOLatkV(s: GameState, scene: SceneBuilder): void {
  (s as any).KGOLzas = (Math.floor(Math.random() * (((s as any).KGOLspeed ?? 0) - ((s as any).KGOLspeed ?? 0)/4 + 1)) + (((s as any).KGOLspeed ?? 0)/4));
  (s as any).KGOLatakaV = (Math.floor(Math.random() * (((s as any).KGOLspeedV ?? 0) * 2 - ((s as any).KGOLspeedV ?? 0)/2 + 1)) + (((s as any).KGOLspeedV ?? 0)/2));
  if (((s as any).KGOLatakaV ?? 0) >= ((s as any).KGOLzas ?? 0)) {
    if (((s as any).KGOLatakaV ?? 0) >= ((s as any).KGOLzas ?? 0) * 2) {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).KGOLpowerV ?? 0) - ((s as any).KGOLpowerV ?? 0) / 2 + 1)) + (((s as any).KGOLpowerV ?? 0) / 2));
      (s as any).KGHP = ((s as any).KGHP ?? 0) - (((s as any).KGHPnpow ?? 0));
      scene.text(`You receive ${((s as any).KGHPnpow ?? '')} damage`);
    } else {
      (s as any).KGHPnpow = (Math.floor(Math.random() * (((s as any).KGOLpowerV ?? 0) / 4 - ((s as any).KGOLpowerV ?? 0)/10 + 1)) + (((s as any).KGOLpowerV ?? 0)/10));
      (s as any).KGHPntpow = ((s as any).KGHPnpow ?? 0) - ((s as any).KGOLbrona ?? 0);
      if (((s as any).KGHPntpow ?? 0) <= 0) {
        (s as any).KGHPntpow = 1;
      }
      (s as any).KGHP = ((s as any).KGHP ?? 0) - (((s as any).KGHPnpow ?? 0));
      // TODO-QSP: dynamic text: <font color="brown">Contact with <<KGHPnpow>></font>
      scene.text(`<font color="brown">Contact with ${((s as any).KGHPnpow ?? '')}</font>`);
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
  scene.text(`Strength: ${((s as any).KGOLstren ?? '')}`);
  // TODO-QSP: dynamic text: Speed: <<KGOLspeed>>
  scene.text(`Speed: ${((s as any).KGOLspeed ?? '')}`);
  // TODO-QSP: dynamic text: Endurance: <<KGOLvital>>
  scene.text(`Endurance: ${((s as any).KGOLvital ?? '')}`);
  // TODO-QSP: dynamic text: Intelligence: <<KGOLintel>>
  scene.text(`Intelligence: ${((s as any).KGOLintel ?? '')}`);
  // TODO-QSP: dynamic text: Upgrade points available: <<KGOLpoint>>
  scene.text(`Upgrade points available: ${((s as any).KGOLpoint ?? '')}`);
  if (((s as any).KGOLpoint ?? 0) > 0) {
    scene.actions([
      { label: 'Improve your strength', handler: (st: GameState) => {
    (st as any).KGOLstren = ((st as any).KGOLstren ?? 0) + (1);
    (st as any).KGOLpoint = ((st as any).KGOLpoint ?? 0) - (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKGOLrise(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Improve your speed', handler: (st: GameState) => {
    (st as any).KGOLspeed = ((st as any).KGOLspeed ?? 0) + (1);
    (st as any).KGOLpoint = ((st as any).KGOLpoint ?? 0) - (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKGOLrise(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Improve your endurance', handler: (st: GameState) => {
    (st as any).KGOLvital = ((st as any).KGOLvital ?? 0) + (1);
    (st as any).KGOLpoint = ((st as any).KGOLpoint ?? 0) - (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKGOLrise(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
      { label: 'Improve your intelligence', handler: (st: GameState) => {
    (st as any).KGOLintel = ((st as any).KGOLintel ?? 0) + (1);
    (st as any).KGOLpoint = ((st as any).KGOLpoint ?? 0) - (1);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterKGOLrise(st, scene); (st as any).locArgs = __savedLocArgs; }
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
  scene.text(`Skill points available: ${((s as any).KGOLspellpoint ?? '')/4}`);
  if (((s as any).KGOLspellpoint ?? 0) >= 4) {
    if (((s as any).KGOLklass ?? 0) === 'Warrior') {
      // TODO-QSP: dynamic text: Powerful Strike = <<KGOLspell>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell +...
      scene.text(`Powerful Strike = ${((s as any).KGOLspell ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
      // TODO-QSP: dynamic text: Multiple Blows = <<KGOLspell2>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell2 ...
      scene.text(`Multiple Blows = ${((s as any).KGOLspell2 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell2 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
      // TODO-QSP: dynamic text: Increased Armor = <<KGOLspell3>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell3...
      scene.text(`Increased Armor = ${((s as any).KGOLspell3 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell3 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
    } else {
      if (((s as any).KGOLklass ?? 0) === 'Rogue') {
        // TODO-QSP: dynamic text: Stealth Strike = <<KGOLspell4>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell4 ...
        scene.text(`Stealth Strike = ${((s as any).KGOLspell4 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell4 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
        // TODO-QSP: dynamic text: Poison Blade = <<KGOLspell5>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell5 +=...
        scene.text(`Poison Blade = ${((s as any).KGOLspell5 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell5 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
        // TODO-QSP: dynamic text: Invisibility = <<KGOLspell6>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell6 +=...
        scene.text(`Invisibility = ${((s as any).KGOLspell6 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell6 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
      } else {
        if (((s as any).KGOLklass ?? 0) === 'Mage') {
          // TODO-QSP: dynamic text: Fireball = <<KGOLspell7>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell7 += 1 &...
          scene.text(`Fireball = ${((s as any).KGOLspell7 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell7 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
          // TODO-QSP: dynamic text: Kinetic Pulse = <<KGOLspell8>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell8 +...
          scene.text(`Kinetic Pulse = ${((s as any).KGOLspell8 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell8 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
          // TODO-QSP: dynamic text: Circle of Fire = <<KGOLspell9>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell9 ...
          scene.text(`Circle of Fire = ${((s as any).KGOLspell9 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell9 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
        } else {
          if (((s as any).KGOLklass ?? 0) === 'Priest') {
            // TODO-QSP: dynamic text: Divine Strike = <<KGOLspell10>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell10...
            scene.text(`Divine Strike = ${((s as any).KGOLspell10 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell10 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
            // TODO-QSP: dynamic text: Healing = <<KGOLspell11>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell11 += 1 ...
            scene.text(`Healing = ${((s as any).KGOLspell11 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell11 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
            // TODO-QSP: dynamic text: Divine Protection = <<KGOLspell12>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspe...
            scene.text(`Divine Protection = ${((s as any).KGOLspell12 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell12 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
          } else {
            if (((s as any).KGOLklass ?? 0) === 'Archer') {
              // TODO-QSP: dynamic text: Powerful Shot = <<KGOLspell13>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell13...
              scene.text(`Powerful Shot = ${((s as any).KGOLspell13 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell13 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
              // TODO-QSP: dynamic text: Triple Shot = <<KGOLspell14>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell14 +...
              scene.text(`Triple Shot = ${((s as any).KGOLspell14 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell14 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
              // TODO-QSP: dynamic text: Regen Mana = <<KGOLspell15>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell15 +=...
              scene.text(`Regen Mana = ${((s as any).KGOLspell15 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell15 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
            } else {
              if (((s as any).KGOLklass ?? 0) === 'Barbarian') {
                // TODO-QSP: dynamic text: Thunderbolt = <<KGOLspell16>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell16 +...
                scene.text(`Thunderbolt = ${((s as any).KGOLspell16 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell16 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
                // TODO-QSP: dynamic text: Stun = <<KGOLspell17>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell17 += 1 & g...
                scene.text(`Stun = ${((s as any).KGOLspell17 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell17 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
                // TODO-QSP: dynamic text: Recovery = <<KGOLspell18>>. <a href="exec:KGOLspellpoint -= 4 & KGOLspell18 += 1...
                scene.text(`Recovery = ${((s as any).KGOLspell18 ?? '')}. <a href="#" onclick="window.__gameStore.setState((s) => { s.KGOLspellpoint -=s.4; s.KGOLspell18 +=s.1; return s; }); window.__gameStore.getState().doGoto(/u0027KGOLexpa/u0027, /u0027KGOLrise2/u0027); return false;">Spend a skill point</a>`);
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterKGOLatk(s, scene); (s as any).locArgs = __savedLocArgs; }
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
  title: 'You deal  damage',
  region: 'kgd',
  enter: enter,
};
