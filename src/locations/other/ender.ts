import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'nill', '');
  if (((s as any).fightEnding ?? 0) === 1) {
    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
      (s as any).pcs_health = 100;
    }
    (s as any).fightEnding = 0;
    scene.text('You fall to the floor and feel your consciousness slipping away.');
    return;
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'intro_start', 'tg_adult_shared', 3
  } },
    ]);
  } else {
    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
      (s as any).pcs_health = 100;
    }
    (s as any).fightEnding = 0;
    scene.text('You fall to the floor as you\'re not longer able to fight Gustav.');
    return;
    if (((s as any).fightEnding ?? 0) === 3) {
      if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
        (s as any).pcs_health = 100;
      }
      (s as any).fightEnding = 0;
      scene.text('You fall to the floor as you\'re not longer able to fight Tatiana.');
      return;
      scene.actions([
        { label: 'Further', goto: ['tatiana_lab', 'start'] },
      ]);
    } else {
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
      return;
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
        return;
        scene.actions([
          { label: 'Further', goto: ['city_park', 'start'] },
        ]);
      } else {
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
        return;
        if (((s as any).fightEnding ?? 0) === 7) {
        } else {
          if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
            (s as any).pcs_health = 100;
          }
          if (qspFunc(s, 'succubus', 'active', 4)) {
            scene.actions([{ label: 'Continue', goto: ['succubus', 'RapistFight'] }]);
          }
          (s as any).fightEnding = 0;
          (s as any).Loss = ((s as any).Loss ?? 0) + (1);
          if (((s as any).rikudo ?? 0) > 10) {
            (s as any).rikudo = ((s as any).rikudo ?? 0) - (10);
          }
          if (((s as any).loc ?? 0) === 'pav_park'  ||  ((s as any).loc ?? 0) === 'city_park') {
            scene.actions([{ label: 'Continue', goto: ['rape_events', 'park_rape_solo'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['rape_events', 'urban_fight_rape'] }]);
          }
          if (((s as any).fightEnding ?? 0) === 9) {
            if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
              (s as any).pcs_health = 100;
            }
            (s as any).fightEnding = 0;
            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
            if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 1) {
              (s as any).temp_thresh = 0;
            } else {
              (s as any).temp_thresh = 3;
              if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 2) {
                (s as any).temp_thresh = 1;
              } else {
                (s as any).temp_thresh = 5;
                if (((s as any).cheatVars ?? 0)?.['abduction_chance'] === 4) {
                  (s as any).temp_thresh = 8;
                }
                if ((Math.floor(Math.random() * 80) + 1) <= ((s as any).temp_thresh ?? 0)) {
                  scene.text('Your assailant knocks you down with one final hit, and you pass out.');
                  scene.actions([
                    { label: 'Pass out', goto: ['abduction', 'abdCarTrunk'] },
                  ]);
                } else {
                  qspCall(s, 'money', 'set', 0, 'cash');
                  qspCall(s, 'stat', '');
                  scene.text('He knocks you down with one final hit. The moment he puts you out of commission, he grabs your money and runs away.');
                  scene.actions([
                    { label: 'Get back on your feet', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                  ]);
                }
                return;
                if (((s as any).fightEnding ?? 0) === 10) {
                  if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                    (s as any).pcs_health = 100;
                  }
                  (s as any).fightEnding = 0;
                  (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (2);
                  if (((s as any).Loss ?? 0) < 0) {
                    (s as any).Loss = 0;
                  }
                  scene.img('images/characters/pavlovsk/school/boy/dimka/revenge/girlbeatsguy2.jpg');
                  // TODO-QSP: dynamic text: "Where the hell did you learn how to fight <<$pcs_nickname>>?" Lera asks in an a...
                  scene.text(`"Where the hell did you learn how to fight ${((s as any).pcs_nickname ?? 0)}?" Lera asks in an annoyed tone before sweeping Dimka's legs out from under him. Lena and Lera proceed to kick and stomp Dimka until he starts begging them to stop.`);
                  // TODO-QSP: dynamic text: After a few more hits, they get bored and check his pockets for cash. "<<$func('...
                  scene.text(`After a few more hits, they get bored and check his pockets for cash. "${qspFunc(s, 'money', 'string_profit', 10000)}?! Sweet!" They split the money among themselves, leaving none for you.`);
                  scene.text('Lena turns to you and tauntingly says "You either need to learn how to fight or get used to serving us, little bunny." Before you can say anything, the bell rings for class.');
                  scene.actions([
                    { label: 'Continue', goto: ['gschool_lessons', 'short_break'] },
                  ]);
                } else {
                  if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                    (s as any).pcs_health = 100;
                  }
                  (s as any).fightEnding = 0;
                  (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                  if (((s as any).rikudo ?? 0) > 10) {
                    (s as any).rikudo = ((s as any).rikudo ?? 0) - 10;
                  }
                  scene.text('In their drunken state, they throw you on the spit-covered porch and begin tearing your clothes as you no longer have the strength to resist.');
                  if (((s as any).fightEnding ?? 0) === 12) {
                    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                      (s as any).pcs_health = 100;
                    }
                    (s as any).fightEnding = 0;
                    (s as any).christinaQW['fight'] = (-1);
                    (s as any).christinaQW['pre_fight'] = 0;
                    (s as any).christinaQW['subpath'] = 2;
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
                    if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                      (s as any).pcs_health = 100;
                    }
                    (s as any).fightEnding = 0;
                    (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                    scene.text('You breath deeply, totally exhausted as the naked man advances upon you. You no longer have the strength to fight him off.');
                    if (((s as any).fightEnding ?? 0) === 14) {
                      if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                        (s as any).pcs_health = 100;
                      }
                      (s as any).fightEnding = 0;
                      (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                      qspCall(s, 'pain', '', 5, 'tummy', 'kick');
                      qspCall(s, 'pain', '', 5, 'cheeks', 'hit');
                      qspCall(s, 'pain', '', 5, 'thighs', 'kick');
                      qspCall(s, 'pain', '', 5, 'hair', 'stretch');
                      qspCall(s, 'clothing', 'displose');
                      // TODO-QSP: $streetev_title
                      scene.img('images/locations/shared/street/lostfight.jpg');
                      scene.text('You do your best, but there are just too many of them. Eventually they get you down on the ground and beat you, ripping out handfuls of your hair and tearing your clothes.');
                      scene.text('After what feels like an eternity, they finally stop hitting you. "That\'s what you get, you stupid bitch." Then the girl spits on you, with the rest of the gang following suit and spitting on you as well. Finally they get bored of tormenting you further and leave, laughing about how they beat the ugly girls ass.');
                      scene.text('With tears rolling down your face, you slowly get up and do your best to pull your clothes into place to cover up before you gingerly walk away.');
                      scene.actions([
                        { label: 'Leave', handler: (st: GameState) => {
    (st as any).streetrand = (-1);
    dynamicGoto(st, 'loc');
  } },
                      ]);
                    } else {
                      if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                        (s as any).pcs_health = 100;
                      }
                      (s as any).fightEnding = 0;
                      (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                      (s as any).slyQW['fight'] = (-1);
                      qspCall(s, 'mood', 'lower', 'large');
                      qspCall(s, 'pain', '', 5, 'cheeks', 'hit');
                      qspCall(s, 'stat', '');
                      scene.img('images/characters/shared/headshots_main/big248.jpg');
                      scene.text('You know he isn\'t that tough, but somehow he just keeps getting lucky blows in. After a solid punch knocks you off your feet, you just lay there, dazed and completely done resisting.');
                      if (((s as any).fightEnding ?? 0) === 16) {
                        if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                          (s as any).pcs_health = 100;
                        }
                        (s as any).fightEnding = 0;
                        (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                        (s as any).grupvalue[1] = ((s as any).grupvalue[1] ?? 0) - (5);
                        (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (5);
                        (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (5);
                        qspCall(s, 'mood', 'lower', 'medium');
                        scene.img('images/locations/shared/street/lostfight.jpg');
                        scene.text('You groan on pain as the frozen ground reaches for you. Damm. That wasn\'t your best idea now that you see it, especially because the police have just arrived to break up the brawl turned riot.');
                        // TODO-QSP: dynamic text: "<<$pcs_nickname>>! Oh my god! What happened to you?!"
                        scene.text(`"${((s as any).pcs_nickname ?? 0)}! Oh my god! What happened to you?!"`);
                        scene.text('Katja and Vicky appear over you and help Vanya take away your beaten body. It hurts a lot but somehow, after a while, you manage to stand without seeing stars. The trio looks at you in askance.');
                        // TODO-QSP: dynamic text: "<<$pcs_nickname>>! I don't know what to do with you! What were you thinking?!"
                        scene.text(`"${((s as any).pcs_nickname ?? 0)}! I don't know what to do with you! What were you thinking?!"`);
                        scene.text('Katja is really, really pissed and for a long while, she chastizes your actions. The fact that you are hurting doesn\'t seem to make her stop, but finally, after a long-winded tirade, the redhead seems to deflate and gives you a tired hug.');
                        scene.text('"Please! Don\'t do that again!"');
                        scene.text('It feels nice and makes Vanya & Vicky spell a sonorous "Kawai!" before quickly turning back and running away from an embarrassed/angry Katja. It was "fun", but it is time to look for something else to do.');
                        scene.actions([
                          { label: 'Continue', goto: ['katjaEV', 'kathan'] },
                        ]);
                      } else {
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
                              { label: 'Run! [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                            ]);
                          } else {
                            scene.actions([
                              { label: 'Run!', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).AlexandriaMissionQW = ((s as any).AlexandriaMissionQW ?? 0) + (1);
    (s as any).dummy = Math.floor(Math.random() * 100) + 1;
    qspCall(s, 'stat', '');
    if (((s as any).dummy ?? 0) <= ((s as any).pcs_run ?? 0)) {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anachase3'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anacrash1'] }]);
      scene.actions([{ label: 'Continue', goto: ['alexandriaEv', 'anachase4'] }]);
    }
  } },
                            ]);
                          }
                          scene.actions([
                            { label: 'Go to jail', goto: ['alexandriaEv', 'jail'] },
                          ]);
                        } else {
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
                                { label: 'Will you to cast Heal. [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                              ]);
                            } else {
                              scene.actions([
                                { label: 'Will you to cast Heal.', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['alexandriaEv', 'heal2'] },
                              ]);
                            }
                          }
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
                                  { label: 'Will you to cast Heal. [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                                ]);
                              } else {
                                scene.actions([
                                  { label: 'Will you to cast Heal.', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
  }, goto: ['alexandriaEv', 'heal4'] },
                                ]);
                              }
                            }
                            scene.actions([
                              { label: 'She leaves', handler: (st: GameState) => {
    (st as any).AlexandriaQW = 17;
  }, goto: ['city_center', ''] },
                            ]);
                          } else {
                            if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                              (s as any).pcs_health = 100;
                            }
                            (s as any).fightEnding = 0;
                            (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                            qspCall(s, 'mood', 'lower', 'large');
                            scene.actions([{ label: 'Continue', goto: ['gopnew', 'fight_lost'] }]);
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
                              (s as any).fightEnding = 0;
                              (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                              qspCall(s, 'mood', 'lower', 'large');
                              if (((s as any).fight ?? 0)?.['rape_loc'] === 'city_park'  ||  ((s as any).fight ?? 0)?.['rape_loc'] === 'pav_park') {
                                if (((s as any).fight ?? 0)?.['rape_type'] === 'gang') {
                                  scene.actions([{ label: 'Continue', goto: ['rape_events', 'park_gangrape_fight_loss'] }]);
                                } else {
                                  qspCall(s, 'rape_events', 'park_rape_solo');
                                }
                              } else {
                                scene.actions([{ label: 'Continue', goto: ['rape_events', 'urban_fight_rape'] }]);
                              }
                              if (((s as any).fightEnding ?? 0) === 24) {
                                if (((s as any).autocombat_surrender ?? 0) === 0  ||  ((s as any).pcs_health ?? 0) < 100) {
                                  (s as any).pcs_health = 100;
                                }
                                (s as any).fightEnding = 0;
                                (s as any).Loss = ((s as any).Loss ?? 0) + (1);
                                qspCall(s, 'mood', 'lower', 'large');
                                if (((s as any).opp_health ?? 0)[0] < 30) {
                                  scene.actions([{ label: 'Continue', goto: ['gopnik_fight_night', 'barely_lose'] }]);
                                } else {
                                  scene.actions([{ label: 'Continue', goto: ['gopnik_fight_night', 'badly_lose'] }]);
                                }
                              }
                            }
                          }
                          scene.actions([
                            { label: 'You fall unconscious', goto: ['alexandriaEv', 'hospital'] },
                          ]);
                        }
                        scene.actions([
                          { label: '"I am…"', handler: (st: GameState) => {
    (st as any).intel_lvlst = ((st as any).intel_lvlst ?? 0) - (20);
  }, goto: ['tatiana_missions', 'mission2D'] },
                        ]);
                      }
                      scene.actions([
                        { label: 'Give up', goto: ['Zvereva_Sly', 'loss'] },
                      ]);
                    }
                    scene.actions([
                      { label: 'Lose', goto: ['stallion', 'rape'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Cry', goto: ['sexm', 'gangbang'] },
                  ]);
                }
              }
            }
          }
        }
        scene.actions([
          { label: 'Further', goto: ['city_park', 'start'] },
        ]);
      }
      scene.actions([
        { label: 'Further', goto: ['city_park', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Further', goto: ['tatiana_lab', 'start'] },
    ]);
  }
  scene.build();
}

export const ender: LocationDef = {
  name: 'ender',
  title: '????',
  region: 'other',
  description: ['You fall to the floor and feel your consciousness slipping away.'],
  enter: enter,
};
