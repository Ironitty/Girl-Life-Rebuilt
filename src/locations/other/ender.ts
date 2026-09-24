import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLoss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nill', '');
  if (((s as any).fightEnding ?? 0) === 1) {
    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
      (s as any).pcs_health = 100;
    }
    (s as any).fightEnding = 0;
    scene.text('You fall to the floor and feel your consciousness slipping away.');
    scene.actions([
{ label: 'Further', goto: ['intro_start', 'tg_adult_shared', '3'] },
]);
    return;
  } else {
    if (((s as any).fightEnding ?? 0) === 2) {
      if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
        (s as any).pcs_health = 100;
      }
      (s as any).fightEnding = 0;
      scene.text('You fall to the floor as you\'re not longer able to fight Gustav.');
      scene.actions([
{ label: 'Further', goto: ['tatiana_lab', 'start'] },
]);
      return;
    } else {
      if (((s as any).fightEnding ?? 0) === 3) {
        if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
          (s as any).pcs_health = 100;
        }
        (s as any).fightEnding = 0;
        scene.text('You fall to the floor as you\'re not longer able to fight Tatiana.');
        scene.actions([
{ label: 'Further', goto: ['tatiana_lab', 'start'] },
]);
        return;
      } else {
        if (((s as any).fightEnding ?? 0) === 4) {
          if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
            (s as any).pcs_health = 100;
          }
          (s as any).fightEnding = 0;
          qspCall(s, 'money', 'set', 0, 'cash');
          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
          if (((s as any).rikudo ?? 0) > 10) {
            (s as any).rikudo = ((s as any).rikudo ?? 0) - 10;
          }
          scene.img('images/shared/sex/dom/spit.jpg');
          scene.text('You fall to the ground. The prostitute kicks you around a couple of times before she grabs hold of your purse and takes all your money. As she\'s done she leans over you and spits in your face.');
          scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
          return;
        } else {
          if (((s as any).fightEnding ?? 0) === 5) {
            if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
              (s as any).pcs_health = 100;
            }
            (s as any).fightEnding = 0;
            qspCall(s, 'money', 'set', 0, 'cash');
            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
            (s as any).bandfight = ((s as any).bandfight ?? 0) - 1;
            if (((s as any).rikudo ?? 0) > 10) {
              (s as any).rikudo = ((s as any).rikudo ?? 0) - 10;
            }
            scene.img('images/locations/city/centralpark/sex/event/band.jpg');
            scene.text('You fall to the ground. As you\'re lying there, the pimp lights a cigarette while rummaging through your stuff. He finally finds what he\'s been looking for - all of your money. "Open your mouth slut." he orders.');
            scene.text('You obey and open your mouth. He sighs as he taps ash into your mouth. "I hope you\'ve learned a valuable lesson slut. I won\'t be this kind next time."');
            scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
            return;
          } else {
            if (((s as any).fightEnding ?? 0) === 6) {
              if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                (s as any).pcs_health = 100;
              }
              (s as any).fightEnding = 0;
              qspCall(s, 'money', 'set', 0, 'cash');
              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
              (s as any).stellfight = ((s as any).stellfight ?? 0) - 1;
              if (((s as any).rikudo ?? 0) > 10) {
                (s as any).rikudo = ((s as any).rikudo ?? 0) - 10;
              }
              scene.img('images/characters/city/ira/sex/irinaqw7.jpg');
              scene.text('You fall to the ground. The prostitute kicks you around a couple of times before she grabs hold of your purse and takes all your money.');
              scene.text('"This won\'t do." she says as you\'re ordered to kneel. She pulls her panties to the side as she sits on your face, forcing you to lick her semen filled pussy.');
              scene.text('Afraid of getting beaten again, you carefully lick her crotch clean. After a few minutes she\'s satisfied and leaves.');
              qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'prostitution');
              qspCall(s, 'arousal', 'end');
              scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
              return;
            } else {
              if (((s as any).fightEnding ?? 0) === 7) {
              } else {
                if (((s as any).fightEnding ?? 0) === 8) {
                  if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                    (s as any).pcs_health = 100;
                  }
                  if (qspFunc(s, 'succubus', 'active', 4)) {
                    qspGoto(s, 'succubus', 'RapistFight');
                  }
                  (s as any).fightEnding = 0;
                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                  if (((s as any).rikudo ?? 0) > 10) {
                    (s as any).rikudo = ((s as any).rikudo ?? 0) - (10);
                  }
                  if (((s as any).loc ?? 0) === 'pav_park'  ||  ((s as any).loc ?? 0) === 'city_park') {
                    qspGoto(s, 'rape_events', 'park_rape_solo');
                  } else {
                    if (((s as any).region ?? 0) === 'pav'  ||  ((s as any).region ?? 0) === 'city') {
                      qspGoto(s, 'rape_events', 'urban_fight_rape');
                    }
                  }
                } else {
                  if (((s as any).fightEnding ?? 0) === 9) {
                    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                      (s as any).pcs_health = 100;
                    }
                    (s as any).fightEnding = 0;
                    (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                    if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1) {
                      (s as any).temp_thresh = 0;
                    } else {
                      if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 0) {
                        (s as any).temp_thresh = 3;
                      } else {
                        if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2) {
                          (s as any).temp_thresh = 1;
                        } else {
                          if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 3) {
                            (s as any).temp_thresh = 5;
                          } else {
                            if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4) {
                              (s as any).temp_thresh = 8;
                            }
                          }
                        }
                      }
                    }
                    if ((Math.floor(Math.random() * 80) + 1) <= ((s as any).temp_thresh ?? 0)) {
                      scene.text('Your assailant knocks you down with one final hit, and you pass out.');
                      scene.actions([
                        { label: 'Pass out', handler: (st: GameState) => {
    qspGoto(st, 'abduction', 'abdCarTrunk');
  } },
                      ]);
                    } else {
                      qspCall(s, 'money', 'set', 0, 'cash');
                      qspCall(s, 'stat', '');
                      scene.text('He knocks you down with one final hit. The moment he puts you out of commission, he grabs your money and runs away.');
                      scene.actions([
                        { label: 'Get back on your feet', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
                      ]);
                    }
                    return;
                  } else {
                    if (((s as any).fightEnding ?? 0) === 10) {
                      if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                        (s as any).pcs_health = 100;
                      }
                      (s as any).fightEnding = 0;
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (2);
                      if (((s as any).Loss ?? 0) < 0) {
                        (s as any).Loss = 0;
                      }
                      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlbeatsguy2.jpg');
                      // TODO-QSP: dynamic text: "Where the hell did you learn how to fight <<$pcs_nickname>>?" Lera asks in an a...
                      scene.text(`"Where the hell did you learn how to fight ${((s as any).pcs_nickname ?? '')}?" Lera asks in an annoyed tone before sweeping Dimka's legs out from under him. Lena and Lera proceed to kick and stomp Dimka until he starts begging them to stop.`);
                      // TODO-QSP: dynamic text: After a few more hits, they get bored and check his pockets for cash. "<<$func('...
                      scene.text(`After a few more hits, they get bored and check his pockets for cash. "${qspFunc(s, 'money', 'string_profit', 10000)}?! Sweet!" They split the money among themselves, leaving none for you.`);
                      scene.text('Lena turns to you and tauntingly says "You either need to learn how to fight or get used to serving us, little bunny." Before you can say anything, the bell rings for class.');
                      scene.actions([
                        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).fightEnding ?? 0) === 11) {
                        if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                          (s as any).pcs_health = 100;
                        }
                        (s as any).fightEnding = 0;
                        (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                        if (((s as any).rikudo ?? 0) > 10) {
                          (s as any).rikudo = ((s as any).rikudo ?? 0) - 10;
                        }
                        scene.text('In their drunken state, they throw you on the spit-covered porch and begin tearing your clothes as you no longer have the strength to resist.');
                        scene.actions([
                          { label: 'Cry', goto: ['sexm', 'gangbang'] },
                        ]);
                      } else {
                        if (((s as any).fightEnding ?? 0) === 12) {
                          if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                            (s as any).pcs_health = 100;
                          }
                          (s as any).fightEnding = 0;
                          ((s as any).christinaQW = (s as any).christinaQW ?? {})['fight'] = (-1);
                          ((s as any).christinaQW = (s as any).christinaQW ?? {})['pre_fight'] = 0;
                          ((s as any).christinaQW = (s as any).christinaQW ?? {})['subpath'] = 2;
                          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                          (s as any).minut = ((s as any).minut ?? 0) + 10;
                          qspCall(s, 'stat', '');
                          scene.img('images/shared/sex/dom/spit.jpg');
                          scene.text('Christina beats you and you fall to the ground, crying in front of the whole school. "Now I\'ll make your life hell, slut! Open your mouth and stick your tongue out, bitch."');
                          scene.text('You comply and open your mouth with your tongue out. Without any hesitation, Christina spits in your mouth and yells "Swallow, bitch!" The whole school watches as you swallow her spit.');
                          scene.text('"I own you now, bitch." Spitting on your face one more time, she turns and walks away, looking pleased with herself.');
                          scene.text('You stagger to your feet, tears and spit streaking your face, angry at yourself for losing. Who knows what she will do to you now.');
                          scene.actions([
                            { label: 'Leave', goto: ['gschool_grounds', 'main'] },
                          ]);
                        } else {
                          if (((s as any).fightEnding ?? 0) === 13) {
                            if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                              (s as any).pcs_health = 100;
                            }
                            (s as any).fightEnding = 0;
                            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                            scene.text('You breath deeply, totally exhausted as the naked man advances upon you. You no longer have the strength to fight him off.');
                            scene.actions([
                              { label: 'Lose', goto: ['stallion', 'rape'] },
                            ]);
                          } else {
                            if (((s as any).fightEnding ?? 0) === 14) {
                              if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                (s as any).pcs_health = 100;
                              }
                              (s as any).fightEnding = 0;
                              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                              qspCall(s, 'pain', '5', 'tummy', 'kick');
                              qspCall(s, 'pain', '5', 'cheeks', 'hit');
                              qspCall(s, 'pain', '5', 'thighs', 'kick');
                              qspCall(s, 'pain', '5', 'hair', 'stretch');
                              qspCall(s, 'clothing', 'displose');
                              // TODO-QSP: $streetev_title
                              scene.img('images/locations/shared/street/lostfight.jpg');
                              scene.text('You do your best, but there are just too many of them. Eventually they get you down on the ground and beat you, ripping out handfuls of your hair and tearing your clothes.');
                              scene.text('After what feels like an eternity, they finally stop hitting you. "That\'s what you get, you stupid bitch." Then the girl spits on you, with the rest of the gang following suit and spitting on you as well. Finally they get bored of tormenting you further and leave, laughing about how they beat the ugly girls ass.');
                              scene.text('With tears rolling down your face, you slowly get up and do your best to pull your clothes into place to cover up before you gingerly walk away.');
                              scene.actions([
                                { label: 'Leave', handler: (st: GameState) => {
    (st as any).streetrand = (-1);
    dynamicGoto(st, 'prevLoc');
  } },
                              ]);
                            } else {
                              if (((s as any).fightEnding ?? 0) === 15) {
                                if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                  (s as any).pcs_health = 100;
                                }
                                (s as any).fightEnding = 0;
                                (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                ((s as any).slyQW = (s as any).slyQW ?? {})['fight'] = (-1);
                                qspCall(s, 'mood', 'lower', 'large');
                                qspCall(s, 'pain', '5', 'cheeks', 'hit');
                                qspCall(s, 'stat', '');
                                scene.img('images/characters/shared/headshots_main/big248.jpg');
                                scene.text('You know he isn\'t that tough, but somehow he just keeps getting lucky blows in. After a solid punch knocks you off your feet, you just lay there, dazed and completely done resisting.');
                                scene.actions([
                                  { label: 'Give up', goto: ['Zvereva_Sly', 'loss'] },
                                ]);
                              } else {
                                if (((s as any).fightEnding ?? 0) === 16) {
                                  if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                    (s as any).pcs_health = 100;
                                  }
                                  (s as any).fightEnding = 0;
                                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
                                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (5);
                                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (5);
                                  qspCall(s, 'mood', 'lower', 'medium');
                                  scene.img('images/locations/shared/street/lostfight.jpg');
                                  scene.text('You groan on pain as the frozen ground reaches for you. Damm. That wasn\'t your best idea now that you see it, especially because the police have just arrived to break up the brawl turned riot.');
                                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Oh my god! What happened to you?!"
                                  scene.text(`"${((s as any).pcs_nickname ?? '')}! Oh my god! What happened to you?!"`);
                                  scene.text('Katja and Vicky appear over you and help Vanya take away your beaten body. It hurts a lot but somehow, after a while, you manage to stand without seeing stars. The trio looks at you in askance.');
                                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I don''t know what to do with you! What were you thinking?!"
                                  scene.text(`"${((s as any).pcs_nickname ?? '')}! I don't know what to do with you! What were you thinking?!"`);
                                  scene.text('Katja is really, really pissed and for a long while, she chastizes your actions. The fact that you are hurting doesn\'t seem to make her stop, but finally, after a long-winded tirade, the redhead seems to deflate and gives you a tired hug.');
                                  scene.text('"Please! Don\'t do that again!"');
                                  scene.text('It feels nice and makes Vanya & Vicky spell a sonorous "Kawai!" before quickly turning back and running away from an embarrassed/angry Katja. It was "fun", but it is time to look for something else to do.');
                                  scene.actions([
                                    { label: 'Continue', goto: ['katjaEV', 'kathan'] },
                                  ]);
                                } else {
                                  if (((s as any).fightEnding ?? 0) === 17) {
                                    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                      (s as any).pcs_health = 100;
                                    }
                                    (s as any).fightEnding = 0;
                                    (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                    (s as any).AlexandriaQW = 5;
                                    qspCall(s, 'mood', 'lower', 'huge');
                                    scene.text('<center><b>????</b></center>');
                                    scene.img('images/characters/city/alexandria/alexandria.jpg');
                                    scene.text('As a mighty cramp paralyzes your body, you find yourself sitting back in the prop\'s room, your bitch nowhere to be found. In her place is a tall blonde in a suit, who is giving you the once-over.');
                                    scene.text('"I admit that I was expecting another of Rikudo\'s victims. For a moment, even I was tricked into thinking that you were… better."');
                                    scene.text('Groaning, you try to make sense of the situation, and look for Tatiana\'s film. It is now in the woman\'s hand. She glances at it nonchalantly, before pocketing the trinket and looking at you with a frustrated sigh.');
                                    scene.text('"It\'s evident that you can\'t handle her, so it would be better for a more experienced magician to take care of this anomaly."');
                                    scene.text('You finally manage to stand on shaky legs, and give her a good look. She isn\'t a Succubus, but she is old and powerful. That means two things. First, you will be hard-pressed to take the film from her grasp, and second, she must be an incredible tasty lay!');
                                    scene.text('"Who… Who are you?"');
                                    scene.text('She sneers and says "I suppose this is time for a presentation. You can call me Aleksei, and you are?"');
                                    scene.actions([
                                      { label: '"I am…"', handler: (st: GameState) => {
    (st as any).intel_lvlst = ((st as any).intel_lvlst ?? 0) - (20);
  }, goto: ['tatiana_missions', 'mission2D'] },
                                    ]);
                                  } else {
                                    if (((s as any).fightEnding ?? 0) === 18) {
                                      if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                        (s as any).pcs_health = 100;
                                      }
                                      (s as any).fightEnding = 0;
                                      (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                      qspCall(s, 'mood', 'lower', 'large');
                                      scene.text('<center><b>Ana</b></center>');
                                      scene.img('images/characters/city/ana/anawin.jpg');
                                      scene.text('You moan in the ground, grabbing your arm, as blood flow from a series of gashes, made by that strange mist.');
                                      scene.text('"Oh! Come on Sexy! You are supposed to be a badass witch!"');
                                      scene.text('"Ouch! Fuck you, Ana!"');
                                      scene.text('You don\'t know what exactly are perceiving the mundane people around you, but by the sound, they no longer think that this is some kind of <i>performance</i>.');
                                      scene.text('"Stop you two right there!"');
                                      scene.text('Groaning, you turn to look four pissed of policemen walking towards you, it\'s evident, that they come to end the brawl.');
                                      scene.text('"Nope! Bye, Sexy! Beep Beep!"');
                                      scene.text('Ana then turns and runs towards the traffic.');
                                      qspCall(s, 'willpower', 'crime', 'self', 'hard');
                                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                        scene.actions([
                                          { label: 'Run!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                        ]);
                                      } else {
                                        scene.actions([
                                          { label: 'Run!', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) + (1);
    (st as any).dummy = (Math.floor(Math.random() * 100) + 1);
    qspCall(st, 'stat', '');
    if (((st as any).dummy ?? 0) <= ((st as any).pcs_run ?? 0)) {
      qspGoto(st, 'alexandriaEv', 'anachase3');
    } else {
      if (((st as any).dummy ?? 0) >= ((st as any).pcs_run ?? 0)  &&  ((st as any).dummy ?? 0) >= 90) {
        qspGoto(st, 'alexandriaEv', 'anacrash1');
      } else {
        qspGoto(st, 'alexandriaEv', 'anachase4');
      }
    }
  } },
                                        ]);
                                      }
                                      scene.actions([
                                        { label: 'Go to jail', goto: ['alexandriaEv', 'jail'] },
                                      ]);
                                    } else {
                                      if (((s as any).fightEnding ?? 0) === 19) {
                                        if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                          (s as any).pcs_health = 100;
                                        }
                                        (s as any).fightEnding = 0;
                                        (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                        qspCall(s, 'mood', 'lower', 'large');
                                        scene.img('images/characters/city/ana/crash.jpg');
                                        scene.text('What do you were expecting to happen? Of course, they won! Giving you the beating of your life, and throwing your body to the street, where you lie painfully at the brink of unconsciousness!');
                                        if (((s as any).spellKnown ?? 0)?.['heal'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 400) {
                                          qspCall(s, 'willpower', 'misc', 'self', 'hard');
                                          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                            scene.actions([
                                              { label: 'Will you to cast Heal.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                            ]);
                                          } else {
                                            scene.actions([
                                              { label: 'Will you to cast Heal.', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'alexandriaEv', 'heal2');
  } },
                                            ]);
                                          }
                                        }
                                        scene.actions([
                                          { label: 'You fall unconscious', goto: ['alexandriaEv', 'hospital'] },
                                        ]);
                                      } else {
                                        if (((s as any).fightEnding ?? 0) === 20) {
                                          if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                            (s as any).pcs_health = 100;
                                          }
                                          (s as any).fightEnding = 0;
                                          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                          qspCall(s, 'mood', 'lower', 'large');
                                          scene.text('<center><b>Ana</b></center>');
                                          scene.img('images/characters/city/ana/anawin.jpg');
                                          scene.text('Fighting against Ana is like be tangled with razor wire. That mist that now surrounds her body, cut through cloth, flesh, and you assumed bone. Lucky for you, she doesn\'t seems to want you dead, and use it only, to maintain her beyond your reach.');
                                          scene.text('You try to go beyond her guard, but again and again, she block or dodge all your attacks, and counterattack with can only be professionally taught technique, so in no time you find yourself bloodied in the ground.');
                                          scene.text('"Oh come on Sexy! You are a badass witch! Are you going to tell me that the Great and Powerful Alexandria, didn\'t teach you her tricks?"');
                                          scene.text('Ana continue doing boxing moves around you, all the time doing mocking about your situation, before finally tiring and deciding to leave the parking lot.');
                                          if (((s as any).spellKnown ?? 0)?.['heal'] === 1  &&  ((s as any).pcs_mana ?? 0) >= 400) {
                                            qspCall(s, 'willpower', 'misc', 'self', 'hard');
                                            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                              scene.actions([
                                                { label: 'Will you to cast Heal.', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                              ]);
                                            } else {
                                              scene.actions([
                                                { label: 'Will you to cast Heal.', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'alexandriaEv', 'heal4');
  } },
                                              ]);
                                            }
                                          }
                                          scene.actions([
                                            { label: 'She leaves', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
                                          ]);
                                        } else {
                                          if (((s as any).fightEnding ?? 0) === 21) {
                                            if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                              (s as any).pcs_health = 100;
                                            }
                                            (s as any).fightEnding = 0;
                                            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                            qspCall(s, 'mood', 'lower', 'large');
                                            qspGoto(s, 'gopnew', 'fight_lost');
                                          } else {
                                            if (((s as any).fightEnding ?? 0) === 22) {
                                              if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                                (s as any).pcs_health = 100;
                                              }
                                              (s as any).fightEnding = 0;
                                              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                              (s as any).pcs_hairbsh = 0;
                                              if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
                                                (s as any).pcs_makeup = 0;
                                              }
                                              (s as any).minut = ((s as any).minut ?? 0) + 10;
                                              qspCall(s, 'stat', '');
                                              scene.img('images/locations/pavlovsk/school/bathroom/swirlygb.jpg');
                                              scene.text('You\'ve taken more than a few solid hits by this point and are distracted by Lera heading into one of the stalls, allowing Lena to deliver a powerful jab that floors you.');
                                              scene.text('Unable to continue the fight, you curl up on the cold floor and groan in pain as Lena towers over you. "Not so tough now, are you bitch?" she smirks.');
                                              scene.text('Lera returns a few seconds later and kicks you hard in the stomach, winding you and almost making you throw up. "I don\'t think she\'s quite learned her lesson yet," she says with a cruel smile.');
                                              scene.text('You\'re too weak to resist as the two drag you into a stall and lean you over the toilet. The smell hits you immediately - the bowl is full of urine, likely Lera\'s. They laugh loudly as they dunk your head into the foul water multiple times before holding you under and flushing, your lungs burning as water rushes up your nose.');
                                              scene.text('When they pull you up and finally let you go, you cough up water before spluttering and gasping for air.');
                                              scene.text('Satisfied, the two leave you bloody, bruised and beaten in the stall, but not before Lena spits on you. "Know your place next time, bitch!"');
                                              scene.text('Dazed and struggling to catch your breath, all you can do is lean against the toilet.');
                                              scene.text('After a few minutes, you gather what little strength you have and stagger out of the stall to look at yourself in the mirror. Blood trickles from your nose and you can taste it in your mouth. You wring out your soaked hair and clean yourself up, but are in no shape to go to your next class, so you decide to stay hidden in the stalls where you hope nobody will find you.');
                                              scene.actions([
                                                { label: 'Continue', goto: ['gschool_girls_bathroom', 'bathroom3'] },
                                              ]);
                                            } else {
                                              if (((s as any).fightEnding ?? 0) === 23) {
                                                (s as any).fightEnding = 0;
                                                (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                                qspCall(s, 'mood', 'lower', 'large');
                                                if (((s as any).fight ?? 0)?.['rape_loc'] === 'city_park'  ||  ((s as any).fight ?? 0)?.['rape_loc'] === 'pav_park') {
                                                  if (((s as any).fight ?? 0)?.['rape_type'] === 'gang') {
                                                    qspGoto(s, 'rape_events', 'park_gangrape_fight_loss');
                                                  } else {
                                                    qspCall(s, 'rape_events', 'park_rape_solo');
                                                  }
                                                } else {
                                                  qspGoto(s, 'rape_events', 'urban_fight_rape');
                                                }
                                              } else {
                                                if (((s as any).fightEnding ?? 0) === 24) {
                                                  if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                                    (s as any).pcs_health = 100;
                                                  }
                                                  (s as any).fightEnding = 0;
                                                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                                  qspCall(s, 'mood', 'lower', 'large');
                                                  if (((s as any).opp_health ?? 0)[0] < 30) {
                                                    qspGoto(s, 'gopnik_fight_night', 'barely_lose');
                                                  } else {
                                                    qspGoto(s, 'gopnik_fight_night', 'badly_lose');
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
  // TODO-QSP: end
  scene.build();
}

function enterWin(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nill', '');
  if (((s as any).fightEnding ?? 0) === 2) {
    (s as any).pcs_health = ((s as any).pcs_vital ?? 0)*10;
    (s as any).rikudo = ((s as any).rikudo ?? 0) + 10;
    (s as any).fightEnding = 0;
    if ((!((s as any).winJugo ?? 0))) {
      (s as any).winJugo = 1;
    }
    scene.text('Gustav falls to the floor. He can no longer continue the fight.');
    scene.text('"You have improved greatly, few can beat me in combat." he says with reverence.');
    scene.actions([
{ label: 'Further', goto: ['tatiana_lab', 'start'] },
]);
    return;
  } else {
    if (((s as any).fightEnding ?? 0) === 3) {
      (s as any).pcs_health = ((s as any).pcs_vital ?? 0)*10;
      (s as any).fightEnding = 0;
      (s as any).rikudo = ((s as any).rikudo ?? 0) + 10;
      if ((!((s as any).wintatiana ?? 0))) {
        (s as any).wintatiana = 1;
      }
      scene.text('Tatiana falls to the floor and can no longer keep on fighting.');
      scene.actions([
{ label: 'Further', goto: ['tatiana_lab', 'start'] },
]);
      return;
    } else {
      if (((s as any).fightEnding ?? 0) === 4) {
        (s as any).fightEnding = 0;
        (s as any).whoreQW = 1;
        (s as any).Win = ((s as any).Win ?? 0) + (1);
        (s as any).rikudo = ((s as any).rikudo ?? 0) + 10;
        scene.img('images/locations/shared/streetwalker/defeat.jpg');
        scene.text('The prostitute falls to the ground and starts pleading with you not to beat her again.');
        scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
        return;
      } else {
        if (((s as any).fightEnding ?? 0) === 5) {
          (s as any).fightEnding = 0;
          (s as any).Win = ((s as any).Win ?? 0) + (1);
          (s as any).bandfight = ((s as any).bandfight ?? 0) + 1;
          (s as any).rikudo = ((s as any).rikudo ?? 0) + 10;
          if ((!((s as any).prostOnce ?? 0))) {
            (s as any).prostOnce = 1;
            qspCall(s, 'money', 'earn', (Math.floor(Math.random() * 4501) + 500));
          }
          scene.text('The pimp falls to the ground, letting out a pained groan. You take his wallet and kick him around before moving away.');
          scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
          return;
        } else {
          if (((s as any).fightEnding ?? 0) === 6) {
            (s as any).fightEnding = 0;
            (s as any).Win = ((s as any).Win ?? 0) + (1);
            (s as any).stellfight = ((s as any).stellfight ?? 0) + 1;
            (s as any).rikudo = ((s as any).rikudo ?? 0) + 10;
            qspCall(s, 'money', 'earn', (Math.floor(Math.random() * 201) + 300));
            scene.text('The tattered prostitute falls to the ground. You give her a powerful kick in the ribs and she hands over her money, begging for you to stop.');
            scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
            return;
          } else {
            if (((s as any).fightEnding ?? 0) === 7) {
            } else {
              if (((s as any).fightEnding ?? 0) === 8  ||  ((s as any).fightEnding ?? 0) === 9) {
                if (qspFunc(s, 'succubus', 'active', 4)  &&  ((s as any).scpopt ?? 0) < 2) {
                  (s as any).sclocrt = 'ender';
                  (s as any).scargrt = 'win';
                  (s as any).scfwon = 1;
                  (s as any).scpopt = 1;
                  qspGoto(s, 'succubus', 'RapistFight');
                }
                scene.img('images/locations/shared/street/rapist_defeat.jpg');
                // TODO-QSP: dynamic text: 'You defeat the '+iif(fightEnding = 8, 'rapist', 'thief')+' and empty his wallet...
                scene.text('You defeat the ' + ((((s as any).fightEnding ?? 0) === 8) ? ('rapist') : ('thief')) + ' and empty his wallet as he lies unconscious on the street.');
                (s as any).fightEnding = 0;
                (s as any).scpopt = 0;
                if (((s as any).rikudo ?? 0) > 10) {
                  (s as any).rikudo = ((s as any).rikudo ?? 0) + (100);
                }
                (s as any).Win = ((s as any).Win ?? 0) + (1);
                qspCall(s, 'money', 'earn', (Math.floor(Math.random() * 1501) + 500));
                scene.actions([
{ label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
                return;
              } else {
                if (((s as any).fightEnding ?? 0) === 10) {
                  qspCall(s, 'money', 'earn', 10000);
                  (s as any).fightEnding = 0;
                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (3);
                  (s as any).Win = ((s as any).Win ?? 0) + (1);
                  scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlbeatsguy1.jpg');
                  scene.text('You kick Dimka a few more times as he lies on the ground. "Keep spreading shit about me and I\'ll beat your sorry ass even harder next time!"');
                  scene.text('"I\'ll stop, I swear!" Dimka says between pained breaths.');
                  scene.text('"You better." You turn to leave, but Lena stops you.');
                  scene.text('"Check his pockets." she says "I\'ll keep watch."');
                  // TODO-QSP: dynamic text: You check his pockets and find <<$func(''money'', ''string_profit'', 10000)>> in...
                  scene.text(`You check his pockets and find ${qspFunc(s, 'money', 'string_profit', 10000)} in his wallet. Fucking rich kid. This should teach him. "The teacher is coming!" says Lera, "Let's get out of here!"`);
                  scene.actions([
                    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).fightEnding ?? 0) === 11) {
                    (s as any).fightEnding = 0;
                    if (((s as any).rikudo ?? 0) > 10) {
                      (s as any).rikudo = ((s as any).rikudo ?? 0) + (100);
                    }
                    (s as any).Win = ((s as any).Win ?? 0) + (1);
                    qspCall(s, 'money', 'earn', (Math.floor(Math.random() * 1501) + 500));
                    qspCall(s, 'stat', '');
                    scene.text('You\'ve managed to batter one of your attacker\'s face while you broke the other\'s nose. As he spits, you can see that his spit is mixed with blood as he can barely hold his hand up to surrender. You quickly run over to them and empty the cash from their pockets and mock them. They quickly stumble to their feet and run away in fear.');
                    scene.actions([
                      { label: 'Go home', goto: ['homes_properties', 'go_home'] },
                    ]);
                  } else {
                    if (((s as any).fightEnding ?? 0) === 12) {
                      if (((s as any).LariskaQW ?? 0)?.['story'] === 3) {
                        ((s as any).LariskaQW = (s as any).LariskaQW ?? {})['story'] = 4;
                      }
                      ((s as any).christinaQW = (s as any).christinaQW ?? {})['fight'] = 1;
                      ((s as any).christinaQW = (s as any).christinaQW ?? {})['pre_fight'] = 0;
                      (s as any).Win = ((s as any).Win ?? 0) + (1);
                      (s as any).fightEnding = 0;
                      scene.img('images/characters/pavlovsk/school/girl/christina/school/win.jpg');
                      scene.text('Christina falls to the ground. You grab her by the hair and yank her head back so she can hear you better. "Ok, bitch. Here is how it\'s going to be from now on. You look at me wrong, and I will break you in half and toss you through the nearest window. If I ask for something, you say yes without hesitation." You give her head a good shake. "Do we understand each other? I can\'t hear you agreeing."');
                      scene.text('"Yes! Leave you alone! I won\'t bother you again! Anything you want from me, it\'s a yes!"');
                      scene.text('Satisfied with her answer, you let her go and straighten up, looking around. The kids watching look at you a bit warily, seeing you in a new light. Christina had a reputation of being one of the toughest fighters in school, and you just thrashed her, right in front of everybody.');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'gschool_grounds', '');
  } },
                      ]);
                    } else {
                      if (((s as any).fightEnding ?? 0) === 13) {
                        (s as any).fightEnding = 0;
                        (s as any).Win = ((s as any).Win ?? 0) + (1);
                        scene.text('The naked man staggers back, all bloody. You\'ve beaten him, and it is pretty clear he is finished. You look down and see something odd…');
                        scene.actions([
                          { label: 'What is that?', goto: ['stallion', 'end'] },
                        ]);
                      } else {
                        if (((s as any).fightEnding ?? 0) === 14) {
                          (s as any).fightEnding = 0;
                          (s as any).Win = ((s as any).Win ?? 0) + (1);
                          // TODO-QSP: $streetev_title
                          scene.img('images/locations/shared/street/girlgang.jpg');
                          scene.text('Even though it was four against one, you beat their asses triumphantly. They got in some hits of their own, but in the end you are the only one standing while the four of them lay around your feet curled up, bloody and crying. You straighten your clothes the best you can and proudly continue on your way to the claps of several onlookers that watched the fight.');
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    (st as any).streetrand = (-1);
    dynamicGoto(st, 'prevLoc');
  } },
                          ]);
                        } else {
                          if (((s as any).fightEnding ?? 0) === 15) {
                            (s as any).fightEnding = 0;
                            (s as any).Win = ((s as any).Win ?? 0) + (1);
                            ((s as any).slyQW = (s as any).slyQW ?? {})['fight'] = 1;
                            qspCall(s, 'mood', 'raise', 'small');
                            scene.img('images/characters/shared/headshots_main/big248.jpg');
                            scene.text('Christina is a hell of a fighter. She is fast, hits harder than most boys and knows what she is doing. Yet despite all that she just isn\'t a match for you. You finally land a few hard blows and she goes down gasping for breath, holding up her hand in surrender. You smirk as she lies beaten at your feet. You reach down and pull her phone out of her pocket and then toss it as far as you can out into the lake where it plops into the water.');
                            scene.text('Lina seems to be stunned that you beat Christina and she looks a little afraid of you. "Neither you seen me here naked, right? And since I wasn\'t here, that means I didn\'t beat your ass, but from now on we both know who\'s the bitch don\'t we?" you say to both of them. Lina nods quickly while Christina is reluctant to agree, but soon nods herself. You confidently walk away as Lina helps Christina back to her feet.');
                            scene.actions([
                              { label: 'Continue', goto: ['Zvereva_Sly', 'win'] },
                            ]);
                          } else {
                            if (((s as any).fightEnding ?? 0) === 16) {
                              (s as any).fightEnding = 0;
                              (s as any).Win = ((s as any).Win ?? 0) + (1);
                              ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (5);
                              ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) + (100);
                              ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) + (50);
                              qspCall(s, 'npc_relationship', 'modify', 'A165', 5);
                              qspCall(s, 'npc_relationship', 'modify', 'A14', (-5));
                              qspCall(s, 'mood', 'raise', 'small');
                              scene.img('images/locations/shared/street/girlgang.jpg');
                              scene.text('"Take that bitches!"');
                              scene.text('With one last kick, the bitch squad lies fallen before you, whimpering in pain thanks to the sound beating they\'ve received at your hand, but as you look around for your next victim, a redheaded girl grabs you and pulls you away from the brawl turned riot, towards the waiting Vanya & Vicky.');
                              // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I don''t know what to do with you! What were you thinking?!"
                              scene.text(`"${((s as any).pcs_nickname ?? '')}! I don't know what to do with you! What were you thinking?!"`);
                              scene.text('You… aren\'t too sure why the hell you incited the massive brawl that now is being broken apart by the police, and as you try to look for a good answer, Vanya chooses that moment to express his opinion.');
                              // TODO-QSP: dynamic text: "Well… Katja, I want to say, well… That is hockey! Give me those five <<$pcs_nic...
                              scene.text(`"Well… Katja, I want to say, well… That is hockey! Give me those five ${((s as any).pcs_nickname ?? '')}!"`);
                              scene.text('Katja looks dumbfounded as he raises his hand, more even when you clap it, followed by a shrugging Vicky, who jumps and does the same. As you turn smiling towards Katja, waiting for her to join, she facepalms, turns and begins to walk away, musing about your idiocy. Well, it is probably better if you follow her, so after saying goodbye to Vanya & Vicky, you go with her. It was "fun" but it is time to look for something else to do.');
                              scene.actions([
                                { label: 'Continue', goto: ['katjaEV', 'kathan'] },
                              ]);
                            } else {
                              if (((s as any).fightEnding ?? 0) === 17) {
                                (s as any).fightEnding = 0;
                                (s as any).Win = ((s as any).Win ?? 0) + (1);
                                qspCall(s, 'npc_relationship', 'modify', 'A241', 1);
                                qspCall(s, 'mood', 'raise', 'small');
                                qspGoto(s, 'tatiana_missions', 'mission2E');
                              } else {
                                if (((s as any).fightEnding ?? 0) === 18) {
                                  (s as any).fightEnding = 0;
                                  (s as any).Win = ((s as any).Win ?? 0) + (1);
                                  qspCall(s, 'mood', 'raise', 'small');
                                  (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
                                  qspCall(s, 'fame', 'city', 'kickboxing', 5);
                                  scene.text('<center><b>Ana</b></center>');
                                  scene.img('images/characters/city/ana/analose.jpg');
                                  scene.text('Dodging that strange mist, you rain strike after strike against Ana, until you appreciate some strange changes… her clothes seem to win a <i>bloody</i> texture, and her skin a ghastly pale tone… before suddenly collapsing… a pool of blood forming quickly under her.');
                                  scene.text('"Ouch! Ouch! Woah Sexy! You are a baddas witch!"');
                                  scene.text('"Ehh! What the fuck is happening to you?!"');
                                  scene.text('You don\'t know what exactly are perceiving the mundane people around you, but by the sound, they no longer think that this is some kind of <i>performance</i>.');
                                  scene.text('"Stop you two right there!"');
                                  scene.text('Groaning, you turn to look four pissed off policemen walking towards you, it\'s evident, that they come to end the brawl.');
                                  scene.text('"Nope! Bye, Sexy! Beep Beep!"');
                                  scene.text('Ana then jumps up and runs towards the traffic.');
                                  qspCall(s, 'willpower', 'crime', 'self', 'easy');
                                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                    scene.actions([
                                      { label: 'Run!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                    ]);
                                  } else {
                                    scene.actions([
                                      { label: 'Run!', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) + (1);
    (st as any).dummy = (Math.floor(Math.random() * 100) + 1);
    qspCall(st, 'stat', '');
    if (((st as any).dummy ?? 0) <= ((st as any).pcs_run ?? 0)) {
      qspGoto(st, 'alexandriaEv', 'anachase3');
    } else {
      if (((st as any).dummy ?? 0) >= ((st as any).pcs_run ?? 0)  &&  ((st as any).dummy ?? 0) >= 90) {
        qspGoto(st, 'alexandriaEv', 'anacrash1');
      } else {
        qspGoto(st, 'alexandriaEv', 'anachase4');
      }
    }
  } },
                                    ]);
                                  }
                                  scene.actions([
                                    { label: 'Go to jail', goto: ['alexandriaEv', 'jail'] },
                                  ]);
                                } else {
                                  if (((s as any).fightEnding ?? 0) === 19) {
                                    (s as any).fightEnding = 0;
                                    (s as any).Win = ((s as any).Win ?? 0) + (1);
                                    qspCall(s, 'mood', 'raise', 'small');
                                    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
                                    qspCall(s, 'fame', 'city', 'kickboxing', 5);
                                    scene.img('images/characters/city/ana/action.jpg');
                                    scene.text('Around you, in the ground, the poor Gopniks groan in pain, as you the unknow miscreant, that has entered illegally into their home, show herself unbeatable. Probably there is a lesson in that, but you can\'t lose your time in philosophical questions, so… after taking some seconds to fix your appearance, you exit the apartment towards the building\'s stairs, just to saw Ana one floor lower.');
                                    scene.text('"Yeah Sexy! Unnecessary violence triumph again!"');
                                    scene.text('Trying to reach before the end of her tirade, you jump down the stairs, making Ana scream and scramble down the building towards the street, where she again dance between the coming cars to cross towards a multistory car park.');
                                    scene.actions([
                                      { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
                                    ]);
                                  } else {
                                    if (((s as any).fightEnding ?? 0) === 20) {
                                      (s as any).fightEnding = 0;
                                      (s as any).Win = ((s as any).Win ?? 0) + (1);
                                      qspCall(s, 'mood', 'raise', 'medium');
                                      (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (2);
                                      scene.text('<center><b>Ana</b></center>');
                                      scene.img('images/characters/city/ana/analose.jpg');
                                      scene.text('With a painfully loud "Blam" You manage to throw Ana to the ground, where she coughs in pain.');
                                      scene.text('"Ouch! <i>Mierda! Sexy eso duele!</i>"');
                                      scene.text('Ana look up at you from the ground… her clothes seem to win a <i>bloody</i> texture, and her skin a ghastly pale tone… There is this movement under her skin, like something is crawling beneath it… a pool of blood forming quickly under her and… there! The key! But… now that you can examine it, not the sort used on security boxes.');
                                      scene.text('"Ok Sexy! You win! I will explain! But give me a moment!"');
                                      scene.text('Slowly, Ana\'s appearance return to what passes for <i>healthy</i>, and she rises from the ground.');
                                      scene.text('"Look sexy, I don\'t have the key, but if you come with me, I will tell you where is the sword! Ehm… Girl Scout Word!"');
                                      scene.text('Ana pout, giving puppy eyes, as she raises a hand in the three-finger salute.');
                                      scene.actions([
                                        { label: 'Go with the loonie', goto: ['alexandriaEv', 'anamotel'] },
                                      ]);
                                    } else {
                                      if (((s as any).fightEnding ?? 0) === 21) {
                                        (s as any).fightEnding = 0;
                                        (s as any).Win = ((s as any).Win ?? 0) + (1);
                                        qspCall(s, 'mood', 'raise', 'medium');
                                        qspGoto(s, 'gopnew', 'fight_win');
                                      } else {
                                        if (((s as any).fightEnding ?? 0) === 22) {
                                          (s as any).Win = ((s as any).Win ?? 0) + (1);
                                          qspCall(s, 'mood', 'raise', 'medium');
                                          (s as any).fightEnding = 0;
                                          scene.img('images/locations/pavlovsk/school/bathroom/girlsbathroom.jpg');
                                          scene.text('Being the weaker fighter, Lera quickly falls to the ground and is down for the count. You ignore her as Lena wipes her bloodied nose and spits on the floor. "Oh, it\'s fucking on now bitch! You\'re gonna regret every last second when I\'m done with you!"');
                                          scene.text('"You keep talking tough, but I\'ll be done with your weak ass before the bell rings," you reply, unimpressed. You keep throwing punches at each other until you see an opening and punch Lena hard in the gut, winding her and sending her to the floor in a crumpled heap.');
                                          scene.text('Satisfied with your victory, you walk up to the sinks and clean yourself up as the two gopniks lie on the floor, groaning in pain. You straighten up your clothes and prepare to leave, but as you turn to the door, Lena grabs your ankle. "You better watch your back, bitch! Vitek will hear about this and he\'ll fucking kill you!"');
                                          scene.text('You shake her off, but her words replay in your head as you walk out the door. The gopniks, Vitek least of all, aren\'t going to let your actions here go unpunished…');
                                          scene.actions([
                                            { label: 'Go to class', handler: (st: GameState) => {
    qspCall(st, 'gschool_lessons', '');
  } },
                                          ]);
                                        } else {
                                          if (((s as any).fightEnding ?? 0) === 23) {
                                            (s as any).fightEnding = 0;
                                            (s as any).Win = ((s as any).Win ?? 0) + (1);
                                            qspCall(s, 'mood', 'raise', 'medium');
                                            qspGoto(s, 'rape_events', 'fight_win');
                                          } else {
                                            if (((s as any).fightEnding ?? 0) === 24) {
                                              (s as any).fightEnding = 0;
                                              (s as any).Win = ((s as any).Win ?? 0) + (1);
                                              qspCall(s, 'mood', 'raise', 'medium');
                                              if (((s as any).pcs_health ?? 0) < 40) {
                                                qspGoto(s, 'gopnik_fight_night', 'barely_win');
                                              } else {
                                                qspGoto(s, 'gopnik_fight_night', 'easily_win');
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
  // TODO-QSP: end
  scene.build();
}

function enterSurrender(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nill', '');
  if (((s as any).fightEnding ?? 0) === 1) {
    if (((s as any).pcs_health ?? 0) < 100) {
      (s as any).pcs_health = 100;
    }
    (s as any).fightEnding = 0;
    scene.text('He ignores your pleas and hits you with a huge upper cut.');
    scene.text('You fall to the floor and feel your consciousness slipping away.');
    scene.actions([
{ label: 'Further', goto: ['intro_start', 'tg_adult_shared', '3'] },
]);
    return;
  } else {
    if (((s as any).fightEnding ?? 0) === 2) {
      if (((s as any).pcs_health ?? 0) < 100) {
        (s as any).pcs_health = 100;
      }
      (s as any).fightEnding = 0;
      scene.text('You raise your hands asking Gustav to stop. He complains that he hasn\'t even warmed up yet, but stops the fight.');
      scene.actions([
{ label: 'Further', goto: ['tatiana_lab', 'start'] },
]);
      return;
    } else {
      if (((s as any).fightEnding ?? 0) === 3) {
        if (((s as any).pcs_health ?? 0) < 100) {
          (s as any).pcs_health = 100;
        }
        (s as any).fightEnding = 0;
        scene.text('You tell Tatiana you\'ve had enough. She shakes her head and tells you you need to toughen up.');
        scene.actions([
{ label: 'Further', goto: ['tatiana_lab', 'start'] },
]);
        return;
      } else {
        if (((s as any).fightEnding ?? 0) === 4) {
          (s as any).fightEnding = 0;
          qspCall(s, 'money', 'set', 0);
          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
          if (((s as any).rikudo ?? 0) > 10) {
            (s as any).rikudo = ((s as any).rikudo ?? 0) - 10;
          }
          scene.img('images/shared/sex/dom/spit.jpg');
          if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
            scene.text('Just the mere thought of a fight, your knees go weak and you feel yourself being out of breath. Before even the first punch is thrown you raise up your hands and squeak out in fear. "Don\'t hurt me, I give up."');
            scene.text('The prostitute grabs your bag and takes all your cash.');
            scene.text('"Now fuck off, bitch!"');
          } else {
            if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
              scene.text('You are already feeling the pain of the blows, you can\'t take it anymore. You throw up your hands in surrender. "Please stop! I give up."');
              scene.text('The prostitute grabs your bag and takes all your cash.');
              scene.text('"Now fuck off, bitch!"');
            } else {
              scene.text('You thought this would be an easy win, but you were mistaken. Blow after blow rains down on you, you are so dazed you can barely see. You stumble and fall to the ground and decide to just stay there. "I give up, I can\'t beat you."');
              scene.text('The prostitute grabs your bag and takes all your cash.');
              scene.text('"Now fuck off, bitch!"');
            }
          }
          if (((s as any).pcs_health ?? 0) < 100) {
            (s as any).pcs_health = 100;
          }
          scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
          return;
        } else {
          if (((s as any).fightEnding ?? 0) === 5) {
            if (((s as any).pcs_health ?? 0) < 100) {
              (s as any).pcs_health = 100;
            }
            (s as any).fightEnding = 0;
            qspCall(s, 'money', 'set', 0, 'cash');
            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
            (s as any).bandfight = ((s as any).bandfight ?? 0) - 1;
            scene.img('images/locations/city/centralpark/sex/event/band.jpg');
            scene.text('The pimp lights a cigarette while rummaging through your stuff. He finally finds what he\'s been looking for - all of your money. "Open your mouth slut." he orders.');
            scene.text('You obey and open your mouth. He sighs as he taps ash into your mouth. "I hope you\'ve learned a valuable lesson slut. I won\'t be this kind next time."');
            scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
            return;
          } else {
            if (((s as any).fightEnding ?? 0) === 6) {
              (s as any).fightEnding = 0;
              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
              (s as any).stellfight = ((s as any).stellfight ?? 0) - 1;
              scene.img('images/characters/city/ira/sex/irinaqw7.jpg');
              if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
                scene.text('Just as the fight is about to begin, you realize that you don\'t want any part of it. Your opponent is nearing you which has you yelling "We don\'t need to fight. I\'m giving up already!"');
              } else {
                if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
                  scene.text('You thought you were going to win but now you know better, your opponent is just a better fighter than you. Rather than take more of a beating before losing, you decide discretion is the better part of valor. "You win, I can\'t beat you."');
                } else {
                  scene.text('The pain from the blows are more than you can bear and you feel tears streaming down your face. You drop to your knees and cower before your opponent. "Please stop!" you beg, but in their frezied state they just shove you, causing you to fall to the ground.');
                  scene.text('Awaiting your fate, you just lay prostrate before your opponent, showing you have no fighting spirit left, hoping they\'ll stop hurting you.');
                }
              }
              scene.text('"This won\'t do." she says as you\'re ordered to kneel. She pulls her panties to the side as she sits on your face, forcing you to lick her semen filled pussy.');
              scene.text('Afraid of getting beaten again, you carefully lick her crotch clean. After a few minutes she\'s satisfied and leaves.');
              if (((s as any).pcs_health ?? 0) < 100) {
                (s as any).pcs_health = 100;
              }
              qspCall(s, 'arousal', 'cuni_give', 10, 'sub', 'prostitution');
              qspCall(s, 'arousal', 'end');
              scene.actions([
{ label: 'Further', goto: ['city_park', 'start'] },
]);
              return;
            } else {
              if (((s as any).fightEnding ?? 0) === 7) {
              } else {
                if (((s as any).fightEnding ?? 0) === 8) {
                  if (((s as any).pcs_health ?? 0) < 100) {
                    (s as any).pcs_health = 100;
                  }
                  if (qspFunc(s, 'succubus', 'active', 4)) {
                    qspGoto(s, 'succubus', 'RapistFight');
                  }
                  (s as any).fightEnding = 0;
                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                  if (((s as any).rikudo ?? 0) > 10) {
                    (s as any).rikudo = ((s as any).rikudo ?? 0) - (10);
                  }
                  if (((s as any).loc ?? 0) === 'pav_park'  ||  ((s as any).loc ?? 0) === 'city_park') {
                    qspGoto(s, 'rape_events', 'park_rape_solo');
                  } else {
                    if (((s as any).region ?? 0) === 'pav'  ||  ((s as any).region ?? 0) === 'city') {
                      qspGoto(s, 'rape_events', 'urban_fight_rape');
                    }
                  }
                } else {
                  if (((s as any).fightEnding ?? 0) === 9) {
                    if (((s as any).pcs_health ?? 0) < 100) {
                      (s as any).pcs_health = 100;
                    }
                    (s as any).fightEnding = 0;
                    (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                    // TODO-QSP: money /= 4
                    qspCall(s, 'stat', '');
                    if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
                      scene.text('Your opponent\'s demeanour is making you worried. They seem to have the upper hand and you start doubting yourself. Your opponent starts running towards you, but before they strike you start yelling "I give up! I give up!"');
                    } else {
                      if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
                        scene.text('You thought you were going to win but now you know better, your opponent is just a better fighter than you. Rather than take more of a beating before losing, you decide discretion is the better part of valor. "You win, I can\'t beat you."');
                      } else {
                        scene.text('Your opponent is landing hit after hit and is superior. You\'re meekly standing there taking every punch thrown at you. Before you know it, you\'re laying on the floor not wanting to get up even though you hear your opponent yelling that they\'re not done yet. You raise your arm and shake it, signaling that you\'ve had enough and are giving up.');
                      }
                    }
                    scene.text('He snatches your purse and rifles through it. After a few seconds, he decides to leave you some of the cash, tossing it on the ground with your purse and running away.');
                    scene.actions([
{ label: 'Get back on your feet', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
]);
                    return;
                  } else {
                    if (((s as any).fightEnding ?? 0) === 10) {
                      (s as any).fightEnding = 0;
                      ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (2);
                      if (((s as any).Loss ?? 0) < 0) {
                        (s as any).Loss = 0;
                      }
                      scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlbeatsguy2.jpg');
                      if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
                        // TODO-QSP: dynamic text: What the fuck <<$pcs_nickname>>?" Lera asks in an annoyed tone before sweeping D...
                        scene.text(`What the fuck ${((s as any).pcs_nickname ?? '')}?" Lera asks in an annoyed tone before sweeping Dimka's legs out from under him. Lena and Lera proceed to kick and stomp Dimka until he starts begging them to stop.`);
                        // TODO-QSP: dynamic text: After a few more hits, they get bored and check his pockets for cash. "<<$func('...
                        scene.text(`After a few more hits, they get bored and check his pockets for cash. "${qspFunc(s, 'money', 'format', 10000)}?! Sweet!" They split the money among themselves, leaving none for you.`);
                        scene.text('Lena turns to you and tauntingly says "You either need to learn how to fight or get used to serving us, little bunny." Before you can say anything, the bell rings for class.');
                      } else {
                        if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
                          // TODO-QSP: dynamic text: "That was pathetic <<$pcs_nickname>>." Lera states in shock before sweeping Dimk...
                          scene.text(`"That was pathetic ${((s as any).pcs_nickname ?? '')}." Lera states in shock before sweeping Dimka's legs out from under him. Lena and Lera proceed to kick and stomp Dimka until he starts begging them to stop.`);
                          // TODO-QSP: dynamic text: After a few more hits, they get bored and check his pockets for cash. "<<$func('...
                          scene.text(`After a few more hits, they get bored and check his pockets for cash. "${qspFunc(s, 'money', 'format', 10000)}?! Sweet!" They split the money among themselves, leaving none for you.`);
                          scene.text('Lena turns to you and tauntingly says "You either need to learn how to fight or get used to serving us, little bunny." Before you can say anything, the bell rings for class.');
                        } else {
                          // TODO-QSP: dynamic text: "Where the hell did you learn how to fight <<$pcs_nickname>>?" Lera asks in an a...
                          scene.text(`"Where the hell did you learn how to fight ${((s as any).pcs_nickname ?? '')}?" Lera asks in an annoyed tone before sweeping Dimka's legs out from under him. Lena and Lera proceed to kick and stomp Dimka until he starts begging them to stop.`);
                          // TODO-QSP: dynamic text: After a few more hits, they get bored and check his pockets for cash. "<<$func('...
                          scene.text(`After a few more hits, they get bored and check his pockets for cash. "${qspFunc(s, 'money', 'format', 10000)}?! Sweet!" They split the money among themselves, leaving none for you.`);
                          scene.text('Lena turns to you and tauntingly says "You either need to learn how to fight or get used to serving us, little bunny." Before you can say anything, the bell rings for class.');
                        }
                      }
                      if (((s as any).pcs_health ?? 0) < 100) {
                        (s as any).pcs_health = 100;
                      }
                      scene.actions([
                        { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
                      ]);
                    } else {
                      if (((s as any).fightEnding ?? 0) === 11) {
                        if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                          (s as any).pcs_health = 100;
                        }
                        (s as any).fightEnding = 0;
                        (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                        scene.text('They are very drunk and one of them shouts "Loser has to fuck us all!".');
                        scene.text('Laughing at first, but soon getting very serious they strip you naked and push you to the floor.');
                        scene.actions([
                          { label: 'Cry', goto: ['sexm', 'gangbang'] },
                        ]);
                      } else {
                        if (((s as any).fightEnding ?? 0) === 12) {
                          (s as any).fightEnding = 0;
                          ((s as any).christinaQW = (s as any).christinaQW ?? {})['fight'] = (-1);
                          ((s as any).christinaQW = (s as any).christinaQW ?? {})['pre_fight'] = 0;
                          ((s as any).christinaQW = (s as any).christinaQW ?? {})['subpath'] = 2;
                          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                          (s as any).minut = ((s as any).minut ?? 0) + 10;
                          qspCall(s, 'stat', '');
                          scene.img('images/shared/sex/dom/spit.jpg');
                          if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
                            scene.text('Just the mere thought of a fight, your knees go weak and you feel yourself being out of breath. Before even the first punch is thrown you raise up your hands and squeak out in fear. "Don\'t hurt me, I give up."');
                          } else {
                            if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
                              scene.text('A hard blow to your face stuns you for a moment and you can feel blood running from your nose. Panic sets in as you fear getting your face messed up and you say "You win, just stopping hitting me!"');
                            } else {
                              scene.text('You feel bruised and beaten by Christina. She is hitting you everywhere and you\'re barely able to defend yourself. All of a sudden you lose your footing and land on your ass. Right there you decide that it\'s not worth fighting on. "I give up…" you barely find the strength to whisper…');
                            }
                          }
                          scene.text('Christina laughs a cruel laugh, knowing she has won. "Now I\'ll make your life hell, slut! Open your mouth and stick your tongue out, bitch."');
                          scene.text('You comply and open your mouth with your tongue out. Without any hesitation, Christina spits in your mouth and yells "Swallow, bitch!" The whole school watches as you swallow her spit.');
                          scene.text('"I own you now, bitch." Spitting on your face one more time, she turns and walks away, looking pleased with herself.');
                          scene.text('You stagger to your feet, tears and spit streaking your face, angry at yourself for giving up.');
                          if (((s as any).pcs_health ?? 0) < 100) {
                            (s as any).pcs_health = 100;
                          }
                          scene.actions([
                            { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'gschool_grounds', '');
  } },
                          ]);
                        } else {
                          if (((s as any).fightEnding ?? 0) === 13) {
                            if (((s as any).pcs_health ?? 0) < 100) {
                              (s as any).pcs_health = 100;
                            }
                            (s as any).fightEnding = 0;
                            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                            scene.text('The naked man laughs and advances toward you.');
                            scene.actions([
                              { label: 'Lose', goto: ['stallion', 'rape'] },
                            ]);
                          } else {
                            if (((s as any).fightEnding ?? 0) === 14) {
                              (s as any).fightEnding = 0;
                              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                              qspCall(s, 'pain', '5', 'hair', 'stretch');
                              // TODO-QSP: $streetev_title
                              scene.img('images/locations/shared/street/lostfight.jpg');
                              if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
                                scene.text('Just the mere thought of a fight, your knees go weak and you feel yourself being out of breath. Before even the first punch is thrown you raise up your hands and squeak out in fear. "Don\'t hurt me, I give up."');
                                scene.text('There is just too many of them. "We don\'t need to fight. I\'m giving up already!" you yell.');
                                scene.text('They circle around you, pulling at your hair and calling you names before one of them spits in your face. After that they lose interest and wander off.');
                              } else {
                                if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
                                  scene.text('You are already feeling the pain of the blows and you can\'t take it anymore. You throw up your hands in surrender. "Please stop! I give up."');
                                  scene.text('They circle around you, pulling at your hair and calling you names before one of them spits in your face. After that they lose interest and wander off.');
                                } else {
                                  scene.text('You thought this would be an easy win, but you were mistaken. Blow after blow rains down on you and you are so dazed you can barely see. You stumble and fall to the ground and decide to just stay there. "I give up, I can\'t beat you."');
                                  scene.text('They circle around you, pulling at your hair and calling you names before one of them spits in your face. After that they lose interest and wander off.');
                                }
                              }
                              scene.text('With tears welling up you compose yourself as best as you can and gingerly walk away.');
                              if (((s as any).pcs_health ?? 0) < 100) {
                                (s as any).pcs_health = 100;
                              }
                              scene.actions([
                                { label: 'Leave', handler: (st: GameState) => {
    (st as any).streetrand = (-1);
    dynamicGoto(st, 'prevLoc');
  } },
                              ]);
                            } else {
                              if (((s as any).fightEnding ?? 0) === 15) {
                                if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                  (s as any).pcs_health = 100;
                                }
                                (s as any).fightEnding = 0;
                                (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                ((s as any).slyQW = (s as any).slyQW ?? {})['fight'] = (-1);
                                qspCall(s, 'mood', 'lower', 'large');
                                qspCall(s, 'pain', '5', 'cheeks', 'hit');
                                qspCall(s, 'stat', '');
                                scene.img('images/characters/shared/headshots_main/big248.jpg');
                                scene.text('You know he isn\'t that tough, but somehow he just keeps getting lucky blows in. After a solid punch knocks you off your feet, you just lay there, dazed and completely done resisting.');
                                scene.actions([
                                  { label: 'Give up', goto: ['Zvereva_Sly', 'loss'] },
                                ]);
                              } else {
                                if (((s as any).fightEnding ?? 0) === 16) {
                                  if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                    (s as any).pcs_health = 100;
                                  }
                                  (s as any).fightEnding = 0;
                                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[1] = ((s as any).grupvalue[1] ?? 0) - (10);
                                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[2] = ((s as any).grupvalue[2] ?? 0) - (5);
                                  ((s as any).grupvalue = (s as any).grupvalue ?? {})[4] = ((s as any).grupvalue[4] ?? 0) - (5);
                                  qspCall(s, 'mood', 'lower', 'medium');
                                  scene.img('images/locations/shared/street/girlgang.jpg');
                                  scene.text('Oh shit! This was obviously a bad idea, and the girls surrounding you with murder in their eyes are more than willing to show you your error, so… you retreat and lift your hands in defeat, waiting for some mercy…');
                                  scene.text('"You will piss blood bitch!"');
                                  scene.text('Suddenly, a screaming Vanya runs towards the bitch squad and sweeps their legs with his hockey stick, causing them fall and letting the twins grab your hands and take you away from the brawl turned riot."');
                                  // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I don''t know what to do with you! What were you thinking?!"
                                  scene.text(`"${((s as any).pcs_nickname ?? '')}! I don't know what to do with you! What were you thinking?!"`);
                                  scene.text('Katja is really, really pissed and for a long while, she chastizes your actions, but finally, after a long-winded tirade, the redhead seems to deflate and gives you a tired hug.');
                                  scene.text('"Please! Don\'t do that again!"');
                                  scene.text('It feels nice and makes Vanya & Vicky spell a sonorous "Kawai!" before quickly turning back and running away from an embarrassed/angry Katja. It was "fun", but it is time to look for something else to do.');
                                  scene.actions([
                                    { label: 'Continue', goto: ['katjaEV', 'kathan'] },
                                  ]);
                                } else {
                                  if (((s as any).fightEnding ?? 0) === 17) {
                                    (s as any).fightEnding = 0;
                                    (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                    (s as any).AlexandriaQW = 5;
                                    qspCall(s, 'mood', 'lower', 'huge');
                                    scene.text('<center><b>????</b></center>');
                                    scene.img('images/characters/city/alexandria/alexandria.jpg');
                                    scene.text('As a mighty cramp paralyzes your body, you find yourself sitting back in the prop\'s room, your bitch nowhere to be found. In her place is a tall blonde in a suit, who is giving you the once-over.');
                                    scene.text('"I admit that I was expecting another of Rikudo\'s victims. For a moment, even I was tricked into thinking that you were… better."');
                                    scene.text('Groaning, you try to make sense of the situation, and look for Tatiana\'s film. It is now in the woman\'s hand. She glances at it nonchalantly, before pocketing the trinket and looking at you with a frustrated sigh.');
                                    scene.text('"It\'s evident that you can\'t handle her, so it would be better for a more experienced magician to take care of this anomaly."');
                                    scene.text('You finally manage to stand on shaky legs, and give her a good look. She isn\'t a Succubus, but she is old and powerful. That means two things. First, you will be hard-pressed to take the film from her grasp, and second, she must be an incredible tasty lay!');
                                    scene.text('"Who… Who are you?"');
                                    scene.text('She sneers and says, "I suppose this is time for a presentation. You can call me Aleksei, and you are?"');
                                    scene.actions([
                                      { label: '"I am…"', handler: (st: GameState) => {
    (st as any).intel_lvlst = ((st as any).intel_lvlst ?? 0) - (20);
  }, goto: ['tatiana_missions', 'mission2D'] },
                                    ]);
                                  } else {
                                    if (((s as any).fightEnding ?? 0) === 18) {
                                      (s as any).fightEnding = 0;
                                      (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                      qspCall(s, 'mood', 'lower', 'medium');
                                      scene.text('<center><b>Ana</b></center>');
                                      scene.img('images/characters/city/ana/action.jpg');
                                      scene.text('You retreat scared, raising hands, pointing out that you give up.');
                                      scene.text('"Hm?! Come on Sexy! You are supposed to be a badass witch!"');
                                      scene.text('"What?! Are you crazy?! That mist cut like knives!"');
                                      scene.text('You don\'t know what exactly are perceiving the mundane people around you, but by the sound, they no longer think that this is some kind of <i>performance</i>.');
                                      scene.text('"Stop you two right there!"');
                                      scene.text('Groaning, you turn to look four pissed off policemen walking towards you, it\'s evident, that they come to end the brawl.');
                                      scene.text('"Nope! Bye, Sexy! Beep Beep!"');
                                      scene.text('Ana then turns and runs towards the traffic.');
                                      qspCall(s, 'willpower', 'crime', 'self', 'medium');
                                      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                                        scene.actions([
                                          { label: 'Run!', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                        ]);
                                      } else {
                                        scene.actions([
                                          { label: 'Run!', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) + (1);
    (st as any).dummy = (Math.floor(Math.random() * 100) + 1);
    qspCall(st, 'stat', '');
    if (((st as any).dummy ?? 0) <= ((st as any).pcs_run ?? 0)) {
      qspGoto(st, 'alexandriaEv', 'anachase3');
    } else {
      if (((st as any).dummy ?? 0) >= ((st as any).pcs_run ?? 0)  &&  ((st as any).dummy ?? 0) >= 90) {
        qspGoto(st, 'alexandriaEv', 'anacrash1');
      } else {
        qspGoto(st, 'alexandriaEv', 'anachase4');
      }
    }
  } },
                                        ]);
                                      }
                                      scene.actions([
                                        { label: 'Go to jail', goto: ['alexandriaEv', 'jail'] },
                                      ]);
                                    } else {
                                      if (((s as any).fightEnding ?? 0) === 19) {
                                        if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                          (s as any).pcs_health = 100;
                                        }
                                        (s as any).fightEnding = 0;
                                        (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                        qspCall(s, 'mood', 'lower', 'medium');
                                        scene.img('images/characters/city/ana/gopniks.jpg');
                                        scene.text('"Ok! Stop! You win! I surrender!"');
                                        scene.text('You raise your hands over your head, with the double intent, to protect it, and signal your surrendering, but it seems that the furious Gopniks, don\'t receive the message and some more slaps reach to you, before somebody trow your body to a nearby sofa.');
                                        scene.text('"What the fuck?! You bitch begin this and don\'t have the ovaries to end it? Fuck you! You are going to pay."');
                                        scene.text('You half-lie there, trembling surrounding by very angry Gopniks… alone… in their apartment… with nobody knowing where you are… What things will they have planned?');
                                        scene.text('"Somebody calls the police! This bitch is going to be their problem now!"');
                                        scene.text('What? You didn\'t expected that! But you will not deny that it\'s a relief, so… now it seems that you must answer to the police.');
                                        scene.actions([
                                          { label: 'Go to jail', goto: ['alexandriaEv', 'jail'] },
                                          { label: 'Quick! Bribe them!', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 30000, 'cash') === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      (st as any).minut = ((st as any).minut ?? 0) + 10;
      qspCall(st, 'money', 'pay', 30000, 'cash');
      (st as any).AlexandriaMissionQW = ((st as any).AlexandriaMissionQW ?? 0) + (1);
      qspCall(st, 'stat', '');
      scene.img('images/characters/city/ana/gopniks.jpg');
      scene.text('"Hey guys! There is no need to involve the police! I learned the lesson! Let me show you!"');
      scene.text('The gang look at you, with murder in their eyes. Your presence is barely tolerated and is evident that some of them want to do more than just call the police, but before they can backtalk, you rise, take away your wallet and pull a roll of billets on the nearer.');
      scene.text('"Ok guys… I am sorry… I learned the lesson, and I think we can leave the police out of this… OK?."');
      scene.text('The Gopnikcs are speechless, their mouths are frozen on whatever shit they were gonna say. Then begin to scramble to take the money.');
      scene.text('"Fuck! Where is the nearest shop! Shit! Take my car! Ouch! You stepped on my son-of-a-bitch!"');
      scene.text('You somehow dance between the frantic fans, and exit the apartment towards the building\'s stairs, just to saw Ana one floor lower.');
      scene.text('"Hey Sexy! I was expecting something with more… well, blood and teeth… but I guess if it works…"');
      scene.text('Trying to reach before the end of her tirade, you jump down the stairs, making Ana scream and scramble down the building towards the street, where she again dance between the coming cars to cross towards a multistory car park.');
      scene.actions([
        { label: 'Follow her', goto: ['alexandriaEv', 'anachasefinal'] },
      ]);
    }
  } },
                                        ]);
                                      } else {
                                        if (((s as any).fightEnding ?? 0) === 20) {
                                          (s as any).fightEnding = 0;
                                          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                          qspCall(s, 'mood', 'lower', 'medium');
                                          scene.text('<center><b>Ana</b></center>');
                                          scene.img('images/characters/city/ana/ana4.jpg');
                                          scene.text('Ana look confused as you raise your hands in a defeated gesture.');
                                          scene.text('"What?! Look Ana, I surrender! That mist cut like knives!"');
                                          scene.text('The <i>mistblade</i> disperse, and Ana stands there, looking at you motionless. You can\'t even perceive her breathing, the vision utterly unearthly.');
                                          scene.text('"Ok? But, are you sure after all of this effort? After the scene in the courtroom? Because…"');
                                          scene.text('She stops midsentence and turns her head slightly like she was listening to something, before turning again towards you.');
                                          scene.text('"Ok… Ehm… Then… Until later!"');
                                          scene.text('Then she retreats, carefully eyeing you, until her back is against a just arriving black SUV, then, she jumps inside and drives away.');
                                          scene.actions([
                                            { label: 'Leave', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
                                          ]);
                                        } else {
                                          if (((s as any).fightEnding ?? 0) === 21) {
                                            (s as any).fightEnding = 0;
                                            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                            qspCall(s, 'mood', 'lower', 'medium');
                                            qspGoto(s, 'gopnew', 'fight_lost');
                                          } else {
                                            if (((s as any).fightEnding ?? 0) === 22) {
                                              (s as any).fightEnding = 0;
                                              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                              (s as any).pcs_hairbsh = 0;
                                              if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
                                                (s as any).pcs_makeup = 0;
                                              }
                                              (s as any).minut = ((s as any).minut ?? 0) + 10;
                                              qspCall(s, 'stat', '');
                                              scene.img('images/locations/pavlovsk/school/bathroom/swirlygb.jpg');
                                              if (((s as any).fightPStats ?? 0)?.['Health'] === ((s as any).pcs_health ?? 0)) {
                                                scene.text('Before the first punch is even thrown, you throw up your hands in surrender.');
                                                scene.text('"Don\'t hurt me, I give up!" you squeak out in fear, but Lena ignores your pleas and punches you hard in the gut, almost causing you to throw up as you collapse to the floor in pain.');
                                                scene.text('"You\'re fucking pathetic! You deserve what\'s coming next for being such a fucking wimp!"');
                                              } else {
                                                if (((s as any).fightPStats ?? 0)?.['Health'] > ((s as any).pcs_health ?? 0)/2) {
                                                  scene.text('You immediately feel blood running from your nose when Lena jabs you in the face, causing you to panic.');
                                                  scene.text('"You win, you win! Just don\'t hit me again! Please!" you plead and Lena laughs.');
                                                  scene.text('"Looks like our little bunny isn\'t as tough as she likes to think. Maybe she needs to learn from her mistake?" she says and the two gopniks smile at you cruelly.');
                                                } else {
                                                  scene.text('You\'re barely able to defend yourself from the dirty tactics the two gopniks employ. Dodging one of Lena\'s blows causes you to stumble; they catch you, only to then throw you towards the sinks. You\'re winded and collapse on the floor when you hit your stomach off the edge of one of the sinks.');
                                                  scene.text('"I- I give up…" you whisper while trying not to throw up.');
                                                }
                                              }
                                              scene.text('Lera heads into one of the stalls as Lena pins you to the floor by pressing her knee into your back, causing you to cry out in pain. "Not so tough now, are you bitch?" she smirks.');
                                              scene.text('Lera returns a few seconds later and you loudly protest as they haul you into a stall and lean you over the toilet. The smell hits you immediately - the bowl is full of urine, likely Lera\'s. You know exactly what they\'re going to do and grip the toilet seat firmly to stop them, but they pull you back and Lena punches you in the gut before they pin your arms behind your back and push you back down.');
                                              scene.text('They laugh loudly as they dunk your head into the foul water multiple times before holding you under and flushing, your lungs burning as water rushes up your nose. When they pull you up and finally let you go, you cough up water before spluttering and gasping for air.');
                                              scene.text('Satisfied, the two leave you in the stall, but not before Lena spits on you. "Know your place next time, bitch!"');
                                              scene.text('Dazed and struggling to catch your breath, all you can do is lean against the toilet.');
                                              scene.text('After a few minutes, you gather what little strength you have and stagger out of the stall to look at yourself in the mirror. Blood trickles from your nose and you can taste it in your mouth. You wring out your soaked hair and clean yourself up, but are in no shape to go to your next class, so you decide to stay hidden in the stalls where you hope nobody will find you.');
                                              scene.actions([
                                                { label: 'Continue', goto: ['gschool_girls_bathroom', 'bathroom3'] },
                                              ]);
                                            } else {
                                              if (((s as any).fightEnding ?? 0) === 23) {
                                                (s as any).fightEnding = 0;
                                                (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                                qspCall(s, 'mood', 'lower', 'large');
                                                qspGoto(s, 'rape_events', 'park_gangrape_fight_surrender');
                                              } else {
                                                if (((s as any).fightEnding ?? 0) === 24) {
                                                  (s as any).fightEnding = 0;
                                                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                                  qspCall(s, 'stat', '');
                                                  qspGoto(s, 'gopnik_fight_night', 'surrender');
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
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'loss':
      enterLoss(s, scene);
      break;
    case 'win':
      enterWin(s, scene);
      break;
    case 'surrender':
      enterSurrender(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const ender: LocationDef = {
  name: 'ender',
  title: '????',
  region: 'other',
  enter: enter,
};
