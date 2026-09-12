import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['dreams_active'] === 1) {
    ((s as any).sleepVars ?? {})['events_done'] = 0;
    if (((s as any).stepdadQW ?? 0) === 3) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''dream_events'', ''stepdad_dream'' '
    }
    if (((s as any).canBraidHair ?? 0) === 0  &&  ((s as any).start_type ?? 0)?.['loc'] !== 'sg'  &&  ((s as any).pcs_hairlng ?? 0) > 80) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''dream_events'', ''braid_hair_dream'' '
    }
    if (((s as any).succubusQW ?? 0) === 1  ||  ((s as any).succubusQW ?? 0) === 2) {
      // TODO-QSP: $sleep_events_priority[] = 'gs ''dream_events'', ''succubus_dream'' '
    }
    if ((Math.floor(Math.random() * 100) + 1) <= ((s as any).cheatVars ?? 0)?.['no_dream_chance']) {
      // TODO-QSP: $sleep_events[] = 'gs ''dream_events'', ''no_dream'' '
    } else {
      if (((s as any).pcs_horny ?? 0) <= 50) {
        // TODO-QSP: $sleep_events[] = 'gs ''dream_events'', ''d_dreams'' '
      } else {
        if ((Math.floor(Math.random() * 4) + 0) < ((s as any).hypnoTime ?? 0)) {
          // TODO-QSP: $sleep_events[] = 'gs ''dream_events'', ''hypno_dreams'' '
        } else {
          // TODO-QSP: $sleep_events[] = 'gs ''dream_events'', ''erotic_dream_switch'' '
        }
      }
      qspCall(s, 'blackmailer', 'blackmail_dream_events');
    }
    scene.actions([{ label: 'Continue', goto: ['dream_events', 'mod_sleepevents'] }]);
  }
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterModSleepevents(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'mod_system', 'sleep', 'dream_events', 'mod_sleepevents');
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sleepVars ?? 0)?.['events_done'] < 1) {
    if (Object.keys((s as any).sleep_events_priority ?? {}).length > 0) {
      scene.actions([{ label: 'Continue', goto: ['dream_events', 'event_handler2', '\'priority\''] }]);
    } else {
      if (Object.keys((s as any).sleep_events ?? {}).length > 0) {
        scene.actions([{ label: 'Continue', goto: ['dream_events', 'event_handler2'] }]);
      }
    }
  }
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'continue'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventHandler2(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['events_done'] = (((s as any).sleepVars ?? {})['events_done'] ?? 0) + (1);
  if (((s as any).locArgs?.[1] ?? 0) === 'priority') {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events_priority')-1);
  } else {
    (s as any).temp_slev_id = ((s as any).rand ?? 0)(0, ((s as any).arrsize ?? 0)('sleep_events')-1);
  }
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'event_end'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterEventEnd(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', goto: ['dream_events', 'event_handler'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterExit(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars ?? {})['stat_display'] = 0;
  (s as any).inSleep = 0;
  qspCall(s, 'wakeup', 'wear_bed_clothes');
  // TODO-QSP: end
  scene.build();
}

function enterContinue(s: GameState, scene: SceneBuilder): void {
  ((s as any).sleepVars ?? {})['events_done'] = 0;
  ((s as any).sleepVars ?? {})['stat_display'] = 0;
  scene.actions([{ label: 'Continue', goto: ['sleep', 'post_dream'] }]);
  // TODO-QSP: end
  scene.build();
}

function enterStepdadDream(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/resident/vladimir/sex/bath_voyer_1.jpg');
  scene.text('You had a very strange dream: You were blindfolded while having sex with a stranger. When you were done, you removed the blindfold to see your stepfather grinning at you.');
  (s as any).pcs_horny = 0;
  (s as any).stepdadQW = ((s as any).stepdadQW ?? 0) + (1);
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterBraidHairDream(s: GameState, scene: SceneBuilder): void {
  (s as any).canBraidHair = 1;
  scene.img('images/characters/pavlovsk/resident/anya/braid.jpg');
  scene.text('You dream about the time your sister taught you how to braid your hair. It was one of the more memorable bonding moments you had not long before you moved out.');
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterSuccubusDream(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/home/bedroom/dream/sex/succubdream.jpg');
  if (((s as any).succubusQW ?? 0) === 1) {
    (s as any).succubusQW = 2;
    scene.text('You dream of sex with multiple partners, absorbing energy from each of them.');
  } else {
    scene.text('You have the same dream of absorbing energy from multiple partners.');
  }
  (s as any).pcs_horny = 0;
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterNoDream(s: GameState, scene: SceneBuilder): void {
  if (((s as any).start_type ?? 0)?.['magic'] !== 'tg'  ||  (Math.floor(Math.random() * 10) + 0) > 2) {
    scene.text('You sleep without dreaming.');
  } else {
    (s as any).temp = Math.floor(Math.random() * 3) + 0;
    if ((!((s as any).temp ?? 0))) {
      scene.text('You have hazy dreams about your past.');
    } else {
      if (((s as any).temp ?? 0) === 1) {
        scene.text('You dream about the moon looking at the world with his one bloody eye.');
      } else {
        scene.text('You dream that you are a man again.');
      }
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterEroticDreamSwitch(s: GameState, scene: SceneBuilder): void {
  if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).pcs_ass ?? 0) === 0  &&  (!(((s as any).stat ?? 0)?.['anal'] + ((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['hj'] + ((s as any).stat ?? 0)?.['cuni']+ ((s as any).stat ?? 0)?.['female_sexual_partners'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] + ((s as any).stat ?? 0)?.['herm_sexual_partners']))) {
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 1;
  } else {
    (s as any).temp_rand = (Math.floor(Math.random() * (7 + succublvl - 1 + 1)) + (1));
  }
  if (((s as any).temp_rand ?? 0) <= 1) {
    qspCall(s, 'dream_events', 'd_dreams');
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      qspCall(s, 'dream_events', 'ero_dreams');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        qspCall(s, 'dream_events', 'sex_dreams');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          qspCall(s, 'dream_events', 'bj_dreams');
        } else {
          if (((s as any).temp_rand ?? 0) === 5) {
            qspCall(s, 'dream_events', 'anal_dreams');
          } else {
            if (((s as any).temp_rand ?? 0) === 6) {
              qspCall(s, 'dream_events', 'preg_dreams');
            } else {
              if (((s as any).temp_rand ?? 0) === 7) {
                qspCall(s, 'dream_events', 'gang_dreams');
              } else {
                qspCall(s, 'dream_events', 'succub_dreams');
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDDreams(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).clownQW ?? 0))) {
    (s as any).temp_rand = Math.floor(Math.random() * 13) + 1;
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 14) + 1;
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.img('images/shared/home/bedroom/dream/dream1.jpg');
    scene.text('You dream about an old town, standing on the opposite shores of high falls. Between its steeples fly strange creatures.');
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.img('images/shared/home/bedroom/dream/dream2.jpg');
      scene.text('You dream about a tower, standing on frozen rocks, covered in snow and ice.');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.img('images/shared/home/bedroom/dream/dream3.jpg');
        scene.text('You dream about an ice mountain, on top of which stands a strange building, almost like a monastery.');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.img('images/shared/home/bedroom/dream/dream4.jpg');
          scene.text('You dream about an unknown girl, running in the pouring rain on a dark and narrow street.');
        } else {
          if (((s as any).temp_rand ?? 0) === 5) {
            scene.img('images/shared/home/bedroom/dream/dream5.jpg');
            scene.text('You dream about your smiling mother standing in a room full of old things from the past. Strange. What could it mean?');
          } else {
            if (((s as any).temp_rand ?? 0) === 6) {
              scene.img('images/shared/home/bedroom/dream/dream6.jpg');
              scene.text('You dream about a rider, standing by the lake, surrounded by high and steep mountains.');
            } else {
              if (((s as any).temp_rand ?? 0) === 7) {
                scene.img('images/shared/home/bedroom/dream/dream7.jpg');
                scene.text('You dream about a scary man with charred skin, holding a strange creature on a chain, ready to fight a white haired middle-aged guy with a sword in his hand. It\'s probably time to stop watching TV before bed…');
              } else {
                if (((s as any).temp_rand ?? 0) === 8) {
                  scene.img('images/shared/home/bedroom/dream/dream8.jpg');
                  scene.text('You dream about the white-haired guy again, but he\'s noticeably aged and has a thick beard. Next to him stands a beautiful white haired girl. Maybe it\'s his daughter?');
                } else {
                  if (((s as any).temp_rand ?? 0) === 9) {
                    scene.img('images/shared/home/bedroom/dream/dream9.jpg');
                    scene.text('You dream about standing in a street among other people, looking at a nuclear explosion. It\'s really scary!');
                  } else {
                    if (((s as any).temp_rand ?? 0) === 10) {
                      scene.img('images/shared/home/bedroom/dream/dream10.jpg');
                      scene.text('You dream about a futuristic looking street littered with garbage.');
                    } else {
                      if (((s as any).temp_rand ?? 0) === 11) {
                        scene.img('images/shared/home/bedroom/dream/dream11.jpg');
                        scene.text('You dream about a beautiful and majestic cathedral on the banks of the river.');
                      } else {
                        if (((s as any).temp_rand ?? 0) === 12) {
                          scene.img('images/shared/home/bedroom/dream/dream12.jpg');
                          scene.text('You dream about being at a lake in the winter watching a dark figure. He\'s standing in a pavilion in the middle of the lake, the pale light of the moon giving the scene an eerie aura.');
                        } else {
                          if (((s as any).temp_rand ?? 0) === 13) {
                            scene.img('images/shared/home/bedroom/dream/dream14.jpg');
                            scene.text('You have a strange dream. You are standing in front of a dark forest that stretches up a steep mountain. From high above, water and poisonous green light fall down into the valley. The waterfalls end in a stream that winds its way towards you. And crouching in the stream is a strange creature staring at you with glowing eyes…');
                          } else {
                            scene.img('images/shared/home/bedroom/dream/dream13.jpg');
                            scene.text('You had a nightmare about a scary clown that tries to lure you into the sewers.');
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
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterHypnoDreams(s: GameState, scene: SceneBuilder): void {
  if (((s as any).therapistFuckedPussyStage ?? 0) < 1) {
    qspCall(s, 'arousal', 'erotic', (-15));
    (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
  } else {
    qspCall(s, 'arousal', 'erotic', (-20));
    (s as any).temp_rand = Math.floor(Math.random() * 7) + 1;
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/clinic/therapist/sex/schoolSitBlow2.mp4');
    scene.text('You dream that you\'re sucking someone\'s cock.');
    if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
      scene.text('It\'s your therapist. You look up and meet his eyes as you eagerly work his shaft.');
    } else {
      if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
        scene.text('You\'ve never done this with a guy before, but for some reason it just feels... right. You can\'t will yourself to look up and see whose dick you\'re sucking though.');
      } else {
        scene.text('It almost feel real, like you\'re actually sucking cock, and it feels good! However, you can\'t will yourself to look up and see whose dick you\'re sucking.');
      }
    }
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.img('images/locations/pavlovsk/clinic/therapist/sex/throatFuck1.mp4');
      scene.text('You dream that your throat is being fucked hard and deep. It hurts and you can\'t breathe, but you just sit still and allow yourself to be used. The man\'s balls rythmically slap against your face as he buries his cock into your throat.');
      if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
        scene.text('You can\'t see his face from this angle, but somehow you know it\'s your therapist. Even as your eyes water and your throat aches, you feel an inexplicable desire to please him.');
      } else {
        if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
          scene.text('You\'ve never done anything like this before and even though you can hardly breathe, it actually feels good. You can\'t tell who\'s fucking you though.');
        } else {
          scene.text('It almost feels real, like you actually have a huge cock down your throat! Your throat hurts, but for some reason you feel like you\'re on the edge of an orgasm. You can\'t tell who\'s fucking you though.');
        }
      }
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.img('images/locations/pavlovsk/clinic/therapist/sex/hypnoAnalPiledriver1.mp4');
        scene.text('You dream that you\'re being fucked hard in your ass. Your legs are pulled up over your head and you\'re desperately stimulating your clit.');
        if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
          scene.text('Your therapist drives into you with powerful thrusts. Even in the dream, some part of you knows exactly who it is, and it makes the pleasure all the more intense.');
        } else {
          if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
            scene.text('You\'ve never had sex before, but it feels amazing! You can\'t tell who\'s fucking you though.');
          } else {
            scene.text('It almost feels real, like you\'re actually getting your ass rammed full of cock. It feels great, but you can\'t tell who\'s fucking you.');
          }
        }
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.img('images/locations/pavlovsk/clinic/therapist/sex/hypnoRide4.mp4');
          if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
            scene.text('You dream that you\'re riding your therapist\'s cock. You keep slamming your pussy onto his massive rod as hard as you can, his huge cock bumping against your cervix. It feels wonderful and you feel a deep craving to feel his seed pump into you.');
          } else {
            scene.text('You dream that you\'re riding someone\'s cock. You keep slamming your pussy into his massive rod as hard as you can and your tits flop around wildly as you do so.');
            if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
              scene.text('You\'ve never done something like this. Something deep inside hurts every time you sit all the way down, but it also feels good! You can\'t will yourself to turn and look at who you are riding.');
            } else {
              scene.text('It almost feels real, like you\'re actually riding someone\'s huge cock! You can\'t will yourself to turn and look at who you\'re riding though.');
            }
          }
        } else {
          if (((s as any).temp_rand ?? 0) === 5) {
            scene.img('images/locations/pavlovsk/clinic/therapist/sex/hypnoFuckCouchKneel1.mp4');
            if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
              scene.text('You dream that you\'re being fucked hard from behind by your therapist.');
              scene.text('Your wet pussy greedily squelches each time he aggressively thrusts his cock into you. It feels so good…');
            } else {
              scene.text('You dream that you\'re being fucked hard from behind on your hands and knees.');
              if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
                scene.text('You\'ve never had sex before, but it feels amazing! You can\'t tell who\'s fucking you and you can\'t will yourself to look behind you.');
              } else {
                scene.text('It almost feels real, like you\'re actually getting your pussy rammed full of cock and it feels great! You can\'t tell who\'s fucking you and you can\'t will yourself to look behind you.');
              }
            }
          } else {
            if (((s as any).temp_rand ?? 0) === 6) {
              scene.img('images/locations/pavlovsk/clinic/therapist/sex/schoolDoggy3.mp4');
              if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
                scene.text('You dream that you are being fucked hard from behind by your therapist as your hands are being held behind your back.');
                scene.text('His massive cock stretches your pussy and you feel wonderfully full.');
              } else {
                scene.text('You dream that you\'re being fucked hard from behind as your hands are being held behind your back.');
                if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
                  scene.text('You\'ve never had sex before, but it feels amazing! You can\'t tell who\'s fucking you and you can\'t will yourself to look behind you.');
                } else {
                  scene.text('It almost feels real, like you\'re actually getting your pussy rammed full of cock and it feels great! You can\'t tell who\'s fucking you and you can\'t will yourself to look behind you.');
                }
              }
            } else {
              scene.img('images/locations/pavlovsk/clinic/therapist/sex/schoolFuckCouchBack1.mp4');
              if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
                scene.text('You dream that you\'re being fucked hard in the pussy by your therapist. You spread your legs as wide as you can so his cock can go as deep as possible. It feels amazing.');
              } else {
                if (((s as any).dreamedOfTherapistFucking ?? 0) <= 0) {
                  (s as any).dreamedOfTherapistFucking = 1;
                }
                scene.text('You dream that you\'re being fucked hard in the pussy. You\'re spreading and holding your legs as wide as possible so their cock goes as deep as possible.');
                if (((s as any).stat ?? 0)?.['men_fucked'] === 0) {
                  scene.text('You\'ve never had sex before, but it feels amazing! You try to focus and realize… your therapist is fucking you?');
                } else {
                  scene.text('It almost feels real, like you\'re actually getting your pussy rammed full of cock and it feels great! You try to focus and realize… Your therapist is fucking you?!');
                }
              }
            }
          }
        }
      }
    }
  }
  if (((s as any).stat ?? 0)?.['men_fucked'] === 0  &&  ((s as any).dreamedOfTherapistFucking ?? 0) < 2) {
    scene.text('You wake up feeling strange and excited. Even though you\'ve never had sex, the dream felt very real.');
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0) {
      if (((s as any).stat ?? 0)?.['vaginal'] === 0  &&  ((s as any).dreamedOfTherapistFucking ?? 0) < 2) {
        scene.text('You\'ve never had a cock in your pussy before, yet the sensations from the dream felt very real and have gotten you a little excited.');
      } else {
        // TODO-QSP: dynamic text: It seems your <<$vaginatipe>> pussy urgently needs some attention.
        scene.text(`It seems your ${((s as any).vaginatipe ?? 0)} pussy urgently needs some attention.`);
      }
    }
  }
  if (((s as any).dreamedOfTherapistFucking ?? 0) === 1) {
    scene.text('Why was your therapist fucking you though? Maybe you should <font color=grey><s>be worried</s></font> <i>talk to him about it?</i>');
  } else {
    if (((s as any).dreamedOfTherapistFucking ?? 0) === 2) {
      scene.text('What you did with your therapist felt good… really good. Your pussy throbs simply thinking about it. You lay in bed absentmindedly fantasizing of ways that he could fuck you.');
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterEroDreams(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-10));
  if (((s as any).start_type ?? 0)?.['magic'] === 'no_magic') {
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 6) + 1;
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.img('images/shared/home/bedroom/dream/ero1.jpg');
    scene.text('You dream that you\'re at a school where all the girls are required to attend lessons naked.');
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.img('images/shared/home/bedroom/dream/sex/ero2.jpg');
      scene.text('You dream that you\'re naked while caressing an athletic guy on the couch. He kisses your neck and slowly moves down to kiss your chest, flicking his tongue over your nipples.');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.img('images/shared/home/bedroom/dream/sex/ero3.jpg');
        scene.text('You dream that you\'re in a shower with a man. He lathers your body, paying special attention to your breasts and pussy while his hard cock brushes against your back.');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.img('images/shared/home/bedroom/dream/sex/ero4.jpg');
          scene.text('You dream that you\'re on a bed naked with a girl, kissing and caressing each other passionately,');
        } else {
          if (((s as any).temp_rand ?? 0) === 5) {
            scene.img('images/shared/home/bedroom/dream/sex/ero5.jpg');
            scene.text('You dream that you\'re naked while making out with a stranger.');
          } else {
            qspCall(s, 'arousal', 'erotic', (-5));
            scene.img('images/shared/home/bedroom/dream/magicerodream1.jpg');
            scene.text('You dream about a sexy elf pleasuring herself.');
            scene.text('You imagine yourself as the elf and that it is you fingering your pussy in a remote pond. All alone, just bucking your hips as you find all the most stimulating spots, pushing you closer and closer to the edge.');
            scene.text('You never quite get there though, and feel much hornier as a result.');
          }
        }
      }
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterSexDreams(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-25));
  (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.img('images/shared/home/bedroom/dream/sex/sex1.jpg');
    scene.text('You dream about having sex at the poolside of an expensive mansion with an attractive athletic man, bouncing up and down on his cock while he firmly grasps your ass.');
    scene.text('He starts to groan and tense up, so you increase the speed of your bouncing and…');
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.img('images/shared/home/bedroom/dream/sex/sex2.jpg');
      scene.text('You dream about having passionate sex with a stranger on a couch. He gently kisses you and takes your breasts into his hands, fondling them while thrusting his cock in and out of your pussy.');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.img('images/shared/home/bedroom/dream/sex/sex3.jpg');
        scene.text('You dream that you\'re on a beach with a stranger. He kisses your neck while you lie in the missionary position on the sand and he rhythmically pumps his cock into your pussy.');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.img('images/shared/home/bedroom/dream/sex/sex4.jpg');
          scene.text('You dream that you\'re bent over a couch with a man behind you pushing his cock in and out of you while firmly grasping your ass. You\'re biting your lips from the pleasure.');
        } else {
          scene.img('images/shared/home/bedroom/dream/sex/sex5.jpg');
          scene.text('You dream that you\'re sitting on top of a guy, bouncing up and down on his cock.');
        }
      }
    }
  }
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('You wake up feeling strange and excited. Even though you\'ve never had sex, the dream felt very real.');
  } else {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin') === 0  &&  ((s as any).stat ?? 0)?.['vaginal'] === 0) {
      scene.text('You\'ve never had a cock in your pussy before, yet the sensations from the dream felt very real and have gotten you a little excited.');
    } else {
      // TODO-QSP: dynamic text: It seems your <<$vaginatipe>> pussy urgently needs some attention.
      scene.text(`It seems your ${((s as any).vaginatipe ?? 0)} pussy urgently needs some attention.`);
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterBjDreams(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-15));
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/shared/home/bedroom/dream/sex/bj1.jpg');
    scene.text('You dream about sucking a guy\'s dick during sunset near the ocean.');
  } else {
    scene.img('images/shared/home/bedroom/dream/sex/bj2.jpg');
    scene.text('You have a dream where you\'re tied to a staircase, squatting down with your legs wide open, sucking and savouring the dick of a guy dressed in an expensive looking suit.');
  }
  if (((s as any).stat ?? 0)?.['bj'] === 0) {
    scene.text('You\'ve never given anyone a blowjob before, but the feeling of the dick in your mouth felt very real. The dream has excited you a little.');
  } else {
    scene.text('It seems you subconsciously want to suck a dick…');
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterAnalDreams(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-25));
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/shared/home/bedroom/dream/sex/anal1.jpg');
    scene.text('You dream that you\'re bent over as a man rhythmically pumps your ass with his cock while you caress your clit.');
  } else {
    scene.img('images/shared/home/bedroom/dream/sex/anal2.jpg');
    scene.text('You dream that you\'re laying on your side as a guy fucks your ass. You moan loudly from the sensation.');
  }
  if (((s as any).stat ?? 0)?.['anal'] === 0  &&  (!((s as any).pcs_ass ?? 0))) {
    scene.text('You wake up feeling strange and excited. Even though you\'ve never had anal sex, the dream felt very real.');
  } else {
    if (((s as any).stat ?? 0)?.['anal'] === 0) {
      scene.text('You\'ve never had a cock in your ass before, but the sensations from the dream felt very real and have gotten you a little excited.');
    } else {
      // TODO-QSP: dynamic text: It seems your <<$anustipe>> anus urgently needs some attention.
      scene.text(`It seems your ${((s as any).anustipe ?? 0)} anus urgently needs some attention.`);
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterGangDreams(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'erotic', (-25));
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/shared/home/bedroom/dream/sex/gang1.jpg');
    scene.text('You dream about two men fucking you. You\'re lying between them sucking one of them while the other is fucking your ass.');
  } else {
    scene.img('images/shared/home/bedroom/dream/sex/gang2.jpg');
    scene.text('You dream that you\'re in-between two hot guys as one fucks your pussy and the other fucks your ass. Both of them fuck you with force, causing you to moan loudly with pleasure.');
  }
  if (((s as any).stat ?? 0)?.['gangbang_count'] === 0) {
    if (((s as any).stat ?? 0)?.['think_virgin'] === 1  &&  ((s as any).pcs_ass ?? 0) === 0  &&  (!(((s as any).stat ?? 0)?.['anal'] + ((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['hj'] + ((s as any).stat ?? 0)?.['male_sexual_partners'] + ((s as any).stat ?? 0)?.['female_sexual_partners']))) {
      scene.text('You haven\'t even had normal sex, least of all a threesome. Even though you\'re excited, the dream still scared you a little.');
    } else {
      if (((s as any).stat ?? 0)?.['vaginal'] > 0  &&  ((s as any).pcs_ass ?? 0) === 0  &&  (!(((s as any).stat ?? 0)?.['anal'] + ((s as any).stat ?? 0)?.['bj'] + ((s as any).stat ?? 0)?.['hj']))) {
        scene.text('Even though you\'ve had sex, the thought of a gangbang, even in a dream, is a little alarming.');
      } else {
        if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')  &&  ((s as any).pcs_ass ?? 0) > 0  &&  ((s as any).stat ?? 0)?.['male_sexual_partners'] > 0  &&  ((s as any).stat ?? 0)?.['female_sexual_partners'] === 0) {
          scene.text('Even though you\'re technically still a virgin, the thought of a gangbang, even in a dream, is a little alarming.');
        } else {
          if (((s as any).pcs_ass ?? 0) === 0  &&  ((s as any).stat ?? 0)?.['anal'] === 0  &&  ((s as any).stat ?? 0)?.['male_sexual_partners'] > 0  &&  ((s as any).stat ?? 0)?.['female_sexual_partners'] === 0) {
            scene.text('It seems that, in your dreams, one guy at a time is not enough…');
          } else {
            scene.text('The dream felt very real and left you feeling a little excited.');
          }
        }
      }
    }
  } else {
    if (((s as any).stat ?? 0)?.['male_sexual_partners'] === 0  &&  ((s as any).stat ?? 0)?.['female_sexual_partners'] === 0) {
      scene.text('The dream felt very real and left you feeling a little excited.');
    } else {
      if (((s as any).stat ?? 0)?.['female_sexual_partners'] === 0) {
        scene.text('It seems that your experience with swinging with a few guys was not in vain and your subconscious is actively reminding you about it.');
      } else {
        if (((s as any).stat ?? 0)?.['male_sexual_partners'] === 0) {
          scene.text('It seems that your experience with swinging with several girls was not in vain and your subconscious is actively reminding you about it.');
        } else {
          scene.text('It seems that your experience with swinging was not in vain and your subconscious is actively reminding you about it.');
        }
      }
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterSuccubDreams(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sucpcinfo ?? 0) < 4) {
    (s as any).temp_rand = Math.floor(Math.random() * 5) + 1;
  } else {
    (s as any).temp_rand = Math.floor(Math.random() * 4) + 2;
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.img('images/shared/home/bedroom/dream/sucrandream1.jpg');
    scene.text('You dream of yourself with horns, wings, and a tail.');
    if (((s as any).sucpcinfo ?? 0) > 0) {
      scene.text('You have become some kind of demon!');
    } else {
      scene.text('You have become something inhuman!');
    }
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.img('images/shared/home/bedroom/dream/sucrandream2.jpg');
      scene.text('You dream that you have crushed all those who stand in your way and earned your seat at the council.');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.img('images/shared/home/bedroom/dream/sucrandream3.jpg');
        if (((s as any).succublvl ?? 0) < 3) {
        }
        // TODO-QSP: dynamic text: You dream that you're arguing with <<$sucselftmp>>.
        scene.text(`You dream that you're arguing with ${((s as any).sucselftmp ?? 0)}.`);
        scene.text('You don\'t know what it\'s about, but you think you won…');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.img('images/shared/home/bedroom/dream/sucrandream4.jpg');
          scene.text('You dream that you\'re walking through a crowded convention hall filled with people in costumes.');
          scene.text('You don\'t know why you\'re here until you see <i>her</i>, then you just <b>know</b>. You\'re here for <b>reproduction</b>!');
        } else {
          scene.img('images/shared/home/bedroom/dream/sucrandream5.jpg');
          scene.text('You dream about an encounter with another succubus on <i>your</i> territory!');
          if (((s as any).succhungry ?? 0) < (0 - 1 - ((s as any).succublvl ?? 0))) {
            scene.text('You\'re sated however, so it doesn\'t bother you.');
          } else {
            scene.text('You can\'t allow that!');
          }
        }
      }
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enterPregDreams(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/pc/body/shape/preg/0/${Math.floor(Math.random() * 6) + 3}.jpg`);
  (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.text('You dream you\'re walking through a quiet forest, heavily pregnant as sunlight filters gently through the leaves. The trees seem to watch you with kindness.');
    scene.text('When you reach a still pond, you look down and see not your face, but a child\'s smiling face reflected back from inside you.');
  } else {
    if (((s as any).temp_rand ?? 0) === 2) {
      scene.text('You dream you\'re in a warm, candlelit bath, cradling your belly as tiny constellations shimmer beneath your skin. One by one, the stars shift and align to form a name you don\'t recognize, but somehow know belongs to your child.');
      scene.text('It glows, then fades gently into your skin.');
    } else {
      if (((s as any).temp_rand ?? 0) === 3) {
        scene.text('You dream you\'re in a quiet hospital room, holding your newborn. The baby opens its eyes — your eyes — and says, not with words, but with a look, I remember you.');
        scene.text('A wave of memories washes over you — some yours, some not — like a shared past you never knew you had.');
      } else {
        if (((s as any).temp_rand ?? 0) === 4) {
          scene.text('You dream you\'re dancing alone in a grand, golden ballroom, barefoot and glowing. Your pregnant belly moves in rhythm with the music.');
          scene.text('Then you see another version of yourself, also pregnant, dancing across from you, mirroring every move. She smiles — and so do you.');
        } else {
          if (((s as any).temp_rand ?? 0) === 5) {
            scene.text('You dream you\'re lying in a meadow, the sky swirling in soft colors above. Every time your baby kicks, a flower blooms nearby. When you laugh, the wind carries it through the field like a lullaby.');
            scene.text('The whole world feels like it\'s waiting with you, humming in anticipation.');
          } else {
            if (((s as any).temp_rand ?? 0) === 6) {
              scene.text('You dream you\'re riding a train through a glowing, endless night. You\'re the only passenger, hands resting on your round belly.');
              scene.text('At each stop, a different version of you boards the train — some older, some younger. They smile at you with knowing eyes, but none of them speak.');
            } else {
              if (((s as any).temp_rand ?? 0) === 7) {
                scene.text('You dream you\'re at your baby shower, surrounded by people you\'ve never met, but who somehow know your name. They give you strange gifts: a compass, a key, a glass jar filled with stars. You ask who the gifts are for.');
                scene.text('"For the traveler you\'re carrying," one guest replies.');
              } else {
                if (((s as any).temp_rand ?? 0) === 8) {
                  scene.text('You dream you\'re in a library with no ceiling, pregnant and searching for something. The books whisper when you touch them before one falls into your hands and opening on its own.');
                  scene.text('Inside is a story about a child who changes everything. The child\'s name… is yours, written in gold.');
                } else {
                  if (((s as any).temp_rand ?? 0) === 9) {
                    scene.text('You dream you\'re floating underwater, calm and weightless, your pregnant belly glowing like a lantern. Sea creatures gather around, silent and reverent.');
                    scene.text('"She remembers the ocean," one whispers as it brushes past.');
                    scene.text('You know instantly that your baby has been here before.');
                  } else {
                    scene.text('You dream you\'re looking up at the stars, your belly resting gently in your lap. A meteor streaks across the sky and you feel your baby kick hard.');
                    scene.text('For a singular moment, the stars rearrange into the shape of an eye and you feel a presence watching you — not with fear, but with awe.');
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  qspCall(s, 'dream_events', 'event_end');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'mod_sleepevents':
      enterModSleepevents(s, scene);
      break;
    case 'event_handler':
      enterEventHandler(s, scene);
      break;
    case 'event_handler2':
      enterEventHandler2(s, scene);
      break;
    case 'event_end':
      enterEventEnd(s, scene);
      break;
    case 'exit':
      enterExit(s, scene);
      break;
    case 'continue':
      enterContinue(s, scene);
      break;
    case 'stepdad_dream':
      enterStepdadDream(s, scene);
      break;
    case 'braid_hair_dream':
      enterBraidHairDream(s, scene);
      break;
    case 'succubus_dream':
      enterSuccubusDream(s, scene);
      break;
    case 'no_dream':
      enterNoDream(s, scene);
      break;
    case 'erotic_dream_switch':
      enterEroticDreamSwitch(s, scene);
      break;
    case 'd_dreams':
      enterDDreams(s, scene);
      break;
    case 'hypno_dreams':
      enterHypnoDreams(s, scene);
      break;
    case 'ero_dreams':
      enterEroDreams(s, scene);
      break;
    case 'sex_dreams':
      enterSexDreams(s, scene);
      break;
    case 'bj_dreams':
      enterBjDreams(s, scene);
      break;
    case 'anal_dreams':
      enterAnalDreams(s, scene);
      break;
    case 'gang_dreams':
      enterGangDreams(s, scene);
      break;
    case 'succub_dreams':
      enterSuccubDreams(s, scene);
      break;
    case 'preg_dreams':
      enterPregDreams(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const dream_events: LocationDef = {
  name: 'dream_events',
  title: 'You had a very strange dream: You were blindfolded while hav',
  region: 'other',
  enter: enter,
};
