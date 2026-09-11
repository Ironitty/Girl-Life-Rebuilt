import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
  (s as any).nichChoreState[0] = 0;
  (s as any).nichSalaryBase = 10000;
  (s as any).npc_nickname['A52'] = 'Master '+((s as any).npc_firstname ?? {})?.['A52'];
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
  (s as any).nichChoreState[0] = 0;
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
  if ((!((s as any).nichOutfitState ?? 0))) {
    scene.text('<b><font color = red>You have to change into an appropriate outfit before cleaning up.</font></b>');
  } else {
    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 0) {
      scene.actions([
        { label: '(<<nichtTimeQuick>> minutes) Clean quickly', handler: (st: GameState) => {
    scene.img(`${((s as any).nichTempPic ?? 0)}`);
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichtTimeQuick ?? 0));
    (s as any).nichChoreState[String((s as any).nichChoreID ?? 0)] = 0;
    // TODO-QSP: gs 'exp_gain', 'cleaning', rand (0, 1)
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
        { label: '(<<nichTimeNormal>> minutes) Clean normally', handler: (st: GameState) => {
    scene.img(`${((s as any).nichTempPic ?? 0)}`);
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichTimeNormal ?? 0));
    (s as any).nichChoreState[String((s as any).nichChoreID ?? 0)] = 0;
    // TODO-QSP: gs 'exp_gain', 'cleaning', rand (1, 3)
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
        { label: '(<<nichTimeDiligently>> minutes) Clean diligently', handler: (st: GameState) => {
    scene.img(`${((s as any).nichTempPic ?? 0)}`);
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichTimeDiligently ?? 0));
    (s as any).nichChoreState[String((s as any).nichChoreID ?? 0)] = 0;
    // TODO-QSP: gs 'exp_gain', 'cleaning', rand (1, 5)
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enterCleanPic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'bed') {
    // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid7.jpg'
    // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid21.jpg'
    // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid31.jpg'
    // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid79.jpg'
    if (((s as any).locArgs?.[2] ?? 0) === 'servant'  ||  ((s as any).locArgs?.[2] ?? 0) === 'tanya') {
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid27.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid34.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid71.jpg'
    } else {
      if (((s as any).locArgs?.[2] ?? 0) === 'master') {
        // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid56.jpg'
        // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid79.jpg'
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'floor') {
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid5.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid9.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid15.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid16.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid58.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid60.jpg'
      // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid61.jpg'
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'bath') {
        // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid26.jpg'
        // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid35.jpg'
        // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid80.jpg'
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'kitchen') {
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid19.jpg'
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid23.jpg'
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid24.jpg'
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid38.jpg'
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid52.jpg'
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid66.jpg'
          // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid67.jpg'
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'furniture') {
            if (((s as any).locArgs?.[2] ?? 0) === 'living') {
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid0.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid4.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid41.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid59.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid70.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid73.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid74.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid76.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid78.jpg'
            } else {
              if (((s as any).locArgs?.[2] ?? 0) === 'study') {
                // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid30.jpg'
              }
            }
            // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid8.jpg'
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'laundry') {
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid12.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid13.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid25.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid49.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid54.jpg'
              // TODO-QSP: $nichTempPic[arrsize('$nichTempPic')] = 'maid69.jpg'
            }
          }
        }
      }
    }
  }
  if (Object.keys((s as any).nichTempPic ?? {}).length === 0) {
  }
  if (((s as any).nichDebug ?? 0) === 1) {
    // TODO-QSP: 'Debug: Picture '+$RESULT
  }
  scene.build();
}

function enterTanyaPic(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'idle') {
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'cuddle') {
  }
  if (((s as any).locArgs?.[1] ?? 0) === 'sexH') {
    if (((s as any).locArgs?.[2] ?? 0) === 'spy') {
      if (((s as any).locArgs?.[3] ?? 0) === ''  ||  ((s as any).locArgs?.[3] ?? 0) === 'nicholas') {
      } else {
        if (((s as any).locArgs?.[3] ?? 0) === 'bf1') {
        } else {
          if (((s as any).locArgs?.[3] ?? 0) === 'bf2') {
          }
        }
      }
    }
  }
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
  // TODO-QSP: $nichNpcActArr[arrsize('$nichNpcActArr')] = $ARGS[1]
  // TODO-QSP: nichNpcActTime[arrsize('nichNpcActTime')] = ARGS[2]*60 + ARGS[3]
  scene.build();
}

function enterNpcActivity(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'nicholas') {
    if (((s as any).week ?? 0) <= 5) {
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 6, 45);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 7, 15);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 7, 45);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 8, 30);
    } else {
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 7, 45);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 8, 15);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 8, 45);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 9, 30);
    }
    if (((s as any).week ?? 0) <= 4) {
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveWork', 8, 35);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'work', 18, 0);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnWork', 18, 5);
    } else {
      if (((s as any).week ?? 0) === 5) {
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveWork', 8, 35);
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'work', 16, 0);
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnWork', 16, 5);
      } else {
        if (((s as any).week ?? 0) === 6) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveShopping', 9, 35);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'shopping', 16, 0);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnShopping', 16, 5);
        } else {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 16, 0);
        }
      }
    }
    if (((s as any).nichGentleclubDayE1 ?? 0) === ((s as any).daystart ?? 0)) {
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 22, 30);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathEvening', 22, 45);
      qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
    } else {
      if (((s as any).week ?? 0) <= 4) {
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'dinner', 18, 30);
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 20, 30);
        if (((s as any).week ?? 0) === 1) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 22, 0);
        } else {
          if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
            if (((s as any).nichNTRelation ?? 0) < 10) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 22, 0);
            } else {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 22, 0);
            }
          } else {
            if (((s as any).week ?? 0) === 3) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 22, 0);
            }
          }
        }
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathEvening', 22, 15);
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
      } else {
        if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 18, 0);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathClub', 18, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveClub', 18, 35);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'club', 23, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnClub', 23, 50);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
        } else {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'study', 18, 0);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'dinner', 18, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'gala', 21, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathEvening', 21, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
        }
      }
    }
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'gala') {
      if (((s as any).nichGalaDisabled ?? 0) === 1) {
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'vanished', 24, 0);
      } else {
        if (((s as any).week ?? 0) <= 5) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 6, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'snooze', 7, 15);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 7, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 8, 30);
        } else {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 7, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'snooze', 8, 15);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 8, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 9, 30);
        }
        if (((s as any).week ?? 0) === 1  ||  ((s as any).week ?? 0) === 3) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 18, 5);
        } else {
          if (((s as any).week ?? 0) === 2) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 9, 0);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveSpa', 9, 5);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'spa', 15, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnSpa', 15, 35);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 18, 5);
          } else {
            if (((s as any).week ?? 0) === 4) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 9, 0);
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveFriend', 9, 5);
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'friend', 17, 30);
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnFriend', 17, 35);
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 18, 5);
            } else {
              if (((s as any).week ?? 0) === 5) {
                qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 18, 5);
              } else {
                if (((s as any).week ?? 0) === 6) {
                  qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 18, 5);
                } else {
                  qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 18, 0);
                }
              }
            }
          }
        }
        if (((s as any).week ?? 0) <= 4) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'dinner', 18, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'living', 20, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathEvening', 22, 15);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
        } else {
          if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'prepareClub', 18, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveClub', 18, 35);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'club', 23, 45);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnClub', 23, 50);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
          } else {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'dinner', 18, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'nicholas', 21, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathEvening', 21, 45);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'tanya') {
        if (((s as any).week ?? 0) <= 5) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 7, 45);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 8, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 9, 15);
        } else {
          if (((s as any).week ?? 0) === 6) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'club', 2, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnClub', 2, 35);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 8, 45);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 9, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 10, 15);
          } else {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 8, 45);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'breakfast', 9, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'bathMorning', 10, 15);
          }
        }
        if (((s as any).nichTanya ?? 0)?.['Uni'] >= 100  &&  ((s as any).nichTanya ?? 0)?.['UniStart'] !== ((s as any).daystart ?? 0)) {
          if (((s as any).week ?? 0) <= 5) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveUni', 10, 20);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'uni', 14, 0);
            if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 5) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnUni', 14, 5);
            }
          }
        } else {
          if (((s as any).week ?? 0) === 1) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 13, 55);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveBallet', 14, 0);
          } else {
            if (((s as any).week ?? 0) === 3) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 12, 0);
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveFriend', 12, 5);
            } else {
              if (((s as any).week ?? 0) === 4) {
                qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 12, 0);
                qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveShopping', 12, 5);
              }
            }
          }
        }
        if (((s as any).week ?? 0) === 1) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'ballet', 16, 30);
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnBallet', 16, 35);
        } else {
          if (((s as any).week ?? 0) === 3) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'friend', 17, 0);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnFriend', 17, 5);
          } else {
            if (((s as any).week ?? 0) === 4) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'shopping', 16, 15);
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'returnShopping', 16, 20);
            }
          }
        }
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 18, 5);
        if (((s as any).week ?? 0) <= 4  ||  ((s as any).week ?? 0) === 7) {
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'dinner', 18, 30);
        }
        qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 20, 30);
        if (((s as any).week ?? 0) === 2  ||  ((s as any).week ?? 0) === 4) {
          if (((s as any).nichNTRelation ?? 0) < 10) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'nicholas', 22, 0);
          } else {
            if (((s as any).nichTanya ?? 0)?.['BF'] > 0) {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'boyfriend', 23, 0);
            } else {
              qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 22, 0);
            }
          }
          qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
        } else {
          if (((s as any).week ?? 0) === 5) {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'prepareClub', 21, 30);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'leaveClub', 21, 35);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'club', 24, 0);
          } else {
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'tanya', 22, 0);
            qspCall(s, 'nichUtil', 'npcActivityAdd', 'sleep', 24, 0);
          }
        }
      }
    }
  }
  (s as any).nichNpcActC = 0;
  // TODO-QSP: :nichNpcActivityLoop
  if (((s as any).nichNpcActTime ?? 0)?.[String((s as any).nichNpcActC ?? 0)] <= ((s as any).hour ?? 0) * 60 + ((s as any).minut ?? 0)) {
    (s as any).nichNpcActC = ((s as any).nichNpcActC ?? 0) + (1);
    if (((s as any).nichNpcActC ?? 0) < Object.keys((s as any).nichNpcActTime ?? {}).length) {
      // TODO-QSP: jump 'nichNpcActivityLoop'
    }
  }
  scene.build();
}

function enterWhereIs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'nicholas') {
    if (((s as any).nichTemp ?? 0) === 'sleep'  ||  ((s as any).nichTemp ?? 0) === 'gala') {
    } else {
      if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathClub'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening') {
      } else {
        if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
        } else {
          if (((s as any).nichTemp ?? 0) === 'leaveWork'  ||  ((s as any).nichTemp ?? 0) === 'returnWork'  ||  ((s as any).nichTemp ?? 0) === 'leaveShopping'  ||  ((s as any).nichTemp ?? 0) === 'returnShopping'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
          } else {
            if (((s as any).nichTemp ?? 0) === 'work') {
            } else {
              if (((s as any).nichTemp ?? 0) === 'study') {
              } else {
                if (((s as any).nichTemp ?? 0) === 'tanya') {
                } else {
                  if (((s as any).nichTemp ?? 0) === 'club') {
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'shopping') {
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
    if (((s as any).locArgs?.[1] ?? 0) === 'gala') {
      if (((s as any).nichTemp ?? 0) === 'sleep'  ||  ((s as any).nichTemp ?? 0) === 'snooze'  ||  ((s as any).nichTemp ?? 0) === 'nicholas'  ||  ((s as any).nichTemp ?? 0) === 'prepareClub') {
      } else {
        if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening') {
        } else {
          if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
          } else {
            if (((s as any).nichTemp ?? 0) === 'leaveSpa'  ||  ((s as any).nichTemp ?? 0) === 'returnSpa'  ||  ((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
            } else {
              if (((s as any).nichTemp ?? 0) === 'club') {
              } else {
                if (((s as any).nichTemp ?? 0) === 'friend') {
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'tanya') {
        if (((s as any).nichTemp ?? 0) === 'sleep'  ||  ((s as any).nichTemp ?? 0) === 'nicholas'  ||  ((s as any).nichTemp ?? 0) === 'tanya'  ||  ((s as any).nichTemp ?? 0) === 'boyfriend') {
        } else {
          if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening'  ||  ((s as any).nichTemp ?? 0) === 'prepareClub') {
          } else {
            if (((s as any).nichTemp ?? 0) === 'breakfast'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'dinner') {
            } else {
              if (((s as any).nichTemp ?? 0) === 'leaveUni'  ||  ((s as any).nichTemp ?? 0) === 'returnUni'  ||  ((s as any).nichTemp ?? 0) === 'leaveBallet'  ||  ((s as any).nichTemp ?? 0) === 'returnBallet'  ||  ((s as any).nichTemp ?? 0) === 'leaveFriend'  ||  ((s as any).nichTemp ?? 0) === 'returnFriend'  ||  ((s as any).nichTemp ?? 0) === 'leaveShopping'  ||  ((s as any).nichTemp ?? 0) === 'returnShopping'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'returnClub') {
              } else {
                if (((s as any).nichTemp ?? 0) === 'uni') {
                } else {
                  if (((s as any).nichTemp ?? 0) === 'ballet') {
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'friend') {
                    } else {
                      if (((s as any).nichTemp ?? 0) === 'shopping') {
                      } else {
                        if (((s as any).nichTemp ?? 0) === 'club') {
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
        if (((s as any).locArgs?.[1] ?? 0) === 'cook') {
          if (((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20) {
          }
        }
      }
    }
  }
  scene.build();
}

function enterIsHome(s: GameState, scene: SceneBuilder): void {
  (s as any).RESULT = 0;
  if (((s as any).nichTemp ?? 0) === 'masterBedroom'  ||  ((s as any).nichTemp ?? 0) === 'masterBathroom'  ||  ((s as any).nichTemp ?? 0) === 'bedroomTanya'  ||  ((s as any).nichTemp ?? 0) === 'bedroomServant'  ||  ((s as any).nichTemp ?? 0) === 'bathroomServant'  ||  ((s as any).nichTemp ?? 0) === 'bedroomGuest'  ||  ((s as any).nichTemp ?? 0) === 'study'  ||  ((s as any).nichTemp ?? 0) === 'living'  ||  ((s as any).nichTemp ?? 0) === 'kitchen') {
    (s as any).RESULT = 1;
  }
  scene.build();
}

function enterIsAlone(s: GameState, scene: SceneBuilder): void {
  if (((s as any).nichTempC1 ?? 0) === 'nicholas') {
  } else {
    if (((s as any).nichTempC1 ?? 0) === 'gala') {
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
  scene.build();
}

function enterIsPresent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).npcLocation ?? 0) === ((s as any).locArgs?.[2] ?? 0)) {
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
      if (((s as any).locArgs?.[1] ?? 0) === 'vaginal'  ||  ((s as any).locArgs?.[1] ?? 0) === 'vaginal_finger'  ||  ((s as any).locArgs?.[1] ?? 0) === 'vaginal_fist'  ||  ((s as any).locArgs?.[1] ?? 0) === 'vaginal_dildo'  ||  ((s as any).locArgs?.[1] ?? 0) === 'vaginal_strap'  ||  ((s as any).locArgs?.[1] ?? 0) === 'vaginal_vibe') {
        (s as any).nichGalaImplantCount = ((s as any).nichGalaImplantCount ?? 0) + (1);
      }
    }
  }
  scene.build();
}

function enterFreeDay(s: GameState, scene: SceneBuilder): void {
  (s as any).nichTempFree = ((((s as any).locArgs?.[1] ?? 0)>0) ? (qspUntranslated(s, "ARGS[1]", { location: "nichUtil" })) : (1));
  if (((s as any).nichVactionTil ?? 0) < ((s as any).daystart ?? 0) + ((s as any).nichTempFree ?? 0) - 1) {
    (s as any).nichVacationFrom = ((s as any).daystart ?? 0);
    (s as any).nichVactionTil = ((s as any).daystart ?? 0) + ((s as any).nichTempFree ?? 0) - 1;
    (s as any).nichEvaluationLastReq = ((s as any).nichVactionTil ?? 0) + 1;
  }
  scene.build();
}

function enterDisableNPC(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'Gala') {
    (s as any).nichGalaDisabled = 1;
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
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
      enterHired(s, scene);
      break;
  }
}

export const nichUtil: LocationDef = {
  name: 'nichUtil',
  title: 'This page should never appear. Please report this bug includ',
  region: 'other',
  enter: enter,
};
