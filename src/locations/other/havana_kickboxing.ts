import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  qspCall(s, 'kickboxing_funcs', 'sash_advancement');
  qspCall(s, 'themes', 'indoors');
  scene.text('<center><b>Kickboxing Gym</b></center>');
  scene.img('images/locations/city/citycenter/gym/kickboxing/kik.jpg');
  scene.text('This section is dominated by the ring itself, the only equipment that can\'t be easily moved.');
  scene.text('Around it are various punching bags of different sizes and weights and a few coaches with practice pads.');
  scene.text('You can try your luck in a fight here on Saturdays, but safety concerns limit everyone to a maximum of 1 bout per week.');
  if (((s as any).pcs_stam ?? 0) < ((s as any).stammax ?? 0) / 5) {
    scene.text('You\'re too fatigued to do any more exercises right now.');
  } else {
    if (((s as any).pcs_energy ?? 0) < 20) {
      scene.text('You\'re too hungry to do anymore exercises right now.');
    } else {
      if (((s as any).pcs_hydra ?? 0) < 20) {
        scene.text('You\'re too thirsty to do anymore exercises right now.');
      } else {
        if (((s as any).week ?? 0) === 6  &&  ((s as any).kickbox ?? 0)?.['amateur_fight_day'] !== ((s as any).daystart ?? 0)) {
          scene.text('You can take part in an amateur fight.');
          scene.actions([
            { label: 'Amateur fight', handler: (st: GameState) => {
    ((st as any).kickbox = (st as any).kickbox ?? {})['amateur_fight_day'] = ((st as any).daystart ?? 0);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(st, 'kickboxing_funcs', 'init_fight_vars');
    ((st as any).kickbox = (st as any).kickbox ?? {})['opponent'] = (((st as any).kickbox ?? {})?.['sash'] ?? 0) + ((Math.floor(Math.random() * (5 - (-2) + 1)) + ((-2))) / 2);
    ((st as any).temp_kickboxVars = (st as any).temp_kickboxVars ?? {})['fight_type'] = 1;
    qspCall(st, 'kickboxing_funcs', 'generate_opponent', 'amateur_fight', (((st as any).kickbox ?? 0)?.['opponent']));
    qspGoto(st, 'havana_kickboxing', 'match');
  } },
          ]);
        }
        scene.actions([
          { label: 'Work on your jabs', handler: (st: GameState) => {
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    qspCall(st, 'exercise', 'tier3', 30, 'jab', 'react');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your jabs on the speed bag and double-end bag. These strikes are not very powerful, but they\'re fast.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Work on your heavy punches', handler: (st: GameState) => {
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    qspCall(st, 'exercise', 'tier3', 30, 'stren', 'punch');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your power punches on the heavy bag. These are high impact and powerful, but are hard to land on the target.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Work on your kicking', handler: (st: GameState) => {
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    qspCall(st, 'exercise', 'tier3', 30, 'stren', 'kick');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your kicks on a kickboxing bag. These are very powerful and are able to cut down an opponent, but are very difficult to land.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Work on defence', handler: (st: GameState) => {
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    qspCall(st, 'exercise', 'tier3', 30, 'def', 'agil');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your defensive movements.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Sparring (training bout in the ring)', handler: (st: GameState) => {
    scene.text('You need to choose a partner for sparring');
    if (((st as any).pcs_inhib ?? 0) < 30) {
      (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 1));
    }
    scene.actions([
      { label: 'Pick a random partner', handler: (st: GameState) => {
    (st as any).abonement = ((st as any).abonement ?? 0) - (1);
    qspCall(st, 'mood', 'raise', 'tiny');
    qspCall(st, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(st, 'kickboxing_funcs', 'init_fight_vars');
    ((st as any).temp_kickboxVars = (st as any).temp_kickboxVars ?? {})['fight_type'] = 0;
    qspCall(st, 'kickboxing_funcs', 'generate_opponent', 'spar');
    qspGoto(st, 'havana_kickboxing', 'match');
  } },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the changing room', goto: ['havana_kickboxing', 'leave'] },
  ]);
  scene.build();
}

function enterMatch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 0) {
    scene.text('<b><font color = red>You lost by TKO</font></b>');
    qspGoto(s, 'havana_kickboxing', 'end', 'lossKO');
  } else {
    if (((s as any).temp_kickboxVars ?? 0)?.['npc_health'] <= 0) {
      // TODO-QSP: dynamic text: <b><font color = green><<$boydesc>> lost by TKO</font></b>
      scene.text(`<b><font color = green>${((s as any).boydesc ?? '')} lost by TKO</font></b>`);
      qspGoto(s, 'havana_kickboxing', 'end', 'winKO');
    }
  }
  if (((s as any).temp_kickboxVars ?? 0)?.['round'] >= 1) {
    // TODO-QSP: dynamic text: <center><b>Round <<temp_kickboxVars[''round'']>></b></center>
    scene.text(`<center><b>Round ${(((s as any).temp_kickboxVars ?? 0)?.['round'] ?? '')}</b></center>`);
    if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 0) {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    } else {
      scene.img(`images/locations/city/citycenter/gym/kickboxing/ring${(((s as any).temp_kickboxVars ?? 0)?.['round'] ?? '')}.jpg`);
    }
    qspCall(s, 'kickboxing_funcs', 'display_header');
    ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['time'] = ((s as any).temp_kickboxVars['time'] ?? 0) + (1);
    qspCall(s, 'kickboxing_funcs', 'set_initiative');
    if (((s as any).temp_kickboxVars ?? 0)?.['active_init'] === 0) {
      scene.text('You can attack');
      scene.actions([
        { label: 'Fast Jab', handler: (st: GameState) => {
    scene.text('You go for the quick jab and step forward.');
    qspCall(st, 'kickboxing_funcs', 'attack', 'player', 'jab');
    if (((st as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      qspGoto(st, 'havana_kickboxing', 'end', 'winKO');
    }
    qspGoto(st, 'havana_kickboxing', 'sta');
  } },
        { label: 'Power punch', handler: (st: GameState) => {
    scene.text('You attempt a powerful punch.');
    qspCall(st, 'kickboxing_funcs', 'attack', 'player', 'punch');
    if (((st as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      qspGoto(st, 'havana_kickboxing', 'end', 'winKO');
    }
    qspGoto(st, 'havana_kickboxing', 'sta');
  } },
        { label: 'Big kick', handler: (st: GameState) => {
    scene.text('You try a powerful kick.');
    qspCall(st, 'kickboxing_funcs', 'attack', 'player', 'kick');
    if (((st as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      qspGoto(st, 'havana_kickboxing', 'end', 'winKO');
    }
    qspGoto(st, 'havana_kickboxing', 'sta');
  } },
      ]);
    } else {
      scene.text(`${((s as any).boydesc ?? '')} attacks`);
      (s as any).tiprand = (Math.floor(Math.random() * 3) + 0);
      if ((!((s as any).tiprand ?? 0))) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Block ' + String(((s as any).boydesc ?? '') ?? '') + '\'s quick jab', handler: (st: GameState) => {
    scene.text(`${((st as any).boydesc ?? '')} deals a quick jab, stepping forward.`);
    qspCall(st, 'kickboxing_funcs', 'attack', 'enemy', 'jab');
    if (((st as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      qspGoto(st, 'havana_kickboxing', 'end', 'lossKO');
    }
    qspGoto(st, 'havana_kickboxing', 'sta');
  } },
        ]);
      } else {
        if (((s as any).tiprand ?? 0) === 1) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Dodge ' + String(((s as any).boydesc ?? '') ?? '') + '\'s power punch', handler: (st: GameState) => {
    scene.text(`${((st as any).boydesc ?? '')} applies a power punch.`);
    qspCall(st, 'kickboxing_funcs', 'attack', 'enemy', 'punch');
    if (((st as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      qspGoto(st, 'havana_kickboxing', 'end', 'lossKO');
    }
    qspGoto(st, 'havana_kickboxing', 'sta');
  } },
          ]);
        } else {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Dodge ' + String(((s as any).boydesc ?? '') ?? '') + '\'s kick', handler: (st: GameState) => {
    scene.text(`${((st as any).boydesc ?? '')} goes for a kick.`);
    qspCall(st, 'kickboxing_funcs', 'attack', 'enemy', 'kick');
    if (((st as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      qspGoto(st, 'havana_kickboxing', 'end', 'lossKO');
    }
    qspGoto(st, 'havana_kickboxing', 'sta');
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterSta(s: GameState, scene: SceneBuilder): void {
  ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['set_init'] = 0;
  if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 6) {
    ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['time'] = 0;
    // TODO-QSP: dynamic text: The bell rings, indicating the end of round <<temp_kickboxVars[''round'']>>.
    scene.text(`The bell rings, indicating the end of round ${(((s as any).temp_kickboxVars ?? 0)?.['round'] ?? '')}.`);
    ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['round'] = ((s as any).temp_kickboxVars['round'] ?? 0) + (1);
    if (((s as any).temp_kickboxVars ?? 0)?.['round'] <= ((s as any).temp_kickboxVars ?? 0)?.['max_rounds']) {
      scene.actions([
        { label: 'Back to the corner', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_corner.jpg');
    scene.text('You try to rest as best as you can.');
    scene.actions([
      { label: 'Return to the ring', goto: ['havana_kickboxing', 'match'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 0) {
        if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] > ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
          qspGoto(s, 'havana_kickboxing', 'end', 'win');
        } else {
          if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] < ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
            qspGoto(s, 'havana_kickboxing', 'end', 'loss');
          } else {
            if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] === ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
              qspGoto(s, 'havana_kickboxing', 'end', 'draw');
            }
          }
        }
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 1) {
          scene.actions([
            { label: 'Go to the middle of the ring', handler: (st: GameState) => {
    if (((st as any).temp_kickboxVars ?? 0)?.['pcs_points'] > ((st as any).temp_kickboxVars ?? 0)?.['npc_points']) {
      qspGoto(st, 'havana_kickboxing', 'end', 'win');
    } else {
      if (((st as any).temp_kickboxVars ?? 0)?.['pcs_points'] < ((st as any).temp_kickboxVars ?? 0)?.['npc_points']) {
        qspGoto(st, 'havana_kickboxing', 'end', 'loss');
      } else {
        if (((st as any).temp_kickboxVars ?? 0)?.['pcs_points'] === ((st as any).temp_kickboxVars ?? 0)?.['npc_points']) {
          qspGoto(st, 'havana_kickboxing', 'end', 'draw');
        }
      }
    }
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', goto: ['havana_kickboxing', 'match'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) < 10) {
    (s as any).pcs_health = 10;
  }
  ((s as any).temp_kickboxVars = (s as any).temp_kickboxVars ?? {})['result'] = ((s as any).locArgs?.[1] ?? 0);
  if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 0) {
    if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'win') {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_rival.jpg');
      scene.text('The fight is over and your rival comes over to you.');
      scene.text('"Nice hustle, there," she smiles.');
      scene.text('You nod and she turns around and heads to the dressing room.');
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'winKO') {
        scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win_ko.jpg');
        scene.text('The fight is over. You can hear some of the people watching quietly comment that you didn\'t have to knock her out…');
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'loss') {
          scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_rival.jpg');
          scene.text('The fight is over and your rival comes over to you.');
          scene.text('"Keep practicing," she says with a smug grin.');
          scene.text('You nod and she turns around and heads to the dressing room.');
        } else {
          if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'lossKO') {
            scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss_ko.jpg');
            scene.text('Before you know it, you\'re knocked to the floor of the ring, dazed as your vision blurs…');
          } else {
            scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_rival.jpg');
            scene.text('The fight is over and your rival comes over to you.');
            scene.text('"That was pretty close. Good fight."');
            scene.text('You nod and she turns around and heads to the dressing room.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave the ring', goto: ['havana_kickboxing', 'leave'] },
    ]);
  } else {
    if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 1) {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_speaker.jpg');
      scene.text('The referee calls you over. It\'s time for the announcement…');
      scene.actions([
        { label: 'Go to the middle of the ring', handler: (st: GameState) => {
    if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'win') {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win.jpg');
      scene.text('The referee raises your arm. Congratulations! You\'ve won!');
      if (((st as any).kickbox ?? 0)?.['opponent'] === 0) {
        qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 3) + 4));
      } else {
        if (((st as any).kickbox ?? 0)?.['opponent'] === 1) {
          qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 5) + 5));
        } else {
          if (((st as any).kickbox ?? 0)?.['opponent'] === 2) {
            qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 4) + 6));
          } else {
            if (((st as any).kickbox ?? 0)?.['opponent'] === 3) {
              qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 5) + 6));
            } else {
              if (((st as any).kickbox ?? 0)?.['opponent'] === 4) {
                qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 4) + 7));
              } else {
                qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 7) + 7));
              }
            }
          }
        }
      }
      ((st as any).kickbox = (st as any).kickbox ?? {})['amateurWin'] = ((st as any).kickbox['amateurWin'] ?? 0) + (1);
      ((st as any).kickbox = (st as any).kickbox ?? {})['advancement'] = ((st as any).kickbox['advancement'] ?? 0) + (1);
      qspCall(st, 'money', 'earn', 500 + (((st as any).kickbox ?? {})?.['money'] ?? 0));
      (st as any).rikudo = ((st as any).rikudo ?? 0) + (5);
      // TODO-QSP: dynamic text: You''re awarded a cash prize of <<$func(''money'', ''string_profit'', 500 + kick...
      scene.text(`You're awarded a cash prize of ${qspFunc(s, 'money', 'string_profit', 500 + (((st as any).kickbox ?? {})?.['money'] ?? 0))}.`);
      qspCall(st, 'kickboxing_funcs', 'sash_advancement');
    } else {
      if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'winKO') {
        scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win_ko.jpg');
        scene.text('The referee raises your arm. Congratulations! You\'ve won by knockout!');
        qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 3) + 4));
        if (((st as any).kickbox ?? 0)?.['opponent'] === 0) {
          qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 3) + 4));
        } else {
          if (((st as any).kickbox ?? 0)?.['opponent'] === 1) {
            qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 5) + 5));
          } else {
            if (((st as any).kickbox ?? 0)?.['opponent'] === 2) {
              qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 4) + 6));
            } else {
              if (((st as any).kickbox ?? 0)?.['opponent'] === 3) {
                qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 5) + 6));
              } else {
                if (((st as any).kickbox ?? 0)?.['opponent'] === 4) {
                  qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 4) + 7));
                } else {
                  qspCall(st, 'fame', 'city', 'kickboxing', (Math.floor(Math.random() * 7) + 7));
                }
              }
            }
          }
        }
        ((st as any).kickbox = (st as any).kickbox ?? {})['amateurWin'] = ((st as any).kickbox['amateurWin'] ?? 0) + (1);
        ((st as any).kickbox = (st as any).kickbox ?? {})['amateurWinKO'] = ((st as any).kickbox['amateurWinKO'] ?? 0) + (1);
        ((st as any).kickbox = (st as any).kickbox ?? {})['advancement'] = ((st as any).kickbox['advancement'] ?? 0) + (1);
        qspCall(st, 'money', 'earn', 500 + (((st as any).kickbox ?? {})?.['money'] ?? 0));
        (st as any).rikudo = ((st as any).rikudo ?? 0) + (10);
        // TODO-QSP: dynamic text: You''re awarded a cash prize of <<$func(''money'', ''string_profit'', 500 + kick...
        scene.text(`You're awarded a cash prize of ${qspFunc(s, 'money', 'string_profit', 500 + (((st as any).kickbox ?? {})?.['money'] ?? 0))}.`);
        qspCall(st, 'kickboxing_funcs', 'sash_advancement');
      } else {
        if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'loss') {
          scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss.jpg');
          scene.text('The referee raises your opponent\'s arm. You\'ve lost.');
          ((st as any).kickbox = (st as any).kickbox ?? {})['amateurLoss'] = ((st as any).kickbox['amateurLoss'] ?? 0) + (1);
          if (((st as any).kickbox ?? 0)?.['advancement'] > 0) {
            ((st as any).kickbox = (st as any).kickbox ?? {})['advancement'] = ((st as any).kickbox['advancement'] ?? 0) - (1);
          }
        } else {
          if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'lossKO') {
            scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss_ko.jpg');
            scene.text('The room suddenly goes dark around you…');
            ((st as any).kickbox = (st as any).kickbox ?? {})['amateurLoss'] = ((st as any).kickbox['amateurLoss'] ?? 0) + (1);
            ((st as any).kickbox = (st as any).kickbox ?? {})['amateurLossKO'] = ((st as any).kickbox['amateurLossKO'] ?? 0) + (1);
            if (((st as any).kickbox ?? 0)?.['advancement'] > 0) {
              ((st as any).kickbox = (st as any).kickbox ?? {})['advancement'] = ((st as any).kickbox['advancement'] ?? 0) - (1);
            }
          } else {
            scene.text('The referee raises both of your arms. It\'s a draw!');
            ((st as any).kickbox = (st as any).kickbox ?? {})['amateurDraw'] = ((st as any).kickbox['amateurDraw'] ?? 0) + (1);
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave the ring', goto: ['havana_kickboxing', 'leave'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 2) {
        scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_speaker.jpg');
        scene.text('The referee calls you over. It\'s time for the announcement…');
        scene.actions([
          { label: 'Go to the middle of the ring', handler: (st: GameState) => {
    if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'win') {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win.jpg');
      scene.text('The referee raises your arm. Congratulations! You\'ve won!');
      ((st as any).kickbox = (st as any).kickbox ?? {})['proWin'] = ((st as any).kickbox['proWin'] ?? 0) + (1);
      (st as any).rikudo = ((st as any).rikudo ?? 0) + (5);
    } else {
      if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'winKO') {
        scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win_ko.jpg');
        scene.text('The referee raises your arm. Congratulations! You\'ve won by knockout!');
        ((st as any).kickbox = (st as any).kickbox ?? {})['proWin'] = ((st as any).kickbox['proWin'] ?? 0) + (1);
        ((st as any).kickbox = (st as any).kickbox ?? {})['proWinKO'] = ((st as any).kickbox['proWinKO'] ?? 0) + (1);
        (st as any).rikudo = ((st as any).rikudo ?? 0) + (10);
      } else {
        if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'loss') {
          scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss.jpg');
          scene.text('The referee raises your opponent\'s arm. You\'ve lost.');
          ((st as any).kickbox = (st as any).kickbox ?? {})['proLoss'] = ((st as any).kickbox['proLoss'] ?? 0) + (1);
        } else {
          if (((st as any).temp_kickboxVars ?? 0)?.['result'] === 'lossKO') {
            scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss_ko.jpg');
            scene.text('The room suddenly goes dark around you…');
            ((st as any).kickbox = (st as any).kickbox ?? {})['proLoss'] = ((st as any).kickbox['proLoss'] ?? 0) + (1);
            ((st as any).kickbox = (st as any).kickbox ?? {})['proLossKO'] = ((st as any).kickbox['proLossKO'] ?? 0) + (1);
          } else {
            scene.text('The referee raises both of your arms. It\'s a draw!');
            ((st as any).kickbox = (st as any).kickbox ?? {})['proDraw'] = ((st as any).kickbox['proDraw'] ?? 0) + (1);
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave the ring', goto: ['havana_kickboxing', 'leave'] },
    ]);
  } },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  dynamicGoto(s, 'prevLoc', 'prevArg');
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'match':
      enterMatch(s, scene);
      break;
    case 'sta':
      enterSta(s, scene);
      break;
    case 'end':
      enterEnd(s, scene);
      break;
    case 'leave':
      enterLeave(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const havana_kickboxing: LocationDef = {
  name: 'havana_kickboxing',
  title: 'Kickboxing Gym',
  region: 'other',
  enter: enter,
};
