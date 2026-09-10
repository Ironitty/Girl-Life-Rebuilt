import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).npc_drunk['A60'] = 0;
  (s as any).GadBoy['drunk_event'] = 0;
  (s as any).MiraVars['drunk_event'] = 0;
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
  (s as any).GadBoy['drinkday'] = ((s as any).daystart ?? 0);
  if (((s as any).alko ?? 0) < 10) {
    qspCall(s, 'willpower', 'drink', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
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
      (s as any).GadBoy['first_drink'] = 2;
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
    if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 0) {
      (s as any).GadBoy['drunk_event'] = 1;
      if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
        scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_1to9'] }]);
      } else {
        scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_10'] }]);
        (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
        if (((s as any).temp_rand ?? 0) < 4) {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_1boy'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_2boys'] }]);
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_3boys'] }]);
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
    scene.img('images/characters/shared/headshots_main/big63.jpg');
    scene.text('You are way too drunk, and can barely stand. Mitka, noticing your condition, walks over to you and laughs, "It seems you\'ve had enough for tonight. Get out of here."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
    ]);
  }
  scene.build();
}

function enterPartywithMira(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'mitkabuh', 'partywithMira');
  (s as any).MiraVars['follower'] = 0;
  (s as any).MiraVars['follow_time'] = 3;
  if (((s as any).MiraVars ?? 0)?.['QW'] === 0) {
    (s as any).MiraVars['QW'] = 1;
  }
  scene.img('images/locations/gadukino/village/drunk.jpg');
  // TODO-QSP: dynamic text: You, Mira, Mitka, Kolyamba and Vasyan are sitting on some '+iif(sunWeather=1, 'l...
  scene.text('You, Mira, Mitka, Kolyamba and Vasyan are sitting on some \'+iif(sunWeather=1, \'logs outside\', \'couches inside\')+\' the trailer. There is plenty of moonshine to go around but no snacks.');
  if (((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).alko ?? 0) < 10) {
    (s as any).alko = 10;
  }
  if (((s as any).MiraVars ?? 0)?.['drunk_event'] === 1  &&  ((s as any).npc_drunk ?? 0)?.['A60'] < 10) {
    (s as any).npc_drunk['A60'] = 10;
  }
  if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 1  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 1) {
    scene.img('images/characters/gadukino/mira/girls_go.jpg');
    if (((s as any).npc_QW ?? 0)?.['A63'] < 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11) {
      scene.text('You and Mira are both way too drunk and can barely stand. You decide it is time to go for the night and you should walk home together.');
      scene.text('As you are leaving you overhear the guys talking about you both, but can\'t make out what they are saying.');
    } else {
      scene.text('You and Mira are both way too drunk and can barely stand. You decide it is time to go for the night and you should walk home together.');
      scene.text('As you are leaving the guys call after Mira "Hey, Mira, come drink with us again, we love fucking you!! Ha-ha!" They laugh as you make your way out.');
      if (((s as any).npc_QW ?? 0)?.['A63'] >= 11  &&  ((s as any).MiraVars ?? 0)?.['QW'] < 11) {
        scene.text('You and Mira are both way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
        // TODO-QSP: dynamic text: As you are leaving the guys call after you "Hey, <<$pcs_nickname>>, come drink w...
        scene.text(`As you are leaving the guys call after you "Hey, ${((s as any).pcs_nickname ?? 0)}, come drink with us again, we love fucking you!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a proper insult and just mumble, "I'm sure you can find someone else instead…"`);
      } else {
        scene.text('You and Mira are both way too drunk and can barely stand. The guys tell you to leave, they already fucked you tonight, but to make sure to come back tomorrow for another round.');
        // TODO-QSP: dynamic text: As you are leaving the guys call after you both "Hey, <<$pcs_nickname>> and Mira...
        scene.text(`As you are leaving the guys call after you both "Hey, ${((s as any).pcs_nickname ?? 0)} and Mira, come drink with us again, we love fucking you both!! Ha-ha!" They laugh as you make your way out. You are too drunk to come up with a proper insult and just walk away with Mira.`);
      }
      if (((s as any).npc_drunk ?? 0)?.['A60'] >= 10  &&  ((s as any).MiraVars ?? 0)?.['drunk_event'] === 0) {
        (s as any).MiraVars['drunk_event'] = 1;
        if (((s as any).MiraVars ?? 0)?.['QW'] === 5) {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_5'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_7'] }]);
          if (((s as any).MiraVars ?? 0)?.['QW'] === 8) {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_8'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'mira_9'] }]);
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    (s as any).npc_drunk['A60'] = 0;
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
            if (((s as any).alko ?? 0) >= 10  &&  ((s as any).GadBoy ?? 0)?.['drunk_event'] === 0) {
              (s as any).GadBoy['drunk_event'] = 1;
              if (((s as any).npc_QW ?? 0)?.['A63'] > 0  &&  ((s as any).GadBoy ?? 0)?.['river_gang'] < 3) {
                if (((s as any).npc_QW ?? 0)?.['A63'] < 10) {
                  scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_1to9'] }]);
                } else {
                  scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_10'] }]);
                  (s as any).temp_rand = Math.floor(Math.random() * 10) + 1;
                  if (((s as any).temp_rand ?? 0) < 4) {
                    scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_1boy'] }]);
                  } else {
                    scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_2boys'] }]);
                    scene.actions([{ label: 'Continue', goto: ['mitkabuh', 'solo_11andup_3boys'] }]);
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                    ]);
                  } else {
                    scene.actions([
                      { label: 'Make Mira drink the shot instead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    (s as any).npc_drunk['A60'] = ((s as any).npc_drunk['A60'] ?? 0) + (5);
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
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
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Make Mira drink the shot instead', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A60', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A61', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A62', Math.floor(Math.random() * 2) + 0);
    qspCall(s, 'npc_relationship', 'modify', 'A63', Math.floor(Math.random() * 2) + 0);
    (s as any).npc_drunk['A60'] = ((s as any).npc_drunk['A60'] ?? 0) + (5);
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
      (s as any).GadBoy['first_drink'] = 2;
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
                qspCall(s, 'willpower', 'drink', 'resist');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'Leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'Leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'willpower', 'drink', 'resist');
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['gad_road', 'start'] },
                  ]);
                }
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
    (s as any).npc_drunk['A60'] = ((s as any).npc_drunk['A60'] ?? 0) + (5);
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
      (s as any).GadBoy['first_drink'] = 2;
      scene.text('"That was stronger than I expected!" you reply.');
    } else {
      scene.text('"Just as good as the last batch you made!" you reply.');
    }
    scene.actions([
      { label: 'Continue drinking', goto: ['mitkabuh', 'partywithMira'] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['gad_road', 'start'] },
      ]);
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
  description: ['You follow the boys into the woods. After about 15 minutes you get to an old rusty trailer partially overgrown with vegetation. It obviously has been here a long time.'],
  enter: enter,
};
