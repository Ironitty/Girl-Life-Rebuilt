import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'core_library', 'setloc', 'Terminal', '');
  qspCall(s, 'stat', '');
  scene.text('<center><b>Storage terminal</b></center>');
  scene.img('images/locations/city/industrial/terminal/terminal0.jpg');
  scene.text('A large shipping center with many on and off load truck ports.');
  if (((s as any).trfatherQW ?? 0) === 4  &&  ((s as any).trfatherQW ?? 0)?.['day'] !== ((s as any).daystart ?? 0)  &&  ((s as any).week ?? 0) >= 6  &&  ((s as any).hour ?? 0) >= 12  &&  ((s as any).hour ?? 0) < 14) {
    scene.text('Near one of the dirty trucks is your <a href="exec:trfatherQW[\'day\'] = daystart & gt \'trFatherMisha\'">father</a>.');
  }
  if (((s as any).trfatherQW ?? 0) === 2) {
    scene.actions([
      { label: 'Search for father', goto: ['Terminal', 'searchfather'] },
    ]);
  } else {
    if ((((s as any).trfatherQW ?? 0) >= 3  ||  ((s as any).trfatherQW ?? 0) < 0)  &&  ((s as any).week ?? 0) === 6  &&  ((s as any).hour ?? 0) === 12) {
      // TODO-QSP: act iif(trfatherQW = 3, 'Search for father', 'Approach the men'):
      scene.actions([{ label: 'Continue', goto: ['Terminal', 'search_approach_men'] }]);
    }
  }
  // TODO-QSP: end
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
    { label: 'Go to the office', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).AboutBussines = 0;
    (s as any).AboutDocs = 0;
    (s as any).AboutDocsManager = 0;
    (s as any).YouNotOpenDoorDir = 0;
    (s as any).YouNotOpenDoorBuh = 0;
  }, goto: ['TerminalOffice', '00'] },
  ]);
  scene.build();
}

function enterAskfather(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/mikhail/terminal/trfatherqw_9.jpg');
  scene.text('"I want to ask you, Do you know where can I find a trucker named Mikhail Kuznetsov?"');
  scene.text('"Of course we know him girl, great guy by the way, he is right there around the corner".');
  scene.text('"Thank you very much." you went to meet your father.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go to your father', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    if (((s as any).cumloc ?? 0)[11] === 1) {
      scene.img('images/characters/city/mikhail/sex/trfatherqw_13.jpg');
      scene.text('You went to your father but forgot about the semen smeared on your face.');
      scene.text('You tell him who you are and his eyes widen as rage builds within him.');
      scene.text('"You fucking whore, Get fuck out of here, go back to your slut of a mother."');
      scene.text('You feel very ashamed and realize looking for your father has been a terrible mistake as you have blown any hope of ever building a relationship with him.');
      (s as any).trfatherQW = (-1);
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
      ]);
    } else {
      scene.img('images/characters/city/mikhail/terminal/trfatherqw_14.jpg');
      scene.text('"Hello, are you Mikhail Kuznetsov?"');
      scene.text('"Yes, that\'s me. Are you from the control room? Did something happen? Did someone call about my driving? I am careful on the roads."');
      // TODO-QSP: dynamic text: "No no, I am <<$pcs_nickname>> <<$pcs_lastname>>, your daughter.
      scene.text(`"No no, I am ${((s as any).pcs_nickname || '')} ${((s as any).pcs_lastname || '')}, your daughter.`);
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>? Hell, my daughter? Is it really you?"
      scene.text(`"${((s as any).pcs_nickname || '')}? Hell, my daughter? Is it really you?"`);
      scene.text('Your father breaks down in tears, looking into your eyes, and recognizing his facial features in you, he quickly grabs you and pulls you into a hug, with his oily hands wrapped around you, both of you cry happily.');
      scene.actions([
        { label: 'Hug', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_15.jpg');
    scene.text('Still hugging your father and say to him, "At lastly, I finally found you, Now I will never lose again."');
    scene.text('Your father looks at you, as if not believing you\'re really here. "I can\'t believe my little girl is all grown up."');
    scene.text('He insists you come to lunch with him to catch up.');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell him off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell him off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/sisboyqw_37.jpg');
    scene.text('You swear at him, curse him and pour out all your anger for all those years he was never around, once you are done and tears streaming down your face, you turn and run away. Never giving him a chance to reply, swearing to never return.');
    (s as any).trfatherQW = (-1);
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Get a kebab', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (!(s as any).trfatherQW) (s as any).trfatherQW = {}; (s as any).trfatherQW['day'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_17.jpg');
    scene.text('Sitting at the table, you order food and drinks, and dad starts asking you about everything.');
    scene.text('You reply to his questions with enthusiasm and talk about yourself, what you do, where go to school. Talk about Anya, that she did not go to the university, and works as a salesgirl in the supermarket.');
    scene.text('You tell him about your mother, she remarried, and you now have a stepfather and half brother Kolka…');
    // TODO-QSP: dynamic text: After talking for a while your father says. "<<$pcs_nickname>> I have to go, I h...
    scene.text(`After talking for a while your father says. "${((s as any).pcs_nickname || '')} I have to go, I have a schedule to keep. I am here on weekends 12 00 to 14 00, I would be happy if you would visit me sometimes." With that he gets up, pays for lunch and kisses you on the cheek goodbye.`);
    (s as any).trfatherQW = 4;
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_industrial', ''] },
    ]);
  } },
    ]);
  } },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterSearchfather(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/industrial/terminal/trfatherqw_2.jpg');
  scene.text('You are inside the large trucking warehouse, you find it hard to find your way around but finally spy the managers office and a couple of men standing by a truck.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Ask the Manager', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).trfatherQW = 3;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/terminal/trfatherqw_3.jpg');
    scene.text('You go up to the managers office. "Good afternoon! What I can help you?" he says.');
    scene.text('"Hello, I wanted to know, if you know a Mikhail Kuznetsov or if he works here?"');
    // TODO-QSP: dynamic text: He turns to his computer and pulls something up. "I'll check in our database, ye...
    scene.text('He turns to his computer and pulls something up. "I\'ll check in our database, yes, we have a driver by that name. He is on the road right now and only comes in on Saturday at 12:00."');
    scene.text('"Thank you very much, you helped me a lot." With that you leaved but now you know when and where to find him.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
    ]);
  } },
    { label: 'Approach the men', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/city/industrial/terminal/trfatherqw_4.jpg');
    scene.text('You walk up to the two men, They smile as you walk up.');
    scene.text('"Hello girly, want to earn some quick cash?"');
    scene.text('"No, thank you, I\'m here looking for a man, I need your help."');
    scene.text('"Well if you want our help, how about you help us first. Use that cute little mouth of yours for something other than asking questions first and then we will tell you what you want to know."');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Tell them to fuck off', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Tell them to fuck off', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_5.jpg');
    scene.text('"Go fuck yourselves you disgusting perverts."');
    scene.text('You left them to find your answers elsewhere.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Suck them off', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'unknown');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_6.jpg');
    scene.text('If they know where your father is, why not, it\'s not like you haven\'t sucked plenty of cock before.');
    scene.text('The first man invited you into the cabin of his truck, he gets comfortable and pulls out his dick.');
    scene.text('You quickly take his dick into your mouth and suck him, until he shoots his load into your mouth. "Good girl, now wait here while I get my friend."');
    scene.text('He gets out of the truck and you wait for the other man.');
    scene.actions([
      { label: 'Wait', handler: (st: GameState) => {
    (s as any).pcs_horny = ((s as any).pcs_horny ?? 0) + (5);
    (s as any).guy = ((s as any).guy ?? 0) + (1);
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'unknown');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), '', '', 20000, 20);
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0), '', '', 20000, 20);
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_7.jpg');
    scene.text('He climbs in almost at once, at least you didn\'t have long to wait.');
    scene.text('You quickly suck his dick as well, he doesn\'t even last as long as the last guy. Unlike the previous guy, he pulls your head off his dick just before he cums and shoots his sperm all over your face instead.');
    scene.actions([
      { label: 'Get out of the cab', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    (s as any).trfatherQW = 3;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_8.jpg');
    scene.text('You got out of the truck with sperm all over your face.');
    scene.text('"So, What did you want to know?" The first man asked.');
    scene.text('"I wanted you to know, whether you know a Mikhail Kuznetsov?"');
    // TODO-QSP: dynamic text: "Aaa, Micah, Sure, great guy, he is out on a run. He will be back Saturday at '+...
    scene.text('"Aaa, Micah, Sure, great guy, he is out on a run. He will be back Saturday at 12:00."');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
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

function enterSearchApproachMen(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/characters/city/mikhail/terminal/trfatherqw_9.jpg');
  scene.text('You go to a group of men, drinking, laughing and talking loudly.');
  scene.text('Approaching them, their eyes immediately turned to you.');
  scene.text('"Hello, beauty, you want to have a drink with us?');
  if (((s as any).trfatherQW ?? 0) === 3) {
    scene.actions([
      { label: 'Ask about father', goto: ['Terminal', 'askfather'] },
    ]);
  }
  qspCall(s, 'willpower', 'drink', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'beer');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_10.jpg');
    scene.text('You decided to sit down and drink with them, maybe if you are nice they will help you out. As you sat down, they immediately gave you a bottle of beer.');
    scene.text('Truckers told different stories, gradually more and more openly and frankly.');
    scene.text('They shared stories of fuck whores and married women on the road in the cockpits of their trucks.');
    if (((s as any).trfatherQW ?? 0) === 3) {
      scene.actions([
        { label: 'Ask about father', goto: ['Terminal', 'askfather'] },
      ]);
    }
    qspCall(s, 'willpower', 'drink', 'resist', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
      ]);
    }
    scene.actions([
      { label: 'Drink', handler: (st: GameState) => {
    qspCall(s, 'drugs', 'alcohol', 'vodka');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/terminal/trfatherqw_11.jpg');
    scene.text('You finished your beer and at once they hand you a bottle of vodka.');
    scene.text('The bottle is passed around, yet you seem to always have it back in your hand faster than anyone else.');
    scene.text('Before long you are completely drunk, one of them says. "Well, slut you ready, to pay us back for our booze." before you can even answer another one grabs you from behind putting his hand over your mouth and starts to drag you off, while others grab your arms and legs, lifting you up. The quickly carry you into a dark area of the warehouse.');
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'gangbang');
    qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'bj', 5, 'gangbang');
    qspCall(s, 'cum_call', 'face', ((s as any).boy ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'gangbang');
    qspCall(s, 'cum_call', 'anal', ((s as any).boy ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'cum_call', '', '', ((s as any).boy ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'vaginal', 5, 'gangbang');
    qspCall(s, 'cum_call', 'breasts', ((s as any).boy ?? 0));
    qspCall(s, 'npcgeneratec', '', 0, 'warehouseman', Math.floor(Math.random() * 28) + 18);
    qspCall(s, 'boyStat', '', ((s as any).npclastgenerated ?? 0));
    qspCall(s, 'arousal', 'anal', 5, 'gangbang');
    qspCall(s, 'cum_call', 'butt', ((s as any).boy ?? 0));
    qspCall(s, 'arousal', 'end');
    qspCall(s, 'stat', '');
    scene.img('images/characters/city/mikhail/sex/trfatherqw_12.jpg');
    scene.text('You are barely aware of what they are doing, they quickly strip you naked. Soon you feel a dick being pushed inside or your pussy and ass at the same time.');
    scene.text('The only time a hand is not covering your mouth is when there is a dick in it. Each of them seems to take multiple turns on all of your holes, with them switching so much, you completely lose track of how many men are even using you. By the time the start to finish, all you know is all three of your holes are acheing from being roughly used by the large gang of men around you.');
    scene.text('When they finally all finish and leave, laughing. You feel cum leaking from all of your holes, as well as covering nearly every part of you body.');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['Terminal', ''] },
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
    case 'askfather':
      enterAskfather(s, scene);
      break;
    case 'searchfather':
      enterSearchfather(s, scene);
      break;
    case 'search_approach_men':
      enterSearchApproachMen(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const Terminal: LocationDef = {
  name: 'Terminal',
  title: 'Storage terminal',
  region: 'other',
  locationType: 'public_outdoors',
  description: ['A large shipping center with many on and off load truck ports.'],
  enter: enter,
};
