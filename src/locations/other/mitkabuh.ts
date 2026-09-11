import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'miroslava_schedule', '');
  scene.build();
}

function enterDefault2(s: GameState, scene: SceneBuilder): void {
  ((s as any).npc_drunk ?? {})['A60'] = 0;
  ((s as any).GadBoy ?? {})['drunk_event'] = 0;
  ((s as any).MiraVars ?? {})['drunk_event'] = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/village/mitka_old_trailer.jpg');
  if (((s as any).GadBoy ?? 0)?.['first_drink'] === 1) {
    scene.text('You follow the boys into the woods. After about 15 minutes you get to an old rusty trailer partially overgrown with vegetation. It obviously has been here a long time.');
    scene.text('Mitka announces that we\'ve arrived. He wasn\'t joking when he said that no one would ever bother them out here.');
    scene.text('It isn\'t a very far walk but you would definitely have to know where you are going to find this place.');
  } else {
    scene.text('You follow the boys into the woods. Soon the familiar old trailer comes into view.');
  }
  if (((s as any).sunWeather ?? 0) === 1) {
    scene.text('The skies are clear today so you all decide to drink outside tonight.');
    if (((s as any).GadBoy ?? 0)?.['first_drink'] === 1) {
      scene.text('The boys have arranged a couple of logs and a bench into a small circle for everyone to sit on. Not the most comfortable seating ever but you\'ll probably be too drunk to care soon enough.');
    } else {
      scene.text('You quickly head over to the bench and sit down before anyone else can claim it.');
    }
    scene.actions([
      { label: 'Sit down outside', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partywithMira'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partyalone'] }]);
    }
  } },
    ]);
  } else {
    scene.text('The weather is poor outside today so you all decide to drink inside tonight.');
    if (((s as any).GadBoy ?? 0)?.['first_drink'] === 1) {
      scene.text('The inside of the trailer is about what you expected. A couple couches and tables in the main area along with a bedroom at the back, not that it is ever used for sleeping.');
      scene.text('There are empty bottles and cups scattered around the whole interior of the trailer and you can still smell the alcohol. This obviously not the first party in the trailer and certainly won\'t be the last.');
    } else {
      scene.text('The inside of the trailer looks like last time, just with maybe a few more empty bottles and cups strewn about. You quickly head over to the best couch and sit down before anyone else can claim it.');
    }
    scene.actions([
      { label: 'Go inside the trailer', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partywithMira'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partyalone'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterPartyalone(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/village/drunk.jpg');
  // TODO-QSP: dynamic text: You, Mitka, Kolyamba and Vasyan are sitting on some '+iif(sunWeather=1, 'logs ou...
  scene.text('You, Mitka, Kolyamba and Vasyan are sitting on some \'+iif(sunWeather=1, \'logs outside\', \'couches inside\')+\' the trailer. There is plenty of moonshine to go around but no snacks.');
  if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).alko ?? 0) < 10) {
    (s as any).alko = 10;
  }
  ((s as any).GadBoy ?? {})['drinkday'] = ((s as any).daystart ?? 0);
  if (((s as any).alko ?? 0) < 10) {
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Drink with the boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/drinking.jpg');
    scene.text('Mitka pours some of the brew into a clear plastic shot glass and hands it over to you.');
    scene.text('The moonshine burns as it goes down your throat. Your eyes water a little and you have a tough time catching your breath. You compose yourself, and look around but remember no one brought anything to eat.');
    scene.text('Mitka looks at you approvingly, "Good shit, right?"');
    if (((s as any).GadBoy ?? 0)?.['first_drink'] === 1) {
      ((s as any).GadBoy ?? {})['first_drink'] = 2;
      scene.text('"That was stronger than I expected!" you reply.');
    } else {
      scene.text('"Just as good as the last batch you made!" you reply.');
    }
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partyalone'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).npc_QW ?? 0)?.['A63'] > 0  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 3) {
      if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 0) {
        ((s as any).GadBoy ?? {})['drunk_event'] = 1;
        if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_1to9'] }]);
        } else {
          if (((s as any).npc_QW ?? 0)?.['A63'] === 10) {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_10'] }]);
          } else {
            (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
            if (((s as any).temp_rand ?? 0) < 4) {
              scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_1boy'] }]);
            } else {
              if (((s as any).temp_rand ?? 0) < 10) {
                scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_2boys'] }]);
              } else {
                scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_3boys'] }]);
              }
            }
          }
        }
      } else {
        scene.img('images/locations/gadukino/village/drunk.jpg');
        if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
          scene.text('You are way too drunk and can barely stand. You decide it is time to go for the night.');
          scene.text('As you are leaving you overhear the guys talking about you, but can\'t make out what they are saying.');
        } else {
          scene.text('You are way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
          if (((s as any).MiraVars ?? 0)?.['QW'] < 11) {
            // TODO-QSP: dynamic text: As you are leaving the guys call after you "Hey, <<$pcs_nickname>>, come drink w...
            scene.text(`As you are leaving the guys call after you "Hey, ${((s as any).pcs_nickname ?? 0)}, come drink with us again, we love fucking you!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a proper insult and just mumble, "I'm sure you can find someone else instead…"`);
          } else {
            // TODO-QSP: dynamic text: As you are leaving the guys call after you "Hey, <<$pcs_nickname>>, come drink w...
            scene.text(`As you are leaving the guys call after you "Hey, ${((s as any).pcs_nickname ?? 0)}, come drink with us again, we love fucking you!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a proper insult and just walk away.`);
          }
        }
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
        ]);
      }
    } else {
      scene.img('images/characters/shared/headshots_main/big63.jpg');
      scene.text('You are way too drunk, and can barely stand. Mitka, noticing your condition, walks over to you and laughs, "It seems you\'ve had enough for tonight. Get out of here."');
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
      ]);
    }
  }
  scene.build();
}

function enterPartywithMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mitkabuh', 'partywithMira');
  ((s as any).MiraVars ?? {})['follower'] = 0;
  ((s as any).MiraVars ?? {})['follow_time'] = 3;
  if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
    ((s as any).MiraVars ?? {})['QW'] = 1;
  }
  scene.img('images/locations/gadukino/village/drunk.jpg');
  // TODO-QSP: dynamic text: You, Mira, Mitka, Kolyamba and Vasyan are sitting on some '+iif(sunWeather=1, 'l...
  scene.text('You, Mira, Mitka, Kolyamba and Vasyan are sitting on some \'+iif(sunWeather=1, \'logs outside\', \'couches inside\')+\' the trailer. There is plenty of moonshine to go around but no snacks.');
  if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).alko ?? 0) < 10) {
    (s as any).alko = 10;
  }
  if (((s as any).MiraVars ?? 0)?.['drunk_event'] === 1  &&  ((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
    ((s as any).npc_drunk ?? {})['A60'] = 10;
  }
  if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 1) {
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    if (((s as any).npc_QW ?? 0)?.['A63'] < 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11) {
      scene.text('You and Mira are both way too drunk and can barely stand. You decide it is time to go for the night and you should walk home together.');
      scene.text('As you are leaving you overhear the guys talking about you both, but can\'t make out what they are saying.');
    } else {
      if (((s as any).npc_QW ?? 0)?.['A63'] < 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
        scene.text('You and Mira are both way too drunk and can barely stand. You decide it is time to go for the night and you should walk home together.');
        scene.text('As you are leaving the guys call after Mira "Hey, Mira, come drink with us again, we love fucking you!! Ha-ha!" They laugh as you make your way out.');
      } else {
        if (((s as any).npc_QW ?? 0)?.['A63'] >= 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11) {
          scene.text('You and Mira are both way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
          // TODO-QSP: dynamic text: As you are leaving the guys call after you "Hey, <<$pcs_nickname>>, come drink w...
          scene.text(`As you are leaving the guys call after you "Hey, ${((s as any).pcs_nickname ?? 0)}, come drink with us again, we love fucking you!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a proper insult and just mumble, "I'm sure you can find someone else instead…"`);
        } else {
          if (((s as any).npc_QW ?? 0)?.['A63'] >= 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
            scene.text('You and Mira are both way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
            // TODO-QSP: dynamic text: As you are leaving the guys call after you both "Hey, <<$pcs_nickname>> and Mira...
            scene.text(`As you are leaving the guys call after you both "Hey, ${((s as any).pcs_nickname ?? 0)} and Mira, come drink with us again, we love fucking you both!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a proper insult and just walk away with Mira.`);
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
    ]);
  } else {
    if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 0) {
      ((s as any).MiraVars ?? {})['drunk_event'] = 1;
      if (((s as any).MiraVars ?? 0)?.['QW'] === 5) {
        scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_5'] }]);
      } else {
        if (((s as any).MiraVars ?? 0)?.['QW'] === 7) {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_7'] }]);
        } else {
          if (((s as any).MiraVars ?? 0)?.['QW'] === 8) {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_8'] }]);
          } else {
            if (((s as any).MiraVars ?? 0)?.['QW'] === 9) {
              scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_9'] }]);
            } else {
              if (((s as any).MiraVars ?? 0)?.['QW'] >= 11) {
                scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_11andup'] }]);
              } else {
                scene.img('images/locations/gadukino/village/drinking.jpg');
                scene.text('You attempt to pass Mira a shot glass full of liquor, but she refuses. She has already had too much tonight and is happy to just chat the rest of the night.');
                if (((s as any).alko ?? 0) < 10) {
                  qspCall(s, 'willpower', 'drink', 'resist');
                  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                    scene.actions([
                      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    ((s as any).npc_drunk ?? {})['A60'] = 0;
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
                    ]);
                  }
                  scene.actions([
                    { label: 'Drink the shot yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
                  ]);
                } else {
                  scene.img('images/characters/gadukino/mira/girls_go.jpg');
                  scene.text('You and Mira are both way too drunk and can barely stand. You decide it is time to go for the night and you should walk home together.');
                  scene.text('As you are leaving you overhear the guys talking about you both, but can\'t make out what they are saying.');
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
                  ]);
                }
              }
            }
          }
        }
      }
    } else {
      if (((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 0) {
        ((s as any).GadBoy ?? {})['drunk_event'] = 1;
        if (((s as any).npc_QW ?? 0)?.['A63'] > 0  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 3) {
          if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_1to9'] }]);
          } else {
            if (((s as any).npc_QW ?? 0)?.['A63'] === 10) {
              scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_10'] }]);
            } else {
              (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
              if (((s as any).temp_rand ?? 0) < 4) {
                scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_1boy'] }]);
              } else {
                if (((s as any).temp_rand ?? 0) < 10) {
                  scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_2boys'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_3boys'] }]);
                }
              }
            }
          }
        } else {
          scene.img('images/locations/gadukino/village/drinking.jpg');
          scene.text('Mira attempts to pass you another shot glass full of liquor, but you refuse. You have already had too much tonight and are happy to just chat the rest of the night.');
          if (((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
            qspCall(s, 'willpower', 'drink', 'force');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Make Mira drink the shot instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Make Mira drink the shot instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    ((s as any).npc_drunk ?? {})['A60'] = (((s as any).npc_drunk ?? {})['A60'] ?? 0) + (5);
    qspCall(s, 'willpower', 'drink', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
            ]);
          } else {
            scene.img('images/characters/gadukino/mira/girls_go.jpg');
            scene.text('You and Mira are both way too drunk and can barely stand. You decide it is time to go for the night and you should walk home together.');
            scene.text('As you are leaving you overhear the guys talking about you both, but can\'t make out what they are saying.');
            scene.actions([
              { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
            ]);
          }
        }
      } else {
        if (((s as any).alko ?? 0) < 10  &&  ((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
          qspCall(s, 'willpower', 'drink', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Drink with Mira and the boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/drinking.jpg');
    scene.text('Mitka pours some of the brew into a clear plastic shot glass and hands it over to you.');
    qspCall(s, 'willpower', 'drink', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Make Mira drink the shot instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make Mira drink the shot instead [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    ((s as any).npc_drunk ?? {})['A60'] = (((s as any).npc_drunk ?? {})['A60'] ?? 0) + (5);
    qspCall(s, 'willpower', 'drink', 'force');
    qspCall(s, 'willpower', 'pay', 'force');
    qspCall(s, 'stat', '');
    scene.text('Mira examines the glass\'s contents for a moment, then gulps down the entire glass with a single toss of her head. Her eyes widen and she coughs a little, sucking in her breath with a smile. You chat with the boys as they drink as well.');
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Drink the shot yourself', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'stat', '');
    scene.text('You take the shot glass full of moonshine and quickly gulp it down, you cough and suck in your breath. Mira chats with the boys as they drink as well.');
    scene.text('Mitka looks at you approvingly, "Good shit, right?"');
    if (((s as any).GadBoy ?? 0)?.['first_drink'] === 1) {
      ((s as any).GadBoy ?? {})['first_drink'] = 2;
      scene.text('"That was stronger than I expected!" you reply.');
    } else {
      scene.text('"Just as good as the last batch you made!" you reply.');
    }
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          if (((s as any).alko ?? 0) < 10) {
            qspCall(s, 'willpower', 'drink', 'resist');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
              ]);
            }
            scene.actions([
              { label: 'Drink with the boys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'drugs', 'alcohol', 'moonshine', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/drinking.jpg');
    scene.text('Mitka pours some of the brew into a clear plastic shot glass and hands it over to you.');
    scene.text('The moonshine burns as it goes down your throat. Your eyes water a little and you have a tough time catching your breath. You compose yourself, and look around but remember no one brought anything to eat.');
    scene.text('Mitka looks at you approvingly, "Good shit, right?"');
    if (((s as any).GadBoy ?? 0)?.['first_drink'] === 1) {
      ((s as any).GadBoy ?? {})['first_drink'] = 2;
      scene.text('"That was stronger than I expected!" you reply.');
    } else {
      scene.text('"Just as good as the last batch you made!" you reply.');
    }
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
              scene.actions([
                { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
                { label: 'Watch Mira drink with the boys', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).npc_drunk ?? {})['A60'] = (((s as any).npc_drunk ?? {})['A60'] ?? 0) + (5);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/village/drinking.jpg');
    scene.text('Mitka pours some of the brew into a clear plastic shot glass and hands it over to Mira.');
    scene.text('Mira examines the glass\'s contents for a moment, then gulps down the entire glass with a single toss of her head. Her eyes widen and she coughs a little, sucking in her breath with a smile. You chat with the boys as they drink as well.');
    scene.actions([
      { label: 'Continue watching', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  }
  scene.build();
}

function enterSetContinueActs(s: GameState, scene: SceneBuilder): void {
  if (((s as any).sunWeather ?? 0) === 1) {
    scene.actions([
      { label: 'Sit down outside', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partywithMira'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partyalone'] }]);
    }
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Sit down in the trailer', handler: (st: GameState) => {
    if (((s as any).locat ?? 0)?.['A60_loc'] === 'mitkabuh_group') {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partywithMira'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'partyalone'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterSolo_1to9(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big63.jpg');
  // TODO-QSP: dynamic text: You are way too drunk and can barely stand. Mitka, noticing your condition, grab...
  scene.text(`You are way too drunk and can barely stand. Mitka, noticing your condition, grabs you by the waist. "Well, well little ${((s as any).pcs_nickname ?? 0)}, had a bit too much to drink? Come with me."`);
  (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
  if ((((s as any).temp_rand ?? 0) === 1  ||  (((s as any).temp_rand ?? 0) < 5  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0))  &&  (!((s as any).mesec ?? 0))) {
    scene.actions([
      { label: 'You nod and slur your words… mumbling something as you fall into his waiting arms', handler: (st: GameState) => {
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.img('images/locations/gadukino/sex/mitka/mitkafirst.jpg');
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitka2.jpg');
    }
    // TODO-QSP: dynamic text: He takes you '+iif(sunWeather=1, 'inside the trailer,', 'into the bedroom of the...
    scene.text('He takes you \'+iif(sunWeather=1, \'inside the trailer,\', \'into the bedroom of the trailer,\')+\' has you lie down on the bed and begins removing your clothes.');
    if (qspFunc(s, 'pcs_has_attr', 'sex_virgin')) {
      scene.text('You feel your hymen break as Mitka penetrates you. Mitka looks down at you and says, "Wow, how were you still a virgin? I should have savoured this moment longer!"');
    } else {
      scene.text('Mitka is clearly enjoying fucking you. He has a huge smile on his face as he holds you in place beneath him.');
    }
    scene.text('Mitka doesn\'t bother to pull out and cums deep inside you. Breathing heavily, he gets off of you and says, "You\'re an even better slut when drunk!"');
    scene.text('He gets up and goes back to drinking with Kolyamba and Vasyan, leaving you naked on the bed. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    ((s as any).npc_had_sex ?? {})['A63'] = 1;
    qspCall(s, 'cum_call', '', '', 'A63', 1);
    qspCall(s, 'arousal', 'vaginal', 20, 'sub');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } else {
    if (((s as any).temp_rand ?? 0) < 9) {
      scene.actions([
        { label: 'You nod and slur your words… mumbling something as you fall into his waiting arms', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkabj.jpg');
    // TODO-QSP: dynamic text: He takes you '+iif(sunWeather=1, 'inside the trailer', 'into the bedroom of the ...
    scene.text('He takes you \'+iif(sunWeather=1, \'inside the trailer\', \'into the bedroom of the trailer\')+\' and pushes you to your knees.');
    scene.text('He makes you remove your clothes before he puts his cock in your mouth for you to suck on.');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    ((s as any).npc_had_sex ?? {})['A63'] = 1;
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    (s as any).temp_randB = Math.floor(Math.random() * 6) + 0;
    if (((s as any).temp_randB ?? 0) === 5) {
      scene.img('images/locations/gadukino/sex/mitka/mitkabjcum1.jpg');
      scene.text('You are sucking his cock fiercely until suddenly warm cum starts to fill your mouth. Surprised, you pull his cock out of your mouth which continues to shoot cum onto your face and breasts.');
      scene.text('He makes you lick his dick clean before he leaves you to go back to drinking with Kolyamba and Vasyan. After a little while you sober up enough to get dressed and go sit back by the boys.');
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'cum_call', 'face', 'A63', 1);
      qspCall(s, 'cum_call', 'mouth', 'A63', 1);
      qspCall(s, 'cum_call', 'breasts', 'A63', 1);
    } else {
      if (((s as any).temp_randB ?? 0) >= 3) {
        scene.img('images/locations/gadukino/sex/mitka/mitkabjcum.jpg');
        scene.text('You tighten your lips and suck harder on Mitka\'s cock. Your head bobs up and down as you cram as much of his cock as deep in your mouth and throat as you can take it.');
        scene.text('Eventually, you feel Mitka\'s cock pulse and a few seconds later your mouth is filled with his salty sperm. You quickly swallow it all down.');
        scene.text('He makes you lick his dick clean before he leaves you to go back to drinking with Kolyamba and Vasyan. After a little while you sober up enough to get dressed and go sit back by the boys.');
        qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
        qspCall(s, 'cum_call', 'mouth_swallow', 'A63', 1);
      } else {
        scene.img('images/locations/gadukino/sex/mitka/mitkabjcum2.jpg');
        scene.text('Mitka, roughly grabs you by by the hair and face fucks you. All you can do is keep your mouth open as his cock hits the back of your throat.');
        scene.text('As he gets close to cumming, he pulls your head back and starts to spurt warm sticky spunk all over your face and hair.');
        scene.text('He makes you lick his dick clean before he leaves you to go back to drinking with Kolyamba and Vasyan. After a little while you sober up enough to get dressed and go sit back by the boys.');
        qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat', 'rough');
        qspCall(s, 'cum_call', 'face', 'A63', 1);
        qspCall(s, 'cum_call', 'mouth_swallow', 'A63', 1);
        qspCall(s, 'cum_call', 'hair', 'A63', 1);
      }
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'You nod and slur your words… mumbling something as you fall into his waiting arms', handler: (st: GameState) => {
    if (((s as any).pcs_ass ?? 0) < 10) {
      scene.img('images/locations/gadukino/sex/mitka/mitkaanal.jpg');
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitkaanal1.jpg');
    }
    // TODO-QSP: dynamic text: He takes you '+iif(sunWeather=1, 'inside the trailer,', 'into the bedroom of the...
    scene.text('He takes you \'+iif(sunWeather=1, \'inside the trailer,\', \'into the bedroom of the trailer,\')+\' has you bend over on the bed and begins removing your clothes.');
    if ((!((s as any).pcs_ass ?? 0))) {
      scene.text('"An anal virgin, huh? Well your ass will never be the same after this!" Mitka says as he pushes his cock inside your ass.');
    } else {
      scene.text('Mitka is clearly enjoying fucking your ass. He has a huge smile on his face as he holds you in place beneath him.');
    }
    scene.text('Mitka doesn\'t bother to pull out and cums deep inside your ass. Breathing heavily, he gets off of you and says, "You\'re an even better slut when drunk!"');
    scene.text('He gets up and goes back to drinking with Kolyamba and Vasyan, leaving you naked on the bed. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    ((s as any).npc_had_sex ?? {})['A63'] = 1;
    qspCall(s, 'cum_call', 'anus', 'A63', 1);
    qspCall(s, 'arousal', 'anal', 15, 'sub', 'rough');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
      ]);
    }
  }
  scene.build();
}

function enterSolo_10(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big63.jpg');
  // TODO-QSP: dynamic text: You are way too drunk and can barely stand. Mitka, noticing your condition, grab...
  scene.text(`You are way too drunk and can barely stand. Mitka, noticing your condition, grabs you by the waist. "Well, well little ${((s as any).pcs_nickname ?? 0)}, had a bit too much to drink? Come with me."`);
  scene.actions([
    { label: 'You mumble something about needing to pee', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/drunkgirl.jpg');
    // TODO-QSP: dynamic text: Mitka helps you '+iif(sunWeather=1, 'get up', 'go outside')+' and lean against a...
    scene.text('Mitka helps you \'+iif(sunWeather=1, \'get up\', \'go outside\')+\' and lean against a tree, as you giggle drunkenly and pee. Mitka watches you and laughs at your the whole time. He stumbles over to you, barely able to stand himself and pulls you into him.');
    // TODO-QSP: dynamic text: "Listen, <<$pcs_nickname>>, come with me," Mitka says loudly. You try to hide it...
    scene.text(`"Listen, ${((s as any).pcs_nickname ?? 0)}, come with me," Mitka says loudly. You try to hide it from us but, we already know. "I'm going have you fucked like the slut you are. I know you won't mind." Mitka grins evilly.`);
    scene.text('He turns to his friends, "Here," pointing to a drunken Kolyamba. "Get yourself over here and have some fun with this cunt," Kolyamba stumbles forward pulling his pants down as he approaches. "We may be drunk, but we can still have fun with this whore\'s pussy…"');
    scene.text('"Well, that\'s a beautiful sight," Mitka stammers smugly as he exposes you for everyone to see. "Let\'s get this party started!"');
    scene.actions([
      { label: 'Protest', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/village/drunkgirl.jpg');
    scene.text('You refuse, drunkenly trying to fight off the advancing Kolyamba while barely standing on your feet.');
    // TODO-QSP: dynamic text: Your struggles piss Mitka off, who grabs you by the arm and leads you '+iif(sunW...
    scene.text('Your struggles piss Mitka off, who grabs you by the arm and leads you \'+iif(sunWeather=1, \'inside the trailer\', \'into the bedroom of the trailer\')+\'.');
    scene.text('Mitka whispers in your ear, "You want my dick so bad then you can have it this time. But, next time you will do as I say. Understand?"');
    scene.actions([
      { label: 'Moan in affirmation', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkasexnopublic.jpg');
    scene.text('Mitka roughly rips all your clothes off, bends you over the bed and begins mercilessly pounding you. You\'ve never seen him this way before, maybe everyone is just more drunk than usual and this will all blow over tomorrow.');
    scene.text('All you can manage are moans as Mitka fucks you. They are so loud you are sure everyone else can hear you outside the bedroom. You can\'t help but think to yourself that the other guys may start treating you differently after tonight.');
    scene.text('He cums inside of you and then goes back to drinking with Kolyamba and Vasyan, leaving you naked on the bed. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A61', (-5));
    ((s as any).npc_QW ?? {})['A63'] = 11;
    qspCall(s, 'boyStat', 'A63');
    ((s as any).npc_had_sex ?? {})['A63'] = 1;
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'cum_call', '', '', 'A63', 1);
      qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough');
    } else {
      qspCall(s, 'cum_call', 'anus', 'A63', 1);
      qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough');
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } },
      { label: 'Bend over', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkasexpublic0.2.jpg');
    // TODO-QSP: dynamic text: Kolyamba bends you over a nearby log. He places one hand on your back to steady ...
    scene.text('Kolyamba bends you over a nearby log. He places one hand on your back to steady himself while guiding his dick into your \'+iif(mesec=0, \'pussy\', \'ass\')+\'.');
    scene.text('All you can manage are moans as Kolyamba fucks you, but you can\'t help but think to yourself that the other guys may start treating you differently after tonight.');
    // TODO-QSP: dynamic text: You are both so drunk that any type of rhythm is hard to maintain. Eventually Ko...
    scene.text('You are both so drunk that any type of rhythm is hard to maintain. Eventually Kolyamba speeds up a little and finishes inside of your \'+iif(mesec=0, \'pussy\', \'ass\')+\'.');
    scene.text('He gets up and goes back to drinking with Mitka and Vasyan, leaving you naked outside. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A61', 5);
    ((s as any).npc_QW ?? {})['A63'] = 11;
    qspCall(s, 'boyStat', 'A61');
    ((s as any).npc_had_sex ?? {})['A61'] = 1;
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'cum_call', '', '', 'A61', 1);
      qspCall(s, 'arousal', 'vaginal', 10, 'sub');
    } else {
      qspCall(s, 'cum_call', 'anus', 'A61', 1);
      qspCall(s, 'arousal', 'anal', 10, 'sub');
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSolo_11andup_1boy(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
  (s as any).temp2_rand = Math.floor(Math.random() * 3) + 1;
  if ((!((s as any).temp_rand ?? 0))) {
    if (((s as any).temp2_rand ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63', '0');
      scene.img('images/characters/shared/headshots_main/big63.jpg');
    } else {
      if (((s as any).temp2_rand ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A61', '0');
        scene.img('images/characters/shared/headshots_main/big61.jpg');
      } else {
        qspCall(s, 'boyStat', 'A62', '0');
        scene.img('images/characters/shared/headshots_main/big62.jpg');
      }
    }
    // TODO-QSP: dynamic text: While you are drinking, <<$boydesc[0]>> comes up to you and takes the shot glass...
    scene.text(`While you are drinking, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} comes up to you and takes the shot glass out of your hand. You can have this back after you do something for me.`);
    // TODO-QSP: dynamic text: "Get down on your knees and suck my dick." <<$boydesc[0]>> commands as he pulls ...
    scene.text(`"Get down on your knees and suck my dick." ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} commands as he pulls his pants down.`);
    scene.actions([
      { label: 'Suck his dick', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mitka/mitkabjpublic.jpg');
    scene.text('You kneel and take his cock in your mouth and it quickly stiffens as you lick it. You fit as much of it in your mouth as you can.');
    scene.actions([
      { label: 'Make him cum', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkagroupcum2.jpg');
    // TODO-QSP: dynamic text: <<$boydesc[1]>> groans as your head quickly bobs up and down his dick. As he beg...
    scene.text(`${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} groans as your head quickly bobs up and down his dick. As he begins to cum you open your mouth to give him a good view as he shoots his load down your throat.`);
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      scene.text('After he\'s done he looks at you and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at you, "Clean yourself up with that."`);
      qspCall(s, 'money', 'earn', 5);
    }
    scene.text('He makes you lick his dick clean before he leaves you to go back to drinking again. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $boy[0], 1
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp2_rand ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63', '0');
      scene.img('images/characters/shared/headshots_main/big63.jpg');
    } else {
      if (((s as any).temp2_rand ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A61', '0');
        scene.img('images/characters/shared/headshots_main/big61.jpg');
      } else {
        qspCall(s, 'boyStat', 'A62', '0');
        scene.img('images/characters/shared/headshots_main/big62.jpg');
      }
    }
    // TODO-QSP: dynamic text: While you are drinking, <<$boydesc[0]>> comes up to you and takes the shot glass...
    scene.text(`While you are drinking, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} comes up to you and takes the shot glass out of your hand. You can have this back after you do something for me.`);
    // TODO-QSP: dynamic text: "Bend over and let me fuck you." <<$boydesc[0]>> commands as he pulls his pants ...
    scene.text(`"Bend over and let me fuck you." ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} commands as he pulls his pants down.`);
    scene.actions([
      { label: 'Bend over', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'arousal', 'vaginal', 20, 'sub');
    } else {
      qspCall(s, 'arousal', 'anal', 20, 'sub');
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkasexpublic0.2.jpg');
    // TODO-QSP: dynamic text: <<$boydesc[0]>> bends you over a nearby log outside the trailer. He places one h...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} bends you over a nearby log outside the trailer. He places one hand on your back to steady himself while guiding his dick into your '+iif(mesec=0, 'pussy', 'ass')+'.`);
    if ((!((s as any).mesec ?? 0))) {
      // TODO-QSP: gs 'cum_call', '', $boy[0], 1
    } else {
      // TODO-QSP: gs 'cum_call', 'anus', $boy[0], 1
    }
    // TODO-QSP: dynamic text: He quickly picks up the pace, and you feel as if every thrust goes deeper than t...
    scene.text('He quickly picks up the pace, and you feel as if every thrust goes deeper than the last. Soon enough, he cums inside of your \'+iif(mesec=0, \'pussy\', \'ass\')+\'.');
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      // TODO-QSP: dynamic text: After he's done <<$boydesc[0]>> looks at you and says, "What are you waiting for...
      scene.text(`After he's done ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} looks at you and says, "What are you waiting for? Oh right, money. You'll do anything for a ruble. Here you go."`);
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at you, "Clean yourself up with that."`);
      qspCall(s, 'money', 'earn', 5);
    }
    scene.text('He gets up and goes back to drinking again, leaving you alone outside. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  }
  scene.build();
}

function enterSolo_11andup_2boys(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_rand = Math.floor(Math.random() * 2) + 0;
  (s as any).temp2_rand = Math.floor(Math.random() * 3) + 1;
  if ((!((s as any).temp_rand ?? 0))) {
    if (((s as any).temp2_rand ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63', '0');
      qspCall(s, 'boyStat', 'A61', '1');
    } else {
      if (((s as any).temp2_rand ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A63', '0');
        qspCall(s, 'boyStat', 'A62', '1');
      } else {
        qspCall(s, 'boyStat', 'A61', '0');
        qspCall(s, 'boyStat', 'A62', '1');
      }
    }
    if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 8) {
      scene.img('images/locations/gadukino/village/2boys.1.jpg');
    } else {
      scene.img('images/locations/gadukino/village/2boys.2.jpg');
    }
    // TODO-QSP: dynamic text: While you are drinking, <<$boydesc[0]>> and <<$boydesc[1]>> come up to you and t...
    scene.text(`While you are drinking, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} and ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} come up to you and takes the shot glass out of your hand. You can have this back after you do something for us.`);
    // TODO-QSP: dynamic text: "Get down on your knees and suck our dicks." <<$boydesc[0]>> commands as he pull...
    scene.text(`"Get down on your knees and suck our dicks." ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} commands as he pulls his pants down. ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} quickly follows his lead and start getting his own dick out.`);
    scene.actions([
      { label: 'Suck them one a time', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    qspCall(s, 'arousal', 'bj', 10, 'sub');
    ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/mitka/mitkabjpublicguys.jpg');
    // TODO-QSP: dynamic text: As you bend over to suck <<$boydesc[0]>>'s cock, <<$boydesc[1]>> moves behind yo...
    scene.text(`As you bend over to suck ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })}'s cock, ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} moves behind you and begins to finger your '+iif(mesec=0, 'pussy', 'ass')+'.`);
    scene.text('After a few minutes they switch positions, each taking turns having you blow them while the other fingers you.');
    scene.actions([
      { label: 'Make them cum', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitkabjpublicguys2.jpg');
    // TODO-QSP: dynamic text: You kneel in front of <<$boydesc[0]>> and <<$boydesc[1]>> and shove both cocks i...
    scene.text(`You kneel in front of ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} and ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} and shove both cocks in your mouth. The two boys begin to cum and you have to quickly swallow their combined loads before it overflows from your mouth.`);
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      // TODO-QSP: dynamic text: After they're done <<$boydesc[0]>> looks at you and says, "What are you waiting ...
      scene.text(`After they're done ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} looks at you and says, "What are you waiting for? Oh right, money. You'll do anything for a ruble. Here you go."`);
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at you, "Clean yourself up with that."`);
      qspCall(s, 'money', 'earn', 5);
    }
    scene.text('They make you lick them both clean before going back to drinking again. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    // TODO-QSP: gs 'cum_call', 'mouth_swallow', $boy[0], 1
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp2_rand ?? 0) === 1) {
      qspCall(s, 'boyStat', 'A63', '0');
      qspCall(s, 'boyStat', 'A61', '1');
    } else {
      if (((s as any).temp2_rand ?? 0) === 2) {
        qspCall(s, 'boyStat', 'A63', '0');
        qspCall(s, 'boyStat', 'A62', '1');
      } else {
        qspCall(s, 'boyStat', 'A61', '0');
        qspCall(s, 'boyStat', 'A62', '1');
      }
    }
    if (((s as any).month ?? 0) >= 6  &&  ((s as any).month ?? 0) <= 8) {
      scene.img('images/locations/gadukino/village/2boys.1.jpg');
    } else {
      scene.img('images/locations/gadukino/village/2boys.2.jpg');
    }
    // TODO-QSP: dynamic text: While you are drinking, <<$boydesc[0]>> and <<$boydesc[1]>> come up to you and t...
    scene.text(`While you are drinking, ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} and ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} come up to you and takes the shot glass out of your hand. You can have this back after you do something for us.`);
    // TODO-QSP: dynamic text: "Let us double team you." <<$boydesc[0]>> commands as he pulls his pants down. <...
    scene.text(`"Let us double team you." ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} commands as he pulls his pants down. ${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} quickly follows his lead and start getting his own dick out.`);
    scene.actions([
      { label: 'Bend over for them', handler: (st: GameState) => {
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[0], 1
    // TODO-QSP: gs 'npc_relationship', 'modify', $boy[1], 1
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    // TODO-QSP: npc_had_sex[$boy[0]] = 1
    // TODO-QSP: npc_had_sex[$boy[1]] = 1
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'rough', 'deepthroat');
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'rough');
    } else {
      qspCall(s, 'arousal', 'anal', 10, 'sub', 'rough');
    }
    ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'stat', '');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.img('images/locations/gadukino/sex/mitka/mitkapublicguys2.jpg');
    } else {
      scene.img('images/locations/gadukino/sex/mitka/mitkaguys2.jpg');
    }
    scene.text('First the boys remove your clothes exposing your body for everyone to see.');
    // TODO-QSP: dynamic text: <<$boydesc[0]>> bends you over '+iif(sunWeather=1, 'the bench outside the traile...
    scene.text(`${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} bends you over '+iif(sunWeather=1, 'the bench outside the trailer.', 'in the kitcen of the trailer.')+' He places his hands on your hips and pulls your '+iif(mesec=0, 'pussy', 'ass')+' onto his dick.`);
    // TODO-QSP: dynamic text: <<$boydesc[1]>> grabs you by the hair and shoves his cock into your mouth. You r...
    scene.text(`${qspUntranslated(s, "boydesc[1]", { location: "mitkabuh" })} grabs you by the hair and shoves his cock into your mouth. You rock back and forth between the two boys as they thrust into you.`);
    scene.text('They quicken their pace and it doesn\'t take long for them both to cum inside of you.');
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      // TODO-QSP: dynamic text: After they're done <<$boydesc[0]>> looks at you and says, "What are you waiting ...
      scene.text(`After they're done ${qspUntranslated(s, "boydesc[0]", { location: "mitkabuh" })} looks at you and says, "What are you waiting for? Oh right, money. You'll do anything for a ruble. Here you go."`);
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at you, "Clean yourself up with that."`);
      qspCall(s, 'money', 'earn', 5);
    }
    scene.text('They make you lick them both clean before going back to drinking again. After a little while you sober up enough to get dressed and go sit back by the boys.');
    if ((!((s as any).mesec ?? 0))) {
      // TODO-QSP: gs 'cum_call', '', $boy[0], 1
    } else {
      // TODO-QSP: gs 'cum_call', 'anus', $boy[0], 1
    }
    // TODO-QSP: gs 'cum_call', 'mouth', $boy[1], 1
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  }
  scene.build();
}

function enterSolo_11andup_3boys(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/village/drunk.jpg');
  scene.text('While you are drinking, Mitka, Kolyamba and Vasyan come up to you and take the shot glass out of your hand. You can have this back after you do something for us.');
  scene.text('"Let us all gangbang you." Mitka commands as he pulls his pants down. Kolyamba and Vasyan quickly follow his lead and start getting their own dicks out.');
  scene.actions([
    { label: 'Smile at them', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkagroup.jpg');
    scene.text('You have a seat on the bench outside the trailer and expose your breasts to the boys. This is all the encouragement the boys need as they quickly surround you.');
    // TODO-QSP: dynamic text: You start jerking off Kolyamba and Vasyan while Mitka pushes his fingers into yo...
    scene.text('You start jerking off Kolyamba and Vasyan while Mitka pushes his fingers into your \'+iif(mesec=0, \'pussy\', \'ass\')+\'.');
    qspCall(s, 'npc_relationship', 'modify', 'A63', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A62', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A61', 1);
    if (((s as any).npc_QW ?? 0)?.['A63'] < 20) {
      ((s as any).npc_QW ?? {})['A63'] = (((s as any).npc_QW ?? {})['A63'] ?? 0) + (1);
    }
    qspCall(s, 'boyStat', 'A63');
    ((s as any).npc_had_sex ?? {})['A63'] = 1;
    qspCall(s, 'boyStat', 'A62');
    ((s as any).npc_had_sex ?? {})['A62'] = 1;
    qspCall(s, 'boyStat', 'A61');
    ((s as any).npc_had_sex ?? {})['A61'] = 1;
    ((s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal', 'hj', 5, 'sub', 'gangbang');
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'arousal', 'vaginal_finger', 5, 'sub', 'gangbang');
    } else {
      qspCall(s, 'arousal', 'anal_finger', 5, 'sub', 'gangbang');
    }
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Get gangbanged', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/mitka/mitka_group/mitkagroupcum.jpg');
    // TODO-QSP: dynamic text: Kolyamba and Vasyan hold you down as Mitka penetrates your '+iif(mesec=0, 'pussy...
    scene.text('Kolyamba and Vasyan hold you down as Mitka penetrates your \'+iif(mesec=0, \'pussy\', \'ass\')+\'. You do your best to please them both with your mouth and hands at the same time.');
    scene.text('They switch positions so everyone gets a chance will all your holes. After a while you get used to the constant pounding as the three boys don\'t seem to be tiring out as quick as usual.');
    scene.text('You have a feeling they may be competing to see who can go the longest without telling you.');
    // TODO-QSP: dynamic text: Vasyan is the first to go, spraying cum all over your body. This sets off a chai...
    scene.text('Vasyan is the first to go, spraying cum all over your body. This sets off a chain reaction as Kolyamba begins cumming all over your face and hair and Mitka fills your \'+iif(mesec=0, \'pussy\', \'ass\')+\' at the same time.');
    if (((s as any).GadBoy ?? 0)?.['river_gang'] === 2) {
      scene.text('After they\'re done Mitka looks at you and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at you, "Clean yourself up with that."`);
      qspCall(s, 'money', 'earn', 5);
    }
    scene.text('The guys then go back to drinking and leave you naked and alone outside. After a little while you sober up enough to get dressed and go sit back by the boys.');
    qspCall(s, 'arousal', 'hj', 10, 'sub', 'gangbang', 'rough');
    qspCall(s, 'arousal', 'bj', 10, 'sub', 'gangbang', 'rough');
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'arousal', 'vaginal', 10, 'sub', 'gangbang', 'rough');
    } else {
      qspCall(s, 'arousal', 'anal', 10, 'sub', 'gangbang', 'rough');
    }
    qspCall(s, 'cum_call', 'breasts', 'A62', 1);
    qspCall(s, 'cum_call', 'stomach', 'A62', 1);
    qspCall(s, 'cum_call', 'face', 'A61', 1);
    qspCall(s, 'cum_call', 'mouth', 'A61', 1);
    if ((!((s as any).mesec ?? 0))) {
      qspCall(s, 'cum_call', '', '', 'A63', 1);
    } else {
      qspCall(s, 'cum_call', 'anus', 'A63', 1);
    }
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'mitkabuh', 'set_continue_acts');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMira_5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).MiraVars ?? {})['QW'] = 6;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  // TODO-QSP: dynamic text: Mira is absolutely trashed now, she looks at you and winks before taking Mitka's...
  scene.text('Mira is absolutely trashed now, she looks at you and winks before taking Mitka\'s hand and leading him \'+iif(sunWeather=1, \'behind the trailer out of view \', \' outside the trailer away\')+\' from the other boys.');
  scene.text('A few minutes later, you excuse yourself from talking with Kolyamba and Vasyan and follow after them.');
  scene.actions([
    { label: 'Watch them', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/mirawish1_2.jpg');
    scene.text('By the time you catch up and find a good hiding spot, Mitka and Mira have already started. Mira is naked, lying on a wooden table with her fit up in the air.');
    scene.text('Mitka is nailing her in the ass with his cock, just like Mira promised he would. Each time he pushes into her, Mira softly moans and the table creaks under her.');
    scene.text('The loud sounds of Mitka\'s thrusts can easily be heard from you where you are spying from. After 15 minutes Mira is wriggling her ass and mooing, having the time of her life.');
    scene.text('This is too much for Mitka and he begins to noisily cum in her ass, not even bothering to pull out. He makes her clean his cock before heading back to drink with the other boys some more.');
    scene.text('Mira looks around to try and spot you, but cannot see you in her drunk state.');
    scene.actions([
      { label: 'Talk to Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).MiraVars ?? {})['QW'] = 7;
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You emerge from your hiding spot and go up to Mira. You tell her that you saw everything as Mitka fucked her in the ass.');
    scene.text('You ask her if she likes having her ass fucked. To your surprise, Mira responds that yes she did enjoy it.');
    scene.text('You are slightly disappointed because this was supposed to be a punishment, and then remind her, that she still has two wishes to fulfill. Once they are all fulfilled, she will have satisfied her debt to you. Mira nods her head and says, she is ready to obey your wishes upon demand.');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMira_7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).MiraVars ?? {})['QW'] = 8;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('"I\'m bored!" Mitka yells. "Mira get your ass down and give us a show to remember!" he snorts like a pig. "Show us how how loose your holes are whore…"');
  scene.text('Mira refuses. Mitka and the others immediately demand she follow their orders. She continues to refuse to do their bidding. Eventually Mira offers a compromise and they agree with it, she\'ll just strip naked and be made to crawl around in front of them on all fours, portraying a dog…');
  scene.actions([
    { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'erotic_nudity', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/miraqw15_1.jpg');
    scene.text('Mira takes off all her clothes and for the next fifteen minutes crawls around on all fours on the grass, constantly rolling her head from side to side and barking a little. The guys laugh and drink as Mira demeans herself for their entertainment.');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMira_8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).MiraVars ?? {})['QW'] = 9;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('"I\'m bored!" Mitka yells. "Mira get your ass down and give us a show to remember!" he snorts like a pig. "Show us how how loose your holes are whore…"');
  scene.text('Mira mumbles affirmatively, and undresses.');
  scene.actions([
    { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw15.jpg');
    scene.text('Mira gets down on all fours and sticks out her ass in the direction of the party. She begins to push her fingers into both holes. Mira moans as she forces more fingers into her stretched holes.');
    scene.text('She continues to awkwardly thrust her fingers deep into both her pussy and ass. Eventually she brings herself to the first of many orgasms she will have this night.');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMira_9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).MiraVars ?? {})['QW'] = 10;
  qspCall(s, 'stat', '');
  qspCall(s, 'miroslava', 'miraclothes');
  scene.text('Mira is super drunk now and can barely stand but keeps asking for more moonshine. Vasyan comes over to her and says with a devilish grin on his face "I have a better idea. How about you service both mine and Kolyamba\'s dicks instead? Then you can have more to drink."');
  scene.text('Mira only chuckles in response and says, "Sure, but can you guys get it up with all the moonshine you have been drinking?" Mitka gives her a pat on the ass, and says that she is a responsible adult and can make up her own mind. Kolyamba meanwhile, walks over to Mira and forcefully presses down on her shoulders.');
  scene.text('Mira, drunkenly giggles, and playfully resists for a few seconds, but eventually gets on her knees. She watches as he unzips his pants and pulls them down to his ankles…');
  scene.actions([
    { label: 'Watch her and Kolyamba', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw10.jpg');
    scene.text('Mira, seeing that his dick is not yet fully erect, immediately leans forward and swallows it down to the balls and begins to give him an excellent blowjob. Her lips slide over the skin, then sucking it fully into her mouth, then releasing the dick and licking the head and shaft. Kolyamba blissfully closes his eyes and enjoys Mira\'s blowjob.');
    if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
      scene.text('Mitka asks if you will do the same for him, but you snort and tell him no. Mitka looks disappointed, but hands you another shot glass full of moonshine.');
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw10_1.jpg');
    scene.text('After a several minutes of Mira sucking on his cock, Kolyamba roughly pushes her mouth off his cock and he begins to shoot ropes of cum onto her face. Mira\'s eyes are closed, she drunkenly mumbles, trying to act like a sexy pornstar, while slowly wiping her fingers across her face collecting the sperm. She then puts her fingers in her mouth and sucks them clean.');
    scene.actions([
      { label: 'Watch her and Vasyan', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw10_2.jpg');
    scene.text('"Well, now it\'s my turn", says Vasyan and steps before Mira. She enthusiastically sucks him as well and he eventually cums on her tongue and in her mouth. She swallows his entire load.');
    scene.actions([
      { label: 'Watch her and Mitka', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 5, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw10_3.jpg');
    scene.text('Mitka, having drunk several shots himself already, silently walks over to Mira and without saying a word, signals for her to bend over. Mira, drunkenly staggers about for a few seconds before obediently turning her ass to him, and sliding her panties out of the way, exposing her wet cunt for all to see. Mitka pulls out his cock and places the head between her pussy lips, rubbing it up and down lubricating it with her juices.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 10, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw10_4.jpg');
    scene.text('Mitka slaps her on the butt hard, leaving a red hand print on her ass. He roughly grabs her panties and pulls them down to her knees before starting to fuck her roughly. Mitka is extremely drunk and doesn\'t last long at all, quickly cumming in her pussy. Mira sighs with a look of satisfaction on her face as she orgasms too. Your own crotch is on fire and all you want is to masturbate. The boys look at you and smile knowlingly, seeing your hand slightly touching your own crotch and rubbing your legs together. You need to get away before you lose control and ask the guys to fuck you too.');
    scene.actions([
      { label: 'Talk to Mira', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    ((s as any).MiraVars ?? {})['QW'] = 11;
    qspCall(s, 'stat', '');
    qspCall(s, 'miroslava', 'miraclothes');
    scene.text('You don\'t know where to begin, as you walk up to Mira. Mira is slowly coming back to her senses as she looks at herself and begins to blush.');
    scene.text('Finally you gather your courage and ask her what just happened. Mira, still not looking you in the eye, stammers out that she doesn\'t know why she did it. She says that she was out of control.');
    scene.text('You can see the shame on Mira\'s face as she continues to stare at the ground.');
    scene.text('But you were also drunk, and did not do what she did. Her face sinks with shame and she continues to look at the ground.');
    scene.text('You manage to soothe her and tell her that, she should just bite the bullet and move on. Everything will be okay and you should just go back to drinking and having fun.');
    scene.text('Mira thanks you for your support, but she still can\'t bring herself to look at you.');
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
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

function enterMira_11andup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  if (((s as any).MiraVars ?? 0)?.['QW'] < 15) {
    ((s as any).MiraVars ?? {})['QW'] = (((s as any).MiraVars ?? {})['QW'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 3) + 1;
  if ((!(Math.floor(Math.random() * 2) + 0))) {
    scene.img('images/characters/gadukino/mira/miraqw11_4.jpg');
    scene.text('"Well Mira," Mirka says while smiling. "Are you ready to suck some cock?" - The other guys voice their agreement.');
    scene.text('Mira blushes a bit but nods and obediently kneels down right where she was.');
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.actions([
        { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw11_5.jpg');
    scene.text('The boys immediately forget about you, as they surround Mira and pull out their cocks and present them to her. Mira starts to suck off all the guys and the sound of moans and loud slurping sounds interrupt the silence of the night. It does not take long for Mira to make the guys cum all over her.');
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16) {
      scene.text('After they\'re done Mitka looks at Mira and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at her, "Clean yourself up with that."`);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        scene.actions([
          { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub', 'goup');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw11_6.jpg');
    scene.text('The boys immediately forget about you, as they surround Mira and take turns roughly fucking her mouth. She grunts and gags a lot, but they don\'t pay attention, they continue to slam their cocks into her mouth and throat until they have all cum on her.');
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16) {
      scene.text('After they\'re done Mitka looks at Mira and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at her, "Clean yourself up with that."`);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub', 'group');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw11_7.jpg');
    scene.text('The boys immediately forget about you, as they surround Mira and take their cocks out. She starts sucking off each guy while jerking off the others with her free hands. Mira has gotten pretty good at this you think to yourself as the boys quickly climax and shoot their loads in her mouth.');
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16) {
      scene.text('After they\'re done Mitka looks at Mira and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at her, "Clean yourself up with that."`);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
        ]);
      }
    }
  } else {
    scene.img('images/characters/gadukino/mira/sex/miraqw11.jpg');
    scene.text('"Well Mira," Mitka says while smiling. "Are you ready to work that pussy?" - The other guys voice their agreement.');
    scene.text('Mira drunkenly giggles in response, after which she readily pulls down her pants in front of the group, turns her back to them and then pulls down her panties. She bends forward displaying her pussy and ass for everyone to see.');
    if (((s as any).temp_rand ?? 0) === 1) {
      scene.actions([
        { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw11_1.jpg');
    scene.text('Kolyamba is pleased with the show but wants more tonight. He pulls Mira aside, and orders her to work her cunt on his cock. He pulls off his pants and plops down waiting for her to obey. Mira jumps on top of him and starts to ride his cock until he cums inside of her.');
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16) {
      scene.text('After he\'s done Kolyamba looks at Mira and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at her, "Clean yourself up with that."`);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
      ]);
    } else {
      if (((s as any).temp_rand ?? 0) === 2) {
        scene.actions([
          { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw11_2.jpg');
    scene.text('Mitka grunts approvingly and takes the drunk Mira aside, where he pulls down his pants and shoves his cock into her exposed pussy. He fucks her for several a while until dumping his load into her pussy.');
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16) {
      scene.text('After he\'s done Mitka looks at Mira and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at her, "Clean yourself up with that."`);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Watch her', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'voyeur_sex', 15, 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/characters/gadukino/mira/sex/miraqw11_3.jpg');
    scene.text('Vasyan enjoys the show and asks Mira to follow him and take off her clothes. Mira looks at him for a second before complying with his order. Once completely naked Vasyan pulls off his pants and starts to fuck Mira. Vasyan, hoots and hollers as he roughly fucks Mira, acting like a cowboy. Eventually, he cums deep in her pussy.');
    if (((s as any).MiraVars ?? 0)?.['QW'] >= 16) {
      scene.text('After he\'s done Vasyan looks at Mira and says, "What are you waiting for? Oh right, money. You\'ll do anything for a ruble. Here you go."');
      // TODO-QSP: dynamic text: He takes a <<$func('money', 'string_profit', 5)>> note out of his pocket and thr...
      scene.text(`He takes a ${qspFunc(s, 'money', 'string_profit', 5)} note out of his pocket and throws it at her, "Clean yourself up with that."`);
    }
    if (((s as any).sunWeather ?? 0) === 1) {
      scene.actions([
        { label: 'Go back to the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    } else {
      scene.actions([
        { label: 'Go back in the trailer', goto: ['mitkabuh', 'partywithMira'] },
      ]);
    }
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
    case 'partyalone':
      enterPartyalone(s, scene);
      break;
    case 'partywithMira':
      enterPartywithMira(s, scene);
      break;
    case 'set_continue_acts':
      enterSetContinueActs(s, scene);
      break;
    case 'solo_1to9':
      enterSolo_1to9(s, scene);
      break;
    case 'solo_10':
      enterSolo_10(s, scene);
      break;
    case 'solo_11andup_1boy':
      enterSolo_11andup_1boy(s, scene);
      break;
    case 'solo_11andup_2boys':
      enterSolo_11andup_2boys(s, scene);
      break;
    case 'solo_11andup_3boys':
      enterSolo_11andup_3boys(s, scene);
      break;
    case 'mira_5':
      enterMira_5(s, scene);
      break;
    case 'mira_7':
      enterMira_7(s, scene);
      break;
    case 'mira_8':
      enterMira_8(s, scene);
      break;
    case 'mira_9':
      enterMira_9(s, scene);
      break;
    case 'mira_11andup':
      enterMira_11andup(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const mitkabuh: LocationDef = {
  name: 'mitkabuh',
  title: 'You follow the boys into the woods. After about 15 minutes y',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
