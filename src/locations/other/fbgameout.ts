import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterStart(s: GameState, scene: SceneBuilder): void {
  (s as any).fbpickupDay = ((s as any).daystart ?? 0);
  (s as any).minut = ((s as any).minut ?? 0) + 5;
  qspCall(s, 'stat', '');
  if (((s as any).grupTipe ?? 0) !== 2) {
    scene.img('images/locations/pavlovsk/school/pickupgames/football/start.jpg');
    scene.text('Walking next to the school yard, you notice that most of the jocks have gathered here and look like they\'re going to play some football. A few of them acknowledge you, but none of them wave you over.');
    scene.actions([
      { label: 'Sit and watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/watching.jpg');
    scene.text('You take a seat on the ground near the field and watch the jocks play football. Most of them are pretty competitive and are really pushing it to try and win. There are some occasional arguments about a foul, but for the most part they get along and have fun. You have to admit it looks pretty fun, and think that you should ask to join them one day.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Ask to join', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 3;
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (2);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/asking.jpg');
    scene.text('You walk over and greet them. "Hey guys, what are you doing?"');
    scene.text('Several of them turn towards you and Lazar replies. "We\'re about to divide up into teams and play. You can watch if you want."');
    scene.text('"Could I join instead?" you ask hopefully.');
    // TODO-QSP: dynamic text: They glance among each other before Lazar replies. "Maybe some other time <<$pcs...
    scene.text(`They glance among each other before Lazar replies. "Maybe some other time ${((s as any).pcs_nickname ?? 0)}…" They turn away from you and start picking teams.`);
    scene.actions([
      { label: 'Sit and watch them', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/watching.jpg');
    scene.text('You take a seat on the ground near the field and watch them play. Most of them are pretty competitive and are really pushing it to try and win. There are some occasional arguments about a foul, but for the most part they get along and have fun. You have to admit it looks pretty fun, and think that you should ask to join them again one day.');
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
    ]);
  } },
    ]);
  } else {
    scene.img('images/locations/pavlovsk/school/pickupgames/football/pickteam.jpg');
    scene.text('Walking through the school area, you end up by the football field and notice that most of the jocks have gathered here. Noticing you, they wave you over.');
    // TODO-QSP: dynamic text: "Over here <<$pcs_nickname>>! You arrived just in time, we were just picking tea...
    scene.text(`"Over here ${((s as any).pcs_nickname ?? 0)}! You arrived just in time, we were just picking teams." Lazar explains.`);
    scene.text('You quickly move over to the other girls while Lazar and Ivan continue discussing how to split up the teams.');
    scene.text('"I say we go for mixed teams. There\'s no other way it will work Ivan!" Lazar is trying his best to reason with Ivan.');
    if (((s as any).fedorKozlovQW ?? 0) >= 0) {
      scene.text('"Sure, sure…" Ivan says as he raises his hands. "Let\'s start already! I pick Fedor first!" and points to his friend.');
    } else {
      scene.text('"Sure, sure…" Ivan says as he raises his hands. "Let\'s start already! I pick Erast first!" and points to Erast.');
    }
    scene.actions([
      { label: 'Leave', goto: ['gschool_grounds', 'main'] },
      { label: 'Wait to get picked', goto: ['fbgameout', 'football'] },
    ]);
  }
  scene.build();
}

function enterFootball(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  qspCall(s, 'gdksport', 'jocks_acceptance');
  qspCall(s, 'exp_gain', 'ftbll', Math.floor(Math.random() * 3) + 0);
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/football/pickteam.jpg');
  // TODO-QSP: dynamic text: After a few of the others have been chosen, you finally hear your name being yel...
  scene.text(`After a few of the others have been chosen, you finally hear your name being yelled out. "${((s as any).pcs_nickname ?? 0)}! You'll be playing with the winning team today." Lazar confidently proclaims.`);
  scene.text('You quickly scuttle over to your team as they all high five you.');
  scene.text('It doesn\'t take long before all of the participants have been picked and the teams huddle together. "Vanya, you\'ll be in the goal…" Lazar begins calling out the different positions.');
  // TODO-QSP: dynamic text: Saving you for last, Lazar looks at you. "<<$pcs_nickname>>, you'll be playing u...
  scene.text(`Saving you for last, Lazar looks at you. "${((s as any).pcs_nickname ?? 0)}, you'll be playing up front as our star forward." he winks. "Don't worry about anything. Just be ready when the ball comes."`);
  scene.actions([
    { label: 'Nod', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/start.jpg');
    scene.text('You attentively nod as you break the huddle and position yourself on the field.');
    scene.text('"Playing with a girl as forward? You must\'ve lost it, Lazar!" Ivan yells loudly.');
    // TODO-QSP: dynamic text: "Pay no attention to him <<$pcs_nickname>>, he's just trying to get in your head...
    scene.text(`"Pay no attention to him ${((s as any).pcs_nickname ?? 0)}, he's just trying to get in your head." Lazar calmly tells you. "They have a girl in the goal, so don't worry about it."`);
    scene.actions([
      { label: 'Start the first half', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 30;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/game.jpg');
    scene.text('You didn\'t expect the game to be this serious. As soon as you start playing, everyone is doing their best, not backing down an inch.');
    scene.text('The boys really get into it, sometimes playing on the edge of being a bit too rough.');
    scene.text('Lazar sets up a perfect pass to Svyatoslav, who runs through the defense and easily scores the first goal behind a helpless Lariska. All of you run over to cheer together while Ivan is criticizing his team.');
    scene.text('The joyous occasion breaks a few minutes later when Christina equalizes the game. After the goal, Ivan comes over and starts making fun of Vanya as the latter pushes him and they get in a scuffle.');
    scene.text('"Break it up, you two! Head over to your sides so everyone can calm down!" Lazar barks as he\'s running over to break the two combatants up. The game resumes after everyone has calmed down a bit.');
    // TODO-QSP: dynamic text: All of a sudden, Lina breaks free and is heading against your goal. "Stop her <<...
    scene.text(`All of a sudden, Lina breaks free and is heading against your goal. "Stop her ${((s as any).pcs_nickname ?? 0)}!" you hear someone from your team yell.`);
    scene.actions([
      { label: 'Tackle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'exp_gain', 'ftbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'exp_gain', 'stren', 1);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
    qspCall(s, 'npc_relationship', 'modify', 'A18', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A19', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/tackle.jpg');
    scene.text('You nod steadfast and quickly start running after Lina. You are almost galloping as you catch up and can almost grab hold of her…');
    scene.text('Lina nervously turns around while trying to compose herself as she leads the ball towards the goal. By now you\'re right next to her, so you can hear her heavy breathing.');
    scene.text('Knowing she won\'t be able to stay away from you much longer, Lina pushes the ball a bit forward so she can shoot the ball towards the goal. "Stop her now!" you hear someone yell from behind. Just as Lina is about to shoot you do a slide tackle, but miss the ball and hit her on the leg instead.');
    // TODO-QSP: dynamic text: Lina yells out in pain and falls to the ground. You've managed to stop her and y...
    scene.text(`Lina yells out in pain and falls to the ground. You've managed to stop her and your team is praising you as you see Christina run over to you. "What the fuck are you doing ${((s as any).pcs_nickname ?? 0)}?! Are you stupid?" She pushes you and you start to argue.`);
    scene.text('"Okay, that\'s enough for now!" Svyatoslav barks, calming everyone down once again. You and Christina are pulled away from each other while Svyatoslav helps Lina.');
    scene.actions([
      { label: 'Time for a break', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/halftime.jpg');
    // TODO-QSP: dynamic text: Both teams take a seat, just outside of each other's hearing distance. "You read...
    scene.text(`Both teams take a seat, just outside of each other's hearing distance. "You ready ${((s as any).pcs_nickname ?? 0)}?" a sweaty Lazar asks.`);
    scene.text('You hesitate a little. "Ready for what?"');
    scene.text('"To decide the game of course." he says smiling. "They won\'t expect that I\'ll pass to you, so be ready when the time comes and decide the game for us!"');
    scene.text('You notice the fire burning in his eyes and give him a confident nod.');
    scene.actions([
      { label: 'Start the second half', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/game1.jpg');
    scene.text('The second half starts in a frantic pace as both teams try to outscore each other. There are chances for both teams, but the score still remains tied…');
    scene.text('All of a sudden, Lazar manages to get past Ivan and sends the ball towards you.');
    scene.text('The pass is really hard, but you somehow manage to get control of the ball and all that\'s between you and the goal is Christina, who is rapidly bearing down on you.');
    scene.text('Seeing Svyatoslav make a dash towards the goal, you have a choice. You can try and get past Christina and make a shot at the goal, or you can pass the ball to Svyatoslav. You need to decide quickly as Christina is closing in on you.');
    qspCall(s, 'willpower', 'skill_base', 'ftbll', 'self', 'medium');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'React [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'React', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'exp_gain', 'ftbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'stat', '');
    scene.text('You feel pressured to act. You must decide, otherwise the attack will go to waste…');
    scene.actions([
      { label: 'Pass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 101) + 0 + ((s as any).pcs_ftbll ?? 0) >= 70) {
      qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A3', (-1));
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'exp_gain', 'ftbll', 1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/pass.jpg');
      scene.text('You decide to pass the ball to Svyatoslav. You can clearly see him waving his hands, yelling that he\'s free.');
      scene.text('You size up the distance and hit the ball towards him. The ball floats through the air and lands perfectly at his feet. He just taps it in and you take the lead, firing the ball into the net.');
      scene.text('You all start celebrating and before you know it, the second half ends.');
      // TODO-QSP: dynamic text: "Great pass <<$pcs_nickname>>! I knew you could do it!" Lazar praises you. "Can'...
      scene.text(`"Great pass ${((s as any).pcs_nickname ?? 0)}! I knew you could do it!" Lazar praises you. "Can't wait until next time when you can show off your skills again!"`);
      scene.text('You stand and chat for a minute after the game, with everyone complimenting you for a job well done.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/passfail.jpg');
      scene.text('You decide to pass the ball to Svyatoslav. You can clearly see him waving his hands, yelling that he\'s free.');
      scene.text('You size up the distance and hit the ball towards him. However, you misjudge the distance and the ball goes well off.');
      scene.text('You see Svyatoslav shake his head disappointingly and not long after that, the game ends in a draw.');
      // TODO-QSP: dynamic text: "Too bad about the pass <<$pcs_nickname>>, we could've won…" Svyatoslav comments...
      scene.text(`"Too bad about the pass ${((s as any).pcs_nickname ?? 0)}, we could've won…" Svyatoslav comments.`);
      // TODO-QSP: dynamic text: "Give her a break Svyatoslav! She'll do better the next time, won't you <<$pcs_n...
      scene.text(`"Give her a break Svyatoslav! She'll do better the next time, won't you ${((s as any).pcs_nickname ?? 0)}?" Lazar is obviously disappointed, but tries his best to remain positive.`);
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    }
  } },
      { label: 'Shoot', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 101) + 0 + ((s as any).pcs_ftbll ?? 0) >= 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'exp_gain', 'ftbll', 1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/shoot.jpg');
      scene.text('You take aim and kick the ball. It gets the perfect arch and sails above Lariska\'s head into the net.');
      scene.text('You manage to raise your hands just in time before your team runs over to you, burying you furthest down in a pile as you all celebrate.');
      // TODO-QSP: dynamic text: Not long after the goal, the game ends. "See <<$pcs_nickname>>! I told you that ...
      scene.text(`Not long after the goal, the game ends. "See ${((s as any).pcs_nickname ?? 0)}! I told you that you would decide the game!" Lazar praises you.`);
      scene.text('You shine up. "Thank you! It wouldn\'t have been possible without you…" you praise Lazar back. You all chat for a while before you pick up your stuff and leave.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/shootfail.jpg');
      scene.text('You take aim and kick the ball. However, it wobbles over the goal as you\'ve not put enough force into your shot.');
      scene.text('You stand and look into the distance, disappointed that you let down the rest of the team.');
      // TODO-QSP: dynamic text: Not long after that, the game ends and the two teams walk over the sidelines. "T...
      scene.text(`Not long after that, the game ends and the two teams walk over the sidelines. "Too bad that you missed that shot ${((s as any).pcs_nickname ?? 0)}… Don't worry though, you'll get it next time." Lazar says, trying to cheer you up.`);
      scene.text('You nod, but you\'re not really in the mood to chat so you quickly pick up your stuff and leave.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    }
  } },
      { label: 'Dribble', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 101) + 0 + ((s as any).pcs_ftbll ?? 0) >= 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A165', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A13', 1);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'exp_gain', 'ftbll', 1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/dribble.jpg');
      scene.text('With Christina closing in you take a step to the right, making her follow you. As soon as she catches up, you quickly jump to the left and dribble past her.');
      scene.text('You\'ve completely fooled her and you can hear the others gasp in awe as you\'re free to take your shot at the goal. You make short work of it and smash the ball into the net, giving your team the lead.');
      scene.text('The game ends soon after and you are victorious. Everyone is talking about the amazing move you pulled off while Christina, fuming, quickly collects her stuff and leaves.');
      // TODO-QSP: dynamic text: "Great job <<$pcs_nickname>>! I knew you could do it!" Lazar praises you.
      scene.text(`"Great job ${((s as any).pcs_nickname ?? 0)}! I knew you could do it!" Lazar praises you.`);
      scene.text('"Thanks a lot I had lots of fun!" you reply. You and your teammates stand and chat for a while before you all pack up your stuff and leave the field.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/dribblefail.jpg');
      scene.text('With Christina closing in you take a step to the right, making her follow you. As soon as she catches up, you quickly jump to the left and dribble past her.');
      scene.text('However, Christina, already aware of your plan, quickly tackles you and takes the ball as you get tangled up.');
      scene.text('She smirks as she passes you. "You really thought you could fool me with that silly move?"');
      scene.text('Not long after that, the game ends in a draw. As you approach the rest of your team you say "Sorry guys, I thought I could get past her."');
      scene.text('The others nod, acting as if they understand, but deep down they\'re disappointed that you couldn\'t win the game. Not wanting to say anything else, you pick up your stuff in silence, say your goodbyes and leave.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hesitate', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A149', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A165', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A13', (-1));
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'exp_gain', 'ftbll', Math.floor(Math.random() * 2) + 0);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/fail.jpg');
    scene.text('There are too many options and you hesitate, not sure what to do. In a matter of seconds, you\'re swarmed by the other team. They easily steal the ball from you and go on the offensive.');
    // TODO-QSP: dynamic text: Two passes later, you can hear the ball hit the net and you see the other team c...
    scene.text(`Two passes later, you can hear the ball hit the net and you see the other team celebrating. "Thanks ${((s as any).pcs_nickname ?? 0)}! I dedicate this win to you!" Ivan says teasingly.`);
    scene.text('The game ends shortly after and your team looks dejected as you feel ashamed at messing up.');
    // TODO-QSP: dynamic text: The others ignore you when you go back to the sidelines, but as you're about to ...
    scene.text(`The others ignore you when you go back to the sidelines, but as you're about to leave Lazar approaches you. "Don't take it too hard ${((s as any).pcs_nickname ?? 0)}. We're all disappointed, but we'll get our revenge next time."`);
    scene.actions([
      { label: 'End the game', goto: ['fbgameout', 'end_game'] },
    ]);
  } },
    ]);
  } },
    ]);
  } },
    ]);
  } },
      { label: 'Don\'t tackle', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/notackle.jpg');
    // TODO-QSP: dynamic text: You hesitate a little as you hear someone yell out "Run after her <<$pcs_nicknam...
    scene.text(`You hesitate a little as you hear someone yell out "Run after her ${((s as any).pcs_nickname ?? 0)}! You're the only one who can stop her!"`);
    scene.text('Running as fast as you can, you start catching up to her. You can almost reach out to her, but you\'re still unsure on how to stop her.');
    scene.text('All of a sudden, you hear someone yell from behind. "Stop her! She\'s winding up a shot!"');
    if (Math.floor(Math.random() * 2) + 0 === 1) {
      scene.text('You finally decide what to do, Using the last of your strength, you run up to her and give her a slight bump on the shoulder just as she\'s about to take the shot.');
      scene.text('Lina manages to take a shot, but your interference means that it\'s way off and misses.');
      scene.text('You hear Lina yell out in frustration as your teammates congratulate you for a job well done.');
    } else {
      scene.img('images/locations/pavlovsk/school/pickupgames/football/notackle.jpg');
      scene.text('You finally decide what to do. Using the last of your strength, you run up to her and give her a slight bump on the shoulder just as she\'s about to take the shot.');
      scene.text('However, Lina barely even feels the impact and hits the ball straight into the goal. She runs away happy to her team while your team looks on at you disappointed.');
    }
    scene.actions([
      { label: 'Time for a break', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 10;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/halftime.jpg');
    // TODO-QSP: dynamic text: Both teams take a seat on each side, just outside each other's hearing distance....
    scene.text(`Both teams take a seat on each side, just outside each other's hearing distance. "You ready ${((s as any).pcs_nickname ?? 0)}?" a sweaty Lazar asks you.`);
    scene.text('You hesitate a little. "Ready for what?"');
    scene.text('"To decide the game of course." he says smiling. "They won\'t expect that I\'ll pass it over to you, so be ready when the time comes and decide the game for us!"');
    scene.text('You notice the fire burning in his eyes and give him a confident nod.');
    scene.actions([
      { label: 'Start the second half', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 25;
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/game1.jpg');
    scene.text('The second half starts in a frantic pace as both teams try to outscore each other. There are chances for both teams, but the score still remains tied.');
    scene.text('All of a sudden, Lazar manages to get past Ivan and sends the ball towards you.');
    scene.text('The pass is really hard, but you somehow manage to get control of the ball and all that\'s between you and the goal is Christina, who is rapidly bearing down on you.');
    scene.text('Seeing Svyatoslav make a dash towards the goal, you have a choice. You can try and get past Christina and make a shot at the goal, or you can pass the ball to Svyatoslav. You need to decide quickly as Christina is closing in on you.');
    qspCall(s, 'willpower', 'skill_base', 'ftbll', 'self');
    if (((s as any).pcs_willpwr ?? 0) < ((s as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'React [+$func(\'willpower\', \'get_willcost_string\'...]', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower ?? ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'React', handler: (st: GameState) => {
    qspCall(s, 'willpower', 'pay', 'self');
    qspCall(s, 'exp_gain', 'ftbll', Math.floor(Math.random() * 3) + 0);
    qspCall(s, 'stat', '');
    scene.text('You feel pressured to act. You must decide, otherwise the attack will go to waste…');
    scene.actions([
      { label: 'Pass', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 101) + 0 + ((s as any).pcs_ftbll ?? 0) >= 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'exp_gain', 'ftbll', 1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/pass.jpg');
      scene.text('You decide to pass the ball to Svyatoslav. You can clearly see him waving his hands, yelling that he\'s free.');
      scene.text('You size up the distance and hit the ball towards him. The ball floats through the air and lands perfectly at his feet. He just taps it in and you take the lead. firing the ball into the net.');
      scene.text('You all start celebrating and before you know it, the second half ends.');
      // TODO-QSP: dynamic text: "Great pass <<$pcs_nickname>>! I knew you could do it!" Lazar praises you. "Can'...
      scene.text(`"Great pass ${((s as any).pcs_nickname ?? 0)}! I knew you could do it!" Lazar praises you. "Can't wait until next time when you can show off your skills again!"`);
      scene.text('You stand and chat for a minute after the game, with everyone complimenting you for a job well done.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/passfail.jpg');
      scene.text('You decide to pass the ball to Svyatoslav. You can clearly see him waving his hands, yelling that he\'s free.');
      scene.text('You size up the distance and hit the ball towards him, but you misjudge the distance and the ball goes well off.');
      scene.text('You see Svyatoslav shake his head disappointingly and not long after, the game ends in a draw.');
      // TODO-QSP: dynamic text: "Too bad about the pass <<$pcs_nickname>>, we could've won." Svyatoslav comments...
      scene.text(`"Too bad about the pass ${((s as any).pcs_nickname ?? 0)}, we could've won." Svyatoslav comments.`);
      // TODO-QSP: dynamic text: "Give her a break Svyatoslav! She'll do better the next time, won't you <<$pcs_n...
      scene.text(`"Give her a break Svyatoslav! She'll do better the next time, won't you ${((s as any).pcs_nickname ?? 0)}?" Lazar is obviously disappointed, but tries his best to remain positive.`);
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    }
  } },
      { label: 'Shoot', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 101) + 0 + ((s as any).pcs_ftbll ?? 0) >= 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'exp_gain', 'ftbll', 1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/shoot.jpg');
      scene.text('You take aim and kick the ball. It gets the perfect arch and sails above Lariska\'s head into the net.');
      scene.text('You manage to raise your hands just in time before your team runs over to you, burying you furthest down in a pile as you all celebrate.');
      // TODO-QSP: dynamic text: Not long after, the game ends. "See <<$pcs_nickname>>! I told you that you would...
      scene.text(`Not long after, the game ends. "See ${((s as any).pcs_nickname ?? 0)}! I told you that you would decide the game!" Lazar praises you.`);
      scene.text('You shine up. "Thank you! It wouldn\'t have been possible without you…" you praise Lazar back. You all chat for a while before you pack up your stuff and leave.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/shootfail.jpg');
      scene.text('You take aim and kick the ball. However, it wobbles over the goal as you\'ve not put enough force into the shot.');
      scene.text('You stand and look into the distance, disappointed that you let down the rest of the team.');
      // TODO-QSP: dynamic text: Not long after, the game ends and the two teams walk over the sidelines. "Too ba...
      scene.text(`Not long after, the game ends and the two teams walk over the sidelines. "Too bad that you missed that shot ${((s as any).pcs_nickname ?? 0)}… Don't worry though, you'll get it the next time." Lazar says, trying to cheer you up.`);
      scene.text('You nod, but you\'re not really in the mood to chat, so you quickly pick up your stuff and leave.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    }
  } },
      { label: 'Dribble', handler: (st: GameState) => {
    qspCall(s, 'stat', '');
    if (Math.floor(Math.random() * 101) + 0 + ((s as any).pcs_ftbll ?? 0) >= 100) {
      qspCall(s, 'npc_relationship', 'modify', 'A8', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A149', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A165', 1);
      qspCall(s, 'npc_relationship', 'modify', 'A13', 1);
      qspCall(s, 'mood', 'raise', 'small');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'exp_gain', 'ftbll', 1);
      (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) + (1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/dribble.jpg');
      scene.text('With Christina closing in you take a step to the right, making her follow you. As soon as she catches up, you quickly jump to the left and dribble past her…');
      scene.text('You\'ve completely fooled her and you can hear the others gasp in awe as you\'re free to take your shot at the goal. You make short work of it and smash the ball into the net, giving your team the lead.');
      scene.text('It doesn\'t take long after that the game ends and you are victorious. Everyone is talking about the amazing move you pulled off while Christina, fuming, quickly collects her stuff and leaves.');
      // TODO-QSP: dynamic text: "Great job <<$pcs_nickname>>! I knew you could do it!" Lazar praises you.
      scene.text(`"Great job ${((s as any).pcs_nickname ?? 0)}! I knew you could do it!" Lazar praises you.`);
      scene.text('"Thanks a lot, I had lots of fun!" you reply. You and your teammates stand and chat for a while before you all pack up your stuff and leave the field.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    } else {
      qspCall(s, 'mood', 'lower', 'medium');
      qspCall(s, 'sweat', 'add', 20);
      qspCall(s, 'exp_gain', 'vital', 1);
      qspCall(s, 'stat', '');
      scene.img('images/locations/pavlovsk/school/pickupgames/football/dribblefail.jpg');
      scene.text('With Christina closing in you take a step to the right, making her follow you. As soon as she catches up, you quickly jump to the left and dribble past her…');
      scene.text('However, Christina, already aware of your plan, quickly tackles you and takes the ball as you get tangled up.');
      scene.text('She smirks as she passes. "You really thought you could fool me with that silly move?"');
      scene.text('Not long after, the game ends in a draw. As you approach the rest of your team you say "Sorry guys, I thought I could get pass her."');
      scene.text('The others nod, acting as if they understand, but deep down they\'re disappointed that you couldn\'t win the game. Not wanting to say anything else, you pick up your stuff in silence, say your goodbyes and leave.');
      scene.actions([
        { label: 'End the game', goto: ['fbgameout', 'end_game'] },
      ]);
    }
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Hesitate', handler: (st: GameState) => {
    qspCall(s, 'npc_relationship', 'modify', 'A8', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A149', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A165', (-1));
    qspCall(s, 'npc_relationship', 'modify', 'A13', (-1));
    qspCall(s, 'mood', 'lower', 'large');
    qspCall(s, 'sweat', 'add', 20);
    qspCall(s, 'exp_gain', 'ftbll', Math.floor(Math.random() * 2) + 0);
    (s as any).grupvalue[2] = ((s as any).grupvalue[2] ?? 0) - (1);
    qspCall(s, 'stat', '');
    scene.img('images/locations/pavlovsk/school/pickupgames/football/fail.jpg');
    scene.text('There are too many options and you hesitate, not sure what to do. In a matter of seconds, you\'re swarmed by the other team. They easily steal the ball and go on the offensive.');
    // TODO-QSP: dynamic text: Two passes later, you can hear the ball hit the net and you see the other team c...
    scene.text(`Two passes later, you can hear the ball hit the net and you see the other team celebrating. "Thanks ${((s as any).pcs_nickname ?? 0)}! I dedicate this win to you!" Ivan says teasingly.`);
    scene.text('The game ends shortly after and your team looks dejected as you feel ashamed at messing up.');
    // TODO-QSP: dynamic text: The others ignore you when you return to the sidelines, but as you're about to l...
    scene.text(`The others ignore you when you return to the sidelines, but as you're about to leave Lazar approaches you. "Don't take it too hard ${((s as any).pcs_nickname ?? 0)}. We're all disappointed, but we'll get our revenge next time."`);
    scene.actions([
      { label: 'End the game', goto: ['fbgameout', 'end_game'] },
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

function enterEndGame(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 20;
  qspCall(s, 'stat', '');
  scene.img('images/locations/pavlovsk/school/pickupgames/football/aftergame.jpg');
  scene.text('Once the game is over, you\'re all tired and sweaty, but everyone had a great time. You all go over to the bleachers and find a seat to rest. You talk and joke with one another about the game, the winners bragging while the losers promise revenge. Once rested, everyone starts getting up and saying their goodbyes before going their separate ways.');
  scene.actions([
    { label: 'Leave', goto: ['gschool_grounds', 'main'] },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'start':
      enterStart(s, scene);
      break;
    case 'football':
      enterFootball(s, scene);
      break;
    case 'end_game':
      enterEndGame(s, scene);
      break;
    default:
      enterStart(s, scene);
      break;
  }
}

export const fbgameout: LocationDef = {
  name: 'fbgameout',
  title: 'Walking next to the school yard, you notice that most of the',
  region: 'other',
  description: ['Walking next to the school yard, you notice that most of the jocks have gathered here and look like they\'re going to play some football. A few of them acknowledge you, but none of them wave you over.'],
  enter: enter,
};
