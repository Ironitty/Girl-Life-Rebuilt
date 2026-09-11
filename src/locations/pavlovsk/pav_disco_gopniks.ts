import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterVitekDanVasily(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A9', 'like', 1, 'pav_disco');
  qspCall(s, 'npc_relationship', 'modify', 'A10', 'like', 1, 'pav_disco');
  qspCall(s, 'npc_relationship', 'modify', 'A11', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
  scene.text('Vitek, Dan and Vasily are hanging out in the dark corner of the hall with the other gopniks. It\'s dimly lit and hard to make out details, but it looks like they\'re sharing some beers they\'ve smuggled in.');
  if (((s as any).npc_rel ?? 0)?.['A9'] >= 60  &&  (!((s as any).kotovLoveQW ?? 0))) {
    scene.actions([
      { label: 'Talk to Vitek', handler: (st: GameState) => {
    (st as any).numnpc = 9;
    // TODO-QSP: $static_num = 'A9'
  }, goto: ['kotovtalker', ''] },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
      scene.text('As you start to approach Vitek, he glances at you and gives you a look of disgust. "Get the fuck away from me, slut!"');
      scene.text('Dan then chimes in. "Maybe she\'s looking for a fuck?" he says as he gives you a dark look.');
      scene.text('Seeing the mood turning dark and ugly, you flee while trying to ignore the laughter behind you.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('As you walk up to Vitek, he turns to you with a scowl. "Stay the fuck away from us loser." You get the picture from the looks you\'re getting and quickly move away.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
          scene.text('Vitek turns to face you as you approach. "What\'s up, slut?" ');
          scene.text('You grimance slightly, but ignore his remark. "I just wanted to say hi and talk is all."');
          scene.text('"Now that is rare! You don\'t have a cock in your mouth and can actually talk!" Dan chimes in.');
          scene.text('"Who knew her mouth was good for anything other than sucking cock?" Vitek says and laughs loudly.');
          // TODO-QSP: dynamic text: "I'm surprised <<$pcs_nickname>> doesn't walk bow legged after the number of tim...
          scene.text(`"I'm surprised ${((s as any).pcs_nickname ?? 0)} doesn't walk bow legged after the number of times she's been fucked!" Vasily says with a laugh.`);
          scene.text('You put up with their comments and end up talking to them about a variety of things the group is up to. They insult you every so often, but in an almost friendly way, although Vasily keeps asking about who\'s dick you just sucked.');
          scene.text('After a while, you grow uncomfortable with the way they\'re looking at you, so you get up and walk away before they can drag you off somewhere to use you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A9'] >= 50  &&  ((s as any).npc_rel ?? 0)?.['A10'] >= 50  &&  ((s as any).npc_rel ?? 0)?.['A11'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('As you start to approach them, you hear Vitek, Dan and Vasily telling stories. After a few questions, they start telling you about some of their more exciting adventures and soon you are all laughing and swapping stories.');
            } else {
              scene.text('As you start to approach them, you hear Vitek, Dan and Vasily telling stories.');
              // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when he sees you.
              scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when he sees you.`);
              scene.text('"I just wanted to say hi and talk is all," you reply.');
              scene.text('"Whatever," he shrugs before he goes back to telling stories and after a few questions, starts telling you about some of his more exciting adventures.');
            }
            scene.text('Just as Vitek finishes one of his stories, Dan shoves a bottle of beer in your face. "Have a drink!"');
            scene.text('You see all of them looking at you and can\'t help but feel the peer pressure.');
            qspCall(s, 'willpower', 'drink', 'resist', 'hard');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Sure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take another beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      { label: 'Keep drinking', goto: ['pav_disco_gopniks', 'vitek_dan_vasily_get_drunk'] },
    ]);
  } },
    ]);
  } },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A9'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
              if (((s as any).grupTipe ?? 0) === 4) {
                scene.text('You go over and sit on the stairs near Vitek and listen to him, Dan and Vasily tell stories.');
                scene.text('"What do you want, you stupid cow?" Vitek snarls when they see you.');
                scene.text('"I just wanted to say hi and talk is all," you reply.');
                scene.text('"Whatever," he shrugs before he goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He answers a few, but otherwise ignores you.');
              } else {
                scene.text('You go over and sit on the stairs near Vitek and listen to him, Dan and Vasily tell stories. "What do you want, you stupid cow?" Vitek snarls when they see you.');
                scene.text('"I just wanted to say hi and talk is all." you reply and he glares at you. "Fuck off bitch!"');
                scene.text('He goes back to telling stories and you ask him a few questions about some of his more exciting adventures. He ignores you, but doesn\'t make any efforts to chase you off either.');
              }
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            } else {
              scene.text('As you start to approach them, you hear Vitek, Dan and Vasily telling stories.');
              // TODO-QSP: dynamic text: "What do you want, <<$pcs_nickname>>?" Vitek asks when he sees you.
              scene.text(`"What do you want, ${((s as any).pcs_nickname ?? 0)}?" Vitek asks when he sees you.`);
              scene.text('"I just wanted to say hi and talk is all," you reply.');
              scene.text('"Whatever," he shrugs before he goes back to telling stories and after a few questions, starts telling you about some of his more exciting adventures.');
              scene.text('Just as Vitek finishes one of his stories, Dan shoves a bottle of beer in your face. "Have a drink!"');
              scene.text('You see all of them looking at you and can\'t help but feel the peer pressure.');
              qspCall(s, 'willpower', 'drink', 'resist', 'hard');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Sure', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    qspCall(s, 'willpower', 'drink', 'resist', 'hard');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A9', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A10', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'npc_relationship', 'modify', 'A11', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Take another beer', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You grab the bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    scene.actions([
      { label: 'No thanks', handler: (st: GameState) => {
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/vitek_dan_vasily.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('Vitek shakes his head. "Just when you start acting cool, you turn around and show what a pussy you are!"');
    scene.text('Dan snorts and Vitek dismisses you before you can reply. With the looks they\'re giving you, you know better than to try and push your luck, so you quickly leave to find something else to do.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      { label: 'Keep drinking', goto: ['pav_disco_gopniks', 'vitek_dan_vasily_get_drunk'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterVitekDanVasilyGetDrunk(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'drugs', 'alcohol', 'beer', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
  if (((s as any).alko ?? 0) < 6) {
    scene.text('You take the offered bottle and take a swig. "Thanks."');
    scene.text('They go back to telling stories and you start listening. Once you\'ve finished the bottle, they hand you another and start staring at you again, waiting to see if you take it.');
    if (((s as any).hour ?? 0) >= 20) {
      scene.actions([
        { label: 'Keep drinking', goto: ['pav_disco_gopniks', 'vitek_dan_vasily_get_drunk'] },
      ]);
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } else {
    if (((s as any).fame ?? 0)?.['pav_slut'] < 100) {
      scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_vasily.jpg');
      scene.text('Vasily puts his hand on your shoulder and tells you that his friends aren\'t the kind of guys a nice girl like you should be getting drunk with and so he takes your hand in his and walks you home.');
      scene.text('Once outside, you stagger and he puts his arm around you to steady you and after you almost fall for the third time, he just gives you a piggy back ride the rest of the way to the apartment complex.');
      scene.text('Once there, he leaves you to make the rest of the way home on your own.');
      scene.actions([
        { label: 'Enter your apartment building', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pod_ezd', 'etaj_1'] },
      ]);
    } else {
      if (((s as any).DansOralSlut ?? 0) === 1) {
        if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
          scene.img('images/characters/shared/headshots_main/big144.jpg');
          // TODO-QSP: dynamic text: "You're pretty drunk, <<$pcs_nickname>>. Let me take you home," you hear Dan say...
          scene.text(`"You're pretty drunk, ${((s as any).pcs_nickname ?? 0)}. Let me take you home," you hear Dan say as he takes you by the arm.`);
          scene.text('Before you can respond, someone else walks up and pushes Dan back a step. "I\'ve got her, thanks."');
          scene.text('You glance up and see Anushka standing in front of Dan, who looks down at you. You can\'t help but notice the hungry look in his eyes.');
          scene.text('Dan smiles at Anushka. "I don\'t mind. I can help her home."');
          scene.text('Anushka rolls her eyes at him and puts her hand on his chest, pushing him back another step. "Back off, Dan! I said I\'ve got her!"');
          scene.text('By now several of the other gopniks are watching and the commotion between them is starting to attract the attention of others as well.');
          scene.text('Dan clenches his jaw tight. "Then take her! I try to be a gentlemen and this is what I get!"');
          scene.text('A few guys in ear shot laugh at his comment as Anushka helps you up. "Come on, let\'s get you home."');
          scene.text('She flips off Dan as she helps you outside.');
          scene.text('"Fuck you, bitch!" you hear Dan growl behind you as you leave.');
          scene.actions([
            { label: 'Walk home', goto: ['pav_disco_gopniks', 'anushka_walkhome'] },
          ]);
        } else {
          scene.img('images/characters/shared/headshots_main/big10.jpg');
          // TODO-QSP: dynamic text: "You're pretty drunk, <<$pcs_nickname>>. Let me take you home." you hear Dan say...
          scene.text(`"You're pretty drunk, ${((s as any).pcs_nickname ?? 0)}. Let me take you home." you hear Dan say as he takes you by the arm.`);
          qspCall(s, 'willpower', 'misc', 'resist', 'medium');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'I\'m fine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'I\'m fine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You pull away from him and stagger away. He just watches you for a few seconds before rejoining Vitek and Vasily.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Go with Dan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_dan.jpg');
    scene.text('He takes you by the arm and leads you outside. As you\'re walking down the street, you feel a little tipsy and almost fall several times, but Dan catches you each time.');
    scene.text('As he supports your weight, Dan tells you funny stories and anecdotes along the way, and before you know it you\'re at your apartment building. When you open the door and enter the building, Dan walks you up to the second floor, where he suddenly and roughly shoves you into a dark corner of the stairwell.');
    scene.text('He takes your head by the chin and whispers in your ear. "Your turn to make me feel good. Get on your knees slut, otherwise I\'m telling everyone."');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You push him away from you. "No way, Dan! Leave me alone!"');
    scene.text('His eyes look murderous, but he doesn\'t touch you. After a few seconds, he bounces back and grins.');
    scene.text('"Suit yourself, whore. Your reputation around town will be ruined!"');
    scene.text('He then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do as he says', goto: ['pav_discoev1', 'dan'] },
    ]);
  } },
          ]);
        }
      } else {
        if (((s as any).pcs_hotcat ?? 0) < 5) {
          if (((s as any).npc_rel ?? 0)?.['A144'] >= 50) {
            scene.img('images/characters/shared/headshots_main/big144.jpg');
            // TODO-QSP: dynamic text: You're quite drunk as someone walks up. "I think you might have over done it ton...
            scene.text(`You're quite drunk as someone walks up. "I think you might have over done it tonight, ${((s as any).pcs_nickname ?? 0)}."`);
            scene.text('You glance up and see Anushka standing over you. She glances at some of the men around and you can\'t help but notice the hungry look in their eyes.');
            scene.text('"Let\'s get you home," she says as she pulls you up to your feet.');
            scene.text('Leaning on her for support, the two of you walk out to the street.');
            scene.actions([
              { label: 'Go with Anushka', goto: ['pav_disco_gopniks', 'anushka_walkhome'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A25'] >= 50  &&  ((s as any).soniaQW ?? 0)?.['hate'] < 1  &&  (((s as any).soniaQW ?? 0)?.['fallenangel'] < 1  ||  ((s as any).daystart ?? 0) > ((s as any).soniaQW ?? 0)?.['fallday'] + 7)) {
              scene.img('images/characters/shared/headshots_main/big25.jpg');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, are you drunk?!" Sonia asks as she approaches. "Come on, get...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, are you drunk?!" Sonia asks as she approaches. "Come on, get up and let's get you home."`);
              scene.text('She hurriedly helps you up while trying to avoid the gaze of the gopniks around you as she does. Once you\'re standing, she helps you walk out of the disco.');
              scene.actions([
                { label: 'Go with Sonia', goto: ['pav_disco_coolkids', 'sonia_walkhome'] },
              ]);
            } else {
              scene.img('images/locations/pavlovsk/community/disco/school_kids/katja_help.jpg');
              // TODO-QSP: dynamic text: "<<$pcs_nickname>>, are you drunk?!" Katja asks as she approaches. "Come on, get...
              scene.text(`"${((s as any).pcs_nickname ?? 0)}, are you drunk?!" Katja asks as she approaches. "Come on, get up and let's get you home."`);
              scene.text('Once she has you standing, she helps you walk out of the community center.');
              scene.actions([
                { label: 'Go with Katja', goto: ['pav_disco_coolkids', 'katja_walkhome'] },
              ]);
            }
          }
        } else {
          scene.img('images/characters/shared/headshots_main/big10.jpg');
          if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  (Math.floor(Math.random() * 3) + 1) === 1) {
            scene.img('images/characters/shared/headshots_main/big144.jpg');
            // TODO-QSP: dynamic text: "You're pretty drunk, <<$pcs_nickname>>. Let me take you home," you hear Dan say...
            scene.text(`"You're pretty drunk, ${((s as any).pcs_nickname ?? 0)}. Let me take you home," you hear Dan say as he takes you by the arm.`);
            scene.text('Before you can respond, someone else walks up and pushes Dan back a step. "I\'ve got her, thanks."');
            scene.text('You glance up and see Anushka standing in front of Dan, who looks down at you. You can\'t help but notice the hungry look in his eyes.');
            scene.text('Dan smiles at Anushka. "I don\'t mind. I can help her home."');
            scene.text('Anushka rolls her eyes at him and puts her hand on his chest, pushing him back another step. "Back off, Dan! I said I\'ve got her!"');
            scene.text('By now several of the other gopniks are watching and the commotion between them is starting to attract the attention of others as well.');
            scene.text('Dan clenches his jaw tight. "Then take her! I try to be a gentlemen and this is what I get!"');
            scene.text('A few guys in ear shot laugh at his comment as Anushka helps you up. "Come on, let\'s get you home."');
            scene.text('She flips off Dan as she helps you outside.');
            scene.text('"Fuck you, bitch!" you hear Dan growl behind you as you leave.');
            scene.actions([
              { label: 'Walk home', goto: ['pav_disco_gopniks', 'anushka_walkhome'] },
            ]);
          } else {
            // TODO-QSP: dynamic text: "You're pretty drunk, <<$pcs_nickname>>. Let me take you home," you hear Dan say...
            scene.text(`"You're pretty drunk, ${((s as any).pcs_nickname ?? 0)}. Let me take you home," you hear Dan say as he takes you by the arm.`);
            qspCall(s, 'willpower', 'misc', 'resist', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'I\'m fine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'I\'m fine [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big10.jpg');
    scene.text('You pull away from him and stagger away. He just watches you for a few seconds before rejoining Vitek and Vasily.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Go with Dan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_dan.jpg');
    scene.text('He takes you by the arm and leads you outside. As you\'re walking down the street, you feel a little tipsy and almost fall several times, but Dan catches you each time.');
    scene.text('As he supports your weight, Dan tells you funny stories and anecdotes along the way, and before you know it you\'re at your apartment building.');
    scene.text('When you open the door and enter the building, Dan walks you up to the second floor, where he suddenly and roughly shoves you into a dark corner of the stairwell. He takes your head by the chin and kisses your lips hard.');
    qspCall(s, 'willpower', 'kiss', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away and go home [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'stat', '');
    scene.text('You push him away from you. "No way, Dan! Leave me alone!"');
    scene.text('His eyes look murderous, but he doesn\'t touch you. After a few seconds, he bounces back and grins.');
    scene.text('"Suit yourself, but don\'t expect me to always be so nice."');
    scene.text('He then walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Kiss him back', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You return his kiss, unsure why he\'s kissing you… He never seemed that interested in you.');
    scene.text('You feel his hands on your shoulders and he firmly presses down on them, trying to get you to drop to your knees.');
    // TODO-QSP: dynamic text: "Don't worry, <<$pcs_nickname>>… I won't tell anyone about this. Do a good job, ...
    scene.text(`"Don't worry, ${((s as any).pcs_nickname ?? 0)}… I won't tell anyone about this. Do a good job, and your secret will stay safe with me…" he whispers reassuringly.`);
    qspCall(s, 'arousal', 'kiss', 10);
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'bj', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Push him away [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    qspCall(s, 'fame', 'pav', 'sex', 5);
    qspCall(s, 'stat', '');
    scene.text('You push him away from you. "No way, Dan! Leave me alone!"');
    scene.text('His eyes look murderous, but he doesn\'t touch you. After a few seconds, he bounces back and grins.');
    scene.text('"Suit yourself, whore. Your reputation will be ruined when I tell everyone how you sucked me off in the stairwell."');
    scene.text('You shake your head. "But I didn\'t…"');
    scene.text('He laughs. "Your word against mine and everyone seen how drunk you were. Let\'s see who they believe, huh?"');
    scene.text('He walks away before you can get another word in.');
    scene.actions([
      { label: 'Go home', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Squat down', goto: ['pav_discoev1', 'dan'] },
    ]);
  } },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterRadomir(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A154', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/radomir_dance1.jpg');
    scene.text('You see Radomir out on the dance floor, dancing with some pretty girl you\'ve never seen before. It looks like she\'s really into him and he\'s enjoying the attention.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/radomir_dance2.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      if (((s as any).pcs_hotcat ?? 0) >= 6) {
        scene.text('As you walk up, Radomir steps away from the girl and places his hand on your arm. "Well well well, if it isn\'t my favorite groupie slut."');
        scene.text('He doesn\'t give you a chance to speak as he starts to painfully squeeze your arm and whisper in your ear. "This bitch is playing hard to get and I could really use a blowjob right about now, so how about we go somewhere private and you can suck my dick slut?"');
        qspCall(s, 'pain', '', 1, 'armR', 'pinch');
        qspCall(s, 'willpower', 'sex', 'resist', 'hard');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'loathe', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You try to twist your arm out of his grasp, but he has a very firm grip on you and unless you want to start a fight in the middle of the disco, you\'re unable to get away. "Ow, let go! You\'re hurting me!"');
    scene.text('He smiles at you. "Then stop resisting. You know your place…"');
    scene.text('You dig your nails into his wrist. "Please stop! You\'re hurting me!" you whimper just loud enough for a few people nearby to glance over.');
    scene.text('He lets go when he realizes that you\'re about to make a scene. "Fine, then get the fuck out of here." he snarls as he pushes you away and goes back to dancing with the girl.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Go off together', goto: ['pav_discoev1', 'radomir'] },
        ]);
      } else {
        scene.text('He seemingly ignores your presence as he starts grinding hard on the girl, who pushes back against him. Neither of them seem to pay any attention to you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('When he sees you, he gives you a dirty look and shift of his head, motioning for you to get lost as he starts grinding hard on the girl, who pushes back against him. They both proceed to ignore you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
            scene.text('When he sees you, he gives you a dirty look and shift of his head, motioning for you to get lost as he starts grinding hard on the girl, who pushes back against him. Neither of them pay any attention to you from that point.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A154'] < 50) {
              scene.text('He seemingly ignores your presence as he starts grinding hard on the girl, who pushes back against him. Neither of them seem to pay any attention to you.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            } else {
              scene.text('When he sees you, he gives you a slight chin up in greeting and starts grinding hard on the girl, who pushes back against him. Neither of them pay any attention to you from that point.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            }
          }
        } else {
          if (((s as any).pcs_hotcat ?? 0) < 6) {
            scene.text('He seemingly ignores your presence as he starts grinding hard on the girl, who pushes back against him. Neither of them seem to pay any attention to you.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('As you walk up, Radomir steps away from the girl and places his hand on your arm. "Well well well, if it isn\'t the town whore."');
            scene.text('He doesn\'t give you a chance to speak as he starts to painfully squeeze your arm and whisper in your ear. "This bitch is playing hard to get and I could really use a blowjob right about now, so how about we go somewhere private and you can suck my dick slut?"');
            qspCall(s, 'pain', '', 1, 'armR', 'pinch');
            qspCall(s, 'willpower', 'sex', 'resist', 'hard');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'loathe', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You try to twist your arm out of his grasp, but he has a very firm grip on you and unless you want to start a fight in the middle of the disco, you\'re unable to get away. "Ow, let go! You\'re hurting me!"');
    scene.text('He smiles at you. "Then stop resisting. You know your place…"');
    scene.text('You dig your nails into his wrist. "Please stop! You\'re hurting me!" you whimper just loud enough for a few people nearby to glance over.');
    scene.text('He lets go when he realizes that you\'re about to make a scene. "Fine, then get the fuck out of here," he snarls as he pushes you away and goes back to dancing with the girl.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Go off together', goto: ['pav_discoev1', 'radomir'] },
            ]);
          }
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('Radomir is leaning against a wall with the other gopniks in the darkest corner of the disco. He\'s talking with them while laughing about something.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      if (((s as any).pcs_hotcat ?? 0) < 6) {
        scene.text('You walk over and greet him. "Hey Rad, what\'s up?"');
        scene.text('He looks over and gives you a slight chin up in greeting. "Just looking to score a little pussy tonight, how about you?"');
        scene.text('You roll your eyes at him. "Just looking for a little fun, you know." You start chatting, but he seems to be more interested in the attractive girls out on the dance floor than talking with you.');
        scene.text('He eventually pushes off the wall. "I need to piss." He starts to walk away, then stops and turns back towards you. "Unless you want to help me? It\'s pretty heavy."');
        scene.text('Several of the other gopniks laugh while a few taunt him and encourage you, but after he laughs it off, he walks away and they lose interest.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        scene.text('You walk over and greet him. "Hey Rad, what\'s up?"');
        scene.text('He looks over at you and smiles as his eyes roam up and down your body. "Nothing much beautiful. How about you?"');
        scene.text('"Just looking for a little fun, you know." The two of you start talking and he eventually slides closer to you and starts playing with your hair.');
        scene.text('"You\'re too beautiful to stay here in the shadows. Why don\'t we go and dance so I can show you off?"');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You shake your head. "No thanks, I don\'t feel like dancing right now."');
    scene.text('He just shrugs in response. "Your loss." He seems to have lost interest in you and pushes himself off the wall.');
    scene.text('"I need to piss." He starts to walk away, then stops and turns back towards you. "Unless you want to help me? It\'s pretty heavy."');
    scene.text('Several of the other gopniks laugh while a few taunt him and encourage you, but after he laughs it off, he walks away and they lose interest.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You smile. "Yeah, that sounds wonderful."');
    scene.text('"Allow me." he replies with a smile as he takes you by the hand and gently leads you towards the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_gopniks', 'radomir_dance'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('He gives you a dirty look when he sees you. "What the fuck do you want? You know what, I don\'t want to know. Just fuck off, you fucking loser."');
        scene.text('He then turns around and ignores you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          if (((s as any).pcs_hotcat ?? 0) < 6) {
            scene.text('You\'re about to greet him when he interrupts you. "Get lost slut! I can\'t be seen with the likes of you, I have a reputation to uphold!"');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('"Well well well, if it isn\'t the town bike." Radomir taunts as you approach.');
            scene.text('You frown at his comment, but don\'t have a chance to respond. He tells you that you should stop by practice some time, saying that the boys could use some stress release after practice, which leads to him talking about the band and where they will be playing.');
            scene.text('He doesn\'t give you a chance to speak and you\'re forced to listen to him go on and on about his band before he finally pauses and grabs your arm, squeezing it painfully. "I could really use a blowjob, so how about we go somewhere private and you can suck my dick, slut?"');
            qspCall(s, 'pain', '', 1, 'armR', 'pinch');
            qspCall(s, 'willpower', 'sex', 'resist', 'hard');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'loathe', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You try to twist your arm out of his grasp, but he has a very firm grip on you and unless you want to start a fight in the middle of the disco, you\'re unable to get away. "Ow, let go! You\'re hurting me!"');
    scene.text('He smiles at you. "Then stop resisting. You know your place…"');
    scene.text('You dig your nails into his wrist. "Please stop! You\'re hurting me!" you whimper just loud enough for a few people nearby to glance over.');
    scene.text('He lets go when he realizes that you\'re about to make a scene.');
    scene.text('"Fine, then get the fuck out of here," he snarls as he pushes you away and goes back to dancing with the girl.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Go off together', goto: ['pav_discoev1', 'radomir'] },
            ]);
          }
        } else {
          if (((s as any).npc_rel ?? 0)?.['A154'] <= 20) {
            scene.text('You walk over and greet him. "Hey Radomir, what\'s up?"');
            scene.text('He looks over and gives you an annoyed look. "What the fuck do you want?"');
            scene.text('You are a bit taken aback. "I was…"');
            scene.text('You never get to finish what you were about to say. "Yeah, I don\'t care. Go bother someone else."');
            scene.text('He turns to one of the other gopniks and starts talking to them while ignoring you.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).pcs_hotcat ?? 0) < 6) {
              scene.text('Radomir is talking about the band\'s latest gig as you walk up. He barely acknowledges you and instead tells the others about all the girls throwing their panties on stage at him at their last gig. He mostly ignores you, but does reply to a few of your comments.');
              scene.text('Eventually, there\'s a pause in the conversation and you could use this chance to ask him to dance.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask him to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    if (((s as any).grupTipe ?? 0) === 4) {
      scene.text('"Hey Rad, would you like to dance?" you ask with a smile.');
      scene.text('You gives you a mocking stare. "Aaaww isn\'t that adorable? You think you\'re in my league." He then shakes his head. "No. I\'ve got a reputation to protect. I don\'t blame you for wanting to dance with me though, I mean honestly what girl wouldn\'t?"');
      scene.text('He gives you a once over. "Maybe if you do something with your hair? Would a little conditioner hurt you? And don\'t even get me started on your skin, you need to take better care of yourself, or just settle for the likes of Vasily. Maybe you should go ask him." He then turns and starts talking to the other gopniks, commenting about how beneath him you are. The other gopniks laugh with him and start commenting on your appearance as well.');
    } else {
      scene.text('"Hey Rad, would you like to dance?" you ask with a smile.');
      scene.text('He gives you a mocking stare. "With you?" he asks while shaking his head. "No. I\'ve got a reputation to protect and I can\'t be seen dancing with the likes of… you. I don\'t blame you for wanting to dance with me though, I mean honestly what girl wouldn\'t?"');
      scene.text('He laughs while patting your head. "Why don\'t you go bother someone else?" As you start to leave, he adds "If you ever manage to fix…" He pauses, indicating your face. "That, maybe come back and I\'ll make your night, but until then… just get lost." He then turns and starts talking to the other gopniks, commenting about how beneath him you are. The other gopniks laugh with him and start ignoring you.');
    }
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            } else {
              scene.text('You walk over and greet him. "Hey Radomir, what\'s up?"');
              scene.text('He looks over at you and smiles as his eyes roam up and down your body. "Nothing much, beautiful. How about you?"');
              scene.text('"Just looking for a little fun, you know."');
              scene.text('The two of you start talking and he eventually slides closer to you and starts playing with your hair. "You\'re too beautiful to stay here in the shadows. Why don\'t we go and dance so I can show you off?"');
              scene.actions([
                { label: 'No', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A154', 'dislike', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You shake your head. "No thanks, I don\'t feel like dancing right now."');
    scene.text('He just shrugs in response. "Your loss." He seems to have lost interest in you and pushes himself off the wall.');
    scene.text('"I need to piss." He starts to walk away, then stops and turns back towards you. "Unless you want to help me? It\'s pretty heavy."');
    scene.text('Several of the other gopniks laugh while a few taunt him and encourage you, but after he laughs it off, he walks away and they lose interest.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You smile. "Yeah, that sounds wonderful."');
    scene.text('"Allow me," he replies with a smile as he takes you by the hand and gently leads you towards the dance floor.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_gopniks', 'radomir_dance'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterRadomirDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/radomir_dance1.jpg');
  scene.text('Radomir takes you out onto the dance floor and starts dancing with you. He\'s a pretty good dancer and seems very confident as he moves around the dance floor. He soon dances around behind you and you feel him moving in closer behind you.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_gopniks', 'radomir_dance'] },
      { label: 'Grind against him', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    scene.img('images/locations/pavlovsk/community/disco/school_kids/radomir_dance2.jpg');
    scene.text('You back up against him and start grinding your ass against his crotch. He returns the favor and puts his hands on your hips as the two of you dance dirty in front of everyone.');
    scene.text('He then nuzzles your neck while whispering in your ear. "Why don\'t we blow this place, so you can blow me?"');
    scene.text('He says it more like a statement than a question.');
    qspCall(s, 'arousal', 'foreplay', 10, 'inhibition');
    qspCall(s, 'stat', '');
    qspCall(s, 'willpower', 'sex', 'resist', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'No [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'arousal', 'end');
    scene.img('images/characters/shared/headshots_main/big154.jpg');
    scene.text('You pull away from him and turn around to face him. "No, I\'m not that kind of girl."');
    scene.text('He laughs. "Every girl is that kind of girl, some of them just don\'t know it yet. Some come on, baby…"');
    scene.text('You shake your head and start walking away. "I said no!"');
    scene.text('You hear him laugh behind you. "You\'ll be back sooner or later."');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go off together', goto: ['pav_discoev1', 'radomir'] },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterRoman(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A157', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big157.jpg');
  scene.text('Roman is hanging out in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details, but he seems to be talking to several of the other gopniks and sharing some beers they\'ve smuggled in.');
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      scene.text('"Well well well, if it isn\'t our little fuck bunny. You looking for a cock to hop on?" Roman taunts as you approach.');
      scene.text('"I just wanted to say hi and talk is all," you reply.');
      scene.text('"Tell me how much you love cock then," he laughs before you banter with him.');
      scene.text('He rips into you a lot, but at least he talks to you.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('"Don\'t even think about it unless you want me to kick your fucking teeth in."');
        scene.text('You get the message and quickly leave.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('As you start to approach Roman, he snarls at you. "If you so much as open your cum breath mouth at me, I\'ll bust this bottle against your face."');
          scene.text('Not wishing to push your luck, you walk away.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('You take a seat near Roman. "What\'s up, Roman?"');
              scene.text('"Fuck off, bitch!" he snarls at you.');
              scene.text('"Calm down, I just want to talk!" you reply.');
              scene.text('He mostly ignores you and when he does respond, he insults you, but at least he doesn\'t run you off.');
            } else {
              scene.text('You take a seat near Roman. "What\'s up, Roman?"');
              scene.text('"Get lost, cunt!" he snarls at you.');
              scene.text('"Calm down, I just want to talk!" you reply.');
              scene.text('He mostly ignores you and when he does respond, he insults you, but at least he doesn\'t run you off.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A158'] < 50) {
              scene.text('"What do you want?" Roman snarls as you approach.');
              scene.text('"I just wanted to say hi and talk is all," you reply.');
              scene.text('"What the fuck could you possibly have to say to me? Maybe you want to tell me about some pretty dress you seen or some other girly shit? Just piss off."');
              scene.text('You make conversation with him, but he\'s rude and often insulting towards you.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask him to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('"Hey Roman, want to dance?" you ask with a smile.');
    scene.text('He looks at you blankly. "If I wanted to dance, I\'d drag your fucking ass out onto the dance floor. Now fuck off, you\'re starting to get on my nerves, bitch!"');
    scene.text('You nod slightly and apologize as he starts talking to some of the other gopniks and ignoring you.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                scene.text('"So listen to this, I was arguing with this old hag yesterday. She wouldn\'t let go that I was swearing-"');
                scene.text('Roman is telling another of his crazy stories to the group.');
                scene.text('You join in, listening and asking him a few questions, and the two of you are soon chatting about a variety of topics.');
              } else {
                scene.text('"What do you want?" Roman asks with a glare as you approach.');
                scene.text('"I just wanted to say hi and talk is all," you reply.');
                scene.text('"Yeah? What about?" he scowls.');
                scene.text('You banter with him about a variety of things. He seems friendly enough, considering his reputation.');
              }
              scene.text('As he finishes one of his stories, he shoves a bottle of beer in your face. "Drink!"');
              qspCall(s, 'willpower', 'drink', 'resist', 'hard');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A157', 'loathe', 1, 'pav_disco2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big157.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('He forces the bottle against your lips. "Fucking drink it, you cunt!"');
    scene.text('You pull away from him. "What the fuck are you doing?!"');
    scene.text('He growls and starts moving towards you when Vitek places a hand on his arm. He jerks away, but notices the looks of some of the other gopniks and snarls before leaning back against the wall.');
    scene.text('"Get the fuck out of my sight, before I make you eat this bottle, cunt!" he snarls.');
    scene.text('You know better than to push him, so you quickly leave him in peace.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You take the offered bottle and take a swig. "Thanks."');
    scene.text('He takes it back and takes another swig and before handing it back to you. You take turns drinking until the bottle is empty.');
    scene.text('"I need to piss," he says bluntly before he walks away.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterValentin(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A158', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big158.jpg');
  scene.text('Valentin is hanging out in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details, but he seems to be talking to several of the other gopniks while sharing some beers they\'ve smuggled in.');
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      // TODO-QSP: dynamic text: He smiles as you walk up. "What's up <<$pcs_nickname>>?"
      scene.text(`He smiles as you walk up. "What's up ${((s as any).pcs_nickname ?? 0)}?"`);
      scene.text('You smile back. "Nothing much, just wanted to hang out and talk."');
      scene.text('The two of you start chatting and he gets a little hands on with you at times, but you\'re used to it.');
      scene.text('As you start to leave, he stops you. "Stop by the garage some time, I can always use a break and a quick fuck."');
      scene.text('You sigh a little. "Maybe."');
      scene.text('He grins. "Well, how about now?"');
      scene.actions([
        { label: 'Agree to have sex now', goto: ['pav_discoev1', 'valentin'] },
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('He gives you an annoyed look when he sees you. "Go bother someone else."');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('You try and talk to him, but he completely ignores you, like you aren\'t even there. Eventually, you give up and walk away.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('"Hey, Valentin!" you greet him as you walk up.');
              scene.text('He sighs. "What do you want?"');
              scene.text('"I just wanted to talk is all," you reply.');
              scene.text('"Yeah? Well I\'m busy and don\'t have time for you."');
              scene.text('You persist and he relents, talking to you for a few minutes before making it clear he\'s done talking, so you leave him in peace.');
            } else {
              scene.text('"Hey, Valentin!" you greet him as you walk up.');
              scene.text('He frowns as you approach. "We have nothing to talk about, so go bother someone else!"');
              scene.text('"I just wanted to talk is all," you reply.');
              scene.text('"Yeah? Well, I don\'t want to talk to you."');
              scene.text('You persist and he relents, talking to you for a few minutes before making it clear he\'s done talking, so you leave him in peace.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A158'] < 50) {
              scene.text('"Hey, Valentin!" you greet him as you walk up.');
              scene.text('He gives you a slight nod in greeting.');
              scene.text('"What have you been up to?" you ask.');
              scene.text('"Working on my bike and practicing with the band," he half heartedly replies, but he warms up a bit the more you talk to him.');
              scene.text('You mostly ask him about his music and his bike, which seems to do the trick.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask him to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('"Hey Val, want to dance?" you ask with a smile.');
    scene.text('He pauses, as if thinking about it, then shakes his head. "Maybe some other time."');
    scene.text('You nod slightly. "Sure, some other time then."');
    scene.text('He then turns and starts talking to some of the other gopniks.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            } else {
              // TODO-QSP: dynamic text: Valentin calls out as you approach. "Hey <<$pcs_nickname>>, what's up kitten?"
              scene.text(`Valentin calls out as you approach. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up kitten?"`);
              scene.text('You smile as you reply. "I just came to hang out and have some fun. You?"');
              scene.text('"Same, same. Want a drink?" he replies in his most charming voice as he offers you a bottle.');
              qspCall(s, 'willpower', 'drink', 'resist', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('He shrugs and takes another drink. "Suit yourself."');
    scene.text('You then engage in a friendly conversation, mostly about the band or his bike.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    if (((s as any).alko ?? 0) < 4) {
      scene.text('You take the offered bottle and take a swig. "Thanks."');
      scene.text('He grins and takes another drink when you hand it back. "Good for you, kitten."');
      scene.text('You engage in a friendly conversation, mostly about the band or his bike.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      scene.text('You take the offered bottle and take a swig. "Thanks."');
      scene.text('As you drink, he reaches down and adjusts his crotch, then looks around and leans over next to you. "How about we go have a little fun?"');
      qspCall(s, 'willpower', 'sex', 'resist', 'medium');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big158.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('He shrugs and takes another drink. "Suit yourself."');
    scene.text('You then engage in a friendly conversation, mostly about the band or his bike.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Agree to have sex', goto: ['pav_discoev1', 'valentin'] },
      ]);
    }
  } },
              ]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterArkadi(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A156', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big156.jpg');
  scene.text('Arkadi is hanging out in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details, but he seems to be talking to several of the other gopniks while sharing some beers they\'ve smuggled in.');
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      scene.text('As you walk up, he cups his crotch and bounces it. "Yeah, you want this, don\'t you? Well I don\'t have time to give it to you right now."');
      scene.text('"I just wanted to talk is all," you reply.');
      scene.text('He snorts, but doesn\'t refute what you say as you talk to him.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('"Don\'t even try it," he bluntly states when he sees you.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"Get lost, you disgusting whore!" he snarls before you even make it to him.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A156'] <= 20) {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('"Hey Arkadi, I thought I\'d just come by and hang out with you for a while."');
              scene.text('He snorts and grabs his crotch. "Why don\'t you suck my dick instead?"');
              scene.text('You ignore his comment and ask him about the city and after a while, he finally starts to respond back, telling you about his time in the city.');
            } else {
              scene.text('"Hey Arkadi, I thought I\'d just come by and hang out with you for a while."');
              scene.text('He snorts and grabs his crotch. "Why don\'t you do something useful with that mouth of yours and suck my dick instead?"');
              scene.text('You ignore his comment and ask him about the city and after a while, he finally starts to respond back, telling you about his time in the city.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A156'] < 50) {
              scene.text('"Hey Arkadi, I thought I\'d just come by and hang out with you for a while."');
              scene.text('"Oh yeah? What about?" he replies.');
              scene.text('You know he loves the city, so you ask him questions about it and he\'s more than happy to answer them.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask him to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('"Hey Arkadi, want to dance?" you with a smile.');
    scene.text('He laughs and shakes his head. "No, I don\'t dance."');
    scene.text('You nod slightly. "Oh. Okay…"');
    scene.text('He then turns and starts talking to some of the other gopniks.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            } else {
              scene.text('"Hey Arkadi, I thought I\'d come by and hang out with you for a while."');
              scene.text('"Oh yeah? Want a drink?" he asks as he offers you a bottle.');
              qspCall(s, 'willpower', 'drink', 'resist', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big156.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('He shrugs and takes another drink. "Suit yourself."');
    scene.text('You know he loves the city, so you ask him questions about it and he\'s more than happy to answer them.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You take the offered bottle and take a swig. "Thanks."');
    scene.text('He grins and takes another drink when you hand it back. "Alcohol makes everything better."');
    scene.text('You know he loves the city, so you ask him questions about it and he\'s more than happy to answer them.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterNiko(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A189', 'like', 1, 'pav_disco');
  scene.img('images/characters/shared/headshots_main/big189.jpg');
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterLavrenti(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A155', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lavrenti_dance1.jpg');
    scene.text('You see Lavrenti out on the dance floor, dancing with some pretty girl you\'ve never seen before. It seems like she\'s really into him and he\'s enjoying the attention.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lavrenti_dance1.jpg');
    if (((s as any).npc_rel ?? 0)?.['A154'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      scene.text('When he sees you, he smiles and moves between a few girls who are dancing near him. He\'s a very good dancer and they don\'t seem to mind at all as they all start dancing together.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with him', goto: ['pav_disco_gopniks', 'lavrenti_dance'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('You\'re sure he seen you, but is ignoring you as he moves between a few girls who are dancing near him. He\'s a very good dancer and they don\'t seem to mind at all as they all start dancing together.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A155'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('You\'re sure he seen you, but is ignoring you as he moves between a few girls who are dancing near him. He\'s a very good dancer and they don\'t seem to mind at all as they all start dancing together.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('When he sees you, he gives you a brief smile and moves between a few girls who are dancing near him. He\'s a very good dancer and they don\'t seem to mind at all as they all start dancing together.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('Lavrenti is hanging out in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details, but he seems to be talking to several of the other gopniks who are passing out something to the rest.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      scene.text('You approach Lavrenti. "What\'s up with you, Lavrenti?"');
      scene.text('He smiles at you. "Not much. Just hanging out and admiring the view."');
      scene.text('You follow his gaze and see some cute girls in short skirts.');
      scene.text('"Nice view indeed," you comment with a bemused smile.');
      scene.text('He laughs and nods. "Guess that\'s too modest for you, huh?"');
      scene.text('The two of you start talking about the disco and he starts telling you about some of the funny things that have happened when the gopniks get wasted.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('You\'re sure he seen you, but is ignoring you. After a few minutes of trying to get his attention, you get the message and move along.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"Get the fuck away from me, you fucking slut!" he snarls as he sees you approaching.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A155'] <= 20) {
            scene.text('You approach Lavrenti. "What\'s up with you, Lavrenti?"');
            scene.text('He frowns at you. "Not much. Just hanging out and admiring the view."');
            scene.text('You follow his gaze and see some cute girls in short skirts.');
            scene.text('"Nice view indeed," you comment with a bemused smile.');
            scene.text('He snorts. "What are you, some kind of dyke?"');
            scene.text('"Come on, don\'t be like that. I just wanted to talk."');
            scene.text('He snorts again. "You\'re the last person I want to talk to."');
            scene.text('You persist and ask about his parties, which slowly gets him talking.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A155'] < 50) {
              scene.text('You approach Lavrenti. "What\'s up with you, Lavrenti?"');
              scene.text('Lavrenti gives you a slight smile. "Not much. Just hanging out and admiring the view."');
              scene.text('You follow his gaze and see some cute girls in short skirts.');
              scene.text('"Nice view indeed," you comment with a bemused smile.');
              scene.text('He laughs and nods. "Yeah, I love it when they really start dancing and don\'t notice their skirts crawling up."');
              scene.text('The two of you start talking about the disco and he starts telling you about some of the funny things that happened when the gopniks get wasted.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask him to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Want to dance?" you ask with a smile.');
    scene.text('He pauses before nodding. "Sure, why not?"');
    scene.text('He leads you out onto the dance floor and you start dancing together.');
    scene.actions([
      { label: 'Go and dance', goto: ['pav_disco_gopniks', 'lavrenti_dance'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).grupTipe ?? 0) === 4) {
                scene.text('You approach Lavrenti. "What\'s up with you, Lavrenti?"');
                // TODO-QSP: dynamic text: Lavrenti smiles at you. "Not much <<$pcs_nickname>>, just hanging out and admiri...
                scene.text(`Lavrenti smiles at you. "Not much ${((s as any).pcs_nickname ?? 0)}, just hanging out and admiring the view."`);
                scene.text('You follow his gaze and see some cute girls in short skirts.');
                scene.text('"Nice view indeed," you comment with a bemused smile.');
                scene.text('He laughs and nods. "Yeah, I love it when they really start dancing and don\'t notice their skirts crawling up."');
                scene.text('The two of you start talking about the disco and he starts telling you about some of the funny things that happened when the gopniks get wasted.');
                // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>," he says as he pulls out a small baggy with white powder...
                scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}," he says as he pulls out a small baggy with white powder in it. "Want a hit?"`);
              } else {
                scene.text('You approach Lavrenti. "What\'s up with you, Lavrenti?"');
                scene.text('Lavrenti smiles at you. "Not much. just hanging out and admiring the view."');
                scene.text('You follow his gaze and see some cute girls in short skirts.');
                scene.text('"Nice view indeed," you comment with a bemused smile.');
                scene.text('He laughs and nods. "Yeah, I love it when they really start dancing and don\'t notice their skirts crawling up."');
                scene.text('The two of you start talking about the disco and he starts telling you about some of the funny things that happened when the gopniks get wasted.');
                scene.text('He then pulls out a small baggy with white powder in it. "Want a hit?"');
              }
              qspCall(s, 'willpower', 'drugs', 'resist', 'medium');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('He just shrugs and prepares a line on the table. "Suit yourself."');
    scene.text('He quickly snorts it and you start chatting away about some of the parties he\'s thrown in the past.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask him to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Want to dance?" you ask with a smile.');
    scene.text('He pauses before nodding. "Sure, why not?"');
    scene.text('He leads you out onto the dance floor and you start dancing together.');
    scene.actions([
      { label: 'Go and dance', goto: ['pav_disco_gopniks', 'lavrenti_dance'] },
    ]);
  } },
    ]);
  } },
                ]);
              }
              scene.actions([
                { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'cocaine', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/cocaine.jpg');
    scene.text('You nod your head and smile. "Sure, thanks."');
    scene.text('He grins and pours some out on a nearby table, using a small razor blade to make two lines before rolling up some money and handing it to you. "Ladies first."');
    scene.text('You take the rolled up money and snort a line of cocaine off the table, feeling the effects almost at once. It\'s top quality stuff. You pass the money back to him and he does the other line. After that, the two of you go back to chatting.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Ask him to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big155.jpg');
    scene.text('"Want to dance?" you ask with a smile.');
    scene.text('He pauses before nodding. "Sure, why not?"');
    scene.text('He leads you out onto the dance floor and you start dancing together.');
    scene.actions([
      { label: 'Go and dance', goto: ['pav_disco_gopniks', 'lavrenti_dance'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterLavrentiDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/lavrenti_dance1.jpg');
  scene.text('He\'s a very good dancer and you can\'t help but wonder if he\'s had dance lessons at some point in his life. The two of you enjoy your time dancing together.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_gopniks', 'lavrenti_dance'] },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterPauline(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A24', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big24.jpg');
  scene.text('Pauline is hanging out in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details, but she seems to be talking to several of the other gopniks while sharing some beers they\'ve smuggled in.');
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      scene.text('"What do you want?" Pauline asks in a none too friendly tone as you approach.');
      scene.text('You sigh. "I just wanted to talk is all."');
      scene.text('"Go talk to someone that cares then," she growls.');
      scene.text('You talk to her for a few minutes, and while she doesn\'t ignore you, she makes it clear that she doesn\'t approve too much of how you got into the gopniks.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('She shakes her head as soon as you start to get close. "Get the fuck away from me."');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('"Don\'t even think about trying to talk to me, slut." she says with a disgusted look.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A158'] <= 20) {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('"Hey Pauline! What are you up to?"');
              scene.text('She glances at you and looks around. "I should just kick your ass, right now."');
              scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
              scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offering a few threats.');
            } else {
              scene.text('"Hey Pauline! What are you up to?"');
              scene.text('She glances at you and looks around. "If there weren\'t so many people around, I would kick your ass right now."');
              scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
              scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offering a few threats.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).npc_rel ?? 0)?.['A158'] < 50) {
              if (((s as any).grupTipe ?? 0) === 4) {
                scene.text('"Hey Pauline! What are you up to?"');
                // TODO-QSP: dynamic text: She looks back at you and shrugs her shoulders. "Hey <<$pcs_nickname>>, nothing ...
                scene.text(`She looks back at you and shrugs her shoulders. "Hey ${((s as any).pcs_nickname ?? 0)}, nothing much. Just drinking and watching the idiots dance."`);
                scene.text('The two of you talk for a while about how most people suck and how lame the disco is.');
              } else {
                scene.text('"Hey Pauline! What are you up to?"');
                scene.text('She glances at you and then looks around for a moment before replying. "You lost? Shouldn\'t you be with your own kind?"');
                scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
                scene.text('The two of you talk for a while, mostly about how, if you want to hang out with the gopniks, you should join them.');
              }
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('"Hey Pauline, want to dance?" you ask with a smile.');
    scene.text('She gives you a dirty look. "What are you, some kind of carpet muncher like Lera? I\'m not into girls, so go find some other twat to try and like, dyke!"');
    scene.text('You shake your head. "No, nothing like that, I just thought you might like to dance and have some company is all."');
    scene.text('You don\'t think she believes you. "If I wanted to dance, I would be out dancing. Why don\'t you go bother someone else?"');
    scene.text('She then turns and starts ignoring you, so you decide not to push your luck and leave.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            } else {
              if (((s as any).grupTipe ?? 0) !== 4) {
                scene.text('"Hey Pauline! What are you up to?"');
                // TODO-QSP: dynamic text: She looks at you blankly. "You lost, <<$pcs_nickname>>? Shouldn't you be with yo...
                scene.text(`She looks at you blankly. "You lost, ${((s as any).pcs_nickname ?? 0)}? Shouldn't you be with your own kind?"`);
                scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
                scene.text('The two of you continue talking for a while, mostly about how, if you want to hang out with the gopniks, you should join them.');
                scene.actions([
                  { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                ]);
              } else {
                scene.text('"Hey Pauline! What are you up to?"');
                // TODO-QSP: dynamic text: She looks back at you and shrugs her shoulders. "Hey <<$pcs_nickname>>, nothing ...
                scene.text(`She looks back at you and shrugs her shoulders. "Hey ${((s as any).pcs_nickname ?? 0)}, nothing much. Just drinking and watching the idiots dance."`);
                scene.text('The two of you continue talking for a while about how most people suck and how lame the disco is before she offers you a bottle of beer. "Want a drink?"');
                qspCall(s, 'willpower', 'drink', 'resist', 'medium');
                if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                  scene.actions([
                    { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                  ]);
                } else {
                  scene.actions([
                    { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big24.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('She shrugs and takes another drink. "Suit yourself."');
    scene.text('You keep talking, but you can tell she\'s starting to get bored of the conversation.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                  ]);
                }
                scene.actions([
                  { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You take the offered bottle and take a swig. "Thanks."');
    scene.text('She grins and takes another drink when you hand it back. "The only thing that makes this all tolerable."');
    scene.text('You keep talking, but you can tell she\'s starting to get bored of the conversation.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
                ]);
              }
            }
          }
        }
      }
    }
  } },
  ]);
  scene.build();
}

function enterLenaLera(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A20', 'like', 1, 'pav_disco');
  qspCall(s, 'npc_relationship', 'modify', 'A21', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 3) + 1) === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera_dance1.jpg');
    scene.text('Lena and Lera are out on the dance floor dancing together. Lena seems focused on the boys, checking them out as they dance, while Lera seems to only be paying attention to Lena.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera_dance1.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1  ||  ((s as any).grupTipe ?? 0) === 5) {
      scene.text('As you approach them, they give you dirty looks before turning away from you and dancing closer together, making it clear you\'re not welcome.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A20'] >= 50  &&  ((s as any).npc_rel ?? 0)?.['A21'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
        scene.text('As you approach them, they smile at you and keep dancing, but make room for you to join them.');
        if (((s as any).hour ?? 0) >= 20) {
          scene.actions([
            { label: 'Keep dancing', goto: ['pav_disco_gopniks', 'lena_lera_dance'] },
          ]);
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A20'] <= 20  ||  ((s as any).npc_rel ?? 0)?.['A21'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          scene.text('As you approach them, they give you dirty looks before turning away from you and dancing closer together, making it clear you\'re not welcome.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
            scene.text('As you approach them, they both give you dirty looks before flipping you off. They then turn and dance closer together, making it clear you\'re not welcome.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            scene.text('As you approach them, they exchange a look and keep dancing. They don\'t seem to be inviting you to join them, but also don\'t seem to be turning you away either.');
            if (((s as any).hour ?? 0) >= 20) {
              scene.actions([
                { label: 'Keep dancing', goto: ['pav_disco_gopniks', 'lena_lera_dance'] },
              ]);
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          }
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera.jpg');
    scene.text('Lena and Lera are hanging out together in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera.jpg');
    if (((s as any).grupTipe ?? 0) === 4  &&  ((s as any).gopnik_slut ?? 0) === 1) {
      scene.text('"Shouldn\'t you be in the bathroom getting gangbanged?" Lena inquires with a note of disgust as you approach.');
      scene.text('Lera laughs. "So, hopped on any cocks today bunny?"');
      scene.text('You sigh. "No, I just wanted to see what you guys were up to."');
      scene.text('"Go bother someone else," Lena says.');
      scene.text('"Yeah, go use that mouth for what it was made for. Go suck a bag of dicks," Lera adds.');
      scene.text('You talk to them for a few minutes, and while they don\'t ignore you, they make it clear that they don\'t approve of how you got in the gopniks.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('As you get near them, the intense dirty looks you get is enough for you to just keep moving.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A20'] >= 50  &&  ((s as any).npc_rel ?? 0)?.['A21'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
          if (((s as any).grupTipe ?? 0) === 4) {
            scene.text('"Hey guys! What are you up to?"');
            // TODO-QSP: dynamic text: Lena looks at you and shrugs her shoulders. "Hey <<$pcs_nickname>>, nothing much...
            scene.text(`Lena looks at you and shrugs her shoulders. "Hey ${((s as any).pcs_nickname ?? 0)}, nothing much. Just hanging out and taking a break from dancing."`);
            scene.text('The three of you talk for a while. Lena mostly talks about how cute many of the boys are and Lera keeps trying to talk about girls don\'t need boys to have fun.');
          } else {
            scene.text('"Hey Lena! What are you up to?"');
            // TODO-QSP: dynamic text: Lena looks at you and arches a brow. "Nothing much. You lost, <<$pcs_nickname>>?...
            scene.text(`Lena looks at you and arches a brow. "Nothing much. You lost, ${((s as any).pcs_nickname ?? 0)}?"`);
            scene.text('"Yeah, shouldn\'t you be hanging out with your own kind?" Lera asks.');
            scene.text('You shake your head. "I hang with whoever I want, regardless of who my friends are."');
            scene.text('The three of you talk for a while. Lena mostly talks about how cute many of the boys are and Lera keeps trying to talk about girls don\'t need boys to have fun.');
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            { label: 'Ask them to dance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      scene.text('"So you girls want to go dancing?" you ask with a smile.');
      scene.text('They glance at each other and Lera nods her head at Lena before Lena turns towards you. "Sure, why not?"');
      scene.text('The three of you head out onto the dance floor together, but just as you get there, a boy walks up and Lena smiles. You all look over at Vitek, who is preoccupied and not looking.');
      scene.text('They quickly kiss before she turns to Lera. "Cover for me."');
      scene.text('You notice Lera looks unhappy. "I thought we were all going to dance together?"');
      scene.text('Lena frowns. "Don\'t be like that! Are you going to cover for me or not?" she asks, sounding more than a little annoyed.');
      scene.text('Lera looks exacerbated. "Fine."');
      scene.text('Lena smiles, hugs Lera and disappears with the boy.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Ask Lera about the boy', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"Who was that?" you ask Lera as you watch Lena leave with the boy.');
    scene.text('"Just some boy from Pushkin Lena\'s got the hots for," Lera sighs, sounding more than a little annoyed.');
    scene.text('It\'s not a big surprise he isn\'t from Pavlovsk. Everyone around here knows how overly protective Vitek is of Lena. "Oh. Vitek doesn\'t know, does he?" you ask.');
    scene.text('Lera steps close to you. "No. And he isn\'t going to know. Got it?" she states in a threatening tone.');
    scene.text('You nod and put your hands up. "Got it, I won\'t tell anyone. I just want to be sure is all."');
    scene.text('Lera glances in the direction Lena and the boy went before she shakes her head and walks away.');
    scene.text('Vitek then walks up to you. "Where\'s Lena? I saw you hanging out with her."');
    scene.text('"She said she was feeling a little sick and went to the bathroom. I think she drank too much," you reply.');
    scene.text('"Fucking lightweight!" he laughs before returning to Vasily and Dan.');
    scene.text('You look around and see that Lera is gone. You think she might have headed for the restrooms.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go and find Lera', goto: ['pav_discoev1', 'lera'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"So you girls want to go dancing?" you ask with a smile.');
      scene.text('They glance at each other and Lera nods her head at Lena before Lena turns towards you. "Sure, why not?"');
      scene.text('The three of you then head out onto the dance floor together.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_gopniks', 'lena_lera_dance'] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A20'] <= 20  &&  ((s as any).npc_rel ?? 0)?.['A21'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('"Hey Lena! What are you up to?"');
              // TODO-QSP: dynamic text: She looks back at you with a frown. "What do you want, <<$pcs_nickname>>?"
              scene.text(`She looks back at you with a frown. "What do you want, ${((s as any).pcs_nickname ?? 0)}?"`);
              scene.text('"I just wanted to say hi and see what you were up to," you reply.');
              scene.text('"Yeah well, I don\'t want to talk to you." You attempt to talk to her, but it\'s obvious that she has no interest in chatting with you.');
            } else {
              scene.text('"Hey Lena! What are you up to?"');
              scene.text('She looks back at you with a frown. "What do you want, freak?"');
              scene.text('"I just wanted to say hi and see what you were up to," you reply.');
              scene.text('"Yeah? Well, I don\'t want to talk to you."');
              scene.text('You attempt to talk to her, but it\'s obvious that she has no interest in chatting with you.');
            }
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
            ]);
          } else {
            if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
              scene.text('"What do you want, cunt? Shouldn\'t you be sucking some cocks somewhere?" Lena snarls before she turns away and ignores you.');
              scene.text('"Don\'t even come near me with that disgusting cum breath of yours," Lera adds before they start talking about you like you\'re not even there, commenting about how disgusting you are.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              ]);
            } else {
              scene.text('"Hey guys! What are you up to?"');
              // TODO-QSP: dynamic text: Lena looks at you and arches a brow. "Nothing much. You lost, <<$pcs_nickname>>?...
              scene.text(`Lena looks at you and arches a brow. "Nothing much. You lost, ${((s as any).pcs_nickname ?? 0)}?"`);
              scene.text('"Yeah, shouldn\'t you be hanging out with your friends?" Lera adds.');
              scene.text('You shake your head. "I hang with whoever I want, regardless of who my friends are."');
              scene.text('The three of you talk for a while. Lena mostly talks about how cute many of the boys are and Lera keeps trying to talk about girls don\'t need boys to have fun.');
              scene.actions([
                { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
                { label: 'Ask them to dance', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera.jpg');
    if ((Math.floor(Math.random() * 4) + 1) === 1) {
      scene.text('"So you girls want to go dancing?" you ask with a smile.');
      scene.text('They glance at each other and Lera nods her head at Lena before Lena turns towards you. "Sure, why not?"');
      scene.text('The three of you head out onto the dance floor together, but just as you get there, a boy walks up and Lena smiles. You all look over at Vitek, who is preoccupied and not looking.');
      scene.text('They quickly kiss before she turns to Lera. "Cover for me."');
      scene.text('You notice Lera looks unhappy. "I thought we were all going to dance together?"');
      scene.text('Lena frowns. "Don\'t be like that! Are you going to cover for me or not?" she asks, sounding more than a little annoyed.');
      scene.text('Lera looks exacerbated. "Fine."');
      scene.text('Lena smiles, hugs Lera and disappears with the boy.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Ask Lera about the boy', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big21.jpg');
    scene.text('"Who was that?" you ask Lera as you watch Lena leave with the boy.');
    scene.text('"Just some boy from Pushkin Lena\'s got the hots for," Lera sighs, sounding more than a little annoyed.');
    scene.text('It\'s not a big surprise he isn\'t from Pavlovsk. Everyone around here knows how overly protective Vitek is of Lena. "Oh. Vitek doesn\'t know, does he?" you ask.');
    scene.text('Lera steps close to you. "No. And he isn\'t going to know. Got it?" she states in a threatening tone.');
    scene.text('You nod and put your hands up. "Got it, I won\'t tell anyone. I just want to be sure is all."');
    scene.text('Lera glances in the direction Lena and the boy went before she shakes her head and walks away.');
    scene.text('Vitek then walks up to you. "Where\'s Lena? I saw you hanging out with her."');
    scene.text('"She said she was feeling a little sick and went to the bathroom. I think she drank too much," you reply.');
    scene.text('"Fucking lightweight!" he laughs before returning to Vasily and Dan.');
    scene.text('You look around and see that Lera is gone. You think she might have headed for the restrooms.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go find Lera', goto: ['pav_discoev1', 'lera'] },
    ]);
  } },
      ]);
    } else {
      scene.text('"So you girls want to go dancing?" you ask with a smile.');
      scene.text('They glance at each other and Lera nods her head at Lena before Lena turns towards you. "Sure, why not?"');
      scene.text('The three of you then head out onto the dance floor together.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_gopniks', 'lena_lera_dance'] },
      ]);
    }
  } },
              ]);
            }
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterLenaLeraDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/lena_lera_dance2.jpg');
  scene.text('The three of you dance together. Lena seems interested in getting the boys attention by any means possible, even if it means dancing close with you or Lera and even trading a few kisses with Lera when some boys start paying attention. Lera on the other hand seems mostly interested in dancing with Lena and happily trades kisses with her. They don\'t exclude you from dancing with them, but you don\'t feel like you belong either.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_gopniks', 'lena_lera_dance'] },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterNush(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A144', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 2) + 1) === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance1.jpg');
    scene.text('Anushka is out on the dance floor, shaking her ass. Her outfit is very tight and clings to her shapely body, while her skirt is so short you\'re sure she\'s given more than a few panty shots.');
    scene.text('She\'s attracted a crowd of guys around her, each trying to dance with her, but she seems content to just tease them and not follow up on it, which doesn\'t seem to discourage them in the slightest.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance1.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 500) {
      scene.text('You make your way over to her and start dancing next with her. "Hey bitch, What\'s up?" she greets you while turning to dance with you.');
      scene.text('You smile and shake your head slightly. "Just dancing with one of the hottest girls here."');
      scene.text('She arches a brow. "One of?"');
      scene.text('You laugh. "Yeah. I\'m here now, slut."');
      scene.text('She giggles. "Fuck you and shake that money maker!"');
      scene.text('The two of you dance together, surrounded by guys trying to get in on the action.');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Keep dancing with her', goto: ['pav_disco_gopniks', 'anushka_dance'] },
        ]);
      }
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 500) {
        scene.text('You think she\'s seen you as you approach, but she turns away and starts dancing with one of the guys crowding her.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 500) {
          scene.text('She smirks as she sees you. "Hey slut, want to borrow one of my boys?"');
          scene.text('A few of the guys turn their attention towards you. "Just make sure you wear protection, boys," she says with a giggle.');
          scene.text('The guys seem to think you\'re easy, and considering your reputation, with good reason. You\'re not in the mood to be pawed at, so you move away from them.');
          scene.text('After you leave, the guys turn their attention back to Anushka.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          // TODO-QSP: dynamic text: You make your way over to her and start dancing next to her. "Hey <<$pcs_nicknam...
          scene.text(`You make your way over to her and start dancing next to her. "Hey ${((s as any).pcs_nickname ?? 0)}, what's up?" she greets you while turning to dance next to you.`);
          scene.text('You smile at her. "Just came to dance and have fun."');
          scene.text('She grins. "Then shake that money maker, girl!"');
          scene.text('The two of you dance together, surrounded by guys trying to get in on the action.');
          if (((s as any).hour ?? 0) >= 20) {
            scene.actions([
              { label: 'Keep dancing with her', goto: ['pav_disco_gopniks', 'anushka_dance'] },
            ]);
          }
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('Anushka is in the dark corner of the disco where the gopniks tend to hang out, talking to some of the boys from the band and laughing about something one of them said.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 500) {
      scene.text('"Hi Nush! What are you up to?"');
      scene.text('She looks at you with a smile. "Hey bitch, just listening to these losers brag about all the pussy they\'ve been banging. You?"');
      scene.text('You give the boys an amused smile as they act wounded by her words. "You know, same old same old. Just looking to have a little fun."');
      scene.text('The two of you start talking about a variety of topics and the boys from the band occasionally comment, usually to make a rude remark or a funny joke, causing Anushka to either laugh or flip them off.');
      if (((s as any).pcs_hotcat ?? 0) >= 6) {
        scene.text('"Want to dance?" Anushka asks as the conversation winds down.');
        scene.actions([
          { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('"Suit yourself," she shrugs before she walks away towards the dance floor.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
          { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds fun."');
    scene.text('She grabs you by the hands and pulls you along to the dance floor.');
    scene.text('"Let\'s go tease the fuck out of the boys and give them a memory to jerk off to later tonight!" she says while giggling.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_gopniks', 'anushka_dance'] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      }
    } else {
      if (((s as any).npc_rel ?? 0)?.['A144'] <= 20  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 500) {
        if (((s as any).grupTipe ?? 0) === 4) {
          scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone. Walking up, you stand next to her and try and peek.');
          scene.text('Before you can see anything, she puts her phone away and frowns at you. "What do you want?"');
          scene.text('You sigh, not getting to see whatever it is she found so amusing. "I thought we could just hang out?"');
          scene.text('She rolls her eyes. "Whatever."');
          scene.text('You try to talk to her, but she just ignores you.');
        } else {
          scene.text('Anushka is leaning against the wall, snickering about something she\'s looking at on her phone.');
          scene.text('Walking up, you stand next to her and try and peak, but before you can see anything, she puts her phone away and frowns at you. "Get lost, freak! I\'m busy."');
          scene.text('You sigh, not getting to see whatever it is she found so amusing. "I thought we could just hang out?"');
          scene.text('She rolls her eyes. "Like I want to talk to you."');
          scene.text('You try to talk to her, but she just ignores you.');
        }
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).fame ?? 0)?.['pav_slut'] >= 500) {
          scene.text('She gives you a tight lipped smile before she turns her attention to one of the guys sitting next to her and talks to them, ignoring you.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('"Hey Nush! What are you up to?"');
          // TODO-QSP: dynamic text: She looks at you with a smile. "Hey <<$pcs_nickname>>, just listening to these l...
          scene.text(`She looks at you with a smile. "Hey ${((s as any).pcs_nickname ?? 0)}, just listening to these losers brag about all the pussy they've been banging. You?"`);
          scene.text('You give the boys an amused smile as they act wounded by her words. "You know, same old same old. Just looking to have a little fun."');
          scene.text('The two of you start talking about a variety of topics and the boys from the band occasionally comment, usually to make a rude remark or a funny joke, causing Anushka to either laugh or flip them off.');
          if (((s as any).pcs_hotcat ?? 0) >= 6) {
            scene.text('"Want to dance?" Anushka asks as the conversation winds down.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              { label: 'No', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('"Suit yourself," she shrugs before she walks away towards the dance floor.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    scene.text('You smile. "Yeah, that sounds fun."');
    scene.text('She grabs you by the hands and pulls you along to the dance floor.');
    scene.text('"Let\'s go tease the fuck out of the boys and give them a memory to jerk off to later tonight!" she says while giggling.');
    scene.actions([
      { label: 'Go dancing', goto: ['pav_disco_gopniks', 'anushka_dance'] },
    ]);
  } },
            ]);
          } else {
            scene.text('As the current topic winds down, Anushka starts listening to the boys talking about the latest girl they banged and she starts making comments towards them.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big144.jpg');
    if (((s as any).pcs_hotcat ?? 0) >= 4) {
      scene.text('"Hey Nush, want to dance?" you ask with a smile.');
      scene.text('She pauses before smiling. "Sure, I love to dance."');
      scene.text('The two of you then head off onto the dance floor together.');
      scene.actions([
        { label: 'Go dancing', goto: ['pav_disco_gopniks', 'anushka_dance'] },
      ]);
    } else {
      scene.text('"Hey Nush, want to dance?" you ask with a smile.');
      // TODO-QSP: dynamic text: She pauses before shaking her head. "Maybe some other time, <<$pcs_nickname>>."
      scene.text(`She pauses before shaking her head. "Maybe some other time, ${((s as any).pcs_nickname ?? 0)}."`);
      scene.text('One of the boys then starts asking about something that happened at the disco last week and she giggles and starts telling the story.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
            ]);
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterAnushkaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance2.jpg');
  scene.text('The two of you dance together, ignoring the boys around you. Most of them eventually get the hint and leave you to dance in peace, but some other guys will come over and try their luck instead. You ignore them as well and enjoy dancing together.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing with her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance3.jpg');
    scene.text('Anushka looks at some of the boys, then at you with a mischievous looks on her face. She starts dancing closer to you until she\'s dancing up against you, her body rubbing against yours. This gets the boys attention even more, though it does stop them from trying to get between you now.');
    qspCall(s, 'arousal', 'foreplay', 5, 'inhibition');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go back to just dancing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_gopniks', 'anushka_dance'] },
      { label: 'Grind against her', handler: (st: GameState) => {
    if (((s as any).pcs_hotcat ?? 0) >= 6) {
      scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance3.jpg');
      scene.text('You join in and start grinding back against her. The boys are loving the show as your movements go along with the beat of the music. Your hips are pressed together and your breasts mash into each other\'s while your legs are tangled, causing you to grind your respective crotches on each other\'s thighs.');
      scene.text('You can\'t tell if she\'s doing it because she\'s into you, she just wants to tease the boys, or both. You could push things a bit further…');
      qspCall(s, 'arousal', 'foreplay', 5, 'inhibition');
      qspCall(s, 'stat', '');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Go back to just dancing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_gopniks', 'anushka_dance'] },
          { label: 'Dry hump her', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (((s as any).npc_rel ?? 0)?.['A144'] >= 50  &&  ((s as any).pcs_hotcat ?? 0) >= 6  &&  ((s as any).anushkaQW ?? 0)?.['kiss'] > 5) {
      qspCall(s, 'fame', 'pav', 'sex', 1);
      scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance4.jpg');
      scene.text('As the two of you grind against each other, you grab her hips with your hands and disentangle your legs. With your legs now free of each other, you give her body a twist with your hands, keeping your hands on her hips until she\'s facing away from you. She leans back to dance against you, with her back rubbing against your breasts. You slide your hands around towards the front of her hips as you take a step back before pulling her hips towards you.');
      scene.text('She bends forward slightly as you start bouncing your hips against her ass. She loudly giggles at your antics and bucks her ass against you. This gets a lot of hoots and hollers from the boys watching, and by her movements you can tell she\'s getting turned on.');
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
        scene.text('You have your strapon in your purse. Maybe she would be up for getting one of her holes pounded?');
      }
      qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
      qspCall(s, 'stat', '');
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).stat ?? 0)?.['think_virgin'] === 0  &&  ((s as any).PCLoSkirt ?? 0) > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
        scene.actions([
          { label: 'You want her to fuck you', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance4.jpg');
    scene.text('She starts giggling as you hump her, obviously finding the whole situation amusing. The boys on the other hand seem to be fascinated by what they\'re watching.');
    scene.text('You lean forward to see if she wants to take this somewhere private. "I want you to take my strap-on and fuck me <i>hard</i> and <i>fast</i> with it."');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance5.jpg');
    scene.text('She turns and starts kissing you passionately, wrapping her arms around your neck as she does. You return the kiss in full and let your hands roam around her body. The two of you stand on the dance floor passionately making out, the hoots and hollers from the guys sounding far away as you get lost in the moment.');
    scene.text('You don\'t know how long you kiss for, but once you break the kiss, you give her a smile. "So is that a yes?"');
    scene.text('She grins. "Yeah, let\'s get out of here."');
    scene.text('She grabs you by the hand and leads you to the women\'s restroom on the other floor.');
    qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Go to the restroom', goto: ['anushkaev2', 'disco_restroom'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).mc_inventory ?? 0)?.['strapon'] === 1  &&  ((s as any).PCLoSkirt ?? 0) > 0  &&  ((s as any).npc_had_sex ?? 0)?.['A144']) {
        scene.actions([
          { label: 'You want to butt fuck her', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance4.jpg');
    scene.text('She starts giggling as you hump her, obviously finding the whole situation amusing. The boys on the other hand seem to be fascinated by what they\'re watching.');
    scene.text('"I want to strap one on and fuck your tight little ass with it until we both cum…" you whisper.');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance5.jpg');
    scene.text('She turns and starts kissing you passionately, wrapping her arms around your neck as she does.');
    scene.text('You return the kiss in full and let your hands roam around her body as the two of you stand on the dance floor passionately making out, the hoots and hollers from the guys sounding far away as you get lost in the moment.');
    scene.text('You don\'t know how long you kiss for, but once you break the kiss, you give her a smile. "So is that a yes?"');
    scene.text('She grins. "Yeah, let\'s get out of here."');
    scene.text('You grab her by the hand and lead her to one of the unlocked rooms upstairs.');
    qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Find an empty room', goto: ['anushkaev2', 'disco_emptyroom'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Go back to just dancing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_gopniks', 'anushka_dance'] },
        { label: 'Want to go fuck?', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance4.jpg');
    scene.text('She starts giggling as you hump her, obviously finding the whole situation amusing. The boys on the other hand seem to be fascinated by what they\'re watching.');
    scene.text('You lean forward to see if she wants to take this somewhere private. "So… Want to go somewhere more… private?"');
    qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Make out', handler: (st: GameState) => {
    qspCall(s, 'fame', 'pav', 'sex', 1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance5.jpg');
    scene.text('She turns and starts kissing you passionately, wrapping her arms around your neck as she does.');
    scene.text('You return the kiss in full and let your hands roam around her body as the two of you stand on the dance floor passionately making out, the hoots and hollers from the guys sounding far away as you get lost in the moment.');
    scene.text('You don\'t know how long you kiss for, but once you break the kiss, you give her a smile. "So is that a yes?"');
    scene.text('She grins. "Yeah, let\'s get out of here."');
    qspCall(s, 'arousal', 'kiss', 5, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Take her home', goto: ['anushkaev3', 'bedroom_lesbian'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance2.jpg');
      scene.text('As the two of you grind against each other, you grab her hips with your hands and disentangle your legs. With your legs now free of each other, you give her body a twist with your hands, keeping your hands on her hips until she\'s facing away from you.');
      scene.text('She leans back to dance against you, her back rubbing against your breasts as you slide your hands around the front of her hips before pulling her towards you.');
      scene.text('She bends forward slightly as you start bouncing your hips against her ass. She loudly giggles at your antics and bucks her ass against you.');
      scene.text('After the song ends, she reaches down to pull your hands off her hips and steps away from you before she starts dancing with a bit of a gap between you.');
      qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
      qspCall(s, 'arousal', 'end');
      scene.actions([
        { label: 'Go back to just dancing', goto: ['pav_disco_gopniks', 'anushka_dance'] },
      ]);
    }
  } },
        ]);
      }
      scene.actions([
        { label: 'Do something else', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      scene.img('images/locations/pavlovsk/community/disco/school_kids/anushka_dance2.jpg');
      scene.text('You join in and start grinding back against her. The boys are loving the show as your movements go along with the beat of the music. Your hips are pressed together and your breasts mash into each other\'s while your legs are tangled, causing you to grind your respective crotches on each other\'s thighs.');
      scene.text('After a few songs have played, she breaks away from you and starts dancing further apart again, wiggling her ass to tease the boys that are clustered around you.');
      qspCall(s, 'arousal', 'foreplay', 5, 'exhibitionism');
      qspCall(s, 'stat', '');
      if (((s as any).hour ?? 0) >= 20) {
        scene.actions([
          { label: 'Go back to just dancing', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_gopniks', 'anushka_dance'] },
        ]);
      }
      scene.actions([
        { label: 'Do something else', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'end');
  }, goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enterAnushkaWalkhome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/walkhome_anushka.jpg');
  if (qspFunc(s, 'homes_properties', 'can_live_here', 'parents_home') !== 0) {
    scene.text('Anushka takes you by the hand and the two of you walk the streets heading towards the apartment complex. She chats about the band, but you don\'t really remember most of what she said; in fact, most of the walk home is a blur to you.');
    scene.text('Once you get to the apartment complex, she helps you up the stairs to your floor and even helps you with your keys to unlock the door. "Okay, here we are. Maybe try not to over do it next time?"');
    scene.text('She gives you a quick hug and starts walking back down the stairs.');
    scene.actions([
      { label: 'Go inside', goto: ['korrPar', ''] },
    ]);
  } else {
    scene.text('Anushka takes you by the hand and the two of you walk the streets heading towards the apartment complex. She chats about the band, but you don\'t really remember most of what she said; in fact, most of the walk home is a blur to you.');
    scene.text('Once you get to the apartment complex, she hugs you "Okay, well I hope you don\'t feel too bad tomorrow."');
    scene.text('She squeezes you gently before releasing you, and starting to walk home.');
    scene.actions([
      { label: 'Continue', goto: ['pav_complex', 'start'] },
    ]);
  }
  scene.build();
}

function enterAlyona(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'npc_relationship', 'modify', 'A143', 'like', 1, 'pav_disco');
  qspCall(s, 'stat', '');
  if ((Math.floor(Math.random() * 4) + 1) === 1) {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/alyona_dance1.jpg');
    scene.text('You see Alyona out on the dance floor, Unlike the other girls, she\'s wearing a pair of jeans and a tank top instead of a skirt or dress. A guy is currently trying to dance with her, and she seems torn between enjoying herself and telling him to fuck off.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Go out on the dance floor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/community/disco/school_kids/alyona_dance1.jpg');
    if (((s as any).npc_rel ?? 0)?.['A146'] >= 50  &&  ((s as any).fame ?? 0)?.['pav_slut'] < 300) {
      scene.text('As you head towards her, she breaks away from the guy and starts dancing with you instead. He looks very disappointed, but then tries to dance with both of you.');
      // TODO-QSP: dynamic text: The two of you move away from him and he takes the hint and leaves. "Thanks <<$p...
      scene.text(`The two of you move away from him and he takes the hint and leaves. "Thanks ${((s as any).pcs_nickname ?? 0)}. I thought he was going to start dry humping me at any minute."`);
      scene.text('You laugh. "What, you don\'t like him? He was kind of cute."');
      scene.text('She glances over at him trying to dance with another girl. "Yeah, I guess. I\'m just not in the mood to be hassled by a guy. I just want to dance and have fun, you know?"');
      scene.text('You nod at her as the two of you just cut loose to the song and dance.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        { label: 'Dance with her', goto: ['pav_disco_gopniks', 'alyona_dance'] },
      ]);
    } else {
      if (((s as any).grupTipe ?? 0) === 5) {
        scene.text('When she sees you coming, she flips you off before turning her attention to the guy and dancing with him. You get the message and move away.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A146'] <= 20  ||  ((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
          scene.text('When she sees you coming, she flips you off before turning her attention to the guy and dancing with him. You get the message and move away.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          scene.text('As you head towards her, she breaks away from the guy and starts dancing by you instead. He looks very disappointed, but then tries to dance with both of you.');
          scene.text('The two of you move away from him and he takes the hint and leaves. "I thought he was going to start dry humping me at any minute."');
          scene.text('You laugh. "What, you don\'t like him? He was kind of cute."');
          scene.text('She glances over at him trying to dance with another girl. "Yeah, I guess. I\'m just not in the mood to be hassled by a guy. I just want to be left alone to dance and have fun, you know?"');
          scene.text('You nod at her as she moves away from you slightly but keeps dancing with you and the two of you just cut loose to the song and dance.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        }
      }
    }
  } },
    ]);
  } else {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('Alyona is hanging out in the dark corner of the hall with the other gopniks. It\'s dim and hard to make out details, but it looks like she\'s openly drinking from a large bottle. Considering her reputation, it\'s certainly alcohol of some sort.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Hang out with her', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    if (((s as any).grupTipe ?? 0) === 5  &&  ((s as any).npc_rel ?? 0)?.['A143'] < 50) {
      scene.text('When she sees you coming, she flips you off and gives you a hard stare. You get the message and move away.');
      scene.actions([
        { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      ]);
    } else {
      if (((s as any).fame ?? 0)?.['pav_slut'] >= 300) {
        scene.text('She doesn\'t say a word to you. She only glares at you and starts playing with the knife she always carries. Getting the message, you leave.');
        scene.actions([
          { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
        ]);
      } else {
        if (((s as any).npc_rel ?? 0)?.['A143'] <= 20) {
          scene.text('"Hey Alyona! What are you up to?"');
          scene.text('She coldly glances at you. "Fuck off, cunt!"');
          scene.text('You shake your head. "Don\'t be like that. I just came over to see how you were doing."');
          scene.text('You try and talk to her, but she doesn\'t really have much to say to you other than offering a few threats.');
          scene.actions([
            { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
          ]);
        } else {
          if (((s as any).npc_rel ?? 0)?.['A143'] < 50) {
            scene.text('"Hey Alyona! What are you up to?"');
            scene.text('"Just drinking and having fun," she says as she takes another swig from the bottle. She already looks pretty drunk.');
            scene.text('The two of you talk, mostly about the music she\'s listened to recently.');
            scene.actions([
              { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
              { label: 'Ask her to dance', handler: (st: GameState) => {
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('"Want to dance?" you ask with a smile.');
    scene.text('She shakes her head and gets up, a little unsteady on her feet. "No, I need to go and piss."');
    scene.text('She then stumbles off towards the restrooms.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Follow her', goto: ['pav_discoev1', 'alyona'] },
    ]);
  } },
            ]);
          } else {
            if (((s as any).grupTipe ?? 0) === 4) {
              scene.text('"Hey Alyona! What are you up to?"');
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, nothing much. Just drinking and having fun," she says wi...
              scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, nothing much. Just drinking and having fun," she says with a grin and takes another swig from the bottle. She already looks pretty drunk.`);
              scene.text('The two of you talk, mostly about the music she\'s listened to recently before she offers you the bottle. "Want a drink?"');
            } else {
              scene.text('"Hey Alyona! What are you up to?"');
              // TODO-QSP: dynamic text: "Hey <<$pcs_nickname>>, nothing much. Just drinking and having fun. Why do you c...
              scene.text(`"Hey ${((s as any).pcs_nickname ?? 0)}, nothing much. Just drinking and having fun. Why do you care anyway? Don't you have your own kind to hang out with?" she asks as she takes another swig from the bottle. She already looks pretty drunk.`);
              scene.text('You shrug. "I just wanted to see how you were is all."');
              scene.text('"Peachy," she says and takes another swig of the bottle, but you manage to get her talking and slow down her drinking.');
              scene.text('The two of you talk, mostly about the music she\'s listened to recently before she offers you the bottle. "Want a drink?"');
            }
            qspCall(s, 'willpower', 'drink', 'resist', 'medium');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'No thanks [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big143.jpg');
    scene.text('You shake your head. "No thanks. Maybe later."');
    scene.text('She shrugs and takes another drink. "Suit yourself."');
    scene.text('You keep talking, but she\'s starting to really get drunk and mostly stops paying attention to you.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Sure', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka', 1);
    (s as any).grupvalue[4] = ((s as any).grupvalue[4] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/community/disco/drink_beer.jpg');
    scene.text('You take the offered bottle and take a swig. "Thanks."');
    scene.text('It burns as it goes down. Cheap vodka, if you had to guess.');
    scene.text('She grins and takes another drink when you hand it back. "The only thing that makes this all tolerable."');
    scene.text('You keep talking for a few minutes before she gets up, a little unsteady on her feet. "I need to piss."');
    scene.text('She then stumbles off towards the restrooms.');
    scene.actions([
      { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
      { label: 'Follow her', goto: ['pav_discoev1', 'alyona'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  } },
    ]);
  }
  scene.build();
}

function enterAlyonaDance(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_stam = ((s as any).pcs_stam ?? 0) - (5);
  qspCall(s, 'sweat', 'add', 3);
  (s as any).fat = ((s as any).fat ?? 0) - (1);
  qspCall(s, 'exp_gain', 'danc', 1);
  (s as any).frost = 0;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/community/disco/school_kids/alyona_dance2.jpg');
  scene.text('The two of you dance together, but she doesn\'t seem to be aware that you\'re there most of the time and just dances like she\'s the only one on the dance floor. She doesn\'t seem to care, though.');
  if (((s as any).hour ?? 0) >= 20) {
    scene.actions([
      { label: 'Keep dancing', goto: ['pav_disco_gopniks', 'alyona_dance'] },
    ]);
  }
  scene.actions([
    { label: 'Do something else', goto: ['pav_disco_classmates', 'classmates'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'vitek_dan_vasily':
      enterVitekDanVasily(s, scene);
      break;
    case 'vitek_dan_vasily_get_drunk':
      enterVitekDanVasilyGetDrunk(s, scene);
      break;
    case 'radomir':
      enterRadomir(s, scene);
      break;
    case 'radomir_dance':
      enterRadomirDance(s, scene);
      break;
    case 'roman':
      enterRoman(s, scene);
      break;
    case 'valentin':
      enterValentin(s, scene);
      break;
    case 'arkadi':
      enterArkadi(s, scene);
      break;
    case 'niko':
      enterNiko(s, scene);
      break;
    case 'lavrenti':
      enterLavrenti(s, scene);
      break;
    case 'lavrenti_dance':
      enterLavrentiDance(s, scene);
      break;
    case 'pauline':
      enterPauline(s, scene);
      break;
    case 'lena_lera':
      enterLenaLera(s, scene);
      break;
    case 'lena_lera_dance':
      enterLenaLeraDance(s, scene);
      break;
    case 'nush':
      enterNush(s, scene);
      break;
    case 'anushka_dance':
      enterAnushkaDance(s, scene);
      break;
    case 'anushka_walkhome':
      enterAnushkaWalkhome(s, scene);
      break;
    case 'alyona':
      enterAlyona(s, scene);
      break;
    case 'alyona_dance':
      enterAlyonaDance(s, scene);
      break;
    default:
      enterVitekDanVasily(s, scene);
      break;
  }
}

export const pav_disco_gopniks: LocationDef = {
  name: 'pav_disco_gopniks',
  title: 'Vitek, Dan and Vasily are hanging out in the dark corner of ',
  region: 'pavlovsk',
  description: ['Vitek, Dan and Vasily are hanging out in the dark corner of the hall with the other gopniks. It\'s dimly lit and hard to make out details, but it looks like they\'re sharing some beers they\'ve smuggled in.'],
  enter: enter,
};
