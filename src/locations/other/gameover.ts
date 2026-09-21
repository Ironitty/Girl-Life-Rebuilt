import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterCheck(s: GameState, scene: SceneBuilder): void {
  if (((s as any).cheatVars ?? 0)?.['gameover'] === 0) {
    qspGoto(s, 'gameover', 'screen', '' + ((s as any).locArgs?.[1] ?? 0) + '');
  }
  scene.build();
}

function enterForce(s: GameState, scene: SceneBuilder): void {
  qspGoto(s, 'gameover', 'screen', '' + ((s as any).locArgs?.[1] ?? 0) + '');
  // TODO-QSP: end
  scene.build();
}

function enterScreen(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'gameover', 'screen');
  scene.text('<center><b>GAME OVER</b></center>');
  if (((s as any).over ?? 0) === 1  ||  Number((s as any).locArgs?.[1] ?? 0) === '1') {
    scene.img('images/system/2_endings/deadgirl.jpg');
    scene.text('You\'re dragged out by the morgue attendants and the pathologist notes that you died from an unknown cause. Your body is soon handed over to your parents.');
  } else {
    if (((s as any).over ?? 0) === 2  ||  Number((s as any).locArgs?.[1] ?? 0) === '2') {
      scene.img('images/system/2_endings/over.jpg');
      if (((s as any).start_type ?? 0)?.['magic'] === 'tg') {
        scene.text('You go mad and start running around town naked while screaming that you\'re a man. The police are quickly alerted and you\'re taken to a mental hospital.');
        scene.text('There, you\'re put in a straitjacket and placed in a room with soft walls. You spend the rest of your days in happy delusions about your family and being a man again, but the delusions never became reality.');
        scene.text('Hint: When your mood is low, your mind weakens and eventually breaks. In order to keep your mood and psyche at an acceptable level, make sure you\'re healthy and increase it by watching TV and visiting a psychotherapist.');
      } else {
        scene.text('You go mad and start running around town naked while screaming that you\'re a character in a video game. The police are quickly alerted and you\'re arrested. Your mother is forced to send you to a mental hospital, hoping you\'ll recover.');
        scene.text('There, you\'re put in a straitjacket and placed in a room with soft walls. You spend the rest of your days in happy delusions about your family. You can\'t help but wonder how different your life would have been if you didn\'t follow the whisper from the twisted mouse clicker?');
        scene.text('Hint: When your mood is low, your mind weakens and eventually breaks. In order to keep your mood and psyche at an acceptable level, make sure you\'re healthy and increase it by watching TV or visiting the psychotherapist.');
      }
    } else {
      if (((s as any).over ?? 0) === 3  ||  Number((s as any).locArgs?.[1] ?? 0) === '3') {
        scene.img('images/system/2_endings/deadgirl.jpg');
        scene.text('You die of starvation. A stupid way to go, but apparently it\'s one of the symptoms of anorexia.');
      } else {
        if (((s as any).over ?? 0) === 4  ||  Number((s as any).locArgs?.[1] ?? 0) === '4') {
          scene.img('images/system/2_endings/birth.jpg');
          scene.text('You die from complications during childbirth.');
        } else {
          if (((s as any).over ?? 0) === 5  ||  Number((s as any).locArgs?.[1] ?? 0) === '5') {
            scene.img('images/system/2_endings/toilet.jpg');
            scene.text('You try to run, but immediately find yourself in a strange place surrounded by walls with obscene graffiti. You couldn\'t move even if you tried. Suddenly, the door opens and some fat guy comes in. He undoes his pants and turns his back to you, his ass hovering in the air just above you. That\'s when you realize that the witch has kept her promise and turned you into a toilet at the station.');
            scene.text('You spend the next 50 years trapped in this horrible reality until the train station undergoes repair and you\'re dumped in a landfill and forgotten.');
          } else {
            if (((s as any).over ?? 0) === 6  ||  Number((s as any).locArgs?.[1] ?? 0) === '6') {
              scene.img('images/system/2_endings/stab.jpg');
              scene.text('You suddenly feel a sharp piercing pain in your abdomen, then another, and another…');
              scene.text('"Greetings from the boys…" a shadowy figure whispers in your ear.');
              scene.text('You look down as he moves away and realize that you\'re standing in a puddle of your own blood, with multiple stab wounds in your stomach. The last thing you see is the ground rushing towards you…');
            } else {
              if (((s as any).over ?? 0) === 7  ||  Number((s as any).locArgs?.[1] ?? 0) === '7') {
                scene.img('images/system/2_endings/deadgirl.jpg');
                scene.text('The last thing you see is a police baton flying at your face.');
                scene.text('You\'re beaten to death and your early demise is registered as an accident, the pathologist noting that you died from an unknown blow to the head.');
                scene.text('Your body is soon handed over to your parents.');
              } else {
                if (((s as any).over ?? 0) === 8  ||  Number((s as any).locArgs?.[1] ?? 0) === '8') {
                  scene.img('images/system/2_endings/crackwhore8.jpg');
                  scene.text('"At some point, you question your life decisions."');
                  scene.text('You try to understand why you made the choices you did as yet another explosion of cum fills your mouth. Without finding an answer, you swallow everything like you normally do and drift back into your drug hazed existence.');
                } else {
                  if (((s as any).over ?? 0) === 9  ||  Number((s as any).locArgs?.[1] ?? 0) === '9') {
                    scene.img('images/system/2_endings/overdose.jpg');
                    scene.text('Your last moments are those of bliss, your mind so hazed by the drugs that you don\'t even know you\'re dying. You body is found surrounded by the drugs that ended your life.');
                  } else {
                    if (((s as any).over ?? 0) === 10  ||  Number((s as any).locArgs?.[1] ?? 0) === '10') {
                      scene.img('images/system/2_endings/over10.jpg');
                      scene.text('You fall into a quagmire while trying to find a way out of the swamp and are sucked down. The blue sky through the tree tops is the last thing you see before marsh muck closes over you forever.');
                    } else {
                      if (((s as any).over ?? 0) === 11  ||  Number((s as any).locArgs?.[1] ?? 0) === '11') {
                        scene.img('images/system/2_endings/over11.jpg');
                        scene.text('You apparently learned nothing from when your mother used to read you the tale of Little Red Riding Hood. Otherwise, you might not have gone into the forest at night alone.');
                        scene.text('Your name and fate are now a cautionary tale the locals tell to their children in the hopes that they might actually listen.');
                      } else {
                        if (((s as any).over ?? 0) === 12  ||  Number((s as any).locArgs?.[1] ?? 0) === '12') {
                          scene.img('images/system/2_endings/over12.jpg');
                          scene.text('Your body is found a few months later by some hunters. No one ever finds out what happened to you.');
                        } else {
                          if (((s as any).over ?? 0) === 13  ||  Number((s as any).locArgs?.[1] ?? 0) === '13') {
                            scene.img('images/system/2_endings/fade.jpg');
                            scene.text('As the procedure continues, you feel a strange sensation, as if someone punched a hole in your spirit. You lose focus on everything around you, and it feels like you\'re flying into the ether. You attempt to rally your magical energies to plug the hole, but the hole in your spirit isn\'t able to be blocked by spirit energy, and you just force more of yourself out of it. It eats you up from your center, leaving no energy in the part that was once you. The last b t of you f des aw y, an wha   as y   n     g r                                .');
                          } else {
                            if (((s as any).over ?? 0) === 14  ||  Number((s as any).locArgs?.[1] ?? 0) === '14') {
                              scene.img('images/system/2_endings/prison.jpg');
                              scene.text('You spend the rest of your life in and out of prison, wasting whatever potential you might have had.');
                            } else {
                              if (((s as any).over ?? 0) === 15  ||  Number((s as any).locArgs?.[1] ?? 0) === '15') {
                                scene.img('images/system/2_endings/deadgirl.jpg');
                                scene.text('Your throat has felt like sandpaper for what feels like forever, but you kept putting off finding something to drink. Without warning, your vision blurs, your legs give out from under you, and your heart just stops. You never realized just how badly you\'d let yourself go without noticing. Your body finally gives out from dehydration.');
                              } else {
                                if (((s as any).over ?? 0) === 16  ||  Number((s as any).locArgs?.[1] ?? 0) === '16') {
                                  scene.img('images/system/2_endings/deadgirl.jpg');
                                  scene.text('Between skipped meals and constantly running yourself ragged, your body simply runs out of anything left to give. Without warning, your heart gives out from sheer malnutrition and exhaustion.');
                                } else {
                                  if (((s as any).over ?? 0) === 17  ||  Number((s as any).locArgs?.[1] ?? 0) === '17') {
                                    scene.img('images/system/2_endings/deadgirl.jpg');
                                    scene.text('You can\'t remember the last time you ate or drank anything. Starving and parched, your body simply stops. You die alone, wondering how you let it get this bad without even noticing.');
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
  // TODO-QSP: dynamic 'act ''End?'': gt ''gameover'', ''endscreen'', ''<<$ARGS[1]>>'' '
  // TODO-QSP: end
  scene.build();
}

function enterEndscreen(s: GameState, scene: SceneBuilder): void {
  scene.hideMenu();
  // TODO-QSP: showobjs 0
  // TODO-QSP: showinput 0
  (s as any).fcolor = 0;
  (s as any).bcolor = 0;
  (s as any).lcolor = 0;
  if (Number((s as any).locArgs?.[1] ?? 0) === '8') {
    scene.text('<center><h1>end</h1></center>');
    scene.text('<center><h1>Special ending - heroin whore!</h1></center>');
    scene.img('images/system/2_endings/crackwhore8.jpg');
  } else {
    scene.text('<center><h1>End</h1></center>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to main menu', goto: ['start', ''] },
    { label: 'Load a save', handler: (st: GameState) => {
    // TODO-QSP: opengame
  } },
    { label: 'Load last auto-save', goto: ['gameover', 'load_autosave'] },
  ]);
  scene.build();
}

function enterLoadAutosave(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['loc'] === 'city') {
    // TODO-QSP: opengame 'autosave_city_<<$weekName>>.sav'
  } else {
    if (((s as any).start_type ?? 0)?.['loc'] === 'uni') {
      // TODO-QSP: opengame 'autosave_uni_<<$weekName>>.sav'
    } else {
      // TODO-QSP: opengame 'autosave_sg_<<$weekName>>.sav'
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'check':
      enterCheck(s, scene);
      break;
    case 'force':
      enterForce(s, scene);
      break;
    case 'screen':
      enterScreen(s, scene);
      break;
    case 'endscreen':
      enterEndscreen(s, scene);
      break;
    case 'load_autosave':
      enterLoadAutosave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gameover: LocationDef = {
  name: 'gameover',
  title: 'GAME OVER',
  region: 'other',
  enter: enter,
};
