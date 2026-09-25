import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).menu_loc = 'lesbidomhouse';
  (s as any).menu_arg = 'start';
  qspCall(s, 'stat', '');
  if ((!(Math.floor(Math.random() * 3) + 0))) {
    scene.text('You ring the doorbell several times, but no one comes to answer the door. When you try to look inside through the windows, you don\'t see any movement either.');
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  } else {
    (s as any).location_type = 'public_indoors';
    scene.text('You ring the doorbell several times, and eventually hear an electronic *click*. The door slowly swings open, even though no one came to answer it.');
    if (((s as any).lesbiQW ?? 0) === 1) {
      scene.actions([
        { label: 'Enter the house', goto: ['lesbidomhouse', 'QW1'] },
      ]);
    } else {
      if (((s as any).lesbiQW ?? 0) === 2) {
        qspGoto(s, 'lesbidomhouse', 'QW2');
      } else {
        if (((s as any).lesbiQW ?? 0) === 3) {
          qspGoto(s, 'lesbidomhouse', 'QW3');
        } else {
          if (((s as any).lesbiQW ?? 0) === 4) {
            qspGoto(s, 'lesbidomhouse', 'QW4');
          } else {
            if (((s as any).lesbiQW ?? 0) === 5) {
              qspGoto(s, 'lesbidomhouse', 'QW5');
            } else {
              if (((s as any).lesbiQW ?? 0) === 6) {
                qspGoto(s, 'lesbidomhouse', 'QW6');
              } else {
                if (((s as any).lesbiQW ?? 0) === 7) {
                  qspGoto(s, 'lesbidomhouse', 'QW7');
                } else {
                  if (((s as any).lesbiQW ?? 0) === 8) {
                    qspGoto(s, 'lesbidomhouse', 'QW8');
                  } else {
                    if (((s as any).lesbiQW ?? 0) === 9) {
                      qspGoto(s, 'lesbidomhouse', 'QW9');
                    } else {
                      if (((s as any).lesbiQW ?? 0) === 10) {
                        qspGoto(s, 'lesbidomhouse', 'QW10');
                      } else {
                        if (((s as any).lesbiQW ?? 0) === 11) {
                          qspGoto(s, 'lesbidomhouse', 'QW11');
                        } else {
                          if (((s as any).lesbiQW ?? 0) === 12) {
                            qspGoto(s, 'lesbidomhouse', 'QW12');
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  }
  scene.build();
}

function enterQW1(s: GameState, scene: SceneBuilder): void {
  (s as any).lesbiQW = 2;
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('You\'re very nervous and briefly consider running, but then think about what she said in the boutique. You feel the urge to at least try it out.');
  scene.text('You take a deep breath and slowly feel your reluctance fade. Even though you\'re still nervous, you slowly enter her apartment and pull the door shut behind you.');
  scene.text(`The woman is nowhere to be seen, and you're not sure what to do. It would be rude to just walk around her house. "Hello!?" you shout, hoping she will come. "It's ${((s as any).pcs_nickname ?? '')}, from the boutique!"`);
  scene.text('The woman then appears, wearing a gorgeous red dress. "Ah, it\'s you," she says dismissively. She wordlessly gestures for you to follow her and walks towards a door, not looking to see if you\'re coming.');
  scene.actions([
    { label: 'Follow her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).subdom = 1;
    (st as any).MistressAdoration = 20;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/ira/irinaroom.jpg');
    scene.text('You look around the apartment. It looks well maintained and clean, but there\'s nothing homely or comfortable about it.');
    scene.text('"Not the most cozy apartment I\'ve ever seen…" you softly remark and she stops and turns around. You\'re met with a cold, silent stare and become very uncomfortable, squeaking out a meek apology.');
    scene.text('She shrugs away your apology as if she doesn\'t care before scolding you. "Indeed, but that leads me to your first lesson. Even the smallest of things, like the right choice of words, appropriate posture, the expression on your face. All of these can be used to make a girl feel uncomfortable. Weak. Helpless. Like you felt just now."');
    scene.text('You nod understandingly. "I\'ll remember that. By the way, I\'m having trouble remembering your name? I think you said it in the store once?"');
    scene.text('She smiles knowingly at you. "It\'s on the card I gave you, but that\'s not important. For now, you may call me Mistress."');
    qspCall(st, 'willpower', 'misc', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'I\'d rather not', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'I\'d rather not', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).MistressResist = 1;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/lesbi.jpg');
    scene.text('You stare at her with an annoyed glare. Who does she think she is!? You want to learn how to control other women, not be controlled by one! "I\'d really rather not."');
    scene.text('She sighs, but never loses her serene smile. "You call me Mistress. It\'s a very common thing. I am obviously not <b>your</b> Mistress, but I am <b>a</b> Mistress and I wish to be addressed as such. It\'s a matter of respect. But for the record, my name is Natalya. I\'m fairly sure I told you that."');
    scene.text('You nod understandingly. "So, when do we begin this training? What can you teach me?" you ask, eager to get started.');
    scene.text('She chuckles. "I like your enthusiasm, but it\'s very important not to rush things. You need to get to know your victim well, first. For example, you could start by having a drink with them. Ask lots of questions, and gather information. At the same time, you also earn their trust."');
    scene.text('Then she looks as if an idea just crossed her mind, and continues: "Actually, why don\'t we sit down? I can see you\'re interested in learning, but there are some things I have to explain to you first."');
    scene.text(`She leads you to another room when she sees you nod. She had already prepared a bottle of wine, two glasses and some snacks, and invites you to take a seat. "Have a seat, ${((st as any).pcs_nickname ?? '')}, I'll be with you soon."`);
    scene.actions([
      { label: 'Enjoy some drinks with her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 35;
    qspCall(st, 'drugs', 'alcohol', 'wine');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/wine.jpg');
    scene.text('You have a sip of the wine Natalya poured out for you, and nibble on a snack while you wait for her to return. After a few minutes, she enters the room with a smile. "I\'m sorry about the wait. Now, you want to learn from me, yes?"');
    scene.text('"Yes, Mistress…" you reply and she gives you an approving nod. "Excellent. I see a lot of potential in you. But you must know: I teach by doing. I can\'t simply tell you how it works; I have to <b>show</b> you."');
    scene.text('You give her a questioning look, and she continues. "That means, that while you are within these walls, you listen to me. You will do as I say. I will treat you like I would a submissive girl. You look like a smart girl, you will be able to recognize how I do things, and learn from that."');
    scene.text('You bite your lip. "Uhh… What kind of things would you make me do?"');
    scene.text('Natalya smiles confidently. "Do you want to learn how to really control a woman? How to make her do anything you want?"');
    scene.text('"Yes, I do…" you mutter.');
    scene.text('"Then you will do everything I say. Everything. Unconditionally", she adds, with a mysterious look in her eyes.');
    scene.text('You have your doubts, but at the same time can\'t help but notice how persuasive and confident she sounds. You want that too! You need to figure out how she does that!');
    scene.text('"Okay… I think I understand." You doubt you\'ll actually do everything she says, but for now you can humour her and see how good she is.');
    scene.text('Natalya puts her hand on yours reassuringly. "I think you\'ll love it, but we don\'t start until next time. Today is just for getting to know one another, so why don\'t you tell me a little about yourself?"');
    scene.text('You have a few more sips of the wine, and your nerves and uncertainly soon fade away. You begin to tell her about yourself, the topic soon moving to your sexual adventures when she asks you about them: how many guys you\'ve been with, how many at once, how many times you\'ve had anal, whether you liked it, and many other questions. You confess all kinds of intimate details to her, barely giving it a second thought.');
    scene.text('Before you know it, the wine bottle in front of you is empty. As it turns out, you drank most of it. Natalya is still on her first glass. She looks at you sternly, and says it\'s time for you to go. "I\'ll be awaiting your return. I can\'t wait to share my knowledge with you!" she exclaims as she ushers you out the door.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Yes, Mistress', handler: (st: GameState) => {
    (st as any).minut = 1;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/lesbi.jpg');
    scene.text('You feel a bit uncomfortable at the thought of calling her Mistress. You\'re here to learn how to control women, not be controlled by one! Nevertheless, it\'s a small sacrifice to make in exchange for what she promised you. If it keeps her happy, then what\'s the harm?');
    scene.text('You give her an affirmative nod. Yes, Mistress. What can you teach me?" You taste the word as you say it. It feels… strange. Not necessarily bad, though.');
    scene.text('She chuckles. "I like your enthusiasm, but it\'s very important not to rush things. You need to get to know your victim first. For example, you could start by having a drink with them. Ask lots of questions and gather information. At the same time, you also earn some trust by showing an interest in their lives."');
    scene.text('It looks like an idea just crossed her mind, and she continues. "Actually, why don\'t we sit down? I can see you\'re interested in learning, but there are some things I have to explain to you first."');
    scene.text(`She leads you to another room, where you find she's already prepared a bottle of wine, two glasses and some snacks. "Have a seat, ${((st as any).pcs_nickname ?? '')}. I'll be with you soon."`);
    scene.actions([
      { label: 'Chat with her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 35;
    qspCall(st, 'drugs', 'alcohol', 'wine');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/wine.jpg');
    scene.text('You have a sip of the wine she put out for you, and nibble on a snack while you wait for her to return. After a few minutes, she enters the room with a smile. "I\'m sorry about that. Now, you want to learn from me, yes?"');
    scene.text('"Yes, Mistress…" you reply and she gives you an approving nod. "Excellent. I see a lot of potential in you. But you must know: I teach by example. I can\'t simply tell you how it works; I have to <b>show</b> you how it works. Make you <b>feel</b> how it works."');
    scene.text('You give her a puzzled stare and she continues. "That means, that while you are within these walls, you listen to me. You will do as I say. I will treat you like I would a submissive girl. You look like a smart girl; you\'ll be able to recognize how I do things, and learn from that."');
    scene.text('You bite your lip. "Uhh… What kind of things would you make me do?"');
    scene.text('She smiles confidently. "Do you want to learn how to really control a woman? How to make her do anything you want?"');
    scene.text('"Yes, I do…" you mutter.');
    scene.text('"Then you will do everything I say. Everything. Unconditionally," she adds with a mysterious look in her eyes.');
    scene.text('You swallow nervously, but at the same time can\'t help but notice how persuasive and confident she sounds.');
    scene.text('"Okay… I think I understand," you reply with a slightly shaky voice.');
    scene.text(`Mistress puts her hand on yours reassuringly. "There's no need to be nervous, ${((st as any).pcs_nickname ?? '')}. We don't start until next time. Today is just for getting to know one another, so why don't you tell me a little about yourself?"`);
    scene.text('You have a few more sips of the wine, and your nerves and uncertainly soon fade away. You begin to tell her about yourself, and the conversation soon moves to your sexual adventures, where you confess all kinds of intimate details to her, barely giving it a second thought.');
    scene.text('Before you know it, the wine bottle in front of you is empty, discovering that you drank almost all of it. Mistress is still on her first glass. She looks at you sternly, and says it\'s time for you to leave. "I\'ll be awaiting your return. I can\'t wait to share my knowledge with you!" she exclaims as she ushers you out the door.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQW2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).lesbiQW = 3;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/lesbi.jpg');
  scene.text('As soon as you enter the apartment, she meets you in the corridor and smirks. "I knew you would be back. I recognized that look. Don\'t worry, we\'ll start simple today."');
  scene.text('Her tone and demeanour then change. "Take off your clothes. Now." she barks in a cold and authoritative voice.');
  scene.text('You freeze. This is not how you thought this would go, but you remember her words. She expects you to do everything she says, to the letter. Refusing to do so will probably not end well.');
  qspCall(s, 'willpower', 'humiliation', 'resist', 'hard');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    qspCall(s, 'willpower', 'humiliation', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Ask why you have to be naked', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Ask why you have to be naked', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (20);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse.jpg');
    scene.text('There\'s absolutely no way you\'re doing that! "What? Do I have to? That\'s so humiliating! Can\'t you just tell me?" you protest while blushing.');
    scene.text('Mistress sighs wearily and quickly walks towards you. She grabs you by the chin, and roughly slaps your cheeks a few times. "Was I not clear last time, girl? I warned you: if you come back, you do as I say. Unconditionally. No questions asked!" she growls.');
    scene.text('For the slender woman that she is, she\'s actually quite powerful. You stop resisting after a while, realizing you can\'t struggle your way out of her grip.');
    scene.text('When she feels your body relaxing, she smiles. You can see it\'s a fake smile, though; she\'s still angry. For the next few minutes, she looks you in the eyes while reminding you how you should behave in the presence of a domme. Immediate obedience is very important.');
    scene.actions([
      { label: 'Suffer through your punishment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (20);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse1.jpg');
    scene.text('She forces you to strip, roughly assisting when you\'re not going fast enough for her liking before she stands you up against the wall while holding a rod in her hand. "That was dreadful!" she scolds you. "Absolutely dreadful. I expect better behavior from you in the future. If I need to punish you again, it will be more than just words."');
    scene.text('You gulp and nod obediently. She leaves you standing there against the wall for nearly half an hour, placing the cane against the wall next to you as a constant reminder of what will happen if you disobey her again. Mistress sits at the dining room table, drinking a cup of coffee and leafing through a magazine while occasionally glancing over at you.');
    scene.text('When the 30 minutes are over, she orders you to quickly dress and leave. She walks you to the door after watching you get dressed. "If you decide to come back, you know what I expect from you. Today was unacceptable, and I will not tolerate it again!"');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } else {
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).MistressResist = 1;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom61.jpg');
    scene.text('There is absolutely no way you\'re doing that! "What? No way! That\'s so humiliating! Can\'t you just teach me?" you protest while blushing.');
    scene.text('Natalya sighs wearily and quickly walks towards you. She grabs you by the chin, and raises her hand to slap you. For some reason, she changes her mind after she looks you in the eye and just lets her hand linger in mid-air. "Was I not clear last time, girl? I warned you: if you come back, you do as I say. Unconditionally!"');
    scene.text('You stare her down. "In that case, we\'re done. I won\'t get naked for someone I just met, just because they tell me to. Especially when it serves no purpose!"');
    scene.text('Natalya\'s stature deflates a little and she shrugs before letting you go. She then rests her hands on her hips with a deep sigh. "Fine… I\'ll lend you some lingerie to wear for the first session, so you can ease into it. But I\'m telling you: nudity will be a big part of your training. If you\'re already uncomfortable taking your clothes off, there\'s no way you can exude enough confidence to take control over a woman. If you continue to feel that way after today, don\'t come back."');
    scene.actions([
      { label: 'Put on her lingerie', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (20);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom50.jpg');
    scene.text('You quickly move to her bedroom and put on the lingerie set she offers you. It\'s a very delicate and intricate set. You carefully put it on and return to the living room, where Natalya is waiting impatiently.');
    scene.text('She orders you to put your hands behind your head and spread your legs. "Good. This will be your \'idle position\'. Whenever a submissive girl isn\'t doing anything, she should present herself like this. Is that clear?"');
    scene.text('"Yes, Mistress," you promptly reply, knowing what\'s expected of you. You continue to stand in this position while she lectures you about other common \'slave girl\' positions. She has you practice several others too, both standing and on your knees.');
    scene.text('During her lecture, Natalya feels you up from time to time, idly running her hands over your thighs, breasts and butt. It doesn\'t feel particularly unpleasant, so you let her do it. She also spends some time telling you how a submissive girl should behave in the presence of a domme. Immediate obedience is very important.');
    scene.text('She then suddenly gives you a hard slap on the ass. "Time\'s up. You need to go."');
    scene.text('You carefully take her lingerie set off and put your own clothes back on. When you gather your things and get ready to leave, you try to think back on what you\'ve learned from her demeanour and lessons today. Not much, to be honest, but it was fascinating to see her work with you.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Reluctantly do as she says', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub1.jpg');
    scene.text('Overcoming the awkwardness and embarrassment of getting naked in front of a woman you barely know, you slowly follow her instructions. You slowly remove your clothing while observing Mistress, trying to learn from her actions.');
    scene.text('She then orders you to put your hands behind your head and spread your legs. "Good. This will be your \'idle position\'. Whenever you\'re not doing anything, you will present yourself like this. Is that clear?"');
    scene.text('"Yes, Mistress," you promptly reply, knowing what\'s expected of you. This feels weird, but really not that bad. You continue to stand in this position while she lectures you about other common \'slavegirl positions\'. She has you practise several others too, standing and on your knees.');
    qspCall(st, 'arousal', 'foreplay', 30, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.text('Seeing your butt plug, she suddenly starts laughing and gives it a little poke and twist. "Looks like you\'re on the right track, girl…"');
      qspCall(st, 'arousal', 'anal_dildo', 30, 'sub', 'lesbian');
      qspCall(st, 'arousal', 'end');
    }
    scene.text('During her lecture, Mistress feels you up from time to time, idly running her hands over your thighs, breasts and butt. She also spends some time telling you how you should behave in the presence of a domme. Immediate obedience is very important.');
    scene.text('She then suddenly gives you a hard slap on the ass. "Time\'s up. You need to go."');
    scene.text('You barely have any time to put your clothes back on, but Mistress waits impatiently by the door until you are dressed. When you gather your things and get ready to leave, you try to think back on what you\'ve learned from her demeanour and lessons today. Not much, to be honest, but it was fascinating to see her work with you.');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterQW3(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).lesbiQW = 4;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/mistress.jpg');
  scene.text('Mistress looks over her shoulder when she hears someone enter her room. "Ah, my slave. So you came back for more?" she asks with a raised eyebrow.');
  scene.text('You cringe when you hear her call you that. "Yes, Mistress," you reply, and stand in the position she showed you.');
  scene.text('Noticing your proper position, she gives you a satisfied nod and a little smile. "Good, you paid attention last time. Now, take off your clothes and get on your hands and knees. You can leave your underwear on since I\'m in good mood today. We\'re going to practice some pet play!"');
  if (((s as any).MistressResist ?? 0) === 1) {
    scene.actions([
      { label: 'Refuse to be her pet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).MistressResist = 2;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom51.jpg');
    scene.text('"You don\'t want to do pet play, huh?" Natalya remarks, noticing your reluctance. "I expected as much. That\'s okay, we can do some bondage practice instead. I picked out some lingerie for you to wear, if you still don\'t want to be nude. You can change in my bedroom."');
    scene.text('When you enter her bedroom and begin to undress, you see a delicate black lingerie set already laid out for you. Too delicate. It looks like it might get damaged very easily. Besides, it looks like it will just get in the way.');
    scene.text('To Natalya\'s surprise, you come back completely naked. You return to standing in the pose you knows she likes, and smile at her confidently. "The lingerie looked too frilly, Mistress. I\'m here to learn… so teach me. Teach me about bondage."');
    scene.actions([
      { label: 'Allow Natalya to bind you', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/dom52.jpg');
    scene.text('She smiles eagerly and comes back with a large wooden box on wheels. When you glance at the contents, you see lots and lots of bondage gear. Rope, straps, collars, cuffs, gags… she\'s definitely done this many times before.');
    scene.text('Natalya begins. "Okay, how about we start with something simple? A leather harness and some belts is quite effective, quick to use and quite pretty to look at."');
    scene.text('She quickly picks out a black harness and a few more belts, and begins to bind you. The cool leather on your skin feels nice, especially the strap that goes over your pussy.');
    scene.text('"Harnesses can be fairly difficult to adjust; either they fit, or they don\'t. If you have a dedicated submissive girl, the best thing would be to custom order one to guarantee a good fit." she explains while continuing to bind you.');
    scene.text('"This one fits you quite well actually. Very nice. Would you like me to show you how to use the belts too?"');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/dom53.jpg');
    scene.text('"Yes please, Mistress." You want to try it all. The harness itself feels nice, but doesn\'t really do much.');
    scene.text('Natalya grins and puts some belts around your legs, forcing you into a kneeling position. Fortunately you\'re sitting on a soft pelt, so it\'s not too uncomfortable. She then uses three belts to secure your arms behind your back.');
    scene.text('When you wince, she smiles apologetically. "Sorry, I keep forgetting you\'re new at this. This is not an easy position, but it\'s very secure, wouldn\'t you agree?"');
    scene.text('You try to wiggle. "Very much so, I can barely move!"');
    scene.text('Natalya knowingly nods before putting a matching collar around your neck. "This collar is called a posture collar," she explains. "I know you don\'t care much for pet play, but I figure we can at least go over fitting some collars today, so you get some experience with those. Knowing what to look for in a collar is very important, both for pet play and other activities."');
    scene.text('"I\'ll leave you now. It\'s important to experience the binds for a little while; some don\'t get uncomfortable for a while, while others actually get easier over time. Five minutes isn\'t long, but this way you can at least get a taste."');
    scene.text('"Okay, Mistress," you nod before spying a large mirror on the other side of the room. You can see your reflection in it and wiggle slightly, admiring your form in the binds. Five minutes later, Natalya comes back.');
    scene.text('She looks a bit… frustrated, as if she wants to jump you right now, but knows she can\'t. "Shall we continue?" she asks with a light tremble in her voice.');
    qspCall(st, 'arousal', 'foreplay', 15, 'sub', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Yes', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/dom54.jpg');
    scene.text('Natalya nods when you request she shows you some cuffs. "Of course. You can do all sorts of interesting things with cuffs. They\'re also very easy and fast to use, and can practically be worn all day, every day. Here, let me help you with those."');
    scene.text('She puts some cuffs on your wrists, and a similar set around your ankles. They\'re made of fairly thick leather, but feel comfortable.');
    scene.text('You idly rub them once Natalya puts them on you. The feeling is intriguing  and Natalya recognizes the look in your eyes and smiles. "Of course it\'s possible to just connect the cuffs to one another, but you don\'t need me to show you that. How about… come, this way."');
    scene.text('She has you sit on a window sill, and chains you down with your arms and legs spread wide. "It\'s just an example, but you can get really creative with securing your girl somewhere interesting."');
    scene.text('She then undoes them, and helps you off the window sill. "There are other items you can combine with cuffs to create an interesting experience. Come."');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'bound', 'humiliation');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Learn more about cuffs', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/dom55.jpg');
    scene.text('She walks to the other end of the room and pulls a spreader bar out of a cabinet. She hooks your cuffs to the ends before placing a matching collar around your neck. Your ankle cuffs are simply attached to one another with a short chain.');
    scene.text('"This collar is a bit easier to wear than the previous one. The spreader bar is a great tool to use in combination with cuffs or rope. It\'s one of my favorites! You can create very enticing positions this way," she grins.');
    scene.text('She reaches into the cabinet again and pulls out a ball gag. "Would you like to try it? Just to see how it feels?"');
    scene.text('"I\'ll try, but don\'t you have anything smaller?" you suggest.');
    scene.text('She shakes her head. "Nope, they\'re all around this size at least." You shrug and open your mouth, letting Natalya put it in. It\'s fairly large, and your jaw feels a bit uncomfortable almost immediately. "I\'ll be back again in five minutes, so you can get a feel for these too."');
    scene.text('You look at yourself in the mirror again while waiting for her to return. After five minutes, Natalya rushes over and quickly takes the gag out of your mouth. "Not your thing, huh?" she remarks. "At least you know how it feels to wear one now. They\'re definitely more of an acquired taste."');
    scene.text('You move your jaw around, trying to get rid of the sore feeling while she unfastens your cuffs. "Not my thing indeed. What\'s next?"');
    scene.text('She glances at her watch. "We still have time to do some rope bondage. Difficult to master, but well worth the effort."');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her bind you with ropes', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/dom56.jpg');
    scene.text('"Let\'s begin with a rope harness. It\'s similar to the leather harness you wore earlier and doesn\'t do much by itself, but it looks very pretty and gives the wearer a feeling of submission."');
    scene.text('Natalya tightly binds you with a long coil of red rope, her hands deftly moving around you. Mere minutes later, you have a rope harness tied around your torso. You can\'t help but be impressed by how fast she worked.');
    scene.text('"This is just a simple harness, thrown together in a few minutes. It\'s also fairly easy to create one where you also bind the wrists behind the girl\'s back. Here, I\'ll show you a very simple one."');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Let her continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/dom57.jpg');
    scene.text('She quickly undoes the first harness, and binds you into one where you have your wrists tied to your back as well. While she\'s really good at this, it doesn\'t explain much. It feels more like she\'s just showing off at this point.');
    scene.text('"So, what do you think?" she asks.');
    scene.text('You struggle in the harness. It\'s far more rigid than it looks. "Very impressive."');
    scene.text('She grins smugly before looking at her watch. "You think that\'s impressive? I can show you impressive if you want. We have time for one more."');
    scene.text('"Sure thing, Mistress. Surprise me."');
    qspCall(st, 'arousal', 'foreplay', 10, 'sub', 'bound');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'large');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom58.jpg');
    scene.text('She quickly disposes of the red rope before pulling out two coils of even longer blue rope. "The red one wouldn\'t be long enough," she smirks. "Have a seat on the table."');
    scene.text('Fifteen minutes later, she has you tied up just as tight as before. She notices you trying to inspect yourself and grins. "Hold on, I\'ll get you a mirror."');
    scene.text('She returns with a mirror and a ring gag. She shows the gag to you, but puts it away when you shake your head.');
    scene.text('"Worth a shot," she pouts disappointedly. "The gag really would\'ve finished the look." She then holds up the mirror so you can see yourself.');
    scene.text('"Consider me impressed," you admit and she nods cheerfully. "I told you!" she beams. "Anyway, I can give you five minutes in this, but after that we have to wrap it up. As much fun as this is, I have an appointment soon."');
    scene.text('She walks out again and leaves you for five minutes before returning and undoing the knots with what almost looks like a tinge of regret in her eyes.');
    qspCall(st, 'arousal', 'foreplay', 20, 'sub', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
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
  } else {
    qspCall(s, 'willpower', 'humiliation', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to take your clothes off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to take your clothes off', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) - (10);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (2);
    scene.text('' + ((st as any).clothingworntype ?? 0) + '[' + ((st as any).clothingwornnumber ?? 0) + '] -= 5');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse2.jpg');
    scene.text('You look at Mistress defiantly, refusing to take your clothes off. Why can\'t she just talk to you about how she does things?');
    scene.text('Mistress just stares at you intently for several seconds, and the silence in the room is deafening. A sinister smile then slowly forms on her lips and you remember her promise.');
    scene.text('She roughly grabs you by the hair and quickly strips you, not caring if she damages your clothes. Once you\'re nude, she throws you down on the sofa and reaches for her cane.');
    scene.text('"I told you what I expect you to do. To do what I <i>tell</i> you to, slave!" she hisses. "This is what happens when you don\'t."');
    scene.actions([
      { label: 'Try to apologize', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = 0;
    (st as any).spank = ((st as any).spank ?? 0) + (1);
    qspCall(st, 'sweat', 'add', 10);
    (st as any).spanked = 3;
    (st as any).spankedtime = ((st as any).totminut ?? 0);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse3.jpg');
    scene.text('You quickly try to grovel and apologize. "Please, Mistress! I\'m sorry! Please don\'t do thi-aaaah!"');
    scene.text('You\'re interrupted by a sharp burning pain across your ass, and you instinctively try to scurry away. Mistress expected this, and readily holds you tight before pushing you down onto the sofa again.');
    scene.text('"I\'m very disappointed at your lack of progress. Now present your ass for punishment! Now!"');
    scene.text('Realizing you have no other option, you assume the position and whimper when the wooden cane hits your ass cheeks again. The searing pain brings tears to your eyes, and several are rolling down your cheeks when Mistress finally stops. And that was her holding back.');
    scene.text('She has you remain in this position while she has a cup of coffee. When you\'re finally allowed to put your clothes back on, you wince when the fabric touches the whip marks. You\'re not sure how you\'re going to sit down for the next few days.');
    scene.text('Mistress definitely made her point today; these \'lessons\' are not going to be easy. She\'ll make it hurt if you don\'t comply with what she wants.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Do as she says', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub2.jpg');
    scene.text('Even though her teaching methods are strange, there\'s no denying that she is very good at what she does. You obediently take off your clothes and get down on all fours in front of her. Mistress chuckles appreciatively, and tells you to hold your hair back while she fastens a collar around your neck. She then attaches a leash to it. "I\'m sure you\'re familiar with the term \'making someone crawl for you\'. That\'s what today is all about. You will learn how a slave behaves while collared and leashed. We\'ll begin with walking."');
    scene.text('She walks you around her apartment, instructing you on how to behave and correcting you when you make mistakes.');
    scene.text('After 30 minutes, she stops and praises you. "That went better than expected, slave. Maybe pet play is something we should look into for you…"');
    scene.text('She removes the collar and lets you get dressed, saying you\'re making decent progress in your training and that she\'ll be expecting you to come by again shortly.');
    qspCall(st, 'arousal', 'foreplay', 30, 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
  ]);
  scene.build();
}

function enterQW4(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/mistress.jpg');
  scene.text('When you enter her apartment, Mistress is already waiting for you. She takes a few steps back and appraises your body from head to toe. "You know the drill, slave. Get rid of those clothes and present your pussy to me. Make it quick."');
  if (((s as any).MistressResist ?? 0) === 2) {
    scene.actions([
      { label: 'Reluctantly show her your pussy', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub3.jpg');
    scene.text('You\'ve just about had it with Natalya. You look her in the eye and see that glimmer of doubt in her eyes.');
    scene.text('You decide to humour her… for now. She\'s already seen your pussy anyway when she was doing her bondage demonstration. You slowly take your clothes off and give her a questioning look as to where you should sit.');
    scene.text('"Uhh, how about the chair?" she suggests. It sounds very uncertain.');
    scene.text('"Yes, Mistress," you obediently and walk over to the chair very slowly. You can tell she\'s exploding with anger, but she doesn\'t do anything about it and bites her lip while watching you walk.');
    scene.text('When you take a seat and spread your legs wide, Natalya\'s eyes are practically glued to your groin. Deciding to give her a good look, you pull your pussy lips apart. "Like this, Mistress?" You try to ask submissively, but at the same time leave just a hint of mockery in your voice.');
    scene.text('She doesn\'t notice. "Very nice, slave… Very fuckable…" she mutters, more to herself than you.');
    scene.actions([
      { label: 'Confront her', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom59.jpg');
    scene.text('Natalya tries objecting when you stand up, but you interrupt her by putting your hand over her mouth and pulling her head back by her hair.');
    scene.text('You move behind her and slide your hand down to her throat. "Natalya, what are we even doing here?" you whisper in her ear and she swallows nervously.');
    scene.text('"Please stop that! This i-" she tries to object again, and once more you quieten her with your hand. "How many girls have you tried to fool with this act, Natalya?" you innocently ask.');
    scene.text('"Umm…" she pauses, unsure what to say.');
    scene.text('"I see. You\'ve lost count. Tell me, how many of them stayed for more than a few weeks?" you continue.');
    scene.text('Natalya quiets down, at a total loss for words. You feel her slumping against you. "Let me guess… None?" you say in a soft, soothing voice. "Why do you think that is, Natalya?"');
    scene.text('Natalya bites her lip nervously, getting close to bursting into tears. "I don\'t know!" she blurts out.');
    scene.text('When you lightly bite her neck, you can actually feel her shiver and relax. "It\'s because you\'re not meant to be a domme, Natalya. Even during our bondage session, you were practically running to cater to my every need. You were tying me up, yet I was calling the shots. How is that possible, Natalya? Would a domme let that happen?"');
    scene.text('"No…" she whispers softly.');
    scene.actions([
      { label: 'Suggest she serve you instead', handler: (st: GameState) => {
    (st as any).subdom = 2;
    (st as any).lesbiQW = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/dom60.jpg');
    scene.text('You kiss and gently bite her neck, letting the truth sink in. "What should we do with you now?" you ponder out loud, and feel Natalya shiver again. She doesn\'t say anything.');
    scene.text('"You know what, you couldn\'t even come close to controlling me when I pretended to serve you. Maybe it should be the other way around…" you continue.');
    scene.text('She still says nothing. "Would you like that, Natalya? Would you like to serve me? I think you would…" you whisper while gently caressing her breasts.');
    scene.text('"I asked you a question. Answer!" you insist in a stern voice, shaking her.');
    scene.text('"Well, I don\'t know!" she starts, making you grin. The fact that she doesn\'t object right there and then tells you she\'s yours, if you want her.');
    scene.text('"You\'re thinking about it already, aren\'t you?" you smirk. "I bet you\'re dripping, thinking of all the ways you could serve me. Show me your cunt, right now."');
    scene.text('To your surprise, she immediately gets up and begins to take her clothes off. She\'s literally dripping with arousal.');
    scene.text('"Just as I thought…" you smirk while looking her in the eye. "Here\'s what\'s going to happen. I\'m going to leave now, but I <b>will</b> be back. I want you to think long and hard about how you\'re going to receive me next time I come over. Also, I\'m going to need a key."');
    scene.text('Natalya says nothing, but nods eagerly. There\'s a certain look of desperation in her eyes.');
    scene.text('"I\'ll decide what to do with you, based on what happens during my next visit. So… dazzle me." You make it sound firm, but benevolent.');
    scene.text('Having said your piece, you walk to the hallway and put your clothes back on, likely for the last time. Next time you\'re here things will be very, very different.');
    qspCall(st, 'arousal', 'kiss', 4, 'dom', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    qspCall(s, 'willpower', 'humiliation', 'resist');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse to show your pussy', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse to show your pussy', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 6;
    (st as any).pcs_horny = 0;
    (st as any).spank = ((st as any).spank ?? 0) + (1);
    (st as any).spanked = 2;
    (st as any).spankedtime = ((st as any).totminut ?? 0);
    qspCall(st, 'sweat', 'add', 10);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (2);
    (st as any).lesbiQW = 5;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse4.jpg');
    scene.text('Showing your pussy to her? You barely know her! Why isn\'t she teaching you things like she promised?');
    scene.text('When you begin to shake your head, Mistress swears loudly and roughly grabs you by the hair. "Useless piece of shit, I knew you were going to be more trouble than you\'re worth!"');
    scene.text('She sits on a chair, pulls you over her lap and spanks your ass with the first item she could get her hands on; a hairbrush. For the next few minutes, she relentlessly beats your ass with it despite your begging and pleading, and she\'s gasping for air by the time she finally stops. Not because she feels you\'ve had enough, but because her arm is too tired to continue.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 4;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (10);
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse5.jpg');
    scene.text('With a furious look in her eyes, she throws you onto the ground and kicks you in the stomach out of sheer frustration. Perhaps realizing that this is a bit too harsh on a new girl like you, she doesn\'t kick you very hard. It still makes you curl up into a ball, gasping for breath while your ass cheeks feel like someone set them on fire.');
    scene.text('Hoping that maybe it\'s not too late, you roll onto your back and spread your pussy lips for Mistress with tears in your eyes. "Here\'s my pussy, Mistress! Please!" you beg.');
    scene.text('She looks down at you and scans your body from head to toe, focusing on your pussy in particular. She then shrugs. "Too late, slave. You ruined it."');
    scene.text('She then passively waves her hand at you and tells you to get out. Not wanting to anger her any further, you quickly get dressed in the hallway before she can change her mind.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  }
  scene.actions([
    { label: 'Show her your pussy', handler: (st: GameState) => {
    (st as any).lesbiQW = 5;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (20);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub3.jpg');
    scene.text('You dutifully take off your clothes and look around for a place to sit. You pull out one of the dining room chairs and take a seat before spreading your legs and pulling your pussy lips to the sides with your fingers. "Like this, Mistress?"');
    scene.text('Mistress nods idly, pleased with your obedience, before she crouches in front of you and examines your pussy. "Wonderful, very fuckable! That will do just fine." You can hear a hint of admiration in her voice.');
    scene.text('You blush at her compliment, but don\'t get much time to think it over. Once Mistress gets up, she grabs you by the hair and pulls you towards the sofa on all fours, making you crawl like a pet.');
    scene.actions([
      { label: 'Crawl behind her', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub4.jpg');
    scene.text('You do your best to follow Mistress on all fours, trying to ignore the pain from how roughly she\'s pulling your hair.');
    scene.text('When you get there, Mistress breaks out a few coils of rope and ties your elbows and knees together before wrapping some around your waist, using it to attach a pillow to your back.');
    scene.text('"As a slave, you will have many duties. Whatever your Mistress requires, you will provide. In this case, I require a footstool." She places her feet on the pillow. "You need to get used to the feeling of ropes on your skin since they will be used a lot in order to restrain you. You will remain in this position while I relax."');
    scene.text('Knowing better than to go against her, you decide to stay quiet and wait it out. After an hour, she finally unties you. Once you\'re free, you desperately try to rub some feeling back into your sore arms and legs and wince at the strain this position put on them. Meanwhile, Mistress shows you no compassion whatsoever and simply tells you to get dressed and leave.');
    qspCall(st, 'arousal', 'foreplay', 60, 'sub', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQW5(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).lesbiQW = 6;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/substrap.jpg');
  scene.text('When you enter Mistress\' apartment, you decide to undress since she\'s going to ask you to anyway. However, when Mistress walks around the corner, you pause. She\'s wearing a strap-on harness, and the attached dildo is huge. You force yourself to take off your clothes before she has to ask, but can\'t keep your eyes off the strap-on that\'s slowly bobbing up and down with every step she takes.');
  scene.text('She notices your fearful glances and snorts. "That\'s right, slave. I\'m going fuck your cunt with this, and you will take the full length without question. Go into my room and lie down on the bed."');
  qspCall(s, 'willpower', 'BDSM', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Beg her not to do it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Beg her not to do it', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (1);
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse6.jpg');
    scene.text('You fall to your knees in front of Mistress and beg her to spare your pussy, afraid of what will happen if she fucks you with that monster.');
    scene.text('"No?" Mistress asks, raising an eyebrow. She pats you on the head and sympathetically looks you in the eye. "Very well. But only because you look so adorable when you beg. Since you\'ve been such a good girl, I\'ll grant you this. You do understand that this means I\'ll have to punish you, though?"');
    scene.actions([
      { label: 'Thank her', handler: (st: GameState) => {
    (st as any).pcs_horny = 0;
    ((st as any).stat = (st as any).stat ?? {})['rape_count'] = ((st as any).stat['rape_count'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    if (((st as any).analPlugIn ?? 0) === 1) {
      qspCall(st, 'boyStat', 'D4');
      scene.img('images/characters/city/natalya/sex/subrefuse7plug.jpg');
      scene.text('You stay on your knees and meekly nod. You feel relieved, despite the fact that she also said you will be punished.');
      scene.text('Mistress tells you to stay on your knees and reaches for your butt plug. You wince slightly when she pulls it out a bit faster than you\'d have hoped.');
      scene.text('She slaps your ass cheek hard several times, and the sympathetic look in her eyes is completely gone. "Bed, face down. Now." she commands in a dismissive tone.');
      qspCall(st, 'arousal', 'anal_dildo', 5, 'sub', 'lesbian');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Lie down on her bed', handler: (st: GameState) => {
    (st as any).analPlugIn = 0;
    (st as any).analPlugOut = 1;
    qspCall(st, 'sweat', 'add', 10);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse7.jpg');
    scene.text('As soon as you lie down on your stomach, you feel her hand on your ankle. You look back instinctively, and see her uncoil a long piece of rope. "Eyes forward, slave!" she commands with an authoritative look in her eyes.');
    scene.text('"I\'m sorry, Mistress…" you mumble, hoping to placate her, but she doesn\'t care for your apology and ties your ankles to your thighs. She puts your torso in a rope harness as well, and securely ties your wrists behind your back.');
    scene.text('You hear her snapping on a rubber glove, and a few seconds later your heart sinks when you feel her fingers begin to wiggle their way past your sphincter. She shows no patience at all, and pushes her fingers all the way in.');
    scene.text('Ignoring your reaction, she forces her whole hand past your sphincter and starts mercilessly fisting your asshole. She occasionally mutters to herself about how much of a disappointment you\'ve been so far, and that you have a long way to go.');
    (st as any).minut = ((st as any).minut ?? 0) + 35;
    qspCall(st, 'arousal', 'anal_finger', 20, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(st, 'arousal', 'anal_fist', (-20), 'sub', 'lesbian', 'bound', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Break down and cry', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).lesbiQW = 6;
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'mood', 'lower', 'min');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse8.jpg');
    scene.text('When she finally tires, she jerks her hand free from your ass with a loud pop and rolls you over. Tears roll down your cheeks as you try to apologize, but all that comes out of your mouth is incoherent mumbling. The pain has you in shock, and you barely register what\'s going on around you.');
    scene.text('Mistress sits on a chair and watches you intently with a tinge of pride in her gaze. After she catches her breath, she undoes your bindings and you lie weakly on her bed, slowly drying your tears.');
    scene.text('"Have you learned your lesson now? Do not test my patience again! What I say, you do. No discussion."');
    scene.text('Without waiting for a response she leaves the room, expecting you to find your own way out. You take your time and get dressed very slowly.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/city/natalya/sex/subrefuse7.jpg');
      scene.text('You stay on your knees and meekly nod. You feel relieved, despite the fact that she also said you will be punished.');
      scene.text('She slaps your ass cheek hard several times, and the sympathetic look in her eyes is completely gone. "Bed, face down. Now." she commands in a dismissive tone.');
      scene.text('As soon as you lie down on her bed, you feel her hand on your ankle. You look back instinctively, and see her uncoil a long piece of rope. "Eyes forward, slave!" she command with an authoritative look in her eyes.');
      scene.text('"I\'m sorry, Mistress…" you mumble, hoping to placate her, but she doesn\'t care for your apology and securely ties your ankles to your thighs. She puts your chest in a rope harness as well, and securely ties your wrists behind your back.');
      scene.text('You hear her snapping on a rubber glove, and a few seconds later your heart sinks when you feel her gloved fingers begin to wiggle their way past your sphincter. She shows no patience at all, and pushes her fingers in all the way in.');
      scene.text('Ignoring your reaction, she forces her whole hand past your sphincter and starts mercilessly fisting your asshole. She occasionally mutters to herself about how much of a disappointment you\'ve been so far, and that you have a long way to go.');
      qspCall(st, 'arousal', 'anal_finger', 20, 'sub', 'lesbian', 'bound');
      qspCall(st, 'arousal', 'anal_fist', (-20), 'sub', 'lesbian', 'bound');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Break down and cry', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', 10);
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse8.jpg');
    scene.text('When she finally tires, she jerks her hand free from your ass with a loud pop and rolls you over. Tears roll down your cheek as you try to apologize, but all that comes out of your mouth is incoherent mumbling. The pain has you in shock, and you barely register what\'s going on around you.');
    scene.text('Mistress sits on a chair and watches you intently with a tinge of pride in her gaze. After she catches her breath, she undoes your bindings and you lie weakly on her bed, slowly drying your tears.');
    scene.text('"Have you learned your lesson now? Do not test my patience again! What I say, you do. No discussion."');
    scene.text('Without waiting for a response she leaves the room, expecting you to find your own way out. You take your time and get dressed very slowly.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Go to her room', handler: (st: GameState) => {
    (st as any).girl = ((st as any).girl ?? 0) + (1);
    qspCall(st, 'sweat', 'add', 20);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/sub5plug.jpg');
    } else {
      scene.img('images/characters/city/natalya/sex/sub5.jpg');
    }
    scene.text('You enter Mistress\' bedroom and hesitantly lie down on your back. Mistress immediately pounces on top of you and guides the monstrous strap-on to your pussy lips.');
    scene.text('"Look at cute little cunt of yours… I bet it will look adorable getting stretched around my giant rubber cock," she grins evilly. She wastes no time, and unceremoniously thrusts it in as far as it will go. Ignoring your painful groan, she then begins to hammer the strap-on inside of you.');
    if (((st as any).pcs_horny ?? 0) >= 100) {
      scene.text('You cum violently as Mistress fucks you with her giant dildo. You instinctively clasp your legs around her hips, allowing her even easier access to the depths of your pussy. "Next time ask for permission first, slave!" she scolds while continuing to thrust the dildo even harder as punishment.');
    }
    scene.text('Finally, Mistress becomes too tired to continue and climbs off you. She grabs you by the hair and forces your face down towards her crotch while sliding the strap-on harness down with her other hand.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_strap', 20, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub6.jpg');
    scene.text('You\'re still trying to catch your breath, but obediently start to lick the juices from her drenched pussy.');
    if (((st as any).pcs_horny ?? 0) >= 100) {
      scene.text('The idea of pleasing Mistress with your mouth pushes you over the edge, and you orgasm powerfully. Meanwhile you continue to work Mistress\' vagina with your tongue, knowing all that matters is her satisfaction. "Did you just have an orgasm, slave? Next time, ask permission first!" she scolds you.');
    }
    scene.text('A few minutes later, Mistress shudders when she climaxes. "Not bad, slave. I was having my doubts, but maybe I\'ll keep you after all," she groans happily, after which she woozily sends you on your way. You wince when you get up from the bed. She was quite rough and you\'re probably going to be sensitive down there for a while.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'cuni_give', 10, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQW6(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).lesbiQW = 7;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/mistress.jpg');
  scene.text('"Undress, quickly!" Mistress snaps as soon as you enter. She\'s obviously in a foul mood today.');
  scene.text('"Yes, Mistress…" you obediently reply and begin to undress as quickly as you can. Her heels clack on the wooden floor as she agitatedly paces around. "I\'m not in the mood today, so let\'s get this over with quickly."');
  scene.actions([
    { label: 'Undress', handler: (st: GameState) => {
    (st as any).temp = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp ?? 0))) {
      scene.img('images/characters/city/natalya/sex/sub7.jpg');
      scene.text('You quickly finish undressing and stand in the submissive pose she taught you. Too impatient for proper protocol, Mistress merely grabs you by the wrist and drags you over to a small table in the hallway.');
      scene.text('She clears the table and places a ball gag firmly in your mouth before ordering you to lie down on the table. When you do, she quickly ties your hands and ankles to the legs. It\'s not until now that you realize the table has several rings on each leg, which Mistress uses to firmly tie you down.');
      scene.text('Once she\'s happy, she places the books and lamp on your back. "If anything falls, you will be held responsible and will be punished. And trust me, today is a day where you don\'t want that."');
      scene.text('She disappears into another room, where you hear her arguing with someone over the phone as you do your best to stay perfectly still.');
      qspCall(st, 'arousal', 'foreplay', 20, 'sub', 'lesbian', 'bound');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Try to not move', handler: (st: GameState) => {
    (st as any).temp = (Math.floor(Math.random() * 3) + 0);
    if (((st as any).temp ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/brokenlamp.jpg');
      scene.text('You test your bonds and find that they\'re very secure, so decide to just hold still, hoping she\'ll quickly get tired of you and let you go.');
      scene.text('After what feels like an eternity, the lamp on your back slowly begins to slide. You desperately try to prevent it from falling, but only make it worse. The lamp falls to the floor and loudly shatters.');
      scene.text('You hear a shriek from the next room, and the annoyed clacking quickly approaches. Mistress is furious when she sees the lamp, and slaps your exposed ass cheeks as hard as she can, making you moan into your gag.');
      scene.text('"You fucking bitch! You broke it!" she screams. "Admit it! Admit that you broke it!"');
      qspCall(st, 'arousal', 'foreplay', 100, 'sub', 'lesbian', 'bound');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Try to apologize', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (0);
    (st as any).agape = 3;
    qspCall(st, 'sweat', 'add', 20);
    qspCall(st, 'mood', 'lower', 'min');
    qspCall(st, 'stat', '');
    if (((st as any).analPlugIn ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/subrefuse7plug.jpg');
      scene.text('You immediately try to apologize, but with the gag in your mouth, all you can do is moan. Nevertheless, you try several more times, trying to articulate the words as well as you can through the gag. With a sharp pain and with a quick jerk, Mistress pulls your butt plug out of your ass.');
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).analPlugIn = 0;
    (st as any).analPlugOut = 1;
    (st as any).vgape = 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub8.jpg');
    scene.text('You begin to squirm in an attempt to ease the pain. Of course you\'re still tightly bound, and all you manage to do is wiggle your ass slightly.');
    scene.text('"Oh, you think this is funny!? You think this is fucking funny!?" Mistress screams in a fit of rage, misinterpreting your wiggling as some form of challenge.');
    scene.text('Her hand takes the butt plug\'s place and, without any foreplay or lubrication, she begins to roughly work her hand inside you. "I <i>will</i> teach you how to behave like a proper slave! The hard way if you keep up this type of behaviour!"');
    scene.text('Your sphincter tightly clenches around her wrist when she pushes her entire hand in and thrusts it inside you wildly with no regard for your comfort. She decides this isn\'t enough, and pushes several of the fingers of her other hand against your pussy. Soon after, her hand is inside you completely, and she roughly fists both of your holes at once.');
    scene.text('She eventually pulls both of her hands out of you and falls back on the nearby sofa, exhausted. Your holes are a mess. Your face is a puffy mess of tears and drool.');
    scene.text('She seems to have calmed down and unties your bonds, takes out your ball gag and waits for you to put on a few clothes on before kicking you out the door.');
    qspCall(st, 'arousal', 'anal_finger', 30, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(st, 'arousal', 'anal_fist', 30, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(st, 'arousal', 'vaginal_finger', 30, 'sub', 'lesbian', 'bound', 'rough');
    qspCall(st, 'arousal', 'vaginal_fist', (-30), 'sub', 'lesbian', 'bound', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.img('images/characters/city/natalya/sex/sub8.jpg');
      scene.text('You feel Mistress\' slender hand pressing against your anus and, without any foreplay or lubrication, she begins to roughly work her hand inside you. "I <i>will</i> teach you how to behave like a proper slave! The hard way if you keep up this type of behaviour!"');
      scene.text('Your sphincter tightly clenches around her wrist when she pushes her entire hand in and thrusts it inside you wildly with no regard for your comfort. She decides this isn\'t enough, and pushes several of the fingers of her other hand against your pussy. Soon after, her hand is inside you completely, and she roughly fists both of your holes at once.');
      scene.text('She eventually pulls both of her hands out of you and falls back on the nearby sofa, exhausted. Your holes are a mess. Your face is a puffy mess of tears and drool.');
      scene.text('She seems to have calmed down and unties your bonds, takes out your ball gag and waits for you to put on a few clothes on before kicking you out the door.');
      qspCall(st, 'arousal', 'anal_finger', 30, 'sub', 'lesbian', 'bound', 'rough');
      qspCall(st, 'arousal', 'anal_fist', 30, 'sub', 'lesbian', 'bound', 'rough');
      qspCall(st, 'arousal', 'vaginal_finger', 30, 'sub', 'lesbian', 'bound', 'rough');
      qspCall(st, 'arousal', 'vaginal_fist', (-30), 'sub', 'lesbian', 'bound', 'rough');
      qspCall(st, 'arousal', 'end');
      scene.actions([
        { label: 'Leave her apartment', goto: ['city_residential', ''] },
      ]);
    }
  } },
      ]);
    } else {
      scene.img('images/characters/city/natalya/sex/sub7.jpg');
      scene.text('You quickly test your bonds and find they\'re very secure. There\'s no way you\'re getting off this table until she lets you go. You decide to just hold still, hoping she\'ll quickly get tired of you and let you go.');
      scene.text('Mistress stays in the other room, spending a long time on the phone. With nothing to do besides laying perfectly still, you begin to reflect on your current situation, and Mistress in general. After what feels like an eternity, Mistress finally comes to see you. She\'s no longer as tense as she was before, but still seems a bit disgruntled. She\'s wearing her huge strap-on again.');
      scene.actions([
        { label: 'Service her', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', 10);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub9.jpg');
    scene.text('Mistress slaps your ass before standing in front of you. She takes the items off your back and removes the ball gag. "Keep that open, slave."');
    scene.text('You obediently keep your mouth open for her, and she unceremoniously puts the head against your lips and begins to cram it in. She gives you a thorough throat-fucking, always giving you just barely enough time to breathe before continuing.');
    scene.text('Feeling helpless, your former positive thoughts slowly begin to blur again while you keep sucking Mistress\' enormous rubber cock. After a few minutes, she grows bored and removes your binds.');
    scene.text('She looks at you wearily but knows you did everything she asked of you, without objections. "That was… not terrible, slave. Now leave me alone."');
    scene.text('Mistress leaves you in the hallway and walks away, assuming you will find your own way out as usual.');
    qspCall(st, 'arousal', 'bj', 15, 'lesbian', 'sub', 'deepthroat', 'rough');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
      ]);
    } else {
      if (((st as any).temp ?? 0) === 1) {
        scene.img('images/characters/city/natalya/sex/sub10.jpg');
        scene.text('You try to take your clothes off as quickly as possible, but Mistress is clearly on edge and you fear that very little you do today will please her. After barely any time, she snaps. "Get up! Up! This is taking too long!"');
        scene.text('She places a collar on your neck and cuffs on your arms and legs, securing your arms and legs together using the cuffs and a belt. She then holds out a brush. "Clean. With your mouth."');
        scene.text('She disappears into the next room, where you hear her loudly arguing with someone over the phone.');
        scene.text('You do your best to clean her apartment using the brush, carefully shuffling around on your knees. It\'s obviously inefficient and you don\'t get much done.');
        scene.text('After two hours, Mistress releases you. She deftly removes the cuffs and collar from you, says you can go and leaves without another word.');
        scene.actions([
          { label: 'Leave her apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'mood', '');
  }, goto: ['city_residential', ''] },
        ]);
      } else {
        if (((st as any).temp ?? 0) === 2) {
          scene.img('images/characters/city/natalya/sex/sub11.jpg');
          scene.text('Despite her foul mood, Mistress waits patiently while you undress. When you\'re nude and in the correct posture, she nods and throws an apron in your general direction. "Wear this and do some cleaning."');
          scene.text('You blink for a second while you put on the apron, and get down on your hands and knees.');
          scene.text('After two hours of cleaning, Mistress says you can get up and take off the apron. She takes the apron out of your hands, says you can go and leaves without another word.');
          scene.actions([
            { label: 'Leave her apartment', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 120;
    qspCall(st, 'mood', '');
  }, goto: ['city_residential', ''] },
          ]);
        }
      }
    }
    (st as any).temp = undefined;
  } },
  ]);
  scene.build();
}

function enterQW7(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub200.jpg');
  scene.text('When you enter the apartment, Mistress comes to the door to see who it is. "You… You\'re back?" she quips with a surprised look on her face. You look at her questioningly, feeling a bit nervous.');
  scene.text(`Her face then breaks out into a smile. "${((s as any).pcs_nickname ?? '')}! I'm so glad you came. I owe you an apology, come here."`);
  scene.text('You\'re confused as to whether you should take your clothes off. Mistress kindly grabs you by the arm and ushers you to the living room, sitting you down on the couch. "Wait here, I\'ll be right back."');
  scene.text('She\'s carrying a small paper bag when she comes back. It looks like it\'s from some fancy boutique. "Here, this is for you," she smiles weakly. "I\'m really sorry about last time, I shouldn\'t have taken my poor mood out on you."');
  scene.text('You nod shyly at her, thanking her for the gift before opening it. You twist and turn the item in your hands, it looks like some sort of jewelry. Then you see it: it\'s a g-string! A very sexy one, with some sort of jewel attached to it.');
  scene.text('Mistress smiles at you. "Go ahead, put it on! When you\'re ready we\'ll go out for a drink, my treat. It\'ll be a good opportunity for me to teach you about how a submissive girl should behave in public in the presence of her domme."');
  scene.actions([
    { label: 'Put it on and go to the terrace', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (30);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub201.jpg');
    scene.text('You quickly put on the gift Mistress bought you in front of her. It stays in place surprisingly well.');
    scene.text('Once you\'re dressed again, Mistress grabs her coat and the two of you go to a local terrace. To your surprise, the jewel in your g-string starts stimulating your sensitive spots, and you have trouble focusing on what Mistress is telling you.');
    scene.text('When you pay attention, you hear her say "When we\'re in public, we need to be a bit more discrete. No one should be able to tell from your behaviour that you are a submissive, and that I am your domme. I might reveal this situation as I see fit, respecting your privacy of course. I won\'t get you into trouble… I would only disclose our little secret to people I trust."');
    scene.text('She winks at you reassuringly and you give her an idle nod, having trouble focusing. "Oh, and also: in public, you may call me Natalya if we are among company. If no one is listening, it\'s still Mistress."');
    scene.text('"Yes Mistress," you obediently reply, getting seriously worked up now. You reach the terrace and have a seat at one of the tables. It\'s one of the more up-scale places in town.');
    scene.actions([
      { label: 'Have a drink', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub202.jpg');
    scene.text('Now that you\'re seated, your underwear is thankfully not stimulating your clit any more. You and Mistress both order a glass of wine, and she explains the merits of reward and punishment regarding submissive girls in training.');
    scene.text('"You see, what I did was wrong. It\'s okay to punish a girl if she\'s been disobedient or difficult to handle. It\'s <b>not</b> okay to take your poor mood out on her. Rewards and punishments should be well balanced, and always within reason. Once again, I\'m really sorry." She puts her hand on yours and squeezes it softly.');
    scene.text('"It\'s okay…" you reassure her. "I forgive you, you can stop apologizing."');
    scene.text('"I\'m glad. It feels nice, just going out every once in a while… right?" she grins mysteriously.');
    scene.text('Just as you are about to reply, the jewel begins to slowly vibrate. You immediately close your mouth and let out a soft moan while blushing furiously. There\'s people everywhere! Mistress holds up her hand, revealing a small remote control while grinning from ear to ear.');
    qspCall(st, 'arousal', 'vaginal_vibe', 20, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'It gets worse', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub203.jpg');
    scene.text('"Mistress, please don\'t make me cum here!" you beg, your face a deep shade of red by now.');
    scene.text('Luckily, the vibrating stops and Mistress suddenly stands up: "Hey Masha! Over here! Come sit with us!"');
    scene.text('An attractive young woman approaches your table and kisses Mistress on the cheek. She then shakes your hand. "Hi, I\'m Masha! Nice to meet you!" she says in a loud, bubbly voice.');
    scene.text(`"Erm, hi. I'm ${((st as any).pcs_nickname ?? '')}…" you reply softly. Your mind is still a bit hazy from the stimulation.`);
    scene.text('"Are you okay?" Masha asks with some concern. "You look a bit flustered…"');
    scene.text('Mistress grins. "Don\'t worry Masha, she\'s fine. Maybe just a little bit tipsy. Come, sit! I\'ll get us some drinks."');
    scene.text('You and Masha get acquainted while Mistress heads to the bar to get another round. Half-way in, the vibrator starts up again. It\'s on full blast now, and you know you won\'t last long.');
    scene.text('Doing the best you can to answer Masha\'s questions, you try your best to hold back your orgasm. You bite your lip while your whole body trembles, and let out a cute moan when you orgasm intensely. Masha looks at you questioningly. "Are you sure you\'re okay? You seem a bit off…"');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_vibe', 10, 'sub', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'I\'m fine', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (75);
    (st as any).lesbiQW = 8;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub204.jpg');
    scene.text('You hear a light chuckle behind you, and the vibrating stops again. While you reassure Masha that you\'re okay, Mistress comes back with a devious smile on her face and three beers in her hands.');
    scene.text(`"${((st as any).pcs_nickname ?? '')} is becoming a very good friend of mine very quickly, Masha! I'm sure you'll see more of her…" Mistress says ambiguously. You blush when you realize what she means… she's going to show you off to her friend!`);
    scene.text('"I like her, she seems nice!" Masha replies cheerfully.');
    scene.text('You have a chat while you drink your beers. Or rather, Masha and Natalya talk while you just sit there quietly, trying not to embarrass yourself any further. Every once in a while the vibrator fires up again, teasing you for a minute before being turned off again.');
    scene.text('The constant teasing paired with your wetness makes the vibrating jewelry extremely effective, and when it\'s time to leave you\'re intensely horny again. Luckily Mistress doesn\'t put you over the edge with the vibrator a second time as you walk home. However, the shape of the jewelry in itself keeps you ever close and your steps are noticeably shorter now, causing you to be on the receiving end of some strange looks.');
    scene.text(`When you return home, Mistress gives you a kiss on the cheek and gives you the remote. "Here, you earned it. That was a fun session, ${((st as any).pcs_nickname ?? '')}! Don't get too used to it though. Next session, we'll be focusing on your training again."`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Thank her and leave', goto: ['city_residential', ''] },
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

function enterQW8(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/mistress.jpg');
  scene.text('Mistress smiles at you as you enter her apartment. She\'s clearly in a good mood today. "Ah, slave! Good! What do you think about doing something for the good people out there?"');
  scene.text('Your heart skips a beat. It sounds simple, but if you\'ve learned one thing about Mistress, it\'s that things are never simple.');
  scene.text('Mistress beckons you with her finger. "Today, you will putting on a little show by the window! It\'ll be so much fun!"');
  qspCall(s, 'willpower', 'exhib', 'resist');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Hesitate and stay where you are', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Hesitate and stay where you are', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).pcs_horny = 0;
    (st as any).spank = ((st as any).spank ?? 0) + (1);
    (st as any).spanked = 3;
    (st as any).spankedtime = ((st as any).totminut ?? 0);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse9.jpg');
    scene.text('"Stupid bitch…" Mistress curses when she sees your hesitation. She grabs you by the hair and drags you to a guest room.');
    scene.text('She roughly strips you before shoving you down onto the bed before picking up the nearest belt and flogging you with it in a rage.');
    scene.actions([
      { label: 'Squeal and cry', handler: (st: GameState) => {
    (st as any).lesbiQW = 9;
    qspCall(st, 'sweat', 'add', 10);
    if (((st as any).pcs_ass ?? 0) < 30  &&  ((st as any).pcs_ass ?? 0) >= 20) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
      (st as any).agape = 1;
    }
    if (((st as any).pcs_ass ?? 0) < 20  &&  ((st as any).pcs_ass ?? 0) >= 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 2);
      (st as any).agape = 2;
    }
    if (((st as any).pcs_ass ?? 0) < 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 3);
      (st as any).agape = 3;
    }
    if (((st as any).pcs_vag ?? 0) < 30  &&  ((st as any).pcs_vag ?? 0) >= 20) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
      (st as any).vgape = 1;
    }
    if (((st as any).pcs_vag ?? 0) < 20  &&  ((st as any).pcs_vag ?? 0) >= 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 2);
      (st as any).vgape = 2;
    }
    if (((st as any).pcs_vag ?? 0) < 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 3);
      (st as any).vgape = 3;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse10.jpg');
    scene.text('You yelp in pain and roll across the bed, trying to dodge Mistress\' beating. Of course, that only makes her more angry.');
    scene.text('After a few minutes, her strikes suddenly stop. You\'re too afraid to look up and just bury your face in the sheets, crying.');
    scene.text('It\'s a long time before she eventually returns, and you feel her climbing on top of you. You immediately feel her trusty strap-on poking against your ass cheeks. In a wave of panic you try to wiggle out from underneath her, which once again only makes her more angry. When she firmly grasps your neck with her hand, you swallow nervously and resign yourself to your fate.');
    scene.text('When Mistress feels your resistance slowly fading, she refocuses on her initial plan and guides her strap-on dildo to your orifices, roughly fucking both of them in turns.');
    scene.text('Too afraid to say anything more, you do your best to just take it in stride. Even though you try to stay quiet and avoid doing things that could upset Mistress, you whimper whenever she switches holes and penetrates you a lot harder than you had anticipated.');
    qspCall(st, 'arousal', 'anal_strap', 20, 'sub', 'lesbian', 'rough');
    qspCall(st, 'arousal', 'vaginal_strap', (-20), 'sub', 'lesbian', 'rough');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'lower', 'min');
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/subrefuse11.jpg');
    scene.text('You can tell Mistress is getting tired and can\'t go on much longer. Just when you were hoping to catch a break, she puts a plastic bag over your head.');
    scene.text('Your initial response is to panic, and you reflexively gasp for breath before she puncture a hole in the bag so you can breathe.');
    scene.text('Mistress immediately turns her ass towards you, and pushes your head against her pussy. You immediately dig in when you realize what she wants, and stick your tongue through the hole to lick her cunt. It\'s difficult to breathe at times with how hard she\'s grinding her hips against your face and the plastic bag blocking your nose.');
    scene.text('As you furiously lick her slit, tease her clit and do everything else you know to try and please your Mistress, you nearly pass out a few times due to a lack of oxygen. However, she always gives you just enough room to breathe.');
    scene.text('She reaches her orgasm, and tightly clamps her thighs around your head, pushing you further in while barking that you keep licking. Once it subsides, she pushes you away from her. She rips the bag off and gathers your clothes before grabbing you by the hair. She roughly tosses you out of her apartment and dumps your clothes on the ground before slamming the door shut.');
    scene.text('You quickly hide and put your clothes back on. Hopefully she\'ll give you a chance to make it up to her next time.');
    qspCall(st, 'arousal', 'cuni_give', 20, 'lesbian', 'sub');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
      { label: 'Beg for forgiveness', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).lesbiQW = 10;
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub16.jpg');
    scene.text('After the first few blows, you\'re already in tears. Trying to placate her, you drop to your hands and knees while she\'s beating you with the belt. You do the only thing you can think of, and meekly lick her boots while begging. "Please, Mistress! Please allow me to make it up to you! I\'ll do anything! Please, I\'m begging you!"');
    scene.text('Mistress flogs you three more times, but you can tell her heart isn\'t in it anymore. She stops while you continue to lick her boots, fighting your tears.');
    scene.text('The silence lasts for merely a minute, only interrupted by the occasional sound of you sniffling while you continue to lick her boots as a display of submission.');
    scene.text('She finally breaks the silence. "Alright, you whore. I hope you learned your lesson. Next time, no amount of begging and pleading will help. You deserve punishment, and you know that."');
    scene.text('You softly mutter another apology and keep licking her boots while nodding your head. Mistress then grabs you by the hair and pulls your head up, forcing you to look her straight in the eye. "I want to hear you say it. Do you understand, slave?"');
    scene.text('"Yes Mistress, I understand. I learned my lesson."');
    scene.text('She nods, satisfied that she got through to you. "Get on your back, whore!"');
    scene.actions([
      { label: 'Do as she says', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'pee', 20, 'sub', 'humiliation', 'lesbian');
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'sweat', 'add', 30);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub17.jpg');
    scene.text('You nearly stumble in your hurry to get on your back. You really don\'t want to test her patience.');
    scene.text('Once you\'re on your back, Mistress removes her undergarments and starts urinating on you. You frown in disgust and feel thoroughly humiliated. You already know she won\'t let you take a shower before you leave.');
    scene.text('Mistress looks at you strictly. "Do you understand your place now, slave?"');
    scene.text('"Ye-yes, Mistress. I\'m just a slave. Your slave. I\'m yours to use as you see fit…" you mutter.');
    scene.text('This brings a smile to her face. "Very good. From now on, you will only call me Mistress. Nothing else. Understood?"');
    scene.text('"Yes, Mistress!" you blurt out instantly and she nods in satisfaction. "Good. Now get out."');
    scene.text('You quickly get up and leave the room, putting your clothes on in the hallway with no regard for what she just done to you.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.actions([
    { label: 'Walk towards Mistress', handler: (st: GameState) => {
    (st as any).lesbiQW = 10;
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 3) + 0);
    if ((!((st as any).temp ?? 0))) {
      scene.img('images/characters/city/natalya/sex/sub12.jpg');
      scene.text('As soon as you approach Mistress, she turns around and walks into the living room, expecting you to follow her. When you enter the living room, you see that she\'s already prepared an ensemble of ropes, as well as a white lingerie set with matching stockings. You obediently put them on, after which Mistress expertly binds you with the rope. Your legs are free, but your arms are bound tightly behind your back.');
      scene.text('Once Mistress is happy, she nods to a pair of high heels and sends you to the window with a slap of your ass.');
      scene.text('Mistress lives on the third floor, but you nervously look out the window, seeing a fair bit of traffic in the street. Everyone is just minding their own business… for now.');
      scene.text('Meanwhile, Mistress makes herself comfortable on the couch with a glass of wine. She leafs through a magazine, occasionally glancing at you.');
      scene.text('For the next few minutes, not much happens. A few people happen to look up and spot you, with several snapping pictures on their phones. At one point two teenagers, finding your predicament hilarious, begin pointing up and calling you out, drawing more attention to you. You hear a soft snicker behind you from Mistress when she notices you shifting uncomfortably. Luckily, the boys grow bored after a few minutes and leave.');
      scene.text('Mistress then puts her magazine aside and unties you before she walks back to the couch and turns her ass towards you, leaning on the couch with one hand. She doesn\'t say a word, but gives you an inviting look as she lifts up her skirt.');
      qspCall(st, 'arousal', 'foreplay', 40, 'sub', 'exhibitionism', 'bound', 'humiliation');
      qspCall(st, 'stat', '');
    } else {
      if (((st as any).temp ?? 0) === 1) {
        scene.img('images/characters/city/natalya/sex/sub14.jpg');
        scene.text('As soon as you approach Mistress, she turns around and walks into the living room, expecting you to follow her. When you enter the living room, you see a collar and leash sitting on the couch. You quickly take off your clothes when she orders you to, and silently let her lock the collar around your neck. She orders you to get down on all fours and follow her to the window.');
        scene.text('You approach the window and Mistress attaches the leash to the window frame. There\'s no doubt as to what you are for anyone who happens to look up.');
        scene.text('Meanwhile, Mistress makes herself comfortable on the couch with a glass of wine. She leafs through a magazine, occasionally glancing at you to make sure your posture is good.');
        scene.text('For the next few minutes, not much happens. A few people happen to look up and spot you, with several snapping pictures on their phones. At one point two teenagers, finding your predicament hilarious, begin pointing up and calling you out, drawing more attention to you. You hear a soft snicker behind you from Mistress when she notices you shifting uncomfortably. Luckily, the boys grow bored after a few minutes and leave.');
        scene.text('Mistress then puts her magazine aside and turns her ass towards you, leaning on the couch with one hand. She doesn\'t say a word, but gives you an inviting look as she lifts up her skirt.');
        qspCall(st, 'arousal', 'foreplay', 40, 'sub', 'exhibitionism', 'bound', 'humiliation');
        qspCall(st, 'stat', '');
      } else {
        if (((st as any).temp ?? 0) === 2) {
          scene.img('images/characters/city/natalya/sex/sub15.jpg');
          scene.text('As soon as you approach Mistress, she turns around and walks into the living room, expecting you to follow her. When you enter the living room, you can\'t help but notice a large dildo with a suction cup lying on the couch.');
          scene.text('You quickly remove your clothes when she orders you to, and follow her to the window. She has the dildo in her hand.');
          scene.text('"On your knees!" she commands. You drop to your knees and she sizes you up for a second before sticking the suction cup of the dildo against the window, in plain sight of anyone who happens to be walking through the street.');
          scene.text('"Show the people of St. Petersburg what you\'ve learned so far," Mistress says a bit ambiguously with a devious twinkle in her eye.');
          scene.text('You slowly lean forward and close your lips around the dildo. Once Mistress sees your lips around the dildo, she makes herself comfortable on the couch with a glass of wine. She leafs through a magazine, occasionally glancing at you to make sure you\'re putting in enough effort.');
          scene.text('"Deeper, slave!" she barks when she notices you\'re slouching. As you do your best to take more of the dildo inside your mouth, you realize that several people downstairs have noticed you. More and more people are looking up to see what the fuss is and a crowd begins to form in front of you.');
          scene.text('You can\'t handle their gazes any longer, and close your eyes while you keep obediently sucking the dildo obediently. You hear Mistress chuckling behind you.');
          scene.text('A few seconds later, she summons you. "That\'s good, slave… very good. Now come here."');
          scene.text('You feel a tinge of pride when you hear her compliment. You pull away from the dildo and turn around to look at Mistress. She\'s standing with her ass turned towards you, leaning on the couch with one hand. She doesn\'t say a word, but gives you an inviting look as she lifts up her skirt.');
          qspCall(st, 'arousal', 'bj', 40, 'sub', 'exhibitionism', 'humiliation');
          qspCall(st, 'stat', '');
        }
      }
    }
    scene.actions([
      { label: 'Lick her pussy', handler: (st: GameState) => {
    qspCall(st, 'sweat', 'add', 10);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub13.jpg');
    scene.text('You dutifully crawl over to her on your hands and knees and eagerly bury your face in her groin. Her cunt is sopping wet, and she grabs the back of your head and grinds her cunt harder against your face.');
    scene.text('You obediently lap up her juices, play with her clit and lick her folds, doing your best to show her that you can please her. After a few minutes, Mistress orgasms loudly, and a few drops of squirt land in your mouth.');
    scene.text('When Mistress is done with you, she collapses on the couch and dismisses you with a satisfied smile on her face. You put your clothes back on in the hallway before leaving.');
    qspCall(st, 'arousal', 'cuni_give', 20, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterQW9(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/natalya/sex/sub37.jpg');
  scene.text('When you enter her apartment, Mistress is already waiting for you in the doorway agitatedly. She immediately pushes you to the wall, and gives you a few hard slaps in the face.');
  scene.text('You were hoping she had forgotten about the last session, but clearly that is not the case.');
  scene.text('"On your knees, bitch!" she screams in your face. "I\'m so fucking tired of teaching you, you senseless whore! Get on your knees right now!"');
  scene.actions([
    { label: 'Do as she says', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    (st as any).pcs_horny = 0;
    qspCall(st, 'mood', 'lower', 'min');
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub38.jpg');
    scene.text('With the events of the last session still firmly in your memory, you immediately get on all fours. You yelp as Mistress stands on your hand and places her weight on your fingers.');
    scene.text('Not giving you a chance to say anything, she immediately snarls through gritted teeth. "I <i>will</i> teach you, bitch! You <i>will</i> learn your place, and you will learn it <i>now</i>!"');
    scene.actions([
      { label: 'Scream in pain', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub39.jpg');
    scene.text('Mistress shows no sign of compassion whatsoever, and continues to bark obscenities at you while she firmly binds you. She puts cuffs on your wrists and ankles, and locks them with heavy padlocks.');
    scene.text('"I\'m tired of your fucking yelling, whore. Quiet time for you!" she snarks before forcing a ball gag into your mouth. She also secures that with a padlock.');
    scene.text('In your current predicament, you can do little more than shuffle around on your knees. You\'re completely powerless, and have no choice but to bend to her every whim.');
    scene.actions([
      { label: 'Crawl', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    (st as any).agape = 3;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub40.jpg');
    scene.text('Mistress has you crawl around the room for a minute, and when she forces you to hold still you feel her sharp heel pressing against your anus. She\'s not gentle, and unceremoniously penetrates your ass with it.');
    scene.text('It stings badly, and you try to squeal. However, the gag prevents it and all you can do is let out a muffled groan.');
    scene.text('You try to beg for her forgiveness as Mistress continues to fuck your ass with her heel. She ignores your incoherent pleas.');
    scene.text('After a few minutes, she slows down. "Still feeling disobedient now, slut!? I\'ll stop if you shine my boots right now, and promise to stop being such a useless disobedient whore. I\'ve just about had it with you!"');
    scene.actions([
      { label: 'Lick her boots', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 20;
    qspCall(st, 'pain', '3', 'pinch', 'breasts');
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub41.jpg');
    scene.text('Mistress smirks as she unlocks the padlock on the gag and takes it out of your mouth. Not wasting any time, you immediately put your lips around her heel to lick it clean. It tastes awful, but that\'s not important right now.');
    scene.text('Pleased with your change of heart, Mistress tells you to sit up while she attaches clothes pins to your breasts. Everywhere on your breasts. Once she\'s done, you are to continue licking her boots.');
    scene.actions([
      { label: 'In the bathroom', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).body_write = 2;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub42.jpg');
    scene.text('Once she\'s bored of you licking her boots, Mistress drags you to the bathroom. She pulls out several sharpies and writes all sorts of lewd, degrading comments onto your body before she has you lick her toilet bowl clean while she recites the things she wrote on you.');
    scene.text('"You are by far the most useless slave I have ever trained!" she continues. "From now on, you will only call me Mistress. Nothing else. As far as you\'re concerned, I am your world. What I want, you do without question. Understood?"');
    scene.text('You meekly nod in submission.');
    scene.actions([
      { label: 'She\'s not done yet', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).lesbiQW = 10;
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub43.jpg');
    scene.text('Still besides herself with rage, Mistress feels like she needs to drive her point home by whipping your ass for good measure. You meekly let her put the ball gag back into your mouth, aware of the fact that you\'re screaming too much when she beats you.');
    scene.text('After a half hour, Mistress undoes your binds and pushes you out of her apartment naked. She tosses your clothes out a window soon after and you silently get dressed in the streets, thinking about what just happened.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
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

function enterQW10(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  if (((s as any).MistressAdoration ?? 0) >= 75) {
    (s as any).lesbiQW = 11;
    (s as any).mistressqwest = 0;
  }
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  scene.img('images/characters/city/natalya/mistress.jpg');
  scene.text('Mistress is already waiting for you by the door, and tells you to undress immediately. You flash her an obedient smile.');
  if ((!((s as any).temp ?? 0))) {
    scene.actions([
      { label: 'Take off your clothes', goto: ['lesbidomhouse', 'QW10a'] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.actions([
        { label: 'Take off your clothes', goto: ['lesbidomhouse', 'QW10b'] },
      ]);
    } else {
      scene.actions([
        { label: 'Take off your clothes', goto: ['lesbidomhouse', 'QW10c'] },
      ]);
    }
  }
  scene.build();
}

function enterQW10a(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp ?? 0))) {
    (s as any).MistressAdoration = ((s as any).MistressAdoration ?? 0) + (1);
    scene.img('images/characters/city/natalya/sex/sub18.jpg');
    scene.text('You quickly take off your clothes, and Mistress slaps a collar around your neck with obvious delight.');
    scene.text('"On all fours, slave!" she orders.');
    scene.text('She grabs a handful of your hair and leads you to the couch, where she puts a tray on your back. For the next 30 minutes she relaxes on the couch, leisurely sipping her champagne while she flips through a magazine. Then, to your surprise, she tells you to get dressed in the hallway and leave.');
    qspCall(s, 'arousal', 'foreplay', 30, 'sub');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.img('images/characters/city/natalya/sex/sub19.jpg');
      scene.text('Once you\'re naked, Mistress eyes your body up and down again like she always does. You remember your positioning lectures and present yourself appropriately. After a while, she seems to have decided. "On your knees, slave. Today will be easy. All you have to do today is look pretty."');
      scene.text('You immediately drop down on all fours and follow her into the living room. Mistress stops in the middle of the room and motions for you to get up as she breaks out several coils of rope. She first fits you into a gag harness, before binding you in the center of the room.');
      scene.text('Mistress just goes about her daily business, occasionally glancing at the human piece of art that you are today. At one point she even invites a delivery man in, and you feel his burning desire as his eyes greedily scan your body.');
      scene.text('She then shows him the door, and you swear she looks pleased with herself when she walks away. You can\'t help but slowly wiggle in your tight binds, trying to get off by using the friction of the rope for stimulation. Mistress made sure that doesn\'t work, but enjoys watching you try when she walks by at one point. You\'re left feeling very aroused by the time she comes to see you again.');
      qspCall(s, 'arousal', 'foreplay', 75, 'sub', 'bound', 'exhibitionism');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Lick Mistress\' pussy when she unties you', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('You recognize that wolfish look in her eyes as she unties the long ends of the rope.');
    scene.text('Automatically dropping to your knees, you eagerly bury your face in your Mistress\' snatch and eagerly lick up her juices. Your bonds make you feel like she is challenging you, and you do your absolute best to please her with only your mouth. When she cums with your tongue inside her pussy, you feel very proud and incredibly horny.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
        { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
      ]);
    } else {
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.img('images/characters/city/natalya/sex/sub21.jpg');
      } else {
        scene.img('images/characters/city/natalya/sex/sub20.jpg');
      }
      scene.text('Once you\'re naked, Mistress eyes your body up and down again like she always does. You remember your positioning lectures, and present yourself appropriately. After a while, she seems to have decided. "You could make a good pet some day, slave. Let\'s see how much you remember of your lessons."');
      scene.text('You remember her lectures vividly, and quickly recite them in your head while Mistress looks for your collar and leash. When returns, you\'re already on all fours and presenting your neck so she can put the collar on you.');
      scene.text('For the next hour, Mistress takes you for a walk around the house, lecturing you some more on how a proper pet behaves and complimenting you on your progress so far.');
      if (((s as any).analPlugIn ?? 0) === 1) {
        scene.text('You wiggle your ass with your butt plug for her whenever she\'s looking at it, and actually make her laugh. "You really like putting things up your ass and acting like a pet, don\'t you slave?" she smiles. "Perhaps I should get you one of those tail plugs, so you really look the part."');
      }
      scene.text('When Mistress removes your collar at the end of the hour, you\'re actually a bit sad that it\'s over. You were having so much fun!');
      scene.text('"You\'ve been very good today so I will give you a choice, you can get dress and leave or you can stay a bit longer and thank your mistress. This is not a test, there is no wrong answer."');
      qspCall(s, 'arousal', 'foreplay', 70, 'sub');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Stay and thank your Mistress', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('Just when you expect Mistress to tell you to get dressed and leave, she tells you to stand and wait before leaving the room. She comes back after a while, completely naked as well. She looks at you playfully, and deftly binds you in a simple rope harness and secures your arms behind your back.');
    scene.text('"You\'ve been such a good slave today," she says encouragingly. "I\'m going to give you a chance to show your Mistress how devoted you are to her."');
    scene.text('With zero hesitation, you drop to your knees and grind your tongue against her cunt, lapping up her sweet juices. Mistress was incredibly horny already when she was lecturing you on pet behaviour, and the eagerness with which you do whatever she says pleases her greatly. In no time at all, she shoves her pussy against your mouth and squirts a little as she has a thunderous orgasm.');
    scene.text('You catch yourself rubbing your thighs together in an attempt to stimulate yourself, but reluctantly stop. You were close, but you don\'t want to ruin the great mood Mistress is in by cumming without her permission.');
    scene.text('Mistress caresses your scalp for a second before snapping back into her regular role as she undoes your binds. "You know the drill, slave. Get dressed in the hallway and find your own way out." When she spots her juices on your chin and breasts, she grins. "Oh… and leave that on."');
    scene.text('You blush a little as you get dressed before leaving.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
        { label: 'Get dressed and leave', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspGoto(st, 'city_residential', '');
  } },
      ]);
    }
  }
  scene.build();
}

function enterQW10b(s: GameState, scene: SceneBuilder): void {
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp ?? 0))) {
    qspGoto(s, 'lesbidomhouse', 'QW10b1');
  } else {
    if (((s as any).temp ?? 0) === 1) {
      qspGoto(s, 'lesbidomhouse', 'QW10b2');
    } else {
      qspGoto(s, 'lesbidomhouse', 'QW10b3');
    }
  }
  scene.build();
}

function enterQW10b1(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/natalya/sex/sub22.jpg');
  scene.text('When you follow Mistress into the room, you see that she has laid out a staggering amount of rope for today. Nevertheless, you trust her and readily offer your wrists when she demands you stick them out.');
  scene.text('Once Mistress is done binding you, she gags you thoroughly and whispers in your ear. "I have to step out for a little while. You will entertain me when I come back."');
  scene.text('She shuffles your chair so it\'s visible from the street below, and leaves the apartment. Several thoughts race through your mind. What will she have in store for you when she gets back?');
  scene.text('You feel yourself getting wet at the thought, and wiggle uncomfortably in your chair in an attempt to get yourself off. Like always, Mistress has taken precautions to stop you from doing so.');
  scene.text('You sigh agitatedly and keep thinking of Mistress, hoping she will come back soon.');
  qspCall(s, 'arousal', 'foreplay', 45, 'sub', 'bound');
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).temp ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).pcs_horny = Math.max(100, ((st as any).pcs_horny ?? 0));
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    if (((st as any).pcs_vag ?? 0) < 30  &&  ((st as any).pcs_vag ?? 0) >= 20) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
    }
    if (((st as any).pcs_vag ?? 0) < 20  &&  ((st as any).pcs_vag ?? 0) >= 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 2);
      (st as any).vgape = 1;
    }
    if (((st as any).pcs_vag ?? 0) < 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 3);
      (st as any).vgape = 2;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub23.jpg');
    scene.text('About thirty minutes later, Mistress comes back. She\'s wearing her huge strap-on again and pats on the dildo with an evil grin on her face. "I hope your cunt can take my little friend here by now, slave. If not, that\'s okay. I\'ll make it fit anyway. I\'m going to make you beg today, slave… you\'ll see…"');
    scene.text('Mistress removes your gag and guides you to the couch, where she begins to brutally fuck your pussy. Already worked up from being in the chair, it doesn\'t take you long to get close to having an orgasm despite her roughness. Mistress knows this, and changes her technique. Your imminent orgasm fades away ever so slightly, but is back mere seconds later. Once again Mistress changes her technique ever so slightly, aiming to deny you an orgasm while keeping you close to the edge.');
    scene.text('After nearly twenty minutes of getting your pussy pounded, your mind feels fried from the constant edging. You\'ve tried surrendering to her will and just letting her fuck you the way she wants, but you can\'t take it any more!');
    scene.text('"Mistress, may I please cum? Please, I\'m begging you! Please let me cum!" you beg, but Mistress is adamant.');
    scene.text('She leans over and whispers in your ear. "Told you I would make you beg, slave. But I\'ll give you credit, you lasted longer than I thought you would. Nice try." She pulls out and exits the room, leaving you quivering. You feel your wetness running down your thighs, and when you shift your hips you actually hear your pussy squelching from how soaked it is.');
    scene.text('Mistress comes back a minute later and undoes your binds, dismissively stating that you can go. She smirks when she notices your discomfort, but walks away before you can say anything.');
    (st as any).orgasm_or = 'no';
    qspCall(st, 'arousal', 'vaginal_strap', 40, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('Mistress comes back, about thirty minutes later. She sits on a chair directly in front of you, smiling happily. You moan slightly when she touches your chin, softly caressing your cheek. "You know what, slave? I\'m in a good mood today. I\'m going to give you a chance to show your Mistress how devoted you are to her."');
    scene.text('When she removes your gag, you quickly slide down to your knees, eagerly putting your lips on her pussy. When you look up into Mistress\' eyes, you see her smirk.');
    scene.text('The eagerness which you do whatever she says pleases Mistress greatly. In no time at all, she shoves her pussy against your mouth and squirts a little as she has a thunderous orgasm.');
    scene.text('You catch yourself rubbing your thighs together in an attempt to stimulate yourself as well, and reluctantly stop. You were close, but you don\'t want to ruin the great mood Mistress is in by cumming without her permission.');
    scene.text('Mistress caresses your scalp for a second before snapping back into her regular role as she undoes your binds. "You know the drill, slave. Get dressed in the hallway and find your own way out." When she spots her juices on your chin and breasts, she grins. "Oh… and leave that on."');
    scene.text('You blush a little as you get dressed before leaving.');
    qspCall(st, 'arousal', 'cuni_give', 20, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterQW10b2(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/natalya/sex/sub25.jpg');
  scene.text('When you follow Mistress into the room, you see that she has laid out a staggering amount of rope for today. Nevertheless, you trust her and readily offer your wrists when she demands you stick them out.');
  scene.text('The rope harness she creates is especially tight around your breasts and, as always, your arms are bound tightly behind your back. Once Mistress is done binding you, she whispers in your ear. "I have to step out for a little while. You will entertain me when I come back."');
  scene.text('She puts down a blanket so you don\'t have to sit on the cold floor, and leaves the apartment. Several thoughts race through your mind. What will she have in store for you when she gets back?');
  scene.text('You feel yourself getting wet at the thought, and rub your thighs against one another in an attempt to get yourself off before changing your mind. You sigh agitatedly and keep thinking of Mistress, hoping she will come back soon.');
  qspCall(s, 'arousal', 'foreplay', 45, 'sub', 'bound');
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp ?? 0))) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub26.jpg');
    scene.text('About thirty minutes later, Mistress comes back. She has a weird gag device in her hand which has dildos on both sides.');
    scene.text('You meekly open your mouth when she brings one end towards your mouth, and close your lips around the dildo while she securely fastens it behind your head. She then pushes you down onto your back and positions her wet slit over the dildo at the end. She moans when she slowly lowers herself on the dildo and begins to ride it enthusiastically.');
    scene.text('Mistress keeps riding the dildo vigorously, and has two orgasms. When she\'s had enough, her pussy and the dildo both glisten with her juices when she moves away from you. When she unfastens the gag and pulls your end from between your lips, you\'re hoping Mistress will allow you to at least lick the other end clean.');
    scene.text('You give her your best begging puppy eyes look, but are too afraid to ask. Mistress ignores your stare and sets the dildo aside before undoing the ropes that bind you.');
    qspCall(st, 'arousal', 'vaginal_dildo_give', 40, 'sub', 'bound', 'lesbian');
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 2) + 0);
    if (((st as any).temp ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('Your eyes keep following the dildo that\'s still glistening with Mistress\' juices. She notices your intent stare and pulls her hands away from the ropes. She snaps her fingers, demanding your attention as she stares you down. It\'s a cold, intimidating stare. "Is there a problem, slave?"');
    scene.text('"N-no Mistress. I umm… I wa- I mean, I was hoping you would umm… let me lick it clean, is all. I-if that\'s okay with you…" you stumble.');
    scene.text('She smirks at you. "Oh, really? And why is that, slave?"');
    scene.text('"Because you taste delicious, Mistress! Please! Please let me taste you! I\'m begging you, I will do anything!" you blurt out.');
    scene.text('She snorts. "You already do everything I say to the letter. Because you know that\'s what you\'re meant to do. Isn\'t that right, slave?" She takes the gag back in her hand and picks up a towel in the other. With a grin, she theatrically wipes the towel over the dildo, wiping her juices off it.');
    scene.text('You gasp and bite your lip. "Yes Mistress, I\'m sorry I mentioned it," you nod obediently and cast your eyes down, fighting back tears.');
    scene.text('Not two seconds later, Mistress grabs you by your hair and pulls your head backwards, immediately rubbing her labia against your lips. "Go on, then. Clean me out!" she orders.');
    scene.text('You eagerly lap up all of her juices. When she pulls your head back, you struggle to hold back your tears as you thank her profusely. Mistress grins at your utter submission. "So, slave… how are you going to make it up to me?"');
    scene.text('She resumes undoing your ties and laughs. "Don\'t rack your brain over it, slave. It\'s not up to you, anyway. I decide how you make it up to me."');
    scene.text('You nod understandingly, and quietly leave to get dressed in the hallway once Mistress dismisses you.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get dressed and leave', goto: ['city_residential', ''] },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub27.jpg');
    scene.text('About thirty minutes later, Mistress comes back. She\'s holding a bowl of whipped cream, and puts it down on the far side of the room.');
    scene.text('"It\'s feeding time, slave!" she announces cheerfully. Whatever she was doing, it must have gone well. "You\'re not going anywhere until you eat it all."');
    scene.text('While you have some practice in pet play, the bind Mistress has put you in doesn\'t allow you to crawl on your hands and knees. You awkwardly attempt to shuffle your way to the bowl, leaning on one shoulder while you twist and crawl across the room. It takes you several minutes to reach the bowl, and you begin to lap up the whipped cream with your tongue as Mistress takes a seat at the dining table and reads a fashion magazine.');
    scene.text('Once you\'ve finished, Mistress stands up and walks over to you.');
    qspCall(st, 'arousal', 'foreplay', 30, 'sub');
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 2) + 0);
    if (((st as any).temp ?? 0) === 1) {
      scene.actions([
        { label: 'Lick her pussy', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('She crouches in front of you and pets you like a dog. "You like using your tongue don\'t you, pet?"');
    scene.text('You meekly nod your head, trying not to look too eager as Mistress smiles. "Prove it." She removes her clothes, exposing her bare pussy to you.');
    scene.text('Not needing any more encouragement, you dive in and eagerly lick Mistress to an earth-shattering orgasm. She scratches you behind the ear before she unties you and tells you to leave.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Wait for her to untie you', goto: ['city_residential', ''] },
      ]);
    }
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    qspCall(st, 'mood', 'raise', 'large');
    if (((st as any).pcs_vag ?? 0) < 30  &&  ((st as any).pcs_vag ?? 0) >= 20) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal');
      (st as any).vgape = 1;
    }
    if (((st as any).pcs_vag ?? 0) < 20  &&  ((st as any).pcs_vag ?? 0) >= 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 2);
      (st as any).vgape = 2;
    }
    if (((st as any).pcs_vag ?? 0) < 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'vaginal', 3);
      (st as any).vgape = 3;
    }
    if (((st as any).pcs_ass ?? 0) < 30  &&  ((st as any).pcs_ass ?? 0) >= 20) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
      (st as any).agape = 1;
    }
    if (((st as any).pcs_ass ?? 0) < 20  &&  ((st as any).pcs_ass ?? 0) >= 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 2);
      (st as any).agape = 2;
    }
    if (((st as any).pcs_ass ?? 0) < 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 3);
      (st as any).agape = 3;
    }
    scene.img('images/characters/city/natalya/sex/sub28.jpg');
    scene.text('Mistress comes back half an hour later. She stands in the door frame and snaps her fingers. "This way, slave."');
    scene.text('She waits patiently while you attempt to shuffle towards her. Due to your arms being tightly bound behind your back and having your ankles tied together, you don\'t make much progress.');
    scene.text('After watching you writhe on the floor for a minute or so, Mistress has enough and sighs. She shakes her head disappointedly and walks over to you, untying some of the knots so you can walk.');
    scene.text('"Thank you Mistress," you mutter meekly and she snaps her fingers again and walks to her bedroom, with you following in her wake.');
    scene.text('When she tells you to get on the bed, you do so eagerly. She then makes you stand up and secures your waist with ropes, attaching those ropes to metal hooks driven into the ceiling. She then pulls your legs up and binds your ankles directly to your wrists, leaving you dangling helplessly. After adding some more ropes to support your weight, you feel her press something cold and large against your anus. You do your best to relax your sphincter, and moan softly when it slides in.');
    scene.text('She disappears for a second, and you test your bonds like you always do when she\'s not looking.');
    scene.text('You squeal when you feel something large enter your pussy. When you look back, you see Mistress relaxing in a chair while shoving a dildo attached to a broom stick into your cunt. She begins to thrust it inside you enthusiastically, and to your surprise you quickly feel yourself getting more and more aroused.');
    scene.text('Of course your orgasm doesn\'t come easy when Mistress is involved. Every time she suspects you\'re close, she eases up, or changes her technique just enough to deny you. After a few minutes, she pulls it out of you just as you were close again.');
    scene.text('Just when you were no longer expecting it, you feel the dildo being rammed inside you again. It\'s vibrating now! The stimulation it\'s giving you is overwhelming and your orgasm hits you almost instantly, making you quiver and drool in your tight binds.');
    scene.text('"Oh my, does my little slave enjoy that?" Mistress asks with a smirk on her face. You thank her profusely while she lowers you and begins to undo your binds, eventually making you pull the item in your ass out yourself. It\'s an anal hook, and you gulp when you see the size of the bulb at the end. That was in your ass the whole time!?');
    scene.text('Your legs are still trembling slightly when Mistress tells you to undo the rest of the ropes yourself in the hallway on your way out. You nod, unable to hide your thoroughly satisfied smile.');
    (st as any).orgasm_or = 'yes';
    qspCall(st, 'arousal', 'vaginal_dildo', 45, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'anal_dildo', (-45), 'sub', 'bound');
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 2) + 0);
    if (((st as any).temp ?? 0) === 1) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('Mistress grabs you by the hair and pulls you back into the room. "Really, slave? After I take such good care of you and provide for you, you\'re going to just walk out like that? Where are your manners!?" she scolds you. Despite her serious look, you can tell she\'s incredibly horny from toying with you.');
    scene.text('"I humbly apologize, Mistress…" you say sweetly before dropping to your knees and kissing her feet. "Is there anything I can do to make it right?"');
    scene.text('Mistress is confused for a second; this is not how she thought you would respond. She sighs and spreads her legs, giving into her desires. "Lick, slave. Hands behind your back."');
    scene.text('You obediently put your hands behind your back as ordered and lick Mistress to orgasm in no time at all. After she recovers, she quickly dismisses you and leaves the room in a hurry.');
    scene.text('While you untie your remaining bonds in the hallway and neatly coil the ropes before putting your clothes back on, you can\'t help but think you did something wrong. Mistress looked a bit distraught when she left the room.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get dressed and leave', goto: ['city_residential', ''] },
      ]);
    }
  } },
      ]);
    }
  }
  scene.build();
}

function enterQW10b3(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/city/natalya/sex/sub25.jpg');
  scene.text('When you follow Mistress into the room, you see that she has laid out a staggering amount of rope for today. Nevertheless, you trust her and readily offer your wrists when she demands you stick them out.');
  scene.text('The rope harness she creates today is especially tight around your boobs, and like often has your arms bound tightly behind your back. Once Mistress is done binding you, she whispers in your ear. "I have to step out for a little while. You will entertain me when I come back."');
  scene.text('She puts down a blanket so you don\'t have to sit on the cold floor, and leaves the apartment. Several thoughts race through your mind. What would she have in store for you when she gets back?');
  scene.text('You feel yourself getting wet at the thought, and rub your thighs against one another in an attempt to get yourself off before changing your mind. You sigh agitatedly and keep thinking of Mistress, hoping she will come back soon.');
  qspCall(s, 'arousal', 'foreplay', 15, 'sub', 'bound');
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  if (((s as any).temp ?? 0) === 1) {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    if (((st as any).analPlugIn ?? 0) === 1) {
      (st as any).analPlugIn = 0;
      (st as any).analPlugOut = 1;
    }
    if (((st as any).pcs_ass ?? 0) < 30  &&  ((st as any).pcs_ass ?? 0) >= 20) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 1);
      (st as any).pcs_horny = 100;
    }
    if (((st as any).pcs_ass ?? 0) < 20  &&  ((st as any).pcs_ass ?? 0) >= 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 2);
      (st as any).agape = 1;
      (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (50);
    }
    if (((st as any).pcs_ass ?? 0) < 10) {
      qspCall(st, 'arousal_funcs', 'stretch', 'anal', 4);
      (st as any).agape = 2;
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub29.jpg');
    scene.text('When Mistress comes back half an hour later, she looks annoyed. Whatever she was taking care must not have gone well. You hear the insistent clacking of heels as she walks through the house at an agitated pace. You recognize that sound; it\'s usually not good news for you.');
    scene.text('You obediently look at Mistress when she approaches you. She has a broom stick in her hand which has a dildo attached to the end of it. "Your holes need more training, slave. Your ass in particular."');
    scene.text('You meekly lie down on your belly and spread your legs. "Thank you for training me, Mistress."');
    scene.text('Your complete obedience actually brings a brief smile to Mistress\' face as she lowers the dildo to your mouth. Understanding this is all the lubricant you\'re going to get, you do your best to spread as much saliva over it as you can before she pulls it away from you and presses it against your ass.');
    scene.text('Within a few minutes, Mistress has you groaning on the floor as she brutally stretches your ass with her dildo. Nearly half an hour later, she pulls the dildo out and admires your gaping hole for a second. With a satisfied smile on her face, she begins to untie you.');
    qspCall(st, 'arousal', 'anal_dildo', 40, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = ((st as any).pcs_horny ?? 0) + (50);
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 3) + 0);
    scene.img('images/characters/city/natalya/sex/sub30.jpg');
    scene.text('When Mistress comes back half an hour later, she\'s practically skipping across the apartment despite wearing heels. "I\'ll be right with you, slave!" she shouts happily. When she enters the room, she\'s wearing nothing but a long makeshift skirt. She\'s holding a collar and leash in her hand as she smiles at you. "What do you say, slave? Want to go for a walk?"');
    scene.text('You eagerly nod, happy to see her in such a great mood. She rapidly unties the ropes around your legs and changes your binds so your hands are tied above your head before she puts the collar around your neck.');
    scene.text('"You make such a cute pet…" she says while looking dreamily at you. She then pulls the leash impatiently, wanting you to follow her on your knees.');
    scene.text('The next half hour is… unusual. While you follow Mistress around her apartment like a good pet, she lectures you about all sorts of feminine subtlety you could employ. Mistress talks and talks, you\'ve never seen her this cheerful before. Once you run out of time, she removes the collar from your neck and absent-mindedly runs her hand through your hair for a while.');
    if (((st as any).temp ?? 0) < 2) {
      scene.actions([
        { label: 'Thank Mistress for her lesson', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub24.jpg');
    scene.text('When Mistress finishes bestowing her life lessons onto you, she pauses. Her legs are slightly spread, and you can see how moist and puffy her pussy lips are. You even see a droplet run down her leg.');
    scene.text('You greedily watch the droplet slide down her leg and lick your lips. Without asking for permission, you bury your face between her legs and start licking. To your surprise, she doesn\'t stop you. She was probably going to make you do it anyway.');
    scene.text('Mere minutes later, Mistress\' body begins to shake and she falls back onto the couch, unable to support her weight with her shaking legs. She runs her hand through your hair again, as if to tell you were a good little pet.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Thank her and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get dressed and leave', goto: ['city_residential', ''] },
      ]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterQW10c(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (30);
  qspCall(s, 'stat', '');
  (s as any).temp = (Math.floor(Math.random() * 3) + 0);
  if ((!((s as any).temp ?? 0))) {
    scene.img('images/characters/city/natalya/mistress.jpg');
    scene.text('You stand before Mistress and take off your clothes without saying a word. When you finish and stand in a submissive pose, she nods approvingly.');
    scene.text('"When is the last time I spanked you, slave?" she asks intently.');
    scene.text('"Erm…" you reply, thinking back.');
    scene.text('She immediately responds. "I see… Too long, then. Assume the position."');
    scene.actions([
      { label: 'Assume the position', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = 0;
    (st as any).spank = ((st as any).spank ?? 0) + (1);
    (st as any).spanked = 2;
    (st as any).spankedtime = ((st as any).totminut ?? 0);
    qspCall(st, 'sweat', 'add', 10);
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 3) + 0);
    scene.img('images/characters/city/natalya/sex/sub31.jpg');
    scene.text('You dutifully lean over and put your hands on the nearest chair, exposing your ass for Mistress while she disappears in search of something to spank you with. She returns with a wooden board, and skillfully spanks your ass for the next half hour. You try to remain firm and stand up straight, taking your punishment in stride, but towards the end you\'re reduced to a crying, blubbering mess.');
    if (((st as any).temp ?? 0) < 2) {
      scene.actions([
        { label: 'Eagerly lick her pussy', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub13.jpg');
    scene.text('After Mistress is done spanking you, she puts the board away and admires your glowing red ass for a second. She then wordlessly takes a similar position next to you, with a meaningful look on her face.');
    scene.text('You immediately drop to your knees, forgetting all about your sore ass as you feast on her delicious juices. You expertly lick her to orgasm, savouring the taste of her cunt on your lips. Mistress grabs a fistful of your hair and eagerly grinds against your mouth, nearly smothering you between her thighs.');
    scene.text('After she recovers, she lets go of you and signals you off with a satisfied look on her face. You\'re reminded of your sore ass when you put your clothes back on in the hallway.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Get dressed and leave', goto: ['city_residential', ''] },
      ]);
    }
  } },
      { label: 'Anything but that', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).pcs_horny = 0;
    (st as any).spank = ((st as any).spank ?? 0) + (1);
    qspCall(st, 'stat', '');
    (st as any).temp = (Math.floor(Math.random() * 2) + 0);
    scene.img('images/characters/city/natalya/sex/sub32.jpg');
    scene.text('Without hesitation, you drop to your knees and beg her not to spank you. "Please Mistress, not that! Please, I\'ll do anything!"');
    scene.text('Mistress snorts at you with zero compassion in her gaze. "Oh, poor slave… you never learn, do you? But you know what? Very well, no spanking. Assume the position anyway, I\'ll be right back."');
    scene.text('She grabs the piece of wood she was intending to use and leaves the room for a second before returning with a whip. You silently scold yourself, realizing your mistake.');
    scene.text('For the next thirty minutes, Mistress whips you just about everywhere on your body. You try to take your punishment in stride as best you can, biting through the pain and assuming the position again and again.');
    scene.text('She whips your pussy several times to conclude the session, and smirks when she looks at your sad, teary face. "I know what you\'re thinking, slave. And yes, you\'re right… that was stupid of you. Very stupid. I\'m disappointed in you. I thought you\'d know better by now."');
    if ((!((st as any).temp ?? 0))) {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 240;
    qspCall(st, 'mood', 'lower', 'min');
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub33.jpg');
    scene.text('Mistress grabs you by the scruff of your neck and guides you towards her bed, where she tightly binds you after roughly forcing you down on it. You groan softly when she helps you put in a leather harness and tightly binds your body with a bunch of belts. Finally, she pulls a pantyhose over your head and gags you with a roll of tape.');
    scene.text('"Maybe I should leave you like this until tomorrow morning, slave," she smirks. "You look like you\'d make a cute pillow."');
    scene.text('She then leaves the room, leaving you plenty of time to think about what happens if you try to dispute her wishes. At one point, you try to wiggle out of your restraints but immediately realize it\'s pointless; Mistress\' bondage skills are top notch.');
    scene.text('Mistress keeps you restrained on her bed for hours, only occasionally checking up on you. Every time she comes in, she raises your hopes and then immediately crushes them by walking out again.');
    scene.text('She eventually returns and strokes your hair for a second before untying you. "Poor slave… Why do you keep making me punish you? You should trust that I know what\'s best for you."');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Continue', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    qspCall(st, 'mood', 'lower', 'min');
    qspCall(st, 'sweat', 'add', 40);
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub34.jpg');
    scene.text('"Now move!" she commands while using her whip to direct you towards the restroom.');
    scene.text('"My maid had the week off, and my toilet needs cleaning. Make it shine for me, slave!" she commands and whips your exposed ass softly until you begin licking the rim of the bowl.');
    scene.text('You obediently work your way inwards, making sure you don\'t miss a single spot. While you\'re working on the inner section, Mistress suddenly flushes the toilet. You were not expecting this, and come up coughing, having accidentally ingested some of the water.');
    if (((st as any).pcs_makeup ?? 0) > ((st as any).cosmetic_tattoo ?? 0) + 1) {
      (st as any).pcs_makeup = 0;
      scene.text('Your make-up is definitely ruined now.');
    }
    scene.text('Mistress inspects your work and nods approvingly. "Good enough, slave. You\'re dismissed."');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  } },
    ]);
  } else {
    if (((s as any).temp ?? 0) === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 120;
      qspCall(s, 'mood', 'lower', 'min');
      qspCall(s, 'stat', '');
      (s as any).temp = (Math.floor(Math.random() * 3) + 0);
      scene.img('images/characters/city/natalya/sex/sub35.jpg');
      scene.text('"Good, you\'re here, very good. Undress quickly please. Today is a big day!" Mistress says excitedly.');
      scene.text('While you take your clothes off, Mistress walks back and forth in the hallway. She seems nervous about something.');
      scene.text('Once you\'re finished and assume your regular posture, Mistress look at you. "Slave, did you know there\'s a BDSM club near the city?"');
      scene.text('"No, Mistress," you reply truthfully.');
      scene.text('"Neither did I," she says. "I was talking about you to a good friend of mine, and one thing led to another. He said he would put in a good word for me, and… they\'re sending someone over today to talk to me! Isn\'t that exciting!?" Before you can reply, she continues. "This means I need you to be on your absolute best behaviour! Do you understand? Today is very important!"');
      scene.text('You nod obediently. "Of course Mistress, I\'ll make you proud."');
      scene.text('Mistress smiles sweetly for just a second, before snapping back into her normal role and lays out today\'s plan. "Okay, good. We\'ll keep it simple: you\'ll just be somewhere in the house, looking like a pretty obedient slave girl. If the person from the club requires a demonstration, I\'ll come and get you. Now where to put you… How about the restroom?"');
      scene.text('The restroom? You were hoping for something a bit more prestigious, but if that\'s what Mistress wants, that\'s what you\'ll do. She binds you in a simple rope harness, securing your wrists behind your back as always before she puts a posture collar around your neck, and straps your head in a harness gag with a toilet brush at the end.');
      scene.text('Luckily, no one has to use the restroom while you serve as a toilet brush. Two hours later, Mistress finally comes to see you. She seems cheerful - the talk with the representative from the club must have gone well.');
      scene.text('She benevolently strokes your hair for a second after taking the gag harness off before whispering in your ear. "You\'ve been a terrific slave lately, do you know that? There\'s no time today, but next time you\'re here, I\'ll make sure you\'re well rewarded for your service…"');
      scene.text('Mistress continues to undo your binds, and throws the rope in a corner. When you move to coil it for her, she waves you away. "Don\'t worry about that, I\'ll do it later. Come on, I\'ll walk you out."');
      if (((s as any).temp ?? 0) < 2) {
        scene.actions([
          { label: 'Follow Mistress to the hallway', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (4);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub13.jpg');
    scene.text('Mistress walks to the hallway with you, and you walk over to the pile of clothes and begin to put them back on.');
    scene.text('"Oh, slave?" Mistress asks in a seductive voice. When you look in her general direction you see she\'s standing bent over, leaning on the couch. She has hiked up her skirt and looks invitingly at you, making a come hither gesture with her finger. "Would you like to get started on your reward already?"');
    scene.text('You immediately drop your clothes and get between her legs, eagerly licking her pussy lips while she rubs her groin against your face enthusiastically. It doesn\'t take long for you to lick Mistress to an orgasm, and her loud panting and moaning echoes in the hallway.');
    scene.text('"I thought you would like that," she chuckles while she watches you lick your lips. "I\'ll see you next time, okay?"');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get dressed and leave', goto: ['city_residential', ''] },
        ]);
      }
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 40;
      qspCall(s, 'stat', '');
      (s as any).temp = (Math.floor(Math.random() * 3) + 0);
      scene.img('images/characters/city/natalya/sex/sub36.jpg');
      scene.text('You quickly take off your clothes while Mistress stands in the hallway ogling at your body with a satisfied smile on her face. When you enter the living room with her, Mistress nods at a small paper bag. "I got you something… Go ahead, open it."');
      scene.text('With trembling fingers, you open the bag and pull out a cute red lingerie set. There\'s also a blindfold in the bag. "Thank you Mistress, I love it!" you smile meekly, uncertain what you did to deserve this kind gesture.');
      scene.text('"Anything for my pretty slave girl. Go ahead and put it on. Sll I want you to do today is look pretty while I catch up on my reading." She smiles and sits down on the couch, putting a cane that was still there to the side. From how Mistress is talking, she doesn\'t expect to use it today.');
      scene.text('You quickly slip into the lingerie set, kneel down next to the couch and slip the blindfold over your eyes before assuming a submissive position with your hands behind your back. For the next half hour, all you hear is the occasional rustling of the magazine when Mistress flips a page.');
      scene.text('Once Mistress is done reading, she pats you on the head. "That\'s all for today, slave. You may take the blindfold off and leave now."');
      if (((s as any).temp ?? 0) < 2) {
        scene.actions([
          { label: 'Take off the blindfold', handler: (st: GameState) => {
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub6.jpg');
    scene.text('When you take the blindfold off, you\'re looking straight at Mistress\' pussy.');
    scene.text('"Well… almost. There\'s one more thing I want you to do for me," Mistress grins teasingly. Looking at your exposed body wearing nothing but the lingerie set she picked out for you has made her quite horny. You can see her pussy lips glisten with wetness, and her pussy is all reddened and puffy from her arousal.');
    scene.text('"Thank you, Mistress!" you mutter.');
    scene.text('You slowly begin to lick her pussy lips, wanting to take your time with her today. Mistress has no patience for that though, and roughly grinds her pussy against your tongue and lips. You understand she wants you to hurry, so you deftly lick her to orgasm like you have before.');
    scene.text('Mistress sits lazily on the couch and idly runs her hand through your hair while you keep obediently licking her. She then dismisses you, saying she has other plans.');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian', 'bound');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Get dressed and leave', goto: ['city_residential', ''] },
        ]);
      }
    }
  }
  scene.build();
}

function enterQW11(s: GameState, scene: SceneBuilder): void {
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  if ((!((s as any).mistressqwest ?? 0))) {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
    (s as any).mistressqwest = 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/natalya/lesbi.jpg');
    scene.text('Mistress greets you when you enter the hallway. She\'s wearing her everyday attire today; you haven\'t seen her like this in a while.');
    scene.text('"Ah, hello slave. Come on in, I was expecting you. No need to take your clothes off. As a matter of fact, I have a special assignment for you today." She smiles mysteriously at you before guiding you to the living room, and invites you to take a seat at the dining table.');
    scene.text('"I\'m sorry Madam, this will only take a minute," she says, but not to you. Mistress has another guest you failed to notice until now. It\'s a slightly older woman, fully dressed in leather.');
    scene.text('You meekly wave at the other woman as Mistress walks over to you. She barely acknowledges you, but gives you an amused little smirk.');
    scene.text('"So, slave… You know there\'s a sex shop in the city\'s red light district, yes?" she asks before laughing. "Of course you know. Being the little minx you are, there\'s simply no way you haven\'t been there already!" You smile defensively while Mistress mocks you in front of her guest, not daring to look her in the eye.');
    scene.text('Mistress continues. "For your assignment, you will go there. To the basement, to be exact. I know you\'re great at servicing women with your mouth, you\'ve proven that to me first-hand! Now I need you to prove that you can suck cock just as well. Do you think you can be a good little slut for me?"');
    scene.text('Your face is a deep red by now. She\'s talking about you pleasing her with your mouth, and making you suck dick in front of this stranger!');
    scene.text('Mistress continues. "About twenty sounds reasonable. Enter one of the booths there and service twenty dicks in the gloryhole. You can take as long as you need, but you\'re not welcome here until you finish your task. And you don\'t want to keep me waiting too long, do you?"');
    scene.text('You shake your head. "N-no Mistress, I\'ll do it. I\'ll do it as soon as I can."');
    scene.text('Mistress gives you a confident nod. "I know you\'ll make me proud, slave. Come, I\'ll let you out."');
    scene.text('"Good luck!" the other woman grins as you walk by her on your way out. Damn, she overheard everything.');
    scene.text('You\'re a bit distraught as you step out the door. You\'re not allowed back in until you suck <i>twenty dicks</i> of guys you don\'t even know! Would Mistress find out if you just came back after a few days, even if you didn\'t do all twenty? Do you think you could lie to her? Maybe you should just get it over with…');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } else {
    if (((s as any).mistressqwest ?? 0) > 20) {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (20);
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/natalya/lesbi.jpg');
      scene.text('It\'s been a while since you went to see Mistress, but you finally sucked twenty cocks in the gloryhole like she demanded. A little nervous, you step through the doorway and find Mistress already waiting for you by the entrance.');
      scene.text('You meekly smile at her. "I umm… I did as you asked, Mistress. I serviced twenty men through the gloryhole."');
      scene.text('"I know," Mistress smiles proudly at you. She laughs at your surprised expression and continues. "What, you thought I wouldn\'t keep tabs on my precious slave girl? My precious little slave girl, out on her quest to tame twenty large cocks in the wild, just to please her Mistress?"');
      scene.text('She looks at dreamily at you for a second. "The owner of the store told me all about it. You\'re such a good girl!" Mistress beams at you. "Come on, good girl… why don\'t you show your Mistress how much you love her?"');
      scene.actions([
        { label: 'Show her', handler: (st: GameState) => {
    (st as any).mistressqwest = 0;
    (st as any).lesbiQW = 12;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) + (5);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub13.jpg');
    scene.text('You immediately drop to your knees and crawl towards Mistress. "Mistress, may I please lick your pussy to show you how much I love you?"');
    scene.text('Mistress smiles sweetly at you and hikes up her skirt. "Yes you may, darling."');
    scene.text('Her pussy is soaked, and you eagerly service Mistress with your mouth. She orgasms in no time at all, and pushes your face away once she catches her breath.');
    scene.text('"You haven\'t lost your touch! That was amazing…" she gasps. She straightens her clothes and invites you into the living room after she helps you up. She bites her lip nervously just for a second as she does. "Slave, come. We have some serious matters to discuss."');
    qspCall(st, 'arousal', 'cuni_give', 15, 'sub', 'lesbian');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Follow her into the living room', goto: ['lesbidomhouse', 'QW12'] },
    ]);
  } },
      ]);
    } else {
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'stat', '');
      scene.img('images/characters/city/natalya/lesbi.jpg');
      scene.text('Mistress is surprised to see you when she opens the door, but allows you to come in. She raises her eyebrow. "Did you do what I told you to do?"');
      scene.text('You can\'t lie to your Mistress. You shake your head apologetically while you look at the ground, not daring to look her in the eye. "No, Mistress…"');
      scene.text('Mistress puts her hand under your chin and makes you look up, locking her piercing gaze onto your eyes. "Was I not clear? Why are you here, slave?"');
      scene.text('"I\'m sorry Mistress, I-" you sniffle, tears forming in your eyes. This was a huge mistake.');
      scene.text('"You stupid whore!" Mistress shouts and slaps you in the face. "I told you not to come back until you suck twenty cocks! Take off your damn clothes, I\'m about to teach you a lesson you\'ll never forget!"');
      scene.actions([
        { label: 'Undress and be punished', handler: (st: GameState) => {
    (st as any).pcs_horny = 0;
    qspCall(st, 'mood', 'lower', 'min');
    (st as any).pcs_health = 20;
    (st as any).minut = ((st as any).minut ?? 0) + 40;
    (st as any).spank = ((st as any).spank ?? 0) + (1);
    (st as any).spanked = ((st as any).spanked ?? 0) + (3);
    (st as any).spankedtime = ((st as any).totminut ?? 0);
    (st as any).fingal = 1;
    (st as any).MistressAdoration = ((st as any).MistressAdoration ?? 0) - (3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/city/natalya/sex/sub44.jpg');
    scene.text('Mistress hasn\'t even lifted a finger yet, and you\'re already crying. Once you take off your clothes, she grabs you roughly by the hair and throws you down on the floor in the living room, where she begins to whip you with a belt.');
    scene.text('She\'s not holding back at all. She keeps beating you, besides herself with rage. Between slaps, she mutters through her teeth things about humility and obedience, and that she really thought you were better than this.');
    scene.text('After half an hour, she\'s finally too tired to continue and tells you to get up. You\'ve been crying and screaming the whole time, and feel exhausted. Nevertheless, you try to get up to your feet as quickly as you can despite your shaky legs, and don\'t object when Mistress grabs you by the hair again and guides you back to the front door.');
    scene.text('"Put those on and leave, slave!" she says while nodding at your clothes. "Your assignment still stands. Do not disappoint me again!"');
    scene.text('Mistress walks away before you can say anything. You wallow in self-pity while you carefully put your clothes back on, wincing whenever the fabric touches one of the countless welts on your body.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enterQW12(s: GameState, scene: SceneBuilder): void {
  (s as any).lesbiday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  if ((!((s as any).mistresscontract ?? 0))) {
    scene.img('images/characters/city/natalya/sex/sub197.jpg');
    scene.text(`"${((s as any).pcs_nickname ?? '')}, listen. You can speak freely for the remainder of this session. This will be a big step for the both of us. You need to be able to say what you want to say, and ask what you want to ask," Mistress begins when she sits down with you at the table. "I've been very impressed with your progress thus far, and I feel like there's still a lot more that we can explore together. You show great potential."`);
    scene.text('"Thank you, Mistress…" you reply, feeling a tinge of pride when you hear her praises.');
    scene.text('She continues. "However, as you probably understand, my time is precious. Properly training a slave girl takes a lot of time and effort, so I can\'t focus on more than one girl at a time. As you can probably guess, right now that one girl is you."');
    scene.text('You offer her a small smile, but don\'t interrupt her, prompting her to continue.');
    scene.text('She notices that she has your full attention, and gets to the point. "So… if you wish to continue serving me, I\'ll need a commitment in writing from you. I need to know I\'m not wasting my time. Here\'s what I have in mind."');
    scene.text('She offers you a few sheets of paper. The title is: <b>"Mistress and Slave Contract"</b>.');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub197.jpg');
    scene.text('"<b>This contract is for the duration of one year</b>. It\'s really not that different from how your training has gone thus far, it merely reinforces the rules in writing. Your body, mind and soul will be at my disposal at any time during this year, and you will obey my every command," she explains.');
    scene.text('Your mind dazzles from the implications. She would basically own you… for a full year! Signing this contract would mean you surrender all control over yourself, and put it in Mistress\' hands to do with as she sees fit. Is that what you want?');
    scene.text('"I\'ve added a few mitigating clauses, compared to most contracts of this type," Mistress adds. "I have no desire to manage your life 24/7. I\'m sure you have your things to do, and I have mine. Therefore, <b>I will only require you to visit me at least once every seven days</b>. You can decide when it is most convenient for you to visit me. Of course, if you wish to visit more than once every seven days, you are allowed and encouraged to do so."');
    scene.text('Her expression becomes more stern. "But I\'m warning you: the punishment will be severe if you fail to show up when you\'re required to do so. Also, in very specific circumstances, I might summon you at my discretion."');
    scene.text(`She smiles benevolently at you. "${((st as any).pcs_nickname ?? '')}, I know this is a lot to take in, so I'll give you a chance to read the contract in full and think it over. I don't want you to sign something you don't believe is right." She then stands up and walks to her bedroom, lightly squeezing your shoulder as she walks past you.`);
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/characters/city/gala/slave/contract.jpg');
    scene.text('Wow… that is a lot to take in. A full year!');
    scene.text('You take some time to read the pages. You\'re not really sure how these normally look, so you\'re not sure if certain key things are omitted or not.');
    scene.text('');
    scene.text('A few things draw your attention in particular:');
    scene.text('  -  Your body, mind, heart and time belong to Mistress to use as she sees fit, within the parameters of safety;');
    scene.text('  -  You are required to submit yourself regularly, visiting Mistress\' apartment <b>at least once every seven days</b>. Mistress may also demand your services unannounced, occasionally;');
    scene.text('  -  You are required to answer all questions honestly and directly, and will volunteer any information about your physical or emotional condition;');
    scene.text('  -  You will always treat Mistress with love and respect;');
    scene.text('  -  Mistress will respect your physical integrity, and will not require you to make changes to your body;');
    scene.text('  -  Mistress will endeavour not to inflict physical harm upon you that would require the attention of a third party.');
    scene.text('');
    scene.text('There\'s more, but these appear to be the most important. One thing you do notice is the lack of a safe word; apparently Mistress feels you don\'t need one, and that she\'ll know you well enough to decide for you. You\'ll not be able to interrupt any actions taking place. Do you trust her enough to agree to that?');
    scene.text(`You mull it over for another minute, after which Mistress returns to the table and smiles at you confidently. "So, ${((st as any).pcs_nickname ?? '')}… do you have any questions?"`);
    scene.actions([
      { label: 'Sign the contract', handler: (st: GameState) => {
    if (((st as any).pcs_hydra ?? 0) >= 100) {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (5);
    } else {
      (st as any).pcs_hydra = ((st as any).pcs_hydra ?? 0) - (10);
    }
    (st as any).lesbiQW = 13;
    (st as any).mistresscontract = ((st as any).daystart ?? 0) + 365;
    scene.img('images/characters/city/natalya/sex/sub198.jpg');
    scene.text('You\'ve had enough time to think it over; you want this. You weakly smile at Mistress. "I… I have no questions, Mistress. I submit to you. I will sign."');
    scene.text('Mistress clearly looks happy and grins wolfishly as she hands you a pen. When you\'re finished signing, you feel relieved in a way. You know Mistress\' time is precious, and by promising yourself to her you have secured her undivided attention for a full year.');
    scene.text(`She smiles at you. "I'll put this in my safe. I'm really glad we're taking this step together, ${((st as any).pcs_nickname ?? '')}. Let's celebrate! Would you like some wine?"`);
    scene.text('"That would be nice, Mistress," you smile. When you see her break open a rather old looking bottle of wine you feel touched; this must\'ve meant a lot to her too.');
    scene.text('You have a pleasant chat with Mistress for another half hour, after which she apologizes; she has other things to attend to today. She gives you a light peck on the cheek and grins. "So, slave… How does it feel to be owned?"');
    scene.text('"It feels good, Mistress," you admit.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Ask if you can think it over', handler: (st: GameState) => {
    (st as any).mistresscontract = (-1);
    scene.text('When Mistress comes back, you\'re still not sure. This really is a big deal.');
    scene.text('You ask several questions as to how things would go, but are still not convinced.');
    scene.text('Hesitantly, you admit your reluctance. "Mistress… I have to be honest with you: this is a life changing decision. I can\'t decide right here on the spot. Is it okay for me to think about it for a while?"');
    scene.text('For just a second, you can see the disappointment on her face. She bounces back quickly though, and fakes a smile. "I understand, it is a serious commitment after all. Of course you can think about it."');
    scene.text('You feel relieved. For a while you thought you were slamming the door shut by expressing doubt.');
    scene.text('She continues. "However, you have to see things from my point of view as well. If you have doubts, maybe my time is better spent on finding someone more willing. Until you sign this contract, this will be our last session. My time is precious, and I can\'t afford to waste it."');
    scene.text('"That\'s fair," you nod. "I\'ll get back to you soon."');
    scene.text('With nothing left to say, you stand up and get ready to leave Mistress\' apartment.');
    scene.actions([
      { label: 'Get dressed and leave', goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Refuse to sign', handler: (st: GameState) => {
    (st as any).lesbiQW = (-1);
    ((st as any).bdsmclub = (st as any).bdsmclub ?? {})['unlocked'] = 1;
    scene.img('images/characters/city/natalya/sex/sub199.jpg');
    scene.text('You quickly browse through the contract, and the decision is not hard to make: there\'s no way you\'re signing this.');
    scene.text('Mistress looks disappointed, but complacent. "I… was afraid you would say that. That\'s too bad."');
    scene.text('You shrug apologetically. "I\'m sorry, but I just don\'t see myself as someone who could devote her life to someone like that."');
    scene.text('Mistress bites her lip and looks deflated. "I guess I was wrong about you. I thought I could tame you, but clearly I was wrong."');
    scene.text('She breaks the awkward silence that follows. "You know, I wasn\'t lying when I said I see potential in you. There\'s a BDSM club near the city, where people with interest in our lifestyle can go to explore their interests. I think you would enjoy going there."');
    scene.text('She offers you a luxurious black business card with a gold trim. "If you\'re interested, this will get you in."');
    scene.text(`She stands up and signals for you to do the same. "I guess this is where we part ways, then. Take care, ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Say goodbye to Mistress and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).mistresscontract ?? 0) === -1) {
      (s as any).lesbiday = ((s as any).daystart ?? 0);
      scene.img('images/characters/city/natalya/lesbi.jpg');
      scene.text('When you return to Mistress\' apartment, she invites you to come and sit at the table with her.');
      scene.text(`"${((s as any).pcs_nickname ?? '')}, you're back!" she says and invites you to sit down. "Did you get a chance to think about my proposal?"`);
      scene.text('"I did, Mistress. It\'s why I\'m here."');
      scene.text('"Good, good. Do you have any further questions?"');
      scene.actions([
        { label: 'Sign the contract', handler: (st: GameState) => {
    (st as any).lesbiQW = 13;
    (st as any).mistresscontract = ((st as any).daystart ?? 0) + 365;
    (st as any).MistressObedience = 4;
    scene.img('images/characters/city/natalya/sex/sub198.jpg');
    scene.text('You\'ve had enough time to think it over; you want this. You weakly smile. "I… I have no questions, Mistress. I submit to you. I will sign."');
    scene.text('Mistress clearly looks happy and grins wolfishly as she hands you a pen. When you\'re finished signing, you feel relieved in a way. You know Mistress\' time is precious, and by promising yourself to her you have secured her undivided attention for a full year.');
    scene.text(`She smiles at you. "I'll put this in my safe. I'm really glad we're taking this step together, ${((st as any).pcs_nickname ?? '')}. Let's celebrate! Would you like some wine?"`);
    scene.text('"That would be nice, Mistress," you smile. When you see her break open a rather old looking bottle of wine you feel touched; this must\'ve meant a lot to her too.');
    scene.text('You have a pleasant chat with Mistress for another half hour, after which she apologizes; she has other things to attend to today. She gives you a light peck on the cheek and grins. "So, slave… How does it feel to be owned?"');
    scene.text('"It feels good, Mistress," you admit.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
        { label: 'Ask for a shorter term', handler: (st: GameState) => {
    scene.img('images/characters/city/natalya/sex/sub197.jpg');
    scene.text('"Actually, Mistress… I\'m really tempted to sign, but I can\'t get over the fact that it\'s for a full year," you admit. "Would you consider a shorter term? Maybe three months as a trial?"');
    scene.text('Mistress looks at you intently. "You understand why I want a year, right? Training a slave girl is a process that takes years to perfect, it\'s a huge investment on my part as well as yours. Three months wouldn\'t even scratch the surface of it. Still, I understand why you\'re having doubts."');
    scene.text('You bite your lip and there is an awkward silence. Mistress appears to be in deep thought.');
    scene.text('"Six. Six months is as short as I\'ll go, and only for the first term. Any contract after that will be for a year."');
    scene.actions([
      { label: 'Agree to six months', handler: (st: GameState) => {
    (st as any).lesbiQW = 13;
    (st as any).mistresscontract = ((st as any).daystart ?? 0) + 182;
    (st as any).MistressObedience = 3;
    scene.img('images/characters/city/natalya/sex/sub198.jpg');
    scene.text('After giving it some thought, you accept. "Six months sounds acceptable, Mistress. I will sign."');
    scene.text('Mistress grins wolfishly as she hands you a pen. She\'s happy that she was able to convince you, even though she had to settle for a shorter term for now.');
    scene.text('When you\'re finished signing, you feel relieved in a way. You know Mistress\' time is precious, and by promising yourself to her you have secured her undivided attention for half a year. And if it goes well, who knows how much longer after that?');
    scene.text(`She smiles at you. "I'll put this in my safe. I'm really glad we're taking this step together, ${((st as any).pcs_nickname ?? '')}. Let's celebrate! Would you like some wine?"`);
    scene.text('"That would be nice, Mistress," you smile. When you see her break open a rather old looking bottle of wine you feel touched; this must\'ve meant a lot to her too.');
    scene.text('You have a pleasant chat with Mistress for another half hour, after which she apologizes; she has other things to attend to today. She gives you a light peck on the cheek and grins. "So, slave… How does it feel to be owned?"');
    scene.text('"It feels good, Mistress," you admit.');
    scene.actions([
      { label: 'Leave her apartment', goto: ['city_residential', ''] },
    ]);
  } },
      { label: 'Decline', handler: (st: GameState) => {
    (st as any).lesbiQW = (-1);
    ((st as any).bdsmclub = (st as any).bdsmclub ?? {})['unlocked'] = 1;
    scene.img('images/characters/city/natalya/sex/sub199.jpg');
    scene.text('You shake your head. "I\'m sorry, Mistress. Six months is still too long. I don\'t think I can commit to this, it doesn\'t feel right."');
    scene.text(`Mistress is clearly disappointed. "That's too bad, ${((st as any).pcs_nickname ?? '')}. I really thought we would be able to work it out, but I guess you don't not want this as much as I do."`);
    scene.text('She breaks the awkward silence that follows. "You know, I wasn\'t lying when I said I see potential in you. There\'s a BDSM club near the city, where people with interest in our lifestyle can go to explore their interests. I think you would enjoy going there."');
    scene.text('She offers you a luxurious black business card with a gold trim. "If you\'re interested, this will get you in."');
    scene.text(`She stands up and signals for you to do the same. "I guess this is where we part ways, then. Take care, ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Say goodbye to Mistress and leave', goto: ['city_residential', ''] },
    ]);
  } },
    ]);
  } },
        { label: 'Refuse to sign', handler: (st: GameState) => {
    (st as any).lesbiQW = (-1);
    ((st as any).bdsmclub = (st as any).bdsmclub ?? {})['unlocked'] = 1;
    scene.img('images/characters/city/natalya/sex/sub199.jpg');
    scene.text('You\'ve given it enough thought; you wouldn\'t mind visiting her more, but you\'re not signing a contract for it.');
    scene.text(`When you tell Mistress that, she's clearly disappointed. "That's too bad, ${((st as any).pcs_nickname ?? '')}. Like I explained, this would be a commitment from me as much as it is from you, and I need that mutual commitment to be there. I've wasted too much time on girls that just stopped showing up one day. I really thought we would be able to work it out, but I guess you don't not want this as much as I do."`);
    scene.text('She breaks the awkward silence that follows. "You know, I wasn\'t lying when I said I see potential in you. There\'s a BDSM club near the city, where people with interest in our lifestyle can go to explore their interests. I think you would enjoy going there."');
    scene.text('She offers you a luxurious black business card with a gold trim. "If you\'re interested, this will get you in."');
    scene.text(`She stands up and signals for you to do the same. "I guess this is where we part ways, then. Take care, ${((st as any).pcs_nickname ?? '')}."`);
    scene.actions([
      { label: 'Say goodbye to Mistress and leave', goto: ['city_residential', ''] },
    ]);
  } },
      ]);
    }
  }
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'QW1':
      enterQW1(s, scene);
      break;
    case 'QW2':
      enterQW2(s, scene);
      break;
    case 'QW3':
      enterQW3(s, scene);
      break;
    case 'QW4':
      enterQW4(s, scene);
      break;
    case 'QW5':
      enterQW5(s, scene);
      break;
    case 'QW6':
      enterQW6(s, scene);
      break;
    case 'QW7':
      enterQW7(s, scene);
      break;
    case 'QW8':
      enterQW8(s, scene);
      break;
    case 'QW9':
      enterQW9(s, scene);
      break;
    case 'QW10':
      enterQW10(s, scene);
      break;
    case 'QW10a':
      enterQW10a(s, scene);
      break;
    case 'QW10b':
      enterQW10b(s, scene);
      break;
    case 'QW10b1':
      enterQW10b1(s, scene);
      break;
    case 'QW10b2':
      enterQW10b2(s, scene);
      break;
    case 'QW10b3':
      enterQW10b3(s, scene);
      break;
    case 'QW10c':
      enterQW10c(s, scene);
      break;
    case 'QW11':
      enterQW11(s, scene);
      break;
    case 'QW12':
      enterQW12(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const lesbidomhouse: LocationDef = {
  name: 'lesbidomhouse',
  title: 'You ring the doorbell several times, but no one comes to ans',
  region: 'other',
  locationType: 'public_indoors',
  enter: enter,
};
