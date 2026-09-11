import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  scene.text('The manager of the post office, also known as the postmaster, has just finished helping a customer and is about to walk back to his office when he spots you.');
  scene.text('"You look like you want to ask something. If it\'s about our regular services, then you should get in line. I don\'t have time to help any more customers," he says.');
  qspCall(s, 'jobs', 'get_job_definition', 'pav_mailgirl');
  if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === '') {
    if (((s as any).job_hiring_step ?? 0)?.['pav_mailgirl'] === 0) {
      scene.actions([
        { label: 'Ask for work', goto: ['post_master', 'ask_for_work'] },
      ]);
    } else {
      if (((s as any).job_hiring_step ?? 0)?.['pav_mailgirl'] === 1) {
        scene.actions([{ label: 'Continue', goto: ['post_master', 'visit_after_refusing'] }]);
      } else {
        if (((s as any).job_hiring_step ?? 0)?.['pav_mailgirl'] === 2) {
          if (((s as any).job_last_work_day ?? 0)?.['pav_mailgirl'] !== ((s as any).daystart ?? 0)) {
            if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_mailgirl') === 0) {
              scene.actions([{ label: 'Continue', goto: ['post_master', 'visit_outside_work_hours'] }]);
            } else {
              scene.actions([{ label: 'Continue', goto: ['post_master', 'start_work'] }]);
            }
          }
        } else {
          if (((s as any).job_hiring_step ?? 0)?.['pav_mailgirl'] === 3) {
            scene.actions([{ label: 'Continue', goto: ['post_master', 'visit_after_refusing2'] }]);
          }
        }
      }
    }
  } else {
    if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'employed') {
      if (((s as any).job_missed_total ?? 0)?.['pav_mailgirl'] > ((s as any).job_miss_acknowledged ?? 0)?.['pav_mailgirl']) {
        scene.actions([{ label: 'Continue', goto: ['post_master', 'scolding'] }]);
      }
      if (((s as any).job_suspended ?? 0)?.['pav_mailgirl'] === 1) {
        scene.actions([
          { label: 'Tell him you can work this coming Saturday after all', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'resume_job', 'pav_mailgirl');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('You enter the postmaster\'s office at an opportune time. It looks like he\'s not doing anything right now.');
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>, can I help you?" he asks as soon as he sees you.
    scene.text(`"${((s as any).pcs_firstname ?? 0)}, can I help you?" he asks as soon as he sees you.`);
    scene.text('"I came to say that I can make it after all this Saturday!" you reply.');
    scene.text('"Ah, excellent news! I\'ll tell Aleksiy he can stay at home with his daughter," he says while quickly making a note. "Is there anything else I can do for you?"');
    scene.text('"No, that was it," you tell him. "See you on Saturday!"');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
        ]);
      } else {
        if (qspFunc(s, 'jobs', 'is_work_day', 'pav_mailgirl') === 0  ||  (qspFunc(s, 'jobs', 'is_work_day', 'pav_mailgirl') === 1  &&  ((s as any).job_last_work_day ?? 0)?.['pav_mailgirl'] === ((s as any).daystart ?? 0))) {
          scene.actions([
            { label: 'Tell him you can\'t work next Saturday', handler: (st: GameState) => {
    qspCall(s, 'jobs', 'suspend_job', 'pav_mailgirl');
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('The postmaster looks like he\'s swamped with work right now. His desk is completely covered with mail.');
    scene.text('"Excuse me?" you say, trying to get his attention. "I won\'t be able to make it next Saturday after all."');
    scene.text('The postmaster looks up at you somewhat disappointedly. "Oh, okay. No problem. I\'ll let Aleksiy know he has to come in on Saturday. Thanks for letting me know, I guess."');
    scene.text('He scribbles something down on a piece of paper and focuses on his work again.');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
          ]);
        } else {
          if (qspFunc(s, 'jobs', 'is_arrival_time', 'pav_mailgirl') === 1) {
            scene.img('images/locations/shared/postoffice/postmaster.jpg');
            // TODO-QSP: dynamic text: "Hey there, <<$pcs_firstname>>!" the postmaster smiles when you enter the post o...
            scene.text(`"Hey there, ${((s as any).pcs_firstname ?? 0)}!" the postmaster smiles when you enter the post office. "Right on time. Please follow me."`);
            scene.actions([
              { label: 'Follow him', goto: ['post_deliveries', 'start'] },
            ]);
          } else {
            if (((s as any).hour ?? 0) < 11) {
              (s as any).minut = ((s as any).minut ?? 0) + 2;
              qspCall(s, 'stat', '');
              scene.img('images/locations/shared/postoffice/postmaster.jpg');
              // TODO-QSP: dynamic text: "You're a bit early, <<$pcs_firstname>>!" the postmaster says when he sees you e...
              scene.text(`"You're a bit early, ${((s as any).pcs_firstname ?? 0)}!" the postmaster says when he sees you enter his office. "I don't have your mail yet, but I like the enthusiasm. Come see me between '+func('time', 'get_time_string', 11, 0)+' and '+func('time', 'get_time_string', 12, 0)+'. I should have it ready then."`);
              scene.actions([
                { label: 'Leave him alone', goto: ['post_office', 'start'] },
              ]);
            } else {
              if (((s as any).hour ?? 0) > 11  &&  ((s as any).job_last_work_day ?? 0)?.['pav_mailgirl'] !== ((s as any).daystart ?? 0)) {
                (s as any).minut = ((s as any).minut ?? 0) + 2;
                ((s as any).job_last_work_day ?? {})['pav_mailgirl'] = ((s as any).daystart ?? 0);
                qspCall(s, 'stat', '');
                scene.img('images/locations/shared/postoffice/postmaster.jpg');
                // TODO-QSP: dynamic text: "You're late, <<$pcs_firstname>>!" the postmaster scoffs when he sees you enter ...
                scene.text(`"You're late, ${((s as any).pcs_firstname ?? 0)}!" the postmaster scoffs when he sees you enter his office. "I already called Aleksiy in to cover your shift. He wasn't happy, and neither am I. Don't make this a habit…"`);
                scene.text('You try to apologize, but he\'s not interested and tells you to leave him alone.');
                scene.actions([
                  { label: 'Leave his office', goto: ['post_office', 'start'] },
                ]);
              }
            }
          }
        }
      }
      // TODO-QSP: act $func('wrap', 'v_neg', 'Resign from your job'):
      (s as any).minut = ((s as any).minut ?? 0) + 5;
      qspCall(s, 'jobs', 'set_terminated', 'pav_mailgirl');
      qspCall(s, 'stat', '');
      scene.img('images/locations/shared/postoffice/postmaster.jpg');
      // TODO-QSP: dynamic text: "<<$pcs_nickname>>," the postmaster says, looking up from his desk. What can I d...
      scene.text(`"${((s as any).pcs_nickname ?? 0)}," the postmaster says, looking up from his desk. What can I do for you?"`);
      scene.text('With a sigh you tell him you wish to resign from the job: "Well, I\'m just calling in to resign. Thank you for the opportunity, but my circumstances have changed and I can no longer continue do do my shifts."');
      scene.text('"Are you sure about this? Aleksiy is really enjoying the time with his family."');
      scene.text('You nod and confirm, "Yes I\'m sure."');
      // TODO-QSP: dynamic text: "Well alright then; good luck with your future plans <<$pcs_nickname>>"
      scene.text(`"Well alright then; good luck with your future plans ${((s as any).pcs_nickname ?? 0)}"`);
      scene.text('You thank him and leave.');
      scene.actions([
        { label: 'Leave', goto: ['post_office', 'start'] },
      ]);
    }
  }
  if (((s as any).job_status ?? 0)?.['pav_mailgirl'] === 'fired') {
    if (((s as any).job_termination_reason ?? 0)?.['pav_mailgirl'] === 'no_show') {
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>…" the postmaster sighs when he sees you, shaking his head. "...
      scene.text(`"${((s as any).pcs_firstname ?? 0)}…" the postmaster sighs when he sees you, shaking his head. "I really wanted this to work out, but you left me no choice. You kept not showing up, and Aleksiy can't keep covering for you on short notice. I'm sorry, but I've had to let you go."`);
      scene.text('He looks genuinely disappointed. "I wish you\'d at least told me you couldn\'t make it. I would\'ve understood. But just not showing up? That\'s not how it works."');
    } else {
      scene.text('"You?! Get out of here!" he shouts angrily when you enter his office. "There\'s no job for you! Not now, not ever! That screw-up of yours ruined our perfect record!"');
      scene.text('You try to explain what happened, but he\'s simply not interested in whatever it is you have to say. It seems very unlikely that he\'d consider hiring you again.');
    }
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  }
  scene.actions([
    { label: 'Leave', goto: ['post_office', 'start'] },
  ]);
  scene.build();
}

function enterScolding(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  if (((s as any).job_booking_debt ?? 0)?.['pav_mailgirl'] === 1) {
    // TODO-QSP: dynamic text: "<<$pcs_firstname>>," the postmaster says, looking up from his desk with a frown...
    scene.text(`"${((s as any).pcs_firstname ?? 0)}," the postmaster says, looking up from his desk with a frown. "You didn't show up on Saturday. I had to call Aleksiy in at the last minute, and he was <i>not</i> happy about it."`);
    scene.text('He sighs. "Look, I understand things come up. But if you can\'t make it, <b>please let me know beforehand</b> so I can make arrangements. Don\'t just leave me hanging, okay?"');
  } else {
    if (((s as any).job_booking_debt ?? 0)?.['pav_mailgirl'] === 2) {
      // TODO-QSP: dynamic text: "<<$pcs_firstname>>!" the postmaster snaps when he sees you. "This is the second...
      scene.text(`"${((s as any).pcs_firstname ?? 0)}!" the postmaster snaps when he sees you. "This is the second time you've not shown up without telling me! Do you have any idea how difficult it is to find someone to cover for you on such short notice?"`);
      scene.text('He shakes his head in frustration. "I\'m giving you another chance because you do good work when you actually show up. But I\'m warning you — don\'t make this a habit."');
    } else {
      if (((s as any).job_booking_debt ?? 0)?.['pav_mailgirl'] >= 3) {
        // TODO-QSP: dynamic text: "<<$pcs_firstname>>." The postmaster's voice is ice cold. "You didn't come in. A...
        scene.text(`"${((s as any).pcs_firstname ?? 0)}." The postmaster's voice is ice cold. "You didn't come in. Again. Without a word."`);
        scene.text('He leans forward, his expression dead serious. "This is your last warning. One more no-show and I\'m giving your job to someone who actually wants it. Aleksiy has been asking for his Saturday shifts back, and right now I\'m struggling to think of a reason not to let him."');
      }
    }
  }
  ((s as any).job_miss_acknowledged ?? {})['pav_mailgirl'] = ((s as any).job_missed_total ?? 0)?.['pav_mailgirl'];
  scene.actions([
    { label: 'Apologize and leave', goto: ['post_office', 'start'] },
  ]);
  scene.build();
}

function enterAskForWork(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  scene.text('"A job? I haven\'t got any jobs," he shrugs.');
  scene.text('Just as you\'re about to turn around to leave, he stops you. "Actually, Aleksiy has been mentioning he wants to spend more time with his sick daughter on weekends. Maybe… Come back here, girl."');
  scene.text('He takes another good look at you and seems to be in deep thought for a moment before humming contently.');
  // TODO-QSP: dynamic text: "Alright, I'll give you a chance to prove yourself. You can deliver some urgent ...
  scene.text(`"Alright, I'll give you a chance to prove yourself. You can deliver some urgent letters and packages on Saturday afternoon. You'll get the same pay Aleksiy gets, assuming you do a good job. ${qspFunc(s, 'money', 'string_profit', 500)} total, for about three hours of work - from '+func('time', 'get_time_string', 12, 0)+' to roughly '+func('time', 'get_time_string', 15, 0)+'. If you do well, you can do it every week," he offers.`);
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_mailgirl'] = 1;
    scene.text('"Sorry, but I don\'t know. That\'s not what I\'m looking for," you reply.');
    scene.text('The postmaster looks at you in confusion, wondering what kind of job you expected to get here. Nevertheless, he sighs. "Suit yourself. Tough luck for Aleksiy, then. Well, let me know if you change your mind," he says before returning to work.');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
    { label: 'Accept the job', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_mailgirl'] = 2;
    scene.text('"That sounds great, thank you!" you smile.');
    // TODO-QSP: dynamic text: "<b>Meet me here on Saturday, between '+func('time', 'get_time_string', 11, 0)+'...
    scene.text('"<b>Meet me here on Saturday, between \'+func(\'time\', \'get_time_string\', 11, 0)+\' and \'+func(\'time\', \'get_time_string\', 12, 0)+\'.</b> I\'ll talk you through the details then," he grunts. "By the way: any complaints from people not receiving their mail in good shape and you\'re out. Our post office has a damn near perfect record for deliveries, and I intend to keep it that way!"');
    scene.text('"<b>And make sure you actually show up when you\'re expected,</b>" he adds sternly. "If you can\'t make it, that\'s fine, but tell me beforehand! Aleksiy needs to know whether he\'s working or not."');
    scene.text('He quickly records your personal information and sends you on your way before returning to work.');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVisitAfterRefusing(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  scene.text('"Wait… Weren\'t you here before?" he asks when he sees your face. "Right, you were here about that Saturday job! It\'s still available if you want it?"');
  // TODO-QSP: dynamic text: When you ask him about the details, he reminds you. "You can deliver some urgent...
  scene.text(`When you ask him about the details, he reminds you. "You can deliver some urgent letters and packages on Saturday afternoon. You'll get the same pay Aleksiy gets, assuming you do a good job. ${qspFunc(s, 'money', 'string_profit', 500)} total, for about three hours of work - from '+func('time', 'get_time_string', 12, 0)+' to roughly '+func('time', 'get_time_string', 15, 0)+'. If you do well, you can do it every week."`);
  scene.actions([
    { label: 'Decline', handler: (st: GameState) => {
    scene.text('"Sorry, but I don\'t know…" you tell him.');
    scene.text('He raises a brow. "Still? Okay… If you\'re not interested in this job, then there\'s no point in visiting me again because I won\'t have anything else. Let me know if you change your mind. Until then, stop wasting my time."');
    scene.text('He quickly returns to his work.');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
    { label: 'Accept the job', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_mailgirl'] = 2;
    scene.text('"That sounds great, thank you!" you smile');
    // TODO-QSP: dynamic text: "<b>Meet me here on Saturday, between '+func('time', 'get_time_string', 11, 0)+'...
    scene.text('"<b>Meet me here on Saturday, between \'+func(\'time\', \'get_time_string\', 11, 0)+\' and \'+func(\'time\', \'get_time_string\', 12, 0)+\'.</b> I\'ll talk you through the details then," he grunts. "By the way: any complaints from people not receiving their mail in good shape and you\'re out! Our post office has a damn near perfect record for deliveries, and I intend to keep it that way!"');
    scene.text('"<b>And make sure you actually show up when you\'re expected,</b>" he adds sternly. "If you can\'t make it, that\'s fine, but tell me beforehand!"');
    scene.text('He then nods you off, before returning to his work.');
    scene.actions([
      { label: 'Leave him alone', goto: ['post_office', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVisitAfterRefusing2(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  // TODO-QSP: dynamic text: The postmaster looks at you expectantly when he sees you. "Hello, <<$pcs_firstna...
  scene.text(`The postmaster looks at you expectantly when he sees you. "Hello, ${((s as any).pcs_firstname ?? 0)}. I hope you're here with good news?"`);
  scene.actions([
    { label: 'Decline the job', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_mailgirl'] = 1;
    scene.text('"I\'ve given it some thought, but no. You\'ll have to find someone else," you tell him.');
    scene.text('"That\'s too bad. You could\'ve been a great post girl! Well, thanks for letting me know," he mutters, clearly disappointed. "My door is always open for you if you change your mind."');
    scene.actions([
      { label: 'Leave the postmaster\'s office', goto: ['post_office', 'start'] },
    ]);
  } },
    { label: 'Accept the job', handler: (st: GameState) => {
    (s as any).temp_prev_job_last_work_day = ((s as any).job_last_work_day ?? 0)?.['pav_mailgirl'];
    qspCall(s, 'jobs', 'set_employed', 'pav_mailgirl');
    ((s as any).job_last_work_day ?? {})['pav_mailgirl'] = ((s as any).temp_prev_job_last_work_day ?? 0);
    scene.text('"I\'ve given it some thought and I\'d like to take the job," you tell him.');
    scene.text('"That\'s great! In that case, I\'ll let Aleksiy know he no longer has to come in on weekends. See you on Saturday!" he says while shaking your hand.');
    // TODO-QSP: dynamic text: You can now deliver mail every Saturday from '+func('time', 'get_time_string', 1...
    scene.text('You can now deliver mail every Saturday from \'+func(\'time\', \'get_time_string\', 12, 0)+\' to \'+func(\'time\', \'get_time_string\', 15, 0)+\'.');
    scene.actions([
      { label: 'Leave the postmaster\'s office', goto: ['post_office', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterVisitOutsideWorkHours(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  scene.text('The postmaster looks at you in confusion, wondering why you\'re here. "Yes? More questions? You look like you want to ask something…"');
  scene.text('"Could you tell me about the job again?" you ask.');
  // TODO-QSP: dynamic text: He nods. "Of course. As you probably know, Russian Post doesn't deliver regular ...
  scene.text('He nods. "Of course. As you probably know, Russian Post doesn\'t deliver regular mail on Saturdays, only priority mail. That\'s what you will be delivering. Not a lot of mail, but if people choose to have it delivered on Saturdays, it must be important! It\'s a big responsibility, but I trust you to get the job done. It\'ll take you roughly three hours, going on past experience. Some days we have more, some days we have less. <b>Make sure you\'re here between \'+func(\'time\', \'get_time_string\', 11, 0)+\' and \'+func(\'time\', \'get_time_string\', 12, 0)+\' on Saturday, so I can talk you through what exactly it is you have to do.</b>"');
  scene.text('He watches you for a second while you try to memorize it all. "Was that all? I really need to get back to work…" he says somewhat impatiently.');
  scene.actions([
    { label: 'Leave him alone', goto: ['post_office', 'start'] },
  ]);
  scene.build();
}

function enterStartWork(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + (60 - ((s as any).minut ?? 0));
  qspCall(s, 'stat', '');
  scene.img('images/locations/shared/postoffice/postmaster.jpg');
  scene.text('"Ah good, you\'re here!" the postmaster smiles when you enter the post office. "And right on time too! Please follow me."');
  scene.text('He guides you to the back room where a number of small packages and letters are packed into a bag.');
  // TODO-QSP: dynamic text: "The addresses are all fairly nearby. It might look like a lot, but you should b...
  scene.text('"The addresses are all fairly nearby. It might look like a lot, but you should be done by \'+func(\'time\', \'get_time_string\', 15, 0)+\'," he reassures you. "It\'s simple: bring the mail to where it needs to be, have them sign on this sheet, and bring back the mail you couldn\'t deliver for whatever reason."');
  scene.text('He continues on for a while longer about the rules, but they seem rather self-explanatory and you don\'t pay close attention to what he\'s saying.');
  scene.text('"Oh, before I forget: you might want to avoid certain streets," he warns you. "I\'ve marked them on this map. You wouldn\'t be the first to get robbed by hoodlums hoping to find something valuable in the packages. And you wouldn\'t be the first to get a beating when there\'s nothing of value in your bag. Anyway, avoid these areas and you should be fine."');
  scene.text('He hands you a map with a bunch of streets and plazas marked out. He has drawn out the best route to take today too.');
  scene.actions([
    { label: 'Start your round', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 60;
    ((s as any).job_last_work_day ?? {})['pav_mailgirl'] = ((s as any).daystart ?? 0);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postgirl.jpg');
    scene.text('The first hour goes by rather quickly. It\'s fairly easy work, but you notice that you\'re losing a lot of time by avoiding the \'dangerous\' streets. You could easily save half an hour, if not more, just by cutting through them if needed.');
    scene.text('Then again, he wouldn\'t warn you and go through the trouble of drawing out a map if it wasn\'t important…');
    qspCall(s, 'willpower', 'misc', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Use the more dangerous shortcuts [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Use the more dangerous shortcuts [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 70;
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('You walk by yet another empty street and look at your map again. Deciding to ignore the risk, you head down one of the streets marked as dangerous.');
    scene.text('You sometimes feel a little uncomfortable when small groups of rowdy looking guys are checking you out, but fortunately they leave you alone and your bag is empty in no time at all.');
    // TODO-QSP: dynamic text: You're done almost an hour faster than planned, and it's only '+func('time', 'ge...
    scene.text('You\'re done almost an hour faster than planned, and it\'s only \'+func(\'time\', \'get_time_string\', 14, 10)+\' when you return to the postmaster.');
    scene.text('He gives you a suspicious look and shakes his head. "There\'s no way you\'d be back already if you listened to what I said. You ignored my warning, didn\'t you?"');
    scene.actions([
      { label: 'Be honest', handler: (st: GameState) => {
    (s as any).money = ((s as any).money ?? 0) + (500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('"Yes…" you admit. "But I can take care of myself!"');
    scene.text('He lets out an exasperated sigh, but nods. "I drew out that map for your safety, girl, but fine. As long as you do a good job and everyone gets their mail on time, I won\'t ask how you do it. Just be careful, okay?"');
    // TODO-QSP: dynamic text: He hands you the full amount for your work despite you finishing quicker. You ev...
    scene.text(`He hands you the full amount for your work despite you finishing quicker. You even find ${qspFunc(s, 'money', 'string_profit', 50)} extra. "From Aleksiy. He says thanks for his first Saturday off in months! He and his little girl dropped by earlier, he looked so happy!" he explains. "Anyway, as far as I'm concerned, you got the job for every weekend. What do you say, same time next Saturday?"`);
    qspCall(s, 'post_master', 'job_offer');
  } },
      { label: 'Lie', handler: (st: GameState) => {
    (s as any).money = ((s as any).money ?? 0) + (500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('"No, I\'m just a fast worker," you lie.');
    scene.text('He sees right through you, but can\'t help but laugh. "You kids and your youthful hubris! I drew out that map for your safety, but fine. As long as you do a good job and everyone gets their mail on time, I won\'t ask how you do it. Just be careful, okay?"');
    // TODO-QSP: dynamic text: He hands you the full amount for your work despite you finishing quicker. You ev...
    scene.text(`He hands you the full amount for your work despite you finishing quicker. You even find ${qspFunc(s, 'money', 'string_profit', 50)} extra. "From Aleksiy. He says thanks for his first Saturday off in months! He and his little girl dropped by earlier, he looked so happy!" he explains. "Anyway, as far as I'm concerned, you got the job for every weekend. What do you say, same time next Saturday?"`);
    qspCall(s, 'post_master', 'job_offer');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Stick to the \'safe\' streets', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 115;
    (s as any).money = ((s as any).money ?? 0) + (500);
    qspCall(s, 'stat', '');
    scene.img('images/locations/shared/postoffice/postmaster.jpg');
    scene.text('He warned you for a reason, so you think it best to play it safe, especially on your first day.');
    // TODO-QSP: dynamic text: You stick to the route he suggested and have a fairly uneventful day delivering ...
    scene.text('You stick to the route he suggested and have a fairly uneventful day delivering the rest of your mail. You return to the post office just before \'+func(\'time\', \'get_time_string\', 15, 0)+\'.');
    scene.text('"You managed to deliver all of it? That\'s great!" the postmaster beams as you put the empty bag back where it belongs.');
    // TODO-QSP: dynamic text: He hands you your pay right away, with another <<$func('money', 'string_profit',...
    scene.text(`He hands you your pay right away, with another ${qspFunc(s, 'money', 'string_profit', 50)} extra. "From Aleksiy. He says thanks for his first Saturday off in months! He and his little girl dropped by earlier and he looked so happy!" he explains. "As far as I'm concerned, you got the job for every weekend. What do you say, same time next Saturday?"`);
    qspCall(s, 'post_master', 'job_offer');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterJobOffer(s: GameState, scene: SceneBuilder): void {
  scene.actions([
    { label: 'You\'re not sure', handler: (st: GameState) => {
    ((s as any).job_hiring_step ?? {})['pav_mailgirl'] = 3;
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('"I don\'t know how next week will look yet. Can I think about it?" you ask.');
    scene.text('"I guess, but I\'m telling Aleksiy he has to come in next Saturday then. I can\'t work with maybes," he shrugs. "If you want the job, let me know before Saturday so I can make the arrangements. If I haven\'t heard from you by closing time on Friday, I will assume you\'re not coming."');
    scene.text('You nod understandingly. "That sounds fair. I\'ll come and tell you once I\'ve made my decision."');
    scene.actions([
      { label: 'Leave the postmaster\'s office', goto: ['post_office', 'start'] },
    ]);
  } },
    { label: 'Accept the job', handler: (st: GameState) => {
    (s as any).temp_prev_job_last_work_day = ((s as any).job_last_work_day ?? 0)?.['pav_mailgirl'];
    qspCall(s, 'jobs', 'set_employed', 'pav_mailgirl');
    ((s as any).job_last_work_day ?? {})['pav_mailgirl'] = ((s as any).temp_prev_job_last_work_day ?? 0);
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    scene.text('You tell him you want to work again next Saturday.');
    scene.text('"That\'s great! I\'ll let Aleksiy know he no longer has to come in on weekends, in that case. See you next week!" he says while shaking your hand. "And thank you for a job well done!"');
    // TODO-QSP: dynamic text: You can now deliver mail every Saturday from '+func('time', 'get_time_string', 1...
    scene.text('You can now deliver mail every Saturday from \'+func(\'time\', \'get_time_string\', 12, 0)+\' to \'+func(\'time\', \'get_time_string\', 15, 0)+\'.');
    scene.actions([
      { label: 'Leave the postmaster\'s office', goto: ['post_office', 'start'] },
    ]);
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'scolding':
      enterScolding(s, scene);
      break;
    case 'ask_for_work':
      enterAskForWork(s, scene);
      break;
    case 'visit_after_refusing':
      enterVisitAfterRefusing(s, scene);
      break;
    case 'visit_after_refusing2':
      enterVisitAfterRefusing2(s, scene);
      break;
    case 'visit_outside_work_hours':
      enterVisitOutsideWorkHours(s, scene);
      break;
    case 'start_work':
      enterStartWork(s, scene);
      break;
    case 'job_offer':
      enterJobOffer(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const post_master: LocationDef = {
  name: 'post_master',
  title: 'Resign from your job',
  region: 'other',
  description: ['The manager of the post office, also known as the postmaster, has just finished helping a customer and is about to walk back to his office when he spots you.'],
  enter: enter,
};
