import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterTest(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupvalue ?? 0)[1] > 450  &&  ((s as any).grupwarning ?? 0)[1] === 1) {
    ((s as any).grupwarning ?? {})[1] = 0;
  } else {
    if (((s as any).grupvalue ?? 0)[1] < 400  &&  ((s as any).grupvalue ?? 0)[1] > 350  &&  ((s as any).grupwarning ?? 0)[1] > 1) {
      ((s as any).grupwarning ?? {})[1] = 1;
    } else {
      if (((s as any).grupvalue ?? 0)[2] > 450  &&  ((s as any).grupwarning ?? 0)[2] === 1) {
        ((s as any).grupwarning ?? {})[2] = 0;
      } else {
        if (((s as any).grupvalue ?? 0)[2] < 400  &&  ((s as any).grupvalue ?? 0)[2] > 350  &&  ((s as any).grupwarning ?? 0)[1] > 1) {
          ((s as any).grupwarning ?? {})[2] = 1;
        } else {
          if (((s as any).grupvalue ?? 0)[3] > 450  &&  ((s as any).grupwarning ?? 0)[3] === 1) {
            ((s as any).grupwarning ?? {})[3] = 0;
          } else {
            if (((s as any).grupvalue ?? 0)[3] < 400  &&  ((s as any).grupvalue ?? 0)[3] > 350  &&  ((s as any).grupwarning ?? 0)[1] > 1) {
              ((s as any).grupwarning ?? {})[3] = 1;
            } else {
              if (((s as any).grupvalue ?? 0)[4] > 450  &&  ((s as any).grupwarning ?? 0)[4] === 1) {
                ((s as any).grupwarning ?? {})[4] = 0;
              } else {
                if (((s as any).grupvalue ?? 0)[4] < 400  &&  ((s as any).grupvalue ?? 0)[4] > 350  &&  ((s as any).grupwarning ?? 0)[1] > 1) {
                  ((s as any).grupwarning ?? {})[4] = 1;
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).fame ?? 0)?.['pav_slut'] > 225  &&  ((s as any).grupTipe ?? 0) === 1) {
    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] > 250  &&  ((s as any).grupTipe ?? 0) === 2) {
      scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] > 175  &&  ((s as any).grupTipe ?? 0) === 3) {
        scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] > 300  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) !== 1) {
          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] > 600  &&  ((s as any).grupTipe ?? 0) === 4) {
            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'Pavlovsk slut'] }]);
          } else {
            if (((s as any).grupvalue ?? 0)[1] < 200  &&  ((s as any).grupTipe ?? 0) === 1) {
              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid outcast'] }]);
            } else {
              if (((s as any).grupvalue ?? 0)[1] < 400  &&  ((s as any).grupTipe ?? 0) === 1  &&  ((s as any).grupwarning ?? 0)[1] === 0) {
                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid warn 1'] }]);
              } else {
                if (((s as any).grupvalue ?? 0)[1] < 300  &&  ((s as any).grupTipe ?? 0) === 1  &&  ((s as any).grupwarning ?? 0)[1] >= 0) {
                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid warn 2'] }]);
                } else {
                  if (((s as any).fame ?? 0)?.['pav_slut'] > 175  &&  ((s as any).grupTipe ?? 0) === 1  &&  ((s as any).grupslutwarning ?? 0)[1] === 0) {
                    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid slut warn'] }]);
                  } else {
                    if (((s as any).grupvalue ?? 0)[2] < 200  &&  ((s as any).grupTipe ?? 0) === 2) {
                      scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock outcast'] }]);
                    } else {
                      if (((s as any).grupvalue ?? 0)[2] < 400  &&  ((s as any).grupTipe ?? 0) === 2  &&  ((s as any).grupwarning ?? 0)[2] === 0) {
                        scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock warn 1'] }]);
                      } else {
                        if (((s as any).grupvalue ?? 0)[2] < 300  &&  ((s as any).grupTipe ?? 0) === 2  &&  ((s as any).grupwarning ?? 0)[2] >= 0) {
                          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock warn 2'] }]);
                        } else {
                          if (((s as any).fame ?? 0)?.['pav_slut'] > 200  &&  ((s as any).grupTipe ?? 0) === 2  &&  ((s as any).grupslutwarning ?? 0)[2] === 0) {
                            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock slut warn'] }]);
                          } else {
                            if (((s as any).grupvalue ?? 0)[3] < 200  &&  ((s as any).grupTipe ?? 0) === 3) {
                              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd outcast'] }]);
                            } else {
                              if (((s as any).grupvalue ?? 0)[3] < 400  &&  ((s as any).grupTipe ?? 0) === 3  &&  ((s as any).grupwarning ?? 0)[3] === 0) {
                                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd warn 1'] }]);
                              } else {
                                if (((s as any).grupvalue ?? 0)[3] < 300  &&  ((s as any).grupTipe ?? 0) === 3  &&  ((s as any).grupwarning ?? 0)[3] >= 0) {
                                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd warn 2'] }]);
                                } else {
                                  if (((s as any).fame ?? 0)?.['pav_slut'] > 125  &&  ((s as any).grupTipe ?? 0) === 3  &&  ((s as any).grupslutwarning ?? 0)[3] === 0) {
                                    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd slut warn'] }]);
                                  } else {
                                    if (((s as any).grupvalue ?? 0)[4] < 200  &&  ((s as any).grupTipe ?? 0) === 4) {
                                      scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik outcast'] }]);
                                    } else {
                                      if (((s as any).grupvalue ?? 0)[4] < 400  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).grupwarning ?? 0)[4] === 0) {
                                        scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik warn 1'] }]);
                                      } else {
                                        if (((s as any).grupvalue ?? 0)[4] < 300  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).grupwarning ?? 0)[4] >= 0) {
                                          scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik warn 2'] }]);
                                        } else {
                                          if (((s as any).fame ?? 0)?.['pav_slut'] > 250  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).grupslutwarning ?? 0)[4] === 0  &&  ((s as any).gopnik_slut ?? 0) !== 1) {
                                            scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik slut warn'] }]);
                                          } else {
                                            if (((s as any).fame ?? 0)?.['pav_slut'] > 500  &&  ((s as any).grupTipe ?? 0) === 4  &&  ((s as any).grupslutwarning ?? 0)[4] === 0) {
                                              scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik slut warn'] }]);
                                            } else {
                                              if (((s as any).fame ?? 0)?.['pav_slut'] < 175  &&  ((s as any).grupvalue ?? 0)[1] > 800  &&  ((s as any).grupTipe ?? 0) !== 1) {
                                                scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'coolkid'] }]);
                                              } else {
                                                if (((s as any).fame ?? 0)?.['pav_slut'] < 200  &&  ((s as any).grupvalue ?? 0)[2] > 800  &&  ((s as any).grupTipe ?? 0) !== 2) {
                                                  scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'jock'] }]);
                                                } else {
                                                  if (((s as any).fame ?? 0)?.['pav_slut'] < 125  &&  ((s as any).grupvalue ?? 0)[3] > 800  &&  ((s as any).grupTipe ?? 0) !== 3) {
                                                    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'nerd'] }]);
                                                  } else {
                                                    if (((s as any).fame ?? 0)?.['pav_slut'] < 250  &&  ((s as any).grupvalue ?? 0)[4] > 800  &&  ((s as any).grupTipe ?? 0) !== 4) {
                                                      scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik'] }]);
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
  if (((s as any).gopnik_initiation ?? 0) === 1  &&  ((s as any).gopnik_initiation_day ?? 0) !== ((s as any).daystart ?? 0)) {
    qspCall(s, 'calendar', 'remove', 'gopnik_initiation_event');
    scene.actions([{ label: 'Continue', goto: ['gschool_socialchg', 'gopnik miss'] }]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPavlovskSlut(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/shamewalk.jpg');
  scene.text('Walking down the school hallway, you notice almost everyone is eying you. Some sneer at you, others laugh, and others turn away in disgust. You are used to this treatment with your sexual escapades, but not to this level. No one wants to greet you and most actively avoid you. You are starting to feel a bit uncomfortable at all the staring eyes. As you approach your locker, you see someone has spray painted \'Slut\' on it in big red letters. You hear someone walking up behind you before you turn around to see who it might be.');
  ((s as any).grupvalue ?? {})[1] = 0;
  ((s as any).grupvalue ?? {})[2] = 0;
  ((s as any).grupvalue ?? {})[3] = 0;
  ((s as any).grupvalue ?? {})[4] = 0;
  ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
  ((s as any).grupslutwarning ?? {})[1] = 0;
  ((s as any).grupslutwarning ?? {})[2] = 0;
  ((s as any).grupslutwarning ?? {})[3] = 0;
  ((s as any).grupslutwarning ?? {})[4] = 0;
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-30));
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-25));
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-20));
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-35));
  if (((s as any).grupTipe ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/school/events/coolslut.jpg');
    if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
      scene.text('Irina and Dimka walk up to you. Dimka is smirking at you while Irina looks you over from head to toe in complete disgust. Just as you\'re about to ask what\'s going on, Irina cuts you off. "Shut your cum hole, slut! I don\'t want to smell your cum breath. We\'ve all heard about what you\'ve been up to, and your ass is out. You\'re no longer welcome around us. Find some dick to suck, and maybe they will pretend to care about you." With that, Irina turns and walks away as Dimka gives you a final look and shakes his head.');
    } else {
      scene.text('Irina and Dimka walk up to you. Dimka is smirking at you while Irina looks you over from head to toe in complete disgust. Then, just as you\'re about to ask what\'s going on, Irina cuts you off. "Shut your cum hole, slut! I don\'t want to smell your cum breath. We\'ve all heard about what you\'ve been up to, and your ass is out. You\'re no longer welcome around us. Go and find Sonia. I\'m sure you two have a lot in common now." With that, Irina turns and walks away as Dimka gives you a final look and shakes his head.');
    }
    scene.text('"What a waste, you fucking slut." He then spits at your feet before leaving as well. You hear many of the students around you laughing as you look around. Having been publicly shamed and disavowed by your clique, the other students are ready to prey on your weakness and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
  } else {
    if (((s as any).grupTipe ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/school/events/jockslut.jpg');
      if (((s as any).christinaQW ?? 0)?.['fight'] < 1  ||  ((s as any).christinaQW ?? 0)?.['blackmail'] < 2) {
        scene.text('Christina, Lariska, and Lina walk up to you. Lariska and Lina are looking at you in disgust while Christina is smirking. She shoves you hard up against your locker. "What are you doing here slut? Shouldn\'t you be in the boys\' bathroom sucking a bunch of cocks? We all heard that\'s all you do now. At least sluts know to get paid, but you just give it away for free, " she laughs mockingly. Lariska, Lina and several other students nearby join in, openly mocking you.');
      } else {
        scene.text('Albina and Lazar walk up to you with looks of disgust on their face. "What are you doing here? Shouldn\'t you be in the boys\' bathroom sucking dick like the whore that you are?" Lazar says mockingly. Albina opens her mouth to say something but chooses to remain quiet and stares at the floor. Christina smirks at you from behind them, not daring to challenge you directly but enjoying the moment.');
      }
      if (((s as any).soniaQW ?? 0)?.['slut'] === 0) {
        scene.text('"Go hang out with the other losers because none of us gives a shit about you anymore," Lazar says before turning and walking away. Albina looks at you with what you think is disappointment before she shakes her head and follows Lazar. Having been publicly shamed and disavowed by your clique, the other students are ready to prey on your weakness and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
      } else {
        scene.text('"Go hang out with the other losers because none of us gives a shit about you anymore. I\'m sure you and Sonia have a lot in common now." Lazar says mockingly before walking away. Albina looks at you with what you think is disappointment before she shakes her head and follows Lazar. Having been publicly shamed and disavowed by your clique, the other students are ready to prey on your weakness and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/school/events/nerdslut.jpg');
        scene.text('A group of students stand in front of you, wanting a better look at what\'s written on your locker. They start laughing when you look at them and quickly hurry away from you as if you have the plague. You turn and try to find some of your friends, but most seem to be hiding or hurrying off when you approach. You finally manage to catch up to Gerasim, but he turns to you just as you\'re about to say something. "Please go away! I don\'t know what you\'ve gotten yourself into, but the things they say you\'ve done…" He looks disgusted. "I\'m sorry, but I can\'t be seen hanging out with you anymore. I\'ve got enough problems without you making them worse."');
        scene.text('He pauses for a second to stare at the dejected look on your face, realizing that you are now an outcast. He then lets out a short sigh. "I\'m sorry, I really am, but this is your fault. What were you thinking doing all that.. sex stuff? Just leave me alone." The last part he says loudly enough for others to hear, which causes some of the other students to laugh at you as he wheels himself away from you decidedly. You take a second to look around as most other students either start mocking you or actively look away. Finally, you grab your stuff and hurry to your next class.');
      } else {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.img('images/locations/pavlovsk/school/events/gopnikslut.jpg');
          scene.text('You turn and see Pauline, Lera and Lena standing next to you. Lera is snickering. Pauline looks like she\'s preparing to beat you up, and Lera looks at you with disgust. Pauline shakes her head at you and finally speaks up. "I don\'t know what your problem is, but apparently, hanging out, partying and having a good time wasn\'t enough for you. Noooo, you had to go around and be the town bicycle! Don\'t act all surprised. We\'ve all heard about how you let any guy fuck you in whatever hole they desire. Spineless sluts have no place with us, so stay away from us, or I will beat the living shit out of you." With that, Pauline shoves you against your locker and walks away.');
          scene.text('Lena gives you a final look of disgust and shoves you again while Lera gives you a few parting words before walking away. "If you ever try to approach us, we\'ll take you to nasty guys who will fuck you so hard that your holes will be loose enough to stick a watermelon inside them!" Having been publicly shamed and disavowed by your clique, the other students are ready to prey on your weakness and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
        }
      }
    }
  }
  scene.text('<font color = red>You have been kicked out of your social group and become an outcast.</font>');
  (s as any).grupTipe = 5;
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterCoolkid(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing be...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing behind you and turn to see Vicky, Andrey and Stasya giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, we've been talking, and you seem to have the right attitude to be one of us. So what do you say? Do you want to join the popular clique?" Vicky asks, and the three of them just wait for your response.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/nerdslut.jpg');
    scene.text('You shake your head. "I like hanging out with you guys, but I don\'t think that\'s a good idea."');
    scene.text('Vicky frowns but nods. "Suit yourself then." With that, she turns and leaves. Andrey just shakes his head at you and does the same.');
    scene.text('Stasya gives you a once-over. "I told you guys she wasn\'t cool enough! What a loser!" With that, she follows the others, leaving you behind to wonder if you made the right choice.');
    ((s as any).grupvalue ?? {})[1] = Math.floor(Math.random() * 51) + 600;
    ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
    scene.text('You nod your head. "Yes, I would love to! I love hanging out with you guys!"');
    scene.text('Vicky gives you a hug. Once she lets go, Andrey wraps an arm around your shoulder and starts leading you to your next class. "From now on, you\'re one of us." Stasya gives you a friendly smile as the four of you walk to your next class.');
    ((s as any).grupvalue ?? {})[2] = 0;
    ((s as any).grupvalue ?? {})[3] = 0;
    ((s as any).grupvalue ?? {})[4] = 0;
    if (((s as any).grupTipe ?? 0) === 2) {
      ((s as any).grupvalue ?? {})[2] = Math.floor(Math.random() * 101) + 500;
    }
    if (((s as any).grupTipe ?? 0) === 3) {
      ((s as any).grupvalue ?? {})[3] = Math.floor(Math.random() * 101) + 500;
    }
    if (((s as any).grupTipe ?? 0) === 4) {
      ((s as any).grupvalue ?? {})[4] = Math.floor(Math.random() * 101) + 500;
    }
    ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
    (s as any).grupTipe = 1;
    ((s as any).grupTipe ?? {})['joined_cool'] = 1;
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoolkidWarn1(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[1] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing be...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing behind you and turn to see Vicky, Andrey and Stasya giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, is everything okay?"`);
  scene.text('Before you can answer, Stasya chimes in. "You haven\'t been setting the right example of late. You\'re acting more like the losers than us, so do you want to keep hanging around with us?"');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "Cool it, Stasya! Look, <<$pcs_n...
  scene.text(`You are again interrupted before you can speak. "Cool it, Stasya! Look, ${((s as any).pcs_nickname ?? 0)}, if you want to hang out with us, just act like you normally do, okay? That's all we're saying." Vicky says before the bell rings, and you all hurry to class. You can't help but worry. Your recent activity has made the other cool kids question whether you belong in the group or not…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterCoolkidWarn2(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[1] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Vicky, Andrey and Stasya. "Hey, ${((s as any).pcs_nickname ?? 0)}, we talked about this before, but you still seem to be not getting with the program," Vicky says with disdain.`);
  scene.text('Before you can answer, Stasya chimes in. "I told you she doesn\'t want to be one of us! I don\'t know why we ever let her hang out with us in the first place."');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "<<$pcs_nickname>>, you need to ...
  scene.text(`You are again interrupted before you can speak. "${((s as any).pcs_nickname ?? 0)}, you need to get your act together, or you're out, simple as that," Andrey says before the bell rings and you all hurry to class. You can't help but worry. Your recent activity has made the other cool kids question whether you belong in the group. You need to improve your standing with them or risk being kicked out…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterCoolkidSlutWarn(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupslutwarning ?? {})[1] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Vicky, Andrey and Stasya. "What's going on with you, ${((s as any).pcs_nickname ?? 0)}? We've all heard the rumors about your sexual exploits. Of course, we all like sex but come on, this is getting out of hand." Vicky says with a hint of disdain.`);
  scene.text('Before you can answer, Stasya chimes in. "Maybe she just wants to be a slut."');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "<<$pcs_nickname>>, you need to ...
  scene.text(`You are again interrupted before you can speak. "${((s as any).pcs_nickname ?? 0)}, you need to start using a little discretion, or you're out," Andrey says before the bell rings and you all hurry to class. You can't help but worry. Your recent activity has made the other cool kids question whether you belong in the group. You better fix things fast, or you risk being kicked out…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterJock(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joinjock.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Lariska and Lina giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, we've been talking, and you seem to have the right attitude to be one of us. So what do you say? Do you want to join us and become a jock?" They seem to be waiting for your response.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/nerdslut.jpg');
    scene.text('You shake your head. "I like hanging out with you guys, but I don\'t think that\'s a good idea."');
    scene.text('Lariska frowns, then nods. "Suit yourself." With that, she turns and leaves.');
    scene.text('Lina gives you a once-over. "Well, at least Christina will be happy." With that, she follows after Lariska, leaving you behind to wonder if you made the right choice.');
    ((s as any).grupvalue ?? {})[2] = Math.floor(Math.random() * 51) + 600;
    ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/joinjock.jpg');
    scene.text('You nod your head. "Yes, I would love to! I love hanging out with you guys!"');
    scene.text('Lariska gives you a hug. "From now on, you are one of us." Lina gives you a friendly smile, and you all walk to your next class.');
    ((s as any).grupvalue ?? {})[1] = 0;
    ((s as any).grupvalue ?? {})[3] = 0;
    ((s as any).grupvalue ?? {})[4] = 0;
    if (((s as any).grupTipe ?? 0) === 1) {
      ((s as any).grupvalue ?? {})[1] = Math.floor(Math.random() * 101) + 500;
    }
    if (((s as any).grupTipe ?? 0) === 3) {
      ((s as any).grupvalue ?? {})[3] = Math.floor(Math.random() * 101) + 500;
    }
    if (((s as any).grupTipe ?? 0) === 4) {
      ((s as any).grupvalue ?? {})[4] = Math.floor(Math.random() * 101) + 500;
    }
    ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
    (s as any).grupTipe = 2;
    ((s as any).grupTipe ?? {})['joined_jock'] = 1;
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterJockWarn1(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[2] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Lariska and Lina giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, is everything okay with you?" Lariska asks.`);
  scene.text('Before you can answer, Lina chimes in. "You haven\'t been putting your all into sports, and you\'re starting to act like some others, so does that mean you don\'t want to hang around with us anymore?"');
  scene.text('The bell rings, and you all hurry to class, but you can\'t help but worry. It seems your recent activity has made the other jocks question whether you belong in the group or not…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterJockWarn2(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[2] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Lariska and Lina giving you friendly smiles. "${((s as any).pcs_nickname ?? 0)}, we talked about this before, but you still seem to be not getting the idea." Lariska scoffs.`);
  scene.text('Before you can answer, Lina chimes. "Christina says she doesn\'t want you to be one of us and that we should have never let you hang out with us in the first place."');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "<<$pcs_nickname>>, you need to ...
  scene.text(`You are again interrupted before you can speak. "${((s as any).pcs_nickname ?? 0)}, you need to get your act together, or you're out, simple as that," Lina says before the bell rings and you all hurry to class. You can't help but worry. Your recent activity has made the other jocks question whether you belong in the group. You better fix things fast or risk becoming kicked out…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterJockSlutWarn(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupslutwarning ?? {})[2] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Lariska and Lina giving you friendly smiles. "What's going on with you, ${((s as any).pcs_nickname ?? 0)}? We've all heard the rumors about your sexual exploits. Sex is fun, but what are you going to do next? Fuck the whole football team?"`);
  scene.text('Before you can answer, Lina chimes. "You need to start using a little discretion, or you\'re out." The bell then rings, and you all hurry to class, but you can\'t help but worry. Your recent activity has made the other jocks question whether you belong in the group. So you better fix things fast or risk being kicked out…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterNerd(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joinnerd.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see a group of nerds bunched up, all giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, we've been talking, and we like you. You are into the same things we are, often dress like us."`);
  scene.text('Then Artem followed by Petka start to chant. "One of us, one of us." This gets a laugh from a few of the others, while Feofan smiles and then adds. "So what do you say? Want to be one of the proud, one of the few, one of the nerds? As a bonus you could join us for a DnD game night as well."');
  scene.text('They seem to be waiting on your response.');
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/nerdslut.jpg');
    scene.text('You shake your head. "I like hanging out with you guys, but I\'m just not interested in doing a game night. Sorry."');
    scene.text('Artem frowns and then nods. "Oh, okay. Well, maybe some other time then…" With that, he turns, and the rest follow, looking a little disappointed. Looks like they were hoping you would join them. It makes you feel a little bad and wonder if you made the right choice.');
    ((s as any).grupvalue ?? {})[3] = Math.floor(Math.random() * 51) + 600;
    ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/joinnerd.jpg');
    scene.text('You nod your head. "Yes, I would love to hang out with you guys! A game night sounds like a lot of fun."');
    // TODO-QSP: dynamic text: They all start speaking at once, excited about you joining them. Feofan then spe...
    scene.text(`They all start speaking at once, excited about you joining them. Feofan then speaks up. "That's great, ${((s as any).pcs_nickname ?? 0)}! Meet us at the community center library tonight at ' + func('time', 'get_time_string', 20, 0) + '. See you then." Then, they all start leaving and going to class, saying they look forward to seeing you tonight.`);
    if (((s as any).grupTipe ?? 0)?.['joined_nerds'] === 0) {
      ((s as any).grupTipe ?? {})['joined_nerds'] = 1;
    }
    ((s as any).grupvalue ?? {})[1] = 0;
    ((s as any).grupvalue ?? {})[2] = 0;
    ((s as any).grupvalue ?? {})[4] = 0;
    if (((s as any).grupTipe ?? 0) === 1) {
      ((s as any).grupvalue ?? {})[1] = Math.floor(Math.random() * 101) + 500;
    }
    if (((s as any).grupTipe ?? 0) === 2) {
      ((s as any).grupvalue ?? {})[2] = Math.floor(Math.random() * 101) + 500;
    }
    if (((s as any).grupTipe ?? 0) === 4) {
      ((s as any).grupvalue ?? {})[4] = Math.floor(Math.random() * 101) + 500;
    }
    ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
    ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
    (s as any).grupTipe = 3;
    ((s as any).grupTipe ?? {})['joined_nerd'] = 1;
    ((s as any).nerd_game ?? {})['invite_day'] = ((s as any).daystart ?? 0);
    ((s as any).nerd_game ?? {})['game_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', 5);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNerdWarn1(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[3] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see a group of nerds bunched up and giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, is everything okay with you?"`);
  scene.text('Before you can answer, Julia chimes in. "You\'re acting a lot like the others. Does that mean you don\'t want to hang out with us anymore?"');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "Look, <<$pcs_nickname>>. We lik...
  scene.text(`You are again interrupted before you can speak. "Look, ${((s as any).pcs_nickname ?? 0)}. We like you and want you to stay, but if you want to hang out with us, just act like you want to hang out with us? That's all we're saying." Feofan says before the bell rings, and you all hurry to class. You can't help but worry. It seems your recent activity has made the other nerds question whether you belong in the group or not…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterNerdWarn2(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[3] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see a group of nerds bunched up and giving you friendly smiles. "${((s as any).pcs_nickname ?? 0)}, we talked about this, but you're still acting out," Artem says with disdain.`);
  scene.text('Before you can answer, Julia chimes in. "Yeah, we\'re all worried about you. What\'s wrong? Is there anything we can do to help? Please just ask."');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "<<$pcs_nickname>>, I don't know...
  scene.text(`You are again interrupted before you can speak. "${((s as any).pcs_nickname ?? 0)}, I don't know what's wrong, but if you don't want to hang out with us, just say so. In any case, we hope things get better for you." Deofan says before the bell rings, and you all hurry to class. You can't help but worry. Your recent activity has made the other nerds question whether you belong in the group. You better fix things fast or risk being kicked out…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterNerdSlutWarn(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupslutwarning ?? {})[3] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see a group of nerds bunched up and giving you friendly smiles. "Hey, ${((s as any).pcs_nickname ?? 0)}, what's going on with you? We've all heard some pretty disturbing rumors about you… If they're even half true… I just don't know what to say. You always seemed like such a nice girl." Feofan says with a hint of disappointment.`);
  // TODO-QSP: dynamic text: Before you can answer, Petka chimes in. "<<$pcs_nickname>>, you need to get your...
  scene.text(`Before you can answer, Petka chimes in. "${((s as any).pcs_nickname ?? 0)}, you need to get yourself under control, or you won't be able to hang out with us anymore." The bell rings, and you all hurry to class, but you can't help but worry. Your recent activity has made the other nerds question whether you belong in the group. You better fix things fast or risk being kicked out…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterGopnik(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joingopnik.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Vitek and Lena. Vitek gives you a hungry once-over, and Lena gives you a smirk. "Hey, ${((s as any).pcs_nickname ?? 0)}, we've been talking, and you seem like you have the right attitude to hang with us. So what do you say? Want to come to one of our exclusive parties tonight?" They seem to be waiting on your response.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'No', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/nerdslut.jpg');
    scene.text('You shake your head. "I like hanging out with you guys, but I\'m just not in the partying mood tonight."');
    scene.text('Vitek\'s eyes darken. "What, are you too good for us all of a sudden? Well, fuck you then!" With that, he storms away. Lena looks at you with a derogatory stare before following her brother, leaving you behind to wonder if you made the right choice.');
    ((s as any).grupvalue ?? {})[4] = Math.floor(Math.random() * 51) + 600;
    ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
    qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
    { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/events/joingopnik.jpg');
    scene.text('You nod your head. "Yeah, that sounds great. I love hanging out and maybe getting a little wasted."');
    scene.text('Vitek smirks and glances at Lena, leaving you wondering what they mean. "Lena will let you know where and when." With that, he turns and walks off, but you can\'t help but feel you missed something, which makes you feel a little nervous.');
    scene.text('Lena leans over. "Meet Lera and me after school at the apartment garages at eight this evening." She smiles like she knows something you don\'t, but she briskly walks away without a further word or letting you ask anything.');
    (s as any).gopnik_initiation = 1;
    (s as any).gopnik_initiation_day = ((s as any).daystart ?? 0);
    qspCall(s, 'calendar', 'add', 'gopnik_initiation_event');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGopnikWarn1(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[4] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  // TODO-QSP: dynamic text: You walk down the hallway and stop at your locker. You sense someone standing ne...
  scene.text(`You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Vitek, Lena, Lera and Dan. Vitek gives you a once-over. "What the fuck is up with you, ${((s as any).pcs_nickname ?? 0)}?"`);
  scene.text('Before you can answer, Lena chimes in. "You\'ve been acting like a little submissive bitch lately. Grow a fucking pair and get your shit together!"');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "Look, <<$pcs_nickname>>. If you...
  scene.text(`You are again interrupted before you can speak. "Look, ${((s as any).pcs_nickname ?? 0)}. If you want to hang out with us, just act like it, okay? That's all we're saying." Lera says before the bell rings, and the group disperses. You can't help but worry. It seems your recent activity has made the other Gopnik question whether you belong in the group or not…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterGopnikWarn2(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupwarning ?? {})[4] = 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  scene.text('You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Vitek, Lena, Lera and Dan. Lena shoves you into your locker. "What the fuck bitch? You deaf or something, or do you just think you\'re too good for us?"');
  scene.text('Before you can answer, Dan chimes in. "I told you she didn\'t belong. This bitch is too soft," he says as he plays with your hair. "I don\'t know why we let Vasily talk us into letting her hang out with us anyway. I mean, maybe if she sucked a few more cocks we could look the other way…" he laughs.');
  // TODO-QSP: dynamic text: You are again interrupted before you can speak. "Cool it, Dan. <<$pcs_nickname>>...
  scene.text(`You are again interrupted before you can speak. "Cool it, Dan. ${((s as any).pcs_nickname ?? 0)}, get your shit together, or you're out, simple as that." Vitek says before the bell rings, and the group disperses. You can't help but worry. Your recent activity has made the other Gopnik question whether you belong in the group. You better fix things fast, or you risk being kicked out…`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterGopnikSlutWarn(s: GameState, scene: SceneBuilder): void {
  ((s as any).grupslutwarning ?? {})[4] = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/events/joincool.jpg');
  scene.text('You walk down the hallway and stop at your locker. You sense someone standing next to you and turn to see Pauline, Lena, Lera and Dan. Dan stands uncomfortably close and wraps an arm around your hip before pulling you closer. "Hey, slut. Sucked any cocks today? I can give you another one…" he says with a laugh.');
  scene.text('Before you can answer, Lera chimes in. "Maybe she just wants to be a slut."');
  scene.text('You are again interrupted before you can speak. "We don\'t need another Nush. One slut is enough." Pauline says in reply.');
  // TODO-QSP: dynamic text: Lera fires back. "Hey, she isn't a slut! She just likes to fuck. It's not like s...
  scene.text(`Lera fires back. "Hey, she isn't a slut! She just likes to fuck. It's not like she lets just anyone fuck her. Not like ${((s as any).pcs_nickname ?? 0)} here." She gives Dan a pointed look, which makes him give Lera a sour look in return.`);
  scene.text('Pauline rolls her eyes. "Whatever. If you want to lick her ass so bad, go ahead and do it, you carpet muncher."');
  scene.text('Before Lera can reply, Lena steps between the girls. "That\'s enough. We\'re not here to bitch about this shit." She then turns to you. "And you, chill the fuck out and stop being the town bicycle, or you\'re out, got it?" They then turn and walk off, still chatting as the bell rings. You can\'t help but worry. Your recent activity has made the other Gopnik question whether you belong in the group. You better fix things fast, or you risk being kicked out…');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterCoolkidOutcast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/events/outcast.jpg');
  scene.text('Irina and Dimka walk up to you. Dimka is smirking at you while Irina looks you over from head to toe shaking her head. Just as you\'re about to speak, Irina cuts you off. "Save it. We don\'t care. I don\'t know what happened, but you used to be cool. Now? Well, you made your choice. You\'re no longer welcome to hang out with us." With that, Irina turns and walks away as Dimka gives you a final look and shakes his head.');
  scene.text('"Now you\'re where you always belonged. With the other losers." he says before leaving as well. You hear the other students laughing as you look around. Having been publicly disavowed by your clique, the other students are ready to prey on your weakness and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
  scene.text('<font color = red>You have been kicked out of your social group and become an outcast.</font>');
  ((s as any).grupvalue ?? {})[1] = 0;
  ((s as any).grupvalue ?? {})[2] = 0;
  ((s as any).grupvalue ?? {})[3] = 0;
  ((s as any).grupvalue ?? {})[4] = 0;
  ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
  (s as any).grupTipe = 5;
  ((s as any).grupTipe ?? {})['before_outcast'] = 1;
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'cool kids', (-20));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterJockOutcast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/events/outcast.jpg');
  if (((s as any).christinaQW ?? 0)?.['blackmail'] === 2  ||  ((s as any).christinaQW ?? 0)?.['fight'] === 1) {
    scene.text('Lazar and Albina walk up to you, and she scoffs at you dismissively. "It seems like you care more about being a social reject than anything else, so fuck off and go hang out with the other losers where you belong. We\'re not your friends anymore, and don\'t try to pretend otherwise." She gives you a pitiful once-over before forcefully shoving you aside and walking away. A disappointed-looking Lazar just shakes his head at you before catching up with Albina, where you hear them clearly mocking you. Having been publicly disavowed by your clique, the other students are ready to prey on your weakness, and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
  } else {
    scene.text('Christina, Lariska and Lina walk up to you. Lariska and Lina look at you like you did something wrong while Christina smirks. She shoves you hard up against your locker. "What are you doing here bitch? You belong with the loser crowd now, so fuck off." She laughs, and Lariska and Lina join in openly mocking you. "Stay away from us, or I\'ll show you what happens to little bitches who don\'t know their place," Christina warns before they turn and walk away. Having been publicly disavowed by your clique, the other students are ready to prey on your weakness, and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
  }
  scene.text('<font color = red>You have been kicked out of your social group and become an outcast.</font>');
  ((s as any).grupvalue ?? {})[1] = 0;
  ((s as any).grupvalue ?? {})[2] = 0;
  ((s as any).grupvalue ?? {})[3] = 0;
  ((s as any).grupvalue ?? {})[4] = 0;
  ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
  (s as any).grupTipe = 5;
  ((s as any).grupTipe ?? {})['before_outcast'] = 2;
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'jocks', (-20));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterNerdOutcast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/events/outcast.jpg');
  scene.text('You try to find your friends, but most seem to be hiding or hurry off when you approach. You finally manage to catch up to Gerasim, but as you\'re about to say something, he turns to you. "Please go away. I can\'t be seen hanging out with you. I\'ve got enough problems without you making them worse. None of us wants to be around you anymore." He sighs when he sees the dejected look on your face. "I\'m sorry, I really am, but this is your fault. Please just leave me alone." The last part he says loudly enough for others to hear, which causes some of the other students to laugh at you as he wheels himself away from you decidedly. As you look around, most of the other students either start mocking you or actively look away. Finally, you grab your stuff and hurry to your next class.');
  scene.text('<font color = red>You have been kicked out of your social group and become an outcast.</font>');
  ((s as any).grupvalue ?? {})[1] = 0;
  ((s as any).grupvalue ?? {})[2] = 0;
  ((s as any).grupvalue ?? {})[3] = 0;
  ((s as any).grupvalue ?? {})[4] = 0;
  ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
  (s as any).grupTipe = 5;
  ((s as any).grupTipe ?? {})['before_outcast'] = 3;
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'nerds', (-20));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterGopnikOutcast(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/school/events/outcast.jpg');
  scene.text('As you approach your locker, Pauline, Lera, and Lena walk up next to you. Pauline looks like she\'s preparing to beat you up, while Lera looks at you with disgust. Pauline shakes her head at you and finally speaks up. "I don\'t know what your problem is, but apparently, hanging out, partying and having a good time wasn\'t enough for you. Nooo, you had to become a spineless cunt afraid of her own shadow, so stay the fuck away from us, or I\'ll beat the shit out of you!" With that, Pauline shoves you against your locker and walks away. Lena gives you a final look of disgust and pushes you again while Lera gives you a few parting words before walking away. "You\'re so pathetic. Even the nerds will kick your ass now." Having been publicly disavowed by your clique, the other students are ready to prey on your weakness, and either start mocking you or actively look away. You grab your stuff and hurry to your next class.');
  scene.text('<font color = red>You have been kicked out of your social group and become an outcast.</font>');
  ((s as any).grupvalue ?? {})[1] = 0;
  ((s as any).grupvalue ?? {})[2] = 0;
  ((s as any).grupvalue ?? {})[3] = 0;
  ((s as any).grupvalue ?? {})[4] = 0;
  ((s as any).old_grupvalue ?? {})[1] = qspUntranslated(s, "grupvalue[1]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[2] = qspUntranslated(s, "grupvalue[2]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[3] = qspUntranslated(s, "grupvalue[3]", { location: "gschool_socialchg" });
  ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
  (s as any).grupTipe = 5;
  ((s as any).grupTipe ?? {})['before_outcast'] = 4;
  qspCall(s, 'gschool_socialchg', 'group_rel_change', 'gopniks', (-20));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterGopnikMiss(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>School Hall</b></center>');
  scene.img('images/characters/shared/headshots_main/big20.jpg');
  scene.text('Just as you approach your locker, Lena shoves you against it. "Where the fuck were you bitch? We waited almost an hour for you!"');
  scene.text('You start to answer, but she shoves you again before you can even get a single word out. "It doesn\'t matter. We changed our mind about you. You\'re not welcome. So get lost." she snarls before storming off. If you try to earn their respect again, they will give you a second chance.');
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).grupvalue ?? {})[4] = Math.floor(Math.random() * 51) + 675;
  ((s as any).old_grupvalue ?? {})[4] = qspUntranslated(s, "grupvalue[4]", { location: "gschool_socialchg" });
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to class', handler: (st: GameState) => {
    (st as any).school_period = 0;
  }, goto: ['gschool_lessons', 'schedule'] },
  ]);
  scene.build();
}

function enterGroupRelChange(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_gsc_grl ?? {})['group'] = 0;
  if (((s as any).locArgs?.[1] ?? 0) === '') {
    ((s as any).temp_gsc_grl ?? {})['group'] = qspUntranslated(s, "ARGS[1]", { location: "gschool_socialchg" });
  } else {
    if (((s as any).locArgs?.[1] ?? 0) === 'cool kids') {
      ((s as any).temp_gsc_grl ?? {})['group'] = 1;
    } else {
      if (((s as any).locArgs?.[1] ?? 0) === 'jocks') {
        ((s as any).temp_gsc_grl ?? {})['group'] = 2;
      } else {
        if (((s as any).locArgs?.[1] ?? 0) === 'nerds') {
          ((s as any).temp_gsc_grl ?? {})['group'] = 3;
        } else {
          if (((s as any).locArgs?.[1] ?? 0) === 'gopniks') {
            ((s as any).temp_gsc_grl ?? {})['group'] = 4;
          } else {
            if (((s as any).locArgs?.[1] ?? 0) === 'outcasts') {
              ((s as any).temp_gsc_grl ?? {})['group'] = 5;
            } else {
              if (((s as any).locArgs?.[1] ?? 0) === 'teachers') {
                ((s as any).temp_gsc_grl ?? {})['group'] = 6;
              }
            }
          }
        }
      }
    }
  }
  ((s as any).temp_gsc_grl ?? {})['change'] = qspUntranslated(s, "ARGS[2]", { location: "gschool_socialchg" });
  ((s as any).temp_gsc_grl ?? {})['gender'] = 0;
  if (((s as any).locArgs?.[3] ?? 0) === 'male'  ||  ((s as any).locArgs?.[3] ?? 0) === 'boy') {
    ((s as any).temp_gsc_grl ?? {})['gender'] = 1;
  } else {
    if (((s as any).locArgs?.[3] ?? 0) === 'female'  ||  ((s as any).locArgs?.[3] ?? 0) === 'girl') {
      ((s as any).temp_gsc_grl ?? {})['gender'] = 2;
    }
  }
  ((s as any).temp_gsc_grl ?? {})['i'] = 1;
  // TODO-QSP: :gs_socloop
  if (((s as any).npc_grupTipe ?? 0)['A' + ((s as any).temp_gsc_grl ?? 0)?.['i']] > 0) {
    if ((((s as any).npc_grupTipe ?? 0)['A' + ((s as any).temp_gsc_grl ?? 0)?.['i']] === ((s as any).temp_gsc_grl ?? 0)?.['group']  ||  ((s as any).temp_gsc_grl ?? 0)?.['group'] === 0)  &&  (((s as any).temp_gsc_grl ?? 0)?.['gender'] === 0  ||  ((s as any).npc_gender ?? 0)['A' + ((s as any).temp_gsc_grl ?? 0)?.['i']] === (((s as any).temp_gsc_grl ?? 0)?.['gender'] - 1))) {
      if ((((s as any).temp_gsc_grl ?? 0)?.['change'] > 0  &&  ((s as any).npc_rel ?? 0)['A' + ((s as any).temp_gsc_grl ?? 0)?.['i']] < 30)  ||  ((s as any).temp_gsc_grl ?? 0)?.['change'] < 0) {
        // TODO-QSP: gs 'npc_relationship', 'modify', 'A<<temp_gsc_grl[''i'']>>', temp_gsc_grl['change']
      }
    }
  }
  ((s as any).temp_gsc_grl ?? {})['i'] = (((s as any).temp_gsc_grl ?? {})['i'] ?? 0) + (1);
  if (((s as any).temp_gsc_grl ?? 0)?.['i'] < ((s as any).aarraynumber ?? 0)) {
    // TODO-QSP: jump 'gs_socloop'
  }
  // TODO-QSP: end
  scene.build();
}

function enterGroupStudentRelChange(s: GameState, scene: SceneBuilder): void {
  if (((s as any).grupvalue_student_day ?? 0) !== ((s as any).daystart ?? 0)) {
    if (((s as any).npc_rel ?? 0)?.['A1'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A1'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A2'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A2'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A3'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A3'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A4'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A4'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).fedormasha ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A5'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).fedormasha ?? 0) === 0  &&  ((s as any).npc_rel ?? 0)?.['A5'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A6'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A6'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A7'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[5] = (((s as any).grupvalue_temp ?? {})[5] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A7'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[5] = (((s as any).grupvalue_temp ?? {})[5] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A8'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A8'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A9'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A9'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A10'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A10'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A11'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A11'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A12'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A12'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A13'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A13'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A14'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A14'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A15'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A15'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A16'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A16'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A17'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A17'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A19'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A19'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A20'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A20'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A21'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A21'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A22'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A22'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A23'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A23'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A24'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A24'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).soniaQW ?? 0)?.['slut'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A25'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).soniaQW ?? 0)?.['slut'] === 0  &&  ((s as any).npc_rel ?? 0)?.['A25'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A139'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A139'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A140'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A140'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A141'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A141'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A142'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A142'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A143'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A144'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A145'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A145'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A146'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A147'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A147'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A148'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A148'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[1] = (((s as any).grupvalue_temp ?? {})[1] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A149'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A149'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A150'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A150'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A151'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A151'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A152'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A152'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A153'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A153'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[3] = (((s as any).grupvalue_temp ?? {})[3] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A154'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A155'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A156'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A157'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A157'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A158'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A159'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[5] = (((s as any).grupvalue_temp ?? {})[5] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A159'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[5] = (((s as any).grupvalue_temp ?? {})[5] ?? 0) - (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A165'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) + (1);
    }
    if (((s as any).npc_rel ?? 0)?.['A165'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[2] = (((s as any).grupvalue_temp ?? {})[2] ?? 0) - (1);
    }
    if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4  &&  ((s as any).npc_rel ?? 0)?.['A189'] >= 60) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) + (1);
    }
    if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4  &&  ((s as any).npc_rel ?? 0)?.['A189'] <= 20) {
      ((s as any).grupvalue_temp ?? {})[4] = (((s as any).grupvalue_temp ?? {})[4] ?? 0) - (1);
    }
    ((s as any).grupvalue ?? {})[1] = (((s as any).grupvalue ?? {})[1] ?? 0) + (Math.min(Math.max((-5), qspUntranslated(s, "grupvalue_temp[1]", { location: "gschool_socialchg" })), 5));
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (Math.min(Math.max((-5), qspUntranslated(s, "grupvalue_temp[2]", { location: "gschool_socialchg" })), 5));
    ((s as any).grupvalue ?? {})[3] = (((s as any).grupvalue ?? {})[3] ?? 0) + (Math.min(Math.max((-5), qspUntranslated(s, "grupvalue_temp[3]", { location: "gschool_socialchg" })), 5));
    ((s as any).grupvalue ?? {})[4] = (((s as any).grupvalue ?? {})[4] ?? 0) + (Math.min(Math.max((-5), qspUntranslated(s, "grupvalue_temp[4]", { location: "gschool_socialchg" })), 5));
    (s as any).grupvalue_student_day = ((s as any).daystart ?? 0);
    if (((s as any).grupvalue ?? 0)[1] < 0) {
      ((s as any).grupvalue ?? {})[1] = 0;
    }
    if (((s as any).grupvalue ?? 0)[2] < 0) {
      ((s as any).grupvalue ?? {})[2] = 0;
    }
    if (((s as any).grupvalue ?? 0)[3] < 0) {
      ((s as any).grupvalue ?? {})[3] = 0;
    }
    if (((s as any).grupvalue ?? 0)[4] < 0) {
      ((s as any).grupvalue ?? {})[4] = 0;
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'test':
      enterTest(s, scene);
      break;
    case 'Pavlovsk slut':
      enterPavlovskSlut(s, scene);
      break;
    case 'coolkid':
      enterCoolkid(s, scene);
      break;
    case 'coolkid warn 1':
      enterCoolkidWarn1(s, scene);
      break;
    case 'coolkid warn 2':
      enterCoolkidWarn2(s, scene);
      break;
    case 'coolkid slut warn':
      enterCoolkidSlutWarn(s, scene);
      break;
    case 'jock':
      enterJock(s, scene);
      break;
    case 'jock warn 1':
      enterJockWarn1(s, scene);
      break;
    case 'jock warn 2':
      enterJockWarn2(s, scene);
      break;
    case 'jock slut warn':
      enterJockSlutWarn(s, scene);
      break;
    case 'nerd':
      enterNerd(s, scene);
      break;
    case 'nerd warn 1':
      enterNerdWarn1(s, scene);
      break;
    case 'nerd warn 2':
      enterNerdWarn2(s, scene);
      break;
    case 'nerd slut warn':
      enterNerdSlutWarn(s, scene);
      break;
    case 'gopnik':
      enterGopnik(s, scene);
      break;
    case 'gopnik warn 1':
      enterGopnikWarn1(s, scene);
      break;
    case 'gopnik warn 2':
      enterGopnikWarn2(s, scene);
      break;
    case 'gopnik slut warn':
      enterGopnikSlutWarn(s, scene);
      break;
    case 'coolkid outcast':
      enterCoolkidOutcast(s, scene);
      break;
    case 'jock outcast':
      enterJockOutcast(s, scene);
      break;
    case 'nerd outcast':
      enterNerdOutcast(s, scene);
      break;
    case 'gopnik outcast':
      enterGopnikOutcast(s, scene);
      break;
    case 'gopnik miss':
      enterGopnikMiss(s, scene);
      break;
    case 'group_rel_change':
      enterGroupRelChange(s, scene);
      break;
    case 'group_student_rel_change':
      enterGroupStudentRelChange(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gschool_socialchg: LocationDef = {
  name: 'gschool_socialchg',
  title: 'School Hall',
  region: 'other',
  enter: enter,
};
