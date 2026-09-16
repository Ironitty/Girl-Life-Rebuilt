import { qspCall, qspFunc, dynamicGoto, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('entry') : -1) >= 0) {
    if (qspFunc(s, 'homes_properties', 'is_current_home', ((s as any).loc ?? 0))) {
      qspCall(s, 'courtletter', '');
      if (((s as any).NatbelQW ?? 0)?.['FriendLover'] >= 8  &&  ((s as any).NatbelQW ?? 0)?.['Isabella'] === 0  &&  ((s as any).hour ?? 0) >= 19  &&  ((s as any).hour ?? 0) < 23) {
        if (((s as any).loc ?? 0) !== 'korrPar') {
          qspGoto(s, 'home_events', 'natbel');
        } else {
          if (((s as any).NatbelQW ?? 0)?.['mother_talk'] === 2) {
            qspGoto(s, 'home_events', 'natbel_pav');
          }
        }
      }
    }
    if (((s as any).loc ?? 0) !== 'korrPar') {
      if (((s as any).parkblackmail ?? 0) === 1  &&  ((s as any).parkday ?? 0) !== ((s as any).daystart ?? 0)) {
        (s as any).parkblackmail = 2;
        (s as any).parkday = ((s as any).daystart ?? 0);
        scene.text('A heavy envelope has arrived in the mail. When you open it, you\'re horrified to find several pictures of you giving blowjobs to the guys in the park inside. A small note accompanying them says:');
        scene.text('"If you don\'t want these pictures to be posted on your door and sent to your workplace, then come to this address. If you don\'t come today, these pictures will be hanging in your stairwell tomorrow."');
        scene.text('You check the address and find that it\'s Aphrodite Photography in the City Center.');
        return;
      } else {
        if (((s as any).parkblackmail ?? 0) === 2  &&  ((s as any).parkday ?? 0) !== ((s as any).daystart ?? 0)) {
          (s as any).parkblackmail = 0;
          (s as any).fotoyousuck = 1;
          scene.text('You\'re horrified and embarrassed when you see photos of you with your face covered in cum with two dicks in your mouth covering your stairwell walls.');
          return;
        }
      }
      if (((s as any).santehnikDolg ?? 0) > 0  &&  qspFunc(s, 'money', 'can_afford', ((s as any).santehnikDolg ?? 0), 'desk')  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21) {
        scene.text('<b><font color = red>The doorbell rings</font></b>');
        scene.actions([
          { label: 'Answer the door', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    scene.text('You go to the door and look through the peephole to see a dark male figure. "It\'s me. Grisha, the plumber. You owe me some money, remember?" he says through the door.');
    scene.actions([
      { label: 'Open the door', handler: (st: GameState) => {
    qspCall(s, 'money', 'pay', ((s as any).santehnikDolg ?? 0), 'desk');
    qspCall(s, 'stat', '');
    scene.text('You open the door and Grisha smiles. "I thought you were hiding from me. So, do you have my money?" You nod and pay him the money you owe.');
    scene.actions([
      { label: 'Close the door', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
    ]);
  } },
    ]);
  } },
        ]);
      }
      if (((s as any).BurgerQW ?? 0)?.['IlyQW'] === 1  &&  ((s as any).BurgerQW ?? 0)?.['IlyQWDay'] !== ((s as any).daystart ?? 0)  &&  ((s as any).hour ?? 0) >= 8  &&  ((s as any).hour ?? 0) < 21) {
        qspGoto(s, 'home_events', 'burgerIly1');
      } else {
        if (((s as any).BurgerQW ?? 0)?.['IlyQW'] === 3  &&  ((s as any).hour ?? 0) >= 9  &&  ((s as any).hour ?? 0) < 21) {
          qspGoto(s, 'home_events', 'burgerIly3');
        }
      }
      if (((s as any).gopstop ?? 0) > 30) {
        qspGoto(s, 'police', '1');
      }
      if (((s as any).sick ?? 0) > 0  &&  ((s as any).doktorday ?? 0) !== ((s as any).daystart ?? 0)) {
        scene.actions([
          { label: 'Call a doctor', goto: ['home_events', 'call_doctor1'] },
        ]);
      }
      if (((s as any).fightClubQW ?? 0)?.['story'] === 5  &&  ((s as any).week ?? 0) === 7  &&  ((s as any).hour ?? 0) === 19) {
        scene.text('<a href="#" onclick="window.__gameStore.getState().doGoto(\\u0027fightClub_intro\\u0027, \\u0027ride\\u0027); return false;">Sultan</a> shows up outside in a fancy BMW.');
      }
    }
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('livingroom') : -1) >= 0) {
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bedroom') : -1) >= 0) {
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('kitchen') : -1) >= 0) {
  }
  if ((Array.isArray((s as any).ARGS) ? ((s as any).ARGS as any[]).indexOf('bathroom') : -1) >= 0) {
    if (((s as any).loc ?? 0) === 'HotelRoom'  ||  ((s as any).loc ?? 0) === 'mey_home'  &&  qspFunc(s, 'homes_properties', 'can_live_here', 'mey_home')) {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetWashClothesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (qspFunc(s, 'homes_properties', 'can_live_here', ((s as any).loc ?? 0))) {
        if (((s as any).mc_inventory ?? 0)?.['laundry_soap'] <= 0) {
          scene.text('You have run out of washing powder for washing clothes.');
        } else {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterSetWashClothesAct(s, scene); (s as any).locArgs = __savedLocArgs; }
        }
      }
    }
  }
  scene.build();
}

function enterCallDoctor1(s: GameState, scene: SceneBuilder): void {
  (s as any).doktorday = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/apartment/event/sick/housecall.jpg');
  scene.text('You dial the number of the clinic several times, but it\'s always busy.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Keep trying', handler: (st: GameState) => {
    scene.text('Finally, a tired nurse\'s voice answers. "Hello, this is the clinic. How can I help you?"');
    scene.actions([
      { label: 'Ask for doctor', handler: (st: GameState) => {
    scene.text('"Hello. Can I get a house call?" you manage to say between coughing fits.');
    scene.text('"Your name and address, please?" she asks.');
    scene.actions([
      { label: 'Give your address', handler: (st: GameState) => {
    // TODO-QSP: dynamic text: You have a coughing fit before you're able to answer. "Sorry, it's <<$pcs_firstn...
    scene.text(`You have a coughing fit before you're able to answer. "Sorry, it's ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}. Street Park House 4, apartment 69," you manage before sneezing.`);
    scene.text('"One moment please," she responds before she puts you on hold.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You wait for five minutes, occasionally coughing and sneezing, until she finally...
    scene.text(`You wait for five minutes, occasionally coughing and sneezing, until she finally returns. "So Miss ${((s as any).pcs_lastname || '')}, what are your symptoms?"`);
    scene.text('You start to answer, but end up coughing. "Sorry. I have a fever, sore throat, a cough and a runny nose."');
    scene.text('"Is your temperature high?"');
    scene.text('"Yes, quite so. 39.2°C," you tell her, followed by a sneeze.');
    scene.text('"Very well. A doctor will come see you at home."');
    scene.text('"How soon?"');
    scene.text('"As soon as one is free," she answers. "Yours isn\'t an isolated case."');
    scene.text('"Thank you," you respond and hang up.');
    if (((s as any).ninelsex ?? 0) === 1) {
      scene.actions([
        { label: 'Is Ninel available?', handler: (st: GameState) => {
    scene.text('"Is Doctor Pavlovna available? She\'s my regular doctor."');
    scene.text('"Let me check." The nurse puts you on hold for a few minutes before returning. "Yes, she is free and will make the house call."');
    scene.text('"Once again, thank you very much," you reply and hang up.');
    scene.actions([
      { label: 'Continue', goto: ['housecall', 'ninel3'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Go back to bed', handler: (st: GameState) => {
    scene.img(`images/locations/shared/apartment/event/sick/sick${Math.floor(Math.random() * 7) + 21}.jpg`);
    (s as any).minut = ((s as any).minut ?? 0) + ((Math.floor(Math.random() * 6) + 1) * 30);
    scene.text('You lie in bed, shivering while wrapped in a blanket. Time drags by painfully slow and you can\'t say how much time passes before the doorbell rings.');
    scene.actions([
      { label: 'Answer the door', handler: (st: GameState) => {
    if (((s as any).ninelmet ?? 0) > 0  &&  ((s as any).sick ?? 0) <= 50) {
      qspGoto(s, 'housecall', 'ninel1');
    } else {
      if ((!(Math.floor(Math.random() * 2) + 0))) {
        qspGoto(s, 'home_events', 'call_doctor2');
      } else {
        qspGoto(s, 'housecall', 'ninel0');
      }
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

function enterCallDoctor2(s: GameState, scene: SceneBuilder): void {
  scene.text('You answer the door and an older, balding man with a medical bag in his hand is standing on the threshold.');
  scene.text('"Hello, doctor."');
  scene.text('"Hello, dear. I\'m the local doctor. Now please go back to bed and don\'t stand in this cold air."');
  // TODO-QSP: end
  (s as any).ninel0 = 'gt \'home_events\', \'ninel0\'';
  scene.actions([
    { label: 'Go back to bed', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/drpp1.jpg');
    scene.text('You walk back to the bedroom with the doctor. He sits on the edge of the bed and feels your forehead.');
    // TODO-QSP: dynamic text: "So Miss <<$pcs_lastname>>. What are your symptoms?
    scene.text(`"So Miss ${((s as any).pcs_lastname || '')}. What are your symptoms?`);
    scene.text('"Ahem… I have a sore throat - very sore actually - and a high temperature."');
    scene.text('"And a nasty cough too I see. And judging by your voice, also a running nose."');
    scene.text('"Yes… Aachoo!!"');
    scene.text('"Please remove your clothes so I can examine you."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/drpp2.jpg');
    scene.text('You undress and the doctor listens to your lungs for a while.');
    scene.text('"Now let\'s take a look at your throat. Open your mouth wide and say \'ahh\'."');
    scene.actions([
      { label: 'Aahh', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/drpp3.jpg');
    scene.text('You open your mouth and the doctor looks in.');
    scene.text('"Mmmm, I see. Well, let\'s take your temperature."');
    scene.actions([
      { label: 'Put the thermometer under your armpit', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/drpp4.jpg');
    scene.text('The doctor waits a few minutes, then looks at the thermometer and shakes his head.');
    scene.actions([
      { label: 'What\'s wrong with me?', handler: (st: GameState) => {
    scene.text('"You have the flu," he calmly replies. "Nothing too serious, I\'ll just give you an injection and you\'ll feel better soon. Stay in bed, drink plenty of fluids and try to rest as much as possible. Now please roll over so I can give you the injection."');
    scene.actions([
      { label: 'Roll over and lay on your stomach', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).sick = ((s as any).sick ?? 0) - (2);
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['antibiotics'] = ((s as any).mc_inventory['antibiotics'] ?? 0) + (3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/drpp5.jpg');
    scene.text('You whimper slightly as the doctor jabs a needle into your ass and injects the contents.');
    scene.text('"Now remember. Stay in bed, drink lots of fluids and try to rest. When you feel better, come by the clinic."');
    scene.text('"Thank you, Doctor, I will."');
    scene.text('You escort the doctor back to the entrance where he says goodbye and leaves. After shutting the door, you head back to bed.');
    scene.actions([
      { label: 'Go back to bed', goto: ['bedr', ''] },
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

function enterNinel0(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/shared/apartment/event/sick/ninel00.jpg');
  scene.text('You open the door and see a pretty young girl with a medical bag in her hand standing on the threshold.');
  scene.text('"Hello, my name is Ninel Pavlovna. I do the home visits for the clinic. Where is the patient?"');
  scene.text('"That would be me…"');
  scene.text('"I see. First, we need to get you back into bed."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go back to bed', handler: (st: GameState) => {
    (s as any).ninelmet = 1;
    scene.img('images/locations/shared/apartment/event/sick/nadom0.jpg');
    scene.text('Ninel sits on the edge of your bed and checks your forehead.');
    // TODO-QSP: dynamic text: "What are your symptoms, <<$pcs_nickname>>? Can I call you that?"
    scene.text(`"What are your symptoms, ${((s as any).pcs_nickname || '')}? Can I call you that?"`);
    scene.text('"Of course…" You start to answer, but end up coughing. "Sorry. I have a high fever, a sore throat and a cough that\'s killing me!"');
    scene.text('"Running nose? Headaches? Aching bones?"');
    scene.text('"Yes, all of them."');
    scene.text('"Please take your clothes off so I can examine you."');
    scene.actions([
      { label: 'Undress', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (10);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/nadom1.jpg');
    scene.text('You undress and Ninel listens to your lungs for a long time. Her hands are cool and gentle as she touches you, while the stethoscope is cold.');
    scene.text('"Mmmm, now let\'s take a look at your mouth. Open wide and say \'aah\'."');
    scene.actions([
      { label: 'Ahh', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/ninel03.jpg');
    scene.text('You open your mouth and she looks in, examining your sore throat.');
    scene.text('"I see. Your throat is very red and inflamed. Now we need to take your temperature.');
    scene.actions([
      { label: 'Put a thermometer in your mouth', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/ninel04.jpg');
    scene.text('"No, not like that. The temperature needs to be measured rectally."');
    scene.text('"What…?"');
    scene.text('"It\'s more precise. Don\'t be afraid, it\'s not painful."');
    scene.text('"Well if I have to…"');
    scene.text('"It\'s necessary. Come on, lie down on your stomach and spread your buttocks with your hands please."');
    scene.actions([
      { label: 'Change position', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom2.jpg');
    scene.text('You obediently roll over and spread your ass as Ninel lubricates your anus with some vaseline and deftly introduces the thermometer. You flinch, not from pain but pleasure. The doctor doesn\'t just stick the thermometer in your ass, but slowly moves it back and forth. It\'s very nice and you feel your excitement growing.');
    qspCall(s, 'arousal', 'anal_dildo', 10);
    qspCall(s, 'stat', '');
    if (((s as any).pcs_horny ?? 0) >= 50) {
      scene.actions([
        { label: 'Moan in pleasure', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom3.jpg');
    scene.text('The doctor takes the thermometer out of your ass and checks it.');
    scene.text('"39.2. Very bad. Please turn on your back, I need to palpate the lymph nodes."');
    scene.actions([
      { label: 'Roll over on your back', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom5.jpg');
    scene.text('The doctor begins to stroke and knead your stomach and thighs. You\'re not actually sure if this is a real medical procedure. She does it for far too long, but it\'s too pleasant and you don\'t object.');
    scene.text('Your excitement continues to grow and you feel your pussy moistening as you start to moan softly.');
    qspCall(s, 'arousal', 'foreplay', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Blush in embarrassment', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom6.jpg');
    scene.text('You blush with embarrassment, but then fall below the hands of Ninel as she starts caressing your pussy.');
    scene.text('"Doctor, what are you doing!" you scream, feeling embarrassed, outraged and frightened.');
    scene.text('"I feel the magic in you, which means you\'re one of us, and I can use my healing powers on you," she replies.');
    scene.text('"So you\'re a succubus too?!"');
    scene.text('"Yes, but only with a special kind of magic. Tantric. Have you heard of it?');
    scene.text('"No, I don\'t think so…"');
    scene.text('"It\'s based on sensuality and sex. Roughly speaking, I can only cast spells when having sex."');
    scene.text('"So…?"');
    scene.text('"That is, if I have sex with you, I will heal you. So? Do you agree?"');
    scene.text('"And what should I do in return?"');
    scene.text('"Nothing. I\'m doing it solely for my own satisfaction."');
    scene.text('"Then of course I agree."');
    qspCall(s, 'arousal', 'foreplay', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Surrender to the gentle hands of Ninel', goto: ['housecall', 'ninel2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Indignant', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom3.jpg');
    scene.text('"What the hell are you doing?!" you squeal.');
    scene.text('She takes the thermometer out of your ass. "I\'m measuring your temperature. 39.2. Very bad," she calmly replies.');
    scene.actions([
      { label: 'What\'s wrong with me?', handler: (st: GameState) => {
    scene.text('"Doctor, what\'s wrong with me?" you ask, somewhat scared.');
    scene.text('"You have a really bad flu, but I\'ll make you an injection of antibiotics and antigens and you\'ll soon feel better."');
    scene.actions([
      { label: 'Get injection', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    (s as any).sick = ((s as any).sick ?? 0) - (2);
    (s as any).lekar = ((s as any).lekar ?? 0) + (3);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/apartment/event/sick/nadom4.jpg');
    scene.text('You whimper slightly as Ninel jabs the needle into one of your ass cheeks and injects the contents.');
    scene.text('"That\'s about everything. You have to rest in bed, drink hot drinks, take antibiotics and nose drops and stay on a balanced diet. When your temperature drops, come to the clinic to see me."');
    scene.text('"Thank you, Doctor, I\'ll follow your instructions."');
    scene.text('Ninel smiles and says goodbye before leaving.');
    scene.actions([
      { label: 'Back to bed', goto: ['bedr', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'What\'s wrong with me?', handler: (st: GameState) => {
    scene.text('"Doctor, what\'s wrong with me?" you ask fearfully.');
    // TODO-QSP: dynamic text: "I'm afraid you have angina, <<$pcs_nickname>>. I would advise you receive immed...
    scene.text(`"I'm afraid you have angina, ${((s as any).pcs_nickname || '')}. I would advise you receive immediate treatment," she replies.`);
    scene.text('"What? You mean in the hospital?!" you shriek.');
    scene.text('"Yes, at the clinic," she calmly replies.');
    scene.actions([
      { label: 'Refuse', handler: (st: GameState) => {
    scene.text('"I can\'t go to the hospital!"');
    scene.text('She smiles at you. "Well… I guess we could do it a different way then. I\'ll give you a few shots to start with."');
    scene.text('"Oh thank you, doctor!"');
    scene.actions([
      { label: 'Lie on your stomach and bare your ass', handler: (st: GameState) => {
    scene.img('images/locations/shared/apartment/event/sick/nadom9.jpg');
    scene.text('The doctor jabs a needle into your ass cheek and you find yourself suddenly becoming incredibly aroused, your pussy growing wet and aching to be invaded as your breath quickens and your nipples grow hard with desire.');
    scene.text('"Doctor, what\'s happening?" you ask, almost screaming. You feel embarrassed and frightened, but your voice breaks, betraying your arousal, and you moan voluptuously.');
    scene.text('"I knew it! I can feel the magic in you, which means you\'re one of us, and I can use my healing powers on you."');
    scene.text('"So you\'re a succubus too?!"');
    scene.text('"Yes, but only with a special kind of magic. Tantric. Have you heard of it?"');
    scene.text('"No, I don\'t think so…"');
    scene.text('"It\'s based on sensuality and sex, roughly speaking, I can cast spells only while having sex."');
    scene.text('"So…?"');
    scene.text('"That\'s it. If we have sex, I will heal you. Do you agree?"');
    scene.text('"And what should I do in return?"');
    scene.text('"Nothing. I\'m doing it solely for my own satisfaction."');
    scene.text('"Then I agree."');
    qspCall(s, 'arousal', 'foreplay', 15);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Surrender to the gentle touch of Ninel', goto: ['housecall', 'ninel2'] },
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

function enterBurgerIly1(s: GameState, scene: SceneBuilder): void {
  scene.text('<b><font color = red>The doorbell rings</font></b>');
  // TODO-QSP: end
  scene.actions([
    { label: 'Answer the door', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You walk up to the door and look through the peephole. You see a few men, and ev...
    scene.text(`You walk up to the door and look through the peephole. You see a few men, and even in the dark, you recognize them from their caps. "${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}! This is the police, open up!"`);
    scene.actions([
      { label: 'Open the door', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQW'] = 2;
    qspCall(s, 'stat', '');
    scene.text('You open the door, wondering what they want from you. There are several men in uniform and others in civilian clothes. A lean and skinny man with with a weeks worth of stubble and a pistol in a holster slung under his armpit speaks to you. "Please take a seat while we search the apartment. This is a warrant for your arrest and this is a search warrant for your apartment. You can read them." The men start searching your apartment and a few minutes later, one of them reappears. "Here are the keys. According to the description, these look like the keys to the office and the safe where the money was stolen." The detective frowns at you and nods at the officer, who pulls your hands behind your back and snaps the handcuffs around your wrists.');
    scene.text('You\'re escorted out of the building in handcuffs and pushed into a police car. After the door slams shut, the car starts up and drives through the city streets until it stops outside the police station and you\'re pulled out and brought into an interview room where the dectective is waiting for you. He takes the handcuffs off you and offers you a seat. You sit in a hard and uncomfortable chair while the detective turns the TV on and inserts a video tape. On the screen is footage from a security camera in Bystroeshke showing you appear in the corridor and enter the office before exiting a few minutes later holding a thick envelope. The detective takes the tape out and inserts another one.');
    // TODO-QSP: dynamic text: It shows Chubais' office. The door opens and you walk in holding some keys. You ...
    scene.text(`It shows Chubais' office. The door opens and you walk in holding some keys. You go to the safe, open it with one of the keys and take the envelope with ${((s as any).BurgerQW ?? 0)?.['IlySecurityCamDesc'] ?? ''} written on it. The detective turns the TV off, picks up a plastic bag with the keys inside and finally speaks. "Tests prove that the keys found in your apartment are those to the office and the safe of Bystroezhki. The tapes from the surveillance cameras clearly show you entering the office and taking ${qspFunc(s, 'money', 'string_price', 650000)}." He takes out a pen and paper and begins to write. While writing, he looks up at you with gloomy eyes. "A confession will help you in the court. Since this is a first time offense and provided you return the money, you may be given a suspended sentence if you admit your guilt."`);
    scene.actions([
      { label: 'Sign the confession', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('You sign the confession and the detective signals for an officer, who enters the room as the detective nods in your direction. "Take her."');
    scene.actions([
      { label: 'Go with him', goto: ['kameraKPZ', ''] },
    ]);
  } },
      { label: 'Tell the truth', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    qspCall(s, 'stat', '');
    scene.text('You tell the detective what actually happened and how Ilyushkin framed you, but he barely listens to you before he slams his fist on the table and yells at you. "I wasn\'t born yesterday! If you will not cooperate, you\'ll rot in prison!" An officer then enters the room and the detective nods in your direction. "Take her."');
    scene.actions([
      { label: 'Go with him', goto: ['kameraKPZ', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBurgerIly3(s: GameState, scene: SceneBuilder): void {
  ((s as any).BurgerQW = (s as any).BurgerQW ?? {})['IlyQW'] = 4;
  if (qspFunc(s, 'money', 'can_afford', 650000) === 1) {
    qspCall(s, 'money', 'pay', 650000);
    (s as any).minut = ((s as any).minut ?? 0) + 120;
    qspCall(s, 'stat', '');
    scene.text('The police arrive and take you to court. You manage to pay off your debts and are released.');
    scene.actions([
      { label: 'Leave the courthouse', goto: ['city_center', ''] },
    ]);
  } else {
    (s as any).newdept = 590000 - (((s as any).money ?? 0) + (((s as any).karta ?? 0) - ((s as any).bankDebtLimit ?? 0)) + ((s as any).stolmoney ?? 0));
    qspCall(s, 'money', 'set', 0, 'cash');
    qspCall(s, 'money', 'set', 0, 'bank');
    qspCall(s, 'money', 'set', 0, 'desk');
    (s as any).vidage = ((s as any).vidage ?? 0) + (7);
    (s as any).year = ((s as any).year ?? 0) + (5);
    (s as any).age = ((s as any).year ?? 0) - (((s as any).pcs_dob ?? 0) / 10000);
    qspCall(s, 'money', 'earn', 2000, 'cash');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: The police arrive and take you to court. After standing trial, you're given five...
    scene.text(`The police arrive and take you to court. After standing trial, you're given five years of jail time and are required to pay your debt of ${((s as any).newdept || '')}.`);
    scene.text('This can be done at any bank after you have served your jail time.');
    scene.actions([
      { label: 'Serve your time', handler: (st: GameState) => {
    (s as any).srok_kolvo = 1;
    (s as any).srok_otsidki = ((s as any).srok_otsidki ?? 0) + (5);
    ((s as any).pcs_mass = (s as any).pcs_mass ?? {})['body'] = 10;
    (s as any).fat = 10;
    if ((!((s as any).defcurly ?? 0))) {
      (s as any).curly = 0;
    } else {
      (s as any).curly = 2147483647;
    }
    (s as any).straight = 0;
    (s as any).pcs_makeup = 1;
    (s as any).pcs_skin = 0;
    (s as any).pcs_tan = 0;
    (s as any).pcs_leghair = 12;
    (s as any).pcs_pubes = 30;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_addict'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['cocaine_system'] = 0;
    ((s as any).drugVars = (s as any).drugVars ?? {})['heroin_need'] = 0;
    (s as any).tanwork = 0;
    (s as any).preg = 0;
    qspCall(s, 'jobs', 'terminate_all_jobs');
    qspCall(s, 'uniutil', 'student', 'unenroll');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: Time drags on slowly. Your life and work are tedious and monotonous. You sew, ha...
    scene.text(`Time drags on slowly. Your life and work are tedious and monotonous. You sew, have meals in the dining room and go to sleep surrounded by other female inmates. ${qspFunc(s, 'money', 'string_profit', 1000)} of your ${qspFunc(s, 'money', 'string_profit', 2000)} per month salary goes towards your debt repayment.`);
    // TODO-QSP: dynamic text: As slow as it seems, time doesn't stand still and your torment finally comes to ...
    scene.text(`As slow as it seems, time doesn't stand still and your torment finally comes to an end. You're released and given ${qspFunc(s, 'money', 'string_profit', 2000)}. You board the train and return to the city.`);
    scene.actions([
      { label: 'Get off the train', goto: ['city_industrial_train', 'outside'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterNatbel(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'There\'s an urgent knocking on your front door', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha60.jpg');
    scene.text('You hear someone knocking on your front door and go to see who it is.');
    scene.text('As you reach the door you are faced with a clearly distraught Natasha who starts talking very fast and is very emotional so you can\'t really make out what she\'s saying. "Natasha, take a breath; I can\'t understand what you\'re saying. What\'s wrong?"');
    // TODO-QSP: dynamic text: She takes a deep breath then tells you. "It's my <<$npc_nickname['A29']>>. She w...
    scene.text(`She takes a deep breath then tells you. "It's my ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. She went out with a guy from work and I got a call from the bartender at Del Parco saying that she and the guy had a massive row and then she's got very drunk and passed out. I don't know what to do, can you help me get her home please as I probably won't manage by myself?"`);
    scene.actions([
      { label: 'Go and help', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha61.jpg');
    // TODO-QSP: dynamic text: Feeling that you have little choice you grab your coat and head out with Natasha...
    scene.text(`Feeling that you have little choice you grab your coat and head out with Natasha to help her get ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''} home.`);
    // TODO-QSP: dynamic text: "I'm so sorry about this <<$pcs_nickname>>, I know she likes a drink but doesn't...
    scene.text(`"I'm so sorry about this ${((s as any).pcs_nickname || '')}, I know she likes a drink but doesn't normally get this bad. I guess something happened with this guy to trigger it."`);
    scene.text('You reassure her. "Don\'t worry about it and I guess we\'ll all need someone to help us in similar circumstances at some point during our lives."');
    // TODO-QSP: dynamic text: On arriving you spot <<$npc_usedname['A191']>> slumped over the bar and go to he...
    scene.text(`On arriving you spot ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''} slumped over the bar and go to help her home.`);
    scene.text('As you both take hold of her she starts mumbling and slurring. You can\'t make out a lot of it other than she had a date with a guy she fancied and they had a big argument following which she spent the rest of the evening drowning her sorrows.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Put ' + String(((s as any).npc_usedname ?? 0)?.['A191'] ?? '' ?? '') + ' to bed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['Isabella'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images\\locations\\pavlovsk\\resident\\apartment\\natbelapt/natmomsleep3.jpg');
    // TODO-QSP: dynamic text: When you get back you both sit <<$npc_usedname['A191']>> on her bed and get her ...
    scene.text(`When you get back you both sit ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''} on her bed and get her undressed leaving her in her underwear.`);
    scene.text('Before lying her down you tell Natasha to get some water and give it to her to drink.');
    scene.text('The walk home and the water has helped sober her up a bit and although she\'s still slurring she apologises and thanks you for helping Natasha get her home as well as having another rant about her failed date.');
    scene.text('Once she finished her water she lies down and immediately falls asleep.');
    // TODO-QSP: dynamic text: Natasha gives you a big hug as a silent thank you before you leave <<$npc_usedna...
    scene.text(`Natasha gives you a big hug as a silent thank you before you leave ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''}'s bedroom. "Okay Natasha I guess you can take it from here so I'll get home as it's getting late."`);
    scene.text('She sees you to the door and you share a kiss before you leave to return home.');
    scene.actions([
      { label: 'Stop talking', goto: ['pod_ezd', 'etaj_2'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterNatbelPav(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'There\'s an urgent knocking on your front door', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha60.jpg');
    // TODO-QSP: dynamic text: You hear someone knocking on your front door and go to see who it is but your <<...
    scene.text(`You hear someone knocking on your front door and go to see who it is but your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} has already answered it and is talking to Natasha.`);
    // TODO-QSP: dynamic text: As you approach your <<$npc_nickname['A29']>> turns to you. "<<$pcs_nickname>>, ...
    scene.text(`As you approach your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} turns to you. "${((s as any).pcs_nickname || '')}, it's your girlfriend! There's a problem with her ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} and she needs your help. Just don't stay out too late." She then turns away and doesn't look happy; unsurprising really but it could have been worse you think.`);
    scene.text('As you reach the door you are faced with a clearly distraught Natasha who starts talking very fast and is very emotional so you can\'t really make out what she\'s saying. "Natasha, take a breath; I can\'t understand what you\'re saying. What\'s wrong?"');
    // TODO-QSP: dynamic text: She takes a deep breath then tells you. "It's my <<$npc_nickname['A29']>>. She w...
    scene.text(`She takes a deep breath then tells you. "It's my ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}. She went out with a guy from work and I got a call from the bartender at Del Parco saying that she and the guy had a massive row and she's got very drunk and passed out. I don't know what to do, can you help me get her home please as I probably won't manage by myself?"`);
    scene.actions([
      { label: 'Go and help', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 40;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/girl/natasha/events/bullied/natasha61.jpg');
    // TODO-QSP: dynamic text: Feeling that you have little choice you grab your coat and head out with Natasha...
    scene.text(`Feeling that you have little choice you grab your coat and head out with Natasha to help her get ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''} home.`);
    // TODO-QSP: dynamic text: "I'm so sorry about this <<$pcs_nickname>>, I know she likes a drink but doesn't...
    scene.text(`"I'm so sorry about this ${((s as any).pcs_nickname || '')}, I know she likes a drink but doesn't normally get this bad. I guess something happened with this guy to trigger it."`);
    scene.text('You reassure her. "Don\'t worry about it and I guess we\'ll all need someone to help us in similar circumstances during our lives."');
    // TODO-QSP: dynamic text: On arriving you spot <<$npc_usedname['A191']>> slumped over the bar and go to he...
    scene.text(`On arriving you spot ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''} slumped over the bar and go to help her home.`);
    scene.text('As you both take hold of her she starts mumbling and slurring. You can\'t make out a lot of it other than she had a date with a guy she fancied and they had a big argument following which she spent the rest of the evening drowning her sorrows.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Put ' + String(((s as any).npc_usedname ?? 0)?.['A191'] ?? '' ?? '') + ' to bed', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    ((s as any).NatbelQW = (s as any).NatbelQW ?? {})['Isabella'] = 1;
    qspCall(s, 'stat', '');
    scene.img('images\\locations\\pavlovsk\\resident\\apartment\\natbelapt/natmomsleep3.jpg');
    // TODO-QSP: dynamic text: When you get back you both sit <<$npc_usedname['A191']>> on her bed and get her ...
    scene.text(`When you get back you both sit ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''} on her bed and get her undressed leaving her in her underwear.`);
    scene.text('Before lying her down you tell Natasha to get some water and give it to her to drink.');
    scene.text('The walk home and the water has helped sober her up a bit and although she\'s still slurring she apologises and thanks you for helping Natasha get her home as well as having another rant about her failed date.');
    scene.text('Once she finished her water she lies down and immediately falls asleep.');
    // TODO-QSP: dynamic text: Natasha gives you a big hug as a silent thank you before you leave <<$npc_usedna...
    scene.text(`Natasha gives you a big hug as a silent thank you before you leave ${((s as any).npc_usedname ?? 0)?.['A191'] ?? ''}'s bedroom. "Okay Natasha I guess you can take it from here so I'll get home as it's getting late."`);
    scene.text('She sees you to the door and you share a kiss before you leave to return home.');
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Your ' + String(((s as any).npc_nickname ?? 0)?.['A29'] ?? '' ?? '') + ' is waiting for you', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.img('images\\characters\\pavlovsk\\resident\\mom\\prost2.jpg');
    // TODO-QSP: dynamic text: When you arrive back your <<$npc_nickname['A29']>> is waiting for you and calls ...
    scene.text(`When you arrive back your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} is waiting for you and calls you into the kitchen. "Well ${((s as any).pcs_nickname || '')} so I guess that's your girlfriend then?"`);
    // TODO-QSP: dynamic text: You nod to confirm as your <<$npc_nickname['A29']>> continues. "Well despite the...
    scene.text(`You nod to confirm as your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} continues. "Well despite the circumstances she seems a nice polite girl. Erm… I guess that the issue with her ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} was drink related."`);
    scene.text('Before you can answer she continues. "Before you ask me why I said that I\'m aware of her circumstances; she had a terrible breakup with her husband and now works in a factory so she doesn\'t have too much in the way of a good life. All that being said she\'s clearly done a good job bringing Natasha up despite her circumstances."');
    // TODO-QSP: dynamic text: Unsure of what to reply you smile at your <<$npc_nickname['A29']>>
    scene.text(`Unsure of what to reply you smile at your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''}`);
    // TODO-QSP: dynamic text: Your <<$npc_nickname['A29']>> gives you a short hug then continues. "Well I gues...
    scene.text(`Your ${((s as any).npc_nickname ?? 0)?.['A29'] ?? ''} gives you a short hug then continues. "Well I guess what I'm trying to say is that although I don't approve of you being with a girl as I was hoping you may find a nice man, however, I do approve of you being good friends with Natasha. Guess I'll have to work on my prejudice if you two stay together as, I do love you and want the best for you ${((s as any).pcs_nickname || '')}. Anyway I'm rambling and it's getting late now so off you go." She says with a smile.`);
    scene.actions([
      { label: 'Stop talking', goto: ['bedrPar', ''] },
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

function enterSetWashClothesAct(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'washer', 'check_total_items');
  if (((s as any).washer_total_wash_count ?? 0) > 0) {
    (s as any).wash_time = Math.min(30 + 5 * (((s as any).washer_total_wash_count ?? 0) / 5), 120);
    // TODO-QSP: dynamic "
    // TODO-QSP: "
    scene.actions([
      { label: '', labelFn: (s: GameState) => 'Wash clothes (' + String(((s as any).wash_time ?? '') / 60 ?? '') + ':' + String((String(100 + ((s as any).wash_time ?? '') % 60).slice((2)-1, ((2)-1)+(2))) ?? '') + ')', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + (((s as any).wash_time ?? 0));
    ((s as any).mc_inventory = (s as any).mc_inventory ?? {})['laundry_soap'] = ((s as any).mc_inventory['laundry_soap'] ?? 0) - (1);
    qspCall(s, 'stat', '');
    qspGoto(s, 'home_events', 'wash_clothes');
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterWashClothes(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'washer', 'wash_all');
  scene.img('images/locations/city/residential/apartment/stir.jpg');
  scene.text('You wash all your clothes');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue', handler: (st: GameState) => {
    dynamicGoto(st, 'prevLoc', 'prevArg');
  } },
  ]);
  scene.build();
}

function enterGoHomeNakedPre(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'stat', '');
  scene.img('images/shared/sex/public/streaking1.mp4');
  scene.text('You cover yourself up as best as you can and dash into the woods, using them as cover to get as close as you can to your apartment. Luckily, no one spots you, but now you\'re at the edge of the woods and have the difficult task of actually making it to the building without being seen.');
  qspCall(s, 'willpower', 'exhib', 'self');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Run for it', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Run for it', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 7;
    qspCall(s, 'fame', 'pav', 'sex', 5);
    (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (Math.floor(Math.random() * 3) + 2);
    if (((s as any).month ?? 0) < 3  ||  ((s as any).month ?? 0) === 12) {
      scene.img('images/locations/pavlovsk/naked/runhomenakedw.jpg');
    } else {
      scene.img('images/locations/pavlovsk/naked/runhomenaked.jpg');
    }
    scene.text('You decide to just get this over with and make a run for it. You use your hands to cover yourself as best as you can and look away from people, but you sometimes have to use your hands to cover your face so no one recognizes you, exposing yourself. Several people gasp and more than a few people, mostly older women, chastise you. Some men whistle and more than a few people take your picture; you really hope none of them show your face. After what seems like an eternity, you finally make it home.');
    qspCall(s, 'arousal', 'flash', 3, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Run home', goto: ['home_events', 'go_home_naked'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Sneak home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 20;
    qspCall(s, 'fame', 'pav', 'sex', 2);
    scene.img('images/locations/pavlovsk/naked/sneakhomenaked.jpg');
    scene.text('You decide that it would be better to take your time and sneak home, doing your best to not be seen. You use your hands to cover yourself as best you can and use cover as often as you can. You hide behind trees and parked cars, duck down alleyways and when that doesn\'t work, you are forced to wait until you don\'t see anyone and dart across open stretches of ground. Once or twice you think someone might have seen you, but all you can do is hope that you weren\'t recognized. After what seems like an eternity, you finally make it home.');
    qspCall(s, 'arousal', 'flash', 10, 'exhibitionism');
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Sneak home', goto: ['home_events', 'go_home_naked'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterGoHomeNaked(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  (s as any).inhib_exp = ((s as any).inhib_exp ?? 0) + (4);
  qspCall(s, 'arousal', 'flash', 5);
  qspCall(s, 'stat', '');
  (s as any).temp_rand = Math.floor(Math.random() * 2) + 1;
  if (((s as any).temp_rand ?? 0) === 1) {
    scene.img('images/locations/pavlovsk/resident/apartment/events/nakedcourt.jpg');
    scene.text('With purse in hand, you look around in hope that your clothes are nearby, but quickly realize they\'re not and there\'s nothing you can see to cover up with. Covering yourself with your hands as best you can, you make your way to your building. Hoping not to run into anyone, you stick to the shadows and out of the way to hide your naked body as best you can.');
  } else {
    scene.img('images/locations/pavlovsk/naked/complexnaked.jpg');
    scene.text('There are several older women sitting out front of your building, so you make your way round to the back of the complex near the garages, you stop a moment to peek around one of the buildings. Not seeing anyone, you dart from one building to the next, leaving just the small courtyard behind your building to cross. You peek around a building and see a few people there, you keep yourself hidden as you wait, finally they move off and you rush across the courtyard and into the back door of the apartment building.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go inside', handler: (st: GameState) => {
    if (((s as any).home ?? 0)?.['location'] === 'pav_complex') {
      qspCall(s, 'arousal', 'end');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/resident/apartment/events/nakedhall1.jpg');
      scene.text('Once you\'re near the apartment door with nowhere to hide, you quickly dash over to the door and pray no one is inside. You quickly head inside and see and hear no one. Breathing a sigh of relief, you glance up the stairs. Seeing no one, you quickly head upstairs.');
      scene.actions([
        { label: 'Go upstairs', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).nakedrand = Math.floor(Math.random() * 10) + 1;
    if (((s as any).nakedrand ?? 0) === 1) {
      qspGoto(s, 'pav_aptcourtev', 'two_boys');
    } else {
      if (((s as any).nakedrand ?? 0) === 2) {
        qspGoto(s, 'pav_aptcourtev', 'misha');
      }
    }
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nakedhall2.jpg');
    scene.text('When you\'re almost to the top of the stairs to your floor you hear voices. You freeze and look back down the stairs, tempted to bolt back down them, but then the voices fade and you hear a door close. You sneak slowly up the stairs, glancing down the hall to make sure no one is around as you head for your apartment.');
    scene.actions([
      { label: 'Go home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/resident/apartment/events/nakedhome.jpg');
    scene.text('Finally, you make it to your door. You take the keys out of your purse and quietly unlock the door, pushing it open slowly and peeking inside. You don\'t see anyone.');
    if (((s as any).hour ?? 0) <= 21) {
      scene.text('You sneak down the hall, peeking in to see your stepfather and brother in the living room watching TV. Once you\'re sure they\'re not looking, you quickly walk down to the kitchen. Peeking in, you see your mother with her back to you, so you quickly dash past and go into the bathroom. Once there, you quickly grab a towel and wrap it around your body. You then head into your room, like you just came from taking a shower. Laying on your bed is your clothes, the girls having apparently dropped them off. How nice of them…');
    } else {
      scene.text('You glance in the living room and see your brother sound asleep on the couch. You quickly walk down past the empty kitchen and into the bathroom. Once inside, you wrap a towel around your body and head for your bedroom, as if you had just taken a shower. Laying on your bed is your clothes, the girls having apparently dropped them off. How nice of them…');
    }
    scene.text('Anya glances up at you. "Hey, one of your friends dropped off some clothes. She said you let her borrow them. Anyway, they\'re on your bed."');
    scene.actions([
      { label: 'Continue', goto: ['bedrPar', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      qspCall(s, 'arousal', 'flash', (-5));
      qspCall(s, 'arousal', 'end');
      (s as any).minut = ((s as any).minut ?? 0) + 1;
      scene.img('images/locations/pavlovsk/naked/aptstairsnaked.jpg');
      scene.text('Once inside, you sigh in relief. Taking a look around, you glance up the stairs and then slowly start creeping up them, hoping no one suddenly comes out of their apartment or comes down the stairs.');
      qspCall(s, 'stat', '');
      scene.actions([
        { label: 'Sneak to your apartment', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 22;
    scene.img('images/locations/pavlovsk/naked/homedoornaked.jpg');
    scene.text('You make it to your door and fish your keys out of your purse. You unlock the door and slip inside, closing the door behind you before you rush down the hall to your bedroom.');
    scene.actions([
      { label: 'Stay home', handler: (st: GameState) => {
    // TODO-QSP: gt $home['bedroom'], $home['bedroom_arg']
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'call_doctor1':
      enterCallDoctor1(s, scene);
      break;
    case 'call_doctor2':
      enterCallDoctor2(s, scene);
      break;
    case 'ninel0':
      enterNinel0(s, scene);
      break;
    case 'burgerIly1':
      enterBurgerIly1(s, scene);
      break;
    case 'burgerIly3':
      enterBurgerIly3(s, scene);
      break;
    case 'natbel':
      enterNatbel(s, scene);
      break;
    case 'natbel_pav':
      enterNatbelPav(s, scene);
      break;
    case 'set_wash_clothes_act':
      enterSetWashClothesAct(s, scene);
      break;
    case 'wash_clothes':
      enterWashClothes(s, scene);
      break;
    case 'go_home_naked_pre':
      enterGoHomeNakedPre(s, scene);
      break;
    case 'go_home_naked':
      enterGoHomeNaked(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const home_events: LocationDef = {
  name: 'home_events',
  title: 'A heavy envelope has arrived in the mail. When you open it, ',
  region: 'other',
  description: ['A heavy envelope has arrived in the mail. When you open it, you\'re horrified to find several pictures of you giving blowjobs to the guys in the park inside. A small note accompanying them says:'],
  enter: enter,
};
