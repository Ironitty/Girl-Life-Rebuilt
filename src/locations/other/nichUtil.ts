import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('This page should never appear. Please report this bug including a description of how you got here.');
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  scene.text('This page should never appear. Please report this bug including a description of how you got here.');
  scene.build();
}

function enterDebug(s: GameState, scene: SceneBuilder): void {
  if (((s as any).settingmode ?? 0) > 0) {
    (s as any).settingmode = undefined;
    (s as any).menu_off = undefined;
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'debugToggle') {
    (s as any).nichDebug = 1 - ((s as any).nichDebug ?? 0);
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'galaTrainingToggle') {
      (s as any).nichGalaTraining = 1 - ((s as any).nichGalaTraining ?? 0);
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'chore') {
        if (String((s as any).locArgs?.[3] ?? '') === 'min') {
          ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[((s as any).locArgs?.[2] ?? 0)] = 0;
        } else {
          if (String((s as any).locArgs?.[3] ?? '') === '1') {
            ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((s as any).nichChoreState[((s as any).locArgs?.[2] ?? 0)] ?? 0) + (1);
          } else {
            if (String((s as any).locArgs?.[3] ?? '') === '5') {
              ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[((s as any).locArgs?.[2] ?? 0)] = ((s as any).nichChoreState[((s as any).locArgs?.[2] ?? 0)] ?? 0) + (5);
            }
          }
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'evaluation') {
          if (String((s as any).locArgs?.[2] ?? '') === 'silent') {
            qspCall(s, 'nichNicholas', 'evaluation', 'silent');
          }
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'shortcut') {
            if (String((s as any).locArgs?.[2] ?? '') === 'meetTanya') {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClearVars(s, scene); (s as any).locArgs = __savedLocArgs; }
              (s as any).abonement = 30;
              (s as any).nichWork = 0;
              ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 0;
              ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckCounter'] = 0;
              qspGoto(s, 'havana', 'start');
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'getHired') {
                (s as any).nichWork = 0;
                ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 1;
                (s as any).nichJobRefused = 0;
                ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckCounter'] = 10;
                (s as any).hour = 16;
                qspGoto(s, 'city_center', '');
              } else {
                if (String((s as any).locArgs?.[2] ?? '') === 'tanyaDate100') {
                  (s as any).nichWork = 2;
                  ((s as any).nichTanya = (s as any).nichTanya ?? {})['Relationship'] = 1;
                  ((s as any).nichTanya = (s as any).nichTanya ?? {})['FuckCounter'] = 10;
                  ((s as any).nichTanya = (s as any).nichTanya ?? {})['Dominance'] = 30;
                  ((s as any).nichTanya = (s as any).nichTanya ?? {})['Strapon'] = 0;
                  (s as any).nichGalaKnowsPT = 0;
                  (s as any).hour = 16;
                  (s as any).loc = 'nichBedroomTanja';
                  qspGoto(s, 'nichTanya', 'bedroomTanya');
                } else {
                  if (String((s as any).locArgs?.[2] ?? '') === 'nichGentleclubE1') {
                    (s as any).nichWork = 2;
                    (s as any).minut = 0;
                    (s as any).hour = 18;
                    (s as any).nichGentleclubDayE1 = ((s as any).daystart ?? 0);
                    (s as any).nichGentleclubE1 = 1;
                    qspGoto(s, 'nichApartment', '');
                  } else {
                    if (String((s as any).locArgs?.[2] ?? '') === 'galaContract') {
                      (s as any).nichGalaTraining = 1;
                      (s as any).nichGalaTrainCounter = 5;
                      (s as any).nichWork = 2;
                      (s as any).nichGalaContractActive = 0;
                      (s as any).nichGalaContract = 0;
                      (s as any).minut = 0;
                      (s as any).hour = 18;
                      qspGoto(s, 'nichApartment', '');
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
  scene.text('<center><b>Nicholas\' Apartment Storyline Debug</b></center>');
  scene.text('<i><b>Debug mode</b>: display debug messages and force random events to fire as often as possible</i>');
  if (((s as any).nichDebug ?? 0) === 1) {
    scene.text('Debug mode: <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027debugToggle\u0027); return false;">Enabled</a>');
  } else {
    scene.text('Debug mode: <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027debugToggle\u0027); return false;">Disabled</a>');
  }
  scene.text('<i><b>Shortcuts</b></i>');
  scene.text('<i>The following options will set and change a whole bunch of variables and might transport you to another place. Important: every shortcut has been created with a debug scenario in mind and won\'t set/reset every storyline-variable. Expect weird behavior.</i>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027shortcut\u0027); return false;">Meet Tanya</a>: Sets you up to meet Tanya. Go to the dressing room. She is the \'cute girl\'. Meeting her has a random chance unless you have activated debug mode.');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027shortcut\u0027); return false;">Get hired</a>: You visited Tanya often enough for her to offer you the job as the live-in maid.');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027shortcut\u0027); return false;">Tanya Special Date 1</a>: Tanya became somewhat dominant. Ask her for a date and let her decide where to go.');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027shortcut\u0027); return false;">Nicholas Club Event 1</a>: Nicholas has a special guest over. Meet him at his study.');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027shortcut\u0027); return false;">Gala Contract</a>: Gala offers a special contract. Meet her in the living room.');
  scene.text('<i><b>Job performance</b></i>');
  scene.text(`Overall performance (higher=better): ${((s as any).nichPerformance ?? '')}`);
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027evaluation\u0027); return false;">Get silent performance evaluation</a>');
  scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichNicholas\u0027, \u0027evaluation\u0027); return false;">Get detailed performance evaluation</a>');
  scene.text('<i><b>Chore state</b>: higher numbers are worse</i>');
  scene.text(`Hallway: ${(((s as any).nichChoreState ?? 0)?.[0] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Guest cloakroom: ${(((s as any).nichChoreState ?? 0)?.[1] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Maid bedroom: ${(((s as any).nichChoreState ?? 0)?.[2] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Maid bathroom: ${(((s as any).nichChoreState ?? 0)?.[3] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Laundry: ${(((s as any).nichChoreState ?? 0)?.[4] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Tanya bedroom: ${(((s as any).nichChoreState ?? 0)?.[5] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Master bathroom: ${(((s as any).nichChoreState ?? 0)?.[6] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Master bedroom: ${(((s as any).nichChoreState ?? 0)?.[7] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Living room: ${(((s as any).nichChoreState ?? 0)?.[8] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Kitchen: ${(((s as any).nichChoreState ?? 0)?.[9] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text(`Study: ${(((s as any).nichChoreState ?? 0)?.[10] ?? '')} <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">min</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+1</a> <a href="#" onclick="window.__gameStore.getState().doGoto(/u0027nichUtil/u0027, /u0027debug/u0027, /u0027chore/u0027); return false;">+5</a>`);
  scene.text('<i><b>NPCs</b></i>');
  scene.text('The following settings are meant for debugging only. Touching them will influence the intended progression in the story.');
  scene.text('<b>Gala</b>');
  if (((s as any).nichGalaTraining ?? 0) === 1) {
    scene.text('Gala Training: <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027galaTrainingToggle\u0027); return false;">Enabled</a>');
  } else {
    scene.text('Gala Training: <a href="#" onclick="window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027, \u0027galaTrainingToggle\u0027); return false;">Disabled</a>');
  }
  scene.text('<b>Tanya</b>');
  scene.text('Set relationship to:');
  scene.text('-<a href="#" onclick="window.__gameStore.setState((s) => { (s.nichTanya ??= {})\u0027Relationship\u0027 = 0; (s.nichTanya ??= {})\u0027RelationshipState\u0027 = 0; return s; }); window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027); return false;">Not together (and never have been)</a>');
  scene.text('-<a href="#" onclick="window.__gameStore.setState((s) => { (s.nichTanya ??= {})\u0027Relationship\u0027 = 0; (s.nichTanya ??= {})\u0027RelationshipState\u0027 = 1000; return s; }); window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027); return false;">Not together (you broke up)</a>');
  scene.text('-<a href="#" onclick="window.__gameStore.setState((s) => { (s.nichTanya ??= {})\u0027Relationship\u0027 = 0; (s.nichTanya ??= {})\u0027RelationshipState\u0027 = 1010; return s; }); window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027); return false;">Not together (Tanya broke up)</a>');
  scene.text('-<a href="#" onclick="window.__gameStore.setState((s) => { (s.nichTanya ??= {})\u0027Relationship\u0027 = 1; (s.nichTanya ??= {})\u0027RelationshipState\u0027 = 10; return s; }); window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027); return false;">Casually dating</a>');
  scene.text('-<a href="#" onclick="window.__gameStore.setState((s) => { (s.nichTanya ??= {})\u0027Relationship\u0027 = 1; (s.nichTanya ??= {})\u0027RelationshipState\u0027 = 20; return s; }); window.__gameStore.getState().doGoto(\u0027nichUtil\u0027, \u0027debug\u0027); return false;">In a relationship</a>');
  scene.text(`You fucked Tanya ${(((s as any).nichTanya ?? 0)?.['FuckCounter'] ?? '')} times`);
  scene.text('The last time you fucked Tanya was ' + (((s as any).daystart ?? '')-(((s as any).nichTanya ?? {})?.['FuckLast'] ?? 0)) + ' days ago');
  scene.text(`Tanya has a dominance of ${(((s as any).nichTanya ?? 0)?.['Dominance'] ?? '')} (range: -100 - 100)`);
  scene.actions([
    { label: 'DEBUG: New Workday', handler: (st: GameState) => {
    qspCall(st, 'nichUtil', '');
  } },
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
  ]);
  scene.build();
}

function enterStartWorkday(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichWorkState ?? 0) > 0  &&  ((s as any).week ?? 0) === 3  &&  ((s as any).nichVactionTil ?? 0) < ((s as any).daystart ?? 0)) {
    (s as any).nichVactionTil = ((s as any).daystart ?? 0);
  }
  (s as any).nichMissedWorkdays = ((s as any).daystart ?? 0) - ((s as any).nichLastWorkDay ?? 0) - 1;
  if (((s as any).nickHired ?? 0) + 1 === ((s as any).daystart ?? 0)) {
    (s as any).nichMissedWorkdays = 0;
  } else {
    if (((s as any).nichVactionTil ?? 0) + 1 === ((s as any).daystart ?? 0)) {
      (s as any).nichMissedWorkdays = ((s as any).nichMissedWorkdays ?? 0) - ((s as any).nichVactionTil ?? 0) + ((s as any).nichVacationFrom ?? 0) -1;
    } else {
      if (((s as any).nichVactionTil ?? 0) >= ((s as any).daystart ?? 0)  &&  ((s as any).nichVacationFrom ?? 0) <= ((s as any).daystart ?? 0)) {
        (s as any).nichMissedWorkdays = ((s as any).nichVacationFrom ?? 0) - ((s as any).nichLastWorkDay ?? 0) - 1;
      }
    }
  }
  if (((s as any).nichMissedWorkdays ?? 0) > 0) {
    (s as any).nichPerformance = ((s as any).nichPerformance ?? 0) - (40 * ((s as any).nichMissedWorkdays ?? 0));
    if (((s as any).nichPerformance ?? 0) <= 0) {
      (s as any).nichNote = 1;
    } else {
      (s as any).nichNote = 2;
    }
  } else {
    if (((s as any).daystart ?? 0) > ((s as any).nichEvaluationLastReq ?? 0)  &&  ((s as any).nichEvaluationLast ?? 0) < ((s as any).nichEvaluationLastReq ?? 0)) {
      qspCall(s, 'nichNicholas', 'evaluation', 'silent');
      (s as any).nichEvaluationLast = ((s as any).daystart ?? 0) - 1;
      (s as any).nichPerformance = ((s as any).nichPerformance ?? 0) - (20);
      if (((s as any).nichPerformance ?? 0) <= 0) {
        (s as any).nichNote = 11;
      } else {
        (s as any).nichNote = 12;
      }
    }
  }
  (s as any).nichLastWorkDay = ((s as any).daystart ?? 0);
  if (((s as any).nichWorkState ?? 0) > 0) {
    (s as any).nichEvaluationLastReq = 0;
  } else {
    if (((s as any).nichVactionTil ?? 0) >= ((s as any).daystart ?? 0)  &&  ((s as any).nichVacationFrom ?? 0) <= ((s as any).daystart ?? 0)) {
      (s as any).nichEvaluationLastReq = ((s as any).daystart ?? 0) + 1;
    } else {
      (s as any).nichEvaluationLastReq = ((s as any).daystart ?? 0);
    }
  }
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[0] = ((s as any).nichChoreState[0] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[1] = ((s as any).nichChoreState[1] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[2] = ((s as any).nichChoreState[2] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[3] = ((s as any).nichChoreState[3] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[4] = ((s as any).nichChoreState[4] ?? 0) + (5);
  if (((s as any).nichTanya ?? 0)?.['Room'] === 0) {
    ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[5] = ((s as any).nichChoreState[5] ?? 0) + (5);
  }
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[6] = ((s as any).nichChoreState[6] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[7] = ((s as any).nichChoreState[7] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[8] = ((s as any).nichChoreState[8] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[9] = ((s as any).nichChoreState[9] ?? 0) + (5);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[10] = ((s as any).nichChoreState[10] ?? 0) + (5);
  if (((s as any).day ?? 0) === 1) {
    (s as any).nichSalaryOutstanding = ((s as any).nichSalaryOutstanding ?? 0) + (((s as any).nichSalaryNext ?? 0));
    (s as any).nichSalaryNext = ((s as any).nichSalaryBase ?? 0);
  }
  if (((s as any).nichGalaOpponent ?? 0) >= 10  &&  ((s as any).nichGalaOpponent ?? 0) < 20  &&  ((s as any).daystart ?? 0) > ((s as any).nichGalaOpponentDay ?? 0) + 5) {
    (s as any).nichGalaOpponent = 20;
  } else {
    if (((s as any).nichGalaOpponent ?? 0) === 30) {
      (s as any).nichGalaOpponent = 31;
    }
  }
  scene.build();
}

function enterClearVars(s: GameState, scene: SceneBuilder): void {
  (s as any).nichRand = undefined;
  (s as any).nichTempPic = undefined;
  (s as any).nichTemp = undefined;
  (s as any).nichWorkState = undefined;
  (s as any).nichNote = undefined;
  (s as any).nichLastWorkDay = undefined;
  (s as any).nichMissedWorkdays = undefined;
  (s as any).nichAfterBFEvent = undefined;
  (s as any).nichEvaluationLast = undefined;
  (s as any).nichEvaluationLastReq = undefined;
  (s as any).nichHotelReferral = undefined;
  (s as any).nickHired = undefined;
  (s as any).nichHireMode = undefined;
  (s as any).nichJobRefused = undefined;
  (s as any).nichJobRefusedTReact = undefined;
  (s as any).nichPerformance = undefined;
  (s as any).nichSalaryNext = undefined;
  (s as any).nichCleanAppropriate = undefined;
  (s as any).nichOutfitState = undefined;
  (s as any).nichKnowsCook = undefined;
  (s as any).nichCookPresent = undefined;
  (s as any).nichGalaAct = undefined;
  (s as any).nichNichAct = undefined;
  (s as any).nichTanyAct = undefined;
  (s as any).nichGalaPresent = undefined;
  (s as any).nichNichPresent = undefined;
  (s as any).nichTanyPresent = undefined;
  (s as any).nichGalaKnowsPT = undefined;
  (s as any).nichGalaOpinion = undefined;
  (s as any).nichGalaOpponent = undefined;
  (s as any).nichGalaOpponentDay = undefined;
  (s as any).nichGalaTraining = undefined;
  (s as any).nichGalaTrainCounter = undefined;
  (s as any).nichGalaTrainLast = undefined;
  (s as any).nichFlirtCounter = undefined;
  (s as any).nichFlirtLast = undefined;
  (s as any).nichNTRelation = undefined;
  (s as any).nichSex = undefined;
  (s as any).nichTanyaSpyLast = undefined;
  (s as any).nichTanyaSpyCounter = undefined;
  scene.build();
}

function enterFired(s: GameState, scene: SceneBuilder): void {
  scene.text('It takes you a few moments to process what just happened:');
  scene.text('You have just been fired. And kind of lost your home, too.');
  qspCall(s, 'homes_properties', 'block_access', 'maid_bedroom');
  (s as any).nichWork = 4;
  qspCall(s, 'jobs', 'set_fired', 'nich_maid');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterClearVars(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.actions([
    { label: 'Take your belongings and leave the apartment', goto: ['city_center', ''] },
  ]);
  scene.build();
}

function enterClearVarsQuit(s: GameState, scene: SceneBuilder): void {
  (s as any).nichRand = undefined;
  (s as any).nichTempPic = undefined;
  (s as any).nichTemp = undefined;
  (s as any).nichNote = undefined;
  (s as any).nichLastWorkDay = undefined;
  (s as any).nichMissedWorkdays = undefined;
  (s as any).nichAfterBFEvent = undefined;
  (s as any).nichEvaluationLast = undefined;
  (s as any).nichEvaluationLastReq = undefined;
  (s as any).nichHotelReferral = undefined;
  (s as any).nickHired = undefined;
  (s as any).nichHireMode = undefined;
  (s as any).nichJobRefused = undefined;
  (s as any).nichJobRefusedTReact = undefined;
  (s as any).nichSalaryNext = undefined;
  (s as any).nichCleanAppropriate = undefined;
  (s as any).nichOutfitState = undefined;
  scene.build();
}

function enterQuit(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/nicholas/01.jpg');
  scene.text('"Master Nicholas, I would like to quit," you say as you approach Nicholas.');
  scene.text(`"I see ${((s as any).pcs_nickname ?? '')}. I am sad to see you go, but I wish you the best of luck."`);
  scene.text('You bow as you head out of the room');
  scene.actions([
    { label: 'Leave the room.', handler: (st: GameState) => {
    scene.text('<center><b>Nicholas\' Apartment</b></center>');
    scene.img('images/locations/city/citycenter/nichApartment/hallway.jpg');
    scene.text('It takes you a few moments to process what just happened:');
    scene.text('You have just quit your maid job… and kind of lost your home in the process.');
    qspCall(st, 'homes_properties', 'block_access', 'maid_bedroom');
    (st as any).nichWork = 3;
    qspCall(st, 'jobs', 'set_terminated', 'nich_maid');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterClearVarsQuit(st, scene); (st as any).locArgs = __savedLocArgs; }
    scene.actions([
      { label: 'Take your belongings and leave the apartment', handler: (st: GameState) => {
    qspGoto(st, 'city_center', '');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHired(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'give_access', 'maid_bedroom', 1);
  (s as any).nichWork = 2;
  qspCall(s, 'jobs', 'set_employed', 'nich_maid');
  (s as any).nichWorkState = 0;
  (s as any).nichPerformance = 45;
  (s as any).nickHired = ((s as any).daystart ?? 0);
  (s as any).nichVacationFrom = ((s as any).daystart ?? 0);
  (s as any).nichVactionTil = ((s as any).daystart ?? 0);
  (s as any).nichLastWorkDay = ((s as any).daystart ?? 0);
  (s as any).nichEvaluationLast = ((s as any).daystart ?? 0);
  (s as any).nichEvaluationLastReq = ((s as any).daystart ?? 0);
  (s as any).nichMaidBathG = 0;
  (s as any).nichMaidLaundry = 0;
  (s as any).nichMaidDishes = 0;
  (s as any).nichMaidGroceries = 0;
  (s as any).nichMaidHallway = 0;
  (s as any).nichMaidLivingDust = 0;
  (s as any).nichMaidLivingFloor = 0;
  (s as any).nichMaidLivingItems = 0;
  (s as any).nichMaidLivingWindows = 0;
  (s as any).nichLastInspepection = (-1);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[0] = 0;
  (s as any).nichSalaryBase = 10000;
  ((s as any).npc_nickname = (s as any).npc_nickname ?? {})['A52'] = 'Master ' + (((s as any).npc_firstname ?? 0)?.['A52']);
  scene.build();
}

function enterRehired(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'homes_properties', 'give_access', 'maid_bedroom', 1);
  (s as any).nichWork = 2;
  qspCall(s, 'jobs', 'set_employed', 'nich_maid');
  (s as any).nichWorkState = 1;
  (s as any).nichPerformance = 80;
  (s as any).nickHired = ((s as any).daystart ?? 0);
  (s as any).nichVacationFrom = ((s as any).daystart ?? 0);
  (s as any).nichVactionTil = ((s as any).daystart ?? 0);
  (s as any).nichLastWorkDay = ((s as any).daystart ?? 0);
  (s as any).nichEvaluationLast = ((s as any).daystart ?? 0);
  (s as any).nichEvaluationLastReq = ((s as any).daystart ?? 0);
  (s as any).nichMaidBathG = 0;
  (s as any).nichMaidLaundry = 0;
  (s as any).nichMaidDishes = 0;
  (s as any).nichMaidGroceries = 0;
  (s as any).nichMaidHallway = 0;
  (s as any).nichMaidLivingDust = 0;
  (s as any).nichMaidLivingFloor = 0;
  (s as any).nichMaidLivingItems = 0;
  (s as any).nichMaidLivingWindows = 0;
  (s as any).nichLastInspepection = (-1);
  ((s as any).nichChoreState = (s as any).nichChoreState ?? {})[0] = 0;
  (s as any).nichSalaryBase = 10000;
  scene.build();
}

function enterCheckOutfit(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PMaid ?? 0)) {
    (s as any).nichOutfitState = 1;
  } else {
    (s as any).nichOutfitState = 0;
  }
  scene.build();
}

function enterCleanOptions(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTempPic = qspFunc(s, 'nichUtil', 'cleanPic', ((s as any).nichChoreType ?? 0), ((s as any).nichChoreLoc ?? 0));
  if ((!((s as any).nichOutfitState ?? 0))) {
    scene.text('<b><font color = red>You have to change into an appropriate outfit before cleaning up.</font></b>');
  } else {
    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 0) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => '(' + String(((s as any).nichtTimeQuick ?? '') ?? '') + ' minutes) Clean quickly', handler: (st: GameState) => {
    scene.img(`${((st as any).nichTempPic ?? '')}`);
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).nichtTimeQuick ?? 0));
    ((st as any).nichChoreState = (st as any).nichChoreState ?? {})[String((st as any).nichChoreID ?? 0)] = 0;
    qspCall(st, 'exp_gain', 'cleaning', 0);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
        { label: '', labelFn: (s: GameState) => '(' + String(((s as any).nichTimeNormal ?? '') ?? '') + ' minutes) Clean normally', handler: (st: GameState) => {
    scene.img(`${((st as any).nichTempPic ?? '')}`);
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).nichTimeNormal ?? 0));
    ((st as any).nichChoreState = (st as any).nichChoreState ?? {})[String((st as any).nichChoreID ?? 0)] = 0;
    qspCall(st, 'exp_gain', 'cleaning', 0);
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
        { label: '', labelFn: (s: GameState) => '(' + String(((s as any).nichTimeDiligently ?? '') ?? '') + ' minutes) Clean diligently', handler: (st: GameState) => {
    scene.img(`${((st as any).nichTempPic ?? '')}`);
    (st as any).minut = ((st as any).minut ?? 0) + (((st as any).nichTimeDiligently ?? 0));
    ((st as any).nichChoreState = (st as any).nichChoreState ?? {})[String((st as any).nichChoreID ?? 0)] = 0;
    qspCall(st, 'exp_gain', 'cleaning', 0);
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
  ]);
  scene.build();
}

function enterCleanPic(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTempPic = undefined;
  if (String((s as any).locArgs?.[1] ?? '') === 'bed') {
    ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid7.jpg';
    ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid21.jpg';
    ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid31.jpg';
    ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid79.jpg';
    if (String((s as any).locArgs?.[2] ?? '') === 'servant'  ||  String((s as any).locArgs?.[2] ?? '') === 'tanya') {
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid27.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid34.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid71.jpg';
    } else {
      if (String((s as any).locArgs?.[2] ?? '') === 'master') {
        ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid56.jpg';
        ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid79.jpg';
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'floor') {
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid5.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid9.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid15.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid16.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid58.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid60.jpg';
      ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid61.jpg';
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'bath') {
        ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid26.jpg';
        ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid35.jpg';
        ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid80.jpg';
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'kitchen') {
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid19.jpg';
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid23.jpg';
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid24.jpg';
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid38.jpg';
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid52.jpg';
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid66.jpg';
          ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid67.jpg';
        } else {
          if (String((s as any).locArgs?.[1] ?? '') === 'furniture') {
            if (String((s as any).locArgs?.[2] ?? '') === 'living') {
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid0.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid4.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid41.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid59.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid70.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid73.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid74.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid76.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid78.jpg';
            } else {
              if (String((s as any).locArgs?.[2] ?? '') === 'study') {
                ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid30.jpg';
              }
            }
            ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid8.jpg';
          } else {
            if (String((s as any).locArgs?.[1] ?? '') === 'laundry') {
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid12.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid13.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid25.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid49.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid54.jpg';
              ((s as any).nichTempPic = (s as any).nichTempPic ?? {})[0] = 'maid69.jpg';
            }
          }
        }
      }
    }
  }
  if (Object.keys((s as any).nichTempPic ?? {}).length === 0) {
    (s as any).RESULT = 'images/pc/activities/maidCleaning/maid0.jpg';
  } else {
    (s as any).RESULT = 'images/pc/activities/maidCleaning/'+((s as any).nichTempPic ?? 0)[((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('nichTempPic')-1)];
  }
  if (((s as any).nichDebug ?? 0) === 1) {
    scene.text('Debug: Picture ' + ((s as any).RESULT ?? ''));
  }
  (s as any).nichTempPic = undefined;
  scene.build();
}

function enterTanyaPic(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTempFolder = 'images/characters/city/tanya/';
  if (String((s as any).locArgs?.[1] ?? '') === 'idle') {
    (s as any).RESULT = ((s as any).nichTempFolder ?? 0) + 'idle/idle' + (Math.floor(Math.random() * 6) + 0) + '.jpg';
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'cuddle') {
    (s as any).RESULT = ((s as any).nichTempFolder ?? 0) + 'sex/cuddle' + (Math.floor(Math.random() * 5) + 0) + '.jpg';
  }
  if (String((s as any).locArgs?.[1] ?? '') === 'sexH') {
    if (String((s as any).locArgs?.[2] ?? '') === 'spy') {
      if (String((s as any).locArgs?.[3] ?? '') === ''  ||  String((s as any).locArgs?.[3] ?? '') === 'nicholas') {
        (s as any).RESULT = ((s as any).nichTempFolder ?? 0) + 'sexNich/nich' + (Math.floor(Math.random() * 6) + 0) + '.jpg';
      } else {
        if (String((s as any).locArgs?.[3] ?? '') === 'bf1') {
          (s as any).RESULT = ((s as any).nichTempFolder ?? 0) + 'sexBf/bf1/sex' + (Math.floor(Math.random() * 5) + 0) + '.jpg';
        } else {
          if (String((s as any).locArgs?.[3] ?? '') === 'bf2') {
            (s as any).RESULT = ((s as any).nichTempFolder ?? 0) + 'sexBf/bf2/sex' + (Math.floor(Math.random() * 3) + 0) + '.jpg';
          }
        }
      }
    }
  }
  (s as any).nichTempFolder = undefined;
  scene.build();
}

function enterUpdatePcHair(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_haircol ?? 0) === 3) {
    (s as any).nichPCHair = 1;
  } else {
    if (((s as any).pcs_haircol ?? 0) > 3) {
      (s as any).nichPCHair = 2;
    } else {
      (s as any).nichPCHair = 0;
    }
  }
  scene.build();
}

function enterNpcActivityAdd(s: GameState, scene: SceneBuilder): void {
  ((s as any).nichNpcActArr = (s as any).nichNpcActArr ?? {})[0] = ((s as any).locArgs?.[1] ?? 0);
  ((s as any).nichNpcActTime = (s as any).nichNpcActTime ?? {})[0] = ((s as any).locArgs?.[2] ?? 0)*60 + ((s as any).locArgs?.[3] ?? 0);
  scene.build();
}

function enterNpcActivity(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'nicholas') {
    if (((s as any).week ?? 0) <= 5) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 6, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 7, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 7, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 8, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 7, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 8, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 8, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 9, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
    }
    if (((s as any).week ?? 0) <= 4) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveWork', 8, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'work', 18, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnWork', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).week ?? 0) === 5) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveWork', 8, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'work', 16, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnWork', 16, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).week ?? 0) === 6) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveShopping', 9, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shopping', 16, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnShopping', 16, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 16, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
    if (((s as any).nichGentleclubDayE1 ?? 0) === ((s as any).daystart ?? 0)) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 22, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathEvening', 22, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).week ?? 0) <= 4) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dinner', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 20, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).week ?? 0) === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
            if (((s as any).nichNTRelation ?? 0) < 10) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          } else {
            if (((s as any).week ?? 0) === 3) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathEvening', 22, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 18, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathClub', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveClub', 18, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'club', 23, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnClub', 23, 50]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'study', 18, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dinner', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'gala', 21, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathEvening', 21, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'gala') {
      if (((s as any).nichGalaDisabled ?? 0) === 1) {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'vanished', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).week ?? 0) <= 5) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 6, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'snooze', 7, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 7, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 8, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 7, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'snooze', 8, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 8, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 9, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).week ?? 0) === 2) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 9, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveSpa', 9, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'spa', 15, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnSpa', 15, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).week ?? 0) === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 9, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveFriend', 9, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'friend', 17, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnFriend', 17, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).week ?? 0) === 5) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              } else {
                if (((s as any).week ?? 0) === 6) {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
                } else {
                  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 18, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
                }
              }
            }
          }
        }
        if (((s as any).week ?? 0) <= 4) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dinner', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'living', 20, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathEvening', 22, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prepareClub', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveClub', 18, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'club', 23, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnClub', 23, 50]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dinner', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nicholas', 21, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathEvening', 21, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tanya') {
        if (((s as any).week ?? 0) <= 5) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 7, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 8, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 9, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).week ?? 0) === 6) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'club', 2, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnClub', 2, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 8, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 9, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 10, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 8, 45]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'breakfast', 9, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'bathMorning', 10, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
        if (((s as any).nichTanya ?? 0)?.['Uni'] >= 100  &&  ((s as any).nichTanya ?? 0)?.['UniStart'] !== ((s as any).daystart ?? 0)) {
          if (((s as any).week ?? 0) <= 5) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveUni', 10, 20]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'uni', 14, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 5) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnUni', 14, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        } else {
          if (((s as any).week ?? 0) === 1) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 13, 55]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveBallet', 14, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).week ?? 0) === 3) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 12, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveFriend', 12, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              if (((s as any).week ?? 0) === 4) {
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 12, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
                { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveShopping', 12, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              }
            }
          }
        }
        if (((s as any).week ?? 0) === 1) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'ballet', 16, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnBallet', 16, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).week ?? 0) === 3) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'friend', 17, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnFriend', 17, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).week ?? 0) === 4) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'shopping', 16, 15]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'returnShopping', 16, 20]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 18, 5]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).week ?? 0) <= 4  ||  ((s as any).week ?? 0) === 7) {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'dinner', 18, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 20, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
          if (((s as any).nichNTRelation ?? 0) < 10) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'nicholas', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            if (((s as any).nichTanya ?? 0)?.['BF'] > 0) {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'boyfriend', 23, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            } else {
              { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            }
          }
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).week ?? 0) === 5) {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'prepareClub', 21, 30]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'leaveClub', 21, 35]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'club', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          } else {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'tanya', 22, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', 'sleep', 24, 0]; enterNpcActivityAdd(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  (s as any).RESULT = (((s as any).nichNpcActArr ?? 0)?.[0] ?? 0);
  (s as any).nichNpcActC = 0;
  while (true) {
    if (((s as any).nichNpcActTime ?? 0)?.[String((s as any).nichNpcActC ?? 0)] <= ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)) {
      (s as any).nichNpcActC = ((s as any).nichNpcActC ?? 0) + (1);
      if (((s as any).nichNpcActC ?? 0) < Object.keys((s as any).nichNpcActTime ?? {}).length) {
        break;
      }
    }
    (s as any).RESULT = (((s as any).nichNpcActArr ?? 0)?.[String((s as any).nichNpcActC ?? 0)] ?? 0);
    (s as any).nichNpcActArr = undefined;
    (s as any).nichNpcActTime = undefined;
    (s as any).nichNpcActC = undefined;
  }
  scene.build();
}

function enterWhereIs(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 'unknown';
  if (String((s as any).locArgs?.[1] ?? '') === 'nicholas') {
    (s as any).nichTemp = qspFunc(s, 'nichUtil', 'npcActivity', 'nicholas');
    if (((s as any).nichTemp ?? 0) === 'sleep'  ||  ((s as any).nichTemp ?? 0) === 'gala') {
      (s as any).RESULT = 'masterBedroom';
    } else {
      if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathClub'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening') {
        (s as any).RESULT = 'masterBathroom';
      } else {
        if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
          (s as any).RESULT = 'living';
        } else {
          if (((s as any).nichTemp ?? 0) === 'leaveWork'  ||  ((s as any).nichTemp ?? 0) === 'returnWork'  ||  ((s as any).nichTemp ?? 0) === 'leaveShopping'  ||  ((s as any).nichTemp ?? 0) === 'returnShopping'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
            (s as any).RESULT = 'hallway';
          } else {
            if (((s as any).nichTemp ?? 0) === 'work') {
              (s as any).RESULT = 'work';
            } else {
              if (((s as any).nichTemp ?? 0) === 'study') {
                (s as any).RESULT = 'study';
              } else {
                if (((s as any).nichTemp ?? 0) === 'tanya') {
                  (s as any).RESULT = 'bedroomTanya';
                } else {
                  if (((s as any).nichTemp ?? 0) === 'club') {
                    (s as any).RESULT = 'club';
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'shopping') {
                      (s as any).RESULT = 'shopping';
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    if (String((s as any).locArgs?.[1] ?? '') === 'gala') {
      (s as any).nichTemp = qspFunc(s, 'nichUtil', 'npcActivity', 'gala');
      if (((s as any).nichTemp ?? 0) === 'sleep'  ||  ((s as any).nichTemp ?? 0) === 'snooze'  ||  ((s as any).nichTemp ?? 0) === 'nicholas'  ||  ((s as any).nichTemp ?? 0) === 'prepareClub') {
        (s as any).RESULT = 'masterBedroom';
      } else {
        if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening') {
          (s as any).RESULT = 'masterBathroom';
        } else {
          if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
            (s as any).RESULT = 'living';
          } else {
            if (((s as any).nichTemp ?? 0) === 'leaveSpa'  ||  ((s as any).nichTemp ?? 0) === 'returnSpa'  ||  ((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
              (s as any).RESULT = 'hallway';
            } else {
              if (((s as any).nichTemp ?? 0) === 'club') {
                (s as any).RESULT = 'club';
              } else {
                if (((s as any).nichTemp ?? 0) === 'friend') {
                  (s as any).RESULT = 'friend';
                }
              }
            }
          }
        }
      }
    } else {
      if (String((s as any).locArgs?.[1] ?? '') === 'tanya') {
        (s as any).nichTemp = qspFunc(s, 'nichUtil', 'npcActivity', 'tanya');
        if (((s as any).nichTemp ?? 0) === 'sleep'  ||  ((s as any).nichTemp ?? 0) === 'nicholas'  ||  ((s as any).nichTemp ?? 0) === 'tanya'  ||  ((s as any).nichTemp ?? 0) === 'boyfriend') {
          (s as any).RESULT = 'bedroomTanya';
        } else {
          if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening'  ||  ((s as any).nichTemp ?? 0) === 'prepareClub') {
            (s as any).RESULT = 'masterBathroom';
          } else {
            if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
              (s as any).RESULT = 'living';
            } else {
              if (((s as any).nichTemp ?? 0) === 'leaveUni'  ||  ((s as any).nichTemp ?? 0) === 'returnUni'  ||  ((s as any).nichTemp ?? 0) === 'leaveBallet'  ||  ((s as any).nichTemp ?? 0) === 'returnBallet'  ||  ((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend'  ||  ((s as any).nichTemp ?? 0) === 'leaveShopping'  ||  ((s as any).nichTemp ?? 0) === 'returnShopping'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
                (s as any).RESULT = 'hallway';
              } else {
                if (((s as any).nichTemp ?? 0) === 'uni') {
                  (s as any).RESULT = 'uni';
                } else {
                  if (((s as any).nichTemp ?? 0) === 'ballet') {
                    (s as any).RESULT = 'ballet';
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'friend') {
                      (s as any).RESULT = 'friend';
                    } else {
                      if (((s as any).nichTemp ?? 0) === 'shopping') {
                        (s as any).RESULT = 'shopping';
                      } else {
                        if (((s as any).nichTemp ?? 0) === 'club') {
                          (s as any).RESULT = 'club';
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        if (String((s as any).locArgs?.[1] ?? '') === 'cook') {
          if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20) {
            (s as any).RESULT = 'kitchen';
          }
        }
      }
    }
  }
  scene.build();
}

function enterIsHome(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTemp = qspFunc(s, 'nichUtil', 'whereIs', ((s as any).locArgs?.[1] ?? 0));
  (s as any).RESULT = 0;
  if (((s as any).nichTemp ?? 0) === 'masterBedroom'  ||  ((s as any).nichTemp ?? 0) === 'masterBathroom'  ||  ((s as any).nichTemp ?? 0) === 'bedroomTanya'  ||  ((s as any).nichTemp ?? 0) === 'bedroomServant'  ||  ((s as any).nichTemp ?? 0) === 'bathroomServant'  ||  ((s as any).nichTemp ?? 0) === 'bedroomGuest'  ||  ((s as any).nichTemp ?? 0) === 'study'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'kitchen') {
    (s as any).RESULT = 1;
  }
  scene.build();
}

function enterIsAlone(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTempC1 = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).nichTempC1 ?? 0) === 'nicholas') {
    (s as any).nichTempC2 = 'gala';
    (s as any).nichTempC3 = 'tanya';
  } else {
    (s as any).nichTempC2 = 'nicholas';
    if (((s as any).nichTempC1 ?? 0) === 'gala') {
      (s as any).nichTempC3 = 'tanya';
    } else {
      (s as any).nichTempC3 = 'gala';
    }
  }
  if (qspFunc(s, 'nichUtil', 'isPresent', ((s as any).nichTempC1 ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 0) {
    (s as any).RESULT = 0;
  } else {
    if (qspFunc(s, 'nichUtil', 'isPresent', ((s as any).nichTempC2 ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 1  ||  qspFunc(s, 'nichUtil', 'isPresent', ((s as any).nichTempC3 ?? 0), ((s as any).locArgs?.[2] ?? 0)) === 1) {
      (s as any).RESULT = 0;
    } else {
      (s as any).RESULT = 1;
    }
  }
  (s as any).nichTempC1 = undefined;
  (s as any).nichTempC2 = undefined;
  (s as any).nichTempC3 = undefined;
  scene.build();
}

function enterIsPresent(s: GameState, scene: SceneBuilder): void {
  (s as any).npcLocation = qspFunc(s, 'nichUtil', 'whereIs', ((s as any).locArgs?.[1] ?? 0));
  if (((s as any).npcLocation ?? 0) === String((s as any).locArgs?.[2] ?? '')) {
    (s as any).RESULT = 1;
  } else {
    (s as any).RESULT = 0;
  }
  scene.build();
}

function enterIsNicholasHome(s: GameState, scene: SceneBuilder): void {
  if (((s as any).loc ?? 0) === 'nichBathMaster'  ||  ((s as any).loc ?? 0) === 'nichBedroomServant') {
    (s as any).RESULT = 1;
  } else {
    (s as any).RESULT = 0;
  }
  scene.build();
}

function enterOnArouse(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichGalaImplant ?? 0) > 0) {
    (s as any).nichTempNaughtyLoc = 1;
    if (qspFunc(s, 'nichUtil', 'isNicholasHome') === 1) {
      (s as any).nichTempNaughtyLoc = 0;
    } else {
      if (((s as any).nichGalaImplant ?? 0) > 1  &&  ((s as any).loc ?? 0) === 'city_saunawhore') {
        (s as any).nichTempNaughtyLoc = 0;
      }
    }
    if (((s as any).nichTempNaughtyLoc ?? 0) === 1) {
      if (String((s as any).locArgs?.[1] ?? '') === 'vaginal'  ||  String((s as any).locArgs?.[1] ?? '') === 'vaginal_finger'  ||  String((s as any).locArgs?.[1] ?? '') === 'vaginal_fist'  ||  String((s as any).locArgs?.[1] ?? '') === 'vaginal_dildo'  ||  String((s as any).locArgs?.[1] ?? '') === 'vaginal_strap'  ||  String((s as any).locArgs?.[1] ?? '') === 'vaginal_vibe') {
        (s as any).nichGalaImplantCount = ((s as any).nichGalaImplantCount ?? 0) + (1);
      }
    }
    (s as any).nichTempNaughtyLoc = undefined;
  }
  scene.build();
}

function enterFreeDay(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTempFree = ((String((s as any).locArgs?.[1] ?? '')>0) ? (((s as any).locArgs?.[1] ?? 0)) : (1));
  if (((s as any).nichVactionTil ?? 0) < ((s as any).daystart ?? 0) + ((s as any).nichTempFree ?? 0) - 1) {
    (s as any).nichVacationFrom = ((s as any).daystart ?? 0);
    (s as any).nichVactionTil = ((s as any).daystart ?? 0) + ((s as any).nichTempFree ?? 0) - 1;
    (s as any).nichEvaluationLastReq = ((s as any).nichVactionTil ?? 0) + 1;
  }
  scene.build();
}

function enterDisableNPC(s: GameState, scene: SceneBuilder): void {
  if (String((s as any).locArgs?.[1] ?? '') === 'Gala') {
    (s as any).nichGalaDisabled = 1;
    (s as any).nichGalaContractTaras = undefined;
    (s as any).nichGalaContractTarasCount = undefined;
    (s as any).nichGalaContractTarasLast = undefined;
    (s as any).nichGalaContractActive = undefined;
    (s as any).nichGalaContractLast = undefined;
    (s as any).nichGalaDoc = undefined;
    (s as any).nichGalaKnowsPT = undefined;
    (s as any).nichGalaOpponent = undefined;
    (s as any).nichGalaOpponentDay = undefined;
    (s as any).nichGalaImplant = undefined;
    (s as any).nichGalaTattoo = undefined;
    (s as any).nichGalaImplantCount = undefined;
    (s as any).nichGalaContractLast = undefined;
    (s as any).nichGalaTraining = undefined;
    (s as any).nichGalaTrainCounter = undefined;
    (s as any).nichGalaTrainLast = undefined;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'debug':
      enterDebug(s, scene);
      break;
    case 'startWorkday':
      enterStartWorkday(s, scene);
      break;
    case 'clearVars':
      enterClearVars(s, scene);
      break;
    case 'fired':
      enterFired(s, scene);
      break;
    case 'clearVarsQuit':
      enterClearVarsQuit(s, scene);
      break;
    case 'quit':
      enterQuit(s, scene);
      break;
    case 'hired':
      enterHired(s, scene);
      break;
    case 'rehired':
      enterRehired(s, scene);
      break;
    case 'checkOutfit':
      enterCheckOutfit(s, scene);
      break;
    case 'cleanOptions':
      enterCleanOptions(s, scene);
      break;
    case 'cleanPic':
      enterCleanPic(s, scene);
      break;
    case 'tanyaPic':
      enterTanyaPic(s, scene);
      break;
    case 'updatePcHair':
      enterUpdatePcHair(s, scene);
      break;
    case 'npcActivityAdd':
      enterNpcActivityAdd(s, scene);
      break;
    case 'npcActivity':
      enterNpcActivity(s, scene);
      break;
    case 'whereIs':
      enterWhereIs(s, scene);
      break;
    case 'isHome':
      enterIsHome(s, scene);
      break;
    case 'isAlone':
      enterIsAlone(s, scene);
      break;
    case 'isPresent':
      enterIsPresent(s, scene);
      break;
    case 'isNicholasHome':
      enterIsNicholasHome(s, scene);
      break;
    case 'onArouse':
      enterOnArouse(s, scene);
      break;
    case 'freeDay':
      enterFreeDay(s, scene);
      break;
    case 'disableNPC':
      enterDisableNPC(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichUtil: LocationDef = {
  name: 'nichUtil',
  title: 'This page should never appear. Please report this bug includ',
  region: 'other',
  description: ['This page should never appear. Please report this bug including a description of how you got here.'],
  enter: enter,
};
