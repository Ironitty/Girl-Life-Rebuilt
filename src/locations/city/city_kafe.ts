import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).kafe_food = (((s as any).pcs_ate ?? 0) + ((s as any).pcs_drank ?? 0));
  if (((s as any).sound_settings ?? 0)?.['environment_off'] === 0) {
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'kit_din', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/kafe.jpg');
  scene.text('The Roadhouse is decorated with bright neon signs, pictures of flashy American muscle cars and pop art. There\'s even the body of an old pink Cadillac hanging from the ceiling, like something from an old American TV show.');
  scene.text('Although it looks small and cramped from the outside, the Roadhouse is surprisingly spacious inside, managing to fit a well-stocked bar and a moderately-sized dining area alongside several private booths tucked away in the corners.');
  scene.text('A large, flashy jukebox features popular hits from the 50s through to the 80s, mostly American and British, but with a sprinkling of songs from other European countries. They serve American style meals.');
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === '') {
    scene.text('You see the middle-aged owner of the diner sitting at the end of the bar, engrossed in paperwork.');
  } else {
    if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'terminated'  ||  ((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'fired') {
      scene.text('You see Fabi sitting at one end of the bar, engrossed in paperwork.');
    } else {
      if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
        scene.text('There is a bustle of activity in the diner as Fabi notes in the log that you arrived for work on time, Ashot and Nika ready the kitchen for the day and Marisha bustles from table to table making sure everything is ready to receive patrons.');
      } else {
        scene.text('You see Fabi sitting at one end of the bar, engrossed in paperwork.');
      }
    }
  }
  if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === ''  &&  (qspFunc(s, 'jobs', 'check_employment_possible', 'city_cafe_waitress') === 1)) {
    scene.actions([
      { label: 'Talk to the owner about a job', goto: ['city_kafe', 'fabi'] },
    ]);
  } else {
    if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'terminated'  &&  (qspFunc(s, 'jobs', 'check_employment_possible', 'city_cafe_waitress') === 1)) {
      scene.actions([
        { label: 'Talk to Fabi about getting your old job back', goto: ['city_kafe', 'old_job'] },
      ]);
    } else {
      if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed'  &&  qspFunc(s, 'jobs', 'is_arrival_time', 'city_cafe_waitress') === 1) {
        scene.actions([
          { label: 'Start your shift', goto: ['city_kafe', 'work'] },
        ]);
      } else {
        if (((s as any).job_status ?? 0)?.['city_cafe_waitress'] === 'employed') {
          scene.actions([
            { label: 'Talk to Fabi', goto: ['city_kafe', 'fabi2'] },
          ]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Sit at a table', goto: ['city_kafe', 'table'] },
  ]);
  scene.build();
}

function enterTable(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/kafe.jpg');
  scene.text('The Roadhouse is decorated with bright neon signs, pictures of flashy American muscle cars and pop art. There\'s even the body of an old pink Cadillac hanging from the ceiling, like something from an old American TV show.');
  scene.text('Although it looks small and cramped from the outside, the Roadhouse is surprisingly spacious inside, managing to fit a well-stocked bar and a moderately-sized dining area alongside several private booths tucked away in the corners.');
  scene.text('A large, flashy jukebox features popular hits from the 50s through to the 80s, mostly American and British, but with a sprinkling of songs from other European countries. They serve American style meals.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get up from the table', goto: ['city_kafe', 'start'] },
    { label: 'Order from the menu (0:05)', handler: (st: GameState) => {
    // TODO-QSP: gs 'food_menu'
  } },
  ]);
  scene.build();
}

function enterFabi2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/fabi/FAB-001.jpg');
  // TODO-QSP: dynamic text: Fabi is filling in some government forms as you sit next to him. "Hey <<$pcs_nic...
  scene.text(`Fabi is filling in some government forms as you sit next to him. "Hey ${((s as any).pcs_nickname || '')}, what's up?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['city_kafe', 'start'] },
    { label: 'Quit your job', goto: ['city_kafe', 'quit'] },
  ]);
  scene.build();
}

function enterQuit(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'set_terminated', 'city_cafe_waitress');
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/fabi/FAB-002.jpg');
  scene.text('"I\'m going to need my work book back," you tell him. "I\'m afraid I\'m quitting."');
  scene.text('Fabi frowns, but nods. "Waitressing isn\'t the sort of job young girls tend to stay in long-term, so I understand. Wait here."');
  scene.text('He disappears into the office and comes back a few minutes later with your work book. "You\'re a good worker and we all like you here. If you change your mind, the position is likely to be open for a little while as I look for someone else," he says as he hands it to you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the diner', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Sit at a table', goto: ['city_kafe', 'table'] },
    { label: 'Talk to Fabi about getting your old job back', goto: ['city_kafe', 'old_job'] },
  ]);
  scene.build();
}

function enterOldJob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'set_employed', 'city_cafe_waitress');
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/kafe.jpg');
  // TODO-QSP: dynamic text: "Ah, <<$pcs_nickname>>! Good to see you again!" Fabi says with a smile. "What br...
  scene.text(`"Ah, ${((s as any).pcs_nickname || '')}! Good to see you again!" Fabi says with a smile. "What brings you back to the Roadhouse?"`);
  scene.text('"I was wondering if you needed any help?" you reply. "I\'d like to waitress for you again."');
  scene.text('His smile widens. "I loved having you here. We still need the help, so if you want to come back to work the same hours, then you\'re welcome to do so."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave the diner', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
  }, goto: ['city_residential', ''] },
    { label: 'Sit at a table', goto: ['city_kafe', 'table'] },
  ]);
  scene.build();
}

function enterFabi(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/fabi/FAB-001.jpg');
  scene.text('As you approach the owner, he looks up from his papers and gives you a tired smile. "Hello. I\'m Fabiyan Pankratov, owner of the Roadhouse, but everyone just calls me Fabi. I don\'t think I\'ve seen you around here before. What can I do for you?"');
  // TODO-QSP: dynamic text: "I'm <<$pcs_firstname>> <<$pcs_lastname>>," you tell him. "I was wondering if yo...
  scene.text(`"I'm ${((s as any).pcs_firstname || '')} ${((s as any).pcs_lastname || '')}," you tell him. "I was wondering if you have any waitress jobs available?"`);
  scene.text('His smile broadens and he looks a little less tired. "Ah, so you want to work here? Well why wouldn\'t you? Rockabilly music, the greaser subculture, Cadillacs, motorcycles and hamburgers! I love this period of American culture, it\'s so vibrant and exciting! I\'ve put every ruble I have into making this place the perfect recreation of an American diner from 1958. Who doesn\'t love that?"');
  scene.text('A glance around the place shows you that the diner is barely half full, and most of those dining are eating Russian food rather than American. Fabi is still raving about America in the 1950s, talking about Elvis Presley, someone called Carl Perkins, and cheeseburgers and French fries. His enthusiasm is honest and infectious, but you came here for a reason, so you clear your throat. "Fabi? About the job?"');
  // TODO-QSP: dynamic text: He grins sheepishly. "Sorry, I get carried away sometimes. Let me tell you about...
  scene.text(`He grins sheepishly. "Sorry, I get carried away sometimes. Let me tell you about the job. We're open every day except Monday from 12:00 to 20:00 and you'd be working five days a week, Tuesday through Saturday. You'll be expected to arrive between 11:00 and 12:00 to help get the place ready - if you're late then you won't work that day. You don't work, you don't get paid. Pay is ${qspFunc(s, 'money', 'string_profit', 600)} per shift plus whatever you get in tips, and you get paid on the 25th of each month."`);
  scene.text('"So… Are you interested?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Yes', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_cafe_waitress') === 1) {
      qspCall(s, 'jobs', 'set_employed', 'city_cafe_waitress');
      qspCall(s, 'stat', '');
      // TODO-QSP: dynamic text: "Good! Now remember, you have to be here between '+func('time', 'get_time_string...
      scene.text('"Good! Now remember, you have to be here between 11:00 and noon, Tuesday through Saturday."');
    } else {
      qspCall(s, 'stat', '');
      scene.text('Unfortunately, the shift times conflict with your existing schedule.');
    }
    scene.actions([
      { label: 'Leave', goto: ['city_kafe', 'start'] },
    ]);
  } },
    { label: 'No', goto: ['city_kafe', 'start'] },
  ]);
  scene.build();
}

function enterWork(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  if (((s as any).job_last_work_day ?? 0)?.['city_cafe_waitress'] === ((s as any).daystart ?? 0)) {
    scene.text('You have already worked your shift today.');
    return;
    scene.actions([
      { label: 'Return to the diner', goto: ['city_kafe', 'start'] },
    ]);
  } else {
    qspCall(s, 'jobs', 'clock', 'city_cafe_waitress');
  }
  if ((!(Math.floor(Math.random() * 6) + 0))) {
    scene.actions([{ label: 'Continue', goto: ['city_kafe', 'beg1'] }]);
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['city_kafe', 'beg2'] }]);
    } else {
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['city_kafe', 'beg3'] }]);
      } else {
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          scene.actions([{ label: 'Continue', goto: ['city_kafe', 'beg4'] }]);
        } else {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.actions([{ label: 'Continue', goto: ['city_kafe', 'beg5'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['city_kafe', 'beg6'] }]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeg1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (30);
  if (((s as any).hour ?? 0) <= 15) {
    (s as any).minut = ((s as any).minut ?? 0) + ((15-((s as any).hour ?? 0)) * 60 +30 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/BEG-001.jpg');
  scene.text('The lunch rush starts strong and stays strong, and you spend the first few hours running frantically just to keep up. It\'s not bad though – all your customers are in good moods and nobody has any major problems, and being busy like this makes the time go fast. If every day were like this, then you\'d have no complaints.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lunch time', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterBeg2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) - (30);
  if (((s as any).hour ?? 0) <= 15) {
    (s as any).minut = ((s as any).minut ?? 0) + ((15-((s as any).hour ?? 0)) * 60 +30 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/BEG-002.jpg');
  scene.text('Today starts off slow, but within a few hours the place is almost as full as it ever gets during lunch. It\'s not bad at first, but there\'s always that one table that messes up your day. This time it\'s a group of young executive types who talk loudly amongst themselves and place very particular orders, each changing their minds several times as they tell you what they want. You double-check the orders before you leave the table and you\'re sure you have it right, but when you bring them their food, each of them complains that something is wrong. It\'s clear they\'re just doing it to screw with you.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lunch time', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterBeg3(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (30);
  if (((s as any).hour ?? 0) <= 15) {
    (s as any).minut = ((s as any).minut ?? 0) + ((15-((s as any).hour ?? 0)) * 60 +30 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/BEG-003.jpg');
  scene.text('Some days are just fun, and today is one of them. The crowd for lunch isn\'t huge but it is happy, with some families and a bunch of regular customers who are happy to see you and engage you in good-natured banter and teasing. Aside from the normal issues that arise, the first part of the day flows smoothly and easily, and you make some decent tips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lunch time', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterBeg4(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) - (30);
  if (((s as any).hour ?? 0) <= 15) {
    (s as any).minut = ((s as any).minut ?? 0) + ((15-((s as any).hour ?? 0)) * 60 +30 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  qspCall(s, 'npc_relationship', 'modify', 'A41', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A42', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A93', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A43', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/BEG-004.jpg');
  scene.text('It\'s a slow lunch rush and you\'re able to take some time and chat with friendly customers and your coworkers. A large group tourists from another part of Russia then arrive, and they\'re fascinated by the décor and the theme. They take pictures of everything, including you. You cheerfully pose for them, and since it\'s a quiet day, you spend time at their table telling them about the diner and what it\'s like to work here. They vow to tell everyone back home to come to the Roadhouse whenever they visit the city.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lunch time', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterBeg5(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (40);
  if (((s as any).hour ?? 0) <= 15) {
    (s as any).minut = ((s as any).minut ?? 0) + ((15-((s as any).hour ?? 0)) * 60 +30 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/BEG-005.jpg');
  scene.text('You get slammed as soon as the doors open, a flood of people filling every table and not slowing for hours. All you can do to keep your head above water is run from table to table taking orders, delivering food, checking on customers and resolving issues. It\'s stressful and challenging, but you don\'t screw up anything major and your customers leave satisfied, which is about the best you can expect from a day like today.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lunch time', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterBeg6(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) - (40);
  if (((s as any).hour ?? 0) <= 15) {
    (s as any).minut = ((s as any).minut ?? 0) + ((15-((s as any).hour ?? 0)) * 60 +30 - ((s as any).minut ?? 0));
  }
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/BEG-006.jpg');
  scene.text('Today is one of those days where you wish you\'d just stayed in bed. The customers are inexplicably grumpy and there are constant complaints, but it gets worse towards the end of the lunch rush when two groups of young men, all of them already very drunk in spite of the early hour, get into a shouting match that rapidly escalates. Fabi and Ashot hurry to push them out the doors and onto the street, where they continue to argue and shout at each other for some time. All of this frightens off customers, which means you have fewer people to wait on and you get fewer tips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Lunch time', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterLunch(s: GameState, scene: SceneBuilder): void {
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/kafe.jpg');
  scene.text('Your break time comes, giving you a chance to sit down, eat some food, talk to your coworkers and maybe go to the bathroom.');
  if (((s as any).city_cafe ?? 0)?.['lunch'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat lunch', goto: ['city_kafe', 'lunch_alone'] },
    ]);
  }
  if (((s as any).city_cafe ?? 0)?.['lunch_talk'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Talk to Fabi', goto: ['city_kafe', 'lunch_fabi'] },
      { label: 'Talk to Ashot', goto: ['city_kafe', 'lunch_ashot'] },
      { label: 'Talk to Marisha', goto: ['city_kafe', 'lunch_marisha'] },
      { label: 'Talk to Nika', goto: ['city_kafe', 'lunch_nika'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'events'] },
  ]);
  scene.build();
}

function enterLunchAlone(s: GameState, scene: SceneBuilder): void {
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEatLunch(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.img('images/shared/food/food_\'+rand(1, 4)+\'.jpg');
  // TODO-QSP: dynamic text: You take your time eating your meal and playing on your phone. It's just a light...
  scene.text(`You take your time eating your meal and playing on your phone. It's just a light lunch, but it's quite tasty and${((s as any).mtxt || '')}`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Finish', goto: ['city_kafe', 'lunch'] },
  ]);
  scene.build();
}

function enterLunchFabi(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['lunch_talk'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A41', 1);
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/fabi/FAB-001.jpg');
  scene.text('You spend much of your break chatting with Fabi. He\'s a nice man, kind and generous, but he always has a lot on his mind and always looks tired.');
  scene.text('He talks to you about his favorite topics: American cuisine, American culture, American music, and how the people of St. Petersburg just don\'t understand what he\'s trying to achieve with the Roadhouse.');
  if (((s as any).city_cafe ?? 0)?.['lunch'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat lunch', goto: ['city_kafe', 'lunch'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'events'] },
  ]);
  scene.build();
}

function enterLunchAshot(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['lunch_talk'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A42', 1);
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/Ashot/ASH-001.jpg');
  scene.text('Most of your break is spent in the kitchen chatting with Ashot, whose irrepressible good mood and constant smile seem as much a part of him as north and south are parts of the compass.');
  scene.text('He tells you stories about his family, many of which revolve around him doing something crazy and being a disappointment to his parents, something he doesn\'t seem too bothered about.');
  scene.text('"They\'ll be proud of me yet!" he vows cheerfully.');
  if (((s as any).city_cafe ?? 0)?.['lunch'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat lunch', goto: ['city_kafe', 'lunch'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'events'] },
  ]);
  scene.build();
}

function enterLunchMarisha(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['lunch_talk'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A93', 1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEatLunch(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/Marisha/MAR-001.jpg');
  scene.text('Marisha has some quiet time when you\'re on break and you two spend it chatting as much as her duties permit. You do most of the talking since she\'s guarded and reserved as she always is, but she listens with interest and makes comments and asks questions that make you think about things in new ways.');
  scene.text('She\'s a smart girl, even if she usually chooses not to show it, and you can\'t help but wonder if waitressing in a diner is really the best use of her talents.');
  if (((s as any).city_cafe ?? 0)?.['lunch'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat lunch', goto: ['city_kafe', 'lunch'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'events'] },
  ]);
  scene.build();
}

function enterLunchNika(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['lunch_talk'] = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'npc_relationship', 'modify', 'A43', 1);
  { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterEatLunch(s, scene); (s as any).locArgs = __savedLocArgs; }
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/Nika/NIK-001.jpg');
  scene.text('You eat your lunch in the kitchen, spending the time talking to Nika as she washes dishes. She\'s bright, bubbly and energetic as always, talking about partying and clubbing – she\'s especially fond of the nightclub over in the City Center – and how much fun St. Petersburg can be if you don\'t have a steady guy to tie you down.');
  scene.text('She definitely seems to be enjoying her life, and she tells you tales of prowling the streets until dawn and shutting down every fun bar in town.');
  if (((s as any).city_cafe ?? 0)?.['lunch'] !== ((s as any).daystart ?? 0)) {
    scene.actions([
      { label: 'Eat lunch', goto: ['city_kafe', 'lunch'] },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'events'] },
  ]);
  scene.build();
}

function enterEatLunch(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['lunch'] = ((s as any).daystart ?? 0);
  (s as any).frost = 0;
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  (s as any).pcs_health = ((s as any).pcs_health ?? 0) + (10);
  (s as any).fat = ((s as any).fat ?? 0) + (4);
  (s as any).pcs_energy = ((s as any).pcs_energy ?? 0) + (40);
  if (((s as any).pcs_hydra ?? 0) >= 100) {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (20);
  } else {
    (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (40);
  }
  (s as any).cumspclnt = 2;
  qspCall(s, 'cum_cleanup', '');
  (s as any).pcs_breath = 0;
  qspCall(s, 'food', 'aftermeal');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.build();
}

function enterEvents(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 18) {
    (s as any).minut = ((s as any).minut ?? 0) + ((18-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
  }
  if (((s as any).city_cafe ?? 0)?.['events_firsttime'] === 0) {
    scene.actions([{ label: 'Continue', goto: ['city_kafe', 'events1'] }]);
  } else {
    if (((s as any).city_cafe ?? 0)?.['events_firsttime'] === 1) {
      scene.actions([{ label: 'Continue', goto: ['city_kafe', 'events2'] }]);
    } else {
      if (((s as any).city_cafe ?? 0)?.['events_firsttime'] === 2) {
        scene.actions([{ label: 'Continue', goto: ['city_kafe', 'events3'] }]);
      } else {
        if (((s as any).city_cafe ?? 0)?.['events_firsttime'] === 3) {
          scene.actions([{ label: 'Continue', goto: ['city_kafe', 'events4'] }]);
        } else {
          scene.actions([{ label: 'Continue', goto: ['city_kafe', 'shift_end'] }]);
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEvents1(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A93', 1);
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['events_firsttime'] = ((s as any).city_cafe['events_firsttime'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/Marisha/MAR-002.jpg');
  scene.text('During a lull, you find yourself chatting with the other waitress, Marisha. She\'s a tall, pretty girl who always seems to be smiling, but who also always seems to be holding something back. You get to talking about the job and the subject of tips comes up.');
  scene.text('"Tips are what let you make a living from this job," she tells you. "You definitely want to do everything you can to maximize them."');
  scene.text('"How do I do that?" you ask.');
  scene.text('"Well, first of all wear a waitress uniform," she tells you. "There\'s no dress code here, but you definitely make more if you wear appropriate clothing. Your skill as a waitress plays a big part too of course. And I hate to say it, but honestly the hotter you are, the better your tips. People, especially guys, want to give money to pretty women who show some skin."');
  scene.text('"I dunno… Isn\'t that kind of tacky?" you ask.');
  scene.text('She laughs. "We aren\'t strippers, but I figure if I can bring home more at the end of the day by wearing a short skirt and showing some cleavage, then why not? I keep it professional – I don\'t show nearly as much here as I would at a club or at the beach. I just leave the top button or two undone and make sure they can see some leg. Customers get to look at something they like, and I walk home with their money in my purse."');
  scene.text('"I guess that doesn\'t sound too bad…" you admit.');
  scene.text('"And because of that, I can afford to pay my rent and buy the necessities of life," she says with a grin. "I couldn\'t otherwise. Give it some thought."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'shift_end'] },
  ]);
  scene.build();
}

function enterEvents2(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A41', 1);
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['events_firsttime'] = ((s as any).city_cafe['events_firsttime'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/fabi/FAB-002.jpg');
  scene.text('Since there are almost no patrons at the moment, you wander over to the end of the bar where Fabi is sitting doing some paperwork. He welcomes you with a smile and asks how you like working here so far.');
  scene.text('"It\'s only my second day," you reply. "But it\'s fun so far. Everyone is nice and the customers seem to enjoy it."');
  scene.text('"Of course they enjoy it!" he laughs. "Why wouldn\'t they? This is the best diner in St. Petersburg, and the only one with any style!" He goes on to tell you about how his family visited some friends in Chicago in the USA right after the USSR fell, and how those friends took them to a 1950s-themed restaurant. "It was the greatest day of my life. Ever since then, it\'s been my dream to duplicate that experience here, with the music and the food and the aesthetic. Not that it\'s been easy, and not that everyone seems to understand what I\'m trying here."');
  scene.text('"What are some of the problems?" you ask.');
  scene.text('"A lot of people around here don\'t get it," he complains. "I try to serve burgers and fried chicken, and customers come in and complain that they don\'t see herring blini or piroshki on the menu. I have Johnny Cash and Buddy Holly on the jukebox, but customers come in and complain that there\'s no Little Big or Korni. I put up classy decorations like American advertisements and a Cadillac, and they come in and complain that there are no fucking stuffed bear heads on the wall."');
  scene.text('"Is there something you could do to… I don\'t know, make it more what you want?"');
  scene.text('"I\'ve thought about getting live music in here," he admits. "We could put a little stage right over there, just big enough for a trio or a quartet, but there\'s no decent rockabilly bands in St. Petersburg and I can\'t save enough money to do that with Rakov on my back."');
  scene.text('"Rakov?" you ask. "Who\'s Rakov?"');
  scene.text('Fabi suddenly becomes nervous, as though he just realized he said something he shouldn\'t have. He gathers together the papers he was working on and stands up. "Um, never mind. That\'s not something you need to worry about. I\'ll just finish these up back in the office."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'shift_end'] },
  ]);
  scene.build();
}

function enterEvents3(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A43', 1);
  if (!(s as any).city_cafe) (s as any).city_cafe = {}; (s as any).city_cafe['events_firsttime'] = ((s as any).city_cafe['events_firsttime'] ?? 0) + (1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/Nika/NIK-002.jpg');
  scene.text('With things quiet for the moment, you end up talking with Nika, the dishwasher, as she takes a break. She\'s a pretty woman in her mid-20s, and she\'s reading a book at a table as you approach. "Hey, mind if I join you?"');
  scene.text('"Please do," she says with a smile as she sets her book down. "How do you like working here?"');
  scene.text('"So far, so good," you reply. "So many new faces. I\'m sure there are regulars I\'ll get to know, but it\'s just been a whirlwind."');
  scene.text('She laughs. "Oh, there are regulars alright. Some of them you should steer clear of, but they\'re mostly alright."');
  scene.text('"Who should I avoid?" you ask.');
  scene.text('"One guy, Borushka, is always trying to get Marisha to do things with him," she says while shaking her head. "I think he\'s wasting his time since I\'m pretty sure she plays for the other team, if you know what I mean. On the other hand, there\'s a guy who comes in here sometimes, Instinsky, who\'s a gambler. He sometimes lays bets with bookies for us. He\'s alright."');
  scene.text('"Fabi mentioned someone called Rakov the other day. Is he a regular too?" you ask after a moment\'s silence.');
  scene.text('Nika frowns. "Not exactly. Mr. Rakov is an Avtoritet in the Grekov gang. He\'s a gangster, and very bad news. He comes in here sometimes with a couple of scary-looking guys. Fabi got into money trouble a few years back and borrowed from Rakov, thinking he could pay it back fast. But you know how that goes, you never really finish paying off guys like that. I don\'t know how much Fabi still owes, but it\'s a lot. Maybe even more than he originally borrowed."');
  scene.text('You don\'t know what to say to that, so you change the subject to the St. Petersburg nightlife, which is something Nika seems intimately familiar with, and spend the next few minutes talking with her about party spots until some customers walk in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Return to work', goto: ['city_kafe', 'shift_end'] },
  ]);
  scene.build();
}

function enterEvents4(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'npc_relationship', 'modify', 'A42', 1);
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/Ashot/ASH-002.jpg');
  scene.text('You\'re killing time in the kitchen during a slow period when you start chatting with Ashot, the fry cook. He\'s a good-looking guy, funny and relaxed, and he\'s enjoyable to talk to. You\'re curious about him, because he looks like he\'s from the Caucasus but sounds like a native of St. Petersburg, so you tactfully raise the topic.');
  scene.text('"Oh, my great-grandfather was a civil engineer," he tells you. "After the Great Patriotic War, Leningrad was trashed, so the state sent him up here to help rebuild, and we\'ve been here ever since. I\'ve never even been to Armenia. Nobody in my family goes there except to find a wife or husband, but then we come back. We\'re Russian now."');
  scene.text('"Do you have any siblings?" you ask.');
  scene.text('He laughs. "Yes. Everyone in my family for generations have been professionals of some kind, and my brother and sister are no exception. My brother is a lawyer in Moscow, and my sister is in residency as a cardiac surgeon here in the city."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue talking', handler: (st: GameState) => {
    scene.text('"And you\'re a short-order cook in a diner…" you observe with a grin.');
    scene.text('"And my parents remind me how disappointed they are in me every time they see me," he agrees with a carefree laugh. "But all that studying and stuff isn\'t for me. I\'m going to make my fortune another way."');
    scene.text('"And what way is that?" you ask.');
    scene.text('"There\'s plenty of money out there for a guy who\'s willing to hustle for it," he shrugs. "I\'ve got all kinds of things lined up, people who want things that I can find. Nothing illegal, just things you can\'t look for on the internet."');
    scene.actions([
      { label: 'Continue talking', handler: (st: GameState) => {
    scene.text('You arch an eyebrow. "That sounds interesting. Like what?"');
    scene.text('"Oh, all kinds of stuff," he says with a mysterious grin. "I can cut you in if you\'re willing to help me out with it."');
    scene.text('You see Nika roll her eyes and shake her head at her dishwashing station.');
    scene.actions([
      { label: 'Return to work', goto: ['city_kafe', 'shift_end'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterShiftEnd(s: GameState, scene: SceneBuilder): void {
  if (((s as any).hour ?? 0) < 20) {
    (s as any).minut = ((s as any).minut ?? 0) + ((20-((s as any).hour ?? 0))*60 - ((s as any).minut ?? 0));
  }
  if ((!(Math.floor(Math.random() * 6) + 0))) {
    scene.actions([{ label: 'Continue', goto: ['city_kafe', 'end_1'] }]);
  } else {
    if ((!(Math.floor(Math.random() * 5) + 0))) {
      scene.actions([{ label: 'Continue', goto: ['city_kafe', 'end_2'] }]);
    } else {
      if ((!(Math.floor(Math.random() * 4) + 0))) {
        scene.actions([{ label: 'Continue', goto: ['city_kafe', 'end_3'] }]);
      } else {
        if ((!(Math.floor(Math.random() * 3) + 0))) {
          scene.actions([{ label: 'Continue', goto: ['city_kafe', 'end_4'] }]);
        } else {
          if ((!(Math.floor(Math.random() * 2) + 0))) {
            scene.actions([{ label: 'Continue', goto: ['city_kafe', 'end_5'] }]);
          } else {
            scene.actions([{ label: 'Continue', goto: ['city_kafe', 'end_6'] }]);
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterEnd_1(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (50);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/END-001.jpg');
  scene.text('You\'re fortunate this evening to be able to wait on three regulars who are fully immersed in the vibe Fabi is trying to present. Each uses an English nickname – Lucky, Spike and Slim – and they pepper their conversation with 50s American slang.');
  scene.text('You follow most of it, though some is confusing: you have no idea what it means when they call you a “hepkitty”, for example, and their suggestions for your attire are confusing, but you laugh with them because they\'re fun guys who eat here all the time and always tip well.');
  scene.text('They\'re Fabi\'s favorite customers, so he always spends time at their table chatting with them whenever they come in.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['city_kafe', 'tips'] },
  ]);
  scene.build();
}

function enterEnd_2(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) - (40);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/END-002.jpg');
  scene.text('It\'s a bad evening. You\'re saddled with a continuous stream of demanding customers who are constantly calling for your attention, and by the time your shift ends you\'re so frazzled you barely know which end is up. You begin mixing up orders, forgetting drinks, dropping plates and generally having a lousy time of it.');
  scene.text('You\'re ready to pull out your hair when Marisha grins at you. "Look at it this way: in a hundred years, who\'s gonna care?"');
  scene.text('You can\'t help but feel like you heard that in a movie once, and it\'s not particularly comforting.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['city_kafe', 'tips'] },
  ]);
  scene.build();
}

function enterEnd_3(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (30);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/END-003.jpg');
  scene.text('It\'s a busy night and the time flies. You\'re constantly rushing back and forth between the kitchen and the dining area as fast as your feet can take you, and you find yourself in a good groove.');
  scene.text('You get all your orders right, you don\'t forget anything and you make enjoyable, light conversation with most of your customers. Your tips should be decent.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['city_kafe', 'tips'] },
  ]);
  scene.build();
}

function enterEnd_4(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (40);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/END-004.jpg');
  scene.text('Most of the time the customers at the Roadhouse are pretty cool, but sometimes, like tonight, they can be a real pain in the ass. An unusually high percentage of your tables tonight are guys with no women, and most of them seem to want to hit on you more than they want to eat. Some of it is playful, but a few of them get overly insistent and make it unpleasant just to walk past their table with their constant comments.');
  scene.text('One guy even gets a little too handsy and you \'accidentally\' dump his kvass into his lap; his suggestions for how you can clean it up are unwelcome. At least you made some decent tips.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['city_kafe', 'tips'] },
  ]);
  scene.build();
}

function enterEnd_5(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) - (30);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/END-005.jpg');
  scene.text('The evening starts pretty well, except for a couple of misbehaved kids whose parents are more interested in looking at their phones than monitoring them, but it all goes downhill with a single jerk: one customer seems determined to have a terrible time, which wouldn\'t be so bad if he wasn\'t also determined to do it loudly. No matter what you do, his complaints echo from one end of the room to the other.');
  scene.text('He shouts at you for being too slow and insists that you got his order wrong until his companion corrects him, much to his annoyance. He takes up way too much of your time and energy, and in the end stiffs you on the tip. Asshole.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['city_kafe', 'tips'] },
  ]);
  scene.build();
}

function enterEnd_6(s: GameState, scene: SceneBuilder): void {
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) - (50);
  qspCall(s, 'npc_relationship', 'modify', 'A41', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A42', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A93', 1);
  qspCall(s, 'npc_relationship', 'modify', 'A43', 1);
  qspCall(s, 'stat', '');
  scene.img('images/locations/city/residential/cafe/END-006.jpg');
  scene.text('Almost nobody comes in today and you and the rest of the staff spend most of your time standing around talking. You give your few customers excellent service and they tip you well, but there aren\'t enough of them to make this a lucrative evening.');
  scene.text('However, you actually enjoy yourself more than you\'d expect, because you and your coworkers tell each other funny stories and jokes and talk about music and movies to pass the time. By the time the last customer leaves, you feel like you know all of them a little bit better.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Count your tips', goto: ['city_kafe', 'tips'] },
  ]);
  scene.build();
}

function enterTips(s: GameState, scene: SceneBuilder): void {
  if (((s as any).PServer ?? 0) === 1) {
    if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = ((s as any).workKafe['tips_roll'] ?? 0) + (50);
  }
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_total'] = ((Math.floor(Math.random() * 125) + 1) + (Math.floor(Math.random() * 125) + 1) + (Math.floor(Math.random() * 125) + 1) + (Math.floor(Math.random() * 125) + 1)) + (((s as any).workKafe ?? {})?.['tips_roll'] ?? 0) + ((s as any).pcs_apprnc ?? 0) - 100 + ((s as any).pcs_servng ?? 0);
  if (((s as any).workKafe ?? 0)?.['tips_total'] < 100) {
    if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_total'] = 110 - (Math.floor(Math.random() * 21) + 0);
  }
  if (((s as any).workKafe ?? 0)?.['tips_total'] > 500) {
    if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_total'] = 510 - (Math.floor(Math.random() * 21) + 0);
  }
  // TODO-QSP: gs 'money', 'earn', workKafe['tips_total']
  if (!(s as any).workKafe) (s as any).workKafe = {}; (s as any).workKafe['tips_roll'] = 0;
  if (((s as any).pcs_servng ?? 0) < 100) {
    qspCall(s, 'exp_gain', 'servng', 1);
  }
  if (((s as any).pcs_vital ?? 0) < 30) {
    qspCall(s, 'exp_gain', 'vital', 1);
  }
  qspCall(s, 'stat', '');
  scene.text('<center><b>The Roadhouse</b></center>');
  scene.img('images/locations/city/residential/cafe/kafe.jpg');
  scene.text('With your shift finally over, you sit at one of the tables and count out your tips for the day.');
  // TODO-QSP: dynamic text: You made <<$func('money', 'string_profit', workKafe['tips_total'])>> in tips.
  scene.text(`You made ${qspFunc(s, 'money', 'string_profit', ((s as any).workKafe ?? 0)?.['tips_total'] ?? '')} in tips.`);
  scene.text('Fabi switches the lights off in the kitchen and ushers you out with a smile so he can finish closing up.');
  if ((!(Math.floor(Math.random() * 4) + 0))) {
    scene.actions([
      { label: 'Leave', goto: ['city_kafeend', ''] },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['city_residential', ''] },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'table':
      enterTable(s, scene);
      break;
    case 'fabi2':
      enterFabi2(s, scene);
      break;
    case 'quit':
      enterQuit(s, scene);
      break;
    case 'old_job':
      enterOldJob(s, scene);
      break;
    case 'fabi':
      enterFabi(s, scene);
      break;
    case 'work':
      enterWork(s, scene);
      break;
    case 'beg1':
      enterBeg1(s, scene);
      break;
    case 'beg2':
      enterBeg2(s, scene);
      break;
    case 'beg3':
      enterBeg3(s, scene);
      break;
    case 'beg4':
      enterBeg4(s, scene);
      break;
    case 'beg5':
      enterBeg5(s, scene);
      break;
    case 'beg6':
      enterBeg6(s, scene);
      break;
    case 'lunch':
      enterLunch(s, scene);
      break;
    case 'lunch_alone':
      enterLunchAlone(s, scene);
      break;
    case 'lunch_fabi':
      enterLunchFabi(s, scene);
      break;
    case 'lunch_ashot':
      enterLunchAshot(s, scene);
      break;
    case 'lunch_marisha':
      enterLunchMarisha(s, scene);
      break;
    case 'lunch_nika':
      enterLunchNika(s, scene);
      break;
    case 'eat_lunch':
      enterEatLunch(s, scene);
      break;
    case 'events':
      enterEvents(s, scene);
      break;
    case 'events1':
      enterEvents1(s, scene);
      break;
    case 'events2':
      enterEvents2(s, scene);
      break;
    case 'events3':
      enterEvents3(s, scene);
      break;
    case 'events4':
      enterEvents4(s, scene);
      break;
    case 'shift_end':
      enterShiftEnd(s, scene);
      break;
    case 'end_1':
      enterEnd_1(s, scene);
      break;
    case 'end_2':
      enterEnd_2(s, scene);
      break;
    case 'end_3':
      enterEnd_3(s, scene);
      break;
    case 'end_4':
      enterEnd_4(s, scene);
      break;
    case 'end_5':
      enterEnd_5(s, scene);
      break;
    case 'end_6':
      enterEnd_6(s, scene);
      break;
    case 'tips':
      enterTips(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const city_kafe: LocationDef = {
  name: 'city_kafe',
  title: 'The Roadhouse',
  region: 'city',
  locationType: 'event',
  enter: enter,
};
