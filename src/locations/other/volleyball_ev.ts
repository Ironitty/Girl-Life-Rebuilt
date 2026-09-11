import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterLevelUpInit(s: GameState, scene: SceneBuilder): void {
  (s as any).vballVars['volleyball_practice'] = ((s as any).vball_lvl ?? 0);
  (s as any).vballVars['blocking_practice'] = ((s as any).pcs_vball_block ?? 0);
  (s as any).vballVars['receive_practice'] = ((s as any).pcs_vball_rec ?? 0);
  (s as any).vballVars['serve_practice'] = ((s as any).pcs_vball_serve ?? 0);
  (s as any).vballVars['set_practice'] = ((s as any).pcs_vball_set ?? 0);
  (s as any).vballVars['spike_practice'] = ((s as any).pcs_vball_spike ?? 0);
  scene.build();
}

function enterLevelUp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  (s as any).vballVars['level_up_message'] = 0;
  if (((s as any).vball_lvl ?? 0) > ((s as any).vballVars ?? 0)?.['volleyball_practice']) {
    (s as any).vballVars['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_block ?? 0) > ((s as any).vballVars ?? 0)?.['blocking_practice']) {
    (s as any).vballVars['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_rec ?? 0) > ((s as any).vballVars ?? 0)?.['receive_practice']) {
    (s as any).vballVars['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_serve ?? 0) > ((s as any).vballVars ?? 0)?.['serve_practice']) {
    (s as any).vballVars['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_set ?? 0) > ((s as any).vballVars ?? 0)?.['set_practice']) {
    (s as any).vballVars['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_spike ?? 0) > ((s as any).vballVars ?? 0)?.['spike_practice']) {
    (s as any).vballVars['level_up_message'] = 1;
  }
  if (((s as any).vballVars ?? 0)?.['attack_exp'] >= 10) {
    (s as any).vballVars['team_attack'] = ((s as any).vballVars['team_attack'] ?? 0) + (1);
    (s as any).vballVars['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) - (10);
  }
  if (((s as any).vballVars ?? 0)?.['defense_exp'] >= 10) {
    (s as any).vballVars['team_defense'] = ((s as any).vballVars['team_defense'] ?? 0) + (1);
    (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) - (10);
  }
  scene.build();
}

function enterPracticeMatch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'vball_block', Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'exp_gain', 'vball_rec', Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'exp_gain', 'vball_serve', Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'exp_gain', 'vball_set', Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'exp_gain', 'vball_spike', Math.floor(Math.random() * 3) + 1);
  (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
  (s as any).vballVars['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
  scene.build();
}

function enterVolleyballMenu(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20)) {
    if (((s as any).vballVars ?? 0)?.['lessons_remaining'] > 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A69'] === 0  &&  ((s as any).vballVars ?? 0)?.['last_training_day'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: 'Take a volleyball lesson. You have <<vballVars[\'lessons_remaining\']>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.actions([
            { label: 'Take a volleyball lesson. You have <<vballVars[\'lessons_remaining\']>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: 'Take a volleyball lesson. You have <<vballVars[\'lessons_remaining\']>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Take a volleyball lesson. You have <<vballVars[\'lessons_remaining\']>> lessons remaining (2:00)', goto: ['volleyball_ev', 'class_practice'] },
            ]);
          }
        }
      }
    } else {
      if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
        if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
          scene.actions([
            { label: 'Practice with volleyball team (2:00)', handler: (st: GameState) => {
    // TODO-QSP: stat['volleyball_day'] = daystart
  }, goto: ['volleyball_ev', 'pregnancy_react'] },
          ]);
        } else {
          if (((s as any).week ?? 0) === 6  &&  ((s as any).vballVars ?? 0)?.['last_match_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 16  &&  ((s as any).hour ?? 0) <= 18) {
            if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
              scene.actions([
                { label: 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
              ]);
            } else {
              if (((s as any).pcs_energy ?? 0) < 20) {
                scene.actions([
                  { label: 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
                ]);
              } else {
                if (((s as any).pcs_hydra ?? 0) < 20) {
                  scene.actions([
                    { label: 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Play in Tournament (4:00)', goto: ['volleyball_ev', 'arrival'] },
                  ]);
                }
              }
            }
          } else {
            if (((s as any).week ?? 0) === 6  &&  ((s as any).vballVars ?? 0)?.['last_match_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 18) {
              // TODO-QSP: dynamic text: As you look around, you don't see anyone from the team. You suddenly realize tha...
              scene.text('As you look around, you don\'t see anyone from the team. You suddenly realize that there was a tournament game today and you were supposed to be here at \' + $func(\'time\', \'get_time_string\', 18, 0) + \'! You missed the bus and the coach is going to be furious!');
              qspCall(s, 'npc_relationship', 'modify', 'A69', (-20));
              (s as any).vballVars['last_match_day'] = ((s as any).daystart ?? 0);
              scene.actions([
                { label: 'Back', goto: ['gdksport', 'start'] },
              ]);
            } else {
              if (((s as any).vballVars ?? 0)?.['last_match_day'] !== ((s as any).daystart ?? 0)) {
                if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
                  scene.actions([
                    { label: 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
                  ]);
                } else {
                  if (((s as any).pcs_energy ?? 0) < 20) {
                    scene.actions([
                      { label: 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
                    ]);
                  } else {
                    if (((s as any).pcs_hydra ?? 0) < 20) {
                      scene.actions([
                        { label: 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_hydra>>/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
                      ]);
                    } else {
                      scene.actions([
                        { label: 'Practice with volleyball team (2:00)', goto: ['volleyball_ev', 'team_practice'] },
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
  scene.build();
}

function enterClassPractice(s: GameState, scene: SceneBuilder): void {
  (s as any).vballVars['last_training_day'] = ((s as any).daystart ?? 0);
  (s as any).vballVars['lessons_remaining'] = ((s as any).vballVars['lessons_remaining'] ?? 0) - (1);
  qspCall(s, 'exercise', 'tier2', 80, 'vball');
  qspCall(s, 'exercise', 'tier3', 40, 'vball', 'stren', 'agil', 'vital', 'prcptn', 'react');
  scene.text('You participate in the volleyball class at the community centre.');
  scene.text('Afterwards you have some free time on the court to work on something specific. Or you can just go home.');
  scene.actions([
    { label: 'Finish early', goto: ['volleyball_ev', 'practice_end1'] },
    { label: 'General practice (1:00)', goto: ['volleyball_ev', 'general_practice'] },
    { label: 'Focus on blocking (1:00)', goto: ['volleyball_ev', 'block_practice'] },
    { label: 'Focus on receiving (1:00)', goto: ['volleyball_ev', 'receive_practice'] },
    { label: 'Focus on serving (1:00)', goto: ['volleyball_ev', 'serve_practice'] },
    { label: 'Focus on setting (1:00)', goto: ['volleyball_ev', 'set_practice'] },
    { label: 'Focus on spiking (1:00)', goto: ['volleyball_ev', 'spike_practice'] },
  ]);
  scene.build();
}

function enterTeamPractice(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['init'] === 0) {
    (s as any).vballVars['init'] = 1;
    (s as any).vballVars['team_attack'] = 40;
    (s as any).vballVars['team_defense'] = 40;
  }
  qspCall(s, 'volleyball_ev', 'level_up_init');
  qspCall(s, 'exercise', 'tier2', 80, 'vball');
  qspCall(s, 'exercise', 'tier3', 40, 'vball', 'stren', 'agil', 'vital', 'prcptn', 'react');
  (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
  (s as any).vballVars['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (1);
  if (((s as any).vballVars ?? 0)?.['coachsex'] === 0) {
    (s as any).vballVars['practice_message'] = Math.floor(Math.random() * 10) + 1;
    scene.img(`images/pc/activities/volleyball/team_practice/${((s as any).vballVars ?? 0)?.['practice_message']}.jpg`);
    scene.text('Coach Mikhail runs the team through various drills, helping you work on all aspects of volleyball.');
    if (((s as any).vballVars ?? 0)?.['practice_message'] === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to put the weight on the balls of your feet when yo...
      scene.text(`"${((s as any).pcs_lastname ?? 0)}! You need to put the weight on the balls of your feet when you jump! Plant yourself more firmly! Focus when you jump! Don't just throw yourself at the ball!"`);
    } else {
      if (((s as any).vballVars ?? 0)?.['practice_message'] === 2) {
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Your spikes are too obvious! The blockers know exactly where...
        scene.text(`"${((s as any).pcs_lastname ?? 0)}! Your spikes are too obvious! The blockers know exactly where you're going to hit it! Try changing it up!"`);
      } else {
        if (((s as any).vballVars ?? 0)?.['practice_message'] === 3) {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! If you're going to fake a spike, jump like you mean it! Anyo...
          scene.text(`"${((s as any).pcs_lastname ?? 0)}! If you're going to fake a spike, jump like you mean it! Anyone who's paying attention will discount you as a threat!"`);
        } else {
          if (((s as any).vballVars ?? 0)?.['practice_message'] === 4) {
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don't flail your arms around when you block! Go straight up!...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}! Don't flail your arms around when you block! Go straight up! You don't have to block it every time if the people receiving behind you can pick it up! Make it easier on them!"`);
          } else {
            if (((s as any).vballVars ?? 0)?.['practice_message'] === 5) {
              // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don't just try to block where you <i>think</i> the ball is g...
              scene.text(`"${((s as any).pcs_lastname ?? 0)}! Don't just try to block where you <i>think</i> the ball is going to be! Watch where it's going before you jump!"`);
            } else {
              if (((s as any).vballVars ?? 0)?.['practice_message'] === 6) {
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Get right underneath the ball when you go to set it! If you ...
                scene.text(`"${((s as any).pcs_lastname ?? 0)}! Get right underneath the ball when you go to set it! If you set it from the side they know which way you're going to toss it!"`);
              } else {
                if (((s as any).vballVars ?? 0)?.['practice_message'] === 7) {
                  // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to be more consistent when you toss for your serve!...
                  scene.text(`"${((s as any).pcs_lastname ?? 0)}! You need to be more consistent when you toss for your serve! Don't just throw it up randomly! Throw it to the same height every time!"`);
                } else {
                  if (((s as any).vballVars ?? 0)?.['practice_message'] === 8) {
                    // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to lower your hips when you receive! Your center of...
                    scene.text(`"${((s as any).pcs_lastname ?? 0)}! You need to lower your hips when you receive! Your center of gravity isn't secure! That's why you keep falling over!"`);
                  } else {
                    if (((s as any).vballVars ?? 0)?.['practice_message'] === 9) {
                      // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Stop wimping out when you go for a dive! You have pads for a...
                      scene.text(`"${((s as any).pcs_lastname ?? 0)}! Stop wimping out when you go for a dive! You have pads for a reason!"`);
                    } else {
                      if (((s as any).vballVars ?? 0)?.['practice_message'] === 10) {
                        // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Move your legs! Don't give up just because the initial recei...
                        scene.text(`"${((s as any).pcs_lastname ?? 0)}! Move your legs! Don't give up just because the initial receive was off! If you run you can still keep the ball in play!"`);
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
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } else {
    if (((s as any).vballVars ?? 0)?.['coach_lust'] < 40) {
      (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (Math.floor(Math.random() * 8) + 1);
      if (((s as any).vballVars ?? 0)?.['practice_message'] === 1) {
        // TODO-QSP: dynamic text: "Move your pretty little butt <<$pcs_lastname>>! I don't want you training to ma...
        scene.text(`"Move your pretty little butt ${((s as any).pcs_lastname ?? 0)}! I don't want you training to make it look good, I want you to use that ass to jump!"`);
      } else {
        if (((s as any).vballVars ?? 0)?.['practice_message'] === 2) {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Your spikes are too obvious! The blockers know exactly where...
          scene.text(`"${((s as any).pcs_lastname ?? 0)}! Your spikes are too obvious! The blockers know exactly where you're going to hit it! Change it up!"`);
        } else {
          if (((s as any).vballVars ?? 0)?.['practice_message'] === 3) {
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don't aim with your arms when you bump! Get low! Stick your ...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}! Don't aim with your arms when you bump! Get low! Stick your ass out! Aim with those childbearing hips!"`);
          } else {
            if (((s as any).vballVars ?? 0)?.['practice_message'] === 4) {
              // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don't flail your arms like you're jerking off boys! Go strai...
              scene.text(`"${((s as any).pcs_lastname ?? 0)}! Don't flail your arms like you're jerking off boys! Go straight up when you block!"`);
            } else {
              if (((s as any).vballVars ?? 0)?.['practice_message'] === 5) {
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Get right underneath the ball like you're going to eat its a...
                scene.text(`"${((s as any).pcs_lastname ?? 0)}! Get right underneath the ball like you're going to eat its ass! If you set it from the side they know which way you're going to toss it!"`);
              } else {
                if (((s as any).vballVars ?? 0)?.['practice_message'] === 6) {
                  // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to lower your hips when you receive! Your center of...
                  scene.text(`"${((s as any).pcs_lastname ?? 0)}! You need to lower your hips when you receive! Your center of gravity isn't secure! Do you fall over like that when you are riding boys?"`);
                } else {
                  if (((s as any).vballVars ?? 0)?.['practice_message'] === 7) {
                    // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Stop wimping out when you go for a dive! You have pads for a...
                    scene.text(`"${((s as any).pcs_lastname ?? 0)}! Stop wimping out when you go for a dive! You have pads for a reason!"`);
                  } else {
                    if (((s as any).vballVars ?? 0)?.['practice_message'] === 8) {
                      // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Move those sexy legs! Pumps those thighs! Don't give up just...
                      scene.text(`"${((s as any).pcs_lastname ?? 0)}! Move those sexy legs! Pumps those thighs! Don't give up just because the initial receive was off! If you run you can still keep the ball in play!"`);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      (s as any).vballVars['practice_message'] = Math.floor(Math.random() * 5) + 1;
      if (((s as any).vballVars ?? 0)?.['practice_message'] === 1) {
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>!" he calls, walking over to you. "You need to widen your stan...
        scene.text(`"${((s as any).pcs_lastname ?? 0)}!" he calls, walking over to you. "You need to widen your stance more when you receive. Like this…"`);
        scene.text('He gets behind you, putting his hands on your body and pushing down on your hips. At the same time, he slides his hands down to your thighs, pushing your legs open wider, copping a feel of them as he does.');
        scene.text('You glance around at the other girls. They\'re still focused on their own drills and don\'t seem to notice what the coach is doing.');
        scene.actions([
          { label: 'Tease him', handler: (st: GameState) => {
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('"Ohhh… So you mean like <i>thiiiis</i>?" You decide to tease him even while he touches you, pushing your ass backwards into his crotch as your stance widens up. Even through your pants and his, you can feel he\'s rock hard. Unable to resist, you tease him some more, moving your hips up and down, rubbing your ass along his erection.');
    scene.text('"Exactly like that," he says. You can hear the smile in his voice. You bounce a few more times before slowly standing back up.');
    scene.text('"Thank you Coach Mikhail," you smile back.');
    // TODO-QSP: dynamic text: "Any time <<$pcs_nickname>>," he says before walking off to coach another girl.
    scene.text(`"Any time ${((s as any).pcs_nickname ?? 0)}," he says before walking off to coach another girl.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).vballVars ?? 0)?.['practice_message'] <= 4) {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Your spikes are too obvious! The blockers know exactly where...
          scene.text(`"${((s as any).pcs_lastname ?? 0)}! Your spikes are too obvious! The blockers know exactly where you're going to hit it! Try changing it up!"`);
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
          ]);
        } else {
          if (((s as any).vballVars ?? 0)?.['practice_message'] === 5) {
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>!" he says, walking over to you. "Your arms need to be straigh...
            scene.text(`"${((s as any).pcs_lastname ?? 0)}!" he says, walking over to you. "Your arms need to be straight over your head when you go for a block. Go straight up! Keep them totally in line with your body."`);
            scene.text('As he explains he puts your arms over your head and begins running his hands down them, down to your shoulders, and down your sides, his fingers trailing over the sides of your breasts as they go past.');
            scene.actions([
              { label: 'Tease him', handler: (st: GameState) => {
    (s as any).vballVars['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + (Math.floor(Math.random() * 3) + 1);
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('"Ohhh… So you mean like thiiiis?" You decide to tease him even while he touches you, pushing your ass backwards into his crotch as your stance widens up. Even through your pants and his, you can feel he\'s rock hard. Unable to resist, you tease him some more, moving your hips up and down, rubbing your ass along his erection.');
    scene.text('"Exactly like that," he says. You can hear the smile in his voice. You bounce a few more times before slowly standing back up.');
    scene.text('"Thank you Coach Mikhail," you smile back.');
    // TODO-QSP: dynamic text: "Any time <<$pcs_nickname>>," he says before walking off to coach another girl.
    scene.text(`"Any time ${((s as any).pcs_nickname ?? 0)}," he says before walking off to coach another girl.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterTeamPractice2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['plan_b'] > 0  &&  ((s as any).vballVars ?? 0)?.['last_plan_b_check'] < ((s as any).daystart ?? 0)) {
    scene.actions([{ label: 'Continue', goto: ['volleyball_ev', 'plan_b_check'] }]);
  }
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img('images/pc/activities/volleyball/team1.jpg');
  scene.text('After two hours, Coach Mikhail calls practice to a close.');
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    (s as any).vballVars['level_up_message'] = 0;
    qspCall(s, 'npc_relationship', 'modify', ((s as any).npcID ?? 0), 'like');
    scene.text('He seems particularly impressed with you and gives you a look of approval, letting you know you are getting better.');
  }
  scene.text('"Alright girls, that\'s the end of official practice. As always, you can still use the gym for an extra hour if you want to work on something specific or talk to me if you want tips on something."');
  scene.text('"Yes coach!" the team calls in unison.');
  if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1) {
    scene.text('You watch as some girls immediately head towards the showers, though Lariska stays to practice. She glances at you, implicitly asking if you\'re going to stay as well.');
  } else {
    scene.text('You watch as some girls walk off immediately to hit the showers.');
  }
  qspCall(s, 'volleyball_ev', 'level_up_init');
  scene.actions([
    { label: 'General practice', goto: ['volleyball_ev', 'general_practice'] },
    { label: 'Practice blocking', goto: ['volleyball_ev', 'block_practice'] },
    { label: 'Practice receiving', goto: ['volleyball_ev', 'receive_practice'] },
    { label: 'Practice serving', goto: ['volleyball_ev', 'serve_practice'] },
    { label: 'Practice setting', goto: ['volleyball_ev', 'set_practice'] },
    { label: 'Practice spiking', goto: ['volleyball_ev', 'spike_practice'] },
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end1'] },
  ]);
  scene.build();
}

function enterPlanBCheck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
  scene.text('In the middle of practice, Coach Mikhail pulls you aside to speak to you in a hushed voice.');
  // TODO-QSP: dynamic text: <<$pcs_usedname['A69']>>, did you… do that thing? After… what happened…?" He eye...
  scene.text(`${((s as any).pcs_usedname ?? 0)?.['A69']}, did you… do that thing? After… what happened…?" He eyes you meaningfully and you know he's talking about when the condom broke. About the morning after pill.`);
  (s as any).vballVars['last_plan_b_check'] = ((s as any).daystart ?? 0);
  if (((s as any).stat ?? 0)?.['last_morning_after_pill'] > ((s as any).vballVars ?? 0)?.['plan_b']) {
    (s as any).vballVars['plan_b'] = 0;
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A69', 'like');
    scene.text('You nod your head once and he gives a sigh of relief.');
    scene.text('"Good… that\'s good…"');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
      { label: 'Tease him (say you forgot)', handler: (st: GameState) => {
    scene.text('You gasp, putting your hand over your mouth.');
    scene.text('"I totally forgot!" you squeak, hiding your grin behind your fingers. Coach Mikhail pales.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>!" he hisses. "This isn't something you forget! This could mea...
    scene.text(`"${((s as any).pcs_lastname ?? 0)}!" he hisses. "This isn't something you forget! This could mean serious trouble for both of us!"`);
    scene.text('"I forgot!" you say again. "… to tell you I took it the other day."');
    scene.text('You let your hand fall, revealing your grin, trying not to burst out laughing. He stares at you in disbelief for a moment before it turns into a scowl.');
    // TODO-QSP: dynamic text: "That isn't funny, <<$pcs_lastname>>," he growls. You keep grinning at his back ...
    scene.text(`"That isn't funny, ${((s as any).pcs_lastname ?? 0)}," he growls. You keep grinning at his back as he stalks away.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A69', 'dislike');
    scene.text('You shake your head, grimacing and he shares your expression.');
    scene.text('"This isn\'t something you delay," he hisses. "Do it today. After practice."');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
      { label: '(Not yet)', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A69', 'dislike');
    scene.text('<i>Not yet</i>, you mouth at him silently, emphasizing your lip movements. <i>After practice.</i>');
    scene.text('He grimaces at that, drawing closer.');
    scene.text('"This isn\'t something you delay," he hisses. "<i>Today</i>. Don\'t make me march you to the pharmacy myself."');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterCoachGlare(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Glare at him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
    scene.text('Careful not to make any quick movements that would draw attention, you slowly turn your head to meet his gaze and glare at him.');
    scene.text('A glare that says, "Now? Really?"');
    // TODO-QSP: dynamic text: "Was that helpful <<$pcs_lastname>>?" he asks innocently.
    scene.text(`"Was that helpful ${((s as any).pcs_lastname ?? 0)}?" he asks innocently.`);
    scene.text('"Yes, you were so much help. Thank you Coach Mikhail," you smile back warmly while retaining cold eyes.');
    // TODO-QSP: dynamic text: "Any time <<$pcs_nickname>>, he grins back before walking off to coach another g...
    scene.text(`"Any time ${((s as any).pcs_nickname ?? 0)}, he grins back before walking off to coach another girl.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoachTelloff(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Tell him off', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
    scene.text('Careful not to make any quick movements that would draw attention, you slowly turn your head over your shoulder to glare at him.');
    scene.text('"Not. Right. Now!" You give Mikhail a glare before glancing around the room at your teammates.');
    scene.text('"Is that a promise for later?" he smirks.');
    scene.text('"Just get away from me before somebody sees us!" you hiss.');
    scene.text('"Alright, alright," he says, backing off to coach another girl.');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterPracticeEnd1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
  if (((s as any).vballVars ?? 0)?.['lariska_team'] === 1) {
    scene.text('You decide you\'ve had enough for today. You shake your head at Lariska, and she gives a disappointed frown and a shrug that says, "Maybe some other time." But doesn\'t dwell on it, moving off to ask some of the other girls to help her practice.');
  } else {
    scene.text('You decide you\'ve had enough for today and finish practice here instead of making use of the free time.');
  }
  scene.actions([
    { label: 'Continue', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterPracticeEnd2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
  scene.text('Dripping sweat and exhausted, you wrap up your practice.');
  scene.actions([
    { label: 'Continue', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterGeneralPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball');
  qspCall(s, 'exercise', 'tier2', 20, 'vball', 'stren', 'agil', 'vital', 'react', 'prcptn');
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img(`images/pc/activities/volleyball/team_practice/${Math.floor(Math.random() * 10) + 1}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing spikes against your team while they try to block them.');
  } else {
    scene.text('You practicing various setting drills including bouncing it off the wall, above your head, and keeping proper hand shape.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    (s as any).vballVars['level_up_message'] = 0;
    scene.text('It was a good session, you really feel like you\'re getting better at spiking your way past blocks.');
  }
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterBlockPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_block');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_block', 'vital', 'react');
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img(`images/pc/activities/volleyball/team_practice/${Math.floor(Math.random() * 3) + 3}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    (s as any).vballVars['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (((s as any).rand ?? 0)(0, 2) / 2);
    (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (((s as any).rand ?? 0)(0, 2) / 2);
    scene.text('You spend your free time practicing various maneuvres with the team.');
  } else {
    scene.text('You practice various maneuvres with some of the other girls around the community centre.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    (s as any).vballVars['level_up_message'] = 0;
    scene.text('It was a good session, you feel like you might have figured out some stuff.');
  }
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
    scene.text('Coming down from your last block, you wipe your sweat covered brow. Looking at the clock, you see free practice is just about up anyways.');
    scene.actions([
      { label: 'Finish practice', goto: ['gdksport', 'start'] },
      { label: 'Go see Coach Mikhail', goto: ['volley_coach', 'coach_office'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterReceivePractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_rec');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_rec', 'agil', 'react');
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img(`images/pc/activities/volleyball/team_practice/${Math.floor(Math.random() * 2) + 8}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    (s as any).vballVars['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing receiving spikes and serves from your teammates.');
  } else {
    scene.text('You practice receiving with some of the other girls around the community centre, asking them to spike and serve balls at you so you can try to bump them into the air.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    (s as any).vballVars['level_up_message'] = 0;
    scene.text('It was a good session, you feel like you might have figured out how to be more efficient with your receives.');
  }
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterServePractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_serve');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_serve', 'stren', 'prcptn');
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img('images/pc/activities/volleyball/team_practice/7.jpg');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing your jump serve against your teammates while they try to receive it.');
    if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
      (s as any).vballVars['level_up_message'] = 0;
      scene.text('It was a good session of doing serves with the team.');
    }
    scene.actions([
      { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
    ]);
  } else {
    if (((s as any).pcs_vball_serve ?? 0) <= 20) {
      scene.text('You practice jump serves. Most times end with you missing the ball entirely or falling flat on your ass after the hit or whacking it with a homerun hit outside the court. Or a combination of those things.');
      if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
        if (((s as any).pcs_vball_serve ?? 0) === 20) {
          (s as any).vballVars['level_up_message'] = 0;
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'jump_serve_complete'] },
          ]);
        } else {
          (s as any).vballVars['level_up_message'] = 0;
          scene.text('Though most of your attempts went awry, but you think you might be a little closer to figuring out this jump serve thing.');
          scene.actions([
            { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
          ]);
        }
      } else {
        scene.text('By the end of practice your body is aching with your failed attempts to jump serve. You wince as you rub your ass, wondering if it\'s going to bruise.');
        scene.text('<i>Man! Jump serving is hard!</i>');
        scene.actions([
          { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
        ]);
      }
    } else {
      scene.text('You practice jump serves, asking some of the other girls help you out by trying to receive them.');
      if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
        (s as any).vballVars['level_up_message'] = 0;
        scene.text('Their advice really helped, you feel like you might have figured out how to better control and aim your serve.');
      }
      scene.actions([
        { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
      ]);
    }
  }
  scene.build();
}

function enterJumpServeComplete(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/volleyball/team_practice/7.jpg');
  scene.text('<i>Whhhwwww</i>');
  scene.text('You exale slowly, holding the ball in front of yourself before tossing it up into the air.');
  scene.text('<i>That felt right…</i>');
  scene.text('Leaping into the air, you fling your hand forward, swinging at the ball. It connects with an awesome slapping sound that reverberates through your body. The ball soars over the net and pounds onto the wood just inside the line. A perfect jump serve. Your heart pounds inside your chest with your success. You spend the rest of practice focusing on what you felt for that perfect first serve. More of your serves begin to connect, and more of the ones that do land inside than they did before. And not once do you whiff completely and fall on your ass.');
  scene.text('At the end of your practice you\'re sweaty, exhausted, and feeling triumphant. You\'re not fantastic by any means, but you just turned something inconsistent into something consistent.');
  scene.text('<i>I did it! I can do jump serves!</i>');
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterSetPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_set');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_set', 'agil', 'prcptn');
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img('images/pc/activities/volleyball/team_practice/6.jpg');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    (s as any).vballVars['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (1);
    scene.text('You spend your free time doing setting drills with some of the other girls on the team.');
  } else {
    scene.text('You practicing various setting drills including bouncing it off the wall, above your head, and keeping proper hand shape.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    (s as any).vballVars['level_up_message'] = 0;
    scene.text('It was a good session, you really feel like you\'re becoming more consistent with your sets.');
  }
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterSpikePractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_spike');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_spike', 'stren', 'vital');
  qspCall(s, 'volleyball_ev', 'level_up');
  scene.img(`images/pc/activities/volleyball/team_practice/${Math.floor(Math.random() * 5) + 1}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    (s as any).vballVars['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing spikes against your team while they try to block them.');
  } else {
    scene.text('You practicing various setting drills including bouncing it off the wall, above your head, and keeping proper hand shape.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    (s as any).vballVars['level_up_message'] = 0;
    scene.text('It was a good session, you really feel like you\'re getting better at spiking your way past blocks.');
  }
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterPregnancyReact(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_pregtalk['A69'] = 1;
  // TODO-QSP: dynamic text: As you approach the team, your coach notices you and calls you aside. "<<$pcs_fi...
  scene.text(`As you approach the team, your coach notices you and calls you aside. "${((s as any).pcs_firstname ?? 0)}, are you pregnant? I can't let you play like that. Also, a pregnant teenager would definitely reflect poorly on me and the rest of the team. Sorry, but off the team." Tears welling in your eyes, you leave.`);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).vballVars['on_team'] = 0;
  (s as any).vballVars['sub_player'] = 0;
  qspCall(s, 'calendar', 'remove', 'volleyball_tournament');
  scene.actions([
    { label: 'Continue', goto: ['pav_commcenter', ''] },
  ]);
  scene.build();
}

function enterPickOpponent(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['wins'] < 2  ||  ((s as any).vballVars ?? 0)?.['wins'] + 1 < ((s as any).vballVars ?? 0)?.['losses']) {
    if ((!(Math.floor(Math.random() * 2) + 0))) {
      (s as any).i = 0;
    } else {
      (s as any).i = Math.floor(Math.random() * 3) + 1;
    }
  } else {
    (s as any).i = Math.floor(Math.random() * 5) + 1;
  }
  if (((s as any).i ?? 0) > 0  &&  ((s as any).vballVars ?? 0)?.['opponent'] === ((s as any).i ?? 0)) {
    qspCall(s, 'volleyball_ev', 'pick_opponent');
    return;
  }
  (s as any).vballVars['opponent'] = ((s as any).i ?? 0);
  if (((s as any).vballVars ?? 0)?.['opponent'] === 0) {
    (s as any).vballVars['opponent_name'] = 'Low Tier Team';
    (s as any).vballVars['opp_attack'] = Math.floor(Math.random() * 41) + 20;
    (s as any).vballVars['opp_defense'] = Math.floor(Math.random() * 41) + 20;
  } else {
    if (((s as any).vballVars ?? 0)?.['opponent'] === 1) {
      (s as any).vballVars['opponent_name'] = 'Missionaries';
      (s as any).vballVars['opp_attack'] = 40;
      (s as any).vballVars['opp_defense'] = 60;
    } else {
      if (((s as any).vballVars ?? 0)?.['opponent'] === 2) {
        (s as any).vballVars['opponent_name'] = 'Hounddogs ';
        (s as any).vballVars['opp_attack'] = 65;
        (s as any).vballVars['opp_defense'] = 40;
      } else {
        if (((s as any).vballVars ?? 0)?.['opponent'] === 3) {
          (s as any).vballVars['opponent_name'] = 'Cowgirls';
          (s as any).vballVars['opp_attack'] = 50;
          (s as any).vballVars['opp_defense'] = 50;
        } else {
          if (((s as any).vballVars ?? 0)?.['opponent'] === 4) {
            (s as any).vballVars['opponent_name'] = 'Ploughwomen';
            (s as any).vballVars['opp_attack'] = 60;
            (s as any).vballVars['opp_defense'] = 60;
          } else {
            if (((s as any).vballVars ?? 0)?.['opponent'] === 5) {
              (s as any).vballVars['opponent_name'] = 'Jackhammers';
              (s as any).vballVars['opp_attack'] = 80;
              (s as any).vballVars['opp_defense'] = 65;
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterArrival(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  (s as any).vballVars['last_match_day'] = ((s as any).daystart ?? 0);
  (s as any).vballVars['opp_points'] = 0;
  (s as any).vballVars['team_points'] = 0;
  (s as any).vballVars['exhaust'] = 0;
  qspCall(s, 'volleyball_ev', 'pick_opponent');
  scene.img('images/pc/activities/volleyball/court.jpg');
  scene.text('You arrive at the gym with your team and wait for your admission to the court.');
  if (((s as any).vballVars ?? 0)?.['opponent'] === 0) {
    scene.text('You will be playing against a low tier team today. The coach gathers everyone around and tells you "This should be easy, just play like we trained. Don\'t let me down!".');
  } else {
    if (((s as any).vballVars ?? 0)['match_result_' + ((s as any).vballVars ?? 0)?.['opponent']] === 'defeat') {
      // TODO-QSP: dynamic text: You'll have a rematch against the "<<$vballVars['opponent_name']>>" today. The c...
      scene.text(`You'll have a rematch against the "${((s as any).vballVars ?? 0)?.['opponent_name']}" today. The coach gathers everyone to hold his pre-game speech. "They may have beat us last time, but we trained for this day. Show them what you're made of!"`);
    } else {
      if (((s as any).vballVars ?? 0)['match_result_' + ((s as any).vballVars ?? 0)?.['opponent']] === 'victory') {
        // TODO-QSP: dynamic text: You will be playing against the "<<$vballVars['opponent_name']>>" again. The coa...
        scene.text(`You will be playing against the "${((s as any).vballVars ?? 0)?.['opponent_name']}" again. The coach gathers everyone to hold his pre-game speech. "We beat them before, we can do it again. Let's go girls!"`);
      } else {
        if (((s as any).vballVars ?? 0)?.['opponent'] > 3) {
          // TODO-QSP: dynamic text: You will be playing against the "<<$vballVars['opponent_name']>>" today. The coa...
          scene.text(`You will be playing against the "${((s as any).vballVars ?? 0)?.['opponent_name']}" today. The coach gathers everyone around and tells you "This is a proper opponent girls. We have been training for this. Show me what you can do!"`);
        } else {
          // TODO-QSP: dynamic text: You will be playing against the "<<$vballVars['opponent_name']>>" today. The coa...
          scene.text(`You will be playing against the "${((s as any).vballVars ?? 0)?.['opponent_name']}" today. The coach gathers everyone around and tells you "They have some new players this season. Don't underestimate them and remember our training."`);
        }
      }
    }
  }
  scene.text('You\'re finally let in and begin warming up.');
  if (((s as any).vballVars ?? 0)?.['coachsex'] > 0) {
    scene.actions([
      { label: 'See the coach for a good luck fuck' }, // TODO-QSP: empty action body
    ]);
  }
  scene.actions([
    { label: 'Warm ups', goto: ['volleyball_ev', 'warm_ups'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'level_up_init':
      enterLevelUpInit(s, scene);
      break;
    case 'level_up':
      enterLevelUp(s, scene);
      break;
    case 'practice_match':
      enterPracticeMatch(s, scene);
      break;
    case 'volleyball_menu':
      enterVolleyballMenu(s, scene);
      break;
    case 'class_practice':
      enterClassPractice(s, scene);
      break;
    case 'team_practice':
      enterTeamPractice(s, scene);
      break;
    case 'team_practice2':
      enterTeamPractice2(s, scene);
      break;
    case 'plan_b_check':
      enterPlanBCheck(s, scene);
      break;
    case 'coach_glare':
      enterCoachGlare(s, scene);
      break;
    case 'coach_telloff':
      enterCoachTelloff(s, scene);
      break;
    case 'practice_end1':
      enterPracticeEnd1(s, scene);
      break;
    case 'practice_end2':
      enterPracticeEnd2(s, scene);
      break;
    case 'general_practice':
      enterGeneralPractice(s, scene);
      break;
    case 'block_practice':
      enterBlockPractice(s, scene);
      break;
    case 'receive_practice':
      enterReceivePractice(s, scene);
      break;
    case 'serve_practice':
      enterServePractice(s, scene);
      break;
    case 'jump_serve_complete':
      enterJumpServeComplete(s, scene);
      break;
    case 'set_practice':
      enterSetPractice(s, scene);
      break;
    case 'spike_practice':
      enterSpikePractice(s, scene);
      break;
    case 'pregnancy_react':
      enterPregnancyReact(s, scene);
      break;
    case 'pick_opponent':
      enterPickOpponent(s, scene);
      break;
    case 'arrival':
      enterArrival(s, scene);
      break;
    default:
      enterLevelUpInit(s, scene);
      break;
  }
}

export const volleyball_ev: LocationDef = {
  name: 'volleyball_ev',
  title: '(<<pcs_stam>>/<<stammax / 5>> stamina)',
  region: 'other',
  enter: enter,
};
