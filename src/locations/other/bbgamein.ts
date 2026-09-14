import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).bbpickupDay = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/insidecourt.jpg');
  if (((s as any).grupTipe ?? 0) !== 2) {
    scene.text('When you enter the gym, you notice some of the jocks standing around the basket, shooting and talking. They seem to joke around as some do more poorly than the others.');
    scene.text('They look like they\'re about to play some basketball and a few of them acknowledge you, but none wave you over.');
    scene.actions([
      { label: 'Sit and watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/watch.jpg');
    scene.text('You take a seat on the bleachers near the court and watch them play. Most of them are pretty competitive, really pushing it to try and win.');
    scene.text('There\'s the occasional argument about a foul, but everyone mostly gets along and has fun. You have to admit it looks pretty fun and think you should ask to join them one day.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'Ask to join', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/teampick.jpg');
    scene.text('You walk over to them and several turn towards you. "Hey guys, what are you doing?"');
    scene.text('"We\'re about to divide up into teams and play," Lazar replies. "You can watch if you want."');
    scene.text('"Could I maybe join you instead?" you ask meekly.');
    // TODO-QSP: dynamic text: "Maybe some other time, <<$pcs_nickname>>…" he says and they start picking teams...
    scene.text(`"Maybe some other time, ${((s as any).pcs_nickname || '')}…" he says and they start picking teams, forcing you away.`);
    scene.actions([
      { label: 'Sit and watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/watch.jpg');
    scene.text('You take a seat on the bleachers near the court and watch them play. Most of them are pretty competitive, really pushing it to try and win.');
    scene.text('There\'s the occasional argument about a foul, but everyone mostly gets along and has fun. You have to admit it looks pretty fun and think you should ask to join them again one day.');
    scene.actions([
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
      { label: 'Leave', goto: ['gdksport', 'start'] },
    ]);
  } },
    ]);
  } else {
    scene.text('When you enter the gym, you notice some of the jocks standing around the basket, shooting and talking. They seem to joke around as some do more poorly than the others.');
    // TODO-QSP: dynamic text: "Over here, <<$pcs_nickname>>! We were just about to pick the teams!" Lazar yell...
    scene.text(`"Over here, ${((s as any).pcs_nickname || '')}! We were just about to pick the teams!" Lazar yells out.`);
    scene.text('You greet everyone as Lazar continues. "Okay, you know the rules by now, 3 vs 3, first to 21. Winners stay until they lose."');
    scene.text('Everyone nods and their eyes start scanning around as they search for a team.');
    scene.actions([
      { label: 'Ask around', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'gdksport', 'jocks_acceptance');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/teampick.jpg');
    scene.text('You cautiously walk around, deciding who you could form a team with. Most of them invite you to join them.');
    scene.text('After hearing everyone out, you can form an all-girls team, a mixed team with two girls and a boy or join a team with two boys.');
    scene.actions([
      { label: 'Join the all-girl team', goto: ['bbgamein', 'girls'] },
      { label: 'Join the mixed team', goto: ['bbgamein', 'mixed'] },
      { label: 'Join the boys team', goto: ['bbgamein', 'boys'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterGirls(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gschool_events', 'rand_girl_arg', 0, 1, 0, 0, 0, 0);
  qspCall(s, 'gschool_events', 'rand_girl_arg1', 0, 1, 0, 0, 0, 0);
  qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
  // TODO-QSP: dynamic text: You line up with <<$rand_girl>> and <<$rand_girl1>> and get ready to enter the g...
  scene.text(`You line up with ${((s as any).rand_girl || '')} and ${((s as any).rand_girl1 || '')} and get ready to enter the game. You're all pumped up, ready to take on any of the other teams.`);
  scene.text('"You ready, girls?!" you confidently yell out and get a loud shout back.');
  scene.text('The three of you confidently step onto the court and get ready for the game.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Wait for opponent', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('You\'re up against the toughest possible opponent, the all boys team. They\'re a rowdy bunch and as they enter the court, they start mockingly laughing as they point towards you.');
    scene.text('"You won\'t be laughing after we beat you!" you yell out.');
    // TODO-QSP: dynamic text: The boys break out in even bigger laughter and have a hard time holding back the...
    scene.text(`The boys break out in even bigger laughter and have a hard time holding back their tears. "Sure, sure. Whatever you say, ${((s as any).pcs_nickname || '')}…"`);
    scene.text('You\'re now even more determined to beat them.');
    scene.actions([
      { label: 'Give it your best', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('"We\'ll show them…" you say under your breath.');
    scene.text('You take a deep sigh and turn to your teammates. "Okay, listen up. I don\'t care if they\'re stronger than us, we\'re going to win this. I\'ll give my best and I want you to give it your best too."');
    scene.text('Your teammates look at each other with some hesitation, but they cautiously nod and walk out onto the court with you.');
    scene.actions([
      { label: 'Play the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('You\'re putting up a pretty good fight, but the physical advantage the boys have is proving to be too much. Before you know it, they\'re leading by quite a large margin.');
    scene.text('"This is so unfair!" you yell as you pant for breath.');
    scene.text('"Not so cocky anymore, huh?" the boys say mockingly. "You\'re all talk, just as expected."');
    scene.text('"Okay, how about this then. One point wins it all?" you say with a smirk.');
    scene.text('"Why would we do that when we\'re crushing you?" they laugh in response.');
    scene.text('"Too scared?" you say teasingly with an even bigger smirk.');
    scene.actions([
      { label: 'Let\'s go then', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('You\'ve struck a nerve and they all turn serious and get ready. The ball-holder passes to you and you begin your attack.');
    scene.text('You quickly take a step to the side, but their defender is already on you and you need to make a decision.');
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('Even though your opponent is pressing tightly against your body, you manage to quickly move to one side. Just as he\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are doing a great job keeping the other boys busy so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave him behind and quickly move towards the basket. You slam the ball into the basket, securing your victory.');
      scene.text('Your teammates run towards you and the three of you start jumping around.');
      scene.text('"See? I told you we would beat you!" you say teasingly and stick your tongue out.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('You move to the left, but their defender is too quick on his feet and blocks you before you can go right. He\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse him. However, he\'s not buying it and quickly slaps the ball out of your hands before passing it to his teammate, who dunks it and wins the game for them.');
      scene.text('You drop your head in disappointment as your opponents high-five each other. "They really thought they could beat us? What a joke!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and scores.');
      scene.text('The three of you start excitedly jumping around while the boys sulk in defeat.');
      scene.text('"See? I told you we would beat you!" you say teasingly and stick your tongue out.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the boy moves between you and your teammate, ready to intercept.');
      scene.text('Your teammate tries her best to get into position, but the boy is too strong and easily wrestles the ball from her grasp. He makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you tried your best," one teammate says, trying ...
      scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, you tried your best," one teammate says, trying to cheer you up while the boys loudly celebrate.`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell your amused opponent, who seems willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates run towards you and you all jump around excitedly while the boys argue with each other.');
      scene.text('"Why did you let her take the shot?! Are you fucking dumb?!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the boys grabs the rebound and passes it to his teammate, who takes a shot and scores, winning the game.');
      scene.text('You stand in disbelief about how you missed while your teammates try to cheer you up.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'sweat', 'add', 40);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself and lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, he takes the ball and easily scores. Your teammates stare in disbelief and the boys howl in laughter as you blush in embarrassment at the realization of what you just did.');
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Hold back', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('"We\'ll go about this in a different way…" you say under your breath.');
    scene.text('You turn to your teammates and call them over. "We can\'t match them in strength, but we can play smarter than them."');
    scene.text('The three of you huddle up and talk about different strategies before stepping back out onto the court.');
    scene.actions([
      { label: 'Play the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('You\'re putting up a pretty good fight, but the physical advantage the boys have is proving too much. Before you know it, they\'re leading by quite a large margin.');
    scene.text('"This is so unfair!" you yell as you pant for breath.');
    scene.text('"Not that cocky anymore, huh?" the boys say mockingly. "You\'re all talk, just as expected."');
    scene.text('"Okay, how about this then. one point wins it all?" you say with a smirk.');
    scene.text('"Why would we do that when we\'re crushing you?" they laugh in response.');
    scene.text('"Too scared?" you teasingly with an even bigger smirk.');
    scene.actions([
      { label: 'Let\'s go then', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('You\'ve struck a nerve and they all turn serious and get ready. The ball-holder passes to you and you begin your attack.');
    scene.text('You quickly take a step to the side, but their defender is already on you and you need to make a decision.');
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('Even though your opponent is pressing tightly against your body, you manage to quickly move to one side. Just as he\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are doing a great job keeping the other boys busy so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave him behind and quickly move towards the basket. You slam the ball into the basket, securing your victory.');
      scene.text('Your teammates run towards you and the three of you start jumping around.');
      scene.text('"See? I told you we would beat you!" you say teasingly and stick your tongue out.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('You move to the left, but their defender is too quick on his feet and blocks you before you can go right. He\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse him. However, he\'s not buying it and quickly slaps the ball out of your hands before passing it to his teammate, who dunks it and wins the game for them.');
      scene.text('You drop your head in disappointment as your opponents high-five each other. "They really thought they could beat us? What a joke!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and scores.');
      scene.text('The three of you start excitedly jumping around while the boys sulk in defeat.');
      scene.text('"See? I told you we would beat you!" you say teasingly and stick your tongue out.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the boy moves between you and your teammate, ready to intercept.');
      scene.text('Your teammate tries her best to get into position, but the boy is too strong and easily wrestles the ball from her grasp. He makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you tried your best," one teammate says, trying ...
      scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, you tried your best," one teammate says, trying to cheer you up while the boys loudly celebrate.`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell your amused opponent, who seems willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates run towards you and you all jump around excitedly while the boys argue with each other.');
      scene.text('"Why did you let her take the shot?! Are you fucking dumb?!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the boys grabs the rebound and passes it to his teammate, who takes a shot and scores, winning the game.');
      scene.text('You stand in disbelief about how you missed while your teammates try to cheer you up.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'sweat', 'add', 20);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself and lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, he takes the ball and easily scores. Your teammates stare in disbelief and the boys howl in laughter as you blush in embarrassment at the realization of what you just did.');
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Play normally', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('Hearing them comment on your team, you nonchalantly shrug your shoulders. "It\'s no big deal. Let them think they\'re better than us."');
    scene.text('"Shouldn\'t we-" one of your teammates starts to ask, but you cut them off.');
    scene.text('"No, there\'s no need. As long as we play as we normally would, I don\'t see why we couldn\'t win," you reply.');
    scene.actions([
      { label: 'Play the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('You\'re putting up a pretty good fight, but the boys physical advantage is proving too much. Before you know it, they\'re leading by quite a large margin.');
    scene.text('"This is so unfair!" you yell as you pant for breath.');
    scene.text('"Not that cocky anymore, huh?" the boys say mockingly. "You\'re all talk, just as expected."');
    scene.text('"Okay, how about this then. one point wins it all?" you say with a smirk.');
    scene.text('"Why would we do that when we\'re crushing you?" they laugh in response.');
    scene.text('"Too scared?" you teasingly with an even bigger smirk.');
    scene.actions([
      { label: 'Let\'s go then', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('You\'ve struck a nerve and they all turn serious and get ready. The ball-holder passes to you and you begin your attack.');
    scene.text('You quickly take a step to the side, but their defender is already on you and you need to make a decision.');
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('Even though your opponent is pressing tightly against your body, you manage to quickly move to one side. Just as he\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are doing a great job keeping the other boys busy so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave him behind and quickly move towards the basket. You slam the ball into the basket, securing your victory.');
      scene.text('Your teammates run towards you and the three of you start jumping around.');
      scene.text('"See? I told you we would beat you!" you say teasingly and stick your tongue out.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('You move to the left to no avail, but their defender is too quick on his feet and blocks you before you can go right. He\'s got you totally covered, but you have one last option left.');
      scene.text('You move to the left, but their defender is too quick on his feet and blocks you before you can go right. He\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse him. However, he\'s not buying it and quickly slaps the ball out of your hands before passing it to his teammate, who dunks it and wins the game for them.');
      scene.text('You drop your head in disappointment as your opponents high-five each other. "They really thought they could beat us? What a joke!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and scores.');
      scene.text('The three of you start excitedly jumping around while the boys sulk in defeat.');
      scene.text('"See? I told you we would beat you!" you say teasingly and stick your tongue out.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the boy moves between you and your teammate, ready to intercept.');
      scene.text('Your teammate tries her best to get into position, but the boy is too strong and easily wrestles the ball from her grasp. He makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you tried your best," one teammate says, trying ...
      scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, you tried your best," one teammate says, trying to cheer you up while the boys loudly celebrate.`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell your amused opponent, who seems willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates run towards you and you all jump around excitedly while the boys argue with each other.');
      scene.text('"Why did you let her take the shot?! Are you fucking dumb?!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the boys grabs the rebound and passes it to his teammate, who takes a shot and scores, winning the game.');
      scene.text('You stand in disbelief about how you missed while your teammates try to cheer you up.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'sweat', 'add', 30);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself and lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, he takes the ball and easily scores. Your teammates stare in disbelief and the boys howl in laughter as you blush in embarrassment at the realization of what you just did.');
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
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

function enterMixed(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gschool_events', 'rand_boy_arg', 0, 1, 0, 0, 0, 0);
  qspCall(s, 'gschool_events', 'rand_girl_arg', 0, 1, 0, 0, 0, 0);
  qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
  scene.text('You and your teammates huddle together and make up a game plan.');
  scene.text('All three of you are oozing with anticipation and are pumped up for the game.');
  scene.text('You encourage each other as you step out onto the court. "Come on, we\'ve got this!"');
  // TODO-QSP: end
  scene.actions([
    { label: 'Give it your best', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('"We\'ll show them…" you say under your breath…');
    scene.text('You take a deep breath and turn to your teammates. "Okay, listen up. I don\'t care if they\'re stronger than us, we\'ll win this. I\'ll give my best and I want you to give it your best too."');
    scene.text('Your teammates look at each other with some hesitation, but cautiously nod and walk out onto the court with you.');
    scene.actions([
      { label: 'Start the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/game.jpg');
    scene.text('You get an early lead against another mixed team, but as the match continues, the score is soon tied up.');
    scene.text('Everything is on the last attack as your teammate grabs the ball and nods at you.');
    // TODO-QSP: dynamic text: As expected, your opponents double team your teammate and they pass the ball to ...
    scene.text(`As expected, your opponents double team your teammate and they pass the ball to you. "Finish it, ${((s as any).pcs_nickname || '')}!"`);
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('Even though your opponent is pressing tightly against your body, you manage to quickly move to one side. Just as she\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are doing a great job keeping the others busy so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave her behind and quickly move towards the basket. You slam the ball into the basket, securing your victory.');
      scene.text('Your teammates run towards you and the three of you start jumping around excitedly.');
      scene.text('"Easy win!" you yell out as you high-five a teammate.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('You move to the left, but their defender is too quick on her feet and blocks you before you can go right. She\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse her. However, she\'s not buying it and quickly slaps the ball out of your hands before passing it to her teammate, who dunks it and wins the game for them.');
      scene.text('You drop your head in disappointment as your opponents high-five each other. "They really thought they could beat us? What a joke!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and scores.');
      scene.text('The three of you start excitedly jumping around while the other team sulks in defeat.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the boy moves between you and your teammate, ready to intercept.');
      scene.text('Your teammate tries her best to get into position, but the boy is too strong and easily wrestles the ball from her grasp. He makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you tried your best," one teammate says, trying ...
      scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, you tried your best," one teammate says, trying to cheer you up while the other team loudly celebrate.`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell your amused opponent, who seems willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates run towards you and you all jump around excitedly while the other team argue with each other.');
      scene.text('"Why did you let her take that shot?! Are you fucking dumb?!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the girls grabs the rebound and passes it to her teammate, who takes a shot and scores, winning the game.');
      scene.text('You stand in disbelief about how you missed while your teammates try to cheer you up.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'sweat', 'add', 40);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself and lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, she takes the ball and easily scores. Your teammates stare in disbelief and the other team howls in laughter as you blush in embarrassment at the realization of what you just did.');
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Hold back', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('"We\'ll go about this in a different way…" you say under your breath.');
    scene.text('You turn to your teammates. "We play smarter than them."');
    scene.text('The three of you huddle up and talk about different strategies before stepping out onto the court.');
    scene.actions([
      { label: 'Start the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/game.jpg');
    scene.text('You get an early lead against another mixed team, but as the match continues, the score is soon tied up.');
    scene.text('Everything is on the last attack as your teammate grabs the ball and nods at you.');
    // TODO-QSP: dynamic text: As expected, your opponents double team your teammate and they pass the ball to ...
    scene.text(`As expected, your opponents double team your teammate and they pass the ball to you. "Finish it, ${((s as any).pcs_nickname || '')}!"`);
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('Even though your opponent is pressing tightly against your body, you manage to quickly move to one side. Just as she\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are doing a great job keeping the others busy so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave her behind and quickly move towards the basket. You slam the ball into the basket, securing your victory.');
      scene.text('Your teammates run towards you and the three of you start jumping around excitedly.');
      scene.text('"Easy win!" you yell out as you high-five a teammate.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('You move to the left, but their defender is too quick on her feet and blocks you before you can go right. She\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse her. However, she\'s not buying it and quickly slaps the ball out of your hands before passing it to her teammate, who dunks it and wins the game for them.');
      scene.text('You drop your head in disappointment as your opponents high-five each other. "They really thought they could beat us? What a joke!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and scores.');
      scene.text('The three of you start excitedly jumping around while the other team sulks in defeat.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the boy moves between you and your teammate, ready to intercept.');
      scene.text('Your teammate tries her best to get into position, but the boy is too strong and easily wrestles the ball from her grasp. He makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you tried your best," one teammate says, trying ...
      scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, you tried your best," one teammate says, trying to cheer you up while the other team loudly celebrate.`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell your amused opponent, who seems willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates run towards you and you all jump around excitedly while the other team argue with each other.');
      scene.text('"Why did you let her take that shot?! Are you fucking dumb?!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the girls grabs the rebound and passes it to her teammate, who takes a shot and scores, winning the game.');
      scene.text('You stand in disbelief about how you missed while your teammates try to cheer you up.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'sweat', 'add', 20);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself and lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, she takes the ball and easily scores. Your teammates stare in disbelief and the other team howls in laughter as you blush in embarrassment at the realization of what you just did.');
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Play normally', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pregame.jpg');
    scene.text('Hearing them comment on your team, you nonchalantly shrug your shoulders. "No big deal. Let them think they\'re better than us."');
    scene.text('"Shouldn\'t we-" one of your teammates starts asking, but you cut them off.');
    scene.text('"No, there\'s no need. As long as we play as we normally would, I don\'t see why we couldn\'t win," you reply.');
    scene.actions([
      { label: 'Start the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/game.jpg');
    scene.text('You get an early lead against another mixed team, but as the match continues, the score is soon tied up.');
    scene.text('Everything is on the last attack as your teammate grabs the ball and nods at you.');
    // TODO-QSP: dynamic text: As expected, your opponents double team your teammate and they pass the ball to ...
    scene.text(`As expected, your opponents double team your teammate and they pass the ball to you. "Finish it, ${((s as any).pcs_nickname || '')}!"`);
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('Even though your opponent is pressing tightly against your body, you manage to quickly move to one side. Just as she\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are doing a great job keeping the others busy so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave her behind and quickly move towards the basket. You slam the ball into the basket, securing your victory.');
      scene.text('Your teammates run towards you and the three of you start jumping around excitedly.');
      scene.text('"Easy win!" you yell out as you high-five a teammate.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside.jpg');
      scene.text('You move to the left, but their defender is too quick on her feet and blocks you before you can go right. She\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse her. However, she\'s not buying it and quickly slaps the ball out of your hands before passing it to her teammate, who dunks it and wins the game for them.');
      scene.text('You drop your head in disappointment as your opponents high-five each other. "They really thought they could beat us? What a joke!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and scores.');
      scene.text('The three of you start excitedly jumping around while the other team sulks in defeat.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the boy moves between you and your teammate, ready to intercept.');
      scene.text('Your teammate tries her best to get into position, but the boy is too strong and easily wrestles the ball from her grasp. He makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: "Don't worry <<$pcs_nickname>>, you tried your best," one teammate says, trying ...
      scene.text(`"Don't worry ${((s as any).pcs_nickname || '')}, you tried your best," one teammate says, trying to cheer you up while the other team loudly celebrate.`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell your amused opponent, who seems willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates run towards you and you all jump around excitedly while the other team argue with each other.');
      scene.text('"Why did you let her take that shot?! Are you fucking dumb?!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the girls grabs the rebound and passes it to her teammate, who takes a shot and scores, winning the game.');
      scene.text('You stand in disbelief about how you missed while your teammates try to cheer you up.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'sweat', 'add', 30);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself and lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, she takes the ball and easily scores. Your teammates stare in disbelief and the other team howls in laughter as you blush in embarrassment at the realization of what you just did.');
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterBoys(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'gschool_events', 'rand_boy_arg', 0, 1, 0, 0, 0, 0);
  qspCall(s, 'gschool_events', 'rand_boy_arg1', 0, 1, 0, 0, 0, 0);
  qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
  scene.text('Today\'s your lucky day. You end up on a team with two boys and you\'re playing against a mixed team with two girls.');
  scene.text('The boys confidently walk over to you, acting all cocky.');
  scene.text('"We\'ve got this!" the first one says.');
  // TODO-QSP: dynamic text: "Yeah, let us show you how it's done, <<$pcs_nickname>>," the other adds. "Just ...
  scene.text(`"Yeah, let us show you how it's done, ${((s as any).pcs_nickname || '')}," the other adds. "Just pass us the ball and we'll be fine."`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Give it your best', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('"We\'ll show them…" you say under your breath.');
    scene.text('You take a deep breath and turn to your teammates. "Okay I\'ll give my best, but I want you two to do your best as well."');
    scene.text('Your teammates nod in agreement and walk out onto the court with you.');
    scene.actions([
      { label: 'Start the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys1.jpg');
    scene.text('The physical difference between the teams means that you\'re crushing your opposition as the game comes close to the end.');
    // TODO-QSP: dynamic text: You're holding your distance from your teammates, letting them do all the work, ...
    scene.text(`You're holding your distance from your teammates, letting them do all the work, when one of them grabs the ball and yells at you. "Get out the way, ${((s as any).pcs_nickname || '')}! Let me finish this!"`);
    scene.text('Annoyed at them not letting you play, you shout at him to pass the ball.');
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside2.jpg');
      // TODO-QSP: dynamic text: Your teammate nonchalantly passes the ball. "Okay then. Let's see what you can d...
      scene.text(`Your teammate nonchalantly passes the ball. "Okay then. Let's see what you can do, ${((s as any).pcs_nickname || '')}."`);
      scene.text('Determined to show them up, you wait for your opponent to press tightly against your body before quickly jumping to one side. Just as she\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are rather easily keeping the others at bay so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave her behind. You quickly move towards the basket and slam the ball in, securing your victory.');
      // TODO-QSP: dynamic text: Your teammates sarcastically clap. "<i>Great</i> job, <<$pcs_nickname>>! <i>Real...
      scene.text(`Your teammates sarcastically clap. "<i>Great</i> job, ${((s as any).pcs_nickname || '')}! <i>Really</i> impressive stuff there…"`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside2.jpg');
      scene.text('You move to the left, but their defender is too quick on her feet and blocks you before you can go right. She\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse her. However, she\'s not buying it and quickly slaps the ball out of your hands before passing it to her teammate, who dunks it into your basket.');
      scene.text('You drop your head in disappointment as you hear your teammates express their frustration. "See? I told you she would fuck up!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and easily scores.');
      // TODO-QSP: dynamic text: You walk over to your teammates, who rather surprisingly praise you. "Great pass...
      scene.text(`You walk over to your teammates, who rather surprisingly praise you. "Great pass, ${((s as any).pcs_nickname || '')}! We didn't think you had it in you."`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the girl moves between you and your teammate, ready to intercept.');
      scene.text('Your teammates try to gain control of the ball, but they\'re too slow and the girl makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: Your teammates throw their hands in the air before glaring at you in disappointm...
      scene.text(`Your teammates throw their hands in the air before glaring at you in disappointment. "What the hell was that, ${((s as any).pcs_nickname || '')}?!"`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 40);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell both your amused opponent and your teammates, who seem willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates disregard your shot.');
      scene.text('"She got lucky, that\'s all," one tells the other.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'huge');
      qspCall(s, 'sweat', 'add', 40);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the girls grabs the rebound and passes it to her teammate, who takes a shot and scores.');
      scene.text('You stand there in disbelief as you hear your teammates start laughing. "That was one of the worst shots I\'ve ever seen!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'huge');
    qspCall(s, 'sweat', 'add', 40);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail1.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself. Everything goes black and you lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, she takes the ball and easily scores as your teammates stare at you in disbelief.');
    // TODO-QSP: dynamic text: "What the fuck are you doing, <<$pcs_nickname>>?! You're lucky we have such a go...
    scene.text(`"What the fuck are you doing, ${((s as any).pcs_nickname || '')}?! You're lucky we have such a good lead, otherwise we would have told you to fuck off!"`);
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Hold back', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('"We\'ll go about this in a different way…" you say under your breath.');
    scene.text('You turn to your teammates. "They can\'t match us in strength, so they\'ll try and play smarter than us."');
    scene.text('"You mean they can\'t match <i>us</i> in strength," one of them says mockingly. "Just stay out of our way and we\'ll be fine."');
    scene.text('They step out onto the court without another word.');
    scene.actions([
      { label: 'Start the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys1.jpg');
    scene.text('The physical difference between the teams means that you\'re crushing your opposition as the game comes close to the end.');
    // TODO-QSP: dynamic text: You're holding your distance from your teammates, letting them do all the work, ...
    scene.text(`You're holding your distance from your teammates, letting them do all the work, when one of them grabs the ball and yells at you. "Get out the way, ${((s as any).pcs_nickname || '')}! Let me finish this!"`);
    scene.text('Annoyed at them not letting you play, you shout at him to pass the ball.');
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside2.jpg');
      // TODO-QSP: dynamic text: Your teammate nonchalantly passes the ball. "Okay then. Let's see what you can d...
      scene.text(`Your teammate nonchalantly passes the ball. "Okay then. Let's see what you can do, ${((s as any).pcs_nickname || '')}."`);
      scene.text('Determined to show them up, you wait for your opponent to press tightly against your body before quickly jumping to one side. Just as she\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are rather easily keeping the others at bay so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave her behind. You quickly move towards the basket and slam the ball in, securing your victory.');
      // TODO-QSP: dynamic text: Your teammates sarcastically clap. "<i>Great</i> job, <<$pcs_nickname>>! <i>Real...
      scene.text(`Your teammates sarcastically clap. "<i>Great</i> job, ${((s as any).pcs_nickname || '')}! <i>Really</i> impressive stuff there…"`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside2.jpg');
      scene.text('You move to the left, but their defender is too quick on her feet and blocks you before you can go right. She\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse her. However, she\'s not buying it and quickly slaps the ball out of your hands before passing it to her teammate, who dunks it into your basket.');
      scene.text('You drop your head in disappointment as you hear your teammates express their frustration. "See? I told you she would fuck up!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and easily scores.');
      // TODO-QSP: dynamic text: You walk over to your teammates, who rather surprisingly praise you. "Great pass...
      scene.text(`You walk over to your teammates, who rather surprisingly praise you. "Great pass, ${((s as any).pcs_nickname || '')}! We didn't think you had it in you."`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.text('Their defender is playing exceptionally well and you can barely keep control over the ball when you suddenly hear someone yell your name and look to see that your teammate is positioned for a pass.');
      scene.text('However, as you release the ball, the girl moves between you and your teammate, ready to intercept.');
      scene.text('Your teammates try to gain control of the ball, but they\'re too slow and the girl makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: Your teammates throw their hands in the air before glaring at you in disappointm...
      scene.text(`Your teammates throw their hands in the air before glaring at you in disappointment. "What the hell was that, ${((s as any).pcs_nickname || '')}?!"`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'small');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell both your amused opponent and your teammates, who seem willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates disregard your shot.');
      scene.text('"She got lucky, that\'s all," one tells the other.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the girls grabs the rebound and passes it to her teammate, who takes a shot and scores.');
      scene.text('You stand there in disbelief as you hear your teammates start laughing. "That was one of the worst shots I\'ve ever seen!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'medium');
    qspCall(s, 'sweat', 'add', 20);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail1.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself. Everything goes black and you lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, she takes the ball and easily scores as your teammates stare at you in disbelief.');
    // TODO-QSP: dynamic text: "What the fuck are you doing, <<$pcs_nickname>>?! You're lucky we have such a go...
    scene.text(`"What the fuck are you doing, ${((s as any).pcs_nickname || '')}?! You're lucky we have such a good lead, otherwise we would have told you to fuck off!"`);
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    { label: 'Play normally', handler: (st: GameState) => {
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys.jpg');
    scene.text('Hearing them comment on your team, you nonchalantly shrug your shoulders. "No big deal. Let them think they\'re better than us."');
    scene.text('Your teammates just scoff. "Let them think? No, we <i>know</i> we\'re better than them!"');
    scene.text('"As long as we play as we normally would, I don\'t see why we couldn\'t win," you reply.');
    scene.text('One of your teammates sarcastically rolls his eyes. "Play as we normally would? How else would we play? Just stay out of our way and we\'ll be fine."');
    scene.actions([
      { label: 'Start the game', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/boys1.jpg');
    scene.text('The physical difference between the teams means that you\'re crushing your opposition as the game comes close to the end.');
    // TODO-QSP: dynamic text: You're holding your distance from your teammates, letting them do all the work, ...
    scene.text(`You're holding your distance from your teammates, letting them do all the work, when one of them grabs the ball and yells at you. "Get out the way, ${((s as any).pcs_nickname || '')}! Let me finish this!"`);
    scene.text('Annoyed at them not letting you play, you shout at him to pass the ball.');
    qspCall(s, 'willpower', 'skill_base', 'bkbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Pass', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Drive in', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside2.jpg');
      // TODO-QSP: dynamic text: Your teammate nonchalantly passes the ball. "Okay then. Let's see what you can d...
      scene.text(`Your teammate nonchalantly passes the ball. "Okay then. Let's see what you can do, ${((s as any).pcs_nickname || '')}."`);
      scene.text('Determined to show them up, you wait for your opponent to press tightly against your body before quickly jumping to one side. Just as she\'s about to stop you, you quickly dribble the ball between your legs and are free.');
      scene.text('Your teammates are rather easily keeping the others at bay so that they can\'t help out their teammate.');
      scene.text('Their defender can only stand in awe as you leave her behind. You quickly move towards the basket and slam the ball in, securing your victory.');
      // TODO-QSP: dynamic text: Your teammates sarcastically clap. "<i>Great</i> job, <<$pcs_nickname>>! <i>Real...
      scene.text(`Your teammates sarcastically clap. "<i>Great</i> job, ${((s as any).pcs_nickname || '')}! <i>Really</i> impressive stuff there…"`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/bbinside2.jpg');
      scene.text('You move to the left, but their defender is too quick on her feet and blocks you before you can go right. She\'s got you totally covered, but you have one last option left.');
      scene.text('You jump to the left, but push the ball to the right, trying to confuse her. However, she\'s not buying it and quickly slaps the ball out of your hands before passing it to her teammate, who dunks it into your basket.');
      scene.text('You drop your head in disappointment as you hear your teammates express their frustration. "See? I told you she would fuck up!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Pass', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('You\'re pressured, but are able to keep control of the ball. You can\'t move, but then you see one of your teammates lift their hand, calling for your attention.');
      scene.text('Seeing a gap where you can pass, you release the ball at the perfect time. It bounces into the hands of your teammate, who takes a shot and easily scores.');
      // TODO-QSP: dynamic text: You walk over to your teammates, who rather surprisingly praise you. "Great pass...
      scene.text(`You walk over to your teammates, who rather surprisingly praise you. "Great pass, ${((s as any).pcs_nickname || '')}! We didn't think you had it in you."`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/pass.jpg');
      scene.text('However, as you release the ball, the girl moves between you and your teammate, ready to intercept.');
      scene.text('Your teammates try to gain control of the ball, but they\'re too slow and the girl makes a perfect shot and dunks the ball into your basket.');
      // TODO-QSP: dynamic text: Your teammates throw their hands in the air before glaring at you in disappointm...
      scene.text(`Your teammates throw their hands in the air before glaring at you in disappointment. "What the hell was that, ${((s as any).pcs_nickname || '')}?!"`);
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
        { label: 'Shoot', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'mood', 'raise', 'medium');
    qspCall(s, 'exp_gain', 'bkbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'sweat', 'add', 30);
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'stat', '');
    if ((Math.floor(Math.random() * 101) + 0) + ((s as any).pcs_bkbll ?? 0) >= 100) {
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('"Watch this!" you confidently tell both your amused opponent and your teammates, who seem willing to watch you try. You take aim and shoot the ball towards the hoop.');
      scene.text('Everyone stops and follows the ball as it flies through the air before it goes through the hoop.');
      scene.text('Your teammates disregard your shot.');
      scene.text('"She got lucky, that\'s all," one tells the other.');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    } else {
      if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
      qspCall(s, 'mood', 'lower', 'large');
      qspCall(s, 'sweat', 'add', 30);
      scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/shoot.jpg');
      scene.text('You feel pretty confident and even smirk a little as you take a quick step back and attempt a shot from long distance. However, just as you\'re getting ready to shoot, you feel your opponent come just close enough to distract you.');
      scene.text('Your resultant shot is off and bounces off the backboard before one of the girls grabs the rebound and passes it to her teammate, who takes a shot and scores.');
      scene.text('You stand there in disbelief as you hear your teammates start laughing. "That was one of the worst shots I\'ve ever seen!"');
      scene.actions([
        { label: 'End the game', goto: ['bbgamein', 'end_game'] },
      ]);
    }
  } },
      ]);
    }
    scene.actions([
      { label: 'Get rid of the ball', handler: (st: GameState) => {
    if (!(s as any).grupvalue) (s as any).grupvalue = {}; (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (2);
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'sweat', 'add', 30);
    scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/fail1.jpg');
    scene.text('Seeing the defender quickly closing in on you, you start doubting yourself. Everything goes black and you lose your focus as you hear your teammates yelling voices blur into white noise.');
    scene.text('Panicking, you choose the worst option possible. Without looking, you shriek and randomly toss the ball. When you come to your senses, you see that you\'ve thrown the ball to your opponent.');
    scene.text('Snickering, she takes the ball and easily scores as your teammates stare at you in disbelief.');
    // TODO-QSP: dynamic text: "What the fuck are you doing, <<$pcs_nickname>>?! You're lucky we have such a go...
    scene.text(`"What the fuck are you doing, ${((s as any).pcs_nickname || '')}?! You're lucky we have such a good lead, otherwise we would have told you to fuck off!"`);
    scene.actions([
      { label: 'End the game', goto: ['bbgamein', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterEndGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/bbinside/teampick.jpg');
  scene.text('Once the game is over, you\'re all tired and sweaty, but everyone had a great time. You all go over to the bleachers and find a seat to rest.');
  scene.text('You talk and joke with one another about the game, the winners bragging on their win while the losers promise revenge. Once rested, everyone starts to get up and drift away, saying their goodbyes.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave', goto: ['gdksport', 'start'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'girls':
      enterGirls(s, scene);
      break;
    case 'mixed':
      enterMixed(s, scene);
      break;
    case 'boys':
      enterBoys(s, scene);
      break;
    case 'end_game':
      enterEndGame(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const bbgamein: LocationDef = {
  name: 'bbgamein',
  title: 'When you enter the gym, you notice some of the jocks standin',
  region: 'other',
  enter: enter,
};
