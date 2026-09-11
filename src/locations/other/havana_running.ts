import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  scene.img('images/pc/activities/exercises/gym/fit1.jpg');
  scene.text('You\'re stretching and warming up before your practice run. You can see your coach, Igor Yurisovich, talking to the other athletes.');
  if (((s as any).runnerQW ?? 0)?.['joined_team'] > 0) {
    scene.actions([
      { label: 'Go to your coach', handler: (st: GameState) => {
    scene.text('Igor Yurisovich is your coach, a man with a rough voice who never seems to gets tired of motivational one-liners.');
    scene.text('"The only one who can keep you from winning is you" is his current favorite.');
    if (((s as any).pcs_run ?? 0) < 50) {
      scene.text('Despite looking occupied with the other trainees, Igor not only watched your practice runs, but timed them as well. He doesn\'t look too happy, though - not that he ever does.');
      scene.text('"You have to train harder, girl. With a time like this, you would come in dead last. Hell, you wouldn\'t even qualify for the main race! If you want to be better, you have to watch your diet, maybe go to the banya after training, but most importantly: Practice, practice, practice!"');
      scene.actions([
        { label: 'Leave', goto: ['havana_running', 'start'] },
      ]);
    } else {
      if (((s as any).pcs_run ?? 0) >= 50  &&  ((s as any).runnerQW ?? 0)?.['champ_gold'] === 0) {
        scene.text('Despite looking occupied with the other trainees, Igor not only watched your practice runs, but timed them as well. While you\'re pretty sure he\'s physically incapable of looking excited or even content, you think that he looks a little less grim than usual as he looks at you.');
        scene.text('"You\'re doing fine, girl. Better than fine; you could have a great future in athletics if you play your cards right. If you keep working hard, you might even have it in you to become European champion, perhaps more. But remember, the key to victory is your spirit: If you have the right mindset, you can do anything."');
        scene.actions([
          { label: 'Leave', goto: ['havana_running', 'start'] },
        ]);
      } else {
        scene.text('Igor eagerly watches your practice runs and times them as well. Despite his grim demeanour, he nods approvingly at your times and even gives you a hug when you set a personal best.');
        // TODO-QSP: dynamic text: "You're doing great, <<$pcs_nickname>>. I really can't give you much more advice...
        scene.text(`"You're doing great, ${((s as any).pcs_nickname ?? 0)}. I really can't give you much more advice except to tell you to keep pushing and making us proud."`);
        scene.actions([
          { label: 'Leave', goto: ['havana_running', 'start'] },
        ]);
      }
    }
  } },
    ]);
  }
  scene.actions([
    { label: 'Do a few practice races', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier2', 30, 'run');
    scene.img('images/pc/activities/exercises/gym/fit5.jpg');
    scene.text('You spend half an hour practicing 100 meter dashes to improve your speed, as well as doing several rounds around the stadium to work on your stamina.');
    scene.text('You\'re sweaty all over by the end of it, but also feel that you\'re a little better than before.');
    scene.actions([
      { label: 'Go to the dressing room', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterRaceStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).runnerQW ?? {})['comp_day'] = ((s as any).daystart ?? 0);
  ((s as any).runnerQW ?? {})['races_ran'] = (((s as any).runnerQW ?? {})['races_ran'] ?? 0) + (1);
  ((s as any).runnerQW ?? {})['bmi_penalty'] = 0;
  qspCall(s, 'stat', '');
  if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 0) {
    scene.text('You\'re registered for an amateur\'s race. The results will determine if you join the club\'s junior squad and enter the semi-professional runner circuit.');
    scene.actions([
      { label: 'Go to the track field', goto: ['havana_running', 'br'] },
    ]);
  } else {
    if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 1) {
      scene.text('As a member of your club\'s junior squad, you\'re registered for a semi-professional\'s race. The results will determine if you join the veteran squad.');
      scene.actions([
        { label: 'Go to the track field', goto: ['havana_running', 'kms'] },
      ]);
    } else {
      if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 2) {
        scene.text('As a member of your club\'s veteran squad, you\'re registered for a semi-professional\'s race. The results will determine your entry in the professional runner circuit.');
        scene.actions([
          { label: 'Go to the track field', goto: ['havana_running', 'ross'] },
        ]);
      } else {
        if (((s as any).runnerQW ?? 0)?.['prof_stage'] >= 3  &&  ((s as any).runnerQW ?? 0)?.['prof_stage'] < 14) {
          scene.text('As one of your club\'s best athletes, you can take part in a series of qualifying races in the professional circuit. Winning 9 out of 11 would qualify you for the St. Petersburg Track Championship.');
          // TODO-QSP: nl
          // TODO-QSP: dynamic text: Qualifying Races Attended: <<runnerQW['prof_stage'] - 3>>
          scene.text(`Qualifying Races Attended: ${((s as any).runnerQW ?? {})?.['prof_stage'] - 3}`);
          // TODO-QSP: dynamic text: Top 3 finishes in Qualifying Races: <<runnerQW['qualifiers']>>
          scene.text(`Top 3 finishes in Qualifying Races: ${((s as any).runnerQW ?? 0)?.['qualifiers']}`);
          scene.actions([
            { label: 'Go to the stadium', goto: ['havana_running', 'kval'] },
          ]);
        } else {
          if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 14  &&  ((s as any).runnerQW ?? 0)?.['qualifiers'] < 9) {
            ((s as any).runnerQW ?? {})['qualifiers'] = 0;
            ((s as any).runnerQW ?? {})['prof_stage'] = 3;
            scene.text('You were unable to qualify for the St. Petersburg Track Championship.');
            scene.actions([
              { label: 'Go back to the dressing room', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
            ]);
          } else {
            if (((s as any).runnerQW ?? 0)?.['prof_stage'] === 14  &&  ((s as any).runnerQW ?? 0)?.['qualifiers'] >= 9) {
              ((s as any).runnerQW ?? {})['qualifiers'] = 0;
              ((s as any).runnerQW ?? {})['prof_stage'] = 3;
              // TODO-QSP: dynamic text: You qualified for the <<year>> St. Petersburg Track Championship, taking place t...
              scene.text(`You qualified for the ${((s as any).year ?? 0)} St. Petersburg Track Championship, taking place this season in the Petrovsky Stadium.`);
              scene.actions([
                { label: 'Go to the stadium', goto: ['havana_running', 'evro'] },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterBr(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  ((s as any).runnerQW ?? {})['bmi_penalty'] = 0;
  if (((s as any).pcs_bmi ?? 0) > 25) {
    ((s as any).runnerQW ?? {})['bmi_penalty'] = ((((s as any).pcs_bmi ?? 0) - 25)*4);
  } else {
    if (((s as any).pcs_bmi ?? 0) < 20) {
      ((s as any).runnerQW ?? {})['bmi_penalty'] = ((20 - ((s as any).pcs_bmi ?? 0))*(20-((s as any).pcs_bmi ?? 0)));
    }
  }
  ((s as any).runnerQW ?? {})['result'] = ((s as any).pcs_run ?? 0) - ((s as any).runnerQW ?? {})?.['bmi_penalty'];
  scene.img('images/locations/city/citycenter/gym/race/ready.jpg');
  scene.text('Your discipline: The Women\'s 400 Meter Dash.');
  scene.text('After changing into your running gear, you spend some time warming up near the track before the race starts. Beyond some casual bystanders and encouraging familiars, no spectators are attending this competition.');
  scene.text('When you and the other runners are called, you walk to your starting position, tense but ready.');
  scene.text('You get in position. Then, you hear the starting shot: The race begins!');
  scene.text('On your marks…');
  scene.text('Get set…');
  scene.text('Go!');
  if (((s as any).runnerQW ?? 0)?.['result'] < 5) {
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (3);
    scene.text('You barely manage to reach the finish line, walking the last 100 meters. You come in a very slow and embarrassing last, having made a bit of a fool of yourself.');
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 10) {
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
      scene.text('You performed well, but still come in last.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 15) {
        ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
        scene.text('You fight hard, but manage to only take the penultimate place.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 20) {
          scene.text('You fight hard, but only manage to take 6th place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 35) {
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
            scene.text('You fight hard, but only manage to take 5th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 40) {
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
              scene.text('You fight hard, but only manage to take 4th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 45) {
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
                qspCall(s, 'fame', 'city', 'running', 14);
                ((s as any).runnerQW ?? {})['bronze_medals'] = (((s as any).runnerQW ?? {})['bronze_medals'] ?? 0) + (1);
                qspCall(s, 'money', 'earn', 150);
                // TODO-QSP: dynamic text: You fight hard and manage to take 3rd place, earning a prize: You receive a bron...
                scene.text(`You fight hard and manage to take 3rd place, earning a prize: You receive a bronze badge and a prize of ${qspFunc(s, 'money', 'string_profit', 150)}`);
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (4);
                  qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 2) + 14);
                  ((s as any).runnerQW ?? {})['silver_medals'] = (((s as any).runnerQW ?? {})['silver_medals'] ?? 0) + (1);
                  qspCall(s, 'money', 'earn', 300);
                  // TODO-QSP: dynamic text: You fight hard and manage to take 2nd place, earning a prize: You receive a silv...
                  scene.text(`You fight hard and manage to take 2nd place, earning a prize: You receive a silver badge and a prize of ${qspFunc(s, 'money', 'string_profit', 300)}`);
                } else {
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (5);
                  qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 3) + 14);
                  ((s as any).runnerQW ?? {})['prof_stage'] = 1;
                  ((s as any).runnerQW ?? {})['gold_medals'] = (((s as any).runnerQW ?? {})['gold_medals'] ?? 0) + (1);
                  qspCall(s, 'money', 'earn', 600);
                  // TODO-QSP: dynamic text: You fight hard and manage to take 1st place! You receive a gold badge, a prize o...
                  scene.text(`You fight hard and manage to take 1st place! You receive a gold badge, a prize of ${qspFunc(s, 'money', 'string_profit', 600)} and are now part of your club's junior squad, performing at the semi-professional level.`);
                }
              }
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterKms(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  ((s as any).runnerQW ?? {})['bmi_penalty'] = 0;
  if (((s as any).pcs_bmi ?? 0) > 25) {
    ((s as any).runnerQW ?? {})['bmi_penalty'] = ((((s as any).pcs_bmi ?? 0) - 25)*4);
  } else {
    if (((s as any).pcs_bmi ?? 0) < 20) {
      ((s as any).runnerQW ?? {})['bmi_penalty'] = ((20 - ((s as any).pcs_bmi ?? 0))*(20-((s as any).pcs_bmi ?? 0)));
    }
  }
  ((s as any).runnerQW ?? {})['result'] = ((s as any).pcs_run ?? 0) - ((s as any).runnerQW ?? {})?.['bmi_penalty'];
  scene.img('images/locations/city/citycenter/gym/race/ready.jpg');
  scene.text('Your discipline: The Women\'s 400 Meter Dash.');
  scene.text('After changing into your running gear, you spend some time warming up near the track before the race starts. Beyond the encouraging familiars, you appreciate some genuinely interested spectators, some armed with cameras, but even then no more than a hundred are attending this competition. The track field is far from full.');
  scene.text('When you and the other runners are called, you walk to your starting position, tense but ready.');
  scene.text('You get in position. Then, you hear the starting shot: The race begins!');
  scene.text('On your marks…');
  scene.text('Get set…');
  scene.text('Go!');
  if (((s as any).runnerQW ?? 0)?.['result'] < 20) {
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (2);
    ((s as any).runnerQW ?? {})['prof_stage'] = 0;
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 25) {
      ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
      scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You didn\'t manage to reach any classification.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 30) {
        scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You only came in last.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 35) {
          scene.text('You fight hard, but manage to only take the penultimate place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 40) {
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
            scene.text('You fight hard, but only manage to take 6th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 45) {
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
              scene.text('You fight hard, but only manage to take 5th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
                qspCall(s, 'fame', 'city', 'running', 14);
                scene.text('You fight hard, but only manage to take 4th place.');
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 55) {
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (4);
                  qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 2) + 14);
                  ((s as any).runnerQW ?? {})['bronze_medals'] = (((s as any).runnerQW ?? {})['bronze_medals'] ?? 0) + (1);
                  qspCall(s, 'money', 'earn', 300);
                  // TODO-QSP: dynamic text: You fight hard and manage to take 3rd place, earning a prize: You get a bronze m...
                  scene.text(`You fight hard and manage to take 3rd place, earning a prize: You get a bronze medal and a prize of ${qspFunc(s, 'money', 'string_profit', 300)}`);
                } else {
                  if (((s as any).runnerQW ?? 0)?.['result'] < 60) {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (5);
                    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 3) + 14);
                    ((s as any).runnerQW ?? {})['silver_medals'] = (((s as any).runnerQW ?? {})['silver_medals'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 600);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 2nd place, earning a prize: You get a silver m...
                    scene.text(`You fight hard and manage to take 2nd place, earning a prize: You get a silver medal and a prize of ${qspFunc(s, 'money', 'string_profit', 600)}`);
                  } else {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (6);
                    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 4) + 14);
                    ((s as any).runnerQW ?? {})['prof_stage'] = 3;
                    ((s as any).runnerQW ?? {})['gold_medals'] = (((s as any).runnerQW ?? {})['gold_medals'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 1000);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 1st place! You get a gold medal, a prize of <<...
                    scene.text(`You fight hard and manage to take 1st place! You get a gold medal, a prize of ${qspFunc(s, 'money', 'string_profit', 1000)} and are now part of your club's veteran squad, performing at the semi-professional level.`);
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
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterRoss(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  ((s as any).runnerQW ?? {})['bmi_penalty'] = 0;
  if (((s as any).pcs_bmi ?? 0) > 25) {
    ((s as any).runnerQW ?? {})['bmi_penalty'] = ((((s as any).pcs_bmi ?? 0) - 25)*4);
  } else {
    if (((s as any).pcs_bmi ?? 0) < 20) {
      ((s as any).runnerQW ?? {})['bmi_penalty'] = ((20 - ((s as any).pcs_bmi ?? 0))*(20-((s as any).pcs_bmi ?? 0)));
    }
  }
  ((s as any).runnerQW ?? {})['result'] = ((s as any).pcs_run ?? 0) - ((s as any).runnerQW ?? {})?.['bmi_penalty'];
  scene.img('images/locations/city/citycenter/gym/race/ready.jpg');
  scene.text('Your discipline: The Women\'s 400 Meter Dash.');
  scene.text('After changing into your running gear, you spend some time warming up near the track before the race starts. The club\'s fans, track lovers and students on a school trip fill the place. You even see some photo journalists, all of them showing genuine interest in this competition. A gross appraisal put the spectators\' numbers at several hundred. The track field is at full capacity.');
  scene.text('When you and the other runners are called, you walk to your starting position, tense but ready.');
  scene.text('You get in position. Then, you hear the starting shot: The race begins!');
  scene.text('On your marks…');
  scene.text('Get set…');
  scene.text('Go!');
  if (((s as any).runnerQW ?? 0)?.['result'] < 30) {
    ((s as any).runnerQW ?? {})['prof_stage'] = 1;
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 35) {
      scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You didn\'t manage to reach any classification.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 40) {
        scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You only came in last.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 45) {
          ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
          scene.text('You fight hard, but manage to only take the penultimate place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
            scene.text('You fight hard, but only manage to take 6th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 55) {
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
              qspCall(s, 'fame', 'city', 'running', 14);
              scene.text('You fight hard, but only manage to take 5th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 60) {
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (4);
                qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 2) + 14);
                scene.text('You fight hard, but only manage to take 4th place.');
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 65) {
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (5);
                  qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 3) + 14);
                  ((s as any).runnerQW ?? {})['bronze_medals'] = (((s as any).runnerQW ?? {})['bronze_medals'] ?? 0) + (1);
                  qspCall(s, 'money', 'earn', 600);
                  // TODO-QSP: dynamic text: You fight hard and manage to take 3rd place, earning a prize: You get a bronze m...
                  scene.text(`You fight hard and manage to take 3rd place, earning a prize: You get a bronze medal and a prize of ${qspFunc(s, 'money', 'string_profit', 600)}`);
                } else {
                  if (((s as any).runnerQW ?? 0)?.['result'] < 70) {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (6);
                    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 4) + 14);
                    ((s as any).runnerQW ?? {})['silver_medals'] = (((s as any).runnerQW ?? {})['silver_medals'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 1000);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 2nd place, earning a prize: You get a silver m...
                    scene.text(`You fight hard and manage to take 2nd place, earning a prize: You get a silver medal and a prize of ${qspFunc(s, 'money', 'string_profit', 1000)}`);
                  } else {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (7);
                    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 5) + 14);
                    ((s as any).runnerQW ?? {})['prof_stage'] = 3;
                    ((s as any).runnerQW ?? {})['gold_medals'] = (((s as any).runnerQW ?? {})['gold_medals'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 1500);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 1st place! You get a gold medal, a prize of <<...
                    scene.text(`You fight hard and manage to take 1st place! You get a gold medal, a prize of ${qspFunc(s, 'money', 'string_profit', 1500)} and gain entry to the professional circuit.`);
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
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterKval(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  ((s as any).runnerQW ?? {})['prof_stage'] = (((s as any).runnerQW ?? {})['prof_stage'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 60;
  ((s as any).runnerQW ?? {})['bmi_penalty'] = 0;
  if (((s as any).pcs_bmi ?? 0) > 25) {
    ((s as any).runnerQW ?? {})['bmi_penalty'] = ((((s as any).pcs_bmi ?? 0) - 25)*4);
  } else {
    if (((s as any).pcs_bmi ?? 0) < 20) {
      ((s as any).runnerQW ?? {})['bmi_penalty'] = ((20 - ((s as any).pcs_bmi ?? 0))*(20-((s as any).pcs_bmi ?? 0)));
    }
  }
  ((s as any).runnerQW ?? {})['result'] = ((s as any).pcs_run ?? 0) - ((s as any).runnerQW ?? {})?.['bmi_penalty'];
  scene.img('images/locations/city/citycenter/gym/race/ready.jpg');
  scene.text('Your discipline: The Women\'s 400 Meter Dash.');
  scene.text('At the professional level, your club takes you to the Petrovsky Stadium. After changing into your running gear, you spend some time warming up before the race starts and observe the current attendance. Now, this is what you call a spectacle. Thousands of people have come to see the race, including photo journalists, TV crews and all class of sports enthusiasts. Even then, the stadium is far from full, with maybe only a quarter capacity.');
  scene.text('When you and the other runners are called, you walk to your starting position, tense but ready.');
  scene.text('You get in position. Then, you hear the starting shot: The race begins!');
  scene.text('On your marks…');
  scene.text('Get set…');
  scene.text('Go!');
  if (((s as any).runnerQW ?? 0)?.['result'] < 40) {
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    ((s as any).runnerQW ?? {})['prof_stage'] = 2;
    ((s as any).runnerQW ?? {})['qualifiers'] = 0;
    scene.text('You barely manage to reach the finish line, walking the last 100 meters. Your performance is so atrocious that the coach decides to return you to the semi-professional rank.');
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 45) {
      scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You didn\'t manage to reach any classification.');
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
        scene.text('You fought hard, but still have a lot of work ahead of you if you want to be better than your competition. You only came in last.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 55) {
          ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
          scene.text('You fought hard, but manage to only take the penultimate place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 60) {
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
            qspCall(s, 'fame', 'city', 'running', 14);
            scene.text('You fight hard, but only manage to take 6th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 65) {
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (4);
              qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 2) + 14);
              scene.text('You fight hard, but only manage to take 5th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 70) {
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (5);
                qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 3) + 14);
                scene.text('You fight hard, but only manage to take 4th place.');
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 75) {
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (6);
                  qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 4) + 14);
                  ((s as any).runnerQW ?? {})['qualifiers'] = (((s as any).runnerQW ?? {})['qualifiers'] ?? 0) + (1);
                  ((s as any).runnerQW ?? {})['bronze_medals'] = (((s as any).runnerQW ?? {})['bronze_medals'] ?? 0) + (1);
                  qspCall(s, 'money', 'earn', 1000);
                  // TODO-QSP: dynamic text: You fight hard and manage to take 3rd place, earning a prize. You get a bronze b...
                  scene.text(`You fight hard and manage to take 3rd place, earning a prize. You get a bronze badge and a prize of ${qspFunc(s, 'money', 'string_profit', 1000)}/ However, only a 1st place finish would qualify you for the Track Championship.`);
                } else {
                  if (((s as any).runnerQW ?? 0)?.['result'] < 80) {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (7);
                    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 5) + 14);
                    ((s as any).runnerQW ?? {})['qualifiers'] = (((s as any).runnerQW ?? {})['qualifiers'] ?? 0) + (1);
                    ((s as any).runnerQW ?? {})['silver_medals'] = (((s as any).runnerQW ?? {})['silver_medals'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 1500);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 2nd place, earning a prize. You get a silver m...
                    scene.text(`You fight hard and manage to take 2nd place, earning a prize. You get a silver medal and a prize of ${qspFunc(s, 'money', 'string_profit', 1500)}. However, only a 1st place finish would qualify you for the Track Championship.`);
                  } else {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (8);
                    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 6) + 14);
                    ((s as any).runnerQW ?? {})['qualifiers'] = (((s as any).runnerQW ?? {})['qualifiers'] ?? 0) + (1);
                    ((s as any).runnerQW ?? {})['gold_medals'] = (((s as any).runnerQW ?? {})['gold_medals'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 2000);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 1st place! You get a gold medal, a prize of <<...
                    scene.text(`You fight hard and manage to take 1st place! You get a gold medal, a prize of ${qspFunc(s, 'money', 'string_profit', 2000)} and are one step closer to qualifying for the St. Petersburg Track Championship.`);
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
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterEvro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 30, 'run');
  (s as any).minut = ((s as any).minut ?? 0) + 120;
  ((s as any).runnerQW ?? {})['bmi_penalty'] = 0;
  if (((s as any).pcs_bmi ?? 0) > 25) {
    ((s as any).runnerQW ?? {})['bmi_penalty'] = ((((s as any).pcs_bmi ?? 0) - 25)*4);
  } else {
    if (((s as any).pcs_bmi ?? 0) < 20) {
      ((s as any).runnerQW ?? {})['bmi_penalty'] = ((20 - ((s as any).pcs_bmi ?? 0))*(20-((s as any).pcs_bmi ?? 0)));
    }
  }
  ((s as any).runnerQW ?? {})['result'] = ((s as any).pcs_run ?? 0) - ((s as any).runnerQW ?? {})?.['bmi_penalty'];
  scene.img('images/locations/city/citycenter/gym/race/ready.jpg');
  scene.text('Your discipline: The Women\'s 400 Meter Dash.');
  scene.text('This is the highest competition in the St. Petersburg area. From here, the professional runners jump to the regional, national and eventually international scene. You will eventually reach those levels, with the possibility of joining the country\'s Olympic Team, but for the moment, it\'s better if you concentrate on reaching the St. Petersburg Championship.');
  scene.text('After changing into your running gear, you spend some time warming up before the race starts and observe the current attendance. It\'s evident that this is a great event, with around 10,000 spectators and journalists in attendance.');
  scene.text('When you and the other runners are called, you walk to your starting position, tense but ready.');
  scene.text('You get in position. Then, you hear the starting shot: The race begins!');
  scene.text('On your marks…');
  scene.text('Get set…');
  scene.text('Go!');
  if (((s as any).runnerQW ?? 0)?.['result'] < 50) {
    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) - (1);
    ((s as any).runnerQW ?? {})['prof_stage'] = 2;
    ((s as any).runnerQW ?? {})['qualifiers'] = 0;
    scene.text('You barely manage to reach the finish line, walking the last 100 meters. Your performance is so atrocious that the coach decide to return you to the semi-professional rank.');
    qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 6) + 14);
  } else {
    if (((s as any).runnerQW ?? 0)?.['result'] < 55) {
      scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You didn\'t manage to reach any classification.');
      qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 7) + 15);
    } else {
      if (((s as any).runnerQW ?? 0)?.['result'] < 60) {
        qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 8) + 16);
        scene.text('You fight hard, but still have a lot of work ahead of you if you want to be better than your competition. You only came in last.');
      } else {
        if (((s as any).runnerQW ?? 0)?.['result'] < 65) {
          ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (1);
          qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 8) + 18);
          scene.text('You fight hard, but manage to only take the penultimate place.');
        } else {
          if (((s as any).runnerQW ?? 0)?.['result'] < 70) {
            ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (2);
            qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 6) + 20);
            scene.text('You fight hard, but only manage to take 6th place.');
          } else {
            if (((s as any).runnerQW ?? 0)?.['result'] < 75) {
              ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (3);
              qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 26) + 25);
              scene.text('You fought hard, but only managed to take 5th place.');
            } else {
              if (((s as any).runnerQW ?? 0)?.['result'] < 80) {
                ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (4);
                qspCall(s, 'fame', 'city', 'running', Math.floor(Math.random() * 51) + 50);
                scene.text('You fight hard, but only manage to take 4th place.');
              } else {
                if (((s as any).runnerQW ?? 0)?.['result'] < 85) {
                  ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (6);
                  qspCall(s, 'fame', 'city', 'running', 'BronzeMedal');
                  ((s as any).runnerQW ?? {})['champ_bronze'] = (((s as any).runnerQW ?? {})['champ_bronze'] ?? 0) + (1);
                  qspCall(s, 'money', 'earn', 10000);
                  // TODO-QSP: dynamic text: You fight hard and manage to take 3rd place, earning a prize. You get a bronze m...
                  scene.text(`You fight hard and manage to take 3rd place, earning a prize. You get a bronze medal and a prize of ${qspFunc(s, 'money', 'string_profit', 10000)}`);
                } else {
                  if (((s as any).runnerQW ?? 0)?.['result'] < 90) {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (8);
                    qspCall(s, 'fame', 'city', 'running', 'SilverMedal');
                    ((s as any).runnerQW ?? {})['champ_silver'] = (((s as any).runnerQW ?? {})['champ_silver'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 15000);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 2nd place, earning a prize. You get a silver m...
                    scene.text(`You fight hard and manage to take 2nd place, earning a prize. You get a silver medal and a prize of ${qspFunc(s, 'money', 'string_profit', 15000)}`);
                  } else {
                    ((s as any).grupvalue ?? {})[2] = (((s as any).grupvalue ?? {})[2] ?? 0) + (10);
                    qspCall(s, 'fame', 'city', 'running', 'GoldMedal');
                    ((s as any).runnerQW ?? {})['champ_gold'] = (((s as any).runnerQW ?? {})['champ_gold'] ?? 0) + (1);
                    qspCall(s, 'money', 'earn', 20000);
                    // TODO-QSP: dynamic text: You fight hard and manage to take 1st place. You get a gold medal, a prize of <<...
                    scene.text(`You fight hard and manage to take 1st place. You get a gold medal, a prize of ${qspFunc(s, 'money', 'string_profit', 20000)} and are now the "St. Petersburg Track Champion"!`);
                    return;
                    scene.actions([
                      { label: 'Continue', goto: ['havana_running', 'Family extension'] },
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
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
  ]);
  scene.build();
}

function enterFamilyExtension(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/gym/race/run_win.jpg');
  if (((s as any).home ?? 0)?.['current'] === 'parents_home') {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.text('As you receive congratulations from your coach and fellow competitors, you look towards the crowd to acknowledge their support. You\'re surprised to see your mother frantically waving at you and trying to make her way down to the track-side.');
    scene.text('Breaking out into a huge grin, you jog over to the barrier and reach over and hug each other.');
    // TODO-QSP: dynamic text: "Well done <<$pcs_nickname>>, that was some race! Oh my! My little girl… The Sai...
    scene.text(`"Well done ${((s as any).pcs_nickname ?? 0)}, that was some race! Oh my! My little girl… The Saint Petersburg Track champion! Where to next, National races? Anyway, I just had to come when I saw your name on the start list for the race in the local paper; I know you've been training hard, but I never expected that you'd be at this level! I'm so proud of you! Give me another hug!"`);
    // TODO-QSP: dynamic text: You lean over and hug your mother. "Thanks for coming, <<$npc_nickname['A29']>>....
    scene.text(`You lean over and hug your mother. "Thanks for coming, ${((s as any).npc_nickname ?? 0)?.['A29']}. I didn't mention it as I wasn't sure how well I'd do and I didn't want to put any pressure on you to attend given we aren't exactly flush with money."`);
    // TODO-QSP: dynamic text: Your mother hugs you close. "Oh <<$pcs_nickname>>, of course I'd come! Whatever ...
    scene.text(`Your mother hugs you close. "Oh ${((s as any).pcs_nickname ?? 0)}, of course I'd come! Whatever differences we've had, you're my daughter and I love you and want the best for you."`);
    if (((s as any).npc_rel ?? 0)?.['A33'] > 50) {
      scene.text('At this point, you feel a soft punch on your arm and look up to see Anya standing behind your mother, grinning at you. You both open your arms and include her in the hug.');
      // TODO-QSP: dynamic text: "At last! I got stuck behind some folks. Anyway, well done <<$pcs_nickname>>! Th...
      scene.text(`"At last! I got stuck behind some folks. Anyway, well done ${((s as any).pcs_nickname ?? 0)}! That was fast, not far off Olympic times!"`);
      scene.text('You take half a step back and look at them. "This calls for a family celebration! Let me get showered and changed and I\'ll meet you outside. I\'ve got an idea…"');
    } else {
      scene.text('After the hug, your mother looks around as if searching for someone.');
      // TODO-QSP: dynamic text: "Are you okay, <<$npc_nickname['A29']>>? Have you lost someone?"
      scene.text(`"Are you okay, ${((s as any).npc_nickname ?? 0)?.['A29']}? Have you lost someone?"`);
      scene.text('"Yes, Anya is with me. I asked her to come and see you and do a bit of shopping after, but I can\'t see her. She must have gotten stuck on the way down. Never mind, at least I got to hug my little girl. You get showered and changed and I\'ll wait for you and Anya in reception."');
      scene.text('"Okay, sounds like a plan. I\'ve got an idea as I think this calls for something special."');
    }
    scene.actions([
      { label: 'Go for a shower', handler: (st: GameState) => {
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    (s as any).pcs_hairbsh = 1;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You have a shower and get dressed.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go meet your family', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/desk.jpg');
    scene.text('Meeting your mother and sister in the reception, you propose your idea. "How about a special treat if I can arrange it? How about the three of us head over to Babel and try to get in for a meal?"');
    // TODO-QSP: dynamic text: Both your mother and Anya look at you as if you've gone mad before your mother a...
    scene.text(`Both your mother and Anya look at you as if you've gone mad before your mother answers. "${((s as any).pcs_nickname ?? 0)}! We aren't dressed for that place, and even if we were, there's no way we could afford it!"`);
    scene.text('You grin. "Well that\'s why I said \'if I can arrange it\'. Let\'s try, and if it doesn\'t work, we can always head over to the diner."');
    scene.text('They both look at each other and back at you, but don\'t say anything. "Right, well I\'ll take that as a yes then."');
    scene.text('You all leave and head towards Babel.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the restaurant', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/expensiverest/restoran.jpg');
    scene.text('You approach the maître d\'.');
    scene.text('As expected, he initially refuses your party entry to the restaurant. You briefly explain that you\'ve just become the Saint Petersburg track champion for the 400 meter event and show him your gold medal as proof, but he remains doubtful. "Okay young lady, can you please tell me your name?"');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>," you reply.
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}," you reply.`);
    // TODO-QSP: dynamic text: "Okay Miss <<$pcs_lastname>>, one second please."
    scene.text(`"Okay Miss ${((s as any).pcs_lastname ?? 0)}, one second please."`);
    scene.text('He turns around and approaches a table in the lobby with some national, international and local papers displayed and checks the local paper before returning to you.');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Wait for him', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/expensiverest/maitredseat.jpg');
    scene.text('He returns a few minutes later and beckons for you all to follow him. "Normally we wouldn\'t allow entry as we have a strict dress code. However, given the circumstances, I\'m pleased to tell you that you\'re all most welcome to eat here as it\'s such a special occasion. After all it\'s not every day that we have the Saint Petersburg 400 meter track champion eating in our fine establishment."');
    scene.text('He continues. "The manager has also asked me to let you know that you\'ll all eat free tonight with a complimentary bottle of champagne. There is one condition though…"');
    scene.text('You look at him a little warily. "Okay, thanks. And the condition?"');
    scene.text('He breaks into a grin. "Well now, that\'s very simple. We take a photo of you displaying your gold medal to include in our advertising to say that you ate here with your lovely sisters after winning the race."');
    // TODO-QSP: dynamic text: At this point your mother blushes and goes bright red as you answer. "No problem...
    scene.text(`At this point your mother blushes and goes bright red as you answer. "No problem, it'll be our pleasure… That is once my ${((s as any).npc_nickname ?? 0)?.['A29']} stops blushing and my sister stops giggling!"`);
    scene.text('"Your mother?" he enquires.');
    scene.text('"Yes," you reply. "Although I guess you can tell by how red she\'s gone that she clearly likes your compliment."');
    scene.text('He continues. "Also one photo of you which I\'ll ask you to sign so I can show my kids."');
    scene.text('"Of course! Let\'s get that done while my mother recovers her poise."');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have dinner', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/expensiverest/seated.jpg');
    scene.text('After the photo is taken, the maître d\' leads you to your table where you all sit down.');
    scene.text('Having enjoyed a lovely meal and having a light buzz from the champagne, you all head out and you pause to thank the maître d\' for his kindness and ask him to pass on your thanks to the manager for offering the meal for free.');
    scene.text('Outside, you all share another hug and you thank them both for coming before you part ways.');
    scene.text('Your sister winks at you and as she waves goodbye. "Thanks for that. I never thought I\'d get to eat there. Guess you\'ve already started getting used to having some fame!"');
    scene.text('Your mother adds her agreement. "Me neither. That was a special treat! Now don\'t let this go to your head too much. I still want you to work hard as a good education is important too!"');
    // TODO-QSP: dynamic text: You smile as you answer. "Yes <<$npc_nickname['A29']>>, I know. See you both lat...
    scene.text(`You smile as you answer. "Yes ${((s as any).npc_nickname ?? 0)?.['A29']}, I know. See you both later."`);
    qspCall(s, 'drugs', 'alcohol', 'champagne', 2);
    (s as any).frost = 0;
    (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (30);
    qspCall(s, 'mood', 'raise', 'small');
    (s as any).fat = ((s as any).fat ?? 0) + (8);
    (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (60);
    if (((s as any).pcs_hydra ?? 0) >= 100) {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (10);
    } else {
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
    }
    (s as any).cumspclnt = 2;
    qspCall(s, 'cum_cleanup', '');
    (s as any).pcs_breath = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 90;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the city center', goto: ['city_center', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_rel ?? 0)?.['A33'] <= 50) {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    } else {
      scene.text('As you receive congratulations from your coach and fellow competitors, you look towards the crowd to acknowledge their support. You\'re surprised to see your sister frantically waving at you and trying to make her way down to the track-side.');
      scene.text('Breaking out into a huge grin, you jog over to the barrier and reach over give each other a hug.');
      scene.text('"You go, girl! That was some race. I knew you were into your running, but I never thought you were at this level. Well done!"');
      scene.text('"Thanks for coming, sis. It means a lot."');
      scene.text('"How come you never told me? It was lucky I found out because the coach mentioned it to me last week while I was hanging out with Roma and the crew outside the community center. I wasn\'t going to miss the opportunity for a possible little celebration with my little sis, was I? Let\'s go for a few beers! I know a cool bar just a short metro ride from here."');
      scene.text('"Okay, cool. I\'m up for that! Let me go and shower and change first."');
      scene.text('"Okay, just don\'t be too long or I may have to leave without you!"');
      scene.actions([
        { label: 'Go for a shower', handler: (st: GameState) => {
    qspCall(s, 'din_van', 'showerdin');
    if (((s as any).deodorant_on ?? 0) === 1) {
      qspCall(s, 'sweat', 'remove_deo');
      scene.text('Your deodorant gets washed away in the shower.');
    }
    (s as any).pcs_hairbsh = 1;
    scene.img('images/shared/home/bathroom/dush.mp4');
    scene.text('You have a shower and get dressed.');
    scene.text('After your shower, you meet Anya in the reception and head off to the metro.');
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', handler: (st: GameState) => {
    scene.img('images/locations/city/shared/metro/metro.jpg');
    scene.text('You take the metro to the industrial area and head towards the Rabotnik bar.');
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/bar.jpg');
    scene.text('You both make your way to the bar and order some beers, which you drink at the bar.');
    scene.text('When you\'ve both finished your beer, you order another and head towards the pool table.');
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Play pool', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/poolw.jpg');
    scene.text('You both enjoy a game of pool and after the game, Anya heads off to the bar to get some more beers.');
    scene.text('In the meantime, you set the table up for another game.');
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Another game', handler: (st: GameState) => {
    scene.img('images/locations/city/industrial/bar/sex/pool/pooll.jpg');
    scene.text('You spend a few minutes playing another game before taking your final shot and winning the game.');
    // TODO-QSP: dynamic text: "Okay <<$pcs_nickname>>, that's one game each. Let's have one more beer, then I'...
    scene.text(`"Okay ${((s as any).pcs_nickname ?? 0)}, that's one game each. Let's have one more beer, then I've got to go."`);
    scene.text('"Sounds good, sis."');
    scene.text('After a final beer, you both leave the bar and Anya gives you a hug before hurrying off. "See you later, sis! And well done again!"');
    qspCall(s, 'drugs', 'alcohol', 'beer', 2);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave the bar', goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'race_start':
      enterRaceStart(s, scene);
      break;
    case 'br':
      enterBr(s, scene);
      break;
    case 'kms':
      enterKms(s, scene);
      break;
    case 'ross':
      enterRoss(s, scene);
      break;
    case 'kval':
      enterKval(s, scene);
      break;
    case 'evro':
      enterEvro(s, scene);
      break;
    case 'Family extension':
      enterFamilyExtension(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const havana_running: LocationDef = {
  name: 'havana_running',
  title: 'You\'re stretching and warming up before your practice run. Y',
  region: 'other',
  enter: enter,
};
