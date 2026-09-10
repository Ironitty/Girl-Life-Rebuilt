import { qspCall } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterGoingHomeTogether(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You walk across the school courtyard to meet up with Artem, who gives you a friendly nod as you approach. "You ready to go?"');
  scene.text('You smile. "Let\'s go study!"');
  // TODO-QSP: dynamic text: Just as you're about to leave, Katja approaches you. "I thought we were going to...
  scene.text(`Just as you're about to leave, Katja approaches you. "I thought we were going to do homework together today, ${((s as any).pcs_nickname ?? 0)}?" she asks.`);
  if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
    scene.text('Artem turns to you. "Oh…" he says before he looks at Katja, then back to you. "It\'s okay, you guys can go study. I\'ll see you later?"');
    scene.text('You can tell he\'s nervous since he\'s avoiding eye contact with Katja, who winks at you to signal that she\'s ready to put your plan into motion.');
  } else {
    // TODO-QSP: dynamic text: Artem turns to you. "Is that true, <<$pcs_nickname>>?"
    scene.text(`Artem turns to you. "Is that true, ${((s as any).pcs_nickname ?? 0)}?"`);
    scene.text('He\'s avoiding eye contact with Katja, who winks at you to signal that she\'s ready to put your plan into motion.');
  }
  scene.actions([
    { label: 'Continue with the plan', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'love');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You feign surprise. "I completely forgot about that! Why don\'t we all just do our homework together?"');
    scene.text('"Okay, we can do that," Katja replies a little too quickly, leaving you fearing that Artem will suspect that he\'s being set up, but he just looks confused.');
    scene.text('"Come on, Artem," you say encouragingly. "Katja is really good at the English pronunciation that you\'re struggling with. I\'m sure studying with her will be a big help!"');
    if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('He still hesitates and you\'re afraid that you\'ve came on too thick, but after a moment\'s hesitation, he relents. "Okay, let\'s study together, but I don\'t have enough table space in my room."');
    } else {
      scene.text('He still hesitates and you\'re afraid that you\'ve came on too thick, but after a moment\'s hesitation, he smiles. "Sure, that sounds good, but I don\'t have enough table space in my room."');
    }
    scene.text('"That\'s no problem. My place will be empty for the next few hours, so we can work in my kitchen," Katja smiles.');
    if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('You walk to the Meynold house mostly in silence. Artem is clearly still not very confident around women he doesn\'t know very well.');
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        scene.text('Katja has also gone quiet, despite her earlier enthusiasm. You think the fact that she\'s about to have sex with a boy for the first time is suddenly getting to her.');
      } else {
        scene.text('Katja tries to get him to talk, but it doesn\'t really help.');
      }
    } else {
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        scene.text('You walk to the Meynold house with Artem trying to make casual conversation with Katja, but she only responds in short sentences.');
        scene.text('You think the fact that she\'s about to have sex with a boy for the first time is suddenly getting to her.');
      } else {
        scene.text('You walk to the Meynold house with Artem and Katja quickly falling into conversation.');
      }
      // TODO-QSP: 'You walk to the Meynold house with Artem clearly trying to '+iif(artemQW['threesome'] = 1, 'flirt w...
      if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        scene.text('Katja doesn\'t really respond to him. You think the fact that she\'s about to have sex with a boy for the first time is suddenly getting to her.');
      } else {
        scene.text('Katja responds in kind, flirting overtly with him. You\'re almost afraid that she\'ll drag him into the bushes to jump him immediately.');
        scene.text('Katja appreciates the attention and responds well to his advances.');
      }
    }
    scene.actions([
      { label: 'Start doing your homework', goto: ['artem_katja_sex', 'first_time_start'] },
    ]);
  } },
    { label: 'Go with Katja', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m sorry, but I did promise to do homework with her today. We can hang out another time. I might come over when I\'ve finished our homework," you tell Artem.');
    // TODO-QSP: dynamic text: He looks a little down. "Well if you promised her, then you should keep it. See ...
    scene.text(`He looks a little down. "Well if you promised her, then you should keep it. See you later, ${((s as any).pcs_nickname ?? 0)}," he says and starts walking home alone.`);
    scene.text('"Why did you send him away?" Katja asks. "I thought the plan was to seduce him into a threesome?"');
    scene.text('"Not today. Maybe next time," you reply. "Let\'s go to your house."');
    scene.actions([
      { label: 'Go do your homework with Katja', goto: ['katjaEV', '1'] },
    ]);
  } },
    { label: 'Go with Artem', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"I\'m pretty sure you remember wrong. I told you I would be hanging out with my boyfriend today. We\'ll just have to do homework at some other time," you tell Katja.');
    scene.text('Katja looks stunned by your reply, but then quickly gets her act together. "Well then. See you another time," she says with a clear hint of disappointment before she leaves you and Artem alone.');
    scene.text('"What was that about?" Artem asks, a little concerned.');
    scene.text('"It\'s nothing. She\'ll be fine tomorrow," you reassure him. "Let\'s go."');
    scene.actions([
      { label: 'Go to Artem\'s home', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
  }, goto: ['artemhome', 'artemroom'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimeStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_1.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).lern = ((s as any).lern ?? 0) + (Math.floor(Math.random() * 3) + 2);
  qspCall(s, 'exp_gain', 'intel', Math.floor(Math.random() * 2) + 0);
  qspCall(s, 'exp_gain', 'prcptn', Math.floor(Math.random() * 2) + 0);
  if (((s as any).lernHome ?? 0) >= 1) {
    qspCall(s, 'grades', 'homework', 'school', 'yes', 1, 3, 80);
  }
  qspCall(s, 'stat', '');
  scene.text('When you arrive at the Meynold house, Katja lets you in and shows you to the kitchen.');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('You all start working on your homework, but Katja and Artem are clearly uncomfortable with the situation, so it\'s mostly just you that drives the conversation.');
      scene.text('Since both Katja and Artem like to study, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
    } else {
      scene.text('You start working on your homework, but Katja is clearly uncomfortable with the situation. Artem, on the other hand, treats Katja like she was one of the nerd girls.');
      scene.text('While that makes it more awkward for Katja, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
      scene.text('You start working on your homework, but Katja is clearly uncomfortable with the situation. Artem, on the other hand, acts likes doing homework with girls is something he does every day. It\'s clear that he\'s trying to flirt with Katja while you study.');
      scene.text('While that makes it more awkward for Katja, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('You start working on your homework, but Artem is clearly uncomfortable with the situation. Even when Katja tries to be normal about the situation, he barely says anything and keeps looking down at his homework when he answers her questions.');
      scene.text('Since Artem really likes to study, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
    } else {
      scene.text('You start working on your homework and Katja and Artem quickly get into the flow of things. The studying session is soon no different than when the nerds study together at the library,');
      scene.text('Since they\'re both excellent students, you get a lot of good work done.');
      scene.text('You start working on your homework. Artem acts likes doing homework with girls is something he does every day. He overtly flirts with Katja, who returns in kind.');
      scene.text('This does create some sexual tension, but it subsides as you get further into the details of the homework. Since they\'re both excellent students, you get a lot of good work done despite the situation.');
    }
  }
  scene.text('As you\'re close to finishing up, Katja gives you a look which is clearly her asking for confirmation to start seducing Artem.');
  scene.actions([
    { label: 'Start the seduction', goto: ['artem_katja_sex', 'first_time_seduction'] },
    { label: 'Call it off', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 5;
    qspCall(s, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_1.jpg');
    scene.text('You shake your head at Katja, who looks frustrated, but gets back to her homework without much enthusiasm.');
    scene.text('After a few minutes, you finish up and you and Artem pack up your stuff and head out.');
    scene.text('Before you leave, Katja drags you to the side. "I thought we were going to do more?" she whispers.\'');
    scene.text('"Not today. Maybe anther time," you reply and quickly leave a quite angry Katja behind.');
    scene.actions([
      { label: 'Go to Artem\'s home', goto: ['artem_katja_sex', 'first_time_aborted_walking_home'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimeAbortedWalkingHome(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/going_home_with_artem.jpg');
  if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
    scene.text('The two of you walk home, Artem seemingly oblivious to what was going on as he talks about the homework. You think to yourself that maybe that\'s for the best.');
  } else {
    if (((s as any).artemQW ?? 0)?.['threesome'] === 1) {
      scene.text('The two of you walk home as Artem talks about studying before he turns to you. "Do you think Katja might be interested?"');
      scene.text('You know exactly what he\'s thinking, but you decide to play dumb. "Interested in what?"');
      scene.text('He suddenly blushes. "You know… The three of us… Spending time together…"');
      scene.text('You can\'t help but snicker a little. "I\'ll think about it and talk to her about it."');
      scene.text('He just nods and the two of you make casual conversation the rest of the way to the building.');
    } else {
      scene.text('The two of you walk home, Artem seemingly oblivious to what was going on as he talks about the homework. To your surprise, he suddenly mentions how much he enjoyed studying with Katja and suggests that the three of you could do it again some time.');
    }
    if (((s as any).artemQW ?? 0)?.['threesome'] === 1) {
      scene.text('The two of you walk home as Artem talks about studying before he turns to you. "You think Katja might be interested?" he asks abruptly.');
      scene.text('You know exactly what he\'s thinking, but you decide to play dumb. "Interested in what?"');
      scene.text('He smiles, knowing what you\'re doing. "You know… A threesome. I think it would be fun and she looks like she could use a little nerd dick in her," he says with a laugh.');
      scene.text('You playfully slap his shoulder. "I\'ll think about it and talk to her about it."');
      scene.text('He just nods and the two of you make casual conversation the rest of the way to the building.');
    } else {
      scene.text('The two of you walk home, Artem seemingly oblivious to what was going on as he talks about the homework. To your surprise, he suddenly mentions how much he enjoyed studying with Katja, as well as how cute she was looking today, and suggests the three of you could do it again some time.');
    }
  }
  scene.text('The two of you finally get back to your apartment building, where Artem bids you farewell before heading into his apartment.');
  scene.actions([
    { label: 'Alone', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enterFirstTimeSeduction(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_2.jpg');
  if (((s as any).pantyworntype ?? 0) !== 'none') {
    scene.text('You nod at Katja and move behind Artem as she drops her pen on the floor, pretending it was an accident.');
    scene.text('"Oops! I better pick that up," she says before crawling under the table. WHile Artem is distracted by Katja, you quickly remove your panties.');
  } else {
    scene.text('You nod at Katja and she drops her pen on the floor, pretending it was an accident.');
    scene.text('"Oops! I better pick that up," she says before crawling under the table.');
  }
  scene.text('Katja pretends she can\'t find her pen and crawls between Artem\'s legs. He of course looks down to see what\'s going on.');
  scene.text('Katja times it perfectly so when she looks up at him, his eyes fall on her perky breasts, which she deliberately pushes forward so that her low cut shirt exposes a lot of cleavage.');
  // TODO-QSP: 'Artem can''t take his eyes off her breasts, '+iif(artemQW['confidence'] < 10, 'and turns completely...
  scene.text('A beam of pride appears on Katja\'s face. "Like what you see?" she asks seductively while pushing her breasts up further using her hands.');
  scene.text('You sit on the table and mirror Katja\'s move.');
  scene.actions([
    { label: 'See Artem\'s response', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'foreplay', 3);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_3.jpg');
    if (((s as any).artemQW ?? 0)?.['threesome'] === 0) {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
        scene.text('Artem looks completely out of it and has no idea how to react. He looks like he\'s on the verge of panicking, so you to try to calm him down.');
        scene.text('"It\'s okay, Artem! Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
        // TODO-QSP: 'He seems to calm down a little and '+iif( katjaQW['QWstage'] = 5, ' you tell Katja to unzip his pan...
      } else {
        scene.text('Artem doesn\'t seem to know how to react to the situation, so he looks at you for an explanation.');
        scene.text('"It\'s okay, Artem! Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
        // TODO-QSP: 'He stammers "Yes. I do like what I see…" '+iif( katjaQW['QWstage'] = 5, 'You notice Katja''s hesita...
        if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
          // TODO-QSP: dynamic text: Artem looks at you to see your reaction, and when you smile back seductively, he...
          scene.text(`Artem looks at you to see your reaction, and when you smile back seductively, he grins. "I do like what I see, but are you sure about this, ${((s as any).pcs_nickname ?? 0)}?"`);
          scene.text('"Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
          // TODO-QSP: iif( katjaQW['QWstage'] = 5, 'You notice Katja''s hesitation. "Why don''t you get his cock out and p...
        } else {
          // TODO-QSP: dynamic text: Artem briefly looks at you to see your reaction, and when you just smiles back s...
          scene.text(`Artem briefly looks at you to see your reaction, and when you just smiles back seductively, he grins. "I very much like what I see. This is a great view and I'm sure that things can only get better, but I'm a little surprised that ${((s as any).pcs_nickname ?? 0)} wants to share me with you."`);
          scene.text('"Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. How could her deny her that?" you answer.');
          // TODO-QSP: '"Why don''t you get my cock out and play with it?" Artem continues. '+iif( katjaQW['QWstage'] = 5, ...
        }
        if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
          scene.text('Artem looks very embarrassed and doesn\'t seem to have any idea how to react, so you decide to try to calm him down.');
          scene.text('"It\'s okay, Artem! Katja is my friend and as you know I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
          // TODO-QSP: 'He seems to calm down a little and '+iif( katjaQW['QWstage'] = 5, ' you turn to Katja. "Why don''t ...
        } else {
          scene.text('Artem is still not confident enough to take control of the situation, so he looks at you to see what to do.');
          scene.text('"It\'s okay, Artem. Katja is my friend and you know I like to share with my friends. I told her how amazing you are in bed, and she wanted to also experience that. So just relax and enjoy the experience."');
          // TODO-QSP: 'He looks back down at Katja. "Yes. I do like what I see." '+iif( katjaQW['QWstage'] = 5, 'You notic...
          if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
            // TODO-QSP: dynamic text: Artem looks at you to see your reaction, and when you smile back seductively, he...
            scene.text(`Artem looks at you to see your reaction, and when you smile back seductively, he grins. "I do like what I see. Are you are you going to share all your friends with me, ${((s as any).pcs_nickname ?? 0)}?"`);
            scene.text('"I like to share," you shrug. "I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
            // TODO-QSP: iif( katjaQW['QWstage'] = 5, 'You notice Katja''s hesitation. "Why don''t you get his cock out and p...
          } else {
            // TODO-QSP: dynamic text: Artem briefly looks at you to see your reaction, and when you smile back seducti...
            scene.text(`Artem briefly looks at you to see your reaction, and when you smile back seductively, he grins. "I very much like what I see. This is a great view and I'm sure that things can only get better. I look forward to you sharing me with the rest of your friends, ${((s as any).pcs_nickname ?? 0)}."`);
            scene.text('"I like to share," you shrug. "I told her how amazing you are in bed, and she wanted to experience that. How could her deny her that?" you reply.');
            // TODO-QSP: '"Why don''t you get my cock out and play with it, Katja?" he continues. '+iif( katjaQW['QWstage'] =...
          }
        }
        scene.text('While Katja opens his pants and slowly pulls out his cock, you sit up on the table with your legs spread so that your naked pussy is in from of Artem\'s face.');
        scene.actions([
          { label: 'Licking', handler: (st: GameState) => {
    (s as any).minut = ((s as any).minut ?? 0) + 2;
    qspCall(s, 'npcStat', 'A2');
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_4.jpg');
    if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
      scene.text('Katja pulls Artem\'s semi-hard cock out of his pants and takes it in her hands. "Wow, so this is what a real cock feels like. So warm, but somewhat soft. Oh!" Katja suddenly stops what she\'s saying as Artem\'s cock becomes rock hard in her hands.');
      // TODO-QSP: 'She then starts to stroke it a little, clearly showing her lack of experience. "Why don''t you try ...
      scene.text('"Okay…" Katja responds and sticks out her tongue to start licking Artem\'s shaft. "It doesn\'t taste bad," she says. "Time to see if I can take everything…"');
      if (2*((s as any).npc_throat ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
        (s as any).npc_throat['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (2);
        // TODO-QSP: dynamic text: Katja tries to get Artem's <<$dick_girth>> <<dick>> cm long dick into her mouth,...
        scene.text(`Katja tries to get Artem's ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)} cm long dick into her mouth, but can't manage to get much more than the head inside before she starts sucking on it.`);
      } else {
        (s as any).npc_throat['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
        // TODO-QSP: dynamic text: Katja tries to get all of Artem's <<$dick_girth>> <<dick>> cm long dick into her...
        scene.text(`Katja tries to get all of Artem's ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)} cm long dick into her mouth, but is clearly having problems with her gag reflex when it hits her throat. However, she quickly gets into a rhythm that matches what she can take, only occasionally having to stop when she tries to take too much.`);
        if (((s as any).artemQW ?? 0)?.['confidence'] >= 15) {
          (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 5);
          scene.text('"You really haven\'t sucked a cock before? That\'s hard to believe with how good you\'re doing," Artem says encouragingly.');
          scene.text('"Thanks. I\'ve practiced a lot with plastic ones," Katja smiles back.');
        }
        // TODO-QSP: dynamic text: Katja takes all of Artem's <<$dick_girth>> <<dick>> cm long dick into her mouth ...
        scene.text(`Katja takes all of Artem's ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)} cm long dick into her mouth and down her throat without gagging. She then quickly gets into a rhythm where she moves from almost only sucking the tip to getting all the way to the base of his cock.`);
        if (((s as any).artemQW ?? 0)?.['confidence'] >= 15) {
          (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 10);
          scene.text('"Wow. You really haven\'t sucked a cock before?" Artem moans. "I don\'t believe that. You\'re sucking like a pro!"');
          scene.text('"Thanks. I\'ve practiced a lot with plastic ones," Katja smiles back.');
        }
      }
    } else {
      scene.text('Katja pulls Artem\'s semi-hard cock out of his pants and takes it in her hands. "This is a nice cock you have. I\'m looking forward to playing with it. I can see that it\'s also looking forward to be played with…" Katja says seductively as Artem\'s cock becomes rock hard in her grasp.');
      scene.text('She gives it a few strokes before slowly running her tongue up the shaft. "Tastes great! Time to see if I can take everything…"');
      if (((s as any).npc_throat ?? 0)?.['A14'] < 2*((s as any).dick ?? 0)) {
        (s as any).npc_throat['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (2);
        // TODO-QSP: dynamic text: Katja tries to get Artem's <<$dick_girth>> <<dick>> cm long dick into her mouth,...
        scene.text(`Katja tries to get Artem's ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)} cm long dick into her mouth, but can't manage to get much more than the head inside before she starts sucking on it.`);
      } else {
        (s as any).npc_throat['A14'] = ((s as any).npc_throat['A14'] ?? 0) + (1);
        // TODO-QSP: dynamic text: Katja tries to get all of Artem's <<$dick_girth>> <<dick>> cm long dick into her...
        scene.text(`Katja tries to get all of Artem's ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)} cm long dick into her mouth, but is clearly having problems with her gag reflex when it hits her throat. However, she quickly gets into a rhythm that matches what she can take, only occasionally having to stop when she tries to take too much.`);
        // TODO-QSP: dynamic text: Katja takes all of Artem's <<$dick_girth>> <<dick>> cm long dick into her mouth ...
        scene.text(`Katja takes all of Artem's ${((s as any).dick_girth ?? 0)} ${((s as any).dick ?? 0)} cm long dick into her mouth and down her throat without gagging. She then quickly gets into a rhythm where she moves from almost only sucking the tip to getting all the way to the base of his cock.`);
        if (((s as any).artemQW ?? 0)?.['confidence'] >= 15) {
          (s as any).katjaQW['horny'] = ((s as any).katjaQW['horny'] ?? 0) + (Math.floor(Math.random() * 6) + 10);
          scene.text('"Wow, you\'re great! You\'re sucking my cock like a pro!" Artem grins.');
          scene.text('"Thanks. I\'ve had some practice," Katja replies with a wink.');
        }
      }
    }
    scene.text('Not wanting to be left out, you tell Artem to go down on you and he immediately obeys, moving down on his knees to start licking your pussy.');
    qspCall(s, 'arousal', 'cuni', 3);
    qspCall(s, 'stat', '');
    scene.actions([
      { label: 'Share his cock', handler: (st: GameState) => {
    qspCall(s, 'arousal', 'bj', 2);
    qspCall(s, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_5.jpg');
    scene.text('After a few minutes, Artem\'s licking becomes less enthusiastic, and you notice the awkward position he\'s in. "Okay, time for me to taste that cock."');
    scene.text('Both Artem and Katja stop and you get off the table. "Sit back and relax," you tell Artem as you get down on your knees next to Katja.');
    scene.text('The two of you then take turns licking his extremely hard dick.');
    if (((s as any).pcs_cupsize ?? 0) > 15) {
      scene.actions([
        { label: 'Show Katja how a titjob is done', goto: ['artem_katja_sex', 'first_time_titjob'] },
      ]);
    }
    scene.actions([
      { label: 'Get to pussy fucking', goto: ['artem_katja_sex', 'first_time_pussy'] },
    ]);
  } },
    ]);
  } },
        ]);
      }
    }
  } },
  ]);
  scene.build();
}

function enter(s: GameState, scene: SceneBuilder): void {
  const arg = s.locArg;
  switch (arg) {
    case 'going_home_together':
      enterGoingHomeTogether(s, scene);
      break;
    case 'first_time_start':
      enterFirstTimeStart(s, scene);
      break;
    case 'first_time_aborted_walking_home':
      enterFirstTimeAbortedWalkingHome(s, scene);
      break;
    case 'first_time_seduction':
      enterFirstTimeSeduction(s, scene);
      break;
    default:
      enterGoingHomeTogether(s, scene);
      break;
  }
}

export const artem_katja_sex: LocationDef = {
  name: 'artem_katja_sex',
  title: 'You walk across the school courtyard to meet up with Artem, ',
  region: 'other',
  description: ['You walk across the school courtyard to meet up with Artem, who gives you a friendly nod as you approach. "You ready to go?"'],
  enter: enter,
};
