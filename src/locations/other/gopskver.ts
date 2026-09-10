import { qspCall, qspFunc, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  (s as any).gopniksev['gopskver'] = ((s as any).daystart ?? 0);
  if (((((s as any).location_type ?? 0)).indexOf(('outdoors'))) + 1 > 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'dinsexFX', '');
  if (((s as any).loc ?? 0) === 'gkafe') {
    scene.img('images/locations/pavlovsk/trainstation/cafe/gkafe2.jpg');
  } else {
    scene.img('images/locations/pavlovsk/trainstation/vokzal.jpg');
    scene.img('images/locations/pavlovsk/park/skver.jpg');
  }
  if (((s as any).kotovLoveQW ?? 0) > 0) {
    if (((s as any).hour ?? 0) < 20) {
      if (((s as any).loc ?? 0) === 'gkafe') {
        scene.text('Vitek Kotov sees you entering the cafe and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.');
      } else {
        scene.text('Vitek Kotov sees you entering the train station and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.');
        scene.text('Vitek Kotov sees you walking in the park, and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.');
      }
      scene.actions([
        { label: 'Decline and leave', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'gkafe') {
      scene.actions([{ label: 'Continue', goto: ['gkafe', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_park', 'deeper_park'] }]);
    }
  } },
        { label: 'Drink beer with Vitek and the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/beer3.jpg');
    scene.text('The guys pour one for you, and you enjoy a nice cold beer in their company.');
    if (((s as any).hour ?? 0) === 20) {
      if (((s as any).week ?? 0) === 5  ||  ((s as any).week ?? 0) === 6) {
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
    return;
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'gkafe') {
      scene.actions([{ label: 'Continue', goto: ['gkafe', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_park', 'deeper_park'] }]);
    }
  } },
    ]);
  } },
        { label: 'Give Vitek a sly wink', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Vitek comes over to you and quietly asks: "Hey baby… do you want to keep drinking with the boys, or do you want to go to my house with me?"');
    scene.actions([
      { label: 'Go with Vitek', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    // TODO-QSP: dynamic text: You take Vitek by the hand and almost feel like he's showing you off, ' + iif($l...
    scene.text('You take Vitek by the hand and almost feel like he\'s showing you off, \' + iif($loc=\'gkafe\', \'when he walks you to the exit of the cafe. You take a little walk\', \'when you walk across the park square towards the exit. You leave the park\') + \' and Vitek guides you to where he lives. It\'s a rather worn-down house from the outside, and the inside doesn\'t look much better. Crumpled heaps of clothes lie everywhere, and the floor is littered with empty bottles.');
    scene.actions([
      { label: 'Continue', goto: ['kotovSex', ''] },
    ]);
  } },
      { label: 'Say no', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big9.jpg');
    scene.text('Sorry, babe. I didn\'t mean to tease, but have to get going.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((s as any).loc ?? 0) === 'gkafe') {
      scene.actions([{ label: 'Continue', goto: ['gkafe', ''] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pav_park', 'deeper_park'] }]);
    }
  } },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
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
        scene.text('You\'re quite drunk, and before heading out Dan offers to walk you home.');
        qspCall(s, 'willpower', 'misc', 'resist', 'medium');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: '"No need, I can find my own way home" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: '"No need, I can find my own way home"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_complex', 'start'] },
          ]);
        }
        if (((s as any).alko ?? 0) < 9) {
          scene.text('You\'re quite drunk, and before heading out Dan offers to walk you home.');
          qspCall(s, 'willpower', 'misc', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: '"No need, I can find my own way home" [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: '"No need, I can find my own way home"', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_complex', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Go with Dan', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You\'re walking down the street, feeling a bit wobbly from the alcohol while Dan supports your weight. He tells you funny stories and anecdotes along the way, and before you know it you\'re at your apartment building. When you open the door and enter the building, Dan suddenly pulls you to the side. He\'s quite rough about it, and shoves you into a dark corner of the stairwell. He takes your hand by the chin and kisses your lips hard.');
    qspCall(s, 'willpower', 'kiss', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away and go home', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_complex', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Kiss him back', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You return his kiss, unsure why he's kissing you… he never seemed to be that int...
    scene.text(`You return his kiss, unsure why he's kissing you… he never seemed to be that interested in you. Then you feel his hands on your shoulders, and Dan firmly presses down on them trying to get you to drop to your knees. He whispers reassuringly: "Don't worry, ${((s as any).pcs_nickname ?? 0)}… I didn't tell anyone about all the things you did. Do a good job, and your secret will stay safe."`);
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.text('You push him away from you and say indignantly: "No way, Dan! Leave me alone!"');
    scene.text('Dan\'s eyes look murderous, but he doesn\'t touch you. After a few seconds he bounces back, and he grins as he says: "Suit yourself, whore… your reputation in town will be ruined", and then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    // TODO-QSP: xgt 'gopskver', 'dan_blowjob'
  } },
    ]);
  } },
    ]);
  } },
          ]);
        } else {
          scene.text('You got absolutely hammered in the park, and are swaying from side to side when you walk down the pathway. Suddenly Vasily hugs your waist tightly and begins to lead you somewhere, with his friends following him.');
          qspCall(s, 'willpower', 'gangbang', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Say you have to go and leave them [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Say you have to go and leave them', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
  }, goto: ['pav_complex', 'start'] },
            ]);
          }
          scene.actions([
            { label: 'Go with the guys', handler: (st: GameState) => {
    if ((!((s as any).sgopgang ?? 0))) {
      (s as any).sgopgang = 1;
    }
    (s as any).npc_had_sex['A9'] = 1;
    (s as any).npc_had_sex['A10'] = 1;
    (s as any).npc_had_sex['A11'] = 1;
    (s as any).stat['vaginal'] = ((s as any).stat['vaginal'] ?? 0) + (3);
    (s as any).stat['gangbang_count'] = ((s as any).stat['gangbang_count'] ?? 0) + (1);
    qspCall(s, 'arousal_funcs', 'stretch', 'vaginal', 3);
    scene.img('images/locations/pavlovsk/park/gop/sex/gop/gopgang.jpg');
    scene.text('At some point, you pass out. When you wake up you\'re lying on your back, and you feel something moving inside your pussy. You carefully open your eyes, and between the blinking you see Vasily\'s contorted face, hammering his hips against yours. Is he fucking you!?');
    scene.text('A few seconds later, he pulls out and you feel several warm drops landing on your stomach. You lose consciousness again, and a little while later you wake up to find yourself getting fucked by Dan. He\'s just about finished, and shoots his load onto your stomach as well. Vitek immediately replaces him, and roughly fucks you as if you\'re little more than a few fuckholes to him. Then again, maybe that\'s how they really see you.');
    scene.text('He quickly adds his load to that of his friends, and you fade out of consciousness again with a soft groan. When you finally come to your senses you find yourself alone on the sofa, and just rest for a moment. The boys are sitting at the table in the room, drinking more beers. You should probably get going soon, before they decide they\'re ready for another round.');
    qspCall(s, 'npcStat', 'A11');
    qspCall(s, 'cum_call', 'stomach', 'A11', 1);
    qspCall(s, 'npcStat', 'A10');
    qspCall(s, 'cum_call', 'stomach', 'A10', 1);
    qspCall(s, 'npcStat', 'A9');
    qspCall(s, 'cum_call', 'stomach', 'A9', 1);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave', goto: ['pav_residential', ''] },
    ]);
  } },
          ]);
        }
        if (((s as any).hour ?? 0) < 20) {
          // TODO-QSP: iif($loc = 'gkafe', 'You see Vitek, Dan and Vasily sitting at a table, drinking some beers', 'You se...
          (s as any).temp_fame = qspFunc(s, 'cardgame_durak', 'get_mod_fame');
          if (((s as any).temp_fame ?? 0) >= 250) {
            (s as any).temp_rand = Math.floor(Math.random() * 3) + 0;
            if ((!((s as any).temp_rand ?? 0))) {
            }
            // TODO-QSP: dynamic text: Vasily grins and shouts as he sees you walk by: "Look guys, it's our favourite s...
            scene.text(`Vasily grins and shouts as he sees you walk by: "Look guys, it's our favourite slut! ${((s as any).shultextrand ?? 0)}" His friends laugh loudly at your expense.`);
            if (((s as any).loc ?? 0) === 'gkafe') {
              scene.actions([
                { label: 'Blush and quickly leave the cafe', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
              ]);
            } else {
              if (((s as any).BjBeerQW ?? 0) >= 5) {
                scene.actions([
                  { label: 'Approach the guys', goto: ['zsoft_gopskverGorSlut', '1'] },
                ]);
              } else {
                scene.actions([
                  { label: 'Ask for a beer', handler: (st: GameState) => {
    if (((s as any).BjBeerDay ?? 0) === ((s as any).daystart ?? 0)) {
      scene.img('images/characters/shared/headshots_main/big11.jpg');
      scene.text('Vasily smirks and slaps your hand away: "Go beg somewhere else, whore. You\'ve had enough for today, the open bar is closed for sluts like you. Come back tomorrow."');
      scene.actions([
        { label: 'Leave them and walk away', goto: ['pav_park', 'deeper_park'] },
      ]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['gopskver', 'BjBeerStart'] }]);
    }
  } },
                ]);
              }
              scene.actions([
                { label: 'Blush and quickly leave the train station', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
                { label: 'Blush and keep walking', goto: ['pav_park', 'deeper_park'] },
              ]);
            }
          } else {
            if (((s as any).alko ?? 0) < 6) {
              // TODO-QSP: iif($loc = 'gkafe', 'The boys ordered some extra beers ', 'The boys have some extra beers with them,...
              scene.actions([
                { label: 'Decline the beer and leave', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
                { label: 'Drink beer with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'npc_relationship', 'modify', 'A9', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A10', 1);
    qspCall(s, 'npc_relationship', 'modify', 'A11', 1);
    qspCall(s, 'drugs', 'alcohol', 'beer');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/beer3.jpg');
    // TODO-QSP: dynamic text: The guys cheer and pour out a beer for you. Vasily gives you ' + iif($loc = 'gka...
    scene.text('The guys cheer and pour out a beer for you. Vasily gives you \' + iif($loc = \'gkafe\', \'a glass\', \'the cup\') + \' while the others propose a toast, already having beers in their hands. You happily join them in their toast, and spend the next 15 minutes chatting with them and having sips of your cold beer.');
    if (((s as any).hour ?? 0) === 20) {
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
          { label: 'Go with the boys', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
  }, goto: ['vasilyhome', 'hallway'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
              ]);
            } else {
              scene.text('You\'re already not exactly sober any more, and feel a bit looser while you chat with the guys.');
              if (((s as any).temp_fame ?? 0) < 100) {
                scene.actions([
                  { label: 'Drink beer with the guys', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big11.jpg');
    scene.text('Vasily puts his hand on your shoulder and tells you that his friends aren\'t the kind of guys a nice girl should be getting drunk with and sends you on your way.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'loc_arg');
  } },
    ]);
  } },
                ]);
              } else {
                if (((s as any).loc ?? 0) === 'gkafe') {
                  scene.text('Vasily suggests to the guys to leave the cafe and continue drinking in the park. You are too drunk to resist so you just follow them to the park');
                } else {
                  scene.text('Vasily suggests to the guys to leave the train station and continue drinking in the park. You are too drunk to resist so you just follow them to the park');
                }
                // TODO-QSP: dynamic text: At one point, Vasily sits down next to you and says: "Hey <<$pcs_nickname>>… I'v...
                scene.text(`At one point, Vasily sits down next to you and says: "Hey ${((s as any).pcs_nickname ?? 0)}… I've heard from someone that you're a huge tease, is that true?"`);
                if (((s as any).loc ?? 0) === 'gkafe') {
                  scene.text('Vasily suggests to the guys to leave the cafe and continue drinking in the park. You are too drunk to resist so you just follow them to the park');
                }
                // TODO-QSP: dynamic text: At one point, Vasily sits down next to you and says: "Hey <<$pcs_nickname>>… I'v...
                scene.text(`At one point, Vasily sits down next to you and says: "Hey ${((s as any).pcs_nickname ?? 0)}… I've heard from someone that you like sucking dicks… is that true?"`);
                scene.actions([
                  { label: '"Yes that\'s true"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You smile and nod at him: "I like getting guys all worked up with my body, that\'s true. Why?"');
    scene.text('Vasily stutters for a moment, and then manages to say: "Oh n- no reason, I was just curious is all."');
    scene.actions([
      { label: 'Thank them for the beer and leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
                  { label: '"What? No!"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You raise your voice a little and act surprised: "What? No way! Whoever told you that was lying!"');
    // TODO-QSP: dynamic text: However, Dan doesn't fall for your act, and matter-of-factly says: "<<$pcs_nickn...
    scene.text(`However, Dan doesn't fall for your act, and matter-of-factly says: "${((s as any).pcs_nickname ?? 0)}, you're a slut. We've all seen you, the whole town knows it. Why are you even trying to deny it? You're such a terrible liar…"`);
    scene.actions([
      { label: 'Leave', goto: ['pav_park', 'deeper_park'] },
    ]);
  } },
                  { label: '"Yes, that\'s true"', handler: (st: GameState) => {
    scene.text('You have a slight blush on your face when you confess: yes, you do like giving blowjobs. Vasily has a cheeky smile when he continues: "And is it true that you let them finish inside your mouth?"');
    scene.actions([
      { label: '"Yes, that\'s true too"', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You blush again but confirm: "Yes, I let them cum inside my mouth."');
    scene.text('Vasily is excited now, squirming in his seat: "So… how about you put that pretty mouth of yours to work on us?"');
    scene.actions([
      { label: '"No way!"', handler: (st: GameState) => {
    scene.text('You indignantly reject Vasily\'s proposal: "No way, Shulga! I can\'t just do that for everyone who asks!"');
    scene.text('Dan suddenly growls at you: "Shut up, whore. I\'ve seen you suck cocks of just about anyone you meet, and swallow their loads to the last drop! They make videos when you\'re not paying attention… and now suddenly we\'re not good enough for you?"');
    scene.text('You\'re a bit afraid of his sudden outburst and try to explain yourself: "Dan please, you have to understand! I don\'t just su-"');
    scene.text('He interrupts you: "Shut up! We won\'t ask again… are you going to be a nice little slut and do as we ask, or are you going to keep pretending to be some stuck up bitch?"');
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Keep refusing [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep refusing', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).fingal = ((s as any).fingal ?? 0) + (1);
    (s as any).body_write = 1;
    qspCall(s, 'mood', 'lower', 'tiny');
    qspCall(s, 'stat', '');
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
    qspCall(s, 'gopskver', 'triple_blow');
  } },
    ]);
  } },
      { label: '"Well, maybe… just don\'t tell anyone!"', handler: (st: GameState) => {
    scene.text('Dan grins at you while he reaches for his pants: "Your secret is safe with us, baby. Now get down on your knees and take my cock in your mouth!"');
    qspCall(s, 'gopskver', 'triple_blow');
  } },
    ]);
  } },
      { label: '"No, that\'s a lie!"', handler: (st: GameState) => {
    scene.text('You spit on the ground, and pretend to be insulted: "No way, Vasily! That\'s disgusting!"');
    if (((s as any).trait_vars ?? 0)?.['cumeater'] > 0) {
      // TODO-QSP: dynamic text: Dan suddenly snaps, and shouts at you: "<<$pcs_nickname>>, don't bullshit us! Th...
      scene.text(`Dan suddenly snaps, and shouts at you: "${((s as any).pcs_nickname ?? 0)}, don't bullshit us! The whole town knows you're a huge cum guzzler, who loves little more than to take a big load into her mouth and swallow it all down! Stop lying!"`);
    } else {
      scene.text('Dan suddenly chuckles: "But you love taking loads all over your face, right? I\'ve seen several pictures of you, with your face and mouth all covered in cum."');
      // TODO-QSP: dynamic text: Dan chuckles: "Maybe you can't get a guy off with your mouth yet? Don't worry <<...
      scene.text(`Dan chuckles: "Maybe you can't get a guy off with your mouth yet? Don't worry ${((s as any).pcs_nickname ?? 0)}, we will help you with your technique…"`);
    }
    // TODO-QSP: dynamic text: Dan reaches for his pants and exposes his hard cock: "Enough talk! I think it's ...
    scene.text(`Dan reaches for his pants and exposes his hard cock: "Enough talk! I think it's time ${((s as any).pcs_nickname ?? 0)} shows us what a good little slut she is. Take it in your mouth!"`);
    qspCall(s, 'gopskver', 'triple_blow');
  } },
    ]);
  } },
                  { label: '"No, that\'s a lie!"', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You pretend to be insulted at the mere notion, but Dan gets angry: "<<$pcs_nickn...
    scene.text(`You pretend to be insulted at the mere notion, but Dan gets angry: "${((s as any).pcs_nickname ?? 0)}, you're a slut! I know it, you know it, the whole fucking town knows it! Don't be a stuck up bitch and start sucking!"`);
    qspCall(s, 'gopskver', 'triple_blow');
  } },
                ]);
              }
            }
          }
        }
        scene.actions([
          { label: 'Go with Dan', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You\'re walking down the street, feeling a bit wobbly from the alcohol while Dan supports your weight. He tells you funny stories and anecdotes along the way, and before you know it you\'re at your apartment building. When you open the door and enter the building, Dan suddenly pulls you to the side. He\'s quite rough about it, and shoves you into a dark corner of the stairwell. He takes your hand by the chin and whispers in your ear: "Your turn to make me feel good, slut. Otherwise I\'m telling everyone."');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.text('You push him away from you and say indignantly: "No way, Dan! Leave me alone!"');
    scene.text('Dan\'s eyes look murderous, but he doesn\'t touch you. After a few seconds he bounces back, and he grins as he says: "Suit yourself, whore… your reputation in town will be ruined", and then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pav_complex', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', handler: (st: GameState) => {
    // TODO-QSP: xgt 'gopskver', 'dan_blowjob'
  } },
    ]);
  } },
        ]);
      }
    }
  }
  scene.build();
}

export const gopskver: LocationDef = {
  name: 'gopskver',
  title: 'Vitek Kotov sees you entering the cafe and tells you to come',
  region: 'other',
  locationType: 'event_indoors',
  description: ['Vitek Kotov sees you entering the cafe and tells you to come over. When you approach him, he explains he\'s drinking some beer with his friends, and asks you to join them.'],
  enter: enter,
};
