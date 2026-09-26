import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  ((s as any).gopniksev = (s as any).gopniksev ?? {})['gopskver'] = ((s as any).daystart ?? 0);
  if (((String(((s as any).location_type ?? 0)).indexOf(String('outdoors'))) + 1) > 0) {
    (s as any).location_type = 'event_outdoors';
  } else {
    (s as any).location_type = 'event_indoors';
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'dinsexFX', '');
  if (((s as any).loc ?? 0) === 'gkafe') {
    scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe2.jpg');
  } else {
    if (((s as any).loc ?? 0) === 'pav_train_hall') {
      scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
    } else {
      scene.img('images/locations/pavlovsk/park/skver.jpg');
    }
  }
  if (((s as any).kotovLoveQW ?? 0) > 0) {
    if (((s as any).hour ?? 0) < 20) {
      if (((s as any).loc ?? 0) === 'gkafe') {
        scene.text('Vitek Kotov sees you entering the cafe and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.');
      } else {
        if (((s as any).loc ?? 0) === 'pav_train_hall') {
          scene.text('Vitek Kotov sees you entering the train station and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.');
        } else {
          scene.text('Vitek Kotov sees you walking in the park, and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.');
        }
      }
      scene.actions([
        { label: 'Decline and leave', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gkafe') {
      qspGoto(st, 'gkafe', '');
    } else {
      qspGoto(st, 'pav_park', 'deeper_park');
    }
  } },
        { label: 'Drink beer with Vitek and the guys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/beer3.jpg');
    scene.text('The guys pour one for you, and you enjoy a nice cold beer in their company.');
    if (((st as any).hour ?? 0) === 20) {
      if (((st as any).week ?? 0) === 5  ||  ((st as any).week ?? 0) === 6) {
        scene.text('It\'s evening, and the boys are getting ready to go to the disco like they do every friday and saturday. You could call it a night and leave them alone, or tag along.');
        scene.actions([
          { label: 'Go to the disco with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_disco', ''] },
        ]);
      } else {
        scene.text('It\'s evening, and the boys are getting ready to go to Vasily\'s Home. You could call it a night and leave them alone, or tag along.');
        scene.actions([
          { label: 'Go with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['vasilyhome', 'hallway'] },
        ]);
      }
    }
    scene.actions([
{ label: 'Continue', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gkafe') {
      qspGoto(st, 'gkafe', '');
    } else {
      qspGoto(st, 'pav_park', 'deeper_park');
    }
  } },
]);
    return;
  } },
        { label: 'Give Vitek a sly wink', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Vitek comes over to you and quietly asks: "Hey baby… do you want to keep drinking with the boys, or do you want to go to my house with me?"');
    scene.actions([
      { label: 'Go with Vitek', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('You take Vitek by the hand and almost feel like he\'s showing you off, ' + ((((st as any).loc ?? 0)==='gkafe') ? ('when he walks you to the exit of the cafe. You take a little walk') : ('when you walk across the park square towards the exit. You leave the park')) + ' and Vitek guides you to where he lives. It\'s a rather worn-down house from the outside, and the inside doesn\'t look much better. Crumpled heaps of clothes lie everywhere, and the floor is littered with empty bottles.');
    scene.actions([
      { label: 'Continue', goto: ['kotovSex', ''] },
    ]);
  } },
      { label: 'Say no', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Sorry, babe. I didn\'t mean to tease, but have to get going.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gkafe') {
      qspGoto(st, 'gkafe', '');
    } else {
      qspGoto(st, 'pav_park', 'deeper_park');
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      if (((s as any).hour ?? 0) >= 20) {
        if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
          scene.text('It\'s evening, and the boys are getting ready to go to the disco like they do every friday and saturday. You could call it a night and leave them alone, or tag along.');
          scene.actions([
            { label: 'Go to the disco with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_disco', ''] },
          ]);
        } else {
          scene.text('It\'s evening, and the boys are getting ready to go to Vasily\'s home. You could call it a night and leave them alone, or tag along.');
          scene.actions([
            { label: 'Go to with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['vasilyhome', 'hallway'] },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
        ]);
      }
    }
  } else {
    if (((s as any).hour ?? 0) >= 20) {
      if (((s as any).alko ?? 0) < 6) {
        if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
          scene.text('It\'s evening, and the boys are getting ready to go to the disco like they do every friday and saturday. You could call it a night and leave them alone, or tag along.');
          scene.actions([
            { label: 'Go to the disco with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_disco', ''] },
          ]);
        } else {
          scene.text('It\'s evening, and the boys are getting ready to go to Vasily\'s home. You could call it a night and leave them alone, or tag along.');
          scene.actions([
            { label: 'Go to with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['vasilyhome', 'hallway'] },
          ]);
        }
        scene.actions([
          { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
        ]);
      } else {
        if (((s as any).alko ?? 0) < 9  &&  ((s as any).DansOralSlut ?? 0) === 1) {
          scene.text('You\'re quite drunk, and before heading out Dan offers to walk you home.');
          qspCall(s, 'willpower', 'misc', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: '"No need, I can find my own way home"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: '"No need, I can find my own way home"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_complex', 'start');
  } },
            ]);
          }
          scene.actions([
            { label: 'Go with Dan', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You\'re walking down the street, feeling a bit wobbly from the alcohol while Dan supports your weight. He tells you funny stories and anecdotes along the way, and before you know it you\'re at your apartment building. When you open the door and enter the building, Dan suddenly pulls you to the side. He\'s quite rough about it, and shoves you into a dark corner of the stairwell. He takes your hand by the chin and whispers in your ear: "Your turn to make me feel good, slut. Otherwise I\'m telling everyone."');
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.text('You push him away from you and say indignantly: "No way, Dan! Leave me alone!"');
    scene.text('Dan\'s eyes look murderous, but he doesn\'t touch you. After a few seconds he bounces back, and he grins as he says: "Suit yourself, whore… your reputation in town will be ruined", and then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', goto: ['gopskver', 'dan_blowjob'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).alko ?? 0) < 9) {
            scene.text('You\'re quite drunk, and before heading out Dan offers to walk you home.');
            qspCall(s, 'willpower', 'misc', 'resist', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: '"No need, I can find my own way home"', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: '"No need, I can find my own way home"', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_complex', 'start');
  } },
              ]);
            }
            scene.actions([
              { label: 'Go with Dan', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'stat', '');
    scene.text('You\'re walking down the street, feeling a bit wobbly from the alcohol while Dan supports your weight. He tells you funny stories and anecdotes along the way, and before you know it you\'re at your apartment building. When you open the door and enter the building, Dan suddenly pulls you to the side. He\'s quite rough about it, and shoves you into a dark corner of the stairwell. He takes your hand by the chin and kisses your lips hard.');
    qspCall(st, 'willpower', 'kiss', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away and go home', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away and go home', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_complex', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss him back', handler: (st: GameState) => {
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.text(`You return his kiss, unsure why he's kissing you… he never seemed to be that interested in you. Then you feel his hands on your shoulders, and Dan firmly presses down on them trying to get you to drop to your knees. He whispers reassuringly: "Don't worry, ${((st as any).pcs_nickname ?? '')}… I didn't tell anyone about all the things you did. Do a good job, and your secret will stay safe."`);
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'fame', 'pav', 'sex', 5);
    qspCall(st, 'stat', '');
    scene.text('You push him away from you and say indignantly: "No way, Dan! Leave me alone!"');
    scene.text('Dan\'s eyes look murderous, but he doesn\'t touch you. After a few seconds he bounces back, and he grins as he says: "Suit yourself, whore… your reputation in town will be ruined", and then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', goto: ['gopskver', 'dan_blowjob'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).alko ?? 0) >= 9) {
              scene.text('You got absolutely hammered in the park, and are swaying from side to side when you walk down the pathway. Suddenly Vasily hugs your waist tightly and begins to lead you somewhere, with his friends following him.');
              qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Say you have to go and leave them', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Say you have to go and leave them', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_complex', 'start');
  } },
                ]);
              }
              scene.actions([
                { label: 'Go with the guys', handler: (st: GameState) => {
    if ((!((st as any).sgopgang ?? 0))) {
      (st as any).sgopgang = 1;
    }
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A9'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A10'] = 1;
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A11'] = 1;
    ((st as any).stat = (st as any).stat ?? {})['vaginal'] = ((st as any).stat['vaginal'] ?? 0) + (3);
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 3);
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/gopgang.jpg');
    scene.text('At some point, you pass out. When you wake up you\'re lying on your back, and you feel something moving inside your pussy. You carefully open your eyes, and between the blinking you see Vasily\'s contorted face, hammering his hips against yours. Is he fucking you!?');
    scene.text('A few seconds later, he pulls out and you feel several warm drops landing on your stomach. You lose consciousness again, and a little while later you wake up to find yourself getting fucked by Dan. He\'s just about finished, and shoots his load onto your stomach as well. Vitek immediately replaces him, and roughly fucks you as if you\'re little more than a few fuckholes to him. Then again, maybe that\'s how they really see you.');
    scene.text('He quickly adds his load to that of his friends, and you fade out of consciousness again with a soft groan. When you finally come to your senses you find yourself alone on the sofa, and just rest for a moment. The boys are sitting at the table in the room, drinking more beers. You should probably get going soon, before they decide they\'re ready for another round.');
    qspCall(st, 'npcStat', 'A11');
    qspCall(st, 'cum_call', 'stomach', 'A11', 1);
    qspCall(st, 'npcStat', 'A10');
    qspCall(st, 'cum_call', 'stomach', 'A10', 1);
    qspCall(st, 'npcStat', 'A9');
    qspCall(st, 'cum_call', 'stomach', 'A9', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    } else {
      if (((s as any).hour ?? 0) < 20) {
        scene.text('iif($loc = \'gkafe\', \'You see Vitek, Dan and Vasily sitting at a table, drinking some beers\', \'You see Vitek, Dan and Vasily sitting on a park bench, drinking some beers.\')');
        (s as any).temp_fame = qspFunc(s, 'cardgame_durak', 'get_mod_fame');
        if (((s as any).temp_fame ?? 0) >= 250) {
          (s as any).temp_rand = (Math.floor(Math.random() * 3) + 0);
          if ((!((s as any).temp_rand ?? 0))) {
            (s as any).shultextrand = 'Looking for something to put in your mouth?';
          } else {
            if (((s as any).temp_rand ?? 0) === 1) {
              (s as any).shultextrand = 'We can give you something to suck on!';
            } else {
              (s as any).shultextrand = 'Looking for something to suck on?';
            }
          }
          (s as any).temp_rand = undefined;
          scene.text(`Vasily grins and shouts as he sees you walk by: "Look guys, it's our favourite slut! ${((s as any).shultextrand ?? '')}" His friends laugh loudly at your expense.`);
          (s as any).shultextrand = undefined;
          if (((s as any).loc ?? 0) === 'gkafe') {
            scene.actions([
              { label: 'Blush and quickly leave the cafe', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
            ]);
          } else {
            if (((s as any).loc ?? 0) === 'pav_train_hall') {
              scene.actions([
                { label: 'Blush and quickly leave the train station', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc');
  } },
              ]);
            } else {
              if (((s as any).BjBeerQW ?? 0) >= 5) {
                scene.actions([
                  { label: 'Approach the guys', goto: ['zsoft_gopskverGorSlut', '1'] },
                ]);
              } else {
                if (((s as any).BjBeerQW ?? 0) < 5) {
                  scene.actions([
                    { label: 'Ask for a beer', handler: (st: GameState) => {
    if (((st as any).BjBeerDay ?? 0) === ((st as any).daystart ?? 0)) {
      scene.img('images/characters/shared/headshots_main/big11.jpg');
      scene.text('Vasily smirks and slaps your hand away: "Go beg somewhere else, whore. You\'ve had enough for today, the open bar is closed for sluts like you. Come back tomorrow."');
      scene.actions([
        { label: 'Leave them and walk away', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      qspGoto(st, 'gopskver', 'BjBeerStart');
    }
  } },
                  ]);
                }
              }
              scene.actions([
                { label: 'Blush and keep walking', goto: ['pav_park', 'deeper_park'] },
              ]);
            }
          }
        } else {
          if (((s as any).alko ?? 0) < 6) {
            scene.text(((((s as any).loc ?? 0) === 'gkafe') ? ('The boys ordered some extra beers ') : ('The boys have some extra beers with them,')) + 'and invite you to have a seat and join them.');
            scene.actions([
              { label: 'Decline the beer and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
              { label: 'Drink beer with the guys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(st, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(st, 'drugs', 'alcohol', 'beer');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/beer3.jpg');
    scene.text('The guys cheer and pour out a beer for you. Vasily gives you ' + ((((st as any).loc ?? 0) === 'gkafe') ? ('a glass') : ('the cup')) + ' while the others propose a toast, already having beers in their hands. You happily join them in their toast, and spend the next 15 minutes chatting with them and having sips of your cold beer.');
    if (((st as any).hour ?? 0) === 20) {
      if (((st as any).week ?? 0) === 5  ||  ((st as any).week ?? 0) === 6) {
        scene.text('It\'s evening, and the boys are getting ready to go to the disco like they do every friday and saturday. You could call it a night and leave them alone, or tag along.');
        scene.actions([
          { label: 'Go to the disco with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['pav_disco', ''] },
        ]);
      } else {
        scene.text('It\'s evening, and the boys are getting ready to go to Vasily\'s home. You could call it a night and leave them alone, or tag along.');
        scene.actions([
          { label: 'Go with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['vasilyhome', 'hallway'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
            ]);
          } else {
            scene.text('You\'re already not exactly sober any more, and feel a bit looser while you chat with the guys.');
            if (((s as any).temp_fame ?? 0) < 100) {
              scene.actions([
                { label: 'Drink beer with the guys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('Vasily puts his hand on your shoulder and tells you that his friends aren\'t the kind of guys a nice girl should be getting drunk with and sends you on your way.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
              ]);
            } else {
              if (((s as any).temp_fame ?? 0) < 200) {
                if (((s as any).loc ?? 0) === 'gkafe') {
                  scene.text('Vasily suggests to the guys to leave the cafe and continue drinking in the park. You are too drunk to resist so you just follow them to the park');
                } else {
                  if (((s as any).loc ?? 0) === 'pav_train_hall') {
                    scene.text('Vasily suggests to the guys to leave the train station and continue drinking in the park. You are too drunk to resist so you just follow them to the park');
                  }
                }
                scene.text(`At one point, Vasily sits down next to you and says: "Hey ${((s as any).pcs_nickname ?? '')}… I've heard from someone that you're a huge tease, is that true?"`);
                scene.actions([
                  { label: '"Yes that\'s true"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You smile and nod at him: "I like getting guys all worked up with my body, that\'s true. Why?"');
    scene.text('Vasily stutters for a moment, and then manages to say: "Oh n- no reason, I was just curious is all."');
    scene.actions([
      { label: 'Thank them for the beer and leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
                  { label: '"What? No!"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You raise your voice a little and act surprised: "What? No way! Whoever told you that was lying!"');
    scene.text(`However, Dan doesn't fall for your act, and matter-of-factly says: "${((st as any).pcs_nickname ?? '')}, you're a slut. We've all seen you, the whole town knows it. Why are you even trying to deny it? You're such a terrible liar…"`);
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
                ]);
              } else {
                if (((s as any).loc ?? 0) === 'gkafe') {
                  scene.text('Vasily suggests to the guys to leave the cafe and continue drinking in the park. You are too drunk to resist so you just follow them to the park');
                }
                scene.text(`At one point, Vasily sits down next to you and says: "Hey ${((s as any).pcs_nickname ?? '')}… I've heard from someone that you like sucking dicks… is that true?"`);
                scene.actions([
                  { label: '"Yes, that\'s true"', handler: (st: GameState) => {
    scene.text('You have a slight blush on your face when you confess: yes, you do like giving blowjobs. Vasily has a cheeky smile when he continues: "And is it true that you let them finish inside your mouth?"');
    scene.actions([
      { label: '"Yes, that\'s true too"', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You blush again but confirm: "Yes, I let them cum inside my mouth."');
    scene.text('Vasily is excited now, squirming in his seat: "So… how about you put that pretty mouth of yours to work on us?"');
    scene.actions([
      { label: '"No way!"', handler: (st: GameState) => {
    scene.text('You indignantly reject Vasily\'s proposal: "No way, Shulga! I can\'t just do that for everyone who asks!"');
    scene.text('Dan suddenly growls at you: "Shut up, whore. I\'ve seen you suck cocks of just about anyone you meet, and swallow their loads to the last drop! They make videos when you\'re not paying attention… and now suddenly we\'re not good enough for you?"');
    scene.text('You\'re a bit afraid of his sudden outburst and try to explain yourself: "Dan please, you have to understand! I don\'t just su-"');
    scene.text('He interrupts you: "Shut up! We won\'t ask again… are you going to be a nice little slut and do as we ask, or are you going to keep pretending to be some stuck up bitch?"');
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep refusing', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep refusing', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).fingal = ((st as any).fingal ?? 0) + (1);
    (st as any).body_write = 1;
    qspCall(st, 'mood', 'lower', 'tiny');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/body_cocksucker.jpg');
    scene.text('You keep refusing, and try to get up and leave. Dan slaps your face hard, however, and you fall to the ground. He immediately pins you down, and begins to rip your clothes off. "Too proud, huh? We\'ll have to take you down a peg!"');
    scene.text('The boys take out some markers and write several obscene words onto your skin. Soon, the whole town can read what a huge slut you are!');
    scene.text('You don\'t want to anger them any further, knowing the boys are much stronger than you, and don\'t dare to protest while they keep writing more things on you. Eventually they\'re satisfied, and let you get up. They even let you put your clothes back on, so you can cover up at least the majority of the writings. Dan smirks: "Maybe that\'ll help you remember what you are, slut. When you\'re ready to apologize, you know where to find us."');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Be a nice little slut', handler: (st: GameState) => {
    scene.text('You don\'t want to anger Dan any further, and decide to back down. You softly say: "Relax, Dan… I\'m sorry, I didn\'t mean to insult you or your friends. I\'ll do it."');
    scene.text('Dan smirks at you: "I forgive you, slut… I guess you just didn\'t know what to do yet, when someone asks you for your whore mouth. We\'ll teach you what you need to know about your place in the world. Get down before me and start sucking!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTripleBlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: '"Well, maybe… just don\'t tell anyone!"', handler: (st: GameState) => {
    scene.text('Dan grins at you while he reaches for his pants: "Your secret is safe with us, baby. Now get down on your knees and take my cock in your mouth!"');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTripleBlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
      { label: '"No, that\'s a lie!"', handler: (st: GameState) => {
    scene.text('You spit on the ground, and pretend to be insulted: "No way, Vasily! That\'s disgusting!"');
    if (((st as any).trait_vars ?? 0)?.['cumeater'] > 0) {
      scene.text(`Dan suddenly snaps, and shouts at you: "${((st as any).pcs_nickname ?? '')}, don't bullshit us! The whole town knows you're a huge cum guzzler, who loves little more than to take a big load into her mouth and swallow it all down! Stop lying!"`);
    } else {
      if (((st as any).facial ?? 0) > 0) {
        scene.text('Dan suddenly chuckles: "But you love taking loads all over your face, right? I\'ve seen several pictures of you, with your face and mouth all covered in cum."');
      } else {
        scene.text(`Dan chuckles: "Maybe you can't get a guy off with your mouth yet? Don't worry ${((st as any).pcs_nickname ?? '')}, we will help you with your technique…"`);
      }
    }
    scene.text(`Dan reaches for his pants and exposes his hard cock: "Enough talk! I think it's time ${((st as any).pcs_nickname ?? '')} shows us what a good little slut she is. Take it in your mouth!"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTripleBlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
    ]);
  } },
                  { label: '"No, that\'s a lie!"', handler: (st: GameState) => {
    scene.text(`You pretend to be insulted at the mere notion, but Dan gets angry: "${((st as any).pcs_nickname ?? '')}, you're a slut! I know it, you know it, the whole fucking town knows it! Don't be a stuck up bitch and start sucking!"`);
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterTripleBlow(st, scene); (st as any).locArgs = __savedLocArgs; }
  } },
                ]);
              }
            }
          }
        }
        (s as any).temp_fame = undefined;
      }
    }
  }
  scene.build();
}

function enterBjBeerStart(s: GameState, scene: SceneBuilder): void {
  scene.text('You could really use a cold beer right now! You try to get on the boys\' good side and ask in a playful tone: "Come on guys, you know that\'s no way to talk to a lady! How about you offer me a nice cold beer instead?"');
  scene.text('You get into a seductive pose and give them your most enchanting smile. The guys look and whisper some things at each other, but Vasily quickly grins and beckons you to come closer.');
  scene.text(`You shake your hips and teasingly lick your parched ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips, and for a second you wonder if you're laying it on too thick as you approach the three guys. You can feel your mouth water when you see the cold beer they're reaching out to you though. Just when you reach out to take it from him, he suddenly pulls it away from you.`);
  scene.actions([
    { label: 'Act surprised', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer.mp4');
    scene.text('Before you can ask why he did that, Dan speaks up: "Didn\'t you forget your place, slut? You have to earn your beer first, before you get to drink it."');
    scene.text('With those words he pulls his hard cock out of his pants, and his friends soon follow his lead. They grin greedily at you and Vasily says: "Just sit down over there and open your mouth, whore. We\'ll feed you."');
    if (((st as any).BjBeerQW ?? 0) >= 5) {
      scene.actions([
        { label: 'Open your legs for a beer', goto: ['gopskver', 'BjBeerVag'] },
        { label: 'Take it in the ass for beer', goto: ['gopskver', 'BjBeerAnal'] },
      ]);
    }
    qspCall(st, 'willpower', 'bj', 'resist', 'medium');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_stren ?? 0) + ((st as any).pcs_agil ?? 0) + ((st as any).pcs_run ?? 0) >= 180) {
      scene.text('The Gopniks don\'t take your refusal very well, and try to force you anyway when they realize you\'re not going to do what they want. However, your athletic training pays off and you manage to outrun them. Once you\'re certain they\'re no longer following you, you stop for a moment to catch your breath.');
      scene.actions([
        { label: 'Return to the park', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      qspGoto(st, 'gopskver', 'BjBeerBeaten');
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck them off for a beer', goto: ['gopskver', 'BjBeerYes'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjBeerBeaten(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/park/sex/gop/bjbeerbeaten.jpg');
  (s as any).pcs_hairbsh = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).spank = ((s as any).spank ?? 0) + (1);
  (s as any).spanked = 1;
  (s as any).spankedtime = ((s as any).totminut ?? 0);
  qspCall(s, 'underwear', 'remove');
  qspCall(s, 'mood', 'lower', 'small');
  (s as any).pcs_willpwr = ((s as any).pcs_willpwr ?? 0) - (10);
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'fame', 'pav', 'sex', 4);
  qspCall(s, 'stat', '');
  scene.text('You refuse to have sex with them in any shape or form, just for a can of beer! The guys are furious now, especially Dan: "What!? We\'ll teach you, whore!"');
  scene.text('When you get up and try to run away from them, Dan slaps you hard enough to knock you off-balance, and you fall to the ground. Tears form in your eyes and you struggle to get away from the boys, but they are way too strong for you and keep you pinned to the ground.');
  scene.text('You beg and plead them to let you go, but they ignore your pleas and pull you further into the woods after gagging you with a piece of cloth. Once they arrive at a bench that you didn\'t even know was in the park, they\'re satisfied they won\'t be disturbed and push you onto the ground. You try to plead again, but all that escapes from your mouth is a low muffled moan.');
  scene.text('The other two guys hold you firmly, while Dan slaps your ass hard. "You will teach you your place, whore. We have all day."');
  scene.text('Tears stream from your eyes now, and your earlier protests have turned into little more than quiet whimpers when Dan\'s hand strikes your ass again. Vasily grins: "I think she\'s ready to cooperate now. Aren\'t you, little slut of ours?"');
  scene.text('You just want the torture to stop, and nod meekly. The guys pull you towards the bench, and pull you over it so your knees rest on the seat. Vasily takes place behind the bench and pulls the gag from your mouth, replacing it with his cock.');
  scene.text(`With your spirit broken from the rough treatment, you don't know any better but to just open your mouth and let him in. Vasily gladly accepts your unspoken invitation, and immediately shoves his cock deeper down your throat and begins to facefuck you. It's a little hard to breathe at first, but after a while you get into the rhythm and just let him fuck your throat while your saliva runs down your chin. Then he pulls his cock from your mouth and sits down on the bench, next to his friends and tells you: "Alright… that was fun, but there's no reason why we should do all the work. Your turn now, ${((s as any).pcs_nickname ?? '')}. Make it good."`);
  qspCall(s, 'npcStat', 'A11');
  qspCall(s, 'npcStat', 'A10', 'a');
  qspCall(s, 'npcStat', 'A9', 'b');
  if (((s as any).BjBeerQW ?? 0) === 3) {
    scene.text('You quickly drop to your knees and suck the guys off diligently, looking up at them fearfully. As long as you do a good job, they\'ll let you control the pace… right?');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID2 ?? 0), 'group');
    scene.text('Dan is not unhappy with your efforts, but feels bored after you move away from his cock again. He offers: "She\'s got more than one hole, guys… why are we all sharing just the one?"');
    scene.text('The thought barely registers in your mind at first, but finally it does: they\'re going to fuck you too!?');
    qspCall(s, 'willpower', 'self', 'anal', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Offer your ass instead', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer your ass instead', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('You plead to the guys: "Please guys, I\'m still a virgin! My Mum would kill me if I lost my virginity, she has me checked every month! Maybe… maybe there\'s something else I could do to please you, if you leave my pussy alone?"');
    scene.actions([
      { label: 'Take it in the ass', goto: ['gopskver', 'BjBeerAnal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let them fuck you', goto: ['gopskver', 'BjBeerVag'] },
    ]);
  } else {
    if (((s as any).BjBeerQW ?? 0) === 4) {
      scene.text(`You routinely drop to your knees, and suck the guys off one by one. Suddenly Vitek reaches down, and rubs his rough fingers over your holes. He grunts: "Listen, ${((s as any).pcs_nickname ?? '')}… ever got fucked in the ass before?"`);
      qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID2 ?? 0), 'group');
      if (((s as any).pcs_ass ?? 0) <= 5) {
        scene.text('You shake your head while you pull away from sucking Dan\'s cock, and look at him wide eyes: "No! I\'ve never had anything that big in there…" He gives you a reassuring smile and says: "We\'ll take it slow, and you even get to keep your hymen intact! Come on guys, let\'s move her a bit deeper into the woods… she could get noisy."');
        scene.text('Before you can reply, you feel some hands tightly gripping your arms, and the guys drag you deeper into the park.');
      } else {
        scene.text('You nod embarrassedly: "Yea… I\'ve had anal sex before."');
        scene.text('Vitek grins and says: "Excellent, then you can show us what you\'ve learned so far. Guys, let\'s move her a bit deeper into the park… she could get noisy.');
        scene.text('Before you can reply, you feel some hands tightly gripping your arms, and the guys drag you deeper into the park.');
      }
      scene.actions([
        { label: 'Submit and let them fuck your ass', goto: ['gopskver', 'BjBeerAnal'] },
      ]);
    } else {
      qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID1 ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', (-5), ((s as any).npcID2 ?? 0), 'group');
      scene.actions([
        { label: 'Put some effort into sucking them off', goto: ['gopskver', 'BjBeerAct'] },
        { label: 'Passively suck them off', goto: ['gopskver', 'BjBeerPas'] },
      ]);
    }
  }
  scene.build();
}

function enterBjBeerYes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'fame', 'pav', 'sex', 4);
  (s as any).Bjrand = (Math.floor(Math.random() * 2) + 1);
  scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((s as any).Bjrand ?? '')}.jpg`);
  scene.text('You take a deep sigh… guess that\'s the way it\'s going to be, now. At least these guys will take care of you if you get in trouble, and they\'ll give you beer… that\'s not so bad, right?');
  scene.text('You squat down without objections, and obediently open your mouth while you stare at the guys. They quickly undo their pants, and Vasily is the first to reach your mouth. You dutifully suck him off, ignoring the rather foul taste that comes from his dick. After a bit of sucking, it\'s mostly gone anyway.');
  scene.text('The other guys also want you to please them, and you put your hands on their hard cocks while you give Vasily a blowjob. After a while you switch, trying to give them all a blowjob at the same time.');
  qspCall(s, 'npcStat', 'A11');
  qspCall(s, 'npcStat', 'A10', 'a');
  qspCall(s, 'npcStat', 'A9', 'b');
  if (((s as any).BjBeerQW ?? 0) === 3) {
    scene.text(`You obediently drop to your knees and lick your lips, looking up at the guys with your ${((s as any).glaza3 ?? '')}.`);
    scene.text('Pleased with your eagerness, Vasily says: "I bet we could get more out of her than just a blowjob. Let\'s go find a quiet place and put her other holes to work too!"');
    scene.text('You meekly object, but it gets drowned out by the enthusiastic shouts of the others. They pull you up and guide you to a place where no one ever comes.');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group');
    qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'group');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'self', 'anal', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Offer your ass instead', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer your ass instead', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text(`You plead to the guys: "Please guys, I'm still a virgin! My ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')} would kill me if I lost my virginity, she has me checked every month! Maybe… maybe there's something else I could do to please you, if you leave my pussy alone?"`);
    scene.actions([
      { label: 'Take it in the ass', goto: ['gopskver', 'BjBeerAnal'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Let them fuck you', goto: ['gopskver', 'BjBeerVag'] },
    ]);
  } else {
    if (((s as any).BjBeerQW ?? 0) === 4) {
      scene.text(`You routinely drop to your knees, and suck the guys off one by one. Suddenly Vitek reaches down, and rubs his rough fingers over your holes. He grunts: "Listen, ${((s as any).pcs_nickname ?? '')}… ever got fucked in the ass before?"`);
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group');
      qspCall(s, 'stat', '');
      if (((s as any).pcs_ass ?? 0) <= 5) {
        scene.text('You shake your head while you pull away from sucking Dan\'s cock, and look at him wide eyes: "No! I\'ve never had anything that big in there…" He gives you a reassuring smile and says: "You will today. We\'ll take it slow, and you even get to keep your virginity! Come on guys, let\'s move her a bit deeper into the woods… she might get noisy."');
        scene.text('Before you can reply, you feel some hands tightly gripping your arms, and the guys drag you deeper into the park.');
      } else {
        scene.text('You nod embarrassedly: "Yea… I\'ve had anal sex before."');
        scene.text('Vitek grins and says: "Excellent, then you can show us what you\'ve learned so far. Guys, let\'s move her a bit deeper into the park… she might get noisy.');
        scene.text('Before you can reply, you feel some hands tightly gripping your arms, and the guys drag you deeper into the park.');
      }
      scene.actions([
        { label: 'Submit and let them fuck your ass', goto: ['gopskver', 'BjBeerAnal'] },
      ]);
    } else {
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group');
      qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID2 ?? 0), 'group');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Do your best when you suck them off', goto: ['gopskver', 'BjBeerAct'] },
        { label: 'Just put in a token effort', goto: ['gopskver', 'BjBeerPas'] },
      ]);
    }
  }
  scene.build();
}

function enterBjBeerAct(s: GameState, scene: SceneBuilder): void {
  (s as any).throatrand = (Math.floor(Math.random() * 2) + 7);
  (s as any).BjBeerActiv = 1;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer3.jpg');
  if (((s as any).pcs_throat ?? 0) < 16) {
    scene.text('You actively try to please the boys, and one cock inside your throat as deep as it will go while you massage the others with your hands. You\'re not very well practised with your throat though, and soon you find yourself choking, drooping, and struggling to suppress your gag reflex.');
  } else {
    scene.text(`Your tongue tightly hugs his penis as he pushed it all the way past your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips, you successfully managed to take his cock all the way down your throat. Eventually, your lower lip is resting on his scrotum.`);
  }
  scene.actions([
    { label: 'Lick his balls', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A11');
    qspCall(st, 'npcStat', 'A10', 'a');
    qspCall(st, 'npcStat', 'A9', 'b');
    scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((st as any).throatrand ?? '')}.mp4`);
    scene.text('While you work their cocks with your throat, you don\'t forget to use your tongue and enthusiastically lick their hairy balls whenever your tongue can reach them.');
    scene.text('Unable to withstand such a powerful stimulation, the guy grabs onto the back of your head and pushes his cock all the way down your throat, not giving you any room to breathe. Fortunately, he orgasms right away.');
    scene.text('Thick gobs of his semen enter your throat as he moans loudly, and you automatically swallow every drop in a reflex. Finally, the dick is pulled away from your face and you can breathe again. Vasily grins at your reddened face and says: "Enjoy your meal, slut!" and walks away.');
    scene.text('Vitek immediately takes his place and presses his 18cm cock against your lips: "You\'re not done yet, whore. Keep sucking!"');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0), 'group');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID2 ?? 0), 'group');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID2 ?? 0));
    qspCall(st, 'stat', '');
    if (((st as any).BjBeerQW ?? 0) === 1) {
      scene.actions([
        { label: 'Serve the others', goto: ['gopskver', 'BjBeerPhone'] },
      ]);
    } else {
      if (((st as any).BjBeerQW ?? 0) === 2) {
        scene.actions([
          { label: 'Serve the others', goto: ['gopskver', 'BjBeerPalevo'] },
        ]);
      } else {
        scene.actions([
          { label: 'Serve the others', goto: ['gopskver', 'BjBeerDouble'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjBeerPas(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (1);
  (s as any).BjBeerActiv = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer4.jpg');
  scene.text('You lazily take the cock in your mouth. You make a token effort of using your tongue a little, but all in all just aren\'t feeling it today. The guys sit back and have another beer while you passively suck their cocks, but a half hour later they\'re not much closer to being satisfied than when you started.');
  scene.text('Finally, Dan pulls his dick away from you and complains: "That has to be by far the worst blowjob I have ever gotten. It\'s been half an hour already… are you even trying?"');
  scene.text('You promise you\'ll do better, and obediently open your mouth again.');
  scene.actions([
    { label: 'Open your mouth', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A9', 'b');
    scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${(Math.floor(Math.random() * 2) + 9)}.mp4`);
    scene.text('Vasily already jerked him off to near completion while you weren\'t looking, and when you open your mouth he immediately shoots several hot jets of sperm into it. You\'re too scared of the guys to pull away, and just wait with your mouth open. Once he finishes, Vasily puts his hand over your mouth and pinches your nose shut, forcing you to swallow his load.');
    scene.text('You wince at the horrible taste, but try to hide your disgust as you swallow it.');
    scene.text('Vasily doesn\'t care and just grins: "Get used to it, slut. You\'ll be getting that taste in your mouth a lot more often. You meekly nod, not wanting to argue with the guy, and obediently lick the last bits of his sperm from his cock.');
    scene.text('Vitek immediately takes his place and presses his 17cm cock against your lips: "You\'re not done yet, whore. Keep sucking! And put some effort into it this time, my patience is wearing thin."');
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID2 ?? 0));
    if (((st as any).BjBeerQW ?? 0) === 1) {
      scene.actions([
        { label: 'Serve the others', goto: ['gopskver', 'BjBeerPhone'] },
      ]);
    } else {
      if (((st as any).BjBeerQW ?? 0) === 2) {
        scene.actions([
          { label: 'Serve the others', goto: ['gopskver', 'BjBeerPalevo'] },
        ]);
      } else {
        scene.actions([
          { label: 'Serve the others', goto: ['gopskver', 'BjBeerDouble'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjBeerDouble(s: GameState, scene: SceneBuilder): void {
  (s as any).Doublerand = (Math.floor(Math.random() * 2) + 14);
  (s as any).pcs_hairbsh = 0;
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'npcStat', 'A11');
  qspCall(s, 'npcStat', 'A10', 'a');
  scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((s as any).Doublerand ?? '')}.jpg`);
  scene.text(`You spread your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips and wrap them around Vitek's cock. At that moment, Dan grunts: "Open wider, slut" and begins to unceremoniously cram his dick into your mouth as well, stretching it to the limit. You try to protest, but the guys just laugh at the comical sounds you make with two cocks in your mouth. Once Dan gets settled in, the guys slowly begin to move, fucking your mouth at the same time.`);
  if (((s as any).pcs_throat ?? 0) > 15) {
    scene.text('Even though it\'s difficult, you manage to take both of their erections deep inside your mouth. You sometimes tease them with your tongue.');
  } else {
    scene.text('The cocks in your mouth are making it difficult for you to breathe, and you can feel tears forming in the corners of your eyes while you do your best to not anger the guys. Choking and gasping, you do your best to service them both, but most of your efforts are focused on keeping down the compulsion to retch. It\'s becoming more and more difficult.');
  }
  scene.text('The Gopniks don\'t care about your troubles, and continue to play with your mouth. They rub their own cocks against the inside of your cheeks, and constantly give you degrading talk.');
  scene.text(`Luckily the guys don't last long, and finish fairly quickly. They both pull out and drop their loads on your face, and wipe their dicks on your ${((s as any).pcs_haircolor ?? '')} ${((s as any).curly_txt ?? '')} hair before finally letting go of your head.`);
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID ?? 0), 'group');
  qspCall(s, 'cum_call', 'face', ((s as any).npcID ?? 0), 1);
  qspCall(s, 'cum_call', 'hair', ((s as any).npcID ?? 0), 1, '', 500);
  qspCall(s, 'arousal', 'bj', 5, ((s as any).npcID1 ?? 0), 'group');
  qspCall(s, 'cum_call', 'face', ((s as any).npcID1 ?? 0), 1);
  qspCall(s, 'cum_call', 'hair', ((s as any).npcID1 ?? 0), 1, '', 500);
  scene.actions([
    { label: 'Try to clean yourself up a little', goto: ['gopskver', 'BjBeerFace'] },
  ]);
  scene.build();
}

function enterBjBeerFace(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pcs_makeup ?? 0) === 0  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
    scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer6.jpg');
    scene.text('You fall back onto the ground, feeling completely exhausted. Your face is a complete mess. The tears, saliva and semen smeared your make-up everywhere, and you look like a lost panda bear. A very slutty panda bear with cum all over her face.');
  } else {
    scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer5.jpg');
    scene.text('You fall back onto the ground, feeling completely exhausted. Your face is a complete mess. Your tears and saliva are everywhere, mixed with the boys\' semen.');
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).BjBeerDay = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.text('Dan grins at his friends: "I told you she has a great mouth! It\'s just made for sucking and fucking!"');
  scene.text('You blush deeply, and turn your head away from them in an attempt to hide your embarrassment.');
  if ((!((s as any).BjBeerQW ?? 0))) {
    scene.text('Dan softly says to his friends: "We should make a video next time… maybe a video of her choking on a cock?" The boys laugh loudly.');
  } else {
    if (((s as any).BjBeerQW ?? 0) === 1) {
      scene.text(`The boys are whispering amongst themselves, thinking you can't hear them. You pick up a few snippets of the conversation: "${((s as any).pcs_nickname ?? '')}? My dad told me her mother was a huge whore in her days… he said she has a mouth like a vacuum cleaner! I guess the apple doesn't fall far from the family tree eh? I should thank him for that tip…"`);
      scene.text('The boys laugh, and you hide your face from them so they don\'t see your red cheeks.');
    } else {
      if (((s as any).BjBeerQW ?? 0) === 2) {
        scene.text('The boys are whispering amongst themselves: "She\'s got a good mouth on her, sure. But what about her other holes? Next time, we have to give that a try…"');
      }
    }
  }
  scene.actions([
    { label: '"How about that beer?"', handler: (st: GameState) => {
    if (((st as any).BjBeerActiv ?? 0) === 1) {
      (st as any).Beerrand = (Math.floor(Math.random() * 2) + 11);
      (st as any).BjBeerQW = ((st as any).BjBeerQW ?? 0) + (1);
      qspCall(st, 'drugs', 'alcohol', 'beer', 1);
      qspCall(st, 'stat', '');
      scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((st as any).Beerrand ?? '')}.jpg`);
      scene.text('Dan grins at you and offers you his unfinished bottle, and smiles when you drink it eagerly. Your mood improves slightly.');
      scene.actions([
        { label: 'Return to the park', handler: (st: GameState) => {
    (st as any).BjBeerActiv = 0;
  }, goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      if ((!((st as any).BjBeerActiv ?? 0))) {
        (st as any).pcs_mood = (-10);
        (st as any).BjBeerQW = ((st as any).BjBeerQW ?? 0) + (1);
        qspCall(st, 'stat', '');
        scene.img('images/locations/pavlovsk/park/sex/gop/bjbeer13.jpg');
        scene.text('Dan shrugs: "It took you way too long to finish us off, we drank all the beer in the meantime."');
        scene.text('He grins as he shows you the empty bottle. You bite your lip in frustration and disappointment when you mutter: "But… but I… how…"');
        scene.text('Maybe you should try harder, next time.');
        scene.actions([
          { label: 'Return to the park', goto: ['pav_park', 'deeper_park'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterBjBeerPhone(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_hairbsh = 0;
  ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (2);
  qspCall(s, 'arousal_funcs', 'stretch', 'oral', 1);
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/gop/bjbeerphone.jpg');
  scene.text(`You spread your ${(((s as any).pc_desc ?? 0)?.['lips'] ?? '')} lips and wrap them around Vitek's cock. At that moment, Dan grunts: "Open wider, slut" and begins to unceremoniously cram his dick into your mouth as well, stretching it to the limit. You try to protest, but the guys just laugh at the comical sounds you make with two cocks in your mouth.`);
  scene.text(`Suddenly Vasily pulls out his phone and begins to record a video, while he comments on what is happening: "Hello everyone, and welcome to Pavlovsk News! Our special guest today is the one and only ${((s as any).gnikname ?? '')}, ${((s as any).pcs_nickname ?? '')}! Say hi to our viewers, ${((s as any).pcs_nickname ?? '')}!"`);
  scene.text('"Mvhr… mflm…" you try to say something, but the cocks in your mouth prevent you from talking. The boys firmly hold your head in place, and continue to fuck your mouth with their two cocks.');
  scene.text(`Vasily continues: "${((s as any).pcs_nickname ?? '')}, I've been told that you're doing this, for a beer! Do you really like beer, or do you just like sucking cocks so much?"`);
  scene.text(`Dan grabs your ${((s as any).pcs_haircolor ?? '')} ${((s as any).curly_txt ?? '')} hair in his fist, and moves your head so it looks like you're nodding yes.`);
  scene.text(`Vasily piles it on some more: "There you have it, dear viewers! ${((s as any).pcs_nickname ?? '')} ${((s as any).pcs_lastname ?? '')} is happily sucking three cocks, for the low low price of one beer! Where else can you find such a cheap slut?"`);
  scene.text('You try to protest and turn away from the camera, but Dan\'s firm grip on your hair makes it so you cannot move.');
  scene.text('You can only imagine how incredibly foolish and humiliating you must look in the video: on your knees, with two thick cocks in your cute little mouth. The cocks are wedged in so tightly that they make your cheeks bulge and stretch your lips.');
  if (((s as any).pcs_makeup ?? 0) === 0  &&  (!((s as any).cosmetic_tattoo ?? 0))) {
    scene.text('Your cosmetics got smeared from the tears in your eyes, and by now it is smeared all the way down your cheeks. You have strands of saliva hanging out of your mouth, attaching your chin to your boobs.');
  } else {
    scene.text('Your eyes got all teary from the rough treatment, and there are strands of saliva hanging out of your mouth, attaching your chin to your boobs.');
  }
  scene.text(`Luckily the guys don't last long, and finish fairly quickly. They both pull out and drop their loads on your face, and wipe their dicks on your ${((s as any).pcs_haircolor ?? '')} ${((s as any).curly_txt ?? '')} hair. They make you lick their cocks clean, but don't let go of your hair just yet.`);
  scene.text(`Vasily grins as he tells the camera: "And that was the premiere presentation of ${((s as any).pcs_nickname ?? '')} ${((s as any).pcs_lastname ?? '')} in her very first production called "Gagging Whore"! You delivered an excellent performance ${((s as any).pcs_nickname ?? '')}, say hi to your ${(((s as any).npc_nickname ?? 0)?.['A29'] ?? '')}!" He zooms in on your face, and continues to film.`);
  scene.actions([
    { label: 'Do as he says', handler: (st: GameState) => {
    scene.text(`By now you would rather just disappear in a large hole in the ground and never come back, but that's not an option. You doubtfully look at the camera, wiping the tears and cum from your eyes as you softly mutter: "Hi ${(((st as any).npc_nickname ?? 0)?.['A29'] ?? '')}…"`);
    scene.text('You desperately hope Vasily was just having a bit of fun with you, and that he\'ll delete the recording before anyone else sees it.');
    scene.actions([
      { label: 'Try to clean yourself up', goto: ['gopskver', 'BjBeerFace'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjBeerPalevo(s: GameState, scene: SceneBuilder): void {
  (s as any).evgenQW = 4;
  if (((s as any).brotherQW ?? 0)?.['know_slut'] < 2) {
    ((s as any).brotherQW = (s as any).brotherQW ?? {})['know_slut'] = 2;
  }
  (s as any).Doublerand = (Math.floor(Math.random() * 2) + 14);
  (s as any).pcs_hairbsh = 0;
  ((s as any).stat = (s as any).stat ?? {})['bj'] = ((s as any).stat['bj'] ?? 0) + (2);
  (s as any).pcs_throat = ((s as any).pcs_throat ?? 0) + 1;
  (s as any).spafinloc = 11;
  qspCall(s, 'cum_manage', '');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((s as any).Doublerand ?? '')}.jpg`);
  scene.text(`By now you know what they want, and humbly open your mouth as wide as possible. Vitek immediately guides his cock towards your mouth, and impatiently pushes it down your ${((s as any).throattipe ?? '')} throat.`);
  scene.text('At that moment, Dan grunts: "Open wider, slut" and begins to unceremoniously cram his dick into your mouth as well, stretching it to the limit.');
  scene.text('You know protesting would be pointless and don\'t resist, allowing the boys to use your mouth as they please. With some grunts they try to force their cocks further down your throat, and eventually they manage to get both about two thirds of the way in.');
  scene.text('The Gopniks continue to stare you down, as if you are nothing to them. Vasily jokes from the side: "I see she\'s already used to two cocks in that whore mouth of hers… I wonder if she can take a third?"');
  scene.text('Suddenly, you feel like someone\'s watching you. You open your eyes and try to look past the boys, and you see… Kolka, your brother!');
  scene.text('From the look on his eyes, he is just as amazed at how good you are with your mouth as you are yourself. Judging from his posture, he\'s not just watching… he\'s slowly fondling himself as he watch his sister get fucked in her mouth by two guys at once. What a pervert!');
  scene.text('You can\'t reprimand him right now though, as you feel a hand at the back of your head and your focus is redirected to the erections you\'re supposed to be servicing with your mouth.');
  scene.text('You feel deeply embarrassed, being exposed to your brother like this… as if the shame of that video was not enough!');
  scene.text('The guys, oblivious to your train of thought, simultaneously reach orgasm, and you have to do your best to swallow their sperm as it hits the back of your throat. You cough and recoil, having a rough time swallowing it all.');
  scene.text('Several thoughts race through your head… what if he tells your mother or stepfather? What would he think of you now?');
  scene.text('You look around trying to find him again, but he is gone. You obediently suck their cocks clean, and lick the last bits of sperm off them like you always do for the guys. When they\'re finally satisfied with your performance, Dan lets go of your hair.');
  scene.actions([
    { label: 'Try to clean yourself up', goto: ['gopskver', 'BjBeerFace'] },
  ]);
  scene.build();
}

function enterBjBeerVag(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  ((s as any).stat = (s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})?.['rape_count'] ?? 0) + 1;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})?.['gangbang_count'] ?? 0) + 1;
  (s as any).BjBeerQW = ((s as any).BjBeerQW ?? 0) + (1);
  (s as any).BjBeerDay = ((s as any).daystart ?? 0);
  qspCall(s, 'fame', 'pav', 'sex', 4);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/gop/bjbeervag.jpg');
  scene.text('The guys prop you down onto the bench with your legs wide, and unceremoniously begin to touch you everywhere. They pull your legs to the side, pinch your nipples, pull your clothes to the sides and put several fingers in your pussy.');
  scene.text('You are trying to hide your feelings, but wail when they pinch your nipples or slap your bottom too roughly. Tears slowly form in your eyes when you realize you\'re really nothing more but a set of holes to fuck for them.');
  if (((s as any).analPlugIn ?? 0) === 1) {
    scene.text(`Vasily suddenly exclaims: "A butt plug!? Were you preparing your tight little ass for us the whole time, ${((s as any).pcs_nickname ?? '')}? How sweet!" He roughly pulls the plug out of your ass, and just as abruptly shoves it back in. The other boys laugh, as they notice the grimace on your face.`);
  }
  if (((s as any).pcs_pubes ?? 0) > 10) {
    scene.text('One of the boys fondles your nether region, but mumbles unhappily: "Man, it\'s like the freaking rainforest down there. You should really shave next time, this is disgusting."');
  } else {
    if (((s as any).pcs_pubes ?? 0) > 3) {
      scene.text('One of the boys runs his hand over your mons pubis: "Be careful with this one lads, she\'s a bit prickly." All the boys start laughing and you tell him to fuck off.');
    } else {
      scene.text(`Dan runs his hand over your bald pussy, and chuckles with satisfaction: "Very nice, ${((s as any).pcs_nickname ?? '')}. You got it all nice and smooth for us, so we can see what we're fucking next."`);
    }
  }
  if (((s as any).pcs_piercings ?? 0)?.['pussy'] > 0) {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    scene.text('The guys are intrigued by your intimate piercing, and playfully rub and tug at it, making you blush and moan with excitement.');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['pussy'] > 0  ||  ((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    scene.text('Vitek grins approvingly when he finds your pubic tattoo: "Already branded, so everyone can see what a good little whore you are! That\'s good, you won\'t be able to give anyone the wrong idea this way…"');
  } else {
    scene.text(`Vitek runs his hand over your smooth skin and mutters: "It's time you get a proper brand, ${((s as any).pcs_nickname ?? '')}… no one can see what a huge slut you are, if you don't get a proper tattoo. Maybe we'll have to take you down to the city one day…"`);
  }
  scene.text('After fondling your pussy for another while, your pussy ends up being quite wet from their fondlings. The guys grin at one another: "She\'s ready, boys. Who wants to go first?"');
  scene.actions([
    { label: 'Get fucked on the ground', handler: (st: GameState) => {
    (st as any).dick = 18;
    qspCall(st, 'npcStat', 'A9');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjbeervag1.mp4');
    scene.text('Vitek is their leader, so it only makes sense he gets to go first. The other Gopniks pull you onto the ground, and restrain your body while Vitek moves his hard cock to your pussy and rams it in.');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    if (((st as any).protect ?? 0) !== 1) {
      (st as any).sexpartkno = 1;
      qspCall(st, 'cum_manage', '');
      qspCall(st, 'stat', '');
      scene.text('Finally, his movements speed up, and he finishes inside you after thrusting his cock all the way in. You groan softly, feeling his warm sperm slowly running down your pussy. Then he gets up and nods to his friends: "Not bad. Have fun, guys."');
    } else {
      (st as any).sexcontra = 3;
      (st as any).sexpartkno = 1;
      qspCall(st, 'cum_manage', '');
      (st as any).protect = 0;
      if (((st as any).sexcontra ?? 0) === 4) {
        scene.text('After a few minutes, his movements become more ragged and in a powerful final movement he drives his cock all the way inside your cunt, as he groans and finishes in the condom. The condom bursts inside you, and he shrugs: "Whatever… sorry guys. Looks like the condom broke, so my cum is still inside her."');
      } else {
        if (((st as any).sexcontra ?? 0) === 5) {
          scene.text('After a few minutes, his movements become more ragged and in a powerful final movement he drives his cock all the way inside your cunt, as he groans and finishes in the condom. When he pulls out, there is no condom on his dick. He shrugs: "Whatever… sorry guys. Looks like the condom is still inside her."');
        } else {
          scene.text('After a few minutes, his movements become more ragged and in a powerful final movement he drives his cock all the way inside your cunt, as he groans and finishes in the condom. He pulls out and removes the condom from his cock, before offering it to you: "Clean it up slut, and clean it good. I hate condoms, there\'s always traces of cum left on my dick after I finish. Make sure you suck everything out, too."');
        }
      }
      (st as any).sexcontra = 0;
    }
    scene.text('You\'re still lying on your back, moaning weakly. Knowing you have no permission to get up yet, you just wait for the next guy to fuck you. Dan immediately takes Vitek\'s place, and lies down on top of you.');
    scene.actions([
      { label: 'Try to relax', handler: (st: GameState) => {
    (st as any).Vagrand = 0;
    qspCall(st, 'npcStat', 'A10');
    (st as any).dick = 17;
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 14;
    qspCall(st, 'cum_manage', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeervag${((st as any).Vagrand ?? '')}.jpg`);
    scene.text('Dan firmly grabs you by the hips, and roughly shoves his cock inside you without any concern for your feelings. His hips vigorously bash against yours, and you can only hope he\'s finished soon.');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    scene.text('When he orgasms, he pulls out of you and shoots his load onto your stomach. When he\'s finished, he gets up from you and makes room for Vasily.');
    scene.text('Vasily winces when he sees Dan\'s cum on your stomach, and mutters: "Dude, you soiled the whore… I don\'t want to touch that!"');
    scene.actions([
      { label: 'Turn around for Vasily', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A11');
    (st as any).cumprecheck = 1;
    qspCall(st, 'cum_manage', '');
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 4;
    qspCall(st, 'cum_manage', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/shared/sex/public/publ1,1.mp4');
    scene.text('Your body is aching and tired, but you know you\'re not getting away until Vasily had a turn too. Vasily is still unhappy, trying to figure out what to do with you: "Damn, this slut is disgusting… not cool, Dan. Not cool at all!"');
    scene.text('You sigh and turn around, exposing your holes to Vasily. He won\'t have to touch Dan\'s mess from behind, and Vasily nods at you appreciatively as he guides his cock to your already overworked pussy. "Very nice, whore! Already going the extra mile… and you thought you wouldn\'t be good at being a slut!"');
    qspCall(st, 'dinsex', 'vaginal_sex', 10);
    scene.text('Vasily firmly holds your hips as he roughly pounds your pussy from behind, making your boobs sway every time he thrusts his hips against yours. Even though his cock is not as big as the other guys\', you\'ve already had two before him and your overworked cunt is begging for mercy.');
    scene.text('After a few minutes, he pulls out and shoots his hot jets of cum on your buttocks. You feel exhausted, and fall down onto the grass below you.');
    scene.actions([
      { label: 'Recover', handler: (st: GameState) => {
    (st as any).Beerrand = (Math.floor(Math.random() * 2) + 11);
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((st as any).Beerrand ?? '')}.jpg`);
    scene.text('After resting for a few minutes, you slowly push yourself up and softly mutter a "Hello" to the boys.');
    scene.text('They grin at the way your legs tremble awkwardly, and their sperm slowly runs down your legs. Your belly and buttocks are still covered in it, but you just adjust your clothes without giving it any more thought.');
    scene.text('You have a faint smile on your face, and look expectantly at the guys as you wait for your reward.');
    scene.text('Dan grins and gives you his unfinished bottle of beer: "Here you go, slut. You\'ve earned it."');
    scene.text('You eagerly drink the beer with a content smile on your lips. Your mood improves slightly.');
    scene.actions([
      { label: 'Return to the park', goto: ['pav_park', 'deeper_park'] },
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

function enterBjBeerAnal(s: GameState, scene: SceneBuilder): void {
  ((s as any).stat = (s as any).stat ?? {})['rape_count'] = (((s as any).stat ?? {})?.['rape_count'] ?? 0) + 1;
  ((s as any).stat = (s as any).stat ?? {})['gangbang_count'] = (((s as any).stat ?? {})?.['gangbang_count'] ?? 0) + 1;
  (s as any).BjBeerQW = ((s as any).BjBeerQW ?? 0) + (1);
  (s as any).BjBeerDay = ((s as any).daystart ?? 0);
  qspCall(s, 'fame', 'pav', 'sex', 4);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/park/sex/gop/bjbeeranal.jpg');
  scene.text('The guys guide you to the by now familiar bench at the back of the park again. The boys unceremoniously push you over towards the bench, and make you kneel on top of it.');
  scene.text('You dutifully await on the bench with your head down, slowly pulling your clothes to the side to expose your ass for the boys. You feel a shiver roll down your spine, while you feel them silently judging you.');
  if (((s as any).pcs_ass ?? 0) <= 5) {
    scene.text('You hear a frantic discussion behind you, the guys are trying to figure out who gets to fuck your tight unexperienced ass first. Vasily ends up being the lucky one.');
  } else {
    scene.text('You hear a frantic discussion behind you, the guys are trying to figure out who gets to fuck your ass first. Vasily ends up being the lucky one.');
  }
  if (((s as any).pcs_tattoos ?? 0)?.['tramp'] > 0) {
    scene.text('When he sees the tattoo on your lower back, Vasily pats your ass approvingly: "Nice tramp stamp, whore."');
  } else {
    scene.text('Seeing your bare back, Vasily mutters irritably: "A slut such as yourself should really get a tattoo back there… that way, people can recognize you for what you really are."');
  }
  if (((s as any).analPlugIn ?? 0) === 1) {
    (s as any).analPlugIn = 0;
    (s as any).analPlugOut = 1;
    scene.text('"You won\'t be needing this!" Vasily grins, and he pulls out your butt plug with a loud pop. He\'s quite rough with it, and you grimace at the sudden extrusion.');
  }
  scene.text('Once he thinks you\'re ready, Vasily roughly pulls your buttocks to the sides with a grin on his face and looks at your sphincter, before spitting on it.');
  scene.actions([
    { label: 'Try to relax your anus', handler: (st: GameState) => {
    (st as any).dick = 15;
    qspCall(st, 'npcStat', 'A11');
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 3;
    qspCall(st, 'cum_manage', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjbeeranal2.jpg');
    qspCall(st, 'dinSex', 'boy_wants_anal', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('You groan loudly and try to slow him down with your hands while you try to relax and get used to the size. He misunderstands, though. Your moaning and struggling only turn Vasily on even more, and he redoubles his efforts and fucks your ass even harder. His balls are slapping against you with every thrust, and within minutes you feel Vasily\'s thrusts get more and more erratic. Then, he finishes deep inside you… you can actually feel his dick twitch inside your asshole, as the cum spurts out. The warm liquid slowly spreads inside you.');
    scene.text('He catches his breath for a second, and then slowly pulls out. You don\'t have much time to think about the assfucking he gave you though, as Dan says: "Not bad. Now get back into position and spread your ass, slut. You still have two more to go."');
    scene.actions([
      { label: 'Spread your ass cheeks', goto: ['gopskver', 'BjBeerAnal2'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBjBeerAnal2(s: GameState, scene: SceneBuilder): void {
  (s as any).Analrand = 0;
  qspCall(s, 'npcStat', 'A10');
  (s as any).dick = 17;
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 3;
  qspCall(s, 'cum_manage', '');
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  if (((s as any).pcs_makeup ?? 0) > ((s as any).makeup ?? 0)?.['base']) {
    (s as any).pcs_makeup = 0;
  }
  qspCall(s, 'stat', '');
  scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeeranal${((s as any).Analrand ?? '')}.jpg`);
  scene.text('You nod and let him move you around, so he can position you the way he likes. He puts you in a similar position that Vasily had you in, and spits on your sphincter. It\'s not fully closing yet after the fucking Vasily gave you, and you slowly feel his saliva run down your hole while a cold gust of air blows past.');
  qspCall(s, 'dinSex', 'boy_wants_anal', 'lubri\' & gs \'dinsex', 'analsex');
  scene.text(`Dan silently slides his cock inside your ass, and asks with a lewd grin on his face: "You want this… don't you, ${((s as any).pcs_nickname ?? '')}?"`);
  scene.text('You know what he wants to hear, and meekly nod and whisper: "Yes…"');
  scene.text('"Louder, slut! I can\'t hear you!" Dan firmly grabs you by the hair and pulls your head backwards, rougher than you had anticipated. You let out an involuntary cry and feel tears forming in your eyes, but Dan ignores it and asks: "Why are you with us?"');
  scene.text('You don\'t want him to pull your hair again, and quickly blurt out: "I love the way you fuck my ass! All of you! You take such good care of me… I\'m an anal slut… please keep fucking me!"');
  scene.text('The boys laugh: "Look at her… she seems like such a sweet and innocent girl, but she\'s nothing more than an ordinary butt slut!"');
  scene.text('Your \'confession\' seems to have done it for Dan, and his movements are almost immediately speeding up. A few seconds later, he drives his cock deep inside your ass one final time and pumps his seed into you.');
  scene.text('You\'re still on your hands and knees on the bench, sperm slowly dribbling from your now well-used asshole. You still have the biggest cock of the lot to please though, and Vitek walks around you in a circle. His impressive cock is gently bobbing with every step, and he grins as he notices your look is fixated on it.');
  scene.actions([
    { label: 'Offer your ass', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A9');
    (st as any).dick = 18;
    (st as any).sexpartkno = 1;
    (st as any).spafinloc = 4;
    qspCall(st, 'cum_manage', '');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjbeeranal5.jpg');
    scene.text('Looking at your tear-stained face, Vitek says with a grin: "Get used to it, slut. That\'s all you\'re good for now. After we work you in a bit more, you\'ll be able to handle even more cocks at once."');
    qspCall(st, 'dinSex', 'boy_wants_anal', 'lubri\' & gs \'dinsex', 'analsex');
    scene.text('He holds you firmly by the hips and guides his cock to your stretched sphincter, before slapping the entire length in with one firm stroke. You groan loudly, and have to steady yourself on the bench. Meanwhile Vitek slowly pulls out and laughs when he sees you make vain attempts to close your sphincter, and then slams his cock back in again. He slowly grins to thrust his cock inside you, and you hear a squishing sound every time he pushes his cock in deeper. You\'re deeply embarrassed when you realize that squishy sound is probably the sound of Vasily and Dan\'s sperm, lubricating this third fucking.');
    scene.text('He fucks your ass for a good few minutes, and then pulls out his erection to shoot his white viscous liquid all over your buttocks. Then he offers his cock to you, and tells you to lick it clean thoroughly. A shiver runs down your spine when you think of what you\'re doing: licking the cum of three guys off a cock, that was just in your ass not even one minute before.');
    if (((st as any).BjBeerQW ?? 0) === 4) {
      scene.text(`When all the guys are satisfied, you tiredly lie down on the grass for a moment. Vasily comes over with a grin on his face and asks: "Well, ${((st as any).pcs_nickname ?? '')}, would you say you know how to get fucked in the ass now?"`);
      scene.text('You quietly answer: "Yes, I do", blushing and hiding your face. Vasily happily nods, and continues: "I\'d say so too. So, you\'ll be offering us your ass more often from now on, understood?"');
      scene.text('You obediently nod and mechanically respond: "I will, you guys can fuck my ass more often if you want."');
      scene.text('Vasily grins while the other boys laugh: "Excellent… just what we wanted to hear."');
    }
    scene.text('Then Vitek orders: "Now turn around and show us that used ass of yours."');
    scene.actions([
      { label: 'Show them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    if (((st as any).pcs_ass ?? 0) <= 10) {
      scene.img('images/pc/body/cum/cumanal/cumanal4.jpg');
      scene.text('You obediently turn around and spread your ass cheeks, showing them your red and sore hole.');
    } else {
      if (((st as any).pcs_ass ?? 0) < 25) {
        scene.img('images/pc/body/cum/cumanal/cumanal5.jpg');
        scene.text('You obediently turn around and spread your ass cheeks, showing them your red and stretched hole.');
      } else {
        scene.img('images/pc/body/cum/cumanal/cumanal6.jpg');
        scene.text('You obediently turn around and spread your ass cheeks, showing them your sore and wrecked hole.');
      }
    }
    scene.text('Your poor butthole is finally beginning to close again, after getting several servings of seed poured into it.');
    scene.text('After the cocks you took today, your ass feels a bit sore. It won\'t fully close yet, and sperm leaks slowly from it.');
    scene.text('The Gopniks slap each other on the back while they admire their handiwork: "We have a real buttslut on our hands here, boys!"');
    scene.actions([
      { label: '"How about that beer?"', handler: (st: GameState) => {
    (st as any).Beerrand = (Math.floor(Math.random() * 2) + 11);
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    qspCall(st, 'stat', '');
    scene.img(`images/locations/pavlovsk/park/sex/gop/bjbeer${((st as any).Beerrand ?? '')}.jpg`);
    scene.text('Dan grins and gives you his unfinished bottle of beer: "Here you go, slut. You\'ve earned it."');
    scene.text('You eagerly drink the beer with a content smile on your lips. Your mood improves slightly.');
    scene.actions([
      { label: 'Return to the park', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDanBlowjob(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Squat before Dan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'npcStat', 'A10');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A10'] = 1;
    if ((!((st as any).DansOralSlut ?? 0))) {
      (st as any).DansOralSlut = 1;
    }
    scene.img('images/shared/sex/blowjob/bjdan.jpg');
    scene.text('You meekly nod and lower yourself onto your haunches before Dan, while he eagerly unbuttons his pants and pulls out his erect penis. You tentatively lick the engorged head, coaxing a moan out of him: "That\'s it baby, now take it in your mouth."');
    scene.text('You nod and part your lips, slowly guiding his cock into your mouth. Dan puts his hand behind your head and gets a firm grip on your hair, but to your surprise he doesn\'t make you take more of his cock in. You\'re still in control of the pace, and gently bob your mouth up and down on his cock while he gently strokes your hair, even though he doesn\'t release his grip on your hair. After a few minutes, you can feel his body grow more tense, and seconds later you feel a warm and viscous liquid spurt into your mouth. You can\'t spit it out with him still holding your hair like this, so you have no choice but to swallow the tangy fluid.');
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID ?? 0));
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.text(`When Dan is finally finished, he lets go of your hair and lets you get up. He tucks his cock back into his pants while you wipe your mouth with the back of your hand, feeling that some of his semen ended up on your chin. The taste of his cum still in your mouth is very noticeable too. Dan nods happily: "Not bad, ${((st as any).pcs_nickname ?? '')}. Your technique is still a bit lacking, but we'll work on that next time."`);
    scene.text('Indicating that he\'s done with you now, he wishes you a good night and leaves.');
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } },
    { label: 'Bend over for Dan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A10'] = 1;
    qspCall(st, 'npcStat', 'A10');
    (st as any).pose = 1;
    scene.img('images/shared/sex/vag/doggy/kotovsex10.mp4');
    dynamicGoto(st, String((st as any).vagstart || ''));
    scene.text('You bend over seductively and pull your clothes aside to give Dan easier access. He doesn\'t require any further invitation and immediately pulls his already hard cock out of his sweatpants, and eases it in before he begins to fuck you.');
    dynamicGoto(st, String((st as any).vagend || ''));
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterTripleBlow(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'Suck Dan\'s cock', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'sex', 15);
    qspCall(st, 'npcStat', 'A10');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A10'] = 1;
    scene.img('images/locations/pavlovsk/park/sex/gop/bjgop.jpg');
    qspCall(st, 'dinSex', 'bj_random');
    scene.text('Dan groans: "Go on, slut. You better not miss a drop."');
    qspCall(st, 'dinsex', 'bj_swallow_random');
    qspCall(st, 'arousal', 'bj', 5, ((st as any).npcID1 ?? 0));
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck Vasily\'s cock', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A10');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A11'] = 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjgop2.jpg');
    qspCall(st, 'dinSex', 'bj_random');
    scene.text('Right before he reaches his orgasm, Vasily takes his dick out of your mouth and aims it at your face like a fire hose. After a few short jerks you feel jets of his hot sperm land on you, and you do your best to keep your eyes closed so nothing gets in.');
    scene.actions([
      { label: 'Suck Vitek\'s cock', handler: (st: GameState) => {
    qspCall(st, 'npcStat', 'A11');
    ((st as any).npc_had_sex = (st as any).npc_had_sex ?? {})['A9'] = 1;
    qspCall(st, 'cum_call', 'face', ((st as any).boy ?? 0), 1);
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjgop3.jpg');
    qspCall(st, 'dinSex', 'bj_random');
    scene.text('Just like Vasily, Vitek takes his cock out of your mouth when he\'s about to cum, and shoots his load over your face. He grins and laughs as he slaps his still erect cock against your cheeks, which are mostly covered in sperm by now.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjgop3.jpg');
    scene.text(`You sit humiliated in front of the three guys, your face smeared in sperm. You carefully try to remove it from your eyes before you open them again, but when you eventually open your eyes it still stings a lot. The boys laugh while they watch you rub your eyes uncomfortably, and Dan says: "Anyway, ${((st as any).pcs_nickname ?? '')}… do you understand what you are now? And where you belong?"`);
    scene.actions([
      { label: 'Meekly nod', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/park/sex/gop/bjgop3.jpg');
    scene.text('You nod your head meekly and say in a soft voice: "I understand."');
    scene.text('The boys give you an approving nod, and Dan says: "You\'re a smart slut, that makes me happy. Most of them need longer to accept their place in life. Anyway… get the hell out, the mess on your face is ruining my appetite."');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
      { label: 'Object', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'pee', (-5), 'sub', 'humiliation', 'group');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/goppee.jpg');
    scene.text('Still rubbing your eyes, you shake your head and say: "No way, Dan! I\'m no slut!"');
    scene.text('Dan angrily replies: "Tough words, coming from some promiscuous whore still trying to rub the sperm out of her eyes. Looks like she needs another reminder, boys."');
    scene.text('You don\'t like the sound of that. When you carefully try to open your eyes again you notice the guys have surrounded you, and they all have their cocks out. Your vision is still blurry though, and you shriek in disgust when you feel a stream of urine hit your face. Then another, and a third. You realize you can\'t fight off the three of them, and just let it happen.');
    scene.text('Noticing your change in demeanour, Dan smirks at you when the streams have dried up: "That\'s right, whore, just let it happen. Let that be a reminder for you… now get the fuck out of here and clean yourself up, you look disgusting."');
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'BjBeerStart':
      enterBjBeerStart(s, scene);
      break;
    case 'BjBeerBeaten':
      enterBjBeerBeaten(s, scene);
      break;
    case 'BjBeerYes':
      enterBjBeerYes(s, scene);
      break;
    case 'BjBeerAct':
      enterBjBeerAct(s, scene);
      break;
    case 'BjBeerPas':
      enterBjBeerPas(s, scene);
      break;
    case 'BjBeerDouble':
      enterBjBeerDouble(s, scene);
      break;
    case 'BjBeerFace':
      enterBjBeerFace(s, scene);
      break;
    case 'BjBeerPhone':
      enterBjBeerPhone(s, scene);
      break;
    case 'BjBeerPalevo':
      enterBjBeerPalevo(s, scene);
      break;
    case 'BjBeerVag':
      enterBjBeerVag(s, scene);
      break;
    case 'BjBeerAnal':
      enterBjBeerAnal(s, scene);
      break;
    case 'BjBeerAnal2':
      enterBjBeerAnal2(s, scene);
      break;
    case 'dan_blowjob':
      enterDanBlowjob(s, scene);
      break;
    case 'triple_blow':
      enterTripleBlow(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const gopskver: LocationDef = {
  name: 'gopskver',
  title: 'Vitek Kotov sees you entering the cafe and tells you to come',
  region: 'other',
  locationType: 'event_indoors',
  description: ['Vitek Kotov sees you entering the cafe and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.'],
  enter: enter,
};
