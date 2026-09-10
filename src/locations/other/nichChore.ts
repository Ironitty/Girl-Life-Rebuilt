import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).locArgs?.[1] ?? 0) === 'hallway') {
    (s as any).nichChoreID = 0;
    (s as any).nichChoreTimeF = 1;
    (s as any).nichTimeBQuick = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
    (s as any).nichTimeBNormal = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
    (s as any).nichTimeBDiligent = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
    } else {
      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
        (s as any).nichChoreTimeF = 2;
      } else {
        (s as any).nichChoreTimeF = 4;
      }
      if (((s as any).locArgs?.[1] ?? 0) === 'bathGuest') {
        (s as any).nichChoreID = 1;
        (s as any).nichChoreTimeF = 1;
        (s as any).nichTimeBQuick = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
        (s as any).nichTimeBNormal = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
        (s as any).nichTimeBDiligent = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
        } else {
          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
            (s as any).nichChoreTimeF = 2;
          } else {
            (s as any).nichChoreTimeF = 4;
          }
          if (((s as any).locArgs?.[1] ?? 0) === 'servant') {
            (s as any).nichChoreID = 2;
            (s as any).nichChoreTimeF = 1;
            (s as any).nichTimeBQuick = (5 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
            (s as any).nichTimeBNormal = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
            (s as any).nichTimeBDiligent = (-1);
            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
            } else {
              if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                (s as any).nichChoreTimeF = 2;
              } else {
                (s as any).nichChoreTimeF = 4;
              }
              if (((s as any).locArgs?.[1] ?? 0) === 'bathServant') {
                (s as any).nichChoreID = 3;
                (s as any).nichChoreTimeF = 1;
                (s as any).nichTimeBQuick = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                (s as any).nichTimeBNormal = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                (s as any).nichTimeBDiligent = (-1);
                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                } else {
                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                    (s as any).nichChoreTimeF = 2;
                  } else {
                    (s as any).nichChoreTimeF = 4;
                  }
                  if (((s as any).locArgs?.[1] ?? 0) === 'laundry') {
                    (s as any).nichChoreID = 4;
                    (s as any).nichChoreTimeF = 1;
                    (s as any).nichTimeBQuick = (45 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                    (s as any).nichTimeBNormal = (90 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                    (s as any).nichTimeBDiligent = (180 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                    } else {
                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 25) {
                      }
                      if (((s as any).locArgs?.[1] ?? 0) === 'tanya') {
                        (s as any).nichChoreID = 5;
                        (s as any).nichChoreTimeF = 1;
                        (s as any).nichTimeBQuick = (5 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                        (s as any).nichTimeBNormal = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                        (s as any).nichTimeBDiligent = (-1);
                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                        } else {
                          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                            (s as any).nichChoreTimeF = 2;
                          } else {
                            (s as any).nichChoreTimeF = 4;
                          }
                          if (((s as any).locArgs?.[1] ?? 0) === 'masterbath') {
                            (s as any).nichChoreID = 6;
                            (s as any).nichChoreTimeF = 1;
                            (s as any).nichTimeBQuick = (20 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                            (s as any).nichTimeBNormal = (40 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                            (s as any).nichTimeBDiligent = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                            } else {
                              if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                                (s as any).nichChoreTimeF = 2;
                              } else {
                                (s as any).nichChoreTimeF = 4;
                              }
                              if (((s as any).locArgs?.[1] ?? 0) === 'master') {
                                (s as any).nichChoreID = 7;
                                (s as any).nichChoreTimeF = 1;
                                (s as any).nichTimeBQuick = (5 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                (s as any).nichTimeBNormal = (10 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                (s as any).nichTimeBDiligent = (-1);
                                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                                } else {
                                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                                    (s as any).nichChoreTimeF = 2;
                                  } else {
                                    (s as any).nichChoreTimeF = 4;
                                  }
                                  if (((s as any).locArgs?.[1] ?? 0) === 'living') {
                                    (s as any).nichChoreID = 8;
                                    (s as any).nichChoreTimeF = 1;
                                    (s as any).nichTimeBQuick = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                    (s as any).nichTimeBNormal = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                    (s as any).nichTimeBDiligent = (120 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                                    } else {
                                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                                        (s as any).nichChoreTimeF = 2;
                                      } else {
                                        (s as any).nichChoreTimeF = 4;
                                      }
                                      if (((s as any).locArgs?.[1] ?? 0) === 'kitchen') {
                                        (s as any).nichChoreID = 9;
                                        (s as any).nichChoreTimeF = 1;
                                        (s as any).nichTimeBQuick = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                        (s as any).nichTimeBNormal = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                        (s as any).nichTimeBDiligent = (120 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                                        } else {
                                          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                                            (s as any).nichChoreTimeF = 2;
                                          } else {
                                            (s as any).nichChoreTimeF = 4;
                                          }
                                          if (((s as any).locArgs?.[1] ?? 0) === 'study') {
                                            (s as any).nichChoreID = 10;
                                            (s as any).nichChoreTimeF = 1;
                                            (s as any).nichTimeBQuick = (15 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                            (s as any).nichTimeBNormal = (30 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                            (s as any).nichTimeBDiligent = (60 * (200 - ((s as any).pcs_cleaning ?? 0))) / 200;
                                            if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] === 0) {
                                            } else {
                                              if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] <= 15) {
                                                (s as any).nichChoreTimeF = 2;
                                              } else {
                                                (s as any).nichChoreTimeF = 4;
                                              }
                                            }
                                            (s as any).nichtTimeQuick = ((s as any).nichTimeBQuick ?? 0) * ((s as any).nichChoreTimeF ?? 0);
                                            (s as any).nichTimeNormal = ((s as any).nichTimeBNormal ?? 0) * ((s as any).nichChoreTimeF ?? 0);
                                            (s as any).nichTimeDiligent = ((s as any).nichTimeBDiligent ?? 0) * ((s as any).nichChoreTimeF ?? 0);
                                            if (((s as any).ARGS ?? 0)[2] === 1) {
                                              // TODO-QSP: jump 'nichChoreSkipInspect'
                                            }
                                            scene.actions([
                                              { label: '<<$nichChoreActCaption>>', handler: (st: GameState) => {
    // TODO-QSP: :nichChoreSkipInspect
    qspCall(s, 'stat', '');
    scene.img(`${((s as any).nichTempPic ?? 0)}`);
    // TODO-QSP: dynamic text: <<$nichChoreDesc>>
    scene.text(`${((s as any).nichChoreDesc ?? 0)}`);
    if (((s as any).nichOutfitState ?? 0) === 0) {
      scene.text('<b><font color = red>You have to change into an appropriate outfit before cleaning up.</font></b>');
    } else {
      if (((s as any).nichTimeDiligent ?? 0) > 0) {
        scene.actions([
          { label: '(<<nichTimeDiligent>> minutes) Clean diligently', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', 3
  } },
        ]);
      }
      scene.actions([
        { label: '(<<nichtTimeQuick>> minutes) Clean quickly', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', 1
  } },
        { label: '(<<nichTimeNormal>> minutes) Clean normally', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', 2
  } },
      ]);
    }
    if (((s as any).nichChoreMode ?? 0) === 0) {
      scene.actions([
        { label: 'Don\'t clean', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      qspCall(s, 'nichChore', 'cleanApartmentActions', 0);
    }
  } },
                                            ]);
                                          } else {
                                            if (((s as any).ARGS ?? 0)[2] !== 1) {
                                              (s as any).nichRand = Math.floor(Math.random() * 100) + 1;
                                              if (((s as any).nichChoreID ?? 0) === 5) {
                                                if (((s as any).nichTanya ?? 0)?.['Relationship'] > 0  &&  ((s as any).nichTanya ?? 0)?.['Relationship'] < 4  &&  ((s as any).nichTanya ?? 0)?.['Dominance'] >= 20) {
                                                  (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', 'bedroomTanya');
                                                  if (((s as any).nichTanyPresent ?? 0) !== 0) {
                                                    if (((s as any).nichRand ?? 0) <= 30  ||  ((s as any).nichDebug ?? 0) === 1) {
                                                      scene.img('images/characters/city/tanya/encounter/dom1.jpg');
                                                      scene.text('When you start cleaning Tanya approaches you from behind and smacks you on your butt.');
                                                      // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, don't miss that edge over there." she points at a small ...
                                                      scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, don't miss that edge over there." she points at a small mess she obviously created on purpose.`);
                                                      return;
                                                      scene.actions([
                                                        { label: 'Comply', handler: (st: GameState) => {
    (s as any).nichTanya['Dominance'] = ((s as any).nichTanya['Dominance'] ?? 0) + (2);
    scene.text('Once you are done cleaning up the first spot Tanya points you to another one. She obviously enjoys bossing you around, taking several opportunities to hit you on you butt again.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
    ]);
  } },
                                                        { label: 'Tell her to stop this', handler: (st: GameState) => {
    (s as any).nichTanya['Dominance'] = ((s as any).nichTanya['Dominance'] ?? 0) - (3);
    scene.text('She looks a little bit disappointed as you tell her that you are not in the mood for this right now and want to focus on your work.');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
    ]);
  } },
                                                      ]);
                                                    }
                                                  }
                                                }
                                              } else {
                                                if (((s as any).nichGalaContractActive ?? 0) === 1  &&  ((s as any).nichRand ?? 0) <= 40) {
                                                  if (qspFunc(s, 'nichUtil', 'isAlone', 'gala', 'living') === 1) {
                                                    (s as any).nichRand = Math.floor(Math.random() * 10) + 1;
                                                    if (((s as any).nichRand ?? 0) <= 5) {
                                                      scene.text('Gala sits on the sofa and watches you as you start cleaning. It doesn\'t take long before she snaps her finger.');
                                                      scene.text('"Slave! You missed a spot. Get over here!"');
                                                      scene.text('She points at her left shoe.');
                                                      scene.text('"And use your tongue!"');
                                                      scene.actions([
                                                        { label: 'Lick her shoe', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid1.jpg');
    scene.text('You get down to your knees and lick her shoe the best you can.');
    if (((s as any).nichRand ?? 0) === 1) {
      scene.text('"Good enough. Now get back to work!"');
      scene.actions([
        { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
      ]);
    } else {
      scene.text('"Still not clean. You are not trying hard enough!"');
      scene.actions([
        { label: 'Continue licking', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid2.jpg');
    scene.text('She pushes your head down with her other foot while you continue licking her shoe.');
    if (((s as any).nichRand ?? 0) <= 3) {
      scene.text('"Good enough. Now get back to work!"');
      scene.actions([
        { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
      ]);
    } else {
      scene.text('Finally she pulls away her shoe and inspects it closely.');
      scene.text('"You did a fine job there. I think you earned yourself a reward."');
      scene.text('Finally she pulls away her shoe and inspects it closely.');
      scene.text('"What is that?! You made it even more dirty. I think it\'s time to teach you a lesson."');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/strapon1.jpg');
    scene.text('She undresses and fastens a strapon around her waist. You know what to do and drop to your knees in front of her.');
    scene.text('She grabs your head and starts mercilessly fucking your skull, forcing her dildo down your throat.');
    scene.text('Once she is done she forces you back to your feet by pulling your hair.');
    scene.text('"Enough fun. Now get back to work!"');
    qspCall(s, 'arousal', 'bj', 5, 'rough', 'lesbian', 'deepthroat');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
    ]);
  } },
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid3.jpg');
    scene.text('She bends you over and pulls your skirt up.');
    scene.text('"Don\'t… be… lazy… you… stupid… cunt!"');
    scene.text('She emphasizes each word with a smack on your butt. She repeats her sentence several times.');
    scene.text('"Do you understand? Yes? Then back to work!"');
    scene.text('You pull down your skirt and get back up.');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
    ]);
  } },
      ]);
    }
  } },
      ]);
    }
  } },
                                                      ]);
                                                    } else {
                                                      scene.text('Gala sits on the sofa and watches you as you start cleaning. It doesn\'t take long before she snaps her finger.');
                                                      scene.text('"Slave! You missed a spot. Get over here! Bend over!"');
                                                      scene.actions([
                                                        { label: 'Bent over', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/maid3.jpg');
    scene.text('You bend over and pull your skirt up.');
    scene.text('"Don\'t… be… lazy… you… stupid… cunt!"');
    scene.text('She emphasizes each word with a smack on your butt. She repeats her sentence several times.');
    scene.text('"Do you understand? Yes? Then back to work!"');
    scene.text('You pull down your skirt and get back up.');
    qspCall(s, 'pain', '', 1, 'asscheeks', 'spank');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue cleaning', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'work', ARGS[1], 1
  } },
    ]);
  } },
                                                      ]);
                                                    }
                                                    return;
                                                  }
                                                }
                                              }
                                            }
                                            (s as any).nichRand = Math.floor(Math.random() * 100) + 1;
                                            (s as any).nichChoreResult = 0;
                                            if (((s as any).nichChoreID ?? 0) === 0) {
                                              if (((s as any).ARGS ?? 0)[1] === 1) {
                                                // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                  // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                  // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                }
                                              } else {
                                                // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Much to your delight the polish visibl...
                                                // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = pcs_cleaning
                                                // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'The polish has no visible effect. The ...
                                                // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 100
                                              }
                                            } else {
                                              if (((s as any).ARGS ?? 0)[1] === 1) {
                                                // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                  // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                  // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                }
                                              } else {
                                                // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'You managed to create a perfect ambien...
                                                // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = pcs_cleaning
                                                // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'The effect is not as stunning as you h...
                                                // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 100
                                              }
                                              if (((s as any).nichChoreID ?? 0) === 2) {
                                                if (((s as any).ARGS ?? 0)[1] === 1) {
                                                  // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                  // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                  }
                                                }
                                              } else {
                                                if (((s as any).ARGS ?? 0)[1] === 1) {
                                                  // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                  // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                  if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                  }
                                                }
                                                if (((s as any).nichChoreID ?? 0) === 4) {
                                                  if (((s as any).ARGS ?? 0)[1] === 1) {
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are done you realize that one...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 10
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Taking a look at the laundry you reali...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 40
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "nichChoreResult = max (0, nichChoreState[ni...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 10000
                                                  } else {
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "nichChoreResult = max (0, nichChoreState[ni...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 10000
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'In the end the clothes smell great and...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = pcs_cleaning
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "nichChoreResult = max (0, nichChoreState[ni...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 10000
                                                  }
                                                } else {
                                                  if (((s as any).ARGS ?? 0)[1] === 1) {
                                                    // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                    // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                    if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                      // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                      // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                    }
                                                  }
                                                  if (((s as any).nichChoreID ?? 0) === 6) {
                                                    if (((s as any).ARGS ?? 0)[1] === 1) {
                                                      // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                      // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                      }
                                                    } else {
                                                      // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'You managed to create a perfect ambien...
                                                      // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = pcs_cleaning
                                                      // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'The effect is not as stunning as you h...
                                                      // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 100
                                                    }
                                                  } else {
                                                    if (((s as any).ARGS ?? 0)[1] === 1) {
                                                      // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                      // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                      if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                      }
                                                    }
                                                    if (((s as any).nichChoreID ?? 0) === 8) {
                                                      if (((s as any).ARGS ?? 0)[1] === 1) {
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                          // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                          // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                        }
                                                      } else {
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'You managed to create a perfect ambien...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = pcs_cleaning
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'The effect is not as stunning as you h...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 100
                                                      }
                                                    } else {
                                                      if (((s as any).ARGS ?? 0)[1] === 1) {
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                          // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                          // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                        }
                                                      } else {
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'The effect is very convincing. Nichola...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = pcs_cleaning
                                                        // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'The effect is not as stunning as you h...
                                                        // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 100
                                                      }
                                                      if (((s as any).nichChoreID ?? 0) === 10) {
                                                        if (((s as any).ARGS ?? 0)[1] === 1) {
                                                          // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                          // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                          if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 10) {
                                                            // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = "*pl 'Once you are finished you realize that...
                                                            // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 30
                                                          }
                                                        }
                                                      }
                                                      // TODO-QSP: $nichChoreResultCode[arrsize('$nichChoreResultCode')] = ''
                                                      // TODO-QSP: nichChoreResulChance[arrsize('nichChoreResulChance')] = 10000
                                                      (s as any).nichI = 0;
                                                      // TODO-QSP: :nichChoreResultLoop
                                                      if (((s as any).nichRand ?? 0) <= ((s as any).nichChoreResulChance ?? 0)?.[String((s as any).nichI ?? 0)]) {
                                                        scene.img(`${((s as any).nichTempPic ?? 0)}`);
                                                        // TODO-QSP: $nichChoreDesc
                                                      } else {
                                                        (s as any).nichRand = ((s as any).nichRand ?? 0) - (((s as any).nichChoreResulChance ?? 0)?.[String((s as any).nichI ?? 0)]);
                                                        (s as any).nichI = ((s as any).nichI ?? 0) + (1);
                                                        // TODO-QSP: jump 'nichChoreResultLoop'
                                                      }
                                                      if (((s as any).ARGS ?? 0)[1] === 1) {
                                                        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichtTimeQuick ?? 0));
                                                        // TODO-QSP: gs 'exp_gain', 'cleaning', rand (0, 1)
                                                      } else {
                                                        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichTimeNormal ?? 0));
                                                        // TODO-QSP: gs 'exp_gain', 'cleaning', rand (1, 3)
                                                        (s as any).minut = ((s as any).minut ?? 0) + (((s as any).nichTimeDiligent ?? 0));
                                                        // TODO-QSP: gs 'exp_gain', 'cleaning', rand (1, 5)
                                                      }
                                                      (s as any).nichChoreState[nichChoreID] = ((s as any).nichChoreResult ?? 0);
                                                      qspCall(s, 'stat', '');
                                                      if (((s as any).nichChoreMode ?? 0) === 0) {
                                                        scene.actions([
                                                          { label: 'Finish', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
                                                        ]);
                                                      } else {
                                                        qspCall(s, 'nichChore', 'cleanApartmentActions', 1);
                                                      }
                                                      if (((s as any).locArgs?.[0] ?? 0) === 'cleanApartment') {
                                                        if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'start') {
                                                          (s as any).nichChoreMode = 1;
                                                          if (((s as any).nichChoreCurrent ?? 0) === '') {
                                                          }
                                                          // TODO-QSP: gt 'nichChore', 'inspect', $nichChoreCurrent, 1
                                                        } else {
                                                          scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
                                                        }
                                                      } else {
                                                        if (((s as any).nichChoreState ?? 0)?.[String((s as any).nichChoreID ?? 0)] > 0  &&  ((s as any).ARGS ?? 0)[1] === 1) {
                                                          scene.actions([
                                                            { label: 'Clean again', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', $nichChoreCurrent, 1
  } },
                                                          ]);
                                                        }
                                                        if (((s as any).nichChoreID ?? 0) === 0) {
                                                          scene.actions([
                                                            { label: 'Continue to guest cloakroom', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'bathGuest', 1
  } },
                                                          ]);
                                                        } else {
                                                          if (((s as any).nichChoreID ?? 0) === 2) {
                                                            scene.actions([
                                                              { label: 'Continue to your bathroom', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'bathServant', 1
  } },
                                                            ]);
                                                          } else {
                                                            if (((s as any).nichChoreID ?? 0) === 4) {
                                                              scene.actions([
                                                                { label: 'Continue to Tanyas bedroom', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'tanya', 1
  } },
                                                              ]);
                                                            } else {
                                                              if (((s as any).nichChoreID ?? 0) === 6) {
                                                                scene.actions([
                                                                  { label: 'Continue to Nicholas\' bedroom', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'master', 1
  } },
                                                                ]);
                                                              } else {
                                                                if (((s as any).nichChoreID ?? 0) === 8) {
                                                                  scene.actions([
                                                                    { label: 'Continue to the kitchen', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'kitchen', 1
  } },
                                                                  ]);
                                                                } else {
                                                                  if (((s as any).nichChoreID ?? 0) === 10) {
                                                                    scene.actions([
                                                                      { label: 'Finish', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'cleanApartment', 'end'
  } },
                                                                    ]);
                                                                  }
                                                                  if (((s as any).nichChoreID ?? 0) < 10) {
                                                                    scene.actions([
                                                                      { label: 'Pause cleaning', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
                                                                    ]);
                                                                  }
                                                                  scene.actions([
                                                                    { label: 'Continue to the study', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'study', 1
  } },
                                                                  ]);
                                                                }
                                                                scene.actions([
                                                                  { label: 'Continue to the living room', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'living', 1
  } },
                                                                ]);
                                                              }
                                                              scene.actions([
                                                                { label: 'Continue to the master bathroom', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'masterbath', 1
  } },
                                                              ]);
                                                            }
                                                            scene.actions([
                                                              { label: 'Check laundry', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'laundry', 1
  } },
                                                            ]);
                                                          }
                                                          scene.actions([
                                                            { label: 'Continue to your bedroom', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichChore', 'inspect', 'servant', 1
  } },
                                                          ]);
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
  scene.build();
}

export const nichChore: LocationDef = {
  name: 'nichChore',
  region: 'other',
  locationType: 'event',
  enter: enter,
};
