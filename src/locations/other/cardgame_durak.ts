import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGetModFame(s: GameState, scene: SceneBuilder): void {
  (s as any).result = ((s as any).fame ?? 0)?.['pav_slut'] + ((s as any).card_game_durak_nude ?? 0) + ((s as any).cg_clother_cum ?? 0) + ((s as any).cg_pussy_licked ?? 0) + ((s as any).npc_vaginal_count ?? 0)?.['A9'] + ((s as any).npc_vaginal_count ?? 0)?.['A10'] + ((s as any).npc_vaginal_count ?? 0)?.['A11'] + ((s as any).npc_anal_count ?? 0)?.['A9'] + ((s as any).npc_anal_count ?? 0)?.['A10'] + ((s as any).npc_anal_count ?? 0)?.['A11'] + ((s as any).npc_oral_count ?? 0)?.['A9'] + ((s as any).npc_oral_count ?? 0)?.['A10'] + ((s as any).npc_oral_count ?? 0)?.['A11'] + ((s as any).vasily ?? 0)?.['drunk_sex'];
  return;
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).playcardgame_count ?? 0) > 0) {
    (s as any).cgd_cs = Math.floor(Math.random() * 20) + 1;
    qspCall(s, 'npcStat', 'A9', '3');
    qspCall(s, 'npcStat', 'A10', '1');
    qspCall(s, 'npcStat', 'A11', '2');
    if (((s as any).PCloSkirt ?? 0) > 0) {
      (s as any).cgd_cs = Math.floor(Math.random() * 5) + 1;
    } else {
      if (Math.floor(Math.random() * 2) + 0 === 0) {
        (s as any).cgd_cs = Math.floor(Math.random() * 2) + 6;
      } else {
        (s as any).cgd_cs = Math.floor(Math.random() * 7) + 8;
      }
      (s as any).cgd_cs = Math.floor(Math.random() * 6) + 15;
    }
    (s as any).cgd_clothes['A11'] = ' shirt, shorts, socks, briefs';
    (s as any).cgd_clothes['A10'] = ' track jacket, tracksuit pants, socks, briefs';
    (s as any).cgd_clothes['A9'] = ' shirt, jeans, socks, briefs';
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/durak.jpg');
    scene.text('"Cards? We can deal you in, but only if you want to play strip poker", Vitek grins. "The loser does whatever the winner wants them to do. Because you\'re a girl, you\'ll get one extra piece of clothing to start with. Sound fair?"');
    // TODO-QSP: dynamic text: Your game statistics: You've won <<card_game_durak_win>> times, lost <<card_game...
    scene.text(`Your game statistics: You've won ${((s as any).card_game_durak_win ?? 0)} times, lost ${((s as any).card_game_durak_loss ?? 0)} times, managed a draw ${((s as any).card_game_durak_draw ?? 0)} times, and ended up naked ${((s as any).card_game_durak_nude ?? 0)} times.`);
    qspCall(s, 'willpower', 'misc', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Not now [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Not now', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['vasilyhome', 'livingroom'] },
      ]);
    }
    scene.actions([
      { label: 'Play and deal', goto: ['cardgame_durak', 'card_game_durak_play'] },
    ]);
  } else {
    // TODO-QSP: dynamic text: <<iif(RAND(0,1) = 0,'Dan','Vitek')>> sighs: "I'm tired of playing cards. Let's j...
    scene.text(`${(Math.floor(Math.random() * 2) + 0 === 0) ? ('Dan') : ('Vitek')} sighs: "I'm tired of playing cards. Let's just watch some TV or something, or have some more beers."`);
    scene.actions([
      { label: 'Leave', goto: ['vasilyhome', 'livingroom'] },
    ]);
  }
  qspCall(s, 'stat', '');
  scene.build();
}

function enterCardGameDurakPlay(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 3;
  qspCall(s, 'stat', '');
  scene.text('<center><b>You\'re playing strip poker with the guys. The game will continue until one of you is completely naked.</b></center>');
  scene.img(`images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/${((s as any).cgd_cs ?? 0)}-${6-(3+((((s as any).cgd_clothes ?? 0)).length))/7}.jpg`);
  // TODO-QSP: dynamic text: <br><<$cgdp_pc_state>><br><<$cgdp_A11_state>><br><<$cgdp_A10_state>><br><<$cgdp_...
  scene.text(`<br>${((s as any).cgdp_pc_state ?? 0)}<br>${((s as any).cgdp_A11_state ?? 0)}<br>${((s as any).cgdp_A10_state ?? 0)}<br>${((s as any).cgdp_A9_state ?? 0)}<br>`);
  if (((s as any).cgd_clothes ?? 0) === '') {
    // TODO-QSP: xgt 'cardgame_durak', 'card_game_lost'
  } else {
    if (((s as any).cgd_clothes ?? 0)?.['A11'] === '') {
      qspCall(s, 'npcStat', 'A11');
    } else {
      qspCall(s, 'npcStat', 'A10');
      qspCall(s, 'npcStat', 'A9');
    }
    // TODO-QSP: xgt 'cardgame_durak', 'card_game_won'
    (s as any).temp_alko = 0;
    (s as any).temp_durak_trying = ((s as any).ARGS ?? 0)[1] * ((s as any).rand ?? 0)(10, 20);
    (s as any).temp_durak_win_chance = 50 - 2 * ((s as any).temp_alko ?? 0) + ((s as any).temp_durak_trying ?? 0);
    (s as any).temp_durak_not_lose_chance = ((s as any).temp_durak_win_chance ?? 0) + 20 - ((s as any).temp_alko ?? 0);
    (s as any).temp_durak_result = Math.floor(Math.random() * 100) + 1;
    if (((s as any).temp_durak_result ?? 0) <= ((s as any).temp_durak_win_chance ?? 0)) {
      (s as any).card_game_durak_win = ((s as any).card_game_durak_win ?? 0) + (1);
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
      qspCall(s, 'mood', 'raise', 'tiny');
      if (((((s as any).cgd_clothes ?? 0)?.[String((s as any).cgd_name_npc ?? 0)]).indexOf(('socks'))) + 1 > 0) {
        // TODO-QSP: $cgd_clothes[$cgd_name_npc] = $replace($cgd_clothes[$cgd_name_npc], ' socks,', '')
      } else {
        // TODO-QSP: $cgd_clothes[$cgd_name_npc] = $replace($cgd_clothes[$cgd_name_npc], '<<$clo_str>>,', '')
        // TODO-QSP: $cgd_clothes[$cgd_name_npc] = ''
      }
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/card3.jpg');
      if (((s as any).alko ?? 0) > 10) {
        scene.text('You are absolutely wasted and barely manage to win the round due to a fantastic set of cards.');
      } else {
        scene.text('You have an amazing set of cards in your hand, and manage to win the round even though you are very drunk.');
        if (((s as any).alko ?? 0) > 3) {
          scene.text('You have a great set of cards in your hand, and even though you are drunk win the round.');
        } else {
          scene.text('You have a great set of cards in your hand, and easily win the round.');
        }
        // TODO-QSP: dynamic text: <<$npc_usedname[$cgd_name_npc]>> loses, and reluctantly takes off his<<$clo_str>...
        scene.text(`${((s as any).npc_usedname ?? 0)?.[String((s as any).cgd_name_npc ?? 0)]} loses, and reluctantly takes off his${((s as any).clo_str ?? 0)}.`);
        if (((s as any).temp_durak_result ?? 0) <= ((s as any).temp_durak_not_lose_chance ?? 0)) {
          (s as any).card_game_durak_draw = ((s as any).card_game_durak_draw ?? 0) + (1);
          scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/card1.jpg');
          if (((s as any).alko ?? 0) > 10) {
            scene.text('You are absolutely wasted, but somehow manage to squeeze out a draw.');
          } else {
            scene.text('You are very drunk and make a bad call, but barely manage to get a draw.');
            if (((s as any).alko ?? 0) > 3) {
              scene.text('You might have been able to win this game, but you made a drunken mistake. Luckily the game ended in a draw.');
            } else {
              scene.text('Your hand isn\'t very good, but with some skill you manage to squeeze out a draw.');
            }
            scene.text('That was close, but you get to keep your clothes on for now!');
            (s as any).card_game_durak_loss = ((s as any).card_game_durak_loss ?? 0) + (1);
            if (((((s as any).cgd_clothes ?? 0)).indexOf(('socks'))) + 1 > 0) {
            }
            scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/card/card1.jpg');
            if (((s as any).alko ?? 0) > 10) {
              scene.text('You are absolutely wasted and don\'t stand a chance.');
            } else {
              scene.text('You are very drunk and the boys use it to their advantage. You lost this game.');
              if (((s as any).alko ?? 0) > 3) {
                scene.text('Your hand is poor and you made multiple drunken misplays. You lost this game.');
              } else {
                scene.text('Your hand is very poor, and you don\'t stand a chance.');
              }
              // TODO-QSP: dynamic text: You slowly undress for the guys, removing your<<$clo_str>>
              scene.text(`You slowly undress for the guys, removing your${((s as any).clo_str ?? 0)}`);
            }
            if (((s as any).cgd_clothes ?? 0) !== ''  &&  ((s as any).cgd_clothes ?? 0)?.['A11'] !== ''  &&  ((s as any).cgd_clothes ?? 0)?.['A10'] !== ''  &&  ((s as any).cgd_clothes ?? 0)?.['A9'] !== '') {
              qspCall(s, 'willpower', 'misc', 'self', ((s as any).temp_will_difficulty ?? 0));
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Deal and try your hardest to win [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Deal and try your hardest to win', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'self', ((s as any).temp_will_difficulty ?? 0));
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    // TODO-QSP: gt 'cardgame_durak', 'card_game_durak_play', 1
  } },
                ]);
              }
              scene.actions([
                { label: 'Deal and take it easy', handler: (st: GameState) => {
    // TODO-QSP: gt 'cardgame_durak', 'card_game_durak_play', -1
  } },
                { label: 'Deal', handler: (st: GameState) => {
    // TODO-QSP: gt 'cardgame_durak', 'card_game_durak_play', 0
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Finish the game', goto: ['cardgame_durak', 'card_game_durak_play'] },
              ]);
            }
          }
          scene.text('</td></tr></table>');
        }
      }
    }
  }
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
    default:
      enterGetModFame(s, scene);
      break;
  }
}

export const cardgame_durak: LocationDef = {
  name: 'cardgame_durak',
  title: '"Cards? We can deal you in, but only if you want to play str',
  region: 'other',
  enter: enter,
};
