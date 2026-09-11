import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/nicholas/01.jpg');
  if (((s as any).nichTemp ?? 0) === 'sleep') {
    scene.text('Nicholas is sleeping. It would be a bad idea to wake him up now.');
  } else {
    if (((s as any).nichTemp ?? 0) === 'bathMorning'  ||  ((s as any).nichTemp ?? 0) === 'bathEvening'  ||  ((s as any).nichTemp ?? 0) === 'bathClub') {
      scene.text('Nicholas is currently brushing his teeth. It\'s not the right time to talk to him now.');
    } else {
      if (((s as any).nichTemp ?? 0) === 'study') {
        scene.text('Nicholas is sitting at his computer doing his correspondence. When he is finished he might have time for you.');
        scene.actions([
          { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
  }, goto: ['nichNicholas', 'approach'] },
        ]);
      } else {
        if (((s as any).nichTemp ?? 0) === 'breakfast') {
          scene.text('Nicholas is currently enjoying his breakfast.');
        } else {
          if (((s as any).nichTemp ?? 0) === 'leaveWork'  ||  ((s as any).nichTemp ?? 0) === 'leaveShopping'  ||  ((s as any).nichTemp ?? 0) === 'leaveClub') {
            scene.text('Nicholas is putting on his shoes. Apparently he has no time to speak to you now.');
          } else {
            if (((s as any).nichTemp ?? 0) === 'returnWork') {
              scene.text('Nicholas just returned from work. You should give him some time before speaking to him.');
            } else {
              if (((s as any).nichTemp ?? 0) === 'returnShopping') {
                scene.text('Nicholas just returned from a shopping trip. You should give him some time before speaking to him.');
              } else {
                if (((s as any).nichTemp ?? 0) === 'living') {
                  scene.text('Nicholas is sitting on the couch. You could approach him now.');
                  scene.actions([
                    { label: 'Approach', goto: ['nichNicholas', 'approach'] },
                  ]);
                } else {
                  if (((s as any).nichTemp ?? 0) === 'dinner') {
                    scene.text('Nicholas is eating dinner.');
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'gala') {
                    } else {
                      if (((s as any).nichTemp ?? 0) === 'tanya') {
                      } else {
                        if (((s as any).nichTemp ?? 0) === 'returnClub') {
                          scene.text('Nicholas just returned from his club. You should give him some time before speaking to him.');
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
  if (((s as any).locArgs?.[0] ?? 0) === 'approach') {
    scene.img('images/characters/city/nicholas/01.jpg');
    scene.text('You wait for Nicholas to notice you, then you approach him and curtsy.');
    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, what do you want?"
    scene.text(`"${((s as any).pcs_nickname ?? 0)}, what do you want?"`);
    if (((s as any).nichEvaluationLast ?? 0) !== ((s as any).daystart ?? 0)  &&  ((s as any).nichWork ?? 0) === 2) {
      scene.actions([
        { label: 'Evaluation', handler: (st: GameState) => {
    if (((s as any).hour ?? 0) < 12) {
      scene.text('"It\'s not even noon. Are you sure you are done for today?"');
      scene.actions([
        { label: 'Yes', goto: ['nichNicholas', 'evaluation'] },
        { label: 'No', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['nichNicholas', 'evaluation'] }]);
    }
  } },
      ]);
    }
    (s as any).nichGalaPresent = qspFunc(s, 'nichUtil', 'isPresent', 'gala', ((s as any).nichLoc ?? 0));
    (s as any).nichTanyPresent = qspFunc(s, 'nichUtil', 'isPresent', 'tanya', ((s as any).nichLoc ?? 0));
    if (((s as any).nichSex ?? 0) < 10  &&  ((s as any).nichSex ?? 0) >= 0  &&  ((s as any).nichFlirtLast ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Flirt', handler: (st: GameState) => {
    if (((s as any).nichGalaPresent ?? 0) === 1) {
      scene.text('<font color = red>It would be a big mistake to flirt with Nicholas while Gala is in the same room.</font>');
    } else {
      if (((s as any).nichTanyPresent ?? 0) === 1) {
        scene.text('<font color = red>You shouldn\'t flirt with Nicholas while Tanya is in the same room.</font>');
      } else {
        scene.actions([{ label: 'Continue', goto: ['nichNicholas', 'flirt'] }]);
      }
    }
  } },
      ]);
    } else {
      if (((s as any).nichSex ?? 0) >= 10) {
        scene.actions([
          { label: 'Seduce', handler: (st: GameState) => {
    if (((s as any).nichGalaPresent ?? 0) === 1) {
      scene.text('<font color = red>It would be a big mistake to seduce Nicholas while Gala is in the same room.</font>');
    } else {
      if (((s as any).nichTanyPresent ?? 0) === 1) {
        scene.text('<font color = red>You shouldn\'t seduce Nicholas while Tanya is in the same room.</font>');
      } else {
        scene.actions([{ label: 'Continue', goto: ['nichNicholas', 'seduce'] }]);
      }
    }
  } },
        ]);
      }
    }
    if (((s as any).nichWorkState ?? 0) === 1  &&  ((s as any).nichWork ?? 0) === 2) {
      scene.actions([
        { label: 'Quit', goto: ['nichUtil', 'quit'] },
      ]);
    }
    scene.actions([
      { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } else {
    if (((s as any).locArgs?.[0] ?? 0) === 'sex') {
      if (((s as any).locArgs?.[1] ?? 0) === ''  ||  ((s as any).locArgs?.[1] ?? 0) === 'start') {
        qspCall(s, 'boyStat', 'A52');
        scene.img('images/characters/city/nicholas/sex/undress.jpg');
        scene.text('You slowly undress for Nicholas.');
        (s as any).nichSexTemp = 1;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'bj') {
          scene.img('images/characters/city/nicholas/sex/bj/bj\'+rand(0, 10)+\'.jpg');
          qspCall(s, 'arousal', 'bj', 1);
          (s as any).nichSexTemp = ((s as any).nichSexTemp ?? 0) + (1);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'anal') {
            scene.img('images/characters/city/nicholas/sex/anal/anal\'+rand(0, 7)+\'.jpg');
            qspCall(s, 'arousal', 'anal', 1);
            (s as any).nichSexTemp = ((s as any).nichSexTemp ?? 0) + (1);
          }
        }
      }
      if (((s as any).nichSexTemp ?? 0) < 5) {
        qspCall(s, 'stat', '');
        if (((s as any).nichSexTemp ?? 0) === 4) {
          scene.text('Nicholas moans loudly. He seems to be about to cum.');
        }
        scene.actions([
          { label: 'Blowjob', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichNicholas', 'sex', 'bj'
  } },
          { label: 'Anal', handler: (st: GameState) => {
    // TODO-QSP: gt 'nichNicholas', 'sex', 'anal'
  } },
        ]);
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'bj') {
          scene.text('He groans loudly, and you feel his hard cock erupting in your mouth. You swallow it obediently, figuring that is what he wants you to do.');
          qspCall(s, 'cum_call', 'mouth_swallow', 'A52', 1);
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'anal') {
            scene.text('He groans loudly, spraying his seed deep inside your ass.');
            qspCall(s, 'cum_call', 'anus', 'A52', 1);
          }
        }
        qspCall(s, 'arousal', 'end');
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
        ]);
      }
    } else {
      if (((s as any).locArgs?.[0] ?? 0) === 'seduce') {
        scene.img('images/characters/city/nicholas/sex/seduce.jpg');
        // TODO-QSP: dynamic text: "'+$npc_nickname['A52']+'? Is there anything I can do for you?"
        scene.text('"\'+$npc_nickname[\'A52\']+\'? Is there anything I can do for you?"');
        // TODO-QSP: dynamic text: You squeze your breast together, so that '+$npc_firstname['A52']+' has a good lo...
        scene.text('You squeze your breast together, so that \'+$npc_firstname[\'A52\']+\' has a good look at them.');
        scene.text('"I mean <i>anything</i>."');
        scene.text('"Actually there is something you could help me with." he says while unzipping his pants.');
        scene.actions([
          { label: 'Further', goto: ['nichNicholas', 'sex'] },
        ]);
      } else {
        if (((s as any).locArgs?.[0] ?? 0) === 'flirt') {
          (s as any).nichFlirtLast = ((s as any).daystart ?? 0);
          scene.img('images/characters/city/nicholas/sex/flirt.jpg');
          if (((s as any).nichSex ?? 0) < 10) {
            (s as any).nichFlirtCounter = ((s as any).nichFlirtCounter ?? 0) + (1);
            if (((s as any).nichFlirtCounter ?? 0) === 1) {
              scene.text('"Master Nicholas? I just wanted to tell you that I really like the suit you were wearing today."');
              scene.text('"Style is a way to say who you are without having to speak. Rachel Zoe said that. Successful people live by this motto."');
              scene.text('<i>Nicholas doesn\'t seem to be in the mood right now. Maybe you should come back another time.</i>');
            } else {
              if (((s as any).nichFlirtCounter ?? 0) === 2) {
                scene.text('"Master Nicholas? I just wanted to tell you that I really like the new perfume you were wearing today."');
                scene.text('"You are your greatest asset. Put your time, effort and money into training, grooming, and encouraging your greatest asset. Tom Hopkins said something very true there. You should take this advice seriously as well."');
                scene.text('<i>Nicholas doesn\'t seem to be in the mood right now. Maybe you should come back another time.</i>');
              } else {
                if (((s as any).nichFlirtCounter ?? 0) >= 3) {
                  scene.text('"Master Nicholas? I just wanted to tell you that I really like the way your hair…"');
                  if (((s as any).pcs_apprnc ?? 0) >= 120  ||  (((s as any).nichNTRelation ?? 0) >= 10  &&  ((s as any).pcs_apprnc ?? 0) >= 80)) {
                    scene.text('"Let me stop you right there. I know what you are up to."');
                    scene.text('He stands up and makes a step into your direction.');
                    scene.text('"You are a very attractive young woman. And I would be lying if I said that I haven\'t wondered how your skin feels."');
                    scene.text('He makes another step. He is less than one arm length away from you now. You can feel his breath on your skin as he speaks.');
                    scene.text('"I know it should feel wrong. You are my maid. And I am a married man."');
                    scene.text('He gently touches your left shoulder and slowly runs his hand down your arm.');
                    scene.text('"Yet it feels so right."');
                    scene.text('Just before his hand reaches your wrist he stops his movement.');
                    scene.text('"Am I going too far? Did I get the signals wrong? Please tell me if you don\'t want this too."');
                    return;
                    scene.actions([
                      { label: 'I want this', handler: (st: GameState) => {
    (s as any).nichSex = 10;
    scene.text('"Yes, Master Nicholas. I want this."');
    scene.actions([
      { label: 'Further', goto: ['nichNicholas', 'sex'] },
    ]);
  } },
                      { label: 'This is going too far', handler: (st: GameState) => {
    (s as any).nichSex = (-1);
    scene.text('"I am sorry, master Nicholas. But I can\'t do that."');
    scene.text('He looks disappointed.');
    scene.text('"I understand. Of course I have to ask you that you tell nobody about this incident."');
    scene.text('"Of course, Master Nicholas."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    ]);
  } },
                    ]);
                  } else {
                    // TODO-QSP: dynamic text: "<<$pcs_nickname>>, I don't think this would be appropriate. I suggest you get b...
                    scene.text(`"${((s as any).pcs_nickname ?? 0)}, I don't think this would be appropriate. I suggest you get back to your work."`);
                    scene.actions([
                      { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
                    ]);
                  }
                }
              }
            }
          } else {
            scene.actions([{ label: 'Continue', goto: ['nichNicholas', 'seduce'] }]);
          }
          scene.actions([
            { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
          ]);
        } else {
          if (((s as any).locArgs?.[0] ?? 0) === 'desc') {
            scene.img('images/characters/city/nicholas/01.jpg');
            if (((s as any).nichTemp ?? 0) === 'sleep') {
              scene.text('Usually Nicholas is sleeping at this time.');
            } else {
              if (((s as any).nichTemp ?? 0) === 'bathMorning') {
                scene.text('You assume that currently Nicholas is either in his bedroom or in the master bathroom.');
              } else {
                if (((s as any).nichTemp ?? 0) === 'study') {
                  scene.text('At this time Nicholas can usually be found in his study.');
                } else {
                  if (((s as any).nichTemp ?? 0) === 'breakfast') {
                    scene.text('It\'s the time Nicholas usually eats breakfast.');
                  } else {
                    if (((s as any).nichTemp ?? 0) === 'leaveWork') {
                      scene.text('Nicholas is likely heading for work at the moment.');
                    } else {
                      if (((s as any).nichTemp ?? 0) === 'work') {
                        scene.text('Nicholas is most likely at work now.');
                      } else {
                        if (((s as any).nichTemp ?? 0) === 'returnWork') {
                          scene.text('Nicholas will return from work soon.');
                        } else {
                          if (((s as any).nichTemp ?? 0) === 'leaveShopping'  ||  ((s as any).nichTemp ?? 0) === 'shopping'  ||  ((s as any).nichTemp ?? 0) === 'returnShopping') {
                            scene.text('Nicholas usually goes downtown around this time.');
                          } else {
                            if (((s as any).nichTemp ?? 0) === 'living') {
                              scene.text('Nicholas seems to be in the living room.');
                            } else {
                              if (((s as any).nichTemp ?? 0) === 'bathEvening') {
                                scene.text('Nicholas is likely heading for his bed now.');
                              } else {
                                if (((s as any).nichTemp ?? 0) === 'dinner') {
                                  scene.text('Nicholas usually eats dinner around this time.');
                                } else {
                                  if (((s as any).nichTemp ?? 0) === 'gala') {
                                    scene.text('Nicholas seems to be in his bedroom.');
                                  } else {
                                    if (((s as any).nichTemp ?? 0) === 'tanya') {
                                      scene.text('You are sure that Nicholas is somewhere in the apartment but you don\'t know where.');
                                    } else {
                                      if (((s as any).nichTemp ?? 0) === 'leaveClub'  ||  ((s as any).nichTemp ?? 0) === 'club'  ||  ((s as any).nichTemp ?? 0) === 'returnClub'  ||  ((s as any).nichTemp ?? 0) === 'bathClub') {
                                        scene.text('Usually Nicholas goes to his club around this time.');
                                      } else {
                                        scene.text('You have no idea where Nicholas is at the moment.');
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
            scene.actions([
              { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
            ]);
          } else {
            if (((s as any).locArgs?.[0] ?? 0) === 'evaluation') {
              (s as any).nichTempEval = 0;
              if (((s as any).cumsumbod ?? 0)-((s as any).cumsumvag ?? 0)-((s as any).cumsumass ?? 0) > (Math.floor(Math.random() * 4) + 2)) {
                scene.text('<font color = red>Did you really think I won\'t notice the cum on you? That\'s beyond inappropriate.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
              }
              if (((s as any).PShoHeels ?? 0) < 4) {
                scene.text('<font color = orange>I understand that high heels are not a comfortable thing to wear. But your job isn\'t about feeling comfortable and high heels are an essential part of your uniform.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (2);
              }
              if (((s as any).lashair ?? 0) !== 1  &&  ((s as any).pcs_pubes ?? 0) > 3  ||  ((s as any).pcs_leghair ?? 0) > 3) {
                scene.text('<font color = orange>You need to take care of your body hair.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (2);
              }
              if (((s as any).pcs_hairbsh ?? 0) < 1) {
                scene.text('<font color = orange>You didn\'t brush your hair.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (2);
              }
              if (((s as any).nichBreakfLast ?? 0) !== ((s as any).daystart ?? 0)) {
                scene.text('<font color = red>You didn\'t show up for breakfast today. That leaves an exceptional bad impression.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
              } else {
                if (((s as any).nichBreakFQual ?? 0) === 4) {
                  scene.text('<font color = red>You were late for breakfast today. That leaves a very bad impression.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (15);
                } else {
                  if (((s as any).nichBreakFQual ?? 0) === 3) {
                    scene.text('<font color = red>The breakfast wasn\'t even half-way done when we arrived. That leaves a bad impression.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                  } else {
                    if (((s as any).nichBreakFQual ?? 0) === 2) {
                      scene.text('<font color = red>The breakfast wasn\'t completely done when we arrived. That leaves a bad impression.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                    } else {
                      if (((s as any).nichBreakFQual ?? 0) === 1) {
                        if ((!(Math.floor(Math.random() * 10) + 1))) {
                          scene.text('<font color = green>The breakfast was acceptable.</font>');
                          (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                        }
                      }
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[0] === -1) {
                scene.text('<font color = green>I noticed that you applied a special polish in the hallway today. I like this show of extra effort.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (3);
                ((s as any).nichChoreState ?? {})[0] = 0;
              } else {
                if (((s as any).nichChoreState ?? 0)[0] === 0) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                    scene.text('<font color = green>You did a good job cleaning the hallway today.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[0] <= 5) {
                    if ((Math.floor(Math.random() * 10) + 1) <= 9) {
                      scene.text('<font color = orange>Did you notice the dirt in the hallway? I expect you to pay closer attention in the future.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (2);
                    }
                  } else {
                    if (((s as any).nichChoreState ?? 0)[0] <= 15) {
                      scene.text('<font color = red>The hallway is in an unacceptable condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                    } else {
                      scene.text('<font color = red>The hallway is in a catastrophic condition. You do realize that this is an apartment, not a barn?</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[1] === -1) {
                scene.text('<font color = green>I took a look at the guest cloakroom. You did an exceptional job there.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (3);
                ((s as any).nichChoreState ?? {})[1] = 0;
              } else {
                if (((s as any).nichChoreState ?? 0)[1] === 0) {
                } else {
                  if (((s as any).nichChoreState ?? 0)[1] <= 5) {
                    if ((Math.floor(Math.random() * 10) + 1) <= 5) {
                      scene.text('<font color = orange>Did you take a look into the guest cloakroom today? It needs some cleaning up.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (2);
                    }
                  } else {
                    if (((s as any).nichChoreState ?? 0)[1] <= 15) {
                      scene.text('<font color = red>The guest cloakroom is dirty.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                    } else {
                      scene.text('<font color = red>The guest cloakroom is very dirty.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[2] === 0) {
              } else {
                if (((s as any).nichChoreState ?? 0)[2] <= 5) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                    scene.text('<font color = orange>Your personal bedroom is a bit chaotic.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (1);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[2] <= 15) {
                    if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                      scene.text('<font color = orange>Your personal bedroom is very chaotic.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (3);
                    }
                  } else {
                    if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                      scene.text('<font color = orange>Your personal bedroom is extremely chaotic.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[3] === 0) {
              } else {
                if (((s as any).nichChoreState ?? 0)[3] <= 5) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                    scene.text('<font color = orange>Your personal bathroom is a bit dirty.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (1);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[3] <= 15) {
                    if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                      scene.text('<font color = orange>Your personal bathroom is very dirty.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (3);
                    }
                  } else {
                    if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                      scene.text('<font color = orange>Your personal bathroom is extremely dirty.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[4] <= 15) {
              } else {
                if (((s as any).nichChoreState ?? 0)[4] <= 25) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 8) {
                    scene.text('<font color = orange>I looked through my clothes today and found some of them missing. Are you late doing the laundry?</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (3);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[4] <= 35) {
                    scene.text('<font color = orange>You appear to be late doing the laundry. I\'m missing several of my good shirts which should be cleaned up by now.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                  } else {
                    scene.text('<font color = red>Today I was forced to wear one of my shirts which don\'t fit me perfectly anymore. You being this late doing the laundry is not acceptable.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                  }
                }
              }
              if (((s as any).nichChoreModLaundry1 ?? 0) >= 1) {
                scene.text('<font color = red>I heard that you ruined one of my shirts while doing the laundry.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10 * ((s as any).nichChoreModLaundry1 ?? 0));
              }
              if (((s as any).nichChoreModLaundry2 ?? 0) >= 1) {
                scene.text('<font color = green>I took a look at the clothes you washed today. They are flawless and smell exceptionally well.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (3 * ((s as any).nichChoreModLaundry2 ?? 0));
              }
              if (((s as any).nichChoreState ?? 0)[5] === 0) {
              } else {
                if (((s as any).nichChoreState ?? 0)[5] <= 5) {
                  scene.text('<font color = orange>I have taken a look at Tanyas room. It is a bit chaotic. Even though creating this chaos is her fault it\'s your responsibility to clean it up.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                } else {
                  if (((s as any).nichChoreState ?? 0)[5] <= 15) {
                    scene.text('<font color = red>I have taken a look at Tanyas room. It is very chaotic. Even though creating this chaos is her fault it\'s your responsibility to clean it up.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                  } else {
                    scene.text('<font color = red>I have taken a look at Tanyas room. It is extremely chaotic. Even though creating this chaos is her fault it\'s your responsibility to clean it up.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (15);
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[6] === -1) {
                scene.text('<font color = green>You did an exceptional job cleaning the master bathroom. I really like the smell there. And you seem to have a talend of folding towels.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (3);
                ((s as any).nichChoreState ?? {})[6] = 0;
              } else {
                if (((s as any).nichChoreState ?? 0)[6] === 0) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 3) {
                    scene.text('<font color = green>You did a good job cleaning up the master bathroom today.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[6] <= 5) {
                    scene.text('<font color = orange>The master bathroom is a little bit dirty. It doesn\'t look like you cleaned it today. I expect it to be cleaned up perfectly in the future.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                  } else {
                    if (((s as any).nichChoreState ?? 0)[6] <= 15) {
                      scene.text('<font color = red>The master bathroom is in an unacceptable condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                    } else {
                      scene.text('<font color = red>The master bathroom is in a catastrophic condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[7] === 0) {
                if ((Math.floor(Math.random() * 10) + 1) <= 3) {
                  scene.text('<font color = green>You did a good job cleaning up the master bedroom today.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                }
              } else {
                if (((s as any).nichChoreState ?? 0)[7] <= 5) {
                  scene.text('<font color = orange>The master bedroom is a little bit dirty. It doesn\'t look like you cleaned it today. I expect it to be cleaned up perfectly in the future.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                } else {
                  if (((s as any).nichChoreState ?? 0)[7] <= 15) {
                    scene.text('<font color = red>The master bedroom is in an unacceptable condition.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                  } else {
                    scene.text('<font color = red>The master bedroom is in a catastrophic condition.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[8] === -1) {
                scene.text('<font color = green>You did an exceptional job cleaning the living room.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (3);
                ((s as any).nichChoreState ?? {})[8] = 0;
              } else {
                if (((s as any).nichChoreState ?? 0)[8] === 0) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 3) {
                    scene.text('<font color = green>You did a good job cleaning up the living room today.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[8] <= 5) {
                    scene.text('<font color = orange>The living room is a little bit dirty. It doesn\'t look like you cleaned it today. I expect it to be cleaned up perfectly in the future.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                  } else {
                    if (((s as any).nichChoreState ?? 0)[8] <= 15) {
                      scene.text('<font color = red>The living room is in an unacceptable condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                    } else {
                      scene.text('<font color = red>The living room is in a catastrophic condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[9] === -1) {
                scene.text('<font color = green>I really like what you did with the silverware today.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (3);
                ((s as any).nichChoreState ?? {})[9] = 0;
              } else {
                if (((s as any).nichChoreState ?? 0)[9] === 0) {
                  if ((Math.floor(Math.random() * 10) + 1) <= 1) {
                    scene.text('<font color = green>You did a good job cleaning up the kitchen today.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                  }
                } else {
                  if (((s as any).nichChoreState ?? 0)[9] <= 5) {
                    scene.text('<font color = orange>The kitchen is a little bit dirty. It doesn\'t look like you cleaned it today. I expect it to be cleaned up perfectly in the future.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                  } else {
                    if (((s as any).nichChoreState ?? 0)[9] <= 15) {
                      scene.text('<font color = red>The kitchen is in an unacceptable condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                    } else {
                      scene.text('<font color = red>The kitchen is in a catastrophic condition.</font>');
                      (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                    }
                  }
                }
              }
              if (((s as any).nichChoreState ?? 0)[10] === 0) {
                if ((Math.floor(Math.random() * 10) + 1) <= 2) {
                  scene.text('<font color = green>You did a good job cleaning up the study today.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
                }
              } else {
                if (((s as any).nichChoreState ?? 0)[10] <= 5) {
                  scene.text('<font color = orange>The study is a little bit dirty. It doesn\'t look like you cleaned it today. I expect it to be cleaned up perfectly in the future.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
                } else {
                  if (((s as any).nichChoreState ?? 0)[10] <= 15) {
                    scene.text('<font color = red>The study is in an unacceptable condition.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
                  } else {
                    scene.text('<font color = red>The study is in a catastrophic condition.</font>');
                    (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (20);
                  }
                }
              }
              if (((s as any).nichEvalGala ?? 0) === 1) {
                scene.text('<font color = green>My wife told me that you were <i>a good girl</i> today.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (1);
              } else {
                if (((s as any).nichEvalGala ?? 0) === 2) {
                  scene.text('<font color = green>My wife told me that you were <i>a very good girl</i> today.</font>');
                  (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) + (2);
                }
              }
              if (((s as any).nichGalaOpponent ?? 0) >= 10  &&  ((s as any).nichGalaOpponent ?? 0) < 20) {
                scene.text('<font color = red>My wife told me that you performed poorly today. She didn\'t tell me what you did exactly but I will take it into account nevertheless.</font>');
                scene.text('<i>It appears as if Gala wants to get rid of you by talking badly about your job performance.</i>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (5);
              }
              if (((s as any).nichGentleclubE1 ?? 0) > 0  &&  ((s as any).nichGentleclubE1 ?? 0) < 10  &&  ((s as any).nichGentleclubDayE1 ?? 0) < ((s as any).daystart ?? 0)) {
                scene.text('<font color = red>I asked you to attend me yesterday evening but you didn\'t show up.</font>');
                (s as any).nichTempEval = ((s as any).nichTempEval ?? 0) - (10);
              }
              if (((s as any).nichTempEval ?? 0) > 5) {
                if (((s as any).nichPerformance ?? 0) >= 80) {
                  scene.text('Overall you did an outstanding job today and you are consistently performing to my satisfaction. Well done.');
                } else {
                  if (((s as any).nichPerformance ?? 0) < 20) {
                    scene.text('Overall you did an outstanding job today. If you keep this up I\'m willing to forget past shortcomings.');
                  } else {
                    scene.text('Overall you did an outstanding job today. Well done.');
                  }
                }
              } else {
                if (((s as any).nichTempEval ?? 0) >= 0) {
                  if (((s as any).nichPerformance ?? 0) >= 80) {
                    scene.text('Overall you did your job well job today and you are consistently performing to my satisfaction. Well done.');
                  } else {
                    if (((s as any).nichPerformance ?? 0) < 20) {
                      scene.text('Overall you did your job well job today. If you keep this up I might be willing to forget past shortcomings.');
                    } else {
                      scene.text('Overall you did your job well job today.');
                    }
                  }
                } else {
                  if (((s as any).nichTempEval ?? 0) >= -5) {
                    if (((s as any).nichPerformance ?? 0) >= 80) {
                      scene.text('Overall you didn\'t quite meet my expectations today. Since you are usually performing well that\'s not a big issue.');
                    } else {
                      if (((s as any).nichPerformance ?? 0) < 20) {
                        scene.text('Overall you didn\'t quite meet my expectations today. I\'m getting tired of getting disappointed by you.');
                      } else {
                        scene.text('Overall you didn\'t quite meet my expectations today. Your performance has to improve in the future.');
                      }
                    }
                  } else {
                    scene.text('Overall you didn\'t meet my expectations at all today.');
                  }
                }
              }
              if (((s as any).nichDebug ?? 0) === 1) {
                // TODO-QSP: dynamic text: DEBUG: nichTempEval = <<nichTempEval>>
                scene.text(`DEBUG: nichTempEval = ${((s as any).nichTempEval ?? 0)}`);
              }
              (s as any).nichPerformance = ((s as any).nichPerformance ?? 0) + (((s as any).nichTempEval ?? 0));
              (s as any).nichPerformance = 0;
              if (((s as any).locArgs?.[1] ?? 0) === 'silent') {
              } else {
                if ((!((s as any).nichPerformance ?? 0))) {
                  scene.text('I had it with your laziness. Pack your stuff, you are fired!');
                  scene.actions([
                    { label: 'Leave', goto: ['nichUtil', 'fired'] },
                  ]);
                } else {
                  if (((s as any).nichPerformance ?? 0) <= 20) {
                    scene.text('In total you are underperforming. If you keep working like this your remaining time here will be a very short one.');
                  } else {
                    if (((s as any).nichPerformance ?? 0) <= 40) {
                      scene.text('In total I am not satisfied by your performance. It has to improve if you want to keep your job.');
                    } else {
                      if (((s as any).nichPerformance ?? 0) <= 60) {
                        scene.text('In total you are doing a mediocre job. There reason for neither censure nor praise.');
                      } else {
                        if (((s as any).nichPerformance ?? 0) <= 80) {
                          scene.text('In total you are performing well, but there is still room for improvement.');
                        } else {
                          scene.text('In total you are performing exceptionally well. I am glad I hired you.');
                        }
                      }
                    }
                  }
                  if (((s as any).nichWorkState ?? 0) === 0  &&  ((s as any).daystart ?? 0) >= ((s as any).nickHired ?? 0) + 7) {
                    scene.text('In the past days you did your job well enough to pass your probation. You don\'t need to worry about the legal work, I have it already sorted out for you.');
                    scene.text('From now on you don\'t need to see me for daily performance evaluation anymore. Of course you can still ask me if you would like to have a detailed analysis of your work.');
                    (s as any).nichWorkState = 1;
                  }
                  scene.text('That\'s all for now. You are dismissed for today.');
                  (s as any).nichEvaluationLast = ((s as any).daystart ?? 0);
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
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
  scene.actions([
    { label: 'Back', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    default:
      enterDefault(s, scene);
      break;
  }
}

export const nichNicholas: LocationDef = {
  name: 'nichNicholas',
  title: 'Nicholas is sleeping. It would be a bad idea to wake him up ',
  region: 'other',
  enter: enter,
};
