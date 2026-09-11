import { qspUntranslated } from '../_shared/qspUntranslated';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NPCFS_Team ?? 0) === '') {
  }
  (s as any).NPCFS_TeamSlot = 0;
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    (s as any).NPCFS_Value = qspUntranslated(s, "ARGS[1]", { location: "fight_npcdata" });
    // TODO-QSP: dynamic '<<$NPCFS_Team>>_<<$NPCFS_Attrib>>[<<NPCFS_TeamSlot>>] = <<NPCFS_Value>>'
  } else {
    // TODO-QSP: dynamic '$<<$NPCFS_Team>>_<<$NPCFS_Attrib>>[<<NPCFS_TeamSlot>>] = ''<<$NPCFS_Value>>'''
  }
  (s as any).NPCFightStatStr = 0;
  (s as any).NPCFightStatVit = 0;
  (s as any).result = 5 * (((s as any).NPCFightStatStr ?? 0) + ((s as any).NPCFightStatVit ?? 0));
  scene.build();
}

function enterGustav(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 2;
  // TODO-QSP: end
  scene.build();
}

function enterTatiana(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 3;
  // TODO-QSP: end
  scene.build();
}

function enterProstitute(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 4;
  // TODO-QSP: end
  scene.build();
}

function enterBandit(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 5;
  // TODO-QSP: end
  scene.build();
}

function enterProstitute2(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 6;
  // TODO-QSP: end
  scene.build();
}

function enterRapist(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 8;
  // TODO-QSP: end
  scene.build();
}

function enterRobber(s: GameState, scene: SceneBuilder): void {
  if ((Math.floor(Math.random() * 11) + 0) < 5) {
    (s as any).fightEnding = 8;
  } else {
    (s as any).fightEnding = 9;
  }
  // TODO-QSP: end
  scene.build();
}

function enterSnatcher(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 9;
  // TODO-QSP: end
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 10;
  // TODO-QSP: end
  scene.build();
}

function enterStranger(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 11;
  // TODO-QSP: end
  scene.build();
}

function enterChristina(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 12;
  // TODO-QSP: end
  scene.build();
}

function enterStallion(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 13;
  // TODO-QSP: end
  scene.build();
}

function enterGanggirl(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 14;
  // TODO-QSP: end
  scene.build();
}

function enterGirls(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 14;
  // TODO-QSP: end
  scene.build();
}

function enterSilvestr(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 15;
  // TODO-QSP: end
  scene.build();
}

function enterBitchSquad(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 16;
  // TODO-QSP: end
  scene.build();
}

function enterBtatiana(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 17;
  // TODO-QSP: end
  scene.build();
}

function enterSandbaggingana(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 18;
  // TODO-QSP: end
  scene.build();
}

function enterAnagopniks(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 19;
  // TODO-QSP: end
  scene.build();
}

function enterBossana(s: GameState, scene: SceneBuilder): void {
  (s as any).fightEnding = 20;
  // TODO-QSP: end
  scene.build();
}

function enterGopnews_1(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGopnews_2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGopnews_3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGopnews_4(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGopnews_5(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterGopnews_6(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterLena(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterLera(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRandomGopfem(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.build();
}

function enterRandomGopmale(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  if (((s as any).locArgs?.[2] ?? 0) !== '') {
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'gustav':
      enterGustav(s, scene);
      break;
    case 'tatiana':
      enterTatiana(s, scene);
      break;
    case 'prostitute':
      enterProstitute(s, scene);
      break;
    case 'bandit':
      enterBandit(s, scene);
      break;
    case 'prostitute2':
      enterProstitute2(s, scene);
      break;
    case 'rapist':
      enterRapist(s, scene);
      break;
    case 'robber':
      enterRobber(s, scene);
      break;
    case 'snatcher':
      enterSnatcher(s, scene);
      break;
    case 'dimka':
      enterDimka(s, scene);
      break;
    case 'stranger':
      enterStranger(s, scene);
      break;
    case 'christina':
      enterChristina(s, scene);
      break;
    case 'stallion':
      enterStallion(s, scene);
      break;
    case 'ganggirl':
      enterGanggirl(s, scene);
      break;
    case 'girls':
      enterGirls(s, scene);
      break;
    case 'silvestr':
      enterSilvestr(s, scene);
      break;
    case 'bitch squad':
      enterBitchSquad(s, scene);
      break;
    case 'btatiana':
      enterBtatiana(s, scene);
      break;
    case 'sandbaggingana':
      enterSandbaggingana(s, scene);
      break;
    case 'anagopniks':
      enterAnagopniks(s, scene);
      break;
    case 'bossana':
      enterBossana(s, scene);
      break;
    case 'gopnews_1':
      enterGopnews_1(s, scene);
      break;
    case 'gopnews_2':
      enterGopnews_2(s, scene);
      break;
    case 'gopnews_3':
      enterGopnews_3(s, scene);
      break;
    case 'gopnews_4':
      enterGopnews_4(s, scene);
      break;
    case 'gopnews_5':
      enterGopnews_5(s, scene);
      break;
    case 'gopnews_6':
      enterGopnews_6(s, scene);
      break;
    case 'lena':
      enterLena(s, scene);
      break;
    case 'lera':
      enterLera(s, scene);
      break;
    case 'random_gopfem':
      enterRandomGopfem(s, scene);
      break;
    case 'random_gopmale':
      enterRandomGopmale(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const fight_npcdata: LocationDef = {
  name: 'fight_npcdata',
  region: 'other',
  enter: enter,
};
