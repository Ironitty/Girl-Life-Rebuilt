import { qspCall, qspFunc } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterRide(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Go with the massive man', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 15;
    qspCall(s, 'stat', '');
    scene.text('You quickly get dressed and follow the fat man to his car. He guides you to an old Mitsubishi Pajero, and takes place behind the wheel while he invites you to relax in the passenger seat. Once you get in the car, he puts his hand on your knee as he starts the engine.');
    if (((s as any).npc_QW ?? 0)?.['A113'] === 0  &&  (!((s as any).belgangday ?? 0))) {
      scene.text('"My name is Vadim Bely… you can call me Mr. Bely. What\'s your name, girl?"');
      // TODO-QSP: dynamic text: You're still a bit intimidated by his presence, and just say your name: "<<$pcs_...
      scene.text(`You're still a bit intimidated by his presence, and just say your name: "${((s as any).pcs_nickname ?? 0)}."`);
    }
    scene.text('Vadim slides his hand up your leg a little, and gently kneads your thigh as you drive through town, the engine roaring. Within minutes, you approach a five-storey apartment. Vadim parks the car in front of it and says: "Get out and follow me", not waiting for a response.');
    scene.actions([
      { label: 'Look around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.text('The apartment is actually in decent shape. The minimal amount of furniture and decorations don\'t make it look very hospitable though, and you assume this might just be one of the places Vadim rented for business or pleasure, not for living in. Noticing you\'re spending too much time looking around and aren\'t following him swiftly enough, he grabs you by your hair and pulls your face to his, roughly shoving his tongue in your mouth. You can smell the tobacco on his breath, and do your best to ignore the taste as he kisses you.');
    scene.actions([
      { label: 'Kiss him', goto: ['BelSex', ''] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterGo(s: GameState, scene: SceneBuilder): void {
  // TODO-QSP: end
  scene.actions([
    { label: 'Try to get away', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You don\'t like where this is going at all. You attempt to get up and walk away, but the bald man immediately grabs your wrist, pulling you back down.');
    scene.text('"Relax girl, you don\'t have to go. Are you nervous or something?"');
    qspCall(s, 'willpower', 'misc', 'self', 'easy');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Apologize and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Apologize and leave [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You assure him that you really need to get going, trying to hide the fact that you are indeed scared of him.');
    scene.text('The guy lets go of your wrist and gives you an amicable smile. "Alright, girl. It\'s a small world… I\'m sure I will see you around". You rub your wrist as you leave, he was really quite rough about it.');
    scene.actions([
      { label: 'Get away from him', goto: ['pav_lake', ''] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'You\'re not nervous…', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('"No… I\'m not nervous," you quietly say, even though you\'re afraid to look him in the eye. Well, that wasn\'t very convincing.');
    scene.text('The guy chuckles, and pulls you against his hairy chest. His sweaty hands are mauling your ass now.');
    scene.text('As he feels you up, he tries to coax you into joining him, as if he owns you already. "I know you\'re not, baby. You should come with me, I\'ll show you a good time. You won\'t regret it."');
    scene.actions([
      { label: 'Resist', handler: (st: GameState) => {
    qspCall(st, 'LakeBoyDy', 'slap');
  } },
      { label: 'Apologize and leave', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You assure him that you really need to get going, trying to hide the fact that you are in fact quite scared of him.');
    scene.text('The guy lets go of your ass and gives you an amicable smile. "Alright, girl. It\'s a small world… I\'m sure I will see you around." You rub your wrist as you leave, he was really quite rough about it.');
    scene.actions([
      { label: 'Get away from him', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterSlap(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'willpower', 'misc', 'resist', 'easy');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Tell him to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Tell him to fuck off [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'misc', 'resist', 'easy');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You yell at him and tell him to get away from you. Your shouting quickly catches the attention of other people nearby and the bald man leaves quickly, not having expected your resistance.');
    scene.actions([
      { label: 'Get away from him', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  }
  qspCall(s, 'willpower', 'skill_base', 'stren', 'resist', 'medium');
  if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
    scene.actions([
      { label: 'Kick him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Kick him in the balls [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'skill_base', 'stren', 'resist', 'medium');
    qspCall(s, 'willpower', 'pay', 'resist');
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You\'re angry at this guy and his harassment, so you decide to knee him in the balls. He did not expect such a reaction and you score a perfect hit. The bald man bends over and drops on the ground, wincing from pain.');
    scene.text('You pack up your things and go.');
    scene.actions([
      { label: 'Leave him lying in the sand', goto: ['pav_lake', ''] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him to let go', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You pull away from the bald guy, slapping his hands away from your body as you do. "Get your hands off me!" you yell at him.');
    scene.text('You can see the look in his eyes harden, and the younger guy roughly grabs you by the wrist again. The fat man snarks at you: "Why are you being so rude, whore? Do you think you\'re better than me?"');
    scene.actions([
      { label: 'Complain about the pain', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('His hand has your wrist gripped like it\'s in a vice, and you involuntarily shriek in pain: "Ow! Please let me go, you\'re hurting me!"');
    scene.text('Instead of letting go, he twists your arm behind your back, which hurts even more. The fat man doesn\'t look like he pities you at all: "You didn\'t answer my question, whore. Do you think you\'re better than me?"');
    // TODO-QSP: dynamic text: You're wincing in pain now, and are at a loss for words. Yes, you do think you'r...
    scene.text(`You're wincing in pain now, and are at a loss for words. Yes, you do think you're better than him, but obviously you can't say that. Meanwhile, he digs through your personal items and finds your passport: "${((s as any).pcs_nickname ?? 0)} ${((s as any).pcs_lastname ?? 0)}, living in Pavlovsk… interesting." He pockets your passport. Then he turns back to you and says in a menacing voice: "You know what, ${((s as any).pcs_nickname ?? 0)}… you remind me of this girl I met the other day. Right here, on this same beach. She was being rude to me, not even as much as you are now. I think I broke her hand by accident."`);
    scene.actions([
      { label: 'Try to placate him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('The way his friend is twisting your arm behind your back hurts a lot, combined with the tight grip he still has on your wrist. Your screaming is making the other visitors on the beach uncomfortable, and none of them want to mess with the scary guys who are holding you down. Instead, you notice everyone quickly gathering their belongings and disappearing from the beach, some of them giving you an apologetic look as they run off. Within seconds, it\'s just you, him and his scary friend remaining.');
    scene.text('You realize you\'ve made a terrible mistake now by disrespecting him, and try to placate him: "I\'m sorry sir! Please, I was wrong to talk to you like that! It won\'t happen again!"');
    scene.text('He growls at you: "You\'re damn fucking straight it won\'t happen again, whore. I know who you are, I know where you live… soon I will know where you go to school, where you work and who you hang out with. Now tell me… how are you going to make it up to me?"');
    scene.actions([
      { label: 'Offer him money', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    ((s as any).npc_QW ?? {})['A113'] = 1;
    (s as any).daybelisex = ((s as any).daystart ?? 0);
    qspCall(s, 'money', 'debt_add', 'belgangPay', Math.max(((s as any).money ?? 0) * 5, 50000));
    qspCall(s, 'stat', '');
    if (((s as any).week ?? 0) === 7) {
      (s as any).belfirstweek = 0;
    } else {
      if (((s as any).week ?? 0) >= 1  &&  ((s as any).week ?? 0) <= 2) {
        (s as any).belfirstweek = 0;
      } else {
        (s as any).belfirstweek = 1;
      }
    }
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You\'ve given up trying to be tough a while ago, and by now you are crying your eyes out. Thick tears roll down your cheeks as you beg him: "Please sir, I\'m begging you! I can give you money… please just let me go! Please!"');
    // TODO-QSP: dynamic text: Still that menacing voice: "Really, <<$pcs_nickname>>? I like money. Let's see w...
    scene.text(`Still that menacing voice: "Really, ${((s as any).pcs_nickname ?? 0)}? I like money. Let's see what you have to offer". He takes your wallet and counts your money, and then nods at the other guy. He pushes your wrist further behind your back, hurting you even more while the fat man pretends to be insulted: "Are you fucking kidding me? Are you seriously offering me this petty change?"`);
    // TODO-QSP: dynamic text: You don't know what to say, and just sit there sobbing quietly. He continues: "T...
    scene.text(`You don't know what to say, and just sit there sobbing quietly. He continues: "This won't do at all. Your debt to me will be ${qspFunc(s, 'money', 'string_debt', ((s as any).belgangPay ?? 0))}.`);
    // TODO-QSP: dynamic text: He slaps you in the face, while his friend still has your arm twisted behind you...
    scene.text(`He slaps you in the face, while his friend still has your arm twisted behind your back. "Did you hear me, girl? I said ${qspFunc(s, 'money', 'string_debt', ((s as any).belgangPay ?? 0))}."`);
    scene.actions([
      { label: 'Agree to pay him', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'stat', '');
    (s as any).belgangday = ((s as any).daystart ?? 0);
    (s as any).belgangPayWeekAmount = 5000;
    (s as any).belgangPayWeek = 0;
    (s as any).belgangPayextension = 0;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('By now you would do anything just so he would let you go, and you readily agree to his terms. The younger guy lets you go, and you rub your wrist to try and ease the pain in it. The bald man grins, and you notices several golden teeth in his mouth.');
    // TODO-QSP: dynamic text: "Excellent. I'll have you know, <<$pcs_nickname>>: if you do not pay me <<$func(...
    scene.text(`"Excellent. I'll have you know, ${((s as any).pcs_nickname ?? 0)}: if you do not pay me ${qspFunc(s, 'money', 'string_debt_addition', ((s as any).belgangPayWeekAmount ?? 0))} each week until you paid of your debts, you're going to earn them for me one way or the other. I know just the place. For your sake: make sure you bring the money."`);
    if (((s as any).belfirstweek ?? 0) === 1) {
      scene.text('"I expect the first payment by the end of next week. By the way, you can call me Mr. Bely."');
    } else {
      if ((!((s as any).belfirstweek ?? 0))) {
        scene.text('"I expect the first payment next Sunday. By the way, you can call me Mr. Bely."');
      }
    }
    scene.actions([
      { label: 'Accept', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    (s as any).belgangProstitute = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('The men leave you alone and take a seat a bit further down the beach. You scrape your stuff together as quickly as you can and just want to leave as soon as possible, unsure how you\'re going to gather that amount of money.');
    if ((!((s as any).belfirstweek ?? 0))) {
      qspCall(s, 'money', 'debt_add', 'belgangPayWeek', ((s as any).belgangPayWeekAmount ?? 0));
    }
    qspCall(s, 'belgang', 'update_debt_calendar');
    scene.text(' ');
    // TODO-QSP: dynamic text: You owe him: <<$func('money', 'string_debt', belgangPay)>>
    scene.text(`You owe him: ${qspFunc(s, 'money', 'string_debt', ((s as any).belgangPay ?? 0))}`);
    if (((s as any).belgangPayWeek ?? 0) >= 0) {
      // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'string_debt', belgangPayWeek)>>
      scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'string_debt', ((s as any).belgangPayWeek ?? 0))}`);
    } else {
      // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'format', 100)>>
      scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'format', 100)}`);
      // TODO-QSP: dynamic text: You have reduced your next weeks payment by: <<$func('money', 'string_debt_reduc...
      scene.text(`You have reduced your next weeks payment by: ${qspFunc(s, 'money', 'string_debt_reduction', -1*((s as any).belgangPayWeek ?? 0))}`);
    }
    scene.actions([
      { label: 'Get up and move away from them', goto: ['pav_lake', ''] },
    ]);
  } },
      { label: 'Beg him to reduce the weekly rate', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 1;
    qspCall(s, 'stat', '');
    (s as any).belgangPayWeekAmount = 4000;
    (s as any).belgangPayWeek = 0;
    (s as any).belgangPayextension = 0;
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You sob and cry, begging the criminals for mercy: "Please sir, I\'m just a schoolgirl! I can\'t raise that kind of money each week!"');
    // TODO-QSP: dynamic text: The bald guy looks at you indifferently and yawns: "That's really not my problem...
    scene.text(`The bald guy looks at you indifferently and yawns: "That's really not my problem, ${((s as any).pcs_nickname ?? 0)}. But you know what, I'm a nice guy," he says with a fake smile. "I will reduce it to ${qspFunc(s, 'money', 'string_debt_addition', ((s as any).belgangPayWeekAmount ?? 0))} each week and I'll get you started."`);
    scene.text('He pulls down his trunks, revealing his flaccid cock. His associate grabs you by the hair and pushes your head down towards the fat man\'s groin: "You want some money, bitch? Go ahead… !"');
    scene.actions([
      { label: 'Suck him off', goto: ['LakeBoyDy', 'sucksasha'] },
    ]);
  } },
    ]);
  } },
      { label: 'You can\'t afford that', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    (s as any).belgangPayWeekAmount = 3000;
    (s as any).belgangPayWeek = 0;
    (s as any).belgangPayextension = 0;
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/fedor/fedorev/Strela/vadimbely.jpg');
    scene.text('You sob and cry, begging the criminals for mercy: "Please sir, I\'m just a schoolgirl! I can\'t raise that kind of money!"');
    // TODO-QSP: dynamic text: The bald guy looks at you indifferently and yawns: "That's really not my problem...
    scene.text(`The bald guy looks at you indifferently and yawns: "That's really not my problem, ${((s as any).pcs_nickname ?? 0)}. But you know what, I'll get you started."`);
    scene.text('He pulls down his trunks, revealing his flaccid cock. His associate grabs you by the hair and pushes your head down towards the fat man\'s groin: "You want some money, bitch? Go ahead… !"');
    scene.actions([
      { label: 'Suck him off', goto: ['LakeBoyDy', 'sucksasha'] },
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

function enterSucksasha(s: GameState, scene: SceneBuilder): void {
  if ((!((s as any).sashaBeliSex ?? 0))) {
    (s as any).sashaBeliSex = 1;
    (s as any).guy = ((s as any).guy ?? 0) + (1);
  }
  qspCall(s, 'cum_call', 'mouth_swallow', ((s as any).boy ?? 0), 1);
  (s as any).belgangday = ((s as any).daystart ?? 0);
  (s as any).belgangProstitute = 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/vadim/sex/beachblow.jpg');
  scene.text('You take his flacid cock in your mouth and begin to suck, slowly feeling it harden inside your mouth. Once you\'ve warmed him up properly, he takes control of you and begins to fuck your throat, while you do your best to suppress your gag reflex. A few minutes later, he shoots his thick ropes of cum deep down your throat, pulling his cock out only to drop the last few gobs onto your tongue. It tastes quite bitter, and you have to force yourself to hide the disgust on your face. When you look over at his accomplice, you see he shot a video of you performing a deepthroating blowjob on your phone. He sends the video to a different number, and then deletes the file from your phone.');
  // TODO-QSP: dynamic text: The fat man casually pushes you on your back while he gets up. He looks down at ...
  scene.text(`The fat man casually pushes you on your back while he gets up. He looks down at you and indifferently says: "Not bad, whore. You still have a lot to learn but we will work on that. Now listen, that blowjob just took ${qspFunc(s, 'money', 'string_debt_reduction', 100)} off your debt. If you don't pay me ${qspFunc(s, 'money', 'string_debt_addition', ((s as any).belgangPayWeekAmount ?? 0))} each week until you paid of your debts, you're going to earn them for me one way or the other. I know just the place. For your sake: make sure you bring the money."`);
  if (((s as any).belfirstweek ?? 0) === 1) {
    scene.text('"I expect the first payment by the end of next week. By the way, you can call me Mr. Bely."');
  } else {
    if ((!((s as any).belfirstweek ?? 0))) {
      scene.text('"I expect the first payment next Sunday. By the way, you can call me Mr. Bely."');
    }
  }
  scene.text('The two men leave you to collect your thoughts and walk away, taking a seat a bit further down at the beach. The younger guy pulls out his phone and watches the video of you giving the fat man a blowjob again, while the fat man makes a call with your passport in his hand - you hope he\'s not digging up more info on you while you quickly gather your things and get ready to leave.');
  if ((!((s as any).belfirstweek ?? 0))) {
    qspCall(s, 'money', 'debt_add', 'belgangPayWeek', ((s as any).belgangPayWeekAmount ?? 0));
  }
  qspCall(s, 'money', 'debt_pay', 'belgangPay', 100, 'none');
  qspCall(s, 'money', 'debt_pay', 'belgangPayWeek', 100, 'none');
  qspCall(s, 'belgang', 'update_debt_calendar');
  scene.text(' ');
  // TODO-QSP: dynamic text: You owe him: <<$func('money', 'string_debt', belgangPay)>>
  scene.text(`You owe him: ${qspFunc(s, 'money', 'string_debt', ((s as any).belgangPay ?? 0))}`);
  if (((s as any).belgangPayWeek ?? 0) >= 0) {
    // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'string_debt', belgangPayWeek)>>
    scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'string_debt', ((s as any).belgangPayWeek ?? 0))}`);
  } else {
    // TODO-QSP: dynamic text: This week you need to pay him: <<$func('money', 'format', 100)>>
    scene.text(`This week you need to pay him: ${qspFunc(s, 'money', 'format', 100)}`);
    // TODO-QSP: dynamic text: You have reduced your next weeks payment by: <<$func('money', 'string_debt_reduc...
    scene.text(`You have reduced your next weeks payment by: ${qspFunc(s, 'money', 'string_debt_reduction', -1*((s as any).belgangPayWeek ?? 0))}`);
  }
  qspCall(s, 'arousal', 'bj', 15, 'sub', 'deepthroat');
  qspCall(s, 'arousal', 'end');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move away from them', goto: ['pav_lake', ''] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'ride':
      enterRide(s, scene);
      break;
    case 'go':
      enterGo(s, scene);
      break;
    case 'slap':
      enterSlap(s, scene);
      break;
    case 'sucksasha':
      enterSucksasha(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const LakeBoyDy: LocationDef = {
  name: 'LakeBoyDy',
  title: 'You take his flacid cock in your mouth and begin to suck, sl',
  region: 'other',
  enter: enter,
};
