import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

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
    (s as any).kickbox['amateur_fight_day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    (s as any).kickbox['opponent'] = ((s as any).kickbox ?? {})?.['sash'] + (((s as any).rand ?? 0)(-2, 5) / 2);
    (s as any).temp_kickboxVars['fight_type'] = 1;
    // TODO-QSP: gs 'kickboxing_funcs', 'generate_opponent', 'amateur_fight', kickbox['opponent']
  }, goto: ['havana_kickboxing', 'match'] },
          ]);
        }
        scene.actions([
          { label: 'Work on your jabs', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'react');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your jabs on the speed bag and double-end bag. These strikes are not very powerful, but they\'re fast.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Work on your heavy punches', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren', 'punch');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your power punches on the heavy bag. These are high impact and powerful, but are hard to land on the target.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Work on your kicking', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'stren', 'kick');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your kicks on a kickboxing bag. These are very powerful and are able to cut down an opponent, but are very difficult to land.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Work on defence', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'exercise', 'tier3', 30, 'def', 'agil');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    scene.text('You practice your defensive movements.');
    scene.actions([
      { label: 'Leave', goto: ['havana_kickboxing', 'start'] },
    ]);
  } },
          { label: 'Sparring (training bout in the ring)', handler: (st: GameState) => {
    scene.text('You need to choose a partner for sparring');
    if (((s as any).pcs_inhib ?? 0) < 30) {
      (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 2) + 1);
    }
    scene.actions([
      { label: 'Pick a random partner', handler: (st: GameState) => {
    (s as any).abonement = ((s as any).abonement ?? 0) - (1);
    qspCall(s, 'mood', 'raise', 'tiny');
    qspCall(s, 'exercise', 'tier3', 30, 'jab', 'punch', 'kick', 'def');
    qspCall(s, 'kickboxing_funcs', 'init_fight_vars');
    (s as any).temp_kickboxVars['fight_type'] = 0;
    qspCall(s, 'kickboxing_funcs', 'generate_opponent', 'spar');
  }, goto: ['havana_kickboxing', 'match'] },
    ]);
  } },
        ]);
      }
    }
  }
  scene.actions([
    { label: 'Go to the changing room', goto: ['havana_kickboxing', 'leave'] },
  ]);
  scene.build();
}

function enterMatch(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) <= 0) {
    scene.text('<b><font color = red>You lost by TKO</font></b>');
    // TODO-QSP: xgt 'havana_kickboxing', 'end', 'lossKO'
  } else {
    if (((s as any).temp_kickboxVars ?? 0)?.['npc_health'] <= 0) {
      // TODO-QSP: dynamic text: <b><font color = green><<$boydesc>> lost by TKO</font></b>
      scene.text(`<b><font color = green>${((s as any).boydesc ?? 0)} lost by TKO</font></b>`);
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'winKO'
    }
  }
  if (((s as any).temp_kickboxVars ?? 0)?.['round'] >= 1) {
    // TODO-QSP: dynamic text: <center><b>Round <<temp_kickboxVars['round']>></b></center>
    scene.text(`<center><b>Round ${((s as any).temp_kickboxVars ?? 0)?.['round']}</b></center>`);
    if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 0) {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kik1.jpg');
    } else {
      scene.img(`images/locations/city/citycenter/gym/kickboxing/ring${((s as any).temp_kickboxVars ?? 0)?.['round']}.jpg`);
    }
    qspCall(s, 'kickboxing_funcs', 'display_header');
    (s as any).temp_kickboxVars['time'] = ((s as any).temp_kickboxVars['time'] ?? 0) + (1);
    qspCall(s, 'kickboxing_funcs', 'set_initiative');
    if (((s as any).temp_kickboxVars ?? 0)?.['active_init'] === 0) {
      scene.text('You can attack');
      scene.actions([
        { label: 'Fast Jab', handler: (st: GameState) => {
    scene.text('You go for the quick jab and step forward.');
    qspCall(s, 'kickboxing_funcs', 'attack', 'player', 'jab');
    if (((s as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'winKO'
    }
    // TODO-QSP: xgt 'havana_kickboxing', 'sta'
  } },
        { label: 'Power punch', handler: (st: GameState) => {
    scene.text('You attempt a powerful punch.');
    qspCall(s, 'kickboxing_funcs', 'attack', 'player', 'punch');
    if (((s as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'winKO'
    }
    // TODO-QSP: xgt 'havana_kickboxing', 'sta'
  } },
        { label: 'Big kick', handler: (st: GameState) => {
    scene.text('You try a powerful kick.');
    qspCall(s, 'kickboxing_funcs', 'attack', 'player', 'kick');
    if (((s as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'winKO'
    }
    // TODO-QSP: xgt 'havana_kickboxing', 'sta'
  } },
      ]);
    } else {
      scene.text(`${((s as any).boydesc ?? 0)} attacks`);
      (s as any).tiprand = Math.floor(Math.random() * 3) + 0;
      if ((!((s as any).tiprand ?? 0))) {
        scene.actions([
          { label: 'Block <<$boydesc>>\'s quick jab', handler: (st: GameState) => {
    scene.text(`${((s as any).boydesc ?? 0)} deals a quick jab, stepping forward.`);
    qspCall(s, 'kickboxing_funcs', 'attack', 'enemy', 'jab');
    if (((s as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'lossKO'
    }
    // TODO-QSP: xgt 'havana_kickboxing', 'sta'
  } },
        ]);
      } else {
        if (((s as any).tiprand ?? 0) === 1) {
          scene.actions([
            { label: 'Dodge <<$boydesc>>\'s power punch', handler: (st: GameState) => {
    scene.text(`${((s as any).boydesc ?? 0)} applies a power punch.`);
    qspCall(s, 'kickboxing_funcs', 'attack', 'enemy', 'punch');
    if (((s as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'lossKO'
    }
    // TODO-QSP: xgt 'havana_kickboxing', 'sta'
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Dodge <<$boydesc>>\'s kick', handler: (st: GameState) => {
    scene.text(`${((s as any).boydesc ?? 0)} goes for a kick.`);
    qspCall(s, 'kickboxing_funcs', 'attack', 'enemy', 'kick');
    if (((s as any).temp_kickboxVars ?? 0)?.['KO'] === 1) {
      // TODO-QSP: xgt 'havana_kickboxing', 'end', 'lossKO'
    }
    // TODO-QSP: xgt 'havana_kickboxing', 'sta'
  } },
          ]);
        }
      }
    }
  }
  scene.build();
}

function enterSta(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_kickboxVars['set_init'] = 0;
  if (((s as any).temp_kickboxVars ?? 0)?.['time'] === 6) {
    (s as any).temp_kickboxVars['time'] = 0;
    // TODO-QSP: dynamic text: The bell rings, indicating the end of round <<temp_kickboxVars['round']>>.
    scene.text(`The bell rings, indicating the end of round ${((s as any).temp_kickboxVars ?? 0)?.['round']}.`);
    (s as any).temp_kickboxVars['round'] = ((s as any).temp_kickboxVars['round'] ?? 0) + (1);
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
          // TODO-QSP: gt 'havana_kickboxing', 'end', 'win'
        } else {
          if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] < ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
            // TODO-QSP: gt 'havana_kickboxing', 'end', 'loss'
          } else {
            if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] === ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
              // TODO-QSP: gt 'havana_kickboxing', 'end', 'draw'
            }
          }
        }
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['fight_type'] === 1) {
          scene.actions([
            { label: 'Go to the middle of the ring', handler: (st: GameState) => {
    if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] > ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
      // TODO-QSP: gt 'havana_kickboxing', 'end', 'win'
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] < ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
        // TODO-QSP: gt 'havana_kickboxing', 'end', 'loss'
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['pcs_points'] === ((s as any).temp_kickboxVars ?? 0)?.['npc_points']) {
          // TODO-QSP: gt 'havana_kickboxing', 'end', 'draw'
        }
      }
    }
  } },
          ]);
        }
      }
    }
  }
  scene.actions([
    { label: 'Further', goto: ['havana_kickboxing', 'match'] },
  ]);
  scene.build();
}

function enterEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_health ?? 0) < 10) {
    (s as any).pcs_health = 10;
  }
  (s as any).temp_kickboxVars['result'] = ((s as any).locArgs?.[1] ?? 0);
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
    if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'win') {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win.jpg');
      scene.text('The referee raises your arm. Congratulations! You\'ve won!');
      if (((s as any).kickbox ?? 0)?.['opponent'] === 0) {
        qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 3) + 4);
      } else {
        if (((s as any).kickbox ?? 0)?.['opponent'] === 1) {
          qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 5) + 5);
        } else {
          if (((s as any).kickbox ?? 0)?.['opponent'] === 2) {
            qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 4) + 6);
          } else {
            if (((s as any).kickbox ?? 0)?.['opponent'] === 3) {
              qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 5) + 6);
            } else {
              if (((s as any).kickbox ?? 0)?.['opponent'] === 4) {
                qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 4) + 7);
              } else {
                qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 7) + 7);
              }
            }
          }
        }
      }
      (s as any).kickbox['amateurWin'] = ((s as any).kickbox['amateurWin'] ?? 0) + (1);
      (s as any).kickbox['advancement'] = ((s as any).kickbox['advancement'] ?? 0) + (1);
      // TODO-QSP: gs 'money', 'earn', 500 + kickbox['money']
      (s as any).rikudo = ((s as any).rikudo ?? 0) + (5);
      // TODO-QSP: dynamic text: You're awarded a cash prize of <<$func('money', 'string_profit', 500 + kickbox['...
      scene.text(`You're awarded a cash prize of ${qspFunc(s, 'money', 'string_profit', 500 + ((s as any).kickbox ?? {})?.['money'])}.`);
      qspCall(s, 'kickboxing_funcs', 'sash_advancement');
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'winKO') {
        scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win_ko.jpg');
        scene.text('The referee raises your arm. Congratulations! You\'ve won by knockout!');
        qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 3) + 4);
        if (((s as any).kickbox ?? 0)?.['opponent'] === 0) {
          qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 3) + 4);
        } else {
          if (((s as any).kickbox ?? 0)?.['opponent'] === 1) {
            qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 5) + 5);
          } else {
            if (((s as any).kickbox ?? 0)?.['opponent'] === 2) {
              qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 4) + 6);
            } else {
              if (((s as any).kickbox ?? 0)?.['opponent'] === 3) {
                qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 5) + 6);
              } else {
                if (((s as any).kickbox ?? 0)?.['opponent'] === 4) {
                  qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 4) + 7);
                } else {
                  qspCall(s, 'fame', 'city', 'kickboxing', Math.floor(Math.random() * 7) + 7);
                }
              }
            }
          }
        }
        (s as any).kickbox['amateurWin'] = ((s as any).kickbox['amateurWin'] ?? 0) + (1);
        (s as any).kickbox['amateurWinKO'] = ((s as any).kickbox['amateurWinKO'] ?? 0) + (1);
        (s as any).kickbox['advancement'] = ((s as any).kickbox['advancement'] ?? 0) + (1);
        // TODO-QSP: gs 'money', 'earn', 500 + kickbox['money']
        (s as any).rikudo = ((s as any).rikudo ?? 0) + (10);
        // TODO-QSP: dynamic text: You're awarded a cash prize of <<$func('money', 'string_profit', 500 + kickbox['...
        scene.text(`You're awarded a cash prize of ${qspFunc(s, 'money', 'string_profit', 500 + ((s as any).kickbox ?? {})?.['money'])}.`);
        qspCall(s, 'kickboxing_funcs', 'sash_advancement');
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'loss') {
          scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss.jpg');
          scene.text('The referee raises your opponent\'s arm. You\'ve lost.');
          (s as any).kickbox['amateurLoss'] = ((s as any).kickbox['amateurLoss'] ?? 0) + (1);
          if (((s as any).kickbox ?? 0)?.['advancement'] > 0) {
            (s as any).kickbox['advancement'] = ((s as any).kickbox['advancement'] ?? 0) - (1);
          }
        } else {
          if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'lossKO') {
            scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss_ko.jpg');
            scene.text('The room suddenly goes dark around you…');
            (s as any).kickbox['amateurLoss'] = ((s as any).kickbox['amateurLoss'] ?? 0) + (1);
            (s as any).kickbox['amateurLossKO'] = ((s as any).kickbox['amateurLossKO'] ?? 0) + (1);
            if (((s as any).kickbox ?? 0)?.['advancement'] > 0) {
              (s as any).kickbox['advancement'] = ((s as any).kickbox['advancement'] ?? 0) - (1);
            }
          } else {
            scene.text('The referee raises both of your arms. It\'s a draw!');
            (s as any).kickbox['amateurDraw'] = ((s as any).kickbox['amateurDraw'] ?? 0) + (1);
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
    if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'win') {
      scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win.jpg');
      scene.text('The referee raises your arm. Congratulations! You\'ve won!');
      (s as any).kickbox['proWin'] = ((s as any).kickbox['proWin'] ?? 0) + (1);
      (s as any).rikudo = ((s as any).rikudo ?? 0) + (5);
    } else {
      if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'winKO') {
        scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_win_ko.jpg');
        scene.text('The referee raises your arm. Congratulations! You\'ve won by knockout!');
        (s as any).kickbox['proWin'] = ((s as any).kickbox['proWin'] ?? 0) + (1);
        (s as any).kickbox['proWinKO'] = ((s as any).kickbox['proWinKO'] ?? 0) + (1);
        (s as any).rikudo = ((s as any).rikudo ?? 0) + (10);
      } else {
        if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'loss') {
          scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss.jpg');
          scene.text('The referee raises your opponent\'s arm. You\'ve lost.');
          (s as any).kickbox['proLoss'] = ((s as any).kickbox['proLoss'] ?? 0) + (1);
        } else {
          if (((s as any).temp_kickboxVars ?? 0)?.['result'] === 'lossKO') {
            scene.img('images/locations/city/citycenter/gym/kickboxing/kickboxing_loss_ko.jpg');
            scene.text('The room suddenly goes dark around you…');
            (s as any).kickbox['proLoss'] = ((s as any).kickbox['proLoss'] ?? 0) + (1);
            (s as any).kickbox['proLossKO'] = ((s as any).kickbox['proLossKO'] ?? 0) + (1);
          } else {
            scene.text('The referee raises both of your arms. It\'s a draw!');
            (s as any).kickbox['proDraw'] = ((s as any).kickbox['proDraw'] ?? 0) + (1);
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
  scene.build();
}

function enterLeave(s: GameState, scene: SceneBuilder): void {
  scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
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
      enterStart(s, scene);
      break;
  }
}

export const havana_kickboxing: LocationDef = {
  name: 'havana_kickboxing',
  title: 'Kickboxing Gym',
  region: 'other',
  description: ['This section is dominated by the ring itself, the only equipment that can\'t be easily moved.'],
  enter: enter,
};
