import { qspUntranslated } from '../_shared/qspUntranslated';

import { qspCall, dynamicGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  ((s as any).setloc ?? {})['imagepath'] = 'locations/pushkin/ballet_school/';
  ((s as any).setloc ?? {})['StageTitle'] = 'Terpsichore Wing';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/hall.jpg';
  ((s as any).balletEv ?? {})['trigger'] = '';
  (s as any).event_day_max = 0;
  qspCall(s, 'core_library', 'corridor');
  qspCall(s, 'core_library', 'stage_title');
  if ((((s as any).month ?? 0) === 7  &&  ((s as any).day ?? 0) === 9)  &&  (((s as any).hour ?? 0) === 6  ||  ((s as any).hour ?? 0) === 7)) {
    scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc'); } }]);
  } else {
    if (((s as any).ballet_day ?? 0) === 6  &&  ((s as any).balletqw ?? 0)?.['school'] === 1) {
      (s as any).minut = ((s as any).minut ?? 0) + 60;
      qspCall(s, 'stat', '');
      qspCall(s, 'core_library', 'stage_title');
      if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
        // TODO-QSP: dynamic text: You've done it. You've survived until the end of the week. Then, <<$npc_firstnam...
        scene.text(`You've done it. You've survived until the end of the week. Then, ${((s as any).npc_firstname ?? 0)?.['A274']}. runs up to you and gives you a big hug. "What's that for?" you ask. "For being a friend and my dance partner," she says with a big smile.`);
        // TODO-QSP: dynamic text: It's been great to meet you, <<$pcs_nickname>>. I hope we meet again and can wor...
        scene.text(`It's been great to meet you, ${((s as any).pcs_nickname ?? 0)}. I hope we meet again and can work together." You pretend to think for a moment and see the worried expression on her face. "Sure, it's been fantastic to meet you, and I'll keep in touch."`);
      } else {
        if (((s as any).mayaqw ?? 0)?.['grave'] < 4) {
          // TODO-QSP: dynamic text: You've done it. You've survived until the end of the week. Then, <<$npc_firstnam...
          scene.text(`You've done it. You've survived until the end of the week. Then, ${((s as any).npc_firstname ?? 0)?.['A274']} comes up to you and gives you a quick hug. "What's that for?", you ask.`);
          scene.text('"For being my dance partner!" she says with a smile.');
          // TODO-QSP: dynamic text: "It's been wonderful to meet you, <<$pcs_nickname>>. I hope we meet again and ca...
          scene.text(`"It's been wonderful to meet you, ${((s as any).pcs_nickname ?? 0)}. I hope we meet again and can work together."`);
          scene.text('"Sure, it\'s been great to meet you too, I\'ll keep in touch. Once I know my results, I\'ll let you know.');
          // TODO-QSP: dynamic text: "Yeah, and I'll do the same, <<$pcs_nickname>>"
          scene.text(`"Yeah, and I'll do the same, ${((s as any).pcs_nickname ?? 0)}"`);
        }
      }
      // TODO-QSP: dynamic text: At that moment, <<$npc_firstname['A284']>> comes out of the examination room. "T...
      scene.text(`At that moment, ${((s as any).npc_firstname ?? 0)?.['A284']} comes out of the examination room. "Thank you all for attending this week. I hope you all had a great experience and have taken these lessons to heart." You and your class murmur together in agreement.`);
      scene.text('"The school will be in touch in a few weeks to give your assessment marks and if we have decided to grant you a place in our apprenticeship program."');
      // TODO-QSP: dynamic text: You know the places are going to be hard fought over, and you glance at <<$npc_f...
      scene.text(`You know the places are going to be hard fought over, and you glance at ${((s as any).npc_firstname ?? 0)?.['A274']}.`);
      scene.text('She gives you a wink indicating she has confidence about your acceptance into the school.');
      // TODO-QSP: dynamic text: You grab a shower before you leave to catch the bus that is waiting for you outs...
      scene.text(`You grab a shower before you leave to catch the bus that is waiting for you outside. Standing next to it is ${((s as any).npc_firstname ?? 0)?.['A284']}, who addresses you all once you've gathered. "It has been a pleasure to have you all with us this week, and I wish you all the best for your future." With that, ${((s as any).npc_firstname ?? 0)?.['A284']} returns back into the school.`);
      qspCall(s, 'din_van', 'showerdin');
      qspCall(s, 'stat', '');
      qspCall(s, 'homes_properties', 'set_home', 'parents_home');
      scene.actions([
        { label: 'Return home', handler: (st: GameState) => {
    ((s as any).AlbinaQW ?? {})['StarletsJoined'] = 0;
  }, goto: ['pav_commcenter', ''] },
      ]);
    } else {
      if (((s as any).balletqw ?? 0)?.['school'] !== 1  &&  ((s as any).ballet_day ?? 0) === 1) {
        // TODO-QSP: dynamic text: You are chaperoned to your school by <<$npc_firstname['A284']>>. After a short j...
        scene.text(`You are chaperoned to your school by ${((s as any).npc_firstname ?? 0)?.['A284']}. After a short journey, you were standing outside a classroom and told to wait by ${((s as any).npc_firstname ?? 0)?.['A284']}. You look around you at various photographs and artwork of dancers and performances.`);
        // TODO-QSP: dynamic text: You look at the girls you are with, with a few of them trying to catch your atte...
        scene.text(`You look at the girls you are with, with a few of them trying to catch your attention, but before you can talk to them, ${((s as any).npc_firstname ?? 0)?.['A284']}has come back from the classroom. "You can enter now, girls."`);
        scene.actions([
          { label: 'Attend class', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'pilates');
  } },
        ]);
      } else {
        if (((s as any).balletqw ?? 0)?.['school'] !== 1  &&  ((s as any).ballet_day ?? 0) > 1) {
          scene.text('You head to school with your group, and you can see a few of your classmates gossiping up front, but you are left to your own thoughts. Before you realize it, you\'re standing at the doors to your first lesson.');
          scene.actions([
            { label: 'Attend class', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'pilates');
  } },
          ]);
        } else {
          if (((s as any).month ?? 0) !== 7  ||  ((s as any).month ?? 0) === 7  &&  ((s as any).day ?? 0) === 9  &&  ((s as any).hour ?? 0) >= 8) {
            ((s as any).ballet_grade_score ?? {})['class'] = (((s as any).ballet_grade_score ?? {})['class'] ?? 0) - (500);
            scene.text('You were late or did not attend the exam. You have failed the course.');
            scene.actions([
              { label: 'Return home', goto: ['pav_commcenter', ''] },
            ]);
          }
        }
      }
    }
  }
  scene.build();
}

function enterPilates(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'themes', 'indoors');
  ((s as any).setloc ?? {})['StageTitle'] = 'Pilates';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/pilates_2.jpg';
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  (s as any).nclass = 1;
  qspCall(s, 'pushkin_ballet_init', 'daily_assessment');
  if (((s as any).ballet_day ?? 0) === 1) {
    (s as any).minut = (8 - ((s as any).hour ?? 0)) * 60;
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You're led to the class by <<$npc_firstname['A284']>> Volkova, who tells you all...
    scene.text(`You're led to the class by ${((s as any).npc_firstname ?? 0)?.['A284']} Volkova, who tells you all to wait outside and disappears into the classroom. A few minutes later, she steps out and opens the door. "In you go, girls. Remember from this point, be polite, respectful and, above all else, dedicated."`);
    scene.text('You enter a large studio with dance equipment and mirrors on the wall. A large corner window lets natural light flood in. In the corner stands a sturdy piano made of polished mahogany. Two ladies are standing watching you file in.');
    scene.text('Your group forms a gaggle near the door. One of the ladies shouts out for you to take your positions! Your group automatically fans out and instinctively falls into the First Position.');
    // TODO-QSP: dynamic text: "Good." She walks past each girl looking for mistakes. Then, she turns around an...
    scene.text(`"Good." She walks past each girl looking for mistakes. Then, she turns around and walks back to the front. As she reaches the front, she says, "You can relax, I'm ${((s as any).npc_firstname ?? 0)?.['A284']} Ananiashvili, and I'll be your instructor this week." Then, she turns and indicates towards the other woman. "This is ${((s as any).npc_firstname ?? 0)?.['A285']}Solovyova. She will be your music instructor and class pianist."`);
    scene.text('"You have all been selected to attend this week by merit or determination. You are the select few that\'ll represent the Pavlova Class. You are the best of this year\'s intake and have been chosen to attend this course to further your passion for dance and ballet."');
    scene.text('"This week will be exhausting, intensive and we expect you give us your absolute best. You will live, breathe, and dance your hearts out during your time here. I expect nothing less from each of you. You represent the school. If you exhibit any behaviour that negatively affects this school\'s reputation, you will be dismissed. Understood?", she pauses and gives everyone a hard look, "Good."');
    scene.actions([
      { label: 'Start Pilates', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier1', 30, 'agil', 'stren');
    qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    scene.text('"Refer to your dorm\'s induction books for the daily course lessons, but now that introductions are out of the way, let us start stretching with pilates."');
    scene.text('"Hands up; who knows why we do Pilates over Yoga?"');
    scene.text('One of the girls put her hand up.');
    // TODO-QSP: dynamic text: "You are?" <<$npc_firstname['A284']>>asks. " <<$npc_firstname['A279']>> <<$npc_l...
    scene.text(`"You are?" ${((s as any).npc_firstname ?? 0)?.['A284']}asks. " ${((s as any).npc_firstname ?? 0)?.['A279']} ${((s as any).npc_lastname ?? 0)?.['A279']}," the girl replies.`);
    // TODO-QSP: dynamic text: " <<$npc_firstname['A284']>>'s daughter?"
    scene.text(`" ${((s as any).npc_firstname ?? 0)?.['A284']}'s daughter?"`);
    scene.text('"Yes, Miss."');
    // TODO-QSP: dynamic text: "So, what are the differences?", <<$npc_firstname['A284']>>asks brusquely.
    scene.text(`"So, what are the differences?", ${((s as any).npc_firstname ?? 0)?.['A284']}asks brusquely.`);
    scene.text('"Yoga is about spirituality and flexibility, and Pilates is about strengthening your mind and core body."');
    scene.text('"Excellent answer, that\'s why we will do pilates each morning. If you do yoga exercises, then you will find this easy."');
    // TODO-QSP: dynamic text: With that, <<$npc_firstname['A284']>> leads the class through strenuous exercise...
    scene.text(`With that, ${((s as any).npc_firstname ?? 0)?.['A284']} leads the class through strenuous exercises designed to strengthen and stretch your muscles. After an hour, your body slightly aches from the warm-up exercises.`);
    scene.actions([
      { label: 'Next class', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'first_lesson');
  } },
    ]);
  } },
    ]);
  } else {
    if (((s as any).ballet_day ?? 0) >= 2) {
      qspCall(s, 'exercise', 'tier1', 30, 'agil', 'stren');
      qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
      qspCall(s, 'stat', '');
      qspCall(s, 'core_library', 'stage_title');
      scene.text('You all file into the class for your pilates lesson. It\'s a different teacher today. Still, before you can settle in, she\'s already guiding you on how to use the various bits of equipment. After an hour, your muscles ache from the exercises.');
      scene.text('"Remember, students, stretching, warm-ups and a disciplined fitness regime are needed to be a dancer. You\'re an elite athlete. Remember this at all times." You notice Gasha blush in the back and wonder what caused that reaction. You grab a quick drink of water at the end of the class before heading to your next class.');
      (s as any).pcs_hydra = ((s as any).pcs_hydra ?? 0) + (30);
      scene.actions([
        { label: 'Next class', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'first_lesson');
  } },
      ]);
    }
  }
  scene.build();
}

function enterFirstLesson(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = (9 - ((s as any).hour ?? 0)) * 60;
  qspCall(s, 'themes', 'indoors');
  ((s as any).setloc ?? {})['StageTitle'] = 'Dance Class';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/ballet_class_002.jpg';
  qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  (s as any).nclass = 2;
  qspCall(s, 'pushkin_ballet_init', 'daily_assessment');
  qspCall(s, 'stat', '');
  if (((s as any).ballet_day ?? 0) === 1) {
    qspCall(s, 'exercise', 'tier3', 90, 'agil', 'stren', 'danc');
    qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: "Listen up!" shouts <<$npc_firstname['A284']>>, "I want you to introduce yoursel...
    scene.text(`"Listen up!" shouts ${((s as any).npc_firstname ?? 0)?.['A284']}, "I want you to introduce yourselves. Once introductions are done, I'll assign you to a dance partner for the week."`);
    // TODO-QSP: dynamic text: <<$npc_firstname['A284']>> points to the student that's furthest from you. Seein...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A284']} points to the student that's furthest from you. Seeing her being picked first, she gets a panicked look and stutters ""I..I… I'm G… ${((s as any).npc_firstname ?? 0)?.['A277']} ${((s as any).npc_lastname ?? 0)?.['A277']}," she says in a final rush to get her name out, her face crimson with embarrassment.`);
    // TODO-QSP: dynamic text: <<$npc_firstname['A284']>> frowns. "You need to work on your confidence and pres...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A284']} frowns. "You need to work on your confidence and presentation, ${((s as any).npc_firstname ?? 0)?.['A277']}." "Yes, Ms. Ananiashvili," replies ${((s as any).npc_firstname ?? 0)?.['A277']}, wilting a bit under her gaze.`);
    // TODO-QSP: dynamic text: "You." <<$npc_firstname['A284']>> points to another student. "I'm <<$npc_firstna...
    scene.text(`"You." ${((s as any).npc_firstname ?? 0)?.['A284']} points to another student. "I'm ${((s as any).npc_firstname ?? 0)?.['A27']} ${((s as any).npc_lastname ?? 0)?.['A278']}." You look at her effortless grace in envy as she curtseys to ${((s as any).npc_firstname ?? 0)?.['A284']}. You noticed her captivating beauty when you entered the studio earlier in the morning.`);
    // TODO-QSP: dynamic text: <<$npc_firstname['A284']>> points to another student. " <<$npc_firstname['A275']...
    scene.text(`${((s as any).npc_firstname ?? 0)?.['A284']} points to another student. " ${((s as any).npc_firstname ?? 0)?.['A275']} ${((s as any).npc_lastname ?? 0)?.['A275']}," ${((s as any).npc_firstname ?? 0)?.['A274']} calls out, also performing another elegant curtsey. ${((s as any).npc_firstname ?? 0)?.['A284']} keeps pointing out the students who introduce themselves, and you finally get your chance to introduce yourself to the class.`);
    // TODO-QSP: dynamic text: "Now we've introduced yourselves. I will assign your study partner for this week...
    scene.text(`"Now we've introduced yourselves. I will assign your study partner for this week." ${((s as any).npc_firstname ?? 0)?.['A284']} starts calling out names, and the girls move into pairs as they're assigned.`);
    // TODO-QSP: dynamic text: "Hi <<$npc_firstname['A274']>>", you say to her as joins you as your dance partn...
    scene.text(`"Hi ${((s as any).npc_firstname ?? 0)?.['A274']}", you say to her as joins you as your dance partner, "Good to see you again${((s as any).pcs_nickname ?? 0)}, sorry about the interruption last night!"`);
    // TODO-QSP: dynamic text: Before you can reply <<$npc_firstname['A284']>> moves to the front of the class ...
    scene.text(`Before you can reply ${((s as any).npc_firstname ?? 0)?.['A284']} moves to the front of the class and claps her hands for attention. She nods to ${((s as any).npc_firstname ?? 0)?.['A285']}, who sits at the piano and starts playing. ${((s as any).npc_firstname ?? 0)?.['A284']} starts a nearly flawless ballet routine demonstrating her elegance and mastery of what she teaches.`);
    // TODO-QSP: dynamic text: Once <<$npc_firstname['A284']>> stops her performance, she thanks <<$npc_firstna...
    scene.text(`Once ${((s as any).npc_firstname ?? 0)?.['A284']} stops her performance, she thanks ${((s as any).npc_firstname ?? 0)?.['A285']}and turns back to the class.`);
    scene.text('"That is what I expect from you this week. You have been all shortlisted as the best dancers in this region, and I expect no less from you all. Topics this week will include basic technique, classical performances, divertissement, and Pas de Deux. In addition, there will be an formal grading assessment on Saturday, of which the three best dancers will be offered to join the theatre."');
    // TODO-QSP: dynamic text: For the next hour, <<$npc_firstname['A284']>> puts you through a series of deman...
    scene.text(`For the next hour, ${((s as any).npc_firstname ?? 0)?.['A284']} puts you through a series of demanding exercises going to each girl to guide her posture with a quick word or touch.`);
    // TODO-QSP: dynamic text: The lesson concluded with a traditional Reverence to <<$npc_firstname['A284']>> ...
    scene.text(`The lesson concluded with a traditional Reverence to ${((s as any).npc_firstname ?? 0)?.['A284']} and ${((s as any).npc_firstname ?? 0)?.['A285']}.`);
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'shower');
  } },
    ]);
  }
  if (((s as any).ballet_day ?? 0) === 2) {
    qspCall(s, 'exercise', 'tier3', 90, 'agil', 'stren', 'danc');
    qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You sit in the class, take your new ballet shoes out of your shoe bag, and try t...
    scene.text(`You sit in the class, take your new ballet shoes out of your shoe bag, and try to fit them on. ${((s as any).npc_firstname ?? 0)?.['A274']} comes over to talk to you and starts giving tips on your ballet shoes and how to break them in and wear them. You give her a quick smile and thank her when ${((s as any).npc_firstname ?? 0)?.['A284']} walks through the door. She claps her hands to get everyone's attention.`);
    scene.text('"Yesterday showed me what you were all capable of. Today we are going through the assessment requirements. The assessment is for both group and individual routines. I expect everyone here to diligently practice with their assigned partners over the next week."');
    // TODO-QSP: dynamic text: "Do I make myself clear?" There's a chorus of "Yes, Ms. <<$npc_lastname['A284']>...
    scene.text(`"Do I make myself clear?" There's a chorus of "Yes, Ms. ${((s as any).npc_lastname ?? 0)?.['A284']}." She looks over the class, gauging her students' expressions. "Excellent, now I want everyone to team up with your partner and, today, we will concentrate on your form and poise."`);
    // TODO-QSP: dynamic text: As with the previous lesson, it concluded with the traditional Reverence to <<$n...
    scene.text(`As with the previous lesson, it concluded with the traditional Reverence to ${((s as any).npc_firstname ?? 0)?.['A284']} and ${((s as any).npc_firstname ?? 0)?.['A285']}. Today you perform ports de bras to pay your respects.`);
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'shower');
  } },
    ]);
  }
  if (((s as any).ballet_day ?? 0) === 3) {
    qspCall(s, 'exercise', 'tier4', 90, 'agil', 'stren', 'danc');
    qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
    qspCall(s, 'stat', '');
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/ballet_class_003.jpg';
    qspCall(s, 'core_library', 'stage_title');
    scene.text('As you enter the classroom, there\'s an air of excitement this morning. You\'re halfway through the week, and anticipation and nervousness are creeping in for the upcoming assessment.');
    // TODO-QSP: dynamic text: You see <<$npc_firstname['A284']>> standing close to <<$npc_firstname['A285']>>,...
    scene.text(`You see ${((s as any).npc_firstname ?? 0)?.['A284']} standing close to ${((s as any).npc_firstname ?? 0)?.['A285']}, going over a musical score. You can't help but wonder if they're more than friends because of how close they are and how ${((s as any).npc_firstname ?? 0)?.['A284']}'s hand is resting on ${((s as any).npc_firstname ?? 0)?.['A285']}'s shoulder. She looks up as the class enters the room with a start and quickly moves away.`);
    scene.text('"Today, we\'re concentrating on your group assessment routine. This is what you will be graded on." She doesn\'t sound like her commanding self and is slightly flustered. Still, it\'s only momentary as she starts moving you all into a group.');
    scene.text('"The routine will be a revised variation of the Entrance of the Swans from Swan Lake as part of the corps de Ballet. There will be no Principle Dancer. Instead, you will concentrate purely on working as the corps on this performance. You will be assessed on both your performance and will perform with your fellow dancers."');
    // TODO-QSP: dynamic text: You realise that you will be assessed on one of the most demanding routines the ...
    scene.text(`You realise that you will be assessed on one of the most demanding routines the corps can perform. It requires an inordinate amount of concentration and timing to pull off. You look at ${((s as any).npc_firstname ?? 0)?.['A274']} and see by the expression on her face the same thoughts must be going through her head.`);
    // TODO-QSP: dynamic text: "You were chosen as the best this Oblast has, so I expect you to perform your be...
    scene.text(`"You were chosen as the best this Oblast has, so I expect you to perform your best. Have any of you performed Swan Lake here?" ${((s as any).npc_firstname ?? 0)?.['A284']} asks. ${((s as any).npc_firstname ?? 0)?.['A274']} and ${((s as any).npc_firstname ?? 0)?.['A275']} both put up their hands. ${((s as any).npc_firstname ?? 0)?.['A284']} nods. "Good. You will take the lead as Coryphée for your respective groups, the class will split into two groups of five, and ${((s as any).npc_firstname ?? 0)?.['A285']} will play the opening scene on the piano."`);
    // TODO-QSP: dynamic text: What follows for the next hour and a half can only be described as hell. Gone wa...
    scene.text(`What follows for the next hour and a half can only be described as hell. Gone was the comforting ${((s as any).npc_firstname ?? 0)?.['A284']} of the last few days. Instead, she relentlesly drives all the students hard, criticising all mistakes, which leaves ${((s as any).npc_firstname ?? 0)?.['A277']}close to tears.`);
    scene.actions([
      { label: 'Conclude lesson', handler: (st: GameState) => {
    qspCall(s, 'core_library', 'stage_title');
    scene.text('The class concludes with you performing an adagio culminating in a ports de bras for your Reverence.');
    scene.text('As you finish the reverence, you realise your feet and body ache not so much from the dancing but from the demands of standing still during the performance. So you drag yourself up from the ground after removing the tape from around your toes and your ballet shoes, then stow them back in your bag after quickly checking if they\'re still safe to use.');
    // TODO-QSP: dynamic text:  <<$npc_firstname['A274']>> approaches you. "Don't worry about the class, <<$pcs...
    scene.text(` ${((s as any).npc_firstname ?? 0)?.['A274']} approaches you. "Don't worry about the class, ${((s as any).pcs_nickname ?? 0)}. ${((s as any).npc_firstname ?? 0)?.['A284']} was too hard on everyone. You all performed as well as you could without having done this before." Her words comfort you, but you still have doubts about your abilities.`);
    scene.text('"Come on, we have to get ready!" she exclaims as you both hurry to get a shower before attending your next class.');
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'shower');
  } },
    ]);
  } },
    ]);
  }
  if (((s as any).ballet_day ?? 0) === 4) {
    qspCall(s, 'exercise', 'tier3', 90, 'agil', 'stren', 'danc');
    qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: After yesterday's rehearsals, you sense an air of both anticipation and dread fo...
    scene.text(`After yesterday's rehearsals, you sense an air of both anticipation and dread for today's lesson. ${((s as any).npc_firstname ?? 0)?.['A284']} is waiting in the class for you all to arrive.`);
    // TODO-QSP: dynamic text: "Welcome. Today we will go over the Entrance. Any questions?" Silence greets <<$...
    scene.text(`"Welcome. Today we will go over the Entrance. Any questions?" Silence greets ${((s as any).npc_firstname ?? 0)?.['A284']}'s question. "Good, let us proceed. ${((s as any).npc_firstname ?? 0)?.['A285']}, from the start."`);
    // TODO-QSP: dynamic text: You split into your two groups, and you follow <<$npc_firstname['A274']>>. She p...
    scene.text(`You split into your two groups, and you follow ${((s as any).npc_firstname ?? 0)?.['A274']}. She places you in the second line to follow her and help guide the students behind you through the routine. Unfortunately, it's another demanding performance and ${((s as any).npc_firstname ?? 0)?.['A284']} doesn't give much time to relax.`);
    // TODO-QSP: dynamic text: When you finally get a bit of breathing space, you quickly eat an energy bar bef...
    scene.text(`When you finally get a bit of breathing space, you quickly eat an energy bar before ${((s as any).npc_firstname ?? 0)?.['A284']} finishes working with the other group. Now it's your turn to practice again.`);
    // TODO-QSP: dynamic text: As you finish, <<$npc_firstname['A284']>>tells the class, "Tomorrow, you will we...
    scene.text(`As you finish, ${((s as any).npc_firstname ?? 0)?.['A284']}tells the class, "Tomorrow, you will wear the Ballet Blanc provided for the rehearsals. I will be assessing you on your attire and presentation before your actual assessment on Saturday. So please ensure you are ready and be here at 0900 sharp."`);
    scene.text('The class concludes with you repeating the previous day\'s routine for your Reverence.');
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'shower');
  } },
    ]);
  }
  if (((s as any).ballet_day ?? 0) === 5) {
    qspCall(s, 'exercise', 'tier2', 90, 'agil', 'stren', 'danc');
    qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
    qspCall(s, 'stat', '');
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/ballet_class_005.jpg';
    qspCall(s, 'core_library', 'stage_title');
    scene.text('You\'ve just finished the Pilates class, and enter your classroom dressed in Ballet Blanc. It\'s the first time you\'ve seen the group dressed as if you\'re part of the corps which brings a sense of pride for being here.');
    // TODO-QSP: dynamic text:  <<$npc_firstname['A274']>> grabs your attention, "Hey, <<$pcs_nickname>>, let's...
    scene.text(` ${((s as any).npc_firstname ?? 0)?.['A274']} grabs your attention, "Hey, ${((s as any).pcs_nickname ?? 0)}, let's check you over quickly.". ${((s as any).npc_firstname ?? 0)?.['A274']} quickly goes over your outfit and hair, ensuring that your presentation is perfect and you do the same for her.`);
    scene.text('You sit down, put on your toe socks, and powder your feet before putting on your ballet shoes. You notice they\'re slightly damaged; they should be fine for the lesson, but you make a note to get your new shoes ready.');
    // TODO-QSP: dynamic text: It's not ideal, but you have no choice. As you finish tying the ribbons, you see...
    scene.text(`It's not ideal, but you have no choice. As you finish tying the ribbons, you see ${((s as any).npc_firstname ?? 0)?.['A284']} enter the room and start to inspect you all, trying to find faults. Still, your class passes with only minor criticisms.`);
    scene.actions([
      { label: 'Continue lesson', handler: (st: GameState) => {
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: "Well done, class, you have done me proud. You have done exactly what I asked." ...
    scene.text(`"Well done, class, you have done me proud. You have done exactly what I asked." It was rare praise from ${((s as any).npc_firstname ?? 0)?.['A284']}. "Now I want you to give me your best. I want you to dance like you never danced."`);
    // TODO-QSP: dynamic text: With that, she claps her hands. "Take your positions." <<$npc_firstname['A285']>...
    scene.text(`With that, she claps her hands. "Take your positions." ${((s as any).npc_firstname ?? 0)?.['A285']} starts to play. You lose yourself in the performance of all the lessons coming together from the last week, and you flow through the performance.`);
    // TODO-QSP: dynamic text:  <<$npc_firstname['A284']>> watches all the girls' performances critically, taki...
    scene.text(` ${((s as any).npc_firstname ?? 0)?.['A284']} watches all the girls' performances critically, taking notes as she goes. The minutes fly by, and before you know it, the first rehearsal is over. "And again," she calls out.`);
    scene.actions([
      { label: 'Continue rehearsals', handler: (st: GameState) => {
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/ballet_teach_1.jpg';
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You rehearse several times before she's happy, and then she hands critique notes...
    scene.text(`You rehearse several times before she's happy, and then she hands critique notes to all the girls. When she gives you yours, she compliments you before gathering ${((s as any).npc_firstname ?? 0)?.['A274']} and ${((s as any).npc_firstname ?? 0)?.['A275']} aside for a private talk.`);
    // TODO-QSP: dynamic text: "Tomorrow your assessment will start at ' + func('time', 'get_time_string', 9, 0...
    scene.text('"Tomorrow your assessment will start at \' + func(\'time\', \'get_time_string\', 9, 0) + \'. You will enter the room in First Position and wait for the examiners\' instructions. Once you have performed the Entrance of the Swans, you will be asked to perform a Pas de Deux with your dance partner."');
    scene.text('"Your final examination is a solo divertissement lasting no more than five minutes. This performance shows your ability to the judges and will be freeform."');
    // TODO-QSP: dynamic text: "Any questions? If you have any tonight or need assistance, contact <<$npc_first...
    scene.text(`"Any questions? If you have any tonight or need assistance, contact ${((s as any).npc_firstname ?? 0)?.['A284']}, and she will advise or help as needed."`);
    scene.actions([
      { label: 'Reverence', handler: (st: GameState) => {
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + '/events/reverence.jpg';
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You and the girls all look at each other and start to perform a deep curtsy as p...
    scene.text(`You and the girls all look at each other and start to perform a deep curtsy as part of the great reverence you agreed to the previous evening with the girls to pay respect to ${((s as any).npc_firstname ?? 0)?.['A284']} and ${((s as any).npc_firstname ?? 0)?.['A285']}for their teaching this week.`);
    // TODO-QSP: dynamic text: Both teachers look taken aback and have a smile on their faces. "Thank you, clas...
    scene.text(`Both teachers look taken aback and have a smile on their faces. "Thank you, class. It's been a pleasure to teach you this week," ${((s as any).npc_firstname ?? 0)?.['A284']} says, with ${((s as any).npc_firstname ?? 0)?.['A285']} nodding her agreement and repeating her words.`);
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'shower');
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  }
  scene.build();
}

function enterShower(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  qspCall(s, 'stat', '');
  ((s as any).setloc ?? {})['StageTitle'] = 'School Showers';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/shower_1.jpg';
  if (((s as any).nclass ?? 0) > 1) {
    qspCall(s, 'themes', 'indoors');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    if (((s as any).nclass ?? 0) === 2) {
      scene.actions([
        { label: 'Go to next lesson', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'makeup');
  } },
      ]);
    } else {
      if (((s as any).nclass ?? 0) === 4) {
        scene.actions([
          { label: 'Go to next lesson', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'music_theory');
  } },
        ]);
      }
    }
    scene.text('You enter the school showers after your lesson. You and your classmates don\'t have much time to talk to each other, with you having little time until your next lesson.');
    qspCall(s, 'core_library', 'bathroom');
  } else {
    ((s as any).setloc ?? {})['StageTitle'] = 'Residential Bathroom';
    ((s as any).setloc ?? {})['StageImage'] = 'locations/pushkin/ballet_residence/residential_bathroom.jpg';
    qspCall(s, 'themes', 'indoors');
    qspCall(s, 'stat', '');
    qspCall(s, 'core_library', 'stage_title');
    if ((((s as any).hour ?? 0) > 5  ||  ((s as any).hour ?? 0) < 8)  &&  ((s as any).week ?? 0) !== 7) {
      // TODO-QSP: dynamic text: You can check your<a href="exec: gs '<<$loc>>', 'grade_check'">appearance</a>bef...
      scene.text(`You can check your<a href="exec: gs '${((s as any).loc ?? 0)}', 'grade_check'">appearance</a>before leaving in the full length mirror.`);
    }
    qspCall(s, 'core_library', 'bathroom');
    scene.actions([
      { label: 'Return to the hallway', handler: (st: GameState) => {
    if (((s as any).clothingworntype ?? 0) === 'nude') {
      scene.actions([{ label: 'Continue', handler: (st: GameState) => { dynamicGoto(st, 'loc', 'loc_arg'); } }]);
    } else {
      scene.actions([{ label: 'Continue', goto: ['pushkin_ballet_res', 'hallway'] }]);
    }
  } },
    ]);
  }
  scene.build();
}

function enterGradeCheck(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: $popup_advise += 'You critically look at your appearance according to the schools assessment guideli...
  // TODO-QSP: $popup_advise += '<br><br>'
  if (((s as any).pcs_makeup ?? 0) > 1) {
    // TODO-QSP: $popup_advise += '<font color = "green">✓</font> Your make up is of an acceptable standard.</font>'
  } else {
    // TODO-QSP: $popup_advise += '<font color = "red">✗</font> You need to apply some make up. If you do not have an...
  }
  // TODO-QSP: $popup_advise += '<br>'
  if (((s as any).hbraids ?? 0) > 0  ||  ((s as any).hpingripw ?? 0) > 0  ||  ((s as any).pcs_hairlng ?? 0) <= 80) {
    // TODO-QSP: $popup_advise += '<font color = "green">✓</font> You look at your hair whilst tidying up a few stray...
  } else {
    // TODO-QSP: $popup_advise += '<font color = "red">✗</font> You need to set your hair in a braid or bun, or have ...
  }
  // TODO-QSP: $popup_advise += '<br>'
  if (((s as any).pcs_pubes ?? 0) > 3) {
    // TODO-QSP: $popup_advise += '<font color = "red">✗</font> You need to shave your pussy to avoid any unsightly b...
  } else {
    if (((s as any).pcs_leghair ?? 0) > 3) {
      // TODO-QSP: $popup_advise += '<font color = "red">✗</font> You run your hands of your legs and notice they are s...
    } else {
      // TODO-QSP: $popup_advise += '<font color = "green">✓</font> You are clean shaven.'
    }
  }
  // TODO-QSP: $popup_advise += '<br>'
  if (((s as any).apparel ?? 0)?.['status'] === 'sport'  ||  ((s as any).apparel ?? 0)?.['status'] === 'dance') {
    // TODO-QSP: $popup_advise += '<font color = "green">✓</font> Your sports clothing is suitable for the dance clas...
  } else {
    // TODO-QSP: $popup_advise += '<font color = "red">✗</font> You need to change into sports clothing that is suita...
  }
  scene.build();
}

function enterMakeup(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = (11 - ((s as any).hour ?? 0)) * 60;
  ((s as any).setloc ?? {})['StageTitle'] = 'Theatre Make Up';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/first_mua.jpg';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'makupskl', Math.floor(Math.random() * 2) + 1);
  (s as any).makupskl_lvl = ((s as any).makupskl_lvl ?? 0) + (Math.floor(Math.random() * 3) + 1);
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  (s as any).nclass = 3;
  qspCall(s, 'pushkin_ballet_init', 'daily_assessment');
  qspCall(s, 'stat', '');
  if (((s as any).ballet_day ?? 0) === 1) {
    qspCall(s, 'core_library', 'stage_title');
    scene.text('"Welcome. On your desk you will find a make-up box with most of what you need. You will also need to provide your own moisturiser and foundation. All dancers are expected to do their own make-up for rehearsals and shows."');
    scene.text('The teacher continues to rattle on without introducing herself, going over the different make-up in front of you and the various brushes and applicators. You soon feel overwhelmed by the amount of information from the lesson.');
    scene.text('However, after ten minutes, the teacher relents and starts to hand out makeup charts and tip pamphlets. In addition, the teacher hands out two books, one by Lisa Elridge and one by Kevin Aucoin, to help give additional information on makeup.');
    // TODO-QSP: dynamic text:  <<$npc_firstname['A274']>> slides in beside you and whispers, "A lot to take in...
    scene.text(` ${((s as any).npc_firstname ?? 0)?.['A274']} slides in beside you and whispers, "A lot to take in?" You nod your head in agreement. She gives a quick wink before turning back to listen to the lesson.`);
  } else {
    if (((s as any).ballet_day ?? 0) === 2) {
      ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/second_mua.jpg';
      qspCall(s, 'core_library', 'stage_title');
      scene.text('Another day and your teacher still hasn\'t introduced herself, instead telling the students to focus. "Did you read through the books I gave you last night?" she asks.');
      scene.text('Everyone in the class looks at each other. "But Miss, you never told us to," Gasha replies.');
      scene.text('"Do I have to tell you to study everything? You\'re girls. You should have been learning make-up from your parents as a child!" the teacher snappishly replies.');
      scene.text('"Fine, you\'re to practice this look for the next hour, and you will show me the results of your practice tomorrow." She reaches for a remote. A projector lights up the wall of the make-up you\'re to replicate.');
    } else {
      if (((s as any).ballet_day ?? 0) === 3) {
        qspCall(s, 'core_library', 'stage_title');
        scene.text('"Today, I\'m going to assess the results of your homework. You have 30 minutes to achieve this look." She then points to the make-up chart on the wall covering the details and colours required.');
        scene.text('You open your makeup bag and quickly apply the look on the chart. Unfortunately, it\'s stressful, and there\'s little time to think as you concentrate on applying the look.');
        // TODO-QSP: dynamic text: You quickly glance at <<$npc_firstname['A274']>>, who gives you an encouraging s...
        scene.text(`You quickly glance at ${((s as any).npc_firstname ?? 0)?.['A274']}, who gives you an encouraging smile and then she turns back to finish her own look.`);
      } else {
        if (((s as any).ballet_day ?? 0) === 4) {
          qspCall(s, 'core_library', 'stage_title');
          scene.text('Today, you\'re learning hairstyles, and you\'re all given small red tins. "This is your emergency box. Keep it with you at all times." You look inside and see a small comb, brush, spare hair bands, grips, slides, pins and kirby pins. There\'s even a small sewing kit for the inevitable tears.');
          scene.text('"When you do your exams and assessments, you must always look after your appearance. That\'s why you always take this with you. You will be marked down if you aren\'t presentable."');
          scene.text('The rest of the lesson teaches professional basic hair care, styling, and tips and tricks to get the best results. It\'s a surprisingly fun lesson and time flies by.');
        } else {
          if (((s as any).ballet_day ?? 0) === 5) {
            qspCall(s, 'core_library', 'stage_title');
            scene.text('"Today, we\'ll be going over how you present yourself for your assessment on Saturday. The assessors will judge your abilities as a dancer and how well you apply makeup and care for your hair."');
            scene.text('"You all have your partners, so today, you will help each other prepare for your assessment. If you end up working together in future, you will help each other during rehearsals and shows, and if you are capable, the rest of your corps "');
            scene.text('"As dancers, we all look after each other. Remember this!" She says the last few words with strong emphasis, reminding you that ballet is as much a team effort as it is about self-discipline. "Now class, split up and work with your partner. If you need assistance, put your hand up."');
            scene.text('"Your guidelines for the exam are as follows: Your hair must be in a bun, ensuring your face and neck aren\'t obscured. If needed, use pins and ensure there are no hair wisps. No jewelry is to be worn except ear studs. Make-up must be complimentary and kept to a minimum. Remember to use your setting powder. Any questions? Good, carry on."');
            // TODO-QSP: dynamic text: Today your teacher is more active, going between the various students, and compl...
            scene.text(`Today your teacher is more active, going between the various students, and complimenting or advising them as required. You see her have a short conversation with ${((s as any).npc_firstname ?? 0)?.['A279']}, and you're curious about what it was about before ${((s as any).npc_firstname ?? 0)?.['A274']} grabs your attention to carry on with practising your makeup.`);
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Grab lunch', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'lunch');
  } },
  ]);
  scene.build();
}

function enterLunch(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  ((s as any).setloc ?? {})['StageTitle'] = 'School Cafeteria';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/cafeteria.jpg';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'core_library', 'stage_title');
  scene.text('You enter the school\'s canteen. It seems you\'ve timed it between lunch breaks, so it\'s relatively quiet.');
  qspCall(s, 'core_library', 'kitchen', 'shared');
  scene.actions([
    { label: 'Head to next lesson', handler: (st: GameState) => {
    dynamicGoto(st, 'loc');
  } },
    { label: 'Eat lunch', handler: (st: GameState) => {
    qspCall(s, 'food', 'medium_meal');
    scene.text('You quickly fill your plate with a moderate portion and wolf down your dinner.');
  } },
  ]);
  scene.build();
}

function enterSecondLesson(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = (13 - ((s as any).hour ?? 0)) * 60;
  qspCall(s, 'exercise', 'tier2', 90, 'agil', 'stren', 'danc');
  qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
  qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  (s as any).nclass = 4;
  qspCall(s, 'pushkin_ballet_init', 'daily_assessment');
  qspCall(s, 'stat', '');
  ((s as any).setloc ?? {})['StageTitle'] = 'Dance Practice';
  if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/mirror_ballet.jpg';
  } else {
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/class_three.jpg';
  }
  qspCall(s, 'core_library', 'stage_title');
  if (((s as any).ballet_day ?? 0) === 1) {
    // TODO-QSP: dynamic text: "Class, listen up," <<$npc_firstname['A284']>> calls out. "You are going to team...
    scene.text(`"Class, listen up," ${((s as any).npc_firstname ?? 0)?.['A284']} calls out. "You are going to team up with your dance partner to practice barre work and to do the pas de deux as your centers which will form your assessment."`);
    // TODO-QSP: dynamic text: You walk over to <<$npc_firstname['A274']>>, "Hey, <<$pcs_nickname>>, are you re...
    scene.text(`You walk over to ${((s as any).npc_firstname ?? 0)?.['A274']}, "Hey, ${((s as any).pcs_nickname ?? 0)}, are you ready?". Then, you work with ${((s as any).npc_firstname ?? 0)?.['A274']} to go through the various movements of Plié, Elevé, Battement Tendu and Rond de Jambe.`);
    // TODO-QSP: dynamic text: Once you finish the Barre exercises, <<$npc_firstname['A284']>> switches on a pr...
    scene.text(`Once you finish the Barre exercises, ${((s as any).npc_firstname ?? 0)?.['A284']} switches on a projector. "Here are your movements for your pas de deux. Please continue to the center, and I will observe your performances."`);
    // TODO-QSP: dynamic text: You and <<$npc_firstname['A274']>> quickly study the chart and wait for <<$npc_f...
    scene.text(`You and ${((s as any).npc_firstname ?? 0)?.['A274']} quickly study the chart and wait for ${((s as any).npc_firstname ?? 0)?.['A285']} to start playing on the piano. Then, with a count, you start to go through the movements, ${((s as any).npc_firstname ?? 0)?.['A274']} helping you call out the next position."`);
    // TODO-QSP: dynamic text: This doesn't go unnoticed by <<$npc_firstname['A284']>>, and once the movement i...
    scene.text(`This doesn't go unnoticed by ${((s as any).npc_firstname ?? 0)?.['A284']}, and once the movement is finished, she calls ${((s as any).npc_firstname ?? 0)?.['A274']} over, "You seem to have memorised this the first time. Let's see if you can perform this with me."`);
    // TODO-QSP: dynamic text: She changes the image on the projector and lets <<$npc_firstname['A274']>> study...
    scene.text(`She changes the image on the projector and lets ${((s as any).npc_firstname ?? 0)?.['A274']} study it for a few moments. "Ready?" she asks, and ${((s as any).npc_firstname ?? 0)?.['A274']} nods. "Let us begin. ${((s as any).npc_firstname ?? 0)?.['A285']}?"`);
    // TODO-QSP: dynamic text: The following five minutes of performance pushed <<$npc_firstname['A274']>> hard...
    scene.text(`The following five minutes of performance pushed ${((s as any).npc_firstname ?? 0)?.['A274']} hard, and you watch in amazement how well she performed following ${((s as any).npc_firstname ?? 0)?.['A284']} 's lead.`);
    // TODO-QSP: dynamic text: Once the performance is done, <<$npc_firstname['A284']>> and <<$npc_firstname['A...
    scene.text(`Once the performance is done, ${((s as any).npc_firstname ?? 0)?.['A284']} and ${((s as any).npc_firstname ?? 0)?.['A274']}curtsy to each other, and ${((s as any).npc_firstname ?? 0)?.['A274']} comes over to you. You hand over her towel and water bottle.`);
    // TODO-QSP: dynamic text: "Thanks, <<$pcs_nickname>>." She's slightly out of breath from the grand allegro...
    scene.text(`"Thanks, ${((s as any).pcs_nickname ?? 0)}." She's slightly out of breath from the grand allegro and pirouettes she's just performed."`);
    // TODO-QSP: dynamic text: "Well done, <<$npc_firstname['A274']>>, that was a wonderful performance." <<$np...
    scene.text(`"Well done, ${((s as any).npc_firstname ?? 0)?.['A274']}, that was a wonderful performance." ${((s as any).npc_firstname ?? 0)?.['A284']} sounds impressed with ${((s as any).npc_firstname ?? 0)?.['A274']}'s performance. "You will go far with talent like that."`);
    // TODO-QSP: dynamic text: You momentarily look over the rest of the class and see <<$npc_firstname['A276']...
    scene.text(`You momentarily look over the rest of the class and see ${((s as any).npc_firstname ?? 0)?.['A276']}' face frowning, you think with jealousy.`);
  } else {
    if (((s as any).ballet_day ?? 0) === 2) {
      // TODO-QSP: dynamic text: You stand next to <<$npc_firstname['A274']>> as you work through your barre exer...
      scene.text(`You stand next to ${((s as any).npc_firstname ?? 0)?.['A274']} as you work through your barre exercises. ${((s as any).npc_firstname ?? 0)?.['A284']} leaves you alone today after yesterday's impromptu performance. You and ${((s as any).npc_firstname ?? 0)?.['A274']} quickly finish your warm up and start to work through your pas de deux routine for your assessment.`);
      // TODO-QSP: dynamic text: "Remember <<$pcs_nickname>>, when doing your plié, your butt should be over your...
      scene.text(`"Remember ${((s as any).pcs_nickname ?? 0)}, when doing your plié, your butt should be over your heels and you should balance your weight on the second toe.", ${((s as any).npc_firstname ?? 0)?.['A274']} chides you.`);
      // TODO-QSP: dynamic text: "Okay, let's see you do your solo, and then you can watch me." You put on the ro...
      scene.text(`"Okay, let's see you do your solo, and then you can watch me." You put on the routine you've been practicing for the assessment. "Remember: leg high and watch your lines!" ${((s as any).npc_firstname ?? 0)?.['A274']} calls out.`);
      // TODO-QSP: dynamic text: You watch <<$npc_firstname['A274']>> effortlessly go through her routine. "Why h...
      scene.text(`You watch ${((s as any).npc_firstname ?? 0)?.['A274']} effortlessly go through her routine. "Why haven't you done your grading or assessment already?" you ask her. "Time and my instructor didn't feel I was ready," she replies.`);
      // TODO-QSP: dynamic text: Before you can ask another question, <<$npc_firstname['A284']>> calls an end to ...
      scene.text(`Before you can ask another question, ${((s as any).npc_firstname ?? 0)?.['A284']} calls an end to the class.`);
    } else {
      if (((s as any).ballet_day ?? 0) === 3) {
        // TODO-QSP: dynamic text:  <<$npc_firstname['A274']>> doesn't seem focused on the lesson today. She seems ...
        scene.text(` ${((s as any).npc_firstname ?? 0)?.['A274']} doesn't seem focused on the lesson today. She seems more distant than her usual self from the last few days. "Are you okay ${((s as any).npc_firstname ?? 0)?.['A274']}?" you ask.`);
        // TODO-QSP: dynamic text: "Yes, I'm fine." <<$npc_firstname['A274']>> replies, but she's making too many l...
        scene.text(`"Yes, I'm fine." ${((s as any).npc_firstname ?? 0)?.['A274']} replies, but she's making too many little mistakes and you're hesitant to pick up here when ${((s as any).npc_firstname ?? 0)?.['A284']} comes by. " ${((s as any).npc_firstname ?? 0)?.['A274']}, you can do better than that."`);
        // TODO-QSP: dynamic text:  <<$npc_firstname['A274']>> winces, but does as <<$npc_firstname['A284']>> asks,...
        scene.text(` ${((s as any).npc_firstname ?? 0)?.['A274']} winces, but does as ${((s as any).npc_firstname ?? 0)?.['A284']} asks, this time with few mistakes. "That's better, I don't expect such sloppiness from my dancers," ${((s as any).npc_firstname ?? 0)?.['A284']} says, frowning. "You're better than that and I hope you're not getting lazy."`);
        // TODO-QSP: dynamic text: Before <<$npc_firstname['A274']>> can protest, <<$npc_firstname['A284']>> leaves...
        scene.text(`Before ${((s as any).npc_firstname ?? 0)?.['A274']} can protest, ${((s as any).npc_firstname ?? 0)?.['A284']} leaves you alone for the rest of class, but you notice her watching ${((s as any).npc_firstname ?? 0)?.['A274']} closely.`);
      } else {
        if (((s as any).ballet_day ?? 0) === 4) {
          // TODO-QSP: dynamic text: You quickly team up with <<$npc_firstname['A274']>> for today's lesson, the firs...
          scene.text(`You quickly team up with ${((s as any).npc_firstname ?? 0)?.['A274']} for today's lesson, the first time you've had a proper chance to speak to her about the previous evening's events. "How are you feeling today, ${((s as any).npc_firstname ?? 0)?.['A274']}?"`);
          // TODO-QSP: dynamic text: She gives you a small smile as you work through your barre exercises. "I'm bette...
          scene.text(`She gives you a small smile as you work through your barre exercises. "I'm better, thank you${((s as any).pcs_nickname ?? 0)}. Sorry about the scene last night."`);
          if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
            // TODO-QSP: dynamic text: "Don't be silly <<$npc_firstname['A274']>>, you know where to find me if you eve...
            scene.text(`"Don't be silly ${((s as any).npc_firstname ?? 0)?.['A274']}, you know where to find me if you ever need help. You've helped me so much this week and I'd not have learned as much as I have without you," you reply.`);
            // TODO-QSP: dynamic text: "I never thought I'd meet someone like you, <<$pcs_nickname>>. Your company was ...
            scene.text(`"I never thought I'd meet someone like you, ${((s as any).pcs_nickname ?? 0)}. Your company was welcome last night and you don't have to thank me about helping each other."`);
            // TODO-QSP: dynamic text: Her words give you a warm feeling of having done something right. <<$npc_firstna...
            scene.text(`Her words give you a warm feeling of having done something right. ${((s as any).npc_firstname ?? 0)?.['A274']} is dancing better than she has all week; even other students are noticing how graceful and elegant her divertissement performance is.`);
            // TODO-QSP: dynamic text: You take a breather and grab some water, then see <<$npc_firstname['A275']>> doi...
            scene.text(`You take a breather and grab some water, then see ${((s as any).npc_firstname ?? 0)?.['A275']} doing her own routine and find it hard to decide who's better: ${((s as any).npc_firstname ?? 0)?.['A274']} or her. After a few moments, you decide it's a question of grace and in this, you feel ${((s as any).npc_firstname ?? 0)?.['A274']} has the edge.`);
          } else {
            if (((s as any).mayaqw ?? 0)?.['grave'] < 4) {
              // TODO-QSP: dynamic text: "It's okay <<$npc_firstname['A274']>>, I understand the grief about losing your ...
              scene.text(`"It's okay ${((s as any).npc_firstname ?? 0)?.['A274']}, I understand the grief about losing your mother. You'll do her proud this week, and even ${((s as any).npc_firstname ?? 0)?.['A284']}thinks you're one of the best in the class alongside Kima," you said to cheer her up.`);
              // TODO-QSP: dynamic text: "Shush<<$pcs_nickname>>, I've still a long way to go she replies. "It's been a h...
              scene.text(`"Shush${((s as any).pcs_nickname ?? 0)}, I've still a long way to go she replies. "It's been a hard few years and I've sacrificed everything to get here today. I owe it to her memory."`);
              // TODO-QSP: dynamic text: "She must have meant everything to you?" you ask. "Yes, but I never got a chance...
              scene.text(`"She must have meant everything to you?" you ask. "Yes, but I never got a chance to be close to her. She was always rehearsing or travelling." Before she can continue, you notice ${((s as any).npc_firstname ?? 0)?.['A284']} looking your way and continue your practice.`);
            }
          }
        } else {
          if (((s as any).ballet_day ?? 0) === 5) {
            // TODO-QSP: dynamic text: "This is it, <<$pcs_nickname>>, are you ready for tomorrow?" <<$npc_firstname['A...
            scene.text(`"This is it, ${((s as any).pcs_nickname ?? 0)}, are you ready for tomorrow?" ${((s as any).npc_firstname ?? 0)?.['A274']} asks. You both feel the pressure, but know not to push yourselves too hard. Instead, you study and recite the routines.`);
            // TODO-QSP: dynamic text: Despite your nerves, you manage to complete your barre exercises and walk throug...
            scene.text(`Despite your nerves, you manage to complete your barre exercises and walk through the movements with only minor criticism from ${((s as any).npc_firstname ?? 0)?.['A274']}. Before long, you realise the time has flown by losing yourself into the lesson.`);
            if (((s as any).mayaqw ?? 0)?.['grave'] === 4) {
              // TODO-QSP: dynamic text: "This is it <<$pcs_nickname>>, it's our big day tomorrow. Come by my room tonigh...
              scene.text(`"This is it ${((s as any).pcs_nickname ?? 0)}, it's our big day tomorrow. Come by my room tonight if you want to talk or rehearse more for tomorrow. It's my turn to make the tea," she says with a laugh.`);
              scene.text('You share her laugh. "Sure, I\'ll take you up on the offer."');
            } else {
              // TODO-QSP: dynamic text: "This is it<<$pcs_nickname>>, it's our big day tomorrow. Come by my room tonight...
              scene.text(`"This is it${((s as any).pcs_nickname ?? 0)}, it's our big day tomorrow. Come by my room tonight if you want to talk or rehearse more for tomorrow," she says with a smile.`);
            }
          }
        }
      }
    }
  }
  scene.actions([
    { label: 'Finish lesson', handler: (st: GameState) => {
    ((s as any).setloc ?? {})['StageTitle'] = 'Reverance';
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/ballet_class_006.jpg';
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: You perform a reverence to <<$npc_firstname['A274']>> in thanks for her help, sh...
    scene.text(`You perform a reverence to ${((s as any).npc_firstname ?? 0)?.['A274']} in thanks for her help, she returns the curtsey, and you head to the showers together.`);
    (s as any).nclass = 4;
    scene.actions([
      { label: 'Go to the showers', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'shower');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterMusicTheory(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = (16 - ((s as any).hour ?? 0)) * 60 + 60;
  ((s as any).setloc ?? {})['StageTitle'] = 'Music Theory';
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/ballet_class_004.jpg';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'instrmusic', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'exp_gain', 'musicprod', Math.floor(Math.random() * 2) + 1);
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  qspCall(s, 'core_library', 'setloc', 'pushkin_ballet_class', ((s as any).locArgs?.[0] ?? 0));
  (s as any).nclass = 5;
  qspCall(s, 'pushkin_ballet_init', 'daily_assessment');
  (s as any).nclass = 0;
  if (((s as any).ballet_day ?? 0) === 1) {
    // TODO-QSP: dynamic text: You enter the classroom, and you see <<$npc_firstname['A285']>> standing beside ...
    scene.text(`You enter the classroom, and you see ${((s as any).npc_firstname ?? 0)?.['A285']} standing beside the door. "Welcome, girls. It's a pleasure to see you all again. I hope you've enjoyed your first day?" She greets you in a warm and rich voice.`);
    // TODO-QSP: dynamic text: You and your classmates murmur a yes, unsure how to react. <<$npc_firstname['A28...
    scene.text(`You and your classmates murmur a yes, unsure how to react. ${((s as any).npc_firstname ?? 0)?.['A285']} ignores the half-hearted response. "You're probably wondering why you are here, as you're not musicians. However, as a dancer, it's essential to understand the basics of Harmony, Melody and Rhythm. How they form the backbone, and how composers have audible cues to your performance. Whilst I don't expect you to become a musician by the end of this week, you should have a solid understanding your performances musical scores and help covney the essence of what the composer intended.`);
    scene.text('The rest of your lesson is taken up with music theory and how to deconstruct the performances and variations to pick up the composers cues.');
  } else {
    if (((s as any).ballet_day ?? 0) === 2) {
      scene.text('On day two of your music lessons, you begin to appreciate the time afforded to relax. "Hands up, who knows the first composition written specifically for ballet?"');
      scene.text('To your surprise, you see a girl\'s hand shoot up. She\'s the one that\'s been garnering jealous looks from around the school for her beauty.');
      scene.text('"Taisiya, yes?"');
      scene.text('"It was Tchaikovsky\'s Swan Lake in 1876. Until then, composers who created the performances were treated with disdain by their more illustrious symphonic peers."');
      // TODO-QSP: dynamic text:  <<$npc_firstname['A285']>>'s eyebrow rises slightly. "Excellent answer, Taisiya...
      scene.text(` ${((s as any).npc_firstname ?? 0)?.['A285']}'s eyebrow rises slightly. "Excellent answer, Taisiya. So you've studied music before?"`);
      scene.text('"No, Ms. Solovyova, I just loved the ballet performances and wanted to learn more about them," she replies.');
      // TODO-QSP: dynamic text:  <<$npc_firstname['A285']>> nods in approval to Taiya's response spends the rest...
      scene.text(` ${((s as any).npc_firstname ?? 0)?.['A285']} nods in approval to Taiya's response spends the rest of the lesson discussing the history of ballet. You noticed a few of your classmates looking sleepy by the end of the class.`);
    } else {
      if (((s as any).ballet_day ?? 0) === 3) {
        // TODO-QSP: dynamic text: Today, you're given a sharp shock. <<$npc_firstname['A285']>> claps her hands to...
        scene.text(`Today, you're given a sharp shock. ${((s as any).npc_firstname ?? 0)?.['A285']} claps her hands to get everyone's attention. "Today, we will test what you've learned. I'm going to be playing some pieces. On the first beat, you will do a demi plié down."`);
        scene.text('"On the second beat, you will do a demi plié up. Repeat until the sixth beat and do a grand plié. The seventh rise from the demi, and the eighth beat finish the demi. Understand? Good."');
        // TODO-QSP: dynamic text:  <<$npc_firstname['A285']>> wastes no time. She starts the piece and calls out, ...
        scene.text(` ${((s as any).npc_firstname ?? 0)?.['A285']} wastes no time. She starts the piece and calls out, "1 2 3, 2 2 3, 3 2 3, 4 2 3, 5 2 3 and grand plié! 6 2 3, and finish." ${((s as any).npc_firstname ?? 0)?.['A285']} runs an eye critically over the class. "You can do better than that and again."`);
        // TODO-QSP: dynamic text: You continue the lesson. <<$npc_firstname['A285']>> keeps you all on your toes b...
        scene.text(`You continue the lesson. ${((s as any).npc_firstname ?? 0)?.['A285']} keeps you all on your toes by changing the tempo, causing some girls to stumble and earning themselves criticism. By the end of the lesson, you're glad it's over.`);
      } else {
        if (((s as any).ballet_day ?? 0) === 4) {
          // TODO-QSP: dynamic text: "Positions!" <<$npc_firstname['A285']>> calls out before you can relax as you en...
          scene.text(`"Positions!" ${((s as any).npc_firstname ?? 0)?.['A285']} calls out before you can relax as you enter the class. "You've been practising the requisite variations for the assessment. I will review the score cues," she says as she sits at the piano and starts playing the Entrance of the Swans.`);
          // TODO-QSP: dynamic text: You all stand there wondering if you should dance, but after a few moments, <<$n...
          scene.text(`You all stand there wondering if you should dance, but after a few moments, ${((s as any).npc_firstname ?? 0)?.['A285']} stops. "Did you listen to the music to find your cues? Let's try that again, on the count of three, one, two, three." Then, you start the whole routine that ${((s as any).npc_firstname ?? 0)?.['A284']} has been drilling into you.`);
          // TODO-QSP: dynamic text: The difference is <<$npc_firstname['A285']>> is creating audible cues with the n...
          scene.text(`The difference is ${((s as any).npc_firstname ?? 0)?.['A285']} is creating audible cues with the notes being played to guide you through the whole performance, and you see a marked improvement from all the dancers with the additional guidance.`);
        } else {
          if (((s as any).ballet_day ?? 0) === 5) {
            scene.text('It\'s your final lesson today before your assessment tomorrow. So you all crowd into the dance hall and start to put on your shoes in preparation for your lesson.');
            // TODO-QSP: dynamic text:  <<$npc_firstname['A285']>> and <<$npc_firstname['A284']>> walk into the class t...
            scene.text(` ${((s as any).npc_firstname ?? 0)?.['A285']} and ${((s as any).npc_firstname ?? 0)?.['A284']} walk into the class together, and ${((s as any).npc_firstname ?? 0)?.['A285']} moves towards the piano. "Class, this is your final lesson. After that, we will do a rehearsal, and I will give you feedback on your performances."`);
            // TODO-QSP: dynamic text: "Take your positions." The class scrambles to get ready. "Remember everything th...
            scene.text(`"Take your positions." The class scrambles to get ready. "Remember everything that ${((s as any).npc_firstname ?? 0)?.['A285']} and I have gone over in the last week. I want you to listen to the music cues, I want you to follow the steps I've taught you and, most of all, I want you to prove to me that you're ready for tomorrow."`);
            // TODO-QSP: dynamic text: <<$npc_firstname['A284']>> claps her hands, and on the count of three, you hear ...
            scene.text(`${((s as any).npc_firstname ?? 0)?.['A284']} claps her hands, and on the count of three, you hear her calling out mistakes from each of the students. "Remember your cues!" ${((s as any).npc_firstname ?? 0)?.['A284']} drives you harder. She stops the class.`);
            // TODO-QSP: dynamic text: "That wasn't a complete disaster. From the top once more." You complete the danc...
            scene.text(`"That wasn't a complete disaster. From the top once more." You complete the dance, and ${((s as any).npc_firstname ?? 0)?.['A284']} is watching the class. "Good, that was better. I'll let you all finish early today, but I want you to return to the halls and prepare for tomorrow."`);
            scene.text('"You will find in the kitchen our recommendations for your evening meal and breakfast tomorrow. You may ignore it if you wish, but it will serve you well as you\'ll need all the energy tomorrow for the exam. There are also energy bars provided between assessments."');
            // TODO-QSP: dynamic text:  <<$npc_firstname['A285']>> comes over and starts handing out booklets to each o...
            scene.text(` ${((s as any).npc_firstname ?? 0)?.['A285']} comes over and starts handing out booklets to each of the students. "These are some guides for ballet scores and music theory. It will list the dance combinations and give tips on deconstructing them."`);
            scene.text('You struggle to get up, and your legs feel like jelly, but you manage a passable curtsy to your teachers without stumbling. You notice that Maya\'s own curtsey is just as weak-kneed as your own.');
            // TODO-QSP: dynamic text: "Remember, keep your muscles warm and do light stretches tonight. You don't want...
            scene.text(`"Remember, keep your muscles warm and do light stretches tonight. You don't want to injure yourself or push too hard," ${((s as any).npc_firstname ?? 0)?.['A284']} says as you leave the class.`);
          }
        }
      }
    }
  }
  (s as any).school_daily_check = ((s as any).daystart ?? 0);
  scene.actions([
    { label: 'Finish school', handler: (st: GameState) => {
    (s as any).hour = 17;
    (s as any).minut = 15;
  }, goto: ['pushkin_ballet_res', 'hallway'] },
  ]);
  scene.build();
}

function enterAssessment(s: GameState, scene: SceneBuilder): void {
  ((s as any).setloc ?? {})['StageTitle'] = 'Assessment Day';
  qspCall(s, 'themes', 'indoors');
  qspCall(s, 'pushkin_ballet_init', 'daily_assessment');
  qspCall(s, 'exercise', 'tier4', 90, 'agil', 'stren', 'danc');
  qspCall(s, 'exercise', 'tier3', 90, 'agil', 'stren', 'danc');
  qspCall(s, 'exp_gain', 'perform', Math.floor(Math.random() * 6) + 5);
  qspCall(s, 'pushkin_ballet_init', 'exercise_pain');
  (s as any).minut = (9 - ((s as any).hour ?? 0)) * 60;
  ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'daily/hall.jpg';
  qspCall(s, 'stat', '');
  qspCall(s, 'core_library', 'stage_title');
  (s as any).minut = ((s as any).minut ?? 0) + 45;
  // TODO-QSP: dynamic text: You arrive at the ballet school and can sense an air of anticipation and nervous...
  scene.text(`You arrive at the ballet school and can sense an air of anticipation and nervousness among your classmates. ${((s as any).npc_firstname ?? 0)?.['A274']} is standing close to you.`);
  scene.text('You notice on the door, someone pinned the old Russian proverb - Без труда́ не вытащишь и рыбку из пруда́ (You must work to pull the fish from the pond). An admonishment to all students to work hard to achieve their dreams.');
  // TODO-QSP: dynamic text: "Come on, <<$pcs_nickname>>." <<$npc_firstname['A274']>> draws your attention to...
  scene.text(`"Come on, ${((s as any).pcs_nickname ?? 0)}." ${((s as any).npc_firstname ?? 0)?.['A274']} draws your attention to the task at hand. "Time to start warming up. We've got an hour to do some light warm-up exercises, then we'll need to get changed." You nod in agreement and enter the classroom set aside for the warm-ups. You approach the barres and start to exercise.`);
  // TODO-QSP: dynamic text: You quickly go through the routine with <<$npc_firstname['A274']>> and grab a qu...
  scene.text(`You quickly go through the routine with ${((s as any).npc_firstname ?? 0)?.['A274']} and grab a quick shower before getting changed into your Ballet Blanc outfit provided, check your tights before putting them on, and take out the new shoes you've kept for this moment.`);
  // TODO-QSP: dynamic text: Once you're dressed, you check your makeup in the mirror and walk over to <<$npc...
  scene.text(`Once you're dressed, you check your makeup in the mirror and walk over to ${((s as any).npc_firstname ?? 0)?.['A274']} to check her appearance in preparation for the first assessment, and she returns the favour.`);
  // TODO-QSP: dynamic text: With minutes to spare, you're outside the door to the examination. You feel your...
  scene.text(`With minutes to spare, you're outside the door to the examination. You feel your nerves are shredded but ${((s as any).npc_firstname ?? 0)?.['A274']} grabs your hand and whispers, "You've got this; remember neither fluff, nor feather." You nod smiling at the old saying replying with "to the devil", and the doors open.`);
  scene.actions([
    { label: 'Perform the Entrance', handler: (st: GameState) => {
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'exams/exam_1.jpg';
    qspCall(s, 'core_library', 'stage_title');
    qspCall(s, 'exercise', 'tier4', 30, 'agil', 'stren', 'danc');
    qspCall(s, 'stat', '');
    scene.text('You all file into the room and assume the first position. An examiner is at the door checking each girl as they enter for any flaws in their outfits or their appearance.');
    scene.text('"Welcome, students. You have been shortlisted for this year\'s apprenticeship intake. Three of you will be allowed to join our school, you have been told what we expect of you today, and we will assess all aspects of your appearance, conduct and the elegance of your performance." An elderly man sits at the table continues to list the assessment requirements.');
    // TODO-QSP: dynamic text: You recognise <<$npc_firstname['A284']>>, two other teachers you've not seen bef...
    scene.text(`You recognise ${((s as any).npc_firstname ?? 0)?.['A284']}, two other teachers you've not seen before, and ${((s as any).npc_firstname ?? 0)?.['A283']}, are all assessing you. ${((s as any).npc_firstname ?? 0)?.['A283']} seems to have his eyes mostly on yourself, but you think you are imagining it.`);
    scene.text('"Excellent. Shall we start? Then take your positions and at a count of three, and begin!" At those words, you feel a sense of calmness, and your nerves fall away as you concentrate on your performance. The minutes fly by so quickly that the performance is over before you even realise it.');
    scene.text('"Thank you, that was a most wonderfful performance from you all," one of the female teachers says to the class. "Now we shall see how you perform a Pas de Deux with your partner. Please wait outside, and we will call you in."');
    scene.actions([
      { label: 'Perform pas de deux', handler: (st: GameState) => {
    qspCall(s, 'exercise', 'tier3', 30, 'agil', 'stren', 'danc');
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'exams/exam_2.jpg';
    qspCall(s, 'core_library', 'stage_title');
    qspCall(s, 'stat', '');
    // TODO-QSP: dynamic text: You wait outside the classroom. You've put on your feet warmers to ensure they r...
    scene.text(`You wait outside the classroom. You've put on your feet warmers to ensure they remain pliable and take the opportunity to drink some water and eat an energy bar. ${((s as any).npc_firstname ?? 0)?.['A274']} sits down beside you, lost in thought.`);
    // TODO-QSP: dynamic text: "How do you think we did?" you ask her. "Hmm?" <<$npc_firstname['A274']>> looks ...
    scene.text(`"How do you think we did?" you ask her. "Hmm?" ${((s as any).npc_firstname ?? 0)?.['A274']} looks up. "Yeah, we did brilliantly. I didn't see many faults from any of us, but it went so quickly, and I couldn't watch everything."`);
    // TODO-QSP: dynamic text: "I know," you reply. Before you can say anything else, you and <<$npc_firstname[...
    scene.text(`"I know," you reply. Before you can say anything else, you and ${((s as any).npc_firstname ?? 0)?.['A274']} are called in.`);
    // TODO-QSP: dynamic text: You and <<$npc_firstname['A274']>> are given your assessment instructions. Final...
    scene.text(`You and ${((s as any).npc_firstname ?? 0)?.['A274']} are given your assessment instructions. Finally, after your ten minutes, you both finish your Pas de Deux performance with a curtsy of reverence to your examiners. All the while, during movements, you've felt ${((s as any).npc_firstname ?? 0)?.['A283']}'s eyes still watching you.`);
    scene.text('You ignore his attention to concentrate on your performance. Though, after you finish, he\'s still staring at you.');
    scene.text('"Thank you both for the performance," one of the examiners says in a neutral voice. "We will call you in for your solo performances shortly, so please take the time to prepare yourselves."');
    qspCall(s, 'food', 'healthy_meal_stats');
    qspCall(s, 'beverage', 'juice_stats');
    scene.actions([
      { label: 'Solo performance', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'exercise', 'tier3', 30, 'agil', 'stren', 'danc');
    qspCall(s, 'stat', '');
    ((s as any).setloc ?? {})['StageImage'] = '' + qspUntranslated(s, "setloc['imagepath']>", { location: "pushkin_ballet_class" }) + 'exams/solo_2.jpg';
    qspCall(s, 'core_library', 'stage_title');
    // TODO-QSP: dynamic text: Back outside, you and <<$npc_firstname['A274']>>do checks on your outfits. You n...
    scene.text(`Back outside, you and ${((s as any).npc_firstname ?? 0)?.['A274']}do checks on your outfits. You notice a small tear on ${((s as any).npc_firstname ?? 0)?.['A274']}'s tights and get your needle and thread out to repair it. You then check each other's hair and makeup, with ${((s as any).npc_firstname ?? 0)?.['A274']} applying some hairspray to tame your flyaway hairs.`);
    // TODO-QSP: dynamic text: There's some fruit juice and some snacks on a table to eat whilst you wait for y...
    scene.text(`There's some fruit juice and some snacks on a table to eat whilst you wait for your examination performance. Then, you start doing some light exercises with ${((s as any).npc_firstname ?? 0)?.['A274']} to remain supple.`);
    // TODO-QSP: dynamic text: Shortly after you finish your snacks and stretches, you're called in before <<$n...
    scene.text(`Shortly after you finish your snacks and stretches, you're called in before ${((s as any).npc_firstname ?? 0)?.['A274']}.`);
    // TODO-QSP: dynamic text: "<<$pcs_firstname>> <<$pcs_lastname>>, this is your solo performance. You unders...
    scene.text(`"${((s as any).pcs_firstname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, this is your solo performance. You understand what is required of you?" You realise it's the school's Ballet Mistress attending the solo performances. Thankfully, ${((s as any).npc_firstname ?? 0)?.['A283']} isn't assessing the solo exams.`);
    scene.text('You curtsy and reply, "Yes, Mistress, I\'m ready."');
    scene.text('"Very well, let us begin." With that, she taps the table with something you can\'t see. Then, on the count of three, you start your performance. As the music starts, you perform the movements you have learned by rote over the last week. You feel you\'ve never performed so well in your life, and everything flows together in a way it never has before.');
    scene.text('At the end of the performance, you feel a sense of loss of something extraordinary. You realize the emotional high you\'ve been riding has come to a crashing end, and you barely retain your sense of poise and perform the great reverence to your examiners before you are given permission to leave.');
    qspCall(s, 'pushkin_ballet_init', 'daily_assessment', 'grade');
    ((s as any).balletqw ?? {})['school'] = 1;
    scene.actions([
      { label: 'Finalé', handler: (st: GameState) => {
    dynamicGoto(st, 'loc', 'start');
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
    case 'start':
      enterStart(s, scene);
      break;
    case 'pilates':
      enterPilates(s, scene);
      break;
    case 'first_lesson':
      enterFirstLesson(s, scene);
      break;
    case 'shower':
      enterShower(s, scene);
      break;
    case 'grade_check':
      enterGradeCheck(s, scene);
      break;
    case 'makeup':
      enterMakeup(s, scene);
      break;
    case 'lunch':
      enterLunch(s, scene);
      break;
    case 'second_lesson':
      enterSecondLesson(s, scene);
      break;
    case 'music_theory':
      enterMusicTheory(s, scene);
      break;
    case 'assessment':
      enterAssessment(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const pushkin_ballet_class: LocationDef = {
  name: 'pushkin_ballet_class',
  title: 'You enter a large studio with dance equipment and mirrors on',
  region: 'pushkin',
  locationType: 'public_indoors',
  enter: enter,
};
