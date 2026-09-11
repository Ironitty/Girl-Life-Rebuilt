import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  scene.text('This page should never appear. Please report this bug including a description of how you got here.');
  if (((s as any).locArgs?.[0] ?? 0) === 'debug') {
    if (((s as any).settingmode ?? 0) > 0) {
    }
    if (((s as any).locArgs?.[1] ?? 0) === 'debugToggle') {
      (s as any).nichDebug = 1 - ((s as any).nichDebug ?? 0);
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'galaTrainingToggle') {
        (s as any).nichGalaTraining = 1 - ((s as any).nichGalaTraining ?? 0);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'chore') {
          if (((s as any).locArgs?.[3] ?? 0) === 'min') {
            // TODO-QSP: nichChoreState[ARGS[2]] = 0
          } else {
            if (((s as any).locArgs?.[3] ?? 0) === '1') {
              // TODO-QSP: nichChoreState[ARGS[2]] += 1
            } else {
              if (((s as any).locArgs?.[3] ?? 0) === '5') {
                // TODO-QSP: nichChoreState[ARGS[2]] += 5
              }
            }
          }
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'evaluation') {
            if (((s as any).locArgs?.[2] ?? 0) === 'silent') {
              qspCall(s, 'nichNicholas', 'evaluation', 'silent');
            }
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'shortcut') {
              if (((s as any).locArgs?.[2] ?? 0) === 'meetTanya') {
                qspCall(s, 'nichUtil', 'clearVars');
                (s as any).abonement = 30;
                (s as any).nichWork = 0;
                ((s as any).nichTanya ?? {})['Relationship'] = 0;
                ((s as any).nichTanya ?? {})['FuckCounter'] = 0;
                scene.actions([{ label: 'Continue', goto: ['havana', 'start'] }]);
              } else {
                if (((s as any).locArgs?.[2] ?? 0) === 'getHired') {
                  (s as any).nichWork = 0;
                  ((s as any).nichTanya ?? {})['Relationship'] = 1;
                  (s as any).nichJobRefused = 0;
                  ((s as any).nichTanya ?? {})['FuckCounter'] = 10;
                  (s as any).hour = 16;
                  scene.actions([{ label: 'Continue', goto: ['city_center', ''] }]);
                } else {
                  if (((s as any).locArgs?.[2] ?? 0) === 'tanyaDate100') {
                    (s as any).nichWork = 2;
                    ((s as any).nichTanya ?? {})['Relationship'] = 1;
                    ((s as any).nichTanya ?? {})['FuckCounter'] = 10;
                    ((s as any).nichTanya ?? {})['Dominance'] = 30;
                    ((s as any).nichTanya ?? {})['Strapon'] = 0;
                    (s as any).nichGalaKnowsPT = 0;
                    (s as any).hour = 16;
                    scene.actions([{ label: 'Continue', goto: ['nichTanya', 'bedroomTanya'] }]);
                  } else {
                    if (((s as any).locArgs?.[2] ?? 0) === 'nichGentleclubE1') {
                      (s as any).nichWork = 2;
                      (s as any).minut = 0;
                      (s as any).hour = 18;
                      (s as any).nichGentleclubDayE1 = ((s as any).daystart ?? 0);
                      (s as any).nichGentleclubE1 = 1;
                      scene.actions([{ label: 'Continue', goto: ['nichApartment', ''] }]);
                    } else {
                      if (((s as any).locArgs?.[2] ?? 0) === 'galaContract') {
                        (s as any).nichGalaTraining = 1;
                        (s as any).nichGalaTrainCounter = 5;
                        (s as any).nichWork = 2;
                        (s as any).nichGalaContractActive = 0;
                        (s as any).nichGalaContract = 0;
                        (s as any).minut = 0;
                        (s as any).hour = 18;
                        scene.actions([{ label: 'Continue', goto: ['nichApartment', ''] }]);
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
      scene.text('Debug mode: <a href="exec: gt \'nichUtil\', \'debug\', \'debugToggle\'">Enabled</a>');
    } else {
      scene.text('Debug mode: <a href="exec: gt \'nichUtil\', \'debug\', \'debugToggle\'">Disabled</a>');
    }
    scene.text('<i><b>Shortcuts</b></i>');
    scene.text('<i>The following options will set and change a whole bunch of variables and might transport you to another place. Important: every shortcut has been created with a debug scenario in mind and won\'t set/reset every storyline-variable. Expect weird behavior.</i>');
    scene.text('<a href="exec: gt \'nichUtil\', \'debug\',\'shortcut\',\'meetTanya\'">Meet Tanya</a>: Sets you up to meet Tanya. Go to the dressing room. She is the \'cute girl\'. Meeting her has a random chance unless you have activated debug mode.');
    scene.text('<a href="exec: gt \'nichUtil\', \'debug\',\'shortcut\',\'getHired\'">Get hired</a>: You visited Tanya often enough for her to offer you the job as the live-in maid.');
    scene.text('<a href="exec: gt \'nichUtil\', \'debug\',\'shortcut\',\'tanyaDate100\'">Tanya Special Date 1</a>: Tanya became somewhat dominant. Ask her for a date and let her decide where to go.');
    scene.text('<a href="exec: gt \'nichUtil\', \'debug\',\'shortcut\',\'nichGentleclubE1\'">Nicholas Club Event 1</a>: Nicholas has a special guest over. Meet him at his study.');
    scene.text('<a href="exec: gt \'nichUtil\', \'debug\',\'shortcut\',\'galaContract\'">Gala Contract</a>: Gala offers a special contract. Meet her in the living room.');
    scene.text('<i><b>Job performance</b></i>');
    // TODO-QSP: dynamic text: Overall performance (higher=better): <<nichPerformance>>
    scene.text(`Overall performance (higher=better): ${((s as any).nichPerformance ?? 0)}`);
    scene.text('<a href="exec: gt \'nichUtil\', \'debug\', \'evaluation\', \'silent\'">Get silent performance evaluation</a>');
    scene.text('<a href="exec: gt \'nichNicholas\', \'evaluation\'">Get detailed performance evaluation</a>');
    scene.text('<i><b>Chore state</b>: higher numbers are worse</i>');
    // TODO-QSP: dynamic text: Hallway: <<nichChoreState[0]>> <a href="exec: gt 'nichUtil', 'debug', 'chore', 0...
    scene.text(`Hallway: ${qspUntranslated(s, "nichChoreState[0]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 0, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 0, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 0, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Guest cloakroom: <<nichChoreState[1]>> <a href="exec: gt 'nichUtil', 'debug', 'c...
    scene.text(`Guest cloakroom: ${qspUntranslated(s, "nichChoreState[1]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 1, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 1, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 1, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Maid bedroom: <<nichChoreState[2]>> <a href="exec: gt 'nichUtil', 'debug', 'chor...
    scene.text(`Maid bedroom: ${qspUntranslated(s, "nichChoreState[2]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 2, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 2, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 2, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Maid bathroom: <<nichChoreState[3]>> <a href="exec: gt 'nichUtil', 'debug', 'cho...
    scene.text(`Maid bathroom: ${qspUntranslated(s, "nichChoreState[3]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 3, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 3, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 3, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Laundry: <<nichChoreState[4]>> <a href="exec: gt 'nichUtil', 'debug', 'chore', 4...
    scene.text(`Laundry: ${qspUntranslated(s, "nichChoreState[4]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 4, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 4, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 4, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Tanya bedroom: <<nichChoreState[5]>> <a href="exec: gt 'nichUtil', 'debug', 'cho...
    scene.text(`Tanya bedroom: ${qspUntranslated(s, "nichChoreState[5]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 5, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 5, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 5, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Master bathroom: <<nichChoreState[6]>> <a href="exec: gt 'nichUtil', 'debug', 'c...
    scene.text(`Master bathroom: ${qspUntranslated(s, "nichChoreState[6]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 6, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 6, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 6, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Master bedroom: <<nichChoreState[7]>> <a href="exec: gt 'nichUtil', 'debug', 'ch...
    scene.text(`Master bedroom: ${qspUntranslated(s, "nichChoreState[7]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 7, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 7, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 7, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Living room: <<nichChoreState[8]>> <a href="exec: gt 'nichUtil', 'debug', 'chore...
    scene.text(`Living room: ${qspUntranslated(s, "nichChoreState[8]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 8, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 8, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 8, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Kitchen: <<nichChoreState[9]>> <a href="exec: gt 'nichUtil', 'debug', 'chore', 9...
    scene.text(`Kitchen: ${qspUntranslated(s, "nichChoreState[9]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 9, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 9, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 9, '5'">+5</a>`);
    // TODO-QSP: dynamic text: Study: <<nichChoreState[10]>> <a href="exec: gt 'nichUtil', 'debug', 'chore', 10...
    scene.text(`Study: ${qspUntranslated(s, "nichChoreState[10]", { location: "nichUtil" })} <a href="exec: gt 'nichUtil', 'debug', 'chore', 10, 'min'">min</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 10, '1'">+1</a> <a href="exec: gt 'nichUtil', 'debug', 'chore', 10, '5'">+5</a>`);
    scene.text('<i><b>NPCs</b></i>');
    scene.text('The following settings are meant for debugging only. Touching them will influence the intended progression in the story.');
    scene.text('<b>Gala</b>');
    if (((s as any).nichGalaTraining ?? 0) === 1) {
      scene.text('Gala Training: <a href="exec: gt \'nichUtil\', \'debug\', \'galaTrainingToggle\'">Enabled</a>');
    } else {
      scene.text('Gala Training: <a href="exec: gt \'nichUtil\', \'debug\', \'galaTrainingToggle\'">Disabled</a>');
    }
    scene.text('<b>Tanya</b>');
    scene.text('Set relationship to:');
    scene.text('-<a href="exec: nichTanya[\'Relationship\'] = 0 & nichTanya[\'RelationshipState\'] = 0 & gt \'nichUtil\', \'debug\'">Not together (and never have been)</a>');
    scene.text('-<a href="exec: nichTanya[\'Relationship\'] = 0 & nichTanya[\'RelationshipState\'] = 1000 & gt \'nichUtil\', \'debug\'">Not together (you broke up)</a>');
    scene.text('-<a href="exec: nichTanya[\'Relationship\'] = 0 & nichTanya[\'RelationshipState\'] = 1010 & gt \'nichUtil\', \'debug\'">Not together (Tanya broke up)</a>');
    scene.text('-<a href="exec: nichTanya[\'Relationship\'] = 1 & nichTanya[\'RelationshipState\'] = 10 & gt \'nichUtil\', \'debug\'">Casually dating</a>');
    scene.text('-<a href="exec: nichTanya[\'Relationship\'] = 1 & nichTanya[\'RelationshipState\'] = 20 & gt \'nichUtil\', \'debug\'">In a relationship</a>');
    // TODO-QSP: dynamic text: You fucked Tanya <<nichTanya['FuckCounter']>> times
    scene.text(`You fucked Tanya ${((s as any).nichTanya ?? 0)?.['FuckCounter']} times`);
    // TODO-QSP: dynamic text: The last time you fucked Tanya was '+(daystart-nichTanya['FuckLast'])+' days ago
    scene.text('The last time you fucked Tanya was \'+(daystart-nichTanya[\'FuckLast\'])+\' days ago');
    // TODO-QSP: dynamic text: Tanya has a dominance of <<nichTanya['Dominance']>> (range: -100 - 100)
    scene.text(`Tanya has a dominance of ${((s as any).nichTanya ?? 0)?.['Dominance']} (range: -100 - 100)`);
    scene.actions([
      { label: 'DEBUG: New Workday', handler: (st: GameState) => {
    qspCall(st, 'nichUtil', 'startWorkday');
  } },
      { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'menu_loc', 'menu_arg');
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'startWorkday') {
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
      ((s as any).nichChoreState ?? {})[0] = (((s as any).nichChoreState ?? {})[0] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[1] = (((s as any).nichChoreState ?? {})[1] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[2] = (((s as any).nichChoreState ?? {})[2] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[3] = (((s as any).nichChoreState ?? {})[3] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[4] = (((s as any).nichChoreState ?? {})[4] ?? 0) + (5);
      if (((s as any).nichTanya ?? 0)?.['Room'] === 0) {
        ((s as any).nichChoreState ?? {})[5] = (((s as any).nichChoreState ?? {})[5] ?? 0) + (5);
      }
      ((s as any).nichChoreState ?? {})[6] = (((s as any).nichChoreState ?? {})[6] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[7] = (((s as any).nichChoreState ?? {})[7] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[8] = (((s as any).nichChoreState ?? {})[8] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[9] = (((s as any).nichChoreState ?? {})[9] ?? 0) + (5);
      ((s as any).nichChoreState ?? {})[10] = (((s as any).nichChoreState ?? {})[10] ?? 0) + (5);
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
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'clearVars') {
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'fired') {
          scene.text('It takes you a few moments to process what just happened:');
          scene.text('You have just been fired. And kind of lost your home, too.');
          qspCall(s, 'homes_properties', 'block_access', 'maid_bedroom');
          (s as any).nichWork = 4;
          qspCall(s, 'jobs', 'set_fired', 'nich_maid');
          qspCall(s, 'nichUtil', 'clearVars');
          scene.actions([
            { label: 'Take your belongings and leave the apartment', goto: ['city_center', ''] },
          ]);
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'clearVarsQuit') {
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'quit') {
              scene.img('images/characters/city/nicholas/01.jpg');
              scene.text('"Master Nicholas, I would like to quit," you say as you approach Nicholas.');
              // TODO-QSP: dynamic text: "I see <<$pcs_nickname>>. I am sad to see you go, but I wish you the best of luc...
              scene.text(`"I see ${((s as any).pcs_nickname ?? 0)}. I am sad to see you go, but I wish you the best of luck."`);
              scene.text('You bow as you head out of the room');
              scene.actions([
                { label: 'Leave the room.', handler: (st: GameState) => {
    scene.text('<center><b>Nicholas\' Apartment</b></center>');
    scene.img('images/locations/city/citycenter/nichApartment/hallway.jpg');
    scene.text('It takes you a few moments to process what just happened:');
    scene.text('You have just quit your maid job… and kind of lost your home in the process.');
    qspCall(s, 'homes_properties', 'block_access', 'maid_bedroom');
    (s as any).nichWork = 3;
    qspCall(s, 'jobs', 'set_terminated', 'nich_maid');
    qspCall(s, 'nichUtil', 'clearVarsQuit');
    scene.actions([
      { label: 'Take your belongings and leave the apartment', goto: ['city_center', ''] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

export const nichUtil: LocationDef = {
  name: 'nichUtil',
  title: 'This page should never appear. Please report this bug includ',
  region: 'other',
  description: ['This page should never appear. Please report this bug including a description of how you got here.'],
  enter: enter,
};
