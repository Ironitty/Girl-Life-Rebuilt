import { qspCall, qspFunc, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.text('<b><center><font size="4">Manager Andrew M. Sobulyagin</font></center></b>');
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'fired') {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('You knock on Mr. Sobulyagin\'s office door, and when he sees you enter, his expression hardens. "What do you want," he questions you with a scowl.');
  }
  if (((s as any).hour ?? 0) >= 20  ||  (((s as any).week ?? 0) > 5  &&  ((s as any).hour ?? 0) >= 16)) {
    qspGoto(s, 'shop_pussycats', 'start');
  }
  if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed'  &&  ((s as any).job_booking_debt ?? 0)?.['city_pussycats_clerk'] >= 3) {
    { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterPunish(s, scene); (s as any).locArgs = __savedLocArgs; }
  } else {
    if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'fired') {
      { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterBeg(s, scene); (s as any).locArgs = __savedLocArgs; }
    } else {
      if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'terminated') {
        { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterReapply(s, scene); (s as any).locArgs = __savedLocArgs; }
      } else {
        if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === '') {
          { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterApply(s, scene); (s as any).locArgs = __savedLocArgs; }
        } else {
          if (((s as any).job_status ?? 0)?.['city_pussycats_clerk'] === 'employed') {
            { const __savedLocArgs = (s as any).locArgs; (s as any).locArgs = ['', ]; enterRegular(s, scene); (s as any).locArgs = __savedLocArgs; }
          }
        }
      }
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterApply(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
  scene.text('You knock on the door, and someone calls you in from the other side, "You can enter." After you enter, you\'re greeted by the sight of a sour-faced older man reading papers at his desk. When he sees you, his expression hardens. "Surprised to see an old man managing a clothing store for teenage girls?" he grunts. You didn\'t even say anything yet, but he doesn\'t seem to care. "Yeah, I get that a lot…," he adds under his breath before sighing and looking back to his papers. "What do you need?"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['shop_pussycats', 'start'] },
    { label: 'Mention the for hire sign', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('He barely glances your way as he shuffles some papers around. "Oh yeah I forgot about that… well, the job is still open. I need an extra worker around the store, and it needs to be a girl… a young girl," he says before suddenly dropping the papers to look at you accusingly. "Before you start with that gender equality crap, I had a guy working here, and all he cared about was getting into the pants of female customers rather than their wallets. I\'m saving myself from another headache…<i>hopefully</i>."');
    // TODO-QSP: dynamic text: You''re at a loss for words. This wasn''t how you imagined the interview would g...
    scene.text(`You're at a loss for words. This wasn't how you imagined the interview would go, but your silence goes unnoticed as the store manager continues to talk. "The salary is ${qspFunc(s, 'money', 'string_profit', 205)} a hour alright? Trust me, no one is fighting you for the chance to work here, but don't think that means you can slack off. Miss work three times, and you're fired… no questions. I have two part-time positions that are from 16:00 until 20:00 Monday through Friday or the weekend shift between 9:00 and 15:00."`);
    scene.text('He seems to have found what he was looking for, which is the employment documents, "You\'ll need to sign these to start work here." He holds them out to you, "So, are you interested?"');
    if (((st as any).job_status ?? 0)?.['city_pussycats_clerk'] === ''  &&  qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 0) === 1) {
      scene.actions([
        { label: 'Take the evening job', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_employed', 'city_pussycats_clerk');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('You find the conditions suitable, and without batting an eye, you sign the documents.');
    // TODO-QSP: dynamic text: You got a job in the youth clothing store ''Pussy-Cats''. Your first workday is ...
    scene.text('You got a job in the youth clothing store \'Pussy-Cats\'. Your first workday is on Monday at 15:00.');
    scene.actions([
      { label: 'Continue', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
      ]);
    }
    if (((st as any).job_status ?? 0)?.['city_pussycats_clerk'] === ''  &&  qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 1) === 1) {
      scene.actions([
        { label: 'Take the weekend job', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'set_employed', 'city_pussycats_clerk');
    qspCall(st, 'jobs', 'change_schedule', 'city_pussycats_clerk', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.text('You find the conditions suitable, and without batting an eye, you sign the documents.');
    // TODO-QSP: dynamic text: You got a job in the youth clothing store ''Pussy-Cats''. Your first workday is ...
    scene.text('You got a job in the youth clothing store \'Pussy-Cats\'. Your first workday is on Saturday at 9:00.');
    scene.actions([
      { label: 'Continue', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
      ]);
    }
    if (((st as any).job_status ?? 0)?.['city_pussycats_clerk'] === '') {
      (st as any).temp_sched0_ok = qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 0);
      (st as any).temp_sched1_ok = qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 1);
      if (((st as any).temp_sched0_ok ?? 0) === 0  &&  (!((st as any).temp_sched1_ok ?? 0))) {
        scene.text('Unfortunately, both shifts conflict with your existing schedule.');
      } else {
        if ((!((st as any).temp_sched0_ok ?? 0))) {
          scene.text('<font color="gray">The evening weekday shift conflicts with your existing schedule.</font>');
        } else {
          if ((!((st as any).temp_sched1_ok ?? 0))) {
            scene.text('<font color="gray">The weekend shift conflicts with your existing schedule.</font>');
          }
        }
      }
    }
    scene.actions([
      { label: 'Don\'t take the job', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterRegular(s: GameState, scene: SceneBuilder): void {
  scene.text('<b><center><font size="4">Manager Andrew M. Sobulyagin</font></center></b>');
  scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
  scene.text('You knock on the door, and Mr. Sobulyagin calls you in. Normally, he would be reading the paper, but instead he\'s just sitting there with a weird look on his face. It\'s almost like you scared him or something.');
  if (((s as any).job_worked_count ?? 0)?.['city_pussycats_clerk'] > 0) {
    if (((s as any).job_booking_debt ?? 0)?.['city_pussycats_clerk'] === 0) {
      scene.text('"Came to get your pay," he asks quickly to which you nod yes. He beckons you closer, and you oblige. He digs around in his desk drawer for your money. As you wait, you catch a glimpse of his computer screen and see an image of a naked woman. He must think you can\'t see the screen from where you are. "Here you go," Mr. Sobulyagin says as he holds out a white envelope with the money inside.');
    } else {
      if (((s as any).job_miss_acknowledged ?? 0)?.['city_pussycats_clerk'] === ((s as any).job_missed_total ?? 0)?.['city_pussycats_clerk']  &&  ((s as any).job_booking_debt ?? 0)?.['city_pussycats_clerk'] > 0) {
        scene.text('"Came to get your pay," he asks quickly to which you nod yes. He beckons you closer, and you oblige. He digs around in his desk drawer for your money. As you wait, you catch a glimpse of his computer screen and see an image of a naked woman. He must think you can\'t see the screen from where you are. "Here you go," Mr. Sobulyagin says as he holds out a white envelope with the money inside.');
        // TODO-QSP: dynamic text: "You have missed work <<job_booking_debt[''city_pussycats_clerk'']>> '+iif(job_b...
        scene.text('"You have missed work ' + ((s as any).job_booking_debt ?? 0)?.['city_pussycats_clerk'] ?? '' + ' \'+iif(job_booking_debt[\'city_pussycats_clerk\'] = 1, \'time\', \'times\')+\'," he reminds you. "Don\'t make a habit out of it. If you miss work 3 times, I will fire you.');
      } else {
        ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pussycats_clerk'] = ((s as any).job_missed_total ?? 0)?.['city_pussycats_clerk'];
        scene.text('He gives you a hard look when he see\'s it\'s you. "You missed work. Do you remember what I said about missing work?"');
        scene.text('You nod. "I remember. I\'m sorry."');
        scene.text('He snorts slightly and shakes his head. "You better not forget about it the next time. Here\'s your pay." He beckons you closer, and you oblige. He digs around in his desk drawer for your money. As you wait, you catch a glimpse of his computer screen and see an image of a naked woman. He must think you can\'t see the screen from where you are. "Here you go," Mr. Sobulyagin says as he holds out a white envelope with your money inside.');
      }
    }
    scene.actions([
      { label: 'Grab the envelope and leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'city_pussycats_clerk');
    // TODO-QSP: dynamic text: The manager counts <<$func(''money'', ''string_profit'', temp_pay)>> and hands i...
    scene.text(`The manager counts ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))} and hands it to you. With that done, he goes back to looking at the monitor of his computer.`);
    qspGoto(st, 'shop_pussycats', 'start');
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
    ]);
  }
  if (((s as any).job_active_schedule ?? 0)?.['city_pussycats_clerk'] === '0') {
    (s as any).temp_switch_label = 'Ask to switch to weekend shifts';
    (s as any).temp_switch_to = 1;
  } else {
    (s as any).temp_switch_label = 'Ask to switch to evening shifts';
    (s as any).temp_switch_to = 0;
  }
  if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', ((s as any).temp_switch_to ?? 0)) === 1) {
    scene.actions([
      { label: '', labelFn: (s: GameState) => String(((s as any).temp_switch_label || '') ?? ''), handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('"Mr. Sobulyagin, I was wondering if I could switch to a different schedule?"');
    scene.text('He considers it for a moment. "Sure, I can arrange that. Let me just settle your current pay first."');
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'city_pussycats_clerk');
    if (((st as any).temp_pay ?? 0) > 0) {
      scene.text('"Here\'s what you\'re owed so far," he says, handing you an envelope.');
    }
    qspCall(st, 'jobs', 'change_schedule', 'city_pussycats_clerk', ((st as any).temp_switch_to ?? 0));
    if (((st as any).temp_switch_to ?? 0) === 1) {
      // TODO-QSP: dynamic text: "Alright, you''re on weekend shifts now. Starting Saturday at ' + $func('time', ...
      scene.text('"Alright, you\'re on weekend shifts now. Starting Saturday at 9:00."');
    } else {
      // TODO-QSP: dynamic text: "Alright, you''re back on evening shifts. Starting Monday at ' + $func('time', '...
      scene.text('"Alright, you\'re back on evening shifts. Starting Monday at 15:00."');
    }
    scene.actions([
      { label: 'Continue', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('<font color="gray">You think about asking to switch schedules, but the other shift conflicts with your existing commitments.</font>');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Resign', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('"I would like to resign," You say as you walk up to his desk.');
    scene.text('Mr. Sobulyagin gives you a confused look. "Are you sure? I mean… If you\'re serious I can arrange everything right now." He scratches his head and starts pulling out the required paperwork, but pauses a moment. "Why so suddenly?"');
    scene.actions([
      { label: 'Change your mind', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('"Actually, I\'d like to think about this a bit more…" You say as you\'re moving back towards the door. "Sorry for bothering you Mr. Sobulyagin."');
    scene.text('He shakes his head. "It\'s fine, but if there\'s nothing else, I\'m busy right now."');
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
      { label: 'Persist', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
    scene.text('"I\'ve already made up my mind on this," you say firmly.');
    scene.text('"Alright, alright," Mr. Sobulyagin says and starts filling out several forms before handing them over to you to sign.');
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'city_pussycats_clerk');
    if (((st as any).temp_pay ?? 0) > 0) {
      // TODO-QSP: dynamic text: Mr. Sobulyagin counts <<$func(''money'', ''string_profit'', temp_pay)>> and hand...
      scene.text(`Mr. Sobulyagin counts ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))} and hands it over to you.`);
    }
    qspCall(st, 'jobs', 'set_terminated', 'city_pussycats_clerk');
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterPunish(s: GameState, scene: SceneBuilder): void {
  (s as any).pussycats_fired_count = ((s as any).pussycats_fired_count ?? 0) + (1);
  if (((s as any).pussycats_fired_count ?? 0) === 1) {
    scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
    scene.text('"Well look who decided to drag their ass into work today," Mr. Sobulyagin exclaims as his expression twists into a scowl when he greets you at the store entrance. "I realize coming to work is difficult for you, but do you think you can spare me a moment and come into my office," he asks dryly. You sigh and follow him as he takes you into his office then closes the door. "Didn\'t I tell you that missing work for three days means you\'ll be fired! You\'re no exception to the rules girl."');
    scene.actions([
      { label: 'Agree and accept being fired', handler: (st: GameState) => {
    (st as any).char_honest = ((st as any).char_honest ?? 0) + (5);
    (st as any).bonus_mood = ((st as any).bonus_mood ?? 0) - (50);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
    scene.text('"You\'re right. I\'ve skipped out on work too many times," you sigh. Mr. Sobulyagin pulls out a document from his desk drawer and begins to fill in the blanks. A few minutes later he hands you some papers and you sign them in silence.');
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'city_pussycats_clerk');
    if (((st as any).temp_pay ?? 0) > 0) {
      // TODO-QSP: dynamic text: For your remaining shifts you get paid <<$func(''money'', ''string_profit'', tem...
      scene.text(`For your remaining shifts you get paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))}`);
      // TODO-QSP: dynamic text: Mr. Sobulyagin counts <<$func(''money'', ''string_profit'', temp_pay)>> and hand...
      scene.text(`Mr. Sobulyagin counts ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))} and hands it over to you.`);
    }
    qspCall(st, 'jobs', 'set_fired', 'city_pussycats_clerk');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'shop_pussycats', 'start');
  } },
    ]);
  } },
      { label: 'Beg to keep your job', handler: (st: GameState) => {
    scene.img('images/pc/reactions/tears1.jpg');
    scene.text('"Please, I can\'t lose the job! I really need the money. Please don\'t fire me! I promise to do better," As you say this, tears begin rolling down your cheeks.');
    scene.text('Mr. Sobulyagin scoffs at you, obviously not swayed so easily by tears. He looks at you in silence with his dark eyes roaming over your body slowly as he licks his lips. "Listen, I\'m not a bad guy," he says as he stands up from his chair and walks to the door. "I\'m willing to give you another chance, but you need to <i>show me</i> how important this job really is to you…" He cups his balls through his slacks and gives them a light squeeze.');
    scene.text('"Or you can leave and lose your job. It\'s up to you, but those are your only options." He opens the door for you, allowing you to leave and lose your job if you don\'t accept his offer.');
    qspCall(st, 'willpower', 'bj', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Leave', handler: (st: GameState) => {
    // TODO-QSP: func('jobs', 'paycheck', 'city_pussycats_clerk')
    qspCall(st, 'jobs', 'set_fired', 'city_pussycats_clerk');
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    qspGoto(st, 'shop_pussycats', 'start');
  } },
      ]);
    }
    scene.actions([
      { label: 'Accept his offer', goto: ['andrey', 'fired1'] },
    ]);
  } },
    ]);
  } else {
    if (((s as any).pussycats_fired_count ?? 0) <= 5) {
      scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
      scene.text('"Well look who decided to drag their ass into work today," Mr. Sobulyagin exclaims as his expression twists into a scowl as he greets you at the store entrance. "I realize coming to work is difficult for you, but do you think you can spare me a moment and come into my office," he asks dryly. You sigh and follow him as he takes you into his office then closes the door. He nods and seems to be talking to himself as much as he is talking to you. He leans against his desk and cups his crotch as he smiles at you. "Well you know the deal if you want to keep your job."');
      qspCall(s, 'willpower', 'bj', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse and get fired', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse and get fired', handler: (st: GameState) => {
    (st as any).char_honest = ((st as any).char_honest ?? 0) + (5);
    (st as any).bonus_mood = ((st as any).bonus_mood ?? 0) - (50);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'willpower', 'bj', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
    scene.text('"You\'re right, and I\'ve decided that I\'m not doing you anymore favors to keep my job." Mr. Sobulyagin scowls at you, but puts his dick away. He pulls out a document from his desk drawer and begins to fill in the blanks. A few minutes later he hands you some papers and you sign them in silence.');
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'city_pussycats_clerk');
    if (((st as any).temp_pay ?? 0) > 0) {
      // TODO-QSP: dynamic text: For your remaining shifts you get paid <<$func(''money'', ''string_profit'', tem...
      scene.text(`For your remaining shifts you get paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))}`);
      // TODO-QSP: dynamic text: Mr. Sobulyagin counts <<$func(''money'', ''string_profit'', temp_pay)>> and hand...
      scene.text(`Mr. Sobulyagin counts ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))} and hands it over to you.`);
    }
    qspCall(st, 'jobs', 'set_fired', 'city_pussycats_clerk');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'shop_pussycats', 'start');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Agree', goto: ['andrey', 'fired1'] },
      ]);
    } else {
      scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
      scene.text('"Well look who decided to drag their ass into work today," Mr. Sobulyagin exclaims as his expression twists into a scowl as he greets you at the store entrance. "I realize coming to work is difficult for you, but do you think you can spare me a moment and come into my office," he asks dryly. You sigh and follow him as he takes you into his office then closes the door. "You are missing too much work and the other employees are noticing. I am going to need something more from you to prove your deserve to keep your job."');
      scene.text('He leans against his desk and cups his crotch as he smiles at you. "You can start off by sucking my cock then you can bend over and let me fuck you in the ass. That\'s the only way you can prove to me that you still deserve to keep your job got it? If not, then you\'re just another lazy brat. I don\'t need someone like that working for me."');
      if (((s as any).pussycats_fired_count ?? 0) === 6) {
        scene.text('"That\'s not fair! You know how much I need this job, so just let me give you a blowjob like usual," You say trying to convince Mr. Sobulyagin to let you keep your job without doing this.');
        scene.text('"Listen, I\'m doing you a favor here. It\'s well within my rights to fire you for missing work, but I\'m not a bad guy. I can see you really want this job," he says while standing up from his chair. "I\'m willing to help you out, but you need to prove to me how much you want this job."');
      }
      qspCall(s, 'willpower', 'anal', 'resist');
      if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Refuse', handler: (st: GameState) => {
    (st as any).char_honest = ((st as any).char_honest ?? 0) + (5);
    (st as any).bonus_mood = ((st as any).bonus_mood ?? 0) - (50);
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    qspCall(st, 'willpower', 'anal', 'resist');
    qspCall(st, 'willpower', 'pay', 'resist');
    qspCall(st, 'stat', '');
    scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
    // TODO-QSP: dynamic text: "You''re right, I''ve skipped out on work too many times, but I''m not doing tha...
    scene.text('"You\'re right, I\'ve skipped out on work too many times, but I\'m not doing that ' + ((((st as any).pussycats_fired_count ?? 0) === 6) ? ('') : ('anymore ')) + 'to keep my job." Mr. Sobulyagin scowls at you, but puts his dick away and pulls out a document from his desk drawer to begin filling in the blanks. A few minutes later he hands you some papers and you sign them without a word.');
    (st as any).temp_pay = qspFunc(s, 'jobs', 'paycheck', 'city_pussycats_clerk');
    if (((st as any).temp_pay ?? 0) > 0) {
      // TODO-QSP: dynamic text: For your remaining shifts you get paid <<$func(''money'', ''string_profit'', tem...
      scene.text(`For your remaining shifts you get paid ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))}`);
      // TODO-QSP: dynamic text: Mr. Sobulyagin counts out <<$func(''money'', ''string_profit'', temp_pay)>> and ...
      scene.text(`Mr. Sobulyagin counts out ${qspFunc(s, 'money', 'string_profit', ((st as any).temp_pay || ''))} and hands it over to you.`);
    }
    qspCall(st, 'jobs', 'set_fired', 'city_pussycats_clerk');
    scene.actions([
      { label: 'Leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspGoto(st, 'shop_pussycats', 'start');
  } },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Agree', goto: ['andrey', 'fired2'] },
      ]);
    }
  }
  // TODO-QSP: end
  scene.build();
}

function enterBeg(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Beg for your job back', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
    scene.text('"And why in the hell would I do that," Mr. Sobulyagin asks scoffingly.');
    scene.text('"Oh please! I\'ll do anything you want. I really need this job!" You say trying your absolute best to convince him.');
    scene.text('"Anything? Ha! Fine, I know what you could do," The manager exclaims as his eyes begin to wander all over your body. "You can start off by sucking my cock then bend over and let me stick my cock into your ass. That\'s the only way you can prove to me you\'re a hard worker got it? If not, then you\'re just another lazy brat, and I don\'t need someone like that working for me."');
    if (((st as any).pussycats_fired_count ?? 0) <= 6) {
      if (((st as any).pussycats_fired_count ?? 0) <= 1) {
        scene.text('"That\'s not fair! You know how much I need this job, just let me give you a blowjob or something like that." You say trying to convince Mr. Sobulyagin to let you have your job back without doing this.');
      } else {
        scene.text('"That\'s not fair! You know how much I need this job, just let me give you a blowjob like usual." You say trying to convince Mr. Sobulyagin to let you have your job back without doing this.');
      }
      scene.text('"Listen I\'m doing you a favor here. It\'s well within my rights not to hire back someone who missed work, but I\'m not a bad guy. I can see you really want this job," he says while standing up from his chair. "So I\'m willing to help you, but you need to prove to me how much you want this job."');
    }
    qspCall(st, 'willpower', 'anal', 'resist');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Refuse', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
    if (((st as any).pussycats_fired_count ?? 0) <= 6) {
      scene.text('Your face immediately turns beet-red as you try to comprehend what you\'ve just heard. "You want me to give you a blowjob… then have anal sex?" You don\'t understand what the hell he\'s thinking. "There\'s no way I\'ll do that!"');
    } else {
      scene.text('"I know I let you do that when I worked for you before" you tell him, "but I\'m not going to start doing that again.');
    }
    scene.text('"Fine then there\'s the door," Mr. Sobulyagin snaps clearly upset with your answer.');
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Agree', goto: ['andrey', 'rehired'] },
    ]);
  } },
    { label: 'Leave', goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterReapply(s: GameState, scene: SceneBuilder): void {
  scene.img('images/locations/city/citycenter/mall/cats/manager_andrew.jpg');
  scene.text('Mr. Sobulyagin doesn\'t mind having you back since you ended it all on quite good terms.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Accept your previous position', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.text('"We\'ve been waiting for you to come back!" Mr. Sobulyagin gives you a few forms to fill out. "I even told Valera from the male department that you\'d come back to us!"');
    scene.text('You fill out the forms and return them to the manager.');
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 0) === 1) {
      scene.actions([
        { label: 'Accept work during the week', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'cleanup_job', 'city_pussycats_clerk');
    qspCall(st, 'jobs', 'set_employed', 'city_pussycats_clerk');
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: dynamic text: You got a job in the youth clothing store ''Pussy-Cats''. Your first workday is ...
    scene.text('You got a job in the youth clothing store \'Pussy-Cats\'. Your first workday is on Monday at 15:00.');
    qspGoto(st, 'shop_pussycats', 'start');
  } },
      ]);
    }
    if (qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 1) === 1) {
      scene.actions([
        { label: 'Accept work during the weekend', handler: (st: GameState) => {
    qspCall(st, 'jobs', 'cleanup_job', 'city_pussycats_clerk');
    qspCall(st, 'jobs', 'set_employed', 'city_pussycats_clerk');
    qspCall(st, 'jobs', 'change_schedule', 'city_pussycats_clerk', 1);
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    // TODO-QSP: dynamic text: You got a job in the youth clothing store ''Pussy-Cats''. Your first workday is ...
    scene.text('You got a job in the youth clothing store \'Pussy-Cats\'. Your first workday is on Saturday at 9:00.');
    qspGoto(st, 'shop_pussycats', 'start');
  } },
      ]);
    }
    (st as any).temp_sched0_ok = qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 0);
    (st as any).temp_sched1_ok = qspFunc(s, 'jobs', 'check_employment_possible', 'city_pussycats_clerk', 1);
    if (((st as any).temp_sched0_ok ?? 0) === 0  &&  (!((st as any).temp_sched1_ok ?? 0))) {
      scene.text('Unfortunately, both shifts conflict with your existing schedule.');
    } else {
      if ((!((st as any).temp_sched0_ok ?? 0))) {
        scene.text('<font color="gray">The evening weekday shift conflicts with your existing schedule.</font>');
      } else {
        if ((!((st as any).temp_sched1_ok ?? 0))) {
          scene.text('<font color="gray">The weekend shift conflicts with your existing schedule.</font>');
        }
      }
    }
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
    ]);
  } },
    { label: 'Leave', goto: ['shop_pussycats', 'start'] },
  ]);
  scene.build();
}

function enterFired1(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).sobulaginsex ?? 0))) {
    (s as any).sobulaginsex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  qspCall(s, 'boyStat', 'A101');
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pussycats_clerk'] = 0;
  ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pussycats_clerk'] = ((s as any).job_missed_total ?? 0)?.['city_pussycats_clerk'];
  qspCall(s, 'jobs', 'bonus_pay', 'city_pussycats_clerk', 410);
  scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
  scene.text('You swallow hard and nod your head. "If this means keeping my job… I\'ll do it."');
  scene.text('Mr. Sobulyagin smiles. "Good girl. I\'m happy to have such a hard worker here at the store," he says almost mockingly. He brings his hand to your cheek and cups it admiring your face with a triumphant smirk. "On your knees," he commands as his hand suddenly moves to the top of your head to push you down towards his crotch.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get on your knees', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/bj1.jpg');
    // TODO-QSP: dynamic text: Falling to your knees, you see he''s already unzipped his pants, pulled his cock...
    scene.text(`Falling to your knees, you see he's already unzipped his pants, pulled his cock out, and started stroking his ${((st as any).dick || '')} cm ${((st as any).dick_girth || '')} cock. It looks enormous in your small hands as you give it a few tentative pumps before opening your mouth. You start off by gently licking the head then move on to licking the entire shaft up and down.`);
    qspCall(st, 'arousal', 'bj', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/bj2.jpg');
    scene.text('After a few minutes, you put his cock in your mouth and start moving your head back and forth with your tongue constantly rolling over the head of his shaft. You feel his dick growing and stiffening as you caress it with your mouth and tongue. You pull his pants down to his knee\'s to make it easier to suck his cock.');
    qspCall(st, 'arousal', 'bj', 5, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/bj3.jpg');
    scene.text('You soon settle into a rhythm with your eyes closing as you start to enjoy yourself a bit. Mr. Sobulyagin\'s breathing quickens and you hear him moaning in pleasure. Eventually, he places his hand on the back of your head and starts forcing you to deepthroat him, which causes you to gag.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'pain', '', 2, 'throat', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/bj4.jpg');
    scene.text('He keeps your head deep down his cock for so long that your throat starts feeling a little numb. You hear him starting to grunt. "I\'m about to cum," He yells out as he removes his hand from your head and leans fully back. You pull out, which makes a popping sound, and start jerking him off straight away.');
    qspCall(st, 'arousal', 'hj', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', 'A101', 1);
    scene.img('images/locations/city/citycenter/mall/cats/sex/bj5.jpg');
    scene.text('He starts grunting louder. "Open your mouth and stick out your tongue." You do as he commands and he takes over jerking his cock. Suddenly, he is shooting ropes of his hot cum in your mouth and all over your tongue. After a few moments, his cock stops twitching and spurting cum. He lets go of his cock as it starts to go limp. "Now swallow." You do as you\'re told and swallow his whole load.');
    // TODO-QSP: dynamic text: "You did very well, <<$pcs_nickname>>! You''ve shown me how hard of a worker you...
    scene.text(`"You did very well, ${((st as any).pcs_nickname || '')}! You've shown me how hard of a worker you are and how badly you want this job, so I'll give you another chance." As he zips up his pants you look up to see him smiling down at you. "You've done enough for today, so you're free to go home if you want. Just make sure to not miss work anymore!" With these words he walks out of the office leaving you to put yourself in order.`);
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
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

function enterFired2(s: GameState, scene: SceneBuilder): void {
  ((s as any).job_booking_debt = (s as any).job_booking_debt ?? {})['city_pussycats_clerk'] = 0;
  ((s as any).job_miss_acknowledged = (s as any).job_miss_acknowledged ?? {})['city_pussycats_clerk'] = ((s as any).job_missed_total ?? 0)?.['city_pussycats_clerk'];
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 3;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'boyStat', 'A101');
  scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
  scene.text('Taking a deep breath you nod your head. "Fine… I\'ll do it." You see Mr. Sobulyagin smile as he places his hand on top of your head and pushes you down to your knees.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A101');
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired1.jpg');
    // TODO-QSP: dynamic text: Falling to your knees you see he''s already unzipped his pants, pulled his cock ...
    scene.text(`Falling to your knees you see he's already unzipped his pants, pulled his cock out, and started stroking his ${((st as any).dick || '')} cm ${((st as any).dick_girth || '')} cock. It looks enormous in your small hands as you give it a few tentative pumps before opening your mouth. You start off by gently licking the head before you start sucking.`);
    qspCall(st, 'arousal', 'bj', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired2.jpg');
    scene.text('After a few minutes, you put his cock in your mouth and start moving your head back and forth with your tongue constantly rolling over the head of his shaft. You feel his cock growing and stiffening as you caress it with your mouth and tongue.');
    scene.text('You soon settle into a rhythm with your eyes closing as you start to enjoy yourself a bit. Mr. Sobulyagin\'s breathing quickens, and you hear him moaning in pleasure. Eventually, he places his hand on the back of your head and starts forcing you to deepthroat him which causes you to gag.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'pain', '', 2, 'throat', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired3.jpg');
    scene.text('"I\'ve changed my mind, and I can\'t wait. I want your ass now. You can clean my cock up with your mouth after," he smirks, and you feel your stomach turn slightly from the look he gives you. His hands start to roam over your body, squeezing and massaging your breasts through your top as he turns you so your back and ass are facing him. He pushes you forward, making you bend over his desk. He quickly removes any clothes in the way until your bare ass is exposed to him.');
    scene.text('He gives your ass checks several hard slaps, which cause you to wince in pain. "Yeah, bad little girls get their asses punished, and you have been a very bad girl." You can hear the leering in his voice as he gives your bare ass another hard smack. With that done, he spreads your cheeks and rams his cock against your anus. He doesn\'t even spit on your asshole. The only lubrication is the little bit of your slobber that\'s left on his cock.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'maso');
    qspCall(st, 'pain', '', 3, 'asschecks', 'slap');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Prepare for it', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A101');
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired4.jpg');
    // TODO-QSP: dynamic text: With a hard thrust he shoves his <<dick>> cm <<$dick_girth>> cock deep inside yo...
    scene.text(`With a hard thrust he shoves his ${((st as any).dick || '')} cm ${((st as any).dick_girth || '')} cock deep inside you. The sudden forceful pain causes you to cry out and try to squirm away, but your hips are pressed against the edge of the desk while his hands hold them in place. He quickly forces his cock, balls deep into your ass, and the more you cry out and resist the more he seems to like it. While he is fucking you, he reaches up and pulls your top off, leaving your breasts exposed.`);
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'maso', 'rough');
    qspCall(st, 'pain', '', 7, 'asshole', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired5.jpg');
    scene.text('He soon settles into a hard, pounding rhythm. You are tearing up from the pain and grip the table tightly as you try to endure. Your asshole already feels like it is on fire, but he doesn\'t relent in the slightest. He just keeps pounding your little asshole, leaving you to wish he would hurry up and finish.');
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'maso', 'rough');
    qspCall(st, 'pain', '', 7, 'asshole', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', 'A101', 1);
    qspCall(st, 'cum_call', 'breasts', 'A101', 1);
    qspCall(st, 'cum_call', 'face', 'A101', 1);
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired6.jpg');
    scene.text('He starts grunting louder then, finally, he pulls his cock out of your ass and you sigh in relief. He takes a step back from you. "Get on your knees and finish me off." You turn around and do as he says. You take his dick in your mouth and start sucking it. You try not to think about where it just was, but at least the pain has stopped. Suddenly he pulls his cock out of your mouth and starts shooting ropes of his hot cum all over your face and tits. After a few moments, his cock stops twitching and spurting cum on you. He lets go of his cock as it begins to go limp.');
    // TODO-QSP: dynamic text: "You did very well, <<$pcs_nickname>>! You''ve shown me how badly you want this ...
    scene.text(`"You did very well, ${((st as any).pcs_nickname || '')}! You've shown me how badly you want this job, so I'll give you another chance." As he zips his pants, you look up to see him smiling down at you. "You've done enough for today, so you're free to go home if you want. Just make sure to not miss work anymore!"`);
    scene.text('You stand up slowly because your anus hurts <i>a lot</i>, almost feeling like someone has lit it on fire. You start to head towards the door, but he stops you. "Hey, don\'t you think you should thank me for giving you another chance," he asks as he smiles smugly.');
    scene.text('"Thank you very much," You say while trying your hardest to keep a smile on your face.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
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

function enterRehired(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'jobs', 'cleanup_job', 'city_pussycats_clerk');
  qspCall(s, 'jobs', 'set_employed', 'city_pussycats_clerk');
  (s as any).sexpartkno = 1;
  (s as any).spafinloc = 3;
  qspCall(s, 'cum_manage', '');
  qspCall(s, 'boyStat', 'A101');
  scene.img('images/locations/city/citycenter/mall/cats/fired.jpg');
  scene.text('Taking a deep breath you nod your head. "Fine… I\'ll do it." You see Mr. Sobulyagin smile as he places his hand on top of your head and pushes you down to your knees.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Get on your knees', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A101');
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired1.jpg');
    // TODO-QSP: dynamic text: Falling to your knees you see he''s already unzipped his pants, pulled his cock ...
    scene.text(`Falling to your knees you see he's already unzipped his pants, pulled his cock out, and started stroking his ${((st as any).dick || '')} cm ${((st as any).dick_girth || '')} cock. It looks enormous in your small hands as you give it a few tentative pumps before opening your mouth. You start off by gently licking the head before you start sucking.`);
    qspCall(st, 'arousal', 'bj', 3, 'sub');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired2.jpg');
    scene.text('After a few minutes, you put his cock in your mouth and start moving your head back and forth with your tongue constantly rolling over the head of his shaft. You feel his cock growing and stiffening as you caress it with your mouth and tongue.');
    scene.text('You soon settle into a rhythm with your eyes closing as you start to enjoy yourself a bit. Mr. Sobulyagin\'s breathing quickens, and you hear him moaning in pleasure. Eventually, he places his hand on the back of your head and starts forcing you to deepthroat him which causes you to gag.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'pain', '', 2, 'throat', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired3.jpg');
    scene.text('"I\'ve changed my mind, and I can\'t wait. I want your ass now. You can clean my cock up with your mouth after," he smirks, and you feel your stomach turn slightly from the look he gives you. His hands start to roam over your body, squeezing and massaging your breasts through your top, as he turns you so your back and ass are facing him. He pushes you forward, making you bend over his desk. He quickly removes any clothes in the way until your bare ass is exposed to him.');
    scene.text('He gives your ass checks several hard slaps, which cause you to wince in pain. "Yeah, bad little girls get their asses punished and you have been a very bad girl." You can hear the leering in his voice as he gives your bare ass another hard smack. With that, he spreads your cheeks and rams his cock against your anus. He doesn\'t even spit on your asshole. The only lubrication is the little bit of your slobber that\'s left on his cock.');
    qspCall(st, 'arousal', 'bj', 5, 'sub', 'deepthroat');
    qspCall(st, 'arousal', 'anal', (-5), 'sub', 'maso');
    qspCall(st, 'pain', '', 3, 'asschecks', 'slap');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Prepare for it', handler: (st: GameState) => {
    qspCall(st, 'boyStat', 'A101');
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired4.jpg');
    // TODO-QSP: dynamic text: With a hard thrust he shoves his <<dick>> cm <<$dick_girth>> cock deep inside yo...
    scene.text(`With a hard thrust he shoves his ${((st as any).dick || '')} cm ${((st as any).dick_girth || '')} cock deep inside you. The sudden forceful pain causes you to cry out and try to squirm away, but your hips are pressed against the edge of the desk while his hands hold them in place. He quickly forces his cock, balls deep into your ass, and the more you cry out and resist the more he seems to like it. While he is fucking you, he reaches up and pulls your top off, leaving your breasts exposed.`);
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'maso', 'rough');
    qspCall(st, 'pain', '', 7, 'asshole', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Continue', handler: (st: GameState) => {
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired5.jpg');
    scene.text('He soon settles into a hard, pounding rhythm. You are tearing up from the pain and grip the table tightly while you try to endure. Your asshole already feels like it is on fire, but he doesn\'t relent in the slightest. He just keeps pounding your little asshole, leaving you to wish he would hurry up and finish.');
    qspCall(st, 'arousal', 'anal', 5, 'sub', 'maso', 'rough');
    qspCall(st, 'pain', '', 7, 'asshole', 'stretch');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Finish', handler: (st: GameState) => {
    qspCall(st, 'cum_call', 'mouth', 'A101', 1);
    qspCall(st, 'cum_call', 'breasts', 'A101', 1);
    qspCall(st, 'cum_call', 'face', 'A101', 1);
    scene.img('images/locations/city/citycenter/mall/cats/sex/fired6.jpg');
    scene.text('He starts grunting louder then, finally, he pulls his cock out of your ass, and you sigh in relief. He takes a step back from you. "Get on your knees and finish me off." You turn around and do as he says. You take his dick in your mouth and start sucking it. You try not to think about where it just was, but at least the pain has stopped. Suddenly, he pulls his cock out of your mouth and starts shooting ropes of his hot cum all over your face and tits. After a few moments, his cock stops twitching and spurting cum on you. He lets go of his cock as it begins to go limp.');
    // TODO-QSP: dynamic text: "You did very well, <<$pcs_nickname>>! You''ve shown me how badly you want this ...
    scene.text(`"You did very well, ${((st as any).pcs_nickname || '')}! You've shown me how badly you want this job, so I'll give you another chance." As he zips his pants, you look up to see him smiling down at you. "You've done enough for today, so you're free to go home if you want. Just make sure to not miss work anymore!"`);
    scene.text('You stand up slowly because your anus hurts <i>a lot</i>, almost feeling like someone has lit it on fire. You start to head towards the door, but he stops you. "Hey, don\'t you think you should thank me for giving you another chance," he asks, smiling smugly.');
    scene.text('"Thank you very much," You say trying your hardest to keep a smile on your face.');
    qspCall(st, 'arousal', 'end');
    scene.actions([
      { label: 'Leave', goto: ['shop_pussycats', 'start'] },
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

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'apply':
      enterApply(s, scene);
      break;
    case 'regular':
      enterRegular(s, scene);
      break;
    case 'punish':
      enterPunish(s, scene);
      break;
    case 'beg':
      enterBeg(s, scene);
      break;
    case 'reapply':
      enterReapply(s, scene);
      break;
    case 'fired1':
      enterFired1(s, scene);
      break;
    case 'fired2':
      enterFired2(s, scene);
      break;
    case 'rehired':
      enterRehired(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const andrey: LocationDef = {
  name: 'andrey',
  title: 'Unfortunately, both shifts conflict with your existing sched',
  region: 'other',
  description: ['You knock on Mr. Sobulyagin\'s office door, and when he sees you enter, his expression hardens. "What do you want," he questions you with a scowl.'],
  enter: enter,
};
