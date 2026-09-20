import { qspCall, qspGoto } from '../_shared/qspBridge';

// AUTO-GENERATED FILE — DO NOT EDIT, fix the transpiler (scripts/qsp-transpile)
import type { GameState, ActionDef, LocationDef } from '../../core/types';
import type { SceneBuilder } from '../../core/scene';

function enterDefault(s: GameState, scene: SceneBuilder): void {
  scene.build();
}

function enterGoingHomeTogether(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You walk across the school courtyard to meet up with Artem, who gives you a friendly nod as you approach. "You ready to go?"');
  scene.text('You smile. "Let\'s go study!"');
  // TODO-QSP: dynamic text: Just as you''re about to leave, Katja approaches you. "I thought we were going t...
  scene.text(`Just as you're about to leave, Katja approaches you. "I thought we were going to do homework together today, ${((s as any).pcs_nickname || '')}?" she asks.`);
  if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
    scene.text('Artem turns to you. "Oh…" he says before he looks at Katja, then back to you. "It\'s okay, you guys can go study. I\'ll see you later?"');
    scene.text('You can tell he\'s nervous since he\'s avoiding eye contact with Katja, who winks at you to signal that she\'s ready to put your plan into motion.');
  } else {
    // TODO-QSP: dynamic text: Artem turns to you. "Is that true, <<$pcs_nickname>>?"
    scene.text(`Artem turns to you. "Is that true, ${((s as any).pcs_nickname || '')}?"`);
    scene.text('He\'s avoiding eye contact with Katja, who winks at you to signal that she\'s ready to put your plan into motion.');
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Continue with the plan', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You feign surprise. "I completely forgot about that! Why don\'t we all just do our homework together?"');
    scene.text('"Okay, we can do that," Katja replies a little too quickly, leaving you fearing that Artem will suspect that he\'s being set up, but he just looks confused.');
    scene.text('"Come on, Artem," you say encouragingly. "Katja is really good at the English pronunciation that you\'re struggling with. I\'m sure studying with her will be a big help!"');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('He still hesitates and you\'re afraid that you\'ve came on too thick, but after a moment\'s hesitation, he relents. "Okay, let\'s study together, but I don\'t have enough table space in my room."');
    } else {
      scene.text('He still hesitates and you\'re afraid that you\'ve came on too thick, but after a moment\'s hesitation, he smiles. "Sure, that sounds good, but I don\'t have enough table space in my room."');
    }
    scene.text('"That\'s no problem. My place will be empty for the next few hours, so we can work in my kitchen," Katja smiles.');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('You walk to the Meynold house mostly in silence. Artem is clearly still not very confident around women he doesn\'t know very well.');
      if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        scene.text('Katja has also gone quiet, despite her earlier enthusiasm. You think the fact that she\'s about to have sex with a boy for the first time is suddenly getting to her.');
      } else {
        scene.text('Katja tries to get him to talk, but it doesn\'t really help.');
      }
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
        if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
          scene.text('You walk to the Meynold house with Artem trying to make casual conversation with Katja, but she only responds in short sentences.');
          scene.text('You think the fact that she\'s about to have sex with a boy for the first time is suddenly getting to her.');
        } else {
          scene.text('You walk to the Meynold house with Artem and Katja quickly falling into conversation.');
        }
      } else {
        // TODO-QSP: 'You walk to the Meynold house with Artem clearly trying to '+iif(artemQW['threesome'] = 1, 'flirt w...
        if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
          scene.text('Katja doesn\'t really respond to him. You think the fact that she\'s about to have sex with a boy for the first time is suddenly getting to her.');
        } else {
          if (((st as any).katjaQW ?? 0)?.['QWstage'] >= 7) {
            scene.text('Katja responds in kind, flirting overtly with him. You\'re almost afraid that she\'ll drag him into the bushes to jump him immediately.');
          } else {
            scene.text('Katja appreciates the attention and responds well to his advances.');
          }
        }
      }
    }
    scene.actions([
      { label: 'Start doing your homework', goto: ['artem_katja_sex', 'first_time_start'] },
    ]);
  } },
    { label: 'Go with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m sorry, but I did promise to do homework with her today. We can hang out another time. I might come over when I\'ve finished our homework," you tell Artem.');
    // TODO-QSP: dynamic text: He looks a little down. "Well if you promised her, then you should keep it. See ...
    scene.text(`He looks a little down. "Well if you promised her, then you should keep it. See you later, ${((st as any).pcs_nickname || '')}," he says and starts walking home alone.`);
    scene.text('"Why did you send him away?" Katja asks. "I thought the plan was to seduce him into a threesome?"');
    scene.text('"Not today. Maybe next time," you reply. "Let\'s go to your house."');
    scene.actions([
      { label: 'Go do your homework with Katja', goto: ['katjaEV', '1'] },
    ]);
  } },
    { label: 'Go with Artem', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"I\'m pretty sure you remember wrong. I told you I would be hanging out with my boyfriend today. We\'ll just have to do homework at some other time," you tell Katja.');
    scene.text('Katja looks stunned by your reply, but then quickly gets her act together. "Well then. See you another time," she says with a clear hint of disappointment before she leaves you and Artem alone.');
    scene.text('"What was that about?" Artem asks, a little concerned.');
    scene.text('"It\'s nothing. She\'ll be fine tomorrow," you reassure him. "Let\'s go."');
    scene.actions([
      { label: 'Go to Artem\'s home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimeStart(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_1.jpg');
  (s as any).minut = ((s as any).minut ?? 0) + 30;
  (s as any).lern = ((s as any).lern ?? 0) + ((Math.floor(Math.random() * 3) + 2));
  qspCall(s, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0));
  qspCall(s, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 0));
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
      if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
        scene.text('You start working on your homework, but Katja is clearly uncomfortable with the situation. Artem, on the other hand, treats Katja like she was one of the nerd girls.');
        scene.text('While that makes it more awkward for Katja, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
      } else {
        scene.text('You start working on your homework, but Katja is clearly uncomfortable with the situation. Artem, on the other hand, acts likes doing homework with girls is something he does every day. It\'s clear that he\'s trying to flirt with Katja while you study.');
        scene.text('While that makes it more awkward for Katja, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
      }
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('You start working on your homework, but Artem is clearly uncomfortable with the situation. Even when Katja tries to be normal about the situation, he barely says anything and keeps looking down at his homework when he answers her questions.');
      scene.text('Since Artem really likes to study, some of the tension disappears as you get further into the details of the homework, and since they\'re both excellent students, you get a lot of good work done despite the situation.');
    } else {
      if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
        scene.text('You start working on your homework and Katja and Artem quickly get into the flow of things. The studying session is soon no different than when the nerds study together at the library,');
        scene.text('Since they\'re both excellent students, you get a lot of good work done.');
      } else {
        scene.text('You start working on your homework. Artem acts likes doing homework with girls is something he does every day. He overtly flirts with Katja, who returns in kind.');
        scene.text('This does create some sexual tension, but it subsides as you get further into the details of the homework. Since they\'re both excellent students, you get a lot of good work done despite the situation.');
      }
    }
  }
  scene.text('As you\'re close to finishing up, Katja gives you a look which is clearly her asking for confirmation to start seducing Artem.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Start the seduction', goto: ['artem_katja_sex', 'first_time_seduction'] },
    { label: 'Call it off', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(st, 'stat', '');
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
    if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
      if (((s as any).artemQW ?? 0)?.['threesome'] === 1) {
        scene.text('The two of you walk home as Artem talks about studying before he turns to you. "Do you think Katja might be interested?"');
        scene.text('You know exactly what he\'s thinking, but you decide to play dumb. "Interested in what?"');
        scene.text('He suddenly blushes. "You know… The three of us… Spending time together…"');
        scene.text('You can\'t help but snicker a little. "I\'ll think about it and talk to her about it."');
        scene.text('He just nods and the two of you make casual conversation the rest of the way to the building.');
      } else {
        scene.text('The two of you walk home, Artem seemingly oblivious to what was going on as he talks about the homework. To your surprise, he suddenly mentions how much he enjoyed studying with Katja and suggests that the three of you could do it again some time.');
      }
    } else {
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
  }
  scene.text('The two of you finally get back to your apartment building, where Artem bids you farewell before heading into his apartment.');
  // TODO-QSP: end
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
  // TODO-QSP: end
  scene.actions([
    { label: 'See Artem\'s response', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_3.jpg');
    if (((st as any).artemQW ?? 0)?.['threesome'] === 0) {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        scene.text('Artem looks completely out of it and has no idea how to react. He looks like he\'s on the verge of panicking, so you to try to calm him down.');
        scene.text('"It\'s okay, Artem! Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
        // TODO-QSP: 'He seems to calm down a little and '+iif( katjaQW['QWstage'] = 5, ' you tell Katja to unzip his pan...
      } else {
        if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
          scene.text('Artem doesn\'t seem to know how to react to the situation, so he looks at you for an explanation.');
          scene.text('"It\'s okay, Artem! Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
          // TODO-QSP: 'He stammers "Yes. I do like what I see…" '+iif( katjaQW['QWstage'] = 5, 'You notice Katja''s hesita...
        } else {
          if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
            // TODO-QSP: dynamic text: Artem looks at you to see your reaction, and when you smile back seductively, he...
            scene.text(`Artem looks at you to see your reaction, and when you smile back seductively, he grins. "I do like what I see, but are you sure about this, ${((st as any).pcs_nickname || '')}?"`);
            scene.text('"Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
            // TODO-QSP: iif( katjaQW['QWstage'] = 5, 'You notice Katja''s hesitation. "Why don''t you get his cock out and p...
          } else {
            // TODO-QSP: dynamic text: Artem briefly looks at you to see your reaction, and when you just smiles back s...
            scene.text(`Artem briefly looks at you to see your reaction, and when you just smiles back seductively, he grins. "I very much like what I see. This is a great view and I'm sure that things can only get better, but I'm a little surprised that ${((st as any).pcs_nickname || '')} wants to share me with you."`);
            scene.text('"Katja is my friend and I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. How could her deny her that?" you answer.');
            // TODO-QSP: '"Why don''t you get my cock out and play with it?" Artem continues. '+iif( katjaQW['QWstage'] = 5, ...
          }
        }
      }
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        scene.text('Artem looks very embarrassed and doesn\'t seem to have any idea how to react, so you decide to try to calm him down.');
        scene.text('"It\'s okay, Artem! Katja is my friend and as you know I like to share with my friends. I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
        // TODO-QSP: 'He seems to calm down a little and '+iif( katjaQW['QWstage'] = 5, ' you turn to Katja. "Why don''t ...
      } else {
        if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
          scene.text('Artem is still not confident enough to take control of the situation, so he looks at you to see what to do.');
          scene.text('"It\'s okay, Artem. Katja is my friend and you know I like to share with my friends. I told her how amazing you are in bed, and she wanted to also experience that. So just relax and enjoy the experience."');
          // TODO-QSP: 'He looks back down at Katja. "Yes. I do like what I see." '+iif( katjaQW['QWstage'] = 5, 'You notic...
        } else {
          if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
            // TODO-QSP: dynamic text: Artem looks at you to see your reaction, and when you smile back seductively, he...
            scene.text(`Artem looks at you to see your reaction, and when you smile back seductively, he grins. "I do like what I see. Are you are you going to share all your friends with me, ${((st as any).pcs_nickname || '')}?"`);
            scene.text('"I like to share," you shrug. "I told her how amazing you are in bed, and she wanted to experience that. So just relax and enjoy the experience."');
            // TODO-QSP: iif( katjaQW['QWstage'] = 5, 'You notice Katja''s hesitation. "Why don''t you get his cock out and p...
          } else {
            // TODO-QSP: dynamic text: Artem briefly looks at you to see your reaction, and when you smile back seducti...
            scene.text(`Artem briefly looks at you to see your reaction, and when you smile back seductively, he grins. "I very much like what I see. This is a great view and I'm sure that things can only get better. I look forward to you sharing me with the rest of your friends, ${((st as any).pcs_nickname || '')}."`);
            scene.text('"I like to share," you shrug. "I told her how amazing you are in bed, and she wanted to experience that. How could her deny her that?" you reply.');
            // TODO-QSP: '"Why don''t you get my cock out and play with it, Katja?" he continues. '+iif( katjaQW['QWstage'] =...
          }
        }
      }
    }
    scene.text('While Katja opens his pants and slowly pulls out his cock, you sit up on the table with your legs spread so that your naked pussy is in from of Artem\'s face.');
    scene.actions([
      { label: 'Licking', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npcStat', 'A2');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_4.jpg');
    if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
      scene.text('Katja pulls Artem\'s semi-hard cock out of his pants and takes it in her hands. "Wow, so this is what a real cock feels like. So warm, but somewhat soft. Oh!" Katja suddenly stops what she\'s saying as Artem\'s cock becomes rock hard in her hands.');
      // TODO-QSP: 'She then starts to stroke it a little, clearly showing her lack of experience. "Why don''t you try ...
      scene.text('"Okay…" Katja responds and sticks out her tongue to start licking Artem\'s shaft. "It doesn\'t taste bad," she says. "Time to see if I can take everything…"');
      if (2*((st as any).npc_throat ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (2);
        // TODO-QSP: dynamic text: Katja tries to get Artem''s <<$dick_girth>> <<dick>> cm long dick into her mouth...
        scene.text(`Katja tries to get Artem's ${((st as any).dick_girth || '')} ${((st as any).dick || '')} cm long dick into her mouth, but can't manage to get much more than the head inside before she starts sucking on it.`);
      } else {
        if (((st as any).npc_throat ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
          ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
          // TODO-QSP: dynamic text: Katja tries to get all of Artem''s <<$dick_girth>> <<dick>> cm long dick into he...
          scene.text(`Katja tries to get all of Artem's ${((st as any).dick_girth || '')} ${((st as any).dick || '')} cm long dick into her mouth, but is clearly having problems with her gag reflex when it hits her throat. However, she quickly gets into a rhythm that matches what she can take, only occasionally having to stop when she tries to take too much.`);
          if (((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('"You really haven\'t sucked a cock before? That\'s hard to believe with how good you\'re doing," Artem says encouragingly.');
            scene.text('"Thanks. I\'ve practiced a lot with plastic ones," Katja smiles back.');
          }
        } else {
          // TODO-QSP: dynamic text: Katja takes all of Artem''s <<$dick_girth>> <<dick>> cm long dick into her mouth...
          scene.text(`Katja takes all of Artem's ${((st as any).dick_girth || '')} ${((st as any).dick || '')} cm long dick into her mouth and down her throat without gagging. She then quickly gets into a rhythm where she moves from almost only sucking the tip to getting all the way to the base of his cock.`);
          if (((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 10));
            scene.text('"Wow. You really haven\'t sucked a cock before?" Artem moans. "I don\'t believe that. You\'re sucking like a pro!"');
            scene.text('"Thanks. I\'ve practiced a lot with plastic ones," Katja smiles back.');
          }
        }
      }
    } else {
      scene.text('Katja pulls Artem\'s semi-hard cock out of his pants and takes it in her hands. "This is a nice cock you have. I\'m looking forward to playing with it. I can see that it\'s also looking forward to be played with…" Katja says seductively as Artem\'s cock becomes rock hard in her grasp.');
      scene.text('She gives it a few strokes before slowly running her tongue up the shaft. "Tastes great! Time to see if I can take everything…"');
      if (((st as any).npc_throat ?? 0)?.['A14'] < 2*((st as any).dick ?? 0)) {
        ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (2);
        // TODO-QSP: dynamic text: Katja tries to get Artem''s <<$dick_girth>> <<dick>> cm long dick into her mouth...
        scene.text(`Katja tries to get Artem's ${((st as any).dick_girth || '')} ${((st as any).dick || '')} cm long dick into her mouth, but can't manage to get much more than the head inside before she starts sucking on it.`);
      } else {
        if (((st as any).npc_throat ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
          ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
          // TODO-QSP: dynamic text: Katja tries to get all of Artem''s <<$dick_girth>> <<dick>> cm long dick into he...
          scene.text(`Katja tries to get all of Artem's ${((st as any).dick_girth || '')} ${((st as any).dick || '')} cm long dick into her mouth, but is clearly having problems with her gag reflex when it hits her throat. However, she quickly gets into a rhythm that matches what she can take, only occasionally having to stop when she tries to take too much.`);
        } else {
          // TODO-QSP: dynamic text: Katja takes all of Artem''s <<$dick_girth>> <<dick>> cm long dick into her mouth...
          scene.text(`Katja takes all of Artem's ${((st as any).dick_girth || '')} ${((st as any).dick || '')} cm long dick into her mouth and down her throat without gagging. She then quickly gets into a rhythm where she moves from almost only sucking the tip to getting all the way to the base of his cock.`);
          if (((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 10));
            scene.text('"Wow, you\'re great! You\'re sucking my cock like a pro!" Artem grins.');
            scene.text('"Thanks. I\'ve had some practice," Katja replies with a wink.');
          }
        }
      }
    }
    scene.text('Not wanting to be left out, you tell Artem to go down on you and he immediately obeys, moving down on his knees to start licking your pussy.');
    qspCall(st, 'arousal', 'cuni', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Share his cock', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 2);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_5.jpg');
    scene.text('After a few minutes, Artem\'s licking becomes less enthusiastic, and you notice the awkward position he\'s in. "Okay, time for me to taste that cock."');
    scene.text('Both Artem and Katja stop and you get off the table. "Sit back and relax," you tell Artem as you get down on your knees next to Katja.');
    scene.text('The two of you then take turns licking his extremely hard dick.');
    if (((st as any).pcs_cupsize ?? 0) > 15) {
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
  } },
  ]);
  scene.build();
}

function enterFirstTimeTitjob(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'arousal', 'titjob', 2);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_5a.jpg');
  scene.text('"I want to show you something, but we need to get rid of the rest of our clothes."');
  scene.text('You and Katja quickly strip out of your clothes before getting back down on you knees again. "Make sure his cock is very wet," you tell her and she starts giving him a sloppy blowjob.');
  scene.text('While she does that, you spit on your breasts. "Okay, that\'s enough. Let me show you how a titjob is done."');
  scene.text('Katja moves aside and you scoot up and wrap your breasts around Artem\'s dick, use your hands to push them together and envelope his cock.');
  scene.text('When you\'re sure you have a tight grip, you start moving your breasts up and down Artem\'s shaft.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'bj', 1);
    qspCall(st, 'arousal', 'foreplay_give', 2);
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['titjob'] = ((st as any).katjaQW['titjob'] ?? 0) + (1);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_5b.jpg');
    scene.text('Katja looks very excited as you pleasure Artem with your breasts. After a few minutes, she speaks up. "I wanna try that."');
    scene.text('You stop and remove your breasts from Artem\'s cock. "Okay, but first you need to make your boobs slippery. I\'ll lube up Artem while you do that."');
    scene.text('Katja start lubing up her breasts with her spit while you give Artem another sloppy blowjob.');
    scene.text('Katja then takes his cock between her breasts. "Remember to squeeze tight," you tell her and she does as she\'s told as you get behind her and help her wrap her breasts around his cock.');
    scene.text('"Okay start moving," you say when you\'re sure her grip is tight and she starts grinding her breasts along his dick.');
    scene.text('You continue for a few minutes, with Artem clearly enjoying what you\'re doing.');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('However, you can see that he\'s getting closer to cumming. "I think that\'s enough, else we won\'t have any cock for our pussies."');
    } else {
      scene.text('"This is the best view ever, but if you continue then I\'ll cum all over you before we even get to any fucking!" he smirks.');
    }
    scene.actions([
      { label: 'Get to pussy fucking', goto: ['artem_katja_sex', 'first_time_pussy'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimePussy(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_6.jpg');
  scene.text('You get up from the floor and move to a chair, placing both knees on it and sticking your ass in the air while supporting yourself on the table.');
  if (((s as any).stat ?? 0)?.['think_virgin'] === 1) {
    scene.text('"Come on, Artem! Show Katja how you take my virginity doggystyle!" you grin and he quickly moves in behind you.');
    scene.text('Katja moves close and starts licking your breasts as Artem takes your virginity and starts pounding you from behind.');
  } else {
    scene.text('"Come on, Artem! Show Katja how you take me doggystyle!" you grin and he quickly moves in behind you.');
    scene.text('Katja moves close and starts licking your breasts as Artem starts pounding you from behind.');
  }
  qspCall(s, 'arousal', 'vaginal', 3);
  qspCall(s, 'arousal', 'foreplay', (-2));
  qspCall(s, 'stat', '');
  if (((s as any).katjaQW ?? 0)?.['QWstage'] === 5) {
    scene.actions([
      { label: 'Katja tries her first cock', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_7.jpg');
    scene.text('After letting Artem fuck you for a few minutes, you decide that it\'s time for Katja\'s turn, who is growing extremely excited watching you.');
    scene.text('"It\'s time for her to try her first cock, Artem…"');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
      scene.text('Artem pulls out of you, but clearly isn\'t ready to take the imitative and just stands there looking lost.');
      scene.text('"Come on Katja, take my place" you say and get down on the floor next to the chair.');
      // TODO-QSP: dynamic text: She does as she''s told, but clearly looking '+iif(npc_vag['A14'] = 0, 'very', '...
      scene.text('She does as she\'s told, but clearly looking ' + ((((st as any).npc_vag ?? 0)?.['A14'] === 0) ? ('very') : ('a little')) + ' nervous. "Don\'t worry, Katja. Artem will be very careful, won\'t you?" you say, looking at Artem to make sure he understands.');
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 11) + 10));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
          scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, stopping when he meets the resistance of her hymen.');
          scene.text('It\'s clear that he\'s not going to pop her cherry by himself. "Are you ready, Katja?" you ask and she just nods. "Do it then, Artem. Push through her hymen."');
          scene.text('He pushes forward in one sharp thrust and Katja lets out a shriek of pain. "I\'m sorry!" Artem says in a panic.');
          scene.text('"Don\'t be, I was expecting that. Just stay still for a moment," Katja replies through a forced smile.');
        } else {
          if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
            scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, stopping when he meets some resistance because of how tight she is.');
            scene.text('"It\'s okay to push further," Katja reassures him and he pushes forward, causing Katja to let out a shriek of pain.');
            scene.text('"I\'m sorry!" Artem says in a panic.');
            scene.text('"Don\'t be. Just stay still for a moment," Katja replies through a forced smile.');
          } else {
            scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, only stopping when he his cock is completely buried inside her.');
          }
        }
        scene.text('Katja smiles. "It\'s okay. You can start to move."');
        if (((st as any).artemQW ?? 0)?.['artem_dom'] > 4) {
          scene.text('Artem starts slowly moving in and out of Katja, but soon starts to pick up speed as he gets rougher and rougher.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 11) + 10));
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
            scene.text('What starts out as small moans from Katja turns into sounds of pain as Artem starts to pound her like a cheap slut.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('Katja starts with small moans, but as he picks up his speed they get higher and higher.');
          }
        } else {
          scene.text('Artem starts slowly moving in and out of Katja, and does not seem to pick up speed.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
            scene.text('Since you can see that Katja is clearly feeling some pain from this, you let him continue very slowly. This makes Katja\'s pain seem to go away, and by the end she\'s moaning quietly.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('Since Katja doesn\'t seem to be feeling any satisfaction, you encourage Artem to go faster. He does what you say and is soon pounding her, causing her to moan loudly.');
          }
        }
      } else {
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 10));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
          scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, stopping when he meets the resistance of her hymen.');
          scene.text('"Are you ready, Katja?" he asks and she just nods. Not being completely sure on her answer, Artem hesitates a little.');
          scene.text('"Do it, Artem. Push through her hymen," you say encouragingly.');
          scene.text('"Here it comes, Katja," he says as he pushes forward, causing Katja to let out a shriek of pain.');
          scene.text('"I\'m sorry!" he says in a panic.');
          scene.text('"Don\'t be, I was expecting that. Just stay still for a moment," Katja replies through a forced smile.');
        } else {
          if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
            scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, stopping when he meets some resistance because of how tight she is.');
            scene.text('"Is it okay?" he asks and Katja nods.');
            scene.text('"Yeah, it\'s okay. You can push further."');
            scene.text('He does so and Katja let out a shriek of pain.');
            scene.text('"I\'m sorry!" he says in a panic.');
            scene.text('"Don\'t be. Just stay still for a moment," Katja replies through a forced smile.');
          } else {
            scene.text('Artem just nods and slowly moves in behind Katja. "Here it comes, Katja."');
            scene.text('He very slowly enters her and only stops when his cock is completely buried inside her.');
          }
        }
        scene.text('"Is it okay to move now, Katja?" Artem asks after a few seconds.');
        scene.text('"Yes, you can start to move now," she replies and he starts to move in and out.');
        if (((st as any).artemQW ?? 0)?.['artem_dom'] > 4) {
          ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
          scene.text('Artem starts slowly to move in and out of Katja, but soon starts to pick up speed as he gets rougher and rougher.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 10));
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
            scene.text('What starts out as small moans from Katja turns into sounds of pain as Artem starts to pound her like a cheap slut.');
            scene.text('He notice this after a little while and apologizes before slowing down almost too much.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('Katja starts with small moans, but as he picks up speed they get higher and higher.');
          }
        } else {
          scene.text('Artem starts slowly to move in and out of Katja, but starts to pick up some speed.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 0));
            scene.text('This makes Katja feel some pain which Artem quickly notices. "Sorry, I\'ll be more careful" he says and slows down.');
            scene.text('This makes Katja\'s pain seem to go away, and by the end she\'s moaning quietly.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('As he goes faster, Katja\'s moans becomes louder, causing Artem to pick up more speed.');
            scene.text('By the end, he\'s pounding her hard as she moans very loudly.');
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: Artem pulls out of you. "Come and take <<$pcs_nickname>>''s place, Katja. I''ll ...
      scene.text(`Artem pulls out of you. "Come and take ${((st as any).pcs_nickname || '')}'s place, Katja. I'll show you a great first time". You get down on the floor next to the chair to give Katja some space.`);
      // TODO-QSP: dynamic text: She does as she''s told, but clearly looking '+iif(npc_vag['A14'] = 0, 'very', '...
      scene.text('She does as she\'s told, but clearly looking ' + ((((st as any).npc_vag ?? 0)?.['A14'] === 0) ? ('very') : ('a little')) + ' nervous.');
      scene.text('"Don\'t worry, Katja. Artem will be very careful, won\'t you?" you say while looking at Artem.');
      scene.text('"You\'re in good hands, Katja!" he quickly replies. "I\'ll do anything so that it feels pleasant and not painful."');
      if (((st as any).artemQW ?? 0)?.['artem_dom'] > 4) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
        scene.text('He then moves behind her and places his cock at the entrance of her pussy. "Are you ready to get fucked and become a woman?" he asks in an almost too confident tone.');
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 10));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (7);
          scene.text('"Losing my hymen has nothing to do with if I\'m a woman or not! What cave did you crawl out of?" she asks in a sharp voice. Artem is clearly taken aback by her outburst and freezes.');
          scene.text('"He didn\'t mean anything by it, Katja. It\'s just stupid talk that goes around in the boys world. Isn\'t it, Artem?" you quickly chime in to try and defuse the tension.');
          scene.text('"Sorry, it\'s just stupid tough talk that guys do. I shouldn\'t have said it," Artem replies.');
          scene.text('"Okay. Apology accepted. You can go ahead," Katja smiles.');
          scene.text('He slowly pushes his cock into her and stops when he hits her hymen. "I\'m going to push though your hymen now. It might cause a little pain. Are you ready"');
          scene.text('Katja looks at you and steels herself. "I\'m ready…"');
          scene.text('Artem then pushes his cock as far in as he can in one smooth move and Katja lets out a small shriek of pain.');
          scene.text('"I\'ll stay still so you can get used to it. Let me know when you\'re ready for me to move," Artem says.');
        } else {
          if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
            // TODO-QSP: dynamic text: "I''ve been fucked before by <<$pcs_nickname>> and having sex has nothing to do ...
            scene.text(`"I've been fucked before by ${((st as any).pcs_nickname || '')} and having sex has nothing to do with if I'm a woman or not! What cave did you crawl out of?" she asks in a sharp voice. Artem is clearly taken aback by her outburst and freezes.`);
            scene.text('"He didn\'t mean anything by it, Katja. It\'s just stupid talk that goes around in the boys world. Isn\'t it, Artem?" you quickly chime in to try and defuse the tension.');
            scene.text('"Sorry, it\'s just stupid tough talk that guys do. I shouldn\'t have said it." Artem replies.');
            scene.text('"Okay. Apology accepted. You can go ahead," Katja smiles.');
            scene.text('He slowly pushes his cock into her and is very careful when he can feel the resistance of her tight pussy, but he manages to push it all the way to the base without causing her any pain.');
            scene.text('He then stops. "I\'m all the way in, Katja. Let me know when you\'re ready for me to move."');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (2);
            // TODO-QSP: dynamic text: "I''ve been fucked before by <<$pcs_nickname>> and having sex has nothing to do ...
            scene.text(`"I've been fucked before by ${((st as any).pcs_nickname || '')} and having sex has nothing to do with if I'm a woman or not! What cave did you crawl out of?" she says in a sharp voice. Artem is clearly taken aback by her outburst and freezes.`);
            scene.text('"He didn\'t mean anything by it, Katja. It\'s just stupid talk that goes around in the boys world. Isn\'t it, Artem?" you quickly chime in to try and defuse the tension.');
            scene.text('"Sorry, it\'s just stupid tough talk that guys do. I shouldn\'t have said it." Artem replies.');
            scene.text('"Okay. Apology accepted. You can go ahead," Katja smiles.');
            scene.text('He slowly pushes his cock into her and is very careful when he can feel the resistance of her tight pussy, but he manages to push it all the way to the base without causing her any pain.');
            scene.text('He then stops. "I\'m all the way in, Katja. Let me know when you\'re ready for me to move."');
          }
        }
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        scene.text('After a few seconds, Katja nods. "Okay, you can start to move."');
        scene.text('He starts fucking her and gradually goes faster and rougher, but never so rough that it becomes painful for Katja, who starts to moan loudly.');
      } else {
        scene.text('Artem moves in behind Katja and places his cock at the entrance of her pussy. "Are you ready to feel a big cock in your tight pussy, Katja?" he asks, seeming very confident of his sex skill.');
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
          scene.text('"Please be careful Artem, I\'ve never had anything bigger than a finger in there," Katja says nervously.');
          scene.text('"I promise I\'ll be as gentle as I can. I probably can\'t avoid causing you a little pain, but I\'ll try to make it as quick as possible," Artem answers.');
          scene.text('He slowly pushes his cock into her and stops when he hits her hymen. After a moment he says "I\'m going to push though your hymen now. It might cause a little pain. Are you ready" Artem asks.');
          scene.text('Katja looks at you and steels herself. "I\'m ready."');
          scene.text('Artem pushes his cock as far in as he can in one smooth move and Katja lets out a small shriek of pain.');
          scene.text('"I\'ll stay still for now so you can get used to it. Let me know when you\'re ready for me to move," Artem says.');
        } else {
          if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 0));
            // TODO-QSP: dynamic text: "Please be careful, Artem. I''ve been fucked by <<$pcs_nickname>> before, but yo...
            scene.text(`"Please be careful, Artem. I've been fucked by ${((st as any).pcs_nickname || '')} before, but your cock seems very big," Katja says nervously.`);
            scene.text('"I promise I\'ll be as gentle as I can. You won\'t feel any pain," Artem answers.');
            scene.text('He slowly pushes his cock into her and is very careful when he can feel the resistance of her tight pussy, but he manages to push it all the way to the base without causing her any pain.');
            scene.text('He then stops. "I\'m all the way in, Katja. Let me know when you\'re ready for me to move."');
          } else {
            // TODO-QSP: dynamic text: "I''ve been fucked by <<$pcs_nickname>> before, so your cock doesn''t scare me,"...
            scene.text(`"I've been fucked by ${((st as any).pcs_nickname || '')} before, so your cock doesn't scare me," Katja says.`);
            scene.text('Artem slowly pushes his cock into her and manages to push it all the way to the base without causing her any pain.');
            scene.text('He then stops. "I\'m now all the way in, Katja. Let me know when you\'re ready for me to move."');
          }
        }
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        scene.text('After a few seconds, Katja nods. "Okay, you can start to move."');
        scene.text('He nods in return and starts fucking her fast and hard, but never so rough that it becomes painful for Katja, who soon starts to moan loudly.');
      }
    }
    scene.actions([
      { label: 'Change of position', goto: ['artem_katja_sex', 'first_time_next'] },
    ]);
  } },
    ]);
  } else {
    scene.actions([
      { label: 'Katja\'s turn', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3);
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_7.jpg');
    scene.text('Artem pounds you for some time as Katja watches in excitement. "Time for me to try Artem\'s cock…" she grins.');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
      scene.text('Artem pulls out of you, but clearly isn\'t ready to take the initiative and just stands there looking lost while Katja takes your place and you get down on the floor next to the chair.');
      scene.text('"Come on Artem, fuck her tight wet pussy!" you say to make him take some initiative.');
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
          scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, stopping when he meets some resistance because of how tight she is.');
          scene.text('"Come on, Artem!" Katja says impatiently. "You can fuck me. Push it all the way in!"');
          scene.text('He nods and thrusts forwards, causing Katja to let out a shriek of pain.');
          scene.text('"I\'m sorry!" he says in a panic.');
          scene.text('"Don\'t be. Just stay still for a moment," Katja replies.');
        } else {
          scene.text('Artem doesn\'t say anything and just nods as he slowly moves in behind Katja and very slowly enters her, only stopping when his cock is completely buried inside her.');
        }
        scene.text('After a few seconds, Katja looks back at him expectantly. "Come on, Artem! Fuck me!"');
        if (((st as any).artemQW ?? 0)?.['artem_dom'] > 4) {
          ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
          scene.text('Artem starts slowly to move in and out of Katja, but soon starts to pick up speed and gets rougher and rougher.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 11) + 10));
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) - (5);
            scene.text('What starts out as small moans from Katja turns into sounds of pain as Artem starts to pound her like a cheap slut.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('Katja starts with small moans, but as he picks up his speed they get higher and higher.');
          }
        } else {
          scene.text('Artem starts slowly to move in and out of Katja, and does not seem to pick up speed.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 0));
            scene.text('Katja is clearly feeling some pain from this and asks him to slow down, which he does. This makes Katja\'s pain seem to go away, and by the end she\'s moaning quietly.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('Since Katja doesn\'t seem to feel any pain but clearly also not much satisfaction, you tell Artem to fuck her harder. He does what you say and is soon pounding her as she starts to moan loudly.');
          }
        }
      } else {
        if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
          scene.text('Artem doesn\'t say anything just nods as he slowly moves in behind Katja and very slowly enters her, stopping when he meets some resistance because of how tight she is.');
          scene.text('"Is it okay?" he asks and Katja nods.');
          scene.text('"Yeah, it\'s okay. You can push further."');
          scene.text('He nods and pushes forwards, causing Katja to let out a shriek of pain.');
          scene.text('"I\'m sorry!" he says in a panic.');
          scene.text('"Don\'t be. Just stay still for a moment," Katja replies through a forced smile.');
        } else {
          scene.text('Artem just nods and slowly moves in behind Katja. "Here it comes, Katja."');
          scene.text('He very slowly enters her and only stops when his cock is completely buried inside her.');
        }
        scene.text('After a few seconds, Katja looks back at him expectantly. "Come on, Artem! Fuck me!"');
        if (((st as any).artemQW ?? 0)?.['artem_dom'] > 4) {
          ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
          scene.text('Artem starts to slowly move in and out of Katja, but soon starts to pick up speed as he gets rougher and rougher.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
            scene.text('What starts out as small moans from Katja turns into sounds of pain as Artem starts to pound her like a cheap slut. He notices this and apologizes before slowing down almost too much.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('Katja starts with small moans, but as he picks up his speed they get higher and higher.');
          }
        } else {
          scene.text('Artem starts slowly to move in and out of Katja, but starts to pick up some speed.');
          if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
            scene.text('This makes Katja feel some pain, which Artem quickly notices and slows down. This makes Katja\'s pain seem to go away, and by the end she\'s moaning quietly.');
          } else {
            ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
            scene.text('As he goes faster, Katja\'s moans becomes louder and Artem picks up even more speed. By the end, he\'s pounding her hard as she moans very loudly.');
          }
        }
      }
    } else {
      // TODO-QSP: dynamic text: Artem pulls out of you. "Come and take <<$pcs_nickname>>''s place, Katja. I want...
      scene.text(`Artem pulls out of you. "Come and take ${((st as any).pcs_nickname || '')}'s place, Katja. I want to try your tight pussy."`);
      scene.text('You get down on the floor next to the chair to give Katja space.');
      // TODO-QSP: dynamic text: "Great. '+iif( katjaQW['slut'] > 80 , 'My extremely wet pussy need to be filled ...
      scene.text('"Great. ' + ((((st as any).katjaQW ?? 0)?.['slut'] > 80) ? ('My extremely wet pussy need to be filled by something hard,') : ('Let\'s get to it,')) + '" she says and takes your place on the chair.');
      if (((st as any).artemQW ?? 0)?.['artem_dom'] > 4) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) + (1);
        scene.text('Artem moves behind Katja and places his cock at the entrance of her pussy. "Okay bitch, get ready to be pounded like a cheap whore!" he says, sounding like he\'s in a bad porn movie, and Katja reacts very harshly.');
        scene.text('"What the fuck, Artem?! Why the hell do you think that any girl wants to fuck a pig that says things like that?! What cave did you crawl out of?" she asks in a sharp voice. Artem is clearly taken aback by her outburst and freezes.');
        if (((st as any).artemQW ?? 0)?.['nush3some'] >= 3) {
          scene.text('"He didn\'t mean anything by it, Katja. It\'s just stupid talk that goes around in the boys world. Isn\'t it, Artem?" you quickly chime in to try and defuse the tension.');
          scene.text('"Sorry Katja, I thought you might like it." He pauses a moment before continuing. "It\'s just that Nush likes it when I talk like that. so I thought you would too. Sorry…"');
          scene.text('Katja still looks annoyed, but also very horny. "Just because a girl that opens her legs for everybody thinks it\'s fine to look down on women doesn\'t make it so."');
          scene.text('Artem starts to reply, but Katja quickly cuts in. "Just stop talking and fuck me already."');
        } else {
          scene.text('"He didn\'t mean anything by it, Katja. It\'s just stupid talk that goes around in the boys world. Isn\'t it, Artem?" you quickly chime in to try and defuse the tension.');
          scene.text('"Sorry, it\'s just tough talk that guys do. I shouldn\'t have said it," Artem answers.');
          scene.text('Katja still looks annoyed, but also very horny. "Okay. Apology accepted. You can go ahead."');
        }
        if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
          scene.text('He slowly pushes his cock into her and is very careful when he can feel the great resistance of her tight pussy, but he manages to push it all the way to the base without causing her any pain.');
        } else {
          scene.text('He slowly pushes his cock into her and manages to push it all the way to the base without causing her any pain.');
        }
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
        scene.text('He then starts to pick up speed and gets rougher and rougher, but never so rough that it becomes painful for Katja, who starts to moan loudly.');
      } else {
        scene.text('Artem moves behind Katja and places his cock at the entrance of her pussy. "Are you ready to feel a big cock in your tight pussy, Katja?" he asks, seeming very confident of his sex skill.');
        if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 5));
          scene.text('"Please be careful, Artem. I\'ve been fucked before, but your cock seem very big," Katja says somewhat nervously.');
          scene.text('"I promise that I\'ll be as gentle as I can and you won\'t feel any pain" he answers.');
          scene.text('He slowly pushes his cock into her and is very careful when he can feel the great resistance of her tight pussy, but he manages to push it all the way to the base without causing her any pain.');
        } else {
          scene.text('"Come on Artem, give me that big hard cock of yours!" Katja says excitedly.');
          scene.text('He pushes his cock into her and manages to push it all the way to the base without causing her any pain.');
        }
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) - ((Math.floor(Math.random() * 6) + 10));
        scene.text('He then starts to pick up speed and fucks her fast and hard, but never so rough that it becomes painful for Katja, who starts to moan loudly.');
      }
    }
    scene.actions([
      { label: 'Change of position', goto: ['artem_katja_sex', 'first_time_next'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstTimeNext(s: GameState, scene: SceneBuilder): void {
  if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
    if (((s as any).katjaQW ?? 0)?.['titjob'] > 0  ||  ((s as any).katjaQW ?? 0)?.['slut'] > 80) {
      qspGoto(s, 'artem_katja_sex', 'first_time_katja_titjob');
    } else {
      qspGoto(s, 'artem_katja_sex', 'first_time_ride');
    }
  } else {
    qspGoto(s, 'artem_katja_sex', 'first_time_on_table');
  }
  // TODO-QSP: end
  scene.build();
}

function enterFirstTimeOnTable(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_8.jpg');
  scene.text('"My pussy needs a break," Katja says and Artem pulls out.');
  // TODO-QSP: dynamic text: "Get your ass on the table <<$pcs_nickname>>," he orders. "Time for you to get f...
  scene.text(`"Get your ass on the table ${((s as any).pcs_nickname || '')}," he orders. "Time for you to get fucked some more."`);
  scene.text('You take a pillow and lie down on your back on the table, your ass hanging over the edge as Artem thrusts his cock into you and starts to pound you.');
  scene.text('Katja doesn\'t want to be completely left out, so she crawls up on the table and starts to lick your breasts.');
  qspCall(s, 'arousal', 'vaginal', 3);
  qspCall(s, 'arousal', 'foreplay', (-2));
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn again', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_9.jpg');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 10));
    scene.text('After pounding you for a few minutes, Artem stops and looks at Katja. "Are you ready for some more cock?"');
    scene.text('She nods and Artem pulls out of you, allowing Katja to take your place. He starts to fuck her again, this time completely aware of how to treat her so she only feels pleasure.');
    scene.text('Not wanting to be left out, you start to suck on Katja\'s breast.');
    qspCall(st, 'arousal', 'foreplay', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Change position again', handler: (st: GameState) => {
    if (((st as any).katjaQW ?? 0)?.['titjob'] > 0  ||  ((st as any).katjaQW ?? 0)?.['slut'] > 80) {
      qspGoto(st, 'artem_katja_sex', 'first_time_katja_titjob');
    } else {
      qspGoto(st, 'artem_katja_sex', 'first_time_ride');
    }
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimeKatjaTitjob(s: GameState, scene: SceneBuilder): void {
  qspCall(s, 'arousal', 'foreplay_give', 3);
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_10a.jpg');
  scene.text('"Let\'s change position," Katja says.');
  scene.text('"Great, because I\'m getting tired!" Artem answers with a smile.');
  scene.text('"Why don\'t you lie down and we\'ll take care of you?" you suggest.');
  scene.text('He pulls out of Katja and lies on his back on the floor as you and Katja get on your knees next to him. Katja looks like she has an idea.');
  if (((s as any).katjaQW ?? 0)?.['titjob'] === 0) {
    // TODO-QSP: dynamic text: "So I''ve heard of this thing called a titjob and I want to try it," she says. "...
    scene.text(`"So I've heard of this thing called a titjob and I want to try it," she says. "Give his cock a few licks so it's slippery, ${((s as any).pcs_nickname || '')}."`);
    scene.text('You do that while she spits between her breasts to lube them up. She then moves between Artem\'s legs and leans forward to wrap her breasts around his dick. He let out a loud moan as she uses her hands to push her breasts together for a tight grip.');
    scene.text('You move in close to watch as she starts sliding breasts up and down along his shaft. It\'s clear that this is her first time doing this since her rhythm isn\'t perfect and his dick slips out from between her breasts a few times, but Artem does seem to enjoy it.');
  } else {
    // TODO-QSP: dynamic text: "I wanna give you a titjob Artem," Katja says. "Give his cock a few licks so it'...
    scene.text(`"I wanna give you a titjob Artem," Katja says. "Give his cock a few licks so it's very slippery, ${((s as any).pcs_nickname || '')}."`);
    scene.text('You do that while she spits between her breasts to lube them up. She then moves between Artem\'s legs and leans forward to wrap her breasts around his dick. He let out a loud moan as she uses her hands to push her breasts together for a tight grip.');
    scene.text('You move in close to watch as she starts sliding breasts up and down along his shaft.');
    if (((s as any).katjaQW ?? 0)?.['titjob'] < 5) {
      scene.text('She clearly has some experience since her rhythm is pretty good, but his dick does slip out from between her breasts a few times. Artem, however, seems to be enjoying it a lot.');
    } else {
      scene.text('She clearly knows what she\'s doing. Her rhythm is perfect and she keeps his cock wrapped tightly in the grip of her breasts. Artem looks very satisfied.');
    }
  }
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['titjob'] = ((s as any).katjaQW['titjob'] ?? 0) + (1);
  scene.text('After a few minutes, Katja stops. "Okay, that\'s enough," she says as she releases his cock from her grip.');
  if (((s as any).pcs_cupsize ?? 0) > 15) {
    scene.actions([
      { label: 'Give Artem a titjob', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_10b.jpg');
    scene.text('"Let me take over," you tell Katja and she moves aside and let you take her place between Artem\'s legs.');
    scene.text('You then use your spit to make your breasts slippery before leaning down and wrapping them tightly around Artem\'s cock.');
    scene.text('You start sliding your breasts up and down along Artem\'s hard rod while Katja gets down next to you and helps you make your movements smooth.');
    // TODO-QSP: dynamic text: Artem starts moaning loudly. "Pleas stop <<$pcs_nickname>>, else you''ll make me...
    scene.text(`Artem starts moaning loudly. "Pleas stop ${((st as any).pcs_nickname || '')}, else you'll make me cum before I can fuck your pussies one more time."`);
    scene.text('You do as he says and let go of his cock.');
    qspCall(st, 'arousal', 'titjob', 2);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride Artem', goto: ['artem_katja_sex', 'first_time_ride', '1'] },
    ]);
  } },
    ]);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Ride Artem', goto: ['artem_katja_sex', 'first_time_ride', '1'] },
  ]);
  scene.build();
}

function enterFirstTimeRide(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_11.jpg');
  if (Number((s as any).locArgs?.[1] ?? 0) === 1) {
    scene.text('"You go first," Katja says and you climb onto his still extremely hard cock.');
  } else {
    scene.text('"Let\'s change position," Katja says, "Great, because I\'m getting tired!" Artem answers with a smile.');
    scene.text('"Why don\'t you lie down and we\'ll take care of you?" you suggest.');
    scene.text('He pulls out of Katja and lies on his back on the floor before you climb onto his still extremely hard cock.');
  }
  scene.text('You start to ride him while Katja sits next to you, one hand playing with your breast as the other teases her wet pussy.');
  qspCall(s, 'arousal', 'foreplay', (-3));
  qspCall(s, 'arousal', 'vaginal', 3);
  qspCall(s, 'stat', '');
  scene.text('After a short while, Artem stops you. "I want to fuck Katja\'s tight little pussy one more time before I cum."');
  // TODO-QSP: end
  scene.actions([
    { label: 'Katja\'s turn to ride Artem', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'foreplay_give', 3);
    qspCall(st, 'stat', '');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 11) + 10));
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_12.jpg');
    // TODO-QSP: 'You let Artem''s cock slide out of you and climb off of him as Katja takes your place '+iif(katjaQW...
    scene.text('You then grab her ass cheeks and help her ride Artem hard.');
    if (((st as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['simultanous_boys'] = 1;
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (10);
          if (((st as any).artemQW ?? 0)?.['confidence'] < 7) {
            ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (4);
          } else {
            if (((st as any).artemQW ?? 0)?.['confidence'] < 12) {
              ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (3);
            } else {
              if (((st as any).artemQW ?? 0)?.['confidence'] < 19) {
                ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
              } else {
                if (((st as any).artemQW ?? 0)?.['confidence'] === 19) {
                  ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = 20;
                }
              }
            }
          }
        } else {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (7);
          if (((st as any).artemQW ?? 0)?.['confidence'] < 14) {
            ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
          } else {
            if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
              ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
            }
          }
        }
      } else {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
        if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
          ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
        } else {
          if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
            ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
          }
        }
      }
      scene.text('Katja\'s moans get louder and louder, and after riding him for a few minutes she lets out a huge scream which leaves no doubt that she had an orgasm.');
      scene.text('"I\'m cumming!" Artems cries out and she quickly climbs off of him.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['horny'] === 0) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 30;
      }
      if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['simultanous_boys'] = 1;
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (5);
          if (((st as any).artemQW ?? 0)?.['confidence'] < 9) {
            ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (2);
          } else {
            if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
              ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
            }
          }
        } else {
          ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (3);
          if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
            ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
          }
        }
      } else {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (2);
        if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
          ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
        }
      }
      scene.text('Katja\'s moans get louder and louder, but after riding him for a few minutes, Artem cries out that he\'s about to cum and she quickly climbs off of him.');
    }
    if (((st as any).artemQW ?? 0)?.['threesome'] === 0) {
      ((st as any).artemQW = (st as any).artemQW ?? {})['threesome'] = 1;
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['Artem_pussy'] = 1;
    ((st as any).artemQW = (st as any).artemQW ?? {})['katja_threesome'] = 2;
    scene.actions([
      { label: 'Artem cums', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    qspCall(st, 'cum_call', 'face', 'A2', 1);
    qspCall(st, 'stat', '');
    (st as any).minut = ((st as any).minut ?? 0) + 3;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_13.jpg');
    scene.text('You and Katja quickly get on your knees in front of Artem just before his cum splatters over your faces. You guide his cock such that most of his cum ends up in Katja\'s mouth.');
    scene.text('She doesn\'t swallow and his cum is soon running out of her mouth and down his cock. When he finishes, you all start to clean up.');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
      scene.text('Artem looks at you and Katja. "That was really good. I feel completely satisfied. I hope I was good for you too, Katja?"');
    } else {
      scene.text('Artem looks at you and Katja. "That was fantastic! You\'re great at handling a cock, Katja!"');
    }
    if (((st as any).katjaQW ?? 0)?.['horny'] === 0) {
      if (((st as any).katjaQW ?? 0)?.['QWstage'] === 5) {
        ((st as any).katjaQW = (st as any).katjaQW ?? {})['came_during_first_time_with_artem'] = 1;
        if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
          scene.text('"That was fantastic! I was quite nervous since I hadn\'t taken anything big in my pussy before, but you managed not only to make my first time not too painful, you also gave me a fantastic orgasm. I could not have wished for my first time to be better," Katja replies.');
        } else {
          scene.text('"That was great. You managed not only to make my first time with a boy very good, but you also gave me a fantastic orgasm. I could not have wished for a better experience," Katja says.');
        }
      } else {
        // TODO-QSP: dynamic text: "That was great. You''re a great lover Artem, '+iif(katjaQW['simultanous_boys'] ...
        scene.text('"That was great. You\'re a great lover Artem, ' + ((((st as any).katjaQW ?? 0)?.['simultanous_boys'] === 1) ? ('not that I have that much much experience.') : (' and I have some experience')) + ' with men," Katja says.');
      }
    } else {
      scene.text('"It was good…" Katja says, but you can see that she\'s not completely satisfied. You choose not to bring it up.');
    }
    scene.text('You finish getting dressed up and collect your homework before you and Artem say goodbye to Katja and head home.');
    if (((st as any).npc_vag ?? 0)?.['A14'] === 0) {
      ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = 20;
    } else {
      if (((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
      if (2*((st as any).npc_vag ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
        ((st as any).npc_vag = (st as any).npc_vag ?? {})['A14'] = ((st as any).npc_vag['A14'] ?? 0) + (1);
      }
    }
    scene.actions([
      { label: 'Walk home', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
  }, goto: ['artem_katja_sex', 'first_time_walking_home'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterFirstTimeWalkingHome(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/going_home_with_artem.jpg');
  scene.text('As the two of you walk home, Artem talks about how much fun he had with you and Katja. While he doesn\'t get into details, he does wax on about how much he enjoyed having a threesome with her, thanking you several times for the nice surprise.');
  if (((s as any).artemQW ?? 0)?.['confidence'] >= 15) {
    if (((s as any).artemQW ?? 0)?.['nush3some'] >= 3) {
      scene.text('As you\'re nearing your building, he looks over at you and smiles. "So you think she would be up for it again? I\'d love to do it again."');
      scene.text('You can see he\'s about to ask something more. "You know what would be even more fun? If Nush wanted to join in as well."');
      scene.text('You\'re surprised when it hits you that he\'s asking for a three girl foursome. "Really?"');
      scene.text('He shrugs a little with a confident smile. "Yeah… I mean why not?"');
      scene.text('You smile at him. "I\'ll think about it and if… if I decide to, I\'ll talk to them about it and let you know."');
      scene.text('He nods, but you can tell he was just hoping for you to say yes.');
    } else {
      scene.text('As you\'re nearing your building, he looks over at you and smiles. "So you think she would be up for it again? I\'d love to do it again."');
      scene.text('You smile at him. "I\'ll think about it and if… if I decide to, I\'ll talk to her about it and let you know."');
      scene.text('He nods, but you can tell he was just hoping for you to say yes.');
    }
  } else {
    if (((s as any).artemQW ?? 0)?.['nush3some'] >= 3) {
      scene.text('As you\'re nearing your building, he looks over at you shyly and blushes bright red. "I had a lot of fun… I wouldn\'t mind doing it again… if you… and her want too that is…" He stammers the last part, clearly wanting to, but also equally afraid of making you or Katja mad for even suggesting it.');
      scene.text('You can see he\'s about to ask something more and wait for him to finally work up the nerve to ask. "You think… Maybe… Her… and Nush… Might be interested in… You know…?"');
      scene.text('You\'re surprised when it hits you he\'s asking for a three girl foursome. "Really?"');
      scene.text('He blushes and looks down at his feet. "I mean… I don\'t know… Maybe if you guys… Wanted to that is…"');
      scene.text('You smile at him. "I\'ll think about it and if… if I decide to, I\'ll talk to them about it and let you know."');
      scene.text('He smiles and seems happy with the answer.');
    } else {
      scene.text('As you\'re nearing your building, he looks over at you shyly and blushes bright red. "I had a lot of fun… I wouldn\'t mind doing it again… if you… and her want too that is." He stammers the last part, clearly wanting to, but also equally afraid of making you or Katja mad for even suggesting it.');
      scene.text('You smile at him. "I\'ll think about it and if… if I decide to, I\'ll talk to her about it and let you know."');
      scene.text('He smiles and seems happy with the answer.');
    }
  }
  scene.text('The two of you finally get back to your apartment building, where Artem bids you farewell before heading into his apartment.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Alone', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enterHomeWorkAskKatja(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('Just as you reach Artem, Katja comes over to the two of you.');
  scene.text('"Are you going to do your homework? Why don\'t we go to my house to do it together, the three of us? We worked really well together last time," she says with a naughty wink in her eye.');
  // TODO-QSP: dynamic text: Artem looks at you a little excited, probably hoping for a repeat performance. "...
  scene.text(`Artem looks at you a little excited, probably hoping for a repeat performance. "Sounds like a good idea. What do you think, ${((s as any).pcs_nickname || '')}?"`);
  // TODO-QSP: end
  scene.actions([
    { label: 'Do homework with both Katja and Artem', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    scene.text('"Okay, let\'s all do it together," you say.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
    { label: 'Tell her you just want to go home with Artem', handler: (st: GameState) => {
    scene.text('"I really prefer to be alone with Artem right now," you tell Katja, who does not seem to take it well.');
    scene.text('"Don\'t be such a spoilsport! We\'ll do the homework faster together, and that means we have more time for fun," she says, trying to act as seductive as she can.');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"I\'m really sorry, but we really need some time alone Katja. Another time!" you say, making it clear that you\'re not going to change your mind.');
    scene.text('"Okay…" she accepts, but does not look happy about it, leaving you and Artem alone.');
    scene.text('Artem seems a bit confused by the whole interaction. "What was that about? We could have done homework together or… you know…" He leaves the last bit unsaid, but it\'s obvious that he was hoping for a repeat of last time.');
    scene.text('You just shake your head, slightly annoyed. "It was nothing. I just want to be with you alone is all."');
    scene.text('He nods and smiles at you as he wraps his arm around your shoulder and you walk to his place together.');
    scene.actions([
      { label: 'Go with Artem', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"You\'re right, Katja. Doing it together <i>will</i> make it faster. Let\'s go to your house," you relent.');
    scene.text('Katja\'s face lights up like it\'s Christmas, and Artem also seems satisfied with your decision.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHomeWorkAskArtem(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('You walk over to Artem and he smiles as you approach.');
  scene.text('When you meet him, he greets you. "Why don\'t we ask Katja to study with us today?"');
  scene.text('It\'s clear by his voice that he hopes the study session will turn out to be more than just studying, as has happened before.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Tell him you don\'t want to today', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 10;
    scene.text('You tell Artem you don\'t want to, and even if it was not what he hoped, he does not show much disappointment.');
    scene.text('You then walk to his apartment in silence.');
    scene.actions([
      { label: 'Go to Artem\'s home', handler: (st: GameState) => {
    qspCall(st, 'artem_chebotarev_schedule', 'force', 'home_bedroom');
    qspGoto(st, 'artemhome', 'artemroom');
  } },
    ]);
  } },
    { label: 'Agree and ask Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'live');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Sounds like a good idea," you answer, and the two of you walk over to Katja who is sitting and looking at her phone.');
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, hi Artem. What''s up?" she asks, looking up from her phon...
    scene.text(`"Hi ${((st as any).pcs_nickname || '')}, hi Artem. What's up?" she asks, looking up from her phone as you approach.`);
    scene.text('"Hi Katja, we were wondering if you would like to do homework with us today?" you ask.');
    scene.text('"Sure, sounds like a good idea! We had fun the last time, let\'s go to my house, nobody is home!" she answers.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHomeWorkAskPlayer(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big2.jpg');
  scene.text('"Why don\'t we ask Katja to study with us today? We had fun last time!" you ask him.');
  scene.text('He looks satisfied, probably remembering the threesome you had with Katja before.');
  scene.text('"Sure, lets do it!" he answers.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Go ask Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'live');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Sounds like a good idea," you answer, and the two of you walk over to Katja, who is sitting and looking at her phone.');
    // TODO-QSP: dynamic text: "Hi <<$pcs_nickname>>, hi Artem. What''s up!" she asks, looking up from her phon...
    scene.text(`"Hi ${((st as any).pcs_nickname || '')}, hi Artem. What's up!" she asks, looking up from her phone as you approach.`);
    scene.text('"Hi Katja, we where wondering if you would like to do homework with us today?" you ask.');
    scene.text('"Sure, sounds like a good idea! We had fun the last time! Let\'s go to my house, nobody is home!" she answers.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHomeWorkAskKatjaNoArtem(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('As you walk over to Katja, you see that her face is as red as a tomato and that she has problems keeping her body at rest, clear signs that she\'s very horny.');
  if (((s as any).katjaQW ?? 0)?.['slut'] >= 100) {
    // TODO-QSP: dynamic text: She confirms it immediately when you arrive. "Hi <<$pcs_nickname>>! Why don''t w...
    scene.text(`She confirms it immediately when you arrive. "Hi ${((s as any).pcs_nickname || '')}! Why don't we do our homework with Artem, and have him fuck us afterwards?"`);
  } else {
    // TODO-QSP: dynamic text: She confirms it immediately when you arrive. "Hi <<$pcs_nickname>>! Why don''t w...
    scene.text(`She confirms it immediately when you arrive. "Hi ${((s as any).pcs_nickname || '')}! Why don't we do our homework with Artem, and maybe have some fun with him afterwards?"`);
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'agree', handler: (st: GameState) => {
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    scene.text('"Okay, let\'s go ask Artem," you answer and walk over to Artem, who is standing on the other side of the school courtyard.');
    scene.text('When he sees you and Katja, he smiles. "What can I do for the two of you?"');
    scene.text('"We were wondering if you wanted to do your homework with the two of us today?" you ask, while Katja nods in agreement.');
    scene.text('"Sure, we had fun last time. Let\'s go," Artem answers.');
    scene.text('"Great! Let\'s go to my house. Nobody else is home right now," Katja says, barely able to hide her excitement.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
    { label: 'Tell her you want to hang out with her', handler: (st: GameState) => {
    scene.text('"I\'d really prefer to just hang out with you," you tell her, which she does not take well.');
    scene.text('"Don\'t be such a spoilsport! We\'ll do our homework faster together, and that means we have more time for fun…" she says, trying to act as seductive as she can.');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m really sorry, but not today. I just want to be with you. We can hang out with Artem another time," you say, making it clear that you\'re not going to change your mind.');
    scene.text('"Okay," she says, but doesn\'t look happy about it. "So what do you want to do?"');
    scene.actions([
      { label: 'Hangout', goto: ['katjaEV', 'kathan'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'like');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'love');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('"You\'re right, Katja. Doing together <i>will</i> make it faster. Let\'s ask Artem," you relent, which results in Katja looking extremely happy and a little more confident.');
    scene.text('you walk over to Artem, who is standing on the other side of the school courtyard. When he sees you and Katja, he smiles. "What can I do for the two of you?"');
    scene.text('"We were wondering if you wanted to do your homework with the two of us today?" you ask, while Katja nods in agreement.');
    scene.text('"Sure, we had fun last time. Let\'s go," he answers.');
    scene.text('"Great! Let\'s go to my house. Nobody else is home right now," Katja says, barely able to hide her excitement.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
    ]);
  } },
  ]);
  scene.build();
}

function enterHomeWorkAskPlayerKatja(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 1;
  qspCall(s, 'stat', '');
  scene.img('images/characters/shared/headshots_main/big14.jpg');
  scene.text('"Why don\'t we ask Artem to study with us today? I will be willoing to share him with you afterwards!" you ask Katja.');
  if (((s as any).katjaQW ?? 0)?.['horny'] < 30) {
    scene.text('"We can go do out homework with him. But I\'m not up for any funny business with him today" Katja answers.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['horny'] < (Math.floor(Math.random() * 31) + 30)) {
      scene.text('"Sure, but I don\'t think I\'m up for anything more than just doing homework" Katja answers.');
    } else {
      scene.text('"Sure, we had fun last time, so let\'s do our homework together and see what else happens" Katja answers.');
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Go ask Artem', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'live');
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'like');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('you walk over to Artem standing on the other side of the school courtyard. When he sees you and Katja he smiles and says "what can I do for the two of you?"');
    scene.text('"We where wondering if you want to do your homework with the two of us today?" you ask, while Katja nods in agreement.');
    scene.text('"Sure, we had fun last time, let\'s go" Artem answers, "okay, let\'s go to my house, nobody else is home right now" Katja says.');
    scene.actions([
      { label: 'Walk to the Meynold\'s home', goto: ['artem_katja_sex', 'home_work'] },
    ]);
  } },
  ]);
  scene.build();
}

function enterHomeWork(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 10;
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/going_home_with_artem2.jpg');
  if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
    scene.text('You walk to the Meynold house mostly in silence. Artem is clearly still not very confident around women he don\'t know that well, even the ones he has already had sex with.');
    scene.text('Katja tries to get him to talk, but only when she turns to school stuff does she get any response.');
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] < 20) {
      scene.text('You walk to the Meynold house with Artem and Katja, chatting about school and other stuff as if they were old friends.');
    } else {
      scene.text('You walk to the Meynold house with Artem flirting overtly with Katja.');
      if (((s as any).katjaQW ?? 0)?.['horny'] >= 70) {
        scene.text('Katja responds in kind, flirting overtly with him. You\'re almost afraid that she\'ll drag him into the bushes to jump him immediately.');
      } else {
        scene.text('Katja appreciates the attention and responds well to his advances.');
      }
    }
  }
  // TODO-QSP: end
  scene.actions([
    { label: 'Start doing your homework', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 30;
    (st as any).lern = ((st as any).lern ?? 0) + ((Math.floor(Math.random() * 3) + 2));
    qspCall(st, 'exp_gain', 'intel', (Math.floor(Math.random() * 2) + 0));
    qspCall(st, 'exp_gain', 'prcptn', (Math.floor(Math.random() * 2) + 0));
    if (((st as any).lernHome ?? 0) >= 1) {
      qspCall(st, 'grades', 'homework', 'school', 'yes', 1, 3, 80);
    }
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/first_time_1.jpg');
    scene.text('When you arrive at the Meynold house, Katja lets you in and shows you to the kitchen.');
    scene.text('You then sit down, pull out your school books, and begin a lively study session.');
    scene.text('AFter about half an hour, you have finished the homework for today.');
    scene.text('"That\'s it, we\'re so prepared that the teachers can throw anything at us and we\'ll knock it out!" Artem proclaims.');
    if (((st as any).katjaQW ?? 0)?.['horny'] >= (Math.floor(Math.random() * 41) + 60)) {
      scene.text('"Why don\'t we go to my room to relax a little?" Katja says.');
      scene.text('By the way her eyes are eating up Artem\'s crotch, it\'s clear that there isn\'t going to be much relaxing at all.');
      if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
        scene.text('Artem looks at you for confirmation, not seeming to be completely sure what her intentions are, but also ready to have a repeat performance.');
      } else {
        // TODO-QSP: dynamic text: "That sounds nice, but it''s up to you, <<$pcs_nickname>>," Artem says, but it''...
        scene.text(`"That sounds nice, but it's up to you, ${((st as any).pcs_nickname || '')}," Artem says, but it's clear he's hoping for a repeat performance.`);
      }
      scene.actions([
        { label: 'Go to Katja\'s room for a threesome', goto: ['artem_katja_sex', 'after_home_work_start'] },
        { label: 'Tell Katja that you have to leave', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'npc_relationship', 'modify', 'A2', 'love');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m sorry Katja, but we have to run. Maybe some other time," you tell her, but the horny girl is clearly not accepting that.');
    // TODO-QSP: dynamic text: "Come on <<$pcs_nickname>> don''t be such a bore, I''m sure that you and Artem h...
    scene.text(`"Come on ${((st as any).pcs_nickname || '')} don't be such a bore, I'm sure that you and Artem have time to entertain me a little longer. I don't think whatever you are supposed to do can't wait until after we have a little fun," Katja says, really pulling out all her seduction tricks.`);
    scene.text('Artem looks on, clearly having caught on that Katja wants sex, but waiting for you to decide.');
    qspCall(st, 'willpower', 'sex', 'resist', 'easy');
    if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Stand firm', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'hate');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"I\'m really sorry, but we really have to run. Another time Katja," you say and hurry to pack up your school stuff, with Artem doing the same.');
    // TODO-QSP: 'You then quickly leave a fuming Katja and wonder how long she''ll stay mad,'+iif( katjaQW['masturba...
    scene.actions([
      { label: 'Leave with Artem', goto: ['artem_katja_sex', 'going_artem_after_homework_no_sex'] },
    ]);
  } },
      ]);
    }
    scene.actions([
      { label: 'Relent', handler: (st: GameState) => {
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) + (2);
    qspCall(st, 'willpower', 'pay', 'resist');
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"You\'re right Katja, we\'re not in that much of a hurry… We can keep you company for a little while longer…" you say.');
    scene.text('Katja\'s face lights up like it\'s Christmas, and Artem also seems satisfied with your decision.');
    scene.actions([
      { label: 'Go to Katja\'s room for a threesome', goto: ['artem_katja_sex', 'after_home_work_start'] },
    ]);
  } },
    ]);
  } },
      ]);
    } else {
      scene.actions([
        { label: 'Try to suggest to Katja that you have a threesome', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('You lean into Katja\'s ear.');
    scene.text('"Why don\'t we take Artem to your room and have some fun with him?" you whisper.');
    if (((st as any).katjaQW ?? 0)?.['horny'] > (Math.floor(Math.random() * 41) + 40)) {
      scene.text('Katja looks at Artem, who is packing up his stuff, before nodding. "Okay. I had fun last time."');
      scene.text('"Why don\'t we go to Katja\'s room to relax a little?" you loudly say.');
      scene.text('"Sounds like a good idea!" Katja quickly adds, ');
      scene.text('Artem looks a little surprised, clearly not completely sure on what\'s going on, but he doesn\'t complain and you finish packing your stuff and leave for her room.');
      scene.actions([
        { label: 'Go to Katja\'s room for a threesome', goto: ['artem_katja_sex', 'after_home_work_start'] },
      ]);
    } else {
      scene.text('"I really don\'t feel like sex today," Katja says,');
      if (((st as any).katjaQW ?? 0)?.['horny'] > 60) {
        qspCall(st, 'willpower', 'sex', 'force', 'easy');
      } else {
        if (((st as any).katjaQW ?? 0)?.['horny'] > 30) {
          qspCall(st, 'willpower', 'sex', 'force', 'medium');
        } else {
          qspCall(st, 'willpower', 'sex', 'force', 'hard');
        }
      }
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Convince her', handler: (st: GameState) => {
    st.scene = { ...st.scene, mainText: String((st as any).noWillpower || ''), curActs: [] };
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Convince her', handler: (st: GameState) => {
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    if (((st as any).katjaQW ?? 0)?.['horny'] <= 30) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    }
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'npc_relationship', 'modify', 'A14', 'dislike');
    qspCall(st, 'stat', '');
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    scene.text('"Come on Katja, don\'t be such a bore! You had fun the last time and I\'m sure that tight pussy of yours is begging to be stuffed by a big hard cock," you whisper to her.');
    scene.text('She does not look completely convinced. "Okay, you get your way."');
    scene.text('"Why don\'t we go to Katja\'s room to relax a little?" you loudly say, with Katja hesitantly nodding.');
    scene.text('Artem looks a little surprised, clearly not completely sure on what\'s going on, but he doesn\'t complain and you finish packing your stuff and leave for her room.');
    scene.actions([
      { label: 'Go to Katja\'s room for a threesome', goto: ['artem_katja_sex', 'after_home_work_start'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Leave with Artem', goto: ['artem_katja_sex', 'going_artem_after_homework_no_sex'] },
      ]);
    }
  } },
        { label: 'Leave with Artem', goto: ['artem_katja_sex', 'going_artem_after_homework_no_sex'] },
      ]);
    }
  } },
  ]);
  scene.build();
}

function enterGoingArtemAfterHomeworkNoSex(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 15;
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/going_home_with_artem.jpg');
  scene.text('Once you finish doing your homework together, Artem checks the time and mentions he needs to get home soon. You and Artem gather up your books, say goodbye to Katja, and head out.');
  scene.text('Once you get outside, the two of you walk back to your apartment building, but you can tell he\'s a little disappointed. He was likely expecting a repeat of last time, but he doesn\'t say anything. He mostly just talks about the school work you guys did together and what you all learned, as well as how much he enjoyed studying together. After you reach his apartment door, he gives you a quick kiss before heading inside.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Leave Artem\'s door', goto: ['pod_ezd', 'etaj_1'] },
  ]);
  scene.build();
}

function enterAfterHomeWorkStart(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 6;
  qspCall(s, 'npcStat', 'A2');
  qspCall(s, 'npcStat', 'A14', 'a');
  qspCall(s, 'npc_relationship', 'modify', 'A14', 'love');
  qspCall(s, 'npc_relationship', 'modify', 'A2', 'love');
  ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = Math.min(((s as any).katjaQW ?? 0)?.['horny'], 70);
  if (((s as any).artemQW ?? 0)?.['confidence'] < 10) {
    ((s as any).artemQW = (s as any).artemQW ?? {})['confidence'] = ((s as any).artemQW['confidence'] ?? 0) + (1);
  }
  qspCall(s, 'stat', '');
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_1.jpg');
  scene.text('As you get to Katja\'s room Artem, suddenly says, "I think I know how to answer the problem we couldn\'t solve. Just give me a minute," and without waiting for your answer, gets out his laptop and sits down in a chair starting to look up stuff on the net.');
  scene.text('You and Katja get onto the bed and she says, "Come on Artem, it can wait until later!" But he responds, "Just a moment, I almost have it!"');
  scene.text('You wait a little while, watching him work, and the moment turns into minutes. You turn to Katja and she looks at you, horny and frustrated.');
  scene.text('Then she loudly says, "Boys! They don\'t know what is good for them. If he doesn\'t want to be a part of it, we can do just fine without him." Pouting, she leans into you for a kiss.');
  // TODO-QSP: end
  scene.actions([
    { label: 'Makeout with Katja', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_2.jpg');
    scene.text('You lean into Katja and your mouths meet. Her tongue then hungrily enters your mouth and she starts to french kiss you deeply.');
    scene.text('She does not try to hide the sounds of your sloppy kissing, and soon you can\'t hear Artem typing on his computer anymore.');
    scene.text('Katja has noticed the same, and breaks off the kiss. "I think we got him," she whispers to you. "Let\'s get rid of our shirts."');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'arousal', 'kiss', 3, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Strip for Artem', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_3.jpg');
    // TODO-QSP: 'You turn towards Artem and slowly start to unbutton your shirt, exposing your '+iif($braworntype ='...
    scene.text('You see that Katja is doing the same, opening her shirt from the bottom slowly, revealing the underside of her ample C-cup breasts.');
    scene.text('You notice that she is not wearing a bra… That\'s not normal for her. The naughty girl must have removed it earlier in anticipation of what was to come.');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 10) {
      scene.text('Artem just sits there, staring with his laptop slowly gliding out of his hand. As it is about to fall, he notices and manages to grasp it in an awkward movement, then stows it away.');
      scene.text('You have a hard time not laughing, but see that Katja doesn\'t pays any heed to his clumsiness.');
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        scene.text('Artem puts his laptop away and enjoys the sight, clearly not embarrassed by staring at the naked breasts of Katja anymore.');
      } else {
        if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
          scene.text('Artem puts his laptop away and says, "Nice, very nice."');
        } else {
          // TODO-QSP: dynamic text: Artem puts his laptop away and says, "That''s it, show me what you got. '+iif($b...
          scene.text('Artem puts his laptop away and says, "That\'s it, show me what you got. \'+iif($braworntype =\'none\', \'No bras for me, very considerate.\', \'Why don\'t you also lose your bra, ' + ((st as any).pcs_nickname || '') + '?\')+\'"');
        }
      }
    }
    if (((st as any).braworntype ?? 0) !== 'none') {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 20) {
        scene.text('You follow Katja\'s lead, and when your shirt is off, you remove your bra.');
      } else {
        scene.text('You do as Artem suggests, and when your shirt is off, you remove your bra.');
      }
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'arousal', 'striptease', 3);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Lick Katja\'s breast', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_4.jpg');
    if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
      scene.text('You turn towards Katja and start to lick her full breast.');
      scene.text('"See this, Artem? Your girlfriend knows what tastes good. If you hadn\'t been so caught up in homework, it could have been you tasting it," Katja says to Artem.');
      scene.text('She then starts to moan very loudly, clearly exaggerated to prove a point. Artem just sits there, eating it all up with his eyes.');
    } else {
      // TODO-QSP: dynamic text: "Why don''t you taste Katja''s breast <<$pcs_nickname>>?" Artem says, more as a ...
      scene.text(`"Why don't you taste Katja's breast ${((st as any).pcs_nickname || '')}?" Artem says, more as a command than as a suggestion. You do as he says and start to lick Katja's full breast.`);
      if (((st as any).katjaQW ?? 0)?.['slut'] < 100) {
        scene.text('"So you like watching your girlfriend servicing other girls? Naughty boy…" Katja says to Artem, who just nods in agreement.');
      } else {
        scene.text('"So you think your girlfriend\'s a slut ready to taste other girls? Do you get off on seeing your girl getting used by others?" Katja asks Artem.');
        if (((st as any).artemQW ?? 0)?.['confidence'] >= 20  &&  ((st as any).artemQW ?? 0)?.['artem_dom'] >= 20) {
          scene.text('Artem laughs a bit at the question. "\'Used\' is a bit strong, but yeah, I like seeing my girl with other girls. Besides, she is a big girl and knows what she likes. Why do you like using other girls? I thought you were the one that liked getting used."');
        } else {
          if (((st as any).artemQW ?? 0)?.['confidence'] >= 20) {
            scene.text('Artem smiles smugly. "I like seeing my girl happy. If this makes her happy, then I\'m happy." Then he winks.');
          } else {
            if (((st as any).artemQW ?? 0)?.['confidence'] >= 10) {
              scene.text('Artem looks at the scene lustily. "Yeah, watching the two of you go at it is hot."');
            } else {
              scene.text('Artem blushes bright red and tries to stammer a response, obviously embarrassed. "I… I mean… that is…" You quickly take pity on him and interject. "He loves me and likes for me to be happy. Isn\'t that right, baby?" Artem relaxes a little and nods. "Yeah, I do." He looks at you with pure love in his eyes.');
            }
          }
        }
      }
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'arousal', 'foreplay_give', 3, ((st as any).npcID1 ?? 0), 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Involve Artem', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_5' + ((((st as any).katjaQW ?? 0)?.['slut'] >= 100) ? ('b') : ('a')) + '.jpg');
    if (((st as any).artemQW ?? 0)?.['confidence'] >= 20) {
      scene.text('"Okay, I think that it\'s time you two get over here. My cock needs some attention, too," Artem commands.');
    } else {
      if (((st as any).katjaQW ?? 0)?.['slut'] >= 100) {
        scene.text('"I think we have tortured Artem enough. I don\'t want to have to buy new pants for him, so I think we need to get his dick out before it get so hard, it breaks them," Katja says in a very sultry voice.');
      } else {
        scene.text('"We should not neglect my boyfriend, Katja…" you say after removing you mouth from her tit.');
      }
    }
    scene.text('You both then get off of the bed and get down on your knees in front of Artem.');
    if (((st as any).katjaQW ?? 0)?.['slut'] >= 100) {
      scene.text('"Take off your shirt," Katja commands as you approach and Artem does so.');
      scene.text('"So, let me feel if this is as big and hard as it looks," she says and sticks her arm down his pants.');
      scene.text('"Ooh, this is nice, so hard and big! This is going to stretch my tiny pussy, just like I like it," she comments as she stroke his cock through his pants.');
      qspCall(st, 'arousal', 'erotic_nudity', 3);
    } else {
      // TODO-QSP: iif( artemQW['confidence'] >= 15, '"Give me a kiss," Artem says', '"Give Artem a kiss, Katja," you t...
      scene.text('Meanwhile, you take your time to feel Artem\'s nice hard cock through his pants.');
      qspCall(st, 'arousal', 'foreplay_give', 3, ((st as any).npcID ?? 0), 'group');
    }
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Get his dick out', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_6.jpg');
    // TODO-QSP: dynamic text: You remove Artem''s pants and get his <<dick>> cm long and <<$dick_girth>> dick ...
    scene.text(`You remove Artem's pants and get his ${((st as any).dick || '')} cm long and ${((st as any).dick_girth || '')} dick out and start stroking it.`);
    scene.text('Katja moves her hand and starts to gently play with his balls, while you move your hand up and down his rock hard shaft.');
    scene.text('Artem is just sitting back, clearly feeling extremely good, but Katja wants to do more and says "Let\'s taste it."');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    qspCall(st, 'arousal', 'hj', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Suck his cock', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_7.jpg');
    scene.text('You move aside so that Katja can be next to you, and she takes one of his balls in her mouth and gently licks it. You then move up and let your wet mouth close around the head of his his cock.');
    scene.text('You move your head up and and down his rod while Katja licks his ball for a while, then switch positions.');
    scene.text('Artem is clearly enjoying it very much, and might be close to coming.');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = ((st as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 0));
    if (((st as any).npc_throat ?? 0)?.['A14'] < ((st as any).dick ?? 0)) {
      ((st as any).npc_throat = (st as any).npc_throat ?? {})['A14'] = ((st as any).npc_throat['A14'] ?? 0) + (1);
    }
    qspCall(st, 'arousal', 'bj', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'See if he has the willpower to resist coming', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_8.jpg');
    scene.text('You remove your mouth from his balls, and know you should stop teasing him if you want to get fucked.');
    scene.text('But you can\'t resist joining joining Katja, and you are now both licking the sides of the head of his cock.');
    if ((Math.floor(Math.random() * 10) + 0) < ((st as any).artemQW ?? 0)?.['confidence']) {
      (st as any).minut = ((st as any).minut ?? 0) + 2;
      scene.text('Artem steels his mind and says, "Okay girls, this is the best blow job I have ever gotten, but I need to fuck your pussies before I come, so on the the bed with you." He then gets up so you can\'t continue.');
      qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'group');
      qspCall(st, 'stat', '');
      scene.actions([
        { label: 'Move to the bed', goto: ['artem_katja_sex', 'after_home_work_bed'] },
      ]);
    } else {
      scene.text('Artem clearly can\'t hold it, so unless you stop Katja, he is going to come from the blowjob.');
      qspCall(st, 'arousal', 'bj', 1, ((st as any).npcID ?? 0), 'group');
      if (((st as any).artemQW ?? 0)?.['confidence'] > 1) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) - (1);
      }
      qspCall(st, 'willpower', 'bj', 'force', 'easy');
      if (((st as any).pcs_willpwr ?? 0) < ((st as any).will_cost ?? 0)) {
        scene.actions([
          { label: 'Stop Katja', handler: (st: GameState) => {
    // TODO-QSP: msg $noWillpower
  } },
        ]);
      } else {
        scene.actions([
          { label: 'Stop Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    qspCall(st, 'willpower', 'pay', 'force');
    ((st as any).katjaQW = (st as any).katjaQW ?? {})['dom'] = ((st as any).katjaQW['dom'] ?? 0) - (1);
    ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) - (1);
    qspCall(st, 'stat', '');
    scene.text('"Okay, Katja that\'s enough," you say as you remove you head from Artem\'s cock.');
    scene.text('"But it tastes so good!" she complains. "True, but if you want to feel it in your pussy, you need to let him rest a little," you explain.');
    scene.text('"Fine, I thought that he was made of stronger stuff," she says as she gets up, and you can clearly see that Artem\'s pride is a little hurt by her comment.');
    scene.actions([
      { label: 'Follow Katja', goto: ['artem_katja_sex', 'after_home_work_bed'] },
    ]);
  } },
        ]);
      }
      scene.actions([
        { label: 'Let Artem cum', handler: (st: GameState) => {
    // TODO-QSP: gs 'stat'
  }, goto: ['artem_katja_sex', 'after_home_work_premature_eruption'] },
      ]);
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
  } },
  ]);
  scene.build();
}

function enterAfterHomeWorkBed(s: GameState, scene: SceneBuilder): void {
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_9.jpg');
  // TODO-QSP: dynamic text: You and Katja take off your skirts'+iif($pantyworntype ! 'none', ' and panties,'...
  scene.text('You and Katja take off your skirts' + ((((s as any).pantyworntype ?? 0) !== 'none') ? (' and panties,') : (',')) + ' "Lay down on the bed with your head at the edge," she tells you.');
  scene.text('You do as she says and she gets on top of you in thr 69 position, putting her very wet pussy just in front of your mouth.');
  scene.text('She starts to lick your pussy, and you return the favor. For a couple of minutes, you eat each other out while Artem gets ready.');
  if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 20) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
    scene.text('When Artem has recovered, he walks over. "Katja, I\'m going to pound that tight little pussy of yours until you scream."');
    scene.text('He then slides his cock into her pussy, just above your face.');
  } else {
    if (((s as any).artemQW ?? 0)?.['confidence'] >= 20) {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 10));
      scene.text('When Artem has recovered, he walks over "I hope that pussy is nice and wet for me, Katja!"');
      scene.text('He then slides his cock into her pussy, just above your face.');
    } else {
      ((s as any).katjaQW = (s as any).katjaQW ?? {})['horny'] = ((s as any).katjaQW['horny'] ?? 0) + ((Math.floor(Math.random() * 6) + 5));
      scene.text('When you can see that Artem has recovered, you remove your mouth from Katja\'s pussy. "Come here, Artem. Katja needs your fat cock in her wet pussy."');
      scene.text('He walks over to the bed and positions his cock before Katja\'s soaked cunt. "I\'m going to put it in now."');
    }
  }
  if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
    ((s as any).katjaQW = (s as any).katjaQW ?? {})['slut'] = ((s as any).katjaQW['slut'] ?? 0) - (2);
    if (((s as any).artemQW ?? 0)?.['artem_dom'] >= 20) {
      scene.text('Katja let out a shriek of pain and he immediately stops.');
      scene.text('"Well that didn\'t take long. I didn\'t mean to actually hurt you. Sorry!" he says.');
    } else {
      scene.text('Katja let out a shriek of pain and he immediately stops.');
      scene.text('"I\'m so sorry!" he exclaims, clearly very concerned.');
    }
    if (((s as any).katjaQW ?? 0)?.['slut'] > 80) {
      scene.text('"Don\'t stop, I can take it, continue to pound me," Katja says. He then hesitantly starts to pick up the pace again.');
    } else {
      scene.text('"Don\'t be, just go slow," Katja says. He then hesitantly starts to pick up the pace again.');
    }
    scene.text('Katja buries her tongue in your pussy to hide any sounds of pain. She clearly doesn\'t want him to stop just because she\'s feeling a little pain.');
  } else {
    if (((s as any).katjaQW ?? 0)?.['slut'] > 80) {
      scene.text('"Ahhh, yes, pound me!!" Katja cries out in ecstacy, then continues to lick your pussy as he fucks her.');
    } else {
      scene.text('"Ahhh!" Katja moans, then continues to lick your pussy as he fucks her.');
    }
  }
  if (((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
    ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
  }
  if (2*((s as any).npc_vag ?? 0)?.['A14'] < ((s as any).dick ?? 0)) {
    ((s as any).npc_vag = (s as any).npc_vag ?? {})['A14'] = ((s as any).npc_vag['A14'] ?? 0) + (1);
  }
  qspCall(s, 'arousal', 'cuni', 5, ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'arousal', 'cuni_give', (-5), ((s as any).npcID1 ?? 0), 'group', 'lesbian');
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Artem continues to fuck Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 1;
    qspCall(st, 'stat', '');
    if (((st as any).katjaQW ?? 0)?.['horny'] >= 100) {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (4);
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['horny'] = 0;
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_10a.jpg');
      scene.text('After having her pussy pounded for a couple of minutes, Katja suddenly removes her mouth from your pussy and lets out a huge scream as she comes.');
      scene.text('You can feel her shaking all over as her orgasm continues, and after a short while, she whimpers. "Stop… please stop… I can\'t… I can\'t take anymore…"');
      scene.text('You stop licking her pussy and Artem withdraws his cock from her pussy. Katja collapses on you.');
      // TODO-QSP: dynamic text: "Guess I get to fuck you now, <<$pcs_nickname>>" Artem says as Katja rolls off o...
      scene.text(`"Guess I get to fuck you now, ${((st as any).pcs_nickname || '')}" Artem says as Katja rolls off of you.`);
    } else {
      ((st as any).katjaQW = (st as any).katjaQW ?? {})['slut'] = ((st as any).katjaQW['slut'] ?? 0) + (2);
      scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_10b.jpg');
      scene.text('After pounding Katja\'s pussy for a couple of minutes, Artem pulls out and says, "I want to fuck my girlfriend before I cum."');
      scene.text('"Sure, she IS your girlfriend," Katja says, but you can detect the disappointment of not having cum yet in her voice.');
      scene.text('She then get off of you and lies back on the bed next to you.');
    }
    scene.actions([
      { label: 'Get fucked', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_11.jpg');
    // TODO-QSP: dynamic text: "My legs are getting tired, so it''s time for you to do some work," Artem says a...
    scene.text(`"My legs are getting tired, so it's time for you to do some work," Artem says and lies down on the bed while his ${((st as any).dick || '')} cm shaft stands rigid, inviting you to climb on it.`);
    scene.text('Artem hold up his hands to support your legs as you sit down on his cock in reverse cowgirl.');
    scene.text('Katja then joins and start to lick your pussy as you begin to ride up and down Artem\'s cock.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'cuni', (-3), ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Ride Artem', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_12.jpg');
    scene.text('You ride up and down Artem\'s cock for several minutes, and the pace slowly increases until you\'re at last riding him so fast, the bed is shaking.');
    scene.text('Katja is not able to keep her tongue on your clit at this speed, so she changes to using her fingers.');
    qspCall(st, 'arousal', 'vaginal', 3, ((st as any).npcID ?? 0), 'group');
    qspCall(st, 'arousal', 'cuni', (-3), ((st as any).npcID1 ?? 0), 'group', 'lesbian');
    qspCall(st, 'stat', '');
    scene.text('"I\'m gonna cum!" Artem grunts.');
    scene.actions([
      { label: 'Artem is cumming', handler: (st: GameState) => {
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_13.jpg');
    scene.text('You hop off of his cock and just manage to get your head down to it before it erupts with several thick spurts of cum. Katja, on the side, milks it firmly with her hand.');
    scene.text('She continues to pump him for a while, cum continuing to come out over your pretty faces and in your mouths.');
    qspCall(st, 'cum_call', 'mouth', 'A2', 1);
    qspCall(st, 'cum_call', 'face', 'A2', 1);
    qspCall(st, 'stat', '');
    scene.actions([
      { label: 'Cleanup', handler: (st: GameState) => {
    qspCall(st, 'arousal', 'end');
    (st as any).cumspclnt = 1;
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_14.jpg');
    scene.text('After there isn\'t anymore cum coming from Artems\'s cock, you and Katja start to clean it with your mouths.');
    scene.text('She then proceeds to lick your face clean and shares the rest of the cum with you in a deep kiss.');
    if (((st as any).katjaQW ?? 0)?.['horny'] === 0) {
      if (((st as any).artemQW ?? 0)?.['confidence'] < 15) {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) + (1);
      }
      scene.text('"You are great, Artem, you made me cum so hard. You really knows how to use that big dick of yours," Katja says as she gets up and starts to put on her clothes.');
    } else {
      scene.text('"Thanks for the fuck Artem, you have a nice big dick," Katja says as she gets up and starts to put on her clothes, but you can clearly hear the frustration of not having cum beneath it.');
    }
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 20) {
      scene.text('"Thanks yourself. I always love fucking that tight little pussy." Artem says back to her as he reaches over and slaps her on the ass. "Next time, I\'d like to fuck that ass too."');
      if (((st as any).katjaQW ?? 0)?.['anal_quest'] >= 3) {
        scene.text('"I\'ll hold you to it, I love getting my ass destroyed," Katja says with a wink.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['anal_quest'] > 0) {
          scene.text('"I haven\'t done it yet, but I do want to try it," Katja answers.');
        } else {
          scene.text('"I don\'t know, haven\'t thought about it, maybe…" Katja mumbles, clearly embarrassed to talk about such stuff.');
        }
      }
    } else {
      if (((st as any).artemQW ?? 0)?.['confidence'] >= 10) {
        scene.text('"Thanks yourself. You have a nice, tight pussy. Always a joy to fuck it," Artem says back to her as you\'re all getting dressed.');
      } else {
        scene.text('"Thanks…" Artem mumbles back to her as you all are getting dressed.');
      }
    }
    scene.text('Once you\'re all dressed, he checks his phone. "I need to get going. I need to get home before dinner." He gathers up his laptop and puts in back in his backpack before looking at you. "Ready?"');
    scene.actions([
      { label: 'Leave with Artem', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 15;
    scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/going_home_with_artem.jpg');
    scene.text('You smile at him and stand up. "Sure, stud." Then you turn to Katja. "Okay, we\'re going to head out. See you later."');
    scene.text('"See you later, guys," she says and waves goodbye to you.');
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 20  ||  ((st as any).artemQW ?? 0)?.['confidence'] >= 20) {
      scene.text('He wraps his arm confidently around you. "Later, Katja." With that, he leads you out of her house. The two of you walk back to your apartment building, talking about what just happened. Artem has come a long way. His confidence and dominance is really soaring! He\'s come a long way from the shy nerd he used to be.');
      scene.text('Once you get to his apartment, he gives you a kiss before heading inside.');
    } else {
      if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 10  ||  ((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
        scene.text('He waits for you at her bedroom door. Once you catch up to him, he says, "Bye Katja, I had fun."');
        scene.text('As you walk back to your apartment building, you talk about what just happened. Artem is more confident in himself and around girls now, no longer the shy nerd he used to be. Once you get to his apartment, he gives you a kiss before heading inside.');
      } else {
        scene.text('He blushes at your words, gives Katja an awkward little wave, then hurries from her room. "I\'ll wait outside for you," he quickly blurts out while he rushes away, leaving you and Katja to share a look.');
        scene.text('Once you get outside, the two of you walk back to your apartment building. He keeps the topic on needing to finish the homework the three of you didn\'t do after dinner. After you reach his apartment door, he gives you a quick kiss before heading inside.');
      }
    }
    scene.actions([
      { label: 'Leave Artem\'s door', goto: ['pod_ezd', 'etaj_1'] },
    ]);
  } },
      { label: 'Stay with Katja', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 5;
    scene.img('images/characters/shared/headshots_main/big2.jpg');
    scene.text('You shake your head. "No, I\'m going to stay with Katja."');
    if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 20  ||  ((st as any).artemQW ?? 0)?.['confidence'] >= 20) {
      scene.text('He glances at you and smiles. "Okay babe, you girls have fun."');
      scene.text('With that, he walks out of Katja\'s room and heads home.');
    } else {
      if (((st as any).artemQW ?? 0)?.['artem_dom'] >= 10  ||  ((st as any).artemQW ?? 0)?.['confidence'] >= 15) {
        scene.text('He glances at you and smiles. "Okay babe, uh… I guess I\'ll see you later then."');
        scene.text('He walks over and gives you a kiss. Once he breaks it, he walks out of Katja\'s room and heads home.');
      } else {
        ((st as any).artemQW = (st as any).artemQW ?? {})['confidence'] = ((st as any).artemQW['confidence'] ?? 0) - (1);
        ((st as any).artemQW = (st as any).artemQW ?? {})['artem_dom'] = ((st as any).artemQW['artem_dom'] ?? 0) - (1);
        scene.text('He looks a bit crestfallen and glances at Katja for a moment before looking back at you. "Oh… okay babe, if you want… Sure I guess… Uh… I guess I\'ll see you later then…"');
        scene.text('He walks over and gives you an awkward quick kiss, seeming to blush a little as Katja watches before hurrying out of the room, almost dropping his backpack on the way out the door.');
      }
    }
    scene.actions([
      { label: 'Talk with Katja about the sex', handler: (st: GameState) => {
    (st as any).minut = ((st as any).minut ?? 0) + 2;
    scene.img('images/characters/shared/headshots_main/big14.jpg');
    if (((st as any).katjaQW ?? 0)?.['horny'] > 0) {
      // TODO-QSP: dynamic text: "I''m sorry, <<$pcs_nickname>>. I know he''s your boyfriend, and he does have a ...
      scene.text(`"I'm sorry, ${((st as any).pcs_nickname || '')}. I know he's your boyfriend, and he does have a nice cock, but he needs to learn to pay better attention to his sex partners. I know he wanted to fuck you, but I didn't get to cum," she says, radiating frustration.`);
      scene.actions([
        { label: 'Help Katja get the orgasm she deserves', goto: ['KatjaEvDin', 'kiss'] },
        { label: 'Talk about something else', goto: ['katjaHomeTalk', 'chat'] },
      ]);
    } else {
      // TODO-QSP: dynamic text: "That''s a great boyfrind you have, '+iif(katjaQW['slut'] >= 100, 'He hammered m...
      scene.text('"That\'s a great boyfrind you have, ' + ((((st as any).katjaQW ?? 0)?.['slut'] >= 100) ? ('He hammered my pussy so good, I came until I saw stars.') : ('He made me feel great, and I had a huge orgasm')) + ' We should invite him again some other time," Katja says.');
      scene.text('"I\'m aware that you came very hard. In fact, I think that all of Pav knows you had an orgasm with all your screaming," you tease.');
      if (((st as any).katjaQW ?? 0)?.['slut'] >= 100) {
        scene.text('"Well having orgasms is nothing to be ashamed of. Guys brag about cumming all the time, so we girls should be able to, too!" Katja responds.');
      } else {
        if (((st as any).katjaQW ?? 0)?.['slut'] >= 75) {
          scene.text('"I\'m not that loud!" Katja complains, not so much mad as a little embarrassed.');
        } else {
          scene.text('Katja doesn\'t say anything, but her face turns completely red. It\'s clear that she mostly just wants to hide from the shame.');
        }
      }
      scene.actions([
        { label: 'Talk about something else', goto: ['katjaHomeTalk', 'chat'] },
      ]);
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
  } },
  ]);
  scene.build();
}

function enterAfterHomeWorkPrematureEruption(s: GameState, scene: SceneBuilder): void {
  (s as any).minut = ((s as any).minut ?? 0) + 2;
  scene.img('images/characters/pavlovsk/school/boy/artem/sex/katja/after_home_work_13.jpg');
  scene.text('Artem can\'t hold it anymore and comes in several thick spurts all over the faces of you and Katja.');
  scene.text('"That was quick," Katja says and Artem looks extremely embarrassed when he is finished coming.');
  scene.text('"Give him a little rest and I\'m sure he\'ll ready to go again," you say, then start to slowly lick the cum off of Katja\'s face.');
  scene.text('You and Katja spend the next couple of minutes slowly using your tongues to clean off Artem\'s cum, occasionally sharing some of it in a kiss.');
  scene.text('You try to make it look really sexy and it seems to be working because, after a few minutes, Artem\'s cock is hard again and he stands up ready to join you again.');
  qspCall(s, 'arousal', 'kiss', 3, 'lesbian');
  qspCall(s, 'cum_call', 'mouth', 'A2', 1);
  qspCall(s, 'cum_call', 'face', 'A2', 1);
  qspCall(s, 'stat', '');
  // TODO-QSP: end
  scene.actions([
    { label: 'Move to the bed', handler: (st: GameState) => {
    (st as any).cumspclnt = 1;
    qspCall(st, 'cum_cleanup', '');
    qspCall(st, 'stat', '');
    qspGoto(st, 'artem_katja_sex', 'after_home_work_bed');
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
    case 'first_time_titjob':
      enterFirstTimeTitjob(s, scene);
      break;
    case 'first_time_pussy':
      enterFirstTimePussy(s, scene);
      break;
    case 'first_time_next':
      enterFirstTimeNext(s, scene);
      break;
    case 'first_time_on_table':
      enterFirstTimeOnTable(s, scene);
      break;
    case 'first_time_katja_titjob':
      enterFirstTimeKatjaTitjob(s, scene);
      break;
    case 'first_time_ride':
      enterFirstTimeRide(s, scene);
      break;
    case 'first_time_walking_home':
      enterFirstTimeWalkingHome(s, scene);
      break;
    case 'home_work_ask_katja':
      enterHomeWorkAskKatja(s, scene);
      break;
    case 'home_work_ask_artem':
      enterHomeWorkAskArtem(s, scene);
      break;
    case 'home_work_ask_player':
      enterHomeWorkAskPlayer(s, scene);
      break;
    case 'home_work_ask_katja_no_artem':
      enterHomeWorkAskKatjaNoArtem(s, scene);
      break;
    case 'home_work_ask_player_katja':
      enterHomeWorkAskPlayerKatja(s, scene);
      break;
    case 'home_work':
      enterHomeWork(s, scene);
      break;
    case 'going_artem_after_homework_no_sex':
      enterGoingArtemAfterHomeworkNoSex(s, scene);
      break;
    case 'after_home_work_start':
      enterAfterHomeWorkStart(s, scene);
      break;
    case 'after_home_work_bed':
      enterAfterHomeWorkBed(s, scene);
      break;
    case 'after_home_work_premature_eruption':
      enterAfterHomeWorkPrematureEruption(s, scene);
      break;
    default:
      enterDefault(s, scene);
      break;
  }
}

export const artem_katja_sex: LocationDef = {
  name: 'artem_katja_sex',
  title: 'You walk across the school courtyard to meet up with Artem, ',
  region: 'other',
  enter: enter,
};
