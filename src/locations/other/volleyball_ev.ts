import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterLevelUpInit(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['volleyball_practice'] = ((s as any).vball_lvl ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['blocking_practice'] = ((s as any).pcs_vball_block ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['receive_practice'] = ((s as any).pcs_vball_rec ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['serve_practice'] = ((s as any).pcs_vball_serve ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['set_practice'] = ((s as any).pcs_vball_set ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['spike_practice'] = ((s as any).pcs_vball_spike ?? 0);
  // TODO-QSP: end
  scene.build();
}

function enterLevelUp(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
  if (((s as any).vball_lvl ?? 0) > ((s as any).vballVars ?? 0)?.['volleyball_practice']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_block ?? 0) > ((s as any).vballVars ?? 0)?.['blocking_practice']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_rec ?? 0) > ((s as any).vballVars ?? 0)?.['receive_practice']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_serve ?? 0) > ((s as any).vballVars ?? 0)?.['serve_practice']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_set ?? 0) > ((s as any).vballVars ?? 0)?.['set_practice']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 1;
  }
  if (((s as any).pcs_vball_spike ?? 0) > ((s as any).vballVars ?? 0)?.['spike_practice']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 1;
  }
  if (((s as any).vballVars ?? 0)?.['attack_exp'] >= 10) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['team_attack'] = ((s as any).vballVars['team_attack'] ?? 0) + (1);
    ((s as any).vballVars = (s as any).vballVars ?? {})['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) - (10);
  }
  if (((s as any).vballVars ?? 0)?.['defense_exp'] >= 10) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['team_defense'] = ((s as any).vballVars['team_defense'] ?? 0) + (1);
    ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) - (10);
  }
  // TODO-QSP: end
  scene.build();
}

function enterPracticeMatch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exp_gain', 'vball_block', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'vball_rec', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'vball_serve', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'vball_set', (Math.floor(Math.random() * 3) + 1));
  qspCall(s, 'exp_gain', 'vball_spike', (Math.floor(Math.random() * 3) + 1));
  ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  ((s as any).vballVars = (s as any).vballVars ?? {})['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
  // TODO-QSP: end
  scene.build();
}

function enterVolleyballMenu(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).week ?? 0) < 6  &&  ((s as any).hour ?? 0) >= 10  &&  ((s as any).hour ?? 0) < 20)  ||  (((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20)) {
    if (((s as any).vballVars ?? 0)?.['lessons_remaining'] > 0  &&  ((s as any).vballVars ?? 0)?.['on_team'] === 0  &&  ((s as any).npc_pregtalk ?? 0)?.['A69'] === 0  &&  ((s as any).vballVars ?? 0)?.['last_training_day'] !== ((s as any).daystart ?? 0)) {
      if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Take a volleyball lesson. You have ' + String(((s as any).vballVars ?? 0)?.['lessons_remaining'] ?? '' ?? '') + ' lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_stam || '') ?? '') + '/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
        ]);
      } else {
        if (((s as any).pcs_energy ?? 0) < 20) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Take a volleyball lesson. You have ' + String(((s as any).vballVars ?? 0)?.['lessons_remaining'] ?? '' ?? '') + ' lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_energy || '') ?? '') + '/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
          ]);
        } else {
          if (((s as any).pcs_hydra ?? 0) < 20) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Take a volleyball lesson. You have ' + String(((s as any).vballVars ?? 0)?.['lessons_remaining'] ?? '' ?? '') + ' lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_hydra || '') ?? '') + '/2...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too thirsty to do this.')
  } },
            ]);
          } else {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Take a volleyball lesson. You have ' + String(((s as any).vballVars ?? 0)?.['lessons_remaining'] ?? '' ?? '') + ' lessons remaining (2:00)', goto: ['volleyball_ev', 'class_practice'] },
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
                { label: '', labelFn: (s: GameState) => 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_stam || '') ?? '') + '/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
              ]);
            } else {
              if (((s as any).pcs_energy ?? 0) < 20) {
                scene.actions([
                  { label: '', labelFn: (s: GameState) => 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_energy || '') ?? '') + '/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
                ]);
              } else {
                if (((s as any).pcs_hydra ?? 0) < 20) {
                  scene.actions([
                    { label: '', labelFn: (s: GameState) => 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_hydra || '') ?? '') + '/2...]', handler: (st: GameState) => {
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
              // TODO-QSP: dynamic text: As you look around, you don''t see anyone from the team. You suddenly realize th...
              scene.text('As you look around, you don\'t see anyone from the team. You suddenly realize that there was a tournament game today and you were supposed to be here at 18:00! You missed the bus and the coach is going to be furious!');
              qspCall(s, 'npc_relationship', 'modify', 'A69', (-20));
              ((s as any).vballVars = (s as any).vballVars ?? {})['last_match_day'] = ((s as any).daystart ?? 0);
              scene.actions([
                { label: 'Back', goto: ['gdksport', 'start'] },
              ]);
            } else {
              if (((s as any).vballVars ?? 0)?.['last_match_day'] !== ((s as any).daystart ?? 0)) {
                if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
                  scene.actions([
                    { label: '', labelFn: (s: GameState) => 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_stam || '') ?? '') + '/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
  } },
                  ]);
                } else {
                  if (((s as any).pcs_energy ?? 0) < 20) {
                    scene.actions([
                      { label: '', labelFn: (s: GameState) => 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_energy || '') ?? '') + '/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
                    ]);
                  } else {
                    if (((s as any).pcs_hydra ?? 0) < 20) {
                      scene.actions([
                        { label: '', labelFn: (s: GameState) => 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(' + String(((s as any).pcs_hydra || '') ?? '') + '/2...]', handler: (st: GameState) => {
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
  // TODO-QSP: end
  scene.build();
}

function enterClassPractice(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['last_training_day'] = ((s as any).daystart ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['lessons_remaining'] = ((s as any).vballVars['lessons_remaining'] ?? 0) - (1);
  qspCall(s, 'exercise', 'tier2', 80, 'vball');
  qspCall(s, 'exercise', 'tier3', 40, 'vball', 'stren', 'agil', 'vital', 'prcptn', 'react');
  scene.text('You participate in the volleyball class at the community centre.');
  scene.text('Afterwards you have some free time on the court to work on something specific. Or you can just go home.');
  // TODO-QSP: end
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
    ((s as any).vballVars = (s as any).vballVars ?? {})['init'] = 1;
    ((s as any).vballVars = (s as any).vballVars ?? {})['team_attack'] = 40;
    ((s as any).vballVars = (s as any).vballVars ?? {})['team_defense'] = 40;
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUpInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  qspCall(s, 'exercise', 'tier2', 80, 'vball');
  qspCall(s, 'exercise', 'tier3', 40, 'vball', 'stren', 'agil', 'vital', 'prcptn', 'react');
  ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
  ((s as any).vballVars = (s as any).vballVars ?? {})['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (1);
  if (((s as any).vballVars ?? 0)?.['coachsex'] === 0) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['practice_message'] = (Math.floor(Math.random() * 10) + 1);
    scene.img(`images/pc/activities/volleyball/team_practice/${((s as any).vballVars ?? 0)?.['practice_message'] ?? ''}.jpg`);
    scene.text('Coach Mikhail runs the team through various drills, helping you work on all aspects of volleyball.');
    if (((s as any).vballVars ?? 0)?.['practice_message'] === 1) {
      // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to put the weight on the balls of your feet when yo...
      scene.text(`"${((s as any).pcs_lastname || '')}! You need to put the weight on the balls of your feet when you jump! Plant yourself more firmly! Focus when you jump! Don't just throw yourself at the ball!"`);
    } else {
      if (((s as any).vballVars ?? 0)?.['practice_message'] === 2) {
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Your spikes are too obvious! The blockers know exactly where...
        scene.text(`"${((s as any).pcs_lastname || '')}! Your spikes are too obvious! The blockers know exactly where you're going to hit it! Try changing it up!"`);
      } else {
        if (((s as any).vballVars ?? 0)?.['practice_message'] === 3) {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! If you''re going to fake a spike, jump like you mean it! Any...
          scene.text(`"${((s as any).pcs_lastname || '')}! If you're going to fake a spike, jump like you mean it! Anyone who's paying attention will discount you as a threat!"`);
        } else {
          if (((s as any).vballVars ?? 0)?.['practice_message'] === 4) {
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don''t flail your arms around when you block! Go straight up...
            scene.text(`"${((s as any).pcs_lastname || '')}! Don't flail your arms around when you block! Go straight up! You don't have to block it every time if the people receiving behind you can pick it up! Make it easier on them!"`);
          } else {
            if (((s as any).vballVars ?? 0)?.['practice_message'] === 5) {
              // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don''t just try to block where you <i>think</i> the ball is ...
              scene.text(`"${((s as any).pcs_lastname || '')}! Don't just try to block where you <i>think</i> the ball is going to be! Watch where it's going before you jump!"`);
            } else {
              if (((s as any).vballVars ?? 0)?.['practice_message'] === 6) {
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Get right underneath the ball when you go to set it! If you ...
                scene.text(`"${((s as any).pcs_lastname || '')}! Get right underneath the ball when you go to set it! If you set it from the side they know which way you're going to toss it!"`);
              } else {
                if (((s as any).vballVars ?? 0)?.['practice_message'] === 7) {
                  // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to be more consistent when you toss for your serve!...
                  scene.text(`"${((s as any).pcs_lastname || '')}! You need to be more consistent when you toss for your serve! Don't just throw it up randomly! Throw it to the same height every time!"`);
                } else {
                  if (((s as any).vballVars ?? 0)?.['practice_message'] === 8) {
                    // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to lower your hips when you receive! Your center of...
                    scene.text(`"${((s as any).pcs_lastname || '')}! You need to lower your hips when you receive! Your center of gravity isn't secure! That's why you keep falling over!"`);
                  } else {
                    if (((s as any).vballVars ?? 0)?.['practice_message'] === 9) {
                      // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Stop wimping out when you go for a dive! You have pads for a...
                      scene.text(`"${((s as any).pcs_lastname || '')}! Stop wimping out when you go for a dive! You have pads for a reason!"`);
                    } else {
                      if (((s as any).vballVars ?? 0)?.['practice_message'] === 10) {
                        // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Move your legs! Don''t give up just because the initial rece...
                        scene.text(`"${((s as any).pcs_lastname || '')}! Move your legs! Don't give up just because the initial receive was off! If you run you can still keep the ball in play!"`);
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
      ((s as any).vballVars = (s as any).vballVars ?? {})['coach_lust'] = ((s as any).vballVars['coach_lust'] ?? 0) + ((Math.floor(Math.random() * 8) + 1));
      if (((s as any).vballVars ?? 0)?.['practice_message'] === 1) {
        // TODO-QSP: dynamic text: "Move your pretty little butt <<$pcs_lastname>>! I don''t want you training to m...
        scene.text(`"Move your pretty little butt ${((s as any).pcs_lastname || '')}! I don't want you training to make it look good, I want you to use that ass to jump!"`);
      } else {
        if (((s as any).vballVars ?? 0)?.['practice_message'] === 2) {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Your spikes are too obvious! The blockers know exactly where...
          scene.text(`"${((s as any).pcs_lastname || '')}! Your spikes are too obvious! The blockers know exactly where you're going to hit it! Change it up!"`);
        } else {
          if (((s as any).vballVars ?? 0)?.['practice_message'] === 3) {
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don''t aim with your arms when you bump! Get low! Stick your...
            scene.text(`"${((s as any).pcs_lastname || '')}! Don't aim with your arms when you bump! Get low! Stick your ass out! Aim with those childbearing hips!"`);
          } else {
            if (((s as any).vballVars ?? 0)?.['practice_message'] === 4) {
              // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Don''t flail your arms like you''re jerking off boys! Go str...
              scene.text(`"${((s as any).pcs_lastname || '')}! Don't flail your arms like you're jerking off boys! Go straight up when you block!"`);
            } else {
              if (((s as any).vballVars ?? 0)?.['practice_message'] === 5) {
                // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Get right underneath the ball like you''re going to eat its ...
                scene.text(`"${((s as any).pcs_lastname || '')}! Get right underneath the ball like you're going to eat its ass! If you set it from the side they know which way you're going to toss it!"`);
              } else {
                if (((s as any).vballVars ?? 0)?.['practice_message'] === 6) {
                  // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You need to lower your hips when you receive! Your center of...
                  scene.text(`"${((s as any).pcs_lastname || '')}! You need to lower your hips when you receive! Your center of gravity isn't secure! Do you fall over like that when you are riding boys?"`);
                } else {
                  if (((s as any).vballVars ?? 0)?.['practice_message'] === 7) {
                    // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Stop wimping out when you go for a dive! You have pads for a...
                    scene.text(`"${((s as any).pcs_lastname || '')}! Stop wimping out when you go for a dive! You have pads for a reason!"`);
                  } else {
                    if (((s as any).vballVars ?? 0)?.['practice_message'] === 8) {
                      // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Move those sexy legs! Pumps those thighs! Don''t give up jus...
                      scene.text(`"${((s as any).pcs_lastname || '')}! Move those sexy legs! Pumps those thighs! Don't give up just because the initial receive was off! If you run you can still keep the ball in play!"`);
                    }
                  }
                }
              }
            }
          }
        }
      }
    } else {
      ((s as any).vballVars = (s as any).vballVars ?? {})['practice_message'] = (Math.floor(Math.random() * 5) + 1);
      if (((s as any).vballVars ?? 0)?.['practice_message'] === 1) {
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>!" he calls, walking over to you. "You need to widen your stan...
        scene.text(`"${((s as any).pcs_lastname || '')}!" he calls, walking over to you. "You need to widen your stance more when you receive. Like this…"`);
        scene.text('He gets behind you, putting his hands on your body and pushing down on your hips. At the same time, he slides his hands down to your thighs, pushing your legs open wider, copping a feel of them as he does.');
        scene.text('You glance around at the other girls. They\'re still focused on their own drills and don\'t seem to notice what the coach is doing.');
        scene.actions([
          { label: 'Tease him', handler: (st: GameState) => {
    ((st as any).vballVars = (st as any).vballVars ?? {})['coach_lust'] = ((st as any).vballVars['coach_lust'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('"Ohhh… So you mean like <i>thiiiis</i>?" You decide to tease him even while he touches you, pushing your ass backwards into his crotch as your stance widens up. Even through your pants and his, you can feel he\'s rock hard. Unable to resist, you tease him some more, moving your hips up and down, rubbing your ass along his erection.');
    scene.text('"Exactly like that," he says. You can hear the smile in his voice. You bounce a few more times before slowly standing back up.');
    scene.text('"Thank you Coach Mikhail," you smile back.');
    // TODO-QSP: dynamic text: "Any time <<$pcs_nickname>>," he says before walking off to coach another girl.
    scene.text(`"Any time ${((st as any).pcs_nickname || '')}," he says before walking off to coach another girl.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).vballVars ?? 0)?.['practice_message'] <= 4) {
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! Your spikes are too obvious! The blockers know exactly where...
          scene.text(`"${((s as any).pcs_lastname || '')}! Your spikes are too obvious! The blockers know exactly where you're going to hit it! Try changing it up!"`);
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
          ]);
        } else {
          if (((s as any).vballVars ?? 0)?.['practice_message'] === 5) {
            // TODO-QSP: dynamic text: "<<$pcs_lastname>>!" he says, walking over to you. "Your arms need to be straigh...
            scene.text(`"${((s as any).pcs_lastname || '')}!" he says, walking over to you. "Your arms need to be straight over your head when you go for a block. Go straight up! Keep them totally in line with your body."`);
            scene.text('As he explains he puts your arms over your head and begins running his hands down them, down to your shoulders, and down your sides, his fingers trailing over the sides of your breasts as they go past.');
            scene.actions([
              { label: 'Tease him', handler: (st: GameState) => {
    ((st as any).vballVars = (st as any).vballVars ?? {})['coach_lust'] = ((st as any).vballVars['coach_lust'] ?? 0) + ((Math.floor(Math.random() * 3) + 1));
    scene.img('images/characters/pavlovsk/school/teacher/mikhail/volleytrener6.jpg');
    scene.text('"Ohhh… So you mean like thiiiis?" You decide to tease him even while he touches you, pushing your ass backwards into his crotch as your stance widens up. Even through your pants and his, you can feel he\'s rock hard. Unable to resist, you tease him some more, moving your hips up and down, rubbing your ass along his erection.');
    scene.text('"Exactly like that," he says. You can hear the smile in his voice. You bounce a few more times before slowly standing back up.');
    scene.text('"Thank you Coach Mikhail," you smile back.');
    // TODO-QSP: dynamic text: "Any time <<$pcs_nickname>>," he says before walking off to coach another girl.
    scene.text(`"Any time ${((st as any).pcs_nickname || '')}," he says before walking off to coach another girl.`);
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
  // TODO-QSP: end
  scene.build();
}

function enterTeamPractice2(s: GameState, scene: SceneBuilder): void {
  if (((s as any).vballVars ?? 0)?.['plan_b'] > 0  &&  ((s as any).vballVars ?? 0)?.['last_plan_b_check'] < ((s as any).daystart ?? 0)) {
    qspGoto(s, 'volleyball_ev', 'plan_b_check');
  }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/pc/activities/volleyball/team1.jpg');
  scene.text('After two hours, Coach Mikhail calls practice to a close.');
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUpInit(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
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
  // TODO-QSP: dynamic text: <<$pcs_usedname[''A69'']>>, did you… do that thing? After… what happened…?" He e...
  scene.text(`${((s as any).pcs_usedname ?? 0)?.['A69'] ?? ''}, did you… do that thing? After… what happened…?" He eyes you meaningfully and you know he's talking about when the condom broke. About the morning after pill.`);
  ((s as any).vballVars = (s as any).vballVars ?? {})['last_plan_b_check'] = ((s as any).daystart ?? 0);
  if (((s as any).stat ?? 0)?.['last_morning_after_pill'] > ((s as any).vballVars ?? 0)?.['plan_b']) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['plan_b'] = 0;
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A69', 'like');
    scene.text('You nod your head once and he gives a sigh of relief.');
    scene.text('"Good… that\'s good…"');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
      { label: 'Tease him (say you forgot)', handler: (st: GameState) => {
    scene.text('You gasp, putting your hand over your mouth.');
    scene.text('"I totally forgot!" you squeak, hiding your grin behind your fingers. Coach Mikhail pales.');
    // TODO-QSP: dynamic text: "<<$pcs_lastname>>!" he hisses. "This isn''t something you forget! This could me...
    scene.text(`"${((st as any).pcs_lastname || '')}!" he hisses. "This isn't something you forget! This could mean serious trouble for both of us!"`);
    scene.text('"I forgot!" you say again. "… to tell you I took it the other day."');
    scene.text('You let your hand fall, revealing your grin, trying not to burst out laughing. He stares at you in disbelief for a moment before it turns into a scowl.');
    // TODO-QSP: dynamic text: "That isn''t funny, <<$pcs_lastname>>," he growls. You keep grinning at his back...
    scene.text(`"That isn't funny, ${((st as any).pcs_lastname || '')}," he growls. You keep grinning at his back as he stalks away.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'No', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A69', 'dislike');
    scene.text('You shake your head, grimacing and he shares your expression.');
    scene.text('"This isn\'t something you delay," he hisses. "Do it today. After practice."');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
      { label: '(Not yet)', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A69', 'dislike');
    scene.text('<i>Not yet</i>, you mouth at him silently, emphasizing your lip movements. <i>After practice.</i>');
    scene.text('He grimaces at that, drawing closer.');
    scene.text('"This isn\'t something you delay," he hisses. "<i>Today</i>. Don\'t make me march you to the pharmacy myself."');
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCoachGlare(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Glare at him', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
    scene.text('Careful not to make any quick movements that would draw attention, you slowly turn your head to meet his gaze and glare at him.');
    scene.text('A glare that says, "Now? Really?"');
    // TODO-QSP: dynamic text: "Was that helpful <<$pcs_lastname>>?" he asks innocently.
    scene.text(`"Was that helpful ${((st as any).pcs_lastname || '')}?" he asks innocently.`);
    scene.text('"Yes, you were so much help. Thank you Coach Mikhail," you smile back warmly while retaining cold eyes.');
    // TODO-QSP: dynamic text: "Any time <<$pcs_nickname>>, he grins back before walking off to coach another g...
    scene.text(`"Any time ${((st as any).pcs_nickname || '')}, he grins back before walking off to coach another girl.`);
    scene.actions([
      { label: 'Continue', goto: ['volleyball_ev', 'team_practice2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCoachTelloff(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterPracticeEnd2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/gym/gdksport.jpg');
  scene.text('Dripping sweat and exhausted, you wrap up your practice.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enterGeneralPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball');
  qspCall(s, 'exercise', 'tier2', 20, 'vball', 'stren', 'agil', 'vital', 'react', 'prcptn');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img(`images/pc/activities/volleyball/team_practice/${(Math.floor(Math.random() * 10) + 1)}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing spikes against your team while they try to block them.');
  } else {
    scene.text('You practicing various setting drills including bouncing it off the wall, above your head, and keeping proper hand shape.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
    scene.text('It was a good session, you really feel like you\'re getting better at spiking your way past blocks.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterBlockPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_block');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_block', 'vital', 'react');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img(`images/pc/activities/volleyball/team_practice/${(Math.floor(Math.random() * 3) + 3)}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + ((Math.floor(Math.random() * 3) + 0) / 2);
    ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + ((Math.floor(Math.random() * 3) + 0) / 2);
    scene.text('You spend your free time practicing various maneuvres with the team.');
  } else {
    scene.text('You practice various maneuvres with some of the other girls around the community centre.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
    scene.text('It was a good session, you feel like you might have figured out some stuff.');
  }
  // TODO-QSP: end
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
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img(`images/pc/activities/volleyball/team_practice/${(Math.floor(Math.random() * 2) + 8)}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing receiving spikes and serves from your teammates.');
  } else {
    scene.text('You practice receiving with some of the other girls around the community centre, asking them to spike and serve balls at you so you can try to bump them into the air.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
    scene.text('It was a good session, you feel like you might have figured out how to be more efficient with your receives.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterServePractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_serve');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_serve', 'stren', 'prcptn');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/pc/activities/volleyball/team_practice/7.jpg');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing your jump serve against your teammates while they try to receive it.');
    if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
      ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
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
          ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'jump_serve_complete'] },
          ]);
        } else {
          ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
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
        ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
        scene.text('Their advice really helped, you feel like you might have figured out how to better control and aim your serve.');
      }
      scene.actions([
        { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
      ]);
    }
  }
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterSetPractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_set');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_set', 'agil', 'prcptn');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/pc/activities/volleyball/team_practice/6.jpg');
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['attack_exp'] = ((s as any).vballVars['attack_exp'] ?? 0) + (1);
    scene.text('You spend your free time doing setting drills with some of the other girls on the team.');
  } else {
    scene.text('You practicing various setting drills including bouncing it off the wall, above your head, and keeping proper hand shape.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
    scene.text('It was a good session, you really feel like you\'re becoming more consistent with your sets.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterSpikePractice(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'exercise', 'tier2', 40, 'vball_spike');
  qspCall(s, 'exercise', 'tier3', 20, 'vball_spike', 'stren', 'vital');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterLevelUp(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img(`images/pc/activities/volleyball/team_practice/${(Math.floor(Math.random() * 5) + 1)}.jpg`);
  if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['defense_exp'] = ((s as any).vballVars['defense_exp'] ?? 0) + (1);
    scene.text('You spend your free time practicing spikes against your team while they try to block them.');
  } else {
    scene.text('You practicing various setting drills including bouncing it off the wall, above your head, and keeping proper hand shape.');
  }
  if (((s as any).vballVars ?? 0)?.['level_up_message'] === 1) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['level_up_message'] = 0;
    scene.text('It was a good session, you really feel like you\'re getting better at spiking your way past blocks.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish practice', goto: ['volleyball_ev', 'practice_end2'] },
  ]);
  scene.build();
}

function enterPregnancyReact(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_pregtalk = (s as any).npc_pregtalk ?? {})['A69'] = 1;
  // TODO-QSP: dynamic text: As you approach the team, your coach notices you and calls you aside. "<<$pcs_fi...
  scene.text(`As you approach the team, your coach notices you and calls you aside. "${((s as any).pcs_firstname || '')}, are you pregnant? I can't let you play like that. Also, a pregnant teenager would definitely reflect poorly on me and the rest of the team. Sorry, but off the team." Tears welling in your eyes, you leave.`);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  ((s as any).vballVars = (s as any).vballVars ?? {})['on_team'] = 0;
  ((s as any).vballVars = (s as any).vballVars ?? {})['sub_player'] = 0;
  qspCall(s, 'calendar', 'remove', 'volleyball_tournament');
  // TODO-QSP: end
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
      (s as any).i = (Math.floor(Math.random() * 3) + 1);
    }
  } else {
    (s as any).i = (Math.floor(Math.random() * 5) + 1);
  }
  if (((s as any).i ?? 0) > 0  &&  ((s as any).vballVars ?? 0)?.['opponent'] === ((s as any).i ?? 0)) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPickOpponent(s, scene); (s as any).locArgs = __savedLocArgs; }
    return;
  }
  ((s as any).vballVars = (s as any).vballVars ?? {})['opponent'] = ((s as any).i ?? 0);
  if (((s as any).vballVars ?? 0)?.['opponent'] === 0) {
    ((s as any).vballVars = (s as any).vballVars ?? {})['opponent_name'] = 'Low Tier Team';
    ((s as any).vballVars = (s as any).vballVars ?? {})['opp_attack'] = (Math.floor(Math.random() * 41) + 20);
    ((s as any).vballVars = (s as any).vballVars ?? {})['opp_defense'] = (Math.floor(Math.random() * 41) + 20);
  } else {
    if (((s as any).vballVars ?? 0)?.['opponent'] === 1) {
      ((s as any).vballVars = (s as any).vballVars ?? {})['opponent_name'] = 'Missionaries';
      ((s as any).vballVars = (s as any).vballVars ?? {})['opp_attack'] = 40;
      ((s as any).vballVars = (s as any).vballVars ?? {})['opp_defense'] = 60;
    } else {
      if (((s as any).vballVars ?? 0)?.['opponent'] === 2) {
        ((s as any).vballVars = (s as any).vballVars ?? {})['opponent_name'] = 'Hounddogs ';
        ((s as any).vballVars = (s as any).vballVars ?? {})['opp_attack'] = 65;
        ((s as any).vballVars = (s as any).vballVars ?? {})['opp_defense'] = 40;
      } else {
        if (((s as any).vballVars ?? 0)?.['opponent'] === 3) {
          ((s as any).vballVars = (s as any).vballVars ?? {})['opponent_name'] = 'Cowgirls';
          ((s as any).vballVars = (s as any).vballVars ?? {})['opp_attack'] = 50;
          ((s as any).vballVars = (s as any).vballVars ?? {})['opp_defense'] = 50;
        } else {
          if (((s as any).vballVars ?? 0)?.['opponent'] === 4) {
            ((s as any).vballVars = (s as any).vballVars ?? {})['opponent_name'] = 'Ploughwomen';
            ((s as any).vballVars = (s as any).vballVars ?? {})['opp_attack'] = 60;
            ((s as any).vballVars = (s as any).vballVars ?? {})['opp_defense'] = 60;
          } else {
            if (((s as any).vballVars ?? 0)?.['opponent'] === 5) {
              ((s as any).vballVars = (s as any).vballVars ?? {})['opponent_name'] = 'Jackhammers';
              ((s as any).vballVars = (s as any).vballVars ?? {})['opp_attack'] = 80;
              ((s as any).vballVars = (s as any).vballVars ?? {})['opp_defense'] = 65;
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterArrival(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  ((s as any).vballVars = (s as any).vballVars ?? {})['last_match_day'] = ((s as any).daystart ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['opp_points'] = 0;
  ((s as any).vballVars = (s as any).vballVars ?? {})['team_points'] = 0;
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust'] = 0;
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPickOpponent(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/pc/activities/volleyball/court.jpg');
  scene.text('You arrive at the gym with your team and wait for your admission to the court.');
  if (((s as any).vballVars ?? 0)?.['opponent'] === 0) {
    scene.text('You will be playing against a low tier team today. The coach gathers everyone around and tells you "This should be easy, just play like we trained. Don\'t let me down!".');
  } else {
    if (((s as any).vballVars ?? 0)['match_result_' + ((s as any).vballVars ?? 0)?.['opponent']] === 'defeat') {
      // TODO-QSP: dynamic text: You''ll have a rematch against the "<<$vballVars[''opponent_name'']>>" today. Th...
      scene.text(`You'll have a rematch against the "${((s as any).vballVars ?? 0)?.['opponent_name'] ?? ''}" today. The coach gathers everyone to hold his pre-game speech. "They may have beat us last time, but we trained for this day. Show them what you're made of!"`);
    } else {
      if (((s as any).vballVars ?? 0)['match_result_' + ((s as any).vballVars ?? 0)?.['opponent']] === 'victory') {
        // TODO-QSP: dynamic text: You will be playing against the "<<$vballVars[''opponent_name'']>>" again. The c...
        scene.text(`You will be playing against the "${((s as any).vballVars ?? 0)?.['opponent_name'] ?? ''}" again. The coach gathers everyone to hold his pre-game speech. "We beat them before, we can do it again. Let's go girls!"`);
      } else {
        if (((s as any).vballVars ?? 0)?.['opponent'] > 3) {
          // TODO-QSP: dynamic text: You will be playing against the "<<$vballVars[''opponent_name'']>>" today. The c...
          scene.text(`You will be playing against the "${((s as any).vballVars ?? 0)?.['opponent_name'] ?? ''}" today. The coach gathers everyone around and tells you "This is a proper opponent girls. We have been training for this. Show me what you can do!"`);
        } else {
          // TODO-QSP: dynamic text: You will be playing against the "<<$vballVars[''opponent_name'']>>" today. The c...
          scene.text(`You will be playing against the "${((s as any).vballVars ?? 0)?.['opponent_name'] ?? ''}" today. The coach gathers everyone around and tells you "They have some new players this season. Don't underestimate them and remember our training."`);
        }
      }
    }
  }
  scene.text('You\'re finally let in and begin warming up.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Warm ups', goto: ['volleyball_ev', 'warm_ups'] },
  ]);
  scene.build();
}

function enterWarmUps(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/volleyball/court.jpg');
  scene.text('You and your team begin passing back and forth to each other, practicing serves, spikes, and receives, getting your bodies ready for the match. And soon enough, it\'s time for it to begin.');
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.text('The coin toss comes up in your favor and your team gets to decide whether you serve first or receive first.');
    if (((s as any).vballVars ?? 0)?.['team_captain'] === 1) {
      scene.text('Which will it be?');
      scene.actions([
        { label: 'Serve first', handler: (st: GameState) => {
    scene.img('images/pc/activities/volleyball/court.jpg');
    scene.text('"We\'ll serve first," you say.');
    scene.actions([
      { label: 'Get ready', goto: ['volleyball_ev', 'serve_start'] },
    ]);
  } },
        { label: 'Receive first', handler: (st: GameState) => {
    scene.img('images/pc/activities/volleyball/court.jpg');
    scene.text('"We\'ll serve first," you say.');
    scene.actions([
      { label: 'Get ready', goto: ['volleyball_ev', 'serve_start'] },
    ]);
  } },
      ]);
    } else {
      if ((Math.floor(Math.random() * 100) + 0) < ((s as any).pcs_vball_serve ?? 0)  ||  ((s as any).pcs_vball_serve ?? 0) >= 65) {
        if (((s as any).pcs_vball_serve ?? 0) > 35  &&  ((s as any).vballVars ?? 0)?.['libero'] !== 1) {
          scene.text('"We\'ll serve first," your team captain says and looks back at you.');
          // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You''re up!" Coach Mikhail calls from the bench.
          scene.text(`"${((s as any).pcs_lastname || '')}! You're up!" Coach Mikhail calls from the bench.`);
          scene.actions([
            { label: 'Serve', goto: ['volleyball_ev', 'serve_start'] },
          ]);
        } else {
          scene.text('"We\'ll serve first," your team captain says and heads back to the team, nodding at the one who you decided would be the first to serve.');
          scene.text('The match has officially begun…');
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            ((s as any).vballVars = (s as any).vballVars ?? {})['team_points'] = ((s as any).vballVars['team_points'] ?? 0) + (1);
          } else {
            ((s as any).vballVars = (s as any).vballVars ?? {})['opp_points'] = ((s as any).vballVars['opp_points'] ?? 0) + (1);
          }
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      } else {
        scene.text('"We\'ll receive first," your team captain says, and then heads back to the court as all of you take your positions.');
        scene.actions([
          { label: 'Wait for the serve', goto: ['volleyball_ev', 'receive_start'] },
        ]);
      }
    }
  } else {
    scene.text('The coin toss comes up in their favor and the opposing team gets to decide whether they serve first or receive first.');
    if (((s as any).vballVars ?? 0)?.['opp_defense'] > ((s as any).vballVars ?? 0)?.['opp_attack']) {
      if (((s as any).pcs_vball_serve ?? 0) > 35) {
        scene.text('"We\'ll receive first," their team captain says. Your own captain nods in response and looks back at you.');
        // TODO-QSP: dynamic text: "<<$pcs_lastname>>! You''re up!" Coach Mikhail calls from the bench as you nod b...
        scene.text(`"${((s as any).pcs_lastname || '')}! You're up!" Coach Mikhail calls from the bench as you nod back.`);
        scene.actions([
          { label: 'Serve', goto: ['volleyball_ev', 'serve_start'] },
        ]);
      } else {
        scene.text('"We\'ll receive first," their team captain says. Your own captain nods in response and looks back at the one who you decided would be the first to serve.');
        scene.text('The match has officially begun…');
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          ((s as any).vballVars = (s as any).vballVars ?? {})['team_points'] = ((s as any).vballVars['team_points'] ?? 0) + (1);
        } else {
          ((s as any).vballVars = (s as any).vballVars ?? {})['opp_points'] = ((s as any).vballVars['opp_points'] ?? 0) + (1);
        }
        scene.actions([
          { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
        ]);
      }
    } else {
      scene.text('"We\'ll serve first," their captain says. Your own captain nods back and heads back to the court as all of you take your positions');
      scene.actions([
        { label: 'Wait for the serve', goto: ['volleyball_ev', 'receive_start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPointCheck(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 3) + 3));
  ((s as any).vballVars = (s as any).vballVars ?? {})['opp_att_penalty'] = 0;
  qspCall(s, 'stat', '');
  if (((s as any).vballVars ?? 0)?.['team_points'] >= 5) {
    qspGoto(s, 'volleyball_ev', 'victory');
  } else {
    if (((s as any).vballVars ?? 0)?.['opp_points'] >= 5) {
      qspGoto(s, 'volleyball_ev', 'defeat');
    } else {
      if (((s as any).pcs_stam ?? 0) <= 5) {
        qspGoto(s, 'volleyball_ev', 'collapse');
      } else {
        if (((s as any).vballVars ?? 0)?.['service'] === 1) {
          qspGoto(s, 'volleyball_ev', 'serve');
        } else {
          qspGoto(s, 'volleyball_ev', 'randomizer');
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterRandomizer(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['random'] = (Math.floor(Math.random() * 5) + 0);
  if (((s as any).vballVars ?? 0)?.['random'] < 2) {
    qspGoto(s, 'volleyball_ev', 'free_ball');
  } else {
    if (((s as any).vballVars ?? 0)?.['random'] < 4) {
      qspGoto(s, 'volleyball_ev', 'opp_spike');
    } else {
      if (((s as any).vballVars ?? 0)?.['random'] === 4) {
        qspGoto(s, 'volleyball_ev', 'serve');
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterFreeBall(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/volleyball/receive/1.mp4');
  scene.text('"Free ball!" you shout as the ball soars high over the net towards your team.');
  scene.text('Your team just got in a good attack but didn\'t manage to score a point off of it. Fortunately, it seemed to take your opponents off balance and they couldn\'t attack back, forced to use all three of their touches just to get it back over the net.');
  scene.text('As the ball begins to come back down, you need to decide what to do next.');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlockFollow(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSet(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpike(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSpikeFake(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterOppSpike(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/pc/activities/volleyball/wait${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('"Here it comes!" you shout as your opponents jump up to spike the ball.');
  scene.text('They had a clean receive on their end and they quickly turned it into an attack. Once you see them coming back, you decide to…');
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBlock(s, scene); (s as any).locArgs = __savedLocArgs; }
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReceive(s, scene); (s as any).locArgs = __savedLocArgs; }
  // TODO-QSP: end
  scene.build();
}

function enterCollapse(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/volleyballcollapse.jpg');
  scene.text('You rush forward towards the ball when suddenly your legs give out from underneath you. The world spins and you\'re hit with a wave of confusion before slamming into the ground and blacking out.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Regain consciousness', handler: (st: GameState) => {
    scene.img('images/pc/activities/volleyball/court.jpg');
    if (((st as any).Lariska_team ?? 0) === 1) {
      scene.text('You groan as you slowly open your eyes, blinking as your vision transitions from blurry to sharp and you see Lariska\'s concerned face above yours, your head in her lap.');
      scene.text('"Wha… what happened?"');
      scene.text('"You collapsed!" she says. "One second you were playing and then the next you were sprawled out on the court!"');
    } else {
      scene.text('You groan as you slowly open your eyes, blinking as your vision transitions from blurry to sharp and you see Coach Mikhail\'s face above yours, your teammates all surrounding you as well.');
      scene.text('"Wha… what happened?"');
      scene.text('"You collapsed," Coach Mikhail says. "You were pushing yourself too hard. Exhausted yourself."');
    }
    scene.text('"Oh…"');
    scene.actions([
      { label: 'Continue',  },
    ]);
  } },
  ]);
  scene.build();
}

function enterReceiveStats(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 1);
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust'] = ((s as any).vballVars['exhaust'] ?? 0) + (((s as any).vballVars ?? 0)?.['exhaust_temp']);
  ((s as any).vballVars = (s as any).vballVars ?? {})['rec'] = (Math.floor(Math.random() * 100) + 1) + ((s as any).pcs_vball_rec ?? 0) / 4 - (((s as any).vballVars ?? {})?.['exhaust'] ?? 0);
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((((s as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
  // TODO-QSP: end
  scene.build();
}

function enterBlock(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go for a block', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 2) + 2);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust'] = ((st as any).vballVars['exhaust'] ?? 0) + (((st as any).vballVars ?? 0)?.['exhaust_temp']);
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - ((((st as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 4);
    ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_result'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['opp_attack'] ?? 0) - (((st as any).vballVars ?? {})?.['opp_att_penalty'] ?? 0);
    if ((Math.floor(Math.random() * 50) + 1) + ((st as any).vballVars ?? 0)?.['opp_att_result'] < ((st as any).vballVars ?? 0)?.['team_defense'] - 40) {
      if ((Math.floor(Math.random() * 50) + 1) + ((st as any).vballVars ?? 0)?.['team_defense'] + ((st as any).pcs_vball_block ?? 0) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
        qspGoto(st, 'volleyball_ev', 'block3_win');
      } else {
        qspGoto(st, 'volleyball_ev', 'block3_fail');
      }
    } else {
      if ((Math.floor(Math.random() * 50) + 1) + ((st as any).vballVars ?? 0)?.['opp_att_result'] < ((st as any).vballVars ?? 0)?.['team_defense'] - 20) {
        if ((Math.floor(Math.random() * 50) + 1) + ((st as any).vballVars ?? 0)?.['team_defense'] / 2 + ((st as any).pcs_vball_block ?? 0) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
          qspGoto(st, 'volleyball_ev', 'block2_win');
        } else {
          qspGoto(st, 'volleyball_ev', 'block2_fail');
        }
      } else {
        if ((Math.floor(Math.random() * 50) + 1) + ((st as any).pcs_vball_block ?? 0) > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
          qspGoto(st, 'volleyball_ev', 'block1_win');
        } else {
          qspGoto(st, 'volleyball_ev', 'block1_fail');
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterBlock1Win(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['team_points'] = ((s as any).vballVars['team_points'] ?? 0) + (1);
  scene.img('images/pc/activities/volleyball/block/1_win.jpg');
  scene.text('You were the only one to see the spike coming and find yourself jumping up by yourself trying to block it.');
  scene.text('The ball connects with your opponents hand and flies forward, slamming into your hands and bouncing back down to their side of the court.');
  scene.text('Your teammates cheer at your miraculous one man shutout while the girl you just blocked glares at you from beyond the net. You just earned another point!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
  ]);
  scene.build();
}

function enterBlock1Fail(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['opp_points'] = ((s as any).vballVars['opp_points'] ?? 0) + (1);
  scene.img('images/pc/activities/volleyball/block/1_fail.mp4');
  scene.text('You were the only one to see the spike coming and find yourself jumping up by yourself trying to block it.');
  scene.text('But one girl\'s arms do not make a good wall and your opponent easily spikes the ball straight past you into the court on your side.');
  scene.text('You grit your teeth at the loss of another point to the opposing team.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
  ]);
  scene.build();
}

function enterBlock2Win(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['team_points'] = ((s as any).vballVars['team_points'] ?? 0) + (1);
  scene.img('images/pc/activities/volleyball/block/2_win.jpg');
  scene.text('You and one other girl get into position in time before the spike. With careful coordination, the two of you jump up together and slap the ball down right as it gets spiked from your opponent\'s hand.');
  scene.text('Woo! Another point!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
  ]);
  scene.build();
}

function enterBlock2Fail(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['opp_points'] = ((s as any).vballVars['opp_points'] ?? 0) + (1);
  scene.img('images/pc/activities/volleyball/block/2_fail.jpg');
  scene.text('You and one other girl get into position in time before the spike. The two of you jump up together but when the spike comes, it\'s more powerful than you can handle and it blows straight through your arms.');
  scene.text('You grit your teeth in anger while the other team cheers for the point they won.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
  ]);
  scene.build();
}

function enterBlock3Win(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['team_points'] = ((s as any).vballVars['team_points'] ?? 0) + (1);
  scene.img('images/pc/activities/volleyball/block/3_win.jpg');
  scene.text('Your team manages to get a full 3-man wall of defenders in position just before the spike comes. With careful timing, you all jump up together to form a wide wall with nowhere for the enemy to aim past. The ball gets spiked into your arms and falls straight back down on their side.');
  scene.text('Your team cheers together! You scored another point!');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
  ]);
  scene.build();
}

function enterBlock3Fail(s: GameState, scene: SceneBuilder): void {
  ((s as any).vballVars = (s as any).vballVars ?? {})['opp_points'] = ((s as any).vballVars['opp_points'] ?? 0) + (1);
  scene.img('images/pc/activities/volleyball/block/3_fail.jpg');
  scene.text('Your team manages to get a full 3-man wall of defenders in position just before the ball comes down. Unfortunately, your timing is way off and they spike the ball straight over your hands into the court.');
  scene.text('You grit your teeth in anger while the other team cheers for the point they won.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
  ]);
  scene.build();
}

function enterBlockFollow(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Follow-up in case of block', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
    ((st as any).vballVars = (st as any).vballVars ?? {})['block_follow'] = (Math.floor(Math.random() * 100) + 1) + ((st as any).pcs_vball_rec ?? 0) / 4 - (((st as any).vballVars ?? {})?.['exhaust'] ?? 0);
    if ((Math.floor(Math.random() * 50) + 1) + ((st as any).vballVars ?? 0)?.['team_attack'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
      scene.img(`images/pc/activities/volleyball/wait${(Math.floor(Math.random() * 2) + 1)}.jpg`);
      scene.text('You hang back waiting and watching carefully in case the enemy manages to block your team\'s attack.');
      scene.text('Fortunately, there was no need at all as your team\'s spike goes cleanly through your opponent\'s defense and scores a clean point!');
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if (((st as any).vballVars ?? 0)?.['block_follow'] > 70) {
        scene.img('images/pc/activities/volleyball/receive/1.jpg');
        scene.text('You hang back waiting and watching carefully in case the enemy manages to block your team\'s attack.');
        scene.text('And a good thing that you did. Your opponents manage to get up a block in time and the ball bounces right off it, coming back towards your side of the court. You quickly move in, bumping it high into the air, trying to give your team another opportunity to attack.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpike(s, scene); (st as any).locArgs = __savedLocArgs; }
        qspCall(st, 'volleyball_ev', 'fake_spike');
      } else {
        if (((st as any).vballVars ?? 0)?.['block_follow'] > 50) {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.img('images/pc/activities/volleyball/receive/2.jpg');
            ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
            scene.text('You hang back waiting and watching carefully in case the enemy manages to block your team\'s attack.');
            scene.text('And a good thing that you did. Your opponents manage to get up a block in time and the ball bounces right off it, coming back towards your side of the court. You quickly move in, bumping it back into the air, but it\'s lower than you hoped. Still, somehow somebody gets it in front of a spiker and scores your team a point!');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          } else {
            scene.img('images/pc/activities/volleyball/block/2.mp4');
            ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
            scene.text('You hang back waiting and watching carefully in case the enemy manages to block your team\'s attack.');
            scene.text('And a good thing that you did. Your opponents manage to get up a block in time and the ball bounces right off it, coming back towards your side of the court. You quickly move in, bumping it back into the air.');
            scene.text('Unfortunately, it goes right back over the net and your opponents spike it straight back down, scoring a point against you.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          }
        } else {
          scene.img('images/pc/activities/volleyball/receive/dive2.jpg');
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          scene.text('You hang back waiting and watching carefully in case the enemy manages to block your team\'s attack.');
          scene.text('And unfortunately, they do. Perfectly. You and some of the other girls dive for the ball as it bounces off the block, but not one of you get a hand on the ball before it touches the ground, and it costs you a point.');
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterReceiveStart(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/pc/activities/volleyball/wait${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  scene.text('You and your teammates take your defensive positions.');
  scene.text('This is the first point of the game… Whoever wins this will have a morale boost right off the bat, could set the flow for the rest of the game…');
  scene.text('<i>Pressure\'s on…</i>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/pc/activities/volleyball/receive/dive2.jpg');
    scene.text('The serve comes up and flies over the net, directly towards you!');
    scene.actions([
      { label: 'Receive!', handler: (st: GameState) => {
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
    if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) > ((st as any).vballVars ?? 0)?.['opp_att_result'] + 20) {
      scene.img('images/pc/activities/volleyball/receive/1.mp4');
      scene.text('You lunge forward, moving directly into the path of the ball. It bounces off your forearms high into the air and it\'s a perfect opportunity for your team to counter attack.');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlockFollow(s, scene); (st as any).locArgs = __savedLocArgs; }
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpike2(s, scene); (st as any).locArgs = __savedLocArgs; }
    } else {
      if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
          scene.img('images/pc/activities/volleyball/receive/3.jpg');
          scene.text('You lunge forward arm outstretched and just somehow barely get your arms under it before it flies past you. The force of the serve knocks you onto your ass, but somehow you still manage to get it up in the air.');
          scene.text('Your team rallies from your reception and immediately manages to score! They grab you in a group hug, cheering for you.');
          scene.text('<i>The first point is ours!</i>');
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        } else {
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          scene.img('images/pc/activities/volleyball/receive/3.jpg');
          scene.text('You lunge forward arm outstretched and just somehow barely get your arms under it before it flies past you. The force of the serve knocks you onto your ass, but somehow you still manage to get it up in the air.');
          scene.text('Unfortunately, it was all for nothing. With such a shakey reception, your team can\'t get an attack out of it, forcing them to bump it over the net. The following attack smashes past all of you and you\'re forced to give up the first point of the match.');
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      } else {
        if (((st as any).vballVars ?? 0)?.['service'] === 1) {
          ((st as any).vballVars = (st as any).vballVars ?? {})['service'] = 0;
        }
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
        scene.img('images/pc/activities/volleyball/receive/4.jpg');
        scene.text('You lunge forward arm outstretched but the serve is too powerful for you. It smashes into your arms before flying past you and your teammates, not one of you able to do a thing as it bounces out of your reach.');
        scene.text('"No worries, no worries," your teammates all say to each other around you, trying to rally back from losing the first point.');
        scene.actions([
          { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterReceive(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Dig to receive (bump)', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
    ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_result'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['opp_attack'] ?? 0) - (((st as any).vballVars ?? {})?.['opp_att_penalty'] ?? 0);
    if (((st as any).vballVars ?? 0)?.['opp_att_result'] < ((st as any).vballVars ?? 0)?.['team_defense']) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.img(`images/pc/activities/volleyball/receive/${(Math.floor(Math.random() * 3) + 1)}_win.jpg`);
      scene.text('You\'re fully prepared to receive the ball but it proves unnecessary when your teammates on the front line jump up to block the shot.');
      scene.text('You cheer, congratulating your comrades for managing to score another point.');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result'] + 20) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
        scene.img('images/pc/activities/volleyball/receive/1.mp4');
        scene.text('Your opponents jump up for their spike and you read their movements perfectly, moving directly into the path of the ball. It bounces off your forearms high into the air and it\'s a perfect opportunity for your team to counter attack.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlockFollow(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpike2(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
            scene.img('images/pc/activities/volleyball/receive/dive1.jpg');
            scene.text('Your opponents catch your team off guard, spiking the ball into the perfect hole in your defenses. You dive for the ball, arm outstretched and just somehow barely get your hand under it before it touches the floor.');
            scene.text('Your team rallies from your dive and even manage to score off of it! They grab you in a group hug, cheering for you and your miraculous save.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          } else {
            { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
            ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
            scene.img('images/pc/activities/volleyball/receive/dive1.jpg');
            scene.text('Your opponents catch your team off guard, spiking the ball into the perfect hole in your defenses. You dive for the ball, arm outstretched and just somehow barely get your hand under it before it touches the floor.');
            scene.text('Unfortunately, it was all for nothing. Bouncing off your hand, it\'s too low for your team and they have to send it over the net without a proper attack before your opponents immediately spike it right back.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          }
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
          if (((st as any).vballVars ?? 0)?.['service'] === 1) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['service'] = 0;
          }
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          scene.img('images/pc/activities/volleyball/receive/dive2.jpg');
          scene.text('Your opponents smash a spike over the net.');
          scene.text('The team dives for the ball but not a single one of you can get a hand on it, a clean point won for your opponents.');
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterReceive2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Receive the spike', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
    ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_result'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['opp_attack'] ?? 0) - (((st as any).vballVars ?? {})?.['opp_att_penalty'] ?? 0);
    if (((st as any).vballVars ?? 0)?.['opp_att_result'] < ((st as any).vballVars ?? 0)?.['team_defense']) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.img(`images/pc/activities/volleyball/block/${(Math.floor(Math.random() * 3) + 1)}_win.jpg`);
      scene.text('Shaken by your serve, they barely manage to get it up to spike, at which point your team is already in position to jump right up in front of it to block, totally shutting them out.');
      scene.text('Your teammates cheer from the bench as you score another point!');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result'] + 20) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
        scene.img('images/pc/activities/volleyball/block/1.mp4');
        scene.text('Obviously put off balance by your serve, you read their movements perfectly, moving directly into the path of the ball. It bounces off your forearms high into the air and it\'s a perfect opportunity for your team to counter attack.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlockFollow(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpike(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
            scene.img('images/pc/activities/volleyball/receive/dive1.jpg');
            scene.text('Your opponents catch your team off guard, spiking the ball into the perfect hole in your defenses. You dive for the ball, arm outstretched and just somehow barely get your hand under it before it touches the floor.');
            scene.text('Your team rallies from your dive and even manage to score off of it! They grab you in a group hug, cheering for you and your miraculous save.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          } else {
            ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
            scene.img('images/pc/activities/volleyball/receive/dive1.jpg');
            scene.text('Your opponents catch your team off guard, spiking the ball into the perfect hole in your defenses. You dive for the ball, arm outstretched and just somehow barely get your hand under it before it touches the floor.');
            scene.text('Unfortunately, it was all for nothing. Bouncing off your hand, it\'s too low for your team and they have to send it over the net without a proper attack before your opponents immediately spike it right back.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          }
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          if (((st as any).vballVars ?? 0)?.['service'] === 1) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['service'] = 0;
          }
          scene.img('images/pc/activities/volleyball/receive/dive2.jpg');
          scene.text('Your opponents smash a spike over the net.');
          scene.text('The team dives for the ball but not a single one of you can get a hand on it, a clean point won for your opponents.');
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterReceive3(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Receive the spike', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
    ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_result'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['opp_attack'] ?? 0) - (((st as any).vballVars ?? {})?.['opp_att_penalty'] ?? 0);
    if (((st as any).vballVars ?? 0)?.['opp_att_result'] < ((st as any).vballVars ?? 0)?.['team_defense']) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.img(`images/pc/activities/volleyball/block/${(Math.floor(Math.random() * 3) + 1)}_win.jpg`);
      scene.text('Despite how well they did receiving the ball, by the time they get it up to spike your team is already in position to jump right up in front of it to block, totally shutting them out.');
      scene.text('Your teammates cheer from the bench as you score another point!');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result'] + 20) {
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
        scene.img('images/pc/activities/volleyball/receive/1.mp4');
        scene.text('Despite how well they did receiving the ball, you read their movements perfectly, moving directly into the path of the ball. It bounces off your forearms high into the air and it\'s a perfect opportunity for your team to counter attack.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlockFollow(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterSpike2(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if ((Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_rec ?? 0) - 20 + 1)) + (20)) - ((st as any).vballVars ?? 0)?.['exhaust'] > ((st as any).vballVars ?? 0)?.['opp_att_result']) {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
            scene.img('images/pc/activities/volleyball/receive/dive1.jpg');
            scene.text('Your opponents catch your team off guard, spiking the ball into the perfect hole in your defenses. You dive for the ball, arm outstretched and just somehow barely get your hand under it before it touches the floor.');
            scene.text('Your team rallies from your dive and even manage to score off of it! They grab you in a group hug, cheering for you and your miraculous save.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          } else {
            ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
            scene.img('images/pc/activities/volleyball/receive/dive1.jpg');
            scene.text('Your opponents catch your team off guard, spiking the ball into the perfect hole in your defenses. You dive for the ball, arm outstretched and just somehow barely get your hand under it before it touches the floor.');
            scene.text('Unfortunately, it was all for nothing. Bouncing off your hand, it\'s too low for your team and they have to send it over the net without a proper attack before your opponents immediately spike it right back.');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          }
        } else {
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceiveStats(s, scene); (st as any).locArgs = __savedLocArgs; }
          if (((st as any).vballVars ?? 0)?.['service'] === 1) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['service'] = 0;
          }
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          scene.img('images/pc/activities/volleyball/receive/dive2.jpg');
          scene.text('Your opponents smash a spike over the net.');
          scene.text('The team dives for the ball but not a single one of you can get a hand on it, a clean point won for your opponents.');
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterServeStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
  ((s as any).vballVars = (s as any).vballVars ?? {})['service'] = 1;
  ((s as any).vballVars = (s as any).vballVars ?? {})['serve'] = (Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((s as any).pcs_vball_serve ?? 0) - 20 + 1)) + (20)) - (((s as any).vballVars ?? {})?.['exhaust'] ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 3);
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust'] = ((s as any).vballVars['exhaust'] ?? 0) + (((s as any).vballVars ?? 0)?.['exhaust_temp']);
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((((s as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
  scene.img('images/pc/activities/volleyball/serve/pre.jpg');
  scene.text('You exhale slowly as you hold the ball in your hands.');
  scene.text('This is the first point of the game. How this goes could possibly determine the flow of the rest of the game…');
  scene.text('<i>Pressure\'s on…</i>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Serve the ball', handler: (st: GameState) => {
    if (((st as any).pcs_vball_serve ?? 0) < 20) {
      scene.img('images/pc/activities/volleyball/serve/jump.jpg');
    } else {
      scene.img('images/pc/activities/volleyball/serve/over.jpg');
    }
    if (((st as any).vballVars ?? 0)?.['serve'] > ((st as any).vballVars ?? 0)?.['opp_defense'] + 20) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.text('Your hand whips forward, making perfect contact with the ball which soars forward over the net and straight past your opponents defenders. It bounces off the court with a thud and your team cheers with glee.');
      scene.text('Service ace! For the first point of the game!');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if (((st as any).vballVars ?? 0)?.['serve'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_penalty'] = ((st as any).vballVars['opp_att_penalty'] ?? 0) + (20);
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_result'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['opp_attack'] ?? 0) - (((st as any).vballVars ?? {})?.['opp_att_penalty'] ?? 0);
        scene.text('Your hand whips forward, slapping into the ball which soars forward over the net. The defenders manage to get a hand on the ball, but your spike was powerful enough that it wasn\'t a good reception.');
        scene.text('Despite that, they still manage to get the ball up and it looks like they\'ll manage to get in an attack. You rush to a defensive position, preparing for if they manage to get past the block.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive2(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).vballVars ?? 0)?.['serve'] > ((st as any).vballVars ?? 0)?.['opp_defense'] - 20) {
          scene.text('Your hand whips forward, slapping into the ball which soars forward over the net. The defenders were ready for you and bump the ball high into the air. It looks like they\'re going to get a good opportunity to spike. Quickly, you get into your own defensive position and prepare to receive the ball.');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive3(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          if (((st as any).vballVars ?? 0)?.['service'] === 1) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['service'] = 0;
          }
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('Your hand whips forward, slapping into the ball which soars forward and directly into the net.');
            scene.text('<i>God fucking damn it! A fucking net ball?! For the first point of the game?!</i>');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          } else {
            scene.text('Your hand whips forward, slapping into the ball which soars forward and right out of bounds of the court. You hiss as you realize your serve just cost your team a point.');
            scene.text('<i>God fucking damn it! An out of bounds serve?! For the first point of the game?!</i>');
            scene.actions([
              { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
            ]);
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterServe(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'sweat', 'add', (Math.floor(Math.random() * 3) + 3));
  ((s as any).vballVars = (s as any).vballVars ?? {})['serve'] = (Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((s as any).pcs_vball_serve ?? 0) - 20 + 1)) + (20)) - (((s as any).vballVars ?? {})?.['exhaust'] ?? 0);
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 3);
  ((s as any).vballVars = (s as any).vballVars ?? {})['exhaust'] = ((s as any).vballVars['exhaust'] ?? 0) + (((s as any).vballVars ?? 0)?.['exhaust_temp']);
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - ((((s as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
  scene.img('images/pc/activities/volleyball/serve/pre.jpg');
  if (((s as any).vballVars ?? 0)?.['service'] === 1) {
    scene.text('A teammate throws the ball back to you. You close your eyes, going through your pre-serve rhythm.');
    scene.text('"One more point!" your team shouts at you from the bench.');
    scene.text('Opening your eyes, you focus on the spot you intend to aim at. The whistle blows and you toss throw the ball into the air and run forward, jumping up after it.');
  } else {
    ((s as any).vballVars = (s as any).vballVars ?? {})['service'] = 1;
    scene.text('A teammate throws the ball to you. Your turn to serve.');
    scene.text('You close your eyes, going through your pre-serve rhythm. Opening them, you focus on the spot you intend to aim at. The whistle blows and you toss throw the ball into the air and run forward, jumping up after it.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Serve the ball', handler: (st: GameState) => {
    if (((st as any).pcs_vball_serve ?? 0) < 20) {
      scene.img('images/pc/activities/volleyball/serve/jump.jpg');
    } else {
      scene.img('images/pc/activities/volleyball/serve/over.jpg');
    }
    if (((st as any).vballVars ?? 0)?.['serve'] > ((st as any).vballVars ?? 0)?.['opp_defense'] + 20) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.text('Your hand whips forward, making perfect contact with the ball which soars forward over the net and straight past your opponents defenders. It bounces off the court with a thud and your team cheers with glee.');
      scene.text('Service ace!');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if (((st as any).vballVars ?? 0)?.['serve'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_penalty'] = ((st as any).vballVars['opp_att_penalty'] ?? 0) + (20);
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_att_result'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['opp_attack'] ?? 0) - (((st as any).vballVars ?? {})?.['opp_att_penalty'] ?? 0);
        scene.text('Your hand whips forward, slapping into the ball which soars forward over the net. The defenders manage to get a hand on the ball, but your spike was powerful enough that it wasn\'t a good reception.');
        scene.text('Despite that, they still manage to get the ball up and it looks like they\'ll manage to get in an attack. You rush to a defensive position, preparing for if they manage to get past the block.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive2(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        if (((st as any).vballVars ?? 0)?.['serve'] > ((st as any).vballVars ?? 0)?.['opp_defense'] - 20) {
          scene.text('Your hand whips forward, slapping into the ball which soars forward over the net. The defenders were ready for you and bump the ball high into the air. It looks like they\'re going to get a good opportunity to spike. Quickly, you get into your own defensive position and prepare to receive the ball.');
          { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive3(s, scene); (st as any).locArgs = __savedLocArgs; }
        } else {
          ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
          if (((st as any).vballVars ?? 0)?.['service'] === 1) {
            ((st as any).vballVars = (st as any).vballVars ?? {})['service'] = 0;
          }
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.text('Your hand whips forward, slapping into the ball which soars forward and directly into the net. You hiss as you realize your serve just cost your team a point.');
          } else {
            scene.text('Your hand whips forward, slapping into the ball which soars forward and right out of bounds of the court. You hiss as you realize your serve just cost your team a point.');
          }
          if (((st as any).pcs_vball_serve ?? 0) < 35) {
            scene.text('<i>Man, you really need to work on your serves…</i>');
          }
          scene.actions([
            { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
          ]);
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterSet(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Prepare to set', handler: (st: GameState) => {
    scene.img(`images/pc/activities/volleyball/set/${(Math.floor(Math.random() * 3) + 1)}.jpg`);
    ((st as any).vballVars = (st as any).vballVars ?? {})['set'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['team_attack'] ?? 0) + (Math.floor(Math.random() * (((st as any).pcs_vball_set ?? 0) - 20 + 1)) + (20)) - (((st as any).vballVars ?? {})?.['exhaust'] ?? 0);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 2);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust'] = ((st as any).vballVars['exhaust'] ?? 0) + (((st as any).vballVars ?? 0)?.['exhaust_temp']);
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - ((((st as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
    scene.text('You quickly get under the ball and toss it towards one of your teammates, setting them up to spike.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).vballVars ?? 0)?.['set'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
      scene.img('images/pc/activities/volleyball/spike/1.mp4');
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.text('The ball soars from your hands over the court to your teammate as she jumps up into the air. Your toss is absolutely perfect and allows her to nail a straight right past your opponents.');
      scene.text('She pumps her fist in victory and you and your teammates cheer her on!');
      scene.text('"Nice kill! Nice kill!"');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      scene.img(`images/pc/activities/volleyball/block/${(Math.floor(Math.random() * 3) + 1)}_win.jpg`);
      ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
      scene.text('The ball soars from your hands over the court to your teammate as she jumps up into the air. Unfortunately, your opponents get a read on you and jump up in time to shut down your teammate\'s spike.');
      scene.text('She screams in frustration as your teammates try to console you both.');
      scene.text('"No worries! No worries! Let\'s get the next one!"');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpike(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go for a spike', handler: (st: GameState) => {
    ((st as any).vballVars = (st as any).vballVars ?? {})['spike'] = (Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_spike ?? 0) - 20 + 1)) + (20)) - (((st as any).vballVars ?? {})?.['exhaust'] ?? 0);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 2);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust'] = ((st as any).vballVars['exhaust'] ?? 0) + (((st as any).vballVars ?? 0)?.['exhaust_temp']);
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - ((((st as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
    scene.img(`images/pc/activities/volleyball/spike/run/${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('You take a step back before running forward, bending your knees and throwing your arms back, preparing to vault into a jump to spike the ball.');
    if (((st as any).vballVars ?? 0)?.['position'] !== '') {
      // TODO-QSP: dynamic text: "<<$vballVars[''position'']>>!" you call, leaping into the air.
      scene.text(`"${((st as any).vballVars ?? 0)?.['position'] ?? ''}!" you call, leaping into the air.`);
    }
    scene.actions([
      { label: 'Spike it!', handler: (st: GameState) => {
    if (((st as any).vballVars ?? 0)?.['spike'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.img('images/pc/activities/volleyball/spike/1.mp4');
      scene.text('You throw your hand forward, smashing the ball over the net, right past your opponents, and into the court on the other side.');
      scene.text('Another point! Your team cheers for you.');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if (((st as any).vballVars ?? 0)?.['spike'] > ((st as any).vballVars ?? 0)?.['opp_defense'] - 20) {
        scene.img(`images/pc/activities/volleyball/wait${(Math.floor(Math.random() * 2) + 1)}.jpg`);
        scene.text('Your opponents manage to cleanly receive your spike even though it got past the block. You can see they\'re already getting ready to counterattack back and you quickly need to decide what your next move is.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlock(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
        scene.img(`images/pc/activities/volleyball/block/${(Math.floor(Math.random() * 3) + 1)}_win.jpg`);
        scene.text('You throw your hand forward, smashing the ball over the net… and straight into the waiting block of your opponents.');
        scene.text('The ball bounces off their hands and straight into the court on your side of the net, costing your team a point.');
        scene.actions([
          { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpike2(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go for a spike', handler: (st: GameState) => {
    ((st as any).vballVars = (st as any).vballVars ?? {})['spike'] = (Math.floor(Math.random() * 75) + 1) + (Math.floor(Math.random() * (((st as any).pcs_vball_spike ?? 0) - 20 + 1)) + (20)) - (((st as any).vballVars ?? {})?.['exhaust'] ?? 0);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 2);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust'] = ((st as any).vballVars['exhaust'] ?? 0) + (((st as any).vballVars ?? 0)?.['exhaust_temp']);
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - ((((st as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
    scene.img(`images/pc/activities/volleyball/spike/run/${(Math.floor(Math.random() * 2) + 1)}.jpg`);
    scene.text('You decide to go on the offense, running forward, bending your knees and throwing your arms back, preparing to spike the ball from the back line.');
    scene.actions([
      { label: 'Spike it!', handler: (st: GameState) => {
    if (((st as any).vballVars ?? 0)?.['spike'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.img('images/pc/activities/volleyball/spike/1.mp4');
      scene.text('You throw your hand forward, smashing the ball over the net and into the court on the other side.');
      scene.text('Another point! Your team cheers for you.');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if (((st as any).vballVars ?? 0)?.['spike'] > ((st as any).vballVars ?? 0)?.['opp_defense'] - 20) {
        scene.img(`images/pc/activities/volleyball/wait${(Math.floor(Math.random() * 2) + 1)}.jpg`);
        scene.text('Your opponents manage to cleanly receive your spike even though it got past the block. You can see they\'re already getting ready to counterattack back and you quickly need to decide what your next move is.');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlock(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
        scene.img(`images/pc/activities/volleyball/receive/${(Math.floor(Math.random() * 3) + 1)}_win.jpg`);
        scene.text('You throw your hand forward, smashing the ball over the net… and straight into the waiting block of your opponents.');
        scene.text('The ball bounces off their hands and straight into the court on your side of the net, costing your team a point.');
        scene.actions([
          { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSpikeFake(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Fake a spike, provide distraction', handler: (st: GameState) => {
    ((st as any).vballVars = (st as any).vballVars ?? {})['spike'] = (Math.floor(Math.random() * 50) + 1) + (((st as any).vballVars ?? {})?.['team_attack'] ?? 0) + (Math.floor(Math.random() * (((st as any).pcs_vball_spike ?? 0) - 20 + 1)) + (20)) - (((st as any).vballVars ?? {})?.['exhaust'] ?? 0);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust_temp'] = (Math.floor(Math.random() * 3) + 2);
    ((st as any).vballVars = (st as any).vballVars ?? {})['exhaust'] = ((st as any).vballVars['exhaust'] ?? 0) + (((st as any).vballVars ?? 0)?.['exhaust_temp']);
    (st as any).pcs_stam = ((st as any).pcs_stam ?? 0) - ((((st as any).vballVars ?? {})?.['exhaust_temp'] ?? 0) * 5);
    scene.text('You decide to try and distract the enemy and draw their attention away from the real spikers.');
    scene.actions([
      { label: 'Jump!', handler: (st: GameState) => {
    if (((st as any).vballVars ?? 0)?.['spike'] > ((st as any).vballVars ?? 0)?.['opp_defense']) {
      ((st as any).vballVars = (st as any).vballVars ?? {})['team_points'] = ((st as any).vballVars['team_points'] ?? 0) + (1);
      scene.img('images/pc/activities/volleyball/spike/2.mp4');
      scene.text('You run forward as if the ball really were coming to you and fling yourself into the empty air. Your fake is so effective that it causes defenders to jump towards you even as the ball to a completely different person on your team, who spikes it straight into the court.');
      scene.text('Another point! You and your team cheer for the girl who scored the it.');
      scene.text('"Nice kill!"');
      scene.actions([
        { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
      ]);
    } else {
      if (((st as any).vballVars ?? 0)?.['spike'] > ((st as any).vballVars ?? 0)?.['opp_defense'] - 20) {
        scene.img(`images/pc/activities/volleyball/wait${(Math.floor(Math.random() * 2) + 1)}.jpg`);
        scene.text('You fling yourself into the empty air, fully taking a spiker\'s form as if the ball really were coming to you. Your jump manages to fool one of the defenders and your teammate spikes it past the others, but they still manage to get a good receive in, bumping the ball high into the air over their side.');
        scene.text('The ball is coming back! How are you going to try to stop it?');
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterBlock(s, scene); (st as any).locArgs = __savedLocArgs; }
        { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterReceive(s, scene); (st as any).locArgs = __savedLocArgs; }
      } else {
        ((st as any).vballVars = (st as any).vballVars ?? {})['opp_points'] = ((st as any).vballVars['opp_points'] ?? 0) + (1);
        scene.img('images/pc/activities/volleyball/receive/3_win.jpg');
        scene.text('You fling yourself into the empty air, fully taking a spiker\'s form as if the ball really were coming to you. But it doesn\'t fool a single person on the enemy team, who all jump up in front of the girl who was really getting the ball, totally blocking out her spike.');
        scene.text('The ball bounces off their hands and straight into the court on your side of the net, costing your team a point.');
        scene.actions([
          { label: 'Continue', goto: ['volleyball_ev', 'point_check'] },
        ]);
      }
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVictory(s: GameState, scene: SceneBuilder): void {
  scene.img(`images/pc/activities/volleyball/match/victory${(Math.floor(Math.random() * 2) + 1)}.jpg`);
  ((s as any).vballVars = (s as any).vballVars ?? {})['result'] = 1;
  ((s as any).vballVars = (s as any).vballVars ?? {})['wins'] = ((s as any).vballVars['wins'] ?? 0) + (1);
  // TODO-QSP: $vballVars['match_result_<<vballVars[''opponent'']>>'] = 'victory'
  scene.text('Victory!');
  // TODO-QSP: dynamic text: The match is over, the scoreboard reading 25 to <<vballVars[''opp_points''] * 5 ...
  scene.text(`The match is over, the scoreboard reading 25 to ${(((s as any).vballVars ?? {})?.['opp_points'] ?? 0) * 5 + (Math.floor(Math.random() * 5) + 0)}. You won!`);
  scene.text('"We did it!" you cheer, the whole team gathering together for a team hug.');
  scene.text('"Alright, good job girls!" Coach Mikhail says, congratulating you. "Let\'s pack up now. Make sure we leave nothing behind. You can all shower back at the community centre."');
  scene.text('"Yes coach!" the team replies in unison before quickly dispersing to carry out his orders.');
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 61) + 0));
  qspCall(s, 'exercise', 'tier2', 40, 'vball');
  qspCall(s, 'exercise', 'tier2', 20, 'vball', 'stren', 'agil', 'vital', 'react', 'prcptn');
  qspCall(s, 'fame', 'pav', 'volleyball', 'medium');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pack up and drive back', goto: ['volleyball_ev', 'drive_back'] },
  ]);
  scene.build();
}

function enterDefeat(s: GameState, scene: SceneBuilder): void {
  scene.img('images/pc/activities/volleyball/match/defeat1.jpg');
  // TODO-QSP: $vballVars['match_result_<<vballVars[''opponent'']>>'] = 'defeat'
  ((s as any).vballVars = (s as any).vballVars ?? {})['result'] = (-1);
  ((s as any).vballVars = (s as any).vballVars ?? {})['losses'] = ((s as any).vballVars['losses'] ?? 0) + (1);
  // TODO-QSP: dynamic text: The match is over, the scoreboard reading <<(vballVars[''team_points''] * 5) + r...
  scene.text(`The match is over, the scoreboard reading ${((((s as any).vballVars ?? {})?.['team_points'] ?? 0) * 5) + (Math.floor(Math.random() * 5) + 0)} to 25. Your team… lost.`);
  scene.text('Soft sniffles come from the team as you walk off the court, some girls wiping tears from their eyes even as others try to hold back sobs.');
  scene.text('"It was a good hussle out there girls," Coach Mikhail says. "We\'ll talk about what went wrong and what can improve later. We\'ll get \'em next time. But right now, we need to pack up. Make sure we leave nothing behind. You can all shower back at the community centre."');
  scene.text('"Yes coach," the team dejectedly, sluggishly dispersing to carry out his orders.');
  (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 61) + 0));
  qspCall(s, 'exercise', 'tier2', 40, 'vball');
  qspCall(s, 'exercise', 'tier2', 20, 'vball', 'stren', 'agil', 'vital', 'react', 'prcptn');
  qspCall(s, 'fame', 'pav', 'volleyball', 'small');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pack up and drive back', goto: ['volleyball_ev', 'drive_back'] },
  ]);
  scene.build();
}

function enterDriveBack(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/community/dk.jpg');
  scene.text('Your team piles onto the bus and 20 minutes later, you are all back at the community centre.');
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  if (((s as any).vballVars ?? 0)?.['coachsex'] >= 6  ||  ((s as any).npc_rel ?? 0)?.['A69'] >= 90) {
    if (((s as any).vballVars ?? 0)?.['result'] === -1) {
      scene.actions([
        { label: 'Go to Mikhail for comfort (sex)', goto: ['volley_coach', 'comfort_sex1'] },
      ]);
    } else {
      if (((s as any).vballVars ?? 0)?.['result'] === 1) {
        scene.actions([
          { label: 'Celebrate with Mikhail (sex)', goto: ['volley_coach', 'victory_sex1'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['gdksport', 'start'] },
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
    case 'warm_ups':
      enterWarmUps(s, scene);
      break;
    case 'point_check':
      enterPointCheck(s, scene);
      break;
    case 'randomizer':
      enterRandomizer(s, scene);
      break;
    case 'free_ball':
      enterFreeBall(s, scene);
      break;
    case 'opp_spike':
      enterOppSpike(s, scene);
      break;
    case 'collapse':
      enterCollapse(s, scene);
      break;
    case 'receive_stats':
      enterReceiveStats(s, scene);
      break;
    case 'block':
      enterBlock(s, scene);
      break;
    case 'block1_win':
      enterBlock1Win(s, scene);
      break;
    case 'block1_fail':
      enterBlock1Fail(s, scene);
      break;
    case 'block2_win':
      enterBlock2Win(s, scene);
      break;
    case 'block2_fail':
      enterBlock2Fail(s, scene);
      break;
    case 'block3_win':
      enterBlock3Win(s, scene);
      break;
    case 'block3_fail':
      enterBlock3Fail(s, scene);
      break;
    case 'block_follow':
      enterBlockFollow(s, scene);
      break;
    case 'receive_start':
      enterReceiveStart(s, scene);
      break;
    case 'receive':
      enterReceive(s, scene);
      break;
    case 'receive2':
      enterReceive2(s, scene);
      break;
    case 'receive3':
      enterReceive3(s, scene);
      break;
    case 'serve_start':
      enterServeStart(s, scene);
      break;
    case 'serve':
      enterServe(s, scene);
      break;
    case 'set':
      enterSet(s, scene);
      break;
    case 'spike':
      enterSpike(s, scene);
      break;
    case 'spike2':
      enterSpike2(s, scene);
      break;
    case 'spike_fake':
      enterSpikeFake(s, scene);
      break;
    case 'victory':
      enterVictory(s, scene);
      break;
    case 'defeat':
      enterDefeat(s, scene);
      break;
    case 'drive_back':
      enterDriveBack(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const volleyball_ev: LocationDef = {
  name: 'volleyball_ev',
  title: '(/ stamina)',
  region: 'other',
  enter: enter,
};
