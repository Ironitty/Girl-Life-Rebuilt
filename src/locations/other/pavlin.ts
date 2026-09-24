import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterPavlbar(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
  scene.text('You stand up, put your clothes back on and step out of the room.');
  // TODO-QSP: dynamic text: You go to the bar and see <<$npc_nickname[''A217'']>> sitting in a booth in the ...
  scene.text(`You go to the bar and see ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} sitting in a booth in the corner.`);
  if (((s as any).pavprosmmf ?? 0) === 1) {
    // TODO-QSP: dynamic text: "They sure left with a big smile on their faces. Good job, <<$pcs_nickname>>," h...
    scene.text(`"They sure left with a big smile on their faces. Good job, ${((s as any).pcs_nickname ?? '')}," he says as he hands you ${qspFunc(s, 'money', 'string_profit', 1200)}.`);
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
    ]);
  } else {
    if (((s as any).pavprosff ?? 0) === 1) {
      if (((s as any).pavproslate ?? 0) === 1) {
        scene.text('"You\'re late," he frowns as he looks at his watch.');
        scene.text('"I-I just needed to clean up," you stammer, trying to placate him.');
        scene.text('He looks you over, noticing your messy hair and your lack of makeup.');
        // TODO-QSP: dynamic text: "Don''t make a habit of it," he says as he hands you <<$func(''money'', ''string...
        scene.text(`"Don't make a habit of it," he says as he hands you ${qspFunc(s, 'money', 'string_profit', 900)}.`);
        scene.actions([
          { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
        ]);
      } else {
        scene.text('He looks you over, noticing your messy hair and your smeared makeup.');
        // TODO-QSP: dynamic text: "You look like someone used your face to have a lot of fun," he says with a smir...
        scene.text(`"You look like someone used your face to have a lot of fun," he says with a smirk as he hands you ${qspFunc(s, 'money', 'string_profit', 900)}.`);
        scene.actions([
          { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
        ]);
      }
    } else {
      if (((s as any).custangry ?? 0) === 1  &&  (!((s as any).custleft ?? 0))) {
        scene.actions([
          { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npc_nickname ?? 0)?.['A217'] ?? '' ?? ''), handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. H-He raped me. He even forced himself into my ass."');
      // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> stands up and leans over you. He looks furious. "Tha...
      scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} stands up and leans over you. He looks furious. "That was an important customer. He came here to complain about your behaviour. You had better learn to please your customers or there's going to be hell to pay!"`);
      // TODO-QSP: dynamic text: Not wanting to suffer through another manhandling, you meekly hang your head. "I...
      scene.text(`Not wanting to suffer through another manhandling, you meekly hang your head. "I-I'm sorry, ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}... I-I didn't know..."`);
      scene.text('"You can forget about getting paid for this. Now get out of my sight!"');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. H-He raped me. He even forced himself into my ass."');
      // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> looks furious as he stands up and marches out the do...
      scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} looks furious as he stands up and marches out the door. Unsure what to do, you remain seated and wait for him to return.`);
      scene.text('"He\'s nowhere to be seen!" he says angrily as he returns to the table. "That bastard didn\'t pay to fuck your ass. If he shows his face again, <i>I\'ll</i> deal with him."');
      scene.text('"Here\'s your money. You come straight to me next time if things get out of hand again."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGetpaidpros(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
        ]);
      } else {
        if (((s as any).custangry ?? 0) === 1  &&  ((s as any).custleft ?? 0) === 1) {
          scene.actions([
            { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npc_nickname ?? 0)?.['A217'] ?? '' ?? ''), handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. So I fought back and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> stands up and leans over you. He looks furious. "Tha...
      scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} stands up and leans over you. He looks furious. "That was an important customer. He came here to demand his money back. You had better learn to please your customers or there's going to be hell to pay!"`);
      // TODO-QSP: dynamic text: Not wanting to suffer through another manhandling, you meekly hang your head. "I...
      scene.text(`Not wanting to suffer through another manhandling, you meekly hang your head. "I-I'm sorry, ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}... I-I didn't know..."`);
      scene.text('"You can forget about getting paid for this. Now get out of my sight!"');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He hurt me. So I fought back and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> looks furious as he stands up and marches out the do...
      scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} looks furious as he stands up and marches out the door. Unsure what to do, you remain seated and wait for him to return.`);
      scene.text('"He\'s nowhere to be seen!" he says angrily as he returns to the table. "If he shows his face again, <i>I\'ll</i> deal with him."');
      scene.text('"Here\'s your money. You come straight to me next time if things get out of hand again."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGetpaidpros(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
          ]);
        } else {
          if (((s as any).custangry ?? 0) === 0  &&  ((s as any).custleft ?? 0) === 1) {
            scene.actions([
              { label: '', labelFn: (s: GameState) => 'Go to ' + String(((s as any).npc_nickname ?? 0)?.['A217'] ?? '' ?? ''), handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 6) + 0))) {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He threw me into the wall. So I started screaming and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> stands up and leans over you. He looks furious. "Tha...
      scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} stands up and leans over you. He looks furious. "That was an important customer. He came here to demand his money back. You had better learn to please your customers or there's going to be hell to pay." He hisses at you.`);
      // TODO-QSP: dynamic text: Not wanting to suffer through another manhandling, you hang your head meekly and...
      scene.text(`Not wanting to suffer through another manhandling, you hang your head meekly and stammer: "I-I'm sorry ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}. I-I didn't know..."`);
      scene.text('"You can forget about getting paid for this. Now get out of my sight."');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    } else {
      scene.text('He looks none too pleased as you approach and gingerly sit next to him.');
      scene.text('"Explain yourself," he says sternly, noticing your wince as you sit down. His hands are clenched into fists on the table.');
      scene.text('"H-He refused to use a condom. We argued and then he... He threw me into the wall. So I started screaming and told him to leave."');
      // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> looks furious as he stands up and marches out the do...
      scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} looks furious as he stands up and marches out the door. Unsure what to do, you remain seated and wait for him to return.`);
      scene.text('"He\'s nowhere to be seen!" he says angrily as he returns to the table. "If he shows his face again, <i>I\'ll</i> deal with him."');
      scene.text('"Here\'s your money. You come straight to me next time if things get out of hand again."');
      { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGetpaidpros(st, scene); (st as any).locArgs = __savedLocArgs; }
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
      ]);
    }
  } },
            ]);
          } else {
            // TODO-QSP: dynamic text: He hands you <<$func(''money'', ''string_profit'', 750)>>.
            scene.text(`He hands you ${qspFunc(s, 'money', 'string_profit', 750)}.`);
            scene.actions([
              { label: 'Continue', goto: ['pavlin', 'pavlbarcont'] },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPavlbarcont(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
  if (((s as any).npc_rel ?? 0)?.['A217'] === -1) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetpaidpros(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
    scene.text('You refuse to even take a look at him as you swipe the money from his hand and walk away.');
    scene.actions([
{ label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
]);
    return;
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] === 15) {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).PavlinQW = 8;
    qspCall(s, 'npc_relationship', 'set', 'A217', 20);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetpaidpros(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You tell <<$npc_nickname[''A217'']>> that you were basically assraped by the cli...
    scene.text(`You tell ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} that you were basically assraped by the client.`);
    scene.text('"What the fuck? He didn\'t pay for that!" he says before he storms out to find the client.');
    scene.text('<br>');
    scene.text('...');
    scene.text('<br>');
    scene.text('10 minutes later, he returns with his fists covered in blood.');
    scene.text('"You\'re lucky I caught up with him. Why did you allow this to happen?! You should have checked with <i>me</i> before offering your ass to a client!"');
    scene.text('You try to explain that you didn\'t offer anything, but he talks over you.');
    scene.text('"If I had known you were into the more kinky stuff, I would have charged more for you! I can\'t pay you extra for today, but if you want to earn an extra buck in the future, let me know and I\'ll arrange some of my more kinky clients for you."');
    scene.actions([
{ label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
]);
    return;
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] > 6) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetpaidpros(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
    scene.text('"This was not what we agreed to," you say. "I need more..."');
    // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> takes your hand and moves it towards his crotch. "Su...
    scene.text(`${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} takes your hand and moves it towards his crotch. "Sure, you can have more, but you need to do some extra work for that."`);
    qspCall(s, 'willpower', 'bj', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Be content with what you have', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Be content with what you have', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('You wiggle your hand free from his grip, take the money and get up.');
    scene.text('"This really is the last time you screwed me over!" you say.');
    // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> is not really worried. He''s confident you''ll be ba...
    scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} is not really worried. He's confident you'll be back.`);
    scene.text('He leans back in his chair and checks out your ass as you\'re leaving.');
    scene.actions([
      { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Do the extra work', handler: (st: GameState) => {
    qspCall(st, 'fame', 'pav', 'prostitute', 1);
    if (((st as any).npc_rel ?? 0)?.['A217'] >= 10) {
      qspCall(st, 'npcStat', 'A217');
      scene.img('images/characters/pavlovsk/pavlin/pavlin_bj.jpg');
      scene.text('"Fine," you say and take out his half-erect cock.');
      scene.text('"Why don\'t you use your mouth today?"');
      scene.text('You look around to make sure nobody is watching before you lean over.');
      scene.text('After a few minutes, he tells you he\'s cumming. You don\'t want to make a mess here, so you just keep it in your mouth and swallow all the spunk.');
      // TODO-QSP: dynamic text: You sit straight again and look at <<$npc_nickname[''A217'']>>.
      scene.text(`You sit straight again and look at ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}.`);
      qspCall(st, 'arousal', 'bj', 5, 'prostitution');
      qspCall(st, 'cum_call', 'mouth_swallow', ((st as any).npcID ?? 0), 1);
    } else {
      scene.img('images/characters/pavlovsk/pavlin/pavlin_hj.jpg');
      scene.text('"Fine" you say and take out his half-erect cock.');
      scene.text('After two minutes, you can feel him cumming all over your hand.');
      qspCall(st, 'arousal', 'hj', 5, 'prostitution');
    }
    // TODO-QSP: dynamic text: With a stupid grin on his face, he reaches into his pocket and hands you an extr...
    scene.text(`With a stupid grin on his face, he reaches into his pocket and hands you an extra ${qspFunc(s, 'money', 'string_profit', 250)}.`);
    qspCall(st, 'money', 'earn', 250);
    qspCall(st, 'arousal', 'end');
    if (((st as any).npc_rel ?? 0)?.['A217'] <= 15  ||  ((st as any).npc_rel ?? 0)?.['A217'] > 19) {
      qspCall(st, 'npc_relationship', 'modify_exact', 'A217', 1);
    }
    scene.actions([
      { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
    ]);
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] <= 5) {
    scene.text('You\'re sure the money he received from the customer was more than double this amount, but you don\'t feel like arguing.');
    scene.text('You thank him and go back to the hotel lobby.');
    qspCall(s, 'npc_relationship', 'modify_exact', 'A217', 1);
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterGetpaidpros(s, scene); (s as any).locArgs = __savedLocArgs; }
    qspCall(s, 'stat', '');
    scene.actions([
{ label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
]);
    return;
  }
  if (((s as any).npc_rel ?? 0)?.['A217'] === 6  &&  (!((s as any).pavlevent ?? 0))) {
    scene.text('You\'re sure the money he received from the customer was more than double this amount and bring it up.');
    scene.text('I believe I should get more money. I\'m doing all the work here and I know these guys pay you much more than this."');
    // TODO-QSP: dynamic text: The moment you mention the money, a darkness appears on <<$npc_nickname[''A217''...
    scene.text(`The moment you mention the money, a darkness appears on ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''}'s face where there was once a smile. However, his smile reappears as fast as it disappeared.`);
    // TODO-QSP: dynamic text: "You''re right, <<$pcs_firstname>>. Come with me to my car and I''ll give you a ...
    scene.text(`"You're right, ${((s as any).pcs_firstname ?? '')}. Come with me to my car and I'll give you a bonus today."`);
    // TODO-QSP: dynamic text: You''re excited at the prospect of finally getting the money you earned, but are...
    scene.text(`You're excited at the prospect of finally getting the money you earned, but are unsure if you can trust ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''}.`);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'willpower', 'misc', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Just accept the amount for today', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Just accept the amount for today', handler: (st: GameState) => {
    (st as any).PavlinQW = 2;
    qspCall(st, 'willpower', 'misc', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    { const __savedLocArgs = (st as any).locArgs; (st as any).locArgs = ['', ]; enterGetpaidpros(st, scene); (st as any).locArgs = __savedLocArgs; }
    qspCall(st, 'stat', '');
    scene.text('"I actually have a doctor\'s appointment in a few minutes, but I still expect that bonus," you say.');
    // TODO-QSP: dynamic text: "Sure <<$pcs_firstname>>, no problem," he replies with a knowing smile.
    scene.text(`"Sure ${((st as any).pcs_firstname ?? '')}, no problem," he replies with a knowing smile.`);
    scene.actions([
      { label: 'Go back to the hotel lobby', goto: ['pav_hotel', 'skip_resepevent'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Follow him outside', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/pavlin/pavlin_violent.jpg');
    // TODO-QSP: dynamic text: You follow <<$npc_nickname[''A217'']>> outside towards the parking lot.
    scene.text(`You follow ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} outside towards the parking lot.`);
    // TODO-QSP: dynamic text: Once you turn the corner and are out of sight, <<$npc_nickname[''A217'']>> sudde...
    scene.text(`Once you turn the corner and are out of sight, ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} suddenly grabs you by the shoulders and throws you against the wall.`);
    // TODO-QSP: dynamic text: You''re about to say something when <<$npc_nickname[''A217'']>> suddenly punches...
    scene.text(`You're about to say something when ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} suddenly punches you in the face.`);
    scene.text('"WHO DO YOU THINK YOU ARE, BITCH?!" he screams. "You work for ME! I decide how much money you get, UNDERSTAND?!"');
    scene.text('He punches you in the face after every sentence.');
    if (((st as any).pcs_stren ?? 0) > 60) {
      (st as any).PavlinQW = 3;
      scene.img('images/characters/pavlovsk/pavlin/pavlin_violent3.jpg');
      scene.text('You try to defend yourself and start hitting back. He did not expect this and is startled for a moment.');
      scene.text('You see an opening and take advantage of it. With a swift movement, you\'re able to push your knee into his groin.');
      // TODO-QSP: dynamic text: This brings <<$npc_nickname[''A217'']>> to his knees and you take the opportunit...
      scene.text(`This brings ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} to his knees and you take the opportunity to run away.`);
      scene.text('"Screw you, bitch! I\'ll get you for this!" he screams as you dash around the corner.');
      (st as any).pavldom = 1;
    } else {
      scene.img('images/characters/pavlovsk/pavlin/pavlin_violent2.jpg');
      // TODO-QSP: dynamic text: "I''m sorry, <<$npc_nickname[''A217'']>>! It won''t happen again!" you plead.
      scene.text(`"I'm sorry, ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}! It won't happen again!" you plead.`);
      scene.text('"You\'re damn right it won\'t happen again!" he screams as he throws you aside. "Now get out of my sight!"');
      scene.text('You quickly crawl to your feet and run away.');
      (st as any).PavlinQW = 4;
    }
    qspCall(st, 'pain', '8', 'head', 'hit');
    (st as any).pavlevent = 1;
    (st as any).pavldaystart = ((st as any).daystart ?? 0);
    qspCall(st, 'npc_relationship', 'set', 'A217', 3);
    (st as any).fingal = 1;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Run away', goto: ['pav_market', ''] },
    ]);
  } },
    ]);
  }
  return;
  // TODO-QSP: end
  scene.build();
}

function enterGetpaidpros(s: GameState, scene: SceneBuilder): void {
  if (((s as any).pavprosmmf ?? 0) === 1) {
    qspCall(s, 'money', 'earn', 1200);
  } else {
    if (((s as any).pavprosff ?? 0) === 1) {
      qspCall(s, 'money', 'earn', 900);
    } else {
      qspCall(s, 'money', 'earn', 750);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPavgenpros(s: GameState, scene: SceneBuilder): void {
  (s as any).pavprosmmf = 0;
  (s as any).pavprosff = 0;
  (s as any).pavproslate = 0;
  (s as any).custangry = 0;
  (s as any).custleft = 0;
  (s as any).mmfextrapay = 0;
  (s as any).mmfcond = 0;
  if (((s as any).pavproscount ?? 0) < 20) {
    (s as any).custrand = 9;
  } else {
    (s as any).custrand = (Math.floor(Math.random() * 10) + 0);
  }
  if (((s as any).pavprosnofemales ?? 0) === 1) {
    if (((s as any).custrand ?? 0) === 1) {
      (s as any).custrand = 0;
    }
  }
  if (((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 20) {
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    // TODO-QSP: dynamic text: "Are you ready to do some work, <<$pcs_firstname>>?"
    scene.text(`"Are you ready to do some work, ${((s as any).pcs_firstname ?? '')}?"`);
    scene.text('Without bothering to wait for you to respond, he gets up from the table and heads to the elevator.');
  } else {
    // TODO-QSP: dynamic text: '<center><img <<$set_imgh>> src="images/locations/pavlovsk/hotel/resep.girl0,'+r...
    scene.text(`<center><img ${((s as any).set_imgh ?? '')} src="images/locations/pavlovsk/hotel/resep.girl0,` + (Math.floor(Math.random() * 11) + 0) + '.jpg"></center>');
    // TODO-QSP: dynamic text: She picks up the phone. "<<$npc_nickname[''A217'']>>, I have <<$pcs_nickname>> h...
    scene.text(`She picks up the phone. "${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''}, I have ${((s as any).pcs_nickname ?? '')} here for you... Sure, I'll send her right up."`);
    // TODO-QSP: dynamic text: She gives you a subtle smile and tells you <<$npc_nickname[''A217'']>> is waitin...
    scene.text(`She gives you a subtle smile and tells you ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} is waiting for you in room 305.`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to room 305', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    if (((st as any).hour ?? 0) >= 12  &&  ((st as any).hour ?? 0) < 20) {
      // TODO-QSP: dynamic text: You enter the room with <<$npc_nickname[''A217'']>>.
      scene.text(`You enter the room with ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}.`);
      scene.text('"Just sit down on the bed," he tells you as he takes out his phone and walks back into the hallway.');
      scene.text('Within a minute, he steps back into the room.');
    } else {
      // TODO-QSP: dynamic text: You go to the room and knock on the door. <<$npc_nickname[''A217'']>> opens it a...
      scene.text(`You go to the room and knock on the door. ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} opens it a few seconds later.`);
      scene.text('"Just sit down on the bed," he tells you.');
    }
    if ((!((st as any).custrand ?? 0))) {
      scene.text('"I just informed the customers. They will be here shortly."');
      scene.text('"Wait, <i>customers</i>?" you ask.');
      scene.text('"It\'s two guys who want to fuck you together and are paying extra for the privilege. I expect you to see to all of their needs. I\'ll let them settle the details with you."');
      scene.actions([
        { label: 'Perform your duty', goto: ['pavlin', 'clientselect'] },
      ]);
    } else {
      if (((st as any).custrand ?? 0) === 1) {
        scene.text('"I just informed the customer. She\'ll be here shortly."');
        if ((!((st as any).firstfemalecust ?? 0))) {
          (st as any).firstfemalecust = 1;
          scene.text('"Wait, <i>she</i>?" you ask.');
          scene.text('"What?" he asks angrily.');
          qspCall(st, 'willpower', 'prostitution', 'resist', 'hard');
          if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'I don\'t do female customers', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'I don\'t do female customers', handler: (st: GameState) => {
    (st as any).pavprosnofemales = 1;
    (st as any).custrand = 9;
    qspCall(st, 'willpower', 'prostitution', 'resist', 'hard');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.text('"I-I\'m sorry... That just won\'t work for me..." you stammer. "She\'ll notice right away."');
    // TODO-QSP: dynamic text: He looks at you angrily before he sighs. "Damn it, <<$pcs_nickname>>! I don''t a...
    scene.text(`He looks at you angrily before he sighs. "Damn it, ${((st as any).pcs_nickname ?? '')}! I don't appreciate you fucking up my schedule! Fine. There's a guy coming over to the room next door. I'll get my girl in there to switch with you. Come with me."`);
    // TODO-QSP: dynamic text: He leaves you in the hallway to talk with the other girl. After a minute, the tw...
    scene.text(`He leaves you in the hallway to talk with the other girl. After a minute, the two exit the room and the girl enters the room you just left as ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} looks at you.`);
    scene.text('"You\'re lucky the guy wasn\'t here yet," he snarks. "He should arrive any second, so get in there!"');
    scene.actions([
      { label: 'Perform your duty', goto: ['pavlin', 'clientselect'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree to serve a female client', handler: (st: GameState) => {
    scene.text('"N-Nothing..." you stammer. "There\'s no problem."');
    scene.actions([
      { label: 'Perform your duty', goto: ['pavlin', 'clientselect'] },
    ]);
  } },
          ]);
        } else {
          scene.actions([
            { label: 'Perform your duty', goto: ['pavlin', 'clientselect'] },
          ]);
        }
      } else {
        scene.text('"I just informed the customer. He\'ll be here shortly."');
        scene.actions([
          { label: 'Perform your duty', goto: ['pavlin', 'clientselect'] },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enterClientselect(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).custrand ?? 0))) {
    // TODO-QSP: dynamic text: There''s a knock on the door and <<$npc_nickname[''A217'']>> answers it. He has ...
    scene.text(`There's a knock on the door and ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} answers it. He has a short conversation with the customers before he's handed a wad of cash and allows them into the room.`);
    scene.text('"I\'ll be waiting in the hotel bar. Meet me there when you\'re done, girl," he says as he leaves the room.');
    scene.actions([
      { label: 'Perform your duty', goto: ['pavlin', 'pavgenprosmmf'] },
    ]);
  } else {
    if (((s as any).custrand ?? 0) === 1) {
      // TODO-QSP: dynamic text: There''s a knock on the door and <<$npc_nickname[''A217'']>> answers it. He has ...
      scene.text(`There's a knock on the door and ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} answers it. He has a short conversation with the customer before he's handed a wad of cash and allows her into the room.`);
      scene.text('"I\'ll be waiting in the hotel bar. Meet me there when you\'re done, girl," he says as he leaves the room.');
      scene.actions([
        { label: 'Perform your duty', goto: ['pavlin', 'pavgenprosff'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: There''s a knock on the door and <<$npc_nickname[''A217'']>> answers it. He has ...
      scene.text(`There's a knock on the door and ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} answers it. He has a short conversation with the customer. He gets handed a wad of cash before he allows him into the room.`);
      scene.text('"I\'ll be waiting in the hotel bar. Meet me there when you\'re done, girl," he says as he leaves the room.');
      scene.actions([
        { label: 'Perform your duty', goto: ['pavlin', 'pavgenprosmf'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterPavgenprosmf(s: GameState, scene: SceneBuilder): void {
  (s as any).proshotelday = ((s as any).daystart ?? 0);
  (s as any).pavproscount = ((s as any).pavproscount ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
  qspCall(s, 'stat', '');
  qspCall(s, 'npcgeneratec', '0', '', (Math.floor(Math.random() * 23) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated');
  // TODO-QSP: dynamic text: The customer introduces himself as <<$npcdesc>> and you both get undressed.
  scene.text(`The customer introduces himself as ${((s as any).npcdesc ?? '')} and you both get undressed.`);
  (s as any).picrand = (Math.floor(Math.random() * 15) + 0);
  scene.img(`images/shared/sex/blowjob/bj${((s as any).picrand ?? '')}.mp4`);
  qspCall(s, 'dinsex', 'bj_random');
  (s as any).customerrand = (Math.floor(Math.random() * 10) + 0);
  if (((s as any).customerrand ?? 0) < 3) {
    if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
      ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
      // TODO-QSP: dynamic text: <<$npcdesc>> holds your head and pulls his dick out of your mouth. "Put one of t...
      scene.text(`${((s as any).npcdesc ?? '')} holds your head and pulls his dick out of your mouth. "Put one of those condoms on me. It's time to test that pussy of yours."`);
      qspCall(s, 'dinsex', 'pc_puts_condom');
      scene.actions([
        { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: <<$npcdesc>> holds your head and pulls his dick out of your mouth. "Put a condom...
      scene.text(`${((s as any).npcdesc ?? '')} holds your head and pulls his dick out of your mouth. "Put a condom on me. It's time to test that pussy of yours."`);
      scene.text('"I don\'t have any," you reply.');
      qspCall(s, 'willpower', 'foreplay', 'force');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'It feels a lot better without a condom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'It feels a lot better without a condom', handler: (st: GameState) => {
    scene.text('He eyes you critically for a moment before giving in. "Fine, if that\'s what you want."');
    qspCall(st, 'willpower', 'foreplay', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Let him to use a condom', handler: (st: GameState) => {
    scene.text('"You\'re lucky I brought some then," he says as he grabs a condom from his pocket.');
    qspCall(st, 'dinsex', 'boy_puts_his_condom');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
      ]);
    }
  } else {
    if (((s as any).customerrand ?? 0) < 7) {
      if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['equipped_condoms'] = ((s as any).mc_inventory['equipped_condoms'] ?? 0) - (1);
        scene.text('You pull his dick out of your mouth and tell him to put a condom on before he fucks you.');
        qspCall(s, 'dinsex', 'boy_puts_condom');
        scene.actions([
          { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
        ]);
      } else {
        scene.text('You pull his dick out of your mouth and tell him to fuck you.');
        scene.text('"What about a condom?" he asks.');
        scene.text('"I don\'t have any," you reply.');
        qspCall(s, 'willpower', 'foreplay', 'force');
        if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
          scene.actions([
            { label: 'It feels a lot better without a condom', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
          ]);
        } else {
          scene.actions([
            { label: 'It feels a lot better without a condom', handler: (st: GameState) => {
    scene.text('He eyes you critically for a moment before giving in. "Fine. If that\'s what you want..."');
    qspCall(st, 'willpower', 'foreplay', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
          ]);
        }
        scene.actions([
          { label: 'Let him to use a condom', handler: (st: GameState) => {
    scene.text('"Well, I don\'t fuck without one, good thing I brought some." He tells you as he grabs a condom from his pocket.');
    qspCall(st, 'dinsex', 'boy_puts_his_condom');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
        ]);
      }
    } else {
      if (((s as any).customerrand ?? 0) < 8) {
        if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
          scene.text('You pull his dick out of your mouth and tell him to put a condom on before he fucks you.');
          // TODO-QSP: dynamic text: "I''d much rather fuck you raw. I hate condoms," he replies with a pleading look...
          scene.text(`"I'd much rather fuck you raw. I hate condoms," he replies with a pleading look in his eyes. "How about if I pay you an extra ${qspFunc(s, 'money', 'string_profit', 300)} to do it without one?"`);
          qspCall(s, 'willpower', 'foreplay', 'resist');
          if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
            ]);
          } else {
            scene.actions([
              { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"You\'ll get nothing but a blowjob if you don\'t put a condom on," you tell him sternly.');
    scene.text('"Fine. Give me one then," he says, sounding a little dejected while holding out his hand.');
    qspCall(st, 'willpower', 'foreplay', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
            ]);
          }
          scene.actions([
            { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Fine," you reply and hold out your hand.');
    // TODO-QSP: dynamic text: He grabs his wallet and hands you <<$func(''money'', ''string_profit'', 300)>>. ...
    scene.text(`He grabs his wallet and hands you ${qspFunc(s, 'money', 'string_profit', 300)}. "There. Now let's try that pussy of yours!"`);
    qspCall(st, 'money', 'earn', 300);
    qspCall(st, 'stat', '');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
          ]);
        } else {
          scene.text('You pull his dick out of your mouth and tell him to fuck you.');
          qspCall(s, 'dinSex', 'std_trigger');
          scene.actions([
            { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
          ]);
        }
      } else {
        if (((s as any).customerrand ?? 0) < 9) {
          if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
            scene.text('You pull his dick out of your mouth and tell him to put a condom on before he fucks you.');
            scene.text('"I\'d much rather fuck you raw. I hate condoms," he replies.');
            qspCall(s, 'willpower', 'prostitution', 'self');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Ask for more money', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Ask for more money', handler: (st: GameState) => {
    scene.text('"That\'ll cost you an extra 300, honey," you tell him sweetly.');
    // TODO-QSP: dynamic text: "Fine," he says as he grabs his wallet and hands you <<$func(''money'', ''string...
    scene.text(`"Fine," he says as he grabs his wallet and hands you ${qspFunc(s, 'money', 'string_profit', 300)} "There. Now let's try that pussy of yours!"`);
    qspCall(st, 'money', 'earn', 300);
    qspCall(st, 'willpower', 'prostitution', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
              ]);
            }
            qspCall(s, 'willpower', 'foreplay', 'resist');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"You\'ll get nothing but a blowjob if you don\'t put on a condom on," you tell him sternly.');
    scene.text('"Fine. Give me one then," he says, sounding a little dejected while holding out his hand.');
    qspCall(st, 'willpower', 'foreplay', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspCall(st, 'dinsex', 'boy_puts_condom');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    scene.text('"Uhm. Okay then," you say, not quite sure how you should deal with this.');
    scene.text('"There. Now let\'s try that pussy of yours!"');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
            ]);
          } else {
            scene.text('You pull his dick out of your mouth and tell him to fuck you.');
            qspCall(s, 'dinSex', 'std_trigger');
            scene.actions([
              { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
            ]);
          }
        } else {
          if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] === 0) {
            scene.text('You pull his dick out of your mouth and tell him to fuck you.');
            qspCall(s, 'dinSex', 'std_trigger');
            scene.actions([
              { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
            ]);
          } else {
            scene.text('You pull his dick out of your mouth and tell him to put on a condom on before he fucks you.');
            scene.text('"No," he angrily replies. "I hate condoms, so I\'m going to fuck you raw."');
            qspCall(s, 'willpower', 'prostitution', 'self');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Ask for more money', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Ask for more money', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'prostitution', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    (st as any).custangry = 1;
    scene.text('"That\'ll cost you an extra 300, honey," you tell him sweetly.');
    scene.text('He grabs you by the arm and starts shaking you. "I\'ve already paid for you. Do you need me to knock some sense into you or are you going to be a good little whore?!"');
    qspCall(st, 'willpower', 'sex', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Fight back', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Fight back', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'sex', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    if (((st as any).pcs_stren ?? 0) > 60) {
      scene.text('You shove him away from you with all your strength, making him trip up with his pants around his ankles.');
      scene.text('"Get the fuck out!" you angrily scream at him.');
      scene.text('He just sits there with a stunned expression on his face before he starts getting dressed again.');
      scene.text('"Fucking crazy whore..." he mumbles before he slams the door on his way out.');
      (st as any).custleft = 1;
      scene.actions([
        { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
      ]);
    } else {
      scene.text('You try to shove him away, but you may as well have tried to push against a brick wall.');
      scene.text('"You\'re going to regret that!" he says as he roughly shoves you on the bed.');
      qspCall(st, 'dinSex', 'std_trigger');
      scene.actions([
        { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Submit', handler: (st: GameState) => {
    scene.text('"N-No... I-I\'ll be good..." you whimper.');
    scene.text('"That\'s more like it, whore," he tells you coldly as he shoves you on the bed.');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
    ]);
  } },
              ]);
            }
            qspCall(s, 'willpower', 'foreplay', 'resist');
            if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
              scene.actions([
                { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
              ]);
            } else {
              scene.actions([
                { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"You\'ll get nothing but a blowjob if you don\'t put on a condom on," you tell him, standing your ground.');
    scene.text('"Fucking whore!" he shouts as he shoves you hard.');
    scene.text('You hit the back of your head against the wall and suddenly start seeing red.');
    scene.text('"Get the fuck out!" you start screaming at the top of your lungs. "If I ever see you again, I\'ll <i>kill you</i>!"');
    scene.text('It isn\'t until you hear the door slam behind him that you realize just how much noise you\'re making.');
    scene.text('You sit on the bed and delicately probe the back of your head, wincing each time you brush the spot where your head hit the wall. Luckily, there doesn\'t seem to be any blood.');
    (st as any).custleft = 1;
    qspCall(st, 'pain', '5', 'head', 'Slam');
    qspCall(st, 'willpower', 'foreplay', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
    ]);
  } },
              ]);
            }
            scene.actions([
              { label: 'Agree', handler: (st: GameState) => {
    scene.text('You\'re afraid he\'s going to hurt you if you don\'t give him what he wants.');
    scene.text('"Uhm. Okay then..." you say, not quite sure how you should deal with this.');
    scene.text('"That\'s better. Now let\'s try that pussy of yours!"');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'vaginalmf'] },
    ]);
  } },
            ]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterVaginalmf(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'dinsex', 'vaginal_sex');
  (s as any).picrand = (Math.floor(Math.random() * 5) + 1);
  scene.img(`images/shared/sex/vag/miss/vagmis${((s as any).picrand ?? '')}.jpg`);
  qspCall(s, 'arousal', 'bj', 30, 'prostitution');
  qspCall(s, 'dinSex', 'std_trigger_oral');
  qspCall(s, 'arousal', 'vaginal', 30);
  qspCall(s, 'arousal', 'end');
  if (((s as any).npc_rel ?? 0)?.['A217'] === 15) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/anal1.mp4');
    // TODO-QSP: dynamic text: "Your pussy is great, but I really want to try out this sweet little asshole," <...
    scene.text(`"Your pussy is great, but I really want to try out this sweet little asshole," ${((st as any).npcdesc ?? '')} says.`);
    scene.text('"No way! We didn\'t agree to this," you reply.');
    // TODO-QSP: dynamic text: "I don''t care, bitch! <<$npc_nickname[''A217'']>> still owes me a favor, so you...
    scene.text(`"I don't care, bitch! ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} still owes me a favor, so you're going to lie there and take it."`);
    // TODO-QSP: dynamic text: You try to get away, but <<$npcdesc>> pins you down and guides his cock towards ...
    scene.text(`You try to get away, but ${((st as any).npcdesc ?? '')} pins you down and guides his cock towards your ass.`);
    scene.text('"At least use some lube..."');
    // TODO-QSP: dynamic text: Before you can finish your sentence <<$npcdesc>> has already penetrated your anu...
    scene.text(`Before you can finish your sentence ${((st as any).npcdesc ?? '')} has already penetrated your anus and is thrusting with all his might.`);
    scene.text('You aren\'t ready for it and start screaming your lungs out. Luckily, he doesn\'t last long and soon blows his load in your ass.');
    qspCall(st, 'arousal', 'anal', 30, 'prostitution', 'sub', 'rough');
    qspCall(st, 'arousal', 'end');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).custangry ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/shared/sex/anal/doggy/anal1.mp4');
    // TODO-QSP: dynamic text: "Your pussy is great, but I really want to try out this sweet little asshole," <...
    scene.text(`"Your pussy is great, but I really want to try out this sweet little asshole," ${((st as any).npcdesc ?? '')} says.`);
    scene.text('"No way! We didn\'t agree to this," you reply.');
    scene.text('"I don\'t care, whore! You\'re bought and paid for, so you\'re going to lie there and take it."');
    // TODO-QSP: dynamic text: You try to get away, but <<$npcdesc>> pins you down and guides his cock towards ...
    scene.text(`You try to get away, but ${((st as any).npcdesc ?? '')} pins you down and guides his cock towards your ass.`);
    scene.text('"At least use some lube..."');
    // TODO-QSP: dynamic text: Before you can finish your sentence, <<$npcdesc>> has already penetrated your an...
    scene.text(`Before you can finish your sentence, ${((st as any).npcdesc ?? '')} has already penetrated your anus and is thrusting with all his might.`);
    scene.text('You aren\'t ready for it and start screaming your lungs out. Luckily, he doesn\'t last long and soon blows his load in your ass.');
    qspCall(st, 'arousal', 'anal', 30, 'prostitution', 'sub', 'rough');
    qspCall(st, 'arousal', 'end');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
    ]);
  } },
      ]);
    } else {
      if ((!(Math.floor(Math.random() * 6) + 0))) {
        scene.actions([
          { label: 'Continue', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: "Your pussy is great, but I really want to try out this sweet little asshole," <...
    scene.text(`"Your pussy is great, but I really want to try out this sweet little asshole," ${((st as any).npcdesc ?? '')} says.`);
    scene.text('"No way! We didn\'t agree to this," you reply.');
    scene.text('"Oh, come on!" he moans. "You\'ll love it."');
    if (((st as any).pcs_ass ?? 0) > 10) {
      scene.text('"I bet you\'re a little buttslut, aren\'t you?" he says with a grin.');
    }
    qspCall(st, 'willpower', 'prostitution', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask for more money', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask for more money', handler: (st: GameState) => {
    scene.text('"That\'ll cost you an extra 500, honey," you tell him sweetly.');
    // TODO-QSP: dynamic text: "Fine," he says as he grabs his wallet and hands you <<$func(''money'', ''string...
    scene.text(`"Fine," he says as he grabs his wallet and hands you ${qspFunc(s, 'money', 'string_profit', 500)} "There. Now let's try that ass of yours!"`);
    qspCall(st, 'money', 'earn', 500);
    qspCall(st, 'willpower', 'prostitution', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'analmf'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Allow it', handler: (st: GameState) => {
    if (((st as any).pcs_ass ?? 0) < 10) {
      scene.text('"O-Ok, but be gentle," you tell him as you present your ass to him.');
    } else {
      scene.text('"Only if you do it properly. You\'re lucky I actually do love a nice slow assfuck," you tell him as you present your ass to him.');
    }
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'analmf'] },
    ]);
  } },
    ]);
  } },
        ]);
      } else {
        qspCall(s, 'dinsex', 'sexcum');
        scene.actions([
          { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
        ]);
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterAnalmf(s: GameState, scene: SceneBuilder): void {
  scene.img('images/shared/sex/anal/doggy/anal4.mp4');
  qspCall(s, 'dinSex', 'boy_wants_anal', '', 'lubri');
  qspCall(s, 'dinsex', 'analsex');
  qspCall(s, 'arousal', 'anal', 30, 'prostitution', 'sub');
  qspCall(s, 'arousal', 'clit_finger', (-30), 'prostitution', 'sub');
  qspCall(s, 'arousal', 'end');
  if (((s as any).succubusflag ?? 0) === 1) {
    (s as any).scfeed = ((s as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
    (s as any).sexnutrition = ((s as any).sexnutrition ?? 0) + (30 * ((s as any).scfeed ?? 0));
    (s as any).succubxp = ((s as any).succubxp ?? 0) + (6);
  }
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
  ]);
  scene.build();
}

function enterPavgenprosmmf(s: GameState, scene: SceneBuilder): void {
  (s as any).proshotelday = ((s as any).daystart ?? 0);
  (s as any).pavproscount = ((s as any).pavproscount ?? 0) + (1);
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
  (s as any).pavprosmmf = 1;
  qspCall(s, 'npcgeneratec', '0', '', (Math.floor(Math.random() * 23) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated');
  qspCall(s, 'npcgeneratec', '0', '', (Math.floor(Math.random() * 23) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated', '1');
  scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf01.jpg');
  // TODO-QSP: dynamic text: The customers introduce themselves as <<$npcdesc[0]>> and <<$npcdesc[1]>>.
  scene.text(`The customers introduce themselves as ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} and ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}.`);
  // TODO-QSP: dynamic text: "We''ve just booked you for the next hour, so let''s have some fun. <<$npc_nickn...
  scene.text(`"We've just booked you for the next hour, so let's have some fun. ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} said we should agree on a price to fuck both of your holes with you. Oh, and I hope you won't insist on condoms."`);
  if (((s as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
    qspCall(s, 'willpower', 'foreplay', 'force');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Insist on condoms', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Insist on condoms', handler: (st: GameState) => {
    (st as any).mmfextrapay = 1;
    (st as any).mmfcond = 1;
    qspCall(st, 'willpower', 'foreplay', 'force');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: "I''m afraid I have to insist on condoms," you reply. "But don''t worry, fucking...
    scene.text(`"I'm afraid I have to insist on condoms," you reply. "But don't worry, fucking my ass and pussy is on the menu. Well, for an extra ${qspFunc(s, 'money', 'string_profit', 1000)} it is."`);
    // TODO-QSP: dynamic text: You catch the look that passes between them. After a moment, you see <<$npcdesc[...
    scene.text(`You catch the look that passes between them. After a moment, you see ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} nod while ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} takes out his wallet and throws the money on the bed.`);
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'sexmmf'] },
    ]);
  } },
      ]);
    }
  }
  qspCall(s, 'willpower', 'prostitution', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Ask for ' + String(qspFunc(s, 'money', 'string_profit', 1000) ?? ''), handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Ask for ' + String(qspFunc(s, 'money', 'string_profit', 1000) ?? ''), handler: (st: GameState) => {
    (st as any).mmfextrapay = 1;
    (st as any).mmfcond = 0;
    qspCall(st, 'willpower', 'prostitution', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.text('"I don\'t normally let my customers fuck my ass, and without condoms at that, but I\'ll make an exception for you guys for an extra thousand," You tell them coyly.');
    // TODO-QSP: dynamic text: <<$npcdesc[0]>> immediately takes out his wallet and throws the money on the bed...
    scene.text(`${(((st as any).npcdesc ?? 0)?.[0] ?? '')} immediately takes out his wallet and throws the money on the bed.`);
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'sexmmf'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Allow it', handler: (st: GameState) => {
    (st as any).mmfcond = 0;
    scene.text('"I don\'t normally let my customers fuck my ass, and without condoms at that, but I\'ll make an exception for you guys," you tell them coyly.');
    qspCall(st, 'dinSex', 'std_trigger');
    scene.actions([
      { label: 'Continue', goto: ['pavlin', 'sexmmf'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterSexmmf(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf01.jpg');
  scene.text('You can feel yourself getting wet at the idea of taking both of their cocks at the same time.');
  scene.text('"So what do you guys have there for me?" you ask as you start undressing and step in between them.');
  // TODO-QSP: dynamic text: They waste no time getting their cocks out. "Open your mouth," <<$npcdesc[0]>> o...
  scene.text(`They waste no time getting their cocks out. "Open your mouth," ${(((s as any).npcdesc ?? 0)?.[0] ?? '')} orders.`);
  // TODO-QSP: dynamic text: The second your lips part, he shoves his cock into your mouth. "And don''t forge...
  scene.text(`The second your lips part, he shoves his cock into your mouth. "And don't forget about ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}."`);
  // TODO-QSP: dynamic text: You place your hand on <<$npcdesc[1]>>''s balls and start massaging them as you ...
  scene.text(`You place your hand on ${(((s as any).npcdesc ?? 0)?.[1] ?? '')}'s balls and start massaging them as you keep sucking ${(((s as any).npcdesc ?? 0)?.[0] ?? '')}'s dick.`);
  qspCall(s, 'arousal', 'bj', 10, (((s as any).npcID ?? 0)?.[0] ?? 0), 'prostitution', 'sub', 'group');
  qspCall(s, 'arousal', 'hj', (-10), (((s as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'sub', 'group');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf02.jpg');
    // TODO-QSP: dynamic text: It doesn''t take long before <<$npcdesc[1]>> pulls you to your feet and guides y...
    scene.text(`It doesn't take long before ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} pulls you to your feet and guides you onto the bed. "Time to fuck that pussy of yours."`);
    if (((st as any).mmfcond ?? 0) === 1) {
      if (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        qspCall(st, 'dinsex', 'boy_puts_condom', '' + (((st as any).npcdesc ?? 0)?.[1] ?? 0) + ' takes your \'+iif(preziktype = 2, \'sabotaged \', \')+ \'condom and puts it on his ' + (((st as any).dick_length ?? 0)?.[1] ?? 0) + 'cm ' + (((st as any).dick_girth ?? 0)?.[1] ?? 0) + ' dick.');
      } else {
        qspCall(st, 'dinsex', 'boy_puts_his_condom', '' + (((st as any).npcdesc ?? 0)?.[1] ?? 0) + '');
      }
    }
    // TODO-QSP: dynamic text: The three of you position yourselves on the bed before <<$npcdesc[1]>> grabs you...
    scene.text(`The three of you position yourselves on the bed before ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} grabs you by the hair. "What a little slut you are! You're wet already and we haven't even touched your pussy yet! You want it bad, don't you?"`);
    scene.text('"Y-Yes. I want it. I need it so bad. Please fuck me!" you start begging, sensing that\'s what he wants to hear.');
    // TODO-QSP: dynamic text: You moan loudly as he buries his <<dick_length[1]>>cm <<$dick_girth[1]>> dick de...
    scene.text(`You moan loudly as he buries his ${(((st as any).dick_length ?? 0)?.[1] ?? '')}cm ${(((st as any).dick_girth ?? 0)?.[1] ?? '')} dick deep inside you.`);
    // TODO-QSP: dynamic text: "Wow, you''re loud. Here, suck on this," he says as he pushes your head down on ...
    scene.text(`"Wow, you're loud. Here, suck on this," he says as he pushes your head down on ${(((st as any).npcdesc ?? 0)?.[0] ?? '')}'s cock again.`);
    // TODO-QSP: dynamic text: He furiously fucks your dripping pussy while you suck <<$npcdesc[0]>> off, occas...
    scene.text(`He furiously fucks your dripping pussy while you suck ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} off, occasionally taking his full ${(((st as any).dick_length ?? 0)?.[0] ?? '')}cm down your throat.`);
    qspCall(st, 'arousal', 'vaginal', 10, (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'arousal', 'bj', (-10), (((st as any).npcID ?? 0)?.[0] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf03.jpg');
    // TODO-QSP: dynamic text: "I think it''s about time she earned her bonus. Come here and ride my cock," <<$...
    scene.text(`"I think it's about time she earned her bonus. Come here and ride my cock," ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} says as he pulls you off his cock and leans back.`);
    if (((st as any).mmfcond ?? 0) === 1) {
      if (((st as any).mc_inventory ?? 0)?.['equipped_condoms'] > 0) {
        qspCall(st, 'dinsex', 'boy_puts_condom');
      } else {
        qspCall(st, 'dinsex', 'boy_puts_his_condom');
      }
    }
    // TODO-QSP: dynamic text: You quickly grab some lube and put some on your hand before handing it to <<$npc...
    scene.text(`You quickly grab some lube and put some on your hand before handing it to ${(((st as any).npcdesc ?? 0)?.[1] ?? '')}. "Let me get my ass ready for you."`);
    // TODO-QSP: dynamic text: After you ease yourself onto <<$npcdesc[0]>>''s dick and start riding him slowly...
    scene.text(`After you ease yourself onto ${(((st as any).npcdesc ?? 0)?.[0] ?? '')}'s dick and start riding him slowly, you start rubbing the lube on your asshole before you push one of your fingers inside.`);
    // TODO-QSP: dynamic text: You look over your shoulder and see <<$npcdesc[1]>> standing there looking impat...
    scene.text(`You look over your shoulder and see ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} standing there looking impatient, his now glistening cock rock-hard and waiting.`);
    scene.text('Not wanting to try your luck with him, you pull your finger out of your ass and use both your hands to spread it open invitingly. "Please, I want you in my ass now."');
    scene.text('A moment later, you feel the tip of his cock press against your asshole before he pushes it inside, causing you to moan loudly from the mixed pain and pleasure.');
    // TODO-QSP: dynamic text: After giving you a moment to adjust, he starts fucking your ass, going deeper ea...
    scene.text(`After giving you a moment to adjust, he starts fucking your ass, going deeper each time he pushes himself inside you. The pain gradually resides and all you feel is pleasure as you start moving on ${(((st as any).npcdesc ?? 0)?.[0] ?? '')}'s cock again, taking both as deep as you can.`);
    // TODO-QSP: dynamic text: You give into your own lust and start losing yourself in the overwhelming pleasu...
    scene.text(`You give into your own lust and start losing yourself in the overwhelming pleasure when ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} suddenly slaps your ass, jolting you to a sudden stop as your mind needs a second to work through the sensations.`);
    scene.text('"I love it when you... Uhhh... More..." you moan as his hand smacking your ass just makes you hornier than ever.');
    qspCall(st, 'arousal', 'anal_finger', 20, 'prostitution', 'sub', 'group', 'self');
    qspCall(st, 'arousal', 'vaginal', (-20), (((st as any).npcID ?? 0)?.[0] ?? 0), 'prostitution', 'sub', 'group');
    (st as any).anal_slip = ((st as any).anal_slip ?? 0) + (4);
    qspCall(st, 'arousal', 'anal', (-20), (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf04.jpg');
    // TODO-QSP: dynamic text: When you feel <<$npcdesc[1]>> slide his cock out of your ass completely, you can...
    scene.text(`When you feel ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} slide his cock out of your ass completely, you can't help but let out a whimper of regret.`);
    // TODO-QSP: dynamic text: "You''re not going to make me cum just yet. We still have 20 minutes left," he s...
    scene.text(`"You're not going to make me cum just yet. We still have 20 minutes left," he says while looking at the clock. "And ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} hasn't had the pleasure of feeling your ass on his cock yet."`);
    if (((st as any).mmfcond ?? 0) === 1) {
      // TODO-QSP: dynamic text: As you slide your dripping pussy off of <<$npcdesc[0]>>''s cock and turn around ...
      scene.text(`As you slide your dripping pussy off of ${(((st as any).npcdesc ?? 0)?.[0] ?? '')}'s cock and turn around to ride him with your ass, ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} stands up on the bed next to you and removes his condom before putting his dick in front of your face.`);
    } else {
      // TODO-QSP: dynamic text: As you slide your dripping pussy off of <<$npcdesc[0]>>''s cock and turn around ...
      scene.text(`As you slide your dripping pussy off of ${(((st as any).npcdesc ?? 0)?.[0] ?? '')}'s cock and turn around to ride him with your ass, ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} stands up on the bed next to you and you know he wants you to taste your own ass on his dick.`);
    }
    // TODO-QSP: dynamic text: You lower yourself onto his <<$dick_girth[0]>> cock and slowly slide down all th...
    scene.text(`You lower yourself onto his ${(((st as any).dick_girth ?? 0)?.[0] ?? '')} cock and slowly slide down all the way before opening your mouth for ${(((st as any).npcdesc ?? 0)?.[1] ?? '')}, who immediately shoves himself into your mouth.`);
    scene.text('You keep sucking as you work your ass up and down, losing yourself in the overwhelming pleasure again.');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'arousal', 'anal', (-20), (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'arousal', 'bj', (-20), (((st as any).npcID ?? 0)?.[0] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'stat', '');
    if ((!((st as any).mmfcond ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf05.jpg');
    // TODO-QSP: dynamic text: After a while, <<$npcdesc[0]>> grabs your hips and holds you in place as he fuck...
    scene.text(`After a while, ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} grabs your hips and holds you in place as he fucks your ass hard and deep. You do your best to keep sucking ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} off, but you mostly just moan around his cock.`);
    scene.text('Noticing that his friend is getting close, he starts urging him on. "Let her have it. Fill her slutty little asshole up."');
    scene.text('Knowing what he wants, you start moaning even louder as the furious pounding persists.');
    // TODO-QSP: dynamic text: A minute later, you''re rewarded for your efforts as you feel his spurts of warm...
    scene.text(`A minute later, you're rewarded for your efforts as you feel his spurts of warm cum shoot deep inside your asshole. ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} pumps your ass a few more times before holding himself balls deep inside you as you feel the last drop of cum spurt into you.`);
    scene.text('When he finally pulls out, a stream of cum flows down onto him from your ass.');
    qspCall(st, 'arousal', 'anal', 5, (((st as any).npcID ?? 0)?.[0] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'cum_call', 'anus', (((st as any).npcID ?? 0)?.[0] ?? 0), 1);
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf06.jpg');
    // TODO-QSP: dynamic text: "You want my cum too?" <<$npcdesc[1]>> asks you as he pulls his dick out of your...
    scene.text(`"You want my cum too?" ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} asks you as he pulls his dick out of your mouth and starts jerking it.`);
    scene.text('Knowing what he expects next, you look up at his face with pleading eyes. "Please let me taste it. I want to taste your wonderful cum!"');
    scene.text('This seems to drive him over the edge and he immediately starts shooting his load on your face, aiming for your mouth before switching targets and coating your breasts too.');
    scene.text('"Hmm... Wonderful..." you tell him as you run your finger through it and slowly lick it.');
    scene.text('After a minute, the guys get up from the bed and start getting dressed.');
    // TODO-QSP: dynamic text: "Damn, that was hot! Totally worth it," <<$npcdesc[0]>> tells his friend as they...
    scene.text(`"Damn, that was hot! Totally worth it," ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} tells his friend as they move to the door. "See you around someday, ${((st as any).pcs_nickname ?? '')}."`);
    if (((st as any).mmfextrapay ?? 0) === 1) {
      scene.text('You roll over and start collecting the money. "That <i>was</i> pretty amazing. <i>And</i> I even made good money," you think to yourself.');
    } else {
      scene.text('"That <i>was</i> pretty amazing..." you think to yourself.');
    }
    qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[1] ?? 0), 1, '', 10000, 15);
    qspCall(st, 'cum_call', 'breasts', (((st as any).npcID ?? 0)?.[1] ?? 0), 1, '', 10000, 15);
    qspCall(st, 'cum_call', 'mouth', (((st as any).npcID ?? 0)?.[1] ?? 0), 1, '', 10000, 10);
    qspCall(st, 'money', 'earn', 1000);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/mmf06.jpg');
    // TODO-QSP: dynamic text: After a while, <<$npcdesc[0]>> grabs your hips and holds you in place as he fuck...
    scene.text(`After a while, ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} grabs your hips and holds you in place as he fucks your ass hard and deep. You do your best to keep sucking ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} off, but you mostly just moan around his cock.`);
    scene.text('It doesn\'t take long before he starts moaning and you realize he came in the condom.');
    // TODO-QSP: dynamic text: "You want my cum too?" <<$npcdesc[1]>> asks you as he pulls his dick out of your...
    scene.text(`"You want my cum too?" ${(((st as any).npcdesc ?? 0)?.[1] ?? '')} asks you as he pulls his dick out of your mouth and starts jerking it.`);
    scene.text('Knowing what he expects, you look up at his face with pleading eyes. "Please let me taste it. I want to taste your wonderful cum!"');
    scene.text('This seems to drive him over the edge and he immediately starts shooting his load on your face, aiming for your mouth before switching targets and coating your breasts too.');
    scene.text('"Hmm... Wonderful..." you tell him as you run your finger through it and slowly lick it.');
    scene.text('After a minute, the guys get up from the bed and start getting dressed.');
    // TODO-QSP: dynamic text: "Damn, that was hot! Totally worth it," <<$npcdesc[0]>> tells his friend as they...
    scene.text(`"Damn, that was hot! Totally worth it," ${(((st as any).npcdesc ?? 0)?.[0] ?? '')} tells his friend as they move to the door. "See you around someday, ${((st as any).pcs_nickname ?? '')}."`);
    if (((st as any).mmfextrapay ?? 0) === 1) {
      scene.text('You roll over and start collecting the money. "That <i>was</i> pretty amazing. <i>And</i> I even made good money," you think to yourself.');
    } else {
      scene.text('"That <i>was</i> pretty amazing..." you think to yourself.');
    }
    qspCall(st, 'arousal', 'bj', 5, (((st as any).npcID ?? 0)?.[1] ?? 0), 'prostitution', 'sub', 'group');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', (((st as any).npcID ?? 0)?.[1] ?? 0), 1, '', 10000, 15);
    qspCall(st, 'cum_call', 'breasts', (((st as any).npcID ?? 0)?.[1] ?? 0), 1, '', 10000, 15);
    qspCall(st, 'cum_call', 'mouth', (((st as any).npcID ?? 0)?.[1] ?? 0), 1, '', 10000, 10);
    qspCall(st, 'money', 'earn', 1000);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
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
  scene.build();
}

function enterPavgenprosff(s: GameState, scene: SceneBuilder): void {
  (s as any).proshotelday = ((s as any).daystart ?? 0);
  (s as any).pavproscount = ((s as any).pavproscount ?? 0) + (1);
  (s as any).girl = ((s as any).girl ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
  (s as any).pavprosff = 1;
  qspCall(s, 'npcgeneratec', '1', '', (Math.floor(Math.random() * 23) + 18));
  qspCall(s, 'npcStat', '$npclastgenerated');
  scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff01.jpg');
  // TODO-QSP: dynamic text: The customer introduces herself as <<$npcdesc>>. "I''ve just booked you for the ...
  scene.text(`The customer introduces herself as ${((s as any).npcdesc ?? '')}. "I've just booked you for the next hour, so let's have some fun. Get on your knees and let me have a look at you."`);
  // TODO-QSP: dynamic text: You obediently sit down on your knees. "Do you like what you see, <<$npcdesc>>?"
  scene.text(`You obediently sit down on your knees. "Do you like what you see, ${((s as any).npcdesc ?? '')}?"`);
  scene.text('She slowly walks around you, giving you a critical inspection before she leans in and starts pulling on your top, exposing your breasts.');
  scene.text('"I can work with this," she whispers in your ear as she starts kneeding your breasts.');
  qspCall(s, 'arousal', 'foreplay', 5, 'prostitution');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff02.jpg');
    scene.text('She pulls your top off completely, leaving you in only your panties.');
    scene.text('"Go stand on the bed and put your hand up against the wall," she orders.');
    // TODO-QSP: dynamic text: As you get up on the bed, you try to move your ass as seductively as you can. On...
    scene.text(`As you get up on the bed, you try to move your ass as seductively as you can. Once you're standing on the bed with your hands against the wall, you look over your shoulder to see ${((st as any).npcdesc ?? '')} pull off her own top before moving up behind you. The hunger is clearly visible in her eyes.`);
    scene.text('She immediately starts running her hands over your back before slowly moving down to your ass, occasionally rubbing between your legs over the fabric of your panties.');
    scene.text('It doesn\'t take long before she notices how damp your panties are getting. "Does my little plaything like my attentions?" she whispers in your ear as she slowly starts pulling your panties off.');
    // TODO-QSP: dynamic text: "Yes, <<$npcdesc>>..." you moan as her hand gently strokes over your now bared p...
    scene.text(`"Yes, ${((st as any).npcdesc ?? '')}..." you moan as her hand gently strokes over your now bared pussy.`);
    qspCall(st, 'arousal', 'foreplay', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff03.jpg');
    // TODO-QSP: dynamic text: "Lie down, <<$pcs_nickname>>," she orders and you immediately comply.
    scene.text(`"Lie down, ${((st as any).pcs_nickname ?? '')}," she orders and you immediately comply.`);
    scene.text('When you\'re on your back, she kneels down besides you and pushes your legs open, revealing just how wet your pussy is already.');
    scene.text('Her fingers immediately find their way to your pussy as she starts playing with you again. You close your eyes and let out a needy moan as you feel one of her fingers push inside of you, probing around delicately.');
    scene.text('When you feel her finger leave your by now soaked pussy, you open your eyes to see her lick your juices off.');
    scene.text('"Do you want a taste too?" she asks as she leans in and brushes your lips with her fingertips.');
    scene.text('You open your mouth in response and look her in the eye as she puts her finger inside it so you can suck on it.');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff04.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> pulls her finger out of your mouth and trails it down your body unt...
    scene.text(`${((st as any).npcdesc ?? '')} pulls her finger out of your mouth and trails it down your body until it's resting on your pussy.`);
    scene.text('She just smiles at you expectantly as she keeps her hand still.');
    scene.text('"Please..." you beg, which is all it takes to get her to play with your pussy again.');
    scene.text('She presses down on your stomach with her other hand and slides a second finger inside you. The extra pressure makes it feel even better and you let out a loud moan.');
    scene.text('"Do you want me to go faster?" she asks with a grin on her face. She clearly knows you\'d let her do just about anything to you at this point.');
    // TODO-QSP: dynamic text: "P-Please fuck my pussy..." you beg again and <<$npcdesc>> starts building up th...
    scene.text(`"P-Please fuck my pussy..." you beg again and ${((st as any).npcdesc ?? '')} starts building up the pace. Within a minute, her fingers are rapidly plunging in and out of your pussy and the room is filled with the sound of it, at least when your moans don't drown it out.`);
    scene.text('You feel your orgasm rapidly approach as her fingers keep hitting just the right spot. You grab her wrist and hold her wriggling fingers as deep inside you as you can, grinding them as you let it wash over you.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_finger', 10, 'prostitution', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff05.jpg');
    // TODO-QSP: dynamic text: When you open your eyes again, you notice that <<$npcdesc>> has taken off the re...
    scene.text(`When you open your eyes again, you notice that ${((st as any).npcdesc ?? '')} has taken off the rest of her clothes already.`);
    scene.text('"Now it\'s my turn," she says as she moves over and straddles your face. You can see she\'s already soaking wet.');
    scene.text('You start gently stroking her with one hand before you spread her pussy. You feel her shudder on top of you as your next exhalation hits her clit directly.');
    scene.text('"Come on, I want to feel that sweet tongue of yours," She moans.');
    scene.text('You oblige by running your tongue all over her pussy, occasionally exploring as deep as you can. Each time you hear her moan, you can\'t stop yourself from licking her even faster.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff06.jpg');
    // TODO-QSP: dynamic text: It doesn''t take long before <<$npcdesc>> grabs you by the hair and presses her ...
    scene.text(`It doesn't take long before ${((st as any).npcdesc ?? '')} grabs you by the hair and presses her pussy down on your mouth while she uses her other hand to massage her breasts.`);
    scene.text('You find your way to her clit and start sucking on it hard. Within seconds, she starts bucking on top of you violently.');
    scene.text('By the time she rolls off, your face is smeared with her juices.');
    qspCall(st, 'arousal', 'cuni_give', 5, 'prostitution');
    qspCall(st, 'arousal', 'end');
    if (((st as any).succubusflag ?? 0) === 1) {
      (st as any).scfeed = ((st as any).succublvl ?? 0) + (Math.floor(Math.random() * 4) + 1);
      (st as any).sexnutrition = ((st as any).sexnutrition ?? 0) + (30 * ((st as any).scfeed ?? 0));
      (st as any).succubxp = ((st as any).succubxp ?? 0) + (6);
    }
    (st as any).pcs_makeup = 0;
    (st as any).pcs_hairbsh = 0;
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ff07.jpg');
    // TODO-QSP: dynamic text: As <<$npcdesc>> regains her breath, you start getting up off the bed.
    scene.text(`As ${((st as any).npcdesc ?? '')} regains her breath, you start getting up off the bed.`);
    // TODO-QSP: dynamic text: She opens her eyes and starts giggling. "Oh <<$pcs_nickname>> dear, I seem to ha...
    scene.text(`She opens her eyes and starts giggling. "Oh ${((st as any).pcs_nickname ?? '')} dear, I seem to have made a mess of your makeup."`);
    scene.text('"I can\'t say I mind how it happened..." you tell her as she gets up herself and starts walking to the bathroom.');
    scene.text('"I could use a shower," she says, looking over her shoulder before disappearing into the bathroom and leaving the door open.');
    scene.actions([
      { label: 'Follow her', goto: ['pavlin', 'ffshower'] },
      { label: 'Wait for her to finish showering', handler: (st: GameState) => {
    scene.text('You drop down on the bed and close your eyes for a second.');
    scene.text('A moment later, you feel a hand on your shoulder gently shaking you.');
    // TODO-QSP: dynamic text: "Wake up, <<$pcs_nickname>>. It''s time to leave."
    scene.text(`"Wake up, ${((st as any).pcs_nickname ?? '')}. It's time to leave."`);
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
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

function enterFfshower(s: GameState, scene: SceneBuilder): void {
  (s as any).pcs_makeup = 1;
  scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ffshower01.jpg');
  // TODO-QSP: dynamic text: You can hear the water start running before you get to the bathroom door yoursel...
  scene.text(`You can hear the water start running before you get to the bathroom door yourself. ${((s as any).npcdesc ?? '')} is already enjoying the hot water, looking at you with a big smile on her face.`);
  scene.text('"Come here, the water is just the right temperature," she says as she steps back to make room for you.');
  scene.text('Her wet, naked body looks delicious and you eagerly step under the stream of hot water next to her and press your body against hers.');
  scene.text('Within seconds, the two of you are making out passionately, enjoying the feeling of each other\'s wet skin.');
  if (((s as any).deodorant_on ?? 0) === 1) {
    qspCall(s, 'sweat', 'remove_deo');
    scene.text('<br>Your deodorant gets washed away in the shower.');
  }
  qspCall(s, 'arousal', 'kiss', 5, 'prostitution');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ffshower02.jpg');
    // TODO-QSP: dynamic text: <<$npcdesc>> turns you around and presses you against the protective glass of th...
    scene.text(`${((st as any).npcdesc ?? '')} turns you around and presses you against the protective glass of the shower. As your breasts get flattened, you instinctively press your ass back against her and spread your legs.`);
    scene.text('You can feel her stiff nipples pressed against your back as she starts kissing your neck before she moves one of her hand between your legs, immediately sliding a finger inside.');
    scene.text('The pleasure of her delicate fingers makes your mind go blank and you can\'t do anything but lean against the glass and let it wash over you.');
    qspCall(st, 'arousal', 'vaginal_finger', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ffshower03.jpg');
    // TODO-QSP: dynamic text: "Not yet, <<$pcs_nickname>>..." she whispers in your ear as she pulls her hand b...
    scene.text(`"Not yet, ${((st as any).pcs_nickname ?? '')}..." she whispers in your ear as she pulls her hand back. "This time <i>I</i> get to cum first."`);
    scene.text('She pushes you down on your knees before grabbing your head and pushing her pussy firmly onto your mouth.');
    scene.text('You start alternating between sucking on her clit and fucking her as deep as you can with your tongue as she slowly grinds her pussy on your face.');
    scene.text('It looks like she was already close again as it doesn\'t take very long before she starts before she starts cumming on your face again as you listen to her breathless gasping.');
    scene.text('After several seconds of her trembling on her feet, she sinks down, unable to stay standing as she visibly pants from her orgasm.');
    scene.text('You glance at the clock and see that an hour has almost passed.');
    qspCall(st, 'arousal', 'cuni_give', 10, 'prostitution');
    qspCall(st, 'stat', '');
    qspCall(st, 'willpower', 'cuni', 'self');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask her to return the favor', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask her to return the favor', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ffshower04.jpg');
    (st as any).pavproslate = 1;
    scene.text('When she raises her eyes to yours again, you can practically feel your own desire spark through your pussy again.');
    // TODO-QSP: dynamic text: "Please... Would you..." you start and <<$npcdesc>> starts laughing.
    scene.text(`"Please... Would you..." you start and ${((st as any).npcdesc ?? '')} starts laughing.`);
    scene.text('"Eager, I like that. Get up."');
    scene.text('You stand up and press yourself against the shower wall, opening your legs for her.');
    scene.text('"I really wouldn\'t mind another taste," she says as she slowly starts licking your pussy. "You do taste wonderful after all."');
    scene.text('She smiles up at you as her hand slowly slides up along the inside of your leg. When it reaches your pussy, she looks up at you with a boyish grin on her face.');
    scene.text('"Oh, P-Please. Your hands are... Aah!"');
    scene.text('You can\'t even complete your sentence as she pushes her fingers deep inside you, making you moan loudly.');
    // TODO-QSP: dynamic text: <<$npcdesc>> starts licking your clit while her fingers never stop plunging in a...
    scene.text(`${((st as any).npcdesc ?? '')} starts licking your clit while her fingers never stop plunging in and out of your soaked pussy.`);
    scene.text('Your mind suddenly goes blank as your orgasm hits you hard. You can feel your entire body tremble as the waves wash over you.');
    // TODO-QSP: dynamic text: Unable to stay on your feet, you let yourself slide down to the floor next to <<...
    scene.text(`Unable to stay on your feet, you let yourself slide down to the floor next to ${((st as any).npcdesc ?? '')}.`);
    qspCall(st, 'arousal', 'kiss', 5, 'prostitution');
    qspCall(st, 'willpower', 'cuni', 'self');
    qspCall(st, 'willpower', 'pay', 'self');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ffshower05.jpg');
    // TODO-QSP: dynamic text: "I wish we could do this forever..." you tell <<$npcdesc>> as you give her one l...
    scene.text(`"I wish we could do this forever..." you tell ${((st as any).npcdesc ?? '')} as you give her one last passionate kiss before getting up and grabbing a towel.`);
    scene.text('As she steps out of the shower after you, you pick up another towel and hand it to her.');
    scene.text('"That <i>was</i> pretty incredible. I\'ll make sure to ask for you when I\'m in town again," she replies as she puts her clothes back on.');
    scene.text('"I\'d love that. My... My clients usually aren\'t as gentle with me as you were. I-I liked it. A lot..." you say, a little abashed.');
    scene.text('"See you next time then, sweetie," she smiles as she heads for the door. "And remember to keep this our little secret."');
    (st as any).orgasm_or = 'yes';
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'arousal', 'kiss', 5, 'prostitution', 'no_orgasm_msg');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Out of time', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/hotel/sex/prostitution/ffshower05.jpg');
    // TODO-QSP: dynamic text: "I wish we had more time," you tell <<$npcdesc>> as you give her one last passio...
    scene.text(`"I wish we had more time," you tell ${((st as any).npcdesc ?? '')} as you give her one last passionate kiss before getting up and grabbing a towel.`);
    scene.text('As she steps out of the shower after you, you pick up another towel and hand it to her.');
    scene.text('"That <i>was</i> pretty incredible. I\'ll make sure to ask for you when I\'m in town again," she replies as she puts her clothes back on.');
    scene.text('"I\'d love that. My... My clients usually aren\'t as gentle with me as you were. I-I liked it. A lot..." you say, a little abashed.');
    scene.text('"See you next time then, sweetie," she smiles as she heads for the door. "And remember to keep this our little secret."');
    (st as any).noshampoo = 1;
    qspCall(st, 'din_van', 'showerdin');
    qspCall(st, 'arousal', 'kiss', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to the bar', goto: ['pavlin', 'pavlbar'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterTwins(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
  // TODO-QSP: dynamic text: "Hey <<$npc_nickname[''A217'']>>, this is my sister, Anya."
  scene.text(`"Hey ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''}, this is my sister, Anya."`);
  // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> looks at the two of you from top to bottom with anal...
  scene.text(`${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} looks at the two of you from top to bottom with analytical eyes before he finally cracks a smile and starts laughing.`);
  scene.text('"Well, well, you weren\'t kidding. You two look exactly alike! Okay, let me call the client."');
  scene.text('He steps away to make a quick phone call and you turn and smile at your sister excitedly. Anya smiles back, but her grin seems forced and you can tell that she\'s nervous.');
  // TODO-QSP: dynamic text: "Lighten up, sis! We''re just gonna go get dicked down and we''ll walk away paid...
  scene.text(`"Lighten up, sis! We're just gonna go get dicked down and we'll walk away paid. It'll be fun!" you say, trying to reassure her while praying that she won't back out. You hate to think how ${((s as any).npc_firstname ?? 0)?.['A217'] ?? ''} would react if you cancelled at this stage.`);
  scene.text('Anya\'s smile becomes more genuine upon seeing your excitement. "Yeah, I know. I\'m just a little nervous, but I\'ll be fine. I promise."');
  // TODO-QSP: dynamic text: You sigh with relief as <<$npc_nickname[''A217'']>> returns and ushers you both ...
  scene.text(`You sigh with relief as ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} returns and ushers you both to his car.`);
  scene.text('He then drives you to a nice house at the outskirts of town.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Meet the client', handler: (st: GameState) => {
    qspCall(st, 'npcgeneratec', '0');
    qspCall(st, 'boyStat', '$npclastgenerated');
    // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> drops you off and tells you he''ll come back to pick...
    scene.text(`${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} drops you off and tells you he'll come back to pick you up in an hour. You nod and walk hand-in-hand with your sister to the door, practically dragging her alongside you before ringing the bell.`);
    scene.text('You can see she\'s still very nervous, so you give her a little peck on the cheek. "Don\'t worry, everything\'s going to be fine. I\'ll try to keep his attention mostly on me if you\'re scared."');
    scene.text('Before Anya can respond, a man opens the door and invites you in.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins1.jpg');
    // TODO-QSP: dynamic text: He introduces himself as <<$boydesc>> and invites you to sit on the couch.
    scene.text(`He introduces himself as ${((st as any).boydesc ?? '')} and invites you to sit on the couch.`);
    scene.text('"So girls, tell me a little about yourselves," he says with a lecherous smile as he undresses you with his eyes.');
    scene.text('You lie to the man and tell him you\'re two 19-year old college students who do this kind of work to pay for your education.');
    scene.text('The man grunts and nods, but is obviously not interested in your story. He starts rubbing you and your sister\'s legs as soon as you start talking, his thick fingers creeping up a little further each time.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins2.jpg');
    scene.text('He suddenly grabs your sister by the legs and spreads them wide. Anya shoots you a look of panic as she\'s sprawled out on the couch.');
    scene.text('Before you can react, however, the customer buries his head between your sister\'s legs and starts licking her pussy after pulling her panties to the side with his teeth.');
    scene.text('Anya immediately starts moaning loudly, caught off-guard and aroused by the sudden violation.');
    // TODO-QSP: dynamic text: The sight of your sister getting off on <<$boydesc>>''s skilled tongue brings a ...
    scene.text(`The sight of your sister getting off on ${((st as any).boydesc ?? '')}'s skilled tongue brings a tingling to your loins and you soon feel your pussy dripping.`);
    qspCall(st, 'arousal', 'voyeur_sex', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins3.jpg');
    // TODO-QSP: dynamic text: Just as your sister looks to be on the verge of cumming, <<$boydesc>> pulls her ...
    scene.text(`Just as your sister looks to be on the verge of cumming, ${((st as any).boydesc ?? '')} pulls her off of the couch and pushes her onto her knees. Her mouth still open in shock, the client pushes his dick between her lips. You hear Anya whimper as the throbbing member slides along her tongue, obviously frustrated by being so close, and yet so far from orgasm.`);
    scene.text('The inconsiderate man turns his head your way. "You! Get over here and start licking my balls while I use your sister\'s dirty mouth!"');
    // TODO-QSP: dynamic text: You quickly get on your knees and obediently start tonguing <<$boydesc>>''s ball...
    scene.text(`You quickly get on your knees and obediently start tonguing ${((st as any).boydesc ?? '')}'s balls. They slip around your tongue and you're careful to dodge your sister's head as it slides up and down the long shaft.`);
    scene.text('The man groans in pleasure while enjoying you and your sister\'s expert work for a few minutes.');
    scene.text('"Okay, now switch," he commands while removing his cock from your sister\'s drooling mouth.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins4.jpg');
    // TODO-QSP: dynamic text: You let his balls fall away from you and move your head up to take his <<dick>> ...
    scene.text(`You let his balls fall away from you and move your head up to take his ${((st as any).dick ?? '')} cm cock into your mouth.`);
    scene.text('Simultaneously, Anya moves down and takes your previous place, licking the testicles back and forth.');
    scene.text('You work the cock in and out of your throat while maintaining eye contact with the client. You can tell that he\'s enraptured, feeling like the luckiest man in the world to be bedding a pair of hot "twins."');
    scene.text('"God, I can\'t decide which one of you is the better cocksucker," he groans through raspy breaths.');
    scene.text('You playfully gesture towards yourself with a thumb and a wink, never slowing down as you blow him. Out of the corner of your eye, you see Anya shake her head and point to herself.');
    scene.text('The man spends the next few minutes making you switch back and forth a few more times before declaring you and your sister to be equally skilled at giving head.');
    qspCall(st, 'arousal', 'bj', 5, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins5.jpg');
    scene.text('The client finally removes his dick from you and Anya\'s grasp and sits on the couch.');
    scene.text('"I don\'t care which of you does it, but one of you better come here and sit on my dick."');
    scene.text('You look at your sister and decide to take the initiative, moving towards the man quickly.');
    scene.text('You mount him and lower yourself down, your eyes rolling back as you feel his cock stretch you open, sending waves of ecstasy through you.');
    scene.text('Anya sits next to the man and starts rubbing her pussy as you slide up and down on his thick shaft.');
    scene.text('Before even giving you time to adjust, she starts encouraging the guy to give it his all. "No need to hold back, sir. My slutty sister can take <i>anything</i> you give her."');
    scene.text('The man takes her word as gospel, grips your hips tightly, and starts furiously thrusting up into you. Waves of pain join the ecstasy thrumming through your body as you attempt to get used to the unexpected roughness.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins6.jpg');
    scene.text('After a few minutes, the man suddenly pushes Anya off the couch. "Your sister is a great fuck indeed, but I think you should go ahead and start doing some work too."');
    scene.text('The client continues to slam into your sensitive pussy with all his might while Anya licks and massages his balls.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins7.jpg');
    scene.text('After a few minutes, the man pushes you off of him. His coarse, calloused hands manipulate your body until you\'re laying stomach down on the couch.');
    scene.text('"Get up," he says gruffly to Anya. You stay in your place while looking back to see what they\'re doing.');
    scene.text('By the time he\'s satisfied, he has your sister stacked on top of you, her pussy just above yours. The client takes a moment to admire his masterpiece before he thrusts his dick into Anya\'s awaiting pussy. Your sister cries out in pleasure as the stranger buries himself inside her.');
    scene.text('You\'re glad that your pussy is getting some rest after the furious pounding it received, but the relief doesn\'t last long. Soon enough, he pulls out of Anya and plunges into your depths once again. You scream out in surprise, not expecting the sudden penetration as new waves of pleasure ripple through your body.');
    scene.text('The man alternates between you and your sister\'s dripping holes every few thrusts, moaning to himself every time he makes the switch.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins8.jpg');
    scene.text('The man finally pulls his cock out of you and steps back. "Okay girls, one last request. I\'m going to fuck one of you up the ass, but you can decide who gets it."');
    qspCall(st, 'arousal', 'vaginal', 10, 'prostitution');
    qspCall(st, 'stat', '');
    if (((st as any).klismaday ?? 0) !== ((st as any).daystart ?? 0)) {
      scene.text('You lean in close and whisper to Anya that you hadn\'t cleaned yourself down there today.');
      // TODO-QSP: dynamic text: "Don''t worry <<$pcs_nickname>>, I love it up the ass!" she whispers back, her e...
      scene.text(`"Don't worry ${((st as any).pcs_nickname ?? '')}, I love it up the ass!" she whispers back, her eyes wide with arousal and desire.`);
      scene.actions([
        { label: 'Anya takes it', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins9.jpg');
    scene.text('Anya positions herself with her ass in the air on the couch and smiles back at the horny client.');
    // TODO-QSP: dynamic text: <<$boydesc>> moves in behind her and starts rubbing his dick against her asshole...
    scene.text(`${((st as any).boydesc ?? '')} moves in behind her and starts rubbing his dick against her asshole before he starts slowly pushing it in. She can't stop a groan from escaping her mouth as her anus resists.`);
    scene.text('"Just relax and it will go a lot easier, girl," the man groans.');
    scene.text('"Yeah, Anya, just relax. I know this is not the first dick you\'ve had in your ass," you add, giggling at her discomfort.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins10.jpg');
    scene.text('Hearing your playful mockery elicits a chuckle from Anya, but it surprisingly helps her relax. The head of the thick dick suddenly pops into her sphincter, causing her to cry out in surprise and satisfaction.');
    // TODO-QSP: dynamic text: <<$boydesc>> starts slowly sliding his fat cock back and forth inside of her, yo...
    scene.text(`${((st as any).boydesc ?? '')} starts slowly sliding his fat cock back and forth inside of her, your sister's breathing getting faster as she clutches at the couch cushion. You recognize these signs and know Anya is getting close to orgasm.`);
    // TODO-QSP: dynamic text: <<$boydesc>> notices this too. "Looks like you''re ready to cum for me. Let me h...
    scene.text(`${((st as any).boydesc ?? '')} notices this too. "Looks like you're ready to cum for me. Let me help you with that."`);
    scene.text('The client gently flips Anya onto her back, lying on the couch, his dick somehow never slipping out of her ass. He continues stretching her anus while rubbing her clit with his thumb. Your sister moans in pure pleasure as he expertly manipulates her clit.');
    scene.text('His other hand falls gently upon her breast and starts squeezing her nipple as his cock continues to drive back and forth into her bowels.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins11.jpg');
    scene.text('This quickly becomes too much for your sister. Being stimulated in 3 erogenous zones at once, she explodes in an earth-shaking orgasm like she\'s never experienced before.');
    scene.text('Anya\'s whole body starts shaking and you jump up to hold her before she falls off the couch.');
    // TODO-QSP: dynamic text: <<$boydesc>> laughs heartily. "Okay girl, you had your release. Now it''s my tur...
    scene.text(`${((st as any).boydesc ?? '')} laughs heartily. "Okay girl, you had your release. Now it's my turn."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins12.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls out of your sister''s ass and motions for you to come closer.
    scene.text(`${((st as any).boydesc ?? '')} pulls out of your sister's ass and motions for you to come closer.`);
    // TODO-QSP: dynamic text: You kneel down next to your sister and move your head close to hers. You both op...
    scene.text(`You kneel down next to your sister and move your head close to hers. You both open your mouths as ${((st as any).boydesc ?? '')} starts jerking his dick quickly.`);
    scene.text('"Here it comes, girls! Now you play nice and share my gift," he grins before he starts shooting his load, adjusting his aim between you and your sister.');
    scene.text('You each catch some of his cum in you mouths while the rest splatters across your faces. Once he finishes, you turn to your sister and you both start licking the cum from each other\'s faces before swapping the load back and forth with a kiss. Anya ends up swallowing most of it while you smile.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins13.jpg');
    // TODO-QSP: dynamic text: "Since your sister was a real champ by taking it in the ass, you can be on clean...
    scene.text(`"Since your sister was a real champ by taking it in the ass, you can be on cleaning duty," ${((st as any).boydesc ?? '')} says while pushing his cum-soaked dick between your lips.`);
    scene.text('You try to protest, but it\'s too late; the dick enters your mouth before any words leave it. You submit and use your tongue to thoroughly clean his cock while whimpering in disapproval.');
    scene.text('You hear Anya snicker at the idea of you being forced to taste her ass on this stranger\'s rod and shoot her an angry look from the side.');
    // TODO-QSP: dynamic text: You then hear someone honking a horn outside and look at the clock. You realize ...
    scene.text(`You then hear someone honking a horn outside and look at the clock. You realize the whole hour has passed and ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} has arrived.`);
    // TODO-QSP: dynamic text: Not wanting to keep <<$npc_nickname[''A217'']>> waiting, you and your sister qui...
    scene.text(`Not wanting to keep ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} waiting, you and your sister quickly put on your clothes, say goodbye to ${((st as any).boydesc ?? '')}, and leave the house.`);
    scene.actions([
      { label: 'Pavlin takes you home', goto: ['pavlin', 'twinhome'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      // TODO-QSP: dynamic text: Your sister looks at you, unsure. "So, <<$pcs_nickname>>, do you want to take it...
      scene.text(`Your sister looks at you, unsure. "So, ${((st as any).pcs_nickname ?? '')}, do you want to take it?"`);
      scene.text('You can tell that she\'s not feeling the idea of getting assfucked by this guy, so you nod to let her know you\'re ready to jump in front of this bullet.');
      qspCall(st, 'willpower', 'anal', 'force', 'hard');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Force Anya to take it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Make Anya to take it', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'anal', 'force', 'hard');
    qspCall(st, 'willpower', 'pay', 'force');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins9.jpg');
    scene.text('You motion Anya towards the coach, "That\'s all yours. Enjoy."');
    // TODO-QSP: dynamic text: <<$boydesc>> moves in behind her and starts rubbing his dick against her asshole...
    scene.text(`${((st as any).boydesc ?? '')} moves in behind her and starts rubbing his dick against her asshole before he starts slowly pushing it in. She can't stop a groan from escaping her mouth as her anus resists.`);
    scene.text('"Just relax and it will go a lot easier, girl," the man groans.');
    scene.text('"Yeah, Anya, just relax. I know this is not the first dick you\'ve had in your ass," you add, giggling at her discomfort.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins10.jpg');
    scene.text('Hearing your playful mockery elicits a chuckle from Anya, but it surprisingly helps her relax. The head of the thick dick suddenly pops into her sphincter, causing her to cry out in surprise and satisfaction.');
    // TODO-QSP: dynamic text: <<$boydesc>> starts slowly sliding his fat cock back and forth inside of her, yo...
    scene.text(`${((st as any).boydesc ?? '')} starts slowly sliding his fat cock back and forth inside of her, your sister's breathing getting faster as she clutches at the couch cushion. You recognize these signs and know Anya is getting close to orgasm.`);
    // TODO-QSP: dynamic text: <<$boydesc>> notices this too. "Looks like you''re ready to cum for me. Let me h...
    scene.text(`${((st as any).boydesc ?? '')} notices this too. "Looks like you're ready to cum for me. Let me help you with that."`);
    scene.text('The client gently flips Anya onto her back, lying on the couch, his dick somehow never slipping out of her ass. He continues stretching her anus while rubbing her clit with his thumb. Your sister moans in pure pleasure as he expertly manipulates her clit.');
    scene.text('His other hand falls gently upon her breast and starts squeezing her nipple as his cock continues to drive back and forth into her bowels.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins11.jpg');
    scene.text('This quickly becomes too much for your sister. Being stimulated in 3 erogenous zones at once, she explodes in an earth-shaking orgasm like she\'s never experienced before.');
    scene.text('Anya\'s whole body starts shaking and you jump up to hold her before she falls off the couch.');
    // TODO-QSP: dynamic text: <<$boydesc>> laughs heartily. "Okay girl, you had your release. Now it''s my tur...
    scene.text(`${((st as any).boydesc ?? '')} laughs heartily. "Okay girl, you had your release. Now it's my turn."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins12.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls out of your sister''s ass and motions for you to come closer.
    scene.text(`${((st as any).boydesc ?? '')} pulls out of your sister's ass and motions for you to come closer.`);
    // TODO-QSP: dynamic text: You kneel down next to your sister and move your head close to hers. You both op...
    scene.text(`You kneel down next to your sister and move your head close to hers. You both open your mouths as ${((st as any).boydesc ?? '')} starts jerking his dick quickly.`);
    scene.text('"Here it comes, girls! Now you play nice and share my gift," he grins before he starts shooting his load, adjusting his aim between you and your sister.');
    scene.text('You each catch some of his cum in you mouths while the rest splatters across your faces. Once he finishes, you turn to your sister and you both start licking the cum from each other\'s faces before swapping the load back and forth with a kiss. Anya ends up swallowing most of it while you smile.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins13.jpg');
    // TODO-QSP: dynamic text: "Since your sister was a real champ by taking it in the ass, you can be on clean...
    scene.text(`"Since your sister was a real champ by taking it in the ass, you can be on cleaning duty," ${((st as any).boydesc ?? '')} says while pushing his cum-soaked dick between your lips.`);
    scene.text('You try to protest, but it\'s too late; the dick enters your mouth before any words leave it. You submit and use your tongue to thoroughly clean his cock while whimpering in disapproval.');
    scene.text('You hear Anya snicker at the idea of you being forced to taste her ass on this stranger\'s rod and shoot her an angry look from the side.');
    // TODO-QSP: dynamic text: You then hear someone honking a horn outside and look at the clock. You realize ...
    scene.text(`You then hear someone honking a horn outside and look at the clock. You realize the whole hour has passed and ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} has arrived.`);
    // TODO-QSP: dynamic text: Not wanting to keep <<$npc_nickname[''A217'']>> waiting, you and your sister qui...
    scene.text(`Not wanting to keep ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} waiting, you and your sister quickly put on your clothes, say goodbye to ${((st as any).boydesc ?? '')}, and leave the house.`);
    scene.actions([
      { label: 'Pavlin drives you home', goto: ['pavlin', 'twinhome'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'You take it', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins9.jpg');
    scene.text('You position yourself with your head resting on a pillow and your ass high in the air.');
    scene.text('You wiggle your ass at the client enticingly. "Your anal slut is waiting..." you say with a mischievous grin on your face.');
    // TODO-QSP: dynamic text: "God, I love an eager whore!" <<$boydesc>> laughs as he moves in behind you and ...
    scene.text(`"God, I love an eager whore!" ${((st as any).boydesc ?? '')} laughs as he moves in behind you and starts rubbing his dick against your asshole.`);
    scene.text('He starts to slowly push it in and you can\'t stop a groan from escaping your mouth as your butthole resists the invasion.');
    scene.text('"Just relax girl, it will go a lot easier." The man says.');
    // TODO-QSP: dynamic text: "Yeah <<$pcs_nickname>>, just relax. I know this is not the first dick you have ...
    scene.text(`"Yeah ${((st as any).pcs_nickname ?? '')}, just relax. I know this is not the first dick you have had in your ass." Anya agrees, mockingly, unable to hide a giggle that follows her words.`);
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins10.jpg');
    scene.text('Hearing your sister teasing you about your sudden slut-hood surprisingly helps you relax, and the fat cock slips into your tight sphincter.');
    // TODO-QSP: dynamic text: <<$boydesc>> starts slowly moving his dick back and forth with short, gentle thr...
    scene.text(`${((st as any).boydesc ?? '')} starts slowly moving his dick back and forth with short, gentle thrusts. Your breathing begins to increase in pace as you get more excited by the massive cock inside you.`);
    // TODO-QSP: dynamic text: <<$boydesc>> takes notice. "Looks like you''re ready to cum for me. Let me help ...
    scene.text(`${((st as any).boydesc ?? '')} takes notice. "Looks like you're ready to cum for me. Let me help you there."`);
    scene.text('The client gently flips you onto your back, his dick somehow never slipping out of your ass. He continues stretching your anus while rubbing your clit with his thumb. You moan in pure pleasure as he expertly manipulates your clit.');
    scene.text('His other hand falls gently upon your breast and he begins rubbing and squeezing your nipple, his cock continuing to drive back and forth into your bowels.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins11.jpg');
    scene.text('The pleasure quickly builds to a crescendo before exploding. Being stimulated in 3 erogenous zones at once, you feel an earth-shattering orgasm like you\'ve never experienced before.');
    scene.text('Your whole body starts shaking uncontrollably as you cum and, if your sister hadn\'t jumped up to hold you, you would have fallen off the couch.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'anal', 10, 'prostitution');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: <<$boydesc>> laughs. "Okay girl, you had your release. Now it''s my turn."
    scene.text(`${((st as any).boydesc ?? '')} laughs. "Okay girl, you had your release. Now it's my turn."`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins12.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls his cock out of your ass with a loud pop and motions for Anya...
    scene.text(`${((st as any).boydesc ?? '')} pulls his cock out of your ass with a loud pop and motions for Anya to come closer.`);
    // TODO-QSP: dynamic text: You kneel down next to your sister and move your head close to hers. You both op...
    scene.text(`You kneel down next to your sister and move your head close to hers. You both open your mouths while ${((st as any).boydesc ?? '')} starts jerking his dick quickly, awaiting your prize.`);
    scene.text('"Here it comes, girls. Now you play nice and share my gift," he grins before he starts shooting his load, adjusting his aim between you and your sister.');
    scene.text('You each catch some of his cum in you mouths while the rest splatters across your faces. Once he\'s finished, you turn to you sister and you both start licking the cum from each other\'s faces before swapping the load back and forth with a kiss. You end up swallowing most of it while your sister smiles.');
    scene.img('images/characters/pavlovsk/resident/anya/sex/twins13.jpg');
    // TODO-QSP: dynamic text: "Since your sister was a real champ, taking it in the ass and all that, you can ...
    scene.text(`"Since your sister was a real champ, taking it in the ass and all that, you can be on cleaning duty," ${((st as any).boydesc ?? '')} says as he pushes his cum-soaked dick between your sibling's lips.`);
    scene.text('Anya tries to protest, but it\'s too late; the dick enters her mouth before any words leave it. She resigns herself to the task and uses her tongue to thoroughly clean the cock while whimpering in disapproval.');
    scene.text('You can\'t help but snicker at the idea of her being forced to taste your ass on this stranger\'s rod and she shoots you an angry look from the side.');
    // TODO-QSP: dynamic text: You suddenly hear someone honking a horn outside and look at the clock. You real...
    scene.text(`You suddenly hear someone honking a horn outside and look at the clock. You realize the whole hour has passed and ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} has arrived.`);
    // TODO-QSP: dynamic text: Not wanting to keep <<$npc_nickname[''A217'']>> waiting, you and your sister qui...
    scene.text(`Not wanting to keep ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} waiting, you and your sister quickly put on your clothes, say goodbye to ${((st as any).boydesc ?? '')}, and leave the house.`);
    scene.actions([
      { label: 'Pavlin drives you home', goto: ['pavlin', 'twinhome'] },
    ]);
  } },
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
  scene.build();
}

function enterTwinhome(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'cum_call', 'face', ((s as any).npclastgenerated ?? 0));
  // TODO-QSP: dynamic text: You both jump in the car and <<$npc_nickname[''A217'']>> drives away.
  scene.text(`You both jump in the car and ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} drives away.`);
  // TODO-QSP: dynamic text: "Thanks for that, <<$pcs_nickname>>. You really are the greatest sister in the w...
  scene.text(`"Thanks for that, ${((s as any).pcs_nickname ?? '')}. You really are the greatest sister in the world!" Anya says before grabbing you and planting a passionate kiss on your still sticky lips.`);
  scene.text('After a while, you reach the apartment complex.');
  // TODO-QSP: dynamic text: "Great job, girls. Anya, if you ever want to come work for me like your sister, ...
  scene.text(`"Great job, girls. Anya, if you ever want to come work for me like your sister, then feel free to drop by the hotel," ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} offers.`);
  scene.text('"Ha ha, no thanks. I\'m not a who..." Anya looks at you and stops herself before she finishes the sentence.');
  scene.text('"No, not interested. But thanks," she says while quickly leaving the car and heading inside.');
  // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> can''t stop laughing as he hands you <<$func(''money...
  scene.text(`${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} can't stop laughing as he hands you ${qspFunc(s, 'money', 'string_profit', 10000)}. "Ha ha ha! Lucky there's an actual whore in the family then!"`);
  // TODO-QSP: dynamic text: You leave the car, face burning red in embarrassment, and go inside to your room...
  scene.text(`You leave the car, face burning red in embarrassment, and go inside to your room. You were planning to divide the money evenly with your sister, but now that you know what she really thinks of you, you hand her ${qspFunc(s, 'money', 'string_profit', 1000)}.`);
  scene.text('"Since you\'re not a whore, I guess you don\'t deserve a whore\'s pay," you say snidely and quickly head back out of the room before Anya has a chance to respond.');
  qspCall(s, 'arousal', 'end');
  (s as any).TwinQW = 6;
  (s as any).guy = ((s as any).guy ?? 0) + (1);
  qspCall(s, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
  qspCall(s, 'npc_relationship', 'modify', 'A217', 10);
  qspCall(s, 'money', 'earn', 9000);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', goto: ['korrPar', ''] },
  ]);
  scene.build();
}

function enterClown(s: GameState, scene: SceneBuilder): void {
  (s as any).fcolor = 0;
  (s as any).bcolor = 0;
  (s as any).lcolor = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.text('When you enter the room, you notice the lights are off and the curtains closed. You try to turn the lights on, but nothing happens.');
  scene.text('"Hello? Is anyone here?" you call out.');
  scene.text('You receive no reply, so you stumble towards the bed and try the light switch there.');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn on the switch near the bed', handler: (st: GameState) => {
    scene.text('You hear the lights starting to buzz, but they don\'t turn on immediately ');
    scene.img('images/characters/pavlovsk/pavlin/clown1.jpg');
    scene.text('What was that?!');
    scene.text('The lights keep buzzing, but still don\'t produce any light.');
    scene.img('images/characters/pavlovsk/pavlin/clown1.jpg');
    scene.text('Again, you think you saw something at the other side of the room.');
    scene.text('You\'re getting scared as the buzzing sound gets louder...');
    qspCall(st, 'stat', '');
    (st as any).fcolor = 0;
    (st as any).bcolor = 0;
    (st as any).lcolor = 0;
    scene.img('images/characters/pavlovsk/pavlin/clown1.jpg');
    scene.text('The lights suddenly turn on and you scream.');
    scene.text('In front of you are two clowns, one holding a bag and the other holding a roll of duct tape.');
    scene.text('"Okay Popov, now put the bag over her head."');
    scene.text('"No Popav, you have to put the tape over her mouth first."');
    scene.text('"What? No, I can put the tape over the bag."');
    scene.text('"That won\'t work. Just do the tape first!"');
    scene.text('The two clowns start arguing, seemingly oblivious to your presence.');
    scene.text('"Excuse me?" you say, but the clowns ignore you and continue arguing on the order of their actions.');
    scene.text('"Don\'t ruin this for me, Popov! I need this."');
    scene.text('"I need this too, Popav, but we need to catch this girl first before we can have sex with her."');
    scene.text('"I agree. So let me do the tape first."');
    scene.text('"No, you were right before. I\'ll do the bag first."');
    scene.text('"No, no. I\'ll do the tape."');
    scene.text('You need to speed things up here...');
    scene.actions([
      { label: 'Remove your clothes', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/pavlin/clown3.mp4');
    scene.text('You remove your clothes and move towards the quibbling clowns before grabbing them by the crotch.');
    scene.text('"Guys, you already paid for me, so you don\'t need to catch me anymore."');
    scene.text('You unzip Popov\'s pants and start sucking his dick.');
    scene.img('images/characters/pavlovsk/pavlin/clown4.mp4');
    scene.text('"Hey, what about me?" Popav asks.');
    scene.text('He puts his hand down your panties and starts rubbing between your pussy.');
    scene.text('"Come on Popov, give her to me, I paid for her too."');
    scene.text('"Just a minute! This little slut is such a great cocksucker."');
    scene.text('"Enough!" Popav exclaims as he pulls you away from Popov.');
    scene.text('"Now have a taste of <i>this</i>!" he says before shoving his cock into your mouth.');
    scene.img('images/characters/pavlovsk/pavlin/clown5.mp4');
    scene.text('While Popov allowed you to go at your own tempo, Popav doesn\'t seem to care about that and just furiously starts fucking your mouth.');
    scene.text('"Don\'t be so rough with her, Popav! You can explain it to the guy downstairs if you break her."');
    scene.text('"Ha ha, this little slut doesn\'t break so easily," Popav laughs while ramming his dick once more to the back of your throat.');
    scene.text('This was unexpected and you start gagging.');
    scene.text('"You see? Just take it easy, man!"');
    scene.text('"Fine!" Popav sulks while taking his dick out of your mouth and throwing you on the bed.');
    qspCall(st, 'npcgeneratec', '0', 'Clown Popov', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'boyStat', '$npclastgenerated');
    qspCall(st, 'arousal', 'bj', 15, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/pavlin/clown6.jpg');
    scene.text('Popav starts licking your pussy while Popov places his balls over your mouth.');
    scene.text('"Let\'s go, girl! These balls aren\'t going to lick themselves."');
    scene.text('You take the hint and put the balls in your mouth.');
    scene.text('After a minute, Popav stops licking. "Are you ready for some cock?"');
    scene.img('images/characters/pavlovsk/pavlin/clown7.mp4');
    scene.text('He pulls out a plastic \'cock\' and rubs it against your breasts.');
    scene.text('Both clowns start laughing, but the only thing you can do is to roll your eyes at his dumb joke.');
    scene.text('He puts the \'cock\' aside. "But seriously. Get ready for my massive, huge, humongous gigantic dick!"');
    qspCall(st, 'arousal', 'cuni', 15, 'prostitution');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/pavlin/clown8.mp4');
    scene.text('You position yourself on all fours and Popav pushes his average-sized dick in your pussy as you start sucking Popov\'s dick again.');
    scene.text('"Hey Popav, what\'s the difference between a battery and a woman?"');
    scene.text('"I don\'t know."');
    scene.text('"A battery has a positive side."');
    scene.text('The clowns start laughing and high fiving each other while you just groan at their stupidity.');
    scene.text('"What\'s the matter, girl? Are we not funny enough for you? Come here and finish us off. We don\'t have much time left."');
    scene.img('images/characters/pavlovsk/pavlin/clown9.mp4');
    scene.text('You get on your knees and stroke their dicks until they both cum over your chest.');
    scene.text('"Hey Popov, why is the space between a women\'s breasts and her hips called a waist?"');
    scene.text('"Because you could easily fit another pair of tits in there!"');
    scene.text('You again groan at the stupid joke and can\'t hide the fact that you\'re tired of these two clowns.');
    scene.text('"Okay girl, we\'ll give you one last present before we go. Just sit on the bed and look at me."');
    qspCall(st, 'arousal', 'vaginal', 15, 'prostitution');
    qspCall(st, 'cum_call', 'breasts', ((st as any).npclastgenerated ?? 0), 1);
    qspCall(st, 'npcgeneratec', '0', 'Clown Popav', (Math.floor(Math.random() * 28) + 18));
    qspCall(st, 'cum_call', 'breasts', ((st as any).npclastgenerated ?? 0), 1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    (st as any).guy = ((st as any).guy ?? 0) + (2);
    qspCall(st, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
    (st as any).ClownQW = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A217', 8);
    scene.actions([
      { label: 'Sit on the bed', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.text('You sit on the bed and Popov starts juggling some balls in the air. You\'re not impressed at all and just want to leave at this point.');
    scene.text('You\'re suddenly hit in the face by with a cream pie that comes out of nowhere, and not the fun baby-making one.');
    scene.img('images/characters/pavlovsk/pavlin/clown2.mp4');
    scene.text('Blinded by the pie, you feel the clowns grabbing you by the arms and pushing you out of the room.');
    scene.text('One of them throws your clothes at you. "Maybe next time you\'ll laugh at our jokes and you\'ll have a better time!"');
    scene.text('You start rubbing your face, cleaning off the pie when you realize you\'re standing butt naked in the hallway.');
    // TODO-QSP: dynamic text: You quickly put your clothes back on and go to the bar to meet <<$npc_nickname['...
    scene.text(`You quickly put your clothes back on and go to the bar to meet ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}.`);
    scene.actions([
      { label: 'Go to the bar', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 2000);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/pavlin/pavlin.jpg');
    // TODO-QSP: dynamic text: You see <<$npc_nickname[''A217'']>> in his usual corner booth and go over to him...
    scene.text(`You see ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} in his usual corner booth and go over to him.`);
    scene.text('When he notices your face full of pie, he starts laughing.');
    // TODO-QSP: dynamic text: "Ha ha ha! It looks like you had a good time, <<$pcs_firstname>>."
    scene.text(`"Ha ha ha! It looks like you had a good time, ${((st as any).pcs_firstname ?? '')}."`);
    scene.text('"Not at all! That was one of the weirdest things I\'ve ever encountered in my life!" you reply. "Just give me my money so I can go and try to forget that this ever happened."');
    // TODO-QSP: dynamic text: "Ha ha, no problem <<$pcs_firstname>>. Here''s your money. Enjoy it."
    scene.text(`"Ha ha, no problem ${((st as any).pcs_firstname ?? '')}. Here's your money. Enjoy it."`);
    // TODO-QSP: dynamic text: He hands you <<$func(''money'', ''string_profit'', 2000)>> as you think this exp...
    scene.text(`He hands you ${qspFunc(s, 'money', 'string_profit', 2000)} as you think this experience has traumatized you for life. You'll never look at another clown the same way again.`);
    scene.actions([
      { label: 'Back to the hotel lobby', goto: ['pav_hotel', ''] },
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

function enterPregBDSM(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npcgeneratec', '0');
  qspCall(s, 'boyStat', '$npclastgenerated');
  qspCall(s, 'stat', '');
  scene.text('"That shouldn\'t be a problem. With what he\'s willing to pay, you\'ll be able to put that kid of yours through college."');
  // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> steps away to make the call. 10 minutes later, the c...
  scene.text(`${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} steps away to make the call. 10 minutes later, the customer shows up.`);
  // TODO-QSP: dynamic text: He introduces himself as <<$boydesc>>. "Very nice, <<$npc_nickname[''A217'']>>. ...
  scene.text(`He introduces himself as ${((s as any).boydesc ?? '')}. "Very nice, ${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''}. This is exactly what I was looking for," he says while hungrily eyeing your pregnant body.`);
  // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> and <<$boydesc>> have a short discussion about your ...
  scene.text(`${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} and ${((s as any).boydesc ?? '')} have a short discussion about your price.`);
  // TODO-QSP: dynamic text: <<$npc_nickname[''A217'']>> goes over to the desk girl and comes back with a key...
  scene.text(`${((s as any).npc_nickname ?? 0)?.['A217'] ?? ''} goes over to the desk girl and comes back with a key. "We have full access to the hotel basement for the next 2 hours, so let's get on with it."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to the basement', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 5, 'rough', 'sub', 'humiliation', 'prostitution');
    qspCall(st, 'pain', '3', 'back', 'spank');
    qspCall(st, 'pain', '3', 'breasts', 'spank');
    qspCall(st, 'pain', '3', 'nipples', 'spank');
    qspCall(st, 'stat', '');
    // TODO-QSP: dynamic text: When the three of you arrive in the basement, <<$npc_nickname[''A217'']>> sits o...
    scene.text(`When the three of you arrive in the basement, ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} sits on a stool in the corner of the room while the man takes you to a table in the center.`);
    scene.text('He hands you a set of leather wrist cuffs, a matching collar and a pair of heels.');
    scene.text('"Undress and wear these," he says curtly.');
    scene.text('As you\'re busy undressing and equipping your new accessories, he lays out a series of whips and crops before he turns to you with a happy grin. "Please, choose one for us to enjoy."');
    // TODO-QSP: dynamic text: You look at <<$npc_nickname[''A217'']>> with pleading eyes, but receive no sympa...
    scene.text(`You look at ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} with pleading eyes, but receive no sympathy in return. You realize it's too late to back out now, so you examine the foreign whips and choose the one you think would be the least painful; a thin one that appears light in weight, figuring that the heavier ones would cause much more pain.`);
    // TODO-QSP: dynamic text: <<$boydesc>> approaches you and starts caressing your swollen belly and breasts.
    scene.text(`${((st as any).boydesc ?? '')} approaches you and starts caressing your swollen belly and breasts.`);
    scene.img('images/locations/pavlovsk/hotel/pregbdsm1.jpg');
    scene.text('He suddenly takes your arms and attaches your leather bracelets to a chain hanging above your head.');
    scene.text('Panic begins to creep into your mind when, without warning, you feel the whip lash across your back.');
    scene.text('<b>WHOOSH</b>!');
    scene.text('You clench your teeth and take it before another strike lands.');
    scene.text('<b>WHISHP</b>!');
    scene.text('You refuse to scream out, not wanting to give your torturer the satisfaction, but...');
    scene.text('<b>WHOOSH</b>!');
    scene.text('<b>WHAP</b>!');
    scene.text('The whip snaps across each breast before you see it coming and you finally scream out, the unexpected spike in pain proving too much to ignore.');
    scene.text('"Well, well, it looks like the little bitch can feel pain after all," The cruel pervert says, a smile plastered across his vile face.');
    scene.text('<b>WHIP</b>!');
    scene.text('<b>SNAP</b>!');
    scene.text('Two more hits slice sharply across your sensitive nipples, eliciting one scream after another.');
    scene.text('The torment continues for what feels like an eternity as the client alternates randomly between striking yours breasts, back and buttocks, but the worst by far is when he zeroes in on your quivering pussy. As the instrument slaps viciously across your labia, you scream and beg, tears streaming down your tortured face.');
    scene.text('When the whip lands directly on your clit, you feel like passing out and vomiting at the same time as your stomach twists in agony.');
    scene.text('The horrible man finally steps away. "Okay whore, enough screaming."');
    scene.text('You look at the man with pathetic, pleading eyes. You can feel heat radiating from every lash, every point of impact burns relentlessly.');
    scene.text('"Let\'s use that little mouth of yours for something even more fun," he says while unbuttoning his pants and exposing his rock-hard member.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 30, 'rough', 'sub', 'humiliation', 'prostitution');
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/pregbdsm2.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> releases your cuffs from the chain and you immediately collapse ont...
    scene.text(`${((st as any).boydesc ?? '')} releases your cuffs from the chain and you immediately collapse onto your knees, the forced suspension being the only thing keeping you standing. He takes his ${((st as any).dick ?? '')} cm dick and pushes it against your lips.`);
    scene.text('"Now start working, you fat cow!" he demands.');
    scene.text('You open your mouth, slide your lips over the cock and start sucking halfheartedly, exhausted from your previous predicament, but thankful to be doing something you\'re more familiar with.');
    scene.text('"You\'ll have to do better than that, you worthless whore!"');
    scene.text('He spits in your face and slaps your cheek, the sound echoing through the basement.');
    scene.text('You notice the whip still clutched in his hand and start sucking with all your skill, praying he doesn\'t decide to use it again. Thoughts of your unborn child and the situation you\'re in creep into your mind as you pleasure your captor. Tears well up in your eyes once more.');
    scene.text('"Well well, it looks like our fat bitch isn\'t happy here. I know how to remedy that. Let\'s take a little walk."');
    // TODO-QSP: dynamic text: <<$boydesc>> pulls his slathered cock from your mouth and attaches a chain to yo...
    scene.text(`${((st as any).boydesc ?? '')} pulls his slathered cock from your mouth and attaches a chain to your collar before he steps away and tugs the leash hard, the force pulling you onto your hands and knees.`);
    scene.text('You have no choice but to follow him around on all fours, your heavy belly swaying as you crawl across the dirty cement floor, feeling more degraded by each step.');
    scene.text('"See my little doggy, isn\'t this better? Knowing your place in the world?"');
    scene.text('<b>WHAP</b>!');
    scene.text('The whip snaps across your sore ass once more and you cry out.');
    scene.text('"I asked you a question, slut!" the man bellows.');
    scene.text('"Yes sir, much better!" you say obediently, wiping away a tear.');
    scene.text('Your new master marches you around in circles for a few minutes, laughing as you attempt to keep up with his pace.');
    scene.text('He pushes a small metal bowl towards you with his foot. "Use this."');
    scene.text('You look up at him in confusion. The bowl is empty and you\'re unsure what he expects you to do with it.');
    scene.text('"This is the doggy\'s new toilet! Show me how house-broken you are or I\'ll beat you senseless!" he barks, raising the whip for you to see it.');
    scene.text('His threat is enough to get you moving.');
    scene.img('images/locations/pavlovsk/hotel/pregbdsm3.jpg');
    scene.text('You carefully squat over the bowl, cradling your belly with one hand as you relax your bladder and feel a torrent of piss begin streaming out of you. For the first time since this all started, you feel a bit of relief.');
    scene.text('As the stream finally comes to an end, leaving the bowl nearly filled to the brim, your cheeks flush in embarrassment at this strange man watching you pee.');
    scene.text('"That\'s a good doggy," he laughs.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/hotel/pregbdsm5.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> suddenly grabs a fistful of your hair and pushes your head towards ...
    scene.text(`${((st as any).boydesc ?? '')} suddenly grabs a fistful of your hair and pushes your head towards the bowl. "What's that? You spilled some!"`);
    scene.text('You try to resist and stiffen your neck, attempting to push your head back up as the smell of your piss wafts into your nostrils, hot and bitter.');
    scene.text('"Now be a good little bitch and take a sip from your bowl," he says, holding your head in place.');
    // TODO-QSP: dynamic text: You shoot a look of terror across the room to <<$npc_nickname[''A217'']>>, hopin...
    scene.text(`You shoot a look of terror across the room to ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}, hoping against hope that he'll stop this. Your heart sinks as he just gestures for you to go ahead and do your job.`);
    scene.text('Your breathing becomes ragged as the panic reaches a new peak in your chest.');
    scene.actions([
      { label: 'Swallow your pride', handler: (st: GameState) => {
    (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) + (20);
    qspCall(st, 'arousal', 'pee', (-5), 'sub', 'humiliation');
    qspCall(st, 'arousal', 'end');
    scene.img('images/locations/pavlovsk/hotel/pregbdsm6.jpg');
    // TODO-QSP: dynamic text: <<$boydesc>> pushes your head into the bowl and you start lapping at the disgust...
    scene.text(`${((st as any).boydesc ?? '')} pushes your head into the bowl and you start lapping at the disgusting liquid. The sour taste seems to permeate every orifice and your stomach seizes as you feel your gag reflex try to kick in, but you force it away and continue licking and slurping.`);
    scene.text('"So, my little piss slut, how does it taste?" the deviant asshole inquires, mock interest evident in his tone.');
    scene.text('"It tastes great, sir! Thank you for this, sir!" you lie submissively, telling him what he wants to hear.');
    scene.text('"I knew a disgusting pig slut like you would enjoy it. Now for your final reward."');
    scene.img('images/locations/pavlovsk/hotel/pregbdsm4.jpg');
    scene.text('The client pushes you onto the ground and slides his dick back into your mouth. He starts furiously fucking your face, showing no concern for your comfort.');
    scene.text('Your throat aches from the abuse, and you\'re ashamed but thankful to have the taste of cock in your mouth once again. Anything to help dull the awful taste is welcome at this point.');
    scene.text('The man continues relentlessly face-fucking you until he finally erupts and cums in your mouth. The taste finally seems to fully nullify the sour flavor that coated your taste buds before.');
    scene.text('After his orgasm, the man stands up. "Thank you very much, honey. You were great!"');
    scene.text('His whole demeanor suddenly changes and he starts treating you like a person instead of a mindless sex toy. He reaches towards you and gives you a loving peck on the cheek.');
    scene.text('He helps you to your feet, careful to help you regain your balance in your delicate state. He then assists you with taking off the bracelets and collar before putting your regular clothes back on.');
    qspCall(st, 'cum_call', 'mouth', ((st as any).npclastgenerated ?? 0));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Go to Pavlin', handler: (st: GameState) => {
    scene.text('"Wow! I can\'t believe you actually did that shit! It was disgusting! You really are the best girl I\'ve got."');
    scene.text('He hands you a huge pile of cash. "Here\'s your reward. You certainly deserve it."');
    // TODO-QSP: dynamic text: You start counting it and find that it''s almost <<$func(''money'', ''string_pro...
    scene.text(`You start counting it and find that it's almost ${qspFunc(s, 'money', 'string_profit', 28000)}.`);
    scene.text('You contemplate what you\'ve done and how low it made you feel as you tuck the money into your wallet. You feel a deep sense of shame as you leave the basement.');
    qspCall(st, 'money', 'earn', 28000);
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'fame', 'pav', 'prostitute', (Math.floor(Math.random() * 3) + 2));
    (st as any).preghumdone = 1;
    qspCall(st, 'npc_relationship', 'modify', 'A217', 20);
    scene.actions([
      { label: 'Back to lobby', goto: ['pav_hotel', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'I can\'t do this', handler: (st: GameState) => {
    ((st as any).stat = (st as any).stat ?? {})['prostitution_count'] = ((st as any).stat['prostitution_count'] ?? 0) - (1);
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'pain', '9', 'head', 'hit');
    qspCall(st, 'pain', '9', 'tummy', 'kick');
    qspCall(st, 'stat', '');
    scene.text('You start shaking your head violently and wrestle yourself free from his grip with all your strength. You roll away and break down crying on the floor.');
    // TODO-QSP: dynamic text: "What the hell, <<$npc_nickname[''A217'']>>?! You told me she was up for it! Thi...
    scene.text(`"What the hell, ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}?! You told me she was up for it! This is the last time I try one of your girls!"`);
    // TODO-QSP: dynamic text: <<$boydesc>> quickly zips his cock away, collects his stuff, and leaves the room...
    scene.text(`${((st as any).boydesc ?? '')} quickly zips his cock away, collects his stuff, and leaves the room in a huff of anger.`);
    scene.img('images/characters/pavlovsk/pavlin/pavlin_violent4.jpg');
    // TODO-QSP: dynamic text: You look up and no longer see <<$npc_nickname[''A217'']>>''s eyes; you see a mon...
    scene.text(`You look up and no longer see ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}'s eyes; you see a monster. You can practically feel the rage radiating from him as he marches towards you, fists clenched.`);
    // TODO-QSP: dynamic text: You scramble to your feet as quickly as you''re able and try to reason with him....
    scene.text(`You scramble to your feet as quickly as you're able and try to reason with him. "${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}, I'm so sorr-"`);
    scene.text('You don\'t even complete the sentence before you feel your nose explode under his fist.');
    scene.text('"You fucking <b>CUNT</b>! Do you know how much money you just cost me?!" he screams.');
    scene.text('You feel blood pouring from your nose as a metallic taste pools in your mouth. You attempt to shake the dizziness from your head, but a second punch slams into your jaw.');
    scene.text('"After everything I\'ve done for you, this is how you repay me?!"');
    // TODO-QSP: dynamic text: You stumble back and look at <<$npc_nickname[''A217'']>> with watery eyes. You s...
    scene.text(`You stumble back and look at ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} with watery eyes. You see his clenched hand rise again, so you cover your head for protection and close your eyes, bracing for impact.`);
    // TODO-QSP: dynamic text: All the breath leaves your body as <<$npc_nickname[''A217'']>> buries his fist i...
    scene.text(`All the breath leaves your body as ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''} buries his fist into your pregnant belly. Your knees turn to jelly as you fall to the ground, now laying on your side. You feel a sickly, twisting pain in your stomach and everything inside you feels wrong.`);
    scene.text('Your motherly instict cries out to you as the tip of the horrible bastard\'s steel toe boot slams into your swollen belly again and again. You try to cover your womb with your arms as his assault continues, but the boot manages to make it through your desperate defense.');
    // TODO-QSP: dynamic text: "Stop <<$npc_nickname[''A217'']>>! Please! My baby..." you beg and look up at hi...
    scene.text(`"Stop ${((st as any).npc_nickname ?? 0)?.['A217'] ?? ''}! Please! My baby..." you beg and look up at him just in time to see the sole of his boot racing down towards your face...`);
    scene.actions([
      { label: 'Everything goes black', handler: (st: GameState) => {
    (st as any).fcolor = 0;
    (st as any).bcolor = 0;
    (st as any).lcolor = 0;
    scene.text('Darkness...');
    scene.actions([
      { label: 'What is this?', handler: (st: GameState) => {
    // TODO-QSP: :faintbegin
    if (((st as any).faintcounter ?? 0) < 9) {
      (st as any).minut = ((st as any).minut ?? 0) + 180;
      scene.text('...');
      if (((st as any).faintcounter ?? 0) === 3) {
        // TODO-QSP: dynamic text: "<<$pitfs>>Where am I?<<$pitfe>>"<br>
        scene.text(`"${((st as any).pitfs ?? '')}Where am I?${((st as any).pitfe ?? '')}"<br>`);
      }
      if (((st as any).faintcounter ?? 0) === 5) {
        // TODO-QSP: dynamic text: "<<$pitfs>>Am I dead?<<$pitfe>>"<br>
        scene.text(`"${((st as any).pitfs ?? '')}Am I dead?${((st as any).pitfe ?? '')}"<br>`);
      }
      if (((st as any).faintcounter ?? 0) === 7) {
        // TODO-QSP: dynamic text: "<<$pitfs>>What happened?<<$pitfe>>"
        scene.text(`"${((st as any).pitfs ?? '')}What happened?${((st as any).pitfe ?? '')}"`);
      }
      (st as any).faintcounter = ((st as any).faintcounter ?? 0) + (1);
      // TODO-QSP: jump 'faintbegin'
    } else {
      scene.actions([
        { label: 'Wake up', handler: (st: GameState) => {
    scene.img('images/locations/shared/clinic/wakeup.jpg');
    scene.text('You slowly open your eyes. Your vision is blurry and you have to blink several times to clear it.');
    scene.text('You find yourself lying on a soft bed. You look around and see a sterile white room with a woman in light blue scrubs standing with her back to you. Your mind pieces together the clues and you realize this is the hospital.');
    scene.text('"H-hello?" You choke out the word, trying to get the nurse\'s attention.');
    scene.text('The nurse turns around, slightly startled. "Oh, you\'re awake! Just one minute, I\'ll get the doctor for you."');
    scene.text('She quickly exits the room.');
    qspCall(st, 'medical_din', 'remove_preg');
    (st as any).abortionbirthdate = ((st as any).daystart ?? 0);
    (st as any).unintendedabort = 1;
    (st as any).knowpregloss = 2;
    if (((st as any).broodcurse ?? 0) > 0) {
      qspGoto(st, 'gameover', 'force', '13');
    }
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Wait for the doctor', handler: (st: GameState) => {
    scene.img('images/locations/shared/clinic/badnews.jpg');
    scene.text('While you wait for the doctor, you place your hand on your stomach. You feel a stillness inside you; an empty place where something grew before.');
    scene.text('Your mind prays, trying to make this nightmare end. You know what the doctor will tell you, even before they enter the room.');
    scene.text('The female doctor finally arrives and does a quick check on your vital signs before addressing you.');
    scene.text('She explains in a frank, but sympathetic tone that you were found unconscious in a hotel basement. You\'d been beaten severely and the trauma caused a miscarriage.');
    scene.text('You break down crying in a wail of tears and the doctor tries to console you, telling you that she\'s sorry, but nothing could be done.');
    scene.text('She says that it could\'ve been much worse; you could have died, or could have needed a hysterectomy, but they were able to save you from those fates.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/pavlin/pavlin_policewoman.jpg');
    scene.text('After you\'ve expended every tear your body could produce, a policewoman enters the room and asks everyone to step out so she can get your statement.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, I''m Officer Uspensky. I''m so sorry for your loss. I have ...
    scene.text(`"${((st as any).pcs_firstname ?? '')}, I'm Officer Uspensky. I'm so sorry for your loss. I have your written testimony here, if I could just get your signature."`);
    scene.text('She reaches out to hand you a pen and the formal looking piece of paper.');
    scene.text('You look at her in confusion. You\'ve not given a statement yet, never mind written one down...');
    scene.text('Looking at the hand holding the paper out, you notice a small tattoo on her wrist. It\'s a peacock...');
    scene.text('You snatch the paper from her and read the written statement. The report says that you were attacked from behind and did not see your assailant.');
    scene.text('Your brows furrow in anger as you look at the bitch defiantly. "But this isn\'t what happe..."');
    scene.text('The policewoman suddenly leans over you and whispers quietly. "Don\'t be stupid, girl! Just sign the damn statement and everything will be taken care of."');
    // TODO-QSP: dynamic text: She slides you a big wad of cash. It''s at least <<$func(''money'', ''string_pro...
    scene.text(`She slides you a big wad of cash. It's at least ${qspFunc(s, 'money', 'string_profit', 20000)}.`);
    scene.text('"Besides, who would believe a whore over our legitimate businessman friend?" she smirks.');
    scene.text('You can barely form thoughts as the rage, pain and desperation overwhelms you.');
    scene.actions([
      { label: 'Sign the document', handler: (st: GameState) => {
    qspCall(st, 'money', 'earn', 20000);
    scene.text('With a reluctant, shaking hand, you sign the document and throw it back at the policewoman.');
    scene.text('"That\'s a good girl. Nice doing business with you," she says before gathering her things and leaving the room.');
    scene.text('As soon as she\'s gone, the tears start again and you cry yourself to sleep.');
    scene.text('<br>');
    scene.text('When you wake up hours later, the nurse hands you some painkillers and tells you that you\'re being discharged from the hospital.');
    scene.text('You slowly get dressed and leave the building. As you head back out into the streets, you feel numb; hollowed out inside like a long dead tree stump. You\'re utterly broken as you wander the streets aimlessly, hoping for a way to move on from all this.');
    ((st as any).mc_inventory = (st as any).mc_inventory ?? {})['painkillers'] = ((st as any).mc_inventory['painkillers'] ?? 0) + (10);
    qspCall(st, 'mood', 'raise_trauma', 10);
    (st as any).Surgeryday = ((st as any).daystart ?? 0);
    (st as any).pcs_health = 50;
    (st as any).recuperation = 1;
    qspCall(st, 'stat', '');
    ((st as any).npc_rel = (st as any).npc_rel ?? {})['A217'] = (-1);
    (st as any).PavlinQW = 9;
    scene.actions([
      { label: 'Leave', goto: ['pav_clinic', ''] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'pavlbar':
      enterPavlbar(s, scene);
      break;
    case 'pavlbarcont':
      enterPavlbarcont(s, scene);
      break;
    case 'getpaidpros':
      enterGetpaidpros(s, scene);
      break;
    case 'pavgenpros':
      enterPavgenpros(s, scene);
      break;
    case 'clientselect':
      enterClientselect(s, scene);
      break;
    case 'pavgenprosmf':
      enterPavgenprosmf(s, scene);
      break;
    case 'vaginalmf':
      enterVaginalmf(s, scene);
      break;
    case 'analmf':
      enterAnalmf(s, scene);
      break;
    case 'pavgenprosmmf':
      enterPavgenprosmmf(s, scene);
      break;
    case 'sexmmf':
      enterSexmmf(s, scene);
      break;
    case 'pavgenprosff':
      enterPavgenprosff(s, scene);
      break;
    case 'ffshower':
      enterFfshower(s, scene);
      break;
    case 'Twins':
      enterTwins(s, scene);
      break;
    case 'twinhome':
      enterTwinhome(s, scene);
      break;
    case 'clown':
      enterClown(s, scene);
      break;
    case 'PregBDSM':
      enterPregBDSM(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const pavlin: LocationDef = {
  name: 'pavlin',
  title: 'You stand up, put your clothes back on and step out of the r',
  region: 'other',
  enter: enter,
};
