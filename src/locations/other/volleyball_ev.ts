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
        if (((s as any).vballVars ?? 0)?.['on_team'] === 1) {
          if (qspFunc(s, 'body_din', 'pregnancyVisibility') === 1) {
            scene.actions([
              { label: 'Practice with volleyball team (2:00)', handler: (st: GameState) => {
    // TODO-QSP: stat['volleyball_day'] = daystart
  }, goto: ['volleyball_ev', 'pregnancy_react'] },
            ]);
          } else {
            if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
              scene.actions([
                { label: 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
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
              if (((s as any).week ?? 0) === 6  &&  ((s as any).vballVars ?? 0)?.['last_match_day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) > 18) {
                // TODO-QSP: dynamic text: As you look around, you don't see anyone from the team. You suddenly realize tha...
                scene.text('As you look around, you don\'t see anyone from the team. You suddenly realize that there was a tournament game today and you were supposed to be here at \' + $func(\'time\', \'get_time_string\', 18, 0) + \'! You missed the bus and the coach is going to be furious!');
                qspCall(s, 'npc_relationship', 'modify', 'A69', (-20));
                (s as any).vballVars['last_match_day'] = ((s as any).daystart ?? 0);
                scene.actions([
                  { label: 'Back', goto: ['gdksport', 'start'] },
                ]);
              } else {
                if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
                  scene.actions([
                    { label: 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_stam>>/<<...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You are too exhausted to do this. ...
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
                  scene.actions([
                    { label: 'Practice with volleyball team (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
                  ]);
                }
              }
              scene.actions([
                { label: 'Play in Tournament (4:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
              ]);
            }
          }
        }
        scene.actions([
          { label: 'Take a volleyball lesson. You have <<vballVars[\'lessons_remaining\']>> lessons remaining (2:00)  [+$func(\'wrap\', \'v_neg\', \'(<<pcs_energy>>/...]', handler: (st: GameState) => {
    // TODO-QSP: $func('wrap', 'neg', '<br>You feel too hungry to do this.')
  } },
        ]);
      }
    }
  }
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
