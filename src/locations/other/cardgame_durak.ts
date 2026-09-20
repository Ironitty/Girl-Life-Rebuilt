import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGetModFame(s: GameState, scene: SceneBuilder): void {
  (s as any).result = (((s as any).fame ?? {})?.['pav_slut'] ?? 0) + ((s as any).card_game_durak_nude ?? 0) + ((s as any).cg_clother_cum ?? 0) + ((s as any).cg_pussy_licked ?? 0) + (((s as any).npc_vaginal_count ?? {})?.['A9'] ?? 0) + (((s as any).npc_vaginal_count ?? {})?.['A10'] ?? 0) + (((s as any).npc_vaginal_count ?? {})?.['A11'] ?? 0) + (((s as any).npc_anal_count ?? {})?.['A9'] ?? 0) + (((s as any).npc_anal_count ?? {})?.['A10'] ?? 0) + (((s as any).npc_anal_count ?? {})?.['A11'] ?? 0) + (((s as any).npc_oral_count ?? {})?.['A9'] ?? 0) + (((s as any).npc_oral_count ?? {})?.['A10'] ?? 0) + (((s as any).npc_oral_count ?? {})?.['A11'] ?? 0) + (((s as any).vasily ?? {})?.['drunk_sex'] ?? 0);
  return;
  // TODO-QSP: end
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).playcardgame_count ?? 0) > 0) {
    (s as any).cgd_cs = (Math.floor(Math.random() * 20) + 1);
    qspCall(s, 'npcStat', 'A9', '3');
    qspCall(s, 'npcStat', 'A10', '1');
    qspCall(s, 'npcStat', 'A11', '2');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      (s as any).cgd_clothes = ' shirt, skirt, socks, bra, panties';
      (s as any).cgd_cs = (Math.floor(Math.random() * 5) + 1);
    } else {
      if (((s as any).PCloPants ?? 0) > 2) {
        if ((!(Math.floor(Math.random() * 2) + 0))) {
          (s as any).cgd_clothes = ' shirt, pants, socks, bra, panties';
          (s as any).cgd_cs = (Math.floor(Math.random() * 2) + 6);
        } else {
          (s as any).cgd_clothes = ' shirt, jeans, socks, bra, panties';
          (s as any).cgd_cs = (Math.floor(Math.random() * 7) + 8);
        }
      } else {
        (s as any).cgd_clothes = ' shirt, shorts, socks, bra, panties';
        (s as any).cgd_cs = (Math.floor(Math.random() * 6) + 15);
      }
    }
    ((s as any).cgd_clothes = (s as any).cgd_clothes ?? {})['A11'] = ' shirt, shorts, socks, briefs';
    ((s as any).cgd_clothes = (s as any).cgd_clothes ?? {})['A10'] = ' track jacket, tracksuit pants, socks, briefs';
    ((s as any).cgd_clothes = (s as any).cgd_clothes ?? {})['A9'] = ' shirt, jeans, socks, briefs';
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/durak.jpg');
    scene.text('"Cards? We can deal you in, but only if you want to play strip poker", Vitek grins. "The loser does whatever the winner wants them to do. Because you\'re a girl, you\'ll get one extra piece of clothing to start with. Sound fair?"');
    // TODO-QSP: dynamic text: Your game statistics: You''ve won <<card_game_durak_win>> times, lost <<card_gam...
    scene.text(`Your game statistics: You've won ${((s as any).card_game_durak_win || '')} times, lost ${((s as any).card_game_durak_loss || '')} times, managed a draw ${((s as any).card_game_durak_draw || '')} times, and ended up naked ${((s as any).card_game_durak_nude || '')} times.`);
    qspCall(s, 'willpower', 'misc', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not now', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not now', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'vasilyhome', 'livingroom');
  } },
      ]);
    }
    scene.actions([
      { label: 'Play and deal', goto: ['cardgame_durak', 'card_game_durak_play'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<iif(RAND(0,1) = 0,''Dan'',''Vitek'')>> sighs: "I''m tired of playing cards. Le...
    scene.text(`${(((!(Math.floor(Math.random() * 2) + 0))) ? ('Dan') : ('Vitek'))} sighs: "I'm tired of playing cards. Let's just watch some TV or something, or have some more beers."`);
    scene.actions([
      { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
    ]);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterCardGameDurakPlay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  (s as any).cgdp_pc_state = ((((s as any).cgd_clothes ?? 0)==='') ? ('You are naked!') : ('You are wearing:' + ((s as any).cgd_clothes ?? 0) + '.'));
  (s as any).cgdp_A11_state = ((((s as any).cgd_clothes ?? 0)?.['A11']==='') ? ('Vasily is naked!') : ('Vasily is wearing:' + ((s as any).cgd_clothes ?? 0)?.[String((s as any).A11 ?? 0)] + '.'));
  (s as any).cgdp_A10_state = ((((s as any).cgd_clothes ?? 0)?.['A10']==='') ? ('Dan is naked!') : ('Dan is wearing:' + ((s as any).cgd_clothes ?? 0)?.[String((s as any).A10 ?? 0)] + '.'));
  (s as any).cgdp_A9_state = ((((s as any).cgd_clothes ?? 0)?.['A9']==='') ? ('Vitek is naked!') : ('Vitek is wearing:' + ((s as any).cgd_clothes ?? 0)?.[String((s as any).A9 ?? 0)] + '.'));
  scene.text('<center><b>You\'re playing strip poker with the guys. The game will continue until one of you is completely naked.</b></center>');
  scene.img(`images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/${((s as any).cgd_cs || '')}-${6-(3+(String(((s as any).cgd_clothes || '')).length))/7}.jpg`);
  // TODO-QSP: dynamic text: <br><<$cgdp_pc_state>><br><<$cgdp_A11_state>><br><<$cgdp_A10_state>><br><<$cgdp_...
  scene.text(`<br>${((s as any).cgdp_pc_state || '')}<br>${((s as any).cgdp_A11_state || '')}<br>${((s as any).cgdp_A10_state || '')}<br>${((s as any).cgdp_A9_state || '')}<br>`);
  if (((s as any).cgd_clothes ?? 0) === '') {
    qspGoto(s, 'cardgame_durak', 'card_game_lost');
  } else {
    if (((s as any).cgd_clothes ?? 0)?.['A11'] === ''  ||  ((s as any).cgd_clothes ?? 0)?.['A10'] === ''  ||  ((s as any).cgd_clothes ?? 0)?.['A9'] === '') {
      if (((s as any).cgd_clothes ?? 0)?.['A11'] === '') {
        qspCall(s, 'npcStat', 'A11');
        (s as any).loss_npc_img = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/school/boy/vasya/vasya.jpg"></center>';
      } else {
        if (((s as any).cgd_clothes ?? 0)?.['A10'] === '') {
          qspCall(s, 'npcStat', 'A10');
          (s as any).loss_npc_img = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/school/boy/dan/dan.jpg"></center>';
        } else {
          qspCall(s, 'npcStat', 'A9');
          (s as any).loss_npc_img = '<center><img ' + ((s as any).set_imgh ?? 0) + ' src="images/characters/pavlovsk/school/boy/vitek/vitek.jpg"></center>';
        }
      }
      (s as any).loss_npc_name = ((s as any).boydesc ?? 0);
      qspGoto(s, 'cardgame_durak', 'card_game_won');
    } else {
      (s as any).temp_alko = Math.min(((s as any).alko ?? 0), 11);
      (s as any).temp_durak_trying = ((s as any).locArgs?.[1] ?? 0) * (Math.floor(Math.random() * 11) + 10);
      (s as any).temp_durak_win_chance = 50 - 2 * ((s as any).temp_alko ?? 0) + ((s as any).temp_durak_trying ?? 0);
      (s as any).temp_durak_not_lose_chance = ((s as any).temp_durak_win_chance ?? 0) + 20 - ((s as any).temp_alko ?? 0);
      (s as any).temp_durak_result = (Math.floor(Math.random() * 100) + 1);
      if (((s as any).temp_durak_result ?? 0) <= ((s as any).temp_durak_win_chance ?? 0)) {
        (s as any).card_game_durak_win = ((s as any).card_game_durak_win ?? 0) + (1);
        (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
        qspCall(s, 'mood', 'raise', 'tiny');
        (s as any).cgd_name_npc = 'A' + 9 + (Math.floor(Math.random() * 3) + 0) + '';
        if (((String(((s as any).cgd_clothes ?? 0)?.[String((s as any).cgd_name_npc ?? 0)]).indexOf(String('socks'))) + 1) > 0) {
          (s as any).clo_str = ' socks';
          // TODO-QSP: $cgd_clothes[$cgd_name_npc] = $replace($cgd_clothes[$cgd_name_npc], ' socks,', '')
        } else {
          if (((String(((s as any).cgd_clothes ?? 0)?.[String((s as any).cgd_name_npc ?? 0)]).indexOf(String(','))) + 1) > 0) {
            (s as any).clo_str = (String(((s as any).cgd_clothes ?? 0)?.[String((s as any).cgd_name_npc ?? 0)]).slice((1)-1, ((1)-1)+(((String(qspUntranslated(s, "$\u00000\u0000", { location: "cardgame_durak" })).indexOf(String(','))) + 1) - 1)));
            // TODO-QSP: $cgd_clothes[$cgd_name_npc] = $replace($cgd_clothes[$cgd_name_npc], '<<$clo_str>>,', '')
          } else {
            (s as any).clo_str = ((s as any).cgd_clothes ?? 0)?.[String((s as any).cgd_name_npc ?? 0)];
            // TODO-QSP: $cgd_clothes[$cgd_name_npc] = ''
          }
        }
        scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/card3.jpg');
        if (((s as any).alko ?? 0) > 10) {
          scene.text('You are absolutely wasted and barely manage to win the round due to a fantastic set of cards.');
        } else {
          if (((s as any).alko ?? 0) > 5) {
            scene.text('You have an amazing set of cards in your hand, and manage to win the round even though you are very drunk.');
          } else {
            if (((s as any).alko ?? 0) > 3) {
              scene.text('You have a great set of cards in your hand, and even though you are drunk win the round.');
            } else {
              scene.text('You have a great set of cards in your hand, and easily win the round.');
            }
          }
        }
        // TODO-QSP: dynamic text: <<$npc_usedname[$cgd_name_npc]>> loses, and reluctantly takes off his<<$clo_str>...
        scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).cgd_name_npc ?? 0)] ?? ''} loses, and reluctantly takes off his${((s as any).clo_str || '')}.`);
      } else {
        if (((s as any).temp_durak_result ?? 0) <= ((s as any).temp_durak_not_lose_chance ?? 0)) {
          (s as any).card_game_durak_draw = ((s as any).card_game_durak_draw ?? 0) + (1);
          scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/card1.jpg');
          if (((s as any).alko ?? 0) > 10) {
            scene.text('You are absolutely wasted, but somehow manage to squeeze out a draw.');
          } else {
            if (((s as any).alko ?? 0) > 5) {
              scene.text('You are very drunk and make a bad call, but barely manage to get a draw.');
            } else {
              if (((s as any).alko ?? 0) > 3) {
                scene.text('You might have been able to win this game, but you made a drunken mistake. Luckily the game ended in a draw.');
              } else {
                scene.text('Your hand isn\'t very good, but with some skill you manage to squeeze out a draw.');
              }
            }
          }
          scene.text('That was close, but you get to keep your clothes on for now!');
        } else {
          (s as any).card_game_durak_loss = ((s as any).card_game_durak_loss ?? 0) + (1);
          if (((String(((s as any).cgd_clothes ?? 0)).indexOf(String('socks'))) + 1) > 0) {
            (s as any).clo_str = ' socks';
            (s as any).cgd_clothes = (String(((s as any).cgd_clothes ?? 0)).split(' socks,').join(''));
          } else {
            if (((String(((s as any).cgd_clothes ?? 0)).indexOf(String(','))) + 1) > 0) {
              (s as any).clo_str = (String(((s as any).cgd_clothes ?? 0)).slice((1)-1, ((1)-1)+(((String(((s as any).cgd_clothes ?? 0)).indexOf(String(','))) + 1) - 1)));
              (s as any).cgd_clothes = (String(((s as any).cgd_clothes ?? 0)).split('' + ((s as any).clo_str ?? 0) + ',').join(''));
            } else {
              (s as any).clo_str = ((s as any).cgd_clothes ?? 0);
              (s as any).cgd_clothes = '';
            }
          }
          scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/card1.jpg');
          if (((s as any).alko ?? 0) > 10) {
            scene.text('You are absolutely wasted and don\'t stand a chance.');
          } else {
            if (((s as any).alko ?? 0) > 5) {
              scene.text('You are very drunk and the boys use it to their advantage. You lost this game.');
            } else {
              if (((s as any).alko ?? 0) > 3) {
                scene.text('Your hand is poor and you made multiple drunken misplays. You lost this game.');
              } else {
                scene.text('Your hand is very poor, and you don\'t stand a chance.');
              }
            }
          }
          // TODO-QSP: dynamic text: You slowly undress for the guys, removing your<<$clo_str>>
          scene.text(`You slowly undress for the guys, removing your${((s as any).clo_str || '')}`);
        }
      }
      if (((s as any).cgd_clothes ?? 0) !== ''  &&  ((s as any).cgd_clothes ?? 0)?.['A11'] !== ''  &&  ((s as any).cgd_clothes ?? 0)?.['A10'] !== ''  &&  ((s as any).cgd_clothes ?? 0)?.['A9'] !== '') {
        (s as any).temp_will_difficulty = ((((s as any).alko ?? 0) < 6) ? (((((s as any).alko ?? 0) < 4) ? ('easy') : ('medium'))) : ('hard'));
        qspCall(s, 'willpower', 'misc', 'self', ((s as any).temp_will_difficulty ?? 0));
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Deal and try your hardest to win', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Deal and try your hardest to win', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'misc', 'self', ((st as any).temp_will_difficulty ?? 0));
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'cardgame_durak', 'card_game_durak_play', '1');
  } },
          ]);
        }
        scene.actions([
          { label: 'Deal and take it easy', handler: (st: GameState) => {
    // TODO-QSP: gt 'cardgame_durak', 'card_game_durak_play', -1
  } },
          { label: 'Deal', goto: ['cardgame_durak', 'card_game_durak_play', '0'] },
        ]);
      } else {
        scene.actions([
          { label: 'Finish the game', goto: ['cardgame_durak', 'card_game_durak_play'] },
        ]);
      }
    }
  }
  scene.text('</td></tr></table>');
  // TODO-QSP: end
  scene.build();
}

function enterCardGameLost(s: GameState, scene: SceneBuilder): void {
  (s as any).card_game_durak_nude = ((s as any).card_game_durak_nude ?? 0) + (1);
  (s as any).playcardgame_day = ((s as any).daystart ?? 0);
  (s as any).playcardgame_count = ((s as any).playcardgame_count ?? 0) - (1);
  qspCall(s, 'npc_relationship', 'modify', 'A9', 2);
  qspCall(s, 'npc_relationship', 'modify', 'A10', 2);
  qspCall(s, 'npc_relationship', 'modify', 'A11', 2);
  qspCall(s, 'npcStat', 'A' + 9+(Math.floor(Math.random() * 3) + 0) + '');
  scene.text('<b>The game is over! You have no clothes left, you lose!</b>');
  // TODO-QSP: dynamic text: Winner: <b><<$boydesc>>.</b>
  scene.text(`Winner: <b>${((s as any).boydesc || '')}.</b>`);
  scene.text('You will have to carry out his wish.');
  if (qspFunc(s, 'cardgame_durak', 'get_mod_fame') < 250  ||  ((s as any).kotovLoveQW ?? 0) > 0) {
    scene.actions([
      { label: 'Continue', goto: ['cardgame_durak', 'card_game_nosex'] },
    ]);
  } else {
    if (((s as any).cg_clother_cum ?? 0) < 5) {
      (s as any).temp_rand = (Math.floor(Math.random() * 100) + 0);
      if (((s as any).temp_rand ?? 0) < 30) {
        scene.actions([
          { label: 'Continue', goto: ['cardgame_durak', 'card_game_group_sex'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) < 90) {
          scene.actions([
            { label: 'Continue', goto: ['cardgame_durak', 'card_game_rough_sex'] },
          ]);
        } else {
          scene.actions([
            { label: 'Continue', goto: ['cardgame_durak', 'card_game_nosex'] },
          ]);
        }
      }
    } else {
      (s as any).temp_rand = (Math.floor(Math.random() * 300) + 0);
      if (((s as any).temp_rand ?? 0) < 70) {
        scene.actions([
          { label: 'Continue', goto: ['cardgame_durak', 'card_game_group_sex'] },
        ]);
      } else {
        if (((s as any).temp_rand ?? 0) < 210) {
          scene.actions([
            { label: 'Continue', goto: ['cardgame_durak', 'card_game_rough_sex'] },
          ]);
        } else {
          if (((s as any).temp_rand ?? 0) < 240) {
            scene.actions([
              { label: 'Continue', goto: ['cardgame_durak', 'card_game_casual_sex'] },
            ]);
          } else {
            scene.actions([
              { label: 'Continue', goto: ['cardgame_durak', 'card_game_nosex'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterCardGameNosex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  (s as any).temp_rand = (Math.floor(Math.random() * 7) + 0);
  if ((!((s as any).temp_rand ?? 0))) {
    (s as any).card_game_texta = 'I want you to suck me off.';
  }
  if (((s as any).temp_rand ?? 0) === 1) {
    (s as any).card_game_texta = 'I want you to masturbate in front of us.';
  }
  if (((s as any).temp_rand ?? 0) === 2) {
    (s as any).card_game_texta = 'I want you to give my dick a kiss.';
  }
  if (((s as any).temp_rand ?? 0) === 3) {
    (s as any).card_game_texta = 'I want to touch your tits.';
  }
  if (((s as any).temp_rand ?? 0) === 4) {
    (s as any).card_game_texta = 'I want to fuck you.';
  }
  if (((s as any).temp_rand ?? 0) === 5) {
    (s as any).card_game_texta = 'I want to touch your pussy.';
  }
  if (((s as any).temp_rand ?? 0) === 6) {
    (s as any).card_game_texta = 'I want a boob job from you.';
  }
  if (((s as any).boy ?? 0) === 'A11') {
    scene.img('images/characters/pavlovsk/school/boy/vasya/vasya.jpg');
    // TODO-QSP: dynamic text: '+func('gopsex', 'hide', 'Shulga_var_name')+' ponders for a second, and says: "<...
    scene.text(`+func('gopsex', 'hide', 'Shulga_var_name')+' ponders for a second, and says: "${((s as any).card_game_texta || '')}"`);
    scene.text('"Are you out of your mind!? There\'s absolutely no way I\'m doing that!", you shout, deeply offended by his suggestion.');
    scene.text('He raises his hands defensively and smiles: "Relax, I was just kidding. I just had to try, who knows what kind of party girl you might\'ve been!"');
    scene.text('You sigh and tell him: "Seriously though, what do you want me to do?"');
    // TODO-QSP: dynamic text: '+func('gopsex', 'hide', 'Shulga_var_name')+' thinks long and hard, and carefull...
    scene.text(`+func('gopsex', 'hide', 'Shulga_var_name')+' thinks long and hard, and carefully suggests: "${((s as any).pcs_nickname || '')}, how about you perform a little dance for us? You know… shake your boobs, show off your body a little?"`);
    scene.text('You bite your lip while you think for a moment, and then say: "Fine. I\'m naked, so it\'s not like you haven\'t seen it all already anyway. I\'ll do it."');
  } else {
    if (((s as any).boy ?? 0) === 'A10') {
      scene.img('images/characters/pavlovsk/school/boy/dan/dan.jpg');
      // TODO-QSP: dynamic text: Dan says what he wants: "<<$pcs_nickname>>, <<$card_game_texta>>"
      scene.text(`Dan says what he wants: "${((s as any).pcs_nickname || '')}, ${((s as any).card_game_texta || '')}"`);
      scene.text('"Are you out of your mind!? There\'s absolutely no way I\'m doing that!", you shout, deeply offended by his suggestion.');
      scene.text('He raises his hands defensively and smiles: "Relax, I was just kidding. I just had to try, who knows what kind of party girl you might\'ve been!"');
      scene.text('You sigh and tell him: "Seriously though, what do you want me to do?"');
      // TODO-QSP: dynamic text: Dan shrugs and says: "<<$pcs_nickname>>, how about we put up some music, and you...
      scene.text(`Dan shrugs and says: "${((s as any).pcs_nickname || '')}, how about we put up some music, and you shake your tits and perform a nice little dance for the three of us then?"`);
      scene.text('You bite your lip while you think for a moment, and then say: "Fine. I\'m naked, so it\'s not like you haven\'t seen it all already anyway. I\'ll do it."');
    } else {
      if (((s as any).boy ?? 0) === 'A9') {
        scene.img('images/characters/pavlovsk/school/boy/vitek/vitek.jpg');
        // TODO-QSP: dynamic text: Vitek confidently says: "<<$card_game_texta>>"
        scene.text(`Vitek confidently says: "${((s as any).card_game_texta || '')}"`);
        scene.text('"Are you out of your mind!? There\'s absolutely no way I\'m doing that!", you shout, deeply offended by his suggestion.');
        scene.text('"Hey, you\'re the one who agreed to do what we say if you lose. I didn\'t realize you were going to be so modest", Vitek smirks.');
        scene.text('You sigh and tell him: "Don\'t be such a pervert! Seriously though, what do you want me to do?"');
        // TODO-QSP: dynamic text: Vitek shrugs and says: "<<$pcs_nickname>>, how about we put up some music, and y...
        scene.text(`Vitek shrugs and says: "${((s as any).pcs_nickname || '')}, how about we put up some music, and you shake your tits and perform a nice little dance for the three of us then?"`);
        scene.text('You bite your lip while you think for a moment, and then say: "Fine. I\'m naked, so it\'s not like you haven\'t seen it all already anyway. I\'ll do it."');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Dance for them', goto: ['cardgame_durak', 'card_game_nosex_dance'] },
  ]);
  scene.build();
}

function enterCardGameNosexDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 2));
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/gif/dance' + (Math.floor(Math.random() * 9) + 1) + '.mp4');
  scene.text('The guys put on a popular track with a lot of bass, and lean back. You realize this is your cue to start moving, and somewhat awkwardly begin to dance for them. After a while you get into the song more and become less hesitant in shaking your hips and boobs, trying to give the guys a good show. They did win, after all.');
  scene.text('They all watch you intently, cheering you on and high-fiving their friend who made this possible.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish and put your clothes back on', goto: ['vasilyhome', 'livingroom'] },
  ]);
  scene.build();
}

function enterCardGameGroupSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A9'] = 1;
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A10'] = 1;
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})['A11'] = 1;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_1.jpg');
  // TODO-QSP: dynamic text: "Now that you''ve lost… how about we all get naked, and then see what we will do...
  scene.text(`"Now that you've lost… how about we all get naked, and then see what we will do with you?" ${((s as any).boydesc || '')} says with a grin, as he takes the remainder of his clothes off. The other guys nod eagerly, and begin to undress as well.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3, 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_2.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> says: "I''ve given it some thought, and I''ve decided that it is ba...
    scene.text(`${((st as any).boydesc || '')} says: "I've given it some thought, and I've decided that it is bad to be selfish. Therefore, as my wish: I will share your body with my friends, and we will all fuck you good!"`);
    scene.text('"But, that\'s not fair…" you mutter weakly. "You won, they did not. Only you get a wish!');
    // TODO-QSP: dynamic text: "Exactly! I get a wish, and you have to do what I want. My wish is to share your...
    scene.text(`"Exactly! I get a wish, and you have to do what I want. My wish is to share your body with my friends", ${((st as any).boydesc || '')} tells you, while he plays with your boobs. "Now stop complaining and get on your back."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[2], 'gangbang'
    // TODO-QSP: gs 'arousal', 'hj', -2, $npcID[1], 'gangbang'
    // TODO-QSP: gs 'arousal', 'hj', -2, $npcID[2], 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal_finger', -6, $npcID[3], ' gangbang'
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_3.jpg');
    // TODO-QSP: dynamic text: Well, he''s got you there. With a deep sigh you lie down on your back, and immed...
    scene.text('Well, he\'s got you there. With a deep sigh you lie down on your back, and immediately ' + qspFunc(s, 'gopsex', 'hide', 'Shulga_var_name') + ' and Dan get on their knees next to you, offering their already fully erect cocks to you.');
    scene.text('Vitek moves between your legs, and begins to play with your pussy. He occasionally thrusts a finger inside, but is mostly content to just play with your pussy lips and your clitoris for now.');
    scene.text('You hesitantly lean towards Vasily\'s cock and lick the head of his cock testively, before taking it into your mouth. Meanwhile Dan grabs your wrist and guides your hand to his cock, and he begins to play with your breasts once you get the message and masturbate him gently.');
    scene.text('Wow, the three of them are making you feel really good! You do your best to repay them by giving Vasily and Dan a good blowjob, taking their cocks as far as possible in your mouth in turns while you masturbate the other.');
    if (((st as any).pcs_horny ?? 0) >= 70) {
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'Vitek\'s constant rubbing on your clit brings you to a thunderous orgasm, and you moan and groan loudly despite the penis that\'s lodged deeply into your mouth.';
      // TODO-QSP: gs 'arousal', 'vaginal_finger', 6, $npcID[3], 'gangbang', 'exhibitionism'
      scene.text('For a moment you feel ashamed, your orgasm was very obvious to the guys and was met with loud cheers. Then you relax and just give in, why should you feel bad about them making you feel great?');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'bj', 5, $npcID[1], 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -5, $npcID[2], 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', -5, $npcID[3], 'gangbang'
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_4.jpg');
    scene.text('Then the guys pull you up, and put you down on your hands and knees. Dan immediately moves behind you, claiming he gets to fuck you first. Vasily and Vitek shrug and take place near your head, expecting you to give them blowjobs while Dan slips his cock inside your eager cunt and begins to thrust his hips against yours.');
    scene.text('Dan\'s dick feels great inside you, and you\'re not afraid to show the guys that you\'re enjoying it. You moan excitedly and eagerly switch from Vasily\'s to Vitek\'s cock and back, trying to please all of them.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'hj', 5, $npcID[1], 'gangbang'
    // TODO-QSP: gs 'arousal', 'vaginal', -5, $npcID[2], 'gangbang'
    // TODO-QSP: gs 'arousal', 'hj', -5, $npcID[3], 'gangbang'
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_5.jpg');
    scene.text('For a moment, you try to take both of the dicks inside your mouth while Dan fucks you from behind.');
    scene.text('However, Dan can no longer hold back and begins to vigorously slam his hips into yours, making your butt cheeks bounce whenever he bottoms out in you.');
    scene.text('You fully surrender to him and can\'t really focus on the blowjob you\'re giving any more, only making some weak attempts to lick Vitek\'s and Shulga\'s cocks to make sure they don\'t feel left out entirely.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: gs 'arousal', 'vaginal', 5, $npcID[2], 'gangbang'
    // TODO-QSP: gs 'arousal', 'bj', -5, $npcID[3], 'deepthroat'
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_6.jpg');
    scene.text('When you next take Vitek\'s cock in your mouth, he puts his hands behind your head and forces you to take his full length down your throat. Your nose is against his hairy groin before you know it, and you cough in surprise. At least, you try to.');
    scene.text('With his dick all the way down your throat, you can\'t do much but convulsively swallow, and try to pull away from him. He realizes you\'re having trouble deepthroating him, and pulls away from you.');
    scene.text('You gasp loudly once you can breathe again, and sob and retch for a while… with Dan still fucking you all the same. You can tell Vitek feels bad for pushing you too hard, and you give him a grateful look when he lets go of your head and lets you take over again. You carefully lick and kiss the head of his penis for a moment, as your way of thanking him.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: gs 'cum_call', 'face', $boy[2], 1, '', '', 30
    // TODO-QSP: gs 'cum_call', 'hair', $boy[2], 1, '', '', 10
    // TODO-QSP: gs 'cum_call', 'face', $boy[1], 1, '', '', 10
    // TODO-QSP: gs 'cum_call', 'hair', $boy[1], 1, '', '', 30
    // TODO-QSP: gs 'cum_call', 'face', $boy[3], 1, '', '', 30
    // TODO-QSP: gs 'cum_call', 'breasts', $boy[3], 1, '', '', 10
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/gsex/ev1_7.jpg');
    scene.text('A little while later the guys tell you to get down on your knees, and surround you. They jerk themselves off, and shoot their hot cum all over your face and in your hair.');
    scene.text('They all sit down and take a minute to catch your breaths, with your naked body sprawled out on the floor in front of them. When you sit back up again, you catch a glimpse of yourself in a large mirror: you look like a mess! Your hair is seriously disheveled and has sperm in it and your face looks all messy and puffy, with gobs of cum smeared all over your cheeks and chin.');
    scene.text('That was definitely not what you bargained for, when you wanted to play a game of cards with the guys…');
    scene.actions([
      { label: 'Put your clothes back on', goto: ['vasilyhome', 'livingroom'] },
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
  } },
  ]);
  scene.build();
}

function enterCardGameRoughSex(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'bj', 5, 'deepthroat', 'sub');
  qspCall(s, 'stat', '');
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sexrough/bj' + (Math.floor(Math.random() * 10) + 1) + '.mp4');
  // TODO-QSP: dynamic text: <<$boydesc>> unceremoniously moves up to you, and thrusts his erect dick into yo...
  scene.text(`${((s as any).boydesc || '')} unceremoniously moves up to you, and thrusts his erect dick into your mouth without saying a word.`);
  scene.text('"This is for you, slut", he hisses as he grabs your hair in his hands, and begins to thrust his hips against your face, fucking your throat roughly.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'anal', 10);
    qspCall(st, 'cum_call', 'anus', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sexrough/sex1_' + (Math.floor(Math.random() * 10) + 1) + '.mp4');
    // TODO-QSP: dynamic text: "I want your ass next, bitch", <<$boydesc>> says. "Get on your hands and knees, ...
    scene.text(`"I want your ass next, bitch", ${((st as any).boydesc || '')} says. "Get on your hands and knees, and offer yourself to me."`);
    scene.text('You hesitantly do as he says, spreading your buttocks with your hands once you lower yourself to the ground.');
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
      // TODO-QSP: dynamic text: <<$boydesc>> laughs: "This would only get in the way. Out you go!", and he tugs ...
      scene.text(`${((st as any).boydesc || '')} laughs: "This would only get in the way. Out you go!", and he tugs the plug out of your ass and tosses it aside.`);
    }
    if (((st as any).mc_inventory ?? 0)?.['lubricant'] > 0) {
      (st as any).agape = 2;
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
      scene.text('"Wait! I have some lubricant with me somewhere, you could use that!" you offer.');
      // TODO-QSP: dynamic text: When you reach up in an effort to go get it, <<$boydesc>> pushes you back down a...
      scene.text(`When you reach up in an effort to go get it, ${((st as any).boydesc || '')} pushes you back down and says matter-of-factly: "No. You're my prize, and I can fuck you how I want. I want to fuck you dry, so that's what I'm going to do. Cute of you to always have lube on you just in case you might get your ass fucked that day though, very classy!"`);
      scene.text('You bite your lip and move back in position, hoping he will take it easy on you. All you can do at this point is relax, hopefully that will make it easier.');
    }
    // TODO-QSP: dynamic text: Unfortunately for you, <<$boydesc>> is not very careful and just crams the head ...
    scene.text(`Unfortunately for you, ${((st as any).boydesc || '')} is not very careful and just crams the head of his cock in.`);
    // TODO-QSP: dynamic text: You groan and scream and cry, hoping the pain will subside soon while <<$boydesc...
    scene.text(`You groan and scream and cry, hoping the pain will subside soon while ${((st as any).boydesc || '')} begins to fuck your ass. He's not even particularly rough with you, but it still stings a lot. You're not even sure why he insists on doing this… when you look back you occasionally see him wince too. If this is not comfortable for either of you, why does he insist on going on?`);
    scene.text('After a few minutes of you obediently enduring the ass fucking you\'re receiving, it doesn\'t hurt that much any more. There\'s still a little discomfort, but you\'re able to ignore that and even gain some pleasure out of it.');
    // TODO-QSP: dynamic text: Then <<$boydesc>> shoots his load inside your ass, and says with a grin: "Who''s...
    scene.text(`Then ${((st as any).boydesc || '')} shoots his load inside your ass, and says with a grin: "Who's next? If we want her to be a good little butt slut for us in the future, she's going to need more training! Stretch that hole, guys!"`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(st, 'npcStat', '', ((st as any).boy ?? 0), 'c');
    if (((st as any).boy ?? 0) === 'A9') {
      qspCall(st, 'npcStat', 'A10', 'a\' else gs \'npcStat', 'A9', 'a');
    }
    qspCall(st, 'arousal', 'anal', 8, ((st as any).npcID1 ?? 0), 'gangbang');
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID1 ?? 0), 1);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy1 ?? 0)] = 1;
    if (((st as any).boy ?? 0) === 'A11') {
      qspCall(st, 'npcStat', 'A10', 'b\' else gs \'npcStat', 'A11', 'b');
    }
    qspCall(st, 'arousal', 'anal', 8, ((st as any).npcID2 ?? 0), 'gangbang');
    qspCall(st, 'cum_call', 'anus', ((st as any).npcID2 ?? 0), 1);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy2 ?? 0)] = 1;
    qspCall(st, 'arousal', 'anal', 5, ((st as any).npcID3 ?? 0), 'gangbang');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sexrough/sex2_' + (Math.floor(Math.random() * 10) + 1) + '.mp4');
    // TODO-QSP: dynamic text: You were about to get up once <<$boydesc3>> finished in you, but his friends sto...
    scene.text(`You were about to get up once ${((st as any).boydesc3 || '')} finished in you, but his friends stop you. "Everyone gets to have a go, slut. I won your ass, so I decide when you're done. Stay down", he orders you.`);
    scene.text('You meekly hang your head and get back in the position, deciding to just get it over with. Getting assfucked like some 50 ruble whore is not how you expected this game to end… but there are three of them, and they\'re all stronger than you. What can you do?');
    // TODO-QSP: dynamic text: Luckily, <<$boydesc3>>''s cum acts as a lubricant to an extent, and when someone...
    scene.text(`Luckily, ${((st as any).boydesc3 || '')}'s cum acts as a lubricant to an extent, and when someone else pushes their dick inside your already opened sphincter, it doesn't hurt quite as much any more. In fact… it actually feels kind of nice! You moan softly, trying to hide how much you're enjoying this from the guys. They'd just get the wrong idea…`);
    // TODO-QSP: dynamic text: The guys use your asshole as they see fit for the next twenty minutes, not reall...
    scene.text(`The guys use your asshole as they see fit for the next twenty minutes, not really paying any attention to your feelings. When his friends finish ${((st as any).boydesc3 || '')}'s cock is hard again, and he eagerly fucks you again while he still can.`);
    if (((st as any).pcs_horny ?? 0) >=70) {
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'Your pussy is drenched by the time ' + ((st as any).boydesc3 ?? 0) + ' fucks you again. The guys haven\'t shown any interest in it today, fully focusing on fucking your ass as if you\'re just a rubber doll. You feel greatly aroused despite (or maybe because of?) the way they\'re treating you, and gently masturbate yourself while ' + ((st as any).boydesc3 ?? 0) + ' fucks you. You stifle your moans and have a quiet orgasm, trying to not let the guys find out.';
      qspCall(st, 'arousal', 'masturbate', 2, 'exhibitionism');
    }
    // TODO-QSP: dynamic text: "Almost done, whore. Show us your ass", <<$boydesc3>> smirks with contempt.
    scene.text(`"Almost done, whore. Show us your ass", ${((st as any).boydesc3 || '')} smirks with contempt.`);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Show them', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 5);
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sexrough/ass' + (Math.floor(Math.random() * 9) + 1) + '.jpg');
    scene.text('You obediently spread your ass cheeks, showing your gaping anus to the boys. That\'s going to take a while before it closes again.');
    scene.text('They look at you for a few minutes, proudly discussing on what a good job they did today.');
    // TODO-QSP: dynamic text: Then <<$boydesc3>> slaps your ass cheek and grins: "Alright, slut. We''ve traine...
    scene.text(`Then ${((st as any).boydesc3 || '')} slaps your ass cheek and grins: "Alright, slut. We've trained your hole enough for today. Go freshen up."`);
    scene.actions([
      { label: 'Go to the bathroom', goto: ['vasilyhome', 'bathroom'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardGameCasualSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).boy ?? 0) === 'A11') {
    scene.img('images/characters/pavlovsk/school/boy/vasya/vasya.jpg');
  } else {
    if (((s as any).boy ?? 0) === 'A10') {
      scene.img('images/characters/pavlovsk/school/boy/dan/dan.jpg');
    } else {
      if (((s as any).boy ?? 0) === 'A9') {
        scene.img('images/characters/pavlovsk/school/boy/vitek/vitek.jpg');
      }
    }
  }
  // TODO-QSP: dynamic text: "Well, you lost <<$pcs_nickname>>. Now you have to pay for all the shit, you coo...
  scene.text(`"Well, you lost ${((s as any).pcs_nickname || '')}. Now you have to pay for all the shit, you cooked up for us!" ${((s as any).boydesc || '')} says.`);
  scene.text('"Come on, you can barely come up with something beyond fuck me, anyway." You make a snide comment.');
  scene.text('"That\'s not true! I want you to go out onto the street and we will find a stranger and let him fuck you right there.');
  scene.text('"What the fucking kind of shit is that! I\'ve not forced you to fuck anyone…"');
  scene.text('"You\'re a bitch, for coming up with all that rubbish you made us do and now you will have to pay for it. So stop your bitching, you lost, so pay up!"');
  scene.text('You have no choice, you lost and now have to pay up the debt by fulfilling his wish.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    (st as any).guy = ((st as any).guy ?? 0) + (1);
    (st as any).orgasm_or = 'no';
    qspCall(st, 'npcgeneratec', '', 0, 'stranger', (Math.floor(Math.random() * 23) + 18));
    qspCall(st, 'npcStat', '', ((st as any).npclastgenerated ?? 0));
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).npclastgenerated ?? 0)] = 1;
    qspCall(st, 'arousal', 'bj', 10, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/street_event/sexbj1.mp4');
    scene.text('The boys point at a man. You approach the guy and offer to have sex. No wonder that the stranger quickly agreed… ');
    scene.text('You quickly find a secluded area, once you do he pulls his dick out and tells you to start sucking it. You squat down and take his dick in your mouth.');
    scene.text('"You are great! You must do this a lot, don\'t you?", The man asks you.');
    scene.text('"Yes, every day." You answer honestly.');
    scene.text('"I got a good slut today. Bend over so I can fuck you doggie!" The man commands you.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal', 10);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/street_event/sex1.mp4');
    scene.text('You turn around and lean against the wall. The guy starts to fuck you from behind, at first slowly and gradually increases the pace of screwing.');
    scene.text('"Do you also let boys fuck you ever day?" The guy asks.');
    scene.text('You grasp that he is excited with such talk and you decide to play along.');
    scene.text('"Yes, they use my body every day, I get off and letting guys fuck me like a whore. The more I can find to fuck me, the happier I am."');
    if (((st as any).pcs_horny ?? 0) >=70) {
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'You are overcome by surging emotions and your body convulses with waves of pleasure. You let out a loud moan. "Oh! More… don\'t stop. Oh yeah! Oh!"';
      qspCall(st, 'arousal', 'masturbate', 2, 'exhibitionism');
      scene.text('"The guy is surprised by your stormy climax and he says with a grin: "You cum like a wild cat, I love nymphos like you. Could you give me your phone number?"');
      scene.text('"Maybe, but first you should finish", You answer with a smirk.');
    }
    scene.text('A few minutes later the man pulls his dick out, strips off his condom and shoots his load on the wall. Before he could bat an eye, you pull your clothes on and run away.');
    scene.text('The boys are nearby all the time and record everything on a mobile phone.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardGameWon(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  qspCall(s, 'mood', 'raise', 'tiny');
  (s as any).playcardgame_day = ((s as any).daystart ?? 0);
  (s as any).playcardgame_count = ((s as any).playcardgame_count ?? 0) - (1);
  qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
  qspCall(s, 'willpower', 'exhib', 'force', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' expose himself to a random girl', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' expose himself to a random girl', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'exhib', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'cardgame_durak', 'card_game_won_expose_penis');
  } },
    ]);
  }
  (s as any).temp_fame = qspFunc(s, 'cardgame_durak', 'get_mod_fame');
  if (((s as any).temp_fame ?? 0) >= 50) {
    qspCall(s, 'willpower', 'mast', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' cum on a random girl', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' cum on a random girl', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'mast', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'cardgame_durak', 'card_game_won_cum_on_girl');
  } },
      ]);
    }
  }
  if (((s as any).temp_fame ?? 0) >= 100) {
    qspCall(s, 'willpower', 'cuni', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' lick your pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' lick your pussy', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'cuni', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'cardgame_durak', 'card_game_won_lick_my_pussy');
  } },
      ]);
    }
  }
  if (((s as any).temp_fame ?? 0) >= 150) {
    qspCall(s, 'willpower', 'anal', 'force', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' fuck your ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' fuck your ass', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'anal', 'force', 'easy');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspGoto(st, 'cardgame_durak', 'card_game_won_fuck_my_ass');
  } },
      ]);
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => 'Make ' + String(((s as any).loss_npc_name || '') ?? '') + ' expose a random girl', goto: ['cardgame_durak', 'card_game_won_expose_girl'] },
  ]);
  scene.build();
}

function enterCardGameWonExposeGirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$loss_npc_img>>
  scene.text(`${((s as any).loss_npc_img || '')}`);
  // TODO-QSP: dynamic text: You can barely hide the smirk on your face as you say: "So… <<$loss_npc_name>>, ...
  scene.text(`You can barely hide the smirk on your face as you say: "So… ${((s as any).loss_npc_name || '')}, you lose. Now you have to do what I want!"`);
  // TODO-QSP: dynamic text: "We''ll see… what is it you want?" asks <<$loss_npc_name>>.
  scene.text(`"We'll see… what is it you want?" asks ${((s as any).loss_npc_name || '')}.`);
  scene.text('You grin evilly and say: "I want you to go out on the street, and find a beautiful girl. When you do, you will pull her clothes away, exposing either her tits or her bare ass to us, while we film it with our phones!"');
  scene.text('You laugh at his distraught look, and add: "Your choice… do what feels right."');
  // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Can''t you think of anything else?" <<$loss_npc_nam...
  scene.text(`"Come on, ${((s as any).pcs_nickname || '')}! Can't you think of anything else?" ${((s as any).loss_npc_name || '')} pleads, lightly frustrated.`);
  scene.text('Before you can reply, his friends say: "You knew the rules! If you lose, you have to do what the winner wants. No questions asked."');
  // TODO-QSP: dynamic text: <<$loss_npc_name>> slumps a little, but he knows his friends are right: "Alright...
  scene.text(`${((s as any).loss_npc_name || '')} slumps a little, but he knows his friends are right: "Alright then, let's get this over with…"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$loss_npc_name>> exits the house, and the rest of you follow him. He does as y...
    scene.text(`${((st as any).loss_npc_name || '')} exits the house, and the rest of you follow him. He does as you ask, and can barely escape when the furious lady chases him all the way down the street.`);
    scene.text('A few minutes later, he returns to you. His face is all red from the running, and he\'s still out of breath when he says: "There… happy? She looked like she wanted to kill me!"');
    scene.text('You grin, and show him the video you shot with your mobile phone:');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/street_event/j' + (Math.floor(Math.random() * 12) + 1) + '.mp4');
    // TODO-QSP: dynamic text: "Why is the camera shaking so much!? This looks like shit!" <<$loss_npc_name>> a...
    scene.text(`"Why is the camera shaking so much!? This looks like shit!" ${((st as any).loss_npc_name || '')} asks, clearly frustrated now.`);
    scene.text('His friends are also nearly out of breath, but it\'s from laughing so hard. Finally, one of them manages to say: "I\'m sorry, man! It just looked hilarious! None of us could hold our cameras still, we were laughing so hard!"');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardGameWonExposePenis(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$loss_npc_img>>
  scene.text(`${((s as any).loss_npc_img || '')}`);
  // TODO-QSP: dynamic text: You can barely hide the smirk on your face as you say: "So… <<$loss_npc_name>>, ...
  scene.text(`You can barely hide the smirk on your face as you say: "So… ${((s as any).loss_npc_name || '')}, you lose. Now you have to do what I want!"`);
  // TODO-QSP: dynamic text: "We''ll see… what is it you want?" asks <<$loss_npc_name>>.
  scene.text(`"We'll see… what is it you want?" asks ${((s as any).loss_npc_name || '')}.`);
  scene.text('You grin evilly and say: "I want you to go out on the street, and find a beautiful girl. When you do, you will show her your dick, while we film it with our phones!"');
  // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>! Can''t you think of anything else?" <<$loss_npc_nam...
  scene.text(`"Come on, ${((s as any).pcs_nickname || '')}! Can't you think of anything else?" ${((s as any).loss_npc_name || '')} pleads, lightly frustrated.`);
  scene.text('Before you can reply, his friends say: "You knew the rules! If you lose, you have to do what the winner wants. No questions asked."');
  // TODO-QSP: dynamic text: <<$loss_npc_name>> slumps a little, but he knows his friends are right: "Alright...
  scene.text(`${((s as any).loss_npc_name || '')} slumps a little, but he knows his friends are right: "Alright then, let's get this over with…"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$loss_npc_name>> exits the house, and the rest of you follow him. He does as y...
    scene.text(`${((st as any).loss_npc_name || '')} exits the house, and the rest of you follow him. He does as you ask, and can barely escape when the furious lady chases him all the way down the street.`);
    scene.text('A few minutes later, he returns to you. His face is all red from the running, and he\'s still out of breath when he says: "There… happy? She looked like she wanted to kill me!"');
    scene.text('You grin, and show him the video you shot with your mobile phone:');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/street_event/p' + (Math.floor(Math.random() * 3) + 1) + '.mp4');
    // TODO-QSP: dynamic text: "Why is the camera shaking so much!? This looks like shit!" <<$loss_npc_name>> a...
    scene.text(`"Why is the camera shaking so much!? This looks like shit!" ${((st as any).loss_npc_name || '')} asks, clearly frustrated now.`);
    scene.text('His friends are also nearly out of breath, but it\'s from laughing so hard. Finally, one of them manages to say: "I\'m sorry, man! It just looked hilarious! None of us could hold our cameras still, we were laughing so hard!"');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardGameWonCumOnGirl(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).cg_clother_cum = ((s as any).cg_clother_cum ?? 0) + (1);
  qspCall(s, 'stat', '');
  // TODO-QSP: dynamic text: <<$loss_npc_img>>
  scene.text(`${((s as any).loss_npc_img || '')}`);
  // TODO-QSP: dynamic text: You grin at <<$loss_npc_name>> and say: "Aww <<$loss_npc_name>>, what a bad time...
  scene.text(`You grin at ${((s as any).loss_npc_name || '')} and say: "Aww ${((s as any).loss_npc_name || '')}, what a bad time for you to lose! My wish today won't be easy!"`);
  // TODO-QSP: dynamic text: <<$loss_npc_name>> sighs: "Let''s get it over with. What do you want?"
  scene.text(`${((s as any).loss_npc_name || '')} sighs: "Let's get it over with. What do you want?"`);
  scene.text('"Let\'s go find you a nice girl", you smile mysteriously. "I\'ll pick someone, and you have to run up and jerk off over her clothes! Of course, we\'ll be recording it with our phones…"');
  // TODO-QSP: dynamic text: <<$loss_npc_name>> looks concerned: "What, are you crazy!? That''s insane… and b...
  scene.text(`${((s as any).loss_npc_name || '')} looks concerned: "What, are you crazy!? That's insane… and besides, I can't cum that fast! That would never work!"`);
  // TODO-QSP: dynamic text: "I thought you would say that, <<$loss_npc_name>>. Don''t worry, I thought of th...
  scene.text(`"I thought you would say that, ${((s as any).loss_npc_name || '')}. Don't worry, I thought of that… how about if I help you get close?" you smile at him, licking your ${((s as any).pc_desc ?? 0)?.['lips'] ?? ''} lips lips lewdly.`);
  // TODO-QSP: dynamic text: His friends are laughing, but <<$loss_npc_name>> suddenly shows a lot more inter...
  scene.text(`His friends are laughing, but ${((s as any).loss_npc_name || '')} suddenly shows a lot more interest in your plan. If you're willing to blow him until he's about to burst, that's more than the others are getting from you today!`);
  // TODO-QSP: dynamic text: You leave the apartment with the guys, who are clearly excited to see this plan ...
  scene.text(`You leave the apartment with the guys, who are clearly excited to see this plan of yours play out. "Let's go find a nice girl for ${((s as any).loss_npc_name || '')}, guys!" you shout happily.`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 10);
    qspCall(st, 'stat', '');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})[String((st as any).boy ?? 0)] = 1;
    // TODO-QSP: dynamic text: After a few minutes, you find someone. "Alright, <<$loss_npc_name>>, come here",...
    scene.text(`After a few minutes, you find someone. "Alright, ${((st as any).loss_npc_name || '')}, come here", you whisper to him as you drag him out of view.`);
    scene.text('You quickly drop to your knees and take his cock in your mouth, giving him a skillful blowjob. The other guys are actually a bit jealous when they see you on your knees before your friend, and pull out their phones to record you:');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/street_event/bj' + (Math.floor(Math.random() * 2) + 1) + '.mp4');
    // TODO-QSP: dynamic text: When you lick <<$loss_npc_name>> close to his orgasm, he runs to his victim.
    scene.text(`When you lick ${((st as any).loss_npc_name || '')} close to his orgasm, he runs to his victim.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/street_event/cum' + (Math.floor(Math.random() * 2) + 1) + '.mp4');
    // TODO-QSP: dynamic text: While you idly wipe your lips with the back of your hand and watch <<$loss_npc_n...
    scene.text(`While you idly wipe your lips with the back of your hand and watch ${((st as any).loss_npc_name || '')} run, his friends are shooting everything on film with their mobiles.`);
    scene.text('When you watch the video back with the guys, it turns out that the video\'s quality is downright lousy. It\'s very shaky, and there\'s a lot of background noise of the three of you laughing your butts off.');
    // TODO-QSP: dynamic text: <<$loss_npc_name>> comes back, his face as red as a lobster. As he gasps for bre...
    scene.text(`${((st as any).loss_npc_name || '')} comes back, his face as red as a lobster. As he gasps for breath, he groans: "I'm never doing that again! ${((st as any).pcs_nickname || '')}, the next time you lose… I'm going to make you pay!"`);
    scene.text('You and the other guys are laughing loudly as you return to Vasily\'s apartment. The next time you lose? You\'ll see about that…');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardGameWonLickMyPussy(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  (s as any).cg_pussy_licked = ((s as any).cg_pussy_licked ?? 0) + (1);
  if (((s as any).boy ?? 0) === 'A11') {
    // TODO-QSP: dynamic text: <<$loss_npc_img>>
    scene.text(`${((s as any).loss_npc_img || '')}`);
    scene.text('You grin: "I\'m actually feeling rather horny. Be a dear and lick my pussy for me, would you?"');
    scene.text('Vasily grins eagerly and says: "What, really? I thought you were going to make me do something I didn\'t want to do!"');
    scene.text('He eagerly drops to his knees and begins to lick your wet snatch, being egged on by his friends.');
  } else {
    if (((s as any).boy ?? 0) === 'A10') {
      // TODO-QSP: dynamic text: <<$loss_npc_img>>
      scene.text(`${((s as any).loss_npc_img || '')}`);
      scene.text('You look at Dan commandingly, and tell him: "Dan, lick my pussy. Now."');
      scene.text('Dan is not particularly eager, but he lost. And rules are rules. He obediently puts his tongue against your pussy, and reluctantly begins to eat you out.');
    } else {
      // TODO-QSP: dynamic text: <<$loss_npc_img>>
      scene.text(`${((s as any).loss_npc_img || '')}`);
      scene.text('You grin: "Vitek, darling… I\'m actually feeling rather horny. Be a dear and lick my pussy for me, would you?"');
      scene.text('Vitek shakes his head and quickly looks around, looking for a way out of his predicament. His friends love the idea though, and stop him from refusing. Vasily says: "You know the rules of strip poker! If you lose, you have to do what the winner says!"');
      scene.text('With a deep sigh, Vitek drops to his knees and reluctantly puts his tongue against your wet folds. You can tell he feels thoroughly humiliated.');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'cuni', 8);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/lick' + (Math.floor(Math.random() * 6) + 1) + '.jpg');
    // TODO-QSP: dynamic text: For the next ten minutes, <<$boydesc>> does his best to bring you to orgasm with...
    scene.text(`For the next ten minutes, ${((st as any).boydesc || '')} does his best to bring you to orgasm with his tongue and lips.`);
    if (((st as any).pcs_horny ?? 0) >= 70) {
      (st as any).orgasm_or = 'yes';
      (st as any).orgasm_txt = 'He does a fantastic job of it, and within minutes you\'re mewling and breathing in short gasps as you hover on the edge of your orgasm. When you finally have to yield, his friends cheer loudly and even ' + ((st as any).boydesc ?? 0) + ' has a smug look on his face when he continues to lick you. Rules are rules, after all; you didn\'t say he was done.';
      qspCall(st, 'arousal', 'cuni', 2);
    } else {
      if (((st as any).pcs_horny ?? 0) < 70) {
        // TODO-QSP: dynamic text: <<$boydesc>> does his best to get you to orgasm. He''s doing all the right thing...
        scene.text(`${((st as any).boydesc || '')} does his best to get you to orgasm. He's doing all the right things and you feel very aroused, but in the end you can't quite reach an orgasm this time. After a while you can tell his tongue is starting to feel exhausted, and you tell him he can stop.`);
        qspCall(st, 'arousal', 'cuni', 2);
      }
    }
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterCardGameWonFuckMyAss(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  ((s as any).npc_had_sex = (s as any).npc_had_sex ?? {})[String((s as any).boy ?? 0)] = 1;
  if (((s as any).boy ?? 0) === 'A11') {
    // TODO-QSP: dynamic text: <<$loss_npc_img>>
    scene.text(`${((s as any).loss_npc_img || '')}`);
    scene.text('You smile at Vasily and say: "Vasily, dear… it\'s been a while since a real man fucked my ass. Perhaps you could help me with that?"');
    scene.text('Vasily\'s eyes light up, he was expecting you to pick something humiliating. Instead, he gets to fuck you!? He immediately grabs you by the arm and drags you go the couch, before you can change your mind.');
  } else {
    if (((s as any).boy ?? 0) === 'A10') {
      // TODO-QSP: dynamic text: <<$loss_npc_img>>
      scene.text(`${((s as any).loss_npc_img || '')}`);
      scene.text('"Hey Dan, when is the last time you fucked a girl in the ass?" you prompt.');
      scene.text('"Uhhh…" Dan replies, not sure what to say.');
      scene.text('You wink at him and say: "If anyone asks you in fifteen minutes, you can say: fifteen minutes ago!"');
      scene.text('It takes him a while to realize what you want; getting to fuck your ass was the last thing on his mind! He immediately grabs you by the arm and drags you go the couch, before you can change your mind.');
    } else {
      // TODO-QSP: dynamic text: <<$loss_npc_img>>
      scene.text(`${((s as any).loss_npc_img || '')}`);
      scene.text('You state your wish to Vitek: "Fuck me properly!"');
      scene.text('Vitek looks at you a tad confused, and you add: "In my ass, silly!"');
      scene.text('His eyes light up, he was expecting you to pick something humiliating. Instead, he gets to fuck you!? He immediately grabs you by the arm and drags you go the couch, before you can change your mind.');
    }
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    (st as any).temp1 = (String('0117 1917 3717 5518 7421 9622').slice((5*(Math.floor(Math.random() * 6) + 0) + 1)-1, ((5*(Math.floor(Math.random() * 6) + 0) + 1)-1)+(4)));
    (st as any).temp2 = (String('104cumass/cumass5 204cumass/cumass4 304cumass/cumass6 504cumass/cumass13 614cumbelly/cumbelly4 714cumbelly/cumbelly10').slice((parseFloat((String(((st as any).temp1 ?? 0)).slice((1)-1, ((1)-1)+(2)))))-1, ((parseFloat((String(((st as any).temp1 ?? 0)).slice((1)-1, ((1)-1)+(2)))))-1)+(parseFloat((String(((st as any).temp1 ?? 0)).slice((3)-1, ((3)-1)+(2)))))));
    qspCall(st, 'arousal', 'anal', 10);
    scene.img(`images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/sex/sex${(String(((st as any).temp2 || '')).slice((1)-1, ((1)-1)+(1)))}.jpg`);
    // TODO-QSP: dynamic text: <<$boydesc>> fucks you in the ass, like you demanded of him. He''s surprisingly ...
    scene.text(`${((st as any).boydesc || '')} fucks you in the ass, like you demanded of him. He's surprisingly careful with you, using plenty of lube and ensuring that he's making you feel good as he does it. What a nice change from the normal way the boys treat you…`);
    qspCall(st, 'gopsex', 'gg_sex_orgasm');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = parseFloat((String(((st as any).temp2 ?? 0)).slice((2)-1, ((2)-1)+(2))));
    qspCall(st, 'mood', 'raise', 'medium');
    qspCall(st, 'cum_manage', '');
    qspCall(st, 'arousal', 'end');
    scene.img(`images/pc/body/cum/${(String(((st as any).temp2 || '')).slice((4)-1, ((4)-1)+(parseFloat((String(((st as any).temp1 || '')).slice((3)-1, ((3)-1)+(2))))-3)))}.jpg`);
    scene.text('After a while he can\'t hold back any longer, and you feel the hot jets of his sperm land on your body.');
    scene.text('You drag your finger through some of it and bring it to your tongue, to have a taste. It doesn\'t taste particularly good, but it\'s not bad either.');
    // TODO-QSP: dynamic text: "Mmmm… delicious, babe!" you muse, more to make him feel good than anything. You...
    scene.text(`"Mmmm… delicious, babe!" you muse, more to make him feel good than anything. You smile at the proud grin ${((st as any).boydesc || '')} has on his face afterwards, and feel slightly better for having made his day.`);
    scene.actions([
      { label: 'Finish', goto: ['vasilyhome', 'livingroom'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'get_mod_fame':
      enterGetModFame(s, scene);
      break;
    case 'start':
      enterStart(s, scene);
      break;
    case 'card_game_durak_play':
      enterCardGameDurakPlay(s, scene);
      break;
    case 'card_game_lost':
      enterCardGameLost(s, scene);
      break;
    case 'card_game_nosex':
      enterCardGameNosex(s, scene);
      break;
    case 'card_game_nosex_dance':
      enterCardGameNosexDance(s, scene);
      break;
    case 'card_game_group_sex':
      enterCardGameGroupSex(s, scene);
      break;
    case 'card_game_rough_sex':
      enterCardGameRoughSex(s, scene);
      break;
    case 'card_game_casual_sex':
      enterCardGameCasualSex(s, scene);
      break;
    case 'card_game_won':
      enterCardGameWon(s, scene);
      break;
    case 'card_game_won_expose_girl':
      enterCardGameWonExposeGirl(s, scene);
      break;
    case 'card_game_won_expose_penis':
      enterCardGameWonExposePenis(s, scene);
      break;
    case 'card_game_won_cum_on_girl':
      enterCardGameWonCumOnGirl(s, scene);
      break;
    case 'card_game_won_lick_my_pussy':
      enterCardGameWonLickMyPussy(s, scene);
      break;
    case 'card_game_won_fuck_my_ass':
      enterCardGameWonFuckMyAss(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const cardgame_durak: LocationDef = {
  name: 'cardgame_durak',
  title: '"Cards? We can deal you in, but only if you want to play str',
  region: 'other',
  enter: enter,
};
