import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enter(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 22) {
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('Captain Katalkin is currently handling some cases.');
    if ((!((s as any).katalkinSexOnce ?? 0))) {
      if ((!((s as any).schtraf ?? 0))) {
        scene.text('Captain Katalkin looks at you with some interest before he smiles.');
        scene.text('"Hello miss, I was just about to have a break. Would you like to join me for a cup of tea?"');
        scene.actions([
          { label: 'Drink some tea', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You agree and sit at a table near his desk as he pours two cups of tea. He places them on the table and sits down next to you.');
    scene.text('As you chat about Pavlovsk, you can tell he\'s practically undressing you with his eyes before you suddenly feel his hand resting on your thigh and gently squeezing it.');
    scene.text('You quietly begin to sputter some objections as he moves closer to you and cuts you off. "You\'re cute, miss. You have to forgive me. Us police officers are just people too…"');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_station', 'station_inside');
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t move', goto: ['katalkinSex', 'sex'] },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: Captain Katalkin eyes you up with an uninterested look. "You have to pay a fine ...
        scene.text(`Captain Katalkin eyes you up with an uninterested look. "You have to pay a fine of ${qspFunc(s, 'money', 'string_price', ((s as any).schtraf || ''))}, miss. Once you pay, you can go."`);
        if (qspFunc(s, 'money', 'can_afford', ((s as any).schtraf ?? 0), 'cash')) {
          scene.actions([
            { label: 'Pay the fine', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).schtraf ?? 0), 'cash');
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You agree to pay the fine and put the money on his desk after counting it. He swipes the money away, putting it in a box before he returns to his duties. As far as he\'s concerned, you\'re no longer there.');
    scene.actions([
      { label: 'Leave the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'You can\'t pay the fine', handler: (st: GameState) => {
    qspCall(st, 'money', 'set', 0, 'cash');
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    (st as any).kutime = 24;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You shake your head. "I\'m sorry officer, but I can\'t afford that."');
    scene.text('He looks at you indifferently. "In that case, you\'ll spend the next 24 hours in jail."');
    scene.text('He collects your possessions and confiscates the money you do have before guiding you to a prison cell.');
    scene.actions([
      { label: 'Enter the prison cell', goto: ['kutuzka', ''] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Beg', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You try to look cute and innocent for him. "Please sir, I can\'t go to jail! Can\'t you let me go just this once?"');
    scene.text('He checks to make sure the room is empty before he turns to you. His eyes are exploring your body as he puts his sweaty hand on your knee.');
    scene.text('"Well, we might be able to arrange something…"');
    if (qspFunc(s, 'money', 'can_afford', ((st as any).schtraf ?? 0), 'cash')) {
      scene.actions([
        { label: 'Pay the fine', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).schtraf ?? 0), 'cash');
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You tell him you\'ll pay the fine and put the money on his desk after counting it.');
    scene.text('He disappointedly swipes the money away before putting it in a box and returning to his duties. As far as he\'s concerned, you\'re no longer there.');
    scene.actions([
      { label: 'Leave the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Spend the night in jail', handler: (st: GameState) => {
    qspCall(st, 'money', 'set', 0);
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    (st as any).kutime = 24;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You shake your head. "I\'m sorry officer, but I can\'t afford that."');
    scene.text('He looks at you indifferently. "In that case, you\'ll spend the next 24 hours in jail."');
    scene.text('He collects your possessions and confiscates the money you do have before guiding you to a prison cell.');
    scene.actions([
      { label: 'Enter the prison cell', goto: ['kutuzka', ''] },
    ]);
  } },
      ]);
    }
    qspCall(st, 'willpower', 'sex', 'self', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Accept his offer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Accept his offer', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katalkinSex', 'sex');
  } },
      ]);
    }
  } },
        ]);
      }
    } else {
      if (((s as any).katalkinSexDay ?? 0) < ((s as any).daystart ?? 0)) {
        if ((!((s as any).schtraf ?? 0))) {
          // TODO-QSP: dynamic text: Captain Katalkin looks at you with some interest before he gives you a smile. "H...
          scene.text(`Captain Katalkin looks at you with some interest before he gives you a smile. "Hi there ${((s as any).pcs_nickname || '')}, I was just about to have a break. Would you like to join me for a cup of tea?"`);
          scene.text('From your previous experience with him, you know he\'s probably not just talking about tea.');
          scene.actions([
            { label: 'Drink some tea', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You agree and sit at a table near his desk as he pours two cups of tea. He places them on the table and sits down next to you.');
    scene.text('As you chat about Pavlovsk, you can tell he\'s practically undressing you with his eyes before he moves closer and cups your breasts through your clothing.');
    // TODO-QSP: dynamic text: "Let''s cut the crap, <<$pcs_nickname>>…" he whispers. "Did you come here just s...
    scene.text(`"Let's cut the crap, ${((st as any).pcs_nickname || '')}…" he whispers. "Did you come here just so you could have some fun with me again?"`);
    scene.actions([
      { label: 'Put your hand on his groin', goto: ['katalkinSex', 'sexgo'] },
      { label: 'Don\'t move', goto: ['katalkinSex', 'sex'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).schtraf ?? 0) > 0) {
            // TODO-QSP: dynamic text: Captain Katalkin has a greedy smile on his face. "Well <<$pcs_nickname>>, I see ...
            scene.text(`Captain Katalkin has a greedy smile on his face. "Well ${((s as any).pcs_nickname || '')}, I see you have to pay a fine. Do you have the money or are you going to entertain me to make it go away?"`);
            if (qspFunc(s, 'money', 'can_afford', ((s as any).schtraf ?? 0), 'cash')) {
              qspCall(s, 'willpower', 'sex', 'resist', 'hard');
              if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
                scene.actions([
                  { label: 'Give him the money', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
                ]);
              } else {
                scene.actions([
                  { label: 'Give him the money', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).schtraf ?? 0), 'cash');
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You see a tinge of disappointment in his face when you give him the money.');
    // TODO-QSP: dynamic text: "Oh. Very well then, miss <<$pcs_lastname>>. You''re free to go."
    scene.text(`"Oh. Very well then, miss ${((st as any).pcs_lastname || '')}. You're free to go."`);
    scene.actions([
      { label: 'Leave the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
                ]);
              }
            } else {
              scene.actions([
                { label: 'Spend the night in jail', handler: (st: GameState) => {
    qspCall(st, 'money', 'set', 0);
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    (st as any).kutime = 24;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You shake your head. "I\'m sorry officer, but I can\'t afford that."');
    scene.text('He looks somewhat disappointed. "In that case, you\'ll spend the next 24 hours in jail."');
    scene.text('He collects your possessions and confiscates the money you do have before guiding you to a prison cell.');
    scene.actions([
      { label: 'Enter the prison cell', goto: ['kutuzka', ''] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Entertain him', goto: ['katalkinSex', 'sex'] },
            ]);
          }
        }
      } else {
        if ((!((s as any).schtraf ?? 0))) {
          scene.text('Captain Katalkin is sitting in his chair, working on some documents. He gives you a friendly nod but keeps working, indicating that he doesn\'t want to be disturbed right now.');
        } else {
          if (((s as any).schtraf ?? 0) > 0) {
            // TODO-QSP: dynamic text: Captain Katalkin pretends he''s looking through some files before he rips up a p...
            scene.text(`Captain Katalkin pretends he's looking through some files before he rips up a piece of paper and grins at you. "Good news! It seems like your fine has been paid in full, miss ${((s as any).pcs_lastname || '')}."`);
            scene.actions([
              { label: 'Say goodbye', handler: (st: GameState) => {
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You give him a weak smile. "Thank you, officer. Have a nice day."');
    scene.text('Captain Katalkin nods as he shoos you away. "Same to you, miss. Now if you don\'t mind, I have a lot of work to do."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_station', 'station_inside'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  } else {
    scene.text('Captain Katalkin is sitting at a table with two of his colleagues. The table has a nice assortment of snacks and vodka. They look like they\'ve been drinking…');
    if (((s as any).katalkinSexOnce ?? 0) === 1) {
      if ((!((s as any).katGangMeet ?? 0))) {
        // TODO-QSP: dynamic text: When Katalkin sees you walk by, he drunkenly waves you over. "<<$pcs_nickname>>!...
        scene.text(`When Katalkin sees you walk by, he drunkenly waves you over. "${((s as any).pcs_nickname || '')}! Come here, let me fuckin' introduce you to my boys!"`);
        scene.actions([
          { label: 'Sit down with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 0;
    (st as any).katGangMeet = 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You join the officers at the table, who have clearly been drinking for a while already. They immediately pour you a glass of vodka.');
    scene.text('"This is Pasha, and the other guy is Sergei…" Katalkin slurs. "They\'re good officers, the best Pavlovsk has to offer. Let\'s have a toast! To meeting new friends!"');
    scene.actions([
      { label: 'Raise your glass', handler: (st: GameState) => {
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katalkinAlko', ''] },
    ]);
  } },
        ]);
      } else {
        // TODO-QSP: dynamic text: When Katalkin sees you walk by, he drunkenly waves you over. <<$pcs_nickname>>! ...
        scene.text(`When Katalkin sees you walk by, he drunkenly waves you over. ${((s as any).pcs_nickname || '')}! Come over here and have a drink with me and my boys!"`);
        scene.actions([
          { label: 'Sit down with them', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You join the officers at the table, who clearly have been drinking for a while already. They immediately pour you a glass of vodka and have a swig from their own.');
    scene.actions([
      { label: 'Drink the vodka', handler: (st: GameState) => {
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['katalkinAlko', ''] },
    ]);
  } },
        ]);
      }
    } else {
      if ((!((s as any).katalkinSexOnce ?? 0))) {
        if ((!((s as any).schtraf ?? 0))) {
          // TODO-QSP: dynamic text: When Katalkin sees you walk by, he drunkenly waves you over. <<$pcs_nickname>>! ...
          scene.text(`When Katalkin sees you walk by, he drunkenly waves you over. ${((s as any).pcs_nickname || '')}! Come over here and join me for a drink!"`);
          scene.actions([
            { label: 'Sit down with him', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You decline the drink, but don\'t mind joining him for a chat. Almost immediately, he scoots his chair close to yours and puts his hand on your thigh, slowly rubbing and squeezing his way upwards.');
    scene.text('He clearly didn\'t invite you over to just have a chat.');
    qspCall(st, 'willpower', 'sex', 'resist', 'hard');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'pav_station', 'station_inside');
  } },
      ]);
    }
    scene.actions([
      { label: 'Don\'t move', goto: ['katalkinSex', 'sex'] },
    ]);
  } },
          ]);
        } else {
          if (((s as any).schtraf ?? 0) > 0) {
            // TODO-QSP: dynamic text: Captain Katalkin looks at you with an uninterested look in his eyes. Even though...
            scene.text(`Captain Katalkin looks at you with an uninterested look in his eyes. Even though he's drunk, he won't let you off the hook. "You have to pay a fine of ${qspFunc(s, 'money', 'string_price', ((s as any).schtraf || ''))}. Once you pay, you can go."`);
            scene.text('He checks to make sure the room is empty before he turns to face you. His eyes are exploring your body as he puts his sweaty hand on your knee. "If you don\'t have the money, well, we might be able to arrange something…"');
            if (qspFunc(s, 'money', 'can_afford', ((s as any).schtraf ?? 0), 'cash')) {
              scene.actions([
                { label: 'Pay the fine', handler: (st: GameState) => {
    qspCall(st, 'money', 'pay', ((st as any).schtraf ?? 0), 'cash');
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You agree to pay the fine and put the money on his desk after counting it. He swipes the money away before putting it in a box. As far as he\'s concerned, you\'re no longer there.');
    scene.actions([
      { label: 'Leave the police station', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  }, goto: ['pav_train_hall', ''] },
    ]);
  } },
              ]);
            } else {
              scene.actions([
                { label: 'You can\'t pay the fine', handler: (st: GameState) => {
    qspCall(st, 'money', 'set', 0);
    (st as any).schtraf = 0;
    (st as any).katalkinNoexit = 0;
    (st as any).kutime = 24;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/katalkin/katalkin.jpg');
    scene.text('You shake your head. "I\'m sorry captain, but I can\'t afford that."');
    scene.text('He looks at you indifferently. "In that case, you spend the next 24 hours in jail."');
    scene.text('He collects your possessions and does an extra thorough frisk search, the alcohol giving him courage to touch you in places and in a way that would normally be considered widely inappropriate.');
    scene.text('He nods contently and gives you a hard slap on the ass before he confiscates the money you do have and guides you to a prison cell.');
    scene.actions([
      { label: 'Enter the prison cell', goto: ['kutuzka', ''] },
    ]);
  } },
              ]);
            }
            qspCall(s, 'willpower', 'sex', 'self', 'hard');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Accept his offer', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Accept his offer', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspGoto(st, 'katalkinSex', 'sex');
  } },
              ]);
            }
          }
        }
      }
    }
  }
  if ((!((s as any).katalkinNoexit ?? 0))) {
    qspGoto(s, 'pav_station', 'station_inside');
    scene.actions([
      { label: 'Leave his office', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
  } },
    ]);
  }
  scene.build();
}

export const katalkin: LocationDef = {
  name: 'katalkin',
  title: 'Captain Katalkin is currently handling some cases.',
  region: 'other',
  description: ['Captain Katalkin is currently handling some cases.'],
  enter: enter,
};
