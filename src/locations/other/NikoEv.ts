import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterIntro(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/avatars/1.jpg');
  if (((s as any).grupTipe ?? 0) === 4) {
    (s as any).NikoIntro = (-1);
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: As you're walking out of school, you bump into one of your fellow gopniks, Nikol...
    scene.text(`As you're walking out of school, you bump into one of your fellow gopniks, Nikolai Volkov, who immediately gives you a warm smile. "Hello there ${((s as any).pcs_firstname ?? 0)}, how was your summer?"`);
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
      { label: '<<$pcs_firstname>>', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A189'] < 50) {
      qspCall(s, 'npc_relationship', 'set', 'A189', 50);
    }
    (s as any).NikoLuv = ((s as any).NikoLuv ?? 0) + (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    // TODO-QSP: dynamic text: You return the smile. "Hello yourself. I'm <<$pcs_firstname>>. Nice to meet you....
    scene.text(`You return the smile. "Hello yourself. I'm ${((s as any).pcs_firstname ?? 0)}. Nice to meet you."`);
    // TODO-QSP: dynamic text: He smiles. "Ahh, <<$pcs_firstname>>. What a beautiful name, very suitable for yo...
    scene.text(`He smiles. "Ahh, ${((s as any).pcs_firstname ?? 0)}. What a beautiful name, very suitable for you. I need to get going, but I'm always available at lunchtime and would be very grateful if you would grace me with your presence." He gently takes hold of your hand and gives it a gentle kiss. "Goodbye for now, ${((s as any).pcs_firstname ?? 0)}. I look forward to seeing you again."`);
    scene.text('He waves goodbye to you as he walks away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Beat it!', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A189'] > 25) {
      (s as any).npc_rel['A189'] = 25;
    }
    (s as any).NikoLuv = ((s as any).NikoLuv ?? 0) - (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile1.jpg');
    scene.text('You give him a harsh glare. "Beat it punk, I\'m not looking for a boyfriend!"');
    scene.text('He remains completely unfazed by your reaction. "I\'m sorry that I bothered you." He never loses his smile as he turns around and walks away.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterLunchIntro(s: GameState, scene: SceneBuilder): void {
  if (((s as any).NikoIntro ?? 0) === 0) {
    (s as any).NikoIntro = 1;
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer2.jpg');
  scene.text('You approach Niko, who turns to you with a warm smile on his face. "Hello there. I\'ve never seen such a beautiful creature in all my life. My name is Nikolai Volkov, may I ask you yours?');
  scene.actions([
    { label: '<<$pcs_firstname>>', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A189'] < 50) {
      qspCall(s, 'npc_relationship', 'set', 'A189', 50);
    }
    (s as any).NikoLuv = ((s as any).NikoLuv ?? 0) + (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/charmer1.jpg');
    // TODO-QSP: dynamic text: You return the smile. "I'm <<$pcs_firstname>>. Nice to meet you and thank you fo...
    scene.text(`You return the smile. "I'm ${((s as any).pcs_firstname ?? 0)}. Nice to meet you and thank you for the complement."`);
    // TODO-QSP: dynamic text: He smiles. "Ahh, <<$pcs_firstname>>. What a beautiful name, very suitable for yo...
    scene.text(`He smiles. "Ahh, ${((s as any).pcs_firstname ?? 0)}. What a beautiful name, very suitable for you. I would be very grateful if you would grace me with your presence." He gently takes hold of your hand and gives it a gentle kiss. "Now, may I get to know you better?"`);
    scene.actions([
      { label: 'Chat with Niko', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A189', Math.floor(Math.random() * 6) + 5);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You sit next to Niko and spend the next few minutes getting to know each other.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } },
    { label: 'Beat it!', handler: (st: GameState) => {
    if (((s as any).npc_rel ?? 0)?.['A189'] > 25) {
      (s as any).npc_rel['A189'] = 25;
    }
    (s as any).NikoLuv = ((s as any).NikoLuv ?? 0) - (2);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
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
    scene.text('You approach Niko, who looks at you with a blank stare. "You\'re all paid up today, so what brings you here?"');
    if (((s as any).NikoPayback ?? 0) === 3) {
      scene.text('You approach Niko and he turns to you. "Leave me alone. You\'re nothing but trouble." You giggle as you walk away.');
    } else {
      // TODO-QSP: dynamic text: You approach Niko and his eyes light up. "Hello <<$pcs_firstname>>. I'm so glad ...
      scene.text(`You approach Niko and his eyes light up. "Hello ${((s as any).pcs_firstname ?? 0)}. I'm so glad to see you again. Please take a seat and chat with me."`);
    }
    if (((s as any).NikoLuv ?? 0) > -4  &&  ((s as any).NikoPayback ?? 0) === 0) {
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (s as any).NikoLuv = ((s as any).NikoLuv ?? 0) + (1);
    qspCall(s, 'npc_relationship', 'modify', 'A189', Math.floor(Math.random() * 6) + 5);
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    if (((s as any).npc_rel ?? 0)?.['A189'] < 20) {
      scene.text('You and Niko don\'t get along at all.');
    }
    if (((s as any).npc_rel ?? 0)?.['A189'] >= 20  &&  ((s as any).npc_rel ?? 0)?.['A189'] < 40) {
      scene.text('You sit next to Niko and spend the next few minutes getting to know each other.');
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
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    }
    if (((s as any).NikoIntro ?? 0) > -1) {
      if (((s as any).NikoLuv ?? 0) > -4  &&  ((s as any).NikoVolkovQW ?? 0) === 0  &&  ((s as any).NikoPayback ?? 0) === 0) {
        scene.actions([
          { label: 'Insult', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A189', (-5));
    (s as any).NikoLuv = ((s as any).NikoLuv ?? 0) - (1);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
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
        if (qspFunc(s, 'money', 'can_afford', 200) === 0) {
          s.scene = { ...s.scene, mainText: String((s as any).noMoney ?? ''), curActs: [] };
        } else {
          qspCall(s, 'money', 'pay', 200);
          (s as any).NikoPayed = ((s as any).daystart ?? 0);
          (s as any).minut = ((s as any).minut ?? 0) + 5;
          qspCall(s, 'stat', '');
          scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
          // TODO-QSP: dynamic text: "I have your money right here." You extend your hand, giving him <<$func('money'...
          scene.text(`"I have your money right here." You extend your hand, giving him ${qspFunc(s, 'money', 'string_price', 200)}. He quickly counts it and gives you an approving nod. "Good. You're all paid up for today and can get going now."`);
          scene.actions([
            { label: 'Walk away', goto: ['gschool_lunch', 'break'] },
          ]);
        }
        scene.actions([
          { label: 'Money [+$func(\'money\', \'get_cost_string\', 200)]' }, // TODO-QSP: empty action body
        ]);
      }
      scene.actions([
        { label: 'Sex', handler: (st: GameState) => {
    (s as any).NikoPayed = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You cast your eyes down. "You can use my body as payment…"');
    scene.text('Niko\'s eyes light up. "I was hoping you\'d say that. Let\'s not waste time."');
    scene.text('He grabs your ass firmly while leading you to the less used restroom.');
    scene.actions([
      { label: 'Head to the restroom with Niko', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Offer sex', handler: (st: GameState) => {
    (s as any).NikoPayback_Sex = ((s as any).daystart ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/smile\'+rand(2, 3)+\'.jpg');
    scene.text('You walk up to Niko and place your hand on his crotch. "I know that I already paid you in money, but I want to give you another special payment."');
    scene.text('Niko\'s eyes light up. "Well, there\'s no way I\'d say no to that. Let\'s get going." He gives your ass a firm smack as you both head toward the less used restroom.');
    scene.actions([
      { label: 'Head to the restroom with Niko', goto: ['NikoPayback', 'Payback 3'] },
    ]);
  } },
      ]);
    }
    if ((((s as any).NikoPayback ?? 0) === 2  ||  ((s as any).NikoIntro ?? 0) === -1)  &&  ((s as any).NikoPayed ?? 0) === ((s as any).daystart ?? 0)) {
      scene.actions([
        { label: 'Chat', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikomisc/avatars/${((s as any).week ?? 0)}.jpg`);
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
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('You sit next to Niko. "Hey, I remember you telling me something about a \'special activity\' that you have planned."');
    scene.text('He grins. "I have something special for us today. Are you ready to find out what it is?"');
    scene.actions([
      { label: 'Go with him', handler: (st: GameState) => {
    if (Math.floor(Math.random() * 4) + 0 === 0) {
      scene.actions([{ label: 'Continue', goto: ['NikoDates', 'teacher_block'] }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['NikoWhore', 'Locker Room'] }]);
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
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/niko/nikoev/school/hallway/wos4.jpg');
    (s as any).VK = Math.floor(Math.random() * 3) + 1;
    if (((s as any).VK ?? 0) === 1) {
      // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'What kind of easy lay does he think I...
    } else {
      // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'What an annoying little punk!' + $Clo...
      // TODO-QSP: 'You walk away without saying a word. ' + $OpenInnerThought + 'Something about that guy really annoy...
    }
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).NikoPayback ?? 0) === 0  &&  ((s as any).NikoIntro ?? 0) > -1) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.img(`images/characters/pavlovsk/school/boy/niko/nikoev/avatars/${((s as any).week ?? 0)}.jpg`);
    scene.text('"I\'d love to stay, but I need to head to class early today."');
    scene.text('"I understand," he replies. "I guess I\'ll have to wait longer for an audience with this princess."');
    scene.text('You can feel your face flushing as you get up and walk out toward the hallway.');
    scene.actions([
      { label: 'Go to class', goto: ['gschool_lessons', 'short_break'] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
      ]);
    }
    scene.actions([
      { label: 'Walk away', goto: ['gschool_lessons', 'short_break'] },
    ]);
  }
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
    default:
      enterIntro(s, scene);
      break;
  }
}

export const NikoEv: LocationDef = {
  name: 'NikoEv',
  title: 'Discord.',
  region: 'other',
  description: ['You smile back at him. "Good. How was yours?"'],
  enter: enter,
};
