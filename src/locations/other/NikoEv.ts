import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterIntro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/avatars/1.jpg');
  if (((s as any).grupTipe ?? 0) === 4) {
    (s as any).NikoIntro = (-1);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: As you''re walking out of school, you bump into one of your fellow gopniks, Niko...
    scene.text(`As you're walking out of school, you bump into one of your fellow gopniks, Nikolai Volkov, who immediately gives you a warm smile. "Hello there ${((s as any).pcs_firstname || '')}, how was your summer?"`);
    scene.text('You smile back at him. "Good. How was yours?"');
    scene.text('He shrugs. "Not bad I guess. I need to go, but I\'ll talk to you later."');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } else {
    (s as any).NikoIntro = 1;
    qspCall(s, 'stat', '');
    scene.text('As you\'re walking out of school, you bump into one of your schoolmates, Niko Volkov, who immediately gives you a warm smile. "Hello there, I\'m Niko. May I ask you your name?"');
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((s as any).pcs_firstname || '') ?? ''), handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A189'] < 50) {
      qspCall(st, 'npc_relationship', 'set', 'A189', 50);
    }
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) + (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    // TODO-QSP: dynamic text: You return the smile. "Hello yourself. I''m <<$pcs_firstname>>. Nice to meet you...
    scene.text(`You return the smile. "Hello yourself. I'm ${((st as any).pcs_firstname || '')}. Nice to meet you."`);
    // TODO-QSP: dynamic text: He smiles. "Ahh, <<$pcs_firstname>>. What a beautiful name, very suitable for yo...
    scene.text(`He smiles. "Ahh, ${((st as any).pcs_firstname || '')}. What a beautiful name, very suitable for you. I need to get going, but I'm always available at lunchtime and would be very grateful if you would grace me with your presence." He gently takes hold of your hand and gives it a gentle kiss. "Goodbye for now, ${((st as any).pcs_firstname || '')}. I look forward to seeing you again."`);
    scene.text('He waves goodbye to you as he walks away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Beat it!', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A189'] > 25) {
      ((st as any).npc_rel = (st as any).npc_rel ?? {})['A189'] = 25;
    }
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) - (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('You give him a harsh glare. "Beat it punk, I\'m not looking for a boyfriend!"');
    scene.text('He remains completely unfazed by your reaction. "I\'m sorry that I bothered you." He never loses his smile as he turns around and walks away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterLunchIntro(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).NikoIntro ?? 0))) {
    (s as any).NikoIntro = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
  scene.text('You approach Niko, who turns to you with a warm smile on his face. "Hello there. I\'ve never seen such a beautiful creature in all my life. My name is Nikolai Volkov, may I ask you yours?');
  // TODO-QSP: end
  scene.actions([
    { label: '', labelFn: (s: GameState) => String(((s as any).pcs_firstname || '') ?? ''), handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A189'] < 50) {
      qspCall(st, 'npc_relationship', 'set', 'A189', 50);
    }
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) + (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    // TODO-QSP: dynamic text: You return the smile. "I''m <<$pcs_firstname>>. Nice to meet you and thank you f...
    scene.text(`You return the smile. "I'm ${((st as any).pcs_firstname || '')}. Nice to meet you and thank you for the complement."`);
    // TODO-QSP: dynamic text: He smiles. "Ahh, <<$pcs_firstname>>. What a beautiful name, very suitable for yo...
    scene.text(`He smiles. "Ahh, ${((st as any).pcs_firstname || '')}. What a beautiful name, very suitable for you. I would be very grateful if you would grace me with your presence." He gently takes hold of your hand and gives it a gentle kiss. "Now, may I get to know you better?"`);
    scene.actions([
      { label: 'Chat with Niko', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A189', (Math.floor(Math.random() * 6) + 5));
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('You sit next to Niko and spend the next few minutes getting to know each other.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    { label: 'Beat it!', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A189'] > 25) {
      ((st as any).npc_rel = (st as any).npc_rel ?? {})['A189'] = 25;
    }
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) - (2);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
    scene.text('You give him a harsh glare. "Beat it punk, I\'m not looking for a boyfriend!"');
    scene.text('He remains completely unfazed by your reaction. "I\'m sorry that I bothered you." He never loses his smile as he turns around and walks away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterLunchChat(s: GameState, scene: SceneBuilder): void {
  (s as any).numnpc = 189;
  qspCall(s, 'stat', '');
  if (((s as any).NikoFightDay ?? 0) === ((s as any).daystart ?? 0)) {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/bruised2.jpg');
  } else {
    if (((s as any).NikoPayback ?? 0) > 0) {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week || '')}.jpg`);
    } else {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    }
  }
  // TODO-QSP: $func('npc_notes', 'A189')
  if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 600) {
    // TODO-QSP: 'Niko should not be available at this stage. If you are seeing this in game, then please report this...
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
    scene.text('Niko is a gopnik and spends a lot of time doing what gopniks usually do: being loud and drinking beer.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] < 20) {
    scene.text('You and Niko don\'t get along at all.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 40) {
    scene.text('You and Niko don\'t get along very well.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 60) {
    scene.text('You and Niko have a normal relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 80) {
    scene.text('You and Niko have a good relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 80) {
    scene.text('You and Niko have a great relationship.');
  }
  if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.text('You approach Niko and he turns to you with a puzzled look on his face. "Hmm, how did I not see you earlier? I thought that you might have been sick today, but here you are, so now to business. How will you be paying today?"');
  } else {
    if (((s as any).NikoPayback ?? 0) === 2) {
      scene.text('You approach Niko, who looks at you with a blank stare. "You\'re all paid up today, so what brings you here?"');
    } else {
      if (((s as any).NikoPayback ?? 0) === 3) {
        scene.text('You approach Niko and he turns to you. "Leave me alone. You\'re nothing but trouble." You giggle as you walk away.');
      } else {
        // TODO-QSP: dynamic text: You approach Niko and his eyes light up. "Hello <<$pcs_firstname>>. I''m so glad...
        scene.text(`You approach Niko and his eyes light up. "Hello ${((s as any).pcs_firstname || '')}. I'm so glad to see you again. Please take a seat and chat with me."`);
      }
    }
  }
  if (((s as any).NikoLuv ?? 0) > -4  &&  (!((s as any).NikoPayback ?? 0))) {
    scene.actions([
      { label: 'Chat', handler: (st: GameState) => {
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A189', (Math.floor(Math.random() * 6) + 5));
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    if (((st as any).npc_rel ?? 0)?.['A189'] < 20) {
      scene.text('You and Niko don\'t get along at all.');
    }
    if (((st as any).npc_rel ?? 0)?.['A189'] >= 20  &&  ((st as any).npc_rel ?? 0)?.['A189'] < 40) {
      scene.text('You sit next to Niko and spend the next few minutes getting to know each other.');
    }
    if (((st as any).npc_rel ?? 0)?.['A189'] >= 40  &&  ((st as any).npc_rel ?? 0)?.['A189'] < 60) {
      scene.text('You and Niko have a normal relationship.');
    }
    if (((st as any).npc_rel ?? 0)?.['A189'] >= 60  &&  ((st as any).npc_rel ?? 0)?.['A189'] < 80) {
      scene.text('You and Niko have a good relationship.');
    }
    if (((st as any).npc_rel ?? 0)?.['A189'] >= 80) {
      scene.text('You and Niko have a great relationship.');
    }
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  if (((s as any).NikoIntro ?? 0) > -1) {
    if (((s as any).NikoLuv ?? 0) > -4  &&  ((s as any).NikoVolkovQW ?? 0) === 0  &&  (!((s as any).NikoPayback ?? 0))) {
      scene.actions([
        { label: 'Insult', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A189', (-5));
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/fuckoff1.jpg');
    scene.text('You extend your middle finger at Niko as you walk past him. "Get lost loser."');
    scene.text('Niko turns his head as he responds. "Am I not worthy?"');
    scene.text('You continue to walk past him until you reach the hallway.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 200);
      (st as any).NikoPayed = ((st as any).daystart ?? 0);
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
      // TODO-QSP: dynamic text: "I have your money right here." You extend your hand, giving him <<$func(''money...
      scene.text(`"I have your money right here." You extend your hand, giving him ${qspFunc(s, 'money', 'string_price', 200)}. He quickly counts it and gives you an approving nod. "Good. You're all paid up for today and can get going now."`);
      scene.actions([
        { label: 'Walk away', goto: ['gschool_lunch', 'break'] },
      ]);
    }
  } },
        { label: 'Sex', handler: (st: GameState) => {
    (st as any).NikoPayed = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
    scene.text('You cast your eyes down. "You can use my body as payment…"');
    scene.text('Niko\'s eyes light up. "I was hoping you\'d say that. Let\'s not waste time."');
    scene.text('He grabs your ass firmly while leading you to the less used restroom.');
    scene.actions([
      { label: 'Head to the restroom with Niko', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
      ]);
    } else {
      if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).NikoPayback_Sex ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Offer sex', handler: (st: GameState) => {
    (st as any).NikoPayback_Sex = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile' + (Math.floor(Math.random() * 2) + 2) + '.jpg');
    scene.text('You walk up to Niko and place your hand on his crotch. "I know that I already paid you in money, but I want to give you another special payment."');
    scene.text('Niko\'s eyes light up. "Well, there\'s no way I\'d say no to that. Let\'s get going." He gives your ass a firm smack as you both head toward the less used restroom.');
    scene.actions([
      { label: 'Head to the restroom with Niko', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
        ]);
      }
    }
    if ((((s as any).NikoPayback ?? 0) === 2  ||  ((s as any).NikoIntro ?? 0) === -1)  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
    scene.text('"I just want to talk," you reply. "Is that alright?"');
    scene.text('He shrugs. "Sounds fine with me. I have some spare time."');
    scene.text('You spend the next few minutes chatting about various topics.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).NikoVolkovQW ?? 0) === 5  &&  ((s as any).NikoEv ?? 0) === 9) {
      scene.actions([
        { label: 'Special Activity', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('You sit next to Niko. "Hey, I remember you telling me something about a \'special activity\' that you have planned."');
    scene.text('He grins. "I have something special for us today. Are you ready to find out what it is?"');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    if ((!(Math.floor(Math.random() * 4) + 0))) {
      qspGoto(st, 'NikoDates', 'teacher_block');
    } else {
      qspGoto(st, 'NikoWhore', 'Locker Room');
    }
  } },
      { label: 'Maybe later', goto: ['NikoEv', 'Lunch Chat'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).NikoLuv ?? 0) <= -2  &&  ((s as any).NikoPayback ?? 0) === 0  &&  ((s as any).NikoIntro ?? 0) > -1) {
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/hallway/wos4.jpg');
    (st as any).VK = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).VK ?? 0) === 1) {
      // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'What kind of easy lay does he think I...
    } else {
      if (((st as any).VK ?? 0) === 2) {
        // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'What an annoying little punk!' + $Clo...
      } else {
        // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'Something about that guy really annoy...
      }
    }
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
      ]);
    } else {
      if (((s as any).NikoPayback ?? 0) === 0  &&  ((s as any).NikoIntro ?? 0) > -1) {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('"I\'d love to stay, but I need to head to class early today."');
    scene.text('"I understand," he replies. "I guess I\'ll have to wait longer for an audience with this princess."');
    scene.text('You can feel your face flushing as you get up and walk out toward the hallway.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).NikoPayback ?? 0) === 3  ||  ((s as any).NikoIntro ?? 0) === -1) {
          scene.actions([
            { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDateIntro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
  // TODO-QSP: dynamic text: As you''re walking toward the hallway, Niko runs up behind you with a small box ...
  scene.text(`As you're walking toward the hallway, Niko runs up behind you with a small box in his hand. "${((s as any).pcs_firstname || '')}! I have something for you." He holds the box in front of you and slowly opens it, revealing a beautiful purple necklace. "An elegant lady of such beauty, deserves equally stunning jewelry, but I must ask you for a boon in return. I ask only for permission to take you out on a date after school."`);
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/jewelry/necklace1.jpg');
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Decline the gift', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Decline the gift', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).NikoLuv = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/nodate.jpg');
    scene.text('"Sorry, but I\'m not really looking for any kind of relationship right now."');
    scene.text('He gives you a warm smile. "Don\'t worry about it. I\'ll just wait for the time where you feel yourself ready for such a venture."');
    scene.text('You giggle. "You\'re so weird, but thanks for understanding. I\'ll see you later." You turn around and walk away.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept the gift', handler: (st: GameState) => {
    if (((st as any).npc_rel ?? 0)?.['A189'] < 80) {
      qspCall(st, 'npc_relationship', 'set', 'A189', 80);
    }
    (st as any).NikoDateIntro = 1;
    (st as any).NikoNecklace1 = 1;
    (st as any).NikoVolkovQW = 5;
    (st as any).NikoDate = 1;
    (st as any).NikoEv = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    scene.text('You give Niko a warm smile as you take the gift from him. "Thanks Niko. This necklace is so beautiful."');
    scene.text('Niko looks at you with loving eyes. "I\'m so glad you like it. How about I pick you up after school and we can both head out together?"');
    scene.text('"I might be a bit late, so just wait for me at the courtyard, okay?"');
    scene.text('He bows before you. "As you wish." He then backs away while keeping his head bowed until he turns the corner.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNikoDates(s: GameState, scene: SceneBuilder): void {
  if (((s as any).fedorKozlovQW ?? 0) >= 10  &&  (!((s as any).NikoVsFedor ?? 0))) {
    qspGoto(s, 'NikoEv', 'fedor');
  } else {
    if (((s as any).kotovLoveQW ?? 0) >= 10  &&  (!((s as any).NikoVsVitek ?? 0))) {
      qspGoto(s, 'NikoEv', 'vitek');
    } else {
      if (((s as any).dimaFilm ?? 0) === 1  &&  ((s as any).DimaRudeBlock ?? 0) === 0  &&  (!((s as any).NikoVsDimka ?? 0))) {
        qspGoto(s, 'NikoEv', 'dimka');
      } else {
        if (((s as any).NikoEv ?? 0) === 1) {
          qspGoto(s, 'NikoEv', 'date1');
        } else {
          if (((s as any).NikoEv ?? 0) === 2) {
            qspGoto(s, 'NikoEv', 'date2');
          } else {
            if (((s as any).NikoEv ?? 0) === 3) {
              qspGoto(s, 'NikoEv', 'date3');
            } else {
              if (((s as any).NikoEv ?? 0) === 4) {
                qspGoto(s, 'NikoEv', 'date4');
              } else {
                if (((s as any).NikoEv ?? 0) === 11) {
                  qspGoto(s, 'NikoEv', 'new_life');
                }
              }
            }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterDate1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko1.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and his eyes light up as he sees you. "Greetings <<$pcs_firs...
  scene.text(`You walk up to Niko and his eyes light up as he sees you. "Greetings ${((s as any).pcs_firstname || '')}, I hope that you're ready to have a good time."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m ready', handler: (st: GameState) => {
    (st as any).NikoEv = 2;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/walk1.jpg');
    scene.text('"I sure am," you reply and he gives you a warm smile.');
    scene.text('"I figured that we could go to an amusement park out of town. I\'ll pay our way of course, so come on, let\'s get going."');
    scene.text('He takes your hand and walks you to the train station where you both board the train and get seated.');
    (st as any).NikoNextDate_day = ((st as any).daystart ?? 0) + 7 - ((st as any).week ?? 0) + 1;
    scene.actions([
      { label: 'Go with him', goto: ['NikoDates', 'date1_1'] },
    ]);
  } },
    { label: 'Not yet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/nodate.jpg');
    scene.text('"I just stopped by to let you know that I can\'t go right now. I have other matters to attend to today."');
    scene.text('He gives you a warm smile. "I understand. Whenever you\'re ready to go out, you need only return here. I will be patiently awaiting my princess\'s return."');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDate2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko2.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and he lowers his cigarette. "Hello <<$pcs_firstname>>, I wa...
  scene.text(`You walk up to Niko and he lowers his cigarette. "Hello ${((s as any).pcs_firstname || '')}, I wanted to tell you that I'm sorry for how I acted yesterday. I just wanted you to leave your shell a bit. You always seem so tense."`);
  scene.text('"Tense?" you reply. "I guess I could try to lighten up a bit. Maybe."');
  scene.text('He smiles. "Good enough. So are you ready for a surprise I have for you? We could be out all afternoon."');
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m ready', handler: (st: GameState) => {
    (st as any).NikoEv = 3;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/walk3.jpg');
    scene.text('"I sure am," you reply and his smile widens.');
    scene.text('"Great! Let\'s get going." He wraps his arm around your waist as he leads you toward the lake.');
    (st as any).NikoNextDate_day = ((st as any).daystart ?? 0) + 7 - ((st as any).week ?? 0) + 1;
    scene.actions([
      { label: 'Follow his lead', goto: ['NikoDates', 'date2'] },
    ]);
  } },
    { label: 'Not yet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/nodate.jpg');
    scene.text('"I have some things that I need to attend to today, so I can\'t go right now."');
    scene.text('He gives you a warm smile. "I understand. Whenever you\'re ready to go out, you need only return here. I will be patiently awaiting my princess\'s return."');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDate3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko3.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and his eyes light up as he sees you. "Greetings <<$pcs_firs...
  scene.text(`You walk up to Niko and his eyes light up as he sees you. "Greetings ${((s as any).pcs_firstname || '')}, I have a surprise activity for today and we could be out all afternoon. Are you up for it?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m ready', handler: (st: GameState) => {
    (st as any).NikoEv = 4;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/walk4.jpg');
    scene.text('"I sure am," you reply and his smile widens.');
    scene.text('"Great! Let\'s get going." He wraps his arm around your waist as he leads you toward the lake.');
    (st as any).NikoNextDate_day = ((st as any).daystart ?? 0) + 7 - ((st as any).week ?? 0) + 1;
    scene.actions([
      { label: 'Follow his lead', goto: ['NikoDates', 'date2'] },
    ]);
  } },
    { label: 'Not yet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/nodate.jpg');
    scene.text('"I just stopped by to let you know that I can\'t go right now. I have other matters to attend to today."');
    scene.text('He gives you a warm smile. "I understand. Whenever you\'re ready to go out, you need only return here. I will be patiently awaiting my princess\'s return."');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDate4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and his eyes light up as he sees you. "Ahhh <<$pcs_firstname...
  scene.text(`You walk up to Niko and his eyes light up as he sees you. "Ahhh ${((s as any).pcs_firstname || '')}, I'm so glad to see you. Are you up for a nice relaxing day at the beach?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'I\'m ready', handler: (st: GameState) => {
    (st as any).NikoEv = 5;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('"I could never turn down a day at the beach!" you reply and Niko chuckles.');
    scene.text('"Great! I have everything we should need here." He opens his bag which houses a beach towel, cigarettes and sunscreen.');
    (st as any).NikoNextDate_day = ((st as any).daystart ?? 0) + 7 - ((st as any).week ?? 0) + 1;
    scene.actions([
      { label: 'Let\'s go!', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/dates/walk4.jpg');
    scene.text('You happily grab onto his hand. "What are we waiting for? Let\'s go!" You then lead Niko toward the lake.');
    scene.actions([
      { label: 'Enter train station', goto: ['NikoDates', 'date3'] },
    ]);
  } },
    ]);
  } },
    { label: 'Not yet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/nodate.jpg');
    // TODO-QSP: dynamic text: "I just stopped by to let you know that I can''t go right now. I have other matt...
    scene.text(`"I just stopped by to let you know that I can't go right now. I have other matters to attend too." Niko gives you a warm smile as he responds, "I understand ${((st as any).pcs_firstname || '')}, whenever you are ready to go out, you need only return here, I will be patiently awaiting my princess's return."`);
    scene.actions([
      { label: 'Walk away', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterNewLife(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko1.jpg');
  scene.text('As you approach Niko, he nods and motions you over. "Are you ready to head out?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('Niko smiles. "Great! Let\'s head out."');
    scene.text('He wraps his arm around your shoulder and walks you toward the park.');
    scene.actions([
      { label: 'Go with him', goto: ['NikoEv2', 'Park'] },
    ]);
  } },
    { label: 'Not right now', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enterDiscoIntro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/brother/upset.jpg');
  scene.text('You approach Niko and immediately notice that he\'s passed out. He must have had a lot to drink today.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', goto: ['pav_disco', ''] },
  ]);
  scene.build();
}

function enterDiscoChat(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).NikoIntro ?? 0))) {
    (s as any).NikoIntro = 1;
  }
  qspCall(s, 'stat', '');
  if (((s as any).NikoFightDay ?? 0) === ((s as any).daystart ?? 0)) {
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev2/bruised2.jpg');
  } else {
    if (((s as any).NikoPayback ?? 0) > 0) {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week || '')}.jpg`);
    } else {
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
    }
  }
  // TODO-QSP: $func('npc_notes', 'A189')
  if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 600) {
    // TODO-QSP: 'Niko should not be available at this stage. If you are seeing this in game, then please report this...
  }
  if (((s as any).npc_grupTipe ?? 0)?.['A189'] === 4) {
    scene.text('Niko is a gopnik and spends a lot of time doing what gopniks usually do: being loud and drinking beer.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] < 20) {
    scene.text('You and Niko don\'t get along at all.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 40) {
    scene.text('You and Niko don\'t get along very well.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 40  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 60) {
    scene.text('You and Niko have a normal relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 60  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 80) {
    scene.text('You and Niko have a good relationship.');
  }
  if (((s as any).npc_rel ?? 0)?.['A189'] >= 80) {
    scene.text('You and Niko have a great relationship.');
  }
  if (((s as any).NikoLuv ?? 0) > -4  &&  ((s as any).NikoPayback ?? 0) === 0  &&  (!((s as any).NikoAlko ?? 0))) {
    scene.text('You approach Niko and he gives you a welcoming smile. "Good to see you again. Would you like a drink?"');
  } else {
    if (((s as any).NikoLuv ?? 0) > -4  &&  ((s as any).NikoPayback ?? 0) === 0  &&  ((s as any).NikoAlko ?? 0) >= 2) {
      scene.text('You approach Niko and he gives you a welcoming smile. "You\'re looking lovely today, Would you like to dance?"');
    } else {
      if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.text('You approach Niko and he turns to you with a puzzled look on his face. "Hmm, you didn\'t show up to school today, were you sick? Bah, it doesn\'t matter, you\'re here now so let\'s get down to business. My dick is dry and my wallet is light. Which one of those issues will you be solving today?"');
      } else {
        if (((s as any).NikoPayback ?? 0) === 2) {
          scene.text('You approach Niko and he looks at you with a blank stare. "You\'re all paid up today, so why are you talking to me? Trying to mooch a free drink off me?"');
        } else {
          if (((s as any).NikoPayback ?? 0) === 3) {
            scene.text('You approach Niko and he turns to you then says, "Leave me alone. You\'re nothing but trouble." You giggle as you walk away.');
          }
        }
      }
    }
  }
  if (((s as any).NikoLuv ?? 0) > -4  &&  (!((s as any).NikoPayback ?? 0))) {
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    (st as any).NikoAlko = 2;
    qspCall(st, 'drugs', 'alcohol', 'vodka');
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A189', (Math.floor(Math.random() * 6) + 5));
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/rekshome/party/party_rex_party_gost_2_2.mp4');
    scene.text('He opens up a bottle of alcohol and hands it to you as he gives you a wink. You both spend the next few minutes drinking and sharing stories.');
    scene.actions([
      { label: 'Get up', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).NikoLuv ?? 0) > -4  &&  (!((s as any).NikoPayback ?? 0))) {
    scene.actions([
      { label: 'Dance', handler: (st: GameState) => {
    qspCall(st, 'exp_gain', 'danc', (Math.floor(Math.random() * 3) + 1));
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) + (1);
    qspCall(st, 'npc_relationship', 'modify', 'A189', (Math.floor(Math.random() * 6) + 5));
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/dance' + (Math.floor(Math.random() * 2) + 1) + '.mp4');
    scene.text('He takes your hand and leads you to the dance floor, where you both spend the next few minutes dancing together.');
    scene.actions([
      { label: 'Finish dancing', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).NikoLuv ?? 0) > -4  &&  ((s as any).NikoVolkovQW ?? 0) === 0  &&  (!((s as any).NikoPayback ?? 0))) {
    scene.actions([
      { label: 'Insult', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A189', (-5));
    (st as any).NikoLuv = ((st as any).NikoLuv ?? 0) - (1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/fuckoff2.jpg');
    scene.text('You lift up your hands and extend your middle fingers on each hand. "I only drink with men, not boys."');
    scene.text('Niko shakes his head. "Aww, you\'re no fun."');
    scene.text('You turn around and walk toward the dance floor.');
    scene.actions([
      { label: 'Walk away', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  }
  if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Money', handler: (st: GameState) => {
    if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
      s.scene = { ...s.scene, mainText: String((st as any).noMoney || ''), curActs: [] };
    } else {
      qspCall(st, 'money', 'pay', 200);
      (st as any).NikoPayed = ((st as any).daystart ?? 0);
      (st as any).minut = ((st as any).minut ?? 0) + 5;
      qspCall(st, 'stat', '');
      scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
      // TODO-QSP: dynamic text: "I have your money right here." You extend your hand, giving him <<$func(''money...
      scene.text(`"I have your money right here." You extend your hand, giving him ${qspFunc(s, 'money', 'string_price', 200)}. He quickly counts it and gives you an approving nod. "Good. You're all paid up for today and can get going now."`);
      scene.actions([
        { label: 'Walk away', goto: ['pav_disco', ''] },
      ]);
    }
  } },
      { label: 'Sex', handler: (st: GameState) => {
    (st as any).NikoPayed = ((st as any).daystart ?? 0);
    (st as any).NikoPayback_Sex = ((st as any).daystart ?? 0);
    (st as any).NikoDiscoPay = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/disco/niko.jpg');
    scene.text('You cast your eyes down. "You can use my body as payment…"');
    scene.text('Niko smiles and rubs your legs. "I was hoping you\'d say that. Let\'s not waste time."');
    scene.text('He grabs your ass firmly while leading you to the mens restroom.');
    scene.actions([
      { label: 'Head to the restroom with Niko', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)  &&  ((s as any).NikoPayback_Sex ?? 0) !== ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Offer sex', handler: (st: GameState) => {
    (st as any).NikoDiscoPay = 1;
    (st as any).NikoPayback_Sex = ((st as any).daystart ?? 0);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile' + (Math.floor(Math.random() * 2) + 2) + '.jpg');
    scene.text('You walk up to Niko and place your hand on his crotch. "I know that I already paid you in money, but I want to give you another special payment."');
    scene.text('His eyes light up. "Well, there\'s no way I\'d say no to that! Let\'s get going."');
    scene.text('He gives your ass a firm smack as you both head toward the mens restroom.');
    scene.actions([
      { label: 'Head to the restroom with Niko', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
      ]);
    }
  }
  if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Chat', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
    scene.text('"I just want to talk," you reply. "Is that alright?"');
    scene.text('He shrugs. "Sounds fine with me. I have some spare time, but don\'t think that you\'re getting any free beer off of me."');
    scene.text('You spend the next few minutes chatting about various topics.');
    scene.actions([
      { label: 'Finish chatting', goto: ['NikoEv', 'Disco Chat'] },
    ]);
  } },
    ]);
  }
  if (((s as any).NikoLuv ?? 0) <= -2  &&  (!((s as any).NikoPayback ?? 0))) {
    scene.actions([
      { label: 'Walk away', handler: (st: GameState) => {
    (st as any).NikoAlko = 0;
    qspCall(st, 'stat', '');
    scene.img('images/pc/reactions/glare.jpg');
    (st as any).VK = (Math.floor(Math.random() * 3) + 1);
    if (((st as any).VK ?? 0) === 1) {
      // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'What kind of easy lay does he think I...
    } else {
      if (((st as any).VK ?? 0) === 2) {
        // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'What an annoying little punk!' + $Clo...
      } else {
        // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'Something about that guy really annoy...
      }
    }
    scene.actions([
      { label: 'Step away', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NikoPayback ?? 0) === 2  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Walk away', goto: ['pav_disco', ''] },
      ]);
    } else {
      if ((!((s as any).NikoPayback ?? 0))) {
        scene.actions([
          { label: 'Leave', handler: (st: GameState) => {
    (st as any).NikoAlko = 0;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('"I\'d love to stay, but I need to head home or my mother will freak out," you tell him.');
    scene.text('He smiles. "I know how parents can be. I\'ll always be around if you ever have a few minutes to spare."');
    scene.text('You give him a warm smile as you wave goodbye.');
    scene.actions([
      { label: 'Step away', goto: ['pav_disco', ''] },
    ]);
  } },
        ]);
      } else {
        if (((s as any).NikoPayback ?? 0) === 3) {
          scene.actions([
            { label: 'Walk away', goto: ['pav_disco', ''] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterLunchBreakup(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoFightDay = ((s as any).daystart ?? 0);
  (s as any).NikoPayback = 1;
  (s as any).NikoBreakup = 2;
  (s as any).NikoVolkovQW = (-1);
  (s as any).NikoLuv = (-20);
  if (((s as any).NikoEv ?? 0) > -1) {
    (s as any).NikoEv = (-1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
  scene.text('You approach Niko with a stern look on your face. Niko notices you and smiles. "There you are! You disappeared on me yesterday."');
  scene.text('"DISAPPEARED!? YOU RAN OFF AND LEFT ME TIED UP!" you exclaim.');
  scene.text('He recoils. "Did I? I\'m sorry, I just had to…"');
  scene.text('You cut him off. "I DON\'T WANT TO HEAR IT! I never should have trusted you. How could I have been so stupid?"');
  scene.text('"Hey, let\'s not be hasty here…"');
  scene.text('"NO! I want nothing to do with you. Stay away from me!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
    scene.text('He gets noticeably angry. "After all the time and money I spent on you?! You will not leave me! I will get what I deserve!"');
    scene.actions([
      { label: 'Give him what he deserves', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/restroom/ouch.jpg');
    scene.text('"You got that right," you smirk as you wind up your leg before kicking him square in the balls, causing him to drop to the ground squirming in pain. You spit on him before walking away.');
    scene.actions([
      { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoBreakup(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoBreakupDay = ((s as any).daystart ?? 0);
  (s as any).NikoPayback = 1;
  (s as any).NikoBreakup = 2;
  (s as any).NikoVolkovQW = (-1);
  (s as any).NikoLuv = (-20);
  if (((s as any).NikoEv ?? 0) > -1) {
    (s as any).NikoEv = (-1);
  }
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week || '')}.jpg`);
  scene.text('You approach Niko with a stern look on your face. Niko notices you and smiles. "There you are! You disappeared on me yesterday."');
  scene.text('"DISAPPEARED!? YOU RAN OFF AND LEFT ME TIED UP!" you exclaim.');
  scene.text('He recoils. "Did I? I\'m sorry, I just had to…"');
  scene.text('You cut him off. "I DON\'T WANT TO HEAR IT! I never should have trusted you! How could I have been so stupid?!"');
  scene.text('"Hey, let\'s not be hasty here…"');
  scene.text('"NO! I want nothing to do with you. Stay away from me!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Walk away', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((st as any).week || '')}.jpg`);
    scene.text('He gets noticeably angry. "After all the time and money I spent on you?! You will not leave me! I will get what I deserve!"');
    scene.actions([
      { label: 'Give him what he deserves', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/fight/down.jpg');
    scene.text('"You got that right," you smirk as you wind up your leg before kicking him square in the balls, causing him to drop to the ground squirming in pain. You spit on him before walking away.');
    scene.actions([
      { label: 'Step away', goto: ['pav_disco', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterDiscoBreakup2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikomisc/brother/aftermath2.jpg');
  scene.text('You see Niko on the ground, squirming in pain and can\'t help but feel very satisfied seeing him get what he deserved.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Step away', goto: ['pav_disco', ''] },
  ]);
  scene.build();
}

function enterFedor(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoVsFedor = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and his eyes light up as he sees you. "Greetings <<$pcs_firs...
  scene.text(`You walk up to Niko and his eyes light up as he sees you. "Greetings ${((s as any).pcs_firstname || '')}, I hope you're ready to have a good time."`);
  scene.text('You\'re about to respond when you suddenly feel a hand gently but firmly grab onto your arm.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Turn around', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big5.jpg');
    // TODO-QSP: dynamic text: You turn to see Fedor with a concerned look on his face. "<<$pcs_firstname>>, wh...
    scene.text(`You turn to see Fedor with a concerned look on his face. "${((st as any).pcs_firstname || '')}, what are doing with him? You should be careful hanging around guys like him. He's no good for you."`);
    scene.text('Niko just stares in silence with an annoyed look on his face as you turn to Fedor. "Don\'t worry, it\'s not what it looks like. Niko was just…"');
    // TODO-QSP: dynamic text: Niko quickly continues your sentence. "<<$pcs_firstname>>''s father is planning ...
    scene.text(`Niko quickly continues your sentence. "${((st as any).pcs_firstname || '')}'s father is planning on buying one of my brother's old bikes, so she came to me to discuss the details. That's all."`);
    // TODO-QSP: dynamic text: Fedor gives Niko a blank stare. "I''ve seen your brother before and I don''t thi...
    scene.text(`Fedor gives Niko a blank stare. "I've seen your brother before and I don't think that ${((st as any).pcs_firstname || '')} should be dealing with him. Or you."`);
    // TODO-QSP: dynamic text: Niko just shrugs. "That''s <<$pcs_firstname>>''s call, not yours."
    scene.text(`Niko just shrugs. "That's ${((st as any).pcs_firstname || '')}'s call, not yours."`);
    scene.text('Fedor walks right up to Niko and clenches his fists. "No one asked for your input."');
    scene.actions([
      { label: 'See what happens', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko4.jpg');
    // TODO-QSP: dynamic text: Niko doesn''t seem worried as he casually leans against the wall. "No need to ge...
    scene.text(`Niko doesn't seem worried as he casually leans against the wall. "No need to get violent. I'm sure ${((st as any).pcs_firstname || '')} doesn't want us fighting in front of her for no reason. That would be really rude of us, wouldn't it?"`);
    // TODO-QSP: dynamic text: Fedor looks back to you with an embarrassed look on his face. "Sorry <<$pcs_nick...
    scene.text(`Fedor looks back to you with an embarrassed look on his face. "Sorry ${((st as any).pcs_nickname || '')}. I hope I'm not making you uncomfortable. Just be careful with this one, okay?"`);
    scene.text('You give Fedor a nod and a smile as he turns around and walks away.');
    scene.actions([
      { label: 'Turn back toward Niko', goto: ['NikoEv', 'niko_dates'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterVitek(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoVsVitek = 1;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big9.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and give him a smile when you suddenly see Vitek quickly wal...
  scene.text(`You walk up to Niko and give him a smile when you suddenly see Vitek quickly walking up to Niko. "What are you doing with ${((s as any).pcs_firstname || '')}? She's mine!"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'See what happens', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/niko' + (Math.floor(Math.random() * 3) + 1) + '.jpg');
    // TODO-QSP: dynamic text: Niko chuckles as he raises his hands, "I was just helping <<$pcs_firstname>> fin...
    scene.text(`Niko chuckles as he raises his hands, "I was just helping ${((st as any).pcs_firstname || '')} find the person spreading mean rumors about her."`);
    scene.text('"What rumors?" Vitek asks and Niko smiles.');
    // TODO-QSP: dynamic text: "Someone said that <<$pcs_firstname>> was dating a fat, brain dead gopnik. I won...
    scene.text(`"Someone said that ${((st as any).pcs_firstname || '')} was dating a fat, brain dead gopnik. I wonder who that was referring to?"`);
    scene.text('Vitek is seething with anger. "Who the fuck said that shit? Fucking tell me!"');
    scene.text('"It took some digging, but I found out that it was him." Niko points at Lesco, ccausing Vitek to turn to him.');
    scene.text('"You little fucking bitch! I\'ll tear your arm off!" He then charges at Lesco, who starts running for his life. While Vitek is distracted, Niko takes your hand and leads you out of the school grounds.');
    scene.actions([
      { label: 'Follow Niko\'s lead', goto: ['NikoEv', 'niko_dates'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterDimka(s: GameState, scene: SceneBuilder): void {
  (s as any).NikoVsDimka = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big1.jpg');
  // TODO-QSP: dynamic text: You walk up to Niko and give him a smile when you see Dimka approaching you and ...
  scene.text(`You walk up to Niko and give him a smile when you see Dimka approaching you and giving Niko a puzzled look. "What are you doing with ${((s as any).pcs_firstname || '')}? She's my girl."`);
  scene.text('Niko gives Dimka a blank stare. "Sure she is… Why don\'t you just piss off before you piss me off?"');
  scene.text('Dimka scoffs. "Why don\'t we ask her who she\'s dating?"');
  scene.text('Niko grins. "Because asking a girl to kiss and tell is rude."');
  scene.text('Dimka looks shocked. "You don\'t care? But would you care if I told you that she\'s a cocksucker?"');
  scene.text('Niko raises an eyebrow. "Well do you have proof of that, or are you just blowing smoke?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'See what Dimka does', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((st as any).week || '')}.jpg`);
    scene.text('Dimka quickly pulls out his phone and shows a video to Niko. You recognize the video of you sucking Dimka\'s dick. Niko watches the video before turning to you. "You have some talents, I see." He pulls out his phone and taps the screens of both phones for a few seconds before returning Dimka\'s phone.');
    scene.text('Dimka grins. "See? I told you that she\'s a whore."');
    scene.text('"You\'re still being rude," Niko replies. "Thanks for the vid, but you can get lost now."');
    scene.text('Dimka recoils in shock. "But this video sho… Hey, what the hell?! Did you delete it?!"');
    scene.text('Niko smirks. "Of course I did. I can\'t just let you keep embarrassing videos of my girl now, can I?"');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/pissoff.mp4');
    scene.text('Niko lights a cigarette as Dimka starts shouting "How dare you!? You fucking sack of shit! That was my video!" Niko gets off the wall and approaches Dimka, causing Dimka to immediately back up. Niko grabs Dimka and blows smoke in his face.');
    scene.text('"I\'ll give you one more chance to leave before I accept Lavrenti\'s offer to make your life a living hell."');
    scene.text('Dimka quickly backs off. "You\'re insane! Whatever… Keep her!" He quickly walks away.');
    scene.actions([
      { label: 'Thank him', handler: (st: GameState) => {
    (st as any).dimaFilm = 0;
    (st as any).DimaRudeBlock = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/hug1.jpg');
    scene.text('You quickly wrap your arms around Niko and hold him tightly. "Thank you so much! I never thought that I\'d be free from him. You\'re the best!"');
    scene.text('Niko smiles. "Seeing you happy is thanks enough."');
    scene.text('You lower your head. "I hope you don\'t think less of me because of that video…"');
    scene.text('"Not at all," he replies. "We all have talents and yours are not exactly… unwanted."');
    scene.text('You can feel your cheeks getting red as you reply. "I only did that because…"');
    scene.text('Niko chuckles. "Don\'t worry about it, my princess. Shall we get back to discussing our activities for today?"');
    if (((st as any).NikoEv ?? 0) >= 17) {
      scene.actions([
        { label: 'Sure thing', goto: ['NikoEv2', 'Events'] },
      ]);
    } else {
      scene.actions([
        { label: 'Sure thing', goto: ['NikoEv', 'niko_dates'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'Intro':
      enterIntro(s, scene);
      break;
    case 'Lunch Intro':
      enterLunchIntro(s, scene);
      break;
    case 'Lunch Chat':
      enterLunchChat(s, scene);
      break;
    case 'Date Intro':
      enterDateIntro(s, scene);
      break;
    case 'niko_dates':
      enterNikoDates(s, scene);
      break;
    case 'date1':
      enterDate1(s, scene);
      break;
    case 'date2':
      enterDate2(s, scene);
      break;
    case 'date3':
      enterDate3(s, scene);
      break;
    case 'date4':
      enterDate4(s, scene);
      break;
    case 'new_life':
      enterNewLife(s, scene);
      break;
    case 'Disco Intro':
      enterDiscoIntro(s, scene);
      break;
    case 'Disco Chat':
      enterDiscoChat(s, scene);
      break;
    case 'Lunch Breakup':
      enterLunchBreakup(s, scene);
      break;
    case 'Disco Breakup':
      enterDiscoBreakup(s, scene);
      break;
    case 'Disco Breakup 2':
      enterDiscoBreakup2(s, scene);
      break;
    case 'fedor':
      enterFedor(s, scene);
      break;
    case 'vitek':
      enterVitek(s, scene);
      break;
    case 'dimka':
      enterDimka(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const NikoEv: LocationDef = {
  name: 'NikoEv',
  title: 'Discord.',
  region: 'other',
  enter: enter,
};
