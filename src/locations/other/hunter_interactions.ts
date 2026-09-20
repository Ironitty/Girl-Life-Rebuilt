import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterSmokeWithHunters(s: GameState, scene: SceneBuilder): void {
  (s as any).temp_sh = (Math.floor(Math.random() * 4) + 1);
  if (((s as any).temp_sh ?? 0) === 1) {
    scene.img('images/locations/gadukino/hunters/hantersmoker1.jpg');
    scene.text('The men ask you if you want to go out for a smoke.');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'drugs', 'smoke', 1);
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).temp_sh ?? 0) === 2) {
      scene.img('images/characters/shared/headshots_main/big172.jpg');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Agree', handler: (st: GameState) => {
    if (((st as any).hunterVars ?? 0)?.['AndreiQw'] < 15  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0  ||  ((st as any).hunterVars ?? 0)?.['AndreiLove'] === 1) {
      (st as any).minut = ((st as any).minut ?? 0) + 15;
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
      qspCall(st, 'drugs', 'smoke', 1);
      scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
      scene.text('The two of you walk outside, Andrei hands you a cigarette. You start talking about your feelings for each other.');
      scene.actions([
        { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
      ]);
    } else {
      if (((st as any).hunterVars ?? 0)?.['AndreiQw'] >= 15  &&  ((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
        if ((!((st as any).smokbj ?? 0))) {
          scene.img('images/characters/shared/headshots_main/big172.jpg');
          scene.text('You follow Andrei outside. He gives you a cigarette, and the two of you continue on with your conversation. Suddenly Andrei, looking in your eyes, says:');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, could you help me out?"
          scene.text(`"${((st as any).pcs_nickname ?? '')}, could you help me out?"`);
          scene.text('"Of course, Andrei, I\'ll be glad to." you replied. "What do you need help with?" you asked a bit worried.');
          // TODO-QSP: dynamic text: "As you know <<$pcs_nickname>>, I have long been divorced for a long time," Andr...
          scene.text(`"As you know ${((st as any).pcs_nickname ?? '')}, I have long been divorced for a long time," Andrei began. "But as every normal man, I need to relieve stress sometimes, well, you know what I mean…"`);
          scene.text('You look at his frankness with astonishment.');
          // TODO-QSP: dynamic text: "Now <<$pcs_nickname>>, if you could help me out now and then, I would be very g...
          scene.text(`"Now ${((st as any).pcs_nickname ?? '')}, if you could help me out now and then, I would be very graIn the sput of the moment, while the men cheer you on, you remove your topteful," Andrei continued.`);
          scene.text('You watch in disbelief, he\'s clearly not joking around. You can see on Andrei\'s facial expression that he\'s being dead serious.');
          // TODO-QSP: dynamic text: "I won''t tell anybody about this, don''t worry, no one will know." he adds quic...
          scene.text(`"I won't tell anybody about this, don't worry, no one will know." he adds quickly. "Well, ${((st as any).pcs_nickname ?? '')}, what do you say?`);
          (st as any).minut = ((st as any).minut ?? 0) + 15;
          ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cigarettes'] = ((st as any).mc_inventory['cigarettes'] ?? 0) + (1);
          qspCall(st, 'drugs', 'smoke');
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
          qspCall(st, 'stat', '');
          if (((st as any).alko ?? 0) < 6) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/thinks' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('After you hear him out, you start seriously considering his offer. It would be nice to help out a friend is nice, but you sense that there\'s an ulterior motive.');
    scene.text('"No Andrei, I\'m sorry but I refuse." you answer. "How could you even think that I would be accepting your offer?');
    scene.text('You got up from the bench and quickly went back to the hut.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/thinks' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('After you hear him out, you start seriously considering his offer. It would be nice to help out a friend is nice, but you sense that there\'s an ulterior motive.');
    scene.text('"Well Andrei, after carefully thinking about it, I\'ll help you out. How do you want me to help you out?" you ask.');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, I knew you would," he replied. "Well, I wouldn''t mind...
    scene.text(`"Damn, ${((st as any).pcs_nickname ?? '')}, I knew you would," he replied. "Well, I wouldn't mind a blowjob now and then, that's good enough for me."`);
    scene.text('"Go back to the hut, and crawl under the table so no one notices." he adds while getting up from the bench.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (2);
    (st as any).smokbj = 1;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
    ]);
  } },
          ]);
        } else {
          scene.img('images/characters/shared/headshots_main/big172.jpg');
          scene.text('You went outside for a smoke, with Andrei following after you, immediately saying:');
          // TODO-QSP: dynamic text: "Forget the cigarette <<$pcs_nickname>>, go back inside and crawl under the tabl...
          scene.text(`"Forget the cigarette ${((st as any).pcs_nickname ?? '')}, go back inside and crawl under the table, I need you so bad right now…`);
          (st as any).minut = ((st as any).minut ?? 0) + 10;
          (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) + (1);
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) + (1);
          qspCall(st, 'stat', '');
          if (((st as any).alko ?? 0) < 6) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/thinks' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('"You know what Andrei, I\'ve changed my mind. I\'m more than happy to help a friend in need, but I\'m not some whore that only exists for your pleasure."');
    scene.text('You got up from the bench and quickly went back to the hut.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['slut'] = ((st as any).hunterVars['slut'] ?? 0) - (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['AndreiQw'] = ((st as any).hunterVars['AndreiQw'] ?? 0) - (50);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
          ]);
        }
      } else {
        scene.img('images/characters/shared/headshots_main/big172.jpg');
        scene.text('You went outside for a smoke, with Andrei following after you, immediately saying:');
        // TODO-QSP: dynamic text: "To hell with the cigarette <<$pcs_nickname>>, I need to relieve some stress."
        scene.text(`"To hell with the cigarette ${((st as any).pcs_nickname ?? '')}, I need to relieve some stress."`);
        (st as any).minut = ((st as any).minut ?? 0) + 10;
        (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (5);
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Go', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'huntersmokBJ');
  } },
        ]);
      }
    }
  } },
      ]);
    } else {
      if (((s as any).temp_sh ?? 0) === 3) {
        scene.img('images/characters/shared/headshots_main/big174.jpg');
        scene.text('Sergei offers you a cigarette.');
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cigarettes'] = ((st as any).mc_inventory['cigarettes'] ?? 0) + (1);
    qspCall(st, 'drugs', 'smoke');
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['SergeiQw'] = ((st as any).hunterVars['SergeiQw'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
        ]);
      } else {
        if (((s as any).temp_sh ?? 0) === 4) {
          scene.img('images/characters/shared/headshots_main/big173.jpg');
          qspCall(s, 'stat', '');
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hantersmoker2.jpg');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['cigarettes'] = ((st as any).mc_inventory['cigarettes'] ?? 0) + (1);
    qspCall(st, 'drugs', 'smoke');
    if (((st as any).hunterVars ?? 0)?.['KnowSlut'] === 0) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['IgorQW'] = ((st as any).hunterVars['IgorQW'] ?? 0) + (1);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
  ]);
  scene.build();
}

function enterChatWithHunters(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] > 40  &&  ((s as any).alko ?? 0) > 4  &&  ((s as any).clothingworntype ?? 0) !== 'nude'  &&  (Math.floor(Math.random() * 5) + 1) === 1) {
    qspGoto(s, 'hunter_interactions', 'chat_with_hunters_theme', 'entertainment');
  } else {
    if (((s as any).boy_talk ?? 0) === 0  &&  ((s as any).hunterVars ?? 0)?.['drink'] === 1  &&  (Math.floor(Math.random() * 10) + 1) === 1) {
      qspGoto(s, 'hunter_interactions', 'chat_with_hunters_theme', 'boy_talk');
    } else {
      if (((s as any).boy_talk ?? 0) === 1  &&  ((s as any).virginity_talk ?? 0) === 0  &&  ((s as any).hunterVars ?? 0)?.['drink'] === 1  &&  (Math.floor(Math.random() * 10) + 1) === 1) {
        qspGoto(s, 'hunter_interactions', 'chat_with_hunters_theme', 'virginity_talk');
      } else {
        if (((s as any).PCloSkirt ?? 0) > 0  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  (Math.floor(Math.random() * 9) + 1) === 1) {
          qspGoto(s, 'hunter_interactions', 'chat_with_hunters_theme', 'pantiless_flash');
        } else {
          if (((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).pantyworntype ?? 0) === 'none'  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
            qspGoto(s, 'hunter_interactions', 'chat_with_hunters_theme', 'nude');
          } else {
            qspGoto(s, 'hunter_interactions', 'chat_with_hunters_theme', 'generic');
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterChatWithHuntersTheme(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (0);
  qspCall(s, 'mood', 'raise', (Math.floor(Math.random() * 11) + 10));
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (2);
  qspCall(s, 'stat', '');
  if (Number((s as any).locArgs?.[1] ?? 0) === 'generic') {
    scene.img('images/locations/gadukino/hunters/hanters1.jpg');
    scene.text('You enthusiastically listen to the their hunting stories and even share some of your stories.');
    qspCall(s, 'hunter_ambient', 'generic_convo');
    scene.text('You get so caught up in the conversation, you don\'t even notice how fast the time flies by.');
  } else {
    if (Number((s as any).locArgs?.[1] ?? 0) === 'pantiless_flash') {
      scene.img('images/locations/gadukino/hunters/hantersnotanga1.jpg');
      scene.text('You are sitting in front of the men, not wearing any panties, so the stories you tell are mostly ignored by the men throwing not-so-subtle glances at your exposed pussy.');
      if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] > 30) {
        ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (1);
        ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (3);
      } else {
        ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (2);
        ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (5);
      }
      qspCall(s, 'arousal', 'flashlite', (-5));
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    } else {
      if (Number((s as any).locArgs?.[1] ?? 0) === 'boy_talk') {
        scene.img('images/locations/gadukino/hunters/fireside_drink.jpg');
        // TODO-QSP: dynamic text: "So, <<$pcs_nickname>>, anyone special in your life?" Igor asks, slurring notice...
        scene.text(`"So, ${((s as any).pcs_nickname ?? '')}, anyone special in your life?" Igor asks, slurring noticeably`);
        (s as any).boy_talk = 1;
        qspCall(s, 'stat', '');
        scene.actions([
          { label: 'Yes, actually', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (3);
    scene.text('"Yeah I have been seeing someone for a while", you answer');
    if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] < 35  &&  ((st as any).hunterVars ?? 0)?.['collective_opinion'] > 40) {
      scene.text('"Now that\'s a lucky guy heh." says Andrei. "Let us know if he dares upset you though, we will show him"');
    } else {
      if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] > 50  &&  ((st as any).clothingworntype ?? 0) !== 'nude') {
        scene.text('"Bet he is not as fun as us" says Andrei. "Also bet he is not as fun to suck off as us" he says, his eyes stripping you already.');
        qspCall(st, 'willpower', 'resist', 'bj', ((((st as any).hunterVars ?? 0)?.['collective_opinion'] > 40) ? ('easy') : ('hard')));
        if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Maybe another time boys', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Maybe another time boys', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    qspGoto(st, 'gad_swamp_yard', 'campfire');
  } },
          ]);
        }
        qspCall(st, 'stat', '');
        scene.actions([
          { label: 'Approach the hunters to find out', goto: ['hunter_favors', 'nighttime_entertainment'] },
        ]);
      }
    }
    scene.actions([
      { label: 'Finish chatting', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
          { label: 'No, not really', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (1);
    scene.text('"No, I do not really have someone. At least no one special.", you answer');
    if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] < 25  ||  ((st as any).hunterVars ?? 0)?.['collective_opinion'] > 40) {
      scene.text('"How come?" says Igor. "Those… uh… boys in your class musssss… be stupid" drunkenly slurs Igor');
    } else {
      scene.text('"Well guess it is better that way. You do not have someone to think about while we are having some fun" says Andrei');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish chatting', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
        ]);
      } else {
        if (Number((s as any).locArgs?.[1] ?? 0) === 'virginity_talk') {
          scene.img('images/locations/gadukino/hunters/fireside_drink.jpg');
          // TODO-QSP: dynamic text: "So, <<$pcs_nickname>>, have you ever done it with a boy" Andrei asks, grinning ...
          scene.text(`"So, ${((s as any).pcs_nickname ?? '')}, have you ever done it with a boy" Andrei asks, grinning mischievously.`);
          (s as any).virginity_talk = 1;
          scene.actions([
            { label: '…no', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (1);
    scene.text('"Huh… what? No I have not!" you answer, blushing to your ears');
    if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] < 35  &&  ((st as any).hunterVars ?? 0)?.['collective_opinion'] > 40) {
      scene.text('"Stop embarrassing the little lady" says Sergey. "She is our guest, we have to be polite"');
      scene.actions([
        { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    } else {
      scene.text('"Wow so you really are a full on tease." says Igor');
      scene.text('"Since you are such an innocent young lady why don\'t you give us a little show without clothes blocking your innocence');
      scene.actions([
        { label: 'Maybe another time boys, not feeling it now', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
  } },
            { label: 'Uhh… kinda…', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (5);
    scene.text('You blurt out a small "yeah!" before going all red in the face. Why are you even telling these men that you have had sex? You look down embarrassed.');
    if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] < 35  ||  ((st as any).hunterVars ?? 0)?.['collective_opinion'] > 40) {
      scene.text('"Well uhhh… it is normal at your age. You are not a little kid anymore" says Sergey');
      scene.actions([
        { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    } else {
      scene.text('"That means you know how to have fun. Say, how about we play together a bit?" says Andrei before the hunters get up and start approaching you');
      scene.actions([
        { label: 'Maybe another time boys, not feeling it now', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
  } },
          ]);
        } else {
          if (Number((s as any).locArgs?.[1] ?? 0) === 'nude') {
            scene.img('images/locations/gadukino/sex/hunter/fireside_night/nude.jpg');
            scene.text('You stand by the fire to chat up a bit with the men. Although you feel like the men are simply nodding along with whatever you are saying, staring at your bared ass and tits, devouring your exposed body with their eyes instead.');
            if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] > 30) {
              ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (1);
              ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (5);
            } else {
              ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (3);
              ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (7);
            }
            qspCall(s, 'arousal', 'flash', (-15));
            qspCall(s, 'arousal', 'end');
            scene.actions([
              { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
            ]);
          } else {
            if (Number((s as any).locArgs?.[1] ?? 0) === 'entertainment') {
              scene.img('images/locations/gadukino/hunters/hanters1.jpg');
              // TODO-QSP: dynamic text: "Hey, <<$pcs_nickname>>, can you do us a favor?" says Andrei, seeing you approac...
              scene.text(`"Hey, ${((s as any).pcs_nickname ?? '')}, can you do us a favor?" says Andrei, seeing you approach them. "We are in desperate need of some entertainment. Say, why don't you help us with that?"`);
              scene.text('"And I mean that as in sucking us all off of course." He adds.');
              if (((s as any).alko ?? 0) < 7) {
                scene.actions([
                  { label: 'Refuse the perverts. You are not their personal fucktoy', handler: (st: GameState) => {
    scene.text('"Do I look like your private whore? Suck each other off if you are that desperate" you say, stomping off to the roar of laughter that erupts in response');
    if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 20) {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (5);
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (10);
    } else {
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (3);
      ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (5);
    }
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Kneel down to oblige the boys', goto: ['hunter_favors', 'nighttime_entertainment'] },
              ]);
            } else {
              scene.actions([
                { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
              ]);
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish chatting', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterJoinDrinking(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/hunters/fireside_drink.jpg');
  scene.text('You approach the hunters and ask if you can join them drinking.');
  if (((s as any).hunterVars ?? 0)?.['collective_opinion'] > 40) {
    if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] > 40) {
      // TODO-QSP: dynamic text: "Sure, <<$pcs_nickname>>, help yourself for as much as you want. Drink irrespons...
      scene.text(`"Sure, ${((s as any).pcs_nickname ?? '')}, help yourself for as much as you want. Drink irresponsibly." says Andrei with a wolfish grin.`);
      scene.actions([
        { label: 'Further', handler: (st: GameState) => {
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
      ]);
    } else {
      if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] > 20) {
        if (((s as any).alko ?? 0) < 3) {
          qspGoto(s, 'hunter_interactions', 'drink_with_hunters');
        } else {
          // TODO-QSP: dynamic text: "I don''t know, <<$pcs_nickname>>." says Andrei. "What if you turn out to be a m...
          scene.text(`"I don't know, ${((s as any).pcs_nickname ?? '')}." says Andrei. "What if you turn out to be a mean drunk? You should perform a dare for us to prove we can safely have you wasted."`);
          if (((s as any).alko ?? 0) < 5) {
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'innocent'
  } },
            ]);
          } else {
            if (((s as any).alko ?? 0) < 6) {
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'strip'
  } },
              ]);
            } else {
              if (((s as any).alko ?? 0) < 7) {
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'softcore'
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'hardcore'
  } },
                ]);
              }
            }
          }
        }
      } else {
        if (((s as any).alko ?? 0) < 3) {
          qspGoto(s, 'hunter_interactions', 'drink_with_hunters');
        } else {
          // TODO-QSP: dynamic text: "No <<$pcs_nickname>>, go away" says Sergei. "It is not good for you to get blac...
          scene.text(`"No ${((s as any).pcs_nickname ?? '')}, go away" says Sergei. "It is not good for you to get blackout drunk so young. You have had enough for now"`);
          scene.actions([
            { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
          ]);
        }
      }
    }
  } else {
    if (((s as any).hunterVars ?? 0)?.['sexual_comfort'] > 30) {
      if (((s as any).hunterVars ?? 0)?.['collective_opinion'] > 20) {
        // TODO-QSP: dynamic text: "You see, <<$pcs_nickname>>" says Andrei. "We had to work hard to make the money...
        scene.text(`"You see, ${((s as any).pcs_nickname ?? '')}" says Andrei. "We had to work hard to make the money for this booze here. You should work for it just like us. Say, how about you provide some entertainment for us?"`);
        if (((s as any).alko ?? 0) < 1) {
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'innocent'
  } },
          ]);
        } else {
          if (((s as any).alko ?? 0) < 3) {
            scene.actions([
              { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'strip'
  } },
            ]);
          } else {
            if (((s as any).alko ?? 0) < 5) {
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'softcore'
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'hardcore'
  } },
              ]);
            }
          }
        }
      } else {
        scene.text('"What does this look like to you, free booze charity?" says Sergei. "You gotta pay up or put out and we are not interested in your money"');
        if (((s as any).alko ?? 0) < 4) {
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'softcore'
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Further', handler: (st: GameState) => {
    // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'hardcore'
  } },
          ]);
        }
      }
    } else {
      qspCall(s, 'willpower', 'voyeur', 'exhib');
      // TODO-QSP: dynamic text: "Go away <<$pcs_nickname>>" says Igor. "We do not want you to join us, got bette...
      scene.text(`"Go away ${((s as any).pcs_nickname ?? '')}" says Igor. "We do not want you to join us, got better things to do than babysit a drunk teen"`);
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Ask again and flash your tits', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Ask again and flash your tits', goto: ['hunter_interactions', 'booze_dare', 'flash_tits'] },
        ]);
      }
      scene.actions([
        { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDrinkWithHunters(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/fireside_drink.jpg');
  // TODO-QSP: dynamic text: Holding up two bottles, Igor approaches you "Take your pick <<$pcs_nickname>>: v...
  scene.text(`Holding up two bottles, Igor approaches you "Take your pick ${((s as any).pcs_nickname ?? '')}: vodka, or beer?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink vodka', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'vodka', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/vodka1.jpg');
    scene.text('You take a shot of vodka. The men laugh at the funny face you\'re making after the shot.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
    { label: 'Drink beer', handler: (st: GameState) => {
    qspCall(st, 'drugs', 'alcohol', 'beer', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/kuh/beer2.jpg');
    scene.text('You take a bottle of beer, open it and start drinking.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoozeDare(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === ''  ||  Number((s as any).locArgs?.[1] ?? 0) === 'pick') {
    if (Number((s as any).locArgs?.[2] ?? 0) === 'innocent') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'willpower', 'voyeur', 'exhib');
      qspCall(s, 'stat', '');
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (2);
        scene.text('After thinking for a moment, Andrei asks "How about you dance by the fire a bit?"');
        scene.text('"Just express how free you are unrestricted by civilization or some other artsy fartsy crap. We will even clap you a tempo!" says Andrei"');
        scene.actions([
          { label: 'Dance naked by the bonfire', goto: ['hunter_interactions', 'booze_dare', 'nude_dance'] },
        ]);
      } else {
        scene.text('"How about you show us your panties" says Andrei. "Wondering what color your underwear is, just scientific curiosity that\'s all"');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Show him your panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Show him your panties', goto: ['hunter_interactions', 'booze_dare', 'flash_thong'] },
            ]);
          }
        } else {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Show them your unclad ass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              { label: 'Let them see your pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
            scene.text('You tell Andrei that you are not wearing any panties with a blush. "I do not believe you" he says with a smirk. "We need empirical proof. Solid evidence or nothing."');
            scene.actions([
              { label: 'Show them your unclad ass', goto: ['hunter_interactions', 'booze_dare', 'flash_ass'] },
              { label: 'Let them see your pussy', goto: ['hunter_interactions', 'booze_dare', 'flash_pussy'] },
            ]);
          }
        }
      }
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'strip') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'willpower', 'voyeur', 'exhib');
      qspCall(s, 'stat', '');
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        scene.text('"I can barely understand you over all those clothes" says Andrei. Noticing your confused stare, Sergei says "He means we want you to take your clothes off"');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Strip off your clothes', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Strip off your clothes', goto: ['hunter_interactions', 'booze_dare', 'strip_outfit'] },
          ]);
        }
      } else {
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Take off your panties', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
            scene.text('"Your dare is to get rid of those panties" says Sergei plainly.');
            scene.actions([
              { label: 'Take off your panties', goto: ['hunter_interactions', 'booze_dare', 'strip_panties'] },
            ]);
          }
        } else {
          ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (2);
          scene.text('"Did you ever think about becoming a model?" asks Igor.');
          scene.text('Before you answer he adds "Let\'s do an erotic nude pose. Why don\'t you go lay prostrate there with your butt towards us? Maybe emphasize your butt a bit? I think it will look really sexy"');
          scene.actions([
            { label: 'Dare to be an erotic model', goto: ['hunter_interactions', 'booze_dare', 'present_pussy'] },
          ]);
        }
      }
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'softcore') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'willpower', 'voyeur', 'humiliation');
      qspCall(s, 'stat', '');
      if (((s as any).clothingworntype ?? 0) !== 'nude'  ||  ((s as any).pantyworntype ?? 0) !== 'none') {
        // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'strip'
      } else {
        ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (2);
        if (((s as any).alko ?? 0) < 4) {
          scene.text('"I want to see you play with your titties" says Sergei');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Oblige him', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Oblige him', goto: ['hunter_interactions', 'booze_dare', 'present_tits'] },
            ]);
          }
        } else {
          // TODO-QSP: dynamic text: "So, <<$pcs_nickname>>, I am scientifically curious again. Can you show us how y...
          scene.text(`"So, ${((s as any).pcs_nickname ?? '')}, I am scientifically curious again. Can you show us how you jill off? Just a little demonstration, and you get your booze."`);
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Give them a teaser', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Give them a teaser', goto: ['hunter_interactions', 'booze_dare', 'masturbate_1'] },
            ]);
          }
        }
      }
    }
    if (Number((s as any).locArgs?.[2] ?? 0) === 'hardcore') {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      if (((s as any).clothingworntype ?? 0) !== 'nude') {
        qspCall(s, 'willpower', 'bj', 'exhib');
        scene.text('"I want you to suck my dick if you want some booze" says Sergei. "You get two free drinks eh?" quips Andrei behind him');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'Kneel down in front of Sergei', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Kneel down in front of Sergei', goto: ['hunter_interactions', 'booze_dare', 'blow_clothed'] },
          ]);
        }
      } else {
        qspCall(s, 'willpower', 'sex', 'exhib');
        if (((s as any).pantyworntype ?? 0) !== 'none') {
          ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (1);
          // TODO-QSP: gt 'hunter_interactions', 'booze_dare', 'pick', 'strip'
        } else {
          if (((s as any).hunterVars ?? 0)?.['collective_opinion'] > 40) {
            ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (3);
            // TODO-QSP: dynamic text: "I want to fuck you" says Igor heatedly. "I want to taste you, I want to be insi...
            scene.text(`"I want to fuck you" says Igor heatedly. "I want to taste you, I want to be inside you. You are driving me crazy, ${((s as any).pcs_nickname ?? '')}"`);
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Lay down on the blanket', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Lay down on the blanket', goto: ['hunter_interactions', 'booze_dare', 'blanket_fuck'] },
              ]);
            }
          } else {
            ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (2);
            scene.text('"Seeing you prance around naked is getting me real hot and bothered" says Andrei. "I need you to relieve me, I want to fuck that little pussy of yours"');
            scene.actions([
              { label: 'Approach Andrei on his chair', goto: ['hunter_interactions', 'booze_dare', 'chair_fuck'] },
            ]);
          }
        }
      }
    }
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamphouse', 'start'] },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'flash_thong') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/flash_thong.jpg');
    scene.text('You do not think it is a big deal so you slide your pants down a bit to show off your panty-clad ass.');
    scene.text('After a few seconds you cover back up much to your friends\' dismay. They had a good enough look to satisfy their "scientific curiosity".');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'flash', (-2));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (1);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'flash_ass') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/flash_ass.jpg');
    scene.text('You pull up your bottom to expose your uncovered ass. Noticing Andrei trying to move closer probably to cope a feel, you cover back up.');
    // TODO-QSP: dynamic text: "You have a cute butt, <<$pcs_nickname>>" comments Igor. You blush slightly at h...
    scene.text(`"You have a cute butt, ${((s as any).pcs_nickname ?? '')}" comments Igor. You blush slightly at his remark.`);
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'flash', (-5));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (2);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (1);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'flash_tits') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/flash_tits_2.jpg');
    scene.text('You pull down your top to expose your tits to the hunters. You can feel your nipples slightly harden from the breeze.');
    scene.text('After letting the hunters stare at your tits for a minute, you pull your top back up.');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'flash', (-5));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Ask for a drink again', handler: (st: GameState) => {
    scene.text('"That\'s a nice pair you got there" says Andrei. "Ask us nicely like that enough times and we might work something out"');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (2);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'flash_pussy') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/pantiless_upskirt.jpg');
    scene.text('You pull up your skirt to show the hunters what is under. Since you were not wearing panties that means they get a direct view of your exposed pussy');
    scene.text('You feel yourself getting a little wet feeling the breeze on your exposed pussy, bared for the hunters\' viewing pleasure');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'flash', (-8));
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (1);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'nude_dance') {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'arousal', 'flash', (-12), 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/fire_dance.jpg');
    scene.text('You dance by the fireside, putting on a show for the hunters. It feels much easier to contort your body without any clothes getting in the way.');
    scene.text('You bend your body this way and that to emphasize your assets: shaking your hips, thrusting out your tits and pussy, bending down to show off your holes…');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'strip_outfit') {
    qspCall(s, 'clothing', 'strip', 'gad_swamphouse');
    (s as any).clothesAtLocation = 1;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'flash', (-12), 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/strip_clothes.jpg');
    scene.text('You start taking off your clothes at the hunters\' request. "Yes" says Andrei, "Take it all off."');
    if (((s as any).pantyworntype ?? 0) === 'none') {
      scene.text('You are now completely naked in front of the hunters');
    } else {
      scene.text('You are stripped down to your panties, everything else bared.');
      scene.actions([
        { label: 'Take off your panties too', goto: ['hunter_interactions', 'booze_dare', 'strip_panties'] },
      ]);
    }
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'strip_panties') {
    qspCall(s, 'underwear', 'remove');
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'arousal', 'flash', (-13), 'exhibitionism');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/strip_panties.jpg');
    scene.text('You walk over next to the creek, Embarrassed by the idea of taking off the last piece of fabric covering your body right under the gaze of the hunters.');
    scene.text('With your back facing the water, you bend down and slide down your panties, smiling nervously at the hunters.');
    scene.text('Now without a stitch to cover you, you can feel the nighttime breeze caressing your privates like a hand exploring your body.');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (2);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'present_pussy') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'flash', (-15), 'exhibitionism', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/exhibition_pussy_2.jpg');
    scene.text('You get down on your hands and knees and lower your chest to the ground while thrusting up your ass. You hold the pose for a good couple of minutes, showing off your now inflamed pussy lips.');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'pussy_spread') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'flash', (-17), 'exhibitionism', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/pussy_spread.jpg');
    scene.text('Before you even start thinking, your hands start gliding through your now moist folds, spreading them apart to show off the pinkness inside.');
    scene.text('You realize the hunters can tell exactly how turned on you are getting by this, the gleaming pinkness inside completely bared for them,');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'present_tits') {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'arousal', 'foreplay', (-13), 'exhibitionism', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/exhibition_tits_2.jpg');
    scene.text('You lightly grab one of your tits, gently massaging it. Twirling around and prodding with your finger, you slowly make your way to your nipple.');
    scene.text('Then you pull and twist it until it becomes diamond-hard, starting to moan lightly at the touch. You can tell Sergei\'s very pleased with the show');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (1);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'masturbate_1') {
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'clit_finger', 2, 'masturbate', 'exhibitionism', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/masturbation_tease_1.jpg');
    scene.text('You start stroking your pussy, your fingers easily finding your aching clit. Biting your bottom lip, you start flicking your bean. It feels so good!');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'clit_finger', 3, 'masturbate', 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'foreplay', 2, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/masturbation_tease_2.jpg');
    scene.text('Getting more and more into the rhythm, you grab one of your tits with one hand and stroke your pussy with the other, getting faaster and faster.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'clit_finger', 4, 'masturbate', 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'foreplay', 2, 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/masturbation_tease_3.jpg');
    scene.text('It was just supposed to be a tease but it feels too good to stop. Bending over bit, you insert a finger and start pumping your pussy as you squeeze and knead your breast.');
    scene.text('After a few minutes you start feeling your legs cramping. You realize you will not be able to climax standing up like this, even though you felt like you were getting there.');
    scene.actions([
      { label: 'Stop playing with yourself', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/nude.jpg');
    scene.text('Deciding not to get carried away, you ask for your drink.');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (6);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  } },
      { label: 'Find a more comfortable position to continue', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    qspGoto(st, 'hunter_interactions', 'booze_dare', 'masturbate_2');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'masturbate_2') {
    qspCall(s, 'arousal', 'clit_finger', 4, 'masturbate', 'exhibitionism', 'sub');
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/masturbation_2.jpg');
    scene.text('You sit down on a blanket by the fire to get more comfortable, your hand never leaving your pussy. Looking down, you notice how inflamed your pussy looks and how it aches to be touched and filled.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'clit_finger', 5, 'masturbate', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/masturbation_3.jpg');
    scene.text('Without losing time, you keep rubbing your engorged clit, subconsciously spreading your legs wide to give the hunters a full view of how you are fingerblasting your own pussy.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/masturbation_4.jpg');
    scene.text('You have a sudden thought about how you are splayed open naked in front of three men you barely know, casually giving them a show writhing and moaning like a base tramp.');
    scene.text('That thought is the last straw that pushes you over the edge. You climax shaking and screaming without restraint, your pussy presented to your audience soaking wet and throbbing from your orgasm.');
    (st as any).orgasm_or = 'custom';
    qspCall(st, 'arousal', 'clit_finger', 4, 'masturbate', 'exhibitionism', 'sub', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (4);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'blow_clothed') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_bj_clothed_1.jpg');
    scene.text('You kneel down as Sergei unzips in front of you. Grabbing his throbbing dick with your hand, you start lightly stroking him as you start thinking about how you will fit it all in your mouth.');
    qspCall(s, 'arousal', 'hj', 2);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_bj_clothed_2.mp4');
    scene.text('Sergei comes up with a solution as he grabs your head and forcefully pushes his cock down your throat. You let out a muffled yelp before he starts rhythmically fucking your throat like a pussy. His dick is suffocating you and you are gasping for air with each pump, but something about being skullfucked like this really turns you on.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_bj_clothed_facial.jpg');
    // TODO-QSP: dynamic text: You feel Sergei''s cock throbbing more and more intensely before he suddenly pul...
    scene.text(`You feel Sergei's cock throbbing more and more intensely before he suddenly pulls out, spurting his jizz all over your face. "Nice makeup ${((st as any).pcs_nickname ?? '')}!" says Andrei, after you blink the cum out of your eyes and make eye contact with him watching the whole thing.`);
    qspCall(st, 'boyStat', 'A174');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'rough', 'deepthroat');
    qspCall(st, 'cum_call', 'face', 'A174', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (10);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (3);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'chair_fuck') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_qfuck_1.jpg');
    scene.text('Andrei quickly strips his clothes while you kneel in front of him. He is still flaccid so you grab and start stroking his shaft while licking the head, tasting his sweat and pre-cum. After a few moments, he is ready.');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'bj', 5, 'sub', 'exhibitionism');
    qspCall(s, 'arousal', 'hj', (-5));
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_qfuck_2.jpg');
    scene.text('You jump on Andrei\'s lap and lower yourself on his dick. He starts fondling you all over, grabbing your tits and tweaking your nipples, lightly spanking your ass and teasing your butthole as you bounce up and down, his friends watching your entire performance behind him silently.');
    scene.text('After a few minutes, you start feeling his dick throbbing and rubbing more vigorously against your slick walls. Before you process this, Andrei grabs you by your hips and pulls you all the way down, filling your pussy with his cum with his cock buried inside to the hilt.');
    (st as any).orgasm_or = 'custom';
    scene.text('The sensation of his warm cum spraying your insides and the quiet and hungry gazes of Sergei and Igor are enough to make you join him climaxing, your throbbing pussy milking Andrei\'s cock while you moan and writhe in Andrei\'s embrace');
    qspCall(st, 'boyStat', 'A172');
    qspCall(st, 'arousal', 'foreplay', (-5), 'sub', 'exhibitionism');
    qspCall(st, 'arousal', 'vaginal', 8, 'sub', 'exhibitionism');
    qspCall(st, 'cum_call', '', '', 'A172', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (13);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (4);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'blanket_fuck') {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_bj_nude_1.jpg');
    scene.text('You sit on your hands and knees on the blanket, watching Igor strip off his clothes. He joins you on the blanket before suddenly pulling you on top of him, burying his face in your crotch. You yelp half in shock and half in the blissful sensation of his tongue exploring your folds before taking his cock in your mouth, returning the favor.');
    (s as any).orgasm_or = 'no';
    qspCall(s, 'arousal', 'vaginal_finger', 5, 'exhibitionism');
    qspCall(s, 'arousal', 'cuni', (-5), 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_fuck_1.jpg');
    scene.text('Sensation of Igor\'s tongue flicking your clit this way and that, his finger pumping your cunt, the taste of his pre-cum… You need his cock filling you right now! Almost like he could read your mind, he turns you around and puts you down before burying his cock in your pussy in one quick motion, eliciting a loud sigh from you.');
    qspCall(st, 'arousal', 'vaginal_finger', (-3), 'exhibitionism');
    qspCall(st, 'arousal', 'cuni', (-3), 'exhibitionism');
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_fuck_2.jpg');
    scene.text('After a few minutes, he pulls you on top of him again. Your womanhood aches unbearably from the sensation of sudden emptiness for a moment before he penetrates you again, grabbing you by the waist and rhythmically sliding you up and down like a fuck toy. Both your fuckholes are in full display for Sergei and Andrei, who are intensely watching your pussy getting fucked.');
    qspCall(st, 'arousal', 'vaginal', 8, 'exhibitionism', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).orgasm_or = 'custom';
    scene.img('images/locations/gadukino/sex/hunter/fireside_night/dare_fuck_3.jpg');
    scene.text('Feeling him getting tired, you decide to take control. You turn around and lower yourself back on his dick now covered with your juices, wiggling your ass and hips rhythmically as you fuck yourself with Igor\'s dick. You start milking his cock faster and faster, moaning louder and louder as you start rubbing your clit with one hand.');
    scene.text('It does not take long before you start feeling your climax approaching. You pick up your pace even more, milking Igor\'s cock even more vigorously for your own orgasm. It hits you like a train all of a sudden, making you loudly scream in shocked bliss. Your pussy throbbing violently like a second heart sends Igor over the edge too, making him fill your cunt with his warm spunk and paint your nether lips white.');
    qspCall(st, 'boyStat', 'A173');
    qspCall(st, 'arousal', 'vaginal', 5, 'exhibitionism', 'dom');
    qspCall(st, 'arousal', 'clit_finger', (-5), 'exhibitionism', 'dom');
    qspCall(st, 'cum_call', '', '', 'A174', 1);
    qspCall(st, 'cum_call', 'labia', 'A174', 1);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Grab a drink', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (15);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (2);
    qspGoto(st, 'hunter_interactions', 'drink_with_hunters');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterDrunkenBlackout(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl.jpg');
  scene.text('You are so wasted you can barely stand. You see the blanket by the fireside and lay on it for just a short nap');
  // TODO-QSP: end
  scene.actions([
    { label: 'Pass out', handler: (st: GameState) => {
    if (((st as any).clothingworntype ?? 0) === 'nude'  &&  ((st as any).pantyworntype ?? 0) === 'none'  &&  ((st as any).hunterVars ?? 0)?.['collective_opinion'] < 30  &&  ((st as any).hunterVars ?? 0)?.['sexual_comfort'] > 30) {
      (st as any).minut = ((st as any).minut ?? 0) + 23;
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (10);
      qspCall(st, 'stat', '');
      qspGoto(st, 'hunter_interactions', 'nighttime_gangbang');
    } else {
      (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (15);
      qspCall(st, 'mood', 'lower', 'medium');
      qspCall(st, 'sleep_simple', 'forced', 176);
      scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel1.jpg');
      scene.text('Three hours later you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMeetHunters(s: GameState, scene: SceneBuilder): void {
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = (Math.floor(Math.random() * 11) + 20);
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (10 + ((s as any).pcs_apprnc ?? 0) / 4);
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['violent'] = 0;
  scene.img('images/locations/gadukino/hunters/hanterswork1.7.jpg');
  // TODO-QSP: end
  scene.actions([
    { label: 'Introduce yourself', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/hunters/hanterswork1.7.jpg');
    // TODO-QSP: dynamic text: "Hi, I''m <<$pcs_nickname>>" you introduce yourself meekly to one of the men
    scene.text(`"Hi, I'm ${((st as any).pcs_nickname ?? '')}" you introduce yourself meekly to one of the men`);
    scene.text('"I\'m Andrei," he replied, "and these are my friends, from the city, Igor and Sergei."');
    // TODO-QSP: dynamic text: "Is your lastname possibly <<$pcs_lastname>>?" You look at him surprised for a m...
    scene.text(`"Is your lastname possibly ${((st as any).pcs_lastname ?? '')}?" You look at him surprised for a moment before nodding.`);
    scene.text('"You look a lot like your mother that\'s how I knew. I am also from Gadukino."');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['were_met'] = 1;
    if (((st as any).pcs_sweat ?? 0) > 2  ||  ((st as any).dirty ?? 0) === 1) {
      scene.text('You become aware of the dirty clothes sticking on your body, making you uncomfortable.');
      scene.text('"Is there somewhere I can clean myself up?"');
      scene.text('"Well, it\'s still warm outside, so you can wash up in the creek, just follow the path behind the hut, you can\'t miss it."');
      scene.text('"There is also a basin with some soap and a clothesline with a fresh towel you can use to wash and hang your clothes to dry."');
      scene.actions([
        { label: 'Walk to the creek', goto: ['gad_backwater', ''] },
        { label: '"Actually I am fine for now, I think"', goto: ['gad_swamp_yard', 'start'] },
      ]);
    } else {
      scene.text('"Here, come have a seat" said Sergei, the overweight one, freeing up a place for you by the campfire.');
      scene.actions([
        { label: '"Sit down"', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 2
  }, goto: ['gad_swamp_yard', 'campfire'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterMeetHuntersAfterRescue(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['were_met'] = 1;
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = (Math.floor(Math.random() * 11) + 20);
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (10 + ((s as any).pcs_apprnc ?? 0) / 4);
  ((s as any).hunterVars = (s as any).hunterVars ?? {})['violent'] = 0;
  qspCall(s, 'stat', '');
  scene.text('You see the three men talking to each other. They stop and approach you after noticing you have calmed down.');
  if (((s as any).clothingworntype ?? 0) === 'nude') {
    scene.img('images/locations/gadukino/hunters/hanterhelp3.jpg');
    scene.text('You realize that you are totally naked in front of these three strangers, you quickly try to cover up your most private parts with your hands');
    scene.text('You start blushing feeling ashamed.');
    scene.text('Shortest of the men starts ogling you while the overweight one freezes up like a deer in the headlights.');
    scene.text('The third man turns his head away and hands you a burlap sack');
    scene.text('"Here, you can have this to cover up, you have nothing to be embarrassed about. Sorry we do not have any change of clothes for you."');
    scene.actions([
      { label: 'Cover up with the burlap sack', handler: (st: GameState) => {
    qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
  } },
    ]);
  } else {
    scene.img('images/locations/gadukino/hunters/hanterhelp2.jpg');
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (3);
  }
  if (((s as any).pcs_apprnc ?? 0) >= 70) {
    scene.text('"Are you feeling better now? What\'s your name, beautiful?" the short one asks.');
  }
  if (((s as any).pcs_apprnc ?? 0) < 70) {
    scene.text('"Are you feeling better now? What\'s your name?" the short one asks.');
  }
  // TODO-QSP: dynamic text: "<<$pcs_nickname>>, well, you can call me <<$pcs_nickname>>." you answer.
  scene.text(`"${((s as any).pcs_nickname ?? '')}, well, you can call me ${((s as any).pcs_nickname ?? '')}." you answer.`);
  scene.text('"I\'m Andrei," he replied, "and these are my friends, from the city, Igor and Sergei."');
  // TODO-QSP: dynamic text: "Is your lastname possibly <<$pcs_lastname>>?" You look at him surprised for a m...
  scene.text(`"Is your lastname possibly ${((s as any).pcs_lastname ?? '')}?" You look at him surprised for a moment before nodding.`);
  scene.text('"You look a lot like your mother that\'s how I knew. I am also from Gadukino."');
  if (((s as any).pcs_sweat ?? 0) > 2  ||  ((s as any).dirty ?? 0) === 1) {
    scene.text('You become aware of the dirty clothes sticking on your body, making you uncomfortable.');
    scene.text('"Is there somewhere I can clean myself up?"');
    scene.text('"Well, it\'s still warm outside, so you can wash up in the creek, just follow the path behind the hut, you can\'t miss it."');
    scene.text('"There is also a basin with some soap and a clothesline with a fresh towel you can use to wash and hang your clothes to dry."');
    scene.actions([
      { label: 'Walk too the creek', goto: ['gad_backwater', ''] },
      { label: '"Actually I am fine for now, I think"', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } else {
    scene.text('"Here, come have a seat" said Sergei, the overweight one, freeing up a place for you by the campfire.');
    scene.actions([
      { label: '"Sit down"', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['collective_opinion'] += 2
  }, goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterShootingBet(s: GameState, scene: SceneBuilder): void {
  if (((s as any).clothingworntype ?? 0) !== 'nude') {
    scene.img('images/locations/gadukino/hunters/shooting.mp4');
  } else {
    scene.img('images/locations/gadukino/hunters/shooting_nude.mp4');
  }
  (s as any).tirkoef = ((s as any).pcs_agil ?? 0) + ((s as any).pcs_shoot ?? 0);
  (s as any).tirmin = ((s as any).tirkoef ?? 0) * 20 / 100;
  (s as any).tirand = (Math.floor(Math.random() * (((s as any).tirkoef ?? 0) + ((s as any).tirmin ?? 0) - ((s as any).tirkoef ?? 0) - ((s as any).tirmin ?? 0) + 1)) + (((s as any).tirkoef ?? 0) - ((s as any).tirmin ?? 0)));
  if (Number((s as any).locArgs?.[1] ?? 0) === 'win') {
    scene.text('"Hah!" you exclaim. "I win!", before looking back.');
    scene.text('Andrei is nowhere to be seen. That bastard ran away!');
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) + (15);
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'lose') {
    scene.img('images/characters/shared/headshots_main/big172.jpg');
    scene.text('"Well seems like that did not work out as expected. Now, give me a moment while I think" says Andrei.');
    scene.text('Just a second after you start thinking about what perverted scheme he can come up with, "Oh I know!" he says.');
    (s as any).lost_bet_temprand = 1;
    if (((s as any).lost_bet_temprand ?? 0) === 1) {
      if (((s as any).clothingworntype ?? 0) === 'nude') {
        scene.text('"I am going to tie you to that tree right next to the yard and then you will allow me to do whatever you want me to."');
        scene.text('"Or the others…" he adds.');
        scene.actions([
          { label: 'No fucking way!', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (20);
    scene.text('"No fucking way! You really are getting ahead of yourself now." you angrily respond.');
    scene.text('"Damn you are such a cocktease. You are all fine walking around displaying yourself like that but the moment someone wants some fun you turn into an absolute prude." he says, somewhat annoyed.');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
          { label: 'Let him lead you to the trees', goto: ['hunter_favors', 'yard_bondage', 'lost_bet'] },
        ]);
      } else {
        scene.text('"I want you to lose the clothes for today and tomorrow. Be more in touch with nature and all that. You can put em back on the day after of course"');
        scene.actions([
          { label: 'Strip naked', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (10);
    (st as any).forced_naked_day = ((st as any).daystart ?? 0) + 1;
    qspCall(st, 'clothing', 'strip', 'gad_swamphouse');
    qspCall(st, 'underwear', 'remove');
    qspCall(st, 'arousal', 'flash', 10, 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'gad_swamp_yard', 'start');
  } },
          { label: 'Refuse', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (15);
    scene.text('"I am not sure…" you respond. "I would be prancing around completely naked for three men I barely know, that\'s just too much"');
    // TODO-QSP: dynamic text: "Three men you barely know? <<$pcs_nickname>>, I thought we were your friends. I...
    scene.text(`"Three men you barely know? ${((st as any).pcs_nickname ?? '')}, I thought we were your friends. It is nothing more than just having some silly fun together" he responds.`);
    scene.text('"Besides, it is not fair to just back down from a bet like that." he adds.');
    scene.text('"Sorry, but I will not just prance around naked for your viewing pleasure." you firmly respond.');
    scene.actions([
      { label: 'Walk away', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).lost_bet_temprand ?? 0) === 2) {
      } else {
        if (((s as any).lost_bet_temprand ?? 0) === 3) {
        } else {
          if (((s as any).lost_bet_temprand ?? 0) === 4) {
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Further', handler: (st: GameState) => {
    if (((st as any).tirand ?? 0) > 70) {
      qspGoto(st, 'hunter_interactions', 'shooting_bet', 'win');
    } else {
      qspGoto(st, 'hunter_interactions', 'shooting_bet', 'lose');
    }
  } },
  ]);
  scene.build();
}

function enterAndreiQuickFuck(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/andrei_naked_encounter_pull.jpg');
  scene.text('Andrei walks up to you without saying another word and forcefully pulls you closer by your nipples.');
  qspCall(s, 'pain', '', 10, 'pinch', 'nipples');
  scene.text('You yelp but it is cut short when he shoves his tongue down your throat, roughly fondling you all over');
  qspCall(s, 'arousal', 'foreplay', 15, 'sub');
  // TODO-QSP: end
  scene.actions([
    { label: 'You feel your pussy starting to get wet', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/andrei_naked_encounter_finger.jpg');
    scene.text('He definitely feels it too as he keeps shoving his fingers in and out. Satisfied, he turns you around by the shoulders and forcefully bends you over');
    scene.text('You close your eyes anticipating what is coming. He wastes no time unzipping his pants and shoves his rock-hard cock all the way in your ready pussy, eliciting a loud moan from you.');
    scene.img('images/locations/gadukino/sex/hunter/andrei_naked_encounter_fuck.jpg');
    scene.text('He starts fucking you rough and hard, not caring what you are getting out of it. You are merely a cocksleeve for him.');
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'arousal', 'vaginal_finger', (-15), 'sub');
    qspCall(st, 'dinsex', 'vaginal_sex', (-30), 'sub', 'rough');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/andrei_naked_encounter_cum.jpg');
    scene.text('After a few minutes he grabs you by the shoulders and unceremoniously shoves you on the ground on your back.');
    scene.text('You watch him furiously jerk standing over you. You realize you have been playing with yourself for some time when he starts shooting his load all over your tits and belly');
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'masturbate');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'breasts', 'A172', 1);
    qspCall(st, 'cum_call', 'stomach', 'A172', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    if (((st as any).loc ?? 0) === 'gad_swamp_woods') {
      qspGoto(st, 'gad_swamp_woods', 'shooting_practice', 'practice');
    } else {
      if (((st as any).loc ?? 0) === 'gad_swamp_yard') {
        qspGoto(st, 'gad_swamp_yard', 'start');
      }
    }
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterIgorDemonstration(s: GameState, scene: SceneBuilder): void {
  scene.text('Seeing Igor staring at your naked body like a deer in the headlights gives you an idea.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Show him it is no big deal', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (7);
    scene.img('images/locations/gadukino/sex/hunter/igor_naked_encounter_dance.jpg');
    scene.text('You smile at Igor as you start swaying slowly, getting into something resembling a rhythm');
    scene.text('"The clothes just get in the way when I do this. Why not join me for a dance?" you say.');
    scene.text('He starts awkwardly swaying to match you as you two get into it, with you acting like you are not dancing completely naked in front of the men.');
    scene.text('As he starts getting into the rhythm, the other men take notice and join in too. Sergei puts on some music as you all spend some time dancing like you are at a disco.');
    qspCall(st, 'arousal', 'flash', 25, 'dom', 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    { label: 'Give him a hands on demonstration', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (1);
    scene.img('images/locations/gadukino/sex/hunter/igor_naked_encounter_grope.jpg');
    scene.text('You smile at Igor as you approach him and grab his hand');
    scene.text('"It is no big deal to me, why are you the one that\'s embarrassed?" you say as you put his hand on your breasts');
    scene.text('He starts blushing to his ears as you lead him to play with your tits. He starts kneading your breasts lightly after a minute but does not go further.');
    scene.text('After a minute he stops and starts going away but not before you notice the satisfied smirk on his face.');
    qspCall(st, 'arousal', 'foreplay', 5, 'dom', 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNakedEncounter(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hunterVars ?? 0)?.['KnowSlut'] === 0  &&  ((s as any).clothingworntype ?? 0) === 'nude'  &&  ((s as any).hour ?? 0) < 23  &&  ((s as any).hour ?? 0) >= 7) {
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swampdvornude.jpg');
    scene.text('You notice the hunters ogling your body while you are walking around naked. You subconsciously cover up your private parts');
    if (qspFunc(s, 'clothing', 'lost_clothes_here', 'gad_swamphouse')  &&  ((s as any).lastwornclothingtype ?? 0) !== 'nude'  &&  ((s as any).daystart ?? 0) > ((s as any).forced_naked_day ?? 0)) {
      scene.actions([
        { label: 'Run and get dressed', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'underwear', 'wear');
    qspCall(st, 'clothing', 'recover_lost_clothes', 'gad_swamphouse', 1);
    scene.img('images/locations/gadukino/hunters/swampdvornude1.jpg');
    scene.text('You rush to get your stuff in the hut so you can get dressed.');
    scene.actions([
      { label: 'Further', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).forced_naked_day ?? 0) < ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Cover up with a burlap sack you found', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'clothing', 'gad_swamp_clothes', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/tkan_cloth.jpg');
    scene.text('You look around and put on a piece of burlap sack you see… It\'s not much, but at least it\'s better than nothing.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
        ]);
      }
    }
    scene.actions([
      { label: 'Drop your hands', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'flash', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'end');
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['knowday'] = ((st as any).daystart ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swampdvornude2.jpg');
    scene.text('You decide you do not mind the men seeing you naked. You drop your hands and let the men stare at your naked tits and pussy all they want.');
    if (((st as any).hunterVars ?? 0)?.['sexual_comfort'] < 40) {
      if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 45) {
        ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (5);
        // TODO-QSP: dynamic text: "<<$pcs_nickname>>, why are you not wearing clothes?" says Sergei
        scene.text(`"${((st as any).pcs_nickname ?? '')}, why are you not wearing clothes?" says Sergei`);
        scene.text('"Leave the girl alone Sergei. It is just us around. In fact, we should go naked too!" says Andrei and starts unzippping his jacket');
        // TODO-QSP: dynamic text: "Okay, okay, you made your point, you do not have to do a striptease now. <<$pcs...
        scene.text(`"Okay, okay, you made your point, you do not have to do a striptease now. ${((st as any).pcs_nickname ?? '')}, you can do whatever you are comfortable with. You are among friends." says Sergei`);
      } else {
        if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 25) {
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (1);
          scene.text('"Well well, we have ourselves a free spirit here!" says Andrei');
          // TODO-QSP: dynamic text: "<<$pcs_nickname>>, we like you. But please cover up we are all men here and it ...
          scene.text(`"${((st as any).pcs_nickname ?? '')}, we like you. But please cover up we are all men here and it is making us uncomfortable to see you naked like this." says Sergei`);
        } else {
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (3);
          scene.text('"What in the hell are you doing you dumb girl, put something on!" says Sergei');
          // TODO-QSP: dynamic text: "Seriously <<$pcs_nickname>>. It is not very ladylike to expose yourself to some...
          scene.text(`"Seriously ${((st as any).pcs_nickname ?? '')}. It is not very ladylike to expose yourself to some men you barely know. What if we were someone with less than good intentions?" says Igor`);
        }
      }
    } else {
      if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 45) {
        ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (5);
        ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (5);
        qspCall(st, 'arousal', 'fondling', 5);
        scene.img('images/locations/gadukino/sex/hunter/igor_naked_encounter_kiss.jpg');
        // TODO-QSP: dynamic text: "You sure do look good, <<$pcs_nickname>>" says Igor before pulling you in for a...
        scene.text(`"You sure do look good, ${((st as any).pcs_nickname ?? '')}" says Igor before pulling you in for a kiss.`);
        scene.actions([
          { label: 'Return the kiss', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/igor_naked_encounter_finger.jpg');
    scene.text('You happily return the kiss, not caring if you are making out completely naked outside with the other men watching you');
    scene.text('Igor\'s fingers explore your body, fondling your tits and ass before slipping in your pussy.');
    scene.text('You start grinding against his fingers before he pulls back out and gives you a smirk before walking back, leaving you aching for more.');
    qspCall(st, 'arousal', 'kiss', 5, 'exhibitionism');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
          { label: 'Lightly push him away', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (3);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (3);
    scene.img('images/locations/gadukino/sex/hunter/igor_naked_encounter_push.jpg');
    scene.text('"Whoa there guy! Getting ahead of ourselves aren\'t we?" you say before giving Igor a slap on the ass.');
    scene.text('He looks at you with a mix of confusion and amusement');
    qspCall(st, 'arousal', 'fondling', 5, 'dom');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (((st as any).hunterVars ?? 0)?.['collective_opinion'] > 25) {
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (3);
          // TODO-QSP: dynamic text: "That''s the spirit <<$pcs_nickname>>. You have got nothing to hide so why hide ...
          scene.text(`"That's the spirit ${((st as any).pcs_nickname ?? '')}. You have got nothing to hide so why hide it?" says Andrei`);
          scene.text('"I… uh… wow." stammers Igor. "Still not used to you prancing around like that"');
          scene.actions([
            { label: 'Help him get more used to it', handler: (st: GameState) => {
    qspCall(st, 'hunter_interactions', 'igor_demonstration');
  } },
          ]);
        } else {
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (3);
          ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (1);
          scene.text('"What in the hell are you doing you dumb girl, put something on" says Sergei');
          scene.text('"Leave her Sergei, she is not useful for anything else anyway. Might as well be eye candy and easy access for a quick fuck." says Andrei');
          scene.text('"In fact, let me demonstrate" he says before looking at you, grinning wolfishly"');
          qspGoto(st, 'hunter_interactions', 'andrei_quick_fuck');
        }
      }
      scene.actions([
        { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
      ]);
    }
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } },
    ]);
  } else {
    qspGoto(s, 'gad_swamp_yard', 'start');
  }
  // TODO-QSP: end
  scene.build();
}

function enterNighttimeGangbang(s: GameState, scene: SceneBuilder): void {
  if (Number((s as any).locArgs?.[1] ?? 0) === '') {
    if (((s as any).alko ?? 0) > 5) {
      (s as any).alko = 5;
    }
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (20);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (15);
    qspCall(s, 'arousal', 'massage', 3);
    qspCall(s, 'stat', '');
    scene.text('You slowly start coming back to your senses with a feeling you cannot exactly place. It is a good feeling though, some kind of warmth reverberating through your body.');
    scene.actions([
      { label: 'Try to place the feeling', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'arousal', 'vaginal', (-7), 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_pen.jpg');
    scene.text('In a dreamy haze, you realize the feeling is like your pussy getting fucked. You think you are having a wet dream, dreaming you are being used as a cocksleeve, your little pussy getting drilled by someone you do not even see.');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspCall(st, 'arousal', 'vaginal', (-5), 'gangbang', 'rough');
    qspCall(st, 'arousal', 'bj', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_mis_bj.jpg');
    scene.text('Opening your eyes, you see Andrei kneeling in front of you. Without thinking, you grab his cock and take it into your mouth. You taste a couple drops of his precum coming out.');
    scene.text('You also notice the rest of the guys are all naked and circling you. Seems like all the drinking got everyone in the yard pretty horny, although it might have had to do with you strutting your stuff completely naked for some time.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'vaginal', 5, 'gangbang', 'rough');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'deepthroat');
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'cum_call', 'mouth', 'A172', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_mis_2.jpg');
    scene.text('You are getting fucked from both ends, Sergei pumping your pussy while you are blowing Andrei. You feel Andrei\'s cock twitching for a moment before he cums down your throat without warning.');
    scene.actions([
      { label: 'Swallow and try to get up', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    qspCall(st, 'arousal', 'vaginal', (-5), 'gangbang', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_mis_1.jpg');
    scene.text('Wanting to take a more active part, you try getting up. Sergei pumps your pussy for a couple more minutes before pulling out, letting you stand up.');
    scene.actions([
      { label: 'Get up on your feet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 8;
    qspCall(st, 'arousal', 'bj', (-5), 'gangbang', 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-5), 'gangbang', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_bj.jpg');
    scene.text('You spring up and immediately bend down to suck Sergei\'s dick. You can taste your juices, lots of it covering his cock.');
    scene.text('Meanwhile you feel another dick rubbing against your crack and folds before you feel the head part them apart, slowly sinking in your soaking wet pussy. It is Igor taking you from behind.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 5, 'gangbang', 'exhibitionism', 'sub', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', 5, 'gangbang', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_1.jpg');
    scene.text('Sergei grabs you by the hair, lightly pushing you down his cock. You take him deeper in your throat, your gag reflex suppressed by all the booze you have drank.');
    scene.text('You feel Igor picking up his pace, his dick hitting just the right spot faster and faster.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 7;
    qspCall(st, 'arousal', 'hj', (-5), 'gangbang', 'exhibitionism', 'sub');
    qspCall(st, 'arousal', 'vaginal', (-10), 'gangbang', 'exhibitionism', 'sub');
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_2.jpg');
    scene.text('Igor\'s cock in your pussy feels so good! You cannot even concentrate on sucking Sergei\'s dick, letting it go to brace yourself.');
    // TODO-QSP: dynamic text: Sergei starts stroking himself while Igor keeps drilling your cunt. After a few ...
    scene.text(`Sergei starts stroking himself while Igor keeps drilling your cunt. After a few minutes he grunts "${((st as any).pcs_nickname ?? '')} I'm going to cum"`);
    scene.actions([
      { label: 'Cum inside me, Igor!', handler: (st: GameState) => {
    scene.text('Hearing your cry, Igor buries his dick all the way inside your pussy in one motion, eliciting a loud gasp from you as he cums deep inside your womanhood.');
    qspCall(st, 'cum_call', 'right_in_the_babymaker', 'A173', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take care of Sergei', goto: ['hunter_interactions', 'nighttime_gangbang', 'finish'] },
    ]);
  } },
      { label: 'No, pull out! No!', handler: (st: GameState) => {
    scene.text('Igor pulls out the last moment, spraying his jism all over your labia. Phew! That was close');
    qspCall(st, 'cum_call', 'labia', 'A173', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Take care of Sergei', goto: ['hunter_interactions', 'nighttime_gangbang', 'finish'] },
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
  } },
    ]);
  } },
    ]);
  }
  if (Number((s as any).locArgs?.[1] ?? 0) === 'finish') {
    (s as any).minut = ((s as any).minut ?? 0) + 4;
    qspCall(s, 'arousal', 'hj', (-5), 'gangbang', 'exhibitionism', 'sub');
    qspCall(s, 'arousal', 'end');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_buk_1.jpg');
    scene.text('With Andrei and Igor satisfied, you kneel in front of Sergei, stroking his balls as he jerks himself off to your face.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'face', 'A174', 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/gangbang_night/gangbang_buk_2.jpg');
    scene.text('After a moment, he cums on your face with a grunt, covering it with his spunk.');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'campfire'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterStriptease(s: GameState, scene: SceneBuilder): void {
  if (((s as any).alko ?? 0) >= 8  &&  ((s as any).hunterVars ?? 0)?.['KnowSlut'] > 0) {
    (s as any).temp_sh = (Math.floor(Math.random() * 6) + 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl1.jpg');
    scene.text('You\'re really drunk, you slur your words, and everything is spinning…');
    if (((s as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/swamphousedrunkgirl2.jpg');
    scene.text('You pass out and fall asleep right at the table…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (15);
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'sleep_simple', 'forced', 180);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel1.jpg');
    scene.text('Three hours later you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 2) {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep7.jpg');
    scene.text('You try to reach the bed, but pass out right on the floor, before reaching it…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel4.jpg');
    scene.text('Four hours later you wake up in the middle of the night. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).temp_sh ?? 0) === 3) {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep4.jpg');
    scene.text('You somehow got to the couch and passed out without undressing…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (10);
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'sleep_simple', 'forced', 360);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel2.jpg');
    scene.text('You sleep for awhile, waking up barely able to lift your head from the pillow. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    if (((s as any).temp_sh ?? 0) > 3) {
      scene.actions([
        { label: 'Move away from the table', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pjanaja5.jpg');
    scene.text('The drunken men ask you to dance for them, Andrei turns on the music and you drunkenly start swaying next to the table…');
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 10);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance1.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('You stand next to the table and begin to depict something that reminds of rhythmic dance, the men start clapping.');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 10);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance2.' + (Math.floor(Math.random() * 2) + 1) + '.jpg');
    scene.text('In the spur of the moment, while the men cheer you on, you remove your top, leaving you only with a bra on…');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 10);
    (st as any).inhib_exp = ((st as any).inhib_exp ?? 0) + ((Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance3.jpg');
    scene.text('The men continue cheering you on, you keep undressing further, remaining only in underwear…');
    scene.actions([
      { label: 'Keep dancing', handler: (st: GameState) => {
    (st as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance4.jpg');
    scene.text('You remove the bra and throw it on the table, the men cheer you on and you flash your breasts in front of them.');
    qspCall(st, 'arousal', 'striptease', 10);
    qspCall(st, 'stat', '');
    (st as any).temp_sh = 1;
    if (((st as any).temp_sh ?? 0) === 1) {
      scene.actions([
        { label: 'Pass out', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/sleep17.jpg');
    scene.text('You clearly overestimated the capability of your body. So after a while dancing, you pass out on the floor, making the men quite nervous…');
    scene.actions([
      { label: 'Wake up', handler: (st: GameState) => {
    (st as any).pcs_health = ((st as any).pcs_health ?? 0) - (20);
    qspCall(st, 'mood', 'lower', 'medium');
    qspCall(st, 'sleep_simple', 'forced', 240);
    scene.img('images/locations/pavlovsk/resident/apartment/shulginhome/bigroom/drunk_ev/pohmel3.jpg');
    scene.text('You sleep for four hours, waking up in the middle night, barely able to get up off the floor. You\'ve got a headache and vaguely remember yesterday.');
    scene.actions([
      { label: 'Continue', goto: ['gad_swamphouse', 'start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Keep dancing', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'striptease', 10);
    (st as any).huntdancesex = 3;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/hunters/dance5.jpg');
    scene.text('You keep on dancing, undressing further. Judging by the excited faces of the men, you\'re definitely turning them on.');
    scene.actions([
      { label: 'Continue', goto: ['huntersex', 'sexafterstrip1'] },
    ]);
  } },
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
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterHuntersmokBJ(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'boyStat', 'A172');
  if ((!((s as any).hunterandreisex ?? 0))) {
    (s as any).hunterandreisex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  (s as any).temp_sh = (Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/gadukino/sex/hunter/hantersmokbj1.' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
  if (((s as any).hunterVars ?? 0)?.['smokeBJ'] === 0) {
    scene.text('You got comfortable on your knees and start sucking on his cock…');
  }
  if (((s as any).hunterVars ?? 0)?.['smokeBJ'] === 1) {
    scene.text('Andrei did not finish, so you continue to suck…');
  }
  qspCall(s, 'arousal', 'bj', 5, 'sub');
  qspCall(s, 'stat', '');
  if (((s as any).temp_sh ?? 0) === 1) {
    qspCall(s, 'gad_swamphouse', 'huntersmokBJ');
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    // TODO-QSP: hunterVars['smokeBJ'] = 1
  } },
    ]);
  }
  if (((s as any).temp_sh ?? 0) === 2) {
    scene.actions([
      { label: 'Keep sucking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['smokeBJ'] = 0;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/hantersmokcum.jpg');
    scene.text('You notice Andrei\'s thighs stiffen as he\'s edging… He lets out a grunt and shoots his spunk all over your face.');
    // TODO-QSP: dynamic text: "You''re really good at this, <<$pcs_nickname>>," said a pleased Andrei. "You''r...
    scene.text(`"You're really good at this, ${((st as any).pcs_nickname ?? '')}," said a pleased Andrei. "You're the perfect stress reliever.`);
    scene.text('You clean yourself up before walking back to the hut with Andrei.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Return to the table', handler: (st: GameState) => {
    qspCall(st, 'gad_swamphouse', 'meal_table');
  } },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCumComment(s: GameState, scene: SceneBuilder): void {
  if ((((s as any).clothingworntype ?? 0) === 'nude'  &&  Object.keys((s as any).sparrvol ?? {}).length > 0)  ||  ((s as any).cumloc ?? 0)[11] === 1) {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['collective_opinion'] = ((s as any).hunterVars['collective_opinion'] ?? 0) - (3);
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (7);
    qspCall(s, 'stat', '');
    scene.img('images/locations/gadukino/hunters/hanterstable.jpg');
    scene.text('You sit down by the hunters and greet them before Andrei interrupts you');
    // TODO-QSP: dynamic text: "Damn, <<$pcs_nickname>>, you are just prancing around with cum on you like that...
    scene.text(`"Damn, ${((s as any).pcs_nickname ?? '')}, you are just prancing around with cum on you like that? That's kind of hot to be honest`);
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreeksideRape(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Resist', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    ((st as any).stat = (st as any).stat ?? {})['gangbang_count'] = ((st as any).stat['gangbang_count'] ?? 0) + (1);
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax6.jpg');
    scene.text('You desperately begin to resist, but the men are too strong for you. Andrei tells Igor and Sergei to grab you and while you\'re fighting them then approaches and slaps you across the face…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).clothingworntype = 'nude';
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax7.jpg');
    scene.text('Andrei keeps holding you down, tearing off your clothes one by one');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax8.jpg');
    scene.text('While Igor and Sergei are holding you down Andrei takes off his pants, bringing his cock closer towards your mouth. You shake your head trying to pull away, but he grabs you by the head, and violently shoves his cock into your mouth.');
    scene.text('"Suck on it, bitch," you hear him say while tearing up. "And God forbid, if I feel any teeth, I\'ll fucking bury you!"');
    qspCall(st, 'boyStat', 'A172');
    scene.text('At the same time Sergei, feeling he can take advantage of the situation, pulls your panties to the side and begins fondling your vagina.');
    scene.text('Igor grabs your hand, takes out his cock, places it in the palm of your hand, leaving you with no choice but to begin jerking him off.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'gangbang', 'rough');
    qspCall(st, 'arousal', 'hj', 5, 'sub', 'gangbang');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax9.jpg');
    scene.text('After playing around for a while, Sergei and Andrei grab you by your hands and feet and carry you into a clearing behind the hut.');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax10.jpg');
    scene.text('There they twist your arms, so you don\'t attempt to escape, while Igor fetches a blanket from the hut…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pantyworntype = 'none';
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax11.jpg');
    scene.text('The men throw you down on the blanket and pull off your panties…');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax12.jpg');
    scene.text('The men start exploring your body. Sergei grabs you by the face, Igor squeezes your breast, while Andrei starts caressing your vagina…');
    qspCall(st, 'arousal', 'foreplay', 5, 'sub', 'gangbang', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax14.jpg');
    scene.text('Andrei finger-fucks you with his two fingers. Sergei and Igor go down on their knees whip out their cocks and make you jerk them off…');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'sub', 'gangbang', 'rough');
    qspCall(st, 'arousal', 'hj', (-5), 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/locations/gadukino/sex/hunter/backwaterrelax13.jpg');
    scene.text('Andrei pulls out of his fingers and the men surround you start jerking their cocks. Their animal instincts have taken over and they\'re ready for some real action.');
    // TODO-QSP: dynamic text: "Now that we''re past the foreplay <<$pcs_nickname>>, let''s have some real fun,...
    scene.text(`"Now that we're past the foreplay ${((st as any).pcs_nickname ?? '')}, let's have some real fun," said Andrei, taking a couple steps back.`);
    scene.actions([
      { label: 'Give up and enjoy', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) + (5);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) + (5);
    qspGoto(st, 'hunter_interactions', 'creekside_gangbang');
  } },
      { label: 'Seize the opportunity to make your escape', handler: (st: GameState) => {
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['collective_opinion'] = ((st as any).hunterVars['collective_opinion'] ?? 0) - (20);
    ((st as any).hunterVars = (st as any).hunterVars ?? {})['sexual_comfort'] = ((st as any).hunterVars['sexual_comfort'] ?? 0) - (10);
    qspGoto(st, 'gad_swamp_yard', 'swamp_escape');
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

function enterSkirtBreeze(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PCloSkirt ?? 0) > 1  &&  ((s as any).pantyworntype ?? 0) === 'none') {
    ((s as any).hunterVars = (s as any).hunterVars ?? {})['sexual_comfort'] = ((s as any).hunterVars['sexual_comfort'] ?? 0) + (2);
    scene.img('images/locations/gadukino/hunters/no_tanga.jpg');
    scene.text('You walk across the yard, when suddenly the wind lifts your skirt.');
    scene.text('"I forgot to put on panties…," you realize this seeing your bare pussy.');
    scene.text('You nervously started looking around if anyone caught a glimpse of your little wardrobe malfunction…');
    scene.text('You hoped that the men missed the opportunity seeing you exposed, however, Igor\'s face had turned red and you see Andrei grinning, you realize quite quickly that your little show did not pass unappreciated.');
    qspCall(s, 'arousal', 'flashlite', 1);
    qspCall(s, 'arousal', 'end');
    scene.actions([
      { label: 'Further', goto: ['gad_swamp_yard', 'start'] },
    ]);
  } else {
    qspGoto(s, 'gad_swamp_yard', 'start');
  }
  // TODO-QSP: end
  scene.build();
}

function enterCreeksideGangbang(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/gadukino/sex/hunter/hantersgroupbj3.' + (Math.floor(Math.random() * 9) + 0) + '.jpg');
  scene.text('The men start taking turns, grabbing your head, forcing their cocks down your throat.');
  qspCall(s, 'boyStat', 'A172');
  qspCall(s, 'oral', 'start', 1, 'gangbang');
  qspCall(s, 'boyStat', 'A174');
  qspCall(s, 'oral', 'start', 1, 'gangbang');
  qspCall(s, 'boyStat', 'A173');
  qspCall(s, 'oral', 'start', 1, 'gangbang');
  qspCall(s, 'arousal', 'bj', 2, 'sub', 'gangbang');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'The men step back for a second', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupvias3.' + (Math.floor(Math.random() * 5) + 0) + '.jpg');
    scene.text('Igor lies down on the ground with his cock out, he commands you to straddle him. While Igor enters you, Andrei and Sergei tell you to get back to sucking them off.');
    qspCall(st, 'boyStat', 'A174');
    qspCall(st, 'oral', 'start', 1);
    qspCall(st, 'boyStat', 'A172');
    qspCall(st, 'oral', 'start', 1);
    qspCall(st, 'boyStat', 'A173');
    qspCall(st, 'dinsex', 'vaginal_sex', 5);
    qspCall(st, 'arousal', 'bj', 4, 'sub', 'gangbang');
    qspCall(st, 'arousal', 'vaginal', 4, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Further', handler: (st: GameState) => {
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupvao.jpg');
    scene.text('Sergei enjoying the head he\'s getting, grabs you by the head and forces you to go deeper. Engrossed by your cock sucking skills Andrei starts jerking off');
    scene.text('Meanwhile you involuntarily start moving your hips to match the rhythm of Igor pumping your pussy');
    qspCall(st, 'boyStat', 'A174');
    qspCall(st, 'oral', 'start', 1);
    qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).boy ?? 0), 1);
    qspCall(st, 'dinsex', 'bj_swallow_random');
    qspCall(st, 'boyStat', 'A173');
    qspCall(st, 'dinsex', 'vaginal_sex', 5);
    qspCall(st, 'cum_call', '', '', ((st as any).boy ?? 0), 1);
    qspCall(st, 'dinsex', 'sexcumsk');
    // TODO-QSP: dynamic text: You feel <<$boydesc>>''s cock twitch inside your pussy and realize he just came
    scene.text(`You feel ${((st as any).boydesc ?? '')}'s cock twitch inside your pussy and realize he just came`);
    qspCall(st, 'arousal', 'bj', 3, 'sub', 'gangbang', 'deepthroat');
    qspCall(st, 'arousal', 'vaginal', 3, 'sub', 'gangbang');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Igor pulls out from under you', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A172');
    scene.img('images/locations/gadukino/sex/hunter/hantersgroupvend.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls you on top of him, spreads your pussy lips and enters you
    scene.text(`${((st as any).boydesc ?? '')} pulls you on top of him, spreads your pussy lips and enters you`);
    qspCall(st, 'dinsex', 'vaginal_sex', 5);
    qspCall(st, 'dinsex', 'sexcumsk');
    qspCall(st, 'arousal', 'vaginal', 5, 'sub');
    qspCall(st, 'arousal', 'end');
    // TODO-QSP: dynamic text: After a few minutes of <<$boydesc>> vigorously fucking your pussy, you feel him ...
    scene.text(`After a few minutes of ${((st as any).boydesc ?? '')} vigorously fucking your pussy, you feel him cumming inside you`);
    qspCall(st, 'cum_call', '', '', ((st as any).boy ?? 0), 1);
    scene.actions([
      { label: 'The men finish up and leave you', handler: (st: GameState) => {
    // TODO-QSP: gs 'clothing', 'wear', $lastwornclothingtype['hunters'], lastwornclothingnumber['hunters']
    // TODO-QSP: gs 'panties', 'wear', $lastwornpantytype['hunters'], lastwornpantynumber['hunters']
    // TODO-QSP: gs 'bras', 'wear', $lastwornbratype['hunters'], lastwornbranumber['hunters']
    qspCall(st, 'stat', '');
    qspGoto(st, 'gad_swamp_yard', 'start');
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
    case 'smoke_with_hunters':
      enterSmokeWithHunters(s, scene);
      break;
    case 'chat_with_hunters':
      enterChatWithHunters(s, scene);
      break;
    case 'chat_with_hunters_theme':
      enterChatWithHuntersTheme(s, scene);
      break;
    case 'join_drinking':
      enterJoinDrinking(s, scene);
      break;
    case 'drink_with_hunters':
      enterDrinkWithHunters(s, scene);
      break;
    case 'booze_dare':
      enterBoozeDare(s, scene);
      break;
    case 'drunken_blackout':
      enterDrunkenBlackout(s, scene);
      break;
    case 'meet_hunters':
      enterMeetHunters(s, scene);
      break;
    case 'meet_hunters_after_rescue':
      enterMeetHuntersAfterRescue(s, scene);
      break;
    case 'shooting_bet':
      enterShootingBet(s, scene);
      break;
    case 'andrei_quick_fuck':
      enterAndreiQuickFuck(s, scene);
      break;
    case 'igor_demonstration':
      enterIgorDemonstration(s, scene);
      break;
    case 'naked_encounter':
      enterNakedEncounter(s, scene);
      break;
    case 'nighttime_gangbang':
      enterNighttimeGangbang(s, scene);
      break;
    case 'striptease':
      enterStriptease(s, scene);
      break;
    case 'huntersmokBJ':
      enterHuntersmokBJ(s, scene);
      break;
    case 'cum_comment':
      enterCumComment(s, scene);
      break;
    case 'creekside_rape':
      enterCreeksideRape(s, scene);
      break;
    case 'skirt_breeze':
      enterSkirtBreeze(s, scene);
      break;
    case 'creekside_gangbang':
      enterCreeksideGangbang(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const hunter_interactions: LocationDef = {
  name: 'hunter_interactions',
  title: 'The men ask you if you want to go out for a smoke.',
  region: 'other',
  enter: enter,
};
